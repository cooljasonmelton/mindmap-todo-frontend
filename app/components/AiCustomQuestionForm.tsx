"use client";

import { useState } from "react";
import { useAiCustomQuestion } from "../ai/useAiCustomQuestion";
import Loader from "./Loader";

// TODO: add disabled styles
const AiCustomQuestionForm = ({}) => {
  //   const task = `${selectedTodo?.title} ${selectedTodo?.description}`;
  const {
    handleAiCustomQuestion,
    resetCustomQuestion,
    customQuestionResponse,
    isLoadingResponse,
    error: errorFromFetch,
  } = useAiCustomQuestion();

  const [questionInputText, setQuestionInputText] = useState("");
  const [error, setError] = useState(errorFromFetch);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    let newError = "";

    if (!questionInputText.trim()) {
      newError = "required";
    }
    return newError;
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const newError = validateForm();
    if (!!newError) {
      setError(newError);
      return;
    }

    setIsSubmitting(true);
    try {
      console.log("hit ask ai custom question", questionInputText);
      handleAiCustomQuestion(questionInputText);
    } catch (error) {
      // TODO: error handling
      console.error("Submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClear = () => {
    resetCustomQuestion();
    setQuestionInputText("");
  };

  return (
    <div className="card-custom-question flex flex-col gap-2 p-2">
      <div className="flex justify-center gap-2">
        <label htmlFor="question" className="form-label">
          Ask Custom Question
        </label>
        <p className="form-label !text-[var(--error-700)]">
          {!!error && error}
        </p>
      </div>
      <input
        type="text"
        id="title"
        name="title"
        value={questionInputText}
        onChange={(e) => setQuestionInputText(e.target.value)}
        className={`form-input border-2 ${
          !!error ? "border-red-500" : "border-gray-300"
        }`}
        placeholder="Enter question"
      />
      <div className="flex gap-2">
        <button
          type="submit"
          disabled={isSubmitting}
          onClick={handleSubmit}
          className={`btn-primary flex-1 ${isSubmitting ? "disabled" : ""}`}
        >
          {isSubmitting ? "Asking..." : "Ask"}
        </button>
        <button
          disabled={isSubmitting || !questionInputText}
          onClick={handleClear}
          className={`btn-primary flex-1 ${isSubmitting ? "disabled" : ""}`}
        >
          Clear
        </button>
      </div>
      {isLoadingResponse && (
        <div className="pt-8 pb-6">
          <Loader />
        </div>
      )}
      {!!customQuestionResponse.length && !isLoadingResponse && (
        <ul className="p-2">
          {customQuestionResponse?.map((text, i) => (
            <li className="list-item" key={i}>
              {text}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AiCustomQuestionForm;
