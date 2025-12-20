export default function Statistics() {
  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-8">
            <h2 className="text-5xl md:text-6xl font-bold text-primary mb-2">2.5+</h2>
            <p className="text-xl md:text-2xl font-semibold text-gray-700">Years Of Experience</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mt-8 md:mt-12">
            {[
              'Quality Assurance',
              'Expertise & Experience',
              'Established Market Presence',
              'Trusted Seller & Stockist'
            ].map((feature, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm p-5 md:p-6 rounded border border-gray-200/50 hover:border-primary hover:shadow-md transition">
                <p className="text-gray-700 font-medium text-sm md:text-base">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

