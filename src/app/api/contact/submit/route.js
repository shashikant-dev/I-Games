import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import ContactRequest from '@/models/ContactRequest';

export async function POST(request) {
  try {
    const { name, email, phone, company, service, message } = await request.json();

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
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

    // Create new contact request
    const contactRequest = new ContactRequest({
      name,
      email,
      phone: phone || '',
      company: company || '',
      service: service || '',
      message,
      status: 'new',
      priority: 'medium',
      source: 'website',
      createdAt: new Date()
    });

    await contactRequest.save();

    return NextResponse.json(
      {
        message: 'Contact request submitted successfully',
        data: {
          id: contactRequest._id,
          name: contactRequest.name,
          email: contactRequest.email
        }
      },
      { status: 201 }
    );

  } catch (error) {
    console.error('Contact submission error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}