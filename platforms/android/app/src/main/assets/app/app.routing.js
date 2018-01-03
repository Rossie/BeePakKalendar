"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var image_select_component_1 = require("./image-select/image-select.component");
var image_crop_component_1 = require("./image-crop/image-crop.component");
var image_calendar_component_1 = require("./image-calendar/image-calendar.component");
var image_result_component_1 = require("./image-result/image-result.component");
var routes = [
    // { path: "", redirectTo: "/image-select", pathMatch: "full" },
    { path: "", redirectTo: "/image-calendar", pathMatch: "full" },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnJvdXRpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHAucm91dGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5QztBQUN6QyxzREFBdUU7QUFHdkUsZ0ZBQTZFO0FBQzdFLDBFQUF1RTtBQUN2RSxzRkFBbUY7QUFDbkYsZ0ZBQTZFO0FBRTdFLElBQU0sTUFBTSxHQUFXO0lBQ25CLGdFQUFnRTtJQUNoRSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUU7SUFDOUQsRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFFLFNBQVMsRUFBRSw2Q0FBb0IsRUFBRTtJQUN6RCxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLHlDQUFrQixFQUFFO0lBQ3JELEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFLFNBQVMsRUFBRSxpREFBc0IsRUFBRTtJQUM3RCxFQUFFLElBQUksRUFBRSxjQUFjLEVBQUUsU0FBUyxFQUFFLDZDQUFvQixFQUFFO0NBQzVELENBQUM7QUFNRjtJQUFBO0lBQWdDLENBQUM7SUFBcEIsZ0JBQWdCO1FBSjVCLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRSxDQUFDLGlDQUF3QixDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNuRCxPQUFPLEVBQUUsQ0FBQyxpQ0FBd0IsQ0FBQztTQUN0QyxDQUFDO09BQ1csZ0JBQWdCLENBQUk7SUFBRCx1QkFBQztDQUFBLEFBQWpDLElBQWlDO0FBQXBCLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IFJvdXRlcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcblxuaW1wb3J0IHsgSW1hZ2VTZWxlY3RDb21wb25lbnQgfSBmcm9tIFwiLi9pbWFnZS1zZWxlY3QvaW1hZ2Utc2VsZWN0LmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgSW1hZ2VDcm9wQ29tcG9uZW50IH0gZnJvbSBcIi4vaW1hZ2UtY3JvcC9pbWFnZS1jcm9wLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgSW1hZ2VDYWxlbmRhckNvbXBvbmVudCB9IGZyb20gXCIuL2ltYWdlLWNhbGVuZGFyL2ltYWdlLWNhbGVuZGFyLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgSW1hZ2VSZXN1bHRDb21wb25lbnQgfSBmcm9tIFwiLi9pbWFnZS1yZXN1bHQvaW1hZ2UtcmVzdWx0LmNvbXBvbmVudFwiO1xuXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcbiAgICAvLyB7IHBhdGg6IFwiXCIsIHJlZGlyZWN0VG86IFwiL2ltYWdlLXNlbGVjdFwiLCBwYXRoTWF0Y2g6IFwiZnVsbFwiIH0sXG4gICAgeyBwYXRoOiBcIlwiLCByZWRpcmVjdFRvOiBcIi9pbWFnZS1jYWxlbmRhclwiLCBwYXRoTWF0Y2g6IFwiZnVsbFwiIH0sIC8vIHRlc3QgY2FzZVxuICAgIHsgcGF0aDogXCJpbWFnZS1zZWxlY3RcIiwgY29tcG9uZW50OiBJbWFnZVNlbGVjdENvbXBvbmVudCB9LFxuICAgIHsgcGF0aDogXCJpbWFnZS1jcm9wXCIsIGNvbXBvbmVudDogSW1hZ2VDcm9wQ29tcG9uZW50IH0sXG4gICAgeyBwYXRoOiBcImltYWdlLWNhbGVuZGFyXCIsIGNvbXBvbmVudDogSW1hZ2VDYWxlbmRhckNvbXBvbmVudCB9LFxuICAgIHsgcGF0aDogXCJpbWFnZS1yZXN1bHRcIiwgY29tcG9uZW50OiBJbWFnZVJlc3VsdENvbXBvbmVudCB9LFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvclJvb3Qocm91dGVzKV0sXG4gICAgZXhwb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZV1cbn0pXG5leHBvcnQgY2xhc3MgQXBwUm91dGluZ01vZHVsZSB7IH0iXX0=