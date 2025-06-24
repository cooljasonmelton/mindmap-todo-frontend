export type ToDoItem = {
  id: string;
  name: string;
  description?: string;
  important: boolean;
};

export type ToDoItems = ToDoItem[];
