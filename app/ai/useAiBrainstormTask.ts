"use client";

import { useState } from "react";
import { getAiResponse } from "./aiUtils";
import { getTaskBrainstormPrompt } from "./aiPrompts";

// TODO: add logic to store or cache ai responses and match them to tasks, reduce ollama api calls
export const useAiBrainstormTask = () => {
  const [steps, setSteps] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const formattedSteps: string[] = steps
    .split("|")
    .map((step: string) => step.trim()) // trim whitespace
    .filter((step: string) => step.length > 0);

  const handleAiBrainstorm = async (todoText: string) => {
    setIsLoading(true);
    setError(null); // clear prev errors

    try {
      const breakdown = await getAiResponse(getTaskBrainstormPrompt(todoText));
      setSteps(breakdown || "");
    } catch (error) {
      setError("Failed to generate brainstorm");
      console.error("Failed to get brainstorm:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const resetBrainstorm = () => {
    setSteps("");
    setError(null);
  };

  return {
    handleAiBrainstorm,
    resetBrainstorm,
    brainstormSteps: formattedSteps,
    isLoadingBrainstorm: isLoading,
    error,
  };
};
