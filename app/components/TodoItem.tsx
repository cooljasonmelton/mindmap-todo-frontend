import { useEffect, useState } from "react";
import { useDeleteTodo } from "../data/useDeleteTodo";
import { ToDoItem } from "../types";
import { CloseButton } from "./CloseButton";
import { EditButton } from "./EditButton";
import { TodoEdit } from "./TodoEdit";

// TODO: add delete todo item and maybe some check like "are you sure?"" before delete
// TODO: i'm thinking for "are you sure" delete, if you click the X, the X turns red and
// you have to click it again to delete it? Maybe use a timer and reset it if not clicked
// again after a couple seconds

interface TodoItemProps {
  todo: ToDoItem;
  editableTodoId: string | null;
  openTodoEditForm: (id: string | null) => void;
}

export const TodoItem = (props: TodoItemProps) => {
  const deleteTodo = useDeleteTodo();
  const [isReadyToDelete, setIsReadyToDelete] = useState(false);
  const { id, title, description } = props.todo;

  useEffect(() => {}, [isReadyToDelete]);

  const handleClickCloseButton = () => {
    if (isReadyToDelete) {
      deleteTodo(id);
      setIsReadyToDelete(false);
    } else {
      setIsReadyToDelete(true);
    }
  };

  if (props.editableTodoId === id) {
    return (
      <TodoEdit
        title={title}
        description={description}
        cancelCreateTodo={() => props.openTodoEditForm(null)}
      />
    );
  }
  return (
    <div className="card px-2 pt-2 pb-4 mx-[-1px] mb-[-1px]">
      <div className="flex items-start justify-between">
        <h2 className="h3 p-0 mb-2">{title}</h2>
        <div className="flex gap-2">
          <EditButton onClick={() => props.openTodoEditForm(id)} />
          <CloseButton
            isReadyToDelete={isReadyToDelete}
            onBlur={() => setIsReadyToDelete(false)}
            onClick={handleClickCloseButton}
          />
        </div>
      </div>
      <p className="">{description}</p>
    </div>
  );
};
