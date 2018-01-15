import { Component, OnInit, ElementRef, ViewChild, ContentChild, Input, AfterContentInit, Output, EventEmitter } from '@angular/core';
import { PanGestureEventData, GestureTypes } from 'tns-core-modules/ui/gestures/gestures';
import { View } from 'tns-core-modules/ui/core/view';
import { EventData } from 'tns-core-modules/data/observable/observable';
import { Page } from "ui/page";
import { AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  moduleId: module.id,
  selector: 'app-pan-and-scale',
  templateUrl: './pan-and-scale.component.html',
  styleUrls: ['./pan-and-scale.component.scss']
})
export class PanAndScaleComponent implements OnInit {
  // public left:number = 0;
  // public top:number = 0;
  private tap_x:number = 0;
  private tap_y:number = 0;
  private startScale:number = 1;

  @Output('innerPan') innerPan:EventEmitter<PanGestureEventData> = new EventEmitter();
  @Input() scale:number = 1;
  @Input() left:number = 0;
  @Input() top:number = 0;
  // @Input('scale') scale:number = 1;

  constructor(
    private page:Page
  ) { 
  }
  
  ngOnInit() {
  }
  
  onPan(event: PanGestureEventData) {
    // console.log(event.eventName, event.state);
    switch (event.state) {
      case 1:
        this.tap_x = this.left;
        this.tap_y = this.top;
        break;
      case 2:
        this.left = this.tap_x + event.deltaX;
        this.top = this.tap_y + event.deltaY;
        break;
    }
    
    this.innerPan.emit(event);
  }

}
