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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0QsZ0ZBQThFO0FBQzlFLHNEQUF1RTtBQUV2RSw2Q0FBaUQ7QUFDakQsaURBQStDO0FBQy9DLGdGQUE2RTtBQUM3RSwwRUFBdUU7QUFDdkUsc0ZBQW1GO0FBQ25GLGlEQUErQztBQUMvQyx1REFBcUQ7QUFDckQsMEVBQXVFO0FBQ3ZFLGdGQUE2RTtBQUM3RSwwRUFBdUU7QUFDdkUsdURBQXFEO0FBQ3JELG1GQUErRTtBQUMvRSw2RUFBMEU7QUFFMUUsMkVBQTJFO0FBQzNFLHdFQUF3RTtBQUV4RSw2RUFBNkU7QUFDN0Usc0VBQXNFO0FBcUN0RTtJQUhBOztNQUVFO0lBQ0Y7SUFBeUIsQ0FBQztJQUFiLFNBQVM7UUFuQ3JCLGVBQVEsQ0FBQztZQUNOLFNBQVMsRUFBRTtnQkFDUCw0QkFBWTthQUNmO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHdDQUFrQjtnQkFDbEIsOEJBQWdCO2FBQ25CO1lBQ0QsWUFBWSxFQUFFO2dCQUNWLDRCQUFZO2dCQUNaLDZDQUFvQjtnQkFDcEIseUNBQWtCO2dCQUNsQixpREFBc0I7Z0JBQ3RCLHlDQUFrQjtnQkFDbEIsNkNBQW9CO2dCQUNwQix5Q0FBa0I7Z0JBQ2xCLDhDQUFvQjtnQkFDcEIsMkNBQW1CO2FBQ3RCO1lBQ0QsZUFBZSxFQUFFO2dCQUNiLHlDQUFrQjthQUNyQjtZQUNELFNBQVMsRUFBRTtnQkFDUCw0QkFBWTtnQkFDWixrQ0FBZTtnQkFDZixpQ0FBd0I7Z0JBQ3hCLGtDQUFlO2FBQ2xCO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHVCQUFnQjthQUNuQjtTQUNKLENBQUM7UUFDRjs7VUFFRTtPQUNXLFNBQVMsQ0FBSTtJQUFELGdCQUFDO0NBQUEsQUFBMUIsSUFBMEI7QUFBYiw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5cbmltcG9ydCB7IEFwcFJvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi9hcHAucm91dGluZ1wiO1xuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSBcIi4vYXBwLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgSW1hZ2VTZWxlY3RDb21wb25lbnQgfSBmcm9tIFwiLi9pbWFnZS1zZWxlY3QvaW1hZ2Utc2VsZWN0LmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgSW1hZ2VDcm9wQ29tcG9uZW50IH0gZnJvbSBcIi4vaW1hZ2UtY3JvcC9pbWFnZS1jcm9wLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgSW1hZ2VDYWxlbmRhckNvbXBvbmVudCB9IGZyb20gXCIuL2ltYWdlLWNhbGVuZGFyL2ltYWdlLWNhbGVuZGFyLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgSW1hZ2VTZXJ2aWNlIH0gZnJvbSBcIi4vaW1hZ2Uuc2VydmljZVwiO1xuaW1wb3J0IHsgQ2FsZW5kYXJTZXJ2aWNlIH0gZnJvbSBcIi4vY2FsZW5kYXIuc2VydmljZVwiO1xuaW1wb3J0IHsgVmlld01vbnRoQ29tcG9uZW50IH0gZnJvbSBcIi4vdmlldy1tb250aC92aWV3LW1vbnRoLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgSW1hZ2VSZXN1bHRDb21wb25lbnQgfSBmcm9tIFwiLi9pbWFnZS1yZXN1bHQvaW1hZ2UtcmVzdWx0LmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgRGF5TWFya2VyQ29tcG9uZW50IH0gZnJvbSBcIi4vZGF5LW1hcmtlci9kYXktbWFya2VyLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgU2V0dGluZ3NTZXJ2aWNlIH0gZnJvbSBcIi4vc2V0dGluZ3Muc2VydmljZVwiO1xuaW1wb3J0IHsgUGFuQW5kU2NhbGVDb21wb25lbnQgfSBmcm9tIFwiLi9wYW4tYW5kLXNjYWxlL3Bhbi1hbmQtc2NhbGUuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBNZXNzYWdlV2luQ29tcG9uZW50IH0gZnJvbSBcIi4vbWVzc2FnZS13aW4vbWVzc2FnZS13aW4uY29tcG9uZW50XCI7XG5cbi8vIFVuY29tbWVudCBhbmQgYWRkIHRvIE5nTW9kdWxlIGltcG9ydHMgaWYgeW91IG5lZWQgdG8gdXNlIHR3by13YXkgYmluZGluZ1xuLy8gaW1wb3J0IHsgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXNcIjtcblxuLy8gVW5jb21tZW50IGFuZCBhZGQgdG8gTmdNb2R1bGUgaW1wb3J0cyAgaWYgeW91IG5lZWQgdG8gdXNlIHRoZSBIVFRQIHdyYXBwZXJcbi8vIGltcG9ydCB7IE5hdGl2ZVNjcmlwdEh0dHBNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvaHR0cFwiO1xuXG5ATmdNb2R1bGUoe1xuICAgIGJvb3RzdHJhcDogW1xuICAgICAgICBBcHBDb21wb25lbnRcbiAgICBdLFxuICAgIGltcG9ydHM6IFtcbiAgICAgICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxuICAgICAgICBBcHBSb3V0aW5nTW9kdWxlXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgQXBwQ29tcG9uZW50LFxuICAgICAgICBJbWFnZVNlbGVjdENvbXBvbmVudCxcbiAgICAgICAgSW1hZ2VDcm9wQ29tcG9uZW50LFxuICAgICAgICBJbWFnZUNhbGVuZGFyQ29tcG9uZW50LFxuICAgICAgICBWaWV3TW9udGhDb21wb25lbnQsXG4gICAgICAgIEltYWdlUmVzdWx0Q29tcG9uZW50LFxuICAgICAgICBEYXlNYXJrZXJDb21wb25lbnQsXG4gICAgICAgIFBhbkFuZFNjYWxlQ29tcG9uZW50LFxuICAgICAgICBNZXNzYWdlV2luQ29tcG9uZW50LFxuICAgIF0sXG4gICAgZW50cnlDb21wb25lbnRzOiBbXG4gICAgICAgIERheU1hcmtlckNvbXBvbmVudCAgICAgICAgXG4gICAgXSxcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgSW1hZ2VTZXJ2aWNlLFxuICAgICAgICBDYWxlbmRhclNlcnZpY2UsXG4gICAgICAgIE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSxcbiAgICAgICAgU2V0dGluZ3NTZXJ2aWNlXG4gICAgXSxcbiAgICBzY2hlbWFzOiBbXG4gICAgICAgIE5PX0VSUk9SU19TQ0hFTUFcbiAgICBdXG59KVxuLypcblBhc3MgeW91ciBhcHBsaWNhdGlvbiBtb2R1bGUgdG8gdGhlIGJvb3RzdHJhcE1vZHVsZSBmdW5jdGlvbiBsb2NhdGVkIGluIG1haW4udHMgdG8gc3RhcnQgeW91ciBhcHBcbiovXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHsgfVxuIl19