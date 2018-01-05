import { Component, OnInit, Input, AfterViewInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-message-win',
  templateUrl: './message-win.component.html',
  styleUrls: ['./message-win.component.scss']
})
export class MessageWinComponent implements OnInit {

  @Input() message:string = '';

  constructor() { }

  ngOnInit() { 
  }

}
