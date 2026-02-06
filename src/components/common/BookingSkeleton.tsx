import React from "react";

const BookingSkeleton = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Skeleton */}
        <div className="text-center mb-10">
          <div className="inline-flex mb-6">
            <div className="h-8 w-48 bg-gray-200 rounded-full animate-pulse"></div>
          </div>
          
          <div className="h-12 bg-gray-200 rounded-lg animate-pulse mb-4 max-w-md mx-auto"></div>
          <div className="h-6 bg-gray-200 rounded-lg animate-pulse max-w-2xl mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column - Form Skeleton */}
          <div className="bg-white rounded-2xl shadow-soft p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gray-200 animate-pulse"></div>
              <div className="h-8 w-48 bg-gray-200 rounded-lg animate-pulse"></div>
            </div>

            <div className="space-y-6">
              {/* Form fields skeleton */}
              {[...Array(5)].map((_, i) => (
                <div key={i} className="space-y-4">
                  <div className="h-6 w-40 bg-gray-200 rounded-lg animate-pulse"></div>
                  <div className="h-12 bg-gray-200 rounded-xl animate-pulse"></div>
                </div>
              ))}
              
              <div className="h-14 bg-gray-200 rounded-xl animate-pulse"></div>
            </div>
          </div>

          {/* Right Column - Info Skeleton */}
          <div className="space-y-8">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-soft p-6 sm:p-8">
                <div className="h-8 w-64 bg-gray-200 rounded-lg animate-pulse mb-6"></div>
                <div className="space-y-4">
                  {[...Array(3)].map((_, j) => (
                    <div key={j} className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gray-200 animate-pulse"></div>
                      <div className="flex-1 space-y-2">
                        <div className="h-5 w-32 bg-gray-200 rounded animate-pulse"></div>
                        <div className="h-4 w-48 bg-gray-200 rounded animate-pulse"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingSkeleton;