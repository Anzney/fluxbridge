"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function EmployeeLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError("Invalid email or password.");
      setLoading(false);
      return;
    }

    window.location.href = "/employee";
  };

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_75%_35%,rgba(0,59,150,0.30),transparent_35%),radial-gradient(circle_at_20%_80%,rgba(158,27,30,0.20),transparent_30%)] flex items-center justify-center px-6 text-white">
      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur">
        <div className="mb-8 text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-white/40">
            FluxBridge 360
          </p>

          <h1 className="mt-3 text-3xl font-medium">
            Employee Portal
          </h1>

          <p className="mt-2 text-sm text-white/50">
            Authorized employees only
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="mb-2 block text-sm text-white/60">
              Employee Email
            </label>

            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-lg border border-white/10 bg-white/[0.05] px-4 py-3 text-white outline-none focus:border-[#003B96]"
              placeholder="employee@fluxbridge360.com"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm text-white/60">
              Password
            </label>

            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-lg border border-white/10 bg-white/[0.05] px-4 py-3 text-white outline-none focus:border-[#003B96]"
              placeholder="Enter password"
            />
          </div>

          {error && (
            <p className="text-sm text-red-400">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-[#9E1B1E] px-6 py-3 font-medium text-white transition hover:bg-[#002b76] disabled:opacity-50"
          >
            {loading ? "Signing in..." : "Employee Sign In"}
          </button>
        </form>
      </div>
    </main>
  );
}