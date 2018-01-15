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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2UtY2FsZW5kYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaW1hZ2UtY2FsZW5kYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBHO0FBQzFHLDJEQUF5RDtBQUN6RCxxRkFBMkU7QUFHM0UsbUZBQWlGO0FBRWpGLGlFQUErRDtBQUMvRCxvREFBc0Q7QUFHdEQsMERBQTREO0FBRzVELGlFQUErRDtBQVMvRDtJQWdCRSxnQ0FDVSxZQUEwQixFQUMxQixlQUFnQyxFQUNoQyxTQUFvQixFQUNwQixNQUF3QixFQUN4QixRQUF5QjtRQUxuQyxpQkFpQkM7UUFoQlMsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDMUIsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFDcEIsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFDeEIsYUFBUSxHQUFSLFFBQVEsQ0FBaUI7UUFwQjVCLGtCQUFhLEdBQVcsQ0FBQyxDQUFDO1FBSzFCLFlBQU8sR0FBVyxDQUFDLENBQUM7UUFDcEIsWUFBTyxHQUFXLENBQUMsQ0FBQztRQUNwQixlQUFVLEdBQVcsQ0FBQyxDQUFDO1FBQ3ZCLGVBQVUsR0FBVyxDQUFDLENBQUM7UUFFdEIsY0FBUyxHQUFXLENBQUMsQ0FBQztRQVk1QixJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWM7YUFDMUIsU0FBUyxDQUFDLFVBQUMsY0FBOEIsSUFBSyxPQUFBLGNBQWMsQ0FBQyxHQUFHLEVBQWxCLENBQWtCLENBQUM7YUFDakUsU0FBUyxDQUFDLFVBQUMsS0FBbUI7UUFDL0IsQ0FBQyxDQUFDLENBQUM7UUFFTCxJQUFJLENBQUMsZUFBZSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsVUFBQSxXQUFXO1lBQ3hELDhFQUE4RTtZQUM5RSxLQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEdBQUcsV0FBVyxDQUFDLElBQUksRUFBRSxDQUFD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USxFQUFFLG9CQUFvQjtZQUM5QixXQUFXLEVBQUUsaUNBQWlDO1lBQzlDLFNBQVMsRUFBRSxDQUFDLGlDQUFpQyxDQUFDO1NBQy9DLENBQUM7eUNBa0J3Qiw0QkFBWTtZQUNULGtDQUFlO1lBQ3JCLDhCQUFTO1lBQ1osb0NBQWdCO1lBQ2Qsa0NBQWU7T0FyQnhCLHNCQUFzQixDQTRHbEM7SUFBRCw2QkFBQztDQUFBLEFBNUdELElBNEdDO0FBNUdZLHdEQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBFbGVtZW50UmVmLCBBZnRlclZpZXdJbml0LCBWaWV3Q2hpbGQsIEFmdGVyVmlld0NoZWNrZWQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEltYWdlU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2ltYWdlLnNlcnZpY2UnO1xuaW1wb3J0IHsgUGFnZVJvdXRlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyL3BhZ2Utcm91dGVyLW91dGxldCc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlci9zcmMvcm91dGVyX3N0YXRlJztcbmltcG9ydCB7IFVybFNlZ21lbnQgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXIvc3JjL3VybF90cmVlJztcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXIvcm91dGVyLWV4dGVuc2lvbnMnO1xuaW1wb3J0IHsgUGFuR2VzdHVyZUV2ZW50RGF0YSB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvZ2VzdHVyZXMvZ2VzdHVyZXMnO1xuaW1wb3J0IHsgQ2FsZW5kYXJTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvY2FsZW5kYXIuc2VydmljZSc7XG5pbXBvcnQgKiBhcyBzY3JlZW5TaG90IGZyb20gJ25hdGl2ZXNjcmlwdC1zY3JlZW5zaG90JztcbmltcG9ydCB7IEltYWdlU291cmNlIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy9pbWFnZS1zb3VyY2UvaW1hZ2Utc291cmNlJztcbmltcG9ydCB7IEFic29sdXRlTGF5b3V0IH0gZnJvbSBcInVpL2xheW91dHMvYWJzb2x1dGUtbGF5b3V0XCI7XG5pbXBvcnQgKiBhcyBwbGF0Zm9ybU1vZHVsZSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9wbGF0Zm9ybVwiO1xuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnXG5pbXBvcnQgeyBQb2ludCB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvZnJhbWUvZnJhbWUnO1xuaW1wb3J0IHsgU2V0dGluZ3NTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvc2V0dGluZ3Muc2VydmljZSc7XG5pbXBvcnQgeyBMYXlvdXRCYXNlIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9sYXlvdXRzL2xheW91dC1iYXNlJztcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnYXBwLWltYWdlLWNhbGVuZGFyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2ltYWdlLWNhbGVuZGFyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vaW1hZ2UtY2FsZW5kYXIuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBJbWFnZUNhbGVuZGFyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdDaGVja2VkIHtcbiAgcHVibGljIGNhbGVuZGFyU2NhbGU6IG51bWJlciA9IDE7XG4gIHByaXZhdGUgc2NyZWVuV2lkdGhQeDogYW55O1xuICBwcml2YXRlIHNjcmVlbkhlaWdodFB4OiBhbnk7XG4gIHByaXZhdGUgdGFwX3k6IG51bWJlcjtcbiAgcHJpdmF0ZSB0YXBfeDogbnVtYmVyO1xuICBwdWJsaWMgaW1hZ2VfeDogbnVtYmVyID0gMDtcbiAgcHVibGljIGltYWdlX3k6IG51bWJlciA9IDA7XG4gIHB1YmxpYyBjYWxlbmRhcl94OiBudW1iZXIgPSAwO1xuICBwdWJsaWMgY2FsZW5kYXJfeTogbnVtYmVyID0gMDtcbiAgcHJpdmF0ZSBjYWxlbmRhckltYWdlT25TY3JlZW46UG9pbnQ7XG4gIHByaXZhdGUgZ3JpZFNjYWxlOiBudW1iZXIgPSAxO1xuICBwdWJsaWMgaW1hZ2VDcm9wcGVkOiBJbWFnZVNvdXJjZTtcblxuICBAVmlld0NoaWxkKCdjYWxlbmRhckltYWdlJykgY2FsZW5kYXJJbWFnZVJlZjogRWxlbWVudFJlZjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGltYWdlU2VydmljZTogSW1hZ2VTZXJ2aWNlLFxuICAgIHByaXZhdGUgY2FsZW5kYXJTZXJ2aWNlOiBDYWxlbmRhclNlcnZpY2UsXG4gICAgcHJpdmF0ZSBwYWdlUm91dGU6IFBhZ2VSb3V0ZSxcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyRXh0ZW5zaW9ucyxcbiAgICBwcml2YXRlIHNldHRpbmdzOiBTZXR0aW5nc1NlcnZpY2UsXG4gICkge1xuICAgIHRoaXMucGFnZVJvdXRlLmFjdGl2YXRlZFJvdXRlXG4gICAgICAuc3dpdGNoTWFwKChhY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUpID0+IGFjdGl2YXRlZFJvdXRlLnVybClcbiAgICAgIC5zdWJzY3JpYmUoKHBhcmFtOiBVcmxTZWdtZW50W10pID0+IHtcbiAgICAgIH0pO1xuXG4gICAgdGhpcy5jYWxlbmRhclNlcnZpY2UubW9udGhPYnNlcnZhYmxlLnN1YnNjcmliZShtb250aE1vbWVudCA9PiB7XG4gICAgICAvLyBjb25zb2xlLmxvZygnSW1hZ2VDYWxlbmRhckNvbXBvbmVudDogbW9udGhNb21lbnQnLCBtb250aE1vbWVudC50b1N0cmluZygpKTtcbiAgICAgIHRoaXMuY2FsZW5kYXJTZXJ2aWNlLmltYWdlQ2FsZW5kYXIubGFzdE1vbnRoID0gbW9udGhNb21lbnQudW5peCgpO1xuICAgICAgdGhpcy5zZXR0aW5ncy5zYXZlSW1hZ2VDYWxlbmRhcih0aGlzLmNhbGVuZGFyU2VydmljZS5pbWFnZUNhbGVuZGFyKTsgICAgICBcbiAgICB9KVxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgbGV0IHNlbGVjdGVkSW1hZ2VDYWxlbmRhciA9IHRoaXMuY2FsZW5kYXJTZXJ2aWNlLmltYWdlQ2FsZW5kYXI7XG4gICAgdGhpcy5pbWFnZUNyb3BwZWQgPSB0aGlzLmltYWdlU2VydmljZS5nZXRJbWFnZVNvdXJjZUZyb21GaWxlKHNlbGVjdGVkSW1hZ2VDYWxlbmRhci5pbWFnZUZpbGUpO1xuICAgIC8vIFRPRE86IHNldCBjYWxlbmRhciBwYXJhbWV0ZXJzIGZyb20gc2F2ZWQgb2JqZWN0IHRvcCwgbGVmdCwgc2NhbGVcbiAgICB0aGlzLmNhbGVuZGFyX3ggPSB0aGlzLmNhbGVuZGFyU2VydmljZS5pbWFnZUNhbGVuZGFyLmNhbGVuZGFyTGVmdCB8fCAwO1xuICAgIHRoaXMuY2FsZW5kYXJfeSA9IHRoaXMuY2FsZW5kYXJTZXJ2aWNlLmltYWdlQ2FsZW5kYXIuY2FsZW5kYXJUb3AgfHwgMDtcbiAgICB0aGlzLmNhbGVuZGFyU2NhbGUgPSB0aGlzLmNhbGVuZGFyU2VydmljZS5pbWFnZUNhbGVuZGFyLmNhbGVuZGFyU2NhbGUgfHwgMSA7XG4gICAgLy8gY29uc29sZS5sb2coXCJuZ09uSW5pdFwiLCBKU09OLnN0cmluZ2lmeSh0aGlzLmNhbGVuZGFyU2VydmljZS5pbWFnZUNhbGVuZGFyLCBudWxsLCA0KSk7XG5cbiAgICB0aGlzLnNjcmVlbldpZHRoUHggPSBwbGF0Zm9ybU1vZHVsZS5zY3JlZW4ubWFpblNjcmVlbi53aWR0aFBpeGVscztcbiAgICB0aGlzLnNjcmVlbkhlaWdodFB4ID0gcGxhdGZvcm1Nb2R1bGUuc2NyZWVuLm1haW5TY3JlZW4uaGVpZ2h0UGl4ZWxzO1xuXG4gICAgbGV0IHZpZXc6IEFic29sdXRlTGF5b3V0ID0gdGhpcy5jYWxlbmRhckltYWdlUmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgdmlldy53aWR0aCA9IHsgdmFsdWU6IHRoaXMuc2NyZWVuV2lkdGhQeCwgdW5pdDogXCJweFwiIH07XG4gICAgdmlldy5oZWlnaHQgPSB7IHZhbHVlOiB0aGlzLnNjcmVlbkhlaWdodFB4LCB1bml0OiBcInB4XCIgfTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3Q2hlY2tlZCgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuY2FsZW5kYXJJbWFnZU9uU2NyZWVuKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgbGV0IHZpZXc6IEFic29sdXRlTGF5b3V0ID0gdGhpcy5jYWxlbmRhckltYWdlUmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgIHRoaXMuY2FsZW5kYXJJbWFnZU9uU2NyZWVuID0gdmlldy5nZXRMb2NhdGlvbk9uU2NyZWVuKCk7ICAgICAgXG4gICAgICB9LCAxMDApO1xuICAgIH1cbiAgfVxuXG4gIC8qKitcbiAgICogRXZlbnQgaGFuZGxlciB3aGVuIHRoZSBiYWNrZ3JvdW5kIGltYWdlIGlzIHBhbm5lZFxuICAgKi9cbiAgb25JbWFnZVBhbihldmVudDogUGFuR2VzdHVyZUV2ZW50RGF0YSkge1xuICAgIC8vIG9ubHkgdmVydGljYWwgcGFubmluZ1xuICAgIHN3aXRjaCAoZXZlbnQuc3RhdGUpIHtcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgdGhpcy50YXBfeSA9IHRoaXMuaW1hZ2VfeTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDI6XG4gICAgICAgIHRoaXMuaW1hZ2VfeSA9IHRoaXMua2VlcEluUmFuZ2UodGhpcy50YXBfeSArIGV2ZW50LmRlbHRhWSwgLXRoaXMuY2FsZW5kYXJJbWFnZU9uU2NyZWVuLnksIDAgKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIFxuICAvKipcbiAgICogRXZlbnQgaGFuZGxlciB3aGVuIHRoZSBwYW4tYW5kLXNjYWxlLmNvbXBvbmVudCBpcyBwYW5uZWRcbiAgICovXG4gIG9uTW9udGhWaWV3UGFuKGV2ZW50OlBhbkdlc3R1cmVFdmVudERhdGEpIHtcbiAgICAvLyB3aGVuIHRoZSB0YXAgZW5kZWRcbiAgICBpZiAoZXZlbnQuc3RhdGUgPT0gMykge1xuICAgICAgbGV0IGxheW91dDogTGF5b3V0QmFzZSA9IDxMYXlvdXRCYXNlPmV2ZW50Lm9iamVjdDtcbiAgICAgIHRoaXMuY2FsZW5kYXJTZXJ2aWNlLmltYWdlQ2FsZW5kYXIuY2FsZW5kYXJMZWZ0ID0gK2xheW91dC5sZWZ0O1xuICAgICAgdGhpcy5jYWxlbmRhclNlcnZpY2UuaW1hZ2VDYWxlbmRhci5jYWxlbmRhclRvcCA9ICtsYXlvdXQudG9wO1xuICAgICAgdGhpcy5zZXR0aW5ncy5zYXZlSW1hZ2VDYWxlbmRhcih0aGlzLmNhbGVuZGFyU2VydmljZS5pbWFnZUNhbGVuZGFyKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGtlZXBJblJhbmdlKHZhbDpudW1iZXIsIG1pbjpudW1iZXIsIG1heDpudW1iZXIpOm51bWJlciB7XG4gICAgaWYgKHZhbCA8IG1pbikgcmV0dXJuIG1pbjtcbiAgICBpZiAodmFsID4gbWF4KSByZXR1cm4gbWF4O1xuICAgIHJldHVybiB2YWw7XG4gIH1cblxuICBjYXB0dXJlKCkge1xuICAgIGxldCBpczogSW1hZ2VTb3VyY2UgPSBzY3JlZW5TaG90LmdldEltYWdlKHRoaXMuY2FsZW5kYXJJbWFnZVJlZi5uYXRpdmVFbGVtZW50KTtcbiAgICB0aGlzLmltYWdlU2VydmljZS5zYXZlQ2FsZW5kYXJJbWFnZShpcyk7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybCgnaW1hZ2UtcmVzdWx0Jyk7XG4gIH1cblxuICBvblNsaWRlclZhbHVlQ2hhbmdlKGV2ZW50KXtcbiAgICAvLyBfLmZvckluKGV2ZW50LCAodmFsdWUsIGtleSkgPT4gY29uc29sZS5sb2coa2V5LHZhbHVlKSk7XG4gICAgdGhpcy5jYWxlbmRhclNjYWxlID0gZXZlbnQudmFsdWUgLyAxMDtcbiAgICB0aGlzLmNhbGVuZGFyU2VydmljZS5pbWFnZUNhbGVuZGFyLmNhbGVuZGFyU2NhbGUgPSB0aGlzLmNhbGVuZGFyU2NhbGU7XG4gICAgdGhpcy5zZXR0aW5ncy5zYXZlSW1hZ2VDYWxlbmRhcih0aGlzLmNhbGVuZGFyU2VydmljZS5pbWFnZUNhbGVuZGFyKTtcbiAgfVxuXG59XG4iXX0=