import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-bonding-group-e6000',
  templateUrl: './bonding-group-e6000.component.html',
  styleUrls: ['../../../shared/styles/generalStyles.scss']
})
export class BondingGroupE6000Component implements OnInit {

  @Input() pos!: number;
  @Input() downIf: string = '';
  @Input() downSif: string = '';
  panelOpenState = false

  constructor(private sharedSvc: SharedService) { }

  ngOnInit(): void {
  }

  addNoneCommand(){
      this.sharedSvc.addCommand(``, this.pos);
      this.sharedSvc.addCommand(``, this.pos + 1);
      this.sharedSvc.addCommand(``, this.pos + 2);
  }

  add32Command(){
    this.sharedSvc.addCommand(` no cable downstream-bonding-group 65015`, this.pos);
    this.sharedSvc.addCommand(` cable downstream-bonding-group 65015 cable-downstream ${this.downIf}/${this.downSif}/8-31`, this.pos + 1);
    this.sharedSvc.addCommand(``, this.pos + 2);
  }

  add40Command(){
  this.sharedSvc.addCommand(` no cable downstream-bonding-group 65018`, this.pos);
  this.sharedSvc.addCommand(` no cable downstream-bonding-group 65019`, this.pos + 1);
  this.sharedSvc.addCommand(` cable downstream-bonding-group 65018 cable-downstream ${this.downIf}/${this.downSif}/16-39`, this.pos + 2);
  }

  add48Command(){
    this.sharedSvc.addCommand(` no cable downstream-bonding-group 65023`, this.pos);
    this.sharedSvc.addCommand(` no cable downstream-bonding-group 65024`, this.pos + 1);
    this.sharedSvc.addCommand(``, this.pos + 2);
    } 
  }
