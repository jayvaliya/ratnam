import Link from 'next/link';
import { industries } from '@/data/industries';
import { Radio, HardHat, Plane, Zap, Droplet, Mountain, Wheat, FileText } from 'lucide-react';

export default function Industries() {
  return (
    <section className="py-16 md:py-20 bg-transparent overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-5">
            Industries We Serve
          </h2>
          <p className="text-lg text-gray-600 mb-3">
            We are Technology Leaders In countless Industries
          </p>
          <p className="text-gray-500">
            Don't see one you identify with here?{' '}
            <Link href="/contact-us" className="text-primary hover:underline font-medium">
              Contact us today
            </Link>
            {' '}and tell us about your project!
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {industries.map((industry, index) => {
            const icons = [Radio, HardHat, Plane, Zap, Droplet, Mountain, Wheat, FileText];
            const Icon = icons[index];
            return (
              <div 
                key={industry.id}
                className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-7 text-center border border-gray-200 hover:border-primary hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-gray-700 font-semibold text-sm md:text-base">{industry.name}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

