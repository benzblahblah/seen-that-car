webpackJsonp([0],{

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExplorePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(40);
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
    function ExplorePage(navCtrl, afAuth, afDB, navParams) {
        this.navCtrl = navCtrl;
        this.afAuth = afAuth;
        this.afDB = afDB;
        this.navParams = navParams;
    }
    ExplorePage.prototype.ngOnInit = function () {
        this.userAuth();
        this.getListOfFeeds();
    };
    ExplorePage.prototype.ngOnDestroy = function () {
        this.subFeeds.unsubscribe();
    };
    ExplorePage.prototype.userAuth = function () {
        var _this = this;
        this.afAuth.authState.subscribe(function (user) {
            if (!user) {
                _this.user = null;
                return;
            }
            _this.user = user;
        });
    };
    ExplorePage.prototype.getListOfFeeds = function () {
        this.feeds = this.afDB.list("Feeds").valueChanges();
        this.subFeeds = this.feeds.subscribe(function (data) {
            console.log("test", data);
        });
    };
    ExplorePage.prototype.clickLike = function (key) {
        var _this = this;
        console.log("clickLike", key);
        var sub = this.afDB.object("Users/" + this.user.uid + "/Like/" + key).valueChanges().subscribe(function (data) {
            //never like before then ++
            sub.unsubscribe();
            if (data == null) {
                console.log("never like before");
                var subLike_1 = _this.afDB.object("Feeds/" + key + "/Like").valueChanges().subscribe(function (like) {
                    subLike_1.unsubscribe();
                    console.log("getLike", like);
                    _this.afDB.object("Feeds/" + key + "/Like").set(like + 1)
                        .then(function (res) {
                        console.log("liked");
                        _this.afDB.object("Users/" + _this.user.uid + "/Like/" + key).set(true);
                    });
                });
            }
            else {
                console.log("already liked");
                var subLike_2 = _this.afDB.object("Feeds/" + key + "/Like").valueChanges().subscribe(function (like) {
                    subLike_2.unsubscribe();
                    console.log("getLike", like);
                    _this.afDB.object("Feeds/" + key + "/Like").set(like - 1)
                        .then(function (res) {
                        console.log("unliked");
                        _this.afDB.object("Users/" + _this.user.uid + "/Like/" + key).remove();
                    });
                });
            }
        });
    };
    return ExplorePage;
}());
ExplorePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-explore',template:/*ion-inline-start:"/Users/ntkbb/Documents/GitHub/seen-that-car/src/pages/explore/explore.html"*/'<!DOCTYPE html>\n<!--\n  Generated template for the ExplorePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n    <ion-icon name="menu"></ion-icon>\n  </button>\n        <ion-title>\n            Explore\n        </ion-title>\n        <ion-buttons end>\n            <button ion-button icon-only>\n      <ion-icon name="buffer"></ion-icon>\n    </button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n<ion-content padding id="page3">\n\n    <!--<ion-searchbar placeholder="Search" name="" id="explore-search2"></ion-searchbar>-->\n\n    <ion-list>\n\n        <ion-card *ngFor="let feed of feeds | async; let i = index;">\n\n            <ion-item color="none">\n                <ion-avatar item-left>\n                    <img src={{feed.userpicture}} />\n                </ion-avatar>\n                <h2>\n                    {{feed.username}}\n                </h2>\n            </ion-item>\n            <div>\n                <img src="{{feed.carpictire}}" style="display:block;width:100%;height:auto;margin-left:auto;margin-right:auto;" />\n            </div>\n            <ion-list>\n                <ion-item>\n                    <div class="show-list-numbers-and-dots">\n                        <p style="margin-top:0px;color:#000000;">\n                            {{feed.caption}}\n                        </p>\n                    </div>\n                </ion-item>\n\n            </ion-list>\n            <ion-item>\n                <!--<ion-input class="{{i}}" type="text" placeholder="Add Comment..." value=""></ion-input>\n                <button ion-button clear item-end (click)="sendMessage(feed.key,i)">Send</button>-->\n                <button ion-button icon-left clear small (click)="clickLike(feed.key)">\n                    <ion-icon name="thumbs-up"></ion-icon><div>{{feed.Like}} Likes</div>\n                </button>\n            </ion-item>\n\n        </ion-card>\n\n    </ion-list>\n\n</ion-content>'/*ion-inline-end:"/Users/ntkbb/Documents/GitHub/seen-that-car/src/pages/explore/explore.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */],
        __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], ExplorePage);

//# sourceMappingURL=explore.js.map

/***/ }),

/***/ 163:
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
webpackEmptyAsyncContext.id = 163;

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__capture_capture__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__garage_garage__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__explore_explore__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__profile_profile__ = __webpack_require__(308);
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
        selector: 'page-tabs',template:/*ion-inline-start:"/Users/ntkbb/Documents/GitHub/seen-that-car/src/pages/tabs/tabs.html"*/'<ion-tabs [selectedIndex]="myIndex">\n    <ion-tab [root]="tab1Root" tabTitle="Explore" tabIcon="ios-search"></ion-tab>\n    <ion-tab [root]="tab2Root" tabTitle="Camera" tabIcon="ios-camera"></ion-tab>\n    <ion-tab [root]="tab3Root" tabTitle="Garage" tabIcon="ios-car"></ion-tab>\n    <ion-tab [root]="tab4Root" tabTitle="Profile" tabIcon="ios-person"></ion-tab>\n</ion-tabs>'/*ion-inline-end:"/Users/ntkbb/Documents/GitHub/seen-that-car/src/pages/tabs/tabs.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 207:
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
webpackEmptyAsyncContext.id = 207;

/***/ }),

/***/ 247:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CapturePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_media_capture__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__placeholder_placeholder__ = __webpack_require__(249);
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
    function CapturePage(platform, alerCtrl, navCtrl, camera, navParams, mediaCapture) {
        this.platform = platform;
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
                        _this.nativeCapPicture();
                    }
                }
            ]
        });
        confirm.present();
    };
    CapturePage.prototype.nativeCapPicture = function () {
        var _this = this;
        var options = {
            quality: 25,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            correctOrientation: true,
            saveToPhotoAlbum: true
        };
        this.camera.getPicture(options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64:
            _this.base64Image = 'data:image/jpeg;base64,' + imageData;
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__placeholder_placeholder__["a" /* PlaceholderPage */], { photo: _this.base64Image });
        }, function (err) {
            // Handle error
        });
    };
    CapturePage.prototype.takePhotoViaHTML = function (event) {
        //reset input field and pic
        var pic = event.target.files[0];
        if (pic == null || pic.type != "image/jpeg") {
            console.log("image not in jpeg");
            return;
        }
        //GET orientation
        this.orientationReader(pic);
        //RESET picture orientation
        this.resetOrientationPhoto(pic);
    };
    CapturePage.prototype.resetOrientationPhoto = function (picture) {
        var img = new Image();
        img.onload = this._handleResetOrientationPhotoLoaded.bind(this);
        img.src = URL.createObjectURL(picture);
    };
    CapturePage.prototype._handleResetOrientationPhotoLoaded = function (readerEvt) {
        var img = readerEvt.path[0];
        var width = img.width, height = img.height, canvas = document.createElement('canvas'), ctx = canvas.getContext("2d");
        if (4 < this.photoOrientation && this.photoOrientation < 9) {
            canvas.width = height;
            canvas.height = width;
        }
        else {
            canvas.width = width;
            canvas.height = height;
        }
        switch (this.photoOrientation) {
            case 2:
                ctx.transform(-1, 0, 0, 1, width, 0);
                break;
            case 3:
                ctx.transform(-1, 0, 0, -1, width, height);
                break;
            case 4:
                ctx.transform(1, 0, 0, -1, 0, height);
                break;
            case 5:
                ctx.transform(0, 1, 1, 0, 0, 0);
                break;
            case 6:
                ctx.transform(0, 1, -1, 0, height, 0);
                break;
            case 7:
                ctx.transform(0, -1, -1, 0, height, width);
                break;
            case 8:
                ctx.transform(0, -1, 1, 0, 0, width);
                break;
            default: break;
        }
        ctx.drawImage(img, 0, 0);
        //export to base64 jpeg and set image quality  25%
        var imageData = canvas.toDataURL("image/jpeg", 0.25);
        this.base64Image = imageData;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__placeholder_placeholder__["a" /* PlaceholderPage */], { photo: this.base64Image });
    };
    CapturePage.prototype.orientationReader = function (picture) {
        var reader = new FileReader();
        reader.onload = this._handleOrientationLoaded.bind(this);
        reader.readAsArrayBuffer(picture);
    };
    CapturePage.prototype._handleOrientationLoaded = function (readerEvt) {
        var view = new DataView(readerEvt.target.result);
        if (view.getUint16(0, false) != 0xFFD8) {
            console.log("Error Picture not jped");
            return -2;
        }
        var length = view.byteLength, offset = 2;
        while (offset < length) {
            var marker = view.getUint16(offset, false);
            offset += 2;
            if (marker == 0xFFE1) {
                if (view.getUint32(offset += 2, false) != 0x45786966) {
                    console.log("Error Picture not defined");
                    return -1;
                }
                var little = view.getUint16(offset += 6, false) == 0x4949;
                offset += view.getUint32(offset + 4, little);
                var tags = view.getUint16(offset, little);
                offset += 2;
                for (var i = 0; i < tags; i++)
                    if (view.getUint16(offset + (i * 12), little) == 0x0112) {
                        var orientation_1 = view.getUint16(offset + (i * 12) + 8, little);
                        console.log("Picture orientation", orientation_1);
                        this.photoOrientation = orientation_1;
                        return orientation_1;
                    }
            }
            else if ((marker & 0xFF00) != 0xFF00)
                break;
            else
                offset += view.getUint16(offset, false);
        }
    };
    return CapturePage;
}());
CapturePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-capture',template:/*ion-inline-start:"/Users/ntkbb/Documents/GitHub/seen-that-car/src/pages/capture/capture.html"*/'<!DOCTYPE html>\n<!--\n  Generated template for the CapturePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n    <ion-icon name="menu"></ion-icon>\n  </button>\n        <ion-title>\n            Capture\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content padding id="page8">\n    <div class="spacer" style="height:50px;" id="capture-spacer5"></div>\n    <button id="capture-button9" ion-button clear color="positive" block>\n  <ion-icon name="car"></ion-icon>\n</button>\n    <h5 id="capture-heading2" style="color:#000000;text-align:center;">\n        Take some cars here!\n    </h5>\n    <div class="spacer" style="height:50px;" id="capture-spacer6"></div>\n    <input id="uploadImage" type="file" accept="image/jpeg" capture style="display: none;" (change)="takePhotoViaHTML($event)">\n    <button *ngIf="platform.is(\'cordova\')==true" id="capture-button8" ion-button color="primary" block icon-left (click)="CapturePic()"> <ion-icon name="camera"></ion-icon> Tap for photo</button>\n    <button *ngIf="platform.is(\'cordova\')==false" id="capture-button8" ion-button color="primary" block icon-left onclick="document.getElementById(\'uploadImage\').click();"> <ion-icon name="camera"></ion-icon> Tap for photo</button>\n\n    <!--<button id="capture-button9" ion-button color="secondary" block icon-left (click)="recordVideo()"> <ion-icon name="camera"></ion-icon> Tap for video</button>-->\n    <!-- <button id="capture-button8" ion-button color="positive" block icon-left>\n  <ion-icon name="camera"></ion-icon>\n  Tap for photo or hold for video.\n</button> -->\n\n</ion-content>'/*ion-inline-end:"/Users/ntkbb/Documents/GitHub/seen-that-car/src/pages/capture/capture.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_media_capture__["a" /* MediaCapture */]])
], CapturePage);

