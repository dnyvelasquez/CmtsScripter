import { Component, Input, OnInit } from '@angular/core';
import { Cbr8Service } from '../../services/cbr8.service';

@Component({
  selector: 'app-upstream-cable',
  templateUrl: './upstream-cable.component.html',
  styleUrls: ['./upstream-cable.component.scss']
})
export class UpstreamCableComponent implements OnInit {

  @Input() interF!: number;
  @Input() slt!: number;
  @Input() description!: string;
  @Input() pos!: number;

  constructor(private cbr8Svc: Cbr8Service) { }

  ngOnInit(): void {
  }

  inputCommand(command: string, pos: number){
    this.cbr8Svc.addCommand(command, pos);
  }

  inputNoUsChan(pos: number){
    for(let i = 0; i < 15; i++){
      this.cbr8Svc.addCommand('', pos+i);
    }
  }


}
