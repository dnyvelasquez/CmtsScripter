import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-c100-g',
  templateUrl: './c100-g.component.html',
  styleUrls: ['../../shared/styles/generalStyles.scss']
})
export class C100GComponent implements OnInit {

  mac: string = '';
  desc: string = '';
  panelOpenStateAtt = false
  quot: string = '"';
  ifUpstreams: number[] = [13, 12, 11, 10, 9];
  sifUpstreams: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  sltUpstreams: number[] = [0, 1, 2, 3];
  interfaceUp!: number;
  sifStartUp!: number;
  sifEndUp!: number;
  upstreamsA: number[] = [1, 2, 3, 4];
  upstreamsB: number[] = [5, 6, 7, 8];


  constructor(private sharedSvc: SharedService) { }

  ngOnInit(): void {
  }

  inputCommand(command: string, pos: number){
    this.sharedSvc.addCommand(command, pos);
  }

  parse_Int(value: string): number{
    return parseInt(value);
  }

  addUpstreamA(value: number){
    this.upstreamsA.push(value);
  }

  addUpstreamB(value: number){
    this.upstreamsB.push(value);
  }


}
