(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/alpha/alpha.component.css":
/*!*******************************************!*\
  !*** ./src/app/alpha/alpha.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".secondary-content {\n  float: right;\n  color: #ff0000;\n}\n"

/***/ }),

/***/ "./src/app/alpha/alpha.component.html":
/*!********************************************!*\
  !*** ./src/app/alpha/alpha.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n    <h3>{{title}}</h3>\n    <div class=\"row\">\n      <!-- <button  (click)=\"deleteFromService(objData._id)\" class=\"btn waves-effect waves-light btn-small red\" type=\"submit\" name=\"action\">delete\n        <i class=\"material-icons right\">delete</i>\n      </button> -->\n      <a (click)=\"goToForm( objData._id )\" class=\" btn-small waves-effect waves-light blue\">update<i class=\"material-icons blue right \">edit</i></a>\n      </div>\n<div class=\"row\">\n<h5>reviews</h5>\n</div>\n\n    <div class=\"row\">\n      <div *ngFor=\"let x of properties\"\n      class=\"col s12 hoverable z-depth-2\">\n        <table class=\"highlight\">\n            <thead>\n              <tr>\n                <h3>\n\n                  <i *ngIf=\"x.length > 4\" class=\"material-icons secondary-content\">whatshot</i>\n                </h3>\n                <th></th>\n                <th><p *ngIf=\"x.length === 0 \" >be the first to add one</p></th>\n                <th>\n                  <a\n                    (click)=\"goHome()\" class=\"btn-floating btn-large waves-effect waves-light\"><i class=\"material-icons blue \">home</i>\n                  </a>\n                </th>\n\n              </tr>\n              <tr>\n                <th>reviewer</th>\n                <th>stars</th>\n                <th>reviews</th>\n                <th></th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor =\"let y of x\">\n                <td>{{y.type}}</td>\n                <td>{{y.skills}}</td>\n                <td>{{y.desc}}</td>\n                <td></td>\n\n              </tr>\n            </tbody>\n          </table>\n      </div>\n    </div>\n\n    <p>sort by stars - descending, most stars on top</p>\n"

/***/ }),

/***/ "./src/app/alpha/alpha.component.ts":
/*!******************************************!*\
  !*** ./src/app/alpha/alpha.component.ts ***!
  \******************************************/
