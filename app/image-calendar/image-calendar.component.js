"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var image_service_1 = require("../services/image.service");
var page_router_outlet_1 = require("nativescript-angular/router/page-router-outlet");
var router_extensions_1 = require("nativescript-angular/router/router-extensions");
var calendar_service_1 = require("../services/calendar.service");
var screenShot = require("nativescript-screenshot");
var platformModule = require("tns-core-modules/platform");
var settings_service_1 = require("../services/settings.service");
var ImageCalendarComponent = (function () {
    function ImageCalendarComponent(imageService, calendarService, pageRoute, router, settings) {
        var _this = this;
        this.imageService = imageService;
        this.calendarService = calendarService;
        this.pageRoute = pageRoute;
        this.router = router;
        this.settings = settings;
        this.calendarScale = 1;
        this.image_x = 0;
        this.image_y = 0;
        this.calendar_x = 0;
        this.calendar_y = 0;
        this.gridScale = 1;
        this.pageRoute.activatedRoute
            .switchMap(function (activatedRoute) { return activatedRoute.url; })
            .subscribe(function (param) {
        });
        this.calendarService.monthObservable.subscribe(function (monthMoment) {
            // console.log('ImageCalendarComponent: monthMoment', monthMoment.toString());
            _this.calendarService.imageCalendar.lastMonth = monthMoment.unix();
            _this.settings.saveImageCalendar(_this.calendarService.imageCalendar);
        });
    }
    ImageCalendarComponent.prototype.ngOnInit = function () {
        var selectedImageCalendar = this.calendarService.imageCalendar;
        this.imageCropped = this.imageService.getImageSourceFromFile(selectedImageCalendar.imageFile);
        // TODO: set calendar parameters from saved object top, left, scale
        this.calendar_x = this.calendarService.imageCalendar.calendarLeft || 0;
        this.calendar_y = this.calendarService.imageCalendar.calendarTop || 0;
        this.calendarScale = this.calendarService.imageCalendar.calendarScale || 1;
        // console.log("ngOnInit", JSON.stringify(this.calendarService.imageCalendar, null, 4));
        this.screenWidthPx = platformModule.screen.mainScreen.widthPixels;
        this.screenHeightPx = platformModule.screen.mainScreen.heightPixels;
        var view = this.calendarImageRef.nativeElement;
        view.width = { value: this.screenWidthPx, unit: "px" };
        view.height = { value: this.screenHeightPx, unit: "px" };
    };
    ImageCalendarComponent.prototype.ngAfterViewChecked = function () {
        var _this = this;
        if (!this.calendarImageOnScreen) {
            setTimeout(function () {
                var view = _this.calendarImageRef.nativeElement;
                _this.calendarImageOnScreen = view.getLocationOnScreen();
            }, 100);
        }
    };
    /**+
     * Event handler when the background image is panned
     */
    ImageCalendarComponent.prototype.onImagePan = function (event) {
        // only vertical panning
        switch (event.state) {
            case 1:
                this.tap_y = this.image_y;
                break;
            case 2:
                this.image_y = this.keepInRange(this.tap_y + event.deltaY, -this.calendarImageOnScreen.y, 0);
                break;
        }
    };
    /**
     * Event handler when the pan-and-scale.component is panned
     */
    ImageCalendarComponent.prototype.onMonthViewPan = function (event) {
        // when the tap ended
        if (event.state == 3) {
            var layout = event.object;
            this.calendarService.imageCalendar.calendarLeft = +layout.left;
            this.calendarService.imageCalendar.calendarTop = +layout.top;
            this.settings.saveImageCalendar(this.calendarService.imageCalendar);
        }
    };
    ImageCalendarComponent.prototype.keepInRange = function (val, min, max) {
        if (val < min)
            return min;
        if (val > max)
            return max;
        return val;
    };
    ImageCalendarComponent.prototype.capture = function () {
        var is = screenShot.getImage(this.calendarImageRef.nativeElement);
        this.imageService.saveCalendarImage(is);
        this.router.navigateByUrl('image-result');
    };
    ImageCalendarComponent.prototype.onSliderValueChange = function (event) {
        // _.forIn(event, (value, key) => console.log(key,value));
        this.calendarScale = event.value / 10;
        this.calendarService.imageCalendar.calendarScale = this.calendarScale;
        this.settings.saveImageCalendar(this.calendarService.imageCalendar);
    };
    __decorate([
        core_1.ViewChild('calendarImage'),
        __metadata("design:type", core_1.ElementRef)
    ], ImageCalendarComponent.prototype, "calendarImageRef", void 0);
    ImageCalendarComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-image-calendar',
            templateUrl: './image-calendar.component.html',
            styleUrls: ['./image-calendar.component.scss']
        }),
        __metadata("design:paramtypes", [image_service_1.ImageService,
            calendar_service_1.CalendarService,
            page_router_outlet_1.PageRoute,
            router_extensions_1.RouterExtensions,
            settings_service_1.SettingsService])
    ], ImageCalendarComponent);
    return ImageCalendarComponent;
}());
exports.ImageCalendarComponent = ImageCalendarComponent;
