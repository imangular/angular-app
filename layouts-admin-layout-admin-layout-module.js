(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layouts-admin-layout-admin-layout-module"],{

/***/ "./src/app/chatboat/chat.service.ts":
/*!******************************************!*\
  !*** ./src/app/chatboat/chat.service.ts ***!
  \******************************************/
/*! exports provided: Message, ChatService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Message", function() { return Message; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatService", function() { return ChatService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var Message = /** @class */ (function () {
    function Message(author, content) {
        this.author = author;
        this.content = content;
    }
    return Message;
}());

var ChatService = /** @class */ (function () {
    function ChatService() {
        this.conversation = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.messageMap = {
            "hi": "Hello",
            "who are you": "My name is Agular Bot",
            "what is angular": "Angular is the best framework ever",
            "very bad ui": "your message will be not considerd hahahaha",
            "default": "I can't understand. Can you please repeat"
        };
    }
    ChatService.prototype.getBotAnswer = function (msg) {
        var _this = this;
        var userMessage = new Message('user', msg);
        this.conversation.next([userMessage]);
        var botMessage = new Message('bot', this.getBotMessage(msg));
        setTimeout(function () {
            _this.conversation.next([botMessage]);
        }, 1500);
    };
    ChatService.prototype.getBotMessage = function (question) {
        var answer = this.messageMap[question];
        return answer || this.messageMap['default'] || this.messageMap['hi'] || this.messageMap['very bad ui'] || this.messageMap['who are you'] || this.messageMap['what is angular'];
    };
    ChatService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ChatService);
    return ChatService;
}());



/***/ }),

/***/ "./src/app/chatboat/chatboat.component.css":
/*!*************************************************!*\
  !*** ./src/app/chatboat/chatboat.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".message {\n    border-radius: 50px;\n    margin: 0 15px 20px;\n    padding: 10px 20px;\n    position: relative;\n    font-size: 20px;\n  }\n  .message.to {\n    background-color:gray;\n    color: #fff;\n    margin-left: 100px;\n    text-align: right;\n  }\n  .message.from {\n    background-color: #E5E4E9;\n    color: #363636;\n    margin-right: 100px;\n  }\n  .message.to + .message.to,\n  .message.from + .message.from {\n    margin-top: -10px;\n  }\n  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdGJvYXQvY2hhdGJvYXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixlQUFlO0VBQ2pCO0VBQ0E7SUFDRSxxQkFBcUI7SUFDckIsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixpQkFBaUI7RUFDbkI7RUFDQTtJQUNFLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2QsbUJBQW1CO0VBQ3JCO0VBQ0E7O0lBRUUsaUJBQWlCO0VBQ25CIiwiZmlsZSI6InNyYy9hcHAvY2hhdGJvYXQvY2hhdGJvYXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZXNzYWdlIHtcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgIG1hcmdpbjogMCAxNXB4IDIwcHg7XG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gIH1cbiAgLm1lc3NhZ2UudG8ge1xuICAgIGJhY2tncm91bmQtY29sb3I6Z3JheTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBtYXJnaW4tbGVmdDogMTAwcHg7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIH1cbiAgLm1lc3NhZ2UuZnJvbSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0U1RTRFOTtcbiAgICBjb2xvcjogIzM2MzYzNjtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwMHB4O1xuICB9XG4gIC5tZXNzYWdlLnRvICsgLm1lc3NhZ2UudG8sXG4gIC5tZXNzYWdlLmZyb20gKyAubWVzc2FnZS5mcm9tIHtcbiAgICBtYXJnaW4tdG9wOiAtMTBweDtcbiAgfVxuICAiXX0= */"

/***/ }),

