import { Component, Input, OnInit } from '@angular/core';
import { Cbr8Service } from '../../services/cbr8.service';

@Component({
  selector: 'app-us-channel',
  templateUrl: './us-channel.component.html',
  styleUrls: ['./us-channel.component.scss']
})
export class UsChannelComponent implements OnInit {

  @Input() usCh: string = "";

  constructor(private cbr8Svc: Cbr8Service) { }

  ngOnInit(): void {
  }

  inputItem(value: string){
    this.cbr8Svc.addItem(value);
  }


}
