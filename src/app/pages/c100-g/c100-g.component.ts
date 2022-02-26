import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-c100-g',
  templateUrl: './c100-g.component.html',
  styleUrls: ['../../shared/styles/generalStyles.scss']
})
export class C100GComponent implements OnInit {

  mac: string = '';
  desc: string = '';
  panelOpenStateAtt = false
  panelOpenStateUsA = false
  panelOpenStateUsB = false
  panelOpenStateDs = false
  panelOpenStateUpA = false
  panelOpenStateUpB = false
  panelOpenStateDown = false
  panelOpenStateServiceA = false
  panelOpenStateServiceB = false
  ifUpstreams: number[] = [13, 12, 11, 10, 9];
  sifUpstreams: number[] = [];
  interfaceUp!: number;
  sifAUp!: number;
  sifBUp!: number;
  upstreamsA: number[] = [0, 1, 2, 3];
  upstreamsB: number[] = [0, 1, 2, 3];
  ifDownstreams: number[] = [0, 1, 2, 3, 4];
  sifDownstreams: number[] = [0, 1, 2, 3, 4, 5, 6, 7];
  chDownstreams: number[] = [];
  channels: number[] = [];
  chDownEnd!: number;
  interfaceDown!: number;
  sifDown!: number;
  slotDown!: number;
  downstreams: number[] = [];
  upA: string = '';
  upB: string = '';

  constructor(private sharedSvc: SharedService) { }

  ngOnInit(): void {
    for(let i = 0; i <= 47; i ++){
      this.chDownstreams.push(i);
    }
    for(let i = 0; i <= 15; i ++){
      this.sifUpstreams.push(i);
    }
    for(let i = 0; i < 54; i++){
      this.channels.push(i);
    }
  }

  parse_Int(value: string): number{
    return parseInt(value);
  }

  addUpstreamA(value: number){
    this.upstreamsA.push(value);
  }

  addUpstreamB(value: number){
    this.upstreamsB.push(value);
  }

  makeDownstreams(){
    for(let i = 0; i <= this.chDownEnd; i++){
      this.downstreams[i] = i + 1;
    }
  }

  addCommand(id: string, update: boolean, no: boolean, text: string){
    //interface docsis-mac
    if(id === 'interFaceUpdate'){
      if(update){
        this.sharedSvc.addCommand(`interface docsis-mac ${this.mac}`, 0);
      }else{
        this.sharedSvc.addCommand(``, 0);
      }
    }
    //cable shutdown start
    if(id === 'shutStartUpdate'){
      let pos = 1;
      if(update){
        this.sharedSvc.addCommand(` cable shutdown`, pos);
      }else{
        this.sharedSvc.addCommand(``, pos);
      }
    }
    //description
    if(id === 'descUpdate'){
      let pos = 2;
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
    //initial-tech
    if(id === 'initialUpdate'){
      let pos = 3;
      let command = `initial-tech`
      if(update){
        this.sharedSvc.addCommand(` ${command} ${text}`, pos);
      }else{
        this.sharedSvc.addCommand(``, pos);
      }
    }
    //early-authentication-encryption
    if(id === 'earlyUpdate'){
      let pos = 4;
      let command = `early-authentication-encryption`
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
    //multicast-dsid-forward
    if(id === 'multicastUpdate'){
      let pos = 5;
      let command = `multicast-dsid-forward`
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
    //tftp-proxy
    if(id === 'tftpUpdate'){
      let pos = 6;
      let command = `tftp-proxy`
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
    //ip bundle
    if(id === 'bundleUpdate'){
      let pos = 7;
      let command = `ip bundle`
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
    //downstreams
    if(id === 'downUpdate'){
      let pos = 30;
      for(let i = 0; i < this.downstreams.length; i ++){
        if(update){
          if(!no){
            this.sharedSvc.addCommand(` downstream ${this.downstreams[i]} interface qam ${this.interfaceDown}/${this.sifDown}/${this.chDownstreams[i]}`, pos + i);
          }else{
            this.sharedSvc.addCommand(` no downstream ${this.downstreams[i]}`, pos + i);
          }
        }else{
          this.sharedSvc.addCommand(``, pos + i);
        }
      }
    }
    //mgmd ipv4
    if(id === 'mgmdUpdate'){
      let pos = 40;
      let command = `mgmd ipv4 shutdown`
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
    //cm-status report event-list
    if(id === 'reportUpdate'){
      let pos = 41;
      let command = `cm-status report event-list`
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
    //cm trap online-offline-only
    if(id === 'trapoUpdate'){
      let pos = 42;
      let command = `cm trap online-offline-only`
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
    //cm trap interval
    if(id === 'trapiUpdate'){
      let pos = 43;
      let command = `cm trap interval`
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
    //cable shutdown End
    if(id === 'shutEndUpdate'){
      let pos = 44;
      if(update){
        this.sharedSvc.addCommand(` no cable shutdown`, pos);
      }else{
        this.sharedSvc.addCommand(``, pos);
      }
    }

  }

  addChannel(ch: number) {
    this.channels.push(ch);
  }
  
}
