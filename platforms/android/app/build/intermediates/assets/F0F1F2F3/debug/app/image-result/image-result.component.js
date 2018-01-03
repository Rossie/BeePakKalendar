"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var image_service_1 = require("../image.service");
var application_1 = require("tns-core-modules/application/application");
var Toast = require("nativescript-toast");
var nativescript_exit_1 = require("nativescript-exit");
var settings_service_1 = require("../settings.service");
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
        // let folderPath = android.context.getExternalStoragePublicDirectory(android.context.Environment.DIRECTORY_PICTURES);
        // console.dir(img.android);
        console.dir(application_1.android.context.getExternalStoragePublicDirectory());
        Toast.makeText('Kép elmentve.', 'long').show();
    };
    ImageResultComponent.prototype.share = function () {
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
            styleUrls: ['./image-result.component.css']
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions,
            image_service_1.ImageService,
            settings_service_1.SettingsService])
    ], ImageResultComponent);
    return ImageResultComponent;
}());
exports.ImageResultComponent = ImageResultComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2UtcmVzdWx0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImltYWdlLXJlc3VsdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBd0U7QUFDeEUsc0RBQThEO0FBRTlELGtEQUFnRDtBQUNoRCx3RUFBbUU7QUFFbkUsMENBQTRDO0FBQzVDLHVEQUF5QztBQUN6Qyx3REFBc0Q7QUFRdEQ7SUFNSSw4QkFDWSxNQUF3QixFQUN4QixZQUEwQixFQUMxQixlQUFnQztRQUZoQyxXQUFNLEdBQU4sTUFBTSxDQUFrQjtRQUN4QixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUMxQixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7SUFDeEMsQ0FBQztJQUVMLHVDQUFRLEdBQVI7UUFDSSxJQUFJLEdBQUcsR0FBUyxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQztRQUNoRCxHQUFHLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUV4RCxJQUFJLENBQUMsZUFBZSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3ZDLENBQUM7SUFFRCwyQ0FBWSxHQUFaO1FBQ0ksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUEsQ0FBQztZQUN6QyxxQkFBTyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzVFLEtBQUssQ0FBQyxRQUFRLENBQUMsc0JBQXNCLEVBQUUsTUFBTSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDMUQsQ0FBQztRQUNELElBQUk7WUFDQSxPQUFPLENBQUMsS0FBSyxDQUFDLHdDQUF3QyxDQUFDLENBQUE7SUFDL0QsQ0FBQztJQUVELHlDQUFVLEdBQVY7UUFDSSxzSEFBc0g7UUFDdEgsNEJBQTRCO1FBQzVCLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQU8sQ0FBQyxPQUFPLENBQUMsaUNBQWlDLEVBQUUsQ0FBQyxDQUFDO1FBQ2pFLEtBQUssQ0FBQyxRQUFRLENBQUMsZUFBZSxFQUFFLE1BQU0sQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ25ELENBQUM7SUFFRCxvQ0FBSyxHQUFMO0lBRUEsQ0FBQztJQUVELG1DQUFJLEdBQUo7UUFDSSx3QkFBSSxFQUFFLENBQUM7SUFDWCxDQUFDO0lBdkN1QjtRQUF2QixnQkFBUyxDQUFDLFdBQVcsQ0FBQztrQ0FBZSxpQkFBVTs4REFBQztJQUZ4QyxvQkFBb0I7UUFOaEMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsaUJBQWlCO1lBQzNCLFdBQVcsRUFBRSwrQkFBK0I7WUFDNUMsU0FBUyxFQUFFLENBQUMsOEJBQThCLENBQUM7U0FDOUMsQ0FBQzt5Q0FRc0IseUJBQWdCO1lBQ1YsNEJBQVk7WUFDVCxrQ0FBZTtPQVRuQyxvQkFBb0IsQ0EwQ2hDO0lBQUQsMkJBQUM7Q0FBQSxBQTFDRCxJQTBDQztBQTFDWSxvREFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInXG5pbXBvcnQgeyBJbWFnZSB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvaW1hZ2UvaW1hZ2UnO1xuaW1wb3J0IHsgSW1hZ2VTZXJ2aWNlIH0gZnJvbSAnLi4vaW1hZ2Uuc2VydmljZSc7XG5pbXBvcnQgeyBhbmRyb2lkIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvbi9hcHBsaWNhdGlvbic7XG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgKiBhcyBUb2FzdCBmcm9tICduYXRpdmVzY3JpcHQtdG9hc3QnO1xuaW1wb3J0IHsgZXhpdCB9IGZyb20gJ25hdGl2ZXNjcmlwdC1leGl0JztcbmltcG9ydCB7IFNldHRpbmdzU2VydmljZSB9IGZyb20gJy4uL3NldHRpbmdzLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiAnbnMtaW1hZ2UtcmVzdWx0JyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vaW1hZ2UtcmVzdWx0LmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9pbWFnZS1yZXN1bHQuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEltYWdlUmVzdWx0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIEBWaWV3Q2hpbGQoJ2ltZ1Jlc3VsdCcpIGltZ1Jlc3VsdFJlZjogRWxlbWVudFJlZjtcblxuICAgIHByaXZhdGUgaW1nUmVzdWx0OiBJbWFnZTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyRXh0ZW5zaW9ucyxcbiAgICAgICAgcHJpdmF0ZSBpbWFnZVNlcnZpY2U6IEltYWdlU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBzZXR0aW5nc1NlcnZpY2U6IFNldHRpbmdzU2VydmljZVxuICAgICkgeyB9XG5cbiAgICBuZ09uSW5pdCgpIHsgXG4gICAgICAgIGxldCBpbWc6SW1hZ2UgPSB0aGlzLmltZ1Jlc3VsdFJlZi5uYXRpdmVFbGVtZW50O1xuICAgICAgICBpbWcuaW1hZ2VTb3VyY2UgPSB0aGlzLmltYWdlU2VydmljZS5nZXRDYWxlbmRhclNvdXJjZSgpO1xuXG4gICAgICAgIHRoaXMuc2V0dGluZ3NTZXJ2aWNlLm5vdEZpcnN0UnVuKCk7XG4gICAgfVxuICAgIFxuICAgIHNldFdhbGxwYXBlcigpIHtcbiAgICAgICAgaWYgKHRoaXMuaW1nUmVzdWx0UmVmLm5hdGl2ZUVsZW1lbnQuYW5kcm9pZCl7XG4gICAgICAgICAgICBhbmRyb2lkLmNvbnRleHQuc2V0V2FsbHBhcGVyKHRoaXMuaW1hZ2VTZXJ2aWNlLmdldENhbGVuZGFyU291cmNlKCkuYW5kcm9pZCk7XG4gICAgICAgICAgICBUb2FzdC5tYWtlVGV4dCgnSMOhdHTDqXJrw6lwIGJlw6FsbMOtdHZhLicsICdsb25nJykuc2hvdygpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ3NldFdhbGxwYXBlcjogTm90IGltcGxlbWVudGVkIGZvciBJT1MuJylcbiAgICB9XG4gICAgXG4gICAgc2F2ZVRvRmlsZSgpIHtcbiAgICAgICAgLy8gbGV0IGZvbGRlclBhdGggPSBhbmRyb2lkLmNvbnRleHQuZ2V0RXh0ZXJuYWxTdG9yYWdlUHVibGljRGlyZWN0b3J5KGFuZHJvaWQuY29udGV4dC5FbnZpcm9ubWVudC5ESVJFQ1RPUllfUElDVFVSRVMpO1xuICAgICAgICAvLyBjb25zb2xlLmRpcihpbWcuYW5kcm9pZCk7XG4gICAgICAgIGNvbnNvbGUuZGlyKGFuZHJvaWQuY29udGV4dC5nZXRFeHRlcm5hbFN0b3JhZ2VQdWJsaWNEaXJlY3RvcnkoKSk7XG4gICAgICAgIFRvYXN0Lm1ha2VUZXh0KCdLw6lwIGVsbWVudHZlLicsICdsb25nJykuc2hvdygpOyAgICAgXG4gICAgfVxuXG4gICAgc2hhcmUoKSB7XG5cbiAgICB9XG5cbiAgICBleGl0KCkge1xuICAgICAgICBleGl0KCk7XG4gICAgfVxufVxuIl19