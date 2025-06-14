
import { Card, CardContent } from "@/components/ui/card";
import { Award } from "lucide-react";
import { certifications } from './data';

const CertificationsSection = () => {
  return (
    <div>
      <h3 className="text-2xl font-semibold mb-6">Certifications</h3>
      <div className="grid md:grid-cols-2 gap-4">
        {certifications.map((cert, index) => (
          <Card key={index} className="hover:shadow-md transition-shadow">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <Award className="h-8 w-8 text-primary" />
                <div>
                  <h4 className="font-semibold">{cert.name}</h4>
                  <p className="text-sm text-muted-foreground">{cert.provider} • {cert.year}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CertificationsSection;
