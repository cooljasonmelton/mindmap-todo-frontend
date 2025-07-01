"use client";

import { ToDoItem } from "../types";
import { CloseButton } from "./CloseButton";

export const TodoCard = (props: { todo: ToDoItem }) => {
  // console.log("props", props);
  const { name, description } = props.todo;
  return (
    <div className="card px-2 pt-2 pb-4 mx-[-1px] mb-[-1px]">
      <div className="flex items-start justify-between">
        <h2 className="h3 p-0 mb-2">{name}</h2>
        <CloseButton onClick={() => {}} />
      </div>
      <p className="">{description}</p>
    </div>
  );
};
