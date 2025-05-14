
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-primary text-primary-foreground py-10">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <p className="text-lg font-display font-medium mb-2">Edward Fischer</p>
            <p className="text-primary-foreground/70">Product Manager | B2B SaaS</p>
          </div>
          
          <div className="mt-6 md:mt-0">
            <button 
              onClick={scrollToTop}
              className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp size={20} />
            </button>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-primary-foreground/70">
              &copy; {currentYear} Edward (Teddy) Fischer. All rights reserved.
            </div>
            
            <div className="flex flex-wrap gap-4">
              <p className="text-sm text-primary-foreground/90">
                Connect with me: 
                <a 
                  href="https://linkedin.com/in/edwardfischer" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="ml-2 hover:text-white transition-colors"
                >
                  LinkedIn
                </a> 
                <span className="mx-1">|</span>
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  GitHub
                </a>
              </p>
            </div>
            
            <nav className="flex flex-wrap gap-6">
              {["Home", "About", "Work", "Skills", "Let's Chat"].map((item, i) => {
                const href = item === "Work" 
                  ? "#portfolio" 
                  : item === "Let's Chat" 
                    ? "#contact" 
                    : `#${item.toLowerCase()}`;
                
                return (
                  <a
                    key={i}
                    href={href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                );
              })}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
