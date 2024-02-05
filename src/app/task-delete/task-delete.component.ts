import { AfterViewInit, Component, OnInit } from '@angular/core';
import { TaskDBService } from '../shared/task-db.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-task-delete',
  templateUrl: './task-delete.component.html',
  styleUrls: ['./task-delete.component.css']
})
export class TaskDeleteComponent implements OnInit, AfterViewInit{
  index:number =
    this.route.snapshot.params['index'];
  taskName: string;

  constructor(
    private TaskDB: TaskDBService,
    private route: ActivatedRoute){}

  delete(index:number) {
    this.TaskDB.taskDatabase.splice(index, 1);
    this.TaskDB.saveTasksToFirebase();
  }

  ngOnInit() {
    this.TaskDB.onFetchTasks();
    this.index =
     this.route.snapshot.params['index'];

    console.log("index:", this.index);
    console.log(
      "grab the database: ",
      this.TaskDB.taskDatabase);
    console.log(
      "grab the object from database: ",
      this.TaskDB.taskDatabase.at(this.index));
    console.log(
      "grab the title from dynamic index with .at(): ",
      this.TaskDB.taskDatabase.at(this.index).title);
    console.log(
      "grab the title from index [0]: ",
      this.TaskDB.taskDatabase[0].title);
    console.log("taskName:", this.taskName);
  }
  ngAfterViewInit(){
    this.taskName =
      this.TaskDB.taskDatabase[this.index].title;
  }
}
