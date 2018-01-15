import { Component, OnInit, ElementRef, AfterViewInit, ViewChild, AfterViewChecked } from '@angular/core';
import { ImageService } from '../services/image.service';
import { PageRoute } from 'nativescript-angular/router/page-router-outlet';
import { ActivatedRoute } from '@angular/router/src/router_state';
import { UrlSegment } from '@angular/router/src/url_tree';
import { RouterExtensions } from 'nativescript-angular/router/router-extensions';
import { PanGestureEventData } from 'tns-core-modules/ui/gestures/gestures';
import { CalendarService } from '../services/calendar.service';
import * as screenShot from 'nativescript-screenshot';
import { ImageSource } from 'tns-core-modules/image-source/image-source';
import { AbsoluteLayout } from "ui/layouts/absolute-layout";
import * as platformModule from "tns-core-modules/platform";
import * as _ from 'lodash'
import { Point } from 'tns-core-modules/ui/frame/frame';
import { SettingsService } from '../services/settings.service';
import { LayoutBase } from 'tns-core-modules/ui/layouts/layout-base';

@Component({
  moduleId: module.id,
  selector: 'app-image-calendar',
  templateUrl: './image-calendar.component.html',
  styleUrls: ['./image-calendar.component.scss']
})
export class ImageCalendarComponent implements OnInit, AfterViewChecked {
  public calendarScale: number = 1;
  private screenWidthPx: any;
  private screenHeightPx: any;
  private tap_y: number;
  private tap_x: number;
  public image_x: number = 0;
  public image_y: number = 0;
  public calendar_x: number = 0;
  public calendar_y: number = 0;
  private calendarImageOnScreen:Point;
  private gridScale: number = 1;
  public imageCropped: ImageSource;

  @ViewChild('calendarImage') calendarImageRef: ElementRef;

  constructor(
    private imageService: ImageService,
    private calendarService: CalendarService,
    private pageRoute: PageRoute,
    private router: RouterExtensions,
    private settings: SettingsService,
  ) {
    this.pageRoute.activatedRoute
      .switchMap((activatedRoute: ActivatedRoute) => activatedRoute.url)
      .subscribe((param: UrlSegment[]) => {
      });

    this.calendarService.monthObservable.subscribe(monthMoment => {
      console.log('monthMoment', monthMoment.toString());
    })
  }

  ngOnInit() {
    let selectedImageCalendar = this.calendarService.imageCalendar;
    this.imageCropped = this.imageService.getImageSourceFromFile(selectedImageCalendar.imageFile);
    // TODO: set calendar parameters from saved object top, left, scale
    this.calendar_x = this.calendarService.imageCalendar.calendarLeft || 0;
    this.calendar_y = this.calendarService.imageCalendar.calendarTop || 0;
    this.calendarScale = this.calendarService.imageCalendar.calendarScale || 1 ;
    // console.log("ngOnInit", JSON.stringify(this.calendarService.imageCalendar, null, 4));
    // if (this.calendarService.imageCalendar.lastMonth)

    this.screenWidthPx = platformModule.screen.mainScreen.widthPixels;
    this.screenHeightPx = platformModule.screen.mainScreen.heightPixels;

    let view: AbsoluteLayout = this.calendarImageRef.nativeElement;
    view.width = { value: this.screenWidthPx, unit: "px" };
    view.height = { value: this.screenHeightPx, unit: "px" };
  }

  ngAfterViewChecked(): void {
    if (!this.calendarImageOnScreen) {
      setTimeout(() => {
        let view: AbsoluteLayout = this.calendarImageRef.nativeElement;
        this.calendarImageOnScreen = view.getLocationOnScreen();      
      }, 100);
    }
  }

  /**+
   * Event handler when the background image is panned
   */
  onImagePan(event: PanGestureEventData) {
    // only vertical panning
    switch (event.state) {
      case 1:
        this.tap_y = this.image_y;
        break;
      case 2:
        this.image_y = this.keepInRange(this.tap_y + event.deltaY, -this.calendarImageOnScreen.y, 0 );
        break;
    }
  }
  
  /**
   * Event handler when the pan-and-scale.component is panned
   */
  onMonthViewPan(event:PanGestureEventData) {
    // when the tap ended
    if (event.state == 3) {
      let layout: LayoutBase = <LayoutBase>event.object;
      this.calendarService.imageCalendar.calendarLeft = +layout.left;
      this.calendarService.imageCalendar.calendarTop = +layout.top;
      this.settings.saveImageCalendar(this.calendarService.imageCalendar);
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
    this.calendarService.imageCalendar.calendarScale = this.calendarScale;
    this.settings.saveImageCalendar(this.calendarService.imageCalendar);
  }

}
