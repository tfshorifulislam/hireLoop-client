import Image from 'next/image';
import React from 'react';

const Banner = () => {
    return (
        <section className="relative min-h-[calc(100vh-80px)] w-full  text-white flex flex-col items-center justify-between overflow-hidden pt-12 md:pt-20">

            {/* Main Content Container */}
            <div className="relative z-10 max-w-4xl mx-auto px-4 text-center flex flex-col items-center flex-1 justify-center pb-24">

                {/* 50,000+ New Jobs Badge */}
                <div className="inline-flex items-center gap-2 bg-[#121214] border border-gray-800 rounded-full px-4 py-1.5 text-xs font-medium tracking-wider text-gray-400 uppercase mb-6 shadow-md">
                    <span>💼</span>
                    <span className="text-white font-bold">50,000+</span>
                    <span>New Jobs This Month</span>
                </div>

                {/* Heading */}
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6 max-w-2xl leading-tight">
                    Find Your Dream Job Today
                </h1>

                {/* Subtitle */}
                <p className="text-gray-400 text-sm md:text-base max-w-xl mx-auto mb-10 leading-relaxed">
                    HireLoop connects top talent with world-class companies. Browse thousands of
                    curated opportunities and land your next role — faster.
                </p>

                {/* Search Bar */}
                <div className="w-full max-w-2xl bg-[#111113]/80 backdrop-blur-md border border-gray-800 rounded-full p-2 pl-6 flex items-center justify-between gap-4 shadow-xl focus-within:border-purple-500/50 transition-all mb-6">
                    {/* Job Title Input */}
                    <div className="flex items-center gap-3 flex-1 min-w-0">
                        <svg className="w-5 h-5 text-gray-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        <input
                            type="text"
                            placeholder="Job title, skill or company"
                            className="bg-transparent w-full text-sm text-white placeholder-gray-500 focus:outline-none"
                        />
                    </div>

                    {/* Divider Line */}
                    <div className="hidden sm:block h-6 w-[1px] bg-gray-800"></div>

                    {/* Location Input */}
                    <div className="hidden sm:flex items-center gap-3 flex-1 min-w-0">
                        <svg className="w-5 h-5 text-gray-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <input
                            type="text"
                            placeholder="Location or Remote"
                            className="bg-transparent w-full text-sm text-white placeholder-gray-500 focus:outline-none"
                        />
                    </div>

                    {/* Search Button */}
                    <button className="bg-blue-600 hover:bg-blue-500 text-white p-3 rounded-full transition-colors duration-200 shadow-lg shadow-blue-600/20 shrink-0">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </button>
                </div>

                {/* Trending Positions */}
                <div className="flex flex-wrap items-center justify-center gap-3 text-xs md:text-sm">
                    <span className="text-gray-500">Trending Position</span>
                    <button className="bg-[#18181b] hover:bg-[#27272a] border border-gray-800 text-gray-300 px-3 py-1 rounded-full transition-colors">
                        Product Designer
                    </button>
                    <button className="bg-[#18181b] hover:bg-[#27272a] border border-gray-800 text-gray-300 px-3 py-1 rounded-full transition-colors">
                        AI Engineering
                    </button>
                    <button className="bg-[#18181b] hover:bg-[#27272a] border border-gray-800 text-gray-300 px-3 py-1 rounded-full transition-colors">
                        Dev-ops Engineer
                    </button>
                </div>

            </div>

            {/* Background Globe Wrapper */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-300 pointer-events-none select-none">

                <Image
                    width={900}
                    height={900}
                    src="/planet1.png"
                    alt="Globe background"
                    className="
            w-full
            object-contain
            object-bottom
            translate-y-[10%]
            opacity-90
        "
                />
            </div>

        </section>
    );
};

export default Banner;