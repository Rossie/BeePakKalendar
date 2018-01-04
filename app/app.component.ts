import { Component } from "@angular/core";
import { SettingsService } from "./settings.service";

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html"
})

export class AppComponent {
    constructor(
        private settings:SettingsService, // need to inject to be created
    ) { }
}
