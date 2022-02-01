import { Component, Input, OnInit } from '@angular/core';
import { Cbr8Service } from '../../services/cbr8.service';

@Component({
  selector: 'app-us-channel',
  templateUrl: './us-channel.component.html',
  styleUrls: ['./us-channel.component.scss']
})
export class UsChannelComponent implements OnInit {

  @Input() usCh!: string;
  @Input() pos!: number;
  @Input() checked!: boolean;
  @Input() description!: string;

  constructor(private cbr8Svc: Cbr8Service) { }

  ngOnInit(): void {
  }

  inputCommand(command: string, pos: number){
    this.cbr8Svc.addCommand(command, pos);
  }

}
