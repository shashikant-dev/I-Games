'use client';
import { useLanguage } from '@/contexts/LanguageContext';
import Link from 'next/link';
import {
  FaBalanceScale,
  FaGlobe,
  FaShieldAlt,
  FaFileAlt,
  FaUserShield,
  FaClipboardCheck,
  FaHeadset
} from 'react-icons/fa';

export default function Compliance() {
  const { t } = useLanguage();

  return (
    <main className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8 pt-20">
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          {t('legal.compliance.title')}
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          {t('legal.compliance.subtitle')}
        </p>
      </div>

      <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden mb-8">
        <div className="p-6 sm:p-8">
          <div className="prose prose-blue dark:prose-invert max-w-none">
            <div className="flex items-center mb-6">
              <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full mr-4">
                <FaBalanceScale className="w-6 h-6 text-blue-600 dark:text-blue-300" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                {t('legal.compliance.overview.title')}
              </h2>
            </div>
            <p className="mb-6">
              {t('legal.compliance.overview.description')}
            </p>

            <div className="flex items-center mb-6">
              <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full mr-4">
                <FaGlobe className="w-6 h-6 text-blue-600 dark:text-blue-300" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                {t('legal.compliance.regulatory.title')}
              </h2>
            </div>
            <p className="mb-4">
              {t('legal.compliance.regulatory.description')}
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>{t('legal.compliance.regulatory.items.gdpr')}</li>
              <li>{t('legal.compliance.regulatory.items.ccpa')}</li>
              <li>{t('legal.compliance.regulatory.items.hipaa')}</li>
              <li>{t('legal.compliance.regulatory.items.pci')}</li>
              <li>{t('legal.compliance.regulatory.items.local')}</li>
            </ul>

            <div className="flex items-center mb-6">
              <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full mr-4">
                <FaShieldAlt className="w-6 h-6 text-blue-600 dark:text-blue-300" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                {t('legal.compliance.certifications.title')}
              </h2>
            </div>
            <p className="mb-4">
              {t('legal.compliance.certifications.description')}
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>{t('legal.compliance.certifications.items.iso27001')}</li>
              <li>{t('legal.compliance.certifications.items.soc2')}</li>
              <li>{t('legal.compliance.certifications.items.pcidss')}</li>
              <li>{t('legal.compliance.certifications.items.hipaa')}</li>
            </ul>

            <div className="flex items-center mb-6">
              <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full mr-4">
                <FaFileAlt className="w-6 h-6 text-blue-600 dark:text-blue-300" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                {t('legal.compliance.policies.title')}
              </h2>
            </div>
            <p className="mb-4">
              {t('legal.compliance.policies.description')}
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t('legal.compliance.policies.items.privacy')}
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-of-service"
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t('legal.compliance.policies.items.terms')}
                </Link>
              </li>
              <li>
                <Link
                  href="/security"
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t('legal.compliance.policies.items.security')}
                </Link>
              </li>
              <li>{t('legal.compliance.policies.items.data')}</li>
              <li>{t('legal.compliance.policies.items.acceptable')}</li>
            </ul>

            <div className="flex items-center mb-6">
              <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full mr-4">
                <FaUserShield className="w-6 h-6 text-blue-600 dark:text-blue-300" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                {t('legal.compliance.dataProtection.title')}
              </h2>
            </div>
            <p className="mb-4">
              {t('legal.compliance.dataProtection.description')}
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>{t('legal.compliance.dataProtection.items.dpo')}</li>
              <li>{t('legal.compliance.dataProtection.items.impact')}</li>
              <li>{t('legal.compliance.dataProtection.items.rights')}</li>
              <li>{t('legal.compliance.dataProtection.items.breach')}</li>
            </ul>

            <div className="flex items-center mb-6">
              <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full mr-4">
                <FaClipboardCheck className="w-6 h-6 text-blue-600 dark:text-blue-300" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                {t('legal.compliance.auditing.title')}
              </h2>
            </div>
            <p className="mb-4">
              {t('legal.compliance.auditing.description')}
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>{t('legal.compliance.auditing.items.internal')}</li>
              <li>{t('legal.compliance.auditing.items.external')}</li>
              <li>{t('legal.compliance.auditing.items.penetration')}</li>
              <li>{t('legal.compliance.auditing.items.vulnerability')}</li>
            </ul>

            <div className="flex items-center mb-6">
              <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full mr-4">
                <FaHeadset className="w-6 h-6 text-blue-600 dark:text-blue-300" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                {t('legal.compliance.contact.title')}
              </h2>
            </div>
            <p className="mb-6">
              {t('legal.compliance.contact.description')}
            </p>
          </div>
        </div>
      </div>

      <div className="text-center">
        <Link
          href="/"
          className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
          target="_self"
        >
          <span className="mr-2">←</span>
          {t('common.backToHome')}
        </Link>
      </div>
    </main>
  );
}