import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-upstream-mod',
  templateUrl: './upstream-mod.component.html',
  styleUrls: ['../../../shared/styles/generalStyles.scss']
})
export class UpstreamModComponent implements OnInit {

  constructor(private sharedSvc: SharedService) { }

  ngOnInit(): void { }

  @Input() pos!: number;
  @Input() us!: number;
  @Input() desc!: string;
  panelOpenState = false;

  inputCommand(command: string, pos: number){
    this.sharedSvc.addCommand(command, pos);
  }


}
