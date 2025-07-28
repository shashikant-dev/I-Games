import connectDB from '@/lib/mongodb';
import ContactInfo from '@/models/ContactInfo';
import { authenticateAdmin } from '@/lib/auth';
import { NextResponse } from 'next/server';

export async function GET(request) {
  try {
    await connectDB();

    // Authenticate admin
    await authenticateAdmin(request);

    const contactInfo = await ContactInfo.findOne({ type: 'main' }).lean();

    if (!contactInfo) {
      // Return default structure if no contact info exists
      return NextResponse.json({
        success: true,
        data: {
          type: 'main',
          companyName: '',
          email: {
            primary: '',
            support: '',
            sales: ''
          },
          phone: {
            primary: '',
            secondary: '',
            whatsapp: ''
          },
          address: {
            street: '',
            city: '',
            state: '',
            country: '',
            zipCode: ''
          },
          socialMedia: {
            facebook: '',
            twitter: '',
            linkedin: '',
            instagram: '',
            youtube: '',
            telegram: ''
          },
          businessHours: {
            monday: { open: '09:00', close: '18:00', isClosed: false },
            tuesday: { open: '09:00', close: '18:00', isClosed: false },
            wednesday: { open: '09:00', close: '18:00', isClosed: false },
            thursday: { open: '09:00', close: '18:00', isClosed: false },
            friday: { open: '09:00', close: '18:00', isClosed: false },
            saturday: { open: '09:00', close: '18:00', isClosed: false },
            sunday: { open: '09:00', close: '18:00', isClosed: true }
          },
          timezone: 'UTC'
        }
      });
    }

    return NextResponse.json({
      success: true,
      data: contactInfo
    });

  } catch (error) {
    console.error('Get contact info error:', error);

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

export async function PUT(request) {
  try {
    await connectDB();

    // Authenticate admin
    await authenticateAdmin(request);

    const updateData = await request.json();

    // Ensure type is set to 'main'
    updateData.type = 'main';

    // Update or create contact info
    const contactInfo = await ContactInfo.findOneAndUpdate(
      { type: 'main' },
      updateData,
      {
        new: true,
        upsert: true,
        runValidators: true,
        setDefaultsOnInsert: true
      }
    );

    return NextResponse.json({
      success: true,
      message: 'Contact information updated successfully',
      data: contactInfo
    });

  } catch (error) {
    console.error('Update contact info error:', error);

    if (error.message === 'No token provided' || error.message === 'Invalid or expired token') {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    if (error.name === 'ValidationError') {
      const validationErrors = Object.values(error.errors).map(err => err.message);
      return NextResponse.json(
        { error: 'Validation error', details: validationErrors },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}