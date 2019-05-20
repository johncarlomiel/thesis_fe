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

/***/ "./src/app/admin-auth/admin-auth.component.css":
/*!*****************************************************!*\
  !*** ./src/app/admin-auth/admin-auth.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.mainContent{\r\n    \r\n    padding: 0 30% 0 30%;\r\n    \r\n    height: 100%;\r\n    width: 100%;\r\n    \r\n\r\n    \r\n    \r\n}\r\n\r\n.card{\r\n    width:100%;\r\n}\r\n\r\nlabel{\r\n    font-size:1.2rem !important;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4tYXV0aC9hZG1pbi1hdXRoLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBOztJQUVJLHFCQUFxQjs7SUFFckIsYUFBYTtJQUNiLFlBQVk7Ozs7O0NBS2Y7O0FBRUQ7SUFDSSxXQUFXO0NBQ2Q7O0FBQ0Q7SUFDSSw0QkFBNEI7Q0FDL0IiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi1hdXRoL2FkbWluLWF1dGguY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4ubWFpbkNvbnRlbnR7XHJcbiAgICBcclxuICAgIHBhZGRpbmc6IDAgMzAlIDAgMzAlO1xyXG4gICAgXHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIFxyXG5cclxuICAgIFxyXG4gICAgXHJcbn1cclxuXHJcbi5jYXJke1xyXG4gICAgd2lkdGg6MTAwJTtcclxufVxyXG5sYWJlbHtcclxuICAgIGZvbnQtc2l6ZToxLjJyZW0gIWltcG9ydGFudDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/admin-auth/admin-auth.component.html":
/*!******************************************************!*\
  !*** ./src/app/admin-auth/admin-auth.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mainContent\" style=\"background-color:rgb(248, 248, 255)\">\n\n  <img class=\"ui medium circular centered image\" src=\"assets/images/gc logo.png\">\n  <div class=\"ui negative message\" *ngIf=\"isError\">\n    <i class=\"close icon\" (click)=\"isError = false\"></i>\n    <div class=\"header center bolder\">\n      {{errorMsg}}\n    </div>\n  </div>\n  <div class=\"ui card\">\n\n    <div class=\"content\">\n      <h1 class=\"primary bolder center\">Admin Login Page</h1>\n    </div>\n\n    <div class=\"content\">\n      <div class=\"ui form container\">\n        <div class=\"field\">\n          <label for=\"username\" class=\"ui header primary\">Username</label>\n          <input type=\"text\" placeholder=\"Enter your username here..\" #username>\n        </div>\n\n        <div class=\"field\">\n          <label for=\"password\" class=\"ui header primary\">Password</label>\n          <input type=\"password\" placeholder=\"Enter your password here..\" #password>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"extra content\">\n\n      <button class=\"ui button right floated blue\" (click)=\"login(username.value, password.value)\">Submit</button>\n    </div>\n\n\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/admin-auth/admin-auth.component.ts":
/*!****************************************************!*\
  !*** ./src/app/admin-auth/admin-auth.component.ts ***!
  \****************************************************/
/*! exports provided: AdminAuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminAuthComponent", function() { return AdminAuthComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_admin_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/admin.service */ "./src/app/services/admin.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _services_chat_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/chat.service */ "./src/app/services/chat.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AdminAuthComponent = /** @class */ (function () {
    function AdminAuthComponent(adminService, chatService, router, dataService) {
        this.adminService = adminService;
        this.chatService = chatService;
        this.router = router;
        this.dataService = dataService;
        this.isError = false;
        this.errorMsg = "";
    }
    AdminAuthComponent.prototype.ngOnInit = function () {
    };
    AdminAuthComponent.prototype.login = function (username, password) {
        var _this = this;
        if (username != "" && password != "") {
            this.isError = false;
            //Transform username and password into json format
            var data = { username: username, password: password };
            //Send a request to service
            this.adminService.login(data).subscribe(function (successData) {
                _this.dataService.payload("Bearer " + successData, "admin").subscribe(function (successData2) {
                    localStorage.setItem("AdminAuthorization", "Bearer " + successData);
                    _this.chatService.socketLogin(successData2.id);
                    _this.router.navigate(["/admin-home"]);
                }, function (error) { return console.log(error); });
            }, function (error) {
                _this.isError = true;
                _this.errorMsg = "Wrong username or password";
            });
        }
        else {
            this.isError = true;
            this.errorMsg = "Please fill all fields";
        }
    };
    AdminAuthComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-auth',
            template: __webpack_require__(/*! ./admin-auth.component.html */ "./src/app/admin-auth/admin-auth.component.html"),
            styles: [__webpack_require__(/*! ./admin-auth.component.css */ "./src/app/admin-auth/admin-auth.component.css")]
        }),
        __metadata("design:paramtypes", [_services_admin_service__WEBPACK_IMPORTED_MODULE_1__["AdminService"],
            _services_chat_service__WEBPACK_IMPORTED_MODULE_4__["ChatService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]])
    ], AdminAuthComponent);
    return AdminAuthComponent;
}());



/***/ }),

/***/ "./src/app/admin-events/admin-events.component.css":
/*!*********************************************************!*\
  !*** ./src/app/admin-events/admin-events.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url('https://fonts.googleapis.com/css?family=Staatliches');\r\ntd{\r\n    font-weight: bolder;\r\n}\r\nth{\r\n    font-size: 1.2em;\r\n    font-weight: bolder;\r\n}\r\nh4,h5{\r\n    margin:0;\r\n    font-family: 'Staatliches', cursive;\r\n}\r\nh3{\r\n    margin: 0 0 0 0;\r\n    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\r\n}\r\n.printContent{\r\n    width:940px;\r\n    height:100vh;\r\n    page-break-inside:avoid !important;\r\n}\r\n@media print {\r\n    #message{\r\n        color:black;\r\n    }\r\n    #print_header{\r\n        letter-spacing:0.2em;font-weight: bold;color:grey !important; \r\n    }\r\n    .ui.progress {\r\n        background-image: none;\r\n        -webkit-print-color-adjust: exact;\r\n        box-shadow: inset 0 0;\r\n        -webkit-box-shadow: inset 0 0;\r\n      \r\n      \r\n      }\r\n    \r\n      h4,h5{\r\n        font-family: 'Staatliches', cursive;\r\n    }\r\n      h3{\r\n      font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\r\n  }\r\n    html, body {\r\n      /*changing width to 100% causes huge overflow and wrap*/\r\n      height:100%; \r\n      background: #FFF; \r\n      font-size: 9pt;\r\n      font-family: Staatliches;\r\n    }\r\n    table{\r\n        page-break-inside: avoid;\r\n    }\r\n    \r\n  \r\n\r\n  }\r\n.onepage {\r\n    page-break-after: always;\r\n  }\r\n.onepage:last-child {\r\n    page-break-after: avoid;\r\n  }\r\n.code-rate{\r\n    padding: 10px;\r\n}\r\n.image-icon{\r\n    margin:5px;\r\n}\r\n#try {\r\n    -webkit-clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);\r\n    clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);\r\n }\r\n.containerBox {\r\n    position: relative;\r\n    text-align: center;\r\n    color: black;\r\n}\r\n.center-text {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%);\r\n  }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4tZXZlbnRzL2FkbWluLWV2ZW50cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG1FQUFtRTtBQUNuRTtJQUNJLG9CQUFvQjtDQUN2QjtBQUNEO0lBQ0ksaUJBQWlCO0lBQ2pCLG9CQUFvQjtDQUN2QjtBQUdEO0lBQ0ksU0FBUztJQUNULG9DQUFvQztDQUN2QztBQUNEO0lBQ0ksZ0JBQWdCO0lBQ2hCLHVIQUF1SDtDQUMxSDtBQUNEO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixtQ0FBbUM7Q0FDdEM7QUFLRDtJQUNJO1FBQ0ksWUFBWTtLQUNmO0lBQ0Q7UUFDSSxxQkFBcUIsa0JBQWtCLHNCQUFzQjtLQUNoRTtJQUNEO1FBQ0ksdUJBQXVCO1FBQ3ZCLGtDQUFrQztRQUNsQyxzQkFBc0I7UUFDdEIsOEJBQThCOzs7T0FHL0I7O01BRUQ7UUFDRSxvQ0FBb0M7S0FDdkM7TUFDQztNQUNBLHVIQUF1SDtHQUMxSDtJQUNDO01BQ0Usd0RBQXdEO01BQ3hELFlBQVk7TUFDWixpQkFBaUI7TUFDakIsZUFBZTtNQUNmLHlCQUF5QjtLQUMxQjtJQUNEO1FBQ0kseUJBQXlCO0tBQzVCOzs7O0dBSUY7QUFFRDtJQUNFLHlCQUF5QjtHQUMxQjtBQUVEO0lBQ0Usd0JBQXdCO0dBQ3pCO0FBS0g7SUFDSSxjQUFjO0NBQ2pCO0FBRUQ7SUFDSSxXQUFXO0NBQ2Q7QUFFQTtJQUNHLGlGQUFpRjtJQUNqRix5RUFBeUU7RUFDM0U7QUFPRDtJQUNHLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsYUFBYTtDQUNoQjtBQUNEO0lBQ0ksbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCxVQUFVO0lBQ1YseUNBQWlDO1lBQWpDLGlDQUFpQztHQUNsQyIsImZpbGUiOiJzcmMvYXBwL2FkbWluLWV2ZW50cy9hZG1pbi1ldmVudHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9U3RhYXRsaWNoZXMnKTtcclxudGR7XHJcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG59XHJcbnRoe1xyXG4gICAgZm9udC1zaXplOiAxLjJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbn1cclxuXHJcblxyXG5oNCxoNXtcclxuICAgIG1hcmdpbjowO1xyXG4gICAgZm9udC1mYW1pbHk6ICdTdGFhdGxpY2hlcycsIGN1cnNpdmU7XHJcbn1cclxuaDN7XHJcbiAgICBtYXJnaW46IDAgMCAwIDA7XHJcbiAgICBmb250LWZhbWlseTogJ0x1Y2lkYSBTYW5zJywgJ0x1Y2lkYSBTYW5zIFJlZ3VsYXInLCAnTHVjaWRhIEdyYW5kZScsICdMdWNpZGEgU2FucyBVbmljb2RlJywgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xyXG59XHJcbi5wcmludENvbnRlbnR7XHJcbiAgICB3aWR0aDo5NDBweDtcclxuICAgIGhlaWdodDoxMDB2aDtcclxuICAgIHBhZ2UtYnJlYWstaW5zaWRlOmF2b2lkICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbkBtZWRpYSBwcmludCB7XHJcbiAgICAjbWVzc2FnZXtcclxuICAgICAgICBjb2xvcjpibGFjaztcclxuICAgIH1cclxuICAgICNwcmludF9oZWFkZXJ7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6MC4yZW07Zm9udC13ZWlnaHQ6IGJvbGQ7Y29sb3I6Z3JleSAhaW1wb3J0YW50OyBcclxuICAgIH1cclxuICAgIC51aS5wcm9ncmVzcyB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcclxuICAgICAgICAtd2Via2l0LXByaW50LWNvbG9yLWFkanVzdDogZXhhY3Q7XHJcbiAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAwO1xyXG4gICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwO1xyXG4gICAgICBcclxuICAgICAgXHJcbiAgICAgIH1cclxuICAgIFxyXG4gICAgICBoNCxoNXtcclxuICAgICAgICBmb250LWZhbWlseTogJ1N0YWF0bGljaGVzJywgY3Vyc2l2ZTtcclxuICAgIH1cclxuICAgICAgaDN7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAnTHVjaWRhIFNhbnMnLCAnTHVjaWRhIFNhbnMgUmVndWxhcicsICdMdWNpZGEgR3JhbmRlJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XHJcbiAgfVxyXG4gICAgaHRtbCwgYm9keSB7XHJcbiAgICAgIC8qY2hhbmdpbmcgd2lkdGggdG8gMTAwJSBjYXVzZXMgaHVnZSBvdmVyZmxvdyBhbmQgd3JhcCovXHJcbiAgICAgIGhlaWdodDoxMDAlOyBcclxuICAgICAgYmFja2dyb3VuZDogI0ZGRjsgXHJcbiAgICAgIGZvbnQtc2l6ZTogOXB0O1xyXG4gICAgICBmb250LWZhbWlseTogU3RhYXRsaWNoZXM7XHJcbiAgICB9XHJcbiAgICB0YWJsZXtcclxuICAgICAgICBwYWdlLWJyZWFrLWluc2lkZTogYXZvaWQ7XHJcbiAgICB9XHJcbiAgICBcclxuICBcclxuXHJcbiAgfVxyXG5cclxuICAub25lcGFnZSB7XHJcbiAgICBwYWdlLWJyZWFrLWFmdGVyOiBhbHdheXM7XHJcbiAgfVxyXG4gIFxyXG4gIC5vbmVwYWdlOmxhc3QtY2hpbGQge1xyXG4gICAgcGFnZS1icmVhay1hZnRlcjogYXZvaWQ7XHJcbiAgfVxyXG5cclxuXHJcblxyXG5cclxuLmNvZGUtcmF0ZXtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbi5pbWFnZS1pY29ue1xyXG4gICAgbWFyZ2luOjVweDtcclxufVxyXG5cclxuICN0cnkge1xyXG4gICAgLXdlYmtpdC1jbGlwLXBhdGg6IHBvbHlnb24oNTAlIDAlLCAxMDAlIDI1JSwgMTAwJSA3NSUsIDUwJSAxMDAlLCAwJSA3NSUsIDAlIDI1JSk7XHJcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oNTAlIDAlLCAxMDAlIDI1JSwgMTAwJSA3NSUsIDUwJSAxMDAlLCAwJSA3NSUsIDAlIDI1JSk7XHJcbiB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAuY29udGFpbmVyQm94IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG4uY2VudGVyLXRleHQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICB9XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/admin-events/admin-events.component.html":
/*!**********************************************************!*\
  !*** ./src/app/admin-events/admin-events.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!printing\">\n  <div class=\"ui top attached demo menu\">\n    <a class=\"item\" (click)=\"sidebar.toggle()\">\n      <i class=\"sidebar icon\"></i>\n    </a>\n    <div class=\"right menu\">\n      <div class=\"item\">\n        <div class=\"ui blue button\" (click)=\"logout()\">Logout</div>\n      </div>\n    </div>\n  </div>\n\n  <sui-sidebar-container class=\"ui bottom attached segment\">\n    <sui-sidebar class=\"vertical\" #sidebar style=\"height:100%\">\n      <a class=\"item \" routerLink=\"/admin-home\">\n        Home\n      </a>\n      <a class=\"item\" routerLink=\"/takers-attendance\">\n        Attendance\n      </a>\n      <a class=\"item\" routerLink=\"/admin-graph-specific\">\n        Specific Reports\n      </a>\n      <a class=\"item\" routerLink=\"/admin-graph-general\">\n        General Reports\n      </a>\n      <a class=\"item\" routerLink=\"/admin-new-print\">\n        Print Section\n      </a>\n      <a class=\"item\" routerLink=\"/admin-new-archive\">\n        Archive Section\n      </a>\n      <a class=\"item\" routerLink=\"/admin-settings\">\n        Accounts Settings\n      </a>\n      <a class=\"item active\" routerLink=\"/admin-events\">\n        Events\n      </a>\n      <a class=\"item\" routerLink=\"/admin-messages\">\n        Messages\n      </a>\n    </sui-sidebar>\n    <sui-sidebar-sibling [isDimmedWhenVisible]=\"true\">\n      <div class=\"ui basic segment\">\n        <div class=\"ui grid\" class=\"mainContent\">\n          <h2 class=\"ui center aligned icon header\">\n            <i class=\"circular calendar alternate icon\"></i>\n            Events\n            <div class=\"sub header\">Manage your events here..</div>\n          </h2>\n          <div class=\"ui info message container\">\n            <div class=\"header\">\n              Some of the action you can do in this section\n            </div>\n            <ul class=\"list\">\n              <li>Create Event</li>\n              <li>View Event</li>\n              <li>Update Event</li>\n              <li>Delete Event</li>\n            </ul>\n          </div>\n          <div class=\"ui negative message container\">\n            <div class=\"header\">\n              Note:\n            </div>\n            <p>You can delete an event but proceed with caution..\n            </p>\n          </div>\n\n          <div class=\"right\">\n            <button class=\"ui right blue labeled icon button\" (click)=\"showAddEvent = true;\">\n              <i class=\"right plus icon\"></i>\n              Add event\n            </button>\n          </div>\n          <table class=\"ui celled table center aligned\">\n            <thead>\n              <tr>\n                <th>Poster</th>\n                <th>Name</th>\n                <th>Description</th>\n                <th>Location</th>\n                <th>Date</th>\n                <th>From</th>\n                <th>To</th>\n                <th colspan=\"3\" style=\"background-color:#db2828;color:white\">Action Buttons (hot)</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let event of events | paginate: { itemsPerPage: 10, currentPage: page } ; let i = index\">\n                <td>\n                  <img [src]=\"event.poster_url\" class=\"ui tiny centered rounded image\" [alt]=\"event.name\">\n                </td>\n                <td>{{event.name}}</td>\n                <td style=\"white-space: pre-line\">{{trim(event.description)}}</td>\n                <td>{{event.location}}</td>\n                <td>{{event.date}}</td>\n                <td>{{event.time_from}}</td>\n                <td>{{event.time_to}}</td>\n                <td>\n                  <button class=\"ui blue button\"\n                    (click)=\"updateBtn(event.poster_url, event.name, event.location, event.date, event.time_from, event.time_to, event.event_id)\">\n                    Update Event\n                  </button>\n                </td>\n                <td>\n                  <button class=\"ui blue button\" (click)=\"viewInvitations(event)\">\n                    Invitations\n                  </button>\n                </td>\n                <td>\n                  <button class=\"ui red button\" (click)=\"deleteEvent(event.event_id)\">\n                    Delete Event\n                  </button>\n                </td>\n\n              </tr>\n            </tbody>\n            <tfoot>\n              <tr>\n                <th colspan=\"8\">\n                  <div class=\"ui right floated pagination menu\">\n                    <a></a>\n                    <pagination-controls (pageChange)=\"page = $event\"></pagination-controls>\n                  </div>\n                </th>\n              </tr>\n            </tfoot>\n          </table>\n\n          <!-- Add event Modal -->\n          <sui-modal *ngIf=\"showAddEvent\" [mustScroll]=\"true\" [isFullScreen]=\"true\" [isClosable]=\"true\"\n            (dismissed)=\"showAddEvent = false\" #addEventModal>\n            <div class=\"content\">\n              <form class=\"ui form\" enctype=\"multipart/form-data\" #myForm=\"ngForm\" (ngSubmit)=\"addEvent(myForm)\"\n                novalidate>\n                <div class=\"three fields\">\n                  <div class=\"field\">\n                    <label for=\"poster\">Poster</label>\n                    <input type=\"file\" (change)=\"onFileChanged($event)\" name=\"poster\" ngModel required>\n                  </div>\n                  <div class=\"field\">\n                    <label>Name</label>\n                    <input type=\"text\" name=\"name\" ngModel required>\n                  </div>\n                  <div class=\"field\">\n                    <label>Location</label>\n                    <input type=\"text\" name=\"location\" ngModel required>\n                  </div>\n                </div>\n\n                <div class=\"field\">\n                  <label for=\"description\">Description</label>\n                  <textarea name=\"description\" ngModel required></textarea>\n                </div>\n\n                <div class=\"three fields\">\n                  <div class=\"field\">\n                    <label for=\"date\">Date</label>\n                    <div class=\"ui left icon input\">\n                      <i class=\"calendar icon\"></i>\n                      <input autocomplete=\"off\" suiDatepicker [pickerMinDate]=\"minDate\" [pickerMaxDate]=\"maxDate\"\n                        [pickerMode]=\"'date'\" name=\"date\" ngModel required>\n                    </div>\n                  </div>\n\n                  <div class=\"field\">\n                    <label for=\"time_from\">Time From</label>\n                    <div class=\"ui left icon input\">\n                      <i class=\"clock icon\"></i>\n                      <input autocomplete=\"off\" suiDatepicker [pickerMode]=\"'time'\" name=\"time_from\" ngModel required>\n                    </div>\n                  </div>\n\n                  <div class=\"field\">\n                    <label for=\"time_from\">Time To</label>\n                    <div class=\"ui left icon input\">\n                      <i class=\"clock icon\"></i>\n                      <input autocomplete=\"off\" suiDatepicker [pickerMode]=\"'time'\" name=\"time_to\" ngModel required>\n                    </div>\n                  </div>\n\n\n                </div>\n\n                <div class=\"ui negative message\" *ngIf=\"err\">\n                  <i class=\"close icon\"></i>\n                  <div class=\"header center\">\n                    All fields are required\n                  </div>\n                </div>\n                <p class=\"right\">\n                  <button class=\"ui red button\" (click)=\"addEventModal.deny()\">Close</button>\n                  <button class=\"ui green button right\" type=\"submit\">Submit</button>\n                </p>\n\n\n              </form>\n\n            </div>\n\n          </sui-modal>\n          <!-- Add event Modal -->\n\n\n          <!-- Update event Modal -->\n          <sui-modal *ngIf=\"showUpdateEvent\" [mustScroll]=\"true\" [isFullScreen]=\"true\" [isClosable]=\"true\"\n            (dismissed)=\"showUpdateEvent = false\" #updateEventModal>\n            <div class=\"content\">\n              <form class=\"ui form\" enctype=\"multipart/form-data\">\n\n                <img class=\"ui medium centered rounded bordered image\" [src]=\"updateData.poster_url\">\n\n                <div class=\"field\" style=\"display:inline\">\n                  <label for=\"poster\">Poster</label>\n                  <input type=\"file\" (change)=\"onUpdateFileChanged($event)\" name=\"poster\">\n                  <button class=\"ui button blue\" (click)=\"updateEvent('poster_url',selectedUpdatedPoster)\">\n                    Update\n                  </button>\n                </div>\n                <div class=\"field\">\n                  <label>Name</label>\n                  <input type=\"text\" [placeholder]=\"updateData.name\" #updateName>\n                  <button class=\"ui button blue\" (click)=\"updateEvent('name',updateName.value)\">\n                    Update\n                  </button>\n                </div>\n                <div class=\"field\">\n                  <label>Location</label>\n                  <textarea name=\"location\" [placeholder]=\"updateData.location\" #updateLoc></textarea>\n                  <button class=\"ui button blue\" (click)=\"updateEvent('location',updateLoc.value)\">\n                    Update\n                  </button>\n                </div>\n\n                <div class=\"three fields\">\n                  <div class=\"field\">\n                    <label for=\"date\">Date</label>\n                    <div class=\"ui left icon input\">\n                      <i class=\"calendar icon\"></i>\n                      <input autocomplete=\"off\" suiDatepicker [pickerMinDate]=\"minDate\" [placeholder]=\"updateData.date\"\n                        [pickerMaxDate]=\"maxDate\" [pickerMode]=\"'date'\" #updateDate>\n                      <button class=\"ui button blue\" (click)=\"updateEvent('date',updateDate.value)\">\n                        Update\n                      </button>\n                    </div>\n                  </div>\n\n                  <div class=\"field\">\n                    <label for=\"time_from\">Time From</label>\n                    <div class=\"ui left icon input\">\n                      <i class=\"clock icon\"></i>\n                      <input autocomplete=\"off\" suiDatepicker [placeholder]=\"updateData.time_from\" [pickerMode]=\"'time'\"\n                        #updateTimeFrom>\n                      <button class=\"ui button blue\" (click)=\"updateEvent('time_from',updateTimeFrom.value)\">\n                        Update\n                      </button>\n                    </div>\n                  </div>\n\n                  <div class=\"field\">\n                    <label for=\"time_from\">Time To</label>\n                    <div class=\"ui left icon input\">\n                      <i class=\"clock icon\"></i>\n                      <input autocomplete=\"off\" [placeholder]=\"updateData.time_to\" suiDatepicker [pickerMode]=\"'time'\"\n                        #updateTimeTo>\n                      <button class=\"ui button blue\" (click)=\"updateEvent('time_to',updateTimeTo.value)\">\n                        Update\n                      </button>\n                    </div>\n                  </div>\n\n\n                </div>\n\n                <div class=\"ui negative message\" *ngIf=\"err\">\n                  <i class=\"close icon\"></i>\n                  <div class=\"header center\">\n                    All fields are required\n                  </div>\n                </div>\n                <p class=\"right\">\n                  <button class=\"ui red button\" (click)=\"updateEventModal.deny()\">Close</button>\n                </p>\n\n\n              </form>\n\n            </div>\n\n          </sui-modal>\n\n\n          <sui-modal [isClosable]=\"true\" *ngIf=\"isInvitationModal\" (dismissed)=\"isInvitationModal = false;\"\n            #invitationModal>\n            <div class=\"header\">\n              {{viewedEvent.name}} Invitations\n              <button class=\"ui labeled icon button right floated\" (click)=\"print()\" *ngIf=\"!printing\">\n                <i class=\"print icon\"></i>\n                Print\n              </button>\n            </div>\n            <div class=\"content\">\n              <table class=\"ui large table\">\n                <thead>\n                  <th>Id</th>\n                  <th>Name</th>\n                  <th>Year</th>\n                  <th>Course</th>\n                </thead>\n                <tbody>\n                  <tr *ngFor=\"let item of invitations\">\n                    <td>{{item.id}}</td>\n                    <td>{{item.name}}</td>\n                    <td>{{item.year}}</td>\n                    <td>{{item.course}}</td>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n            <div class=\"actions\">\n              <button class=\"ui red button\" (click)=\"invitationModal.deny()\">Cancel</button>\n            </div>\n          </sui-modal>\n\n        </div>\n      </div>\n    </sui-sidebar-sibling>\n  </sui-sidebar-container>\n</div>\n\n\n\n\n<div *ngIf=\"printing\">\n  <div class=\"head\">\n    <div style=\"margin-bottom:10px;padding-right:20px;padding-left:20px;\">\n      <div id=\"logo_header\" class=\"ui\">\n        <img src=\"assets/images/gclogoprint.png\" class=\"ui mini left floated image\" alt=\"\">\n        <h5 style=\"text-align:right\">{{viewedEvent.date}}</h5>\n      </div>\n      <h4 class=\"center\" style=\"font-weight:bolder\">{{viewedEvent.name}}</h4>\n      <h4 class=\"center\" style=\"font-weight:bolder\">{{viewedEvent.location}}</h4>\n\n    </div>\n  </div>\n\n  <div class=\"body\" style=\"padding:15px;\">\n    <table class=\"ui compact center aligned table\" style=\"margin-top:10px;\">\n      <thead>\n        <tr>\n          <th>Student Id</th>\n          <th>Name</th>\n          <th>Year</th>\n          <th>Course</th>\n          <th>Remarks</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let student of invitations\">\n          <td>{{student.id}}</td>\n          <td>{{student.name}}</td>\n          <td>{{student.year}}</td>\n          <td>{{student.course}}</td>\n          <td>\n            <sui-checkbox>\n              Attended\n            </sui-checkbox>\n          </td>\n        </tr>\n\n      </tbody>\n    </table>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/admin-events/admin-events.component.ts":
/*!********************************************************!*\
  !*** ./src/app/admin-events/admin-events.component.ts ***!
  \********************************************************/
/*! exports provided: AdminEventsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminEventsComponent", function() { return AdminEventsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_admin_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/admin.service */ "./src/app/services/admin.service.ts");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AdminEventsComponent = /** @class */ (function () {
    function AdminEventsComponent(adminService, router) {
        this.adminService = adminService;
        this.router = router;
        this.err = false;
        this.page = 1;
        this.showAddEvent = false;
        this.showUpdateEvent = false;
        this.minDate = new Date(2019, 1, 1, 1, 1, 1, 1);
        this.maxDate = new Date(3000, 1, 1, 1, 1, 1, 1);
        this.isInvitationModal = false;
        this.printing = false;
        console.log(this.updateData);
        this.getEvents();
    }
    AdminEventsComponent.prototype.ngOnInit = function () {
    };
    AdminEventsComponent.prototype.getEvents = function () {
        var _this = this;
        this.adminService.getEvents().subscribe(function (successData) {
            _this.events = successData;
        }, function (error) { return console.error(error); });
    };
    AdminEventsComponent.prototype.addEvent = function (f) {
        var _this = this;
        if (f.valid) {
            //Format using date-fns
            f.value.date = date_fns__WEBPACK_IMPORTED_MODULE_2__["format"](f.value.date, 'MMMM DD YYYY');
            f.value.time_from = date_fns__WEBPACK_IMPORTED_MODULE_2__["format"](f.value.time_from, 'hh:mm A');
            f.value.time_to = date_fns__WEBPACK_IMPORTED_MODULE_2__["format"](f.value.time_to, 'hh:mm A');
            f.value.poster = this.selectedPoster;
            console.log(f.value);
            this.adminService.addEvent(f.value).subscribe(function (successData) {
                _this.showAddEvent = false;
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()({
                    title: "Event added",
                    type: "success"
                });
                _this.getEvents();
            }, function (err) { return console.error(err); });
        }
        else {
            this.err = true;
        }
        console.log(f.valid); // false
    };
    AdminEventsComponent.prototype.updateEvent = function (field, value) {
        var _this = this;
        this.adminService.updateEvent(field, value, this.updateData.id).subscribe(function (successData) {
            _this.getEvents();
            _this.showUpdateEvent = false;
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()({
                title: "Event updated..",
                type: "success"
            });
        }, function (error) { return console.log(error); });
    };
    AdminEventsComponent.prototype.updateBtn = function (poster_url, name, location, date, time_from, time_to, id) {
        var data = {
            poster_url: poster_url,
            name: name,
            location: location,
            date: date_fns__WEBPACK_IMPORTED_MODULE_2__["parse"](date),
            time_from: time_from,
            time_to: time_to,
            id: id
        };
        this.updateData = data;
        console.log(this.updateData);
        this.showUpdateEvent = true;
    };
    AdminEventsComponent.prototype.deleteEvent = function (id) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(function (result) {
            if (result.value) {
                _this.adminService.deleteEvent(id).subscribe(function (successData) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()('Deleted!', 'Your event has been deleted.', 'success');
                    console.log(successData);
                    _this.getEvents();
                }, function (err) { return console.error(err); });
            }
        });
    };
    AdminEventsComponent.prototype.onFileChanged = function (event) {
        this.selectedPoster = event.target.files[0];
    };
    AdminEventsComponent.prototype.onUpdateFileChanged = function (event) {
        this.selectedUpdatedPoster = event.target.files[0];
    };
    AdminEventsComponent.prototype.logout = function () {
        localStorage.clear();
        this.router.navigate(["/admin-auth"]);
    };
    AdminEventsComponent.prototype.trim = function (string) {
        return string.substring(0, 150);
    };
    AdminEventsComponent.prototype.viewInvitations = function (event) {
        var _this = this;
        this.viewedEvent = event;
        this.isInvitationModal = true;
        this.adminService.getInvitations(event.event_id).subscribe(function (invitations) {
            _this.invitations = invitations;
            console.log(_this.invitations);
        }, function (err) { return console.log(err); });
    };
    AdminEventsComponent.prototype.print = function () {
        var _this = this;
        this.isInvitationModal = false;
        setTimeout(function () {
            _this.printing = true;
        }, 1000);
        setTimeout(function () {
            window.print();
            setTimeout(function () {
                _this.printing = false;
            }, 500);
        }, 1500);
    };
    AdminEventsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-events',
            template: __webpack_require__(/*! ./admin-events.component.html */ "./src/app/admin-events/admin-events.component.html"),
            styles: [__webpack_require__(/*! ./admin-events.component.css */ "./src/app/admin-events/admin-events.component.css")]
        }),
        __metadata("design:paramtypes", [_services_admin_service__WEBPACK_IMPORTED_MODULE_1__["AdminService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], AdminEventsComponent);
    return AdminEventsComponent;
}());



/***/ }),

/***/ "./src/app/admin-graph-general/admin-graph-general.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/admin-graph-general/admin-graph-general.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluLWdyYXBoLWdlbmVyYWwvYWRtaW4tZ3JhcGgtZ2VuZXJhbC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/admin-graph-general/admin-graph-general.component.html":
/*!************************************************************************!*\
  !*** ./src/app/admin-graph-general/admin-graph-general.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui top attached demo menu\">\n  <a class=\"item\" (click)=\"sidebar.toggle()\">\n    <i class=\"sidebar icon\"></i>\n  </a>\n  <div class=\"right menu\">\n    <div class=\"item\">\n      <div class=\"ui blue button\" (click)=\"logout()\">Logout</div>\n    </div>\n  </div>\n</div>\n<sui-sidebar-container class=\"ui bottom attached segment\">\n  <sui-sidebar class=\"vertical\" #sidebar>\n    <a class=\"item \" routerLink=\"/admin-home\">\n      Home\n    </a>\n    <a class=\"item\" routerLink=\"/takers-attendance\">\n      Attendance\n    </a>\n    <a class=\"item\" routerLink=\"/admin-graph-specific\">\n      Specific Reports\n    </a>\n    <a class=\"item active\" routerLink=\"/admin-graph-general\">\n      General Reports\n    </a>\n    <a class=\"item\" routerLink=\"/admin-new-print\">\n      Print Section\n    </a>\n    <a class=\"item\" routerLink=\"/admin-new-archive\">\n      Archive Section\n    </a>\n    <a class=\"item\" routerLink=\"/admin-settings\">\n      Accounts Settings\n    </a>\n    <a class=\"item\" routerLink=\"/admin-events\">\n      Events\n    </a>\n    <a class=\"item\" routerLink=\"/admin-messages\">\n      Messages\n    </a>\n  </sui-sidebar>\n  <sui-sidebar-sibling [isDimmedWhenVisible]=\"true\">\n    <div class=\"\">\n\n      <h2 class=\"ui center aligned icon header\">\n        <i class=\"circular info icon\"></i>\n        General Report Section\n\n        <div class=\"sub header\">Generate/Analyze a report using student attribute(s)</div>\n      </h2>\n\n      <div class=\"ui info message container\">\n        <div class=\"header\">\n          Some of the action you can do in this section\n        </div>\n        <ul class=\"list\">\n          <li>Generate a visual report using student attribute(s)</li>\n          <li>Modify the attribute of the students</li>\n          <li>Filter quantity of the showing problem(s)</li>\n          <li>Change chart style</li>\n          <li>Export to PDF the generated visual report</li>\n        </ul>\n      </div>\n\n      <div class=\"ui grid\">\n        <div class=\"four wide column\">\n\n\n\n          <div class=\"ui card\">\n            <div class=\"content\">\n              <div class=\"ui header primary bolder left floated\">Criteria</div>\n              <button class=\"ui primary mini basic button left floated\"\n                (click)=\"selectAllCriteria();criteriaChange()\">Select\n                All</button>\n              <button class=\"ui primary mini basic button left floated\"\n                (click)=\"deselectAllCriteria();criteriaChange()\">Reset</button>\n            </div>\n            <div class=\"content\">\n              <div class=\"ui active dimmer\" *ngIf=\"loader\">\n                <div class=\"ui mini text loader\">Loading</div>\n              </div>\n              <sui-accordion [closeOthers]=\"false\">\n                <sui-accordion-panel [isOpen]=\"isPanelOpen\" *ngFor=\"let indivCriteria of criteria; let i = index\">\n                  <div title>\n                    <i class=\"dropdown icon\"></i>\n                    {{indivCriteria.fieldname}}\n                    <button class=\"ui primary mini basic button right floated\"\n                      (click)=\"uncheckSectCriteria(i);criteriaChange()\">Uncheck</button>\n                    <button class=\"ui primary mini basic button right floated\"\n                      (click)=\"selectSectCriteria(i);criteriaChange()\">Check\n                      All</button>\n\n                  </div>\n                  <div content>\n                    <div class=\"ui form\">\n                      <div class=\"grouped fields\">\n                        <div class=\"field\" *ngFor=\"let value of indivCriteria.values\">\n                          <sui-checkbox [(ngModel)]=\"value.isChecked\" (ngModelChange)=\"criteriaChange()\">{{value.label}}\n                          </sui-checkbox>\n                        </div>\n\n\n                      </div>\n                    </div>\n                  </div>\n                </sui-accordion-panel>\n              </sui-accordion>\n            </div>\n          </div>\n\n\n\n\n        </div>\n\n        <div class=\"twelve wide column\">\n\n          <div class=\"ui card\" style=\"width:100%\">\n            <div class=\"content\">\n              <div class=\"ui active dimmer\" *ngIf=\"loader\">\n                <div class=\"ui mini text loader\">Loading</div>\n              </div>\n              <div *ngIf=\"withResult\">\n                <div class=\"ui form\">\n                  <div class=\"inline fields\">\n                    <label for=\"fruit\">Select chart:</label>\n                    <div class=\"field\">\n                      <div class=\"ui radio checkbox\">\n                        <input type=\"radio\" name='options' [value]=\"'column2d'\" [checked]='chart === \"column2d\"'\n                          (change)=\"onSelectionChange('column2d')\">\n                        <label>Column2d</label>\n                      </div>\n                    </div>\n                    <div class=\"field\">\n                      <div class=\"ui radio checkbox\">\n                        <input type=\"radio\" name='options' [value]=\"'bar2d'\" [checked]='chart === \"bar2d\"'\n                          (change)=\"onSelectionChange('bar2d')\">\n                        <label>Bar2d</label>\n                      </div>\n                    </div>\n                    <div class=\"field\">\n                      <div class=\"ui radio checkbox\">\n                        <input type=\"radio\" name='options' [value]=\"'pie2d'\" [checked]='chart === \"pie2d\"'\n                          (change)=\"onSelectionChange('pie2d')\">\n                        <label>Pie2d</label>\n                      </div>\n                    </div>\n                  </div>\n\n                  <div class=\"inline fields\">\n                    <label for=\"options\">Filter Quantity</label>\n                    <sui-select placeholder=\"Choose\" class=\"selection\" [(ngModel)]=\"filterValue\"\n                      (ngModelChange)=\"filterQuantity(filterValue)\">\n                      <sui-select-option value=\"10\"></sui-select-option>\n                      <sui-select-option value=\"30\"></sui-select-option>\n                      <sui-select-option value=\"50\"></sui-select-option>\n                      <sui-select-option value=\"86\"></sui-select-option>\n                    </sui-select>\n                  </div>\n\n\n                </div>\n                <p class=\"center\" *ngIf=\"withResult\"><button class=\"ui button blue\" (click)=\"print($event)\">Export to\n                    PDF</button></p>\n\n              </div>\n              <br>\n              <fusioncharts *ngIf=\"withResult\" (initialized)=\"initialized($event)\" [width]=\"chartWidth\" height=\"700\"\n                type=\"column2d\" [dataSource]=\"dataSource\">\n              </fusioncharts>\n\n\n\n              <h1 *ngIf=\"!withResult\" class=\"center primary bolder\">No result</h1>\n            </div>\n          </div>\n\n\n\n\n        </div>\n      </div>\n\n    </div>\n  </sui-sidebar-sibling>\n</sui-sidebar-container>\n\n\n\n<!-- Categories Modal -->\n<sui-modal [isClosable]=\"false\" [mustScroll]=\"true\" (dismissed)=\"catModal = false\" #catModall *ngIf=\"catModal\">\n  <div class=\"header\">\n    {{catModalHeader}}\n    <button class=\"ui blue button\" style=\"float:right\" (click)=\"selectEventModal = true;\">Invite all to an\n      event.</button>\n  </div>\n  <div class=\"content\">\n    <table class=\"ui celled table\">\n      <thead>\n        <tr>\n          <th>Username</th>\n          <th>Name</th>\n          <th>Course</th>\n          <th>Year</th>\n          <th>Gender</th>\n        </tr>\n      </thead>\n\n      <tbody>\n        <tr *ngFor=\"let data of catModalData\">\n          <td>{{data.username}}</td>\n          <td>{{data.name}}</td>\n          <td>{{data.course}}</td>\n          <td>{{data.year}}</td>\n          <td>{{data.gender}}</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n  <div class=\"actions\">\n\n    <button class=\"ui red button\" (click)=\"catModall.deny()\">Close</button>\n  </div>\n</sui-modal>\n\n\n\n<sui-modal [isClosable]=\"false\" [mustScroll]=\"true\" (dismissed)=\"selectEventModal = false\" #selectModal\n  *ngIf=\"selectEventModal\">\n\n  <div class=\"content\">\n    <table class=\"ui celled table\">\n      <thead>\n        <tr>\n          <th colspan=\"2\">Poster with Event Name</th>\n          <th>Description</th>\n          <th>Time From</th>\n          <th>Time To</th>\n          <th>Actions</th>\n        </tr>\n      </thead>\n\n      <tbody>\n        <tr *ngFor=\"let event of events\">\n          <td colspan=\"2\">\n            <h4 class=\"ui image header\">\n              <img src=\"{{event.poster_url}}\" class=\"ui mini rounded image\">\n              <div class=\"content\">\n                {{event.name}}\n\n              </div>\n            </h4>\n          </td>\n\n          <td>{{trim(event.description)}}</td>\n          <td>{{event.time_from}}</td>\n          <td>{{event.time_to}}</td>\n          <td><button class=\"ui green button\" (click)=\"inviteAll(event)\">Select</button></td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n  <div class=\"actions\">\n    <button class=\"ui red button\" (click)=\"selectModal.deny()\">Close</button>\n  </div>\n</sui-modal>"

/***/ }),

/***/ "./src/app/admin-graph-general/admin-graph-general.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/admin-graph-general/admin-graph-general.component.ts ***!
  \**********************************************************************/
/*! exports provided: AdminGraphGeneralComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminGraphGeneralComponent", function() { return AdminGraphGeneralComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_criteria__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/criteria */ "./src/app/data/criteria.ts");
/* harmony import */ var _data_problems__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/problems */ "./src/app/data/problems.ts");
/* harmony import */ var _models_tables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/tables */ "./src/app/models/tables.ts");
/* harmony import */ var _models_tryLabel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/tryLabel */ "./src/app/models/tryLabel.ts");
/* harmony import */ var fusioncharts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! fusioncharts */ "./node_modules/fusioncharts/fusioncharts.js");
/* harmony import */ var fusioncharts__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(fusioncharts__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _services_admin_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/admin.service */ "./src/app/services/admin.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_chat_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/chat.service */ "./src/app/services/chat.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_9__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var AdminGraphGeneralComponent = /** @class */ (function () {
    function AdminGraphGeneralComponent(adminService, zone, router, chatService) {
        this.adminService = adminService;
        this.zone = zone;
        this.router = router;
        this.chatService = chatService;
        this.loader = false;
        this.filterValue = 0;
        this.isPanelOpen = false;
        this.printing = false;
        this.chartWidth = "100%";
        this.catModal = false;
        this.catModalData = Array.apply(null, Array());
        this.catModalHeader = "";
        this.selectEventModal = false;
        this.dataplotModal = false;
        this.dataPlotData = Array.apply(null, Array());
        this.withResult = false;
        this.chart = 'column2d';
        this.dataSource = {
            chart: {
                caption: "",
                subCaption: "",
                xAxisName: "Labels",
                yAxisName: "Values",
                numberSuffix: "",
                theme: "candy",
                "palettecolors": "5d62b5,29c3be,f2726f"
            },
            data: [],
        };
        this.sql = "";
    }
    AdminGraphGeneralComponent.prototype.ngOnInit = function () {
        this.getEvents();
        this.criteria = _data_criteria__WEBPACK_IMPORTED_MODULE_1__["criteria"];
        this.problems = _data_problems__WEBPACK_IMPORTED_MODULE_2__["problems"].problems;
        this.graphLbl = new _models_tryLabel__WEBPACK_IMPORTED_MODULE_4__["Label"]().label;
        // this.graphLbl[0].value = 23
        // console.log(this.graphLbl)
        this.withResult = true;
    };
    AdminGraphGeneralComponent.prototype.inviteAll = function (event) {
        var invitations = [];
        this.catModalData.forEach(function (element) {
            console.log(element);
            invitations.push([event.event_id, element.id]);
        });
        this.chatService.sendInvitation(this.catModalData, invitations);
        sweetalert2__WEBPACK_IMPORTED_MODULE_9___default()({
            title: 'Invitation Sent.',
            type: 'success',
            confirmButtonText: 'Okay'
        });
    };
    AdminGraphGeneralComponent.prototype.criteriaChange = function () {
        var _this = this;
        this.graphLbl = new _models_tryLabel__WEBPACK_IMPORTED_MODULE_4__["Label"]().label;
        this.dataSource.data = [];
        // this.graphLbl.forEach((element, index) => this.graphLbl[index].value = 0);
        var sqlTable = _models_tables__WEBPACK_IMPORTED_MODULE_3__["tables"];
        this.criteria_variables = Array.apply(null, Array());
        //Iterate thru all criteria checkboxes check boxes that are checked
        this.criteria.forEach(function (firstElement, firstIndex) {
            var lalagyan = Array.apply(null, Array());
            firstElement.values.forEach(function (element) {
                if (element.isChecked) {
                    lalagyan.push(element.label);
                }
            });
            if (lalagyan.length > 0) {
                _this.criteria_variables.push({ fieldname: firstElement.fieldname, value: lalagyan });
            }
        });
        //Iterate thru all criteria checkboxes check boxes that are checked
        // console.log(this.criteria_variables)
        //Create the conditions for sql
        this.sql = "";
        this.criteria_variables.forEach(function (firstElement, firstIndex) {
            _this.sql += "(";
            firstElement.value.forEach(function (secondElement, secondIndex) {
                if (_this.criteria_variables[firstIndex].value[secondIndex].length > 1) {
                    if (_this.criteria_variables[firstIndex].value.length - 1 != secondIndex) {
                        _this.sql += "users." + firstElement.fieldname + " = '" + secondElement + "' OR ";
                    }
                    else {
                        _this.sql += "users." + firstElement.fieldname + " = '" + secondElement + "'";
                    }
                }
                else {
                    _this.sql += "users." + firstElement.fieldname + " = '" + secondElement + "'";
                }
            });
            _this.sql += ")";
            // console.log(this.criteria_variables.length)
            if (_this.criteria_variables.length - 1 != firstIndex) {
                _this.sql += " AND ";
            }
        });
        //Create the conditions for sql
        //Send to services to do a http request to server
        var graphData = {
            sql: this.sql,
            sqlTable: sqlTable
        };
        // console.log(graphData)
        //Check if there is an criteria
        if (graphData.sql != "") {
            this.adminService.generalGraph(graphData).subscribe(function (successData) {
                //Loop thru all users check all of their problems
                console.log(graphData);
                successData.forEach(function (element, index) {
                    // console.log(element)
                    Object.keys(element).forEach(function (element, index) {
                        // console.log(element + "==" + this.graphLbl[index].fieldname)
                        if (element == _this.graphLbl[index].fieldname) {
                            console.log("Tama");
                        }
                        else {
                            console.log("Mali");
                        }
                    });
                    Object.values(element).forEach(function (secondElement, secondIndex) {
                        if (secondElement) {
                            _this.graphLbl[secondIndex].value++;
                        }
                    });
                });
                //Loop thru all users check all of their problems
                //Sort the array
                _this.graphLbl.sort(function (a, b) { return b.value - a.value; }); // For ascending sort
                var sortedData = _this.graphLbl.map(function (x) {
                    return x;
                });
                // console.log(this.graphLbl)
                for (var index = 0; index < 10; index++) {
                    _this.dataSource.data.push(_this.graphLbl[index]);
                }
                console.log(_this.dataSource.data);
            }, function (error) { return console.log(error); });
        }
        //Send to services to do a http request to server
    };
    //Filter the quantity of the result
    AdminGraphGeneralComponent.prototype.filterQuantity = function (value) {
        this.dataSource.data = [];
        for (var index = 0; index < value; index++) {
            this.dataSource.data.push(this.graphLbl[index]);
        }
    };
    AdminGraphGeneralComponent.prototype.selectSectCriteria = function (i) {
        var _this = this;
        this.criteria[i].values.forEach(function (element, index) {
            _this.criteria[i].values[index].isChecked = true;
        });
    };
    AdminGraphGeneralComponent.prototype.uncheckSectCriteria = function (i) {
        var _this = this;
        this.criteria[i].values.forEach(function (element, index) {
            _this.criteria[i].values[index].isChecked = false;
        });
    };
    AdminGraphGeneralComponent.prototype.selectAllCriteria = function () {
        var _this = this;
        this.criteria.forEach(function (element, index) {
            element.values.forEach(function (element, secondIndex) {
                _this.criteria[index].values[secondIndex].isChecked = true;
            });
        });
        this.isPanelOpen = true;
    };
    AdminGraphGeneralComponent.prototype.deselectAllCriteria = function () {
        var _this = this;
        this.criteria.forEach(function (element, index) {
            element.values.forEach(function (element, secondIndex) {
                _this.criteria[index].values[secondIndex].isChecked = false;
            });
        });
    };
    AdminGraphGeneralComponent.prototype.initialized = function ($event) {
        this.chartObj = $event.chart; // saving chart instance
        // console.log(this.chartObj)
        this.handler = this.dataplotClickHandler.bind(this);
        this.initMessage = '';
        this.message = this.clickPlotMsg;
        this.attached = true;
        this.chartObj.addEventListener('dataplotClick', this.handler);
    };
    AdminGraphGeneralComponent.prototype.onSelectionChange = function (chart) {
        this.chart = chart;
        this.chartObj.chartType(chart); // Changing chart type using chart instance
    };
    AdminGraphGeneralComponent.prototype.dataplotClickHandler = function (eventObj, dataObj) {
        var _this = this;
        this.zone.run(function () {
            _this.dataplotModal = true;
            _this.category_header = dataObj.categoryLabel;
            _this.dataPlotData = _this.dataSource.data[dataObj.dataIndex].fieldname;
            // console.log(this.dataPlotData)
            // console.log(dataObj)
            // console.log(this.dataSource)
            var data = {
                problem: _this.dataPlotData + " = 1",
                userCriteria: _this.sql
            };
            // Send a request to service
            _this.adminService.getUsersProblem(data).subscribe(function (successData) {
                // console.log(successData)
                //Open the modal 
                _this.catModal = true;
                _this.catModalData = successData;
                _this.catModalHeader = dataObj.categoryLabel;
                // console.log(this.catModalData)
            }, function (error) { return console.log(error); });
        });
    };
    AdminGraphGeneralComponent.prototype.print = function (e) {
        var _this = this;
        this.loader = true;
        this.chartWidth = "800";
        setTimeout(function (_) {
            fusioncharts__WEBPACK_IMPORTED_MODULE_5__["batchExport"]({
                exportFormat: 'pdf'
            });
            _this.loader = false;
        }, 1000);
        setTimeout(function (_) { return _this.chartWidth = "100%"; }, 1000);
    };
    AdminGraphGeneralComponent.prototype.logout = function () {
        localStorage.clear();
        this.router.navigate(["/admin-auth"]);
    };
    AdminGraphGeneralComponent.prototype.getEvents = function () {
        var _this = this;
        this.adminService.getEvents().subscribe(function (events) {
            _this.events = events;
            console.log(_this.events);
        }, function (err) { return console.log(err); });
    };
    AdminGraphGeneralComponent.prototype.trim = function (string) {
        return string.substring(0, 200);
    };
    AdminGraphGeneralComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-graph-general',
            template: __webpack_require__(/*! ./admin-graph-general.component.html */ "./src/app/admin-graph-general/admin-graph-general.component.html"),
            styles: [__webpack_require__(/*! ./admin-graph-general.component.css */ "./src/app/admin-graph-general/admin-graph-general.component.css")]
        }),
        __metadata("design:paramtypes", [_services_admin_service__WEBPACK_IMPORTED_MODULE_6__["AdminService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _services_chat_service__WEBPACK_IMPORTED_MODULE_8__["ChatService"]])
    ], AdminGraphGeneralComponent);
    return AdminGraphGeneralComponent;
}());



/***/ }),

/***/ "./src/app/admin-graph/admin-graph.component.css":
/*!*******************************************************!*\
  !*** ./src/app/admin-graph/admin-graph.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluLWdyYXBoL2FkbWluLWdyYXBoLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/admin-graph/admin-graph.component.html":
/*!********************************************************!*\
  !*** ./src/app/admin-graph/admin-graph.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui top attached demo menu\">\n  <a class=\"item\" (click)=\"saydbar.toggle()\">\n    <i class=\"sidebar icon\"></i>\n  </a>\n  <div class=\"right menu\">\n    <div class=\"item\">\n      <div class=\"ui blue button\" (click)=\"logout()\">Logout</div>\n    </div>\n  </div>\n</div>\n<sui-sidebar-container class=\"ui bottom attached segment\">\n  <sui-sidebar class=\"vertical\" #saydbar>\n    <a class=\"item \" routerLink=\"/admin-home\">\n      Home\n    </a>\n    <a class=\"item\" routerLink=\"/takers-attendance\">\n      Attendance\n    </a>\n    <a class=\"item active\" routerLink=\"/admin-graph-specific\">\n      Specific Reports\n    </a>\n    <a class=\"item\" routerLink=\"/admin-graph-general\">\n      General Reports\n    </a>\n    <a class=\"item\" routerLink=\"/admin-new-print\">\n      Print Section\n    </a>\n    <a class=\"item\" routerLink=\"/admin-new-archive\">\n      Archive Section\n    </a>\n    <a class=\"item\" routerLink=\"/admin-settings\">\n      Accounts Settings\n    </a>\n    <a class=\"item\" routerLink=\"/admin-events\">\n      Events\n    </a>\n    <a class=\"item\" routerLink=\"/admin-messages\">\n      Messages\n    </a>\n  </sui-sidebar>\n  <sui-sidebar-sibling [isDimmedWhenVisible]=\"true\">\n    <div class=\"ui basic segment\" style=\"padding:35px;\" *ngIf=\"!printing\">\n\n      <h2 class=\"ui icon header center aligned\">\n        <i class=\"circular info icon\"></i>\n        <div class=\"content\">\n          Specific Report Section\n          <div class=\"sub header\">Generate/Analyze a report for a specific problem(s)</div>\n        </div>\n\n\n      </h2>\n      <div class=\"ui info message container\">\n        <div class=\"header\">\n          Some of the action you can do in this section\n        </div>\n        <ul class=\"list\">\n          <li>Generate a visual report about specific problem(s)</li>\n          <li>Modify the criteria of the students</li>\n\n          <li>Change chart style</li>\n          <li>Export to PDF the generated visual report</li>\n        </ul>\n      </div>\n\n\n\n      <div class=\"ui grid\">\n\n        <div class=\"three wide column\">\n          <div class=\"ui card\">\n            <div class=\"content\">\n              <div class=\"ui header primary bolder\">Criteria</div>\n            </div>\n            <div class=\"content\">\n              <div class=\"ui active dimmer\" *ngIf=\"loader\">\n                <div class=\"ui mini text loader\">Loading</div>\n              </div>\n              <sui-accordion [closeOthers]=\"false\">\n                <sui-accordion-panel [isOpen]=\"false\" *ngFor=\"let indivCriteria of criteria\">\n                  <div title style=\"text-transform:capitalize;\">\n                    <i class=\"dropdown icon\"></i>\n                    {{indivCriteria.fieldname}}\n                  </div>\n                  <div content>\n                    <div class=\"ui form\">\n                      <div class=\"grouped fields\">\n                        <div class=\"field\" *ngFor=\"let value of indivCriteria.values\">\n                          <sui-checkbox [(ngModel)]=\"value.isChecked\" (ngModelChange)=\"try()\">{{value.label}}\n                          </sui-checkbox>\n                        </div>\n\n\n                      </div>\n                    </div>\n                  </div>\n                </sui-accordion-panel>\n              </sui-accordion>\n            </div>\n          </div>\n\n\n\n        </div>\n\n        <div class=\"ten wide column\">\n          <div class=\"ui card\" style=\"width:100%\">\n            <div class=\"content\">\n              <div class=\"ui active dimmer\" *ngIf=\"loader\">\n                <div class=\"ui mini text loader\">Loading</div>\n              </div>\n              <div *ngIf=\"withResult\">\n                <div class=\"ui form\">\n                  <div class=\"inline fields\">\n                    <label for=\"fruit\">Select chart:</label>\n                    <div class=\"field\">\n                      <div class=\"ui radio checkbox\">\n                        <input type=\"radio\" name='options' [value]=\"'column2d'\" [checked]='chart === \"column2d\"'\n                          (change)=\"onSelectionChange('column2d')\">\n                        <label>Column2d</label>\n                      </div>\n                    </div>\n                    <div class=\"field\">\n                      <div class=\"ui radio checkbox\">\n                        <input type=\"radio\" name='options' [value]=\"'bar2d'\" [checked]='chart === \"bar2d\"'\n                          (change)=\"onSelectionChange('bar2d')\">\n                        <label>Bar2d</label>\n                      </div>\n                    </div>\n                    <div class=\"field\">\n                      <div class=\"ui radio checkbox\">\n                        <input type=\"radio\" name='options' [value]=\"'pie2d'\" [checked]='chart === \"pie2d\"'\n                          (change)=\"onSelectionChange('pie2d')\">\n                        <label>Pie2d</label>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <p class=\"center\" *ngIf=\"withResult\"><button class=\"ui button blue\" (click)=\"print($event)\">Export to\n                    PDF</button></p>\n\n              </div>\n              <br>\n              <fusioncharts *ngIf=\"withResult\" (initialized)=\"initialized($event)\" [width]=\"chartWidth\" height=\"700\"\n                type=\"column2d\" [dataSource]=\"dataSource\">\n              </fusioncharts>\n\n\n\n              <h1 *ngIf=\"!withResult\" class=\"center primary bolder\">No result</h1>\n            </div>\n          </div>\n\n\n\n        </div>\n\n        <div class=\"three wide column\">\n          <div class=\"ui card\">\n            <div class=\"content\">\n              <div class=\"ui header bolder primary\">Problems</div>\n            </div>\n            <div class=\"content\">\n              <div class=\"ui active dimmer\" *ngIf=\"loader\">\n                <div class=\"ui mini text loader\">Loading</div>\n              </div>\n              <sui-accordion [closeOthers]=\"false\">\n                <sui-accordion-panel [isOpen]=\"false\" *ngFor=\"let indivProblems of problems\">\n                  <div title>\n                    <i class=\"dropdown icon\"></i>\n                    {{indivProblems.name}}\n                  </div>\n                  <div content>\n                    <div class=\"ui form\">\n                      <div class=\"grouped fields\">\n                        <div class=\"field\" *ngFor=\"let problem of indivProblems.questions\">\n                          <sui-checkbox [(ngModel)]=\"problem.value\" (ngModelChange)=\"try()\">{{problem.label}}\n                          </sui-checkbox>\n                        </div>\n\n\n                      </div>\n                    </div>\n                  </div>\n                </sui-accordion-panel>\n              </sui-accordion>\n            </div>\n          </div>\n\n        </div>\n      </div>\n\n    </div>\n  </sui-sidebar-sibling>\n</sui-sidebar-container>\n\n\n<sui-modal [isFullScreen]=\"true\" *ngIf=\"dataplotModal\" [isClosable]=\"false\" [mustScroll]=\"true\"\n  (dismissed)=\"dataplotModal = false\" #criWithProb>\n\n  <div class=\"header\">\n    {{category_header}}\n    <button class=\"ui labeled icon button right floated\" (click)=\"maPrint()\" *ngIf=\"!printing\">\n      <i class=\"print icon\"></i>\n      Print\n    </button>\n    <button class=\"ui blue button right floated\" (click)=\"isEventModal = true;\">\n      Invite all to an event\n    </button>\n  </div>\n\n  <div class=\"content\">\n    <table class=\"ui large table\">\n      <thead>\n        <th>Id</th>\n        <th>Name</th>\n        <th>Year</th>\n        <th>Course</th>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let item of dataPlotData\">\n          <td>{{item.id}}</td>\n          <td>{{item.name}}</td>\n          <td>{{item.year}}</td>\n          <td>{{item.course}}</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n\n  <div class=\"actions\" *ngIf=\"!printing\">\n    <button class=\"ui red button\" (click)=\"criWithProb.deny()\">Close</button>\n  </div>\n\n</sui-modal>\n\n<sui-modal [isClosable]=\"false\" [mustScroll]=\"true\" (dismissed)=\"isEventModal = false\" #selectModal\n  *ngIf=\"isEventModal\">\n\n  <div class=\"content\">\n    <table class=\"ui celled table\">\n      <thead>\n        <tr>\n          <th colspan=\"2\">Poster with Event Name</th>\n          <th>Description</th>\n          <th>Time From</th>\n          <th>Time To</th>\n          <th>Actions</th>\n        </tr>\n      </thead>\n\n      <tbody>\n        <tr *ngFor=\"let event of events\">\n          <td colspan=\"2\">\n            <h4 class=\"ui image header\">\n              <img src=\"{{event.poster_url}}\" class=\"ui mini rounded image\">\n              <div class=\"content\">\n                {{event.name}}\n\n              </div>\n            </h4>\n          </td>\n\n          <td>{{trim(event.description)}}</td>\n          <td>{{event.time_from}}</td>\n          <td>{{event.time_to}}</td>\n          <td><button class=\"ui green button\" (click)=\"inviteAll(event)\">Select</button></td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n  <div class=\"actions\">\n    <button class=\"ui red button\" (click)=\"selectModal.deny()\">Close</button>\n  </div>\n</sui-modal>"

/***/ }),

/***/ "./src/app/admin-graph/admin-graph.component.ts":
/*!******************************************************!*\
  !*** ./src/app/admin-graph/admin-graph.component.ts ***!
  \******************************************************/
/*! exports provided: AdminGraphComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminGraphComponent", function() { return AdminGraphComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_criteria__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/criteria */ "./src/app/data/criteria.ts");
/* harmony import */ var _data_problems__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/problems */ "./src/app/data/problems.ts");
/* harmony import */ var _services_admin_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/admin.service */ "./src/app/services/admin.service.ts");
/* harmony import */ var fusioncharts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! fusioncharts */ "./node_modules/fusioncharts/fusioncharts.js");
/* harmony import */ var fusioncharts__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(fusioncharts__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_chat_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/chat.service */ "./src/app/services/chat.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_7__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AdminGraphComponent = /** @class */ (function () {
    function AdminGraphComponent(adminService, zone, router, chatService) {
        this.adminService = adminService;
        this.zone = zone;
        this.router = router;
        this.chatService = chatService;
        this.printing = false;
        this.isEventModal = false;
        this.chartWidth = "100%";
        this.dataplotModal = false;
        this.dataPlotData = Array.apply(null, Array());
        this.withResult = false;
        this.chart = 'column2d';
        this.dataSource = {
            chart: {
                caption: "",
                subCaption: "",
                xAxisName: "Labels",
                yAxisName: "Values",
                numberSuffix: "",
                theme: "candy",
                "palettecolors": "5d62b5,29c3be,f2726f"
            },
            data: [],
        };
        this.loader = false;
    }
    AdminGraphComponent.prototype.ngOnInit = function () {
        this.criteria = _data_criteria__WEBPACK_IMPORTED_MODULE_1__["criteria"];
        this.problems = _data_problems__WEBPACK_IMPORTED_MODULE_2__["problems"].problems;
        this.getEvents();
    };
    AdminGraphComponent.prototype.getEvents = function () {
        var _this = this;
        this.adminService.getEvents().subscribe(function (events) {
            _this.events = events;
            console.log(_this.events);
        }, function (err) { return console.log(err); });
    };
    AdminGraphComponent.prototype.inviteAll = function (event) {
        var invitations = [];
        this.dataPlotData.forEach(function (element) {
            console.log(element);
            invitations.push([event.event_id, element.id]);
        });
        this.chatService.sendInvitation(this.dataPlotData, invitations);
        sweetalert2__WEBPACK_IMPORTED_MODULE_7___default()({
            title: 'Invitation Sent.',
            type: 'success',
            confirmButtonText: 'Okay'
        });
    };
    AdminGraphComponent.prototype.trim = function (string) {
        return string.substring(0, 200);
    };
    AdminGraphComponent.prototype.getCaptions = function () {
        var _this = this;
        this.caption = Array.apply(null, Array());
        this.subCaption = Array.apply(null, Array());
        this.criteria.forEach(function (first, firstIndex) {
            var counter = 0;
            var gotValue = false;
            first.values.forEach(function (second, secondIndex) {
                if (second.isChecked) {
                    gotValue = true;
                    if (counter == 0) {
                        _this.caption.push(first.fieldname + ": " + second.label);
                        counter++;
                    }
                    else {
                        _this.caption.push(second.label);
                    }
                }
            });
            if (gotValue) {
                _this.caption.push("<br>");
            }
        });
        // console.log(this.criteria)
        this.problems.forEach(function (first, firstIndex) {
            first.questions.forEach(function (second, secondIndex) {
                if (second.value) {
                    _this.subCaption.push(" " + second.label);
                }
            });
        });
        if (this.caption.length != 0) {
            var caption = this.replaceAll(this.caption.toString(), ",", " ");
            // console.log(caption)
            this.dataSource.chart["caption"] = "All students that have the ff criteria: <br>" + caption;
            this.dataSource.chart["subCaption"] = "With problems of the ff: <br>" + this.subCaption.toString();
        }
        else {
            this.dataSource.chart["caption"] = "All students that have the ff problem(s)";
            this.dataSource.chart["subCaption"] = this.subCaption.toString();
        }
    };
    AdminGraphComponent.prototype.replaceAll = function (str, find, replace) {
        return str.replace(new RegExp(find, 'g'), replace);
    };
    AdminGraphComponent.prototype.try = function () {
        var _this = this;
        this.dataSource.data = Array.apply(null, Array());
        //Get all checked criteria variables
        this.criteria_variables = Array.apply(null, Array());
        this.criteria.forEach(function (first, index) {
            var lalagyan = Array.apply(null, Array());
            first.values.forEach(function (element) {
                if (element.isChecked) {
                    lalagyan.push(element.label);
                }
            });
            if (lalagyan.length > 0) {
                _this.criteria_variables.push({ fieldname: first.fieldname, value: lalagyan });
            }
        });
        this.problem_variables = Array.apply(null, Array());
        //Get all checked problem variables
        this.problems.forEach(function (element, index) {
            element.questions.forEach(function (element) {
                //If question is true push it to problem variables array
                if (element.value) {
                    _this.problem_variables.push(element.fieldname);
                }
            });
        });
        // console.log(this.criteria_variables)
        // console.log(this.problem_variables)
        //Place it to formated variable before sending to service for fetching
        var data = {
            criteria: this.criteria_variables,
            value: this.problem_variables
        };
        //check if value is empty
        if (this.problem_variables.length > 0) {
            this.loader = true;
            this.adminService.graph(data).subscribe(function (successData) {
                setTimeout(function () { return _this.loader = false; }, 1200);
                // console.log(successData)
                if (successData.conditionMet.value == 0 && successData.notCondition.value == 0) {
                    _this.withResult = false;
                }
                else {
                    var holder = Object.values(successData);
                    holder.forEach(function (element) {
                        _this.dataSource.data.push(element);
                    });
                    _this.withResult = true;
                }
            }, function (error) { return console.log(error); });
        }
        this.getCaptions();
    };
    AdminGraphComponent.prototype.print = function (e) {
        var _this = this;
        this.loader = true;
        this.chartWidth = "550";
        setTimeout(function (_) {
            fusioncharts__WEBPACK_IMPORTED_MODULE_4__["batchExport"]({
                exportFormat: 'pdf'
            });
            _this.loader = false;
        }, 1000);
        setTimeout(function (_) { return _this.chartWidth = "100%"; }, 1000);
    };
    AdminGraphComponent.prototype.initialized = function ($event) {
        this.chartObj = $event.chart; // saving chart instance
        // console.log(this.chartObj)
        this.handler = this.dataplotClickHandler.bind(this);
        this.initMessage = '';
        this.message = this.clickPlotMsg;
        this.attached = true;
        this.chartObj.addEventListener('dataplotClick', this.handler);
    };
    AdminGraphComponent.prototype.onSelectionChange = function (chart) {
        this.chart = chart;
        this.chartObj.chartType(chart); // Changing chart type using chart instance
    };
    AdminGraphComponent.prototype.dataplotClickHandler = function (eventObj, dataObj) {
        var _this = this;
        this.zone.run(function () {
            _this.dataplotModal = true;
            _this.category_header = dataObj.categoryLabel;
            _this.dataPlotData = _this.dataSource.data[dataObj.dataIndex].data;
            // console.log(this.dataPlotData)
            // console.log(dataObj)
            // console.log(this.dataSource)
        });
    };
    AdminGraphComponent.prototype.maPrint = function () {
        var _this = this;
        this.printing = true;
        setTimeout(function (_) { return window.print(); }, 1000);
        setTimeout(function (_) { return _this.printing = false; }, 1500);
    };
    AdminGraphComponent.prototype.logout = function () {
        localStorage.clear();
        this.router.navigate(["/admin-auth"]);
    };
    AdminGraphComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-graph',
            template: __webpack_require__(/*! ./admin-graph.component.html */ "./src/app/admin-graph/admin-graph.component.html"),
            styles: [__webpack_require__(/*! ./admin-graph.component.css */ "./src/app/admin-graph/admin-graph.component.css")]
        }),
        __metadata("design:paramtypes", [_services_admin_service__WEBPACK_IMPORTED_MODULE_3__["AdminService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _services_chat_service__WEBPACK_IMPORTED_MODULE_6__["ChatService"]])
    ], AdminGraphComponent);
    return AdminGraphComponent;
}());



/***/ }),

/***/ "./src/app/admin-home/admin-home.component.css":
/*!*****************************************************!*\
  !*** ./src/app/admin-home/admin-home.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mainContent{\r\n    padding:35px;\r\n}\r\n.myTextbox{\r\n    float:right;\r\n    margin-bottom: 8px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4taG9tZS9hZG1pbi1ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0NBQ2hCO0FBQ0Q7SUFDSSxZQUFZO0lBQ1osbUJBQW1CO0NBQ3RCIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4taG9tZS9hZG1pbi1ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbkNvbnRlbnR7XHJcbiAgICBwYWRkaW5nOjM1cHg7XHJcbn1cclxuLm15VGV4dGJveHtcclxuICAgIGZsb2F0OnJpZ2h0O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/admin-home/admin-home.component.html":
/*!******************************************************!*\
  !*** ./src/app/admin-home/admin-home.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui top attached demo menu\">\n  <a class=\"item\" (click)=\"sidebar.toggle()\">\n    <i class=\"sidebar icon\"></i>\n  </a>\n  <div class=\"right menu\">\n    <div class=\"item\">\n      <div class=\"ui blue button\" (click)=\"logout()\">Logout</div>\n    </div>\n  </div>\n</div>\n\n<sui-sidebar-container class=\"ui bottom attached segment\">\n  <sui-sidebar class=\"vertical\" #sidebar style=\"height:100%\">\n    <a class=\"item active\" routerLink=\"/admin-home\">\n      Home\n    </a>\n    <a class=\"item\" routerLink=\"/takers-attendance\">\n      Attendance\n    </a>\n    <a class=\"item\" routerLink=\"/admin-graph-specific\">\n      Specific Reports\n    </a>\n    <a class=\"item\" routerLink=\"/admin-graph-general\">\n      General Reports\n    </a>\n    <a class=\"item\" routerLink=\"/admin-new-print\">\n      Print Section\n    </a>\n    <a class=\"item\" routerLink=\"/admin-new-archive\">\n      Archive Section\n    </a>\n    <a class=\"item\" routerLink=\"/admin-settings\">\n      Accounts Settings\n    </a>\n    <a class=\"item\" routerLink=\"/admin-events\">\n      Events\n    </a>\n    <a class=\"item\" routerLink=\"/admin-messages\">\n      Messages\n    </a>\n  </sui-sidebar>\n  <sui-sidebar-sibling [isDimmedWhenVisible]=\"true\">\n\n    <div class=\"ui basic segment\">\n\n\n      <div class=\"ui grid\" class=\"mainContent\">\n        <h2 class=\"ui center aligned icon header\">\n          <i class=\"circular home icon\"></i>\n          Home Section\n\n          <div class=\"sub header\">Manage/View students information</div>\n        </h2>\n\n        <div class=\"ui info message container\">\n          <div class=\"header\">\n            Some of the action you can do in this section\n          </div>\n          <ul class=\"list\">\n            <li>Use username(s) only as search value when searching for a certain student</li>\n            <li>Search using the search bar on the upper right corner of the table</li>\n            <li>View all of the information about every student e.g(basic info, problems and etc)</li>\n          </ul>\n        </div>\n\n        <div class=\"ui negative message container\">\n          <div class=\"header\">\n            Note:\n          </div>\n          <p>You can delete a student account but please proceed with caution\n          </p>\n        </div>\n\n\n\n\n\n        <div class=\"ui input myTextbox\" style=\"float:right\">\n          <input type=\"text\" placeholder=\"Search...\" (input)=\"onSearchChange($event.target.value)\">\n        </div>\n\n        <table class=\"ui celled table center aligned selectable \">\n          <thead>\n            <tr>\n              <th>Id</th>\n              <th>Username</th>\n              <th>Name</th>\n              <th>Information Buttons</th>\n              <th style=\"background-color:#db2828;color:white\">Action Buttons (Danger Zone)</th>\n              <th>Mobile App Access</th>\n\n            </tr>\n          </thead>\n          <tbody>\n\n            <tr *ngFor=\"let myPage of pages | paginate: { itemsPerPage: 10, currentPage: page } ; let i = index\">\n              <td>\n                {{myPage.id}}\n              </td>\n              <td>\n                {{myPage.username}}\n              </td>\n              <td>\n                {{myPage.name}}\n              </td>\n\n              <td>\n                <div class=\"ui buttons\">\n                  <button class=\"ui red basic button\" (click)=\"showInfoModal = true; getInfo(myPage.id)\">Basic\n                    Info</button>\n                  <button class=\"ui blue basic button\"\n                    (click)=\"showProblemModal = true; getProblems(myPage.id)\">Problems</button>\n                  <button class=\"ui green basic button\" (click)=\"showMoreInfoModal = true; getMoreInfo(myPage.id)\">More\n                    Info</button>\n                  <button class=\"ui violet basic button\"\n                    (click)=\"showEformModal = true; getEform(myPage.id)\">Eform</button>\n                  <button class=\"ui black basic button\" (click)=\"showSDSModal = true; getSDS(myPage.id)\">SDS\n                    Result</button>\n                </div>\n              </td>\n\n              <td>\n                <button class=\"negative ui button\" (click)=\"delete(myPage.id)\">Delete</button>\n              </td>\n\n              <td>\n                <sui-checkbox [(ngModel)]=\"myPage.isGrantedAccess\"\n                  (ngModelChange)=\"changeUserPermission(myPage.id,myPage.isGrantedAccess);\">\n                </sui-checkbox>\n              </td>\n\n            </tr>\n          </tbody>\n          <tfoot>\n            <tr>\n              <th colspan=\"6\">\n                <div class=\"ui right floated pagination menu\">\n                  <a></a>\n                  <pagination-controls (pageChange)=\"page = $event\"></pagination-controls>\n                </div>\n              </th>\n            </tr>\n          </tfoot>\n        </table>\n\n\n\n\n        <!-- Info Modal -->\n        <sui-modal *ngIf=\"showInfoModal\" [mustScroll]=\"true\" [isFullScreen]=\"true\" [isClosable]=\"true\"\n          (dismissed)=\"showInfoModal = false\" #infoModal>\n          <div class=\"content\">\n            <h2 class=\"center aligned\" *ngIf=\"noInfo\">No info about this person</h2>\n            <div class=\"ui two column grid\" *ngIf=\"!noInfo\">\n              <div class=\"column\" *ngFor=\"let info of userInfo\">\n                <div class=\"ui raised segment\" style=\"min-height:130px\">\n                  <a [ngStyle]=\"{'background-color': true ? info.color:'', 'color': true ? 'white': ''}\"\n                    class=\"ui ribbon label large\">{{info.label}}</a>\n                  <div class=\"ui divided items\">\n                    <div class=\"item\">\n                      <div class=\"content\">\n\n                        <div class=\"description\">\n                          <p class=\"primary bolder\" style=\"font-size:1.5rem\">{{info.value}}</p>\n                        </div>\n\n\n                      </div>\n                    </div>\n                  </div>\n\n                  <p></p>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"actions\">\n            <button class=\"ui red button\" (click)=\"infoModal.deny()\">Close</button>\n          </div>\n        </sui-modal>\n        <!-- Info Modal -->\n\n\n        <!-- More Info Modal -->\n        <sui-modal *ngIf=\"showMoreInfoModal\" [mustScroll]=\"true\" [isClosable]=\"true\"\n          (dismissed)=\"showMoreInfoModal = false;\" #moreInfoModal>\n          <div class=\"content\">\n            <h2 class=\"center aligned\" *ngIf=\"noInfo\">No info about this person</h2>\n            <div class=\"ui\" *ngIf=\"!noInfo\">\n              <div class=\"ui raised segment\" style=\"min-height:130px\" *ngFor=\"let info of moreInfo\">\n                <a [ngStyle]=\"{'background-color': true ? info.color:'', 'color': true ? 'white': ''}\"\n                  class=\"ui ribbon label large\">{{info.label}}</a>\n                <div class=\"ui divided items\">\n                  <div class=\"item\">\n                    <div class=\"content\">\n\n                      <div class=\"description\">\n                        <p class=\"primary bolder\" style=\"font-size:1.5rem\">{{info.value}}</p>\n                      </div>\n\n\n                    </div>\n                  </div>\n                </div>\n\n                <p></p>\n              </div>\n            </div>\n          </div>\n          <div class=\"actions\">\n            <button class=\"ui red button\" (click)=\"moreInfoModal.deny()\">Close</button>\n          </div>\n        </sui-modal>\n        <!-- More Info Modal -->\n\n        <!-- Problems Modal -->\n        <sui-modal *ngIf=\"showProblemModal\" [mustScroll]=\"true\" [isClosable]=\"true\"\n          (dismissed)=\"showProblemModal = false;\" #problemModal>\n          <div class=\"content\">\n            <h2 class=\"center aligned\" *ngIf=\"noInfo\">No info about this person</h2>\n            <div *ngIf=\"!noInfo\">\n              <div class=\"ui segment\" *ngFor=\"let proInfo of userProblem\">\n                <a [ngStyle]=\"{'background-color': true ? proInfo.color:'', 'color': true ? 'white': ''}\"\n                  class=\"ui ribbon label large\">{{proInfo.name}}</a>\n                <div *ngFor=\"let indivInfo of proInfo.questions\">\n                  <div class=\"ui divided items\">\n                    <div class=\"item\">\n                      <div class=\"content\">\n\n                        <div class=\"description\">\n                          <p>{{indivInfo.label}}</p>\n                        </div>\n\n\n\n                        <hr>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n\n              </div>\n            </div>\n          </div>\n          <div class=\"actions\">\n            <button class=\"ui red button\" (click)=\"problemModal.deny()\">Close</button>\n          </div>\n        </sui-modal>\n        <!-- Problems Modal -->\n\n        <!-- Eform Modal -->\n        <sui-modal *ngIf=\"showEformModal\" [mustScroll]=\"true\" [isClosable]=\"true\" (dismissed)=\"showEformModal = false;\"\n          #eformModal>\n          <div class=\"content\">\n            <h2 class=\"center aligned\" *ngIf=\"noInfo\">No Enrollment Form Photo</h2>\n            <div class=\"\" *ngIf=\"!noInfo\">\n              <img class=\"ui fluid image\" src=\"{{eformURL}}\">\n            </div>\n          </div>\n          <div class=\"actions\">\n            <button class=\"ui red button\" (click)=\"eformModal.deny()\">Close</button>\n          </div>\n        </sui-modal>\n        <!-- Eform Modal -->\n\n        <!-- SDS Modal -->\n        <sui-modal *ngIf=\"showSDSModal\" [mustScroll]=\"true\" [isClosable]=\"true\"\n          (dismissed)=\"showSDSModal = false; codes = []\" #sdsModal>\n          <div class=\"content\">\n\n            <h2 class=\"center aligned\" *ngIf=\"noInfo\">No info about this person</h2>\n            <div class=\"ui\" *ngIf=\"!noInfo\">\n              <div class=\"ui segment\" *ngFor=\"let code of codes\">\n                <a class=\"ui red right ribbon label large\">{{code.name}}</a>\n                <div *ngFor=\"let indivCode of code.result\">\n                  <div class=\"ui divided items\">\n                    <div class=\"item\">\n                      <div class=\"content\">\n                        <a class=\"header\">{{indivCode.occupation}}</a>\n                        <div class=\"description\">\n                          <p>{{indivCode.description}}</p>\n                        </div>\n\n                        <div class=\"extra\">\n                          <a href=\"{{indivCode.link}}\" class=\"ui right floated blue button\">\n                            See more details here\n                            <i class=\"right chevron icon\"></i>\n                          </a>\n                        </div>\n\n                        <hr>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n\n              </div>\n            </div>\n\n          </div>\n          <div class=\"actions\">\n            <button class=\"ui red button\" (click)=\"sdsModal.deny()\">Close</button>\n          </div>\n        </sui-modal>\n        <!-- SDS Modal -->\n\n      </div>\n    </div>\n  </sui-sidebar-sibling>\n</sui-sidebar-container>\n\n\n\n\n<!-- Alert modal -->\n<sui-modal [isClosable]=\"false\" *ngIf=\"alertModal\" class=\"center aligned\" #alertModal123>\n  <div class=\"header\">Warning</div>\n  <div class=\"content\">\n    <h2 class=\"primary bolder \">Are you sure you want to delete?</h2>\n  </div>\n  <div class=\"actions\">\n    <button class=\"ui red button\" (click)=\"alertModal123.deny();deleteConfirm = false\">Cancel</button>\n    <button class=\"ui green button\" (click)=\"alertModal123.approve('done');deleteConfirm = true\" autofocus>Yes</button>\n  </div>\n</sui-modal>\n<!-- Alert modal -->"

/***/ }),

/***/ "./src/app/admin-home/admin-home.component.ts":
/*!****************************************************!*\
  !*** ./src/app/admin-home/admin-home.component.ts ***!
  \****************************************************/
/*! exports provided: AdminHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminHomeComponent", function() { return AdminHomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_admin_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/admin.service */ "./src/app/services/admin.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _models_problems__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/problems */ "./src/app/models/problems.ts");
/* harmony import */ var _models_problemLabel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/problemLabel */ "./src/app/models/problemLabel.ts");
/* harmony import */ var _models_problemTitle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/problemTitle */ "./src/app/models/problemTitle.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AdminHomeComponent = /** @class */ (function () {
    function AdminHomeComponent(adminService, router) {
        this.adminService = adminService;
        this.router = router;
        this.eformURL = "";
        this.page = 1;
        this.showSDSModal = false;
        this.showInfoModal = false;
        this.showMoreInfoModal = false;
        this.showProblemModal = false;
        this.showEformModal = false;
        this.noInfo = false;
        this.alertModal = false;
        this.deleteConfirm = false;
        this.userInfo = Array.apply(null, Array());
        this.moreInfo = Array.apply(null, Array());
        this.problemInfo = Array.apply(null, Array());
        this.options = ["qweqweqw", " tanga"];
    }
    AdminHomeComponent.prototype.ngOnInit = function () {
        this.getUsers();
    };
    AdminHomeComponent.prototype.getUsers = function () {
        var _this = this;
        this.adminService.getUsers().subscribe(function (successData) {
            _this.pages = successData;
        }, function (error) { return console.log(error); });
    };
    AdminHomeComponent.prototype.getSDS = function (i) {
        var _this = this;
        this.adminService.getMySDS(i).subscribe(function (successData) {
            // console.log(successData)
            if (successData.length == 0) {
                _this.noInfo = true;
            }
            else {
                _this.codes = successData;
                _this.noInfo = false;
            }
        }, function (error) { console.log(error); _this.noInfo = true; });
    };
    AdminHomeComponent.prototype.changeUserPermission = function (i, permission) {
        this.adminService.changeUserPermission(i, permission).subscribe(function (response) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default()({
                title: "Permission Changed",
                type: "success"
            });
        }, function (err) { return console.error(err); });
    };
    AdminHomeComponent.prototype.getProblems = function (i) {
        var _this = this;
        this.userProblem = Array.apply(null, Array());
        this.adminService.getProblems(i).subscribe(function (successData) {
            if (successData != null || undefined) {
                _this.problem = _models_problems__WEBPACK_IMPORTED_MODULE_3__["problems"].problems;
                _this.labelArray = _models_problemLabel__WEBPACK_IMPORTED_MODULE_4__["labels"];
                var label_holder_1 = Object.keys(successData);
                label_holder_1.splice(0, 1);
                var value_holder_1 = Object.values(successData);
                value_holder_1.splice(0, 1);
                var currentIndex_1 = 0;
                _this.problemTitle = _models_problemTitle__WEBPACK_IMPORTED_MODULE_5__["title"];
                _this.labelArray.forEach(function (element, index) {
                    if (element.fieldname == label_holder_1[index]) {
                        _this.labelArray[index].value = value_holder_1[index];
                    }
                    if (index == 9) {
                        currentIndex_1++;
                    }
                    else if (index == 14) {
                        currentIndex_1++;
                    }
                    else if (index == 22) {
                        currentIndex_1++;
                    }
                    else if (index == 30) {
                        currentIndex_1++;
                    }
                    else if (index == 37) {
                        currentIndex_1++;
                    }
                    else if (index == 48) {
                        currentIndex_1++;
                    }
                    else if (index == 55) {
                        currentIndex_1++;
                    }
                    else if (index == 75) {
                        currentIndex_1++;
                    }
                    else if (index == 79) {
                        currentIndex_1++;
                    }
                    if (_this.labelArray[index].value) {
                        _this.problemTitle[currentIndex_1].questions.push(_this.labelArray[index]);
                    }
                });
                // console.log(this.problemTitle)
                _this.problemTitle.forEach(function (element, index) {
                    if (element.questions.length > 1) {
                        _this.userProblem.push(element);
                    }
                });
                _this.userProblem.forEach(function (element, index) {
                    _this.userProblem[index].color = _this.randColor();
                });
            }
        }, function (error) { return console.log(error); });
    };
    AdminHomeComponent.prototype.getEform = function (i) {
        var _this = this;
        this.adminService.getEform(i).subscribe(function (successData) {
            // console.log(successData)
            if (successData.hasEform) {
                _this.eformURL = successData.url;
                _this.noInfo = false;
            }
            else {
                _this.noInfo = true;
            }
        }, function (error) { return console.log(error); });
    };
    AdminHomeComponent.prototype.getMoreInfo = function (i) {
        var _this = this;
        this.moreInfo = Array.apply(null, Array());
        this.adminService.getMoreInfo(i).subscribe(function (successData) {
            if (successData != null || undefined) {
                var label_1 = ["Ambition", "Downful Experience", "Happiest Experience", "Someone to talk to", "Troubling Problems", "I want to change my"];
                var value = Object.values(successData);
                value.forEach(function (element, index) {
                    _this.moreInfo.push({
                        label: label_1[index],
                        value: _this.capitalizeFirstLetter(element),
                        color: _this.randColor()
                    });
                });
                // console.log(this.moreInfo)
                _this.noInfo = false;
            }
            else {
                _this.noInfo = true;
            }
        }, function (error) { return console.log(error); });
    };
    AdminHomeComponent.prototype.getInfo = function (i) {
        var _this = this;
        this.userInfo = Array.apply(null, Array());
        this.adminService.getInfo(i).subscribe(function (successData) {
            if (successData != null || undefined) {
                // console.log(successData)
                if (successData.have_friends) {
                    successData.have_friends = "I do have";
                }
                else {
                    successData.have_friends = "I don't have";
                }
                if (successData.not_livingwith_parents == "")
                    successData.not_livingwith_parents = "(I'm living with my parents)";
                if (successData.allowed_night == "")
                    successData.allowed_night = "(I'm not allowed to go out during night)";
                var label_2 = [
                    "Full name", "Course", "Age", "Gender", "Religion", "Place of birth", "Address",
                    "Phone number", "Mother's Name", "Mother's Religion", "Mother's Job", "Father's Name",
                    "Father's Religion", "Father's Job", "Reason why not living with parents", "Studies Status",
                    "Transportation", "How often allowed during night", "Who helps with your studies", "Hobby", "Do you have friends"
                ];
                var value = Object.values(successData);
                value.forEach(function (element, index) {
                    var hold_val = element.toString();
                    _this.userInfo.push({
                        label: label_2[index],
                        value: _this.capitalizeFirstLetter(hold_val),
                        color: _this.randColor()
                    });
                });
                // console.log(this.userInfo)
                _this.noInfo = false;
            }
            else {
                _this.noInfo = true;
            }
        }, function (error) { return console.log(error); });
    };
    AdminHomeComponent.prototype.capitalizeFirstLetter = function (string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };
    AdminHomeComponent.prototype.randColor = function () {
        var colors = ["red", "orange",
            "olive", "green", "teal", "blue", "violet", "purple", "pink", "brown", "grey", "black",];
        return colors[Math.floor((Math.random() * colors.length) + 0)];
    };
    AdminHomeComponent.prototype.delete = function (i) {
        var _this = this;
        this.alertModal = true;
        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default()({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(function (result) {
            if (result.value) {
                _this.adminService.deleteUser(i).subscribe(function (successData) {
                    // console.log(successData)
                    _this.getUsers();
                }, function (error) { return console.log(error); });
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default()('Deleted!', 'Your file has been deleted.', 'success');
            }
        });
        this.alertModal = false;
    };
    AdminHomeComponent.prototype.onSearchChange = function (searchValue) {
        var _this = this;
        this.adminService.search("user", searchValue).subscribe(function (successData) {
            _this.pages = successData;
        }, function (error) { return console.log(error); });
    };
    AdminHomeComponent.prototype.logout = function () {
        localStorage.clear();
        this.router.navigate(["/admin-auth"]);
    };
    AdminHomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-home',
            template: __webpack_require__(/*! ./admin-home.component.html */ "./src/app/admin-home/admin-home.component.html"),
            styles: [__webpack_require__(/*! ./admin-home.component.css */ "./src/app/admin-home/admin-home.component.css")]
        }),
        __metadata("design:paramtypes", [_services_admin_service__WEBPACK_IMPORTED_MODULE_1__["AdminService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], AdminHomeComponent);
    return AdminHomeComponent;
}());



/***/ }),

/***/ "./src/app/admin-messages/admin-messages.component.css":
/*!*************************************************************!*\
  !*** ./src/app/admin-messages/admin-messages.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(https://fonts.googleapis.com/css?family=Lato:400,700);\r\n*, *:before, *:after {\r\n  box-sizing: border-box;\r\n}\r\nbody {\r\n  background: #C5DDEB;\r\n  font: 14px/20px \"Lato\", Arial, sans-serif;\r\n  padding: 40px 0;\r\n  color: white;\r\n}\r\n.container {\r\n  margin: 0 auto;\r\n  width: 100%;\r\n  background: white;\r\n  border-radius: 5px;\r\n  border: grey solid 1px;\r\n}\r\n.people-list {\r\n  width: 30%;\r\n  float: left;\r\n}\r\n.people-list .search {\r\n  padding: 20px;\r\n}\r\n.people-list input {\r\n  border-radius: 3px;\r\n  border: none;\r\n  padding: 10px;\r\n  color: black;\r\n  background: white;\r\n  width: 90%;\r\n  font-size: 14px;\r\n  border: #7bb0e2 solid 1px;\r\n}\r\n.people-list .fa-search {\r\n  position: relative;\r\n  left: -25px;\r\n}\r\n.people-list ul {\r\n  padding: 20px 0 20px 0;\r\n  height: 770px;\r\n  margin-bottom: 0;\r\n  \r\n  overflow-y: scroll;\r\n}\r\n.people-list ul li {\r\n  padding-bottom: 20px;\r\n}\r\n.people-list img {\r\n  float: left;\r\n}\r\n.people-list .about {\r\n  float: left;\r\n  margin-top: 8px;\r\n}\r\n.people-list .about {\r\n  padding-left: 8px;\r\n}\r\n.people-list .status {\r\n  color: #92959E;\r\n}\r\n.chat {\r\n  width: 70%;\r\n  float: left;\r\n  background: white;\r\n  border-top-right-radius: 5px;\r\n  border-bottom-right-radius: 5px;\r\n  color: #434651;\r\n \r\n}\r\n.chat .chat-header {\r\n  padding: 20px;\r\n  border-left:grey solid 1px;\r\n}\r\n.chat .chat-header img {\r\n  float: left;\r\n}\r\n.chat .chat-header .chat-about {\r\n  float: left;\r\n  padding-left: 10px;\r\n  margin-top: 6px;\r\n}\r\n.chat .chat-header .chat-with {\r\n  font-weight: bold;\r\n  font-size: 16px;\r\n}\r\n.chat .chat-header .chat-num-messages {\r\n  color: #92959E;\r\n}\r\n.chat .chat-header .fa-star {\r\n  float: right;\r\n  color: #D8DADF;\r\n  font-size: 20px;\r\n  margin-top: 12px;\r\n}\r\n.chat .chat-history {\r\n  /* padding: 30px 30px 20px; */\r\n  border-top: grey solid 1px;\r\n  border-bottom: grey solid 1px;\r\n  border-left: grey solid 1px;\r\n  overflow-y: hidden;\r\n  \r\n  height: 575px;\r\n}\r\n.chat .chat-history .message-data {\r\n  margin-bottom: 15px;\r\n}\r\n.chat .chat-history .message-data-time {\r\n  color: #a8aab1;\r\n  padding-left: 6px;\r\n}\r\n.chat .chat-history .message {\r\n  color: white;\r\n  padding: 18px 20px;\r\n  line-height: 26px;\r\n  font-size: 16px;\r\n  border-radius: 7px;\r\n  margin-bottom: 30px;\r\n  width: 90%;\r\n  position: relative;\r\n}\r\n.chat .chat-history .message:after {\r\n  bottom: 100%;\r\n  left: 7%;\r\n  border: solid transparent;\r\n  content: \" \";\r\n  height: 0;\r\n  width: 0;\r\n  position: absolute;\r\n  pointer-events: none;\r\n  border-bottom-color: #86BB71;\r\n  border-width: 10px;\r\n  margin-left: -10px;\r\n}\r\n.chat .chat-history .my-message {\r\n  background: #86BB71;\r\n}\r\n.chat .chat-history .other-message {\r\n  background: #94C2ED;\r\n}\r\n.chat .chat-history .other-message:after {\r\n  border-bottom-color: #94C2ED;\r\n  left: 93%;\r\n}\r\n.chat .chat-message {\r\n  padding: 30px;\r\n  border-left:grey solid 1px;\r\n  \r\n}\r\n.chat .chat-message textarea {\r\n  width: 100%;\r\n  border: none;\r\n  padding: 10px 20px;\r\n  font: 14px/22px \"Lato\", Arial, sans-serif;\r\n  margin-bottom: 10px;\r\n  border-radius: 5px;\r\n  resize: none;\r\n  border: #7bb0e2 solid 1px;\r\n}\r\n.chat .chat-message .fa-file-o, .chat .chat-message .fa-file-image-o {\r\n  font-size: 16px;\r\n  color: gray;\r\n  cursor: pointer;\r\n}\r\n.chat .chat-message button {\r\n  float: right;\r\n  color: #94C2ED;\r\n  font-size: 16px;\r\n  text-transform: uppercase;\r\n  border: none;\r\n  cursor: pointer;\r\n  font-weight: bold;\r\n  background: white;\r\n}\r\n.chat .chat-message button:hover {\r\n  color: #75b1e8;\r\n}\r\n.online, .offline, .me {\r\n  margin-right: 3px;\r\n  font-size: 1rem;\r\n}\r\n.online {\r\n  color: #86BB71;\r\n}\r\n.offline {\r\n  color: #E38968;\r\n}\r\n.me {\r\n  color: #94C2ED;\r\n}\r\n.align-left {\r\n  text-align: left;\r\n}\r\n.align-right {\r\n  text-align: right;\r\n}\r\n.float-right {\r\n  float: right;\r\n}\r\n.clearfix:after {\r\n  visibility: hidden;\r\n  display: block;\r\n  font-size: 0;\r\n  content: \" \";\r\n  clear: both;\r\n  height: 0;\r\n}\r\nli{\r\n    list-style: none !important\r\n}\r\nul.list li {\r\n  cursor: pointer;\r\n  padding:20px;\r\n}\r\ncdk-virtual-scroll-viewport {\r\n  height: 50vh;\r\n\r\n}\r\n.name{\r\n  text-transform:capitalize;\r\n  font-weight: bold;\r\n}\r\n.active{\r\n  background: whitesmoke;\r\n}\r\n.online-text{\r\n  color:green;\r\n  font-weight: bold;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4tbWVzc2FnZXMvYWRtaW4tbWVzc2FnZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxrRUFBa0U7QUFDbEU7RUFDRSx1QkFBdUI7Q0FDeEI7QUFFRDtFQUNFLG9CQUFvQjtFQUNwQiwwQ0FBMEM7RUFDMUMsZ0JBQWdCO0VBQ2hCLGFBQWE7Q0FDZDtBQUVEO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtDQUN4QjtBQUVEO0VBQ0UsV0FBVztFQUNYLFlBQVk7Q0FDYjtBQUNEO0VBQ0UsY0FBYztDQUNmO0FBQ0Q7RUFDRSxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLGNBQWM7RUFDZCxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsMEJBQTBCO0NBQzNCO0FBRUQ7RUFDRSxtQkFBbUI7RUFDbkIsWUFBWTtDQUNiO0FBQ0Q7RUFDRSx1QkFBdUI7RUFDdkIsY0FBYztFQUNkLGlCQUFpQjs7RUFFakIsbUJBQW1CO0NBQ3BCO0FBQ0Q7RUFDRSxxQkFBcUI7Q0FDdEI7QUFDRDtFQUNFLFlBQVk7Q0FDYjtBQUNEO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtDQUNqQjtBQUNEO0VBQ0Usa0JBQWtCO0NBQ25CO0FBQ0Q7RUFDRSxlQUFlO0NBQ2hCO0FBRUQ7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQiw2QkFBNkI7RUFDN0IsZ0NBQWdDO0VBQ2hDLGVBQWU7O0NBRWhCO0FBQ0Q7RUFDRSxjQUFjO0VBQ2QsMkJBQTJCO0NBQzVCO0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7QUFDRDtFQUNFLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsZ0JBQWdCO0NBQ2pCO0FBQ0Q7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0NBQ2pCO0FBQ0Q7RUFDRSxlQUFlO0NBQ2hCO0FBQ0Q7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixpQkFBaUI7Q0FDbEI7QUFDRDtFQUNFLDhCQUE4QjtFQUM5QiwyQkFBMkI7RUFDM0IsOEJBQThCO0VBQzlCLDRCQUE0QjtFQUM1QixtQkFBbUI7O0VBRW5CLGNBQWM7Q0FDZjtBQUVEO0VBQ0Usb0JBQW9CO0NBQ3JCO0FBQ0Q7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0NBQ25CO0FBQ0Q7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLG9CQUFvQjtFQUNwQixXQUFXO0VBQ1gsbUJBQW1CO0NBQ3BCO0FBQ0Q7RUFDRSxhQUFhO0VBQ2IsU0FBUztFQUNULDBCQUEwQjtFQUMxQixhQUFhO0VBQ2IsVUFBVTtFQUNWLFNBQVM7RUFDVCxtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLDZCQUE2QjtFQUM3QixtQkFBbUI7RUFDbkIsbUJBQW1CO0NBQ3BCO0FBQ0Q7RUFDRSxvQkFBb0I7Q0FDckI7QUFDRDtFQUNFLG9CQUFvQjtDQUNyQjtBQUNEO0VBQ0UsNkJBQTZCO0VBQzdCLFVBQVU7Q0FDWDtBQUNEO0VBQ0UsY0FBYztFQUNkLDJCQUEyQjs7Q0FFNUI7QUFHRDtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDBDQUEwQztFQUMxQyxvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYiwwQkFBMEI7Q0FDM0I7QUFDRDtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osZ0JBQWdCO0NBQ2pCO0FBQ0Q7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQiwwQkFBMEI7RUFDMUIsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsa0JBQWtCO0NBQ25CO0FBQ0Q7RUFDRSxlQUFlO0NBQ2hCO0FBRUQ7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0NBQ2pCO0FBRUQ7RUFDRSxlQUFlO0NBQ2hCO0FBRUQ7RUFDRSxlQUFlO0NBQ2hCO0FBRUQ7RUFDRSxlQUFlO0NBQ2hCO0FBRUQ7RUFDRSxpQkFBaUI7Q0FDbEI7QUFFRDtFQUNFLGtCQUFrQjtDQUNuQjtBQUVEO0VBQ0UsYUFBYTtDQUNkO0FBRUQ7RUFDRSxtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGFBQWE7RUFDYixhQUFhO0VBQ2IsWUFBWTtFQUNaLFVBQVU7Q0FDWDtBQUVEO0lBQ0ksMkJBQTJCO0NBQzlCO0FBRUQ7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtDQUNkO0FBRUQ7RUFDRSxhQUFhOztDQUVkO0FBQ0Q7RUFDRSwwQkFBMEI7RUFDMUIsa0JBQWtCO0NBQ25CO0FBQ0Q7RUFDRSx1QkFBdUI7Q0FDeEI7QUFFRDtFQUNFLFlBQVk7RUFDWixrQkFBa0I7Q0FDbkIiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi1tZXNzYWdlcy9hZG1pbi1tZXNzYWdlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUxhdG86NDAwLDcwMCk7XHJcbiosICo6YmVmb3JlLCAqOmFmdGVyIHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG5ib2R5IHtcclxuICBiYWNrZ3JvdW5kOiAjQzVEREVCO1xyXG4gIGZvbnQ6IDE0cHgvMjBweCBcIkxhdG9cIiwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgcGFkZGluZzogNDBweCAwO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJvcmRlcjogZ3JleSBzb2xpZCAxcHg7XHJcbn1cclxuXHJcbi5wZW9wbGUtbGlzdCB7XHJcbiAgd2lkdGg6IDMwJTtcclxuICBmbG9hdDogbGVmdDtcclxufVxyXG4ucGVvcGxlLWxpc3QgLnNlYXJjaCB7XHJcbiAgcGFkZGluZzogMjBweDtcclxufVxyXG4ucGVvcGxlLWxpc3QgaW5wdXQge1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgd2lkdGg6IDkwJTtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgYm9yZGVyOiAjN2JiMGUyIHNvbGlkIDFweDtcclxufVxyXG5cclxuLnBlb3BsZS1saXN0IC5mYS1zZWFyY2gge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBsZWZ0OiAtMjVweDtcclxufVxyXG4ucGVvcGxlLWxpc3QgdWwge1xyXG4gIHBhZGRpbmc6IDIwcHggMCAyMHB4IDA7XHJcbiAgaGVpZ2h0OiA3NzBweDtcclxuICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gIFxyXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcclxufVxyXG4ucGVvcGxlLWxpc3QgdWwgbGkge1xyXG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG59XHJcbi5wZW9wbGUtbGlzdCBpbWcge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG59XHJcbi5wZW9wbGUtbGlzdCAuYWJvdXQge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIG1hcmdpbi10b3A6IDhweDtcclxufVxyXG4ucGVvcGxlLWxpc3QgLmFib3V0IHtcclxuICBwYWRkaW5nLWxlZnQ6IDhweDtcclxufVxyXG4ucGVvcGxlLWxpc3QgLnN0YXR1cyB7XHJcbiAgY29sb3I6ICM5Mjk1OUU7XHJcbn1cclxuXHJcbi5jaGF0IHtcclxuICB3aWR0aDogNzAlO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XHJcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcclxuICBjb2xvcjogIzQzNDY1MTtcclxuIFxyXG59XHJcbi5jaGF0IC5jaGF0LWhlYWRlciB7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBib3JkZXItbGVmdDpncmV5IHNvbGlkIDFweDtcclxufVxyXG4uY2hhdCAuY2hhdC1oZWFkZXIgaW1nIHtcclxuICBmbG9hdDogbGVmdDtcclxufVxyXG4uY2hhdCAuY2hhdC1oZWFkZXIgLmNoYXQtYWJvdXQge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIHBhZGRpbmctbGVmdDogMTBweDtcclxuICBtYXJnaW4tdG9wOiA2cHg7XHJcbn1cclxuLmNoYXQgLmNoYXQtaGVhZGVyIC5jaGF0LXdpdGgge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG4uY2hhdCAuY2hhdC1oZWFkZXIgLmNoYXQtbnVtLW1lc3NhZ2VzIHtcclxuICBjb2xvcjogIzkyOTU5RTtcclxufVxyXG4uY2hhdCAuY2hhdC1oZWFkZXIgLmZhLXN0YXIge1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBjb2xvcjogI0Q4REFERjtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgbWFyZ2luLXRvcDogMTJweDtcclxufVxyXG4uY2hhdCAuY2hhdC1oaXN0b3J5IHtcclxuICAvKiBwYWRkaW5nOiAzMHB4IDMwcHggMjBweDsgKi9cclxuICBib3JkZXItdG9wOiBncmV5IHNvbGlkIDFweDtcclxuICBib3JkZXItYm90dG9tOiBncmV5IHNvbGlkIDFweDtcclxuICBib3JkZXItbGVmdDogZ3JleSBzb2xpZCAxcHg7XHJcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xyXG4gIFxyXG4gIGhlaWdodDogNTc1cHg7XHJcbn1cclxuXHJcbi5jaGF0IC5jaGF0LWhpc3RvcnkgLm1lc3NhZ2UtZGF0YSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG4uY2hhdCAuY2hhdC1oaXN0b3J5IC5tZXNzYWdlLWRhdGEtdGltZSB7XHJcbiAgY29sb3I6ICNhOGFhYjE7XHJcbiAgcGFkZGluZy1sZWZ0OiA2cHg7XHJcbn1cclxuLmNoYXQgLmNoYXQtaGlzdG9yeSAubWVzc2FnZSB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDE4cHggMjBweDtcclxuICBsaW5lLWhlaWdodDogMjZweDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgd2lkdGg6IDkwJTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLmNoYXQgLmNoYXQtaGlzdG9yeSAubWVzc2FnZTphZnRlciB7XHJcbiAgYm90dG9tOiAxMDAlO1xyXG4gIGxlZnQ6IDclO1xyXG4gIGJvcmRlcjogc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgY29udGVudDogXCIgXCI7XHJcbiAgaGVpZ2h0OiAwO1xyXG4gIHdpZHRoOiAwO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICBib3JkZXItYm90dG9tLWNvbG9yOiAjODZCQjcxO1xyXG4gIGJvcmRlci13aWR0aDogMTBweDtcclxuICBtYXJnaW4tbGVmdDogLTEwcHg7XHJcbn1cclxuLmNoYXQgLmNoYXQtaGlzdG9yeSAubXktbWVzc2FnZSB7XHJcbiAgYmFja2dyb3VuZDogIzg2QkI3MTtcclxufVxyXG4uY2hhdCAuY2hhdC1oaXN0b3J5IC5vdGhlci1tZXNzYWdlIHtcclxuICBiYWNrZ3JvdW5kOiAjOTRDMkVEO1xyXG59XHJcbi5jaGF0IC5jaGF0LWhpc3RvcnkgLm90aGVyLW1lc3NhZ2U6YWZ0ZXIge1xyXG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICM5NEMyRUQ7XHJcbiAgbGVmdDogOTMlO1xyXG59XHJcbi5jaGF0IC5jaGF0LW1lc3NhZ2Uge1xyXG4gIHBhZGRpbmc6IDMwcHg7XHJcbiAgYm9yZGVyLWxlZnQ6Z3JleSBzb2xpZCAxcHg7XHJcbiAgXHJcbn1cclxuXHJcblxyXG4uY2hhdCAuY2hhdC1tZXNzYWdlIHRleHRhcmVhIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gIGZvbnQ6IDE0cHgvMjJweCBcIkxhdG9cIiwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgcmVzaXplOiBub25lO1xyXG4gIGJvcmRlcjogIzdiYjBlMiBzb2xpZCAxcHg7XHJcbn1cclxuLmNoYXQgLmNoYXQtbWVzc2FnZSAuZmEtZmlsZS1vLCAuY2hhdCAuY2hhdC1tZXNzYWdlIC5mYS1maWxlLWltYWdlLW8ge1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBjb2xvcjogZ3JheTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmNoYXQgLmNoYXQtbWVzc2FnZSBidXR0b24ge1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBjb2xvcjogIzk0QzJFRDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG59XHJcbi5jaGF0IC5jaGF0LW1lc3NhZ2UgYnV0dG9uOmhvdmVyIHtcclxuICBjb2xvcjogIzc1YjFlODtcclxufVxyXG5cclxuLm9ubGluZSwgLm9mZmxpbmUsIC5tZSB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAzcHg7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG59XHJcblxyXG4ub25saW5lIHtcclxuICBjb2xvcjogIzg2QkI3MTtcclxufVxyXG5cclxuLm9mZmxpbmUge1xyXG4gIGNvbG9yOiAjRTM4OTY4O1xyXG59XHJcblxyXG4ubWUge1xyXG4gIGNvbG9yOiAjOTRDMkVEO1xyXG59XHJcblxyXG4uYWxpZ24tbGVmdCB7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuLmFsaWduLXJpZ2h0IHtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuLmZsb2F0LXJpZ2h0IHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuXHJcbi5jbGVhcmZpeDphZnRlciB7XHJcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMDtcclxuICBjb250ZW50OiBcIiBcIjtcclxuICBjbGVhcjogYm90aDtcclxuICBoZWlnaHQ6IDA7XHJcbn1cclxuXHJcbmxpe1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZSAhaW1wb3J0YW50XHJcbn1cclxuXHJcbnVsLmxpc3QgbGkge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBwYWRkaW5nOjIwcHg7XHJcbn1cclxuXHJcbmNkay12aXJ0dWFsLXNjcm9sbC12aWV3cG9ydCB7XHJcbiAgaGVpZ2h0OiA1MHZoO1xyXG5cclxufVxyXG4ubmFtZXtcclxuICB0ZXh0LXRyYW5zZm9ybTpjYXBpdGFsaXplO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbi5hY3RpdmV7XHJcbiAgYmFja2dyb3VuZDogd2hpdGVzbW9rZTtcclxufVxyXG5cclxuLm9ubGluZS10ZXh0e1xyXG4gIGNvbG9yOmdyZWVuO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/admin-messages/admin-messages.component.html":
/*!**************************************************************!*\
  !*** ./src/app/admin-messages/admin-messages.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui basic segment\" *ngIf=\"!printing\">\n  <button class=\"ui secondary labeled icon button\" style=\"margin-bottom:10px;\" routerLink=\"/admin-home\">\n    <i class=\"left arrow icon\"></i>\n    Back to dashboard\n  </button>\n\n\n\n  <div class=\"container clearfix\">\n\n    <div class=\"people-list\" id=\"people-list\">\n      <div class=\"search\">\n        <input type=\"text\" placeholder=\"search\" />\n        <i class=\"fa fa-search\"></i>\n      </div>\n      <ul class=\"list\">\n        <li class=\"clearfix\" [ngClass]=\"{'active': contact.isSelected}\" *ngFor=\"let contact of contacts;let i = index\"\n          (click)=\"selectContact(i);getMessages(contact.convo_name);\">\n\n          <img [src]=\"contact.dp_path\" alt=\"avatar\" class=\"ui avatar mini image\" />\n          <div class=\"about\">\n\n            <div class=\"name primary\">\n\n              {{contact.name}}\n              <a class=\"ui empty circular label\" style=\"margin-left:5px;\" [ngClass]=\"{'green': contact.isOnline,\n              'grey': !contact.isOnline}\"></a>\n            </div>\n            <p>{{contact.recent_msg}}</p>\n            <span style=\"text-align: right\" [ngClass]=\"{'online-text': contact.isOnline}\">\n              {{contact.isOnline ? 'Active Now' : 'Last online: '+durationLastOnline(contact.last_online)}}\n            </span>\n\n          </div>\n        </li>\n\n\n      </ul>\n    </div>\n    <div class=\"chat\">\n      <div class=\"chat-header clearfix\" *ngIf=\"selectedContact\">\n        <img src=\"{{selectedContact.dp_path}}\" class=\"ui avatar tiny image\" alt=\"avatar\" />\n\n        <div class=\"chat-about\">\n          <div class=\"chat-with\">Chat with {{selectedContact.name}}</div>\n        </div>\n        <i class=\"fa fa-star\"></i>\n      </div> <!-- end chat-header -->\n\n      <div class=\"chat-history\">\n        <div class=\"ui active centered inline loader\" *ngIf=\"isLoading\"></div>\n        <ul>\n          <cdk-virtual-scroll-viewport [itemSize]=\"messages.length\" *ngIf=\"messages\"\n            (scrolledIndexChange)=\"getNextBatch($event)\" #scrollMe>\n            <li class=\"clearfix\" *cdkVirtualFor=\"let message of messages\">\n              <div class=\"message-data \" [ngClass]=\"{'align-right': selectedContact.contact_user_id == message.id}\">\n                <span class=\"message-data-time\">{{message.timestamp}}</span> &nbsp; &nbsp;\n                <span class=\"message-data-name\">{{message.name}}</span> <i class=\"fa fa-circle me\"></i>\n\n              </div>\n              <div class=\"message\" [ngClass]=\"{'other-message': selectedContact.contact_user_id == message.id,\n                                            'float-right': selectedContact.contact_user_id == message.id,\n                                            'my-message': selectedContact.contact_user_id != message.id}\">\n                {{message.message}}\n              </div>\n\n            </li>\n          </cdk-virtual-scroll-viewport>\n\n\n\n        </ul>\n\n\n\n\n      </div> <!-- end chat-history -->\n\n      <div class=\"chat-message clearfix\">\n        <textarea name=\"message-to-send\" id=\"message-to-send\" placeholder=\"Type your message\" rows=\"3\"\n          #userMsg></textarea>\n\n        <i class=\"fa fa-file-o\"></i> &nbsp;&nbsp;&nbsp;\n        <i class=\"fa fa-file-image-o\"></i>\n\n        <button (click)=\"sendMessage(userMsg.value, selectedContact.convo_name)\">Send</button>\n\n      </div> <!-- end chat-message -->\n\n    </div> <!-- end chat -->\n\n  </div> <!-- end container -->\n\n\n\n\n\n\n\n\n\n</div>"

/***/ }),

/***/ "./src/app/admin-messages/admin-messages.component.ts":
/*!************************************************************!*\
  !*** ./src/app/admin-messages/admin-messages.component.ts ***!
  \************************************************************/
/*! exports provided: AdminMessagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminMessagesComponent", function() { return AdminMessagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_chat_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/chat.service */ "./src/app/services/chat.service.ts");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_admin_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/admin.service */ "./src/app/services/admin.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AdminMessagesComponent = /** @class */ (function () {
    //Handler when browser is closed
    function AdminMessagesComponent(chatService, userService, router, adminService) {
        this.chatService = chatService;
        this.userService = userService;
        this.router = router;
        this.adminService = adminService;
        this.throttle = 50;
        this.scrollDistance = 1;
        this.scrollUpDistance = 1;
        this.limit = 10;
        this.isLimit = false;
        this.isLoading = false;
        this.isInitialized = false;
        this.printing = false;
    }
    AdminMessagesComponent.prototype.logout = function () {
        localStorage.clear();
        this.router.navigate(["/admin-auth"]);
    };
    AdminMessagesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getContacts();
        this.chatService.getNewMessage().subscribe(function (msg) {
            _this.messages = msg.reverse();
        }, function (err) { return console.log(err); });
        this.userData = this.userService.getPayload(localStorage.getItem('AdminAuthorization'));
        this.chatService.getSingleNewMessage().subscribe(function (msg) {
            if (_this.contacts.some(function (contact) { return contact.convo_name === msg.convo_name; })) {
                for (var key in _this.contacts) {
                    if (_this.contacts[key].convo_name === msg.convo_name) {
                        _this.contacts[key].recent_msg = msg.message;
                        break;
                    }
                }
            }
        }, function (err) { return console.log(err); });
    };
    AdminMessagesComponent.prototype.scrollToBottom = function () {
        this.virtualScrollViewport.scrollTo({
            bottom: 0,
            behavior: 'auto'
        });
    };
    AdminMessagesComponent.prototype.sendMessage = function (msg, convo_name) {
        var data = {
            msg: msg,
            convo_name: convo_name,
            token: localStorage.getItem("AdminAuthorization"),
            isAdmin: true,
            limit: this.limit
        };
        this.chatService.sendMessage(data);
        this.messageBox.nativeElement.value = "";
    };
    AdminMessagesComponent.prototype.getNextBatch = function (event) {
        var _this = this;
        if (event === 0 && this.isInitialized) {
            this.isLoading = true;
            this.limit += 10;
            setTimeout(function () {
                _this.adminService.getMessages(_this.selectedContact.convo_name, _this.limit)
                    .subscribe(function (successData) {
                    _this.messages = successData.reverse();
                    _this.isLoading = false;
                    console.log(_this.messages);
                }, function (err) { return console.log(err); });
            }, 1000);
        }
    };
    AdminMessagesComponent.prototype.getMessages = function (convo_name) {
        var _this = this;
        this.adminService.getMessages(convo_name, this.limit).subscribe(function (successData) {
            _this.messages = successData.reverse();
            setTimeout(function () {
                _this.scrollToBottom();
                _this.isInitialized = true;
            }, 100);
        }, function (error) { return console.log(error); });
    };
    AdminMessagesComponent.prototype.durationLastOnline = function (date) {
        return date_fns__WEBPACK_IMPORTED_MODULE_2__["distanceInWordsToNow"](date);
    };
    AdminMessagesComponent.prototype.getContacts = function () {
        var _this = this;
        this.adminService.getContacts().subscribe(function (successData) {
            _this.contacts = successData;
            console.log(_this.contacts);
            //Join all of the conversion room for every contact user
            _this.chatService.joinAllContactsRoom(_this.contacts, _this.userData);
            _this.chatService.getNewOnlineUser().subscribe(function (id) {
                console.log(id);
                if (_this.contacts.some(function (contact) { return contact.contact_user_id === id; })) {
                    for (var key in _this.contacts) {
                        //Check if it the id 
                        //If not continue to next iteration
                        if (_this.contacts[key].contact_user_id === id) {
                            _this.contacts[key].isOnline = true;
                            break;
                        }
                        else {
                            continue;
                        }
                    }
                }
            });
            _this.chatService.getNewOfflineUser().subscribe(function (data) {
                console.log(data);
                if (_this.contacts.some(function (contact) { return contact.contact_user_id === data.id; })) {
                    for (var key in _this.contacts) {
                        //Check if it the id 
                        //If not continue to next iteration
                        if (_this.contacts[key].contact_user_id === data.id) {
                            _this.contacts[key].isOnline = false;
                            _this.contacts[key].last_online = data.date;
                            break;
                        }
                        else {
                            continue;
                        }
                    }
                }
            });
            _this.selectedContact = _this.contacts[0];
            _this.selectedContact.isSelected = true;
            console.log(_this.selectedContact);
            // this.chatSocket.emit('join', { convo_name: this.selectedContact.convo_name, user: this.selectedContact.name });
            _this.getMessages(_this.contacts[0].convo_name);
        }, function (error) { return console.log(error); });
    };
    AdminMessagesComponent.prototype.selectContact = function (id) {
        //Disable the current selected contact
        this.selectedContact.isSelected = false;
        //Reinstantiate the limit for every clicked contact
        this.limit = 10;
        this.isInitialized = false;
        //Leave the room of the current selected contact
        this.chatService.leaveRoom({ convo_name: this.selectedContact.convo_name, user: this.selectedContact.name });
        //Invoke the new selected contact and join the corresponding room
        this.selectedContact = this.contacts[id];
        this.contacts[id].isSelected = true;
        this.chatService.joinRoom({ convo_name: this.selectedContact.convo_name, user: this.selectedContact.name });
    };
    AdminMessagesComponent.prototype.unloadHandler = function (event) {
        // Your logic on beforeunload
        this.chatService.endSocket(this.userData.id);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("userMsg"),
        __metadata("design:type", Object)
    ], AdminMessagesComponent.prototype, "messageBox", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_3__["CdkVirtualScrollViewport"]),
        __metadata("design:type", _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_3__["CdkVirtualScrollViewport"])
    ], AdminMessagesComponent.prototype, "virtualScrollViewport", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:beforeunload', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Event]),
        __metadata("design:returntype", void 0)
    ], AdminMessagesComponent.prototype, "unloadHandler", null);
    AdminMessagesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-messages',
            template: __webpack_require__(/*! ./admin-messages.component.html */ "./src/app/admin-messages/admin-messages.component.html"),
            styles: [__webpack_require__(/*! ./admin-messages.component.css */ "./src/app/admin-messages/admin-messages.component.css")]
        }),
        __metadata("design:paramtypes", [_services_chat_service__WEBPACK_IMPORTED_MODULE_1__["ChatService"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _services_admin_service__WEBPACK_IMPORTED_MODULE_6__["AdminService"]])
    ], AdminMessagesComponent);
    return AdminMessagesComponent;
}());



/***/ }),

/***/ "./src/app/admin-settings/admin-settings.component.css":
/*!*************************************************************!*\
  !*** ./src/app/admin-settings/admin-settings.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluLXNldHRpbmdzL2FkbWluLXNldHRpbmdzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/admin-settings/admin-settings.component.html":
/*!**************************************************************!*\
  !*** ./src/app/admin-settings/admin-settings.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui top attached demo menu\">\n  <a class=\"item\" (click)=\"saydbar.toggle()\">\n    <i class=\"sidebar icon\"></i>\n  </a>\n  <div class=\"right menu\">\n    <div class=\"item\">\n      <div class=\"ui blue button\" (click)=\"logout()\">Logout</div>\n    </div>\n  </div>\n</div>\n\n<sui-sidebar-container class=\"ui bottom attached segment\">\n  <sui-sidebar class=\"vertical\" #saydbar>\n    <a class=\"item \" routerLink=\"/admin-home\">\n      Home\n    </a>\n    <a class=\"item\" routerLink=\"/takers-attendance\">\n      Attendance\n    </a>\n    <a class=\"item\" routerLink=\"/admin-graph-specific\">\n      Specific Reports\n    </a>\n    <a class=\"item\" routerLink=\"/admin-graph-general\">\n      General Reports\n    </a>\n    <a class=\"item\" routerLink=\"/admin-new-print\">\n      Print Section\n    </a>\n    <a class=\"item\" routerLink=\"/admin-new-archive\">\n      Archive Section\n    </a>\n    <a class=\"item active\" routerLink=\"/admin-settings\">\n      Accounts Settings\n    </a>\n    <a class=\"item\" routerLink=\"/admin-events\">\n      Events\n    </a>\n    <a class=\"item\" routerLink=\"/admin-messages\">\n      Messages\n    </a>\n  </sui-sidebar>\n\n  <sui-sidebar-sibling [isDimmedWhenVisible]=\"true\">\n    <h2 class=\"ui center aligned icon header\" style=\"padding:15px;\">\n      <i class=\"circular settings icon\"></i>\n      Settings Section\n\n      <div class=\"sub header\">Manage account settings</div>\n    </h2>\n\n    <div class=\"ui info message container\">\n      <div class=\"header\">\n        Some of the action you can do in this section\n      </div>\n      <ul class=\"list\">\n        <li>Use username(s) only as search value when searching for a certain student</li>\n        <li>Search using the search bar on the upper right corner of the table</li>\n        <li>Set account as a user</li>\n        <li>Set account as an admin</li>\n\n      </ul>\n    </div>\n    <div class=\"ui container\">\n      <div class=\"ui input\" style=\"float:right;margin-bottom: 5px;\">\n        <input type=\"text\" placeholder=\"Search...\" (input)=\"onSearchChange($event.target.value)\">\n      </div>\n      <table class=\"ui celled table center aligned\">\n        <thead>\n          <tr>\n            <th>Name</th>\n            <th>Username</th>\n            <th>Action</th>\n          </tr>\n        </thead>\n\n        <tbody>\n          <tr *ngFor=\"let item of allUsers | paginate: { itemsPerPage: 10, currentPage: page } ; let i = index\">\n            <td>{{item.name}}</td>\n            <td>{{item.username}}</td>\n            <td class=\"center aligned\">\n              <div class=\"ui buttons\">\n                <button class=\"ui button blue\" [ngClass]=\"{'disabled': item.type == 'user'}\"\n                  (click)=\"changeType('user',item.id)\">\n                  Set as user\n                </button>\n                <button class=\"ui button red\" [ngClass]=\"{'disabled': item.type == 'admin'}\"\n                  (click)=\"changeType('admin',item.id)\">\n                  Set as admin\n                </button>\n\n              </div>\n            </td>\n\n          </tr>\n        </tbody>\n\n        <tr>\n          <th colspan=\"5\">\n            <div class=\"ui right floated pagination menu\">\n              <a></a>\n              <pagination-controls (pageChange)=\"page = $event\"></pagination-controls>\n            </div>\n          </th>\n        </tr>\n      </table>\n    </div>\n\n  </sui-sidebar-sibling>\n</sui-sidebar-container>"

/***/ }),

/***/ "./src/app/admin-settings/admin-settings.component.ts":
/*!************************************************************!*\
  !*** ./src/app/admin-settings/admin-settings.component.ts ***!
  \************************************************************/
/*! exports provided: AdminSettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminSettingsComponent", function() { return AdminSettingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_admin_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/admin.service */ "./src/app/services/admin.service.ts");
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



var AdminSettingsComponent = /** @class */ (function () {
    function AdminSettingsComponent(adminService, router) {
        this.adminService = adminService;
        this.router = router;
        this.page = 1;
    }
    AdminSettingsComponent.prototype.ngOnInit = function () {
        this.getAllUsers();
    };
    AdminSettingsComponent.prototype.getAllUsers = function () {
        var _this = this;
        this.adminService.getAllUsers().subscribe(function (successData) {
            _this.allUsers = successData;
            // console.log(this.allUsers)
        }, function (error) { return console.log(error); });
    };
    AdminSettingsComponent.prototype.changeType = function (type, id) {
        var _this = this;
        this.adminService.changeType(type, id).subscribe(function (successData) {
            // console.log(successData);
            _this.getAllUsers();
        }, function (error) { return console.log(error); });
    };
    AdminSettingsComponent.prototype.onSearchChange = function (searchValue) {
        var _this = this;
        this.adminService.search('all', searchValue).subscribe(function (successData) {
            _this.allUsers = successData;
        }, function (error) { return console.log(error); });
    };
    AdminSettingsComponent.prototype.logout = function () {
        localStorage.clear();
        this.router.navigate(["/admin-auth"]);
    };
    AdminSettingsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-settings',
            template: __webpack_require__(/*! ./admin-settings.component.html */ "./src/app/admin-settings/admin-settings.component.html"),
            styles: [__webpack_require__(/*! ./admin-settings.component.css */ "./src/app/admin-settings/admin-settings.component.css")]
        }),
        __metadata("design:paramtypes", [_services_admin_service__WEBPACK_IMPORTED_MODULE_1__["AdminService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AdminSettingsComponent);
    return AdminSettingsComponent;
}());



/***/ }),

/***/ "./src/app/admin.guard.ts":
/*!********************************!*\
  !*** ./src/app/admin.guard.ts ***!
  \********************************/
/*! exports provided: AdminGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminGuard", function() { return AdminGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _configs_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./configs/config */ "./src/app/configs/config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AdminGuard = /** @class */ (function () {
    function AdminGuard(router, userService) {
        this.router = router;
        this.userService = userService;
        this.chatSocket = socket_io_client__WEBPACK_IMPORTED_MODULE_3__(_configs_config__WEBPACK_IMPORTED_MODULE_4__["config"].ip + "chat");
    }
    AdminGuard.prototype.canActivate = function (next, state) {
        if (localStorage.getItem("AdminAuthorization") != "" && localStorage.getItem("AdminAuthorization") != null) {
            var payload = this.userService.getPayload(localStorage.getItem("AdminAuthorization"));
            this.chatSocket.emit('login', payload.id);
            return true;
        }
        else {
            this.router.navigate(["/404"]);
            return false;
        }
    };
    AdminGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], AdminGuard);
    return AdminGuard;
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
/* harmony import */ var _question_question_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./question/question.component */ "./src/app/question/question.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _estimates_estimates_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./estimates/estimates.component */ "./src/app/estimates/estimates.component.ts");
/* harmony import */ var _evaluate_evaluate_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./evaluate/evaluate.component */ "./src/app/evaluate/evaluate.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _authentication_authentication_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./authentication/authentication.component */ "./src/app/authentication/authentication.component.ts");
/* harmony import */ var _admin_home_admin_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./admin-home/admin-home.component */ "./src/app/admin-home/admin-home.component.ts");
/* harmony import */ var _admin_graph_admin_graph_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./admin-graph/admin-graph.component */ "./src/app/admin-graph/admin-graph.component.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");
/* harmony import */ var _admin_graph_general_admin_graph_general_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./admin-graph-general/admin-graph-general.component */ "./src/app/admin-graph-general/admin-graph-general.component.ts");
/* harmony import */ var _admin_auth_admin_auth_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./admin-auth/admin-auth.component */ "./src/app/admin-auth/admin-auth.component.ts");
/* harmony import */ var _admin_guard__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./admin.guard */ "./src/app/admin.guard.ts");
/* harmony import */ var _page404_page404_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./page404/page404.component */ "./src/app/page404/page404.component.ts");
/* harmony import */ var _sds_session_guard__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./sds-session.guard */ "./src/app/sds-session.guard.ts");
/* harmony import */ var _new_results_new_results_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./new-results/new-results.component */ "./src/app/new-results/new-results.component.ts");
/* harmony import */ var _archive_archive_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./archive/archive.component */ "./src/app/archive/archive.component.ts");
/* harmony import */ var _admin_settings_admin_settings_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./admin-settings/admin-settings.component */ "./src/app/admin-settings/admin-settings.component.ts");
/* harmony import */ var _print_new_print_new_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./print-new/print-new.component */ "./src/app/print-new/print-new.component.ts");
/* harmony import */ var _archive_new_archive_new_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./archive-new/archive-new.component */ "./src/app/archive-new/archive-new.component.ts");
/* harmony import */ var _print_old_print_old_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./print-old/print-old.component */ "./src/app/print-old/print-old.component.ts");
/* harmony import */ var _archive_old_archive_old_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./archive-old/archive-old.component */ "./src/app/archive-old/archive-old.component.ts");
/* harmony import */ var _admin_messages_admin_messages_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./admin-messages/admin-messages.component */ "./src/app/admin-messages/admin-messages.component.ts");
/* harmony import */ var _admin_events_admin_events_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./admin-events/admin-events.component */ "./src/app/admin-events/admin-events.component.ts");
/* harmony import */ var _privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./privacy-policy/privacy-policy.component */ "./src/app/privacy-policy/privacy-policy.component.ts");
/* harmony import */ var _attendance_attendance_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./attendance/attendance.component */ "./src/app/attendance/attendance.component.ts");
/* harmony import */ var _terms_and_condition_terms_and_condition_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./terms-and-condition/terms-and-condition.component */ "./src/app/terms-and-condition/terms-and-condition.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






























var routes = [
    {
        path: 'home',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    },
    {
        path: 'questions',
        component: _question_question_component__WEBPACK_IMPORTED_MODULE_3__["QuestionComponent"],
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"], _sds_session_guard__WEBPACK_IMPORTED_MODULE_17__["SdsSessionGuard"]]
    },
    {
        path: 'register',
        component: _register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"]
    },
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"]
    },
    {
        path: 'self-estimates',
        component: _estimates_estimates_component__WEBPACK_IMPORTED_MODULE_6__["EstimatesComponent"],
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"], _sds_session_guard__WEBPACK_IMPORTED_MODULE_17__["SdsSessionGuard"]]
    },
    {
        path: 'evaluate',
        component: _evaluate_evaluate_component__WEBPACK_IMPORTED_MODULE_7__["EvaluateComponent"],
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"], _sds_session_guard__WEBPACK_IMPORTED_MODULE_17__["SdsSessionGuard"]]
    },
    {
        path: 'profile',
        component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_8__["ProfileComponent"],
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]]
    },
    {
        path: 'authentication',
        component: _authentication_authentication_component__WEBPACK_IMPORTED_MODULE_9__["AuthenticationComponent"]
    },
    {
        path: 'admin-home',
        component: _admin_home_admin_home_component__WEBPACK_IMPORTED_MODULE_10__["AdminHomeComponent"],
        canActivate: [_admin_guard__WEBPACK_IMPORTED_MODULE_15__["AdminGuard"]]
    },
    {
        path: 'admin-graph-specific',
        component: _admin_graph_admin_graph_component__WEBPACK_IMPORTED_MODULE_11__["AdminGraphComponent"],
        canActivate: [_admin_guard__WEBPACK_IMPORTED_MODULE_15__["AdminGuard"]]
    },
    {
        path: 'admin-graph-general',
        component: _admin_graph_general_admin_graph_general_component__WEBPACK_IMPORTED_MODULE_13__["AdminGraphGeneralComponent"],
        canActivate: [_admin_guard__WEBPACK_IMPORTED_MODULE_15__["AdminGuard"]]
    },
    {
        path: 'admin-auth',
        component: _admin_auth_admin_auth_component__WEBPACK_IMPORTED_MODULE_14__["AdminAuthComponent"]
    },
    {
        path: "admin-print",
        component: _new_results_new_results_component__WEBPACK_IMPORTED_MODULE_18__["NewResultsComponent"],
        canActivate: [_admin_guard__WEBPACK_IMPORTED_MODULE_15__["AdminGuard"]]
    },
    {
        path: "admin-archive",
        component: _archive_archive_component__WEBPACK_IMPORTED_MODULE_19__["ArchiveComponent"],
        canActivate: [_admin_guard__WEBPACK_IMPORTED_MODULE_15__["AdminGuard"]]
    },
    {
        path: "admin-settings",
        component: _admin_settings_admin_settings_component__WEBPACK_IMPORTED_MODULE_20__["AdminSettingsComponent"],
        canActivate: [_admin_guard__WEBPACK_IMPORTED_MODULE_15__["AdminGuard"]]
    },
    {
        path: "admin-new-print",
        component: _print_new_print_new_component__WEBPACK_IMPORTED_MODULE_21__["PrintNewComponent"],
        canActivate: [_admin_guard__WEBPACK_IMPORTED_MODULE_15__["AdminGuard"]]
    },
    {
        path: "admin-new-archive",
        component: _archive_new_archive_new_component__WEBPACK_IMPORTED_MODULE_22__["ArchiveNewComponent"],
        canActivate: [_admin_guard__WEBPACK_IMPORTED_MODULE_15__["AdminGuard"]]
    },
    {
        path: "admin-old-print",
        component: _print_old_print_old_component__WEBPACK_IMPORTED_MODULE_23__["PrintOldComponent"],
        canActivate: [_admin_guard__WEBPACK_IMPORTED_MODULE_15__["AdminGuard"]]
    },
    {
        path: "admin-old-archive",
        component: _archive_old_archive_old_component__WEBPACK_IMPORTED_MODULE_24__["ArchiveOldComponent"],
        canActivate: [_admin_guard__WEBPACK_IMPORTED_MODULE_15__["AdminGuard"]]
    },
    {
        path: "admin-messages",
        component: _admin_messages_admin_messages_component__WEBPACK_IMPORTED_MODULE_25__["AdminMessagesComponent"],
        canActivate: [_admin_guard__WEBPACK_IMPORTED_MODULE_15__["AdminGuard"]]
    },
    {
        path: "admin-events",
        component: _admin_events_admin_events_component__WEBPACK_IMPORTED_MODULE_26__["AdminEventsComponent"],
        canActivate: [_admin_guard__WEBPACK_IMPORTED_MODULE_15__["AdminGuard"]]
    },
    {
        path: "privacy-policy",
        component: _privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_27__["PrivacyPolicyComponent"]
    },
    {
        path: 'terms-condition',
        component: _terms_and_condition_terms_and_condition_component__WEBPACK_IMPORTED_MODULE_29__["TermsAndConditionComponent"]
    },
    {
        path: 'takers-attendance',
        component: _attendance_attendance_component__WEBPACK_IMPORTED_MODULE_28__["AttendanceComponent"]
    },
    {
        path: '404',
        component: _page404_page404_component__WEBPACK_IMPORTED_MODULE_16__["Page404Component"]
    },
    {
        path: '', redirectTo: 'home', pathMatch: "full"
    },
    { path: '**', redirectTo: '404' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

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
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var ng2_semantic_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-semantic-ui */ "./node_modules/ng2-semantic-ui/dist/public.js");
/* harmony import */ var ngx_date_fns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-date-fns */ "./node_modules/ngx-date-fns/fesm5/ngx-date-fns.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony import */ var angular_fusioncharts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular-fusioncharts */ "./node_modules/angular-fusioncharts/index.js");
/* harmony import */ var fusioncharts__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! fusioncharts */ "./node_modules/fusioncharts/fusioncharts.js");
/* harmony import */ var fusioncharts__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(fusioncharts__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var fusioncharts_fusioncharts_charts__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! fusioncharts/fusioncharts.charts */ "./node_modules/fusioncharts/fusioncharts.charts.js");
/* harmony import */ var fusioncharts_fusioncharts_charts__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(fusioncharts_fusioncharts_charts__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-infinite-scroll */ "./node_modules/ngx-infinite-scroll/modules/ngx-infinite-scroll.es5.js");
/* harmony import */ var fusioncharts_themes_fusioncharts_theme_fusion__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! fusioncharts/themes/fusioncharts.theme.fusion */ "./node_modules/fusioncharts/themes/fusioncharts.theme.fusion.js");
/* harmony import */ var fusioncharts_themes_fusioncharts_theme_fusion__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(fusioncharts_themes_fusioncharts_theme_fusion__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _question_question_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./question/question.component */ "./src/app/question/question.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _estimates_estimates_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./estimates/estimates.component */ "./src/app/estimates/estimates.component.ts");
/* harmony import */ var _evaluate_evaluate_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./evaluate/evaluate.component */ "./src/app/evaluate/evaluate.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _authentication_authentication_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./authentication/authentication.component */ "./src/app/authentication/authentication.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _admin_home_admin_home_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./admin-home/admin-home.component */ "./src/app/admin-home/admin-home.component.ts");
/* harmony import */ var _modal_info_info_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./modal/info/info.component */ "./src/app/modal/info/info.component.ts");
/* harmony import */ var _modal_problems_problems_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./modal/problems/problems.component */ "./src/app/modal/problems/problems.component.ts");
/* harmony import */ var _modal_more_info_more_info_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./modal/more-info/more-info.component */ "./src/app/modal/more-info/more-info.component.ts");
/* harmony import */ var _admin_graph_admin_graph_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./admin-graph/admin-graph.component */ "./src/app/admin-graph/admin-graph.component.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");
/* harmony import */ var fusioncharts_themes_fusioncharts_theme_candy__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! fusioncharts/themes/fusioncharts.theme.candy */ "./node_modules/fusioncharts/themes/fusioncharts.theme.candy.js");
/* harmony import */ var fusioncharts_themes_fusioncharts_theme_candy__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(fusioncharts_themes_fusioncharts_theme_candy__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var _admin_graph_general_admin_graph_general_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./admin-graph-general/admin-graph-general.component */ "./src/app/admin-graph-general/admin-graph-general.component.ts");
/* harmony import */ var _admin_auth_admin_auth_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./admin-auth/admin-auth.component */ "./src/app/admin-auth/admin-auth.component.ts");
/* harmony import */ var _admin_guard__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./admin.guard */ "./src/app/admin.guard.ts");
/* harmony import */ var _page404_page404_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./page404/page404.component */ "./src/app/page404/page404.component.ts");
/* harmony import */ var _sds_session_guard__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./sds-session.guard */ "./src/app/sds-session.guard.ts");
/* harmony import */ var _new_results_new_results_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./new-results/new-results.component */ "./src/app/new-results/new-results.component.ts");
/* harmony import */ var _archive_archive_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./archive/archive.component */ "./src/app/archive/archive.component.ts");
/* harmony import */ var _admin_settings_admin_settings_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./admin-settings/admin-settings.component */ "./src/app/admin-settings/admin-settings.component.ts");
/* harmony import */ var _print_new_print_new_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./print-new/print-new.component */ "./src/app/print-new/print-new.component.ts");
/* harmony import */ var _archive_new_archive_new_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./archive-new/archive-new.component */ "./src/app/archive-new/archive-new.component.ts");
/* harmony import */ var _print_old_print_old_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./print-old/print-old.component */ "./src/app/print-old/print-old.component.ts");
/* harmony import */ var _archive_old_archive_old_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./archive-old/archive-old.component */ "./src/app/archive-old/archive-old.component.ts");
/* harmony import */ var _admin_messages_admin_messages_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./admin-messages/admin-messages.component */ "./src/app/admin-messages/admin-messages.component.ts");
/* harmony import */ var _admin_events_admin_events_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./admin-events/admin-events.component */ "./src/app/admin-events/admin-events.component.ts");
/* harmony import */ var _privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./privacy-policy/privacy-policy.component */ "./src/app/privacy-policy/privacy-policy.component.ts");
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./landing/landing.component */ "./src/app/landing/landing.component.ts");
/* harmony import */ var _attendance_attendance_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./attendance/attendance.component */ "./src/app/attendance/attendance.component.ts");
/* harmony import */ var _terms_and_condition_terms_and_condition_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./terms-and-condition/terms-and-condition.component */ "./src/app/terms-and-condition/terms-and-condition.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






 // <-- import the module

























// Load themes



















angular_fusioncharts__WEBPACK_IMPORTED_MODULE_10__["FusionChartsModule"].fcRoot(fusioncharts__WEBPACK_IMPORTED_MODULE_11__, fusioncharts_fusioncharts_charts__WEBPACK_IMPORTED_MODULE_12__, fusioncharts_themes_fusioncharts_theme_fusion__WEBPACK_IMPORTED_MODULE_15__, fusioncharts_themes_fusioncharts_theme_candy__WEBPACK_IMPORTED_MODULE_32__);
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_16__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_17__["HomeComponent"],
                _question_question_component__WEBPACK_IMPORTED_MODULE_18__["QuestionComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_19__["RegisterComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_20__["LoginComponent"],
                _estimates_estimates_component__WEBPACK_IMPORTED_MODULE_21__["EstimatesComponent"],
                _evaluate_evaluate_component__WEBPACK_IMPORTED_MODULE_22__["EvaluateComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_23__["ProfileComponent"],
                _authentication_authentication_component__WEBPACK_IMPORTED_MODULE_24__["AuthenticationComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_25__["HeaderComponent"],
                _admin_home_admin_home_component__WEBPACK_IMPORTED_MODULE_26__["AdminHomeComponent"],
                _modal_info_info_component__WEBPACK_IMPORTED_MODULE_27__["InfoComponent"],
                _modal_problems_problems_component__WEBPACK_IMPORTED_MODULE_28__["ProblemsComponent"],
                _modal_more_info_more_info_component__WEBPACK_IMPORTED_MODULE_29__["MoreInfoComponent"],
                _admin_graph_admin_graph_component__WEBPACK_IMPORTED_MODULE_30__["AdminGraphComponent"],
                _admin_graph_general_admin_graph_general_component__WEBPACK_IMPORTED_MODULE_33__["AdminGraphGeneralComponent"],
                _admin_auth_admin_auth_component__WEBPACK_IMPORTED_MODULE_34__["AdminAuthComponent"],
                _page404_page404_component__WEBPACK_IMPORTED_MODULE_36__["Page404Component"],
                _new_results_new_results_component__WEBPACK_IMPORTED_MODULE_38__["NewResultsComponent"],
                _archive_archive_component__WEBPACK_IMPORTED_MODULE_39__["ArchiveComponent"],
                _admin_settings_admin_settings_component__WEBPACK_IMPORTED_MODULE_40__["AdminSettingsComponent"],
                _print_new_print_new_component__WEBPACK_IMPORTED_MODULE_41__["PrintNewComponent"],
                _archive_new_archive_new_component__WEBPACK_IMPORTED_MODULE_42__["ArchiveNewComponent"],
                _print_old_print_old_component__WEBPACK_IMPORTED_MODULE_43__["PrintOldComponent"],
                _archive_old_archive_old_component__WEBPACK_IMPORTED_MODULE_44__["ArchiveOldComponent"],
                _admin_messages_admin_messages_component__WEBPACK_IMPORTED_MODULE_45__["AdminMessagesComponent"],
                _admin_events_admin_events_component__WEBPACK_IMPORTED_MODULE_46__["AdminEventsComponent"],
                _privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_47__["PrivacyPolicyComponent"],
                _landing_landing_component__WEBPACK_IMPORTED_MODULE_48__["LandingComponent"],
                _attendance_attendance_component__WEBPACK_IMPORTED_MODULE_49__["AttendanceComponent"],
                _terms_and_condition_terms_and_condition_component__WEBPACK_IMPORTED_MODULE_50__["TermsAndConditionComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                ng2_semantic_ui__WEBPACK_IMPORTED_MODULE_7__["SuiModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_6__["NgxPaginationModule"],
                angular_fusioncharts__WEBPACK_IMPORTED_MODULE_10__["FusionChartsModule"],
                ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_14__["InfiniteScrollModule"],
                _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_9__["ScrollingModule"],
                ngx_date_fns__WEBPACK_IMPORTED_MODULE_8__["DateFnsModule"].forRoot()
            ],
            providers: [_auth_guard__WEBPACK_IMPORTED_MODULE_31__["AuthGuard"], _admin_guard__WEBPACK_IMPORTED_MODULE_35__["AdminGuard"], _sds_session_guard__WEBPACK_IMPORTED_MODULE_37__["SdsSessionGuard"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_16__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());

Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_13__["platformBrowserDynamic"])().bootstrapModule(AppModule);


/***/ }),

/***/ "./src/app/archive-new/archive-new.component.css":
/*!*******************************************************!*\
  !*** ./src/app/archive-new/archive-new.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url('https://fonts.googleapis.com/css?family=Staatliches');\r\nh4,h5{\r\n    margin:0;\r\n    font-family: 'Staatliches', cursive;\r\n}\r\nh3{\r\n    margin: 0 0 0 0;\r\n    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\r\n}\r\n.printContent{\r\n    width:940px;\r\n    height:100vh;\r\n    page-break-inside:avoid !important;\r\n}\r\n@media print {\r\n    #message{\r\n        color:black;\r\n    }\r\n    #print_header{\r\n        letter-spacing:0.2em;font-weight: bold;color:grey !important; \r\n    }\r\n    .ui.progress {\r\n        background-image: none;\r\n        -webkit-print-color-adjust: exact;\r\n        box-shadow: inset 0 0;\r\n        -webkit-box-shadow: inset 0 0;\r\n      \r\n      \r\n      }\r\n    \r\n      h4,h5{\r\n        font-family: 'Staatliches', cursive;\r\n    }\r\n      h3{\r\n      font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\r\n  }\r\n    html, body {\r\n      /*changing width to 100% causes huge overflow and wrap*/\r\n      height:100%; \r\n      background: #FFF; \r\n      font-size: 9pt;\r\n      font-family: Staatliches;\r\n    }\r\n    table{\r\n        page-break-inside: avoid;\r\n    }\r\n    \r\n  \r\n\r\n  }\r\n.onepage {\r\n    page-break-after: always;\r\n  }\r\n.onepage:last-child {\r\n    page-break-after: avoid;\r\n  }\r\n:host::ng-deep.ui.progress .label{\r\n    font-size: 1.2em;\r\n}\r\n:host::ng-deep.ui.progress#R .label{\r\n    color:#F1463C !important;\r\n}\r\n:host::ng-deep.ui.progress#I .label{\r\n    color:#F79517 !important; \r\n}\r\n:host::ng-deep.ui.progress#A .label{\r\n    color:#FFCF00 !important; \r\n}\r\n:host::ng-deep.ui.progress#S .label{\r\n    color:#01723B !important; \r\n}\r\n:host::ng-deep.ui.progress#E .label{\r\n    color:#0073A5 !important; \r\n}\r\n:host::ng-deep.ui.progress#C .label{\r\n    color:#9279B7 !important; \r\n}\r\n:host::ng-deep.ui.progress#R .bar{\r\n    background:#F1463C !important;\r\n}\r\n:host::ng-deep.ui.progress#I .bar{\r\n    background:#F79517 !important; \r\n}\r\n:host::ng-deep.ui.progress#A .bar{\r\n    background:#FFCF00 !important; \r\n}\r\n:host::ng-deep.ui.progress#S .bar{\r\n    background:#01723B !important; \r\n}\r\n:host::ng-deep.ui.progress#E .bar{\r\n    background:#0073A5 !important; \r\n}\r\n:host::ng-deep.ui.progress#C .bar{\r\n    background:#9279B7 !important; \r\n}\r\n.code-rate{\r\n    padding: 10px;\r\n}\r\n.image-icon{\r\n    margin:5px;\r\n}\r\n#try {\r\n    -webkit-clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);\r\n    clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);\r\n }\r\n.containerBox {\r\n    position: relative;\r\n    text-align: center;\r\n    color: black;\r\n}\r\n.center-text {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%);\r\n  }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXJjaGl2ZS1uZXcvYXJjaGl2ZS1uZXcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxtRUFBbUU7QUFDbkU7SUFDSSxTQUFTO0lBQ1Qsb0NBQW9DO0NBQ3ZDO0FBQ0Q7SUFDSSxnQkFBZ0I7SUFDaEIsdUhBQXVIO0NBQzFIO0FBQ0Q7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLG1DQUFtQztDQUN0QztBQUtEO0lBQ0k7UUFDSSxZQUFZO0tBQ2Y7SUFDRDtRQUNJLHFCQUFxQixrQkFBa0Isc0JBQXNCO0tBQ2hFO0lBQ0Q7UUFDSSx1QkFBdUI7UUFDdkIsa0NBQWtDO1FBQ2xDLHNCQUFzQjtRQUN0Qiw4QkFBOEI7OztPQUcvQjs7TUFFRDtRQUNFLG9DQUFvQztLQUN2QztNQUNDO01BQ0EsdUhBQXVIO0dBQzFIO0lBQ0M7TUFDRSx3REFBd0Q7TUFDeEQsWUFBWTtNQUNaLGlCQUFpQjtNQUNqQixlQUFlO01BQ2YseUJBQXlCO0tBQzFCO0lBQ0Q7UUFDSSx5QkFBeUI7S0FDNUI7Ozs7R0FJRjtBQUVEO0lBQ0UseUJBQXlCO0dBQzFCO0FBRUQ7SUFDRSx3QkFBd0I7R0FDekI7QUFJSDtJQUNJLGlCQUFpQjtDQUNwQjtBQUVEO0lBQ0kseUJBQXlCO0NBQzVCO0FBQ0Q7SUFDSSx5QkFBeUI7Q0FDNUI7QUFDRDtJQUNJLHlCQUF5QjtDQUM1QjtBQUNEO0lBQ0kseUJBQXlCO0NBQzVCO0FBQ0Q7SUFDSSx5QkFBeUI7Q0FDNUI7QUFDRDtJQUNJLHlCQUF5QjtDQUM1QjtBQUtEO0lBQ0ksOEJBQThCO0NBQ2pDO0FBQ0Q7SUFDSSw4QkFBOEI7Q0FDakM7QUFDRDtJQUNJLDhCQUE4QjtDQUNqQztBQUNEO0lBQ0ksOEJBQThCO0NBQ2pDO0FBQ0Q7SUFDSSw4QkFBOEI7Q0FDakM7QUFDRDtJQUNJLDhCQUE4QjtDQUNqQztBQUVEO0lBQ0ksY0FBYztDQUNqQjtBQUVEO0lBQ0ksV0FBVztDQUNkO0FBRUE7SUFDRyxpRkFBaUY7SUFDakYseUVBQXlFO0VBQzNFO0FBT0Q7SUFDRyxtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGFBQWE7Q0FDaEI7QUFDRDtJQUNJLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsVUFBVTtJQUNWLHlDQUFpQztZQUFqQyxpQ0FBaUM7R0FDbEMiLCJmaWxlIjoic3JjL2FwcC9hcmNoaXZlLW5ldy9hcmNoaXZlLW5ldy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1TdGFhdGxpY2hlcycpO1xyXG5oNCxoNXtcclxuICAgIG1hcmdpbjowO1xyXG4gICAgZm9udC1mYW1pbHk6ICdTdGFhdGxpY2hlcycsIGN1cnNpdmU7XHJcbn1cclxuaDN7XHJcbiAgICBtYXJnaW46IDAgMCAwIDA7XHJcbiAgICBmb250LWZhbWlseTogJ0x1Y2lkYSBTYW5zJywgJ0x1Y2lkYSBTYW5zIFJlZ3VsYXInLCAnTHVjaWRhIEdyYW5kZScsICdMdWNpZGEgU2FucyBVbmljb2RlJywgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xyXG59XHJcbi5wcmludENvbnRlbnR7XHJcbiAgICB3aWR0aDo5NDBweDtcclxuICAgIGhlaWdodDoxMDB2aDtcclxuICAgIHBhZ2UtYnJlYWstaW5zaWRlOmF2b2lkICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbkBtZWRpYSBwcmludCB7XHJcbiAgICAjbWVzc2FnZXtcclxuICAgICAgICBjb2xvcjpibGFjaztcclxuICAgIH1cclxuICAgICNwcmludF9oZWFkZXJ7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6MC4yZW07Zm9udC13ZWlnaHQ6IGJvbGQ7Y29sb3I6Z3JleSAhaW1wb3J0YW50OyBcclxuICAgIH1cclxuICAgIC51aS5wcm9ncmVzcyB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcclxuICAgICAgICAtd2Via2l0LXByaW50LWNvbG9yLWFkanVzdDogZXhhY3Q7XHJcbiAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAwO1xyXG4gICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwO1xyXG4gICAgICBcclxuICAgICAgXHJcbiAgICAgIH1cclxuICAgIFxyXG4gICAgICBoNCxoNXtcclxuICAgICAgICBmb250LWZhbWlseTogJ1N0YWF0bGljaGVzJywgY3Vyc2l2ZTtcclxuICAgIH1cclxuICAgICAgaDN7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAnTHVjaWRhIFNhbnMnLCAnTHVjaWRhIFNhbnMgUmVndWxhcicsICdMdWNpZGEgR3JhbmRlJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XHJcbiAgfVxyXG4gICAgaHRtbCwgYm9keSB7XHJcbiAgICAgIC8qY2hhbmdpbmcgd2lkdGggdG8gMTAwJSBjYXVzZXMgaHVnZSBvdmVyZmxvdyBhbmQgd3JhcCovXHJcbiAgICAgIGhlaWdodDoxMDAlOyBcclxuICAgICAgYmFja2dyb3VuZDogI0ZGRjsgXHJcbiAgICAgIGZvbnQtc2l6ZTogOXB0O1xyXG4gICAgICBmb250LWZhbWlseTogU3RhYXRsaWNoZXM7XHJcbiAgICB9XHJcbiAgICB0YWJsZXtcclxuICAgICAgICBwYWdlLWJyZWFrLWluc2lkZTogYXZvaWQ7XHJcbiAgICB9XHJcbiAgICBcclxuICBcclxuXHJcbiAgfVxyXG5cclxuICAub25lcGFnZSB7XHJcbiAgICBwYWdlLWJyZWFrLWFmdGVyOiBhbHdheXM7XHJcbiAgfVxyXG4gIFxyXG4gIC5vbmVwYWdlOmxhc3QtY2hpbGQge1xyXG4gICAgcGFnZS1icmVhay1hZnRlcjogYXZvaWQ7XHJcbiAgfVxyXG5cclxuXHJcblxyXG46aG9zdDo6bmctZGVlcC51aS5wcm9ncmVzcyAubGFiZWx7XHJcbiAgICBmb250LXNpemU6IDEuMmVtO1xyXG59XHJcblxyXG46aG9zdDo6bmctZGVlcC51aS5wcm9ncmVzcyNSIC5sYWJlbHtcclxuICAgIGNvbG9yOiNGMTQ2M0MgIWltcG9ydGFudDtcclxufVxyXG46aG9zdDo6bmctZGVlcC51aS5wcm9ncmVzcyNJIC5sYWJlbHtcclxuICAgIGNvbG9yOiNGNzk1MTcgIWltcG9ydGFudDsgXHJcbn1cclxuOmhvc3Q6Om5nLWRlZXAudWkucHJvZ3Jlc3MjQSAubGFiZWx7XHJcbiAgICBjb2xvcjojRkZDRjAwICFpbXBvcnRhbnQ7IFxyXG59XHJcbjpob3N0OjpuZy1kZWVwLnVpLnByb2dyZXNzI1MgLmxhYmVse1xyXG4gICAgY29sb3I6IzAxNzIzQiAhaW1wb3J0YW50OyBcclxufVxyXG46aG9zdDo6bmctZGVlcC51aS5wcm9ncmVzcyNFIC5sYWJlbHtcclxuICAgIGNvbG9yOiMwMDczQTUgIWltcG9ydGFudDsgXHJcbn1cclxuOmhvc3Q6Om5nLWRlZXAudWkucHJvZ3Jlc3MjQyAubGFiZWx7XHJcbiAgICBjb2xvcjojOTI3OUI3ICFpbXBvcnRhbnQ7IFxyXG59XHJcblxyXG5cclxuXHJcblxyXG46aG9zdDo6bmctZGVlcC51aS5wcm9ncmVzcyNSIC5iYXJ7XHJcbiAgICBiYWNrZ3JvdW5kOiNGMTQ2M0MgIWltcG9ydGFudDtcclxufVxyXG46aG9zdDo6bmctZGVlcC51aS5wcm9ncmVzcyNJIC5iYXJ7XHJcbiAgICBiYWNrZ3JvdW5kOiNGNzk1MTcgIWltcG9ydGFudDsgXHJcbn1cclxuOmhvc3Q6Om5nLWRlZXAudWkucHJvZ3Jlc3MjQSAuYmFye1xyXG4gICAgYmFja2dyb3VuZDojRkZDRjAwICFpbXBvcnRhbnQ7IFxyXG59XHJcbjpob3N0OjpuZy1kZWVwLnVpLnByb2dyZXNzI1MgLmJhcntcclxuICAgIGJhY2tncm91bmQ6IzAxNzIzQiAhaW1wb3J0YW50OyBcclxufVxyXG46aG9zdDo6bmctZGVlcC51aS5wcm9ncmVzcyNFIC5iYXJ7XHJcbiAgICBiYWNrZ3JvdW5kOiMwMDczQTUgIWltcG9ydGFudDsgXHJcbn1cclxuOmhvc3Q6Om5nLWRlZXAudWkucHJvZ3Jlc3MjQyAuYmFye1xyXG4gICAgYmFja2dyb3VuZDojOTI3OUI3ICFpbXBvcnRhbnQ7IFxyXG59XHJcblxyXG4uY29kZS1yYXRle1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuLmltYWdlLWljb257XHJcbiAgICBtYXJnaW46NXB4O1xyXG59XHJcblxyXG4gI3RyeSB7XHJcbiAgICAtd2Via2l0LWNsaXAtcGF0aDogcG9seWdvbig1MCUgMCUsIDEwMCUgMjUlLCAxMDAlIDc1JSwgNTAlIDEwMCUsIDAlIDc1JSwgMCUgMjUlKTtcclxuICAgIGNsaXAtcGF0aDogcG9seWdvbig1MCUgMCUsIDEwMCUgMjUlLCAxMDAlIDc1JSwgNTAlIDEwMCUsIDAlIDc1JSwgMCUgMjUlKTtcclxuIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuIC5jb250YWluZXJCb3gge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcbi5jZW50ZXItdGV4dCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIH1cclxuIl19 */"

/***/ }),

/***/ "./src/app/archive-new/archive-new.component.html":
/*!********************************************************!*\
  !*** ./src/app/archive-new/archive-new.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!isSinglePrinting && !isNewPrinting\">\n  <div class=\"ui top attached demo menu\">\n    <a class=\"item\" (click)=\"sidebar.toggle()\">\n      <i class=\"sidebar icon\"></i>\n    </a>\n    <div class=\"right menu\">\n      <div class=\"item\">\n        <div class=\"ui blue button\" (click)=\"logout()\">Logout</div>\n      </div>\n    </div>\n  </div>\n\n  <sui-sidebar-container class=\"ui bottom attached segment\">\n    <sui-sidebar class=\"vertical\" #sidebar>\n      <a class=\"item \" routerLink=\"/admin-home\">\n        Home\n      </a>\n      <a class=\"item\" routerLink=\"/takers-attendance\">\n        Attendance\n      </a>\n      <a class=\"item\" routerLink=\"/admin-graph-specific\">\n        Specific Reports\n      </a>\n      <a class=\"item\" routerLink=\"/admin-graph-general\">\n        General Reports\n      </a>\n      <a class=\"item\" routerLink=\"/admin-new-print\">\n        Print Section\n      </a>\n      <a class=\"item active\" routerLink=\"/admin-new-archive\">\n        Archive Section\n      </a>\n      <a class=\"item\" routerLink=\"/admin-settings\">\n        Accounts Settings\n      </a>\n      <a class=\"item\" routerLink=\"/admin-events\">\n        Events\n      </a>\n      <a class=\"item\" routerLink=\"/admin-messages\">\n        Messages\n      </a>\n    </sui-sidebar>\n\n    <sui-sidebar-sibling [isDimmedWhenVisible]=\"true\">\n      <div class=\"ui basic segment container\">\n        <h2 class=\"ui center aligned icon header\">\n          <i class=\"circular archive icon\"></i>\n          Archive Section\n\n          <div class=\"sub header\">This page is for handling printed self-directed-search result of every student</div>\n        </h2>\n\n        <div class=\"ui info message\">\n          <div class=\"header\">\n            Some of the action you can do in this section\n          </div>\n          <ul class=\"list\">\n\n            <li> You can individually print the result(s) by clicking the \"View result\" button once the modal is\n              open\n              you will see the print button on the upper right corner of the modal</li>\n          </ul>\n        </div>\n        <br>\n        <div class=\"ui input\" style=\"float:right\">\n          <input type=\"text\" placeholder=\"Search...\" (input)=\"onSearchChange($event.target.value)\">\n        </div>\n        <div class=\"ui huge header center aligned\" *ngIf=\"noResult\">No printed self-directed-search result</div>\n        <table class=\"ui celled table\" *ngIf=\"!noResult\">\n          <thead>\n            <tr>\n              <th>Name</th>\n              <th>Username</th>\n              <th>Actions</th>\n            </tr>\n          </thead>\n\n          <tbody>\n            <tr *ngFor=\"let item of oldResultData | paginate: { itemsPerPage: 10, currentPage: page } ; let i = index\">\n              <td>{{item.name}}</td>\n              <td>{{item.username}}</td>\n              <td>\n                <div class=\"center\">\n                  <button class=\"ui blue button\"\n                    (click)=\"viewSingleResult(item.id, item.name, item.summary_code,item.timestamp)\">\n                    View result\n                  </button>\n                </div>\n              </td>\n            </tr>\n          </tbody>\n\n          <tfoot>\n            <tr>\n              <th colspan=\"5\">\n                <div class=\"ui right floated pagination menu\">\n                  <a></a>\n                  <pagination-controls (pageChange)=\"page = $event\"></pagination-controls>\n                </div>\n              </th>\n            </tr>\n          </tfoot>\n        </table>\n      </div>\n\n\n    </sui-sidebar-sibling>\n  </sui-sidebar-container>\n</div>\n<!-- View single result modal -->\n<sui-modal [isClosable]=\"true\" (dismissed)=\"resultModal = false\" *ngIf=\"resultModal && !isSinglePrinting\" #mymodal>\n  <div class=\"header\">\n    <div class=\"ui form\">\n      <div class=\"two fields\">\n        <div class=\"field\">\n          <label>Recommendation</label>\n          <textarea rows=\"2\" #recommendation maxlength=\"500\"></textarea>\n        </div>\n        <div class=\"field\">\n          <label>Psychometrician</label>\n          <input type=\"text\" name=\"psychometrician\" #psychometrician>\n        </div>\n      </div>\n    </div>\n    <div class=\"right\">\n      <button class=\"ui labeled icon button blue\"\n        (click)=\"printNewSingleResult(singleResultId,recommendation.value,psychometrician.value);\">\n        <i class=\"print icon\"></i>\n        Print\n      </button>\n    </div>\n  </div>\n  <div class=\"content\">\n\n    <div class=\"ui\">\n      <div class=\"ui segment\" *ngFor=\"let code of singleResultData\">\n        <a class=\"ui red right ribbon label large\">{{code.name}}</a>\n        <div *ngFor=\"let indivCode of code.result\">\n          <div class=\"ui divided items\">\n            <div class=\"item\">\n              <div class=\"content\">\n                <a class=\"header\">{{indivCode.occupation}}</a>\n                <div class=\"description\">\n                  <p>{{indivCode.description}}</p>\n                </div>\n\n                <div class=\"extra\">\n                  <a href=\"{{indivCode.link}}\" class=\"ui right floated blue button\">\n                    See more details here\n                    <i class=\"right chevron icon\"></i>\n                  </a>\n                </div>\n\n                <hr>\n              </div>\n            </div>\n          </div>\n        </div>\n\n      </div>\n    </div>\n\n  </div>\n  <div class=\"actions\">\n    <button class=\"ui red button\" (click)=\"mymodal.deny()\">Close</button>\n  </div>\n\n</sui-modal>\n\n<!-- Single Print -->\n<div class=\"newPrint\" *ngIf=\"isNewPrinting\">\n  <div class=\"ui active dimmer\" *ngIf=\"loader\">\n    <div class=\"ui massive text loader\">Loading</div>\n  </div>\n  <div class=\"head\">\n    <div style=\"margin-bottom:10px;padding-right:20px;padding-left:20px;\">\n      <div id=\"logo_header\" class=\"ui\">\n        <img src=\"assets/images/gclogoprint.png\" class=\"ui mini left floated image\" alt=\"\">\n        <img src=\"assets/icons/riasec-logo.png\" class=\"ui mini right floated image\" alt=\"\">\n      </div>\n      <h4 class=\"center\" style=\"font-weight:bolder\">GORDON COLLEGE</h4>\n      <h4 class=\"center\" style=\"font-weight:bolder\">STUDENT WELFARE OFFICE</h4>\n      <p class=\"center\" style=\"font-weight:bold\">Tapinac Oval Sports Complex, East Tapinac, Olongapo City</p>\n\n    </div>\n  </div>\n  <div class=\"body\">\n\n    <div style=\"margin-left:20px; margin-right:20px;\">\n      <hr>\n      <div class=\"ui black\" id=\"message\">\n        {{singleResultName}}\n        <span style=\"float:right\">{{dateNow}}</span>\n      </div>\n    </div>\n    <h3 style=\"margin-top:0;margin-bottom:5px;\" class=\"center container\" id=\"print_header\">OFFICIAL RESULT</h3>\n    <div class=\"ui grid\" style=\"margin-left:20px; margin-right:20px;\">\n      <div class=\"eight wide column\">\n        <div class=\"ui segment\">\n          <div class=\"code-rate\" *ngFor=\"let letter of riasec;let i = index;\">\n            <img src=\"assets/icons/{{letter.letter}}_icon.png\" alt=\"\" class=\"ui centered mini image image-icon\">\n\n            <sui-progress id=\"{{letter.letter}}\" [value]=\"letter.value\" [maximum]=\"max[i]\">\n              {{letter.word}}\n\n            </sui-progress>\n          </div>\n\n\n        </div>\n      </div>\n      <div class=\"eight wide column\">\n        <div class=\"ui card\" style=\"width:100%;height:100%;\">\n          <div class=\"content\">\n\n            <h3 class=\"ui header center bolder\">My Summary Code</h3>\n            <div class=\"containerBox\">\n\n              <img src=\"assets/icons/riasec-logo.png\" class=\"img-summary\" alt=\"\" width=\"200\" height=\"200\">\n              <div class=\"center-text\">\n                <span *ngFor=\"let code of summaryCode\" style=\"font-weight:bolder;font-size:1.5em\"\n                  [ngStyle]=\"{'color': true ? getColor(code.letter) : ''}\">\n                  {{code.letter}}\n                </span>\n              </div>\n            </div>\n\n            <div *ngFor=\"let code of summaryCode\">\n              <div class=\"ui divider\"></div>\n              <img class=\"ui middle aligned tiny image\" src=\"assets/icons/{{code.letter}}_icon.png\">\n              <span style=\"font-weight: bolder; font-size:1.5em; margin-left: 10px;letter-spacing: 3px;\"\n                [ngStyle]=\"{'color': true ? getColor(code.letter) : ''}\">\n                {{code.word}}</span>\n            </div>\n\n\n\n\n\n            <div class=\"ui tiny message\">\n              <p style=\"font-style:italic\">Note: You can use your summary code to search all of the occupation(s)\n                available on your code\n                in https://www.onetonline.org/ </p>\n            </div>\n          </div>\n        </div>\n\n      </div>\n    </div>\n    <div style=\"margin-left:20px; margin-right:20px;margin-top:5px;\">\n      <div class=\"ui gray message\" id=\"message\" style=\"font-size:.8em;font-style: italic\">\n        Recommendation: {{recommendation}}\n      </div>\n      <br>\n      <div class=\"right\">\n        <div class=\"ui mini statistic\">\n          <div class=\"value\" style=\"font-size:.8em !important\">\n            {{psychometrician}}\n          </div>\n          <div class=\"label\" style=\"border-top:black solid 1px;font-size:.6em\">\n            Psychometrician\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/archive-new/archive-new.component.ts":
/*!******************************************************!*\
  !*** ./src/app/archive-new/archive-new.component.ts ***!
  \******************************************************/
/*! exports provided: ArchiveNewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArchiveNewComponent", function() { return ArchiveNewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_admin_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/admin.service */ "./src/app/services/admin.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ArchiveNewComponent = /** @class */ (function () {
    function ArchiveNewComponent(adminService, router) {
        this.adminService = adminService;
        this.router = router;
        this.noResult = false;
        this.page = 1;
        this.loader = false;
        this.dateNow = new Date().toLocaleDateString();
        this.riasec = Array.apply(null, Array());
        this.summaryCode = Array.apply(null, Array());
        this.max = [55, 56, 56, 56, 56, 56];
        this.resultModal = false;
        this.isSinglePrinting = false;
        this.isNewPrinting = false;
    }
    ArchiveNewComponent.prototype.ngOnInit = function () {
        this.getOldResults();
    };
    ArchiveNewComponent.prototype.onSearchChange = function (searchValue) {
        var _this = this;
        this.adminService.dynamicSearch("new-archive", searchValue).subscribe(function (successData) {
            if (successData.length == 0) {
                _this.noResult = true;
            }
            else {
                _this.oldResultData = successData;
                console.log(_this.oldResultData);
                _this.noResult = false;
            }
        }, function (error) { return console.log(error); });
    };
    ArchiveNewComponent.prototype.getOldResults = function () {
        var _this = this;
        this.adminService.getOldResults().subscribe(function (successData) {
            if (successData.length == 0) {
                _this.noResult = true;
            }
            else {
                _this.oldResultData = successData;
                console.log(_this.oldResultData);
                _this.noResult = false;
            }
        }, function (error) { return console.log(error); });
    };
    ArchiveNewComponent.prototype.viewSingleResult = function (i, name, summary_code, timestamp) {
        var _this = this;
        // console.log(i)
        //Get Sds result
        this.adminService.getMySDS(i).subscribe(function (successData) {
            console.log(successData);
            _this.dateNow = timestamp.split("T")[0];
            console.log(_this.dateNow);
            _this.singleResultData = successData;
            _this.singleResultName = name;
            _this.singleResultId = i;
            _this.singleResultCode = summary_code;
            // console.log(this.singleResultCode)
            //Open the modal
            _this.resultModal = true;
        }, function (error) { return console.log(error); });
    };
    ArchiveNewComponent.prototype.printNewSingleResult = function (i, recommendation, psychometrician) {
        var _this = this;
        if (recommendation != "" && psychometrician != "") {
            this.riasec = [];
            this.summaryCode = [];
            this.loader = true;
            this.isNewPrinting = true;
            this.resultModal = false;
            this.recommendation = recommendation;
            this.psychometrician = psychometrician;
            //Get RIASEC Result
            this.adminService.getLetters(i).subscribe(function (successData) {
                _this.riasec = successData.sort(function (a, b) { return b.value - a.value; });
                // Get the summary code
                for (var i_1 = 0; i_1 < 3; i_1++) {
                    _this.summaryCode.push(_this.riasec[i_1]);
                }
                _this.loader = false;
                setTimeout(function () { return window.print(); }, 500);
                setTimeout(function () { return _this.isNewPrinting = false; }, 1000);
                // console.log(this.summaryCode)
            }, function (error) { return console.log(error); });
        }
        else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()({
                title: "Please fill all fields",
                type: "warning"
            });
        }
    };
    ArchiveNewComponent.prototype.logout = function () {
        localStorage.clear();
        this.router.navigate(["/admin-auth"]);
    };
    ArchiveNewComponent.prototype.getColor = function (letter) {
        if (letter == "R") {
            return "#F1463C";
        }
        else if (letter == "I") {
            return "#F79517";
        }
        else if (letter == "A") {
            return "#FFCF00";
        }
        else if (letter == "S") {
            return "#01723B";
        }
        else if (letter == "E") {
            return "#0073A5";
        }
        else {
            return "#9279B7";
        }
    };
    ArchiveNewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-archive-new',
            template: __webpack_require__(/*! ./archive-new.component.html */ "./src/app/archive-new/archive-new.component.html"),
            styles: [__webpack_require__(/*! ./archive-new.component.css */ "./src/app/archive-new/archive-new.component.css")]
        }),
        __metadata("design:paramtypes", [_services_admin_service__WEBPACK_IMPORTED_MODULE_1__["AdminService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ArchiveNewComponent);
    return ArchiveNewComponent;
}());



/***/ }),

/***/ "./src/app/archive-old/archive-old.component.css":
/*!*******************************************************!*\
  !*** ./src/app/archive-old/archive-old.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url('https://fonts.googleapis.com/css?family=Staatliches');\r\nh4,h5{\r\n    margin:0;\r\n    font-family: 'Staatliches', cursive;\r\n}\r\nh3{\r\n    margin: 0 0 0 0;\r\n    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\r\n}\r\n.printContent{\r\n    width:100vw;\r\n    height:100vh;\r\n    page-break-inside:avoid !important;\r\n}\r\n@media print {\r\n    * { margin: 1px !important;  }\r\n    html, body {\r\n      /*changing width to 100% causes huge overflow and wrap*/\r\n      height:100%; \r\n      overflow: hidden;\r\n      background: #FFF; \r\n      font-size: 9pt;\r\n    }\r\n    table{\r\n        page-break-inside: avoid;\r\n    }\r\n    \r\n  \r\n    .template { width: auto; left:0; top:0; }\r\n\r\n  }\r\n.onepage {\r\n    page-break-after: always;\r\n  }\r\n.onepage:last-child {\r\n    page-break-after: avoid;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXJjaGl2ZS1vbGQvYXJjaGl2ZS1vbGQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxtRUFBbUU7QUFDbkU7SUFDSSxTQUFTO0lBQ1Qsb0NBQW9DO0NBQ3ZDO0FBQ0Q7SUFDSSxnQkFBZ0I7SUFDaEIsdUhBQXVIO0NBQzFIO0FBQ0Q7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLG1DQUFtQztDQUN0QztBQUdEO0lBQ0ksSUFBSSx1QkFBdUIsR0FBRztJQUM5QjtNQUNFLHdEQUF3RDtNQUN4RCxZQUFZO01BQ1osaUJBQWlCO01BQ2pCLGlCQUFpQjtNQUNqQixlQUFlO0tBQ2hCO0lBQ0Q7UUFDSSx5QkFBeUI7S0FDNUI7OztJQUdELFlBQVksWUFBWSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUU7O0dBRTFDO0FBQ0Q7SUFDRSx5QkFBeUI7R0FDMUI7QUFFRDtJQUNFLHdCQUF3QjtHQUN6QiIsImZpbGUiOiJzcmMvYXBwL2FyY2hpdmUtb2xkL2FyY2hpdmUtb2xkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVN0YWF0bGljaGVzJyk7XHJcbmg0LGg1e1xyXG4gICAgbWFyZ2luOjA7XHJcbiAgICBmb250LWZhbWlseTogJ1N0YWF0bGljaGVzJywgY3Vyc2l2ZTtcclxufVxyXG5oM3tcclxuICAgIG1hcmdpbjogMCAwIDAgMDtcclxuICAgIGZvbnQtZmFtaWx5OiAnTHVjaWRhIFNhbnMnLCAnTHVjaWRhIFNhbnMgUmVndWxhcicsICdMdWNpZGEgR3JhbmRlJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XHJcbn1cclxuLnByaW50Q29udGVudHtcclxuICAgIHdpZHRoOjEwMHZ3O1xyXG4gICAgaGVpZ2h0OjEwMHZoO1xyXG4gICAgcGFnZS1icmVhay1pbnNpZGU6YXZvaWQgIWltcG9ydGFudDtcclxufVxyXG5cclxuXHJcbkBtZWRpYSBwcmludCB7XHJcbiAgICAqIHsgbWFyZ2luOiAxcHggIWltcG9ydGFudDsgIH1cclxuICAgIGh0bWwsIGJvZHkge1xyXG4gICAgICAvKmNoYW5naW5nIHdpZHRoIHRvIDEwMCUgY2F1c2VzIGh1Z2Ugb3ZlcmZsb3cgYW5kIHdyYXAqL1xyXG4gICAgICBoZWlnaHQ6MTAwJTsgXHJcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgIGJhY2tncm91bmQ6ICNGRkY7IFxyXG4gICAgICBmb250LXNpemU6IDlwdDtcclxuICAgIH1cclxuICAgIHRhYmxle1xyXG4gICAgICAgIHBhZ2UtYnJlYWstaW5zaWRlOiBhdm9pZDtcclxuICAgIH1cclxuICAgIFxyXG4gIFxyXG4gICAgLnRlbXBsYXRlIHsgd2lkdGg6IGF1dG87IGxlZnQ6MDsgdG9wOjA7IH1cclxuXHJcbiAgfVxyXG4gIC5vbmVwYWdlIHtcclxuICAgIHBhZ2UtYnJlYWstYWZ0ZXI6IGFsd2F5cztcclxuICB9XHJcbiAgXHJcbiAgLm9uZXBhZ2U6bGFzdC1jaGlsZCB7XHJcbiAgICBwYWdlLWJyZWFrLWFmdGVyOiBhdm9pZDtcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/archive-old/archive-old.component.html":
/*!********************************************************!*\
  !*** ./src/app/archive-old/archive-old.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!isSinglePrinting\">\n  <div class=\"ui top attached demo menu\">\n    <a class=\"item\" (click)=\"sidebar.toggle()\">\n      <i class=\"sidebar icon\"></i>\n    </a>\n    <div class=\"right menu\">\n      <div class=\"item\">\n        <div class=\"ui blue button\" (click)=\"logout()\">Logout</div>\n      </div>\n    </div>\n  </div>\n\n  <sui-sidebar-container class=\"ui bottom attached segment\">\n    <sui-sidebar class=\"vertical\" #sidebar>\n      <a class=\"item\" routerLink=\"/admin/home\">\n        Home\n      </a>\n      <a class=\"item\" routerLink=\"/takers-attendance\">\n        Attendance\n      </a>\n      <a class=\"item\" routerLink=\"/admin/graph/specific\">\n        Specific Reports\n      </a>\n      <a class=\"item\" routerLink=\"/admin/graph/general\">\n        General Reports\n      </a>\n      <a class=\"item\" routerLink=\"/admin/old-print\">\n        Print Section\n        <div class=\"ui grey horizontal label\">Old</div>\n      </a>\n      <a class=\"item active\" routerLink=\"/admin/old-archive\">\n        Archive Section\n        <div class=\"ui grey horizontal label\">Old</div>\n      </a>\n      <a class=\"item\" routerLink=\"/admin/print\">\n        Print Section\n        <div class=\"ui grey horizontal label\">New</div>\n      </a>\n      <a class=\"item\" routerLink=\"/admin/new-print\">\n        Print Section\n        <div class=\"ui red horizontal label\">New</div>\n      </a>\n      <a class=\"item\" routerLink=\"/admin/archive\">\n        Archive Section\n        <div class=\"ui grey horizontal label\">New</div>\n      </a>\n      <a class=\"item\" routerLink=\"/admin/new-archive\">\n        Archive Section\n        <div class=\"ui red horizontal label\">New</div>\n      </a>\n      <a class=\"item\" routerLink=\"/admin/settings\">\n        Accounts Settings\n      </a>\n    </sui-sidebar>\n\n    <sui-sidebar-sibling [isDimmedWhenVisible]=\"true\">\n      <div class=\"ui basic segment container\">\n        <h2 class=\"ui center aligned icon header\">\n          <i class=\"circular archive icon\"></i>\n          Archive Section\n\n          <div class=\"sub header\">This page is for handling printed self-directed-search result of every student</div>\n        </h2>\n\n        <div class=\"ui info message\">\n          <div class=\"header\">\n            Some of the action you can do in this section\n          </div>\n          <ul class=\"list\">\n\n            <li> You can individually print the result(s) by clicking the \"View result\" button once the modal is\n              open\n              you will see the print button on the upper right corner of the modal</li>\n          </ul>\n        </div>\n        <br>\n        <div class=\"ui input\" style=\"float:right\">\n          <input type=\"text\" placeholder=\"Search...\" (input)=\"onSearchChange($event.target.value)\">\n        </div>\n        <div class=\"ui huge header center aligned\" *ngIf=\"noResult\">No printed self-directed-search result</div>\n        <table class=\"ui celled table\" *ngIf=\"!noResult\">\n          <thead>\n            <tr>\n              <th>Name</th>\n              <th>Username</th>\n              <th>Actions</th>\n            </tr>\n          </thead>\n\n          <tbody>\n            <tr *ngFor=\"let item of oldResultData | paginate: { itemsPerPage: 10, currentPage: page } ; let i = index\">\n              <td>{{item.name}}</td>\n              <td>{{item.username}}</td>\n              <td>\n                <div class=\"center\">\n                  <button class=\"ui blue button\" (click)=\"viewSingleResult(item.id, item.name)\">\n                    View result\n                  </button>\n                </div>\n              </td>\n            </tr>\n          </tbody>\n\n          <tfoot>\n            <tr>\n              <th colspan=\"5\">\n                <div class=\"ui right floated pagination menu\">\n                  <a></a>\n                  <pagination-controls (pageChange)=\"page = $event\"></pagination-controls>\n                </div>\n              </th>\n            </tr>\n          </tfoot>\n        </table>\n      </div>\n\n\n    </sui-sidebar-sibling>\n  </sui-sidebar-container>\n</div>\n\n<!-- View single result modal -->\n<sui-modal [isClosable]=\"true\" (dismissed)=\"resultModal = false\" *ngIf=\"resultModal && !isSinglePrinting\" #mymodal>\n  <div class=\"header\">\n    <div class=\"right\">\n      <button class=\"ui labeled icon button blue\" (click)=\"printSingleResult(singleResultId);\">\n        <i class=\"print icon\"></i>\n        Print\n      </button>\n    </div>\n  </div>\n  <div class=\"content\">\n\n    <div class=\"ui\">\n      <div class=\"ui segment\" *ngFor=\"let code of singleResultData\">\n        <a class=\"ui red right ribbon label large\">{{code.name}}</a>\n        <div *ngFor=\"let indivCode of code.result\">\n          <div class=\"ui divided items\">\n            <div class=\"item\">\n              <div class=\"content\">\n                <a class=\"header\">{{indivCode.occupation}}</a>\n                <div class=\"description\">\n                  <p>{{indivCode.description}}</p>\n                </div>\n\n                <div class=\"extra\">\n                  <a href=\"{{indivCode.link}}\" class=\"ui right floated blue button\">\n                    See more details here\n                    <i class=\"right chevron icon\"></i>\n                  </a>\n                </div>\n\n                <hr>\n              </div>\n            </div>\n          </div>\n        </div>\n\n      </div>\n    </div>\n\n  </div>\n  <div class=\"actions\">\n    <button class=\"ui red button\" (click)=\"mymodal.deny()\">Close</button>\n  </div>\n\n</sui-modal>\n\n<!-- Single Print -->\n<div *ngIf=\"isSinglePrinting\" class=\"printContent\">\n  <div class=\"ui active dimmer\" *ngIf=\"loader\">\n    <div class=\"ui massive text loader\">Loading</div>\n  </div>\n  <div class=\"ui container\">\n    <div class=\"center\">\n      <img src=\"assets/images/gclogoprint.png\" alt=\"\" width=\"48\" height=\"48\">\n    </div>\n    <h5 class=\"center\" style=\"letter-spacing:0.2em;font-weight: bold;color:grey;\">OFFICIAL RESULT</h5>\n    <p class=\"center\" style=\"font-weight:600;\">City of Olongapo</p>\n    <h4 class=\"center\" style=\"font-weight:bolder\">GORDON COLLEGE</h4>\n    <h4 class=\"center\" style=\"font-weight:bolder\">STUDENT WELFARE OFFICE</h4>\n\n    <hr>\n\n    <span style=\"float:right;font: weight 600;\">{{dateNow}}</span>\n    <h2 style=\"font-weight:bolder;\">{{singleResultName}}</h2>\n    <hr>\n\n    <div class=\"ui card template\" *ngFor=\"let item of singleResultData\" style=\"width:100%\">\n      <!-- Header -->\n      <div class=\"content\">\n        <div class=\"header\">[{{item.name}}]</div>\n      </div>\n      <!-- Body -->\n      <div class=\"content data-content\">\n        <table class=\"ui celled table\">\n          <thead>\n            <tr>\n              <th class=\"center\">Occupation</th>\n              <th class=\"center\">Description</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let itemRes of item.result\">\n              <td>{{itemRes.occupation}}</td>\n              <td>{{itemRes.description}}</td>\n            </tr>\n          </tbody>\n        </table>\n\n      </div>\n    </div>\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/archive-old/archive-old.component.ts":
/*!******************************************************!*\
  !*** ./src/app/archive-old/archive-old.component.ts ***!
  \******************************************************/
/*! exports provided: ArchiveOldComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArchiveOldComponent", function() { return ArchiveOldComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_admin_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/admin.service */ "./src/app/services/admin.service.ts");
/* harmony import */ var ng2_semantic_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-semantic-ui */ "./node_modules/ng2-semantic-ui/dist/public.js");
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




var ArchiveOldComponent = /** @class */ (function () {
    function ArchiveOldComponent(adminService, modalService, router) {
        this.adminService = adminService;
        this.modalService = modalService;
        this.router = router;
        this.noResult = false;
        this.page = 1;
        this.loader = false;
        this.dateNow = new Date().toLocaleDateString();
        this.resultModal = false;
        this.isSinglePrinting = false;
    }
    ArchiveOldComponent.prototype.ngOnInit = function () {
        this.getOldResults();
    };
    ArchiveOldComponent.prototype.onSearchChange = function (searchValue) {
        var _this = this;
        this.adminService.dynamicSearch("original-archive", searchValue).subscribe(function (successData) {
            if (successData.length == 0) {
                _this.noResult = true;
            }
            else {
                _this.oldResultData = successData;
                // console.log(this.oldResultData)
                _this.noResult = false;
            }
        }, function (error) { return console.log(error); });
    };
    ArchiveOldComponent.prototype.getOldResults = function () {
        var _this = this;
        this.adminService.getOldArchiveResults().subscribe(function (successData) {
            if (successData.length == 0) {
                _this.noResult = true;
            }
            else {
                _this.oldResultData = successData;
                console.log(_this.oldResultData);
                _this.noResult = false;
            }
        }, function (error) { return console.log(error); });
    };
    ArchiveOldComponent.prototype.viewSingleResult = function (id, name) {
        var _this = this;
        console.log(id);
        this.adminService.getMySDS(id).subscribe(function (successData) {
            _this.singleResultData = successData;
            _this.singleResultId = id;
            _this.singleResultName = name;
            _this.resultModal = true;
        });
    };
    ArchiveOldComponent.prototype.printSingleResult = function (i) {
        var _this = this;
        this.loader = true;
        this.isSinglePrinting = true;
        this.resultModal = false;
        setTimeout(function (_) { return _this.loader = false; }, 900);
        setTimeout(function (_) {
            window.print();
            _this.isSinglePrinting = false;
            _this.resultModal = false;
        }, 1000);
    };
    ArchiveOldComponent.prototype.logout = function () {
        localStorage.clear();
        this.router.navigate(["/admin-auth"]);
    };
    ArchiveOldComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-archive-old',
            template: __webpack_require__(/*! ./archive-old.component.html */ "./src/app/archive-old/archive-old.component.html"),
            styles: [__webpack_require__(/*! ./archive-old.component.css */ "./src/app/archive-old/archive-old.component.css")]
        }),
        __metadata("design:paramtypes", [_services_admin_service__WEBPACK_IMPORTED_MODULE_1__["AdminService"], ng2_semantic_ui__WEBPACK_IMPORTED_MODULE_2__["SuiModalService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ArchiveOldComponent);
    return ArchiveOldComponent;
}());



/***/ }),

/***/ "./src/app/archive/archive.component.css":
/*!***********************************************!*\
  !*** ./src/app/archive/archive.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url('https://fonts.googleapis.com/css?family=Staatliches');\r\nh4,h5{\r\n    margin:0;\r\n    font-family: 'Staatliches', cursive;\r\n}\r\nh3{\r\n    margin: 0 0 0 0;\r\n    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\r\n}\r\n.printContent{\r\n    width:940px;\r\n    height:100vh;\r\n    page-break-inside:avoid !important;\r\n}\r\n@media print {\r\n    #message{\r\n        color:black;\r\n    }\r\n    .ui.horizontal.list>.item{\r\n        display:inline !important;\r\n    }\r\n    #print_header{\r\n        letter-spacing:0.2em;font-weight: bold;color:grey !important; \r\n    }\r\n    .ui.progress {\r\n        background-image: none;\r\n        -webkit-print-color-adjust: exact;\r\n        box-shadow: inset 0 0;\r\n        -webkit-box-shadow: inset 0 0;\r\n      \r\n      \r\n      }\r\n    \r\n \r\n    html, body {\r\n      /*changing width to 100% causes huge overflow and wrap*/\r\n      height:100%; \r\n      background: #FFF; \r\n      font-size: 9pt;\r\n    }\r\n    table{\r\n        page-break-inside: avoid;\r\n    }\r\n    \r\n  \r\n\r\n  }\r\n.onepage {\r\n    page-break-after: always;\r\n  }\r\n.onepage:last-child {\r\n    page-break-after: avoid;\r\n  }\r\n:host::ng-deep.ui.progress .label{\r\n    font-size: 1.2em;\r\n}\r\n:host::ng-deep.ui.progress#R .label{\r\n    color:#F1463C !important;\r\n}\r\n:host::ng-deep.ui.progress#I .label{\r\n    color:#F79517 !important; \r\n}\r\n:host::ng-deep.ui.progress#A .label{\r\n    color:#FFCF00 !important; \r\n}\r\n:host::ng-deep.ui.progress#S .label{\r\n    color:#01723B !important; \r\n}\r\n:host::ng-deep.ui.progress#E .label{\r\n    color:#0073A5 !important; \r\n}\r\n:host::ng-deep.ui.progress#C .label{\r\n    color:#9279B7 !important; \r\n}\r\n:host::ng-deep.ui.progress#R .bar{\r\n    background:#F1463C !important;\r\n}\r\n:host::ng-deep.ui.progress#I .bar{\r\n    background:#F79517 !important; \r\n}\r\n:host::ng-deep.ui.progress#A .bar{\r\n    background:#FFCF00 !important; \r\n}\r\n:host::ng-deep.ui.progress#S .bar{\r\n    background:#01723B !important; \r\n}\r\n:host::ng-deep.ui.progress#E .bar{\r\n    background:#0073A5 !important; \r\n}\r\n:host::ng-deep.ui.progress#C .bar{\r\n    background:#9279B7 !important; \r\n}\r\n.code-rate{\r\n    padding: 10px;\r\n}\r\n.image-icon{\r\n    margin:5px;\r\n}\r\n#try {\r\n    -webkit-clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);\r\n    clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);\r\n }\r\n.containerBox {\r\n    position: relative;\r\n    text-align: center;\r\n    color: black;\r\n}\r\n.center-text {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%);\r\n  }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXJjaGl2ZS9hcmNoaXZlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsbUVBQW1FO0FBQ25FO0lBQ0ksU0FBUztJQUNULG9DQUFvQztDQUN2QztBQUNEO0lBQ0ksZ0JBQWdCO0lBQ2hCLHVIQUF1SDtDQUMxSDtBQUNEO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixtQ0FBbUM7Q0FDdEM7QUFLRDtJQUNJO1FBQ0ksWUFBWTtLQUNmO0lBQ0Q7UUFDSSwwQkFBMEI7S0FDN0I7SUFDRDtRQUNJLHFCQUFxQixrQkFBa0Isc0JBQXNCO0tBQ2hFO0lBQ0Q7UUFDSSx1QkFBdUI7UUFDdkIsa0NBQWtDO1FBQ2xDLHNCQUFzQjtRQUN0Qiw4QkFBOEI7OztPQUcvQjs7O0lBR0g7TUFDRSx3REFBd0Q7TUFDeEQsWUFBWTtNQUNaLGlCQUFpQjtNQUNqQixlQUFlO0tBQ2hCO0lBQ0Q7UUFDSSx5QkFBeUI7S0FDNUI7Ozs7R0FJRjtBQUVEO0lBQ0UseUJBQXlCO0dBQzFCO0FBRUQ7SUFDRSx3QkFBd0I7R0FDekI7QUFJSDtJQUNJLGlCQUFpQjtDQUNwQjtBQUVEO0lBQ0kseUJBQXlCO0NBQzVCO0FBQ0Q7SUFDSSx5QkFBeUI7Q0FDNUI7QUFDRDtJQUNJLHlCQUF5QjtDQUM1QjtBQUNEO0lBQ0kseUJBQXlCO0NBQzVCO0FBQ0Q7SUFDSSx5QkFBeUI7Q0FDNUI7QUFDRDtJQUNJLHlCQUF5QjtDQUM1QjtBQUtEO0lBQ0ksOEJBQThCO0NBQ2pDO0FBQ0Q7SUFDSSw4QkFBOEI7Q0FDakM7QUFDRDtJQUNJLDhCQUE4QjtDQUNqQztBQUNEO0lBQ0ksOEJBQThCO0NBQ2pDO0FBQ0Q7SUFDSSw4QkFBOEI7Q0FDakM7QUFDRDtJQUNJLDhCQUE4QjtDQUNqQztBQUVEO0lBQ0ksY0FBYztDQUNqQjtBQUVEO0lBQ0ksV0FBVztDQUNkO0FBRUE7SUFDRyxpRkFBaUY7SUFDakYseUVBQXlFO0VBQzNFO0FBT0Q7SUFDRyxtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGFBQWE7Q0FDaEI7QUFDRDtJQUNJLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsVUFBVTtJQUNWLHlDQUFpQztZQUFqQyxpQ0FBaUM7R0FDbEMiLCJmaWxlIjoic3JjL2FwcC9hcmNoaXZlL2FyY2hpdmUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9U3RhYXRsaWNoZXMnKTtcclxuaDQsaDV7XHJcbiAgICBtYXJnaW46MDtcclxuICAgIGZvbnQtZmFtaWx5OiAnU3RhYXRsaWNoZXMnLCBjdXJzaXZlO1xyXG59XHJcbmgze1xyXG4gICAgbWFyZ2luOiAwIDAgMCAwO1xyXG4gICAgZm9udC1mYW1pbHk6ICdMdWNpZGEgU2FucycsICdMdWNpZGEgU2FucyBSZWd1bGFyJywgJ0x1Y2lkYSBHcmFuZGUnLCAnTHVjaWRhIFNhbnMgVW5pY29kZScsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcclxufVxyXG4ucHJpbnRDb250ZW50e1xyXG4gICAgd2lkdGg6OTQwcHg7XHJcbiAgICBoZWlnaHQ6MTAwdmg7XHJcbiAgICBwYWdlLWJyZWFrLWluc2lkZTphdm9pZCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5AbWVkaWEgcHJpbnQge1xyXG4gICAgI21lc3NhZ2V7XHJcbiAgICAgICAgY29sb3I6YmxhY2s7XHJcbiAgICB9XHJcbiAgICAudWkuaG9yaXpvbnRhbC5saXN0Pi5pdGVte1xyXG4gICAgICAgIGRpc3BsYXk6aW5saW5lICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAjcHJpbnRfaGVhZGVye1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOjAuMmVtO2ZvbnQtd2VpZ2h0OiBib2xkO2NvbG9yOmdyZXkgIWltcG9ydGFudDsgXHJcbiAgICB9XHJcbiAgICAudWkucHJvZ3Jlc3Mge1xyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XHJcbiAgICAgICAgLXdlYmtpdC1wcmludC1jb2xvci1hZGp1c3Q6IGV4YWN0O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMDtcclxuICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMDtcclxuICAgICAgXHJcbiAgICAgIFxyXG4gICAgICB9XHJcbiAgICBcclxuIFxyXG4gICAgaHRtbCwgYm9keSB7XHJcbiAgICAgIC8qY2hhbmdpbmcgd2lkdGggdG8gMTAwJSBjYXVzZXMgaHVnZSBvdmVyZmxvdyBhbmQgd3JhcCovXHJcbiAgICAgIGhlaWdodDoxMDAlOyBcclxuICAgICAgYmFja2dyb3VuZDogI0ZGRjsgXHJcbiAgICAgIGZvbnQtc2l6ZTogOXB0O1xyXG4gICAgfVxyXG4gICAgdGFibGV7XHJcbiAgICAgICAgcGFnZS1icmVhay1pbnNpZGU6IGF2b2lkO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgXHJcblxyXG4gIH1cclxuXHJcbiAgLm9uZXBhZ2Uge1xyXG4gICAgcGFnZS1icmVhay1hZnRlcjogYWx3YXlzO1xyXG4gIH1cclxuICBcclxuICAub25lcGFnZTpsYXN0LWNoaWxkIHtcclxuICAgIHBhZ2UtYnJlYWstYWZ0ZXI6IGF2b2lkO1xyXG4gIH1cclxuXHJcblxyXG5cclxuOmhvc3Q6Om5nLWRlZXAudWkucHJvZ3Jlc3MgLmxhYmVse1xyXG4gICAgZm9udC1zaXplOiAxLjJlbTtcclxufVxyXG5cclxuOmhvc3Q6Om5nLWRlZXAudWkucHJvZ3Jlc3MjUiAubGFiZWx7XHJcbiAgICBjb2xvcjojRjE0NjNDICFpbXBvcnRhbnQ7XHJcbn1cclxuOmhvc3Q6Om5nLWRlZXAudWkucHJvZ3Jlc3MjSSAubGFiZWx7XHJcbiAgICBjb2xvcjojRjc5NTE3ICFpbXBvcnRhbnQ7IFxyXG59XHJcbjpob3N0OjpuZy1kZWVwLnVpLnByb2dyZXNzI0EgLmxhYmVse1xyXG4gICAgY29sb3I6I0ZGQ0YwMCAhaW1wb3J0YW50OyBcclxufVxyXG46aG9zdDo6bmctZGVlcC51aS5wcm9ncmVzcyNTIC5sYWJlbHtcclxuICAgIGNvbG9yOiMwMTcyM0IgIWltcG9ydGFudDsgXHJcbn1cclxuOmhvc3Q6Om5nLWRlZXAudWkucHJvZ3Jlc3MjRSAubGFiZWx7XHJcbiAgICBjb2xvcjojMDA3M0E1ICFpbXBvcnRhbnQ7IFxyXG59XHJcbjpob3N0OjpuZy1kZWVwLnVpLnByb2dyZXNzI0MgLmxhYmVse1xyXG4gICAgY29sb3I6IzkyNzlCNyAhaW1wb3J0YW50OyBcclxufVxyXG5cclxuXHJcblxyXG5cclxuOmhvc3Q6Om5nLWRlZXAudWkucHJvZ3Jlc3MjUiAuYmFye1xyXG4gICAgYmFja2dyb3VuZDojRjE0NjNDICFpbXBvcnRhbnQ7XHJcbn1cclxuOmhvc3Q6Om5nLWRlZXAudWkucHJvZ3Jlc3MjSSAuYmFye1xyXG4gICAgYmFja2dyb3VuZDojRjc5NTE3ICFpbXBvcnRhbnQ7IFxyXG59XHJcbjpob3N0OjpuZy1kZWVwLnVpLnByb2dyZXNzI0EgLmJhcntcclxuICAgIGJhY2tncm91bmQ6I0ZGQ0YwMCAhaW1wb3J0YW50OyBcclxufVxyXG46aG9zdDo6bmctZGVlcC51aS5wcm9ncmVzcyNTIC5iYXJ7XHJcbiAgICBiYWNrZ3JvdW5kOiMwMTcyM0IgIWltcG9ydGFudDsgXHJcbn1cclxuOmhvc3Q6Om5nLWRlZXAudWkucHJvZ3Jlc3MjRSAuYmFye1xyXG4gICAgYmFja2dyb3VuZDojMDA3M0E1ICFpbXBvcnRhbnQ7IFxyXG59XHJcbjpob3N0OjpuZy1kZWVwLnVpLnByb2dyZXNzI0MgLmJhcntcclxuICAgIGJhY2tncm91bmQ6IzkyNzlCNyAhaW1wb3J0YW50OyBcclxufVxyXG5cclxuLmNvZGUtcmF0ZXtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbi5pbWFnZS1pY29ue1xyXG4gICAgbWFyZ2luOjVweDtcclxufVxyXG5cclxuICN0cnkge1xyXG4gICAgLXdlYmtpdC1jbGlwLXBhdGg6IHBvbHlnb24oNTAlIDAlLCAxMDAlIDI1JSwgMTAwJSA3NSUsIDUwJSAxMDAlLCAwJSA3NSUsIDAlIDI1JSk7XHJcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oNTAlIDAlLCAxMDAlIDI1JSwgMTAwJSA3NSUsIDUwJSAxMDAlLCAwJSA3NSUsIDAlIDI1JSk7XHJcbiB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAuY29udGFpbmVyQm94IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG4uY2VudGVyLXRleHQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICB9XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/archive/archive.component.html":
/*!************************************************!*\
  !*** ./src/app/archive/archive.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!isSinglePrinting\">\n  <div class=\"ui top attached demo menu\">\n    <a class=\"item\" (click)=\"sidebar.toggle()\">\n      <i class=\"sidebar icon\"></i>\n    </a>\n    <div class=\"right menu\">\n      <div class=\"item\">\n        <div class=\"ui blue button\" (click)=\"logout()\">Logout</div>\n      </div>\n    </div>\n  </div>\n\n  <sui-sidebar-container class=\"ui bottom attached segment\">\n    <sui-sidebar class=\"vertical\" #sidebar>\n      <a class=\"item\" routerLink=\"/admin/home\">\n        Home\n      </a>\n      <a class=\"item\" routerLink=\"/takers-attendance\">\n        Attendance\n      </a>\n      <a class=\"item\" routerLink=\"/admin/graph/specific\">\n        Specific Reports\n      </a>\n      <a class=\"item\" routerLink=\"/admin/graph/general\">\n        General Reports\n      </a>\n      <a class=\"item\" routerLink=\"/admin/old-print\">\n        Print Section\n        <div class=\"ui grey horizontal label\">Old</div>\n      </a>\n      <a class=\"item\" routerLink=\"/admin/old-archive\">\n        Archive Section\n        <div class=\"ui grey horizontal label\">Old</div>\n      </a>\n      <a class=\"item\" routerLink=\"/admin/print\">\n        Print Section\n        <div class=\"ui grey horizontal label\">New</div>\n      </a>\n      <a class=\"item\" routerLink=\"/admin/new-print\">\n        Print Section\n        <div class=\"ui red horizontal label\">New</div>\n      </a>\n      <a class=\"item active\" routerLink=\"/admin/archive\">\n        Archive Section\n        <div class=\"ui grey horizontal label\">New</div>\n      </a>\n      <a class=\"item\" routerLink=\"/admin/new-archive\">\n        Archive Section\n        <div class=\"ui red horizontal label\">New</div>\n      </a>\n      <a class=\"item\" routerLink=\"/admin/settings\">\n        Accounts Settings\n      </a>\n    </sui-sidebar>\n\n    <sui-sidebar-sibling [isDimmedWhenVisible]=\"true\">\n      <div class=\"ui basic segment container\">\n        <h2 class=\"ui center aligned icon header\">\n          <i class=\"circular archive icon\"></i>\n          Archive Section\n\n          <div class=\"sub header\">This page is for handling printed self-directed-search result of every student</div>\n        </h2>\n\n        <div class=\"ui info message\">\n          <div class=\"header\">\n            Some of the action you can do in this section\n          </div>\n          <ul class=\"list\">\n\n            <li> You can individually print the result(s) by clicking the \"View result\" button once the modal is\n              open\n              you will see the print button on the upper right corner of the modal</li>\n          </ul>\n        </div>\n        <br>\n        <div class=\"ui input\" style=\"float:right\">\n          <input type=\"text\" placeholder=\"Search...\" (input)=\"onSearchChange($event.target.value)\">\n        </div>\n        <div class=\"ui huge header center aligned\" *ngIf=\"noResult\">No printed self-directed-search result</div>\n        <table class=\"ui celled table\" *ngIf=\"!noResult\">\n          <thead>\n            <tr>\n              <th>Name</th>\n              <th>Username</th>\n              <th>Actions</th>\n            </tr>\n          </thead>\n\n          <tbody>\n            <tr *ngFor=\"let item of oldResultData | paginate: { itemsPerPage: 10, currentPage: page } ; let i = index\">\n              <td>{{item.name}}</td>\n              <td>{{item.username}}</td>\n              <td>\n                <div class=\"center\">\n                  <button class=\"ui blue button\" (click)=\"viewSingleResult(item.id, item.name)\">\n                    View result\n                  </button>\n                </div>\n              </td>\n            </tr>\n          </tbody>\n\n          <tfoot>\n            <tr>\n              <th colspan=\"5\">\n                <div class=\"ui right floated pagination menu\">\n                  <a></a>\n                  <pagination-controls (pageChange)=\"page = $event\"></pagination-controls>\n                </div>\n              </th>\n            </tr>\n          </tfoot>\n        </table>\n      </div>\n\n\n    </sui-sidebar-sibling>\n  </sui-sidebar-container>\n</div>\n\n<!-- View single result modal -->\n<sui-modal [isClosable]=\"true\" (dismissed)=\"resultModal = false\" *ngIf=\"resultModal && !isSinglePrinting\" #mymodal>\n  <div class=\"header\">\n    <div class=\"right\">\n      <button class=\"ui labeled icon button blue\" (click)=\"printSingleResult(singleResultId);\">\n        <i class=\"print icon\"></i>\n        Print\n      </button>\n    </div>\n  </div>\n  <div class=\"content\">\n\n    <div class=\"ui\">\n      <div class=\"ui segment\" *ngFor=\"let code of singleResultData\">\n        <a class=\"ui red right ribbon label large\">{{code.name}}</a>\n        <div *ngFor=\"let indivCode of code.result\">\n          <div class=\"ui divided items\">\n            <div class=\"item\">\n              <div class=\"content\">\n                <a class=\"header\">{{indivCode.occupation}}</a>\n                <div class=\"description\">\n                  <p>{{indivCode.description}}</p>\n                </div>\n\n                <div class=\"extra\">\n                  <a href=\"{{indivCode.link}}\" class=\"ui right floated blue button\">\n                    See more details here\n                    <i class=\"right chevron icon\"></i>\n                  </a>\n                </div>\n\n                <hr>\n              </div>\n            </div>\n          </div>\n        </div>\n\n      </div>\n    </div>\n\n  </div>\n  <div class=\"actions\">\n    <button class=\"ui red button\" (click)=\"mymodal.deny()\">Close</button>\n  </div>\n\n</sui-modal>\n\n<!-- Single Print -->\n<!-- Single Print -->\n<div *ngIf=\"isSinglePrinting\">\n  <div class=\"ui active dimmer\" *ngIf=\"loader\">\n    <div class=\"ui massive text loader\">Loading</div>\n  </div>\n\n\n  <div class=\"head\">\n    <div style=\"margin-bottom:10px;padding-right:20px;padding-left:20px;\">\n      <div id=\"logo_header\" class=\"ui\">\n        <img src=\"assets/images/gclogoprint.png\" class=\"ui mini left floated image\" alt=\"\">\n        <img src=\"assets/icons/riasec-logo.png\" class=\"ui mini right floated image\" alt=\"\">\n      </div>\n      <h4 class=\"center\" style=\"font-weight:bolder\">GORDON COLLEGE</h4>\n      <h4 class=\"center\" style=\"font-weight:bolder\">STUDENT WELFARE OFFICE</h4>\n      <p class=\"center\" style=\"font-weight:bold\">Tapinac Oval Sports Complex, East Tapinac, Olongapo City</p>\n\n    </div>\n  </div>\n\n\n\n\n  <div class=\"body\">\n\n    <div style=\"margin-left:20px; margin-right:20px;\">\n      <hr>\n      <div class=\"ui black message\" id=\"message\">\n        {{singleResultName}}\n        <span style=\"float:right\">{{dateNow}}</span>\n      </div>\n    </div>\n    <h2 class=\"center container\" id=\"print_header\">OFFICIAL RESULT</h2>\n    <div class=\"ui grid\" style=\"margin-left:20px; margin-right:20px;\">\n      <div class=\"eight wide column\">\n        <div class=\"ui card\" style=\"height:100%;width:100%;\">\n          <div class=\"content\">\n            <h3 class=\"ui header center bolder\">Summary Code Occupations</h3>\n\n            <div class=\"ui bulleted divided list\">\n              <div class=\"item\" *ngFor=\"let item of allOccupations\">{{item.occupation}}</div>\n\n            </div>\n\n\n\n          </div>\n        </div>\n      </div>\n      <div class=\"eight wide column\">\n        <div class=\"ui card\" style=\"width:100%;height:100%;\">\n          <div class=\"content\">\n\n            <h3 class=\"ui header center bolder\">My Summary Code</h3>\n            <div class=\"containerBox\">\n\n              <img src=\"assets/icons/riasec-logo.png\" class=\"img-summary\" alt=\"\" width=\"200\" height=\"200\">\n              <div class=\"center-text\">\n                <span *ngFor=\"let code of summaryCode\" style=\"font-weight:bolder;font-size:1.5em\"\n                  [ngStyle]=\"{'color': true ? getColor(code) : ''}\">\n                  {{code}}\n                </span>\n              </div>\n            </div>\n\n            <div *ngFor=\"let code of summaryCode\">\n              <div class=\"ui divider\"></div>\n              <img class=\"ui middle aligned tiny image\" src=\"assets/icons/{{code}}_icon.png\">\n              <span style=\"font-weight: bolder; font-size:1.5em; margin-left: 10px;letter-spacing: 5px;\"\n                [ngStyle]=\"{'color': true ? getColor(code) : ''}\">\n                {{getWord(code)}}</span>\n            </div>\n\n\n\n\n\n\n          </div>\n        </div>\n\n      </div>\n    </div>\n\n    <div class=\"ui tiny message\" style=\"margin-left:20px; margin-right:20px;\">\n      <p style=\"font-style:italic\">Note: You can use your summary code to search all of the occupation(s)\n        available on your code\n        in https://www.onetonline.org/ </p>\n    </div>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/archive/archive.component.ts":
/*!**********************************************!*\
  !*** ./src/app/archive/archive.component.ts ***!
  \**********************************************/
/*! exports provided: ArchiveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArchiveComponent", function() { return ArchiveComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_admin_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/admin.service */ "./src/app/services/admin.service.ts");
/* harmony import */ var ng2_semantic_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-semantic-ui */ "./node_modules/ng2-semantic-ui/dist/public.js");
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




var ArchiveComponent = /** @class */ (function () {
    function ArchiveComponent(adminService, modalService, router) {
        this.adminService = adminService;
        this.modalService = modalService;
        this.router = router;
        this.noResult = false;
        this.page = 1;
        this.loader = false;
        this.dateNow = new Date().toLocaleDateString();
        this.resultModal = false;
        this.isSinglePrinting = false;
    }
    ArchiveComponent.prototype.ngOnInit = function () {
        this.getTempOldResults();
    };
    ArchiveComponent.prototype.onSearchChange = function (searchValue) {
        var _this = this;
        this.adminService.dynamicSearch("old-archive", searchValue).subscribe(function (successData) {
            // console.log(successData);
            if (successData.length == 0) {
                _this.noResult = true;
            }
            else {
                _this.oldResultData = successData;
                // console.log(this.oldResultData)
                _this.noResult = false;
            }
        }, function (error) { return console.log(error); });
    };
    ArchiveComponent.prototype.getTempOldResults = function () {
        var _this = this;
        this.adminService.getTempOldResults().subscribe(function (successData) {
            if (successData.length == 0) {
                _this.noResult = true;
            }
            else {
                _this.oldResultData = successData;
                // console.log(this.oldResultData)
                _this.noResult = false;
            }
        }, function (error) { return console.log(error); });
    };
    ArchiveComponent.prototype.viewSingleResult = function (id, name) {
        var _this = this;
        // console.log(id);
        this.adminService.getMySDS(id).subscribe(function (successData) {
            // console.log(successData)
            _this.singleResultData = successData;
            _this.allOccupations = successData[0].result;
            _this.singleResultName = name;
            _this.singleResultId = id;
            _this.singleResultCode = successData[0].name;
            // console.log(this.singleResultCode)
            _this.resultModal = true;
        });
    };
    ArchiveComponent.prototype.printSingleResult = function (i) {
        var _this = this;
        this.loader = true;
        this.isSinglePrinting = true;
        this.summaryCode = this.singleResultCode.split("");
        setTimeout(function () { return _this.loader = false; }, 500);
        setTimeout(function () {
            window.print();
            _this.isSinglePrinting = false;
        }, 1000);
    };
    ArchiveComponent.prototype.logout = function () {
        localStorage.clear();
        this.router.navigate(["/admin-auth"]);
    };
    ArchiveComponent.prototype.getColor = function (letter) {
        if (letter == "R") {
            return "#F1463C";
        }
        else if (letter == "I") {
            return "#F79517";
        }
        else if (letter == "A") {
            return "#FFCF00";
        }
        else if (letter == "S") {
            return "#01723B";
        }
        else if (letter == "E") {
            return "#0073A5";
        }
        else {
            return "#9279B7";
        }
    };
    ArchiveComponent.prototype.getWord = function (letter) {
        if (letter == "R") {
            return "Realistic";
        }
        else if (letter == "I") {
            return "Investigative";
        }
        else if (letter == "A") {
            return "Artistic";
        }
        else if (letter == "S") {
            return "Social";
        }
        else if (letter == "E") {
            return "Enterprising";
        }
        else {
            return "Conventional";
        }
    };
    ArchiveComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-archive',
            template: __webpack_require__(/*! ./archive.component.html */ "./src/app/archive/archive.component.html"),
            styles: [__webpack_require__(/*! ./archive.component.css */ "./src/app/archive/archive.component.css")]
        }),
        __metadata("design:paramtypes", [_services_admin_service__WEBPACK_IMPORTED_MODULE_1__["AdminService"], ng2_semantic_ui__WEBPACK_IMPORTED_MODULE_2__["SuiModalService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ArchiveComponent);
    return ArchiveComponent;
}());



/***/ }),

/***/ "./src/app/attendance/attendance.component.css":
/*!*****************************************************!*\
  !*** ./src/app/attendance/attendance.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url('https://fonts.googleapis.com/css?family=Staatliches');\r\nh4,h5{\r\n    margin:0;\r\n    font-family: 'Staatliches', cursive;\r\n}\r\nh3{\r\n    margin: 0 0 0 0;\r\n    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\r\n}\r\n.printContent{\r\n    width:940px;\r\n    height:100vh;\r\n    page-break-inside:avoid !important;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXR0ZW5kYW5jZS9hdHRlbmRhbmNlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsbUVBQW1FO0FBQ25FO0lBQ0ksU0FBUztJQUNULG9DQUFvQztDQUN2QztBQUNEO0lBQ0ksZ0JBQWdCO0lBQ2hCLHVIQUF1SDtDQUMxSDtBQUNEO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixtQ0FBbUM7Q0FDdEMiLCJmaWxlIjoic3JjL2FwcC9hdHRlbmRhbmNlL2F0dGVuZGFuY2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9U3RhYXRsaWNoZXMnKTtcclxuaDQsaDV7XHJcbiAgICBtYXJnaW46MDtcclxuICAgIGZvbnQtZmFtaWx5OiAnU3RhYXRsaWNoZXMnLCBjdXJzaXZlO1xyXG59XHJcbmgze1xyXG4gICAgbWFyZ2luOiAwIDAgMCAwO1xyXG4gICAgZm9udC1mYW1pbHk6ICdMdWNpZGEgU2FucycsICdMdWNpZGEgU2FucyBSZWd1bGFyJywgJ0x1Y2lkYSBHcmFuZGUnLCAnTHVjaWRhIFNhbnMgVW5pY29kZScsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcclxufVxyXG4ucHJpbnRDb250ZW50e1xyXG4gICAgd2lkdGg6OTQwcHg7XHJcbiAgICBoZWlnaHQ6MTAwdmg7XHJcbiAgICBwYWdlLWJyZWFrLWluc2lkZTphdm9pZCAhaW1wb3J0YW50O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/attendance/attendance.component.html":
/*!******************************************************!*\
  !*** ./src/app/attendance/attendance.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!isPrinting\">\r\n   <div class=\"ui top attached demo menu\">\r\n      <a class=\"item\" (click)=\"sidebar.toggle()\">\r\n         <i class=\"sidebar icon\"></i>\r\n      </a>\r\n      <div class=\"right menu\">\r\n         <div class=\"item\">\r\n            <div class=\"ui blue button\" (click)=\"logout()\">Logout</div>\r\n         </div>\r\n      </div>\r\n   </div>\r\n\r\n   <sui-sidebar-container class=\"ui bottom attached segment\">\r\n      <sui-sidebar class=\"vertical\" #sidebar style=\"height:100%\">\r\n         <a class=\"item\" routerLink=\"/admin-home\">\r\n            Home\r\n         </a>\r\n         <a class=\"item active\" routerLink=\"/takers-attendance\">\r\n            Attendance\r\n         </a>\r\n         <a class=\"item\" routerLink=\"/admin-graph-specific\">\r\n            Specific Reports\r\n         </a>\r\n         <a class=\"item\" routerLink=\"/admin-graph-general\">\r\n            General Reports\r\n         </a>\r\n         <a class=\"item\" routerLink=\"/admin-new-print\">\r\n            Print Section\r\n         </a>\r\n         <a class=\"item\" routerLink=\"/admin-new-archive\">\r\n            Archive Section\r\n         </a>\r\n         <a class=\"item\" routerLink=\"/admin-settings\">\r\n            Accounts Settings\r\n         </a>\r\n         <a class=\"item\" routerLink=\"/admin-events\">\r\n            Events\r\n         </a>\r\n         <a class=\"item\" routerLink=\"/admin-messages\">\r\n            Messages\r\n         </a>\r\n      </sui-sidebar>\r\n\r\n      <sui-sidebar-sibling [isDimmedWhenVisible]=\"true\">\r\n         <div class=\"ui segment\" style=\"min-height:90vh\">\r\n            <div class=\"ui active dimmer\" *ngIf=\"isLoading\">\r\n               <div class=\"ui loader\"></div>\r\n            </div>\r\n            <h2 class=\"ui center aligned icon header\">\r\n               <i class=\"circular calendar icon\"></i>\r\n               Attendance Section\r\n\r\n               <div class=\"sub header\">View / Generate a report about takers on a certain date.</div>\r\n            </h2>\r\n            <div class=\"ui center aligned\">\r\n               <div class=\"ui left icon input\">\r\n                  <i class=\"calendar icon\"></i>\r\n                  <input suiDatepicker [(ngModel)]=\"date\" placeholder=\"Pick a date\" [pickerMode]=\"'date'\"\r\n                     (ngModelChange)=\"changeDate();\">\r\n               </div>\r\n            </div>\r\n\r\n            <h2 *ngIf=\"takers\" class=\"center aligned\">{{takers.length}} Results</h2>\r\n            <button class=\"ui green button\" style=\"float:right;margin-bottom:10px;\" (click)=\"generateReport();\">Generate\r\n               Report</button>\r\n\r\n            <table class=\"ui celled center aligned table\" *ngIf=\"takers\">\r\n               <thead>\r\n                  <tr>\r\n                     <th>Name</th>\r\n                     <th>Gender</th>\r\n                     <th>Summary Code</th>\r\n                  </tr>\r\n               </thead>\r\n               <tbody>\r\n                  <tr *ngFor=\"let taker of takers\">\r\n                     <td>{{taker.name}}</td>\r\n                     <td>{{taker.gender}}</td>\r\n                     <td>{{taker.summary_code}}</td>\r\n                  </tr>\r\n               </tbody>\r\n            </table>\r\n         </div>\r\n      </sui-sidebar-sibling>\r\n   </sui-sidebar-container>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n<div id=\"report\" *ngIf=\"isPrinting\">\r\n   <div class=\"head\">\r\n      <div style=\"margin-bottom:10px;padding-right:20px;padding-left:20px;\">\r\n         <div class=\"center\">\r\n            <img src=\"assets/images/gclogoprint.png\" class=\"ui\" style=\"width:38px;height:38px;\" alt=\"\">\r\n         </div>\r\n         <h4 class=\"center\" style=\"font-weight:bolder\">GORDON COLLEGE</h4>\r\n         <h4 class=\"center\" style=\"font-weight:bolder\">List of SDS Takers</h4>\r\n         <p class=\"center\" style=\"font-weight:bold\">{{convert(date, 'MMMM DD YYYY')}}</p>\r\n\r\n      </div>\r\n   </div>\r\n\r\n\r\n   <table style=\"margin-top:28px;\" class=\"ui very basic center aligned table\" *ngIf=\"takers\">\r\n      <thead>\r\n         <tr>\r\n            <th>Name</th>\r\n            <th>Gender</th>\r\n            <th>Summary Code</th>\r\n         </tr>\r\n      </thead>\r\n      <tbody>\r\n         <tr *ngFor=\"let taker of takers\">\r\n            <td>{{taker.name}}</td>\r\n            <td>{{taker.gender}}</td>\r\n            <td>{{taker.summary_code}}</td>\r\n         </tr>\r\n      </tbody>\r\n   </table>\r\n</div>"

/***/ }),

/***/ "./src/app/attendance/attendance.component.ts":
/*!****************************************************!*\
  !*** ./src/app/attendance/attendance.component.ts ***!
  \****************************************************/
/*! exports provided: AttendanceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttendanceComponent", function() { return AttendanceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/admin.service */ "./src/app/services/admin.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AttendanceComponent = /** @class */ (function () {
    function AttendanceComponent(adminService, router) {
        this.adminService = adminService;
        this.router = router;
        this.isPrinting = false;
        this.isLoading = false;
    }
    AttendanceComponent.prototype.ngOnInit = function () {
    };
    AttendanceComponent.prototype.generateReport = function () {
        var _this = this;
        if (this.takers.length > 0) {
            this.isPrinting = true;
            setTimeout(function () {
                window.print();
                setTimeout(function () {
                    _this.isPrinting = false;
                }, 500);
            }, 500);
        }
        else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()({
                title: "Error printing",
                text: "There is no result of takers",
                type: "warning"
            });
        }
    };
    AttendanceComponent.prototype.logout = function () {
        localStorage.clear();
        this.router.navigate(["/admin-auth"]);
    };
    AttendanceComponent.prototype.changeDate = function () {
        var _this = this;
        this.isLoading = true;
        var date = date_fns__WEBPACK_IMPORTED_MODULE_1__["format"](this.date, "YYYY-MM-DD");
        console.log(date);
        this.adminService.getTakersByDate(date.toString()).subscribe(function (takers) {
            _this.isLoading = false;
            console.log(takers);
            _this.takers = takers;
        }, function (err) { return console.error(err); });
    };
    AttendanceComponent.prototype.convert = function (date, format) {
        return date_fns__WEBPACK_IMPORTED_MODULE_1__["format"](date, format);
    };
    AttendanceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-attendance',
            template: __webpack_require__(/*! ./attendance.component.html */ "./src/app/attendance/attendance.component.html"),
            styles: [__webpack_require__(/*! ./attendance.component.css */ "./src/app/attendance/attendance.component.css")]
        }),
        __metadata("design:paramtypes", [_services_admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], AttendanceComponent);
    return AttendanceComponent;
}());



/***/ }),

/***/ "./src/app/auth.guard.ts":
/*!*******************************!*\
  !*** ./src/app/auth.guard.ts ***!
  \*******************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        if (localStorage.getItem("Authorization") != "" && localStorage.getItem("Authorization") != null) {
            return true;
        }
        else {
            this.router.navigate(["/404"]);
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/authentication/authentication.component.css":
/*!*************************************************************!*\
  !*** ./src/app/authentication/authentication.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".myInverted{\r\n    background-color:#1b1c1d\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aGVudGljYXRpb24vYXV0aGVudGljYXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHdCQUF3QjtDQUMzQiIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpY2F0aW9uL2F1dGhlbnRpY2F0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubXlJbnZlcnRlZHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IzFiMWMxZFxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/authentication/authentication.component.html":
/*!**************************************************************!*\
  !*** ./src/app/authentication/authentication.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n\n  <app-header></app-header>\n  <br>\n  <div class=\"ui container\">\n    <h2 class=\"ui icon header center aligned\">\n      <i class=\"circular lock icon\"></i>\n      <div class=\"content\">\n        Authentication\n        <div class=\"sub header\">Registration & Login Page</div>\n      </div>\n    </h2>\n    <div class=\"ui breadcrumb\">\n      <a class=\"section\" routerLink=\"/\">Home</a>\n      <i class=\"right arrow icon divider\"></i>\n      <div class=\"active section\">Authentication</div>\n    </div>\n    <hr>\n  </div>\n\n  <br>\n\n  <div class=\"ui grid container\">\n    <div class=\"eight wide column\">\n      <p class=\"center aligned\" *ngIf=\"!login\">\n        <button class=\"ui big button blue\" (click)=\"change('qwe')\">\n          Login\n        </button>\n      </p>\n      <div class=\"ui form\" *ngIf=\"login\">\n        <div class=\"field\">\n          <label>Username</label>\n          <div class=\"ui fluid left icon input\">\n            <input type=\"text\" placeholder=\"Username\" #loginUsername>\n            <i class=\"user icon\"></i>\n          </div>\n        </div>\n        <div class=\"field\">\n          <label>Password</label>\n          <div class=\"ui left icon input\">\n            <input type=\"password\" #loginPass placeholder=\"Password\">\n            <i class=\"lock icon\"></i>\n          </div>\n        </div>\n\n\n\n        <p class=\"center aligned\"><button class=\"ui green submit big button\"\n            (click)=\"userLogin(loginUsername.value,loginPass.value)\">Login</button></p>\n\n      </div>\n    </div>\n\n    <div class=\"eight wide column\">\n      <p class=\"center aligned\" *ngIf=\"login\">\n        <button class=\"ui big button blue\" (click)=\"change('signup')\">\n          Sign Up\n        </button>\n      </p>\n\n      <div class=\"ui form\" *ngIf=\"!login\">\n        <div class=\"field\">\n          <label>Username</label>\n          <div class=\"ui left  icon input\">\n            <input type=\"text\" placeholder=\"Enter username here\" #registerUsername>\n            <i class=\"user icon\"></i>\n          </div>\n        </div>\n        <div class=\"field\">\n          <label>Password</label>\n          <div class=\"ui left  icon input\">\n            <input type=\"password\" placeholder=\"Enter password here\" #registerPassword>\n            <i class=\"lock icon\"></i>\n          </div>\n        </div>\n\n        <div class=\"field\">\n          <label>Name</label>\n          <div class=\"ui left  icon input\">\n            <input type=\"text\" placeholder=\"e.g. (Mark A. Cruz)\" #registerFullname>\n            <i class=\"user icon\"></i>\n          </div>\n        </div>\n\n        <div class=\"field\">\n          <label for=\"\">Gender</label>\n          <sui-select class=\"selection\" [(ngModel)]=\"selectedGender\" #gender>\n            <sui-select-option *ngFor=\"let option of genderOptions\" [value]=\"option\">\n            </sui-select-option>\n          </sui-select>\n        </div>\n\n\n\n        <p class=\"center aligned\"><button class=\"ui green submit big button\"\n            (click)=\"register(registerUsername.value,registerPassword.value,registerFullname.value,gender.selectedOption)\">Register</button>\n        </p>\n\n      </div>\n    </div>\n  </div>\n\n\n\n</div>"

/***/ }),

/***/ "./src/app/authentication/authentication.component.ts":
/*!************************************************************!*\
  !*** ./src/app/authentication/authentication.component.ts ***!
  \************************************************************/
/*! exports provided: AuthenticationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationComponent", function() { return AuthenticationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
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




var AuthenticationComponent = /** @class */ (function () {
    function AuthenticationComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.login = true;
        this.loader = false;
        this.genderOptions = ["Male", "Female"];
    }
    AuthenticationComponent.prototype.ngOnInit = function () {
    };
    AuthenticationComponent.prototype.change = function (qwe) {
        if (qwe == "signup")
            this.login = false;
        else
            this.login = true;
    };
    AuthenticationComponent.prototype.register = function (username, password, name, gender) {
        var _this = this;
        if (username != "" && password != "" && name != "" && gender != undefined) {
            var dp_path = "";
            if (gender == "Male") {
                dp_path = "assets/images/defaults/male.jpg";
            }
            else {
                dp_path = "assets/images/defaults/female.jpg";
            }
            this.authService.register(username, password, name, gender, dp_path).subscribe(function (data) {
                _this.selectedGender = "";
                _this.loader = true;
                setTimeout(function () {
                    _this.loader = false;
                    sweetalert2__WEBPACK_IMPORTED_MODULE_2___default()({
                        title: 'Registered Successfully',
                        text: 'You may now login your account',
                        type: 'success',
                    });
                }, 1500);
                _this.regUser.nativeElement.value = "";
                _this.regPass.nativeElement.value = "";
                _this.regName.nativeElement.value = "";
            }, function (error) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default()({
                    title: 'Username already taken',
                    type: 'error',
                });
            });
        }
        else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default()({
                title: "Please fill all fields",
                type: "error"
            });
        }
    };
    AuthenticationComponent.prototype.userLogin = function (username, password) {
        var _this = this;
        // console.log(username, password)
        if (username == "admin" && password == "admin") {
            this.router.navigate(["/admin-auth"]);
        }
        else {
            this.authService.login(username, password).subscribe(function (successData) {
                localStorage.setItem("Authorization", "Bearer " + successData);
                _this.loader = true;
                setTimeout(function () {
                    _this.loader = false;
                    _this.router.navigate(["/"]);
                }, 1500);
            }, function (error) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default()({
                    title: error.error.message,
                    type: "error"
                });
            });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('registerUsername'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], AuthenticationComponent.prototype, "regUser", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('registerPassword'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], AuthenticationComponent.prototype, "regPass", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('registerFullname'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], AuthenticationComponent.prototype, "regName", void 0);
    AuthenticationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-authentication',
            template: __webpack_require__(/*! ./authentication.component.html */ "./src/app/authentication/authentication.component.html"),
            styles: [__webpack_require__(/*! ./authentication.component.css */ "./src/app/authentication/authentication.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AuthenticationComponent);
    return AuthenticationComponent;
}());



/***/ }),

/***/ "./src/app/configs/config.ts":
/*!***********************************!*\
  !*** ./src/app/configs/config.ts ***!
  \***********************************/
/*! exports provided: config */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });
// //For testing purposes
// export const config = {
//     ip: "http://localhost:8080/"
// }
// For deployment
var config = {
    ip: "https://gordoncollegesds.herokuapp.com/"
};


/***/ }),

/***/ "./src/app/configs/questionClass.ts":
/*!******************************************!*\
  !*** ./src/app/configs/questionClass.ts ***!
  \******************************************/
/*! exports provided: Questions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Questions", function() { return Questions; });
var Questions = /** @class */ (function () {
    function Questions() {
        this.questions = [
            //Activities Section R
            {
                icon_path: "assets/icons/R_icon.png",
                data: [
                    { qst: "Repair electrical things", like: false, isTouched: false },
                    { qst: "Repair cars", like: false, isTouched: false },
                    { qst: "Install,build or repair mechanical things", like: false, isTouched: false },
                    { qst: "Take a technology education course(e.g, industrial arts, shop)", like: false, isTouched: false },
                    { qst: "Take a woodworking course", like: false, isTouched: false },
                    { qst: "Take a mechanics course", like: false, isTouched: false },
                    { qst: "Operate heavy machinery or equipment", like: false, isTouched: false },
                    { qst: "Work with hand tools", like: false, isTouched: false },
                    { qst: "Set up electronic equipment", like: false, isTouched: false },
                    { qst: "Repair a fence", like: false, isTouched: false },
                    { qst: "Use metalworking or machine tools", like: false, isTouched: false },
                    { qst: "Build things", like: false, isTouched: false },
                    { qst: "Work with tools", like: false, isTouched: false },
                ],
                color: "#f1463c"
            },
            {
                icon_path: "assets/icons/I_icon.png",
                data: [
                    { qst: "Read scientific books or magazine", like: false, isTouched: false },
                    { qst: "Work in a research office or laboratory", like: false, isTouched: false },
                    { qst: "Work on a scientific project", like: false, isTouched: false },
                    { qst: "Study a scientific theory", like: false, isTouched: false },
                    { qst: "Apply mathematics to practical problems", like: false, isTouched: false },
                    { qst: "Take a physics course", like: false, isTouched: false },
                    { qst: "Take a chemistry course", like: false, isTouched: false },
                    { qst: "Take a mathematics course(e.g., algebra, statistics)", like: false, isTouched: false },
                    { qst: "Take a biology course", like: false, isTouched: false },
                    { qst: "Study scholarly or technical problems", like: false, isTouched: false },
                    { qst: "Conduct experiments", like: false, isTouched: false },
                    { qst: "Investigate the cause of a problem", like: false, isTouched: false },
                    { qst: "Develop a research study", like: false, isTouched: false },
                    { qst: "Find solutions to complex problems", like: false, isTouched: false },
                ],
                color: "#F7941D"
            },
            {
                icon_path: "assets/icons/A_icon.png",
                data: [
                    { qst: "Sketch, draw, paint", like: false, isTouched: false },
                    { qst: "Design furniture, clothing or printed materials", like: false, isTouched: false },
                    { qst: "Play a musical instrument", like: false, isTouched: false },
                    { qst: "Create portraits or photographs", like: false, isTouched: false },
                    { qst: "Write novels or plays", like: false, isTouched: false },
                    { qst: "Take a course in art or design", like: false, isTouched: false },
                    { qst: "Arrange or compose music of any kind", like: false, isTouched: false },
                    { qst: "Work with gifted artist, writer, or sculptor", like: false, isTouched: false },
                    { qst: "Perform for others (e.g., dance, sing, act)", like: false, isTouched: false },
                    { qst: "Edit a magazine or journal", like: false, isTouched: false },
                    { qst: "Create graphic art", like: false, isTouched: false },
                    { qst: "Write for a magazine or newspaper", like: false, isTouched: false },
                    { qst: "Read or write poetry", like: false, isTouched: false },
                    { qst: "Edit a book or magazine", like: false, isTouched: false },
                ],
                color: "#FFCE02"
            },
            {
                icon_path: "assets/icons/S_icon.png",
                data: [
                    { qst: "Meet important educators or therapists", like: false, isTouched: false },
                    { qst: "Work for a charity", like: false, isTouched: false },
                    { qst: "Help others with their personal problems", like: false, isTouched: false },
                    { qst: "Study juvenile delinquency", like: false, isTouched: false },
                    { qst: "Read psychology articles or books", like: false, isTouched: false },
                    { qst: "Take a human relations course", like: false, isTouched: false },
                    { qst: "Teach children (e.g., elementary, middle, high school)", like: false, isTouched: false },
                    { qst: "Teach adults", like: false, isTouched: false },
                    { qst: "Work as a volunteer", like: false, isTouched: false },
                    { qst: "Take care of young children", like: false, isTouched: false },
                    { qst: "Take a self-improvement course", like: false, isTouched: false },
                    { qst: "Help people with their physical or emotional needs", like: false, isTouched: false },
                    { qst: "Work or volunteer for a non-profit organization", like: false, isTouched: false },
                    { qst: "Help people with special needs", like: false, isTouched: false },
                ],
                color: "#00763F"
            },
            {
                icon_path: "assets/icons/E_icon.png",
                data: [
                    { qst: "Learn strategies for business success", like: false, isTouched: false },
                    { qst: "Meet important executives and leaders", like: false, isTouched: false },
                    { qst: "Promote a product", like: false, isTouched: false },
                    { qst: "Act as a business consultant", like: false, isTouched: false },
                    { qst: "Supervise the work of others", like: false, isTouched: false },
                    { qst: "Lead a group in accomplishing a goal", like: false, isTouched: false },
                    { qst: "Operate or run a service or business", like: false, isTouched: false },
                    { qst: "Take a course on administration or leadership", like: false, isTouched: false },
                    { qst: "Give a sales pitch", like: false, isTouched: false },
                    { qst: "Read business magazines or articles", like: false, isTouched: false },
                    { qst: "Make important decisions", like: false, isTouched: false },
                    { qst: "Serve as an officer of a group", like: false, isTouched: false },
                    { qst: "Start my own business", like: false, isTouched: false },
                    { qst: "Attend sales meetings or conferences", like: false, isTouched: false },
                ],
                color: "#0073A4"
            },
            {
                icon_path: "assets/icons/C_icon.png",
                data: [
                    { qst: "Fill out detailed forms", like: false, isTouched: false },
                    { qst: "Perform math calculations in bookkeeping or business", like: false, isTouched: false },
                    { qst: "Operate office equipment (e.g., copy machine, fax, computer)", like: false, isTouched: false },
                    { qst: "Keep detailed records of expenses", like: false, isTouched: false },
                    { qst: "Set up a record-keeping system", like: false, isTouched: false },
                    { qst: "Take an accounting course", like: false, isTouched: false },
                    { qst: "Take an inventory of supplies or products", like: false, isTouched: false },
                    { qst: "Check paperwork or products for errors or flaws", like: false, isTouched: false },
                    { qst: "Update records or files", like: false, isTouched: false },
                    { qst: "Work in an office", like: false, isTouched: false },
                    { qst: "Write business letters", like: false, isTouched: false },
                    { qst: "Develop an organizational system", like: false, isTouched: false },
                    { qst: "Schedule and organize meetings", like: false, isTouched: false },
                    { qst: "Take a bookkeeping course", like: false, isTouched: false },
                ],
                color: "#9279B7"
            },
            {
                icon_path: "assets/icons/R_icon.png",
                data: [
                    { qst: "I have used carpentry tools such as a power saw, lathe, or sander", like: false, isTouched: false },
                    { qst: "I can make a scale drawing", like: false, isTouched: false },
                    { qst: "I can change a car's oil or tire", like: false, isTouched: false },
                    { qst: "I have used power tools such as a drill press or grinder", like: false, isTouched: false },
                    { qst: "I can refinish furniture or woodwork", like: false, isTouched: false },
                    { qst: "I can make simple electrical repairs", like: false, isTouched: false },
                    { qst: "I can repair furniture", like: false, isTouched: false },
                    { qst: "I can use many carpentry tools", like: false, isTouched: false },
                    { qst: "I can make simple plumbing repairs", like: false, isTouched: false },
                    { qst: "I can build simple objects with wood", like: false, isTouched: false },
                    { qst: "I can paint a room", like: false, isTouched: false },
                    { qst: "I can read blueprints", like: false, isTouched: false },
                    { qst: "I can make simple repairs to home appliances (e.g., dishwasher, TV)", like: false, isTouched: false },
                    { qst: "I have used a computerized drafting program", like: false, isTouched: false },
                ],
                color: "#F0483E"
            },
            {
                icon_path: "assets/icons/I_icon.png",
                data: [
                    { qst: "I can use formulas to solve mathematical problems", like: false, isTouched: false },
                    { qst: "I can perform a scientific experiment or survey", like: false, isTouched: false },
                    { qst: "I understand the half-life of a radioactive element", like: false, isTouched: false },
                    { qst: "I know how to access resources to aid in solving scientific problems", like: false, isTouched: false },
                    { qst: "I can describe the function of white blood cells", like: false, isTouched: false },
                    { qst: "I can interpret simple chemical formulas", like: false, isTouched: false },
                    { qst: "I understand why man-made satellites do not fall to earth", like: false, isTouched: false },
                    { qst: "I can write a scientific report", like: false, isTouched: false },
                    { qst: 'I understand the "Big Bang" theory of the universe', like: false, isTouched: false },
                    { qst: "I understand the role of DNA in genetics", like: false, isTouched: false },
                    { qst: "I can use a microscope", like: false, isTouched: false },
                    { qst: "I understand the phases of mitosis", like: false, isTouched: false },
                    { qst: "I can use a scientific calculator", like: false, isTouched: false },
                    { qst: "I can solve puzzles that involve logical thinking", like: false, isTouched: false },
                ],
                color: "#F7941D"
            },
            {
                icon_path: "assets/icons/A_icon.png",
                data: [
                    { qst: "I can play a musical instrument", like: false, isTouched: false },
                    { qst: "I can act in a play", like: false, isTouched: false },
                    { qst: "I can paint, draw, or sculpt", like: false, isTouched: false },
                    { qst: "I can arrange or compose music", like: false, isTouched: false },
                    { qst: "I can design clothing", like: false, isTouched: false },
                    { qst: "I write stories or poetry", like: false, isTouched: false },
                    { qst: "I can write a speech", like: false, isTouched: false },
                    { qst: "I can create an artistic representation of a concept or an idea", like: false, isTouched: false },
                    { qst: "I can write a script", like: false, isTouched: false },
                    { qst: "I can write news stories", like: false, isTouched: false },
                    { qst: "I can sketch people so that they can be recognized", like: false, isTouched: false },
                    { qst: "I can create graphic art", like: false, isTouched: false },
                    { qst: "I can design the packaging for a product", like: false, isTouched: false },
                    { qst: "I can write advertising copy", like: false, isTouched: false },
                ],
                color: "#FFCE02"
            },
            {
                icon_path: "assets/icons/S_icon.png",
                data: [
                    { qst: "I find it easy to talk with all kinds of people", like: false, isTouched: false },
                    { qst: "I am good at explaining things to others", like: false, isTouched: false },
                    { qst: "People seek me out to tell me their troubles", like: false, isTouched: false },
                    { qst: "I am good at helping people who are upset or troubled", like: false, isTouched: false },
                    { qst: "I have a good understanding of social relationships", like: false, isTouched: false },
                    { qst: "I am good at teaching others", like: false, isTouched: false },
                    { qst: "I am good at making people feel at ease", like: false, isTouched: false },
                    { qst: "I am much better at working with people than with things or ideas", like: false, isTouched: false },
                    { qst: "I can help people see situations from different perspectives", like: false, isTouched: false },
                    { qst: "It is easy for me to talk to people I just met", like: false, isTouched: false },
                    { qst: "I have participated in or organized charity events or benefit drives", like: false, isTouched: false },
                    { qst: "I can easily read people's non-verbal cues", like: false, isTouched: false },
                    { qst: "I am good at helping people plan their futures", like: false, isTouched: false },
                    { qst: "I can facilitate group discussions", like: false, isTouched: false },
                ],
                color: "#00763F"
            },
            {
                icon_path: "assets/icons/E_icon.png",
                data: [
                    { qst: "I know how to be a successful leader", like: false, isTouched: false },
                    { qst: "I am a good public speaker", like: false, isTouched: false },
                    { qst: "I can manage a sales campaign", like: false, isTouched: false },
                    { qst: "I can organize the work of others", like: false, isTouched: false },
                    { qst: "I am an ambitious and assertive person", like: false, isTouched: false },
                    { qst: "I am good at getting people to do things my way", like: false, isTouched: false },
                    { qst: "I am a good salesperson", like: false, isTouched: false },
                    { qst: "I am a good debater", like: false, isTouched: false },
                    { qst: "I can be very persuasive", like: false, isTouched: false },
                    { qst: "I have leadership skills", like: false, isTouched: false },
                    { qst: "I am good at planning a strategy to achieve a goal", like: false, isTouched: false },
                    { qst: "I can successfully negotiate a deal", like: false, isTouched: false },
                    { qst: "I am good at motivating others", like: false, isTouched: false },
                    { qst: "I am good at managing the work of others", like: false, isTouched: false },
                ],
                color: "#0073A4"
            },
            {
                icon_path: "assets/icons/C_icon.png",
                data: [
                    { qst: "I can file paperwork", like: false, isTouched: false },
                    { qst: "I can do a lot of paperwork in a short time", like: false, isTouched: false },
                    { qst: "I can accurately enter data into a computer", like: false, isTouched: false },
                    { qst: "I can write business letters", like: false, isTouched: false },
                    { qst: "I can perform office tasks (e.g., routing paperwork, answering the phone, typing)", like: false, isTouched: false },
                    { qst: "I am a careful and orderly person", like: false, isTouched: false },
                    { qst: "I can create a spreadsheet", like: false, isTouched: false },
                    { qst: "I can take detailed notes during a meeting", like: false, isTouched: false },
                    { qst: "I am good at getting information over the phone", like: false, isTouched: false },
                    { qst: "I can use a word processing program", like: false, isTouched: false },
                    { qst: "I can maintain records (e.g., inventory, employee, medical)", like: false, isTouched: false },
                    { qst: "I can organize/schedule business meetings", like: false, isTouched: false },
                    { qst: "I can direct/transfer phone calls", like: false, isTouched: false },
                    { qst: "I can keep records of financial transactions", like: false, isTouched: false },
                ],
                color: "#9279B7"
            },
            {
                icon_path: "assets/icons/R_icon.png",
                data: [
                    { qst: "Aircraft mechanic", like: false, isTouched: false },
                    { qst: "Automobile mechanic", like: false, isTouched: false },
                    { qst: "Carpenter", like: false, isTouched: false },
                    { qst: "Truck driver", like: false, isTouched: false },
                    { qst: "Construction inspector", like: false, isTouched: false },
                    { qst: "Machinist", like: false, isTouched: false },
                    { qst: "Electrician", like: false, isTouched: false },
                    { qst: "Farmer", like: false, isTouched: false },
                    { qst: "Helicopter pilot", like: false, isTouched: false },
                    { qst: "Welder", like: false, isTouched: false },
                    { qst: "Forester", like: false, isTouched: false },
                    { qst: "Roofer", like: false, isTouched: false },
                    { qst: "Wildlife control agent", like: false, isTouched: false },
                    { qst: "Plumber", like: false, isTouched: false },
                ],
                color: "#F0483E"
            },
            {
                icon_path: "assets/icons/I_icon.png",
                data: [
                    { qst: "Meteorologist", like: false, isTouched: false },
                    { qst: "Biologist", like: false, isTouched: false },
                    { qst: "Astronomer", like: false, isTouched: false },
                    { qst: "Medical laboratory assistant", like: false, isTouched: false },
                    { qst: "Anthropologist", like: false, isTouched: false },
                    { qst: "Chemist", like: false, isTouched: false },
                    { qst: "Botanist", like: false, isTouched: false },
                    { qst: "Research assistant", like: false, isTouched: false },
                    { qst: "Physicist", like: false, isTouched: false },
                    { qst: "Environmental analyst", like: false, isTouched: false },
                    { qst: "Surgeon", like: false, isTouched: false },
                    { qst: "Pharmacist", like: false, isTouched: false },
                    { qst: "Physician", like: false, isTouched: false },
                    { qst: "Veterinarian", like: false, isTouched: false },
                ],
                color: "#F7941D"
            },
            {
                icon_path: "assets/icons/A_icon.png",
                data: [
                    { qst: "Musician", like: false, isTouched: false },
                    { qst: "Writer", like: false, isTouched: false },
                    { qst: "Actor", like: false, isTouched: false },
                    { qst: "Musical arranger", like: false, isTouched: false },
                    { qst: "Artist/painter", like: false, isTouched: false },
                    { qst: "Composer", like: false, isTouched: false },
                    { qst: "Sculptor", like: false, isTouched: false },
                    { qst: "Web developer/designer", like: false, isTouched: false },
                    { qst: "Illustrator", like: false, isTouched: false },
                    { qst: "Photojournalist", like: false, isTouched: false },
                    { qst: "Graphic artist/designer", like: false, isTouched: false },
                    { qst: "Art instructor", like: false, isTouched: false },
                    { qst: "Film/video editor", like: false, isTouched: false },
                    { qst: "Lyricist", like: false, isTouched: false },
                ],
                color: "#FFCE02"
            },
            {
                icon_path: "assets/icons/S_icon.png",
                data: [
                    { qst: "Career counselor", like: false, isTouched: false },
                    { qst: "School teacher", like: false, isTouched: false },
                    { qst: "Substance abuse counselor", like: false, isTouched: false },
                    { qst: "Speech-language pathologist", like: false, isTouched: false },
                    { qst: "Marriage and family therapist", like: false, isTouched: false },
                    { qst: "Clinical psychologist", like: false, isTouched: false },
                    { qst: "Camp counselor", like: false, isTouched: false },
                    { qst: "Social worker", like: false, isTouched: false },
                    { qst: "Academic advisor", like: false, isTouched: false },
                    { qst: "Physical therapist", like: false, isTouched: false },
                    { qst: "Vocational rehabilitation counselor", like: false, isTouched: false },
                    { qst: "Nanny", like: false, isTouched: false },
                    { qst: "Recreation worker", like: false, isTouched: false },
                    { qst: "School principal", like: false, isTouched: false },
                ],
                color: "#00763F"
            },
            {
                icon_path: "assets/icons/E_icon.png",
                data: [
                    { qst: "Buyer", like: false, isTouched: false },
                    { qst: "Manufacturer's representative", like: false, isTouched: false },
                    { qst: "Chief executive", like: false, isTouched: false },
                    { qst: "Salesperson", like: false, isTouched: false },
                    { qst: "Real estate sales agent", like: false, isTouched: false },
                    { qst: "Retail store manager", like: false, isTouched: false },
                    { qst: "Sales manager", like: false, isTouched: false },
                    { qst: "Program director(TV)", like: false, isTouched: false },
                    { qst: "Entrepreneur", like: false, isTouched: false },
                    { qst: "Financial manager", like: false, isTouched: false },
                    { qst: "Estate planner", like: false, isTouched: false },
                    { qst: "Hotel/motel manager", like: false, isTouched: false },
                    { qst: "Marketing executive/director", like: false, isTouched: false },
                    { qst: "Financial planner", like: false, isTouched: false },
                ],
                color: "#0073A4"
            },
            {
                icon_path: "assets/icons/C_icon.png",
                data: [
                    { qst: "Bookkeeper", like: false, isTouched: false },
                    { qst: "Accountant", like: false, isTouched: false },
                    { qst: "Bank teller", like: false, isTouched: false },
                    { qst: "Tax preparer", like: false, isTouched: false },
                    { qst: "Financial analyst", like: false, isTouched: false },
                    { qst: "Budget Clerk", like: false, isTouched: false },
                    { qst: "Accounting/collections clerk", like: false, isTouched: false },
                    { qst: "Auditor", like: false, isTouched: false },
                    { qst: "Receptionist", like: false, isTouched: false },
                    { qst: "Cashier", like: false, isTouched: false },
                    { qst: "File clerk", like: false, isTouched: false },
                    { qst: "Customer service representative", like: false, isTouched: false },
                    { qst: "Court clerk", like: false, isTouched: false },
                    { qst: "Medical records technician", like: false, isTouched: false },
                ],
                color: "#9279B7"
            },
        ];
    }
    return Questions;
}());



/***/ }),

/***/ "./src/app/data/criteria.ts":
/*!**********************************!*\
  !*** ./src/app/data/criteria.ts ***!
  \**********************************/
/*! exports provided: criteria */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "criteria", function() { return criteria; });
var criteria = [
    {
        fieldname: "year", values: [
            { label: "1st", isChecked: false },
            { label: "2nd", isChecked: false },
            { label: "3rd", isChecked: false },
            { label: "4th", isChecked: false },
        ]
    },
    {
        fieldname: "course", values: [
            { label: "BSCS", isChecked: false },
            { label: "BSIT", isChecked: false },
            { label: "ACT", isChecked: false },
            { label: "MAEd", isChecked: false },
            { label: "MAN", isChecked: false },
            { label: "MBM", isChecked: false },
            { label: "MPA", isChecked: false },
            { label: "BSN", isChecked: false },
            { label: "BSM", isChecked: false },
            { label: "BSA", isChecked: false },
            { label: "BSBA-FM", isChecked: false },
            { label: "BSBA-HRM", isChecked: false },
            { label: "BSBA-MM", isChecked: false },
            { label: "BSEMC", isChecked: false },
            { label: "BACOM", isChecked: false },
            { label: "BECEd", isChecked: false },
            { label: "BACAEd", isChecked: false },
            { label: "BEEd", isChecked: false },
            { label: "BPEd", isChecked: false },
            { label: "BSEd", isChecked: false },
            { label: "BSHM", isChecked: false },
            { label: "BSTM", isChecked: false },
        ]
    },
    {
        fieldname: "gender", values: [
            { label: "male", isChecked: false },
            { label: "female", isChecked: false }
        ]
    },
    {
        fieldname: "study_status", values: [
            { label: "very good", isChecked: false },
            { label: "good", isChecked: false },
            { label: "not so good", isChecked: false },
            { label: "bad", isChecked: false }
        ]
    }
];


/***/ }),

/***/ "./src/app/data/problems.ts":
/*!**********************************!*\
  !*** ./src/app/data/problems.ts ***!
  \**********************************/
/*! exports provided: problems */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "problems", function() { return problems; });
var problems = {
    problems: [
        {
            name: "Physiological", questions: [
                { label: "Often have headaches", value: false, fieldname: "often_have_headaches" },
                { label: "Trouble with my eyes", value: false, fieldname: "trouble_with_eyes" },
                { label: "Can't hear well", value: false, fieldname: "cant_hear_well" },
                { label: "Have trouble with my teeth", value: false, fieldname: "trouble_with_teeth" },
                { label: "Don't get enougth sleep", value: false, fieldname: "dont_get_enough_sleep" },
                { label: "Getting tired too easily", value: false, fieldname: "tired_too_easily" },
                { label: "Often get sick and not healthy", value: false, fieldname: "often_get_sick" },
                { label: "Not eating the right food", value: false, fieldname: "not_eating_right_food" },
                { label: "Bothered by physically disability", value: false, fieldname: "bothered_by_disability" },
            ]
        },
        {
            name: "Financial", questions: [
                { label: "Having no regular allowance", value: false, fieldname: "no_regular_allowance" },
                { label: "Financial dependence on others", value: false, fieldname: "financial_dependance_onOthers" },
                { label: "Family worried about money", value: false, fieldname: "family_worried_about_money" },
                { label: "Parents working too hard", value: false, fieldname: "parents_working_too_hard" },
                { label: "Thinking of leaving college to look for a job", value: false, fieldname: "dropout_college_forJob" },
            ]
        },
        {
            name: "Social and Reacreational Activities", questions: [
                { label: "Not allowed to go out with someone I like", value: false, fieldname: "strict_parents" },
                { label: "Too little chance to do what I want to", value: false, fieldname: "cant_do_what_iwant" },
                { label: "Feeling uncomfortable with other people", value: false, fieldname: "uncomfi_with_otherpeople" },
                { label: "Not using my time well", value: false, fieldname: "not_using_my_timewell" },
                { label: "Too little time for myself", value: false, fieldname: "little_time_onmyself" },
                { label: "Smoking", value: false, fieldname: "smoking" },
                { label: "Drinking liquor", value: false, fieldname: "drinking" },
                { label: "Getting hooked on computers", value: false, fieldname: "addicted_on_computers" },
            ]
        },
        {
            name: "Courtship, Sex and Marriage", questions: [
                { label: "Feels embarrassed when talking about sex", value: false, fieldname: "shy_when_talking_aboutsex" },
                { label: "Not sure about proper sex behavior", value: false, fieldname: "dont_know_proper_sexBehavior" },
                { label: "Thinking too much about sex", value: false, fieldname: "thinking_toomuch_about_sex" },
                { label: "Being too jealous and envious to others", value: false, fieldname: "too_jealous_envious_to_others" },
                { label: "Sometimes wishing I were a boy/girl", value: false, fieldname: "wishing_im_boyORgirl" },
                { label: "Being in love", value: false, fieldname: "inlove" },
                { label: "Wondering if I'll get married", value: false, fieldname: "doubt_about_getting_married" },
                { label: "Problems with boyfriend/girlfriend", value: false, fieldname: "problems_with_bfgf" },
            ]
        },
        {
            name: "Social Psychological Relations", questions: [
                { label: "Being timid or shy", value: false, fieldname: "timid_or_shy" },
                { label: "Get hurt easily", value: false, fieldname: "hurt_easily" },
                { label: "Nobody to share my problems with", value: false, fieldname: "nobody_to_share_my_problems" },
                { label: "Being childish or immature", value: false, fieldname: "childish_immature" },
                { label: "Cannot get along with other people", value: false, fieldname: "introvert" },
                { label: "Having friends with negative or bad influences", value: false, fieldname: "bad_influence_friends" },
                { label: "Being the subject of teasing", value: false, fieldname: "subject_of_teasing" },
            ]
        },
        {
            name: "Peronal Psychological Relations", questions: [
                { label: "Worrying too much", value: false, fieldname: "worrying_too_much" },
                { label: "Being nervous", value: false, fieldname: "being_nervous" },
                { label: "Gets discouraged easily", value: false, fieldname: "discouraged_easily" },
                { label: "Daydreaming", value: false, fieldname: "daydreaming" },
                { label: "Being lazy", value: false, fieldname: "being_lazy" },
                { label: "Having memories of an unhappy childhood", value: false, fieldname: "memories_of_unhappy_childhood" },
                { label: "Wishing I'd never been born", value: false, fieldname: "never_been_born" },
                { label: "Being materialistic", value: false, fieldname: "materialistic" },
                { label: "Getting too dependent on electronic gadgets", value: false, fieldname: "dependent_gadgets" },
                { label: "Difficulty setting my priorities", value: false, fieldname: "difficulty_setting_priorities" },
                { label: "Having low self esteem", value: false, fieldname: "low_self_esteem" },
            ]
        },
        {
            name: "Morals and Religion", questions: [
                { label: "Losing my temper", value: false, fieldname: "losing_my_temper" },
                { label: "Not going to church often enough", value: false, fieldname: "not_going_to_church" },
                { label: "Having guilty conscience", value: false, fieldname: "guilty_conscience" },
                { label: "Wanting to feel close to God", value: false, fieldname: "wanting_to_close_to_god" },
                { label: "Confused in some of my religious beliefs", value: false, fieldname: "confused_religious_beliefs" },
                { label: "Wanting to know and understand the Bible", value: false, fieldname: "wanting_know_bible" },
                { label: "Having bad attitudes or habits", value: false, fieldname: "bad_attitudes_habits" },
            ]
        },
        {
            name: "Curriculum and Teaching Procedures", questions: [
                { label: "Teachers hard to understand", value: false, fieldname: "teachers_hard_to_understand" },
                { label: "Not getting along with the teacher", value: false, fieldname: "not_getting_along" },
                { label: "Textbooks/lessons hard to understand", value: false, fieldname: "lesson_hard_to_understand" },
                { label: "Difficulty using media based technology", value: false, fieldname: "hard_using_media_tech" },
                { label: "Problems with my subject/s", value: false, fieldname: "problems_with_subjects" },
            ]
        },
        {
            name: "Home and Family", questions: [
                { label: "Worried about someone in the family", value: false, fieldname: "worried_about_someone_fam" },
                { label: "Family quarrels", value: false, fieldname: "family_quarrels" },
                { label: "Death in the family", value: false, fieldname: "death_fam" },
                { label: "Problem about mother", value: false, fieldname: "prob_mom" },
                { label: "Problem about father", value: false, fieldname: "prob_dad" },
                { label: "Parents having favorites in the family", value: false, fieldname: "parents_fav_family" },
                { label: "Being treated like a child", value: false, fieldname: "treated_like_child" },
                { label: "Parents are strict", value: false, fieldname: "parents_stict" },
                { label: "Parents expecting too much from me", value: false, fieldname: "parents_expecting_much" },
                { label: "Parents making too much decision for me", value: false, fieldname: "parents_decision_for_me" },
                { label: "Not living with parents", value: false, fieldname: "not_living_with_parents" },
                { label: "Feeling I don't really have home", value: false, fieldname: "feel_dont_have_home" },
                { label: "Wanting to run away from home", value: false, fieldname: "want_to_run_away_from_home" },
                { label: "Getting homesick", value: false, fieldname: "homesick" },
                { label: "Parents are separated", value: false, fieldname: "parents_separated" },
            ]
        },
        {
            name: "Education and Vocation", questions: [
                { label: "Wanting to know more about trades/skills", value: false, fieldname: "want_know_more_skills" },
                { label: "Unable to express myself well in words", value: false, fieldname: "unable_to_express" },
                { label: "Wanting to drop from school", value: false, fieldname: "want_drop_school" },
                { label: "Losing enthusiasm with my studies", value: false, fieldname: "losing_enthusiams_studies" },
            ]
        },
        {
            name: "Adjustments to School Relations", questions: [
                { label: "Difficulty dealing with school rules and regulations", value: false, fieldname: "hard_obey_scohol_rules" },
                { label: "Having trouble with school personnel", value: false, fieldname: "trouble_with_personnel" },
                { label: "Afraid to speak in front of the class", value: false, fieldname: "afraid_speak_infront_class" },
                { label: "Not spending enough time in school work", value: false, fieldname: "no_time_for_schoolwork" },
                { label: "Hard to study in a boarding house", value: false, fieldname: "hardtostudy_in_boardinghouse" },
                { label: "Part-time student part-time worker", value: false, fieldname: "part_time_stud" },
                { label: "Difficulty in adjusting to school environment", value: false, fieldname: "hard_adjust_school_environment" },
            ]
        }
    ]
};


/***/ }),

/***/ "./src/app/estimates/estimates.component.css":
/*!***************************************************!*\
  !*** ./src/app/estimates/estimates.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".clear{\r\n    background-color:#ebebeb;\r\n}\r\n.low{\r\n    background-color: #f44336;\r\n    font-weight: bolder;\r\n}\r\n.med{\r\n    background-color: #ff9800;\r\n    font-weight: bolder;\r\n}\r\n.high{\r\n    background-color: #4caf50;\r\n    font-weight: bolder;\r\n}\r\n.r_bg{\r\n    background-color:#f0483e;\r\n  }\r\n.r_text{\r\n    color:#f0483e !important;\r\n  }\r\n.i_bg{\r\n    background-color:#f8941e;\r\n  }\r\n.i_text{\r\n    color:#f8941e !important;\r\n  }\r\n.a_bg{\r\n    background-color:#ffce02;\r\n  }\r\n.a_text{\r\n    color:#ffce02 !important;\r\n  }\r\n.s_bg{\r\n    background-color:#00773f;\r\n  }\r\n.s_text{\r\n    color:#00773f !important;\r\n  }\r\n.e_bg{\r\n    background-color:#0073a4;\r\n  }\r\n.e_text{\r\n    color:#0073a4 !important;\r\n  }\r\n.c_bg{\r\n    background-color:#9279b7;\r\n  }\r\n.c_text{\r\n    color:#9279b7 !important;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXN0aW1hdGVzL2VzdGltYXRlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0NBQzVCO0FBQ0Q7SUFDSSwwQkFBMEI7SUFDMUIsb0JBQW9CO0NBQ3ZCO0FBQ0Q7SUFDSSwwQkFBMEI7SUFDMUIsb0JBQW9CO0NBQ3ZCO0FBQ0Q7SUFDSSwwQkFBMEI7SUFDMUIsb0JBQW9CO0NBQ3ZCO0FBRUQ7SUFDSSx5QkFBeUI7R0FDMUI7QUFDRDtJQUNFLHlCQUF5QjtHQUMxQjtBQUNEO0lBQ0UseUJBQXlCO0dBQzFCO0FBQ0Q7SUFDRSx5QkFBeUI7R0FDMUI7QUFFRDtJQUNFLHlCQUF5QjtHQUMxQjtBQUNEO0lBQ0UseUJBQXlCO0dBQzFCO0FBRUQ7SUFDRSx5QkFBeUI7R0FDMUI7QUFDRDtJQUNFLHlCQUF5QjtHQUMxQjtBQUVEO0lBQ0UseUJBQXlCO0dBQzFCO0FBQ0Q7SUFDRSx5QkFBeUI7R0FDMUI7QUFFRDtJQUNFLHlCQUF5QjtHQUMxQjtBQUNEO0lBQ0UseUJBQXlCO0dBQzFCIiwiZmlsZSI6InNyYy9hcHAvZXN0aW1hdGVzL2VzdGltYXRlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNsZWFye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojZWJlYmViO1xyXG59XHJcbi5sb3d7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjQ0MzM2O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxufVxyXG4ubWVke1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmOTgwMDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbn1cclxuLmhpZ2h7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGNhZjUwO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxufVxyXG5cclxuLnJfYmd7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmMDQ4M2U7XHJcbiAgfVxyXG4gIC5yX3RleHR7XHJcbiAgICBjb2xvcjojZjA0ODNlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5pX2Jne1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojZjg5NDFlO1xyXG4gIH1cclxuICAuaV90ZXh0e1xyXG4gICAgY29sb3I6I2Y4OTQxZSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICAuYV9iZ3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6I2ZmY2UwMjtcclxuICB9XHJcbiAgLmFfdGV4dHtcclxuICAgIGNvbG9yOiNmZmNlMDIgIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgLnNfYmd7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMwMDc3M2Y7XHJcbiAgfVxyXG4gIC5zX3RleHR7XHJcbiAgICBjb2xvcjojMDA3NzNmICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5lX2Jne1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojMDA3M2E0O1xyXG4gIH1cclxuICAuZV90ZXh0e1xyXG4gICAgY29sb3I6IzAwNzNhNCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICAuY19iZ3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6IzkyNzliNztcclxuICB9XHJcbiAgLmNfdGV4dHtcclxuICAgIGNvbG9yOiM5Mjc5YjcgIWltcG9ydGFudDtcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/estimates/estimates.component.html":
/*!****************************************************!*\
  !*** ./src/app/estimates/estimates.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"view\">\n  <!-- Header -->\n  <app-header></app-header>\n\n  <!-- Header -->\n  <br>\n\n  <div class=\"ui piled segment container\">\n    <h4 class=\"ui header large primary bolder\">Self Directed Search</h4>\n    <p>Rate yourself on each of the following traits, as compared with other persons your own age,\n      by circling the\n      appropriate\n      number.\n    </p>\n    <p>Give an accurate estimate of how you see yourself; try to avoid rating yourself the same each ability.</p>\n  </div>\n\n  <div class=\"ui container center aligned\">\n    <h2 class=\"primary bolder ui header\">Levels</h2>\n    <a class=\"ui tag label\" style=\"background-color:#f44336\">Low</a>\n    <a class=\"ui tag label\" style=\"background-color:#ff9800\">Medium</a>\n    <a class=\"ui tag label\" style=\"background-color:#4caf50\">High</a>\n  </div>\n  <br>\n\n  <div class=\"ui container\">\n    <table class=\"ui table\">\n      <thead>\n        <tr class=\"center aligned\">\n          <th>Mechanical Ability</th>\n          <th>Scientific Ability</th>\n          <th>Artistic Ability</th>\n          <th>Teaching Ability</th>\n          <th>Sales Ability</th>\n          <th>Clerical Ability</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let item of myArray;let i = index\" class=\"center aligned\">\n          <td><button [ngClass]=\"{'ui': true, 'button': true, 'circular': true, 'large': true}\" [ngStyle]=\"{\n                'background-color': selectedMechanical==i ? mechanical.color: '',\n                'font-weight': selectedMechanical==i ? 'bolder' : 'normal'\n              }\"\n              (click)=\"selectedMechanical=i;setValue('mechanical', item);\">{{item}}</button></td>\n\n\n          <td><button [ngClass]=\"{'ui': true, 'button': true, 'circular': true, 'large': true}\" [ngStyle]=\"{\n                  'background-color': selectedScientific==i ? scientific.color : '',\n                  'font-weight': selectedScientific==i ? 'bolder' : 'normal'\n                }\"\n              (click)=\"selectedScientific=i;setValue('scientific', item)\">{{item}}</button></td>\n\n\n          <td><button [ngClass]=\"{'ui': true , 'button': true, 'circular': true, 'large': true}\" [ngStyle]=\"{\n                'background-color': (selectedArtistic==i) ? artistic.color: '',\n                'font-weight': selectedArtistic==i ? 'bolder' : 'normal'\n              }\"\n              (click)=\"selectedArtistic=i;setValue('artistic',item)\">{{item}}</button></td>\n\n          <td><button [ngClass]=\"{'ui': true,'button': true, 'circular': true, 'large': true}\" [ngStyle]=\"{\n                'background-color': (selectedTeaching==i) ? teaching.color: '',\n                'font-weight': selectedTeaching==i ? 'bolder' : 'normal'\n              }\"\n              (click)=\"selectedTeaching=i;setValue('teaching',item);\">{{item}}</button></td>\n\n\n\n          <td><button [ngClass]=\"{'ui': true,'button': true, 'circular': true, 'large': true}\" [ngStyle]=\"{\n                'background-color': (selectedSales==i) ? sales.color: '',\n                'font-weight': selectedSales==i ? 'bolder' : 'normal'\n              }\"\n              (click)=\"selectedSales=i;setValue('sales',item);\">{{item}}</button></td>\n\n\n          <td><button [ngClass]=\"{'ui': true,'button': true, 'circular': true, 'large': true}\" [ngStyle]=\"{\n                'background-color': (selectedClerical==i) ? clerical.color: '',\n                'font-weight': selectedClerical==i ? 'bolder' : 'normal'\n              }\"\n              (click)=\"selectedClerical=i;setValue('clerical',item);\">{{item}}</button></td>\n        </tr>\n\n        <tr class=\"center aligned\">\n          <td>\n            <button class=\"circular ui icon button large\" style=\"background-color:#f0483e\">\n              <i class=\"wrench icon\"></i>\n            </button>\n          </td>\n          <td>\n            <button class=\"circular ui icon button large\" style=\"background-color:#f8941e\">\n              <i class=\"pencil alternate icon\"></i>\n            </button>\n          </td>\n          <td>\n            <button class=\"circular ui icon button large\" style=\"background-color:#ffce02\">\n              <i class=\"paint brush icon\"></i>\n            </button>\n          </td>\n          <td>\n            <button class=\"circular ui icon button large\" style=\"background-color: #00773f\">\n              <i class=\"users icon\"></i>\n            </button>\n\n          </td>\n          <td>\n            <button class=\"circular ui icon button large\" style=\"background-color:#0073a4\">\n              <i class=\"briefcase icon\"></i>\n            </button>\n\n          </td>\n          <td>\n            <button class=\"circular ui icon button large\" style=\"background-color:#9279b7\">\n              <i class=\"file alternate icon\"></i>\n            </button>\n\n          </td>\n        </tr>\n\n\n      </tbody>\n    </table>\n  </div>\n\n  <br>\n\n\n  <div class=\"ui container\">\n    <table class=\"ui table\">\n      <thead>\n        <tr class=\"center aligned\">\n          <th>Manual Ability</th>\n          <th>Math Ability</th>\n          <th>Musical Ability</th>\n          <th>Understand of Others</th>\n          <th>Managerial Ability</th>\n          <th>Office Skills</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let item of myArray;let i = index\" class=\"center aligned\">\n          <td><button [ngClass]=\"{'ui': true, 'button': true, 'circular': true, 'large':true}\" [ngStyle]=\"{\n              'background-color': selectedManual==i ? manual.color: '',\n              'font-weight': selectedManual==i ? 'bolder' : 'normal'\n            }\"\n              (click)=\"selectedManual=i;setValue('manual', item);\">{{item}}</button></td>\n\n          <td><button [ngClass]=\"{'ui': true, 'button': true, 'circular': true, 'large':true}\" [ngStyle]=\"{\n              'background-color': selectedMath==i ? math.color : '',\n              'font-weight': selectedMath==i ? 'bolder' : 'normal'\n            }\"\n              (click)=\"selectedMath=i;setValue('math', item)\">{{item}}</button></td>\n\n\n\n          <td><button [ngClass]=\"{'ui': true , 'button': true, 'circular': true, 'large':true}\" [ngStyle]=\"{\n              'background-color': (selectedMusical==i) ? musical.color: '',\n              'font-weight': selectedMusical==i ? 'bolder' : 'normal'\n            }\"\n              (click)=\"selectedMusical=i;setValue('musical',item)\">{{item}}</button></td>\n\n          <td><button [ngClass]=\"{'ui': true,'button': true, 'circular': true, 'large':true}\" [ngStyle]=\"{\n              'background-color': (selectedUof==i) ? uof.color: '',\n              'font-weight': selectedUof==i ? 'bolder' : 'normal'\n            }\"\n              (click)=\"selectedUof=i;setValue('uof',item);\">{{item}}</button></td>\n\n          <td><button [ngClass]=\"{'ui': true,'button': true, 'circular': true, 'large':true}\" [ngStyle]=\"{\n              'background-color': (selectedManagerial==i) ? managerial.color: '',\n              'font-weight': selectedManagerial==i ? 'bolder' : 'normal'\n            }\"\n              (click)=\"selectedManagerial=i;setValue('managerial',item);\">{{item}}</button></td>\n\n\n          <td><button [ngClass]=\"{'ui': true,'button': true, 'circular': true, 'large':true}\" [ngStyle]=\"{\n              'background-color': (selectedOffice==i) ? office.color: '',\n              'font-weight': selectedOffice==i ? 'bolder' : 'normal'\n            }\"\n              (click)=\"selectedOffice=i;setValue('office',item);\">{{item}}</button></td>\n        </tr>\n\n        <tr class=\"center aligned\">\n          <td>\n            <button class=\"circular ui icon button large\" style=\"background-color:#f0483e\">\n              <i class=\"wrench icon\"></i>\n            </button>\n          </td>\n          <td>\n            <button class=\"circular ui icon button large\" style=\"background-color:#f8941e\">\n              <i class=\"pencil alternate icon\"></i>\n            </button>\n          </td>\n          <td>\n            <button class=\"circular ui icon button large\" style=\"background-color:#ffce02\">\n              <i class=\"paint brush icon\"></i>\n            </button>\n          </td>\n          <td>\n            <button class=\"circular ui icon button large\" style=\"background-color: #00773f\">\n              <i class=\"users icon\"></i>\n            </button>\n\n          </td>\n          <td>\n            <button class=\"circular ui icon button large\" style=\"background-color:#0073a4\">\n              <i class=\"briefcase icon\"></i>\n            </button>\n\n          </td>\n          <td>\n            <button class=\"circular ui icon button large\" style=\"background-color:#9279b7\">\n              <i class=\"file alternate icon\"></i>\n            </button>\n\n          </td>\n        </tr>\n\n\n      </tbody>\n    </table>\n\n    <button class=\"ui button right floated blue\" (click)=\"submit()\">Submit</button>\n  </div>\n\n\n\n\n\n\n\n\n\n  <div *ngIf=\"loader\" class=\"showbox\">\n    <div class=\"loader\">\n      <svg class=\"circular\" viewBox=\"25 25 50 50\">\n        <circle class=\"path\" cx=\"50\" cy=\"50\" r=\"20\" fill=\"none\" stroke-width=\"2\" stroke-miterlimit=\"10\" />\n      </svg>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/estimates/estimates.component.ts":
/*!**************************************************!*\
  !*** ./src/app/estimates/estimates.component.ts ***!
  \**************************************************/
/*! exports provided: EstimatesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstimatesComponent", function() { return EstimatesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
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




var EstimatesComponent = /** @class */ (function () {
    function EstimatesComponent(data, router) {
        this.data = data;
        this.router = router;
        this.myArray = [1, 2, 3, 4, 5, 6, 7];
        this.view = true;
        this.loader = false;
        this.part1Results = Array.apply(null, Array(6));
        this.part2Results = Array.apply(null, Array(6));
        //Part 1
        this.mechanical = { val: 0, color: "" };
        this.scientific = { val: 0, color: "" };
        this.artistic = { val: 0, color: "" };
        this.teaching = { val: 0, color: "" };
        this.sales = { val: 0, color: "" };
        this.clerical = { val: 0, color: "" };
        //Part 2
        this.manual = { val: 0, color: "" };
        this.math = { val: 0, color: "" };
        this.musical = { val: 0, color: "" };
        this.uof = { val: 0, color: "" };
        this.managerial = { val: 0, color: "" };
        this.office = { val: 0, color: "" };
        //Result storage
        this.selfEstiRes = { part1: this.part1Results, part2: this.part2Results };
    }
    EstimatesComponent.prototype.checkProgress = function (section) {
        if (section == localStorage.getItem("tsprog")) {
            return true;
        }
        return false;
    };
    EstimatesComponent.prototype.ngOnInit = function () {
        if (!this.checkProgress("self-estimates")) {
            this.router.navigate([localStorage.getItem("tsprog")]);
        }
    };
    EstimatesComponent.prototype.setValue = function (name, value) {
        if (name == 'mechanical') {
            this.mechanical.val = value;
            this.mechanical.color = this.determineColor(value);
            // console.log(this.mechanical)
        }
        else if (name == 'scientific') {
            this.scientific.val = value;
            this.scientific.color = this.determineColor(value);
            // console.log(this.scientific)
        }
        else if (name == 'artistic') {
            this.artistic.val = value;
            this.artistic.color = this.determineColor(value);
            // console.log(this.artistic)
        }
        else if (name == 'teaching') {
            this.teaching.val = value;
            this.teaching.color = this.determineColor(value);
            // console.log(this.teaching)
        }
        else if (name == 'sales') {
            this.sales.val = value;
            this.sales.color = this.determineColor(value);
            // console.log(this.sales)
        }
        else if (name == 'clerical') {
            this.clerical.val = value;
            this.clerical.color = this.determineColor(value);
            // console.log(this.clerical)
        }
        else if (name == 'manual') {
            this.manual.val = value;
            this.manual.color = this.determineColor(value);
            // console.log(this.manual)
        }
        else if (name == 'math') {
            this.math.val = value;
            this.math.color = this.determineColor(value);
            // console.log(this.math)
        }
        else if (name == 'musical') {
            this.musical.val = value;
            this.musical.color = this.determineColor(value);
            // console.log(this.musical)
        }
        else if (name == 'uof') {
            this.uof.val = value;
            this.uof.color = this.determineColor(value);
            // console.log(this.uof)
        }
        else if (name == 'managerial') {
            this.managerial.val = value;
            this.managerial.color = this.determineColor(value);
            // console.log(this.managerial)
        }
        else if (name == 'office') {
            this.office.val = value;
            this.office.color = this.determineColor(value);
            // console.log(this.office)
        }
    };
    EstimatesComponent.prototype.determineColor = function (value) {
        if (value <= 3) {
            return "#f44336";
        }
        else if (value <= 5) {
            return "#ff9800";
        }
        else {
            return "#4caf50";
        }
    };
    EstimatesComponent.prototype.submit = function () {
        var _this = this;
        if (this.mechanical.val && this.scientific.val && this.artistic.val
            && this.teaching.val && this.sales.val && this.clerical.val
            && this.manual.val && this.math.val && this.musical.val
            && this.uof.val && this.managerial.val && this.office.val != 0) {
            //Store the results in to an linear array
            //Part 1
            this.part1Results[0] = this.mechanical.val;
            this.part1Results[1] = this.scientific.val;
            this.part1Results[2] = this.artistic.val;
            this.part1Results[3] = this.teaching.val;
            this.part1Results[4] = this.sales.val;
            this.part1Results[5] = this.clerical.val;
            //Part 2
            this.part2Results[0] = this.manual.val;
            this.part2Results[1] = this.math.val;
            this.part2Results[2] = this.musical.val;
            this.part2Results[3] = this.uof.val;
            this.part2Results[4] = this.managerial.val;
            this.part2Results[5] = this.office.val;
            // console.log(this.selfEstiRes);
            localStorage.setItem('selfEstiRes', btoa(JSON.stringify(this.selfEstiRes)));
            this.view = false;
            this.loader = true;
            setTimeout(function () {
                _this.loader = false;
                _this.view = true;
                localStorage.setItem("tsprog", "evaluate");
                _this.router.navigate(["evaluate"]);
            }, 2000);
        }
        else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default()({
                title: 'Please fill all the question',
                type: 'error'
            });
        }
    };
    EstimatesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-estimates',
            template: __webpack_require__(/*! ./estimates.component.html */ "./src/app/estimates/estimates.component.html"),
            styles: [__webpack_require__(/*! ./estimates.component.css */ "./src/app/estimates/estimates.component.css")]
        }),
        __metadata("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], EstimatesComponent);
    return EstimatesComponent;
}());



/***/ }),

/***/ "./src/app/evaluate/evaluate.component.css":
/*!*************************************************!*\
  !*** ./src/app/evaluate/evaluate.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V2YWx1YXRlL2V2YWx1YXRlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/evaluate/evaluate.component.html":
/*!**************************************************!*\
  !*** ./src/app/evaluate/evaluate.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Header -->\n<app-header></app-header>\n\n<!-- Header -->\n<br>\n\n\n\n<!-- Rankings Section -->\n<p class=\"center aligned\"><button class=\"ui blue button center large\" routerLink=\"/profile\">\n    Click here to see results\n  </button></p>\n<h1 class=\"ui header primary bolder large center aligned\">Rankings</h1>\n<div class=\"ui grid container\">\n  <div class=\"two wide column\"></div>\n  <div class=\"four wide column center aligned\">\n    <h2 class=\"ui header primary bolder\">1st</h2>\n    <a class=\"ui green circular label massive\">{{firstString}}</a>\n  </div>\n  <div class=\"four wide column center aligned\">\n    <h2 class=\"ui header primary bolder\">2nd</h2>\n    <a class=\"ui orange circular label massive\">{{secondString}}</a>\n  </div>\n  <div class=\"four wide column center aligned\">\n    <h2 class=\"ui header primary bolder\">3rd</h2>\n    <a class=\"ui red circular label massive\">{{thirdString}}</a>\n  </div>\n  <div class=\"two wide column\"></div>\n</div>\n<!-- Rankings Section -->\n<hr>\n<br>\n<br>\n\n<br>\n<div class=\"ui grid container\">\n\n  <div class=\"three wide column\"></div>\n  <div class=\"ten wide column center aligned\">\n\n    <a class=\"ui tag label large\" style=\"background-color:#f0483e\">R</a>\n    <a class=\"ui tag label large\" style=\"background-color:#f8941e\">I</a>\n    <a class=\"ui tag label large\" style=\"background-color:#ffce02\">A</a>\n    <a class=\"ui tag label large\" style=\"background-color:#00773f; color:white\">S</a>\n    <a class=\"ui tag label large\" style=\"background-color:#0073a4; color:white\">E</a>\n    <a class=\"ui tag label large\" style=\"background-color:#9279b7;color:white\">C</a>\n    <h3 class=\"ui header primary bolder\">Color Labels</h3>\n  </div>\n  <div class=\"three wide column\"></div>\n\n</div>\n\n<br>\n\n\n<!-- Activities Section -->\n<div class=\"ui container\">\n  <h4 class=\"ui horizontal divider header \">\n    <i class=\"tag icon\"></i>\n    Activities\n  </h4>\n  <div class=\"ui grid\" style=\"padding:20px;\">\n    <div class=\"two wide column\"></div>\n    <div *ngFor=\"let activity of activities; let i = index\">\n      <div class=\"two wide column\">\n        <a class=\"ui tag label massive\" [ngStyle]=\"{'background-color': getBackgroudColor(i),'width': '100px'}\">{{activity}}</a>\n      </div>\n    </div>\n    <div class=\"two wide column\"></div>\n\n  </div>\n</div>\n<!-- Activities Section -->\n\n<!-- Competencies Section -->\n<div class=\"ui container\">\n  <h4 class=\"ui horizontal divider header \">\n    <i class=\"tag icon\"></i>\n    Competencies\n  </h4>\n  <div class=\"ui grid\" style=\"padding:20px;\">\n    <div class=\"two wide column\"></div>\n    <div *ngFor=\"let competency of competencies; let i = index\">\n      <div class=\"two wide column\">\n        <a class=\"ui tag label massive\" [ngStyle]=\"{'background-color': getBackgroudColor(i),'width': '100px'}\">{{competency}}</a>\n      </div>\n    </div>\n    <div class=\"two wide column\"></div>\n\n  </div>\n</div>\n<!-- Competencies Section -->\n\n\n<!-- Occupations Section -->\n<div class=\"ui container\">\n  <h4 class=\"ui horizontal divider header \">\n    <i class=\"tag icon\"></i>\n    Occupations\n  </h4>\n  <div class=\"ui grid\" style=\"padding:20px;\">\n    <div class=\"two wide column\"></div>\n    <div *ngFor=\"let job of jobs; let i = index\">\n      <div class=\"two wide column\">\n        <a class=\"ui tag label massive\" [ngStyle]=\"{'background-color': getBackgroudColor(i),'width': '100px'}\">{{job}}</a>\n      </div>\n    </div>\n    <div class=\"two wide column\"></div>\n\n  </div>\n</div>\n<!-- Occupations Section -->\n\n\n<!-- Self Estimates Part 1 Section -->\n<div class=\"ui container\">\n  <h4 class=\"ui horizontal divider header\">\n    <i class=\"tag icon\"></i>\n    Self Estimates Part 1\n  </h4>\n  <div class=\"ui grid\" style=\"padding:20px;\">\n    <div class=\"two wide column\"></div>\n    <div *ngFor=\"let selfEsti1 of self_estimates1; let i = index\">\n      <div class=\"two wide column\">\n        <a class=\"ui tag label massive\" [ngStyle]=\"{\n          'background-color': getBackgroudColor(i),\n          'width': '100px'\n        }\">{{selfEsti1}}</a>\n      </div>\n    </div>\n    <div class=\"two wide column\"></div>\n\n  </div>\n</div>\n<!-- Self Estimates Part 1 Section -->\n\n<!-- Self Estimates Part 2 Section -->\n<div class=\"ui container\">\n  <h4 class=\"ui horizontal divider header\">\n    <i class=\"tag icon\"></i>\n    Self Estimates Part 2\n  </h4>\n  <div class=\"ui grid\" style=\"padding:20px;\">\n    <div class=\"two wide column\"></div>\n    <div *ngFor=\"let selfEsti2 of self_estimates2; let i = index\">\n      <div class=\"two wide column\">\n        <a class=\"ui tag label massive\" [ngStyle]=\"{'background-color': getBackgroudColor(i),'width': '100px'}\">{{selfEsti2}}</a>\n      </div>\n    </div>\n    <div class=\"two wide column\"></div>\n\n  </div>\n</div>\n<!-- Self Estimates Part 2 Section -->\n\n<!-- Summary Section -->\n<div class=\"ui container\">\n  <h4 class=\"ui horizontal divider header\">\n    <i class=\"tag icon\"></i>\n    Summary\n  </h4>\n  <div class=\"ui grid\" style=\"padding:20px;\">\n    <div class=\"two wide column\"></div>\n    <div *ngFor=\"let summary of summarys; let i = index\">\n      <div class=\"two wide column\">\n        <a class=\"ui tag label massive\" [ngStyle]=\"{'background-color': getBackgroudColor(i),'width': '100px'}\">{{summary.value}}</a>\n      </div>\n    </div>\n    <div class=\"two wide column\"></div>\n\n  </div>\n</div>\n<!-- Summary Section -->"

/***/ }),

/***/ "./src/app/evaluate/evaluate.component.ts":
/*!************************************************!*\
  !*** ./src/app/evaluate/evaluate.component.ts ***!
  \************************************************/
/*! exports provided: EvaluateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EvaluateComponent", function() { return EvaluateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EvaluateComponent = /** @class */ (function () {
    function EvaluateComponent(authService, router, data) {
        this.authService = authService;
        this.router = router;
        this.data = data;
        this.activities = Array.apply(null, Array(6));
        this.competencies = Array.apply(null, Array(6));
        this.jobs = Array.apply(null, Array(6));
        this.self_estimates1 = Array.apply(null, Array(6));
        this.self_estimates2 = Array.apply(null, Array(6));
        this.summarys = Array.apply(null, Array(6));
        this.summaryHolder = Array.apply(null, Array(6));
        this.firstString = "";
        this.secondString = "";
        this.thirdString = "";
        this.combinations = Array.apply(null, Array());
        this.letters = [
            {
                acronym: "R",
                word: "Realistic"
            },
            {
                acronym: "I",
                word: "Investigative"
            },
            {
                acronym: "A",
                word: "Artistic"
            },
            {
                acronym: "S",
                word: "Social"
            },
            {
                acronym: "E",
                word: "Enterprising"
            },
            {
                acronym: "C",
                word: "Convensional"
            },
        ];
    }
    EvaluateComponent.prototype.checkProgress = function (section) {
        if (section == localStorage.getItem("tsprog")) {
            return true;
        }
        return false;
    };
    EvaluateComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.checkProgress("evaluate")) {
            this.router.navigate([localStorage.getItem("tsprog")]);
        }
        else {
            var resultPart1 = JSON.parse(atob(localStorage.getItem("ph1Res")));
            var resultPart2 = JSON.parse(atob(localStorage.getItem("selfEstiRes")));
            this.activities[0] = resultPart1[0];
            this.activities[1] = resultPart1[1];
            this.activities[2] = resultPart1[2];
            this.activities[3] = resultPart1[3];
            this.activities[4] = resultPart1[4];
            this.activities[5] = resultPart1[5];
            this.competencies[0] = resultPart1[6];
            this.competencies[1] = resultPart1[7];
            this.competencies[2] = resultPart1[8];
            this.competencies[3] = resultPart1[9];
            this.competencies[4] = resultPart1[10];
            this.competencies[5] = resultPart1[11];
            this.jobs[0] = resultPart1[12];
            this.jobs[1] = resultPart1[13];
            this.jobs[2] = resultPart1[14];
            this.jobs[3] = resultPart1[15];
            this.jobs[4] = resultPart1[16];
            this.jobs[5] = resultPart1[17];
            this.self_estimates1 = resultPart2.part1;
            this.self_estimates2 = resultPart2.part2;
            // console.log(this.jobs)
            //Get the summary
            for (var i = 0; i < this.summarys.length; i++) {
                this.summarys[i] = {
                    value: this.activities[i] +
                        this.competencies[i] + this.jobs[i]
                        + this.self_estimates1[i] + this.self_estimates2[i],
                    letter: this.letters[i].acronym,
                    word: this.letters[i].word
                };
                this.summaryHolder[i] = {
                    value: this.activities[i] +
                        this.competencies[i] + this.jobs[i]
                        + this.self_estimates1[i] + this.self_estimates2[i],
                    letter: this.letters[i].acronym,
                    word: this.letters[i].word
                };
            }
            //Get the ranking
            // For testing purpose
            // console.log(this.summaryHolder)
            // this.summaryHolder = [
            //     { value: 33, letter: "R" },
            //     { value: 33, letter: "I" },
            //     { value: 50, letter: "A" },
            //     { value: 55, letter: "S" },
            //     { value: 55, letter: "E" },
            //     { value: 55, letter: "C" },
            // ]
            // For testing purpose
            this.first = this.calculateShit();
            this.second = this.calculateShit();
            this.third = this.calculateShit();
            // console.log(this.summarys)
            // console.log(this.first)
            // console.log(this.second)
            // console.log(this.third)
            //Submit RIASEC Results into the server
            this.data.submitLetters(this.summarys).subscribe(function (successData) {
            }, function (error) { return console.log(error); });
            //Submit the Summary Code into the server
            this.data.submitSummaryCode(this.first[0].letter, this.second[0].letter, this.third[0].letter).subscribe(function (successData) {
            }, function (error) { return console.log(error); });
            // Transform it into string
            this.first.forEach(function (element) { return _this.firstString += element.letter + " "; });
            this.second.forEach(function (element) { return _this.secondString += element.letter + " "; });
            this.third.forEach(function (element) { return _this.thirdString += element.letter + " "; });
            //get all letter combination
            for (var i = 0; i < this.first.length; i++) {
                var firstLetter = this.first[i].letter;
                for (var k = 0; k < this.second.length; k++) {
                    var secondLetter = this.second[k].letter;
                    for (var o = 0; o < this.third.length; o++) {
                        var thirdLetter = this.third[o].letter;
                        this.combinations.push(firstLetter + secondLetter + thirdLetter);
                    }
                }
            }
            //Submit result to the database
            this.data.submitResult(this.combinations).subscribe(function (data) {
                localStorage.removeItem("inSession");
                localStorage.removeItem("ph1Res");
                localStorage.removeItem("qstResult");
                localStorage.removeItem("qtsIndex");
                localStorage.removeItem("selfEstiRes");
                localStorage.removeItem("tsprog");
                localStorage.removeItem("tsqts");
            }, function (error) {
                console.log(error);
            });
        }
    };
    EvaluateComponent.prototype.calculateShit = function () {
        var myStorage = Array.apply(null, Array());
        var highestValue = {
            value: this.summaryHolder[0].value,
            index: 0,
            letter: this.summaryHolder[0].letter,
            kuha: true
        };
        for (var i = 0; i < this.summaryHolder.length; i++) {
            if (highestValue.value < this.summaryHolder[i].value) {
                highestValue.value = this.summaryHolder[i].value;
                highestValue.index = i;
                // console.log(this.summaryHolder[i].letter)
                highestValue.letter = this.summaryHolder[i].letter;
                highestValue.kuha = true;
            }
            else {
                highestValue.kuha = false;
            }
        }
        this.summaryHolder.splice(highestValue.index, 1);
        myStorage.push({
            value: highestValue.value,
            letter: highestValue.letter
        });
        //Remove the current highest in the array
        if (highestValue.kuha) {
        }
        for (var k = 0; k < this.summaryHolder.length; k++) {
            // console.log(highestValue.value)
            // console.log(this.summaryHolder[k].value)
            if (highestValue.value == this.summaryHolder[k].value) {
                myStorage.push({
                    value: this.summaryHolder[k].value,
                    letter: this.summaryHolder[k].letter
                });
            }
        }
        // this.summaryHolder.forEach((firstElement, firstIndex) => {
        //     myStorage.forEach((secondElement, secondIndex) => {
        //         console.log(firstElement.letter + " " + secondElement.letter)
        //         if (firstElement.letter == secondElement.letter) {
        //             alert("tama")
        //             this.summaryHolder.splice(firstIndex, 1);
        //         }
        //     });
        // });
        this.summaryHolder = this.summaryHolder.filter(function (value, index, arr) {
            if (value.value != highestValue.value) {
                return value;
            }
        });
        // console.log(this.summaryHolder)
        // console.log(myStorage)
        return myStorage;
    };
    EvaluateComponent.prototype.getBackgroudColor = function (i) {
        var colors = ["#f0483e", "#f8941e", "#ffce02", "#00773f", "#0073a4", "#9279b7"];
        return colors[i];
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('dito'),
        __metadata("design:type", Object)
    ], EvaluateComponent.prototype, "ditoConfetti", void 0);
    EvaluateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-evaluate',
            template: __webpack_require__(/*! ./evaluate.component.html */ "./src/app/evaluate/evaluate.component.html"),
            styles: [__webpack_require__(/*! ./evaluate.component.css */ "./src/app/evaluate/evaluate.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]])
    ], EvaluateComponent);
    return EvaluateComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui inverted  menu\" style=\"height:5%\">\n  <a class=\"active item\" routerLink=\"/\">\n    Home\n  </a>\n\n\n  <div class=\"right menu\">\n    <a [ngClass]=\"{'disabled': sdsTaken || onSdsSession}\" class=\"ui button item\" (click)=\"start()\">\n      {{startLabel}}\n    </a>\n    <div class=\"ui item dropdown\" suiDropdown *ngIf=\"userSession\">\n      <div class=\"text\">My Profile</div>\n      <i class=\"dropdown icon\"></i>\n      <div class=\"menu\" suiDropdownMenu>\n        <div class=\"item\" routerLink=\"/profile\">View Profile</div>\n        <div class=\"item\" (click)=\"logout()\">Logout</div>\n      </div>\n    </div>\n    <a class=\"ui item\" routerLink=\"/authentication\" *ngIf=\"!userSession\">Login/Register</a>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _configs_questionClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../configs/questionClass */ "./src/app/configs/questionClass.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(authService, router, userService) {
        this.authService = authService;
        this.router = router;
        this.userService = userService;
        this.userSession = false;
        this.sdsTaken = false;
        this.onSdsSession = false;
        this.questions = new _configs_questionClass__WEBPACK_IMPORTED_MODULE_5__["Questions"];
        this.startLabel = "Start Now";
    }
    HeaderComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem("inSession") != null && localStorage.getItem("inSession") != "") {
            this.startLabel = "Continue Session";
        }
        else {
            this.startLabel = "Start Now";
        }
        if (localStorage.getItem("Authorization") != "" && localStorage.getItem("Authorization") != null) {
            this.checkUserSession();
            this.checkSdsStatus();
            if (this.router.url == "/questions" || this.router.url == "/self-estimates" || this.router.url == "/evaluate") {
                this.onSdsSession = true;
            }
            else {
                this.onSdsSession = false;
            }
        }
    };
    HeaderComponent.prototype.checkUserSession = function () {
        var _this = this;
        this.authService.checkSession().subscribe(function (successData) {
            _this.userSession = true;
        }, function (error) {
            console.log(error);
            _this.userSession = false;
            localStorage.removeItem("Authorization");
        });
    };
    HeaderComponent.prototype.checkSdsStatus = function () {
        var _this = this;
        this.userService.checkSdsStatus().subscribe(function (successData) {
            if (successData.length == 0) {
                _this.sdsTaken = false;
            }
            else {
                _this.sdsTaken = true;
            }
        }, function (error) { return console.log(error); });
    };
    HeaderComponent.prototype.logout = function () {
        localStorage.clear();
        this.startLabel = "Start Now";
        this.sdsTaken = false;
        this.userSession = false;
        this.onSdsSession = false;
        this.router.navigate(["/"]);
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()({
            title: "Logout Success",
            type: "success"
        });
    };
    HeaderComponent.prototype.start = function () {
        var _this = this;
        if (this.userSession) {
            if (localStorage.getItem('inSession') != "" && localStorage.getItem('inSession') != null) {
                this.router.navigate([localStorage.getItem("tsprog")]);
            }
            else {
                var res = Array.apply(null, Array(18));
                localStorage.setItem("qstResult", JSON.stringify(res));
                localStorage.setItem("tsprog", "questions");
                localStorage.setItem("tsqts", JSON.stringify(this.questions.questions));
                localStorage.setItem("qtsIndex", "0");
                localStorage.setItem("inSession", btoa("true"));
                this.router.navigate(["questions"]);
            }
        }
        else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()({
                title: "Please login first",
                type: "warning"
            });
            setTimeout(function () {
                _this.router.navigate(["authentication"]);
            }, 1000);
        }
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n@media only screen and (max-width : 320px) {\r\n    /* Styles */\r\n    div.description{\r\n        font-size:.6em !important;\r\n    }\r\n    div.header{\r\n        font-size:.7em !important;\r\n        \r\n    }\r\n\r\n    }\r\n\r\n    video {\r\n        width: 100%;\r\n        height: auto;\r\n      }\r\n\r\n    @media only screen and (min-device-width : 320px) and (max-device-width : 480px) {\r\n        /* Styles */\r\n        div.description{\r\n            font-size:.6em !important;\r\n        }\r\n        div.header{\r\n            font-size:.7em !important;\r\n            \r\n        }\r\n        }\r\n\r\n    .content_section{\r\n    position: absolute;\r\n    z-index: 1;\r\n    color: #f3f3f3;\r\n    top: 20%;\r\n    left: 8%;\r\n    right: 8%;\r\n}\r\n\r\n    #header-section::after{\r\n    content: '';\r\n    width: 100%;\r\n    height: 70vh;\r\n    background: url('showcase.jpeg');\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    background-position: center;\r\n    display: block;\r\n    filter: blur(5px);\r\n    -webkit-filter: blur(5px);\r\n    color: #f3f3f3;\r\n    transition: all 1000ms;\r\n}\r\n\r\n    .content div#intro-title{\r\n    padding-top: 5%;\r\n}\r\n\r\n    p{\r\n  font-size: 1.1rem;\r\n  font-weight: 400;\r\n}\r\n\r\n    section{\r\n    margin-bottom: 5%;\r\n}\r\n\r\n    #gray-section{\r\n    padding: 7%;\r\n    margin-top: 5%;\r\n    background: #F5F7F8;\r\n    margin-bottom: 0;\r\n}\r\n\r\n    section#gray-section div div#left{\r\n    border-top:#E6ECEE solid 1px;\r\n    border-right:#E6ECEE solid 1px;\r\n    height:300px;\r\n    padding-top: 55px;\r\n}\r\n\r\n    section#gray-section div div#left p#quote{\r\n    color: gray;\r\n    font-style: italic;\r\n    font-weight: 700;\r\n    font-size: 1.5em;\r\n}\r\n\r\n    section#gray-section div div#right{\r\n    border-top:#E6ECEE solid 1px;\r\n    border-left:#E6ECEE solid 1px;\r\n    height:300px;\r\n    padding-top: 55px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQTtJQUNJLFlBQVk7SUFDWjtRQUNJLDBCQUEwQjtLQUM3QjtJQUNEO1FBQ0ksMEJBQTBCOztLQUU3Qjs7S0FFQTs7SUFFRDtRQUNJLFlBQVk7UUFDWixhQUFhO09BQ2Q7O0lBRUg7UUFDSSxZQUFZO1FBQ1o7WUFDSSwwQkFBMEI7U0FDN0I7UUFDRDtZQUNJLDBCQUEwQjs7U0FFN0I7U0FDQTs7SUFJVDtJQUNJLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsZUFBZTtJQUNmLFNBQVM7SUFDVCxTQUFTO0lBQ1QsVUFBVTtDQUNiOztJQUNEO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixhQUFhO0lBQ2IsaUNBQXFEO0lBQ3JELDZCQUE2QjtJQUM3Qix1QkFBdUI7SUFDdkIsNEJBQTRCO0lBQzVCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsMEJBQTBCO0lBQzFCLGVBQWU7SUFDZix1QkFBdUI7Q0FDMUI7O0lBR0Q7SUFDSSxnQkFBZ0I7Q0FDbkI7O0lBRUQ7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0NBQ2xCOztJQUVEO0lBQ0ksa0JBQWtCO0NBQ3JCOztJQUdEO0lBQ0ksWUFBWTtJQUNaLGVBQWU7SUFDZixvQkFBb0I7SUFDcEIsaUJBQWlCO0NBQ3BCOztJQUdEO0lBQ0ksNkJBQTZCO0lBQzdCLCtCQUErQjtJQUMvQixhQUFhO0lBQ2Isa0JBQWtCO0NBQ3JCOztJQUNEO0lBQ0ksWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsaUJBQWlCO0NBQ3BCOztJQUNEO0lBQ0ksNkJBQTZCO0lBQzdCLDhCQUE4QjtJQUM5QixhQUFhO0lBQ2Isa0JBQWtCO0NBQ3JCIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aCA6IDMyMHB4KSB7XHJcbiAgICAvKiBTdHlsZXMgKi9cclxuICAgIGRpdi5kZXNjcmlwdGlvbntcclxuICAgICAgICBmb250LXNpemU6LjZlbSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgZGl2LmhlYWRlcntcclxuICAgICAgICBmb250LXNpemU6LjdlbSAhaW1wb3J0YW50O1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICB2aWRlbyB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICB9XHJcblxyXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aCA6IDMyMHB4KSBhbmQgKG1heC1kZXZpY2Utd2lkdGggOiA0ODBweCkge1xyXG4gICAgICAgIC8qIFN0eWxlcyAqL1xyXG4gICAgICAgIGRpdi5kZXNjcmlwdGlvbntcclxuICAgICAgICAgICAgZm9udC1zaXplOi42ZW0gIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZGl2LmhlYWRlcntcclxuICAgICAgICAgICAgZm9udC1zaXplOi43ZW0gIWltcG9ydGFudDtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcblxyXG5cclxuLmNvbnRlbnRfc2VjdGlvbntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBjb2xvcjogI2YzZjNmMztcclxuICAgIHRvcDogMjAlO1xyXG4gICAgbGVmdDogOCU7XHJcbiAgICByaWdodDogOCU7XHJcbn1cclxuI2hlYWRlci1zZWN0aW9uOjphZnRlcntcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDcwdmg7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uL2Fzc2V0cy9pbWFnZXMvc2hvd2Nhc2UuanBlZycpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZpbHRlcjogYmx1cig1cHgpO1xyXG4gICAgLXdlYmtpdC1maWx0ZXI6IGJsdXIoNXB4KTtcclxuICAgIGNvbG9yOiAjZjNmM2YzO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDEwMDBtcztcclxufVxyXG5cclxuXHJcbi5jb250ZW50IGRpdiNpbnRyby10aXRsZXtcclxuICAgIHBhZGRpbmctdG9wOiA1JTtcclxufVxyXG5cclxucHtcclxuICBmb250LXNpemU6IDEuMXJlbTtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcblxyXG5zZWN0aW9ue1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNSU7XHJcbn1cclxuXHJcblxyXG4jZ3JheS1zZWN0aW9ue1xyXG4gICAgcGFkZGluZzogNyU7XHJcbiAgICBtYXJnaW4tdG9wOiA1JTtcclxuICAgIGJhY2tncm91bmQ6ICNGNUY3Rjg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG59IFxyXG5cclxuXHJcbnNlY3Rpb24jZ3JheS1zZWN0aW9uIGRpdiBkaXYjbGVmdHtcclxuICAgIGJvcmRlci10b3A6I0U2RUNFRSBzb2xpZCAxcHg7XHJcbiAgICBib3JkZXItcmlnaHQ6I0U2RUNFRSBzb2xpZCAxcHg7XHJcbiAgICBoZWlnaHQ6MzAwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogNTVweDtcclxufVxyXG5zZWN0aW9uI2dyYXktc2VjdGlvbiBkaXYgZGl2I2xlZnQgcCNxdW90ZXtcclxuICAgIGNvbG9yOiBncmF5O1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbn1cclxuc2VjdGlvbiNncmF5LXNlY3Rpb24gZGl2IGRpdiNyaWdodHtcclxuICAgIGJvcmRlci10b3A6I0U2RUNFRSBzb2xpZCAxcHg7XHJcbiAgICBib3JkZXItbGVmdDojRTZFQ0VFIHNvbGlkIDFweDtcclxuICAgIGhlaWdodDozMDBweDtcclxuICAgIHBhZGRpbmctdG9wOiA1NXB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Header -->\n<app-header></app-header>\n\n<!-- Header -->\n<br>\n\n<!-- Section -->\n<section id=\"header-section\" class=\"ui segment center aligned\" style=\"position:relative;border:none;\">\n  <div class=\"row container content_section\">\n    <h1 class=\"bolder center ui header\" style=\"color:white;font-size: 3.5rem\">What is the SDS?</h1>\n    <p class=\"center\" id=\"parag\" style=\"font-size:1.5rem\">The next generation of John Holland’s Self-Directed Search®\n      (SDS®) is\n      a\n      career assessment and\n      exploration\n      tool that matches your aspirations, activities, and talents to the career choices and educational\n      opportunities\n      that fit you best.</p>\n\n  </div>\n\n\n</section>\n\n<!-- End of Section -->\n\n\n\n\n<!-- Section -->\n<section>\n  <h1 class=\"center bolder ui header primary\">How SDS Works</h1>\n  <p class=\"center\" style=\"color: gray\">Choose a career that based on your personality and skills</p>\n  <br>\n  <br>\n\n  <div class=\"ui container center aligned three column grid\">\n    <div class=\"column\">\n      <div class=\"ui centered card\">\n        <div class=\"image\">\n          <img src=\"assets/images/questions.png\">\n        </div>\n        <div class=\"content\">\n          <a class=\"header\">Answer</a>\n          <div class=\"description\">\n            Answer questions about what you like on following categories:\n            Activities, Occupations and Competencies\n          </div>\n\n        </div>\n      </div>\n    </div>\n    <div class=\"column\">\n      <div class=\"ui centered card\">\n        <div class=\"image\">\n          <img src=\"assets/images/evaluation.png\">\n        </div>\n        <div class=\"content\">\n          <a class=\"header\">Evaluate</a>\n          <div class=\"description\">\n            Evaluate your answers based on RIASEC theory (Realistic, Investigative,\n            Artistic, Social, Enterprising, and Conventional) and get a code(s)\n          </div>\n\n        </div>\n      </div>\n\n    </div>\n    <div class=\"column\">\n\n      <div class=\"ui centered card\">\n        <div class=\"image\">\n          <img src=\"assets/images/menu.png\">\n        </div>\n        <div class=\"content\">\n          <a class=\"header\">Choose</a>\n          <div class=\"description\">\n            Browse the result of SDS which is based on your personality and skills,\n            and pick the occupation you like\n          </div>\n\n        </div>\n      </div>\n    </div>\n  </div>\n\n\n\n\n\n\n\n\n\n</section>\n\n\n\n\n<!-- End of Section -->\n<br>\n<br>\n\n<h1 class=\"bolder center primary\">The Self-Directed Search is for</h1>\n\n\n\n\n<div class=\"ui center aligned four column grid\">\n  <div class=\"column\">\n    <div class=\"ui fluid card\">\n      <div class=\"image\">\n        <img src=\"assets/images/meeting.png\">\n      </div>\n      <div class=\"content\">\n        <div class=\"header\">Career Counselors</div>\n        <div class=\"description\">\n          Enhance your counseling service by adding a psychometrically sound, widely used career interest inventory\n          to your assessment lineup.\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"column\">\n    <div class=\"ui fluid card\">\n      <div class=\"image\">\n        <img src=\"assets/images/briefcase.png\">\n      </div>\n      <div class=\"content\">\n        <div class=\"header\">Career Transition</div>\n\n        <div class=\"description\">\n          Sometimes you just need a change—and sometimes a change is your only option. Find out what types of careers\n          are right for you now.\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"column\">\n    <div class=\"ui fluid card\">\n      <div class=\"image\">\n        <img src=\"assets/images/soldier.png\">\n      </div>\n      <div class=\"content\">\n        <div class=\"header\">Veterans</div>\n\n        <div class=\"description\">\n          The transition to civilian life is uniquely challenging. Ease the shift by exploring career options that\n          correspond to your military experience.\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"column\">\n    <div class=\"ui fluid card\">\n      <div class=\"image\">\n        <img src=\" assets/images/school.png\">\n      </div>\n      <div class=\"content\">\n        <div class=\"header\">Students</div>\n\n        <div class=\"description\">\n          Student life is filled with choices. Make the big one easier by discovering the majors, fields of study,\n          and jobs that fit your personality best.\n        </div>\n      </div>\n    </div>\n  </div>\n\n\n</div>\n\n\n<!-- Section -->\n\n<!-- End of Section -->\n<br>\n<br>\n\n<div class=\"ui vertical stripe quote segment\">\n  <div class=\"ui equal width stackable internally celled grid\">\n    <div class=\"center aligned row\">\n      <div class=\"column\">\n        <h3 style=\"color:#808080;font-style:italic;font-weight: normal\">\n          “Choose a job you love, and you will never have to work a day in your life.”\n          <br><br><span style=\"font-size:1.6em;font-style:bold;color:#808080\">-Confucius</span>\n        </h3>\n      </div>\n      <div class=\"column\">\n        <h2 class=\"primary bolder center\">Self directed search video</h2>\n        <div class=\"center\">\n          <video controls width=\"500\" height=\"300\">\n            <source src=\"assets/videos/video.mp4\" type=\"video/mp4\">\n          </video>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"ui inverted vertical footer segment\">\n  <div class=\"ui center aligned container\">\n    <div class=\"ui stackable inverted divided grid\">\n      <div class=\"nine wide column\">\n        <h4 class=\"ui inverted header\">About</h4>\n        <div class=\"ui inverted link list\">\n          <a href=\"https://play.google.com/store/apps/details?id=com.gordoncollege.miel&hl=en\" class=\"item\">Google\n            Play</a>\n          <a href=\"https://www.facebook.com/GC-Career-Guidance-App-352551275361989/\" class=\"item\">Facebook Page</a>\n        </div>\n      </div>\n\n\n      <div class=\"seven wide column\">\n        <h2 *ngIf=\"!!takers\">Exam Takers Count: {{takers}}</h2>\n        <p>Gordon College All Rights Reserved</p>\n      </div>\n    </div>\n    <div class=\"ui inverted section divider\"></div>\n    <img src=\"assets/images/gclogoprint.png\" class=\"ui centered mini image\">\n    <div class=\"ui horizontal inverted small divided link list\">\n      <a class=\"item\" href=\"#\">Site Map</a>\n      <a class=\"item\" href=\"#\">Contact Us</a>\n      <a class=\"item\" routerLink=\"/terms-condition\">Terms and Conditions</a>\n      <a class=\"item\" routerLink=\"/privacy-policy\">Privacy Policy</a>\n    </div>\n  </div>\n</div>"

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
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");
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
    function HomeComponent(authService, router, data) {
        this.authService = authService;
        this.router = router;
        this.data = data;
        this.userSession = false;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.checkSession();
        this.getTakers();
    };
    //Check user session
    HomeComponent.prototype.checkSession = function () {
        var _this = this;
        if (localStorage.getItem("Authorization") != "" && localStorage.getItem("Authorization") != null) {
            this.authService.checkSession().subscribe(function (successData) {
                _this.userSession = true;
                // console.log(this.userSession)
            }, function (error) {
                _this.userSession = false;
                // console.log(this.userSession)
                console.log(error);
            });
        }
    };
    HomeComponent.prototype.start = function () {
        var _this = this;
        if (this.userSession) {
            this.router.navigate(["questions"]);
        }
        else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default()({
                title: "Please login first",
                type: "warning"
            });
            setTimeout(function () {
                _this.router.navigate(["login"]);
            }, 1000);
        }
    };
    HomeComponent.prototype.getTakers = function () {
        var _this = this;
        this.data.getTakers().subscribe(function (takers) {
            console.log(takers);
            _this.takers = takers[0].takers;
        }, function (err) { return console.log(err); });
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/landing/landing.component.css":
/*!***********************************************!*\
  !*** ./src/app/landing/landing.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xhbmRpbmcvbGFuZGluZy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/landing/landing.component.html":
/*!************************************************!*\
  !*** ./src/app/landing/landing.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  landing works!\n</p>\n"

/***/ }),

/***/ "./src/app/landing/landing.component.ts":
/*!**********************************************!*\
  !*** ./src/app/landing/landing.component.ts ***!
  \**********************************************/
/*! exports provided: LandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
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

var LandingComponent = /** @class */ (function () {
    function LandingComponent() {
    }
    LandingComponent.prototype.ngOnInit = function () {
    };
    LandingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-landing',
            template: __webpack_require__(/*! ./landing.component.html */ "./src/app/landing/landing.component.html"),
            styles: [__webpack_require__(/*! ./landing.component.css */ "./src/app/landing/landing.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LandingComponent);
    return LandingComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#content{\r\n    margin-top:10%;\r\n    margin-right: 25%;\r\n    margin-left: 25%;\r\n    \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsaUJBQWlCOztDQUVwQiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY29udGVudHtcclxuICAgIG1hcmdpbi10b3A6MTAlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyNSU7XHJcbiAgICBtYXJnaW4tbGVmdDogMjUlO1xyXG4gICAgXHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"\" id=\"content\">\n  <div class=\"card darken-1\">\n    <div class=\"card-content white-text\">\n      <h2 class=\"primary bolder center\">Login</h2>\n      <br>\n      <div class=\"row\">\n        <div class=\"input-field col l6 offset-l3\">\n          <input id=\"username\" type=\"text\" class=\"validate\" #username>\n          <label for=\"username\">Username</label>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"input-field col l6 offset-l3\">\n          <input id=\"password\" type=\"text\" class=\"validate\" #password>\n          <label for=\"password\">Password</label>\n        </div>\n      </div>\n\n    </div>\n    <div class=\"card-action\">\n      <a class=\"right btn bolder secondary\" (click)=\"login(username.value,password.value)\">Submit</a>\n\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function (username, password) {
        var _this = this;
        this.authService.login(username, password).subscribe(function (successData) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()({
                title: 'Login Success',
                type: 'success'
            });
            localStorage.setItem("Authorization", "Bearer " + successData);
            setTimeout(function () { return _this.router.navigate(["/"]); }, 1000);
        }, function (error) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()({
                title: error.error.message,
                type: "error"
            });
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/modal/info/info.component.css":
/*!***********************************************!*\
  !*** ./src/app/modal/info/info.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZGFsL2luZm8vaW5mby5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/modal/info/info.component.html":
/*!************************************************!*\
  !*** ./src/app/modal/info/info.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  info works!\n</p>\n"

/***/ }),

/***/ "./src/app/modal/info/info.component.ts":
/*!**********************************************!*\
  !*** ./src/app/modal/info/info.component.ts ***!
  \**********************************************/
/*! exports provided: InfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoComponent", function() { return InfoComponent; });
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

var InfoComponent = /** @class */ (function () {
    function InfoComponent() {
    }
    InfoComponent.prototype.ngOnInit = function () {
    };
    InfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-info',
            template: __webpack_require__(/*! ./info.component.html */ "./src/app/modal/info/info.component.html"),
            styles: [__webpack_require__(/*! ./info.component.css */ "./src/app/modal/info/info.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], InfoComponent);
    return InfoComponent;
}());



/***/ }),

/***/ "./src/app/modal/more-info/more-info.component.css":
/*!*********************************************************!*\
  !*** ./src/app/modal/more-info/more-info.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZGFsL21vcmUtaW5mby9tb3JlLWluZm8uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/modal/more-info/more-info.component.html":
/*!**********************************************************!*\
  !*** ./src/app/modal/more-info/more-info.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  more-info works!\n</p>\n"

/***/ }),

/***/ "./src/app/modal/more-info/more-info.component.ts":
/*!********************************************************!*\
  !*** ./src/app/modal/more-info/more-info.component.ts ***!
  \********************************************************/
/*! exports provided: MoreInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoreInfoComponent", function() { return MoreInfoComponent; });
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

var MoreInfoComponent = /** @class */ (function () {
    function MoreInfoComponent() {
    }
    MoreInfoComponent.prototype.ngOnInit = function () {
    };
    MoreInfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-more-info',
            template: __webpack_require__(/*! ./more-info.component.html */ "./src/app/modal/more-info/more-info.component.html"),
            styles: [__webpack_require__(/*! ./more-info.component.css */ "./src/app/modal/more-info/more-info.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MoreInfoComponent);
    return MoreInfoComponent;
}());



/***/ }),

/***/ "./src/app/modal/problems/problems.component.css":
/*!*******************************************************!*\
  !*** ./src/app/modal/problems/problems.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZGFsL3Byb2JsZW1zL3Byb2JsZW1zLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/modal/problems/problems.component.html":
/*!********************************************************!*\
  !*** ./src/app/modal/problems/problems.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  problems works!\n</p>\n"

/***/ }),

/***/ "./src/app/modal/problems/problems.component.ts":
/*!******************************************************!*\
  !*** ./src/app/modal/problems/problems.component.ts ***!
  \******************************************************/
/*! exports provided: ProblemsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProblemsComponent", function() { return ProblemsComponent; });
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

var ProblemsComponent = /** @class */ (function () {
    function ProblemsComponent() {
    }
    ProblemsComponent.prototype.ngOnInit = function () {
    };
    ProblemsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-problems',
            template: __webpack_require__(/*! ./problems.component.html */ "./src/app/modal/problems/problems.component.html"),
            styles: [__webpack_require__(/*! ./problems.component.css */ "./src/app/modal/problems/problems.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProblemsComponent);
    return ProblemsComponent;
}());



/***/ }),

/***/ "./src/app/models/problemLabel.ts":
/*!****************************************!*\
  !*** ./src/app/models/problemLabel.ts ***!
  \****************************************/
/*! exports provided: labels */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "labels", function() { return labels; });
var labels = [
    { label: "Often have headaches", value: false, fieldname: "often_have_headaches" },
    { label: "Trouble with my eyes", value: false, fieldname: "trouble_with_eyes" },
    { label: "Can't hear well", value: false, fieldname: "cant_hear_well" },
    { label: "Have trouble with my teeth", value: false, fieldname: "trouble_with_teeth" },
    { label: "Don't get enougth sleep", value: false, fieldname: "dont_get_enough_sleep" },
    { label: "Getting tired too easily", value: false, fieldname: "tired_too_easily" },
    { label: "Often get sick and not healthy", value: false, fieldname: "often_get_sick" },
    { label: "Not eating the right food", value: false, fieldname: "not_eating_right_food" },
    { label: "Bothered by physically disability", value: false, fieldname: "bothered_by_disability" },
    { label: "Having no regular allowance", value: false, fieldname: "no_regular_allowance" },
    { label: "Financial dependence on others", value: false, fieldname: "financial_dependance_onOthers" },
    { label: "Family worried about money", value: false, fieldname: "family_worried_about_money" },
    { label: "Parents working too hard", value: false, fieldname: "parents_working_too_hard" },
    { label: "Thinking of leaving college to look for a job", value: false, fieldname: "dropout_college_forJob" },
    { label: "Not allowed to go out with someone I like", value: false, fieldname: "strict_parents" },
    { label: "Too little chance to do what I want to", value: false, fieldname: "cant_do_what_iwant" },
    { label: "Feeling uncomfortable with other people", value: false, fieldname: "uncomfi_with_otherpeople" },
    { label: "Not using my time well", value: false, fieldname: "not_using_my_timewell" },
    { label: "Too little time for myself", value: false, fieldname: "little_time_onmyself" },
    { label: "Smoking", value: false, fieldname: "smoking" },
    { label: "Drinking liquor", value: false, fieldname: "drinking" },
    { label: "Getting hooked on computers", value: false, fieldname: "addicted_on_computers" },
    { label: "Feels embarrassed when talking about sex", value: false, fieldname: "shy_when_talking_aboutsex" },
    { label: "Not sure about proper sex behavior", value: false, fieldname: "dont_know_proper_sexBehavior" },
    { label: "Thinking too much about sex", value: false, fieldname: "thinking_toomuch_about_sex" },
    { label: "Being too jealous and envious to others", value: false, fieldname: "too_jealous_envious_to_others" },
    { label: "Sometimes wishing I were a boy/girl", value: false, fieldname: "wishing_im_boyORgirl" },
    { label: "Being in love", value: false, fieldname: "inlove" },
    { label: "Wondering if I'll get married", value: false, fieldname: "doubt_about_getting_married" },
    { label: "Problems with boyfriend/girlfriend", value: false, fieldname: "problems_with_bfgf" },
    { label: "Being timid or shy", value: false, fieldname: "timid_or_shy" },
    { label: "Get hurt easily", value: false, fieldname: "hurt_easily" },
    { label: "Nobody to share my problems with", value: false, fieldname: "nobody_to_share_my_problems" },
    { label: "Being childish or immature", value: false, fieldname: "childish_immature" },
    { label: "Cannot get along with other people", value: false, fieldname: "introvert" },
    { label: "Having friends with negative or bad influences", value: false, fieldname: "bad_influence_friends" },
    { label: "Being the subject of teasing", value: false, fieldname: "subject_of_teasing" },
    { label: "Worrying too much", value: false, fieldname: "worrying_too_much" },
    { label: "Being nervous", value: false, fieldname: "being_nervous" },
    { label: "Gets discouraged easily", value: false, fieldname: "discouraged_easily" },
    { label: "Daydreaming", value: false, fieldname: "daydreaming" },
    { label: "Being lazy", value: false, fieldname: "being_lazy" },
    { label: "Having memories of an unhappy childhood", value: false, fieldname: "memories_of_unhappy_childhood" },
    { label: "Wishing I'd never been born", value: false, fieldname: "never_been_born" },
    { label: "Being materialistic", value: false, fieldname: "materialistic" },
    { label: "Getting too dependent on electronic gadgets", value: false, fieldname: "dependent_gadgets" },
    { label: "Difficulty setting my priorities", value: false, fieldname: "difficulty_setting_priorities" },
    { label: "Having low self esteem", value: false, fieldname: "low_self_esteem" },
    { label: "Losing my temper", value: false, fieldname: "losing_my_temper" },
    { label: "Not going to church often enough", value: false, fieldname: "not_going_to_church" },
    { label: "Having guilty conscience", value: false, fieldname: "guilty_conscience" },
    { label: "Wanting to feel close to God", value: false, fieldname: "wanting_to_close_to_god" },
    { label: "Confused in some of my religious beliefs", value: false, fieldname: "confused_religious_beliefs" },
    { label: "Wanting to know and understand the Bible", value: false, fieldname: "wanting_know_bible" },
    { label: "Having bad attitudes or habits", value: false, fieldname: "bad_attitudes_habits" },
    { label: "Teachers hard to understand", value: false, fieldname: "teachers_hard_to_understand" },
    { label: "Not getting along with the teacher", value: false, fieldname: "not_getting_along" },
    { label: "Textbooks/lessons hard to understand", value: false, fieldname: "lesson_hard_to_understand" },
    { label: "Difficulty using media based technology", value: false, fieldname: "hard_using_media_tech" },
    { label: "Problems with my subject/s", value: false, fieldname: "problems_with_subjects" },
    { label: "Worried about someone in the family", value: false, fieldname: "worried_about_someone_fam" },
    { label: "Family quarrels", value: false, fieldname: "family_quarrels" },
    { label: "Death in the family", value: false, fieldname: "death_fam" },
    { label: "Problem about mother", value: false, fieldname: "prob_mom" },
    { label: "Problem about father", value: false, fieldname: "prob_dad" },
    { label: "Parents having favorites in the family", value: false, fieldname: "parents_fav_family" },
    { label: "Being treated like a child", value: false, fieldname: "treated_like_child" },
    { label: "Parents are strict", value: false, fieldname: "parents_stict" },
    { label: "Parents expecting too much from me", value: false, fieldname: "parents_expecting_much" },
    { label: "Parents making too much decision for me", value: false, fieldname: "parents_decision_for_me" },
    { label: "Not living with parents", value: false, fieldname: "not_living_with_parents" },
    { label: "Feeling I don't really have home", value: false, fieldname: "feel_dont_have_home" },
    { label: "Wanting to run away from home", value: false, fieldname: "want_to_run_away_from_home" },
    { label: "Getting homesick", value: false, fieldname: "homesick" },
    { label: "Parents are separated", value: false, fieldname: "parents_separated" },
    { label: "Wanting to know more about trades/skills", value: false, fieldname: "want_know_more_skills" },
    { label: "Unable to express myself well in words", value: false, fieldname: "unable_to_express" },
    { label: "Wanting to drop from school", value: false, fieldname: "want_drop_school" },
    { label: "Losing enthusiasm with my studies", value: false, fieldname: "losing_enthusiams_studies" },
    { label: "Difficulty dealing with school rules and regulations", value: false, fieldname: "hard_obey_scohol_rules" },
    { label: "Having trouble with school personnel", value: false, fieldname: "trouble_with_personnel" },
    { label: "Afraid to speak in front of the class", value: false, fieldname: "afraid_speak_infront_class" },
    { label: "Not spending enough time in school work", value: false, fieldname: "no_time_for_schoolwork" },
    { label: "Hard to study in a boarding house", value: false, fieldname: "hardtostudy_in_boardinghouse" },
    { label: "Part-time student part-time worker", value: false, fieldname: "part_time_stud" },
    { label: "Difficulty in adjusting to school environment", value: false, fieldname: "hard_adjust_school_environment" },
];


/***/ }),

/***/ "./src/app/models/problemTitle.ts":
/*!****************************************!*\
  !*** ./src/app/models/problemTitle.ts ***!
  \****************************************/
/*! exports provided: title */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "title", function() { return title; });
var title = [
    { name: "Physiological", questions: Array.apply(null, Array()) },
    { name: "Financial", questions: Array.apply(null, Array()) },
    { name: "Social and Reacreational Activities", questions: Array.apply(null, Array()) },
    { name: "Courtship, Sex and Marriage", questions: Array.apply(null, Array()) },
    { name: "Social Psychological Relations", questions: Array.apply(null, Array()) },
    { name: "Peronal Psychological Relations", questions: Array.apply(null, Array()) },
    { name: "Morals and Religion", questions: Array.apply(null, Array()) },
    { name: "Curriculum and Teaching Procedures", questions: Array.apply(null, Array()) },
    { name: "Home and Family", questions: Array.apply(null, Array()) },
    { name: "Education and Vocation", questions: Array.apply(null, Array()) },
    { name: "Adjustments to School Relations", questions: Array.apply(null, Array()) },
];


/***/ }),

/***/ "./src/app/models/problems.ts":
/*!************************************!*\
  !*** ./src/app/models/problems.ts ***!
  \************************************/
/*! exports provided: problems */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "problems", function() { return problems; });
var problems = {
    problems: [
        {
            name: "Physiological", questions: [
                { label: "Often have headaches", value: false, fieldname: "often_have_headaches" },
                { label: "Trouble with my eyes", value: false, fieldname: "trouble_with_eyes" },
                { label: "Can't hear well", value: false, fieldname: "cant_hear_well" },
                { label: "Have trouble with my teeth", value: false, fieldname: "trouble_with_teeth" },
                { label: "Don't get enougth sleep", value: false, fieldname: "dont_get_enough_sleep" },
                { label: "Getting tired too easily", value: false, fieldname: "tired_too_easily" },
                { label: "Often get sick and not healthy", value: false, fieldname: "often_get_sick" },
                { label: "Not eating the right food", value: false, fieldname: "not_eating_right_food" },
                { label: "Bothered by physically disability", value: false, fieldname: "bothered_by_disability" },
            ]
        },
        {
            name: "Financial", questions: [
                { label: "Having no regular allowance", value: false, fieldname: "no_regular_allowance" },
                { label: "Financial dependence on others", value: false, fieldname: "financial_dependance_onOthers" },
                { label: "Family worried about money", value: false, fieldname: "family_worried_about_money" },
                { label: "Parents working too hard", value: false, fieldname: "parents_working_too_hard" },
                { label: "Thinking of leaving college to look for a job", value: false, fieldname: "dropout_college_forJob" },
            ]
        },
        {
            name: "Social and Reacreational Activities", questions: [
                { label: "Not allowed to go out with someone I like", value: false, fieldname: "strict_parents" },
                { label: "Too little chance to do what I want to", value: false, fieldname: "cant_do_what_iwant" },
                { label: "Feeling uncomfortable with other people", value: false, fieldname: "uncomfi_with_otherpeople" },
                { label: "Not using my time well", value: false, fieldname: "not_using_my_timewell" },
                { label: "Too little time for myself", value: false, fieldname: "little_time_onmyself" },
                { label: "Smoking", value: false, fieldname: "smoking" },
                { label: "Drinking liquor", value: false, fieldname: "drinking" },
                { label: "Getting hooked on computers", value: false, fieldname: "addicted_on_computers" },
            ]
        },
        {
            name: "Courtship, Sex and Marriage", questions: [
                { label: "Feels embarrassed when talking about sex", value: false, fieldname: "shy_when_talking_aboutsex" },
                { label: "Not sure about proper sex behavior", value: false, fieldname: "dont_know_proper_sexBehavior" },
                { label: "Thinking too much about sex", value: false, fieldname: "thinking_toomuch_about_sex" },
                { label: "Being too jealous and envious to others", value: false, fieldname: "too_jealous_envious_to_others" },
                { label: "Sometimes wishing I were a boy/girl", value: false, fieldname: "wishing_im_boyORgirl" },
                { label: "Being in love", value: false, fieldname: "inlove" },
                { label: "Wondering if I'll get married", value: false, fieldname: "doubt_about_getting_married" },
                { label: "Problems with boyfriend/girlfriend", value: false, fieldname: "problems_with_bfgf" },
            ]
        },
        {
            name: "Social Psychological Relations", questions: [
                { label: "Being timid or shy", value: false, fieldname: "timid_or_shy" },
                { label: "Get hurt easily", value: false, fieldname: "hurt_easily" },
                { label: "Nobody to share my problems with", value: false, fieldname: "nobody_to_share_my_problems" },
                { label: "Being childish or immature", value: false, fieldname: "childish_immature" },
                { label: "Cannot get along with other people", value: false, fieldname: "introvert" },
                { label: "Having friends with negative or bad influences", value: false, fieldname: "bad_influence_friends" },
                { label: "Being the subject of teasing", value: false, fieldname: "subject_of_teasing" },
            ]
        },
        {
            name: "Peronal Psychological Relations", questions: [
                { label: "Worrying too much", value: false, fieldname: "worrying_too_much" },
                { label: "Being nervous", value: false, fieldname: "being_nervous" },
                { label: "Gets discouraged easily", value: false, fieldname: "discouraged_easily" },
                { label: "Daydreaming", value: false, fieldname: "daydreaming" },
                { label: "Being lazy", value: false, fieldname: "being_lazy" },
                { label: "Having memories of an unhappy childhood", value: false, fieldname: "memories_of_unhappy_childhood" },
                { label: "Wishing I'd never been born", value: false, fieldname: "never_been_born" },
                { label: "Being materialistic", value: false, fieldname: "materialistic" },
                { label: "Getting too dependent on electronic gadgets", value: false, fieldname: "dependent_gadgets" },
                { label: "Difficulty setting my priorities", value: false, fieldname: "difficulty_setting_priorities" },
                { label: "Having low self esteem", value: false, fieldname: "low_self_esteem" },
            ]
        },
        {
            name: "Morals and Religion", questions: [
                { label: "Losing my temper", value: false, fieldname: "losing_my_temper" },
                { label: "Not going to church often enough", value: false, fieldname: "not_going_to_church" },
                { label: "Having guilty conscience", value: false, fieldname: "guilty_conscience" },
                { label: "Wanting to feel close to God", value: false, fieldname: "wanting_to_close_to_god" },
                { label: "Confused in some of my religious beliefs", value: false, fieldname: "confused_religious_beliefs" },
                { label: "Wanting to know and understand the Bible", value: false, fieldname: "wanting_know_bible" },
                { label: "Having bad attitudes or habits", value: false, fieldname: "bad_attitudes_habits" },
            ]
        },
        {
            name: "Curriculum and Teaching Procedures", questions: [
                { label: "Teachers hard to understand", value: false, fieldname: "teachers_hard_to_understand" },
                { label: "Not getting along with the teacher", value: false, fieldname: "not_getting_along" },
                { label: "Textbooks/lessons hard to understand", value: false, fieldname: "lesson_hard_to_understand" },
                { label: "Difficulty using media based technology", value: false, fieldname: "hard_using_media_tech" },
                { label: "Problems with my subject/s", value: false, fieldname: "problems_with_subjects" },
            ]
        },
        {
            name: "Home and Family", questions: [
                { label: "Worried about someone in the family", value: false, fieldname: "worried_about_someone_fam" },
                { label: "Family quarrels", value: false, fieldname: "family_quarrels" },
                { label: "Death in the family", value: false, fieldname: "death_fam" },
                { label: "Problem about mother", value: false, fieldname: "prob_mom" },
                { label: "Problem about father", value: false, fieldname: "prob_dad" },
                { label: "Parents having favorites in the family", value: false, fieldname: "parents_fav_family" },
                { label: "Being treated like a child", value: false, fieldname: "treated_like_child" },
                { label: "Parents are strict", value: false, fieldname: "parents_stict" },
                { label: "Parents expecting too much from me", value: false, fieldname: "parents_expecting_much" },
                { label: "Parents making too much decision for me", value: false, fieldname: "parents_decision_for_me" },
                { label: "Not living with parents", value: false, fieldname: "not_living_with_parents" },
                { label: "Feeling I don't really have home", value: false, fieldname: "feel_dont_have_home" },
                { label: "Wanting to run away from home", value: false, fieldname: "want_to_run_away_from_home" },
                { label: "Getting homesick", value: false, fieldname: "homesick" },
                { label: "Parents are separated", value: false, fieldname: "parents_separated" },
            ]
        },
        {
            name: "Education and Vocation", questions: [
                { label: "Wanting to know more about trades/skills", value: false, fieldname: "want_know_more_skills" },
                { label: "Unable to express myself well in words", value: false, fieldname: "unable_to_express" },
                { label: "Wanting to drop from school", value: false, fieldname: "want_drop_school" },
                { label: "Losing enthusiasm with my studies", value: false, fieldname: "losing_enthusiams_studies" },
            ]
        },
        {
            name: "Adjustments to School Relations", questions: [
                { label: "Difficulty dealing with school rules and regulations", value: false, fieldname: "hard_obey_scohol_rules" },
                { label: "Having trouble with school personnel", value: false, fieldname: "trouble_with_personnel" },
                { label: "Afraid to speak in front of the class", value: false, fieldname: "afraid_speak_infront_class" },
                { label: "Not spending enough time in school work", value: false, fieldname: "no_time_for_schoolwork" },
                { label: "Hard to study in a boarding house", value: false, fieldname: "hardtostudy_in_boardinghouse" },
                { label: "Part-time student part-time worker", value: false, fieldname: "part_time_stud" },
                { label: "Difficulty in adjusting to school environment", value: false, fieldname: "hard_adjust_school_environment" },
            ]
        }
    ]
};


/***/ }),

/***/ "./src/app/models/tables.ts":
/*!**********************************!*\
  !*** ./src/app/models/tables.ts ***!
  \**********************************/
/*! exports provided: tables */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tables", function() { return tables; });
var tables = "often_have_headaches\ntrouble_with_eyes\ncant_hear_well\ntrouble_with_teeth\ndont_get_enough_sleep\ntired_too_easily\noften_get_sick\nnot_eating_right_food\nbothered_by_disability\nno_regular_allowance\nfinancial_dependance_onOthers\nfamily_worried_about_money\nparents_working_too_hard\ndropout_college_forJob\nstrict_parents\ncant_do_what_iwant\nuncomfi_with_otherpeople\nnot_using_my_timewell\nlittle_time_onmyself\nsmoking\ndrinking\naddicted_on_computers\nshy_when_talking_aboutsex\ndont_know_proper_sexBehavior\nthinking_toomuch_about_sex\ntoo_jealous_envious_to_others\nwishing_im_boyORgirl\ninlove\ndoubt_about_getting_married\nproblems_with_bfgf\ntimid_or_shy\nhurt_easily\nnobody_to_share_my_problems\nchildish_immature\nintrovert\nbad_influence_friends\nsubject_of_teasing\nworrying_too_much\nbeing_nervous\ndiscouraged_easily\ndaydreaming\nbeing_lazy\nmemories_of_unhappy_childhood\nnever_been_born\nmaterialistic\ndependent_gadgets\ndifficulty_setting_priorities\nlow_self_esteem\nlosing_my_temper\nnot_going_to_church\nguilty_conscience\nwanting_to_close_to_god\nconfused_religious_beliefs\nwanting_know_bible\nbad_attitudes_habits\nteachers_hard_to_understand\nnot_getting_along\nlesson_hard_to_understand\nhard_using_media_tech\nproblems_with_subjects\nworried_about_someone_fam\nfamily_quarrels\ndeath_fam\nprob_mom\nprob_dad\nparents_fav_family\ntreated_like_child\nparents_stict\nparents_expecting_much\nparents_decision_for_me\nnot_living_with_parents\nfeel_dont_have_home\nwant_to_run_away_from_home\nhomesick\nparents_separated\nwant_know_more_skills\nunable_to_express\nwant_drop_school\nlosing_enthusiams_studies\nhard_obey_scohol_rules\ntrouble_with_personnel\nafraid_speak_infront_class\nno_time_for_schoolwork\nhardtostudy_in_boardinghouse\npart_time_stud\nhard_adjust_school_environment";


/***/ }),

/***/ "./src/app/models/tryLabel.ts":
/*!************************************!*\
  !*** ./src/app/models/tryLabel.ts ***!
  \************************************/
/*! exports provided: Label */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Label", function() { return Label; });
var Label = /** @class */ (function () {
    function Label() {
        this.label = [
            { label: "Often have headaches", value: 0, fieldname: "often_have_headaches" },
            { label: "Trouble with my eyes", value: 0, fieldname: "trouble_with_eyes" },
            { label: "Can't hear well", value: 0, fieldname: "cant_hear_well" },
            { label: "Have trouble with my teeth", value: 0, fieldname: "trouble_with_teeth" },
            { label: "Don't get enougth sleep", value: 0, fieldname: "dont_get_enough_sleep" },
            { label: "Getting tired too easily", value: 0, fieldname: "tired_too_easily" },
            { label: "Often get sick and not healthy", value: 0, fieldname: "often_get_sick" },
            { label: "Not eating the right food", value: 0, fieldname: "not_eating_right_food" },
            { label: "Bothered by physically disability", value: 0, fieldname: "bothered_by_disability" },
            { label: "Having no regular allowance", value: 0, fieldname: "no_regular_allowance" },
            { label: "Financial dependence on others", value: 0, fieldname: "financial_dependance_onOthers" },
            { label: "Family worried about money", value: 0, fieldname: "family_worried_about_money" },
            { label: "Parents working too hard", value: 0, fieldname: "parents_working_too_hard" },
            { label: "Thinking of leaving college to look for a job", value: 0, fieldname: "dropout_college_forJob" },
            { label: "Not allowed to go out with someone I like", value: 0, fieldname: "strict_parents" },
            { label: "Too little chance to do what I want to", value: 0, fieldname: "cant_do_what_iwant" },
            { label: "Feeling uncomfortable with other people", value: 0, fieldname: "uncomfi_with_otherpeople" },
            { label: "Not using my time well", value: 0, fieldname: "not_using_my_timewell" },
            { label: "Too little time for myself", value: 0, fieldname: "little_time_onmyself" },
            { label: "Smoking", value: 0, fieldname: "smoking" },
            { label: "Drinking liquor", value: 0, fieldname: "drinking" },
            { label: "Getting hooked on computers", value: 0, fieldname: "addicted_on_computers" },
            { label: "Feels embarrassed when talking about sex", value: 0, fieldname: "shy_when_talking_aboutsex" },
            { label: "Not sure about proper sex behavior", value: 0, fieldname: "dont_know_proper_sexBehavior" },
            { label: "Thinking too much about sex", value: 0, fieldname: "thinking_toomuch_about_sex" },
            { label: "Being too jealous and envious to others", value: 0, fieldname: "too_jealous_envious_to_others" },
            { label: "Sometimes wishing I were a boy/girl", value: 0, fieldname: "wishing_im_boyORgirl" },
            { label: "Being in love", value: 0, fieldname: "inlove" },
            { label: "Wondering if I'll get married", value: 0, fieldname: "doubt_about_getting_married" },
            { label: "Problems with boyfriend/girlfriend", value: 0, fieldname: "problems_with_bfgf" },
            { label: "Being timid or shy", value: 0, fieldname: "timid_or_shy" },
            { label: "Get hurt easily", value: 0, fieldname: "hurt_easily" },
            { label: "Nobody to share my problems with", value: 0, fieldname: "nobody_to_share_my_problems" },
            { label: "Being childish or immature", value: 0, fieldname: "childish_immature" },
            { label: "Cannot get along with other people", value: 0, fieldname: "introvert" },
            { label: "Having friends with negative or bad influences", value: 0, fieldname: "bad_influence_friends" },
            { label: "Being the subject of teasing", value: 0, fieldname: "subject_of_teasing" },
            { label: "Worrying too much", value: 0, fieldname: "worrying_too_much" },
            { label: "Being nervous", value: 0, fieldname: "being_nervous" },
            { label: "Gets discouraged easily", value: 0, fieldname: "discouraged_easily" },
            { label: "Daydreaming", value: 0, fieldname: "daydreaming" },
            { label: "Being lazy", value: 0, fieldname: "being_lazy" },
            { label: "Having memories of an unhappy childhood", value: 0, fieldname: "memories_of_unhappy_childhood" },
            { label: "Wishing I'd never been born", value: 0, fieldname: "never_been_born" },
            { label: "Being materialistic", value: 0, fieldname: "materialistic" },
            { label: "Getting too dependent on electronic gadgets", value: 0, fieldname: "dependent_gadgets" },
            { label: "Difficulty setting my priorities", value: 0, fieldname: "difficulty_setting_priorities" },
            { label: "Having low self esteem", value: 0, fieldname: "low_self_esteem" },
            { label: "Losing my temper", value: 0, fieldname: "losing_my_temper" },
            { label: "Not going to church often enough", value: 0, fieldname: "not_going_to_church" },
            { label: "Having guilty conscience", value: 0, fieldname: "guilty_conscience" },
            { label: "Wanting to feel close to God", value: 0, fieldname: "wanting_to_close_to_god" },
            { label: "Confused in some of my religious beliefs", value: 0, fieldname: "confused_religious_beliefs" },
            { label: "Wanting to know and understand the Bible", value: 0, fieldname: "wanting_know_bible" },
            { label: "Having bad attitudes or habits", value: 0, fieldname: "bad_attitudes_habits" },
            { label: "Teachers hard to understand", value: 0, fieldname: "teachers_hard_to_understand" },
            { label: "Not getting along with the teacher", value: 0, fieldname: "not_getting_along" },
            { label: "Textbooks/lessons hard to understand", value: 0, fieldname: "lesson_hard_to_understand" },
            { label: "Difficulty using media based technology", value: 0, fieldname: "hard_using_media_tech" },
            { label: "Problems with my subject/s", value: 0, fieldname: "problems_with_subjects" },
            { label: "Worried about someone in the family", value: 0, fieldname: "worried_about_someone_fam" },
            { label: "Family quarrels", value: 0, fieldname: "family_quarrels" },
            { label: "Death in the family", value: 0, fieldname: "death_fam" },
            { label: "Problem about mother", value: 0, fieldname: "prob_mom" },
            { label: "Problem about father", value: 0, fieldname: "prob_dad" },
            { label: "Parents having favorites in the family", value: 0, fieldname: "parents_fav_family" },
            { label: "Being treated like a child", value: 0, fieldname: "treated_like_child" },
            { label: "Parents are strict", value: 0, fieldname: "parents_stict" },
            { label: "Parents expecting too much from me", value: 0, fieldname: "parents_expecting_much" },
            { label: "Parents making too much decision for me", value: 0, fieldname: "parents_decision_for_me" },
            { label: "Not living with parents", value: 0, fieldname: "not_living_with_parents" },
            { label: "Feeling I don't really have home", value: 0, fieldname: "feel_dont_have_home" },
            { label: "Wanting to run away from home", value: 0, fieldname: "want_to_run_away_from_home" },
            { label: "Getting homesick", value: 0, fieldname: "homesick" },
            { label: "Parents are separated", value: 0, fieldname: "parents_separated" },
            { label: "Wanting to know more about trades/skills", value: 0, fieldname: "want_know_more_skills" },
            { label: "Unable to express myself well in words", value: 0, fieldname: "unable_to_express" },
            { label: "Wanting to drop from school", value: 0, fieldname: "want_drop_school" },
            { label: "Losing enthusiasm with my studies", value: 0, fieldname: "losing_enthusiams_studies" },
            { label: "Difficulty dealing with school rules and regulations", value: 0, fieldname: "hard_obey_scohol_rules" },
            { label: "Having trouble with school personnel", value: 0, fieldname: "trouble_with_personnel" },
            { label: "Afraid to speak in front of the class", value: 0, fieldname: "afraid_speak_infront_class" },
            { label: "Not spending enough time in school work", value: 0, fieldname: "no_time_for_schoolwork" },
            { label: "Hard to study in a boarding house", value: 0, fieldname: "hardtostudy_in_boardinghouse" },
            { label: "Part-time student part-time worker", value: 0, fieldname: "part_time_stud" },
            { label: "Difficulty in adjusting to school environment", value: 0, fieldname: "hard_adjust_school_environment" },
        ];
    }
    return Label;
}());



/***/ }),

/***/ "./src/app/new-results/new-results.component.css":
/*!*******************************************************!*\
  !*** ./src/app/new-results/new-results.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url('https://fonts.googleapis.com/css?family=Staatliches');\r\nh4,h5{\r\n    margin:0;\r\n    font-family: 'Staatliches', cursive;\r\n}\r\nh3{\r\n    margin: 0 0 0 0;\r\n    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\r\n}\r\n.printContent{\r\n    width:940px;\r\n    height:100vh;\r\n    page-break-inside:avoid !important;\r\n}\r\n@media print {\r\n    #message{\r\n        color:black;\r\n    }\r\n    .ui.horizontal.list>.item{\r\n        display:inline !important;\r\n    }\r\n    #print_header{\r\n        letter-spacing:0.2em;font-weight: bold;color:grey !important; \r\n    }\r\n    .ui.progress {\r\n        background-image: none;\r\n        -webkit-print-color-adjust: exact;\r\n        box-shadow: inset 0 0;\r\n        -webkit-box-shadow: inset 0 0;\r\n      \r\n      \r\n      }\r\n    \r\n \r\n    html, body {\r\n      /*changing width to 100% causes huge overflow and wrap*/\r\n      height:100%; \r\n      background: #FFF; \r\n      font-size: 9pt;\r\n    }\r\n    table{\r\n        page-break-inside: avoid;\r\n    }\r\n    \r\n  \r\n\r\n  }\r\n.onepage {\r\n    page-break-after: always;\r\n  }\r\n.onepage:last-child {\r\n    page-break-after: avoid;\r\n  }\r\n:host::ng-deep.ui.progress .label{\r\n    font-size: 1.2em;\r\n}\r\n:host::ng-deep.ui.progress#R .label{\r\n    color:#F1463C !important;\r\n}\r\n:host::ng-deep.ui.progress#I .label{\r\n    color:#F79517 !important; \r\n}\r\n:host::ng-deep.ui.progress#A .label{\r\n    color:#FFCF00 !important; \r\n}\r\n:host::ng-deep.ui.progress#S .label{\r\n    color:#01723B !important; \r\n}\r\n:host::ng-deep.ui.progress#E .label{\r\n    color:#0073A5 !important; \r\n}\r\n:host::ng-deep.ui.progress#C .label{\r\n    color:#9279B7 !important; \r\n}\r\n:host::ng-deep.ui.progress#R .bar{\r\n    background:#F1463C !important;\r\n}\r\n:host::ng-deep.ui.progress#I .bar{\r\n    background:#F79517 !important; \r\n}\r\n:host::ng-deep.ui.progress#A .bar{\r\n    background:#FFCF00 !important; \r\n}\r\n:host::ng-deep.ui.progress#S .bar{\r\n    background:#01723B !important; \r\n}\r\n:host::ng-deep.ui.progress#E .bar{\r\n    background:#0073A5 !important; \r\n}\r\n:host::ng-deep.ui.progress#C .bar{\r\n    background:#9279B7 !important; \r\n}\r\n.code-rate{\r\n    padding: 10px;\r\n}\r\n.image-icon{\r\n    margin:5px;\r\n}\r\n#try {\r\n    -webkit-clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);\r\n    clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);\r\n }\r\n.containerBox {\r\n    position: relative;\r\n    text-align: center;\r\n    color: black;\r\n}\r\n.center-text {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%);\r\n  }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3LXJlc3VsdHMvbmV3LXJlc3VsdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxtRUFBbUU7QUFDbkU7SUFDSSxTQUFTO0lBQ1Qsb0NBQW9DO0NBQ3ZDO0FBQ0Q7SUFDSSxnQkFBZ0I7SUFDaEIsdUhBQXVIO0NBQzFIO0FBQ0Q7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLG1DQUFtQztDQUN0QztBQUtEO0lBQ0k7UUFDSSxZQUFZO0tBQ2Y7SUFDRDtRQUNJLDBCQUEwQjtLQUM3QjtJQUNEO1FBQ0kscUJBQXFCLGtCQUFrQixzQkFBc0I7S0FDaEU7SUFDRDtRQUNJLHVCQUF1QjtRQUN2QixrQ0FBa0M7UUFDbEMsc0JBQXNCO1FBQ3RCLDhCQUE4Qjs7O09BRy9COzs7SUFHSDtNQUNFLHdEQUF3RDtNQUN4RCxZQUFZO01BQ1osaUJBQWlCO01BQ2pCLGVBQWU7S0FDaEI7SUFDRDtRQUNJLHlCQUF5QjtLQUM1Qjs7OztHQUlGO0FBRUQ7SUFDRSx5QkFBeUI7R0FDMUI7QUFFRDtJQUNFLHdCQUF3QjtHQUN6QjtBQUlIO0lBQ0ksaUJBQWlCO0NBQ3BCO0FBRUQ7SUFDSSx5QkFBeUI7Q0FDNUI7QUFDRDtJQUNJLHlCQUF5QjtDQUM1QjtBQUNEO0lBQ0kseUJBQXlCO0NBQzVCO0FBQ0Q7SUFDSSx5QkFBeUI7Q0FDNUI7QUFDRDtJQUNJLHlCQUF5QjtDQUM1QjtBQUNEO0lBQ0kseUJBQXlCO0NBQzVCO0FBS0Q7SUFDSSw4QkFBOEI7Q0FDakM7QUFDRDtJQUNJLDhCQUE4QjtDQUNqQztBQUNEO0lBQ0ksOEJBQThCO0NBQ2pDO0FBQ0Q7SUFDSSw4QkFBOEI7Q0FDakM7QUFDRDtJQUNJLDhCQUE4QjtDQUNqQztBQUNEO0lBQ0ksOEJBQThCO0NBQ2pDO0FBRUQ7SUFDSSxjQUFjO0NBQ2pCO0FBRUQ7SUFDSSxXQUFXO0NBQ2Q7QUFFQTtJQUNHLGlGQUFpRjtJQUNqRix5RUFBeUU7RUFDM0U7QUFPRDtJQUNHLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsYUFBYTtDQUNoQjtBQUNEO0lBQ0ksbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCxVQUFVO0lBQ1YseUNBQWlDO1lBQWpDLGlDQUFpQztHQUNsQyIsImZpbGUiOiJzcmMvYXBwL25ldy1yZXN1bHRzL25ldy1yZXN1bHRzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVN0YWF0bGljaGVzJyk7XHJcbmg0LGg1e1xyXG4gICAgbWFyZ2luOjA7XHJcbiAgICBmb250LWZhbWlseTogJ1N0YWF0bGljaGVzJywgY3Vyc2l2ZTtcclxufVxyXG5oM3tcclxuICAgIG1hcmdpbjogMCAwIDAgMDtcclxuICAgIGZvbnQtZmFtaWx5OiAnTHVjaWRhIFNhbnMnLCAnTHVjaWRhIFNhbnMgUmVndWxhcicsICdMdWNpZGEgR3JhbmRlJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XHJcbn1cclxuLnByaW50Q29udGVudHtcclxuICAgIHdpZHRoOjk0MHB4O1xyXG4gICAgaGVpZ2h0OjEwMHZoO1xyXG4gICAgcGFnZS1icmVhay1pbnNpZGU6YXZvaWQgIWltcG9ydGFudDtcclxufVxyXG5cclxuXHJcblxyXG5cclxuQG1lZGlhIHByaW50IHtcclxuICAgICNtZXNzYWdle1xyXG4gICAgICAgIGNvbG9yOmJsYWNrO1xyXG4gICAgfVxyXG4gICAgLnVpLmhvcml6b250YWwubGlzdD4uaXRlbXtcclxuICAgICAgICBkaXNwbGF5OmlubGluZSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgI3ByaW50X2hlYWRlcntcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzowLjJlbTtmb250LXdlaWdodDogYm9sZDtjb2xvcjpncmV5ICFpbXBvcnRhbnQ7IFxyXG4gICAgfVxyXG4gICAgLnVpLnByb2dyZXNzIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xyXG4gICAgICAgIC13ZWJraXQtcHJpbnQtY29sb3ItYWRqdXN0OiBleGFjdDtcclxuICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIDA7XHJcbiAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDA7XHJcbiAgICAgIFxyXG4gICAgICBcclxuICAgICAgfVxyXG4gICAgXHJcbiBcclxuICAgIGh0bWwsIGJvZHkge1xyXG4gICAgICAvKmNoYW5naW5nIHdpZHRoIHRvIDEwMCUgY2F1c2VzIGh1Z2Ugb3ZlcmZsb3cgYW5kIHdyYXAqL1xyXG4gICAgICBoZWlnaHQ6MTAwJTsgXHJcbiAgICAgIGJhY2tncm91bmQ6ICNGRkY7IFxyXG4gICAgICBmb250LXNpemU6IDlwdDtcclxuICAgIH1cclxuICAgIHRhYmxle1xyXG4gICAgICAgIHBhZ2UtYnJlYWstaW5zaWRlOiBhdm9pZDtcclxuICAgIH1cclxuICAgIFxyXG4gIFxyXG5cclxuICB9XHJcblxyXG4gIC5vbmVwYWdlIHtcclxuICAgIHBhZ2UtYnJlYWstYWZ0ZXI6IGFsd2F5cztcclxuICB9XHJcbiAgXHJcbiAgLm9uZXBhZ2U6bGFzdC1jaGlsZCB7XHJcbiAgICBwYWdlLWJyZWFrLWFmdGVyOiBhdm9pZDtcclxuICB9XHJcblxyXG5cclxuXHJcbjpob3N0OjpuZy1kZWVwLnVpLnByb2dyZXNzIC5sYWJlbHtcclxuICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbn1cclxuXHJcbjpob3N0OjpuZy1kZWVwLnVpLnByb2dyZXNzI1IgLmxhYmVse1xyXG4gICAgY29sb3I6I0YxNDYzQyAhaW1wb3J0YW50O1xyXG59XHJcbjpob3N0OjpuZy1kZWVwLnVpLnByb2dyZXNzI0kgLmxhYmVse1xyXG4gICAgY29sb3I6I0Y3OTUxNyAhaW1wb3J0YW50OyBcclxufVxyXG46aG9zdDo6bmctZGVlcC51aS5wcm9ncmVzcyNBIC5sYWJlbHtcclxuICAgIGNvbG9yOiNGRkNGMDAgIWltcG9ydGFudDsgXHJcbn1cclxuOmhvc3Q6Om5nLWRlZXAudWkucHJvZ3Jlc3MjUyAubGFiZWx7XHJcbiAgICBjb2xvcjojMDE3MjNCICFpbXBvcnRhbnQ7IFxyXG59XHJcbjpob3N0OjpuZy1kZWVwLnVpLnByb2dyZXNzI0UgLmxhYmVse1xyXG4gICAgY29sb3I6IzAwNzNBNSAhaW1wb3J0YW50OyBcclxufVxyXG46aG9zdDo6bmctZGVlcC51aS5wcm9ncmVzcyNDIC5sYWJlbHtcclxuICAgIGNvbG9yOiM5Mjc5QjcgIWltcG9ydGFudDsgXHJcbn1cclxuXHJcblxyXG5cclxuXHJcbjpob3N0OjpuZy1kZWVwLnVpLnByb2dyZXNzI1IgLmJhcntcclxuICAgIGJhY2tncm91bmQ6I0YxNDYzQyAhaW1wb3J0YW50O1xyXG59XHJcbjpob3N0OjpuZy1kZWVwLnVpLnByb2dyZXNzI0kgLmJhcntcclxuICAgIGJhY2tncm91bmQ6I0Y3OTUxNyAhaW1wb3J0YW50OyBcclxufVxyXG46aG9zdDo6bmctZGVlcC51aS5wcm9ncmVzcyNBIC5iYXJ7XHJcbiAgICBiYWNrZ3JvdW5kOiNGRkNGMDAgIWltcG9ydGFudDsgXHJcbn1cclxuOmhvc3Q6Om5nLWRlZXAudWkucHJvZ3Jlc3MjUyAuYmFye1xyXG4gICAgYmFja2dyb3VuZDojMDE3MjNCICFpbXBvcnRhbnQ7IFxyXG59XHJcbjpob3N0OjpuZy1kZWVwLnVpLnByb2dyZXNzI0UgLmJhcntcclxuICAgIGJhY2tncm91bmQ6IzAwNzNBNSAhaW1wb3J0YW50OyBcclxufVxyXG46aG9zdDo6bmctZGVlcC51aS5wcm9ncmVzcyNDIC5iYXJ7XHJcbiAgICBiYWNrZ3JvdW5kOiM5Mjc5QjcgIWltcG9ydGFudDsgXHJcbn1cclxuXHJcbi5jb2RlLXJhdGV7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4uaW1hZ2UtaWNvbntcclxuICAgIG1hcmdpbjo1cHg7XHJcbn1cclxuXHJcbiAjdHJ5IHtcclxuICAgIC13ZWJraXQtY2xpcC1wYXRoOiBwb2x5Z29uKDUwJSAwJSwgMTAwJSAyNSUsIDEwMCUgNzUlLCA1MCUgMTAwJSwgMCUgNzUlLCAwJSAyNSUpO1xyXG4gICAgY2xpcC1wYXRoOiBwb2x5Z29uKDUwJSAwJSwgMTAwJSAyNSUsIDEwMCUgNzUlLCA1MCUgMTAwJSwgMCUgNzUlLCAwJSAyNSUpO1xyXG4gfVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gLmNvbnRhaW5lckJveCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuLmNlbnRlci10ZXh0IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgfVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/new-results/new-results.component.html":
/*!********************************************************!*\
  !*** ./src/app/new-results/new-results.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!isSinglePrinting && !isAllPrinting && !isNewPrinting\">\n  <div class=\"ui top attached demo menu\">\n    <a class=\"item\" (click)=\"saydbar.toggle()\">\n      <i class=\"sidebar icon\"></i>\n    </a>\n    <div class=\"right menu\">\n      <div class=\"item\">\n        <div class=\"ui blue button\" (click)=\"logout()\">Logout</div>\n      </div>\n    </div>\n  </div>\n\n  <sui-sidebar-container class=\"ui bottom attached segment\">\n    <sui-sidebar class=\"vertical\" #saydbar>\n      <a class=\"item\" routerLink=\"/admin/home\">\n        Home\n      </a>\n      <a class=\"item\" routerLink=\"/admin/graph/specific\">\n        Specific Reports\n      </a>\n      <a class=\"item\" routerLink=\"/admin/graph/general\">\n        General Reports\n      </a>\n      <a class=\"item\" routerLink=\"/admin/old-print\">\n        Print Section\n        <div class=\"ui grey horizontal label\">Old</div>\n      </a>\n      <a class=\"item\" routerLink=\"/admin/old-archive\">\n        Archive Section\n        <div class=\"ui grey horizontal label\">Old</div>\n      </a>\n      <a class=\"item active\" routerLink=\"/admin/print\">\n        Print Section\n        <div class=\"ui grey horizontal label\">New</div>\n      </a>\n      <a class=\"item\" routerLink=\"/admin/new-print\">\n        Print Section\n        <div class=\"ui red horizontal label\">New</div>\n      </a>\n      <a class=\"item\" routerLink=\"/admin/archive\">\n        Archive Section\n        <div class=\"ui grey horizontal label\">New</div>\n      </a>\n      <a class=\"item\" routerLink=\"/admin/new-archive\">\n        Archive Section\n        <div class=\"ui red horizontal label\">New</div>\n      </a>\n      <a class=\"item\" routerLink=\"/admin/settings\">\n        Accounts Settings\n      </a>\n    </sui-sidebar>\n\n    <sui-sidebar-sibling [isDimmedWhenVisible]=\"true\">\n\n      <div class=\"ui container\" style=\"margin-top:15px;height: 100%;\">\n\n        <h2 class=\"ui center aligned icon header\">\n          <i class=\"circular home icon\"></i>\n          Print Section\n\n          <div class=\"sub header\">This page is for handling unprinted self-directed-search result of every student</div>\n        </h2>\n\n        <div class=\"ui info message\">\n          <div class=\"header\">\n            Some of the action you can do in this section\n          </div>\n          <ul class=\"list\">\n            <li>You can use \"Print All\" button on the upper right of the page to print all of\n              unprinted\n              result(s)</li>\n            <li> You can also individually print this result(s) by clicking the \"View result\" button once the modal is\n              open\n              you will see the print button on the upper right corner of the modal</li>\n          </ul>\n        </div>\n\n        <div class=\"ui negative message\">\n          <div class=\"header\">\n            Caution:\n          </div>\n          <p>Once you click the print button the system will automatically remove this users and move it to the\n            archive\n            please proceed with caution <br>\n            If you there is an accident you can always go to the archive page to print it.\n          </p>\n        </div>\n\n        <div class=\"right\">\n          <button class=\"button ui disabled\" (click)=\"printAll()\">\n            Print All\n          </button>\n        </div>\n        <br>\n        <div class=\"ui input\" style=\"float:right\">\n          <input type=\"text\" placeholder=\"Search...\" (input)=\"onSearchChange($event.target.value)\">\n        </div>\n        <br>\n        <h2 class=\"ui red header center\" *ngIf=\"isEmpty\">No Result</h2>\n        <table class=\"ui celled table\" *ngIf=\"!isEmpty\">\n          <thead>\n            <tr>\n              <th>Name</th>\n              <th>Username</th>\n              <th>Actions</th>\n            </tr>\n          </thead>\n          <tbody *ngIf=\"!isEmpty\">\n            <tr *ngFor=\"let item of newResultData | paginate: { itemsPerPage: 10, currentPage: page } ; let i = index\">\n              <td>{{item.name}}</td>\n              <td>{{item.username}}</td>\n              <td>\n                <div class=\"center\">\n                  <button class=\"ui blue button\" (click)=\"viewSingleResult(item.id, item.name)\">\n                    View result\n                  </button>\n                </div>\n              </td>\n            </tr>\n          </tbody>\n          <tfoot>\n            <tr>\n              <th colspan=\"5\">\n                <div class=\"ui right floated pagination menu\">\n                  <a></a>\n                  <pagination-controls (pageChange)=\"page = $event\"></pagination-controls>\n                </div>\n              </th>\n            </tr>\n          </tfoot>\n        </table>\n      </div>\n\n\n    </sui-sidebar-sibling>\n  </sui-sidebar-container>\n\n\n\n  <!-- View single result modal -->\n  <sui-modal [isClosable]=\"true\" (dismissed)=\"resultModal = false\" #resultModall *ngIf=\"resultModal && !isSinglePrinting\">\n\n    <div class=\"header\">\n      <div class=\"right\">\n        <button class=\"ui labeled icon button blue\" (click)=\"resultModall.deny();printSingleResult(singleResultId);\">\n          <i class=\"print icon\"></i>\n          Print\n        </button>\n      </div>\n    </div>\n    <div class=\"content\">\n\n      <div class=\"ui\" *ngIf=\"!noInfo\">\n        <div class=\"ui segment\" *ngFor=\"let code of singleResultData\">\n          <a class=\"ui red right ribbon label large\">{{code.name}}</a>\n          <div *ngFor=\"let indivCode of code.result\">\n            <div class=\"ui divided items\">\n              <div class=\"item\">\n                <div class=\"content\">\n                  <a class=\"header\">{{indivCode.occupation}}</a>\n                  <div class=\"description\">\n                    <p>{{indivCode.description}}</p>\n                  </div>\n\n                  <div class=\"extra\">\n                    <a href=\"{{indivCode.link}}\" class=\"ui right floated blue button\">\n                      See more details here\n                      <i class=\"right chevron icon\"></i>\n                    </a>\n                  </div>\n\n                  <hr>\n                </div>\n              </div>\n            </div>\n          </div>\n\n        </div>\n      </div>\n\n    </div>\n    <div class=\"actions\">\n      <button class=\"ui red button\" (click)=\"resultModall.deny()\">Close</button>\n    </div>\n\n  </sui-modal>\n</div>\n\n\n<!-- Print template section -->\n\n\n<!-- Single Print -->\n<div *ngIf=\"isSinglePrinting\">\n  <div class=\"ui active dimmer\" *ngIf=\"loader\">\n    <div class=\"ui massive text loader\">Loading</div>\n  </div>\n\n\n  <div class=\"head\">\n    <div style=\"margin-bottom:10px;padding-right:20px;padding-left:20px;\">\n      <div id=\"logo_header\" class=\"ui\">\n        <img src=\"assets/images/gclogoprint.png\" class=\"ui mini left floated image\" alt=\"\">\n        <img src=\"assets/icons/riasec-logo.png\" class=\"ui mini right floated image\" alt=\"\">\n      </div>\n      <h4 class=\"center\" style=\"font-weight:bolder\">GORDON COLLEGE</h4>\n      <h4 class=\"center\" style=\"font-weight:bolder\">STUDENT WELFARE OFFICE</h4>\n      <p class=\"center\" style=\"font-weight:bold\">Tapinac Oval Sports Complex, East Tapinac, Olongapo City</p>\n\n    </div>\n  </div>\n\n\n\n\n  <div class=\"body\">\n\n    <div style=\"margin-left:20px; margin-right:20px;\">\n      <hr>\n      <div class=\"ui black message\" id=\"message\">\n        {{singleResultName}}\n        <span style=\"float:right\">{{dateNow}}</span>\n      </div>\n    </div>\n    <h2 class=\"center container\" id=\"print_header\">OFFICIAL RESULT</h2>\n    <div class=\"ui grid\" style=\"margin-left:20px; margin-right:20px;\">\n      <div class=\"eight wide column\">\n        <div class=\"ui card\" style=\"height:100%;width:100%;\">\n          <div class=\"content\">\n            <h3 class=\"ui header center bolder\">Summary Code Occupations</h3>\n\n            <div class=\"ui bulleted divided list\">\n              <div class=\"item\" *ngFor=\"let item of allOccupations\">{{item.occupation}}</div>\n\n            </div>\n\n\n\n          </div>\n        </div>\n      </div>\n      <div class=\"eight wide column\">\n        <div class=\"ui card\" style=\"width:100%;height:100%;\">\n          <div class=\"content\">\n\n            <h3 class=\"ui header center bolder\">My Summary Code</h3>\n            <div class=\"containerBox\">\n\n              <img src=\"assets/icons/riasec-logo.png\" class=\"img-summary\" alt=\"\" width=\"200\" height=\"200\">\n              <div class=\"center-text\">\n                <span *ngFor=\"let code of summaryCode\" style=\"font-weight:bolder;font-size:1.5em\" [ngStyle]=\"{'color': true ? getColor(code) : ''}\">\n                  {{code}}\n                </span>\n              </div>\n            </div>\n\n            <div *ngFor=\"let code of summaryCode\">\n              <div class=\"ui divider\"></div>\n              <img class=\"ui middle aligned tiny image\" src=\"assets/icons/{{code}}_icon.png\">\n              <span style=\"font-weight: bolder; font-size:1.5em; margin-left: 10px;letter-spacing: 5px;\" [ngStyle]=\"{'color': true ? getColor(code) : ''}\">\n                {{getWord(code)}}</span>\n            </div>\n\n\n\n\n\n\n          </div>\n        </div>\n\n      </div>\n    </div>\n\n    <div class=\"ui tiny message\" style=\"margin-left:20px; margin-right:20px;\">\n      <p style=\"font-style:italic\">Note: You can use your summary code to search all of the occupation(s)\n        available on your code\n        in https://www.onetonline.org/ </p>\n    </div>\n  </div>\n\n</div>\n\n\n\n<!-- All Student Print -->\n\n<div *ngIf=\"isAllPrinting\">\n  <div class=\"ui active dimmer\" *ngIf=\"loader\">\n    <div class=\"ui massive text loader\">Loading</div>\n  </div>\n\n  <div class=\"onepage\" *ngFor=\"let item of newResultData\">\n    <div class=\"ui container \">\n\n\n      <div class=\"center\">\n        <img src=\"assets/images/gclogoprint.png\" alt=\"\" width=\"48\" height=\"48\">\n      </div>\n      <h5 class=\"center\" style=\"letter-spacing:0.2em;font-weight: bold;color:grey;\">OFFICIAL RESULT</h5>\n      <p class=\"center\" style=\"font-weight:600;\">City of Olongapo</p>\n      <h4 class=\"center\" style=\"font-weight:bolder\">GORDON COLLEGE</h4>\n      <h4 class=\"center\" style=\"font-weight:bolder\">STUDENT WELFARE OFFICE</h4>\n\n      <hr>\n\n      <span style=\"float:right;font: weight 600;\">{{dateNow}}</span>\n      <h2 style=\"font-weight:bolder;\">{{item.info.name}}</h2>\n\n\n\n\n      <div class=\"ui card template\" *ngFor=\"let indiv of item.data\" style=\"width:100%\">\n        <!-- Header -->\n        <div class=\"content\">\n          <div class=\"header\">[{{indiv.name}}]</div>\n        </div>\n        <!-- Body -->\n        <div class=\"content data-content\">\n          <table class=\"ui celled table\">\n            <thead>\n              <tr>\n                <th class=\"center\">Occupation</th>\n                <th class=\"center\">Description</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let itemRes of indiv.result\">\n                <td>{{itemRes.occupation}}</td>\n                <td>{{itemRes.description}}</td>\n              </tr>\n            </tbody>\n          </table>\n\n        </div>\n      </div>\n\n    </div>\n  </div>\n</div>\n\n\n\n\n\n<div class=\"newPrint\" *ngIf=\"isNewPrinting\">\n  <div class=\"ui active dimmer\" *ngIf=\"loader\">\n    <div class=\"ui massive text loader\">Loading</div>\n  </div>\n\n\n</div>"

/***/ }),

/***/ "./src/app/new-results/new-results.component.ts":
/*!******************************************************!*\
  !*** ./src/app/new-results/new-results.component.ts ***!
  \******************************************************/
/*! exports provided: NewResultsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewResultsComponent", function() { return NewResultsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_admin_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/admin.service */ "./src/app/services/admin.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
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




var NewResultsComponent = /** @class */ (function () {
    function NewResultsComponent(adminService, router) {
        this.adminService = adminService;
        this.router = router;
        this.summaryCode = Array.apply(null, Array());
        this.val = 25;
        this.value = 50;
        this.r = "r";
        this.page = 1;
        this.loader = false;
        this.dateNow = new Date().toLocaleDateString();
        this.isSinglePrinting = false;
        this.isAllPrinting = false;
        this.isNewPrinting = false;
        this.isEmpty = false;
        this.singleResultId = 0;
        this.allOccupations = Array.apply(null, Array());
        this.resultModal = false;
    }
    NewResultsComponent.prototype.ngOnInit = function () {
        this.getTempResults();
    };
    NewResultsComponent.prototype.onSearchChange = function (searchValue) {
        var _this = this;
        this.adminService.dynamicSearch("print-section-old", searchValue).subscribe(function (successData) {
            _this.newResultData = successData;
            // console.log(this.newResultData)
            if (successData.length > 0) {
                _this.isEmpty = false;
            }
            else {
                _this.isEmpty = true;
            }
        }, function (error) { return console.log(error); });
    };
    NewResultsComponent.prototype.getTempResults = function () {
        var _this = this;
        this.adminService.getTempResults().subscribe(function (successData) {
            _this.newResultData = successData;
            // console.log(this.newResultData)
            if (successData.length > 0) {
                _this.isEmpty = false;
            }
            else {
                _this.isEmpty = true;
            }
        }, function (error) { return console.log(error); });
    };
    NewResultsComponent.prototype.viewSingleResult = function (i, name) {
        var _this = this;
        // console.log(i)
        //Get Sds result
        this.adminService.getMySDS(i).subscribe(function (successData) {
            // console.log(successData)
            _this.singleResultData = successData;
            _this.allOccupations = successData[0].result;
            _this.singleResultName = name;
            _this.singleResultId = i;
            _this.singleResultCode = successData[0].name;
            // console.log(this.singleResultCode)
            //Open the modal
            _this.resultModal = true;
        }, function (error) { return console.log(error); });
    };
    NewResultsComponent.prototype.printSingleResult = function (i) {
        var _this = this;
        this.loader = true;
        this.isSinglePrinting = true;
        this.summaryCode = this.singleResultCode.split("");
        setTimeout(function () { return _this.loader = false; }, 500);
        setTimeout(function () {
            window.print();
            _this.adminService.setSinglePrint(i).subscribe(function (successData) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default()({
                    title: "Printed Sds result of " + _this.singleResultName,
                    type: "success"
                });
                _this.resultModal = false;
                _this.getTempResults();
            }, function (error) { return console.log(error); });
            _this.isSinglePrinting = false;
        }, 1000);
    };
    NewResultsComponent.prototype.printAll = function () {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default()({
            title: 'Are you sure?',
            text: "All of this users will be moved on archive",
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, print it!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: false
        }).then(function (result) {
            if (result.value) {
                _this.loader = true;
                _this.isAllPrinting = true;
                setTimeout(function (_) { return _this.loader = false; }, 900);
                setTimeout(function (_) {
                    window.print();
                    _this.adminService.setAllPrint().subscribe(function (successData) {
                        _this.getTempResults();
                    }, function (error) { return console.log(error); });
                    _this.isAllPrinting = false;
                }, 1000);
            }
            else if (result.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.DismissReason.cancel) {
            }
        });
    };
    NewResultsComponent.prototype.logout = function () {
        localStorage.clear();
        this.router.navigate(["/admin/auth"]);
    };
    NewResultsComponent.prototype.getColor = function (letter) {
        if (letter == "R") {
            return "#F1463C";
        }
        else if (letter == "I") {
            return "#F79517";
        }
        else if (letter == "A") {
            return "#FFCF00";
        }
        else if (letter == "S") {
            return "#01723B";
        }
        else if (letter == "E") {
            return "#0073A5";
        }
        else {
            return "#9279B7";
        }
    };
    NewResultsComponent.prototype.getWord = function (letter) {
        if (letter == "R") {
            return "Realistic";
        }
        else if (letter == "I") {
            return "Investigative";
        }
        else if (letter == "A") {
            return "Artistic";
        }
        else if (letter == "S") {
            return "Social";
        }
        else if (letter == "E") {
            return "Enterprising";
        }
        else {
            return "Conventional";
        }
    };
    NewResultsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-new-results',
            template: __webpack_require__(/*! ./new-results.component.html */ "./src/app/new-results/new-results.component.html"),
            styles: [__webpack_require__(/*! ./new-results.component.css */ "./src/app/new-results/new-results.component.css")],
            host: {
                '(document:onafterprint)': 'onafterprint($event)'
            }
        }),
        __metadata("design:paramtypes", [_services_admin_service__WEBPACK_IMPORTED_MODULE_1__["AdminService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], NewResultsComponent);
    return NewResultsComponent;
}());



/***/ }),

/***/ "./src/app/page404/page404.component.css":
/*!***********************************************!*\
  !*** ./src/app/page404/page404.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\r\n    box-sizing: border-box;\r\n  }\r\n  \r\n  body {\r\n    padding: 0;\r\n    margin: 0;\r\n  }\r\n  \r\n  #notfound {\r\n    position: relative;\r\n    height: 100vh;\r\n  }\r\n  \r\n  #notfound .notfound {\r\n    position: absolute;\r\n    left: 50%;\r\n    top: 50%;\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%);\r\n  }\r\n  \r\n  .notfound {\r\n    max-width: 410px;\r\n    width: 100%;\r\n    text-align: center;\r\n  }\r\n  \r\n  .notfound .notfound-404 {\r\n    height: 280px;\r\n    position: relative;\r\n    z-index: -1;\r\n  }\r\n  \r\n  .notfound .notfound-404 h1 {\r\n    font-family: 'Montserrat', sans-serif;\r\n    font-size: 230px;\r\n    margin: 0px;\r\n    font-weight: 900;\r\n    position: absolute;\r\n    left: 50%;\r\n    -webkit-transform: translateX(-50%);\r\n            transform: translateX(-50%);\r\n    background: url('404.jpg') no-repeat;\r\n    -webkit-background-clip: text;\r\n    -webkit-text-fill-color: transparent;\r\n    background-size: cover;\r\n    background-position: center;\r\n  }\r\n  \r\n  .notfound h2 {\r\n    font-family: 'Montserrat', sans-serif;\r\n    color: #000;\r\n    font-size: 24px;\r\n    font-weight: 700;\r\n    text-transform: uppercase;\r\n    margin-top: 0;\r\n  }\r\n  \r\n  .notfound p {\r\n    font-family: 'Montserrat', sans-serif;\r\n    color: #000;\r\n    font-size: 14px;\r\n    font-weight: 400;\r\n    margin-bottom: 20px;\r\n    margin-top: 0px;\r\n  }\r\n  \r\n  .notfound a {\r\n    font-family: 'Montserrat', sans-serif;\r\n    font-size: 14px;\r\n    text-decoration: none;\r\n    text-transform: uppercase;\r\n    background: #0046d5;\r\n    display: inline-block;\r\n    padding: 15px 30px;\r\n    border-radius: 40px;\r\n    color: #fff;\r\n    font-weight: 700;\r\n    box-shadow: 0px 4px 15px -5px #0046d5;\r\n  }\r\n  \r\n  @media only screen and (max-width: 767px) {\r\n      .notfound .notfound-404 {\r\n        height: 142px;\r\n      }\r\n      .notfound .notfound-404 h1 {\r\n        font-size: 112px;\r\n      }\r\n  }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZTQwNC9wYWdlNDA0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFFWSx1QkFBdUI7R0FDaEM7O0VBRUQ7SUFDRSxXQUFXO0lBQ1gsVUFBVTtHQUNYOztFQUVEO0lBQ0UsbUJBQW1CO0lBQ25CLGNBQWM7R0FDZjs7RUFFRDtJQUNFLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1YsU0FBUztJQUNULHlDQUF5QztZQUVqQyxpQ0FBaUM7R0FDMUM7O0VBRUQ7SUFDRSxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLG1CQUFtQjtHQUNwQjs7RUFFRDtJQUNFLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsWUFBWTtHQUNiOztFQUVEO0lBQ0Usc0NBQXNDO0lBQ3RDLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1Ysb0NBQW9DO1lBRTVCLDRCQUE0QjtJQUNwQyxxQ0FBOEQ7SUFDOUQsOEJBQThCO0lBQzlCLHFDQUFxQztJQUNyQyx1QkFBdUI7SUFDdkIsNEJBQTRCO0dBQzdCOztFQUdEO0lBQ0Usc0NBQXNDO0lBQ3RDLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLDBCQUEwQjtJQUMxQixjQUFjO0dBQ2Y7O0VBRUQ7SUFDRSxzQ0FBc0M7SUFDdEMsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLGdCQUFnQjtHQUNqQjs7RUFFRDtJQUNFLHNDQUFzQztJQUN0QyxnQkFBZ0I7SUFDaEIsc0JBQXNCO0lBQ3RCLDBCQUEwQjtJQUMxQixvQkFBb0I7SUFDcEIsc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsWUFBWTtJQUNaLGlCQUFpQjtJQUVULHNDQUFzQztHQUMvQzs7RUFHRDtNQUNJO1FBQ0UsY0FBYztPQUNmO01BQ0Q7UUFDRSxpQkFBaUI7T0FDbEI7R0FDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2U0MDQvcGFnZTQwNC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgfVxyXG4gIFxyXG4gIGJvZHkge1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcbiAgXHJcbiAgI25vdGZvdW5kIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgfVxyXG4gIFxyXG4gICNub3Rmb3VuZCAubm90Zm91bmQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgfVxyXG4gIFxyXG4gIC5ub3Rmb3VuZCB7XHJcbiAgICBtYXgtd2lkdGg6IDQxMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC5ub3Rmb3VuZCAubm90Zm91bmQtNDA0IHtcclxuICAgIGhlaWdodDogMjgwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB6LWluZGV4OiAtMTtcclxuICB9XHJcbiAgXHJcbiAgLm5vdGZvdW5kIC5ub3Rmb3VuZC00MDQgaDEge1xyXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMjMwcHg7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICAgICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uL2Fzc2V0cy9iYWNrZ3JvdW5kcy80MDQuanBnJykgbm8tcmVwZWF0O1xyXG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XHJcbiAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICBcclxuICAubm90Zm91bmQgaDIge1xyXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gIH1cclxuICBcclxuICAubm90Zm91bmQgcCB7XHJcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIG1hcmdpbi10b3A6IDBweDtcclxuICB9XHJcbiAgXHJcbiAgLm5vdGZvdW5kIGEge1xyXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDA0NmQ1O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcGFkZGluZzogMTVweCAzMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDRweCAxNXB4IC01cHggIzAwNDZkNTtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDRweCAxNXB4IC01cHggIzAwNDZkNTtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICAgICAubm90Zm91bmQgLm5vdGZvdW5kLTQwNCB7XHJcbiAgICAgICAgaGVpZ2h0OiAxNDJweDtcclxuICAgICAgfVxyXG4gICAgICAubm90Zm91bmQgLm5vdGZvdW5kLTQwNCBoMSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMTJweDtcclxuICAgICAgfVxyXG4gIH1cclxuICAiXX0= */"

/***/ }),

/***/ "./src/app/page404/page404.component.html":
/*!************************************************!*\
  !*** ./src/app/page404/page404.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"notfound\">\n  <div class=\"notfound\">\n    <div class=\"notfound-404\">\n      <h1>Oops!</h1>\n    </div>\n    <h2>404 - Page not found</h2>\n    <p>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>\n    <a routerLink=\"/\">Go To Homepage</a>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/page404/page404.component.ts":
/*!**********************************************!*\
  !*** ./src/app/page404/page404.component.ts ***!
  \**********************************************/
/*! exports provided: Page404Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page404Component", function() { return Page404Component; });
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

var Page404Component = /** @class */ (function () {
    function Page404Component() {
    }
    Page404Component.prototype.ngOnInit = function () {
    };
    Page404Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page404',
            template: __webpack_require__(/*! ./page404.component.html */ "./src/app/page404/page404.component.html"),
            styles: [__webpack_require__(/*! ./page404.component.css */ "./src/app/page404/page404.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Page404Component);
    return Page404Component;
}());



/***/ }),

/***/ "./src/app/print-new/print-new.component.css":
/*!***************************************************!*\
  !*** ./src/app/print-new/print-new.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url('https://fonts.googleapis.com/css?family=Staatliches');\r\nh4,h5{\r\n    margin:0;\r\n    font-family: 'Staatliches', cursive;\r\n}\r\nh3{\r\n    margin: 0 0 0 0;\r\n    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\r\n}\r\n.printContent{\r\n    width:940px;\r\n    height:100vh;\r\n    page-break-inside:avoid !important;\r\n}\r\n@media print {\r\n    #message{\r\n        color:black;\r\n    }\r\n    #print_header{\r\n        letter-spacing:0.2em;font-weight: bold;color:grey !important; \r\n    }\r\n    .ui.progress {\r\n        background-image: none;\r\n        -webkit-print-color-adjust: exact;\r\n        box-shadow: inset 0 0;\r\n        -webkit-box-shadow: inset 0 0;\r\n      \r\n      \r\n      }\r\n      \r\n      \r\n      html, body {\r\n          /*changing width to 100% causes huge overflow and wrap*/\r\n          height:100%; \r\n          background: #FFF; \r\n          font-size: 9pt;\r\n          font-family: Staatliches;\r\n        }\r\n        h4,h5{\r\n          font-family: 'Staatliches', cursive;\r\n      }\r\n        h3{\r\n        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\r\n    }\r\n    table{\r\n        page-break-inside: avoid;\r\n    }\r\n    \r\n  \r\n\r\n  }\r\n.onepage {\r\n    page-break-after: always;\r\n  }\r\n.onepage:last-child {\r\n    page-break-after: avoid;\r\n  }\r\n:host::ng-deep.ui.progress .label{\r\n    font-size: 1.2em;\r\n}\r\n:host::ng-deep.ui.progress#R .label{\r\n    color:#F1463C !important;\r\n}\r\n:host::ng-deep.ui.progress#I .label{\r\n    color:#F79517 !important; \r\n}\r\n:host::ng-deep.ui.progress#A .label{\r\n    color:#FFCF00 !important; \r\n}\r\n:host::ng-deep.ui.progress#S .label{\r\n    color:#01723B !important; \r\n}\r\n:host::ng-deep.ui.progress#E .label{\r\n    color:#0073A5 !important; \r\n}\r\n:host::ng-deep.ui.progress#C .label{\r\n    color:#9279B7 !important; \r\n}\r\n:host::ng-deep.ui.progress#R .bar{\r\n    background:#F1463C !important;\r\n}\r\n:host::ng-deep.ui.progress#I .bar{\r\n    background:#F79517 !important; \r\n}\r\n:host::ng-deep.ui.progress#A .bar{\r\n    background:#FFCF00 !important; \r\n}\r\n:host::ng-deep.ui.progress#S .bar{\r\n    background:#01723B !important; \r\n}\r\n:host::ng-deep.ui.progress#E .bar{\r\n    background:#0073A5 !important; \r\n}\r\n:host::ng-deep.ui.progress#C .bar{\r\n    background:#9279B7 !important; \r\n}\r\n.code-rate{\r\n    padding: 10px;\r\n}\r\n.image-icon{\r\n    margin:5px;\r\n}\r\n#try {\r\n    -webkit-clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);\r\n    clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);\r\n }\r\n.containerBox {\r\n    position: relative;\r\n    text-align: center;\r\n    color: black;\r\n}\r\n.center-text {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%);\r\n  }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJpbnQtbmV3L3ByaW50LW5ldy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG1FQUFtRTtBQUNuRTtJQUNJLFNBQVM7SUFDVCxvQ0FBb0M7Q0FDdkM7QUFDRDtJQUNJLGdCQUFnQjtJQUNoQix1SEFBdUg7Q0FDMUg7QUFDRDtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUNBQW1DO0NBQ3RDO0FBS0Q7SUFDSTtRQUNJLFlBQVk7S0FDZjtJQUNEO1FBQ0kscUJBQXFCLGtCQUFrQixzQkFBc0I7S0FDaEU7SUFDRDtRQUNJLHVCQUF1QjtRQUN2QixrQ0FBa0M7UUFDbEMsc0JBQXNCO1FBQ3RCLDhCQUE4Qjs7O09BRy9COzs7TUFHRDtVQUNJLHdEQUF3RDtVQUN4RCxZQUFZO1VBQ1osaUJBQWlCO1VBQ2pCLGVBQWU7VUFDZix5QkFBeUI7U0FDMUI7UUFDRDtVQUNFLG9DQUFvQztPQUN2QztRQUNDO1FBQ0EsdUhBQXVIO0tBQzFIO0lBQ0Q7UUFDSSx5QkFBeUI7S0FDNUI7Ozs7R0FJRjtBQUVEO0lBQ0UseUJBQXlCO0dBQzFCO0FBRUQ7SUFDRSx3QkFBd0I7R0FDekI7QUFJSDtJQUNJLGlCQUFpQjtDQUNwQjtBQUVEO0lBQ0kseUJBQXlCO0NBQzVCO0FBQ0Q7SUFDSSx5QkFBeUI7Q0FDNUI7QUFDRDtJQUNJLHlCQUF5QjtDQUM1QjtBQUNEO0lBQ0kseUJBQXlCO0NBQzVCO0FBQ0Q7SUFDSSx5QkFBeUI7Q0FDNUI7QUFDRDtJQUNJLHlCQUF5QjtDQUM1QjtBQUtEO0lBQ0ksOEJBQThCO0NBQ2pDO0FBQ0Q7SUFDSSw4QkFBOEI7Q0FDakM7QUFDRDtJQUNJLDhCQUE4QjtDQUNqQztBQUNEO0lBQ0ksOEJBQThCO0NBQ2pDO0FBQ0Q7SUFDSSw4QkFBOEI7Q0FDakM7QUFDRDtJQUNJLDhCQUE4QjtDQUNqQztBQUVEO0lBQ0ksY0FBYztDQUNqQjtBQUVEO0lBQ0ksV0FBVztDQUNkO0FBRUE7SUFDRyxpRkFBaUY7SUFDakYseUVBQXlFO0VBQzNFO0FBT0Q7SUFDRyxtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGFBQWE7Q0FDaEI7QUFDRDtJQUNJLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsVUFBVTtJQUNWLHlDQUFpQztZQUFqQyxpQ0FBaUM7R0FDbEMiLCJmaWxlIjoic3JjL2FwcC9wcmludC1uZXcvcHJpbnQtbmV3LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVN0YWF0bGljaGVzJyk7XHJcbmg0LGg1e1xyXG4gICAgbWFyZ2luOjA7XHJcbiAgICBmb250LWZhbWlseTogJ1N0YWF0bGljaGVzJywgY3Vyc2l2ZTtcclxufVxyXG5oM3tcclxuICAgIG1hcmdpbjogMCAwIDAgMDtcclxuICAgIGZvbnQtZmFtaWx5OiAnTHVjaWRhIFNhbnMnLCAnTHVjaWRhIFNhbnMgUmVndWxhcicsICdMdWNpZGEgR3JhbmRlJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XHJcbn1cclxuLnByaW50Q29udGVudHtcclxuICAgIHdpZHRoOjk0MHB4O1xyXG4gICAgaGVpZ2h0OjEwMHZoO1xyXG4gICAgcGFnZS1icmVhay1pbnNpZGU6YXZvaWQgIWltcG9ydGFudDtcclxufVxyXG5cclxuXHJcblxyXG5cclxuQG1lZGlhIHByaW50IHtcclxuICAgICNtZXNzYWdle1xyXG4gICAgICAgIGNvbG9yOmJsYWNrO1xyXG4gICAgfVxyXG4gICAgI3ByaW50X2hlYWRlcntcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzowLjJlbTtmb250LXdlaWdodDogYm9sZDtjb2xvcjpncmV5ICFpbXBvcnRhbnQ7IFxyXG4gICAgfVxyXG4gICAgLnVpLnByb2dyZXNzIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xyXG4gICAgICAgIC13ZWJraXQtcHJpbnQtY29sb3ItYWRqdXN0OiBleGFjdDtcclxuICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIDA7XHJcbiAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDA7XHJcbiAgICAgIFxyXG4gICAgICBcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgXHJcbiAgICAgIGh0bWwsIGJvZHkge1xyXG4gICAgICAgICAgLypjaGFuZ2luZyB3aWR0aCB0byAxMDAlIGNhdXNlcyBodWdlIG92ZXJmbG93IGFuZCB3cmFwKi9cclxuICAgICAgICAgIGhlaWdodDoxMDAlOyBcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICNGRkY7IFxyXG4gICAgICAgICAgZm9udC1zaXplOiA5cHQ7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogU3RhYXRsaWNoZXM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGg0LGg1e1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdTdGFhdGxpY2hlcycsIGN1cnNpdmU7XHJcbiAgICAgIH1cclxuICAgICAgICBoM3tcclxuICAgICAgICBmb250LWZhbWlseTogJ0x1Y2lkYSBTYW5zJywgJ0x1Y2lkYSBTYW5zIFJlZ3VsYXInLCAnTHVjaWRhIEdyYW5kZScsICdMdWNpZGEgU2FucyBVbmljb2RlJywgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xyXG4gICAgfVxyXG4gICAgdGFibGV7XHJcbiAgICAgICAgcGFnZS1icmVhay1pbnNpZGU6IGF2b2lkO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgXHJcblxyXG4gIH1cclxuXHJcbiAgLm9uZXBhZ2Uge1xyXG4gICAgcGFnZS1icmVhay1hZnRlcjogYWx3YXlzO1xyXG4gIH1cclxuICBcclxuICAub25lcGFnZTpsYXN0LWNoaWxkIHtcclxuICAgIHBhZ2UtYnJlYWstYWZ0ZXI6IGF2b2lkO1xyXG4gIH1cclxuXHJcblxyXG5cclxuOmhvc3Q6Om5nLWRlZXAudWkucHJvZ3Jlc3MgLmxhYmVse1xyXG4gICAgZm9udC1zaXplOiAxLjJlbTtcclxufVxyXG5cclxuOmhvc3Q6Om5nLWRlZXAudWkucHJvZ3Jlc3MjUiAubGFiZWx7XHJcbiAgICBjb2xvcjojRjE0NjNDICFpbXBvcnRhbnQ7XHJcbn1cclxuOmhvc3Q6Om5nLWRlZXAudWkucHJvZ3Jlc3MjSSAubGFiZWx7XHJcbiAgICBjb2xvcjojRjc5NTE3ICFpbXBvcnRhbnQ7IFxyXG59XHJcbjpob3N0OjpuZy1kZWVwLnVpLnByb2dyZXNzI0EgLmxhYmVse1xyXG4gICAgY29sb3I6I0ZGQ0YwMCAhaW1wb3J0YW50OyBcclxufVxyXG46aG9zdDo6bmctZGVlcC51aS5wcm9ncmVzcyNTIC5sYWJlbHtcclxuICAgIGNvbG9yOiMwMTcyM0IgIWltcG9ydGFudDsgXHJcbn1cclxuOmhvc3Q6Om5nLWRlZXAudWkucHJvZ3Jlc3MjRSAubGFiZWx7XHJcbiAgICBjb2xvcjojMDA3M0E1ICFpbXBvcnRhbnQ7IFxyXG59XHJcbjpob3N0OjpuZy1kZWVwLnVpLnByb2dyZXNzI0MgLmxhYmVse1xyXG4gICAgY29sb3I6IzkyNzlCNyAhaW1wb3J0YW50OyBcclxufVxyXG5cclxuXHJcblxyXG5cclxuOmhvc3Q6Om5nLWRlZXAudWkucHJvZ3Jlc3MjUiAuYmFye1xyXG4gICAgYmFja2dyb3VuZDojRjE0NjNDICFpbXBvcnRhbnQ7XHJcbn1cclxuOmhvc3Q6Om5nLWRlZXAudWkucHJvZ3Jlc3MjSSAuYmFye1xyXG4gICAgYmFja2dyb3VuZDojRjc5NTE3ICFpbXBvcnRhbnQ7IFxyXG59XHJcbjpob3N0OjpuZy1kZWVwLnVpLnByb2dyZXNzI0EgLmJhcntcclxuICAgIGJhY2tncm91bmQ6I0ZGQ0YwMCAhaW1wb3J0YW50OyBcclxufVxyXG46aG9zdDo6bmctZGVlcC51aS5wcm9ncmVzcyNTIC5iYXJ7XHJcbiAgICBiYWNrZ3JvdW5kOiMwMTcyM0IgIWltcG9ydGFudDsgXHJcbn1cclxuOmhvc3Q6Om5nLWRlZXAudWkucHJvZ3Jlc3MjRSAuYmFye1xyXG4gICAgYmFja2dyb3VuZDojMDA3M0E1ICFpbXBvcnRhbnQ7IFxyXG59XHJcbjpob3N0OjpuZy1kZWVwLnVpLnByb2dyZXNzI0MgLmJhcntcclxuICAgIGJhY2tncm91bmQ6IzkyNzlCNyAhaW1wb3J0YW50OyBcclxufVxyXG5cclxuLmNvZGUtcmF0ZXtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbi5pbWFnZS1pY29ue1xyXG4gICAgbWFyZ2luOjVweDtcclxufVxyXG5cclxuICN0cnkge1xyXG4gICAgLXdlYmtpdC1jbGlwLXBhdGg6IHBvbHlnb24oNTAlIDAlLCAxMDAlIDI1JSwgMTAwJSA3NSUsIDUwJSAxMDAlLCAwJSA3NSUsIDAlIDI1JSk7XHJcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oNTAlIDAlLCAxMDAlIDI1JSwgMTAwJSA3NSUsIDUwJSAxMDAlLCAwJSA3NSUsIDAlIDI1JSk7XHJcbiB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAuY29udGFpbmVyQm94IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG4uY2VudGVyLXRleHQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICB9XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/print-new/print-new.component.html":
/*!****************************************************!*\
  !*** ./src/app/print-new/print-new.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!isNewPrinting\">\n  <div class=\"ui top attached demo menu\">\n    <a class=\"item\" (click)=\"saydbar.toggle()\">\n      <i class=\"sidebar icon\"></i>\n    </a>\n    <div class=\"right menu\">\n      <div class=\"item\">\n        <div class=\"ui blue button\" (click)=\"logout()\">Logout</div>\n      </div>\n    </div>\n  </div>\n\n  <sui-sidebar-container class=\"ui bottom attached segment\">\n    <sui-sidebar class=\"vertical\" #saydbar>\n      <a class=\"item \" routerLink=\"/admin-home\">\n        Home\n      </a>\n      <a class=\"item\" routerLink=\"/takers-attendance\">\n        Attendance\n      </a>\n      <a class=\"item\" routerLink=\"/admin-graph-specific\">\n        Specific Reports\n      </a>\n      <a class=\"item\" routerLink=\"/admin-graph-general\">\n        General Reports\n      </a>\n      <a class=\"item active\" routerLink=\"/admin-new-print\">\n        Print Section\n      </a>\n      <a class=\"item\" routerLink=\"/admin-new-archive\">\n        Archive Section\n      </a>\n      <a class=\"item\" routerLink=\"/admin-settings\">\n        Accounts Settings\n      </a>\n      <a class=\"item\" routerLink=\"/admin-events\">\n        Events\n      </a>\n      <a class=\"item\" routerLink=\"/admin-messages\">\n        Messages\n      </a>\n    </sui-sidebar>\n\n    <sui-sidebar-sibling [isDimmedWhenVisible]=\"true\">\n\n      <div class=\"ui container\" style=\"margin-top:15px;height: 100%;\">\n\n        <h2 class=\"ui center aligned icon header\">\n          <i class=\"circular home icon\"></i>\n          Print Section\n\n          <div class=\"sub header\">This page is for handling unprinted self-directed-search result of every student</div>\n        </h2>\n\n        <div class=\"ui info message\">\n          <div class=\"header\">\n            Some of the action you can do in this section\n          </div>\n          <ul class=\"list\">\n            <li>You can use \"Print All\" button on the upper right of the page to print all of\n              unprinted\n              result(s)</li>\n            <li> You can also individually print this result(s) by clicking the \"View result\" button once the modal is\n              open\n              you will see the print button on the upper right corner of the modal</li>\n          </ul>\n        </div>\n\n        <div class=\"ui negative message\">\n          <div class=\"header\">\n            Caution:\n          </div>\n          <p>Once you click the print button the system will automatically remove this users and move it to the\n            archive\n            please proceed with caution <br>\n            If you there is an accident you can always go to the archive page to print it.\n          </p>\n        </div>\n\n        <div class=\"right\">\n          <button class=\"button ui disabled\" (click)=\"printAll()\" *ngIf=\"!isEmpty\">\n            Print All\n          </button>\n        </div>\n        <br>\n        <div class=\"ui input\" style=\"float:right\">\n          <input type=\"text\" placeholder=\"Search...\" (input)=\"onSearchChange($event.target.value)\">\n        </div>\n        <h2 class=\"ui red header center\" *ngIf=\"isEmpty\">No Result</h2>\n        <table class=\"ui celled table\" *ngIf=\"!isEmpty\">\n          <thead>\n            <tr>\n              <th>Name</th>\n              <th>Username</th>\n              <th>Actions</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let item of newResultData | paginate: { itemsPerPage: 10, currentPage: page } ; let i = index\">\n              <td>{{item.name}}</td>\n              <td>{{item.username}}</td>\n              <td>\n                <div class=\"center\">\n                  <button class=\"ui blue button\"\n                    (click)=\"viewSingleResult(item.id, item.name,item.summary_code,item.timestamp)\">\n                    View result\n                  </button>\n                </div>\n              </td>\n            </tr>\n          </tbody>\n          <tfoot>\n            <tr>\n              <th colspan=\"5\">\n                <div class=\"ui right floated pagination menu\">\n                  <a></a>\n                  <pagination-controls (pageChange)=\"page = $event\"></pagination-controls>\n                </div>\n              </th>\n            </tr>\n          </tfoot>\n        </table>\n      </div>\n\n\n    </sui-sidebar-sibling>\n  </sui-sidebar-container>\n\n\n\n</div>\n\n\n\n\n\n<!-- Print template section -->\n\n\n<div class=\"newPrint\" *ngIf=\"isNewPrinting\">\n  <div class=\"ui active dimmer\" *ngIf=\"loader\">\n    <div class=\"ui massive text loader\">Loading</div>\n  </div>\n  <div class=\"head\">\n    <div style=\"margin-bottom:10px;padding-right:20px;padding-left:20px;\">\n      <div id=\"logo_header\" class=\"ui\">\n        <img src=\"assets/images/gclogoprint.png\" class=\"ui mini left floated image\" alt=\"\">\n        <img src=\"assets/icons/riasec-logo.png\" class=\"ui mini right floated image\" alt=\"\">\n      </div>\n      <h4 class=\"center\" style=\"font-weight:bolder\">GORDON COLLEGE</h4>\n      <h4 class=\"center\" style=\"font-weight:bolder\">STUDENT WELFARE OFFICE</h4>\n      <p class=\"center\" style=\"font-weight:bold\">Tapinac Oval Sports Complex, East Tapinac, Olongapo City</p>\n\n    </div>\n  </div>\n\n  <div class=\"body\">\n\n    <div style=\"margin-left:20px; margin-right:20px;\">\n      <hr>\n      <div class=\"ui black\" id=\"message\">\n        {{singleResultName}}\n        <span style=\"float:right\">{{dateNow}}</span>\n      </div>\n    </div>\n    <h3 style=\"margin-top:0;margin-bottom:5px;\" class=\"center container\" id=\"print_header\">OFFICIAL RESULT</h3>\n    <div class=\"ui grid\" style=\"margin-left:20px; margin-right:20px;\">\n      <div class=\"eight wide column\">\n        <div class=\"ui segment\">\n          <div class=\"code-rate\" *ngFor=\"let letter of riasec;let i = index;\">\n            <img src=\"assets/icons/{{letter.letter}}_icon.png\" alt=\"\" class=\"ui centered mini image image-icon\">\n\n            <sui-progress id=\"{{letter.letter}}\" [value]=\"letter.value\" [maximum]=\"max[i]\">\n              {{letter.word}}\n\n            </sui-progress>\n          </div>\n\n\n        </div>\n      </div>\n      <div class=\"eight wide column\">\n        <div class=\"ui card\" style=\"width:100%;height:100%;\">\n          <div class=\"content\">\n\n            <h3 class=\"ui header center bolder\">My Summary Code</h3>\n            <div class=\"containerBox\">\n\n              <img src=\"assets/icons/riasec-logo.png\" class=\"img-summary\" alt=\"\" width=\"200\" height=\"200\">\n              <div class=\"center-text\">\n                <span *ngFor=\"let code of summaryCode\" style=\"font-weight:bolder;font-size:1.5em\"\n                  [ngStyle]=\"{'color': true ? getColor(code.letter) : ''}\">\n                  {{code.letter}}\n                </span>\n              </div>\n            </div>\n\n            <div *ngFor=\"let code of summaryCode\">\n              <div class=\"ui divider\"></div>\n              <img class=\"ui middle aligned tiny image\" src=\"assets/icons/{{code.letter}}_icon.png\">\n              <span style=\"font-weight: bolder; font-size:1.5em; margin-left: 10px;letter-spacing: 3px;\"\n                [ngStyle]=\"{'color': true ? getColor(code.letter) : ''}\">\n                {{code.word}}</span>\n            </div>\n\n\n\n\n\n            <div class=\"ui tiny message\">\n              <p style=\"font-style:italic\">Note: You can use your summary code to search all of the occupation(s)\n                available on your code\n                in https://www.onetonline.org/ </p>\n            </div>\n          </div>\n        </div>\n\n      </div>\n    </div>\n    <div style=\"margin-left:20px; margin-right:20px;margin-top:5px;\">\n      <div class=\"ui gray message\" id=\"message\" style=\"font-size:.8em;font-style: italic\">\n        Recommendation: {{recommendation}}\n      </div>\n      <br>\n      <div class=\"right\">\n        <div class=\"ui mini statistic\">\n          <div class=\"value\" style=\"font-size:.8em !important\">\n            {{psychometrician}}\n          </div>\n          <div class=\"label\" style=\"border-top:black solid 1px;font-size:.6em\">\n            Psychometrician\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n\n\n<!-- View single result modal -->\n<sui-modal [isClosable]=\"true\" (dismissed)=\"resultModal = false\" #resultModall *ngIf=\"resultModal && !isSinglePrinting\">\n  <div class=\"header\">\n    <div class=\"ui form\">\n      <div class=\"two fields\">\n        <div class=\"field\">\n          <label>Recommendation</label>\n          <textarea rows=\"2\" #recommendation maxlength=\"500\"></textarea>\n        </div>\n        <div class=\"field\">\n          <label>Psychometrician</label>\n          <input type=\"text\" name=\"psychometrician\" #psychometrician>\n        </div>\n      </div>\n    </div>\n    <div class=\"right\">\n      <button class=\"ui labeled icon button blue\"\n        (click)=\"printNewSingleResult(singleResultId,recommendation.value,psychometrician.value);\">\n        <i class=\"print icon\"></i>\n        Print\n      </button>\n    </div>\n  </div>\n  <div class=\"content\">\n\n    <div class=\"ui\" *ngIf=\"!noInfo\">\n      <div class=\"ui segment\" *ngFor=\"let code of singleResultData\">\n        <a class=\"ui red right ribbon label large\">{{code.name}}</a>\n        <div *ngFor=\"let indivCode of code.result\">\n          <div class=\"ui divided items\">\n            <div class=\"item\">\n              <div class=\"content\">\n                <a class=\"header\">{{indivCode.occupation}}</a>\n                <div class=\"description\">\n                  <p>{{indivCode.description}}</p>\n                </div>\n\n                <div class=\"extra\">\n                  <a href=\"{{indivCode.link}}\" class=\"ui right floated blue button\">\n                    See more details here\n                    <i class=\"right chevron icon\"></i>\n                  </a>\n                </div>\n\n                <hr>\n              </div>\n            </div>\n          </div>\n        </div>\n\n      </div>\n    </div>\n\n  </div>\n  <div class=\"actions\">\n    <button class=\"ui red button\" (click)=\"resultModall.deny()\">Close</button>\n  </div>\n\n</sui-modal>"

/***/ }),

/***/ "./src/app/print-new/print-new.component.ts":
/*!**************************************************!*\
  !*** ./src/app/print-new/print-new.component.ts ***!
  \**************************************************/
/*! exports provided: PrintNewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrintNewComponent", function() { return PrintNewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_admin_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/admin.service */ "./src/app/services/admin.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PrintNewComponent = /** @class */ (function () {
    function PrintNewComponent(adminService, router) {
        this.adminService = adminService;
        this.router = router;
        this.isSinglePrinting = false;
        this.isEmpty = false;
        this.resultModal = false;
        this.loader = false;
        this.isNewPrinting = false;
        this.riasec = Array.apply(null, Array());
        this.max = [55, 56, 56, 56, 56, 56];
        this.summaryCode = Array.apply(null, Array());
    }
    PrintNewComponent.prototype.ngOnInit = function () {
        this.getNewResult();
    };
    PrintNewComponent.prototype.onSearchChange = function (searchValue) {
        var _this = this;
        this.adminService.dynamicSearch("print-section-new", searchValue).subscribe(function (successData) {
            _this.newResultData = successData;
            // console.log(this.newResultData)
            if (successData.length > 0) {
                _this.isEmpty = false;
            }
            else {
                _this.isEmpty = true;
            }
        }, function (error) { return console.log(error); });
    };
    PrintNewComponent.prototype.getNewResult = function () {
        var _this = this;
        this.adminService.getNewResults().subscribe(function (successData) {
            _this.newResultData = successData;
            // console.log(this.newResultData)
            if (successData.length > 0) {
                _this.isEmpty = false;
            }
            else {
                _this.isEmpty = true;
            }
        }, function (error) { return console.log(error); });
    };
    PrintNewComponent.prototype.viewSingleResult = function (i, name, summary_code, timestamp) {
        var _this = this;
        // console.log(i)
        //Get Sds result
        this.adminService.getMySDS(i).subscribe(function (successData) {
            // console.log(successData);
            _this.dateNow = timestamp.split("T")[0];
            _this.singleResultData = successData;
            _this.singleResultName = name;
            _this.singleResultId = i;
            _this.singleResultCode = summary_code;
            //Open the modal
            _this.resultModal = true;
        }, function (error) { return console.log(error); });
    };
    PrintNewComponent.prototype.printNewSingleResult = function (i, recommendation, psychometrician) {
        var _this = this;
        if (recommendation != "" && psychometrician != "") {
            this.resultModal = false;
            this.isSinglePrinting = true;
            this.recommendation = recommendation;
            this.psychometrician = psychometrician;
            console.log(this.resultModal);
            console.log(this.isSinglePrinting);
            this.riasec = [];
            this.summaryCode = [];
            this.loader = true;
            this.isNewPrinting = true;
            setTimeout(function () {
                //Get RIASEC Result
                _this.adminService.getLetters(i).subscribe(function (successData) {
                    _this.riasec = successData.sort(function (a, b) { return b.value - a.value; });
                    // Get the summary code
                    for (var i_1 = 0; i_1 < 3; i_1++) {
                        _this.summaryCode.push(_this.riasec[i_1]);
                    }
                    _this.loader = false;
                    setTimeout(function () {
                        window.print();
                        _this.adminService.setSinglePrint(i).subscribe(function (successData) {
                            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()({
                                title: "Printed Sds result of " + _this.singleResultName,
                                type: "success"
                            });
                            _this.resultModal = false;
                            _this.getNewResult();
                        }, function (error) { return console.log(error); });
                    }, 500);
                    setTimeout(function () { return _this.isNewPrinting = false; }, 1000);
                    // console.log(this.summaryCode)
                }, function (error) { return console.log(error); });
            }, 200);
        }
        else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()({
                title: "Please fill all fields",
                type: "warning"
            });
        }
    };
    PrintNewComponent.prototype.logout = function () {
        localStorage.clear();
        this.router.navigate(["/admin-auth"]);
    };
    PrintNewComponent.prototype.getColor = function (letter) {
        if (letter == "R") {
            return "#F1463C";
        }
        else if (letter == "I") {
            return "#F79517";
        }
        else if (letter == "A") {
            return "#FFCF00";
        }
        else if (letter == "S") {
            return "#01723B";
        }
        else if (letter == "E") {
            return "#0073A5";
        }
        else {
            return "#9279B7";
        }
    };
    PrintNewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-print-new',
            template: __webpack_require__(/*! ./print-new.component.html */ "./src/app/print-new/print-new.component.html"),
            styles: [__webpack_require__(/*! ./print-new.component.css */ "./src/app/print-new/print-new.component.css")]
        }),
        __metadata("design:paramtypes", [_services_admin_service__WEBPACK_IMPORTED_MODULE_1__["AdminService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], PrintNewComponent);
    return PrintNewComponent;
}());



/***/ }),

/***/ "./src/app/print-old/print-old.component.css":
/*!***************************************************!*\
  !*** ./src/app/print-old/print-old.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url('https://fonts.googleapis.com/css?family=Staatliches');\r\nh4,h5{\r\n    margin:0;\r\n    font-family: 'Staatliches', cursive;\r\n}\r\nh3{\r\n    margin: 0 0 0 0;\r\n    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\r\n}\r\n.printContent{\r\n    width:940px;\r\n    height:100vh;\r\n    page-break-inside:avoid !important;\r\n}\r\n@media print {\r\n    * { margin: 1px !important;  }\r\n    html, body {\r\n      /*changing width to 100% causes huge overflow and wrap*/\r\n      height:100%; \r\n      overflow: hidden;\r\n      background: #FFF; \r\n      font-size: 9pt;\r\n    }\r\n    table{\r\n        page-break-inside: avoid;\r\n    }\r\n    \r\n  \r\n    .template { width: auto; left:0; top:0; }\r\n\r\n  }\r\n.onepage {\r\n    page-break-after: always;\r\n  }\r\n.onepage:last-child {\r\n    page-break-after: avoid;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJpbnQtb2xkL3ByaW50LW9sZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG1FQUFtRTtBQUNuRTtJQUNJLFNBQVM7SUFDVCxvQ0FBb0M7Q0FDdkM7QUFDRDtJQUNJLGdCQUFnQjtJQUNoQix1SEFBdUg7Q0FDMUg7QUFDRDtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUNBQW1DO0NBQ3RDO0FBSUQ7SUFDSSxJQUFJLHVCQUF1QixHQUFHO0lBQzlCO01BQ0Usd0RBQXdEO01BQ3hELFlBQVk7TUFDWixpQkFBaUI7TUFDakIsaUJBQWlCO01BQ2pCLGVBQWU7S0FDaEI7SUFDRDtRQUNJLHlCQUF5QjtLQUM1Qjs7O0lBR0QsWUFBWSxZQUFZLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRTs7R0FFMUM7QUFFRDtJQUNFLHlCQUF5QjtHQUMxQjtBQUVEO0lBQ0Usd0JBQXdCO0dBQ3pCIiwiZmlsZSI6InNyYy9hcHAvcHJpbnQtb2xkL3ByaW50LW9sZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1TdGFhdGxpY2hlcycpO1xyXG5oNCxoNXtcclxuICAgIG1hcmdpbjowO1xyXG4gICAgZm9udC1mYW1pbHk6ICdTdGFhdGxpY2hlcycsIGN1cnNpdmU7XHJcbn1cclxuaDN7XHJcbiAgICBtYXJnaW46IDAgMCAwIDA7XHJcbiAgICBmb250LWZhbWlseTogJ0x1Y2lkYSBTYW5zJywgJ0x1Y2lkYSBTYW5zIFJlZ3VsYXInLCAnTHVjaWRhIEdyYW5kZScsICdMdWNpZGEgU2FucyBVbmljb2RlJywgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xyXG59XHJcbi5wcmludENvbnRlbnR7XHJcbiAgICB3aWR0aDo5NDBweDtcclxuICAgIGhlaWdodDoxMDB2aDtcclxuICAgIHBhZ2UtYnJlYWstaW5zaWRlOmF2b2lkICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG5cclxuQG1lZGlhIHByaW50IHtcclxuICAgICogeyBtYXJnaW46IDFweCAhaW1wb3J0YW50OyAgfVxyXG4gICAgaHRtbCwgYm9keSB7XHJcbiAgICAgIC8qY2hhbmdpbmcgd2lkdGggdG8gMTAwJSBjYXVzZXMgaHVnZSBvdmVyZmxvdyBhbmQgd3JhcCovXHJcbiAgICAgIGhlaWdodDoxMDAlOyBcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgYmFja2dyb3VuZDogI0ZGRjsgXHJcbiAgICAgIGZvbnQtc2l6ZTogOXB0O1xyXG4gICAgfVxyXG4gICAgdGFibGV7XHJcbiAgICAgICAgcGFnZS1icmVhay1pbnNpZGU6IGF2b2lkO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgXHJcbiAgICAudGVtcGxhdGUgeyB3aWR0aDogYXV0bzsgbGVmdDowOyB0b3A6MDsgfVxyXG5cclxuICB9XHJcblxyXG4gIC5vbmVwYWdlIHtcclxuICAgIHBhZ2UtYnJlYWstYWZ0ZXI6IGFsd2F5cztcclxuICB9XHJcbiAgXHJcbiAgLm9uZXBhZ2U6bGFzdC1jaGlsZCB7XHJcbiAgICBwYWdlLWJyZWFrLWFmdGVyOiBhdm9pZDtcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/print-old/print-old.component.html":
/*!****************************************************!*\
  !*** ./src/app/print-old/print-old.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!isSinglePrinting && !isAllPrinting\">\n  <div class=\"ui top attached demo menu\">\n    <a class=\"item\" (click)=\"saydbar.toggle()\">\n      <i class=\"sidebar icon\"></i>\n    </a>\n    <div class=\"right menu\">\n      <div class=\"item\">\n        <div class=\"ui blue button\" (click)=\"logout()\">Logout</div>\n      </div>\n    </div>\n  </div>\n\n  <sui-sidebar-container class=\"ui bottom attached segment\">\n    <sui-sidebar class=\"vertical\" #saydbar>\n      <a class=\"item\" routerLink=\"/admin/home\">\n        Home\n      </a>\n      <a class=\"item\" routerLink=\"/admin/graph/specific\">\n        Specific Reports\n      </a>\n      <a class=\"item\" routerLink=\"/admin/graph/general\">\n        General Reports\n      </a>\n      <a class=\"item active\" routerLink=\"/admin/old-print\">\n        Print Section\n        <div class=\"ui grey horizontal label\">Old</div>\n      </a>\n      <a class=\"item\" routerLink=\"/admin/old-archive\">\n        Archive Section\n        <div class=\"ui grey horizontal label\">Old</div>\n      </a>\n      <a class=\"item\" routerLink=\"/admin/print\">\n        Print Section\n        <div class=\"ui grey horizontal label\">New</div>\n      </a>\n      <a class=\"item\" routerLink=\"/admin/new-print\">\n        Print Section\n        <div class=\"ui red horizontal label\">New</div>\n      </a>\n      <a class=\"item\" routerLink=\"/admin/archive\">\n        Archive Section\n        <div class=\"ui grey horizontal label\">New</div>\n      </a>\n      <a class=\"item\" routerLink=\"/admin/new-archive\">\n        Archive Section\n        <div class=\"ui red horizontal label\">New</div>\n      </a>\n      <a class=\"item\" routerLink=\"/admin/settings\">\n        Accounts Settings\n      </a>\n    </sui-sidebar>\n\n    <sui-sidebar-sibling [isDimmedWhenVisible]=\"true\">\n\n      <div class=\"ui container\" style=\"margin-top:15px;height: 100%;\">\n\n        <h2 class=\"ui center aligned icon header\">\n          <i class=\"circular home icon\"></i>\n          Print Section\n\n          <div class=\"sub header\">This page is for handling unprinted self-directed-search result of every student</div>\n        </h2>\n\n        <div class=\"ui info message\">\n          <div class=\"header\">\n            Some of the action you can do in this section\n          </div>\n          <ul class=\"list\">\n            <li>You can use \"Print All\" button on the upper right of the page to print all of\n              unprinted\n              result(s)</li>\n            <li> You can also individually print this result(s) by clicking the \"View result\" button once the modal is\n              open\n              you will see the print button on the upper right corner of the modal</li>\n          </ul>\n        </div>\n\n        <div class=\"ui negative message\">\n          <div class=\"header\">\n            Caution:\n          </div>\n          <p>Once you click the print button the system will automatically remove this users and move it to the\n            archive\n            please proceed with caution <br>\n            If you there is an accident you can always go to the archive page to print it.\n          </p>\n        </div>\n\n        <br>\n        <div class=\"ui input\" style=\"float:right\">\n          <input type=\"text\" placeholder=\"Search...\" (input)=\"onSearchChange($event.target.value)\">\n        </div>\n        <table class=\"ui celled table\">\n          <thead>\n            <tr>\n              <th>Name</th>\n              <th>Username</th>\n              <th>Actions</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let item of newResultData | paginate: { itemsPerPage: 10, currentPage: page } ; let i = index\">\n              <td>{{item.name}}</td>\n              <td>{{item.username}}</td>\n              <td>\n                <div class=\"center\">\n                  <button class=\"ui blue button\" (click)=\"viewSingleResult(item.id, item.name)\">\n                    View result\n                  </button>\n                </div>\n              </td>\n            </tr>\n          </tbody>\n          <tfoot>\n            <tr>\n              <th colspan=\"5\">\n                <div class=\"ui right floated pagination menu\">\n                  <a></a>\n                  <pagination-controls (pageChange)=\"page = $event\"></pagination-controls>\n                </div>\n              </th>\n            </tr>\n          </tfoot>\n        </table>\n      </div>\n\n\n    </sui-sidebar-sibling>\n  </sui-sidebar-container>\n\n\n\n  <!-- View single result modal -->\n  <sui-modal [isClosable]=\"true\" (dismissed)=\"resultModal = false\" #resultModall *ngIf=\"resultModal && !isSinglePrinting\">\n\n    <div class=\"header\">\n      <div class=\"right\">\n        <button class=\"ui labeled icon button blue\" (click)=\"resultModall.deny();printSingleResult(singleResultId);\">\n          <i class=\"print icon\"></i>\n          Print\n        </button>\n      </div>\n    </div>\n    <div class=\"content\">\n\n      <div class=\"ui\" *ngIf=\"!noInfo\">\n        <div class=\"ui segment\" *ngFor=\"let code of singleResultData\">\n          <a class=\"ui red right ribbon label large\">{{code.name}}</a>\n          <div *ngFor=\"let indivCode of code.result\">\n            <div class=\"ui divided items\">\n              <div class=\"item\">\n                <div class=\"content\">\n                  <a class=\"header\">{{indivCode.occupation}}</a>\n                  <div class=\"description\">\n                    <p>{{indivCode.description}}</p>\n                  </div>\n\n                  <div class=\"extra\">\n                    <a href=\"{{indivCode.link}}\" class=\"ui right floated blue button\">\n                      See more details here\n                      <i class=\"right chevron icon\"></i>\n                    </a>\n                  </div>\n\n                  <hr>\n                </div>\n              </div>\n            </div>\n          </div>\n\n        </div>\n      </div>\n\n    </div>\n    <div class=\"actions\">\n      <button class=\"ui red button\" (click)=\"resultModall.deny()\">Close</button>\n    </div>\n\n  </sui-modal>\n</div>\n\n\n<!-- Print template section -->\n\n\n<!-- Single Print -->\n<div *ngIf=\"isSinglePrinting\" class=\"printContent\">\n  <div class=\"ui active dimmer\" *ngIf=\"loader\">\n    <div class=\"ui massive text loader\">Loading</div>\n  </div>\n  <div class=\"ui container\">\n    <div class=\"center\">\n      <img src=\"assets/images/gclogoprint.png\" alt=\"\" width=\"48\" height=\"48\">\n    </div>\n    <h5 class=\"center\" style=\"letter-spacing:0.2em;font-weight: bold;color:grey;\">OFFICIAL RESULT</h5>\n    <p class=\"center\" style=\"font-weight:600;\">City of Olongapo</p>\n    <h4 class=\"center\" style=\"font-weight:bolder\">GORDON COLLEGE</h4>\n    <h4 class=\"center\" style=\"font-weight:bolder\">STUDENT WELFARE OFFICE</h4>\n\n    <hr>\n\n    <span style=\"float:right;font: weight 600;\">{{dateNow}}</span>\n    <h2 style=\"font-weight:bolder;\">{{singleResultName}}</h2>\n    <hr>\n\n    <div class=\"ui card template\" *ngFor=\"let item of singleResultData\" style=\"width:100%\">\n      <!-- Header -->\n      <div class=\"content\">\n        <div class=\"header\">[{{item.name}}]</div>\n      </div>\n      <!-- Body -->\n      <div class=\"content data-content\">\n        <table class=\"ui celled table\">\n          <thead>\n            <tr>\n              <th class=\"center\">Occupation</th>\n              <th class=\"center\">Description</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let itemRes of item.result\">\n              <td>{{itemRes.occupation}}</td>\n              <td>{{itemRes.description}}</td>\n            </tr>\n          </tbody>\n        </table>\n\n      </div>\n    </div>\n\n  </div>\n</div>\n\n\n\n<!-- All Student Print -->\n\n<div *ngIf=\"isAllPrinting\">\n  <div class=\"ui active dimmer\" *ngIf=\"loader\">\n    <div class=\"ui massive text loader\">Loading</div>\n  </div>\n\n  <div class=\"onepage\" *ngFor=\"let item of newResultData\">\n    <div class=\"ui container \">\n\n\n      <div class=\"center\">\n        <img src=\"assets/images/gclogoprint.png\" alt=\"\" width=\"48\" height=\"48\">\n      </div>\n      <h5 class=\"center\" style=\"letter-spacing:0.2em;font-weight: bold;color:grey;\">OFFICIAL RESULT</h5>\n      <p class=\"center\" style=\"font-weight:600;\">City of Olongapo</p>\n      <h4 class=\"center\" style=\"font-weight:bolder\">GORDON COLLEGE</h4>\n      <h4 class=\"center\" style=\"font-weight:bolder\">STUDENT WELFARE OFFICE</h4>\n\n      <hr>\n\n      <span style=\"float:right;font: weight 600;\">{{dateNow}}</span>\n      <h2 style=\"font-weight:bolder;\">{{item.info.name}}</h2>\n\n\n\n\n      <div class=\"ui card template\" *ngFor=\"let indiv of item.data\" style=\"width:100%\">\n        <!-- Header -->\n        <div class=\"content\">\n          <div class=\"header\">[{{indiv.name}}]</div>\n        </div>\n        <!-- Body -->\n        <div class=\"content data-content\">\n          <table class=\"ui celled table\">\n            <thead>\n              <tr>\n                <th class=\"center\">Occupation</th>\n                <th class=\"center\">Description</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let itemRes of indiv.result\">\n                <td>{{itemRes.occupation}}</td>\n                <td>{{itemRes.description}}</td>\n              </tr>\n            </tbody>\n          </table>\n\n        </div>\n      </div>\n\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/print-old/print-old.component.ts":
/*!**************************************************!*\
  !*** ./src/app/print-old/print-old.component.ts ***!
  \**************************************************/
/*! exports provided: PrintOldComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrintOldComponent", function() { return PrintOldComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_admin_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/admin.service */ "./src/app/services/admin.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
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




var PrintOldComponent = /** @class */ (function () {
    function PrintOldComponent(adminService, router) {
        this.adminService = adminService;
        this.router = router;
        this.page = 1;
        this.loader = false;
        this.dateNow = new Date().toLocaleDateString();
        this.isSinglePrinting = false;
        this.isAllPrinting = false;
        this.isEmpty = false;
        this.singleResultId = 0;
        this.resultModal = false;
    }
    PrintOldComponent.prototype.ngOnInit = function () {
        this.getNewResult();
    };
    PrintOldComponent.prototype.onSearchChange = function (searchValue) {
        var _this = this;
        this.adminService.dynamicSearch("original-print", searchValue).subscribe(function (successData) {
            _this.newResultData = successData;
            console.log(_this.newResultData);
            if (successData.length > 0) {
                _this.isEmpty = false;
            }
            else {
                _this.isEmpty = true;
            }
        }, function (error) { return console.log(error); });
    };
    PrintOldComponent.prototype.getNewResult = function () {
        var _this = this;
        this.adminService.getOldPrintResults().subscribe(function (successData) {
            _this.newResultData = successData;
            console.log(_this.newResultData);
        }, function (error) { return console.log(error); });
    };
    PrintOldComponent.prototype.viewSingleResult = function (i, name) {
        var _this = this;
        console.log(i);
        //Get Sds result
        this.adminService.getMySDS(i).subscribe(function (successData) {
            console.log(successData);
            _this.singleResultData = successData;
            _this.singleResultName = name;
            _this.singleResultId = i;
            //Open the modal
            _this.resultModal = true;
        }, function (error) { return console.log(error); });
    };
    PrintOldComponent.prototype.printSingleResult = function (i) {
        var _this = this;
        this.loader = true;
        this.isSinglePrinting = true;
        setTimeout(function (_) { return _this.loader = false; }, 900);
        setTimeout(function (_) {
            window.print();
            _this.adminService.setSinglePrint(i).subscribe(function (successData) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default()({
                    title: "Printed Sds result of " + _this.singleResultName,
                    type: "success"
                });
                _this.getNewResult();
            }, function (error) { return console.log(error); });
            _this.isSinglePrinting = false;
            _this.resultModal = false;
        }, 1000);
    };
    PrintOldComponent.prototype.printAll = function () {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default()({
            title: 'Are you sure?',
            text: "All of this users will be moved on archive",
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, print it!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: false
        }).then(function (result) {
            if (result.value) {
                _this.loader = true;
                _this.isAllPrinting = true;
                setTimeout(function (_) { return _this.loader = false; }, 900);
                setTimeout(function (_) {
                    window.print();
                    _this.adminService.setAllPrint().subscribe(function (successData) {
                        _this.getNewResult();
                    }, function (error) { return console.log(error); });
                    _this.isAllPrinting = false;
                }, 1000);
            }
            else if (result.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.DismissReason.cancel) {
            }
        });
    };
    PrintOldComponent.prototype.logout = function () {
        localStorage.clear();
        this.router.navigate(["/admin/auth"]);
    };
    PrintOldComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-print-old',
            template: __webpack_require__(/*! ./print-old.component.html */ "./src/app/print-old/print-old.component.html"),
            styles: [__webpack_require__(/*! ./print-old.component.css */ "./src/app/print-old/print-old.component.css")]
        }),
        __metadata("design:paramtypes", [_services_admin_service__WEBPACK_IMPORTED_MODULE_1__["AdminService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], PrintOldComponent);
    return PrintOldComponent;
}());



/***/ }),

/***/ "./src/app/privacy-policy/privacy-policy.component.css":
/*!*************************************************************!*\
  !*** ./src/app/privacy-policy/privacy-policy.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ByaXZhY3ktcG9saWN5L3ByaXZhY3ktcG9saWN5LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/privacy-policy/privacy-policy.component.html":
/*!**************************************************************!*\
  !*** ./src/app/privacy-policy/privacy-policy.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Privacy Policy</h1>\n\n\n<p>Effective date: May 18, 2019</p>\n\n\n<p>GC Career Guidance App (\"us\", \"we\", or \"our\") operates the http://sds.gordoncollegeccs-ssite.net/ website and the GC\n  Career Guidance App mobile application (the \"Service\").</p>\n\n<p>This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our\n  Service and the choices you have associated with that data. </p>\n\n<p>We use your data to provide and improve the Service. By using the Service, you agree to the collection and use of\n  information in accordance with this policy. Unless otherwise defined in this Privacy Policy, terms used in this\n  Privacy Policy have the same meanings as in our Terms and Conditions.</p>\n\n\n<h2>Information Collection And Use</h2>\n\n<p>We collect several different types of information for various purposes to provide and improve our Service to you.</p>\n\n<h3>Types of Data Collected</h3>\n\n<h4>Personal Data</h4>\n\n<p>While using our Service, we may ask you to provide us with certain personally identifiable information that can be\n  used to contact or identify you (\"Personal Data\"). Personally identifiable information may include, but is not limited\n  to:</p>\n\n<ul>\n  <li>First name and last name</li>\n  <li>Phone number</li>\n  <li>Address, State, Province, ZIP/Postal code, City</li>\n  <li>Cookies and Usage Data</li>\n</ul>\n\n<h4>Usage Data</h4>\n\n<p>We may also collect information that your browser sends whenever you visit our Service or when you access the Service\n  by or through a mobile device (\"Usage Data\").</p>\n<p>This Usage Data may include information such as your computer's Internet Protocol address (e.g. IP address), browser\n  type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on\n  those pages, unique device identifiers and other diagnostic data.</p>\n<p>When you access the Service by or through a mobile device, this Usage Data may include information such as the type\n  of mobile device you use, your mobile device unique ID, the IP address of your mobile device, your mobile operating\n  system, the type of mobile Internet browser you use, unique device identifiers and other diagnostic data.</p>\n\n<h4>Tracking & Cookies Data</h4>\n<p>We use cookies and similar tracking technologies to track the activity on our Service and hold certain information.\n</p>\n<p>Cookies are files with small amount of data which may include an anonymous unique identifier. Cookies are sent to\n  your browser from a website and stored on your device. Tracking technologies also used are beacons, tags, and scripts\n  to collect and track information and to improve and analyze our Service.</p>\n<p>You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do\n  not accept cookies, you may not be able to use some portions of our Service.</p>\n<p>Examples of Cookies we use:</p>\n<ul>\n  <li><strong>Session Cookies.</strong> We use Session Cookies to operate our Service.</li>\n  <li><strong>Preference Cookies.</strong> We use Preference Cookies to remember your preferences and various settings.\n  </li>\n  <li><strong>Security Cookies.</strong> We use Security Cookies for security purposes.</li>\n</ul>\n\n<h2>Use of Data</h2>\n\n<p>GC Career Guidance App uses the collected data for various purposes:</p>\n<ul>\n  <li>To provide and maintain the Service</li>\n  <li>To notify you about changes to our Service</li>\n  <li>To allow you to participate in interactive features of our Service when you choose to do so</li>\n  <li>To provide customer care and support</li>\n  <li>To provide analysis or valuable information so that we can improve the Service</li>\n  <li>To monitor the usage of the Service</li>\n  <li>To detect, prevent and address technical issues</li>\n</ul>\n\n<h2>Transfer Of Data</h2>\n<p>Your information, including Personal Data, may be transferred to — and maintained on — computers located outside of\n  your state, province, country or other governmental jurisdiction where the data protection laws may differ than those\n  from your jurisdiction.</p>\n<p>If you are located outside Philippines and choose to provide information to us, please note that we transfer the\n  data, including Personal Data, to Philippines and process it there.</p>\n<p>Your consent to this Privacy Policy followed by your submission of such information represents your agreement to that\n  transfer.</p>\n<p>GC Career Guidance App will take all steps reasonably necessary to ensure that your data is treated securely and in\n  accordance with this Privacy Policy and no transfer of your Personal Data will take place to an organization or a\n  country unless there are adequate controls in place including the security of your data and other personal\n  information.</p>\n\n<h2>Disclosure Of Data</h2>\n\n<h3>Legal Requirements</h3>\n<p>GC Career Guidance App may disclose your Personal Data in the good faith belief that such action is necessary to:</p>\n<ul>\n  <li>To comply with a legal obligation</li>\n  <li>To protect and defend the rights or property of GC Career Guidance App</li>\n  <li>To prevent or investigate possible wrongdoing in connection with the Service</li>\n  <li>To protect the personal safety of users of the Service or the public</li>\n  <li>To protect against legal liability</li>\n</ul>\n\n<h2>Security Of Data</h2>\n<p>The security of your data is important to us, but remember that no method of transmission over the Internet, or\n  method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your\n  Personal Data, we cannot guarantee its absolute security.</p>\n\n<h2>Service Providers</h2>\n<p>We may employ third party companies and individuals to facilitate our Service (\"Service Providers\"), to provide the\n  Service on our behalf, to perform Service-related services or to assist us in analyzing how our Service is used.</p>\n<p>These third parties have access to your Personal Data only to perform these tasks on our behalf and are obligated not\n  to disclose or use it for any other purpose.</p>\n\n\n\n<h2>Links To Other Sites</h2>\n<p>Our Service may contain links to other sites that are not operated by us. If you click on a third party link, you\n  will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every site you\n  visit.</p>\n<p>We have no control over and assume no responsibility for the content, privacy policies or practices of any third\n  party sites or services.</p>\n\n\n<h2>Children's Privacy</h2>\n<p>Our Service does not address anyone under the age of 18 (\"Children\").</p>\n<p>We do not knowingly collect personally identifiable information from anyone under the age of 18. If you are a parent\n  or guardian and you are aware that your Children has provided us with Personal Data, please contact us. If we become\n  aware that we have collected Personal Data from children without verification of parental consent, we take steps to\n  remove that information from our servers.</p>\n\n\n<h2>Changes To This Privacy Policy</h2>\n<p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy\n  Policy on this page.</p>\n<p>We will let you know via email and/or a prominent notice on our Service, prior to the change becoming effective and\n  update the \"effective date\" at the top of this Privacy Policy.</p>\n<p>You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are\n  effective when they are posted on this page.</p>\n\n\n<h2>Contact Us</h2>\n<p>If you have any questions about this Privacy Policy, please contact us:</p>\n<ul>\n  <li>By email: gccareerguidanceapp123@gmail.com</li>\n\n</ul>"

/***/ }),

/***/ "./src/app/privacy-policy/privacy-policy.component.ts":
/*!************************************************************!*\
  !*** ./src/app/privacy-policy/privacy-policy.component.ts ***!
  \************************************************************/
/*! exports provided: PrivacyPolicyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivacyPolicyComponent", function() { return PrivacyPolicyComponent; });
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

var PrivacyPolicyComponent = /** @class */ (function () {
    function PrivacyPolicyComponent() {
    }
    PrivacyPolicyComponent.prototype.ngOnInit = function () {
    };
    PrivacyPolicyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-privacy-policy',
            template: __webpack_require__(/*! ./privacy-policy.component.html */ "./src/app/privacy-policy/privacy-policy.component.html"),
            styles: [__webpack_require__(/*! ./privacy-policy.component.css */ "./src/app/privacy-policy/privacy-policy.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PrivacyPolicyComponent);
    return PrivacyPolicyComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.css":
/*!***********************************************!*\
  !*** ./src/app/profile/profile.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/profile/profile.component.html":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n\r\n<br>\r\n\r\n\r\n<div class=\"ui container\">\r\n\r\n    <h1 class=\"ui header bolder primary underlined\">Profile Page</h1>\r\n    <div class=\"ui breadcrumb\">\r\n        <a class=\"section\" routerLink=\"/\">Home</a>\r\n        <i class=\"right arrow icon divider\"></i>\r\n        <div class=\"active section\">Profile</div>\r\n    </div>\r\n    <h2 class=\"ui header bolder\">Good day, <span class=\"primary\">{{userInfo.name}}</span></h2>\r\n\r\n    <hr>\r\n</div>\r\n\r\n<br>\r\n<div class=\"ui one column grid container padding\">\r\n\r\n    <div class=\"column\">\r\n        <h2 class=\"ui header center primary bolder\" *ngIf=\"emptyResult\">Self Directed Search still not taken</h2>\r\n        <div class=\"ui card\" style=\"width:100%\" *ngIf=\"!emptyResult\">\r\n            <div class=\"content\">\r\n                <h2 class=\"ui icon header center aligned\">\r\n                    <i class=\"briefcase icon\"></i>\r\n                    <div class=\"content\">\r\n                        SDS Result\r\n                        <div class=\"sub header\">Career Assestment Result</div>\r\n                    </div>\r\n                </h2>\r\n            </div>\r\n            <div class=\"content\">\r\n                <div class=\"ui grid \">\r\n                    <div class=\"ui segment sixteen wide column \" *ngFor=\"let code of codes;let i = index;\" style=\"margin:20px;\">\r\n                        <a class=\"ui right ribbon label large\" style=\"color:ghostwhite\" [ngStyle]=\"{'background-color': true ? colors[i]: ''}\">{{code.name}}</a>\r\n                        <div *ngFor=\"let indivCode of code.result\">\r\n                            <div class=\"ui divided items\">\r\n                                <div class=\"item\">\r\n                                    <div class=\"content\">\r\n                                        <a class=\"header\">{{indivCode.occupation}}</a>\r\n                                        <div class=\"description\">\r\n                                            <p>{{indivCode.description}}</p>\r\n                                        </div>\r\n\r\n                                        <div class=\"extra\">\r\n                                            <a href=\"{{indivCode.link}}\" class=\"ui right floated blue button\">\r\n                                                See more details here\r\n                                                <i class=\"right chevron icon\"></i>\r\n                                            </a>\r\n                                        </div>\r\n\r\n                                        <hr>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_profile_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/profile.service */ "./src/app/services/profile.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(authService, profileService, router, userService) {
        this.authService = authService;
        this.profileService = profileService;
        this.router = router;
        this.userService = userService;
        this.emptyResult = true;
        this.userInfo = {
            name: "",
            username: "",
            id: 0,
            iat: 0,
            exp: 0
        };
        this.colors = [];
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        //Check SDS Result
        this.userService.checkSdsStatus().subscribe(function (successData) {
            if (successData.length == 0) {
                _this.emptyResult = true;
            }
            else {
                _this.emptyResult = false;
            }
        }, function (error) { return console.log(error); });
        //Check SDS Result
        //Check session
        this.authService.checkSession().subscribe(function (successData) {
            _this.userInfo = successData;
            _this.userInfo.name = _this.capitalizeFirstLetter(_this.userInfo.name);
            // console.log(this.userInfo)
        }, function (error) {
            _this.router.navigate(["/"]);
            console.log(error);
        });
        //Get user code information
        this.profileService.getMyCode().subscribe(function (successData) {
            _this.codes = successData;
            // console.log(this.codes.length)
            for (var i = 0; i < _this.codes.length; i++) {
                _this.colors.push(_this.randColor());
            }
        }, function (error) {
            console.log(error);
        });
    };
    ProfileComponent.prototype.capitalizeFirstLetter = function (string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };
    ProfileComponent.prototype.randColor = function () {
        var mycolors = ["red", "orange",
            "olive", "green", "teal", "blue", "violet", "purple", "pink", "brown", "grey",];
        return mycolors[Math.floor((Math.random() * mycolors.length) + 0)];
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _services_profile_service__WEBPACK_IMPORTED_MODULE_2__["ProfileService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/question/question.component.css":
/*!*************************************************!*\
  !*** ./src/app/question/question.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "li.questions p {\r\n    display:inline;\r\n    \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcXVlc3Rpb24vcXVlc3Rpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7O0NBRWxCIiwiZmlsZSI6InNyYy9hcHAvcXVlc3Rpb24vcXVlc3Rpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImxpLnF1ZXN0aW9ucyBwIHtcclxuICAgIGRpc3BsYXk6aW5saW5lO1xyXG4gICAgXHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/question/question.component.html":
/*!**************************************************!*\
  !*** ./src/app/question/question.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Header -->\r\n<app-header></app-header>\r\n\r\n<!-- Header -->\r\n<br>\r\n<div class=\"ui container\">\r\n\r\n\r\n    <h2 class=\"ui icon header center aligned primary\">\r\n\r\n        <img src=\"{{currentLogo}}\" class=\"ui image\">\r\n        <div class=\"content\" [ngStyle]=\"{'color': currentColor}\">\r\n            {{title}}\r\n            <div class=\"sub header\">{{label_true}}: {{currentLike}}</div>\r\n        </div>\r\n    </h2>\r\n    <sui-progress autoSuccess=\"true\" [value]=\"value\" [maximum]=\"maximum\" class=\"indicating\">\r\n        Progress\r\n    </sui-progress>\r\n    <div class=\"ui info message\">\r\n        <div class=\"header\">\r\n            Instruction:\r\n        </div>\r\n        <ul class=\"list\">\r\n            <li>{{instruction.first}}</li>\r\n            <li>{{instruction.second}}</li>\r\n        </ul>\r\n    </div>\r\n    <div class=\"ui breadcrumb\">\r\n        <a class=\"section\" routerLink=\"/\">Home</a>\r\n        <i class=\"right arrow icon divider\"></i>\r\n        <div class=\"active section\">Questions</div>\r\n    </div>\r\n    <hr>\r\n</div>\r\n\r\n\r\n<br>\r\n\r\n\r\n<div class=\"ui grid container\">\r\n    <div class=\"eighteen wide column\">\r\n\r\n\r\n\r\n\r\n\r\n\r\n        <table class=\"ui celled selectable table\">\r\n            <thead>\r\n                <tr>\r\n                    <th>Questions</th>\r\n                    <th>Action</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let question of currentQuestion;let i = index\">\r\n                    <td class=\"primary bolder\" style=\"font-size:1.2rem;\">{{question.qst}}</td>\r\n                    <td>\r\n                        <div class=\"ui form\">\r\n                            <div class=\"inline fields\">\r\n                                <div class=\"field\">\r\n                                    <div class=\"ui radio checkbox\">\r\n                                        <input type=\"radio\" name=\"{{question.qst}}\" (click)=\"like(i)\">\r\n                                        <label style=\"font-size:1.1rem;font-weight: 600\">{{label_true}}</label>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"field\">\r\n                                    <div class=\"ui radio checkbox\">\r\n                                        <input type=\"radio\" name=\"{{question.qst}}\" (click)=\"dislike(i)\">\r\n                                        <label style=\"font-size:1.1rem;font-weight: 600\">{{label_false}}</label>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </td>\r\n                </tr>\r\n\r\n            </tbody>\r\n\r\n        </table>\r\n        <button class=\"ui right floated blue button \" (click)=\"change()\">\r\n            Submit\r\n        </button>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"ui dimmer\" [ngClass]=\"{'active': loader}\">\r\n    <div class=\"ui loader\"></div>\r\n</div>"

/***/ }),

/***/ "./src/app/question/question.component.ts":
/*!************************************************!*\
  !*** ./src/app/question/question.component.ts ***!
  \************************************************/
/*! exports provided: QuestionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionComponent", function() { return QuestionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var QuestionComponent = /** @class */ (function () {
    function QuestionComponent(data, router, authService) {
        this.data = data;
        this.router = router;
        this.authService = authService;
        this.instruction = {
            first: "Check the Like box for those activities you would like to do.",
            second: "Check the Dislike box for those activities you would dislike doing or would be indifferent to."
        };
        this.value = 0;
        this.maximum = 100;
        this.view = true;
        this.loader = false;
        this.label_true = "Like";
        this.label_false = "Dislike";
        this.titles = [
            "Activities(Realistic)",
            "Activities(Investigative)",
            "Activities(Artistic)",
            "Activities(Social)",
            "Activities(Enterprising)",
            "Activities(Conventional)",
            "Competencies(Realistic)",
            "Competencies(Investigative)",
            "Competencies(Artistic)",
            "Competencies(Social)",
            "Competencies(Enterprising)",
            "Competencies(Conventional)",
            "Occupations(Realistic)",
            "Occupations(Investigative)",
            "Occupations(Artistic)",
            "Occupations(Social)",
            "Occupations(Enterprising)",
            "Occupations(Conventional)",
        ];
        this.counter = 0;
        this.currentLike = 0;
        this.proceed = false;
        this.results = Array.apply(null, Array(18));
    }
    QuestionComponent.prototype.checkProgress = function (section) {
        if (section == localStorage.getItem("tsprog")) {
            return true;
        }
        return false;
    };
    QuestionComponent.prototype.ngOnInit = function () {
        /*
        First question: Activities(R)
        Second question: Activities(I)
        Second question: Activities(A)
    
        */
        //Check progress
        if (!this.checkProgress("questions")) {
            this.router.navigate([localStorage.getItem("tsprog")]);
        }
        //Check progress
        this.testQuestions = JSON.parse(localStorage.getItem("tsqts"));
        this.testIndex = Number(localStorage.getItem("qtsIndex"));
        this.results = JSON.parse(localStorage.getItem("qstResult"));
        // console.log(this.results)
        this.valuePerQuestion = 100 / this.testQuestions.length;
        this.value = this.valuePerQuestion * this.testIndex;
        // console.log(this.testQuestions)
        // console.log(this.testIndex)
        // this.questions = exportedQuestions;
        this.checkSession();
        //Set default value
        // this.currentQuestion = this.questions[this.counter].data;
        // this.title = this.titles[this.counter]
        // this.changeClassColor(this.counter)
        // this.changeCurrentImage(this.counter)
        //Testing
        this.currentQuestion = this.testQuestions[this.testIndex].data;
        this.title = this.titles[this.testIndex];
        this.changeClassColor(this.testIndex);
        this.changeCurrentImage(this.testIndex);
    };
    QuestionComponent.prototype.change = function () {
        var _this = this;
        this.proceed = false;
        if (this.testIndex != this.testQuestions.length) {
            //Iterate thru the array of object check if all of them is Touched
            for (var i = 0; i < this.testQuestions[this.testIndex].data.length; i++) {
                // console.log(this.testQuestions[this.testIndex].data[i].isTouched)
                if (this.testQuestions[this.testIndex].data[i].isTouched) {
                    this.proceed = true;
                }
                else {
                    this.proceed = false;
                    break;
                }
            }
            console.log(this.proceed);
            //Check if the variable proceed is thru to proceed to the next question
            if (this.proceed) {
                //Check if this is the end of the array
                if (this.testIndex == this.testQuestions.length - 1) {
                    //Store the likes in the array
                    this.results[this.testIndex] = this.currentLike;
                    localStorage.setItem('ph1Res', btoa(JSON.stringify(this.results)));
                    localStorage.setItem("tsprog", "self-estimates");
                    this.router.navigate(["self-estimates"]);
                }
                else {
                    // console.log("Current Count:" + this.testIndex);
                    // console.log("Current Length:" + this.testQuestions.length);
                    //Store the likes in the array
                    this.results[this.testIndex] = this.currentLike;
                    localStorage.setItem("qstResult", JSON.stringify(this.results));
                    //Increment counter update the current value into localStorage
                    this.testIndex++;
                    this.value = this.valuePerQuestion * this.testIndex;
                    localStorage.setItem("qtsIndex", this.testIndex.toString());
                    //Change question
                    this.currentQuestion = this.testQuestions[this.testIndex].data;
                    //Update the questions into localStorage
                    localStorage.setItem("tsqts", JSON.stringify(this.testQuestions));
                    //Change title
                    this.title = this.titles[this.testIndex];
                    // console.log(this.title)
                    // console.log(this.questions)
                    this.changeClassColor(this.testIndex);
                    this.changeCurrentImage(this.testIndex);
                    if (this.title.includes("Activities")) {
                        this.instruction["first"] = "Check the Like box for those activities you would like to do.";
                        this.instruction["second"] = "Check the Dislike box for those activities you would dislike doing or would be indifferent to.";
                    }
                    else if (this.title.includes("Competencies")) {
                        this.instruction["first"] = "Check the Yes box for those activities you can do well or competently.";
                        this.instruction["second"] = "Check the No box for those activities you have never performed or perform poorly.";
                    }
                    else {
                        this.instruction["first"] = "The following is a list of occupations. Check the like box for those occupations that interest or appeal to you.";
                        this.instruction["second"] = "Check the dislike box for those occupations that you dislike or find uninteresting.";
                    }
                    if (this.title.includes("Competencies")) {
                        this.label_true = "Yes";
                        this.label_false = "No";
                    }
                    else {
                        this.label_true = "Like";
                        this.label_false = "Dislike";
                    }
                }
                //Change current counter for like for next questions
                this.currentLike = 0;
                //Loader
                // this.view = false;
                // this.loader = true;
                // setTimeout(() => {
                //   this.loader = false;
                //   this.view = true;
                // }, 2000)
                this.loader = true;
                setTimeout(function () { return _this.loader = false; }, 1500);
                //Scroll up
                scroll(0, 0);
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default()({
                    title: "Please answer all of the questions",
                    type: "warning"
                });
            }
        }
    };
    QuestionComponent.prototype.like = function (i) {
        this.testQuestions[this.testIndex].data[i].like = true;
        this.testQuestions[this.testIndex].data[i].isTouched = true;
        // console.log(this.testQuestions[this.testIndex].data[i])
        this.count();
    };
    QuestionComponent.prototype.dislike = function (i) {
        this.testQuestions[this.testIndex].data[i].like = false;
        this.testQuestions[this.testIndex].data[i].isTouched = true;
        // console.log(this.testQuestions[this.testIndex].data[i])
        this.count();
    };
    QuestionComponent.prototype.count = function () {
        var _this = this;
        this.currentLike = 0;
        this.testQuestions[this.testIndex].data.forEach(function (element) {
            if (element.like) {
                _this.currentLike++;
            }
        });
    };
    QuestionComponent.prototype.checkSession = function () {
        var _this = this;
        this.authService.checkSession().subscribe(function (successData) {
        }, function (error) { return _this.router.navigate(["/"]); });
    };
    QuestionComponent.prototype.changeClassColor = function (index) {
        this.currentColor = this.testQuestions[index].color;
    };
    QuestionComponent.prototype.changeCurrentImage = function (index) {
        this.currentLogo = this.testQuestions[index].icon_path;
    };
    QuestionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-question',
            template: __webpack_require__(/*! ./question.component.html */ "./src/app/question/question.component.html"),
            styles: [__webpack_require__(/*! ./question.component.css */ "./src/app/question/question.component.css")]
        }),
        __metadata("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], QuestionComponent);
    return QuestionComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#content{\r\n    margin-top:10%;\r\n    margin-right: 25%;\r\n    margin-left: 25%;\r\n    \r\n}\r\n\r\nh1,h2{\r\n    margin:5px 0px 0px 0px;\r\n}\r\n\r\n.card-title{\r\n    font-size:3.5rem !important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsaUJBQWlCOztDQUVwQjs7QUFFRDtJQUNJLHVCQUF1QjtDQUMxQjs7QUFDRDtJQUNJLDRCQUE0QjtDQUMvQiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY29udGVudHtcclxuICAgIG1hcmdpbi10b3A6MTAlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyNSU7XHJcbiAgICBtYXJnaW4tbGVmdDogMjUlO1xyXG4gICAgXHJcbn1cclxuXHJcbmgxLGgye1xyXG4gICAgbWFyZ2luOjVweCAwcHggMHB4IDBweDtcclxufVxyXG4uY2FyZC10aXRsZXtcclxuICAgIGZvbnQtc2l6ZTozLjVyZW0gIWltcG9ydGFudDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
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



var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/sds-session.guard.ts":
/*!**************************************!*\
  !*** ./src/app/sds-session.guard.ts ***!
  \**************************************/
/*! exports provided: SdsSessionGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SdsSessionGuard", function() { return SdsSessionGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SdsSessionGuard = /** @class */ (function () {
    function SdsSessionGuard(router) {
        this.router = router;
    }
    SdsSessionGuard.prototype.canActivate = function (next, state) {
        if (localStorage.getItem('inSession') != "" && localStorage.getItem('inSession') != null) {
            return true;
        }
        else {
            this.router.navigate(["/"]);
            return false;
        }
    };
    SdsSessionGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], SdsSessionGuard);
    return SdsSessionGuard;
}());



/***/ }),

/***/ "./src/app/services/admin.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/admin.service.ts ***!
  \*******************************************/
/*! exports provided: AdminService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminService", function() { return AdminService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _configs_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../configs/config */ "./src/app/configs/config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminService = /** @class */ (function () {
    function AdminService(http) {
        this.http = http;
        this.server_url = _configs_config__WEBPACK_IMPORTED_MODULE_2__["config"].ip;
    }
    AdminService.prototype.getTakersByDate = function (date) {
        var url = this.server_url + "admin/users/attendance";
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set("date", date);
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'authorization': localStorage.getItem("AdminAuthorization"),
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }),
            params: params
        };
        return this.http.get(url, httpOptions);
    };
    AdminService.prototype.changeUserPermission = function (i, permission) {
        var url = this.server_url + "admin/users/permission";
        var body = {
            user_id: i,
            isGrantedAccess: permission
        };
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'authorization': localStorage.getItem("AdminAuthorization"),
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            })
        };
        return this.http.patch(url, body, httpOptions);
    };
    AdminService.prototype.deleteUser = function (id) {
        var url = this.server_url + "admin/users";
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'authorization': localStorage.getItem("AdminAuthorization"),
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }),
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('id', id)
        };
        return this.http.delete(url, httpOptions);
    };
    AdminService.prototype.getUsers = function () {
        var url = this.server_url + "admin/users";
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('type', "user");
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'authorization': localStorage.getItem("AdminAuthorization"),
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }),
            params: params
        };
        return this.http.get(url, httpOptions);
    };
    AdminService.prototype.getAllUsers = function () {
        var url = this.server_url + "admin/users";
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('type', "all");
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'authorization': localStorage.getItem("AdminAuthorization"),
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }),
            params: params
        };
        return this.http.get(url, httpOptions);
    };
    AdminService.prototype.changeType = function (type, id) {
        var url = this.server_url + "admin/account";
        var body = {
            fieldname: "type",
            value: type,
            id: id
        };
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'authorization': localStorage.getItem("AdminAuthorization"),
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            })
        };
        return this.http.put(url, body, httpOptions);
    };
    AdminService.prototype.getInfo = function (id) {
        var url = this.server_url + "admin/getInfo";
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('id', id);
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'authorization': localStorage.getItem("AdminAuthorization"),
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }),
            params: params
        };
        return this.http.get(url, httpOptions);
    };
    AdminService.prototype.getMoreInfo = function (id) {
        var url = this.server_url + "admin/getMoreInfo";
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('id', id);
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'authorization': localStorage.getItem("AdminAuthorization"),
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }),
            params: params
        };
        return this.http.get(url, httpOptions);
    };
    AdminService.prototype.getProblems = function (id) {
        var url = this.server_url + "admin/getProblems";
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('id', id);
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'authorization': localStorage.getItem("AdminAuthorization"),
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }),
            params: params
        };
        return this.http.get(url, httpOptions);
    };
    AdminService.prototype.getEform = function (id) {
        var url = this.server_url + "admin/getEform";
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('id', id);
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'authorization': localStorage.getItem("AdminAuthorization"),
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }),
            params: params
        };
        return this.http.get(url, httpOptions);
    };
    AdminService.prototype.getMySDS = function (id) {
        var url = this.server_url + "admin/getSDS";
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('id', id);
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'authorization': localStorage.getItem("AdminAuthorization"),
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }),
            params: params
        };
        return this.http.get(url, httpOptions);
    };
    AdminService.prototype.search = function (type, keyword) {
        var url = this.server_url + "admin/searchUsers";
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('keyword', keyword).set('type', type);
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'authorization': localStorage.getItem("AdminAuthorization"),
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }),
            params: params
        };
        return this.http.get(url, httpOptions);
    };
    AdminService.prototype.dynamicSearch = function (condition, keyword) {
        var url = this.server_url + "admin/resultSearch";
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('keyword', keyword).set('condition', condition);
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'authorization': localStorage.getItem("AdminAuthorization"),
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }),
            params: params
        };
        return this.http.get(url, httpOptions);
    };
    AdminService.prototype.graph = function (data) {
        // console.log(data)
        //Process Query
        var criteria_holder = "";
        var criteriaMet = "";
        var notCriteriaMet = "";
        data.criteria.forEach(function (first, firstIndex) {
            notCriteriaMet += "(";
            criteriaMet += "(";
            first.value.forEach(function (element, index) {
                notCriteriaMet += "users." + first.fieldname + " = " + ("'" + element + "'");
                criteriaMet += "users." + first.fieldname + " = " + ("'" + element + "'");
                if (index != first.value.length - 1) {
                    notCriteriaMet += " OR ";
                    criteriaMet += " OR ";
                }
            });
            notCriteriaMet += ")";
            notCriteriaMet += " AND ";
            criteriaMet += ")";
            criteriaMet += " AND ";
            console.log("done first event");
        });
        data.value.forEach(function (element, index) {
            console.log("second start");
            notCriteriaMet += element + " = 0";
            criteriaMet += element + " = 1";
            if (index != data.value.length - 1) {
                criteriaMet += " AND ";
                notCriteriaMet += " AND ";
            }
            console.log("second end");
        });
        console.log(data);
        var request_data = {
            criteria_holder: criteria_holder,
            criteriaMet: criteriaMet,
            notCriteriaMet: notCriteriaMet
        };
        console.log(request_data);
        var url = this.server_url + "admin/graph";
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'authorization': localStorage.getItem("AdminAuthorization"),
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            })
        };
        return this.http.post(url, request_data, httpOptions);
    };
    AdminService.prototype.login = function (data) {
        var url = this.server_url + "auth/admin/login";
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            })
        };
        return this.http.post(url, data, httpOptions);
    };
    AdminService.prototype.generalGraph = function (data) {
        // console.log(data)
        var url = this.server_url + "admin/genGraph";
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'authorization': localStorage.getItem("AdminAuthorization"),
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            })
        };
        return this.http.post(url, data, httpOptions);
    };
    AdminService.prototype.getUsersProblem = function (problem) {
        // console.log(problem)
        var url = this.server_url + "admin/indivProb";
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'authorization': localStorage.getItem("AdminAuthorization"),
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            })
        };
        return this.http.post(url, problem, httpOptions);
    };
    AdminService.prototype.getOldPrintResults = function () {
        var url = this.server_url + "admin/old-print";
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'authorization': localStorage.getItem("AdminAuthorization"),
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            })
        };
        return this.http.get(url, httpOptions);
    };
    AdminService.prototype.getOldArchiveResults = function () {
        var url = this.server_url + "admin/old-archive";
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'authorization': localStorage.getItem("AdminAuthorization"),
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            })
        };
        return this.http.get(url, httpOptions);
    };
    AdminService.prototype.getNewResults = function () {
        var url = this.server_url + "admin/newResults";
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'authorization': localStorage.getItem("AdminAuthorization"),
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            })
        };
        return this.http.get(url, httpOptions);
    };
    AdminService.prototype.getTempResults = function () {
        var url = this.server_url + "admin/results";
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'authorization': localStorage.getItem("AdminAuthorization"),
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            })
        };
        return this.http.get(url, httpOptions);
    };
    AdminService.prototype.getTempOldResults = function () {
        var url = this.server_url + "admin/oldTempResults";
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'authorization': localStorage.getItem("AdminAuthorization"),
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            })
        };
        return this.http.get(url, httpOptions);
    };
    AdminService.prototype.getOldResults = function () {
        var url = this.server_url + "admin/oldResults";
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'authorization': localStorage.getItem("AdminAuthorization"),
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            })
        };
        return this.http.get(url, httpOptions);
    };
    AdminService.prototype.setSinglePrint = function (i) {
        var url = this.server_url + "admin/singleResult";
        var data = {
            id: i
        };
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'authorization': localStorage.getItem("AdminAuthorization"),
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }),
        };
        return this.http.put(url, data, httpOptions);
    };
    AdminService.prototype.setAllPrint = function () {
        var url = this.server_url + "admin/allResult";
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'authorization': localStorage.getItem("AdminAuthorization"),
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }),
        };
        return this.http.put(url, httpOptions);
    };
    AdminService.prototype.getLetters = function (id) {
        var url = this.server_url + "admin/getLetters";
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('id', id);
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'authorization': localStorage.getItem("AdminAuthorization"),
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            }),
            params: params
        };
        return this.http.get(url, httpOptions);
    };
    AdminService.prototype.getEvents = function () {
        var url = this.server_url + "admin/events";
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'authorization': localStorage.getItem("AdminAuthorization"),
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            }),
        };
        return this.http.get(url, httpOptions);
    };
    AdminService.prototype.deleteEvent = function (id) {
        var url = this.server_url + "admin/events";
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set("id", id);
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'authorization': localStorage.getItem("AdminAuthorization"),
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            }),
            params: params
        };
        return this.http.delete(url, httpOptions);
    };
    AdminService.prototype.updateEvent = function (field, value, id) {
        var url = this.server_url + "admin/events";
        var formData = new FormData();
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set("field_name", field).set("id", id);
        formData.append("value", value);
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'authorization': localStorage.getItem("AdminAuthorization"),
                'Access-Control-Allow-Origin': '*',
            }),
            params: params
        };
        return this.http.put(url, formData, httpOptions);
    };
    AdminService.prototype.addEvent = function (data) {
        var url = this.server_url + "admin/events";
        var formData = new FormData();
        formData.append("name", data.name);
        formData.append("date", data.date);
        formData.append("location", data.location);
        formData.append("poster_url", data.poster);
        formData.append("time_from", data.time_from);
        formData.append("time_to", data.time_to);
        formData.append("description", data.description);
        console.log(formData.get("poster"));
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'authorization': localStorage.getItem("AdminAuthorization"),
            }),
        };
        return this.http.post(url, formData, httpOptions);
    };
    AdminService.prototype.getContacts = function () {
        var url = this.server_url + "user/contacts";
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set("user_type", "admin");
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'authorization': localStorage.getItem("AdminAuthorization"),
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }),
            params: params
        };
        return this.http.get(url, httpOptions);
    };
    AdminService.prototype.getMessages = function (convo_name, limit) {
        var url = this.server_url + "user/messages";
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set("user_type", "admin").set("convo_name", convo_name).set("limit", limit);
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'authorization': localStorage.getItem("AdminAuthorization"),
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }),
            params: params
        };
        return this.http.get(url, httpOptions);
    };
    AdminService.prototype.getInvitations = function (event_id) {
        var url = this.server_url + "admin/invitation/" + event_id;
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'authorization': localStorage.getItem("AdminAuthorization"),
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            })
        };
        return this.http.get(url, httpOptions);
    };
    AdminService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AdminService);
    return AdminService;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _configs_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../configs/config */ "./src/app/configs/config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthService = /** @class */ (function () {
    function AuthService(http, router) {
        this.http = http;
        this.router = router;
        this.loggedInStatus = false;
        this.server_url = _configs_config__WEBPACK_IMPORTED_MODULE_4__["config"].ip;
    }
    AuthService.prototype.setLoggedIn = function (value) {
        this.loggedInStatus = value;
        // console.log(this.loggedInStatus)
    };
    Object.defineProperty(AuthService.prototype, "isLoggedIn", {
        get: function () {
            return this.loggedInStatus;
        },
        enumerable: true,
        configurable: true
    });
    //Check user session
    AuthService.prototype.checkSession = function () {
        //Check if there is a token inside localStorage
        if (localStorage.getItem("Authorization") != null) {
            //Verify the token
            var url = this.server_url + "auth/users/checkSession";
            var httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                    'authorization': localStorage.getItem("Authorization"),
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                })
            };
            return this.http.get(url, httpOptions);
        }
    };
    //Register
    AuthService.prototype.register = function (username, password, name, gender, dp_path) {
        var url = this.server_url + "auth/users/register";
        var data = {
            username: username,
            password: password,
            name: name,
            gender: gender,
            dp_path: dp_path
        };
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            })
        };
        return this.http.post(url, data, httpOptions);
    };
    //Code for getting the data from post method
    // return this.http.post(url, data, httpOptions).pipe(
    //   map(res => {
    //     return JSON.stringify(res)
    //   })
    // );
    //:Login
    AuthService.prototype.login = function (username, password) {
        var url = this.server_url + "auth/users/login";
        var data = {
            username: username,
            password: password
        };
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            })
        };
        return this.http.post(url, data, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (data) {
            return data;
        }));
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/chat.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/chat.service.ts ***!
  \******************************************/
/*! exports provided: ChatService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatService", function() { return ChatService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _configs_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../configs/config */ "./src/app/configs/config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ChatService = /** @class */ (function () {
    function ChatService(http, router) {
        this.http = http;
        this.router = router;
        this.server_url = _configs_config__WEBPACK_IMPORTED_MODULE_5__["config"].ip;
        this.adminToken = localStorage.getItem("AdminAuthorization");
        this.chatSocket = socket_io_client__WEBPACK_IMPORTED_MODULE_4__(_configs_config__WEBPACK_IMPORTED_MODULE_5__["config"].ip + 'chat');
        console.log("chat Service hey");
    }
    ChatService.prototype.sendInvitation = function (users, invitations) {
        this.chatSocket.emit('invitation to an event', users, invitations);
    };
    ChatService.prototype.socketLogin = function (id) {
        this.chatSocket.emit('login', id);
    };
    ChatService.prototype.endSocket = function (userId) {
        this.chatSocket.emit('end', userId);
    };
    ChatService.prototype.leaveRoom = function (data) {
        this.chatSocket.emit('leave', data);
    };
    ChatService.prototype.joinRoom = function (data) {
        this.chatSocket.emit('join', data);
    };
    ChatService.prototype.sendMessage = function (msg) {
        this.chatSocket.emit('send msg', msg);
    };
    ChatService.prototype.joinAllContactsRoom = function (contacts, user_data) {
        var _this = this;
        contacts.forEach(function (element) {
            _this.chatSocket.emit('join', { convo_name: element.convo_name, user: user_data.username });
        });
    };
    ChatService.prototype.getNewMessage = function () {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (obs) {
            _this.chatSocket.on('new msg', function (msg) {
                obs.next(msg);
            });
        });
    };
    ChatService.prototype.getNewOnlineUser = function () {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (obs) {
            _this.chatSocket.on('new online user', function (id) {
                obs.next(id);
            });
        });
    };
    ChatService.prototype.getNewOfflineUser = function () {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (obs) {
            _this.chatSocket.on('new offline user', function (id, date) {
                console.log(id, date);
                var data = {
                    id: id,
                    date: date
                };
                obs.next(data);
            });
        });
    };
    ChatService.prototype.getSingleNewMessage = function () {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (obs) {
            _this.chatSocket.on('new single message for contact', function (msg) {
                obs.next(msg);
            });
        });
    };
    ChatService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ChatService);
    return ChatService;
}());



/***/ }),

/***/ "./src/app/services/data.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _configs_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../configs/config */ "./src/app/configs/config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
        this.server_url = _configs_config__WEBPACK_IMPORTED_MODULE_2__["config"].ip;
    }
    DataService.prototype.getTakers = function () {
        var url = this.server_url + "user/count-takers";
        return this.http.get(url);
    };
    DataService.prototype.submitResult = function (result) {
        var url = this.server_url + "user/submitResult";
        var data = {
            result: result
        };
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'authorization': localStorage.getItem("Authorization"),
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            })
        };
        return this.http.post(url, data, httpOptions);
    };
    DataService.prototype.submitLetters = function (letters) {
        // console.log(letters)
        var url = this.server_url + "user/submitLetters";
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'authorization': localStorage.getItem("Authorization"),
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            })
        };
        var data = {
            letters: letters
        };
        return this.http.post(url, data, httpOptions);
    };
    DataService.prototype.submitSummaryCode = function (firstLetter, secondLetter, thirdLetter) {
        var url = this.server_url + "user/submitSummaryCode";
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'authorization': localStorage.getItem("Authorization"),
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            })
        };
        var data = {
            code: firstLetter + secondLetter + thirdLetter
        };
        // console.log(firstLetter)
        return this.http.post(url, data, httpOptions);
    };
    DataService.prototype.payload = function (token, type) {
        var url = this.server_url + "auth/payload";
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set("user_type", type);
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'authorization': token,
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }),
            params: params
        };
        return this.http.get(url, httpOptions);
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/services/profile.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/profile.service.ts ***!
  \*********************************************/
/*! exports provided: ProfileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileService", function() { return ProfileService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _configs_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../configs/config */ "./src/app/configs/config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileService = /** @class */ (function () {
    function ProfileService(http) {
        this.http = http;
        this.server_url = _configs_config__WEBPACK_IMPORTED_MODULE_2__["config"].ip;
    }
    ProfileService.prototype.getMyCode = function () {
        var url = this.server_url + "user/getMyCode";
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'authorization': localStorage.getItem("Authorization"),
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            })
        };
        return this.http.get(url, httpOptions);
    };
    ProfileService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ProfileService);
    return ProfileService;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _configs_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../configs/config */ "./src/app/configs/config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.server_url = _configs_config__WEBPACK_IMPORTED_MODULE_3__["config"].ip;
    }
    UserService.prototype.checkSdsStatus = function () {
        var url = this.server_url + "user/checkSdsStatus";
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'authorization': localStorage.getItem("Authorization"),
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            })
        };
        return this.http.get(url, httpOptions);
    };
    UserService.prototype.getPayload = function (token) {
        var payload = token.split(" ")[1];
        return jwt_decode__WEBPACK_IMPORTED_MODULE_2__(payload);
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/terms-and-condition/terms-and-condition.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/terms-and-condition/terms-and-condition.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rlcm1zLWFuZC1jb25kaXRpb24vdGVybXMtYW5kLWNvbmRpdGlvbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/terms-and-condition/terms-and-condition.component.html":
/*!************************************************************************!*\
  !*** ./src/app/terms-and-condition/terms-and-condition.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2><strong>Terms and Conditions</strong></h2>\n\n<p>Welcome to GC Career Guidance App!</p>\n\n<p>These terms and conditions outline the rules and regulations for the use of GC Career Guidance App's Website, located\n  at http://sds.gordoncollegeccs-ssite.net.</p>\n\n<p>By accessing this website we assume you accept these terms and conditions. Do not continue to use GC Career Guidance\n  App if you do not agree to take all of the terms and conditions stated on this page.\n</p>\n\n<p>The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and all\n  Agreements: \"Client\", \"You\" and \"Your\" refers to you, the person log on this website and compliant to the Company’s\n  terms and conditions. \"The Company\", \"Ourselves\", \"We\", \"Our\" and \"Us\", refers to our Company. \"Party\", \"Parties\", or\n  \"Us\", refers to both the Client and ourselves. All terms refer to the offer, acceptance and consideration of payment\n  necessary to undertake the process of our assistance to the Client in the most appropriate manner for the express\n  purpose of meeting the Client’s needs in respect of provision of the Company’s stated services, in accordance with and\n  subject to, prevailing law of Netherlands. Any use of the above terminology or other words in the singular, plural,\n  capitalization and/or he/she or they, are taken as interchangeable and therefore as referring to same.</p>\n\n<h3><strong>Cookies</strong></h3>\n\n<p>We employ the use of cookies. By accessing GC Career Guidance App, you agreed to use cookies in agreement with the GC\n  Career Guidance App's Privacy Policy.</p>\n\n<p>Most interactive websites use cookies to let us retrieve the user’s details for each visit. Cookies are used by our\n  website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our\n  affiliate/advertising partners may also use cookies.</p>\n\n<h3><strong>License</strong></h3>\n\n<p>Unless otherwise stated, GC Career Guidance App and/or its licensors own the intellectual property rights for all\n  material on GC Career Guidance App. All intellectual property rights are reserved. You may access this from GC Career\n  Guidance App for your own personal use subjected to restrictions set in these terms and conditions.</p>\n\n<p>You must not:</p>\n<ul>\n  <li>Republish material from GC Career Guidance App</li>\n  <li>Sell, rent or sub-license material from GC Career Guidance App</li>\n  <li>Reproduce, duplicate or copy material from GC Career Guidance App</li>\n  <li>Redistribute content from GC Career Guidance App</li>\n</ul>\n\n<p>This Agreement shall begin on the date hereof.</p>\n\n<p>Parts of this website offer an opportunity for users to post and exchange opinions and information in certain areas\n  of the website. GC Career Guidance App does not filter, edit, publish or review Comments prior to their presence on\n  the website. Comments do not reflect the views and opinions of GC Career Guidance App,its agents and/or affiliates.\n  Comments reflect the views and opinions of the person who post their views and opinions. To the extent permitted by\n  applicable laws, GC Career Guidance App shall not be liable for the Comments or for any liability, damages or expenses\n  caused and/or suffered as a result of any use of and/or posting of and/or appearance of the Comments on this website.\n</p>\n\n<p>GC Career Guidance App reserves the right to monitor all Comments and to remove any Comments which can be considered\n  inappropriate, offensive or causes breach of these Terms and Conditions.</p>\n\n<p>You warrant and represent that:</p>\n\n<ul>\n  <li>You are entitled to post the Comments on our website and have all necessary licenses and consents to do so;</li>\n  <li>The Comments do not invade any intellectual property right, including without limitation copyright, patent or\n    trademark of any third party;</li>\n  <li>The Comments do not contain any defamatory, libelous, offensive, indecent or otherwise unlawful material which is\n    an invasion of privacy</li>\n  <li>The Comments will not be used to solicit or promote business or custom or present commercial activities or\n    unlawful activity.</li>\n</ul>\n\n<p>You hereby grant GC Career Guidance App a non-exclusive license to use, reproduce, edit and authorize others to use,\n  reproduce and edit any of your Comments in any and all forms, formats or media.</p>\n\n<h3><strong>Hyperlinking to our Content</strong></h3>\n\n<p>The following organizations may link to our Website without prior written approval:</p>\n\n<ul>\n  <li>Government agencies;</li>\n  <li>Search engines;</li>\n  <li>News organizations;</li>\n  <li>Online directory distributors may link to our Website in the same manner as they hyperlink to the Websites of\n    other listed businesses; and</li>\n  <li>System wide Accredited Businesses except soliciting non-profit organizations, charity shopping malls, and charity\n    fundraising groups which may not hyperlink to our Web site.</li>\n</ul>\n\n<p>These organizations may link to our home page, to publications or to other Website information so long as the link:\n  (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement or approval of the linking party\n  and its products and/or services; and (c) fits within the context of the linking party’s site.</p>\n\n<p>We may consider and approve other link requests from the following types of organizations:</p>\n\n<ul>\n  <li>commonly-known consumer and/or business information sources;</li>\n  <li>dot.com community sites;</li>\n  <li>associations or other groups representing charities;</li>\n  <li>online directory distributors;</li>\n  <li>internet portals;</li>\n  <li>accounting, law and consulting firms; and</li>\n  <li>educational institutions and trade associations.</li>\n</ul>\n\n<p>We will approve link requests from these organizations if we decide that: (a) the link would not make us look\n  unfavorably to ourselves or to our accredited businesses; (b) the organization does not have any negative records with\n  us; (c) the benefit to us from the visibility of the hyperlink compensates the absence of GC Career Guidance App; and\n  (d) the link is in the context of general resource information.</p>\n\n<p>These organizations may link to our home page so long as the link: (a) is not in any way deceptive; (b) does not\n  falsely imply sponsorship, endorsement or approval of the linking party and its products or services; and (c) fits\n  within the context of the linking party’s site.</p>\n\n<p>If you are one of the organizations listed in paragraph 2 above and are interested in linking to our website, you\n  must inform us by sending an e-mail to GC Career Guidance App. Please include your name, your organization name,\n  contact information as well as the URL of your site, a list of any URLs from which you intend to link to our Website,\n  and a list of the URLs on our site to which you would like to link. Wait 2-3 weeks for a response.</p>\n\n<p>Approved organizations may hyperlink to our Website as follows:</p>\n\n<ul>\n  <li>By use of our corporate name; or</li>\n  <li>By use of the uniform resource locator being linked to; or</li>\n  <li>By use of any other description of our Website being linked to that makes sense within the context and format of\n    content on the linking party’s site.</li>\n</ul>\n\n<p>No use of GC Career Guidance App's logo or other artwork will be allowed for linking absent a trademark license\n  agreement.</p>\n\n<h3><strong>iFrames</strong></h3>\n\n<p>Without prior approval and written permission, you may not create frames around our Webpages that alter in any way\n  the visual presentation or appearance of our Website.</p>\n\n<h3><strong>Content Liability</strong></h3>\n\n<p>We shall not be hold responsible for any content that appears on your Website. You agree to protect and defend us\n  against all claims that is rising on your Website. No link(s) should appear on any Website that may be interpreted as\n  libelous, obscene or criminal, or which infringes, otherwise violates, or advocates the infringement or other\n  violation of, any third party rights.</p>\n\n<h3><strong>Your Privacy</strong></h3>\n\n<p>Please read Privacy Policy</p>\n\n<h3><strong>Reservation of Rights</strong></h3>\n\n<p>We reserve the right to request that you remove all links or any particular link to our Website. You approve to\n  immediately remove all links to our Website upon request. We also reserve the right to amen these terms and conditions\n  and it’s linking policy at any time. By continuously linking to our Website, you agree to be bound to and follow these\n  linking terms and conditions.</p>\n\n<h3><strong>Removal of links from our website</strong></h3>\n\n<p>If you find any link on our Website that is offensive for any reason, you are free to contact and inform us any\n  moment. We will consider requests to remove links but we are not obligated to or so or to respond to you directly.</p>\n\n<p>We do not ensure that the information on this website is correct, we do not warrant its completeness or accuracy; nor\n  do we promise to ensure that the website remains available or that the material on the website is kept up to date.</p>\n\n<h3><strong>Disclaimer</strong></h3>\n\n<p>To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating\n  to our website and the use of this website. Nothing in this disclaimer will:</p>\n\n<ul>\n  <li>limit or exclude our or your liability for death or personal injury;</li>\n  <li>limit or exclude our or your liability for fraud or fraudulent misrepresentation;</li>\n  <li>limit any of our or your liabilities in any way that is not permitted under applicable law; or</li>\n  <li>exclude any of our or your liabilities that may not be excluded under applicable law.</li>\n</ul>\n\n<p>The limitations and prohibitions of liability set in this Section and elsewhere in this disclaimer: (a) are subject\n  to the preceding paragraph; and (b) govern all liabilities arising under the disclaimer, including liabilities arising\n  in contract, in tort and for breach of statutory duty.</p>\n\n<p>As long as the website and the information and services on the website are provided free of charge, we will not be\n  liable for any loss or damage of any nature.</p>"

/***/ }),

/***/ "./src/app/terms-and-condition/terms-and-condition.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/terms-and-condition/terms-and-condition.component.ts ***!
  \**********************************************************************/
/*! exports provided: TermsAndConditionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsAndConditionComponent", function() { return TermsAndConditionComponent; });
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

var TermsAndConditionComponent = /** @class */ (function () {
    function TermsAndConditionComponent() {
    }
    TermsAndConditionComponent.prototype.ngOnInit = function () {
    };
    TermsAndConditionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-terms-and-condition',
            template: __webpack_require__(/*! ./terms-and-condition.component.html */ "./src/app/terms-and-condition/terms-and-condition.component.html"),
            styles: [__webpack_require__(/*! ./terms-and-condition.component.css */ "./src/app/terms-and-condition/terms-and-condition.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TermsAndConditionComponent);
    return TermsAndConditionComponent;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! c:\Users\Janan\Desktop\Thesis\frontend\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map