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
                  Professional{" "}
                  <span className="italic font-serif text-blue-600 font-normal">
                    Auditing Services
                  </span>
                </h1>

                <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
                  Independent, thorough auditing services that ensure compliance while identifying opportunities for process improvement and risk mitigation. Minimize distraction from compliance requirements.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/booking">
                    <button className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all shadow-lg active:scale-95 text-sm md:text-base">
                      Schedule Audit
                    </button>
                  </Link>
                  <Link href="/fees">
                    <button className="px-8 py-4 bg-white text-gray-900 font-semibold rounded-xl border border-gray-200 hover:border-gray-900 transition-all active:scale-95 text-sm md:text-base">
                      View Audit Packages
                    </button>
                  </Link>
                </div>
              </div>

              {/* Right - Image */}
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
                  <Image
                    src="/services/auditing-hero.webp"
                    alt="Professional Auditing Services"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                {/* Floating Stat Badge */}
                <div className="absolute -bottom-6 -left-6 bg-blue-600 text-white p-6 md:p-8 rounded-2xl shadow-2xl">
                  <div className="text-4xl md:text-5xl font-black mb-2">ASIC</div>
                  <div className="text-sm uppercase tracking-wider opacity-90">
                    Registered Auditor
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
                  Audit Services
                </span>
              </h2>
              <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                Independent auditing services designed to meet regulatory requirements and improve business processes
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {auditServices.map((service, index) => {
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
                    Our Approach
                  </span>
                </div>

                <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-6 leading-[1.1]">
                  Thorough Audit{" "}
                  <span className="italic font-serif text-blue-600 font-normal">
                    Methodology
                  </span>
                </h2>

                <p className="text-base md:text-lg text-gray-600 mb-8 leading-relaxed">
                  Our systematic approach ensures comprehensive coverage while minimizing disruption to your operations.
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
                    src="/services/audit-process.webp"
                    alt="Audit Process and Methodology"
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
                  Audit Services
                </span>
              </h2>
              <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                Professional auditing that provides assurance while adding value to your business
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
                Our Audit{" "}
                <span className="italic font-serif text-blue-600 font-normal">
                  Process
                </span>
              </h2>
              <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                A structured, transparent approach to delivering comprehensive audit services
              </p>
            </div>

            {/* Steps */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
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
                  More Than{" "}
                  <span className="italic font-serif text-blue-600 font-normal">
                    Compliance
                  </span>
                </h2>

                <p className="text-base md:text-lg text-gray-600 mb-8 leading-relaxed">
                  Our audits provide strategic value by identifying opportunities for improvement while ensuring regulatory compliance.
                </p>

                <div className="space-y-6">
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
                    src="/services/compliance-assurance.webp"
                    alt="Compliance and Business Assurance"
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
                  Ensure Your{" "}
                  <span className="italic font-serif text-blue-600 font-normal">
                    Compliance Confidence
                  </span>
                </h2>
                <p className="text-base md:text-lg text-gray-600">
                  Schedule a consultation to discuss your audit requirements and how we can provide independent assurance for your business.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                <div className="text-center p-6 bg-soft rounded-xl border border-gray-200">
                  <div className="text-4xl font-bold text-gray-900 mb-2">ASIC</div>
                  <div className="text-sm text-gray-600 font-medium">
                    Registered Auditor
                  </div>
                </div>

                <div className="text-center p-6 bg-blue-600 rounded-xl shadow-lg">
                  <div className="text-4xl font-bold text-white mb-2">100%</div>
                  <div className="text-sm text-white font-medium">
                    Compliance Rate
                  </div>
                </div>

                <div className="text-center p-6 bg-soft rounded-xl border border-gray-200">
                  <div className="text-4xl font-bold text-gray-900 mb-2">24/7</div>
                  <div className="text-sm text-gray-600 font-medium">
                    Portal Access
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/booking">
                  <button className="px-10 py-5 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all shadow-lg active:scale-95 text-base md:text-lg">
                    Schedule Audit Consultation
                  </button>
                </Link>
                <Link href="/fees">
                  <button className="px-10 py-5 bg-white text-gray-900 font-bold rounded-xl border-2 border-gray-200 hover:border-gray-900 transition-all active:scale-95 text-base md:text-lg">
                    View Audit Packages
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
              Independent Assurance for{" "}
              <span className="italic font-serif text-blue-400 font-normal">
                Business Success
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed">
              Partner with experienced auditors who understand regulatory requirements and can provide the assurance your stakeholders need.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/booking">
                <button className="px-10 py-5 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all shadow-lg active:scale-95 text-base md:text-lg">
                  Book Audit Consultation
                </button>
              </Link>
              <Link href="/contact">
                <button className="px-10 py-5 bg-white text-gray-900 font-bold rounded-xl hover:bg-gray-100 transition-all active:scale-95 text-base md:text-lg">
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