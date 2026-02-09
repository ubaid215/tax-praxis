"use client";

import React, { useState, useEffect } from "react";
import { DayPicker } from "react-day-picker";
import { format } from "date-fns";
import { Calendar, Clock, User, Mail, Phone, MessageSquare, CheckCircle, ChevronLeft, ChevronRight, AlertCircle } from "lucide-react";
import { Toaster, toast } from "react-hot-toast";
import BookingSkeleton from "@/components/common/BookingSkeleton";
import "react-day-picker/dist/style.css";

interface TimeSlot {
  id: string;
  startTime: string;
  endTime: string;
  isBooked: boolean;
  availabilityId: string;
}

interface Availability {
  id: string;
  date: string;
  startAt: string;
  endAt: string;
  slots: TimeSlot[];
}

const BookingPage = () => {
  const [loading, setLoading] = useState(false);
  const [initialLoading, setInitialLoading] = useState(true);
  const [availableDates, setAvailableDates] = useState<Date[]>([]);
  const [availableSlots, setAvailableSlots] = useState<TimeSlot[]>([]);
  const [selectedSlot, setSelectedSlot] = useState<TimeSlot | null>(null);
  
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    notes: "",
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
  });

  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [showCalendar, setShowCalendar] = useState(false);

  // Fetch available dates on component mount
  useEffect(() => {
    fetchAvailability();
  }, []);

  const fetchAvailability = async () => {
    try {
      setInitialLoading(true);
      const response = await fetch('/api/availability');
      
      if (!response.ok) {
        throw new Error('Failed to fetch availability');
      }

      const data: Availability[] = await response.json();
      
      // Extract unique dates that have available slots
      const dates = data
        .filter(avail => avail.slots.some(slot => !slot.isBooked))
        .map(avail => new Date(avail.date));
      
      setAvailableDates(dates);
    } catch (error) {
      console.error('Error fetching availability:', error);
      toast.error('Failed to load available dates');
    } finally {
      setInitialLoading(false);
    }
  };

  // Fetch slots for selected date
  const fetchSlotsForDate = async (date: Date) => {
    try {
      const dateStr = format(date, 'yyyy-MM-dd');
      const response = await fetch(`/api/availability?date=${dateStr}`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch slots');
      }

      const data: Availability[] = await response.json();
      
      // Get all available slots for this date
      const slots = data.flatMap(avail => 
        avail.slots.filter(slot => !slot.isBooked)
      );
      
      setAvailableSlots(slots);
      
      if (slots.length === 0) {
        toast('No available slots for this date', {
          icon: '📅',
          duration: 2000,
        });
      }
    } catch (error) {
      console.error('Error fetching slots:', error);
      toast.error('Failed to load time slots');
      setAvailableSlots([]);
    }
  };

  const handleDateSelect = (date: Date | undefined) => {
    setSelectedDate(date);
    setSelectedSlot(null); // Reset selected slot
    
    if (date) {
      fetchSlotsForDate(date);
      setShowCalendar(false);
      
      toast.success(`Selected ${format(date, "MMMM d, yyyy")}`, {
        duration: 2000,
        position: "bottom-center",
        icon: "📅",
      });
    } else {
      setAvailableSlots([]);
    }
  };

  const handleTimeSelect = (slot: TimeSlot) => {
    setSelectedSlot(slot);
    
    const timeStr = format(new Date(slot.startTime), 'h:mm a');
    toast(`Selected ${timeStr}`, {
      duration: 1500,
      position: "bottom-center",
      icon: "⏰",
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedSlot) {
      toast.error('Please select a time slot');
      return;
    }

    setLoading(true);
    const loadingToast = toast.loading("Creating your booking...");

    try {
      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          slotId: selectedSlot.id,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to create booking');
      }

      toast.dismiss(loadingToast);
      
      // Success notification with sync status
      const { booking, syncStatus } = data;
      
      toast.success(
        <div className="flex flex-col items-center gap-2">
          <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
            <CheckCircle className="w-6 h-6 text-green-600" />
          </div>
          <div className="text-center">
            <p className="font-semibold text-gray-900">Booking Confirmed!</p>
            <p className="text-sm text-gray-600">
              Status: {booking.status}
            </p>
            {syncStatus.google === 'SUCCESS' && (
              <p className="text-xs text-green-600">✓ Google Calendar synced</p>
            )}
            {syncStatus.odoo === 'SUCCESS' && (
              <p className="text-xs text-green-600">✓ Odoo synced</p>
            )}
          </div>
        </div>,
        {
          duration: 5000,
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
        fullName: "",
        email: "",
        phone: "",
        notes: "",
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      });
      setSelectedDate(undefined);
      setSelectedSlot(null);
      setAvailableSlots([]);
      
      // Refresh availability
      fetchAvailability();
      
    } catch (error) {
      toast.dismiss(loadingToast);
      toast.error(
        error instanceof Error ? error.message : 'Failed to create booking'
      );
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Disable dates that don't have availability
  const disabledDays = [
    { from: new Date(0), to: new Date(new Date().setHours(0, 0, 0, 0) - 1) }, // Past dates
    (date: Date) => {
      // Disable dates that aren't in availableDates
      return !availableDates.some(
        availDate => format(availDate, 'yyyy-MM-dd') === format(date, 'yyyy-MM-dd')
      );
    }
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

  if (initialLoading) {
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

          {availableDates.length === 0 && (
            <div className="max-w-2xl mx-auto mb-8 p-4 bg-yellow-50 border border-yellow-200 rounded-xl flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-yellow-600 mt-0.5 shrink-0" />
              <div>
                <h3 className="font-semibold text-yellow-900">No availability found</h3>
                <p className="text-sm text-yellow-700">
                  There are currently no available time slots. Please check back later or contact us directly.
                </p>
              </div>
            </div>
          )}

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
                  
                  <div className="space-y-2">
                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-200"
                      placeholder="John Smith"
                    />
                  </div>
                  
                  <div className="grid sm:grid-cols-2 gap-4">
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
                          disabled={availableDates.length === 0}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 hover:bg-white hover:border-blue-500 text-left focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all duration-200 flex items-center justify-between disabled:opacity-50 disabled:cursor-not-allowed"
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
                                day_selected: "bg-blue-600 text-white hover:bg-blue-700",
                                day_today: "text-blue-600 font-semibold",
                                day_disabled: "text-gray-300 cursor-not-allowed hover:bg-transparent",
                                day_outside: "text-gray-300",
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
                    </div>

                    {/* Time Selection */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                        <Clock className="w-5 h-5" />
                        Select Time
                      </h3>
                      
                      {!selectedDate ? (
                        <div className="text-center py-8 text-gray-500">
                          Please select a date first
                        </div>
                      ) : availableSlots.length === 0 ? (
                        <div className="text-center py-8 text-gray-500">
                          No available slots for this date
                        </div>
                      ) : (
                        <div className="grid grid-cols-2 gap-3 max-h-80 overflow-y-auto">
                          {availableSlots.map((slot) => {
                            const startTime = new Date(slot.startTime);
                            const timeStr = format(startTime, 'h:mm a');
                            const isSelected = selectedSlot?.id === slot.id;
                            
                            return (
                              <button
                                key={slot.id}
                                type="button"
                                onClick={() => handleTimeSelect(slot)}
                                className={`py-3 px-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                                  isSelected
                                    ? "bg-blue-600 text-white shadow-md transform scale-105"
                                    : "bg-gray-100 text-gray-700 hover:bg-gray-200 shadow-sm hover:scale-105"
                                }`}
                              >
                                {timeStr}
                              </button>
                            );
                          })}
                        </div>
                      )}
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
                    id="notes"
                    name="notes"
                    value={formData.notes}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-200 resize-none"
                    placeholder="Tell us about your specific needs or questions..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading || !selectedSlot}
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
                    <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                      <Mail className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Email</h4>
                      <p className="text-gray-600">hello@taxpraxis.com</p>
                      <p className="text-sm text-gray-500">Typically respond within 2 hours</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                      <Phone className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Phone</h4>
                      <p className="text-gray-600">(555) 123-4567</p>
                      <p className="text-sm text-gray-500">Monday-Friday, 9AM-5PM EST</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
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
                    <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center shrink-0 mt-1">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Free Initial Consultation</h4>
                      <p className="text-gray-600 text-sm">No commitment required for first meeting</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center shrink-0 mt-1">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Expert Tax Advice</h4>
                      <p className="text-gray-600 text-sm">Get clarity on your tax situation and options</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center shrink-0 mt-1">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Personalized Strategy</h4>
                      <p className="text-gray-600 text-sm">Tailored solutions for your unique needs</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center shrink-0 mt-1">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Calendar Integration</h4>
                      <p className="text-gray-600 text-sm">Automatic sync with Google Calendar</p>
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
                    <p className="text-sm text-gray-700">Only dates with available slots are selectable</p>
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