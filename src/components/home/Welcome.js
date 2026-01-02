import { BadgeCheck, Users, Package, TrendingDown } from 'lucide-react';

export default function Welcome() {
  const features = [
    { title: 'Quality Assurance', Icon: BadgeCheck },
    { title: 'Professional Service', Icon: Users },
    { title: 'Reliable Stock Availability', Icon: Package },
    { title: 'Competitive Pricing', Icon: TrendingDown }
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-transparent overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 md:mb-10 lg:mb-14">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-700 mb-3 md:mb-4 lg:mb-5">Who we are</h2>
            <h3 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4 md:mb-5 lg:mb-7 px-2">
              Welcome to Ratnam Enterprise
            </h3>
            <p className="text-sm md:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed px-2">
              TRUSTED SELLER & STOCKIST OF PREMIUM ELECTRICAL BRANDS including Lauritz Knudsen (L&T Switchgears), Polycab, and other quality electrical products in India.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 lg:gap-6 mt-8 md:mt-10 lg:mt-14">
            {features.map((feature, index) => {
              const IconComponent = feature.Icon;
              return (
                <div key={index} className="relative bg-gradient-to-br from-gray-50 to-white p-6 md:p-7 lg:p-8 rounded-xl shadow-md border-2 border-gray-100 overflow-hidden group">
                  {/* Decorative corner element */}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-primary/5 rounded-bl-full"></div>
                  
                  {/* Icon */}
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-white rounded-full flex items-center justify-center shadow-sm border border-gray-200">
                      <IconComponent className="w-6 h-6 md:w-7 md:h-7 text-primary" strokeWidth={2.5} />
                    </div>
                  </div>
                  
                  {/* Title */}
                  <p className="text-gray-800 font-bold text-center text-sm md:text-base leading-snug">
                    {feature.title}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-14 md:mt-20">
          </div>
        </div>
      </div>
    </section>
  );
}

