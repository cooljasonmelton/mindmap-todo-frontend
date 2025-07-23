"use client";

import { Dispatch, SetStateAction, useState } from "react";
import { Plus } from "lucide-react";
import { TodoItem } from "./TodoItem";
import { TodoNew } from "./TodoNew";
import { useTodos } from "../data/useTodos";
import { ToDoItem } from "../types";

// TODO: on item, x button that calls delete todo
// TODO: update button that moves to edit todo
// TODO: handle error state
// TODO: improve loading state

export const TodoContainer = ({
  selectedTodo,
  setSelectedTodo,
}: {
  selectedTodo: ToDoItem | null;
  setSelectedTodo: Dispatch<SetStateAction<ToDoItem | null>>;
}) => {
  const { todos, isLoading } = useTodos();

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

  const handleClickTodo = (todo: ToDoItem) => {
    // deselect if selected
    if (todo.id === selectedTodo?.id) {
      setSelectedTodo(null);
    } else {
      setSelectedTodo(todo);
    }
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
          // TODO: fix onClick on a button versus button cannot be descendant of button
          <div
            key={`todo-${i}`}
            className="w-full"
            onClick={() => handleClickTodo(todo)}
          >
            <TodoItem
              todo={todo}
              editableTodoId={editableTodoId}
              openTodoEditForm={openTodoEditForm}
              isSelected={todo.id === selectedTodo?.id}
            />
          </div>
        ))
      )}
    </div>
  );
};
