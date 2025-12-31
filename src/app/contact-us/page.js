import { MapPin, Mail, Phone } from 'lucide-react';

export default function ContactUs() {
  return (
    <div className="min-h-screen bg-white">
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
                    Telco Road, Near Quality Circle,<br />
                    Bhosari MIDC,<br />
                    Pune - 411026, Maharashtra.
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
                  <div className="ml-8">
                    <p className="text-gray-700 font-medium">Akshat Khodifad</p>
                    <a 
                      href="tel:9429094277" 
                      className="text-primary hover:underline block mb-3"
                    >
                      9429094277
                    </a>
                    <p className="text-gray-700 font-medium">Office</p>
                    <a 
                      href="tel:9426074277" 
                      className="text-primary hover:underline block"
                    >
                      9426074277
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Map View */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Location</h2>
              <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-md border border-gray-200/50">
                <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.1234567890!2d73.8427!3d18.6446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDM4JzQwLjYiTiA3M8KwNTAnMzMuNyJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-lg"
                  ></iframe>
                </div>
                <a 
                  href="https://maps.app.goo.gl/FsfFHYS44GuDRE1M6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mt-4 text-center bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition font-medium"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

