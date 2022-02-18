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

  inputCommand(command: string, pos: number){
    this.sharedSvc.addCommand(command, pos);
  }

}
