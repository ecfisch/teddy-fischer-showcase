
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
    id: "project-5",
    title: "Page Vault Review",
    description: "Thorough capture is the right call, but it produces thousands of pages. Review uses AI to surface the pages that matter to a case, then lets legal teams mark, redact, and export them. I owned it from discovery and pricing through launch, and wrote much of the v2 code.",
    image: "/page-vault-review.png",
    category: "AI Product",
    tools: ["Customer Discovery", "Pricing & Packaging", "LLM Features", "Go-to-Market"]
  },
  {
    id: "project-6",
    title: "Capture Browser Redesign",
    description: "The browser is where customers do their daily work, so we tested prototypes with users before building. Most users switched and stayed, and we retired the legacy browser a few months later.",
    image: "/page-vault-browser-redesign.png",
    category: "Product Feature",
    tools: ["Usability Testing", "Prototyping", "Product Analytics", "Migration"]
  },
  {
    id: "project-1",
    title: "Digests",
    description: "Digests started as a simple question: 'Can we send fewer emails?' It turned into one of our most-loved features.",
    image: "/6e9fc5c8-341c-4ae4-8ee1-baf3893948b0.png", // Updated image
    category: "Product Feature",
    tools: ["User Research", "Email Design", "Analytics", "Customer Feedback"]
  },
  {
    id: "project-2",
    title: "Self Serve Reboot",
    description: "We needed growth without sacrificing enterprise deals. The self-serve relaunch found that balance.",
    image: "/446ad5d0-6a5c-4f7b-af7a-1df429e5f511.png", // Updated image
    category: "Growth",
    tools: ["Pricing Strategy", "User Flows", "A/B Testing", "Onboarding"]
  },
  {
    id: "project-3",
    title: "Slack Integration",
    description: "The original Slack integration wasn't meeting user needs. By digging deeper, we uncovered a better model and built something our customers now rely on.",
    image: "/530fa895-56a6-4ce4-adfb-fba17c825881.png", // Updated image
    category: "Integrations",
    tools: ["API Design", "User Testing", "Slack API", "Workflow Automation"]
  },
  {
    id: "project-4",
    title: "Loom Integration",
    description: "This started as a marketing initiative, but through smart research and fast iteration, it became one of our most impactful, user-loved features.",
    image: "/32e1bf22-4851-4a20-a541-bc453d1e5b66.png", // Updated image
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
      "AI-Native Development",
      "LLM Feature Design",
      "API Design & Integration"
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
      "Pricing & Packaging",
      "Launch & GTM Enablement",
      "Stakeholder Management",
      "Executive Communications"
    ]
  }
];

export const workExperience = [
  {
    title: "Senior Product Manager",
    company: "Page Vault",
    period: "",
    description: "Own Page Vault Review, an AI evidence review product, from discovery and pricing through launch. I also ship much of the product myself as a hands-on product engineer."
  },
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
    title: "Project Manager",
    company: "Smart Sparrow",
    period: "",
    description: "Managed cross-functional builds, from concept to delivery across client projects."
  }
];

export const education = [
  {
    degree: "BS, Environmental Studies",
    institution: "University",
    period: "Minor: Medical Anthropology"
  }
];
