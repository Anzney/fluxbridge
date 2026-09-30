"use client";
import { useState } from "react";
import Navbar from "@/components/landing/navbar";

const countryCodes = [
  { country: "Afghanistan", code: "+93" },
  { country: "Albania", code: "+355" },
  { country: "Algeria", code: "+213" },
  { country: "Andorra", code: "+376" },
  { country: "Angola", code: "+244" },
  { country: "Argentina", code: "+54" },
  { country: "Australia", code: "+61" },
  { country: "Austria", code: "+43" },
  { country: "Bahrain", code: "+973" },
  { country: "Bangladesh", code: "+880" },
  { country: "Belgium", code: "+32" },
  { country: "Brazil", code: "+55" },
  { country: "Canada", code: "+1" },
  { country: "China", code: "+86" },
  { country: "Denmark", code: "+45" },
  { country: "Egypt", code: "+20" },
  { country: "France", code: "+33" },
  { country: "Germany", code: "+49" },
  { country: "India", code: "+91" },
  { country: "Indonesia", code: "+62" },
  { country: "Iraq", code: "+964" },
  { country: "Ireland", code: "+353" },
  { country: "Italy", code: "+39" },
  { country: "Japan", code: "+81" },
  { country: "Jordan", code: "+962" },
  { country: "Kenya", code: "+254" },
  { country: "Kuwait", code: "+965" },
  { country: "Lebanon", code: "+961" },
  { country: "Malaysia", code: "+60" },
  { country: "Maldives", code: "+960" },
  { country: "Mexico", code: "+52" },
  { country: "Morocco", code: "+212" },
  { country: "Nepal", code: "+977" },
  { country: "Netherlands", code: "+31" },
  { country: "New Zealand", code: "+64" },
  { country: "Nigeria", code: "+234" },
  { country: "Norway", code: "+47" },
  { country: "Oman", code: "+968" },
  { country: "Pakistan", code: "+92" },
  { country: "Philippines", code: "+63" },
  { country: "Poland", code: "+48" },
  { country: "Portugal", code: "+351" },
  { country: "Qatar", code: "+974" },
  { country: "Romania", code: "+40" },
  { country: "Russia", code: "+7" },
  { country: "Saudi Arabia", code: "+966" },
  { country: "Singapore", code: "+65" },
  { country: "South Africa", code: "+27" },
  { country: "South Korea", code: "+82" },
  { country: "Spain", code: "+34" },
  { country: "Sri Lanka", code: "+94" },
  { country: "Sweden", code: "+46" },
  { country: "Switzerland", code: "+41" },
  { country: "Thailand", code: "+66" },
  { country: "Turkey", code: "+90" },
  { country: "Ukraine", code: "+380" },
  { country: "United Arab Emirates", code: "+971" },
  { country: "United Kingdom", code: "+44" },
  { country: "United States", code: "+1" },
  { country: "Vietnam", code: "+84" },
  { country: "Yemen", code: "+967" },
  { country: "Zambia", code: "+260" },
  { country: "Zimbabwe", code: "+263" },
];

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbzlUKCcqW9BLtHY73W00QPA2l3c9FQGttJxMgnkmP6G8HQFWRQnA6UUDDEtM5ZUwjvn/exec";

