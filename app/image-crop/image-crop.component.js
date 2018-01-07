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
            styleUrls: ['./image-crop.component.css']
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions,
            page_router_outlet_1.PageRoute,
            image_service_1.ImageService])
    ], ImageCropComponent);
    return ImageCropComponent;
}());
exports.ImageCropComponent = ImageCropComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2UtY3JvcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbWFnZS1jcm9wLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF3RTtBQUN4RSxzREFBOEQ7QUFDOUQscUZBQTJFO0FBRzNFLDBEQUE0RDtBQUM1RCxxQkFBcUI7QUFDckIsdUVBQXlELENBQUMsd0RBQXdEO0FBRWxILGdCQUFnQjtBQUNoQixrREFBZ0Q7QUFTaEQ7SUFNSSw0QkFDWSxNQUF3QixFQUN4QixTQUFvQixFQUNwQixZQUEwQjtRQUh0QyxpQkFVQztRQVRXLFdBQU0sR0FBTixNQUFNLENBQWtCO1FBQ3hCLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFDcEIsaUJBQVksR0FBWixZQUFZLENBQWM7UUFMOUIsaUJBQVksR0FBaUIsSUFBSSx3Q0FBWSxFQUFFLENBQUM7UUFPcEQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjO2FBQzVCLFNBQVMsQ0FBQyxVQUFDLGNBQThCLElBQUssT0FBQSxjQUFjLENBQUMsR0FBRyxFQUFsQixDQUFrQixDQUFDO2FBQ2pFLFNBQVMsQ0FBQyxVQUFDLEtBQW1CO1lBQzNCLEtBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNyQixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxxQ0FBUSxHQUFSO0lBQ0EsQ0FBQztJQUVELHNDQUFTLEdBQVQ7UUFBQSxpQkFlQztRQWRHLElBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUNyRCxJQUFNLE9BQU8sR0FBaUI7WUFDMUIsS0FBSyxFQUFFLGNBQWMsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLFdBQVc7WUFDbkQsTUFBTSxFQUFFLGNBQWMsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLFlBQVk7U0FDeEQsQ0FBQztRQUNGLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUM7YUFDdEMsSUFBSSxDQUFDLFVBQUEsTUFBTTtZQUNSLEtBQUksQ0FBQyxZQUFZLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNoRCxLQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ2hELENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxVQUFBLEtBQUs7WUFDUixPQUFPLENBQUMsS0FBSyxDQUFDLHNCQUFzQixDQUFDLENBQUM7WUFDdEMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDOUMsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBbEN3QjtRQUF4QixnQkFBUyxDQUFDLFlBQVksQ0FBQztrQ0FBYSxpQkFBVTswREFBQTtJQUZ0QyxrQkFBa0I7UUFOOUIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsZUFBZTtZQUN6QixXQUFXLEVBQUUsNkJBQTZCO1lBQzFDLFNBQVMsRUFBRSxDQUFDLDRCQUE0QixDQUFDO1NBQzVDLENBQUM7eUNBUXNCLHlCQUFnQjtZQUNiLDhCQUFTO1lBQ04sNEJBQVk7T0FUN0Isa0JBQWtCLENBc0M5QjtJQUFELHlCQUFDO0NBQUEsQUF0Q0QsSUFzQ0M7QUF0Q1ksZ0RBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJ1xuaW1wb3J0IHsgUGFnZVJvdXRlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyL3BhZ2Utcm91dGVyLW91dGxldCc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlci9zcmMvcm91dGVyX3N0YXRlJztcbmltcG9ydCB7IFVybFNlZ21lbnQgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXIvc3JjL3VybF90cmVlJztcbmltcG9ydCAqIGFzIHBsYXRmb3JtTW9kdWxlIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3BsYXRmb3JtXCI7XG4vLyAzcmQgcGFyeSBsaWJyYXJpZXNcbmltcG9ydCB7IEltYWdlQ3JvcHBlciB9IGZyb20gXCJuYXRpdmVzY3JpcHQtaW1hZ2Vjcm9wcGVyXCI7IC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9idGh1cmxvdy9uYXRpdmVzY3JpcHQtaW1hZ2Vjcm9wcGVyXG5pbXBvcnQgeyBPcHRpb25zQ29tbW9uLCBSZXN1bHQgfSBmcm9tICduYXRpdmVzY3JpcHQtaW1hZ2Vjcm9wcGVyL2ludGVyZmFjZXMnO1xuLy8gT3duIGxpYnJhcmllc1xuaW1wb3J0IHsgSW1hZ2VTZXJ2aWNlIH0gZnJvbSAnLi4vaW1hZ2Uuc2VydmljZSc7XG5pbXBvcnQgeyBJbWFnZVNvdXJjZSB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvaW1hZ2Utc291cmNlL2ltYWdlLXNvdXJjZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6ICducy1pbWFnZS1jcm9wJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vaW1hZ2UtY3JvcC5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vaW1hZ2UtY3JvcC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgSW1hZ2VDcm9wQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIEBWaWV3Q2hpbGQoJ3Njcm9sbFZpZXcnKSBzY3JvbGxWaWV3OiBFbGVtZW50UmVmXG5cbiAgICBwcml2YXRlIGltYWdlQ3JvcHBlcjogSW1hZ2VDcm9wcGVyID0gbmV3IEltYWdlQ3JvcHBlcigpO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXJFeHRlbnNpb25zLFxuICAgICAgICBwcml2YXRlIHBhZ2VSb3V0ZTogUGFnZVJvdXRlLFxuICAgICAgICBwcml2YXRlIGltYWdlU2VydmljZTogSW1hZ2VTZXJ2aWNlLFxuICAgICkgeyBcbiAgICAgICAgdGhpcy5wYWdlUm91dGUuYWN0aXZhdGVkUm91dGVcbiAgICAgICAgLnN3aXRjaE1hcCgoYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlKSA9PiBhY3RpdmF0ZWRSb3V0ZS51cmwpXG4gICAgICAgIC5zdWJzY3JpYmUoKHBhcmFtOiBVcmxTZWdtZW50W10pID0+IHtcbiAgICAgICAgICAgIHRoaXMuY3JvcEltYWdlKCk7XG4gICAgICAgIH0pOyAgIFxuICAgIH1cblxuICAgIG5nT25Jbml0KCkgeyBcbiAgICB9XG5cbiAgICBjcm9wSW1hZ2UoKXsgICAgICAgIFxuICAgICAgICBjb25zdCBpbWdTcmMgPSB0aGlzLmltYWdlU2VydmljZS5nZXRTZWxlY3RlZFNvdXJjZSgpO1xuICAgICAgICBjb25zdCBvcHRpb25zOk9wdGlvbnNDb21tb24gPSB7XG4gICAgICAgICAgICB3aWR0aDogcGxhdGZvcm1Nb2R1bGUuc2NyZWVuLm1haW5TY3JlZW4ud2lkdGhQaXhlbHMsXG4gICAgICAgICAgICBoZWlnaHQ6IHBsYXRmb3JtTW9kdWxlLnNjcmVlbi5tYWluU2NyZWVuLmhlaWdodFBpeGVsc1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmltYWdlQ3JvcHBlci5zaG93KGltZ1NyYywgb3B0aW9ucylcbiAgICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICAgIHRoaXMuaW1hZ2VTZXJ2aWNlLnNhdmVDcm9wcGVkRmlsZShyZXN1bHQuaW1hZ2UpO1xuICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybCgnaW1hZ2UtY2FsZW5kYXInKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0ltYWdlIENyb3BwZXIgRXJyb3I6Jyk7XG4gICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKCdpbWFnZS1zZWxlY3QnKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG59XG4iXX0=