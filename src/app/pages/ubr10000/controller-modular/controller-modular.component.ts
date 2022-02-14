import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-controller-modular',
  templateUrl: './controller-modular.component.html',
  styleUrls: ['../../../shared/styles/generalStyles.scss']
})
export class ControllerModularComponent implements OnInit {

  constructor(private sharedSvc: SharedService) { }

  ngOnInit(): void {
  }

  panelOpenState = false;
  @Input() interF!:number;
  @Input() subInterF!: number;
  @Input() slt!: number;
  @Input() pos!: number;
  @Input() start!: number;
  @Input() end!: number;
  rfChannels: number[] = [];
  frequencies: number[] = this.sharedSvc.getFrequencies();
  freqs: number[] = this.sharedSvc.getFrequencies();
  p: number = 0;

  inputCommand(command: string, pos: number){
    this.sharedSvc.addCommand(command, pos);
  }

  getRfChannels(){
    let end = this.end - this.start
    for(let i = 0; i <= end; i++){
      let ch: number = this.start + i;
      this.rfChannels[i] = ch;
    }
  }

  changeFreqs(ch: number, freq: string){
    let pos = 0;
    for(let i = 0; i < this.frequencies.length; i++){
      if(this.freqs[i] === parseInt(freq)){
        pos = i;
      }
    }
    for(let i = ch; i < this.frequencies.length; i++){
      this.freqs[i] = this.frequencies[pos];
      pos++;
    }
  }

}
