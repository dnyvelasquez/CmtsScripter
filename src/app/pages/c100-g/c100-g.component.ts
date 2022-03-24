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
  panelOpenStateVerif = false
  ifUpstreams: number[] = [13, 12, 11, 10, 9];
  sifUpstreams: number[] = [];
  interfaceUp!: any;
  sifAUp!: any;
  sifBUp!: any;
  upstreamsA: number[] = [1, 2, 3, 4];
  upstreamsB: number[] = [5, 6, 7, 8];
  ifDownstreams: number[] = [0, 1, 2, 3, 4];
  sifDownstreams: number[] = [0, 1, 2, 3, 4, 5, 6, 7];
  chDownstreams: number[] = [];
  channels: number[] = [];
  chDownEnd!: any;
  interfaceDown!: any;
  sifDown!: any;
  slotDown!: any;
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

  addInterfaceCommand(update: boolean){
    if(update){
      this.sharedSvc.addCommand(`interface docsis-mac ${this.mac}`, 0);
    }else{
      this.sharedSvc.addCommand(``, 0);
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

  addInitialCommand(update: boolean, text: string){
    let pos = 3;
    let command = `initial-tech`
    if(update){
      this.sharedSvc.addCommand(` ${command} ${text}`, pos);
    }else{
      this.sharedSvc.addCommand(``, pos);
    }
  }

  addEarlyCommand(update: boolean, no: boolean){
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

  addMultiCommand(update: boolean, no: boolean){
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

  addTftpCommand(update: boolean, no: boolean){
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

  addBundleCommand(update: boolean, text: string, no: boolean){
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

  addMgdCommand(update: boolean, no: boolean){
    let pos = 100;
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

  addReportCommand(update: boolean, text: string, no: boolean){
    let pos = 101;
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

  addTrapoCommand(update: boolean, no: boolean){
    let pos = 102;
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

  addTrapiCommand(update: boolean, text: string, no: boolean){
    let pos = 103;
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

  addShutEndCommand(update: boolean){
    let pos = 104;
    if(update){
      this.sharedSvc.addCommand(` no shutdown`, pos);
    }else{
      this.sharedSvc.addCommand(``, pos);
    }
  }

  addChannel(ch: number) {
    this.channels.push(ch);
  }
  
  sifBUpFunc(value: string): string{
    let temp = parseInt(value) + 1;
    return temp.toString();
  }

}
