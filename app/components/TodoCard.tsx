// TODO:

import { ToDoItem } from "../types";

export const TodoCard = (props: { todo: ToDoItem }) => {
  console.log("props", props);
  const { name, description } = props.todo;
  return (
    <div className="card px-4 py-2">
      <h2 className="h3 mb-2">{name}</h2>
      <p className="">{description}</p>
    </div>
  );
};
