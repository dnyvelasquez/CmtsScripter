import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-us-channel',
  templateUrl: './us-channel.component.html',
  styleUrls: ['../../../shared/styles/generalStyles.scss']
})
export class UsChannelComponent implements OnInit {

  @Input() usCh!: string;
  @Input() pos!: number;
  @Input() checked!: boolean;
  @Input() description!: string;

  constructor(private sharedSvc: SharedService) { }

  ngOnInit(): void {
  }

  addShutStartCommand(update: boolean){
    let pos = this.pos;
    if(update){
      this.sharedSvc.addCommand(` us-channel ${this.usCh} shutdown`, pos);
    }else{
      this.sharedSvc.addCommand(``, pos);
    }
  }

  addFreqCommand(update: boolean, text: string, no: boolean){
    let pos = this.pos + 1;
    if(update){
      if(!no){
        this.sharedSvc.addCommand(` us-channel ${this.usCh} frequency ${text}00000`, pos);
      }else{
        this.sharedSvc.addCommand(` no us-channel ${this.usCh} frequency`, pos);
      }
    }else{
      this.sharedSvc.addCommand(``, pos);
    }
  }

  addWidthCommand(update: boolean, chA: string, chB: string){
    let pos = this.pos + 2;
    if(update){
      this.sharedSvc.addCommand(` us-channel ${this.usCh} channel-width ${chA}00000 ${chB}00000`, pos);
    }else{
      this.sharedSvc.addCommand(``, pos);
    }
  }

  addSnrCommand(update: boolean, text: string, no: boolean){
    let pos = this.pos + 3;
    let command = 'threshold snr-profiles';
    if(update){
      if(!no){
        this.sharedSvc.addCommand(` us-channel ${this.usCh} ${command} ${text}`, pos);
      }else{
        this.sharedSvc.addCommand(` no us-channel ${this.usCh} ${command}`, pos);
      }
    }else{
      this.sharedSvc.addCommand(``, pos);
    }
  }

  addCorrCommand(update: boolean, text: string, no: boolean){
    let pos = this.pos + 4;
    let command = 'threshold corr-fec';
    if(update){
      if(!no){
        this.sharedSvc.addCommand(` us-channel ${this.usCh} ${command} ${text}`, pos);
      }else{
        this.sharedSvc.addCommand(` no us-channel ${this.usCh} ${command}`, pos);
      }
    }else{
      this.sharedSvc.addCommand(``, pos);
    }
  }

  addHystCommand(update: boolean, text: string, no: boolean){
    let pos = this.pos + 5;
    let command = 'threshold hysteresis';
    if(update){
      if(!no){
        this.sharedSvc.addCommand(` us-channel ${this.usCh} ${command} ${text}`, pos);
      }else{
        this.sharedSvc.addCommand(` no us-channel ${this.usCh} ${command}`, pos);
      }
    }else{
      this.sharedSvc.addCommand(``, pos);
    }
  }

  addDescCommand(update: boolean, text: string, no: boolean){
    let pos = this.pos + 6;
    let command = 'description';
    if(update){
      if(!no){
        this.sharedSvc.addCommand(` us-channel ${this.usCh} ${command} ${text}`, pos);
      }else{
        this.sharedSvc.addCommand(` no us-channel ${this.usCh} ${command}`, pos);
      }
    }else{
      this.sharedSvc.addCommand(``, pos);
    }
  }

  addDocsisCommand(update: boolean, text: string){
    let pos = this.pos + 7;
    let command = 'docsis-mode';
    if(update){
      this.sharedSvc.addCommand(` us-channel ${this.usCh} ${command} ${text}`, pos);
    }else{
      this.sharedSvc.addCommand(``, pos);
    }
  }

  addMiniCommand(update: boolean, text: string){
    let pos = this.pos + 8;
    let command = 'minislot-size';
    if(update){
      this.sharedSvc.addCommand(` us-channel ${this.usCh} ${command} ${text}`, pos);
    }else{
      this.sharedSvc.addCommand(``, pos);
    }
  }

  addModCommand(update: boolean, text: string){
    let pos = this.pos + 9;
    let command = 'modulation-profile';
    if(update){
      this.sharedSvc.addCommand(` us-channel ${this.usCh} ${command} ${text}`, pos);
    }else{
      this.sharedSvc.addCommand(``, pos);
    }
  }

  addEqualCommand(update: boolean, no: boolean){
    let pos = this.pos + 10;
    let command = 'equalization-coefficient';
    if(update){
      if(!no){
        this.sharedSvc.addCommand(` us-channel ${this.usCh} ${command}`, pos);
      }else{
        this.sharedSvc.addCommand(` no us-channel ${this.usCh} ${command}`, pos);
      }
    }else{
      this.sharedSvc.addCommand(``, pos);
    }
  }

  addShutEndCommand(update: boolean){
    let pos = this.pos + 11;
    if(update){
      this.sharedSvc.addCommand(` no us-channel ${this.usCh} shutdown`, pos);
    }else{
      this.sharedSvc.addCommand(``, pos);
    }
  }

}
