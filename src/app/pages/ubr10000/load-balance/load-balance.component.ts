import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-load-balance',
  templateUrl: './load-balance.component.html',
  styleUrls: ['../../../shared/styles/generalStyles.scss']
})
export class LoadBalanceComponent implements OnInit {

  @Input() interF!: number;
  @Input() subInterF!: number;
  @Input() slt!: number;
  @Input() downInterF: number[] = [];
  @Input() downSubInterF: number[] = [];
  @Input() downSlt: number[] = [];
  @Input() downStart: number[] = [];
  @Input() downEnd: number[] = [];
  @Input() pos!: number;


  constructor(private sharedSvc: SharedService) { }

  ngOnInit(): void {
  }

  inputCommand(command: string, pos: number){
    this.sharedSvc.addCommand(command, pos);
  }
  
}
