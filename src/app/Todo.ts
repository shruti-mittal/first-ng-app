export class Todo {
  taskType: "" | "task" | "todo" | "item";
  taskName: string;
  taskDescription?: string;
  taskCompletedBy: object;
  completed: boolean
}
