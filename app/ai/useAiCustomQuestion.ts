"use client";

import { useState } from "react";
import { getAiResponse } from "./aiUtils";
import { getCustomQuestionResponsePrompt } from "./aiPrompts";

// TODO: add logic to store or cache ai responses and match them to tasks, reduce ollama api calls
export const useAiCustomQuestion = () => {
  const [response, setResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const formattedResponse: string[] = response
    .split("|")
    .map((step: string) => step.trim()) // trim whitespace
    .filter((step: string) => step.length > 0);

  const handleAiCustomQuestion = async (todoText: string) => {
    setIsLoading(true);
    setError(null); // clear prev errors

    try {
      const breakdown = await getAiResponse(
        getCustomQuestionResponsePrompt(todoText)
      );
      setResponse(breakdown || "");
    } catch (error) {
      setError("Failed to generate custom question response");
      console.error("Failed to get Ai custom queation response:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const resetCustomQuestion = () => {
    setResponse("");
    setError(null);
  };

  return {
    handleAiCustomQuestion,
    resetCustomQuestion,
    customQuestionResponse: formattedResponse,
    isLoadingResponse: isLoading,
    error,
  };
};
