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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _components_setup_setup_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/setup/setup.component */ "./src/app/components/setup/setup.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_fupload_fupload_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/fupload/fupload.component */ "./src/app/components/fupload/fupload.component.ts");
/* harmony import */ var _components_pim_pim_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/pim/pim.component */ "./src/app/components/pim/pim.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', component: _components_fupload_fupload_component__WEBPACK_IMPORTED_MODULE_3__["FuploadComponent"] },
    { path: 'setup', component: _components_setup_setup_component__WEBPACK_IMPORTED_MODULE_0__["SetupComponent"] },
    { path: 'pim', component: _components_pim_pim_component__WEBPACK_IMPORTED_MODULE_4__["PimComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
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

module.exports = ".main-class{\r\n   border: 1em;\r\n}\r\n.main-h{\r\n  margin-left: 3em;\r\n  color:red\r\n}\r\n.main-b{\r\n  margin-left: 6em;\r\n\r\n}\r\nmain {\r\n  width: 80%;\r\n  margin: 2rem auto;\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<app-header></app-header>\n  <main>\n     <router-outlet></router-outlet>\n  </main>\n\n"

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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'commerceblob';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _formslider_formslider_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./formslider/formslider.component */ "./src/app/formslider/formslider.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _components_fupload_fupload_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/fupload/fupload.component */ "./src/app/components/fupload/fupload.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_setup_setup_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/setup/setup.component */ "./src/app/components/setup/setup.component.ts");
/* harmony import */ var _components_pim_pim_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/pim/pim.component */ "./src/app/components/pim/pim.component.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _formslider_formslider_component__WEBPACK_IMPORTED_MODULE_4__["FormsliderComponent"],
                ng2_file_upload__WEBPACK_IMPORTED_MODULE_2__["FileSelectDirective"],
                _components_fupload_fupload_component__WEBPACK_IMPORTED_MODULE_8__["FuploadComponent"],
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_11__["HeaderComponent"],
                _components_setup_setup_component__WEBPACK_IMPORTED_MODULE_12__["SetupComponent"],
                _components_pim_pim_component__WEBPACK_IMPORTED_MODULE_13__["PimComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatProgressSpinnerModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatExpansionModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/commercepic.service.ts":
/*!****************************************!*\
  !*** ./src/app/commercepic.service.ts ***!
  \****************************************/
/*! exports provided: CommercepicService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommercepicService", function() { return CommercepicService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CommercepicService = /** @class */ (function () {
    function CommercepicService(http, router) {
        this.http = http;
        this.router = router;
        this.messageUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.matFunUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    CommercepicService.prototype.getMessage = function () {
        this.message = { msg: 'ok' };
        return this.message;
    };
    CommercepicService.prototype.getMessageUpdateListener = function () {
        return this.messageUpdated.asObservable();
    };
    CommercepicService.prototype.getmatFunUpdateListener = function () {
        return this.matFunUpdated.asObservable();
    };
    CommercepicService.prototype.set_Message = function (mess) {
        this.message = { msg: 'ok' };
        this.message.msg = mess;
        this.messageUpdated.next(this.message);
    };
    CommercepicService.prototype.getMessage1 = function () {
        return 'ok';
    };
    CommercepicService.prototype.setMatFun = function (matFun, f) {
        console.log('matFun' + matFun);
        this.matFunOrg = matFun;
        this.matFun = this._convert2FunNr(matFun);
        this.matFunUpdated.next(this.matFun);
        this.matFunFile = f;
    };
    CommercepicService.prototype.getMatFunOrg = function () {
        return this.matFunOrg;
    };
    CommercepicService.prototype.getMatFun = function () {
        return this.matFun;
    };
    CommercepicService.prototype.getMatFile = function () {
        return this.matFunFile;
    };
    CommercepicService.prototype._convert2FunNr = function (matnr) {
        return matnr.substring(0, 3) + '.' + matnr.substring(3, 7) + '.' + matnr.substring(7, 10);
    };
    CommercepicService.prototype.getSetup = function () {
        this.lPost = [
            { id: '1',
                title: 'title1',
                content: 'content2' },
            { id: '2',
                title: 'title2 ',
                content: 'content2' }
        ];
        return this.lPost;
    };
    CommercepicService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], CommercepicService);
    return CommercepicService;
}());



/***/ }),

