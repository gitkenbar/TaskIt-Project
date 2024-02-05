export class TaskItem {
  constructor(
    public title: string,
    public taskDueDate: string,
    public taskPriority: string,
    public taskStatus: string,
    public taskDescription?: string){}
}
