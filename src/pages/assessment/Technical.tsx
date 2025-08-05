import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ArrowLeft, Code, Timer, CheckCircle, XCircle } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

interface TechnicalQuestion {
  id: string;
  category: 'aptitude' | 'prerequisite' | 'devops';
  difficulty: 'easy' | 'medium' | 'hard';
  question: string;
  options: string[];
  correct: number;
  explanation: string;
  timeLimit?: number;
}

const questions: TechnicalQuestion[] = [
  // General Aptitude
  {
    id: 'apt_1',
    category: 'aptitude',
    difficulty: 'easy',
    question: "What comes next in this sequence: 2, 6, 12, 20, 30, ?",
    options: ["42", "40", "36", "38"],
    correct: 0,
    explanation: "The pattern is n(n+1): 1×2=2, 2×3=6, 3×4=12, 4×5=20, 5×6=30, 6×7=42",
    timeLimit: 60
  },
  {
    id: 'apt_2',
    category: 'aptitude',
    difficulty: 'medium',
    question: "If it takes 5 machines 5 minutes to make 5 widgets, how long does it take 100 machines to make 100 widgets?",
    options: ["5 minutes", "100 minutes", "20 minutes", "1 minute"],
    correct: 0,
    explanation: "Each machine makes 1 widget in 5 minutes, so 100 machines still take 5 minutes to make 100 widgets.",
    timeLimit: 90
  },
  
  // Prerequisite Knowledge
  {
    id: 'pre_1',
    category: 'prerequisite',
    difficulty: 'easy',
    question: "Which Linux command is used to display the current directory?",
    options: ["pwd", "cd", "ls", "dir"],
    correct: 0,
    explanation: "pwd (print working directory) displays the current directory path.",
    timeLimit: 30
  },
  {
    id: 'pre_2',
    category: 'prerequisite',
    difficulty: 'medium',
    question: "In Git, what does 'git pull' do?",
    options: [
      "Downloads changes from remote repository",
      "Uploads changes to remote repository", 
      "Creates a new branch",
      "Merges two branches"
    ],
    correct: 0,
    explanation: "git pull fetches changes from the remote repository and merges them into the current branch.",
    timeLimit: 45
  },
  {
    id: 'pre_3',
    category: 'prerequisite',
    difficulty: 'medium',
    question: "What is the default port for SSH?",
    options: ["22", "80", "443", "8080"],
    correct: 0,
    explanation: "SSH (Secure Shell) uses port 22 by default for secure remote connections.",
    timeLimit: 30
  },
  
  // DevOps Specific
  {
    id: 'devops_1',
    category: 'devops',
    difficulty: 'easy',
    question: "What does CI/CD stand for?",
    options: [
      "Continuous Integration/Continuous Deployment",
      "Computer Intelligence/Code Development",
      "Central Integration/Code Delivery",
      "Continuous Installation/Code Distribution"
    ],
    correct: 0,
    explanation: "CI/CD stands for Continuous Integration and Continuous Deployment (or Delivery).",
    timeLimit: 30
  },
  {
    id: 'devops_2',
    category: 'devops',
    difficulty: 'medium',
    question: "Which tool is primarily used for containerization?",
    options: ["Docker", "Jenkins", "Ansible", "Terraform"],
    correct: 0,
    explanation: "Docker is the leading containerization platform for packaging applications and dependencies.",
    timeLimit: 45
  },
  {
    id: 'devops_3',
    category: 'devops',
    difficulty: 'medium',
    question: "What is Infrastructure as Code (IaC)?",
    options: [
      "Managing infrastructure through code and version control",
      "Writing application code for infrastructure teams",
      "Coding directly on server hardware",
      "Converting infrastructure to mobile apps"
    ],
    correct: 0,
    explanation: "IaC manages and provisions infrastructure through machine-readable definition files, rather than manual processes.",
    timeLimit: 60
  },
  {
    id: 'devops_4',
    category: 'devops',
    difficulty: 'hard',
    question: "In Kubernetes, what is a Pod?",
    options: [
      "The smallest deployable unit that can contain one or more containers",
      "A type of storage volume",
      "A network configuration file",
      "A monitoring dashboard"
    ],
    correct: 0,
    explanation: "A Pod is the smallest deployable unit in Kubernetes, typically containing a single container but can have multiple containers that share storage and network.",
    timeLimit: 90
  }
];

