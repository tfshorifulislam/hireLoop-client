import Banner from '@/components/Banner';
import FeatureJob from '@/components/FeatureJob';
import JobDiscovery from '@/components/JobDescovery';
import Subscription from '@/components/Subscription';
import React from 'react';

const HomePage = () => {
  return (
    <div>
      <Banner />
      <JobDiscovery />
      <FeatureJob />
      <Subscription />
    </div>
  );
};

export default HomePage;