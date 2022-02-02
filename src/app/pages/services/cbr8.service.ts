import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Cbr8Service {

  constructor() { }

  private powerAdjust: string[] = [];
  private scriptArr: string[] = [];

  addPowerAdjust(upStream: string): void{
    this.powerAdjust.push(upStream);
  }

  getPowerAdjust():string[]{
    return this.powerAdjust;
  }

  addCommand(command: string, pos: number): void{
    this.scriptArr[pos] = command;
  }

  getCommands(): string{
    let script: string = '';
    for(let i = 0; i < this.scriptArr.length; i++){
      if(this.scriptArr[i] != '' && this.scriptArr[i] != undefined){
        script = script + this.scriptArr[i] + '\n';
      }
    }
    return script;
  }

}
