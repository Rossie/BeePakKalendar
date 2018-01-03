"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var image_service_1 = require("../image.service");
var page_router_outlet_1 = require("nativescript-angular/router/page-router-outlet");
var router_extensions_1 = require("nativescript-angular/router/router-extensions");
var calendar_service_1 = require("../calendar.service");
var screenShot = require("nativescript-screenshot");
var platformModule = require("tns-core-modules/platform");
var ImageCalendarComponent = (function () {
    function ImageCalendarComponent(imageService, calendarService, pageRoute, router) {
        this.imageService = imageService;
        this.calendarService = calendarService;
        this.pageRoute = pageRoute;
        this.router = router;
        this.calendar_x = 0;
        this.calendar_y = 0;
        this.pageRoute.activatedRoute
            .switchMap(function (activatedRoute) { return activatedRoute.url; })
            .subscribe(function (param) {
        });
    }
    ImageCalendarComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.image = this.imageService.croppedFile;
        var img = this.imgCroppedRef.nativeElement;
        if (this.imageService.croppedFileImageSource) {
            img.imageSource = this.imageService.croppedFileImageSource;
        }
        else {
            this.imageService.getLastImageSource()
                .then(function (lastImageSource) { return img.imageSource = lastImageSource; })
                .catch(function (error) {
                console.error('No last file found.');
                _this.router.navigateByUrl('image-select');
            });
        }
        this.screenWidthPx = platformModule.screen.mainScreen.widthPixels;
        this.screenHeightPx = platformModule.screen.mainScreen.heightPixels;
        // this.minLeft = 
        var view = this.calendarImageRef.nativeElement;
        view.width = { value: this.screenWidthPx, unit: "px" };
        view.height = { value: this.screenHeightPx, unit: "px" };
        // _.forIn(android.context, (value, key) => {
        //   console.log('context:', key, value);
        // });
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
    ImageCalendarComponent.prototype.onCalendarPan = function (event) {
        // only vertical panning
        switch (event.state) {
            case 1:
                // this.tap_x = this.calendar_x;
                this.tap_y = this.calendar_y;
                break;
            case 2:
                // this.calendar_x = this.tap_x + event.deltaX;
                this.calendar_y = this.keepInRange(this.tap_y + event.deltaY, -this.calendarImageOnScreen.y, 0);
                break;
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
    __decorate([
        core_1.ViewChild('viewMonth'),
        __metadata("design:type", core_1.ElementRef)
    ], ImageCalendarComponent.prototype, "viewMonthRef", void 0);
    __decorate([
        core_1.ViewChild('calendarImage'),
        __metadata("design:type", core_1.ElementRef)
    ], ImageCalendarComponent.prototype, "calendarImageRef", void 0);
    __decorate([
        core_1.ViewChild('imgCropped'),
        __metadata("design:type", core_1.ElementRef)
    ], ImageCalendarComponent.prototype, "imgCroppedRef", void 0);
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
            router_extensions_1.RouterExtensions])
    ], ImageCalendarComponent);
    return ImageCalendarComponent;
}());
exports.ImageCalendarComponent = ImageCalendarComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2UtY2FsZW5kYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaW1hZ2UtY2FsZW5kYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBHO0FBQzFHLGtEQUFnRDtBQUNoRCxxRkFBMkU7QUFHM0UsbUZBQWlGO0FBRWpGLHdEQUFzRDtBQUt0RCxvREFBc0Q7QUFJdEQsMERBQTREO0FBVzVEO0lBWUUsZ0NBQ1UsWUFBMEIsRUFDMUIsZUFBZ0MsRUFDaEMsU0FBb0IsRUFDcEIsTUFBd0I7UUFIeEIsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDMUIsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFDcEIsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFYMUIsZUFBVSxHQUFXLENBQUMsQ0FBQztRQUN2QixlQUFVLEdBQVcsQ0FBQyxDQUFDO1FBWTdCLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYzthQUMxQixTQUFTLENBQUMsVUFBQyxjQUE4QixJQUFLLE9BQUEsY0FBYyxDQUFDLEdBQUcsRUFBbEIsQ0FBa0IsQ0FBQzthQUNqRSxTQUFTLENBQUMsVUFBQyxLQUFtQjtRQUMvQixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCx5Q0FBUSxHQUFSO1FBQUEsaUJBMkJDO1FBMUJDLDhDQUE4QztRQUM5QyxJQUFJLEdBQUcsR0FBVSxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQztRQUNsRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FBQztZQUM3QyxHQUFHLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsc0JBQXNCLENBQUM7UUFDN0QsQ0FBQztRQUNELElBQUksQ0FBQyxDQUFDO1lBQ0osSUFBSSxDQUFDLFlBQVksQ0FBQyxrQkFBa0IsRUFBRTtpQkFDbkMsSUFBSSxDQUFDLFVB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QUFVO29FQUFDO0lBQ2hDO1FBQXhCLGdCQUFTLENBQUMsWUFBWSxDQUFDO2tDQUFnQixpQkFBVTtpRUFBQztJQVZ4QyxzQkFBc0I7UUFObEMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsb0JBQW9CO1lBQzlCLFdBQVcsRUFBRSxpQ0FBaUM7WUFDOUMsU0FBUyxFQUFFLENBQUMsaUNBQWlDLENBQUM7U0FDL0MsQ0FBQzt5Q0Fjd0IsNEJBQVk7WUFDVCxrQ0FBZTtZQUNyQiw4QkFBUztZQUNaLG9DQUFnQjtPQWhCdkIsc0JBQXNCLENBeUZsQztJQUFELDZCQUFDO0NBQUEsQUF6RkQsSUF5RkM7QUF6Rlksd0RBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEVsZW1lbnRSZWYsIEFmdGVyVmlld0luaXQsIFZpZXdDaGlsZCwgQWZ0ZXJWaWV3Q2hlY2tlZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSW1hZ2VTZXJ2aWNlIH0gZnJvbSAnLi4vaW1hZ2Uuc2VydmljZSc7XG5pbXBvcnQgeyBQYWdlUm91dGUgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXIvcGFnZS1yb3V0ZXItb3V0bGV0JztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyL3NyYy9yb3V0ZXJfc3RhdGUnO1xuaW1wb3J0IHsgVXJsU2VnbWVudCB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlci9zcmMvdXJsX3RyZWUnO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlci9yb3V0ZXItZXh0ZW5zaW9ucyc7XG5pbXBvcnQgeyBQYW5HZXN0dXJlRXZlbnREYXRhLCBUb3VjaEdlc3R1cmVFdmVudERhdGEgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL2dlc3R1cmVzL2dlc3R1cmVzJztcbmltcG9ydCB7IENhbGVuZGFyU2VydmljZSB9IGZyb20gJy4uL2NhbGVuZGFyLnNlcnZpY2UnO1xuaW1wb3J0IHsgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlL3NyYy9tZXRhZGF0YS9kaXJlY3RpdmVzJztcbmltcG9ydCB7IEdyaWRMYXlvdXQsIEl0ZW1TcGVjIH0gZnJvbSBcInVpL2xheW91dHMvZ3JpZC1sYXlvdXRcIjtcbmltcG9ydCB7IExhYmVsIH0gZnJvbSBcInVpL2xhYmVsXCI7XG5pbXBvcnQgeyBWaWV3TW9udGhDb21wb25lbnQgfSBmcm9tICcuLi92aWV3LW1vbnRoL3ZpZXctbW9udGguY29tcG9uZW50JztcbmltcG9ydCAqIGFzIHNjcmVlblNob3QgZnJvbSAnbmF0aXZlc2NyaXB0LXNjcmVlbnNob3QnO1xuaW1wb3J0IHsgSW1hZ2VTb3VyY2UgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL2ltYWdlLXNvdXJjZS9pbWFnZS1zb3VyY2UnO1xuaW1wb3J0IHsgSW1hZ2UgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL2ltYWdlJztcbmltcG9ydCB7IEFic29sdXRlTGF5b3V0IH0gZnJvbSBcInVpL2xheW91dHMvYWJzb2x1dGUtbGF5b3V0XCI7XG5pbXBvcnQgKiBhcyBwbGF0Zm9ybU1vZHVsZSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9wbGF0Zm9ybVwiO1xuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnXG5pbXBvcnQgeyBQb2ludCB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvZnJhbWUvZnJhbWUnO1xuaW1wb3J0IHsgYW5kcm9pZCB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb24nO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdhcHAtaW1hZ2UtY2FsZW5kYXInLFxuICB0ZW1wbGF0ZVVybDogJy4vaW1hZ2UtY2FsZW5kYXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9pbWFnZS1jYWxlbmRhci5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEltYWdlQ2FsZW5kYXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0NoZWNrZWQge1xuICBwcml2YXRlIHNjcmVlbldpZHRoUHg6IGFueTtcbiAgcHJpdmF0ZSBzY3JlZW5IZWlnaHRQeDogYW55O1xuICBwcml2YXRlIHRhcF95OiBudW1iZXI7XG4gIHByaXZhdGUgdGFwX3g6IG51bWJlcjtcbiAgcHJpdmF0ZSBjYWxlbmRhcl94OiBudW1iZXIgPSAwO1xuICBwcml2YXRlIGNhbGVuZGFyX3k6IG51bWJlciA9IDA7XG4gIHByaXZhdGUgY2FsZW5kYXJJbWFnZU9uU2NyZWVuOlBvaW50O1xuICBAVmlld0NoaWxkKCd2aWV3TW9udGgnKSB2aWV3TW9udGhSZWY6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ2NhbGVuZGFySW1hZ2UnKSBjYWxlbmRhckltYWdlUmVmOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCdpbWdDcm9wcGVkJykgaW1nQ3JvcHBlZFJlZjogRWxlbWVudFJlZjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGltYWdlU2VydmljZTogSW1hZ2VTZXJ2aWNlLFxuICAgIHByaXZhdGUgY2FsZW5kYXJTZXJ2aWNlOiBDYWxlbmRhclNlcnZpY2UsXG4gICAgcHJpdmF0ZSBwYWdlUm91dGU6IFBhZ2VSb3V0ZSxcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyRXh0ZW5zaW9uc1xuICApIHtcbiAgICB0aGlzLnBhZ2VSb3V0ZS5hY3RpdmF0ZWRSb3V0ZVxuICAgICAgLnN3aXRjaE1hcCgoYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlKSA9PiBhY3RpdmF0ZWRSb3V0ZS51cmwpXG4gICAgICAuc3Vic2NyaWJlKChwYXJhbTogVXJsU2VnbWVudFtdKSA9PiB7XG4gICAgICB9KTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIC8vIHRoaXMuaW1hZ2UgPSB0aGlzLmltYWdlU2VydmljZS5jcm9wcGVkRmlsZTtcbiAgICB2YXIgaW1nOiBJbWFnZSA9IHRoaXMuaW1nQ3JvcHBlZFJlZi5uYXRpdmVFbGVtZW50O1xuICAgIGlmICh0aGlzLmltYWdlU2VydmljZS5jcm9wcGVkRmlsZUltYWdlU291cmNlKSB7XG4gICAgICBpbWcuaW1hZ2VTb3VyY2UgPSB0aGlzLmltYWdlU2VydmljZS5jcm9wcGVkRmlsZUltYWdlU291cmNlO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaW1hZ2VTZXJ2aWNlLmdldExhc3RJbWFnZVNvdXJjZSgpXG4gICAgICAgIC50aGVuKGxhc3RJbWFnZVNvdXJjZSA9PiBpbWcuaW1hZ2VTb3VyY2UgPSBsYXN0SW1hZ2VTb3VyY2UpXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignTm8gbGFzdCBmaWxlIGZvdW5kLicpO1xuICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwoJ2ltYWdlLXNlbGVjdCcpO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIHRoaXMuc2NyZWVuV2lkdGhQeCA9IHBsYXRmb3JtTW9kdWxlLnNjcmVlbi5tYWluU2NyZWVuLndpZHRoUGl4ZWxzO1xuICAgIHRoaXMuc2NyZWVuSGVpZ2h0UHggPSBwbGF0Zm9ybU1vZHVsZS5zY3JlZW4ubWFpblNjcmVlbi5oZWlnaHRQaXhlbHM7XG4gICAgLy8gdGhpcy5taW5MZWZ0ID0gXG5cbiAgICBsZXQgdmlldzogQWJzb2x1dGVMYXlvdXQgPSB0aGlzLmNhbGVuZGFySW1hZ2VSZWYubmF0aXZlRWxlbWVudDtcbiAgICB2aWV3LndpZHRoID0geyB2YWx1ZTogdGhpcy5zY3JlZW5XaWR0aFB4LCB1bml0OiBcInB4XCIgfTtcbiAgICB2aWV3LmhlaWdodCA9IHsgdmFsdWU6IHRoaXMuc2NyZWVuSGVpZ2h0UHgsIHVuaXQ6IFwicHhcIiB9O1xuXG4gICAgLy8gXy5mb3JJbihhbmRyb2lkLmNvbnRleHQsICh2YWx1ZSwga2V5KSA9PiB7XG4gICAgLy8gICBjb25zb2xlLmxvZygnY29udGV4dDonLCBrZXksIHZhbHVlKTtcbiAgICAvLyB9KTtcblxuICB9XG5cbiAgbmdBZnRlclZpZXdDaGVja2VkKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5jYWxlbmRhckltYWdlT25TY3JlZW4pIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBsZXQgdmlldzogQWJzb2x1dGVMYXlvdXQgPSB0aGlzLmNhbGVuZGFySW1hZ2VSZWYubmF0aXZlRWxlbWVudDtcbiAgICAgICAgdGhpcy5jYWxlbmRhckltYWdlT25TY3JlZW4gPSB2aWV3LmdldExvY2F0aW9uT25TY3JlZW4oKTsgICAgICBcbiAgICAgIH0sIDEwMCk7XG4gICAgfVxuICB9XG4gIFxuICBvbkNhbGVuZGFyUGFuKGV2ZW50OiBQYW5HZXN0dXJlRXZlbnREYXRhKSB7XG4gICAgLy8gb25seSB2ZXJ0aWNhbCBwYW5uaW5nXG4gICAgc3dpdGNoIChldmVudC5zdGF0ZSkge1xuICAgICAgY2FzZSAxOlxuICAgICAgICAvLyB0aGlzLnRhcF94ID0gdGhpcy5jYWxlbmRhcl94O1xuICAgICAgICB0aGlzLnRhcF95ID0gdGhpcy5jYWxlbmRhcl95O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMjpcbiAgICAgICAgLy8gdGhpcy5jYWxlbmRhcl94ID0gdGhpcy50YXBfeCArIGV2ZW50LmRlbHRhWDtcbiAgICAgICAgdGhpcy5jYWxlbmRhcl95ID0gdGhpcy5rZWVwSW5SYW5nZSh0aGlzLnRhcF95ICsgZXZlbnQuZGVsdGFZLCAtdGhpcy5jYWxlbmRhckltYWdlT25TY3JlZW4ueSwgMCApO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGtlZXBJblJhbmdlKHZhbDpudW1iZXIsIG1pbjpudW1iZXIsIG1heDpudW1iZXIpOm51bWJlciB7XG4gICAgaWYgKHZhbCA8IG1pbikgcmV0dXJuIG1pbjtcbiAgICBpZiAodmFsID4gbWF4KSByZXR1cm4gbWF4O1xuICAgIHJldHVybiB2YWw7XG4gIH1cblxuICBjYXB0dXJlKCkge1xuICAgIGxldCBpczogSW1hZ2VTb3VyY2UgPSBzY3JlZW5TaG90LmdldEltYWdlKHRoaXMuY2FsZW5kYXJJbWFnZVJlZi5uYXRpdmVFbGVtZW50KTtcbiAgICB0aGlzLmltYWdlU2VydmljZS5zYXZlQ2FsZW5kYXJJbWFnZShpcyk7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybCgnaW1hZ2UtcmVzdWx0Jyk7XG4gIH1cblxuICBcbn1cbiJdfQ==