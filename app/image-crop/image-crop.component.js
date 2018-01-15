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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2UtY3JvcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbWFnZS1jcm9wLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF3RTtBQUN4RSxzREFBOEQ7QUFDOUQscUZBQTJFO0FBRzNFLDBEQUE0RDtBQUM1RCxxQkFBcUI7QUFDckIsdUVBQXlELENBQUMsd0RBQXdEO0FBRWxILGdCQUFnQjtBQUNoQiwyREFBeUQ7QUFFekQsaUVBQStFO0FBQy9FLCtCQUFpQztBQUNqQyxpRUFBK0Q7QUFRL0Q7SUFNSSw0QkFDWSxNQUF3QixFQUN4QixTQUFvQixFQUNwQixZQUEwQixFQUMxQixRQUF5QixFQUN6QixlQUFnQztRQUw1QyxpQkFZQztRQVhXLFdBQU0sR0FBTixNQUFNLENBQWtCO1FBQ3hCLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFDcEIsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDMUIsYUFBUSxHQUFSLFFBQVEsQ0FBaUI7UUFDekIsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBUHBDLGlCQUFZLEdBQWlCLElBQUksd0NBQVksRUFBRSxDQUFDO1FBU3BELElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYzthQUM1QixTQUFTLENBQUMsVUFBQyxjQUE4QixJQUFLLE9BQUEsY0FBYyxDQUFDLEdBQUcsRUFBbEIsQ0FBa0IsQ0FBQzthQUNqRSxTQUFTLENBQUMsVUFBQyxLQUFtQjtZQUMzQixLQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDckIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQscUNBQVEsR0FBUjtJQUNBLENBQUM7SUFFRCxzQ0FBUyxHQUFUO1FBQUEsaUJBcUJDO1FBcEJHLElBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUNyRCxJQUFNLE9BQU8sR0FBaUI7WUFDMUIsS0FBSyxFQUFFLGNBQWMsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLFdBQVc7WUFDbkQsTUFBTSxFQUFFLGNBQWMsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLFlBQVk7U0FDeEQsQ0FBQztRQUNGLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUM7YUFDdEMsSUFBSSxDQUFDLFVBQUEsTUFBTTtZQUNSLElBQUksSUFBSSxHQUFHLEtBQUksQ0FBQyxZQUFZLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUMzRCxJQUFJLGFBQWEsR0FBa0M7Z0JBQy9DLFNBQVMsRUFBRSxJQUFJO2dCQUNmLFNBQVMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxJQUFJLEVBQUU7YUFDN0IsQ0FBQztZQUNGLEtBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQ3RDLEtBQUksQ0FBQyxlQUFlLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQ25ELEtBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDaEQsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLFVBQUEsS0FBSztZQUNSLE9BQU8sQ0FBQyxLQUFLLENBQUMsc0JBQXNCLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQzdELEtBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQzlDLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQTFDd0I7UUFBeEIsZ0JBQVMsQ0FBQyxZQUFZLENBQUM7a0NBQWEsaUJBQVU7MERBQUE7SUFGdEMsa0JBQWtCO1FBTjlCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGVBQWU7WUFDekIsV0FBVyxFQUFFLDZCQUE2QjtZQUMxQyxTQUFTLEVBQUUsQ0FBQyw2QkFBNkIsQ0FBQztTQUM3QyxDQUFDO3lDQVFzQix5QkFBZ0I7WUFDYiw4QkFBUztZQUNOLDRCQUFZO1lBQ2hCLGtDQUFlO1lBQ1Isa0NBQWU7T0FYbkMsa0JBQWtCLENBOEM5QjtJQUFELHlCQUFDO0NBQUEsQUE5Q0QsSUE4Q0M7QUE5Q1ksZ0RBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJ1xuaW1wb3J0IHsgUGFnZVJvdXRlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyL3BhZ2Utcm91dGVyLW91dGxldCc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlci9zcmMvcm91dGVyX3N0YXRlJztcbmltcG9ydCB7IFVybFNlZ21lbnQgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXIvc3JjL3VybF90cmVlJztcbmltcG9ydCAqIGFzIHBsYXRmb3JtTW9kdWxlIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3BsYXRmb3JtXCI7XG4vLyAzcmQgcGFyeSBsaWJyYXJpZXNcbmltcG9ydCB7IEltYWdlQ3JvcHBlciB9IGZyb20gXCJuYXRpdmVzY3JpcHQtaW1hZ2Vjcm9wcGVyXCI7IC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9idGh1cmxvdy9uYXRpdmVzY3JpcHQtaW1hZ2Vjcm9wcGVyXG5pbXBvcnQgeyBPcHRpb25zQ29tbW9uLCBSZXN1bHQgfSBmcm9tICduYXRpdmVzY3JpcHQtaW1hZ2Vjcm9wcGVyL2ludGVyZmFjZXMnO1xuLy8gT3duIGxpYnJhcmllc1xuaW1wb3J0IHsgSW1hZ2VTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvaW1hZ2Uuc2VydmljZSc7XG5pbXBvcnQgeyBJbWFnZVNvdXJjZSB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvaW1hZ2Utc291cmNlL2ltYWdlLXNvdXJjZSc7XG5pbXBvcnQgeyBJSW1hZ2VDYWxlbmRhciwgQ2FsZW5kYXJTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvY2FsZW5kYXIuc2VydmljZSc7XG5pbXBvcnQgKiBhcyBtb21lbnQgZnJvbSAnbW9tZW50JztcbmltcG9ydCB7IFNldHRpbmdzU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL3NldHRpbmdzLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiAnbnMtaW1hZ2UtY3JvcCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2ltYWdlLWNyb3AuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL2ltYWdlLWNyb3AuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBJbWFnZUNyb3BDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgQFZpZXdDaGlsZCgnc2Nyb2xsVmlldycpIHNjcm9sbFZpZXc6IEVsZW1lbnRSZWZcblxuICAgIHByaXZhdGUgaW1hZ2VDcm9wcGVyOiBJbWFnZUNyb3BwZXIgPSBuZXcgSW1hZ2VDcm9wcGVyKCk7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlckV4dGVuc2lvbnMsXG4gICAgICAgIHByaXZhdGUgcGFnZVJvdXRlOiBQYWdlUm91dGUsXG4gICAgICAgIHByaXZhdGUgaW1hZ2VTZXJ2aWNlOiBJbWFnZVNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgc2V0dGluZ3M6IFNldHRpbmdzU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBjYWxlbmRhclNlcnZpY2U6IENhbGVuZGFyU2VydmljZSxcbiAgICApIHsgXG4gICAgICAgIHRoaXMucGFnZVJvdXRlLmFjdGl2YXRlZFJvdXRlXG4gICAgICAgIC5zd2l0Y2hNYXAoKGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSkgPT4gYWN0aXZhdGVkUm91dGUudXJsKVxuICAgICAgICAuc3Vic2NyaWJlKChwYXJhbTogVXJsU2VnbWVudFtdKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNyb3BJbWFnZSgpO1xuICAgICAgICB9KTsgICBcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHsgXG4gICAgfVxuXG4gICAgY3JvcEltYWdlKCl7ICAgICAgICBcbiAgICAgICAgY29uc3QgaW1nU3JjID0gdGhpcy5pbWFnZVNlcnZpY2UuZ2V0U2VsZWN0ZWRTb3VyY2UoKTtcbiAgICAgICAgY29uc3Qgb3B0aW9uczpPcHRpb25zQ29tbW9uID0ge1xuICAgICAgICAgICAgd2lkdGg6IHBsYXRmb3JtTW9kdWxlLnNjcmVlbi5tYWluU2NyZWVuLndpZHRoUGl4ZWxzLFxuICAgICAgICAgICAgaGVpZ2h0OiBwbGF0Zm9ybU1vZHVsZS5zY3JlZW4ubWFpblNjcmVlbi5oZWlnaHRQaXhlbHNcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5pbWFnZUNyb3BwZXIuc2hvdyhpbWdTcmMsIG9wdGlvbnMpXG4gICAgICAgIC50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgICAgICBsZXQgZmlsZSA9IHRoaXMuaW1hZ2VTZXJ2aWNlLnNhdmVDcm9wcGVkRmlsZShyZXN1bHQuaW1hZ2UpO1xuICAgICAgICAgICAgbGV0IGltYWdlQ2FsZW5kYXI6SUltYWdlQ2FsZW5kYXIgPSA8SUltYWdlQ2FsZW5kYXI+e1xuICAgICAgICAgICAgICAgIGltYWdlRmlsZTogZmlsZSxcbiAgICAgICAgICAgICAgICBjcmVhdGVkT246IG1vbWVudCgpLnVuaXgoKVxuICAgICAgICAgICAgfTsgIFxuICAgICAgICAgICAgdGhpcy5zZXR0aW5ncy5hZGRJbWFnZShpbWFnZUNhbGVuZGFyKTtcbiAgICAgICAgICAgIHRoaXMuY2FsZW5kYXJTZXJ2aWNlLnNlbGVjdENhbGVuZGFyKGltYWdlQ2FsZW5kYXIpO1xuICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybCgnaW1hZ2UtY2FsZW5kYXInKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0ltYWdlIENyb3BwZXIgRXJyb3I6JywgSlNPTi5zdHJpbmdpZnkoZXJyb3IpKTtcbiAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwoJ2ltYWdlLXNlbGVjdCcpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbn1cbiJdfQ==