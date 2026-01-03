"use client";
import React, { useState } from "react";
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
  const [selectedId, setSelectedId] = useState<number | null>(team[0].id);
  const selectedMember = team.find((m) => m.id === selectedId) || null;

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
      </div>
      <div className="max-w-6xl mx-auto text-[#3E4772]/90 leading-relaxed text-justify space-y-6 bg-[#e6e6e6]/40 p-8 rounded-xl shadow-md border border-[#99bffb]/40">

        <section className="py-10 bg-white mt-10">
          <div className="max-w-6xl mx-auto px-6">

            <div className="col-span-1 flex flex-col justify-center">
              <h2 className="text-3xl font-bold leading-tight">
                Meet The Team <br /> Our Professionals
              </h2>

              <div className="w-20 h-[3px] bg-gray-300 mt-4"></div>

              <div className="mt-8 bg-gray-100 p-6 rounded-xl shadow-sm">
                <p className="text-gray-600 leading-relaxed">
                  Stardust Stories LLP is a media and film production company
                  founded by Harshvardhan Waghdhare and Kanishk Waghdhare, two brothers
                  united by a shared passion for storytelling and cinema.
                </p>
              </div>
            </div>
            <div className="col-span-2 grid sm:grid-cols-2 gap-8 pt-10">
              {team.map((member) => (
                <button
                  key={member.id}
                  onClick={() => setSelectedId(member.id)}
                  aria-pressed={selectedId === member.id}
                  className={`text-left bg-gray-50 p-8 rounded-xl transition shadow-sm hover:shadow-xl focus:outline-none ${
                    selectedId === member.id ? "ring-4 ring-[#e1a730]/30" : ""
                  }`}
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

                  <h3 className="mt-4 font-semibold text-lg tracking-wide text-center">
                    {member.name}
                  </h3>
                  <p className="text-gray-500 text-sm text-center">
                    {member.role}
                  </p>

                  <div className="flex justify-center gap-4 mt-4 text-gray-700 text-xl">
                    <i className="fa-brands fa-facebook-f"></i>
                    <i className="fa-brands fa-instagram"></i>
                    <i className="fa-brands fa-linkedin-in"></i>
                  </div>
                </button>
              ))}

              {selectedMember && (
                <div className="col-span-2 mt-4 p-6 bg-[#f8fafc] rounded-xl border border-gray-200 shadow-inner">
                  <h3 className="text-xl font-semibold">{selectedMember.name}</h3>
                  <p className="text-sm text-gray-500 mb-4">{selectedMember.role}</p>
                  <p className="text-gray-700">{selectedMember.info}</p>
                </div>
              )}
            </div>

          </div>
        </section>     



      </div>
    </section>
  );
};

export default About;
