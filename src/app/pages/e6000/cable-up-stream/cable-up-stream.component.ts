import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-cable-up-stream',
  templateUrl: './cable-up-stream.component.html',
  styleUrls: ['../../../shared/styles/generalStyles.scss']
})
export class CableUpStreamComponent implements OnInit {

  @Input() mac!: string;
  @Input() desc!: string;
  @Input() pos!: number;
  @Input() supervision: string = '';
  @Input() sec!: string;
  @Output() upstreamEvent = new EventEmitter<string>();
  panelOpenState = false
  interFaces: number[] = [1, 2, 3, 4];
  subInterFaces: number[] = [0, 1, 2, 3, 4, 5, 6, 7];
  slots: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  interFace!: string;
  subInterFace!: string;
  slts: number[] = [];

  constructor(private sharedSvc: SharedService) { }

  ngOnInit(): void {
  }

  getSlts(start: string, end: string){
    for(let i = 0; i <= (parseInt(end) - parseInt(start)); i++){
      this.slts.push(parseInt(start) + i);
    }
  }

  outputUpstream(value: string){
    this.upstreamEvent.emit(value);
  }

  addInterfaceCommand(update: boolean, slt: number, i: number){
    let pos =  this.pos + 1 + i * 20;
    if(update){
      this.sharedSvc.addCommand(`\ninterface cable-upstream ${this.interFace}/${this.subInterFace}/${slt}`, pos);
    }else{
      this.sharedSvc.addCommand(``, pos);
    }
  }

  addShutStartCommand(update: boolean, i: number){
    let pos = this.pos + 2 + i * 20;
    if(update){
      this.sharedSvc.addCommand(` cable shutdown`, pos);
    }else{
      this.sharedSvc.addCommand(``, pos);
    }
  }

  addDescCommand(update: boolean, i: number, text: string, no: boolean){
    let pos = this.pos + 3 + i * 20;
    let command = 'description';
    if(update){
      if(!no){
        this.sharedSvc.addCommand(` ${command} "${text}"`, pos);
      }else{
        this.sharedSvc.addCommand(` no ${command}`, pos);
      }
    }else{
      this.sharedSvc.addCommand(``, pos);
    }
  }

  addMacCommand(update: boolean, i: number, no: boolean){
    let pos = this.pos + 4 + i * 20;
    let command = 'cable cable-mac';
    if(update){
      if(!no){
        this.sharedSvc.addCommand(` ${command} ${this.mac}`, pos);
      }else{
        this.sharedSvc.addCommand(` no ${command} ${this.mac}`, pos);
      }     
    }else{
      this.sharedSvc.addCommand(``, pos);
    }
  }

  addIngressCommand(update: boolean, i: number, text: string, no: boolean){
    let pos = this.pos + 5 + i * 20;
    let command = 'cable ingress-cancellation interval';
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

  addChannelCommand(update: boolean, i: number, text: string, no: boolean){
    let pos = this.pos + 6 + i * 20;
    let command = 'cable channel-width';
    if(update){
      if(!no){
        this.sharedSvc.addCommand(` ${command} ${text}00000`, pos);
      }else{
        this.sharedSvc.addCommand(` no ${command}`, pos);
      }
    }else{
      this.sharedSvc.addCommand(``, pos);
    }
  }

  addFreqCommand(update: boolean, i: number, text: string, no: boolean){
    let pos = this.pos + 7 + i * 20;
    let command = 'cable frequency';
    if(update){
      if(!no){
        this.sharedSvc.addCommand(` ${command} ${text}00000`, pos);
      }else{
        this.sharedSvc.addCommand(` ${command} 0`, pos);
      }
    }else{
      this.sharedSvc.addCommand(``, pos);
    }
  }

  addSuperCommand(update: boolean, i: number, no: boolean){
    let pos = this.pos + 8 + i * 20;
    let command = 'cable supervision';
    if(update){
      if(!no){
        this.sharedSvc.addCommand(` ${command} ${this.supervision}`, pos);
      }else{
        this.sharedSvc.addCommand(` no ${command} ${this.supervision}`, pos);
      }
    }else{
      this.sharedSvc.addCommand(``, pos);
    }
  }

  addConnectorCommand(update: boolean, i: number, text: string, no: boolean){
    let pos = this.pos + 9 + i * 20;
    let command = 'cable connector';
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

  addIdCommand(update: boolean, i: number, text: string){
    let pos = this.pos + 10 + i * 20;
    if(update){
      this.sharedSvc.addCommand(` cable channel-id ${text}`, pos);
    }else{
      this.sharedSvc.addCommand(``, pos);
    }
  }

  addPreEqCommand(update: boolean, i: number, text: string){
    let pos = this.pos + 11 + i * 20;
    if(update){
      this.sharedSvc.addCommand(` cable pre-eq-enable ${text}`, pos);
    }else{
      this.sharedSvc.addCommand(``, pos);
    }
  }

  addModCommand(update: boolean, i: number, text: string, no: boolean){
    let pos = this.pos + 12 + i * 20;
    let command = 'cable modulation-profile';
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

  addDocsisCommand(update: boolean, i: number, text: string, no: boolean){
    let pos = this.pos + 13 + i * 20;
    let command = 'cable docsis-mode';
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

  addRangeCommand(update: boolean, i: number, text: string, no: boolean){
    let pos = this.pos + 14 + i * 20;
    let command = 'cable rangebackoff';
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

  addSpectrumCommand(update: boolean, i: number, text: string, no: boolean){
    let pos = this.pos + 15 + i * 20;
    let command = 'cable spectrum-group';
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

  addShutEndCommand(update: boolean, i: number){
    let pos = this.pos + 16 + i * 20;
    if(update){
      this.sharedSvc.addCommand(` no cable shutdown`, pos);
    }else{
      this.sharedSvc.addCommand(``, pos);
    }
  }

}
