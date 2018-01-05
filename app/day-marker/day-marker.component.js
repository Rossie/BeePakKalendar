"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var calendar_service_1 = require("../calendar.service");
var DayMarkerComponent = (function () {
    function DayMarkerComponent(params) {
        this.params = params;
        this.markers = calendar_service_1.markers;
        this.colNum = 3;
    }
    DayMarkerComponent.prototype.ngOnInit = function () { };
    DayMarkerComponent.prototype.onTap = function (marker) {
        this.params.closeCallback(marker);
    };
    DayMarkerComponent.prototype.getRow = function (i) {
        return Math.floor(i / this.colNum);
    };
    DayMarkerComponent.prototype.getCol = function (i) {
        return i % this.colNum;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF5LW1hcmtlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkYXktbWFya2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF3RTtBQUN4RSxrRUFBc0U7QUFDdEUsd0RBQTBEO0FBUzFEO0lBS0ksNEJBQ1ksTUFBeUI7UUFBekIsV0FBTSxHQUFOLE1BQU0sQ0FBbUI7UUFKN0IsWUFBTyxHQUFHLDBCQUFPLENBQUM7UUFDbEIsV0FBTSxHQUFXLENBQUMsQ0FBQztJQUl2QixDQUFDO0lBRUwscUNBQVEsR0FBUixjQUFhLENBQUM7SUFFZCxrQ0FBSyxHQUFMLFVBQU0sTUFBa0I7UUFDcEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVELG1DQUFNLEdBQU4sVUFBTyxDQUFTO1FBQ1osTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRUQsbUNBQU0sR0FBTixVQUFPLENBQVM7UUFDWixNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDM0IsQ0FBQztJQXJCUSxrQkFBa0I7UUFOOUIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsZUFBZTtZQUN6QixXQUFXLEVBQUUsNkJBQTZCO1lBQzFDLFNBQVMsRUFBRSxDQUFDLDZCQUE2QixDQUFDO1NBQzdDLENBQUM7eUNBT3NCLGdDQUFpQjtPQU41QixrQkFBa0IsQ0FzQjlCO0lBQUQseUJBQUM7Q0FBQSxBQXRCRCxJQXNCQztBQXRCWSxnREFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcbmltcG9ydCB7IE1vZGFsRGlhbG9nUGFyYW1zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL21vZGFsLWRpYWxvZ1wiO1xuaW1wb3J0IHsgSURheU1hcmtlciwgbWFya2VycyB9IGZyb20gJy4uL2NhbGVuZGFyLnNlcnZpY2UnO1xuXG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6ICducy1kYXktbWFya2VyJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vZGF5LW1hcmtlci5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vZGF5LW1hcmtlci5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIERheU1hcmtlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBwcml2YXRlIG1hcmtlcnMgPSBtYXJrZXJzO1xuICAgIHByaXZhdGUgY29sTnVtOiBudW1iZXIgPSAzO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgcGFyYW1zOiBNb2RhbERpYWxvZ1BhcmFtcyxcbiAgICApIHsgfVxuXG4gICAgbmdPbkluaXQoKSB7IH1cblxuICAgIG9uVGFwKG1hcmtlcjogSURheU1hcmtlcikge1xuICAgICAgICB0aGlzLnBhcmFtcy5jbG9zZUNhbGxiYWNrKG1hcmtlcik7XG4gICAgfVxuXG4gICAgZ2V0Um93KGk6IG51bWJlcikge1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihpIC8gdGhpcy5jb2xOdW0pO1xuICAgIH1cblxuICAgIGdldENvbChpOiBudW1iZXIpIHtcbiAgICAgICAgcmV0dXJuIGkgJSB0aGlzLmNvbE51bTtcbiAgICB9XG59XG4iXX0=