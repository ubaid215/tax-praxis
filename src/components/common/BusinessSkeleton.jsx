"use client";
import React from "react";

const BusinessSkeleton = () => {
  return (
    <main className="w-full bg-white animate-pulse">
      {/* Hero Section Skeleton */}
      <section className="w-full bg-soft pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              {/* Left - Content Skeleton */}
              <div>
                <div className="h-7 w-32 bg-gray-200 rounded-full mb-6" />
                <div className="h-14 bg-gray-200 rounded-lg mb-4 w-4/5" />
                <div className="h-14 bg-gray-200 rounded-lg mb-6 w-3/5" />
                <div className="space-y-3 mb-8">
                  <div className="h-6 bg-gray-200 rounded w-full" />
                  <div className="h-6 bg-gray-200 rounded w-5/6" />
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="h-12 w-40 bg-gray-300 rounded-xl" />
                  <div className="h-12 w-40 bg-gray-200 rounded-xl" />
                </div>
              </div>

              {/* Right - Image Skeleton */}
              <div className="relative">
                <div className="aspect-square rounded-2xl bg-gray-200" />
                <div className="absolute -bottom-6 -left-6 bg-gray-300 p-6 md:p-8 rounded-2xl w-40 h-32" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section Skeleton */}
      <section className="w-full py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            {/* Section Header Skeleton */}
            <div className="text-center mb-12 md:mb-16">
              <div className="h-10 bg-gray-200 rounded-lg w-96 mx-auto mb-4" />
              <div className="h-6 bg-gray-200 rounded w-2/3 mx-auto" />
            </div>

            {/* Benefits Grid Skeleton */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {[1, 2, 3, 4].map((item) => (
                <div
                  key={item}
                  className="bg-soft rounded-2xl p-8 border border-gray-200"
                >
                  <div className="w-14 h-14 rounded-xl bg-gray-300 mx-auto mb-6" />
                  <div className="h-6 bg-gray-200 rounded mb-3 w-3/4 mx-auto" />
                  <div className="space-y-2">
                    <div className="h-4 bg-gray-200 rounded w-full" />
                    <div className="h-4 bg-gray-200 rounded w-5/6 mx-auto" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section Skeleton */}
      <section className="w-full py-16 md:py-20 lg:py-24 bg-soft">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            {/* Section Header Skeleton */}
            <div className="text-center mb-12 md:mb-16">
              <div className="h-10 bg-gray-200 rounded-lg w-96 mx-auto mb-4" />
              <div className="h-6 bg-gray-200 rounded w-2/3 mx-auto" />
            </div>

            {/* Services List Skeleton */}
            <div className="space-y-8">
              {[1, 2, 3, 4].map((item) => (
                <div
                  key={item}
                  className="bg-white rounded-2xl overflow-hidden border border-gray-200"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                    {/* Image Skeleton */}
                    <div className="h-80 lg:h-auto bg-gray-200" />

                    {/* Content Skeleton */}
                    <div className="p-8 md:p-10 lg:p-12 flex flex-col justify-center">
                      <div className="w-14 h-14 rounded-xl bg-gray-300 mb-6" />
                      <div className="h-8 bg-gray-200 rounded mb-2 w-4/5" />
                      <div className="h-5 bg-gray-200 rounded mb-4 w-3/5" />
                      <div className="space-y-2 mb-6">
                        <div className="h-4 bg-gray-200 rounded w-full" />
                        <div className="h-4 bg-gray-200 rounded w-5/6" />
                      </div>

                      <div className="space-y-3 mb-8">
                        {[1, 2, 3, 4, 5].map((feature) => (
                          <div key={feature} className="flex items-start gap-3">
                            <div className="w-5 h-5 rounded-full bg-gray-300 flex-shrink-0 mt-0.5" />
                            <div className="h-4 bg-gray-200 rounded flex-1" />
                          </div>
                        ))}
                      </div>

                      <div className="h-12 w-32 bg-gray-300 rounded-lg" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How We Work Section Skeleton */}
      <section className="w-full py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            {/* Section Header Skeleton */}
            <div className="text-center mb-12 md:mb-16">
              <div className="h-10 bg-gray-200 rounded-lg w-80 mx-auto mb-4" />
              <div className="h-6 bg-gray-200 rounded w-2/3 mx-auto" />
            </div>

            {/* Steps Skeleton */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {[1, 2, 3, 4].map((item) => (
                <div
                  key={item}
                  className="bg-white rounded-2xl p-8 border border-gray-200"
                >
                  <div className="h-16 w-24 bg-gray-100 rounded mb-4" />
                  <div className="h-6 bg-gray-200 rounded mb-3 w-3/4" />
                  <div className="space-y-2">
                    <div className="h-4 bg-gray-200 rounded w-full" />
                    <div className="h-4 bg-gray-200 rounded w-5/6" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section Skeleton */}
      <section className="w-full py-16 md:py-20 lg:py-24 bg-soft">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 md:p-12 lg:p-16 border border-gray-200">
              <div className="text-center mb-10">
                <div className="h-10 bg-gray-200 rounded-lg w-96 mx-auto mb-4" />
                <div className="h-6 bg-gray-200 rounded w-2/3 mx-auto" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                {[1, 2, 3].map((item) => (
                  <div
                    key={item}
                    className="text-center p-6 bg-soft rounded-xl border border-gray-200"
                  >
                    <div className="h-10 bg-gray-200 rounded mb-2 w-20 mx-auto" />
                    <div className="h-4 bg-gray-200 rounded w-24 mx-auto" />
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div className="h-14 w-56 bg-gray-300 rounded-xl" />
                <div className="h-14 w-56 bg-gray-200 rounded-xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Skeleton */}
      <section className="w-full py-16 md:py-20 lg:py-24 bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="h-12 bg-gray-700 rounded-lg w-3/4 mx-auto mb-6" />
            <div className="space-y-3 mb-10">
              <div className="h-6 bg-gray-700 rounded w-5/6 mx-auto" />
              <div className="h-6 bg-gray-700 rounded w-4/6 mx-auto" />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="h-14 w-56 bg-gray-700 rounded-xl mx-auto sm:mx-0" />
              <div className="h-14 w-56 bg-gray-600 rounded-xl mx-auto sm:mx-0" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default BusinessSkeleton;