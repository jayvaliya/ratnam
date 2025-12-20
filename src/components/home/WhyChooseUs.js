import { whyChooseUs } from '@/data/features';
import { Heart, Users, Lightbulb } from 'lucide-react';

export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Why Choose Us</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {whyChooseUs.map((feature, index) => {
            const icons = [Heart, Users, Lightbulb];
            const Icon = icons[index];
            return (
              <div 
                key={feature.id}
                className="bg-white/80 backdrop-blur-sm rounded-lg shadow-md hover:shadow-xl transition p-8 border border-gray-200/50"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl font-bold text-primary">{feature.number}</div>
                  <Icon className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

