import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-wide-band',
  templateUrl: './wide-band.component.html',
  styleUrls: ['../../../shared/styles/generalStyles.scss']
})
export class WideBandComponent implements OnInit {

  @Input() interF!: string;
  @Input() slt!: string;
  @Input() description!: string;
  @Input() pos!: number;
  rfStart!: string;
  rfEnd!: string;

  constructor(private sharedSvc: SharedService) { }

  ngOnInit(): void {
  }

  addWideBandCommand(update: boolean, text: string, no: boolean){
    let pos = this.pos;
    if(update){
      if(!no){
        this.sharedSvc.addCommand(`\ninterface Wideband-Cable ${this.interF}/0/${this.slt}:${text}`, pos);
      }else{
        this.sharedSvc.addCommand(`\nno interface Wideband-Cable ${this.interF}/0/${this.slt}:${text}`, pos);
      }
    }else{
      this.sharedSvc.addCommand(``, pos);
    }
  }

  addDescCommand(update: boolean, text: string, no: boolean){
    let pos = this.pos + 1;
    let command = 'description';
    if(update){
      if(!no){
        this.sharedSvc.addCommand(` ${command} ${text}`, pos);
      }else{
        this.sharedSvc.addCommand(` no ${command}`, pos);
      }
    }else{
      this.sharedSvc.addCommand(``, pos);
    }
  }

  addBundleCommand(update: boolean, text: string, no: boolean){
    let pos = this.pos + 2;
    let command = 'cable bundle';
    if(update){
      if(!no){
        this.sharedSvc.addCommand(` ${command} ${text}`, pos);
      }else{
        this.sharedSvc.addCommand(` no ${command} ${text}`, pos);
      }
    }else{
      this.sharedSvc.addCommand(``, pos);
    }
  }

  addRfChannelsCommand(update: boolean, text: string, no: boolean){
    let pos = this.pos + 3;
    if(update){
      if(!no){
        this.sharedSvc.addCommand(` cable rf-channels channel-list ${this.rfStart}-${this.rfEnd} bandwidth-percent ${text}`, pos);
      }else{
        this.sharedSvc.addCommand(` no cable rf-channels channel-list ${this.rfStart}-${this.rfEnd}`, pos);
      }
    }else{
      this.sharedSvc.addCommand(``, pos);
    }
  }
}
