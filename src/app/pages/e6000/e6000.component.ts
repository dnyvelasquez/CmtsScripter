import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-e6000',
  templateUrl: './e6000.component.html',
  styleUrls: ['../../shared/styles/generalStyles.scss']
})
export class E6000Component implements OnInit {

  mac: string = '';
  desc: string = '';
  panelOpenStateAtt = false;
  downstream: string = '';
  upstreamA: string = '';
  upstreamB: string = '';
  secA: string = '';
  secB: string = '';
  downIf: string = '';
  downSif: string = '';

  constructor(private sharedSvc: SharedService) { }

  ngOnInit(): void {
  }

  setDownstream(value: string){
    this.downstream = value;
  }

  setUpstreamA(value: string){
    this.upstreamA = value;
  }

  setUpstreamB(value: string){
    this.upstreamB = value;
  }
  
  setDownIf(value: string){
    this.downIf = value;
  }
  
  setDownSif(value: string){
    this.downSif = value;
  }

  addMacCommand(update: boolean){
    let pos = 0;
    if(update){
      this.sharedSvc.addCommand(`interface cable-mac  ${this.mac}`, pos);
    }else{
      this.sharedSvc.addCommand('', pos);
    }
  }

  addShutStartCommand(update: boolean){
    let pos = 1;
    if(update){
      this.sharedSvc.addCommand(` cable shutdown`, pos);
    }else{
      this.sharedSvc.addCommand('', pos);
    }
  }

  addDescCommand(update: boolean, text: string, no: boolean){
    let pos = 2;
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

  addMaxCommand(update: boolean, text: string, no: boolean){
    let pos = 3;
    let command = 'cable freq-us-max';
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

  addRangeCommand(update: boolean, text: string, no: boolean){
    let pos = 4;
    let command = 'cable us-freq-range';
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

  addTcsCommand(update: boolean, text: string, no: boolean){
    let pos = 5;
    let command = 'cable cm-tcs-max-size';
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

  addTftpCommand(update: boolean, no: boolean){
    let pos = 6;
    let command = 'cable tftp-enforce';
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

  addDynamicCommand(update: boolean, text: string, no: boolean){
    let pos = 7;
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

  addModeCommand(update: boolean, text: string, no: boolean){
    let pos = 8;
    let command = 'cable cm-ip-prov-mode';
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

  addRcpCommand(update: boolean, no: boolean){
    let pos = 9;
    let command = 'cable verbose-cm-rcp';
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

  addRccCommand(update: boolean, no: boolean){
    let pos = 10;
    let command = 'cable dynamic-rcc';
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

  addDownbgCommand(update: boolean, text: string){
    let pos = 11;
    let command = 'cable downstream-bonding-group dynamic';
    if(update){
      this.sharedSvc.addCommand(` ${command} ${text}`, pos);
    }else{
      this.sharedSvc.addCommand(``, pos);
    }
  }

  addUpbgCommand(update: boolean, text: string){
    let pos = 12;
    let command = 'cable uptream-bonding-group dynamic';
    if(update){
      this.sharedSvc.addCommand(` ${command} ${text}`, pos);
    }else{
      this.sharedSvc.addCommand(``, pos);
    }
  }

  addMultCommand(update: boolean, no: boolean){
    let pos = 13;
    let command = 'cable mult-tx-chl-mode';
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

  addPrivacyCommand(update: boolean, text: string, no: boolean){
    let pos = 14;
    let command = 'cable privacy mandatory';
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

  addGenerateCommand(update: boolean){
    let pos = 15;
    if(update){
      this.sharedSvc.addCommand(` cable downstream-bonding-group static generate-pool`, pos);
    }else{
      this.sharedSvc.addCommand('', pos);
    }
  }

  addShutEndCommand(update: boolean){
    let pos = 19;
    if(update){
      this.sharedSvc.addCommand(` no cable shutdown`, pos);
    }else{
      this.sharedSvc.addCommand('', pos);
    }
  }


}
