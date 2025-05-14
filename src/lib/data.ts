
import { type Icon } from "lucide-react";

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  tools: string[];
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export const projects: Project[] = [
  {
    id: "project-1",
    title: "Digests",
    description: "Digests started as a simple question: 'Can we send fewer emails?' It turned into one of our most-loved features.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    category: "Product Feature",
    tools: ["User Research", "Email Design", "Analytics", "Customer Feedback"]
  },
  {
    id: "project-2",
    title: "Self Serve Reboot",
    description: "We needed growth without sacrificing enterprise deals. The self-serve relaunch found that balance.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    category: "Growth",
    tools: ["Pricing Strategy", "User Flows", "A/B Testing", "Onboarding"]
  },
  {
    id: "project-3",
    title: "Slack Integration",
    description: "The original Slack integration wasn't meeting user needs. By digging deeper, we uncovered a better model—and built something our customers now rely on.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    category: "Integrations",
    tools: ["API Design", "User Testing", "Slack API", "Workflow Automation"]
  },
  {
    id: "project-4",
    title: "Loom Integration",
    description: "This started as a marketing initiative—but through smart research and fast iteration, it became one of our most impactful, user-loved features.",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
    category: "Integrations",
    tools: ["Video Embedding", "API Integration", "Partnership Development", "User Feedback"]
  }
];

export const skills: SkillCategory[] = [
  {
    name: "Product Strategy",
    skills: [
      "Market Research",
      "Product Vision & Roadmapping",
      "Competitive Analysis",
      "Business Case Development",
      "Go-to-Market Strategy"
    ]
  },
  {
    name: "Technical Skills",
    skills: [
      "Product Analytics",
      "SQL",
      "API Design & Integration",
      "Data Visualization",
      "AI Prompt Engineering"
    ]
  },
  {
    name: "UX/Design",
    skills: [
      "User Research",
      "Wireframing",
      "Prototyping",
      "Figma/Sketch",
      "Design Thinking"
    ]
  },
  {
    name: "Leadership",
    skills: [
      "Cross-functional Team Leadership",
      "Stakeholder Management",
      "Agile/Scrum",
      "OKR Implementation",
      "Executive Communications"
    ]
  }
];

export const workExperience = [
  {
    title: "Product Manager",
    company: "LaunchNotes",
    period: "",
    description: "Sole PM, owned product from roadmap to launch across integrations and core features."
  },
  {
    title: "Product Manager",
    company: "POWR",
    period: "",
    description: "Led growth and retention initiatives, improving conversion rates and reducing churn."
  },
  {
    title: "Product Manager",
    company: "Smart Sparrow",
    period: "",
    description: "Managed cross-functional builds, from concept to delivery across product suite."
  }
];

export const education = [
  {
    degree: "BS, Environmental Studies",
    institution: "University",
    period: "Minor: Medical Anthropology"
  }
];
