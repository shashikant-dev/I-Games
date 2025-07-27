import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import ContactInfo from '@/models/ContactInfo';

export async function GET() {
  try {
    await connectDB();

    // Get contact information
    const contactInfo = await ContactInfo.findOne();

    if (!contactInfo) {
      // Return default/fallback contact info if none exists in database
      return NextResponse.json({
        data: {
          companyName: 'I-Games',
          email: {
            primary: 'info@igames.cloud',
            support: 'support@igames.cloud',
            sales: 'sales@igames.cloud'
          },
          phone: {
            primary: '+44 7481 991080',
            secondary: '',
            whatsapp: '+44 7481 991080'
          },
          address: {
            street: '123 Business Park',
            city: 'Tech Valley',
            state: 'CA',
            country: 'USA',
            zipCode: '94043'
          }
        }
      });
    }

    return NextResponse.json({
      data: contactInfo
    });

  } catch (error) {
    console.error('Error fetching contact info:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}