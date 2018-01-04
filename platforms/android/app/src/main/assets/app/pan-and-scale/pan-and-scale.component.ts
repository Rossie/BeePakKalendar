import { Component, OnInit, ElementRef, ViewChild, ContentChild, Input, AfterContentInit } from '@angular/core';
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
  private left:number = 0;
  private top:number = 0;
  private tap_x:number = 0;
  private tap_y:number = 0;
  private startScale:number = 1;

  @Input('scale') scale:number = 1;

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
  }

  onScalePan(event: PanGestureEventData, position) {
    /* switch (event.state) {
      case 1:
        this.startScale = this.content.scaleX;
        break;
      case 2:
        Math.atan2(event.deltaY, event.deltaX);
      break;
    }*/
  }

}