/***/ "./src/app/chatboat/chatboat.component.html":
/*!**************************************************!*\
  !*** ./src/app/chatboat/chatboat.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel-header\">\n  <div class=\"header text-center\">\n    <h2 class=\"title\">ChatBoat</h2>\n    <p class=\"category\">Please checkout the\n      <a href=\"\" target=\"_blank\">full documentation.</a>\n    </p>\n  </div>\n</div>\n<div class=\"main-content\">\n  <div class=\"row\">\n\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <h4 class=\"card-title\">ChatBoat</h4>\n          <ng-container *ngFor=\"let message of messages\">\n            <div class=\"message\" [ngClass]=\"{ 'from': message.author === 'bot',\n'to': message.author === 'user' }\">\n              {{ message.content }}\n            </div>\n          </ng-container>\n          <label *ngIf=\"messages.length == 0; else dialogInfo\" for=\"nameField\">Your message</label>\n          <div class=\"input-group flex-nowrap\">\n\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"value\" (keyup.enter)=\"sendMessage()\" placeholder=\"Enter your message\" aria-label=\"Username\"\n              aria-describedby=\"addon-wrapping\">\n          </div>\n          <button (click)=\"sendMessage()\" class=\"btn btn-dark\">Send</button>\n          <ng-template #dialogInfo>\n            <span [className]=\"'float-right'\">Total messages: {{messages.length}}</span>\n          </ng-template>\n        </div>\n        <div class=\"card-body\">\n\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/chatboat/chatboat.component.ts":
/*!************************************************!*\
  !*** ./src/app/chatboat/chatboat.component.ts ***!
  \************************************************/
/*! exports provided: chatboatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chatboatComponent", function() { return chatboatComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _chat_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chat.service */ "./src/app/chatboat/chat.service.ts");



var chatboatComponent = /** @class */ (function () {
    function chatboatComponent(chatService) {
        this.chatService = chatService;
        this.messages = [];
    }
    chatboatComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.chatService.conversation.subscribe(function (val) {
            _this.messages = _this.messages.concat(val);
        });
    };
    chatboatComponent.prototype.sendMessage = function () {
        this.chatService.getBotAnswer(this.value);
        this.value = '';
    };
    chatboatComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-chatboat',
            template: __webpack_require__(/*! ./chatboat.component.html */ "./src/app/chatboat/chatboat.component.html"),
            styles: [__webpack_require__(/*! ./chatboat.component.css */ "./src/app/chatboat/chatboat.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_chat_service__WEBPACK_IMPORTED_MODULE_2__["ChatService"]])
    ], chatboatComponent);
    return chatboatComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul {\n    list-style-type: none;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kscUJBQXFCO0VBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidWwge1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"panel-header panel-header-sm\">\n</div>\n<div class=\"main-content\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <h5 class=\"title\"> Profile</h5>\n        </div>\n        <div class=\"card-body\">\n          <form [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit()\">\n            <div class=\"form-group\">\n                <label>First Name</label>\n                <input type=\"text\" formControlName=\"firstName\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.firstName.errors }\" />\n                <div *ngIf=\"submitted && f.firstName.errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"f.firstName.errors.required\">First Name is required</div>\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label>Last Name</label>\n                <input type=\"text\" formControlName=\"lastName\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.lastName.errors }\" />\n                <div *ngIf=\"submitted && f.lastName.errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"f.lastName.errors.required\">Last Name is required</div>\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label>Mobile Number</label>\n                <input type=\"number\" formControlName=\"mobile\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.mobile.errors }\" />\n                <div *ngIf=\"submitted && f.mobile.errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"f.mobile.errors.required\">Mobile number is required & must be 10 digit</div>\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label>Email</label>\n                <input type=\"text\" formControlName=\"email\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\" />\n                <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"f.email.errors.required\">Email is required</div>\n                    <div *ngIf=\"f.email.errors.email\">Email must be a valid email address</div>\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label>Password</label>\n                <input type=\"password\" formControlName=\"password\" class=\"form-control\" pattern=\"^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" />\n                <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"f.password.errors.required\">Password is required</div>\n                    <div *ngIf=\"f.password.errors.minlength\">Password must be at least 6 characters</div>\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label>Confirm Password</label>\n                <input type=\"password\" formControlName=\"confirmPassword\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.confirmPassword.errors }\" />\n                <div *ngIf=\"submitted && f.confirmPassword.errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"f.confirmPassword.errors.required\">Confirm Password is required</div>\n                    <div *ngIf=\"f.confirmPassword.errors.mustMatch\">Passwords must match</div>\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <button class=\"btn btn-dark\" >Register</button>\n            </div>\n        </form>\n        </div>\n      </div>\n    </div>\n    "

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _assets_must_match_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/must-match.validator */ "./src/assets/must-match.validator.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(router, formBuilder) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.submitted = false;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.registerForm = this.formBuilder.group({
            firstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2)]],
            lastName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2)]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            mobile: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(10)]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]],
            confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        }, {
            validator: Object(_assets_must_match_validator__WEBPACK_IMPORTED_MODULE_3__["MustMatch"])('password', 'confirmPassword')
        });
    };
    Object.defineProperty(DashboardComponent.prototype, "f", {
        get: function () { return this.registerForm.controls; },
        enumerable: true,
        configurable: true
    });
    DashboardComponent.prototype.onSubmit = function () {
        this.submitted = true;
        if (this.registerForm.invalid) {
            return;
        }
        this.router.navigate(['chatboat']);
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value));
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/layouts/admin-layout/admin-layout.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/layouts/admin-layout/admin-layout.module.ts ***!
  \*************************************************************/