/***/ "./src/app/components/fupload/fupload.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/fupload/fupload.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\r\n  border-collapse: separate;\r\n  border-spacing: 0.2em;\r\n}\r\n\r\nth,td {\r\n  padding: 0.2em 0.5em;\r\n  border-radius: 0.1em;\r\n}\r\n\r\nthead th {\r\n  background-color: #ffebe6;\r\n  color: #c32e04;\r\n}\r\n\r\ntd {\r\n  font-style:italic;\r\n  text-align: right;\r\n  box-shadow: inset 1px 3px 5px -3px rgba(0,0,0,0.5);\r\n}\r\n\r\ntd:empty{\r\n  box-shadow: none;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/fupload/fupload.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/fupload/fupload.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <input type=\"file\" name=\"photo\" accept=\".jpg\" ng2FileSelect [uploader]=\"uploader\" />\n  <mat-spinner *ngIf='isLoading'></mat-spinner>\n  <button type=\"button\" class=\"btn btn-success btn-s\"\n    (click)=\"upload()\"\n    [disabled]=\"!uploader.getNotUploadedItems().length\" >\n        Upload an Image\n  </button>\n  <button type=\"button\" class=\"btn btn-success btn-s\"  (click)=\"refresh()\">\n    Refresh    {{displayMsg}}\n</button>\n \n <br>\n <br>\n\n  <div *ngIf=\"uploader.getNotUploadedItems().length\">\n     <img [src]=\"sanitizer.bypassSecurityTrustUrl(localImageUrl)\" style=\"width:500px;height:500px\"  >\n </div>\n\n<div ng-controller=\"autoRefreshApp\">\n<div ng-app='autoRefreshController'  style=\"width:100%\" >\n  <table style=\"width:10%\">\n    {{fileName}}\n  <tr>\n    <th>{{res_104}}</th>\n    <th>{{res_162}}</th>\n    <th>{{res_208}}</th>\n    <th>{{res_500}}</th>\n  </tr>\n  <tr>\n    <td>\n     <img src =\"{{f_104}}\" alt=\"image104\"   style=\"width:104px;height:104px\"  >\n   </td>\n    <td>\n      <img src=\"{{f_162}}\" alt =\"image162\" style=\"width:162px;height:162px\"  >\n    </td>\n    <td>\n      <img src=\"{{f_208}}\" alt =\"image208\"  style=\"width:208px;height:208px\"  >\n    </td>\n\n    <td>\n      <img src=\"{{f_500}}\" alt =\"image500\" style=\"width:500px;height:500px\"  >\n     </td>\n  </tr>\n</table>\n</div>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/components/fupload/fupload.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/fupload/fupload.component.ts ***!
  \*********************************************************/
