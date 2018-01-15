"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var PanAndScaleComponent = (function () {
    // @Input('scale') scale:number = 1;
    function PanAndScaleComponent(page) {
        this.page = page;
        // public left:number = 0;
        // public top:number = 0;
        this.tap_x = 0;
        this.tap_y = 0;
        this.startScale = 1;
        this.innerPan = new core_1.EventEmitter();
        this.scale = 1;
        this.left = 0;
        this.top = 0;
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
        this.innerPan.emit(event);
    };
    __decorate([
        core_1.Output('innerPan'),
        __metadata("design:type", core_1.EventEmitter)
    ], PanAndScaleComponent.prototype, "innerPan", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], PanAndScaleComponent.prototype, "scale", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], PanAndScaleComponent.prototype, "left", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], PanAndScaleComponent.prototype, "top", void 0);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFuLWFuZC1zY2FsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwYW4tYW5kLXNjYWxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFzSTtBQUl0SSxnQ0FBK0I7QUFTL0I7SUFXRSxvQ0FBb0M7SUFFcEMsOEJBQ1UsSUFBUztRQUFULFNBQUksR0FBSixJQUFJLENBQUs7UUFibkIsMEJBQTBCO1FBQzFCLHlCQUF5QjtRQUNqQixVQUFLLEdBQVUsQ0FBQyxDQUFDO1FBQ2pCLFVBQUssR0FBVSxDQUFDLENBQUM7UUFDakIsZUFBVSxHQUFVLENBQUMsQ0FBQztRQUVWLGFBQVEsR0FBcUMsSUFBSSxtQkFBWSxFQUFFLENBQUM7UUFDM0UsVUFBSyxHQUFVLENBQUMsQ0FBQztRQUNqQixTQUFJLEdBQVUsQ0FBQyxDQUFDO1FBQ2hCLFFBQUcsR0FBVSxDQUFDLENBQUM7SUFNeEIsQ0FBQztJQUVELHVDQUFRLEdBQVI7SUFDQSxDQUFDO0lBRUQsb0NBQUssR0FBTCxVQUFNLEtBQTBCO1FBQzlCLDZDQUE2QztRQUM3QyxNQUFNLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUNwQixLQUFLLENBQUM7Z0JBQ0osSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO2dCQUN2QixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUM7Z0JBQ3RCLEtBQUssQ0FBQztZQUNSLEtBQUssQ0FBQztnQkFDSixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQztnQkFDdEMsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUM7Z0JBQ3JDLEtBQUssQ0FBQztRQUNWLENBQUM7UUFFRCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBNUJtQjtRQUFuQixhQUFNLENBQUMsVUFBVSxDQUFDO2tDQUFVLG1CQUFZOzBEQUEyQztJQUMzRTtRQUFSLFlBQUssRUFBRTs7dURBQWtCO0lBQ2pCO1FBQVIsWUFBSyxFQUFFOztzREFBaUI7SUFDaEI7UUFBUixZQUFLLEVBQUU7O3FEQUFnQjtJQVZiLG9CQUFvQjtRQU5oQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxtQkFBbUI7WUFDN0IsV0FBVyxFQUFFLGdDQUFnQztZQUM3QyxTQUFTLEVBQUUsQ0FBQyxnQ0FBZ0MsQ0FBQztTQUM5QyxDQUFDO3lDQWVlLFdBQUk7T0FkUixvQkFBb0IsQ0FxQ2hDO0lBQUQsMkJBQUM7Q0FBQSxBQXJDRCxJQXFDQztBQXJDWSxvREFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgRWxlbWVudFJlZiwgVmlld0NoaWxkLCBDb250ZW50Q2hpbGQsIElucHV0LCBBZnRlckNvbnRlbnRJbml0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGFuR2VzdHVyZUV2ZW50RGF0YSwgR2VzdHVyZVR5cGVzIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9nZXN0dXJlcy9nZXN0dXJlcyc7XG5pbXBvcnQgeyBWaWV3IH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9jb3JlL3ZpZXcnO1xuaW1wb3J0IHsgRXZlbnREYXRhIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGUvb2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcbmltcG9ydCB7IEFmdGVyVmlld0luaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlL3NyYy9tZXRhZGF0YS9saWZlY3ljbGVfaG9va3MnO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdhcHAtcGFuLWFuZC1zY2FsZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9wYW4tYW5kLXNjYWxlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcGFuLWFuZC1zY2FsZS5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFBhbkFuZFNjYWxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgLy8gcHVibGljIGxlZnQ6bnVtYmVyID0gMDtcbiAgLy8gcHVibGljIHRvcDpudW1iZXIgPSAwO1xuICBwcml2YXRlIHRhcF94Om51bWJlciA9IDA7XG4gIHByaXZhdGUgdGFwX3k6bnVtYmVyID0gMDtcbiAgcHJpdmF0ZSBzdGFydFNjYWxlOm51bWJlciA9IDE7XG5cbiAgQE91dHB1dCgnaW5uZXJQYW4nKSBpbm5lclBhbjpFdmVudEVtaXR0ZXI8UGFuR2VzdHVyZUV2ZW50RGF0YT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBJbnB1dCgpIHNjYWxlOm51bWJlciA9IDE7XG4gIEBJbnB1dCgpIGxlZnQ6bnVtYmVyID0gMDtcbiAgQElucHV0KCkgdG9wOm51bWJlciA9IDA7XG4gIC8vIEBJbnB1dCgnc2NhbGUnKSBzY2FsZTpudW1iZXIgPSAxO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcGFnZTpQYWdlXG4gICkgeyBcbiAgfVxuICBcbiAgbmdPbkluaXQoKSB7XG4gIH1cbiAgXG4gIG9uUGFuKGV2ZW50OiBQYW5HZXN0dXJlRXZlbnREYXRhKSB7XG4gICAgLy8gY29uc29sZS5sb2coZXZlbnQuZXZlbnROYW1lLCBldmVudC5zdGF0ZSk7XG4gICAgc3dpdGNoIChldmVudC5zdGF0ZSkge1xuICAgICAgY2FzZSAxOlxuICAgICAgICB0aGlzLnRhcF94ID0gdGhpcy5sZWZ0O1xuICAgICAgICB0aGlzLnRhcF95ID0gdGhpcy50b3A7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAyOlxuICAgICAgICB0aGlzLmxlZnQgPSB0aGlzLnRhcF94ICsgZXZlbnQuZGVsdGFYO1xuICAgICAgICB0aGlzLnRvcCA9IHRoaXMudGFwX3kgKyBldmVudC5kZWx0YVk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBcbiAgICB0aGlzLmlubmVyUGFuLmVtaXQoZXZlbnQpO1xuICB9XG5cbn1cbiJdfQ==