import { Component, OnInit } from '@angular/core';
import { Cbr8Service } from '../services/cbr8.service';

@Component({
  selector: 'app-cbr8',
  templateUrl: './cbr8.component.html',
  styleUrls: ['./cbr8.component.scss']
})
export class CBR8Component implements OnInit {

  constructor(private cbr8Svc: Cbr8Service) { }

  ngOnInit(): void {
  }

  interFaces: string[] = ['1', '2', '3', '6', '7', '8', '9'];
  slots: string[] = ['0', '1', '2', '3', '4', '5', '6', '7'];
  upStreams!: string[];
  panelOpenState = false;
  script: string = "";
  showScript: boolean = false;
  interF: string = "";
  slt: string = "";
  
  inputCommand(command: string, pos: number){
    this.cbr8Svc.addCommand(command, pos);
  }

  inputPowerAdjust(upstream: string, value: string){
    let us = parseInt(upstream);
    this.cbr8Svc.addCommand(' cable upstream ' + us + ' power-adjust continue ' +  value, 400 + us);
  }

  powerAdjust(isChecked: boolean){
    if(isChecked){
      this.upStreams = this.cbr8Svc.getPowerAdjust();      
    }
  }

  getScript(){
    this.script = this.cbr8Svc.getCommands();
  }

}


