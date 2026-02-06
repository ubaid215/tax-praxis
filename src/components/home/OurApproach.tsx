"use client";
import React from "react";
import  Link from "next/link";

const OurApproach = () => {
  const approaches = [
    {
      number: "01",
      title: "Deep Discovery",
      description:
        "We start by understanding your complete financial picture—not just your numbers, but your goals, challenges, and vision for the future.",
      color: "bg-blue-600",
      textColor: "text-blue-600",
    },
    {
      number: "02",
      title: "Strategic Analysis",
      description:
        "Our team analyzes every transaction, deduction, and opportunity using advanced tools and decades of combined expertise to identify optimization potential.",
      color: "bg-gray-900",
      textColor: "text-gray-900",
    },
    {
      number: "03",
      title: "Custom Solutions",
      description:
        "No cookie-cutter approaches. We design tax strategies tailored specifically to your situation, industry, and objectives—strategies that actually work.",
      color: "bg-blue-600",
      textColor: "text-blue-600",
    },
    {
      number: "04",
      title: "Proactive Execution",
      description:
        "We implement your strategy with precision and monitor it year-round, making adjustments as tax laws change and your business evolves.",
      color: "bg-gray-900",
      textColor: "text-gray-900",
    },
  ];

  return (
    <section className="w-full bg-white py-16 md:py-24 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 rounded-full bg-soft border border-gray-200 shadow-sm">
            <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">
              Our Process
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 leading-[1.1] tracking-tight mb-6 md:mb-8">
            Our{" "}
            <span className="italic font-serif text-blue-600 font-normal">
              approach
            </span>
          </h2>

          <p className="text-base md:text-lg text-gray-500 leading-relaxed max-w-2xl">
            A systematic, proven methodology that transforms complex tax challenges into clear, actionable strategies.
          </p>
        </div>

        {/* Approach Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {approaches.map((approach, index) => (
            <div
              key={index}
              className="group relative bg-soft p-8 md:p-10 lg:p-12 rounded-2xl border border-gray-100 shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
            >
              {/* Number Badge */}
              <div
                className={`inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-xl ${approach.color} mb-6 shadow-lg`}
              >
                <span className="text-xl md:text-2xl font-bold text-white">
                  {approach.number}
                </span>
              </div>

              {/* Content */}
              <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
                {approach.title}
              </h3>

              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                {approach.description}
              </p>

              {/* Decorative Arrow */}
              <div
                className={`absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${approach.textColor}`}
              >
                <svg
                  className="w-6 h-6 md:w-7 md:h-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </div>

              {/* Connection Line (desktop only, except last item) */}
              {index < approaches.length - 1 && index % 2 === 0 && (
                <div className="hidden lg:block absolute top-1/2 -right-6 w-12 border-t-2 border-dashed border-gray-300" />
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-16 md:mt-20 p-8 md:p-12 lg:p-16 bg-gray-900 rounded-2xl shadow-xl text-center">
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-4 md:mb-6">
            Ready to experience the{" "}
            <span className="italic font-serif text-blue-400 font-normal">
              difference?
            </span>
          </h3>

          <p className="text-base md:text-lg text-gray-300 mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed">
            Let&lsquo;s discuss how our approach can transform your tax situation and unlock financial opportunities you didn&lsquo;t know existed.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={"/booking"}>
            <button className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all shadow-lg active:scale-95 text-sm md:text-base">
              Schedule Consultation
            </button>
            </Link>
            <Link href={'/fees'}>
            <button className="px-8 py-4 bg-white text-gray-900 font-semibold rounded-xl border border-gray-200 hover:bg-gray-50 transition-all active:scale-95 text-sm md:text-base">
              View Our Services
            </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurApproach;