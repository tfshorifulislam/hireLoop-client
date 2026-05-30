"use client";

import React from "react";
import Link from "next/link";

const Role = () => {
  return (
    <section className="relative w-full bg-[#080808] overflow-hidden flex items-center justify-center min-h-[580px] mt-24 px-6 md:px-12 py-20">

      {/* Subtle grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 50%, black 30%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 60% at 50% 50%, black 30%, transparent 100%)",
        }}
      />

      {/* Indigo glow */}
      <div
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[400px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(99,102,241,0.12) 0%, transparent 70%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-[680px] w-full flex flex-col items-center text-center">

        {/* Eyebrow badge */}
        <div className="inline-flex items-center gap-2 mb-9 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.04]">
          <span
            className="w-1.5 h-1.5 rounded-full bg-emerald-400"
            style={{ boxShadow: "0 0 8px rgba(52,211,153,0.8)" }}
          />
          <span className="text-[11px] font-normal text-white/40 uppercase tracking-[0.06em]">
            Now hiring — 4,200+ roles live
          </span>
        </div>

        {/* Heading — serif for elegance */}
        <h2
          className="text-[clamp(42px,6vw,64px)] font-normal leading-[1.1] tracking-tight text-white mb-6"
          style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
        >
          Your next role is
          <br />
          <em className="text-white/45 not-italic italic">already looking for you</em>
        </h2>

        {/* Subtext */}
        <p className="text-[15px] font-light text-white/38 leading-[1.75] max-w-[420px] mb-12">
          Build a profile in three minutes.
          <br />
          The matches start arriving tomorrow morning.
        </p>

        {/* CTA buttons */}
        <div className="flex items-center justify-center gap-3 flex-wrap">
          <Link
            href="#"
            className="bg-white text-[#080808] text-[13.5px] font-medium px-7 py-3.5 rounded-full hover:bg-zinc-200 transition-all duration-200 hover:-translate-y-px whitespace-nowrap"
          >
            Create a free account
          </Link>
          <Link
            href="#"
            className="text-white/45 text-[13.5px] font-normal px-7 py-3.5 rounded-full border border-white/10 hover:border-white/25 hover:text-white/75 transition-all duration-200 hover:-translate-y-px whitespace-nowrap"
          >
            View pricing →
          </Link>
        </div>

        {/* Social proof stats */}
        <div className="flex items-center justify-center gap-8 mt-14 pt-10 border-t border-white/[0.06] w-full">
          {[
            { num: "48h", label: "Avg. first match" },
            { num: "12k+", label: "Companies hiring" },
            { num: "91%", label: "Match rate" },
          ].map((stat, i, arr) => (
            <React.Fragment key={stat.label}>
              <div className="text-center">
                <div
                  className="text-[28px] font-normal text-white/85 leading-none mb-1"
                  style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
                >
                  {stat.num}
                </div>
                <div className="text-[11px] text-white/25 uppercase tracking-[0.06em]">
                  {stat.label}
                </div>
              </div>
              {i < arr.length - 1 && (
                <div className="w-px h-8 bg-white/[0.08]" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Role;