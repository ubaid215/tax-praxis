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
                  Asset{" "}
                  <span className="italic font-serif text-blue-600 font-normal">
                    Finance Solutions
                  </span>
                </h1>

                <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
                  Smart lending solutions to grow your business with strategic financing for equipment, vehicles, property, and working capital. We find the optimal funding structure for your asset needs.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/booking">
                    <button className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all shadow-lg active:scale-95 text-sm md:text-base">
                      Apply for Finance
                    </button>
                  </Link>
                  <Link href="/fees">
                    <button className="px-8 py-4 bg-white text-gray-900 font-semibold rounded-xl border border-gray-200 hover:border-gray-900 transition-all active:scale-95 text-sm md:text-base">
                      View Rates
                    </button>
                  </Link>
                </div>
              </div>

              {/* Right - Image */}
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
                  <Image
                    src="/services/asset-finance-hero.webp"
                    alt="Asset Finance Solutions"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                {/* Floating Stat Badge */}
                <div className="absolute -bottom-6 -left-6 bg-blue-600 text-white p-6 md:p-8 rounded-2xl shadow-2xl">
                  <div className="text-4xl md:text-5xl font-black mb-2">24-48h</div>
                  <div className="text-sm uppercase tracking-wider opacity-90">
                    Fast Approval
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="w-full py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-4">
                Comprehensive{" "}
                <span className="italic font-serif text-blue-600 font-normal">
                  Finance Solutions
                </span>
              </h2>
              <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                Tailored financing options designed to support your business growth and operational needs
              </p>
            </div>

            {/* Solutions Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {financeSolutions.map((solution, index) => {
                const IconComponent = solution.icon;
                
                return (
                  <div
                    key={index}
                    className="bg-soft rounded-2xl p-8 border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="w-14 h-14 rounded-xl bg-blue-600 flex items-center justify-center mb-6 shadow-sm">
                      <IconComponent className="w-7 h-7 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {solution.title}
                    </h3>
                    
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {solution.description}
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
                    Key Benefits
                  </span>
                </div>

                <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-6 leading-[1.1]">
                  Flexible Financing{" "}
                  <span className="italic font-serif text-blue-600 font-normal">
                    Options
                  </span>
                </h2>

                <p className="text-base md:text-lg text-gray-600 mb-8 leading-relaxed">
                  Our asset finance solutions offer flexibility and strategic advantages for growing businesses.
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
                    src="/services/business-equipment.webp"
                    alt="Business Equipment Financing"
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
                  Finance Solutions
                </span>
              </h2>
              <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                Strategic advantages that help your business grow while managing cash flow effectively
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
                Simple Application{" "}
                <span className="italic font-serif text-blue-600 font-normal">
                  Process
                </span>
              </h2>
              <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                A streamlined approach to securing the financing your business needs
              </p>
            </div>

            {/* Steps */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
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
                    Our Advantages
                  </span>
                </div>

                <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-6 leading-[1.1]">
                  Strategic Financing{" "}
                  <span className="italic font-serif text-blue-600 font-normal">
                    Partners
                  </span>
                </h2>

                <p className="text-base md:text-lg text-gray-600 mb-8 leading-relaxed">
                  We work with a network of trusted lenders to secure the best terms and structures for your business.
                </p>

                <div className="space-y-6">
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
                    src="/services/commercial-property.webp"
                    alt="Commercial Property Financing"
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
                  Ready to Finance Your{" "}
                  <span className="italic font-serif text-blue-600 font-normal">
                    Business Growth?
                  </span>
                </h2>
                <p className="text-base md:text-lg text-gray-600">
                  Get expert advice on the best financing options for your equipment, vehicles, or property needs.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                <div className="text-center p-6 bg-soft rounded-xl border border-gray-200">
                  <div className="text-4xl font-bold text-gray-900 mb-2">24-48h</div>
                  <div className="text-sm text-gray-600 font-medium">
                    Fast Approval Times
                  </div>
                </div>

                <div className="text-center p-6 bg-blue-600 rounded-xl shadow-lg">
                  <div className="text-4xl font-bold text-white mb-2">100%</div>
                  <div className="text-sm text-white font-medium">
                    Asset Value Finance
                  </div>
                </div>

                <div className="text-center p-6 bg-soft rounded-xl border border-gray-200">
                  <div className="text-4xl font-bold text-gray-900 mb-2">25+</div>
                  <div className="text-sm text-gray-600 font-medium">
                    Lender Partners
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/booking">
                  <button className="px-10 py-5 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all shadow-lg active:scale-95 text-base md:text-lg">
                    Apply for Finance
                  </button>
                </Link>
                <Link href="/fees">
                  <button className="px-10 py-5 bg-white text-gray-900 font-bold rounded-xl border-2 border-gray-200 hover:border-gray-900 transition-all active:scale-95 text-base md:text-lg">
                    View Finance Options
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
              Grow Your Business with{" "}
              <span className="italic font-serif text-blue-400 font-normal">
                Smart Financing
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed">
              Partner with finance experts who understand your business goals and can secure the right funding solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/booking">
                <button className="px-10 py-5 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all shadow-lg active:scale-95 text-base md:text-lg">
                  Start Your Application
                </button>
              </Link>
              <Link href="/contact">
                <button className="px-10 py-5 bg-white text-gray-900 font-bold rounded-xl hover:bg-gray-100 transition-all active:scale-95 text-base md:text-lg">
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