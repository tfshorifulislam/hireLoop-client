"use client";

import React from 'react';
import { FaArrowRight, FaMapMarkerAlt, FaBriefcase, FaDollarSign } from 'react-icons/fa';

const JobDiscovery = () => {
    const jobs = [
        { id: 1, title: "Frontend Developer" },
        { id: 2, title: "Frontend Developer" },
        { id: 3, title: "Frontend Developer" },
        { id: 4, title: "Frontend Developer" },
        { id: 5, title: "Frontend Developer" },
        { id: 6, title: "Frontend Developer" },
    ];

    return (
        <div className="w-full bg-[#030303] text-white mb-10 px-6 relative overflow-hidden">
            
            {/* ব্যাকগ্রাউন্ডের সূক্ষ্ম গ্লো মডিউল */}
            <div className="absolute top-12 left-1/4 w-[600px] h-[300px] bg-[#5C53FE]/5 blur-[130px] pointer-events-none rounded-full"></div>

            <div className="max-w-[1200px] mx-auto flex flex-col items-center">
                
                {/* ছোট প্রি-টাইটেল */}
                <div className="flex items-center gap-2 text-[11px] font-bold tracking-[0.2em] text-[#5C53FE] uppercase mb-4">
                    <span className="w-1.5 h-1.5 bg-[#5C53FE] block rounded-sm"></span>
                    Smart Job Discovery
                    <span className="w-1.5 h-1.5 bg-[#5C53FE] block rounded-sm"></span>
                </div>

                {/* প্রধান হেডিং */}
                <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-center max-w-[650px] leading-[1.15] mb-16 text-white/95">
                    The roles you'd never<br />find by searching
                </h2>

                {/* জব কার্ডের ৩ কলাম গ্রিড লেআউট */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full mb-16 relative z-10">
                    {jobs.map((job) => (
                        <div 
                            key={job.id}
                            className="bg-[#0B0B0C]/60 border border-zinc-900/90 hover:border-zinc-800/60 p-8 rounded-2xl flex flex-col justify-between transition-all duration-300 group"
                        >
                            <div>
                                {/* পজিশন টাইটেল */}
                                <h3 className="text-xl font-semibold text-zinc-100 tracking-tight mb-3">
                                    {job.title}
                                </h3>
                                
                                {/* ডেসক্রিপশন */}
                                <p className="text-[13px] text-zinc-500 leading-relaxed mb-6">
                                    Showcase your commitment to diversity and inclusion by highlighting initiatives
                                </p>

                                {/* ব্যাজ বা ট্যাগ সেকশন */}
                                <div className="flex flex-wrap gap-2 mb-8">
                                    {/* লোকেশন ব্যাজ */}
                                    <div className="flex items-center gap-1.5 bg-zinc-900/80 border border-zinc-800/40 text-zinc-400 text-[11px] px-3 py-1.5 rounded-full">
                                        <FaMapMarkerAlt size={10} className="text-[#FF79C6]" />
                                        <span>New York, USA</span>
                                    </div>
                                    
                                    {/* টাইপ ব্যাজ */}
                                    <div className="flex items-center gap-1.5 bg-zinc-900/80 border border-zinc-800/40 text-zinc-400 text-[11px] px-3 py-1.5 rounded-full">
                                        <FaBriefcase size={10} className="text-[#BD93F9]" />
                                        <span>Hybrid</span>
                                    </div>
                                    
                                    {/* স্যালারি ব্যাজ */}
                                    <div className="flex items-center gap-1.5 bg-zinc-900/80 border border-zinc-800/40 text-zinc-400 text-[11px] px-3 py-1.5 rounded-full w-full sm:w-auto">
                                        <FaDollarSign size={10} className="text-[#8BE9FD]" />
                                        <span>€25–€40/hour</span>
                                    </div>
                                </div>
                            </div>

                            {/* অ্যাপ্লাই নাও বাটন */}
                            <button 
                                type="button"
                                className="flex items-center gap-2 text-[13px] font-semibold text-zinc-300 group-hover:text-white transition-colors mt-2"
                            >
                                Apply Now 
                                <FaArrowRight size={11} className="transform group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    ))}
                </div>

                {/* নিচে থাকা "View all job open" বাটন */}
                <button
                    type="button"
                    className="bg-white text-black text-[13px] font-bold px-7 py-3.5 rounded-xl hover:bg-zinc-200 transition-all shadow-md relative z-10"
                >
                    View all job open
                </button>

            </div>
        </div>
    );
};

export default JobDiscovery;