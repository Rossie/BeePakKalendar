"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var CloseableComponent = (function () {
    function CloseableComponent() {
        this.closed = false;
    }
    CloseableComponent.prototype.ngOnInit = function () { };
    CloseableComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-closeable',
            templateUrl: './closeable.component.html',
            styleUrls: ['./closeable.component.scss']
        }),
        __metadata("design:paramtypes", [])
    ], CloseableComponent);
    return CloseableComponent;
}());
exports.CloseableComponent = CloseableComponent;
