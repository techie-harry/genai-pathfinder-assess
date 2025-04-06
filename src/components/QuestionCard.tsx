
import React from 'react';
import { Question } from '@/types/assessment';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { CATEGORIES } from '@/data/assessmentData';

interface QuestionCardProps {
  question: Question;
  currentAnswer: number | null;
  onAnswerSelected: (value: number) => void;
}

const QuestionCard: React.FC<QuestionCardProps> = ({ question, currentAnswer, onAnswerSelected }) => {
  const category = CATEGORIES[question.category];
  
  return (
    <Card className="w-full border-genai-light shadow-md">
      <CardHeader>
        <div className="flex items-center gap-2 mb-2">
          <span className="text-sm font-medium px-3 py-1 rounded-full bg-genai-light text-genai-primary">
            {category.label}
          </span>
        </div>
        <CardTitle className="text-xl">{question.text}</CardTitle>
        <CardDescription>
          Select the option that best describes your organization
        </CardDescription>
      </CardHeader>
      <CardContent>
        <RadioGroup 
          value={currentAnswer !== null ? currentAnswer.toString() : undefined} 
          onValueChange={(value) => onAnswerSelected(parseInt(value))}
          className="space-y-3"
        >
          {question.options.map((option, index) => (
            <div key={index} className="flex items-start space-x-3 p-3 rounded-md hover:bg-gray-50">
              <RadioGroupItem value={option.value.toString()} id={`option-${question.id}-${index}`} />
              <Label 
                htmlFor={`option-${question.id}-${index}`}
                className="font-normal cursor-pointer"
              >
                {option.label}
              </Label>
            </div>
          ))}
        </RadioGroup>
      </CardContent>
      <CardFooter className="text-xs text-gray-500">
        Question {parseInt(question.id.substring(1))} of 15
      </CardFooter>
    </Card>
  );
};

export default QuestionCard;
