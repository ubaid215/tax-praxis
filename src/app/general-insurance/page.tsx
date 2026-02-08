/* eslint-disable react/no-unescaped-entities */

import React from "react";
import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import { Search, BadgeCheck, Users, Heart, Clock, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "General Insurance Services | Life, Health, Home & Income Protection Insurance",
  description: "Expert insurance comparison and advisory services. Find the best life insurance, income protection, health insurance, home insurance, and travel insurance for your family. Trusted providers, personalized advice.",
  keywords: [
    "general insurance",
    "life insurance",
    "income protection insurance",
    "health insurance",
    "home insurance",
    "contents insurance",
    "motor vehicle insurance",
    "car insurance",
    "travel insurance",
    "trauma coverage",
    "family insurance",
    "insurance comparison",
    "insurance broker",
    "insurance advisor",
    "best insurance rates",
    "insurance quotes",
    "personal insurance",
    "insurance protection",
    "comprehensive insurance",
    "affordable insurance"
  ],
  openGraph: {
    title: "General Insurance Services | Life, Health, Home & Income Protection",
    description: "Expert insurance comparison and advisory services. We help you find the best insurance coverage for life, health, home, income protection, and more.",
    type: "website",
    images: [
      {
        url: "/services/insurance-hero.webp",
        width: 1200,
        height: 630,
        alt: "General Insurance Services"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "General Insurance Services | Life, Health, Home & Income Protection",
    description: "Expert insurance comparison and advisory services. Find the best coverage for your family.",
    images: ["/services/insurance-hero.webp"]
  },
  alternates: {
    canonical: "/general-insurance"
  }
};

const GeneralInsurancePage = () => {
  const insuranceFeatures = [
    {
      icon: Search,
      title: "Expert Comparison",
      description: "We compare hundreds of policies to find your best match"
    },
    {
      icon: BadgeCheck,
      title: "Trusted Providers",
      description: "Only reputable, proven insurance companies"
    },
    {
      icon: Users,
      title: "Family Focus",
      description: "Solutions that protect your entire family"
    },
    {
      icon: Heart,
      title: "Personalized Advice",
      description: "Insurance tailored to your unique circumstances"
    },
  ];

  const insuranceTypes = [
    "Life insurance and trauma coverage",
    "Income protection insurance",
    "Health insurance optimization",
    "Home and contents insurance",
    "Motor vehicle insurance",
    "Travel insurance solutions",
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
                    General Insurance
                  </span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 leading-[1.1] tracking-tight mb-6">
                  Protect What{" "}
                  <span className="italic font-serif text-blue-600 font-normal">
                    Matters Most
                  </span>
                </h1>

                <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
                  Comprehensive insurance solutions tailored to your needs. We compare hundreds of policies from trusted providers to find the perfect coverage for you and your family.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/booking">
                    <button className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all shadow-lg active:scale-95 text-sm md:text-base">
                      Get Free Quote
                    </button>
                  </Link>
                  <Link href="/fees">
                    <button className="px-8 py-4 bg-white text-gray-900 font-semibold rounded-xl border border-gray-200 hover:border-gray-900 transition-all active:scale-95 text-sm md:text-base">
                      Learn More
                    </button>
                  </Link>
                </div>
              </div>

              {/* Right - Image */}
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
                  <Image
                    src="/services/insurance-hero.webp"
                    alt="General Insurance Services"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                {/* Floating Stat Badge */}
                <div className="absolute -bottom-6 -left-6 bg-blue-600 text-white p-6 md:p-8 rounded-2xl shadow-2xl">
                  <div className="text-4xl md:text-5xl font-black mb-2">100+</div>
                  <div className="text-sm uppercase tracking-wider opacity-90">
                    Insurance Providers
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-4">
                Why Choose{" "}
                <span className="italic font-serif text-blue-600 font-normal">
                  Our Service
                </span>
              </h2>
              <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                Expert insurance advice that puts your family's protection first
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {insuranceFeatures.map((feature, index) => {
                const IconComponent = feature.icon;
                
                return (
                  <div
                    key={index}
                    className="bg-soft rounded-2xl p-8 border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center"
                  >
                    <div className="w-14 h-14 rounded-xl bg-blue-600 flex items-center justify-center mx-auto mb-6 shadow-sm">
                      <IconComponent className="w-7 h-7 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {feature.title}
                    </h3>
                    
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Insurance Types Section */}
      <section className="w-full py-16 md:py-20 lg:py-24 bg-soft">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              {/* Left - Image */}
              <div className="order-2 lg:order-1">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-gray-200">
                  <Image
                    src="/services/insurance-types.webp"
                    alt="Insurance Coverage Types"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Right - Insurance Types List */}
              <div className="order-1 lg:order-2">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 rounded-full bg-white border border-gray-200 shadow-sm">
                  <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">
                    Coverage Options
                  </span>
                </div>

                <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-6 leading-[1.1]">
                  Comprehensive{" "}
                  <span className="italic font-serif text-blue-600 font-normal">
                    Coverage
                  </span>
                </h2>

                <p className="text-base md:text-lg text-gray-600 mb-8 leading-relaxed">
                  From life insurance to home protection, we help you find the right coverage for every aspect of your life.
                </p>

                <div className="space-y-4">
                  {insuranceTypes.map((type, index) => (
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
                        {type}
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
                How It{" "}
                <span className="italic font-serif text-blue-600 font-normal">
                  Works
                </span>
              </h2>
              <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                Our simple process makes finding the right insurance effortless
              </p>
            </div>

            {/* Steps */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {[
                {
                  number: "01",
                  title: "Free Consultation",
                  description: "Discuss your needs and circumstances with our experts"
                },
                {
                  number: "02",
                  title: "Compare Options",
                  description: "We research and compare policies from trusted providers"
                },
                {
                  number: "03",
                  title: "Tailored Advice",
                  description: "Receive personalized recommendations for your situation"
                },
                {
                  number: "04",
                  title: "Easy Setup",
                  description: "We help you apply and get covered hassle-free"
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

      {/* Insurance Benefits Section */}
      <section className="w-full py-16 md:py-20 lg:py-24 bg-soft">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              {/* Left - Content */}
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 rounded-full bg-white border border-gray-200 shadow-sm">
                  <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">
                    Peace of Mind
                  </span>
                </div>

                <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-6 leading-[1.1]">
                  Insurance That{" "}
                  <span className="italic font-serif text-blue-600 font-normal">
                    Works
                  </span>
                </h2>

                <p className="text-base md:text-lg text-gray-600 mb-8 leading-relaxed">
                  We don't just sell insurance—we provide ongoing support and advice to ensure your coverage evolves with your life.
                </p>

                <div className="space-y-6">
                  {[
                    {
                      icon: Clock,
                      title: "Save Time & Money",
                      description: "We do the research so you don't have to, finding you the best rates"
                    },
                    {
                      icon: Shield,
                      title: "Ongoing Support",
                      description: "Annual reviews to ensure your coverage stays relevant as your life changes"
                    },
                    {
                      icon: BadgeCheck,
                      title: "No Hidden Fees",
                      description: "Transparent pricing and no obligation to purchase"
                    }
                  ].map((benefit, index) => {
                    const IconComponent = benefit.icon;
                    return (
                      <div key={index} className="flex items-start gap-4 bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                        <div className="w-12 h-12 rounded-lg bg-blue-600 flex items-center justify-center flex-shrink-0">
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-gray-900 mb-2">
                            {benefit.title}
                          </h3>
                          <p className="text-sm text-gray-600 leading-relaxed">
                            {benefit.description}
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
                    src="/services/insurance-benefits.webp"
                    alt="Insurance Benefits and Support"
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
                  Get Your Free{" "}
                  <span className="italic font-serif text-blue-600 font-normal">
                    Insurance Quote
                  </span>
                </h2>
                <p className="text-base md:text-lg text-gray-600">
                  No obligation. No hidden fees. Just expert advice and the best coverage options.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                <div className="text-center p-6 bg-soft rounded-xl border border-gray-200">
                  <div className="text-4xl font-bold text-gray-900 mb-2">100+</div>
                  <div className="text-sm text-gray-600 font-medium">
                    Insurance Providers
                  </div>
                </div>

                <div className="text-center p-6 bg-blue-600 rounded-xl shadow-lg">
                  <div className="text-4xl font-bold text-white mb-2">Free</div>
                  <div className="text-sm text-white font-medium">
                    Comparison Service
                  </div>
                </div>

                <div className="text-center p-6 bg-soft rounded-xl border border-gray-200">
                  <div className="text-4xl font-bold text-gray-900 mb-2">24/7</div>
                  <div className="text-sm text-gray-600 font-medium">
                    Support Available
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
              Secure your family's{" "}
              <span className="italic font-serif text-blue-400 font-normal">
                future today
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed">
              Let our insurance experts help you find comprehensive coverage that protects what matters most.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/booking">
                <button className="px-10 py-5 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all shadow-lg active:scale-95 text-base md:text-lg">
                  Get Free Quote
                </button>
              </Link>
              <Link href="/fees">
                <button className="px-10 py-5 bg-white text-gray-900 font-bold rounded-xl hover:bg-gray-100 transition-all active:scale-95 text-base md:text-lg">
                  View Services
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default GeneralInsurancePage;