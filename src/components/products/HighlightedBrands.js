import Image from 'next/image';

export default function HighlightedBrands({ companies }) {
  return (
    <section className="py-12 bg-white border-b border-gray-200">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8 text-primary">Featured Brands</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {companies.map((company) => (
            <div 
              key={company.id} 
              className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-lg hover:shadow-md transition"
            >
              <div className="w-40 h-40 relative mb-3">
                <Image
                  src={company.logo}
                  alt={`${company.name} logo`}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="font-semibold text-sm text-center text-gray-800">{company.name}</h3>
              <p className="text-xs text-gray-600 text-center mt-1">{company.category}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
