
import React, { useState } from 'react';
import { Answer, AssessmentResult, CategoryResult } from '@/types/assessment';
import { QUESTIONS } from '@/data/assessmentData';
import AssessmentIntro from './AssessmentIntro';
import AssessmentQuestions from './AssessmentQuestions';
import ResultsSummary from './ResultsSummary';
import RecommendationsSection from './RecommendationsSection';
import ResultsActions from './ResultsActions';

const AssessmentContainer: React.FC = () => {
  const [step, setStep] = useState<'intro' | 'questions' | 'results'>('intro');
  const [result, setResult] = useState<AssessmentResult | null>(null);
  
  const handleStart = () => {
    setStep('questions');
  };
  
  const handleBack = () => {
    setStep('intro');
  };
  
  const handleComplete = (answers: Answer[]) => {
    const result = calculateResults(answers);
    setResult(result);
    setStep('results');
    
    // Scroll to top
    window.scrollTo(0, 0);
  };
  
  const handleReset = () => {
    setResult(null);
    setStep('intro');
    
    // Scroll to top
    window.scrollTo(0, 0);
  };
  
  const calculateResults = (answers: Answer[]): AssessmentResult => {
    // Group questions by category
    const questionsByCategory = QUESTIONS.reduce((acc, question) => {
      if (!acc[question.category]) {
        acc[question.category] = [];
      }
      acc[question.category].push(question);
      return acc;
    }, {} as Record<string, typeof QUESTIONS>);
    
    // Calculate scores by category
    const categoryResults: CategoryResult[] = Object.entries(questionsByCategory).map(([category, questions]) => {
      const categoryAnswers = answers.filter(answer => 
        questions.some(q => q.id === answer.questionId)
      );
      
      const score = categoryAnswers.reduce((total, answer) => total + answer.value, 0);
      const maxScore = questions.length * 5; // Assuming 5 is max value for each question
      const percentage = (score / maxScore) * 100;
      
      return {
        category: category as any,
        score,
        maxScore,
        percentage
      };
    });
    
    // Calculate overall score
    const totalScore = categoryResults.reduce((total, cat) => total + cat.score, 0);
    const totalMaxScore = categoryResults.reduce((total, cat) => total + cat.maxScore, 0);
    const overallPercentage = (totalScore / totalMaxScore) * 100;
    
    return {
      answers,
      categoryResults,
      overallScore: totalScore,
      overallPercentage,
      timestamp: new Date().toISOString()
    };
  };
  
  return (
    <div className="py-8">
      {step === 'intro' && <AssessmentIntro onStart={handleStart} />}
      
      {step === 'questions' && (
        <AssessmentQuestions 
          questions={QUESTIONS} 
          onComplete={handleComplete}
          onBack={handleBack}
        />
      )}
      
      {step === 'results' && result && (
        <>
          <ResultsSummary result={result} />
          <RecommendationsSection result={result} />
          <ResultsActions result={result} onReset={handleReset} />
        </>
      )}
    </div>
  );
};

export default AssessmentContainer;
