"use client";

import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });

  

  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSending(true);
    setSubmitted(false);
    setError("");

    try {

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Failed to send message.");
      }

      setSubmitted(true);

      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        message: "",
      });

    } catch (error) {
      console.error("Contact form error:", error);
      setError(
        error.message || "Something went wrong. Please try again."
      );
    } finally {
      setSending(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative z-10 w-full px-4 py-24 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-5xl">

        {/* Heading */}
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.25em] text-blue-400">
            Get In Touch
          </p>

          <h2 className="text-4xl font-light text-white sm:text-5xl">
            Let&apos;s Start a Conversation
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-white/70">
            Tell us how we can help your organization. Our team will get back
            to you shortly.
          </p>
        </div>

        {/* Form */}
        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-md sm:p-10">

          {/* Success message */}
          {submitted && (
            <div className="mb-8 rounded-xl border border-green-400/20 bg-green-400/10 p-4 text-center text-green-300">
              Thank you! Your message has been sent successfully.
            </div>
          )}

          {/* Error message */}
          {error && (
            <div className="mb-8 rounded-xl border border-red-400/20 bg-red-400/10 p-4 text-center text-red-300">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">

            {/* Name + Email */}
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm text-white/80">
                  Full Name *
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your name"
                  className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition focus:border-blue-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-white/80">
                  Email *
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email"
                  className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition focus:border-blue-500"
                />
              </div>
            </div>

            {/* Phone + Company */}
            <div className="grid gap-6 md:grid-cols-2">

              {/* Phone Number */}
              <div>
                <label className="mb-2 block text-sm text-white/80">
                  Phone Number
                </label>

                <PhoneInput
  country="sa"
  value={formData.phone}
  onChange={(phone) =>
    setFormData((prev) => ({
      ...prev,
      phone: phone ? `+${phone}` : "",
    }))
  }
  enableSearch={true}
  countryCodeEditable={false}
  placeholder="Enter phone number"
  inputClass="!w-full !h-[48px] !rounded-xl !bg-black/30 !border-white/10 !text-white"
  buttonClass="!rounded-l-xl !bg-black/30 !border-white/10"
  dropdownClass="!bg-gray-900 !text-white"
/>
              </div>

              {/* Company */}
              <div>
                <label className="mb-2 block text-sm text-white/80">
                  Company
                </label>

                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Company name"
                  className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition focus:border-blue-500"
                />
              </div>
            </div>

            {/* Service */}
            <div>
              <label className="mb-2 block text-sm text-white/80">
                What can we help you with?
              </label>

              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition focus:border-blue-500"
              >
                <option value="" className="bg-gray-900">
                  Select a service
                </option>

                <option value="Executive Search" className="bg-gray-900">
                  Executive Search
                </option>

                <option value="Recruitment" className="bg-gray-900">
                  Recruitment
                </option>

                <option value="HR Consulting" className="bg-gray-900">
                  HR Consulting
                </option>

                <option value="HR Outsourcing" className="bg-gray-900">
                  HR Outsourcing
                </option>

                <option value="Digital HR" className="bg-gray-900">
                  Digital HR
                </option>

                <option value="Other" className="bg-gray-900">
                  Other
                </option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label className="mb-2 block text-sm text-white/80">
                Message *
              </label>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                placeholder="Tell us about your requirements..."
                className="w-full resize-none rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition focus:border-blue-500"
              />
            </div>

            {/* Submit */}
            <div className="flex justify-center pt-2">
              <button
                type="submit"
                disabled={sending}
                className="rounded-full bg-blue-600 px-10 py-4 font-medium text-white transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {sending ? "Sending..." : "Send Message"}
              </button>
            </div>

          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;