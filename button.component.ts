import { Component, Input,Output,EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() text: string='';
  @Input() color:string='';
  @Output() btnClick=new EventEmitter (); 


  Clickme(){
    this.btnClick.emit();
  }

}
