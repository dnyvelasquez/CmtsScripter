import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-wide-band',
  templateUrl: './wide-band.component.html',
  styleUrls: ['../../../shared/styles/generalStyles.scss']
})
export class WideBandComponent implements OnInit {

  @Input() interF!: number;
  @Input() slt!: number;
  @Input() description!: string;
  @Input() pos!: number;

  constructor(private sharedSvc: SharedService) { }

  ngOnInit(): void {
  }

  inputCommand(command: string, pos: number){
    this.sharedSvc.addCommand(command, pos);
  }

}
