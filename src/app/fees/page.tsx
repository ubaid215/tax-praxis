"use client";
import React, { useState, Suspense } from "react";
import { serviceCategories, servicePackages, payrollRates, adhocRates } from "@/constants";
import LoadingSkeleton from "@/components/common/ServicesFeesSkeleton";

const ServiceFeesPage = () => {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <Suspense fallback={<LoadingSkeleton />}>
      <main className="w-full bg-white">
        {/* Hero Section */}
        <section className="w-full bg-soft pt-24 pb-16 md:pt-32 md:pb-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 rounded-full bg-white border border-gray-200 shadow-md">
                <span className="text-xs font-semibold text-blue-600 uppercase tracking-widest">
                  Transparent Pricing
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 leading-[1.1] tracking-tight mb-6 md:mb-8">
                Service Fees &{" "}
                <span className="italic font-serif text-blue-600 font-normal">
                  Pricing
                </span>
              </h1>

              <p className="text-base md:text-lg text-gray-500 leading-relaxed max-w-2xl mx-auto mb-8">
                Clear, honest pricing with no hidden fees. Choose the services that fit your needs and budget.
              </p>

              {/* Quick Contact CTA */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-primary text-white font-semibold rounded-xl transition-all shadow-lg active:scale-95 text-sm md:text-base">
                  Get Custom Quote
                </button>
                <button className="px-8 py-4 bg-white hover:bg-gray-900 hover:text-white text-gray-900 font-semibold rounded-xl border border-gray-200 hover:border-gray-900 transition-all active:scale-95 text-sm md:text-base">
                  Schedule Consultation
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Filter Tabs */}
        <section className="w-full bg-white border-b border-gray-200 z-40 px-4 backdrop-blur-sm bg-white/95">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex gap-2 overflow-x-auto py-4 scrollbar-hide">
              <button
                onClick={() => setActiveTab("all")}
                className={`px-5 py-2.5 rounded-xl font-medium text-sm whitespace-nowrap transition-all ${
                  activeTab === "all"
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                All Services
              </button>
              {serviceCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveTab(category.id)}
                  className={`px-5 py-2.5 rounded-xl font-medium text-sm whitespace-nowrap transition-all ${
                    activeTab === category.id
                      ? "bg-blue-600 text-white shadow-lg"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {category.title}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Service Categories */}
        <section className="w-full py-16 md:py-20 lg:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-6xl mx-auto space-y-12 md:space-y-16">
              {serviceCategories
                .filter((cat) => activeTab === "all" || activeTab === cat.id)
                .map((category, index) => {
                  const IconComponent = category.icon;
                  
                  return (
                    <div
                      key={category.id}
                      id={category.id}
                      className="bg-soft rounded-2xl p-8 md:p-10 lg:p-12 shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300"
                    >
                      {/* Category Header */}
                      <div className="flex items-center gap-4 md:gap-6 mb-8 md:mb-10">
                        <div
                          className={`w-12 h-12 md:w-14 md:h-14 rounded-xl ${category.color} flex items-center justify-center shadow-lg flex-shrink-0`}
                        >
                          <IconComponent className="w-6 h-6 md:w-7 md:h-7 text-white" />
                        </div>
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900">
                          {category.title}
                        </h2>
                      </div>

                      {/* Service Items */}
                      <div className="space-y-4">
                        {category.items.map((item, itemIndex) => (
                          <div
                            key={itemIndex}
                            className="bg-white p-6 md:p-8 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all duration-300 group"
                          >
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                              <div className="flex-1">
                                <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                                  {item.service}
                                </h3>
                                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                                  {item.description}
                                </p>
                              </div>
                              <div className="flex-shrink-0">
                                <div className="inline-flex items-baseline gap-1 px-5 py-2.5 bg-blue-50 rounded-xl border border-blue-100 group-hover:bg-blue-600 group-hover:text-white transition-all">
                                  <span className="text-2xl md:text-3xl font-bold">
                                    {item.fee}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </section>

        {/* Bookkeeping Packages */}
        <section className="w-full py-16 md:py-20 lg:py-24 bg-[#1c1b1b] relative overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-6xl mx-auto">
              {/* Section Header */}
              <div className="text-center mb-12 md:mb-16">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-4 md:mb-6">
                  Bookkeeping{" "}
                  <span className="italic font-serif text-blue-400 font-normal">
                    Packages
                  </span>
                </h2>
                <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
                  Flexible packages to keep your accounts up-to-date and compliant
                </p>
              </div>

              {/* Package Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                {servicePackages.map((pkg, index) => (
                  <div
                    key={index}
                    className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/15 hover:border-white/30 transition-all duration-300 hover:-translate-y-2 group"
                  >
                    <div className="text-center">
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                        {pkg.period}
                      </h3>
                      <p className="text-sm text-gray-300 mb-2">
                        {pkg.description}
                      </p>
                      <p className="text-xs text-gray-400 mb-6">
                        {pkg.cap}
                      </p>
                      
                      <div className="mb-6">
                        <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                          {pkg.fee}
                        </div>
                        <div className="text-sm text-gray-400 mt-2">
                          per {pkg.period.toLowerCase()}
                        </div>
                      </div>

                      <button className="w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all shadow-lg group-hover:shadow-blue-500/50 active:scale-95 text-sm">
                        Choose Plan
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-center text-sm text-gray-400 mt-8">
                All packages include comprehensive account reconciliation and reporting
              </p>
            </div>
          </div>
        </section>

        {/* Payroll Rates */}
        <section className="w-full py-16 md:py-20 lg:py-24 bg-soft">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-5xl mx-auto">
              {/* Section Header */}
              <div className="text-center mb-12 md:mb-16">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 rounded-full bg-white border border-gray-200 shadow-sm">
                  <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">
                    Payroll Services
                  </span>
                </div>

                <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-4 md:mb-6">
                  Payroll Processing{" "}
                  <span className="italic font-serif text-blue-600 font-normal">
                    Rates
                  </span>
                </h2>
                <p className="text-base md:text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
                  Scalable payroll solutions based on your team size and payment frequency
                </p>
              </div>

              {/* Payroll Table */}
              <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-gradient-to-r from-blue-600 to-blue-700">
                        <th className="px-6 py-4 text-left text-sm font-semibold text-white uppercase tracking-wider">
                          Employees
                        </th>
                        <th className="px-6 py-4 text-right text-sm font-semibold text-white uppercase tracking-wider">
                          Weekly
                        </th>
                        <th className="px-6 py-4 text-right text-sm font-semibold text-white uppercase tracking-wider">
                          Fortnightly
                        </th>
                        <th className="px-6 py-4 text-right text-sm font-semibold text-white uppercase tracking-wider">
                          Monthly
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {payrollRates.map((rate, index) => (
                        <tr
                          key={index}
                          className="hover:bg-blue-50 transition-colors"
                        >
                          <td className="px-6 py-5 text-sm md:text-base font-semibold text-gray-900">
                            {rate.employees} {rate.employees === "1" ? "employee" : "employees"}
                          </td>
                          <td className="px-6 py-5 text-right text-base md:text-lg font-bold text-blue-600">
                            {rate.weekly}
                          </td>
                          <td className="px-6 py-5 text-right text-base md:text-lg font-bold text-blue-600">
                            {rate.fortnightly}
                          </td>
                          <td className="px-6 py-5 text-right text-base md:text-lg font-bold text-blue-600">
                            {rate.monthly}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
                  <p className="text-xs md:text-sm text-gray-600 text-center">
                    Includes payroll processing, payslips, and STP reporting. Additional fees may apply for complex payroll requirements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ad-hoc Rates */}
        <section className="w-full py-16 md:py-20 lg:py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              {/* Section Header */}
              <div className="text-center mb-12 md:mb-16">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-4 md:mb-6">
                  Ad-hoc{" "}
                  <span className="italic font-serif text-blue-600 font-normal">
                    Consulting Rates
                  </span>
                </h2>
                <p className="text-base md:text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
                  Flexible hourly, daily, and weekly rates for custom projects and consultations
                </p>
              </div>

              {/* Ad-hoc Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                {adhocRates.map((rate, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-soft to-white border-2 border-gray-200 rounded-2xl p-8 text-center hover:border-blue-400 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
                  >
                    <div className="mb-4">
                      <div className="w-14 h-14 mx-auto rounded-xl bg-blue-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <svg
                          className="w-7 h-7 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">
                        {rate.service}
                      </h3>
                    </div>
                    
                    <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-4">
                      {rate.fee}
                    </div>

                    <button className="w-full px-6 py-3 bg-gray-900 text-white font-semibold rounded-xl hover:border-2 hover:bg-white hover:text-black transition-all shadow-lg active:scale-95 text-sm">
                      Get Started
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="w-full py-16 md:py-20 lg:py-24 bg-soft">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto bg-gradient-primary rounded-2xl p-10 md:p-16 text-center shadow-2xl">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
                Not sure which service you need?
              </h2>
              <p className="text-base md:text-lg text-blue-100 mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed">
                Schedule a free consultation and we&apos;ll help you find the perfect solution for your tax and accounting needs.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-10 py-5 bg-white text-blue-600  font-bold rounded-xl hover:bg-gray-200 transition-all shadow-xl active:scale-95 text-base md:text-lg">
                  Book Free Consultation
                </button>
                <button className="px-10 py-5 bg-gray-900 hover:bg-white  text-white hover:text-black font-bold rounded-xl border-2 border-white/30 transition-all active:scale-95 text-base md:text-lg">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Suspense>
  );
};

export default ServiceFeesPage;