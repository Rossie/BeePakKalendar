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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZ3Muc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNldHRpbmdzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0MsK0NBQWlEO0FBQ2pELDZMQUE2TDtBQUU3TCxJQUFNLGFBQWEsR0FBRyxlQUFlLENBQUM7QUFHdEM7SUFFRTtRQUNFOzs7Ozs7Ozs7Ozs7OzthQWNLO0lBQ1AsQ0FBQztJQUVELHFDQUFXLEdBQVg7UUFDRSxRQUFRLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBRUQsb0NBQVUsR0FBVjtRQUNFLE1BQU0sQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsSUFBSSxRQUFRLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7SUFDakYsQ0FBQztJQTFCVSxlQUFlO1FBRDNCLGlCQUFVLEVBQUU7O09BQ0EsZUFBZSxDQTRCM0I7SUFBRCxzQkFBQztDQUFBLEFBNUJELElBNEJDO0FBNUJZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0ICogYXMgc2V0dGluZ3MgZnJvbSBcImFwcGxpY2F0aW9uLXNldHRpbmdzXCI7XG4vLyBpbXBvcnQgeyBvbiBhcyBhcHBsaWNhdGlvbk9uLCBsYXVuY2hFdmVudCwgc3VzcGVuZEV2ZW50LCByZXN1bWVFdmVudCwgZXhpdEV2ZW50LCBsb3dNZW1vcnlFdmVudCwgdW5jYXVnaHRFcnJvckV2ZW50LCBBcHBsaWNhdGlvbkV2ZW50RGF0YSwgc3RhcnQgYXMgYXBwbGljYXRpb25TdGFydCB9IGZyb20gXCJhcHBsaWNhdGlvblwiO1xuXG5jb25zdCBOT1RfRklSU1RfUlVOID0gXCJub3RfZmlyc3RfcnVuXCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTZXR0aW5nc1NlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyAgICAgXG4gICAgLyphcHBsaWNhdGlvbk9uKGxhdW5jaEV2ZW50LCBmdW5jdGlvbiAoYXJnczogQXBwbGljYXRpb25FdmVudERhdGEpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiTGF1bmNoZWQgQW5kcm9pZCBhcHBsaWNhdGlvbiB3aXRoIHRoZSBmb2xsb3dpbmcgaW50ZW50OiBcIiArIGFyZ3MuYW5kcm9pZCArIFwiLlwiKTtcbiAgICB9KTtcblxuICAgIGFwcGxpY2F0aW9uT24oc3VzcGVuZEV2ZW50LCBmdW5jdGlvbiAoYXJnczogQXBwbGljYXRpb25FdmVudERhdGEpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwic3VzcGVuZEV2ZW50OiBcIiArIGFyZ3MuYW5kcm9pZCk7XG4gICAgfSk7XG4gICAgXG4gICAgYXBwbGljYXRpb25PbihyZXN1bWVFdmVudCwgZnVuY3Rpb24gKGFyZ3M6IEFwcGxpY2F0aW9uRXZlbnREYXRhKSB7XG4gICAgICBjb25zb2xlLmxvZyhcInJlc3VtZUV2ZW50OiBcIiArIGFyZ3MuYW5kcm9pZCk7XG4gICAgfSk7XG4gICAgXG4gICAgYXBwbGljYXRpb25PbihleGl0RXZlbnQsIGZ1bmN0aW9uIChhcmdzOiBBcHBsaWNhdGlvbkV2ZW50RGF0YSkge1xuICAgICAgY29uc29sZS5sb2coXCJBY3Rpdml0eTogZXhpdEV2ZW50IFwiICsgYXJncy5hbmRyb2lkKTtcbiAgICB9KTsqL1xuICB9XG5cbiAgbm90Rmlyc3RSdW4oKSB7XG4gICAgc2V0dGluZ3Muc2V0Qm9vbGVhbihOT1RfRklSU1RfUlVOLCB0cnVlKTtcbiAgfVxuXG4gIGlzRmlyc3RSdW4oKSB7XG4gICAgcmV0dXJuICEoc2V0dGluZ3MuaGFzS2V5KE5PVF9GSVJTVF9SVU4pICYmIHNldHRpbmdzLmdldEJvb2xlYW4oTk9UX0ZJUlNUX1JVTikpO1xuICB9XG5cbn1cbiJdfQ==