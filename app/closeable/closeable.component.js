"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var settings = require("application-settings");
var CloseableComponent = (function () {
    function CloseableComponent() {
        this.onClosed = new core_1.EventEmitter();
        this.closed = false;
        this.settingsName = '';
    }
    CloseableComponent.prototype.ngOnInit = function () {
        if (this.settingsName) {
            this.closed = settings.getBoolean(this.settingsName, false);
        }
    };
    CloseableComponent.prototype.close = function () {
        this.closed = true;
        if (this.settingsName) {
            settings.setBoolean(this.settingsName, true);
        }
        this.onClosed.emit(this.closed);
    };
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], CloseableComponent.prototype, "onClosed", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], CloseableComponent.prototype, "closed", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], CloseableComponent.prototype, "settingsName", void 0);
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