//# sourceMappingURL=capture.js.map

/***/ }),

/***/ 249:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlaceholderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
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
    function PlaceholderPage(navCtrl, afAuth, afDB, navParams, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.afAuth = afAuth;
        this.afDB = afDB;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.storage = __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.storage();
        this.car = {
            username: "",
            userpicture: "",
            carpictire: "",
            caption: "",
            brand: "",
            model: "",
            color: "",
            license: "",
            key: "",
            Like: 0
        };
        this.base64Image = this.navParams.get("photo");
        this.userAuth();
    }
    PlaceholderPage.prototype.userAuth = function () {
        var _this = this;
        this.afAuth.authState.subscribe(function (user) {
            if (!user) {
                _this.user = null;
                return;
            }
            _this.user = user;
            _this.car.username = user.displayName;
            _this.car.userpicture = user.photoURL;
        });
    };
    PlaceholderPage.prototype.isValid = function () {
        if (this.car.brand == "" || this.car.caption == "" || this.car.color == "" || this.car.license == "") {
            return false;
        }
        else {
            return true;
        }
    };
    PlaceholderPage.prototype.shareBtn = function () {
        var _this = this;
        this.presentLoading();
        console.log("shared button", this.car);
        var photoPath = "Feeds/" + new Date().getTime() + ".jpg";
        var storageRef = this.storage.ref(photoPath);
        storageRef.putString(this.base64Image, "data_url")
            .then(function () {
            console.log("Uploaded image");
        })
            .then(function () {
            //get image URL
            var storageRef = _this.storage.ref(photoPath);
            storageRef.getDownloadURL()
                .then(function (url) {
                _this.car.carpictire = url;
                _this.afDB.list("Feeds/").push(_this.car)
                    .then(function (result) {
                    console.log(result.key);
                    _this.afDB.list("Feeds").update(result.key, { key: result.key });
                    console.log("added new feed", result);
                    //Add to user garage
                    _this.afDB.list("Users/" + _this.user.uid + "/Garage/").push({
                        carpictire: _this.car.carpictire,
                        brand: _this.car.brand,
                        model: _this.car.model,
                        color: _this.car.color,
                        license: _this.car.license,
                        key: ""
                    }).then(function (res) {
                        _this.afDB.list("Users/" + _this.user.uid + "/Garage/").update(res.key, { key: res.key })
                            .then(function (re) {
                            console.log("added");
                            _this.loading.dismiss();
                            _this.navCtrl.pop();
                        });
                    });
                });
            });
        })
            .catch(function (error) {
            console.log("Error", error);
            _this.loading.dismiss();
        });
    };
    PlaceholderPage.prototype.presentLoading = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        this.loading.present();
    };
    return PlaceholderPage;
}());
PlaceholderPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-placeholder',template:/*ion-inline-start:"/Users/ntkbb/Documents/GitHub/seen-that-car/src/pages/placeholder/placeholder.html"*/'<!DOCTYPE html>\n<!--\n  Generated template for the PlaceholderPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title> {{ user.displayName }} </ion-title>\n\n        <ion-buttons end>\n            <button ion-button (click)="shareBtn()" [disabled]="!isValid()">\n              Share\n            <!-- <ion-icon name="options"></ion-icon> -->\n            </button>\n        </ion-buttons>\n\n    </ion-navbar>\n\n\n</ion-header>\n\n<ion-content padding>\n    <ion-list>\n\n        <ion-list>\n            <ion-item>\n                <ion-thumbnail item-start>\n                    <img *ngIf="!base64Image" src="assets/img/teslalsp.jpg">\n                    <img *ngIf="base64Image" [src]="base64Image">\n                </ion-thumbnail>\n                <ion-input type="text" placeholder="Write a caption..." [(ngModel)]="car.caption"></ion-input>\n            </ion-item>\n        </ion-list>\n\n        <ion-item>\n            <ion-input type="text" placeholder="Brand" [(ngModel)]="car.brand"></ion-input>\n        </ion-item>\n\n        <ion-item>\n            <ion-input type="text" placeholder="Model" [(ngModel)]="car.model"></ion-input>\n        </ion-item>\n\n        <ion-item>\n            <ion-input type="text" placeholder="Color" [(ngModel)]="car.color"></ion-input>\n        </ion-item>\n\n        <ion-item>\n            <ion-input type="text" placeholder="License Plate No." [(ngModel)]="car.license"></ion-input>\n        </ion-item>\n\n    </ion-list>\n\n</ion-content>'/*ion-inline-end:"/Users/ntkbb/Documents/GitHub/seen-that-car/src/pages/placeholder/placeholder.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */],
        __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
], PlaceholderPage);

