"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var settings = require("application-settings");
// import { on as applicationOn, launchEvent, suspendEvent, resumeEvent, exitEvent, lowMemoryEvent, uncaughtErrorEvent, ApplicationEventData, start as applicationStart } from "application";
var NOT_FIRST_RUN = "not_first_run";
var SettingsService = (function () {
    function SettingsService() {
        /*applicationOn(launchEvent, function (args: ApplicationEventData) {
          console.log("Launched Android application with the following intent: " + args.android + ".");
        });
    
        applicationOn(suspendEvent, function (args: ApplicationEventData) {
          console.log("suspendEvent: " + args.android);
        });
        
        applicationOn(resumeEvent, function (args: ApplicationEventData) {
          console.log("resumeEvent: " + args.android);
        });
        
        applicationOn(exitEvent, function (args: ApplicationEventData) {
          console.log("Activity: exitEvent " + args.android);
        });*/
    }
    SettingsService.prototype.notFirstRun = function () {
        settings.setBoolean(NOT_FIRST_RUN, true);
    };
    SettingsService.prototype.isFirstRun = function () {
        return !(settings.hasKey(NOT_FIRST_RUN) && settings.getBoolean(NOT_FIRST_RUN));
    };
    SettingsService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], SettingsService);
    return SettingsService;
}());
exports.SettingsService = SettingsService;
