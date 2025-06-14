
import { WorkExperience, Education, Certification, Award } from './types';

export const experiences: WorkExperience[] = [
  {
    title: "Senior Manager – Data & Analytics",
    company: "Sun Pharmaceuticals",
    location: "Mumbai, India",
    period: "Apr 2025 – Present",
    logo: "/lovable-uploads/c6bde0b5-adcd-42f6-b324-c5c485aed9fa.png",
    description: "Spearheaded the development and automation of data pipelines to streamline sales operations across geographies.",
    achievements: [
      "Designed and deployed Power BI dashboards enabling real-time, data-driven decision-making for the field sales force",
      "Partnered with commercial teams to automate manual workflows, improving reporting efficiency and accuracy"
    ]
  },
  {
    title: "Senior Consultant – Product & Digital Analytics",
    company: "Ernst & Young (EY)",
    location: "Bengaluru, India",
    period: "Aug 2023 – Mar 2024",
    logo: "/lovable-uploads/9939d59f-fdb8-415e-b94c-dbe5dbe87374.png",
    description: "Led the product analytics workstream using Adobe Analytics to map user journeys, identify friction points, and optimize mobile app experience.",
    achievements: [
      "Designed and analyzed A/B tests for product feature rollouts, driving a measurable uplift in user engagement",
      "Processed and analyzed ~1M call/chatbot transcripts using NLP, leading to improved AI chatbot resolution and reduced escalation to high-cost support channels",
      "Developed a Generative AI-based document retrieval chatbot, reducing customer query resolution time by ~10% and improving support efficiency by 12%"
    ]
  },
  {
    title: "Consultant – Data Science & Engineering",
    company: "Fractal Analytics",
    location: "Mumbai, India",
    period: "Apr 2019 – Aug 2023",
    logo: "/lovable-uploads/285048cb-e08b-48fe-8324-bf24657f54ed.png",
    description: "Built data-driven solutions and recommendation systems for FMCG, e-commerce, and CPG clients across multiple geographies.",
    achievements: [
      "Built a personalized recommendation engine for an Indian FMCG firm, resulting in 2.5% incremental sales growth in Q2 2023",
      "Reversed-engineered e-commerce search ranking algorithms across European platforms, improving organic rankings by an average of 2.2 positions",
      "Designed media mix models to calculate ROI on digital spends, optimizing cost-per-click and saving $400,000 in marketing spend",
      "Led pricing & promotion strategy development through regression modeling, delivering $800,000 in profit gains for a European CPG client",
      "Developed a real-time inventory tracking dashboard using Python, SQL, and Power BI — optimizing supply chain performance and reducing stockouts/over-shipments, saving $1.2M",
      "Created a robust Master Data Management (MDM) platform, integrating disparate data systems into a single product mapping master"
    ]
  },
  {
    title: "Associate Procurement Analyst",
    company: "Zycus Infotech",
    location: "Mumbai, India",
    period: "Aug 2018 – Apr 2019",
    logo: "/lovable-uploads/10b3dbca-6a04-4b84-825a-062ad1a6e3.png",
    description: "Cleaned, standardized, and analyzed procurement data across multiple ERPs to deliver insights on supplier performance.",
    achievements: [
      "Conducted UAT (User Acceptance Testing) for product releases, reducing post-launch issues by 40% and improving data reliability"
    ]
  }
];

export const education: Education[] = [
  {
    degree: "Master of Business Administration (MBA)",
    school: "Indian Institute of Management (IIM) Ahmedabad",
    location: "Ahmedabad, India",
    period: "2024 – 2025",
    description: "Specialized in Analytics and Strategy. Recipient of IIMA Analytical Excellence Award."
  },
  {
    degree: "Bachelor of Engineering in Electronics & Telecommunication",
    school: "University of Mumbai",
    location: "Mumbai, India", 
    period: "2014 – 2018",
    description: "Relevant coursework: Data Structures, Algorithms, Database Systems, Machine Learning"
  }
];

export const certifications: Certification[] = [
  { name: "Stanford Machine Learning", provider: "Stanford University", year: "2023" },
  { name: "Databricks Spark Certification", provider: "Databricks", year: "2023" },
  { name: "Google Generative AI", provider: "Google", year: "2024" },
  { name: "Deep Learning Specialization", provider: "Coursera", year: "2022" },
  { name: "Advanced SQL for Business Intelligence", provider: "Udemy", year: "2022" }
];

export const awards: Award[] = [
  { name: "IIMA Analytical Excellence Award", organization: "IIM Ahmedabad", year: "2024" },
  { name: "Best Upcoming Consultant", organization: "Fractal Analytics", year: "2023" },
  { name: "Kaizen Award for Process Excellence", organization: "Fractal Analytics", year: "2021" }
];
