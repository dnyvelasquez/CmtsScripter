import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-upstream-c100-g',
  templateUrl: './upstream-c100-g.component.html',
  styleUrls: ['../../../shared/styles/generalStyles.scss']
})
export class UpstreamC100GComponent implements OnInit {

  constructor(private sharedSvc: SharedService) { }

  @Input() interface!: number;
  @Input() subinterface!: number;
  @Input() slot!: number;
  @Input() pos!: number;
  @Input() up!: number;
  @Input() slts!: number;
  @Output() addUpstreamEvent = new EventEmitter<number>();


  ngOnInit(): void {
  }

  inputCommand(command: string, pos: number){
    this.sharedSvc.addCommand(command, pos);
  }

  addUpstream(value: number){
    this.addUpstreamEvent.emit(value);
  }


}
