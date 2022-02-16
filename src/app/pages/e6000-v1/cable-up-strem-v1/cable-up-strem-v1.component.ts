import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-cable-up-strem-v1',
  templateUrl: './cable-up-strem-v1.component.html',
  styleUrls: ['../../../shared/styles/generalStyles.scss']
})
export class CableUpStremV1Component implements OnInit {

  @Input() mac!: string;
  @Input() desc!: string;
  @Input() pos!: number;
  @Input() supervision: string = '';
  @Input() sec!: string;
  @Output() upstreamEvent = new EventEmitter<string>();
  panelOpenState = false
  interFaces: number[] = [1, 2, 3, 4];
  subInterFaces: number[] = [0, 1, 2, 3, 4, 5, 6, 7];
  slots: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  interFace!: number;
  subInterFace!: number;
  slts: number[] = [];
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

  outputUpstream(value: string){
    this.upstreamEvent.emit(value);
  }


}