/*! exports provided: AdminLayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLayoutModule", function() { return AdminLayoutModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _admin_layout_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./admin-layout.routing */ "./src/app/layouts/admin-layout/admin-layout.routing.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../user-profile/user-profile.component */ "./src/app/user-profile/user-profile.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _chatboat_chatboat_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../chatboat/chatboat.component */ "./src/app/chatboat/chatboat.component.ts");
/* harmony import */ var _chatboat_chat_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../chatboat/chat.service */ "./src/app/chatboat/chat.service.ts");












var AdminLayoutModule = /** @class */ (function () {
    function AdminLayoutModule() {
    }
    AdminLayoutModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_admin_layout_routing__WEBPACK_IMPORTED_MODULE_5__["AdminLayoutRoutes"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrModule"].forRoot()
            ],
            declarations: [
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"],
                _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_7__["UserProfileComponent"],
                _chatboat_chatboat_component__WEBPACK_IMPORTED_MODULE_10__["chatboatComponent"],
            ],
            providers: [_chatboat_chat_service__WEBPACK_IMPORTED_MODULE_11__["ChatService"]]
        })
    ], AdminLayoutModule);
    return AdminLayoutModule;
}());



/***/ }),

/***/ "./src/app/layouts/admin-layout/admin-layout.routing.ts":
/*!**************************************************************!*\
  !*** ./src/app/layouts/admin-layout/admin-layout.routing.ts ***!
  \**************************************************************/
/*! exports provided: AdminLayoutRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLayoutRoutes", function() { return AdminLayoutRoutes; });
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../user-profile/user-profile.component */ "./src/app/user-profile/user-profile.component.ts");
/* harmony import */ var _chatboat_chatboat_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../chatboat/chatboat.component */ "./src/app/chatboat/chatboat.component.ts");



var AdminLayoutRoutes = [
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__["DashboardComponent"] },
    { path: 'user-profile', component: _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_1__["UserProfileComponent"] },
    { path: 'chatboat', component: _chatboat_chatboat_component__WEBPACK_IMPORTED_MODULE_2__["chatboatComponent"] },
];


/***/ }),

