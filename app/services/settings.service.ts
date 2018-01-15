import { Injectable } from '@angular/core';
import * as settings from "application-settings";
import * as moment from 'moment';
import { IDayMarker, IImageCalendar } from '../services/calendar.service'
import { Moment } from 'moment';
import * as _ from 'lodash';

const NOT_FIRST_RUN = "not_first_run";
const CALENDAR = "calendar";
const IMAGES = "images";

@Injectable()
export class SettingsService {
  _images: IImageCalendar[];
  _calendar: Object;

  constructor() {
    this.readCalendar();
    this.readImages();
  }

  /**
   * First run functions
   */
  notFirstRun() {
    settings.setBoolean(NOT_FIRST_RUN, true);
  }

  isFirstRun() {
    return !(settings.hasKey(NOT_FIRST_RUN) && settings.getBoolean(NOT_FIRST_RUN));
  }

  /**
   * Calendar managing functions
   */
  setDay(day: Moment, mark: IDayMarker) {
    let secs = day.startOf('day').unix();
    this._calendar[secs] = mark;
    this.saveCalendar();
  }

  getDay(day: Moment): IDayMarker {
    let secs = day.startOf('day').unix();
    return this._calendar.hasOwnProperty(secs) ? this._calendar[secs] : false;
  }

  private readCalendar() {
    if (!this._calendar) {
      this._calendar = JSON.parse(settings.getString(CALENDAR, '{}'));
    }
  }

  private saveCalendar() {
    settings.setString(CALENDAR, JSON.stringify(this._calendar));
  }

  /**
   * Image with calendar manage functions
   */
  private readImages() {
    this._images = JSON.parse(settings.getString(IMAGES, '[]'));
  }

  private saveImages() {
    settings.setString(IMAGES, JSON.stringify(this._images));
  }

  getImageList() {
    return Object.assign([], this._images); // clone array
  }

  addImage(imageCalendar: IImageCalendar) {
    this._images.push(imageCalendar);
    this.saveImages();
  }

  saveImageCalendar(imageCalendar: IImageCalendar) {
    let foundIC = _.find(this._images, {imageFile: imageCalendar.imageFile});
    // console.log('settings.service.ts: saveImageCalendar', JSON.stringify(imageCalendar, null, 4));
    if (foundIC) {
      Object.assign(foundIC, imageCalendar);
      this.saveImages();
    }
    else {
      console.error('SettingsService.saveImage: not found image item by file:', imageCalendar.imageFile);
    }
  }
}
