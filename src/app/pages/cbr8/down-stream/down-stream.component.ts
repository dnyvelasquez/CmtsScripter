import { Component, Input, OnInit } from '@angular/core';
import { Cbr8Service } from '../../services/cbr8.service';

@Component({
  selector: 'app-down-stream',
  templateUrl: './down-stream.component.html',
  styleUrls: ['./down-stream.component.scss']
})
export class DownStreamComponent implements OnInit {

  @Input() interF!: number;
  @Input() slt!: number;  
  @Input() pos!: number;
  
  constructor(private cbr8Svc: Cbr8Service) { }

  ngOnInit(): void {
  }

  inputCommand(dsChange: boolean, dsNo: boolean, start: string, end: string){
    if(dsChange){
      if(dsNo){
        this.cbr8Svc.addCommand(' no downstream Integrated-Cable ' + this.interF + '/0/' + this.slt + ' rf-channel ' + start + '-' + end, this.pos);
      }else{
      this.cbr8Svc.addCommand(' downstream Integrated-Cable ' + this.interF + '/0/' + this.slt + ' rf-channel ' + start + '-' + end, this.pos);
      }
    }else{
      this.cbr8Svc.addCommand('', this.pos);
    }
  }


  }
