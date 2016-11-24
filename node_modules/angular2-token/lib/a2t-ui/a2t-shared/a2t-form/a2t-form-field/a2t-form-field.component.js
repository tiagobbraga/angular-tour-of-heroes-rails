"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var _1 = require('../../../');
var A2tFormFieldComponent = (function () {
    function A2tFormFieldComponent() {
    }
    A2tFormFieldComponent.prototype.ngOnInit = function () {
        this._control = this.form.controls[this.question.key];
    };
    Object.defineProperty(A2tFormFieldComponent.prototype, "isValid", {
        get: function () {
            return this._control.valid;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.Input(), 
        __metadata('design:type', _1.BaseField)
    ], A2tFormFieldComponent.prototype, "question", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', forms_1.FormGroup)
    ], A2tFormFieldComponent.prototype, "form", void 0);
    A2tFormFieldComponent = __decorate([
        core_1.Component({
            selector: 'a2t-form-field',
            templateUrl: 'a2t-form-field.component.html',
            styleUrls: ['a2t-form-field.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], A2tFormFieldComponent);
    return A2tFormFieldComponent;
}());
exports.A2tFormFieldComponent = A2tFormFieldComponent;
//# sourceMappingURL=a2t-form-field.component.js.map