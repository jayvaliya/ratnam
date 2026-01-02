import { whyChooseUs } from '@/data/features';
import { Heart, Users, Lightbulb } from 'lucide-react';

export default function WhyChooseUs() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-transparent overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">Why Choose Us</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-10 max-w-6xl mx-auto">
          {whyChooseUs.map((feature, index) => {
            const icons = [Heart, Users, Lightbulb];
            const Icon = icons[index];
            return (
              <div 
                key={feature.id}
                className="bg-white rounded-lg md:rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-5 md:p-6 lg:p-8 border border-gray-100 hover:border-primary/30 transform hover:-translate-y-2 group"
              >
                <div className="flex items-center justify-between mb-4 md:mb-5">
                  <div className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">{feature.number}</div>
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 md:mb-4">{feature.title}</h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

