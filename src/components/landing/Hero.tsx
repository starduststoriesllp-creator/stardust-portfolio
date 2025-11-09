import Link from 'next/link';
import Image from 'next/image';

function Hero() {
  return (
    <main className="font-Mont">
      <header className="relative w-full h-[80vh] sm:h-[750px] text-white overflow-hidden">
          <Image
        src="/hero (1).jpg"
        alt="Behind the scenes at film set"
        fill
        className="absolute inset-0 w-full h-full object-cover grayscale-50"
      />
        <div className='inset-0 absolute bg-black/40'/>

        <div className="relative z-10 flex flex-col justify-end items-start h-full px-4 sm:px-10 md:px-20 pb-20 text-center sm:text-left">
          <h1 className="text-2xl sm:text-4xl md:text-5xl  font-bold leading-tight uppercase tracking-wider text-[#EAEAEA]">
            Crafting Cinema, <br className="hidden sm:block" /> Creating Impact.
          </h1>

          <p className="text-base sm:text-lg md:text-lg text-[#EAEAEA] mt-4 tracking-wide uppercase ">
            From films to public campaigns, we tell stories that matter.
          </p>

          <div className="flex flex-col w-full sm:flex-row gap-3 sm:gap-6 mt-6 items-center sm:items-start">
            <Link
              href="/portfolio"
              className="px-5 py-2 text-sm sm:px-8 sm:py-3 sm:text-base border-2 w-[200px] sm:w-auto text-center border-[#EAEAEA] text-[#EAEAEA] tracking-wide uppercase hover:border-[#e1a730] hover:text-[#e1a730] transition-all duration-300"
            >
              View Our Work
            </Link>
            <Link
              href="/about"
              className="px-5 py-2 text-sm sm:px-8 sm:py-3 sm:text-base border-2 w-[200px] sm:w-auto text-center border-white text-white tracking-wide uppercase hover:border-[#e1a730] hover:text-[#e1a730] transition-all duration-300"
            >
              About Us
            </Link>
          </div>

        </div>
      </header>


      <section
  className="relative py-12 sm:py-16 md:py-24 px-4 sm:px-10 md:px-20  text-[#1C1C1C] flex flex-col md:flex-row justify-between items-center gap-10 md:gap-0"
>
  <div className="w-full md:w-[55%]">
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase text-[#3E4772] mb-6 tracking-wider leading-snug text-center md:text-left">
      At Stardust Stories, <br className="hidden sm:block" /> we bring stories to life
    </h2>
    <div className="relative w-full mb-6 md:hidden aspect-4/5">
      <Image
        src="/image.jpg"
        alt="Behind the scenes at film set"
        fill
        className="object-cover border border-[#2e266d]/40 rounded-lg"
      />
    </div>

    <p className="text-base sm:text-lg text-[#1C1C1C] leading-relaxed mb-3  text-justify">
      Stories that inspire, inform, and endure. Founded by <span className='font-semibold text-[#e1a730]'>Harshvardhan</span> and
       <span className='font-semibold text-[#e1a730]'> Kanishk Waghdhare</span>  , the company blends over 15 years of cinematic experience
      with fresh creative vision.
    </p>
    <p className="text-base sm:text-lg text-[#1C1C1C] leading-relaxed text-justify">
      From impactful documentaries to branded films and government campaigns, our work
      spans collaborations with <span className='font-semibold text-[#e1a730]'>Netflix</span>, <span className='font-semibold text-[#e1a730]'>Amazon</span>, 
      <span className='font-semibold text-[#e1a730]'> T-Series</span>, <span className='font-semibold text-[#e1a730]'>Drishyam Films</span>, 
      <span className='font-semibold text-[#e1a730]'> MX Player</span> and <span className='font-semibold text-[#e1a730]'>JioHotstar</span> .
      We craft cinematic realities that connect deeply with audiences - stories that
      truly matter.
    </p>
  </div>

  <div className="relative w-full md:w-[40%] hidden md:flex justify-center">
    <div className="relative w-full max-w-md">
      <div className="relative w-[85%] aspect-4/5 ml-auto">
        <Image
          src="/main.jpg"
          alt="Film production behind the scenes"
          fill
          unoptimized
          className="object-cover border-2 border-[#2e266d]/40 rounded-lg"
        />
      </div>
    </div>
  </div>
</section>

    </main>
  );
}

export default Hero;
