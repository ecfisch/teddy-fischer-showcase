
import React, { useEffect } from 'react';

const ContactSection = () => {
  useEffect(() => {
    // Load the Calendly script dynamically
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Clean up on unmount
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="contact" className="section-padding">
      <div className="container max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="section-title">Get in Touch</h2>
          <p className="section-subtitle mx-auto">
            Interested in working together? Schedule a meeting with me below.
          </p>
        </div>
        
        <div className="animate-slide-up">
          <div 
            className="calendly-inline-widget" 
            data-url="https://calendly.com/teddyfischer/15-minute-intro-with-teddy" 
            style={{ minWidth: '320px', height: '700px' }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
