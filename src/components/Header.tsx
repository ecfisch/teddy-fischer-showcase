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
        <a href="#home" className="text-xl font-display font-semibold">
          Edward (Teddy) Fischer
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, index) => (
            <a 
              key={index}
              href={link.href}
              className="navbar-link text-sm"
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
          className="md:hidden"
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
                className="block py-2 text-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button 
              className="w-full justify-center" 
              variant="outline"
              asChild
              onClick={() => setMobileMenuOpen(false)}
            >
              <a href="#get-in-touch-form">Get in Touch</a> {/* Updated href */}
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
