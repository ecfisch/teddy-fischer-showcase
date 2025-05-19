
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Work', href: '#portfolio' },
    { label: 'Skills', href: '#skills' },
    { label: "Let's Chat", href: '#contact' }, // Points to Calendly section
  ];

  return (
    <header 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled 
          ? "bg-background/95 backdrop-blur-sm shadow-sm py-2" 
          : "bg-transparent py-4"
      )}
    >
      <div className="container flex items-center justify-between">
        <a href="#home" className="text-xl font-display font-semibold text-foreground">
          Edward (Teddy) Fischer
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, index) => (
            <a 
              key={index}
              href={link.href}
              className="navbar-link text-sm text-muted-foreground hover:text-primary"
            >
              {link.label}
            </a>
          ))}
          <Button asChild variant="outline">
            <a href="#get-in-touch-form">Get in Touch</a> {/* Updated href */}
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
          className="md:hidden text-foreground"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-card border-t border-border">
          <div className="container py-4 flex flex-col space-y-4">
            {navLinks.map((link, index) => (
              <a 
                key={index} 
                href={link.href}
                className="block py-2 text-lg text-card-foreground hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button 
              className="w-full justify-center" 
              variant="outline"
              asChild
              onClick={() => {
                setMobileMenuOpen(false);
                // Smooth scroll for mobile, as direct href might not work well with closing menu
                const targetElement = document.getElementById('get-in-touch-form');
                if (targetElement) {
                  targetElement.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              {/* Using a span or div inside 'asChild' if 'a' tag causes issues with programmatic scroll */}
              <span // Changed from <a> to <span> to handle click and scroll manually
                onClick={(e) => {
                  e.preventDefault(); // Prevent default anchor behavior if it were an <a>
                  const targetElement = document.getElementById('get-in-touch-form');
                  if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                  }
                   setMobileMenuOpen(false);
                }}
                role="button" // for accessibility
                tabIndex={0} // for accessibility
                onKeyDown={(e) => { // for accessibility
                  if (e.key === 'Enter' || e.key === ' ') {
                     const targetElement = document.getElementById('get-in-touch-form');
                     if (targetElement) {
                       targetElement.scrollIntoView({ behavior: 'smooth' });
                     }
                     setMobileMenuOpen(false);
                  }
                }}
              >
                Get in Touch
              </span>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
