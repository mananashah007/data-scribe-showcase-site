
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming & Data",
      skills: ["Python", "SQL", "R", "Spark", "PySpark", "Pandas", "NumPy", "Scikit-learn"]
    },
    {
      title: "Analytics & ML",
      skills: ["Machine Learning", "Deep Learning", "NLP", "A/B Testing", "Statistical Analysis", "Predictive Modeling", "Time Series", "Recommendation Systems"]
    },
    {
      title: "Data Engineering",
      skills: ["Apache Spark", "ETL Pipelines", "Data Warehousing", "Databricks", "Azure", "AWS", "Snowflake", "Data Lakes"]
    },
    {
      title: "Visualization & BI",
      skills: ["Power BI", "Tableau", "Matplotlib", "Seaborn", "Plotly", "Excel", "Google Analytics", "Dashboard Design"]
    },
    {
      title: "Databases & Tools",
      skills: ["MySQL", "PostgreSQL", "MongoDB", "Git", "Docker", "Jupyter", "VS Code", "Linux"]
    },
    {
      title: "Business & Leadership",
      skills: ["Product Analytics", "Strategy Consulting", "Team Leadership", "Stakeholder Management", "Business Intelligence", "Process Optimization"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Skills & Technologies</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
