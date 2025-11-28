import React from 'react'; // <--- Add this immediately
import MarkdownRenderer from "./MarkdownRenderer";

export default function StepResult({ advice, reset }) {
  return (
    <div className="p-6 text-white max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center text-yellow-400">Your Style Analysis</h2>
      <div className="bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700">
        <MarkdownRenderer content={advice} />
      </div>
      <button 
        onClick={reset} 
        className="mt-6 w-full bg-red-600 text-white font-bold p-3 rounded-lg hover:bg-red-500 transition-colors"
      >
        Restart
      </button>
    </div>
  );
}