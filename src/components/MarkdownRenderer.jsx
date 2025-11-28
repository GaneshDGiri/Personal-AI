import React from "react";

const MarkdownRenderer = ({ content }) => {
  if (!content) return null;

  const lines = content.split("\n");
  return (
    <div className="space-y-4 text-slate-300 leading-relaxed">
      {lines.map((line, index) => {
        if (line.startsWith("### ")) return <h3 key={index} className="text-xl font-bold text-amber-400">{line.replace("### ","")}</h3>
        if (line.startsWith("## ")) return <h2 key={index} className="text-2xl font-bold">{line.replace("## ","")}</h2>
        if (line.startsWith("- ")) return <li key={index} className="ml-4 list-disc">{line.replace("- ","")}</li>
        return <p key={index}>{line}</p>;
      })}
    </div>
  );
};

export default MarkdownRenderer;
