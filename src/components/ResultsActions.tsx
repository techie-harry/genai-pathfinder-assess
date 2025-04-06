
import React from 'react';
import { Button } from "@/components/ui/button";
import { Download, RefreshCw, Share2 } from 'lucide-react';
import { toast } from "sonner";
import { AssessmentResult } from '@/types/assessment';

interface ResultsActionsProps {
  result: AssessmentResult;
  onReset: () => void;
}

const ResultsActions: React.FC<ResultsActionsProps> = ({ result, onReset }) => {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'My GenAI Readiness Assessment Results',
        text: `My organization scored ${Math.round(result.overallPercentage)}% on the GenAI Readiness Assessment.`,
        url: window.location.href,
      })
      .catch((error) => toast.error('Error sharing results'));
    } else {
      // Fallback for browsers that don't support navigator.share
      navigator.clipboard.writeText(
        `My organization scored ${Math.round(result.overallPercentage)}% on the GenAI Readiness Assessment. Check out your organization's readiness at: ${window.location.href}`
      )
      .then(() => toast.success('Results link copied to clipboard!'))
      .catch(() => toast.error('Failed to copy results link'));
    }
  };

  const handleDownload = () => {
    // Create a report to download
    const report = {
      title: "GenAI Readiness Assessment Results",
      date: result.timestamp,
      overallScore: `${Math.round(result.overallPercentage)}%`,
      categoryResults: result.categoryResults.map(cr => ({
        category: cr.category,
        score: `${Math.round(cr.percentage)}%`
      })),
      answers: result.answers
    };
    
    // Convert to JSON and create a downloadable file
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(report, null, 2));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", "genai-assessment-results.json");
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
    
    toast.success("Assessment results downloaded successfully");
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center w-full max-w-4xl mx-auto px-4 mb-16">
      <Button 
        variant="outline" 
        className="flex items-center gap-2"
        onClick={onReset}
      >
        <RefreshCw className="h-4 w-4" />
        Take Assessment Again
      </Button>
      
      <Button 
        className="flex items-center gap-2 border-genai-primary border-2 bg-white text-genai-primary hover:bg-genai-light"
        onClick={handleDownload}
      >
        <Download className="h-4 w-4" />
        Download Results
      </Button>
      
      <Button 
        className="flex items-center gap-2 bg-genai-primary hover:bg-genai-dark"
        onClick={handleShare}
      >
        <Share2 className="h-4 w-4" />
        Share Results
      </Button>
    </div>
  );
};

export default ResultsActions;
