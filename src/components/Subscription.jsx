"use client";

import React, { useState } from 'react';
// FaZap বা FaRegZap এর বদলে FaBolt ব্যবহার করা হয়েছে
import { FaArrowRight, FaPlus, FaCrown, FaBolt } from 'react-icons/fa';
import { FiBarChart2 } from 'react-icons/fi';

const Subscription = () => {
    // Monthly এবং Yearly টগল করার জন্য স্টেট
    const [isYearly, setIsYearly] = useState(false);

    // প্রাইসিং ডেটা অবজেক্ট
    const plans = [
        {
            name: "Starter",
            icon: <FaCrown size={14} className="text-[#FF79C6]" />,
            iconBg: "bg-[#FF79C6]/10 border-[#FF79C6]/20",
            price: isYearly ? "0" : "0",
            features: [
                "Daily AI match brief (top 5)",
                "Verified salary bands",
                "Company insight dashboards",
                "1-click apply, unlimited"
            ],
            isPopular: false,
        },
        {
            name: "Growth",
            icon: <FiBarChart2 size={16} className="text-[#BD93F9]" />,
            iconBg: "bg-[#BD93F9]/10 border-[#BD93F9]/20",
            price: isYearly ? "12" : "17",
            features: [
                "Daily AI match brief (top 5)",
                "Verified salary bands",
                "Company insight dashboards",
                "1-click apply, unlimited"
            ],
            isPopular: true,
        },
        {
            name: "Premium",
            icon: <FaBolt size={14} className="text-[#8BE9FD]" />, // এখানে FaBolt সেট করা হয়েছে
            iconBg: "bg-[#8BE9FD]/10 border-[#8BE9FD]/20",
            price: isYearly ? "79" : "99",
            features: [
                "Everything in Pro",
                "Multi-profile career portfolios",
                "Shared talent rooms",
                "Recruiter view (read-only)"
            ],
            isPopular: false,
        }
    ];

    return (
        <div className="w-full bg-[#030303] text-white py-24 px-6 md:px-12 overflow-hidden relative">
            
            {/* ব্যাকগ্রাউন্ড গ্লো এফেক্ট */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-[#5C53FE]/5 blur-[120px] pointer-events-none rounded-full"></div>

            <div className="max-w-[1200px] mx-auto flex flex-col items-center">
                
                {/* ছোট প্রি-টাইটেল */}
                <div className="flex items-center gap-2 text-[11px] font-bold tracking-[0.2em] text-[#5C53FE] uppercase mb-4">
                    <span className="w-1.5 h-1.5 bg-[#5C53FE] block rounded-sm"></span>
                    Pricing
                    <span className="w-1.5 h-1.5 bg-[#5C53FE] block rounded-sm"></span>
                </div>

                {/* মেইন হেডিং */}
                <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-center max-w-[600px] leading-[1.15] mb-10 text-white/95">
                    Pay for the leverage,<br />not the listings
                </h2>

                {/* টগল বাটন (Monthly / Yearly) */}
                <div className="bg-[#161618] p-1 rounded-full flex items-center gap-1 border border-zinc-800/60 mb-16 relative z-10">
                    <button 
                        type="button"
                        onClick={() => setIsYearly(false)}
                        className={`px-5 py-2 text-xs font-semibold rounded-full transition-all duration-300 ${!isYearly ? 'bg-white text-black shadow-md' : 'text-zinc-400 hover:text-white'}`}
                    >
                        Monthly
                    </button>
                    <button 
                        type="button"
                        onClick={() => setIsYearly(true)}
                        className={`px-5 py-2 text-xs font-semibold rounded-full flex items-center gap-2 transition-all duration-300 ${isYearly ? 'bg-white text-black shadow-md' : 'text-zinc-400 hover:text-white'}`}
                    >
                        Yearly
                        <span className="bg-[#E91E63] text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full">
                            25%
                        </span>
                    </button>
                </div>

                {/* কার্ড গ্রিড সেকশন */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full relative z-10">
                    {plans.map((plan, index) => (
                        <div 
                            key={index}
                            className={`rounded-2xl bg-[#0B0B0C]/60 border p-8 flex flex-col justify-between transition-all duration-300 group
                                ${plan.isPopular 
                                    ? 'border-zinc-700/80 shadow-[0_0_30px_rgba(255,255,255,0.02)] scale-[1.02] md:scale-[1.03]' 
                                    : 'border-zinc-900/90 hover:border-zinc-800/80'
                                }`}
                        >
                            <div>
                                {/* কার্ড হেডার */}
                                <div className="flex items-center justify-between mb-8">
                                    <div className="flex items-center gap-3">
                                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center border ${plan.iconBg}`}>
                                            {plan.icon}
                                        </div>
                                        <h3 className="text-lg font-medium text-zinc-200">{plan.name}</h3>
                                    </div>
                                    <div className="flex items-baseline text-white">
                                        <span className="text-3xl font-bold tracking-tight">${plan.price}</span>
                                        <span className="text-xs text-zinc-500 ml-1">/month</span>
                                    </div>
                                </div>

                                {/* সাব-টাইটেল */}
                                <p className="text-[13px] font-medium text-zinc-300 mb-6">
                                    Start building your insights hub:
                                </p>

                                {/* ফিচার লিস্ট */}
                                <ul className="flex flex-col gap-4 mb-10">
                                    {plan.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-3 text-[13px] text-zinc-400 leading-tight">
                                            <div className="w-4 h-4 rounded bg-zinc-900 border border-zinc-800/80 flex items-center justify-center shrink-0 mt-0.5">
                                                <FaPlus size={8} className="text-zinc-500" />
                                            </div>
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* অ্যাকশন বাটন */}
                            <button 
                                type="button"
                                className={`w-full py-3.5 rounded-xl font-semibold text-xs flex items-center justify-center gap-2 transition-all duration-300
                                    ${plan.isPopular 
                                        ? 'bg-white text-black hover:bg-zinc-200 shadow-lg' 
                                        : 'bg-[#222224]/60 text-zinc-300 hover:bg-[#2a2a2c] border border-zinc-800/40'
                                    }`}
                            >
                                Choose This Plan
                                <FaArrowRight size={10} />
                            </button>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default Subscription;