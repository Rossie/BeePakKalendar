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
        this.dayText = params.context.dayText;
        this.actMarker = params.context.day.marker;
        this.actualDay = params.context.day.date.format(calendar_service_1.FULL_DATE_FORMAT);
    }
    DayMarkerComponent.prototype.ngOnInit = function () { };
    DayMarkerComponent.prototype.compareDayMarkers = function (m1, m2) {
        return calendar_service_1.compareDayMarkers(m1, m2);
    };
    DayMarkerComponent.prototype.getCssClass = function (marker) {
        return marker.cssClass + (marker == this.actMarker ? 'marker-selected' : '');
    };
    DayMarkerComponent.prototype.getRow = function (i) {
        return Math.floor(i / this.colNum);
    };
    DayMarkerComponent.prototype.getCol = function (i) {
        return i % this.colNum;
    };
    DayMarkerComponent.prototype.onSelectMarker = function (marker) {
        this.actMarker = calendar_service_1.compareDayMarkers(marker, this.actMarker) ? null : marker;
    };
    DayMarkerComponent.prototype.onSave = function () {
        this.params.closeCallback({
            dayText: this.dayText,
            marker: this.actMarker
        });
    };
    DayMarkerComponent.prototype.onDelete = function () {
        this.params.closeCallback({
            marker: null
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF5LW1hcmtlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkYXktbWFya2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF3RTtBQUN4RSxrRUFBc0U7QUFDdEUsaUVBQXdHO0FBVXhHO0lBT0ksNEJBQ1ksTUFBeUI7UUFBekIsV0FBTSxHQUFOLE1BQU0sQ0FBbUI7UUFQOUIsWUFBTyxHQUFHLDBCQUFPLENBQUM7UUFDakIsV0FBTSxHQUFXLENBQUMsQ0FBQztRQVF2QixJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDO1FBQzNDLElBQUksQ0FBQyxTQUFTLEdBQVksTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSyxDQUFDLE1BQU0sQ0FBQyxtQ0FBZ0IsQ0FBQyxDQUFDO0lBQ2hGLENBQUM7SUFFRCxxQ0FBUSxHQUFSLGNBQWEsQ0FBQztJQUVkLDhDQUFpQixHQUFqQixVQUFrQixFQUFFLEVBQUUsRUFBRTtRQUNwQixNQUFNLENBQUMsb0NBQWlCLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFRCx3Q0FBVyxHQUFYLFVBQVksTUFBa0I7UUFDMUIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEdBQUcsQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLFNBQVMsR0FBRyxpQkFBaUIsR0FBRyxFQUFFLENBQUMsQ0FBQztJQUNqRixDQUFDO0lBRUQsbUNBQU0sR0FBTixVQUFPLENBQVM7UUFDWixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFRCxtQ0FBTSxHQUFOLFVBQU8sQ0FBUztRQUNaLE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUMzQixDQUFDO0lBRUQsMkNBQWMsR0FBZCxVQUFlLE1BQU07UUFDakIsSUFBSSxDQUFDLFNBQVMsR0FBRyxvQ0FBaUIsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLElBQUksR0FBRyxNQUFNLENBQUM7SUFDL0UsQ0FBQztJQUVELG1DQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQztZQUN0QixPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU87WUFDckIsTUFBTSxFQUFFLElBQUksQ0FBQyxTQUFTO1NBQ3pCLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxxQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUM7WUFDdEIsTUFBTSxFQUFFLElBQUk7U0FDZixDQUFDLENBQUM7SUFDUCxDQUFDO0lBaERRLGtCQUFrQjtRQU45QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxlQUFlO1lBQ3pCLFdBQVcsRUFBRSw2QkFBNkI7WUFDMUMsU0FBUyxFQUFFLENBQUMsNkJBQTZCLENBQUM7U0FDN0MsQ0FBQzt5Q0FTc0IsZ0NBQWlCO09BUjVCLGtCQUFrQixDQWlEOUI7SUFBRCx5QkFBQztDQUFBLEFBakRELElBaURDO0FBakRZLGdEQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuaW1wb3J0IHsgTW9kYWxEaWFsb2dQYXJhbXMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbW9kYWwtZGlhbG9nXCI7XG5pbXBvcnQgeyBJRGF5TWFya2VyLCBtYXJrZXJzLCBGVUxMX0RBVEVfRk9STUFULCBjb21wYXJlRGF5TWFya2VycyB9IGZyb20gJy4uL3NlcnZpY2VzL2NhbGVuZGFyLnNlcnZpY2UnO1xuaW1wb3J0IHsgTW9tZW50IH0gZnJvbSAnbW9tZW50JztcblxuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiAnbnMtZGF5LW1hcmtlcicsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2RheS1tYXJrZXIuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL2RheS1tYXJrZXIuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBEYXlNYXJrZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHB1YmxpYyBtYXJrZXJzID0gbWFya2VycztcbiAgICBwcml2YXRlIGNvbE51bTogbnVtYmVyID0gMztcbiAgICBwdWJsaWMgZGF5VGV4dDogc3RyaW5nO1xuICAgIHB1YmxpYyBhY3RNYXJrZXI6IElEYXlNYXJrZXI7XG4gICAgcHVibGljIGFjdHVhbERheTogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgcGFyYW1zOiBNb2RhbERpYWxvZ1BhcmFtcyxcbiAgICApIHtcbiAgICAgICAgdGhpcy5kYXlUZXh0ID0gcGFyYW1zLmNvbnRleHQuZGF5VGV4dDtcbiAgICAgICAgdGhpcy5hY3RNYXJrZXIgPSBwYXJhbXMuY29udGV4dC5kYXkubWFya2VyO1xuICAgICAgICB0aGlzLmFjdHVhbERheSA9ICg8TW9tZW50PnBhcmFtcy5jb250ZXh0LmRheS5kYXRlKS5mb3JtYXQoRlVMTF9EQVRFX0ZPUk1BVCk7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7IH1cblxuICAgIGNvbXBhcmVEYXlNYXJrZXJzKG0xLCBtMikge1xuICAgICAgICByZXR1cm4gY29tcGFyZURheU1hcmtlcnMobTEsIG0yKTtcbiAgICB9XG5cbiAgICBnZXRDc3NDbGFzcyhtYXJrZXI6IElEYXlNYXJrZXIpIHtcbiAgICAgICAgcmV0dXJuIG1hcmtlci5jc3NDbGFzcyArIChtYXJrZXIgPT0gdGhpcy5hY3RNYXJrZXIgPyAnbWFya2VyLXNlbGVjdGVkJyA6ICcnKTtcbiAgICB9XG5cbiAgICBnZXRSb3coaTogbnVtYmVyKSB7XG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKGkgLyB0aGlzLmNvbE51bSk7XG4gICAgfVxuXG4gICAgZ2V0Q29sKGk6IG51bWJlcikge1xuICAgICAgICByZXR1cm4gaSAlIHRoaXMuY29sTnVtO1xuICAgIH1cblxuICAgIG9uU2VsZWN0TWFya2VyKG1hcmtlcikge1xuICAgICAgICB0aGlzLmFjdE1hcmtlciA9IGNvbXBhcmVEYXlNYXJrZXJzKG1hcmtlciwgdGhpcy5hY3RNYXJrZXIpID8gbnVsbCA6IG1hcmtlcjtcbiAgICB9XG5cbiAgICBvblNhdmUoKSB7XG4gICAgICAgIHRoaXMucGFyYW1zLmNsb3NlQ2FsbGJhY2soe1xuICAgICAgICAgICAgZGF5VGV4dDogdGhpcy5kYXlUZXh0LFxuICAgICAgICAgICAgbWFya2VyOiB0aGlzLmFjdE1hcmtlclxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvbkRlbGV0ZSgpIHtcbiAgICAgICAgdGhpcy5wYXJhbXMuY2xvc2VDYWxsYmFjayh7XG4gICAgICAgICAgICBtYXJrZXI6IG51bGxcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIl19