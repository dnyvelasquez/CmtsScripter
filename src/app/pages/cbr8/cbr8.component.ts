import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cbr8',
  templateUrl: './cbr8.component.html',
  styleUrls: ['./cbr8.component.scss']
})
export class CBR8Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  interFaces: string[] = ['1', '2', '3', '6', '7', '8', '9'];
  slots: string[] = ['0', '1', '2', '3', '4', '5', '6', '7'];

  

}


