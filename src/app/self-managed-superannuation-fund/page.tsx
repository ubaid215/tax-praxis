
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { PieChart, Target, Shield, Users, TrendingUp, Calendar, Clock, BadgeCheck } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SMSF Services | Self-Managed Superannuation Fund Setup & Administration",
  description: "Expert SMSF setup, administration, and compliance services. Complete self-managed superannuation fund solutions including establishment, investment strategy, annual compliance, and trustee support.",
  keywords: [
    "SMSF",
    "self-managed superannuation fund",
    "SMSF setup",
    "SMSF administration",
    "SMSF compliance",
    "SMSF accounting",
    "SMSF audit",
    "superannuation fund",
    "SMSF trustee",
    "SMSF investment strategy",
    "SMSF pension",
    "retirement planning",
    "SMSF establishment",
    "SMSF services",
    "SMSF advisor",
    "SMSF specialist",
    "ATO compliance",
    "SMSF annual return",
    "self-managed super",
    "SMSF accountant"
  ],
  openGraph: {
    title: "SMSF Services | Self-Managed Superannuation Fund Setup & Administration",
    description: "Expert SMSF services including setup, compliance, and administration. Take control of your retirement with professional SMSF management.",
    type: "website",
    images: [
      {
        url: "/services/smsf-hero.webp",
        width: 1200,
        height: 630,
        alt: "SMSF Services"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "SMSF Services | Self-Managed Superannuation Fund Setup & Administration",
    description: "Expert SMSF services including setup, compliance, and administration for your retirement.",
    images: ["/services/smsf-hero.webp"]
  },
  alternates: {
    canonical: "/self-managed-superannuation-fund"
  }
};


const SMSFPage = () => {
  const smsfServices = [
    {
      icon: PieChart,
      title: "SMSF Establishment",
      description: "Complete setup including trust deed and ATO registration"
    },
    {
      icon: Target,
      title: "Investment Strategy",
      description: "Customized investment planning aligned with retirement goals"
    },
    {
      icon: Shield,
      title: "Annual Compliance",
      description: "Full compliance with ATO requirements and regulations"
    },
    {
      icon: Users,
      title: "Trustee Support",
      description: "Guidance on trustee responsibilities and obligations"
    },
    {
      icon: TrendingUp,
      title: "Pension Planning",
      description: "Strategies for transition to retirement and pension phases"
    },
    {
      icon: Calendar,
      title: "Ongoing Administration",
      description: "Regular reporting, record-keeping, and administration"
    },
  ];

  const benefits = [
    {
      icon: Target,
      title: "Greater Control",
      description: "Direct control over your investment decisions and strategy"
    },
    {
      icon: TrendingUp,
      title: "Tax Efficiency",
      description: "Maximize tax benefits with expert SMSF structuring"
    },
    {
      icon: Shield,
      title: "Asset Protection",
      description: "Secure your retirement savings with proper management"
    },
    {
      icon: Users,
      title: "Family Benefits",
      description: "Pool resources with up to 6 family members"
    },
  ];

  const complianceAreas = [
    "ATO annual return lodgement",
    "Financial statements preparation",
    "Independent audit coordination",
    "Member contribution tracking",
    "Investment strategy reviews",
    "Regulatory compliance monitoring",
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
                    SMSF Services
                  </span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 leading-[1.1] tracking-tight mb-6">
                  Take Control of Your{" "}
                  <span className="italic font-serif text-blue-600 font-normal">
                    Retirement
                  </span>
                </h1>

                <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
                  Expert self-managed superannuation fund services from establishment to ongoing administration. We handle the complexity so you can focus on building your retirement wealth.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/booking">
                    <button className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all shadow-lg active:scale-95 text-sm md:text-base">
                      Get Started
                    </button>
                  </Link>
                  <Link href="/service-fees">
                    <button className="px-8 py-4 bg-white text-gray-900 font-semibold rounded-xl border border-gray-200 hover:border-gray-900 transition-all active:scale-95 text-sm md:text-base">
                      View Pricing
                    </button>
                  </Link>
                </div>
              </div>

              {/* Right - Image */}
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
                  <Image
                    src="/services/smsf-hero.webp"
                    alt="SMSF Services"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                {/* Floating Stat Badge */}
                <div className="absolute -bottom-6 -left-6 bg-blue-600 text-white p-6 md:p-8 rounded-2xl shadow-2xl">
                  <div className="text-4xl md:text-5xl font-black mb-2">$1.5M</div>
                  <div className="text-sm uppercase tracking-wider opacity-90">
                    Avg. SMSF Balance
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SMSF Services Grid Section */}
      <section className="w-full py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-4">
                Complete SMSF{" "}
                <span className="italic font-serif text-blue-600 font-normal">
                  Solutions
                </span>
              </h2>
              <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                End-to-end services covering every aspect of your self-managed super fund
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {smsfServices.map((service, index) => {
                const IconComponent = service.icon;
                
                return (
                  <div
                    key={index}
                    className="bg-soft rounded-2xl p-8 border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="w-14 h-14 rounded-xl bg-blue-600 flex items-center justify-center mb-6 shadow-sm">
                      <IconComponent className="w-7 h-7 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {service.title}
                    </h3>
                    
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="w-full py-16 md:py-20 lg:py-24 bg-soft">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-4">
                Why Choose{" "}
                <span className="italic font-serif text-blue-600 font-normal">
                  an SMSF?
                </span>
              </h2>
              <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                Self-managed super funds offer unique advantages for those ready to take control
              </p>
            </div>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                
                return (
                  <div
                    key={index}
                    className="bg-white rounded-2xl p-8 border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center"
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

      {/* Compliance Section */}
      <section className="w-full py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              {/* Left - Image */}
              <div className="order-2 lg:order-1">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-gray-200">
                  <Image
                    src="/services/smsf-compliance.webp"
                    alt="SMSF Compliance and Administration"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Right - Compliance Areas List */}
              <div className="order-1 lg:order-2">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 rounded-full bg-white border border-gray-200 shadow-sm">
                  <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">
                    Stay Compliant
                  </span>
                </div>

                <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-6 leading-[1.1]">
                  Expert Compliance &{" "}
                  <span className="italic font-serif text-blue-600 font-normal">
                    Administration
                  </span>
                </h2>

                <p className="text-base md:text-lg text-gray-600 mb-8 leading-relaxed">
                  Navigate complex ATO regulations with confidence. We ensure your SMSF meets all compliance requirements.
                </p>

                <div className="space-y-4">
                  {complianceAreas.map((area, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 bg-soft p-4 rounded-xl border border-gray-200 hover:shadow-md transition-all duration-300"
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
      <section className="w-full py-16 md:py-20 lg:py-24 bg-soft">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-4">
                Getting{" "}
                <span className="italic font-serif text-blue-600 font-normal">
                  Started
                </span>
              </h2>
              <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                Our streamlined process makes SMSF setup and management simple
              </p>
            </div>

            {/* Steps */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {[
                {
                  number: "01",
                  title: "Initial Consultation",
                  description: "Assess if an SMSF is right for your circumstances"
                },
                {
                  number: "02",
                  title: "Fund Establishment",
                  description: "Complete setup including trust deed and ATO registration"
                },
                {
                  number: "03",
                  title: "Strategy Development",
                  description: "Create your customized investment strategy"
                },
                {
                  number: "04",
                  title: "Ongoing Management",
                  description: "Regular compliance, reporting, and administration"
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

      {/* Additional Benefits Section */}
      <section className="w-full py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              {/* Left - Content */}
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 rounded-full bg-white border border-gray-200 shadow-sm">
                  <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">
                    Expert Support
                  </span>
                </div>

                <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-6 leading-[1.1]">
                  Professional SMSF{" "}
                  <span className="italic font-serif text-blue-600 font-normal">
                    Management
                  </span>
                </h2>

                <p className="text-base md:text-lg text-gray-600 mb-8 leading-relaxed">
                  Running an SMSF requires ongoing attention and expertise. We provide the professional support you need to succeed.
                </p>

                <div className="space-y-6">
                  {[
                    {
                      icon: Clock,
                      title: "Save Time",
                      description: "We handle all the paperwork and compliance requirements"
                    },
                    {
                      icon: BadgeCheck,
                      title: "Stay Compliant",
                      description: "Expert knowledge of ATO regulations and requirements"
                    },
                    {
                      icon: Shield,
                      title: "Peace of Mind",
                      description: "Professional oversight to protect your retirement savings"
                    }
                  ].map((item, index) => {
                    const IconComponent = item.icon;
                    return (
                      <div key={index} className="flex items-start gap-4 bg-soft p-6 rounded-xl border border-gray-200 shadow-sm">
                        <div className="w-12 h-12 rounded-lg bg-blue-600 flex items-center justify-center flex-shrink-0">
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-gray-900 mb-2">
                            {item.title}
                          </h3>
                          <p className="text-sm text-gray-600 leading-relaxed">
                            {item.description}
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
                    src="/services/smsf-management.webp"
                    alt="Professional SMSF Management"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing CTA Section */}
      <section className="w-full py-16 md:py-20 lg:py-24 bg-soft">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 md:p-12 lg:p-16 shadow-xl border border-gray-200">
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                  Transparent SMSF{" "}
                  <span className="italic font-serif text-blue-600 font-normal">
                    Pricing
                  </span>
                </h2>
                <p className="text-base md:text-lg text-gray-600">
                  Competitive rates with no hidden fees or surprises
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                <div className="text-center p-6 bg-soft rounded-xl border border-gray-200">
                  <div className="text-4xl font-bold text-gray-900 mb-2">$1,650</div>
                  <div className="text-sm text-gray-600 font-medium">
                    SMSF Setup
                  </div>
                </div>

                <div className="text-center p-6 bg-blue-600 rounded-xl shadow-lg">
                  <div className="text-4xl font-bold text-white mb-2">$2,250</div>
                  <div className="text-sm text-white font-medium">
                    Annual Compliance
                  </div>
                </div>

                <div className="text-center p-6 bg-soft rounded-xl border border-gray-200">
                  <div className="text-4xl font-bold text-gray-900 mb-2">Free</div>
                  <div className="text-sm text-gray-600 font-medium">
                    Initial Consultation
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/booking">
                  <button className="px-10 py-5 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all shadow-lg active:scale-95 text-base md:text-lg">
                    Book Consultation
                  </button>
                </Link>
                <Link href="/fees">
                  <button className="px-10 py-5 bg-white text-gray-900 font-bold rounded-xl border-2 border-gray-200 hover:border-gray-900 transition-all active:scale-95 text-base md:text-lg">
                    View All Pricing
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
              Ready to take control of your{" "}
              <span className="italic font-serif text-blue-400 font-normal">
                super?
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed">
              Let our SMSF specialists guide you through setup and ongoing management.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/booking">
                <button className="px-10 py-5 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all shadow-lg active:scale-95 text-base md:text-lg">
                  Get Started Today
                </button>
              </Link>
              <Link href="/contact">
                <button className="px-10 py-5 bg-white text-gray-900 font-bold rounded-xl hover:bg-gray-100 transition-all active:scale-95 text-base md:text-lg">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SMSFPage;