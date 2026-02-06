"use client";
import React, { Suspense, useState } from "react";
import Link from "next/link";
import ContactSkeleton from "@/components/common/ContactSkeleton";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const contactInfo = {
    name: "Farrukh Bashir",
    title: "Tax Store Parkes",
    address: "Suite 417, Level 4, 15 Moore Street Canberra, ACT 2601",
    whatsapp: "+61 434 900 027",
    landline: "+61 2 5119 2207",
    phone: "+61 449 624 007",
    email: "farrukh.bashir@taxstore.com.au",
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }, 2000);
  };

  return (
    <Suspense fallback={<ContactSkeleton />}>
      <main className="w-full bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20 min-h-screen">
        {/* Hero Section */}
        <section className="w-full bg-gradient-to-br from-blue-50 to-purple-50/40 pt-20 pb-12 md:pt-28 md:pb-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center shadow-md gap-2 px-4 py-2 mb-4 md:mb-6 rounded-full bg-white/80 backdrop-blur-sm border border-blue-100 ">
                <svg
                  className="w-4 h-4 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-xs font-semibold text-blue-600 uppercase tracking-widest">
                  Get In Touch
                </span>
              </div>

              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight tracking-tight mb-4 md:mb-6">
                Let&apos;s Start a{" "}
                <span className="italic font-serif text-blue-600 font-normal">
                  Conversation
                </span>
              </h1>

              <p className="text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
                Have questions about our services? We&apos;re here to help you navigate your financial journey with expert guidance.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="w-full py-8 md:py-16 lg:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-6xl mx-auto">
              {/* Bento Grid Layout */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
                
                {/* Contact Form - Takes 2 columns on large screens */}
                <div className="lg:col-span-2 bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-10 shadow-xl border border-gray-100">
                  <div className="mb-6 md:mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                      Send us a message
                    </h2>
                    <p className="text-sm md:text-base text-gray-600">
                      Fill out the form below and we&apos;ll get back to you within 24 hours.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
                    {/* Name Input */}
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 md:py-3.5 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all outline-none text-gray-900 placeholder-gray-400 text-sm md:text-base"
                        placeholder="John Doe"
                      />
                    </div>

                    {/* Email & Phone Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 md:py-3.5 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all outline-none text-gray-900 placeholder-gray-400 text-sm md:text-base"
                          placeholder="john@example.com"
                        />
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 md:py-3.5 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all outline-none text-gray-900 placeholder-gray-400 text-sm md:text-base"
                          placeholder="+61 xxx xxx xxx"
                        />
                      </div>
                    </div>

                    {/* Subject */}
                    <div>
                      <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                        Subject
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 md:py-3.5 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all outline-none text-gray-900 text-sm md:text-base"
                      >
                        <option value="">Select a subject</option>
                        <option value="general">General Inquiry</option>
                        <option value="tax">Tax Services</option>
                        <option value="accounting">Accounting Services</option>
                        <option value="business">Business Consultation</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 md:py-3.5 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all outline-none text-gray-900 placeholder-gray-400 resize-none text-sm md:text-base"
                        placeholder="Tell us about your inquiry..."
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full px-6 py-3.5 md:py-4 bg-gray-900 text-white font-bold rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg hover:shadow-xl active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed text-sm md:text-base"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center gap-2">
                          <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                              fill="none"
                            />
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            />
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        "Send Message"
                      )}
                    </button>

                    {/* Success Message */}
                    {submitStatus === "success" && (
                      <div className="p-4 rounded-xl bg-green-50 border border-green-200 flex items-start gap-3">
                        <svg
                          className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <div>
                          <p className="text-sm font-semibold text-green-900">Message sent successfully!</p>
                          <p className="text-xs text-green-700 mt-0.5">
                            We&apos;ll get back to you within 24 hours.
                          </p>
                        </div>
                      </div>
                    )}
                  </form>
                </div>

                {/* Contact Information Sidebar */}
                <div className="space-y-4 md:space-y-6">
                  {/* Quick Contact Card */}
                  <div className="bg-gradient-primary rounded-2xl md:rounded-3xl p-6 md:p-8 text-white shadow-xl">
                    <h3 className="text-xl md:text-2xl font-bold mb-4">Quick Contact</h3>
                    <p className="text-blue-100 text-sm md:text-base mb-6 leading-relaxed">
                      Need immediate assistance? Reach out to us directly.
                    </p>

                    <div className="space-y-4">
                      {/* WhatsApp */}
                      <a
                        href={`https://wa.me/${contactInfo.whatsapp.replace(/\s/g, '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-3 rounded-xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all group"
                      >
                        <div className="w-10 h-10 rounded-lg bg-green-500 flex items-center justify-center flex-shrink-0">
                          <svg
                            className="w-5 h-5 text-white"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                          </svg>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs text-blue-200 font-medium">WhatsApp</p>
                          <p className="text-sm font-semibold truncate">{contactInfo.whatsapp}</p>
                        </div>
                      </a>

                      {/* Phone */}
                      <a
                        href={`tel:${contactInfo.phone}`}
                        className="flex items-center gap-3 p-3 rounded-xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all group"
                      >
                        <div className="w-10 h-10 rounded-lg bg-blue-500 flex items-center justify-center flex-shrink-0">
                          <svg
                            className="w-5 h-5 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                            />
                          </svg>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs text-blue-200 font-medium">Mobile</p>
                          <p className="text-sm font-semibold truncate">{contactInfo.phone}</p>
                        </div>
                      </a>

                      {/* Email */}
                      <a
                        href={`mailto:${contactInfo.email}`}
                        className="flex items-center gap-3 p-3 rounded-xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all group"
                      >
                        <div className="w-10 h-10 rounded-lg bg-purple-500 flex items-center justify-center flex-shrink-0">
                          <svg
                            className="w-5 h-5 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                          </svg>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs text-blue-200 font-medium">Email</p>
                          <p className="text-sm font-semibold truncate">{contactInfo.email}</p>
                        </div>
                      </a>
                    </div>
                  </div>

                  {/* Office Hours */}
                  <div className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-xl border border-gray-100">
                    <div className="flex items-start gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-5 h-5 text-purple-600"
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
                      </div>
                      <div>
                        <h3 className="text-lg md:text-xl font-bold text-gray-900">Office Hours</h3>
                        <p className="text-xs md:text-sm text-gray-500">We&apos;re here to help</p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="text-sm text-gray-600">Monday - Friday</span>
                        <span className="text-sm font-semibold text-gray-900">9:00 AM - 6:00 PM</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="text-sm text-gray-600">Saturday</span>
                        <span className="text-sm font-semibold text-gray-900">10:00 AM - 2:00 PM</span>
                      </div>
                      <div className="flex justify-between items-center py-2">
                        <span className="text-sm text-gray-600">Sunday</span>
                        <span className="text-sm font-semibold text-red-600">Closed</span>
                      </div>
                    </div>
                  </div>

                  {/* Address Card */}
                  <div className="bg-[#F3EFEA] rounded-2xl md:rounded-3xl p-6 md:p-8 border border-purple-200">
                    <div className="flex items-start gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-5 h-5 text-purple-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-1">Visit Us</h3>
                        <p className="text-sm text-gray-700 leading-relaxed">
                          {contactInfo.address}
                        </p>
                      </div>
                    </div>

                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contactInfo.address)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-purple-700 hover:text-purple-800 transition-colors mt-3"
                    >
                      Get Directions
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* FAQ Section */}
              <div className="mt-12 md:mt-16 lg:mt-20">
                <div className="text-center mb-8 md:mb-12">
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
                    Frequently Asked{" "}
                    <span className="italic font-serif text-blue-600 font-normal">Questions</span>
                  </h2>
                  <p className="text-sm md:text-base text-gray-600">
                    Quick answers to common questions
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  {/* FAQ 1 */}
                  <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all">
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">
                      How quickly can I expect a response?
                    </h3>
                    <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                      We aim to respond to all inquiries within 24 hours during business days. For urgent matters, please call us directly.
                    </p>
                  </div>

                  {/* FAQ 2 */}
                  <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all">
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">
                      Do you offer virtual consultations?
                    </h3>
                    <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                      Yes! We offer both in-person and virtual consultations via video call to accommodate your schedule and preferences.
                    </p>
                  </div>

                  {/* FAQ 3 */}
                  <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all">
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">
                      What information should I prepare?
                    </h3>
                    <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                      Bring relevant financial documents, tax records, and a list of questions. We&apos;ll guide you through the rest during our consultation.
                    </p>
                  </div>

                  {/* FAQ 4 */}
                  <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all">
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">
                      Is the initial consultation free?
                    </h3>
                    <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                      Yes, we offer a complimentary 15-minute initial consultation to understand your needs and discuss how we can help.
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA Banner */}
              <div className="mt-12 md:mt-16 bg-gradient-primary rounded-2xl md:rounded-3xl p-8 md:p-12 text-center shadow-2xl">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 md:mb-4">
                  Ready to get started?
                </h2>
                <p className="text-base md:text-lg text-blue-100 mb-6 md:mb-8 max-w-2xl mx-auto">
                  Book a meeting with our expert team and take the first step towards your financial goals.
                </p>
                <Link href="/book-meeting">
                  <button className="px-8 md:px-10 py-3.5 md:py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-gray-50 transition-all shadow-lg hover:shadow-xl active:scale-95 text-sm md:text-base">
                    Schedule a Consultation
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Suspense>
  );
};

export default ContactPage;