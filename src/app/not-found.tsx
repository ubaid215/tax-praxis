/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import Link from "next/link";

const NotFound = () => {
  return (
    <main className="w-full min-h-screen bg-soft flex items-center justify-center px-4 md:px-6 py-16 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 rounded-full bg-white border border-gray-200 shadow-sm">
              <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">
                Error 404
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-[1.1]">
              Page Not{" "}
              <span className="italic font-serif text-blue-600 font-normal">
                Found
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-xl lg:max-w-none">
              Oops! It seems you've ventured into uncharted territory. The page you're looking for doesn't exist or has been moved.
            </p>

            {/* Additional Message */}
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200 shadow-sm mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    What can you do?
                  </h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Return to our homepage</li>
                    <li>• Explore our services</li>
                    <li>• Contact us for assistance</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="/">
                <button className="px-8 py-4 bg-gray-900 text-white font-semibold rounded-xl hover:bg-black transition-all shadow-lg active:scale-95 text-sm md:text-base inline-flex items-center justify-center gap-2 group">
                  <svg
                    className="w-5 h-5 group-hover:-translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 19l-7-7m0 0l7-7m-7 7h18"
                    />
                  </svg>
                  Back to Home
                </button>
              </Link>

              <Link href="/contact">
                <button className="px-8 py-4 bg-white text-gray-900 font-semibold rounded-xl border border-gray-200 hover:border-gray-900 transition-all active:scale-95 text-sm md:text-base">
                  Contact Us
                </button>
              </Link>
            </div>

            {/* Quick Links */}
            <div className="mt-10 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500 mb-4 font-medium">
                Popular Pages:
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/personal"
                  className="text-sm text-blue-600 hover:text-blue-700 font-medium hover:underline"
                >
                  Personal Services
                </Link>
                <span className="text-gray-300">•</span>
                <Link
                  href="/service-fees"
                  className="text-sm text-blue-600 hover:text-blue-700 font-medium hover:underline"
                >
                  Service Fees
                </Link>
                <span className="text-gray-300">•</span>
                <Link
                  href="/vision"
                  className="text-sm text-blue-600 hover:text-blue-700 font-medium hover:underline"
                >
                  Our Vision
                </Link>
                <span className="text-gray-300">•</span>
                <Link
                  href="/team"
                  className="text-sm text-blue-600 hover:text-blue-700 font-medium hover:underline"
                >
                  Meet Our Team
                </Link>
              </div>
            </div>
          </div>

          {/* Right Side - Illustration/Visual */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              {/* Main 404 Visual */}
              <div className="bg-white rounded-3xl p-12 md:p-16 shadow-2xl border border-gray-200 text-center">
                {/* Large 404 Number */}
                <div className="text-[120px] md:text-[160px] lg:text-[200px] font-black leading-none mb-6">
                  <span className="text-transparent bg-clip-text bg-gradient-to-br from-gray-200 to-gray-300">
                    404
                  </span>
                </div>

                {/* Icon Illustration */}
                <div className="relative mx-auto w-32 h-32 md:w-40 md:h-40 mb-6">
                  <div className="absolute inset-0 bg-blue-100 rounded-full animate-pulse" />
                  <div className="absolute inset-4 bg-blue-200 rounded-full" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg
                      className="w-16 h-16 md:w-20 md:h-20 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M12 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="flex justify-center gap-4 flex-wrap">
                  <div className="px-4 py-2 bg-soft rounded-full border border-gray-200 text-xs font-medium text-gray-600">
                    Lost?
                  </div>
                  <div className="px-4 py-2 bg-soft rounded-full border border-gray-200 text-xs font-medium text-gray-600">
                    Can&lsquo;t find it
                  </div>
                  <div className="px-4 py-2 bg-soft rounded-full border border-gray-200 text-xs font-medium text-gray-600">
                    Oops!
                  </div>
                </div>
              </div>

              {/* Decorative Stats Cards */}
              <div className="absolute -bottom-6 -left-6 bg-blue-600 text-white p-4 md:p-6 rounded-2xl shadow-xl transform rotate-3 hover:rotate-0 transition-transform">
                <div className="text-2xl md:text-3xl font-bold mb-1">0%</div>
                <div className="text-xs uppercase tracking-wider opacity-90">
                  Page Found
                </div>
              </div>

              <div className="absolute -top-6 -right-6 bg-white p-4 md:p-6 rounded-2xl shadow-xl border border-gray-200 transform -rotate-3 hover:rotate-0 transition-transform">
                <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">
                  100%
                </div>
                <div className="text-xs uppercase tracking-wider text-gray-600">
                  Can Help You
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default NotFound;