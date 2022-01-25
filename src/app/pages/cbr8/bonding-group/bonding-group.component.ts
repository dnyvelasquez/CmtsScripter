import { Component, OnInit } from '@angular/core';
import { Cbr8Service } from '../../services/cbr8.service';

@Component({
  selector: 'app-bonding-group',
  templateUrl: './bonding-group.component.html',
  styleUrls: ['./bonding-group.component.scss']
})
export class BondingGroupComponent implements OnInit {

  constructor(private cbr8Svc: Cbr8Service) { }

  ngOnInit(): void {
  }

  checked: boolean = false;
  item: string = "";

  changeChecked(isChecked: boolean, value: string, noChk: boolean): void{
    this.checked = isChecked;
    this.inputText(isChecked, value, noChk);
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
