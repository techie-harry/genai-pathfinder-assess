
import React, { useMemo } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AssessmentResult, Recommendation } from '@/types/assessment';
import { CATEGORIES, RECOMMENDATIONS } from '@/data/assessmentData';
import { CheckCircle2 } from 'lucide-react';

interface RecommendationsSectionProps {
  result: AssessmentResult;
}

const RecommendationsSection: React.FC<RecommendationsSectionProps> = ({ result }) => {
  const { categoryResults } = result;
  
  // Get recommendations based on category scores
  const getRecommendationsForCategory = (category: string, percentage: number) => {
    return RECOMMENDATIONS.find(
      rec => rec.category === category && 
      percentage >= rec.scoreRange[0] && 
      percentage <= rec.scoreRange[1]
    );
  };
  
  // Get all applicable recommendations
  const recommendations = useMemo(() => {
    return categoryResults.map(categoryResult => {
      const recommendation = getRecommendationsForCategory(
        categoryResult.category, 
        categoryResult.percentage
      );
      return {
        ...recommendation,
        category: categoryResult.category,
        percentage: categoryResult.percentage
      };
    }).filter(rec => rec !== undefined) as (Recommendation & { percentage: number })[];
  }, [categoryResults]);
  
  return (
    <div className="w-full max-w-4xl mx-auto px-4 mb-12">
      <h2 className="text-3xl font-bold text-center mb-6">Personalized Recommendations</h2>
      <p className="text-center text-gray-600 mb-8">
        Based on your assessment results, we've created tailored recommendations for each dimension.
      </p>
      
      <div className="space-y-8">
        {recommendations.map((recommendation) => (
          <RecommendationCard 
            key={recommendation.category} 
            recommendation={recommendation} 
          />
        ))}
      </div>
    </div>
  );
};

interface RecommendationCardProps {
  recommendation: Recommendation & { percentage: number };
}

const RecommendationCard: React.FC<RecommendationCardProps> = ({ recommendation }) => {
  const { category, title, description, actions, percentage } = recommendation;
  const categoryInfo = CATEGORIES[category];
  
  const getPriorityLevel = (percentage: number) => {
    if (percentage < 33) return { level: "High Priority", class: "bg-red-100 text-red-700" };
    if (percentage < 67) return { level: "Medium Priority", class: "bg-yellow-100 text-yellow-700" };
    return { level: "Enhancement", class: "bg-green-100 text-green-700" };
  };
  
  const priority = getPriorityLevel(percentage);
  
  return (
    <Card className="border-l-4" style={{ borderLeftColor: getCategoryColor(percentage) }}>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium px-2.5 py-0.5 rounded-full bg-genai-light text-genai-primary">
              {categoryInfo.label}
            </span>
            <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${priority.class}`}>
              {priority.level}
            </span>
          </div>
          <span className="text-sm font-medium">{Math.round(percentage)}% Readiness</span>
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <h4 className="font-medium mb-3">Recommended Actions:</h4>
        <ul className="space-y-2">
          {actions.map((action, index) => (
            <li key={index} className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-genai-primary flex-shrink-0 mt-0.5" />
              <span className="text-gray-700">{action}</span>
            </li>
          ))}
        </ul>
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

export default RecommendationsSection;
