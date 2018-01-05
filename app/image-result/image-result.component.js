"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var image_service_1 = require("../image.service");
var application_1 = require("tns-core-modules/application/application");
var Toast = require("nativescript-toast");
var nativescript_exit_1 = require("nativescript-exit");
var settings_service_1 = require("../settings.service");
var SocialShare = require("nativescript-social-share");
var ImageResultComponent = (function () {
    function ImageResultComponent(router, imageService, settingsService) {
        this.router = router;
        this.imageService = imageService;
        this.settingsService = settingsService;
    }
    ImageResultComponent.prototype.ngOnInit = function () {
        var img = this.imgResultRef.nativeElement;
        img.imageSource = this.imageService.getCalendarSource();
        this.settingsService.notFirstRun();
    };
    ImageResultComponent.prototype.setWallpaper = function () {
        if (this.imgResultRef.nativeElement.android) {
            application_1.android.context.setWallpaper(this.imageService.getCalendarSource().android);
            Toast.makeText('Háttérkép beállítva.', 'long').show();
        }
        else
            console.error('setWallpaper: Not implemented for IOS.');
    };
    ImageResultComponent.prototype.saveToFile = function () {
        // let folderPath = android.context.getExternalStoragePublicDirectory(android.context.Environment.DIRECTORY_PICTURES);
        // console.dir(img.android);
        console.dir(application_1.android.context.getExternalStoragePublicDirectory());
        Toast.makeText('Kép elmentve.', 'long').show();
    };
    ImageResultComponent.prototype.share = function () {
        SocialShare.shareImage(this.imageService.getCalendarSource());
    };
    ImageResultComponent.prototype.exit = function () {
        nativescript_exit_1.exit();
    };
    __decorate([
        core_1.ViewChild('imgResult'),
        __metadata("design:type", core_1.ElementRef)
    ], ImageResultComponent.prototype, "imgResultRef", void 0);
    ImageResultComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'ns-image-result',
            templateUrl: './image-result.component.html',
            styleUrls: ['./image-result.component.css']
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions,
            image_service_1.ImageService,
            settings_service_1.SettingsService])
    ], ImageResultComponent);
    return ImageResultComponent;
}());
exports.ImageResultComponent = ImageResultComponent;
