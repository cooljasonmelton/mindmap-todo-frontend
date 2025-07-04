"use client";

import { CloseButton } from "./CloseButton";
import { TodoForm } from "./TodoForm";

interface ToDoUpdateProps {
  id?: string;
  title?: string;
  description?: string;
  isImportant?: boolean;
  cancelCreateTodo: () => void;
}

// TODO: set up isImportant logic (rn it isn't doing anything)
// TODO: close other open edits if editing a task (move logic for edit to parent TodoContainer)

export const TodoUpdate = (props: ToDoUpdateProps) => {
  return (
    <div className="card !bg-[var(--jmc-dark-blue)] !text-[var(--jmc-black)] px-2 pt-2 pb-4 mx-[-1px] mb-[-1px]">
      <div>
        <div className="flex justify-end items-start">
          <h2 className="h3 mr-auto ml-auto">Edit Task</h2>
          <CloseButton onClick={props.cancelCreateTodo} />
        </div>
        <TodoForm
          id={props.id}
          title={props.title}
          description={props.description}
          isImportant={props.isImportant}
        />
      </div>
    </div>
  );
};
