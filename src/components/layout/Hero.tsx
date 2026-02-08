"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";


const Hero = () => {
  return (
    <section className="w-full bg-soft pt-8 pb-16 md:pt-12 md:pb-24 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          <div className="w-full lg:w-1/2 text-left">
            {/* --------- Badge -------- */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 rounded-full bg-white border border-gray-200 shadow-sm">
              <span className="text-[10px] md:text-xs font-semibold text-gray-400 uppercase tracking-widest">
                ✨ Trusted by modern businesses & individuals
              </span>
            </div>

            {/* Headline with Mixed typography */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold text-gray-900 leading-[1.1] tracking-tight mb-6 md:mb-8">
              Welcome to the <br />
              <span className="italic font-serif text-blue-600 font-normal">
                Tax Praxis
              </span>
            </h1>

            <p className="max-w-md text-base md:text-lg text-gray-500 mb-8 md:mb-10 leading-relaxed">
              Step into our financial oasis, where complex tax strategies bloom
              into clarity, and every calculation is a step toward endless
              possibilities.
            </p>

            {/* Primary Actions */}
            <div className="flex  gap-4">
              <Link href={"/personal"}>
              <button className="px-8 py-4 bg-[#111827] text-white font-semibold rounded-xl hover:bg-black transition-all shadow-lg active:scale-95 text-sm md:text-base text-center">
                Personal
              </button>
              </Link>
              <Link href={'/business'}>
              <button className="px-8 py-4 bg-white text-gray-900 font-semibold rounded-xl border border-gray-200 hover:border-gray-900 transition-all active:scale-95 text-sm md:text-base text-center">
                Business
              </button>
              </Link>
            </div>
          </div>

          {/* RIGHT COLUMN: Bento Grid with Staggered Layout */}
          <div className="w-full lg:w-1/2">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="relative aspect-square md:aspect-auto md:h-[300px] lg:h-[320px] rounded-2xl overflow-hidden shadow-md md:translate-y-0">
                <Image
                  src="/tax-working.webp"
                  alt="Tax Prepration"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div className="bg-[#F3F5F9] p-8 md:p-10 rounded-2xl shadow-md border border-gray-50 flex flex-col justify-center min-h-[220px] md:min-h-[240px] md:translate-y-3 lg:translate-y-4">
                <h3 className="text-4xl md:text-5xl font-medium text-gray-900 mb-2">
                  $14B
                </h3>
                <p className="text-sm font-medium text-gray-400 uppercase tracking-wider">
                  Funds & Strategies
                </p>
              </div>

              <div className="bg-[#F3F5F9] p-8 md:p-10 rounded-2xl shadow-md border border-gray-50 flex flex-col justify-center min-h-[220px] md:min-h-[240px] md:-translate-y-2 lg:-translate-y-3">
                <h3 className="text-4xl md:text-5xl font-medium text-gray-900 mb-2">
                  27k+
                </h3>
                <p className="text-sm font-medium text-gray-400 uppercase tracking-wider">
                  Tax Savings Found
                </p>
              </div>

              <div className="bg-[#F3EFEA] p-8 md:p-10 rounded-2xl shadow-md flex flex-col justify-center min-h-[220px] md:min-h-[260px] md:translate-y-1 lg:translate-y-2">
                <h3 className="text-4xl md:text-5xl font-medium text-gray-900 mb-2">
                  80k
                </h3>
                <p className="text-sm font-medium text-gray-600 uppercase tracking-wider mb-6">
                  Active Clients
                </p>

                {/* Avatar Stack */}
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-[#F3EFEA] relative overflow-hidden bg-gray-200"
                    >
                      <Image
                        src={`/avatars/user-${i}.webp`}
                        alt={`Client ${i}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*  Partner Logos */}
        <div className="mt-20 md:mt-32 py-10 px-4 md:px-0 border-y bg-gray-200 rounded-2xl border-gray-100">

          <div className="grid grid-cols-2 md:grid-cols-4 place-items-center gap-5 opacity-90 grayscale">
            <Image
              src="/partners/logo_ntaa.webp"
              alt="NTAA"
              width={200}
              height={40}
              className="object-contain"
            />

            <Image
              src="/partners/logo_ntaa-copy.webp"
              alt="NTAA Copy"
              width={200}
              height={40}
              className="object-contain"
            />

            <Image
              src="/partners/smsf.webp"
              alt="SMSF"
              width={110}
              height={40}
              className="object-contain"
            />

            <Image
              src="/partners/Tax-institute.webp"
              alt="Tax Institute"
              width={200}
              height={40}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
