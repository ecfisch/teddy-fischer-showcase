
import { workExperience } from "@/lib/data";
import { Briefcase, BookOpen } from "lucide-react";
import { cn } from "@/lib/utils";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-primary/10">
      <div className="container max-w-5xl">
        <div className="mb-16 text-center">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle mx-auto">
            10+ years in B2B SaaS product roles | Owned features from roadmap to launch | Deep in growth, integrations, AI tools
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10 mb-16">
          <div className="animate-slide-up">
            <h3 className="text-2xl font-display font-semibold mb-4">My Approach</h3>
            <p className="mb-4">
              Empathy-led. Data-informed. Outcome-driven. I focus on building what matters most to users and the business.
            </p>
          </div>
          
          <div className="animate-slide-up [animation-delay:0.2s]">
            <h3 className="text-2xl font-display font-semibold mb-4">What I Do</h3>
            <p>
              I help teams focus on the right problems and build thoughtful solutions—fast enough to learn, solid enough to scale.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Experience */}
          <div className="space-y-6 animate-slide-up [animation-delay:0.3s]">
            <div className="flex items-center gap-2 mb-4">
              <Briefcase className="text-accent" size={20} />
              <h3 className="text-xl font-semibold">Experience</h3>
            </div>
            
            <div className="space-y-8">
              {workExperience.map((job, index) => (
                <div key={index} className="relative pl-6 border-l border-primary/30">
                  <div className="absolute w-3 h-3 bg-accent rounded-full -left-[7px] top-1"></div>
                  <h4 className="font-medium">{job.title}</h4>
                  <p className="text-sm text-muted-foreground mb-1">{job.company}</p>
                  <p className="text-sm">{job.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="space-y-6 animate-slide-up [animation-delay:0.4s]">
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="text-accent" size={20} />
              <h3 className="text-xl font-semibold">Education</h3>
            </div>
            
            <div className="space-y-4 pl-6 border-l border-primary/30">
              <div className="relative">
                <div className="absolute w-3 h-3 bg-accent rounded-full -left-[13px] top-1"></div>
                <p className="mb-3">
                  I earned my BS in Environmental Studies and minored in Medical Anthropology. It's where I learned to think across systems and stay curious about how people behave—skills I use every day in product work.
                </p>
              </div>
              
              <div className="relative">
                <div className="absolute w-3 h-3 bg-accent rounded-full -left-[13px] top-1"></div>
                <p className="mb-3">
                  I've also completed multiple Reforge programs—including Growth Series, Product Strategy, and Product Leadership—which deepened my skills in scaling products, driving strategy, and leading cross-functional teams.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
