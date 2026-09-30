"use client";

import { useState } from "react";
import { ArrowRight, Mail, MapPin, Phone, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/landing/navbar";
import Footer from "@/components/landing/footer";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");

        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          service: "",
          message: "",
        });
      } else {
        setStatus(data.error || "Something went wrong.");
      }
    } catch (error) {
      setStatus("Unable to send your message. Please try again.");
    }
  };

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_75%_35%,rgba(0,59,150,0.30),transparent_35%),radial-gradient(circle_at_20%_80%,rgba(158,27,30,0.20),transparent_30%)] text-white">
      <Navbar />

      

      {/* CONTACT AREA */}
      <section className="py-28 lg:py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-[0.7fr_1.3fr] gap-16 lg:gap-24">
            {/* CONTACT INFO */}
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-[#9E1B1E] mb-6">
                Get In Touch
              </p>

              <h2 className="text-4xl md:text-5xl font-light leading-tight">
                Tell us how
                <br />
                <span className="text-white/40">we can help.</span>
              </h2>

              <p className="mt-8 text-white/50 text-lg leading-relaxed max-w-md">
                Whether you are looking for talent, HR solutions, consulting,
                technology, or business support, we would like to hear from
                you.
              </p>

              <div className="mt-12 space-y-7">
                <div className="flex gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/10">
                    <Mail size={19} />
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-white/30">
                      Email
                    </p>

                    <a
                      href="mailto:info@fluxbridge360.com"
                      className="mt-2 block text-white/70 hover:text-white transition"
                    >
                      info@fluxbridge360.com
                    </a>
                  </div>
                </div>

                <div className="flex gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/10">
                    <Phone size={19} />
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-white/30">
                      Phone
                    </p>

                    <a
                      href="tel:+966110000000"
                      className="mt-2 block text-white/70 hover:text-white transition"
                    >
                      +966 11 000 0000
                    </a>
                  </div>
                </div>

                <div className="flex gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/10">
                    <MapPin size={19} />
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-white/30">
                      Headquarters
                    </p>

                    <p className="mt-2 text-white/70">
                      Riyadh, Saudi Arabia
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* FORM */}
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.025] p-7 md:p-10 lg:p-12">
              <div className="mb-10">
                <p className="text-xs uppercase tracking-[0.2em] text-white/30">
                  Send an enquiry
                </p>

                <h3 className="mt-3 text-3xl md:text-4xl font-light">
                  How can we help?
                </h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4 text-white placeholder:text-white/30 outline-none focus:border-[#003B96] transition"
                  />

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email address"
                    required
                    className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4 text-white placeholder:text-white/30 outline-none focus:border-[#003B96] transition"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone number"
                    className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4 text-white placeholder:text-white/30 outline-none focus:border-[#003B96] transition"
                  />

                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Company"
                    className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4 text-white placeholder:text-white/30 outline-none focus:border-[#003B96] transition"
                  />
                </div>

                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-white/10 bg-[#0b1524] px-5 py-4 text-white/70 outline-none focus:border-[#003B96] transition"
                >
                  <option value="">Select a service</option>
                  <option value="Talent Acquisition">
                    Talent Acquisition
                  </option>
                  <option value="HR Consulting">
                    HR Consulting
                  </option>
                  <option value="HR Technology">
                    HR Technology
                  </option>
                  <option value="Business Consulting">
                    Business Consulting
                  </option>
                  <option value="Other">Other</option>
                </select>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your requirements..."
                  rows={6}
                  required
                  className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4 text-white placeholder:text-white/30 outline-none focus:border-[#003B96] transition"
                />

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-white px-7 py-4 font-semibold text-[#050b14] hover:bg-[#003B96] hover:text-white transition disabled:opacity-50"
                >
                  {status === "sending"
                    ? "Sending..."
                    : "Send enquiry"}

                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </button>

                {status === "success" && (
                  <div className="flex items-center gap-3 rounded-xl border border-green-500/20 bg-green-500/10 px-5 py-4 text-green-300">
                    <CheckCircle2 size={20} />
                    <span>
                      Thank you. Your enquiry has been sent successfully.
                    </span>
                  </div>
                )}

                {status &&
                  status !== "success" &&
                  status !== "sending" && (
                    <div className="rounded-xl border border-red-500/20 bg-red-500/10 px-5 py-4 text-red-300">
                      {status}
                    </div>
                  )}
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
  
}

