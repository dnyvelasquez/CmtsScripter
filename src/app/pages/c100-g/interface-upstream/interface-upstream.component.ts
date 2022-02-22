import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-interface-upstream',
  templateUrl: './interface-upstream.component.html',
  styleUrls: ['../../../shared/styles/generalStyles.scss']
})
export class InterfaceUpstreamComponent implements OnInit {

  @Input() pos!: number;
  @Input() interface!: number;
  @Input() subinterface!: number;
  @Input() slot!: number;
  @Input() desc!: string;

  constructor(private sharedSvc: SharedService) { }

  ngOnInit(): void {
  }


  addCommand(id: string, update: boolean, no: boolean, text: string){
    //interface upstream
    if(id === 'ifUpdate'){
      if(update){
        this.sharedSvc.addCommand(`\ninterface upstream ${this.interface}/${this.subinterface}.${this.slot}`, this.pos);
      }else{
        for(let i = this.pos; i <= this.pos + 20; i++)
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
    //description
    if(id === 'descUpdate'){
      let pos = this.pos + 2;
      let command = `description`
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
    //spectrum-rule
    if(id === 'spectrumUpdate'){
      let pos = this.pos + 3;
      let command = `spectrum-rule`
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
    //frequency
    if(id === 'freqUpdate'){
      let pos = this.pos + 4;
      let command = `frequency`
      if(update){
          this.sharedSvc.addCommand(` ${command} ${text}00000`, pos);
      }else{
        this.sharedSvc.addCommand(``, pos);
      }
    }
    //channel-width
    if(id === 'channelUpdate'){
      let pos = this.pos + 5;
      let command = `channel-width`
      if(update){
          this.sharedSvc.addCommand(` ${command} ${text}000000`, pos);
      }else{
        this.sharedSvc.addCommand(``, pos);
      }
    }
    //map-advance dynamic
    if(id === 'mapUpdate'){
      let pos = this.pos + 6;
      let command = `map-advance dynamic`
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
    //ingress-cancellation
    if(id === 'ingressUpdate'){
      let pos = this.pos + 7;
      let command = `ingress-cancellation`
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
    //logical-channel 0 shutdown start
    if(id === 'shut0StartUpdate'){
      let pos = this.pos + 8;
      if(update){
        if(!no){
          this.sharedSvc.addCommand(` logical-channel 0 shutdown`, pos);
        }
      }else{
        this.sharedSvc.addCommand(``, pos);
      }
    }
    //logical-channel 0 description
    if(id === 'desc0Update'){
      let pos = this.pos + 9;
      let command = `logical-channel 0 description`
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
    //logical-channel 0 profile
    if(id === 'profile0Update'){
      let pos = this.pos + 10;
      let command = `logical-channel 0 profile`
      if(update){
        this.sharedSvc.addCommand(` ${command} ${text}`, pos);
      }else{
        this.sharedSvc.addCommand(``, pos);
      }
    }
    //logical-channel 0 minislot
    if(id === 'minislot0Update'){
      let pos = this.pos + 11;
      let command = `logical-channel 0 minislot`
      if(update){
        this.sharedSvc.addCommand(` ${command} ${text}`, pos);
      }else{
        this.sharedSvc.addCommand(``, pos);
      }
    }
    //logical-channel 0 ranging-backoff
    if(id === 'ranging0Update'){
      let pos = this.pos + 12;
      let command = `logical-channel 0 ranging-backoff`
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
    //logical-channel 0 ranging-backoff
    if(id === 'pre0Update'){
      let pos = this.pos + 13;
      let command = `logical-channel 0 pre-equalization`
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
    //logical-channel 0 shutdown end
    if(id === 'shut0EndUpdate'){
      let pos = this.pos + 14;
      if(update){
          this.sharedSvc.addCommand(` no logical-channel 0 shutdown`, pos);
      }else{
        this.sharedSvc.addCommand(``, pos);
      }
    }
    //shutdown end
    if(id === 'shutEndUpdate'){
      let pos = this.pos + 15;
      if(update){
          this.sharedSvc.addCommand(` no shutdown`, pos);
      }else{
        this.sharedSvc.addCommand(``, pos);
      }
    }
  }


}
