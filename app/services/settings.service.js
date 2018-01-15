"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var settings = require("application-settings");
var _ = require("lodash");
var NOT_FIRST_RUN = "not_first_run";
var CALENDAR = "calendar";
var IMAGES = "images";
var SettingsService = (function () {
    function SettingsService() {
        this.readCalendar();
        this.readImages();
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
    SettingsService.prototype.setDay = function (day, mark) {
        var secs = day.startOf('day').unix();
        this._calendar[secs] = mark;
        this.saveCalendar();
    };
    SettingsService.prototype.getDay = function (day) {
        var secs = day.startOf('day').unix();
        return this._calendar.hasOwnProperty(secs) ? this._calendar[secs] : false;
    };
    SettingsService.prototype.readCalendar = function () {
        if (!this._calendar) {
            this._calendar = JSON.parse(settings.getString(CALENDAR, '{}'));
        }
    };
    SettingsService.prototype.saveCalendar = function () {
        settings.setString(CALENDAR, JSON.stringify(this._calendar));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZ3Muc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNldHRpbmdzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0MsK0NBQWlEO0FBSWpELDBCQUE0QjtBQUU1QixJQUFNLGFBQWEsR0FBRyxlQUFlLENBQUM7QUFDdEMsSUFBTSxRQUFRLEdBQUcsVUFBVSxDQUFDO0FBQzVCLElBQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQztBQUd4QjtJQUlFO1FBQ0UsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBRUQ7O09BRUc7SUFDSCxxQ0FBVyxHQUFYO1FBQ0UsUUFBUSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUVELG9DQUFVLEdBQVY7UUFDRSxNQUFNLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLElBQUksUUFBUSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO0lBQ2pGLENBQUM7SUFFRDs7T0FFRztJQUNILGdDQUFNLEdBQU4sVUFBTyxHQUFXLEVBQUUsSUFBZ0I7UUFDbEMsSUFBSSxJQUFJLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNyQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQztRQUM1QixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVELGdDQUFNLEdBQU4sVUFBTyxHQUFXO1FBQ2hCLElBQUksSUFBSSxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDckMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsS0FBSyxDQUFDO0lBQzVFLENBQUM7SUFFTyxzQ0FBWSxHQUFwQjtRQUNFLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDcEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDbEUsQ0FBQztJQUNILENBQUM7SUFFTyxzQ0FBWSxHQUFwQjtRQUNFLFFBQVEsQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7SUFDL0QsQ0FBQztJQUVEOztPQUVHO0lBQ0ssb0NBQVUsR0FBbEI7UUFDRSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBRU8sb0NBQVUsR0FBbEI7UUFDRSxRQUFRLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFFRCxzQ0FBWSxHQUFaO1FBQ0UsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLGNBQWM7SUFDeEQsQ0FBQztJQUVELGtDQUFRLEdBQVIsVUFBUyxhQUE2QjtRQUNwQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNqQyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVELDJDQUFpQixHQUFqQixVQUFrQixhQUE2QjtRQUM3QyxJQUFJLE9BQU8sR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsRUFBQyxTQUFTLEVBQUUsYUFBYSxDQUFDLFNBQVMsRUFBQyxDQUFDLENBQUM7UUFDekUsaUdBQWlHO1FBQ2pHLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDWixNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxhQUFhLENBQUMsQ0FBQztZQUN0QyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDcEIsQ0FBQztRQUNELElBQUksQ0FBQyxDQUFDO1lBQ0osT0FBTyxDQUFDLEtBQUssQ0FBQywwREFBMEQsRUFBRSxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDckcsQ0FBQztJQUNILENBQUM7SUExRVUsZUFBZTtRQUQzQixpQkFBVSxFQUFFOztPQUNBLGVBQWUsQ0EyRTNCO0lBQUQsc0JBQUM7Q0FBQSxBQTNFRCxJQTJFQztBQTNFWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqIGFzIHNldHRpbmdzIGZyb20gXCJhcHBsaWNhdGlvbi1zZXR0aW5nc1wiO1xuaW1wb3J0ICogYXMgbW9tZW50IGZyb20gJ21vbWVudCc7XG5pbXBvcnQgeyBJRGF5TWFya2VyLCBJSW1hZ2VDYWxlbmRhciB9IGZyb20gJy4uL3NlcnZpY2VzL2NhbGVuZGFyLnNlcnZpY2UnXG5pbXBvcnQgeyBNb21lbnQgfSBmcm9tICdtb21lbnQnO1xuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xuXG5jb25zdCBOT1RfRklSU1RfUlVOID0gXCJub3RfZmlyc3RfcnVuXCI7XG5jb25zdCBDQUxFTkRBUiA9IFwiY2FsZW5kYXJcIjtcbmNvbnN0IElNQUdFUyA9IFwiaW1hZ2VzXCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTZXR0aW5nc1NlcnZpY2Uge1xuICBfaW1hZ2VzOiBJSW1hZ2VDYWxlbmRhcltdO1xuICBfY2FsZW5kYXI6IE9iamVjdDtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnJlYWRDYWxlbmRhcigpO1xuICAgIHRoaXMucmVhZEltYWdlcygpO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpcnN0IHJ1biBmdW5jdGlvbnNcbiAgICovXG4gIG5vdEZpcnN0UnVuKCkge1xuICAgIHNldHRpbmdzLnNldEJvb2xlYW4oTk9UX0ZJUlNUX1JVTiwgdHJ1ZSk7XG4gIH1cblxuICBpc0ZpcnN0UnVuKCkge1xuICAgIHJldHVybiAhKHNldHRpbmdzLmhhc0tleShOT1RfRklSU1RfUlVOKSAmJiBzZXR0aW5ncy5nZXRCb29sZWFuKE5PVF9GSVJTVF9SVU4pKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxlbmRhciBtYW5hZ2luZyBmdW5jdGlvbnNcbiAgICovXG4gIHNldERheShkYXk6IE1vbWVudCwgbWFyazogSURheU1hcmtlcikge1xuICAgIGxldCBzZWNzID0gZGF5LnN0YXJ0T2YoJ2RheScpLnVuaXgoKTtcbiAgICB0aGlzLl9jYWxlbmRhcltzZWNzXSA9IG1hcms7XG4gICAgdGhpcy5zYXZlQ2FsZW5kYXIoKTtcbiAgfVxuXG4gIGdldERheShkYXk6IE1vbWVudCk6IElEYXlNYXJrZXIge1xuICAgIGxldCBzZWNzID0gZGF5LnN0YXJ0T2YoJ2RheScpLnVuaXgoKTtcbiAgICByZXR1cm4gdGhpcy5fY2FsZW5kYXIuaGFzT3duUHJvcGVydHkoc2VjcykgPyB0aGlzLl9jYWxlbmRhcltzZWNzXSA6IGZhbHNlO1xuICB9XG5cbiAgcHJpdmF0ZSByZWFkQ2FsZW5kYXIoKSB7XG4gICAgaWYgKCF0aGlzLl9jYWxlbmRhcikge1xuICAgICAgdGhpcy5fY2FsZW5kYXIgPSBKU09OLnBhcnNlKHNldHRpbmdzLmdldFN0cmluZyhDQUxFTkRBUiwgJ3t9JykpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc2F2ZUNhbGVuZGFyKCkge1xuICAgIHNldHRpbmdzLnNldFN0cmluZyhDQUxFTkRBUiwgSlNPTi5zdHJpbmdpZnkodGhpcy5fY2FsZW5kYXIpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbWFnZSB3aXRoIGNhbGVuZGFyIG1hbmFnZSBmdW5jdGlvbnNcbiAgICovXG4gIHByaXZhdGUgcmVhZEltYWdlcygpIHtcbiAgICB0aGlzLl9pbWFnZXMgPSBKU09OLnBhcnNlKHNldHRpbmdzLmdldFN0cmluZyhJTUFHRVMsICdbXScpKTtcbiAgfVxuXG4gIHByaXZhdGUgc2F2ZUltYWdlcygpIHtcbiAgICBzZXR0aW5ncy5zZXRTdHJpbmcoSU1BR0VTLCBKU09OLnN0cmluZ2lmeSh0aGlzLl9pbWFnZXMpKTtcbiAgfVxuXG4gIGdldEltYWdlTGlzdCgpIHtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihbXSwgdGhpcy5faW1hZ2VzKTsgLy8gY2xvbmUgYXJyYXlcbiAgfVxuXG4gIGFkZEltYWdlKGltYWdlQ2FsZW5kYXI6IElJbWFnZUNhbGVuZGFyKSB7XG4gICAgdGhpcy5faW1hZ2VzLnB1c2goaW1hZ2VDYWxlbmRhcik7XG4gICAgdGhpcy5zYXZlSW1hZ2VzKCk7XG4gIH1cblxuICBzYXZlSW1hZ2VDYWxlbmRhcihpbWFnZUNhbGVuZGFyOiBJSW1hZ2VDYWxlbmRhcikge1xuICAgIGxldCBmb3VuZElDID0gXy5maW5kKHRoaXMuX2ltYWdlcywge2ltYWdlRmlsZTogaW1hZ2VDYWxlbmRhci5pbWFnZUZpbGV9KTtcbiAgICAvLyBjb25zb2xlLmxvZygnc2V0dGluZ3Muc2VydmljZS50czogc2F2ZUltYWdlQ2FsZW5kYXInLCBKU09OLnN0cmluZ2lmeShpbWFnZUNhbGVuZGFyLCBudWxsLCA0KSk7XG4gICAgaWYgKGZvdW5kSUMpIHtcbiAgICAgIE9iamVjdC5hc3NpZ24oZm91bmRJQywgaW1hZ2VDYWxlbmRhcik7XG4gICAgICB0aGlzLnNhdmVJbWFnZXMoKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdTZXR0aW5nc1NlcnZpY2Uuc2F2ZUltYWdlOiBub3QgZm91bmQgaW1hZ2UgaXRlbSBieSBmaWxlOicsIGltYWdlQ2FsZW5kYXIuaW1hZ2VGaWxlKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==