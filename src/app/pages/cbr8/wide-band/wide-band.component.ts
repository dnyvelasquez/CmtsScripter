import { Component, Input, OnInit } from '@angular/core';
import { Cbr8Service } from '../../services/cbr8.service';

@Component({
  selector: 'app-wide-band',
  templateUrl: './wide-band.component.html',
  styleUrls: ['./wide-band.component.scss']
})
export class WideBandComponent implements OnInit {

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

}
