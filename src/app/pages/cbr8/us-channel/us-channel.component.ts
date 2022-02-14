import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-us-channel',
  templateUrl: './us-channel.component.html',
  styleUrls: ['../../../shared/styles/generalStyles.scss']
})
export class UsChannelComponent implements OnInit {

  @Input() usCh!: string;
  @Input() pos!: number;
  @Input() checked!: boolean;
  @Input() description!: string;

  constructor(private sharedSvc: SharedService) { }

  ngOnInit(): void {
  }

  inputCommand(command: string, pos: number){
    this.sharedSvc.addCommand(command, pos);
  }

}
