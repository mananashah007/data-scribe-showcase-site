
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarDays, MapPin } from "lucide-react";
import { experiences } from './data';

const WorkExperience = () => {
  return (
    <div>
      <h3 className="text-2xl font-semibold mb-6">Work Experience</h3>
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <Card key={index}>
            <CardHeader>
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                <div className="flex items-start gap-4 flex-1">
                  <div className="w-16 h-16 bg-white rounded-lg p-2 flex items-center justify-center shadow-sm border">
                    <img 
                      src={exp.logo} 
                      alt={`${exp.company} logo`} 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl">{exp.title}</CardTitle>
                    <CardDescription className="text-lg font-medium text-primary">
                      {exp.company}
                    </CardDescription>
                  </div>
                </div>
                <div className="flex flex-col md:items-end gap-1">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <CalendarDays className="mr-1 h-4 w-4" />
                    {exp.period}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="mr-1 h-4 w-4" />
                    {exp.location}
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">{exp.description}</p>
              <div className="space-y-2">
                <h4 className="font-medium">Key Achievements:</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default WorkExperience;
