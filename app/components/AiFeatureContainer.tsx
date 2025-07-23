"use client";

import { ToDoItem } from "../types";

// TODO: add disabled styles
const AiFeatureContainer = ({
  buttonText,
  selectedTodo,
  handleClick,
}: {
  buttonText: string;
  selectedTodo: ToDoItem | null;
  handleClick: (task: string) => void;
}) => {
  const task = `${selectedTodo?.title} ${selectedTodo?.description}`;

  return (
    <div className={`p-2`}>
      <button
        disabled={!selectedTodo}
        className={`w-full btn-primary ${!selectedTodo ? "disabled" : ""}`}
        onClick={() => handleClick(task || "")}
      >
        <b>{buttonText}</b>
      </button>
    </div>
  );
};

export default AiFeatureContainer;
