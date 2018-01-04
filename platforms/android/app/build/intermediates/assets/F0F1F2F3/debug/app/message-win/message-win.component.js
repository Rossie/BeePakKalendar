"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var MessageWinComponent = (function () {
    function MessageWinComponent() {
        this.message = '';
    }
    MessageWinComponent.prototype.ngOnInit = function () { };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], MessageWinComponent.prototype, "message", void 0);
    MessageWinComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-message-win',
            templateUrl: './message-win.component.html',
            styleUrls: ['./message-win.component.scss']
        }),
        __metadata("design:paramtypes", [])
    ], MessageWinComponent);
    return MessageWinComponent;
}());
exports.MessageWinComponent = MessageWinComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZS13aW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWVzc2FnZS13aW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlEO0FBUXpEO0lBSUU7UUFGUyxZQUFPLEdBQVUsRUFBRSxDQUFDO0lBRWIsQ0FBQztJQUVqQixzQ0FBUSxHQUFSLGNBQWEsQ0FBQztJQUpMO1FBQVIsWUFBSyxFQUFFOzt3REFBcUI7SUFGbEIsbUJBQW1CO1FBTi9CLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGlCQUFpQjtZQUMzQixXQUFXLEVBQUUsOEJBQThCO1lBQzNDLFNBQVMsRUFBRSxDQUFDLDhCQUE4QixDQUFDO1NBQzVDLENBQUM7O09BQ1csbUJBQW1CLENBUS9CO0lBQUQsMEJBQUM7Q0FBQSxBQVJELElBUUM7QUFSWSxrREFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnYXBwLW1lc3NhZ2Utd2luJyxcbiAgdGVtcGxhdGVVcmw6ICcuL21lc3NhZ2Utd2luLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbWVzc2FnZS13aW4uY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBNZXNzYWdlV2luQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBASW5wdXQoKSBtZXNzYWdlOnN0cmluZyA9ICcnO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7IH1cblxufVxuIl19