import { Component, OnInit, ViewChild, ElementRef } from '@angular/core'
import { ModalDialogParams } from "nativescript-angular/modal-dialog";
import { IDayMarker, markers } from '../calendar.service';


@Component({
    moduleId: module.id,
    selector: 'ns-day-marker',
    templateUrl: './day-marker.component.html',
    styleUrls: ['./day-marker.component.scss']
})
export class DayMarkerComponent implements OnInit {

    public markers = markers;
    private colNum: number = 3;

    constructor(
        private params: ModalDialogParams,
    ) { }

    ngOnInit() { }

    onTap(marker: IDayMarker) {
        this.params.closeCallback(marker);
    }

    getRow(i: number) {
        return Math.floor(i / this.colNum);
    }

    getCol(i: number) {
        return i % this.colNum;
    }
}
