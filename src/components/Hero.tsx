
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowDown } from "lucide-react";
import { cn } from "@/lib/utils";

const Hero = () => {
  return (
    <section 
      id="home"
      className="min-h-screen flex items-center pt-16 pb-8"
    >
      <div className="container">
        <div className="grid gap-8 md:gap-16 md:grid-cols-2 items-center">
          <div className="order-2 md:order-1 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-4">
              Edward <span className="text-primary">Fischer</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium mb-6 text-muted-foreground">
              Product Manager | B2B SaaS
            </h2>
            <p className="text-lg mb-8 max-w-lg">
              Integrations, Growth, 0→1 Builds
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <a href="#portfolio">
                  Check out my work <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#contact">
                  Meet with me <ArrowDown className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
            
            <div className="mt-8 md:mt-12">
              <p className="text-sm text-muted-foreground mb-3">Proud to have helped build and ship products at</p>
              <div className="flex flex-wrap items-center gap-6">
                {['LaunchNotes', 'POWR', 'Smart Sparrow'].map((company, i) => (
                  <div key={i} className={cn(
                    "text-lg md:text-xl font-semibold text-muted-foreground",
                    i === 0 && "text-primary font-display"
                  )}>
                    {company}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center md:justify-end animate-fade-in">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
                <img
                  src="/lovable-uploads/af1e18e7-362e-4854-a046-b21b21e9253e.png"
                  alt="Edward Fischer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-primary text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                Product Manager
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
