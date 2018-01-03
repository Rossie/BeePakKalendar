import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, Input, Output, ViewContainerRef } from '@angular/core'
import { RouterExtensions } from 'nativescript-angular/router'
import { GridLayout, ItemSpec } from 'tns-core-modules/ui/layouts/grid-layout/grid-layout';
import { CalendarService, IDayItem, IDayMarker } from '../calendar.service';
import { Label } from 'tns-core-modules/ui/label/label';
import { TouchGestureEventData, PanGestureEventData, GestureEventData } from 'tns-core-modules/ui/gestures/gestures';
import { EventEmitter } from '@angular/core/src/event_emitter';
import { Border } from "tns-core-modules/ui/border";
import { Color } from 'tns-core-modules/color/color';
import * as moment from 'moment';
import { ModalDialogService, ModalDialogOptions } from "nativescript-angular/modal-dialog";
import { DayMarkerComponent } from '../day-marker/day-marker.component';
import * as _ from 'lodash';

@Component({
    moduleId: module.id,
    selector: 'ns-view-month',
    templateUrl: './view-month.component.html',
    styleUrls: ['./view-month.component.css']
})
export class ViewMonthComponent implements OnInit {
    @Input() monthDelta: number = 0;
    @ViewChild('calendarGrid') calendarGridRef: ElementRef;
    
    private monthName:string;
    private actMonth: moment.Moment;
    private calendar_x:number = 0;
    private calendar_y:number = 0;
    private calendarTap_x:number = 0;
    private calendarTap_y:number = 0;
    // private grid: GridLayout;
    private days:IDayItem[] = [];

    constructor(
        private router: RouterExtensions,
        private calendarService: CalendarService,
        private modalService: ModalDialogService,
        private viewContainerRef: ViewContainerRef
    ) { 
    }
    
    ngOnInit() { 
        // this.grid = this.calendarGridRef.nativeElement;
        this.actMonth = moment();
        this.days = this.calendarService.getMonth();
        this.monthName = this.calendarService.getMonthName();
    }

    onPan(event: PanGestureEventData) {
        // console.log(event.eventName, event.state);
        switch (event.state) {
          case 1:
            this.calendarTap_x = this.calendar_x;
            this.calendarTap_y = this.calendar_y;
            break;
          case 2:
            this.calendar_x = this.calendarTap_x + event.deltaX;
            this.calendar_y = this.calendarTap_y + event.deltaY;
            break;
        }
    }
    
    onTouch(args: TouchGestureEventData) {
        // console.log(args.action);
    }
    
    stepMonth(delta:number){
        this.calendarService.stepMonth(delta);
        this.days = this.calendarService.getMonth();
        this.monthName = this.calendarService.getMonthName();
    }

    onDayTap(event: GestureEventData, day: IDayItem){
        let options: ModalDialogOptions = {
            viewContainerRef: this.viewContainerRef
        };
        this.modalService.showModal(DayMarkerComponent, options)
        .then((result:IDayMarker) => {
            day.marker = result;
        });
    }    

    onDayPan(event: PanGestureEventData) {
        // handle as a view pan (move)
        this.onPan(event);
    }
}
