"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var calendar_service_1 = require("../services/calendar.service");
var DayMarkerComponent = (function () {
    function DayMarkerComponent(params) {
        this.params = params;
        this.markers = calendar_service_1.markers;
        this.colNum = 3;
        this.dayText = params.context.dayText,
            this.marker = params.context.marker;
    }
    DayMarkerComponent.prototype.ngOnInit = function () { };
    DayMarkerComponent.prototype.onTap = function (marker) {
        this.params.closeCallback({
            marker: marker,
            dayText: this.dayText
        });
    };
    DayMarkerComponent.prototype.getRow = function (i) {
        return Math.floor(i / this.colNum);
    };
    DayMarkerComponent.prototype.getCol = function (i) {
        return i % this.colNum;
    };
    DayMarkerComponent.prototype.onSave = function () {
        this.params.closeCallback({
            dayText: this.dayText,
            marker: this.marker
        });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF5LW1hcmtlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkYXktbWFya2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF3RTtBQUN4RSxrRUFBc0U7QUFDdEUsaUVBQW1FO0FBU25FO0lBTUksNEJBQ1ksTUFBeUI7UUFBekIsV0FBTSxHQUFOLE1BQU0sQ0FBbUI7UUFOOUIsWUFBTyxHQUFHLDBCQUFPLENBQUM7UUFDakIsV0FBTSxHQUFXLENBQUMsQ0FBQztRQU92QixJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTztZQUNyQyxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFBO0lBQ3ZDLENBQUM7SUFFRCxxQ0FBUSxHQUFSLGNBQWEsQ0FBQztJQUVkLGtDQUFLLEdBQUwsVUFBTSxNQUFrQjtRQUNwQixJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQztZQUN0QixNQUFNLEVBQUUsTUFBTTtZQUNkLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTztTQUN4QixDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsbUNBQU0sR0FBTixVQUFPLENBQVM7UUFDWixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFRCxtQ0FBTSxHQUFOLFVBQU8sQ0FBUztRQUNaLE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUMzQixDQUFDO0lBRUQsbUNBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDO1lBQ3RCLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTztZQUNyQixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07U0FDdEIsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQW5DUSxrQkFBa0I7UUFOOUIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsZUFBZTtZQUN6QixXQUFXLEVBQUUsNkJBQTZCO1lBQzFDLFNBQVMsRUFBRSxDQUFDLDZCQUE2QixDQUFDO1NBQzdDLENBQUM7eUNBUXNCLGdDQUFpQjtPQVA1QixrQkFBa0IsQ0FvQzlCO0lBQUQseUJBQUM7Q0FBQSxBQXBDRCxJQW9DQztBQXBDWSxnREFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcbmltcG9ydCB7IE1vZGFsRGlhbG9nUGFyYW1zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL21vZGFsLWRpYWxvZ1wiO1xuaW1wb3J0IHsgSURheU1hcmtlciwgbWFya2VycyB9IGZyb20gJy4uL3NlcnZpY2VzL2NhbGVuZGFyLnNlcnZpY2UnO1xuXG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6ICducy1kYXktbWFya2VyJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vZGF5LW1hcmtlci5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vZGF5LW1hcmtlci5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIERheU1hcmtlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgcHVibGljIG1hcmtlcnMgPSBtYXJrZXJzO1xuICAgIHByaXZhdGUgY29sTnVtOiBudW1iZXIgPSAzO1xuICAgIHB1YmxpYyBkYXlUZXh0OiBzdHJpbmc7XG4gICAgcHVibGljIG1hcmtlcjogSURheU1hcmtlcjtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIHBhcmFtczogTW9kYWxEaWFsb2dQYXJhbXMsXG4gICAgKSB7IFxuICAgICAgICB0aGlzLmRheVRleHQgPSBwYXJhbXMuY29udGV4dC5kYXlUZXh0LFxuICAgICAgICB0aGlzLm1hcmtlciA9IHBhcmFtcy5jb250ZXh0Lm1hcmtlclxuICAgIH1cblxuICAgIG5nT25Jbml0KCkgeyB9XG5cbiAgICBvblRhcChtYXJrZXI6IElEYXlNYXJrZXIpIHtcbiAgICAgICAgdGhpcy5wYXJhbXMuY2xvc2VDYWxsYmFjayh7XG4gICAgICAgICAgICBtYXJrZXI6IG1hcmtlcixcbiAgICAgICAgICAgIGRheVRleHQ6IHRoaXMuZGF5VGV4dCAgICAgICAgICAgIFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnZXRSb3coaTogbnVtYmVyKSB7XG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKGkgLyB0aGlzLmNvbE51bSk7XG4gICAgfVxuXG4gICAgZ2V0Q29sKGk6IG51bWJlcikge1xuICAgICAgICByZXR1cm4gaSAlIHRoaXMuY29sTnVtO1xuICAgIH1cblxuICAgIG9uU2F2ZSgpIHtcbiAgICAgICAgdGhpcy5wYXJhbXMuY2xvc2VDYWxsYmFjayh7XG4gICAgICAgICAgICBkYXlUZXh0OiB0aGlzLmRheVRleHQsXG4gICAgICAgICAgICBtYXJrZXI6IHRoaXMubWFya2VyXG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiJdfQ==