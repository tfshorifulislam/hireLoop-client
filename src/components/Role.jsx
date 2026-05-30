"use client";

import Link from "next/link";

const Role = () => {
  return (
    <section className="mt-35 relative w-full min-h-screen overflow-hidden flex items-center justify-center">
      
      {/* Background */}
      <div
        className="absolute inset-0 bg-[url('/bg.png')] bg-no-repeat bg-contain"
        style={{
          backgroundPosition: "top center",
        }}
      />

      {/* Optional dark overlay */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6">
        <h2 className="text-white text-5xl md:text-6xl font-semibold leading-tight max-w-4xl">
          Your next role is
          <br />
          already looking for you
        </h2>

        <p className="mt-6 text-zinc-400 text-base md:text-lg max-w-2xl">
          Build a profile in three minutes. The matches start arriving
          tomorrow morning.
        </p>

        <div className="flex gap-4 mt-10">
          <Link
            href="#"
            className="bg-white text-black px-7 py-3.5 rounded-xl font-medium hover:bg-zinc-200 transition"
          >
            Create a free account
          </Link>

          <Link
            href="#"
            className="bg-[#0D0D0E] text-white border border-white/10 px-7 py-3.5 rounded-xl hover:bg-zinc-900 transition"
          >
            View pricing
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Role;