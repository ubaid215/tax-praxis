import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Building, Car, Home, DollarSign, Shield, TrendingUp, Target, PieChart, Clock, Users, BarChart, CheckCircle } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Asset Finance Solutions | Equipment, Vehicle & Property Financing",
  description: "Strategic asset financing solutions for business growth including equipment financing, commercial vehicle leasing, property acquisition, and working capital solutions.",
  keywords: [
    "asset finance",
    "equipment financing",
    "commercial vehicle leasing",
    "property acquisition",
    "working capital",
    "business financing",
    "equipment loans",
    "vehicle finance",
    "commercial property loans",
    "business loans",
    "asset financing",
    "equipment leasing",
    "fleet financing",
    "business expansion",
    "capital funding",
    "tax-effective financing",
    "growth financing",
    "business assets",
    "finance solutions",
    "funding options"
  ],
  openGraph: {
    title: "Asset Finance Solutions | Equipment, Vehicle & Property Financing",
    description: "Strategic financing solutions for business assets that support growth and operational efficiency.",
    type: "website",
    images: [
      {
        url: "/services/asset-finance-hero.webp",
        width: 1200,
        height: 630,
        alt: "Asset Finance Solutions"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Asset Finance Solutions | Equipment, Vehicle & Property Financing",
    description: "Find the optimal funding structure for your equipment and property needs.",
    images: ["/services/asset-finance-hero.webp"]
  },
  alternates: {
    canonical: "/business/asset-finance"
  }
};

const AssetFinancePage = () => {
  const financeSolutions = [
    {
      icon: Building,
      title: "Equipment Financing",
      description: "Finance for machinery, technology, and business equipment"
    },
    {
      icon: Car,
      title: "Commercial Vehicle Leasing",
      description: "Fleet management and vehicle financing solutions"
    },
    {
      icon: Home,
      title: "Property Acquisition",
      description: "Funding for commercial and investment property purchases"
    },
    {
      icon: DollarSign,
      title: "Working Capital",
      description: "Flexible funding to support day-to-day operations"
    },
    {
      icon: Shield,
      title: "Tax-Effective Structures",
      description: "Optimized financing for maximum tax benefits"
    },
    {
      icon: TrendingUp,
      title: "Growth Financing",
      description: "Capital for expansion and business development"
    },
  ];

  const benefits = [
    {
      icon: Target,
      title: "Strategic Growth",
      description: "Financing aligned with your business objectives"
    },
    {
      icon: PieChart,
      title: "Cash Flow Management",
      description: "Preserve working capital while acquiring assets"
    },
    {
      icon: Clock,
      title: "Quick Approval",
      description: "Streamlined application and fast funding"
    },
    {
      icon: Users,
      title: "Expert Guidance",
      description: "Personalized advice on optimal financing structures"
    },
  ];

  const features = [
    "Flexible repayment terms tailored to cash flow",
    "Competitive interest rates from leading lenders",
    "Finance up to 100% of asset value",
    "Tax benefits through depreciation claims",
    "Balloon payment options available",
    "Refinancing existing equipment",
    "Upgrade options for newer technology",
    "Portfolio management services",
  ];

  return (
    <main className="w-full bg-white overflow-x-hidden">
      {/* Hero Section - Mobile First */}
      <section className="w-full bg-soft pt-20 pb-12 sm:pt-24 sm:pb-16 md:pt-32 md:pb-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-center">
              {/* Left - Content */}
              <div className="order-2 lg:order-1">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-4 sm:mb-6 rounded-full bg-white border border-gray-200 shadow-sm">
                  <span className="text-[10px] sm:text-xs font-semibold text-gray-400 uppercase tracking-widest">
                    Business Services
                  </span>
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 leading-tight sm:leading-[1.1] tracking-tight mb-4 sm:mb-5 md:mb-6">
                  Asset{" "}
                  <span className="italic font-serif text-blue-600 font-normal block sm:inline">
                    Finance Solutions
                  </span>
                </h1>

                <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed mb-6 sm:mb-7 md:mb-8">
                  Smart lending solutions to grow your business with strategic financing for equipment, vehicles, property, and working capital. We find the optimal funding structure for your asset needs.
                </p>

                {/* Buttons - Stack on mobile */}
                <div className="flex flex-col xs:flex-row gap-3 sm:gap-4">
                  <Link href="/booking" className="w-full xs:w-auto">
                    <button className="w-full xs:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 text-white font-semibold rounded-lg sm:rounded-xl hover:bg-blue-700 transition-all shadow-lg active:scale-95 text-sm sm:text-base">
                      Apply for Finance
                    </button>
                  </Link>
                  <Link href="/fees" className="w-full xs:w-auto">
                    <button className="w-full xs:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white text-gray-900 font-semibold rounded-lg sm:rounded-xl border border-gray-200 hover:border-gray-900 transition-all active:scale-95 text-sm sm:text-base">
                      View Rates
                    </button>
                  </Link>
                </div>
              </div>

              {/* Right - Image */}
              <div className="relative order-1 lg:order-2 mb-4 sm:mb-6 lg:mb-0">
                <div className="aspect-square rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
                  <Image
                    src="/services/asset-finance-hero.webp"
                    alt="Asset Finance Solutions"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>

                {/* Floating Stat Badge - Repositioned for mobile */}
                <div className="absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-6 bg-blue-600 text-white p-4 sm:p-5 md:p-6 lg:p-8 rounded-xl sm:rounded-2xl shadow-2xl">
                  <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-1 sm:mb-2">24-48h</div>
                  <div className="text-[10px] sm:text-xs md:text-sm uppercase tracking-wider opacity-90">
                    Fast Approval
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section - Mobile First */}
      <section className="w-full py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-3 sm:mb-4 px-2">
                Comprehensive{" "}
                <span className="italic font-serif text-blue-600 font-normal block sm:inline">
                  Finance Solutions
                </span>
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-3">
                Tailored financing options designed to support your business growth and operational needs
              </p>
            </div>

            {/* Solutions Grid - 1 col on mobile, 2 on tablet, 3 on desktop */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
              {financeSolutions.map((solution, index) => {
                const IconComponent = solution.icon;
                
                return (
                  <div
                    key={index}
                    className="bg-soft rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-7 lg:p-8 border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="w-12 h-12 sm:w-13 sm:h-13 md:w-14 md:h-14 rounded-lg sm:rounded-xl bg-blue-600 flex items-center justify-center mb-4 sm:mb-5 md:mb-6 shadow-sm">
                      <IconComponent className="w-6 h-6 sm:w-6.5 sm:h-6.5 md:w-7 md:h-7 text-white" />
                    </div>
                    
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-2 sm:mb-2.5 md:mb-3">
                      {solution.title}
                    </h3>
                    
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                      {solution.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Mobile First */}
      <section className="w-full py-12 sm:py-16 md:py-20 lg:py-24 bg-soft">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-center">
              {/* Left - Features List */}
              <div className="order-1 lg:order-1">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-4 sm:mb-6 rounded-full bg-white border border-gray-200 shadow-sm">
                  <span className="text-[10px] sm:text-xs font-semibold text-gray-400 uppercase tracking-widest">
                    Key Benefits
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-4 sm:mb-5 md:mb-6 leading-tight sm:leading-[1.1]">
                  Flexible Financing{" "}
                  <span className="italic font-serif text-blue-600 font-normal block sm:inline">
                    Options
                  </span>
                </h2>

                <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-6 sm:mb-7 md:mb-8 leading-relaxed">
                  Our asset finance solutions offer flexibility and strategic advantages for growing businesses.
                </p>

                <div className="space-y-3 sm:space-y-4">
                  {features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 sm:gap-4 bg-white p-3 sm:p-3.5 md:p-4 rounded-lg sm:rounded-xl border border-gray-200 hover:shadow-md transition-all duration-300"
                    >
                      <div className="w-5 h-5 sm:w-5.5 sm:h-5.5 md:w-6 md:h-6 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg
                          className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-white"
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
                      <p className="text-xs sm:text-sm md:text-base text-gray-700 font-medium">
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right - Image */}
              <div className="order-2 lg:order-2">
                <div className="aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden shadow-xl border border-gray-200">
                  <Image
                    src="/services/business-equipment.webp"
                    alt="Business Equipment Financing"
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section - Mobile First */}
      <section className="w-full py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-3 sm:mb-4 px-2">
                Why Choose Our{" "}
                <span className="italic font-serif text-blue-600 font-normal block sm:inline">
                  Finance Solutions
                </span>
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-3">
                Strategic advantages that help your business grow while managing cash flow effectively
              </p>
            </div>

            {/* Benefits Grid - 1 col on mobile, 2 on tablet, 4 on desktop */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                
                return (
                  <div
                    key={index}
                    className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-7 lg:p-8 border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 text-center"
                  >
                    <div className="w-12 h-12 sm:w-13 sm:h-13 md:w-14 md:h-14 rounded-lg sm:rounded-xl bg-blue-600 flex items-center justify-center mx-auto mb-4 sm:mb-5 md:mb-6 shadow-sm">
                      <IconComponent className="w-6 h-6 sm:w-6.5 sm:h-6.5 md:w-7 md:h-7 text-white" />
                    </div>
                    
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-2 sm:mb-2.5 md:mb-3">
                      {benefit.title}
                    </h3>
                    
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section - Mobile First */}
      <section className="w-full py-12 sm:py-16 md:py-20 lg:py-24 bg-soft">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-3 sm:mb-4 px-2">
                Simple Application{" "}
                <span className="italic font-serif text-blue-600 font-normal block sm:inline">
                  Process
                </span>
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-3">
                A streamlined approach to securing the financing your business needs
              </p>
            </div>

            {/* Steps - 1 col on mobile, 2 on tablet, 4 on desktop */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
              {[
                {
                  number: "01",
                  title: "Initial Consultation",
                  description: "Discuss your financing needs and business objectives"
                },
                {
                  number: "02",
                  title: "Solution Design",
                  description: "Tailored financing structure and lender selection"
                },
                {
                  number: "03",
                  title: "Application & Approval",
                  description: "Streamlined paperwork and fast lender approval"
                },
                {
                  number: "04",
                  title: "Funding & Support",
                  description: "Quick funding disbursement and ongoing service"
                },
              ].map((step, index) => (
                <div
                  key={index}
                  className="relative bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-7 lg:p-8 border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <div className="text-4xl sm:text-5xl md:text-6xl font-black text-blue-600/10 mb-3 sm:mb-4">
                    {step.number}
                  </div>
                  
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-2 sm:mb-2.5 md:mb-3">
                    {step.title}
                  </h3>
                  
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Arrow - Hidden on mobile/tablet, visible on desktop */}
                  {index < 3 && (
                    <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 z-10">
                      <svg
                        className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-blue-600"
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

      {/* Value Proposition Section - Mobile First */}
      <section className="w-full py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-center">
              {/* Left - Content */}
              <div className="order-2 lg:order-1">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-4 sm:mb-6 rounded-full bg-white border border-gray-200 shadow-sm">
                  <span className="text-[10px] sm:text-xs font-semibold text-gray-400 uppercase tracking-widest">
                    Our Advantages
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-4 sm:mb-5 md:mb-6 leading-tight sm:leading-[1.1]">
                  Strategic Financing{" "}
                  <span className="italic font-serif text-blue-600 font-normal block sm:inline">
                    Partners
                  </span>
                </h2>

                <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-6 sm:mb-7 md:mb-8 leading-relaxed">
                  We work with a network of trusted lenders to secure the best terms and structures for your business.
                </p>

                <div className="space-y-4 sm:space-y-5 md:space-y-6">
                  {[
                    {
                      icon: BarChart,
                      title: "Multi-Lender Access",
                      description: "Access to major banks and specialist lenders for optimal rates"
                    },
                    {
                      icon: Shield,
                      title: "Risk Mitigation",
                      description: "Structured financing that protects your business interests"
                    },
                    {
                      icon: CheckCircle,
                      title: "End-to-End Service",
                      description: "Complete support from application through to final settlement"
                    }
                  ].map((value, index) => {
                    const IconComponent = value.icon;
                    return (
                      <div key={index} className="flex items-start gap-3 sm:gap-4 bg-soft p-4 sm:p-5 md:p-6 rounded-lg sm:rounded-xl border border-gray-200 shadow-sm">
                        <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-lg bg-blue-600 flex items-center justify-center flex-shrink-0">
                          <IconComponent className="w-5 h-5 sm:w-5.5 sm:h-5.5 md:w-6 md:h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-900 mb-1 sm:mb-1.5 md:mb-2">
                            {value.title}
                          </h3>
                          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                            {value.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Right - Image */}
              <div className="order-1 lg:order-2 mb-4 sm:mb-6 lg:mb-0">
                <div className="aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden shadow-xl border border-gray-200">
                  <Image
                    src="/services/commercial-property.webp"
                    alt="Commercial Property Financing"
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Mobile First */}
      <section className="w-full py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 lg:p-12 xl:p-16 shadow-xl border border-gray-200">
              <div className="text-center mb-6 sm:mb-8 md:mb-10">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 px-2">
                  Ready to Finance Your{" "}
                  <span className="italic font-serif text-blue-600 font-normal block sm:inline">
                    Business Growth?
                  </span>
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-gray-600 px-3">
                  Get expert advice on the best financing options for your equipment, vehicles, or property needs.
                </p>
              </div>

              {/* Stats Grid - 1 col on mobile, 3 on tablet+ */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 md:gap-5 lg:gap-6 mb-6 sm:mb-8 md:mb-10">
                <div className="text-center p-4 sm:p-5 md:p-6 bg-soft rounded-lg sm:rounded-xl border border-gray-200">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-1 sm:mb-2">24-48h</div>
                  <div className="text-[10px] sm:text-xs md:text-sm text-gray-600 font-medium">
                    Fast Approval Times
                  </div>
                </div>

                <div className="text-center p-4 sm:p-5 md:p-6 bg-blue-600 rounded-lg sm:rounded-xl shadow-lg">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">100%</div>
                  <div className="text-[10px] sm:text-xs md:text-sm text-white font-medium">
                    Asset Value Finance
                  </div>
                </div>

                <div className="text-center p-4 sm:p-5 md:p-6 bg-soft rounded-lg sm:rounded-xl border border-gray-200">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-1 sm:mb-2">25+</div>
                  <div className="text-[10px] sm:text-xs md:text-sm text-gray-600 font-medium">
                    Lender Partners
                  </div>
                </div>
              </div>

              {/* Buttons - Stack on mobile */}
              <div className="flex flex-col xs:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0">
                <Link href="/booking" className="w-full xs:w-auto">
                  <button className="w-full xs:w-auto px-6 sm:px-8 md:px-10 py-3.5 sm:py-4 md:py-5 bg-blue-600 text-white font-bold rounded-lg sm:rounded-xl hover:bg-blue-700 transition-all shadow-lg active:scale-95 text-sm sm:text-base md:text-lg">
                    Apply for Finance
                  </button>
                </Link>
                <Link href="/fees" className="w-full xs:w-auto">
                  <button className="w-full xs:w-auto px-6 sm:px-8 md:px-10 py-3.5 sm:py-4 md:py-5 bg-white text-gray-900 font-bold rounded-lg sm:rounded-xl border-2 border-gray-200 hover:border-gray-900 transition-all active:scale-95 text-sm sm:text-base md:text-lg">
                    View Finance Options
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA - Mobile First */}
      <section className="w-full py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-900 mb-4 sm:mb-5 md:mb-6 lg:mb-7 rounded-2xl sm:rounded-3xl md:rounded-4xl mx-2 sm:mx-3 md:mx-4">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-5 md:mb-6 px-2">
              Grow Your Business with{" "}
              <span className="italic font-serif text-blue-400 font-normal block sm:inline">
                Smart Financing
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 md:mb-10 leading-relaxed px-3">
              Partner with finance experts who understand your business goals and can secure the right funding solutions.
            </p>

            {/* Buttons - Stack on mobile */}
            <div className="flex flex-col xs:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0">
              <Link href="/booking" className="w-full xs:w-auto">
                <button className="w-full xs:w-auto px-6 sm:px-8 md:px-10 py-3.5 sm:py-4 md:py-5 bg-blue-600 text-white font-bold rounded-lg sm:rounded-xl hover:bg-blue-700 transition-all shadow-lg active:scale-95 text-sm sm:text-base md:text-lg">
                  Start Your Application
                </button>
              </Link>
              <Link href="/contact" className="w-full xs:w-auto">
                <button className="w-full xs:w-auto px-6 sm:px-8 md:px-10 py-3.5 sm:py-4 md:py-5 bg-white text-gray-900 font-bold rounded-lg sm:rounded-xl hover:bg-gray-100 transition-all active:scale-95 text-sm sm:text-base md:text-lg">
                  Speak to an Expert
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AssetFinancePage;