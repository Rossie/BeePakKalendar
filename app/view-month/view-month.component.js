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
                marker: day.marker
            }
        };
        this.modalService.showModal(day_marker_component_1.DayMarkerComponent, options)
            .then(function (result) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy1tb250aC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ2aWV3LW1vbnRoLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFzSTtBQUN0SSxzREFBOEQ7QUFFOUQsaUVBQThGO0FBSzlGLCtCQUFpQztBQUNqQyxrRUFBMkY7QUFDM0YsMkVBQXdFO0FBQ3hFLDBCQUE0QjtBQUM1QixpRUFBK0Q7QUFRL0Q7SUFRSSw0QkFDWSxNQUF3QixFQUN4QixlQUFnQyxFQUNoQyxZQUFnQyxFQUNoQyxnQkFBa0MsRUFDbEMsUUFBeUI7UUFKekIsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFDeEIsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLGlCQUFZLEdBQVosWUFBWSxDQUFvQjtRQUNoQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLGFBQVEsR0FBUixRQUFRLENBQWlCO1FBVjlCLFNBQUksR0FBYyxFQUFFLENBQUM7UUFFNUIsZ0VBQWdFO1FBQzVDLGFBQVEsR0FBc0MsSUFBSSxtQkFBWSxFQUFFLENBQUM7SUFTckYsQ0FBQztJQUVELHFDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUM1QyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDekQsQ0FBQztJQUVELHNDQUFTLEdBQVQsVUFBVSxLQUFZO1FBQ2xCLElBQUksQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUM1QyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxlQUFlLENB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QUEsQUFwRUQsSUFvRUM7QUFwRVksZ0RBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgQWZ0ZXJWaWV3SW5pdCwgSW5wdXQsIE91dHB1dCwgVmlld0NvbnRhaW5lclJlZiwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInXG5pbXBvcnQgeyBHcmlkTGF5b3V0LCBJdGVtU3BlYyB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvbGF5b3V0cy9ncmlkLWxheW91dC9ncmlkLWxheW91dCc7XG5pbXBvcnQgeyBDYWxlbmRhclNlcnZpY2UsIElEYXlJdGVtLCBJRGF5TWFya2VyLCBtYXJrZXJzIH0gZnJvbSAnLi4vc2VydmljZXMvY2FsZW5kYXIuc2VydmljZSc7XG5pbXBvcnQgeyBMYWJlbCB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvbGFiZWwvbGFiZWwnO1xuaW1wb3J0IHsgVG91Y2hHZXN0dXJlRXZlbnREYXRhLCBQYW5HZXN0dXJlRXZlbnREYXRhLCBHZXN0dXJlRXZlbnREYXRhLCBQaW5jaEdlc3R1cmVFdmVudERhdGEgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL2dlc3R1cmVzL2dlc3R1cmVzJztcbmltcG9ydCB7IEJvcmRlciB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2JvcmRlclwiO1xuaW1wb3J0IHsgQ29sb3IgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL2NvbG9yL2NvbG9yJztcbmltcG9ydCAqIGFzIG1vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0IHsgTW9kYWxEaWFsb2dTZXJ2aWNlLCBNb2RhbERpYWxvZ09wdGlvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbW9kYWwtZGlhbG9nXCI7XG5pbXBvcnQgeyBEYXlNYXJrZXJDb21wb25lbnQgfSBmcm9tICcuLi9kYXktbWFya2VyL2RheS1tYXJrZXIuY29tcG9uZW50JztcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IFNldHRpbmdzU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL3NldHRpbmdzLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiAnbnMtdmlldy1tb250aCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL3ZpZXctbW9udGguY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL3ZpZXctbW9udGguY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBWaWV3TW9udGhDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHB1YmxpYyBtb250aE5hbWU6c3RyaW5nO1xuICAgIHB1YmxpYyBhY3RNb250aDogbW9tZW50Lk1vbWVudDtcbiAgICBwdWJsaWMgZGF5czpJRGF5SXRlbVtdID0gW107XG5cbiAgICAvLyBldmVudCBicmFkY2FzdGVyIHRvIG91dGVyIGNvbXBvbmVudDogaW1hZ2UtY2FsZW5kYXIuY29tcG9uZW50XG4gICAgQE91dHB1dCgnaW5uZXJQYW4nKSBpbm5lclBhbjogRXZlbnRFbWl0dGVyPFBhbkdlc3R1cmVFdmVudERhdGE+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXJFeHRlbnNpb25zLFxuICAgICAgICBwcml2YXRlIGNhbGVuZGFyU2VydmljZTogQ2FsZW5kYXJTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIG1vZGFsU2VydmljZTogTW9kYWxEaWFsb2dTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYsXG4gICAgICAgIHByaXZhdGUgc2V0dGluZ3M6IFNldHRpbmdzU2VydmljZSxcbiAgICApIHsgXG4gICAgfVxuICAgIFxuICAgIG5nT25Jbml0KCkgeyBcbiAgICAgICAgdGhpcy5hY3RNb250aCA9IG1vbWVudCgpO1xuICAgICAgICB0aGlzLmRheXMgPSB0aGlzLmNhbGVuZGFyU2VydmljZS5nZXRNb250aCgpO1xuICAgICAgICB0aGlzLm1vbnRoTmFtZSA9IHRoaXMuY2FsZW5kYXJTZXJ2aWNlLmdldE1vbnRoTmFtZSgpO1xuICAgIH1cbiAgICBcbiAgICBzdGVwTW9udGgoZGVsdGE6bnVtYmVyKXtcbiAgICAgICAgdGhpcy5jYWxlbmRhclNlcnZpY2Uuc3RlcE1vbnRoKGRlbHRhKTtcbiAgICAgICAgdGhpcy5kYXlzID0gdGhpcy5jYWxlbmRhclNlcnZpY2UuZ2V0TW9udGgoKTtcbiAgICAgICAgdGhpcy5tb250aE5hbWUgPSB0aGlzLmNhbGVuZGFyU2VydmljZS5nZXRNb250aE5hbWUoKTtcbiAgICB9XG5cbiAgICBvbkRheVRhcChldmVudDogR2VzdHVyZUV2ZW50RGF0YSwgZGF5OiBJRGF5SXRlbSl7XG4gICAgICAgIGxldCBvcHRpb25zOiBNb2RhbERpYWxvZ09wdGlvbnMgPSB7XG4gICAgICAgICAgICB2aWV3Q29udGFpbmVyUmVmOiB0aGlzLnZpZXdDb250YWluZXJSZWYsXG4gICAgICAgICAgICBjb250ZXh0OiB7XG4gICAgICAgICAgICAgICAgZGF5VGV4dDogdGhpcy5zZXR0aW5ncy5nZXREYXlUZXh0KGRheS5kYXRlKSxcbiAgICAgICAgICAgICAgICBtYXJrZXI6IGRheS5tYXJrZXJcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5tb2RhbFNlcnZpY2Uuc2hvd01vZGFsKERheU1hcmtlckNvbXBvbmVudCwgb3B0aW9ucylcbiAgICAgICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgaWYgKHJlc3VsdC5tYXJrZXIpIHtcbiAgICAgICAgICAgICAgICBkYXkubWFya2VyID0gcmVzdWx0Lm1hcmtlcjsgLy8gdXBkYXRlIHZpZXdcbiAgICAgICAgICAgICAgICB0aGlzLnNldHRpbmdzLnNldERheU1hcmtlcihkYXkuZGF0ZSwgcmVzdWx0Lm1hcmtlcik7IC8vIHN0b3JlIG1hcmtlclxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAocmVzdWx0LmRheVRleHQpIHtcbiAgICAgICAgICAgICAgICBkYXkudGV4dCA9IHJlc3VsdC5kYXlUZXh0OyAvLyB1cGRhdGUgdmlld1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0dGluZ3Muc2V0RGF5VGV4dChkYXkuZGF0ZSwgcmVzdWx0LmRheVRleHQpOyAvLyBzdG9yZSB0ZXh0XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIERlbGV0ZSBtYXJrZXIgYW5kIHRleHRcbiAgICAgICAgICAgIGlmIChyZXN1bHQubWFya2VyID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgZGF5Lm1hcmtlciA9IGRheS50ZXh0ID0gbnVsbDsgLy8gdXBkYXRlIHZpZXdcbiAgICAgICAgICAgICAgICB0aGlzLnNldHRpbmdzLnJlbW92ZURheU1hcmtlcihkYXkuZGF0ZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXR0aW5ncy5yZW1vdmVEYXlUZXh0KGRheS5kYXRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSAgICBcblxuICAgIG9uRGF5UGFuKCRldmVudCkge1xuICAgICAgICB0aGlzLmlubmVyUGFuLmVtaXQoJGV2ZW50KTtcbiAgICB9XG5cbiAgICBnZXRDc3NDbGFzcyhkYXk6SURheUl0ZW0pe1xuICAgICAgICBsZXQgbWFya2VyY3NzID0gXy5nZXQoZGF5LCBcIm1hcmtlci5jc3NDbGFzc1wiLCAnJyk7XG4gICAgICAgIGxldCBkYXl0ZXh0Y3NzID0gXy5nZXQoZGF5LCBcInRleHRcIiwgZmFsc2UpID8gJ2hhcy1kYXktdGV4dCcgOiAnJztcbiAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoZGF5KSwgbWFya2VyY3NzLCBkYXl0ZXh0Y3NzKTtcbiAgICAgICAgcmV0dXJuIG1hcmtlcnMrJyAnK2RheXRleHRjc3M7XG4gICAgfVxufVxuIl19