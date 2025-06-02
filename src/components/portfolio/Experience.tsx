
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, MapPin, Award, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const Experience = () => {
  const experiences = [
    {
      title: "Data Scientist & Analytics Consultant",
      company: "Various Consulting Projects",
      location: "India",
      period: "2020 - 2024",
      description: "Led data science initiatives across Financial Services, Pharma, FMCG, and Supply Chain domains. Developed ML models, recommendation engines, and analytics dashboards.",
      achievements: [
        "Built recommendation systems increasing sales by 15%",
        "Implemented NLP chatbot analytics reducing response time by 40%",
        "Created inventory management systems improving accuracy by 25%"
      ]
    },
    {
      title: "Data Engineer & Analytics Lead",
      company: "Enterprise Consulting",
      location: "India",
      period: "2018 - 2020",
      description: "Focused on data engineering pipelines, ETL processes, and business intelligence solutions. Led cross-functional teams in implementing data-driven decision making.",
      achievements: [
        "Designed scalable ETL pipelines processing 10TB+ daily data",
        "Led team of 5 data engineers and analysts",
        "Implemented A/B testing framework improving user engagement by 20%"
      ]
    }
  ];

  const education = [
    {
      degree: "Master of Business Administration (MBA)",
      school: "Indian Institute of Management (IIM) Ahmedabad",
      location: "Ahmedabad, India",
      period: "2022 - 2024",
      description: "Specialized in Analytics and Strategy. Recipient of IIMA Analytical Excellence Award."
    },
    {
      degree: "Bachelor of Technology in Computer Engineering",
      school: "Gujarat Technological University",
      location: "Gujarat, India", 
      period: "2014 - 2018",
      description: "Relevant coursework: Data Structures, Algorithms, Database Systems, Machine Learning"
    }
  ];

  const certifications = [
    { name: "Stanford Machine Learning", provider: "Stanford University", year: "2023" },
    { name: "Databricks Spark Certification", provider: "Databricks", year: "2023" },
    { name: "Google Generative AI", provider: "Google", year: "2024" },
    { name: "Deep Learning Specialization", provider: "Coursera", year: "2022" }
  ];

  const awards = [
    { name: "IIMA Analytical Excellence Award", organization: "IIM Ahmedabad", year: "2024" },
    { name: "Best Upcoming Consultant", organization: "Industry Recognition", year: "2023" },
    { name: "Kaizen Award for Process Excellence", organization: "Previous Organization", year: "2021" }
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
