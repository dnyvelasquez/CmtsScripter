import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-rf-chan',
  templateUrl: './rf-chan.component.html',
  styleUrls: ['../../../shared/styles/generalStyles.scss']
})
export class RfChanComponent implements OnInit {

  @Input() checked!: boolean;
  @Input() pos!: number;
  freqs!: number[];
  showFreqs: boolean = false;
  frequency: any = '';

  constructor(private sharedSvc: SharedService) { }

  ngOnInit(): void {
    this.freqs = this.sharedSvc.getFrequencies();
  }

  inputChannel(channelChange: boolean, channelText: string){
    if(channelChange){
      this.sharedSvc.addCommand('  docsis-channel-id ' + channelText, this.pos + 6);
    }else{
      this.sharedSvc.addCommand('', this.pos + 6);
    }
  }

  inputNoRfChn(pos: number){
    for(let i = 0; i < 10; i++){
      this.sharedSvc.addCommand('', pos+i);
    }
  }

  addRfChannelCommand(update: boolean, text: string, no: boolean){
    let pos = this.pos;
    let command = 'rf-chan';
    if(update){
      if(!no){
        this.sharedSvc.addCommand(`  ${command} ${text}`, pos);
      }else{
        this.sharedSvc.addCommand(`  no ${command} ${text}`, pos);
      }
    }else{
      this.sharedSvc.addCommand(``, pos);
    }
  }

  addTypeCommand(update: boolean, text: string){
    let pos = this.pos + 1;
    if(update){
        this.sharedSvc.addCommand(`  type ${text}`, pos);
    }else{
      this.sharedSvc.addCommand(``, pos);
    }
  }

  addFreqCommand(update: boolean, text: string, no: boolean){
    let pos = this.pos + 2;
    if(update){
      if(!no){
        this.sharedSvc.addCommand(`  frequency ${text}000000`, pos);
      }else{
        this.sharedSvc.addCommand(`  no frequency`, pos);
      }
    }else{
      this.sharedSvc.addCommand(``, pos);
    }
  }

  addOutputCommand(update: boolean, text: string){
    let pos = this.pos + 3;
    if(update){
        this.sharedSvc.addCommand(`  rf-output ${text}`, pos);
    }else{
      this.sharedSvc.addCommand(``, pos);
    }
  }

  addPowerCommand(update: boolean, text: string){
    let pos = this.pos + 4;
    if(update){
        this.sharedSvc.addCommand(`  power-adjust ${text}`, pos);
    }else{
      this.sharedSvc.addCommand(``, pos);
    }
  }

  addQamCommand(update: boolean, text: string){
    let pos = this.pos + 5;
    if(update){
        this.sharedSvc.addCommand(`  qam-profile ${text}`, pos);
    }else{
      this.sharedSvc.addCommand(``, pos);
    }
  }

  addIdCommand(update: boolean, text: string){
    let pos = this.pos + 6;
    if(update){
        this.sharedSvc.addCommand(`  docsis-channel-id ${text}`, pos);
    }else{
      this.sharedSvc.addCommand(``, pos);
    }
  }

}
