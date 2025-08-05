import { NextResponse } from 'next/server';
import { verifyAuth } from '@/lib/auth';
import { saveImage } from '@/lib/upload';

export async function POST(request) {
  try {
    // Verify admin authentication
    const isAuthenticated = await verifyAuth(request);
    if (!isAuthenticated) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const formData = await request.formData();
    const file = formData.get('image');

    if (!file) {
      return NextResponse.json(
        { error: 'No file uploaded' },
        { status: 400 }
      );
    }

    const imagePath = await saveImage(file);

    return NextResponse.json({ url: imagePath });
  } catch (error) {
    console.error('Error uploading image:', error);
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}