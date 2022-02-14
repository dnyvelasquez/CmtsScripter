import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../services/shared.service';
import { Clipboard } from '@angular/cdk/clipboard';


@Component({
  selector: 'app-script',
  templateUrl: './script.component.html',
  styleUrls: ['../../../shared/styles/generalStyles.scss']
})
export class ScriptComponent implements OnInit {

  script: string = '';

  constructor(private sharedSvc: SharedService, private clipboard: Clipboard) {
      
   }

  ngOnInit(): void {
    
   }

   getScript(){
    this.script = this.sharedSvc.getCommands();
   }

   copyScript(){
    this.clipboard.copy(this.script);
  }

  cancel(){
    this.script='';
    window.location.reload();
  }

}
