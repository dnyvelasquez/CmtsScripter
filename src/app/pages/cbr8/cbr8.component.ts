import { Component, OnInit } from '@angular/core';
import { Cbr8Service } from '../services/cbr8.service';

@Component({
  selector: 'app-cbr8',
  templateUrl: './cbr8.component.html',
  styleUrls: ['./cbr8.component.scss']
})
export class CBR8Component implements OnInit {

  constructor(private cbr8Svc: Cbr8Service) { }

  ngOnInit(): void {
  }

  interFaces: string[] = ['1', '2', '3', '6', '7', '8', '9'];
  slots: string[] = ['0', '1', '2', '3', '4', '5', '6', '7'];
  upStreams!: string[];
  panelOpenState = false;
  item: string = "";
  script: string = "";
  showScript: boolean = false;
  interF: string = "";
  slt: string = "";
  
  powerAdjust(isChecked: boolean){
    if(isChecked){
      this.upStreams = this.cbr8Svc.getPowerAdjust();      
    }
  }

  inputChange(isChecked: boolean, value: string):void{
    if(isChecked){
        this.item = value;
   }else{
      this.item = "";
    }
    if(this.item != ""){
      this.cbr8Svc.addItem(this.item);
    }
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

  generate(){
    this.script = "interface Cable"+this.interF + "/0/" + this.slt + "\n" +  this.cbr8Svc.getScript();
  }

}


