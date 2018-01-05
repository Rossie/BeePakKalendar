"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var image_select_component_1 = require("./image-select/image-select.component");
var image_crop_component_1 = require("./image-crop/image-crop.component");
var image_calendar_component_1 = require("./image-calendar/image-calendar.component");
var image_result_component_1 = require("./image-result/image-result.component");
var routes = [
    { path: "", redirectTo: "/image-select", pathMatch: "full" },
    // { path: "", redirectTo: "/image-calendar", pathMatch: "full" }, // test case
    { path: "image-select", component: image_select_component_1.ImageSelectComponent },
    { path: "image-crop", component: image_crop_component_1.ImageCropComponent },
    { path: "image-calendar", component: image_calendar_component_1.ImageCalendarComponent },
    { path: "image-result", component: image_result_component_1.ImageResultComponent },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.NativeScriptRouterModule.forRoot(routes)],
            exports: [router_1.NativeScriptRouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
