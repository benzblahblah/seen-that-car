webpackJsonp([1],{

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExplorePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
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
 * Generated class for the ExplorePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ExplorePage = (function () {
    function ExplorePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ExplorePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ExplorePage');
    };
    return ExplorePage;
}());
ExplorePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-explore',template:/*ion-inline-start:"/Users/ntkbb/Desktop/wsp/Ready/src/pages/explore/explore.html"*/'<!--\n\n  Generated template for the ExplorePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n    <ion-icon name="menu"></ion-icon>\n\n  </button>\n\n        <ion-title>\n\n            Explore\n\n        </ion-title>\n\n        <ion-buttons end>\n\n            <button ion-button icon-only>\n\n      <ion-icon name="buffer"></ion-icon>\n\n    </button>\n\n        </ion-buttons>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content padding id="page3">\n\n    <ion-card *ngIf="photo">\n\n        <img [src]="photo" />\n\n    </ion-card>\n\n    <ion-list id="explore-list10">\n\n        <ion-searchbar placeholder="Search" name="" id="explore-search2"></ion-searchbar>\n\n        <ion-item color="none" id="explore-list-item19">\n\n            <ion-avatar item-left>\n\n                <img src="assets/img/vCM67rRyCGzbRxYbIkOQ_dave.jpg" />\n\n            </ion-avatar>\n\n            <h2>\n\n                Dave Pocoro\n\n            </h2>\n\n        </ion-item>\n\n    </ion-list>\n\n    <div>\n\n        <img src="assets/img/PKS9kU1dSxy4whILYvtT_bad-drivers-7.jpg" style="display:block;width:100%;height:auto;margin-left:auto;margin-right:auto;" />\n\n    </div>\n\n    <ion-list id="explore-list12">\n\n        <ion-item id="explore-list-item-container2">\n\n            <div id="explore-markdown2" class="show-list-numbers-and-dots">\n\n                <p style="margin-top:0px;color:#000000;">\n\n                    Check this, what just he did?\n\n                </p>\n\n            </div>\n\n        </ion-item>\n\n    </ion-list>\n\n    <h5 id="explore-heading1" style="color:#000000;font-weight:600;">\n\n        Loading data...\n\n    </h5>\n\n</ion-content>'/*ion-inline-end:"/Users/ntkbb/Desktop/wsp/Ready/src/pages/explore/explore.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], ExplorePage);

//# sourceMappingURL=explore.js.map

/***/ }),

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GaragePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
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
 * Generated class for the GaragePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var GaragePage = (function () {
    function GaragePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    GaragePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad GaragePage');
    };
    return GaragePage;
}());
GaragePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-garage',template:/*ion-inline-start:"/Users/ntkbb/Desktop/wsp/Ready/src/pages/garage/garage.html"*/'<!DOCTYPE html>\n\n<!--\n\n  Generated template for the GaragePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n        <ion-title>\n\n            Garage\n\n        </ion-title>\n\n        <ion-buttons end>\n\n            <button ion-button icon-only>\n\n        <ion-icon name="add"></ion-icon>\n\n      </button>\n\n        </ion-buttons>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content padding id="page5">\n\n    <ion-list id="garage-list7">\n\n        <ion-item-sliding>\n\n            <ion-item color="none" id="garage-list-item13">\n\n                <ion-icon name="car" item-left></ion-icon>\n\n                Alphard Vellfire\n\n            </ion-item>\n\n            <ion-item-options side="left">\n\n                <button ion-button color="assertive">\n\n          Delete\n\n        </button>\n\n            </ion-item-options>\n\n        </ion-item-sliding>\n\n        <ion-item-sliding>\n\n            <ion-item color="none" id="garage-list-item16">\n\n                <ion-icon name="car" item-left></ion-icon>\n\n                Porsche 911\n\n            </ion-item>\n\n            <ion-item-options side="left">\n\n                <button ion-button color="assertive">\n\n          Delete\n\n        </button>\n\n            </ion-item-options>\n\n        </ion-item-sliding>\n\n        <ion-item-sliding>\n\n            <ion-item color="none" id="garage-list-item14">\n\n                <ion-icon name="car" item-left></ion-icon>\n\n                Toyota Altis\n\n            </ion-item>\n\n            <ion-item-options side="left">\n\n                <button ion-button color="assertive">\n\n          Delete\n\n        </button>\n\n            </ion-item-options>\n\n        </ion-item-sliding>\n\n        <ion-item-sliding>\n\n            <ion-item color="none" id="garage-list-item15">\n\n                <ion-icon name="car" item-left></ion-icon>\n\n                Toyota Supra\n\n            </ion-item>\n\n            <ion-item-options side="left">\n\n                <button ion-button color="assertive">\n\n          Delete\n\n        </button>\n\n            </ion-item-options>\n\n        </ion-item-sliding>\n\n    </ion-list>\n\n</ion-content>'/*ion-inline-end:"/Users/ntkbb/Desktop/wsp/Ready/src/pages/garage/garage.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], GaragePage);

