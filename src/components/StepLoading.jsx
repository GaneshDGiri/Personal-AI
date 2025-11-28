import React from 'react'; // <--- This was missing
import { Sparkles } from "lucide-react";

export default function StepLoading({ stage }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white space-y-4">
      <Sparkles className="animate-spin h-10 w-10 text-yellow-400" />
      <p className="text-xl font-semibold">
        {stage === "analyzing_image" ? "Analyzing Photo..." : "Generating Style Plan..."}
      </p>
    </div>
  );
}