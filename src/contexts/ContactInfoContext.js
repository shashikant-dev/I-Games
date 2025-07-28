'use client';

import { createContext, useContext, useState, useEffect, useRef } from 'react';
import { CONTACT_INFO } from '@/constants/contacts';

const ContactInfoContext = createContext();

export function ContactInfoProvider({ children }) {
  const [contactInfo, setContactInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const initialFetchDone = useRef(false);

  const fetchContactInfo = async () => {
    // Skip if initial fetch is already done
    if (initialFetchDone.current) return;

    try {
      setLoading(true);
      const response = await fetch('/api/contact-info', {
        next: { revalidate: 3600 } // Cache for 1 hour
      });

      if (response.ok) {
        const data = await response.json();
        setContactInfo(data.data);
        setError(null);
      } else {
        throw new Error('Failed to fetch contact info');
      }
    } catch (err) {
      console.error('Error fetching contact info:', err);
      setError(err.message);
      // Fallback to static info
      setContactInfo({
        companyName: CONTACT_INFO.company.name,
        email: CONTACT_INFO.email,
        phone: CONTACT_INFO.phone,
        address: CONTACT_INFO.address
      });
    } finally {
      setLoading(false);
      initialFetchDone.current = true;
    }
  };

  useEffect(() => {
    fetchContactInfo();
  }, []);

  // Create dynamic quick contact helpers
  const getQuickContact = () => {
    if (!contactInfo) {
      return {
        emailLink: `mailto:${CONTACT_INFO.email.primary}`,
        phoneLink: `tel:${CONTACT_INFO.phone.primary}`,
        whatsappLink: CONTACT_INFO.social.whatsapp.url,
        whatsappMessage: `${CONTACT_INFO.social.whatsapp.url}?text=Hello! I'm interested in your gaming solutions.`,
        telegramLink: CONTACT_INFO.social.telegram.url,
        displayPhone: CONTACT_INFO.phone.primary,
        displayWhatsApp: CONTACT_INFO.social.whatsapp.displayText,
        displayEmail: CONTACT_INFO.email.primary,
        displayAddress: CONTACT_INFO.address.full,
        socialMedia: {
          facebook: CONTACT_INFO.links.facebook,
          twitter: CONTACT_INFO.links.twitter,
          linkedin: CONTACT_INFO.links.linkedin,
          instagram: CONTACT_INFO.links.instagram,
          youtube: CONTACT_INFO.links.youtube,
          telegram: CONTACT_INFO.social.telegram.url
        }
      };
    }

    const whatsappNumber = (contactInfo.phone?.whatsapp || CONTACT_INFO.phone.primary).replace(/[^0-9]/g, '');

    return {
      emailLink: `mailto:${contactInfo.email?.primary || CONTACT_INFO.email.primary}`,
      phoneLink: `tel:${contactInfo.phone?.primary || CONTACT_INFO.phone.primary}`,
      whatsappLink: `https://wa.me/${whatsappNumber}`,
      whatsappMessage: `https://wa.me/${whatsappNumber}?text=Hello! I'm interested in your gaming solutions.`,
      telegramLink: contactInfo.socialMedia?.telegram || CONTACT_INFO.social.telegram.url,
      displayPhone: contactInfo.phone?.primary || CONTACT_INFO.phone.primary,
      displayWhatsApp: contactInfo.phone?.whatsapp || CONTACT_INFO.social.whatsapp.displayText,
      displayEmail: contactInfo.email?.primary || CONTACT_INFO.email.primary,
      displayAddress: contactInfo.address ?
        `${contactInfo.address.street}, ${contactInfo.address.city}, ${contactInfo.address.state} ${contactInfo.address.zipCode}, ${contactInfo.address.country}` :
        CONTACT_INFO.address.full,
      socialMedia: {
        facebook: contactInfo.socialMedia?.facebook || CONTACT_INFO.links.facebook,
        twitter: contactInfo.socialMedia?.twitter || CONTACT_INFO.links.twitter,
        linkedin: contactInfo.socialMedia?.linkedin || CONTACT_INFO.links.linkedin,
        instagram: contactInfo.socialMedia?.instagram || CONTACT_INFO.links.instagram,
        youtube: contactInfo.socialMedia?.youtube || CONTACT_INFO.links.youtube,
        telegram: contactInfo.socialMedia?.telegram || CONTACT_INFO.social.telegram.url
      }
    };
  };

  const value = {
    contactInfo,
    loading,
    error,
    refetch: fetchContactInfo,
    quickContact: getQuickContact()
  };

  return (
    <ContactInfoContext.Provider value={value}>
      {children}
    </ContactInfoContext.Provider>
  );
}

export function useContactInfo() {
  const context = useContext(ContactInfoContext);
  if (context === undefined) {
    throw new Error('useContactInfo must be used within a ContactInfoProvider');
  }
  return context;
}