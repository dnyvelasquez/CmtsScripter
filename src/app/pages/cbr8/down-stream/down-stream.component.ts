import { Component, Input, OnInit } from '@angular/core';
import { Cbr8Service } from '../../services/cbr8.service';

@Component({
  selector: 'app-down-stream',
  templateUrl: './down-stream.component.html',
  styleUrls: ['./down-stream.component.scss']
})
export class DownStreamComponent implements OnInit {

  @Input() interF!: number;
  @Input() slt!: number;  
  item: string = "";

  constructor(private cbr8Svc: Cbr8Service) { }

  ngOnInit(): void {
  }

  inputDown(isChecked: boolean, start: string, end: string, noChk: boolean): void{
    if(isChecked){
      this.item = " downstream Integrated-Cable " + this.interF + "/0/" + this.slt + " rf-channel " + start;
      if(end != ""){
        this.item = this.item + "-" + end;
      }
      if(noChk){
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
