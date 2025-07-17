export type ToDoItem = {
  id: string;
  title: string;
  description?: string;
  isImportant: boolean;
};

export type NewToDoItemPayload = Omit<ToDoItem, "id">;

export type ToDoItems = ToDoItem[];
