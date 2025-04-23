
import React, { useEffect } from 'react';
import { Layout } from '../components/layout/Layout';
import { IntroSection } from '../components/home/IntroSection';
import { SagomeCarousel } from '../components/home/SagomeCarousel';
import { CollectionSection } from '../components/home/CollectionSection';
import { ProjectSection } from '../components/home/ProjectSection';
import { BookingSection } from '../components/home/BookingSection';
import { EventSection } from '../components/home/EventSection';

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
      <BookingSection />
      <EventSection />
    </Layout>
  );
};

export default Index;
