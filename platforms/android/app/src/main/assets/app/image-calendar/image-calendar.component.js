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
        this.gridScale = 1;
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
    ImageCalendarComponent.prototype.onGridPinch = function (event) {
        console.log('pinch', event.scale, event.state);
        this.gridScale = event.scale;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2UtY2FsZW5kYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaW1hZ2UtY2FsZW5kYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBHO0FBQzFHLGtEQUFnRDtBQUNoRCxxRkFBMkU7QUFHM0UsbUZBQWlGO0FBRWpGLHdEQUFzRDtBQUt0RCxvREFBc0Q7QUFJdEQsMERBQTREO0FBVzVEO0lBYUUsZ0NBQ1UsWUFBMEIsRUFDMUIsZUFBZ0MsRUFDaEMsU0FBb0IsRUFDcEIsTUFBd0I7UUFIeEIsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDMUIsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFDcEIsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFaMUIsZUFBVSxHQUFXLENBQUMsQ0FBQztRQUN2QixlQUFVLEdBQVcsQ0FBQyxDQUFDO1FBRXZCLGNBQVMsR0FBVyxDQUFDLENBQUM7UUFXNUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjO2FBQzFCLFNBQVMsQ0FBQyxVQUFDLGNBQThCLElBQUssT0FBQSxjQUFjLENBQUMsR0FBRyxFQUFsQixDQUFrQixDQUFDO2FBQ2pFLFNBQVMsQ0FBQyxVQUFDLEtBQW1CO1FBQy9CLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELHlDQUFRLEdBQVI7UUFBQSxpQkEyQkM7UUExQkMsOENBQThDO1FBQzlDLElBQUksR0FBRyxHQUFVLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDO1FBQ2xELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxDQUFDO1lBQzdDLEdBQUcsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxzQkFBc0IsQ0FBQztRQUM3RCxDQUFDO1FBQ0QsSUFBSSxDQUFDLENBQUM7WUFDSixJQUFJLENBQUMsWUFBWSxDQUFDLGtCQUFr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Q0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQy9DLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQztJQUMvQixDQUFDO0lBbkZ1QjtRQUF2QixnQkFBUyxDQUFDLFdBQVcsQ0FBQztrQ0FBZSxpQkFBVTtnRUFBQztJQUNyQjtRQUEzQixnQkFBUyxDQUFDLGVBQWUsQ0FBQztrQ0FBbUIsaUJBQVU7b0VBQUM7SUFDaEM7UUFBeEIsZ0JBQVMsQ0FBQyxZQUFZLENBQUM7a0NBQWdCLGlCQUFVO2lFQUFDO0lBWHhDLHNCQUFzQjtRQU5sQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxvQkFBb0I7WUFDOUIsV0FBVyxFQUFFLGlDQUFpQztZQUM5QyxTQUFTLEVBQUUsQ0FBQyxpQ0FBaUMsQ0FBQztTQUMvQyxDQUFDO3lDQWV3Qiw0QkFBWTtZQUNULGtDQUFlO1lBQ3JCLDhCQUFTO1lBQ1osb0NBQWdCO09BakJ2QixzQkFBc0IsQ0E4RmxDO0lBQUQsNkJBQUM7Q0FBQSxBQTlGRCxJQThGQztBQTlGWSx3REFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgRWxlbWVudFJlZiwgQWZ0ZXJWaWV3SW5pdCwgVmlld0NoaWxkLCBBZnRlclZpZXdDaGVja2VkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJbWFnZVNlcnZpY2UgfSBmcm9tICcuLi9pbWFnZS5zZXJ2aWNlJztcbmltcG9ydCB7IFBhZ2VSb3V0ZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlci9wYWdlLXJvdXRlci1vdXRsZXQnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXIvc3JjL3JvdXRlcl9zdGF0ZSc7XG5pbXBvcnQgeyBVcmxTZWdtZW50IH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyL3NyYy91cmxfdHJlZSc7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyL3JvdXRlci1leHRlbnNpb25zJztcbmltcG9ydCB7IFBhbkdlc3R1cmVFdmVudERhdGEsIFRvdWNoR2VzdHVyZUV2ZW50RGF0YSwgUGluY2hHZXN0dXJlRXZlbnREYXRhIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9nZXN0dXJlcy9nZXN0dXJlcyc7XG5pbXBvcnQgeyBDYWxlbmRhclNlcnZpY2UgfSBmcm9tICcuLi9jYWxlbmRhci5zZXJ2aWNlJztcbmltcG9ydCB7IElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZS9zcmMvbWV0YWRhdGEvZGlyZWN0aXZlcyc7XG5pbXBvcnQgeyBHcmlkTGF5b3V0LCBJdGVtU3BlYyB9IGZyb20gXCJ1aS9sYXlvdXRzL2dyaWQtbGF5b3V0XCI7XG5pbXBvcnQgeyBMYWJlbCB9IGZyb20gXCJ1aS9sYWJlbFwiO1xuaW1wb3J0IHsgVmlld01vbnRoQ29tcG9uZW50IH0gZnJvbSAnLi4vdmlldy1tb250aC92aWV3LW1vbnRoLmNvbXBvbmVudCc7XG5pbXBvcnQgKiBhcyBzY3JlZW5TaG90IGZyb20gJ25hdGl2ZXNjcmlwdC1zY3JlZW5zaG90JztcbmltcG9ydCB7IEltYWdlU291cmNlIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy9pbWFnZS1zb3VyY2UvaW1hZ2Utc291cmNlJztcbmltcG9ydCB7IEltYWdlIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9pbWFnZSc7XG5pbXBvcnQgeyBBYnNvbHV0ZUxheW91dCB9IGZyb20gXCJ1aS9sYXlvdXRzL2Fic29sdXRlLWxheW91dFwiO1xuaW1wb3J0ICogYXMgcGxhdGZvcm1Nb2R1bGUgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvcGxhdGZvcm1cIjtcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJ1xuaW1wb3J0IHsgUG9pbnQgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL2ZyYW1lL2ZyYW1lJztcbmltcG9ydCB7IGFuZHJvaWQgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uJztcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnYXBwLWltYWdlLWNhbGVuZGFyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2ltYWdlLWNhbGVuZGFyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vaW1hZ2UtY2FsZW5kYXIuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBJbWFnZUNhbGVuZGFyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdDaGVja2VkIHtcbiAgcHJpdmF0ZSBzY3JlZW5XaWR0aFB4OiBhbnk7XG4gIHByaXZhdGUgc2NyZWVuSGVpZ2h0UHg6IGFueTtcbiAgcHJpdmF0ZSB0YXBfeTogbnVtYmVyO1xuICBwcml2YXRlIHRhcF94OiBudW1iZXI7XG4gIHByaXZhdGUgY2FsZW5kYXJfeDogbnVtYmVyID0gMDtcbiAgcHJpdmF0ZSBjYWxlbmRhcl95OiBudW1iZXIgPSAwO1xuICBwcml2YXRlIGNhbGVuZGFySW1hZ2VPblNjcmVlbjpQb2ludDtcbiAgcHJpdmF0ZSBncmlkU2NhbGU6IG51bWJlciA9IDE7XG4gIEBWaWV3Q2hpbGQoJ3ZpZXdNb250aCcpIHZpZXdNb250aFJlZjogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgnY2FsZW5kYXJJbWFnZScpIGNhbGVuZGFySW1hZ2VSZWY6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ2ltZ0Nyb3BwZWQnKSBpbWdDcm9wcGVkUmVmOiBFbGVtZW50UmVmO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgaW1hZ2VTZXJ2aWNlOiBJbWFnZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBjYWxlbmRhclNlcnZpY2U6IENhbGVuZGFyU2VydmljZSxcbiAgICBwcml2YXRlIHBhZ2VSb3V0ZTogUGFnZVJvdXRlLFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXJFeHRlbnNpb25zXG4gICkge1xuICAgIHRoaXMucGFnZVJvdXRlLmFjdGl2YXRlZFJvdXRlXG4gICAgICAuc3dpdGNoTWFwKChhY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUpID0+IGFjdGl2YXRlZFJvdXRlLnVybClcbiAgICAgIC5zdWJzY3JpYmUoKHBhcmFtOiBVcmxTZWdtZW50W10pID0+IHtcbiAgICAgIH0pO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgLy8gdGhpcy5pbWFnZSA9IHRoaXMuaW1hZ2VTZXJ2aWNlLmNyb3BwZWRGaWxlO1xuICAgIHZhciBpbWc6IEltYWdlID0gdGhpcy5pbWdDcm9wcGVkUmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgaWYgKHRoaXMuaW1hZ2VTZXJ2aWNlLmNyb3BwZWRGaWxlSW1hZ2VTb3VyY2UpIHtcbiAgICAgIGltZy5pbWFnZVNvdXJjZSA9IHRoaXMuaW1hZ2VTZXJ2aWNlLmNyb3BwZWRGaWxlSW1hZ2VTb3VyY2U7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pbWFnZVNlcnZpY2UuZ2V0TGFzdEltYWdlU291cmNlKClcbiAgICAgICAgLnRoZW4obGFzdEltYWdlU291cmNlID0+IGltZy5pbWFnZVNvdXJjZSA9IGxhc3RJbWFnZVNvdXJjZSlcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdObyBsYXN0IGZpbGUgZm91bmQuJyk7XG4gICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybCgnaW1hZ2Utc2VsZWN0Jyk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgdGhpcy5zY3JlZW5XaWR0aFB4ID0gcGxhdGZvcm1Nb2R1bGUuc2NyZWVuLm1haW5TY3JlZW4ud2lkdGhQaXhlbHM7XG4gICAgdGhpcy5zY3JlZW5IZWlnaHRQeCA9IHBsYXRmb3JtTW9kdWxlLnNjcmVlbi5tYWluU2NyZWVuLmhlaWdodFBpeGVscztcbiAgICAvLyB0aGlzLm1pbkxlZnQgPSBcblxuICAgIGxldCB2aWV3OiBBYnNvbHV0ZUxheW91dCA9IHRoaXMuY2FsZW5kYXJJbWFnZVJlZi5uYXRpdmVFbGVtZW50O1xuICAgIHZpZXcud2lkdGggPSB7IHZhbHVlOiB0aGlzLnNjcmVlbldpZHRoUHgsIHVuaXQ6IFwicHhcIiB9O1xuICAgIHZpZXcuaGVpZ2h0ID0geyB2YWx1ZTogdGhpcy5zY3JlZW5IZWlnaHRQeCwgdW5pdDogXCJweFwiIH07XG5cbiAgICAvLyBfLmZvckluKGFuZHJvaWQuY29udGV4dCwgKHZhbHVlLCBrZXkpID0+IHtcbiAgICAvLyAgIGNvbnNvbGUubG9nKCdjb250ZXh0OicsIGtleSwgdmFsdWUpO1xuICAgIC8vIH0pO1xuXG4gIH1cblxuICBuZ0FmdGVyVmlld0NoZWNrZWQoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmNhbGVuZGFySW1hZ2VPblNjcmVlbikge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGxldCB2aWV3OiBBYnNvbHV0ZUxheW91dCA9IHRoaXMuY2FsZW5kYXJJbWFnZVJlZi5uYXRpdmVFbGVtZW50O1xuICAgICAgICB0aGlzLmNhbGVuZGFySW1hZ2VPblNjcmVlbiA9IHZpZXcuZ2V0TG9jYXRpb25PblNjcmVlbigpOyAgICAgIFxuICAgICAgfSwgMTAwKTtcbiAgICB9XG4gIH1cbiAgXG4gIG9uQ2FsZW5kYXJQYW4oZXZlbnQ6IFBhbkdlc3R1cmVFdmVudERhdGEpIHtcbiAgICAvLyBvbmx5IHZlcnRpY2FsIHBhbm5pbmdcbiAgICBzd2l0Y2ggKGV2ZW50LnN0YXRlKSB7XG4gICAgICBjYXNlIDE6XG4gICAgICAgIC8vIHRoaXMudGFwX3ggPSB0aGlzLmNhbGVuZGFyX3g7XG4gICAgICAgIHRoaXMudGFwX3kgPSB0aGlzLmNhbGVuZGFyX3k7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAyOlxuICAgICAgICAvLyB0aGlzLmNhbGVuZGFyX3ggPSB0aGlzLnRhcF94ICsgZXZlbnQuZGVsdGFYO1xuICAgICAgICB0aGlzLmNhbGVuZGFyX3kgPSB0aGlzLmtlZXBJblJhbmdlKHRoaXMudGFwX3kgKyBldmVudC5kZWx0YVksIC10aGlzLmNhbGVuZGFySW1hZ2VPblNjcmVlbi55LCAwICk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUga2VlcEluUmFuZ2UodmFsOm51bWJlciwgbWluOm51bWJlciwgbWF4Om51bWJlcik6bnVtYmVyIHtcbiAgICBpZiAodmFsIDwgbWluKSByZXR1cm4gbWluO1xuICAgIGlmICh2YWwgPiBtYXgpIHJldHVybiBtYXg7XG4gICAgcmV0dXJuIHZhbDtcbiAgfVxuXG4gIGNhcHR1cmUoKSB7XG4gICAgbGV0IGlzOiBJbWFnZVNvdXJjZSA9IHNjcmVlblNob3QuZ2V0SW1hZ2UodGhpcy5jYWxlbmRhckltYWdlUmVmLm5hdGl2ZUVsZW1lbnQpO1xuICAgIHRoaXMuaW1hZ2VTZXJ2aWNlLnNhdmVDYWxlbmRhckltYWdlKGlzKTtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKCdpbWFnZS1yZXN1bHQnKTtcbiAgfVxuXG4gIG9uR3JpZFBpbmNoIChldmVudDogUGluY2hHZXN0dXJlRXZlbnREYXRhKSB7XG4gICAgY29uc29sZS5sb2coJ3BpbmNoJywgZXZlbnQuc2NhbGUsIGV2ZW50LnN0YXRlKTtcbiAgICB0aGlzLmdyaWRTY2FsZSA9IGV2ZW50LnNjYWxlO1xuICB9XG5cbn1cbiJdfQ==