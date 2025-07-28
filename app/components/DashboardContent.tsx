"use client";

import { useState } from "react";
import { AiPanel } from "./AiPanel";
import { TodoContainer } from "./TodoContainer";
import { ToDoItem } from "../types";
import { useTodos } from "../data/useTodos";

const DashboardContent = () => {
  const { todos, isLoading } = useTodos();

  const [selectedTodo, setSelectedTodo] = useState<ToDoItem | undefined>(
    todos?.[0]
  );
  return (
    <>
      <TodoContainer
        selectedTodo={selectedTodo}
        setSelectedTodo={setSelectedTodo}
        todos={todos}
        isLoading={isLoading}
      />
      <AiPanel selectedTodo={selectedTodo} />
    </>
  );
};

export default DashboardContent;
