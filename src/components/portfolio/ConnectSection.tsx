
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, MessageCircle } from "lucide-react";

const ConnectSection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl opacity-10 floating"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl opacity-10 floating" style={{animationDelay: '2s'}}></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Connect & Collaborate
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Ready to transform data into actionable insights? Let's discuss your next project.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Button 
              size="lg" 
              variant="secondary"
              className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-4 h-auto shadow-lg hover-lift"
              onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Start a Conversation
            </Button>
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-4 h-auto shadow-lg hover-lift"
              asChild
            >
              <a href="mailto:x24manans@iima.ac.in">
                <Mail className="mr-2 h-5 w-5" />
                Send Email
              </a>
            </Button>
          </div>

          <div className="flex justify-center space-x-8">
            <Button 
              variant="ghost" 
              size="icon" 
              className="w-16 h-16 hover:bg-white/20 rounded-full text-white hover:text-white hover-lift group" 
              asChild
            >
              <a href="https://github.com/mananashah007" target="_blank" rel="noopener noreferrer">
                <Github className="h-8 w-8 group-hover:scale-110 transition-transform duration-200" />
              </a>
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="w-16 h-16 hover:bg-white/20 rounded-full text-white hover:text-white hover-lift group" 
              asChild
            >
              <a href="https://www.linkedin.com/in/mananshah096/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-8 w-8 group-hover:scale-110 transition-transform duration-200" />
              </a>
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="w-16 h-16 hover:bg-white/20 rounded-full text-white hover:text-white hover-lift group" 
              asChild
            >
              <a href="mailto:x24manans@iima.ac.in">
                <Mail className="h-8 w-8 group-hover:scale-110 transition-transform duration-200" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConnectSection;
