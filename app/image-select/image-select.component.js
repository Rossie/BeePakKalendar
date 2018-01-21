"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var page_router_outlet_1 = require("nativescript-angular/router/page-router-outlet");
require("rxjs/add/operator/switchMap");
// 3rd pary libraries
var imagepicker = require("nativescript-imagepicker"); // https://github.com/NativeScript/nativescript-imagepicker
var moment = require("moment");
// Own libraries
var image_service_1 = require("../services/image.service");
var calendar_service_1 = require("../services/calendar.service");
var settings_service_1 = require("../services/settings.service");
var ImageSelectComponent = (function () {
    function ImageSelectComponent(router, imageService, pageRoute, calendarService, settings) {
        this.router = router;
        this.imageService = imageService;
        this.pageRoute = pageRoute;
        this.calendarService = calendarService;
        this.settings = settings;
        this.isLoading = true;
    }
    ImageSelectComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoading = false;
        this.pageRoute.activatedRoute
            .switchMap(function (activatedRoute) { return activatedRoute.url; })
            .subscribe(function (param) {
            _this.dayTexts = _this.settings.getAllDayText(moment());
            // console.log(JSON.stringify(this.dayTexts, null, 2));
        });
        this.images = this.settings.getImageList();
    };
    ImageSelectComponent.prototype.newImage = function () {
        var _this = this;
        var context = imagepicker.create({
            mode: "single" // use "multiple" for multiple selection
        });
        context.authorize()
            .then(function () { return context.present(); })
            .then(function (selection) {
            selection.forEach(function (selected) {
                // process the selected image
                selected.getImage().then(function (imgSource) {
                    // save file into app document
                    _this.imageService.saveSelectedfile(imgSource);
                    _this.router.navigateByUrl('image-crop'); // navigate to next screen
                });
            });
            // list.items = selection;
        }).catch(function (e) {
            // process error
            console.error(e);
        });
    };
    ImageSelectComponent.prototype.loadImage = function (image) {
        // store selected image record
        this.calendarService.selectCalendar(image);
        this.router.navigateByUrl('image-calendar');
    };
    ImageSelectComponent.prototype.next = function () {
        this.router.navigateByUrl('image-crop');
    };
    ImageSelectComponent.prototype.getMonthName = function (image) {
        return image.lastMonth ? moment.unix(image.lastMonth).format('MMMM') : '';
    };
    ImageSelectComponent.prototype.getAgendaDateFormat = function (date) {
        return date.format(calendar_service_1.AGENDA_FORMAT);
    };
    __decorate([
        core_1.ViewChild('scrollView'),
        __metadata("design:type", core_1.ElementRef)
    ], ImageSelectComponent.prototype, "scrollView", void 0);
    ImageSelectComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'ns-image-select',
            templateUrl: './image-select.component.html',
            styleUrls: ['./image-select.component.scss']
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions,
            image_service_1.ImageService,
            page_router_outlet_1.PageRoute,
            calendar_service_1.CalendarService,
            settings_service_1.SettingsService])
    ], ImageSelectComponent);
    return ImageSelectComponent;
}());
exports.ImageSelectComponent = ImageSelectComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2Utc2VsZWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImltYWdlLXNlbGVjdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBdUY7QUFDdkYsc0RBQThEO0FBRTlELHFGQUEyRTtBQUUzRSx1Q0FBcUM7QUFDckMscUJBQXFCO0FBQ3JCLHNEQUF3RCxDQUFDLDJEQUEyRDtBQUNwSCwrQkFBaUM7QUFFakMsZ0JBQWdCO0FBQ2hCLDJEQUF5RDtBQUd6RCxpRUFBOEY7QUFJOUYsaUVBQStEO0FBUS9EO0lBTUksOEJBQ1ksTUFBd0IsRUFDeEIsWUFBMEIsRUFDMUIsU0FBb0IsRUFDcEIsZUFBZ0MsRUFDaEMsUUFBeUI7UUFKekIsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFDeEIsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDMUIsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUNwQixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsYUFBUSxHQUFSLFFBQVEsQ0FBaUI7UUFWOUIsY0FBUyxHQUFHLElBQUksQ0FBQTtJQVduQixDQUFDO0lBRUwsdUNBQVEsR0FBUjtRQUFBLGlCQVVDO1FBVEcsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDdkIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjO2FBQ3hCLFNBQVMsQ0FBQyxVQUFDLGNBQThCLElBQUssT0FBQSxjQUFjLENBQUMsR0FBRyxFQUFsQixDQUFrQixDQUFDO2FBQ2pFLFNBQVMsQ0FBQyxVQUFDLEtBQW1CO1lBQzNCLEtBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztZQUN0RCx1REFBdUQ7UUFDM0QsQ0FBQyxDQUFDLENBQUM7UUFFUCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDL0MsQ0FBQztJQUVELHVDQUFRLEdBQVI7UUFBQSxpQkFxQkM7UUFwQkcsSUFBTSxPQUFPLEdBQUcsV0FBVyxDQUFDLE1BQU0sQ0FBQztZQUMvQixJQUFJLEVBQUUsUUFBUSxDQUFDLHdDQUF3QztTQUMxRCxDQUFDLENBQUM7UUFFSCxPQUFPLENBQUMsU0FBUyxFQUFFO2FBQ2QsSUFBSSxDQUFDLGNBQU0sT0FBQSxPQUFPLENBQUMsT0FBTyxFQUFFLEVBQWpCLENBQWlCLENBQUM7YUFDN0IsSUFBSSxDQUFDLFVBQUEsU0FBUztZQUNYLFNBQVMsQ0FBQyxPQUFPLENBQUMsVUFBQSxRQUFRO2dCQUN0Qiw2QkFBNkI7Z0JBQzdCLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQyxTQUFzQjtvQkFDNUMsOEJBQThCO29CQUM5QixLQUFJLENBQUMsWUFBWSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxDQUFDO29CQUM5QyxLQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLDBCQUEwQjtnQkFDdkUsQ0FBQyxDQUFDLENBQUM7WUFDUCxDQUFDLENBQUMsQ0FBQztZQUNILDBCQUEwQjtRQUM5QixDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDO1lBQ2hCLGdCQUFnQjtZQUNoQixPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3JCLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUVELHdDQUFTLEdBQVQsVUFBVSxLQUFxQjtRQUMzQiw4QkFBOEI7UUFDOUIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRUQsbUNBQUksR0FBSjtRQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFRCwyQ0FBWSxHQUFaLFVBQWEsS0FBcUI7UUFDOUIsTUFBTSxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUM5RSxDQUFDO0lBRUQsa0RBQW1CLEdBQW5CLFVBQW9CLElBQVk7UUFDNUIsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsZ0NBQWEsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUE3RHdCO1FBQXhCLGdCQUFTLENBQUMsWUFBWSxDQUFDO2tDQUFhLGlCQUFVOzREQUFBO0lBSnRDLG9CQUFvQjtRQU5oQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxpQkFBaUI7WUFDM0IsV0FBVyxFQUFFLCtCQUErQjtZQUM1QyxTQUFTLEVBQUUsQ0FBQywrQkFBK0IsQ0FBQztTQUMvQyxDQUFDO3lDQVFzQix5QkFBZ0I7WUFDViw0QkFBWTtZQUNmLDhCQUFTO1lBQ0gsa0NBQWU7WUFDdEIsa0NBQWU7T0FYNUIsb0JBQW9CLENBa0VoQztJQUFELDJCQUFDO0NBQUEsQUFsRUQsSUFrRUM7QUFsRVksb0RBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgQWZ0ZXJWaWV3SW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJ1xuaW1wb3J0IHsgSW1hZ2VTb3VyY2UgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL2ltYWdlLXNvdXJjZS9pbWFnZS1zb3VyY2UnO1xuaW1wb3J0IHsgUGFnZVJvdXRlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyL3BhZ2Utcm91dGVyLW91dGxldCc7XG5pbXBvcnQgKiBhcyBmcyBmcm9tIFwiZmlsZS1zeXN0ZW1cIjtcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL3N3aXRjaE1hcFwiO1xuLy8gM3JkIHBhcnkgbGlicmFyaWVzXG5pbXBvcnQgKiBhcyBpbWFnZXBpY2tlciBmcm9tIFwibmF0aXZlc2NyaXB0LWltYWdlcGlja2VyXCI7IC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9OYXRpdmVTY3JpcHQvbmF0aXZlc2NyaXB0LWltYWdlcGlja2VyXG5pbXBvcnQgKiBhcyBtb21lbnQgZnJvbSAnbW9tZW50JztcbmltcG9ydCB7IE1vbWVudCB9IGZyb20gJ21vbWVudCc7XG4vLyBPd24gbGlicmFyaWVzXG5pbXBvcnQgeyBJbWFnZVNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9pbWFnZS5zZXJ2aWNlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyL3NyYy9yb3V0ZXJfc3RhdGUnO1xuaW1wb3J0IHsgVXJsU2VnbWVudCB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlci9zcmMvdXJsX3RyZWUnO1xuaW1wb3J0IHsgQ2FsZW5kYXJTZXJ2aWNlLCBJSW1hZ2VDYWxlbmRhciwgQUdFTkRBX0ZPUk1BVCB9IGZyb20gJy4uL3NlcnZpY2VzL2NhbGVuZGFyLnNlcnZpY2UnO1xuaW1wb3J0IHsgR3JpZExheW91dCB9IGZyb20gXCJ1aS9sYXlvdXRzL2dyaWQtbGF5b3V0XCI7XG5pbXBvcnQgeyBMYWJlbCB9IGZyb20gXCJ1aS9sYWJlbFwiO1xuaW1wb3J0IHsgYW5kcm9pZCB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb24vYXBwbGljYXRpb24nO1xuaW1wb3J0IHsgU2V0dGluZ3NTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvc2V0dGluZ3Muc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6ICducy1pbWFnZS1zZWxlY3QnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9pbWFnZS1zZWxlY3QuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL2ltYWdlLXNlbGVjdC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEltYWdlU2VsZWN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBwdWJsaWMgaXNMb2FkaW5nID0gdHJ1ZVxuICAgIHB1YmxpYyBpbWFnZXM6IElJbWFnZUNhbGVuZGFyW107XG4gICAgcHVibGljIGRheVRleHRzO1xuICAgIEBWaWV3Q2hpbGQoJ3Njcm9sbFZpZXcnKSBzY3JvbGxWaWV3OiBFbGVtZW50UmVmXG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlckV4dGVuc2lvbnMsXG4gICAgICAgIHByaXZhdGUgaW1hZ2VTZXJ2aWNlOiBJbWFnZVNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgcGFnZVJvdXRlOiBQYWdlUm91dGUsXG4gICAgICAgIHByaXZhdGUgY2FsZW5kYXJTZXJ2aWNlOiBDYWxlbmRhclNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgc2V0dGluZ3M6IFNldHRpbmdzU2VydmljZVxuICAgICkgeyB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5wYWdlUm91dGUuYWN0aXZhdGVkUm91dGVcbiAgICAgICAgICAgIC5zd2l0Y2hNYXAoKGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSkgPT4gYWN0aXZhdGVkUm91dGUudXJsKVxuICAgICAgICAgICAgLnN1YnNjcmliZSgocGFyYW06IFVybFNlZ21lbnRbXSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZGF5VGV4dHMgPSB0aGlzLnNldHRpbmdzLmdldEFsbERheVRleHQobW9tZW50KCkpO1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHRoaXMuZGF5VGV4dHMsIG51bGwsIDIpKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuaW1hZ2VzID0gdGhpcy5zZXR0aW5ncy5nZXRJbWFnZUxpc3QoKTtcbiAgICB9XG5cbiAgICBuZXdJbWFnZSgpIHtcbiAgICAgICAgY29uc3QgY29udGV4dCA9IGltYWdlcGlja2VyLmNyZWF0ZSh7XG4gICAgICAgICAgICBtb2RlOiBcInNpbmdsZVwiIC8vIHVzZSBcIm11bHRpcGxlXCIgZm9yIG11bHRpcGxlIHNlbGVjdGlvblxuICAgICAgICB9KTtcblxuICAgICAgICBjb250ZXh0LmF1dGhvcml6ZSgpXG4gICAgICAgICAgICAudGhlbigoKSA9PiBjb250ZXh0LnByZXNlbnQoKSlcbiAgICAgICAgICAgIC50aGVuKHNlbGVjdGlvbiA9PiB7XG4gICAgICAgICAgICAgICAgc2VsZWN0aW9uLmZvckVhY2goc2VsZWN0ZWQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyBwcm9jZXNzIHRoZSBzZWxlY3RlZCBpbWFnZVxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZC5nZXRJbWFnZSgpLnRoZW4oKGltZ1NvdXJjZTogSW1hZ2VTb3VyY2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNhdmUgZmlsZSBpbnRvIGFwcCBkb2N1bWVudFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pbWFnZVNlcnZpY2Uuc2F2ZVNlbGVjdGVkZmlsZShpbWdTb3VyY2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybCgnaW1hZ2UtY3JvcCcpOyAvLyBuYXZpZ2F0ZSB0byBuZXh0IHNjcmVlblxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAvLyBsaXN0Lml0ZW1zID0gc2VsZWN0aW9uO1xuICAgICAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAvLyBwcm9jZXNzIGVycm9yXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIGxvYWRJbWFnZShpbWFnZTogSUltYWdlQ2FsZW5kYXIpIHtcbiAgICAgICAgLy8gc3RvcmUgc2VsZWN0ZWQgaW1hZ2UgcmVjb3JkXG4gICAgICAgIHRoaXMuY2FsZW5kYXJTZXJ2aWNlLnNlbGVjdENhbGVuZGFyKGltYWdlKTtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybCgnaW1hZ2UtY2FsZW5kYXInKTtcbiAgICB9XG5cbiAgICBuZXh0KCkge1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKCdpbWFnZS1jcm9wJyk7XG4gICAgfVxuXG4gICAgZ2V0TW9udGhOYW1lKGltYWdlOiBJSW1hZ2VDYWxlbmRhcikge1xuICAgICAgICByZXR1cm4gaW1hZ2UubGFzdE1vbnRoID8gbW9tZW50LnVuaXgoaW1hZ2UubGFzdE1vbnRoKS5mb3JtYXQoJ01NTU0nKSA6ICcnO1xuICAgIH1cblxuICAgIGdldEFnZW5kYURhdGVGb3JtYXQoZGF0ZTogTW9tZW50KTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIGRhdGUuZm9ybWF0KEFHRU5EQV9GT1JNQVQpO1xuICAgIH1cbn1cbiJdfQ==