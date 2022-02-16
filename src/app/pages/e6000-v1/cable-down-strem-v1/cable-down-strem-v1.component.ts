import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-cable-down-strem-v1',
  templateUrl: './cable-down-strem-v1.component.html',
  styleUrls: ['../../../shared/styles/generalStyles.scss']
})
export class CableDownStremV1Component implements OnInit {

  @Input() mac!: string;
  @Input() desc!: string;
  @Input() pos!: number;
  @Output() downstreamEvent = new EventEmitter<string>();
  panelOpenState = false
  interFaces: number[] = [12, 11, 10, 9, 8, 7, 6, 5];
  subInterFaces: number[] = [0, 1, 2, 3, 4, 5, 6, 7];
  slots: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,
                    12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23,
                    24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35,
                    36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47];
  interFace!: number;
  subInterFace!: number;
  slts: number[] = [];
  frequencies: number[] = this.sharedSvc.getFrequencies();
  freqs: number[] = this.sharedSvc.getFrequencies();
  quot: string = '"';


  constructor(private sharedSvc: SharedService) { }

  ngOnInit(): void {
  }

  inputCommand(command: string, pos: number){
    this.sharedSvc.addCommand(command, pos);
  }

  parse_Int(value: string):number{
    return parseInt(value);
  }

  getSlts(start: string, end: string){
    for(let i = 0; i <= (parseInt(end) - parseInt(start)); i++){
      this.slts.push(parseInt(start) + i);
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

  outputDownstream(value: string){
    this.downstreamEvent.emit(value);
  }

}
