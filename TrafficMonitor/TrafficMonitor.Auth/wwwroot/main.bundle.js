webpackJsonp(["main"],{

/***/ "../../../../../src lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".notransition * {\r\n    transition: none !important;\r\n  }\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n  <app-login></app-login>\r\n  <app-topmenu></app-topmenu>\r\n  <app-sidemenu></app-sidemenu>\r\n  <app-widgetarea></app-widgetarea>\r\n  <app-footer></app-footer>\r\n  <app-controlsidebar></app-controlsidebar>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_topmenu_topmenu_component__ = __webpack_require__("../../../../../src/app/components/topmenu/topmenu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_sidemenu_sidemenu_component__ = __webpack_require__("../../../../../src/app/components/sidemenu/sidemenu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_footer_footer_component__ = __webpack_require__("../../../../../src/app/components/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_widgetarea_widgetarea_component__ = __webpack_require__("../../../../../src/app/components/widgetarea/widgetarea.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_controlsidebar_controlsidebar_component__ = __webpack_require__("../../../../../src/app/components/controlsidebar/controlsidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_widgetLibrary_service_widget_library_service__ = __webpack_require__("../../../../../src/app/services/widgetLibrary-service/widget-library.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__directives_widget_host_directive__ = __webpack_require__("../../../../../src/app/directives/widget-host.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_user_service_user_service__ = __webpack_require__("../../../../../src/app/services/user-service/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_dashboardcontroller_service_dashboardcontroller_service__ = __webpack_require__("../../../../../src/app/services/dashboardcontroller-service/dashboardcontroller.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_googlemapscontainer_googlemapscontainer_service__ = __webpack_require__("../../../../../src/app/services/googlemapscontainer/googlemapscontainer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ngx_loading__ = __webpack_require__("../../../../ngx-loading/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_auth_auth_service__ = __webpack_require__("../../../../../src/app/services/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//Modules



//Layout






//Services






//danymic components



var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            //Layout ----->
            __WEBPACK_IMPORTED_MODULE_4__components_topmenu_topmenu_component__["a" /* TopmenuComponent */],
            __WEBPACK_IMPORTED_MODULE_5__components_sidemenu_sidemenu_component__["a" /* SidemenuComponent */],
            __WEBPACK_IMPORTED_MODULE_6__components_footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_widgetarea_widgetarea_component__["a" /* WidgetareaComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_controlsidebar_controlsidebar_component__["a" /* ControlsidebarComponent */],
            __WEBPACK_IMPORTED_MODULE_10__directives_widget_host_directive__["a" /* WidgetHostDirective */],
            __WEBPACK_IMPORTED_MODULE_16__components_login_login_component__["a" /* LoginComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_14__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_15_ngx_loading__["a" /* LoadingModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_9__services_widgetLibrary_service_widget_library_service__["a" /* WidgetLibraryService */], __WEBPACK_IMPORTED_MODULE_11__services_user_service_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_12__services_dashboardcontroller_service_dashboardcontroller_service__["a" /* DashboardcontrollerService */], __WEBPACK_IMPORTED_MODULE_13__services_googlemapscontainer_googlemapscontainer_service__["a" /* GoogleMapsContainerService */], __WEBPACK_IMPORTED_MODULE_15_ngx_loading__["a" /* LoadingModule */], __WEBPACK_IMPORTED_MODULE_17__services_auth_auth_service__["a" /* AuthService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/controlsidebar/controlsidebar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/controlsidebar/controlsidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Control Sidebar -->\r\n<aside class=\"control-sidebar control-sidebar-dark\">\r\n  <!-- Create the tabs -->\r\n  <ul class=\"nav nav-tabs nav-justified control-sidebar-tabs\">\r\n    <li class=\"active\"><a href=\"#control-sidebar-home-tab\" data-toggle=\"tab\"><i class=\"fa fa-home\"></i></a></li>\r\n    <li><a href=\"#control-sidebar-settings-tab\" data-toggle=\"tab\"><i class=\"fa fa-gears\"></i></a></li>\r\n  </ul>\r\n  <!-- Tab panes -->\r\n  <div class=\"tab-content\">\r\n    <!-- Home tab content -->\r\n    <div class=\"tab-pane active\" id=\"control-sidebar-home-tab\">\r\n      <h3 class=\"control-sidebar-heading\">Recent Activity</h3>\r\n      <ul class=\"control-sidebar-menu\">\r\n        <li>\r\n          <a href=\"javascript:;\">\r\n            <i class=\"menu-icon fa fa-birthday-cake bg-red\"></i>\r\n\r\n            <div class=\"menu-info\">\r\n              <h4 class=\"control-sidebar-subheading\">Langdon's Birthday</h4>\r\n\r\n              <p>Will be 23 on April 24th</p>\r\n            </div>\r\n          </a>\r\n        </li>\r\n      </ul>\r\n      <!-- /.control-sidebar-menu -->\r\n\r\n      <h3 class=\"control-sidebar-heading\">Tasks Progress</h3>\r\n      <ul class=\"control-sidebar-menu\">\r\n        <li>\r\n          <a href=\"javascript:;\">\r\n            <h4 class=\"control-sidebar-subheading\">\r\n              Custom Template Design\r\n              <span class=\"pull-right-container\">\r\n                  <span class=\"label label-danger pull-right\">70%</span>\r\n                </span>\r\n            </h4>\r\n\r\n            <div class=\"progress progress-xxs\">\r\n              <div class=\"progress-bar progress-bar-danger\" style=\"width: 70%\"></div>\r\n            </div>\r\n          </a>\r\n        </li>\r\n      </ul>\r\n      <!-- /.control-sidebar-menu -->\r\n\r\n    </div>\r\n    <!-- /.tab-pane -->\r\n    <!-- Stats tab content -->\r\n    <div class=\"tab-pane\" id=\"control-sidebar-stats-tab\">Stats Tab Content</div>\r\n    <!-- /.tab-pane -->\r\n    <!-- Settings tab content -->\r\n    <div class=\"tab-pane\" id=\"control-sidebar-settings-tab\">\r\n      <form method=\"post\">\r\n        <h3 class=\"control-sidebar-heading\">General Settings</h3>\r\n\r\n        <div class=\"form-group\">\r\n          <label class=\"control-sidebar-subheading\">\r\n            Report panel usage\r\n            <input type=\"checkbox\" class=\"pull-right\" checked>\r\n          </label>\r\n\r\n          <p>\r\n            Some information about this general settings option\r\n          </p>\r\n        </div>\r\n        <!-- /.form-group -->\r\n      </form>\r\n    </div>\r\n    <!-- /.tab-pane -->\r\n  </div>\r\n</aside>\r\n<!-- /.control-sidebar -->\r\n<!-- Add the sidebar's background. This div must be placed\r\nimmediately after the control sidebar -->\r\n<div class=\"control-sidebar-bg\"></div>"

/***/ }),

/***/ "../../../../../src/app/components/controlsidebar/controlsidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ControlsidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ControlsidebarComponent = (function () {
    function ControlsidebarComponent() {
    }
    ControlsidebarComponent.prototype.ngOnInit = function () {
    };
    return ControlsidebarComponent;
}());
ControlsidebarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-controlsidebar',
        template: __webpack_require__("../../../../../src/app/components/controlsidebar/controlsidebar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/controlsidebar/controlsidebar.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ControlsidebarComponent);

//# sourceMappingURL=controlsidebar.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Main Footer -->\r\n<footer class=\"main-footer\">\r\n  <!-- To the right -->\r\n  <div class=\"pull-right hidden-xs\">\r\n    Trafik data\r\n  </div>\r\n  <!-- Default to the left -->\r\n  <strong>Copyright &copy; 2017 <a href=\"#\">Odense Kommune</a>.</strong> All rights reserved.\r\n</footer>"

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-footer',
        template: __webpack_require__("../../../../../src/app/components/footer/footer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/footer/footer.component.css")]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#login{\r\n    background: rgba(0,0,0,0.7);\r\n    width: 100%;\r\n    height: 100%;\r\n    margin: 0 !important;\r\n    padding: 20vh 0 0 0 !important;\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    z-index: 9999999;\r\n}\r\n.hide{\r\n  display: none;\r\n}\r\n.login-page {\r\n  width: 360px;\r\n  margin: auto;\r\n}\r\n.form {\r\n  position: relative;\r\n  z-index: 1;\r\n  background: #FFFFFF;\r\n  max-width: 360px;\r\n  margin: 0 auto 100px;\r\n  padding: 45px;\r\n  text-align: center;\r\n  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);\r\n  border: 1px solid transparent;\r\n}\r\n#login.error .form,\r\n#login.error .form input.login-input{\r\n  border: 1px solid #e44;\r\n}\r\n.form input {\r\n  font-family: \"Roboto\", sans-serif;\r\n  outline: 0;\r\n  background: #f2f2f2;\r\n  width: 100%;\r\n  border: 0;\r\n  margin: 0 0 15px;\r\n  padding: 15px;\r\n  box-sizing: border-box;\r\n  font-size: 1.5rem;\r\n  border: 1px solid transparent;\r\n}\r\n.form input[type=\"checkbox\"]{\r\n  width: auto;\r\n}\r\n.form button {\r\n  font-family: \"Roboto\", sans-serif;\r\n  text-transform: uppercase;\r\n  outline: 0;\r\n  background: #00c0ef;\r\n  width: 100%;\r\n  border: 0;\r\n  padding: 15px;\r\n  color: #FFFFFF;\r\n  font-size: 14px;\r\n  transition: all 0.3 ease;\r\n  cursor: pointer;\r\n}\r\n.form button:hover,.form button:active,.form button:focus {\r\n  background: #45D9FF;\r\n}\r\n.form p,\r\n.form label {\r\n  margin: 15px 0 0;\r\n  color: #b3b3b3;\r\n  font-size: 1.2rem;\r\n  font-weight: normal;\r\n}\r\n.form label{\r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n}\r\n.form label:hover{\r\n  color: #00c0ef;\r\n}\r\n.form .message a {\r\n  color: #00c0ef;\r\n  text-decoration: none;\r\n}\r\n.form .register-form {\r\n  display: none;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"login\">\r\n    <div class=\"login-page\">\r\n        <div class=\"form\">\r\n            <form class=\"login-form\">\r\n                <div>\r\n                    <input #user class=\"login-input\" type=\"text\" placeholder=\"Brugernavn\" (keyup.enter)=\"login(user.value, password.value)\" (blur)=\"validateUsername(user.value, $event)\" data-toggle=\"popover\" data-placement=\"right\" title=\"Fejl i e-mail\" data-content=\"Forkert e-mail format\" autofocus/>    \r\n                </div>\r\n                <div>\r\n                    <input #password class=\"login-input\" type=\"password\" placeholder=\"Adgangkode\" (keyup.enter)=\"login(user.value, password.value)\" (blur)=\"validatePassword(user.value, $event)\" data-toggle=\"popover\" data-placement=\"right\" title=\"Fejl i adgangkode\" data-content=\"Forkert adgangskode<br/>Adgangskode skal indeholde mindst 6 bogstaver\" autocomplete=\"off\"/>\r\n                </div>\r\n                <div>\r\n                    <input #remember id=\"remember\" type=\"checkbox\" placeholder=\"Husk mig\"/>\r\n                    <label for=\"remember\">Husk min login</label>\r\n                </div>\r\n                <button type=\"button\" (click)=\"login(user.value, password.value)\">Login</button>\r\n                <p class=\"message\">Mangler en bruger? <a href=\"#\">Opret en bruger</a></p>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_auth_service__ = __webpack_require__("../../../../../src/app/services/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import { Router } from '@angular/router';

var LoginComponent = LoginComponent_1 = (function () {
    function LoginComponent(auth) {
        this.auth = auth;
        this.boxState = null;
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.getIdentity()
            .then(function (x) {
            if (x) {
                _this.auth.setIdentity(x);
                _this.ok();
                _this.hide();
                //$(LoginComponent.loginBoxSelector).addClass("hide");
            }
            else {
                _this.show();
                //$(LoginComponent.loginBoxSelector).removeClass("hide");
            }
        })
            .catch(function (x) {
            console.log(x);
        });
    };
    LoginComponent.prototype.login = function (username, password) {
        var _this = this;
        if (this.isUsername(username) && this.isPassword(password)) {
            this.auth.signInAsync(username, password, this.isRemember())
                .then(function (x) {
                if (x) {
                    _this.auth.user = {
                        firstName: x.firstName,
                        lastName: x.lastName,
                        department: x.department,
                        occupation: x.occupation,
                        configuration: null
                    };
                    _this.hide();
                    _this.ok();
                }
                else {
                    _this.show();
                    _this.warning();
                }
            })
                .catch(function (x) {
                _this.show();
                _this.warning();
            });
        }
        else {
            console.log("User information is not meet the requirement");
        }
        //this.auth.signIn(username, password, this.onSuccess, this.onError);
        //this.auth.fakeSignIn(username, password, this.onSuccess, this.onError);
    };
    LoginComponent.prototype.isRemember = function () {
        var elm = $("#remember");
        return elm && elm.checked;
    };
    LoginComponent.prototype.validateEmail = function (value, e) {
        if (!this.userBox) {
            this.userBox = this.getElement(e);
        }
        if (!this.isEmail(value)) {
            var target = this.getElement(e);
            if (target) {
                $(target).addClass("error");
            }
        }
    };
    LoginComponent.prototype.validateUsername = function (value, e) {
        if (!this.userBox) {
            this.userBox = this.getElement(e);
        }
        if (!this.isUsername(value)) {
            var target = this.getElement(e);
            if (target) {
                $(target).addClass("error");
            }
        }
    };
    LoginComponent.prototype.validatePassword = function (value, e) {
        if (!this.passBox) {
            this.passBox = this.getElement(e);
        }
        if (this.isPassword(value)) {
        }
        else {
            // Do something when password is invalid
        }
    };
    LoginComponent.prototype.show = function () {
        $(LoginComponent_1.loginBoxSelector).removeClass("hide");
    };
    LoginComponent.prototype.hide = function () {
        $(LoginComponent_1.loginBoxSelector).addClass("hide");
    };
    LoginComponent.prototype.warning = function () {
        $(LoginComponent_1.loginBoxSelector).addClass("error");
    };
    LoginComponent.prototype.ok = function () {
        $(LoginComponent_1.loginBoxSelector).removeClass("error");
    };
    LoginComponent.prototype.clear = function () {
        var elm = $(LoginComponent_1.loginInputSelector);
        if (elm) {
            elm.val("");
        }
    };
    LoginComponent.prototype.isReady = function () {
        return true;
    };
    LoginComponent.prototype.onAuthorize = function (data) {
    };
    // This methos is not a part of this scope
    // When try to access local scope will cause an error
    LoginComponent.prototype.onSuccess = function (data) {
        $(LoginComponent_1.loginBoxSelector).addClass("hide");
    };
    // This methos is not a part of this scope
    // When try to access local scope will cause an error
    LoginComponent.prototype.onError = function (data) {
        console.log(data);
    };
    LoginComponent.prototype.onLogin = function () {
        //this.router.navigate(["./dashboard"]);
    };
    LoginComponent.prototype.isEmail = function (value) {
        return value && value.length > 4 && /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value);
    };
    LoginComponent.prototype.isUsername = function (value) {
        return value && value.length >= LoginComponent_1.minUserLength && /^[A-Za-z0-9\_\-\.\@\/]+$/.test(value);
    };
    LoginComponent.prototype.isPassword = function (value) {
        return value && value.length >= LoginComponent_1.minPassLength;
    };
    LoginComponent.prototype.getElement = function (e) {
        if (e && e.target) {
            return e.target;
        }
        return null;
    };
    return LoginComponent;
}());
LoginComponent.minPassLength = 3;
LoginComponent.minUserLength = 3;
LoginComponent.loginBoxSelector = "#login";
LoginComponent.loginInputSelector = '#login input[type="text"]';
LoginComponent = LoginComponent_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], LoginComponent);

var LoginComponent_1, _a;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/sidemenu/sidemenu.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/sidemenu/sidemenu.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Left side column. contains the logo and sidebar -->\r\n<aside class=\"main-sidebar\">\r\n\r\n  <!-- sidebar: style can be found in sidebar.less -->\r\n  <section class=\"sidebar\">\r\n\r\n    <!-- search form (Optional) -->\r\n    <form action=\"#\" method=\"get\" class=\"sidebar-form\">\r\n      <div class=\"input-group\">\r\n        <input type=\"text\" name=\"q\" class=\"form-control\" placeholder=\"Search...\">\r\n        <span class=\"input-group-btn\">\r\n                <button type=\"submit\" name=\"search\" id=\"search-btn\" class=\"btn btn-flat\"><i class=\"fa fa-search\"></i>\r\n                </button>\r\n              </span>\r\n      </div>\r\n    </form>\r\n    <!-- /.search form -->\r\n\r\n\r\n    <!-- Sidebar Menu -->\r\n    <ul class=\"sidebar-menu\" data-widget=\"tree\">\r\n      <li class=\"header\">HEADER</li>\r\n      <!-- Optionally, you can add icons to the links -->\r\n      <li class=\"treeview\">\r\n        <a href=\"#\"><i class=\"fa fa-tachometer\"></i> <span>Dashboards</span>\r\n              <span class=\"pull-right-container\">\r\n                  <i class=\"fa fa-angle-left pull-right\"></i>\r\n                </span>\r\n            </a>\r\n        <ul class=\"treeview-menu\">\r\n          <li *ngFor=\"let dashboard of dashboards\">\r\n            <a (click)=\"changeDashboard(dashboard)\" href=\"#\"> {{dashboard.titel}}\r\n              <i class=\"fa fa-trash pull-right\" (click)=\"removeDashboard(dashboard)\"></i>\r\n              <i [ngClass]=\"dashboard.active ? 'fa fa-eye pull-right' : ''\"></i>\r\n            </a>\r\n          </li>\r\n          <li>\r\n            <a (click)=createNewDashboard() href=\"#\"> Opret nyt dashboard\r\n              <i class=\"fa fa-plus pull-right\"></i>\r\n            </a>\r\n          </li>\r\n        </ul>\r\n      </li>\r\n\r\n      <li class=\"treeview\">\r\n        <a href=\"#\"><i class=\"fa fa-thumb-tack\"></i> <span>Aktive Widgets</span>\r\n              <span class=\"pull-right-container\">\r\n                  <i class=\"fa fa-angle-left pull-right\"></i>\r\n                </span>\r\n            </a>\r\n        <ul class=\"treeview-menu\">\r\n          <li *ngFor=\"let active of activeWidgets\">\r\n            <a href=\"#\">{{active.titel}}<i class=\"fa fa-trash pull-right\" (click)=\"removeWidget(active)\"></i></a>\r\n          </li>\r\n        </ul>\r\n      </li>\r\n      <li class=\"treeview\">\r\n        <a href=\"#\"><i class=\"fa fa-link\"></i> <span>Widget Kartotek</span>\r\n              <span class=\"pull-right-container\">\r\n                  <i class=\"fa fa-angle-left pull-right\"></i>\r\n                </span>\r\n            </a>\r\n        <ul class=\"treeview-menu\">\r\n          <li *ngFor=\"let widget of allWidgets\">\r\n            <a href=\"#\" (click)=\"addWidget(widget)\">{{widget.titel}}\r\n              <i [ngClass]=\"widget.active ? 'fa fa-eye pull-right' : ''\"></i>\r\n            </a>\r\n        </ul>\r\n      </li>\r\n    </ul>\r\n    <!-- /.sidebar-menu -->\r\n  </section>\r\n  <!-- /.sidebar -->\r\n</aside>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/sidemenu/sidemenu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidemenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_widgetLibrary_service_widget_library_service__ = __webpack_require__("../../../../../src/app/services/widgetLibrary-service/widget-library.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_dashboardcontroller_service_dashboardcontroller_service__ = __webpack_require__("../../../../../src/app/services/dashboardcontroller-service/dashboardcontroller.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_helperClasses_MenuElement__ = __webpack_require__("../../../../../src/app/services/helperClasses/MenuElement.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SidemenuComponent = (function () {
    function SidemenuComponent(dashboardcontroller, widgetService) {
        this.dashboardcontroller = dashboardcontroller;
        this.widgetService = widgetService;
        this.dashboards = [];
        this.activeWidgets = [];
        this.allWidgets = [];
        this.setup();
    }
    SidemenuComponent.prototype.setup = function () {
        //Gets the active dashboard, clears the menu.
        //if there is an active dashboard, proceed to fill in widgets, else dont.
        var activeDashboard = this.dashboardcontroller.getActiveDashboard();
        this.clearMenu();
        this.listAllDashboards();
        this.listAllWidgets();
        if (activeDashboard) {
            this.setActiveDashboard(activeDashboard);
            this.setActiveWidgets(activeDashboard);
            this.setActiveAllWidgets();
        }
    };
    SidemenuComponent.prototype.clearMenu = function () {
        //Clears arrays
        this.dashboards.length = 0;
        this.activeWidgets.length = 0;
        this.allWidgets.length = 0;
    };
    SidemenuComponent.prototype.listAllWidgets = function () {
        //Convert all widgets to MenuElements from WidgetLibrary
        for (var _i = 0, _a = this.widgetService.getWidgetIds(); _i < _a.length; _i++) {
            var key = _a[_i];
            var w = this.widgetService.getWidgetbyId(key);
            var element_1 = new __WEBPACK_IMPORTED_MODULE_3__services_helperClasses_MenuElement__["a" /* MenuElement */](w.id, false, false, w.title);
            //Rezise name to max 20 letters
            if (element_1.titel.length > 20) {
                element_1.titel = element_1.titel.slice(0, 20) + "...";
            }
            //Add to allWidgets
            this.allWidgets.push(element_1);
        }
    };
    SidemenuComponent.prototype.listAllDashboards = function () {
        var _this = this;
        //Convert all dashboards from controller to MenuElements
        this.dashboardcontroller.getDashboards().forEach(function (dashboard) {
            var menuElement = new __WEBPACK_IMPORTED_MODULE_3__services_helperClasses_MenuElement__["a" /* MenuElement */](dashboard.id, true, false, dashboard.name);
            //Rezise name to max 20 letters
            if (menuElement.titel.length > 20) {
                menuElement.titel = menuElement.titel.slice(0, 20) + "...";
            }
            _this.dashboards.push(menuElement);
        });
    };
    SidemenuComponent.prototype.setActiveDashboard = function (activeDashboard) {
        var _this = this;
        //sets the active dashboardId variable.
        //go through the dashboard list, if active ID exist, then set that dashboard to be active. 
        this.activeDashboard = activeDashboard.id;
        var dashboard = this.dashboards.find(function (d) { return d.id == _this.activeDashboard; });
        if (dashboard != undefined) {
            dashboard.active = true;
        }
    };
    SidemenuComponent.prototype.setActiveWidgets = function (activeDashboard) {
        var _this = this;
        //Sets the active widgets on current dashboard to active
        var widgets = activeDashboard.widgets;
        if (widgets.length > 0) {
            //generates and menuelement for each widget and pushes into list.
            widgets.forEach(function (widgetId) {
                var widget = _this.widgetService.getWidgetbyId(widgetId);
                if (widget) {
                    var element_2 = new __WEBPACK_IMPORTED_MODULE_3__services_helperClasses_MenuElement__["a" /* MenuElement */](widget.id, true, true, widget.title);
                    //Rezise name to max 20 letters
                    if (element_2.titel.length > 20) {
                        element_2.titel = element_2.titel.slice(0, 20) + "...";
                    }
                    _this.activeWidgets.push(element_2);
                }
            });
        }
    };
    SidemenuComponent.prototype.setActiveAllWidgets = function () {
        var _this = this;
        //Sets the active widgets to be active on allwidgets list. 
        //This function sets the eyes on allwidgets, if they are in active list
        for (var index = 0; index < this.allWidgets.length; index++) {
            if (this.activeWidgets.find(function (w) { return w.id == _this.allWidgets[index].id; })) {
                this.allWidgets[index].active = true;
            }
        }
    };
    SidemenuComponent.prototype.changeDashboard = function (dashboardElement) {
        var _this = this;
        if (dashboardElement != null) {
            //Switch dashboard if the active is not already active
            //Ignore if its already the active one
            if (this.activeDashboard != dashboardElement.id) {
                //If there are more dashboards available
                if (this.dashboards.length != 0) {
                    //Set the current dashboard to not active and change dashboard
                    this.dashboards.find(function (d) { return d.id == _this.activeDashboard; }).active = false;
                    this.dashboardcontroller.changeDashboard(dashboardElement.id);
                }
            }
        }
        //Clear the whole sidemenu and load in again from dashboardcontroller.
        this.setup();
    };
    SidemenuComponent.prototype.removeDashboard = function (dashboardElement) {
        var _this = this;
        //case of removing current
        if (this.activeDashboard == dashboardElement.id) {
            //if other dashboard available, switch to next one
            if (this.dashboards.length != 1) {
                var d = this.dashboards.find(function (d) { return d.id != _this.activeDashboard; });
                this.dashboardcontroller.removeDashboard(dashboardElement.id);
                this.changeDashboard(d);
            }
            else {
                //case of removing last one with no other available
                //change dashboard to nothing and reload from dashboard controller
                this.dashboardcontroller.removeDashboard(dashboardElement.id);
                this.changeDashboard(null);
                this.setup();
            }
        }
        else {
            //case of not removing current, just remove it. reload from dashboardcontroller to coordinate
            this.dashboardcontroller.removeDashboard(dashboardElement.id);
            this.setup();
        }
    };
    //Adds widget to active list
    SidemenuComponent.prototype.addWidget = function (widget) {
        //If no active dashboard dont do anything.
        if (!this.dashboardcontroller.getActiveDashboard()) {
            return;
        }
        //Check if its already on the list - disallow adding it more times
        if (!this.activeWidgets.find(function (w) { return w.id == widget.id; })) {
            //put it on activelist if it doesnt
            this.dashboardcontroller.addWidget(widget.id);
            this.setup();
        }
    };
    SidemenuComponent.prototype.removeWidget = function (widget) {
        //If no active dashboard dont do anything
        if (!this.dashboardcontroller.getActiveDashboard()) {
            return;
        }
        //Check if widget exists
        if (this.activeWidgets.find(function (w) { return w.id == widget.id; })) {
            //remove it
            this.dashboardcontroller.removeWidget(widget.id);
            this.setup();
        }
    };
    //Sweetalert 2 implementation for getting user input
    SidemenuComponent.prototype.createNewDashboard = function () {
        var title;
        var type;
        var comp = this;
        var dashboardcontroller = this.dashboardcontroller;
        swal({
            title: 'Indtast navn til nyt dashboard',
            input: 'text',
            showCancelButton: true,
            confirmButtonText: 'Submit',
            allowOutsideClick: false,
            inputValidator: function (value) {
                return new Promise(function (resolve, reject) {
                    if (value.length > 20 || value.length <= 0) {
                        reject('Brug mellem 0 og 20 bogstaver');
                    }
                    else {
                        title = value;
                        resolve('Din beskrivelse er registreret');
                    }
                });
            },
        }).then(function (email) {
            swal({
                title: 'Vælg en dashboard type',
                input: 'select',
                inputOptions: {
                    1: '1 kolonne uden header',
                    2: '2 kolonner uden header',
                    3: '1 kolonne med header',
                    4: '2 kolonne med header'
                },
                inputPlaceholder: 'Vælg en dashboard type',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'Ja, godkend',
                cancelButtonText: 'Nej, afbryd',
                confirmButtonClass: 'btn btn-success',
                cancelButtonClass: 'btn',
                buttonsStyling: true,
                inputValidator: function (value) {
                    return new Promise(function (resolve, reject) {
                        if (value == 1 || value == 2 || value == 3 || value == 4) {
                            type = value;
                            resolve('Dit valg er registreret');
                            dashboardcontroller.addDashboard(title, type);
                            comp.setup();
                        }
                        else {
                            reject('Vælg venligst en valid type');
                        }
                    });
                }
            });
        }, function (dismiss) {
            if (dismiss == 'cancel') {
                swal('Afbrudt', 'Oprettelse af dashboard er blevet afbrudt', 'error');
            }
        });
    };
    return SidemenuComponent;
}());
SidemenuComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-sidemenu',
        template: __webpack_require__("../../../../../src/app/components/sidemenu/sidemenu.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/sidemenu/sidemenu.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_dashboardcontroller_service_dashboardcontroller_service__["a" /* DashboardcontrollerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_dashboardcontroller_service_dashboardcontroller_service__["a" /* DashboardcontrollerService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_widgetLibrary_service_widget_library_service__["a" /* WidgetLibraryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_widgetLibrary_service_widget_library_service__["a" /* WidgetLibraryService */]) === "function" && _b || Object])
], SidemenuComponent);

var _a, _b;
//# sourceMappingURL=sidemenu.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/topmenu/topmenu.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".custom-logo {\r\n    background-image: url('/../assets/logo-service.png');\r\n    background-repeat: no-repeat;\r\n    background-position:center; \r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/topmenu/topmenu.component.html":
/***/ (function(module, exports) {

module.exports = "<header class=\"main-header\">\r\n    <!-- Logo -->\r\n    <a href=\"\" class=\"logo custom-logo\">\r\n    \r\n    </a>\r\n    <!-- Header Navbar: style can be found in header.less -->\r\n    <nav class=\"navbar navbar-static-top\" role=\"navigation\">\r\n        <!-- Sidebar toggle button-->\r\n        <a href=\"#\" class=\"sidebar-toggle\" data-toggle=\"offcanvas\" role=\"button\">\r\n            <span class=\"sr-only\">Toggle navigation</span>\r\n        </a>\r\n\r\n        <!-- Navbar Right Menu -->\r\n        <div class=\"navbar-custom-menu\">\r\n            <ul class=\"nav navbar-nav\">\r\n                <!-- Messages: style can be found in dropdown.less-->\r\n                <li class=\"dropdown messages-menu\">\r\n                    <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\r\n                        <i class=\"fa fa-envelope-o\"></i>\r\n                        <span class=\"label label-success\">4</span>\r\n                    </a>\r\n                    <ul class=\"dropdown-menu\">\r\n                        <li class=\"header\">Du har 4 ulæste beskeder</li>\r\n                        <li>\r\n                            <!-- inner menu: contains the actual data -->\r\n                            <ul class=\"menu\">\r\n                                <li>\r\n                                    <!-- start message -->\r\n                                    <a href=\"#\">\r\n                                        <div class=\"pull-left\">\r\n                                            <img src=\"assets/img/user2-160x160.jpg\" class=\"img-circle\" alt=\"User Image\" />\r\n                                        </div>\r\n                                        <h4>\r\n                                            Data Warehouse\r\n                                            <small><i class=\"fa fa-clock-o\"></i> 5 min</small>\r\n                                        </h4>\r\n                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\r\n                                    </a>\r\n                                </li><!-- end message -->\r\n                                <li>\r\n                                    <a href=\"#\">\r\n                                        <div class=\"pull-left\">\r\n                                            <img src=\"assets/img/user1-128x128.jpg\" class=\"img-circle\" alt=\"user image\" />\r\n                                        </div>\r\n                                        <h4>\r\n                                            Frontend\r\n                                            <small><i class=\"fa fa-clock-o\"></i> 2 timer siden</small>\r\n                                        </h4>\r\n                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\r\n                                    </a>\r\n                                </li>\r\n                                <li>\r\n                                    <a href=\"#\">\r\n                                        <div class=\"pull-left\">\r\n                                            <img src=\"assets/img/user3-128x128.jpg\" class=\"img-circle\" alt=\"user image\" />\r\n                                        </div>\r\n                                        <h4>\r\n                                            Backend\r\n                                            <small><i class=\"fa fa-clock-o\"></i> idag</small>\r\n                                        </h4>\r\n                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\r\n                                    </a>\r\n                                </li>\r\n                                <li>\r\n                                    <a href=\"#\">\r\n                                        <div class=\"pull-left\">\r\n                                            <img src=\"assets/img/user6-128x128.jpg\" class=\"img-circle\" alt=\"user image\" />\r\n                                        </div>\r\n                                        <h4>\r\n                                            Backend\r\n                                            <small><i class=\"fa fa-clock-o\"></i> igår</small>\r\n                                        </h4>\r\n                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\r\n                                    </a>\r\n                                </li>\r\n\r\n                            </ul>\r\n                        </li>\r\n                        <li class=\"footer\"><a href=\"#\">Se alle beskeder</a></li>\r\n                    </ul>\r\n                </li>\r\n\r\n                <!-- Notifications: style can be found in dropdown.less -->\r\n                <li class=\"dropdown notifications-menu\">\r\n                    <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\r\n                        <i class=\"fa fa-bell-o\"></i>\r\n                        <span class=\"label label-warning\">2</span>\r\n                    </a>\r\n                    <ul class=\"dropdown-menu\">\r\n                        <li class=\"header\">Du har 2 notifikationer</li>\r\n                        <li>\r\n                            <!-- inner menu: contains the actual data -->\r\n                            <ul class=\"menu\">\r\n\r\n                                <li>\r\n                                    <a href=\"#\">\r\n                                        <i class=\"fa fa-warning text-yellow\"></i> Vejarbejde på Andrupvej\r\n                                    </a>\r\n                                </li>\r\n\r\n                                <li>\r\n                                    <a href=\"#\">\r\n                                        <i class=\"fa fa-warning text-yellow\"></i> Problemer med målestation på Falen\r\n                                    </a>\r\n                                </li>\r\n\r\n                            </ul>\r\n                        </li>\r\n                        <li class=\"footer\"><a href=\"#\">Se alle</a></li>\r\n                    </ul>\r\n                </li>\r\n\r\n                <!-- User Account: style can be found in dropdown.less -->\r\n                <li class=\"dropdown user user-menu\">\r\n                    <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\r\n                        <img src=\"assets/img/user2-160x160.jpg\" class=\"user-image\" alt=\"User Image\" />\r\n                        <span class=\"hidden-xs\">{{identity.firstName}} {{identity.lastName}}</span>\r\n                    </a>\r\n                    <ul class=\"dropdown-menu\">\r\n                        <!-- User image -->\r\n                        <li class=\"user-header\">\r\n                            <img src=\"assets/img/user2-160x160.jpg\" class=\"img-circle\" alt=\"User Image\" />\r\n                            <p>\r\n                                {{identity.department}}\r\n                                <small>{{identity.occupation}}</small>\r\n                            </p>\r\n                        </li>\r\n                        <!-- Menu Footer-->\r\n                        <li class=\"user-footer\">\r\n                            <div class=\"pull-left\">\r\n                                <a href=\"#\" class=\"btn btn-default btn-flat\">Profil</a>\r\n                            </div>\r\n                            <div class=\"pull-right\">\r\n                                <a (click)=\"logout()\" href=\"#\" class=\"btn btn-default btn-flat\">Log ud</a>\r\n                            </div>\r\n                        </li>\r\n                    </ul>\r\n                </li>\r\n                    <!-- Control Sidebar Toggle Button -->\r\n        <li>\r\n            <a href=\"#\" data-toggle=\"control-sidebar\"><i class=\"fa fa-gears\"></i></a>\r\n          </li>\r\n            </ul>\r\n        </div>\r\n    </nav>\r\n</header>"

/***/ }),

/***/ "../../../../../src/app/components/topmenu/topmenu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopmenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_auth_service__ = __webpack_require__("../../../../../src/app/services/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_helperClasses_user__ = __webpack_require__("../../../../../src/app/services/helperClasses/user.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TopmenuComponent = (function () {
    function TopmenuComponent(auth) {
        this.auth = auth;
        this.identity = new __WEBPACK_IMPORTED_MODULE_2__services_helperClasses_user__["a" /* User */]("None", "None", "None", "None");
    }
    TopmenuComponent.prototype.ngOnInit = function () {
        this.identity = this.auth.user;
        window["test"] = this.identity;
    };
    TopmenuComponent.prototype.logout = function () {
        this.auth.signOutAsync()
            .then(function (x) {
            if (x === 1) {
                $("#login").removeClass("hide");
            }
        });
    };
    return TopmenuComponent;
}());
TopmenuComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-topmenu',
        template: __webpack_require__("../../../../../src/app/components/topmenu/topmenu.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/topmenu/topmenu.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], TopmenuComponent);

var _a;
//# sourceMappingURL=topmenu.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widgetarea/widgetarea.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widgetarea/widgetarea.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Content Wrapper. Contains page content -->\r\n<div class=\"content-wrapper\">\r\n  <!-- Content Header (Page header) -->\r\n  <section *ngIf=contentHeader class=\"content-header\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-3 col-sm-6 col-xs-12\">\r\n        <div class=\"info-box\">\r\n          <span class=\"info-box-icon bg-aqua\"><i class=\"ion ion-ios-gear-outline\"></i></span>\r\n          <div class=\"info-box-content\">\r\n            <span class=\"info-box-text\">Stationer Online</span>\r\n            <span class=\"info-box-number\">56</span>\r\n          </div>\r\n          <!-- /.info-box-content -->\r\n        </div>\r\n        <!-- /.info-box -->\r\n      </div>\r\n      <!-- /.col -->\r\n      <div class=\"col-md-3 col-sm-6 col-xs-12\">\r\n        <div class=\"info-box\">\r\n          <span class=\"info-box-icon bg-yellow\"><i class=\"fa fa-exclamation-triangle\"></i></span>\r\n          <div class=\"info-box-content\">\r\n            <span class=\"info-box-text\">Vejarbejde</span>\r\n            <span class=\"info-box-number\">2</span>\r\n          </div>\r\n          <!-- /.info-box-content -->\r\n        </div>\r\n        <!-- /.info-box -->\r\n      </div>\r\n      <!-- /.col -->\r\n      <!-- fix for small devices only -->\r\n      <div class=\"clearfix visible-sm-block\"></div>\r\n      <div class=\"col-md-3 col-sm-6 col-xs-12\">\r\n        <div class=\"info-box\">\r\n          <span class=\"info-box-icon bg-green\"><i class=\"fa fa-car\"></i></span>\r\n          <div class=\"info-box-content\">\r\n            <span class=\"info-box-text\">Trafiksituation</span>\r\n            <span class=\"info-box-number\">Tæt trafik</span>\r\n          </div>\r\n          <!-- /.info-box-content -->\r\n        </div>\r\n        <!-- /.info-box -->\r\n      </div>\r\n      <!-- /.col -->\r\n      <div class=\"col-md-3 col-sm-6 col-xs-12\">\r\n        <div class=\"info-box\">\r\n          <span class=\"info-box-icon bg-red\"><i class=\"fa fa-heartbeat\"></i></span>\r\n          <div class=\"info-box-content\">\r\n            <span class=\"info-box-text\">Antal dage uden uheld</span>\r\n            <span class=\"info-box-number\">120</span>\r\n          </div>\r\n          <!-- /.info-box-content -->\r\n        </div>\r\n        <!-- /.info-box -->\r\n      </div>\r\n      <!-- /.col -->\r\n    </div>\r\n    <!-- /.row -->\r\n  </section>\r\n\r\n  <!-- Main content -->\r\n  <section class=\"content container-fluid\">\r\n    <div class=\"row\">\r\n      <section [ngClass]=\"numCols > 1 ? 'col-lg-6' : 'col-lg-12'\" class=\"connectedSortable ui-sortable\">\r\n          <ng-template appWidgetHost></ng-template>\r\n      </section>\r\n      \r\n      <section [ngClass]=\"numCols > 1 ? 'col-lg-6' : 'hide'\" class= \"connectedSortable ui-sortable\">\r\n        </section> \r\n    </div>\r\n  </section>\r\n  <!-- /.content -->\r\n</div>\r\n<!-- /.content-wrapper -->\r\n"

/***/ }),

