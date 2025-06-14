
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const ResumeDownload = () => {
  return (
    <div>
      <h3 className="text-2xl font-semibold mb-6">Resume / CV</h3>
      <Card>
        <CardHeader>
          <CardTitle>Download Complete Resume</CardTitle>
          <CardDescription>
            Get the detailed PDF version of my resume with complete work history and achievements.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button className="w-full md:w-auto">
            <Download className="mr-2 h-4 w-4" />
            Download Resume PDF
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default ResumeDownload;
