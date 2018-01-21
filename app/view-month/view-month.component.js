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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy1tb250aC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ2aWV3LW1vbnRoLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFzSTtBQUN0SSxzREFBOEQ7QUFFOUQsaUVBQThGO0FBSzlGLCtCQUFpQztBQUNqQyxrRUFBMkY7QUFDM0YsMkVBQXdFO0FBQ3hFLDBCQUE0QjtBQUM1QixpRUFBK0Q7QUFRL0Q7SUFRSSw0QkFDWSxNQUF3QixFQUN4QixlQUFnQyxFQUNoQyxZQUFnQyxFQUNoQyxnQkFBa0MsRUFDbEMsUUFBeUI7UUFKekIsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFDeEIsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLGlCQUFZLEdBQVosWUFBWSxDQUFvQjtRQUNoQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLGFBQVEsR0FBUixRQUFRLENBQWlCO1FBVjlCLFNBQUksR0FBZSxFQUFFLENBQUM7UUFFN0IsZ0VBQWdFO1FBQzVDLGFBQVEsR0FBc0MsSUFBSSxtQkFBWSxFQUFFLENBQUM7SUFTckYsQ0FBQztJQUVELHFDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUM1QyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDekQsQ0FBQztJQUVELHNDQUFTLEdBQVQsVUFBVSxLQUFhO1FBQ25CLElBQUksQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUM1QyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxlQUFlLENB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QWU7WUFDbEIsaUNBQWtCO1lBQ2QsdUJBQWdCO1lBQ3hCLGtDQUFlO09BYjVCLGtCQUFrQixDQXNFOUI7SUFBRCx5QkFBQztDQUFBLEFBdEVELElBc0VDO0FBdEVZLGdEQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIEFmdGVyVmlld0luaXQsIElucHV0LCBPdXRwdXQsIFZpZXdDb250YWluZXJSZWYsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJ1xuaW1wb3J0IHsgR3JpZExheW91dCwgSXRlbVNwZWMgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL2xheW91dHMvZ3JpZC1sYXlvdXQvZ3JpZC1sYXlvdXQnO1xuaW1wb3J0IHsgQ2FsZW5kYXJTZXJ2aWNlLCBJRGF5SXRlbSwgSURheU1hcmtlciwgbWFya2VycyB9IGZyb20gJy4uL3NlcnZpY2VzL2NhbGVuZGFyLnNlcnZpY2UnO1xuaW1wb3J0IHsgTGFiZWwgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL2xhYmVsL2xhYmVsJztcbmltcG9ydCB7IFRvdWNoR2VzdHVyZUV2ZW50RGF0YSwgUGFuR2VzdHVyZUV2ZW50RGF0YSwgR2VzdHVyZUV2ZW50RGF0YSwgUGluY2hHZXN0dXJlRXZlbnREYXRhIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9nZXN0dXJlcy9nZXN0dXJlcyc7XG5pbXBvcnQgeyBCb3JkZXIgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9ib3JkZXJcIjtcbmltcG9ydCB7IENvbG9yIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy9jb2xvci9jb2xvcic7XG5pbXBvcnQgKiBhcyBtb21lbnQgZnJvbSAnbW9tZW50JztcbmltcG9ydCB7IE1vZGFsRGlhbG9nU2VydmljZSwgTW9kYWxEaWFsb2dPcHRpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL21vZGFsLWRpYWxvZ1wiO1xuaW1wb3J0IHsgRGF5TWFya2VyQ29tcG9uZW50IH0gZnJvbSAnLi4vZGF5LW1hcmtlci9kYXktbWFya2VyLmNvbXBvbmVudCc7XG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgeyBTZXR0aW5nc1NlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9zZXR0aW5ncy5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogJ25zLXZpZXctbW9udGgnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi92aWV3LW1vbnRoLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi92aWV3LW1vbnRoLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgVmlld01vbnRoQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBwdWJsaWMgbW9udGhOYW1lOiBzdHJpbmc7XG4gICAgcHVibGljIGFjdE1vbnRoOiBtb21lbnQuTW9tZW50O1xuICAgIHB1YmxpYyBkYXlzOiBJRGF5SXRlbVtdID0gW107XG5cbiAgICAvLyBldmVudCBicmFkY2FzdGVyIHRvIG91dGVyIGNvbXBvbmVudDogaW1hZ2UtY2FsZW5kYXIuY29tcG9uZW50XG4gICAgQE91dHB1dCgnaW5uZXJQYW4nKSBpbm5lclBhbjogRXZlbnRFbWl0dGVyPFBhbkdlc3R1cmVFdmVudERhdGE+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXJFeHRlbnNpb25zLFxuICAgICAgICBwcml2YXRlIGNhbGVuZGFyU2VydmljZTogQ2FsZW5kYXJTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIG1vZGFsU2VydmljZTogTW9kYWxEaWFsb2dTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYsXG4gICAgICAgIHByaXZhdGUgc2V0dGluZ3M6IFNldHRpbmdzU2VydmljZSxcbiAgICApIHtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5hY3RNb250aCA9IG1vbWVudCgpO1xuICAgICAgICB0aGlzLmRheXMgPSB0aGlzLmNhbGVuZGFyU2VydmljZS5nZXRNb250aCgpO1xuICAgICAgICB0aGlzLm1vbnRoTmFtZSA9IHRoaXMuY2FsZW5kYXJTZXJ2aWNlLmdldE1vbnRoTmFtZSgpO1xuICAgIH1cblxuICAgIHN0ZXBNb250aChkZWx0YTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuY2FsZW5kYXJTZXJ2aWNlLnN0ZXBNb250aChkZWx0YSk7XG4gICAgICAgIHRoaXMuZGF5cyA9IHRoaXMuY2FsZW5kYXJTZXJ2aWNlLmdldE1vbnRoKCk7XG4gICAgICAgIHRoaXMubW9udGhOYW1lID0gdGhpcy5jYWxlbmRhclNlcnZpY2UuZ2V0TW9udGhOYW1lKCk7XG4gICAgfVxuXG4gICAgb25EYXlUYXAoZXZlbnQ6IEdlc3R1cmVFdmVudERhdGEsIGRheTogSURheUl0ZW0pIHtcbiAgICAgICAgbGV0IG9wdGlvbnM6IE1vZGFsRGlhbG9nT3B0aW9ucyA9IHtcbiAgICAgICAgICAgIHZpZXdDb250YWluZXJSZWY6IHRoaXMudmlld0NvbnRhaW5lclJlZixcbiAgICAgICAgICAgIGNvbnRleHQ6IHtcbiAgICAgICAgICAgICAgICBkYXlUZXh0OiB0aGlzLnNldHRpbmdzLmdldERheVRleHQoZGF5LmRhdGUpLFxuICAgICAgICAgICAgICAgIGRheTogZGF5LFxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLm1vZGFsU2VydmljZS5zaG93TW9kYWwoRGF5TWFya2VyQ29tcG9uZW50LCBvcHRpb25zKVxuICAgICAgICAgICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghcmVzdWx0KSB7IHJldHVybjsgfSAvLyBjbG9zZWQgd2l0aCBubyBzZWxlY3Rpb25cblxuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQubWFya2VyKSB7XG4gICAgICAgICAgICAgICAgICAgIGRheS5tYXJrZXIgPSByZXN1bHQubWFya2VyOyAvLyB1cGRhdGUgdmlld1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldHRpbmdzLnNldERheU1hcmtlcihkYXkuZGF0ZSwgcmVzdWx0Lm1hcmtlcik7IC8vIHN0b3JlIG1hcmtlclxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuZGF5VGV4dCkge1xuICAgICAgICAgICAgICAgICAgICBkYXkudGV4dCA9IHJlc3VsdC5kYXlUZXh0OyAvLyB1cGRhdGUgdmlld1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldHRpbmdzLnNldERheVRleHQoZGF5LmRhdGUsIHJlc3VsdC5kYXlUZXh0KTsgLy8gc3RvcmUgdGV4dFxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIERlbGV0ZSBtYXJrZXIgYW5kIHRleHRcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0Lm1hcmtlciA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBkYXkubWFya2VyID0gZGF5LnRleHQgPSBudWxsOyAvLyB1cGRhdGUgdmlld1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldHRpbmdzLnJlbW92ZURheU1hcmtlcihkYXkuZGF0ZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0dGluZ3MucmVtb3ZlRGF5VGV4dChkYXkuZGF0ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb25EYXlQYW4oJGV2ZW50KSB7XG4gICAgICAgIHRoaXMuaW5uZXJQYW4uZW1pdCgkZXZlbnQpO1xuICAgIH1cblxuICAgIGdldENzc0NsYXNzKGRheTogSURheUl0ZW0pIHtcbiAgICAgICAgbGV0IG1hcmtlcmNzcyA9IF8uZ2V0KGRheSwgXCJtYXJrZXIuY3NzQ2xhc3NcIiwgJycpO1xuICAgICAgICBsZXQgZGF5dGV4dGNzcyA9IF8uZ2V0KGRheSwgXCJ0ZXh0XCIsIGZhbHNlKSA/ICdoYXMtZGF5LXRleHQnIDogJyc7XG4gICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGRheSksIG1hcmtlcmNzcywgZGF5dGV4dGNzcyk7XG4gICAgICAgIHJldHVybiBtYXJrZXJzICsgJyAnICsgZGF5dGV4dGNzcztcbiAgICB9XG59XG4iXX0=