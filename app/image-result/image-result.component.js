"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var image_service_1 = require("../services/image.service");
var application_1 = require("tns-core-modules/application/application");
var Toast = require("nativescript-toast");
var nativescript_exit_1 = require("nativescript-exit");
var settings_service_1 = require("../services/settings.service");
var SocialShare = require("nativescript-social-share");
var calendar_service_1 = require("../services/calendar.service");
var ImageResultComponent = (function () {
    function ImageResultComponent(router, imageService, settingsService, calendarService) {
        this.router = router;
        this.imageService = imageService;
        this.settingsService = settingsService;
        this.calendarService = calendarService;
    }
    ImageResultComponent.prototype.ngOnInit = function () {
        // let img:Image = this.imgResultRef.nativeElement;
        this.imgResult = this.imageService.calendarImageSource;
        // img.imageSource = this.imageService.getImageSourceFromFile(this.calendarService.imageCalendar.imageFile);
        this.settingsService.notFirstRun();
    };
    ImageResultComponent.prototype.setWallpaper = function () {
        if (this.imageService.calendarImageSource.android) {
            application_1.android.context.setWallpaper(this.imageService.calendarImageSource.android);
            Toast.makeText('Háttérkép beállítva.', 'long').show();
        }
        else
            console.error('setWallpaper: Not implemented for IOS.');
    };
    ImageResultComponent.prototype.saveToFile = function () {
        var file = (new Date()).getTime() + '.png';
        file = this.imageService.getImagePath(file);
        this.imageService.calendarImageSource.saveToFile(file, "png");
        Toast.makeText('Kép elmentve.', 'long').show();
    };
    ImageResultComponent.prototype.share = function () {
        SocialShare.shareImage(this.imageService.calendarImageSource);
    };
    ImageResultComponent.prototype.goHome = function () {
        this.router.navigateByUrl('image-select');
    };
    ImageResultComponent.prototype.exit = function () {
        nativescript_exit_1.exit();
    };
    ImageResultComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'ns-image-result',
            templateUrl: './image-result.component.html',
            styleUrls: ['./image-result.component.scss']
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions,
            image_service_1.ImageService,
            settings_service_1.SettingsService,
            calendar_service_1.CalendarService])
    ], ImageResultComponent);
    return ImageResultComponent;
}());
exports.ImageResultComponent = ImageResultComponent;
