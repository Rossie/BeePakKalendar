"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var page_router_outlet_1 = require("nativescript-angular/router/page-router-outlet");
require("rxjs/add/operator/switchMap");
// 3rd pary libraries
var imagepicker = require("nativescript-imagepicker"); // https://github.com/NativeScript/nativescript-imagepicker
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
        this.isLoading = false;
        this.pageRoute.activatedRoute
            .switchMap(function (activatedRoute) { return activatedRoute.url; })
            .subscribe(function (param) {
        });
        this.images = this.settings.getImageList();
        console.log("settings.getImageList::::", JSON.stringify(this.images, null, 4));
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
        this.calendarService.selectCalendar(image);
        this.router.navigateByUrl('image-calendar');
    };
    ImageSelectComponent.prototype.next = function () {
        this.router.navigateByUrl('image-crop');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2Utc2VsZWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImltYWdlLXNlbGVjdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBdUY7QUFDdkYsc0RBQThEO0FBRTlELHFGQUEyRTtBQUUzRSx1Q0FBcUM7QUFDckMscUJBQXFCO0FBQ3JCLHNEQUF3RCxDQUFDLDJEQUEyRDtBQUNwSCxnQkFBZ0I7QUFDaEIsMkRBQXlEO0FBR3pELGlFQUErRTtBQUkvRSxpRUFBK0Q7QUFRL0Q7SUFNSSw4QkFDWSxNQUF3QixFQUN4QixZQUEwQixFQUMxQixTQUFvQixFQUNwQixlQUFnQyxFQUNoQyxRQUF5QjtRQUp6QixXQUFNLEdBQU4sTUFBTSxDQUFrQjtRQUN4QixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUMxQixjQUFTLEdBQVQsU0FBUyxDQUFXO1FBQ3BCLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyxhQUFRLEdBQVIsUUFBUSxDQUFpQjtRQVI5QixjQUFTLEdBQUcsSUFBSSxDQUFBO0lBVXZCLENBQUM7SUFFRCx1Q0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDdkIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjO2FBQzVCLFNBQVMsQ0FBQyxVQUFDLGNBQThCLElBQUssT0FBQSxjQUFjLENBQUMsR0FBRyxFQUFsQixDQUFrQixDQUFDO2FBQ2pFLFNBQVMsQ0FBQyxVQUFDLEtBQW1CO1FBQy9CLENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBRTNDLE9BQU8sQ0FBQyxHQUFHLENBQUMsMkJBQTJCLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ25GLENBQUM7SUFFRCx1Q0FBUSxHQUFSO1FBQUEsaUJBcUJDO1FBcEJHLElBQU0sT0FBTyxHQUFHLFdBQVcsQ0FBQyxNQUFNLENBQUM7WUFDL0IsSUFBSSxFQUFFLFFBQVEsQ0FBQyx3Q0FBd0M7U0FDMUQsQ0FBQyxDQUFDO1FBRUgsT0FBTyxDQUFDLFNBQVMsRUFBRTthQUNsQixJQUFJLENBQUMsY0FBTSxPQUFBLE9BQU8sQ0FBQyxPQUFPLEVBQUUsRUFBakIsQ0FBaUIsQ0FBQzthQUM3QixJQUFJLENBQUMsVUFBQSxTQUFTO1lBQ1gsU0FBUyxDQUFDLE9BQU8sQ0FBQyxVQUFBLFFBQVE7Z0JBQ3RCLDZCQUE2QjtnQkFDN0IsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFDLFNBQXNCO29CQUM1Qyw4QkFBOEI7b0JBQzlCLEtBQUksQ0FBQyxZQUFZLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLENBQUM7b0JBQzlDLEtBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsMEJBQTBCO2dCQUN2RSxDQUFDLENBQUMsQ0FBQztZQUNQLENBQUMsQ0FBQyxDQUFDO1lBQ0gsMEJBQTBCO1FBQzlCLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUM7WUFDaEIsZ0JBQWdCO1lBQ2hCLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDckIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsd0NBQVMsR0FBVCxVQUFVLEtBQXFCO1FBQzNCLElBQUksQ0FBQyxlQUFlLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUVELG1DQUFJLEdBQUo7UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBeER3QjtRQUF4QixnQkFBUyxDQUFDLFlBQVksQ0FBQztrQ0FBYSxpQkFBVTs0REFBQTtJQUR0QyxvQkFBb0I7UUFOaEMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsaUJBQWlCO1lBQzNCLFdBQVcsRUFBRSwrQkFBK0I7WUFDNUMsU0FBUyxFQUFFLENBQUMsK0JBQStCLENBQUM7U0FDL0MsQ0FBQzt5Q0FRc0IseUJBQWdCO1lBQ1YsNEJBQVk7WUFDZiw4QkFBUztZQUNILGtDQUFlO1lBQ3RCLGtDQUFlO09BWDVCLG9CQUFvQixDQTBEaEM7SUFBRCwyQkFBQztDQUFBLEFBMURELElBMERDO0FBMURZLG9EQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIEFmdGVyVmlld0luaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcidcbmltcG9ydCB7IEltYWdlU291cmNlIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy9pbWFnZS1zb3VyY2UvaW1hZ2Utc291cmNlJztcbmltcG9ydCB7IFBhZ2VSb3V0ZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlci9wYWdlLXJvdXRlci1vdXRsZXQnO1xuaW1wb3J0ICogYXMgZnMgZnJvbSBcImZpbGUtc3lzdGVtXCI7XG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9zd2l0Y2hNYXBcIjtcbi8vIDNyZCBwYXJ5IGxpYnJhcmllc1xuaW1wb3J0ICogYXMgaW1hZ2VwaWNrZXIgZnJvbSBcIm5hdGl2ZXNjcmlwdC1pbWFnZXBpY2tlclwiOyAvLyBodHRwczovL2dpdGh1Yi5jb20vTmF0aXZlU2NyaXB0L25hdGl2ZXNjcmlwdC1pbWFnZXBpY2tlclxuLy8gT3duIGxpYnJhcmllc1xuaW1wb3J0IHsgSW1hZ2VTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvaW1hZ2Uuc2VydmljZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlci9zcmMvcm91dGVyX3N0YXRlJztcbmltcG9ydCB7IFVybFNlZ21lbnQgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXIvc3JjL3VybF90cmVlJztcbmltcG9ydCB7IENhbGVuZGFyU2VydmljZSwgSUltYWdlQ2FsZW5kYXIgfSBmcm9tICcuLi9zZXJ2aWNlcy9jYWxlbmRhci5zZXJ2aWNlJztcbmltcG9ydCB7IEdyaWRMYXlvdXQgfSBmcm9tIFwidWkvbGF5b3V0cy9ncmlkLWxheW91dFwiO1xuaW1wb3J0IHsgTGFiZWwgfSBmcm9tIFwidWkvbGFiZWxcIjtcbmltcG9ydCB7IGFuZHJvaWQgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uL2FwcGxpY2F0aW9uJztcbmltcG9ydCB7IFNldHRpbmdzU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL3NldHRpbmdzLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiAnbnMtaW1hZ2Utc2VsZWN0JyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vaW1hZ2Utc2VsZWN0LmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9pbWFnZS1zZWxlY3QuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBJbWFnZVNlbGVjdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgQFZpZXdDaGlsZCgnc2Nyb2xsVmlldycpIHNjcm9sbFZpZXc6IEVsZW1lbnRSZWZcblxuICAgIHB1YmxpYyBpc0xvYWRpbmcgPSB0cnVlXG4gICAgcHVibGljIGltYWdlczogSUltYWdlQ2FsZW5kYXJbXTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyRXh0ZW5zaW9ucyxcbiAgICAgICAgcHJpdmF0ZSBpbWFnZVNlcnZpY2U6IEltYWdlU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBwYWdlUm91dGU6IFBhZ2VSb3V0ZSxcbiAgICAgICAgcHJpdmF0ZSBjYWxlbmRhclNlcnZpY2U6IENhbGVuZGFyU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBzZXR0aW5nczogU2V0dGluZ3NTZXJ2aWNlXG4gICAgKSB7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMucGFnZVJvdXRlLmFjdGl2YXRlZFJvdXRlXG4gICAgICAgIC5zd2l0Y2hNYXAoKGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSkgPT4gYWN0aXZhdGVkUm91dGUudXJsKVxuICAgICAgICAuc3Vic2NyaWJlKChwYXJhbTogVXJsU2VnbWVudFtdKSA9PiB7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuaW1hZ2VzID0gdGhpcy5zZXR0aW5ncy5nZXRJbWFnZUxpc3QoKTtcblxuICAgICAgICBjb25zb2xlLmxvZyhcInNldHRpbmdzLmdldEltYWdlTGlzdDo6OjpcIiwgSlNPTi5zdHJpbmdpZnkodGhpcy5pbWFnZXMsIG51bGwsIDQpKTtcbiAgICB9XG5cbiAgICBuZXdJbWFnZSgpIHtcbiAgICAgICAgY29uc3QgY29udGV4dCA9IGltYWdlcGlja2VyLmNyZWF0ZSh7XG4gICAgICAgICAgICBtb2RlOiBcInNpbmdsZVwiIC8vIHVzZSBcIm11bHRpcGxlXCIgZm9yIG11bHRpcGxlIHNlbGVjdGlvblxuICAgICAgICB9KTtcblxuICAgICAgICBjb250ZXh0LmF1dGhvcml6ZSgpXG4gICAgICAgIC50aGVuKCgpID0+IGNvbnRleHQucHJlc2VudCgpKVxuICAgICAgICAudGhlbihzZWxlY3Rpb24gPT4ge1xuICAgICAgICAgICAgc2VsZWN0aW9uLmZvckVhY2goc2VsZWN0ZWQgPT4ge1xuICAgICAgICAgICAgICAgIC8vIHByb2Nlc3MgdGhlIHNlbGVjdGVkIGltYWdlXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWQuZ2V0SW1hZ2UoKS50aGVuKChpbWdTb3VyY2U6IEltYWdlU291cmNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHNhdmUgZmlsZSBpbnRvIGFwcCBkb2N1bWVudFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmltYWdlU2VydmljZS5zYXZlU2VsZWN0ZWRmaWxlKGltZ1NvdXJjZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwoJ2ltYWdlLWNyb3AnKTsgLy8gbmF2aWdhdGUgdG8gbmV4dCBzY3JlZW5cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy8gbGlzdC5pdGVtcyA9IHNlbGVjdGlvbjtcbiAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIC8vIHByb2Nlc3MgZXJyb3JcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgICAgIH0pOyAgICBcbiAgICB9XG5cbiAgICBsb2FkSW1hZ2UoaW1hZ2U6IElJbWFnZUNhbGVuZGFyKSB7XG4gICAgICAgIHRoaXMuY2FsZW5kYXJTZXJ2aWNlLnNlbGVjdENhbGVuZGFyKGltYWdlKTtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybCgnaW1hZ2UtY2FsZW5kYXInKTtcbiAgICB9XG5cbiAgICBuZXh0KCkge1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKCdpbWFnZS1jcm9wJyk7XG4gICAgfVxufVxuIl19