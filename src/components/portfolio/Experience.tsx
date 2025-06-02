
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Senior Software Engineer",
      company: "Tech Company",
      location: "San Francisco, CA",
      period: "2022 - Present",
      description: "Led development of key features for a SaaS platform serving 10k+ users. Mentored junior developers and implemented best practices for code quality.",
      achievements: [
        "Reduced application load time by 40%",
        "Led a team of 5 developers",
        "Implemented CI/CD pipeline"
      ]
    },
    {
      title: "Full Stack Developer",
      company: "Startup Inc",
      location: "Remote",
      period: "2020 - 2022",
      description: "Built and maintained web applications using modern frameworks. Collaborated with cross-functional teams to deliver high-quality products.",
      achievements: [
        "Developed 3 major product features",
        "Improved test coverage to 85%",
        "Optimized database queries"
      ]
    },
    {
      title: "Junior Developer",
      company: "Digital Agency",
      location: "New York, NY",
      period: "2019 - 2020",
      description: "Worked on client projects ranging from small business websites to complex web applications. Gained experience in multiple technologies.",
      achievements: [
        "Delivered 15+ client projects",
        "Learned 5 new technologies",
        "Received excellent client feedback"
      ]
    }
  ];

  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      school: "University Name",
      location: "City, State",
      period: "2015 - 2019",
      description: "Relevant coursework: Data Structures, Algorithms, Software Engineering, Database Systems"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Experience & Education</h2>
          
          <div className="space-y-12">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
