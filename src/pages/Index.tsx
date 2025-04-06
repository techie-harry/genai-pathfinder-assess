
import React from "react";
import { BrainCog } from "lucide-react";
import AssessmentContainer from "@/components/AssessmentContainer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <header className="py-6 border-b">
        <div className="container flex items-center justify-center">
          <div className="flex items-center gap-2">
            <BrainCog className="h-8 w-8 text-genai-primary" />
            <h1 className="text-2xl font-bold text-gray-800">GenAI Pathfinder</h1>
          </div>
        </div>
      </header>
      
      <main className="container">
        <AssessmentContainer />
      </main>
      
      <footer className="py-6 border-t mt-12 bg-white">
        <div className="container text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} GenAI Pathfinder Assessment Tool</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