//# sourceMappingURL=garage.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__ = __webpack_require__(476);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(351);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthService = (function () {
    function AuthService(storage) {
        var _this = this;
        this.storage = storage;
        this.authNotifier = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__["ReplaySubject"](1);
        console.log('AuthService');
        // check if there is a token in storage
        this.storage.get('token').then(function (token) {
            if (token != null) {
                // broadcast that we are logged in
                _this.authNotifier.next(true);
            }
        });
    }
    AuthService.prototype.login = function (credentials) {
        var _this = this;
        this._checkCredentials(credentials).then(function (token) {
            // save token to storage
            _this.storage.set('token', token);
            // broadcast that we are now logged in
            _this.authNotifier.next(true);
        });
    };
    AuthService.prototype._checkCredentials = function (credentials) {
        // here you would of course check the credentials for real
        // probably using a http request or a library of the service
        // you are authenticating against
        return new Promise(function (resolve, reject) {
            // in this example we just resolve with a token
            resolve({ token: '123' });
        });
    };
    AuthService.prototype.logout = function () {
        // remove token from storage
        this.storage.remove('token');
        // broadcast that we are now logged out
        this.authNotifier.next(false);
    };
    return AuthService;
}());
AuthService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
], AuthService);

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 181:
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
webpackEmptyAsyncContext.id = 181;

/***/ }),

/***/ 224:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/explore/explore.module": [
		225
	],
	"../pages/filtering/filtering.module": [
		226
	],
	"../pages/friends/friends.module": [
		227
	],
	"../pages/garage/garage.module": [
		229
	],
	"../pages/placeholder/placeholder.module": [
		230
	],
	"../pages/profile/profile.module": [
		232
	],
	"../pages/special/special.module": [
		727,
		0
	],
	"../pages/tabs/tabs.module": [
		244
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 224;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExplorePageModule", function() { return ExplorePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__explore__ = __webpack_require__(127);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ExplorePageModule = (function () {
    function ExplorePageModule() {
    }
    return ExplorePageModule;
}());
ExplorePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__explore__["a" /* ExplorePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__explore__["a" /* ExplorePage */]),
        ],
    })
], ExplorePageModule);

//# sourceMappingURL=explore.module.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilteringPageModule", function() { return FilteringPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__filtering__ = __webpack_require__(377);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FilteringPageModule = (function () {
    function FilteringPageModule() {
    }
    return FilteringPageModule;
}());
FilteringPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__filtering__["a" /* FilteringPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__filtering__["a" /* FilteringPage */]),
        ],
    })
], FilteringPageModule);

//# sourceMappingURL=filtering.module.js.map

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FriendsPageModule", function() { return FriendsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__friends__ = __webpack_require__(228);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FriendsPageModule = (function () {
    function FriendsPageModule() {
    }
    return FriendsPageModule;
}());
FriendsPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__friends__["a" /* FriendsPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__friends__["a" /* FriendsPage */]),
        ],
    })
], FriendsPageModule);

//# sourceMappingURL=friends.module.js.map

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FriendsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
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
 * Generated class for the FriendsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FriendsPage = (function () {
    function FriendsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    FriendsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FriendsPage');
    };
    return FriendsPage;
}());
FriendsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-friends',template:/*ion-inline-start:"/Users/ntkbb/Desktop/wsp/Ready/src/pages/friends/friends.html"*/'<!--\n\n  Generated template for the FriendsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n        <ion-title>\n\n            Friends\n\n        </ion-title>\n\n        <ion-buttons end>\n\n            <button ion-button icon-only>\n\n        <ion-icon name="add"></ion-icon>\n\n      </button>\n\n        </ion-buttons>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content padding id="page2">\n\n    <ion-list id="friends-list9">\n\n        <ion-item color="none" id="friends-list-item11">\n\n            <ion-avatar item-left>\n\n                <img src="assets/img/619VpxuQfGQaWDYyAzKA_Grumpy_Cat.jpg" />\n\n            </ion-avatar>\n\n            <h2>\n\n                Gavin\n\n            </h2>\n\n        </ion-item>\n\n        <ion-item color="none" id="friends-list-item17">\n\n            <ion-avatar item-left>\n\n                <img src="assets/img/10ceJaViQimRtfslZ2qN_Meme.jpg" />\n\n            </ion-avatar>\n\n            <h2>\n\n                Bryan\n\n            </h2>\n\n        </ion-item>\n\n        <ion-item color="none" id="friends-list-item18">\n\n            <ion-avatar item-left>\n\n                <img src="assets/img/PZOXS2FFTIqLySac46w1_Bill.jpg" />\n\n            </ion-avatar>\n\n            <h2>\n\n                Jet\n\n            </h2>\n\n        </ion-item>\n\n    </ion-list>\n\n</ion-content>'/*ion-inline-end:"/Users/ntkbb/Desktop/wsp/Ready/src/pages/friends/friends.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], FriendsPage);

