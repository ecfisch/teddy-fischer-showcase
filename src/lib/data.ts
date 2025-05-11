
import { type Icon } from "lucide-react";

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  achievements: string[];
  tools: string[];
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export const projects: Project[] = [
  {
    id: "project-1",
    title: "Enterprise CRM Redesign",
    description: "Led the redesign of our flagship CRM product, focusing on improving the user experience and workflow efficiency for enterprise clients.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    category: "Product Redesign",
    achievements: [
      "Increased user retention by 27% through streamlined workflows",
      "Cut onboarding time from 2 weeks to 3 days",
      "Elevated NPS from 32 to 58 within 6 months of launch"
    ],
    tools: ["User Research", "Journey Mapping", "Figma", "Agile/Scrum"]
  },
  {
    id: "project-2",
    title: "Mobile Payment Platform",
    description: "Spearheaded the development of a mobile payment solution aimed at small businesses, from concept to successful market launch.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    category: "New Product Development",
    achievements: [
      "Achieved 100,000+ downloads in first quarter",
      "Processed over $2M in transactions within 6 months",
      "Reduced transaction processing time by 40%"
    ],
    tools: ["Market Analysis", "User Testing", "Jira", "A/B Testing"]
  },
  {
    id: "project-3",
    title: "Analytics Dashboard",
    description: "Conceptualized and delivered a comprehensive analytics dashboard providing real-time business intelligence to executive stakeholders.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    category: "Data Products",
    achievements: [
      "Reduced reporting time by 65% across departments",
      "Enabled data-driven decisions that increased revenue by 12%",
      "Integrated 7 previously siloed data sources"
    ],
    tools: ["SQL", "Data Modeling", "Tableau", "Stakeholder Management"]
  },
  {
    id: "project-4",
    title: "Customer Support Portal",
    description: "Redesigned the customer support experience through an intuitive self-service portal, significantly reducing support tickets.",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
    category: "Customer Experience",
    achievements: [
      "Decreased support tickets by 35%",
      "Improved customer satisfaction scores by 42%",
      "Reduced average resolution time from 72 to 24 hours"
    ],
    tools: ["Customer Journey Mapping", "Wireframing", "Zendesk", "User Testing"]
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
      "A/B Testing",
      "Data Visualization",
      "API Understanding"
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
    title: "Senior Product Manager",
    company: "TechCorp Inc.",
    period: "2020 - Present",
    description: "Leading product strategy and execution for enterprise software solutions, managing a portfolio generating $15M ARR."
  },
  {
    title: "Product Manager",
    company: "Innovation Labs",
    period: "2017 - 2020",
    description: "Led development of mobile-first digital products focused on fintech solutions for small businesses."
  },
  {
    title: "Associate Product Manager",
    company: "DataViz Solutions",
    period: "2015 - 2017",
    description: "Managed analytics and visualization products, collaborating with data science and engineering teams."
  }
];

export const education = [
  {
    degree: "MBA, Technology Management",
    institution: "Stanford University",
    period: "2013 - 2015"
  },
  {
    degree: "BS, Computer Science",
    institution: "University of Michigan",
    period: "2009 - 2013"
  }
];

export const certifications = [
  {
    name: "Certified Scrum Product Owner (CSPO)",
    issuer: "Scrum Alliance",
    year: "2018"
  },
  {
    name: "Professional Product Manager",
    issuer: "Product School",
    year: "2019"
  }
];
