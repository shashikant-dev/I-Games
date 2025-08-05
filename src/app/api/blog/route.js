import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import Blog from '@/models/Blog';

// GET /api/blog - Get all published blogs
export async function GET() {
  try {
    await connectToDatabase();
    const blogs = await Blog.find({ isPublished: true })
      .select('title slug description bannerImage publishedDate')
      .sort({ publishedDate: -1 });

    return NextResponse.json(blogs);
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return NextResponse.json(
      { error: 'Failed to fetch blogs' },
      { status: 500 }
    );
  }
}