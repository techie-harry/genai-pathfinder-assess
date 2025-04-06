
import React from 'react';
import { Progress } from "@/components/ui/progress";

interface AssessmentProgressProps {
  currentStep: number;
  totalSteps: number;
}

const AssessmentProgress: React.FC<AssessmentProgressProps> = ({ currentStep, totalSteps }) => {
  const progress = (currentStep / totalSteps) * 100;
  
  return (
    <div className="w-full max-w-4xl mx-auto mb-6">
      <div className="flex justify-between mb-2 text-sm">
        <span className="text-gray-600">Progress</span>
        <span className="font-medium">{Math.round(progress)}%</span>
      </div>
      <Progress value={progress} className="h-2" />
    </div>
  );
};

export default AssessmentProgress;
