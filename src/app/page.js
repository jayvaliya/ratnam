import Hero from '@/components/home/Hero';
import Welcome from '@/components/home/Welcome';
import BrandsShowcase from '@/components/home/BrandsShowcase';
import Industries from '@/components/home/Industries';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import ClientsLogos from '@/components/home/ClientsLogos';

export default function Home() {
  return (
    <div className='bg-gray-50'>
      <h1 className="sr-only">Ratnam Enterprise - Industrial Electrical Supplier in Pune | L&T Polycab  Dealer</h1>
      <Hero />
      <Welcome />
      <BrandsShowcase />
      <Industries />
      <WhyChooseUs />
      <ClientsLogos />
    </div>
  );
}
