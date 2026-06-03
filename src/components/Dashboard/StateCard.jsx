import React from 'react';
// Exact export names matching @gravity-ui/icons
import { LayoutList, Persons, Thunderbolt, CircleCheck } from '@gravity-ui/icons';

const StatsBar = () => {
    // Data structure matching your target layout
    const statsData = [
        {
            id: 1,
            title: 'Total Job Posts',
            value: '48',
            Icon: LayoutList,
        },
        {
            id: 2,
            title: 'Total Applicants',
            value: '1,284',
            Icon: Persons,
        },
        {
            id: 3,
            title: 'Active Jobs',
            value: '18',
            Icon: Thunderbolt, // Exact name for the lightning bolt in Gravity UI
        },
        {
            id: 4,
            title: 'Jobs Closed',
            value: '32',
            Icon: CircleCheck,
        },
    ];

    return (
        <div className="py-8 w-full flex items-center justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 w-full">
                {statsData.map((stat) => {
                    const IconComponent = stat.Icon;
                    return (
                        <div
                            key={stat.id}
                            className="bg-[#1B1B1C] border border-[#444748] rounded-2xl p-6 flex flex-col justify-between h-44 transition-all duration-200 hover:border-[#3f3f46]"
                        >
                            {/* Icon Container */}
                            <div className="bg-[#27272a] text-[#e4e4e7] w-10 h-10 rounded-xl flex items-center justify-center">
                                <IconComponent size={20} />
                            </div>

                            {/* Text Content */}
                            <div className="mt-4">
                                <p className="text-[#a1a1aa] text-sm font-medium tracking-wide">
                                    {stat.title}
                                </p>
                                <h3 className="text-white text-3xl font-semibold mt-2 tracking-tight">
                                    {stat.value}
                                </h3>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default StatsBar;