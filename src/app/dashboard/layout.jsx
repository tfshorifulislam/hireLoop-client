import { DashboardAsideBar } from '@/components/Dashboard/DashboardAsideBar';
import React from 'react';

const DashboardLayout = ({ children }) => {
    return (
        <div className='flex min-h-screen bg-[#131314]'>
            <DashboardAsideBar />
            <div className='flex-1 p-4'>
                {children}
            </div>
        </div>
    );
};

export default DashboardLayout;