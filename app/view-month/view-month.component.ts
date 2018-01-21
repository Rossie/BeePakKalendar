import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, Input, Output, ViewContainerRef, EventEmitter } from '@angular/core'
import { RouterExtensions } from 'nativescript-angular/router'
import { GridLayout, ItemSpec } from 'tns-core-modules/ui/layouts/grid-layout/grid-layout';
import { CalendarService, IDayItem, IDayMarker, markers } from '../services/calendar.service';
import { Label } from 'tns-core-modules/ui/label/label';
import { TouchGestureEventData, PanGestureEventData, GestureEventData, PinchGestureEventData } from 'tns-core-modules/ui/gestures/gestures';
import { Border } from "tns-core-modules/ui/border";
import { Color } from 'tns-core-modules/color/color';
import * as moment from 'moment';
import { ModalDialogService, ModalDialogOptions } from "nativescript-angular/modal-dialog";
import { DayMarkerComponent } from '../day-marker/day-marker.component';
import * as _ from 'lodash';
import { SettingsService } from '../services/settings.service';

@Component({
    moduleId: module.id,
    selector: 'ns-view-month',
    templateUrl: './view-month.component.html',
    styleUrls: ['./view-month.component.scss']
})
export class ViewMonthComponent implements OnInit {
    public monthName:string;
    public actMonth: moment.Moment;
    public days:IDayItem[] = [];

    // event bradcaster to outer component: image-calendar.component
    @Output('innerPan') innerPan: EventEmitter<PanGestureEventData> = new EventEmitter();

    constructor(
        private router: RouterExtensions,
        private calendarService: CalendarService,
        private modalService: ModalDialogService,
        private viewContainerRef: ViewContainerRef,
        private settings: SettingsService,
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
            viewContainerRef: this.viewContainerRef,
            context: {
                dayText: this.settings.getDayText(day.date),
                marker: day.marker
            }
        };
        this.modalService.showModal(DayMarkerComponent, options)
        .then((result) => {
            if (result.marker) {
                day.marker = result.marker; // update view
                this.settings.setDayMarker(day.date, result.marker); // store marker
            }

            if (result.dayText) {
                day.text = result.dayText; // update view
                this.settings.setDayText(day.date, result.dayText); // store text
            }

            // Delete marker and text
            if (result.marker === null) {
                day.marker = day.text = null; // update view
                this.settings.removeDayMarker(day.date);
                this.settings.removeDayText(day.date);
            }
        });
    }    

    onDayPan($event) {
        this.innerPan.emit($event);
    }

    getCssClass(day:IDayItem){
        let markercss = _.get(day, "marker.cssClass", '');
        let daytextcss = _.get(day, "text", false) ? 'has-day-text' : '';
        console.log(JSON.stringify(day), markercss, daytextcss);
        return markers+' '+daytextcss;
    }
}
