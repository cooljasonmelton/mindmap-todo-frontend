import { TodoCard } from "./TodoCard";
import mockData from "../mockData.json";

// TODO: x button that calls delete todo
// TODO: update button that moves to edit todo

export const TodoContainer = () => {
  return (
    <div className="flex-[3]">
      TodoContainer
      {mockData.map((todo, i) => (
        <TodoCard key={`todo-${i}`} todo={todo} />
      ))}
    </div>
  );
};
