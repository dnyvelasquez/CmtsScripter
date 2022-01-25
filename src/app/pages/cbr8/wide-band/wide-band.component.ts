import { Component, Input, OnInit } from '@angular/core';
import { Cbr8Service } from '../../services/cbr8.service';

@Component({
  selector: 'app-wide-band',
  templateUrl: './wide-band.component.html',
  styleUrls: ['./wide-band.component.scss']
})
export class WideBandComponent implements OnInit {

  @Input() interF!: number;
  @Input() slt!: number;
  @Input() description!: string;
  item: string = "";

  constructor(private cbr8Svc: Cbr8Service) { }

  ngOnInit(): void {
  }

  inputText(isChecked: boolean, value: string, noChk: boolean){
    if(isChecked){
      this.item = value;
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
