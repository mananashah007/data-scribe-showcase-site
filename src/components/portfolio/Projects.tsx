
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-commerce Recommendation Engine",
      description: "Decoded the search rank algorithm of major ecommerce retailers to help the client understand the optimize their bidding for keywords and digital advertising campaign and calculate its ROI.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      technologies: ["Python", "Apache Spark", "Collaborative Filtering", "Azure", "SQL"],
      impact: "15% increase in sales conversion",
      metrics: [
        { label: "Sales Uplift", value: "15%" },
        { label: "AOV Growth", value: "12%" }
      ]
    },
    {
      title: "NLP Chatbot Analysis Platform",
      description: "Created a GenAI based chatbot for customer servicing department to help them address customer queries efficiently",
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=600&h=400&fit=crop",
      technologies: ["Python", "NLP", "NLTK", "Transformers", "Flask", "PostgreSQL"],
      impact: "40% reduction in response time",
      metrics: [
        { label: "Response Time", value: "-40%" },
        { label: "Resolution Rate", value: "+25%" }
      ]
    },
    {
      title: "Supply Chain Inventory Dashboard",
      description: "Created a comprehensive inventory management dashboard with predictive analytics for demand forecasting. Implemented MDM platform that improved inventory accuracy by 25%.",
      image: "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?w=600&h=400&fit=crop",
      technologies: ["Power BI", "Python", "Time Series", "Databricks", "Azure Data Factory"],
      impact: "25% improvement in inventory accuracy",
      metrics: [
        { label: "Accuracy", value: "+25%" },
        { label: "Cost Savings", value: "$1.2M" }
      ]
    },
    {
      title: "A/B Testing & User Experience Analysis",
      description: "Designed and implemented comprehensive A/B testing framework for product features. Statistical analysis of user behavior patterns led to 20% improvement in user engagement metrics.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      technologies: ["Python", "Statistical Analysis", "Pandas", "Matplotlib", "Google Analytics"],
      impact: "20% improvement in user engagement",
      metrics: [
        { label: "Engagement", value: "+20%" },
        { label: "Conversion", value: "+18%" }
      ]
    }
  ];

  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-5xl font-bold mb-6 gradient-text">Featured Projects</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Showcasing data-driven solutions that deliver measurable business impact across multiple domains
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="group overflow-hidden hover-lift glass-card border-0 shadow-xl">
                <div className="aspect-video overflow-hidden relative">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl font-bold text-gray-800 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 leading-relaxed text-base">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  {/* Impact Metrics */}
                  <div className="bg-gradient-to-r from-green-50 to-blue-50 p-4 rounded-xl border border-green-100">
                    <div className="flex items-center gap-2 mb-3">
                      <TrendingUp className="h-5 w-5 text-green-600" />
                      <h4 className="font-semibold text-green-800">Business Impact</h4>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      {project.metrics.map((metric, metricIndex) => (
                        <div key={metricIndex} className="text-center">
                          <div className="text-2xl font-bold text-green-700">{metric.value}</div>
                          <div className="text-sm text-green-600">{metric.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-700">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex} 
                          variant="secondary" 
                          className="bg-blue-100 text-blue-800 hover:bg-blue-200 transition-colors duration-200 px-3 py-1"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
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
