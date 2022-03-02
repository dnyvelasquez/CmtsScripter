import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-bonding-group',
  templateUrl: './bonding-group.component.html',
  styleUrls: ['../../../shared/styles/generalStyles.scss']
})
export class BondingGroupComponent implements OnInit {

  posBgUps: number[] = [];
  @Input() pos!: number;
  @Output() addBondingGroupEvent = new EventEmitter<number>();
  @Output() subBondingGroupEvent = new EventEmitter();

  constructor(private sharedSvc: SharedService) { }

  ngOnInit(): void {
    this.posBgUps.push(this.pos + 1);
  }

  addBg(value: number){
    this.addBondingGroupEvent.emit(value);
  }

  subBg(){
    this.subBondingGroupEvent.emit();
  }

  addBgUp(pos: number){
    this.posBgUps.push(pos);
  }

  subBgUp(){
    this.posBgUps.pop();
  }

  addBondingCommand(update: boolean, text: string, no: boolean){
    if(update){
      if(!no){
        this.sharedSvc.addCommand(` cable upstream bonding-group ${text}`, this.pos);
      }else{
        this.sharedSvc.addCommand(` no cable upstream bonding-group ${text}`, this.pos);
      }
    }else{
      this.sharedSvc.addCommand(``, this.pos);
    }
  }

  addUpCommand(update: boolean, text: string, no: boolean, pos: number){
    let command = "upstream";
    if(update){
      if(!no){
        this.sharedSvc.addCommand(`  ${command} ${text}`, pos);
      }else{
        this.sharedSvc.addCommand(`  no ${command} ${text}`, pos);
      }
    }else{
      this.sharedSvc.addCommand(``, pos);
    }
  }

  addAttCommand(update: boolean, text: string, no: boolean){
    let command = "attributes";
    let pos = this.pos + 9;
    if(update){
      if(!no){
        this.sharedSvc.addCommand(`  ${command} ${text}`, pos);
      }else{
        this.sharedSvc.addCommand(`  no ${command}`, pos);
      }
    }else{
      this.sharedSvc.addCommand(``, pos);
    }
  }

}
