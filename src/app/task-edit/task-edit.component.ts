import { Component, OnInit } from '@angular/core';
import { TaskDBService } from '../shared/task-db.service';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.css']
})
export class TaskEditComponent implements OnInit{
  index: number;

  constructor(
    private TaskDB: TaskDBService,
    private route: ActivatedRoute){}


  ngOnInit() {
    this.index =
      this.route.snapshot.params['index']
  }

  formSubmit(taskForm: NgForm){
    /* console.log(taskForm.value)
    console.log('taskDatabase before formSubmit updates TaskDB  ' + this.TaskDB.taskDatabase); */
    this.TaskDB.taskDatabase.push(taskForm.value);/*
    console.log('after formSubmit updates TaskDB' + this.TaskDB.taskDatabase); */
    this.TaskDB.saveTasksToFirebase();
    taskForm.reset();
  };


  formCancel(taskForm: NgForm){
    taskForm.reset();
  };
}
