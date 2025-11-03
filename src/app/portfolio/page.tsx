import PortfolioCard from "@/components/ui/Card";

const Portfolio = () => {
  return (
    <section className=" text-[#3E4772] font-Mont min-h-screen px-6 sm:px-12 md:px-20 pt-28 pb-20">
      <div className="mb-12 text-left">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold uppercase tracking-tight">
          Our Work
        </h2>
        <p className="mt-4 text-sm sm:text-base text-[#555] max-w-2xl text-justify">
          At Stardust Stories, we craft visuals that go beyond the screen - stories that inspire, move, 
          and stay with you. From acclaimed films to compelling series, each project reflects our dedication 
          to cinematic excellence.
        </p>
      </div>
      <PortfolioCard />
    </section>
  );
};

export default Portfolio;
