"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var moment = require("moment");
var CalendarService = (function () {
    function CalendarService() {
        this.locale = 'hu';
        this.monthOffset = 0;
        moment.locale(this.locale);
    }
    CalendarService.prototype.stepMonth = function (monthDelta) {
        this.monthOffset += monthDelta;
    };
    CalendarService.prototype.getMonth = function () {
        var result = [];
        var now = moment().date(1).add(this.monthOffset, 'months'); // first day of month
        var actWeek = now.week();
        var actMonth = now.month();
        var row = 0;
        do {
            // insert result object
            result.push({ row: row, col: this.convertDayOfWeek(now.day()), day: now.date() });
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
        return moment().date(1).add(this.monthOffset, 'months').format('MMMM');
    };
    /**
     * Converts JS day of the week where sunday is 0 to sunday = 6 and monday = 0
     * @param day
     */
    CalendarService.prototype.convertDayOfWeek = function (day) {
        var cday = day - 1;
        return cday < 0 ? 6 : cday;
    };
    CalendarService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], CalendarService);
    return CalendarService;
}());
exports.CalendarService = CalendarService;
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
