"use client";
import { PiFilmSlate } from "react-icons/pi";
import { MdConnectedTv, MdOutlineCampaign, MdOutlinePermMedia, MdOutlineDesignServices, MdModelTraining, MdEventAvailable } from "react-icons/md";
import { RiAdvertisementLine } from "react-icons/ri";
import { IoMusicalNotesSharp, IoPeopleOutline } from "react-icons/io5";
import { GoDeviceCameraVideo } from "react-icons/go";
import { GiAwareness } from "react-icons/gi";

const ServiceArea = () => {
  const services = [
    { icon: <PiFilmSlate size={50} />, label: "Film & Video Production" },
    { icon: <MdConnectedTv size={50} />, label: "Television & OTT Content" },
    { icon: <MdOutlineCampaign size={50} />, label: "Digital Marketing & Campaign Management" },
    { icon: <RiAdvertisementLine size={50} />, label: "Branding & Advertising" },
    { icon: <IoMusicalNotesSharp size={50} />, label: "Audio & Music Production" },
    { icon: <GoDeviceCameraVideo size={50} />, label: "Photography & Videography" },
    { icon: <MdOutlinePermMedia size={50} />, label: "Post-Production Services" },
    { icon: <MdOutlineDesignServices size={50} />, label: "Design & Creative Solutions" },
    { icon: <IoPeopleOutline size={50} />, label: "Public Relations & Communication" },
    { icon: <MdModelTraining size={50} />, label: "Training & Workshops" },
    { icon: <MdEventAvailable size={50} />, label: "Event Production & Management" },
    { icon: <GiAwareness size={50} />, label: "Government Communication & Awareness Campaigns" },
  ];

  return (
    <section className="w-full bg-[#0E0E0E] px-6 sm:px-10 md:px-20 lg:px-24 py-16 sm:py-20 md:py-28">
      <div className="text-center sm:text-left mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-Play uppercase text-[#f7f0ea] pb-2 tracking-wide">
          Our Services
        </h2>
        <p className="text-base sm:text-lg uppercase font-Int text-[#C2A15A] mt-2">
          From vision to screen, we cover it all
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 lg:gap-14">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col cursor-pointer px-6 py-8 bg-[#151414]/50 font-Int items-center justify-center text-center border-2 border-[#262424] rounded-sm hover:scale-[1.03] transition-transform duration-200"
          >
            <div className="text-[#C2A15A] mb-3 flex justify-center">{service.icon}</div>
            <p className="text-sm sm:text-base md:text-lg pt-1 text-white leading-relaxed">
              {service.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceArea;
