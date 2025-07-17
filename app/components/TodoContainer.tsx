"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { TodoItem } from "./TodoItem";
import { TodoNew } from "./TodoNew";
import { useTodos } from "../data/useTodos";

// TODO: on item, x button that calls delete todo
// TODO: update button that moves to edit todo
// TODO: handle error state
// TODO: improve loading o

export const TodoContainer = () => {
  const { todos, isLoading, error } = useTodos();
  console.log("useTodos", todos, isLoading, error);

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

      {isLoading ? (
        <div className="w-full p-10 text-center">loading</div>
      ) : (
        todos.map((todo, i) => (
          <TodoItem
            key={`todo-${i}`}
            todo={todo}
            editableTodoId={editableTodoId}
            openTodoEditForm={openTodoEditForm}
          />
        ))
      )}
    </div>
  );
};
