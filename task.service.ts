import { Injectable } from '@angular/core';
import { Task } from '../Task';
//import { TASKS } from '../mock-tasks';
import { Observable,of } from 'rxjs';
import {HttpClient, HttpHeaderResponse, HttpHeaders} from '@angular/common/http';

const httpOption ={
  headers:new HttpHeaders({
    'content-type':'application/json'
  })
}
 
@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiurl ='http://localhost:5000/tasks';
  constructor(private http:HttpClient) { }

  


  getTasks():Observable <Task[]>{
    //const tasks=of(TASKS);
    return this.http.get<Task[]>(this.apiurl);
  }
  deleteTask(task:Task):Observable<Task> {
    const Url = `${this.apiurl}/${task.id}`;
    return this.http.delete<Task>(Url);
  }
  addTask(task:Task):Observable<Task>{
    return this.http.post<Task>(this.apiurl,task,httpOption);
  }

  updateTaskReminder(task:Task):Observable<Task>{
    const url='${this.apiurl}/${task.id}';
    return this.http.put<Task>(url,task,httpOption);
  }
}