/***/ "./src/app/user-profile/user-profile.component.css":
/*!*********************************************************!*\
  !*** ./src/app/user-profile/user-profile.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItcHJvZmlsZS91c2VyLXByb2ZpbGUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/user-profile/user-profile.component.html":
/*!**********************************************************!*\
  !*** ./src/app/user-profile/user-profile.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel-header panel-header-sm\">\n</div>\n<div class=\"main-content\">\n  <div class=\"row\">\n    <div class=\"col-md-8\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <h5 class=\"title\"> Profile</h5>\n        </div>\n        <div class=\"card-body\">\n          <form>\n            <div class=\"row\">\n              <div class=\"col-md-5 pr-1\">\n                <div class=\"form-group\">\n                  <label>Company (disabled)</label>\n                  <input type=\"text\" class=\"form-control\" disabled=\"\" placeholder=\"Company\" value=\"EvolutionCo.\">\n                </div>\n              </div>\n              <div class=\"col-md-3 px-1\">\n                <div class=\"form-group\">\n                  <label>Username</label>\n                  <input type=\"text\" class=\"form-control\" placeholder=\"Username\" value=\"Putus@2010\">\n                </div>\n              </div>\n              <div class=\"col-md-4 pl-1\">\n                <div class=\"form-group\">\n                  <label for=\"email\">Email address</label>\n                  <input name=\"email\" id=\"email\" type=\"email\" class=\"form-control\" placeholder=\"Email\" value=\"imangulardev@gmail.com\">\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-6 pr-1\">\n                <div class=\"form-group\">\n                  <label>First Name</label>\n                  <input type=\"text\" class=\"form-control\" placeholder=\"First Name\" value=\"Prashant\">\n                </div>\n              </div>\n              <div class=\"col-md-6 pl-1\">\n                <div class=\"form-group\">\n                  <label>Last Name</label>\n                  <input type=\"text\" class=\"form-control\" placeholder=\"Last Name\" value=\"Jha\">\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-12\">\n                <div class=\"form-group\">\n                  <label>Address</label>\n                  <input type=\"text\" class=\"form-control\" placeholder=\"Home Address\" value=\"Kempapura , Hebbal\">\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-4 pr-1\">\n                <div class=\"form-group\">\n                  <label>City</label>\n                  <input type=\"text\" class=\"form-control\" placeholder=\"City\" value=\"Bangalore\">\n                </div>\n              </div>\n              <div class=\"col-md-4 px-1\">\n                <div class=\"form-group\">\n                  <label>Country</label>\n                  <input type=\"text\" class=\"form-control\" placeholder=\"Country\" value=\"India\">\n                </div>\n              </div>\n              <div class=\"col-md-4 pl-1\">\n                <div class=\"form-group\">\n                  <label>Postal Code</label>\n                  <input type=\"number\" class=\"form-control\" placeholder=\"ZIP Code\" value=\"560024\">\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-12\">\n                <div class=\"form-group\">\n                  <label>About Me</label>\n                  <textarea rows=\"4\" cols=\"80\" class=\"form-control\" placeholder=\"Here can be your description\">2 years of extensive experience mainly on Angular 5,6,7 , Typescript ,Html,css & Bootstrap.Ability in learning new concepts quickly, working well under pressure and communicating ideas .Adeptness in handling multiple priorities, with a genuine interest in personal and professional development along with ability to work independently with minimum supervision in team environment.</textarea>\n                </div>\n              </div>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-4\">\n      <div class=\"card card-user\">\n        <div class=\"image\">\n          <img src=\"../assets/img/bg5.jpg\" alt=\"...\">\n        </div>\n        <div class=\"card-body\">\n          <div class=\"author\">\n            <a href=\"#\">\n              <img class=\"avatar border-gray\" src=\"../assets/img/prashant.jpg\" alt=\"...\">\n              <h5 class=\"title\">Prashant Jha</h5>\n            </a>\n            <p class=\"description\">\n              imangulardev@gmail.com\n            </p>\n          </div>\n          <p class=\"description text-center\">\n            software Developer\n            <br> I am from Bihar\n            <br>\n          </p>\n        </div>\n        <br>\n        <hr>\n        <div class=\"button-container\">\n          <button href=\"#\" class=\"btn btn-neutral btn-icon btn-round btn-lg\">\n            <i class=\"fab fa-facebook-f\"></i>\n          </button>\n          <button href=\"#\" class=\"btn btn-neutral btn-icon btn-round btn-lg\">\n            <i class=\"fab fa-twitter\"></i>\n          </button>\n          <button href=\"#\" class=\"btn btn-neutral btn-icon btn-round btn-lg\">\n            <i class=\"fab fa-google-plus-g\"></i>\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/user-profile/user-profile.component.ts":
/*!********************************************************!*\
  !*** ./src/app/user-profile/user-profile.component.ts ***!
  \********************************************************/
/*! exports provided: UserProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileComponent", function() { return UserProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UserProfileComponent = /** @class */ (function () {
    function UserProfileComponent() {
    }
    UserProfileComponent.prototype.ngOnInit = function () {
    };
    UserProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-profile',
            template: __webpack_require__(/*! ./user-profile.component.html */ "./src/app/user-profile/user-profile.component.html"),
            styles: [__webpack_require__(/*! ./user-profile.component.css */ "./src/app/user-profile/user-profile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UserProfileComponent);
    return UserProfileComponent;
}());



/***/ }),

/***/ "./src/assets/must-match.validator.ts":
/*!********************************************!*\
  !*** ./src/assets/must-match.validator.ts ***!
  \********************************************/
/*! exports provided: MustMatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MustMatch", function() { return MustMatch; });
// custom validator to check that two fields match
function MustMatch(controlName, matchingControlName) {
    return function (formGroup) {
        var control = formGroup.controls[controlName];
        var matchingControl = formGroup.controls[matchingControlName];
        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            // return if another validator has already found an error on the matchingControl
            return;
        }
        // set error on matchingControl if validation fails
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
        }
        else {
            matchingControl.setErrors(null);
        }
    };
}


/***/ })

}]);
//# sourceMappingURL=layouts-admin-layout-admin-layout-module.js.map