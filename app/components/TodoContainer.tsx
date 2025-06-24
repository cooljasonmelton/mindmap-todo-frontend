import { TodoCard } from "./TodoCard";
import mockData from "../mockData.json";

// TODO: x button that calls delete todo
// TODO: update button that moves to edit todo

export const TodoContainer = () => {
  return (
    <div className="">
      TodoContainer
      {mockData.map((item, i) => (
        <TodoCard key={`todo-${i}`} />
      ))}
    </div>
  );
};
