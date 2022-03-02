import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-upstream-cable',
  templateUrl: './upstream-cable.component.html',
  styleUrls: ['../../../shared/styles/generalStyles.scss']
})
export class UpstreamCableComponent implements OnInit {

  @Input() interF!: any;
  @Input() slt!: any;
  @Input() description!: string;
  @Input() pos!: number;

  constructor(private sharedSvc: SharedService) { }

  ngOnInit(): void {
  }

  inputNoUsChan(pos: number){
    for(let i = 0; i < 15; i++){
      this.sharedSvc.addCommand('', pos+i);
    }
  }

  addCommand(update: boolean){
    if(update){
      this.sharedSvc.addCommand(` \ncontroller Upstream-Cable ${this,this.interF}/0/${this.slt}`, this.pos);
    }else{
      this.sharedSvc.addCommand(``, this.pos);
    }
  }


}
