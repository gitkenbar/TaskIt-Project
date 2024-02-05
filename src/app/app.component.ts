import { Component, OnInit } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { TaskDBService } from './shared/task-db.service';
import { TaskItem } from './shared/taskItem.class';
import { HTTPService } from './shared/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TaskDBService, HTTPService]
})
export class AppComponent{
  title = 'TaskIt-Project';
  tasks: TaskItem[] = [];

  constructor(private taskDb: TaskDBService, private http: HTTPService){}

}
