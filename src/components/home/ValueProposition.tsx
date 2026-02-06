"use client";
import React from "react";

const ValueProposition = () => {
  return (
    <section className="w-full bg-white py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 rounded-full bg-soft border border-gray-200 shadow-sm">
            <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">
              Our Value
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 leading-[1.1] tracking-tight mb-6">
            What we bring to{" "}
            <span className="italic font-serif text-blue-600 font-normal">
              your table
            </span>
          </h2>
          
          <p className="text-base md:text-lg text-gray-500 leading-relaxed">
            We don&apos;t just file your taxes—we architect financial strategies that transform obligations into opportunities.
          </p>
        </div>

        {/* Value Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Card 1 */}
          <div className="bg-soft p-8 md:p-10 rounded-2xl border border-gray-100 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-blue-600 flex items-center justify-center mb-6">
              <svg
                className="w-6 h-6 md:w-7 md:h-7 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            
            <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">
              Proactive Protection
            </h3>
            
            <p className="text-sm md:text-base text-gray-500 leading-relaxed">
              Stay ahead of compliance issues with continuous monitoring and strategic tax planning that anticipates changes before they impact you.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#F3EFEA] p-8 md:p-10 rounded-2xl border border-gray-100 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 md:translate-y-4">
            <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gray-900 flex items-center justify-center mb-6">
              <svg
                className="w-6 h-6 md:w-7 md:h-7 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                />
              </svg>
            </div>
            
            <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">
              Maximized Savings
            </h3>
            
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              Uncover hidden deductions and credits through meticulous analysis. Every dollar saved is a dollar earned toward your financial goals.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-soft p-8 md:p-10 rounded-2xl border border-gray-100 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-blue-600 flex items-center justify-center mb-6">
              <svg
                className="w-6 h-6 md:w-7 md:h-7 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            
            <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">
              Time Liberation
            </h3>
            
            <p className="text-sm md:text-base text-gray-500 leading-relaxed">
              Reclaim hundreds of hours annually. Focus on growing your business while we handle the complexities of tax compliance and strategy.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-soft p-8 md:p-10 rounded-2xl border border-gray-100 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 md:-translate-y-2">
            <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gray-900 flex items-center justify-center mb-6">
              <svg
                className="w-6 h-6 md:w-7 md:h-7 text-white"
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
            
            <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">
              Strategic Insights
            </h3>
            
            <p className="text-sm md:text-base text-gray-500 leading-relaxed">
              Transform raw financial data into actionable intelligence. Make informed decisions backed by deep tax and financial expertise.
            </p>
          </div>

          {/* Card 5 */}
          <div className="bg-[#F3EFEA] p-8 md:p-10 rounded-2xl border border-gray-100 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-blue-600 flex items-center justify-center mb-6">
              <svg
                className="w-6 h-6 md:w-7 md:h-7 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            
            <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">
              Personal Partnership
            </h3>
            
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              You&lsquo;re not just a client number. Experience dedicated support from tax professionals who know your business inside and out.
            </p>
          </div>

          {/* Card 6 */}
          <div className="bg-soft p-8 md:p-10 rounded-2xl border border-gray-100 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 md:translate-y-3">
            <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gray-900 flex items-center justify-center mb-6">
              <svg
                className="w-6 h-6 md:w-7 md:h-7 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
            </div>
            
            <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">
              Long-term Growth
            </h3>
            
            <p className="text-sm md:text-base text-gray-500 leading-relaxed">
              Build sustainable wealth through year-round tax optimization. Our strategies evolve with your business, ensuring continuous growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;