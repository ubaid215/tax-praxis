import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FileCheck, Shield, ClipboardCheck, Search, AlertTriangle, Users, Target, CheckCircle, Clock, BarChart, PieChart, Building } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Professional Auditing Services | Statutory, SMSF & Compliance Audits",
  description: "Independent, thorough auditing services including statutory financial audits, SMSF audits, internal control reviews, and compliance audits. Ensure compliance while identifying opportunities for improvement.",
  keywords: [
    "auditing services",
    "financial audit",
    "SMSF audit",
    "statutory audit",
    "compliance audit",
    "internal control review",
    "risk management",
    "business audit",
    "financial statement audit",
    "super fund audit",
    "regulatory compliance",
    "process improvement",
    "audit firm",
    "independent audit",
    "compliance review",
    "risk assessment",
    "control systems",
    "audit services",
    "financial compliance",
    "business assurance"
  ],
  openGraph: {
    title: "Professional Auditing Services | Statutory, SMSF & Compliance Audits",
    description: "Independent auditing services that ensure compliance while identifying opportunities for process improvement and risk mitigation.",
    type: "website",
    images: [
      {
        url: "/services/auditing-hero.webp",
        width: 1200,
        height: 630,
        alt: "Professional Auditing Services"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional Auditing Services | Statutory, SMSF & Compliance Audits",
    description: "Thorough auditing services for financial statements, compliance, and risk management.",
    images: ["/services/auditing-hero.webp"]
  },
  alternates: {
    canonical: "/business/auditing"
  }
};

const AuditingPage = () => {
  const auditServices = [
    {
      icon: FileCheck,
      title: "Statutory Financial Audits",
      description: "Independent review of financial statements and reports"
    },
    {
      icon: Shield,
      title: "SMSF Audits",
      description: "Comprehensive super fund compliance and performance audits"
    },
    {
      icon: ClipboardCheck,
      title: "Internal Control Reviews",
      description: "Assessment of business processes and control systems"
    },
    {
      icon: Search,
      title: "Compliance Audits",
      description: "Review of regulatory and statutory compliance requirements"
    },
    {
      icon: AlertTriangle,
      title: "Risk Management Reviews",
      description: "Identification and assessment of business risks"
    },
    {
      icon: Users,
      title: "Process Improvement",
      description: "Recommendations for efficiency and control enhancements"
    },
  ];

  const benefits = [
    {
      icon: Target,
      title: "Compliance Confidence",
      description: "Ensure adherence to all regulatory requirements"
    },
    {
      icon: CheckCircle,
      title: "Process Efficiency",
      description: "Identify opportunities for operational improvements"
    },
    {
      icon: Shield,
      title: "Risk Mitigation",
      description: "Proactive identification and management of business risks"
    },
    {
      icon: Clock,
      title: "Timely Reporting",
      description: "Efficient audit processes with clear reporting timelines"
    },
  ];

  const features = [
    "Independent and objective audit opinions",
    "Comprehensive compliance with auditing standards",
    "Detailed risk assessment and control evaluation",
    "Clear and actionable recommendations",
    "Stakeholder communication and reporting",
    "Follow-up on previous audit findings",
    "Technology-assisted audit procedures",
    "Continuous improvement focus",
  ];

  return (
    <main className="w-full bg-white overflow-x-hidden">
      {/* Hero Section - Fully Responsive */}
      <section className="w-full bg-soft pt-20 pb-12 md:pt-24 md:pb-16 lg:pt-32 lg:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
              {/* Left - Content */}
              <div className="order-2 lg:order-1">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-4 md:mb-6 rounded-full bg-white border border-gray-200 shadow-sm">
                  <span className="text-[10px] sm:text-xs font-semibold text-gray-400 uppercase tracking-widest">
                    Business Services
                  </span>
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 leading-tight lg:leading-[1.1] tracking-tight mb-4 md:mb-6">
                  Professional{" "}
                  <span className="italic font-serif text-blue-600 font-normal block sm:inline">
                    Auditing Services
                  </span>
                </h1>

                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed mb-6 md:mb-8">
                  Independent, thorough auditing services that ensure compliance while identifying opportunities for process improvement and risk mitigation. Minimize distraction from compliance requirements.
                </p>

                {/* Buttons - Stack on mobile, side-by-side on larger */}
                <div className="flex flex-col xs:flex-row gap-3 md:gap-4">
                  <Link href="/booking" className="w-full xs:w-auto">
                    <button className="w-full xs:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 text-white font-semibold rounded-lg sm:rounded-xl hover:bg-blue-700 transition-all shadow-lg active:scale-95 text-sm sm:text-base whitespace-nowrap">
                      Schedule Audit
                    </button>
                  </Link>
                  <Link href="/fees" className="w-full xs:w-auto">
                    <button className="w-full xs:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white text-gray-900 font-semibold rounded-lg sm:rounded-xl border border-gray-200 hover:border-gray-900 transition-all active:scale-95 text-sm sm:text-base whitespace-nowrap">
                      View Audit Packages
                    </button>
                  </Link>
                </div>
              </div>

              {/* Right - Image */}
              <div className="relative order-1 lg:order-2 mb-4 lg:mb-0">
                <div className="aspect-square rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
                  <Image
                    src="/services/auditing-hero.webp"
                    alt="Professional Auditing Services"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>

                {/* Floating Stat Badge - Responsive */}
                <div className="absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-6 bg-blue-600 text-white p-4 sm:p-5 md:p-6 lg:p-8 rounded-xl sm:rounded-2xl shadow-2xl">
                  <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-1 sm:mb-2">ASIC</div>
                  <div className="text-[10px] sm:text-xs md:text-sm uppercase tracking-wider opacity-90 whitespace-nowrap">
                    Registered Auditor
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Fully Responsive */}
      <section className="w-full py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-3 md:mb-4 px-4">
                Comprehensive{" "}
                <span className="italic font-serif text-blue-600 font-normal block sm:inline">
                  Audit Services
                </span>
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4">
                Independent auditing services designed to meet regulatory requirements and improve business processes
              </p>
            </div>

            {/* Services Grid - Responsive columns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
              {auditServices.map((service, index) => {
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

      {/* Features Section - Fully Responsive */}
      <section className="w-full py-12 sm:py-16 md:py-20 lg:py-24 bg-soft">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
              {/* Left - Features List */}
              <div className="order-1 lg:order-1">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-4 md:mb-6 rounded-full bg-white border border-gray-200 shadow-sm">
                  <span className="text-[10px] sm:text-xs font-semibold text-gray-400 uppercase tracking-widest">
                    Our Approach
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-4 md:mb-6 leading-tight lg:leading-[1.1]">
                  Thorough Audit{" "}
                  <span className="italic font-serif text-blue-600 font-normal block sm:inline">
                    Methodology
                  </span>
                </h2>

                <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-6 md:mb-8 leading-relaxed">
                  Our systematic approach ensures comprehensive coverage while minimizing disruption to your operations.
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
              <div className="order-2 lg:order-2 mt-6 lg:mt-0">
                <div className="aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden shadow-xl border border-gray-200">
                  <Image
                    src="/services/audit-process.webp"
                    alt="Audit Process and Methodology"
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

      {/* Benefits Section - Fully Responsive */}
      <section className="w-full py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-3 md:mb-4 px-4">
                Why Choose Our{" "}
                <span className="italic font-serif text-blue-600 font-normal block sm:inline">
                  Audit Services
                </span>
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4">
                Professional auditing that provides assurance while adding value to your business
              </p>
            </div>

            {/* Benefits Grid - Responsive columns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                
                return (
                  <div
                    key={index}
                    className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-7 lg:p-8 border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center"
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

      {/* Process Section - Fully Responsive */}
      <section className="w-full py-12 sm:py-16 md:py-20 lg:py-24 bg-soft">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-3 md:mb-4 px-4">
                Our Audit{" "}
                <span className="italic font-serif text-blue-600 font-normal block sm:inline">
                  Process
                </span>
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4">
                A structured, transparent approach to delivering comprehensive audit services
              </p>
            </div>

            {/* Steps - Responsive grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
              {[
                {
                  number: "01",
                  title: "Planning & Scoping",
                  description: "Understanding your business and defining audit objectives"
                },
                {
                  number: "02",
                  title: "Risk Assessment",
                  description: "Identifying key areas for audit focus and testing"
                },
                {
                  number: "03",
                  title: "Testing & Evaluation",
                  description: "Detailed examination of controls and processes"
                },
                {
                  number: "04",
                  title: "Reporting & Follow-up",
                  description: "Clear findings, recommendations, and implementation support"
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

      {/* Value Proposition Section - Fully Responsive */}
      <section className="w-full py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
              {/* Left - Content */}
              <div className="order-2 lg:order-1">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-4 md:mb-6 rounded-full bg-white border border-gray-200 shadow-sm">
                  <span className="text-[10px] sm:text-xs font-semibold text-gray-400 uppercase tracking-widest">
                    Our Expertise
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-4 md:mb-6 leading-tight lg:leading-[1.1]">
                  More Than{" "}
                  <span className="italic font-serif text-blue-600 font-normal block sm:inline">
                    Compliance
                  </span>
                </h2>

                <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-6 md:mb-8 leading-relaxed">
                  Our audits provide strategic value by identifying opportunities for improvement while ensuring regulatory compliance.
                </p>

                <div className="space-y-4 sm:space-y-5 md:space-y-6">
                  {[
                    {
                      icon: BarChart,
                      title: "Strategic Insights",
                      description: "Audit findings that provide business intelligence for decision-making"
                    },
                    {
                      icon: PieChart,
                      title: "Industry Knowledge",
                      description: "Deep understanding of sector-specific requirements and challenges"
                    },
                    {
                      icon: Building,
                      title: "Stakeholder Assurance",
                      description: "Independent verification that builds trust with stakeholders"
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
              <div className="order-1 lg:order-2 mb-6 lg:mb-0">
                <div className="aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden shadow-xl border border-gray-200">
                  <Image
                    src="/services/compliance-assurance.webp"
                    alt="Compliance and Business Assurance"
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

      {/* CTA Section - Fully Responsive */}
      <section className="w-full py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 lg:p-12 xl:p-16 shadow-xl border border-gray-200">
              <div className="text-center mb-6 sm:mb-8 md:mb-10">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-4 px-4">
                  Ensure Your{" "}
                  <span className="italic font-serif text-blue-600 font-normal block sm:inline">
                    Compliance Confidence
                  </span>
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-gray-600 px-4">
                  Schedule a consultation to discuss your audit requirements and how we can provide independent assurance for your business.
                </p>
              </div>

              {/* Stats Grid - Responsive */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 md:gap-5 lg:gap-6 mb-6 sm:mb-8 md:mb-10">
                <div className="text-center p-4 sm:p-5 md:p-6 bg-soft rounded-lg sm:rounded-xl border border-gray-200">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-1 sm:mb-2">ASIC</div>
                  <div className="text-[10px] sm:text-xs md:text-sm text-gray-600 font-medium">
                    Registered Auditor
                  </div>
                </div>

                <div className="text-center p-4 sm:p-5 md:p-6 bg-blue-600 rounded-lg sm:rounded-xl shadow-lg">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">100%</div>
                  <div className="text-[10px] sm:text-xs md:text-sm text-white font-medium">
                    Compliance Rate
                  </div>
                </div>

                <div className="text-center p-4 sm:p-5 md:p-6 bg-soft rounded-lg sm:rounded-xl border border-gray-200">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-1 sm:mb-2">24/7</div>
                  <div className="text-[10px] sm:text-xs md:text-sm text-gray-600 font-medium">
                    Portal Access
                  </div>
                </div>
              </div>

              {/* Buttons - Responsive */}
              <div className="flex flex-col xs:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0">
                <Link href="/booking" className="w-full xs:w-auto">
                  <button className="w-full xs:w-auto px-6 sm:px-8 md:px-10 py-3.5 sm:py-4 md:py-5 bg-blue-600 text-white font-bold rounded-lg sm:rounded-xl hover:bg-blue-700 transition-all shadow-lg active:scale-95 text-sm sm:text-base md:text-lg whitespace-nowrap">
                    Schedule Audit Consultation
                  </button>
                </Link>
                <Link href="/fees" className="w-full xs:w-auto">
                  <button className="w-full xs:w-auto px-6 sm:px-8 md:px-10 py-3.5 sm:py-4 md:py-5 bg-white text-gray-900 font-bold rounded-lg sm:rounded-xl border-2 border-gray-200 hover:border-gray-900 transition-all active:scale-95 text-sm sm:text-base md:text-lg whitespace-nowrap">
                    View Audit Packages
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA - Fully Responsive */}
      <section className="w-full py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-900 mb-4 sm:mb-5 md:mb-6 lg:mb-7 rounded-2xl sm:rounded-3xl md:rounded-4xl mx-2 sm:mx-3 md:mx-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6 px-4">
              Independent Assurance for{" "}
              <span className="italic font-serif text-blue-400 font-normal block sm:inline">
                Business Success
              </span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 mb-6 md:mb-10 leading-relaxed px-4">
              Partner with experienced auditors who understand regulatory requirements and can provide the assurance your stakeholders need.
            </p>

            {/* Buttons - Responsive */}
            <div className="flex flex-col xs:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0">
              <Link href="/booking" className="w-full xs:w-auto">
                <button className="w-full xs:w-auto px-6 sm:px-8 md:px-10 py-3.5 sm:py-4 md:py-5 bg-blue-600 text-white font-bold rounded-lg sm:rounded-xl hover:bg-blue-700 transition-all shadow-lg active:scale-95 text-sm sm:text-base md:text-lg whitespace-nowrap">
                  Book Audit Consultation
                </button>
              </Link>
              <Link href="/contact" className="w-full xs:w-auto">
                <button className="w-full xs:w-auto px-6 sm:px-8 md:px-10 py-3.5 sm:py-4 md:py-5 bg-white text-gray-900 font-bold rounded-lg sm:rounded-xl hover:bg-gray-100 transition-all active:scale-95 text-sm sm:text-base md:text-lg whitespace-nowrap">
                  Contact Audit Team
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AuditingPage;