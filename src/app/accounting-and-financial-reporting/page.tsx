import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FileText, BarChart, Users, Shield, Calendar, CheckCircle, Target, TrendingUp, PieChart, Building } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accounting & Financial Reporting Services | Expert Business Accounting",
  description: "Professional accounting and financial reporting services including annual statements, management accounts, tax compliance, and strategic financial insights for business growth.",
  keywords: [
    "accounting services",
    "financial reporting",
    "annual financial statements",
    "management accounts",
    "bookkeeping",
    "FBT returns",
    "R&D tax concessions",
    "tax compliance",
    "business accounting",
    "financial statements",
    "accounting firm",
    "financial management",
    "business advisory",
    "tax planning",
    "financial analysis",
    "compliance reporting",
    "accounting solutions",
    "financial insights",
    "business growth",
    "financial planning"
  ],
  openGraph: {
    title: "Accounting & Financial Reporting Services | Expert Business Accounting",
    description: "Comprehensive accounting and financial reporting services to drive your business success with accurate insights and compliance.",
    type: "website",
    images: [
      {
        url: "/services/accounting-reporting-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Accounting & Financial Reporting Services"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Accounting & Financial Reporting Services | Expert Business Accounting",
    description: "Professional accounting services to streamline your financial management and ensure compliance.",
    images: ["/services/accounting-reporting-hero.jpg"]
  },
  alternates: {
    canonical: "/business/accounting-and-financial-reporting"
  }
};

const AccountingAndFinancialReportingPage = () => {
  const services = [
    {
      icon: FileText,
      title: "Annual Financial Statements",
      description: "Compliant financial statements prepared to the highest standards"
    },
    {
      icon: BarChart,
      title: "Management Accounts",
      description: "Regular financial insights to support strategic decision-making"
    },
    {
      icon: Users,
      title: "Bookkeeping Services",
      description: "Accurate record-keeping and transaction processing"
    },
    {
      icon: Shield,
      title: "FBT Returns",
      description: "Complete fringe benefits tax compliance and lodgement"
    },
    {
      icon: Calendar,
      title: "R&D Tax Concessions",
      description: "Expert assistance with research and development tax incentives"
    },
    {
      icon: CheckCircle,
      title: "Tax Compliance",
      description: "Full compliance with all indirect tax obligations"
    },
  ];

  const benefits = [
    {
      icon: Target,
      title: "Strategic Insights",
      description: "Transform financial data into actionable business intelligence"
    },
    {
      icon: TrendingUp,
      title: "Growth Focused",
      description: "Accounting that supports your business expansion goals"
    },
    {
      icon: Shield,
      title: "Compliance Confidence",
      description: "Stay compliant with evolving regulations and standards"
    },
    {
      icon: PieChart,
      title: "Cash Flow Clarity",
      description: "Clear visibility into your business's financial health"
    },
  ];

  const features = [
    "Monthly/quarterly financial statements",
    "Cash flow analysis and forecasting",
    "Budget preparation and variance analysis",
    "Management reporting dashboards",
    "Compliance with accounting standards",
    "Tax planning and optimization",
    "Business performance analysis",
    "Financial ratio analysis",
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
                  Accounting &{" "}
                  <span className="italic font-serif text-blue-600 font-normal block sm:inline">
                    Financial Reporting
                  </span>
                </h1>

                <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed mb-6 sm:mb-7 md:mb-8">
                  Precision accounting and comprehensive financial reporting that provides clarity and drives informed business decisions. We transform complex financial data into actionable insights for sustainable growth.
                </p>

                {/* Buttons - Stack on mobile */}
                <div className="flex flex-col xs:flex-row gap-3 sm:gap-4">
                  <Link href="/booking" className="w-full xs:w-auto">
                    <button className="w-full xs:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 text-white font-semibold rounded-lg sm:rounded-xl hover:bg-blue-700 transition-all shadow-lg active:scale-95 text-sm sm:text-base">
                      Book Consultation
                    </button>
                  </Link>
                  <Link href="/fees" className="w-full xs:w-auto">
                    <button className="w-full xs:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white text-gray-900 font-semibold rounded-lg sm:rounded-xl border border-gray-200 hover:border-gray-900 transition-all active:scale-95 text-sm sm:text-base">
                      View Pricing
                    </button>
                  </Link>
                </div>
              </div>

              {/* Right - Image */}
              <div className="relative order-1 lg:order-2 mb-4 sm:mb-6 lg:mb-0">
                <div className="relative aspect-square rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
                  <Image
                    src="/services/accounting-reporting-hero.jpg"
                    alt="Accounting and Financial Reporting Services"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>

                {/* Floating Stat Badge - Repositioned for mobile */}
                <div className="absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-6 bg-blue-600 text-white p-4 sm:p-5 md:p-6 lg:p-8 rounded-xl sm:rounded-2xl shadow-2xl">
                  <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-1 sm:mb-2">100+</div>
                  <div className="text-[10px] sm:text-xs md:text-sm uppercase tracking-wider opacity-90">
                    Businesses Served
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Mobile First */}
      <section className="w-full py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-3 sm:mb-4 px-2">
                Comprehensive{" "}
                <span className="italic font-serif text-blue-600 font-normal block sm:inline">
                  Accounting Services
                </span>
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-3">
                End-to-end accounting solutions designed to meet your business needs and compliance requirements
              </p>
            </div>

            {/* Services Grid - 1 col on mobile, 2 on tablet, 3 on desktop */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                
                return (
                  <div
                    key={index}
                    className="bg-soft rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-7 lg:p-8 border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="w-12 h-12 sm:w-13 sm:h-13 md:w-14 md:h-14 rounded-lg sm:rounded-xl bg-blue-600 flex items-center justify-center mb-4 sm:mb-5 md:mb-6 shadow-sm">
                      <IconComponent className="w-6 h-6 sm:w-6.5 sm:h-6.5 md:w-7 md:h-7 text-white" />
                    </div>
                    
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-2 sm:mb-2.5 md:mb-3">
                      {service.title}
                    </h3>
                    
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                      {service.description}
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
                    What We Offer
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-4 sm:mb-5 md:mb-6 leading-tight sm:leading-[1.1]">
                  Detailed Financial{" "}
                  <span className="italic font-serif text-blue-600 font-normal block sm:inline">
                    Reporting
                  </span>
                </h2>

                <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-6 sm:mb-7 md:mb-8 leading-relaxed">
                  Our comprehensive reporting services provide the insights you need to make informed business decisions and drive growth.
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
                <div className="relative aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden shadow-xl border border-gray-200">
                  <Image
                    src="/services/financial-analysis.jpg"
                    alt="Financial Analysis and Reporting"
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
                  Accounting Services
                </span>
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-3">
                Professional accounting that goes beyond numbers to deliver strategic value
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
                Our Accounting{" "}
                <span className="italic font-serif text-blue-600 font-normal block sm:inline">
                  Process
                </span>
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-3">
                A structured approach to delivering accurate and timely financial information
              </p>
            </div>

            {/* Steps - 1 col on mobile, 2 on tablet, 4 on desktop */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
              {[
                {
                  number: "01",
                  title: "Data Collection",
                  description: "Gathering and organizing all financial documents and records"
                },
                {
                  number: "02",
                  title: "Analysis & Processing",
                  description: "Meticulous review and processing of financial transactions"
                },
                {
                  number: "03",
                  title: "Reporting & Insights",
                  description: "Preparation of comprehensive financial reports with key insights"
                },
                {
                  number: "04",
                  title: "Review & Strategy",
                  description: "Financial review meetings and strategic recommendations"
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
                    Our Expertise
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-4 sm:mb-5 md:mb-6 leading-tight sm:leading-[1.1]">
                  Beyond Basic{" "}
                  <span className="italic font-serif text-blue-600 font-normal block sm:inline">
                    Bookkeeping
                  </span>
                </h2>

                <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-6 sm:mb-7 md:mb-8 leading-relaxed">
                  We provide strategic accounting that helps you understand your business performance and make data-driven decisions for growth.
                </p>

                <div className="space-y-4 sm:space-y-5 md:space-y-6">
                  {[
                    {
                      icon: Building,
                      title: "Industry Specialization",
                      description: "Deep understanding of industry-specific accounting requirements and challenges"
                    },
                    {
                      icon: TrendingUp,
                      title: "Growth Advisory",
                      description: "Financial insights to support business expansion and scaling strategies"
                    },
                    {
                      icon: Shield,
                      title: "Compliance Assurance",
                      description: "Stay updated with changing regulations and maintain full compliance"
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
                <div className="relative aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden shadow-xl border border-gray-200">
                  <Image
                    src="/services/business-strategy.jpg"
                    alt="Business Strategy and Advisory"
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
                  Transform Your{" "}
                  <span className="italic font-serif text-blue-600 font-normal block sm:inline">
                    Financial Management
                  </span>
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-gray-600 px-3">
                  Schedule a consultation to discuss how our accounting services can streamline your financial operations and provide strategic insights.
                </p>
              </div>

              {/* Stats Grid - 1 col on mobile, 3 on tablet+ */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 md:gap-5 lg:gap-6 mb-6 sm:mb-8 md:mb-10">
                <div className="text-center p-4 sm:p-5 md:p-6 bg-soft rounded-lg sm:rounded-xl border border-gray-200">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-1 sm:mb-2">Timely</div>
                  <div className="text-[10px] sm:text-xs md:text-sm text-gray-600 font-medium">
                    Reporting Delivery
                  </div>
                </div>

                <div className="text-center p-4 sm:p-5 md:p-6 bg-blue-600 rounded-lg sm:rounded-xl shadow-lg">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">100%</div>
                  <div className="text-[10px] sm:text-xs md:text-sm text-white font-medium">
                    Compliance Accuracy
                  </div>
                </div>

                <div className="text-center p-4 sm:p-5 md:p-6 bg-soft rounded-lg sm:rounded-xl border border-gray-200">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-1 sm:mb-2">24/7</div>
                  <div className="text-[10px] sm:text-xs md:text-sm text-gray-600 font-medium">
                    Online Portal Access
                  </div>
                </div>
              </div>

              {/* Buttons - Stack on mobile */}
              <div className="flex flex-col xs:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0">
                <Link href="/booking" className="w-full xs:w-auto">
                  <button className="w-full xs:w-auto px-6 sm:px-8 md:px-10 py-3.5 sm:py-4 md:py-5 bg-blue-600 text-white font-bold rounded-lg sm:rounded-xl hover:bg-blue-700 transition-all shadow-lg active:scale-95 text-sm sm:text-base md:text-lg">
                    Book Free Consultation
                  </button>
                </Link>
                <Link href="/fees" className="w-full xs:w-auto">
                  <button className="w-full xs:w-auto px-6 sm:px-8 md:px-10 py-3.5 sm:py-4 md:py-5 bg-white text-gray-900 font-bold rounded-lg sm:rounded-xl border-2 border-gray-200 hover:border-gray-900 transition-all active:scale-95 text-sm sm:text-base md:text-lg">
                    View Pricing Plans
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
              Ready for accurate{" "}
              <span className="italic font-serif text-blue-400 font-normal block sm:inline">
                financial insights?
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 md:mb-10 leading-relaxed px-3">
              Partner with experienced accounting professionals who understand your business and are committed to your financial success.
            </p>

            {/* Buttons - Stack on mobile */}
            <div className="flex flex-col xs:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0">
              <Link href="/booking" className="w-full xs:w-auto">
                <button className="w-full xs:w-auto px-6 sm:px-8 md:px-10 py-3.5 sm:py-4 md:py-5 bg-blue-600 text-white font-bold rounded-lg sm:rounded-xl hover:bg-blue-700 transition-all shadow-lg active:scale-95 text-sm sm:text-base md:text-lg">
                  Schedule Consultation
                </button>
              </Link>
              <Link href="/contact" className="w-full xs:w-auto">
                <button className="w-full xs:w-auto px-6 sm:px-8 md:px-10 py-3.5 sm:py-4 md:py-5 bg-white text-gray-900 font-bold rounded-lg sm:rounded-xl hover:bg-gray-100 transition-all active:scale-95 text-sm sm:text-base md:text-lg">
                  Contact Our Team
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AccountingAndFinancialReportingPage;