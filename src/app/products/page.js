'use client';

import { useState } from 'react';
import { brands } from '@/data/brands';
import Link from 'next/link';

export default function Products() {
  const [selectedBrand, setSelectedBrand] = useState('all');

  const filteredBrands = selectedBrand === 'all' 
    ? brands 
    : brands.filter(brand => brand.slug === selectedBrand);

  return (
    <div className="min-h-screen bg-background">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center">Products</h1>
          <p className="text-center opacity-90 mt-4 text-lg">
            Explore our wide range of electrical products from leading brands
          </p>
        </div>
      </section>

      {/* Brand Filter */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            <button
              onClick={() => setSelectedBrand('all')}
              className={`px-6 py-2 rounded-md font-medium transition ${
                selectedBrand === 'all'
                  ? 'bg-secondary text-white hover:bg-secondary-hover'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All Brands
            </button>
            {brands.map((brand) => (
              <button
                key={brand.id}
                onClick={() => setSelectedBrand(brand.slug)}
                className={`px-6 py-2 rounded-md font-medium transition ${
                  selectedBrand === brand.slug
                    ? 'bg-secondary text-white hover:bg-secondary-hover'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {brand.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBrands.map((brand) => (
              <div
                key={brand.id}
                id={brand.slug}
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition p-8 border border-gray-200"
              >
                <h3 className="text-2xl font-bold text-primary mb-3">{brand.name}</h3>
                <p className="text-gray-600 font-semibold mb-4">{brand.category}</p>
                <p className="text-gray-600 mb-6">{brand.description}</p>
                
                {brand.name === 'Newtek' && (
                  <div className="mb-4">
                    <p className="text-sm text-gray-600 mb-2">Product Types:</p>
                    <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                      <li>Window Transformers</li>
                      <li>Split Core Transformers</li>
                      <li>ID Types</li>
                      <li>WPL Types</li>
                    </ul>
                  </div>
                )}

                {brand.name === 'Connectwell' && (
                  <div className="mb-4">
                    <p className="text-sm text-gray-600 mb-2">Product Types:</p>
                    <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                      <li>Interface Modules</li>
                      <li>DIN Rail Sockets</li>
                      <li>Switches</li>
                    </ul>
                  </div>
                )}

                <Link
                  href="/contact-us"
                  className="inline-block bg-primary text-white px-6 py-2 rounded-md hover:bg-primary-hover transition font-medium shadow-sm"
                >
                  Get Quote
                </Link>
              </div>
            ))}
          </div>

          {filteredBrands.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No products found for the selected brand.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

