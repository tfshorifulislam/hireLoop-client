import Banner from '@/components/Banner';
import FeatureJob from '@/components/FeatureJob';
import JobDiscovery from '@/components/JobDescovery';
import Role from '@/components/Role';
import Subscription from '@/components/Subscription';
import React from 'react';

const HomePage = () => {
  return (
    <div>
      <Banner />
      <JobDiscovery />
      <FeatureJob />
      <Role/>
      <Subscription />
    </div>
  );
};

export default HomePage;