/***/ "../../../../../src/app/components/widgetarea/widgetarea.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetareaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__directives_widget_host_directive__ = __webpack_require__("../../../../../src/app/directives/widget-host.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_widgetLibrary_service_widget_library_service__ = __webpack_require__("../../../../../src/app/services/widgetLibrary-service/widget-library.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_dashboardcontroller_service_dashboardcontroller_service__ = __webpack_require__("../../../../../src/app/services/dashboardcontroller-service/dashboardcontroller.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WidgetareaComponent = (function () {
    function WidgetareaComponent(widgetService, dashboardController) {
        var _this = this;
        this.widgetService = widgetService;
        this.dashboardController = dashboardController;
        //Set type of dashboard
        var activeDashboard = this.dashboardController.getActiveDashboard();
        if (activeDashboard) {
            this.setContentVariables(this.dashboardController.getActiveDashboard().type);
        }
        //Wire up event handler
        this.dashboardController.addWidgetEvent = function (widgetId) { return _this.addWidget(widgetId); };
        this.dashboardController.removeWidgetEvent = function (widgetId) { return _this.removeWidget(widgetId); };
        this.dashboardController.changeDashboardEvent = function () { return _this.changeDashboard(); };
        this.activeWidgets = [];
    }
    WidgetareaComponent.prototype.ngOnInit = function () {
        var _this = this;
        //If  active dashboard
        if (this.dashboardController.getActiveDashboard()) {
            //spawn in all widgets from config
            this.dashboardController.getActiveDashboard().widgets.forEach(function (widgetId) {
                _this.addWidget(widgetId);
            });
        }
    };
    WidgetareaComponent.prototype.addWidget = function (widgetId) {
        //If no active dashboard
        if (!this.dashboardController.getActiveDashboard()) {
            return;
        }
        //Get Widget
        var widget = this.widgetService.getWidgetbyId(widgetId);
        if (widget) {
            //Resolve component
            var viewContainerRef = this.widgetHost.viewContainerRef;
            //Create component into DOM and set values.
            var componentRef = viewContainerRef.createComponent(widget.factory);
            componentRef.instance.id = widget.id;
            componentRef.instance.title = widget.title;
            //Add to active Widgets list
            this.activeWidgets.push(widget.id);
        }
    };
    WidgetareaComponent.prototype.removeWidget = function (widgetId) {
        //console.log(this.activeWidgets[0] + " -" + this.activeWidgets[1])
        //If no active dashboard
        if (!this.dashboardController.getActiveDashboard()) {
            return;
        }
        //Resolve the component.
        var viewContainerRef = this.widgetHost.viewContainerRef;
        //Find Widget index on active list --------------------- this sometimes causes a bug
        var activeWidgetIndex;
        for (var index = 0; index < this.activeWidgets.length; index++) {
            if (this.activeWidgets[index] == widgetId) {
                activeWidgetIndex = index;
                break;
            }
        }
        //Remove it from the widgetarea by index.
        this.activeWidgets.splice(activeWidgetIndex, 1);
        viewContainerRef.remove(activeWidgetIndex);
    };
    //Clear the area, get the active dashboard and spawn in widgets from that
    WidgetareaComponent.prototype.changeDashboard = function () {
        var _this = this;
        this.clearArea();
        var activeDashboard = this.dashboardController.getActiveDashboard();
        if (activeDashboard != undefined) {
            this.setContentVariables(activeDashboard.type);
            //this.activeWidgets = activeDashboard.widgets;
            activeDashboard.widgets.forEach(function (widgetId) {
                _this.addWidget(widgetId);
            });
        }
    };
    //Clears area from widgets and contentHeader and numCols variables.
    WidgetareaComponent.prototype.clearArea = function () {
        this.contentHeader = false;
        this.numCols = 0;
        this.activeWidgets.length = 0;
        var viewContainerRef = this.widgetHost.viewContainerRef;
        var componentRef = viewContainerRef.clear();
    };
    //Sets contentHeader and numCols variables according to dashboardtype
    WidgetareaComponent.prototype.setContentVariables = function (type) {
        if (type == 1) {
            this.contentHeader = false;
            this.numCols = 1;
        }
        else if (type == 2) {
            this.contentHeader = false;
            this.numCols = 2;
        }
        else if (type == 3) {
            this.contentHeader = true;
            this.numCols = 1;
        }
        else if (type == 4) {
            this.contentHeader = true;
            this.numCols = 2;
        }
        else {
        }
        //Bug City - Enums doesnt work sometimes in switch case.
        /*switch (type) {
          case DashboardType.Standard1Col:
            this.contentHeader = false;
            this.numCols = 1;
            break;
          case DashboardType.Standard2Col:
            this.contentHeader = false;
            this.numCols = 2;
            break;
          case DashboardType.TopWidgets1Col:
            this.contentHeader = true;
            this.numCols = 1;
            break;
          case DashboardType.TopWidgets2Col:
            this.contentHeader = true;
            this.numCols = 2;
            break;
          default:
          console.log("hello darkness")
            break;
        } */
    };
    return WidgetareaComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1__directives_widget_host_directive__["a" /* WidgetHostDirective */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__directives_widget_host_directive__["a" /* WidgetHostDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__directives_widget_host_directive__["a" /* WidgetHostDirective */]) === "function" && _a || Object)
], WidgetareaComponent.prototype, "widgetHost", void 0);
WidgetareaComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-widgetarea',
        template: __webpack_require__("../../../../../src/app/components/widgetarea/widgetarea.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widgetarea/widgetarea.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_widgetLibrary_service_widget_library_service__["a" /* WidgetLibraryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_widgetLibrary_service_widget_library_service__["a" /* WidgetLibraryService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_dashboardcontroller_service_dashboardcontroller_service__["a" /* DashboardcontrollerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_dashboardcontroller_service_dashboardcontroller_service__["a" /* DashboardcontrollerService */]) === "function" && _c || Object])
], WidgetareaComponent);

