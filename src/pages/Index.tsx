import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Brain, Code, Target, Users, Zap, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-background">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
          <div className="text-center">
            <Badge variant="secondary" className="mb-6 px-4 py-2">
              AI-Powered Career Assessment
            </Badge>
            
            <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent mb-6">
              DevOps Navigator AI
            </h1>
            
            <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Discover your DevOps readiness with our comprehensive assessment platform. 
              Get personalized insights into your skills, personality fit, and career alignment.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link to="/assessment/introduction">
                <Button size="lg" className="bg-gradient-primary hover:shadow-hover-glow transition-all duration-300">
                  Start Your Assessment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              
              <Button variant="outline" size="lg" className="border-primary/30 hover:border-primary">
                Learn More
              </Button>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">20-30</div>
              <div className="text-muted-foreground">Minutes Assessment</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">6</div>
              <div className="text-muted-foreground">Assessment Modules</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-recommendation mb-2">100%</div>
              <div className="text-muted-foreground">Personalized Results</div>
            </div>
          </div>
        </div>
      </div>

      {/* Assessment Modules Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Assessment Framework</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our comprehensive framework evaluates you across six critical dimensions to provide accurate career guidance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="group hover:shadow-card transition-all duration-300 border-border/50 hover:border-primary/50">
            <CardHeader>
              <div className="flex items-center justify-between mb-4">
                <Brain className="h-8 w-8 text-psychometric" />
                <Badge variant="secondary">2-10 mins</Badge>
              </div>
              <CardTitle className="text-xl">Psychometric Analysis</CardTitle>
              <CardDescription>
                Assess personality fit, cognitive style, motivation, and working preferences using validated psychological scales.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div>• Big 5 Personality Traits</div>
                <div>• Holland Career Codes</div>
                <div>• Grit & Growth Mindset</div>
                <div>• Work Style Preferences</div>
              </div>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-card transition-all duration-300 border-border/50 hover:border-primary/50">
            <CardHeader>
              <div className="flex items-center justify-between mb-4">
                <Code className="h-8 w-8 text-technical" />
                <Badge variant="secondary">10-12 mins</Badge>
              </div>
              <CardTitle className="text-xl">Technical & Aptitude</CardTitle>
              <CardDescription>
                Evaluate logical reasoning, prerequisite knowledge, and current understanding of DevOps concepts and tools.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div>• Logical Reasoning Puzzles</div>
                <div>• Linux & Git Fundamentals</div>
                <div>• CI/CD & Containerization</div>
                <div>• Infrastructure as Code</div>
              </div>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-card transition-all duration-300 border-border/50 hover:border-primary/50">
            <CardHeader>
              <div className="flex items-center justify-between mb-4">
                <Target className="h-8 w-8 text-wiscar" />
                <Badge variant="secondary">5 mins</Badge>
              </div>
              <CardTitle className="text-xl">WISCAR Framework</CardTitle>
              <CardDescription>
                Holistic readiness assessment across Will, Interest, Skill, Cognitive ability, Ability to learn, and Real-world alignment.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div>• Inner Drive & Persistence</div>
                <div>• Genuine Interest Analysis</div>
                <div>• Skill Gap Assessment</div>
                <div>• Learning Readiness</div>
              </div>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-card transition-all duration-300 border-border/50 hover:border-primary/50">
            <CardHeader>
              <div className="flex items-center justify-between mb-4">
                <Zap className="h-8 w-8 text-recommendation" />
                <Badge variant="secondary">2 mins</Badge>
              </div>
              <CardTitle className="text-xl">AI Recommendations</CardTitle>
              <CardDescription>
                Get personalized career advice, confidence scores, and actionable next steps based on your comprehensive profile.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div>• Personalized Career Fit</div>
                <div>• Confidence Scoring</div>
                <div>• Gap Analysis</div>
                <div>• Next Steps Planning</div>
              </div>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-card transition-all duration-300 border-border/50 hover:border-primary/50">
            <CardHeader>
              <div className="flex items-center justify-between mb-4">
                <Users className="h-8 w-8 text-accent" />
                <Badge variant="secondary">3-5 mins</Badge>
              </div>
              <CardTitle className="text-xl">Career Guidance</CardTitle>
              <CardDescription>
                Explore DevOps career paths, required skills mapping, learning roadmaps, and alternative career options.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div>• Role Descriptions</div>
                <div>• Skill Mapping Tables</div>
                <div>• Learning Pathways</div>
                <div>• Alternative Careers</div>
              </div>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-card transition-all duration-300 border-border/50 hover:border-primary/50">
            <CardHeader>
              <div className="flex items-center justify-between mb-4">
                <Brain className="h-8 w-8 text-primary" />
                <Badge variant="secondary">Instant</Badge>
              </div>
              <CardTitle className="text-xl">Detailed Results</CardTitle>
              <CardDescription>
                Comprehensive report with radar charts, insights, downloadable PDF, and progress tracking dashboard.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div>• Visual Analytics</div>
                <div>• Progress Tracking</div>
                <div>• Downloadable Reports</div>
                <div>• Personalized Insights</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* What is DevOps Section */}
      <div className="bg-card/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">What is DevOps?</h2>
              <p className="text-lg text-muted-foreground mb-6">
                DevOps is the integration of development and operations teams to improve software delivery 
                and infrastructure management through automation, collaboration, and continuous improvement.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <ChevronRight className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold">Automation Focus</div>
                    <div className="text-muted-foreground">Streamline CI/CD pipelines and infrastructure management</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <ChevronRight className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold">Cross-Functional Collaboration</div>
                    <div className="text-muted-foreground">Bridge development and operations teams effectively</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <ChevronRight className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold">Continuous Learning</div>
                    <div className="text-muted-foreground">Adapt to evolving technologies and methodologies</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-6 text-center">
                <div className="text-2xl font-bold text-primary mb-2">DevOps Engineer</div>
                <div className="text-sm text-muted-foreground">Automate CI/CD pipelines</div>
              </Card>
              
              <Card className="p-6 text-center">
                <div className="text-2xl font-bold text-accent mb-2">SRE</div>
                <div className="text-sm text-muted-foreground">Ensure system reliability</div>
              </Card>
              
              <Card className="p-6 text-center">
                <div className="text-2xl font-bold text-technical mb-2">Cloud Engineer</div>
                <div className="text-sm text-muted-foreground">Architect cloud services</div>
              </Card>
              
              <Card className="p-6 text-center">
                <div className="text-2xl font-bold text-recommendation mb-2">Automation Engineer</div>
                <div className="text-sm text-muted-foreground">Build ops tools</div>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Discover Your DevOps Potential?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Take our comprehensive assessment and get personalized insights into your DevOps career readiness in just 20-30 minutes.
          </p>
          
          <Link to="/assessment/introduction">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:shadow-hover-glow transition-all duration-300 animate-pulse-glow"
            >
              Begin Assessment Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Index;