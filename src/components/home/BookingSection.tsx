
import React from 'react';
import { EmailCapture } from '../ui/EmailCapture';

export const BookingSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-ash to-night">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <EmailCapture />
        </div>
      </div>
    </section>
  );
};
