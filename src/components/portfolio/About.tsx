
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Card>
                <CardContent className="p-8">
                  <div className="w-48 h-48 mx-auto bg-muted rounded-full flex items-center justify-center mb-6">
                    <span className="text-6xl">👤</span>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-4">Hello! I'm a passionate developer</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                With over X years of experience in software development, I specialize in creating 
                robust, scalable applications using modern technologies. I'm passionate about 
                clean code, user experience, and continuous learning.
              </p>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing to 
                open-source projects, or sharing knowledge with the developer community.
              </p>
              
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <h4 className="text-2xl font-bold text-primary">X+</h4>
                  <p className="text-muted-foreground">Projects</p>
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-primary">X+</h4>
                  <p className="text-muted-foreground">Years Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
