'use client';

import { clientBrands } from '@/data/clientBrands';
import Image from 'next/image';

export default function ClientsLogos() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-transparent overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 mb-2 md:mb-3">We Are</h2>
          <p className="text-lg md:text-xl lg:text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-6 md:mb-8 px-2">Trusted Sellers & Stockists</p>
        </div>

        {/* First Row - scrolling left */}
        <div className="relative mb-4 md:mb-6 overflow-hidden">
          <div className="flex animate-scroll-left">
            {[...clientBrands, ...clientBrands].map((brand, index) => (
              <div 
                key={`row1-${index}`}
                className="flex-shrink-0 w-48 sm:w-56 md:w-64 mx-2 md:mx-3"
              >
                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 md:p-6 flex items-center justify-center border border-gray-200/50 hover:border-primary hover:shadow-md transition h-24 md:h-32">
                  <div className="relative w-full h-16 md:h-20">
                    <Image
                      src={brand.logo}
                      alt={`${brand.name} logo`}
                      fill
                      sizes="(max-width: 768px) 100vw, 256px"
                      className="object-contain"
                      style={{ maxWidth: '100%', maxHeight: '100%' }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Second Row - scrolling left with 50% offset */}
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll-left-delayed">
            {[...clientBrands, ...clientBrands].reverse().map((brand, index) => (
              <div 
                key={`row2-${index}`}
                className="flex-shrink-0 w-48 sm:w-56 md:w-64 mx-2 md:mx-3"
              >
                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 md:p-6 flex items-center justify-center border border-gray-200/50 hover:border-primary hover:shadow-md transition h-24 md:h-32">
                  <div className="relative w-full h-16 md:h-20">
                    <Image
                      src={brand.logo}
                      alt={`${brand.name} logo`}
                      fill
                      sizes="(max-width: 768px) 100vw, 256px"
                      className="object-contain"
                      style={{ maxWidth: '100%', maxHeight: '100%' }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-left {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        .animate-scroll-left,
        .animate-scroll-left-delayed {
          width: max-content;
          will-change: transform;
        }

        .animate-scroll-left {
          animation: scroll-left 50s linear infinite;
        }

        .animate-scroll-left-delayed {
          animation: scroll-left 50s linear infinite;
          animation-delay: -15s;
        }

      `}</style>
    </section>
  );
}

