import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/services/shared.service';
import { Cbr8Service } from '../../services/cbr8.service';

@Component({
  selector: 'app-cbr8',
  templateUrl: './cbr8.component.html',
  styleUrls: ['../../shared/styles/generalStyles.scss']
})
export class CBR8Component implements OnInit {

  constructor(private cbr8Svc: Cbr8Service, private sharedSvc: SharedService) { }

  ngOnInit(): void {
  }

  interFaces: string[] = ['1', '2', '3', '6', '7', '8', '9'];
  slots: string[] = ['0', '1', '2', '3', '4', '5', '6', '7'];
  downStreams: number[] = [100];
  posBgs: number[] = [600];
  upStreams!: string[];
  panelOpenStateAtt = false;
  panelOpenStateWide = false;
  panelOpenStateDown = false;
  panelOpenStateUpA = false;
  panelOpenStateUpB = false;
  interF!: number;
  slt!: number;
  
  inputCommand(command: string, pos: number){
    this.sharedSvc.addCommand(command, pos);
  }

  inputPowerAdjust(upstream: string, value: string){
    let us = parseInt(upstream);
    this.sharedSvc.addCommand(' cable upstream ' + us + ' power-adjust continue ' +  value, 400 + us);
  }

  powerAdjust(isChecked: boolean){
    if(isChecked){
      this.upStreams = this.cbr8Svc.getPowerAdjust();      
    }
  }

  reload(){
    window.location.reload();
  }

  newTemplate(){

  }

  parse_Int(value: string): number{
    return parseInt(value);
  }

  subDownStream(){
    this.downStreams.pop();
  }

  addDownStream(down: number){
    this.downStreams.push(down);
  }
  addBg(pos: number){
    this.posBgs.push(pos);
  }

  subBg(){
    this.posBgs.pop();
  }


}


