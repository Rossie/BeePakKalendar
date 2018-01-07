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
        this.calendarScale = 1;
        this.calendar_x = 0;
        this.calendar_y = 0;
        this.gridScale = 1;
        this.pageRoute.activatedRoute
            .switchMap(function (activatedRoute) { return activatedRoute.url; })
            .subscribe(function (param) {
        });
    }
    ImageCalendarComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.imageService.croppedFileImageSource) {
            this.imageCropped = this.imageService.croppedFileImageSource;
        }
        else {
            this.imageService.getLastImageSource()
                .then(function (lastImageSource) { return _this.imageCropped = lastImageSource; })
                .catch(function (error) {
                console.error('No last file found.');
                _this.router.navigateByUrl('image-select');
            });
        }
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
    ImageCalendarComponent.prototype.onSliderValueChange = function (event) {
        // _.forIn(event, (value, key) => console.log(key,value));
        this.calendarScale = event.value / 10;
    };
    ImageCalendarComponent.prototype.onInnerPan = function (event) {
        console.log("onInnerPan", event);
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
            router_extensions_1.RouterExtensions])
    ], ImageCalendarComponent);
    return ImageCalendarComponent;
}());
exports.ImageCalendarComponent = ImageCalendarComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2UtY2FsZW5kYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaW1hZ2UtY2FsZW5kYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBHO0FBQzFHLGtEQUFnRDtBQUNoRCxxRkFBMkU7QUFHM0UsbUZBQWlGO0FBRWpGLHdEQUFzRDtBQUN0RCxvREFBc0Q7QUFHdEQsMERBQTREO0FBVTVEO0lBY0UsZ0NBQ1UsWUFBMEIsRUFDMUIsZUFBZ0MsRUFDaEMsU0FBb0IsRUFDcEIsTUFBd0I7UUFIeEIsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDMUIsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFDcEIsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFqQjNCLGtCQUFhLEdBQVcsQ0FBQyxDQUFDO1FBSzFCLGVBQVUsR0FBVyxDQUFDLENBQUM7UUFDdkIsZUFBVSxHQUFXLENBQUMsQ0FBQztRQUV0QixjQUFTLEdBQVcsQ0FBQyxDQUFDO1FBVzVCLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYzthQUMxQixTQUFTLENBQUMsVUFBQyxjQUE4QixJQUFLLE9BQUEsY0FBYyxDQUFDLEdBQUcsRUFBbEIsQ0FBa0IsQ0FBQzthQUNqRSxTQUFTLENBQUMsVUFBQyxLQUFtQjtRQUMvQixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCx5Q0FBUSxHQUFSO1FBQUEsaUJBbUJDO1FBbEJDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxDQUFDO1lBQzdDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxzQkFBc0IsQ0FBQztRQUMvRCxDQUFDO1FBQ0QsSUFBSSxDQUFDLENBQUM7WUFDSixJQUFJLENBQUMsWUFBWSxDQUFDLGtCQUFrQixFQUFFO2lCQUNuQyxJQUFJLENBQUMsVUFBQSxlQUFlLElB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RyxDQUFDLFlBQVksRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBN0UyQjtRQUEzQixnQkFBUyxDQUFDLGVBQWUsQ0FBQztrQ0FBbUIsaUJBQVU7b0VBQUM7SUFaOUMsc0JBQXNCO1FBTmxDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLG9CQUFvQjtZQUM5QixXQUFXLEVBQUUsaUNBQWlDO1lBQzlDLFNBQVMsRUFBRSxDQUFDLGlDQUFpQyxDQUFDO1NBQy9DLENBQUM7eUNBZ0J3Qiw0QkFBWTtZQUNULGtDQUFlO1lBQ3JCLDhCQUFTO1lBQ1osb0NBQWdCO09BbEJ2QixzQkFBc0IsQ0EyRmxDO0lBQUQsNkJBQUM7Q0FBQSxBQTNGRCxJQTJGQztBQTNGWSx3REFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgRWxlbWVudFJlZiwgQWZ0ZXJWaWV3SW5pdCwgVmlld0NoaWxkLCBBZnRlclZpZXdDaGVja2VkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJbWFnZVNlcnZpY2UgfSBmcm9tICcuLi9pbWFnZS5zZXJ2aWNlJztcbmltcG9ydCB7IFBhZ2VSb3V0ZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlci9wYWdlLXJvdXRlci1vdXRsZXQnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXIvc3JjL3JvdXRlcl9zdGF0ZSc7XG5pbXBvcnQgeyBVcmxTZWdtZW50IH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyL3NyYy91cmxfdHJlZSc7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyL3JvdXRlci1leHRlbnNpb25zJztcbmltcG9ydCB7IFBhbkdlc3R1cmVFdmVudERhdGEgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL2dlc3R1cmVzL2dlc3R1cmVzJztcbmltcG9ydCB7IENhbGVuZGFyU2VydmljZSB9IGZyb20gJy4uL2NhbGVuZGFyLnNlcnZpY2UnO1xuaW1wb3J0ICogYXMgc2NyZWVuU2hvdCBmcm9tICduYXRpdmVzY3JpcHQtc2NyZWVuc2hvdCc7XG5pbXBvcnQgeyBJbWFnZVNvdXJjZSB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvaW1hZ2Utc291cmNlL2ltYWdlLXNvdXJjZSc7XG5pbXBvcnQgeyBBYnNvbHV0ZUxheW91dCB9IGZyb20gXCJ1aS9sYXlvdXRzL2Fic29sdXRlLWxheW91dFwiO1xuaW1wb3J0ICogYXMgcGxhdGZvcm1Nb2R1bGUgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvcGxhdGZvcm1cIjtcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJ1xuaW1wb3J0IHsgUG9pbnQgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL2ZyYW1lL2ZyYW1lJztcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnYXBwLWltYWdlLWNhbGVuZGFyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2ltYWdlLWNhbGVuZGFyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vaW1hZ2UtY2FsZW5kYXIuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBJbWFnZUNhbGVuZGFyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdDaGVja2VkIHtcbiAgcHVibGljIGNhbGVuZGFyU2NhbGU6IG51bWJlciA9IDE7XG4gIHByaXZhdGUgc2NyZWVuV2lkdGhQeDogYW55O1xuICBwcml2YXRlIHNjcmVlbkhlaWdodFB4OiBhbnk7XG4gIHByaXZhdGUgdGFwX3k6IG51bWJlcjtcbiAgcHJpdmF0ZSB0YXBfeDogbnVtYmVyO1xuICBwdWJsaWMgY2FsZW5kYXJfeDogbnVtYmVyID0gMDtcbiAgcHVibGljIGNhbGVuZGFyX3k6IG51bWJlciA9IDA7XG4gIHByaXZhdGUgY2FsZW5kYXJJbWFnZU9uU2NyZWVuOlBvaW50O1xuICBwcml2YXRlIGdyaWRTY2FsZTogbnVtYmVyID0gMTtcbiAgcHVibGljIGltYWdlQ3JvcHBlZDogSW1hZ2VTb3VyY2U7XG5cbiAgQFZpZXdDaGlsZCgnY2FsZW5kYXJJbWFnZScpIGNhbGVuZGFySW1hZ2VSZWY6IEVsZW1lbnRSZWY7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBpbWFnZVNlcnZpY2U6IEltYWdlU2VydmljZSxcbiAgICBwcml2YXRlIGNhbGVuZGFyU2VydmljZTogQ2FsZW5kYXJTZXJ2aWNlLFxuICAgIHByaXZhdGUgcGFnZVJvdXRlOiBQYWdlUm91dGUsXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlckV4dGVuc2lvbnNcbiAgKSB7XG4gICAgdGhpcy5wYWdlUm91dGUuYWN0aXZhdGVkUm91dGVcbiAgICAgIC5zd2l0Y2hNYXAoKGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSkgPT4gYWN0aXZhdGVkUm91dGUudXJsKVxuICAgICAgLnN1YnNjcmliZSgocGFyYW06IFVybFNlZ21lbnRbXSkgPT4ge1xuICAgICAgfSk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAodGhpcy5pbWFnZVNlcnZpY2UuY3JvcHBlZEZpbGVJbWFnZVNvdXJjZSkge1xuICAgICAgdGhpcy5pbWFnZUNyb3BwZWQgPSB0aGlzLmltYWdlU2VydmljZS5jcm9wcGVkRmlsZUltYWdlU291cmNlO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaW1hZ2VTZXJ2aWNlLmdldExhc3RJbWFnZVNvdXJjZSgpXG4gICAgICAgIC50aGVuKGxhc3RJbWFnZVNvdXJjZSA9PiB0aGlzLmltYWdlQ3JvcHBlZCA9IGxhc3RJbWFnZVNvdXJjZSlcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdObyBsYXN0IGZpbGUgZm91bmQuJyk7XG4gICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybCgnaW1hZ2Utc2VsZWN0Jyk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgdGhpcy5zY3JlZW5XaWR0aFB4ID0gcGxhdGZvcm1Nb2R1bGUuc2NyZWVuLm1haW5TY3JlZW4ud2lkdGhQaXhlbHM7XG4gICAgdGhpcy5zY3JlZW5IZWlnaHRQeCA9IHBsYXRmb3JtTW9kdWxlLnNjcmVlbi5tYWluU2NyZWVuLmhlaWdodFBpeGVscztcblxuICAgIGxldCB2aWV3OiBBYnNvbHV0ZUxheW91dCA9IHRoaXMuY2FsZW5kYXJJbWFnZVJlZi5uYXRpdmVFbGVtZW50O1xuICAgIHZpZXcud2lkdGggPSB7IHZhbHVlOiB0aGlzLnNjcmVlbldpZHRoUHgsIHVuaXQ6IFwicHhcIiB9O1xuICAgIHZpZXcuaGVpZ2h0ID0geyB2YWx1ZTogdGhpcy5zY3JlZW5IZWlnaHRQeCwgdW5pdDogXCJweFwiIH07XG4gIH1cblxuICBuZ0FmdGVyVmlld0NoZWNrZWQoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmNhbGVuZGFySW1hZ2VPblNjcmVlbikge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGxldCB2aWV3OiBBYnNvbHV0ZUxheW91dCA9IHRoaXMuY2FsZW5kYXJJbWFnZVJlZi5uYXRpdmVFbGVtZW50O1xuICAgICAgICB0aGlzLmNhbGVuZGFySW1hZ2VPblNjcmVlbiA9IHZpZXcuZ2V0TG9jYXRpb25PblNjcmVlbigpOyAgICAgIFxuICAgICAgfSwgMTAwKTtcbiAgICB9XG4gIH1cbiAgXG4gIG9uQ2FsZW5kYXJQYW4oZXZlbnQ6IFBhbkdlc3R1cmVFdmVudERhdGEpIHtcbiAgICAvLyBvbmx5IHZlcnRpY2FsIHBhbm5pbmdcbiAgICBzd2l0Y2ggKGV2ZW50LnN0YXRlKSB7XG4gICAgICBjYXNlIDE6XG4gICAgICAgIC8vIHRoaXMudGFwX3ggPSB0aGlzLmNhbGVuZGFyX3g7XG4gICAgICAgIHRoaXMudGFwX3kgPSB0aGlzLmNhbGVuZGFyX3k7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAyOlxuICAgICAgICAvLyB0aGlzLmNhbGVuZGFyX3ggPSB0aGlzLnRhcF94ICsgZXZlbnQuZGVsdGFYO1xuICAgICAgICB0aGlzLmNhbGVuZGFyX3kgPSB0aGlzLmtlZXBJblJhbmdlKHRoaXMudGFwX3kgKyBldmVudC5kZWx0YVksIC10aGlzLmNhbGVuZGFySW1hZ2VPblNjcmVlbi55LCAwICk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUga2VlcEluUmFuZ2UodmFsOm51bWJlciwgbWluOm51bWJlciwgbWF4Om51bWJlcik6bnVtYmVyIHtcbiAgICBpZiAodmFsIDwgbWluKSByZXR1cm4gbWluO1xuICAgIGlmICh2YWwgPiBtYXgpIHJldHVybiBtYXg7XG4gICAgcmV0dXJuIHZhbDtcbiAgfVxuXG4gIGNhcHR1cmUoKSB7XG4gICAgbGV0IGlzOiBJbWFnZVNvdXJjZSA9IHNjcmVlblNob3QuZ2V0SW1hZ2UodGhpcy5jYWxlbmRhckltYWdlUmVmLm5hdGl2ZUVsZW1lbnQpO1xuICAgIHRoaXMuaW1hZ2VTZXJ2aWNlLnNhdmVDYWxlbmRhckltYWdlKGlzKTtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKCdpbWFnZS1yZXN1bHQnKTtcbiAgfVxuXG4gIG9uU2xpZGVyVmFsdWVDaGFuZ2UoZXZlbnQpe1xuICAgIC8vIF8uZm9ySW4oZXZlbnQsICh2YWx1ZSwga2V5KSA9PiBjb25zb2xlLmxvZyhrZXksdmFsdWUpKTtcbiAgICB0aGlzLmNhbGVuZGFyU2NhbGUgPSBldmVudC52YWx1ZSAvIDEwO1xuICB9XG5cbiAgb25Jbm5lclBhbihldmVudCkge1xuICAgIGNvbnNvbGUubG9nKFwib25Jbm5lclBhblwiLCBldmVudCk7XG4gIH1cblxufVxuIl19