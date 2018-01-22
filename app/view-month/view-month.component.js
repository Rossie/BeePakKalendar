"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var calendar_service_1 = require("../services/calendar.service");
var moment = require("moment");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var day_marker_component_1 = require("../day-marker/day-marker.component");
var _ = require("lodash");
var settings_service_1 = require("../services/settings.service");
var ViewMonthComponent = (function () {
    function ViewMonthComponent(router, calendarService, modalService, viewContainerRef, settings) {
        this.router = router;
        this.calendarService = calendarService;
        this.modalService = modalService;
        this.viewContainerRef = viewContainerRef;
        this.settings = settings;
        this.days = [];
        // event bradcaster to outer component: image-calendar.component
        this.innerPan = new core_1.EventEmitter();
    }
    ViewMonthComponent.prototype.ngOnInit = function () {
        this.actMonth = moment();
        this.days = this.calendarService.getMonth();
        this.monthName = this.calendarService.getMonthName();
    };
    ViewMonthComponent.prototype.stepMonth = function (delta) {
        this.calendarService.stepMonth(delta);
        this.days = this.calendarService.getMonth();
        this.monthName = this.calendarService.getMonthName();
    };
    ViewMonthComponent.prototype.onDayTap = function (event, day) {
        var _this = this;
        var options = {
            viewContainerRef: this.viewContainerRef,
            context: {
                dayText: this.settings.getDayText(day.date),
                day: day,
            }
        };
        this.modalService.showModal(day_marker_component_1.DayMarkerComponent, options)
            .then(function (result) {
            if (!result) {
                return;
            } // closed with no selection
            if (result.marker) {
                day.marker = result.marker; // update view
                _this.settings.setDayMarker(day.date, result.marker); // store marker
            }
            if (result.dayText) {
                day.text = result.dayText; // update view
                _this.settings.setDayText(day.date, result.dayText); // store text
            }
            // Delete marker and text
            if (result.marker === null) {
                day.marker = day.text = null; // update view
                _this.settings.removeDayMarker(day.date);
                _this.settings.removeDayText(day.date);
            }
        });
    };
    ViewMonthComponent.prototype.onDayPan = function ($event) {
        this.innerPan.emit($event);
    };
    ViewMonthComponent.prototype.getCssClass = function (day) {
        var markercss = _.get(day, "marker.cssClass", '');
        var daytextcss = _.get(day, "text", false) ? 'has-day-text' : '';
        console.log(JSON.stringify(day), markercss, daytextcss);
        return calendar_service_1.markers + ' ' + daytextcss;
    };
    __decorate([
        core_1.Output('innerPan'),
        __metadata("design:type", core_1.EventEmitter)
    ], ViewMonthComponent.prototype, "innerPan", void 0);
    ViewMonthComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'ns-view-month',
            templateUrl: './view-month.component.html',
            styleUrls: ['./view-month.component.scss']
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions,
            calendar_service_1.CalendarService,
            modal_dialog_1.ModalDialogService,
            core_1.ViewContainerRef,
            settings_service_1.SettingsService])
    ], ViewMonthComponent);
    return ViewMonthComponent;
}());
exports.ViewMonthComponent = ViewMonthComponent;
