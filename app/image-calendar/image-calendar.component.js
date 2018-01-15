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
    }
    ImageCalendarComponent.prototype.ngOnInit = function () {
        var selectedImageCalendar = this.calendarService.imageCalendar;
        this.imageCropped = this.imageService.getImageSourceFromFile(selectedImageCalendar.imageFile);
        // TODO: set calendar parameters from saved object top, left, scale
        this.calendar_x = this.calendarService.imageCalendar.calendarLeft || 0;
        this.calendar_y = this.calendarService.imageCalendar.calendarTop || 0;
        this.calendarScale = this.calendarService.imageCalendar.calendarScale || 1;
        // console.log("ngOnInit", JSON.stringify(this.calendarService.imageCalendar, null, 4));
        // if (this.calendarService.imageCalendar.lastMonth)
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2UtY2FsZW5kYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaW1hZ2UtY2FsZW5kYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBHO0FBQzFHLDJEQUF5RDtBQUN6RCxxRkFBMkU7QUFHM0UsbUZBQWlGO0FBRWpGLGlFQUErRDtBQUMvRCxvREFBc0Q7QUFHdEQsMERBQTREO0FBRzVELGlFQUErRDtBQVMvRDtJQWdCRSxnQ0FDVSxZQUEwQixFQUMxQixlQUFnQyxFQUNoQyxTQUFvQixFQUNwQixNQUF3QixFQUN4QixRQUF5QjtRQUp6QixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUMxQixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUNwQixXQUFNLEdBQU4sTUFBTSxDQUFrQjtRQUN4QixhQUFRLEdBQVIsUUFBUSxDQUFpQjtRQXBCNUIsa0JBQWEsR0FBVyxDQUFDLENBQUM7UUFLMUIsWUFBTyxHQUFXLENBQUMsQ0FBQztRQUNwQixZQUFPLEdBQVcsQ0FBQyxDQUFDO1FBQ3BCLGVBQVUsR0FBVyxDQUFDLENBQUM7UUFDdkIsZUFBVSxHQUFXLENBQUMsQ0FBQztRQUV0QixjQUFTLEdBQVcsQ0FBQyxDQUFDO1FBWTVCLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYzthQUMxQixTQUFTLENBQUMsVUFBQyxjQUE4QixJQUFLLE9BQUEsY0FBYyxDQUFDLEdBQUcsRUFBbEIsQ0FBa0IsQ0FBQzthQUNqRSxTQUFTLENBQUMsVUFBQyxLQUFtQjtRQUMvQixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCx5Q0FBUSxHQUFSO1FBQ0UsSUFBSSxxQkFBcUIsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQztRQUMvRCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsc0JBQXNCLENBQUMscUJBQXFCLENBQUMsU0FB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b21wb25lbnQsIE9uSW5pdCwgRWxlbWVudFJlZiwgQWZ0ZXJWaWV3SW5pdCwgVmlld0NoaWxkLCBBZnRlclZpZXdDaGVja2VkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJbWFnZVNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9pbWFnZS5zZXJ2aWNlJztcbmltcG9ydCB7IFBhZ2VSb3V0ZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlci9wYWdlLXJvdXRlci1vdXRsZXQnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXIvc3JjL3JvdXRlcl9zdGF0ZSc7XG5pbXBvcnQgeyBVcmxTZWdtZW50IH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyL3NyYy91cmxfdHJlZSc7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyL3JvdXRlci1leHRlbnNpb25zJztcbmltcG9ydCB7IFBhbkdlc3R1cmVFdmVudERhdGEgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL2dlc3R1cmVzL2dlc3R1cmVzJztcbmltcG9ydCB7IENhbGVuZGFyU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2NhbGVuZGFyLnNlcnZpY2UnO1xuaW1wb3J0ICogYXMgc2NyZWVuU2hvdCBmcm9tICduYXRpdmVzY3JpcHQtc2NyZWVuc2hvdCc7XG5pbXBvcnQgeyBJbWFnZVNvdXJjZSB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvaW1hZ2Utc291cmNlL2ltYWdlLXNvdXJjZSc7XG5pbXBvcnQgeyBBYnNvbHV0ZUxheW91dCB9IGZyb20gXCJ1aS9sYXlvdXRzL2Fic29sdXRlLWxheW91dFwiO1xuaW1wb3J0ICogYXMgcGxhdGZvcm1Nb2R1bGUgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvcGxhdGZvcm1cIjtcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJ1xuaW1wb3J0IHsgUG9pbnQgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL2ZyYW1lL2ZyYW1lJztcbmltcG9ydCB7IFNldHRpbmdzU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL3NldHRpbmdzLnNlcnZpY2UnO1xuaW1wb3J0IHsgTGF5b3V0QmFzZSB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvbGF5b3V0cy9sYXlvdXQtYmFzZSc7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ2FwcC1pbWFnZS1jYWxlbmRhcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9pbWFnZS1jYWxlbmRhci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2ltYWdlLWNhbGVuZGFyLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgSW1hZ2VDYWxlbmRhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3Q2hlY2tlZCB7XG4gIHB1YmxpYyBjYWxlbmRhclNjYWxlOiBudW1iZXIgPSAxO1xuICBwcml2YXRlIHNjcmVlbldpZHRoUHg6IGFueTtcbiAgcHJpdmF0ZSBzY3JlZW5IZWlnaHRQeDogYW55O1xuICBwcml2YXRlIHRhcF95OiBudW1iZXI7XG4gIHByaXZhdGUgdGFwX3g6IG51bWJlcjtcbiAgcHVibGljIGltYWdlX3g6IG51bWJlciA9IDA7XG4gIHB1YmxpYyBpbWFnZV95OiBudW1iZXIgPSAwO1xuICBwdWJsaWMgY2FsZW5kYXJfeDogbnVtYmVyID0gMDtcbiAgcHVibGljIGNhbGVuZGFyX3k6IG51bWJlciA9IDA7XG4gIHByaXZhdGUgY2FsZW5kYXJJbWFnZU9uU2NyZWVuOlBvaW50O1xuICBwcml2YXRlIGdyaWRTY2FsZTogbnVtYmVyID0gMTtcbiAgcHVibGljIGltYWdlQ3JvcHBlZDogSW1hZ2VTb3VyY2U7XG5cbiAgQFZpZXdDaGlsZCgnY2FsZW5kYXJJbWFnZScpIGNhbGVuZGFySW1hZ2VSZWY6IEVsZW1lbnRSZWY7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBpbWFnZVNlcnZpY2U6IEltYWdlU2VydmljZSxcbiAgICBwcml2YXRlIGNhbGVuZGFyU2VydmljZTogQ2FsZW5kYXJTZXJ2aWNlLFxuICAgIHByaXZhdGUgcGFnZVJvdXRlOiBQYWdlUm91dGUsXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlckV4dGVuc2lvbnMsXG4gICAgcHJpdmF0ZSBzZXR0aW5nczogU2V0dGluZ3NTZXJ2aWNlLFxuICApIHtcbiAgICB0aGlzLnBhZ2VSb3V0ZS5hY3RpdmF0ZWRSb3V0ZVxuICAgICAgLnN3aXRjaE1hcCgoYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlKSA9PiBhY3RpdmF0ZWRSb3V0ZS51cmwpXG4gICAgICAuc3Vic2NyaWJlKChwYXJhbTogVXJsU2VnbWVudFtdKSA9PiB7XG4gICAgICB9KTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGxldCBzZWxlY3RlZEltYWdlQ2FsZW5kYXIgPSB0aGlzLmNhbGVuZGFyU2VydmljZS5pbWFnZUNhbGVuZGFyO1xuICAgIHRoaXMuaW1hZ2VDcm9wcGVkID0gdGhpcy5pbWFnZVNlcnZpY2UuZ2V0SW1hZ2VTb3VyY2VGcm9tRmlsZShzZWxlY3RlZEltYWdlQ2FsZW5kYXIuaW1hZ2VGaWxlKTtcbiAgICAvLyBUT0RPOiBzZXQgY2FsZW5kYXIgcGFyYW1ldGVycyBmcm9tIHNhdmVkIG9iamVjdCB0b3AsIGxlZnQsIHNjYWxlXG4gICAgdGhpcy5jYWxlbmRhcl94ID0gdGhpcy5jYWxlbmRhclNlcnZpY2UuaW1hZ2VDYWxlbmRhci5jYWxlbmRhckxlZnQgfHwgMDtcbiAgICB0aGlzLmNhbGVuZGFyX3kgPSB0aGlzLmNhbGVuZGFyU2VydmljZS5pbWFnZUNhbGVuZGFyLmNhbGVuZGFyVG9wIHx8IDA7XG4gICAgdGhpcy5jYWxlbmRhclNjYWxlID0gdGhpcy5jYWxlbmRhclNlcnZpY2UuaW1hZ2VDYWxlbmRhci5jYWxlbmRhclNjYWxlIHx8IDEgO1xuICAgIC8vIGNvbnNvbGUubG9nKFwibmdPbkluaXRcIiwgSlNPTi5zdHJpbmdpZnkodGhpcy5jYWxlbmRhclNlcnZpY2UuaW1hZ2VDYWxlbmRhciwgbnVsbCwgNCkpO1xuICAgIC8vIGlmICh0aGlzLmNhbGVuZGFyU2VydmljZS5pbWFnZUNhbGVuZGFyLmxhc3RNb250aClcblxuICAgIHRoaXMuc2NyZWVuV2lkdGhQeCA9IHBsYXRmb3JtTW9kdWxlLnNjcmVlbi5tYWluU2NyZWVuLndpZHRoUGl4ZWxzO1xuICAgIHRoaXMuc2NyZWVuSGVpZ2h0UHggPSBwbGF0Zm9ybU1vZHVsZS5zY3JlZW4ubWFpblNjcmVlbi5oZWlnaHRQaXhlbHM7XG5cbiAgICBsZXQgdmlldzogQWJzb2x1dGVMYXlvdXQgPSB0aGlzLmNhbGVuZGFySW1hZ2VSZWYubmF0aXZlRWxlbWVudDtcbiAgICB2aWV3LndpZHRoID0geyB2YWx1ZTogdGhpcy5zY3JlZW5XaWR0aFB4LCB1bml0OiBcInB4XCIgfTtcbiAgICB2aWV3LmhlaWdodCA9IHsgdmFsdWU6IHRoaXMuc2NyZWVuSGVpZ2h0UHgsIHVuaXQ6IFwicHhcIiB9O1xuICB9XG5cbiAgbmdBZnRlclZpZXdDaGVja2VkKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5jYWxlbmRhckltYWdlT25TY3JlZW4pIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBsZXQgdmlldzogQWJzb2x1dGVMYXlvdXQgPSB0aGlzLmNhbGVuZGFySW1hZ2VSZWYubmF0aXZlRWxlbWVudDtcbiAgICAgICAgdGhpcy5jYWxlbmRhckltYWdlT25TY3JlZW4gPSB2aWV3LmdldExvY2F0aW9uT25TY3JlZW4oKTsgICAgICBcbiAgICAgIH0sIDEwMCk7XG4gICAgfVxuICB9XG5cbiAgLyoqK1xuICAgKiBFdmVudCBoYW5kbGVyIHdoZW4gdGhlIGJhY2tncm91bmQgaW1hZ2UgaXMgcGFubmVkXG4gICAqL1xuICBvbkltYWdlUGFuKGV2ZW50OiBQYW5HZXN0dXJlRXZlbnREYXRhKSB7XG4gICAgLy8gb25seSB2ZXJ0aWNhbCBwYW5uaW5nXG4gICAgc3dpdGNoIChldmVudC5zdGF0ZSkge1xuICAgICAgY2FzZSAxOlxuICAgICAgICB0aGlzLnRhcF95ID0gdGhpcy5pbWFnZV95O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMjpcbiAgICAgICAgdGhpcy5pbWFnZV95ID0gdGhpcy5rZWVwSW5SYW5nZSh0aGlzLnRhcF95ICsgZXZlbnQuZGVsdGFZLCAtdGhpcy5jYWxlbmRhckltYWdlT25TY3JlZW4ueSwgMCApO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgXG4gIC8qKlxuICAgKiBFdmVudCBoYW5kbGVyIHdoZW4gdGhlIHBhbi1hbmQtc2NhbGUuY29tcG9uZW50IGlzIHBhbm5lZFxuICAgKi9cbiAgb25Nb250aFZpZXdQYW4oZXZlbnQ6UGFuR2VzdHVyZUV2ZW50RGF0YSkge1xuICAgIC8vIHdoZW4gdGhlIHRhcCBlbmRlZFxuICAgIGlmIChldmVudC5zdGF0ZSA9PSAzKSB7XG4gICAgICBsZXQgbGF5b3V0OiBMYXlvdXRCYXNlID0gPExheW91dEJhc2U+ZXZlbnQub2JqZWN0O1xuICAgICAgdGhpcy5jYWxlbmRhclNlcnZpY2UuaW1hZ2VDYWxlbmRhci5jYWxlbmRhckxlZnQgPSArbGF5b3V0LmxlZnQ7XG4gICAgICB0aGlzLmNhbGVuZGFyU2VydmljZS5pbWFnZUNhbGVuZGFyLmNhbGVuZGFyVG9wID0gK2xheW91dC50b3A7XG4gICAgICB0aGlzLnNldHRpbmdzLnNhdmVJbWFnZUNhbGVuZGFyKHRoaXMuY2FsZW5kYXJTZXJ2aWNlLmltYWdlQ2FsZW5kYXIpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUga2VlcEluUmFuZ2UodmFsOm51bWJlciwgbWluOm51bWJlciwgbWF4Om51bWJlcik6bnVtYmVyIHtcbiAgICBpZiAodmFsIDwgbWluKSByZXR1cm4gbWluO1xuICAgIGlmICh2YWwgPiBtYXgpIHJldHVybiBtYXg7XG4gICAgcmV0dXJuIHZhbDtcbiAgfVxuXG4gIGNhcHR1cmUoKSB7XG4gICAgbGV0IGlzOiBJbWFnZVNvdXJjZSA9IHNjcmVlblNob3QuZ2V0SW1hZ2UodGhpcy5jYWxlbmRhckltYWdlUmVmLm5hdGl2ZUVsZW1lbnQpO1xuICAgIHRoaXMuaW1hZ2VTZXJ2aWNlLnNhdmVDYWxlbmRhckltYWdlKGlzKTtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKCdpbWFnZS1yZXN1bHQnKTtcbiAgfVxuXG4gIG9uU2xpZGVyVmFsdWVDaGFuZ2UoZXZlbnQpe1xuICAgIC8vIF8uZm9ySW4oZXZlbnQsICh2YWx1ZSwga2V5KSA9PiBjb25zb2xlLmxvZyhrZXksdmFsdWUpKTtcbiAgICB0aGlzLmNhbGVuZGFyU2NhbGUgPSBldmVudC52YWx1ZSAvIDEwO1xuICAgIHRoaXMuY2FsZW5kYXJTZXJ2aWNlLmltYWdlQ2FsZW5kYXIuY2FsZW5kYXJTY2FsZSA9IHRoaXMuY2FsZW5kYXJTY2FsZTtcbiAgICB0aGlzLnNldHRpbmdzLnNhdmVJbWFnZUNhbGVuZGFyKHRoaXMuY2FsZW5kYXJTZXJ2aWNlLmltYWdlQ2FsZW5kYXIpO1xuICB9XG5cbn1cbiJdfQ==