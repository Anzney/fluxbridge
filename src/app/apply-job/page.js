"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/landing/navbar";
import { supabase } from "@/lib/supabase";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export default function ApplyJobPage() {
  const [successMessage, setSuccessMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [applicationForm, setApplicationForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    experience: "",
    place: "",
    cv: null,
  });


const [jobId, setJobId] = useState("");
const [job, setJob] = useState(null);

const GOOGLE_APPS_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbw9ykqo6zO6aaz8qLfW0W9geftD2F5HgFK7I6Hx7A-j-z9MhdCU3KEtS1leOooxVGB9hg/exec";


useEffect(() => {
  const loadJob = async () => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("job");

    if (!id) return;

    setJobId(id);

    const { data, error } = await supabase
      .from("jobs")
      .select("*")
      .eq("job_id", id)
      .single();

    if (error) {
      console.error("Error loading job:", error);
      return;
    }

    setJob(data);
  };

  loadJob();
}, []);


const handleApplicationSubmit = async (e) => {
  e.preventDefault();

  if (!applicationForm.cv) {
    alert("Please upload your CV.");
    return;
  }

  setIsSubmitting(true);
  setSuccessMessage("");

  try {
    const file = applicationForm.cv;

    const reader = new FileReader();

    reader.onload = async () => {
      try {
        const base64Data = reader.result.split(",")[1];

        const payload = {
          jobId: jobId,
          fullName: applicationForm.fullName,
          email: applicationForm.email,
          phone: applicationForm.phone,
          experience: applicationForm.experience,
          place: applicationForm.place,
          fileName: file.name,
          mimeType: file.type,
          fileData: base64Data,
        };

        await fetch(GOOGLE_APPS_SCRIPT_URL, {
          method: "POST",
          mode: "no-cors",
          body: JSON.stringify(payload),
        });

        // Show success message
        setSuccessMessage("Application submitted successfully!");

        // Clear form
        setApplicationForm({
          fullName: "",
          email: "",
          phone: "",
          experience: "",
          place: "",
          cv: null,
        });

        setIsSubmitting(false);

        // Wait for success message to render, then scroll to top
        setTimeout(() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }, 100);

      } catch (error) {
        console.error("Application error:", error);
        setIsSubmitting(false);
        alert("Something went wrong. Please try again.");
      }
    };

    reader.onerror = () => {
      setIsSubmitting(false);
      alert("Unable to read the CV file. Please try again.");
    };

    reader.readAsDataURL(file);

  } catch (error) {
    console.error("Application error:", error);
    setIsSubmitting(false);
    alert("Something went wrong. Please try again.");
  }
};

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[radial-gradient(circle_at_75%_35%,rgba(0,59,150,0.30),transparent_35%),radial-gradient(circle_at_20%_80%,rgba(158,27,30,0.20),transparent_30%)] px-6 py-24 text-white">
        <div className="mx-auto max-w-3xl">

          <h1 className="mt-4 text-4xl font-medium">
            Apply for this Job
          </h1>

          

          {job && (
            <div className="mt-6 rounded-xl border border-white/10 bg-white/[0.03] p-5">
              <p className="text-xs uppercase tracking-[0.2em] text-white/40">
                Applying For
              </p>

              <h2 className="mt-2 text-xl font-medium">
                {job.job_title}
              </h2>

              <div className="mt-3 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/50">
                <span>
                  Job ID: {job.job_id}
                </span>

                <span>
                  {job.hide_company
                    ? ""
                    : job.company_name || "Company"}
                </span>

                <span>
                  {job.city || job.job_location || "Location not specified"}
                </span>
              </div>
            </div>
          )}


          {successMessage && (
            <div className="mt-8 rounded-xl border border-green-500/30 bg-green-500/10 px-5 py-4 text-center text-green-400">
              {successMessage}
            </div>
          )}

          <form
              onSubmit={handleApplicationSubmit}
              className="mt-10 space-y-6"
            >

            {/* Full Name */}
            <div>
              <label className="mb-2 block text-sm text-white/70">
                Full Name
              </label>

              <input
                type="text"
                value={applicationForm.fullName}
                onChange={(e) =>
                  setApplicationForm({
                    ...applicationForm,
                    fullName: e.target.value,
                  })
                }
                placeholder="Enter your full name"
                className="w-full rounded-lg border border-white/10 bg-white/[0.05] px-4 py-3 text-white outline-none placeholder:text-white/30 focus:border-[#9E1B1E]"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="mb-2 block text-sm text-white/70">
                Email
              </label>

              <input
                type="email"
                value={applicationForm.email}
                onChange={(e) =>
                  setApplicationForm({
                    ...applicationForm,
                    email: e.target.value,
                  })
                }
                placeholder="Enter your email"
                className="w-full rounded-lg border border-white/10 bg-white/[0.05] px-4 py-3 text-white outline-none placeholder:text-white/30 focus:border-[#9E1B1E]"
                required
              />
            </div>

            {/* Phone */}
            <div>
              <label className="mb-2 block text-sm text-white/70">
                Phone Number
              </label>

              <PhoneInput
                country="sa"
                value={applicationForm.phone}
                onChange={(phone) =>
                  setApplicationForm({
                    ...applicationForm,
                    phone,
                  })
                }
                enableSearch={true}
                countryCodeEditable={false}
                inputProps={{
                  name: "phone",
                  required: true,
                }}
                containerClass="w-full"
                inputClass="!w-full !h-[48px] !rounded-lg !border-white/10 !bg-white/[0.05] !text-white !pl-[48px]"
                buttonClass="!rounded-l-lg !border-white/10 !bg-white/[0.05]"
                dropdownClass="!bg-[#07111f] !text-white"
              />
            </div>

            {/* Year of Experience */}
            <div>
              <label className="mb-2 block text-sm text-white/70">
                Year of Experience
              </label>

              <input
                type="number"
                min="0"
                value={applicationForm.experience}
                onChange={(e) =>
                  setApplicationForm({
                    ...applicationForm,
                    experience: e.target.value,
                  })
                }
                placeholder="e.g. 3"
                className="w-full rounded-lg border border-white/10 bg-white/[0.05] px-4 py-3 text-white outline-none placeholder:text-white/30 focus:border-[#9E1B1E]"
                required
              />
            </div>

            {/* Place */}
            <div>
              <label className="mb-2 block text-sm text-white/70">
                Location
              </label>

              <input
                type="text"
                value={applicationForm.place}
                onChange={(e) =>
                  setApplicationForm({
                    ...applicationForm,
                    place: e.target.value,
                  })
                }
                placeholder="Enter your current location"
                className="w-full rounded-lg border border-white/10 bg-white/[0.05] px-4 py-3 text-white outline-none placeholder:text-white/30 focus:border-[#9E1B1E]"
                required
              />
            </div>

            {/* Upload CV */}
            <div>
              <label className="mb-2 block text-sm text-white/70">
                Upload CV
              </label>

              <input
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={(e) =>
                  setApplicationForm({
                    ...applicationForm,
                    cv: e.target.files[0],
                  })
                }
                className="w-full rounded-lg border border-white/10 bg-white/[0.05] px-4 py-3 text-sm text-white file:mr-4 file:rounded-md file:border-0 file:bg-[#9E1B1E] file:px-4 file:py-2 file:text-white"
                required
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-lg bg-[#9E1B1E] px-6 py-3 font-medium text-white transition hover:bg-[#002b76] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSubmitting ? "Submitting Application..." : "Submit Application"}
            </button>

          </form>
        </div>
      </main>
    </>
  );
}