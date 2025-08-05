import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ArrowLeft, Target, Brain, Heart, Zap, BookOpen, MapPin } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

interface WISCARScore {
  will: number;
  interest: number;
  skill: number;
  cognitive: number;
  ability: number;
  realworld: number;
}

const WISCAR = () => {
  const navigate = useNavigate();
  const [scores] = useState<WISCARScore>({
    will: 85,
    interest: 92,
    skill: 68,
    cognitive: 76,
    ability: 88,
    realworld: 72
  });

  const overallScore = Math.round(Object.values(scores).reduce((sum, score) => sum + score, 0) / 6);

  const dimensions = [
    {
      key: 'will' as keyof WISCARScore,
      name: 'Will',
      description: 'Inner drive, persistence, and consistency',
      icon: Heart,
      color: 'text-destructive',
      bgColor: 'bg-destructive/10',
      borderColor: 'border-destructive/20'
    },
    {
      key: 'interest' as keyof WISCARScore,
      name: 'Interest',
      description: 'Genuine curiosity and relevance to DevOps',
      icon: Zap,
      color: 'text-primary',
      bgColor: 'bg-primary/10',
      borderColor: 'border-primary/20'
    },
    {
      key: 'skill' as keyof WISCARScore,
      name: 'Skill',
      description: 'Current technical and soft skills',
      icon: Target,
      color: 'text-technical',
      bgColor: 'bg-technical/10',
      borderColor: 'border-technical/20'
    },
    {
      key: 'cognitive' as keyof WISCARScore,
      name: 'Cognitive',
      description: 'Analytical thinking and problem-solving ability',
      icon: Brain,
      color: 'text-psychometric',
      bgColor: 'bg-psychometric/10',
      borderColor: 'border-psychometric/20'
    },
    {
      key: 'ability' as keyof WISCARScore,
      name: 'Ability to Learn',
      description: 'Openness to feedback and continuous improvement',
      icon: BookOpen,
      color: 'text-accent',
      bgColor: 'bg-accent/10',
      borderColor: 'border-accent/20'
    },
    {
      key: 'realworld' as keyof WISCARScore,
      name: 'Real-World Alignment',
      description: 'Match with actual DevOps role requirements',
      icon: MapPin,
      color: 'text-recommendation',
      bgColor: 'bg-recommendation/10',
      borderColor: 'border-recommendation/20'
    }
  ];

  const getScoreInterpretation = (score: number) => {
    if (score >= 80) return { label: 'Excellent', color: 'text-accent' };
    if (score >= 70) return { label: 'Good', color: 'text-primary' };
    if (score >= 60) return { label: 'Fair', color: 'text-warning' };
    return { label: 'Needs Development', color: 'text-destructive' };
  };

  const getReadinessLevel = (overall: number) => {
    if (overall >= 80) return {
      level: 'High Readiness',
      description: 'You show strong potential for a successful DevOps career',
      color: 'text-accent',
      bgColor: 'bg-accent/10'
    };
    if (overall >= 70) return {
      level: 'Moderate Readiness',
      description: 'You have good foundation with some areas for improvement',
      color: 'text-primary',
      bgColor: 'bg-primary/10'
    };
    if (overall >= 60) return {
      level: 'Developing Readiness',
      description: 'You show potential but need focused skill development',
      color: 'text-warning',
      bgColor: 'bg-warning/10'
    };
    return {
      level: 'Early Stage',
      description: 'Consider foundational learning before pursuing DevOps',
      color: 'text-destructive',
      bgColor: 'bg-destructive/10'
    };
  };

  const readiness = getReadinessLevel(overallScore);

  return (
    <div className="min-h-screen bg-gradient-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Progress Header */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-muted-foreground">Assessment Progress</span>
            <span className="text-sm text-muted-foreground">Step 4 of 6</span>
          </div>
          <Progress value={66.67} className="h-2 mb-4" />
          
          <div className="flex items-center gap-4">
            <Target className="h-6 w-6 text-wiscar" />
            <div>
              <h1 className="text-2xl font-bold">WISCAR Framework Analysis</h1>
              <p className="text-muted-foreground">Holistic readiness assessment across six key dimensions</p>
            </div>
          </div>
        </div>

        {/* Overall Score Card */}
        <Card className="mb-8 border-primary/30">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl mb-2">
              Overall Readiness Score
            </CardTitle>
            <div className={`text-6xl font-bold ${readiness.color} mb-4`}>
              {overallScore}
            </div>
            <Badge className={`${readiness.bgColor} ${readiness.color} text-lg px-4 py-2`} variant="secondary">
              {readiness.level}
            </Badge>
            <CardDescription className="text-base mt-4 max-w-2xl mx-auto">
              {readiness.description}
            </CardDescription>
          </CardHeader>
        </Card>

        {/* WISCAR Dimensions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {dimensions.map((dimension) => {
            const score = scores[dimension.key];
            const interpretation = getScoreInterpretation(score);
            const Icon = dimension.icon;
            
            return (
              <Card key={dimension.key} className={`${dimension.borderColor} hover:shadow-card transition-all duration-300`}>
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className={`p-2 rounded-lg ${dimension.bgColor}`}>
                      <Icon className={`h-6 w-6 ${dimension.color}`} />
                    </div>
                    <Badge variant="secondary" className={interpretation.color}>
                      {interpretation.label}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl">{dimension.name}</CardTitle>
                  <CardDescription className="text-sm">
                    {dimension.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold">{score}/100</span>
                      <span className={`text-sm font-medium ${interpretation.color}`}>
                        {interpretation.label}
                      </span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full transition-all duration-1000 ease-out`}
                        style={{ 
                          width: `${score}%`,
                          backgroundColor: `hsl(var(--${dimension.key === 'will' ? 'destructive' : 
                            dimension.key === 'interest' ? 'primary' :
                            dimension.key === 'skill' ? 'technical' :
                            dimension.key === 'cognitive' ? 'psychometric' :
                            dimension.key === 'ability' ? 'accent' : 'recommendation'}))`
                        }}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Readiness Matrix */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-xl">Readiness Matrix</CardTitle>
            <CardDescription>
              Your position on the DevOps readiness assessment matrix
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="relative bg-gradient-to-br from-muted/30 to-muted/10 rounded-lg p-8 h-80">
              {/* Axes */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-px bg-border" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-px h-full bg-border" />
              </div>
              
              {/* Labels */}
              <div className="absolute top-4 left-1/2 transform -translate-x-1/2 text-sm font-medium">
                High Alignment
              </div>
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-sm font-medium">
                Low Alignment
              </div>
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 rotate-90 text-sm font-medium">
                High Readiness
              </div>
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 -rotate-90 text-sm font-medium">
                Low Readiness
              </div>
              
              {/* Your Position */}
              <div 
                className="absolute w-4 h-4 bg-primary rounded-full shadow-lg transform -translate-x-1/2 -translate-y-1/2 animate-pulse-glow"
                style={{
                  left: `${30 + (scores.skill + scores.cognitive) / 2 * 0.4}%`,
                  top: `${70 - (scores.interest + scores.realworld) / 2 * 0.4}%`
                }}
              >
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-xs font-medium whitespace-nowrap">
                  You are here
                </div>
              </div>
              
              {/* Quadrant Labels */}
              <div className="absolute top-8 left-8 text-xs text-muted-foreground">
                High Readiness<br/>Low Alignment
              </div>
              <div className="absolute top-8 right-8 text-xs text-muted-foreground text-right">
                High Readiness<br/>High Alignment
              </div>
              <div className="absolute bottom-8 left-8 text-xs text-muted-foreground">
                Low Readiness<br/>Low Alignment
              </div>
              <div className="absolute bottom-8 right-8 text-xs text-muted-foreground text-right">
                Low Readiness<br/>High Alignment
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Key Insights */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-xl">Key Insights</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-3 p-4 bg-accent/5 rounded-lg border border-accent/20">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                <div>
                  <div className="font-medium text-accent mb-1">Strengths</div>
                  <div className="text-sm text-muted-foreground">
                    Your high interest and ability to learn indicate strong intrinsic motivation for DevOps.
                  </div>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-4 bg-warning/5 rounded-lg border border-warning/20">
                <div className="w-2 h-2 bg-warning rounded-full mt-2 flex-shrink-0" />
                <div>
                  <div className="font-medium text-warning mb-1">Development Areas</div>
                  <div className="text-sm text-muted-foreground">
                    Focus on building technical skills and gaining real-world exposure to DevOps practices.
                  </div>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-4 bg-primary/5 rounded-lg border border-primary/20">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                <div>
                  <div className="font-medium text-primary mb-1">Recommendation</div>
                  <div className="text-sm text-muted-foreground">
                    Consider a structured learning path with hands-on projects to bridge the skills gap.
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Link to="/assessment/technical">
            <Button variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Technical Assessment
            </Button>
          </Link>

          <Button 
            onClick={() => navigate('/assessment/recommendations')}
            className="bg-gradient-primary hover:shadow-hover-glow transition-all duration-300"
          >
            View Personalized Recommendations
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WISCAR;