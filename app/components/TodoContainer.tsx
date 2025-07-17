"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { TodoItem } from "./TodoItem";
import mockData from "../mockData.json";
import { TodoNew } from "./TodoNew";
import { useTodos } from "../data/useTodos";

// TODO: on item, x button that calls delete todo
// TODO: update button that moves to edit todo

export const TodoContainer = () => {
  const todos = useTodos();
  console.log("useTodos", todos);

  const [showTodoNew, setShowTodoNew] = useState(false);
  const [editableTodoId, setEditableTodoId] = useState<string | null>(null);

  // only show one create/new form at a time
  const openTodoNewForm = () => {
    setEditableTodoId(null);
    setShowTodoNew(true);
  };
  const openTodoEditForm = (id: string | null) => {
    setShowTodoNew(false);
    setEditableTodoId(id);
  };

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
