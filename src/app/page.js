import Banner from '@/components/Banner';
import FeatureJob from '@/components/FeatureJob';
import Footer from '@/components/Footer';
import JobDiscovery from '@/components/JobDescovery';
import Navbar from '@/components/Navbar';
import Role from '@/components/Role';
import Subscription from '@/components/Subscription';
import React from 'react';

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <JobDiscovery />
      <FeatureJob />
      <Role />
      <Subscription />
      <Footer />
    </div>
  );
};

export default HomePage;