'use client';

import { productsData, highlightedCompanies } from '@/data/products';
import ProductCard from '@/components/products/ProductCard';
import BrandLogo from '@/components/products/BrandLogo';
import HighlightedBrands from '@/components/products/HighlightedBrands';
import { BadgeCheck } from 'lucide-react';

// Note: Client components can't export metadata directly
// For SEO, we'll use proper semantic HTML and structured data

export default function Products() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Page Header */}
      <section className="relative bg-gradient-to-br from-primary via-primary-dark to-secondary text-white py-12 md:py-16 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 animate-fade-in">
              Our Products
            </h1>
            <p className="text-base md:text-lg text-white/90 max-w-2xl mx-auto">
              Comprehensive range of industrial electrical products - MCCB, ACB, RCCB, VFD drives, control panel accessories, terminal blocks, busbar systems, and automation products. Trusted supplier of L&T, Siemens in Pune
            </p>
          </div>
        </div>
      </section>

      {/* Highlighted Companies */}
      <HighlightedBrands companies={highlightedCompanies} />

      {/* Category Jump Nav */}
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-3">
          <div className="flex gap-2 md:gap-3 overflow-x-auto md:justify-center whitespace-nowrap">
            {productsData.map((category) => (
              <a
                key={category.id}
                href={`#${category.slug}`}
                className="px-4 py-2 rounded-lg font-medium text-sm md:text-base bg-white text-gray-700 hover:bg-gray-50 border-2 border-gray-200 hover:border-secondary/30 transition-all shrink-0"
              >
                {category.category}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Products by Category */}
      <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          {productsData.map((category, categoryIndex) => (
            <div 
              key={category.id} 
              id={category.slug} 
              className={`scroll-mt-40 mb-12 md:mb-16 lg:mb-20 ${categoryIndex !== 0 ? 'pt-8 md:pt-12 border-t-2 border-gray-200' : ''}`}
            >
              {/* Category Header */}
              <div className="mb-6 md:mb-8 lg:mb-10">
                <div className="flex items-center gap-4 mb-3 md:mb-4">
                  <div className="flex-1">
                    <h2 className="ml-0 md:ml-8 lg:ml-16 text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                      {category.category}
                    </h2>
                  </div>
                </div>
                <p className="text-gray-600 text-sm md:text-base lg:text-lg leading-relaxed mb-4 md:mb-6 lg:mb-8 ml-0 md:ml-8 lg:ml-16">
                  {category.description}
                </p>
                
                {/* Category Companies */}
                <div className="bg-white rounded-lg md:rounded-xl p-4 md:p-5 lg:p-6 shadow-md border border-gray-100 ml-0 md:ml-8 lg:ml-16">
                  <div className="flex flex-wrap items-center gap-3 md:gap-4">
                    <span className="text-xs md:text-sm font-bold text-gray-700 uppercase tracking-wide flex items-center gap-2">
                      <BadgeCheck className="w-4 h-4 md:w-5 md:h-5 text-secondary" strokeWidth={2} />
                      Available Brands
                    </span>
                    <div className="flex flex-wrap gap-3 md:gap-4">
                      {category.companies.map((company, idx) => (
                        <BrandLogo key={idx} company={company} size="lg" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Products Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-4 lg:gap-6 ml-0 md:ml-8 lg:ml-16">
                {category.products.map((product, idx) => (
                  <ProductCard key={idx} product={product} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

