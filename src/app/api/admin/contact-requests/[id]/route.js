import connectDB from '@/lib/mongodb';
import ContactRequest from '@/models/ContactRequest';
import { authenticateAdmin } from '@/lib/auth';
import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
  try {
    await connectDB();
    
    // Authenticate admin
    await authenticateAdmin(request);
    
    const { id } = params;
    
    const contactRequest = await ContactRequest.findById(id)
      .populate('assignedTo', 'name email')
      .lean();
    
    if (!contactRequest) {
      return NextResponse.json(
        { error: 'Contact request not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json({
      success: true,
      data: contactRequest
    });
    
  } catch (error) {
    console.error('Get contact request error:', error);
    
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

export async function PUT(request, { params }) {
  try {
    await connectDB();
    
    // Authenticate admin
    const adminAuth = await authenticateAdmin(request);
    
    const { id } = params;
    const updateData = await request.json();
    
    // Only allow certain fields to be updated
    const allowedFields = ['status', 'priority', 'assignedTo', 'notes'];
    const filteredUpdateData = {};
    
    allowedFields.forEach(field => {
      if (updateData[field] !== undefined) {
        filteredUpdateData[field] = updateData[field];
      }
    });
    
    const contactRequest = await ContactRequest.findByIdAndUpdate(
      id,
      filteredUpdateData,
      { new: true, runValidators: true }
    ).populate('assignedTo', 'name email');
    
    if (!contactRequest) {
      return NextResponse.json(
        { error: 'Contact request not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json({
      success: true,
      message: 'Contact request updated successfully',
      data: contactRequest
    });
    
  } catch (error) {
    console.error('Update contact request error:', error);
    
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

export async function DELETE(request, { params }) {
  try {
    await connectDB();
    
    // Authenticate admin
    await authenticateAdmin(request);
    
    const { id } = params;
    
    const contactRequest = await ContactRequest.findByIdAndDelete(id);
    
    if (!contactRequest) {
      return NextResponse.json(
        { error: 'Contact request not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json({
      success: true,
      message: 'Contact request deleted successfully'
    });
    
  } catch (error) {
    console.error('Delete contact request error:', error);
    
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