
import React, { useState, useEffect } from 'react';
import { Question, Answer } from '@/types/assessment';
import { Button } from "@/components/ui/button";
import QuestionCard from './QuestionCard';
import AssessmentProgress from './AssessmentProgress';
import { ArrowLeft, ArrowRight, Check } from 'lucide-react';

interface AssessmentQuestionsProps {
  questions: Question[];
  onComplete: (answers: Answer[]) => void;
  onBack: () => void;
}

const AssessmentQuestions: React.FC<AssessmentQuestionsProps> = ({ 
  questions, 
  onComplete,
  onBack
}) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  
  const currentQuestion = questions[currentQuestionIndex];
  const isFirstQuestion = currentQuestionIndex === 0;
  const isLastQuestion = currentQuestionIndex === questions.length - 1;
  
  const currentAnswer = answers.find(
    answer => answer.questionId === currentQuestion.id
  )?.value ?? null;
  
  const handleAnswerSelected = (value: number) => {
    const newAnswers = [...answers];
    const existingAnswerIndex = newAnswers.findIndex(
      answer => answer.questionId === currentQuestion.id
    );
    
    if (existingAnswerIndex >= 0) {
      newAnswers[existingAnswerIndex].value = value;
    } else {
      newAnswers.push({
        questionId: currentQuestion.id,
        value
      });
    }
    
    setAnswers(newAnswers);
  };
  
  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };
  
  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    } else {
      onBack();
    }
  };
  
  const handleComplete = () => {
    onComplete(answers);
  };
  
  // Automatically move to next question when answering
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (
        currentAnswer !== null && 
        !isLastQuestion && 
        answers.length > currentQuestionIndex && 
        answers[answers.length - 1].questionId === currentQuestion.id
      ) {
        handleNext();
      }
    }, 500);
    
    return () => clearTimeout(timeoutId);
  }, [answers, currentQuestionIndex, isLastQuestion, currentAnswer, currentQuestion.id]);
  
  return (
    <div className="flex flex-col items-center w-full max-w-4xl mx-auto px-4">
      <AssessmentProgress 
        currentStep={currentQuestionIndex + 1} 
        totalSteps={questions.length} 
      />
      
      <div className="w-full mb-8">
        <QuestionCard 
          question={currentQuestion}
          currentAnswer={currentAnswer}
          onAnswerSelected={handleAnswerSelected}
        />
      </div>
      
      <div className="flex justify-between w-full">
        <Button
          onClick={handlePrevious}
          variant="outline"
          className="flex items-center gap-2"
        >
          <ArrowLeft className="h-4 w-4" />
          {isFirstQuestion ? 'Back to Intro' : 'Previous'}
        </Button>
        
        {isLastQuestion ? (
          <Button
            onClick={handleComplete}
            disabled={answers.length < questions.length}
            className="bg-genai-primary hover:bg-genai-dark flex items-center gap-2"
          >
            Complete Assessment
            <Check className="h-4 w-4" />
          </Button>
        ) : (
          <Button
            onClick={handleNext}
            disabled={currentAnswer === null}
            className="bg-genai-primary hover:bg-genai-dark flex items-center gap-2"
          >
            Next
            <ArrowRight className="h-4 w-4" />
          </Button>
        )}
      </div>
    </div>
  );
};

export default AssessmentQuestions;
