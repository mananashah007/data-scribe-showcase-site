
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-commerce Recommendation Engine",
      description: "Built a collaborative filtering recommendation system that increased sales conversion by 15% and average order value by 12%. Implemented using Python, Spark, and deployed on Azure cloud infrastructure.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
      technologies: ["Python", "Apache Spark", "Collaborative Filtering", "Azure", "SQL"],
      impact: "15% increase in sales conversion",
      githubUrl: "#",
      demoUrl: "#"
    },
    {
      title: "NLP Chatbot Analysis Platform",
      description: "Developed an intelligent chatbot analytics system using NLP techniques to analyze customer interactions, sentiment analysis, and automated response optimization. Reduced response time by 40%.",
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=400&h=250&fit=crop",
      technologies: ["Python", "NLP", "NLTK", "Transformers", "Flask", "PostgreSQL"],
      impact: "40% reduction in response time",
      githubUrl: "#",
      demoUrl: "#"
    },
    {
      title: "Supply Chain Inventory Dashboard",
      description: "Created a comprehensive inventory management dashboard with predictive analytics for demand forecasting. Implemented MDM platform that improved inventory accuracy by 25%.",
      image: "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?w=400&h=250&fit=crop",
      technologies: ["Power BI", "Python", "Time Series", "Databricks", "Azure Data Factory"],
      impact: "25% improvement in inventory accuracy",
      githubUrl: "#",
      demoUrl: "#"
    },
    {
      title: "A/B Testing & User Experience Analysis",
      description: "Designed and implemented comprehensive A/B testing framework for product features. Statistical analysis of user behavior patterns led to 20% improvement in user engagement metrics.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
      technologies: ["Python", "Statistical Analysis", "Pandas", "Matplotlib", "Google Analytics"],
      impact: "20% improvement in user engagement",
      githubUrl: "#",
      demoUrl: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Featured Projects</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                  <div className="bg-green-50 p-2 rounded-md">
                    <p className="text-sm font-semibold text-green-700">📊 Impact: {project.impact}</p>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="flex-1" asChild>
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Demo
                      </a>
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </a>
                    </Button>
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

export default Projects;