/*! exports provided: FuploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuploadComponent", function() { return FuploadComponent; });
/* harmony import */ var _commercepic_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../commercepic.service */ "./src/app/commercepic.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng2_file_upload_ng2_file_upload__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-file-upload/ng2-file-upload */ "./node_modules/ng2-file-upload/ng2-file-upload.js");
/* harmony import */ var ng2_file_upload_ng2_file_upload__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload_ng2_file_upload__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var URL = 'http://fbs179g:3000/test/api/up';
var FuploadComponent = /** @class */ (function () {
    function FuploadComponent(sanitizer, http, comService) {
        this.sanitizer = sanitizer;
        this.http = http;
        this.comService = comService;
        this.selected = true;
        this.fileName = 'no Image';
        this.localImageUrl = '';
        this.displayMsg = 'Test';
        this.isLoading = false;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                'Content-Type': 'text/html'
            })
        };
        this.res_208 = '208Wx208H';
        this.res_500 = '500Wx500H';
        this.res_162 = '162Wx162H';
        this.res_104 = '104Wx104H';
        this.f_104 = '';
        this.f_162 = '';
        this.f_208 = '';
        this.f_500 = '';
        this.f_http = ' //fbs179g:3000/test/api/down?image=';
        this.f_http_ = '//fbs179g:3000/test/api/check?image=';
        this.uploader = new ng2_file_upload_ng2_file_upload__WEBPACK_IMPORTED_MODULE_2__["FileUploader"]({ url: URL, itemAlias: 'photo' });
    }
    FuploadComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.comService.getMessageUpdateListener()
            .subscribe(function (cmessage) {
            _this.cmessage = cmessage;
            _this.displayMsg = cmessage.msg;
        });
        this.fileName = this.comService.getMatFunOrg() + '.jpg';
        if (this.fileName) {
            console.log(this.fileName);
            //    this.comService.getMatFile();
            this._initFname(this.fileName);
            var a = void 0;
            console.log(this.comService.getMatFile());
            //    a[0] = this.comService.getMatFile();
            // a.push('asdfa');
            //this.uploader.addToQueue( a );
            //this.uploader.addToQueue();
        }
        //  alert('ngOnInit =>' + this.fileName);
        this.uploader.onAfterAddingFile = function (file) {
            file.withCredentials = false;
            _this.fileName = file.file.name;
            var url1 = (window.URL) ? window.URL.createObjectURL(file._file) : window.webkitURL.createObjectURL(file._file);
            console.log(url1);
            _this.localImageUrl = url1;
            _this._initFname(_this.fileName);
            console.log('==>' + _this.fileName.replace('.jpg', '').replace('picture', ''));
            _this.comService.setMatFun(_this.fileName.replace('.jpg', '').replace('picture', ''), file);
            //   alert(file._file.name);
        };
        this.uploader.onCompleteItem = function (item, response, status, headers) {
            //  alert('ImageUpload:uploaded:', item, status, response);
            // alert(' File uploaded successfully');
        };
        this.uploader.onSuccessItem = function (item, response, status, headers) {
            //  alert('ImageUpload:uploaded Success:', item, status, response);
            setTimeout(function () {
                _this._testExist(_this.fileName);
                _this.isLoading = false;
            }, 2000);
        };
    };
    FuploadComponent.prototype.extractData = function (res) {
        var body = res;
        return body || {};
    };
    FuploadComponent.prototype.upload = function () {
        this.isLoading = true,
            this.uploader.uploadAll();
    };
    FuploadComponent.prototype.refresh_ = function () {
        //  alert(this.fileName);
        // alert(this.uploader)
        this.uploader.clearQueue();
        //  this._initFname('');
        // this._initFname(this.fileName);
        this._testExist(this.fileName);
    };
    FuploadComponent.prototype.refresh = function () {
        this.cmessage = this.comService.getMessage();
        this._testExist(this.fileName);
        this.comService.set_Message('erfolg!!');
    };
    FuploadComponent.prototype._testExit_2 = function (fName) {
        var _this = this;
        this._initFname('');
        var strUrl = '';
        console.log(fName);
        strUrl = this.f_http_ + fName + '&res=' + this.res_104;
        this.http.request('GET', strUrl, { responseType: 'text' }).subscribe(function (res) {
            _this.f_104 = _this.f_http + res;
        });
        console.log('URL  ==>' + this.f_104);
        strUrl = this.f_http_ + fName + '&res=' + this.res_500;
        this.http.request('GET', strUrl, { responseType: 'text' }).subscribe(function (res) {
            _this.f_500 = _this.f_http + res;
        });
        console.log('URL  ==>' + this.f_500);
        strUrl = this.f_http_ + fName + '&res=' + this.res_208;
        this.http.request('GET', strUrl, { responseType: 'text' }).subscribe(function (res) {
            _this.f_208 = _this.f_http + res;
        });
        console.log('URL  ==>' + this.f_208);
        strUrl = this.f_http_ + fName + '&res=' + this.res_162;
        this.http.request('GET', strUrl, { responseType: 'text' }).subscribe(function (res) {
            _this.f_162 = _this.f_http + res;
        });
        console.log(this.f_162);
    };
    FuploadComponent.prototype._testExist = function (fName) {
        var _this = this;
        this._initFname('');
        var strUrl = '';
        fName = this.fileName;
        console.log(fName);
        strUrl = this.f_http_ + fName + '&res=' + this.res_500;
        this.http.request('GET', strUrl, { responseType: 'text' }).subscribe(function (res) {
            _this.f_500 = _this.f_http + res;
        });
        console.log('URL  ==>' + this.f_500);
        strUrl = this.f_http_ + fName + '&res=' + this.res_208;
        this.http.request('GET', strUrl, { responseType: 'text' }).subscribe(function (res) {
            _this.f_208 = _this.f_http + res;
        });
        console.log('URL  ==>' + this.f_208);
        strUrl = this.f_http_ + fName + '&res=' + this.res_104;
        this.http.request('GET', strUrl, { responseType: 'text' }).subscribe(function (res) {
            _this.f_104 = _this.f_http + res;
        });
        console.log(this.f_104);
        strUrl = this.f_http_ + fName + '&res=' + this.res_162;
        this.http.request('GET', strUrl, { responseType: 'text' }).subscribe(function (res) {
            _this.f_162 = _this.f_http + res;
        });
        console.log(this.f_162);
    };
    FuploadComponent.prototype._initFname = function (filename) {
        if (filename.length === 0) {
            this.f_104 = '';
            this.f_162 = '';
            this.f_208 = '';
            this.f_500 = '';
            // alert('leer' + this.f_500);.
        }
        else {
            this.f_104 = this.f_http + filename + '&res=' + this.res_104;
            this.f_162 = this.f_http + filename + '&res=' + this.res_162;
            this.f_208 = this.f_http + filename + '&res=' + this.res_208;
            this.f_500 = this.f_http + filename + '&res=' + this.res_500;
            // alert(this.f_500);
        }
    };
    FuploadComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-fupload',
            template: __webpack_require__(/*! ./fupload.component.html */ "./src/app/components/fupload/fupload.component.html"),
            styles: [__webpack_require__(/*! ./fupload.component.css */ "./src/app/components/fupload/fupload.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], _commercepic_service__WEBPACK_IMPORTED_MODULE_0__["CommercepicService"]])
    ], FuploadComponent);
    return FuploadComponent;
}());



