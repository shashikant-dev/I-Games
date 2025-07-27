import mongoose from 'mongoose';

const ContactInfoSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ['main'], // Can be extended later for multiple contact info types
    default: 'main',
    unique: true
  },
  companyName: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    primary: {
      type: String,
      required: true,
      lowercase: true,
      trim: true
    },
    support: {
      type: String,
      lowercase: true,
      trim: true
    },
    sales: {
      type: String,
      lowercase: true,
      trim: true
    }
  },
  phone: {
    primary: {
      type: String,
      required: true,
      trim: true
    },
    secondary: {
      type: String,
      trim: true
    },
    whatsapp: {
      type: String,
      trim: true
    }
  },
  address: {
    street: {
      type: String,
      required: true,
      trim: true
    },
    city: {
      type: String,
      required: true,
      trim: true
    },
    state: {
      type: String,
      required: true,
      trim: true
    },
    country: {
      type: String,
      required: true,
      trim: true
    },
    zipCode: {
      type: String,
      required: true,
      trim: true
    }
  },
  socialMedia: {
    facebook: String,
    twitter: String,
    linkedin: String,
    instagram: String,
    youtube: String
  },
  businessHours: {
    monday: { open: String, close: String, isClosed: { type: Boolean, default: false } },
    tuesday: { open: String, close: String, isClosed: { type: Boolean, default: false } },
    wednesday: { open: String, close: String, isClosed: { type: Boolean, default: false } },
    thursday: { open: String, close: String, isClosed: { type: Boolean, default: false } },
    friday: { open: String, close: String, isClosed: { type: Boolean, default: false } },
    saturday: { open: String, close: String, isClosed: { type: Boolean, default: false } },
    sunday: { open: String, close: String, isClosed: { type: Boolean, default: true } }
  },
  timezone: {
    type: String,
    default: 'UTC'
  }
}, {
  timestamps: true
});

export default mongoose.models.ContactInfo || mongoose.model('ContactInfo', ContactInfoSchema); 