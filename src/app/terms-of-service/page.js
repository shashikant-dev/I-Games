'use client';
import { useLanguage } from '@/contexts/LanguageContext';
import Link from 'next/link';
import { FaGavel, FaFileContract, FaUserShield, FaExclamationTriangle, FaBalanceScale } from 'react-icons/fa';

export default function TermsOfService() {
  const { t } = useLanguage();

  return (
    <main className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8 pt-20">
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          {t('legal.termsOfService.title')}
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          {t('legal.termsOfService.lastUpdated')}: {t('legal.termsOfService.date')}
        </p>
      </div>

      <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden mb-8">
        <div className="p-6 sm:p-8">
          <div className="prose prose-blue dark:prose-invert max-w-none">
            <div className="flex items-center mb-6">
              <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full mr-4">
                <FaGavel className="w-6 h-6 text-blue-600 dark:text-blue-300" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                {t('legal.termsOfService.introduction.title')}
              </h2>
            </div>
            <p className="mb-6">
              {t('legal.termsOfService.introduction.description')}
            </p>

            <div className="flex items-center mb-6">
              <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full mr-4">
                <FaFileContract className="w-6 h-6 text-blue-600 dark:text-blue-300" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                {t('legal.termsOfService.serviceUse.title')}
              </h2>
            </div>
            <p className="mb-4">
              {t('legal.termsOfService.serviceUse.description')}
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>{t('legal.termsOfService.serviceUse.items.eligibility')}</li>
              <li>{t('legal.termsOfService.serviceUse.items.account')}</li>
              <li>{t('legal.termsOfService.serviceUse.items.accurate')}</li>
              <li>{t('legal.termsOfService.serviceUse.items.security')}</li>
            </ul>

            <div className="flex items-center mb-6">
              <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full mr-4">
                <FaExclamationTriangle className="w-6 h-6 text-blue-600 dark:text-blue-300" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                {t('legal.termsOfService.restrictions.title')}
              </h2>
            </div>
            <p className="mb-4">
              {t('legal.termsOfService.restrictions.description')}
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>{t('legal.termsOfService.restrictions.items.illegal')}</li>
              <li>{t('legal.termsOfService.restrictions.items.harmful')}</li>
              <li>{t('legal.termsOfService.restrictions.items.impersonation')}</li>
              <li>{t('legal.termsOfService.restrictions.items.infringement')}</li>
              <li>{t('legal.termsOfService.restrictions.items.interference')}</li>
            </ul>

            <div className="flex items-center mb-6">
              <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full mr-4">
                <FaBalanceScale className="w-6 h-6 text-blue-600 dark:text-blue-300" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                {t('legal.termsOfService.intellectualProperty.title')}
              </h2>
            </div>
            <p className="mb-6">
              {t('legal.termsOfService.intellectualProperty.description')}
            </p>

            <div className="flex items-center mb-6">
              <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full mr-4">
                <FaUserShield className="w-6 h-6 text-blue-600 dark:text-blue-300" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                {t('legal.termsOfService.userContent.title')}
              </h2>
            </div>
            <p className="mb-6">
              {t('legal.termsOfService.userContent.description')}
            </p>

            <div className="flex items-center mb-6">
              <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full mr-4">
                <FaGavel className="w-6 h-6 text-blue-600 dark:text-blue-300" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                {t('legal.termsOfService.termination.title')}
              </h2>
            </div>
            <p className="mb-6">
              {t('legal.termsOfService.termination.description')}
            </p>

            <div className="flex items-center mb-6">
              <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full mr-4">
                <FaGavel className="w-6 h-6 text-blue-600 dark:text-blue-300" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                {t('legal.termsOfService.disclaimer.title')}
              </h2>
            </div>
            <p className="mb-6">
              {t('legal.termsOfService.disclaimer.description')}
            </p>

            <div className="flex items-center mb-6">
              <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full mr-4">
                <FaGavel className="w-6 h-6 text-blue-600 dark:text-blue-300" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                {t('legal.termsOfService.limitation.title')}
              </h2>
            </div>
            <p className="mb-6">
              {t('legal.termsOfService.limitation.description')}
            </p>

            <div className="flex items-center mb-6">
              <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full mr-4">
                <FaGavel className="w-6 h-6 text-blue-600 dark:text-blue-300" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                {t('legal.termsOfService.governing.title')}
              </h2>
            </div>
            <p className="mb-6">
              {t('legal.termsOfService.governing.description')}
            </p>

            <div className="flex items-center mb-6">
              <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full mr-4">
                <FaGavel className="w-6 h-6 text-blue-600 dark:text-blue-300" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                {t('legal.termsOfService.changes.title')}
              </h2>
            </div>
            <p className="mb-6">
              {t('legal.termsOfService.changes.description')}
            </p>

            <div className="flex items-center mb-6">
              <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full mr-4">
                <FaGavel className="w-6 h-6 text-blue-600 dark:text-blue-300" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                {t('legal.termsOfService.contact.title')}
              </h2>
            </div>
            <p className="mb-6">
              {t('legal.termsOfService.contact.description')}
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