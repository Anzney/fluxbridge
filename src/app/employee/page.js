"use client";
import {
  MapPin,
  Wallet,
  Users,
  House,
  Briefcase,
  UserCheck,
  Home,
  Plus,
  Search,
} from "lucide-react";

import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import PageLoader from "@/components/PageLoader";

export default function EmployeePage() {
const [activeSection, setActiveSection] = useState("dashboard");
const [industries, setIndustries] = useState([""]);
const [requirements, setRequirements] = useState([]);
const [hideCompany, setHideCompany] = useState(false);
const [jobs, setJobs] = useState([]);
const [editingJobIndex, setEditingJobIndex] = useState(null);
const [jobTitle, setJobTitle] = useState("");
const [companyName, setCompanyName] = useState("");
const [jobLocation, setJobLocation] = useState("");
const [city, setCity] = useState("");
const [salaryRange, setSalaryRange] = useState("");
const [vacancies, setVacancies] = useState("");
const [employmentType, setEmploymentType] = useState("");
const [workFromHome, setWorkFromHome] = useState("");
const [jobDescription, setJobDescription] = useState("");
const [desiredSkills, setDesiredSkills] = useState("");
const [requirementValues, setRequirementValues] = useState({});
const [authChecking, setAuthChecking] = useState(true);
const [jobSearch, setJobSearch] = useState("");


useEffect(() => {
  const checkAuth = async () => {
    const {
      data: { session },
    } = await supabase.auth.getSession();

    if (!session) {
      window.location.replace("/employee/login");
      return;
    }

    setAuthChecking(false);
  };

  checkAuth();

  const { data: listener } = supabase.auth.onAuthStateChange(
    (_event, session) => {
      if (!session) {
        window.location.replace("/employee/login");
      }
    }
  );

  return () => {
    listener.subscription.unsubscribe();
  };
}, []);
  


  const handlePostJob = async () => {
  const job = {
    job_title: jobTitle,
    company_name: companyName,
    job_industry: industries.filter(Boolean).join(", "),
    job_location: jobLocation,
    city: city,
    salary_range: salaryRange,
    vacancies: Number(vacancies) || 0,
    employment_type: employmentType,
    work_from_home: workFromHome,
    job_description: jobDescription,
    desired_skills: desiredSkills,
    requirements: requirementValues,
    hide_company: hideCompany,
  };

  // EDIT EXISTING JOB
  if (editingJobIndex !== null) {
    const existingJob = jobs[editingJobIndex];

    const { data, error } = await supabase
      .from("jobs")
      .update(job)
      .eq("id", existingJob.id)
      .select()
      .single();

    if (error) {
      console.error("Error updating job:", error);
      alert("Failed to update job. Please try again.");
      return;
    }

    setJobs((prevJobs) =>
      prevJobs.map((item) =>
        item.id === existingJob.id ? data : item
      )
    );

    setEditingJobIndex(null);

    alert("Job updated successfully!");

    setActiveSection("find-job");
    return;
  }

  // POST NEW JOB

// Get existing Job IDs
const { data: existingJobs, error: jobIdError } = await supabase
  .from("jobs")
  .select("job_id");

if (jobIdError) {
  console.error("Error checking Job IDs:", jobIdError);
  alert("Failed to generate Job ID. Please try again.");
  return;
}

const randomPart = Math.random()
  .toString(36)
  .substring(2, 8)
  .toUpperCase();

const nextJobId = `JOB${randomPart}`;

// Add Job ID to the new job
const newJob = {
  ...job,
  job_id: nextJobId,
};

const { data, error } = await supabase
  .from("jobs")
  .insert([newJob])
  .select()
  .single();


  if (error) {
    console.error("Error posting job:", error);
    alert("Failed to post job. Please try again.");
    return;
  }

  setJobs((prevJobs) => [...prevJobs, data]);

  alert("Job posted successfully!");

  setActiveSection("find-job");
};


useEffect(() => {
  const loadJobs = async () => {
    const { data, error } = await supabase
      .from("jobs")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Error loading jobs:", error);
      return;
    }

    setJobs(data || []);
  };

  loadJobs();
}, []);


