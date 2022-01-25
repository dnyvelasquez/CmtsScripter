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
  @Input() us!: number;
  item: string = "";

  constructor(private cbr8Svc: Cbr8Service) { }

  ngOnInit(): void {
  }

  addPowerAdjust(upStream: string){
    this.cbr8Svc.addPowerAdjust(upStream);
  }

  inputUp(isChecked: boolean, us: string, noChk: boolean): void{
    if(isChecked){
      this.item = " upstream " + us;
      if(!noChk){
        this.item = this.item + " Upstream-Cable " + this.interF + "/0/" + this.slt + " us-channel " + this.us;
      }else{
        this.item = " no" + this.item;
      }
    }else{
      this.item = "";
    }
    if(this.item != ""){
      this.cbr8Svc.addItem(this.item);
    }
  }
  

}
