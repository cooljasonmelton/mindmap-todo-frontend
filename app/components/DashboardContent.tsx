"use client";

import { useState } from "react";
import { AiPanel } from "./AiPanel";
import { TodoContainer } from "./TodoContainer";
import { ToDoItem } from "../types";

const DashboardContent = () => {
  const [selectedTodo, setSelectedTodo] = useState<ToDoItem | null>(null);
  console.log("DashboardContent", "selectedTodo", selectedTodo);
  return (
    <>
      <TodoContainer
        selectedTodo={selectedTodo}
        setSelectedTodo={setSelectedTodo}
      />
      <AiPanel selectedTodo={selectedTodo} />
    </>
  );
};

export default DashboardContent;
