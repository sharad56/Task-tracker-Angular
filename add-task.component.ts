import { Component, EventEmitter, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { Task } from 'src/app/Task';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent {
text:string=''
day:string='';
reminder:boolean=false
@Output() onAddTask:EventEmitter<Task>=new EventEmitter();
showAddTask:boolean=false;
subscription!:Subscription;
constructor(private uiService:UiService){
  this.subscription=this.uiService.onToggle().subscribe(value=>this.showAddTask=value)
}

onSubmit(){
if(!this.text){
  alert('please add ask');
  return;
}

const newTask={
  text:this.text,
  day:this.day,
  reminder:this.reminder
}
this.onAddTask.emit(newTask);
this.text='';
this.day='';
this.reminder=false;
}
}
