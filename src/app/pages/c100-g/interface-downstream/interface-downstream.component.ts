import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-interface-downstream',
  templateUrl: './interface-downstream.component.html',
  styleUrls: ['../../../shared/styles/generalStyles.scss']
})
export class InterfaceDownstreamComponent implements OnInit {

  @Input() pos!: number;
  @Input() interface!: number;
  @Input() subinterface!: number;
  @Input() desc!: string;
  freqs: number[] = this.sharedSvc.getFrequencies();
  channels: number[] = [];

  constructor(private sharedSvc: SharedService) { }

  ngOnInit(): void {
    for(let i = 0; i < 80; i++){
      this.channels.push(i);
    }
  }

  addCommand(id: string, update: boolean, no: boolean, text: string){
    //interface quam
    if(id === 'ifQamUpdate'){
      if(update){
        this.sharedSvc.addCommand(`\ninterface qam ${this.interface}/${this.subinterface}`, this.pos);
      }else{
        for(let i = this.pos; i <= this.pos + 170; i++)
        this.sharedSvc.addCommand(``, i);
      }
    }
    //shutdown start
    if(id === 'shutStartUpdate'){
      let pos = this.pos + 1;
      if(update){
          this.sharedSvc.addCommand(` shutdown`, pos);
      }else{
        this.sharedSvc.addCommand(``, pos);
      }
    }
    //interleave
    if(id === 'interleaveUpdate'){
      let pos = this.pos + 2;
      let command = `interleave`
      if(update){
        this.sharedSvc.addCommand(` ${command} ${text}`, pos);
      }else{
        this.sharedSvc.addCommand(``, pos);
      }
    }
    //power
    if(id === 'powerUpdate'){
      let pos = this.pos + 3;
      let command = `power`
      if(update){
        this.sharedSvc.addCommand(` ${command} ${text}`, pos);
      }else{
        this.sharedSvc.addCommand(``, pos);
      }
    }
    //spectrum-tilt
    if(id === 'tiltUpdate'){
      let pos = this.pos + 4;
      let command = `spectrum-tilt`
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
    //shutdown odfm 0
    if(id === 'shutOdfm0Update'){
      let pos = this.pos + 590;
      if(update){
        if(!no){
          this.sharedSvc.addCommand(` ofdm-channel 0 shutdown`, pos);
        }else{
          this.sharedSvc.addCommand(` no ofdm-channel 0 shutdown`, pos);
        }
      }else{
        this.sharedSvc.addCommand(``, pos);
      }
    }
    //shutdown odfm 1
    if(id === 'shutOdfm1Update'){
      let pos = this.pos + 591;
      if(update){
        if(!no){
          this.sharedSvc.addCommand(` ofdm-channel 1 shutdown`, pos);
        }else{
          this.sharedSvc.addCommand(` no ofdm-channel 1 shutdown`, pos);
        }
      }else{
        this.sharedSvc.addCommand(``, pos);
      }
    }
    //shutdown End
    if(id === 'shutEndUpdate'){
      let pos = this.pos + 592;
      if(update){
          this.sharedSvc.addCommand(` no shutdown`, pos);
      }else{
        this.sharedSvc.addCommand(``, pos);
      }
    }
  }

  addChannelCommand(id: string, update: boolean, no: boolean, text: string, ch: number){
      //shutdown start
      if(id === 'shutStartChUpdate'){
        let pos = this.pos + 5 + ch * 4;
        if(update){
            this.sharedSvc.addCommand(` channel ${this.channels[ch]} shutdown`, pos);
        }else{
          this.sharedSvc.addCommand(``, pos);
        }
      }
    //description
    if(id === 'descUpdate'){
      let pos = this.pos + 6 + ch * 4;
      if(update){
        if(!no){
          this.sharedSvc.addCommand(` channel ${this.channels[ch]} description "${text}"`, pos);
        }else{
          this.sharedSvc.addCommand(` no channel ${this.channels[ch]} description`, pos);
        }
      }else{
        this.sharedSvc.addCommand(``, pos);
      }
    }
    //frequency
    if(id === 'freqUpdate'){
      let pos = this.pos + 7 + ch * 4;
      if(update){
        if(!no){
          this.sharedSvc.addCommand(` channel ${this.channels[ch]} frequency ${text}000000`, pos);
        }else{
          this.sharedSvc.addCommand(` no channel ${this.channels[ch]} frequency`, pos);
        }
      }else{
        this.sharedSvc.addCommand(``, pos);
      }
    }
    //shutdown End
    if(id === 'shutEndChUpdate'){
      let pos = this.pos + 8 + ch * 4;
      if(update){
        this.sharedSvc.addCommand(` no channel ${this.channels[ch]} shutdown  ${pos}`, pos);
      }else{
        this.sharedSvc.addCommand(``, pos);
      }
    }
  }


}
