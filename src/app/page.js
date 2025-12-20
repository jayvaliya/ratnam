import Hero from '@/components/home/Hero';
import Statistics from '@/components/home/Statistics';
import Welcome from '@/components/home/Welcome';
import BrandsShowcase from '@/components/home/BrandsShowcase';
import Industries from '@/components/home/Industries';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import ClientsLogos from '@/components/home/ClientsLogos';

export default function Home() {
  return (
    <>
      <Hero />
      {/* <Statistics /> */}
      <Welcome />
      <BrandsShowcase />
      <Industries />
      <WhyChooseUs />
      <ClientsLogos />
    </>
  );
}
