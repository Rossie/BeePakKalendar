"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var moment = require("moment");
var settings_service_1 = require("../services/settings.service");
var CalendarService = (function () {
    function CalendarService(settings) {
        this.settings = settings;
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
            // get markers for this day from storage
            var marker = this.settings.getDay(now);
            // insert result object
            result.push({
                row: row,
                col: this.convertDayOfWeek(now.day()),
                day: now.date(),
                date: now.clone(),
                marker: marker
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
    CalendarService.prototype.selectCalendar = function (imageCalendar) {
        this.imageCalendar = imageCalendar;
    };
    CalendarService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [settings_service_1.SettingsService])
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNhbGVuZGFyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0MsK0JBQWlDO0FBQ2pDLGlFQUE4RDtBQUs5RDtJQU1JLHlCQUNZLFFBQXlCO1FBQXpCLGFBQVEsR0FBUixRQUFRLENBQWlCO1FBSjdCLFdBQU0sR0FBRyxJQUFJLENBQUM7UUFDZCxnQkFBVyxHQUFXLENBQUMsQ0FBQztRQUs1QixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRUQsbUNBQVMsR0FBVCxVQUFVLFVBQVU7UUFDaEIsSUFBSSxDQUFDLFdBQVcsSUFBSSxVQUFVLENBQUM7SUFDbkMsQ0FBQztJQUVELGtDQUFRLEdBQVI7UUFDSSxJQUFJLE1BQU0sR0FBZSxFQUFFLENBQUM7UUFDNUIsSUFBSSxHQUFHLEdBQUcsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUMscUJBQXFCO1FBQ2pGLElBQUksT0FBTyxHQUFHLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN6QixJQUFJLFFBQVEsR0FBRyxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDM0IsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDO1FBQ1osR0FBRyxDQUFDO1lBQ0Esd0NBQXdDO1lBQ3hDLElBQUksTUFBTSxHQUFjLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2xELHVCQUF1QjtZQUN2QixNQUFNLENBQUMsSUFBSSxDQUFDO2dCQUNSLEdBQUcsRUFBRSxHQUFHO2dCQUNSLEdBQUcsRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDO2dCQUNyQyxHQUFHLEVBQUUsR0FBRyxDQUFDLElBQUksRUFBRTtnQkFDZixJQUFJLEVBQUUsR0FBRyxDQUFDLEtBQUssRUFBRTtnQkFDakIsTUFBTSxFQUFFLE1BQU07YUFDakIsQ0FBQyxDQUFDO1lBQ0gsV0FBVztZQUNYLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBRWxCLEVBQUUsQ0FBQyxDQUFDLE9BQU8sSUFBSSxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUN4QixHQUFHLEVBQUUsQ0FBQztnQkFDTixPQUFPLEdBQUcsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ3pCLENBQUM7UUFDTCxDQUFDLFFBQVEsUUFBUSxJQUFJLEdBQUcsQ0FBQyxLQUFLLEVBQUUsRUFBRTtRQUVsQyxNQUFNLENBQUMsTUFBTSxDQUFDO0lBQ2xCLENBQUM7SUFFRCxzQ0FBWSxHQUFaO1FBQ0ksTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxRQUFRLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDM0UsQ0FBQztJQUVEOzs7T0FHRztJQUNLLDBDQUFnQixHQUF4QixVQUF5QixHQUFXO1FBQ2hDLElBQUksSUFBSSxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUM7UUFDbkIsTUFBTSxDQUFDLElBQUksR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQztJQUMvQixDQUFDO0lBRUQsd0NBQWMsR0FBZCxVQUFlLGFBQTRCO1FBQ3ZDLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO0lBQ3ZDLENBQUM7SUE1RFEsZUFBZTtRQUQzQixpQkFBVSxFQUFFO3lDQVFhLGtDQUFlO09BUDVCLGVBQWUsQ0E2RDNCO0lBQUQsc0JBQUM7Q0FBQSxBQTdERCxJQTZEQztBQTdEWSwwQ0FBZTtBQXNGakIsUUFBQSxPQUFPLEdBQWlCO0lBQy9CLEVBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLEVBQUUsUUFBUSxFQUFFLGdCQUFnQixFQUFFO0lBQ2pFLEVBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLEVBQUUsUUFBUSxFQUFFLGdCQUFnQixFQUFFO0lBQ2pFLEVBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLEVBQUUsUUFBUSxFQUFFLGdCQUFnQixFQUFFO0lBQ2pFLEVBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLEVBQUUsUUFBUSxFQUFFLGdCQUFnQixFQUFFO0lBQ2pFLEVBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLEVBQUUsUUFBUSxFQUFFLGdCQUFnQixFQUFFO0lBQ2pFLEVBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLEVBQUUsUUFBUSxFQUFFLGdCQUFnQixFQUFFO0lBQ2pFLEVBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLEVBQUUsUUFBUSxFQUFFLDBCQUEwQixFQUFFO0lBQzNFLEVBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLEVBQUUsUUFBUSxFQUFFLDBCQUEwQixFQUFFO0lBQzNFLEVBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLEVBQUUsUUFBUSxFQUFFLDBCQUEwQixFQUFFO0NBQzlFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgKiBhcyBtb21lbnQgZnJvbSAnbW9tZW50JztcbmltcG9ydCB7IFNldHRpbmdzU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL3NldHRpbmdzLnNlcnZpY2UnXG5pbXBvcnQgeyBNb21lbnQgfSBmcm9tICdtb21lbnQnO1xuaW1wb3J0IHsgSW1hZ2VTb3VyY2UgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL2ltYWdlLXNvdXJjZS9pbWFnZS1zb3VyY2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ2FsZW5kYXJTZXJ2aWNlIHtcbiAgICBwdWJsaWMgaW1hZ2VDYWxlbmRhcjogSUltYWdlQ2FsZW5kYXI7XG4gICAgXG4gICAgcHJpdmF0ZSBsb2NhbGUgPSAnaHUnO1xuICAgIHByaXZhdGUgbW9udGhPZmZzZXQ6IG51bWJlciA9IDA7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBzZXR0aW5nczogU2V0dGluZ3NTZXJ2aWNlXG4gICAgKSB7XG4gICAgICAgIG1vbWVudC5sb2NhbGUodGhpcy5sb2NhbGUpO1xuICAgIH1cblxuICAgIHN0ZXBNb250aChtb250aERlbHRhKSB7XG4gICAgICAgIHRoaXMubW9udGhPZmZzZXQgKz0gbW9udGhEZWx0YTtcbiAgICB9XG5cbiAgICBnZXRNb250aCgpOiBhbnlbXSB7XG4gICAgICAgIHZhciByZXN1bHQ6IElEYXlJdGVtW10gPSBbXTtcbiAgICAgICAgbGV0IG5vdyA9IG1vbWVudCgpLmRhdGUoMSkuYWRkKHRoaXMubW9udGhPZmZzZXQsICdtb250aHMnKTsgLy8gZmlyc3QgZGF5IG9mIG1vbnRoXG4gICAgICAgIGxldCBhY3RXZWVrID0gbm93LndlZWsoKTtcbiAgICAgICAgbGV0IGFjdE1vbnRoID0gbm93Lm1vbnRoKCk7XG4gICAgICAgIGxldCByb3cgPSAwO1xuICAgICAgICBkbyB7XG4gICAgICAgICAgICAvLyBnZXQgbWFya2VycyBmb3IgdGhpcyBkYXkgZnJvbSBzdG9yYWdlXG4gICAgICAgICAgICBsZXQgbWFya2VyOklEYXlNYXJrZXIgPSB0aGlzLnNldHRpbmdzLmdldERheShub3cpO1xuICAgICAgICAgICAgLy8gaW5zZXJ0IHJlc3VsdCBvYmplY3RcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHsgXG4gICAgICAgICAgICAgICAgcm93OiByb3csIFxuICAgICAgICAgICAgICAgIGNvbDogdGhpcy5jb252ZXJ0RGF5T2ZXZWVrKG5vdy5kYXkoKSksIFxuICAgICAgICAgICAgICAgIGRheTogbm93LmRhdGUoKSxcbiAgICAgICAgICAgICAgICBkYXRlOiBub3cuY2xvbmUoKSxcbiAgICAgICAgICAgICAgICBtYXJrZXI6IG1hcmtlclxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvLyBuZXh0IGRheVxuICAgICAgICAgICAgbm93LmFkZCgxLCAnZGF5Jyk7XG5cbiAgICAgICAgICAgIGlmIChhY3RXZWVrICE9IG5vdy53ZWVrKCkpIHsgLy8gaW5jcmVtZW50IHJvdyBpZiB3ZWVrIGRpZmZlcmVudCAoaW1wb3J0YW50IGFyb3VuZCBkZWMgMzEuKVxuICAgICAgICAgICAgICAgIHJvdysrO1xuICAgICAgICAgICAgICAgIGFjdFdlZWsgPSBub3cud2VlaygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IHdoaWxlIChhY3RNb250aCA9PSBub3cubW9udGgoKSk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBnZXRNb250aE5hbWUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIG1vbWVudCgpLmRhdGUoMSkuYWRkKHRoaXMubW9udGhPZmZzZXQsICdtb250aHMnKS5mb3JtYXQoJ01NTU0nKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDb252ZXJ0cyBKUyBkYXkgb2YgdGhlIHdlZWsgd2hlcmUgc3VuZGF5IGlzIDAgdG8gc3VuZGF5ID0gNiBhbmQgbW9uZGF5ID0gMFxuICAgICAqIEBwYXJhbSBkYXkgXG4gICAgICovXG4gICAgcHJpdmF0ZSBjb252ZXJ0RGF5T2ZXZWVrKGRheTogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgbGV0IGNkYXkgPSBkYXkgLSAxO1xuICAgICAgICByZXR1cm4gY2RheSA8IDAgPyA2IDogY2RheTtcbiAgICB9XG5cbiAgICBzZWxlY3RDYWxlbmRhcihpbWFnZUNhbGVuZGFyOklJbWFnZUNhbGVuZGFyKSB7XG4gICAgICAgIHRoaXMuaW1hZ2VDYWxlbmRhciA9IGltYWdlQ2FsZW5kYXI7XG4gICAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElEYXlJdGVtIHtcbiAgICByb3c6IG51bWJlcjtcbiAgICBjb2w6IG51bWJlcjtcbiAgICBkYXk6IG51bWJlcjtcbiAgICBkYXRlOiBNb21lbnQ7XG4gICAgbWFya2VyPzogSURheU1hcmtlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJRGF5TWFya2VyIHtcbiAgICBpY29uOiBzdHJpbmc7XG4gICAgY3NzQ2xhc3M6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJSW1hZ2VDYWxlbmRhciB7XG4gICAgaW1hZ2VGaWxlOiBzdHJpbmc7XG4gICAgY2FsZW5kYXJMZWZ0OiBudW1iZXI7XG4gICAgY2FsZW5kYXJUb3A6IG51bWJlcjtcbiAgICBjYWxlbmRhclNjYWxlOiBudW1iZXI7XG4gICAgY3JlYXRlZE9uOiBudW1iZXI7XG4gICAgbGFzdE1vbnRoOiBudW1iZXI7XG4gICAgLy8gaW1hZ2VTb3VyY2U/OiBJbWFnZVNvdXJjZTtcbn1cblxuZXhwb3J0IHZhciBtYXJrZXJzOiBJRGF5TWFya2VyW10gPSBbXG4gICAgeyBpY29uOiBTdHJpbmcuZnJvbUNoYXJDb2RlKDB4ZjExMSksIGNzc0NsYXNzOiAnbWFya2VyLWNvbG9yLTEnIH0sXG4gICAgeyBpY29uOiBTdHJpbmcuZnJvbUNoYXJDb2RlKDB4ZjExMSksIGNzc0NsYXNzOiAnbWFya2VyLWNvbG9yLTInIH0sXG4gICAgeyBpY29uOiBTdHJpbmcuZnJvbUNoYXJDb2RlKDB4ZjExMSksIGNzc0NsYXNzOiAnbWFya2VyLWNvbG9yLTMnIH0sXG4gICAgeyBpY29uOiBTdHJpbmcuZnJvbUNoYXJDb2RlKDB4ZjFkYiksIGNzc0NsYXNzOiAnbWFya2VyLWNvbG9yLTEnIH0sXG4gICAgeyBpY29uOiBTdHJpbmcuZnJvbUNoYXJDb2RlKDB4ZjFkYiksIGNzc0NsYXNzOiAnbWFya2VyLWNvbG9yLTInIH0sXG4gICAgeyBpY29uOiBTdHJpbmcuZnJvbUNoYXJDb2RlKDB4ZjFkYiksIGNzc0NsYXNzOiAnbWFya2VyLWNvbG9yLTMnIH0sXG4gICAgeyBpY29uOiBTdHJpbmcuZnJvbUNoYXJDb2RlKDB4ZjExMSksIGNzc0NsYXNzOiAnbWFya2VyLWNvbG9yLTEgc21hbGwtZG90JyB9LFxuICAgIHsgaWNvbjogU3RyaW5nLmZyb21DaGFyQ29kZSgweGYxMTEpLCBjc3NDbGFzczogJ21hcmtlci1jb2xvci0yIHNtYWxsLWRvdCcgfSxcbiAgICB7IGljb246IFN0cmluZy5mcm9tQ2hhckNvZGUoMHhmMTExKSwgY3NzQ2xhc3M6ICdtYXJrZXItY29sb3ItMyBzbWFsbC1kb3QnIH0sXG5dO1xuXG4iXX0=