import { useState } from 'react';
import { projects } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const categories = ['All', ...Array.from(new Set(projects.map(p => p.category)))];

const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="portfolio" className="section-padding">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="section-title">My Work</h2>
          <p className="section-subtitle mx-auto">
            Here are a few projects I've shipped that made a difference.
          </p>
          
          {/* Category filter */}
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {categories.map((category, index) => (
              <Button
                key={index}
                onClick={() => setActiveCategory(category)}
                variant={activeCategory === category ? "default" : "outline"}
                size="sm"
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id} 
              className={cn(
                "group relative bg-card border rounded-xl overflow-hidden shadow-sm card-hover",
                "animate-slide-up",
                index % 2 === 1 && "[animation-delay:0.2s]",
                // Keyboard focus lands on the title link, so show the focus ring on the whole card.
                project.link && "has-[a:focus-visible]:ring-2 has-[a:focus-visible]:ring-primary has-[a:focus-visible]:ring-offset-2 has-[a:focus-visible]:ring-offset-background"
              )}
            >
              <div className="h-60 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover object-top transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-card-foreground">
                    {project.link ? (
                      // The link's ::after covers the card, so the whole card is clickable
                      // while screen readers still get one link named by the title.
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="after:absolute after:inset-0 focus:outline-none"
                      >
                        {project.title}
                        <span className="sr-only">
                          {`, ${project.linkLabel ?? 'Read the announcement'}, opens in a new tab`}
                        </span>
                      </a>
                    ) : (
                      project.title
                    )}
                  </h3>
                  <span className="text-xs bg-secondary px-3 py-1 rounded-full text-secondary-foreground">
                    {project.category}
                  </span>
                </div>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool, i) => (
                    <span 
                      key={i} 
                      className="bg-secondary/50 text-xs px-2 py-1 rounded-full text-secondary-foreground/80"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
