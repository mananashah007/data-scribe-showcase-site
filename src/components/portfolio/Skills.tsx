
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "TypeScript", "Vue.js", "HTML5", "CSS3", "Tailwind CSS", "JavaScript", "Next.js"]
    },
    {
      title: "Backend",
      skills: ["Node.js", "Python", "Express.js", "Django", "PostgreSQL", "MongoDB", "REST APIs", "GraphQL"]
    },
    {
      title: "Tools & Technologies",
      skills: ["Git", "Docker", "AWS", "Firebase", "Vercel", "Figma", "VS Code", "Linux"]
    },
    {
      title: "Soft Skills",
      skills: ["Problem Solving", "Team Leadership", "Communication", "Project Management", "Agile", "Mentoring"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Skills & Technologies</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="text-sm">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
