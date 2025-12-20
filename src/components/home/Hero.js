import Link from 'next/link';

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-primary/80 via-primary to-primary-dark text-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
            Leading Seller & Stockist of Electrical Goods
          </h1>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Quality Electrical Products Throughout India
          </p>
          <Link 
            href="/contact-us"
            className="inline-block bg-primary text-white px-8 py-3 rounded-md font-semibold hover:bg-primary-hover transition shadow-lg"
          >
            Get a Quote
          </Link>
        </div>

        {/* Brand Logos */}
        <div className="mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3 md:gap-4">
          {['L&T', 'Salzer', 'Polycab', 'GIC', 'Braco', 'Newtek', 'Connectwell', 'Esbee'].map((brand, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded p-3 md:p-4 text-center hover:bg-white/20 transition border border-white/30"
            >
              <span className="text-xs md:text-sm font-medium">{brand}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

