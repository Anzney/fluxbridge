"use client";

import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";

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
      className="relative overflow-hidden bg-[#07111f] text-white"
    >
      {/* Background atmosphere */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-10%] top-[20%] h-[500px] w-[500px] rounded-full bg-[#003b96]/15 blur-[180px]" />

        <div className="absolute right-[-10%] top-[40%] h-[500px] w-[500px] rounded-full bg-[#9e1b1e]/10 blur-[180px]" />

        <div className="absolute bottom-[-250px] left-1/2 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-[#003b96]/10 blur-[180px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1500px] px-6 py-24 sm:px-10 sm:py-32 lg:px-16 lg:py-40">

        {/* HEADER */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">

            <div>
              <p className="mb-6 text-xs font-semibold uppercase tracking-[0.28em] text-white/35">
                12 — Contact
              </p>

              <h2 className="max-w-5xl text-[clamp(3.2rem,7.5vw,7.5rem)] font-semibold leading-[0.84] tracking-[-0.06em]">
                Let&apos;s start
                <br />
                <span className="text-white/35">
                  a conversation.
                </span>
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-6 text-white/45 lg:pb-2 lg:text-right">
              Tell us what you need. Whether you are looking for talent,
              HR solutions or strategic support, our team is ready to help.
            </p>

          </div>
        </div>

        {/* CONTACT CONTENT */}
        <div className="mt-16 grid gap-6 lg:mt-24 lg:grid-cols-[0.75fr_1.25fr]">

          {/* LEFT INFORMATION */}
          <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.025] p-7 sm:p-10 lg:p-12">

            <div className="relative z-10 flex h-full flex-col">

              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-white/30">
                  Get in touch
                </p>

                <h3 className="mt-5 max-w-md text-3xl font-medium leading-tight tracking-[-0.04em] sm:text-4xl">
                  Let&apos;s build something meaningful together.
                </h3>

                <p className="mt-6 max-w-md text-sm leading-6 text-white/40">
                  Share your requirements with us and our team will connect
                  with you shortly.
                </p>
              </div>

              {/* Contact details */}
              <div className="mt-14 space-y-7">

                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.04]">
                    <Mail size={17} className="text-white/60" />
                  </div>

                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-white/25">
                      Email
                    </p>

                    <p className="mt-2 text-sm text-white/65">
                      info@fluxbridge360.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.04]">
                    <Phone size={17} className="text-white/60" />
                  </div>

                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-white/25">
                      Phone
                    </p>

                    <p className="mt-2 text-sm text-white/65">
                      +966 11 000 0000
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.04]">
                    <MapPin size={17} className="text-white/60" />
                  </div>

                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-white/25">
                      Headquarters
                    </p>

                    <p className="mt-2 max-w-xs text-sm leading-6 text-white/65">
                      Riyadh, Kingdom of Saudi Arabia
                    </p>
                  </div>
                </div>

              </div>

              {/* Bottom label */}
              <div className="mt-auto pt-16">
                <div className="border-t border-white/10 pt-6">
                  <p className="text-xs uppercase tracking-[0.2em] text-white/25">
                    Connecting Talent
                  </p>

                  <p className="mt-2 text-sm text-white/35">
                    Building Future.
                  </p>
                </div>
              </div>

            </div>

            {/* Glow */}
            <div className="pointer-events-none absolute bottom-[-100px] right-[-100px] h-[300px] w-[300px] rounded-full bg-[#003b96]/20 blur-[100px]" />

          </div>

          {/* FORM */}
          <div className="rounded-[32px] border border-white/10 bg-white/[0.035] p-6 sm:p-10 lg:p-12">

            {/* Success */}
            {submitted && (
              <div className="mb-8 rounded-2xl border border-green-400/20 bg-green-400/10 p-5 text-center text-sm text-green-300">
                Thank you! Your message has been sent successfully.
              </div>
            )}

            {/* Error */}
            {error && (
              <div className="mb-8 rounded-2xl border border-red-400/20 bg-red-400/10 p-5 text-center text-sm text-red-300">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-7">

              {/* Name + Email */}
              <div className="grid gap-7 md:grid-cols-2">

                <div>
                  <label className="mb-3 block text-xs uppercase tracking-[0.15em] text-white/40">
                    Full Name *
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="w-full border-b border-white/15 bg-transparent px-0 py-4 text-sm text-white outline-none placeholder:text-white/20 transition-colors focus:border-[#3764ff]"
                  />
                </div>

                <div>
                  <label className="mb-3 block text-xs uppercase tracking-[0.15em] text-white/40">
                    Email *
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="you@company.com"
                    className="w-full border-b border-white/15 bg-transparent px-0 py-4 text-sm text-white outline-none placeholder:text-white/20 transition-colors focus:border-[#3764ff]"
                  />
                </div>

              </div>

              {/* Phone + Company */}
              <div className="grid gap-7 md:grid-cols-2">

                <div>
                  <label className="mb-3 block text-xs uppercase tracking-[0.15em] text-white/40">
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
                    containerClass="!w-full"
                    inputClass="!w-full !h-[52px] !rounded-none !border-0 !border-b !border-white/15 !bg-transparent !pl-[52px] !text-sm !text-white !outline-none"
                    buttonClass="!border-0 !border-b !border-white/15 !bg-transparent !rounded-none"
                    dropdownClass="!bg-[#07111f] !text-white"
                  />
                </div>

                <div>
                  <label className="mb-3 block text-xs uppercase tracking-[0.15em] text-white/40">
                    Company
                  </label>

                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Company name"
                    className="w-full border-b border-white/15 bg-transparent px-0 py-4 text-sm text-white outline-none placeholder:text-white/20 transition-colors focus:border-[#3764ff]"
                  />
                </div>

              </div>

              {/* Service */}
              <div>
                <label className="mb-3 block text-xs uppercase tracking-[0.15em] text-white/40">
                  What can we help you with?
                </label>

                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full border-b border-white/15 bg-transparent px-0 py-4 text-sm text-white outline-none transition-colors focus:border-[#3764ff]"
                >
                  <option value="" className="bg-[#07111f]">
                    Select a service
                  </option>

                  <option
                    value="Executive Search"
                    className="bg-[#07111f]"
                  >
                    Executive Search
                  </option>

                  <option
                    value="Recruitment"
                    className="bg-[#07111f]"
                  >
                    Recruitment
                  </option>

                  <option
                    value="HR Consulting"
                    className="bg-[#07111f]"
                  >
                    HR Consulting
                  </option>

                  <option
                    value="HR Outsourcing"
                    className="bg-[#07111f]"
                  >
                    HR Outsourcing
                  </option>

                  <option
                    value="Digital HR"
                    className="bg-[#07111f]"
                  >
                    Digital HR
                  </option>

                  <option
                    value="Other"
                    className="bg-[#07111f]"
                  >
                    Other
                  </option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="mb-3 block text-xs uppercase tracking-[0.15em] text-white/40">
                  Message *
                </label>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell us about your requirements..."
                  className="w-full resize-none border-b border-white/15 bg-transparent px-0 py-4 text-sm text-white outline-none placeholder:text-white/20 transition-colors focus:border-[#3764ff]"
                />
              </div>

              {/* Submit */}
              <div className="flex items-center justify-between gap-6 pt-4">

                <p className="hidden max-w-xs text-xs leading-5 text-white/25 sm:block">
                  By submitting this form, your enquiry will be sent directly
                  to our team.
                </p>

                <button
                  type="submit"
                  disabled={sending}
                  className="group inline-flex shrink-0 items-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-semibold text-[#07111f] transition-all duration-300 hover:bg-[#3764ff] hover:text-white disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {sending ? "Sending..." : "Send Message"}

                  {!sending && (
                    <ArrowUpRight
                      size={18}
                      className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                    />
                  )}
                </button>

              </div>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;