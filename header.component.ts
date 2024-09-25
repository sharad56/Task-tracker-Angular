import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  ProjectName ="Task-Tracker-app"
  showAddTask:boolean=false;
  subscription!:Subscription;

  constructor(private uiService:UiService){
    this.subscription=this.uiService.onToggle().subscribe(value=>this.showAddTask=value)
  }
  ToggleAddTask(){
    this.uiService.toggleAddTask();
  }
}

