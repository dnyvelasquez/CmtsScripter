import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-fiber-node-v1',
  templateUrl: './fiber-node-v1.component.html',
  styleUrls: ['../../../shared/styles/generalStyles.scss']
})
export class FiberNodeV1Component implements OnInit {

  @Input() mac: string = '';
  @Input() downstream: string = '';
  @Input() upstream: string = '';
  @Input() desc: string = '';
  @Input() pos!: number;
  @Input() sec: string = '';
  panelOpenState = false
  quot: string = '"';

  constructor(private sharedSvc: SharedService) { }

  ngOnInit(): void {
  }

  inputCommand(command: string, pos: number){
    this.sharedSvc.addCommand(command, pos);
  }

}