/*! exports provided: AlphaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlphaComponent", function() { return AlphaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlphaComponent = /** @class */ (function () {
    function AlphaComponent(_httpService, _router, _route) {
        var _this = this;
        this._httpService = _httpService;
        this._router = _router;
        this._route = _route;
        this._route.params
            .subscribe(function (params) {
            _this._httpService.getOne(params['id'])
                .subscribe(function (data) {
                if (!data) {
                    _this.goHome();
                    console.log("the data is null -- ", _this.objData);
                }
                else {
                    _this.objData = data;
                    // let thisArr = [data]
                    // thisArr.sort()
                    // console.log("thisArr ",thisArr)
                    console.log("got this data ", _this.objData);
                    _this.title = ('info for ' + _this.objData.name);
                    _this.properties = [
                        _this.objData.review
                    ];
                    console.log("this object ", _this.properties[0]);
                }
            });
        });
    }
    AlphaComponent.prototype.ngOnInit = function () {
        this.likeBtn = true;
    };
    AlphaComponent.prototype.goHome = function () {
        // this.objData = null
        this._router.navigate(['restaurants']);
    };
    AlphaComponent.prototype.goToForm = function (id) {
        this._httpService.fillFormInfo(id);
    };
    AlphaComponent.prototype.deleteFromService = function (obj) {
        var _this = this;
        this._httpService.destroy(obj)
            .subscribe(function (data) {
            _this.objData = data;
        });
        this.goHome();
    };
    AlphaComponent.prototype.deleteCommentFromService = function (id) {
        var _this = this;
        var obj = { _id: id };
        this._httpService.deleteComment(this.objData._id, obj)
            .subscribe(function (data) {
            _this.objData = data;
        });
        // this.
        console.log("3. deleted");
    };
    AlphaComponent.prototype.newlikeToService = function (id) {
        console.log("new like to service -- ");
        this.objData.likes++;
        this._httpService.editOne(this.objData._id, id)
            .subscribe(function (data) {
        });
        this.likeBtn = false;
    };
    AlphaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-alpha',
            template: __webpack_require__(/*! ./alpha.component.html */ "./src/app/alpha/alpha.component.html"),
            styles: [__webpack_require__(/*! ./alpha.component.css */ "./src/app/alpha/alpha.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], AlphaComponent);
    return AlphaComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _form_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form/form.component */ "./src/app/form/form.component.ts");
/* harmony import */ var _alpha_alpha_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./alpha/alpha.component */ "./src/app/alpha/alpha.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// import { PageNotFoundComponent } from './pagenotfound/pagenotfound.component';
var appRoutes = [
    { path: '', redirectTo: 'restaurants', pathMatch: 'full' },
    // {path: ':route', component: AppComponent },
    { path: 'restaurants', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"],
    },
    { path: 'update/:id', component: _form_form_component__WEBPACK_IMPORTED_MODULE_3__["FormComponent"] },
    { path: 'new', component: _form_form_component__WEBPACK_IMPORTED_MODULE_3__["FormComponent"] },
    { path: 'restaurants/:id', component: _alpha_alpha_component__WEBPACK_IMPORTED_MODULE_4__["AlphaComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.container {\n  margin: 0 auto;\n  max-width: 1280px;\n  width: 90%;\n  height: 100%;\n}\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav>\n  <div class=\"nav-wrapper\">\n    <div class=\"col s12\">\n        <a class=\"brand-logo center\">{{title}}</a>\n        <ul id=\"nav-mobile\" class=\"left hide-on-med-and-down\">\n            <li *ngFor=\"let x of routes\"><a [routerLink]=\"['', x.route ]\">{{x.name}}</a></li>\n          </ul>\n    </div>\n  </div>\n</nav>\n<div class=\"container\" >\n\n  <router-outlet></router-outlet>\n\n  <app-form *ngIf=\"editObj\" [homeEdit]=\"editObj\" ></app-form>\n\n\n\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(_httpService, _route) {
        this._httpService = _httpService;
        this.title = 'lets eat';
        this.routes = [
            { route: 'restaurants', name: 'home page' },
            { route: 'new', name: 'add new' },
        ];
    }
    AppComponent.prototype.ngOnInit = function () {
        console.log('being inted');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AppComponent.prototype, "newEdit", void 0);
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")],
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], AppComponent);
    return AppComponent;
}());

// ng s --port 4200 --host 0.0.0.0
// ng g s http


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _alpha_alpha_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./alpha/alpha.component */ "./src/app/alpha/alpha.component.ts");
/* harmony import */ var _form_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./form/form.component */ "./src/app/form/form.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _alpha_alpha_component__WEBPACK_IMPORTED_MODULE_8__["AlphaComponent"],
                _form_form_component__WEBPACK_IMPORTED_MODULE_9__["FormComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_2__["HttpModule"],
            ],
            providers: [_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());

// ng s --port 4200 --host 0.0.0.0
// ng g s http


/***/ }),

/***/ "./src/app/form/form.component.css":
/*!*****************************************!*\
  !*** ./src/app/form/form.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn{\n  color: grey;\n  background-color: white;\n\n}\n"

/***/ }),

