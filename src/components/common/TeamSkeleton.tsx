import React from "react";

const TeamSkeleton = () => {
  return (
    <div className="w-full bg-white animate-pulse">
      {/* Hero Skeleton */}
      <div className="w-full bg-soft pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 rounded-full bg-gray-200 w-32 h-7 mx-auto" />
            <div className="h-14 md:h-20 bg-gray-200 rounded-xl mb-6 max-w-3xl mx-auto" />
            <div className="h-6 bg-gray-200 rounded-lg max-w-2xl mx-auto" />
          </div>
        </div>
      </div>

      {/* Team Members Skeleton */}
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Large Featured Member */}
          <div className="bg-gray-200 rounded-3xl h-[600px] md:h-[700px]" />

          {/* Grid Members */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-200 rounded-2xl h-96" />
            <div className="bg-gray-200 rounded-2xl h-96" />
          </div>

          {/* Additional Members */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-200 rounded-2xl h-80" />
            <div className="bg-gray-200 rounded-2xl h-80" />
            <div className="bg-gray-200 rounded-2xl h-80" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamSkeleton;