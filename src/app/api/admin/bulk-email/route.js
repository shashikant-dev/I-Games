import connectToDatabase from '@/lib/mongodb';
import NewsletterSubscriber from '@/models/NewsletterSubscriber';
import { authenticateAdmin } from '@/lib/auth';
import { sendBulkEmail, generateBulkEmailTemplate } from '@/lib/email';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    await connectToDatabase();
    
    // Authenticate admin
    await authenticateAdmin(request);
    
    const { subject, content, recipientFilter = {} } = await request.json();
    
    if (!subject || !content) {
      return NextResponse.json(
        { error: 'Subject and content are required' },
        { status: 400 }
      );
    }
    
    // Build query to get subscribers based on filter
    let query = { isActive: true };
    
    // Apply additional filters if provided
    if (recipientFilter.tags && recipientFilter.tags.length > 0) {
      query.tags = { $in: recipientFilter.tags };
    }
    
    if (recipientFilter.source) {
      query.source = recipientFilter.source;
    }
    
    if (recipientFilter.frequency) {
      query['preferences.frequency'] = recipientFilter.frequency;
    }
    
    // Get subscribers
    const subscribers = await NewsletterSubscriber.find(query)
      .select('email name')
      .lean();
    
    if (subscribers.length === 0) {
      return NextResponse.json(
        { error: 'No active subscribers found matching the criteria' },
        { status: 400 }
      );
    }
    
    // Generate HTML email template
    const emailHtml = generateBulkEmailTemplate(content);
    
    // Send bulk email
    const results = await sendBulkEmail({
      emails: subscribers,
      subject,
      html: emailHtml
    });
    
    // Update last email sent for successful sends
    const successfulEmails = results.filter(result => result.success);
    const currentDate = new Date();
    
    if (successfulEmails.length > 0) {
      const successfulEmailAddresses = successfulEmails.map(result => result.email);
      
      await NewsletterSubscriber.updateMany(
        { email: { $in: successfulEmailAddresses } },
        { 
          $set: { lastEmailSent: currentDate },
          $inc: { emailsSent: 1 }
        }
      );
    }
    
    // Calculate statistics
    const stats = {
      totalRecipients: subscribers.length,
      successfulSends: successfulEmails.length,
      failedSends: results.filter(result => !result.success).length,
      successRate: ((successfulEmails.length / subscribers.length) * 100).toFixed(2)
    };
    
    return NextResponse.json({
      success: true,
      message: `Bulk email sent successfully to ${successfulEmails.length} out of ${subscribers.length} subscribers`,
      data: {
        stats,
        results: results.slice(0, 10) // Return only first 10 results to avoid large response
      }
    });
    
  } catch (error) {
    console.error('Bulk email error:', error);
    
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

// Get email statistics
export async function GET(request) {
  try {
    await connectToDatabase();
    
    // Authenticate admin
    await authenticateAdmin(request);
    
    const [
      totalSubscribers,
      activeSubscribers,
      recentSubscribers,
      subscribersWithEmails
    ] = await Promise.all([
      NewsletterSubscriber.countDocuments(),
      NewsletterSubscriber.countDocuments({ isActive: true }),
      NewsletterSubscriber.countDocuments({ 
        createdAt: { $gte: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000) }
      }),
      NewsletterSubscriber.countDocuments({ 
        emailsSent: { $gt: 0 }
      })
    ]);
    
    // Get subscriber growth data for last 12 months
    const monthlyStats = await NewsletterSubscriber.aggregate([
      {
        $match: {
          createdAt: { 
            $gte: new Date(Date.now() - 12 * 30 * 24 * 60 * 60 * 1000) 
          }
        }
      },
      {
        $group: {
          _id: {
            year: { $year: '$createdAt' },
            month: { $month: '$createdAt' }
          },
          count: { $sum: 1 }
        }
      },
      {
        $sort: { '_id.year': 1, '_id.month': 1 }
      }
    ]);
    
    return NextResponse.json({
      success: true,
      data: {
        overview: {
          totalSubscribers,
          activeSubscribers,
          inactiveSubscribers: totalSubscribers - activeSubscribers,
          recentSubscribers,
          subscribersWithEmails
        },
        monthlyGrowth: monthlyStats
      }
    });
    
  } catch (error) {
    console.error('Get email stats error:', error);
    
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