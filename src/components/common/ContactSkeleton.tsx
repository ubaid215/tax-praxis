const ContactSkeleton = () => {
  return (
    <main className="w-full bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20 min-h-screen">
      {/* Hero Section Skeleton */}
      <section className="w-full bg-gradient-to-br from-blue-50 to-purple-50/40 pt-20 pb-12 md:pt-28 md:pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            {/* Badge Skeleton */}
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 md:mb-6 rounded-full bg-white/80 backdrop-blur-sm border border-blue-100">
              <div className="w-4 h-4 bg-gray-200 rounded animate-pulse" />
              <div className="w-20 h-3 bg-gray-200 rounded animate-pulse" />
            </div>

            {/* Title Skeleton */}
            <div className="space-y-3 mb-4 md:mb-6">
              <div className="h-8 md:h-12 lg:h-14 bg-gray-200 rounded-xl animate-pulse max-w-lg mx-auto" />
              <div className="h-8 md:h-12 lg:h-14 bg-gray-200 rounded-xl animate-pulse max-w-md mx-auto" />
            </div>

            {/* Description Skeleton */}
            <div className="space-y-2 max-w-2xl mx-auto">
              <div className="h-5 md:h-6 bg-gray-200 rounded-lg animate-pulse" />
              <div className="h-5 md:h-6 bg-gray-200 rounded-lg animate-pulse max-w-md mx-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Skeleton */}
      <section className="w-full py-8 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
              
              {/* Form Skeleton - 2 columns */}
              <div className="lg:col-span-2 bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-10 shadow-xl border border-gray-100">
                {/* Form Header */}
                <div className="mb-6 md:mb-8">
                  <div className="h-7 md:h-8 bg-gray-200 rounded-lg animate-pulse max-w-xs mb-2" />
                  <div className="h-4 md:h-5 bg-gray-200 rounded-lg animate-pulse max-w-md" />
                </div>

                {/* Form Fields */}
                <div className="space-y-4 md:space-y-5">
                  {/* Name Field */}
                  <div>
                    <div className="h-4 bg-gray-200 rounded animate-pulse w-24 mb-2" />
                    <div className="h-12 md:h-14 bg-gray-100 rounded-xl animate-pulse" />
                  </div>

                  {/* Email & Phone Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                    <div>
                      <div className="h-4 bg-gray-200 rounded animate-pulse w-28 mb-2" />
                      <div className="h-12 md:h-14 bg-gray-100 rounded-xl animate-pulse" />
                    </div>
                    <div>
                      <div className="h-4 bg-gray-200 rounded animate-pulse w-28 mb-2" />
                      <div className="h-12 md:h-14 bg-gray-100 rounded-xl animate-pulse" />
                    </div>
                  </div>

                  {/* Subject Field */}
                  <div>
                    <div className="h-4 bg-gray-200 rounded animate-pulse w-20 mb-2" />
                    <div className="h-12 md:h-14 bg-gray-100 rounded-xl animate-pulse" />
                  </div>

                  {/* Message Field */}
                  <div>
                    <div className="h-4 bg-gray-200 rounded animate-pulse w-20 mb-2" />
                    <div className="h-32 md:h-40 bg-gray-100 rounded-xl animate-pulse" />
                  </div>

                  {/* Submit Button */}
                  <div className="h-12 md:h-14 bg-gray-200 rounded-xl animate-pulse" />
                </div>
              </div>

              {/* Sidebar Skeleton - 1 column */}
              <div className="space-y-4 md:space-y-6">
                {/* Quick Contact Card */}
                <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl md:rounded-3xl p-6 md:p-8">
                  <div className="h-6 md:h-7 bg-white/20 rounded-lg animate-pulse max-w-32 mb-4" />
                  <div className="h-4 bg-white/10 rounded animate-pulse mb-2" />
                  <div className="h-4 bg-white/10 rounded animate-pulse max-w-md mb-6" />

                  <div className="space-y-4">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 p-3 rounded-xl bg-white/10 backdrop-blur-sm"
                      >
                        <div className="w-10 h-10 bg-white/20 rounded-lg animate-pulse flex-shrink-0" />
                        <div className="flex-1 space-y-2">
                          <div className="h-3 bg-white/20 rounded animate-pulse w-16" />
                          <div className="h-4 bg-white/20 rounded animate-pulse" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Office Hours Card */}
                <div className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-xl border border-gray-100">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-10 h-10 bg-gray-200 rounded-lg animate-pulse flex-shrink-0" />
                    <div className="flex-1">
                      <div className="h-5 bg-gray-200 rounded animate-pulse max-w-32 mb-1" />
                      <div className="h-3 bg-gray-200 rounded animate-pulse max-w-24" />
                    </div>
                  </div>

                  <div className="space-y-3">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="flex justify-between items-center py-2 border-b border-gray-100">
                        <div className="h-4 bg-gray-200 rounded animate-pulse w-28" />
                        <div className="h-4 bg-gray-200 rounded animate-pulse w-32" />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Address Card */}
                <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl md:rounded-3xl p-6 md:p-8 border border-purple-200">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-10 h-10 bg-white/60 rounded-lg animate-pulse flex-shrink-0" />
                    <div className="flex-1">
                      <div className="h-5 bg-gray-300 rounded animate-pulse max-w-20 mb-2" />
                      <div className="h-4 bg-gray-300 rounded animate-pulse mb-1" />
                      <div className="h-4 bg-gray-300 rounded animate-pulse max-w-md" />
                    </div>
                  </div>

                  <div className="h-4 bg-gray-300 rounded animate-pulse max-w-32 mt-3" />
                </div>
              </div>
            </div>

            {/* FAQ Section Skeleton */}
            <div className="mt-12 md:mt-16 lg:mt-20">
              <div className="text-center mb-8 md:mb-12">
                <div className="h-8 md:h-10 bg-gray-200 rounded-xl animate-pulse max-w-md mx-auto mb-3" />
                <div className="h-4 md:h-5 bg-gray-200 rounded-lg animate-pulse max-w-xs mx-auto" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100"
                  >
                    <div className="h-6 bg-gray-200 rounded-lg animate-pulse max-w-xs mb-3" />
                    <div className="space-y-2">
                      <div className="h-4 bg-gray-200 rounded animate-pulse" />
                      <div className="h-4 bg-gray-200 rounded animate-pulse" />
                      <div className="h-4 bg-gray-200 rounded animate-pulse max-w-md" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Banner Skeleton */}
            <div className="mt-12 md:mt-16 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 rounded-2xl md:rounded-3xl p-8 md:p-12 text-center">
              <div className="h-8 md:h-10 bg-white/20 rounded-xl animate-pulse max-w-md mx-auto mb-3 md:mb-4" />
              <div className="space-y-2 mb-6 md:mb-8 max-w-2xl mx-auto">
                <div className="h-5 bg-white/10 rounded-lg animate-pulse" />
                <div className="h-5 bg-white/10 rounded-lg animate-pulse max-w-lg mx-auto" />
              </div>
              <div className="h-12 md:h-14 bg-white/20 rounded-xl animate-pulse max-w-xs mx-auto" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactSkeleton;