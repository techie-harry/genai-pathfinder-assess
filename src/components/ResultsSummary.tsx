
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { AssessmentResult, CategoryResult } from '@/types/assessment';
import { CATEGORIES } from '@/data/assessmentData';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { BadgeCheck } from 'lucide-react';

interface ResultsSummaryProps {
  result: AssessmentResult;
}

const ResultsSummary: React.FC<ResultsSummaryProps> = ({ result }) => {
  const { categoryResults, overallPercentage } = result;
  
  // Data for the pie chart
  const chartData = categoryResults.map(categoryResult => ({
    name: CATEGORIES[categoryResult.category].label,
    value: categoryResult.percentage,
    color: getCategoryColor(categoryResult.percentage)
  }));
  
  // Get readiness level
  const getReadinessLevel = (percentage: number) => {
    if (percentage < 33) return { level: "Early Stage", class: "text-red-500" };
    if (percentage < 67) return { level: "Developing", class: "text-yellow-500" };
    return { level: "Advanced", class: "text-green-500" };
  };
  
  const overallReadiness = getReadinessLevel(overallPercentage);
  
  return (
    <div className="w-full max-w-4xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-6">Your GenAI Readiness Results</h2>
      
      <Alert className="mb-6 border-genai-primary bg-genai-light">
        <BadgeCheck className="h-5 w-5 text-genai-primary" />
        <AlertTitle>Assessment Complete</AlertTitle>
        <AlertDescription>
          Based on your answers, we've analyzed your organization's readiness for GenAI implementation.
        </AlertDescription>
      </Alert>
      
      <div className="grid gap-6 md:grid-cols-2 mb-8">
        <Card className="shadow-md">
          <CardHeader>
            <CardTitle>Overall Readiness</CardTitle>
            <CardDescription>Your organization's overall GenAI readiness</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center">
              <div className="w-48 h-48 flex items-center justify-center rounded-full border-8 border-genai-light mb-4">
                <div className="text-center">
                  <span className="text-5xl font-bold text-genai-primary">{Math.round(overallPercentage)}%</span>
                  <p className={`text-lg font-semibold ${overallReadiness.class}`}>
                    {overallReadiness.level}
                  </p>
                </div>
              </div>
              <Progress value={overallPercentage} className="h-2 w-full" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="shadow-md">
          <CardHeader>
            <CardTitle>Dimension Breakdown</CardTitle>
            <CardDescription>Readiness across key dimensions</CardDescription>
          </CardHeader>
          <CardContent className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={chartData}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, value }) => `${name}: ${Math.round(value)}%`}
                >
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => `${Math.round(Number(value))}%`} />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mb-8">
        {categoryResults.map((categoryResult) => (
          <CategoryResultCard key={categoryResult.category} categoryResult={categoryResult} />
        ))}
      </div>
    </div>
  );
};

const CategoryResultCard: React.FC<{ categoryResult: CategoryResult }> = ({ categoryResult }) => {
  const { category, percentage } = categoryResult;
  const categoryInfo = CATEGORIES[category];
  
  const readinessLevel = percentage < 33 
    ? "Early Stage" 
    : percentage < 67 
      ? "Developing" 
      : "Advanced";
      
  const levelColor = percentage < 33 
    ? "text-red-500" 
    : percentage < 67 
      ? "text-yellow-500" 
      : "text-green-500";
  
  return (
    <Card className="shadow-sm">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">{categoryInfo.label}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-2">
          <div className="flex justify-between mb-1">
            <span className="text-sm text-gray-600">Readiness</span>
            <span className="text-sm font-medium">{Math.round(percentage)}%</span>
          </div>
          <Progress value={percentage} className="h-2" />
        </div>
        <p className={`text-sm font-medium ${levelColor}`}>{readinessLevel}</p>
      </CardContent>
    </Card>
  );
};

// Helper function to get color based on percentage
function getCategoryColor(percentage: number): string {
  if (percentage < 33) return "#ef4444"; // red
  if (percentage < 67) return "#f59e0b"; // amber
  return "#10b981"; // green
}

export default ResultsSummary;
