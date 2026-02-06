import React from "react";

const VisionSkeleton = () => {
  return (
    <div className="w-full bg-white animate-pulse">
      {/* Hero Skeleton */}
      <div className="w-full bg-soft pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 rounded-full bg-gray-200 w-32 h-7 mx-auto" />
            <div className="h-14 md:h-20 bg-gray-200 rounded-xl mb-6 max-w-3xl mx-auto" />
            <div className="h-6 bg-gray-200 rounded-lg max-w-2xl mx-auto mb-3" />
            <div className="h-6 bg-gray-200 rounded-lg max-w-xl mx-auto" />
          </div>
        </div>
      </div>

      {/* Content Sections Skeleton */}
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
        {/* Section 1 - Two Column */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-20">
          <div>
            <div className="h-10 bg-gray-200 rounded-lg mb-6 w-64" />
            <div className="space-y-4">
              <div className="h-5 bg-gray-200 rounded w-full" />
              <div className="h-5 bg-gray-200 rounded w-full" />
              <div className="h-5 bg-gray-200 rounded w-3/4" />
            </div>
          </div>
          <div className="aspect-video bg-gray-200 rounded-2xl" />
        </div>

        {/* Section 2 - Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          <div className="bg-gray-200 rounded-2xl h-80" />
          <div className="bg-gray-200 rounded-2xl h-80" />
          <div className="bg-gray-200 rounded-2xl h-80" />
          <div className="bg-gray-200 rounded-2xl h-80" />
        </div>

        {/* Section 3 - Large Card */}
        <div className="bg-gray-200 rounded-2xl h-96 mb-20" />

        {/* Founders Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-200 rounded-2xl h-96" />
          <div className="bg-gray-200 rounded-2xl h-96" />
        </div>
      </div>
    </div>
  );
};

export default VisionSkeleton;