import React from "react";
import { Sparkles, ChevronRight } from "lucide-react";

export default function StepIntro({ next }) {
  return (
    // Changed 'min-h-screen' to 'h-full flex-1' to fit the new card layout
    <div className="h-full flex-1 flex flex-col justify-center items-center text-center p-6 text-white">
      <div className="mb-8 p-6 bg-yellow-500/10 rounded-full">
        <Sparkles className="h-16 w-16 text-yellow-400" />
      </div>
      <h1 className="text-4xl font-bold tracking-tight">Persona AI</h1>
      <p className="mt-4 text-gray-400 max-w-xs">
        Upload your photo and get a personalized style & grooming analysis.
      </p>
      <button 
        onClick={next} 
        className="mt-12 w-full p-4 rounded-xl bg-yellow-500 text-black font-bold text-lg flex items-center justify-center gap-2 hover:bg-yellow-400 transition-all active:scale-95"
      >
        Get Started <ChevronRight />
      </button>
    </div>
  );
}

