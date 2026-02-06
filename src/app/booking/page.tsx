"use client";

import React, { useState } from "react";
import { DayPicker } from "react-day-picker";
import { format } from "date-fns";
import { Calendar, Clock, User, Mail, Phone, MessageSquare, CheckCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { Toaster, toast } from "react-hot-toast";
import BookingSkeleton from "@/components/common/BookingSkeleton";
import "react-day-picker/dist/style.css";

const BookingPage = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "general-consultation",
    date: "",
    time: "",
    message: "",
  });

  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedTime, setSelectedTime] = useState("");
  const [showCalendar, setShowCalendar] = useState(false);

  const timeSlots = [
    "09:00 AM", "10:00 AM", "11:00 AM", 
    "12:00 PM", "01:00 PM", "02:00 PM", 
    "03:00 PM", "04:00 PM", "05:00 PM"
  ];

  const services = [
    { id: "general-consultation", name: "General Tax Consultation" },
    { id: "business-tax", name: "Business Tax Planning" },
    { id: "personal-tax", name: "Personal Tax Strategy" },
    { id: "compliance-review", name: "Compliance Review" },
    { id: "financial-planning", name: "Financial Planning" },
    { id: "other", name: "Other Service" },
  ];

  const handleDateSelect = (date: Date | undefined) => {
    setSelectedDate(date);
    if (date) {
      const formattedDate = format(date, "yyyy-MM-dd");
      setFormData(prev => ({ ...prev, date: formattedDate }));
      setShowCalendar(false);
      
      // Show mini toast for date selection
      toast.success(`Selected ${format(date, "MMMM d, yyyy")}`, {
        duration: 2000,
        position: "bottom-center",
        icon: "📅",
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Show loading toast
    const loadingToast = toast.loading("Submitting your booking request...", {
      duration: 1500,
    });

    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      toast.dismiss(loadingToast);
      
      // Success toast with animation
      toast.success(
        <div className="flex flex-col items-center gap-2">
          <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
            <CheckCircle className="w-6 h-6 text-green-600 animate-bounce" />
          </div>
          <div className="text-center">
            <p className="font-semibold text-gray-900">Booking Confirmed!</p>
            <p className="text-sm text-gray-600">We'll contact you shortly.</p>
          </div>
        </div>,
        {
          duration: 4000,
          position: "top-center",
          style: {
            background: "white",
            padding: "16px",
            borderRadius: "12px",
            boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
          },
        }
      );

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "general-consultation",
        date: "",
        time: "",
        message: "",
      });
      setSelectedDate(undefined);
      setSelectedTime("");
    }, 1500);
  };

  const handleTimeSelect = (time: string) => {
    setFormData(prev => ({ ...prev, time }));
    setSelectedTime(time);
    
    // Show mini toast for time selection
    toast(`Selected ${time}`, {
      duration: 1500,
      position: "bottom-center",
      icon: "⏰",
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const disabledDays = [
    { from: new Date(0), to: new Date(Date.now() - 24 * 60 * 60 * 1000) }, // Past dates
    { dayOfWeek: [0, 6] }, // Disable weekends (0 = Sunday, 6 = Saturday)
  ];

  const footer = selectedDate ? (
    <p className="mt-2 text-sm text-gray-600 text-center">
      Selected: {format(selectedDate, "PPP")}
    </p>
  ) : (
    <p className="mt-2 text-sm text-gray-500 text-center">
      Please pick a date
    </p>
  );

  if (loading) {
    return <BookingSkeleton />;
  }

  return (
    <>
      <Toaster 
        toastOptions={{
          className: '',
          style: {
            fontFamily: 'system-ui, -apple-system, sans-serif',
          },
        }}
      />
      
      <div className="min-h-screen bg-gray-50 pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 shadow-md rounded-full bg-white shadow-soft mb-6">
              <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
                Book Your Consultation
              </span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Schedule Your{" "}
              <span className="text-blue-600">Free Consultation</span>
            </h1>
            
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Let&apos;s discuss your tax and financial goals. Choose a time that works best for you.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left Column - Booking Form */}
            <div className="bg-white rounded-2xl shadow-soft p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Book Appointment</h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                    <User className="w-5 h-5" />
                    Personal Information
                  </h3>
                  
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-200"
                        placeholder="John Smith"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-200"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-200"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>

                {/* Service Selection */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900">Select Service</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {services.map((service) => (
                      <label
                        key={service.id}
                        className={`relative flex items-center p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 ${
                          formData.service === service.id
                            ? "border-blue-500 bg-blue-50 shadow-soft"
                            : "border-gray-200 bg-gray-50 hover:border-blue-300 hover:shadow-sm"
                        }`}
                      >
                        <input
                          type="radio"
                          name="service"
                          value={service.id}
                          checked={formData.service === service.id}
                          onChange={handleInputChange}
                          className="sr-only"
                        />
                        <div className="flex items-center justify-between w-full">
                          <span className="font-medium text-gray-900">{service.name}</span>
                          <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                            formData.service === service.id
                              ? "border-blue-500 bg-blue-500"
                              : "border-gray-300"
                          }`}>
                            {formData.service === service.id && (
                              <div className="w-2 h-2 rounded-full bg-white"></div>
                            )}
                          </div>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Date & Time Selection */}
                <div className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    {/* Date Selection */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                        <Calendar className="w-5 h-5" />
                        Select Date
                      </h3>
                      
                      <div className="relative">
                        <button
                          type="button"
                          onClick={() => setShowCalendar(!showCalendar)}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 hover:bg-white hover:border-blue-500 text-left focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all duration-200 flex items-center justify-between"
                        >
                          <span className={selectedDate ? "text-gray-900" : "text-gray-500"}>
                            {selectedDate ? format(selectedDate, "MMMM d, yyyy") : "Choose a date"}
                          </span>
                          <Calendar className="w-5 h-5 text-gray-400" />
                        </button>
                        
                        {showCalendar && (
                          <div className="absolute z-10 mt-2 w-full bg-white rounded-xl shadow-soft border border-gray-200 p-4">
                            <DayPicker
                              mode="single"
                              selected={selectedDate}
                              onSelect={handleDateSelect}
                              disabled={disabledDays}
                              modifiersClassNames={{
                                selected: "bg-blue-600 text-white hover:bg-blue-700",
                                today: "font-semibold",
                              }}
                              classNames={{
                                months: "w-full",
                                month: "w-full",
                                caption: "flex justify-center pt-1 relative items-center px-2",
                                caption_label: "text-sm font-medium text-gray-900",
                                nav: "flex items-center",
                                nav_button: "h-6 w-6 bg-transparent hover:bg-gray-100 rounded flex items-center justify-center",
                                nav_button_previous: "absolute left-1",
                                nav_button_next: "absolute right-1",
                                table: "w-full border-collapse",
                                head_row: "flex",
                                head_cell: "text-gray-500 rounded-md w-8 font-normal text-sm",
                                row: "flex w-full mt-1",
                                cell: "relative p-0 text-center",
                                day: "h-8 w-8 p-0 font-normal hover:bg-gray-100 rounded-md transition-colors",
                                day_range_end: "day-range-end",
                                day_selected: "bg-blue-600 text-white hover:bg-blue-700",
                                day_today: "text-blue-600 font-semibold",
                                day_disabled: "text-gray-300 cursor-not-allowed hover:bg-transparent",
                                day_outside: "text-gray-300",
                              }}
                              components={{
                                IconLeft: ({ ...props }) => <ChevronLeft className="h-4 w-4" />,
                                IconRight: ({ ...props }) => <ChevronRight className="h-4 w-4" />,
                              }}
                            />
                            {footer}
                            <button
                              type="button"
                              onClick={() => setShowCalendar(false)}
                              className="w-full mt-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
                            >
                              Close calendar
                            </button>
                          </div>
                        )}
                      </div>
                      
                      <div className="text-sm text-gray-500">
                        Available Monday-Friday, 9AM-5PM
                      </div>
                    </div>

                    {/* Time Selection */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                        <Clock className="w-5 h-5" />
                        Select Time
                      </h3>
                      <div className="grid grid-cols-3 gap-3">
                        {timeSlots.map((time) => (
                          <button
                            key={time}
                            type="button"
                            onClick={() => handleTimeSelect(time)}
                            className={`py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                              formData.time === time
                                ? "bg-blue-600 text-white shadow-md transform scale-105"
                                : "bg-gray-100 text-gray-700 hover:bg-gray-200 shadow-sm hover:scale-105"
                            }`}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Additional Message */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                    <MessageSquare className="w-5 h-5" />
                    Additional Details (Optional)
                  </h3>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-200 resize-none"
                    placeholder="Tell us about your specific needs or questions..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading || !formData.date || !formData.time}
                  className="w-full py-4 px-6 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 active:bg-blue-800 disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-3 group"
                >
                  {loading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Processing...
                    </>
                  ) : (
                    <>
                      <CheckCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                      Book Your Consultation
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Right Column - Info & Benefits */}
            <div className="space-y-8">
              {/* Contact Info Card */}
              <div className="bg-white rounded-2xl shadow-soft p-6 sm:p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Email</h4>
                      <p className="text-gray-600">hello@taxpraxis.com</p>
                      <p className="text-sm text-gray-500">Typically respond within 2 hours</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Phone</h4>
                      <p className="text-gray-600">(555) 123-4567</p>
                      <p className="text-sm text-gray-500">Monday-Friday, 9AM-5PM EST</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Consultation Duration</h4>
                      <p className="text-gray-600">30-45 minutes</p>
                      <p className="text-sm text-gray-500">Free initial consultation</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Benefits Card */}
              <div className="bg-blue-50 rounded-2xl shadow-soft p-6 sm:p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">What to Expect</h3>
                
                <div className="space-y-5">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Free Initial Consultation</h4>
                      <p className="text-gray-600 text-sm">No commitment required for first meeting</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Expert Tax Advice</h4>
                      <p className="text-gray-600 text-sm">Get clarity on your tax situation and options</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Personalized Strategy</h4>
                      <p className="text-gray-600 text-sm">Tailored solutions for your unique needs</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">No Pressure Follow-up</h4>
                      <p className="text-gray-600 text-sm">We&apos;ll provide next steps, no sales pressure</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Quick Tips Card */}
              <div className="bg-white rounded-2xl shadow-soft p-6 sm:p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Tips</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-xl">
                    <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center">
                      <span className="text-blue-600 font-bold">1</span>
                    </div>
                    <p className="text-sm text-gray-700">Select both date and time to enable booking</p>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-xl">
                    <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center">
                      <span className="text-blue-600 font-bold">2</span>
                    </div>
                    <p className="text-sm text-gray-700">Weekends are unavailable for consultations</p>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-xl">
                    <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center">
                      <span className="text-blue-600 font-bold">3</span>
                    </div>
                    <p className="text-sm text-gray-700">You&apos;ll receive a confirmation email immediately</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookingPage;