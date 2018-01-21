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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZ3Muc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNldHRpbmdzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0MsK0NBQWlEO0FBQ2pELCtCQUFpQztBQUdqQywwQkFBNEI7QUFFNUIsSUFBTSxhQUFhLEdBQUcsZUFBZSxDQUFDO0FBQ3RDLElBQU0sUUFBUSxHQUFHLFVBQVUsQ0FBQztBQUM1QixJQUFNLEtBQUssR0FBRyxPQUFPLENBQUM7QUFDdEIsSUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDO0FBR3hCO0lBS0U7UUFDRSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBRUQ7O09BRUc7SUFDSCxxQ0FBVyxHQUFYO1FBQ0UsUUFBUSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUVELG9DQUFVLEdBQVY7UUFDRSxNQUFNLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLElBQUksUUFBUSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO0lBQ2pGLENBQUM7SUFFRDs7T0FFRztJQUNILHNDQUFZLEdBQVosVUFBYSxHQUFXLEVBQUUsSUFBZ0I7UUFDeEMsSUFBSSxJQUFJLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNyQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQ25DLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBRUQseUNBQWUsR0FBZixVQUFnQixHQUFVO1FBQ3hCLElBQUksSUFBSSxHQUFHLEdBQUcsQ0FBQyxPQUFPLENB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QUM7WUFDdEMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ3BCLENBQUM7UUFDRCxJQUFJLENBQUMsQ0FBQztZQUNKLE9BQU8sQ0FBQyxLQUFLLENBQUMsMERBQTBELEVBQUUsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3JHLENBQUM7SUFDSCxDQUFDO0lBaklVLGVBQWU7UUFEM0IsaUJBQVUsRUFBRTs7T0FDQSxlQUFlLENBa0kzQjtJQUFELHNCQUFDO0NBQUEsQUFsSUQsSUFrSUM7QUFsSVksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgKiBhcyBzZXR0aW5ncyBmcm9tIFwiYXBwbGljYXRpb24tc2V0dGluZ3NcIjtcbmltcG9ydCAqIGFzIG1vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0IHsgSURheU1hcmtlciwgSUltYWdlQ2FsZW5kYXIgfSBmcm9tICcuLi9zZXJ2aWNlcy9jYWxlbmRhci5zZXJ2aWNlJ1xuaW1wb3J0IHsgTW9tZW50IH0gZnJvbSAnbW9tZW50JztcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcblxuY29uc3QgTk9UX0ZJUlNUX1JVTiA9IFwibm90X2ZpcnN0X3J1blwiO1xuY29uc3QgQ0FMRU5EQVIgPSBcImNhbGVuZGFyXCI7XG5jb25zdCBURVhUUyA9IFwidGV4dHNcIjtcbmNvbnN0IElNQUdFUyA9IFwiaW1hZ2VzXCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTZXR0aW5nc1NlcnZpY2Uge1xuICBfaW1hZ2VzOiBJSW1hZ2VDYWxlbmRhcltdO1xuICBfY2FsZW5kYXJNYXJrZXJzOiBPYmplY3Q7XG4gIF9jYWxlbmRhclRleHRzOiBPYmplY3Q7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5yZWFkQ2FsZW5kYXIoKTtcbiAgICB0aGlzLnJlYWRJbWFnZXMoKTtcbiAgICB0aGlzLnJlYWRUZXh0cygpO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpcnN0IHJ1biBmdW5jdGlvbnNcbiAgICovXG4gIG5vdEZpcnN0UnVuKCkge1xuICAgIHNldHRpbmdzLnNldEJvb2xlYW4oTk9UX0ZJUlNUX1JVTiwgdHJ1ZSk7XG4gIH1cblxuICBpc0ZpcnN0UnVuKCkge1xuICAgIHJldHVybiAhKHNldHRpbmdzLmhhc0tleShOT1RfRklSU1RfUlVOKSAmJiBzZXR0aW5ncy5nZXRCb29sZWFuKE5PVF9GSVJTVF9SVU4pKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxlbmRhciBtYW5hZ2luZyBmdW5jdGlvbnNcbiAgICovXG4gIHNldERheU1hcmtlcihkYXk6IE1vbWVudCwgbWFyazogSURheU1hcmtlcikge1xuICAgIGxldCBzZWNzID0gZGF5LnN0YXJ0T2YoJ2RheScpLnVuaXgoKTtcbiAgICB0aGlzLl9jYWxlbmRhck1hcmtlcnNbc2Vjc10gPSBtYXJrO1xuICAgIHRoaXMuc2F2ZUNhbGVuZGFyKCk7XG4gIH1cbiAgXG4gIHJlbW92ZURheU1hcmtlcihkYXk6TW9tZW50KSB7XG4gICAgbGV0IHNlY3MgPSBkYXkuc3RhcnRPZignZGF5JykudW5peCgpO1xuICAgIGRlbGV0ZSB0aGlzLl9jYWxlbmRhck1hcmtlcnNbc2Vjc107XG4gICAgdGhpcy5zYXZlQ2FsZW5kYXIoKTtcbiAgfVxuXG4gIGdldERheU1hcmtlcihkYXk6IE1vbWVudCk6IElEYXlNYXJrZXIge1xuICAgIGxldCBzZWNzID0gZGF5LnN0YXJ0T2YoJ2RheScpLnVuaXgoKTtcbiAgICByZXR1cm4gdGhpcy5fY2FsZW5kYXJNYXJrZXJzLmhhc093blByb3BlcnR5KHNlY3MpID8gdGhpcy5fY2FsZW5kYXJNYXJrZXJzW3NlY3NdIDogZmFsc2U7XG4gIH1cblxuICBwcml2YXRlIHJlYWRDYWxlbmRhcigpIHtcbiAgICBpZiAoIXRoaXMuX2NhbGVuZGFyTWFya2Vycykge1xuICAgICAgdGhpcy5fY2FsZW5kYXJNYXJrZXJzID0gSlNPTi5wYXJzZShzZXR0aW5ncy5nZXRTdHJpbmcoQ0FMRU5EQVIsICd7fScpKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHNhdmVDYWxlbmRhcigpIHtcbiAgICBzZXR0aW5ncy5zZXRTdHJpbmcoQ0FMRU5EQVIsIEpTT04uc3RyaW5naWZ5KHRoaXMuX2NhbGVuZGFyTWFya2VycykpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGVuZGFyIHRleHRzIG1hbmFnaW5nIGZ1bmN0aW9uc1xuICAgKi9cblxuICBzZXREYXlUZXh0KGRheTogTW9tZW50LCB0ZXh0OiBzdHJpbmcpIHtcbiAgICBsZXQgc2VjcyA9IGRheS5zdGFydE9mKCdkYXknKS51bml4KCk7XG4gICAgdGhpcy5fY2FsZW5kYXJUZXh0c1tzZWNzXSA9IHRleHQ7XG4gICAgdGhpcy5zYXZlVGV4dHMoKTtcbiAgfVxuICBcbiAgcmVtb3ZlRGF5VGV4dChkYXk6TW9tZW50KSB7XG4gICAgbGV0IHNlY3MgPSBkYXkuc3RhcnRPZignZGF5JykudW5peCgpO1xuICAgIGRlbGV0ZSB0aGlzLl9jYWxlbmRhclRleHRzW3NlY3NdO1xuICAgIHRoaXMuc2F2ZVRleHRzKCk7XG4gIH1cblxuICBnZXREYXlUZXh0KGRheTogTW9tZW50KTogc3RyaW5nIHtcbiAgICBsZXQgc2VjcyA9IGRheS5zdGFydE9mKCdkYXknKS51bml4KCk7XG4gICAgcmV0dXJuIHRoaXMuX2NhbGVuZGFyVGV4dHMuaGFzT3duUHJvcGVydHkoc2VjcykgPyB0aGlzLl9jYWxlbmRhclRleHRzW3NlY3NdIDogJyc7XG4gIH1cblxuICBnZXRBbGxEYXlUZXh0KGZyb206TW9tZW50KSB7XG4gICAgbGV0IHJlc3VsdCA9IFtdO1xuICAgIGxldCBmcm9tVW5peCA9IGZyb20udW5peCgpO1xuICAgIF8uZm9ySW4odGhpcy5fY2FsZW5kYXJUZXh0cywgKHZhbCwga2V5KSA9PiB7XG4gICAgICBpZiAoK2tleSA+PSBmcm9tVW5peCkge1xuICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgZGF5OiBrZXksXG4gICAgICAgICAgZGF0ZTogbW9tZW50LnVuaXgoK2tleSksXG4gICAgICAgICAgdGV4dDogdmFsXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgcHJpdmF0ZSByZWFkVGV4dHMoKSB7XG4gICAgaWYgKCF0aGlzLl9jYWxlbmRhclRleHRzKSB7XG4gICAgICB0aGlzLl9jYWxlbmRhclRleHRzID0gSlNPTi5wYXJzZShzZXR0aW5ncy5nZXRTdHJpbmcoVEVYVFMsICd7fScpKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHNhdmVUZXh0cygpIHtcbiAgICBzZXR0aW5ncy5zZXRTdHJpbmcoVEVYVFMsIEpTT04uc3RyaW5naWZ5KHRoaXMuX2NhbGVuZGFyVGV4dHMpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbWFnZSB3aXRoIGNhbGVuZGFyIG1hbmFnZSBmdW5jdGlvbnNcbiAgICovXG4gIHByaXZhdGUgcmVhZEltYWdlcygpIHtcbiAgICB0aGlzLl9pbWFnZXMgPSBKU09OLnBhcnNlKHNldHRpbmdzLmdldFN0cmluZyhJTUFHRVMsICdbXScpKTtcbiAgfVxuXG4gIHByaXZhdGUgc2F2ZUltYWdlcygpIHtcbiAgICBzZXR0aW5ncy5zZXRTdHJpbmcoSU1BR0VTLCBKU09OLnN0cmluZ2lmeSh0aGlzLl9pbWFnZXMpKTtcbiAgfVxuXG4gIGdldEltYWdlTGlzdCgpIHtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihbXSwgdGhpcy5faW1hZ2VzKTsgLy8gY2xvbmUgYXJyYXlcbiAgfVxuXG4gIGFkZEltYWdlKGltYWdlQ2FsZW5kYXI6IElJbWFnZUNhbGVuZGFyKSB7XG4gICAgdGhpcy5faW1hZ2VzLnB1c2goaW1hZ2VDYWxlbmRhcik7XG4gICAgdGhpcy5zYXZlSW1hZ2VzKCk7XG4gIH1cblxuICBzYXZlSW1hZ2VDYWxlbmRhcihpbWFnZUNhbGVuZGFyOiBJSW1hZ2VDYWxlbmRhcikge1xuICAgIGxldCBmb3VuZElDID0gXy5maW5kKHRoaXMuX2ltYWdlcywge2ltYWdlRmlsZTogaW1hZ2VDYWxlbmRhci5pbWFnZUZpbGV9KTtcbiAgICAvLyBjb25zb2xlLmxvZygnc2V0dGluZ3Muc2VydmljZS50czogc2F2ZUltYWdlQ2FsZW5kYXInLCBKU09OLnN0cmluZ2lmeShpbWFnZUNhbGVuZGFyLCBudWxsLCA0KSk7XG4gICAgaWYgKGZvdW5kSUMpIHtcbiAgICAgIE9iamVjdC5hc3NpZ24oZm91bmRJQywgaW1hZ2VDYWxlbmRhcik7XG4gICAgICB0aGlzLnNhdmVJbWFnZXMoKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdTZXR0aW5nc1NlcnZpY2Uuc2F2ZUltYWdlOiBub3QgZm91bmQgaW1hZ2UgaXRlbSBieSBmaWxlOicsIGltYWdlQ2FsZW5kYXIuaW1hZ2VGaWxlKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==