var _a, _b, _c;
//# sourceMappingURL=widgetarea.component.js.map

/***/ }),

/***/ "../../../../../src/app/directives/widget-host.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetHostDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//Directive for spawning the standard widget
var WidgetHostDirective = (function () {
    function WidgetHostDirective(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
    return WidgetHostDirective;
}());
WidgetHostDirective = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
        selector: '[appWidgetHost]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ViewContainerRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ViewContainerRef */]) === "function" && _a || Object])
], WidgetHostDirective);

var _a;
//# sourceMappingURL=widget-host.directive.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__helperClasses_user__ = __webpack_require__("../../../../../src/app/services/helperClasses/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__helperClasses_helper__ = __webpack_require__("../../../../../src/app/services/helperClasses/helper.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AuthService = AuthService_1 = (function () {
    function AuthService(http) {
        this.http = http;
        this.user = __WEBPACK_IMPORTED_MODULE_4__helperClasses_user__["a" /* User */].empty();
    }
    /**
     * Sign in User to authentication service
     * @param username Username
     * @param password Password
     * @param success Callback function on successful request(DO NOT use this as successful login)
     * @param error Callback function on error request
     */
    AuthService.prototype.signIn = function (username, password, success, error) {
        var _this = this;
        this.authorizing({
            username: username,
            password: password,
            remember: true
        })
            .then(function (x) { _this.successHandler(x, success); }, function (x) { return _this.errorHandler(x, error); });
    };
    /**
     * Sign out user from authentication service
     * @param success Callback function on successful request
     * @param error Callback function on error request
     */
    AuthService.prototype.signOut = function (success, error) {
        this.deAuthorizing();
    };
    /**
     * Asynchronously Sign in User to authentication service
     * @param username Username
     * @param password Password
     * @param rememberMe Persistent login
     */
    AuthService.prototype.signInAsync = function (username, password, rememberMe) {
        console.log("Login...");
        return this.authorizing({
            username: username,
            password: password,
            remember: rememberMe ? true : false
        });
    };
    /**
     * Asynchronously Sign out user from authentication service
     */
    AuthService.prototype.signOutAsync = function () {
        return this.deAuthorizing();
    };
    /**
     * Asynchronously Create a user
     * @param model User Registration Requirement object
     */
    AuthService.prototype.createAsync = function (model) {
        var options = this.postHeader(model);
        return this.http.post(AuthService_1.urlSignup, model, options)
            .toPromise()
            .then(this.onRequest)
            .catch(this.onRequestError);
    };
    /**
     * Asynchronousely Check if user is authorized
     */
    AuthService.prototype.isAuthorized = function () {
        return this.http.get(AuthService_1.urlValidate)
            .toPromise()
            .then(this.onRequest)
            .catch(this.onRequestError);
    };
    /**
     * Get User from local storage
     */
    AuthService.prototype.getUser = function () {
        var identity = this.getLocalIdentity();
        if (identity) {
            return new __WEBPACK_IMPORTED_MODULE_4__helperClasses_user__["a" /* User */](identity.firstName, identity.lastName, identity.department, identity.occupation);
        }
        return null;
    };
    /**
     * Get User Identity from local/server
     */
    AuthService.prototype.getIdentity = function () {
        var _this = this;
        if (sessionStorage.hasOwnProperty(AuthService_1.sesInfoKey)) {
            return new Promise(function (resolve) {
                resolve(_this.getLocalIdentity());
            });
        }
        else {
            return this.http.get(AuthService_1.urlIdentity)
                .toPromise()
                .then(this.onRequest)
                .catch(this.onRequestError);
        }
    };
    AuthService.prototype.isValidToken = function () {
        var token = this.getToken();
        return this.http.get(AuthService_1.urlUserInfo, this.tokenHeader(token))
            .toPromise()
            .then(this.onRequest)
            .catch(this.onRequestError);
    };
    AuthService.prototype.getToken = function () {
        return sessionStorage.getItem(AuthService_1.sesTokenKey);
    };
    AuthService.prototype.setIdentity = function (id) {
        if (id) {
            // Save response identity to Authentication service
            this.user.firstName = id.firstName;
            this.user.lastName = id.lastName;
            this.user.department = id.department;
            this.user.occupation = id.occupation;
            this.setLocalIdentity(id);
        }
    };
    AuthService.prototype.successHandler = function (data, callback) {
        if (callback) {
            callback(data);
        }
        if (data) {
            AuthService_1.identity = data;
            sessionStorage.setItem(AuthService_1.sesInfoKey, JSON.stringify(data));
        }
    };
    AuthService.prototype.errorHandler = function (data, callback) {
        if (callback) {
            callback(data);
        }
    };
    AuthService.prototype.authorizing = function (model) {
        var _this = this;
        var options = this.postHeader(model);
        return this.http.post(AuthService_1.urlSignIn, model, options)
            .toPromise()
            .then(function (x) {
            var data = x.json();
            if (data) {
                var identity = data;
                _this.setIdentity(identity);
            }
            return _this.onRequest(x);
        })
            .catch(this.onRequestError);
    };
    AuthService.prototype.deAuthorizing = function () {
        var _this = this;
        return this.http.get(AuthService_1.urlSignOut)
            .toPromise()
            .then(function (x) {
            var result = x.json();
            if (result === 1) {
                _this.clearLocalIdentity();
            }
            return result;
        })
            .catch(this.onRequestError);
    };
    AuthService.prototype.onRequest = function (response) {
        console.log("Server response");
        var context = response.json();
        return context;
    };
    AuthService.prototype.onRequestError = function (error) {
    };
    AuthService.prototype.getLocalIdentity = function () {
        if (!AuthService_1.identity) {
            var info = sessionStorage.getItem(AuthService_1.sesInfoKey);
            if (info) {
                var token = sessionStorage.getItem(AuthService_1.sesTokenKey);
                var user = JSON.parse(info);
                user.token = token;
                AuthService_1.identity = user;
                if (AuthService_1.identity) {
                    return AuthService_1.identity;
                }
            }
            return null;
        }
        else {
            return AuthService_1.identity;
        }
    };
    AuthService.prototype.setLocalIdentity = function (data) {
        if (data) {
            AuthService_1.identity = data;
            var id = {
                firstName: data.firstName,
                lastName: data.lastName,
                department: data.department,
                occupation: data.occupation
            };
            var info = JSON.stringify(id);
            var token = data.token;
            sessionStorage.setItem(AuthService_1.sesInfoKey, info);
            sessionStorage.setItem(AuthService_1.sesTokenKey, token);
        }
    };
    AuthService.prototype.clearLocalIdentity = function () {
        this.user.firstName = "";
        this.user.lastName = "";
        this.user.department = "";
        this.user.occupation = "";
        AuthService_1.identity = null;
        sessionStorage.clear();
    };
    AuthService.prototype.pack = function (model) {
        var data = null;
        for (var key in model) {
            if (model.hasOwnProperty(key)) {
                var item = model[key];
                if (data != null) {
                    data += "&" + key + "=" + model[key];
                }
                else {
                    data = key + "=" + model[key];
                }
            }
        }
        return data;
    };
    AuthService.prototype.tokenHeader = function (token, data, method, origin) {
        var head = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        var action = __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Get;
        head.append('Authorization', 'Bearer ' + token);
        if (origin) {
            head.append("Access-Control-Allow-Origin", origin);
            head.append("Access-Control-Allow-Credentials", 'true');
        }
        if (method) {
            method = method.toUpperCase();
            if (method === "POST") {
                head.append('Content-Type', 'application/x-www-form-urlencoded');
            }
            else {
                head.append('Content-Type', 'application/json');
            }
            switch (method) {
                case "GET":
                    action = __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Get;
                    break;
                case "POST":
                    action = __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Post;
                    break;
                case "PUT":
                    action = __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Put;
                    break;
                case "DELETE":
                    action = __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Delete;
                    break;
                case "OPTIONS":
                    action = __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Options;
                    break;
                default:
                    action = __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Get;
                    break;
            }
        }
        if (data) {
            return new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({ headers: head, body: data, method: action });
        }
        return new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({ headers: head, method: action });
    };
    AuthService.prototype.postHeader = function (model) {
        var data = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            //'Access-Control-Allow-Origin': '*',
            //'Access-Control-Allow-Credentials': 'true',
            //'Content-Type': 'application/json'
            'Content-Type': 'application/x-www-form-urlencoded'
        });
        var body = this.pack(model);
        return new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({ headers: data, body: body, method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Post });
    };
    return AuthService;
}());
AuthService.sesInfoKey = "authInfo";
AuthService.sesTokenKey = "authToken";
// public static urlToken = "http://localhost:63810/connect/token";
// public static urlValidate = "http://localhost:5000/user/validate";
// public static urlSignIn = "http://localhost:5000/login/";
// public static urlSignOut = "http://localhost:63810/logout";
AuthService.urlToken = __WEBPACK_IMPORTED_MODULE_5__helperClasses_helper__["a" /* Helper */].link("/connect/token");
AuthService.urlUserInfo = __WEBPACK_IMPORTED_MODULE_5__helperClasses_helper__["a" /* Helper */].link("/connect/userinfo");
AuthService.urlValidate = __WEBPACK_IMPORTED_MODULE_5__helperClasses_helper__["a" /* Helper */].link("/user/validate");
AuthService.urlSignIn = __WEBPACK_IMPORTED_MODULE_5__helperClasses_helper__["a" /* Helper */].link("/login/");
AuthService.urlSignOut = __WEBPACK_IMPORTED_MODULE_5__helperClasses_helper__["a" /* Helper */].link("/logout/");
AuthService.urlSignup = __WEBPACK_IMPORTED_MODULE_5__helperClasses_helper__["a" /* Helper */].link("/register/");
AuthService.urlIdentity = __WEBPACK_IMPORTED_MODULE_5__helperClasses_helper__["a" /* Helper */].link('/user/profile/');
AuthService = AuthService_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], AuthService);

