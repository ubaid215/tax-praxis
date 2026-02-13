"use client";
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TheProblemWeSolve = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const solutionRef = useRef<HTMLDivElement>(null);

  const problems = [
    {
      icon: (
        <svg
          className="w-6 h-6 md:w-7 md:h-7"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: "Overpaying Taxes",
      stat: "$847B",
      statLabel: "Overpaid Annually",
      description:
        "Businesses and individuals overpay billions each year due to missed deductions, credits, and optimization strategies.",
      bgColor: "bg-red-50",
      iconColor: "bg-red-600",
      textColor: "text-red-600",
    },
    {
      icon: (
        <svg
          className="w-6 h-6 md:w-7 md:h-7"
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
      ),
      title: "Wasted Time",
      stat: "302hrs",
      statLabel: "Per Year Average",
      description:
        "The average business owner spends hundreds of hours on tax-related tasks—time that could be spent growing their business.",
      bgColor: "bg-orange-50",
      iconColor: "bg-orange-600",
      textColor: "text-orange-600",
    },
    {
      icon: (
        <svg
          className="w-6 h-6 md:w-7 md:h-7"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
      title: "Compliance Stress",
      stat: "67%",
      statLabel: "Fear Making Mistakes",
      description:
        "Most taxpayers live in fear of audits, penalties, and the overwhelming complexity of staying compliant with ever-changing regulations.",
      bgColor: "bg-yellow-50",
      iconColor: "bg-yellow-600",
      textColor: "text-yellow-700",
    },
    {
      icon: (
        <svg
          className="w-6 h-6 md:w-7 md:h-7"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
      title: "Reactive Planning",
      stat: "89%",
      statLabel: "File Reactively",
      description:
        "Most people only think about taxes once a year at filing time, missing countless opportunities for proactive optimization throughout the year.",
      bgColor: "bg-purple-50",
      iconColor: "bg-purple-600",
      textColor: "text-purple-600",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states for header with null checks
      const badge = headerRef.current?.querySelector('.header-badge');
      const title = headerRef.current?.querySelector('h2');
      const description = headerRef.current?.querySelector('p');

      if (badge) gsap.set(badge, { opacity: 0, y: 20 });
      if (title) gsap.set(title, { opacity: 0, y: 30 });
      if (description) gsap.set(description, { opacity: 0, y: 20 });

      // Set initial states for problem cards
      const cards = gridRef.current?.querySelectorAll('.problem-card');
      if (cards && cards.length > 0) {
        gsap.set(cards, { opacity: 0, y: 60 });
      }

      // Set initial states for solution section
      if (solutionRef.current) {
        gsap.set(solutionRef.current, { opacity: 0, y: 50 });
      }

      // Header animation
      const headerTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse"
        }
      });

      if (badge) {
        headerTimeline.to(badge, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out"
        });
      }

      if (title) {
        headerTimeline.to(title, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out"
        }, "-=0.3");
      }

      if (description) {
        headerTimeline.to(description, {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power2.out"
        }, "-=0.5");
      }

      // Animate problem cards
      if (cards && cards.length > 0) {
        cards.forEach((card) => {
          const icon = card.querySelector('.card-icon');
          const cardTitle = card.querySelector('.card-title');
          const statNumber = card.querySelector('.stat-number');
          const statLabel = card.querySelector('.stat-label');
          const cardDescription = card.querySelector('.card-description');

          if (icon) gsap.set(icon, { opacity: 0, y: 20 });
          if (cardTitle) gsap.set(cardTitle, { opacity: 0, y: 20 });
          if (statNumber) gsap.set(statNumber, { opacity: 0, y: 20 });
          if (statLabel) gsap.set(statLabel, { opacity: 0, y: 20 });
          if (cardDescription) gsap.set(cardDescription, { opacity: 0, y: 20 });

          const cardTimeline = gsap.timeline({
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
              toggleActions: "play none none reverse"
            }
          });

          // Card entrance
          cardTimeline.to(card, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out"
          });

          // Icon pop
          if (icon) {
            cardTimeline.to(icon, {
              opacity: 1,
              y: 0,
              duration: 0.5,
              ease: "back.out(1.5)"
            }, "-=0.6");
          }

          // Title
          if (cardTitle) {
            cardTimeline.to(cardTitle, {
              opacity: 1,
              y: 0,
              duration: 0.5,
              ease: "power2.out"
            }, "-=0.3");
          }

          // Stat number with counter
          if (statNumber) {
            cardTimeline.to(statNumber, {
              opacity: 1,
              y: 0,
              duration: 0.5,
              ease: "power2.out"
            }, "-=0.3");

            // Counter animation
            const text = statNumber.textContent || "";
            const numericValue = parseFloat(text.replace(/[^0-9.]/g, ''));
            const suffix = text.replace(/[0-9.]/g, '');
            
            if (!isNaN(numericValue)) {
              const counter = { value: 0 };
              cardTimeline.to(counter, {
                value: numericValue,
                duration: 1.5,
                ease: "power2.out",
                onUpdate: function() {
                  if (statNumber) {
                    statNumber.textContent = Math.round(counter.value) + suffix;
                  }
                }
              }, "-=0.5");
            }
          }

          // Stat label
          if (statLabel) {
            cardTimeline.to(statLabel, {
              opacity: 1,
              y: 0,
              duration: 0.5,
              ease: "power2.out"
            }, "-=1.2");
          }

          // Description
          if (cardDescription) {
            cardTimeline.to(cardDescription, {
              opacity: 1,
              y: 0,
              duration: 0.5,
              ease: "power2.out"
            }, "-=0.3");
          }

          // Subtle parallax on each card
          gsap.to(card, {
            y: -30,
            ease: "none",
            scrollTrigger: {
              trigger: card,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.5
            }
          });
        });

        // Hover animations
        cards.forEach((card) => {
          const cardElement = card as HTMLElement;
          const icon = card.querySelector('.card-icon');

          cardElement.addEventListener('mouseenter', () => {
            gsap.to(cardElement, {
              y: -8,
              duration: 0.4,
              ease: "power2.out"
            });

            if (icon) {
              gsap.to(icon, {
                scale: 1.1,
                rotation: 5,
                duration: 0.3,
                ease: "back.out(1.7)"
              });
            }
          });

          cardElement.addEventListener('mouseleave', () => {
            gsap.to(cardElement, {
              y: 0,
              duration: 0.4,
              ease: "power2.out"
            });

            if (icon) {
              gsap.to(icon, {
                scale: 1,
                rotation: 0,
                duration: 0.3,
                ease: "power2.out"
              });
            }
          });
        });
      }

      // Solution section animation
      if (solutionRef.current) {
        const solutionTitle = solutionRef.current?.querySelector('.solution-title');
        const solutionDescription = solutionRef.current?.querySelector('.solution-description');
        const solutionStats = solutionRef.current?.querySelectorAll('.solution-stat');
        const solutionButton = solutionRef.current?.querySelector('.solution-button');

        if (solutionTitle) gsap.set(solutionTitle, { opacity: 0, y: 30 });
        if (solutionDescription) gsap.set(solutionDescription, { opacity: 0, y: 30 });
        if (solutionStats && solutionStats.length > 0) {
          gsap.set(solutionStats, { opacity: 0, y: 40 });
        }
        if (solutionButton) gsap.set(solutionButton, { opacity: 0, y: 20 });

        const solutionTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: solutionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        });

        solutionTimeline.to(solutionRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out"
        });

        if (solutionTitle) {
          solutionTimeline.to(solutionTitle, {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power2.out"
          }, "-=0.5");
        }

        if (solutionDescription) {
          solutionTimeline.to(solutionDescription, {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power2.out"
          }, "-=0.4");
        }

        if (solutionStats && solutionStats.length > 0) {
          solutionTimeline.to(solutionStats, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.15,
            ease: "power2.out"
          }, "-=0.4");
        }

        if (solutionButton) {
          solutionTimeline.to(solutionButton, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out"
          }, "-=0.3");
        }

        // Counter animations for solution stats
        solutionStats?.forEach((stat) => {
          const numberElement = stat.querySelector('.solution-stat-number');
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
                  start: "top 85%",
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

        // Button hover
        const button = solutionRef.current?.querySelector('button');
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
      }

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="w-full bg-soft py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 overflow-x-hidden"
    >
      <div className="container mx-auto px-4 sm:px-5 md:px-6">
        {/* Section Header */}
        <div ref={headerRef} className="max-w-3xl mx-auto text-center mb-10 sm:mb-12 md:mb-16 lg:mb-20">
          <div className="header-badge inline-flex items-center gap-2 px-3 py-1.5 mb-4 sm:mb-5 md:mb-6 rounded-full bg-white border border-gray-200 shadow-sm">
            <span className="text-[10px] sm:text-xs font-semibold text-gray-400 uppercase tracking-widest">
              The Challenge
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 leading-tight lg:leading-[1.1] tracking-tight mb-4 sm:mb-5 md:mb-6 lg:mb-8 px-4">
            The problem we{" "}
            <span className="italic font-serif text-blue-600 font-normal block sm:inline">
              solve
            </span>
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-gray-500 leading-relaxed px-4">
            Tax complexity costs businesses and individuals billions in overpayments, wasted time, and missed opportunities. We&apos;re here to change that.
          </p>
        </div>

        {/* Problems Grid - Responsive */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6 lg:gap-8 mb-12 sm:mb-14 md:mb-16 lg:mb-20">
          {problems.map((problem, index) => (
            <div
              key={index}
              className={`problem-card ${problem.bgColor} p-5 sm:p-6 md:p-8 lg:p-10 rounded-xl sm:rounded-2xl border border-gray-200 shadow-md transition-shadow duration-300`}
            >
              <div
                className={`card-icon w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-lg sm:rounded-xl ${problem.iconColor} text-white flex items-center justify-center mb-4 sm:mb-5 md:mb-6 shadow-lg`}
              >
                {problem.icon}
              </div>

              <h3 className="card-title text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-gray-900 mb-3 sm:mb-3.5 md:mb-4">
                {problem.title}
              </h3>

              <div className="mb-3 sm:mb-3.5 md:mb-4 pb-3 sm:pb-3.5 md:pb-4 border-b border-gray-300">
                <div
                  className={`stat-number text-2xl sm:text-3xl md:text-4xl font-bold ${problem.textColor} mb-0.5 sm:mb-1`}
                >
                  {problem.stat}
                </div>
                <div className="stat-label text-[10px] sm:text-xs md:text-sm font-medium text-gray-500 uppercase tracking-wider">
                  {problem.statLabel}
                </div>
              </div>

              <p className="card-description text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>

        {/* Solution Teaser - Mobile First */}
        <div 
          ref={solutionRef} 
          className="bg-gradient-to-br from-gray-900 to-gray-800 p-5 sm:p-6 md:p-8 lg:p-12 xl:p-16 rounded-xl sm:rounded-2xl shadow-2xl"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="solution-title text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-3 sm:mb-4 md:mb-6 px-4">
              There&apos;s a{" "}
              <span className="italic font-serif text-blue-400 font-normal block sm:inline">
                better way
              </span>
            </h3>

            <p className="solution-description text-sm sm:text-base md:text-lg text-gray-300 mb-6 sm:mb-7 md:mb-8 lg:mb-10 leading-relaxed px-4">
              You don&apos;t have to navigate this alone. With Tax Praxis, you gain a partner who transforms these problems into opportunities for savings, growth, and peace of mind.
            </p>

            {/* Stats Grid - Responsive */}
            <div className="grid grid-cols-1 xs:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8 mb-6 sm:mb-7 md:mb-8 lg:mb-10 px-4">
              <div className="solution-stat text-center">
                <div className="solution-stat-number text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-blue-400 mb-1 sm:mb-2">
                  $2.3M
                </div>
                <div className="text-[10px] sm:text-xs md:text-sm text-gray-400 uppercase tracking-wider">
                  Average Saved
                </div>
              </div>
              <div className="solution-stat text-center">
                <div className="solution-stat-number text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-blue-400 mb-1 sm:mb-2">
                  150+
                </div>
                <div className="text-[10px] sm:text-xs md:text-sm text-gray-400 uppercase tracking-wider">
                  Hours Reclaimed
                </div>
              </div>
              <div className="solution-stat text-center">
                <div className="solution-stat-number text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-blue-400 mb-1 sm:mb-2">
                  100%
                </div>
                <div className="text-[10px] sm:text-xs md:text-sm text-gray-400 uppercase tracking-wider">
                  Compliance Rate
                </div>
              </div>
            </div>

            <div className="solution-button px-4">
              <Link href={'/booking'} className="block sm:inline-block">
                <button className="w-full sm:w-auto px-6 sm:px-7 md:px-8 py-3 sm:py-3.5 md:py-4 bg-blue-600 text-white font-semibold rounded-lg sm:rounded-xl hover:bg-blue-700 transition-all shadow-lg active:scale-95 text-sm sm:text-base whitespace-nowrap">
                  Get Consultation
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TheProblemWeSolve;