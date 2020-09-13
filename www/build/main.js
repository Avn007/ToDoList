webpackJsonp([2],{

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SignupPage = /** @class */ (function () {
    //passpattern = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    function SignupPage(navCtrl, navParams, formBuilder, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.storage = storage;
        this.navCtrl = navCtrl;
        function ageRangeValidator(control) {
            if (control.value !== undefined && (isNaN(control.value) || control.value < 10 || control.value > 90)) {
                return { 'age validator': true };
            }
            return null;
        }
        //   function passValidator(control: AbstractControl): { [key: string]: boolean } | null {
        //     if (control.value !== 'A-Za-z0-9?=.[!@#\$%\^&]') {
        //       return { 'password validator': true };
        //     }
        //     return null;
        // }
        this.authForm = formBuilder.group({
            username: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].pattern('[a-zA-Z]*'), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(5)])],
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(6)])],
            age: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].pattern('[0-9]*'), ageRangeValidator])],
            email: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].pattern('^[A-Z0-9a-z\\._%+-]+@([A-Za-z0-9-]+\\.)+[A-Za-z]{2,4}$')])],
            number: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].pattern('[0-9]*'), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].maxLength(10), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].min(6000000000), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(10)])]
        });
    }
    SignupPage.prototype.saveData = function () {
        var userData = {
            'username': this.in1,
            'password': this.in2,
            'age': this.in3,
            'email': this.in4,
            'number': this.in5
        };
        this.storage.set("user", userData);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"C:\Users\adity\todolist\src\pages\signup\signup.html"*/'<ion-header>\n  <ion-navbar color="dark">\n    <ion-title>Sign Up</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content style="background-color: rgb(89, 233, 209) !important;" padding>\n\n  <form [formGroup]="authForm">\n    <ion-item [ngClass]="{\'error-border\':!authForm.controls.username.valid && authForm.controls.username.touched}">\n        <ion-label floating>Username</ion-label>\n        <ion-input [(ngModel)]="in1" formControlName="username" type="text"></ion-input>\n    </ion-item>\n\n    <ion-item *ngIf="authForm.controls.username.hasError(\'required\') && authForm.controls.username.touched">\n        <p style="color: red">Field username is required!</p>\n    </ion-item>\n    <ion-item *ngIf="authForm.controls.username.hasError(\'pattern\') && authForm.controls.username.touched">\n        <p style="color: red">Only small and capital letters are allowed!</p>\n    </ion-item>        \n    <ion-item *ngIf="authForm.controls.username.hasError(\'minlength\') && authForm.controls.username.touched">\n        <p style="color: red">Minimum username length is 5!</p>\n    </ion-item>\n  \n    \n\n    <ion-item [ngClass]="{\'error-border\':!authForm.controls.password.valid && authForm.controls.password.touched}">\n        <ion-label floating>Password</ion-label>\n        <ion-input [(ngModel)]="in2" formControlName="password" type="password"></ion-input>\n    </ion-item>\n    <ion-item *ngIf="authForm.controls.password.hasError(\'required\') && authForm.controls.password.touched">\n        <p style="color: red">Field password is required!</p>\n    </ion-item>\n    <ion-item *ngIf="authForm.controls.password.hasError(\'minlength\') && authForm.controls.password.touched">\n        <p style="color: red">Minimum password length is 6!</p>\n    </ion-item> \n    <!-- <ion-item *ngIf="authForm.controls.password.hasError(\'pattern\') && authForm.controls.password.touched">\n      <p style="color: red">Must contain one special character and one number </p>\n   </ion-item>  -->\n    \n  \n\n  <ion-item [ngClass]="{\'error-border\':!authForm.controls.age.valid && authForm.controls.age.touched}">\n      <ion-label floating>Age</ion-label>\n      <ion-input [(ngModel)]="in3" formControlName="age" type="numbers"></ion-input>\n  </ion-item>\n\n  <ion-item *ngIf="authForm.controls.age.hasError(\'required\') && authForm.controls.age.touched">\n      <p style="color: red">Field age is required!</p>\n  </ion-item>\n  <ion-item *ngIf="authForm.controls.age.hasError(\'pattern\') && authForm.controls.age.touched">\n      <p style="color: red">Only numbers  are allowed!</p>\n  </ion-item>\n  <ion-item *ngIf="authForm.controls.age.hasError(\'age validator\') && authForm.controls.age.touched">\n      <p style="color: red">Sorry, only between 10 and 90 !</p>\n  </ion-item>  \n\n\n\n  <ion-item [ngClass]="{\'error-border\':!authForm.controls.email.valid && authForm.controls.email.touched}">\n      <ion-label floating>Email id</ion-label>\n      <ion-input [(ngModel)]="in4" formControlName="email" type="email"></ion-input>\n  </ion-item>\n\n  <ion-item *ngIf="authForm.controls.email.hasError(\'required\') && authForm.controls.email.touched">\n      <p style="color: red">Field email is required!</p>            \n  </ion-item>\n  <ion-item *ngIf="authForm.controls.email.hasError(\'pattern\') && authForm.controls.email.touched">\n      <p style="color: red">Email is invalid!</p>\n  </ion-item>\n  \n  \n  <ion-item [ngClass]="{\'error-border\':!authForm.controls.number.valid && authForm.controls.number.touched}">\n      <ion-label floating>Mobile Number</ion-label>\n      <ion-input [(ngModel)]="in5" formControlName="number" type="numbers"></ion-input>\n  </ion-item>\n  \n  <ion-item *ngIf="authForm.controls.number.hasError(\'required\') && authForm.controls.number.touched">\n      <p style="color: red">Field number is required!</p>            \n  </ion-item>\n  <ion-item *ngIf="authForm.controls.number.hasError(\'maxlength\') && authForm.controls.number.touched">\n      <p style="color: red">Mobile number should have 10 digits!</p>\n  </ion-item>\n  <ion-item *ngIf="authForm.controls.number.hasError(\'pattern\') && authForm.controls.number.touched">\n      <p style="color: red">Mobile number should have numbers only!</p>            \n  </ion-item>\n  <ion-item *ngIf="authForm.controls.number.hasError(\'minlength\') && authForm.controls.number.touched">\n      <p style="color: red">Mobile number should have 10 digits!</p>            \n  </ion-item>\n  <ion-item *ngIf="authForm.controls.number.hasError(\'min\') && authForm.controls.number.touched">\n      <p style="color: red">Mobile number starts wtih 6,7!</p>            \n  </ion-item>\n\n    <button ion-button full color="primary" [disabled]="!authForm.valid" style="margin-top: 20px;" type="button" (click)="saveData()">Register</button>\n  </form>\n</ion-content>\n'/*ion-inline-end:"C:\Users\adity\todolist\src\pages\signup\signup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], SignupPage);
    return SignupPage;
}());

// A-Za-z0-9?=.[!@#\$%\^&]
//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 112:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 112;

/***/ }),

