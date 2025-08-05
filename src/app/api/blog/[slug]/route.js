import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import Blog from '@/models/Blog';

// GET /api/blog/[slug] - Get a single blog by slug
export async function GET(request, { params }) {
  try {
    await connectToDatabase();
    const blog = await Blog.findOne({
      slug: params.slug,
      isPublished: true
    });

    if (!blog) {
      return NextResponse.json(
        { error: 'Blog not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(blog);
  } catch (error) {
    console.error('Error fetching blog:', error);
    return NextResponse.json(
      { error: 'Failed to fetch blog' },
      { status: 500 }
    );
  }
}