var AuthService_1, _a;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/dashboardcontroller-service/dashboardcontroller.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardcontrollerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service_user_service__ = __webpack_require__("../../../../../src/app/services/user-service/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helperClasses_dashboard__ = __webpack_require__("../../../../../src/app/services/helperClasses/dashboard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardcontrollerService = (function () {
    function DashboardcontrollerService(userService) {
        this.userService = userService;
        this.dashboards = [];
        this.getDashboardConfiguration(); //Setup from userservice
    }
    //loads in the dashboard configuration from user service
    DashboardcontrollerService.prototype.getDashboardConfiguration = function () {
        //this.dashboards = this.userService.getUserData().configuration.dashboards;
        //If there is no dashboards - the active will be undefined
        if (this.activeDashboard == undefined) {
            //start with the 1st one as active dashboard if there is any
            if (this.dashboards.length != 0) {
                this.activeDashboard = this.dashboards[0];
            }
        }
    };
    //Fire event to widgetarea when sidemenu calls function
    DashboardcontrollerService.prototype.changeDashboard = function (dashboardId) {
        //Get the data from userservice
        this.getDashboardConfiguration();
        //and set up the active dashboard and fire event to widgetarea
        this.activeDashboard = this.dashboards.find(function (d) { return d.id == dashboardId; });
        this.changeDashboardEvent();
    };
    //Fire event to widgetarea when sidemenu calls function
    DashboardcontrollerService.prototype.addWidget = function (widgetId) {
        //If no active dashboard then nothing should happen
        if (!this.activeDashboard) {
            return;
        }
        //Ask userservice to add widget and fire event to widgetarea
        this.userService.addWidget(widgetId, this.activeDashboard.id);
        this.addWidgetEvent(widgetId);
    };
    //Fire event to widgetarea when sidemenu calls function
    DashboardcontrollerService.prototype.removeWidget = function (widgetId) {
        //If no active dashboard - nothing should happen
        if (!this.activeDashboard) {
            return;
        }
        //ask userservice to remove widget and fire event to widgetarea
        this.userService.removeWidget(widgetId, this.activeDashboard.id);
        this.removeWidgetEvent(widgetId);
    };
    //Removes dashboard when sidemenu calls function
    DashboardcontrollerService.prototype.removeDashboard = function (dashboardId) {
        //Ask userservice to remove dashboard
        this.userService.removeDashboard(dashboardId);
        //if the dashboard being removed is the current one
        //then set the active dashboard to nothing and fire event to widgetare
        //sidemenu will handle the changing to other dashboard if more are available
        if (dashboardId == this.activeDashboard.id) {
            this.activeDashboard = undefined;
            this.changeDashboardEvent();
        }
    };
    DashboardcontrollerService.prototype.addDashboard = function (title, type) {
        var dashboard = new __WEBPACK_IMPORTED_MODULE_2__helperClasses_dashboard__["a" /* Dashboard */](-1, title, type);
        //Ask userservice to create new dashboard
        this.userService.saveDashboard(dashboard);
        //if there is no active dashboard, set this new one to be the active one.
        if (this.activeDashboard == undefined) {
            this.activeDashboard = this.dashboards[0];
            //Tell widgetarea to change to the active one.
            this.changeDashboardEvent();
        }
    };
    //Used by sidemenu to populate dashboard list
    DashboardcontrollerService.prototype.getDashboards = function () {
        return this.dashboards;
    };
    //Used by widgetarea and sidemenu to get the active dashboard and populate active widgets
    DashboardcontrollerService.prototype.getActiveDashboard = function () {
        //bug fix - Widgets became duplicated for ubknown reasons, this removes duplicated widgets
        if (this.activeDashboard) {
            this.activeDashboard.widgets =
                this.activeDashboard.widgets.filter(function (elem, index, self) {
                    return index == self.indexOf(elem);
                });
        }
        return this.activeDashboard;
    };
    return DashboardcontrollerService;
}());
DashboardcontrollerService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__user_service_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__user_service_user_service__["a" /* UserService */]) === "function" && _a || Object])
], DashboardcontrollerService);

