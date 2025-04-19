
import React, { useEffect } from 'react';
import { Layout } from '../components/layout/Layout';
import { IntroSection } from '../components/home/IntroSection';
import { CageSection } from '../components/home/CageSection';
import { SagomeCarousel } from '../components/home/SagomeCarousel';
import { CollectionSection } from '../components/home/CollectionSection';
import { ProjectSection } from '../components/home/ProjectSection';
import { BookingSection } from '../components/home/BookingSection';
import { EventSection } from '../components/home/EventSection';

const Index: React.FC = () => {
  useEffect(() => {
    // Reset scroll position when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <IntroSection />
      <CageSection />
      <SagomeCarousel />
      <CollectionSection />
      <ProjectSection />
      <BookingSection />
      <EventSection />
    </Layout>
  );
};

export default Index;
