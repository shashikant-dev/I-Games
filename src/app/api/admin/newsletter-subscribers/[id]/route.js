import connectToDatabase from '@/lib/mongodb';
import NewsletterSubscriber from '@/models/NewsletterSubscriber';
import { authenticateAdmin } from '@/lib/auth';
import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
  try {
    await connectToDatabase();
    
    // Authenticate admin
    await authenticateAdmin(request);
    
    const { id } = params;
    
    const subscriber = await NewsletterSubscriber.findById(id).lean();
    
    if (!subscriber) {
      return NextResponse.json(
        { error: 'Subscriber not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json({
      success: true,
      data: subscriber
    });
    
  } catch (error) {
    console.error('Get newsletter subscriber error:', error);
    
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

export async function PUT(request, { params }) {
  try {
    await connectToDatabase();
    
    // Authenticate admin
    await authenticateAdmin(request);
    
    const { id } = params;
    const updateData = await request.json();
    
    // Only allow certain fields to be updated
    const allowedFields = ['name', 'isActive', 'tags', 'preferences'];
    const filteredUpdateData = {};
    
    allowedFields.forEach(field => {
      if (updateData[field] !== undefined) {
        filteredUpdateData[field] = updateData[field];
      }
    });
    
    const subscriber = await NewsletterSubscriber.findByIdAndUpdate(
      id,
      filteredUpdateData,
      { new: true, runValidators: true }
    );
    
    if (!subscriber) {
      return NextResponse.json(
        { error: 'Subscriber not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json({
      success: true,
      message: 'Subscriber updated successfully',
      data: subscriber
    });
    
  } catch (error) {
    console.error('Update newsletter subscriber error:', error);
    
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

export async function DELETE(request, { params }) {
  try {
    await connectToDatabase();
    
    // Authenticate admin
    await authenticateAdmin(request);
    
    const { id } = params;
    
    const subscriber = await NewsletterSubscriber.findByIdAndDelete(id);
    
    if (!subscriber) {
      return NextResponse.json(
        { error: 'Subscriber not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json({
      success: true,
      message: 'Subscriber deleted successfully'
    });
    
  } catch (error) {
    console.error('Delete newsletter subscriber error:', error);
    
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