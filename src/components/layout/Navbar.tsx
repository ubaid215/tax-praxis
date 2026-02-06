"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { navLinks } from "@/constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useLayoutEffect, useState, useEffect } from "react";


gsap.registerPlugin(ScrollTrigger);

const MenuIcon = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <div className="w-6 h-5 flex flex-col justify-between cursor-pointer">
      <span
        className={`w-full h-0.5 bg-current transition-all duration-300 ease-in-out ${
          isOpen ? "rotate-45 translate-y-2" : "rotate-0"
        }`}
      />
      <span
        className={`w-full h-0.5 bg-current transition-all duration-300 ease-in-out ${
          isOpen ? "opacity-0" : "opacity-100"
        }`}
      />
      <span
        className={`w-full h-0.5 bg-current transition-all duration-300 ease-in-out ${
          isOpen ? "-rotate-45 -translate-y-2" : "rotate-0"
        }`}
      />
    </div>
  );
};

const Navbar = () => {
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);
  const navContentRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isScrolled, setIsScrolled] = useState(false);

  // stagger animation is starting from here
  useGSAP(() => {
    gsap.fromTo(
      ".nav-logo",
      { opacity: 0, y: -20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
      },
    );

    gsap.fromTo(
      ".nav-link",
      { opacity: 0, y: -70 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: "power2.out",
        delay: 0.1,
      },
    );

    gsap.fromTo(
      ".nav-button",
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        ease: "back.out(1.7)",
        delay: 0.5,
      },
    );
  });

  // Mobile menu animation
  useLayoutEffect(() => {
    if (isMobileMenuOpen && mobileMenuRef.current) {
      gsap.fromTo(
        mobileMenuRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" },
      );
      gsap.fromTo(
        ".mobile-nav-link",
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.4,
          stagger: 0.08,
          ease: "power2.out",
          delay: 0.2,
        },
      );
    }
  }, [isMobileMenuOpen]);

  // Scroll-triggered shrink animation with logo/text toggle
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Create timeline for navbar shrink
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: document.documentElement,
          start: "top top-=50",
          end: "top top-=150",
          scrub: 0.3,
          onUpdate: (self) => {
            setIsScrolled(self.progress > 0.5);
          },
        },
      });

      // Animate header
      tl.to(
        headerRef.current,
        {
          paddingTop: "0.5rem",
          paddingBottom: "0.5rem",
          duration: 0.3,
          ease: "power1.out",
        },
        0,
      );

      // Animate nav container
      tl.to(
        navContentRef.current,
        {
          maxWidth: "960px",
          borderRadius: "2rem",
          boxShadow: "var(--shadow-md)",
          backgroundColor: "rgba(255, 255, 255, 0.85)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(5px)",
          marginTop: 0,
          marginBottom: 0,
          paddingLeft: "2rem",
          paddingRight: "2rem",
          paddingTop: "0.5rem",
          paddingBottom: "0.5rem",
          duration: 0.3,
          ease: "power1.Out",
        },
        0,
      );

      // Animate text fade out
      tl.to(
        textRef.current,
        {
          opacity: 0,
          scale: 0.95,
          duration: 0.2,
          ease: "power1.out",
        },
        0,
      );

      // Animate logo fade in
      tl.to(
        logoRef.current,
        {
          opacity: 1,
          scale: 1,
          duration: 0.2,
          ease: "power1.out",
        },
        0.1,
      );
    }, headerRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useLayoutEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header
        ref={headerRef}
        className="sticky top-0 z-50 transition-all duration-500"
      >
        <nav
          ref={navContentRef}
          className="mx-auto flex w-full items-center justify-between gap-4 bg-soft px-4 py-4 md:px-6 transition-all duration-300"
          style={{
            maxWidth: "100%",
            borderRadius: "0",
            backgroundColor: "var(--color-bg-soft)",
          }}
        >
          <Link href="/" className="nav-logo relative flex items-center gap-3">
            {/* Logo Image */}
            <div
              ref={logoRef}
              className="relative w-10 h-10 md:w-12 md:h-12"
              style={{
                opacity: 0,
                transform: "scale(0.9)",
              }}
            >
              <Image
                src="/logo.png"
                alt="Tax Praxis Logo"
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Text */}
            <h3
              ref={textRef}
              className="font-bold text-lg md:text-xl transition-all duration-300"
              style={{
                color: "var(--color-blue-900)",
                opacity: 1,
              }}
            >
              TAX PRAXIS
            </h3>
          </Link>

          {/* Desktop Navigation Links */}
          <ul className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <li key={link.id} className="link link:hover nav-link">
                  <Link
                    href={link.href}
                    className={`nav-anchor relative ${isActive ? "active" : ""}`}
                  >
                    <span className="label">{link.label}</span>
                    <span className="line line-1" />
                    <span className="line line-2" />
                  </Link>
                </li>
              );
            })}
            <Link href={"/booking"} className="nav-button">
              <button className="btn-primary text-sm font-medium px-5 py-2.5 rounded-lg transition-all">
                BOOK MEETING
              </button>
            </Link>
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 hover:text-primary transition-colors"
            aria-label="Toggle menu"
            style={{ color: "var(--color-text-secondary)" }}
          >
            <MenuIcon isOpen={isMobileMenuOpen} />
          </button>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
          onClick={closeMobileMenu}
        />
      )}

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          ref={mobileMenuRef}
          className="fixed top-22 left-4 right-4 z-40 card overflow-hidden lg:hidden"
          style={{
            backgroundColor: "var(--color-bg-card)",
            border: "1px solid var(--color-border-soft)",
            boxShadow: "var(--shadow-lg)",
          }}
        >
          <nav className="p-6">
            <ul className="space-y-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;

                return (
                  <li key={link.id} className="mobile-nav-link">
                    <Link
                      href={link.href}
                      onClick={closeMobileMenu}
                      className={`block px-4 py-3 rounded-lg text-base font-medium transition-all ${
                        isActive
                          ? "bg-blue-50"
                          : "text-neutral-700 hover:bg-neutral-50 hover:text-primary"
                      }`}
                      style={{
                        color: isActive
                          ? "var(--color-blue-600)"
                          : "var(--color-text-secondary)",
                        backgroundColor: isActive
                          ? "var(--color-blue-100)"
                          : "transparent",
                      }}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
              <li className="mobile-nav-link pt-2">
                <Link
                  href={"/booking"}
                  onClick={closeMobileMenu}
                  className="btn-primary block w-full text-center text-base font-medium px-5 py-3 rounded-lg transition-all"
                >
                  BOOK MEETING
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </>
  );
};

export default Navbar;