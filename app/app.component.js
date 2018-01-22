"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var settings_service_1 = require("./services/settings.service");
var AppComponent = (function () {
    function AppComponent(settings) {
        this.settings = settings;
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: "ns-app",
            templateUrl: "app.component.html"
        }),
        __metadata("design:paramtypes", [settings_service_1.SettingsService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
