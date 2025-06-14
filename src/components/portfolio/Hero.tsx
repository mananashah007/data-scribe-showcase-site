
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download, ArrowDown } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 floating"></div>
      <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 floating" style={{animationDelay: '2s'}}></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="fade-in flex flex-col items-center">
            {/* Profile Image */}
            <div className="mb-8">
              <Avatar className="w-32 h-32 md:w-40 md:h-40 border-4 border-white shadow-2xl hover-lift">
                <AvatarImage 
                  src="/lovable-uploads/1b516373-5bbd-4dfb-bdb8-921071d44aa1.png" 
                  alt="Manan Shah"
                  className="object-cover"
                />
                <AvatarFallback className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                  MS
                </AvatarFallback>
              </Avatar>
            </div>

            <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
              Hi, I'm <span className="gradient-text">Manan Shah</span>
            </h1>
            <p className="text-2xl md:text-3xl text-gray-600 mb-6 font-medium">
              Data Scientist & Analytics Engineer
            </p>
            <p className="text-lg md:text-xl text-gray-500 mb-4">
              IIM Ahmedabad | Building Data-Driven Solutions
            </p>
          </div>
          
          <div className="slide-up mb-12">
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              6+ years of experience across Financial Services, Pharma, FMCG, and Supply Chain domains. 
              MBA from IIM Ahmedabad with expertise in data science, analytics, and data engineering.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12 bounce-in">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-4 h-auto shadow-lg hover-lift"
              onClick={() => document.getElementById('projects')?.scrollIntoView({behavior: 'smooth'})}
            >
              View Projects
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-4 h-auto border-2 hover:bg-blue-50 hover:border-blue-300 hover-lift"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-4 h-auto border-2 hover:bg-purple-50 hover:border-purple-300 hover-lift"
              onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}
            >
              <Mail className="mr-2 h-5 w-5" />
              Contact Me
            </Button>
          </div>

          <div className="flex justify-center space-x-8 mb-12 fade-in">
            <Button variant="ghost" size="icon" className="w-12 h-12 hover:text-primary hover:bg-blue-50 rounded-full hover-lift" asChild>
              <a href="https://github.com/mananashah007" target="_blank" rel="noopener noreferrer">
                <Github className="h-6 w-6" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" className="w-12 h-12 hover:text-primary hover:bg-blue-50 rounded-full hover-lift" asChild>
              <a href="https://www.linkedin.com/in/mananshah096/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-6 w-6" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" className="w-12 h-12 hover:text-primary hover:bg-blue-50 rounded-full hover-lift" asChild>
              <a href="mailto:x24manans@iima.ac.in">
                <Mail className="h-6 w-6" />
              </a>
            </Button>
          </div>

          <div className="animate-bounce">
            <ArrowDown className="h-6 w-6 text-gray-400 mx-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