const Technical = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [timeLeft, setTimeLeft] = useState(questions[0].timeLimit || 60);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);

  const question = questions[currentQuestion];
  const hasAnswered = answers[question.id] !== undefined;

  useEffect(() => {
    setTimeLeft(question.timeLimit || 60);
    setShowExplanation(false);
  }, [currentQuestion, question.timeLimit]);

  useEffect(() => {
    if (timeLeft > 0 && !hasAnswered) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [timeLeft, hasAnswered]);

  const handleAnswer = (questionId: string, value: number) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
    setShowExplanation(true);
    
    // Update score
    if (value === question.correct) {
      setScore(prev => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      // Navigate to WISCAR assessment
      navigate('/assessment/wiscar');
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const currentAnswer = answers[question.id];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'aptitude': return 'bg-primary text-primary-foreground';
      case 'prerequisite': return 'bg-technical text-white';
      case 'devops': return 'bg-accent text-accent-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getCategoryName = (category: string) => {
    switch (category) {
      case 'aptitude': return 'General Aptitude';
      case 'prerequisite': return 'Prerequisite Knowledge';
      case 'devops': return 'DevOps Concepts';
      default: return 'Technical';
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'text-accent';
      case 'medium': return 'text-warning';
      case 'hard': return 'text-destructive';
      default: return 'text-muted-foreground';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Progress Header */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-muted-foreground">Assessment Progress</span>
            <span className="text-sm text-muted-foreground">Step 3 of 6</span>
          </div>
          <Progress value={50} className="h-2 mb-4" />
          
          <div className="flex items-center gap-4">
            <Code className="h-6 w-6 text-technical" />
            <div>
              <h1 className="text-2xl font-bold">Technical & Aptitude Assessment</h1>
              <p className="text-muted-foreground">Testing logical reasoning and DevOps knowledge</p>
            </div>
          </div>
        </div>

        {/* Score and Timer */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <Card>
            <CardContent className="flex items-center justify-center p-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">{score}/{questions.length}</div>
                <div className="text-sm text-muted-foreground">Score</div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="flex items-center justify-center p-4">
              <div className="text-center">
                <div className={`text-2xl font-bold ${timeLeft <= 10 ? 'text-destructive' : 'text-accent'}`}>
                  {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}
                </div>
                <div className="text-sm text-muted-foreground">Time Left</div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="flex items-center justify-center p-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-technical">
                  {currentQuestion + 1}/{questions.length}
                </div>
                <div className="text-sm text-muted-foreground">Question</div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Question Card */}
        <Card className="mb-8">
          <CardHeader>
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-3">
                <Badge className={getCategoryColor(question.category)}>
                  {getCategoryName(question.category)}
                </Badge>
                <Badge variant="outline" className={getDifficultyColor(question.difficulty)}>
                  {question.difficulty.charAt(0).toUpperCase() + question.difficulty.slice(1)}
                </Badge>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Timer className="h-4 w-4" />
                {question.timeLimit}s
              </div>
            </div>
            
            <CardTitle className="text-xl leading-relaxed mb-4">
              {question.question}
            </CardTitle>
            
            <Progress value={progress} className="h-1" />
          </CardHeader>
          
          <CardContent className="space-y-6">
            <RadioGroup 
              value={currentAnswer?.toString()} 
              onValueChange={(value) => handleAnswer(question.id, parseInt(value))}
              disabled={showExplanation}
              className="space-y-4"
            >
              {question.options.map((option, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <RadioGroupItem value={index.toString()} id={`q_${question.id}_${index}`} />
                  <Label 
                    htmlFor={`q_${question.id}_${index}`} 
                    className={`flex-1 cursor-pointer p-3 rounded-lg border transition-colors ${
                      showExplanation && index === question.correct
                        ? 'border-accent bg-accent/10 text-accent'
                        : showExplanation && currentAnswer === index && index !== question.correct
                        ? 'border-destructive bg-destructive/10 text-destructive'
                        : 'border-border hover:border-primary/30'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span>{option}</span>
                      {showExplanation && index === question.correct && (
                        <CheckCircle className="h-5 w-5 text-accent" />
                      )}
                      {showExplanation && currentAnswer === index && index !== question.correct && (
                        <XCircle className="h-5 w-5 text-destructive" />
                      )}
                    </div>
                  </Label>
                </div>
              ))}
            </RadioGroup>

            {showExplanation && (
              <Card className="border-primary/20 bg-primary/5">
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium mb-2">Explanation</div>
                      <div className="text-sm text-muted-foreground">{question.explanation}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
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
              <Link to="/assessment/psychometric">
                <Button variant="outline">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Psychometric
                </Button>
              </Link>
            )}
          </div>

          <Button 
            onClick={handleNext}
            disabled={!hasAnswered}
            className="bg-gradient-primary hover:shadow-hover-glow transition-all duration-300"
          >
            {currentQuestion < questions.length - 1 ? 'Next Question' : 'Continue to WISCAR Analysis'}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        {/* Section Info */}
        <Card className="mt-8 border-technical/20">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-primary mb-1">Aptitude</div>
                <div className="text-sm text-muted-foreground">Logical reasoning and problem-solving skills</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-technical mb-1">Prerequisites</div>
                <div className="text-sm text-muted-foreground">Linux, Git, networking fundamentals</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-accent mb-1">DevOps</div>
                <div className="text-sm text-muted-foreground">CI/CD, containers, infrastructure knowledge</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Technical;