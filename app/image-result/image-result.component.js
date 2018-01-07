"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var image_service_1 = require("../image.service");
var application_1 = require("tns-core-modules/application/application");
var Toast = require("nativescript-toast");
var nativescript_exit_1 = require("nativescript-exit");
var settings_service_1 = require("../settings.service");
var SocialShare = require("nativescript-social-share");
var ImageResultComponent = (function () {
    function ImageResultComponent(router, imageService, settingsService) {
        this.router = router;
        this.imageService = imageService;
        this.settingsService = settingsService;
    }
    ImageResultComponent.prototype.ngOnInit = function () {
        var img = this.imgResultRef.nativeElement;
        img.imageSource = this.imageService.getCalendarSource();
        this.settingsService.notFirstRun();
    };
    ImageResultComponent.prototype.setWallpaper = function () {
        if (this.imgResultRef.nativeElement.android) {
            application_1.android.context.setWallpaper(this.imageService.getCalendarSource().android);
            Toast.makeText('Háttérkép beállítva.', 'long').show();
        }
        else
            console.error('setWallpaper: Not implemented for IOS.');
    };
    ImageResultComponent.prototype.saveToFile = function () {
        var file = (new Date()).getTime() + '.png';
        file = this.imageService.getImagePath(file);
        this.imageService.getCalendarSource().saveToFile(file, "png");
        Toast.makeText('Kép elmentve.', 'long').show();
    };
    ImageResultComponent.prototype.share = function () {
        SocialShare.shareImage(this.imageService.getCalendarSource());
    };
    ImageResultComponent.prototype.exit = function () {
        nativescript_exit_1.exit();
    };
    __decorate([
        core_1.ViewChild('imgResult'),
        __metadata("design:type", core_1.ElementRef)
    ], ImageResultComponent.prototype, "imgResultRef", void 0);
    ImageResultComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'ns-image-result',
            templateUrl: './image-result.component.html',
            styleUrls: ['./image-result.component.scss']
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions,
            image_service_1.ImageService,
            settings_service_1.SettingsService])
    ], ImageResultComponent);
    return ImageResultComponent;
}());
exports.ImageResultComponent = ImageResultComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2UtcmVzdWx0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImltYWdlLXJlc3VsdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBd0U7QUFDeEUsc0RBQThEO0FBRTlELGtEQUFnRDtBQUNoRCx3RUFBbUU7QUFFbkUsMENBQTRDO0FBQzVDLHVEQUF5QztBQUN6Qyx3REFBc0Q7QUFDdEQsdURBQXlEO0FBUXpEO0lBTUksOEJBQ1ksTUFBd0IsRUFDeEIsWUFBMEIsRUFDMUIsZUFBZ0M7UUFGaEMsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFDeEIsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDMUIsb0JBQWUsR0FBZixlQUFlLENBQWlCO0lBQ3hDLENBQUM7SUFFTCx1Q0FBUSxHQUFSO1FBQ0ksSUFBSSxHQUFHLEdBQVMsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUM7UUFDaEQsR0FBRyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFFeEQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN2QyxDQUFDO0lBRUQsMkNBQVksR0FBWjtRQUNJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFBLENBQUM7WUFDekMscUJBQU8sQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUM1RSxLQUFLLENBQUMsUUFBUSxDQUFDLHNCQUFzQixFQUFFLE1BQU0sQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQzFELENBQUM7UUFDRCxJQUFJO1lBQ0EsT0FBTyxDQUFDLEtBQUssQ0FBQyx3Q0FBd0MsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFFRCx5Q0FBVSxHQUFWO1FBQ0ksSUFBSSxJQUFJLEdBQUcsQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLENBQUMsT0FBTyxFQUFFLEdBQUcsTUFBTSxDQUFDO1FBQzNDLElBQUksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMsWUFBWSxDQUFDLGlCQUFpQixFQUFFLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztRQUM5RCxLQUFLLENBQUMsUUFBUSxDQUFDLGVBQWUsRUFBRSxNQUFNLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNuRCxDQUFDO0lBRUQsb0NBQUssR0FBTDtRQUNJLFdBQVcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLENBQUM7SUFDbEUsQ0FBQztJQUVELG1DQUFJLEdBQUo7UUFDSSx3QkFBSSxFQUFFLENBQUM7SUFDWCxDQUFDO0lBdkN1QjtRQUF2QixnQkFBUyxDQUFDLFdBQVcsQ0FBQztrQ0FBZSxpQkFBVTs4REFBQztJQUZ4QyxvQkFBb0I7UUFOaEMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsaUJBQWlCO1lBQzNCLFdBQVcsRUFBRSwrQkFBK0I7WUFDNUMsU0FBUyxFQUFFLENBQUMsK0JBQStCLENBQUM7U0FDL0MsQ0FBQzt5Q0FRc0IseUJBQWdCO1lBQ1YsNEJBQVk7WUFDVCxrQ0FBZTtPQVRuQyxvQkFBb0IsQ0EwQ2hDO0lBQUQsMkJBQUM7Q0FBQSxBQTFDRCxJQTBDQztBQTFDWSxvREFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInXG5pbXBvcnQgeyBJbWFnZSB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvaW1hZ2UvaW1hZ2UnO1xuaW1wb3J0IHsgSW1hZ2VTZXJ2aWNlIH0gZnJvbSAnLi4vaW1hZ2Uuc2VydmljZSc7XG5pbXBvcnQgeyBhbmRyb2lkIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvbi9hcHBsaWNhdGlvbic7XG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgKiBhcyBUb2FzdCBmcm9tICduYXRpdmVzY3JpcHQtdG9hc3QnO1xuaW1wb3J0IHsgZXhpdCB9IGZyb20gJ25hdGl2ZXNjcmlwdC1leGl0JztcbmltcG9ydCB7IFNldHRpbmdzU2VydmljZSB9IGZyb20gJy4uL3NldHRpbmdzLnNlcnZpY2UnO1xuaW1wb3J0ICogYXMgU29jaWFsU2hhcmUgZnJvbSBcIm5hdGl2ZXNjcmlwdC1zb2NpYWwtc2hhcmVcIjtcblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogJ25zLWltYWdlLXJlc3VsdCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2ltYWdlLXJlc3VsdC5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vaW1hZ2UtcmVzdWx0LmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgSW1hZ2VSZXN1bHRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgQFZpZXdDaGlsZCgnaW1nUmVzdWx0JykgaW1nUmVzdWx0UmVmOiBFbGVtZW50UmVmO1xuXG4gICAgcHJpdmF0ZSBpbWdSZXN1bHQ6IEltYWdlO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXJFeHRlbnNpb25zLFxuICAgICAgICBwcml2YXRlIGltYWdlU2VydmljZTogSW1hZ2VTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIHNldHRpbmdzU2VydmljZTogU2V0dGluZ3NTZXJ2aWNlXG4gICAgKSB7IH1cblxuICAgIG5nT25Jbml0KCkgeyBcbiAgICAgICAgbGV0IGltZzpJbWFnZSA9IHRoaXMuaW1nUmVzdWx0UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgIGltZy5pbWFnZVNvdXJjZSA9IHRoaXMuaW1hZ2VTZXJ2aWNlLmdldENhbGVuZGFyU291cmNlKCk7XG5cbiAgICAgICAgdGhpcy5zZXR0aW5nc1NlcnZpY2Uubm90Rmlyc3RSdW4oKTtcbiAgICB9XG4gICAgXG4gICAgc2V0V2FsbHBhcGVyKCkge1xuICAgICAgICBpZiAodGhpcy5pbWdSZXN1bHRSZWYubmF0aXZlRWxlbWVudC5hbmRyb2lkKXtcbiAgICAgICAgICAgIGFuZHJvaWQuY29udGV4dC5zZXRXYWxscGFwZXIodGhpcy5pbWFnZVNlcnZpY2UuZ2V0Q2FsZW5kYXJTb3VyY2UoKS5hbmRyb2lkKTtcbiAgICAgICAgICAgIFRvYXN0Lm1ha2VUZXh0KCdIw6F0dMOpcmvDqXAgYmXDoWxsw610dmEuJywgJ2xvbmcnKS5zaG93KCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignc2V0V2FsbHBhcGVyOiBOb3QgaW1wbGVtZW50ZWQgZm9yIElPUy4nKTtcbiAgICB9XG4gICAgXG4gICAgc2F2ZVRvRmlsZSgpIHtcbiAgICAgICAgbGV0IGZpbGUgPSAobmV3IERhdGUoKSkuZ2V0VGltZSgpICsgJy5wbmcnO1xuICAgICAgICBmaWxlID0gdGhpcy5pbWFnZVNlcnZpY2UuZ2V0SW1hZ2VQYXRoKGZpbGUpO1xuICAgICAgICB0aGlzLmltYWdlU2VydmljZS5nZXRDYWxlbmRhclNvdXJjZSgpLnNhdmVUb0ZpbGUoZmlsZSwgXCJwbmdcIik7XG4gICAgICAgIFRvYXN0Lm1ha2VUZXh0KCdLw6lwIGVsbWVudHZlLicsICdsb25nJykuc2hvdygpO1xuICAgIH1cblxuICAgIHNoYXJlKCkge1xuICAgICAgICBTb2NpYWxTaGFyZS5zaGFyZUltYWdlKHRoaXMuaW1hZ2VTZXJ2aWNlLmdldENhbGVuZGFyU291cmNlKCkpO1xuICAgIH1cblxuICAgIGV4aXQoKSB7XG4gICAgICAgIGV4aXQoKTtcbiAgICB9XG59XG4iXX0=