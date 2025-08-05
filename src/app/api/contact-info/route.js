import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import ContactInfo from '@/models/ContactInfo';

export const revalidate = 3600; // Cache for 1 hour

export async function GET() {
  try {
    await connectToDatabase();

    // Get contact information
    const contactInfo = await ContactInfo.findOne({ type: 'main' });

    if (!contactInfo) {
      // Return default/fallback contact info if none exists in database
      return new NextResponse(
        JSON.stringify({
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
            },
            socialMedia: {
              facebook: 'https://facebook.com/igamescloud',
              twitter: 'https://twitter.com/igamescloud',
              linkedin: 'https://linkedin.com/company/igames-cloud',
              instagram: 'https://www.instagram.com/igames.cloud',
              youtube: 'https://youtube.com/@igamescloud',
              telegram: 'https://t.me/igamescloud'
            }
          }
        }),
        {
          status: 200,
          headers: {
            'Content-Type': 'application/json',
            'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400'
          }
        }
      );
    }

    return new NextResponse(
      JSON.stringify({
        data: contactInfo
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400'
        }
      }
    );

  } catch (error) {
    console.error('Error fetching contact info:', error);
    return new NextResponse(
      JSON.stringify({ error: 'Internal server error' }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
  }
}