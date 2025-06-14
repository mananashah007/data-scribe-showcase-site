
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award } from "lucide-react";
import { awards } from './data';

const AwardsSection = () => {
  return (
    <div>
      <h3 className="text-2xl font-semibold mb-6">Awards & Recognition</h3>
      <div className="space-y-4">
        {awards.map((award, index) => (
          <Card key={index} className="hover:shadow-md transition-shadow">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <Badge variant="outline" className="p-2">
                  <Award className="h-4 w-4" />
                </Badge>
                <div>
                  <h4 className="font-semibold">{award.name}</h4>
                  <p className="text-sm text-muted-foreground">{award.organization} • {award.year}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AwardsSection;
