'use client';
import { useLanguage } from '@/contexts/LanguageContext';
import Link from 'next/link';
import {
  FaShieldAlt,
  FaLock,
  FaUserShield,
  FaServer,
  FaFingerprint,
  FaCode,
  FaExclamationTriangle,
  FaHeadset
} from 'react-icons/fa';

export default function Security() {
  const { t } = useLanguage();

  return (
    <main className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8 pt-20">
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          {t('legal.security.title')}
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          {t('legal.security.subtitle')}
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
                {t('legal.security.overview.title')}
              </h2>
            </div>
            <p className="mb-6">
              {t('legal.security.overview.description')}
            </p>

            <div className="flex items-center mb-6">
              <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full mr-4">
                <FaLock className="w-6 h-6 text-blue-600 dark:text-blue-300" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                {t('legal.security.dataProtection.title')}
              </h2>
            </div>
            <p className="mb-4">
              {t('legal.security.dataProtection.description')}
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>{t('legal.security.dataProtection.items.encryption')}</li>
              <li>{t('legal.security.dataProtection.items.access')}</li>
              <li>{t('legal.security.dataProtection.items.monitoring')}</li>
              <li>{t('legal.security.dataProtection.items.compliance')}</li>
            </ul>

            <div className="flex items-center mb-6">
              <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full mr-4">
                <FaServer className="w-6 h-6 text-blue-600 dark:text-blue-300" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                {t('legal.security.infrastructure.title')}
              </h2>
            </div>
            <p className="mb-4">
              {t('legal.security.infrastructure.description')}
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>{t('legal.security.infrastructure.items.redundancy')}</li>
              <li>{t('legal.security.infrastructure.items.ddos')}</li>
              <li>{t('legal.security.infrastructure.items.firewall')}</li>
              <li>{t('legal.security.infrastructure.items.monitoring')}</li>
            </ul>

            <div className="flex items-center mb-6">
              <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full mr-4">
                <FaFingerprint className="w-6 h-6 text-blue-600 dark:text-blue-300" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                {t('legal.security.authentication.title')}
              </h2>
            </div>
            <p className="mb-4">
              {t('legal.security.authentication.description')}
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>{t('legal.security.authentication.items.mfa')}</li>
              <li>{t('legal.security.authentication.items.sso')}</li>
              <li>{t('legal.security.authentication.items.passwordPolicy')}</li>
              <li>{t('legal.security.authentication.items.sessionManagement')}</li>
            </ul>

            <div className="flex items-center mb-6">
              <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full mr-4">
                <FaCode className="w-6 h-6 text-blue-600 dark:text-blue-300" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                {t('legal.security.development.title')}
              </h2>
            </div>
            <p className="mb-4">
              {t('legal.security.development.description')}
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>{t('legal.security.development.items.sdlc')}</li>
              <li>{t('legal.security.development.items.codeReview')}</li>
              <li>{t('legal.security.development.items.testing')}</li>
              <li>{t('legal.security.development.items.dependencies')}</li>
            </ul>

            <div className="flex items-center mb-6">
              <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full mr-4">
                <FaExclamationTriangle className="w-6 h-6 text-blue-600 dark:text-blue-300" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                {t('legal.security.incident.title')}
              </h2>
            </div>
            <p className="mb-4">
              {t('legal.security.incident.description')}
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>{t('legal.security.incident.items.detection')}</li>
              <li>{t('legal.security.incident.items.response')}</li>
              <li>{t('legal.security.incident.items.communication')}</li>
              <li>{t('legal.security.incident.items.recovery')}</li>
            </ul>

            <div className="flex items-center mb-6">
              <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full mr-4">
                <FaHeadset className="w-6 h-6 text-blue-600 dark:text-blue-300" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                {t('legal.security.contact.title')}
              </h2>
            </div>
            <p className="mb-6">
              {t('legal.security.contact.description')}
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