var _a;
//# sourceMappingURL=dashboardcontroller.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/googlemapscontainer/googlemapscontainer.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoogleMapsContainerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GoogleMapsContainerService = (function () {
    function GoogleMapsContainerService() {
        this.maps = new Map();
        this.googleMapsScriptLoaded = false;
    }
    GoogleMapsContainerService.prototype.createMap = function (name, htmlelement, mapOptions) {
        var _this = this;
        if (!this.googleMapsScriptLoaded)
            this.addGoogleMapsScript();
        return this.scriptLoaded().then(function () {
            _this.maps.set(name, new google.maps.Map(htmlelement, mapOptions));
            console.log(_this.maps);
            return _this.getMap(name);
        });
    };
    GoogleMapsContainerService.prototype.deleteMap = function (name) {
        var b = this.maps.delete(name);
        console.log(this.maps);
        return b;
    };
    GoogleMapsContainerService.prototype.getMap = function (name) {
        var _this = this;
        return this.scriptLoaded().then(function () {
            return _this.maps.get(name);
        });
    };
    GoogleMapsContainerService.prototype.addGoogleMapsScript = function () {
        var _this = this;
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.async = true;
        script.defer = true;
        script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyAqg1BzcJOAGeLAIbA5tgrHBWtrfc6Rx5U&callback=googleMapsLoaded&libraries=drawing,geometry,places,visualization';
        this.scriptLoadedPromise = new Promise(function (resolve, reject) {
            window['googleMapsLoaded'] = function () { _this.googleMapsScriptLoaded = true; resolve(); };
            script.onerror = function (error) { reject(error); };
        });
        document.body.appendChild(script);
    };
    GoogleMapsContainerService.prototype.scriptLoaded = function () {
        return this.scriptLoadedPromise;
    };
    return GoogleMapsContainerService;
}());
GoogleMapsContainerService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], GoogleMapsContainerService);

//# sourceMappingURL=googlemapscontainer.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/helperClasses/MenuElement.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuElement; });
var MenuElement = (function () {
    function MenuElement(id, removeable, active, titel) {
        this.id = id;
        this.removeable = removeable;
        this.active = active;
        this.titel = titel;
    }
    return MenuElement;
}());

//# sourceMappingURL=MenuElement.js.map

/***/ }),

/***/ "../../../../../src/app/services/helperClasses/configuration.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Configuration; });
var Configuration = (function () {
    function Configuration(dashboards) {
        if (dashboards === void 0) { dashboards = null; }
        if (dashboards == null) {
            this.dashboards = [];
        }
        else {
            this.dashboards = dashboards;
        }
    }
    return Configuration;
}());

//# sourceMappingURL=configuration.js.map

/***/ }),

/***/ "../../../../../src/app/services/helperClasses/dashboard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Dashboard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DashboardType; });
var Dashboard = (function () {
    function Dashboard(id, name, type, widgets) {
        if (widgets === void 0) { widgets = null; }
        this.id = id;
        this.name = name;
        this.type = type;
        if (widgets == null) {
            this.widgets = [];
        }
        else {
            this.widgets = widgets;
        }
    }
    return Dashboard;
}());

var DashboardType;
(function (DashboardType) {
    DashboardType[DashboardType["Standard1Col"] = 1] = "Standard1Col";
    DashboardType[DashboardType["Standard2Col"] = 2] = "Standard2Col";
    DashboardType[DashboardType["TopWidgets1Col"] = 3] = "TopWidgets1Col";
    DashboardType[DashboardType["TopWidgets2Col"] = 4] = "TopWidgets2Col";
})(DashboardType || (DashboardType = {}));
//# sourceMappingURL=dashboard.js.map

/***/ }),

/***/ "../../../../../src/app/services/helperClasses/helper.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Helper; });
var Helper = (function () {
    function Helper() {
    }
    /**
     * Copy Objects
     * @param source Source, Copy from this object
     * @param dest Destination, Copy to this object (this object is going to be modify)
     */
    Helper.copy = function (source, dest) {
        if (source && dest) {
            for (var key in dest) {
                if (dest.hasOwnProperty(key) && source.hasOwnProperty(key)) {
                    dest[key] = source[key];
                }
            }
        }
    };
    /**
     * Get Website's absolute Link
     * @param uri Add URI to the link
     * @param query Add Query String to the link
     */
    Helper.link = function (uri, query) {
        var url = window.location.protocol + "//" + window.location.host;
        if (uri) {
            url += uri;
        }
        if (query) {
            var param = null;
            for (var i in query) {
                if (query.hasOwnProperty(i)) {
                    var element = query[i];
                    if (param !== null) {
                        param = "?" + i + "=" + encodeURIComponent(element);
                    }
                    else {
                        param += "&" + i + "=" + encodeURIComponent(element);
                    }
                }
            }
            if (param) {
                url += param;
            }
        }
        return url;
    };
    return Helper;
}());

//# sourceMappingURL=helper.js.map

/***/ }),

/***/ "../../../../../src/app/services/helperClasses/user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__configuration__ = __webpack_require__("../../../../../src/app/services/helperClasses/configuration.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dashboard__ = __webpack_require__("../../../../../src/app/services/helperClasses/dashboard.ts");


