"use client";
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ABetterWay = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);

  const comparisons = [
    {
      old: "Last-minute tax filing driven by stress and uncertainty",
      new: "Strategic, year-round tax planning aligned with your financial goals",
    },
    {
      old: "One-size-fits-all advice from distant accountants",
      new: "Tailored financial strategies delivered by dedicated advisors",
    },
    {
      old: "Reactive compliance focused on avoiding penalties",
      new: "Proactive optimization designed to accelerate growth",
    },
    {
      old: "Audit anxiety and financial uncertainty",
      new: "Structured compliance with complete confidence and clarity",
    },
    {
      old: "Missed deductions and overlooked opportunities",
      new: "Precision-driven maximization of every credit and deduction",
    },
    {
      old: "Time-consuming paperwork and administrative burden",
      new: "Streamlined systems that free you to focus on scaling your business",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states for header with null checks
      const headerBadge = headerRef.current?.querySelector('.header-badge');
      const headerTitle = headerRef.current?.querySelector('h2');
      const headerDescription = headerRef.current?.querySelector('p:last-child');

      if (headerBadge) gsap.set(headerBadge, { opacity: 0, y: 20 });
      if (headerTitle) gsap.set(headerTitle, { opacity: 0, y: 30 });
      if (headerDescription) gsap.set(headerDescription, { opacity: 0, y: 20 });

      // Set initial states for vertical line
      const verticalLine = timelineRef.current?.querySelector('.vertical-line');
      if (verticalLine) {
        gsap.set(verticalLine, { scaleY: 0, transformOrigin: "top" });
      }

      // Set initial states for comparison items
      const comparisonItems = timelineRef.current?.querySelectorAll('.comparison-item');
      if (comparisonItems && comparisonItems.length > 0) {
        comparisonItems.forEach((item) => {
          const oldWay = item.querySelector('.old-way');
          const newWay = item.querySelector('.new-way');
          const dot = item.querySelector('.center-dot');

          if (oldWay) gsap.set(oldWay, { opacity: 0, x: 50 });
          if (newWay) gsap.set(newWay, { opacity: 0, x: -50 });
          if (dot) gsap.set(dot, { scale: 0 });
        });
      }

      // Set initial states for results section
      const resultsTitle = resultsRef.current?.querySelector('h3');
      const resultStats = resultsRef.current?.querySelectorAll('.result-stat');
      const resultsButton = resultsRef.current?.querySelector('.results-button');

      if (resultsTitle) gsap.set(resultsTitle, { opacity: 0, y: 30 });
      if (resultStats && resultStats.length > 0) {
        gsap.set(resultStats, { opacity: 0, y: 40 });
      }
      if (resultsButton) gsap.set(resultsButton, { opacity: 0, y: 20 });

      // Header animation
      const headerTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse"
        }
      });

      if (headerBadge) {
        headerTimeline.to(headerBadge, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out"
        });
      }

      if (headerTitle) {
        headerTimeline.to(headerTitle, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out"
        }, "-=0.3");
      }

      if (headerDescription) {
        headerTimeline.to(headerDescription, {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power2.out"
        }, "-=0.5");
      }

      // Vertical line progressive reveal
      if (verticalLine) {
        gsap.to(verticalLine, {
          scaleY: 1,
          duration: 2,
          ease: "none",
          scrollTrigger: {
            trigger: timelineRef.current,
            start: "top 70%",
            end: "bottom 30%",
            scrub: 1
          }
        });
      }

      // Animate each comparison item
      if (comparisonItems && comparisonItems.length > 0) {
        comparisonItems.forEach((item) => {
          const oldWay = item.querySelector('.old-way');
          const oldLabel = oldWay?.querySelector('.old-label');
          const oldText = oldWay?.querySelector('.old-text');
          const newWay = item.querySelector('.new-way');
          const newLabel = newWay?.querySelector('.new-label');
          const newText = newWay?.querySelector('.new-text');
          const dot = item.querySelector('.center-dot');

          // Set initial states for labels and text
          if (oldLabel) gsap.set(oldLabel, { opacity: 0, y: 15 });
          if (oldText) gsap.set(oldText, { opacity: 0, y: 15 });
          if (newLabel) gsap.set(newLabel, { opacity: 0, y: 15 });
          if (newText) gsap.set(newText, { opacity: 0, y: 15 });

          const itemTimeline = gsap.timeline({
            scrollTrigger: {
              trigger: item,
              start: "top 75%",
              toggleActions: "play none none reverse"
            }
          });

          // Old way entrance
          if (oldWay) {
            itemTimeline.to(oldWay, {
              opacity: 1,
              x: 0,
              duration: 0.8,
              ease: "power3.out"
            });
          }

          // Old way label
          if (oldLabel) {
            itemTimeline.to(oldLabel, {
              opacity: 1,
              y: 0,
              duration: 0.5,
              ease: "power2.out"
            }, "-=0.6");
          }

          // Old way text
          if (oldText) {
            itemTimeline.to(oldText, {
              opacity: 1,
              y: 0,
              duration: 0.6,
              ease: "power2.out"
            }, "-=0.3");
          }

          // Center dot pop
          if (dot) {
            itemTimeline.to(dot, {
              scale: 1,
              duration: 0.4,
              ease: "back.out(2)"
            }, "-=0.4");
          }

          // New way entrance
          if (newWay) {
            itemTimeline.to(newWay, {
              opacity: 1,
              x: 0,
              duration: 0.8,
              ease: "power3.out"
            }, "-=0.6");
          }

          // New way label
          if (newLabel) {
            itemTimeline.to(newLabel, {
              opacity: 1,
              y: 0,
              duration: 0.5,
              ease: "power2.out"
            }, "-=0.6");
          }

          // New way text
          if (newText) {
            itemTimeline.to(newText, {
              opacity: 1,
              y: 0,
              duration: 0.6,
              ease: "power2.out"
            }, "-=0.3");
          }

          // Subtle parallax on old way
          if (oldWay) {
            gsap.to(oldWay, {
              y: 20,
              ease: "none",
              scrollTrigger: {
                trigger: item,
                start: "top bottom",
                end: "bottom top",
                scrub: 1.5
              }
            });
          }

          // Opposite parallax on new way
          if (newWay) {
            gsap.to(newWay, {
              y: -20,
              ease: "none",
              scrollTrigger: {
                trigger: item,
                start: "top bottom",
                end: "bottom top",
                scrub: 1.5
              }
            });
          }
        });
      }

      // Results section animation
      const resultsTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: resultsRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse"
        }
      });

      if (resultsTitle) {
        resultsTimeline.to(resultsTitle, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out"
        });
      }

      if (resultStats && resultStats.length > 0) {
        resultsTimeline.to(resultStats, {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.15,
          ease: "power2.out"
        }, "-=0.4");
      }

      if (resultsButton) {
        resultsTimeline.to(resultsButton, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out"
        }, "-=0.3");
      }

      // Counter animations for stats
      resultStats?.forEach((stat) => {
        const numberElement = stat.querySelector('.stat-number');
        if (numberElement) {
          const text = numberElement.textContent || "";
          const numericValue = parseFloat(text.replace(/[^0-9.]/g, ''));
          const suffix = text.replace(/[0-9.]/g, '');
          
          if (!isNaN(numericValue)) {
            const counter = { value: 0 };
            gsap.to(counter, {
              value: numericValue,
              duration: 2,
              ease: "power2.out",
              scrollTrigger: {
                trigger: stat,
                start: "top 80%",
                toggleActions: "play none none reverse"
              },
              onUpdate: function() {
                if (numberElement) {
                  if (suffix.includes('.')) {
                    numberElement.textContent = counter.value.toFixed(1) + suffix.replace('.', '');
                  } else {
                    numberElement.textContent = Math.round(counter.value) + suffix;
                  }
                }
              }
            });
          }
        }
      });

      // Button hover animation
      const button = resultsRef.current?.querySelector('button');
      if (button) {
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
      }

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="relative w-full bg-white py-16 sm:py-20 md:py-24 lg:py-32 overflow-x-hidden"
    >
      <div className="container mx-auto px-4 sm:px-5 md:px-6 lg:px-8">

        {/* Header - Mobile First */}
        <div ref={headerRef} className="max-w-4xl mx-auto text-center mb-16 sm:mb-20 md:mb-24">
          <p className="header-badge text-[10px] sm:text-xs md:text-sm tracking-[0.3em] uppercase text-gray-400 mb-4 sm:mb-5 md:mb-6">
            The Transformation
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 leading-tight lg:leading-tight mb-4 sm:mb-5 md:mb-6 lg:mb-8 px-4">
            A <span className="italic font-serif text-blue-600 font-normal">better way</span>
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-gray-500 max-w-2xl mx-auto px-4">
            Tax strategy shouldn&apos;t feel reactive. It should feel intentional,
            structured, and built for growth.
          </p>
        </div>

        {/* Comparison Timeline - Mobile First */}
        <div ref={timelineRef} className="relative max-w-6xl mx-auto">

          {/* Vertical Divider - Hidden on mobile */}
          <div className="vertical-line hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-200"></div>

          <div className="space-y-12 sm:space-y-14 md:space-y-16 lg:space-y-20">
            {comparisons.map((item, index) => (
              <div
                key={index}
                className="comparison-item flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-12 items-center relative"
              >
                {/* OLD - On mobile, shows first */}
                <div className="old-way w-full md:text-right md:pr-16 order-2 md:order-1">
                  <p className="old-label text-[10px] sm:text-xs uppercase tracking-widest text-gray-400 mb-2 sm:mb-3 md:mb-4">
                    The Old Way
                  </p>
                  <p className="old-text text-sm sm:text-base md:text-lg text-gray-500 leading-relaxed">
                    {item.old}
                  </p>
                </div>

                {/* Center Dot - Hidden on mobile */}
                <div className="center-dot hidden md:block absolute left-1/2 -translate-x-1/2 w-3 h-3 md:w-4 md:h-4 rounded-full bg-blue-600 shadow-lg"></div>

                {/* Mobile Visual Separator */}
                <div className="w-full md:hidden flex items-center justify-center my-2">
                  <div className="w-12 h-0.5 bg-blue-200 rounded-full"></div>
                  <div className="mx-3 w-2 h-2 rounded-full bg-blue-600"></div>
                  <div className="w-12 h-0.5 bg-blue-200 rounded-full"></div>
                </div>

                {/* NEW - On mobile, shows after separator */}
                <div className="new-way w-full md:pl-16 order-3 md:order-2">
                  <p className="new-label text-[10px] sm:text-xs uppercase tracking-widest text-blue-600 mb-2 sm:mb-3 md:mb-4">
                    The Tax Praxis Way
                  </p>
                  <p className="new-text text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-gray-900 leading-snug">
                    {item.new}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Results Section - Mobile First */}
        <div ref={resultsRef} className="mt-20 sm:mt-24 md:mt-28 lg:mt-32 text-center">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 mb-10 sm:mb-12 md:mb-16 px-4">
            Proven Results
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-10 md:gap-12 lg:gap-16 max-w-4xl mx-auto">
            <div className="result-stat">
              <p className="stat-number text-3xl sm:text-4xl md:text-5xl font-bold text-blue-600 mb-2 sm:mb-3 md:mb-4">3.7x</p>
              <p className="text-xs sm:text-sm md:text-base text-gray-500">Average ROI</p>
            </div>

            <div className="result-stat">
              <p className="stat-number text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4">98.7%</p>
              <p className="text-xs sm:text-sm md:text-base text-gray-500">Client Retention</p>
            </div>

            <div className="result-stat">
              <p className="stat-number text-3xl sm:text-4xl md:text-5xl font-bold text-blue-600 mb-2 sm:mb-3 md:mb-4">24hrs</p>
              <p className="text-xs sm:text-sm md:text-base text-gray-500">Average Response Time</p>
            </div>
          </div>

          <div className="results-button mt-10 sm:mt-12 md:mt-16 lg:mt-20 px-4">
            <Link href="/booking" className="block sm:inline-block">
              <button className="w-full sm:w-auto px-6 sm:px-7 md:px-8 lg:px-10 py-3.5 sm:py-4 md:py-5 bg-gray-900 text-white rounded-full text-sm sm:text-base font-semibold transition-transform duration-300 shadow-xl hover:scale-105 active:scale-95">
                Start Your Transformation
              </button>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ABetterWay;