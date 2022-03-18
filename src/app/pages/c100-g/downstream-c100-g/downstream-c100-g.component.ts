import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-downstream-c100-g',
  templateUrl: './downstream-c100-g.component.html',
  styleUrls: ['../../../shared/styles/generalStyles.scss']
})
export class DownstreamC100GComponent implements OnInit {

  constructor(private sharedSvc: SharedService) { }

  @Input() pos!: number;
  @Input() interfaceDown!: number;
  @Input() sifDown!: number;
  @Input() slotDown!: number;
  @Input() downstream!: number;
  @Input() chDownstreams: number[] = [];
  @Input() channels!: number;

  ngOnInit(): void {
    for(let i = 0; i <= 60; i ++){
      this.chDownstreams.push(i);
    }
  }

  parse_Int(value: string): number{
    return parseInt(value);
  }

  addCommand(update: boolean, no: boolean, sec: boolean){
      if(update){
        if(!no){
          if(sec){
            this.sharedSvc.addCommand(` downstream ${this.downstream} interface qam ${this.interfaceDown}/${this.sifDown}/${this.slotDown} secondary`, this.pos);
          }else{
            this.sharedSvc.addCommand(` downstream ${this.downstream} interface qam ${this.interfaceDown}/${this.sifDown}/${this.slotDown}`, this.pos);
          }
        }else{
          this.sharedSvc.addCommand(` no downstream ${this.downstream}`, this.pos);
        }
      }else{
        this.sharedSvc.addCommand(``, this.pos);
      }
  }
 

}
