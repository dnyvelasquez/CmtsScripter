import { Component, Input, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { SharedService } from 'src/app/shared/services/shared.service';
import { Cbr8Service } from '../../services/cbr8.service';

@Component({
  selector: 'app-rf-chan',
  templateUrl: './rf-chan.component.html',
  styleUrls: ['./rf-chan.component.scss']
})
export class RfChanComponent implements OnInit {

  @Input() checked!: boolean;
  @Input() pos!: number;

  constructor(private cbr8Svc: Cbr8Service, private sharedSvc: SharedService) { }

  ngOnInit(): void {
    this.sharedSvc.getFrequencies()
      .pipe(
        tap(res => console.log(res))
      )
      .subscribe();
  }

  inputChannel(channelChange: boolean, channelText: string){
    if(channelChange){
      this.cbr8Svc.addCommand('  docsis-channel-id ' + channelText, this.pos + 6);
    }else{
      this.cbr8Svc.addCommand('', this.pos + 6);
    }
  }

  inputCommand(command: string, pos: number){
    this.cbr8Svc.addCommand(command, pos);
  }

  inputNoRfChn(pos: number){
    for(let i = 0; i < 10; i++){
      this.cbr8Svc.addCommand('', pos+i);
    }
  }

}
