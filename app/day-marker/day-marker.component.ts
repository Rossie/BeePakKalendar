import { Component, OnInit, ViewChild, ElementRef } from '@angular/core'
import { ModalDialogParams } from "nativescript-angular/modal-dialog";
import { IDayMarker, markers, FULL_DATE_FORMAT, compareDayMarkers } from '../services/calendar.service';
import { Moment } from 'moment';


@Component({
    moduleId: module.id,
    selector: 'ns-day-marker',
    templateUrl: './day-marker.component.html',
    styleUrls: ['./day-marker.component.scss']
})
export class DayMarkerComponent implements OnInit {
    public markers = markers;
    private colNum: number = 3;
    public dayText: string;
    public actMarker: IDayMarker;
    public actualDay: string;

    constructor(
        private params: ModalDialogParams,
    ) {
        this.dayText = params.context.dayText;
        this.actMarker = params.context.day.marker;
        this.actualDay = (<Moment>params.context.day.date).format(FULL_DATE_FORMAT);
    }

    ngOnInit() { }

    compareDayMarkers(m1, m2) {
        return compareDayMarkers(m1, m2);
    }

    getCssClass(marker: IDayMarker) {
        return marker.cssClass + (marker == this.actMarker ? 'marker-selected' : '');
    }

    getRow(i: number) {
        return Math.floor(i / this.colNum);
    }

    getCol(i: number) {
        return i % this.colNum;
    }

    onSelectMarker(marker) {
        this.actMarker = compareDayMarkers(marker, this.actMarker) ? null : marker;
    }

    onSave() {
        this.params.closeCallback({
            dayText: this.dayText,
            marker: this.actMarker
        });
    }

    onDelete() {
        this.params.closeCallback({
            marker: null
        });
    }
}
