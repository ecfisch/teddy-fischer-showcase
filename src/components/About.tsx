
import { workExperience, education, certifications } from "@/lib/data";
import { Briefcase, BookOpen, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="container max-w-5xl">
        <div className="mb-16 text-center">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle mx-auto">
            With over 8 years of experience in product management, I specialize in building 
            user-centric digital products that solve complex business problems.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10 mb-16">
          <div className="animate-slide-up">
            <h3 className="text-2xl font-display font-semibold mb-4">My Approach</h3>
            <p className="mb-4">
              I believe great products are built at the intersection of business strategy, 
              technological capability, and deep user empathy. My approach combines analytical 
              rigor with creative problem-solving to deliver products that users love and that 
              drive business results.
            </p>
            <p>
              Whether leading established products or launching new innovations, I focus on creating 
              cohesive experiences that solve real problems while aligning with strategic objectives.
            </p>
          </div>
          
          <div className="animate-slide-up [animation-delay:0.2s]">
            <h3 className="text-2xl font-display font-semibold mb-4">What I Do</h3>
            <ul className="space-y-3">
              {[
                "Translate business objectives into product strategies and roadmaps",
                "Lead cross-functional teams through the product development lifecycle",
                "Balance stakeholder needs with technical constraints and user requirements",
                "Use data to inform decisions and measure product success",
                "Create seamless user experiences that drive engagement and retention"
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <span className="inline-block w-5 h-5 mr-3 mt-1 bg-primary/10 text-primary rounded-full flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Experience */}
          <div className="space-y-6 animate-slide-up [animation-delay:0.3s]">
            <div className="flex items-center gap-2 mb-4">
              <Briefcase className="text-primary" size={20} />
              <h3 className="text-xl font-semibold">Experience</h3>
            </div>
            
            <div className="space-y-8">
              {workExperience.map((job, index) => (
                <div key={index} className="relative pl-6 border-l border-muted">
                  <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-1"></div>
                  <h4 className="font-medium">{job.title}</h4>
                  <p className="text-sm text-muted-foreground mb-1">{job.company} | {job.period}</p>
                  <p className="text-sm">{job.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="space-y-6 animate-slide-up [animation-delay:0.4s]">
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="text-primary" size={20} />
              <h3 className="text-xl font-semibold">Education</h3>
            </div>
            
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="relative pl-6 border-l border-muted">
                  <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-1"></div>
                  <h4 className="font-medium">{edu.degree}</h4>
                  <p className="text-sm text-muted-foreground">{edu.institution} | {edu.period}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-6 animate-slide-up [animation-delay:0.5s]">
            <div className="flex items-center gap-2 mb-4">
              <Award className="text-primary" size={20} />
              <h3 className="text-xl font-semibold">Certifications</h3>
            </div>
            
            <div className="space-y-8">
              {certifications.map((cert, index) => (
                <div key={index} className="relative pl-6 border-l border-muted">
                  <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-1"></div>
                  <h4 className="font-medium">{cert.name}</h4>
                  <p className="text-sm text-muted-foreground">{cert.issuer} | {cert.year}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <Button variant="outline" size="lg">
            Download Full Resume
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
