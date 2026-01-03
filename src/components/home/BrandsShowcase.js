import Link from 'next/link';
import Image from 'next/image';
import { brands } from '@/data/brands';
import { ChevronRight } from 'lucide-react';

export default function BrandsShowcase() {
  return (
    <section className="py-12 md:py-16 bg-transparent overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">Brands</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {brands.map((brand) => (
            <div 
              key={brand.id}
              className="bg-gray-100 backdrop-blur-sm rounded-lg shadow-md hover:shadow-xl transition overflow-hidden border border-gray-200/50 hover:border-primary"
            >
              {/* Brand Image */}
              <div className="w-full bg-white aspect-4/3 flex items-center justify-center relative">
                <Image
                  src={brand.image}
                  alt={`${brand.name} logo`}
                  fill
                  className="object-contain p-6"
                />
              </div>
              
              {/* Content - bottom half */}
              <div className="p-4 md:p-5 lg:p-6">
                <h3 className="text-lg md:text-xl font-bold text-primary mb-2">{brand.name}</h3>
                <p className="text-sm md:text-base text-gray-600 font-semibold mb-2 md:mb-3">{brand.category}</p>
                <p className="text-xs md:text-sm text-gray-600 mb-3 md:mb-4">{brand.description}</p>
                <Link 
                  href={`/products#${brand.slug}`}
                  className="text-primary hover:text-secondary font-medium inline-flex items-center transition group"
                >
                  Read More
                  <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

