// Contact Information Constants
// This file contains all contact details used throughout the application
// Update these values to change contact information across the entire project

export const CONTACT_INFO = {
  // Business Details
  company: {
    name: "I-Games",
    description: "Leading provider of sports APIs and gaming solutions for modern businesses.",
    tagline: "Power Your Sports Platform with Our Complete API & Development Suite"
  },

  // Contact Methods
  email: {
    primary: "info@igames.cloud",
    support: "support@igames.cloud",
    sales: "sales@igames.cloud"
  },

  phone: {
    primary: "+1 (555) 123-4567",
    support: "+1 (555) 123-4568",
    international: "+91 932-600-0000"
  },

  // Social Media & Messaging
  social: {
    whatsapp: {
      number: "+919326000000",
      url: "https://wa.me/919326000000",
      displayText: "+91 932-600-0000"
    },
    telegram: {
      username: "igamescloud",
      url: "https://t.me/igamescloud",
      displayText: "@igamescloud"
    }
  },

  // Physical Address
  address: {
    street: "123 Business Park",
    city: "Tech Valley",
    state: "CA",
    zipCode: "94043",
    country: "USA",
    full: "123 Business Park, Tech Valley, CA 94043, USA"
  },

  // Business Hours
  businessHours: {
    timezone: "PST",
    weekdays: "9:00 AM - 6:00 PM",
    weekends: "10:00 AM - 4:00 PM",
    support: "24/7 Available"
  },

  // Website & Social Links
  links: {
    website: "https://igames.cloud",
    linkedin: "https://linkedin.com/company/igames-cloud",
    twitter: "https://twitter.com/igamescloud",
    facebook: "https://facebook.com/igamescloud",
    instagram: "https://www.instagram.com/igames.cloud",
    youtube: "https://youtube.com/@igamescloud"
  }
};

// Quick access helpers for common use cases
export const QUICK_CONTACT = {
  // For mailto links
  emailLink: `mailto:${CONTACT_INFO.email.primary}`,
  supportEmailLink: `mailto:${CONTACT_INFO.email.support}`,

  // For tel links
  phoneLink: `tel:${CONTACT_INFO.phone.primary}`,
  internationalPhoneLink: `tel:${CONTACT_INFO.phone.international}`,

  // For WhatsApp links
  whatsappLink: CONTACT_INFO.social.whatsapp.url,
  whatsappMessage: `${CONTACT_INFO.social.whatsapp.url}?text=Hello! I'm interested in your gaming solutions.`,

  // For Telegram links
  telegramLink: CONTACT_INFO.social.telegram.url,

  // Formatted display values
  displayPhone: CONTACT_INFO.phone.primary,
  displayWhatsApp: CONTACT_INFO.social.whatsapp.displayText,
  displayEmail: CONTACT_INFO.email.primary,
  displayAddress: CONTACT_INFO.address.full
};

// Contact form configuration
export const CONTACT_FORM_CONFIG = {
  emailEndpoint: CONTACT_INFO.email.primary,
  autoReplyFrom: CONTACT_INFO.email.support,
  subjects: {
    general: "General Inquiry - I-Games",
    support: "Technical Support - I-Games",
    sales: "Sales Inquiry - I-Games",
    partnership: "Partnership Opportunity - I-Games"
  }
};

export default CONTACT_INFO;