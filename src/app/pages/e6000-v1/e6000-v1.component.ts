import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-e6000-v1',
  templateUrl: './e6000-v1.component.html',
  styleUrls: ['../../shared/styles/generalStyles.scss']
})
export class E6000V1Component implements OnInit {

  mac!: number;
  panelOpenStateAtt = false

  constructor(private sharedSvc: SharedService) { }

  ngOnInit(): void {
  }


  inputCommand(command: string, pos: number){
    this.sharedSvc.addCommand(command, pos);
  }

  inputCommandDesc(command: string, pos: number){
    this.inputCommand(` description "${command}"` , pos);
  }

  parse_Int(value: string): number{
    return parseInt(value);
  }


}
