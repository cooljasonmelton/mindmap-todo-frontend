export type ToDoItem = {
  id: string;
  name: string;
  description?: string;
  isImportant: boolean;
};

export type ToDoItems = ToDoItem[];
