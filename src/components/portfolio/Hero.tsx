
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-muted/20 pt-16">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Hi, I'm <span className="text-primary">Your Name</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in">
            Full Stack Developer & Software Engineer
          </p>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in">
            Passionate about creating innovative solutions and building exceptional user experiences. 
            I love turning complex problems into simple, beautiful, and intuitive solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 animate-fade-in">
            <Button size="lg" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
            <Button variant="outline" size="lg">
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
          </div>

          <div className="flex justify-center space-x-6 animate-fade-in">
            <Button variant="ghost" size="icon" className="hover:text-primary">
              <Github className="h-6 w-6" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:text-primary">
              <Linkedin className="h-6 w-6" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:text-primary">
              <Mail className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
