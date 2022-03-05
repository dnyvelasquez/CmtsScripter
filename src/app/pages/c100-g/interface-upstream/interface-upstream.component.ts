import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-interface-upstream',
  templateUrl: './interface-upstream.component.html',
  styleUrls: ['../../../shared/styles/generalStyles.scss']
})
export class InterfaceUpstreamComponent implements OnInit {

  @Input() pos!: number;
  @Input() interface!: number;
  @Input() subinterface!: number;
  @Input() slot!: number;
  @Input() desc!: string;

  constructor(private sharedSvc: SharedService) { }

  ngOnInit(): void {
  }

  addInterfaceCommand(update: boolean) {
    if (update) {
      this.sharedSvc.addCommand(`\ninterface upstream ${this.interface}/${this.subinterface}.${this.slot}`, this.pos);
    } else {
      for (let i = this.pos; i <= this.pos + 20; i++)
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

  addDescCommand(update: boolean, no: boolean, text: string) {
    let pos = this.pos + 2;
    let command = `description`
    if (update) {
      if (!no) {
        this.sharedSvc.addCommand(` ${command} "${text}"`, pos);
      } else {
        this.sharedSvc.addCommand(` no ${command}`, pos);
      }
    } else {
      this.sharedSvc.addCommand(``, pos);
    }
  }


  addSpectrumCommand(update: boolean, no: boolean, text: string) {
    let pos = this.pos + 3;
    let command = `spectrum-rule`
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

  addFreqCommand(update: boolean, text: string) {
    let pos = this.pos + 4;
    let command = `frequency`
    if (update) {
      this.sharedSvc.addCommand(` ${command} ${text}00000`, pos);
    } else {
      this.sharedSvc.addCommand(``, pos);
    }
  }

  addChannelCommand(update: boolean, text: string) {
    let pos = this.pos + 5;
    let command = `channel-width`
    if (update) {
      this.sharedSvc.addCommand(` ${command} ${text}000000`, pos);
    } else {
      this.sharedSvc.addCommand(``, pos);
    }
  }

  addMapCommand(update: boolean, no: boolean, text: string) {
    let pos = this.pos + 6;
    let command = `map-advance dynamic`
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

  addIngressCommand(update: boolean, no: boolean) {
    let pos = this.pos + 7;
    let command = `ingress-cancellation`
    if (update) {
      if (!no) {
        this.sharedSvc.addCommand(` ${command}`, pos);
      } else {
        this.sharedSvc.addCommand(` no ${command}`, pos);
      }
    } else {
      this.sharedSvc.addCommand(``, pos);
    }
  }

  addLogShutStartCommand(update: boolean, no: boolean) {
    let pos = this.pos + 8;
    if (update) {
      if (!no) {
        this.sharedSvc.addCommand(` logical-channel 0 shutdown`, pos);
      } else {
        this.sharedSvc.addCommand(` no logical-channel 0 shutdown`, pos);
      }
    } else {
      this.sharedSvc.addCommand(``, pos);
    }
  }

  addLogDescCommand(update: boolean, no: boolean, text: string) {
    let pos = this.pos + 9;
    let command = `logical-channel 0 description`
    if (update) {
      if (!no) {
        this.sharedSvc.addCommand(` ${command} "${text}"`, pos);
      } else {
        this.sharedSvc.addCommand(` no ${command}`, pos);
      }
    } else {
      this.sharedSvc.addCommand(``, pos);
    }
  }

  addLogProfileCommand(update: boolean, text: string) {
    let pos = this.pos + 10;
    let command = `logical-channel 0 profile`
    if (update) {
      this.sharedSvc.addCommand(` ${command} ${text}`, pos);
    } else {
      this.sharedSvc.addCommand(``, pos);
    }
  }

  addLogMinislotCommand(update: boolean, text: string) {
    let pos = this.pos + 11;
    let command = `logical-channel 0 minislot`
    if (update) {
      this.sharedSvc.addCommand(` ${command} ${text}`, pos);
    } else {
      this.sharedSvc.addCommand(``, pos);
    }
  }

  addLogRangingCommand(update: boolean, no: boolean, text: string) {
    let pos = this.pos + 12;
    let command = `logical-channel 0 ranging-backoff`
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

  addLogPreEqCommand(update: boolean, no: boolean, text: string) {
    let pos = this.pos + 13;
    let command = `logical-channel 0 pre-equalization`
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

  addLogShutEndCommand(update: boolean) {
    let pos = this.pos + 14;
    if (update) {
      this.sharedSvc.addCommand(` no logical-channel 0 shutdown`, pos);
    } else {
      this.sharedSvc.addCommand(``, pos);
    }
  }

  addShutEndCommand(update: boolean) {
    let pos = this.pos + 15;
    if (update) {
      this.sharedSvc.addCommand(` no shutdown`, pos);
    } else {
      this.sharedSvc.addCommand(``, pos);
    }
  }

}
