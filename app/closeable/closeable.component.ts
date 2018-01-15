import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import * as settings from "application-settings";

@Component({
  moduleId: module.id,
  selector: 'app-closeable',
  templateUrl: './closeable.component.html',
  styleUrls: ['./closeable.component.scss']
})
export class CloseableComponent implements OnInit {
  @Output() onClosed: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() closed:boolean = false;
  @Input() settingsName:string = '';

  constructor() { }

  ngOnInit() { 
    if (this.settingsName) {
      this.closed = settings.getBoolean(this.settingsName, false);
    }
  }

  close(){
    this.closed = true;
    if (this.settingsName) {
      settings.setBoolean(this.settingsName, true);
    }
    this.onClosed.emit(this.closed);
  }
}
