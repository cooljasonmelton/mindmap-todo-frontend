"use client";

import { useAIBreakDownTask } from "../ai/useAIBreakDownTask";
import { ToDoItem } from "../types";

// TODO: add disabled styles
const AiBreakDownTaskContainer = ({
  selectedTodo,
}: {
  selectedTodo: ToDoItem | null;
}) => {
  const { isLoading, handleAIBreakdown, steps } = useAIBreakDownTask();
  const task = `${selectedTodo?.title} ${selectedTodo?.description}`;

  console.log(
    "useAIBreakDownTask",
    "selectedTodo",
    isLoading,
    steps,
    selectedTodo,
    task
  );

  const handleClick = () => {
    console.log("click ai button");
    handleAIBreakdown(task || "");
  };
  return (
    <button
      disabled={!selectedTodo}
      className={`btn-primary ${!selectedTodo ? "disabled" : ""}`}
      onClick={handleClick}
    >
      break task into steps
    </button>
  );
};

export default AiBreakDownTaskContainer;
