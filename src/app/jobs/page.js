"use client";

import { useEffect, useState } from "react";
import {
  MapPin,
  Wallet,
  Users,
  House,
  Briefcase,
} from "lucide-react";
import { supabase } from "@/lib/supabase";
import Navbar from "@/components/landing/navbar";
import Footer from "@/components/landing/footer";

export default function JobsPage() {
  const [jobs, setJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);

  useEffect(() => {
    loadJobs();
  }, []);

  async function loadJobs() {
    const { data, error } = await supabase
      .from("jobs")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Error loading jobs:", error);
      return;
    }

    setJobs(data || []);
  }

  return (
    <>
    <Navbar />
    <main className="min-h-screen bg-[radial-gradient(circle_at_75%_35%,rgba(0,59,150,0.30),transparent_35%),radial-gradient(circle_at_20%_80%,rgba(158,27,30,0.20),transparent_30%)] px-6 py-24 text-white">
      <div className="mx-auto max-w-6xl">

        {/* Page Header */}

        <h1 className="mt-4 text-5xl font-medium">
          Find Your Next Opportunity
        </h1>

        <p className="mt-4 text-white/50">
          Explore the latest opportunities available through FluxBridge 360.
        </p>

        {/* Jobs */}
        <div className="mt-12 space-y-4">

          {jobs.length === 0 ? (
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-10 text-center">
              <h2 className="text-xl font-medium">
                No jobs available
              </h2>

              <p className="mt-2 text-white/50">
                New opportunities will appear here.
              </p>
            </div>
          ) : (
            jobs.map((job) => (
              <div
                key={job.id}
                className="rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-5 transition hover:border-white/20 hover:bg-white/[0.05]"
              >

                {/* Top Row */}
                <div className="flex items-start justify-between gap-6">

                  {/* Left Side */}
                  <div className="min-w-0 flex-1">

                    {/* Job Title + Employment Type */}
                    <div className="flex flex-wrap items-center gap-3">

                      <div className="flex flex-wrap items-center gap-3">
                        <h2 className="text-2xl font-medium">
                          {job.job_title}
                        </h2>

                        <span className="rounded-full bg-[#9E1B1E]/20 px-3 py-1 text-xs text-[#ff8b8f]">
                          {job.job_id || "No Job ID"}
                        </span>
                      </div>

                      <span className="whitespace-nowrap rounded-full bg-[#003B96]/30 px-3 py-1 text-xs text-blue-200">
                        {job.employment_type || "Full Time"}
                      </span>

                    </div>

                    {/* Company */}
                    <p className="mt-2 text-sm text-white/60">
                      {job.hide_company
                        ? ""
                        : job.company_name || "Company"}
                    </p>

                    {/* Job Information */}
                    <div className="mt-5 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-white/60">

                    <span className="flex items-center gap-2">
                    <MapPin size={16} className="shrink-0 text-[#A2C2F8]" />
                    {job.city || job.location || "Location not specified"}
                    </span>

                    <span className="flex items-center gap-2">
                    <Wallet size={16} className="shrink-0 text-[#A2C2F8]" />
                    {job.salary_range || "Salary not specified"} SAR
                    </span>

                    <span className="flex items-center gap-2">
                    <Users size={16} className="shrink-0 text-[#A2C2F8]" />
                    {job.vacancies || 1} Vacancies
                    </span>

                    <span className="flex items-center gap-2">
                    <House size={16} className="shrink-0 text-[#A2C2F8]" />
                    Work From Home: {job.work_from_home === "Yes" ? "Yes" : "No"}
                    </span>
                    
                    <span className="flex items-center gap-2">
                    <Briefcase
                      size={16}
                      className="shrink-0 text-[#A2C2F8]"
                    />
                    Experience:{" "}
                    {job.requirements?.Experience || "Not specified"}
                  </span>

                    </div>

                  </div>

                  {/* Apply Job Button */}
                  <div className="shrink-0">

                    <button
                      type="button"
                      onClick={() => setSelectedJob(job)}
                      className="rounded-lg bg-white/16 px-6 py-3 text-sm font-medium mt-5 text-white border-white transition hover:bg-[#002b76]"
                    >
                      Apply Job
                    </button>

                  </div>

                </div>

              </div>
            ))
          )}

        </div>
      </div>

      {/* Full Job Details */}
      {selectedJob && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 px-4 py-10 backdrop-blur-sm">

          <div className="mx-auto max-w-4xl rounded-2xl border border-white/10 bg-[radial-gradient(circle_at_75%_35%,rgba(0,59,150,0.30),transparent_35%),radial-gradient(circle_at_20%_80%,rgba(158,27,30,0.20),transparent_30%)] p-6 shadow-2xl sm:p-8">

            {/* Header */}
            <div className="flex items-start justify-between gap-4">

              <div>

                <h2 className="text-3xl font-medium">
                  {selectedJob.job_title}
                </h2>

                <p className="mt-2 text-white/60">
                  {selectedJob.hide_company
                    ? ""
                    : selectedJob.company_name || "Company"}
                </p>

              </div>

              <button
                type="button"
                onClick={() => {
                window.location.href = `/apply-job?job=${selectedJob.job_id}`;
              }}
                className="rounded-lg bg-[#EBFFA] border border-white/30 px-6 py-2 font-medium text-white  mr-10 transition hover:bg-[#002b76]"
              >
                Apply for this Job
              </button>


              <button
                type="button"
                onClick={() => setSelectedJob(null)}
                className="rounded-lg border border-white/10 px-4 py-2 text-sm text-white/70 transition hover:bg-[#9E1B22] hover:text-white"
              >
                Close
              </button>

            </div>

            {/* Job Information */}
            <div className="mt-6 flex flex-wrap gap-x-8 gap-y-4 text-sm text-white/60">

              <span className="flex items-center gap-2">
                <MapPin
                  size={17}
                  className="shrink-0 text-[#A2C2F8]"
                />
                {selectedJob.city ||
                  selectedJob.location ||
                  "Location not specified"}
              </span>

              <span className="flex items-center gap-2">
                <Wallet
                  size={17}
                  className="shrink-0 text-[#A2C2F8]"
                />
                {selectedJob.salary_range || "Salary not specified"} SAR
              </span>

              <span className="flex items-center gap-2">
                <Users
                  size={17}
                  className="shrink-0 text-[#A2C2F8]"
                />
                {selectedJob.vacancies || 1} Vacancies
              </span>

              <span className="flex items-center gap-2">
                <House
                  size={17}
                  className="shrink-0 text-[#A2C2F8]"
                />
                Work From Home:{" "}
                {selectedJob.work_from_home === "Yes" ? "Yes" : "No"}
              </span>

              <span className="flex items-center gap-2">
                <span className="text-[15px] font-semibold text-[#A2C2F8]">
                  FT
                </span>
                {selectedJob.employment_type || "Full Time"}
              </span>

            </div>

            {/* Job Description */}
            {selectedJob.job_description && (
              <section className="mt-8">

                <h3 className="text-lg font-medium">
                  Job Description
                </h3>

                <p className="mt-3 whitespace-pre-line leading-7 text-white/60">
                  {selectedJob.job_description}
                </p>

              </section>
            )}

            {/* Desired Skills */}
            {selectedJob.desired_skills && (
              <section className="mt-8">

                <h3 className="text-lg font-medium">
                  Desired Skills
                </h3>

                <p className="mt-3 whitespace-pre-line leading-7 text-white/60">
                  {selectedJob.desired_skills}
                </p>

              </section>
            )}

            {/* Additional Requirements */}
            {selectedJob.additional_requirements && (
              <section className="mt-8">

                <h3 className="text-lg font-medium">
                  Additional Requirements
                </h3>

                <p className="mt-3 whitespace-pre-line leading-7 text-white/60">
                  {selectedJob.additional_requirements}
                </p>

              </section>
            )}

            {/* Apply */}
            <div className="mt-10 border-t border-white/10 pt-6">

            </div>

          </div>

        </div>
      )}

    </main>
    <Footer />
    </>
  );
}