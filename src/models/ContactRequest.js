import mongoose from 'mongoose';

const ContactRequestSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    trim: true
  },
  phone: {
    type: String,
    required: false,
    trim: true
  },
  company: {
    type: String,
    required: false,
    trim: true
  },
  service: {
    type: String,
    required: false,
    trim: true
  },
  subject: {
    type: String,
    required: false,
    trim: true,
    default: 'Contact Request'
  },
  message: {
    type: String,
    required: false,
  },
  status: {
    type: String,
    enum: ['new', 'in_progress', 'resolved', 'closed'],
    default: 'new'
  },
  priority: {
    type: String,
    enum: ['low', 'medium', 'high', 'urgent'],
    default: 'medium'
  },
  assignedTo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Admin',
    default: null
  },
  notes: {
    type: String,
    default: ''
  },
  source: {
    type: String,
    enum: ['website', 'email', 'phone', 'other'],
    default: 'website'
  }
}, {
  timestamps: true
});

// Index for better search performance
ContactRequestSchema.index({ name: 'text', email: 'text', phone: 'text', company: 'text', subject: 'text' });
ContactRequestSchema.index({ createdAt: -1 });
ContactRequestSchema.index({ status: 1 });

export default mongoose.models.ContactRequest || mongoose.model('ContactRequest', ContactRequestSchema);