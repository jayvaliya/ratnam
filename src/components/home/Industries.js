import Link from 'next/link';
import Image from 'next/image';

export default function Industries() {
  // Industries data with images
  const industries = [
    {
      id: 1,
      name: 'Industrial',
      image: '/images/industries/industrial.jpg'
    },
    {
      id: 2,
      name: 'Construction',
      image: '/images/industries/construction.jpg'
    },
    {
      id: 3,
      name: 'Telecom',
      image: '/images/industries/telecom.jpg'
    },
    {
      id: 4,
      name: 'Automotive & eMobility',
      image: '/images/industries/automotive.jpg'
    },
    {
      id: 5,
      name: 'Healthcare',
      image: '/images/industries/healthcare.jpg'
    },
    {
      id: 6,
      name: 'Green Energy Industry',
      image: '/images/industries/green.jpg'
    }
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-transparent overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 md:mb-14 px-2">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 md:mb-5">
            Industries We Serve
          </h2>
          <p className="text-base md:text-lg text-gray-600 mb-2 md:mb-3">
            We are Technology Leaders In countless Industries
          </p>
          <p className="text-sm md:text-base text-gray-500">
            Don't see one you identify with here?{' '}
            <Link href="/contact-us" className="text-primary hover:underline font-medium">
              Contact us today
            </Link>
            {' '}and tell us about your project!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {industries.map((industry) => (
            <div 
              key={industry.id}
              className="relative h-64 md:h-72 rounded-lg overflow-hidden group cursor-pointer"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <Image
                  src={industry.image || '/placeholder.jpg'}
                  alt={industry.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all duration-300"></div>
              </div>
              
              {/* Industry Name Label */}
              <div className="absolute bottom-4 left-4">
                <div className="bg-white px-5 py-2.5 rounded shadow-lg">
                  <h3 className="text-gray-800 font-semibold text-sm md:text-base">
                    {industry.name}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

