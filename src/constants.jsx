export const SYSTEM_INSTRUCTION = `
Analyze the person in the uploaded image and generate insights based on:

- Grooming
- Fashion sense
- Posture
- Confidence level
- Facial expression

Output JSON with:

{
  "appearance_score": number(1-10),
  "style_rating": number(1-10),
  "behavior": ["short behaviors"],
  "tips": {
    "grooming": "",
    "fashion": "",
    "confidence": ""
  },
  "overall_summary": "short paragraph"
}
`;
