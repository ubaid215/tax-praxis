"use client";
import React, { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { personalServices } from "@/constants";
import PersonalSkeleton from "@/components/common/PersonalSkeleton";

const PersonalPage = () => {
  return (
    <Suspense fallback={<PersonalSkeleton />}>
      <main className="w-full bg-white">
        {/* Hero Section */}
        <section className="w-full bg-soft pt-24 pb-16 md:pt-32 md:pb-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 rounded-full bg-white border border-gray-200 shadow-sm">
                <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">
                  Personal Services
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-7xl font-semibold text-gray-900 leading-[1.1] tracking-tight mb-6 md:mb-8">
                Your Financial{" "}
                <span className="italic font-serif text-blue-600 font-normal">
                  Future
                </span>
              </h1>

              <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8">
                Comprehensive personal financial services designed to protect, grow, and optimize your wealth at every life stage.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/booking">
                  <button className="px-8 py-4 bg-gray-900 text-white font-semibold rounded-xl hover:bg-black transition-all shadow-lg active:scale-95 text-sm md:text-base">
                    Book Consultation
                  </button>
                </Link>
                <Link href="/fees">
                  <button className="px-8 py-4 bg-white text-gray-900 font-semibold rounded-xl border border-gray-200 hover:border-gray-900 transition-all active:scale-95 text-sm md:text-base">
                    View Pricing
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services - Bento Grid Layout */}
        <section className="w-full py-16 md:py-20 lg:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-7xl mx-auto ">
              {/* Bento Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                {/* Service 1 - Tax Returns (Tall Card - 2 rows) */}
                <div className="md:row-span-2 bg-soft rounded-2xl overflow-hidden shadow-md border border-gray-200 hover:shadow-xl transition-all duration-300 group">
                  <div className="relative aspect-[4/3] md:aspect-square overflow-hidden">
                    <Image
                      src="/services/personal/tax-working.webp"
                      alt="Tax Returns"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  
                  <div className="p-6 md:p-8">
                    <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center mb-4 shadow-sm">
                      {React.createElement(personalServices[0].icon, {
                        className: "w-6 h-6 text-white",
                      })}
                    </div>
                    
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                      {personalServices[0].title}
                    </h3>
                    
                    <p className="text-sm text-gray-600 font-medium mb-4">
                      {personalServices[0].subtitle}
                    </p>
                    
                    <p className="text-sm text-gray-600 leading-relaxed mb-6">
                      {personalServices[0].description}
                    </p>

                    <div className="space-y-2 mb-6">
                      {personalServices[0].features.slice(0, 3).map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <div className="w-4 h-4 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <svg className="w-2.5 h-2.5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <p className="text-xs text-gray-600">{feature}</p>
                        </div>
                      ))}
                    </div>

                    <Link href="/tax-return" target="blank">
                      <button className="w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all shadow-sm text-sm">
                        Learn More
                      </button>
                    </Link>
                  </div>
                </div>

                {/* Service 2 - General Insurance (Standard) */}
                <div className="bg-[#F3EFEA] rounded-2xl p-6 md:p-8 shadow-md border border-gray-200 hover:shadow-xl transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-gray-900 flex items-center justify-center mb-4 shadow-sm">
                    {React.createElement(personalServices[1].icon, {
                      className: "w-6 h-6 text-white",
                    })}
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                    {personalServices[1].title}
                  </h3>
                  
                  <p className="text-xs text-gray-600 font-medium mb-4">
                    {personalServices[1].subtitle}
                  </p>
                  
                  <p className="text-sm text-gray-700 leading-relaxed mb-4">
                    {personalServices[1].description}
                  </p>

                  <Link href="/general-insurance" target="blank">
                    <button className="w-full px-6 py-3 bg-gray-900 text-white font-semibold rounded-xl hover:bg-black transition-all shadow-sm text-sm">
                      Learn More
                    </button>
                  </Link>
                </div>

                {/* Service 3 - Financial Planning (Standard) */}
                <div className="bg-soft rounded-2xl p-6 md:p-8 shadow-md border border-gray-200 hover:shadow-xl transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center mb-4 shadow-sm">
                    {React.createElement(personalServices[2].icon, {
                      className: "w-6 h-6 text-white",
                    })}
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                    {personalServices[2].title}
                  </h3>
                  
                  <p className="text-xs text-gray-600 font-medium mb-4">
                    {personalServices[2].subtitle}
                  </p>
                  
                  <p className="text-sm text-gray-700 leading-relaxed mb-4">
                    {personalServices[2].description}
                  </p>

                  <Link href="/financial-planing" target="blank">
                    <button className="w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all shadow-sm text-sm">
                      Learn More
                    </button>
                  </Link>
                </div>

                {/* Service 4 - SMSF (Wide Card - 2 columns) */}
                <div className="lg:col-span-2 bg-white rounded-2xl overflow-hidden shadow-md border border-gray-200 hover:shadow-xl transition-all duration-300 group">
                  <div className="grid grid-cols-1 md:grid-cols-5">
                    <div className="md:col-span-2 relative aspect-video md:aspect-auto md:min-h-full">
                      <Image
                        src="/services/personal/tax-working.webp"
                        alt="SMSF"
                        fill
                        className="object-cover  group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    
                    <div className="md:col-span-3 p-6 md:p-8 flex flex-col">
                      <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center mb-4 shadow-sm">
                        {React.createElement(personalServices[3].icon, {
                          className: "w-6 h-6 text-white",
                        })}
                      </div>
                      
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                        {personalServices[3].title}
                      </h3>
                      
                      <p className="text-sm text-gray-600 font-medium mb-4">
                        {personalServices[3].subtitle}
                      </p>
                      
                      <p className="text-sm text-gray-700 leading-relaxed mb-6">
                        {personalServices[3].description}
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                        {personalServices[3].features.slice(0, 4).map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <div className="w-4 h-4 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <svg className="w-2.5 h-2.5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            <p className="text-xs text-gray-600">{feature}</p>
                          </div>
                        ))}
                      </div>

                      <Link href="/self-managed-superannuation-fund" target="blank" className="mt-auto">
                        <button className="w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all shadow-sm text-sm">
                          Learn More
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="w-full py-16 md:py-20 lg:py-24 bg-soft">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-6xl mx-auto">
              {/* Section Header */}
              <div className="text-center mb-12 md:mb-16">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 rounded-full bg-soft border border-gray-200 shadow-sm">
                  <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">
                    Why Choose Us
                  </span>
                </div>

                <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-4">
                  Personal Service,{" "}
                  <span className="italic font-serif text-blue-600 font-normal">
                    Professional Results
                  </span>
                </h2>
              </div>

              {/* Benefits Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300 text-center">
                  <div className="w-14 h-14 rounded-xl bg-blue-600 flex items-center justify-center mx-auto mb-6 shadow-sm">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Personalized Approach
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Every strategy is tailored to your unique goals and life stage
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300 text-center">
                  <div className="w-14 h-14 rounded-xl bg-gray-900 flex items-center justify-center mx-auto mb-6 shadow-sm">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Trusted Expertise
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Years of experience protecting and growing wealth for families
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300 text-center">
                  <div className="w-14 h-14 rounded-xl bg-blue-600 flex items-center justify-center mx-auto mb-6 shadow-sm">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Proactive Planning
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    We anticipate opportunities and challenges before they arrive
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="w-full py-16 md:py-20 lg:py-24 bg-gray-900 mb-20 rounded-4xl">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Ready to secure your{" "}
                <span className="italic font-serif text-blue-400 font-normal">
                  financial future?
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed">
                Let&lsquo;s create a personalized strategy that protects what you have and grows what you need.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/booking">
                  <button className="px-10 py-5 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all shadow-lg active:scale-95 text-base md:text-lg">
                    Book Free Consultation
                  </button>
                </Link>
                <Link href="/team">
                  <button className="px-10 py-5 bg-white text-gray-900 font-bold rounded-xl hover:bg-gray-100 transition-all active:scale-95 text-base md:text-lg">
                    Meet Our Team
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Suspense>
  );
};

export default PersonalPage;