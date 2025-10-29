'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

function Hero() {
  return (
    <main className="font-Inter">
      <header className="relative w-full h-[80vh] sm:h-[750px] text-white overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
        >
          <source src="/raining.mp4" type="video/mp4" />
          Your browser does not support the video.
        </video>
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 flex flex-col justify-end items-start h-full px-4 sm:px-10 md:px-20 pb-20 text-center sm:text-left">
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-Play font-semibold leading-tight uppercase tracking-widest text-[#C2A15A]">
            Crafting Cinema. <br className="hidden sm:block" /> Creating Impact.
          </h1>

          <p className="text-base sm:text-lg md:text-lg text-[#EAEAEA] mt-4 tracking-wide uppercase font-Int">
            From films to public campaigns, we tell stories that matter.
          </p>

          <div className="flex flex-col w-full sm:flex-row gap-4 sm:gap-6 mt-8 font-Int items-center sm:items-start">
            <Link
              href="/portfolio"
              className="px-8 py-3 text-base border-2 w-[270px] sm:w-auto  text-center border-[#C2A15A] text-[#C2A15A] tracking-wide uppercase"
            >
              View Our Work
            </Link>
            <Link
              href="/about"
              className="px-8 py-3 text-base border-2 w-[270px] sm:w-auto  text-center border-white text-white tracking-wide uppercase"
            >
              Collaborate With Us
            </Link>
          </div>
        </div>
      </header>


      <section
  className="relative py-12 sm:py-16 md:py-24 px-4 sm:px-10 md:px-20 bg-[#f7f0ea] text-[#1C1C1C] flex flex-col md:flex-row justify-between items-center gap-10 md:gap-0"
>
  {/* LEFT CONTENT */}
  <div className="w-full md:w-[55%]">
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-Play uppercase text-[#1C1C1C] mb-6 tracking-wider leading-snug text-center md:text-left">
      At Stardust Stories, <br className="hidden sm:block" /> we bring stories to life
    </h2>

    {/* Mobile Image */}
    <div className="relative w-full mb-6 md:hidden aspect-[4/5]">
      <Image
        src="/image.jpg"
        alt="Behind the scenes at film set"
        fill
        className="object-cover border border-[#1C1C1C]/60 grayscale-50 rounded-lg"
      />
    </div>

    <p className="text-base sm:text-lg text-[#1C1C1C] leading-relaxed mb-5 font-Int text-justify">
      Stories that inspire, inform, and endure. Founded by <span className='font-semibold'>Harshvardhan</span> and
       <span className='font-semibold'> Kanishk Waghdhare</span>  , the company blends over 15 years of cinematic experience
      with fresh creative vision.
    </p>
    <p className="text-base sm:text-lg text-[#1C1C1C] leading-relaxed mb-5 font-Int text-justify">
      From impactful documentaries to branded films and government campaigns, our work
      spans collaborations with <span className='font-semibold'>Netflix</span>, <span className='font-semibold'>Amazon</span>, 
      <span className='font-semibold'> T-Series</span>, <span className='font-semibold'>Drishyam Films</span>, 
      <span className='font-semibold'> MX Player</span> and <span className='font-semibold'>JioHotstar</span> .
    </p>
    <p className="text-base sm:text-lg text-[#1C1C1C] leading-relaxed font-Int text-justify">
      We craft cinematic realities that connect deeply with audiences - stories that
      truly matter.
    </p>
  </div>

  {/* RIGHT IMAGE (for desktop) */}
  <div className="relative w-full md:w-[40%] hidden md:flex justify-center">
    <div className="relative w-full max-w-md">
      <div className="relative w-[85%] aspect-[4/5] ml-auto">
        <Image
          src="/image.jpg"
          alt="Film production behind the scenes"
          fill
          className="object-cover border-2 border-[#1C1C1C]/60 grayscale-50 rounded-lg"
        />
      </div>
    </div>
  </div>
</section>

    </main>
  );
}

export default Hero;
