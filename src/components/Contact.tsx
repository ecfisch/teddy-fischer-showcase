
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
    <>
      <section id="contact" className="section-padding">
        <div className="container max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="section-title">Let's Chat</h2>
            <p className="section-subtitle mx-auto">
              Let's connect. I'm open to new opportunities, collaborations, or conversations.
            </p>
          </div>
          
          <div className="animate-slide-up">
            <div 
              className="calendly-inline-widget" 
              data-url="https://calendly.com/teddyfischer/15-minute-intro-with-teddy" 
              style={{ minWidth: '320px', height: '1200px' }}
            ></div>
          </div>
        </div>
      </section>

      <section id="get-in-touch-form" className="section-padding bg-card">
        <div className="container max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="section-title text-primary">Get in Touch</h2>
            <p className="section-subtitle mx-auto text-muted-foreground">
              Alternatively, you can send me a message using the form below.
            </p>
          </div>
          <div className="animate-slide-up">
            <iframe 
              src="https://www.powr.io/form-builder/u/c281a263_1747692392#platform=iframe" 
              style={{ width:'100%', borderRadius: '0.5rem', border: '1px solid var(--border)' }} 
              height="531px" 
              frameBorder="0"
              title="Contact Form"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactSection;
