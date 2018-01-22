"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var page_router_outlet_1 = require("nativescript-angular/router/page-router-outlet");
require("rxjs/add/operator/switchMap");
// 3rd pary libraries
var imagepicker = require("nativescript-imagepicker"); // https://github.com/NativeScript/nativescript-imagepicker
var moment = require("moment");
// Own libraries
var image_service_1 = require("../services/image.service");
var calendar_service_1 = require("../services/calendar.service");
var settings_service_1 = require("../services/settings.service");
var ImageSelectComponent = (function () {
    function ImageSelectComponent(router, imageService, pageRoute, calendarService, settings) {
        this.router = router;
        this.imageService = imageService;
        this.pageRoute = pageRoute;
        this.calendarService = calendarService;
        this.settings = settings;
        this.isLoading = true;
    }
    ImageSelectComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoading = false;
        this.pageRoute.activatedRoute
            .switchMap(function (activatedRoute) { return activatedRoute.url; })
            .subscribe(function (param) {
            _this.dayTexts = _this.settings.getAllDayText(moment());
            // console.log(JSON.stringify(this.dayTexts, null, 2));
        });
        this.images = this.settings.getImageList();
    };
    ImageSelectComponent.prototype.newImage = function () {
        var _this = this;
        var context = imagepicker.create({
            mode: "single" // use "multiple" for multiple selection
        });
        context.authorize()
            .then(function () { return context.present(); })
            .then(function (selection) {
            selection.forEach(function (selected) {
                // process the selected image
                selected.getImage().then(function (imgSource) {
                    // save file into app document
                    _this.imageService.saveSelectedfile(imgSource);
                    _this.router.navigateByUrl('image-crop'); // navigate to next screen
                });
            });
            // list.items = selection;
        }).catch(function (e) {
            // process error
            console.error(e);
        });
    };
    ImageSelectComponent.prototype.loadImage = function (image) {
        // store selected image record
        this.calendarService.selectCalendar(image);
        this.router.navigateByUrl('image-calendar');
    };
    ImageSelectComponent.prototype.next = function () {
        this.router.navigateByUrl('image-crop');
    };
    ImageSelectComponent.prototype.getMonthName = function (image) {
        return image.lastMonth ? moment.unix(image.lastMonth).format('MMMM') : '';
    };
    ImageSelectComponent.prototype.getAgendaDateFormat = function (date) {
        return date.format(calendar_service_1.AGENDA_FORMAT);
    };
    __decorate([
        core_1.ViewChild('scrollView'),
        __metadata("design:type", core_1.ElementRef)
    ], ImageSelectComponent.prototype, "scrollView", void 0);
    ImageSelectComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'ns-image-select',
            templateUrl: './image-select.component.html',
            styleUrls: ['./image-select.component.scss']
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions,
            image_service_1.ImageService,
            page_router_outlet_1.PageRoute,
            calendar_service_1.CalendarService,
            settings_service_1.SettingsService])
    ], ImageSelectComponent);
    return ImageSelectComponent;
}());
exports.ImageSelectComponent = ImageSelectComponent;
