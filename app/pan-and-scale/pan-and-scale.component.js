"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var PanAndScaleComponent = (function () {
    function PanAndScaleComponent(page) {
        this.page = page;
        this.left = 0;
        this.top = 0;
        this.tap_x = 0;
        this.tap_y = 0;
        this.startScale = 1;
        this.scale = 1;
    }
    PanAndScaleComponent.prototype.ngOnInit = function () {
    };
    PanAndScaleComponent.prototype.onPan = function (event) {
        // console.log(event.eventName, event.state);
        switch (event.state) {
            case 1:
                this.tap_x = this.left;
                this.tap_y = this.top;
                break;
            case 2:
                this.left = this.tap_x + event.deltaX;
                this.top = this.tap_y + event.deltaY;
                break;
        }
    };
    PanAndScaleComponent.prototype.onScalePan = function (event, position) {
        /* switch (event.state) {
          case 1:
            this.startScale = this.content.scaleX;
            break;
          case 2:
            Math.atan2(event.deltaY, event.deltaX);
          break;
        }*/
    };
    __decorate([
        core_1.Input('scale'),
        __metadata("design:type", Number)
    ], PanAndScaleComponent.prototype, "scale", void 0);
    PanAndScaleComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-pan-and-scale',
            templateUrl: './pan-and-scale.component.html',
            styleUrls: ['./pan-and-scale.component.scss']
        }),
        __metadata("design:paramtypes", [page_1.Page])
    ], PanAndScaleComponent);
    return PanAndScaleComponent;
}());
exports.PanAndScaleComponent = PanAndScaleComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFuLWFuZC1zY2FsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwYW4tYW5kLXNjYWxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFnSDtBQUloSCxnQ0FBK0I7QUFTL0I7SUFTRSw4QkFDVSxJQUFTO1FBQVQsU0FBSSxHQUFKLElBQUksQ0FBSztRQVRaLFNBQUksR0FBVSxDQUFDLENBQUM7UUFDaEIsUUFBRyxHQUFVLENBQUMsQ0FBQztRQUNkLFVBQUssR0FBVSxDQUFDLENBQUM7UUFDakIsVUFBSyxHQUFVLENBQUMsQ0FBQztRQUNqQixlQUFVLEdBQVUsQ0FBQyxDQUFDO1FBRWQsVUFBSyxHQUFVLENBQUMsQ0FBQztJQUtqQyxDQUFDO0lBRUQsdUNBQVEsR0FBUjtJQUNBLENBQUM7SUFFRCxvQ0FBSyxHQUFMLFVBQU0sS0FBMEI7UUFDOUIsNkNBQTZDO1FBQzdDLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ3BCLEtBQUssQ0FBQztnQkFDSixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7Z0JBQ3ZCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQztnQkFDdEIsS0FBSyxDQUFDO1lBQ1IsS0FBSyxDQUFDO2dCQUNKLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDO2dCQUN0QyxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQztnQkFDckMsS0FBSyxDQUFDO1FBQ1YsQ0FBQztJQUNILENBQUM7SUFFRCx5Q0FBVSxHQUFWLFVBQVcsS0FBMEIsRUFBRSxRQUFRO1FBQzdDOzs7Ozs7O1dBT0c7SUFDTCxDQUFDO0lBakNlO1FBQWYsWUFBSyxDQUFDLE9BQU8sQ0FBQzs7dURBQWtCO0lBUHRCLG9CQUFvQjtRQU5oQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxtQkFBbUI7WUFDN0IsV0FBVyxFQUFFLGdDQUFnQztZQUM3QyxTQUFTLEVBQUUsQ0FBQyxnQ0FBZ0MsQ0FBQztTQUM5QyxDQUFDO3lDQVdlLFdBQUk7T0FWUixvQkFBb0IsQ0EwQ2hDO0lBQUQsMkJBQUM7Q0FBQSxBQTFDRCxJQTBDQztBQTFDWSxvREFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgRWxlbWVudFJlZiwgVmlld0NoaWxkLCBDb250ZW50Q2hpbGQsIElucHV0LCBBZnRlckNvbnRlbnRJbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQYW5HZXN0dXJlRXZlbnREYXRhLCBHZXN0dXJlVHlwZXMgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL2dlc3R1cmVzL2dlc3R1cmVzJztcbmltcG9ydCB7IFZpZXcgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL2NvcmUvdmlldyc7XG5pbXBvcnQgeyBFdmVudERhdGEgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZS9vYnNlcnZhYmxlJztcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xuaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUvc3JjL21ldGFkYXRhL2xpZmVjeWNsZV9ob29rcyc7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ2FwcC1wYW4tYW5kLXNjYWxlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3Bhbi1hbmQtc2NhbGUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9wYW4tYW5kLXNjYWxlLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgUGFuQW5kU2NhbGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBwdWJsaWMgbGVmdDpudW1iZXIgPSAwO1xuICBwdWJsaWMgdG9wOm51bWJlciA9IDA7XG4gIHByaXZhdGUgdGFwX3g6bnVtYmVyID0gMDtcbiAgcHJpdmF0ZSB0YXBfeTpudW1iZXIgPSAwO1xuICBwcml2YXRlIHN0YXJ0U2NhbGU6bnVtYmVyID0gMTtcblxuICBASW5wdXQoJ3NjYWxlJykgc2NhbGU6bnVtYmVyID0gMTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHBhZ2U6UGFnZVxuICApIHsgXG4gIH1cbiAgXG4gIG5nT25Jbml0KCkge1xuICB9XG4gIFxuICBvblBhbihldmVudDogUGFuR2VzdHVyZUV2ZW50RGF0YSkge1xuICAgIC8vIGNvbnNvbGUubG9nKGV2ZW50LmV2ZW50TmFtZSwgZXZlbnQuc3RhdGUpO1xuICAgIHN3aXRjaCAoZXZlbnQuc3RhdGUpIHtcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgdGhpcy50YXBfeCA9IHRoaXMubGVmdDtcbiAgICAgICAgdGhpcy50YXBfeSA9IHRoaXMudG9wO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMjpcbiAgICAgICAgdGhpcy5sZWZ0ID0gdGhpcy50YXBfeCArIGV2ZW50LmRlbHRhWDtcbiAgICAgICAgdGhpcy50b3AgPSB0aGlzLnRhcF95ICsgZXZlbnQuZGVsdGFZO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBvblNjYWxlUGFuKGV2ZW50OiBQYW5HZXN0dXJlRXZlbnREYXRhLCBwb3NpdGlvbikge1xuICAgIC8qIHN3aXRjaCAoZXZlbnQuc3RhdGUpIHtcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgdGhpcy5zdGFydFNjYWxlID0gdGhpcy5jb250ZW50LnNjYWxlWDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDI6XG4gICAgICAgIE1hdGguYXRhbjIoZXZlbnQuZGVsdGFZLCBldmVudC5kZWx0YVgpO1xuICAgICAgYnJlYWs7XG4gICAgfSovXG4gIH1cblxufVxuIl19