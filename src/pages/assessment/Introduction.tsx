import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ArrowRight, Clock, PlayCircle, Users, Zap, Target } from "lucide-react";
import { Link } from "react-router-dom";

const Introduction = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-muted-foreground">Assessment Progress</span>
            <span className="text-sm text-muted-foreground">Step 1 of 6</span>
          </div>
          <Progress value={16.67} className="h-2" />
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            Welcome to DevOps Navigator AI
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            Discover Your <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">DevOps Potential</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Take our comprehensive 20-30 minute assessment to understand your readiness for a career in DevOps engineering.
          </p>
        </div>

        {/* What is DevOps Card */}
        <Card className="mb-8 border-primary/20">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Zap className="h-6 w-6 text-primary" />
              <CardTitle className="text-2xl">What is DevOps?</CardTitle>
            </div>
            <CardDescription className="text-base">
              Understanding the fundamentals before we begin
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-lg mb-3">Definition & Purpose</h3>
                <p className="text-muted-foreground mb-4">
                  DevOps integrates development and operations teams to improve software delivery and infrastructure management through:
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    Automated CI/CD pipelines
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    Cloud infrastructure management
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    Continuous monitoring & security
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    Cross-functional collaboration
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-lg mb-3">Career Roles</h3>
                <div className="space-y-3">
                  <div className="p-3 bg-card rounded-lg border">
                    <div className="font-medium text-primary">DevOps Engineer</div>
                    <div className="text-sm text-muted-foreground">Build & maintain CI/CD pipelines</div>
                  </div>
                  <div className="p-3 bg-card rounded-lg border">
                    <div className="font-medium text-accent">Site Reliability Engineer</div>
                    <div className="text-sm text-muted-foreground">Ensure system uptime & reliability</div>
                  </div>
                  <div className="p-3 bg-card rounded-lg border">
                    <div className="font-medium text-technical">Cloud Infrastructure Engineer</div>
                    <div className="text-sm text-muted-foreground">Architect cloud solutions</div>
                  </div>
                  <div className="p-3 bg-card rounded-lg border">
                    <div className="font-medium text-recommendation">Automation Engineer</div>
                    <div className="text-sm text-muted-foreground">Develop automation tools</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Video Section */}
            <div className="border-t pt-6">
              <div className="flex items-center gap-3 mb-4">
                <PlayCircle className="h-5 w-5 text-primary" />
                <span className="font-medium">Quick Overview Video</span>
                <Badge variant="secondary">2 minutes</Badge>
              </div>
              
              {!showVideo ? (
                <div 
                  className="relative bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg p-8 text-center cursor-pointer group hover:from-primary/30 hover:to-accent/30 transition-all duration-300"
                  onClick={() => setShowVideo(true)}
                >
                  <PlayCircle className="h-16 w-16 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-semibold mb-2">DevOps Explained in 2 Minutes</h3>
                  <p className="text-muted-foreground">Watch this quick overview to understand DevOps fundamentals</p>
                </div>
              ) : (
                <div className="aspect-video bg-black rounded-lg flex items-center justify-center">
                  <div className="text-center text-white">
                    <PlayCircle className="h-16 w-16 mx-auto mb-4" />
                    <p>Video: "Introduction to DevOps"</p>
                    <p className="text-sm text-gray-300 mt-2">Educational content would be embedded here</p>
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Success Traits */}
        <Card className="mb-8">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Target className="h-6 w-6 text-accent" />
              <CardTitle className="text-xl">Success Traits for DevOps Professionals</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="text-center p-4">
                <Users className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Strong Collaboration</h3>
                <p className="text-sm text-muted-foreground">Work effectively across development and operations teams</p>
              </div>
              
              <div className="text-center p-4">
                <Zap className="h-8 w-8 text-accent mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Automation Mindset</h3>
                <p className="text-sm text-muted-foreground">Think in terms of scalable, repeatable processes</p>
              </div>
              
              <div className="text-center p-4">
                <Target className="h-8 w-8 text-technical mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Problem-Solving</h3>
                <p className="text-sm text-muted-foreground">Analytical approach to complex system challenges</p>
              </div>
              
              <div className="text-center p-4">
                <Clock className="h-8 w-8 text-recommendation mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Adaptability</h3>
                <p className="text-sm text-muted-foreground">Embrace change and new technologies quickly</p>
              </div>
              
              <div className="text-center p-4">
                <PlayCircle className="h-8 w-8 text-psychometric mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Continuous Learning</h3>
                <p className="text-sm text-muted-foreground">Stay current with evolving tools and practices</p>
              </div>
              
              <div className="text-center p-4">
                <ArrowRight className="h-8 w-8 text-wiscar mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Ownership Mindset</h3>
                <p className="text-sm text-muted-foreground">Take responsibility for end-to-end delivery</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Assessment Overview */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-xl">Your Assessment Journey</CardTitle>
            <CardDescription>
              Here's what to expect in the next 20-30 minutes
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-primary/5 rounded-lg border border-primary/20">
                <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                  1
                </div>
                <div className="flex-1">
                  <div className="font-semibold">Psychometric Analysis (8-10 mins)</div>
                  <div className="text-sm text-muted-foreground">Personality fit, cognitive style, motivation assessment</div>
                </div>
                <Badge variant="secondary">Next</Badge>
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-muted/30 rounded-lg">
                <div className="flex-shrink-0 w-8 h-8 bg-muted text-muted-foreground rounded-full flex items-center justify-center text-sm font-bold">
                  2
                </div>
                <div className="flex-1">
                  <div className="font-semibold">Technical & Aptitude (10-12 mins)</div>
                  <div className="text-sm text-muted-foreground">Logical reasoning, DevOps knowledge, tool familiarity</div>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-muted/30 rounded-lg">
                <div className="flex-shrink-0 w-8 h-8 bg-muted text-muted-foreground rounded-full flex items-center justify-center text-sm font-bold">
                  3
                </div>
                <div className="flex-1">
                  <div className="font-semibold">WISCAR Framework (5 mins)</div>
                  <div className="text-sm text-muted-foreground">Holistic readiness across 6 key dimensions</div>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-muted/30 rounded-lg">
                <div className="flex-shrink-0 w-8 h-8 bg-muted text-muted-foreground rounded-full flex items-center justify-center text-sm font-bold">
                  4
                </div>
                <div className="flex-1">
                  <div className="font-semibold">Personalized Results & Guidance</div>
                  <div className="text-sm text-muted-foreground">Detailed insights, recommendations, and career pathways</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Ready to Start */}
        <Card className="text-center border-primary/30">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-4">Ready to Begin Your Assessment?</h2>
            <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
              The assessment is designed to be comprehensive yet efficient. Take your time, answer honestly, and get insights that could shape your career path.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/assessment/psychometric">
                <Button size="lg" className="bg-gradient-primary hover:shadow-hover-glow transition-all duration-300">
                  Start Assessment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              
              <Link to="/">
                <Button variant="outline" size="lg">
                  Back to Home
                </Button>
              </Link>
            </div>

            <div className="flex items-center justify-center gap-4 mt-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                20-30 minutes
              </div>
              <div className="w-1 h-1 bg-muted-foreground rounded-full" />
              <div>6 modules</div>
              <div className="w-1 h-1 bg-muted-foreground rounded-full" />
              <div>Instant results</div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Introduction;