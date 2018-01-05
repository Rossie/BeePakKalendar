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