/***/ }),

/***/ "./src/app/components/header/header.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/header/header.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  display: flex;\n}\n\na {\n  text-decoration: none;\n  color: white;\n}\n\n.spacer {\n  flex: 1 1 auto;\n}\n\n\n"

/***/ }),

/***/ "./src/app/components/header/header.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n  <span>\n    <a routerLink=\"/\">e-Commerce File Upload</a>\n  </span>\n  <span class=\"spacer\"></span>\n  <ul>\n    <li>\n      <a mat-button routerLink=\"/setup\"  routerLinkActive=\"mat-accent\">Setup</a>\n    </li>\n    <li>\n      <a mat-button routerLink=\"/pim\"    routerLinkActive=\"mat-accent\">Pim</a>\n    </li>\n    <li>\n      <a mat-button routerLink=\"/\"      routerLinkActive=\"mat-accent\">back</a>\n    </li>\n  </ul>\n</mat-toolbar>\n"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/components/header/header.component.css")]
        })
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/pim/pim.component.css":
/*!**************************************************!*\
  !*** ./src/app/components/pim/pim.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\r\n  border-collapse: separate;\r\n  border-spacing: 0.2em;\r\n}\r\n\r\nth,td {\r\n  padding: 0.2em 0.5em;\r\n  border-radius: 0.1em;\r\n}\r\n\r\nthead th {\r\n  background-color: #ffebe6;\r\n  color: #c32e04;\r\n}\r\n\r\ntd {\r\n  font-style:italic;\r\n  text-align: right;\r\n  box-shadow: inset 1px 3px 5px -3px rgba(0,0,0,0.5);\r\n}\r\n\r\ntd:empty{\r\n  box-shadow: none;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/pim/pim.component.html":
/*!***************************************************!*\
  !*** ./src/app/components/pim/pim.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n     <div>\n        Existing Pictures on PIM for Material Number {{matnr}}\n        <br>\n       </div>\n         <table style=\"width:10%\">\n\n        <tr>\n          <th>Pictures</th>\n          <th>Drawings</th>\n        </tr>\n        <tr>\n        <td>\n        <ul>\n            <li *ngFor=\"let item of imgPic; let i = index\" [attr.data-index]=\"i\">\n                 {{resValPic[i]}}\n                <img src =\"{{item}}\" alt=\"{{item}}\"   style=\"width:104px;height:104px\"  >\n\n            </li>\n        </ul>\n      </td>\n      <td>\n      <ul>\n          <li *ngFor=\"let item of imgDraw; let i = index\" [attr.data-index]=\"i\">\n               {{resValDraw[i]}}\n              <img src =\"{{item}}\" alt=\"{{item}}\"   style=\"width:104px;height:104px\"  >\n\n          </li>\n      </ul>\n    </td>\n    </tr>\n    </table>\n\n\n\n\n"

/***/ }),

/***/ "./src/app/components/pim/pim.component.ts":
/*!*************************************************!*\
  !*** ./src/app/components/pim/pim.component.ts ***!
  \*************************************************/
