"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const WhyWeExist = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const statCardRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const paragraphsRef = useRef<HTMLDivElement>(null);
  const pointsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial hidden states
      gsap.set(imageContainerRef.current, { 
        opacity: 0, 
        x: -100,
        scale: 0.95
      });

      gsap.set(statCardRef.current, { 
        opacity: 0, 
        scale: 0.8,
        y: 20
      });

      gsap.set(badgeRef.current, { 
        opacity: 0, 
        y: 20 
      });

      const headingLines = headingRef.current?.querySelectorAll('.heading-part');
      if (headingLines) {
        gsap.set(headingLines, { 
          opacity: 0, 
          y: 30 
        });
      }

      const paragraphs = paragraphsRef.current?.querySelectorAll('p');
      if (paragraphs) {
        gsap.set(paragraphs, { 
          opacity: 0, 
          y: 30 
        });
      }

      const points = pointsRef.current?.querySelectorAll('.key-point');
      if (points) {
        gsap.set(points, { 
          opacity: 0, 
          x: -30 
        });
      }

      // Image mask overlay for reveal effect
      const imageMask = imageContainerRef.current?.querySelector('.image-mask');
      if (imageMask) {
        gsap.set(imageMask, { scaleX: 1 });
      }

      // Main timeline triggered by scroll
      const mainTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "top 30%",
          toggleActions: "play none none reverse"
        }
      });

      // 1. Animate image container with mask reveal
      mainTimeline.to(imageContainerRef.current, {
        opacity: 1,
        x: 0,
        scale: 1,
        duration: 1,
        ease: "power3.out"
      });

      // Image mask wipe effect
      if (imageMask) {
        mainTimeline.to(imageMask, {
          scaleX: 0,
          transformOrigin: "right",
          duration: 1.2,
          ease: "power3.inOut"
        }, "-=0.8");
      }

      // 2. Animate stat card
      mainTimeline.to(statCardRef.current, {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.8,
        ease: "back.out(1.4)"
      }, "-=0.6");

      // 3. Animate badge
      mainTimeline.to(badgeRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "back.out(1.4)"
      }, "-=0.5");

      // 4. Animate heading lines
      if (headingLines) {
        mainTimeline.to(headingLines, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out"
        }, "-=0.3");
      }

      // 5. Animate paragraphs
      if (paragraphs) {
        mainTimeline.to(paragraphs, {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.2,
          ease: "power3.out"
        }, "-=0.4");
      }

      // 6. Animate key points
      if (points) {
        mainTimeline.to(points, {
          opacity: 1,
          x: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: "power2.out"
        }, "-=0.3");
      }

      // Parallax effect on image
      gsap.to(imageContainerRef.current, {
        y: -50,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5
        }
      });

      // Counter animation for stat card
      const statNumber = statCardRef.current?.querySelector('.stat-number');
      if (statNumber) {
        const counter = { value: 0 };
        gsap.to(counter, {
          value: 98,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: statCardRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          },
          onUpdate: function() {
            if (statNumber) {
              statNumber.textContent = Math.round(counter.value) + '%';
            }
          }
        });
      }

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-soft py-16 md:py-24 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* LEFT: Visual Content */}
          <div className="w-full lg:w-1/2">
            <div className="relative">
              {/* Main Image Container */}
              <div 
                ref={imageContainerRef}
                className="relative aspect-[4/5] md:aspect-square rounded-2xl overflow-hidden shadow-xl"
              >
                <Image
                  src="/images/about-us-mission.webp"
                  alt="Tax professionals at work"
                  fill
                  className="object-cover"
                  priority
                />
                {/* Mask overlay for reveal effect */}
                <div className="image-mask absolute inset-0 bg-soft z-10 origin-right"></div>
              </div>

              {/* Floating Stat Card */}
              <div 
                ref={statCardRef}
                className="absolute -bottom-6 -right-6 md:-bottom-8 md:-right-8 bg-white p-6 md:p-8 rounded-2xl shadow-2xl border border-gray-100 max-w-[200px] md:max-w-[240px]"
              >
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="stat-number text-4xl md:text-5xl font-semibold text-gray-900">
                    98%
                  </span>
                  <svg
                    className="w-5 h-5 md:w-6 md:h-6 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p className="text-xs md:text-sm font-medium text-gray-500 uppercase tracking-wider">
                  Client Satisfaction
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT: Content */}
          <div className="w-full lg:w-1/2">
            <div 
              ref={badgeRef}
              className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 rounded-full bg-white border border-gray-200 shadow-sm"
            >
              <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">
                Our Mission
              </span>
            </div>

            <h2 
              ref={headingRef}
              className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 leading-[1.1] tracking-tight mb-6 md:mb-8"
            >
              <span className="heading-part inline-block">Why we </span>
              <span className="heading-part inline-block italic font-serif text-blue-600 font-normal">
                exist
              </span>
            </h2>

            <div ref={paragraphsRef} className="space-y-6 mb-8 md:mb-10">
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                We founded Tax Praxis because we saw too many businesses and individuals drowning in complexity, losing money to preventable mistakes, and missing opportunities hidden in plain sight.
              </p>

              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                The tax code isn&lsquo;t just a set of rules—it&lsquo;s a roadmap to financial optimization. But navigating it requires expertise, dedication, and a genuine commitment to your success.
              </p>

              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                That&lsquo;s why we exist: to transform tax from a burden into a competitive advantage, to turn confusion into clarity, and to help you keep more of what you earn.
              </p>
            </div>

            {/* Key Points */}
            <div ref={pointsRef} className="space-y-4">
              {[
                {
                  title: "Client-First Philosophy",
                  description: "Your success is our only metric that matters.",
                },
                {
                  title: "Continuous Innovation",
                  description: "We stay ahead so you stay compliant and optimized.",
                },
                {
                  title: "Transparent Partnership",
                  description: "No jargon, no hidden fees, just honest expertise.",
                },
              ].map((point, index) => (
                <div key={index} className="key-point flex gap-4 items-start">
                  <div className="w-6 h-6 md:w-7 md:h-7 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg
                      className="w-3 h-3 md:w-4 md:h-4 text-white"
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
                  <div>
                    <h4 className="text-base md:text-lg font-semibold text-gray-900 mb-1">
                      {point.title}
                    </h4>
                    <p className="text-sm md:text-base text-gray-500">
                      {point.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyWeExist;