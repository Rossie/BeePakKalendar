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
        this.isLoading = false;
        this.pageRoute.activatedRoute
            .switchMap(function (activatedRoute) { return activatedRoute.url; })
            .subscribe(function (param) {
        });
        this.images = this.settings.getImageList();
        // console.log("settings.getImageList::::", JSON.stringify(this.images, null, 4));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2Utc2VsZWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImltYWdlLXNlbGVjdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBdUY7QUFDdkYsc0RBQThEO0FBRTlELHFGQUEyRTtBQUUzRSx1Q0FBcUM7QUFDckMscUJBQXFCO0FBQ3JCLHNEQUF3RCxDQUFDLDJEQUEyRDtBQUNwSCwrQkFBaUM7QUFDakMsZ0JBQWdCO0FBQ2hCLDJEQUF5RDtBQUd6RCxpRUFBK0U7QUFJL0UsaUVBQStEO0FBUS9EO0lBS0ksOEJBQ1ksTUFBd0IsRUFDeEIsWUFBMEIsRUFDMUIsU0FBb0IsRUFDcEIsZUFBZ0MsRUFDaEMsUUFBeUI7UUFKekIsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFDeEIsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDMUIsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUNwQixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsYUFBUSxHQUFSLFFBQVEsQ0FBaUI7UUFUOUIsY0FBUyxHQUFHLElBQUksQ0FBQTtJQVVuQixDQUFDO0lBRUwsdUNBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYzthQUM1QixTQUFTLENBQUMsVUFBQyxjQUE4QixJQUFLLE9BQUEsY0FBYyxDQUFDLEdBQUcsRUFBbEIsQ0FBa0IsQ0FBQzthQUNqRSxTQUFTLENBQUMsVUFBQyxLQUFtQjtRQUMvQixDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUMzQyxrRkFBa0Y7SUFDdEYsQ0FBQztJQUVELHVDQUFRLEdBQVI7UUFBQSxpQkFxQkM7UUFwQkcsSUFBTSxPQUFPLEdBQUcsV0FBVyxDQUFDLE1BQU0sQ0FBQztZQUMvQixJQUFJLEVBQUUsUUFBUSxDQUFDLHdDQUF3QztTQUMxRCxDQUFDLENBQUM7UUFFSCxPQUFPLENBQUMsU0FBUyxFQUFFO2FBQ2xCLElBQUksQ0FBQyxjQUFNLE9BQUEsT0FBTyxDQUFDLE9BQU8sRUFBRSxFQUFqQixDQUFpQixDQUFDO2FBQzdCLElBQUksQ0FBQyxVQUFBLFNBQVM7WUFDWCxTQUFTLENBQUMsT0FBTyxDQUFDLFVBQUEsUUFBUTtnQkFDdEIsNkJBQTZCO2dCQUM3QixRQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUMsU0FBc0I7b0JBQzVDLDhCQUE4QjtvQkFDOUIsS0FBSSxDQUFDLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsQ0FBQztvQkFDOUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQywwQkFBMEI7Z0JBQ3ZFLENBQUMsQ0FBQyxDQUFDO1lBQ1AsQ0FBQyxDQUFDLENBQUM7WUFDSCwwQkFBMEI7UUFDOUIsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQztZQUNoQixnQkFBZ0I7WUFDaEIsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNyQixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCx3Q0FBUyxHQUFULFVBQVUsS0FBcUI7UUFDM0IsOEJBQThCO1FBQzlCLElBQUksQ0FBQyxlQUFlLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUVELG1DQUFJLEdBQUo7UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRUQsMkNBQVksR0FBWixVQUFhLEtBQW9CO1FBQzdCLE1BQU0sQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDOUUsQ0FBQztJQXhEd0I7UUFBeEIsZ0JBQVMsQ0FBQyxZQUFZLENBQUM7a0NBQWEsaUJBQVU7NERBQUE7SUFIdEMsb0JBQW9CO1FBTmhDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGlCQUFpQjtZQUMzQixXQUFXLEVBQUUsK0JBQStCO1lBQzVDLFNBQVMsRUFBRSxDQUFDLCtCQUErQixDQUFDO1NBQy9DLENBQUM7eUNBT3NCLHlCQUFnQjtZQUNWLDRCQUFZO1lBQ2YsOEJBQVM7WUFDSCxrQ0FBZTtZQUN0QixrQ0FBZTtPQVY1QixvQkFBb0IsQ0E0RGhDO0lBQUQsMkJBQUM7Q0FBQSxBQTVERCxJQTREQztBQTVEWSxvREFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBBZnRlclZpZXdJbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInXG5pbXBvcnQgeyBJbWFnZVNvdXJjZSB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvaW1hZ2Utc291cmNlL2ltYWdlLXNvdXJjZSc7XG5pbXBvcnQgeyBQYWdlUm91dGUgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXIvcGFnZS1yb3V0ZXItb3V0bGV0JztcbmltcG9ydCAqIGFzIGZzIGZyb20gXCJmaWxlLXN5c3RlbVwiO1xuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3Ivc3dpdGNoTWFwXCI7XG4vLyAzcmQgcGFyeSBsaWJyYXJpZXNcbmltcG9ydCAqIGFzIGltYWdlcGlja2VyIGZyb20gXCJuYXRpdmVzY3JpcHQtaW1hZ2VwaWNrZXJcIjsgLy8gaHR0cHM6Ly9naXRodWIuY29tL05hdGl2ZVNjcmlwdC9uYXRpdmVzY3JpcHQtaW1hZ2VwaWNrZXJcbmltcG9ydCAqIGFzIG1vbWVudCBmcm9tICdtb21lbnQnO1xuLy8gT3duIGxpYnJhcmllc1xuaW1wb3J0IHsgSW1hZ2VTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvaW1hZ2Uuc2VydmljZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlci9zcmMvcm91dGVyX3N0YXRlJztcbmltcG9ydCB7IFVybFNlZ21lbnQgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXIvc3JjL3VybF90cmVlJztcbmltcG9ydCB7IENhbGVuZGFyU2VydmljZSwgSUltYWdlQ2FsZW5kYXIgfSBmcm9tICcuLi9zZXJ2aWNlcy9jYWxlbmRhci5zZXJ2aWNlJztcbmltcG9ydCB7IEdyaWRMYXlvdXQgfSBmcm9tIFwidWkvbGF5b3V0cy9ncmlkLWxheW91dFwiO1xuaW1wb3J0IHsgTGFiZWwgfSBmcm9tIFwidWkvbGFiZWxcIjtcbmltcG9ydCB7IGFuZHJvaWQgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uL2FwcGxpY2F0aW9uJztcbmltcG9ydCB7IFNldHRpbmdzU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL3NldHRpbmdzLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiAnbnMtaW1hZ2Utc2VsZWN0JyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vaW1hZ2Utc2VsZWN0LmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9pbWFnZS1zZWxlY3QuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBJbWFnZVNlbGVjdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgcHVibGljIGlzTG9hZGluZyA9IHRydWVcbiAgICBwdWJsaWMgaW1hZ2VzOiBJSW1hZ2VDYWxlbmRhcltdO1xuICAgIEBWaWV3Q2hpbGQoJ3Njcm9sbFZpZXcnKSBzY3JvbGxWaWV3OiBFbGVtZW50UmVmXG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlckV4dGVuc2lvbnMsXG4gICAgICAgIHByaXZhdGUgaW1hZ2VTZXJ2aWNlOiBJbWFnZVNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgcGFnZVJvdXRlOiBQYWdlUm91dGUsXG4gICAgICAgIHByaXZhdGUgY2FsZW5kYXJTZXJ2aWNlOiBDYWxlbmRhclNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgc2V0dGluZ3M6IFNldHRpbmdzU2VydmljZVxuICAgICkgeyB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5wYWdlUm91dGUuYWN0aXZhdGVkUm91dGVcbiAgICAgICAgLnN3aXRjaE1hcCgoYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlKSA9PiBhY3RpdmF0ZWRSb3V0ZS51cmwpXG4gICAgICAgIC5zdWJzY3JpYmUoKHBhcmFtOiBVcmxTZWdtZW50W10pID0+IHtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5pbWFnZXMgPSB0aGlzLnNldHRpbmdzLmdldEltYWdlTGlzdCgpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcInNldHRpbmdzLmdldEltYWdlTGlzdDo6OjpcIiwgSlNPTi5zdHJpbmdpZnkodGhpcy5pbWFnZXMsIG51bGwsIDQpKTtcbiAgICB9XG5cbiAgICBuZXdJbWFnZSgpIHtcbiAgICAgICAgY29uc3QgY29udGV4dCA9IGltYWdlcGlja2VyLmNyZWF0ZSh7XG4gICAgICAgICAgICBtb2RlOiBcInNpbmdsZVwiIC8vIHVzZSBcIm11bHRpcGxlXCIgZm9yIG11bHRpcGxlIHNlbGVjdGlvblxuICAgICAgICB9KTtcblxuICAgICAgICBjb250ZXh0LmF1dGhvcml6ZSgpXG4gICAgICAgIC50aGVuKCgpID0+IGNvbnRleHQucHJlc2VudCgpKVxuICAgICAgICAudGhlbihzZWxlY3Rpb24gPT4ge1xuICAgICAgICAgICAgc2VsZWN0aW9uLmZvckVhY2goc2VsZWN0ZWQgPT4ge1xuICAgICAgICAgICAgICAgIC8vIHByb2Nlc3MgdGhlIHNlbGVjdGVkIGltYWdlXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWQuZ2V0SW1hZ2UoKS50aGVuKChpbWdTb3VyY2U6IEltYWdlU291cmNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHNhdmUgZmlsZSBpbnRvIGFwcCBkb2N1bWVudFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmltYWdlU2VydmljZS5zYXZlU2VsZWN0ZWRmaWxlKGltZ1NvdXJjZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwoJ2ltYWdlLWNyb3AnKTsgLy8gbmF2aWdhdGUgdG8gbmV4dCBzY3JlZW5cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy8gbGlzdC5pdGVtcyA9IHNlbGVjdGlvbjtcbiAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIC8vIHByb2Nlc3MgZXJyb3JcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgICAgIH0pOyAgICBcbiAgICB9XG5cbiAgICBsb2FkSW1hZ2UoaW1hZ2U6IElJbWFnZUNhbGVuZGFyKSB7XG4gICAgICAgIC8vIHN0b3JlIHNlbGVjdGVkIGltYWdlIHJlY29yZFxuICAgICAgICB0aGlzLmNhbGVuZGFyU2VydmljZS5zZWxlY3RDYWxlbmRhcihpbWFnZSk7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwoJ2ltYWdlLWNhbGVuZGFyJyk7XG4gICAgfVxuXG4gICAgbmV4dCgpIHtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybCgnaW1hZ2UtY3JvcCcpO1xuICAgIH1cblxuICAgIGdldE1vbnRoTmFtZShpbWFnZTpJSW1hZ2VDYWxlbmRhcikge1xuICAgICAgICByZXR1cm4gaW1hZ2UubGFzdE1vbnRoID8gbW9tZW50LnVuaXgoaW1hZ2UubGFzdE1vbnRoKS5mb3JtYXQoJ01NTU0nKSA6ICcnO1xuICAgIH1cbn1cbiJdfQ==