"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var page_router_outlet_1 = require("nativescript-angular/router/page-router-outlet");
var platformModule = require("tns-core-modules/platform");
// 3rd pary libraries
var nativescript_imagecropper_1 = require("nativescript-imagecropper"); // https://github.com/bthurlow/nativescript-imagecropper
// Own libraries
var image_service_1 = require("../image.service");
var ImageCropComponent = (function () {
    function ImageCropComponent(router, pageRoute, imageService) {
        var _this = this;
        this.router = router;
        this.pageRoute = pageRoute;
        this.imageService = imageService;
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
            _this.imageService.saveCroppedFile(result.image);
            _this.router.navigateByUrl('image-calendar');
        })
            .catch(function (error) {
            console.error('Image Cropper Error:');
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
            image_service_1.ImageService])
    ], ImageCropComponent);
    return ImageCropComponent;
}());
exports.ImageCropComponent = ImageCropComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2UtY3JvcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbWFnZS1jcm9wLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF3RTtBQUN4RSxzREFBOEQ7QUFDOUQscUZBQTJFO0FBRzNFLDBEQUE0RDtBQUM1RCxxQkFBcUI7QUFDckIsdUVBQXlELENBQUMsd0RBQXdEO0FBRWxILGdCQUFnQjtBQUNoQixrREFBZ0Q7QUFTaEQ7SUFNSSw0QkFDWSxNQUF3QixFQUN4QixTQUFvQixFQUNwQixZQUEwQjtRQUh0QyxpQkFVQztRQVRXLFdBQU0sR0FBTixNQUFNLENBQWtCO1FBQ3hCLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFDcEIsaUJBQVksR0FBWixZQUFZLENBQWM7UUFMOUIsaUJBQVksR0FBaUIsSUFBSSx3Q0FBWSxFQUFFLENBQUM7UUFPcEQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjO2FBQzVCLFNBQVMsQ0FBQyxVQUFDLGNBQThCLElBQUssT0FBQSxjQUFjLENBQUMsR0FBRyxFQUFsQixDQUFrQixDQUFDO2FBQ2pFLFNBQVMsQ0FBQyxVQUFDLEtBQW1CO1lBQzNCLEtBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNyQixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxxQ0FBUSxHQUFSO0lBQ0EsQ0FBQztJQUVELHNDQUFTLEdBQVQ7UUFBQSxpQkFlQztRQWRHLElBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUNyRCxJQUFNLE9BQU8sR0FBaUI7WUFDMUIsS0FBSyxFQUFFLGNBQWMsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLFdBQVc7WUFDbkQsTUFBTSxFQUFFLGNBQWMsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLFlBQVk7U0FDeEQsQ0FBQztRQUNGLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUM7YUFDdEMsSUFBSSxDQUFDLFVBQUEsTUFBTTtZQUNSLEtBQUksQ0FBQyxZQUFZLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNoRCxLQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ2hELENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxVQUFBLEtBQUs7WUFDUixPQUFPLENBQUMsS0FBSyxDQUFDLHNCQUFzQixDQUFDLENBQUM7WUFDdEMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDOUMsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBbEN3QjtRQUF4QixnQkFBUyxDQUFDLFlBQVksQ0FBQztrQ0FBYSxpQkFBVTswREFBQTtJQUZ0QyxrQkFBa0I7UUFOOUIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsZUFBZTtZQUN6QixXQUFXLEVBQUUsNkJBQTZCO1lBQzFDLFNBQVMsRUFBRSxDQUFDLDZCQUE2QixDQUFDO1NBQzdDLENBQUM7eUNBUXNCLHlCQUFnQjtZQUNiLDhCQUFTO1lBQ04sNEJBQVk7T0FUN0Isa0JBQWtCLENBc0M5QjtJQUFELHlCQUFDO0NBQUEsQUF0Q0QsSUFzQ0M7QUF0Q1ksZ0RBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJ1xuaW1wb3J0IHsgUGFnZVJvdXRlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyL3BhZ2Utcm91dGVyLW91dGxldCc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlci9zcmMvcm91dGVyX3N0YXRlJztcbmltcG9ydCB7IFVybFNlZ21lbnQgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXIvc3JjL3VybF90cmVlJztcbmltcG9ydCAqIGFzIHBsYXRmb3JtTW9kdWxlIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3BsYXRmb3JtXCI7XG4vLyAzcmQgcGFyeSBsaWJyYXJpZXNcbmltcG9ydCB7IEltYWdlQ3JvcHBlciB9IGZyb20gXCJuYXRpdmVzY3JpcHQtaW1hZ2Vjcm9wcGVyXCI7IC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9idGh1cmxvdy9uYXRpdmVzY3JpcHQtaW1hZ2Vjcm9wcGVyXG5pbXBvcnQgeyBPcHRpb25zQ29tbW9uLCBSZXN1bHQgfSBmcm9tICduYXRpdmVzY3JpcHQtaW1hZ2Vjcm9wcGVyL2ludGVyZmFjZXMnO1xuLy8gT3duIGxpYnJhcmllc1xuaW1wb3J0IHsgSW1hZ2VTZXJ2aWNlIH0gZnJvbSAnLi4vaW1hZ2Uuc2VydmljZSc7XG5pbXBvcnQgeyBJbWFnZVNvdXJjZSB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvaW1hZ2Utc291cmNlL2ltYWdlLXNvdXJjZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6ICducy1pbWFnZS1jcm9wJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vaW1hZ2UtY3JvcC5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vaW1hZ2UtY3JvcC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEltYWdlQ3JvcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBAVmlld0NoaWxkKCdzY3JvbGxWaWV3Jykgc2Nyb2xsVmlldzogRWxlbWVudFJlZlxuXG4gICAgcHJpdmF0ZSBpbWFnZUNyb3BwZXI6IEltYWdlQ3JvcHBlciA9IG5ldyBJbWFnZUNyb3BwZXIoKTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyRXh0ZW5zaW9ucyxcbiAgICAgICAgcHJpdmF0ZSBwYWdlUm91dGU6IFBhZ2VSb3V0ZSxcbiAgICAgICAgcHJpdmF0ZSBpbWFnZVNlcnZpY2U6IEltYWdlU2VydmljZSxcbiAgICApIHsgXG4gICAgICAgIHRoaXMucGFnZVJvdXRlLmFjdGl2YXRlZFJvdXRlXG4gICAgICAgIC5zd2l0Y2hNYXAoKGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSkgPT4gYWN0aXZhdGVkUm91dGUudXJsKVxuICAgICAgICAuc3Vic2NyaWJlKChwYXJhbTogVXJsU2VnbWVudFtdKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNyb3BJbWFnZSgpO1xuICAgICAgICB9KTsgICBcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHsgXG4gICAgfVxuXG4gICAgY3JvcEltYWdlKCl7ICAgICAgICBcbiAgICAgICAgY29uc3QgaW1nU3JjID0gdGhpcy5pbWFnZVNlcnZpY2UuZ2V0U2VsZWN0ZWRTb3VyY2UoKTtcbiAgICAgICAgY29uc3Qgb3B0aW9uczpPcHRpb25zQ29tbW9uID0ge1xuICAgICAgICAgICAgd2lkdGg6IHBsYXRmb3JtTW9kdWxlLnNjcmVlbi5tYWluU2NyZWVuLndpZHRoUGl4ZWxzLFxuICAgICAgICAgICAgaGVpZ2h0OiBwbGF0Zm9ybU1vZHVsZS5zY3JlZW4ubWFpblNjcmVlbi5oZWlnaHRQaXhlbHNcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5pbWFnZUNyb3BwZXIuc2hvdyhpbWdTcmMsIG9wdGlvbnMpXG4gICAgICAgIC50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgICAgICB0aGlzLmltYWdlU2VydmljZS5zYXZlQ3JvcHBlZEZpbGUocmVzdWx0LmltYWdlKTtcbiAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwoJ2ltYWdlLWNhbGVuZGFyJyk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdJbWFnZSBDcm9wcGVyIEVycm9yOicpO1xuICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybCgnaW1hZ2Utc2VsZWN0Jyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxufVxuIl19