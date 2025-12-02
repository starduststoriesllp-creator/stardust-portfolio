import PortfolioCard from "@/components/ui/Card";
import Link from "next/link";
const Portfolio = () => {
  return (
    <section className="w-full font-Mont bg-[#e6e6e6] px-6 sm:px-10 md:px-20 lg:px-24 py-16">
      <div className="text-left mb-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl  uppercase text-[#3E4772] pb-2 tracking-tight font-bold">
          Our Portfolio
        </h2>
        <p className="text-base sm:text-lg uppercase text-[#e1a730]">
          Stories That Speak
        </p>
      </div>

      <PortfolioCard limit={6}/>
      <Link
          href="/portfolio"
          className="flex w-max px-6 bg-[#3E4772] text-white text-sm sm:text-base py-2 rounded-md font-medium uppercase tracking-wide mt-10"
        >
          View More
      </Link>
    </section>
  );
};

export default Portfolio;
