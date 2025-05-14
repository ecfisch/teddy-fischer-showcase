
import { skills } from "@/lib/data";
import { cn } from "@/lib/utils";

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding bg-primary/5">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="section-subtitle mx-auto">
            A combination of technical know-how and professional skills that drive product success
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className={cn(
            "bg-card/90 p-8 rounded-xl shadow-sm border border-border",
            "animate-slide-up"
          )}>
            <h3 className="text-xl font-semibold mb-4">Technical Skills</h3>
            <p className="mb-4">SQL, APIs, funnels, AI prompts—you know, product stuff</p>
            <ul className="space-y-3">
              {skills[1].skills.map((skill, skillIndex) => (
                <li key={skillIndex} className="flex items-center">
                  <div className="mr-3 h-2 w-2 rounded-full bg-accent" />
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className={cn(
            "bg-card/90 p-8 rounded-xl shadow-sm border border-border",
            "animate-slide-up",
            "[animation-delay:0.1s]"
          )}>
            <h3 className="text-xl font-semibold mb-4">Professional Skills</h3>
            <p className="mb-4">I focus on alignment, clarity, and meaningful outcomes—not just features.</p>
            <ul className="space-y-3">
              {skills[3].skills.map((skill, skillIndex) => (
                <li key={skillIndex} className="flex items-center">
                  <div className="mr-3 h-2 w-2 rounded-full bg-accent" />
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
