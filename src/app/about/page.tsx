"use client";
import Image from "next/image";

const team = [
  {
    id: 1,
    name: "Harshvardhan Waghdhare",
    role: "Co-Founder",
    img: "/h.jpg",
    info: "Harshvardhan Waghdhare, an alumnus of the Film and Television Institute of India (FTII), brings over 15 years of technical expertise and industry experience across major Indian and international productions.",
  },
  {
    id: 2,
    name: "Kanishk Waghdhare",
    role: "Co-Founder",
    img: "/k.jpg",
    info: "Kanishk Waghdhare, a filmmaker and Assistant Director with a Master’s in Media and Entertainment from Rome Business School, Italy, complements this with a strategic and creative perspective shaped by global exposure.",
  },
];

const About = () => {
  return (
    <section className="text-[#3E4772] font-Mont min-h-screen px-6 sm:px-12 md:px-20 pt-30 pb-20">
      <div className="flex flex-col items-center text-center mb-16">
        <Image
          src="/new.png"
          alt="Stardust Stories Logo"
          width={200}
          height={100}
          priority
          className="object-contain mb-6"
        />
        <h1 className="text-2xl md:text-4xl font-bold tracking-tight mb-2 uppercase">
          Stardust Stories LLP
        </h1>
        <p className="text-lg italic text-[#3E4772]/70">
          Timeless Narratives.
        </p>
      </div>
      <div className="max-w-6xl mx-auto text-[#3E4772]/90 leading-relaxed text-justify space-y-6 bg-[#e6e6e6]/40 p-8 rounded-xl shadow-md border border-[#99bffb]/40">

        <section className="py-20 bg-white mt-10">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-12">

            <div className="col-span-1 flex flex-col justify-center">
              <h2 className="text-3xl font-bold leading-tight">
                Meet The Team <br /> Our Professionals
              </h2>

              <div className="w-20 h-[3px] bg-gray-300 mt-4"></div>

              <div className="mt-8 bg-gray-100 p-6 rounded-xl shadow-sm">
                <p className="text-gray-600 leading-relaxed">
                  Stardust Stories LLP is a media and film production company
                  founded by Harshvardhan and Kanishk Waghdhare, two brothers
                  united by a shared passion for storytelling and cinema.
                </p>
              </div>
            </div>
            <div className="col-span-2 grid sm:grid-cols-2 gap-8">
              {team.map((member) => (
                <div
                  key={member.id}
                  className="bg-gray-50 p-8 rounded-xl hover:shadow-xl transition text-center"
                >
                  <div className="w-36 h-36 mx-auto rounded-full overflow-hidden border-2 border-gray-300">
                    <Image
                      src={member.img}
                      alt={member.name}
                      width={200}
                      height={200}
                      className="object-cover w-full h-full rounded-full"
                    />
                  </div>

                  <h3 className="mt-4 font-semibold text-lg tracking-wide">
                    {member.name}
                  </h3>
                  <p className="text-gray-500 text-sm">
                    {member.role}
                  </p>

                  <div className="flex justify-center gap-4 mt-4 text-gray-700 text-xl">
                    <i className="fa-brands fa-facebook-f"></i>
                    <i className="fa-brands fa-instagram"></i>
                    <i className="fa-brands fa-linkedin-in"></i>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>     
        <p>
          <span className="font-semibold">Harshvardhan Waghdhare</span>, an alumnus of the Film and Television Institute of India (FTII),
          brings over 15 years of technical expertise and industry experience across major Indian and international productions. <br />
          <span className="font-semibold"> Kanishk Waghdhare</span>, a filmmaker and Assistant Director with a Master’s in Media and Entertainment
          from Rome Business School, Italy, complements this with a strategic and creative perspective shaped by global exposure.
        </p>

        <p>
          Together, they have worked on acclaimed projects with{" "}
          <span className="text-[#e1a730]">Netflix</span>,{" "}
          <span className="text-[#e1a730]">Amazon</span>,{" "}
          <span className="text-[#e1a730]">T-Series</span>,{" "}
          <span className="text-[#e1a730]">Drishyam Films</span>,{" "}
          <span className="text-[#e1a730]">MX Player</span>, and{" "}
          <span className="text-[#e1a730]">JioHotstar</span>, gaining invaluable experience across fiction, documentary, and branded content formats.
        </p>

        <p>
          At <span className="font-semibold text-[#e1a730]">Stardust Stories</span>, we create impactful films, campaigns, and media experiences that blend artistic excellence with social purpose.
          Whether it’s a government awareness project, a cinematic brand film, or an inspiring documentary, our mission is to craft stories that resonate —
          stories that become timeless narratives.
        </p>

        
      </div>
    </section>
  );
};

export default About;
