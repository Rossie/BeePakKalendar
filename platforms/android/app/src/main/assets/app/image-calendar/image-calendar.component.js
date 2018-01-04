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
        // set calendar to center
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2UtY2FsZW5kYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaW1hZ2UtY2FsZW5kYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBHO0FBQzFHLGtEQUFnRDtBQUNoRCxxRkFBMkU7QUFHM0UsbUZBQWlGO0FBRWpGLHdEQUFzRDtBQUt0RCxvREFBc0Q7QUFJdEQsMERBQTREO0FBVzVEO0lBY0UsZ0NBQ1UsWUFBMEIsRUFDMUIsZUFBZ0MsRUFDaEMsU0FBb0IsRUFDcEIsTUFBd0I7UUFIeEIsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDMUIsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFDcEIsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFqQjFCLGtCQUFhLEdBQVcsQ0FBQyxDQUFDO1FBSzFCLGVBQVUsR0FBVyxDQUFDLENBQUM7UUFDdkIsZUFBVSxHQUFXLENBQUMsQ0FBQztRQUV2QixjQUFTLEdBQVcsQ0FBQyxDQUFDO1FBVzVCLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYzthQUMxQixTQUFTLENBQUMsVUFBQyxjQUE4QixJQUFLLE9BQUEsY0FBYyxDQUFDLEdBQUcsRUFBbEIsQ0FBa0IsQ0FBQzthQUNqRSxTQUFTLENBQUMsVUFBQyxLQUFtQjtRQUMvQixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCx5Q0FBUSxHQUFSO1FBQUEsaUJBc0JDO1FBckJDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxDQUFDO1lBQzdDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxzQkFBc0IsQ0FBQztRQUMvRCxDQUFDO1FBQ0QsSUFBSSxDQUFDLENBQUM7WUFDSixJQUFJLENBQUMsWUFBWSxDQUFDLGtCQUFrQixFQUFFO2lCQUNuQyxJQUFJLENBQUMsVUFBQSxlQUFlLElB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T0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQWhGMkI7UUFBM0IsZ0JBQVMsQ0FBQyxlQUFlLENBQUM7a0NBQW1CLGlCQUFVO29FQUFDO0lBWjlDLHNCQUFzQjtRQU5sQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxvQkFBb0I7WUFDOUIsV0FBVyxFQUFFLGlDQUFpQztZQUM5QyxTQUFTLEVBQUUsQ0FBQyxpQ0FBaUMsQ0FBQztTQUMvQyxDQUFDO3lDQWdCd0IsNEJBQVk7WUFDVCxrQ0FBZTtZQUNyQiw4QkFBUztZQUNaLG9DQUFnQjtPQWxCdkIsc0JBQXNCLENBOEZsQztJQUFELDZCQUFDO0NBQUEsQUE5RkQsSUE4RkM7QUE5Rlksd0RBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEVsZW1lbnRSZWYsIEFmdGVyVmlld0luaXQsIFZpZXdDaGlsZCwgQWZ0ZXJWaWV3Q2hlY2tlZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSW1hZ2VTZXJ2aWNlIH0gZnJvbSAnLi4vaW1hZ2Uuc2VydmljZSc7XG5pbXBvcnQgeyBQYWdlUm91dGUgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXIvcGFnZS1yb3V0ZXItb3V0bGV0JztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyL3NyYy9yb3V0ZXJfc3RhdGUnO1xuaW1wb3J0IHsgVXJsU2VnbWVudCB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlci9zcmMvdXJsX3RyZWUnO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlci9yb3V0ZXItZXh0ZW5zaW9ucyc7XG5pbXBvcnQgeyBQYW5HZXN0dXJlRXZlbnREYXRhLCBUb3VjaEdlc3R1cmVFdmVudERhdGEsIFBpbmNoR2VzdHVyZUV2ZW50RGF0YSB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvZ2VzdHVyZXMvZ2VzdHVyZXMnO1xuaW1wb3J0IHsgQ2FsZW5kYXJTZXJ2aWNlIH0gZnJvbSAnLi4vY2FsZW5kYXIuc2VydmljZSc7XG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUvc3JjL21ldGFkYXRhL2RpcmVjdGl2ZXMnO1xuaW1wb3J0IHsgR3JpZExheW91dCwgSXRlbVNwZWMgfSBmcm9tIFwidWkvbGF5b3V0cy9ncmlkLWxheW91dFwiO1xuaW1wb3J0IHsgTGFiZWwgfSBmcm9tIFwidWkvbGFiZWxcIjtcbmltcG9ydCB7IFZpZXdNb250aENvbXBvbmVudCB9IGZyb20gJy4uL3ZpZXctbW9udGgvdmlldy1tb250aC5jb21wb25lbnQnO1xuaW1wb3J0ICogYXMgc2NyZWVuU2hvdCBmcm9tICduYXRpdmVzY3JpcHQtc2NyZWVuc2hvdCc7XG5pbXBvcnQgeyBJbWFnZVNvdXJjZSB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvaW1hZ2Utc291cmNlL2ltYWdlLXNvdXJjZSc7XG5pbXBvcnQgeyBJbWFnZSB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvaW1hZ2UnO1xuaW1wb3J0IHsgQWJzb2x1dGVMYXlvdXQgfSBmcm9tIFwidWkvbGF5b3V0cy9hYnNvbHV0ZS1sYXlvdXRcIjtcbmltcG9ydCAqIGFzIHBsYXRmb3JtTW9kdWxlIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3BsYXRmb3JtXCI7XG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCdcbmltcG9ydCB7IFBvaW50LCBWaWV3IH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9mcmFtZS9mcmFtZSc7XG5pbXBvcnQgeyBhbmRyb2lkIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvbic7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ2FwcC1pbWFnZS1jYWxlbmRhcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9pbWFnZS1jYWxlbmRhci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2ltYWdlLWNhbGVuZGFyLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgSW1hZ2VDYWxlbmRhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3Q2hlY2tlZCB7XG4gIHByaXZhdGUgY2FsZW5kYXJTY2FsZTogbnVtYmVyID0gMTtcbiAgcHJpdmF0ZSBzY3JlZW5XaWR0aFB4OiBhbnk7XG4gIHByaXZhdGUgc2NyZWVuSGVpZ2h0UHg6IGFueTtcbiAgcHJpdmF0ZSB0YXBfeTogbnVtYmVyO1xuICBwcml2YXRlIHRhcF94OiBudW1iZXI7XG4gIHByaXZhdGUgY2FsZW5kYXJfeDogbnVtYmVyID0gMDtcbiAgcHJpdmF0ZSBjYWxlbmRhcl95OiBudW1iZXIgPSAwO1xuICBwcml2YXRlIGNhbGVuZGFySW1hZ2VPblNjcmVlbjpQb2ludDtcbiAgcHJpdmF0ZSBncmlkU2NhbGU6IG51bWJlciA9IDE7XG4gIHByaXZhdGUgaW1hZ2VDcm9wcGVkOiBJbWFnZVNvdXJjZTtcblxuICBAVmlld0NoaWxkKCdjYWxlbmRhckltYWdlJykgY2FsZW5kYXJJbWFnZVJlZjogRWxlbWVudFJlZjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGltYWdlU2VydmljZTogSW1hZ2VTZXJ2aWNlLFxuICAgIHByaXZhdGUgY2FsZW5kYXJTZXJ2aWNlOiBDYWxlbmRhclNlcnZpY2UsXG4gICAgcHJpdmF0ZSBwYWdlUm91dGU6IFBhZ2VSb3V0ZSxcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyRXh0ZW5zaW9uc1xuICApIHtcbiAgICB0aGlzLnBhZ2VSb3V0ZS5hY3RpdmF0ZWRSb3V0ZVxuICAgICAgLnN3aXRjaE1hcCgoYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlKSA9PiBhY3RpdmF0ZWRSb3V0ZS51cmwpXG4gICAgICAuc3Vic2NyaWJlKChwYXJhbTogVXJsU2VnbWVudFtdKSA9PiB7XG4gICAgICB9KTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmICh0aGlzLmltYWdlU2VydmljZS5jcm9wcGVkRmlsZUltYWdlU291cmNlKSB7XG4gICAgICB0aGlzLmltYWdlQ3JvcHBlZCA9IHRoaXMuaW1hZ2VTZXJ2aWNlLmNyb3BwZWRGaWxlSW1hZ2VTb3VyY2U7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pbWFnZVNlcnZpY2UuZ2V0TGFzdEltYWdlU291cmNlKClcbiAgICAgICAgLnRoZW4obGFzdEltYWdlU291cmNlID0+IHRoaXMuaW1hZ2VDcm9wcGVkID0gbGFzdEltYWdlU291cmNlKVxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ05vIGxhc3QgZmlsZSBmb3VuZC4nKTtcbiAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKCdpbWFnZS1zZWxlY3QnKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICB0aGlzLnNjcmVlbldpZHRoUHggPSBwbGF0Zm9ybU1vZHVsZS5zY3JlZW4ubWFpblNjcmVlbi53aWR0aFBpeGVscztcbiAgICB0aGlzLnNjcmVlbkhlaWdodFB4ID0gcGxhdGZvcm1Nb2R1bGUuc2NyZWVuLm1haW5TY3JlZW4uaGVpZ2h0UGl4ZWxzO1xuXG4gICAgbGV0IHZpZXc6IEFic29sdXRlTGF5b3V0ID0gdGhpcy5jYWxlbmRhckltYWdlUmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgdmlldy53aWR0aCA9IHsgdmFsdWU6IHRoaXMuc2NyZWVuV2lkdGhQeCwgdW5pdDogXCJweFwiIH07XG4gICAgdmlldy5oZWlnaHQgPSB7IHZhbHVlOiB0aGlzLnNjcmVlbkhlaWdodFB4LCB1bml0OiBcInB4XCIgfTtcblxuICAgIC8vIHNldCBjYWxlbmRhciB0byBjZW50ZXJcbiAgICBcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3Q2hlY2tlZCgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuY2FsZW5kYXJJbWFnZU9uU2NyZWVuKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgbGV0IHZpZXc6IEFic29sdXRlTGF5b3V0ID0gdGhpcy5jYWxlbmRhckltYWdlUmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgIHRoaXMuY2FsZW5kYXJJbWFnZU9uU2NyZWVuID0gdmlldy5nZXRMb2NhdGlvbk9uU2NyZWVuKCk7ICAgICAgXG4gICAgICB9LCAxMDApO1xuICAgIH1cbiAgfVxuICBcbiAgb25DYWxlbmRhclBhbihldmVudDogUGFuR2VzdHVyZUV2ZW50RGF0YSkge1xuICAgIC8vIG9ubHkgdmVydGljYWwgcGFubmluZ1xuICAgIHN3aXRjaCAoZXZlbnQuc3RhdGUpIHtcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgLy8gdGhpcy50YXBfeCA9IHRoaXMuY2FsZW5kYXJfeDtcbiAgICAgICAgdGhpcy50YXBfeSA9IHRoaXMuY2FsZW5kYXJfeTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDI6XG4gICAgICAgIC8vIHRoaXMuY2FsZW5kYXJfeCA9IHRoaXMudGFwX3ggKyBldmVudC5kZWx0YVg7XG4gICAgICAgIHRoaXMuY2FsZW5kYXJfeSA9IHRoaXMua2VlcEluUmFuZ2UodGhpcy50YXBfeSArIGV2ZW50LmRlbHRhWSwgLXRoaXMuY2FsZW5kYXJJbWFnZU9uU2NyZWVuLnksIDAgKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBrZWVwSW5SYW5nZSh2YWw6bnVtYmVyLCBtaW46bnVtYmVyLCBtYXg6bnVtYmVyKTpudW1iZXIge1xuICAgIGlmICh2YWwgPCBtaW4pIHJldHVybiBtaW47XG4gICAgaWYgKHZhbCA+IG1heCkgcmV0dXJuIG1heDtcbiAgICByZXR1cm4gdmFsO1xuICB9XG5cbiAgY2FwdHVyZSgpIHtcbiAgICBsZXQgaXM6IEltYWdlU291cmNlID0gc2NyZWVuU2hvdC5nZXRJbWFnZSh0aGlzLmNhbGVuZGFySW1hZ2VSZWYubmF0aXZlRWxlbWVudCk7XG4gICAgdGhpcy5pbWFnZVNlcnZpY2Uuc2F2ZUNhbGVuZGFySW1hZ2UoaXMpO1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwoJ2ltYWdlLXJlc3VsdCcpO1xuICB9XG5cbiAgb25TbGlkZXJWYWx1ZUNoYW5nZShldmVudCl7XG4gICAgLy8gXy5mb3JJbihldmVudCwgKHZhbHVlLCBrZXkpID0+IGNvbnNvbGUubG9nKGtleSx2YWx1ZSkpO1xuICAgIHRoaXMuY2FsZW5kYXJTY2FsZSA9IGV2ZW50LnZhbHVlIC8gMTA7XG4gIH1cblxuICBvbklubmVyUGFuKGV2ZW50KSB7XG4gICAgY29uc29sZS5sb2coXCJvbklubmVyUGFuXCIsIGV2ZW50KTtcbiAgfVxuXG59XG4iXX0=