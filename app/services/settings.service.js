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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZ3Muc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNldHRpbmdzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0MsK0NBQWlEO0FBQ2pELCtCQUFpQztBQUdqQywwQkFBNEI7QUFFNUIsSUFBTSxhQUFhLEdBQUcsZUFBZSxDQUFDO0FBQ3RDLElBQU0sUUFBUSxHQUFHLFVBQVUsQ0FBQztBQUM1QixJQUFNLEtBQUssR0FBRyxPQUFPLENBQUM7QUFDdEIsSUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDO0FBR3hCO0lBS0U7UUFDRSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBRUQ7O09BRUc7SUFDSCxxQ0FBVyxHQUFYO1FBQ0UsUUFBUSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUVELG9DQUFVLEdBQVY7UUFDRSxNQUFNLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLElBQUksUUFBUSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO0lBQ2pGLENBQUM7SUFFRDs7T0FFRztJQUNILHNDQUFZLEdBQVosVUFBYSxHQUFXLEVBQUUsSUFBZ0I7UUFDeEMsSUFBSSxJQUFJLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNyQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQ25DLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBRUQseUNBQWUsR0FBZixVQUFnQixHQUFXO1FBQ3pCLElBQUksSUFBSSxHQUFHLEdBQUcsQ0FBQyxPQUFPLENB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QUM7WUFDdEMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ3BCLENBQUM7UUFDRCxJQUFJLENBQUMsQ0FBQztZQUNKLE9BQU8sQ0FBQyxLQUFLLENBQUMsMERBQTBELEVBQUUsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3JHLENBQUM7SUFDSCxDQUFDO0lBaklVLGVBQWU7UUFEM0IsaUJBQVUsRUFBRTs7T0FDQSxlQUFlLENBa0kzQjtJQUFELHNCQUFDO0NBQUEsQUFsSUQsSUFrSUM7QUFsSVksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgKiBhcyBzZXR0aW5ncyBmcm9tIFwiYXBwbGljYXRpb24tc2V0dGluZ3NcIjtcbmltcG9ydCAqIGFzIG1vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0IHsgSURheU1hcmtlciwgSUltYWdlQ2FsZW5kYXIgfSBmcm9tICcuLi9zZXJ2aWNlcy9jYWxlbmRhci5zZXJ2aWNlJ1xuaW1wb3J0IHsgTW9tZW50IH0gZnJvbSAnbW9tZW50JztcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcblxuY29uc3QgTk9UX0ZJUlNUX1JVTiA9IFwibm90X2ZpcnN0X3J1blwiO1xuY29uc3QgQ0FMRU5EQVIgPSBcImNhbGVuZGFyXCI7XG5jb25zdCBURVhUUyA9IFwidGV4dHNcIjtcbmNvbnN0IElNQUdFUyA9IFwiaW1hZ2VzXCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTZXR0aW5nc1NlcnZpY2Uge1xuICBfaW1hZ2VzOiBJSW1hZ2VDYWxlbmRhcltdO1xuICBfY2FsZW5kYXJNYXJrZXJzOiBPYmplY3Q7XG4gIF9jYWxlbmRhclRleHRzOiBPYmplY3Q7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5yZWFkQ2FsZW5kYXIoKTtcbiAgICB0aGlzLnJlYWRJbWFnZXMoKTtcbiAgICB0aGlzLnJlYWRUZXh0cygpO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpcnN0IHJ1biBmdW5jdGlvbnNcbiAgICovXG4gIG5vdEZpcnN0UnVuKCkge1xuICAgIHNldHRpbmdzLnNldEJvb2xlYW4oTk9UX0ZJUlNUX1JVTiwgdHJ1ZSk7XG4gIH1cblxuICBpc0ZpcnN0UnVuKCkge1xuICAgIHJldHVybiAhKHNldHRpbmdzLmhhc0tleShOT1RfRklSU1RfUlVOKSAmJiBzZXR0aW5ncy5nZXRCb29sZWFuKE5PVF9GSVJTVF9SVU4pKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxlbmRhciBtYW5hZ2luZyBmdW5jdGlvbnNcbiAgICovXG4gIHNldERheU1hcmtlcihkYXk6IE1vbWVudCwgbWFyazogSURheU1hcmtlcikge1xuICAgIGxldCBzZWNzID0gZGF5LnN0YXJ0T2YoJ2RheScpLnVuaXgoKTtcbiAgICB0aGlzLl9jYWxlbmRhck1hcmtlcnNbc2Vjc10gPSBtYXJrO1xuICAgIHRoaXMuc2F2ZUNhbGVuZGFyKCk7XG4gIH1cblxuICByZW1vdmVEYXlNYXJrZXIoZGF5OiBNb21lbnQpIHtcbiAgICBsZXQgc2VjcyA9IGRheS5zdGFydE9mKCdkYXknKS51bml4KCk7XG4gICAgZGVsZXRlIHRoaXMuX2NhbGVuZGFyTWFya2Vyc1tzZWNzXTtcbiAgICB0aGlzLnNhdmVDYWxlbmRhcigpO1xuICB9XG5cbiAgZ2V0RGF5TWFya2VyKGRheTogTW9tZW50KTogSURheU1hcmtlciB7XG4gICAgbGV0IHNlY3MgPSBkYXkuc3RhcnRPZignZGF5JykudW5peCgpO1xuICAgIHJldHVybiB0aGlzLl9jYWxlbmRhck1hcmtlcnMuaGFzT3duUHJvcGVydHkoc2VjcykgPyB0aGlzLl9jYWxlbmRhck1hcmtlcnNbc2Vjc10gOiBmYWxzZTtcbiAgfVxuXG4gIHByaXZhdGUgcmVhZENhbGVuZGFyKCkge1xuICAgIGlmICghdGhpcy5fY2FsZW5kYXJNYXJrZXJzKSB7XG4gICAgICB0aGlzLl9jYWxlbmRhck1hcmtlcnMgPSBKU09OLnBhcnNlKHNldHRpbmdzLmdldFN0cmluZyhDQUxFTkRBUiwgJ3t9JykpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc2F2ZUNhbGVuZGFyKCkge1xuICAgIHNldHRpbmdzLnNldFN0cmluZyhDQUxFTkRBUiwgSlNPTi5zdHJpbmdpZnkodGhpcy5fY2FsZW5kYXJNYXJrZXJzKSk7XG4gIH1cblxuICAvKipcbiAgICogQ2FsZW5kYXIgdGV4dHMgbWFuYWdpbmcgZnVuY3Rpb25zXG4gICAqL1xuXG4gIHNldERheVRleHQoZGF5OiBNb21lbnQsIHRleHQ6IHN0cmluZykge1xuICAgIGxldCBzZWNzID0gZGF5LnN0YXJ0T2YoJ2RheScpLnVuaXgoKTtcbiAgICB0aGlzLl9jYWxlbmRhclRleHRzW3NlY3NdID0gdGV4dDtcbiAgICB0aGlzLnNhdmVUZXh0cygpO1xuICB9XG5cbiAgcmVtb3ZlRGF5VGV4dChkYXk6IE1vbWVudCkge1xuICAgIGxldCBzZWNzID0gZGF5LnN0YXJ0T2YoJ2RheScpLnVuaXgoKTtcbiAgICBkZWxldGUgdGhpcy5fY2FsZW5kYXJUZXh0c1tzZWNzXTtcbiAgICB0aGlzLnNhdmVUZXh0cygpO1xuICB9XG5cbiAgZ2V0RGF5VGV4dChkYXk6IE1vbWVudCk6IHN0cmluZyB7XG4gICAgbGV0IHNlY3MgPSBkYXkuc3RhcnRPZignZGF5JykudW5peCgpO1xuICAgIHJldHVybiB0aGlzLl9jYWxlbmRhclRleHRzLmhhc093blByb3BlcnR5KHNlY3MpID8gdGhpcy5fY2FsZW5kYXJUZXh0c1tzZWNzXSA6ICcnO1xuICB9XG5cbiAgZ2V0QWxsRGF5VGV4dChmcm9tOiBNb21lbnQpIHtcbiAgICBsZXQgcmVzdWx0ID0gW107XG4gICAgbGV0IGZyb21Vbml4ID0gZnJvbS51bml4KCk7XG4gICAgXy5mb3JJbih0aGlzLl9jYWxlbmRhclRleHRzLCAodmFsLCBrZXkpID0+IHtcbiAgICAgIGlmICgra2V5ID49IGZyb21Vbml4KSB7XG4gICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICBkYXk6IGtleSxcbiAgICAgICAgICBkYXRlOiBtb21lbnQudW5peCgra2V5KSxcbiAgICAgICAgICB0ZXh0OiB2YWxcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBwcml2YXRlIHJlYWRUZXh0cygpIHtcbiAgICBpZiAoIXRoaXMuX2NhbGVuZGFyVGV4dHMpIHtcbiAgICAgIHRoaXMuX2NhbGVuZGFyVGV4dHMgPSBKU09OLnBhcnNlKHNldHRpbmdzLmdldFN0cmluZyhURVhUUywgJ3t9JykpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc2F2ZVRleHRzKCkge1xuICAgIHNldHRpbmdzLnNldFN0cmluZyhURVhUUywgSlNPTi5zdHJpbmdpZnkodGhpcy5fY2FsZW5kYXJUZXh0cykpO1xuICB9XG5cbiAgLyoqXG4gICAqIEltYWdlIHdpdGggY2FsZW5kYXIgbWFuYWdlIGZ1bmN0aW9uc1xuICAgKi9cbiAgcHJpdmF0ZSByZWFkSW1hZ2VzKCkge1xuICAgIHRoaXMuX2ltYWdlcyA9IEpTT04ucGFyc2Uoc2V0dGluZ3MuZ2V0U3RyaW5nKElNQUdFUywgJ1tdJykpO1xuICB9XG5cbiAgcHJpdmF0ZSBzYXZlSW1hZ2VzKCkge1xuICAgIHNldHRpbmdzLnNldFN0cmluZyhJTUFHRVMsIEpTT04uc3RyaW5naWZ5KHRoaXMuX2ltYWdlcykpO1xuICB9XG5cbiAgZ2V0SW1hZ2VMaXN0KCkge1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKFtdLCB0aGlzLl9pbWFnZXMpOyAvLyBjbG9uZSBhcnJheVxuICB9XG5cbiAgYWRkSW1hZ2UoaW1hZ2VDYWxlbmRhcjogSUltYWdlQ2FsZW5kYXIpIHtcbiAgICB0aGlzLl9pbWFnZXMucHVzaChpbWFnZUNhbGVuZGFyKTtcbiAgICB0aGlzLnNhdmVJbWFnZXMoKTtcbiAgfVxuXG4gIHNhdmVJbWFnZUNhbGVuZGFyKGltYWdlQ2FsZW5kYXI6IElJbWFnZUNhbGVuZGFyKSB7XG4gICAgbGV0IGZvdW5kSUMgPSBfLmZpbmQodGhpcy5faW1hZ2VzLCB7IGltYWdlRmlsZTogaW1hZ2VDYWxlbmRhci5pbWFnZUZpbGUgfSk7XG4gICAgLy8gY29uc29sZS5sb2coJ3NldHRpbmdzLnNlcnZpY2UudHM6IHNhdmVJbWFnZUNhbGVuZGFyJywgSlNPTi5zdHJpbmdpZnkoaW1hZ2VDYWxlbmRhciwgbnVsbCwgNCkpO1xuICAgIGlmIChmb3VuZElDKSB7XG4gICAgICBPYmplY3QuYXNzaWduKGZvdW5kSUMsIGltYWdlQ2FsZW5kYXIpO1xuICAgICAgdGhpcy5zYXZlSW1hZ2VzKCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgY29uc29sZS5lcnJvcignU2V0dGluZ3NTZXJ2aWNlLnNhdmVJbWFnZTogbm90IGZvdW5kIGltYWdlIGl0ZW0gYnkgZmlsZTonLCBpbWFnZUNhbGVuZGFyLmltYWdlRmlsZSk7XG4gICAgfVxuICB9XG59XG4iXX0=