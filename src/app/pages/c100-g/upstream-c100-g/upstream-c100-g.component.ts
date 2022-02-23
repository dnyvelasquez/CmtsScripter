import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-upstream-c100-g',
  templateUrl: './upstream-c100-g.component.html',
  styleUrls: ['../../../shared/styles/generalStyles.scss']
})
export class UpstreamC100GComponent implements OnInit {

  constructor(private sharedSvc: SharedService) { }

  @Input() interface!: number;
  @Input() subinterface!: number;
  @Input() slot!: number;
  @Input() pos!: number;
  @Input() up!: number;
  @Input() slts!: number;
  @Output() addUpstreamEvent = new EventEmitter<number>();


  ngOnInit(): void {
  }

  addUpstream(value: number){
    this.addUpstreamEvent.emit(value);
  }

  addCommand(update: boolean, no: boolean){
    if(update){
      if(!no){
        this.sharedSvc.addCommand(` upstream ${this.up} interface qam ${this.interface}/${this.subinterface}/${this.slot}`, this.pos);
      }else{
        this.sharedSvc.addCommand(` no upstream ${this.up}`, this.pos);
      }
    }else{
      this.sharedSvc.addCommand(``, this.pos);
    }
}

}
