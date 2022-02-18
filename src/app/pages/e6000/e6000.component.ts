import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-e6000',
  templateUrl: './e6000.component.html',
  styleUrls: ['../../shared/styles/generalStyles.scss']
})
export class E6000Component implements OnInit {

  mac: string = '';
  desc: string = '';
  panelOpenStateAtt = false
  downstream: string = '';
  upstreamA: string = '';
  upstreamB: string = '';
  secA: string = '';
  secB: string = '';
  quot: string = '"';
  downIf: string = '';
  downSif: string = '';

  constructor(private sharedSvc: SharedService) { }

  ngOnInit(): void {
  }

  inputCommand(command: string, pos: number){
    this.sharedSvc.addCommand(command, pos);
  }

  parse_Int(value: string): number{
    return parseInt(value);
  }

  setDownstream(value: string){
    this.downstream = value;
  }

  setUpstreamA(value: string){
    this.upstreamA = value;
  }

  setUpstreamB(value: string){
    this.upstreamB = value;
  }
  
  setDownIf(value: string){
    this.downIf = value;
  }
  
  setDownSif(value: string){
    this.downSif = value;
  }
  
}
