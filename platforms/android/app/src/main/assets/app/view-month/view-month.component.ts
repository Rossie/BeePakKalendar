import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, Input, Output, ViewContainerRef, EventEmitter } from '@angular/core'
import { RouterExtensions } from 'nativescript-angular/router'
import { GridLayout, ItemSpec } from 'tns-core-modules/ui/layouts/grid-layout/grid-layout';
import { CalendarService, IDayItem, IDayMarker } from '../calendar.service';
import { Label } from 'tns-core-modules/ui/label/label';
import { TouchGestureEventData, PanGestureEventData, GestureEventData, PinchGestureEventData } from 'tns-core-modules/ui/gestures/gestures';
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
    private monthName:string;
    private actMonth: moment.Moment;
    private days:IDayItem[] = [];

    // event bradcaster to outer component: image-calendar.component
    @Output('innerPan') innerPan: EventEmitter<PanGestureEventData> = new EventEmitter();

    constructor(
        private router: RouterExtensions,
        private calendarService: CalendarService,
        private modalService: ModalDialogService,
        private viewContainerRef: ViewContainerRef,
    ) { 
    }
    
    ngOnInit() { 
        this.actMonth = moment();
        this.days = this.calendarService.getMonth();
        this.monthName = this.calendarService.getMonthName();
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

    onDayPan($event) {
        this.innerPan.emit($event);
    }
}