var User = (function () {
    function User(firstname, lastname, department, occupation, configuration) {
        if (firstname) {
            this.firstName = firstname;
        }
        if (lastname) {
            this.lastName = lastname;
        }
        if (department) {
            this.department = department;
        }
        if (occupation) {
            this.occupation = occupation;
        }
        if (configuration) {
            this.configuration = configuration;
        }
        else {
            this.configuration = new __WEBPACK_IMPORTED_MODULE_0__configuration__["a" /* Configuration */]();
            this.configuration.dashboards.push(new __WEBPACK_IMPORTED_MODULE_1__dashboard__["a" /* Dashboard */](1, "Nyt dashboard", __WEBPACK_IMPORTED_MODULE_1__dashboard__["b" /* DashboardType */].TopWidgets2Col));
        }
    }
    User.empty = function () {
        return new User();
    };
    return User;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ "../../../../../src/app/services/user-service/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helperClasses_configuration__ = __webpack_require__("../../../../../src/app/services/helperClasses/configuration.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helperClasses_dashboard__ = __webpack_require__("../../../../../src/app/services/helperClasses/dashboard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_auth_service__ = __webpack_require__("../../../../../src/app/services/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserService = (function () {
    function UserService(auth) {
        this.auth = auth;
    }
    UserService.prototype.getUserData = function () {
        // //if authenticated
        // //Get user from server
        // //Store in user variable
        // //Test - Last parameter is null, so a configuration will be generated
        // if(this.user == undefined){
        //   let d = new Dashboard(1, "Standard1Col", 1, [2]);
        //   let d2 = new Dashboard(2, "Content2col", 4, [2]);
        //   let das = [];
        //   das.push(d);
        //   das.push(d2);
        //   let config = new Configuration(das);
        //   this.user = new User("Mikkel", "Andersen", "IT & Digitalisering", "Praktikant", config); 
        // }
        // return this.user;
        var u = this.auth.getUser();
        if (u && !u.configuration) {
            var d = new __WEBPACK_IMPORTED_MODULE_2__helperClasses_dashboard__["a" /* Dashboard */](1, "Standard1Col", 1, [2]);
            var d2 = new __WEBPACK_IMPORTED_MODULE_2__helperClasses_dashboard__["a" /* Dashboard */](2, "Content2col", 4, [2]);
            var das = [];
            das.push(d);
            das.push(d2);
            var config = new __WEBPACK_IMPORTED_MODULE_1__helperClasses_configuration__["a" /* Configuration */](das);
            u.configuration = config;
        }
        return u;
    };
    UserService.prototype.removeDashboard = function (dashboardId) {
        //Call api to remove
        //Remove from local data
        var dashboard;
        for (var index = 0; index < this.user.configuration.dashboards.length; index++) {
            if (this.user.configuration.dashboards[index].id == dashboardId) {
                this.user.configuration.dashboards.splice(index, 1);
                break;
            }
        }
    };
    UserService.prototype.saveDashboard = function (dashboard) {
        //Call api to add
        //Add to local data
        //Temp solution. should fetch new form usre to get updated.
        dashboard.id = this.user.configuration.dashboards.length + 1001;
        var dash = new __WEBPACK_IMPORTED_MODULE_2__helperClasses_dashboard__["a" /* Dashboard */](this.user.configuration.dashboards.length + 1001, dashboard.name, dashboard.type);
        this.user.configuration.dashboards.push(dash);
    };
    UserService.prototype.addWidget = function (widgetId, dashboardId) {
        //Call api to add
        //Add to local data
        this.user.configuration.dashboards.find(function (d) { return d.id == dashboardId; }).widgets.push(widgetId);
    };
    UserService.prototype.removeWidget = function (widgetId, dashboardId) {
        //Call api to remove
        //Add to local data
        var d = this.user.configuration.dashboards.find(function (d) { return d.id == dashboardId; });
        if (d != undefined) {
            for (var index = 0; index < d.widgets.length; index++) {
                if (d.widgets[index] == widgetId) {
                    d.widgets.splice(index, 1);
                }
            }
        }
    };
    return UserService;
}());
UserService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__auth_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], UserService);

var _a;
//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/widgetLibrary-service/widget-item.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetItem; });
//WidgetItem. Container for holding values when they need to be injected into DOM.
var WidgetItem = (function () {
    function WidgetItem(factory, id, title) {
        this.factory = factory;
        this.id = id;
        this.title = title;
    }
    return WidgetItem;
}());

//# sourceMappingURL=widget-item.js.map

/***/ }),

/***/ "../../../../../src/app/services/widgetLibrary-service/widget-library.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetLibraryService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__widget_item__ = __webpack_require__("../../../../../src/app/services/widgetLibrary-service/widget-item.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__widgets_widgets_module__ = __webpack_require__("../../../../../src/app/widgets/widgets.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WidgetLibraryService = (function () {
    function WidgetLibraryService(cFactory, appRef) {
        var _this = this;
        this.widgets = new Map();
        //Register all widgets here
        this.compiler = cFactory.createCompiler();
        var fac = this.compiler.compileModuleAndAllComponentsSync(__WEBPACK_IMPORTED_MODULE_2__widgets_widgets_module__["a" /* WidgetsModule */]);
        fac.componentFactories.forEach(function (facto) {
            var title = facto.inputs.find(function (obj) { return obj.propName === "title"; });
            var i = (facto.inputs.find(function (obj) { return obj.propName === "id"; }));
            if (title) {
                var id = Number.parseInt(i.templateName);
                var wItem = new __WEBPACK_IMPORTED_MODULE_1__widget_item__["a" /* WidgetItem */](facto, id, title.templateName);
                _this.widgets.set(id, wItem);
            }
        });
        console.log("generated widgets");
    }
    WidgetLibraryService.prototype.getWidgetbyId = function (widgetId) {
        return this.widgets.get(widgetId);
    };
    WidgetLibraryService.prototype.getWidgetIds = function () {
        return Array.from(this.widgets.keys());
    };
    return WidgetLibraryService;
}());
WidgetLibraryService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* CompilerFactory */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* CompilerFactory */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* ApplicationRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* ApplicationRef */]) === "function" && _b || Object])
], WidgetLibraryService);

var _a, _b;
//# sourceMappingURL=widget-library.service.js.map

/***/ }),

/***/ "../../../../../src/app/widgets/average-speed-heatmap-all-stations/average-speed-heatmap-all-stations.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".custom-btn-allstationsheatmap{\r\n    margin-bottom: 10px; \r\n}\r\n\r\n@media (min-width: 768px) { \r\n    .custom-btn-allstationsheatmap{\r\n        margin-bottom: 10px;\r\n        margin-top: 10px;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/widgets/average-speed-heatmap-all-stations/average-speed-heatmap-all-stations.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"box box-success\" id=\"{{ id }}\">\r\n  <div class=\"nav-tabs-custom\" style=\"cursor: move;\">\r\n    <ul class=\"nav nav-tabs pull-right ui-sortable-handle\">\r\n      <li class=\"pull-left header\"><i class=\"fa fa-bars\"></i>{{ title }}</li>\r\n    </ul>\r\n    <div class=\"tab-content no-padding\">\r\n      <ngx-loading [show]=\"loading\" ></ngx-loading>\r\n      <div class=\" tab-pane active widget-frame\">\r\n\r\n        <div class=\"row widget-style\">\r\n          <div class=\"col-sm-12 col-md-12 col-lg-12 \">\r\n\r\n            <div class=\"date-from-box\">\r\n              <p>Fra:</p>\r\n              <datetime [datepicker]=\"datepickerOpts\" [(ngModel)]=\"dateFrom\" [timepicker]=\"{ showMeridian: false, minuteStep: 1, showSeconds:false, defaultTime:'current', explicitMode:false, icon: 'fa fa-clock-o'}\"></datetime>\r\n            </div>\r\n\r\n          </div>\r\n\r\n          <div class=\"col-sm-12 col-md-12 col-lg-12\">\r\n            <p>Til:</p>\r\n            <div class=\"date-to-box\">\r\n              <datetime [datepicker]=\"datepickerOpts\" [(ngModel)]=\"dateTo\" [timepicker]=\"{ showMeridian: false, minuteStep: 5, showSeconds:false, defaultTime:'current', explicitMode:false,  icon: 'fa fa-clock-o'}\"></datetime>\r\n            </div>\r\n\r\n          </div>\r\n\r\n          <div class=\"col-sm-12 col-md-12 col-lg-12\">\r\n            <button type=\"button\" (click)=\"onClick()\" class=\"btn btn-primary small-mobile custom-btn-allstationsheatmap\">Udregn</button>\r\n            <p><b style=\"color:red\">Rød:</b> over 55km/t  <b style=\"color:green\">Grøn:</b> mellem 55 og 45 km/t <b style=\"color: #FEDF00 \">Gul:</b> under 45 km/t </p>\r\n          </div>\r\n        </div>\r\n        \r\n        <div class=\"row\">\r\n\r\n          <div class=\"col-sm-12 col-md-12 col-lg-12\">\r\n            <div #map id=\"map\"></div>\r\n          </div>\r\n\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n  </div>"

/***/ }),

/***/ "../../../../../src/app/widgets/average-speed-heatmap-all-stations/average-speed-heatmap-all-stations.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AverageSpeedHeatmapAllStationsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__gmap_service__ = __webpack_require__("../../../../../src/app/widgets/average-speed-heatmap-all-stations/gmap.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AverageSpeedHeatmapAllStationsComponent = (function () {
    function AverageSpeedHeatmapAllStationsComponent(gmapSAService, http) {
        this.gmapSAService = gmapSAService;
        this.http = http;
        this.markersRed = [];
        this.markersGreen = [];
        this.markersYellow = [];
        // datetime picker
        this.dateFrom = new Date();
        this.dateTo = new Date();
        this.datepickerOpts = {
            autoclose: true,
            todayHighlight: true,
            assumeNearbyYear: true,
            format: 'd MM yyyy',
            icon: 'fa fa-calendar'
        };
        //spinner
        this.showContentBool = false;
        this.loading = false;
    }
    AverageSpeedHeatmapAllStationsComponent.prototype.ngOnInit = function () {
        this.initGoogleMap();
    };
    AverageSpeedHeatmapAllStationsComponent.prototype.ngOnDestroy = function () {
        this.gmapSAService.delete();
    };
    AverageSpeedHeatmapAllStationsComponent.prototype.onClick = function () {
        this.loading = true;
        var dateFrom = this.dateFrom.toISOString().slice(0, 10);
        var timeFrom = this.dateFrom.getHours() + ":" + (this.dateFrom.getMinutes() < 10 ? '0' : '') + this.dateFrom.getMinutes();
        var dateTo = this.dateTo.toISOString().slice(0, 10);
        var timeTo = this.dateTo.getHours() + ":" + (this.dateTo.getMinutes() < 10 ? '0' : '') + this.dateTo.getMinutes();
        this.apiUrl = "http://adm-trafik-01.odknet.dk:2003/api/AverageSpeed/GetMeasurementsBetweenDatesAllStations?from=" + dateFrom + "%20" + timeFrom + "&to=" + dateTo + "%20" + timeTo;
        this.LoadHeatmap();
    };
    AverageSpeedHeatmapAllStationsComponent.prototype.initGoogleMap = function () {
        (this.gmapSAService.initMap(this.title, this.mapRef.nativeElement, {
            center: { lat: 55.3931161, lng: 10.3854726 },
            scrollwheel: true,
            zoom: 11,
            minZoom: 11,
            maxZoom: 16,
            streetViewControl: false,
            mapTypeControl: false
        }, null));
    };
    AverageSpeedHeatmapAllStationsComponent.prototype.LoadHeatmap = function () {
        var _this = this;
        this.gmapSAService.clearHeatmaps();
        this.http.get(this.apiUrl).map(function (res) { return res.json(); }).subscribe(function (response) {
            if (response) {
                Array.from(response).forEach(function (marker, i) {
                    if (marker['measurement'] < 45 && marker['measurement'] > 1) {
                        _this.markersYellow.push(marker);
                    }
                    else if (marker['measurement'] <= 55 && marker['measurement'] >= 45) {
                        _this.markersGreen.push(marker);
                    }
                    else if (marker['measurement'] > 55) {
                        _this.markersRed.push(marker);
                    }
                });
            }
            if (_this.markersGreen == 0 && _this.markersRed == 0 && _this.markersYellow == 0) {
                swal("Ingen data fundet", "Vælg andet tidspunkt", "error");
                _this.loading = false;
            }
            _this.gmapSAService.addHeatmap(_this.markersGreen, 0, 255);
            _this.gmapSAService.addHeatmap(_this.markersYellow, 255, 255);
            _this.gmapSAService.addHeatmap(_this.markersRed, 255, 0);
            _this.loading = false;
            _this.showContentBool = true;
        });
    };
    return AverageSpeedHeatmapAllStationsComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])("4"),
    __metadata("design:type", Number)
], AverageSpeedHeatmapAllStationsComponent.prototype, "id", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])("Alle stationer: Gennemsnitshastighed"),
    __metadata("design:type", String)
], AverageSpeedHeatmapAllStationsComponent.prototype, "title", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('map'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]) === "function" && _a || Object)
], AverageSpeedHeatmapAllStationsComponent.prototype, "mapRef", void 0);
AverageSpeedHeatmapAllStationsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: '[app-average-speed-heatmap-all-stations]',
        template: __webpack_require__("../../../../../src/app/widgets/average-speed-heatmap-all-stations/average-speed-heatmap-all-stations.component.html"),
        styles: [__webpack_require__("../../../../../src/app/widgets/average-speed-heatmap-all-stations/average-speed-heatmap-all-stations.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__gmap_service__["a" /* GmapSAASService */]]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__gmap_service__["a" /* GmapSAASService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__gmap_service__["a" /* GmapSAASService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _c || Object])
], AverageSpeedHeatmapAllStationsComponent);