/***/ "./src/app/form/form.component.html":
/*!******************************************!*\
  !*** ./src/app/form/form.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n    <div class=\"row\">\n      <p></p>\n      <button (click)=\"goHome()\"\n      class=\"btn waves-effect waves-light btn-small red\" name=\"edit\">cancel\n      <i class=\"material-icons right\">block</i>\n    </button>\n    <h3>{{title}}</h3>\n\n    <p>buttons dont disable, something to do with the name of the form being undefined</p>\n    </div>\n\n<div class=\"row hoverable z-depth-2 col s6\">\n    <form  #formData='ngForm'\n      class=\"col s6 \">\n      <div class=\"row\">\n      <!-- remove an input -->\n      <!-- <div *ngIf=\"!editFormBtn\"\n      class=\"row\"> -->\n\n        <div *ngIf=\"!editFormBtn\" class=\"input-field col s6\">\n\n          <label for=\"name\">name</label>\n\n          <input\n            [(ngModel)]=\"formObj.name\"\n            type=\"text\" name=\"formObj.name\" class=\"validate\" required minlength=\"3\" #name=\"ngModel\">\n\n          <span class=\"helper-text\" data-error=\"must be at least 3 characters\" data-success=\"valid name\"></span>\n          <span class=\"helper-text red\" *ngIf=\"errors\">{{ errors.name }}</span>\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"input-field col s6\">\n          <label for=\"name\">(type) name</label>\n          <input type=\"text\" name=\"formObj.type\" [(ngModel)]=\"formObj.type\" class=\"validate\" required minlength=\"3\" #type=\"ngModel\">\n          <span class=\"helper-text\" data-error=\"your name must be at least 3 characters\" data-success=\"valid name\"></span>\n          <span class=\"helper-text red\" *ngIf=\"errors\">{{ errors.type }}</span>\n        </div>\n      </div>\n\n      <div *ngIf=\"editFormBtn\" class=\"row\">\n        <div class=\"input-field col s6\">\n          <label for=\"name\">review</label>\n          <input type=\"text\" name=\"formObj.desc\" [(ngModel)]=\"formObj.desc\" class=\"validate\" required minlength=\"3\" #desc=\"ngModel\">\n          <span class=\"helper-text\" data-error=\"description must be at least 3 characters\" data-success=\"valid description\"></span>\n          <span class=\"helper-text red\" *ngIf=\"errors\">{{ errors.desc }}</span>\n        </div>\n      </div>\n\n      <div *ngIf=\"editFormBtn\" class=\"row\">\n        <div class=\"input-field col s1\">\n            <label>stars</label>\n        </div>\n        <div class=\"input-field col s4\">\n          <select name=\"formObj.skills\" [(ngModel)]=\"formObj.skills\" class=\"browser-default validate\"\n          required minlength=\"1\" maxlength=\"5\" #skills=\"ngModel\">\n            <option value=\"\" disabled selected>stars</option>\n            <option value=\"★☆☆☆☆\">★☆☆☆☆</option>\n            <option value=\"★★☆☆☆\">★★☆☆☆</option>\n            <option value=\"★★★☆☆\">★★★☆☆</option>\n            <option value=\"★★★★☆\">★★★★☆</option>\n            <option value=\"★★★★★\">★★★★★</option>\n          </select>\n          <span class=\"helper-text\" data-error=\"stars must be at least 1\" data-success=\"good\"></span>\n          <span class=\"helper-text red\" *ngIf=\"errors\">{{ errors }}</span>\n        </div>\n      </div>\n\n    </form>\n\n</div>\n\n<!-- buttons -->\n  <div class=\"row\">\n      <div *ngIf=\"formData.valid\"  class=\"col s12\">\n          <!-- this adds a new object even obside the form -->\n          <!-- create parent -->\n        <div class=\"col s4\">\n          <button (click)=\"newObjToService(formObj)\"\n\n          [disabled]=\"!formData.valid +  editFormBtn + homeEdit\"\n\n          class=\"btn waves-effect waves-light btn-small white\" type=\"submit\" name=\"action\">add\n          <i class=\"material-icons right\">add_box</i>\n        </button>\n      </div>\n\n        <!-- create child 1 -->\n      <div *ngIf=\"formData.valid\" class=\"col s4\">\n        <button (click)=\"newReview(formObj)\"\n        [disabled]=\" !editFormBtn  + !formData.valid\"\n        class=\"btn waves-effect waves-light btn-small white\" name=\"edit\">review\n          <i class=\"material-icons right\">edit</i>\n        </button>\n      </div>\n\n        <!-- edit -->\n      <div *ngIf=\"formData.valid\"  class=\"col s4\">\n        <button (click)=\"editFromService(formObj)\"\n        [disabled]=\"!homeEdit + !formData.valid\"\n        class=\"btn waves-effect waves-light btn-small white\" name=\"edit\">edit\n          <i class=\"material-icons right\">edit</i>\n        </button>\n      </div>\n\n      </div>\n    </div>\n\n  <!-- !editFormBtn + !name.valid + !type.valid + !desc.valid  -->\n\n      <!-- <div class=\"row\">\n        <i *ngIf=\"formObj.valid\"\n          class=\"material-icons\">\n          check\n        </i>\n      </div> -->\n"

/***/ }),

/***/ "./src/app/form/form.component.ts":
/*!****************************************!*\
  !*** ./src/app/form/form.component.ts ***!
  \****************************************/
