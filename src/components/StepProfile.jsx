import React from "react"; // 1. Fixes "React is not defined" error

export default function StepProfile({ formData, setFormData, next }) {
  return (
    <div className="p-6 text-white">
      <h2 className="text-2xl font-bold mb-6">Profile Details</h2>
      
      <div className="space-y-4">
        {/* Age Input */}
        <div>
          <label className="block text-gray-400 mb-1 text-sm">Age</label>
          <input 
            className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500 transition-colors" 
            name="age" 
            placeholder="e.g. 25" 
            value={formData.age}
            onChange={(e) => setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))}
          />
        </div>

        {/* Occupation Input (New) */}
        <div>
          <label className="block text-gray-400 mb-1 text-sm">Occupation</label>
          <input 
            className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500 transition-colors" 
            name="occupation" 
            placeholder="e.g. Software Engineer" 
            value={formData.occupation}
            onChange={(e) => setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))}
          />
        </div>
      </div>

      <button 
        onClick={next} 
        className="mt-8 w-full p-3 bg-yellow-500 text-black font-bold rounded-lg hover:bg-yellow-400 transition-colors"
      >
        Next
      </button>
    </div>
  );
}