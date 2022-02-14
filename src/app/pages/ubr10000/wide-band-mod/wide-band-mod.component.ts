import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-wide-band-mod',
  templateUrl: './wide-band-mod.component.html',
  styleUrls: ['../../../shared/styles/generalStyles.scss']
})
export class WideBandModComponent implements OnInit {

  @Input() interF!: number;
  @Input() subInterF!: number;
  @Input() slt!: number;
  @Input() pos!: number;
  @Input() start!: number;
  @Input() end!: number;
  @Input() wb!: number;
  rfChannels: number[] = [];
  downs!: number;
  panelOpenState = false;


  constructor(private sharedSvc: SharedService) { }

  ngOnInit(): void {
  }

  inputCommand(command: string, pos: number){
    this.sharedSvc.addCommand(command, pos);
  }

  getRfChannels(){
    let end = this.end - this.start
    for(let i = 0; i <= end; i++){
      let ch: number = this.start + i;
      this.rfChannels[i] = ch;
    }
    this.downs = this.rfChannels.length;
  }

}
