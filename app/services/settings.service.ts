import { Injectable } from '@angular/core';
import * as settings from "application-settings";
import * as moment from 'moment';
import { IDayMarker, IImageCalendar } from '../services/calendar.service'
import { Moment } from 'moment';
import * as _ from 'lodash';

const NOT_FIRST_RUN = "not_first_run";
const CALENDAR = "calendar";
const TEXTS = "texts";
const IMAGES = "images";

@Injectable()
export class SettingsService {
  _images: IImageCalendar[];
  _calendarMarkers: Object;
  _calendarTexts: Object;

  constructor() {
    this.readCalendar();
    this.readImages();
    this.readTexts();
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
  setDayMarker(day: Moment, mark: IDayMarker) {
    let secs = day.startOf('day').unix();
    this._calendarMarkers[secs] = mark;
    this.saveCalendar();
  }

  removeDayMarker(day: Moment) {
    let secs = day.startOf('day').unix();
    delete this._calendarMarkers[secs];
    this.saveCalendar();
  }

  getDayMarker(day: Moment): IDayMarker {
    let secs = day.startOf('day').unix();
    return this._calendarMarkers.hasOwnProperty(secs) ? this._calendarMarkers[secs] : false;
  }

  private readCalendar() {
    if (!this._calendarMarkers) {
      this._calendarMarkers = JSON.parse(settings.getString(CALENDAR, '{}'));
    }
  }

  private saveCalendar() {
    settings.setString(CALENDAR, JSON.stringify(this._calendarMarkers));
  }

  /**
   * Calendar texts managing functions
   */

  setDayText(day: Moment, text: string) {
    let secs = day.startOf('day').unix();
    this._calendarTexts[secs] = text;
    this.saveTexts();
  }

  removeDayText(day: Moment) {
    let secs = day.startOf('day').unix();
    delete this._calendarTexts[secs];
    this.saveTexts();
  }

  getDayText(day: Moment): string {
    let secs = day.startOf('day').unix();
    return this._calendarTexts.hasOwnProperty(secs) ? this._calendarTexts[secs] : '';
  }

  getAllDayText(from: Moment) {
    let result = [];
    let fromUnix = from.unix();
    _.forIn(this._calendarTexts, (val, key) => {
      if (+key >= fromUnix) {
        result.push({
          day: key,
          date: moment.unix(+key),
          text: val
        })
      }
    });

    return result;
  }

  private readTexts() {
    if (!this._calendarTexts) {
      this._calendarTexts = JSON.parse(settings.getString(TEXTS, '{}'));
    }
  }

  private saveTexts() {
    settings.setString(TEXTS, JSON.stringify(this._calendarTexts));
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
    let foundIC = _.find(this._images, { imageFile: imageCalendar.imageFile });
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
