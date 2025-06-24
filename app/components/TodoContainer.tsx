import { TodoCard } from "./TodoCard";
import mockData from "../mockData.json";

export const TodoContainer = () => {
  console.log("mockData", mockData);
  return (
    <div className="">
      TodoContainer
      {mockData.map((item, i) => (
        <TodoCard key={`todo-${i}`} />
      ))}
    </div>
  );
};
