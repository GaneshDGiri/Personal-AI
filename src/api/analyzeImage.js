const apiKey = "AIzaSyDF8b4N2RO3guzFG_md77qH7xqYfyNu6t8";

export const analyzeImage = async (base64Image, prompt) => {
  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                { text: prompt },
                { inlineData: { mimeType: "image/png", data: base64Image } },
              ],
            },
          ],
        }),
      }
    );

    if (!response.ok) throw new Error(`Image Analysis Error: ${response.status}`);

    const data = await response.json();
    return data.candidates?.[0]?.content?.parts?.[0]?.text || "Could not analyze image.";
  } catch (error) {
    console.error("Image Analysis Error:", error);
    throw error;
  }
};