//# sourceMappingURL=friends.js.map

/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GaragePageModule", function() { return GaragePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__garage__ = __webpack_require__(128);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var GaragePageModule = (function () {
    function GaragePageModule() {
    }
    return GaragePageModule;
}());
GaragePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__garage__["a" /* GaragePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__garage__["a" /* GaragePage */]),
        ],
    })
], GaragePageModule);

//# sourceMappingURL=garage.module.js.map

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaceholderPageModule", function() { return PlaceholderPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__placeholder__ = __webpack_require__(231);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PlaceholderPageModule = (function () {
    function PlaceholderPageModule() {
    }
    return PlaceholderPageModule;
}());
PlaceholderPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__placeholder__["a" /* PlaceholderPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__placeholder__["a" /* PlaceholderPage */]),
        ],
    })
], PlaceholderPageModule);

//# sourceMappingURL=placeholder.module.js.map

/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlaceholderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
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
 * Generated class for the PlaceholderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PlaceholderPage = (function () {
    function PlaceholderPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PlaceholderPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PlaceholderPage');
    };
    return PlaceholderPage;
}());
PlaceholderPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-placeholder',template:/*ion-inline-start:"/Users/ntkbb/Desktop/wsp/Ready/src/pages/placeholder/placeholder.html"*/'<!--\n  Generated template for the PlaceholderPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>placeholder</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/ntkbb/Desktop/wsp/Ready/src/pages/placeholder/placeholder.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], PlaceholderPage);

//# sourceMappingURL=placeholder.js.map

/***/ }),

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile__ = __webpack_require__(233);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProfilePageModule = (function () {
    function ProfilePageModule() {
    }
    return ProfilePageModule;
}());
ProfilePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */]),
        ],
    })
], ProfilePageModule);

//# sourceMappingURL=profile.module.js.map

/***/ }),

/***/ 233:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(84);
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
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProfilePage = (function () {
    function ProfilePage(navCtrl, navParams, afAuth) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afAuth = afAuth;
        this.userAuth();
    }
    ProfilePage.prototype.userAuth = function () {
        var _this = this;
        this.afAuth.authState.subscribe(function (user) {
            if (!user) {
                _this.user == null;
                return;
            }
            _this.user = user;
            _this.user.displayName;
        });
    };
    ProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilePage');
    };
    return ProfilePage;
}());
ProfilePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-profile',template:/*ion-inline-start:"/Users/ntkbb/Desktop/wsp/Ready/src/pages/profile/profile.html"*/'<!--\n\n  Generated template for the ProfilePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n        <ion-title>\n\n            Profile\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content padding id="page4">\n\n    <ion-list id="profile-list2">\n\n        <ion-item color="none" id="profile-list-item1">\n\n            <ion-thumbnail item-left>\n\n                <img src="assets/img/2qFApxNcR4qVwdG49CWd_Gavin.jpg" />\n\n            </ion-thumbnail>\n\n            <h2 *ngIf="user != null">\n\n\n\n                {{ user.displayName }}\n\n                <!-- Benz Natthakul -->\n\n            </h2>\n\n        </ion-item>\n\n        <ion-item-divider color="light" id="profile-list-item-divider3">\n\n            Car History\n\n        </ion-item-divider>\n\n    </ion-list>\n\n    <ion-list id="profile-list4">\n\n        <ion-item color="none" id="profile-list-item9">\n\n            Lamborghini\n\n            <ion-note item-right></ion-note>\n\n        </ion-item>\n\n        <ion-item color="none" id="profile-list-item10">\n\n            Mercedes-Benz\n\n            <ion-note item-right></ion-note>\n\n        </ion-item>\n\n        <ion-item color="none" id="profile-list-item8">\n\n            Toyota\n\n            <ion-note item-right></ion-note>\n\n        </ion-item>\n\n    </ion-list>\n\n</ion-content>'/*ion-inline-end:"/Users/ntkbb/Desktop/wsp/Ready/src/pages/profile/profile.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */]])
], ProfilePage);

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 244:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageModule", function() { return TabsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs__ = __webpack_require__(407);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TabsPageModule = (function () {
    function TabsPageModule() {
    }
    return TabsPageModule;
}());
TabsPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__tabs__["a" /* TabsPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tabs__["a" /* TabsPage */]),
        ],
    })
], TabsPageModule);

//# sourceMappingURL=tabs.module.js.map

/***/ }),

