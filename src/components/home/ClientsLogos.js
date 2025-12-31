'use client';

import { clientBrands } from '@/data/clientBrands';
import Image from 'next/image';

export default function ClientsLogos() {
  return (
    <section className="py-16 md:py-20 bg-transparent overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">We Are</h2>
          <p className="text-xl md:text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-8">Trusted Sellers & Stockists</p>
        </div>

        {/* First Row - scrolling left */}
        <div className="relative mb-6">
          <div className="flex animate-scroll-left">
            {[...clientBrands, ...clientBrands, ...clientBrands, ...clientBrands].map((brand, index) => (
              <div 
                key={`row1-${index}`}
                className="flex-shrink-0 w-64 mx-3"
              >
                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 flex items-center justify-center border border-gray-200/50 hover:border-primary hover:shadow-md transition h-32">
                  <div className="relative w-full h-20">
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
        <div className="relative">
          <div className="flex animate-scroll-left-delayed">
            {[...clientBrands, ...clientBrands, ...clientBrands, ...clientBrands].reverse().map((brand, index) => (
              <div 
                key={`row2-${index}`}
                className="flex-shrink-0 w-64 mx-3"
              >
                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 flex items-center justify-center border border-gray-200/50 hover:border-primary hover:shadow-md transition h-32">
                  <div className="relative w-full h-20">
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
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-25%);
          }
        }

        .animate-scroll-left {
          animation: scroll-left 40s linear infinite;
        }

        .animate-scroll-left-delayed {
          animation: scroll-left 40s linear infinite;
          animation-delay: -20s;
        }

      `}</style>
    </section>
  );
}

