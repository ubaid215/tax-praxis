"use client";
import React from "react";
import Link from "next/link";
import { FOOTER_LINKS, SOCIAL_LINKS, CONTACT_INFO } from "@/constants";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-gray-900 text-gray-300 rounded-t-3xl sm:rounded-t-4xl overflow-hidden">
      {/* Main Footer Content - Mobile First */}
      <div className="container mx-auto px-4 sm:px-5 md:px-6 pt-12 sm:pt-14 md:pt-16 pb-6 sm:pb-7 md:pb-8">
        {/* Grid - Mobile: 2 columns, Tablet: 2 columns, Desktop: 6 columns */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-6 gap-5 sm:gap-6 md:gap-7 lg:gap-8 mb-8 sm:mb-10 md:mb-12">
          
          {/* Brand Column - Spans full width on mobile, 2 cols on tablet, 2 on desktop */}
          <div className="col-span-2 sm:col-span-2 lg:col-span-2 mb-2 sm:mb-3 lg:mb-0">
            <Link href="/" className="inline-block mb-4 sm:mb-5 md:mb-6">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white">
                Tax{" "}
                <span className="italic font-serif text-blue-400 font-normal">
                  Praxis
                </span>
              </h3>
            </Link>

            <p className="text-xs sm:text-sm md:text-base text-gray-400 leading-relaxed mb-4 sm:mb-5 md:mb-6 max-w-sm">
              Transforming tax complexity into financial clarity. Your trusted
              partner for strategic tax planning and optimization.
            </p>

            {/* Contact Info - Stack on mobile */}
            <div className="space-y-2 sm:space-y-2.5 md:space-y-3 mb-4 sm:mb-5 md:mb-6">
              <a
                href={CONTACT_INFO.phone.href}
                className="flex items-center gap-2 sm:gap-2.5 md:gap-3 text-xs sm:text-sm text-gray-400 hover:text-blue-400 transition-colors group"
              >
                <div className="w-7 h-7 sm:w-7.5 sm:h-7.5 md:w-8 md:h-8 rounded-lg bg-gray-800 flex items-center justify-center group-hover:bg-blue-600/20 transition-colors">
                  <CONTACT_INFO.phone.icon className="w-3.5 h-3.5 sm:w-3.75 sm:h-3.75 md:w-4 md:h-4" />
                </div>
                <span className="truncate">{CONTACT_INFO.phone.label}</span>
              </a>

              <a
                href={CONTACT_INFO.email.href}
                className="flex items-center gap-2 sm:gap-2.5 md:gap-3 text-xs sm:text-sm text-gray-400 hover:text-blue-400 transition-colors group"
              >
                <div className="w-7 h-7 sm:w-7.5 sm:h-7.5 md:w-8 md:h-8 rounded-lg bg-gray-800 flex items-center justify-center group-hover:bg-blue-600/20 transition-colors">
                  <CONTACT_INFO.email.icon className="w-3.5 h-3.5 sm:w-3.75 sm:h-3.75 md:w-4 md:h-4" />
                </div>
                <span className="truncate">{CONTACT_INFO.email.label}</span>
              </a>
            </div>

            {/* Social Links - Horizontal scroll on mobile if needed */}
            <div className="flex flex-wrap gap-2 sm:gap-2.5 md:gap-3">
              {SOCIAL_LINKS.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-lg bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-110"
                    aria-label={social.name}
                  >
                    <Icon className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Services Column */}
          <div className="col-span-1">
            <h4 className="text-white font-semibold text-xs sm:text-sm uppercase tracking-wider mb-3 sm:mb-3.5 md:mb-4">
              Services
            </h4>
            <ul className="space-y-2 sm:space-y-2.5 md:space-y-3">
              {FOOTER_LINKS.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-xs sm:text-sm text-gray-400 hover:text-blue-400 transition-colors inline-flex items-center group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div className="col-span-1">
            <h4 className="text-white font-semibold text-xs sm:text-sm uppercase tracking-wider mb-3 sm:mb-3.5 md:mb-4">
              Company
            </h4>
            <ul className="space-y-2 sm:space-y-2.5 md:space-y-3">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-xs sm:text-sm text-gray-400 hover:text-blue-400 transition-colors inline-flex items-center group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Column - New row on mobile, continues grid on larger */}
          <div className="col-span-1 mt-2 sm:mt-3 lg:mt-0">
            <h4 className="text-white font-semibold text-xs sm:text-sm uppercase tracking-wider mb-3 sm:mb-3.5 md:mb-4">
              Resources
            </h4>
            <ul className="space-y-2 sm:space-y-2.5 md:space-y-3">
              {FOOTER_LINKS.resources.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-xs sm:text-sm text-gray-400 hover:text-blue-400 transition-colors inline-flex items-center group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Column */}
          <div className="col-span-1 mt-2 sm:mt-3 lg:mt-0">
            <h4 className="text-white font-semibold text-xs sm:text-sm uppercase tracking-wider mb-3 sm:mb-3.5 md:mb-4">
              Legal
            </h4>
            <ul className="space-y-2 sm:space-y-2.5 md:space-y-3">
              {FOOTER_LINKS.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-xs sm:text-sm text-gray-400 hover:text-blue-400 transition-colors inline-flex items-center group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Section - Mobile First */}
        <div className="border-t border-gray-800 pt-6 sm:pt-8 md:pt-10 pb-6 sm:pb-7 md:pb-8">
          <div className="max-w-2xl">
            <h4 className="text-white font-semibold text-base sm:text-lg md:text-xl mb-2 sm:mb-2.5 md:mb-3">
              Stay Updated with Tax Insights
            </h4>
            <p className="text-xs sm:text-sm text-gray-400 mb-4 sm:mb-4.5 md:mb-5">
              Get monthly tax tips, strategy updates, and exclusive resources
              delivered to your inbox.
            </p>

            {/* Form - Stack on mobile, row on tablet+ */}
            <form className="flex flex-col xs:flex-row gap-2 sm:gap-2.5 md:gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 w-full xs:w-auto px-3 sm:px-3.5 md:px-4 py-2.5 sm:py-2.75 md:py-3 bg-gray-800 border border-gray-700 rounded-lg sm:rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all text-xs sm:text-sm"
                required
              />
              <button
                type="submit"
                className="w-full xs:w-auto px-4 sm:px-5 md:px-6 py-2.5 sm:py-2.75 md:py-3 bg-blue-600 text-white font-semibold rounded-lg sm:rounded-xl hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-600/50 active:scale-95 text-xs sm:text-sm whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar - Mobile First */}
        <div className="border-t border-gray-800 pt-5 sm:pt-6 md:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
            <p className="text-xs sm:text-sm text-gray-500 text-center sm:text-left order-2 sm:order-1">
              © {currentYear} Tax Praxis. All rights reserved.
            </p>

            {/* Legal Links - Horizontal on mobile */}
            <div className="flex flex-wrap justify-center gap-4 sm:gap-5 md:gap-6 text-[10px] sm:text-xs text-gray-500 order-1 sm:order-2">
              <Link
                href="/privacy"
                className="hover:text-blue-400 transition-colors"
              >
                Privacy
              </Link>
              <Link
                href="/terms"
                className="hover:text-blue-400 transition-colors"
              >
                Terms
              </Link>
              <Link
                href="/cookies"
                className="hover:text-blue-400 transition-colors"
              >
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;