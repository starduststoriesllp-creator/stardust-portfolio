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

export default function About() {
  const [selectedId, setSelectedId] = useState(team[0].id);
  const selected = team.find((m) => m.id === selectedId)!;

  return (
    <section className="min-h-screen bg-linear-to-b from-white to-slate-50 px-4 sm:px-8 md:px-16 py-20 text-[#3E4772] font-Mont">

      {/* Logo */}
      <div className="flex justify-center my-10">
        <Image src="/new.png" alt="Stardust Stories Logo" width={180} height={90} />
      </div>

      <div className="max-w-7xl mx-auto bg-white rounded-2xl p-6 sm:p-10 shadow-sm">

        {/* DESKTOP: TWO COLUMN */}
        <div className="hidden lg:grid grid-cols-12 gap-14 items-start">

          {/* LEFT COLUMN */}
          <div className="col-span-5 space-y-10">
            <div>
              <p className="text-sm font-semibold text-[#e1a730] mb-2">
                Founders
              </p>

              <h2 className="text-4xl xl:text-5xl font-extrabold text-[#16324b] leading-tight">
                Meet the team
              </h2>

              <div className="w-24 h-1 bg-[#e1a730] mt-5 rounded" />

              <p className="mt-6 text-gray-600 leading-relaxed max-w-md">
                Stardust Stories crafts cinematic narratives, branded films, and
                media experiences with artistic excellence and impact. Our
                founders bring industry experience across streaming,
                advertising, and film production.
              </p>
            </div>

            {/* Founder selector */}
            <div className="space-y-4">
              {team.map((member) => (
                <button
                  key={member.id}
                  onClick={() => setSelectedId(member.id)}
                  className={`w-full flex items-center gap-5 p-4 rounded-xl transition-all text-left
                    ${
                      selectedId === member.id
                        ? "bg-[#fff9eb] ring-2 ring-[#e1a730]/40"
                        : "bg-gray-100"
                    }`}
                >
                  <div className="w-14 h-14 rounded-full overflow-hidden border">
                    <Image
                      src={member.img}
                      alt={member.name}
                      width={120}
                      height={120}
                      className="object-cover w-full h-full"
                    />
                  </div>

                  <div>
                    <h3 className="font-medium">{member.name}</h3>
                    <p className="text-sm text-gray-500">{member.role}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN – FEATURED FOUNDER */}
          <div className="col-span-7 sticky top-28">
            <div className="border rounded-2xl p-10 shadow-sm">

              <div className="flex items-center gap-6 mb-6">
                <div className="w-28 h-28 rounded-full overflow-hidden border">
                  <Image
                    src={selected.img}
                    alt={selected.name}
                    width={220}
                    height={220}
                    className="object-cover w-full h-full"
                  />
                </div>

                <div>
                  <h3 className="text-2xl font-semibold">{selected.name}</h3>
                  <p className="text-sm text-gray-500">{selected.role}</p>
                </div>
              </div>

              <p className="text-base text-gray-700 leading-relaxed max-w-xl">
                {selected.info}
              </p>
            </div>
          </div>
        </div>

{/* MOBILE – EDITORIAL STACK */}
<div className="lg:hidden flex flex-col gap-12">
  {team.map((member) => (
    <div
      key={member.id}
      className="flex flex-col items-center text-center bg-[#f8fafc] rounded-2xl px-6 py-10 shadow-sm"
    >
      <div className="w-28 h-28 rounded-full overflow-hidden border mb-5 bg-white">
        <Image
          src={member.img}
          alt={member.name}
          width={200}
          height={200}
          className="object-cover w-full h-full"
        />
      </div>

      <h3 className="text-lg font-semibold">{member.name}</h3>
      <p className="text-sm text-gray-500">{member.role}</p>

      <p className="mt-4 text-sm text-gray-700 leading-relaxed max-w-md">
        {member.info}
      </p>
    </div>
  ))}
</div>


      </div>
    </section>
  );
}
