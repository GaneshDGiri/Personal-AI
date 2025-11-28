import React, { useState, useRef } from "react";
import StepIntro from "./components/StepIntro";
import StepProfile from "./components/StepProfile";
import StepImageUpload from "./components/StepImageUpload";
import StepLoading from "./components/StepLoading";
import StepResult from "./components/StepResult";
import { analyzeImage } from "./api/analyzeImage";
import { generateContent } from "./api/generateContent";

export default function App() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({ age: "", occupation: "" });
  const [previewUrl, setPreviewUrl] = useState(null);
  const [advice, setAdvice] = useState("");
  const fileRef = useRef();

  const handleUpload = () => fileRef.current.click();

  const generate = async () => {
    try {
      setStep(3); // Loading
      
      const analysis = await analyzeImage(previewUrl.split(",")[1], "Analyze the grooming, fashion, and style of this person.");
      const result = await generateContent(`User is ${formData.age} years old, working as ${formData.occupation}.\nImage Analysis: ${analysis}`, "Give a strict, constructive grooming and style improvement plan.");
      
      setAdvice(result);
      setStep(4); // Result
    } catch (error) {
      console.error(error);
      alert("Error: " + error.message);
      setStep(2);
    }
  };

  const reset = () => {
    setStep(0);
    setPreviewUrl(null);
    setAdvice("");
    setFormData({ age: "", occupation: "" });
  };

  return (
    // MAIN CONTAINER
    <div className="w-full min-h-screen flex items-center justify-center sm:p-4">
      
      {/* ✨ GLASS CARD EFFECT ✨
         bg-black/80 = Black background with transparency
         backdrop-blur-xl = Blurs the image behind the card
         border-white/10 = Subtle border
      */}
      <div className="w-full max-w-md min-h-screen sm:min-h-[800px] bg-black/80 backdrop-blur-xl sm:rounded-3xl sm:shadow-2xl border border-white/10 flex flex-col overflow-hidden relative text-white">
        
        {/* Content Area */}
        <div className="flex-1 flex flex-col relative z-10">
          {step === 0 && <StepIntro next={() => setStep(1)} />}
          {step === 1 && <StepProfile formData={formData} setFormData={setFormData} next={() => setStep(2)} />}
          {step === 2 && (
            <>
              <StepImageUpload previewUrl={previewUrl} upload={handleUpload} generate={generate} />
              <input ref={fileRef} type="file" className="hidden" accept="image/*"
                onChange={(e)=>{
                  const reader=new FileReader();
                  reader.onloadend=()=>setPreviewUrl(reader.result);
                  reader.readAsDataURL(e.target.files[0]);
                }}/>
            </>
          )}
          {step === 3 && <StepLoading stage="analyzing" />}
          {step === 4 && <StepResult advice={advice} reset={reset} />}
        </div>

      </div>
    </div>
  );
}