//# sourceMappingURL=placeholder.js.map

/***/ }),

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GaragePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(40);
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
    function GaragePage(navCtrl, afAuth, afDB, navParams) {
        this.navCtrl = navCtrl;
        this.afAuth = afAuth;
        this.afDB = afDB;
        this.navParams = navParams;
    }
    GaragePage.prototype.ngOnInit = function () {
        this.userAuth();
    };
    GaragePage.prototype.ngOnDestroy = function () {
        this.subGarage.unsubscribe();
    };
    GaragePage.prototype.userAuth = function () {
        var _this = this;
        this.afAuth.authState.subscribe(function (user) {
            if (!user) {
                _this.user = null;
                return;
            }
            _this.user = user;
            _this.getListOfGarage();
        });
    };
    GaragePage.prototype.getListOfGarage = function () {
        this.garages = this.afDB.list("Users/" + this.user.uid + "/Garage/").valueChanges();
        this.subGarage = this.garages.subscribe(function (data) {
        });
    };
    GaragePage.prototype.deleteCar = function (key) {
        console.log("delete", key);
        this.afDB.object("Users/" + this.user.uid + "/Garage/" + key).remove()
            .then(function (res) { return console.log("deleted"); });
    };
    return GaragePage;
}());
GaragePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-garage',template:/*ion-inline-start:"/Users/ntkbb/Documents/GitHub/seen-that-car/src/pages/garage/garage.html"*/'<!DOCTYPE html>\n<!--\n  Generated template for the GaragePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n        <ion-title>\n            Garage\n        </ion-title>\n        <ion-buttons end>\n            <button ion-button icon-only>\n        <ion-icon name="add"></ion-icon>\n      </button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding id="page5">\n\n    <ion-list id="garage-list7">\n\n        <ion-item-sliding *ngFor="let car of garages | async">\n            <ion-item>\n                <ion-thumbnail item-left>\n                    <img *ngIf="car.carpictire" src={{car.carpictire}} style="border-radius: 50%;" />\n                </ion-thumbnail>\n                <h2>{{car.brand}}</h2>\n                <p>{{car.model}}</p>\n                <p>{{car.license}}</p>\n            </ion-item>\n            <ion-item-options side="right">\n                <button ion-button color="danger" (click)="deleteCar(car.key)">\n                    Delete\n                </button>\n            </ion-item-options>\n        </ion-item-sliding>\n\n    </ion-list>\n\n</ion-content>'/*ion-inline-end:"/Users/ntkbb/Documents/GitHub/seen-that-car/src/pages/garage/garage.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */],
        __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], GaragePage);

