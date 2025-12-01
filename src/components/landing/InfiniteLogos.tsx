import Image from "next/image";

export default function InfiniteLogos({ logos }: { logos: string[] }) {
  const all = [...logos, ...logos];

  return (
    <div className="w-full font-Mont bg-[#e6e6e6] px-4 sm:px-6 md:px-16 lg:px-24 py-16 overflow-hidden">
      <div className="text-left mb-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl uppercase text-[#3E4772] pb-2 tracking-tight font-bold">
          Brands we worked
        </h2>
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
