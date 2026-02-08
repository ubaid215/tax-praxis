"use client";
import React, { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { FileText, TrendingUp, PieChart, Shield, BarChart, Building, Users, Target } from "lucide-react";
import BusinessSkeleton from "@/components/common/BusinessSkeleton";

const backgroundImages = {
  accounting: "/services/business/accounting-reporting.webp",
  assetFinance: "/services/business/asset-finance.webp",
  smsf: "/services/business/smsf-business.webp",
  auditing: "/services/business/auditing.webp",
};

const services = [
  {
    id: 1,
    title: "Accounting and Financial Reporting",
    slug: "accounting-and-financial-reporting",
    subtitle: "The type of complexity we thrive on",
    description:
      "Precision accounting and comprehensive financial reporting that provides clarity and drives informed business decisions. We transform complex financial data into actionable insights.",
    icon: FileText,
    features: [
      "Monthly/quarterly financial statements",
      "Cash flow analysis and forecasting",
      "Budget preparation and variance analysis",
      "Management reporting dashboards",
      "Compliance with accounting standards",
    ],
    image: backgroundImages.accounting,
  },
  {
    id: 2,
    title: "Asset Finance",
    slug: "asset-finance",
    subtitle: "Smart lending solutions to grow your business",
    description:
      "Strategic financing solutions for business assets that support growth and operational efficiency. We find the optimal funding structure for your equipment and property needs.",
    icon: TrendingUp,
    features: [
      "Equipment and machinery financing",
      "Commercial vehicle leasing",
      "Property acquisition funding",
      "Working capital solutions",
      "Tax-effective structuring",
    ],
    image: backgroundImages.assetFinance,
  },
  {
    id: 3,
    title: "Self Managed Superannuation Fund",
    slug: "self-managed-superannuation-fund",
    subtitle: "Simplify independent audit requirements",
    description:
      "Expert SMSF management that reduces administrative burden while maximizing retirement outcomes. We handle compliance so you can focus on investment strategy.",
    icon: PieChart,
    features: [
      "SMSF establishment and administration",
      "Annual compliance and auditing",
      "Investment strategy optimization",
      "Pension planning and management",
      "ATO compliance and reporting",
    ],
    image: backgroundImages.smsf,
  },
  {
    id: 4,
    title: "Auditing",
    slug: "auditing",
    subtitle: "Minimize distraction from compliance requirements",
    description:
      "Independent, thorough auditing services that ensure compliance while identifying opportunities for process improvement and risk mitigation.",
    icon: Shield,
    features: [
      "Statutory financial statement audits",
      "Internal control assessments",
      "Compliance and regulatory audits",
      "Risk management reviews",
      "Process improvement recommendations",
    ],
    image: backgroundImages.auditing,
  },
];

const BusinessPage = () => {
  return (
    <Suspense fallback={<BusinessSkeleton />}>
      <main className="w-full bg-white">
        {/* Hero Section */}
        <section className="w-full bg-soft pt-24 pb-16 md:pt-32 md:pb-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 rounded-full bg-white border border-gray-200 shadow-sm">
                <span className="text-xs font-semibold text-blue-500 uppercase tracking-widest">
                  Business Services
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-7xl font-semibold text-gray-900 leading-[1.1] tracking-tight mb-6 md:mb-8">
                Grow Your{" "}
                <span className="italic font-serif text-blue-600 font-normal">
                  Business
                </span>
              </h1>

              <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8">
                Comprehensive business solutions from accounting and reporting to financing and compliance. We partner with you to drive sustainable growth.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/booking">
                  <button className="px-8 py-4 bg-gray-900 text-white font-semibold rounded-xl hover:bg-black transition-all shadow-lg active:scale-95 text-sm md:text-base">
                    Book Consultation
                  </button>
                </Link>
                <Link href="/service-fees">
                  <button className="px-8 py-4 bg-white text-gray-900 font-semibold rounded-xl border border-gray-200 hover:border-gray-900 transition-all active:scale-95 text-sm md:text-base">
                    View Pricing
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services - Bento Grid Layout */}
        <section className="w-full py-16 md:py-20 lg:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-7xl mx-auto">
              {/* Bento Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                {/* Service 1 - Accounting (Tall Card - 2 rows) */}
                <div className="md:row-span-2 bg-soft rounded-2xl overflow-hidden shadow-md border border-gray-200 hover:shadow-xl transition-all duration-300 group">
                  <div className="relative aspect-4/3 md:aspect-square overflow-hidden">
                    <Image
                      src={services[0].image}
                      alt={services[0].title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  
                  <div className="p-6 md:p-8">
                    <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center mb-4 shadow-sm">
                      {React.createElement(services[0].icon, {
                        className: "w-6 h-6 text-white",
                      })}
                    </div>
                    
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                      {services[0].title}
                    </h3>
                    
                    <p className="text-sm text-gray-600 font-medium mb-4">
                      {services[0].subtitle}
                    </p>
                    
                    <p className="text-sm text-gray-600 leading-relaxed mb-6">
                      {services[0].description}
                    </p>

                    <div className="space-y-2 mb-6">
                      {services[0].features.slice(0, 3).map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <div className="w-4 h-4 rounded-full bg-blue-100 flex items-center justify-center shrink-0 mt-0.5">
                            <svg className="w-2.5 h-2.5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <p className="text-xs text-gray-600">{feature}</p>
                        </div>
                      ))}
                    </div>

                    <Link href={`/${services[0].slug}`} target="blank">
                      <button className="w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all shadow-sm text-sm">
                        Learn More
                      </button>
                    </Link>
                  </div>
                </div>

                {/* Service 2 - Asset Finance (Standard) */}
                <div className="bg-[#F3EFEA] rounded-2xl p-6 md:p-8 shadow-md border border-gray-200 hover:shadow-xl transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-gray-900 flex items-center justify-center mb-4 shadow-sm">
                    {React.createElement(services[1].icon, {
                      className: "w-6 h-6 text-white",
                    })}
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                    {services[1].title}
                  </h3>
                  
                  <p className="text-xs text-gray-600 font-medium mb-4">
                    {services[1].subtitle}
                  </p>
                  
                  <p className="text-sm text-gray-700 leading-relaxed mb-4">
                    {services[1].description}
                  </p>

                  <Link href={`/${services[1].slug}`} target="blank">
                    <button className="w-full px-6 py-3 bg-gray-900 text-white font-semibold rounded-xl hover:bg-black transition-all shadow-sm text-sm">
                      Learn More
                    </button>
                  </Link>
                </div>

                {/* Service 3 - SMSF (Standard) */}
                <div className="bg-soft rounded-2xl p-6 md:p-8 shadow-md border border-gray-200 hover:shadow-xl transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center mb-4 shadow-sm">
                    {React.createElement(services[2].icon, {
                      className: "w-6 h-6 text-white",
                    })}
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                    {services[2].title}
                  </h3>
                  
                  <p className="text-xs text-gray-600 font-medium mb-4">
                    {services[2].subtitle}
                  </p>
                  
                  <p className="text-sm text-gray-700 leading-relaxed mb-4">
                    {services[2].description}
                  </p>

                  <Link href={`/${services[2].slug}`} target="blank">
                    <button className="w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all shadow-sm text-sm">
                      Learn More
                    </button>
                  </Link>
                </div>

                {/* Service 4 - Auditing (Wide Card - 2 columns) */}
                <div className="lg:col-span-2 bg-white rounded-2xl overflow-hidden shadow-md border border-gray-200 hover:shadow-xl transition-all duration-300 group">
                  <div className="grid grid-cols-1 md:grid-cols-5">
                    <div className="md:col-span-2 relative aspect-video md:aspect-auto md:min-h-full">
                      <Image
                        src={services[3].image}
                        alt={services[3].title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    
                    <div className="md:col-span-3 p-6 md:p-8 flex flex-col">
                      <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center mb-4 shadow-sm">
                        {React.createElement(services[3].icon, {
                          className: "w-6 h-6 text-white",
                        })}
                      </div>
                      
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                        {services[3].title}
                      </h3>
                      
                      <p className="text-sm text-gray-600 font-medium mb-4">
                        {services[3].subtitle}
                      </p>
                      
                      <p className="text-sm text-gray-700 leading-relaxed mb-6">
                        {services[3].description}
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                        {services[3].features.slice(0, 4).map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <div className="w-4 h-4 rounded-full bg-blue-100 flex items-center justify-center shrink-0 mt-0.5">
                              <svg className="w-2.5 h-2.5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            <p className="text-xs text-gray-600">{feature}</p>
                          </div>
                        ))}
                      </div>

                      <Link href={`/${services[3].slug}`} target="blank" className="mt-auto">
                        <button className="w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all shadow-sm text-sm">
                          Learn More
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="w-full py-16 md:py-20 lg:py-24 bg-soft">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-6xl mx-auto">
              {/* Section Header */}
              <div className="text-center mb-12 md:mb-16">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 rounded-full bg-soft border border-gray-200 shadow-sm">
                  <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">
                    Why Choose Us
                  </span>
                </div>

                <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-4">
                  Business Solutions,{" "}
                  <span className="italic font-serif text-blue-600 font-normal">
                    Expert Results
                  </span>
                </h2>
              </div>

              {/* Benefits Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300 text-center">
                  <div className="w-14 h-14 rounded-xl bg-blue-600 flex items-center justify-center mx-auto mb-6 shadow-sm">
                    <BarChart className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Financial Clarity
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Clear insights into your business performance and growth opportunities
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300 text-center">
                  <div className="w-14 h-14 rounded-xl bg-gray-900 flex items-center justify-center mx-auto mb-6 shadow-sm">
                    <Building className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Scalable Solutions
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Services that grow with your business from startup to enterprise
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300 text-center">
                  <div className="w-14 h-14 rounded-xl bg-blue-600 flex items-center justify-center mx-auto mb-6 shadow-sm">
                    <Users className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Expert Guidance
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Dedicated advisors with deep industry knowledge and experience
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300 text-center">
                  <div className="w-14 h-14 rounded-xl bg-gray-900 flex items-center justify-center mx-auto mb-6 shadow-sm">
                    <Target className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Strategic Focus
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Align financial management with your business objectives
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="w-full py-16 md:py-20 lg:py-24 bg-gray-900 mb-20 rounded-4xl">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Ready to grow your{" "}
                <span className="italic font-serif text-blue-400 font-normal">
                  business?
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed">
                Partner with experienced professionals who understand your business and are committed to your success.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/booking">
                  <button className="px-10 py-5 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all shadow-lg active:scale-95 text-base md:text-lg">
                    Book Free Consultation
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
    </Suspense>
  );
};

export default BusinessPage;