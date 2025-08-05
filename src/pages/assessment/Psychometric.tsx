import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Slider } from "@/components/ui/slider";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { ArrowRight, ArrowLeft, Brain, Timer } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

interface Question {
  id: string;
  category: 'interest' | 'personality' | 'cognitive' | 'motivation';
  type: 'likert' | 'choice' | 'slider';
  question: string;
  options?: string[];
  description?: string;
}

const questions: Question[] = [
  // Interest Scale
  {
    id: 'interest_1',
    category: 'interest',
    type: 'likert',
    question: "I enjoy automating repetitive tasks and processes.",
    description: "Consider how much you naturally gravitate toward finding ways to automate manual work."
  },
  {
    id: 'interest_2',
    category: 'interest',
    type: 'likert',
    question: "I like working in cross-functional teams that bridge different departments.",
    description: "Think about your preference for collaborative environments vs. working within a single department."
  },
  {
    id: 'interest_3',
    category: 'interest',
    type: 'likert',
    question: "I find troubleshooting complex system issues energizing rather than frustrating.",
    description: "Reflect on how you feel when facing technical challenges and debugging scenarios."
  },
  
  // Personality Compatibility
  {
    id: 'personality_1',
    category: 'personality',
    type: 'choice',
    question: "When approaching a new project, I prefer to:",
    options: [
      "Plan extensively before starting (Structured approach)",
      "Start with basics and adapt as I learn (Flexible approach)",
      "Research best practices thoroughly first (Analytical approach)",
      "Jump in and learn by doing (Hands-on approach)"
    ]
  },
  {
    id: 'personality_2',
    category: 'personality',
    type: 'likert',
    question: "I am comfortable with ambiguity and changing requirements.",
    description: "DevOps environments often involve evolving requirements and new technologies."
  },
  {
    id: 'personality_3',
    category: 'personality',
    type: 'choice',
    question: "In a team setting, I typically:",
    options: [
      "Take the lead and organize activities",
      "Contribute actively but prefer not to lead",
      "Focus on my specific expertise area",
      "Adapt my role based on team needs"
    ]
  },
  
  // Cognitive Style
  {
    id: 'cognitive_1',
    category: 'cognitive',
    type: 'choice',
    question: "When solving problems, I prefer to:",
    options: [
      "Break them down into logical steps",
      "Look for creative, unconventional solutions",
      "Research how others have solved similar problems",
      "Use trial and error with quick iterations"
    ]
  },
  {
    id: 'cognitive_2',
    category: 'cognitive',
    type: 'likert',
    question: "I prefer structured workflows with clear processes over flexible, ad-hoc approaches.",
    description: "Consider your comfort level with standardized procedures vs. improvisation."
  },
  
  // Motivation
  {
    id: 'motivation_1',
    category: 'motivation',
    type: 'slider',
    question: "How important is continuous learning and skill development to you?",
    description: "Rate from 'Not important' to 'Extremely important'"
  },
  {
    id: 'motivation_2',
    category: 'motivation',
    type: 'likert',
    question: "I am motivated more by mastering technical skills than by management responsibilities.",
    description: "Consider whether you prefer deep technical expertise or people management."
  }
];

