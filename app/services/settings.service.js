"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var settings = require("application-settings");
var moment = require("moment");
var _ = require("lodash");
var NOT_FIRST_RUN = "not_first_run";
var CALENDAR = "calendar";
var TEXTS = "texts";
var IMAGES = "images";
var SettingsService = (function () {
    function SettingsService() {
        this.readCalendar();
        this.readImages();
        this.readTexts();
    }
    /**
     * First run functions
     */
    SettingsService.prototype.notFirstRun = function () {
        settings.setBoolean(NOT_FIRST_RUN, true);
    };
    SettingsService.prototype.isFirstRun = function () {
        return !(settings.hasKey(NOT_FIRST_RUN) && settings.getBoolean(NOT_FIRST_RUN));
    };
    /**
     * Calendar managing functions
     */
    SettingsService.prototype.setDayMarker = function (day, mark) {
        var secs = day.startOf('day').unix();
        this._calendarMarkers[secs] = mark;
        this.saveCalendar();
    };
    SettingsService.prototype.removeDayMarker = function (day) {
        var secs = day.startOf('day').unix();
        delete this._calendarMarkers[secs];
        this.saveCalendar();
    };
    SettingsService.prototype.getDayMarker = function (day) {
        var secs = day.startOf('day').unix();
        return this._calendarMarkers.hasOwnProperty(secs) ? this._calendarMarkers[secs] : false;
    };
    SettingsService.prototype.readCalendar = function () {
        if (!this._calendarMarkers) {
            this._calendarMarkers = JSON.parse(settings.getString(CALENDAR, '{}'));
        }
    };
    SettingsService.prototype.saveCalendar = function () {
        settings.setString(CALENDAR, JSON.stringify(this._calendarMarkers));
    };
    /**
     * Calendar texts managing functions
     */
    SettingsService.prototype.setDayText = function (day, text) {
        var secs = day.startOf('day').unix();
        this._calendarTexts[secs] = text;
        this.saveTexts();
    };
    SettingsService.prototype.removeDayText = function (day) {
        var secs = day.startOf('day').unix();
        delete this._calendarTexts[secs];
        this.saveTexts();
    };
    SettingsService.prototype.getDayText = function (day) {
        var secs = day.startOf('day').unix();
        return this._calendarTexts.hasOwnProperty(secs) ? this._calendarTexts[secs] : '';
    };
    SettingsService.prototype.getAllDayText = function (from) {
        var result = [];
        var fromUnix = from.unix();
        _.forIn(this._calendarTexts, function (val, key) {
            if (+key >= fromUnix) {
                result.push({
                    day: key,
                    date: moment.unix(+key),
                    text: val
                });
            }
        });
        return result;
    };
    SettingsService.prototype.readTexts = function () {
        if (!this._calendarTexts) {
            this._calendarTexts = JSON.parse(settings.getString(TEXTS, '{}'));
        }
    };
    SettingsService.prototype.saveTexts = function () {
        settings.setString(TEXTS, JSON.stringify(this._calendarTexts));
    };
    /**
     * Image with calendar manage functions
     */
    SettingsService.prototype.readImages = function () {
        this._images = JSON.parse(settings.getString(IMAGES, '[]'));
    };
    SettingsService.prototype.saveImages = function () {
        settings.setString(IMAGES, JSON.stringify(this._images));
    };
    SettingsService.prototype.getImageList = function () {
        return Object.assign([], this._images); // clone array
    };
    SettingsService.prototype.addImage = function (imageCalendar) {
        this._images.push(imageCalendar);
        this.saveImages();
    };
    SettingsService.prototype.saveImageCalendar = function (imageCalendar) {
        var foundIC = _.find(this._images, { imageFile: imageCalendar.imageFile });
        // console.log('settings.service.ts: saveImageCalendar', JSON.stringify(imageCalendar, null, 4));
        if (foundIC) {
            Object.assign(foundIC, imageCalendar);
            this.saveImages();
        }
        else {
            console.error('SettingsService.saveImage: not found image item by file:', imageCalendar.imageFile);
        }
    };
    SettingsService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], SettingsService);
    return SettingsService;
}());
exports.SettingsService = SettingsService;
