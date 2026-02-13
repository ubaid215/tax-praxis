"use client";
import React, { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import TeamSkeleton from "@/components/common/TeamSkeleton";

const TeamPage = () => {
  const contactInfo = {
    name: "Farrukh Bashir",
    title: "Tax Store Parkes",
    address: "Suite 417, Level 4, 15 Moore Street Canberra, ACT 2601",
    whatsapp: "+61 434 900 027",
    landline: "+61 2 5119 2207",
    phone: "+61 449 624 007",
    email: "farrukh.bashir@taxstore.com.au",
  };

  return (
    <Suspense fallback={<TeamSkeleton />}>
      <main className="w-full bg-white overflow-x-hidden">
        {/* Hero Section - Mobile First */}
        <section className="w-full bg-soft pt-20 pb-12 sm:pt-24 sm:pb-16 md:pt-32 md:pb-24">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-4 sm:mb-6 rounded-full bg-white border border-gray-200 shadow-sm">
                <span className="text-[10px] sm:text-xs font-semibold text-blue-600 uppercase tracking-widest">
                  Our Team
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-semibold text-gray-900 leading-tight sm:leading-[1.1] tracking-tight mb-4 sm:mb-6 md:mb-8">
                Meet Our{" "}
                <span className="italic font-serif text-blue-600 font-normal block sm:inline">
                  Experts
                </span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto px-4">
                Dedicated professionals committed to your financial success, every step of the way.
              </p>
            </div>
          </div>
        </section>

        {/* Bento Grid Layout - Mobile First */}
        <section className="w-full py-12 sm:py-16 md:py-20 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-7xl mx-auto">
              {/* Main Bento Grid - Responsive grid with mobile-first approach */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 auto-rows-auto">
                
                {/* Large Profile Card - Full width on mobile, spans 2 cols on larger */}
                <div className="sm:col-span-2 lg:row-span-3 bg-gradient-to-br from-soft to-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-gray-200">
                  <div className="relative h-[400px] xs:h-[450px] sm:h-[500px] md:h-full">
                    <Image
                      src="/images/farrukh-bashir.png"
                      alt="Farrukh Bashir"
                      fill
                      className="object-cover object-center"
                      priority
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    
                    {/* Overlay Info - Adjusted for mobile */}
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/95 via-blue-900/70 to-transparent flex flex-col justify-end p-4 sm:p-6 md:p-8">
                      <div className="text-white">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-1 sm:mb-2">
                          {contactInfo.name}
                        </h2>
                        <p className="text-blue-400 font-semibold text-base sm:text-lg md:text-xl mb-3 sm:mb-4">
                          {contactInfo.title}
                        </p>
                        
                        {/* Qualifications - Wrap on mobile */}
                        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                          <span className="px-2 sm:px-3 py-1 sm:py-1.5 bg-white/20 backdrop-blur-md text-white rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider border border-white/30">
                            MPA
                          </span>
                          <span className="px-2 sm:px-3 py-1 sm:py-1.5 bg-white/20 backdrop-blur-md text-white rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider border border-white/30">
                            MBA
                          </span>
                          <span className="px-2 sm:px-3 py-1 sm:py-1.5 bg-white/20 backdrop-blur-md text-white rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider border border-white/30">
                            MA Economics
                          </span>
                          <span className="px-2 sm:px-3 py-1 sm:py-1.5 bg-white/20 backdrop-blur-md text-white rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider border border-white/30">
                            ASA CPA
                          </span>
                        </div>

                        <Link href="/book-meeting" className="block sm:inline-block">
                          <button className="w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 bg-blue-600 text-white font-semibold rounded-lg sm:rounded-xl hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl active:scale-95 text-sm sm:text-base">
                            Book a Meeting
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Experience Card */}
                <div className="bg-gradient-to-br from-gray-600 to-zinc-600 rounded-xl sm:rounded-2xl md:rounded-3xl p-5 sm:p-6 md:p-8 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg sm:rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-3 sm:mb-4 md:mb-6">
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-1 sm:mb-2 md:mb-3">
                    7+ Years
                  </h3>
                  <p className="text-blue-100 text-xs sm:text-sm md:text-base leading-relaxed">
                    Professional experience in Accounting, Finance, and Business
                  </p>
                </div>

                {/* Academic Card */}
                <div className="bg-gradient-primary rounded-xl sm:rounded-2xl md:rounded-3xl p-5 sm:p-6 md:p-8 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg sm:rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-3 sm:mb-4 md:mb-6">
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-1 sm:mb-2 md:mb-3">
                    Academic Excellence
                  </h3>
                  <p className="text-purple-100 text-xs sm:text-sm md:text-base leading-relaxed">
                    Former University Lecturer & Research Associate
                  </p>
                </div>

                {/* Bio Card - Full width on mobile, spans 2 cols on tablet+ */}
                <div className="sm:col-span-2 bg-white rounded-xl sm:rounded-2xl md:rounded-3xl p-5 sm:p-6 md:p-8 border-2 border-gray-200 shadow-lg">
                  <div className="flex items-start gap-3 mb-3 sm:mb-4">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-0.5 sm:mb-1">
                        Professional Journey
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-500">Background & Expertise</p>
                    </div>
                  </div>
                  <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">
                    <p>
                      Farrukh Bashir possesses an illustrious professional career spanning over seven years, marked by numerous accomplishments in the intricate fields of Accounting, Finance, and Business.
                    </p>
                    <p className="hidden sm:block">
                      At the helm of his professional odyssey lies the pivotal role of University Lecturer and Research Associate at the esteemed University of Malaysia Johor Bahru.
                    </p>
                  </div>
                </div>

                {/* Passion Card */}
                <div className="bg-gradient-to-br from-gray-900 to-gray-700 rounded-xl sm:rounded-2xl md:rounded-3xl p-5 sm:p-6 md:p-8 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg sm:rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-3 sm:mb-4 md:mb-6">
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-1 sm:mb-2 md:mb-3">
                    Catalyst
                  </h3>
                  <p className="text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed">
                    Dedicated to societal betterment and excellence
                  </p>
                </div>

                {/* Contact WhatsApp - Adjust for mobile */}
                <a
                  href={`https://wa.me/${contactInfo.whatsapp.replace(/\s/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-primary rounded-xl sm:rounded-2xl md:rounded-3xl p-5 sm:p-6 md:p-8 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg sm:rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-3 sm:mb-4 md:mb-6 group-hover:bg-white/30 transition-colors">
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                  </div>
                  <h3 className="text-base sm:text-lg md:text-xl font-bold mb-1 sm:mb-2">WhatsApp</h3>
                  <p className="text-green-100 text-xs sm:text-sm md:text-base font-medium break-words">
                    {contactInfo.whatsapp}
                  </p>
                  <h3 className="text-base sm:text-lg md:text-xl font-bold mt-2 sm:mt-3 mb-1 sm:mb-2">Mobile</h3>
                  <p className="text-blue-100 text-xs sm:text-sm md:text-base font-medium">
                    {contactInfo.phone}
                  </p>
                </a>

                {/* Quote Card - Full width */}
                <div className="sm:col-span-2 lg:col-span-4 bg-gradient-to-br from-soft to-white rounded-xl sm:rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16 border-2 border-gray-200 shadow-lg text-center">
                  <svg
                    className="w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14 text-blue-600 mx-auto mb-3 sm:mb-4 md:mb-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  
                  <blockquote className="text-base sm:text-xl md:text-2xl lg:text-3xl text-gray-900 font-medium leading-relaxed mb-3 sm:mb-4 md:mb-6 italic">
                    A captivating expedition of transformation, growth, and meaningful impact.
                  </blockquote>
                  
                  <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto">
                    Farrukh&apos;s journey transcends corporate boardrooms and lecture halls — it&apos;s a testament to the symbiotic fusion of personal and professional growth.
                  </p>
                </div>

                {/* Contact Email - Full width on mobile, spans 2 on tablet */}
                <div className="sm:col-span-2 bg-white rounded-xl sm:rounded-2xl md:rounded-3xl p-5 sm:p-6 md:p-8 border-2 border-gray-200 shadow-lg hover:shadow-xl transition-all">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg sm:rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-blue-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-0.5 sm:mb-1">
                        Email
                      </h3>
                      <a
                        href={`mailto:${contactInfo.email}`}
                        className="text-xs sm:text-sm md:text-base text-blue-600 hover:text-blue-700 font-medium break-all transition-colors"
                      >
                        {contactInfo.email}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Contact Address - Full width on mobile, spans 2 on tablet */}
                <div className="sm:col-span-2 bg-white rounded-xl sm:rounded-2xl md:rounded-3xl p-5 sm:p-6 md:p-8 border-2 border-gray-200 shadow-lg">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg sm:rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-blue-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-0.5 sm:mb-1">
                        Office Address
                      </h3>
                      <p className="text-xs sm:text-sm md:text-base text-gray-600">
                        {contactInfo.address}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Landline Contact */}
                <a
                  href={`tel:${contactInfo.landline}`}
                  className="sm:col-span-2 lg:col-span-1 bg-gradient-primary rounded-xl sm:rounded-2xl md:rounded-3xl p-5 sm:p-6 md:p-8 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg sm:rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-3 sm:mb-4 md:mb-6 group-hover:bg-white/30 transition-colors">
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-base sm:text-lg md:text-xl font-bold mb-1 sm:mb-2">Landline</h3>
                  <p className="text-indigo-100 text-xs sm:text-sm md:text-base font-medium">
                    {contactInfo.landline}
                  </p>
                </a>

                {/* CTA Card - Spans remaining space */}
                <div className="sm:col-span-2 lg:col-span-3 bg-gradient-to-br from-gray-600 via-zinc-700 to-gray-800 rounded-xl sm:rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 text-white shadow-2xl">
                  <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3 md:mb-4 leading-tight">
                    Ready to Transform Your{" "}
                    <span className="italic font-serif font-normal block sm:inline">Financial Future?</span>
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-blue-100 mb-4 sm:mb-6 md:mb-8 leading-relaxed">
                    Connect with Farrukh and experience expertise backed by passion, dedication, and commitment to your success.
                  </p>
                  <div className="flex flex-col xs:flex-row gap-2 sm:gap-3 md:gap-4">
                    <Link href="/book-meeting" className="flex-1">
                      <button className="w-full px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 bg-white text-blue-600 font-bold rounded-lg sm:rounded-xl hover:bg-gray-50 transition-all shadow-lg hover:shadow-xl active:scale-95 text-xs sm:text-sm md:text-base">
                        Book Consultation
                      </button>
                    </Link>
                    <Link href="/service-fees" className="flex-1">
                      <button className="w-full px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 bg-blue-700 text-white font-bold rounded-lg sm:rounded-xl border-2 border-white/30 hover:bg-blue-800 transition-all active:scale-95 text-xs sm:text-sm md:text-base">
                        View Services
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Suspense>
  );
};

export default TeamPage;