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
        this.gridScale = 1;
        this.startScale = 1;
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
    ViewMonthComponent.prototype.onTouch = function (event) {
        // console.log(event.action);
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
    ViewMonthComponent.prototype.onGridPinch = function (event) {
        var item = event.object;
        if (event.state == 1) {
            var newOriginX = event.getFocusX() - item.translateX;
            var newOriginY = event.getFocusY() - item.translateY;
            var oldOriginX = item.originX * item.getMeasuredWidth();
            var oldOriginY = item.originY * item.getMeasuredHeight();
            item.translateX += (oldOriginX - newOriginX) * (1 - item.scaleX);
            item.translateY += (oldOriginY - newOriginY) * (1 - item.scaleY);
            item.originX = newOriginX / item.getMeasuredWidth();
            item.originY = newOriginY / item.getMeasuredHeight();
            this.startScale = this.gridScale;
        }
        if (event.state == 2)
            this.gridScale = this.startScale * event.scale;
        console.log('pinch', event.state, event.scale, 'focus:', event.getFocusX(), event.getFocusY());
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy1tb250aC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ2aWV3LW1vbnRoLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF3SDtBQUN4SCxzREFBOEQ7QUFFOUQsd0RBQTRFO0FBTTVFLCtCQUFpQztBQUNqQyxrRUFBMkY7QUFDM0YsMkVBQXdFO0FBVXhFO0lBZUksNEJBQ1ksTUFBd0IsRUFDeEIsZUFBZ0MsRUFDaEMsWUFBZ0MsRUFDaEMsZ0JBQWtDO1FBSGxDLFdBQU0sR0FBTixNQUFNLENBQWtCO1FBQ3hCLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyxpQkFBWSxHQUFaLFlBQVksQ0FBb0I7UUFDaEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQWxCckMsZUFBVSxHQUFXLENBQUMsQ0FBQztRQUt4QixlQUFVLEdBQVUsQ0FBQyxDQUFDO1FBQ3RCLGVBQVUsR0FBVSxDQUFDLENBQUM7UUFDdEIsa0JBQWEsR0FBVSxDQUFDLENBQUM7UUFDekIsa0JBQWEsR0FBVSxDQUFDLENBQUM7UUFDakMsNEJBQTRCO1FBQ3BCLFNBQUksR0FBYyxFQUFFLENBQUM7UUFDckIsY0FBUyxHQUFXLENBQUMsQ0FBQztRQUN0QixlQUFVLEdBQVcsQ0FBQyxDQUFDO0lBUS9CLENBQUM7SUFFRCxxQ0FBUSxHQUFSO1FBQ0ksa0RBQWtEO1FBQ2xELElBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzVDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN6RCxDQUFDO0lBRUQsa0NBQUssR0FBTCxVQUFNLEtBQTBCO1FBQzVCLDZDQUE2QztRQUM3QyxNQUFNLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUNwQixLQUFLLENBQUM7Z0JBQ0osSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO2dCQUNyQyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7Z0JBQ3JDLEtBQUssQ0FBQztZQUNSLEtBQUssQ0FBQztnQkFDSixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQztnQkFDcEQsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUM7Z0JBQ3BELEtBQUssQ0FBQztRQUNWLENBQUM7SUFDTCxDQUFDO0lBRUQsb0NBQU8sR0FBUCxVQUFRLEtBQTRCO1FBQ2hDLDZCQUE2QjtJQUNqQyxDQUFDO0lBRUQsc0NBQVMsR0FBVCxVQUFVLEtBQVk7UUFDbEIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdEMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzVDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN6RCxDQUFDO0lBRUQscUNBQVEsR0FBUixVQUFTLEtBQXVCLEVBQUUsR0FBYTtRQUMzQyxJQUFJLE9BQU8sR0FBdUI7WUFDOUIsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLGdCQUFnQjtTQUMxQyxDQUFDO1FBQ0YsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMseUNBQWtCLEVBQUUsT0FBTyxDQUFDO2FBQ3ZELElBQUksQ0FBQyxVQUFDLE1BQWlCO1lBQ3BCLEdBQUcsQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3hCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELHFDQUFRLEdBQVIsVUFBUyxLQUEwQjtRQUMvQiw4QkFBOEI7UUFDOUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN0QixDQUFDO0lBRUQsd0NBQVcsR0FBWCxVQUFhLEtBQTRCO1FBQ3JDLElBQU0sSUFBSSxHQUFTLEtBQUssQ0FBQyxNQUFNLENBQUM7UUFDaEMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ25CLElBQU0sVUFBVSxHQUFHLEtBQUssQ0FBQyxTQUFTLEVBQUUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO1lBQ3ZELElBQU0sVUFBVSxHQUFHLEtBQUssQ0FBQyxTQUFTLEVBQUUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO1lBRXZELElBQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7WUFDMUQsSUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztZQUUzRCxJQUFJLENBQUMsVUFBVSxJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNqRSxJQUFJLENBQUMsVUFBVSxJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUVqRSxJQUFJLENBQUMsT0FBTyxHQUFHLFVBQVUsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztZQUNwRCxJQUFJLENBQUMsT0FBTyxHQUFHLFVBQVUsR0FBRyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztZQUNyRCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDckMsQ0FBQztRQUNELEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDO1lBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFDckUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRSxLQUFLLENBQUMsU0FBUyxFQUFFLEVBQUUsS0FBSyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUM7SUFDbkcsQ0FBQztJQXRGUTtRQUFSLFlBQUssRUFBRTs7MERBQXdCO0lBQ0w7UUFBMUIsZ0JBQVMsQ0FBQyxjQUFjLENBQUM7a0NBQWtCLGlCQUFVOytEQUFDO0lBRjlDLGtCQUFrQjtRQU45QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxlQUFlO1lBQ3pCLFdBQVcsRUFBRSw2QkFBNkI7WUFDMUMsU0FBUyxFQUFFLENBQUMsNEJBQTRCLENBQUM7U0FDNUMsQ0FBQzt5Q0FpQnNCLHlCQUFnQjtZQUNQLGtDQUFlO1lBQ2xCLGlDQUFrQjtZQUNkLHVCQUFnQjtPQW5CckMsa0JBQWtCLENBd0Y5QjtJQUFELHlCQUFDO0NBQUEsQUF4RkQsSUF3RkM7QUF4RlksZ0RBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgQWZ0ZXJWaWV3SW5pdCwgSW5wdXQsIE91dHB1dCwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJ1xuaW1wb3J0IHsgR3JpZExheW91dCwgSXRlbVNwZWMgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL2xheW91dHMvZ3JpZC1sYXlvdXQvZ3JpZC1sYXlvdXQnO1xuaW1wb3J0IHsgQ2FsZW5kYXJTZXJ2aWNlLCBJRGF5SXRlbSwgSURheU1hcmtlciB9IGZyb20gJy4uL2NhbGVuZGFyLnNlcnZpY2UnO1xuaW1wb3J0IHsgTGFiZWwgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL2xhYmVsL2xhYmVsJztcbmltcG9ydCB7IFRvdWNoR2VzdHVyZUV2ZW50RGF0YSwgUGFuR2VzdHVyZUV2ZW50RGF0YSwgR2VzdHVyZUV2ZW50RGF0YSwgUGluY2hHZXN0dXJlRXZlbnREYXRhIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9nZXN0dXJlcy9nZXN0dXJlcyc7XG5pbXBvcnQgeyBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlL3NyYy9ldmVudF9lbWl0dGVyJztcbmltcG9ydCB7IEJvcmRlciB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2JvcmRlclwiO1xuaW1wb3J0IHsgQ29sb3IgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL2NvbG9yL2NvbG9yJztcbmltcG9ydCAqIGFzIG1vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0IHsgTW9kYWxEaWFsb2dTZXJ2aWNlLCBNb2RhbERpYWxvZ09wdGlvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbW9kYWwtZGlhbG9nXCI7XG5pbXBvcnQgeyBEYXlNYXJrZXJDb21wb25lbnQgfSBmcm9tICcuLi9kYXktbWFya2VyL2RheS1tYXJrZXIuY29tcG9uZW50JztcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IFZpZXcgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL2ZyYW1lL2ZyYW1lJztcblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogJ25zLXZpZXctbW9udGgnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi92aWV3LW1vbnRoLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi92aWV3LW1vbnRoLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBWaWV3TW9udGhDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIEBJbnB1dCgpIG1vbnRoRGVsdGE6IG51bWJlciA9IDA7XG4gICAgQFZpZXdDaGlsZCgnY2FsZW5kYXJHcmlkJykgY2FsZW5kYXJHcmlkUmVmOiBFbGVtZW50UmVmO1xuICAgIFxuICAgIHByaXZhdGUgbW9udGhOYW1lOnN0cmluZztcbiAgICBwcml2YXRlIGFjdE1vbnRoOiBtb21lbnQuTW9tZW50O1xuICAgIHByaXZhdGUgY2FsZW5kYXJfeDpudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgY2FsZW5kYXJfeTpudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgY2FsZW5kYXJUYXBfeDpudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgY2FsZW5kYXJUYXBfeTpudW1iZXIgPSAwO1xuICAgIC8vIHByaXZhdGUgZ3JpZDogR3JpZExheW91dDtcbiAgICBwcml2YXRlIGRheXM6SURheUl0ZW1bXSA9IFtdO1xuICAgIHByaXZhdGUgZ3JpZFNjYWxlOiBudW1iZXIgPSAxO1xuICAgIHByaXZhdGUgc3RhcnRTY2FsZTogbnVtYmVyID0gMTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyRXh0ZW5zaW9ucyxcbiAgICAgICAgcHJpdmF0ZSBjYWxlbmRhclNlcnZpY2U6IENhbGVuZGFyU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBtb2RhbFNlcnZpY2U6IE1vZGFsRGlhbG9nU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSB2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmXG4gICAgKSB7IFxuICAgIH1cbiAgICBcbiAgICBuZ09uSW5pdCgpIHsgXG4gICAgICAgIC8vIHRoaXMuZ3JpZCA9IHRoaXMuY2FsZW5kYXJHcmlkUmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgIHRoaXMuYWN0TW9udGggPSBtb21lbnQoKTtcbiAgICAgICAgdGhpcy5kYXlzID0gdGhpcy5jYWxlbmRhclNlcnZpY2UuZ2V0TW9udGgoKTtcbiAgICAgICAgdGhpcy5tb250aE5hbWUgPSB0aGlzLmNhbGVuZGFyU2VydmljZS5nZXRNb250aE5hbWUoKTtcbiAgICB9XG5cbiAgICBvblBhbihldmVudDogUGFuR2VzdHVyZUV2ZW50RGF0YSkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhldmVudC5ldmVudE5hbWUsIGV2ZW50LnN0YXRlKTtcbiAgICAgICAgc3dpdGNoIChldmVudC5zdGF0ZSkge1xuICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgIHRoaXMuY2FsZW5kYXJUYXBfeCA9IHRoaXMuY2FsZW5kYXJfeDtcbiAgICAgICAgICAgIHRoaXMuY2FsZW5kYXJUYXBfeSA9IHRoaXMuY2FsZW5kYXJfeTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIHRoaXMuY2FsZW5kYXJfeCA9IHRoaXMuY2FsZW5kYXJUYXBfeCArIGV2ZW50LmRlbHRhWDtcbiAgICAgICAgICAgIHRoaXMuY2FsZW5kYXJfeSA9IHRoaXMuY2FsZW5kYXJUYXBfeSArIGV2ZW50LmRlbHRhWTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIG9uVG91Y2goZXZlbnQ6IFRvdWNoR2VzdHVyZUV2ZW50RGF0YSkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhldmVudC5hY3Rpb24pO1xuICAgIH1cbiAgICBcbiAgICBzdGVwTW9udGgoZGVsdGE6bnVtYmVyKXtcbiAgICAgICAgdGhpcy5jYWxlbmRhclNlcnZpY2Uuc3RlcE1vbnRoKGRlbHRhKTtcbiAgICAgICAgdGhpcy5kYXlzID0gdGhpcy5jYWxlbmRhclNlcnZpY2UuZ2V0TW9udGgoKTtcbiAgICAgICAgdGhpcy5tb250aE5hbWUgPSB0aGlzLmNhbGVuZGFyU2VydmljZS5nZXRNb250aE5hbWUoKTtcbiAgICB9XG5cbiAgICBvbkRheVRhcChldmVudDogR2VzdHVyZUV2ZW50RGF0YSwgZGF5OiBJRGF5SXRlbSl7XG4gICAgICAgIGxldCBvcHRpb25zOiBNb2RhbERpYWxvZ09wdGlvbnMgPSB7XG4gICAgICAgICAgICB2aWV3Q29udGFpbmVyUmVmOiB0aGlzLnZpZXdDb250YWluZXJSZWZcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5tb2RhbFNlcnZpY2Uuc2hvd01vZGFsKERheU1hcmtlckNvbXBvbmVudCwgb3B0aW9ucylcbiAgICAgICAgLnRoZW4oKHJlc3VsdDpJRGF5TWFya2VyKSA9PiB7XG4gICAgICAgICAgICBkYXkubWFya2VyID0gcmVzdWx0O1xuICAgICAgICB9KTtcbiAgICB9ICAgIFxuXG4gICAgb25EYXlQYW4oZXZlbnQ6IFBhbkdlc3R1cmVFdmVudERhdGEpIHtcbiAgICAgICAgLy8gaGFuZGxlIGFzIGEgdmlldyBwYW4gKG1vdmUpXG4gICAgICAgIHRoaXMub25QYW4oZXZlbnQpO1xuICAgIH1cblxuICAgIG9uR3JpZFBpbmNoIChldmVudDogUGluY2hHZXN0dXJlRXZlbnREYXRhKSB7XG4gICAgICAgIGNvbnN0IGl0ZW0gPSA8Vmlldz5ldmVudC5vYmplY3Q7XG4gICAgICAgIGlmIChldmVudC5zdGF0ZSA9PSAxKSB7XG4gICAgICAgICAgICBjb25zdCBuZXdPcmlnaW5YID0gZXZlbnQuZ2V0Rm9jdXNYKCkgLSBpdGVtLnRyYW5zbGF0ZVg7XG4gICAgICAgICAgICBjb25zdCBuZXdPcmlnaW5ZID0gZXZlbnQuZ2V0Rm9jdXNZKCkgLSBpdGVtLnRyYW5zbGF0ZVk7XG4gICAgXG4gICAgICAgICAgICBjb25zdCBvbGRPcmlnaW5YID0gaXRlbS5vcmlnaW5YICogaXRlbS5nZXRNZWFzdXJlZFdpZHRoKCk7XG4gICAgICAgICAgICBjb25zdCBvbGRPcmlnaW5ZID0gaXRlbS5vcmlnaW5ZICogaXRlbS5nZXRNZWFzdXJlZEhlaWdodCgpO1xuICAgIFxuICAgICAgICAgICAgaXRlbS50cmFuc2xhdGVYICs9IChvbGRPcmlnaW5YIC0gbmV3T3JpZ2luWCkgKiAoMSAtIGl0ZW0uc2NhbGVYKTtcbiAgICAgICAgICAgIGl0ZW0udHJhbnNsYXRlWSArPSAob2xkT3JpZ2luWSAtIG5ld09yaWdpblkpICogKDEgLSBpdGVtLnNjYWxlWSk7XG4gICAgXG4gICAgICAgICAgICBpdGVtLm9yaWdpblggPSBuZXdPcmlnaW5YIC8gaXRlbS5nZXRNZWFzdXJlZFdpZHRoKCk7XG4gICAgICAgICAgICBpdGVtLm9yaWdpblkgPSBuZXdPcmlnaW5ZIC8gaXRlbS5nZXRNZWFzdXJlZEhlaWdodCgpO1xuICAgICAgICAgICAgdGhpcy5zdGFydFNjYWxlID0gdGhpcy5ncmlkU2NhbGU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGV2ZW50LnN0YXRlID09IDIpIHRoaXMuZ3JpZFNjYWxlID0gdGhpcy5zdGFydFNjYWxlICogZXZlbnQuc2NhbGU7XG4gICAgICAgIGNvbnNvbGUubG9nKCdwaW5jaCcsIGV2ZW50LnN0YXRlLCBldmVudC5zY2FsZSwgJ2ZvY3VzOicsIGV2ZW50LmdldEZvY3VzWCgpLCBldmVudC5nZXRGb2N1c1koKSk7XG4gICAgfVxufVxuIl19