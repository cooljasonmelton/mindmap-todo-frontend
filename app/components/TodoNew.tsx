"use client";

import { CloseButton } from "./CloseButton";
import { TodoForm } from "./TodoForm";

interface ToDoNewProps {
  cancelCreateTodo: () => void;
}

// TODO: fix bug where todo doesn't always update on submit
// TODO: set up isImportant logic (rn it isn't doing anything)
// TODO: connect to routing? /new

export const TodoNew = (props: ToDoNewProps) => {
  return (
    <div className="card !bg-[var(--jmc-orange)] !text-[var(--jmc-black)] px-2 pt-2 pb-4 mx-[-1px] mb-[-1px]">
      <div className="flex justify-end items-start">
        <h2 className="h3 mr-auto ml-auto">Create Task</h2>
        <CloseButton onClick={props.cancelCreateTodo} />
      </div>
      <TodoForm isNewTodo={true} onSubmit={props.cancelCreateTodo} />
    </div>
  );
};
