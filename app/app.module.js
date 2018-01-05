"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var router_1 = require("nativescript-angular/router");
var app_routing_1 = require("./app.routing");
var app_component_1 = require("./app.component");
var image_select_component_1 = require("./image-select/image-select.component");
var image_crop_component_1 = require("./image-crop/image-crop.component");
var image_calendar_component_1 = require("./image-calendar/image-calendar.component");
var image_service_1 = require("./image.service");
var calendar_service_1 = require("./calendar.service");
var view_month_component_1 = require("./view-month/view-month.component");
var image_result_component_1 = require("./image-result/image-result.component");
var day_marker_component_1 = require("./day-marker/day-marker.component");
var settings_service_1 = require("./settings.service");
var pan_and_scale_component_1 = require("./pan-and-scale/pan-and-scale.component");
var message_win_component_1 = require("./message-win/message-win.component");
var closeable_component_1 = require("./closeable/closeable.component");
// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";
// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
// import { NativeScriptHttpModule } from "nativescript-angular/http";
var AppModule = (function () {
    /*
    Pass your application module to the bootstrapModule function located in main.ts to start your app
    */
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            bootstrap: [
                app_component_1.AppComponent
            ],
            imports: [
                nativescript_module_1.NativeScriptModule,
                app_routing_1.AppRoutingModule
            ],
            declarations: [
                app_component_1.AppComponent,
                image_select_component_1.ImageSelectComponent,
                image_crop_component_1.ImageCropComponent,
                image_calendar_component_1.ImageCalendarComponent,
                view_month_component_1.ViewMonthComponent,
                image_result_component_1.ImageResultComponent,
                day_marker_component_1.DayMarkerComponent,
                pan_and_scale_component_1.PanAndScaleComponent,
                message_win_component_1.MessageWinComponent,
                closeable_component_1.CloseableComponent
            ],
            entryComponents: [
                day_marker_component_1.DayMarkerComponent
            ],
            providers: [
                image_service_1.ImageService,
                calendar_service_1.CalendarService,
                router_1.NativeScriptRouterModule,
                settings_service_1.SettingsService
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
        /*
        Pass your application module to the bootstrapModule function located in main.ts to start your app
        */
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
