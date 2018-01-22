"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var page_router_outlet_1 = require("nativescript-angular/router/page-router-outlet");
var platformModule = require("tns-core-modules/platform");
// 3rd pary libraries
var nativescript_imagecropper_1 = require("nativescript-imagecropper"); // https://github.com/bthurlow/nativescript-imagecropper
// Own libraries
var image_service_1 = require("../services/image.service");
var calendar_service_1 = require("../services/calendar.service");
var moment = require("moment");
var settings_service_1 = require("../services/settings.service");
var ImageCropComponent = (function () {
    function ImageCropComponent(router, pageRoute, imageService, settings, calendarService) {
        var _this = this;
        this.router = router;
        this.pageRoute = pageRoute;
        this.imageService = imageService;
        this.settings = settings;
        this.calendarService = calendarService;
        this.imageCropper = new nativescript_imagecropper_1.ImageCropper();
        this.pageRoute.activatedRoute
            .switchMap(function (activatedRoute) { return activatedRoute.url; })
            .subscribe(function (param) {
            _this.cropImage();
        });
    }
    ImageCropComponent.prototype.ngOnInit = function () {
    };
    ImageCropComponent.prototype.cropImage = function () {
        var _this = this;
        var imgSrc = this.imageService.getSelectedSource();
        var options = {
            width: platformModule.screen.mainScreen.widthPixels,
            height: platformModule.screen.mainScreen.heightPixels
        };
        this.imageCropper.show(imgSrc, options)
            .then(function (result) {
            var file = _this.imageService.saveCroppedFile(result.image);
            var imageCalendar = {
                imageFile: file,
                createdOn: moment().unix()
            };
            _this.settings.addImage(imageCalendar);
            _this.calendarService.selectCalendar(imageCalendar);
            _this.router.navigateByUrl('image-calendar');
        })
            .catch(function (error) {
            console.error('Image Cropper Error:', JSON.stringify(error));
            _this.router.navigateByUrl('image-select');
        });
    };
    __decorate([
        core_1.ViewChild('scrollView'),
        __metadata("design:type", core_1.ElementRef)
    ], ImageCropComponent.prototype, "scrollView", void 0);
    ImageCropComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'ns-image-crop',
            templateUrl: './image-crop.component.html',
            styleUrls: ['./image-crop.component.scss']
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions,
            page_router_outlet_1.PageRoute,
            image_service_1.ImageService,
            settings_service_1.SettingsService,
            calendar_service_1.CalendarService])
    ], ImageCropComponent);
    return ImageCropComponent;
}());
exports.ImageCropComponent = ImageCropComponent;
