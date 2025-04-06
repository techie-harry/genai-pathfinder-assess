
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CATEGORIES } from "@/data/assessmentData";
import { BrainCog } from 'lucide-react';

interface AssessmentIntroProps {
  onStart: () => void;
}

const AssessmentIntro: React.FC<AssessmentIntroProps> = ({ onStart }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full max-w-4xl mx-auto px-4">
      <div className="flex justify-center mb-6">
        <div className="h-24 w-24 rounded-full bg-genai-light flex items-center justify-center">
          <BrainCog className="h-12 w-12 text-genai-primary" />
        </div>
      </div>
      
      <h1 className="text-4xl font-bold text-center mb-4 text-gray-800">GenAI Readiness Assessment</h1>
      <p className="text-xl text-center mb-10 text-gray-600">
        Evaluate your organization's readiness for implementing Generative AI and get personalized recommendations
      </p>
      
      <Card className="w-full mb-8 border-genai-light shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl">About this assessment</CardTitle>
          <CardDescription>
            This assessment will evaluate 5 key dimensions of GenAI readiness
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {Object.entries(CATEGORIES).map(([key, category]) => (
            <div key={key} className="p-4 border rounded-lg hover:border-genai-primary hover:shadow-md transition-all">
              <h3 className="font-semibold text-lg mb-2">{category.label}</h3>
              <p className="text-sm text-gray-600">{category.description}</p>
            </div>
          ))}
        </CardContent>
        <CardFooter>
          <p className="text-sm text-gray-500">
            This assessment contains 15 questions and takes approximately 5-10 minutes to complete.
          </p>
        </CardFooter>
      </Card>
      
      <Button 
        onClick={onStart} 
        className="bg-genai-primary hover:bg-genai-dark text-white px-8 py-6 text-lg rounded-lg"
      >
        Start Assessment
      </Button>
    </div>
  );
};

export default AssessmentIntro;