// Dashboard chart data

const vacancyChartData = jobs.map((job) => ({
  name: job.job_title || "Untitled",
  vacancies: Number(job.vacancies) || 0,
}));

const employmentTypeData = Object.entries(
  jobs.reduce((acc, job) => {
    const type = job.employment_type || "Not Specified";
    acc[type] = (acc[type] || 0) + 1;
    return acc;
  }, {})
).map(([name, value]) => ({
  name,
  value,
}));

const jobPostingData = Object.entries(
  jobs.reduce((acc, job) => {
    const date = job.created_at
      ? new Date(job.created_at).toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
        })
      : "Unknown";

    acc[date] = (acc[date] || 0) + 1;
    return acc;
  }, {})
).map(([date, jobs]) => ({
  date,
  jobs,
}));




const filteredJobs = jobs.filter((job) => {
  const search = jobSearch.toLowerCase().trim();

  if (!search) return true;

  return (
    job.job_title?.toLowerCase().includes(search) ||
    job.job_id?.toLowerCase().includes(search) ||
    job.company_name?.toLowerCase().includes(search) ||
    job.city?.toLowerCase().includes(search) ||
    job.job_location?.toLowerCase().includes(search)
  );
});



if (authChecking) {
  return <PageLoader />;
}


  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_75%_35%,rgba(0,59,150,0.30),transparent_35%),radial-gradient(circle_at_20%_80%,rgba(158,27,30,0.20),transparent_30%)] text-white">
      <div className="flex min-h-screen">

        {/* Side Panel */}
        <aside className="w-64 border-r border-white/10 bg-[#050b14] p-6">
        <div className="flex items-center">
          <img
            src="/logo.png"
            alt="FluxBridge 360"
            className="h-20 w-auto scale-160 ml-15 object-contain"
          />
        </div>
          <div className="mb-5 ml-1 mr-3 p- mt-3 flex justify-center">
          <img
            src="/fluxbridge-text.png"
            alt="FluxBridge 360"
            className="h-8 w-auto object-contain"
          />
        </div>

          <nav className="space-y-7">

            <button
              onClick={() => setActiveSection("dashboard")}
              className={`w-full rounded-xl px-4 py-3 text-left text-sm font-semibold transition ${
                activeSection === "dashboard"
                  ? "bg-white/[0.08] text-white"
                  : "text-[#9EBFFA] hover:bg-white/[0.05] hover:text-[#9EBFFA]"
              }`}
            >
              Dashboard
            </button>

            <button
              onClick={() => setActiveSection("post-job")}
              className={`w-full rounded-xl px-4 py-3 text-left text-sm font-semibold transition ${
                activeSection === "post-job"
                  ? "bg-white/[0.08] text-white"
                  : "text-[#9EBFFA] hover:bg-white/[0.05] hover:text-[#9EBFFA]"
              }`}
            >
              Post a Job
            </button>

            <button
              onClick={() => setActiveSection("find-job")}
              className={`w-full rounded-xl px-4 py-3 text-left text-sm font-semibold transition ${
                activeSection === "find-job"
                  ? "bg-white/[0.08] text-white"
                  : "text-[#9EBFFA] hover:bg-white/[0.05] hover:text-[#9EBFFA]"
              }`}
            >
              Find a Job
            </button>

            <button
              onClick={() => setActiveSection("settings")}
              className={`w-full rounded-xl px-4 py-3 text-left text-sm font-semibold transition ${
                activeSection === "settings"
                  ? "bg-white/[0.08] text-white"
                  : "text-[#9EBFFA] hover:bg-white/[0.05] hover:text-[#9EBFFA]"
              }`}
            >
              Settings
            </button>

            <button
              type="button"
              onClick={async () => {
                await supabase.auth.signOut();
                window.location.href = "/employee/login";
              }}
              className="mt-auto w-full rounded-lg font-semibold border border-white/10 px-4 py-3 text-left text-sm text-[#9EBFFA] transition hover:bg-white/[0.05] hover:text-[#9E1B22]"
            >
              Logout
            </button>

          </nav>
        </aside>

        {/* Main Content */}
        <section className="flex-1 p-8 lg:p-12">

          {activeSection === "dashboard" && (
            <>
              <p className="mb-3 text-xs uppercase tracking-[0.25em] text-[#9EBFFA]">
                Employee Portal
              </p>

              <h1 className="text-4xl font-medium tracking-tight lg:text-5xl text-[#9EBFFA]">
                Employee Dashboard
              </h1>
            </>
          )}

          {activeSection === "post-job" && (
            <>
            <p className="mb-3 text-xs uppercase tracking-[0.25em] text-white/40">
            Employee Portal
            </p>

            <h1 className="text-4xl font-medium tracking-tight lg:text-5xl">
            Post a Job
            </h1>

            <p className="mt-4 max-w-2xl text-white/50">
            Create a new job opportunity and provide the required information
            for potential candidates.
            </p>

            <div className="mt-10 max-w-4xl rounded-3xl border border-white/10 bg-white/[0.03] p-6 lg:p-8">

            <h2 className="text-xl font-semibold">
                Job Information
            </h2>

            <div className="mt-8 grid gap-6 md:grid-cols-2">

                {/* Job Title */}
                <div>
                <label className="mb-2 block text-sm text-white/70">
                    Job Title
                </label>
                <input
                    type="text"
                    placeholder="Enter job title"
                    className="w-full rounded-xl border border-white/10 bg-white/[0.05] px-4 py-3 text-sm outline-none placeholder:text-white/30 focus:border-[#003B96]"
                    value={jobTitle}
                    onChange={(e) => setJobTitle(e.target.value)}
                />
                </div>

                {/* Company Name */}
                <div>
                <label className="mb-2 block text-sm text-white/70">
                    Company Name
                </label>
                <input
                    type="text"
                    placeholder="Enter company name"
                    className="w-full rounded-xl border border-white/10 bg-white/[0.05] px-4 py-3 text-sm outline-none placeholder:text-white/30 focus:border-[#003B96]"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                />
                </div>

                {/* Job Industry */}
                <div>
                <label className="mb-2 block text-sm text-white/70">
                    Job Industry
                </label>

                <div className="space-y-3">
                    {industries.map((industry, index) => (
                    <div key={index} className="flex items-center gap-3">
                        <input
                        type="text"
                        value={industry}
                        onChange={(e) => {
                            const updatedIndustries = [...industries];
                            updatedIndustries[index] = e.target.value;
                            setIndustries(updatedIndustries);
                        }}
                        placeholder={
                            index === 0
                            ? "e.g. Information Technology"
                            : "Enter another industry"
                        }
                        className="w-full rounded-xl border border-white/10 bg-white/[0.05] px-4 py-3 text-sm outline-none placeholder:text-white/30 focus:border-[#003B96]"
                        />

                        {index > 0 && (
                        <button
                            type="button"
                            onClick={() => {
                            setIndustries(
                                industries.filter((_, industryIndex) => industryIndex !== index)
                            );
                            }}
                            className="rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-400 transition hover:bg-red-500/20"
                        >
                            Delete
                        </button>
                        )}
                    </div>
                    ))}
                </div>

                <button
                    type="button"
                    onClick={() => setIndustries([...industries, ""])}
                    className="mt-2 text-sm text-[#4d8dff] hover:underline"
                >
                    + Add Another
                </button>
                </div>

                {/* Job Location */}
                <div>
                <label className="mb-2 block text-sm text-white/70">
                    Job Location
                </label>
                <input
                    type="text"
                    placeholder="e.g. Riyadh, Saudi Arabia"
                    className="w-full rounded-xl border border-white/10 bg-white/[0.05] px-4 py-3 text-sm outline-none placeholder:text-white/30 focus:border-[#003B96]"
                    value={jobLocation}
                    onChange={(e) => setJobLocation(e.target.value)}
                />
                </div>

                {/* City */}
                <div>
                <label className="mb-2 block text-sm text-white/70">
                    City
                </label>
                <input
                    type="text"
                    placeholder="Enter city"
                    className="w-full rounded-xl border border-white/10 bg-white/[0.05] px-4 py-3 text-sm outline-none placeholder:text-white/30 focus:border-[#003B96]"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
                </div>

                {/* Monthly Salary */}
                <div>
                <label className="mb-2 block text-sm text-white/70">
                    Monthly Salary Range
                </label>
                <input
                    type="text"
                    placeholder="e.g. SAR 8,000 - SAR 12,000"
                    className="w-full rounded-xl border border-white/10 bg-white/[0.05] px-4 py-3 text-sm outline-none placeholder:text-white/30 focus:border-[#003B96]"
                    value={salaryRange}
                    onChange={(e) => setSalaryRange(e.target.value)}
                />
                </div>

                {/* Vacancies */}
                <div>
                <label className="mb-2 block text-sm text-white/70">
                    Number of Vacancies
                </label>
                <input
                    type="number"
                    min="1"
                    placeholder="e.g. 3"
                    className="w-full rounded-xl border border-white/10 bg-white/[0.05] px-4 py-3 text-sm outline-none placeholder:text-white/30 focus:border-[#003B96]"
                    value={vacancies}
                    onChange={(e) => setVacancies(e.target.value)}
                />
                </div>

            </div>

            {/* Employment Type */}
            <div className="mt-8">
                <label className="mb-4 block text-sm text-white/70">
                Employment Type
                </label>

                <div className="flex flex-wrap gap-5">
                {[
                    "Full Time",
                    "Part Time",
                    "Contractor",
                    "Temporary",
                    "Internship",
                ].map((type) => (
                    <label
                    key={type}
                    className="flex cursor-pointer items-center gap-2 text-sm text-white/70"
                    >
                    <input
                        type="radio"
                        name="employmentType"
                        value={type}
                        checked={employmentType === type}
                        onChange={(e) => setEmploymentType(e.target.value)}
                    />
                    {type}
                    </label>
                ))}
                </div>
            </div>

             {/* Work From Home */}
              <div className="mt-8">
                <label className="flex cursor-pointer items-center gap-3 text-sm text-white/70">
                  <input
                    type="checkbox"
                    checked={workFromHome === "Yes"}
                    onChange={(e) =>
                      setWorkFromHome(e.target.checked ? "Yes" : "No")
                    }
                    className="h-4 w-4 accent-[#9E1B1E]"
                  />

                  <span>Work From Home</span>
                </label>
              </div>

            {/* Job Description */}
            <div className="mt-8">
                <label className="mb-2 block text-sm text-white/70">
                Job Description
                </label>

                <textarea
                rows="6"
                placeholder="Describe the job role, responsibilities and expectations..."
                className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.05] px-4 py-3 text-sm outline-none placeholder:text-white/30 focus:border-[#003B96]"
                value={jobDescription}
                onChange={(e) => setJobDescription(e.target.value)}
                />
            </div>

            {/* Desired Skills */}
            <div className="mt-8">
                <label className="mb-2 block text-sm text-white/70">
                Desired Skills
                </label>

                <textarea
                rows="4"
                placeholder="Enter required skills..."
                className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.05] px-4 py-3 text-sm outline-none placeholder:text-white/30 focus:border-[#003B96]"
                value={desiredSkills}
                onChange={(e) => setDesiredSkills(e.target.value)}
                />
            </div>

            {/* Additional Requirements */}
            <div className="mt-8">
            <label className="mb-4 block text-sm text-white/70">
                Additional Requirements
            </label>

            <div className="flex flex-wrap gap-3">
                {[
                "Age",
                "Experience",
                "Nationality",
                "Minimum Education",
                "Gender",
                "Residence Location",
                "Major",
                "Career Level",
                ].map((requirement) => (
                <button
                    key={requirement}
                    type="button"
                    onClick={() => {
                    if (!requirements.includes(requirement)) {
                        setRequirements([...requirements, requirement]);
                    }
                    }}
                    className={`rounded-full border px-4 py-2 text-sm transition ${
                    requirements.includes(requirement)
                        ? "border-[#003B96] bg-[#003B96]/20 text-white"
                        : "border-white/10 bg-white/[0.04] text-white/70 hover:border-[#003B96] hover:bg-[#003B96]/10 hover:text-white"
                    }`}
                >
                    + {requirement}
                </button>
                ))}
            </div>

            {/* Selected Requirement Fields */}
            <div className="mt-5 space-y-4">
                {requirements.map((requirement) => (
                <div
                    key={requirement}
                    className="flex items-center gap-3"
                >
                    <div className="flex-1">
                    <label className="mb-2 block text-xs text-white/50">
                        {requirement}
                    </label>

                    <input
                        type="text"
                        value={requirementValues[requirement] || ""}
                        onChange={(e) =>
                            setRequirementValues({
                            ...requirementValues,
                            [requirement]: e.target.value,
                            })
                        }
                        placeholder={`Enter ${requirement.toLowerCase()}`}
                        className="w-full rounded-xl border border-white/10 bg-white/[0.05] px-4 py-3 text-sm outline-none placeholder:text-white/30 focus:border-[#003B96]"
                        />
                    </div>

                    <button
                    type="button"
                    onClick={() => {
                        setRequirements(
                            requirements.filter((item) => item !== requirement)
                        );

                        setRequirementValues((prevValues) => {
                            const updatedValues = { ...prevValues };
                            delete updatedValues[requirement];
                            return updatedValues;
                        });
                    }}
                    className="mt-6 rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-400 transition hover:bg-red-500/20"
                    >
                    Delete
                    </button>
                </div>
                ))}
            </div>
            </div>

            {/* Hide Company */}
            <div className="mt-8">
                <label className="flex cursor-pointer items-center gap-3 text-sm text-white/70">
                <input
                    type="checkbox"
                    checked={hideCompany}
                    onChange={(e) => setHideCompany(e.target.checked)}
                    className="h-4 w-4"
                    />
                Hide Company Information from job seekers
                </label>
            </div>

            {/* Post Button */}
            <div className="mt-10">
                <button
                    type="button"
                    onClick={handlePostJob}
                    className="rounded-xl bg-[#9E1B1E] px-7 py-3 text-sm font-medium text-white transition hover:bg-[#b52226]"
                    >
                    Post Job
                </button>
            </div>

            </div>
        </>
        )}

        {activeSection === "find-job" && (
  <>
    <p className="mb-3 text-xs uppercase tracking-[0.25em] text-white/40">
      Employee Portal
    </p>

    <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <h1 className="text-4xl font-medium tracking-tight lg:text-5xl">
          Find a Job
        </h1>

        <p className="mt-3 text-white/50">
          Browse available job opportunities.
        </p>
      </div>

      <div className="text-sm text-white/40">
        {jobs.length} {jobs.length === 1 ? "job" : "jobs"}
      </div>
    </div>



    <div className="mt-8">
      {/* Search Jobs */}
      <div className="relative mb-6 max-w-xl">
      <Search
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40"
      />

        <input
          type="text"
          value={jobSearch}
          onChange={(e) => setJobSearch(e.target.value)}
          placeholder="Search by job title, Job ID, company or location..."
          className="w-full rounded-xl border border-white/10 bg-white/[0.04] py-3 pl-11 pr-11 text-sm text-white outline-none placeholder:text-white/30 transition focus:border-[#003B96]"
        />

        {jobSearch && (
          <button
            type="button"
            onClick={() => setJobSearch("")}
            className="absolute right-3 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full text-white/40 transition hover:bg-white/10 hover:text-white"
            aria-label="Clear search"
          >
            ×
          </button>
        )}

      </div>
      <div className="space-y-3"></div>



      {filteredJobs.length > 0 ? (
        <div className="space-y-6">
          {filteredJobs.map((job) => (
            
            <div
            key={job.id}
            className="rounded-xl border border-white/10 bg-white/[0.03] p-3 transition hover:border-white/20"
            >
            <div className="flex flex-col gap-2 lg:flex-row lg:items-start lg:justify-between">

                <div className="min-w-0 flex-1">

                <div className="flex flex-wrap items-center gap-3">
                  <h2 className="text-lg font-semibold">
                    {job.job_title || "Untitled Job"}
                  </h2>

                  <span className="rounded-full bg-[#9E1B1E]/20 px-3 py-1 text-xs text-[#ff8b8f]">
                    {job.job_id || "No Job ID"}
                  </span>

                    <span className="rounded-full bg-[#003B96]/20 px-3 py-1 text-xs text-[#6ea1ff]">
                    {job.employment_type || "Not specified"}
                    </span>
                </div>

                <p className="mt-1 text-sm text-white/60">
                    {job.company_name || "Company"}
                </p>

                <div className="mt-3 flex flex-wrap gap-x-6 gap-y-2 text-xs text-white/40">

                    <span className="flex items-center gap-2">
                    <MapPin size={16} className="shrink-0 text-[#9EBFFA]" />
                    {job.city || job.location || "Location not specified"}
                    </span>

                    <span className="flex items-center gap-2">
                    <Wallet size={16} className="shrink-0 text-[#9EBFFA]" />
                    {job.salary_range || "Salary not specified"} SAR
                    </span>

                    <span className="flex items-center gap-2">
                    <Users size={16} className="shrink-0 text-[#9EBFFA]" />
                    {job.vacancies || 1} Vacancies
                    </span>

                    <span className="flex items-center gap-2">
                    <House size={16} className="shrink-0 text-[#9EBFFA]" />
                    Work From Home: {job.work_from_home === "Yes" ? "Yes" : "No"}
                    </span>

                    <span className="flex items-center gap-2">
                    <Briefcase size={16} className="shrink-0 text-[#9EBFFA]" />
                    Experience:{" "}
                    {job.requirements?.Experience || "Not specified"}
                  </span>

                </div>


            

                </div>

                {/* Actions */}
                <div className="flex shrink-0 gap-2">

                <button
                    type="button"
                    onClick={() => {
                        setJobTitle(job.job_title || "");
                        setCompanyName(job.company_name || "");
                        setIndustries(
                            job.job_industry
                                ? job.job_industry.split(",").map((item) => item.trim())
                                : [""]
                        );
                        setJobLocation(job.job_location || "");
                        setCity(job.city || "");
                        setSalaryRange(job.salary_range || "");
                        setVacancies(job.vacancies || "");
                        setEmploymentType(job.employment_type || "");
                        setWorkFromHome(job.work_from_home || "");
                        setJobDescription(job.job_description || "");
                        setDesiredSkills(job.desired_skills || "");
                        setRequirementValues(job.requirements || {});
                        setRequirements(Object.keys(job.requirements || {}));
                        setHideCompany(job.hide_company || false);

                        setEditingJobIndex(
                            jobs.findIndex((item) => item.id === job.id)
                        );

                        setActiveSection("post-job");
                    }}
                    className="rounded-xl border border-white/10 bg-white/[0.05] px-4 py-2 text-sm text-white/70 transition hover:bg-white/[0.1] hover:text-white"
                >
                    Update
                </button>

                <button
                    type="button"
                    onClick={async () => {
                        const confirmed = window.confirm(
                            "Are you sure you want to delete this job?"
                        );

                        if (!confirmed) turn;

                        const { error } = await supabase
                            .from("jobs")
                            .delete()
                            .eq("id", job.id);

                        if (error) {
                            console.error("Error deleting job:", error);
                            alert("Failed to delete job. Please try again.");
                            return;
                        }

                        setJobs((prevJobs) =>
                            prevJobs.filter((item) => item.id !== job.id)
                        );

                        alert("Job deleted successfully!");
                    }}
                    className="rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-2 text-sm text-red-400 transition hover:bg-red-500/20"
                >
                    Delete
                </button>

                </div>

                </div>
              </div>
            ))}
          </div>
          ) : (
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 text-center">
            <h2 className="text-lg font-medium">
            No jobs available
            </h2>

            <p className="mt-2 text-sm text-white/40">
            Posted jobs will appear here.
            </p>
        </div>
        )}
    </div>
  </>
)}


          {activeSection === "dashboard" && (
          <>
          {/* Dashboard Stats */}
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

            {/* Total Jobs */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <div className="flex items-center justify-between">
                <p className="text-sm text-white/50">
                  Total Jobs
                </p>
                <Briefcase size={20} className="text-[#6ea1ff]" />
              </div>

              <p className="mt-4 text-3xl font-medium">
                {jobs.length}
              </p>
            </div>

            {/* Total Vacancies */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <div className="flex items-center justify-between">
                <p className="text-sm text-white/50">
                  Total Vacancies
                </p>
                <Users size={20} className="text-[#6ea1ff]" />
              </div>

              <p className="mt-4 text-3xl font-medium">
                {jobs.reduce(
                  (total, job) => total + (Number(job.vacancies) || 0),
                  0
                )}
              </p>
            </div>

            {/* Full Time */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <div className="flex items-center justify-between">
                <p className="text-sm text-white/50">
                  Full Time Jobs
                </p>
                <UserCheck size={20} className="text-[#6ea1ff]" />
              </div>

              <p className="mt-4 text-3xl font-medium">
                {
                  jobs.filter(
                    (job) => job.employment_type === "Full Time"
                  ).length
                }
              </p>
            </div>

            {/* Work From Home */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <div className="flex items-center justify-between">
                <p className="text-sm text-white/50">
                  Work From Home
                </p>
                <Home size={20} className="text-[#6ea1ff]" />
              </div>

              <p className="mt-4 text-3xl font-medium">
                {
                  jobs.filter(
                    (job) => job.work_from_home === "Yes"
                  ).length
                }
              </p>
            </div>

          </div>

          {/* Quick Actions */}
          <div className="mt-10">
            <h2 className="text-xl font-medium">
              Quick Actions
            </h2>

            <div className="mt-4 flex flex-wrap gap-3">

              <button
                type="button"
                onClick={() => setActiveSection("post-job")}
                className="rounded-xl bg-[#7E1B1E] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#b52226]"
              >
                Post a Job
              </button>

              <button
                type="button"
                onClick={() => setActiveSection("find-job")}
                className="rounded-xl border border-white/10 bg-[#001b76] px-6 py-3 text-sm font-medium text-[#9EBFFA] transition hover:bg-[#002b76] hover:text-white"
              >
                Find a Job
              </button>

            </div>
          </div>



                {/* Job Analytics */}
<div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.03] p-6">

  <div className="mb-5">
    <h2 className="text-xl font-medium">
      Job Analytics
    </h2>

    <p className="mt-1 text-sm text-white/40">
      Overview of your job postings and recruitment activity
    </p>
  </div>

  <div className="grid gap-5 lg:grid-cols-3">

    {/* Bar Chart */}
    <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">

      <h3 className="text-sm font-medium">
        Vacancies by Job
      </h3>

      <div className="mt-4 h-[190px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={vacancyChartData}>

            <CartesianGrid
              strokeDasharray="3 3"
              stroke="rgba(255,255,255,0.06)"
            />

            <XAxis
              dataKey="name"
              tick={{
                fill: "#9EBFFA",
                fontSize: 9,
              }}
              tickLine={false}
              axisLine={false}
            />

            <YAxis
              allowDecimals={false}
              tick={{
                fill: "#9EBFFA",
                fontSize: 9,
              }}
              tickLine={false}
              axisLine={false}
            />

            <Tooltip
              contentStyle={{
                backgroundColor: "#07111f",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "8px",
                color: "#fff",
                fontSize: "12px",
              }}
            />

            <Bar
              dataKey="vacancies"
              fill="#003B96"
              radius={[5, 5, 0, 0]}
            />

          </BarChart>
        </ResponsiveContainer>
      </div>

    </div>


    {/* Pie Chart */}
    <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">

      <h3 className="text-sm font-medium">
        Employment Type
      </h3>

      <div className="mt-4 h-[190px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>

            <Pie
              data={employmentTypeData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={65}
              innerRadius={35}
              paddingAngle={3}
            >

              {employmentTypeData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={
                    [
                      "#003B96",
                      "#9E1B1E",
                      "#4d8dff",
                      "#ff6b70",
                      "#6ea1ff",
                    ][index % 5]
                  }
                />
              ))}

            </Pie>

            <Tooltip
              contentStyle={{
                backgroundColor: "#07111f",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "8px",
                color: "#fff",
                fontSize: "12px",
              }}
            />

          </PieChart>
        </ResponsiveContainer>
      </div>

    </div>


    {/* Line Chart */}
    <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">

      <h3 className="text-sm font-medium">
        Posting Activity
      </h3>

      <div className="mt-4 h-[190px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={jobPostingData}>

            <CartesianGrid
              strokeDasharray="3 3"
              stroke="rgba(255,255,255,0.06)"
            />

            <XAxis
              dataKey="date"
              tick={{
                fill: "#9EBFFA",
                fontSize: 9,
              }}
              tickLine={false}
              axisLine={false}
            />

            <YAxis
              allowDecimals={false}
              tick={{
                fill: "#9EBFFA",
                fontSize: 9,
              }}
              tickLine={false}
              axisLine={false}
            />

            <Tooltip
              contentStyle={{
                backgroundColor: "#07111f",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "8px",
                color: "#fff",
                fontSize: "12px",
              }}
            />

            <Line
              type="monotone"
              dataKey="jobs"
              stroke="#9E1B1E"
              strokeWidth={2.5}
              dot={{ r: 3 }}
              activeDot={{ r: 5 }}
            />

          </LineChart>
        </ResponsiveContainer>
      </div>

    </div>

  </div>

</div>



          {/* Recent Jobs */}
          <div className="mt-10">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-medium">
                Recent Job Postings
              </h2>

              <button
                type="button"
                onClick={() => setActiveSection("find-job")}
                className="text-sm text-[#6ea1ff] hover:underline"
              >
                View All
              </button>
            </div>

            <div className="mt-4 space-y-3">

              {jobs.slice(0, 5).map((job) => (
                <div
                  key={job.id}
                  className="flex flex-col gap-2 rounded-xl border border-white/10 bg-white/[0.03] p-4 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div>
                    <p className="font-medium">
                      {job.job_title || "Untitled Job"}
                    </p>

                    <p className="rounded-full bg-[#9E1B1E]/20 px-10 py-2 text-xs text-[#ff8b8f]">
                      {job.job_id || "No Job ID"}
                    </p>
                  </div>

                  <div className="text-sm text-white/50">
                    {job.vacancies || 0} Vacancies
                  </div>
                </div>
              ))}

              {jobs.length === 0 && (
                <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6 text-sm text-white/40">
                  No jobs have been posted yet.
                </div>
              )}

            </div>
          </div>
        </>
      )}

        </section>
      </div>
    </main>
  );
}