//# sourceMappingURL=garage.js.map

/***/ }),

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_media_capture__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase__);
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
    function ProfilePage(navCtrl, navParams, camera, platform, mediaCapture, alerCtrl, afAuth) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.camera = camera;
        this.platform = platform;
        this.mediaCapture = mediaCapture;
        this.alerCtrl = alerCtrl;
        this.afAuth = afAuth;
        this.storage = __WEBPACK_IMPORTED_MODULE_5_firebase___default.a.storage();
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
        });
    };
    ProfilePage.prototype.CapturePic = function () {
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
                        _this.nativeCapPicture();
                    }
                }
            ]
        });
        confirm.present();
    };
    ProfilePage.prototype.changeInfo = function () {
        this.user.updateProfile({
            displayName: this.userName,
            photoURL: this.user.photoURL
        }).then(function (res) { return console.log("changed user name"); });
    };
    ProfilePage.prototype.nativeCapPicture = function () {
        var _this = this;
        var options = {
            quality: 25,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            correctOrientation: true,
            saveToPhotoAlbum: true
        };
        this.camera.getPicture(options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64:
            _this.base64Image = 'data:image/jpeg;base64,' + imageData;
            _this.changeUserPicture();
        }, function (err) {
            // Handle error
        });
    };
    ProfilePage.prototype.takePhotoViaHTML = function (event) {
        //reset input field and pic
        var pic = event.target.files[0];
        if (pic == null || pic.type != "image/jpeg") {
            console.log("image not in jpeg");
            return;
        }
        //GET orientation
        this.orientationReader(pic);
        //RESET picture orientation
        this.resetOrientationPhoto(pic);
    };
    ProfilePage.prototype.resetOrientationPhoto = function (picture) {
        var img = new Image();
        img.onload = this._handleResetOrientationPhotoLoaded.bind(this);
        img.src = URL.createObjectURL(picture);
    };
    ProfilePage.prototype._handleResetOrientationPhotoLoaded = function (readerEvt) {
        var img = readerEvt.path[0];
        var width = img.width, height = img.height, canvas = document.createElement('canvas'), ctx = canvas.getContext("2d");
        if (4 < this.photoOrientation && this.photoOrientation < 9) {
            canvas.width = height;
            canvas.height = width;
        }
        else {
            canvas.width = width;
            canvas.height = height;
        }
        switch (this.photoOrientation) {
            case 2:
                ctx.transform(-1, 0, 0, 1, width, 0);
                break;
            case 3:
                ctx.transform(-1, 0, 0, -1, width, height);
                break;
            case 4:
                ctx.transform(1, 0, 0, -1, 0, height);
                break;
            case 5:
                ctx.transform(0, 1, 1, 0, 0, 0);
                break;
            case 6:
                ctx.transform(0, 1, -1, 0, height, 0);
                break;
            case 7:
                ctx.transform(0, -1, -1, 0, height, width);
                break;
            case 8:
                ctx.transform(0, -1, 1, 0, 0, width);
                break;
            default: break;
        }
        ctx.drawImage(img, 0, 0);
        //export to base64 jpeg and set image quality  25%
        var imageData = canvas.toDataURL("image/jpeg", 0.25);
        this.base64Image = imageData;
        this.changeUserPicture();
    };
    ProfilePage.prototype.orientationReader = function (picture) {
        var reader = new FileReader();
        reader.onload = this._handleOrientationLoaded.bind(this);
        reader.readAsArrayBuffer(picture);
    };
    ProfilePage.prototype._handleOrientationLoaded = function (readerEvt) {
        var view = new DataView(readerEvt.target.result);
        if (view.getUint16(0, false) != 0xFFD8) {
            console.log("Error Picture not jped");
            return -2;
        }
        var length = view.byteLength, offset = 2;
        while (offset < length) {
            var marker = view.getUint16(offset, false);
            offset += 2;
            if (marker == 0xFFE1) {
                if (view.getUint32(offset += 2, false) != 0x45786966) {
                    console.log("Error Picture not defined");
                    return -1;
                }
                var little = view.getUint16(offset += 6, false) == 0x4949;
                offset += view.getUint32(offset + 4, little);
                var tags = view.getUint16(offset, little);
                offset += 2;
                for (var i = 0; i < tags; i++)
                    if (view.getUint16(offset + (i * 12), little) == 0x0112) {
                        var orientation_1 = view.getUint16(offset + (i * 12) + 8, little);
                        console.log("Picture orientation", orientation_1);
                        this.photoOrientation = orientation_1;
                        return orientation_1;
                    }
            }
            else if ((marker & 0xFF00) != 0xFF00)
                break;
            else
                offset += view.getUint16(offset, false);
        }
    };
    ProfilePage.prototype.changeUserPicture = function () {
        var _this = this;
        console.log("changeUserPicture");
        var photoPath = "Users/" + new Date().getTime() + ".jpg";
        var storageRef = this.storage.ref(photoPath);
        storageRef.putString(this.base64Image, "data_url")
            .then(function () {
            console.log("Uploaded image");
        })
            .then(function () {
            //get image URL
            var storageRef = _this.storage.ref(photoPath);
            storageRef.getDownloadURL()
                .then(function (url) {
                _this.user.updateProfile({ displayName: _this.user.displayName, photoURL: url }).then(function (res) { return console.log("updated user profile photo"); });
            });
        })
            .catch(function (error) {
            console.log("Error", error);
        });
    };
    return ProfilePage;
}());
ProfilePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-profile',template:/*ion-inline-start:"/Users/ntkbb/Documents/GitHub/seen-that-car/src/pages/profile/profile.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n        <ion-title>\n            Profile\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content padding id="page4">\n    <ion-list id="profile-list2">\n        <ion-item color="none" id="profile-list-item1">\n            <ion-thumbnail item-left>\n                <input id="uploadImage" type="file" accept="image/jpeg" capture style="display: none;" (change)="takePhotoViaHTML($event)">\n                <img *ngIf="platform.is(\'cordova\')==true" src="{{user.photoURL}}" (click)="CapturePic()" />\n                <img *ngIf="platform.is(\'cordova\')==false" src="{{user.photoURL}}" onclick="document.getElementById(\'uploadImage\').click();" />\n            </ion-thumbnail>\n            <h2 *ngIf="user != null">\n                {{ user.displayName }}\n            </h2>\n        </ion-item>\n    </ion-list>\n    <div id="profile-form2">\n        <ion-list id="profile-list4">\n            <ion-item id="profile-input6">\n                <ion-label stacked>\n                    Name\n                </ion-label>\n                <ion-input type="text" value="{{user.displayName}}" [(ngModel)]="userName"></ion-input>\n            </ion-item>\n            <ion-item id="profile-input8">\n                <ion-label stacked>\n                    Email Address\n                </ion-label>\n                <ion-input type="email" value="{{user.email}}" readonly="true"></ion-input>\n            </ion-item>\n        </ion-list>\n\n        <button ion-button block icon-left (click)="changeInfo()"> \n            Update\n        </button>\n    </div>\n</ion-content>'/*ion-inline-end:"/Users/ntkbb/Documents/GitHub/seen-that-car/src/pages/profile/profile.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__["a" /* Camera */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_media_capture__["a" /* MediaCapture */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */]])
], ProfilePage);

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase_app__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tabs_tabs__ = __webpack_require__(164);
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
    function LoginPage(navCtrl, menu, afDB, afAuth, platform) {
        this.navCtrl = navCtrl;
        this.menu = menu;
        this.afDB = afDB;
        this.afAuth = afAuth;
        this.platform = platform;
        this.menu.enable(false);
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
            _this.menu.enable(true);
            // this.navCtrl.setRoot('MenuPage'); old.version before move menu to app.component.ts
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__tabs_tabs__["a" /* TabsPage */]);
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
        selector: 'page-login',template:/*ion-inline-start:"/Users/ntkbb/Documents/GitHub/seen-that-car/src/pages/login/login.html"*/'<!DOCTYPE html>\n<ion-header>\n    <ion-navbar>\n        <ion-title>\n            Authentication\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n\n<ion-content padding id="page6">\n    <div class="spacer" style="height:20px;"></div>\n    <img src="assets/img/5QZinOvtSVi9Kj2ijF1G_iTunesArtwork.png" style="display:block;width:100%;height:auto;margin-left:auto;margin-right:auto;" />\n    <div class="spacer" style="height:30px;"></div>\n    <!-- <div *ngIf="user != null">\n        <img src="assets/img/5QZinOvtSVi9Kj2ijF1G_iTunesArtwork.png" style="display:block;width:100%;height:auto;margin-left:auto;margin-right:auto;" />\n    </div> -->\n\n    <h5 *ngIf="user != null"> username </h5>\n    <!-- <button ion-button block text-align:center icon-left (click)="signInWithFacebook()"> -->\n    <button ion-button block text-align:center icon-left (click)="login(\'facebook\')">\n        <ion-icon name="logo-facebook"></ion-icon> Login via Facebook\n    </button>\n\n    <button ion-button color="danger" block text-align:center icon-left (click)="login(\'google\')">\n        <ion-icon name="logo-google"></ion-icon> Login via Google\n    </button>\n\n    <!-- <form id="login-form1">\n        <div class="spacer" style="height:40px;" id="login-spacer1"></div>\n        <ion-list id="login-list8">\n            <ion-item id="login-input1">\n                <ion-label>\n                    Email\n                </ion-label>\n                <ion-input type="email" placeholder="justclicklogin"></ion-input>\n            </ion-item>\n            <ion-item id="login-input2">\n                <ion-label>\n                    Password\n                </ion-label>\n                <ion-input type="password" placeholder=""></ion-input>\n            </ion-item>\n        </ion-list>\n    </form> -->\n\n</ion-content>'/*ion-inline-end:"/Users/ntkbb/Documents/GitHub/seen-that-car/src/pages/login/login.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */],
        __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */],
        __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(328);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 328:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_tabs_tabs__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_special_special__ = __webpack_require__(484);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_garage_garage__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(485);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_camera__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_media_capture__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angularfire2__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angularfire2_database__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angularfire2_auth__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__environments_environments__ = __webpack_require__(486);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_capture_capture__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_explore_explore__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_filtering_filtering__ = __webpack_require__(487);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_login_login__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_placeholder_placeholder__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_profile_profile__ = __webpack_require__(308);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_15__pages_capture_capture__["a" /* CapturePage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_explore_explore__["a" /* ExplorePage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_filtering_filtering__["a" /* FilteringPage */],
            __WEBPACK_IMPORTED_MODULE_2__pages_garage_garage__["a" /* GaragePage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_placeholder_placeholder__["a" /* PlaceholderPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_profile_profile__["a" /* ProfilePage */],
            __WEBPACK_IMPORTED_MODULE_1__pages_special_special__["a" /* SpecialPage */],
            __WEBPACK_IMPORTED_MODULE_0__pages_tabs_tabs__["a" /* TabsPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                links: []
            }),
            __WEBPACK_IMPORTED_MODULE_11_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_14__environments_environments__["a" /* environments */].firebaseConfig),
            __WEBPACK_IMPORTED_MODULE_12_angularfire2_database__["b" /* AngularFireDatabaseModule */],
            __WEBPACK_IMPORTED_MODULE_13_angularfire2_auth__["b" /* AngularFireAuthModule */],
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["c" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_15__pages_capture_capture__["a" /* CapturePage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_explore_explore__["a" /* ExplorePage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_filtering_filtering__["a" /* FilteringPage */],
            __WEBPACK_IMPORTED_MODULE_2__pages_garage_garage__["a" /* GaragePage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_placeholder_placeholder__["a" /* PlaceholderPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_profile_profile__["a" /* ProfilePage */],
            __WEBPACK_IMPORTED_MODULE_1__pages_special_special__["a" /* SpecialPage */],
            __WEBPACK_IMPORTED_MODULE_0__pages_tabs_tabs__["a" /* TabsPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_12_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_media_capture__["a" /* MediaCapture */],
            { provide: __WEBPACK_IMPORTED_MODULE_3__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["d" /* IonicErrorHandler */] },
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 484:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpecialPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SpecialPage = (function () {
    function SpecialPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SpecialPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SpecialPage');
    };
    return SpecialPage;
}());
SpecialPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-special',template:/*ion-inline-start:"/Users/ntkbb/Documents/GitHub/seen-that-car/src/pages/special/special.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-buttons start>\n            <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n        </ion-buttons>\n        <ion-title>Special</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    This page has no tabs!\n    <!-- <button ion-button color="danger" block icon-left (click)="doLogout()"> <ion-icon name="ios-log-out"></ion-icon>Logout</button> -->\n</ion-content>'/*ion-inline-end:"/Users/ntkbb/Documents/GitHub/seen-that-car/src/pages/special/special.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], SpecialPage);

//# sourceMappingURL=special.js.map

/***/ }),

