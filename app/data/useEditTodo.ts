// "use client";

// import { useMutation, useQueryClient } from "@tanstack/react-query";

// export const useEditTodo = () => {
//   const queryClient = useQueryClient();
//   const editTodo = useMutation({
//     mutationFn: (updatedTodo) =>
//       fetch(`http://localhost:8000/api/todos/${updatedTodo.id}`, {
//         method: "PATCH",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(updatedTodo),
//       }),
//     onSuccess: () => {
//       queryClient.invalidateQueries({ queryKey: ["todos"] });
//     },
//     // TODO: onError: () =>
//   });

//   return {
//     editTodo,
//   };
// };
export {};
