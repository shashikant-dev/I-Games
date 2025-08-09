import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight, FaCheck, FaStar } from 'react-icons/fa';

const ServiceCard = ({ service, category }) => {
  return (
    <div className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-gray-200 dark:border-gray-700">
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        {/* Popular badge */}
        <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full">
          Popular
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {service.title}
          </h3>
          <div className="flex text-yellow-400 text-sm">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} />
            ))}
          </div>
        </div>

        <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
          {service.description}
        </p>

        {/* Features grid */}
        <div className="grid grid-cols-1 gap-2 mb-6">
          {service.features.map((feature, index) => (
            <div key={index} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
              <FaCheck className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
              <span>{feature}</span>
            </div>
          ))}
        </div>

        {/* Pricing indicator */}
        <div className="flex items-center justify-between mb-6 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
          <div>
            <span className="text-sm text-gray-500 dark:text-gray-400">Starting from</span>
            <div className="text-lg font-bold text-gray-900 dark:text-white">Contact for pricing</div>
          </div>
          <div className="text-green-600 dark:text-green-400 text-sm font-medium">
            Custom quotes available
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex gap-3">
          <Link
            href={`/services/${category}#${service.id}`}
            className="flex-1 inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-3 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 font-medium group-hover:shadow-lg"
          >
            Learn More
            <FaArrowRight className="ml-2 w-3 h-3" />
          </Link>
          <Link
            href="/contact"
            className="px-4 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300 font-medium"
          >
            Get Quote
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
