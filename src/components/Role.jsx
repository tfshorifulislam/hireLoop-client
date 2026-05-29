"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Role = () => {
    return (
        // mt-24 দিয়ে উপরে স্পেসিং এবং py-24 দিয়ে সেকশনের নিজস্ব হাইট মেইনটেইন করা হয়েছে
        <div className="w-full bg-[#030303] text-white mt-24 py-24 px-6 md:px-12 relative overflow-hidden flex items-center justify-center min-h-[500px] md:min-h-[600px]">
            
          
            {/* টেক্সট ও বাটন কন্টেন্ট */}
            <div className="relative z-10 max-w-[800px] mx-auto flex flex-col items-center text-center mt-12 md:mt-16">
                
                {/* প্রধান হেডিং */}
                <h2 className="text-4xl md:text-5xl lg:text-[54px] font-semibold tracking-tight leading-[1.15] mb-5 max-w-[680px] text-white/95">
                    Your next role is<br />already looking for you
                </h2>

                {/* সাব-টাইটেল */}
                <p className="text-[13.5px] md:text-[14.5px] text-zinc-400 font-medium tracking-wide max-w-[580px] leading-relaxed mb-10 opacity-85">
                    Build a profile in three minutes. The matches start arriving tomorrow morning.
                </p>

                {/* অ্যাকশন বাটন গ্রুপ */}
                <div className="flex flex-row items-center justify-center gap-4 w-full sm:w-auto relative z-20">
                    
                    {/* Create a free account বাটন */}
                    <Link
                        href="#"
                        className="bg-white text-black text-[13px] md:text-[13.5px] font-bold px-7 py-3.5 rounded-xl hover:bg-zinc-200 transition-all shadow-[0_4px_25px_rgba(59,130,246,0.15)] whitespace-nowrap"
                    >
                        Create a free account
                    </Link>

                    {/* View pricing বাটন */}
                    <Link
                        href="#"
                        className="bg-[#0D0D0E]/90 text-zinc-300 border border-zinc-800/80 text-[13px] md:text-[13.5px] font-semibold px-7 py-3.5 rounded-xl hover:bg-zinc-900 hover:text-white transition-all backdrop-blur-sm whitespace-nowrap"
                    >
                        View pricing
                    </Link>
                    
                </div>

            </div>
        </div>
    );
};

export default Role;