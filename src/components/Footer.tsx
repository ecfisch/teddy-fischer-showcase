
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
    <footer className="bg-card text-card-foreground py-10">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <p className="text-lg font-display font-medium mb-2">Edward (Teddy) Fischer</p>
            <p className="text-muted-foreground">Product Manager | B2B SaaS</p>
          </div>
          
          <div className="mt-6 md:mt-0">
            <button 
              onClick={scrollToTop}
              className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp size={20} />
            </button>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-muted-foreground">
              &copy; {currentYear} Edward (Teddy) Fischer. All rights reserved.
            </div>
            
            <div className="flex flex-wrap gap-4">
              <p className="text-sm text-muted-foreground">
                Connect with me: 
                <a 
                  href="https://www.linkedin.com/in/teddyedwardfischer/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="ml-2 hover:text-primary transition-colors"
                >
                  LinkedIn
                </a> 
                <span className="mx-1">|</span>
                <a 
                  href="https://github.com/ecfisch" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
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
                    className="text-sm hover:text-primary transition-colors"
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
