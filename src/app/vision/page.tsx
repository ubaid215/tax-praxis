/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { Suspense } from "react";
import Image from "next/image";
import VisionSkeleton from "@/components/common/VisionSkeleton";

const VisionPage = () => {
  return (
    <Suspense fallback={<VisionSkeleton />}>
      <main className="w-full bg-white">
        {/* Hero Section */}
        <section className="w-full bg-soft pt-24 pb-16 md:pt-32 md:pb-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 rounded-full bg-white border border-gray-200 shadow-md">
                <span className="text-xs font-semibold text-blue-600 uppercase tracking-widest">
                  Our Vision
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-7xl font-semibold text-gray-900 leading-[1.1] tracking-tight mb-6 md:mb-8">
                The long-term financial partner{" "}
                <span className="italic font-serif text-blue-600 font-normal">
                  behind every meaningful decision
                </span>
              </h1>

              <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                We exist to support your personal life, your family's future, and your business growth—together, not transactionally.
              </p>
            </div>
          </div>
        </section>

        {/* Why We're Different - Split Section */}
        <section className="w-full py-16 md:py-20 lg:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                {/* Left - Content */}
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 rounded-full bg-soft border border-gray-200 shadow-sm">
                    <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">
                      Accounting Built for Progress
                    </span>
                  </div>

                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-6 leading-[1.1]">
                    For{" "}
                    <span className="italic font-serif text-blue-600 font-normal">
                      outcomes
                    </span>
                    , not just paperwork
                  </h2>

                  <div className="space-y-4 text-base md:text-lg text-gray-600 leading-relaxed">
                    <p>
                      The accounting industry has traditionally focused on compliance, forms, and deadlines. We focus on outcomes.
                    </p>
                    <p>
                      Our role goes far beyond filing returns. We help clients think ahead, plan smarter, and act with clarity—using tax and financial strategy as tools for growth, not stress.
                    </p>
                    <p className="font-semibold text-gray-900">
                      When you work with Tax Praxis, you're not reacting to the past. You're preparing for what's next.
                    </p>
                  </div>
                </div>

                {/* Right - Image */}
                <div className="relative">
                  <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                      src="/vision/expertise.webp"
                      alt="Focusing on progress, not paperwork"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                  
                  {/* Floating Badge */}
                  <div className="absolute -bottom-6 -left-6 bg-blue-600 text-white p-6 md:p-8 rounded-2xl shadow-2xl max-w-[200px]">
                    <div className="text-4xl md:text-5xl font-black mb-2">100%</div>
                    <div className="text-sm font-semibold uppercase tracking-wider">
                      Future-Focused
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Approach - Bento Grid */}
        <section className="w-full py-16 md:py-20 lg:py-24 bg-soft">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-6xl mx-auto">
              {/* Section Header */}
              <div className="text-center mb-12 md:mb-16">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-4">
                  Expertise That Stays{" "}
                  <span className="italic font-serif text-blue-600 font-normal">
                    Ahead of Change
                  </span>
                </h2>
                <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                  Tax laws, regulations, and economic conditions never stand still—and neither do we.
                </p>
              </div>

              {/* Bento Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                {/* Card 1 - Large Image Card */}
                <div className="md:row-span-2 relative bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl overflow-hidden shadow-xl group">
                  <div className="absolute inset-0 opacity-20">
                    <Image
                      src="/vision/expertise.webp"
                      alt="Deep expertise"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative p-8 md:p-10 lg:p-12 h-full flex flex-col justify-end">
                    <div className="w-14 h-14 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-6">
                      <svg
                        className="w-7 h-7 text-white"
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
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                      Staying Ahead, Always
                    </h3>
                    <p className="text-blue-100 text-sm md:text-base leading-relaxed">
                      Our team continuously stays ahead of change to simplify complexity before it ever reaches you.
                    </p>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="bg-white rounded-2xl p-8 md:p-10 border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="w-14 h-14 rounded-xl bg-blue-600 flex items-center justify-center mb-6">
                    <svg
                      className="w-7 h-7 text-white"
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
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">
                    Legislation & Policy
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                    We monitor taxation legislation and policy changes to keep your strategy current and compliant.
                  </p>
                </div>

                {/* Card 3 */}
                <div className="bg-white rounded-2xl p-8 md:p-10 border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="w-14 h-14 rounded-xl bg-blue-600 flex items-center justify-center mb-6">
                    <svg
                      className="w-7 h-7 text-white"
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
                    Economic Shifts
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                    We stay ahead of economic and market shifts to protect and grow your financial position.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Brand Philosophy - Full Width Image Section */}
        <section className="w-full py-16 md:py-20 lg:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-6xl mx-auto">
              <div className="bg-gradient-primary rounded-3xl overflow-hidden shadow-2xl">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  {/* Left - Content */}
                  <div className="p-10 md:p-12 lg:p-16 flex flex-col justify-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 rounded-full bg-white/20 backdrop-blur-sm w-fit">
                      <span className="text-xs font-semibold text-white uppercase tracking-widest">
                        A Modern Mindset
                      </span>
                    </div>

                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-[1.1]">
                      Progress Through{" "}
                      <span className="italic font-serif font-normal">
                        Questioning
                      </span>
                    </h2>

                    <div className="space-y-4 text-base md:text-lg text-white/90 leading-relaxed mb-8">
                      <p>
                        We believe progress comes from questioning old assumptions. Tax Praxis is built on clarity, confidence, and forward thinking.
                      </p>
                      <p>
                        We are comfortable evolving, improving, and challenging traditional accounting norms when better solutions exist. Change isn't a threat—it's an advantage when handled correctly.
                      </p>
                      <p className="font-semibold text-white">
                        Built by Experts, Driven by Purpose to deliver practical, intelligent, and personalised tax solutions.
                      </p>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-1 bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center">
                        <div className="text-2xl font-bold text-white mb-1">Clarity</div>
                        <div className="text-xs text-white/80">Forward Thinking</div>
                      </div>
                      <div className="flex-1 bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center">
                        <div className="text-2xl font-bold text-white mb-1">Confidence</div>
                        <div className="text-xs text-white/80">Bold Evolution</div>
                      </div>
                      <div className="flex-1 bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center">
                        <div className="text-2xl font-bold text-white mb-1">Purpose</div>
                        <div className="text-xs text-white/80">Expert-Led</div>
                      </div>
                    </div>
                  </div>

                  {/* Right - Image/Visual */}
                  <div className="relative min-h-[400px] lg:min-h-[600px]">
                    <Image
                      src="/vision/modern-mindset.webp"
                      alt="Modern mindset in traditional industry"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Human Approach Section */}
        <section className="w-full py-16 md:py-20 lg:py-24 bg-soft">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                {/* Left - Image */}
                <div className="relative order-2 lg:order-1">
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                      src="/vision/human-approach.webp"
                      alt="Human approach to finance"
                      fill
                      className="object-cover"
                    />
                  </div>
                  
                  {/* Decorative Stats */}
                  <div className="absolute -top-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-200">
                    <div className="text-3xl font-bold text-blue-600 mb-1">100%</div>
                    <div className="text-xs text-gray-600 uppercase tracking-wider">Client-First</div>
                  </div>
                </div>

                {/* Right - Content */}
                <div className="order-1 lg:order-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 rounded-full bg-white border border-gray-200 shadow-sm">
                    <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">
                      Designed to Feel Human
                    </span>
                  </div>

                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-6 leading-[1.1]">
                    Finance That Feels{" "}
                    <span className="italic font-serif text-blue-600 font-normal">
                      Approachable
                    </span>
                  </h2>

                  <div className="space-y-4 text-base md:text-lg text-gray-600 leading-relaxed mb-8">
                    <p>
                      Finance doesn't need to feel cold or intimidating. From how we communicate to how we design our brand experience, everything at Tax Praxis is intentional—approachable, transparent, and client-first.
                    </p>
                    <p>
                      We believe trust is built when people feel understood, not overwhelmed. Every client is different. Our advice reflects that.
                    </p>
                  </div>

                  <div className="bg-white p-6 md:p-8 rounded-2xl border border-gray-200 shadow-md">
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
                            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">
                          Your Extended Financial Team
                        </h4>
                        <p className="text-sm text-gray-600">
                          Every decision has consequences. You shouldn't have to make them alone. Think of us as your extended financial team—available, invested, and aligned with your goals.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-16 md:py-20 lg:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 rounded-full bg-soft border border-gray-200 shadow-sm">
                <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">
                  Ready to Begin
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-6 leading-[1.1]">
                Let's Build{" "}
                <span className="italic font-serif text-blue-600 font-normal">
                  What's Next
                </span>
                —Together
              </h2>

              <div className="space-y-6 text-base md:text-lg text-gray-600 leading-relaxed mb-10">
                <p>
                  We handle the complexity so you can focus on building, growing, and living. From everyday decisions to long-term planning, we're with you at every stage.
                </p>
                <p className="font-semibold text-gray-900">
                  If you're ready for a smarter, clearer, and more proactive approach to tax and accounting, we're ready to partner with you.
                </p>
                <p>
                  Let's talk about growing and prospering—together.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-blue-600 rounded-xl hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
                >
                  Book an Appointment
                </a>
                <a
                  href="/services"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-blue-600 bg-white border-2 border-blue-600 rounded-xl hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
                >
                  View Our Services
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Suspense>
  );
};

export default VisionPage;