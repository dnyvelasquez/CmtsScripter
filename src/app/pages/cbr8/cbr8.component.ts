import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/services/shared.service';
import { Cbr8Service } from '../../services/cbr8.service';

@Component({
  selector: 'app-cbr8',
  templateUrl: './cbr8.component.html',
  styleUrls: ['../../shared/styles/generalStyles.scss']
})
export class CBR8Component implements OnInit {

  constructor(private cbr8Svc: Cbr8Service, private sharedSvc: SharedService) { }

  ngOnInit(): void {
  }

  interFaces: string[] = ['1', '2', '3', '6', '7', '8', '9'];
  slots: string[] = ['0', '1', '2', '3', '4', '5', '6', '7'];
  downStreams: number[] = [100];
  posBgs: number[] = [600];
  upStreams!: string[];
  panelOpenStateAtt = false;
  panelOpenStateWide = false;
  panelOpenStateDown = false;
  panelOpenStateUpA = false;
  panelOpenStateUpB = false;
  interF: any = '';
  slt: any = '';
  
  inputPowerAdjust(upstream: string, value: string){
    let us = parseInt(upstream);
    this.sharedSvc.addCommand(' cable upstream ' + us + ' power-adjust continue ' +  value, 400 + us);
  }

  powerAdjust(isChecked: boolean){
    if(isChecked){
      this.upStreams = this.cbr8Svc.getPowerAdjust();      
    }
  }

  reload(){
    window.location.reload();
  }

  newTemplate(){

  }

  subDownStream(){
    this.downStreams.pop();
  }

  addDownStream(down: number){
    this.downStreams.push(down);
  }
  addBg(pos: number){
    this.posBgs.push(pos);
  }

  subBg(){
    this.posBgs.pop();
  }

  makeRfChannels(start: string, end: string): string{
    if(end === ''){
      return start;
    }else{
      return start + '-' + end;
    }
    
  }

  addInterfaceCommand(update: boolean){
    let pos = 0;
    if(update){
      this.sharedSvc.addCommand(`interface Cable  ${this.interF} '/0/' ${this.slt}`, pos);
    }else{
      this.sharedSvc.addCommand('', pos);
    }
  }

  addShutStartCommand(update: boolean){
    let pos = 1;
    if(update){
      this.sharedSvc.addCommand(` shutdown`, pos);
    }else{
      this.sharedSvc.addCommand(``, pos);
    }
  }

  addDescCommand(update: boolean, text: string, no: boolean){
    let pos = 2;
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

  addLoadCommand(update: boolean, text: string){
    let pos = 3;
    if(update){
      this.sharedSvc.addCommand(` load interval ${text}`, pos);
    }else{
      this.sharedSvc.addCommand(``, pos);
    }
  }

  addDownStreamCommand(update: boolean, text: string, no: boolean, pos: number){
    let command = 'downstream Integrated-Cable';
    if(update){
      if(!no){
        this.sharedSvc.addCommand(` ${command} ${this.interF}/0/${this.slt} rf-channel ${text}`, pos);
      }else{
        this.sharedSvc.addCommand(` no ${command} ${this.interF}/0/${this.slt} rf-channel ${text}`, pos);
      }
    }else{
      this.sharedSvc.addCommand(``, pos);
    }
  }

  addBalanceCommand(update: boolean, no: boolean){
    let pos = 500;
    let command = 'cable upstream balance-scheduling';
    if(update){
      if(!no){
        this.sharedSvc.addCommand(` ${command}`, pos);
      }else{
        this.sharedSvc.addCommand(` no ${command}`, pos);
      }
    }else{
      this.sharedSvc.addCommand(``, pos);
    }
  }

  addBundleCommand(update: boolean, text: string, no: boolean){
    let pos = 900;
    let command = 'bundle';
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

  addDynamicCommand(update: boolean, text: string, no: boolean){
    let pos = 901;
    let command = 'cable dynamic-secret';
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

  addTrapCommand(update: boolean, text: string, no: boolean){
    let pos = 902;
    let command = 'cable enable-trap';
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

  addTrapiCommand(update: boolean, text: string, no: boolean){
    let pos = 903;
    let command = 'cable enable-trap cmonoff-interval';
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

  addTimeoutCommand(update: boolean, text: string, no: boolean){
    let pos = 904;
    let command = 'cable registration-timeout';
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

  addMandatoryCommand(update: boolean, no: boolean){
    let pos = 905;
    let command = 'cable privacy mandatory';
    if(update){
      if(!no){
        this.sharedSvc.addCommand(` ${command}`, pos);
      }else{
        this.sharedSvc.addCommand(` no ${command}`, pos);
      }
    }else{
      this.sharedSvc.addCommand(``, pos);
    }
  }

  addBpiCommand(update: boolean, text: string, no: boolean){
    let pos = 906;
    let command = 'cable privacy bpi-plus-policy';
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

  addHoldInCommand(update: boolean, text: string, no: boolean){
    let pos = 907;
    let command = 'hold-queue';
    if(update){
      if(!no){
        this.sharedSvc.addCommand(` ${command} ${text} in`, pos);
      }else{
        this.sharedSvc.addCommand(` no ${command} in`, pos);
      }
    }else{
      this.sharedSvc.addCommand(``, pos);
    }
  }

  addHoldOutCommand(update: boolean, text: string, no: boolean){
    let pos = 908;
    let command = 'hold-queue';
    if(update){
      if(!no){
        this.sharedSvc.addCommand(` ${command} ${text} out`, pos);
      }else{
        this.sharedSvc.addCommand(` no ${command} out`, pos);
      }
    }else{
      this.sharedSvc.addCommand(``, pos);
    }
  }

  addShutEndCommand(update: boolean){
    let pos = 909;
    if(update){
      this.sharedSvc.addCommand(` no shutdown`, pos);
    }else{
      this.sharedSvc.addCommand(``, pos);
    }
  }
}


