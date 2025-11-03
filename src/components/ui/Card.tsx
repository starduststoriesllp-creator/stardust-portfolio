import Image from "next/image";
import portfolioItems from "@/lib/projects.json"
interface CardProps {
  limit?: number;
}
const Card = ({ limit }: CardProps) => {
  const displayItems = limit ? portfolioItems.slice(0, limit) : portfolioItems;
  
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
      {displayItems.map((item, i) => (
        <div
          key={i}
          className="group relative bg-white border border-[#e5e5e5] rounded-md overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
        >
          <div className="relative w-full h-[300px]">
            <Image
              src={item.img}
              alt={item.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="absolute flex flex-col bottom-0 left-0 right-0 bg-black/90 min-h-[70px] text-white text-center  py-2 px-2">
            <h3 className="text-sm ">{item.title}</h3>
            <p className="text-xs text-[#e1a730] uppercase mt-auto">{item.type}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
