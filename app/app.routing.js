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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnJvdXRpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHAucm91dGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5QztBQUN6QyxzREFBdUU7QUFHdkUsZ0ZBQTZFO0FBQzdFLDBFQUF1RTtBQUN2RSxzRkFBbUY7QUFDbkYsZ0ZBQTZFO0FBRTdFLElBQU0sTUFBTSxHQUFXO0lBQ25CLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxVQUFVLEVBQUUsZUFBZSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUU7SUFDNUQsK0VBQStFO0lBQy9FLEVBQUUsSUFBSSxFQUFFLGNBQWMsRUFBRSxTQUFTLEVBQUUsNkNBQW9CLEVBQUU7SUFDekQsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSx5Q0FBa0IsRUFBRTtJQUNyRCxFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRSxTQUFTLEVBQUUsaURBQXNCLEVBQUU7SUFDN0QsRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFFLFNBQVMsRUFBRSw2Q0FBb0IsRUFBRTtDQUM1RCxDQUFDO0FBTUY7SUFBQTtJQUFnQyxDQUFDO0lBQXBCLGdCQUFnQjtRQUo1QixlQUFRLENBQUM7WUFDTixPQUFPLEVBQUUsQ0FBQyxpQ0FBd0IsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDbkQsT0FBTyxFQUFFLENBQUMsaUNBQXdCLENBQUM7U0FDdEMsQ0FBQztPQUNXLGdCQUFnQixDQUFJO0lBQUQsdUJBQUM7Q0FBQSxBQUFqQyxJQUFpQztBQUFwQiw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBSb3V0ZXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5cbmltcG9ydCB7IEltYWdlU2VsZWN0Q29tcG9uZW50IH0gZnJvbSBcIi4vaW1hZ2Utc2VsZWN0L2ltYWdlLXNlbGVjdC5jb21wb25lbnRcIjtcbmltcG9ydCB7IEltYWdlQ3JvcENvbXBvbmVudCB9IGZyb20gXCIuL2ltYWdlLWNyb3AvaW1hZ2UtY3JvcC5jb21wb25lbnRcIjtcbmltcG9ydCB7IEltYWdlQ2FsZW5kYXJDb21wb25lbnQgfSBmcm9tIFwiLi9pbWFnZS1jYWxlbmRhci9pbWFnZS1jYWxlbmRhci5jb21wb25lbnRcIjtcbmltcG9ydCB7IEltYWdlUmVzdWx0Q29tcG9uZW50IH0gZnJvbSBcIi4vaW1hZ2UtcmVzdWx0L2ltYWdlLXJlc3VsdC5jb21wb25lbnRcIjtcblxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG4gICAgeyBwYXRoOiBcIlwiLCByZWRpcmVjdFRvOiBcIi9pbWFnZS1zZWxlY3RcIiwgcGF0aE1hdGNoOiBcImZ1bGxcIiB9LFxuICAgIC8vIHsgcGF0aDogXCJcIiwgcmVkaXJlY3RUbzogXCIvaW1hZ2UtY2FsZW5kYXJcIiwgcGF0aE1hdGNoOiBcImZ1bGxcIiB9LCAvLyB0ZXN0IGNhc2VcbiAgICB7IHBhdGg6IFwiaW1hZ2Utc2VsZWN0XCIsIGNvbXBvbmVudDogSW1hZ2VTZWxlY3RDb21wb25lbnQgfSxcbiAgICB7IHBhdGg6IFwiaW1hZ2UtY3JvcFwiLCBjb21wb25lbnQ6IEltYWdlQ3JvcENvbXBvbmVudCB9LFxuICAgIHsgcGF0aDogXCJpbWFnZS1jYWxlbmRhclwiLCBjb21wb25lbnQ6IEltYWdlQ2FsZW5kYXJDb21wb25lbnQgfSxcbiAgICB7IHBhdGg6IFwiaW1hZ2UtcmVzdWx0XCIsIGNvbXBvbmVudDogSW1hZ2VSZXN1bHRDb21wb25lbnQgfSxcbl07XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JSb290KHJvdXRlcyldLFxuICAgIGV4cG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIEFwcFJvdXRpbmdNb2R1bGUgeyB9Il19