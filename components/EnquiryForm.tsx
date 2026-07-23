"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

export default function EnquiryForm() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });
  
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.company || !formData.email || !formData.phone || !formData.message) {
      setStatus("error");
      setErrorMessage("All fields are required.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus("error");
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    setStatus("submitting");

    setTimeout(() => {
      setStatus("success");
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        message: "",
      });
    }, 1500);
  };

  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-md md:p-8">
      {status === "success" ? (
        <div className="flex flex-col items-center justify-center py-12 text-center animate-fade-in">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-green/10 text-brand-green">
            <CheckCircle2 className="h-10 w-10" />
          </div>
          <h3 className="mt-6 text-2xl font-bold text-gray-900 font-display">Enquiry Submitted!</h3>
          <p className="mt-2 text-sm text-gray-600 max-w-sm leading-relaxed">
            Thank you for reaching out. A corporate gifting representative from Sonavi Enterprises will contact you within 24 hours.
          </p>
          <button
            onClick={() => setStatus("idle")}
            className="mt-8 rounded-full border border-brand-teal px-6 py-2 text-sm font-semibold text-brand-teal hover:bg-brand-teal hover:text-white transition-all"
          >
            Send Another Enquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <h3 className="text-xl font-bold text-gray-900 md:text-2xl font-display">Send a Corporate Enquiry</h3>
            <p className="text-xs text-gray-500 mt-1 leading-normal">
              Request a physical sample, digital catalog, or custom quote for bulk requirements.
            </p>
          </div>
          
          {status === "error" && (
            <div className="rounded-lg bg-red-50 p-3 text-xs font-semibold text-red-600 border border-red-100">
              {errorMessage}
            </div>
          )}

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="block text-xs font-bold text-gray-700 uppercase tracking-wider">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="mt-2 block w-full rounded-lg border border-gray-200 px-4 py-3 text-sm hover:border-gray-300 focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20 focus:outline-none transition-all duration-300"
                placeholder="e.g. Prabhjot Singh"
              />
            </div>
            
            <div>
              <label htmlFor="company" className="block text-xs font-bold text-gray-700 uppercase tracking-wider">
                Company Name *
              </label>
              <input
                type="text"
                id="company"
                name="company"
                required
                value={formData.company}
                onChange={handleChange}
                className="mt-2 block w-full rounded-lg border border-gray-200 px-4 py-3 text-sm hover:border-gray-300 focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20 focus:outline-none transition-all duration-300"
                placeholder="e.g. Sonavi Enterprises"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="email" className="block text-xs font-bold text-gray-700 uppercase tracking-wider">
                Work Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="mt-2 block w-full rounded-lg border border-gray-200 px-4 py-3 text-sm hover:border-gray-300 focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20 focus:outline-none transition-all duration-300"
                placeholder="e.g. name@company.com"
              />
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-xs font-bold text-gray-700 uppercase tracking-wider">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="mt-2 block w-full rounded-lg border border-gray-200 px-4 py-3 text-sm hover:border-gray-300 focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20 focus:outline-none transition-all duration-300"
                placeholder="e.g. +91 98110 00000"
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-xs font-bold text-gray-700 uppercase tracking-wider">
              Gifting Details / Requirements *
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="mt-2 block w-full rounded-lg border border-gray-200 px-4 py-3 text-sm hover:border-gray-300 focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20 focus:outline-none resize-none transition-all duration-300"
              placeholder="Describe your requirement (e.g., 'Need 200 customized copper dinner sets engraved with our company logo by Diwali')"
            />
          </div>

          <button
            type="submit"
            disabled={status === "submitting"}
            className="flex w-full items-center justify-center rounded-lg bg-brand-orange py-3.5 px-6 text-sm font-bold text-white shadow-sm transition-all duration-300 hover:bg-brand-orange/90 hover:scale-[1.01] hover:shadow-md active:scale-95 disabled:bg-gray-300 cursor-pointer"
          >
            {status === "submitting" ? (
              <span className="flex items-center space-x-2">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                <span>Processing...</span>
              </span>
            ) : (
              <span className="flex items-center space-x-2">
                <Send className="h-4 w-4" />
                <span>Send Enquiry</span>
              </span>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
