
export interface Question {
  id: string;
  text: string;
  category: AssessmentCategory;
  options: {
    value: number;
    label: string;
  }[];
}

export interface Answer {
  questionId: string;
  value: number;
}

export type AssessmentCategory = 
  | 'dataReadiness'
  | 'technicalCapability'
  | 'skillsAndExpertise'
  | 'strategicAlignment'
  | 'governanceAndRisk';

export interface CategoryResult {
  category: AssessmentCategory;
  score: number;
  maxScore: number;
  percentage: number;
}

export interface AssessmentResult {
  answers: Answer[];
  categoryResults: CategoryResult[];
  overallScore: number;
  overallPercentage: number;
  timestamp: string;
}

export interface Recommendation {
  category: AssessmentCategory;
  scoreRange: [number, number]; // Min percentage and max percentage
  title: string;
  description: string;
  actions: string[];
}
