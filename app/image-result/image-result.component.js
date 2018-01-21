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
    ImageResultComponent.prototype.goHome = function () {
        this.router.navigateByUrl('image-select');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2UtcmVzdWx0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImltYWdlLXJlc3VsdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBd0U7QUFDeEUsc0RBQThEO0FBRTlELDJEQUF5RDtBQUN6RCx3RUFBbUU7QUFFbkUsMENBQTRDO0FBQzVDLHVEQUF5QztBQUN6QyxpRUFBK0Q7QUFDL0QsdURBQXlEO0FBQ3pELGlFQUErRDtBQVMvRDtJQUdJLDhCQUNZLE1BQXdCLEVBQ3hCLFlBQTBCLEVBQzFCLGVBQWdDLEVBQ2hDLGVBQWdDO1FBSGhDLFdBQU0sR0FBTixNQUFNLENBQWtCO1FBQ3hCLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzFCLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7SUFDeEMsQ0FBQztJQUVMLHVDQUFRLEdBQVI7UUFDSSxtREFBbUQ7UUFDbkQsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLG1CQUFtQixDQUFDO1FBQ3ZELDRHQUE0RztRQUU1RyxJQUFJLENBQUMsZUFBZSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3ZDLENBQUM7SUFFRCwyQ0FBWSxHQUFaO1FBQ0ksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLENBQUMsQ0FBQSxDQUFDO1lBQy9DLHFCQUFPLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLG1CQUFtQixDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzVFLEtBQUssQ0FBQyxRQUFRLENBQUMsc0JBQXNCLEVBQUUsTUFBTSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDMUQsQ0FBQztRQUNELElBQUk7WUFDQSxPQUFPLENBQUMsS0FBSyxDQUFDLHdDQUF3QyxDQUFDLENBQUM7SUFDaEUsQ0FBQztJQUVELHlDQUFVLEdBQVY7UUFDSSxJQUFJLElBQUksR0FBRyxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQyxPQUFPLEVBQUUsR0FBRyxNQUFNLENBQUM7UUFDM0MsSUFBSSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzVDLElBQUksQ0FBQyxZQUFZLENBQUMsbUJBQW1CLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztRQUM5RCxLQUFLLENBQUMsUUFBUSxDQUFDLGVBQWUsRUFBRSxNQUFNLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNuRCxDQUFDO0lBRUQsb0NBQUssR0FBTDtRQUNJLFdBQVcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0lBQ2xFLENBQUM7SUFFRCxxQ0FBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUVELG1DQUFJLEdBQUo7UUFDSSx3QkFBSSxFQUFFLENBQUM7SUFDWCxDQUFDO0lBNUNRLG9CQUFvQjtRQU5oQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxpQkFBaUI7WUFDM0IsV0FBVyxFQUFFLCtCQUErQjtZQUM1QyxTQUFTLEVBQUUsQ0FBQywrQkFBK0IsQ0FBQztTQUMvQyxDQUFDO3lDQUtzQix5QkFBZ0I7WUFDViw0QkFBWTtZQUNULGtDQUFlO1lBQ2Ysa0NBQWU7T0FQbkMsb0JBQW9CLENBNkNoQztJQUFELDJCQUFDO0NBQUEsQUE3Q0QsSUE2Q0M7QUE3Q1ksb0RBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJ1xuaW1wb3J0IHsgSW1hZ2UgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL2ltYWdlL2ltYWdlJztcbmltcG9ydCB7IEltYWdlU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2ltYWdlLnNlcnZpY2UnO1xuaW1wb3J0IHsgYW5kcm9pZCB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb24vYXBwbGljYXRpb24nO1xuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0ICogYXMgVG9hc3QgZnJvbSAnbmF0aXZlc2NyaXB0LXRvYXN0JztcbmltcG9ydCB7IGV4aXQgfSBmcm9tICduYXRpdmVzY3JpcHQtZXhpdCc7XG5pbXBvcnQgeyBTZXR0aW5nc1NlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9zZXR0aW5ncy5zZXJ2aWNlJztcbmltcG9ydCAqIGFzIFNvY2lhbFNoYXJlIGZyb20gXCJuYXRpdmVzY3JpcHQtc29jaWFsLXNoYXJlXCI7XG5pbXBvcnQgeyBDYWxlbmRhclNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9jYWxlbmRhci5zZXJ2aWNlJztcbmltcG9ydCB7IEltYWdlU291cmNlIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy9pbWFnZS1zb3VyY2UvaW1hZ2Utc291cmNlJztcblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogJ25zLWltYWdlLXJlc3VsdCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2ltYWdlLXJlc3VsdC5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vaW1hZ2UtcmVzdWx0LmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgSW1hZ2VSZXN1bHRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHB1YmxpYyBpbWdSZXN1bHQ6IEltYWdlU291cmNlO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXJFeHRlbnNpb25zLFxuICAgICAgICBwcml2YXRlIGltYWdlU2VydmljZTogSW1hZ2VTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIHNldHRpbmdzU2VydmljZTogU2V0dGluZ3NTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIGNhbGVuZGFyU2VydmljZTogQ2FsZW5kYXJTZXJ2aWNlLFxuICAgICkgeyB9XG5cbiAgICBuZ09uSW5pdCgpIHsgXG4gICAgICAgIC8vIGxldCBpbWc6SW1hZ2UgPSB0aGlzLmltZ1Jlc3VsdFJlZi5uYXRpdmVFbGVtZW50O1xuICAgICAgICB0aGlzLmltZ1Jlc3VsdCA9IHRoaXMuaW1hZ2VTZXJ2aWNlLmNhbGVuZGFySW1hZ2VTb3VyY2U7XG4gICAgICAgIC8vIGltZy5pbWFnZVNvdXJjZSA9IHRoaXMuaW1hZ2VTZXJ2aWNlLmdldEltYWdlU291cmNlRnJvbUZpbGUodGhpcy5jYWxlbmRhclNlcnZpY2UuaW1hZ2VDYWxlbmRhci5pbWFnZUZpbGUpO1xuXG4gICAgICAgIHRoaXMuc2V0dGluZ3NTZXJ2aWNlLm5vdEZpcnN0UnVuKCk7XG4gICAgfVxuICAgIFxuICAgIHNldFdhbGxwYXBlcigpIHtcbiAgICAgICAgaWYgKHRoaXMuaW1hZ2VTZXJ2aWNlLmNhbGVuZGFySW1hZ2VTb3VyY2UuYW5kcm9pZCl7XG4gICAgICAgICAgICBhbmRyb2lkLmNvbnRleHQuc2V0V2FsbHBhcGVyKHRoaXMuaW1hZ2VTZXJ2aWNlLmNhbGVuZGFySW1hZ2VTb3VyY2UuYW5kcm9pZCk7XG4gICAgICAgICAgICBUb2FzdC5tYWtlVGV4dCgnSMOhdHTDqXJrw6lwIGJlw6FsbMOtdHZhLicsICdsb25nJykuc2hvdygpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ3NldFdhbGxwYXBlcjogTm90IGltcGxlbWVudGVkIGZvciBJT1MuJyk7XG4gICAgfVxuICAgIFxuICAgIHNhdmVUb0ZpbGUoKSB7XG4gICAgICAgIGxldCBmaWxlID0gKG5ldyBEYXRlKCkpLmdldFRpbWUoKSArICcucG5nJztcbiAgICAgICAgZmlsZSA9IHRoaXMuaW1hZ2VTZXJ2aWNlLmdldEltYWdlUGF0aChmaWxlKTtcbiAgICAgICAgdGhpcy5pbWFnZVNlcnZpY2UuY2FsZW5kYXJJbWFnZVNvdXJjZS5zYXZlVG9GaWxlKGZpbGUsIFwicG5nXCIpO1xuICAgICAgICBUb2FzdC5tYWtlVGV4dCgnS8OpcCBlbG1lbnR2ZS4nLCAnbG9uZycpLnNob3coKTtcbiAgICB9XG5cbiAgICBzaGFyZSgpIHtcbiAgICAgICAgU29jaWFsU2hhcmUuc2hhcmVJbWFnZSh0aGlzLmltYWdlU2VydmljZS5jYWxlbmRhckltYWdlU291cmNlKTtcbiAgICB9XG5cbiAgICBnb0hvbWUoKSB7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwoJ2ltYWdlLXNlbGVjdCcpO1xuICAgIH1cblxuICAgIGV4aXQoKSB7XG4gICAgICAgIGV4aXQoKTtcbiAgICB9XG59XG4iXX0=