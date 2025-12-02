import Image from "next/image";


const About = () => {
  return (
    <section className=" text-[#3E4772] font-Mont min-h-screen px-6 sm:px-12 md:px-20 pt-30 pb-20">
      <div className="flex flex-col items-center text-center mb-16">
        <Image
          src="/new.png"
          alt="Stardust Stories Logo"
          width={260}
          height={100}
          className="object-contain mb-6"
        />
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-2  text-[#3E4772] uppercase">
          Stardust Stories LLP
        </h1>
        <p className="text-lg italic text-[#3E4772]/70 ">
          Timeless Narratives.
        </p>
      </div>
      <div className="max-w-6xl mx-auto text-[#3E4772]/90 leading-relaxed text-justify space-y-6  bg-[#e6e6e6]/40 p-8 rounded-xl shadow-md border border-[#99bffb]/40">
        <p>
          <span className="font-semibold text-[#e1a730]">Stardust Stories LLP</span> is a media and film production company founded by
          <span className="font-semibold"> Harshvardhan </span>and
          <span className="font-semibold"> Kanishk Waghdhare</span>, two brothers united by a shared passion for storytelling and cinema.
        </p>

        <p>
          <span className="font-semibold">Harshvardhan Waghdhare</span>, an alumnus of the Film and Television Institute of India (FTII),
          brings over 15 years of technical expertise and industry experience across major Indian and international productions.
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

      {/* Founders Section */}
      <div className="max-w-6xl mx-auto mt-20 grid grid-cols-1 sm:grid-cols-2 gap-12 text-center">
        <div className="flex flex-col items-center">
          <Image
            src="/h.jpg"
            alt="Harshvardhan Waghdhare"
            width={300}
            height={300}
            className="object-cover shadow-md mb-4 h-[300px] rounded-lg border border-[#99bffb]/50"
          />
          <h3 className="text-2xl font-semibold text-[#3E4772] ">
            Harshvardhan Waghdhare
          </h3>
          <p className="text-sm text-[#3E4772]/70 mt-1 ">Co-Founder</p>
        </div>

        <div className="flex flex-col items-center">
          <Image
            src="/k.jpg"
            alt="Kanishk Waghdhare"
            width={300}
            height={300}
            className="object-cover h-[300px] shadow-md mb-4 rounded-lg border border-[#99bffb]/50"
          />
          <h3 className="text-2xl font-semibold text-[#3E4772] ">
            Kanishk Waghdhare
          </h3>
          <p className="text-sm text-[#3E4772]/70 mt-1 ">Co-Founder</p>
        </div>
      </div>
    </section>
  );
};

export default About;