/*! exports provided: FormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormComponent", function() { return FormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FormComponent = /** @class */ (function () {
    // reusable form for creating and editing
    function FormComponent(_httpService, _router, _route) {
        var _this = this;
        this._httpService = _httpService;
        this._router = _router;
        this._route = _route;
        this.formObj = {
            name: '', type: '',
            review: [{ type: '', desc: '', skills: '' }],
        };
        this._route.params
            .subscribe(function (params) {
            // edit object / add review or comment
            // if you want to bind the entire object by the _id to the form, then set this.forObj = data
            if ('id' in params) {
                // this.formObj = { review: [ { type:'', desc: '', skills: [] } ] }
                console.log("there is an id --- ", params.id);
                _this._httpService.getOne(params['id'])
                    .subscribe(function (data) {
                    _this.newEdit = data;
                    console.log("got this object -- ", _this.formObj);
                    _this.editFormBtn = true;
                    _this.homeEdit = null;
                    // this.addBtn = false
                    _this.title = ('write a review for ' + _this.newEdit.name);
                });
                // add
            }
            else {
                console.log('add form ');
                _this.title = 'add restaurant';
                _this.properties = ['add'];
                _this.addBtn = true;
                return false;
            }
        });
    }
    FormComponent.prototype.ngOnInit = function () {
        this.editFormBtn = false;
        this.addBtn = false;
        //editing from the home screen, nested compoent stuff
        if (this.homeEdit) {
            console.log("got this home edit ", this.homeEdit);
            this.formObj = this.homeEdit;
            console.log("home edit on form ", this.formObj);
            this.title = ("edit " + this.formObj.name);
        }
    };
    FormComponent.prototype.goHome = function () {
        if (this.homeEdit) {
            this.goToInfo(this.homeEdit._id);
        }
        else {
            this._router.navigate(['restaurants']);
        }
    };
    FormComponent.prototype.goToInfo = function (id) {
        this._httpService.getInfo(id);
    };
    FormComponent.prototype.newObjToService = function (obj) {
        var _this = this;
        var thisObj = { name: obj.name, type: obj.type };
        console.log("new obj to service -- " + obj);
        this._httpService.newObj(thisObj)
            .subscribe(function (data) {
            if ('errors' in data) {
                _this.errors = data['errors']['name'];
            }
            else {
                _this.formObj = data;
                console.log("part 2 new obj to service -- " + obj.name);
                _this.goHome();
            }
        });
        console.log("part 3 new obj to service -- " + obj.name);
        this._httpService.getAll();
        this.homeEdit = null;
    };
    FormComponent.prototype.newReview = function () {
        var _this = this;
        console.log("review from service -- ", this.formObj);
        // this._httpService.editOne(obj, id)
        this._httpService.addReview(this.newEdit._id, this.formObj)
            .subscribe(function (data) {
            console.log("part 2 edit obj to service -- " + data);
            if ('errors' in data) {
                _this.errors = data['errors']['type']['desc']['skills']['message'];
            }
            else {
                // this.formObj = data
                console.log("part 2 edit obj to service -- " + _this.formObj.name);
                _this.goHome();
            }
        });
        this._httpService.getAll();
        this.homeEdit = null;
    };
    FormComponent.prototype.newChildObj = function () {
        var _this = this;
        console.log("review from service -- ", this.formObj);
        // this._httpService.editOne(obj, id)
        this._httpService.addChildObj(this.newEdit._id, this.formObj)
            .subscribe(function (data) {
            console.log("part 2 edit obj to service -- " + data);
            if ('errors' in data) {
                _this.errors = data['errors']['name'];
            }
            else {
                // this.formObj = data
                console.log("part 2 edit obj to service -- " + _this.formObj.name);
                _this.goHome();
            }
        });
        this._httpService.getAll();
    };
    FormComponent.prototype.editFromService = function () {
        var _this = this;
        // let editObj = { review: [ { type:this.formObj.type, desc: this.formObj.desc, skills: this.formObj.skills } ] }
        console.log("edit from service -- ", this.formObj);
        // this._httpService.editOne(obj, id)
        this._httpService.editOne(this.formObj._id, this.formObj)
            .subscribe(function (data) {
            console.log("part 2 edit obj to service -- " + data);
            if ('errors' in data) {
                _this.errors = data['errors']['name'];
            }
            else {
                // this.formObj = data
                console.log("part 2 edit obj to service -- " + _this.formObj.name);
                // this.goHome()
            }
        });
        this.goToInfo(this.formObj._id);
        this.homeEdit = null;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FormComponent.prototype, "homeEdit", void 0);
    FormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-form',
            template: __webpack_require__(/*! ./form.component.html */ "./src/app/form/form.component.html"),
            styles: [__webpack_require__(/*! ./form.component.css */ "./src/app/form/form.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], FormComponent);
    return FormComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".secondary-content {\n  float: right;\n  color: #ff0000;\n}\n"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n    <div class=\"row\">\n        <p>{{title}}</p>\n      <button [routerLink]=\"['', 'new' ]\"\n        class=\"btn waves-effect waves-light btn-small blue\" name=\"add\">add\n          <i class=\"material-icons right\">add</i>\n      </button>\n      <p>{{now}}</p>\n\n    </div>\n\n    <table class=\"highlight z-depth-2\">\n        <thead>\n          <tr>\n            <h3>\n              list\n            </h3>\n          </tr>\n          <tr>\n              <th>name</th>\n              <th>type</th>\n              <th>action</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let x of allObjects\">\n            <td><a>{{x.name}}</a>\n              timestamp - {{x.createdAt}}\n              <i *ngIf=\"x.review.length > 4\" class=\"material-icons secondary-content\">whatshot</i></td>\n            <td>{{x.type}}</td>\n            <td>\n              <button\n              (click)=\"goToInfo( x._id )\"\n              class=\" btn-small waves-effect waves-light btn-flat\">info<i class=\"material-icons right  \">info</i></button>\n\n              <a (click)=\"goToForm( x )\" class=\" btn-small waves-effect waves-light blue\">update<i class=\"material-icons blue right \">edit</i></a>\n\n              <a\n              (click)=\"deleteFromService(x._id)\" class=\" waves-effect waves-purple secondary-content\"><i class=\" waves-effect waves material-icons \">delete</i></a>\n\n            </td>\n          </tr>\n\n        </tbody>\n      </table>\n\n      <app-form *ngIf=\"editObj\" [homeEdit]=\"editObj\" ></app-form>\n\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = /** @class */ (function () {
    function HomeComponent(_httpService, _router) {
        this._httpService = _httpService;
        this._router = _router;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.getAllFromService();
        this.objData = null;
        this.now = new Date().getTime();
    };
    HomeComponent.prototype.goToForm = function (obj) {
        var _this = this;
        console.log("home edit form ", obj);
        this._httpService.getOne(obj._id)
            .subscribe(function (data) {
            console.log("home edit data ", data);
            _this.editObj = data;
        });
    };
    HomeComponent.prototype.goToInfo = function (id) {
        this._httpService.getInfo(id);
    };
    HomeComponent.prototype.getAllFromService = function () {
        var _this = this;
        this._httpService.getAll()
            .subscribe(function (data) {
            console.log("getAll data", data);
            _this.allObjects = data;
            _this.editFormBtn = false;
        });
    };
    HomeComponent.prototype.deleteFromService = function (obj) {
        var _this = this;
        this._httpService.destroy(obj)
            .subscribe(function (data) {
            _this.allObjects = data;
            _this.objData = null;
        });
        this.getAllFromService();
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/http.service.ts":
/*!*********************************!*\
  !*** ./src/app/http.service.ts ***!
  \*********************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HttpService = /** @class */ (function () {
    function HttpService(_http, _router) {
        this._http = _http;
        this._router = _router;
    }
    HttpService.prototype.getAll = function () {
        console.log('getAll from service route');
        return this._http.get('/main');
    };
    HttpService.prototype.getOne = function (id) {
        console.log('getOne route ' + id);
        return this._http.get('/main/' + id);
    };
    HttpService.prototype.newObj = function (obj) {
        console.log('newObject from service route --- ' + obj.name);
        return this._http.post('/main', obj);
    };
    // newComment(obj, id) {
    //   return this._http.put('/main/'+ obj, id)
    // }
    // adding to an existing
    HttpService.prototype.addReview = function (id, obj) {
        console.log('edit from service route --- ' + id);
        return this._http.put('/main/' + id, obj);
    };
    HttpService.prototype.addChildObj = function (id, obj) {
        console.log('edit from service route --- ' + id);
        return this._http.put('/main/c/' + id, obj);
    };
    // editing
    HttpService.prototype.editOne = function (id, obj) {
        console.log('edit from service route --- ' + id, obj);
        return this._http.patch('/main/e/' + id, obj);
    };
    HttpService.prototype.destroy = function (id) {
        console.log('delete from service route --- ' + id);
        return this._http.delete('/main/' + id);
    };
    HttpService.prototype.deleteComment = function (id, Id) {
        console.log('delete comment from service route --- ' + id, Id);
        return this._http.post('/main/com/' + id, Id);
    };
    HttpService.prototype.deleteChildObj2 = function (id, Id) {
        console.log('delete comment from service route --- ' + id, Id);
        return this._http.post('/main/obj/' + id, Id);
    };
    // switching router outlets
    HttpService.prototype.getInfo = function (id) {
        console.log('get info from service route --- ');
        this._router.navigate(['restaurants', id]);
    };
    HttpService.prototype.fillFormInfo = function (id) {
        console.log('fill form from service route --- ', id);
        this._router.navigate(['update', id]);
    };
    HttpService.prototype.fillEditFormInfo = function (id) {
        console.log('fill form from service route --- ', id);
        this._router.navigate(['', id]);
    };
    HttpService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], HttpService);
    return HttpService;
}()); // last closing brace ----------



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/test/Desktop/💎.nosync/blankAngular 2/public/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map