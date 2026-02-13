"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const bentoGridRef = useRef<HTMLDivElement>(null);
  const partnersRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Split headline into lines for reveal animation
      const headlineLines = headlineRef.current?.querySelectorAll('.line');
      if (headlineLines) {
        gsap.set(headlineLines, { opacity: 0, y: 40 });
      }

      // Initial state - hide everything except the parent containers
      gsap.set([badgeRef.current, descriptionRef.current], {
        opacity: 0,
        y: 30
      });

      // Set buttons children hidden, not the container
      const buttons = buttonsRef.current?.children;
      if (buttons) {
        gsap.set(buttons, { opacity: 0, y: 30 });
      }

      // Bento grid items
      const bentoItems = bentoGridRef.current?.querySelectorAll('.bento-item');
      if (bentoItems) {
        gsap.set(bentoItems, { opacity: 0, scale: 0.9, y: 40 });
      }

      // Partner logos
      const partnerLogos = partnersRef.current?.querySelectorAll('.partner-logo');
      if (partnerLogos) {
        gsap.set(partnerLogos, { opacity: 0, y: 20 });
      }

      // Create master timeline
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // 1. Badge entrance
      tl.to(badgeRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "back.out(1.4)"
      });

      // 2. Headline reveal - line by line
      if (headlineLines) {
        tl.to(headlineLines, {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out"
        }, "-=0.4");
      }

      // 3. Description fade in
      tl.to(descriptionRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8
      }, "-=0.5");

      // 4. Buttons with slight stagger
      if (buttons) {
        tl.to(buttons, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "back.out(1.2)"
        }, "-=0.4");
      }

      // 5. Bento grid stagger animation
      if (bentoItems) {
        tl.to(bentoItems, {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.9,
          stagger: {
            amount: 0.6,
            from: "start",
            ease: "power2.out"
          }
        }, "-=0.6");
      }

      // 6. Image mask reveal animation
      const imageMask = bentoGridRef.current?.querySelector('.image-mask');
      if (imageMask) {
        tl.to(imageMask, {
          scaleX: 0,
          duration: 1.2,
          ease: "power3.inOut"
        }, "-=1.2");
      }

      // Scroll-triggered partner logos animation
      if (partnerLogos) {
        gsap.to(partnerLogos, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: partnersRef.current,
            start: "top 85%",
            end: "top 60%",
            toggleActions: "play none none reverse"
          }
        });
      }

      // Hover animations for buttons
      const buttonElements = buttonsRef.current?.querySelectorAll('button');
      buttonElements?.forEach((button) => {
        button.addEventListener('mouseenter', () => {
          gsap.to(button, {
            scale: 1.05,
            duration: 0.3,
            ease: "power2.out"
          });
        });

        button.addEventListener('mouseleave', () => {
          gsap.to(button, {
            scale: 1,
            duration: 0.3,
            ease: "power2.out"
          });
        });
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef}
      className="w-full bg-soft pt-8 pb-12 md:pt-12 md:pb-24 overflow-x-hidden"
    >
      <div className="container mx-auto px-4 sm:px-5 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          {/* LEFT COLUMN - Content */}
          <div className="w-full lg:w-1/2 text-left">
            {/* Badge */}
            <div 
              ref={badgeRef}
              className="inline-flex items-center gap-2 px-3 py-1.5 mb-4 sm:mb-5 md:mb-6 rounded-full bg-white border border-gray-200 shadow-sm"
            >
              <span className="text-[10px] sm:text-xs md:text-xs font-semibold text-gray-400 uppercase tracking-widest">
                ✨ Trusted by modern businesses & individuals
              </span>
            </div>

            {/* Headline with Mixed typography */}
            <h1 
              ref={headlineRef}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-gray-900 leading-tight lg:leading-[1.1] tracking-tight mb-4 sm:mb-5 md:mb-6 lg:mb-8"
            >
              <span className="line block">Welcome to the</span>
              <span className="line block italic font-serif text-blue-600 font-normal">
                Tax Praxis
              </span>
            </h1>

            <p 
              ref={descriptionRef}
              className="max-w-md text-sm sm:text-base md:text-lg text-gray-500 mb-6 sm:mb-7 md:mb-8 lg:mb-10 leading-relaxed"
            >
              Step into our financial oasis, where complex tax strategies bloom
              into clarity, and every calculation is a step toward endless
              possibilities.
            </p>

            {/* Primary Actions - Stack on mobile */}
            <div ref={buttonsRef} className="flex flex-col xs:flex-row gap-3 sm:gap-4">
              <Link href={"/personal"} className="w-full xs:w-auto">
                <button className="w-full xs:w-auto px-6 sm:px-7 md:px-8 py-3 sm:py-3.5 md:py-4 bg-[#111827] text-white font-semibold rounded-lg sm:rounded-xl hover:bg-black transition-all shadow-lg active:scale-95 text-sm sm:text-base text-center whitespace-nowrap">
                  Personal
                </button>
              </Link>
              <Link href={'/business'} className="w-full xs:w-auto">
                <button className="w-full xs:w-auto px-6 sm:px-7 md:px-8 py-3 sm:py-3.5 md:py-4 bg-white text-gray-900 font-semibold rounded-lg sm:rounded-xl border border-gray-200 hover:border-gray-900 transition-all active:scale-95 text-sm sm:text-base text-center whitespace-nowrap">
                  Business
                </button>
              </Link>
            </div>
          </div>

          {/* RIGHT COLUMN: Bento Grid with Staggered Layout */}
          <div ref={bentoGridRef} className="w-full lg:w-1/2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-5">
              {/* Image with mask reveal */}
              <div className="bento-item image-container relative aspect-square sm:aspect-auto sm:h-[240px] md:h-[280px] lg:h-[300px] xl:h-[320px] rounded-xl sm:rounded-2xl overflow-hidden shadow-md sm:translate-y-0">
                <div className="relative w-full h-full">
                  <Image
                    src="/tax-working.webp"
                    alt="Tax Preparation"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                {/* Mask overlay */}
                <div className="image-mask absolute inset-0 bg-soft z-10 origin-right"></div>
              </div>

              {/* Stats Card 1 */}
              <div className="bento-item bg-[#F3F5F9] p-5 sm:p-6 md:p-8 lg:p-10 rounded-xl sm:rounded-2xl shadow-md border border-gray-50 flex flex-col justify-center min-h-[180px] sm:min-h-[200px] md:min-h-[220px] lg:min-h-[240px] sm:translate-y-0 md:translate-y-3 lg:translate-y-4">
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-medium text-gray-900 mb-1 sm:mb-2">
                  $14B
                </h3>
                <p className="text-[10px] sm:text-xs md:text-sm font-medium text-gray-400 uppercase tracking-wider">
                  Funds & Strategies
                </p>
              </div>

              {/* Stats Card 2 */}
              <div className="bento-item bg-[#F3F5F9] p-5 sm:p-6 md:p-8 lg:p-10 rounded-xl sm:rounded-2xl shadow-md border border-gray-50 flex flex-col justify-center min-h-[180px] sm:min-h-[200px] md:min-h-[220px] lg:min-h-[240px] sm:translate-y-0 md:-translate-y-2 lg:-translate-y-3">
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-medium text-gray-900 mb-1 sm:mb-2">
                  27k+
                </h3>
                <p className="text-[10px] sm:text-xs md:text-sm font-medium text-gray-400 uppercase tracking-wider">
                  Tax Savings Found
                </p>
              </div>

              {/* Avatars Card */}
              <div className="bento-item bg-[#F3EFEA] p-5 sm:p-6 md:p-8 lg:p-10 rounded-xl sm:rounded-2xl shadow-md flex flex-col justify-center min-h-[180px] sm:min-h-[200px] md:min-h-[240px] lg:min-h-[260px] sm:translate-y-0 md:translate-y-1 lg:translate-y-2">
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-medium text-gray-900 mb-1 sm:mb-2">
                  80k
                </h3>
                <p className="text-[10px] sm:text-xs md:text-sm font-medium text-gray-600 uppercase tracking-wider mb-4 sm:mb-5 md:mb-6">
                  Active Clients
                </p>

                {/* Avatar Stack - Responsive sizing */}
                <div className="flex -space-x-2 sm:-space-x-2.5 md:-space-x-3">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-10 rounded-full border-2 border-[#F3EFEA] relative overflow-hidden bg-gray-200"
                    >
                      <Image
                        src={`/avatars/user-${i}.webp`}
                        alt={`Client ${i}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 24px, (max-width: 768px) 28px, 32px"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Partner Logos - Responsive */}
        <div 
          ref={partnersRef}
          className="mt-12 sm:mt-16 md:mt-20 lg:mt-24 xl:mt-32 py-6 sm:py-8 md:py-10 px-3 sm:px-4 md:px-0 border-y bg-gray-200 rounded-xl sm:rounded-2xl border-gray-100"
        >
          <div className="grid grid-cols-2 sm:grid-cols-4 place-items-center gap-4 sm:gap-5 md:gap-6 opacity-90 grayscale">
            <div className="partner-logo w-full flex justify-center">
              <Image
                src="/partners/logo_ntaa.webp"
                alt="NTAA"
                width={200}
                height={40}
                className="object-contain w-auto h-6 sm:h-7 md:h-8 lg:h-10"
              />
            </div>

            <div className="partner-logo w-full flex justify-center">
              <Image
                src="/partners/logo_ntaa-copy.webp"
                alt="NTAA Copy"
                width={200}
                height={40}
                className="object-contain w-auto h-6 sm:h-7 md:h-8 lg:h-10"
              />
            </div>

            <div className="partner-logo w-full flex justify-center">
              <Image
                src="/partners/smsf.webp"
                alt="SMSF"
                width={110}
                height={40}
                className="object-contain w-auto h-6 sm:h-7 md:h-8 lg:h-10"
              />
            </div>

            <div className="partner-logo w-full flex justify-center">
              <Image
                src="/partners/Tax-institute.webp"
                alt="Tax Institute"
                width={200}
                height={40}
                className="object-contain w-auto h-6 sm:h-7 md:h-8 lg:h-10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;