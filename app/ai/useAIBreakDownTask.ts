"use client";

import { useState } from "react";
import { getTaskBreakdown } from "./aiUtils";

// TODO: add logic to store or cache ai responses and match them to tasks, reduce ollama api calls
export const useAIBreakDownTask = () => {
  const [steps, setSteps] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const formattedSteps: string[] = steps
    .split(",") // This part is correct
    .map((step: string) => step.trim()) // Just trim whitespace
    .filter((step: string) => step.length > 0);

  const handleAIBreakdown = async (todoText: string) => {
    setIsLoading(true);
    setError(null); // clear prev errors

    try {
      const breakdown = await getTaskBreakdown(todoText);
      setSteps(breakdown || "");
    } catch (error) {
      setError("Failed to generate task breakdown");
      console.error("Failed to get AI breakdown:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const resetBreakdown = () => {
    setSteps("");
    setError(null);
  };

  return {
    handleAIBreakdown,
    resetBreakdown,
    steps: formattedSteps,
    isLoading,
    error,
  };
};
