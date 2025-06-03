import { Card, CardContent } from "@/components/ui/card";
const About = () => {
  return <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Card>
                <CardContent className="p-8">
                  <div className="w-48 h-48 mx-auto rounded-full overflow-hidden mb-6">
                    <img src="/lovable-uploads/1b516373-5bbd-4dfb-bdb8-921071d44aa1.png" alt="Manan Shah - Data Scientist & Engineer" className="w-full h-full object-cover" />
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-4">Data Scientist &amp; an MBA from IIM Ahmedabad</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                With 6+ years of experience across Financial Services, Pharma, FMCG, and Supply Chain domains, 
                I specialize in building data-driven products and scalable analytics solutions. My journey spans 
                from engineering to analytics to consulting, culminating in an MBA from IIM Ahmedabad.
              </p>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">I'm passionate about transforming complex data challenges into actionable business insights, building recommendation engines, developing complex data driven solutions, and creating robust data pipelines that drive measurable impact.</p>

              <div className="bg-blue-50 p-4 rounded-lg mb-6">
                <h4 className="font-semibold text-primary mb-2">Current Goal</h4>
                <p className="text-sm text-muted-foreground">Seeking Data Science, Data Engineering or Product Analytics roles at product-first firms where I can leverage my technical expertise and business acumen to drive innovation.</p>
              </div>
              
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <h4 className="text-2xl font-bold text-primary">6+</h4>
                  <p className="text-muted-foreground">Years Experience</p>
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-primary">4</h4>
                  <p className="text-muted-foreground">Industry Domains</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;