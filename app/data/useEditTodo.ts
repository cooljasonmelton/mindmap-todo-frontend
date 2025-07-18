"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ToDoItem } from "../types";

export const useEditTodo = () => {
  const queryClient = useQueryClient();

  const editItem = async (updatedTodo: ToDoItem) => {
    const response = await fetch(
      `http://localhost:8000/api/todos/${updatedTodo.id}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedTodo),
      }
    );
    if (!response.ok) {
      throw new Error("Failed to edit item");
    }
    return response.json();
  };

  const editTodo = useMutation({
    mutationFn: editItem,
    onSuccess: () => {
      console.log("hit success");
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
    // TODO: onError: () =>
  });

  return editTodo;
};
