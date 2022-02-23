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
  chDownstreams: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23,
    24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47];

  ngOnInit(): void {
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
