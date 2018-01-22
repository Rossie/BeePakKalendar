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
