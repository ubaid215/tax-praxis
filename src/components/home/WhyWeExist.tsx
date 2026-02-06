"use client";
import React from "react";
import Image from "next/image";

const WhyWeExist = () => {
  return (
    <section className="w-full bg-soft py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* LEFT: Visual Content */}
          <div className="w-full lg:w-1/2">
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative aspect-[4/5] md:aspect-square rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/about-us-mission.webp"
                  alt="Tax professionals at work"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Floating Stat Card */}
              <div className="absolute -bottom-6 -right-6 md:-bottom-8 md:-right-8 bg-white p-6 md:p-8 rounded-2xl shadow-2xl border border-gray-100 max-w-[200px] md:max-w-[240px]">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-4xl md:text-5xl font-semibold text-gray-900">
                    98%
                  </span>
                  <svg
                    className="w-5 h-5 md:w-6 md:h-6 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p className="text-xs md:text-sm font-medium text-gray-500 uppercase tracking-wider">
                  Client Satisfaction
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT: Content */}
          <div className="w-full lg:w-1/2">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 rounded-full bg-white border border-gray-200 shadow-sm">
              <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">
                Our Mission
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 leading-[1.1] tracking-tight mb-6 md:mb-8">
              Why we{" "}
              <span className="italic font-serif text-blue-600 font-normal">
                exist
              </span>
            </h2>

            <div className="space-y-6 mb-8 md:mb-10">
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                We founded Tax Praxis because we saw too many businesses and individuals drowning in complexity, losing money to preventable mistakes, and missing opportunities hidden in plain sight.
              </p>

              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                The tax code isn&lsquo;t just a set of rules—it&lsquo;s a roadmap to financial optimization. But navigating it requires expertise, dedication, and a genuine commitment to your success.
              </p>

              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                That&lsquo;s why we exist: to transform tax from a burden into a competitive advantage, to turn confusion into clarity, and to help you keep more of what you earn.
              </p>
            </div>

            {/* Key Points */}
            <div className="space-y-4">
              {[
                {
                  title: "Client-First Philosophy",
                  description: "Your success is our only metric that matters.",
                },
                {
                  title: "Continuous Innovation",
                  description: "We stay ahead so you stay compliant and optimized.",
                },
                {
                  title: "Transparent Partnership",
                  description: "No jargon, no hidden fees, just honest expertise.",
                },
              ].map((point, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="w-6 h-6 md:w-7 md:h-7 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg
                      className="w-3 h-3 md:w-4 md:h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-base md:text-lg font-semibold text-gray-900 mb-1">
                      {point.title}
                    </h4>
                    <p className="text-sm md:text-base text-gray-500">
                      {point.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyWeExist;