export type ToDoItem = {
  id: string;
  title: string;
  description?: string;
  isImportant: boolean;
};

export type ToDoItems = ToDoItem[];
