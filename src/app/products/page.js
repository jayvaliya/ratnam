'use client';

import { useState } from 'react';
import { productsData, highlightedCompanies } from '@/data/products';
import ProductCard from '@/components/products/ProductCard';
import BrandLogo from '@/components/products/BrandLogo';
import HighlightedBrands from '@/components/products/HighlightedBrands';

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredCategories = selectedCategory === 'all' 
    ? productsData 
    : productsData.filter(category => category.slug === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Page Header */}
      <section className="relative bg-gradient-to-br from-primary via-primary-dark to-secondary text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
              Our Products
            </h1>
            <p className="text-white/90 text-lg md:text-xl leading-relaxed">
              Comprehensive range of electrical products from world-class brands
            </p>
            <div className="mt-8 flex justify-center gap-2">
              <div className="h-1 w-20 bg-white/50 rounded"></div>
              <div className="h-1 w-12 bg-white/30 rounded"></div>
              <div className="h-1 w-8 bg-white/20 rounded"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlighted Companies */}
      <HighlightedBrands companies={highlightedCompanies} />

      {/* Category Filter */}
      <section className="py-12 bg-white shadow-md">
        <div className="container mx-auto px-4">
          <h3 className="text-center text-sm font-semibold text-gray-500 uppercase tracking-wide mb-6">
            Filter by Category
          </h3>
          <div className="flex flex-wrap gap-3 justify-center max-w-6xl mx-auto">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-6 py-3 rounded-lg font-medium transition-all shadow-sm ${
                selectedCategory === 'all'
                  ? 'bg-gradient-to-r from-secondary to-secondary-hover text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-50 border-2 border-gray-200 hover:border-secondary/30'
              }`}
            >
              All Categories
            </button>
            {productsData.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.slug)}
                className={`px-6 py-3 rounded-lg font-medium transition-all shadow-sm ${
                  selectedCategory === category.slug
                    ? 'bg-gradient-to-r from-secondary to-secondary-hover text-white shadow-lg scale-105'
                    : 'bg-white text-gray-700 hover:bg-gray-50 border-2 border-gray-200 hover:border-secondary/30'
                }`}
              >
                {category.category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products by Category */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          {filteredCategories.map((category, categoryIndex) => (
            <div 
              key={category.id} 
              id={category.slug} 
              className={`mb-20 ${categoryIndex !== 0 ? 'pt-12 border-t-2 border-gray-200' : ''}`}
            >
              {/* Category Header */}
              <div className="mb-10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    {categoryIndex + 1}
                  </div>
                  <div className="flex-1">
                    <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                      {category.category}
                    </h2>
                  </div>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed mb-8 ml-16">
                  {category.description}
                </p>
                
                {/* Category Companies */}
                <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 ml-16">
                  <div className="flex flex-wrap items-center gap-4">
                    <span className="text-sm font-bold text-gray-700 uppercase tracking-wide flex items-center gap-2">
                      <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                      </svg>
                      Available Brands
                    </span>
                    <div className="flex flex-wrap gap-4">
                      {category.companies.map((company, idx) => (
                        <BrandLogo key={idx} company={company} size="lg" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Products Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 ml-16">
                {category.products.map((product, idx) => (
                  <ProductCard key={idx} product={product} />
                ))}
              </div>
            </div>
          ))}

          {filteredCategories.length === 0 && (
            <div className="text-center py-20">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
                <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <p className="text-gray-600 text-lg font-medium">No products found for the selected category.</p>
              <button 
                onClick={() => setSelectedCategory('all')}
                className="mt-4 text-secondary hover:text-secondary-hover font-semibold"
              >
                View All Products
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

