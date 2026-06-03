import Image from 'next/image';
import React from 'react';

const Banner = () => {
    return (
        <section className="relative min-h-screen w-full bg-[#030303] text-white flex flex-col items-center justify-start overflow-hidden pt-12 md:pt-20 pb-16">

            {/* Background Glow */}
            <div className="absolute bottom-[20%] left-1/2 -translate-x-1/2 w-[140%] aspect-square max-w-300 bg-radial-gradient from-blue-600/30 via-purple-900/10 to-transparent rounded-full blur-3xl pointer-events-none -z-10"></div>

            {/* Content */}
            <div className="relative z-10 max-w-6xl mx-auto px-4 text-center flex flex-col items-center">

                {/* Badge */}
                <div className="inline-flex items-center gap-2 bg-[#121214]/60 border border-zinc-800/80 rounded-full px-4 py-1.5 text-xs font-medium text-zinc-400 uppercase mb-8 backdrop-blur-md">
                    💼 <span className="text-white font-bold">50,000+</span> New Jobs This Month
                </div>

                {/* Title */}
                <h1 className="text-4xl sm:text-5xl md:text-[56px] font-bold mb-5 max-w-3xl leading-tight">
                    Find Your Dream Job Today
                </h1>

                {/* Subtitle */}
                <p className="text-zinc-400 text-sm md:text-base max-w-2xl mb-10">
                    HireLoop connects top talent with world-class companies. Browse thousands of curated opportunities.
                </p>

                {/* Search Bar */}
                <div className="w-full max-w-2xl bg-[#0d0d0f]/90 border border-zinc-800 rounded-full p-2 pl-6 flex items-center gap-4 mb-10">

                    <input
                        type="text"
                        placeholder="Job title, skill or company"
                        className="bg-transparent w-full text-sm text-white outline-none"
                    />

                    <div className="hidden sm:block h-5 w-px bg-zinc-800"></div>

                    <input
                        type="text"
                        placeholder="Location"
                        className="hidden sm:block bg-transparent w-full text-sm text-white outline-none"
                    />

                    <button className="bg-indigo-600 hover:bg-indigo-500 p-3 rounded-full">
                        🔍
                    </button>
                </div>

                {/* Trending */}
                <div className="flex flex-wrap justify-center gap-2 text-xs mb-16">
                    <span className="text-zinc-500">Trending:</span>
                    <button className="px-3 py-1 border border-zinc-800 rounded-full">Product Designer</button>
                    <button className="px-3 py-1 border border-zinc-800 rounded-full">AI Engineering</button>
                    <button className="px-3 py-1 border border-zinc-800 rounded-full">DevOps</button>
                </div>

                {/* Globe Section */}
                <div className="relative w-full flex flex-col items-center">

                    {/* Globe Image */}
                    <Image
                        src="/planet1.png"
                        alt="Globe"
                        width={1400}
                        height={1400}
                        className="w-[120vw] md:w-screen h-auto object-contain"
                        priority
                    />

                    {/* Center Text on Globe */}
                    <div className="absolute inset-0 flex items-center justify-center text-center px-4 mb-30">
                        <h2 className="text-2xl md:text-4xl text-zinc-300 leading-snug">
                            Assisting over <span className="text-white font-semibold">15,000 job seekers</span><br />
                            find their dream positions.
                        </h2>
                    </div>

                </div>

                {/* Cards (OVERLAP FIX HERE 🔥) */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-5xl -mt-28 md:-mt-80 relative z-20">

                    <div className="bg-linear-to-b from-[#0f0f11] to-[#070708] border border-zinc-900 rounded-2xl p-6">
                        💼
                        <div className="text-3xl font-bold mt-2">50K</div>
                        <div className="text-zinc-500 text-xs">Active Jobs</div>
                    </div>

                    <div className="bg-linear-to-b from-[#0f0f11] to-[#070708] border border-zinc-900 rounded-2xl p-6">
                        🏢
                        <div className="text-3xl font-bold mt-2">12K</div>
                        <div className="text-zinc-500 text-xs">Companies</div>
                    </div>

                    <div className="bg-linear-to-b from-[#0f0f11] to-[#070708] border border-zinc-900 rounded-2xl p-6">
                        🔍
                        <div className="text-3xl font-bold mt-2">2M</div>
                        <div className="text-zinc-500 text-xs">Job Seekers</div>
                    </div>

                    <div className="bg-linear-to-b from-[#0f0f11] to-[#070708] border border-zinc-900 rounded-2xl p-6">
                        ⭐
                        <div className="text-3xl font-bold mt-2">97%</div>
                        <div className="text-zinc-500 text-xs">Satisfaction</div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default Banner;