"use client";

import { useQuery } from "@tanstack/react-query";

export const useTodos = () => {
  const {
    data: todos,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["todos"],
    queryFn: () =>
      fetch("http://localhost:8000/api/todos").then((res) => res.json()),
  });

  return {
    todos,
    isLoading,
    error,
  };
};
