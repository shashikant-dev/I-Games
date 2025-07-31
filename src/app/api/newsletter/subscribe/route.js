import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import NewsletterSubscriber from '@/models/NewsletterSubscriber';

export async function POST(request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    await connectDB();

    // Check if email already exists
    const existingSubscriber = await NewsletterSubscriber.findOne({ email });
    if (existingSubscriber) {
      return NextResponse.json(
        { error: 'Email already subscribed' },
        { status: 409 }
      );
    }

    // Create new subscriber
    const subscriber = new NewsletterSubscriber({
      email,
      isActive: true,
      source: 'website'
    });

    await subscriber.save();

    return NextResponse.json(
      {
        message: 'Successfully subscribed to newsletter',
        data: { email: subscriber.email }
      },
      { status: 201 }
    );

  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}