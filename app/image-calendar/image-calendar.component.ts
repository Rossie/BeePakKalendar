import { Component, OnInit, ElementRef, AfterViewInit, ViewChild, AfterViewChecked } from '@angular/core';
import { ImageService } from '../image.service';
import { PageRoute } from 'nativescript-angular/router/page-router-outlet';
import { ActivatedRoute } from '@angular/router/src/router_state';
import { UrlSegment } from '@angular/router/src/url_tree';
import { RouterExtensions } from 'nativescript-angular/router/router-extensions';
import { PanGestureEventData, TouchGestureEventData, PinchGestureEventData } from 'tns-core-modules/ui/gestures/gestures';
import { CalendarService } from '../calendar.service';
import { Input } from '@angular/core/src/metadata/directives';
import { GridLayout, ItemSpec } from "ui/layouts/grid-layout";
import { Label } from "ui/label";
import { ViewMonthComponent } from '../view-month/view-month.component';
import * as screenShot from 'nativescript-screenshot';
import { ImageSource } from 'tns-core-modules/image-source/image-source';
import { Image } from 'tns-core-modules/ui/image';
import { AbsoluteLayout } from "ui/layouts/absolute-layout";
import * as platformModule from "tns-core-modules/platform";
import * as _ from 'lodash'
import { Point, View } from 'tns-core-modules/ui/frame/frame';
import { android } from 'tns-core-modules/application';

@Component({
  moduleId: module.id,
  selector: 'app-image-calendar',
  templateUrl: './image-calendar.component.html',
  styleUrls: ['./image-calendar.component.scss']
})
export class ImageCalendarComponent implements OnInit, AfterViewChecked {
  private calendarScale: number = 1;
  private screenWidthPx: any;
  private screenHeightPx: any;
  private tap_y: number;
  private tap_x: number;
  private calendar_x: number = 0;
  private calendar_y: number = 0;
  private calendarImageOnScreen:Point;
  private gridScale: number = 1;
  @ViewChild('calendarImage') calendarImageRef: ElementRef;
  @ViewChild('imgCropped') imgCroppedRef: ElementRef;

  constructor(
    private imageService: ImageService,
    private calendarService: CalendarService,
    private pageRoute: PageRoute,
    private router: RouterExtensions
  ) {
    this.pageRoute.activatedRoute
      .switchMap((activatedRoute: ActivatedRoute) => activatedRoute.url)
      .subscribe((param: UrlSegment[]) => {
      });
  }

  ngOnInit() {
    var img: Image = this.imgCroppedRef.nativeElement;
    if (this.imageService.croppedFileImageSource) {
      img.imageSource = this.imageService.croppedFileImageSource;
    }
    else {
      this.imageService.getLastImageSource()
        .then(lastImageSource => img.imageSource = lastImageSource)
        .catch(error => {
          console.error('No last file found.');
          this.router.navigateByUrl('image-select');
        })
    }

    this.screenWidthPx = platformModule.screen.mainScreen.widthPixels;
    this.screenHeightPx = platformModule.screen.mainScreen.heightPixels;

    let view: AbsoluteLayout = this.calendarImageRef.nativeElement;
    view.width = { value: this.screenWidthPx, unit: "px" };
    view.height = { value: this.screenHeightPx, unit: "px" };

    // set calendar to center
    
  }

  ngAfterViewChecked(): void {
    if (!this.calendarImageOnScreen) {
      setTimeout(() => {
        let view: AbsoluteLayout = this.calendarImageRef.nativeElement;
        this.calendarImageOnScreen = view.getLocationOnScreen();      
      }, 100);
    }
  }
  
  onCalendarPan(event: PanGestureEventData) {
    // only vertical panning
    switch (event.state) {
      case 1:
        // this.tap_x = this.calendar_x;
        this.tap_y = this.calendar_y;
        break;
      case 2:
        // this.calendar_x = this.tap_x + event.deltaX;
        this.calendar_y = this.keepInRange(this.tap_y + event.deltaY, -this.calendarImageOnScreen.y, 0 );
        break;
    }
  }

  private keepInRange(val:number, min:number, max:number):number {
    if (val < min) return min;
    if (val > max) return max;
    return val;
  }

  capture() {
    let is: ImageSource = screenShot.getImage(this.calendarImageRef.nativeElement);
    this.imageService.saveCalendarImage(is);
    this.router.navigateByUrl('image-result');
  }

  onSliderValueChange(event){
    // _.forIn(event, (value, key) => console.log(key,value));
    this.calendarScale = event.value / 10;
  }

  onInnerPan(event) {
    console.log("onInnerPan", event);
  }

}
