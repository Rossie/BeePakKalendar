"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var image_service_1 = require("../services/image.service");
var application_1 = require("tns-core-modules/application/application");
var Toast = require("nativescript-toast");
var nativescript_exit_1 = require("nativescript-exit");
var settings_service_1 = require("../services/settings.service");
var SocialShare = require("nativescript-social-share");
var calendar_service_1 = require("../services/calendar.service");
var ImageResultComponent = (function () {
    function ImageResultComponent(router, imageService, settingsService, calendarService) {
        this.router = router;
        this.imageService = imageService;
        this.settingsService = settingsService;
        this.calendarService = calendarService;
    }
    ImageResultComponent.prototype.ngOnInit = function () {
        // let img:Image = this.imgResultRef.nativeElement;
        this.imgResult = this.imageService.calendarImageSource;
        // img.imageSource = this.imageService.getImageSourceFromFile(this.calendarService.imageCalendar.imageFile);
        this.settingsService.notFirstRun();
    };
    ImageResultComponent.prototype.setWallpaper = function () {
        if (this.imageService.calendarImageSource.android) {
            application_1.android.context.setWallpaper(this.imageService.calendarImageSource.android);
            Toast.makeText('Háttérkép beállítva.', 'long').show();
        }
        else
            console.error('setWallpaper: Not implemented for IOS.');
    };
    ImageResultComponent.prototype.saveToFile = function () {
        var file = (new Date()).getTime() + '.png';
        file = this.imageService.getImagePath(file);
        this.imageService.calendarImageSource.saveToFile(file, "png");
        Toast.makeText('Kép elmentve.', 'long').show();
    };
    ImageResultComponent.prototype.share = function () {
        SocialShare.shareImage(this.imageService.calendarImageSource);
    };
    ImageResultComponent.prototype.exit = function () {
        nativescript_exit_1.exit();
    };
    ImageResultComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'ns-image-result',
            templateUrl: './image-result.component.html',
            styleUrls: ['./image-result.component.scss']
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions,
            image_service_1.ImageService,
            settings_service_1.SettingsService,
            calendar_service_1.CalendarService])
    ], ImageResultComponent);
    return ImageResultComponent;
}());
exports.ImageResultComponent = ImageResultComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2UtcmVzdWx0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImltYWdlLXJlc3VsdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBd0U7QUFDeEUsc0RBQThEO0FBRTlELDJEQUF5RDtBQUN6RCx3RUFBbUU7QUFFbkUsMENBQTRDO0FBQzVDLHVEQUF5QztBQUN6QyxpRUFBK0Q7QUFDL0QsdURBQXlEO0FBQ3pELGlFQUErRDtBQVMvRDtJQUdJLDhCQUNZLE1BQXdCLEVBQ3hCLFlBQTBCLEVBQzFCLGVBQWdDLEVBQ2hDLGVBQWdDO1FBSGhDLFdBQU0sR0FBTixNQUFNLENBQWtCO1FBQ3hCLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzFCLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7SUFDeEMsQ0FBQztJQUVMLHVDQUFRLEdBQVI7UUFDSSxtREFBbUQ7UUFDbkQsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLG1CQUFtQixDQUFDO1FBQ3ZELDRHQUE0RztRQUU1RyxJQUFJLENBQUMsZUFBZSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3ZDLENBQUM7SUFFRCwyQ0FBWSxHQUFaO1FBQ0ksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLENBQUMsQ0FBQSxDQUFDO1lBQy9DLHFCQUFPLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLG1CQUFtQixDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzVFLEtBQUssQ0FBQyxRQUFRLENBQUMsc0JBQXNCLEVBQUUsTUFBTSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDMUQsQ0FBQztRQUNELElBQUk7WUFDQSxPQUFPLENBQUMsS0FBSyxDQUFDLHdDQUF3QyxDQUFDLENBQUM7SUFDaEUsQ0FBQztJQUVELHlDQUFVLEdBQVY7UUFDSSxJQUFJLElBQUksR0FBRyxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQyxPQUFPLEVBQUUsR0FBRyxNQUFNLENBQUM7UUFDM0MsSUFBSSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzVDLElBQUksQ0FBQyxZQUFZLENBQUMsbUJBQW1CLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztRQUM5RCxLQUFLLENBQUMsUUFBUSxDQUFDLGVBQWUsRUFBRSxNQUFNLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNuRCxDQUFDO0lBRUQsb0NBQUssR0FBTDtRQUNJLFdBQVcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0lBQ2xFLENBQUM7SUFFRCxtQ0FBSSxHQUFKO1FBQ0ksd0JBQUksRUFBRSxDQUFDO0lBQ1gsQ0FBQztJQXhDUSxvQkFBb0I7UUFOaEMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsaUJBQWlCO1lBQzNCLFdBQVcsRUFBRSwrQkFBK0I7WUFDNUMsU0FBUyxFQUFFLENBQUMsK0JBQStCLENBQUM7U0FDL0MsQ0FBQzt5Q0FLc0IseUJBQWdCO1lBQ1YsNEJBQVk7WUFDVCxrQ0FBZTtZQUNmLGtDQUFlO09BUG5DLG9CQUFvQixDQXlDaEM7SUFBRCwyQkFBQztDQUFBLEFBekNELElBeUNDO0FBekNZLG9EQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcidcbmltcG9ydCB7IEltYWdlIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9pbWFnZS9pbWFnZSc7XG5pbXBvcnQgeyBJbWFnZVNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9pbWFnZS5zZXJ2aWNlJztcbmltcG9ydCB7IGFuZHJvaWQgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uL2FwcGxpY2F0aW9uJztcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCAqIGFzIFRvYXN0IGZyb20gJ25hdGl2ZXNjcmlwdC10b2FzdCc7XG5pbXBvcnQgeyBleGl0IH0gZnJvbSAnbmF0aXZlc2NyaXB0LWV4aXQnO1xuaW1wb3J0IHsgU2V0dGluZ3NTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvc2V0dGluZ3Muc2VydmljZSc7XG5pbXBvcnQgKiBhcyBTb2NpYWxTaGFyZSBmcm9tIFwibmF0aXZlc2NyaXB0LXNvY2lhbC1zaGFyZVwiO1xuaW1wb3J0IHsgQ2FsZW5kYXJTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvY2FsZW5kYXIuc2VydmljZSc7XG5pbXBvcnQgeyBJbWFnZVNvdXJjZSB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvaW1hZ2Utc291cmNlL2ltYWdlLXNvdXJjZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6ICducy1pbWFnZS1yZXN1bHQnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9pbWFnZS1yZXN1bHQuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL2ltYWdlLXJlc3VsdC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEltYWdlUmVzdWx0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBwdWJsaWMgaW1nUmVzdWx0OiBJbWFnZVNvdXJjZTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyRXh0ZW5zaW9ucyxcbiAgICAgICAgcHJpdmF0ZSBpbWFnZVNlcnZpY2U6IEltYWdlU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBzZXR0aW5nc1NlcnZpY2U6IFNldHRpbmdzU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBjYWxlbmRhclNlcnZpY2U6IENhbGVuZGFyU2VydmljZSxcbiAgICApIHsgfVxuXG4gICAgbmdPbkluaXQoKSB7IFxuICAgICAgICAvLyBsZXQgaW1nOkltYWdlID0gdGhpcy5pbWdSZXN1bHRSZWYubmF0aXZlRWxlbWVudDtcbiAgICAgICAgdGhpcy5pbWdSZXN1bHQgPSB0aGlzLmltYWdlU2VydmljZS5jYWxlbmRhckltYWdlU291cmNlO1xuICAgICAgICAvLyBpbWcuaW1hZ2VTb3VyY2UgPSB0aGlzLmltYWdlU2VydmljZS5nZXRJbWFnZVNvdXJjZUZyb21GaWxlKHRoaXMuY2FsZW5kYXJTZXJ2aWNlLmltYWdlQ2FsZW5kYXIuaW1hZ2VGaWxlKTtcblxuICAgICAgICB0aGlzLnNldHRpbmdzU2VydmljZS5ub3RGaXJzdFJ1bigpO1xuICAgIH1cbiAgICBcbiAgICBzZXRXYWxscGFwZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLmltYWdlU2VydmljZS5jYWxlbmRhckltYWdlU291cmNlLmFuZHJvaWQpe1xuICAgICAgICAgICAgYW5kcm9pZC5jb250ZXh0LnNldFdhbGxwYXBlcih0aGlzLmltYWdlU2VydmljZS5jYWxlbmRhckltYWdlU291cmNlLmFuZHJvaWQpO1xuICAgICAgICAgICAgVG9hc3QubWFrZVRleHQoJ0jDoXR0w6lya8OpcCBiZcOhbGzDrXR2YS4nLCAnbG9uZycpLnNob3coKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdzZXRXYWxscGFwZXI6IE5vdCBpbXBsZW1lbnRlZCBmb3IgSU9TLicpO1xuICAgIH1cbiAgICBcbiAgICBzYXZlVG9GaWxlKCkge1xuICAgICAgICBsZXQgZmlsZSA9IChuZXcgRGF0ZSgpKS5nZXRUaW1lKCkgKyAnLnBuZyc7XG4gICAgICAgIGZpbGUgPSB0aGlzLmltYWdlU2VydmljZS5nZXRJbWFnZVBhdGgoZmlsZSk7XG4gICAgICAgIHRoaXMuaW1hZ2VTZXJ2aWNlLmNhbGVuZGFySW1hZ2VTb3VyY2Uuc2F2ZVRvRmlsZShmaWxlLCBcInBuZ1wiKTtcbiAgICAgICAgVG9hc3QubWFrZVRleHQoJ0vDqXAgZWxtZW50dmUuJywgJ2xvbmcnKS5zaG93KCk7XG4gICAgfVxuXG4gICAgc2hhcmUoKSB7XG4gICAgICAgIFNvY2lhbFNoYXJlLnNoYXJlSW1hZ2UodGhpcy5pbWFnZVNlcnZpY2UuY2FsZW5kYXJJbWFnZVNvdXJjZSk7XG4gICAgfVxuXG4gICAgZXhpdCgpIHtcbiAgICAgICAgZXhpdCgpO1xuICAgIH1cbn1cbiJdfQ==