export default function CareersPage() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    setStatus("Uploading...");

    const form = event.currentTarget;
    const fileInput = form.querySelector('input[name="resume"]');
    const file = fileInput?.files?.[0];

    if (!file) {
      setStatus("Please select your resume.");
      return;
    }

    const reader = new FileReader();

    reader.onload = async () => {
      const base64File = reader.result.split(",")[1];

      const formData = new FormData(form);

      const data = {
        name: formData.get("name"),
        countryCode: formData.get("countryCode"),
        phone: formData.get("phone"),
        email: formData.get("email"),
        place: formData.get("place") || "",
        experienceYears: formData.get("experienceYears") || "",
        experienceMonths: formData.get("experienceMonths") || "",
        fileName: file.name,
        fileType: file.type,
        fileData: base64File,
      };

      try {
        await fetch(GOOGLE_SCRIPT_URL, {
          method: "POST",
          mode: "no-cors",
          body: JSON.stringify(data),
        });

        setStatus("Application submitted successfully.");
        form.reset();

        setTimeout(() => {
          document.getElementById("success-message")?.scrollIntoView({
            behavior: "smooth",
            block: "center",
          });
        }, 100);
      } catch (error) {
        console.error(error);
        setStatus("Something went wrong. Please try again.");
      }
    };

    reader.readAsDataURL(file);
  };

  return (
    <div>
      <Navbar />

      <main className="min-h-screen bg-[radial-gradient(circle_at_75%_35%,rgba(0,59,150,0.30),transparent_35%),radial-gradient(circle_at_20%_80%,rgba(158,27,30,0.20),transparent_30%)] text-white">

        <section className="relative overflow-hidden border-t border-white/10">
          <div className="mx-auto max-w-[1500px] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">

            <div className="mx-auto max-w-3xl">


              <h1 className="text-5xl font-medium tracking-[-0.05em] sm:text-6xl lg:text-8xl">
                Build your
                <br />
                <span className="text-white/40">
                  future with us.
                </span>
              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-white/55">
                Tell us about yourself and share your resume with our team.
              </p>

              <form
                  onSubmit={handleSubmit}
                  className="mt-16 space-y-8"
                >

                {/* NAME */}
                <div>
                  <label className="mb-3 block text-sm text-white">
                    Full Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your full name"
                    className="w-full border-b border-white/20 bg-transparent px-0 py-4 text-white outline-none transition-colors placeholder:text-white/25 focus:border-[#00A8FF]"
                  />
                </div>

                {/* PHONE */}
                <div>
                  <label className="mb-3 block text-sm text-white">
                    Phone Number
                  </label>

                  <div className="flex gap-4">

                <select
                    name="countryCode"
                    defaultValue="+966"
                    className="w-48 border-b border-white/20 bg-transparent px-2 py-4 text-white/60 outline-none transition-all focus:border-[#00A8FF]"
                    >
                    {countryCodes.map((country) => (
                        <option
                            key={`${country.country}-${country.code}`}
                            value={country.code}
                            className="bg-black/70 text-white"
                            >
                            {country.country} ({country.code})
                        </option>
                    ))}
                    </select>

                    <input
                      type="tel"
                      name="phone"
                      placeholder="Enter your phone number"
                      className="flex-1 border-b border-white/20 bg-transparent px-0 py-4 text-white outline-none transition-colors placeholder:text-white/25 focus:border-[#00A8FF]"
                    />

                  </div>
                </div>

                {/* EMAIL */}
                <div>
                  <label className="mb-3 block text-sm text-white">
                    Email Address
                  </label>

                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email address"
                    className="w-full border-b border-white/20 bg-transparent px-0 py-4 text-white outline-none transition-colors placeholder:text-white/25 focus:border-[#00A8FF]"
                  />
                </div>


                {/* EXPERIENCE */}
                <div>
                  <label className="mb-3 block text-sm text-white">
                    Years of Experience
                  </label>

                  <div className="flex gap-4">
                    <input
                      type="number"
                      name="experienceYears"
                      min="0"
                      max="50"
                      placeholder="Years"
                      className="flex-1 border-b border-white/20 bg-transparent px-0 py-4 text-white outline-none transition-colors placeholder:text-white/25 focus:border-[#00A8FF]"
                    />

                    <input
                      type="number"
                      name="experienceMonths"
                      min="0"
                      max="11"
                      placeholder="Months"
                      className="flex-1 border-b border-white/20 bg-transparent px-0 py-4 text-white outline-none transition-colors placeholder:text-white/25 focus:border-[#00A8FF]"
                    />
                  </div>
                </div>


                {/* PLACE */}

                <div>
                  <label className="mb-3 block text-sm text-white">
                    Place
                  </label>

                  <input
                    type="text"
                    name="place"
                    placeholder="Enter your city / location"
                    className="w-full border-b border-white/20 bg-transparent px-0 py-4 text-white outline-none transition-colors placeholder:text-white/25 focus:border-[#00A8FF]"
                  />
                </div>

                {/* RESUME */}
                <div>
                  <label className="mb-3 block text-sm text-white/60">
                    Resume
                  </label>

                  <div className="rounded-xl border border-dashed border-white/20 bg-white/[0.02] p-8 transition-colors hover:border-[#00A8FF]/50">

                    <input
                      type="file"
                      name="resume"
                      accept=".pdf,.doc,.docx"
                      className="w-full text-sm text-white/50 file:mr-4 file:rounded-full file:border-0 file:bg-white file:px-5 file:py-2.5 file:text-sm file:font-medium file:text-[#07111f] hover:file:bg-[#00A8FF] hover:file:text-white"
                    />

                    <p className="mt-3 text-xs text-white/30">
                      PDF, DOC or DOCX
                    </p>

                  </div>
                </div>

                {/* BUTTON */}
                <button
                  type="submit"
                  className="mt-6 inline-flex rounded-full bg-white px-8 py-4 text-sm font-semibold text-[#07111f] transition-all duration-300 hover:bg-[#00A8FF] hover:text-white"
                >
                  Submit Application
                </button>

                {status && (
                  <div
                    id="success-message"
                    className={`mt-6 rounded-xl border px-6 py-5 text-center ${
                      status === "Application submitted successfully."
                        ? "border-green-500/30 bg-green-500/10 text-green-400"
                        : "border-red-500/30 bg-red-500/10 text-red-400"
                    }`}
                  >
                    {status === "Application submitted successfully." ? (
                      <>
                        <p className="text-lg font-medium">
                          ✓ Application Submitted Successfully
                        </p>
                        <p className="mt-1 text-sm text-green-400/70">
                          Thank you for applying. Your resume has been received.
                        </p>
                      </>
                    ) : (
                      <p className="text-sm">{status}</p>
                    )}
                  </div>
                )}

              </form>

            </div>

          </div>
        </section>

      </main>
    </div>
  );
}