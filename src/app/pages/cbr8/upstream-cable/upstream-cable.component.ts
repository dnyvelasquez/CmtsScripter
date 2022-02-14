import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-upstream-cable',
  templateUrl: './upstream-cable.component.html',
  styleUrls: ['../../../shared/styles/generalStyles.scss']
})
export class UpstreamCableComponent implements OnInit {

  @Input() interF!: number;
  @Input() slt!: number;
  @Input() description!: string;
  @Input() pos!: number;

  constructor(private sharedSvc: SharedService) { }

  ngOnInit(): void {
  }

  inputCommand(command: string, pos: number){
    this.sharedSvc.addCommand(command, pos);
  }

  inputNoUsChan(pos: number){
    for(let i = 0; i < 15; i++){
      this.sharedSvc.addCommand('', pos+i);
    }
  }


}
