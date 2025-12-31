import Link from 'next/link';
import Image from 'next/image';

export default function ProductCard({ product }) {
  return (
    <div className="bg-gray-100 rounded-lg shadow-md hover:shadow-xl transition overflow-hidden border border-gray-200 group">
      {/* Product Image */}
      <div className="relative w-full h-48 bg-white flex items-center justify-center">
        <Image
          // src={product.image}
          src = "https://media.licdn.com/dms/image/v2/C4D12AQFwGLUbmQnBhQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1569061933437?e=1768435200&v=beta&t=6hFewNhGMFm2gcpph7rXHzD5Ug_IoLde6CPQ9UimCh4"
          alt={product.alt}
          fill
          className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
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
