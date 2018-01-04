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
            styleUrls: ['./view-month.component.css']
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions,
            calendar_service_1.CalendarService,
            modal_dialog_1.ModalDialogService,
            core_1.ViewContainerRef])
    ], ViewMonthComponent);
    return ViewMonthComponent;
}());
exports.ViewMonthComponent = ViewMonthComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy1tb250aC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ2aWV3LW1vbnRoLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFzSTtBQUN0SSxzREFBOEQ7QUFFOUQsd0RBQTRFO0FBSzVFLCtCQUFpQztBQUNqQyxrRUFBMkY7QUFDM0YsMkVBQXdFO0FBU3hFO0lBUUksNEJBQ1ksTUFBd0IsRUFDeEIsZUFBZ0MsRUFDaEMsWUFBZ0MsRUFDaEMsZ0JBQWtDO1FBSGxDLFdBQU0sR0FBTixNQUFNLENBQWtCO1FBQ3hCLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyxpQkFBWSxHQUFaLFlBQVksQ0FBb0I7UUFDaEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQVR0QyxTQUFJLEdBQWMsRUFBRSxDQUFDO1FBRTdCLGdFQUFnRTtRQUM1QyxhQUFRLEdBQXNDLElBQUksbUJBQVksRUFBRSxDQUFDO0lBUXJGLENBQUM7SUFFRCxxQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDNUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3pELENBQUM7SUFFRCxzQ0FBUyxHQUFULFVBQVUsS0FBWTtRQUNsQixJQUFJLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN0QyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDNUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3pELENBQUM7SUFFRCxxQ0FBUSxHQUFSLFVBQVMsS0FBdUIsRUFBRSxHQUFhO1FBQzNDLElBQUksT0FBTyxHQUF1QjtZQUM5QixnQkFBZ0IsRUFBRSxJQUFJLENBQUMsZ0JBQWdCO1NBQzFDLENBQUM7UUFDRixJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyx5Q0FBa0IsRUFBRSxPQUFPLENBQUM7YUFDdkQsSUFBSSxDQUFDLFVBQUMsTUFBaUI7WUFDcEIsR0FBRyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDeEIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQscUNBQVEsR0FBUixVQUFTLE1BQU07UUFDWCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBbENtQjtRQUFuQixhQUFNLENBQUMsVUFBVSxDQUFDO2tDQUFXLG1CQUFZO3dEQUEyQztJQU41RSxrQkFBa0I7UUFOOUIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsZUFBZTtZQUN6QixXQUFXLEVBQUUsNkJBQTZCO1lBQzFDLFNBQVMsRUFBRSxDQUFDLDRCQUE0QixDQUFDO1NBQzVDLENBQUM7eUNBVXNCLHlCQUFnQjtZQUNQLGtDQUFlO1lBQ2xCLGlDQUFrQjtZQUNkLHVCQUFnQjtPQVpyQyxrQkFBa0IsQ0F5QzlCO0lBQUQseUJBQUM7Q0FBQSxBQXpDRCxJQXlDQztBQXpDWSxnREFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBBZnRlclZpZXdJbml0LCBJbnB1dCwgT3V0cHV0LCBWaWV3Q29udGFpbmVyUmVmLCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcidcbmltcG9ydCB7IEdyaWRMYXlvdXQsIEl0ZW1TcGVjIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9sYXlvdXRzL2dyaWQtbGF5b3V0L2dyaWQtbGF5b3V0JztcbmltcG9ydCB7IENhbGVuZGFyU2VydmljZSwgSURheUl0ZW0sIElEYXlNYXJrZXIgfSBmcm9tICcuLi9jYWxlbmRhci5zZXJ2aWNlJztcbmltcG9ydCB7IExhYmVsIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9sYWJlbC9sYWJlbCc7XG5pbXBvcnQgeyBUb3VjaEdlc3R1cmVFdmVudERhdGEsIFBhbkdlc3R1cmVFdmVudERhdGEsIEdlc3R1cmVFdmVudERhdGEsIFBpbmNoR2VzdHVyZUV2ZW50RGF0YSB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvZ2VzdHVyZXMvZ2VzdHVyZXMnO1xuaW1wb3J0IHsgQm9yZGVyIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvYm9yZGVyXCI7XG5pbXBvcnQgeyBDb2xvciB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvY29sb3IvY29sb3InO1xuaW1wb3J0ICogYXMgbW9tZW50IGZyb20gJ21vbWVudCc7XG5pbXBvcnQgeyBNb2RhbERpYWxvZ1NlcnZpY2UsIE1vZGFsRGlhbG9nT3B0aW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9tb2RhbC1kaWFsb2dcIjtcbmltcG9ydCB7IERheU1hcmtlckNvbXBvbmVudCB9IGZyb20gJy4uL2RheS1tYXJrZXIvZGF5LW1hcmtlci5jb21wb25lbnQnO1xuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiAnbnMtdmlldy1tb250aCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL3ZpZXctbW9udGguY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL3ZpZXctbW9udGguY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFZpZXdNb250aENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgcHJpdmF0ZSBtb250aE5hbWU6c3RyaW5nO1xuICAgIHByaXZhdGUgYWN0TW9udGg6IG1vbWVudC5Nb21lbnQ7XG4gICAgcHJpdmF0ZSBkYXlzOklEYXlJdGVtW10gPSBbXTtcblxuICAgIC8vIGV2ZW50IGJyYWRjYXN0ZXIgdG8gb3V0ZXIgY29tcG9uZW50OiBpbWFnZS1jYWxlbmRhci5jb21wb25lbnRcbiAgICBAT3V0cHV0KCdpbm5lclBhbicpIGlubmVyUGFuOiBFdmVudEVtaXR0ZXI8UGFuR2VzdHVyZUV2ZW50RGF0YT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlckV4dGVuc2lvbnMsXG4gICAgICAgIHByaXZhdGUgY2FsZW5kYXJTZXJ2aWNlOiBDYWxlbmRhclNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgbW9kYWxTZXJ2aWNlOiBNb2RhbERpYWxvZ1NlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZixcbiAgICApIHsgXG4gICAgfVxuICAgIFxuICAgIG5nT25Jbml0KCkgeyBcbiAgICAgICAgdGhpcy5hY3RNb250aCA9IG1vbWVudCgpO1xuICAgICAgICB0aGlzLmRheXMgPSB0aGlzLmNhbGVuZGFyU2VydmljZS5nZXRNb250aCgpO1xuICAgICAgICB0aGlzLm1vbnRoTmFtZSA9IHRoaXMuY2FsZW5kYXJTZXJ2aWNlLmdldE1vbnRoTmFtZSgpO1xuICAgIH1cbiAgICBcbiAgICBzdGVwTW9udGgoZGVsdGE6bnVtYmVyKXtcbiAgICAgICAgdGhpcy5jYWxlbmRhclNlcnZpY2Uuc3RlcE1vbnRoKGRlbHRhKTtcbiAgICAgICAgdGhpcy5kYXlzID0gdGhpcy5jYWxlbmRhclNlcnZpY2UuZ2V0TW9udGgoKTtcbiAgICAgICAgdGhpcy5tb250aE5hbWUgPSB0aGlzLmNhbGVuZGFyU2VydmljZS5nZXRNb250aE5hbWUoKTtcbiAgICB9XG5cbiAgICBvbkRheVRhcChldmVudDogR2VzdHVyZUV2ZW50RGF0YSwgZGF5OiBJRGF5SXRlbSl7XG4gICAgICAgIGxldCBvcHRpb25zOiBNb2RhbERpYWxvZ09wdGlvbnMgPSB7XG4gICAgICAgICAgICB2aWV3Q29udGFpbmVyUmVmOiB0aGlzLnZpZXdDb250YWluZXJSZWZcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5tb2RhbFNlcnZpY2Uuc2hvd01vZGFsKERheU1hcmtlckNvbXBvbmVudCwgb3B0aW9ucylcbiAgICAgICAgLnRoZW4oKHJlc3VsdDpJRGF5TWFya2VyKSA9PiB7XG4gICAgICAgICAgICBkYXkubWFya2VyID0gcmVzdWx0O1xuICAgICAgICB9KTtcbiAgICB9ICAgIFxuXG4gICAgb25EYXlQYW4oJGV2ZW50KSB7XG4gICAgICAgIHRoaXMuaW5uZXJQYW4uZW1pdCgkZXZlbnQpO1xuICAgIH1cbn1cbiJdfQ==