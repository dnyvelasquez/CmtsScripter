import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-verif-cbr8',
  templateUrl: './verif-cbr8.component.html',
  styleUrls: ['../../../shared/styles/generalStyles.scss']
})
export class VerifCBR8Component implements OnInit {

  constructor(private sharedSvc: SharedService) { }

  ngOnInit(): void {
  }

  @Input() interF: any = '';
  @Input() slt: any = '';
  @Input() pos!: number;

  addCmCommand(update: boolean){
    let pos = this.pos;
    if(update){
      this.sharedSvc.addCommand(`\ncm${this.interF}0${this.slt}`, pos);
    }else{
      this.sharedSvc.addCommand('', pos);
    }
  }

  addCmpCommand(update: boolean){
    let pos = this.pos + 1;
    if(update){
      this.sharedSvc.addCommand(`cmp${this.interF}0${this.slt}`, pos);
    }else{
      this.sharedSvc.addCommand('', pos);
    }
  }

  addFCommand(update: boolean){
    let pos = this.pos + 2;
    if(update){
      this.sharedSvc.addCommand(`f${this.interF}0${this.slt}`, pos);
    }else{
      this.sharedSvc.addCommand('', pos);
    }
  }


}
