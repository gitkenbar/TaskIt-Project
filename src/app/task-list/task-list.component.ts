import { Component } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {

}

export class TaskItem {
  constructor(public Title: string, public dueDate: string, public Priority: string, public Status: string){}
}

export const myTasks = [
  new TaskItem(
    'Take Out Trash',
    'Thursday',
    'High',
    'In-Progress'
  )
];
