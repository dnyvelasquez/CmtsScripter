import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  
  private frequencies: number[] = [
    501, 507, 513, 519, 525, 531, 537, 543, 549, 555, 561, 567, 
    573, 579, 585, 591, 597, 603, 609, 621, 627, 633, 639, 645, 
    651, 657, 663, 669, 675, 681, 687, 693, 699, 705, 711, 717, 
    723, 729, 735, 741, 747, 753, 759, 765, 777, 783, 789, 789,
    795, 801, 807, 813, 819, 825, 831, 837, 843];

  private scriptArr: string[] = []; 

  constructor() { }

  getFrequencies():number[] {
    return this.frequencies;
  }

  addCommand(command: string, pos: number): void{
    this.scriptArr[pos] = command;
    console.log('comando:' + command ,pos)
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
