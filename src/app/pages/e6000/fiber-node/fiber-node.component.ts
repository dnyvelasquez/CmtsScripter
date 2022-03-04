import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-fiber-node',
  templateUrl: './fiber-node.component.html',
  styleUrls: ['../../../shared/styles/generalStyles.scss']
})
export class FiberNodeComponent implements OnInit {

  @Input() mac: string = '';
  @Input() downstream: string = '';
  @Input() upstream: string = '';
  @Input() desc: string = '';
  @Input() pos!: number;
  @Input() sec: string = '';
  panelOpenState = false

  constructor(private sharedSvc: SharedService) { }

  ngOnInit(): void {
  }

  addFiberCommand(update: boolean, no: boolean){
    let pos = this.pos;
    let command = 'cable fiber-node';
    if(update){
      if(!no){
        this.sharedSvc.addCommand(`\n ${command} "${this.mac}${this.sec}"`, pos);
      }else{
        this.sharedSvc.addCommand(`\n no ${command} "${this.mac}${this.sec}"`, pos);
      }
    }else{
      this.sharedSvc.addCommand(``, pos);
    }
  }

  addInitCommand(update: boolean, no: boolean){
    let pos = this.pos + 1;
    let command = 'init';
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

  addDescCommand(update: boolean, text: string, no: boolean){
    let pos = this.pos + 2;
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

  addDownCommand(update: boolean, no: boolean){
    let pos = this.pos + 3;
    let command = 'cable-downstream';
    if(update){
      if(!no){
        this.sharedSvc.addCommand(` ${command} ${this.downstream}`, pos);
      }else{
        this.sharedSvc.addCommand(` no ${command} ${this.downstream}`, pos);
      }
    }else{
      this.sharedSvc.addCommand(``, pos);
    }
  }

  addUpCommand(update: boolean, no: boolean){
    let pos = this.pos + 4;
    let command = 'cable-upstream';
    if(update){
      if(!no){
        this.sharedSvc.addCommand(` ${command} ${this.upstream}`, pos);
      }else{
        this.sharedSvc.addCommand(` no ${command} ${this.upstream}`, pos);
      }
    }else{
      this.sharedSvc.addCommand(``, pos);
    }
  }

  addPolicyCommand(update: boolean, text: string, no: boolean){
    let pos = this.pos + 5;
    if(update){
      if(!no){
        this.sharedSvc.addCommand(` cable-mac ${this.mac} load-balance policy ${text}`, pos);
      }else{
        this.sharedSvc.addCommand(` no cable-mac ${this.mac} load-balance policy ${text}`, pos);
      }
    }else{
      this.sharedSvc.addCommand(``, pos);
    }
  }

  addTechCommand(update: boolean, text: string, no: boolean){
    let pos = this.pos + 5;
    if(update){
      if(!no){
        this.sharedSvc.addCommand(` cable-mac ${this.mac} load-balance init-technique ${text}`, pos);
      }else{
        this.sharedSvc.addCommand(` no cable-mac ${this.mac} load-balance init-technique ${text}`, pos);
      }
    }else{
      this.sharedSvc.addCommand(``, pos);
    }
  }

}
