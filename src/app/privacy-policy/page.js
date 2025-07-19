'use client';
import { useLanguage } from '@/contexts/LanguageContext';
import Link from 'next/link';
import { FaShieldAlt, FaLock, FaUserShield, FaClipboardList } from 'react-icons/fa';

export default function PrivacyPolicy() {
  const { t } = useLanguage();

  return (
    <main className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8 pt-20">
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          {t('legal.privacyPolicy.title')}
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          {t('legal.privacyPolicy.lastUpdated')}: {t('legal.privacyPolicy.date')}
        </p>
      </div>

      <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden mb-8">
        <div className="p-6 sm:p-8">
          <div className="prose prose-blue dark:prose-invert max-w-none">
            <div className="flex items-center mb-6">
              <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full mr-4">
                <FaShieldAlt className="w-6 h-6 text-blue-600 dark:text-blue-300" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                {t('legal.privacyPolicy.introduction.title')}
              </h2>
            </div>
            <p className="mb-6">
              {t('legal.privacyPolicy.introduction.description')}
            </p>

            <div className="flex items-center mb-6">
              <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full mr-4">
                <FaClipboardList className="w-6 h-6 text-blue-600 dark:text-blue-300" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                {t('legal.privacyPolicy.informationCollection.title')}
              </h2>
            </div>
            <p className="mb-4">
              {t('legal.privacyPolicy.informationCollection.description')}
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>{t('legal.privacyPolicy.informationCollection.items.personal')}</li>
              <li>{t('legal.privacyPolicy.informationCollection.items.usage')}</li>
              <li>{t('legal.privacyPolicy.informationCollection.items.technical')}</li>
              <li>{t('legal.privacyPolicy.informationCollection.items.business')}</li>
            </ul>

            <div className="flex items-center mb-6">
              <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full mr-4">
                <FaLock className="w-6 h-6 text-blue-600 dark:text-blue-300" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                {t('legal.privacyPolicy.dataUsage.title')}
              </h2>
            </div>
            <p className="mb-4">
              {t('legal.privacyPolicy.dataUsage.description')}
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>{t('legal.privacyPolicy.dataUsage.items.services')}</li>
              <li>{t('legal.privacyPolicy.dataUsage.items.communication')}</li>
              <li>{t('legal.privacyPolicy.dataUsage.items.improvement')}</li>
              <li>{t('legal.privacyPolicy.dataUsage.items.legal')}</li>
            </ul>

            <div className="flex items-center mb-6">
              <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full mr-4">
                <FaUserShield className="w-6 h-6 text-blue-600 dark:text-blue-300" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                {t('legal.privacyPolicy.dataProtection.title')}
              </h2>
            </div>
            <p className="mb-6">
              {t('legal.privacyPolicy.dataProtection.description')}
            </p>

            <div className="flex items-center mb-6">
              <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full mr-4">
                <FaShieldAlt className="w-6 h-6 text-blue-600 dark:text-blue-300" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                {t('legal.privacyPolicy.cookies.title')}
              </h2>
            </div>
            <p className="mb-6">
              {t('legal.privacyPolicy.cookies.description')}
            </p>

            <div className="flex items-center mb-6">
              <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full mr-4">
                <FaShieldAlt className="w-6 h-6 text-blue-600 dark:text-blue-300" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                {t('legal.privacyPolicy.thirdParty.title')}
              </h2>
            </div>
            <p className="mb-6">
              {t('legal.privacyPolicy.thirdParty.description')}
            </p>

            <div className="flex items-center mb-6">
              <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full mr-4">
                <FaShieldAlt className="w-6 h-6 text-blue-600 dark:text-blue-300" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                {t('legal.privacyPolicy.rights.title')}
              </h2>
            </div>
            <p className="mb-4">
              {t('legal.privacyPolicy.rights.description')}
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>{t('legal.privacyPolicy.rights.items.access')}</li>
              <li>{t('legal.privacyPolicy.rights.items.rectification')}</li>
              <li>{t('legal.privacyPolicy.rights.items.erasure')}</li>
              <li>{t('legal.privacyPolicy.rights.items.restriction')}</li>
              <li>{t('legal.privacyPolicy.rights.items.portability')}</li>
              <li>{t('legal.privacyPolicy.rights.items.objection')}</li>
            </ul>

            <div className="flex items-center mb-6">
              <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full mr-4">
                <FaShieldAlt className="w-6 h-6 text-blue-600 dark:text-blue-300" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                {t('legal.privacyPolicy.contact.title')}
              </h2>
            </div>
            <p className="mb-6">
              {t('legal.privacyPolicy.contact.description')}
            </p>
          </div>
        </div>
      </div>

      <div className="text-center">
        <Link
          href="/"
          className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
        >
          <span className="mr-2">←</span>
          {t('common.backToHome')}
        </Link>
      </div>
    </main>
  );
}