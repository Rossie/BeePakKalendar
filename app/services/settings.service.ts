import { Injectable } from '@angular/core';
import * as settings from "application-settings";
// import { on as applicationOn, launchEvent, suspendEvent, resumeEvent, exitEvent, lowMemoryEvent, uncaughtErrorEvent, ApplicationEventData, start as applicationStart } from "application";

const NOT_FIRST_RUN = "not_first_run";

@Injectable()
export class SettingsService {

  constructor() {     
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

  notFirstRun() {
    settings.setBoolean(NOT_FIRST_RUN, true);
  }

  isFirstRun() {
    return !(settings.hasKey(NOT_FIRST_RUN) && settings.getBoolean(NOT_FIRST_RUN));
  }

}
