import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ArrowLeft, CheckCircle, XCircle, AlertTriangle, Target, BookOpen, ExternalLink } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Recommendations = () => {
  const navigate = useNavigate();
  const [overallScore] = useState(78); // Based on previous assessments
  
  const getRecommendation = (score: number) => {
    if (score >= 80) return {
      type: 'yes',
      icon: CheckCircle,
      color: 'text-accent',
      bgColor: 'bg-accent/10',
      borderColor: 'border-accent/20',
      title: 'Highly Recommended',
      description: 'You show strong potential for a successful DevOps career'
    };
    if (score >= 65) return {
      type: 'maybe',
      icon: AlertTriangle,
      color: 'text-warning',
      bgColor: 'bg-warning/10',
      borderColor: 'border-warning/20',
      title: 'Conditionally Recommended',
      description: 'You have good foundation but should address key areas first'
    };
    return {
      type: 'no',
      icon: XCircle,
      color: 'text-destructive',
      bgColor: 'bg-destructive/10',
      borderColor: 'border-destructive/20',
      title: 'Not Recommended Currently',
      description: 'Consider foundational learning before pursuing DevOps'
    };
  };

  const recommendation = getRecommendation(overallScore);
  const RecommendationIcon = recommendation.icon;

  const learningPath = [
    {
      phase: 'Foundation (1-2 months)',
      items: [
        'Master Linux command line basics',
        'Learn Git version control fundamentals',
        'Understand networking concepts (TCP/IP, DNS, HTTP)',
        'Basic scripting (Bash/Python)'
      ],
      resources: [
        { name: 'Linux Journey', url: '#', type: 'Free' },
        { name: 'Git Handbook', url: '#', type: 'Free' },
        { name: 'Networking Basics Course', url: '#', type: 'Paid' }
      ]
    },
    {
      phase: 'Core DevOps (2-3 months)',
      items: [
        'CI/CD pipeline concepts and Jenkins',
        'Docker containerization',
        'Infrastructure as Code (Terraform)',
        'Configuration management (Ansible)'
      ],
      resources: [
        { name: 'Docker Getting Started', url: '#', type: 'Free' },
        { name: 'Jenkins Documentation', url: '#', type: 'Free' },
        { name: 'Terraform Learn', url: '#', type: 'Free' }
      ]
    },
    {
      phase: 'Advanced & Specialization (3-4 months)',
      items: [
        'Kubernetes orchestration',
        'Cloud platforms (AWS/Azure/GCP)',
        'Monitoring and logging (Prometheus, ELK)',
        'Security practices (DevSecOps)'
      ],
      resources: [
        { name: 'Kubernetes Documentation', url: '#', type: 'Free' },
        { name: 'AWS Training', url: '#', type: 'Paid' },
        { name: 'Cloud Native Computing Foundation', url: '#', type: 'Free' }
      ]
    }
  ];

  const projects = [
    {
      title: 'Personal CI/CD Pipeline',
      difficulty: 'Beginner',
      description: 'Set up a simple CI/CD pipeline for a personal project using GitHub Actions',
      skills: ['Git', 'GitHub Actions', 'Testing', 'Deployment']
    },
    {
      title: 'Containerized Web Application',
      difficulty: 'Intermediate',
      description: 'Dockerize a web application and deploy it using docker-compose',
      skills: ['Docker', 'Containerization', 'Networking', 'Configuration']
    },
    {
      title: 'Infrastructure as Code Project',
      difficulty: 'Advanced',
      description: 'Use Terraform to provision cloud infrastructure and deploy an application',
      skills: ['Terraform', 'Cloud Services', 'Infrastructure Management', 'Automation']
    }
  ];

  const alternatives = [
    {
      role: 'System Administrator',
      description: 'Manage and maintain computer systems and networks',
      overlap: 'High',
      reasoning: 'Strong foundation for transitioning to DevOps later'
    },
    {
      role: 'Cloud Support Engineer',
      description: 'Provide technical support for cloud-based solutions',
      overlap: 'Medium',
      reasoning: 'Good entry point to cloud technologies'
    },
    {
      role: 'Software Developer',
      description: 'Focus on application development with some DevOps practices',
      overlap: 'Medium',
      reasoning: 'Strong coding skills can complement DevOps knowledge'
    },
    {
      role: 'QA Engineer',
      description: 'Specialize in testing automation and quality assurance',
      overlap: 'Low',
      reasoning: 'Can evolve into DevOps with automation expertise'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Progress Header */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-muted-foreground">Assessment Progress</span>
            <span className="text-sm text-muted-foreground">Step 5 of 6</span>
          </div>
          <Progress value={83.33} className="h-2 mb-4" />
          
          <div className="flex items-center gap-4">
            <Target className="h-6 w-6 text-recommendation" />
            <div>
              <h1 className="text-2xl font-bold">AI-Powered Recommendations</h1>
              <p className="text-muted-foreground">Personalized career advice based on your comprehensive assessment</p>
            </div>
          </div>
        </div>

        {/* Main Recommendation */}
        <Card className={`mb-8 ${recommendation.borderColor}`}>
          <CardHeader className="text-center">
            <div className={`mx-auto w-16 h-16 rounded-full ${recommendation.bgColor} flex items-center justify-center mb-4`}>
              <RecommendationIcon className={`h-8 w-8 ${recommendation.color}`} />
            </div>
            <CardTitle className="text-3xl mb-2">{recommendation.title}</CardTitle>
            <Badge className={`${recommendation.bgColor} ${recommendation.color} text-lg px-4 py-2`} variant="secondary">
              Confidence Score: {overallScore}%
            </Badge>
            <CardDescription className="text-base mt-4 max-w-2xl mx-auto">
              {recommendation.description}
            </CardDescription>
          </CardHeader>
        </Card>

        {/* Personalized Insights */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-xl">Personalized Insights</CardTitle>
            <CardDescription>
              Analysis based on your psychometric profile, technical assessment, and WISCAR scores
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="font-semibold text-lg text-accent">Strengths</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Strong Learning Motivation</div>
                      <div className="text-sm text-muted-foreground">High scores in growth mindset and curiosity</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Collaborative Mindset</div>
                      <div className="text-sm text-muted-foreground">Good fit for cross-functional DevOps teams</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Problem-Solving Approach</div>
                      <div className="text-sm text-muted-foreground">Analytical thinking style suits DevOps challenges</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="font-semibold text-lg text-warning">Areas for Development</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 text-warning mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Technical Skills Gap</div>
                      <div className="text-sm text-muted-foreground">Need stronger foundation in core DevOps tools</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 text-warning mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Real-World Experience</div>
                      <div className="text-sm text-muted-foreground">Limited exposure to production environments</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 text-warning mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Cloud Knowledge</div>
                      <div className="text-sm text-muted-foreground">Need familiarity with cloud platforms</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Learning Pathway */}
        {recommendation.type !== 'no' && (
          <Card className="mb-8">
            <CardHeader>
              <div className="flex items-center gap-3">
                <BookOpen className="h-6 w-6 text-primary" />
                <div>
                  <CardTitle className="text-xl">Recommended Learning Path</CardTitle>
                  <CardDescription>Structured roadmap to DevOps proficiency</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                {learningPath.map((phase, index) => (
                  <div key={index} className="relative">
                    {index < learningPath.length - 1 && (
                      <div className="absolute left-6 top-12 w-px h-16 bg-border" />
                    )}
                    <div className="flex gap-6">
                      <div className="flex-shrink-0 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold mb-3">{phase.phase}</h3>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-medium mb-2 text-muted-foreground">Learning Objectives</h4>
                            <ul className="space-y-1">
                              {phase.items.map((item, itemIndex) => (
                                <li key={itemIndex} className="flex items-start gap-2 text-sm">
                                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-medium mb-2 text-muted-foreground">Recommended Resources</h4>
                            <div className="space-y-2">
                              {phase.resources.map((resource, resourceIndex) => (
                                <div key={resourceIndex} className="flex items-center justify-between text-sm p-2 bg-muted/30 rounded">
                                  <span>{resource.name}</span>
                                  <div className="flex items-center gap-2">
                                    <Badge variant={resource.type === 'Free' ? 'secondary' : 'outline'} className="text-xs">
                                      {resource.type}
                                    </Badge>
                                    <ExternalLink className="h-3 w-3 text-muted-foreground" />
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Hands-on Projects */}
        {recommendation.type !== 'no' && (
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-xl">Recommended Hands-on Projects</CardTitle>
              <CardDescription>
                Practical projects to build your DevOps portfolio
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                  <Card key={index} className="border-primary/20">
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <Badge variant={
                          project.difficulty === 'Beginner' ? 'secondary' :
                          project.difficulty === 'Intermediate' ? 'outline' : 'destructive'
                        }>
                          {project.difficulty}
                        </Badge>
                      </div>
                      <CardTitle className="text-lg">{project.title}</CardTitle>
                      <CardDescription className="text-sm">
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div>
                        <h4 className="font-medium mb-2 text-sm">Skills Practiced</h4>
                        <div className="flex flex-wrap gap-1">
                          {project.skills.map((skill, skillIndex) => (
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
        )}

        {/* Alternative Career Paths */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-xl">Alternative Career Paths</CardTitle>
            <CardDescription>
              Related roles that align with your profile and can lead to DevOps
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {alternatives.map((alt, index) => (
                <Card key={index} className="border-muted">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold">{alt.role}</h3>
                      <Badge variant={
                        alt.overlap === 'High' ? 'secondary' :
                        alt.overlap === 'Medium' ? 'outline' : 'destructive'
                      } className="text-xs">
                        {alt.overlap} Overlap
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">{alt.description}</p>
                    <p className="text-xs text-muted-foreground">{alt.reasoning}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Link to="/assessment/wiscar">
            <Button variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to WISCAR Analysis
            </Button>
          </Link>

          <Button 
            onClick={() => navigate('/assessment/guidance')}
            className="bg-gradient-primary hover:shadow-hover-glow transition-all duration-300"
          >
            Explore Career Guidance
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Recommendations;