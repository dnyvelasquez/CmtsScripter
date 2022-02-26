import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-service-group',
  templateUrl: './service-group.component.html',
  styleUrls: ['../../../shared/styles/generalStyles.scss']
})
export class ServiceGroupComponent implements OnInit {

  @Input() pos!: number;
  @Input() mac!: string;
  @Input() ifDown!: number;
  @Input() sifDown!: number;
  @Input() ifUp!: number;
  @Input() sifUp!: number;
  @Input() ups: number[] = [];
  @Input() desc!: string;
  @Input() sec!: string;
  @Input() channels: number[] = [];

  constructor(private sharedSvc: SharedService) { }

  ngOnInit(): void {
  }

  addCommand(id: string, update: boolean, no: boolean, text: string){
    //service group
    if(id === 'sgUpdate'){
      if(update){
        this.sharedSvc.addCommand(`\nservice group ${this.mac}${this.sec}`, this.pos);
      }else{
        this.sharedSvc.addCommand(``, this.pos);
      }
    }
    //description
    if(id === 'descUpdate'){
      let pos = this.pos + 1;
      let command = `description`
      if(update){
        if(!no){
          this.sharedSvc.addCommand(` ${command} "${text}"`, pos);
        }else{
          this.sharedSvc.addCommand(` no ${command}`, pos);
        }
      }else{
        this.sharedSvc.addCommand(``, pos);
      }
    }
  }

    addServCommand(id: string, update: boolean, no: boolean, ch: number){
      //qams
      if(id === 'qamUpdate'){
        let pos = this.pos + 2 + ch;
        if(update){
          if(!no){
            this.sharedSvc.addCommand(` qam ${this.ifDown}/${this.sifDown}/${ch}`, pos);
          }else{
            this.sharedSvc.addCommand(` no qam ${this.ifDown}/${this.sifDown}/${ch}`, pos);
          }
        }else{
          this.sharedSvc.addCommand(``, pos);
        }
      }
      //ups
      if(id === 'upUpdate'){
        let pos = this.pos + 90 + ch;
        if(update){
          if(!no){
            this.sharedSvc.addCommand(` upstream ${this.ifUp}/${this.sifUp}.${ch}`, pos);
          }else{
            this.sharedSvc.addCommand(` no upstream ${this.ifUp}/${this.sifUp}.${ch}`, pos);
          }
        }else{
          this.sharedSvc.addCommand(``, pos);
        }
      }
    }



}
