"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var calendar_service_1 = require("../services/calendar.service");
var moment = require("moment");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var day_marker_component_1 = require("../day-marker/day-marker.component");
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
            viewContainerRef: this.viewContainerRef
        };
        this.modalService.showModal(day_marker_component_1.DayMarkerComponent, options)
            .then(function (result) {
            day.marker = result;
            _this.settings.setDay(day.date, result);
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
            core_1.ViewContainerRef,
            settings_service_1.SettingsService])
    ], ViewMonthComponent);
    return ViewMonthComponent;
}());
exports.ViewMonthComponent = ViewMonthComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy1tb250aC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ2aWV3LW1vbnRoLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFzSTtBQUN0SSxzREFBOEQ7QUFFOUQsaUVBQXFGO0FBS3JGLCtCQUFpQztBQUNqQyxrRUFBMkY7QUFDM0YsMkVBQXdFO0FBRXhFLGlFQUErRDtBQVEvRDtJQVFJLDRCQUNZLE1BQXdCLEVBQ3hCLGVBQWdDLEVBQ2hDLFlBQWdDLEVBQ2hDLGdCQUFrQyxFQUNsQyxRQUF5QjtRQUp6QixXQUFNLEdBQU4sTUFBTSxDQUFrQjtRQUN4QixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsaUJBQVksR0FBWixZQUFZLENBQW9CO1FBQ2hDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsYUFBUSxHQUFSLFFBQVEsQ0FBaUI7UUFWOUIsU0FBSSxHQUFjLEVBQUUsQ0FBQztRQUU1QixnRUFBZ0U7UUFDNUMsYUFBUSxHQUFzQyxJQUFJLG1CQUFZLEVBQUUsQ0FBQztJQVNyRixDQUFDO0lBRUQscUNBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzVDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN6RCxDQUFDO0lBRUQsc0NBQVMsR0FBVCxVQUFVLEtBQVk7UUFDbEIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdEMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzVDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN6RCxDQUFDO0lBRUQscUNBQVEsR0FBUixVQUFTLEtBQXVCLEVBQUUsR0FBYTtRQUEvQyxpQkFTQztRQVJHLElBQUksT0FBTyxHQUF1QjtZQUM5QixnQkFBZ0IsRUFBRSxJQUFJLENBQUMsZ0JBQWdCO1NBQzFDLENBQUM7UUFDRixJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyx5Q0FBa0IsRUFBRSxPQUFPLENBQUM7YUFDdkQsSUFBSSxDQUFDLFVBQUMsTUFBaUI7WUFDcEIsR0FBRyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7WUFDcEIsS0FBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztRQUMzQyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxxQ0FBUSxHQUFSLFVBQVMsTUFBTTtRQUNYLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFwQ21CO1FBQW5CLGFBQU0sQ0FBQyxVQUFVLENBQUM7a0NBQVcsbUJBQVk7d0RBQTJDO0lBTjVFLGtCQUFrQjtRQU45QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxlQUFlO1lBQ3pCLFdBQVcsRUFBRSw2QkFBNkI7WUFDMUMsU0FBUyxFQUFFLENBQUMsNkJBQTZCLENBQUM7U0FDN0MsQ0FBQzt5Q0FVc0IseUJBQWdCO1lBQ1Asa0NBQWU7WUFDbEIsaUNBQWtCO1lBQ2QsdUJBQWdCO1lBQ3hCLGtDQUFlO09BYjVCLGtCQUFrQixDQTJDOUI7SUFBRCx5QkFBQztDQUFBLEFBM0NELElBMkNDO0FBM0NZLGdEQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIEFmdGVyVmlld0luaXQsIElucHV0LCBPdXRwdXQsIFZpZXdDb250YWluZXJSZWYsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJ1xuaW1wb3J0IHsgR3JpZExheW91dCwgSXRlbVNwZWMgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL2xheW91dHMvZ3JpZC1sYXlvdXQvZ3JpZC1sYXlvdXQnO1xuaW1wb3J0IHsgQ2FsZW5kYXJTZXJ2aWNlLCBJRGF5SXRlbSwgSURheU1hcmtlciB9IGZyb20gJy4uL3NlcnZpY2VzL2NhbGVuZGFyLnNlcnZpY2UnO1xuaW1wb3J0IHsgTGFiZWwgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL2xhYmVsL2xhYmVsJztcbmltcG9ydCB7IFRvdWNoR2VzdHVyZUV2ZW50RGF0YSwgUGFuR2VzdHVyZUV2ZW50RGF0YSwgR2VzdHVyZUV2ZW50RGF0YSwgUGluY2hHZXN0dXJlRXZlbnREYXRhIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9nZXN0dXJlcy9nZXN0dXJlcyc7XG5pbXBvcnQgeyBCb3JkZXIgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9ib3JkZXJcIjtcbmltcG9ydCB7IENvbG9yIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy9jb2xvci9jb2xvcic7XG5pbXBvcnQgKiBhcyBtb21lbnQgZnJvbSAnbW9tZW50JztcbmltcG9ydCB7IE1vZGFsRGlhbG9nU2VydmljZSwgTW9kYWxEaWFsb2dPcHRpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL21vZGFsLWRpYWxvZ1wiO1xuaW1wb3J0IHsgRGF5TWFya2VyQ29tcG9uZW50IH0gZnJvbSAnLi4vZGF5LW1hcmtlci9kYXktbWFya2VyLmNvbXBvbmVudCc7XG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgeyBTZXR0aW5nc1NlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9zZXR0aW5ncy5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogJ25zLXZpZXctbW9udGgnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi92aWV3LW1vbnRoLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi92aWV3LW1vbnRoLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgVmlld01vbnRoQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBwdWJsaWMgbW9udGhOYW1lOnN0cmluZztcbiAgICBwdWJsaWMgYWN0TW9udGg6IG1vbWVudC5Nb21lbnQ7XG4gICAgcHVibGljIGRheXM6SURheUl0ZW1bXSA9IFtdO1xuXG4gICAgLy8gZXZlbnQgYnJhZGNhc3RlciB0byBvdXRlciBjb21wb25lbnQ6IGltYWdlLWNhbGVuZGFyLmNvbXBvbmVudFxuICAgIEBPdXRwdXQoJ2lubmVyUGFuJykgaW5uZXJQYW46IEV2ZW50RW1pdHRlcjxQYW5HZXN0dXJlRXZlbnREYXRhPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyRXh0ZW5zaW9ucyxcbiAgICAgICAgcHJpdmF0ZSBjYWxlbmRhclNlcnZpY2U6IENhbGVuZGFyU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBtb2RhbFNlcnZpY2U6IE1vZGFsRGlhbG9nU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSB2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgICAgICBwcml2YXRlIHNldHRpbmdzOiBTZXR0aW5nc1NlcnZpY2UsXG4gICAgKSB7IFxuICAgIH1cbiAgICBcbiAgICBuZ09uSW5pdCgpIHsgXG4gICAgICAgIHRoaXMuYWN0TW9udGggPSBtb21lbnQoKTtcbiAgICAgICAgdGhpcy5kYXlzID0gdGhpcy5jYWxlbmRhclNlcnZpY2UuZ2V0TW9udGgoKTtcbiAgICAgICAgdGhpcy5tb250aE5hbWUgPSB0aGlzLmNhbGVuZGFyU2VydmljZS5nZXRNb250aE5hbWUoKTtcbiAgICB9XG4gICAgXG4gICAgc3RlcE1vbnRoKGRlbHRhOm51bWJlcil7XG4gICAgICAgIHRoaXMuY2FsZW5kYXJTZXJ2aWNlLnN0ZXBNb250aChkZWx0YSk7XG4gICAgICAgIHRoaXMuZGF5cyA9IHRoaXMuY2FsZW5kYXJTZXJ2aWNlLmdldE1vbnRoKCk7XG4gICAgICAgIHRoaXMubW9udGhOYW1lID0gdGhpcy5jYWxlbmRhclNlcnZpY2UuZ2V0TW9udGhOYW1lKCk7XG4gICAgfVxuXG4gICAgb25EYXlUYXAoZXZlbnQ6IEdlc3R1cmVFdmVudERhdGEsIGRheTogSURheUl0ZW0pe1xuICAgICAgICBsZXQgb3B0aW9uczogTW9kYWxEaWFsb2dPcHRpb25zID0ge1xuICAgICAgICAgICAgdmlld0NvbnRhaW5lclJlZjogdGhpcy52aWV3Q29udGFpbmVyUmVmXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMubW9kYWxTZXJ2aWNlLnNob3dNb2RhbChEYXlNYXJrZXJDb21wb25lbnQsIG9wdGlvbnMpXG4gICAgICAgIC50aGVuKChyZXN1bHQ6SURheU1hcmtlcikgPT4ge1xuICAgICAgICAgICAgZGF5Lm1hcmtlciA9IHJlc3VsdDtcbiAgICAgICAgICAgIHRoaXMuc2V0dGluZ3Muc2V0RGF5KGRheS5kYXRlLCByZXN1bHQpO1xuICAgICAgICB9KTtcbiAgICB9ICAgIFxuXG4gICAgb25EYXlQYW4oJGV2ZW50KSB7XG4gICAgICAgIHRoaXMuaW5uZXJQYW4uZW1pdCgkZXZlbnQpO1xuICAgIH1cbn1cbiJdfQ==