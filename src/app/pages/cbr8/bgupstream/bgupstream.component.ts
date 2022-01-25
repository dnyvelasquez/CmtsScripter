import { Component, Input, OnInit } from '@angular/core';
import { Cbr8Service } from '../../services/cbr8.service';

@Component({
  selector: 'app-bgupstream',
  templateUrl: './bgupstream.component.html',
  styleUrls: ['./bgupstream.component.scss']
})
export class BGUpstreamComponent implements OnInit {

  @Input() checked!: boolean;
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
