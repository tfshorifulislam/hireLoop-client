'use client';

import StatsBar from '@/components/Dashboard/StateCard';
import { useSession } from '@/lib/auth-client';

const RecruiterDashboardPage = () => {
    const { data: session, isPending } = useSession();

    if (isPending) {
        return (
            <div className="flex items-center justify-center min-h-[60vh]">
                <span className="loading loading-spinner loading-lg"></span>
            </div>
        );
    }

    const user = session?.user;

    return (
        <div className="space-y-8">
            {/* Header */}
            <h1 className="text-3xl md:text-4xl font-bold">
                Welcome Back, {user?.name}
            </h1>

            {/* Stats */}
            <StatsBar />
        </div>
    );
};

export default RecruiterDashboardPage;