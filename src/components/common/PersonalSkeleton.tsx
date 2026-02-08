import React from "react";

const PersonalSkeleton = () => {
  return (
    <div className="w-full bg-white animate-pulse">
      {/* Hero Skeleton */}
      <div className="w-full bg-soft pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 rounded-full bg-gray-200 w-40 h-7 mx-auto" />
            <div className="h-14 md:h-20 bg-gray-200 rounded-xl mb-6 max-w-3xl mx-auto" />
            <div className="h-6 bg-gray-200 rounded-lg max-w-2xl mx-auto mb-3" />
            <div className="h-6 bg-gray-200 rounded-lg max-w-xl mx-auto" />
          </div>
        </div>
      </div>

      {/* Services Grid Skeleton */}
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
        <div className="max-w-6xl mx-auto space-y-8">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="bg-gray-200 rounded-2xl p-8 md:p-10 h-80"
            />
          ))}
        </div>
      </div>

      {/* CTA Skeleton */}
      <div className="w-full bg-gray-200 h-96" />
    </div>
  );
};

export default PersonalSkeleton;