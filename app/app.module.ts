import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";
import { ImageSelectComponent } from "./image-select/image-select.component";
import { ImageCropComponent } from "./image-crop/image-crop.component";
import { ImageCalendarComponent } from "./image-calendar/image-calendar.component";
import { ImageService } from "./image.service";
import { CalendarService } from "./calendar.service";
import { ViewMonthComponent } from "./view-month/view-month.component";
import { ImageResultComponent } from "./image-result/image-result.component";
import { DayMarkerComponent } from "./day-marker/day-marker.component";
import { SettingsService } from "./settings.service";
import { PanAndScaleComponent } from "./pan-and-scale/pan-and-scale.component";
import { MessageWinComponent } from "./message-win/message-win.component";
import { CloseableComponent } from "./closeable/closeable.component";

// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";

// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
// import { NativeScriptHttpModule } from "nativescript-angular/http";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        ImageSelectComponent,
        ImageCropComponent,
        ImageCalendarComponent,
        ViewMonthComponent,
        ImageResultComponent,
        DayMarkerComponent,
        PanAndScaleComponent,
        MessageWinComponent,
        CloseableComponent
    ],
    entryComponents: [
        DayMarkerComponent        
    ],
    providers: [
        ImageService,
        CalendarService,
        NativeScriptRouterModule,
        SettingsService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
