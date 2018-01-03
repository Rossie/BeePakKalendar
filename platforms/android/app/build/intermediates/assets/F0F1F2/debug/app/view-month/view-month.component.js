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
        this.monthDelta = 0;
        this.calendar_x = 0;
        this.calendar_y = 0;
        this.calendarTap_x = 0;
        this.calendarTap_y = 0;
        // private grid: GridLayout;
        this.days = [];
    }
    ViewMonthComponent.prototype.ngOnInit = function () {
        // this.grid = this.calendarGridRef.nativeElement;
        this.actMonth = moment();
        this.days = this.calendarService.getMonth();
        this.monthName = this.calendarService.getMonthName();
    };
    ViewMonthComponent.prototype.onPan = function (event) {
        // console.log(event.eventName, event.state);
        switch (event.state) {
            case 1:
                this.calendarTap_x = this.calendar_x;
                this.calendarTap_y = this.calendar_y;
                break;
            case 2:
                this.calendar_x = this.calendarTap_x + event.deltaX;
                this.calendar_y = this.calendarTap_y + event.deltaY;
                break;
        }
    };
    ViewMonthComponent.prototype.onTouch = function (args) {
        // console.log(args.action);
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
    ViewMonthComponent.prototype.onDayPan = function (event) {
        // handle as a view pan (move)
        this.onPan(event);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], ViewMonthComponent.prototype, "monthDelta", void 0);
    __decorate([
        core_1.ViewChild('calendarGrid'),
        __metadata("design:type", core_1.ElementRef)
    ], ViewMonthComponent.prototype, "calendarGridRef", void 0);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy1tb250aC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ2aWV3LW1vbnRoLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF3SDtBQUN4SCxzREFBOEQ7QUFFOUQsd0RBQTRFO0FBTTVFLCtCQUFpQztBQUNqQyxrRUFBMkY7QUFDM0YsMkVBQXdFO0FBU3hFO0lBYUksNEJBQ1ksTUFBd0IsRUFDeEIsZUFBZ0MsRUFDaEMsWUFBZ0MsRUFDaEMsZ0JBQWtDO1FBSGxDLFdBQU0sR0FBTixNQUFNLENBQWtCO1FBQ3hCLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyxpQkFBWSxHQUFaLFlBQVksQ0FBb0I7UUFDaEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQWhCckMsZUFBVSxHQUFXLENBQUMsQ0FBQztRQUt4QixlQUFVLEdBQVUsQ0FBQyxDQUFDO1FBQ3RCLGVBQVUsR0FBVSxDQUFDLENBQUM7UUFDdEIsa0JBQWEsR0FBVSxDQUFDLENBQUM7UUFDekIsa0JBQWEsR0FBVSxDQUFDLENBQUM7UUFDakMsNEJBQTRCO1FBQ3BCLFNBQUksR0FBYyxFQUFFLENBQUM7SUFRN0IsQ0FBQztJQUVELHFDQUFRLEdBQVI7UUFDSSxrREFBa0Q7UUFDbEQsSUFBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDNUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3pELENBQUM7SUFFRCxrQ0FBSyxHQUFMLFVBQU0sS0FBMEI7UUFDNUIsNkNBQTZDO1FBQzdDLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ3BCLEtBQUssQ0FBQztnQkFDSixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7Z0JBQ3JDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztnQkFDckMsS0FBSyxDQUFDO1lBQ1IsS0FBSyxDQUFDO2dCQUNKLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDO2dCQUNwRCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQztnQkFDcEQsS0FBSyxDQUFDO1FBQ1YsQ0FBQztJQUNMLENBQUM7SUFFRCxvQ0FBTyxHQUFQLFVBQVEsSUFBMkI7UUFDL0IsNEJBQTRCO0lBQ2hDLENBQUM7SUFFRCxzQ0FBUyxHQUFULFVBQVUsS0FBWTtRQUNsQixJQUFJLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN0QyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDNUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3pELENBQUM7SUFFRCxxQ0FBUSxHQUFSLFVBQVMsS0FBdUIsRUFBRSxHQUFhO1FBQzNDLElBQUksT0FBTyxHQUF1QjtZQUM5QixnQkFBZ0IsRUFBRSxJQUFJLENBQUMsZ0JBQWdCO1NBQzFDLENBQUM7UUFDRixJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyx5Q0FBa0IsRUFBRSxPQUFPLENBQUM7YUFDdkQsSUFBSSxDQUFDLFVBQUMsTUFBaUI7WUFDcEIsR0FBRyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDeEIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQscUNBQVEsR0FBUixVQUFTLEtBQTBCO1FBQy9CLDhCQUE4QjtRQUM5QixJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3RCLENBQUM7SUFoRVE7UUFBUixZQUFLLEVBQUU7OzBEQUF3QjtJQUNMO1FBQTFCLGdCQUFTLENBQUMsY0FBYyxDQUFDO2tDQUFrQixpQkFBVTsrREFBQztJQUY5QyxrQkFBa0I7UUFOOUIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsZUFBZTtZQUN6QixXQUFXLEVBQUUsNkJBQTZCO1lBQzFDLFNBQVMsRUFBRSxDQUFDLDRCQUE0QixDQUFDO1NBQzVDLENBQUM7eUNBZXNCLHlCQUFnQjtZQUNQLGtDQUFlO1lBQ2xCLGlDQUFrQjtZQUNkLHVCQUFnQjtPQWpCckMsa0JBQWtCLENBa0U5QjtJQUFELHlCQUFDO0NBQUEsQUFsRUQsSUFrRUM7QUFsRVksZ0RBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgQWZ0ZXJWaWV3SW5pdCwgSW5wdXQsIE91dHB1dCwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJ1xuaW1wb3J0IHsgR3JpZExheW91dCwgSXRlbVNwZWMgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL2xheW91dHMvZ3JpZC1sYXlvdXQvZ3JpZC1sYXlvdXQnO1xuaW1wb3J0IHsgQ2FsZW5kYXJTZXJ2aWNlLCBJRGF5SXRlbSwgSURheU1hcmtlciB9IGZyb20gJy4uL2NhbGVuZGFyLnNlcnZpY2UnO1xuaW1wb3J0IHsgTGFiZWwgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL2xhYmVsL2xhYmVsJztcbmltcG9ydCB7IFRvdWNoR2VzdHVyZUV2ZW50RGF0YSwgUGFuR2VzdHVyZUV2ZW50RGF0YSwgR2VzdHVyZUV2ZW50RGF0YSB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvZ2VzdHVyZXMvZ2VzdHVyZXMnO1xuaW1wb3J0IHsgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZS9zcmMvZXZlbnRfZW1pdHRlcic7XG5pbXBvcnQgeyBCb3JkZXIgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9ib3JkZXJcIjtcbmltcG9ydCB7IENvbG9yIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy9jb2xvci9jb2xvcic7XG5pbXBvcnQgKiBhcyBtb21lbnQgZnJvbSAnbW9tZW50JztcbmltcG9ydCB7IE1vZGFsRGlhbG9nU2VydmljZSwgTW9kYWxEaWFsb2dPcHRpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL21vZGFsLWRpYWxvZ1wiO1xuaW1wb3J0IHsgRGF5TWFya2VyQ29tcG9uZW50IH0gZnJvbSAnLi4vZGF5LW1hcmtlci9kYXktbWFya2VyLmNvbXBvbmVudCc7XG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6ICducy12aWV3LW1vbnRoJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vdmlldy1tb250aC5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vdmlldy1tb250aC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgVmlld01vbnRoQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBASW5wdXQoKSBtb250aERlbHRhOiBudW1iZXIgPSAwO1xuICAgIEBWaWV3Q2hpbGQoJ2NhbGVuZGFyR3JpZCcpIGNhbGVuZGFyR3JpZFJlZjogRWxlbWVudFJlZjtcbiAgICBcbiAgICBwcml2YXRlIG1vbnRoTmFtZTpzdHJpbmc7XG4gICAgcHJpdmF0ZSBhY3RNb250aDogbW9tZW50Lk1vbWVudDtcbiAgICBwcml2YXRlIGNhbGVuZGFyX3g6bnVtYmVyID0gMDtcbiAgICBwcml2YXRlIGNhbGVuZGFyX3k6bnVtYmVyID0gMDtcbiAgICBwcml2YXRlIGNhbGVuZGFyVGFwX3g6bnVtYmVyID0gMDtcbiAgICBwcml2YXRlIGNhbGVuZGFyVGFwX3k6bnVtYmVyID0gMDtcbiAgICAvLyBwcml2YXRlIGdyaWQ6IEdyaWRMYXlvdXQ7XG4gICAgcHJpdmF0ZSBkYXlzOklEYXlJdGVtW10gPSBbXTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyRXh0ZW5zaW9ucyxcbiAgICAgICAgcHJpdmF0ZSBjYWxlbmRhclNlcnZpY2U6IENhbGVuZGFyU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBtb2RhbFNlcnZpY2U6IE1vZGFsRGlhbG9nU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSB2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmXG4gICAgKSB7IFxuICAgIH1cbiAgICBcbiAgICBuZ09uSW5pdCgpIHsgXG4gICAgICAgIC8vIHRoaXMuZ3JpZCA9IHRoaXMuY2FsZW5kYXJHcmlkUmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgIHRoaXMuYWN0TW9udGggPSBtb21lbnQoKTtcbiAgICAgICAgdGhpcy5kYXlzID0gdGhpcy5jYWxlbmRhclNlcnZpY2UuZ2V0TW9udGgoKTtcbiAgICAgICAgdGhpcy5tb250aE5hbWUgPSB0aGlzLmNhbGVuZGFyU2VydmljZS5nZXRNb250aE5hbWUoKTtcbiAgICB9XG5cbiAgICBvblBhbihldmVudDogUGFuR2VzdHVyZUV2ZW50RGF0YSkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhldmVudC5ldmVudE5hbWUsIGV2ZW50LnN0YXRlKTtcbiAgICAgICAgc3dpdGNoIChldmVudC5zdGF0ZSkge1xuICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgIHRoaXMuY2FsZW5kYXJUYXBfeCA9IHRoaXMuY2FsZW5kYXJfeDtcbiAgICAgICAgICAgIHRoaXMuY2FsZW5kYXJUYXBfeSA9IHRoaXMuY2FsZW5kYXJfeTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIHRoaXMuY2FsZW5kYXJfeCA9IHRoaXMuY2FsZW5kYXJUYXBfeCArIGV2ZW50LmRlbHRhWDtcbiAgICAgICAgICAgIHRoaXMuY2FsZW5kYXJfeSA9IHRoaXMuY2FsZW5kYXJUYXBfeSArIGV2ZW50LmRlbHRhWTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIG9uVG91Y2goYXJnczogVG91Y2hHZXN0dXJlRXZlbnREYXRhKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGFyZ3MuYWN0aW9uKTtcbiAgICB9XG4gICAgXG4gICAgc3RlcE1vbnRoKGRlbHRhOm51bWJlcil7XG4gICAgICAgIHRoaXMuY2FsZW5kYXJTZXJ2aWNlLnN0ZXBNb250aChkZWx0YSk7XG4gICAgICAgIHRoaXMuZGF5cyA9IHRoaXMuY2FsZW5kYXJTZXJ2aWNlLmdldE1vbnRoKCk7XG4gICAgICAgIHRoaXMubW9udGhOYW1lID0gdGhpcy5jYWxlbmRhclNlcnZpY2UuZ2V0TW9udGhOYW1lKCk7XG4gICAgfVxuXG4gICAgb25EYXlUYXAoZXZlbnQ6IEdlc3R1cmVFdmVudERhdGEsIGRheTogSURheUl0ZW0pe1xuICAgICAgICBsZXQgb3B0aW9uczogTW9kYWxEaWFsb2dPcHRpb25zID0ge1xuICAgICAgICAgICAgdmlld0NvbnRhaW5lclJlZjogdGhpcy52aWV3Q29udGFpbmVyUmVmXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMubW9kYWxTZXJ2aWNlLnNob3dNb2RhbChEYXlNYXJrZXJDb21wb25lbnQsIG9wdGlvbnMpXG4gICAgICAgIC50aGVuKChyZXN1bHQ6SURheU1hcmtlcikgPT4ge1xuICAgICAgICAgICAgZGF5Lm1hcmtlciA9IHJlc3VsdDtcbiAgICAgICAgfSk7XG4gICAgfSAgICBcblxuICAgIG9uRGF5UGFuKGV2ZW50OiBQYW5HZXN0dXJlRXZlbnREYXRhKSB7XG4gICAgICAgIC8vIGhhbmRsZSBhcyBhIHZpZXcgcGFuIChtb3ZlKVxuICAgICAgICB0aGlzLm9uUGFuKGV2ZW50KTtcbiAgICB9XG59XG4iXX0=