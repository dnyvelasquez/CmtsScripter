import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-ubr10000',
  templateUrl: './ubr10000.component.html',
  styleUrls: ['../../shared/styles/generalStyles.scss']
})
export class UBR10000Component implements OnInit {

  constructor(private sharedSvc: SharedService) { }

  ngOnInit(): void { }

  interFaces: string[] = ['5', '6', '7', '8'];
  subInterFaces: string[] = ['0', '1'];
  slots: string[] = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  interF!: number;
  subInterF!: number;
  slt!: number;
  panelOpenStateIf = false;
  panelOpenStateMod = false;
  panelOpenStateLoad = false;
  panelOpenStateWide = false;
  posUs: number[] = [250, 270, 290, 310];
  us: number[] = [0, 1, 2, 3];
  downIf: number[] = [1, 3, 5, 6, 7, 8];
  downSif: number[] = [0, 1, 2];
  downSlt: number[] = [0, 1, 2, 3, 4, 5];
  downInterF: number[] = [];
  downSubInterF: number[] = [];
  downSlot: number[] = [];
  downStart: number[] = [];
  downEnd: number[] = [];
  downsNumber: number[] = [100];
  posBgs: number[] = [150];


  inputCommand(command: string, pos: number){
    this.sharedSvc.addCommand(command, pos);
  }

  parse_Int(value: string): number{
    return parseInt(value);
  }

  addUpstream(){
    this.us.push(this.us[this.us.length - 1] + 1);
    this.posUs.push(this.posUs[this.posUs.length - 1] + 20);
  }

  addDownStream(pos: number){
    this.downsNumber.push(pos);
  }

  subDownStream(){
    this.downsNumber.pop();
  }

  inputDownIf(iF: string){
    this.downInterF.push(parseInt(iF));
  }

  inputDownSif(sIf: string){
    this.downSubInterF.push(parseInt(sIf));
  }

  inputDownSlot(slt: string){
    this.downSlot.push(parseInt(slt));
  }

  inputDownStart(start: string){
    this.downStart.push(parseInt(start));
  }

  inputDownEnd(end: string){
    this.downEnd.push(parseInt(end));
  }

  deleteDownIf(){
    this.downInterF.pop();
  }

  deleteDownSif(){
    this.downSubInterF.pop();
  }

  deleteDownSlot(){
    this.downSlot.pop();
  }

  deleteDownStart(){
    this.downStart.pop();
  }

  deleteDownEnd(){
    this.downEnd.pop();
  }

  addBg(pos: number){
    this.posBgs.push(pos);
  }

  subBg(){
    this.posBgs.pop();
  }


}