/***/ 245:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CapturePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_media_capture__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__placeholder_placeholder__ = __webpack_require__(231);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { NavController } from 'ionic-angular';





var CapturePage = (function () {
    function CapturePage(alerCtrl, navCtrl, camera, navParams, mediaCapture) {
        this.alerCtrl = alerCtrl;
        this.navCtrl = navCtrl;
        this.camera = camera;
        this.navParams = navParams;
        this.mediaCapture = mediaCapture;
    }
    CapturePage.prototype.recordVideo = function () {
        var _this = this;
        var confirm = this.alerCtrl.create({
            title: 'Record the clip?',
            message: 'Do you agree to allow us to use your camera?',
            buttons: [
                {
                    text: 'Disagree',
                    handler: function () {
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: 'Agree',
                    handler: function () {
                        console.log('Agree clicked');
                        var options = {
                            quality: 50,
                            duration: 15
                        };
                        _this.mediaCapture.captureVideo(options).then(function (data) { return console.log(data); }, function (err) { return console.error(err); });
                    }
                }
            ]
        });
        confirm.present();
    };
    CapturePage.prototype.CapturePic = function () {
        var _this = this;
        var confirm = this.alerCtrl.create({
            title: 'Take a photo?',
            message: 'Do you agree to allow us to use your camera?',
            buttons: [
                {
                    text: 'Disagree',
                    handler: function () {
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: 'Agree',
                    handler: function () {
                        console.log('Agree clicked');
                        var options = {
                            quality: 50,
                            destinationType: _this.camera.DestinationType.FILE_URI,
                            encodingType: _this.camera.EncodingType.JPEG,
                            mediaType: _this.camera.MediaType.PICTURE,
                            correctOrientation: true,
                            saveToPhotoAlbum: true
                        };
                        _this.camera.getPicture(options).then(function (imageData) {
                            // imageData is either a base64 encoded string or a file URI
                            // If it's base64:
                            _this.base64Image = 'data:image/jpeg;base64,' + imageData;
                            _this.photo = _this.base64Image;
                        }, function (err) {
                            // Handle error
                        });
                        // Once user capture the image then,
                        // photo will be in the placeholder and automate license is simultaneously called.
                        // Move to the form page (placeholder) that allow user to fill-in or edit the info before saving.
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__placeholder_placeholder__["a" /* PlaceholderPage */]);
                    }
                }
            ]
        });
        confirm.present();
    };
    CapturePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CapturePage');
    };
    return CapturePage;
}());
CapturePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-capture',template:/*ion-inline-start:"/Users/ntkbb/Desktop/wsp/Ready/src/pages/capture/capture.html"*/'<!--\n\n  Generated template for the CapturePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n    <ion-icon name="menu"></ion-icon>\n\n  </button>\n\n        <ion-title>\n\n            Capture\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content padding id="page8">\n\n    <div class="spacer" style="height:50px;" id="capture-spacer5"></div>\n\n    <button id="capture-button9" ion-button clear color="positive" block>\n\n  <ion-icon name="car"></ion-icon>\n\n</button>\n\n    <h5 id="capture-heading2" style="color:#000000;text-align:center;">\n\n        Take some cars here!\n\n    </h5>\n\n    <div class="spacer" style="height:50px;" id="capture-spacer6"></div>\n\n\n\n    <button id="capture-button8" ion-button color="primary" block icon-left (click)="CapturePic()"> <ion-icon name="camera"></ion-icon> Tap for photo</button>\n\n    <button id="capture-button9" ion-button color="secondary" block icon-left (click)="recordVideo()"> <ion-icon name="camera"></ion-icon> Tap for video</button>\n\n    <!-- <button id="capture-button8" ion-button color="positive" block icon-left>\n\n  <ion-icon name="camera"></ion-icon>\n\n  Tap for photo or hold for video.\n\n</button> -->\n\n\n\n</ion-content>'/*ion-inline-end:"/Users/ntkbb/Desktop/wsp/Ready/src/pages/capture/capture.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_media_capture__["a" /* MediaCapture */]])
], CapturePage);

//# sourceMappingURL=capture.js.map

