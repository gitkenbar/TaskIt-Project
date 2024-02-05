import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HTTPService } from '../shared/http.service'
import { TaskDBService } from '../shared/task-db.service';
import { TaskItem } from '../shared/taskItem.class';

@Component({
  selector: 'app-task-new',
  templateUrl: './task-new.component.html',
  styleUrls: ['./task-new.component.css']
})
export class TaskNewComponent implements OnInit{
  taskDatabase: TaskItem[] = [];

  constructor(private TaskDB: TaskDBService, private Http: HTTPService){};

  ngOnInit(): void {
    // needs to check if result = null if so, don't set the [] to a null result

      this.taskDatabase = this.TaskDB.onFetchTasks();
  }


  formSubmit(taskForm: NgForm){
    /* console.log(taskForm.value)
    console.log('taskDatabase before formSubmit updates TaskDB  ' + this.TaskDB.taskDatabase); */
    this.TaskDB.taskDatabase.push(taskForm.value);
    /*
    console.log('after formSubmit updates TaskDB' + this.TaskDB.taskDatabase); */
    this.TaskDB.saveTasksToFirebase();
    taskForm.reset();
  };

  formCancel(taskForm: NgForm){
    taskForm.reset();
  };
}
