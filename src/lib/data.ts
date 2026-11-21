
import { type Icon } from "lucide-react";

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  tools: string[];
  /** Public announcement or changelog post for the project. The whole card links to it. */
  link?: string;
  /** What the link is, read out by screen readers. Defaults to "Read the announcement". */
  linkLabel?: string;
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export const projects: Project[] = [
  {
    id: "project-5",
    title: "Page Vault Review",
    description: "Thorough capture is the right call, but it produces thousands of pages. Review takes legal teams from preservation to evidence: its AI identifies the specific passages to produce, with search, contextual ranking, and image analysis built for large caseloads. I took it from discovery and pricing through launch, and built much of v2 myself.",
    image: "/page-vault-review.png",
    category: "AI Product",
    tools: ["Customer Discovery", "Pricing & Packaging", "LLM Features", "Go-to-Market"],
    link: "https://changelog.page-vault.com/page-vault/the-new-page-vault-review-every-capture-in-your-case-reviewed-for-you"
  },
  {
    id: "project-6",
    title: "Capture Browser Redesign",
    description: "The browser is where customers do their daily work, so we tested prototypes with users before building. Fewer than 10% of users switched back, which let us retire the legacy browser for all customers without incident.",
    image: "/page-vault-browser-redesign.png",
    category: "Product Feature",
    tools: ["Usability Testing", "Prototyping", "Product Analytics", "Migration"],
    link: "https://changelog.page-vault.com/page-vault/a-new-page-vault-browser"
  },
  {
    id: "project-1",
    title: "Digests",
    description: "Digests started as a simple question: 'Can we send fewer emails?' It turned into one of our most-loved features.",
    image: "/6e9fc5c8-341c-4ae4-8ee1-baf3893948b0.png", // Updated image
    category: "Product Feature",
    tools: ["User Research", "Email Design", "Analytics", "Customer Feedback"],
    link: "https://updates.launchnotes.com/announcements/digests-for-enhanced-product-communications"
  },
  {
    id: "project-2",
    title: "Self Serve Reboot",
    description: "We needed growth without sacrificing enterprise deals. The self-serve relaunch found that balance.",
    image: "/446ad5d0-6a5c-4f7b-af7a-1df429e5f511.png", // Updated image
    category: "Growth",
    tools: ["Pricing Strategy", "User Flows", "A/B Testing", "Onboarding"],
    // LaunchNotes has since returned to demo-only sales, so this points at an archived copy.
    link: "https://web.archive.org/web/20241211115708/https://www.launchnotes.com/free-trial",
    linkLabel: "See the archived free trial page"
  },
  {
    id: "project-3",
    title: "Slack Integration",
    description: "The original Slack integration wasn't meeting user needs. By digging deeper, we uncovered a better model and built something our customers now rely on.",
    image: "/530fa895-56a6-4ce4-adfb-fba17c825881.png", // Updated image
    category: "Integrations",
    tools: ["API Design", "User Testing", "Slack API", "Workflow Automation"],
    link: "https://updates.launchnotes.com/announcements/introducing-our-new-slack-channel-integration"
  },
  {
    id: "project-4",
    title: "Loom Integration",
    description: "This started as a marketing initiative, but through smart research and fast iteration, it became one of our most impactful, user-loved features.",
    image: "/32e1bf22-4851-4a20-a541-bc453d1e5b66.png", // Updated image
    category: "Integrations",
    tools: ["Video Embedding", "API Integration", "Partnership Development", "User Feedback"],
    link: "https://updates.launchnotes.com/announcements/introducing-the-loom-integration-for-announcements"
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
      "LLM Feature Design & Testing",
      "GraphQL & REST APIs"
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
    description: "Build and ship products across the Page Vault platform: the capture browser, usage reporting, and Review, an AI evidence review tool I took from discovery to launch. I work as a hands-on product engineer, shipping production code alongside discovery, pricing, and launches."
  },
  {
    title: "Product Manager",
    company: "LaunchNotes",
    period: "",
    description: "First product hire. Took features from roadmap to launch across integrations, self-serve, and core product."
  },
  {
    title: "Product Manager",
    company: "POWR",
    period: "",
    description: "First PM hired by the product leader. Ran growth experiments that raised activation 2.3x and grew a core product line's MRR by 50%."
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
