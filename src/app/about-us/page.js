import { Award, Users, Heart } from 'lucide-react';

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-white">
      {/* Page Header */}
      <section className="bg-gradient-to-br from-primary via-primary-dark to-secondary text-white py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
              About Us
            </h1>
            <p className="text-base md:text-lg text-white/90 max-w-2xl mx-auto">
              Your trusted partner in premium electrical products and solutions
            </p>
          </div>
        </div>
      </section>

      {/* Company History */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Our Story</h2>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Ratnam Enterprise is a trusted name in the electrical industry, with our products 
                successfully reaching customers throughout India.
              </p>
              
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                We are a trusted seller and stockist of premium electrical products including Lauritz Knudsen (L&T Switchgears), 
                Polycab, and other quality brands in India. Our commitment to quality products, competitive pricing, 
                and customer satisfaction drives everything we do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Mission & Values</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-lg shadow-md border border-gray-200/50">
                <Award className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-2xl font-bold text-primary mb-4">Quality Assurance</h3>
                <p className="text-gray-600">
                  We ensure that every product we distribute meets the highest quality standards, 
                  providing our customers with reliable and durable electrical solutions.
                </p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-lg shadow-md border border-gray-200/50">
                <Users className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-2xl font-bold text-primary mb-4">Professional Service</h3>
                <p className="text-gray-600">
                  Our dedicated team ensures that customers throughout India receive 
                  top-notch service and support for all their electrical product needs.
                </p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-lg shadow-md border border-gray-200/50">
                <Heart className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-2xl font-bold text-primary mb-4">Customer Satisfaction</h3>
                <p className="text-gray-600">
                  Our commitment to quality and customer satisfaction drives every aspect of 
                  our business, ensuring long-term relationships with our clients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Market Presence */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">Established Market Presence</h2>
            <p className="text-lg text-gray-600 mb-8">
              As a reliable seller and stockist, we have built a strong market presence 
              across India. We maintain extensive stock of quality electrical products to serve customers in various industries including telecom, 
              construction, energy, oil & gas, mining, agriculture, and more.
            </p>
            
            <div className="bg-primary/10 rounded-lg p-8 border border-primary">
              <h3 className="text-2xl font-bold text-primary mb-4">We Are</h3>
              <p className="text-xl font-semibold text-gray-700">Trusted Sellers & Stockists</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

