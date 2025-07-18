"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useDeleteTodo = () => {
  const queryClient = useQueryClient();

  const deleteItem = async (id: string) => {
    const response = await fetch(`http://localhost:8000/api/todos/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error("Failed to delete item");
    }
    return { success: true, id };
  };

  const deleteMutation = useMutation({
    mutationFn: deleteItem,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
    // TODO: onError: () =>
  });

  const handleDelete = (id: string) => {
    deleteMutation.mutate(id);
  };

  return handleDelete;
};
