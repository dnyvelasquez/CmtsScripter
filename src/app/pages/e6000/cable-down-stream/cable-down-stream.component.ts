import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-cable-down-stream',
  templateUrl: './cable-down-stream.component.html',
  styleUrls: ['../../../shared/styles/generalStyles.scss']
})
export class CableDownStreamComponent implements OnInit {

  @Input() mac!: string;
  @Input() desc!: string;
  @Input() pos!: number;
  @Output() downstreamEvent = new EventEmitter<string>();
  @Output() interFaceEvent = new EventEmitter<string>();
  @Output() subInterFaceEvent = new EventEmitter<string>();
  panelOpenState = false
  interFaces: number[] = [12, 11, 10, 9, 8, 7, 6, 5];
  subInterFaces: number[] = [0, 1, 2, 3, 4, 5, 6, 7];
  slots: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,
                    12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23,
                    24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35,
                    36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47];
  interFace!: string;
  subInterFace!: string;
  slts: number[] = [];
  frequencies: number[] = this.sharedSvc.getFrequencies();
  freqs: any[] = this.sharedSvc.getFrequencies();
  shutdown: boolean = false;
  none: boolean = false;
  showFreqs: boolean[] = [];


  constructor(private sharedSvc: SharedService) { }

  ngOnInit(): void { }

  getSlts(start: string, end: string){
    for(let i = 0; i <= (parseInt(end) - parseInt(start)); i++){
      this.slts.push(parseInt(start) + i);
    }
  }

  changeFreqs(ch: number, freq: number){
    let pos = 0;
    for(let i = 0; i < this.frequencies.length; i++){
      if(this.freqs[i] === freq){
        pos = i;
      }
    }
    for(let i = ch; i < this.frequencies.length; i++){
      this.freqs[i] = this.frequencies[pos];
      pos++;
    }
  }

  outputDownstream(value: string){
    this.downstreamEvent.emit(value);
  }

  outputInterFace(value: string){
    this.interFaceEvent.emit(value);
  }

  outputSubInterFace(value: string){
    this.subInterFaceEvent.emit(value);
  }

  addInterfaceCommand(update: boolean, slt: number, i: number){
    let pos = this.pos + 1 + i * 10;
    if(update){
      this.sharedSvc.addCommand(`\ninterface cable-downstream ${this.interFace}/${this.subInterFace}/${slt}`, pos);
    }else{
      this.sharedSvc.addCommand(``, pos);
    }
  }

  addShutStartCommand(update: boolean, i: number){
    let pos = this.pos + 2 + i * 10;
    if(update){
      this.sharedSvc.addCommand(` cable shutdown`, pos);
    }else{
      this.sharedSvc.addCommand(``, pos);
    }
  }

  addMacCommand(update: boolean, i: number, no: boolean){
    let pos = this.pos + 3 + i * 10;
    let command = 'cable cable-mac';
    if(update){
      if(!no){
        this.sharedSvc.addCommand(` ${command} ${this.mac}`, pos);
      }else{
        this.sharedSvc.addCommand(` no ${command} ${this.mac}`, pos);
      }     
    }else{
      this.sharedSvc.addCommand(``, pos);
    }
  }

  addDescCommand(update: boolean, i: number, text: string, no: boolean){
    let pos = this.pos + 4 + i * 10;
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

  addIdCommand(update: boolean, i: number, text: string){
    let pos = this.pos + 5 + i * 10;
    let command = 'cable channel-id';
    if(update){
      this.sharedSvc.addCommand(` ${command} ${text}`, pos);
    }else{
      this.sharedSvc.addCommand(``, pos);
    }
  }

  addFreqCommand(update: boolean, i: number, text: string, no: boolean){
    let pos = this.pos + 6 + i * 10;
    let command = 'cable frequency';
    if(update){
      if(!no){
        this.sharedSvc.addCommand(` ${command} ${text}000000`, pos);
      }else{
        this.sharedSvc.addCommand(` ${command} 0`, pos);
      }
    }else{
      this.sharedSvc.addCommand(``, pos);
    }
  }

  addInterCommand(update: boolean, i: number, text: string, no: boolean){
    let pos = this.pos + 7 + i * 10;
    let command = 'cable interleave-depth';
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

  addModCommand(update: boolean, i: number, text: string, no: boolean){
    let pos = this.pos + 8 + i * 10;
    let command = 'cable modulation';
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

  addCapableCommand(update: boolean, i: number, no: boolean){
    let pos = this.pos + 9 + i * 10;
    let command = 'cable primary-capable';
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

  addShutEndCommand(update: boolean, i: number){
    let pos = this.pos + 10 + i * 10;
    if(update){
      this.sharedSvc.addCommand(` no cable shutdown`, pos);
    }else{
      this.sharedSvc.addCommand(``, pos);
    }
  }

  shutdownTemplate(){
    this.shutdown = true;
    for(let i = 0; i < this.slts.length; i ++){
      this.addInterfaceCommand(true, this.slts[i], i);
      this.addShutStartCommand(true, i);
    }
  }

  noneTemplate(){
    this.none = false;
    for(let i = 0; i < this.slts.length; i ++){
      this.addInterfaceCommand(false, this.slts[i], i);
      this.addShutStartCommand(false, i);
    }

  }

}
