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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2Utc2VsZWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImltYWdlLXNlbGVjdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBdUY7QUFDdkYsc0RBQThEO0FBRTlELHFGQUEyRTtBQUUzRSx1Q0FBcUM7QUFDckMscUJBQXFCO0FBQ3JCLHNEQUF3RCxDQUFDLDJEQUEyRDtBQUNwSCwrQkFBaUM7QUFFakMsZ0JBQWdCO0FBQ2hCLDJEQUF5RDtBQUd6RCxpRUFBOEY7QUFJOUYsaUVBQStEO0FBUS9EO0lBTUksOEJBQ1ksTUFBd0IsRUFDeEIsWUFBMEIsRUFDMUIsU0FBb0IsRUFDcEIsZUFBZ0MsRUFDaEMsUUFBeUI7UUFKekIsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFDeEIsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDMUIsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUNwQixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsYUFBUSxHQUFSLFFBQVEsQ0FBaUI7UUFWOUIsY0FBUyxHQUFHLElBQUksQ0FBQTtJQVduQixDQUFDO0lBRUwsdUNBQVEsR0FBUjtRQUFBLGlCQVVBO1FBVEksSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDdkIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjO2FBQzVCLFNBQVMsQ0FBQyxVQUFDLGNBQThCLElBQUssT0FBQSxjQUFjLENBQUMsR0FBRyxFQUFsQixDQUFrQixDQUFDO2FBQ2pFLFNBQVMsQ0FBQyxVQUFDLEtBQW1CO1lBQzNCLEtBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztZQUN0RCx1REFBdUQ7UUFDM0QsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDaEQsQ0FBQztJQUVBLHVDQUFRLEdBQVI7UUFBQSxpQkFxQkM7UUFwQkcsSUFBTSxPQUFPLEdBQUcsV0FBVyxDQUFDLE1BQU0sQ0FBQztZQUMvQixJQUFJLEVBQUUsUUFBUSxDQUFDLHdDQUF3QztTQUMxRCxDQUFDLENBQUM7UUFFSCxPQUFPLENBQUMsU0FBUyxFQUFFO2FBQ2xCLElBQUksQ0FBQyxjQUFNLE9BQUEsT0FBTyxDQUFDLE9BQU8sRUFBRSxFQUFqQixDQUFpQixDQUFDO2FBQzdCLElBQUksQ0FBQyxVQUFBLFNBQVM7WUFDWCxTQUFTLENBQUMsT0FBTyxDQUFDLFVBQUEsUUFBUTtnQkFDdEIsNkJBQTZCO2dCQUM3QixRQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUMsU0FBc0I7b0JBQzVDLDhCQUE4QjtvQkFDOUIsS0FBSSxDQUFDLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsQ0FBQztvQkFDOUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQywwQkFBMEI7Z0JBQ3ZFLENBQUMsQ0FBQyxDQUFDO1lBQ1AsQ0FBQyxDQUFDLENBQUM7WUFDSCwwQkFBMEI7UUFDOUIsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQztZQUNoQixnQkFBZ0I7WUFDaEIsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNyQixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCx3Q0FBUyxHQUFULFVBQVUsS0FBcUI7UUFDM0IsOEJBQThCO1FBQzlCLElBQUksQ0FBQyxlQUFlLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUVELG1DQUFJLEdBQUo7UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRUQsMkNBQVksR0FBWixVQUFhLEtBQW9CO1FBQzdCLE1BQU0sQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDOUUsQ0FBQztJQUVELGtEQUFtQixHQUFuQixVQUFvQixJQUFXO1FBQzNCLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGdDQUFhLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBN0R3QjtRQUF4QixnQkFBUyxDQUFDLFlBQVksQ0FBQztrQ0FBYSxpQkFBVTs0REFBQTtJQUp0QyxvQkFBb0I7UUFOaEMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsaUJBQWlCO1lBQzNCLFdBQVcsRUFBRSwrQkFBK0I7WUFDNUMsU0FBUyxFQUFFLENBQUMsK0JBQStCLENBQUM7U0FDL0MsQ0FBQzt5Q0FRc0IseUJBQWdCO1lBQ1YsNEJBQVk7WUFDZiw4QkFBUztZQUNILGtDQUFlO1lBQ3RCLGtDQUFlO09BWDVCLG9CQUFvQixDQWtFaEM7SUFBRCwyQkFBQztDQUFBLEFBbEVELElBa0VDO0FBbEVZLG9EQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIEFmdGVyVmlld0luaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcidcbmltcG9ydCB7IEltYWdlU291cmNlIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy9pbWFnZS1zb3VyY2UvaW1hZ2Utc291cmNlJztcbmltcG9ydCB7IFBhZ2VSb3V0ZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlci9wYWdlLXJvdXRlci1vdXRsZXQnO1xuaW1wb3J0ICogYXMgZnMgZnJvbSBcImZpbGUtc3lzdGVtXCI7XG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9zd2l0Y2hNYXBcIjtcbi8vIDNyZCBwYXJ5IGxpYnJhcmllc1xuaW1wb3J0ICogYXMgaW1hZ2VwaWNrZXIgZnJvbSBcIm5hdGl2ZXNjcmlwdC1pbWFnZXBpY2tlclwiOyAvLyBodHRwczovL2dpdGh1Yi5jb20vTmF0aXZlU2NyaXB0L25hdGl2ZXNjcmlwdC1pbWFnZXBpY2tlclxuaW1wb3J0ICogYXMgbW9tZW50IGZyb20gJ21vbWVudCc7XG5pbXBvcnQgeyBNb21lbnQgfSBmcm9tICdtb21lbnQnO1xuLy8gT3duIGxpYnJhcmllc1xuaW1wb3J0IHsgSW1hZ2VTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvaW1hZ2Uuc2VydmljZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlci9zcmMvcm91dGVyX3N0YXRlJztcbmltcG9ydCB7IFVybFNlZ21lbnQgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXIvc3JjL3VybF90cmVlJztcbmltcG9ydCB7IENhbGVuZGFyU2VydmljZSwgSUltYWdlQ2FsZW5kYXIsIEFHRU5EQV9GT1JNQVQgfSBmcm9tICcuLi9zZXJ2aWNlcy9jYWxlbmRhci5zZXJ2aWNlJztcbmltcG9ydCB7IEdyaWRMYXlvdXQgfSBmcm9tIFwidWkvbGF5b3V0cy9ncmlkLWxheW91dFwiO1xuaW1wb3J0IHsgTGFiZWwgfSBmcm9tIFwidWkvbGFiZWxcIjtcbmltcG9ydCB7IGFuZHJvaWQgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uL2FwcGxpY2F0aW9uJztcbmltcG9ydCB7IFNldHRpbmdzU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL3NldHRpbmdzLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiAnbnMtaW1hZ2Utc2VsZWN0JyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vaW1hZ2Utc2VsZWN0LmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9pbWFnZS1zZWxlY3QuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBJbWFnZVNlbGVjdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgcHVibGljIGlzTG9hZGluZyA9IHRydWVcbiAgICBwdWJsaWMgaW1hZ2VzOiBJSW1hZ2VDYWxlbmRhcltdO1xuICAgIHB1YmxpYyBkYXlUZXh0cztcbiAgICBAVmlld0NoaWxkKCdzY3JvbGxWaWV3Jykgc2Nyb2xsVmlldzogRWxlbWVudFJlZlxuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXJFeHRlbnNpb25zLFxuICAgICAgICBwcml2YXRlIGltYWdlU2VydmljZTogSW1hZ2VTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIHBhZ2VSb3V0ZTogUGFnZVJvdXRlLFxuICAgICAgICBwcml2YXRlIGNhbGVuZGFyU2VydmljZTogQ2FsZW5kYXJTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIHNldHRpbmdzOiBTZXR0aW5nc1NlcnZpY2VcbiAgICApIHsgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMucGFnZVJvdXRlLmFjdGl2YXRlZFJvdXRlXG4gICAgICAgIC5zd2l0Y2hNYXAoKGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSkgPT4gYWN0aXZhdGVkUm91dGUudXJsKVxuICAgICAgICAuc3Vic2NyaWJlKChwYXJhbTogVXJsU2VnbWVudFtdKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmRheVRleHRzID0gdGhpcy5zZXR0aW5ncy5nZXRBbGxEYXlUZXh0KG1vbWVudCgpKTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHRoaXMuZGF5VGV4dHMsIG51bGwsIDIpKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5pbWFnZXMgPSB0aGlzLnNldHRpbmdzLmdldEltYWdlTGlzdCgpO1xuICAgfVxuXG4gICAgbmV3SW1hZ2UoKSB7XG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSBpbWFnZXBpY2tlci5jcmVhdGUoe1xuICAgICAgICAgICAgbW9kZTogXCJzaW5nbGVcIiAvLyB1c2UgXCJtdWx0aXBsZVwiIGZvciBtdWx0aXBsZSBzZWxlY3Rpb25cbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29udGV4dC5hdXRob3JpemUoKVxuICAgICAgICAudGhlbigoKSA9PiBjb250ZXh0LnByZXNlbnQoKSlcbiAgICAgICAgLnRoZW4oc2VsZWN0aW9uID0+IHtcbiAgICAgICAgICAgIHNlbGVjdGlvbi5mb3JFYWNoKHNlbGVjdGVkID0+IHtcbiAgICAgICAgICAgICAgICAvLyBwcm9jZXNzIHRoZSBzZWxlY3RlZCBpbWFnZVxuICAgICAgICAgICAgICAgIHNlbGVjdGVkLmdldEltYWdlKCkudGhlbigoaW1nU291cmNlOiBJbWFnZVNvdXJjZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyBzYXZlIGZpbGUgaW50byBhcHAgZG9jdW1lbnRcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbWFnZVNlcnZpY2Uuc2F2ZVNlbGVjdGVkZmlsZShpbWdTb3VyY2UpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKCdpbWFnZS1jcm9wJyk7IC8vIG5hdmlnYXRlIHRvIG5leHQgc2NyZWVuXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8vIGxpc3QuaXRlbXMgPSBzZWxlY3Rpb247XG4gICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAvLyBwcm9jZXNzIGVycm9yXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgICAgICB9KTsgICAgXG4gICAgfVxuXG4gICAgbG9hZEltYWdlKGltYWdlOiBJSW1hZ2VDYWxlbmRhcikge1xuICAgICAgICAvLyBzdG9yZSBzZWxlY3RlZCBpbWFnZSByZWNvcmRcbiAgICAgICAgdGhpcy5jYWxlbmRhclNlcnZpY2Uuc2VsZWN0Q2FsZW5kYXIoaW1hZ2UpO1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKCdpbWFnZS1jYWxlbmRhcicpO1xuICAgIH1cblxuICAgIG5leHQoKSB7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwoJ2ltYWdlLWNyb3AnKTtcbiAgICB9XG5cbiAgICBnZXRNb250aE5hbWUoaW1hZ2U6SUltYWdlQ2FsZW5kYXIpIHtcbiAgICAgICAgcmV0dXJuIGltYWdlLmxhc3RNb250aCA/IG1vbWVudC51bml4KGltYWdlLmxhc3RNb250aCkuZm9ybWF0KCdNTU1NJykgOiAnJztcbiAgICB9XG5cbiAgICBnZXRBZ2VuZGFEYXRlRm9ybWF0KGRhdGU6TW9tZW50KTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIGRhdGUuZm9ybWF0KEFHRU5EQV9GT1JNQVQpO1xuICAgIH1cbn1cbiJdfQ==