/***/ }),

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase_app__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_auth_auth__ = __webpack_require__(166);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginPage = (function () {
    function LoginPage(navCtrl, afDB, afAuth, auth, platform) {
        this.navCtrl = navCtrl;
        this.afDB = afDB;
        this.afAuth = afAuth;
        this.auth = auth;
        this.platform = platform;
        this.userAuth();
        console.log("LoginPage - UserAuth");
    }
    LoginPage.prototype.login = function (provider) {
        var _this = this;
        var signInProvider = null;
        switch (provider) {
            case "facebook":
                signInProvider = new __WEBPACK_IMPORTED_MODULE_4_firebase_app__["auth"].FacebookAuthProvider();
                break;
            case "google":
                signInProvider = new __WEBPACK_IMPORTED_MODULE_4_firebase_app__["auth"].GoogleAuthProvider();
                break;
        }
        if (this.platform.is('cordova')) {
            this.afAuth.auth.signInWithRedirect(signInProvider)
                .then(function () {
                _this.afAuth.auth.getRedirectResult()
                    .then(function (result) { return console.log("Logged-in with " + provider, result); })
                    .catch(function (error) { return console.log("Error Sing-in with " + provider, error); });
            });
        }
        else {
            this.afAuth.auth.signInWithPopup(signInProvider)
                .then(function (result) { return console.log("Logged-in with " + provider, result); })
                .catch(function (error) { return console.log("Error Sing-in with " + provider, error); });
        }
    };
    LoginPage.prototype.userAuth = function () {
        var _this = this;
        this.afAuth.authState.subscribe(function (user) {
            if (!user) {
                _this.user == null;
                return;
            }
            _this.user = user;
            _this.createUser();
            // this.navCtrl.setRoot('MenuPage'); old.version before move menu to app.component.ts
            _this.navCtrl.setRoot('TabsPage');
        });
    };
    LoginPage.prototype.createUser = function () {
        var _this = this;
        var dbUserRef = this.afDB.object('Users/' + this.user.uid);
        var dbUser = dbUserRef.valueChanges();
        var sub = dbUser.subscribe(function (userData) {
            if (userData !== null) {
                console.log("User already exist");
            }
            else {
                console.log("User not exist");
                var Email = _this.user.email;
                var Name = _this.user.displayName;
                var Image_1 = _this.user.photoURL;
                dbUserRef.set({ Email: Email, Name: Name, Image: Image_1 })
                    .then(function (res) { return console.log("Added new user to firedatabase"); });
            }
            sub.unsubscribe();
        });
    };
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"/Users/ntkbb/Desktop/wsp/Ready/src/pages/login/login.html"*/'<!DOCTYPE html>\n\n<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>\n\n            Authentication\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding id="page6">\n\n    <div class="spacer" style="height:20px;"></div>\n\n    <img src="assets/img/5QZinOvtSVi9Kj2ijF1G_iTunesArtwork.png" style="display:block;width:100%;height:auto;margin-left:auto;margin-right:auto;" />\n\n    <div class="spacer" style="height:30px;"></div>\n\n    <!-- <div *ngIf="user != null">\n\n        <img src="assets/img/5QZinOvtSVi9Kj2ijF1G_iTunesArtwork.png" style="display:block;width:100%;height:auto;margin-left:auto;margin-right:auto;" />\n\n    </div> -->\n\n\n\n    <h5 *ngIf="user != null">{{user.displayName}}</h5>\n\n    <!-- <button ion-button block text-align:center icon-left (click)="signInWithFacebook()"> -->\n\n    <button ion-button block text-align:center icon-left (click)="login(\'facebook\')">\n\n        <ion-icon name="logo-facebook"></ion-icon> Login via Facebook\n\n    </button>\n\n\n\n    <button ion-button color="danger" block text-align:center icon-left (click)="login(\'google\')">\n\n        <ion-icon name="logo-google"></ion-icon> Login via Google\n\n    </button>\n\n\n\n    <!-- <form id="login-form1">\n\n        <div class="spacer" style="height:40px;" id="login-spacer1"></div>\n\n        <ion-list id="login-list8">\n\n            <ion-item id="login-input1">\n\n                <ion-label>\n\n                    Email\n\n                </ion-label>\n\n                <ion-input type="email" placeholder="justclicklogin"></ion-input>\n\n            </ion-item>\n\n            <ion-item id="login-input2">\n\n                <ion-label>\n\n                    Password\n\n                </ion-label>\n\n                <ion-input type="password" placeholder=""></ion-input>\n\n            </ion-item>\n\n        </ion-list>\n\n    </form> -->\n\n\n\n</ion-content>'/*ion-inline-end:"/Users/ntkbb/Desktop/wsp/Ready/src/pages/login/login.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */],
        __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */],
        __WEBPACK_IMPORTED_MODULE_5__services_auth_auth__["a" /* AuthService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(357);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 357:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(431);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_media_capture__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2_database__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angularfire2_auth__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__environments_environments__ = __webpack_require__(724);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_auth_auth__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_storage__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_explore_explore_module__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_filtering_filtering_module__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_garage_garage_module__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_login_login_module__ = __webpack_require__(725);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_capture_capture_module__ = __webpack_require__(726);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_profile_profile_module__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_tabs_tabs_module__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_friends_friends_module__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_placeholder_placeholder_module__ = __webpack_require__(230);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








// import { LoginPage } from '../pages/login/login';
// import { ExplorePage } from '../pages/explore/explore';
// import { ProfilePage } from '../pages/profile/profile';
// import { GaragePage } from '../pages/garage/garage';
// import { FilteringPage } from '../pages/filtering/filtering';
// import { CapturePage } from '../pages/capture/capture';















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/explore/explore.module#ExplorePageModule', name: 'ExplorePage', segment: 'explore', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/filtering/filtering.module#FilteringPageModule', name: 'FilteringPage', segment: 'filtering', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/friends/friends.module#FriendsPageModule', name: 'FriendsPage', segment: 'friends', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/garage/garage.module#GaragePageModule', name: 'GaragePage', segment: 'garage', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/placeholder/placeholder.module#PlaceholderPageModule', name: 'PlaceholderPage', segment: 'placeholder', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/special/special.module#SpecialPageModule', name: 'SpecialPage', segment: 'special', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_8_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_11__environments_environments__["a" /* environments */].firebaseConfig),
            __WEBPACK_IMPORTED_MODULE_9_angularfire2_database__["b" /* AngularFireDatabaseModule */],
            __WEBPACK_IMPORTED_MODULE_10_angularfire2_auth__["b" /* AngularFireAuthModule */],
            __WEBPACK_IMPORTED_MODULE_13__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
            // start-----[PageModule]------
            __WEBPACK_IMPORTED_MODULE_14__pages_explore_explore_module__["ExplorePageModule"],
            __WEBPACK_IMPORTED_MODULE_15__pages_filtering_filtering_module__["FilteringPageModule"],
            __WEBPACK_IMPORTED_MODULE_16__pages_garage_garage_module__["GaragePageModule"],
            __WEBPACK_IMPORTED_MODULE_17__pages_login_login_module__["a" /* LoginPageModule */],
            __WEBPACK_IMPORTED_MODULE_18__pages_capture_capture_module__["a" /* CapturePageModule */],
            __WEBPACK_IMPORTED_MODULE_19__pages_profile_profile_module__["ProfilePageModule"],
            __WEBPACK_IMPORTED_MODULE_20__pages_tabs_tabs_module__["TabsPageModule"],
            __WEBPACK_IMPORTED_MODULE_21__pages_friends_friends_module__["FriendsPageModule"],
            __WEBPACK_IMPORTED_MODULE_22__pages_placeholder_placeholder_module__["PlaceholderPageModule"]
            // end-----[PageModule]------
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_9_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_media_capture__["a" /* MediaCapture */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_12__services_auth_auth__["a" /* AuthService */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 377:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilteringPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
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
 * Generated class for the FilteringPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FilteringPage = (function () {
    function FilteringPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    FilteringPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FilteringPage');
    };
    return FilteringPage;
}());
FilteringPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-filtering',template:/*ion-inline-start:"/Users/ntkbb/Desktop/wsp/Ready/src/pages/filtering/filtering.html"*/'<!--\n\n  Generated template for the FilteringPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n        <ion-title>\n\n            Filtering\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content padding id="page7">\n\n    <form id="filtering-form2">\n\n        <ion-item id="filtering-input6">\n\n            <ion-label stacked>\n\n                License Plate\n\n            </ion-label>\n\n            <ion-input type="text" placeholder="AB 1234" name="License Plate"></ion-input>\n\n        </ion-item>\n\n        <ion-item id="filtering-select1">\n\n            <ion-label>\n\n                Brand\n\n            </ion-label>\n\n            <ion-select name="Brand">\n\n                <ion-option>\n\n                    Audi\n\n                </ion-option>\n\n                <ion-option>\n\n                    Toyota\n\n                </ion-option>\n\n                <ion-option>\n\n                    Honda\n\n                </ion-option>\n\n                <ion-option>\n\n                    Isuzu\n\n                </ion-option>\n\n                <ion-option>\n\n                    Mercedes Benz\n\n                </ion-option>\n\n                <ion-option>\n\n                    BMW\n\n                </ion-option>\n\n            </ion-select>\n\n        </ion-item>\n\n        <ion-item id="filtering-select2">\n\n            <ion-label>\n\n                Color\n\n            </ion-label>\n\n            <ion-select name="Color">\n\n                <ion-option>\n\n                    Black\n\n                </ion-option>\n\n                <ion-option>\n\n                    White\n\n                </ion-option>\n\n                <ion-option>\n\n                    Brown\n\n                </ion-option>\n\n                <ion-option>\n\n                    Blue\n\n                </ion-option>\n\n                <ion-option>\n\n                    Red\n\n                </ion-option>\n\n                <ion-option>\n\n                    Green\n\n                </ion-option>\n\n                <ion-option>\n\n                    Grey\n\n                </ion-option>\n\n            </ion-select>\n\n        </ion-item>\n\n        <ion-item id="filtering-select3">\n\n            <ion-label>\n\n                Date/Time\n\n            </ion-label>\n\n            <ion-select name="Date/Time"></ion-select>\n\n        </ion-item>\n\n    </form>\n\n</ion-content>'/*ion-inline-end:"/Users/ntkbb/Desktop/wsp/Ready/src/pages/filtering/filtering.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], FilteringPage);

//# sourceMappingURL=filtering.js.map

/***/ }),

