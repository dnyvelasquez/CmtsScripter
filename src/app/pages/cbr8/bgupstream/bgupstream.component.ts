import { Component, Input, OnInit } from '@angular/core';
import { Cbr8Service } from '../../services/cbr8.service';

@Component({
  selector: 'app-bgupstream',
  templateUrl: './bgupstream.component.html',
  styleUrls: ['./bgupstream.component.scss']
})
export class BGUpstreamComponent implements OnInit {

  @Input() pos!: number;
  @Input() checked!: boolean;

  constructor(private cbr8Svc: Cbr8Service) { }

  ngOnInit(): void {
  }

  inputCommand(us: boolean, usText: string, usNo: boolean){
    if(us){
      if(usNo){
        this.cbr8Svc.addCommand('  no upstream ' + usText, this.pos);
      }else{
        this.cbr8Svc.addCommand('  upstream ' + usText, this.pos);
      }
    }else{
      this.cbr8Svc.addCommand('', this.pos);
    }
  }


}
