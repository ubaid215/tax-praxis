"use client";
import React from "react";
import Link from "next/link";


const TheProblemWeSolve = () => {
  const problems = [
    {
      icon: (
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
            d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: "Overpaying Taxes",
      stat: "$847B",
      statLabel: "Overpaid Annually",
      description:
        "Businesses and individuals overpay billions each year due to missed deductions, credits, and optimization strategies.",
      bgColor: "bg-red-50",
      iconColor: "bg-red-600",
      textColor: "text-red-600",
    },
    {
      icon: (
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
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: "Wasted Time",
      stat: "302hrs",
      statLabel: "Per Year Average",
      description:
        "The average business owner spends hundreds of hours on tax-related tasks—time that could be spent growing their business.",
      bgColor: "bg-orange-50",
      iconColor: "bg-orange-600",
      textColor: "text-orange-600",
    },
    {
      icon: (
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
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
      title: "Compliance Stress",
      stat: "67%",
      statLabel: "Fear Making Mistakes",
      description:
        "Most taxpayers live in fear of audits, penalties, and the overwhelming complexity of staying compliant with ever-changing regulations.",
      bgColor: "bg-yellow-50",
      iconColor: "bg-yellow-600",
      textColor: "text-yellow-700",
    },
    {
      icon: (
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
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
      title: "Reactive Planning",
      stat: "89%",
      statLabel: "File Reactively",
      description:
        "Most people only think about taxes once a year at filing time, missing countless opportunities for proactive optimization throughout the year.",
      bgColor: "bg-purple-50",
      iconColor: "bg-purple-600",
      textColor: "text-purple-600",
    },
  ];

  return (
    <section className="w-full bg-soft py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 rounded-full bg-white border border-gray-200 shadow-sm">
            <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">
              The Challenge
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 leading-[1.1] tracking-tight mb-6 md:mb-8">
            The problem we{" "}
            <span className="italic font-serif text-blue-600 font-normal">
              solve
            </span>
          </h2>

          <p className="text-base md:text-lg text-gray-500 leading-relaxed">
            Tax complexity costs businesses and individuals billions in overpayments, wasted time, and missed opportunities. We&lsquo;re here to change that.
          </p>
        </div>

        {/* Problems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-16 md:mb-20">
          {problems.map((problem, index) => (
            <div
              key={index}
              className={`${problem.bgColor} p-8 md:p-10 rounded-2xl border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
            >
              <div
                className={`w-12 h-12 md:w-14 md:h-14 rounded-xl ${problem.iconColor} text-white flex items-center justify-center mb-6 shadow-lg`}
              >
                {problem.icon}
              </div>

              <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
                {problem.title}
              </h3>

              <div className="mb-4 pb-4 border-b border-gray-300">
                <div
                  className={`text-3xl md:text-4xl font-bold ${problem.textColor} mb-1`}
                >
                  {problem.stat}
                </div>
                <div className="text-xs md:text-sm font-medium text-gray-500 uppercase tracking-wider">
                  {problem.statLabel}
                </div>
              </div>

              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>

        {/* Solution Teaser */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 md:p-12 lg:p-16 rounded-2xl shadow-2xl">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-4 md:mb-6">
              There&lsquo;s a{" "}
              <span className="italic font-serif text-blue-400 font-normal">
                better way
              </span>
            </h3>

            <p className="text-base md:text-lg text-gray-300 mb-8 md:mb-10 leading-relaxed">
              You don&lsquo;t have to navigate this alone. With Tax Praxis, you gain a partner who transforms these problems into opportunities for savings, growth, and peace of mind.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 mb-10">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">
                  $2.3M
                </div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">
                  Average Saved
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">
                  150+
                </div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">
                  Hours Reclaimed
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">
                  100%
                </div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">
                  Compliance Rate
                </div>
              </div>
            </div>

            <Link href={'/booking'}>
            <button className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all shadow-lg active:scale-95 text-sm md:text-base">
              Get Consultation
            </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TheProblemWeSolve;