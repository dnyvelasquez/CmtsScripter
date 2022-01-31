import { Component, Input, OnInit } from '@angular/core';
import { Cbr8Service } from '../../services/cbr8.service';

@Component({
  selector: 'app-up-stream',
  templateUrl: './up-stream.component.html',
  styleUrls: ['./up-stream.component.scss']
})
export class UpStreamComponent implements OnInit {

  @Input() interF!: number;
  @Input() slt!: number;
  @Input() usCh!: number;
  @Input() pos!: number;
  @Input() us!: number;

  constructor(private cbr8Svc: Cbr8Service) { }

  ngOnInit(): void {
  }

  addPowerAdjust(upStream: string){
    this.cbr8Svc.addPowerAdjust(upStream);
  }

  inputCommand(usChange: boolean, usNo: boolean, us: string){
    if(usChange){
      if(usNo){
        this.cbr8Svc.addCommand(' no upstream ' + us, this.pos);
      }else{
      this.cbr8Svc.addCommand(' upstream ' + us + ' Upstream-Cable ' + this.interF + '/0/' + this.slt + ' us-channel ' + this.usCh, this.pos);
      }
    }else{
      this.cbr8Svc.addCommand('', this.pos);
    }
  }

}
