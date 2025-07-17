"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useCreateTodo = () => {
  const queryClient = useQueryClient();
  const createTodo = useMutation({
    mutationFn: (newTodo) =>
      fetch("http://localhost:8000/api/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newTodo),
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
    // TODO: onError: () =>
  });

  return {
    createTodo,
  };
};
