"use client";

import { useState } from "react";
import { ToDoItem } from "../types";
import { CloseButton } from "./CloseButton";
import { EditButton } from "./EditButton";
import { TodoUpdate } from "./TodoUpdate";

export const TodoCard = (props: { todo: ToDoItem }) => {
  const [isEditing, setIsEditing] = useState(false);
  // console.log("props", props);
  const { title, description } = props.todo;

  if (isEditing) {
    return (
      <TodoUpdate
        title={title}
        description={description}
        cancelCreateTodo={() => setIsEditing(false)}
      />
    );
  }
  return (
    <div className="card px-2 pt-2 pb-4 mx-[-1px] mb-[-1px]">
      <div className="flex items-start justify-between">
        <h2 className="h3 p-0 mb-2">{title}</h2>
        <div className="flex gap-2">
          <EditButton onClick={() => setIsEditing(true)} />
          <CloseButton onClick={() => {}} />
        </div>
      </div>
      <p className="">{description}</p>
    </div>
  );
};
