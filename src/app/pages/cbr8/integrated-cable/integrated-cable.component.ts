import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/services/shared.service';


@Component({
  selector: 'app-integrated-cable',
  templateUrl: './integrated-cable.component.html',
  styleUrls: ['../../../shared/styles/generalStyles.scss']
})
export class IntegratedCableComponent implements OnInit {

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

  inputNoRfChn(pos: number){
    for(let i = 0; i < 10; i++){
      this.sharedSvc.addCommand('', pos+i);
    }
  }

}
