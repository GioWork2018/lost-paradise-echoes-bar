
import React, { useEffect } from 'react';
import { Layout } from '../components/layout/Layout';
import { IntroSection } from '../components/home/IntroSection';
import { SagomeCarousel } from '../components/home/SagomeCarousel';
import { CollectionSection } from '../components/home/CollectionSection';
import { ProjectSection } from '../components/home/ProjectSection';
import { LocationSection } from '../components/home/LocationSection';

const Index: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <IntroSection />
      <SagomeCarousel />
      <CollectionSection />
      <ProjectSection />
      <LocationSection />
    </Layout>
  );
};

export default Index;
