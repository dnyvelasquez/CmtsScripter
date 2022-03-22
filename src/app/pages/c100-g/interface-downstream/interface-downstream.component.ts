import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/services/shared.service';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-interface-downstream',
  templateUrl: './interface-downstream.component.html',
  styleUrls: ['../../../shared/styles/generalStyles.scss']
})
export class InterfaceDownstreamComponent implements OnInit {

  @Input() pos!: number;
  @Input() interface!: number;
  @Input() subinterface!: number;
  @Input() desc!: string;
  @Input() channels: number[] = [];
  @Output() addChannelEvent = new EventEmitter<number>();
  freqs: number[] = this.sharedSvc.getFrequencies();
  showFreqs: boolean[] = [];
  frequency: any[] = [];

  constructor(private sharedSvc: SharedService) { }

  ngOnInit(): void {
    for(let i = 0; i < 48; i ++){
      this.frequency.push("");
    }
  }


  addInterfaceCommand(update: boolean) {
    if (update) {
      this.sharedSvc.addCommand(`\ninterface qam ${this.interface}/${this.subinterface}`, this.pos);
    } else {
      for (let i = this.pos; i <= this.pos + 170; i++)
        this.sharedSvc.addCommand(``, i);
    }
  }

  addShutStartCommand(update: boolean) {
    let pos = this.pos + 1;
    if (update) {
      this.sharedSvc.addCommand(` shutdown`, pos);
    } else {
      this.sharedSvc.addCommand(``, pos);
    }
  }

  addInterleaveCommand(update: boolean, text: string) {
    let pos = this.pos + 2;
    let command = `interleave`
    if (update) {
      this.sharedSvc.addCommand(` ${command} ${text}`, pos);
    } else {
      this.sharedSvc.addCommand(``, pos);
    }
  }

  addPowerCommand(update: boolean, text: string) {
    let pos = this.pos + 3;
    let command = `power`
    if (update) {
      this.sharedSvc.addCommand(` ${command} ${text}`, pos);
    } else {
      this.sharedSvc.addCommand(``, pos);
    }
  }

  addSpectrumCommand(update: boolean, text: string, no: boolean) {
    let pos = this.pos + 4;
    let command = `spectrum-tilt`
    if (update) {
      if (!no) {
        this.sharedSvc.addCommand(` ${command} ${text}`, pos);
      } else {
        this.sharedSvc.addCommand(` no ${command}`, pos);
      }
    } else {
      this.sharedSvc.addCommand(``, pos);
    }
  }

  addOdfm0Command(update: boolean, no: boolean) {
    let pos = this.pos + 590;
    if (update) {
      if (!no) {
        this.sharedSvc.addCommand(` ofdm-channel 0 shutdown`, pos);
      } else {
        this.sharedSvc.addCommand(` no ofdm-channel 0 shutdown`, pos);
      }
    } else {
      this.sharedSvc.addCommand(``, pos);
    }
  }

  addOdfm1Command(update: boolean, no: boolean) {
    let pos = this.pos + 591;
    if (update) {
      if (!no) {
        this.sharedSvc.addCommand(` ofdm-channel 1 shutdown`, pos);
      } else {
        this.sharedSvc.addCommand(` no ofdm-channel 1 shutdown`, pos);
      }
    } else {
      this.sharedSvc.addCommand(``, pos);
    }
  }

  addShutEndCommand(update: boolean) {
    let pos = this.pos + 592;
    if (update) {
      this.sharedSvc.addCommand(` no shutdown`, pos);
    } else {
      this.sharedSvc.addCommand(``, pos);
    }
  }

  addChShutStartCommand(update: boolean, ch: number) {
    let pos = this.pos + 5 + ch * 4;
    if (update) {
      this.sharedSvc.addCommand(` channel ${this.channels[ch]} shutdown`, pos);
    } else {
      this.sharedSvc.addCommand(``, pos);
    }
  }

  addChDescCommand(update: boolean, no: boolean, text: string, ch: number) {
    let pos = this.pos + 6 + ch * 4;
    if (update) {
      if (!no) {
        this.sharedSvc.addCommand(` channel ${this.channels[ch]} description "${text}"`, pos);
      } else {
        this.sharedSvc.addCommand(` no channel ${this.channels[ch]} description`, pos);
      }
    } else {
      this.sharedSvc.addCommand(``, pos);
    }
  }

  addChFreqCommand(update: boolean, no: boolean, text: string, ch: number) {
    let pos = this.pos + 7 + ch * 4;
    if (update) {
      if (!no) {
        this.sharedSvc.addCommand(` channel ${this.channels[ch]} frequency ${text}000000`, pos);
      } else {
        this.sharedSvc.addCommand(` channel ${this.channels[ch]} frequency 0`, pos);
      }
    } else {
      this.sharedSvc.addCommand(``, pos);
    }
  }

  addChShutEndCommand(update: boolean, ch: number) {
    let pos = this.pos + 8 + ch * 4;
    if (update) {
      this.sharedSvc.addCommand(` no channel ${this.channels[ch]} shutdown`, pos);
    } else {
      this.sharedSvc.addCommand(``, pos);
    }
  }

  addDownstream(value: number) {
    this.addChannelEvent.emit(value);
  }

}
