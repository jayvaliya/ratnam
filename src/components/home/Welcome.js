export default function Welcome() {
  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3 md:mb-4">Who we are</h2>
            <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-primary mb-4 md:mb-6">
              Welcome to Ratnam Enterprise
            </h3>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              TRUSTED SELLER & STOCKIST OF PREMIUM ELECTRICAL BRANDS including Lauritz Knudsen (L&T Switchgears), Polycab, and other quality electrical products in India.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mt-8 md:mt-12">
            {[
              'Quality Assurance',
              'Expertise & Experience',
              'Reliable Stock Availability',
              'Competitive Pricing'
            ].map((feature, index) => (
              <div key={index} className="bg-white/70 backdrop-blur-sm p-5 md:p-6 rounded border border-gray-200/50 hover:border-primary transition">
                <p className="text-gray-700 font-medium text-center text-sm md:text-base">{feature}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 md:mt-16">
            <div className="inline-block bg-primary/10 rounded-lg p-6 md:p-8 border border-primary">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-2">2.5+</h2>
              <p className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-700">Years Of Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

