"use client";

import { Dispatch, SetStateAction, useState } from "react";
import { ToDoItem } from "../types";
import { CloseButton } from "./CloseButton";
import { EditButton } from "./EditButton";
import { TodoEdit } from "./TodoEdit";

interface TodoItemProps {
  todo: ToDoItem;
  editableTodoId: string | null;
  setEditableTodoId: Dispatch<SetStateAction<string | null>>;
}

export const TodoItem = (props: TodoItemProps) => {
  const [isEditing, setIsEditing] = useState(false);
  // console.log("props", props);
  const { id, title, description } = props.todo;

  const makeTodoItemEditable = () => {
    setIsEditing(true);
    props.setEditableTodoId(id);
  };

  const closeTodoItemEditForm = () => {
    setIsEditing(false);
    props.setEditableTodoId(null);
  };

  if (isEditing) {
    return (
      <TodoEdit
        title={title}
        description={description}
        cancelCreateTodo={closeTodoItemEditForm}
      />
    );
  }
  return (
    <div className="card px-2 pt-2 pb-4 mx-[-1px] mb-[-1px]">
      <div className="flex items-start justify-between">
        <h2 className="h3 p-0 mb-2">{title}</h2>
        <div className="flex gap-2">
          <EditButton onClick={makeTodoItemEditable} />
          <CloseButton onClick={() => {}} />
        </div>
      </div>
      <p className="">{description}</p>
    </div>
  );
};
