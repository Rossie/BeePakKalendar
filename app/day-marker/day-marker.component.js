"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var calendar_service_1 = require("../services/calendar.service");
var DayMarkerComponent = (function () {
    function DayMarkerComponent(params) {
        this.params = params;
        this.markers = calendar_service_1.markers;
        this.colNum = 3;
        this.dayText = params.context.dayText;
        this.actMarker = params.context.day.marker;
        this.actualDay = params.context.day.date.format(calendar_service_1.FULL_DATE_FORMAT);
    }
    DayMarkerComponent.prototype.ngOnInit = function () { };
    DayMarkerComponent.prototype.compareDayMarkers = function (m1, m2) {
        return calendar_service_1.compareDayMarkers(m1, m2);
    };
    DayMarkerComponent.prototype.getCssClass = function (marker) {
        return marker.cssClass + (marker == this.actMarker ? 'marker-selected' : '');
    };
    DayMarkerComponent.prototype.getRow = function (i) {
        return Math.floor(i / this.colNum);
    };
    DayMarkerComponent.prototype.getCol = function (i) {
        return i % this.colNum;
    };
    DayMarkerComponent.prototype.onSelectMarker = function (marker) {
        this.actMarker = calendar_service_1.compareDayMarkers(marker, this.actMarker) ? null : marker;
    };
    DayMarkerComponent.prototype.onSave = function () {
        this.params.closeCallback({
            dayText: this.dayText,
            marker: this.actMarker
        });
    };
    DayMarkerComponent.prototype.onDelete = function () {
        this.params.closeCallback({
            marker: null
        });
    };
    DayMarkerComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'ns-day-marker',
            templateUrl: './day-marker.component.html',
            styleUrls: ['./day-marker.component.scss']
        }),
        __metadata("design:paramtypes", [modal_dialog_1.ModalDialogParams])
    ], DayMarkerComponent);
    return DayMarkerComponent;
}());
exports.DayMarkerComponent = DayMarkerComponent;
