import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/services/shared.service';
import { Cbr8Service } from '../../../services/cbr8.service';

@Component({
  selector: 'app-up-stream',
  templateUrl: './up-stream.component.html',
  styleUrls: ['../../../shared/styles/generalStyles.scss']
})
export class UpStreamComponent implements OnInit {

  @Input() interF!: number;
  @Input() slt!: number;
  @Input() usCh!: number;
  @Input() pos!: number;
  @Input() us!: number;

  constructor(private sharedSvc: SharedService, private sbr8Svc: Cbr8Service) { }

  ngOnInit(): void {
  }

  addPowerAdjust(upStream: string){
    this.sbr8Svc.addPowerAdjust(upStream);
  }

  inputCommand(command: string, pos: number){
    this.sharedSvc.addCommand(command, pos);
  }


}
