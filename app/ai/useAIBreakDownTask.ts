"use client";

import { useState } from "react";
import { getAiResponse } from "./aiUtils";
import { getTaskBreakdownPrompt } from "./aiPrompts";

// TODO: add logic to store or cache ai responses and match them to tasks, reduce ollama api calls
export const useAiBreakDownTask = () => {
  const [steps, setSteps] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const formattedSteps: string[] = steps
    .split("|")
    .map((step: string) => step.trim()) // trim whitespace
    .filter((step: string) => step.length > 0);

  const handleAiBreakdown = async (todoText: string) => {
    setIsLoading(true);
    setError(null); // clear prev errors

    try {
      const breakdown = await getAiResponse(getTaskBreakdownPrompt(todoText));
      setSteps(breakdown || "");
    } catch (error) {
      setError("Failed to generate task breakdown");
      console.error("Failed to get Ai breakdown:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const resetBreakdown = () => {
    setSteps("");
    setError(null);
  };

  return {
    handleAiBreakdown,
    resetBreakdown,
    breakdownSteps: formattedSteps,
    isLoadingBreakdown: isLoading,
    error,
  };
};
