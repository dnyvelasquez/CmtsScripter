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

  constructor(private cbr8Svc: Cbr8Service) { }

  ngOnInit(): void {
  }

  inputItem(value: string){
    this.cbr8Svc.addItem(value);
  }

}
