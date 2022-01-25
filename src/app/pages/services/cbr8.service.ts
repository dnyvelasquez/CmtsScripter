import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Cbr8Service {

  constructor() { }

  private powerAdjust: string[] = [];
  private script: string = "";

  addPowerAdjust(upStream: string): void{
    this.powerAdjust.push(upStream);
  }

  getPowerAdjust():string[]{
    return this.powerAdjust;
  }

  addItem(item: string){
    this.script = this.script + item + "\n";
  }

  getScript(): string{
    return this.script;
  }
}
