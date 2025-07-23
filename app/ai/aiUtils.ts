export const getTaskBreakdown = async (task: string) => {
  try {
    const response = await fetch("http://localhost:11434/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "llama3.2",
        prompt: `Break down this task into specific, actionable steps. If unable to understand task or create steps, respond with a string of text asking for your needed clarification. Otherwise, return list of steps as a string with each step separated by a comma, no other text:

Task: ${task}

Format: "step 1, step 2, step 3"`,
        stream: false,
      }),
    });

    const data = await response.json();
    return data.response;
  } catch (error) {
    console.error("Error calling Ollama:", error);
    throw error;
  }
};
