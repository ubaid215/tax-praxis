import React from "react";

const LoadingSkeleton = () => {
  return (
    <div className="w-full bg-white py-16 md:py-24 lg:py-32 animate-pulse">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header Skeleton */}
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 rounded-full bg-gray-200 w-48 h-7" />
          
          <div className="h-12 md:h-16 bg-gray-200 rounded-xl mb-6 max-w-2xl mx-auto" />
          <div className="h-6 bg-gray-200 rounded-lg max-w-xl mx-auto" />
        </div>

        {/* Service Categories Skeleton */}
        <div className="space-y-8 md:space-y-12 mb-16">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="bg-soft rounded-2xl p-8 md:p-10 shadow-md">
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gray-300" />
                <div className="h-8 bg-gray-300 rounded-lg w-48 md:w-64" />
              </div>

              {/* Service Items */} 
              <div className="space-y-4">
                {[1, 2, 3].map((j) => (
                  <div
                    key={j}
                    className="bg-white p-6 rounded-xl border border-gray-200 flex justify-between items-center"
                  >
                    <div className="flex-1">
                      <div className="h-5 bg-gray-200 rounded w-48 mb-2" />
                      <div className="h-4 bg-gray-200 rounded w-64" />
                    </div>
                    <div className="h-8 bg-gray-200 rounded-lg w-20" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Packages Skeleton */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 md:p-12 mb-12">
          <div className="h-10 bg-gray-700 rounded-lg mb-8 max-w-md mx-auto" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="h-6 bg-gray-600 rounded mb-3 w-24" />
                <div className="h-4 bg-gray-600 rounded mb-4 w-32" />
                <div className="h-8 bg-gray-600 rounded-lg w-20" />
              </div>
            ))}
          </div>
        </div>

        {/* Table Skeleton */}
        <div className="bg-soft rounded-2xl p-8 md:p-10 shadow-md">
          <div className="h-8 bg-gray-300 rounded-lg mb-6 max-w-xs" />
          
          <div className="overflow-x-auto">
            <div className="min-w-full">
              {/* Table Header */}
              <div className="grid grid-cols-4 gap-4 mb-4 pb-4 border-b border-gray-300">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="h-5 bg-gray-300 rounded w-20" />
                ))}
              </div>
              
              {/* Table Rows */}
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="grid grid-cols-4 gap-4 py-4 border-b border-gray-200">
                  {[1, 2, 3, 4].map((j) => (
                    <div key={j} className="h-5 bg-gray-200 rounded w-16" />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingSkeleton;