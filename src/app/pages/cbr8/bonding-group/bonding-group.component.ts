import { Component, Input, OnInit } from '@angular/core';
import { Cbr8Service } from '../../services/cbr8.service';

@Component({
  selector: 'app-bonding-group',
  templateUrl: './bonding-group.component.html',
  styleUrls: ['./bonding-group.component.scss']
})
export class BondingGroupComponent implements OnInit {

  constructor(private cbr8Svc: Cbr8Service) { }

  ngOnInit(): void {
  }

  checked: boolean = false;
  item: string = "";
  no: string = "";
  noAtt: string = "";
  @Input() pos!: number;

  inputGroup(bg: boolean, bgText: string, bgNo: boolean){
    if(bg){
      if(bgNo){
        this.cbr8Svc.addCommand(' no cable upstream bonding-group ' + bgText, this.pos);
      }else{
      this.cbr8Svc.addCommand(' cable upstream bonding-group ' + bgText, this.pos);
      }
    }else{
      this.cbr8Svc.addCommand('', this.pos);
    }
  }

  inputAtt(att: boolean, attText: string, attNo: boolean){
    if(att){
      if(attNo){
        this.cbr8Svc.addCommand('  no attributes ', this.pos + 20);
      }else{
      this.cbr8Svc.addCommand('  attributes ' + attText, this.pos + 20);
      }
    }else{
      this.cbr8Svc.addCommand('', this.pos + 20);
    }
  }

  inputNobgUpstream(pos: number, isChecked: boolean){
    if(!isChecked){
      for(let i = 0; i < 10; i++){
        this.cbr8Svc.addCommand('', pos+i);
      }
    }
  }

  inputUpstream(us: boolean, usText: string, usNo: boolean){
    if(us){
      if(usNo){
        this.cbr8Svc.addCommand('  no upstream ' + usText, this.pos + 10);
      }else{
        this.cbr8Svc.addCommand('  upstream ' + usText, this.pos + 10);
      }
    }else{
      this.cbr8Svc.addCommand('', this.pos + 10);
    }
  }


}
