"use client";
import React from "react";
import Link from "next/link";


const ABetterWay = () => {
  const comparisons = [
    {
      old: "Filing taxes once a year in a panic",
      new: "Year-round strategic tax planning",
    },
    {
      old: "Generic advice from distant accountants",
      new: "Personalized strategies from dedicated partners",
    },
    {
      old: "Reactive compliance and damage control",
      new: "Proactive optimization and growth",
    },
    {
      old: "Uncertainty and fear of audits",
      new: "Confidence and complete peace of mind",
    },
    {
      old: "Leaving money on the table",
      new: "Maximizing every deduction and credit",
    },
    {
      old: "Hours spent on tax paperwork",
      new: "Time freed for what matters most",
    },
  ];

  return (
    <section className="w-full bg-white py-16 md:py-24 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        {/***********  Section Header ***********/}
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 rounded-full bg-soft border border-gray-200 shadow-sm">
            <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">
              The Transformation
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 leading-[1.1] tracking-tight mb-6 md:mb-8">
            A{" "}
            <span className="italic font-serif text-blue-600 font-normal">
              better way
            </span>
          </h2>

          <p className="text-base md:text-lg text-gray-500 leading-relaxed">
            Move from reactive stress to proactive success. See how Tax Praxis transforms the traditional tax experience.
          </p>
        </div>

        {/*========= Comparison Grid ============*/}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
            <div className="bg-red-50 p-4 md:p-6 rounded-xl border border-red-200">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-red-600 flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-5 h-5 md:w-6 md:h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                  The Old Way
                </h3>
              </div>
            </div>

            <div className="bg-green-50 p-4 md:p-6 rounded-xl border border-green-200">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-green-600 flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-5 h-5 md:w-6 md:h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                  The Tax Praxis Way
                </h3>
              </div>
            </div>
          </div>

          {/* Comparison Rows */}
          <div className="space-y-4 md:space-y-6">
            {comparisons.map((comparison, index) => (
              <div
                key={index}
                className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6"
              >
                {/* Old Way */}
                <div className="bg-soft p-6 md:p-8 rounded-xl border border-gray-200 shadow-sm relative group hover:shadow-md transition-all duration-300">
                  <div className="absolute top-4 right-4 w-6 h-6 md:w-8 md:h-8 rounded-full bg-red-100 flex items-center justify-center opacity-50">
                    <svg
                      className="w-3 h-3 md:w-4 md:h-4 text-red-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </div>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed pr-8">
                    {comparison.old}
                  </p>
                </div>

                {/* New Way */}
                <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-6 md:p-8 rounded-xl shadow-md relative group hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className="absolute top-4 right-4 w-6 h-6 md:w-8 md:h-8 rounded-full bg-white/20 flex items-center justify-center">
                    <svg
                      className="w-3 h-3 md:w-4 md:h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <p className="text-sm md:text-base text-white font-medium leading-relaxed pr-8">
                    {comparison.new}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Stats Section */}
        <div className="mt-16 md:mt-20 bg-[#F3EFEA] p-8 md:p-12 lg:p-16 rounded-2xl shadow-lg">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 mb-8 md:mb-12 text-center">
              Real results from the{" "}
              <span className="italic font-serif text-blue-600 font-normal">
                better way
              </span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-blue-600 mb-4 shadow-lg">
                  <svg
                    className="w-8 h-8 md:w-10 md:h-10 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  3.7x
                </div>
                <div className="text-sm md:text-base text-gray-600 font-medium">
                  Average ROI on our services
                </div>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gray-900 mb-4 shadow-lg">
                  <svg
                    className="w-8 h-8 md:w-10 md:h-10 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    />
                  </svg>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  98.7%
                </div>
                <div className="text-sm md:text-base text-gray-600 font-medium">
                  Client retention rate
                </div>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-blue-600 mb-4 shadow-lg">
                  <svg
                    className="w-8 h-8 md:w-10 md:h-10 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  24hrs
                </div>
                <div className="text-sm md:text-base text-gray-600 font-medium">
                  Average response time
                </div>
              </div>
            </div>

            <div className="mt-10 md:mt-12 text-center">
              <Link href={'/booking'}>
              <button className="px-8 py-4 bg-gray-900 text-white font-semibold rounded-xl hover:bg-black transition-all shadow-lg active:scale-95 text-sm md:text-base">
                Start Your Transformation
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ABetterWay;