import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { ImageSelectComponent } from "./image-select/image-select.component";
import { ImageCropComponent } from "./image-crop/image-crop.component";
import { ImageCalendarComponent } from "./image-calendar/image-calendar.component";
import { ImageResultComponent } from "./image-result/image-result.component";

const routes: Routes = [
    // { path: "", redirectTo: "/image-select", pathMatch: "full" },
    { path: "", redirectTo: "/image-calendar", pathMatch: "full" }, // test case
    { path: "image-select", component: ImageSelectComponent },
    { path: "image-crop", component: ImageCropComponent },
    { path: "image-calendar", component: ImageCalendarComponent },
    { path: "image-result", component: ImageResultComponent },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }