import { TodoCard } from "./TodoCard";
import mockData from "../mockData.json";
import { Plus } from "lucide-react";

// TODO: on item, x button that calls delete todo
// TODO: update button that moves to edit todo

export const TodoContainer = () => {
  return (
    <div className="card flex-[3]">
      <div className="flex">
        <button className="btn-primary">
          <Plus />
        </button>
        <h1 className="h1 ml-auto mr-auto">Tasks</h1>
      </div>

      {mockData.map((todo, i) => (
        <TodoCard key={`todo-${i}`} todo={todo} />
      ))}
    </div>
  );
};
