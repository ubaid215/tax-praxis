"use client";
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const OurApproach = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const ctaSectionRef = useRef<HTMLDivElement>(null);

  const approaches = [
    {
      number: "01",
      title: "Deep Discovery",
      description:
        "We start by understanding your complete financial picture—not just your numbers, but your goals, challenges, and vision for the future.",
      color: "bg-blue-600",
      textColor: "text-blue-600",
    },
    {
      number: "02",
      title: "Strategic Analysis",
      description:
        "Our team analyzes every transaction, deduction, and opportunity using advanced tools and decades of combined expertise to identify optimization potential.",
      color: "bg-gray-900",
      textColor: "text-gray-900",
    },
    {
      number: "03",
      title: "Custom Solutions",
      description:
        "No cookie-cutter approaches. We design tax strategies tailored specifically to your situation, industry, and objectives—strategies that actually work.",
      color: "bg-blue-600",
      textColor: "text-blue-600",
    },
    {
      number: "04",
      title: "Proactive Execution",
      description:
        "We implement your strategy with precision and monitor it year-round, making adjustments as tax laws change and your business evolves.",
      color: "bg-gray-900",
      textColor: "text-gray-900",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states with null checks
      if (badgeRef.current) {
        gsap.set(badgeRef.current, { opacity: 0, y: 20 });
      }
      
      const headingParts = headingRef.current?.querySelectorAll('.heading-part');
      if (headingParts && headingParts.length > 0) {
        gsap.set(headingParts, { opacity: 0, y: 30 });
      }
      
      if (descriptionRef.current) {
        gsap.set(descriptionRef.current, { opacity: 0, y: 20 });
      }

      const cards = cardsContainerRef.current?.querySelectorAll('.approach-card');
      if (cards && cards.length > 0) {
        gsap.set(cards, { opacity: 0, y: 50 });
      }

      if (ctaSectionRef.current) {
        gsap.set(ctaSectionRef.current, { opacity: 0, y: 40 });
      }

      // Header animation
      const headerTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse"
        }
      });

      if (badgeRef.current) {
        headerTimeline.to(badgeRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out"
        });
      }

      if (headingParts && headingParts.length > 0) {
        headerTimeline.to(headingParts, {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: "power2.out"
        }, "-=0.3");
      }

      if (descriptionRef.current) {
        headerTimeline.to(descriptionRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out"
        }, "-=0.4");
      }

      // Simple card animations
      if (cards && cards.length > 0) {
        cards.forEach((card) => {
          // Card elements
          const numberBadge = card.querySelector('.number-badge');
          const title = card.querySelector('h3');
          const description = card.querySelector('.card-description');

          if (numberBadge) gsap.set(numberBadge, { opacity: 0, y: 20 });
          if (title) gsap.set(title, { opacity: 0, y: 20 });
          if (description) gsap.set(description, { opacity: 0, y: 20 });

          const cardTimeline = gsap.timeline({
            scrollTrigger: {
              trigger: card,
              start: "top 75%",
              toggleActions: "play none none reverse"
            }
          });

          // Card fade in
          cardTimeline.to(card, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out"
          });

          // Number badge
          if (numberBadge) {
            cardTimeline.to(numberBadge, {
              opacity: 1,
              y: 0,
              duration: 0.5,
              ease: "power2.out"
            }, "-=0.6");
          }

          // Title
          if (title) {
            cardTimeline.to(title, {
              opacity: 1,
              y: 0,
              duration: 0.5,
              ease: "power2.out"
            }, "-=0.3");
          }

          // Description
          if (description) {
            cardTimeline.to(description, {
              opacity: 1,
              y: 0,
              duration: 0.5,
              ease: "power2.out"
            }, "-=0.3");
          }
        });

        // Simple hover interactions
        cards.forEach((card) => {
          const cardElement = card as HTMLElement;
          const numberBadge = card.querySelector('.number-badge');

          cardElement.addEventListener('mouseenter', () => {
            gsap.to(cardElement, {
              y: -8,
              duration: 0.4,
              ease: "power2.out"
            });

            if (numberBadge) {
              gsap.to(numberBadge, {
                scale: 1.1,
                duration: 0.3,
                ease: "power2.out"
              });
            }
          });

          cardElement.addEventListener('mouseleave', () => {
            gsap.to(cardElement, {
              y: 0,
              duration: 0.4,
              ease: "power2.out"
            });

            if (numberBadge) {
              gsap.to(numberBadge, {
                scale: 1,
                duration: 0.3,
                ease: "power2.out"
              });
            }
          });
        });
      }

      // CTA Section
      if (ctaSectionRef.current) {
        const ctaHeading = ctaSectionRef.current?.querySelector('.cta-heading');
        const ctaDescription = ctaSectionRef.current?.querySelector('.cta-description');
        const ctaButtons = ctaSectionRef.current?.querySelectorAll('.cta-button');

        if (ctaHeading) gsap.set(ctaHeading, { opacity: 0, y: 20 });
        if (ctaDescription) gsap.set(ctaDescription, { opacity: 0, y: 20 });
        if (ctaButtons && ctaButtons.length > 0) {
          gsap.set(ctaButtons, { opacity: 0, y: 20 });
        }

        const ctaTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: ctaSectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        });

        ctaTimeline.to(ctaSectionRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out"
        });

        if (ctaHeading) {
          ctaTimeline.to(ctaHeading, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out"
          }, "-=0.5");
        }

        if (ctaDescription) {
          ctaTimeline.to(ctaDescription, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out"
          }, "-=0.4");
        }

        if (ctaButtons && ctaButtons.length > 0) {
          ctaTimeline.to(ctaButtons, {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.1,
            ease: "power2.out"
          }, "-=0.3");
        }

        // Button hover
        const buttons = ctaSectionRef.current?.querySelectorAll('button');
        buttons?.forEach((button) => {
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
      }

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="w-full bg-white py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 overflow-x-hidden relative"
    >
      {/* Background Text "Praxis" */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <div className="text-[120px] sm:text-[160px] md:text-[200px] lg:text-[280px] xl:text-[360px] font-bold text-gray-900/5 whitespace-nowrap">
          Praxis
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-5 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-14 md:mb-16 lg:mb-20">
          <div 
            ref={badgeRef}
            className="inline-flex items-center gap-2 px-3 py-1.5 mb-4 sm:mb-5 md:mb-6 rounded-full bg-soft border border-gray-200 shadow-sm"
          >
            <span className="text-[10px] sm:text-xs font-semibold text-gray-400 uppercase tracking-widest">
              Our Process
            </span>
          </div>

          <h2 
            ref={headingRef}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 leading-tight lg:leading-[1.1] tracking-tight mb-4 sm:mb-5 md:mb-6 lg:mb-8"
          >
            <span className="heading-part inline-block">Our </span>
            <span className="heading-part inline-block italic font-serif text-blue-600 font-normal">
              approach
            </span>
          </h2>

          <p 
            ref={descriptionRef}
            className="text-sm sm:text-base md:text-lg text-gray-500 leading-relaxed max-w-2xl"
          >
            A systematic, proven methodology that transforms complex tax challenges into clear, actionable strategies.
          </p>
        </div>

        {/* Approach Steps - Responsive grid */}
        <div ref={cardsContainerRef} className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 md:gap-7 lg:gap-8 xl:gap-12">
          {approaches.map((approach, index) => (
            <div
              key={index}
              className="approach-card group relative bg-soft p-5 sm:p-6 md:p-8 lg:p-10 xl:p-12 rounded-xl sm:rounded-2xl border border-gray-100 shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              {/* Number Badge */}
              <div
                className={`number-badge inline-flex items-center justify-center w-12 h-12 sm:w-13 sm:h-13 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-lg sm:rounded-xl ${approach.color} mb-4 sm:mb-5 md:mb-6 shadow-lg`}
              >
                <span className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white">
                  {approach.number}
                </span>
              </div>

              {/* Content */}
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-gray-900 mb-2 sm:mb-3 md:mb-4">
                {approach.title}
              </h3>

              <p className="card-description text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">
                {approach.description}
              </p>

              {/* Connection Line (desktop only, except last item) - Responsive hidden */}
              {index < approaches.length - 1 && index % 2 === 0 && (
                <div className="hidden xl:block absolute top-1/2 -right-6 w-12 border-t-2 border-dashed border-gray-300" />
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA Section - Mobile First */}
        <div 
          ref={ctaSectionRef}
          className="mt-12 sm:mt-14 md:mt-16 lg:mt-20 p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16 bg-gray-900 rounded-xl sm:rounded-2xl shadow-xl text-center"
        >
          <h3 className="cta-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-3 sm:mb-4 md:mb-6 px-4">
            Ready to experience the{" "}
            <span className="italic font-serif text-blue-400 font-normal block sm:inline">
              difference?
            </span>
          </h3>

          <p className="cta-description text-sm sm:text-base md:text-lg text-gray-300 mb-6 sm:mb-7 md:mb-8 lg:mb-10 max-w-2xl mx-auto leading-relaxed px-4">
            Let&apos;s discuss how our approach can transform your tax situation and unlock financial opportunities you didn&apos;t know existed.
          </p>

          {/* Buttons - Stack on mobile */}
          <div className="flex flex-col xs:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0">
            <Link href={"/booking"} className="w-full xs:w-auto">
              <button className="cta-button w-full xs:w-auto px-6 sm:px-7 md:px-8 py-3 sm:py-3.5 md:py-4 bg-blue-600 text-white font-semibold rounded-lg sm:rounded-xl hover:bg-blue-700 transition-all shadow-lg active:scale-95 text-sm sm:text-base whitespace-nowrap">
                Schedule Consultation
              </button>
            </Link>
            <Link href={'/fees'} className="w-full xs:w-auto">
              <button className="cta-button w-full xs:w-auto px-6 sm:px-7 md:px-8 py-3 sm:py-3.5 md:py-4 bg-white text-gray-900 font-semibold rounded-lg sm:rounded-xl border border-gray-200 hover:bg-gray-50 transition-all active:scale-95 text-sm sm:text-base whitespace-nowrap">
                View Our Services
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurApproach;