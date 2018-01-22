"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var moment = require("moment");
var settings_service_1 = require("../services/settings.service");
var BehaviorSubject_1 = require("rxjs/BehaviorSubject");
var CalendarService = (function () {
    function CalendarService(settings) {
        this.settings = settings;
        this.locale = 'hu';
        moment.locale(this.locale);
        this.actMonth = moment().date(1); // set current month 1st
        this.monthObservable = new BehaviorSubject_1.BehaviorSubject(this.actMonth);
        this.daysObservable = new BehaviorSubject_1.BehaviorSubject(this.getMonth());
    }
    CalendarService.prototype.setMonth = function (newMonth) {
        if (moment.isMoment(newMonth)) {
            this.actMonth = newMonth.clone().date(1);
        }
        else {
            this.actMonth = moment.unix(newMonth);
        }
        this.monthObservable.next(this.actMonth.clone());
        this.daysObservable.next(this.getMonth());
    };
    CalendarService.prototype.stepMonth = function (monthDelta) {
        this.actMonth.add(monthDelta, 'months');
        this.monthObservable.next(this.actMonth.clone());
        this.daysObservable.next(this.getMonth());
    };
    CalendarService.prototype.getMonth = function () {
        var result = [];
        // let now = moment().date(1).add(this.monthOffset, 'months'); // first day of month
        var now = this.actMonth.clone();
        var actWeek = now.week();
        var actMonth = now.month();
        var row = 0;
        do {
            // get markers for this day from storage
            var marker = this.settings.getDayMarker(now);
            var dayText = this.settings.getDayText(now);
            // insert result object
            result.push({
                row: row,
                col: this.convertDayOfWeek(now.day()),
                day: now.date(),
                date: now.clone(),
                marker: marker,
                text: dayText
            });
            // next day
            now.add(1, 'day');
            if (actWeek != now.week()) {
                row++;
                actWeek = now.week();
            }
        } while (actMonth == now.month());
        return result;
    };
    CalendarService.prototype.getMonthName = function () {
        return this.actMonth.format('MMMM');
    };
    /**
     * Converts JS day of the week where sunday is 0 to sunday = 6 and monday = 0
     * @param day
     */
    CalendarService.prototype.convertDayOfWeek = function (day) {
        var cday = day - 1;
        return cday < 0 ? 6 : cday;
    };
    CalendarService.prototype.selectCalendar = function (imageCalendar) {
        this.imageCalendar = imageCalendar;
        if (imageCalendar.lastMonth) {
            this.setMonth(imageCalendar.lastMonth);
        }
    };
    CalendarService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [settings_service_1.SettingsService])
    ], CalendarService);
    return CalendarService;
}());
exports.CalendarService = CalendarService;
exports.AGENDA_FORMAT = 'MMM. DD.(dd)';
exports.FULL_DATE_FORMAT = 'YYYY. MMMM DD. dddd';
function compareDayMarkers(m1, m2) {
    return m1 && m2 && m1.icon == m2.icon && m1.cssClass == m2.cssClass;
}
exports.compareDayMarkers = compareDayMarkers;
exports.markers = [
    { icon: String.fromCharCode(0xf111), cssClass: 'marker-color-1' },
    { icon: String.fromCharCode(0xf111), cssClass: 'marker-color-2' },
    { icon: String.fromCharCode(0xf111), cssClass: 'marker-color-3' },
    { icon: String.fromCharCode(0xf1db), cssClass: 'marker-color-1' },
    { icon: String.fromCharCode(0xf1db), cssClass: 'marker-color-2' },
    { icon: String.fromCharCode(0xf1db), cssClass: 'marker-color-3' },
    { icon: String.fromCharCode(0xf111), cssClass: 'marker-color-1 small-dot' },
    { icon: String.fromCharCode(0xf111), cssClass: 'marker-color-2 small-dot' },
    { icon: String.fromCharCode(0xf111), cssClass: 'marker-color-3 small-dot' },
];
