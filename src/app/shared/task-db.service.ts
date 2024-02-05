import { Injectable } from '@angular/core';
import { TaskItem} from './taskItem.class';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskDBService{

  taskDatabase: TaskItem[] = [];

  firebaseRootURL =
    "https://taskit-6ff91-default-rtdb.firebaseio.com/tasks.json";


  constructor(private http: HttpClient) {

  };

  setTasks(): TaskItem[] {
    this.taskDatabase = this.onFetchTasks()
    if(this.taskDatabase = null){this.taskDatabase = []}
    return
  };

  // *METHOD* - Save Tasks to Firebase DB

  saveTasksToFirebase() {
    //console.log('TaskDatabase before submit', this.taskDatabase);
    this.http.put(this.firebaseRootURL, this.taskDatabase).subscribe(res => {
      console.log("saveTasksToFirebase() Response:", res);
    });
    }

  // *METHOD* - Fetch tasks from Firebase DB

  onFetchTasks(): TaskItem[]{
    this.http
      .get(this.firebaseRootURL)
      .subscribe((res: TaskItem[]) => {
        this.taskDatabase = res;
      });
    return;
    }
}
