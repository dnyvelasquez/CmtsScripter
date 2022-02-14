import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-rf-chan',
  templateUrl: './rf-chan.component.html',
  styleUrls: ['../../../shared/styles/generalStyles.scss']
})
export class RfChanComponent implements OnInit {

  @Input() checked!: boolean;
  @Input() pos!: number;
  freqs!: number[];

  constructor(private sharedSvc: SharedService) { }

  ngOnInit(): void {
    this.freqs = this.sharedSvc.getFrequencies();
  }

  inputChannel(channelChange: boolean, channelText: string){
    if(channelChange){
      this.sharedSvc.addCommand('  docsis-channel-id ' + channelText, this.pos + 6);
    }else{
      this.sharedSvc.addCommand('', this.pos + 6);
    }
  }

  inputCommand(command: string, pos: number){
    this.sharedSvc.addCommand(command, pos);
  }

  inputNoRfChn(pos: number){
    for(let i = 0; i < 10; i++){
      this.sharedSvc.addCommand('', pos+i);
    }
  }

}
