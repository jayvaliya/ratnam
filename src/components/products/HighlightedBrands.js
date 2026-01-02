import Image from 'next/image';

export default function HighlightedBrands({ companies }) {
  // Split companies into first 4 and remaining
  const firstRow = companies.slice(0, 4);
  const secondRow = companies.slice(4);

  return (
    <section className="py-8 md:py-12 bg-white border-b border-gray-200">
      <div className="container mx-auto px-4">
        <h2 className="text-xl md:text-2xl font-bold text-center mb-6 md:mb-8 text-primary">Featured Brands</h2>
        
        {/* First Row - 4 brands */}
        <div className="flex justify-center mb-4 md:mb-6">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 w-full max-w-5xl">
            {firstRow.map((company) => (
              <div 
                key={company.id} 
                className="flex flex-col items-center justify-center p-3 md:p-4 bg-gray-50 rounded-lg hover:shadow-md transition"
              >
                <div className="w-28 h-28 md:w-32 md:h-32 lg:w-40 lg:h-40 relative mb-2 md:mb-3">
                  <Image
                    src={company.logo}
                    alt={`${company.name} logo`}
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="font-semibold text-xs md:text-sm text-center text-gray-800">{company.name}</h3>
                <p className="text-[10px] md:text-xs text-gray-600 text-center mt-1">{company.category}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Second Row - Remaining brands centered */}
        {secondRow.length > 0 && (
          <div className="flex justify-center">
            <div className={`grid gap-4 md:gap-6 w-full ${
              secondRow.length === 1 ? 'grid-cols-1 max-w-xs' :
              secondRow.length === 2 ? 'grid-cols-2 max-w-2xl' :
              'grid-cols-2 sm:grid-cols-3 max-w-5xl'
            }`}>
              {secondRow.map((company) => (
                <div 
                  key={company.id} 
                  className="flex flex-col items-center justify-center p-3 md:p-4 bg-gray-50 rounded-lg hover:shadow-md transition"
                >
                  <div className="w-28 h-28 md:w-32 md:h-32 lg:w-40 lg:h-40 relative mb-2 md:mb-3">
                    <Image
                      src={company.logo}
                      alt={`${company.name} logo`}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="font-semibold text-xs md:text-sm text-center text-gray-800">{company.name}</h3>
                  <p className="text-[10px] md:text-xs text-gray-600 text-center mt-1">{company.category}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
