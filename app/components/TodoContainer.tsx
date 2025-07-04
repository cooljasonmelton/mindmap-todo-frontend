"use client";

import { useEffect, useState } from "react";
import { Plus } from "lucide-react";
import { TodoItem } from "./TodoItem";
import mockData from "../mockData.json";
import { TodoNew } from "./TodoNew";

// TODO: on item, x button that calls delete todo
// TODO: update button that moves to edit todo

export const TodoContainer = () => {
  const [showTodoNew, setShowTodoNew] = useState(false);
  const [editableTodoId, setEditableTodoId] = useState<string | null>(null);

  const openTodoNewForm = () => {
    setEditableTodoId(null);
    setShowTodoNew(true);
  };

  const openTodoEditForm = (id: string | null) => {
    setShowTodoNew(false);
    setEditableTodoId(id);
  };

  console.log("showTodoNew", showTodoNew, "editableTodoId", editableTodoId);

  return (
    <div className="card flex-[3]">
      <div className="flex">
        <button className="btn-primary" onClick={openTodoNewForm}>
          <Plus />
        </button>
        <h1 className="h1 ml-auto mr-auto">Tasks</h1>
      </div>

      {showTodoNew && (
        <TodoNew cancelCreateTodo={() => setShowTodoNew(false)} />
      )}

      {mockData.map((todo, i) => (
        <TodoItem
          key={`todo-${i}`}
          todo={todo}
          editableTodoId={editableTodoId}
          openTodoEditForm={openTodoEditForm}
        />
      ))}
    </div>
  );
};
