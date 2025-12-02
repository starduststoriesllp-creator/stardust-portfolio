import Image from "next/image";

export default function InfiniteLogos({ logos }: { logos: string[] }) {
  const all = [...logos, ...logos];

  return (
    <div className="w-full font-Mont bg-[#f8f8f8] px-4 sm:px-6 md:px-16 lg:px-24 py-16 overflow-hidden">
      <div className="text-left mb-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl  uppercase text-[#3E4772] pb-2 tracking-tight font-bold">
          Our Clients
        </h2>
        <p className="text-base sm:text-lg uppercase text-[#e1a730]">
          Brands we worked with
        </p>
      </div>
      <div className="inline-flex whitespace-nowrap animate-marquee w-max mt-10">
        {all.map((src, idx) => (
          <div
            key={idx}
            className="inline-flex items-center px-4 sm:px-6 md:px-10 lg:px-14 h-8  md:h-12">
            <Image
              src={src}
              alt={`logo-${idx}`}
              width={160}
              height={160}
              className="h-full w-auto object-contain"
              unoptimized
            />
          </div>
        ))}
      </div>
    </div>
  );
}
