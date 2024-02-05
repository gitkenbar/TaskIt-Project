import { Component, OnInit} from '@angular/core';
import { TaskDBService } from '../shared/task-db.service';
import { HTTPService } from '../shared/http.service';
import { TaskItem } from '../shared/taskItem.class';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
  providers: [TaskDBService, HTTPService]
})

export class TaskListComponent implements OnInit{
  taskDatabase: TaskItem[] = [];

  constructor(
    public TaskDB: TaskDBService,
    private http: HTTPService
    ){};

  ngOnInit() {
    this.taskDatabase = this.TaskDB.setTasks();
  };

  editItem(index: number) {

  }
}





