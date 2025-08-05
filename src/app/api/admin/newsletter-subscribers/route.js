import connectToDatabase from '@/lib/mongodb';
import NewsletterSubscriber from '@/models/NewsletterSubscriber';
import { authenticateAdmin } from '@/lib/auth';
import { NextResponse } from 'next/server';

export async function GET(request) {
  try {
    await connectToDatabase();
    
    // Authenticate admin
    await authenticateAdmin(request);
    
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page')) || 1;
    const limit = parseInt(searchParams.get('limit')) || 10;
    const search = searchParams.get('search') || '';
    const isActive = searchParams.get('isActive');
    const source = searchParams.get('source') || '';
    const dateFrom = searchParams.get('dateFrom');
    const dateTo = searchParams.get('dateTo');
    const sortBy = searchParams.get('sortBy') || 'createdAt';
    const sortOrder = searchParams.get('sortOrder') || 'desc';
    
    // Build query
    let query = {};
    
    // Search functionality
    if (search) {
      query.$or = [
        { email: { $regex: search, $options: 'i' } },
        { name: { $regex: search, $options: 'i' } }
      ];
    }
    
    // Filter by active status
    if (isActive !== null && isActive !== undefined && isActive !== '') {
      query.isActive = isActive === 'true';
    }
    
    // Filter by source
    if (source) {
      query.source = source;
    }
    
    // Date range filter
    if (dateFrom || dateTo) {
      query.createdAt = {};
      if (dateFrom) {
        query.createdAt.$gte = new Date(dateFrom);
      }
      if (dateTo) {
        query.createdAt.$lte = new Date(dateTo + 'T23:59:59.999Z');
      }
    }
    
    // Calculate skip value for pagination
    const skip = (page - 1) * limit;
    
    // Sort object
    const sort = {};
    sort[sortBy] = sortOrder === 'desc' ? -1 : 1;
    
    // Execute query with pagination
    const [subscribers, totalCount, activeCount] = await Promise.all([
      NewsletterSubscriber.find(query)
        .sort(sort)
        .skip(skip)
        .limit(limit)
        .lean(),
      NewsletterSubscriber.countDocuments(query),
      NewsletterSubscriber.countDocuments({ isActive: true })
    ]);
    
    // Calculate pagination info
    const totalPages = Math.ceil(totalCount / limit);
    const hasNextPage = page < totalPages;
    const hasPrevPage = page > 1;
    
    return NextResponse.json({
      success: true,
      data: subscribers,
      pagination: {
        currentPage: page,
        totalPages,
        totalCount,
        hasNextPage,
        hasPrevPage,
        limit
      },
      stats: {
        activeCount,
        inactiveCount: totalCount - activeCount
      }
    });
    
  } catch (error) {
    console.error('Get newsletter subscribers error:', error);
    
    if (error.message === 'No token provided' || error.message === 'Invalid or expired token') {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }
    
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    await connectToDatabase();
    
    const { email, name, source = 'website' } = await request.json();
    
    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }
    
    // Check if subscriber already exists
    const existingSubscriber = await NewsletterSubscriber.findOne({ email: email.toLowerCase() });
    
    if (existingSubscriber) {
      if (existingSubscriber.isActive) {
        return NextResponse.json(
          { error: 'Email is already subscribed' },
          { status: 409 }
        );
      } else {
        // Reactivate if previously unsubscribed
        existingSubscriber.isActive = true;
        await existingSubscriber.save();
        
        return NextResponse.json({
          success: true,
          message: 'Successfully resubscribed to newsletter',
          data: existingSubscriber
        });
      }
    }
    
    // Create new subscriber
    const subscriber = new NewsletterSubscriber({
      email: email.toLowerCase(),
      name,
      source
    });
    
    await subscriber.save();
    
    return NextResponse.json({
      success: true,
      message: 'Successfully subscribed to newsletter',
      data: subscriber
    }, { status: 201 });
    
  } catch (error) {
    console.error('Create newsletter subscriber error:', error);
    
    if (error.code === 11000) {
      return NextResponse.json(
        { error: 'Email is already subscribed' },
        { status: 409 }
      );
    }
    
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 