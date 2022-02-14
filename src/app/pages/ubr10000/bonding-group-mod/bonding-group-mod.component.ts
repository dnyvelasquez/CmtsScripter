import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-bonding-group-mod',
  templateUrl: './bonding-group-mod.component.html',
  styleUrls: ['../../../shared/styles/generalStyles.scss']
})
export class BondingGroupModComponent implements OnInit {

  posBgUps: number[] = [];
  @Input() pos!: number;
  @Output() addBondingGroupEvent = new EventEmitter<number>();
  @Output() subBondingGroupEvent = new EventEmitter();

  constructor(private sharedSvc: SharedService) { }

  ngOnInit(): void {
    this.posBgUps.push(this.pos + 1);
  }

  inputCommand(command: string, pos: number){
    this.sharedSvc.addCommand(command, pos);
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
  
}
