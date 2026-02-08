
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Shield, Target, Heart, Moon, TrendingUp, Users } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Financial Planning Services | Retirement, Investment & Wealth Management",
  description: "Expert financial planning services for retirement, investment management, estate planning, and wealth transfer. Build a secure financial future with personalized strategies and professional guidance.",
  keywords: [
    "financial planning",
    "retirement planning",
    "investment management",
    "wealth management",
    "estate planning",
    "financial advisor",
    "financial planner",
    "retirement projections",
    "education funding",
    "wealth transfer",
    "debt management",
    "portfolio management",
    "risk management",
    "financial security",
    "financial goals",
    "retirement savings",
    "investment strategy",
    "financial roadmap",
    "wealth protection",
    "financial planning services"
  ],
  openGraph: {
    title: "Financial Planning Services | Retirement, Investment & Wealth Management",
    description: "Expert financial planning services to help you achieve your financial goals. Personalized strategies for retirement, investments, and wealth protection.",
    type: "website",
    images: [
      {
        url: "/services/financial-planning-hero.webp",
        width: 1200,
        height: 630,
        alt: "Financial Planning Services"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Financial Planning Services | Retirement, Investment & Wealth Management",
    description: "Expert financial planning services to help you achieve your financial goals and secure your future.",
    images: ["/services/financial-planning-hero.webp"]
  },
  alternates: {
    canonical: "/financial-planning"
  }
};

const FinancialPlanningPage = () => {
  const planningBenefits = [
    {
      icon: Shield,
      title: "Financial Safety Net",
      description: "Protection against life's unexpected challenges"
    },
    {
      icon: Target,
      title: "Goal Achievement",
      description: "Strategic roadmap to reach your financial objectives"
    },
    {
      icon: Heart,
      title: "Family Security",
      description: "Peace of mind knowing your loved ones are protected"
    },
    {
      icon: Moon,
      title: "Peaceful Sleep",
      description: "Rest easy knowing your financial future is secure"
    },
  ];

  const planningAreas = [
    "Retirement planning and projections",
    "Education funding strategies",
    "Estate planning and wealth transfer",
    "Debt management optimization",
    "Investment portfolio management",
    "Risk management and insurance planning",
  ];

  return (
    <main className="w-full bg-white">
      {/* Hero Section */}
      <section className="w-full bg-soft pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              {/* Left - Content */}
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 rounded-full bg-white border border-gray-200 shadow-sm">
                  <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">
                    Financial Planning
                  </span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 leading-[1.1] tracking-tight mb-6">
                  Build Your{" "}
                  <span className="italic font-serif text-blue-600 font-normal">
                    Financial Future
                  </span>
                </h1>

                <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
                  Comprehensive financial planning that transforms your goals into reality. From retirement planning to wealth transfer, we create personalized strategies for lasting financial security.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/booking">
                    <button className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all shadow-lg active:scale-95 text-sm md:text-base">
                      Start Planning Today
                    </button>
                  </Link>
                  <Link href="/fees">
                    <button className="px-8 py-4 bg-white text-gray-900 font-semibold rounded-xl border border-gray-200 hover:border-gray-900 transition-all active:scale-95 text-sm md:text-base">
                      View Services
                    </button>
                  </Link>
                </div>
              </div>

              {/* Right - Image */}
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
                  <Image
                    src="/services/financial-planning-hero.webp"
                    alt="Financial Planning Services"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                {/* Floating Stat Badge */}
                <div className="absolute -bottom-6 -left-6 bg-blue-600 text-white p-6 md:p-8 rounded-2xl shadow-2xl">
                  <div className="text-4xl md:text-5xl font-black mb-2">25+</div>
                  <div className="text-sm uppercase tracking-wider opacity-90">
                    Years Experience
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="w-full py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-4">
                Why Financial{" "}
                <span className="italic font-serif text-blue-600 font-normal">
                  Planning Matters
                </span>
              </h2>
              <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                Professional guidance that gives you confidence and clarity about your financial future
              </p>
            </div>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {planningBenefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                
                return (
                  <div
                    key={index}
                    className="bg-soft rounded-2xl p-8 border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center"
                  >
                    <div className="w-14 h-14 rounded-xl bg-blue-600 flex items-center justify-center mx-auto mb-6 shadow-sm">
                      <IconComponent className="w-7 h-7 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {benefit.title}
                    </h3>
                    
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Planning Areas Section */}
      <section className="w-full py-16 md:py-20 lg:py-24 bg-soft">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              {/* Left - Image */}
              <div className="order-2 lg:order-1">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-gray-200">
                  <Image
                    src="/services/financial-strategy.webp"
                    alt="Financial Planning Strategy"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Right - Planning Areas List */}
              <div className="order-1 lg:order-2">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 rounded-full bg-white border border-gray-200 shadow-sm">
                  <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">
                    Our Expertise
                  </span>
                </div>

                <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-6 leading-[1.1]">
                  Comprehensive{" "}
                  <span className="italic font-serif text-blue-600 font-normal">
                    Planning Services
                  </span>
                </h2>

                <p className="text-base md:text-lg text-gray-600 mb-8 leading-relaxed">
                  We provide holistic financial planning that covers every aspect of your financial life, ensuring nothing is overlooked.
                </p>

                <div className="space-y-4">
                  {planningAreas.map((area, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 bg-white p-4 rounded-xl border border-gray-200 hover:shadow-md transition-all duration-300"
                    >
                      <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg
                          className="w-4 h-4 text-white"
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
                      <p className="text-sm md:text-base text-gray-700 font-medium">
                        {area}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="w-full py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-4">
                Our Planning{" "}
                <span className="italic font-serif text-blue-600 font-normal">
                  Process
                </span>
              </h2>
              <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                A structured approach to building your personalized financial plan
              </p>
            </div>

            {/* Steps */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {[
                {
                  number: "01",
                  title: "Discovery Meeting",
                  description: "We learn about your goals, values, and current situation"
                },
                {
                  number: "02",
                  title: "Analysis & Strategy",
                  description: "Comprehensive review and custom strategy development"
                },
                {
                  number: "03",
                  title: "Plan Presentation",
                  description: "Detailed roadmap with clear action steps and timelines"
                },
                {
                  number: "04",
                  title: "Ongoing Support",
                  description: "Regular reviews and adjustments as your life evolves"
                },
              ].map((step, index) => (
                <div
                  key={index}
                  className="relative bg-white rounded-2xl p-8 border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <div className="text-6xl font-black text-blue-600/10 mb-4">
                    {step.number}
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {step.description}
                  </p>

                  {index < 3 && (
                    <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 z-10">
                      <svg
                        className="w-8 h-8 text-blue-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="w-full py-16 md:py-20 lg:py-24 bg-soft">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              {/* Left - Content */}
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 rounded-full bg-white border border-gray-200 shadow-sm">
                  <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">
                    Our Commitment
                  </span>
                </div>

                <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-6 leading-[1.1]">
                  Planning for{" "}
                  <span className="italic font-serif text-blue-600 font-normal">
                    Life&lsquo;s Journey
                  </span>
                </h2>

                <p className="text-base md:text-lg text-gray-600 mb-8 leading-relaxed">
                  Financial planning isn&apos;t just about numbers—it&apos;s about helping you live the life you envision while protecting what matters most.
                </p>

                <div className="space-y-6">
                  {[
                    {
                      icon: TrendingUp,
                      title: "Wealth Growth",
                      description: "Strategic investment management to build and preserve your wealth over time"
                    },
                    {
                      icon: Shield,
                      title: "Risk Protection",
                      description: "Comprehensive insurance and risk management strategies for peace of mind"
                    },
                    {
                      icon: Users,
                      title: "Legacy Planning",
                      description: "Estate planning to ensure your wealth transfers smoothly to loved ones"
                    }
                  ].map((value, index) => {
                    const IconComponent = value.icon;
                    return (
                      <div key={index} className="flex items-start gap-4 bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                        <div className="w-12 h-12 rounded-lg bg-blue-600 flex items-center justify-center flex-shrink-0">
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-gray-900 mb-2">
                            {value.title}
                          </h3>
                          <p className="text-sm text-gray-600 leading-relaxed">
                            {value.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Right - Image */}
              <div>
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-gray-200">
                  <Image
                    src="/services/wealth-planning.webp"
                    alt="Wealth and Legacy Planning"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 md:p-12 lg:p-16 shadow-xl border border-gray-200">
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                  Start Your Financial{" "}
                  <span className="italic font-serif text-blue-600 font-normal">
                    Journey
                  </span>
                </h2>
                <p className="text-base md:text-lg text-gray-600">
                  Schedule a complimentary consultation to discuss your financial goals and how we can help you achieve them.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                <div className="text-center p-6 bg-soft rounded-xl border border-gray-200">
                  <div className="text-4xl font-bold text-gray-900 mb-2">Free</div>
                  <div className="text-sm text-gray-600 font-medium">
                    Initial Consultation
                  </div>
                </div>

                <div className="text-center p-6 bg-blue-600 rounded-xl shadow-lg">
                  <div className="text-4xl font-bold text-white mb-2">100%</div>
                  <div className="text-sm text-white font-medium">
                    Personalized Plans
                  </div>
                </div>

                <div className="text-center p-6 bg-soft rounded-xl border border-gray-200">
                  <div className="text-4xl font-bold text-gray-900 mb-2">25+</div>
                  <div className="text-sm text-gray-600 font-medium">
                    Years Experience
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/booking">
                  <button className="px-10 py-5 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all shadow-lg active:scale-95 text-base md:text-lg">
                    Book Free Consultation
                  </button>
                </Link>
                <Link href="/contact">
                  <button className="px-10 py-5 bg-white text-gray-900 font-bold rounded-xl border-2 border-gray-200 hover:border-gray-900 transition-all active:scale-95 text-base md:text-lg">
                    Contact Us
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="w-full py-16 md:py-20 lg:py-24 bg-gray-900 mb-7 lg:rounded-4xl md:rounded-2xl">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Your financial future{" "}
              <span className="italic font-serif text-blue-400 font-normal">
                starts today
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed">
              Take control of your financial destiny with expert guidance and personalized strategies.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/booking">
                <button className="px-10 py-5 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all shadow-lg active:scale-95 text-base md:text-lg">
                  Schedule Consultation
                </button>
              </Link>
              <Link href="/fees">
                <button className="px-10 py-5 bg-white text-gray-900 font-bold rounded-xl hover:bg-gray-100 transition-all active:scale-95 text-base md:text-lg">
                  Explore Services
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default FinancialPlanningPage;