/*! exports provided: PimComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PimComponent", function() { return PimComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _commercepic_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../commercepic.service */ "./src/app/commercepic.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PimComponent = /** @class */ (function () {
    function PimComponent(comService) {
        this.comService = comService;
        this.host = 'https://onepim-content.franke.com/api/public/c4c/?division=10005&organizationalUnits=global';
        this.resPic = ['10091', '10092', '10090', '10088', '10086'];
        this.resDraw = ['10263', '10264'];
        this.resValPic = ['486x486', '640x640', '390x390', '250x250', '1000x1000'];
        this.resValDraw = ['640x640', '860x860'];
        this.artikelt1 = '&article=' + this.matnr + '&type=10031&res=10264&usage=em';
        this.artikelt2 = '&article=' + this.matnr + '&type=10032&res=10263&usage=em';
        this.imgPic = [];
        this.imgDraw = [];
    }
    ;
    PimComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.comService.getmatFunUpdateListener()
            .subscribe(function (funNr) {
            _this.matnr = funNr;
            _this._setPimUrl();
            // alert( 'FunNr subscripbe' + funNr);
        });
        this.matnr = this.comService.getMatFun();
        this._setPimUrl();
    };
    PimComponent.prototype.ngOnDestroy = function () {
    };
    PimComponent.prototype._setPimUrl = function () {
        var i;
        for (i = 0; i < 5; i++) {
            this.imgPic[i] = this.host + '&article=' + this.matnr + '&type=10030&res=' + this.resPic[i] + '&usage=em';
        }
        for (i = 0; i < 2; i++) {
            this.imgDraw[i] = this.host + '&article=' + this.matnr + '&type=10031&res=' + this.resDraw[i] + '&usage=em';
        }
    };
    PimComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pim',
            template: __webpack_require__(/*! ./pim.component.html */ "./src/app/components/pim/pim.component.html"),
            styles: [__webpack_require__(/*! ./pim.component.css */ "./src/app/components/pim/pim.component.css")]
        }),
        __metadata("design:paramtypes", [_commercepic_service__WEBPACK_IMPORTED_MODULE_1__["CommercepicService"]])
    ], PimComponent);
    return PimComponent;
}());



/***/ }),

/***/ "./src/app/components/setup/setup.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/setup/setup.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/setup/setup.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/setup/setup.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<mat-spinner *ngIf='isLoading'></mat-spinner>\n<mat-accordion multi=\"true\" *ngIf=\"posts.length > 0 && !isLoading\">\n  <mat-expansion-panel *ngFor=\"let post of posts\">\n    <mat-expansion-panel-header>\n      {{ post.title }}\n    </mat-expansion-panel-header>\n    <p>{{ post.content }}</p>\n    <mat-action-row>\n      <a mat-button color=\"primary\" [routerLink]=\"['/edit', post.id]\">EDIT</a>\n      <button mat-button color=\"warn\" (click)='onDelete(post.id)'>DELETE</button>\n    </mat-action-row>\n  </mat-expansion-panel>\n</mat-accordion>\n<p class=\"info-text mat-body-1\" *ngIf=\"posts.length <= 0 && !isLoading\">No posts added yet!</p>\n"

/***/ }),

/***/ "./src/app/components/setup/setup.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/setup/setup.component.ts ***!
  \*****************************************************/
/*! exports provided: SetupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetupComponent", function() { return SetupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _commercepic_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../commercepic.service */ "./src/app/commercepic.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SetupComponent = /** @class */ (function () {
    function SetupComponent(comService) {
        this.comService = comService;
        this.isLoading = false;
    }
    SetupComponent.prototype.ngOnInit = function () {
        this.posts = this.comService.getSetup();
    };
    SetupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-setup',
            template: __webpack_require__(/*! ./setup.component.html */ "./src/app/components/setup/setup.component.html"),
            styles: [__webpack_require__(/*! ./setup.component.css */ "./src/app/components/setup/setup.component.css")]
        }),
        __metadata("design:paramtypes", [_commercepic_service__WEBPACK_IMPORTED_MODULE_1__["CommercepicService"]])
    ], SetupComponent);
    return SetupComponent;
}());



/***/ }),

/***/ "./src/app/formslider/formslider.component.css":
/*!*****************************************************!*\
  !*** ./src/app/formslider/formslider.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/formslider/formslider.component.html":
/*!******************************************************!*\
  !*** ./src/app/formslider/formslider.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  formslider works!\n</p>\n"

/***/ }),

/***/ "./src/app/formslider/formslider.component.ts":
/*!****************************************************!*\
  !*** ./src/app/formslider/formslider.component.ts ***!
  \****************************************************/
/*! exports provided: FormsliderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormsliderComponent", function() { return FormsliderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FormsliderComponent = /** @class */ (function () {
    function FormsliderComponent() {
    }
    FormsliderComponent.prototype.ngOnInit = function () {
    };
    FormsliderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-formslider',
            template: __webpack_require__(/*! ./formslider.component.html */ "./src/app/formslider/formslider.component.html"),
            styles: [__webpack_require__(/*! ./formslider.component.css */ "./src/app/formslider/formslider.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FormsliderComponent);
    return FormsliderComponent;
}());



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
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\daten\nodejs\angular\commerceblob\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map