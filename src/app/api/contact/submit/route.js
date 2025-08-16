import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import ContactRequest from '@/models/ContactRequest';
import { sendEmail, generateContactFormEmail } from '@/lib/email';

export async function POST(request) {
  try {
    const { name, email, phone, company, service, message } = await request.json();

    // Validate required fields
    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required' },
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

    await connectToDatabase();

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

    // Send email notification to developer
    try {
      const formData = { name, email, phone, company, service, message };
      const { html, subject } = generateContactFormEmail(formData);

      const emailResult = await sendEmail({
        to: 'developer.shashikant@gmail.com',
        subject: subject,
        html: html,
        from: process.env.SMTP_FROM || process.env.SMTP_USER
      });

      if (!emailResult.success) {
        console.error('Failed to send email notification:', emailResult.error);
        // Don't fail the request if email fails, just log it
      } else {
        console.log('Contact form email sent successfully:', emailResult.messageId);
      }
    } catch (emailError) {
      console.error('Email notification error:', emailError);
      // Don't fail the request if email fails
    }

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