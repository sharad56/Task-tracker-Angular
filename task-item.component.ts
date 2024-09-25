import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TASKS } from 'src/app/mock-tasks';
import { Task } from 'src/app/Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent {
  @Input() task:Task={text:'',day:'',reminder:false};
  @Input() faTimes =faTimes;
  @Output() onDeleteTask:EventEmitter<Task>=new EventEmitter();
  @Output() onToggleReminder:EventEmitter<Task>=new EventEmitter();


  onDelete(task:Task){
  this.onDeleteTask.emit(this.task);

  }
  onToggleTask(task:Task){

    this.onToggleReminder.emit(this.task);
  }
}
 