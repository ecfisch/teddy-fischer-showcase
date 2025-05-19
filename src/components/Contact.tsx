
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
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <section id="contact" className="section-padding">
      <div className="container max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="section-title">Let's Chat</h2>
          <p className="section-subtitle mx-auto">
            Schedule a 15-minute intro call with me using Calendly below.
          </p>
        </div>
        
        <div className="animate-slide-up">
          <div 
            className="calendly-inline-widget" 
            data-url="https://calendly.com/teddyfischer/15-minute-intro-with-teddy" 
            style={{ minWidth: '320px', height: '700px' }} // Adjusted height for Calendly
          ></div>
        </div>

        {/* New Get in Touch Form Section */}
        <div id="get-in-touch-form" className="mt-24">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-display font-semibold text-primary">Get in Touch</h3>
            <p className="text-lg text-muted-foreground mt-4 mx-auto max-w-xl">
              Alternatively, you can send me a message using the form below.
            </p>
          </div>
          <div className="animate-slide-up [animation-delay:0.2s]">
            <iframe 
              src="https://www.powr.io/form-builder/u/c281a263_1747692392#platform=iframe" 
              style={{width: '100%', height: '531px'}} // Rounded height
              frameBorder="0"
              title="Contact Form"
              className="rounded-lg shadow-lg"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
