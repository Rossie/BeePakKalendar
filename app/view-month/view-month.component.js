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
        console.log('view-month.component tap');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy1tb250aC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ2aWV3LW1vbnRoLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFzSTtBQUN0SSxzREFBOEQ7QUFFOUQsd0RBQTRFO0FBSzVFLCtCQUFpQztBQUNqQyxrRUFBMkY7QUFDM0YsMkVBQXdFO0FBU3hFO0lBUUksNEJBQ1ksTUFBd0IsRUFDeEIsZUFBZ0MsRUFDaEMsWUFBZ0MsRUFDaEMsZ0JBQWtDO1FBSGxDLFdBQU0sR0FBTixNQUFNLENBQWtCO1FBQ3hCLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyxpQkFBWSxHQUFaLFlBQVksQ0FBb0I7UUFDaEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQVR0QyxTQUFJLEdBQWMsRUFBRSxDQUFDO1FBRTdCLGdFQUFnRTtRQUM1QyxhQUFRLEdBQXNDLElBQUksbUJBQVksRUFBRSxDQUFDO0lBUXJGLENBQUM7SUFFRCxxQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDNUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3pELENBQUM7SUFFRCxzQ0FBUyxHQUFULFVBQVUsS0FBWTtRQUNsQixJQUFJLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN0QyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDNUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3pELENBQUM7SUFFRCxxQ0FBUSxHQUFSLFVBQVMsS0FBdUIsRUFBRSxHQUFhO1FBQzNDLElBQUksT0FBTyxHQUF1QjtZQUM5QixnQkFBZ0IsRUFBRSxJQUFJLENBQUMsZ0JBQWdCO1NBQzFDLENBQUM7UUFDRixJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyx5Q0FBa0IsRUFBRSxPQUFPLENBQUM7YUFDdkQsSUFBSSxDQUFDLFVBQUMsTUFBaUI7WUFDcEIsR0FBRyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDeEIsQ0FBQyxDQUFDLENBQUM7UUFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLDBCQUEwQixDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUVELHFDQUFRLEdBQVIsVUFBUyxNQUFNO1FBQ1gsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQW5DbUI7UUFBbkIsYUFBTSxDQUFDLFVBQVUsQ0FBQztrQ0FBVyxtQkFBWTt3REFBMkM7SUFONUUsa0JBQWtCO1FBTjlCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGVBQWU7WUFDekIsV0FBVyxFQUFFLDZCQUE2QjtZQUMxQyxTQUFTLEVBQUUsQ0FBQyw0QkFBNEIsQ0FBQztTQUM1QyxDQUFDO3lDQVVzQix5QkFBZ0I7WUFDUCxrQ0FBZTtZQUNsQixpQ0FBa0I7WUFDZCx1QkFBZ0I7T0FackMsa0JBQWtCLENBMEM5QjtJQUFELHlCQUFDO0NBQUEsQUExQ0QsSUEwQ0M7QUExQ1ksZ0RBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgQWZ0ZXJWaWV3SW5pdCwgSW5wdXQsIE91dHB1dCwgVmlld0NvbnRhaW5lclJlZiwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInXG5pbXBvcnQgeyBHcmlkTGF5b3V0LCBJdGVtU3BlYyB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvbGF5b3V0cy9ncmlkLWxheW91dC9ncmlkLWxheW91dCc7XG5pbXBvcnQgeyBDYWxlbmRhclNlcnZpY2UsIElEYXlJdGVtLCBJRGF5TWFya2VyIH0gZnJvbSAnLi4vY2FsZW5kYXIuc2VydmljZSc7XG5pbXBvcnQgeyBMYWJlbCB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvbGFiZWwvbGFiZWwnO1xuaW1wb3J0IHsgVG91Y2hHZXN0dXJlRXZlbnREYXRhLCBQYW5HZXN0dXJlRXZlbnREYXRhLCBHZXN0dXJlRXZlbnREYXRhLCBQaW5jaEdlc3R1cmVFdmVudERhdGEgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL2dlc3R1cmVzL2dlc3R1cmVzJztcbmltcG9ydCB7IEJvcmRlciB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2JvcmRlclwiO1xuaW1wb3J0IHsgQ29sb3IgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL2NvbG9yL2NvbG9yJztcbmltcG9ydCAqIGFzIG1vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0IHsgTW9kYWxEaWFsb2dTZXJ2aWNlLCBNb2RhbERpYWxvZ09wdGlvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbW9kYWwtZGlhbG9nXCI7XG5pbXBvcnQgeyBEYXlNYXJrZXJDb21wb25lbnQgfSBmcm9tICcuLi9kYXktbWFya2VyL2RheS1tYXJrZXIuY29tcG9uZW50JztcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogJ25zLXZpZXctbW9udGgnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi92aWV3LW1vbnRoLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi92aWV3LW1vbnRoLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBWaWV3TW9udGhDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHByaXZhdGUgbW9udGhOYW1lOnN0cmluZztcbiAgICBwcml2YXRlIGFjdE1vbnRoOiBtb21lbnQuTW9tZW50O1xuICAgIHByaXZhdGUgZGF5czpJRGF5SXRlbVtdID0gW107XG5cbiAgICAvLyBldmVudCBicmFkY2FzdGVyIHRvIG91dGVyIGNvbXBvbmVudDogaW1hZ2UtY2FsZW5kYXIuY29tcG9uZW50XG4gICAgQE91dHB1dCgnaW5uZXJQYW4nKSBpbm5lclBhbjogRXZlbnRFbWl0dGVyPFBhbkdlc3R1cmVFdmVudERhdGE+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXJFeHRlbnNpb25zLFxuICAgICAgICBwcml2YXRlIGNhbGVuZGFyU2VydmljZTogQ2FsZW5kYXJTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIG1vZGFsU2VydmljZTogTW9kYWxEaWFsb2dTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYsXG4gICAgKSB7IFxuICAgIH1cbiAgICBcbiAgICBuZ09uSW5pdCgpIHsgXG4gICAgICAgIHRoaXMuYWN0TW9udGggPSBtb21lbnQoKTtcbiAgICAgICAgdGhpcy5kYXlzID0gdGhpcy5jYWxlbmRhclNlcnZpY2UuZ2V0TW9udGgoKTtcbiAgICAgICAgdGhpcy5tb250aE5hbWUgPSB0aGlzLmNhbGVuZGFyU2VydmljZS5nZXRNb250aE5hbWUoKTtcbiAgICB9XG4gICAgXG4gICAgc3RlcE1vbnRoKGRlbHRhOm51bWJlcil7XG4gICAgICAgIHRoaXMuY2FsZW5kYXJTZXJ2aWNlLnN0ZXBNb250aChkZWx0YSk7XG4gICAgICAgIHRoaXMuZGF5cyA9IHRoaXMuY2FsZW5kYXJTZXJ2aWNlLmdldE1vbnRoKCk7XG4gICAgICAgIHRoaXMubW9udGhOYW1lID0gdGhpcy5jYWxlbmRhclNlcnZpY2UuZ2V0TW9udGhOYW1lKCk7XG4gICAgfVxuXG4gICAgb25EYXlUYXAoZXZlbnQ6IEdlc3R1cmVFdmVudERhdGEsIGRheTogSURheUl0ZW0pe1xuICAgICAgICBsZXQgb3B0aW9uczogTW9kYWxEaWFsb2dPcHRpb25zID0ge1xuICAgICAgICAgICAgdmlld0NvbnRhaW5lclJlZjogdGhpcy52aWV3Q29udGFpbmVyUmVmXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMubW9kYWxTZXJ2aWNlLnNob3dNb2RhbChEYXlNYXJrZXJDb21wb25lbnQsIG9wdGlvbnMpXG4gICAgICAgIC50aGVuKChyZXN1bHQ6SURheU1hcmtlcikgPT4ge1xuICAgICAgICAgICAgZGF5Lm1hcmtlciA9IHJlc3VsdDtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnNvbGUubG9nKCd2aWV3LW1vbnRoLmNvbXBvbmVudCB0YXAnKTsgICAgICAgIFxuICAgIH0gICAgXG5cbiAgICBvbkRheVBhbigkZXZlbnQpIHtcbiAgICAgICAgdGhpcy5pbm5lclBhbi5lbWl0KCRldmVudCk7XG4gICAgfVxufVxuIl19