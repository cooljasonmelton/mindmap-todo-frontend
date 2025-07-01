"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { TodoCard } from "./TodoCard";
import mockData from "../mockData.json";
import { TodoNew } from "./TodoNew";

// TODO: on item, x button that calls delete todo
// TODO: update button that moves to edit todo

export const TodoContainer = () => {
  const [showTodoNew, setShowTodoNew] = useState(false);
  console.log("showTodoNew", showTodoNew);

  return (
    <div className="card flex-[3]">
      <div className="flex">
        <button className="btn-primary" onClick={() => setShowTodoNew(true)}>
          <Plus />
        </button>
        <h1 className="h1 ml-auto mr-auto">Tasks</h1>
      </div>

      {showTodoNew && (
        <TodoNew cancelCreateTodo={() => setShowTodoNew(false)} />
      )}

      {mockData.map((todo, i) => (
        <TodoCard key={`todo-${i}`} todo={todo} />
      ))}
    </div>
  );
};