/***/ 407:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__capture_capture__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__garage_garage__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__explore_explore__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__profile_profile__ = __webpack_require__(233);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TabsPage = (function () {
    function TabsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_4__explore_explore__["a" /* ExplorePage */]; //index 0
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__capture_capture__["a" /* CapturePage */]; //index 1
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__garage_garage__["a" /* GaragePage */]; //index 2
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_5__profile_profile__["a" /* ProfilePage */]; //index 3
        // Set the active tab based on the passed index from menu.ts
        this.myIndex = navParams.data.tabIndex || 0;
    }
    TabsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TabsPage');
    };
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-tabs',template:/*ion-inline-start:"/Users/ntkbb/Desktop/wsp/Ready/src/pages/tabs/tabs.html"*/'<ion-tabs [selectedIndex]="myIndex">\n\n    <ion-tab [root]="tab1Root" tabTitle="Explore" tabIcon="ios-search"></ion-tab>\n\n    <ion-tab [root]="tab2Root" tabTitle="Camera" tabIcon="ios-camera"></ion-tab>\n\n    <ion-tab [root]="tab3Root" tabTitle="Garage" tabIcon="ios-car"></ion-tab>\n\n    <ion-tab [root]="tab4Root" tabTitle="Profile" tabIcon="ios-person"></ion-tab>\n\n</ion-tabs>'/*ion-inline-end:"/Users/ntkbb/Desktop/wsp/Ready/src/pages/tabs/tabs.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 431:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_explore_explore__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_friends_friends__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_garage_garage__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_auth__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_auth_auth__ = __webpack_require__(166);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var MyApp = (function () {
    // rootPage:any = TabsPage;
    // rootPage: any;
    function MyApp(platform, afAuth, statusBar, app, splashScreen, auth) {
        this.afAuth = afAuth;
        this.app = app;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */];
        this.pages = [
            { title: 'Explore', pageName: 'TabsPage', tabComponent: __WEBPACK_IMPORTED_MODULE_4__pages_explore_explore__["a" /* ExplorePage */], index: 0, icon: 'ios-search' },
            // { title: 'Camera', pageName: 'TabsPage', tabComponent: 'CapturePage', index: 1, icon: 'ios-camera' },
            // { title: 'Garage', pageName: 'TabsPage', tabComponent: 'GaragePage', index: 2, icon: 'ios-car' },
            // { title: 'Profile', pageName: 'TabsPage', tabComponent: 'ProfilePage', index: 3, icon: 'ios-person' },
            { title: 'Friends', pageName: 'FriendsPage', icon: 'ios-people' },
            { title: 'Logout', pageName: 'TabsPage', icon: 'ios-log-out', logsOut: true },
        ];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp.prototype.openPage = function (page) {
        var params = {};
        // The index is equal to the order of our tabs inside tabs.ts
        if (page.index) {
            params = { tabIndex: page.index };
            console.log('page-index: ' + page.index);
        }
        if (page.logsOut === true) {
            this.signOut();
        }
        // The active child nav is our Tabs Navigation
        if (this.nav.getActiveChildNavs().length && page.index != undefined) {
            this.nav.getActiveChildNavs()[0].select(page.index);
        }
        else {
            // Tabs are not active, so reset the root page 
            // In this case: moving to or from SpecialPage
            // this.nav.setRoot(page.pageName, params);
            // Set the root of the nav with params if it's a tab index
            this.nav.setRoot(page.pageName, params).catch(function (err) {
                console.log("Didn't set nav root: " + err);
            });
        }
    };
    MyApp.prototype.isActive = function (page) {
        // Again the Tabs Navigation
        var childNav = this.nav.getActiveChildNavs()[0];
        if (childNav) {
            if (childNav.getSelected() && childNav.getSelected().root === page.tabComponent) {
                return 'primary';
            }
            return;
        }
        // Fallback needed when there is no active childnav (tabs not active)
        if (this.nav.getActive() && this.nav.getActive().name === page.pageName) {
            return 'primary';
        }
        return;
    };
    MyApp.prototype.signOut = function () {
        var _this = this;
        this.afAuth.auth.signOut()
            .then(function () {
            // Makes .then() return a rejected promise
            (function (result) { return console.log("Sign-out", result); });
            _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */]);
        })
            .catch(function (reason) {
            console.error('Error Sing-out: ', reason);
        });
        console.log('Sign-out Button Pressed');
    };
    MyApp.prototype.signOutOlderVersion = function () {
        this.afAuth.auth.signOut()
            .then(function (result) { return console.log("Sign-out", result); })
            .catch(function (error) { return console.log("Error Sing-out", error); });
        // this.navCtrl.setRoot('LoginPage');
        // this.app.getRootNav().setRoot(LoginPage);
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */]);
        // this.app.getRootNav()[0].setRoot(LoginPage);
        console.log('Pressed/Done Function SignOut');
    };
    MyApp.prototype.goToLogin = function (params) {
        if (!params)
            params = {};
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */]);
    };
    MyApp.prototype.goToExplore = function (params) {
        if (!params)
            params = {};
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_explore_explore__["a" /* ExplorePage */]);
    };
    MyApp.prototype.goToFriends = function (params) {
        if (!params)
            params = {};
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_friends_friends__["a" /* FriendsPage */]);
    };
    MyApp.prototype.goToGarage = function (params) {
        if (!params)
            params = {};
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_7__pages_garage_garage__["a" /* GaragePage */]);
    };
    MyApp.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad App Component dot TS');
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/ntkbb/Desktop/wsp/Ready/src/app/app.html"*/'<!DOCTYPE html>\n\n<ion-menu side="left" [content]="content">\n\n    <ion-header>\n\n        <ion-toolbar>\n\n            <ion-title>Menu</ion-title>\n\n        </ion-toolbar>\n\n    </ion-header>\n\n\n\n    <ion-content>\n\n        <ion-list>\n\n            <button ion-item menuClose *ngFor="let p of pages" (click)="openPage(p)">\n\n            <ion-icon item-start [name]="p.icon" [color]="isActive(p)"></ion-icon>\n\n            {{ p.title }}\n\n          </button>\n\n        </ion-list>\n\n    </ion-content>\n\n</ion-menu>\n\n\n\n<!-- main navigation -->\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n\n\n\n\n\n<!-- ======== [Older Version] ========-->\n\n<!-- <ion-nav [root]="rootPage"></ion-nav> -->\n\n\n\n<!-- <ion-menu [content]="mainContent">\n\n  <ion-header>\n\n    <ion-toolbar>\n\n      <ion-title>\n\n        Menu\n\n      </ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n  <ion-content id="side-menu21">\n\n    <button id="menu-button1" ion-button clear color="dark" block icon-left style="font-weight:600;text-align:left;" menuClose="" on-click="goToExplore()">\n\n      <ion-icon name="search"></ion-icon>\n\n      Explore\n\n    </button>\n\n    <button id="menu-button4" ion-button clear color="positive" block icon-left style="font-weight:600;text-align:left;" menuClose="" on-click="goToFriends()">\n\n      <ion-icon name="people"></ion-icon>\n\n      Friends\n\n    </button>\n\n    <button id="menu-button3" ion-button clear color="positive" block icon-left style="font-weight:600;text-align:left;">\n\n      <ion-icon name="settings"></ion-icon>\n\n      Setting\n\n    </button>\n\n    <button id="menu-button2" ion-button clear color="assertive" block icon-left style="font-weight:600;text-align:left;" menuClose="" on-click="goToLogin()">\n\n      <ion-icon name="log-out"></ion-icon>\n\n      Log out\n\n    </button>\n\n  </ion-content>\n\n</ion-menu>\n\n\n\n<ion-nav #mainContent [root]="rootPage"></ion-nav> -->'/*ion-inline-end:"/Users/ntkbb/Desktop/wsp/Ready/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_8_angularfire2_auth__["a" /* AngularFireAuth */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
        __WEBPACK_IMPORTED_MODULE_9__services_auth_auth__["a" /* AuthService */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 724:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environments; });
var environments = {
    firebaseConfig: {
        apiKey: "AIzaSyCR5LzkkNpZ2VRSz9Q2eWketqcYCEGWgH8",
        authDomain: "seen-that-car.firebaseapp.com",
        databaseURL: "https://seen-that-car.firebaseio.com",
        projectId: "seen-that-car",
        storageBucket: "seen-that-car.appspot.com",
        messagingSenderId: '345913838178'
    }
};
//# sourceMappingURL=environments.js.map

/***/ }),

/***/ 725:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(292);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginPageModule = (function () {
    function LoginPageModule() {
    }
    return LoginPageModule;
}());
LoginPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
        ],
    })
], LoginPageModule);

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 726:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CapturePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__capture__ = __webpack_require__(245);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CapturePageModule = (function () {
    function CapturePageModule() {
    }
    return CapturePageModule;
}());
CapturePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__capture__["a" /* CapturePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__capture__["a" /* CapturePage */]),
        ],
    })
], CapturePageModule);

//# sourceMappingURL=capture.module.js.map

/***/ })

},[352]);
//# sourceMappingURL=main.js.map