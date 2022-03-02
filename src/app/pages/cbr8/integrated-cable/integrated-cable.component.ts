import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/services/shared.service';


@Component({
  selector: 'app-integrated-cable',
  templateUrl: './integrated-cable.component.html',
  styleUrls: ['../../../shared/styles/generalStyles.scss']
})
export class IntegratedCableComponent implements OnInit {

  @Input() interF!: string;
  @Input() slt!: string;
  @Input() description!: string;
  @Input() pos!: number;

  constructor(private sharedSvc: SharedService) { }

  ngOnInit(): void {
  }

  inputNoRfChn(pos: number){
    for(let i = 0; i < 10; i++){
      this.sharedSvc.addCommand('', pos+i);
    }
  }

  addInterfaceCommand(update: boolean){
    let pos = this.pos;
    if(update){
      this.sharedSvc.addCommand(`\ncontroller Integrated-Cable ${this.interF}/0/${this.slt}`, pos);
    }else{
      this.sharedSvc.addCommand('', pos);
    }
  }

  addShutStartCommand(update: boolean){
    let pos = this.pos + 1;
    if(update){
      this.sharedSvc.addCommand(` shutdown`, pos);
    }else{
      this.sharedSvc.addCommand('', pos);
    }
  }

  addCarrierCommand(update: boolean, text: string){
    let pos = this.pos + 2;
    if(update){
      this.sharedSvc.addCommand(` max-carrier ${text}`, pos);
    }else{
      this.sharedSvc.addCommand('', pos);
    }
  }

  addBaseCommand(update: boolean, text: string){
    let pos = this.pos + 3;
    if(update){
      this.sharedSvc.addCommand(` base-channel-power ${text}`, pos);
    }else{
      this.sharedSvc.addCommand('', pos);
    }
  }

  addDescCommand(update: boolean, text: string, no: boolean){
    let pos = this.pos + 90;
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

  addShutEndCommand(update: boolean){
    let pos = this.pos + 91;
    if(update){
      this.sharedSvc.addCommand(` no shutdown`, pos);
    }else{
      this.sharedSvc.addCommand('', pos);
    }
  }


}
