"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var calendar_service_1 = require("../calendar.service");
var moment = require("moment");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var day_marker_component_1 = require("../day-marker/day-marker.component");
var ViewMonthComponent = (function () {
    function ViewMonthComponent(router, calendarService, modalService, viewContainerRef) {
        this.router = router;
        this.calendarService = calendarService;
        this.modalService = modalService;
        this.viewContainerRef = viewContainerRef;
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
        var options = {
            viewContainerRef: this.viewContainerRef
        };
        this.modalService.showModal(day_marker_component_1.DayMarkerComponent, options)
            .then(function (result) {
            day.marker = result;
        });
    };
    ViewMonthComponent.prototype.onDayPan = function ($event) {
        this.innerPan.emit($event);
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
            core_1.ViewContainerRef])
    ], ViewMonthComponent);
    return ViewMonthComponent;
}());
exports.ViewMonthComponent = ViewMonthComponent;
