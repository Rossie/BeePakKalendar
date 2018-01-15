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
        this.calendarService.monthObservable.subscribe(function (monthMoment) {
            console.log('monthMoment', monthMoment.toString());
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2UtY2FsZW5kYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaW1hZ2UtY2FsZW5kYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBHO0FBQzFHLDJEQUF5RDtBQUN6RCxxRkFBMkU7QUFHM0UsbUZBQWlGO0FBRWpGLGlFQUErRDtBQUMvRCxvREFBc0Q7QUFHdEQsMERBQTREO0FBRzVELGlFQUErRDtBQVMvRDtJQWdCRSxnQ0FDVSxZQUEwQixFQUMxQixlQUFnQyxFQUNoQyxTQUFvQixFQUNwQixNQUF3QixFQUN4QixRQUF5QjtRQUp6QixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUMxQixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUNwQixXQUFNLEdBQU4sTUFBTSxDQUFrQjtRQUN4QixhQUFRLEdBQVIsUUFBUSxDQUFpQjtRQXBCNUIsa0JBQWEsR0FBVyxDQUFDLENBQUM7UUFLMUIsWUFBTyxHQUFXLENBQUMsQ0FBQztRQUNwQixZQUFPLEdBQVcsQ0FBQyxDQUFDO1FBQ3BCLGVBQVUsR0FBVyxDQUFDLENBQUM7UUFDdkIsZUFBVSxHQUFXLENBQUMsQ0FBQztRQUV0QixjQUFTLEdBQVcsQ0FBQyxDQUFDO1FBWTVCLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYzthQUMxQixTQUFTLENBQUMsVUFBQyxjQUE4QixJQUFLLE9BQUEsY0FBYyxDQUFDLEdBQUcsRUFBbEIsQ0FBa0IsQ0FBQzthQUNqRSxTQUFTLENBQUMsVUFBQyxLQUFtQjtRQUMvQixDQUFDLENBQUMsQ0FBQztRQUVMLElBQUksQ0FBQyxlQUFlLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxVQUFBLFdBQVc7WUFDeEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFDckQsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFD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QUFZO1lBQ1Qsa0NBQWU7WUFDckIsOEJBQVM7WUFDWixvQ0FBZ0I7WUFDZCxrQ0FBZTtPQXJCeEIsc0JBQXNCLENBMkdsQztJQUFELDZCQUFDO0NBQUEsQUEzR0QsSUEyR0M7QUEzR1ksd0RBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEVsZW1lbnRSZWYsIEFmdGVyVmlld0luaXQsIFZpZXdDaGlsZCwgQWZ0ZXJWaWV3Q2hlY2tlZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSW1hZ2VTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvaW1hZ2Uuc2VydmljZSc7XG5pbXBvcnQgeyBQYWdlUm91dGUgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXIvcGFnZS1yb3V0ZXItb3V0bGV0JztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyL3NyYy9yb3V0ZXJfc3RhdGUnO1xuaW1wb3J0IHsgVXJsU2VnbWVudCB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlci9zcmMvdXJsX3RyZWUnO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlci9yb3V0ZXItZXh0ZW5zaW9ucyc7XG5pbXBvcnQgeyBQYW5HZXN0dXJlRXZlbnREYXRhIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9nZXN0dXJlcy9nZXN0dXJlcyc7XG5pbXBvcnQgeyBDYWxlbmRhclNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9jYWxlbmRhci5zZXJ2aWNlJztcbmltcG9ydCAqIGFzIHNjcmVlblNob3QgZnJvbSAnbmF0aXZlc2NyaXB0LXNjcmVlbnNob3QnO1xuaW1wb3J0IHsgSW1hZ2VTb3VyY2UgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL2ltYWdlLXNvdXJjZS9pbWFnZS1zb3VyY2UnO1xuaW1wb3J0IHsgQWJzb2x1dGVMYXlvdXQgfSBmcm9tIFwidWkvbGF5b3V0cy9hYnNvbHV0ZS1sYXlvdXRcIjtcbmltcG9ydCAqIGFzIHBsYXRmb3JtTW9kdWxlIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3BsYXRmb3JtXCI7XG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCdcbmltcG9ydCB7IFBvaW50IH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9mcmFtZS9mcmFtZSc7XG5pbXBvcnQgeyBTZXR0aW5nc1NlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9zZXR0aW5ncy5zZXJ2aWNlJztcbmltcG9ydCB7IExheW91dEJhc2UgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL2xheW91dHMvbGF5b3V0LWJhc2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdhcHAtaW1hZ2UtY2FsZW5kYXInLFxuICB0ZW1wbGF0ZVVybDogJy4vaW1hZ2UtY2FsZW5kYXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9pbWFnZS1jYWxlbmRhci5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEltYWdlQ2FsZW5kYXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0NoZWNrZWQge1xuICBwdWJsaWMgY2FsZW5kYXJTY2FsZTogbnVtYmVyID0gMTtcbiAgcHJpdmF0ZSBzY3JlZW5XaWR0aFB4OiBhbnk7XG4gIHByaXZhdGUgc2NyZWVuSGVpZ2h0UHg6IGFueTtcbiAgcHJpdmF0ZSB0YXBfeTogbnVtYmVyO1xuICBwcml2YXRlIHRhcF94OiBudW1iZXI7XG4gIHB1YmxpYyBpbWFnZV94OiBudW1iZXIgPSAwO1xuICBwdWJsaWMgaW1hZ2VfeTogbnVtYmVyID0gMDtcbiAgcHVibGljIGNhbGVuZGFyX3g6IG51bWJlciA9IDA7XG4gIHB1YmxpYyBjYWxlbmRhcl95OiBudW1iZXIgPSAwO1xuICBwcml2YXRlIGNhbGVuZGFySW1hZ2VPblNjcmVlbjpQb2ludDtcbiAgcHJpdmF0ZSBncmlkU2NhbGU6IG51bWJlciA9IDE7XG4gIHB1YmxpYyBpbWFnZUNyb3BwZWQ6IEltYWdlU291cmNlO1xuXG4gIEBWaWV3Q2hpbGQoJ2NhbGVuZGFySW1hZ2UnKSBjYWxlbmRhckltYWdlUmVmOiBFbGVtZW50UmVmO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgaW1hZ2VTZXJ2aWNlOiBJbWFnZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBjYWxlbmRhclNlcnZpY2U6IENhbGVuZGFyU2VydmljZSxcbiAgICBwcml2YXRlIHBhZ2VSb3V0ZTogUGFnZVJvdXRlLFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXJFeHRlbnNpb25zLFxuICAgIHByaXZhdGUgc2V0dGluZ3M6IFNldHRpbmdzU2VydmljZSxcbiAgKSB7XG4gICAgdGhpcy5wYWdlUm91dGUuYWN0aXZhdGVkUm91dGVcbiAgICAgIC5zd2l0Y2hNYXAoKGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSkgPT4gYWN0aXZhdGVkUm91dGUudXJsKVxuICAgICAgLnN1YnNjcmliZSgocGFyYW06IFVybFNlZ21lbnRbXSkgPT4ge1xuICAgICAgfSk7XG5cbiAgICB0aGlzLmNhbGVuZGFyU2VydmljZS5tb250aE9ic2VydmFibGUuc3Vic2NyaWJlKG1vbnRoTW9tZW50ID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdtb250aE1vbWVudCcsIG1vbnRoTW9tZW50LnRvU3RyaW5nKCkpO1xuICAgIH0pXG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBsZXQgc2VsZWN0ZWRJbWFnZUNhbGVuZGFyID0gdGhpcy5jYWxlbmRhclNlcnZpY2UuaW1hZ2VDYWxlbmRhcjtcbiAgICB0aGlzLmltYWdlQ3JvcHBlZCA9IHRoaXMuaW1hZ2VTZXJ2aWNlLmdldEltYWdlU291cmNlRnJvbUZpbGUoc2VsZWN0ZWRJbWFnZUNhbGVuZGFyLmltYWdlRmlsZSk7XG4gICAgLy8gVE9ETzogc2V0IGNhbGVuZGFyIHBhcmFtZXRlcnMgZnJvbSBzYXZlZCBvYmplY3QgdG9wLCBsZWZ0LCBzY2FsZVxuICAgIHRoaXMuY2FsZW5kYXJfeCA9IHRoaXMuY2FsZW5kYXJTZXJ2aWNlLmltYWdlQ2FsZW5kYXIuY2FsZW5kYXJMZWZ0IHx8IDA7XG4gICAgdGhpcy5jYWxlbmRhcl95ID0gdGhpcy5jYWxlbmRhclNlcnZpY2UuaW1hZ2VDYWxlbmRhci5jYWxlbmRhclRvcCB8fCAwO1xuICAgIHRoaXMuY2FsZW5kYXJTY2FsZSA9IHRoaXMuY2FsZW5kYXJTZXJ2aWNlLmltYWdlQ2FsZW5kYXIuY2FsZW5kYXJTY2FsZSB8fCAxIDtcbiAgICAvLyBjb25zb2xlLmxvZyhcIm5nT25Jbml0XCIsIEpTT04uc3RyaW5naWZ5KHRoaXMuY2FsZW5kYXJTZXJ2aWNlLmltYWdlQ2FsZW5kYXIsIG51bGwsIDQpKTtcbiAgICAvLyBpZiAodGhpcy5jYWxlbmRhclNlcnZpY2UuaW1hZ2VDYWxlbmRhci5sYXN0TW9udGgpXG5cbiAgICB0aGlzLnNjcmVlbldpZHRoUHggPSBwbGF0Zm9ybU1vZHVsZS5zY3JlZW4ubWFpblNjcmVlbi53aWR0aFBpeGVscztcbiAgICB0aGlzLnNjcmVlbkhlaWdodFB4ID0gcGxhdGZvcm1Nb2R1bGUuc2NyZWVuLm1haW5TY3JlZW4uaGVpZ2h0UGl4ZWxzO1xuXG4gICAgbGV0IHZpZXc6IEFic29sdXRlTGF5b3V0ID0gdGhpcy5jYWxlbmRhckltYWdlUmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgdmlldy53aWR0aCA9IHsgdmFsdWU6IHRoaXMuc2NyZWVuV2lkdGhQeCwgdW5pdDogXCJweFwiIH07XG4gICAgdmlldy5oZWlnaHQgPSB7IHZhbHVlOiB0aGlzLnNjcmVlbkhlaWdodFB4LCB1bml0OiBcInB4XCIgfTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3Q2hlY2tlZCgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuY2FsZW5kYXJJbWFnZU9uU2NyZWVuKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgbGV0IHZpZXc6IEFic29sdXRlTGF5b3V0ID0gdGhpcy5jYWxlbmRhckltYWdlUmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgIHRoaXMuY2FsZW5kYXJJbWFnZU9uU2NyZWVuID0gdmlldy5nZXRMb2NhdGlvbk9uU2NyZWVuKCk7ICAgICAgXG4gICAgICB9LCAxMDApO1xuICAgIH1cbiAgfVxuXG4gIC8qKitcbiAgICogRXZlbnQgaGFuZGxlciB3aGVuIHRoZSBiYWNrZ3JvdW5kIGltYWdlIGlzIHBhbm5lZFxuICAgKi9cbiAgb25JbWFnZVBhbihldmVudDogUGFuR2VzdHVyZUV2ZW50RGF0YSkge1xuICAgIC8vIG9ubHkgdmVydGljYWwgcGFubmluZ1xuICAgIHN3aXRjaCAoZXZlbnQuc3RhdGUpIHtcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgdGhpcy50YXBfeSA9IHRoaXMuaW1hZ2VfeTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDI6XG4gICAgICAgIHRoaXMuaW1hZ2VfeSA9IHRoaXMua2VlcEluUmFuZ2UodGhpcy50YXBfeSArIGV2ZW50LmRlbHRhWSwgLXRoaXMuY2FsZW5kYXJJbWFnZU9uU2NyZWVuLnksIDAgKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIFxuICAvKipcbiAgICogRXZlbnQgaGFuZGxlciB3aGVuIHRoZSBwYW4tYW5kLXNjYWxlLmNvbXBvbmVudCBpcyBwYW5uZWRcbiAgICovXG4gIG9uTW9udGhWaWV3UGFuKGV2ZW50OlBhbkdlc3R1cmVFdmVudERhdGEpIHtcbiAgICAvLyB3aGVuIHRoZSB0YXAgZW5kZWRcbiAgICBpZiAoZXZlbnQuc3RhdGUgPT0gMykge1xuICAgICAgbGV0IGxheW91dDogTGF5b3V0QmFzZSA9IDxMYXlvdXRCYXNlPmV2ZW50Lm9iamVjdDtcbiAgICAgIHRoaXMuY2FsZW5kYXJTZXJ2aWNlLmltYWdlQ2FsZW5kYXIuY2FsZW5kYXJMZWZ0ID0gK2xheW91dC5sZWZ0O1xuICAgICAgdGhpcy5jYWxlbmRhclNlcnZpY2UuaW1hZ2VDYWxlbmRhci5jYWxlbmRhclRvcCA9ICtsYXlvdXQudG9wO1xuICAgICAgdGhpcy5zZXR0aW5ncy5zYXZlSW1hZ2VDYWxlbmRhcih0aGlzLmNhbGVuZGFyU2VydmljZS5pbWFnZUNhbGVuZGFyKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGtlZXBJblJhbmdlKHZhbDpudW1iZXIsIG1pbjpudW1iZXIsIG1heDpudW1iZXIpOm51bWJlciB7XG4gICAgaWYgKHZhbCA8IG1pbikgcmV0dXJuIG1pbjtcbiAgICBpZiAodmFsID4gbWF4KSByZXR1cm4gbWF4O1xuICAgIHJldHVybiB2YWw7XG4gIH1cblxuICBjYXB0dXJlKCkge1xuICAgIGxldCBpczogSW1hZ2VTb3VyY2UgPSBzY3JlZW5TaG90LmdldEltYWdlKHRoaXMuY2FsZW5kYXJJbWFnZVJlZi5uYXRpdmVFbGVtZW50KTtcbiAgICB0aGlzLmltYWdlU2VydmljZS5zYXZlQ2FsZW5kYXJJbWFnZShpcyk7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybCgnaW1hZ2UtcmVzdWx0Jyk7XG4gIH1cblxuICBvblNsaWRlclZhbHVlQ2hhbmdlKGV2ZW50KXtcbiAgICAvLyBfLmZvckluKGV2ZW50LCAodmFsdWUsIGtleSkgPT4gY29uc29sZS5sb2coa2V5LHZhbHVlKSk7XG4gICAgdGhpcy5jYWxlbmRhclNjYWxlID0gZXZlbnQudmFsdWUgLyAxMDtcbiAgICB0aGlzLmNhbGVuZGFyU2VydmljZS5pbWFnZUNhbGVuZGFyLmNhbGVuZGFyU2NhbGUgPSB0aGlzLmNhbGVuZGFyU2NhbGU7XG4gICAgdGhpcy5zZXR0aW5ncy5zYXZlSW1hZ2VDYWxlbmRhcih0aGlzLmNhbGVuZGFyU2VydmljZS5pbWFnZUNhbGVuZGFyKTtcbiAgfVxuXG59XG4iXX0=