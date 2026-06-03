'use client';
import StatsBar from '@/components/Dashboard/StateCard';
import { useSession } from '@/lib/auth-client';
import React from 'react';

const RecruiterDashboardPage = () => {
    const { data: session, isPending } = useSession();
    if (isPending) {
        return <div>Loading...</div>
    }

    const user = session?.user;
    console.log('user in the recruiter dashboard:', user);

    return (
        <div>
            <h1>
                Welcome Back, {user?.name}!
                <StatsBar />
            </h1>
        </div>
    );
};

export default RecruiterDashboardPage;