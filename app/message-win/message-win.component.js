"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var MessageWinComponent = (function () {
    function MessageWinComponent() {
        this.message = '';
    }
    MessageWinComponent.prototype.ngOnInit = function () {
    };
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
