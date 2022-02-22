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
  panelOpenStateUs = false
  panelOpenStateDs = false
  panelOpenStateUpA = false
  panelOpenStateUpB = false
  quot: string = '"';
  ifUpstreams: number[] = [13, 12, 11, 10, 9];
  sifUpstreams: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  sltUpstreams: number[] = [0, 1, 2, 3];
  interfaceUp!: number;
  sifStartUp!: number;
  sifEndUp!: number;
  upstreamsA: number[] = [1, 2, 3, 4];
  upstreamsB: number[] = [5, 6, 7, 8];
  ifDownstreams: number[] = [0, 1, 2, 3, 4];
  sifDownstreams: number[] = [0, 1, 2, 3, 4, 5, 6, 7];
  chDownstreams: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23,
                            24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47];
  chDownEnd!: number;
  interfaceDown!: number;
  sifDown!: number;
  downstreams: number[] = [];

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

  makeDownstreams(){
    for(let i = 0; i <= this.chDownEnd; i++){
      this.downstreams[i] = i + 1;
    }
  }
}
