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
    <div className="min-h-screen bg-background">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center">Our Products</h1>
          <p className="text-center opacity-90 mt-4 text-lg">
            Comprehensive range of electrical products from world-class brands
          </p>
        </div>
      </section>

      {/* Highlighted Companies */}
      <HighlightedBrands companies={highlightedCompanies} />

      {/* Category Filter */}
      <section className="py-8 bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-6 py-2 rounded-md font-medium transition ${
                selectedCategory === 'all'
                  ? 'bg-secondary text-white hover:bg-secondary-hover'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
              }`}
            >
              All Categories
            </button>
            {productsData.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.slug)}
                className={`px-6 py-2 rounded-md font-medium transition ${
                  selectedCategory === category.slug
                    ? 'bg-secondary text-white hover:bg-secondary-hover'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                }`}
              >
                {category.category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products by Category */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {filteredCategories.map((category) => (
            <div key={category.id} id={category.slug} className="mb-16">
              {/* Category Header */}
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-primary mb-3">{category.category}</h2>
                <p className="text-gray-600 mb-6">{category.description}</p>
                
                {/* Category Companies */}
                <div className="flex flex-wrap gap-4 mb-6">
                  <span className="text-sm font-semibold text-gray-700">Available Brands:</span>
                  {category.companies.map((company, idx) => (
                    <BrandLogo key={idx} company={company} size="lg" />
                  ))}
                </div>
              </div>

              {/* Products Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                {category.products.map((product, idx) => (
                  <ProductCard key={idx} product={product} />
                ))}
              </div>
            </div>
          ))}

          {filteredCategories.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No products found for the selected category.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

