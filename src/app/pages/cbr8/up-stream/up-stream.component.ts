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

  addCommand(update: boolean, no: boolean, pos: number){
    if(update){
      if(!no){
        this.sharedSvc.addCommand(` upstream ${this.us} Upstream-Cable ${this.interF}/0/${this.slt} us-channel ${this.usCh}`, pos);
      }else{
        this.sharedSvc.addCommand(` no upstream ${this.us}`, pos);
      }
    }else{
      this.sharedSvc.addCommand(``, pos);
    }
  }


}
