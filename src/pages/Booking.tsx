
import React, { useState, useEffect } from 'react';
import { Layout } from '../components/layout/Layout';
import { GlitchText } from '../components/ui/GlitchText';
import { BookingSuccess } from '../components/booking/BookingSuccess';
import { BookingInfo } from '../components/booking/BookingInfo';
import { BookingForm } from '../components/booking/BookingForm';

const Booking: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <div className="pt-24 pb-20 lg:pt-32 lg:pb-32 bg-night">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display mb-6 text-center">
              <GlitchText text="Prenota Ora" intensity="low" tag="span" />
            </h1>
            
            <p className="text-lg text-fog/80 text-center">
              Assicurati le opere prima della fine del tempo.
              Prenota ora e ricevi uno sconto speciale del 15%.
            </p>
          </div>
          
          {submitted ? (
            <BookingSuccess />
          ) : (
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                <BookingInfo />
                <BookingForm onSubmit={() => setSubmitted(true)} />
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Booking;