var _a, _b, _c;
//# sourceMappingURL=average-speed-heatmap-all-stations.component.js.map

/***/ }),

/***/ "../../../../../src/app/widgets/average-speed-heatmap-all-stations/gmap.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GmapSAASService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_googlemapscontainer_googlemapscontainer_service__ = __webpack_require__("../../../../../src/app/services/googlemapscontainer/googlemapscontainer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GmapSAASService = (function () {
    function GmapSAASService(googlempscontainer) {
        this.googlempscontainer = googlempscontainer;
        this.data = [];
    }
    GmapSAASService.prototype.initMap = function (name, mapHtmlElement, options, data) {
        var _this = this;
        return this.googlempscontainer.createMap(name, mapHtmlElement, options).then(function (map) {
            _this.map = map;
            _this.name = name;
            _this.heatmaps = [];
            return _this.map;
        });
    };
    GmapSAASService.prototype.addMarker = function (lat, lng, name) {
        new google.maps.Marker({ map: this.map, title: name, position: { lat: lat, lng: lng } });
    };
    GmapSAASService.prototype.addHeatmap = function (any, red, green) {
        var _this = this;
        return this.googlempscontainer.getMap(this.name).then(function () {
            _this.data = [];
            //this.addMarker(lat, lng, name)
            Array.from(any).forEach(function (marker, i) {
                _this.data.push(new google.maps.LatLng(marker['latitude'], marker['longitude']));
            });
            var l = _this.heatmaps.push(new google.maps.visualization.HeatmapLayer({
                data: _this.data,
                map: _this.map
            }));
            _this.heatmaps[l - 1].set('gradient', ['rgba(' + red.valueOf() + ',' + green.valueOf() + ', 0, 0)',
                'rgba(' + red.valueOf() + ',' + green.valueOf() + ', 0, 1)']);
            _this.heatmaps[l - 1].set('radius', 10);
            _this.heatmaps[l - 1].set('opacity', 1);
            _this.heatmaps[l - 1].setMap(_this.map);
        });
    };
    GmapSAASService.prototype.clearHeatmaps = function () {
        if (this.heatmaps) {
            this.heatmaps.forEach(function (hmap) {
                hmap.setMap(null);
            });
            this.heatmaps = [];
        }
    };
    GmapSAASService.prototype.delete = function () {
        this.googlempscontainer.deleteMap(this.name);
    };
    return GmapSAASService;
}());
GmapSAASService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__services_googlemapscontainer_googlemapscontainer_service__["a" /* GoogleMapsContainerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_googlemapscontainer_googlemapscontainer_service__["a" /* GoogleMapsContainerService */]) === "function" && _a || Object])
], GmapSAASService);

var _a;
//# sourceMappingURL=gmap.service.js.map

/***/ }),

/***/ "../../../../../src/app/widgets/speed-average-heatmap/gmap.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GmapSAService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_googlemapscontainer_googlemapscontainer_service__ = __webpack_require__("../../../../../src/app/services/googlemapscontainer/googlemapscontainer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GmapSAService = (function () {
    function GmapSAService(googlemapscontainer) {
        this.googlemapscontainer = googlemapscontainer;
    }
    GmapSAService.prototype.initMap = function (name, mapHtmlElement, options, data) {
        var _this = this;
        this.name = name;
        return this.googlemapscontainer.createMap(name, mapHtmlElement, options).then(function (map) {
            _this.map = map;
            return _this.map;
        });
    };
    GmapSAService.prototype.addMarker = function (lat, lng, name) {
        new google.maps.Marker({ map: this.map, title: name, position: { lat: lat, lng: lng } });
    };
    GmapSAService.prototype.addHeatmap = function (lat, lng, avgspeed, name) {
        var _this = this;
        this.googlemapscontainer.getMap(this.name).then(function () {
            _this.addMarker(lat, lng, name);
            _this.heatmap = new google.maps.visualization.HeatmapLayer({
                data: [
                    new google.maps.LatLng(lat, lng)
                ],
                map: _this.map
            });
            if (avgspeed > 55) {
                _this.heatmap.set('gradient', ['rgba(255, 0, 0, 0)',
                    'rgba(255, 0, 0, 1)']);
            }
            else if (avgspeed < 45 && avgspeed > 1) {
                _this.heatmap.set('gradient', ['rgba(255, 255, 0, 0)',
                    'rgba(255, 255, 0, 1)']);
            }
            else if (avgspeed <= 55 && avgspeed >= 45) {
                _this.heatmap.set('gradient', ['rgba(0, 225, 0, 0)',
                    'rgba(0, 255, 0, 1)']);
            }
            _this.heatmap.set('radius', 30);
            _this.heatmap.set('opacity', 1);
            _this.heatmap.setMap(_this.map);
        });
    };
    GmapSAService.prototype.delete = function () {
        this.googlemapscontainer.deleteMap(this.name);
    };
    return GmapSAService;
}());
GmapSAService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__services_googlemapscontainer_googlemapscontainer_service__["a" /* GoogleMapsContainerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_googlemapscontainer_googlemapscontainer_service__["a" /* GoogleMapsContainerService */]) === "function" && _a || Object])
], GmapSAService);

var _a;
//# sourceMappingURL=gmap.service.js.map

/***/ }),

/***/ "../../../../../src/app/widgets/speed-average-heatmap/speed-average-heatmap.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".custom-btn-stationsheatmap{\r\n    margin-bottom: 10px; \r\n}\r\n\r\n@media (min-width: 768px) { \r\n    .custom-btn-stationsheatmap{\r\n        margin-bottom: 10px;\r\n        margin-top: 10px;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/widgets/speed-average-heatmap/speed-average-heatmap.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"box box-success\" id=\"{{ id }}\">\r\n  <div class=\"nav-tabs-custom\" style=\"cursor: move;\">\r\n    <ul class=\"nav nav-tabs pull-right ui-sortable-handle\">\r\n      <li class=\"pull-left header\"><i class=\"fa fa-bars\"></i>{{ title }}</li>\r\n    </ul>\r\n    <div class=\"tab-content no-padding\">\r\n        <ngx-loading [show]=\"loading\" ></ngx-loading>\r\n      <div class=\" tab-pane active widget-frame\">\r\n\r\n        <div class=\"row widget-style\">\r\n          <div class=\"col-sm-12 col-md-12 col-lg-12 \">\r\n\r\n            <div class=\"date-from-box\">\r\n              <p>Fra:</p>\r\n              <datetime [datepicker]=\"datepickerOpts\" [(ngModel)]=\"dateFrom\" [timepicker]=\"{ showMeridian: false, minuteStep: 1, showSeconds:false, defaultTime:'current', explicitMode:false, icon: 'fa fa-clock-o'}\"></datetime>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"col-sm-12 col-md-12 col-lg-12\">\r\n            <p>Til:</p>\r\n            <div class=\"date-to-box\">\r\n              <datetime [datepicker]=\"datepickerOpts\" [(ngModel)]=\"dateTo\" [timepicker]=\"{ showMeridian: false, minuteStep: 5, showSeconds:false, defaultTime:'current', explicitMode:false,  icon: 'fa fa-clock-o'}\"></datetime>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"col-sm-12 col-md-12 col-lg-12\">\r\n            <p>Vælg station: (Anderupvej, rismarksvej,volsmoseallé, falen, Niels bohr, Nyborgvej)</p>\r\n\r\n            <select (click)=\"getSelectedStation()\" class=\"styled-select\" [(ngModel)]=\"selectedItem\">\r\n             <option *ngFor=\"let item of dataStations\" [ngValue]=\"item.name\"> {{ item.name }}</option>\r\n            </select>\r\n            \r\n            <button type=\"button\" (click)=\"onClick()\" class=\"btn btn-primary small-mobile custom-btn-stationsheatmap\">Udregn</button>\r\n            <p><b style=\"color:red\">Rød:</b> over 55km/t  <b style=\"color:green\">Grøn:</b> mellem 55 og 45 km/t <b style=\"color: #FEDF00 \">Gul:</b> under 45 km/t </p>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n\r\n          <div class=\"col-sm-12 col-md-12 col-lg-12\">\r\n            <div #map id=\"map\"></div>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>"

/***/ }),

/***/ "../../../../../src/app/widgets/speed-average-heatmap/speed-average-heatmap.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpeedAverageHeatmapComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__gmap_service__ = __webpack_require__("../../../../../src/app/widgets/speed-average-heatmap/gmap.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SpeedAverageHeatmapComponent = (function () {
    function SpeedAverageHeatmapComponent(gmapSAService, http) {
        this.gmapSAService = gmapSAService;
        this.http = http;
        this.data = [];
        // datetime picker
        this.dateFrom = new Date();
        this.dateTo = new Date();
        this.datepickerOpts = {
            autoclose: true,
            todayHighlight: true,
            assumeNearbyYear: true,
            format: 'd MM yyyy',
            icon: 'fa fa-calendar'
        };
        // all stations
        this.apiUrlStations = "http://adm-trafik-01.odknet.dk:2001/api/GetAllStations/Stations";
        //spinner
        this.showContentBool = false;
        this.loading = false;
    }
    SpeedAverageHeatmapComponent.prototype.ngOnInit = function () {
        this.initGoogleMap();
        this.getAllStations();
    };
    SpeedAverageHeatmapComponent.prototype.ngOnDestroy = function () {
        this.gmapSAService.delete();
    };
    SpeedAverageHeatmapComponent.prototype.getAllStations = function () {
        var _this = this;
        this.http.get(this.apiUrlStations).map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.dataStations = data;
        });
    };
    SpeedAverageHeatmapComponent.prototype.getSelectedStation = function () {
        var _this = this;
        this.dataStations.forEach(function (station) {
            if (station.name == _this.selectedItem) {
                _this.selectedItem = station.name;
                _this.areacode = station.areacode;
                return;
            }
        });
    };
    SpeedAverageHeatmapComponent.prototype.onClick = function () {
        this.loading = true;
        var dateFrom = this.dateFrom.toISOString().slice(0, 10);
        var timeFrom = this.dateFrom.getHours() + ":" + (this.dateFrom.getMinutes() < 10 ? '0' : '') + this.dateFrom.getMinutes();
        var dateTo = this.dateTo.toISOString().slice(0, 10);
        var timeTo = this.dateTo.getHours() + ":" + (this.dateTo.getMinutes() < 10 ? '0' : '') + this.dateTo.getMinutes();
        this.apiUrl = "http://adm-trafik-01.odknet.dk:2001/api/AverageSpeed/GetMeasurementsBetweenDates?from=" + dateFrom + "%20" + timeFrom + "&to=" + dateTo + "%20" + timeTo + "&areaCode=" + this.areacode;
        this.LoadHeatmap();
    };
    SpeedAverageHeatmapComponent.prototype.initGoogleMap = function () {
        (this.gmapSAService.initMap(this.title, this.mapRef.nativeElement, {
            center: { lat: 55.3931161, lng: 10.3854726 },
            scrollwheel: true,
            zoom: 11,
            minZoom: 11,
            maxZoom: 16,
            streetViewControl: false,
            mapTypeControl: false
        }, null));
    };
    SpeedAverageHeatmapComponent.prototype.LoadHeatmap = function () {
        var _this = this;
        this.http.get(this.apiUrl).map(function (res) { return res.json(); }).subscribe(function (marker) {
            if (marker.name == null) {
                swal("Ingen data fundet", "Vælg andet tidspunkt", "error");
                _this.loading = false;
            }
            else {
                _this.gmapSAService.addHeatmap(Number(marker.latitude), Number(marker.longitude), marker.measurement, marker.name);
                _this.loading = false;
            }
        });
    };
    return SpeedAverageHeatmapComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])("3"),
    __metadata("design:type", Number)
], SpeedAverageHeatmapComponent.prototype, "id", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])("Enkelt station: Gennemsnitshastighed"),
    __metadata("design:type", String)
], SpeedAverageHeatmapComponent.prototype, "title", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('map'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]) === "function" && _a || Object)
], SpeedAverageHeatmapComponent.prototype, "mapRef", void 0);
SpeedAverageHeatmapComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: '[app-speed-average-heatmap]',
        template: __webpack_require__("../../../../../src/app/widgets/speed-average-heatmap/speed-average-heatmap.component.html"),
        styles: [__webpack_require__("../../../../../src/app/widgets/speed-average-heatmap/speed-average-heatmap.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__gmap_service__["a" /* GmapSAService */]]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__gmap_service__["a" /* GmapSAService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__gmap_service__["a" /* GmapSAService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _c || Object])
], SpeedAverageHeatmapComponent);

var _a, _b, _c;
//# sourceMappingURL=speed-average-heatmap.component.js.map

/***/ }),

