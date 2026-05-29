"use client";

import React from 'react';
import { 
    FiSearch, 
    FiTrendingUp, 
    FiBarChart2, 
    FiBookmark, 
    FiMousePointer, 
    FiFileText, 
    FiHexagon, 
    FiArrowUpRight 
} from 'react-icons/fi';

const FeatureJob = () => {
    // স্ক্রিনশটের ৮টি ফিচারের ডেটা অ্যারে
    const features = [
        {
            id: 1,
            title: "Smart Search",
            desc: "Find your ideal job with advanced filters.",
            icon: <FiSearch size={20} className="text-[#FF79C6]" />
        },
        {
            id: 2,
            title: "Salary Insights",
            desc: "Get real salary data to negotiate confidently.",
            icon: <FiTrendingUp size={20} className="text-[#FF79C6]" />
        },
        {
            id: 3,
            title: "Top Companies",
            desc: "Apply to vetted companies that are hiring.",
            icon: <FiBarChart2 size={20} className="text-[#FF79C6]" />
        },
        {
            id: 4,
            title: "Saved Jobs",
            desc: "Manage apps & favorites on your dashboard.",
            icon: <FiBookmark size={20} className="text-[#FF79C6]" />
        },
        {
            id: 5,
            title: "One-Click Apply",
            desc: "Simplify your job applications for an easier process!",
            icon: <FiMousePointer size={20} className="text-[#FF79C6]" />
        },
        {
            id: 6,
            title: "Resume Builder",
            desc: "Create professional resumes with modern templates.",
            icon: <FiFileText size={20} className="text-[#FF79C6]" />
        },
        {
            id: 7,
            title: "Skill-Based Matching",
            desc: "Discover jobs that match your skills and experience.",
            icon: <FiHexagon size={20} className="text-[#FF79C6]" />
        },
        {
            id: 8,
            title: "Career Growth Resources",
            desc: "Boost your career with quick interview tips.",
            icon: <FiArrowUpRight size={20} className="text-[#FF79C6]" />
        }
    ];

    return (
        <div className="w-full bg-[#151516] text-white py-24 px-6 md:px-12 relative overflow-hidden">
            
            {/* ব্যাকগ্রাউন্ড সূক্ষ্ম গ্লো মডিউল */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#5C53FE]/5 blur-[140px] pointer-events-none rounded-full"></div>

            <div className="max-w-[1200px] mx-auto flex flex-col items-center">
                
                {/* ছোট প্রি-টাইটেল */}
                <div className="flex items-center gap-2 text-[11px] font-bold tracking-[0.2em] text-[#5C53FE] uppercase mb-4">
                    <span className="w-1.5 h-1.5 bg-[#5C53FE] block rounded-sm"></span>
                    Features Job
                    <span className="w-1.5 h-1.5 bg-[#5C53FE] block rounded-sm"></span>
                </div>

                {/* প্রধান হেডিং */}
                <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-center max-w-[650px] leading-[1.15] mb-20 text-white/95">
                    Everything you need<br />to succeed
                </h2>

                {/* ফিচার গ্রিড লেআউট (৪ কলামে ভাগ করা বড় স্ক্রিনের জন্য) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10 w-full relative z-10">
                    {features.map((item) => (
                        <div key={item.id} className="flex gap-4 group">
                            
                            {/* আইকন বক্স - একদম স্ক্রিনশটের মতো চারকোণা ডার্ক ম্যাট ফিনিশ */}
                            <div className="w-14 h-14 rounded-xl bg-[#0B0B0C] border border-zinc-900 flex items-center justify-center shrink-0 shadow-[inset_0_1px_1px_rgba(255,255,255,0.02)] transition-colors group-hover:border-zinc-800">
                                {item.icon}
                            </div>
                            
                            {/* টেক্সট কন্টেন্ট */}
                            <div className="flex flex-col justify-center">
                                <h3 className="text-[15px] font-semibold text-zinc-200 tracking-tight mb-1 group-hover:text-white transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-[12.5px] text-zinc-500 leading-normal max-w-[200px]">
                                    {item.desc}
                                </p>
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default FeatureJob;