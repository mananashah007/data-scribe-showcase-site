
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming & Data",
      skills: ["Python", "SQL", "PySpark", "Pandas", "NumPy", "Scikit-learn"],
      icon: "💻",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Analytics & ML",
      skills: ["Machine Learning", "Generative AI", "NLP", "A/B Testing", "Statistical Analysis", "Predictive Modeling", "Time Series", "Recommendation Systems"],
      icon: "🧠",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Data Engineering",
      skills: ["Apache Spark", "ETL Pipelines", "Data Warehousing", "Databricks", "Azure"],
      icon: "🔧",
      color: "from-green-500 to-teal-500"
    },
    {
      title: "Visualization & BI",
      skills: ["Power BI", "Matplotlib", "Seaborn", "Plotly", "Excel", "Dashboard Design"],
      icon: "📊",
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Databases & Tools",
      skills: ["MySQL", "PostgreSQL", "Git", "Jupyter", "VS Code"],
      icon: "🗄️",
      color: "from-indigo-500 to-blue-500"
    },
    {
      title: "Business & Leadership",
      skills: ["Product Analytics", "Strategy Consulting", "Team Leadership", "Stakeholder Management", "Business Intelligence", "Process Optimization"],
      icon: "👥",
      color: "from-yellow-500 to-orange-500"
    }
  ];

  return (
    <section id="skills" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-5xl font-bold mb-6 gradient-text">Skills & Technologies</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive expertise across the entire data science and engineering stack
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <Card key={index} className="group hover-lift glass-card border-0 shadow-xl relative overflow-hidden">
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                <CardHeader className="relative">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="text-3xl">{category.icon}</div>
                    <CardTitle className="text-xl font-bold">{category.title}</CardTitle>
                  </div>
                </CardHeader>
                
                <CardContent className="relative">
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex} 
                        variant="secondary" 
                        className="bg-white/80 text-gray-700 hover:bg-white hover:shadow-md transition-all duration-200 border border-gray-200"
                      >
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
