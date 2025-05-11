
import { skills } from "@/lib/data";
import { cn } from "@/lib/utils";

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding bg-secondary/30">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="section-subtitle mx-auto">
            A combination of business acumen, technical understanding, and creative problem-solving that drives product success
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {skills.map((category, categoryIndex) => (
            <div 
              key={categoryIndex} 
              className={cn(
                "bg-white p-8 rounded-xl shadow-sm border",
                "animate-slide-up",
                `[animation-delay:${categoryIndex * 0.1}s]`
              )}
            >
              <h3 className="text-xl font-semibold mb-4">{category.name}</h3>
              <ul className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-center">
                    <div className="mr-3 h-2 w-2 rounded-full bg-primary" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-20">
          <div className="max-w-4xl mx-auto bg-white p-8 md:p-10 rounded-xl shadow">
            <h3 className="text-2xl font-display font-semibold mb-6 text-center">My Product Development Philosophy</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Start with Why",
                  description: "Every product decision begins with understanding the core user problem and business opportunity."
                },
                {
                  title: "Data & Empathy",
                  description: "Combining quantitative metrics with qualitative insights to build products users truly value."
                },
                {
                  title: "Iterate to Excellence",
                  description: "Continuous improvement through rapid experimentation, feedback, and refinement."
                }
              ].map((principle, i) => (
                <div key={i} className="text-center animate-slide-up [animation-delay:0.3s]">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-primary font-semibold">{i + 1}</span>
                  </div>
                  <h4 className="font-semibold mb-2">{principle.title}</h4>
                  <p className="text-sm text-muted-foreground">{principle.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
