"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var settings = require("application-settings");
var CloseableComponent = (function () {
    function CloseableComponent() {
        this.onClosed = new core_1.EventEmitter();
        this.closed = false;
        this.settingsName = '';
    }
    CloseableComponent.prototype.ngOnInit = function () {
        if (this.settingsName) {
            this.closed = settings.getBoolean(this.settingsName, false);
        }
    };
    CloseableComponent.prototype.close = function () {
        this.closed = true;
        if (this.settingsName) {
            settings.setBoolean(this.settingsName, true);
        }
        this.onClosed.emit(this.closed);
    };
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], CloseableComponent.prototype, "onClosed", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], CloseableComponent.prototype, "closed", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], CloseableComponent.prototype, "settingsName", void 0);
    CloseableComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-closeable',
            templateUrl: './closeable.component.html',
            styleUrls: ['./closeable.component.scss']
        }),
        __metadata("design:paramtypes", [])
    ], CloseableComponent);
    return CloseableComponent;
}());
exports.CloseableComponent = CloseableComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xvc2VhYmxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNsb3NlYWJsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBK0U7QUFDL0UsK0NBQWlEO0FBUWpEO0lBS0U7UUFKVSxhQUFRLEdBQTBCLElBQUksbUJBQVksRUFBVyxDQUFDO1FBQy9ELFdBQU0sR0FBVyxLQUFLLENBQUM7UUFDdkIsaUJBQVksR0FBVSxFQUFFLENBQUM7SUFFbEIsQ0FBQztJQUVqQixxQ0FBUSxHQUFSO1FBQ0UsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7WUFDdEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDOUQsQ0FBQztJQUNILENBQUM7SUFFRCxrQ0FBSyxHQUFMO1FBQ0UsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDbkIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7WUFDdEIsUUFBUSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQy9DLENBQUM7UUFDRCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQWxCUztRQUFULGFBQU0sRUFBRTtrQ0FBVyxtQkFBWTt3REFBd0M7SUFDL0Q7UUFBUixZQUFLLEVBQUU7O3NEQUF3QjtJQUN2QjtRQUFSLFlBQUssRUFBRTs7NERBQTBCO0lBSHZCLGtCQUFrQjtRQU45QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxlQUFlO1lBQ3pCLFdBQVcsRUFBRSw0QkFBNEI7WUFDekMsU0FBUyxFQUFFLENBQUMsNEJBQTRCLENBQUM7U0FDMUMsQ0FBQzs7T0FDVyxrQkFBa0IsQ0FvQjlCO0lBQUQseUJBQUM7Q0FBQSxBQXBCRCxJQW9CQztBQXBCWSxnREFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgKiBhcyBzZXR0aW5ncyBmcm9tIFwiYXBwbGljYXRpb24tc2V0dGluZ3NcIjtcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnYXBwLWNsb3NlYWJsZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9jbG9zZWFibGUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jbG9zZWFibGUuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBDbG9zZWFibGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBAT3V0cHV0KCkgb25DbG9zZWQ6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcbiAgQElucHV0KCkgY2xvc2VkOmJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgc2V0dGluZ3NOYW1lOnN0cmluZyA9ICcnO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7IFxuICAgIGlmICh0aGlzLnNldHRpbmdzTmFtZSkge1xuICAgICAgdGhpcy5jbG9zZWQgPSBzZXR0aW5ncy5nZXRCb29sZWFuKHRoaXMuc2V0dGluZ3NOYW1lLCBmYWxzZSk7XG4gICAgfVxuICB9XG5cbiAgY2xvc2UoKXtcbiAgICB0aGlzLmNsb3NlZCA9IHRydWU7XG4gICAgaWYgKHRoaXMuc2V0dGluZ3NOYW1lKSB7XG4gICAgICBzZXR0aW5ncy5zZXRCb29sZWFuKHRoaXMuc2V0dGluZ3NOYW1lLCB0cnVlKTtcbiAgICB9XG4gICAgdGhpcy5vbkNsb3NlZC5lbWl0KHRoaXMuY2xvc2VkKTtcbiAgfVxufVxuIl19