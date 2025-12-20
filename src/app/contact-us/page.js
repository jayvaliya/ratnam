import { MapPin, Mail, Phone, Image } from 'lucide-react';

export default function ContactUs() {
  return (
    <div className="min-h-screen bg-background">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center">Contact Us</h1>
          <p className="text-center opacity-90 mt-4 text-lg">
            Get in touch with us for all your electrical product needs
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Get In Touch</h2>
              
              <div className="space-y-6">
                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-md border border-gray-200/50">
                  <div className="flex items-start space-x-3 mb-3">
                    <MapPin className="w-5 h-5 text-primary mt-1" />
                    <h3 className="text-lg font-semibold text-gray-800">Shop Address</h3>
                  </div>
                  <p className="text-gray-600 ml-8">
                    Shop No. 6, Plot No. BG-74A, Jay Tulja Bhavani Complex<br />
                    Telco Road, MIDC, Bhosari,<br />
                    Pune - 411 026, Maharashtra.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                  <div className="flex items-start space-x-3 mb-3">
                    <Mail className="w-5 h-5 text-primary" />
                    <h3 className="text-lg font-semibold text-gray-800">Email</h3>
                  </div>
                  <a 
                    href="mailto:sales@ratnam.org.in" 
                    className="text-primary hover:underline ml-8 block"
                  >
                    sales@ratnam.org.in
                  </a>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                  <div className="flex items-start space-x-3 mb-3">
                    <Phone className="w-5 h-5 text-primary" />
                    <h3 className="text-lg font-semibold text-gray-800">Contact</h3>
                  </div>
                  <a 
                    href="tel:9429094277" 
                    className="text-primary hover:underline ml-8 block"
                  >
                    94290 94277
                  </a>
                </div>
              </div>
            </div>

            {/* Photo Placeholder */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Shop</h2>
              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-lg shadow-md border border-gray-200/50">
                <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <Image className="w-24 h-24 mx-auto text-gray-400 mb-4" />
                    <p className="text-gray-500 font-medium">Shop Photo</p>
                    <p className="text-gray-400 text-sm mt-2">Placeholder for shop image</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

