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
        url: "/services/accounting-reporting-hero.webp",
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
    images: ["/services/accounting-reporting-hero.webp"]
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
                    Business Services
                  </span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 leading-[1.1] tracking-tight mb-6">
                  Accounting &{" "}
                  <span className="italic font-serif text-blue-600 font-normal">
                    Financial Reporting
                  </span>
                </h1>

                <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
                  Precision accounting and comprehensive financial reporting that provides clarity and drives informed business decisions. We transform complex financial data into actionable insights for sustainable growth.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/booking">
                    <button className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all shadow-lg active:scale-95 text-sm md:text-base">
                      Book Consultation
                    </button>
                  </Link>
                  <Link href="/fees">
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
                    src="/services/accounting-reporting-hero.webp"
                    alt="Accounting and Financial Reporting Services"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                {/* Floating Stat Badge */}
                <div className="absolute -bottom-6 -left-6 bg-blue-600 text-white p-6 md:p-8 rounded-2xl shadow-2xl">
                  <div className="text-4xl md:text-5xl font-black mb-2">100+</div>
                  <div className="text-sm uppercase tracking-wider opacity-90">
                    Businesses Served
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-4">
                Comprehensive{" "}
                <span className="italic font-serif text-blue-600 font-normal">
                  Accounting Services
                </span>
              </h2>
              <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                End-to-end accounting solutions designed to meet your business needs and compliance requirements
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {services.map((service, index) => {
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

      {/* Features Section */}
      <section className="w-full py-16 md:py-20 lg:py-24 bg-soft">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              {/* Left - Features List */}
              <div className="order-1 lg:order-1">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 rounded-full bg-white border border-gray-200 shadow-sm">
                  <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">
                    What We Offer
                  </span>
                </div>

                <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-6 leading-[1.1]">
                  Detailed Financial{" "}
                  <span className="italic font-serif text-blue-600 font-normal">
                    Reporting
                  </span>
                </h2>

                <p className="text-base md:text-lg text-gray-600 mb-8 leading-relaxed">
                  Our comprehensive reporting services provide the insights you need to make informed business decisions and drive growth.
                </p>

                <div className="space-y-4">
                  {features.map((feature, index) => (
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
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right - Image */}
              <div className="order-2 lg:order-2">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-gray-200">
                  <Image
                    src="/services/financial-analysis.webp"
                    alt="Financial Analysis and Reporting"
                    fill
                    className="object-cover"
                  />
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
                Why Choose Our{" "}
                <span className="italic font-serif text-blue-600 font-normal">
                  Accounting Services
                </span>
              </h2>
              <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                Professional accounting that goes beyond numbers to deliver strategic value
              </p>
            </div>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                
                return (
                  <div
                    key={index}
                    className="bg-white rounded-2xl p-8 border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 text-center"
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

      {/* Process Section */}
      <section className="w-full py-16 md:py-20 lg:py-24 bg-soft">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-4">
                Our Accounting{" "}
                <span className="italic font-serif text-blue-600 font-normal">
                  Process
                </span>
              </h2>
              <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                A structured approach to delivering accurate and timely financial information
              </p>
            </div>

            {/* Steps */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
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
      <section className="w-full py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              {/* Left - Content */}
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 rounded-full bg-white border border-gray-200 shadow-sm">
                  <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">
                    Our Expertise
                  </span>
                </div>

                <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-6 leading-[1.1]">
                  Beyond Basic{" "}
                  <span className="italic font-serif text-blue-600 font-normal">
                    Bookkeeping
                  </span>
                </h2>

                <p className="text-base md:text-lg text-gray-600 mb-8 leading-relaxed">
                  We provide strategic accounting that helps you understand your business performance and make data-driven decisions for growth.
                </p>

                <div className="space-y-6">
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
                      <div key={index} className="flex items-start gap-4 bg-soft p-6 rounded-xl border border-gray-200 shadow-sm">
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
                    src="/services/business-strategy.webp"
                    alt="Business Strategy and Advisory"
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
                  Transform Your{" "}
                  <span className="italic font-serif text-blue-600 font-normal">
                    Financial Management
                  </span>
                </h2>
                <p className="text-base md:text-lg text-gray-600">
                  Schedule a consultation to discuss how our accounting services can streamline your financial operations and provide strategic insights.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                <div className="text-center p-6 bg-soft rounded-xl border border-gray-200">
                  <div className="text-4xl font-bold text-gray-900 mb-2">Timely</div>
                  <div className="text-sm text-gray-600 font-medium">
                    Reporting Delivery
                  </div>
                </div>

                <div className="text-center p-6 bg-blue-600 rounded-xl shadow-lg">
                  <div className="text-4xl font-bold text-white mb-2">100%</div>
                  <div className="text-sm text-white font-medium">
                    Compliance Accuracy
                  </div>
                </div>

                <div className="text-center p-6 bg-soft rounded-xl border border-gray-200">
                  <div className="text-4xl font-bold text-gray-900 mb-2">24/7</div>
                  <div className="text-sm text-gray-600 font-medium">
                    Online Portal Access
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/booking">
                  <button className="px-10 py-5 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all shadow-lg active:scale-95 text-base md:text-lg">
                    Book Free Consultation
                  </button>
                </Link>
                <Link href="/fees">
                  <button className="px-10 py-5 bg-white text-gray-900 font-bold rounded-xl border-2 border-gray-200 hover:border-gray-900 transition-all active:scale-95 text-base md:text-lg">
                    View Pricing Plans
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
              Ready for accurate{" "}
              <span className="italic font-serif text-blue-400 font-normal">
                financial insights?
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed">
              Partner with experienced accounting professionals who understand your business and are committed to your financial success.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/booking">
                <button className="px-10 py-5 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all shadow-lg active:scale-95 text-base md:text-lg">
                  Schedule Consultation
                </button>
              </Link>
              <Link href="/contact">
                <button className="px-10 py-5 bg-white text-gray-900 font-bold rounded-xl hover:bg-gray-100 transition-all active:scale-95 text-base md:text-lg">
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