/***/ "../../../../../src/app/widgets/station-cartype-amount/station-cartype-amount.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n@media (min-width: 768px) { \r\n    .table-styling{\r\n            margin-right:40px;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/widgets/station-cartype-amount/station-cartype-amount.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"box box-success\" id=\"{{ id }}\">\r\n  <div class=\"nav-tabs-custom\" style=\"cursor: move;\">\r\n    <ul class=\"nav nav-tabs pull-right ui-sortable-handle\">\r\n      <li class=\"pull-left header\"><i class=\"fa fa-bars\"></i>{{ title }}</li>\r\n    </ul>\r\n \r\n    <div class=\"tab-content no-padding\">\r\n    <ngx-loading [show]=\"loading\" ></ngx-loading>\r\n      <div class=\" tab-pane active widget-frame\">\r\n        <div class=\"row widget-style\">\r\n          <div class=\"col-sm-12 col-md-12 col-lg-12 \">\r\n\r\n            <div class=\"date-from-box\">\r\n              <p>Fra:</p>\r\n              <datetime [datepicker]=\"datepickerOpts\" [(ngModel)]=\"dateFrom\" [timepicker]=\"{ showMeridian: false, minuteStep: 1, showSeconds:false, defaultTime:'current', explicitMode:false, icon: 'fa fa-clock-o'}\"></datetime>\r\n            </div>\r\n\r\n          </div>\r\n\r\n          <div class=\"col-sm-12 col-md-12 col-lg-12\">\r\n            <p>Til:</p>\r\n            <div class=\"date-to-box\">\r\n              <datetime [datepicker]=\"datepickerOpts\" [(ngModel)]=\"dateTo\" [timepicker]=\"{ showMeridian: false, minuteStep: 5, showSeconds:false, defaultTime:'current', explicitMode:false,  icon: 'fa fa-clock-o'}\"></datetime>\r\n            </div>\r\n\r\n          </div>\r\n\r\n          <div class=\"col-sm-12 col-md-12 col-lg-12\">\r\n            <p>Vælg station: (Anderupvej, rismarksvej,volsmoseallé, falen, Niels bohr, Nyborgvej)</p>\r\n\r\n            <select (click)=\"getSelectedStation()\" class=\"styled-select\" [(ngModel)]=\"selectedItem\">\r\n                        <option *ngFor=\"let item of dataStations\" [ngValue]=\"item.name\"> {{ item.name }}</option>\r\n            </select>\r\n\r\n            <button type=\"button\" class=\"btn btn-primary spacing-btn small-mobile\" (click)=\"getApiData()\">Udregn</button>\r\n            <br><br>\r\n\r\n            <div *ngIf=\"showContentBool\" class=\"table-responsive table-styling\">\r\n              <table class=\"table table-bordered table-hover \">\r\n                <thead>\r\n                  <tr>\r\n                    <th>Bil type</th>\r\n                    <th>Antal</th>\r\n                  </tr>\r\n                </thead>\r\n\r\n                <tbody>\r\n                  <tr *ngFor=\"let amount of data; let i = index\">\r\n                    <td> {{switchCase(i) }} {{carTypeName}}</td>\r\n                    <td>{{amount}}</td>\r\n                  </tr>\r\n                </tbody>\r\n              </table>\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n    </div>"

/***/ }),

/***/ "../../../../../src/app/widgets/station-cartype-amount/station-cartype-amount.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StationCartypeAmountComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//used to map jsonstring to a collection of data

var StationCartypeAmountComponent = (function () {
    function StationCartypeAmountComponent(http) {
        this.http = http;
        this.dateFrom = new Date();
        this.dateTo = new Date();
        this.datepickerOpts = {
            autoclose: true,
            todayHighlight: true,
            assumeNearbyYear: true,
            format: 'd MM yyyy',
            icon: 'fa fa-calendar'
        };
        //spinner
        this.showContentBool = false;
        this.loading = false;
        // all stations
        this.apiUrlStations = "http://adm-trafik-01.odknet.dk:2004/api/GetAllStations/Stations";
        this.getAllStations();
    }
    StationCartypeAmountComponent.prototype.ngOnInit = function () {
    };
    StationCartypeAmountComponent.prototype.getAllStations = function () {
        var _this = this;
        this.http.get(this.apiUrlStations).map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.dataStations = data;
        });
    };
    StationCartypeAmountComponent.prototype.getSelectedStation = function () {
        var _this = this;
        this.dataStations.forEach(function (station) {
            if (station.name == _this.selectedItem) {
                _this.selectedItem = station.name;
                _this.areacode = station.areacode;
            }
        });
    };
    StationCartypeAmountComponent.prototype.getApiData = function () {
        var _this = this;
        this.loading = true;
        var dateFrom = this.dateFrom.toISOString().slice(0, 10);
        var timeFrom = this.dateFrom.getHours() + ":" + (this.dateFrom.getMinutes() < 10 ? '0' : '') + this.dateFrom.getMinutes();
        var dateTo = this.dateTo.toISOString().slice(0, 10);
        var timeTo = this.dateTo.getHours() + ":" + (this.dateTo.getMinutes() < 10 ? '0' : '') + this.dateTo.getMinutes();
        this.apiUrl = "http://adm-trafik-01.odknet.dk:2004/api/CarType/GetCarTypes?from=" + dateFrom + "%20" + timeFrom + "&to=" + dateTo + "%20" + timeTo + "&areacode=" + this.areacode;
        console.log(this.apiUrl);
        this.http.get(this.apiUrl).map(function (res) { return res.json(); }).subscribe(function (data) {
            if (data.length < 1) {
                swal("Ingen data fundet", "Vælg andet tidspunkt", "error");
                _this.loading = false;
            }
            else {
                _this.data = data;
                _this.loading = false;
                _this.showContentBool = true;
            }
        });
    };
    StationCartypeAmountComponent.prototype.switchCase = function (int) {
        switch (int) {
            case 0: {
                this.carTypeName = "Person- og varebil";
                break;
            }
            case 1: {
                this.carTypeName = "Lastbil 2 akslet";
                break;
            }
            case 2: {
                this.carTypeName = "Lastbil 3 akslet";
                break;
            }
            case 3: {
                this.carTypeName = "Lastbil 4 akslet";
                break;
            }
            case 4: {
                this.carTypeName = "Lastvognstog 2/1-3";
                break;
            }
            case 5: {
                this.carTypeName = "Lastvognstog 3/2-3";
                break;
            }
            case 6: {
                this.carTypeName = "Sættevogn 2/1";
                break;
            }
            case 7: {
                this.carTypeName = "Sættevogn 2/2";
                break;
            }
            case 8: {
                this.carTypeName = "Sættevogn 2/3";
                break;
            }
            case 9: {
                this.carTypeName = "Sættevogn 3/1-2";
                break;
            }
            case 10: {
                this.carTypeName = "Sættevogn 3/3";
                break;
            }
            case 11: {
                this.carTypeName = "Busser";
                break;
            }
            case 12: {
                this.carTypeName = "Andre køretøjer";
                break;
            }
            default: {
                this.carTypeName = "Findes ikke";
                break;
            }
        }
    };
    return StationCartypeAmountComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])("6"),
    __metadata("design:type", Number)
], StationCartypeAmountComponent.prototype, "id", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])("Antal af forskellige biltyper"),
    __metadata("design:type", String)
], StationCartypeAmountComponent.prototype, "title", void 0);
StationCartypeAmountComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: '[app-station-cartype-amount]',
        template: __webpack_require__("../../../../../src/app/widgets/station-cartype-amount/station-cartype-amount.component.html"),
        styles: [__webpack_require__("../../../../../src/app/widgets/station-cartype-amount/station-cartype-amount.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], StationCartypeAmountComponent);

var _a;
//# sourceMappingURL=station-cartype-amount.component.js.map

/***/ }),

/***/ "../../../../../src/app/widgets/stationskort/stationskort.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#map {height: 500px; width: 100%;}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/widgets/stationskort/stationskort.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"box box-success\" id=\"{{ id }}\">\r\n  <div class=\"nav-tabs-custom\" style=\"cursor: move;\">\r\n    <ul class=\"nav nav-tabs pull-right ui-sortable-handle\">\r\n      <li class=\"pull-left header\"><i class=\"fa fa-bars\"></i>{{ title }}</li>\r\n    </ul>\r\n    <div class=\"tab-content no-padding\">\r\n      <div class=\" tab-pane active widget-frame\" >    \r\n         <div #map id=\"map\"></div>\r\n      </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/widgets/stationskort/stationskort.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StationskortComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_googlemapscontainer_googlemapscontainer_service__ = __webpack_require__("../../../../../src/app/services/googlemapscontainer/googlemapscontainer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//used to map jsonstring to a collection of data

var StationskortComponent = (function () {
    function StationskortComponent(gmapService, http) {
        this.gmapService = gmapService;
        this.http = http;
        this.apiUrl = "http://adm-trafik-01.odknet.dk:2002/api/GetAllStations/Stations";
        this.data = [];
        this.getData();
        this.getAllStations();
    }
    StationskortComponent.prototype.ngOnInit = function () {
        this.initGoogleMap();
    }; // end ngOnInit
    StationskortComponent.prototype.ngOnDestroy = function () {
        this.gmapService.deleteMap(this.title);
    };
    StationskortComponent.prototype.getData = function () {
        // see import comment
        return this.http.get(this.apiUrl).map(function (res) { return res.json(); });
    };
    StationskortComponent.prototype.getAllStations = function () {
        var _this = this;
        this.getData().subscribe(function (data) {
            _this.data = data;
        });
    };
    StationskortComponent.prototype.initGoogleMap = function () {
        var _this = this;
        (this.gmapService.createMap(this.title, this.mapRef.nativeElement, {
            center: { lat: 55.3931161, lng: 10.3854726 },
            scrollwheel: true,
            zoom: 11,
            minZoom: 11,
            maxZoom: 16,
            streetViewControl: false,
            mapTypeControl: false
        }).then(function (map) {
            _this.map = map;
            _this.http.get(_this.apiUrl).map(function (res) { return res.json(); }).subscribe(function (response) {
                if (response) {
                    for (var i in response) {
                        if (response.hasOwnProperty(i)) {
                            var marker = response[i];
                            _this.addMarker(Number(marker.latitude), Number(marker.longitude), marker.name + "\nUdsty: " + marker.equipmentType + "\nInstalleret: " + marker.installed);
                        }
                    }
                }
            });
        }));
    }; // end initGoogleMap
    StationskortComponent.prototype.addMarker = function (lat, lng, name) {
        new google.maps.Marker({ map: this.map, title: name, position: { lat: lat, lng: lng } });
    };
    return StationskortComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])("2"),
    __metadata("design:type", Number)
], StationskortComponent.prototype, "id", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])("Stationskort"),
    __metadata("design:type", String)
], StationskortComponent.prototype, "title", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('map'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]) === "function" && _a || Object)
], StationskortComponent.prototype, "mapRef", void 0);
StationskortComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: '[app-stationskort]',
        template: __webpack_require__("../../../../../src/app/widgets/stationskort/stationskort.component.html"),
        styles: [__webpack_require__("../../../../../src/app/widgets/stationskort/stationskort.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_googlemapscontainer_googlemapscontainer_service__["a" /* GoogleMapsContainerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_googlemapscontainer_googlemapscontainer_service__["a" /* GoogleMapsContainerService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _c || Object])
], StationskortComponent);

var _a, _b, _c;
//# sourceMappingURL=stationskort.component.js.map

/***/ }),

/***/ "../../../../../src/app/widgets/widgets.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__stationskort_stationskort_component__ = __webpack_require__("../../../../../src/app/widgets/stationskort/stationskort.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__speed_average_heatmap_speed_average_heatmap_component__ = __webpack_require__("../../../../../src/app/widgets/speed-average-heatmap/speed-average-heatmap.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__average_speed_heatmap_all_stations_average_speed_heatmap_all_stations_component__ = __webpack_require__("../../../../../src/app/widgets/average-speed-heatmap-all-stations/average-speed-heatmap-all-stations.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_datepicker__ = __webpack_require__("../../../../ng2-datepicker/lib-dist/ng2-datepicker.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__station_cartype_amount_station_cartype_amount_component__ = __webpack_require__("../../../../../src/app/widgets/station-cartype-amount/station-cartype-amount.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_datetime_ng2_datetime__ = __webpack_require__("../../../../ng2-datetime/ng2-datetime.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ngx_loading__ = __webpack_require__("../../../../ngx-loading/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var WidgetsModule = (function () {
    function WidgetsModule() {
    }
    return WidgetsModule;
}());
WidgetsModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_6_ng2_datepicker__["a" /* DatePickerModule */],
            __WEBPACK_IMPORTED_MODULE_8_ng2_datetime_ng2_datetime__["a" /* NKDatetimeModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_9_ngx_loading__["a" /* LoadingModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__stationskort_stationskort_component__["a" /* StationskortComponent */], __WEBPACK_IMPORTED_MODULE_4__speed_average_heatmap_speed_average_heatmap_component__["a" /* SpeedAverageHeatmapComponent */], __WEBPACK_IMPORTED_MODULE_5__average_speed_heatmap_all_stations_average_speed_heatmap_all_stations_component__["a" /* AverageSpeedHeatmapAllStationsComponent */], __WEBPACK_IMPORTED_MODULE_7__station_cartype_amount_station_cartype_amount_component__["a" /* StationCartypeAmountComponent */]],
        schemas: [],
        providers: [__WEBPACK_IMPORTED_MODULE_9_ngx_loading__["a" /* LoadingModule */]]
    })
], WidgetsModule);

//# sourceMappingURL=widgets.module.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map