const Psychometric = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, any>>({});
  const [timeElapsed, setTimeElapsed] = useState(0);

  const handleAnswer = (questionId: string, value: any) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      // Navigate to next section
      navigate('/assessment/technical');
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const question = questions[currentQuestion];
  const currentAnswer = answers[question.id];

  const renderQuestionInput = () => {
    switch (question.type) {
      case 'likert':
        return (
          <RadioGroup 
            value={currentAnswer} 
            onValueChange={(value) => handleAnswer(question.id, value)}
            className="space-y-3"
          >
            {['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'].map((option, index) => (
              <div key={index} className="flex items-center space-x-3">
                <RadioGroupItem value={index.toString()} id={`${question.id}_${index}`} />
                <Label htmlFor={`${question.id}_${index}`} className="flex-1 cursor-pointer">
                  {option}
                </Label>
              </div>
            ))}
          </RadioGroup>
        );
      
      case 'choice':
        return (
          <RadioGroup 
            value={currentAnswer} 
            onValueChange={(value) => handleAnswer(question.id, value)}
            className="space-y-3"
          >
            {question.options?.map((option, index) => (
              <div key={index} className="flex items-center space-x-3">
                <RadioGroupItem value={index.toString()} id={`${question.id}_${index}`} />
                <Label htmlFor={`${question.id}_${index}`} className="flex-1 cursor-pointer">
                  {option}
                </Label>
              </div>
            ))}
          </RadioGroup>
        );
      
      case 'slider':
        return (
          <div className="space-y-6">
            <Slider
              value={[currentAnswer || 5]}
              onValueChange={(value) => handleAnswer(question.id, value[0])}
              max={10}
              min={1}
              step={1}
              className="w-full"
            />
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Not Important (1)</span>
              <span>Current: {currentAnswer || 5}/10</span>
              <span>Extremely Important (10)</span>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'interest': return 'text-primary';
      case 'personality': return 'text-psychometric';
      case 'cognitive': return 'text-technical';
      case 'motivation': return 'text-accent';
      default: return 'text-muted-foreground';
    }
  };

  const getCategoryName = (category: string) => {
    switch (category) {
      case 'interest': return 'Interest Assessment';
      case 'personality': return 'Personality Compatibility';
      case 'cognitive': return 'Cognitive Style';
      case 'motivation': return 'Motivation Analysis';
      default: return 'Assessment';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Progress Header */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-muted-foreground">Assessment Progress</span>
            <span className="text-sm text-muted-foreground">Step 2 of 6</span>
          </div>
          <Progress value={33.33} className="h-2 mb-4" />
          
          <div className="flex items-center gap-4">
            <Brain className="h-6 w-6 text-psychometric" />
            <div>
              <h1 className="text-2xl font-bold">Psychometric Analysis</h1>
              <p className="text-muted-foreground">Understanding your personality fit and working style preferences</p>
            </div>
          </div>
        </div>

        {/* Question Progress */}
        <Card className="mb-6">
          <CardHeader className="pb-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(question.category)} bg-current/10`}>
                  {getCategoryName(question.category)}
                </div>
                <span className="text-sm text-muted-foreground">
                  Question {currentQuestion + 1} of {questions.length}
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Timer className="h-4 w-4" />
                ~8-10 mins
              </div>
            </div>
            <Progress value={progress} className="h-1" />
          </CardHeader>
        </Card>

        {/* Question Card */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-xl leading-relaxed">
              {question.question}
            </CardTitle>
            {question.description && (
              <CardDescription className="text-base">
                {question.description}
              </CardDescription>
            )}
          </CardHeader>
          <CardContent className="space-y-6">
            {renderQuestionInput()}
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <div>
            {currentQuestion > 0 ? (
              <Button variant="outline" onClick={handlePrevious}>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Previous
              </Button>
            ) : (
              <Link to="/assessment/introduction">
                <Button variant="outline">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Introduction
                </Button>
              </Link>
            )}
          </div>

          <div className="text-center">
            <div className="text-sm text-muted-foreground mb-1">
              Progress: {Math.round(progress)}%
            </div>
            <div className="flex gap-1">
              {Array.from({ length: questions.length }, (_, i) => (
                <div
                  key={i}
                  className={`w-2 h-2 rounded-full ${
                    i <= currentQuestion ? 'bg-primary' : 'bg-muted'
                  }`}
                />
              ))}
            </div>
          </div>

          <Button 
            onClick={handleNext}
            disabled={!currentAnswer && currentAnswer !== 0}
            className="bg-gradient-primary hover:shadow-hover-glow transition-all duration-300"
          >
            {currentQuestion < questions.length - 1 ? 'Next' : 'Continue to Technical Assessment'}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        {/* Section Info */}
        <Card className="mt-8 border-psychometric/20">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-primary mb-1">Interest</div>
                <div className="text-sm text-muted-foreground">Genuine curiosity and relevance to DevOps work</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-psychometric mb-1">Personality</div>
                <div className="text-sm text-muted-foreground">Big 5 traits and work style compatibility</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-technical mb-1">Cognitive</div>
                <div className="text-sm text-muted-foreground">Problem-solving preferences and thinking style</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-accent mb-1">Motivation</div>
                <div className="text-sm text-muted-foreground">Drive for continuous learning and growth</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Psychometric;