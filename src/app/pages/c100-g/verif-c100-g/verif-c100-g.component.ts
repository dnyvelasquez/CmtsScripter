import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-verif-c100-g',
  templateUrl: './verif-c100-g.component.html',
  styleUrls: ['../../../shared/styles/generalStyles.scss']
})
export class VerifC100GComponent implements OnInit {

  constructor(private sharedSvc: SharedService) { }

  ngOnInit(): void {
  }

  @Input() pos!: number;
  @Input() mac!: string;

  addSummaryCommand(update: boolean){
    let pos = this.pos;
    if(update){
      this.sharedSvc.addCommand(`\nshow cable modem docsis-mac ${this.mac} summary`, pos);
    }else{
      this.sharedSvc.addCommand('', pos);
    }
  }

  addTopologyCommand(update: boolean){
    let pos = this.pos + 1;
    if(update){
      this.sharedSvc.addCommand(`\nshow interface docsis-mac ${this.mac} topology`, pos);
    }else{
      this.sharedSvc.addCommand('', pos);
    }
  }


}
