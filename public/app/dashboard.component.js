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
var core_1 = require("@angular/core");
var hero_service_1 = require("./hero.service");
var angular2_token_service_1 = require("angular2-token.service");
var DashboardComponent = (function () {
    // @Input() private _output: any;
    function DashboardComponent(heroService, _tokenService) {
        this.heroService = heroService;
        this._tokenService = _tokenService;
        this.heroes = [];
        this._registerData = {};
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.heroService.getHeroes()
            .then(function (heroes) { return _this.heroes = heroes; });
    };
    // Submit Data to Backend
    DashboardComponent.prototype.onSubmit = function () {
        // this._output = null;
        var _this = this;
        console.log(this._registerData);
        this._tokenService.registerAccount(this._registerData).subscribe(function (res) {
            _this._registerData = {};
            console.log('SUCCESS :: ' + res);
            // this._output        = res;
        }, function (error) {
            _this._registerData = {};
            console.log('ERROR :: ' + error);
            // this._output        = error;
        });
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'my-dashboard',
        templateUrl: 'dashboard.component.html',
        styleUrls: ['dashboard.component.css']
    }),
    __metadata("design:paramtypes", [hero_service_1.HeroService, typeof (_a = typeof angular2_token_service_1.Angular2TokenService !== "undefined" && angular2_token_service_1.Angular2TokenService) === "function" && _a || Object])
], DashboardComponent);
exports.DashboardComponent = DashboardComponent;
var _a;
//# sourceMappingURL=dashboard.component.js.map