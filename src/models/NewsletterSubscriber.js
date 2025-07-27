import mongoose from 'mongoose';

const NewsletterSubscriberSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  name: {
    type: String,
    required: false,
    trim: true
  },
  isActive: {
    type: Boolean,
    default: true
  },
  source: {
    type: String,
    enum: ['website', 'api', 'import', 'manual'],
    default: 'website'
  },
  tags: [{
    type: String,
    trim: true
  }],
  unsubscribeToken: {
    type: String,
    unique: true
  },
  lastEmailSent: {
    type: Date,
    default: null
  },
  emailsSent: {
    type: Number,
    default: 0
  },
  preferences: {
    frequency: {
      type: String,
      enum: ['daily', 'weekly', 'monthly'],
      default: 'weekly'
    },
    categories: [{
      type: String,
      enum: ['news', 'updates', 'promotions', 'events']
    }]
  }
}, {
  timestamps: true
});

// Generate unsubscribe token before saving
NewsletterSubscriberSchema.pre('save', function(next) {
  if (!this.unsubscribeToken) {
    this.unsubscribeToken = require('crypto').randomBytes(32).toString('hex');
  }
  next();
});

// Index for better performance
NewsletterSubscriberSchema.index({ email: 1 });
NewsletterSubscriberSchema.index({ createdAt: -1 });
NewsletterSubscriberSchema.index({ isActive: 1 });

export default mongoose.models.NewsletterSubscriber || mongoose.model('NewsletterSubscriber', NewsletterSubscriberSchema); 