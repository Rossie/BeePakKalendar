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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFuLWFuZC1zY2FsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwYW4tYW5kLXNjYWxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFnSDtBQUloSCxnQ0FBK0I7QUFTL0I7SUFTRSw4QkFDVSxJQUFTO1FBQVQsU0FBSSxHQUFKLElBQUksQ0FBSztRQVRYLFNBQUksR0FBVSxDQUFDLENBQUM7UUFDaEIsUUFBRyxHQUFVLENBQUMsQ0FBQztRQUNmLFVBQUssR0FBVSxDQUFDLENBQUM7UUFDakIsVUFBSyxHQUFVLENBQUMsQ0FBQztRQUNqQixlQUFVLEdBQVUsQ0FBQyxDQUFDO1FBRWQsVUFBSyxHQUFVLENBQUMsQ0FBQztJQUtqQyxDQUFDO0lBRUQsdUNBQVEsR0FBUjtJQUNBLENBQUM7SUFFRCxvQ0FBSyxHQUFMLFVBQU0sS0FBMEI7UUFDOUIsNkNBQTZDO1FBQzdDLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ3BCLEtBQUssQ0FBQztnQkFDSixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7Z0JBQ3ZCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQztnQkFDdEIsS0FBSyxDQUFDO1lBQ1IsS0FBSyxDQUFDO2dCQUNKLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDO2dCQUN0QyxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQztnQkFDckMsS0FBSyxDQUFDO1FBQ1YsQ0FBQztJQUNILENBQUM7SUFFRCx5Q0FBVSxHQUFWLFVBQVcsS0FBMEIsRUFBRSxRQUFRO1FBQzdDOzs7Ozs7O1dBT0c7SUFDTCxDQUFDO0lBakNlO1FBQWYsWUFBSyxDQUFDLE9BQU8sQ0FBQzs7dURBQWtCO0lBUHRCLG9CQUFvQjtRQU5oQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxtQkFBbUI7WUFDN0IsV0FBVyxFQUFFLGdDQUFnQztZQUM3QyxTQUFTLEVBQUUsQ0FBQyxnQ0FBZ0MsQ0FBQztTQUM5QyxDQUFDO3lDQVdlLFdBQUk7T0FWUixvQkFBb0IsQ0EwQ2hDO0lBQUQsMkJBQUM7Q0FBQSxBQTFDRCxJQTBDQztBQTFDWSxvREFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgRWxlbWVudFJlZiwgVmlld0NoaWxkLCBDb250ZW50Q2hpbGQsIElucHV0LCBBZnRlckNvbnRlbnRJbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQYW5HZXN0dXJlRXZlbnREYXRhLCBHZXN0dXJlVHlwZXMgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL2dlc3R1cmVzL2dlc3R1cmVzJztcbmltcG9ydCB7IFZpZXcgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL2NvcmUvdmlldyc7XG5pbXBvcnQgeyBFdmVudERhdGEgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZS9vYnNlcnZhYmxlJztcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xuaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUvc3JjL21ldGFkYXRhL2xpZmVjeWNsZV9ob29rcyc7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ2FwcC1wYW4tYW5kLXNjYWxlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3Bhbi1hbmQtc2NhbGUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9wYW4tYW5kLXNjYWxlLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgUGFuQW5kU2NhbGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBwcml2YXRlIGxlZnQ6bnVtYmVyID0gMDtcbiAgcHJpdmF0ZSB0b3A6bnVtYmVyID0gMDtcbiAgcHJpdmF0ZSB0YXBfeDpudW1iZXIgPSAwO1xuICBwcml2YXRlIHRhcF95Om51bWJlciA9IDA7XG4gIHByaXZhdGUgc3RhcnRTY2FsZTpudW1iZXIgPSAxO1xuXG4gIEBJbnB1dCgnc2NhbGUnKSBzY2FsZTpudW1iZXIgPSAxO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcGFnZTpQYWdlXG4gICkgeyBcbiAgfVxuICBcbiAgbmdPbkluaXQoKSB7XG4gIH1cbiAgXG4gIG9uUGFuKGV2ZW50OiBQYW5HZXN0dXJlRXZlbnREYXRhKSB7XG4gICAgLy8gY29uc29sZS5sb2coZXZlbnQuZXZlbnROYW1lLCBldmVudC5zdGF0ZSk7XG4gICAgc3dpdGNoIChldmVudC5zdGF0ZSkge1xuICAgICAgY2FzZSAxOlxuICAgICAgICB0aGlzLnRhcF94ID0gdGhpcy5sZWZ0O1xuICAgICAgICB0aGlzLnRhcF95ID0gdGhpcy50b3A7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAyOlxuICAgICAgICB0aGlzLmxlZnQgPSB0aGlzLnRhcF94ICsgZXZlbnQuZGVsdGFYO1xuICAgICAgICB0aGlzLnRvcCA9IHRoaXMudGFwX3kgKyBldmVudC5kZWx0YVk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIG9uU2NhbGVQYW4oZXZlbnQ6IFBhbkdlc3R1cmVFdmVudERhdGEsIHBvc2l0aW9uKSB7XG4gICAgLyogc3dpdGNoIChldmVudC5zdGF0ZSkge1xuICAgICAgY2FzZSAxOlxuICAgICAgICB0aGlzLnN0YXJ0U2NhbGUgPSB0aGlzLmNvbnRlbnQuc2NhbGVYO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMjpcbiAgICAgICAgTWF0aC5hdGFuMihldmVudC5kZWx0YVksIGV2ZW50LmRlbHRhWCk7XG4gICAgICBicmVhaztcbiAgICB9Ki9cbiAgfVxuXG59XG4iXX0=