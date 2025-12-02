import Hero from "@/components/landing/Hero";
import ServicesArea from "@/components/landing/ServiceArea";
import Portfolio from "@/components/landing/Portfolio";
import InfiniteLogos from "@/components/landing/InfiniteLogos";
import logos from "@/lib/logo.json"
export default function Home() {
  return (
    <div className="h-auto">
      <Hero />
      <ServicesArea/>
      <InfiniteLogos logos={logos.logos} />  
      <Portfolio/>
    </div>
  );
}
