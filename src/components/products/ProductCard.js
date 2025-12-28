import Link from 'next/link';
import Image from 'next/image';

export default function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition overflow-hidden border border-gray-200 group">
      {/* Product Image */}
      <div className="relative w-full h-48 bg-gray-100">
        <Image
          src={product.image}
          alt={product.alt}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      
      {/* Product Info */}
      <div className="p-4">
        <h3 className="font-semibold text-gray-800 mb-2 text-sm line-clamp-2">
          {product.name}
        </h3>
        <p className="text-xs text-gray-600 mb-4 line-clamp-2">
          {product.description}
        </p>
        
        {product.referenceLink && (
          <a
            href={product.referenceLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-blue-600 hover:text-blue-800 underline mb-3 block"
          >
            View Reference
          </a>
        )}
        
        <Link
          href="/contact-us"
          className="block text-center bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-hover transition font-medium text-sm"
        >
          Inquire Now
        </Link>
      </div>
    </div>
  );
}
