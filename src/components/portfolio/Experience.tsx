
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, MapPin, Award, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const Experience = () => {
  const experiences = [
    {
      title: "Senior Manager – Data & Analytics",
      company: "Sun Pharmaceuticals",
      location: "Mumbai, India",
      period: "Apr 2025 – Present",
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
      description: "Cleaned, standardized, and analyzed procurement data across multiple ERPs to deliver insights on supplier performance.",
      achievements: [
        "Conducted UAT (User Acceptance Testing) for product releases, reducing post-launch issues by 40% and improving data reliability"
      ]
    }
  ];

  const education = [
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

  const certifications = [
    { name: "Stanford Machine Learning", provider: "Stanford University", year: "2023" },
    { name: "Databricks Spark Certification", provider: "Databricks", year: "2023" },
    { name: "Google Generative AI", provider: "Google", year: "2024" },
    { name: "Deep Learning Specialization", provider: "Coursera", year: "2022" },
    { name: "Advanced SQL for Business Intelligence", provider: "Udemy", year: "2022" }
  ];

  const awards = [
    { name: "IIMA Analytical Excellence Award", organization: "IIM Ahmedabad", year: "2024" },
    { name: "Best Upcoming Consultant", organization: "Fractal Analytics", year: "2023" },
    { name: "Kaizen Award for Process Excellence", organization: "Fractal Analytics", year: "2021" }
  ];

  return (
    <section id="experience" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Experience & Credentials</h2>
          
          <div className="space-y-12">
            {/* Resume Section */}
            <div>
              <h3 className="text-2xl font-semibold mb-6">Resume / CV</h3>
              <Card>
                <CardHeader>
                  <CardTitle>Download Complete Resume</CardTitle>
                  <CardDescription>
                    Get the detailed PDF version of my resume with complete work history and achievements.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full md:w-auto">
                    <Download className="mr-2 h-4 w-4" />
                    Download Resume PDF
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Experience Section */}
            <div>
              <h3 className="text-2xl font-semibold mb-6">Work Experience</h3>
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                        <div>
                          <CardTitle className="text-xl">{exp.title}</CardTitle>
                          <CardDescription className="text-lg font-medium text-primary">
                            {exp.company}
                          </CardDescription>
                        </div>
                        <div className="flex flex-col md:items-end gap-1">
                          <div className="flex items-center text-sm text-muted-foreground">
                            <CalendarDays className="mr-1 h-4 w-4" />
                            {exp.period}
                          </div>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <MapPin className="mr-1 h-4 w-4" />
                            {exp.location}
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">{exp.description}</p>
                      <div className="space-y-2">
                        <h4 className="font-medium">Key Achievements:</h4>
                        <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i}>{achievement}</li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Education Section */}
            <div>
              <h3 className="text-2xl font-semibold mb-6">Education</h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                        <div>
                          <CardTitle className="text-xl">{edu.degree}</CardTitle>
                          <CardDescription className="text-lg font-medium text-primary">
                            {edu.school}
                          </CardDescription>
                        </div>
                        <div className="flex flex-col md:items-end gap-1">
                          <div className="flex items-center text-sm text-muted-foreground">
                            <CalendarDays className="mr-1 h-4 w-4" />
                            {edu.period}
                          </div>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <MapPin className="mr-1 h-4 w-4" />
                            {edu.location}
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{edu.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Certifications Section */}
            <div>
              <h3 className="text-2xl font-semibold mb-6">Certifications</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {certifications.map((cert, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3">
                        <Award className="h-8 w-8 text-primary" />
                        <div>
                          <h4 className="font-semibold">{cert.name}</h4>
                          <p className="text-sm text-muted-foreground">{cert.provider} • {cert.year}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Awards Section */}
            <div>
              <h3 className="text-2xl font-semibold mb-6">Awards & Recognition</h3>
              <div className="space-y-4">
                {awards.map((award, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3">
                        <Badge variant="outline" className="p-2">
                          <Award className="h-4 w-4" />
                        </Badge>
                        <div>
                          <h4 className="font-semibold">{award.name}</h4>
                          <p className="text-sm text-muted-foreground">{award.organization} • {award.year}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