/***/ 153:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/new/new.module": [
		276,
		1
	],
	"../pages/signup/signup.module": [
		275,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 153;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(155);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the NewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NewPage = /** @class */ (function () {
    function NewPage(navCtrl, navParams, http) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.http.get('https://jsonplaceholder.typicode.com/todos')
            .subscribe(function (res) {
            _this.todos = res.json();
            console.log(_this.todos);
        });
    }
    NewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-new',template:/*ion-inline-start:"C:\Users\adity\todolist\src\pages\new\new.html"*/'<!--\n  Generated template for the NewPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>new</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-card *ngFor="let todo of todos">\n    <ion-item>\n      <p> {{todo.title}} </p>\n    </ion-item>\n  </ion-card>\n\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\adity\todolist\src\pages\new\new.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
    ], NewPage);
    return NewPage;
}());

//# sourceMappingURL=new.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(223);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_signup_signup__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_todolist_todolist__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_http__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_new_new__ = __webpack_require__(199);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_todolist_todolist__["a" /* TodolistPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_new_new__["a" /* NewPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/new/new.module#NewPageModule', name: 'NewPage', segment: 'new', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_10__angular_http__["b" /* HttpModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_todolist_todolist__["a" /* TodolistPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_new_new__["a" /* NewPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_todolist_todolist__ = __webpack_require__(80);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, storage) {
        var _this = this;
        this.storage = storage;
        platform.ready().then(function () {
            statusBar.styleDefault();
            _this.storage.get('transfer').then(function (transfer) {
                if (transfer == true) {
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_todolist_todolist__["a" /* TodolistPage */];
                }
                else {
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */];
                }
            });
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\adity\todolist\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\adity\todolist\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signup_signup__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__todolist_todolist__ = __webpack_require__(80);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, storage) {
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.navCtrl = navCtrl;
    }
    HomePage.prototype.onSignUp = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__signup_signup__["a" /* SignupPage */]);
    };
    HomePage.prototype.confirm = function () {
        var _this = this;
        this.storage.get('user').then(function (val) {
            if (_this.check1 == null) {
                console.log("Enter details");
            }
            else if (val.username == _this.check1 && val.password == _this.check2) {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__todolist_todolist__["a" /* TodolistPage */]);
            }
            else if (val.username != _this.check1) {
                console.log("Username invalid");
            }
            else {
                console.log("Password invalid");
            }
        });
        this.storage.set('transfer', true);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\adity\todolist\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar color="dark">\n    <ion-title>\n      Login Page\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content style="background-color: rgb(221, 236, 83) !important;" padding>\n  <ion-item>\n    <ion-label floating>Username</ion-label>\n    <ion-input [(ngModel)]="check1" type="text"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label floating>Password</ion-label>\n    <ion-input [(ngModel)]="check2" type="password"></ion-input>\n  </ion-item>\n\n  <button ion-button full color="primary" type="button" (click)="confirm()">Login</button>\n  <button ion-button full color="secondary" type="button" (click)="onSignUp()">Sign Up</button>\n</ion-content>\n'/*ion-inline-end:"C:\Users\adity\todolist\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodolistPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the TodolistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// @IonicPage()
