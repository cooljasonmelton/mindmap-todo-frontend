// TODO:

import { ToDoItem } from "../types";

export const TodoCard = (props: { todo: ToDoItem }) => {
  console.log("props", props);
  const { name, description, isImportant } = props.todo;
  return (
    <div className="">
      <h2>{name}</h2>
      <p>{description}</p>
    </div>
  );
};
