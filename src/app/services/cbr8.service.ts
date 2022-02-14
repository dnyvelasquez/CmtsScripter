import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Cbr8Service {

  constructor() { }

  private powerAdjust: string[] = [];

  addPowerAdjust(upStream: string): void{
    this.powerAdjust.push(upStream);
  }

  getPowerAdjust():string[]{
    return this.powerAdjust;
  }

}