/***/ 485:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_explore_explore__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__ = __webpack_require__(40);
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
    function MyApp(platform, afAuth, statusBar, app, splashScreen) {
        this.afAuth = afAuth;
        this.app = app;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */];
        this.pages = [
            { title: 'Explore', pageName: 'TabsPage', tabComponent: __WEBPACK_IMPORTED_MODULE_4__pages_explore_explore__["a" /* ExplorePage */], index: 0, icon: 'ios-search' },
            // { title: 'Camera', pageName: 'TabsPage', tabComponent: 'CapturePage', index: 1, icon: 'ios-camera' },
            // { title: 'Garage', pageName: 'TabsPage', tabComponent: 'GaragePage', index: 2, icon: 'ios-car' },
            // { title: 'Profile', pageName: 'TabsPage', tabComponent: 'ProfilePage', index: 3, icon: 'ios-person' },
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
            return;
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
        console.log('Sign-out Button Pressed');
        this.afAuth.auth.signOut()
            .then(function (result) {
            console.log("Sign-out", result);
            _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */]);
        })
            .catch(function (reason) {
            console.error('Error Sing-out: ', reason);
        });
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/ntkbb/Documents/GitHub/seen-that-car/src/app/app.html"*/'<!DOCTYPE html>\n<ion-menu side="left" [content]="content">\n    <ion-header>\n        <ion-toolbar>\n            <ion-title>Menu</ion-title>\n        </ion-toolbar>\n    </ion-header>\n\n    <ion-content>\n        <ion-list>\n            <button ion-item menuClose *ngFor="let p of pages" (click)="openPage(p)">\n            <ion-icon item-start [name]="p.icon" [color]="isActive(p)"></ion-icon>\n            {{ p.title }}\n          </button>\n        </ion-list>\n    </ion-content>\n</ion-menu>\n\n<!-- main navigation -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>-->'/*ion-inline-end:"/Users/ntkbb/Documents/GitHub/seen-that-car/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__["a" /* AngularFireAuth */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 486:
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

/***/ 487:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilteringPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
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
        selector: 'page-filtering',template:/*ion-inline-start:"/Users/ntkbb/Documents/GitHub/seen-that-car/src/pages/filtering/filtering.html"*/'<!DOCTYPE html>\n<!--\n  Generated template for the FilteringPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n        <ion-title>\n            Filtering\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content padding id="page7">\n    <form id="filtering-form2">\n        <ion-item id="filtering-input6">\n            <ion-label stacked>\n                License Plate\n            </ion-label>\n            <ion-input type="text" placeholder="AB 1234" name="License Plate"></ion-input>\n        </ion-item>\n        <ion-item id="filtering-select1">\n            <ion-label>\n                Brand\n            </ion-label>\n            <ion-select name="Brand">\n                <ion-option>\n                    Audi\n                </ion-option>\n                <ion-option>\n                    Toyota\n                </ion-option>\n                <ion-option>\n                    Honda\n                </ion-option>\n                <ion-option>\n                    Isuzu\n                </ion-option>\n                <ion-option>\n                    Mercedes Benz\n                </ion-option>\n                <ion-option>\n                    BMW\n                </ion-option>\n            </ion-select>\n        </ion-item>\n        <ion-item id="filtering-select2">\n            <ion-label>\n                Color\n            </ion-label>\n            <ion-select name="Color">\n                <ion-option>\n                    Black\n                </ion-option>\n                <ion-option>\n                    White\n                </ion-option>\n                <ion-option>\n                    Brown\n                </ion-option>\n                <ion-option>\n                    Blue\n                </ion-option>\n                <ion-option>\n                    Red\n                </ion-option>\n                <ion-option>\n                    Green\n                </ion-option>\n                <ion-option>\n                    Grey\n                </ion-option>\n            </ion-select>\n        </ion-item>\n        <ion-item id="filtering-select3">\n            <ion-label>\n                Date/Time\n            </ion-label>\n            <ion-select name="Date/Time"></ion-select>\n        </ion-item>\n    </form>\n</ion-content>'/*ion-inline-end:"/Users/ntkbb/Documents/GitHub/seen-that-car/src/pages/filtering/filtering.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], FilteringPage);

//# sourceMappingURL=filtering.js.map

/***/ })

},[312]);
//# sourceMappingURL=main.js.map