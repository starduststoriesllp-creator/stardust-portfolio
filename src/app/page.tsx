import Hero from "@/components/landing/Hero";
import ServicesArea from "@/components/landing/ServiceArea";
import Portfolio from "@/components/landing/Portfolio";
export default function Home() {
  return (
    <div className="h-auto">
      <Hero />
      <ServicesArea/>  
      <Portfolio/>
    </div>
  );
}
