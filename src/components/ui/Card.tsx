import Image from "next/image";
const Card = () => {
  const portfolioItems = [
    { img: "/movie1.jpg", title: "Jhund", type: "Film" },
    { img: "/movie2.jpg", title: "Indian Predator: Murder in a Courtroom", type: "Netflix Series" },
    { img: "/movie1.jpg", title: "Jhund", type: "Film" },
    { img: "/movie2.jpg", title: "Indian Predator: Murder in a Courtroom", type: "Netflix Series" },
    { img: "/movie1.jpg", title: "Jhund", type: "Film" },
    { img: "/movie2.jpg", title: "Indian Predator: Murder in a Courtroom", type: "Netflix Series" },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
      {portfolioItems.map((item, i) => (
        <div
          key={i}
          className="group relative bg-white border border-[#e5e5e5] rounded-md overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
        >
          <div className="relative w-full h-[260px]">
            <Image
              src={item.img}
              alt={item.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-center py-2">
            <h3 className="text-sm font-semibold">{item.title}</h3>
            <p className="text-xs text-[#e1a730] uppercase">{item.type}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