var TodolistPage = /** @class */ (function () {
    function TodolistPage(navCtrl, navParams, alert, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alert = alert;
        this.storage = storage;
        this.todos = [];
    }
    TodolistPage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get('todos').then(function (todos) {
            if (todos != null) {
                _this.todos = todos;
            }
        });
    };
    TodolistPage.prototype.addToDo = function () {
        var _this = this;
        var prompt = this.alert.create({
            title: 'Add ToDo',
            inputs: [{
                    name: 'title'
                }],
            buttons: [
                {
                    text: 'Cancel'
                },
                {
                    text: 'Add',
                    handler: function (data) {
                        _this.todos.push(data);
                        _this.storage.set('todos', _this.todos);
                    }
                }
            ]
        });
        prompt.present();
    };
    TodolistPage.prototype.delete = function (i) {
        this.todos.splice(i, 1);
        this.storage.set('todos', this.todos);
    };
    TodolistPage.prototype.logout = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
        this.storage.set('transfer', false);
    };
    TodolistPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-todolist',template:/*ion-inline-start:"C:\Users\adity\todolist\src\pages\todolist\todolist.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>To Do List</ion-title>\n    <ion-buttons end>\n        <button ion-button icon-only (click)="addToDo()"><ion-icon name="add"></ion-icon></button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content style="background-color: rgb(243, 197, 111) !important;" padding>\n\n    <ion-list>\n\n        <ion-item-sliding *ngFor="let todo of todos; let i=index">\n              <ion-item color="secondary">\n            {{todo.title}}\n              </ion-item>\n            <ion-item-options>\n                <button  color="danger" ion-button icon-only danger (click)="delete(i)">\n                    <ion-icon name="trash"></ion-icon>\n                </button>\n            </ion-item-options>\n\n        </ion-item-sliding>\n\n    </ion-list>\n\n    <button style="position: fixed; bottom: 20px; right: 20px" ion-button icon-only (click)="logout()"><ion-icon name="power"></ion-icon></button>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\adity\todolist\src\pages\todolist\todolist.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], TodolistPage);
    return TodolistPage;
}());

//# sourceMappingURL=todolist.js.map

/***/ })

},[200]);
//# sourceMappingURL=main.js.map