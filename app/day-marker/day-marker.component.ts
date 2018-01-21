import { Component, OnInit, ViewChild, ElementRef } from '@angular/core'
import { ModalDialogParams } from "nativescript-angular/modal-dialog";
import { IDayMarker, markers } from '../services/calendar.service';


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
    public marker: IDayMarker;

    constructor(
        private params: ModalDialogParams,
    ) { 
        this.dayText = params.context.dayText,
        this.marker = params.context.marker
    }

    ngOnInit() { }

    onTap(marker: IDayMarker) {
        this.params.closeCallback({
            marker: marker,
            dayText: this.dayText            
        });
    }

    getRow(i: number) {
        return Math.floor(i / this.colNum);
    }

    getCol(i: number) {
        return i % this.colNum;
    }

    onSave() {
        this.params.closeCallback({
            dayText: this.dayText,
            marker: this.marker
        });
    }
}
