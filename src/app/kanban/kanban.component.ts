import { Component, OnInit } from '@angular/core';
import { TaskDBService } from '../shared/task-db.service';

@Component({
  selector: 'app-kanban',
  templateUrl: './kanban.component.html',
  styleUrls: ['./kanban.component.css']
})
export class KanbanComponent implements OnInit{
  constructor(public TaskDB: TaskDBService){}

  ngOnInit(){
    this.TaskDB.setTasks()
  }
}
