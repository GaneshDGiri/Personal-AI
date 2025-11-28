import React from "react"; // <--- This import is required

export default function StepImageUpload({ previewUrl, upload, generate }) {
  return (
    <div className="p-6 text-white flex flex-col gap-4 max-w-md mx-auto">
      <h2 className="text-xl font-bold text-center mb-2">Upload Your Photo</h2>
      
      {/* Upload Area */}
      <div 
        onClick={upload} 
        className="h-64 border-2 border-dashed border-gray-600 rounded-xl flex items-center justify-center cursor-pointer hover:border-yellow-500 hover:bg-gray-800 transition-all overflow-hidden bg-gray-900"
      >
        {previewUrl ? (
          <img src={previewUrl} className="object-cover h-full w-full" alt="Upload Preview" />
        ) : (
          <div className="text-center text-gray-400">
             <span className="block text-2xl mb-2">📷</span>
             <span className="font-medium">Click to Upload</span>
          </div>
        )}
      </div>

      {/* Generate Button - Disabled until image is uploaded */}
      <button 
        onClick={generate} 
        disabled={!previewUrl}
        className={`w-full p-3 rounded-lg font-bold transition-colors shadow-lg ${
          previewUrl 
            ? "bg-yellow-500 text-black hover:bg-yellow-400 cursor-pointer" 
            : "bg-gray-700 text-gray-500 cursor-not-allowed"
        }`}
      >
        Generate Analysis
      </button>
    </div>
  );
}