export default function Welcome() {
  return (
    <section className="py-16 md:py-20 bg-transparent overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 md:mb-14">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mb-4 md:mb-5">Who we are</h2>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-5 md:mb-7">
              Welcome to Ratnam Enterprise
            </h3>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              TRUSTED SELLER & STOCKIST OF PREMIUM ELECTRICAL BRANDS including Lauritz Knudsen (L&T Switchgears), Polycab, and other quality electrical products in India.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 mt-10 md:mt-14">
            {[
              'Quality Assurance',
              'Professional Service',
              'Reliable Stock Availability',
              'Competitive Pricing'
            ].map((feature, index) => (
              <div key={index} className="bg-white backdrop-blur-sm p-6 md:p-7 rounded-lg shadow-sm border border-gray-200 hover:border-primary hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <p className="text-gray-700 font-semibold text-center text-sm md:text-base">{feature}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-14 md:mt-20">
          </div>
        </div>
      </div>
    </section>
  );
}

