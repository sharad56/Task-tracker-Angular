import { Component } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/Task';
//import { TASKS  } from 'src/app/mock-tasks';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent {
  tasks: Task[] = [];
  constructor(private TaskService: TaskService) { }
  ngOnInit(): void {
    this.TaskService.getTasks().subscribe(tasks => {
      return this.tasks = tasks;
    });
  }
  deleteTask(task: Task) {
    this.TaskService.deleteTask(task).subscribe(() => this.tasks = this.tasks.filter((t) => t.id != task.id));
  }
  addTask(task:Task){
    this.TaskService.addTask(task).subscribe(task=>this.tasks.push(task));
  } 
  toggleReminder(task:Task){
    task.reminder=!task.reminder;
    console.log(task.reminder);
    this.TaskService.updateTaskReminder(task).subscribe();
  }  
}
