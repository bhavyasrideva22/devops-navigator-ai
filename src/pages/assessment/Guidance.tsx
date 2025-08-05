import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ArrowLeft, Download, Users, MapPin, Clock, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const Guidance = () => {
  const careerRoles = [
    {
      title: "DevOps Engineer",
      description: "Automate CI/CD pipelines, manage cloud infrastructure",
      salary: "$85k - $130k",
      demand: "High",
      skills: ["Docker", "Kubernetes", "Jenkins", "AWS/Azure", "Terraform"],
      currentMatch: 78
    },
    {
      title: "Site Reliability Engineer",
      description: "Ensure system reliability, uptime, and performance",
      salary: "$95k - $150k", 
      demand: "Very High",
      skills: ["Monitoring", "Incident Response", "Automation", "Linux", "Python"],
      currentMatch: 65
    },
    {
      title: "Cloud Engineer",
      description: "Architect and maintain cloud infrastructure solutions",
      salary: "$80k - $125k",
      demand: "High", 
      skills: ["AWS/Azure/GCP", "Networking", "Security", "IaC", "Cost Optimization"],
      currentMatch: 72
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Progress Header */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-muted-foreground">Assessment Complete!</span>
            <span className="text-sm text-muted-foreground">Step 6 of 6</span>
          </div>
          <Progress value={100} className="h-2 mb-4" />
          
          <div className="flex items-center gap-4">
            <MapPin className="h-6 w-6 text-accent" />
            <div>
              <h1 className="text-2xl font-bold">Career & Learning Guidance</h1>
              <p className="text-muted-foreground">Your personalized DevOps career roadmap</p>
            </div>
          </div>
        </div>

        {/* Career Roles */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-xl">DevOps Career Roles & Market Fit</CardTitle>
            <CardDescription>Based on your assessment results</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6">
              {careerRoles.map((role, index) => (
                <Card key={index} className="border-primary/20">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-semibold">{role.title}</h3>
                        <p className="text-muted-foreground">{role.description}</p>
                      </div>
                      <Badge className={`${role.currentMatch >= 75 ? 'bg-accent text-accent-foreground' : 
                        role.currentMatch >= 65 ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'}`}>
                        {role.currentMatch}% Match
                      </Badge>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                      <div className="flex items-center gap-2">
                        <Zap className="h-4 w-4 text-accent" />
                        <span className="text-sm">Salary: {role.salary}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-primary" />
                        <span className="text-sm">Demand: {role.demand}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-technical" />
                        <span className="text-sm">6-12 months to ready</span>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-2">Key Skills Required</h4>
                      <div className="flex flex-wrap gap-2">
                        {role.skills.map((skill, skillIndex) => (
                          <Badge key={skillIndex} variant="outline" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Download Report */}
        <Card className="mb-8 text-center border-primary/30">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-4">Your Complete Assessment Report</h2>
            <p className="text-muted-foreground mb-6">
              Download your comprehensive DevOps readiness report with detailed insights, recommendations, and learning roadmap.
            </p>
            <Button size="lg" className="bg-gradient-primary hover:shadow-hover-glow">
              <Download className="mr-2 h-5 w-5" />
              Download Report (PDF)
            </Button>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Link to="/assessment/recommendations">
            <Button variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Recommendations
            </Button>
          </Link>

          <Link to="/">
            <Button className="bg-gradient-primary hover:shadow-hover-glow">
              Return to Home
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Guidance;