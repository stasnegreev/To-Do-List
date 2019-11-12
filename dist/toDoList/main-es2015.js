(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/auth.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/auth.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"auth\">\n  <div class=\"auth__card\">\n    <header class=\"auth-header\">\n      <div class=\"logo\">\n        <div class=\"side__logo\">\n          <!--<img src=\"../../assets/images/logo.svg\">-->\n        </div>\n      </div>\n      <h1 class=\"auth-title\">\n        ToDo\n      </h1>\n    </header>\n    <hr>\n    <div>\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.component.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"auth-content\">\n  <div\n    class=\"alert alert-{{message.type}}\"\n    *ngIf=\"message.text\"\n  >\n    {{message.text}}\n  </div>\n  <p class=\"text-xs-center\">Войдите для работы</p>\n  <form\n    [formGroup]=\"loginForm\"\n    (ngSubmit)=\"onSubmit()\"\n  >\n    <div\n      class=\"form-group\"\n\n    >\n      <label for=\"email\">Email</label>\n      <input\n        type=\"text\"\n        class=\"form-control\"\n        [ngClass]=\"{'is-invalid': loginForm.get('email').invalid && loginForm.get('email').touched}\"\n        id=\"email\"\n        placeholder=\"Введите ваш email\"\n        formControlName=\"email\"\n      >\n      <span\n        class=\"invalid-feedback\"\n        *ngIf=\"loginForm.get('email').invalid && loginForm.get('email').touched\"\n      >\n        <span *ngIf=\"loginForm.get('email').errors.email\">Incorrect email address</span>\n        <span *ngIf=\"loginForm.get('email').errors.required\">Email is required</span>\n      </span>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"password\">Пароль</label>\n      <input\n        type=\"password\"\n        class=\"form-control\"\n        [ngClass]=\"{'is-invalid': loginForm.get('password').invalid && loginForm.get('password').touched}\"\n        id=\"password\"\n        placeholder=\"Пароль\"\n        formControlName=\"password\"\n      >\n      <span\n        class=\"invalid-feedback\"\n        *ngIf=\"loginForm.get('password').invalid && loginForm.get('password').touched\"\n      >\n        <span *ngIf=\"loginForm.get('password').errors.minlength\">Password must be at least 6 characters long</span>\n        <span *ngIf=\"loginForm.get('password').errors.required\">Password is required</span>\n      </span>\n    </div>\n    <div class=\"form-group\">\n      <button\n        type=\"submit\"\n        class=\"btn btn-block btn-primary\"\n        [disabled]=\"loginForm.invalid\"\n      >\n        Войти\n      </button>\n    </div>\n    <div class=\"form-group\">\n      <p class=\"text-muted text-center\">\n        Нет аккаунта? <a [routerLink]=\"'/registration'\">Зарегистрироваться!</a>\n      </p>\n    </div>\n  </form>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/registration/registration.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/registration/registration.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"auth-content\">\n  <p class=\"text-xs-center\">Регистрация для получения доступа</p>\n  <form\n    [formGroup]=\"regForm\"\n    (ngSubmit)=\"onSubmit()\"\n  >\n    <div class=\"form-group\">\n      <label for=\"email\">Email</label>\n      <input\n        type=\"text\"\n        class=\"form-control underlined\"\n        formControlName=\"email\"\n        [ngClass]=\"{'is-invalid' : regForm.get('email').invalid && regForm.get('email').touched}\"\n        id=\"email\"\n        placeholder=\"Введите email\"\n      >\n      <span\n        class=\"invalid-feedback\"\n        *ngIf=\"regForm.get('email').invalid && regForm.get('email').touched\"\n      >\n        <span *ngIf=\"regForm.get('email').errors.email\">Incorrect email address</span>\n        <span *ngIf=\"regForm.get('email').errors.required\">Email is required</span>\n        <span *ngIf=\"regForm.get('email').errors['forbiddenEmails']\">This email does exist</span>\n      </span>\n    </div>\n    <div class=\"form-group has-error\">\n      <label for=\"password\">Пароль</label>\n      <input\n        type=\"password\"\n        class=\"form-control underlined\"\n        formControlName=\"password\"\n        [ngClass]=\"{'is-invalid' : regForm.get('password').invalid && regForm.get('password').touched}\"\n        id=\"password\"\n        placeholder=\"Введите пароль\"\n      >\n      <span\n        class=\"invalid-feedback\"\n        *ngIf=\"regForm.get('password').invalid && regForm.get('password').touched\"\n      >\n        <span *ngIf=\"regForm.get('password').errors.minlength\">Password must be at least 6 characters long</span>\n        <span *ngIf=\"regForm.get('password').errors.required\">Password is required</span>\n      </span>\n    </div>\n    <div class=\"form-group has-success\">\n      <label for=\"name\">Имя</label>\n      <input\n        type=\"text\"\n        class=\"form-control underlined\"\n        formControlName=\"name\"\n        [ngClass]=\"{'is-invalid' : regForm.get('name').invalid && regForm.get('name').touched}\"\n        id=\"name\"\n        placeholder=\"Введите ФИО в формате 'Фамилия'\"\n      >\n      <span\n        class=\"invalid-feedback\"\n        *ngIf=\"regForm.get('name').invalid && regForm.get('name').touched\"\n      >\n        <span *ngIf=\"regForm.get('name').errors.pattern\">ФИО должно быть в формате \"Фамилия\"</span>\n        <span *ngIf=\"regForm.get('name').errors.required\">ФИО обязательно</span>\n      </span>\n    </div>\n    <div class=\"form-group\">\n      <button\n        type=\"submit\"\n        class=\"btn btn-block btn-primary\"\n        [disabled]=\"regForm.invalid\"\n      >\n        Зарегистрироваться\n      </button>\n    </div>\n    <div class=\"form-group\">\n      <p class=\"text-muted text-xs-center\">\n        Уже есть аккаунт?\n        <a  [routerLink]=\"'/login'\">\n          Войти!\n        </a>\n      </p>\n    </div>\n  </form>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/system/home/creater/creater.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/system/home/creater/creater.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal fade in\">\n    <div class=\"modal-dialog modal-dialog-centered\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h4 class=\"modal-title\">New task</h4>\n                <button type=\"button\" class=\"close\" (click)=\"closeCreater()\">\n                    <span>×</span>\n                </button>\n            </div>\n            <div class=\"modal-body\">\n                <div\n                        class=\"alert alert-{{massage.type}}\"\n                        *ngIf=\"massage.text\"\n                >\n                    {{massage.text}}\n                </div>\n                <form #f=\"ngForm\" (ngSubmit)=\"onSubmit(f)\">\n                    <div class=\"form-group\"\n                         [ngClass]=\"{'has-error': name.invalid && name.touched}\"\n                    >\n                        <label class=\"control-label\" for=\"name\">Add name</label>\n                        <input\n                            type=\"text\"\n                            id=\"name\"\n                            class=\"form-control\"\n                            name=\"name\"\n                            [ngModel]=\"\"\n                            #name=\"ngModel\"\n                            maxlength=\"25\"\n                            required\n                        >\n                        <span\n                                class=\"form-help-text\"\n                                *ngIf=\"name.invalid && name.touched\"\n                        >\n                          Name is required\n                        </span>\n                    </div>\n                    <div class=\"form-group\"\n                         [ngClass]=\"{'has-error': description.invalid && description.touched}\"\n                    >\n                        <label class=\"control-label\" for=\"description\">Add description</label>\n                        <textarea\n                            type=\"text\"\n                            id=\"description\"\n                            class=\"form-control\"\n                            name=\"description\"\n                            [ngModel]=\"\"\n                            #description=\"ngModel\"\n                            maxlength=\"225\"\n                        ></textarea>\n                    </div>\n                    <div class=\"form-group\">\n                        <label class=\"control-label\">Select priority</label>\n                        <div class=\"btn__grup\">\n                            <label *ngFor=\"let t of types\" class=\"select\">\n                                <input\n                                        class=\"radio \"\n                                        name=\"priority\"\n                                        type=\"radio\"\n                                        [value]=\"t.type\"\n                                        [ngModel]=\"\"\n                                        required\n                                >\n                                <span>{{t.label}}</span>\n                            </label>\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <label class=\"control-label\">Select color</label>\n                            <div class=\"btn__grup\">\n                                <label  *ngFor=\"let c of colors\"\n                                        class=\"btn btn-{{c.btn}} select\">\n                                    <input\n                                            class=\"radio\"\n                                            name=\"color\"\n                                            type=\"radio\"\n                                            [value]=\"c.color\"\n                                            [ngModel]=\"\"\n                                            required\n                                    >\n                                    <span>{{c.label}}</span>\n                                </label>\n                            </div>\n\n\n                    </div>\n                    <div class=\"modal-footer\">\n\n                        <button\n                                class=\"btn btn-primary\"\n                                type=\"submit\"\n                        >\n                            Create\n                        </button>\n                    </div>\n                </form>\n            </div>\n\n        </div>\n    </div>\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/system/home/editor/editor.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/system/home/editor/editor.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal fade in\">\n    <div class=\"modal-dialog modal-dialog-centered\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h4 class=\"modal-title\">New task</h4>\n                <button type=\"button\" class=\"close\" (click)=\"closeEditor()\">\n                    <span>×</span>\n                </button>\n            </div>\n            <div class=\"modal-body\">\n                <div\n                        class=\"alert alert-{{massage.type}}\"\n                        *ngIf=\"massage.text\"\n                >\n                    {{massage.text}}\n                </div>\n                <form\n                    #f=\"ngForm\"\n                    (ngSubmit)=\"onSubmit(f)\"\n                >\n                    <div class=\"form-group\"\n                         [ngClass]=\"{'has-error': name.invalid && name.touched}\"\n                    >\n                        <label class=\"control-label\" for=\"name\">Add name</label>\n                        <input\n                                type=\"text\"\n                                id=\"name\"\n                                class=\"form-control\"\n                                name=\"name\"\n                                [ngModel]=\"editForm.name\"\n                                #name=\"ngModel\"\n                                maxlength=\"25\"\n                                required\n                        >\n                        <span\n                                class=\"form-help-text\"\n                                *ngIf=\"name.invalid && name.touched\"\n                        >\n                          Name is required\n                        </span>\n                    </div>\n                    <div class=\"form-group\"\n                         [ngClass]=\"{'has-error': description.invalid && description.touched}\"\n                    >\n                        <label class=\"control-label\" for=\"description\">Add description</label>\n\n                        <textarea\n                                type=\"text\"\n                                id=\"description\"\n                                class=\"form-control\"\n                                name=\"description\"\n                                [ngModel]=\"editForm.description\"\n                                #description=\"ngModel\"\n                                maxlength=\"225\"\n                        ></textarea>\n\n                    </div>\n                    <div class=\"form-group\">\n                        <label class=\"control-label\">Select priority</label>\n                            <div class=\"btn__grup\">\n                                <label *ngFor=\"let t of types\" class=\"select\">\n                                    <input\n                                            class=\"radio\"\n                                            name=\"priority\"\n                                            type=\"radio\"\n                                            [value]=\"t.type\"\n                                            [ngModel]=\"editForm.priority\"\n                                    >\n                                    <span>{{t.label}}</span>\n                                </label>\n                            </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <label class=\"control-label\">Select color</label>\n                            <div class=\"btn__grup\">\n                                <label *ngFor=\"let c of colors\"\n                                        class=\"btn btn-{{c.btn}} select\">\n                                    <input\n                                            class=\"radio\"\n                                            name=\"color\"\n                                            type=\"radio\"\n                                            [value]=\"c.color\"\n                                            [ngModel]=\"editForm.color\"\n                                            required\n                                    >\n                                    <span>{{c.label}}</span>\n                                </label>\n                            </div>\n                    </div>\n                    <div class=\"modal-footer \">\n                        <button *ngIf=\"editTask.status === 'during'\" type=\"button\" class=\"btn btn-success\" (click)=\"doneTask()\">\n                            Done\n                        </button>\n                        <button *ngIf=\"editTask.status === 'done'\" type=\"button\" class=\"btn btn-primary\" (click)=\"duringTask()\">\n                            Not done\n                        </button>\n                        <button type=\"button\" class=\"btn btn-dark\" type=\"submit\">\n                            Edit\n                        </button>\n                        <button type=\"button\" class=\"btn btn-danger\" (click)=\"removeTask()\">\n                            Remove\n                        </button>\n\n                    </div>\n                </form>\n            </div>\n\n        </div>\n    </div>\n</div>\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/system/home/home.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/system/home/home.component.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<header>\n    <div class=\"header\">\n\n        <div class=\"dropdown button button_filter\" >\n            <div class=\"dropdown-toggle\"  id=\"dropdownMenu\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                <img src=\"../../assets/images/icons/filter-button.svg\">\n            </div>\n            <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"dropdownMenu\">\n                <form #f=\"ngForm\" (ngSubmit)=\"filterAdded(f)\">\n                    <div class=\"form-group \">\n                        <label class=\"control-label\">Select priority</label>\n                        <div *ngFor=\"let p of prioritys\" >\n                            <label class=\"dropdown-item\">\n                                <input\n                                        class=\"form-check-input\"\n                                        [name]=\"p.type\"\n                                        type=\"checkbox\"\n                                        [value]=\"p.type\"\n                                        [ngModel]=\"\"\n                                >\n                                <span>{{p.label}}</span>\n                            </label>\n                        </div>\n                    </div>\n                    <div class=\"modal-footer\">\n                        <button class=\"btn btn-primary\"\n                                type=\"submit\">\n                            Filter\n                        </button>\n                    </div>\n                </form>\n            </div>\n        </div>\n        <div class=\"button button_sorting\">\n            <div class=\"dropdown\">\n                <div class=\"dropdown-toggle\" id=\"dropdownMenuButton3\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                    <img src=\"../../assets/images/icons/sorting-button.svg\">\n                </div>\n                <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"dropdownMenuButton3\">\n                    <span class=\"dropdown-item\" (click)=\"onSortDown()\">From new to old</span>\n                    <span class=\"dropdown-item\" (click)=\"onSortUp()\">From old to new</span>\n                </div>\n            </div>\n        </div>\n        <div class=\"button button_add\">\n            <div class=\"btn btn-primary\" (click)=\"openTaskCreater()\">\n                + Add ToDo\n            </div>\n        </div>\n        <div class=\"button_profile\">\n            <div class=\"dropdown\">\n                <div class=\"button dropdown-toggle\" id=\"dropdownMenuButton2\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                    <div class=\"ava\">\n                        <img src=\"https://img.freepik.com/free-photo/_53876-40306.jpg?size=626&ext=jpg\">\n                    </div>\n                    <div class=\"chevron active\">\n                        <img src=\"../../assets/images/icons/down-chevron.svg\">\n                    </div>\n                    <div class=\"chevron\" aria-labelledby=\"dropdownMenuButton2\">\n                        <img src=\"../../assets/images/icons/up-chevron.svg\">\n                    </div>\n                </div>\n                <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"dropdownMenuButton2\">\n\n                    <div class=\"dropdown-item\" (click)=\"onLogOut()\">Log out {{userName}}</div>\n                </div>\n            </div>\n\n        </div>\n    </div>\n</header>\n<aside>\n    <tdl-creater\n            *ngIf=\"isCreaterVisible\"\n            (onTaskAdd)=\"taskAdded($event)\"\n            (onCreaterCancel)=\"closeTaskCreater()\"\n    ></tdl-creater>\n</aside>\n<aside>\n    <tdl-editor\n            *ngIf=\"isEditorVisible\"\n            [editTask] =\"editTask\"\n            (onTaskEdit)=\"onTaskEdit($event)\"\n            (onTaskRemoved)=\"onTaskRemoved($event)\"\n            (onEditorCancel)=\"closeTaskEditor()\"\n            (onTaskDone)=\"onTaskDone($event)\"\n            (onTaskDuring)=\"onTaskDuring($event)\"\n    ></tdl-editor>\n</aside>\n<div *ngIf=\"!isLoaded\"\n     class=\"loader\">\n    <div class=\"spinner-border\" role=\"status\">\n        <span class=\"sr-only\">Loading...</span>\n    </div>\n</div>\n<div *ngIf=\"isLoaded\"\n      class=\"home\">\n    <div class=\"view\">\n        <div\n            class=\"view_icon\"\n            *ngIf=\"viewList === true\"\n            (click)=\"onViewGrid()\"\n        >\n            <img src=\"../../assets/images/icons/list.svg\">\n        </div>\n        <div\n            class=\"view_icon\"\n            *ngIf=\"viewList === false\"\n            (click)=\"onViewList()\"\n        >\n            <img src=\"../../assets/images/icons/grid.svg\">\n        </div>\n\n    </div>\n    <div class=\"toDo\">\n        <h2>\n            To Do <span>({{duringTasks.length}})</span>\n        </h2>\n        <ul\n            class=\"list\"\n        >\n            <li\n                class=\"iteam\"\n                [ngClass]=\"{'grid_style': !viewList}\"\n                *ngFor=\"let t of duringTasks\"\n                [ngStyle]=\"{'background-color': t.color}\"\n            >\n\n                <div class=\"iteam__icon\">\n                    <div>\n                        <span>{{t.name[0].toUpperCase()}}</span>\n                    </div>\n                </div>\n                <div [ngStyle]=\"{'background-color': t.color}\" class=\"iteam__content\">\n                    <div class=\"iteam__info\">\n                        <div\n                                class=\"iteam__priority\"\n                                *ngIf=\"t.priority === 'hight'\"\n                        >\n                            <img src=\"../../assets/images/icons/up-arrow.svg\">\n                            <span>Hight Priority</span>\n                        </div>\n                        <div\n                                class=\"iteam__priority\"\n                                *ngIf=\"t.priority === 'medium'\"\n                        >\n                            <span>- Medium Priority</span>\n                        </div>\n                        <div\n                                class=\"iteam__priority\"\n                                *ngIf=\"t.priority === 'low'\"\n                        >\n                            <img src=\"../../assets/images/icons/arrow-down.svg\">\n                            <span>Low Priority</span>\n                        </div>\n                        <div\n                                class=\"iteam__date\"\n                                *ngIf=\"t.data !== ''\"\n                        >\n                            <img src=\"../../assets/images/icons/clock.svg\">\n                            <span>{{t.data | date:\"d MMM y h:mm\"}}</span>\n                        </div>\n                    </div>\n                    <h3>\n                        {{t.name}}\n                    </h3>\n                    <p>\n                        {{t.description}}\n                    </p>\n                    <div\n                        class=\"action\"\n                        (click)=\"openEditor(t)\"\n                    >\n                        <img src=\"../../assets/images/icons/ellipsis.svg\">\n\n                    </div>\n                </div>\n            </li>\n\n        </ul>\n    </div>\n    <div class=\"toDo\">\n        <h2>\n            Completed <span>({{doneTasks.length}})</span>\n        </h2>\n        <ul\n            class=\"list\"\n        >\n            <li\n                    class=\"iteam\"\n                    [ngClass]=\"{'grid_style': !viewList}\"\n                    *ngFor=\"let t of doneTasks\"\n                    [ngStyle]=\"{'background-color': t.color}\"\n                    [@fade]= \"true\"\n            >\n\n                <div class=\"iteam__icon\">\n                    <div>\n                        <span>{{t.name[0].toUpperCase()}}</span>\n                    </div>\n                </div>\n                <div class=\"iteam__content\">\n                    <div class=\"iteam__info\">\n                        <div\n                                class=\"iteam__priority\"\n                                *ngIf=\"t.priority === 'hight'\"\n                        >\n                            <img src=\"../../assets/images/icons/up-arrow.svg\">\n                            <span>Hight Priority</span>\n                        </div>\n                        <div\n                                class=\"iteam__priority\"\n                                *ngIf=\"t.priority === 'medium'\"\n                        >\n                            <span>- Medium Priority</span>\n                        </div>\n                        <div\n                                class=\"iteam__priority\"\n                                *ngIf=\"t.priority === 'low'\"\n                        >\n                            <img src=\"../../assets/images/icons/arrow-down.svg\">\n                            <span>Low Priority</span>\n                        </div>\n                        <div\n                                class=\"iteam__date\"\n                                *ngIf=\"t.data !== ''\"\n                        >\n                            <img src=\"../../assets/images/icons/clock.svg\">\n                            <span>{{t.data | date:\"d MMM y h:mm\"}}</span>\n                        </div>\n                    </div>\n                    <h3>\n                        {{t.name}}\n                    </h3>\n                    <p>\n                        {{t.description}}\n                    </p>\n                    <div\n                            class=\"action\"\n                            (click)=\"openEditor(t)\"\n                    >\n                        <img src=\"../../assets/images/icons/ellipsis.svg\">\n\n                    </div>\n                </div>\n            </li>\n\n        </ul>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/system/settings/settings.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/system/settings/settings.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<header>\n    <div class=\"header\">\n\n        <div class=\"button button_profile\">\n            <div class=\"dropdown\">\n                <div class=\"dropdown-toggle\" id=\"dropdownMenuButton2\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                    <div class=\"ava\">\n                        <img src=\"https://img.freepik.com/free-photo/_53876-40306.jpg?size=626&ext=jpg\">\n                    </div>\n                </div>\n                <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"dropdownMenuButton2\">\n                    <div class=\"dropdown-item\" (click)=\"onLogOut()\">Log out {{userName}}</div>\n                </div>\n            </div>\n            <div class=\"chevron active\">\n                <img src=\"../../assets/images/icons/down-chevron.svg\">\n            </div>\n            <div class=\"chevron\" aria-labelledby=\"dropdownMenuButton2\">\n                <img src=\"../../assets/images/icons/up-chevron.svg\">\n            </div>\n        </div>\n    </div>\n</header>\n<div class=\"home\">\n    <div class=\"toDo\">\n        <h2>\n            Setting\n        </h2>\n\n        <ul class=\"setting_list\">\n            <li class=\"setting_item\">\n                <div class=\"card\" style=\"width: 18rem;\">\n                    <div class=\"card-body\">\n                        <h5 class=\"card-title\">Blue theme</h5>\n                        <div class=\"bloc blue\"></div>\n                        <div class=\"btn  btn-primary\"\n                            (click)=\"onBlueTheme()\">Blue theme</div>\n                    </div>\n                </div>\n            </li>\n            <li class=\"setting_item\">\n                <div class=\"card\" style=\"width: 18rem;\">\n                    <div class=\"card-body\">\n                        <h5 class=\"card-title\">Green theme</h5>\n                        <div class=\"bloc green\"></div>\n                        <div class=\"btn  btn-primary\"\n                             (click)=\"onGreenTheme()\">Green theme</div>\n                    </div>\n                </div>\n            </li>\n        </ul>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/system/system.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/system/system.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"system_window\">\n    <div class=\"sideBar green-them\"\n         [ngClass]=\"{'hide': !isSideBarVisible, 'green-them': isGreenThem}\" >\n      <aside >\n        <div\n            class=\"button button_menu\"\n            (click)=\"toggleSideBar()\"\n        >\n          <div class=\"chevron\" [ngClass]=\"{'active': isSideBarVisible}\">\n            <img src=\"../../assets/images/icons/left-chevron.svg\">\n          </div>\n          <div class=\"chevron \"[ngClass]=\"{'active': !isSideBarVisible}\">\n            <img src=\"../../assets/images/icons/right-chevron.svg\">\n          </div>\n          <img src=\"../../assets/images/icons/menu-button.svg\">\n        </div>\n        <div class=\"side__header\" >\n          <div class=\"side__logo\">\n            <!--<img src=\"../../assets/images/logo.svg\">-->\n          </div>\n          <h1>ToDo</h1>\n        </div>\n        <div class=\"side_section\">\n          <ul class=\"side_menu\">\n            <li class=\"side_menu__iteam \" routerLinkActive=\"active\">\n              <div class=\"side_menu__iteam__icon\">\n                <img src=\"../../assets/images/icons/home.svg\">\n              </div>\n              <a [routerLink]=\"['/home']\">Home</a>\n            </li>\n            <li class=\"side_menu__iteam\" routerLinkActive=\"active\">\n              <div class=\"side_menu__iteam__icon\">\n                <img src=\"../../assets/images/icons/settings.svg\">\n              </div>\n              <a [routerLink]=\"['/setting']\">Setting</a>\n            </li>\n          </ul>\n        </div>\n      </aside>\n    </div>\n    <div class=\"content\">\n          <section>\n              <router-outlet\n              (blueThem)=\"blueThem()\"\n              (greenTheme)=\"greenThem()\"\n              ></router-outlet>\n          </section>\n    </div>\n</div>\n\n\n\n\n\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'cars-mileage';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'tdl-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _auth_auth_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth/auth.module */ "./src/app/auth/auth.module.ts");
/* harmony import */ var _system_system_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./system/system.module */ "./src/app/system/system.module.ts");
/* harmony import */ var _shared_services_task_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/services/task.service */ "./src/app/shared/services/task.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _shared_services_auth_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/services/auth.guard */ "./src/app/shared/services/auth.guard.ts");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");












let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _auth_auth_module__WEBPACK_IMPORTED_MODULE_5__["AuthModule"],
            _system_system_module__WEBPACK_IMPORTED_MODULE_6__["SystemModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"],
        ],
        providers: [
            _shared_services_task_service__WEBPACK_IMPORTED_MODULE_7__["TaskService"],
            _shared_services_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"],
            _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthService"],
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/auth/auth-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/auth/auth-routing.module.ts ***!
  \*********************************************/
/*! exports provided: AuthRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRoutingModule", function() { return AuthRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _auth_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.component */ "./src/app/auth/auth.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _registration_registration_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./registration/registration.component */ "./src/app/auth/registration/registration.component.ts");






const routes = [
    { path: '', component: _auth_component__WEBPACK_IMPORTED_MODULE_3__["AuthComponent"], children: [
            { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
            { path: 'registration', component: _registration_registration_component__WEBPACK_IMPORTED_MODULE_5__["RegistrationComponent"] }
        ] }
];
let AuthRoutingModule = class AuthRoutingModule {
};
AuthRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AuthRoutingModule);



/***/ }),

/***/ "./src/app/auth/auth.component.scss":
/*!******************************************!*\
  !*** ./src/app/auth/auth.component.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".auth {\n  min-height: 100vh;\n  display: block;\n  border: #1f7e9a solid 2px;\n  background-color: #4f5f6f;\n}\n\n.auth__card {\n  background-color: white;\n  margin: 10% auto 0 auto;\n  max-width: 450px;\n  min-height: 330px;\n  padding: 15px;\n}\n\n.auth__card header {\n  display: flex;\n  align-items: center;\n  color: #9ba8b5;\n}\n\n.auth__card header .logo .side__logo {\n  border: solid 10px #0e1a35;\n  border-radius: 50%;\n  height: 40px;\n  width: 40px;\n}\n\n.auth__card header h1 {\n  margin-left: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9FOlxcTXlTZWxmXFzQnNC+0Y8g0L/RgNCw0LrRgtC40LrQsCBBTkdcXHRvRG9MaXN0XFx0b0RvTGlzdC9zcmNcXGFwcFxcYXV0aFxcYXV0aC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXV0aC9hdXRoLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtBQ0NGOztBRENBO0VBQ0UsdUJBQUE7RUFFQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0FDQ0Y7O0FEQUU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FDRUo7O0FEQU07RUFDRSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNFUjs7QURDSTtFQUNFLGlCQUFBO0FDQ04iLCJmaWxlIjoic3JjL2FwcC9hdXRoL2F1dGguY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXV0aCB7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgYm9yZGVyOiAjMWY3ZTlhIHNvbGlkIDJweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGY1ZjZmO1xyXG59XHJcbi5hdXRoX19jYXJkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuXHJcbiAgbWFyZ2luOiAxMCUgYXV0byAwIGF1dG87XHJcbiAgbWF4LXdpZHRoOjQ1MHB4O1xyXG4gIG1pbi1oZWlnaHQ6MzMwcHg7XHJcbiAgcGFkZGluZzogMTVweDtcclxuICBoZWFkZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogIzliYThiNTtcclxuICAgIC5sb2dvIHtcclxuICAgICAgLnNpZGVfX2xvZ28ge1xyXG4gICAgICAgIGJvcmRlcjogc29saWQgMTBweCAjMGUxYTM1O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGgxIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4iLCIuYXV0aCB7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBibG9jaztcbiAgYm9yZGVyOiAjMWY3ZTlhIHNvbGlkIDJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRmNWY2Zjtcbn1cblxuLmF1dGhfX2NhcmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luOiAxMCUgYXV0byAwIGF1dG87XG4gIG1heC13aWR0aDogNDUwcHg7XG4gIG1pbi1oZWlnaHQ6IDMzMHB4O1xuICBwYWRkaW5nOiAxNXB4O1xufVxuLmF1dGhfX2NhcmQgaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6ICM5YmE4YjU7XG59XG4uYXV0aF9fY2FyZCBoZWFkZXIgLmxvZ28gLnNpZGVfX2xvZ28ge1xuICBib3JkZXI6IHNvbGlkIDEwcHggIzBlMWEzNTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiA0MHB4O1xufVxuLmF1dGhfX2NhcmQgaGVhZGVyIGgxIHtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/auth/auth.component.ts":
/*!****************************************!*\
  !*** ./src/app/auth/auth.component.ts ***!
  \****************************************/
/*! exports provided: AuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthComponent", function() { return AuthComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AuthComponent = class AuthComponent {
    constructor() { }
    ngOnInit() {
    }
};
AuthComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'tdl-auth',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./auth.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/auth.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./auth.component.scss */ "./src/app/auth/auth.component.scss")).default]
    })
], AuthComponent);



/***/ }),

/***/ "./src/app/auth/auth.module.ts":
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth-routing.module */ "./src/app/auth/auth-routing.module.ts");
/* harmony import */ var _auth_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth.component */ "./src/app/auth/auth.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _registration_registration_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./registration/registration.component */ "./src/app/auth/registration/registration.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");








let AuthModule = class AuthModule {
};
AuthModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_auth_component__WEBPACK_IMPORTED_MODULE_4__["AuthComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"], _registration_registration_component__WEBPACK_IMPORTED_MODULE_6__["RegistrationComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _auth_routing_module__WEBPACK_IMPORTED_MODULE_3__["AuthRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
        ]
    })
], AuthModule);



/***/ }),

/***/ "./src/app/auth/login/login.component.scss":
/*!*************************************************!*\
  !*** ./src/app/auth/login/login.component.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".form-help-text {\n  color: darkred;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9sb2dpbi9FOlxcTXlTZWxmXFzQnNC+0Y8g0L/RgNCw0LrRgtC40LrQsCBBTkdcXHRvRG9MaXN0XFx0b0RvTGlzdC9zcmNcXGFwcFxcYXV0aFxcbG9naW5cXGxvZ2luLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hdXRoL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0UsY0FBQTtBQ0ZGIiwiZmlsZSI6InNyYy9hcHAvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZXh0LW11dGVkIHtcclxuICAvL3RleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uZm9ybS1oZWxwLXRleHR7XHJcbiAgY29sb3I6IGRhcmtyZWQ7XHJcbn1cclxuIiwiLmZvcm0taGVscC10ZXh0IHtcbiAgY29sb3I6IGRhcmtyZWQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/auth/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/user.service */ "./src/app/shared/services/user.service.ts");
/* harmony import */ var _shared_module_message_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/module/message.model */ "./src/app/shared/module/message.model.ts");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");








let LoginComponent = class LoginComponent {
    constructor(authService, usersServise, title, router) {
        this.authService = authService;
        this.usersServise = usersServise;
        this.title = title;
        this.router = router;
    }
    ngOnInit() {
        this.title.setTitle('Login');
        this.message = new _shared_module_message_model__WEBPACK_IMPORTED_MODULE_5__["Message"]('', '');
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]),
            'password': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)])
        });
    }
    onSubmit() {
        const email = this.loginForm.value.email + '';
        this.usersServise.getUserByEmail(email)
            .subscribe((resp) => {
            const user = resp[0];
            console.log('user=', user);
            if (user) {
                if (user.password === this.loginForm.value.password) {
                    this.message.text = '';
                    window.localStorage.setItem('user', JSON.stringify(user));
                    this.authService.login();
                    this.router.navigate(['home']);
                    console.log('has log in');
                }
                else {
                    this.message.showMessage('danger', 'Password is wrong');
                }
            }
            else {
                this.message.showMessage('danger', 'Email does not exist');
            }
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
    { type: _shared_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'tdl-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.scss */ "./src/app/auth/login/login.component.scss")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/auth/registration/registration.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/auth/registration/registration.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".text-muted {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9yZWdpc3RyYXRpb24vRTpcXE15U2VsZlxc0JzQvtGPINC/0YDQsNC60YLQuNC60LAgQU5HXFx0b0RvTGlzdFxcdG9Eb0xpc3Qvc3JjXFxhcHBcXGF1dGhcXHJlZ2lzdHJhdGlvblxccmVnaXN0cmF0aW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hdXRoL3JlZ2lzdHJhdGlvbi9yZWdpc3RyYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvYXV0aC9yZWdpc3RyYXRpb24vcmVnaXN0cmF0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRleHQtbXV0ZWQge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4iLCIudGV4dC1tdXRlZCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/auth/registration/registration.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/auth/registration/registration.component.ts ***!
  \*************************************************************/
/*! exports provided: RegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationComponent", function() { return RegistrationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/user.service */ "./src/app/shared/services/user.service.ts");
/* harmony import */ var _shared_module_user_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/module/user.model */ "./src/app/shared/module/user.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_module_message_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/module/message.model */ "./src/app/shared/module/message.model.ts");








let RegistrationComponent = class RegistrationComponent {
    constructor(userService, router, title) {
        this.userService = userService;
        this.router = router;
        this.title = title;
    }
    ngOnInit() {
        this.title.setTitle('Registration');
        this.message = new _shared_module_message_model__WEBPACK_IMPORTED_MODULE_7__["Message"]('', '');
        this.regForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email], [this.forbiddenEmails.bind(this)]),
            'password': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]),
            'name': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^[А-Я]{1}[а-я]{1,20}$/)]),
        });
    }
    onSubmit() {
        console.log('this.regForm.value=', this.regForm.value);
        const { email, password, name } = this.regForm.value;
        const user = new _shared_module_user_model__WEBPACK_IMPORTED_MODULE_5__["User"](email, password, name);
        this.userService.createNewUser(user)
            .subscribe(() => {
            console.log('added');
            this.router.navigate(['/login']);
        });
    }
    forbiddenEmails(control) {
        console.log(control, control.value, this.regForm);
        return new Promise((resolve, reject) => {
            this.userService.getUserByEmail(control.value)
                .subscribe((users) => {
                if (users[0]) {
                    resolve({ forbiddenEmails: true });
                }
                else {
                    resolve(null);
                }
            });
        });
    }
};
RegistrationComponent.ctorParameters = () => [
    { type: _shared_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"] }
];
RegistrationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'tdl-registration',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./registration.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/registration/registration.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./registration.component.scss */ "./src/app/auth/registration/registration.component.scss")).default]
    })
], RegistrationComponent);



/***/ }),

/***/ "./src/app/shared/animation/fade.animation.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/animation/fade.animation.ts ***!
  \****************************************************/
/*! exports provided: fadeStateTrigger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeStateTrigger", function() { return fadeStateTrigger; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");


const fadeStateTrigger = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('fade', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            opacity: 0
        }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(500)
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(300, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
        opacity: 0
    })))
]);


/***/ }),

/***/ "./src/app/shared/core/base-api.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/core/base-api.ts ***!
  \*****************************************/
/*! exports provided: BaseApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseApi", function() { return BaseApi; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let BaseApi = class BaseApi {
    constructor(http) {
        this.http = http;
        this.baseUrl = 'http://localhost:3000/';
    }
    getUrl(url = '') {
        return this.baseUrl + url;
    }
    get(url) {
        url = this.getUrl(url);
        console.log('url=', url);
        return this.http.get(url);
    }
    post(url, data) {
        url = this.getUrl(url);
        return this.http.post(url, data);
    }
    put(url, data) {
        url = this.getUrl(url);
        return this.http.put(url, data);
    }
    delete(url, key, data) {
        url = this.getUrl(url);
        return this.http.delete(url, {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set(key, data)
        });
    }
};
BaseApi.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
BaseApi = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], BaseApi);



/***/ }),

/***/ "./src/app/shared/module/message.model.ts":
/*!************************************************!*\
  !*** ./src/app/shared/module/message.model.ts ***!
  \************************************************/
/*! exports provided: Message */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Message", function() { return Message; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Message {
    constructor(type, text) {
        this.type = type;
        this.text = text;
    }
    showMessage(type, text) {
        this.type = type;
        this.text = text;
        setTimeout(() => {
            this.text = '';
            console.log('timer');
        }, 3000);
    }
}


/***/ }),

/***/ "./src/app/shared/module/task.module.ts":
/*!**********************************************!*\
  !*** ./src/app/shared/module/task.module.ts ***!
  \**********************************************/
/*! exports provided: Task */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Task", function() { return Task; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Task {
    constructor(name, description, priority, status, data, color, id) {
        this.name = name;
        this.description = description;
        this.priority = priority;
        this.status = status;
        this.data = data;
        this.color = color;
        this.id = id;
    }
}


/***/ }),

/***/ "./src/app/shared/module/user.model.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/module/user.model.ts ***!
  \*********************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class User {
    constructor(email, password, id) {
        this.email = email;
        this.password = password;
        this.id = id;
    }
}


/***/ }),

/***/ "./src/app/shared/services/auth.guard.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/services/auth.guard.ts ***!
  \***********************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/shared/services/auth.service.ts");




let AuthGuard = class AuthGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate(route, state) {
        if (this.authService.isLoggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login'], {
                queryParams: {
                    accessDenied: true
                }
            });
            return false;
        }
    }
    canActivateChild(childRoute, state) {
        return this.canActivate(childRoute, state);
    }
};
AuthGuard.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AuthGuard);



/***/ }),

/***/ "./src/app/shared/services/auth.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/auth.service.ts ***!
  \*************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AuthService = class AuthService {
    constructor() {
        this.isAuthenticated = false;
    }
    login() {
        this.isAuthenticated = true;
    }
    logout() {
        this.isAuthenticated = false;
        window.localStorage.clear();
    }
    isLoggedIn() {
        return this.isAuthenticated;
    }
};
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    })
], AuthService);



/***/ }),

/***/ "./src/app/shared/services/setting.service.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/services/setting.service.ts ***!
  \****************************************************/
/*! exports provided: SettingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingService", function() { return SettingService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SettingService = class SettingService {
    constructor() {
        this.isGreenTheme = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    onGreenTheme() {
        this.isGreenTheme.emit(true);
    }
    onBlueTheme() {
        this.isGreenTheme.emit(false);
    }
};
SettingService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], SettingService);



/***/ }),

/***/ "./src/app/shared/services/task.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/task.service.ts ***!
  \*************************************************/
/*! exports provided: TaskService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskService", function() { return TaskService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _core_base_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/base-api */ "./src/app/shared/core/base-api.ts");




let TaskService = class TaskService extends _core_base_api__WEBPACK_IMPORTED_MODULE_3__["BaseApi"] {
    constructor(http) {
        super(http);
        this.http = http;
    }
    getTasks() {
        return this.get('tasks');
    }
    addTask(task) {
        console.log('taskservice');
        return this.post('tasks', task);
    }
    editTask(task) {
        return this.put(`tasks/${task.id}`, task);
    }
    deleteTask(task) {
        console.log('delete');
        return this.delete(`tasks/${task.id}`, 'id', task.id);
    }
};
TaskService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
TaskService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], TaskService);



/***/ }),

/***/ "./src/app/shared/services/user.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/user.service.ts ***!
  \*************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_base_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/base-api */ "./src/app/shared/core/base-api.ts");



let UserService = class UserService extends _core_base_api__WEBPACK_IMPORTED_MODULE_2__["BaseApi"] {
    getUserByEmail(email) {
        console.log('email=', `user&email=${email}`);
        return this.get(`users?email=${email}`);
    }
    createNewUser(user) {
        return this.post('users', user);
    }
};
UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], UserService);



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");



let SharedModule = class SharedModule {
};
SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        ],
        exports: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        ],
        declarations: [],
    })
], SharedModule);



/***/ }),

/***/ "./src/app/system/home/creater/creater.component.scss":
/*!************************************************************!*\
  !*** ./src/app/system/home/creater/creater.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".modal.fade.in {\n  display: block;\n  opacity: 1;\n  margin-top: 10px;\n  font-size: 14px;\n}\n.modal.fade.in span, .modal.fade.in label {\n  font-size: 14px;\n}\n.modal.fade.in .btn__grup {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: space-between;\n}\n.modal.fade.in .btn__grup .select {\n  width: 100%;\n  margin: 0 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3lzdGVtL2hvbWUvY3JlYXRlci9FOlxcTXlTZWxmXFzQnNC+0Y8g0L/RgNCw0LrRgtC40LrQsCBBTkdcXHRvRG9MaXN0XFx0b0RvTGlzdC9zcmNcXGFwcFxcc3lzdGVtXFxob21lXFxjcmVhdGVyXFxjcmVhdGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zeXN0ZW0vaG9tZS9jcmVhdGVyL2NyZWF0ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBSUEsZUFBQTtBQ0ZKO0FEREk7RUFDSSxlQUFBO0FDR1I7QURBSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsOEJBQUE7QUNFUjtBRERRO0VBQ0ksV0FBQTtFQUNBLGFBQUE7QUNHWiIsImZpbGUiOiJzcmMvYXBwL3N5c3RlbS9ob21lL2NyZWF0ZXIvY3JlYXRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tb2RhbC5mYWRlLmluIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBzcGFuLCBsYWJlbHtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB9XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAuYnRuX19ncnVwe1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICBmbGV4LXdyYXA6IG5vd3JhcDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgLnNlbGVjdCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgNHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCIubW9kYWwuZmFkZS5pbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBvcGFjaXR5OiAxO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBmb250LXNpemU6IDE0cHg7XG59XG4ubW9kYWwuZmFkZS5pbiBzcGFuLCAubW9kYWwuZmFkZS5pbiBsYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5tb2RhbC5mYWRlLmluIC5idG5fX2dydXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLm1vZGFsLmZhZGUuaW4gLmJ0bl9fZ3J1cCAuc2VsZWN0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMCA0cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/system/home/creater/creater.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/system/home/creater/creater.component.ts ***!
  \**********************************************************/
/*! exports provided: CreaterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreaterComponent", function() { return CreaterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_module_message_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/module/message.model */ "./src/app/shared/module/message.model.ts");
/* harmony import */ var _shared_services_task_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/services/task.service */ "./src/app/shared/services/task.service.ts");
/* harmony import */ var _shared_module_task_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/module/task.module */ "./src/app/shared/module/task.module.ts");





let CreaterComponent = class CreaterComponent {
    constructor(taskService) {
        this.taskService = taskService;
        this.onCreaterCancel = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onTaskAdd = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.types = [
            { type: 'hight', label: 'Hight' },
            { type: 'medium', label: 'Medium' },
            { type: 'low', label: 'Low' }
        ];
        this.colors = [
            { btn: 'light', label: 'White', color: 'white' },
            { btn: 'danger', label: 'Red', color: '#FFE8DC' },
            { btn: 'success', label: 'Green', color: '#ADE7D4' }
        ];
    }
    ngOnInit() {
        this.massage = new _shared_module_message_model__WEBPACK_IMPORTED_MODULE_2__["Message"]('success', '');
    }
    closeCreater() {
        this.onCreaterCancel.emit();
    }
    onSubmit(form) {
        if (form.invalid) {
            if (form.name) {
                this.massage.showMessage('danger', 'Select priority');
            }
            else {
                this.massage.showMessage('danger', 'Enter task name');
            }
            return;
        }
        ;
        console.log("form submit");
        let { name, description, priority, color } = form.value;
        const task = new _shared_module_task_module__WEBPACK_IMPORTED_MODULE_4__["Task"](name, description, priority, "during", new Date(), color);
        this.taskService.addTask(task)
            .subscribe((t) => {
            this.onTaskAdd.emit(t);
        });
    }
};
CreaterComponent.ctorParameters = () => [
    { type: _shared_services_task_service__WEBPACK_IMPORTED_MODULE_3__["TaskService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], CreaterComponent.prototype, "onCreaterCancel", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], CreaterComponent.prototype, "onTaskAdd", void 0);
CreaterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'tdl-creater',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./creater.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/system/home/creater/creater.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./creater.component.scss */ "./src/app/system/home/creater/creater.component.scss")).default]
    })
], CreaterComponent);



/***/ }),

/***/ "./src/app/system/home/editor/editor.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/system/home/editor/editor.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".modal.fade.in {\n  display: block;\n  opacity: 1;\n  margin-top: 10px;\n  font-size: 14px;\n}\n.modal.fade.in span, .modal.fade.in label {\n  font-size: 14px;\n}\n.modal.fade.in .btn__grup {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n}\n.modal.fade.in .btn__grup .select {\n  width: 100%;\n  margin: 4px 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3lzdGVtL2hvbWUvZWRpdG9yL0U6XFxNeVNlbGZcXNCc0L7RjyDQv9GA0LDQutGC0LjQutCwIEFOR1xcdG9Eb0xpc3RcXHRvRG9MaXN0L3NyY1xcYXBwXFxzeXN0ZW1cXGhvbWVcXGVkaXRvclxcZWRpdG9yLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zeXN0ZW0vaG9tZS9lZGl0b3IvZWRpdG9yLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUlBLGVBQUE7QUNGRjtBRERFO0VBQ0UsZUFBQTtBQ0dKO0FEQUU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQ0VKO0FEREk7RUFDRSxXQUFBO0VBQ0EsZUFBQTtBQ0dOIiwiZmlsZSI6InNyYy9hcHAvc3lzdGVtL2hvbWUvZWRpdG9yL2VkaXRvci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tb2RhbC5mYWRlLmluIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBvcGFjaXR5OiAxO1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgc3BhbiwgbGFiZWx7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgfVxyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICAuYnRuX19ncnVwe1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcclxuICAgIC5zZWxlY3Qge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgbWFyZ2luOiA0cHggNHB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIubW9kYWwuZmFkZS5pbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBvcGFjaXR5OiAxO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBmb250LXNpemU6IDE0cHg7XG59XG4ubW9kYWwuZmFkZS5pbiBzcGFuLCAubW9kYWwuZmFkZS5pbiBsYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5tb2RhbC5mYWRlLmluIC5idG5fX2dydXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LXdyYXA6IG5vd3JhcDtcbn1cbi5tb2RhbC5mYWRlLmluIC5idG5fX2dydXAgLnNlbGVjdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDRweCA0cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/system/home/editor/editor.component.ts":
/*!********************************************************!*\
  !*** ./src/app/system/home/editor/editor.component.ts ***!
  \********************************************************/
/*! exports provided: EditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorComponent", function() { return EditorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_module_message_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/module/message.model */ "./src/app/shared/module/message.model.ts");
/* harmony import */ var _shared_services_task_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/services/task.service */ "./src/app/shared/services/task.service.ts");




let EditorComponent = class EditorComponent {
    constructor(taskService) {
        this.taskService = taskService;
        this.onEditorCancel = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onTaskEdit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onTaskRemoved = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onTaskDone = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onTaskDuring = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.types = [
            { type: 'hight', label: 'Hight' },
            { type: 'medium', label: 'Medium' },
            { type: 'low', label: 'Low' }
        ];
        this.colors = [
            { btn: 'light', label: 'White', color: 'white' },
            { btn: 'danger', label: 'Red', color: '#FFE8DC' },
            { btn: 'success', label: 'Green', color: '#ADE7D4' }
        ];
    }
    ngOnInit() {
        this.massage = new _shared_module_message_model__WEBPACK_IMPORTED_MODULE_2__["Message"]('success', '');
        this.editForm = {
            name: this.editTask.name,
            description: this.editTask.description,
            priority: this.editTask.priority,
            color: this.editTask.color
        };
    }
    closeEditor() {
        this.onEditorCancel.emit();
    }
    onSubmit(form) {
        this.editTask.name = form.value.name;
        this.editTask.description = form.value.description;
        this.editTask.priority = form.value.priority;
        this.editTask.color = form.value.color;
        this.taskService.editTask(this.editTask)
            .subscribe(() => {
            this.onTaskEdit.emit(this.editTask);
        });
    }
    removeTask() {
        console.log('remove');
        this.taskService.deleteTask(this.editTask)
            .subscribe(() => {
            console.log('removed');
            this.onTaskRemoved.emit(this.editTask);
        });
    }
    doneTask() {
        this.editTask.status = 'done';
        this.taskService.editTask(this.editTask)
            .subscribe(() => {
            this.onTaskDone.emit(this.editTask);
        });
    }
    duringTask() {
        this.editTask.status = 'during';
        this.taskService.editTask(this.editTask)
            .subscribe(() => {
            this.onTaskDuring.emit(this.editTask);
        });
    }
};
EditorComponent.ctorParameters = () => [
    { type: _shared_services_task_service__WEBPACK_IMPORTED_MODULE_3__["TaskService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], EditorComponent.prototype, "editTask", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], EditorComponent.prototype, "onEditorCancel", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], EditorComponent.prototype, "onTaskEdit", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], EditorComponent.prototype, "onTaskRemoved", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], EditorComponent.prototype, "onTaskDone", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], EditorComponent.prototype, "onTaskDuring", void 0);
EditorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'tdl-editor',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./editor.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/system/home/editor/editor.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./editor.component.scss */ "./src/app/system/home/editor/editor.component.scss")).default]
    })
], EditorComponent);



/***/ }),

/***/ "./src/app/system/home/home.component.scss":
/*!*************************************************!*\
  !*** ./src/app/system/home/home.component.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".header {\n  display: flex;\n  justify-content: flex-end;\n  align-items: flex-start;\n  padding: 0 20px 0px 60px;\n  background-color: #fff;\n}\n.header .button {\n  margin: 15px 5px;\n  padding: 10px;\n  position: relative;\n}\n.header .button .dropdown-menu {\n  margin-top: 20px;\n}\n.header .button img {\n  height: 30px;\n}\n.header .button_filter form {\n  padding-left: 15px;\n}\n.header .button_add .btn {\n  width: 80px;\n  padding: 6px;\n  font-size: 12px;\n}\n.header .button_profile {\n  position: relative;\n}\n.header .button_profile .ava img {\n  border-radius: 50%;\n  width: 30px;\n}\n.header .button_profile .chevron {\n  display: none;\n  position: absolute;\n  top: 20px;\n  left: 48px;\n}\n.header .button_profile .chevron img {\n  width: 9px;\n  height: 9px;\n}\n.header .button_profile .active {\n  display: block;\n}\n.loader {\n  font-size: 16px;\n  margin-top: 40px;\n  text-align: center;\n}\n.home {\n  background-color: #f6f7fa;\n  padding: 20px;\n  position: relative;\n  font-size: 16px;\n}\n.home .view {\n  position: absolute;\n  top: 20px;\n  right: 40px;\n}\n.home .view .view_icon img {\n  width: 20px;\n  height: 20px;\n}\n@media (max-width: 576px) {\n  .home .view {\n    display: none;\n  }\n}\n.home .toDo h2 {\n  display: inline-block;\n  margin-top: 10px;\n  color: #000000;\n}\n.home .toDo h2 span {\n  color: #8693b0;\n}\n.home .toDo .list {\n  display: flex;\n  flex-wrap: wrap;\n  list-style: none;\n  padding: 0;\n}\n.home .toDo .list .iteam {\n  background-color: #ffffff;\n  height: 120px;\n  padding: 15px;\n  padding-right: 30px;\n  display: flex;\n  justify-content: flex-start;\n  border: #f6f7fa solid 2px;\n  position: relative;\n  width: 100%;\n}\n.home .toDo .list .iteam .iteam__icon {\n  padding: 15px;\n}\n.home .toDo .list .iteam .iteam__icon div {\n  height: 50px;\n  width: 50px;\n  border-radius: 50%;\n  background-color: #5584ff;\n  display: flex;\n  justify-content: center;\n}\n.home .toDo .list .iteam .iteam__icon div span {\n  padding-top: 4px;\n  color: white;\n  font-size: 26px;\n  vertical-align: center;\n}\n.home .toDo .list .iteam .iteam__content {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n}\n.home .toDo .list .iteam .iteam__content .iteam__info {\n  align-self: flex-end;\n  display: flex;\n  justify-content: flex-end;\n}\n.home .toDo .list .iteam .iteam__content .iteam__info .iteam__priority {\n  display: flex;\n  align-content: center;\n}\n.home .toDo .list .iteam .iteam__content .iteam__info .iteam__priority img {\n  margin: 3px;\n  width: 10px;\n  height: 10px;\n}\n.home .toDo .list .iteam .iteam__content .iteam__info .iteam__priority span {\n  font-size: 10px;\n  color: black;\n  font-weight: bold;\n}\n.home .toDo .list .iteam .iteam__content .iteam__info .iteam__date {\n  display: flex;\n  align-content: center;\n}\n.home .toDo .list .iteam .iteam__content .iteam__info .iteam__date img {\n  margin: 3px;\n  width: 10px;\n  height: 10px;\n}\n.home .toDo .list .iteam .iteam__content .iteam__info .iteam__date span {\n  font-size: 10px;\n  color: #aeb8ca;\n}\n.home .toDo .list .iteam .iteam__content h3 {\n  font-size: 20px;\n  margin-top: 5px;\n}\n.home .toDo .list .iteam .iteam__content p {\n  height: 40px;\n  font-size: 14px;\n  color: #4f5f6f;\n  overflow: hidden;\n}\n.home .toDo .list .iteam .iteam__content .action {\n  padding: 7px;\n  position: absolute;\n  top: 50px;\n  right: 5px;\n}\n.home .toDo .list .iteam .iteam__content .action img {\n  height: 20px;\n}\n.home .toDo .list .action_menu {\n  position: fixed;\n  top: 0;\n  left: 50px;\n  width: 50px;\n  display: inherit;\n  flex-direction: column;\n}\n.home .toDo .list .action_menu button {\n  width: 50px;\n}\n@media (min-width: 576px) {\n  .home .toDo .list .grid_style {\n    flex-direction: column;\n    align-items: center;\n    width: 200px;\n    height: 220px;\n  }\n  .home .toDo .list .grid_style .iteam__info {\n    min-height: 30px;\n  }\n}\n.toDo__list {\n  padding: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3lzdGVtL2hvbWUvRTpcXE15U2VsZlxc0JzQvtGPINC/0YDQsNC60YLQuNC60LAgQU5HXFx0b0RvTGlzdFxcdG9Eb0xpc3Qvc3JjXFxhcHBcXHN5c3RlbVxcaG9tZVxcaG9tZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc3lzdGVtL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSx5QkFBQTtFQUNBLHVCQUFBO0VBQ0Esd0JBQUE7RUFDQSxzQkFBQTtBQ0NGO0FEQUU7RUFJRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQ0RKO0FESkk7RUFDRSxnQkFBQTtBQ01OO0FEREk7RUFDRSxZQUFBO0FDR047QURDSTtFQUNFLGtCQUFBO0FDQ047QURNSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ0pOO0FET0U7RUFDRSxrQkFBQTtBQ0xKO0FET007RUFDRSxrQkFBQTtFQUNBLFdBQUE7QUNMUjtBRFFJO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUNOTjtBRE9NO0VBQ0UsVUFBQTtFQUNBLFdBQUE7QUNMUjtBRFFJO0VBQ0UsY0FBQTtBQ05OO0FEV0E7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ1JGO0FEVUE7RUFDRSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNQRjtBRFNFO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBQ1BKO0FEU007RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ1BSO0FEWUU7RUFDRTtJQUNFLGFBQUE7RUNWSjtBQUNGO0FEYUk7RUFDRSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ1hOO0FEWU07RUFDRSxjQUFBO0FDVlI7QURhSTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0FDWE47QURhTTtFQUNFLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSwyQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FDWFI7QURZUTtFQUNFLGFBQUE7QUNWVjtBRFdVO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FDVFo7QURXWTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtBQ1RkO0FEYVE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0FDWFY7QURZVTtFQUNFLG9CQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0FDVlo7QURXWTtFQUNFLGFBQUE7RUFDQSxxQkFBQTtBQ1RkO0FEVWM7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNSaEI7QURVYztFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUNSaEI7QURXWTtFQUNFLGFBQUE7RUFDQSxxQkFBQTtBQ1RkO0FEV2M7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNUaEI7QURZYztFQUVFLGVBQUE7RUFDQSxjQUFBO0FDWGhCO0FEZVU7RUFDRSxlQUFBO0VBQ0EsZUFBQTtBQ2JaO0FEZVU7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ2JaO0FEZ0JVO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUNkWjtBRGVZO0VBQ0UsWUFBQTtBQ2JkO0FEbUJNO0VBQ0UsZUFBQTtFQUNBLE1BQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7QUNqQlI7QURrQlE7RUFDRSxXQUFBO0FDaEJWO0FEbUJNO0VBQ0U7SUFDRSxzQkFBQTtJQUNBLG1CQUFBO0lBQ0EsWUFBQTtJQUNBLGFBQUE7RUNqQlI7RURtQlE7SUFDRSxnQkFBQTtFQ2pCVjtBQUNGO0FEd0JBO0VBQ0UsVUFBQTtBQ3JCRiIsImZpbGUiOiJzcmMvYXBwL3N5c3RlbS9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVye1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICBwYWRkaW5nOiAwIDIwcHggMHB4IDYwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAuYnV0dG9ue1xyXG4gICAgLmRyb3Bkb3duLW1lbnV7XHJcbiAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICB9XHJcbiAgICBtYXJnaW46IDE1cHggNXB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGltZ3tcclxuICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICAuYnV0dG9uX2ZpbHRlciB7XHJcbiAgICBmb3JtIHtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gICAgfVxyXG4gIH1cclxuICAuYnV0dG9uX3NvcnRpbmd7XHJcblxyXG4gIH1cclxuICAuYnV0dG9uX2FkZHtcclxuICAgIC5idG57XHJcbiAgICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgICBwYWRkaW5nOiA2cHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIH1cclxuICB9XHJcbiAgLmJ1dHRvbl9wcm9maWxle1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgLmF2YXtcclxuICAgICAgaW1ne1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICB3aWR0aDogMzBweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmNoZXZyb257XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiAyMHB4O1xyXG4gICAgICBsZWZ0OiA0OHB4O1xyXG4gICAgICBpbWcge1xyXG4gICAgICAgIHdpZHRoOiA5cHg7XHJcbiAgICAgICAgaGVpZ2h0OiA5cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5hY3RpdmV7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmxvYWRlcntcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgbWFyZ2luLXRvcDogNDBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmhvbWV7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjdmYTtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBmb250LXNpemU6IDE2cHg7XHJcblxyXG4gIC52aWV3e1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAyMHB4O1xyXG4gICAgcmlnaHQ6IDQwcHg7XHJcbiAgICAudmlld19pY29ue1xyXG4gICAgICBpbWd7XHJcbiAgICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gIH1cclxuICBAbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcclxuICAgIC52aWV3e1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxuICAudG9Eb3tcclxuICAgIGgye1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgICBzcGFue1xyXG4gICAgICAgIGNvbG9yOiAjODY5M2IwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAubGlzdHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICBwYWRkaW5nOiAwO1xyXG5cclxuICAgICAgLml0ZWFte1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgaGVpZ2h0OiAxMjBweDtcclxuICAgICAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDMwcHg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgYm9yZGVyOiAjZjZmN2ZhIHNvbGlkIDJweDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgLml0ZWFtX19pY29ue1xyXG4gICAgICAgICAgcGFkZGluZzogMTVweDtcclxuICAgICAgICAgIGRpdntcclxuICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogNTBweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU4NGZmO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgICAgIHNwYW57XHJcbiAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDRweDtcclxuICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAyNnB4O1xyXG4gICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLml0ZWFtX19jb250ZW50e1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIC5pdGVhbV9faW5mb3tcclxuICAgICAgICAgICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICAgICAgICAgIC5pdGVhbV9fcHJpb3JpdHl7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgaW1ne1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAzcHg7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTBweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTBweDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgc3BhbntcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuaXRlYW1fX2RhdGV7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gICAgICAgICAgICAgIGltZ3tcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogM3B4O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwcHg7XHJcblxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBzcGFue1xyXG5cclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjYWViOGNhO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaDN7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcHtcclxuICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNGY1ZjZmO1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5hY3Rpb257XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDdweDtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6IDUwcHg7XHJcbiAgICAgICAgICAgIHJpZ2h0OiA1cHg7XHJcbiAgICAgICAgICAgIGltZ3tcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC5hY3Rpb25fbWVudXtcclxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgdG9wOjA7XHJcbiAgICAgICAgbGVmdDogNTBweDtcclxuICAgICAgICB3aWR0aDogNTBweDtcclxuICAgICAgICBkaXNwbGF5OiBpbmhlcml0O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgYnV0dG9ue1xyXG4gICAgICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkge1xyXG4gICAgICAgIC5ncmlkX3N0eWxlIHtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiAyMjBweDtcclxuXHJcbiAgICAgICAgICAuaXRlYW1fX2luZm8ge1xyXG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLnRvRG9fX2xpc3Qge1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbiIsIi5oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgcGFkZGluZzogMCAyMHB4IDBweCA2MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuLmhlYWRlciAuYnV0dG9uIHtcbiAgbWFyZ2luOiAxNXB4IDVweDtcbiAgcGFkZGluZzogMTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmhlYWRlciAuYnV0dG9uIC5kcm9wZG93bi1tZW51IHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cbi5oZWFkZXIgLmJ1dHRvbiBpbWcge1xuICBoZWlnaHQ6IDMwcHg7XG59XG4uaGVhZGVyIC5idXR0b25fZmlsdGVyIGZvcm0ge1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG59XG4uaGVhZGVyIC5idXR0b25fYWRkIC5idG4ge1xuICB3aWR0aDogODBweDtcbiAgcGFkZGluZzogNnB4O1xuICBmb250LXNpemU6IDEycHg7XG59XG4uaGVhZGVyIC5idXR0b25fcHJvZmlsZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5oZWFkZXIgLmJ1dHRvbl9wcm9maWxlIC5hdmEgaW1nIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogMzBweDtcbn1cbi5oZWFkZXIgLmJ1dHRvbl9wcm9maWxlIC5jaGV2cm9uIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDIwcHg7XG4gIGxlZnQ6IDQ4cHg7XG59XG4uaGVhZGVyIC5idXR0b25fcHJvZmlsZSAuY2hldnJvbiBpbWcge1xuICB3aWR0aDogOXB4O1xuICBoZWlnaHQ6IDlweDtcbn1cbi5oZWFkZXIgLmJ1dHRvbl9wcm9maWxlIC5hY3RpdmUge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmxvYWRlciB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWFyZ2luLXRvcDogNDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaG9tZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNmY3ZmE7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuLmhvbWUgLnZpZXcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMjBweDtcbiAgcmlnaHQ6IDQwcHg7XG59XG4uaG9tZSAudmlldyAudmlld19pY29uIGltZyB7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgLmhvbWUgLnZpZXcge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbi5ob21lIC50b0RvIGgyIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBjb2xvcjogIzAwMDAwMDtcbn1cbi5ob21lIC50b0RvIGgyIHNwYW4ge1xuICBjb2xvcjogIzg2OTNiMDtcbn1cbi5ob21lIC50b0RvIC5saXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBwYWRkaW5nOiAwO1xufVxuLmhvbWUgLnRvRG8gLmxpc3QgLml0ZWFtIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgaGVpZ2h0OiAxMjBweDtcbiAgcGFkZGluZzogMTVweDtcbiAgcGFkZGluZy1yaWdodDogMzBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBib3JkZXI6ICNmNmY3ZmEgc29saWQgMnB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmhvbWUgLnRvRG8gLmxpc3QgLml0ZWFtIC5pdGVhbV9faWNvbiB7XG4gIHBhZGRpbmc6IDE1cHg7XG59XG4uaG9tZSAudG9EbyAubGlzdCAuaXRlYW0gLml0ZWFtX19pY29uIGRpdiB7XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IDUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU1ODRmZjtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uaG9tZSAudG9EbyAubGlzdCAuaXRlYW0gLml0ZWFtX19pY29uIGRpdiBzcGFuIHtcbiAgcGFkZGluZy10b3A6IDRweDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDI2cHg7XG4gIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XG59XG4uaG9tZSAudG9EbyAubGlzdCAuaXRlYW0gLml0ZWFtX19jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDEwMCU7XG59XG4uaG9tZSAudG9EbyAubGlzdCAuaXRlYW0gLml0ZWFtX19jb250ZW50IC5pdGVhbV9faW5mbyB7XG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuLmhvbWUgLnRvRG8gLmxpc3QgLml0ZWFtIC5pdGVhbV9fY29udGVudCAuaXRlYW1fX2luZm8gLml0ZWFtX19wcmlvcml0eSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5ob21lIC50b0RvIC5saXN0IC5pdGVhbSAuaXRlYW1fX2NvbnRlbnQgLml0ZWFtX19pbmZvIC5pdGVhbV9fcHJpb3JpdHkgaW1nIHtcbiAgbWFyZ2luOiAzcHg7XG4gIHdpZHRoOiAxMHB4O1xuICBoZWlnaHQ6IDEwcHg7XG59XG4uaG9tZSAudG9EbyAubGlzdCAuaXRlYW0gLml0ZWFtX19jb250ZW50IC5pdGVhbV9faW5mbyAuaXRlYW1fX3ByaW9yaXR5IHNwYW4ge1xuICBmb250LXNpemU6IDEwcHg7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uaG9tZSAudG9EbyAubGlzdCAuaXRlYW0gLml0ZWFtX19jb250ZW50IC5pdGVhbV9faW5mbyAuaXRlYW1fX2RhdGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG59XG4uaG9tZSAudG9EbyAubGlzdCAuaXRlYW0gLml0ZWFtX19jb250ZW50IC5pdGVhbV9faW5mbyAuaXRlYW1fX2RhdGUgaW1nIHtcbiAgbWFyZ2luOiAzcHg7XG4gIHdpZHRoOiAxMHB4O1xuICBoZWlnaHQ6IDEwcHg7XG59XG4uaG9tZSAudG9EbyAubGlzdCAuaXRlYW0gLml0ZWFtX19jb250ZW50IC5pdGVhbV9faW5mbyAuaXRlYW1fX2RhdGUgc3BhbiB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgY29sb3I6ICNhZWI4Y2E7XG59XG4uaG9tZSAudG9EbyAubGlzdCAuaXRlYW0gLml0ZWFtX19jb250ZW50IGgzIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG4uaG9tZSAudG9EbyAubGlzdCAuaXRlYW0gLml0ZWFtX19jb250ZW50IHAge1xuICBoZWlnaHQ6IDQwcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICM0ZjVmNmY7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4uaG9tZSAudG9EbyAubGlzdCAuaXRlYW0gLml0ZWFtX19jb250ZW50IC5hY3Rpb24ge1xuICBwYWRkaW5nOiA3cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MHB4O1xuICByaWdodDogNXB4O1xufVxuLmhvbWUgLnRvRG8gLmxpc3QgLml0ZWFtIC5pdGVhbV9fY29udGVudCAuYWN0aW9uIGltZyB7XG4gIGhlaWdodDogMjBweDtcbn1cbi5ob21lIC50b0RvIC5saXN0IC5hY3Rpb25fbWVudSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiA1MHB4O1xuICB3aWR0aDogNTBweDtcbiAgZGlzcGxheTogaW5oZXJpdDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5ob21lIC50b0RvIC5saXN0IC5hY3Rpb25fbWVudSBidXR0b24ge1xuICB3aWR0aDogNTBweDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkge1xuICAuaG9tZSAudG9EbyAubGlzdCAuZ3JpZF9zdHlsZSB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBoZWlnaHQ6IDIyMHB4O1xuICB9XG4gIC5ob21lIC50b0RvIC5saXN0IC5ncmlkX3N0eWxlIC5pdGVhbV9faW5mbyB7XG4gICAgbWluLWhlaWdodDogMzBweDtcbiAgfVxufVxuXG4udG9Eb19fbGlzdCB7XG4gIHBhZGRpbmc6IDA7XG59Il19 */");

/***/ }),

/***/ "./src/app/system/home/home.component.ts":
/*!***********************************************!*\
  !*** ./src/app/system/home/home.component.ts ***!
  \***********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_services_task_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/task.service */ "./src/app/shared/services/task.service.ts");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_animation_fade_animation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/animation/fade.animation */ "./src/app/shared/animation/fade.animation.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");







let HomeComponent = class HomeComponent {
    constructor(taskService, authService, router, title) {
        this.taskService = taskService;
        this.authService = authService;
        this.router = router;
        this.title = title;
        this.isEditorVisible = false;
        this.isCreaterVisible = false;
        this.duringTasks = [];
        this.doneTasks = [];
        this.isLoaded = false;
        this.userName = '';
        this.prioritys = [
            { type: 'hight', label: 'Hight' },
            { type: 'medium', label: 'Medium' },
            { type: 'low', label: 'Low' }
        ];
        this.priorityVisible = {
            hight: true,
            medium: true,
            low: true
        };
    }
    ngOnInit() {
        this.title.setTitle('Home');
        this.taskService.getTasks()
            .subscribe((tasks) => {
            this.tasks = tasks;
            this.duringTasks = tasks.filter((item) => item.status === 'during' && this.priorityVisible[item.priority]);
            this.doneTasks = tasks.filter((item) => item.status === 'done' && this.priorityVisible[item.priority]);
        });
        this.viewList = true;
        setTimeout(() => this.isLoaded = true, 2000);
        this.userName = JSON.parse(window.localStorage.getItem('user')).name;
    }
    onLogOut() {
        this.authService.logout();
        this.router.navigate(['/login']);
    }
    filterAdded(form) {
        console.log(form);
        this.priorityVisible = form.value;
        this.duringTasks = this.tasks.filter(((item) => item.status === 'during' && this.priorityVisible[item.priority]), this);
        console.log('ngDoCheck');
        this.doneTasks = this.tasks.filter(((item) => item.status === 'done' && this.priorityVisible[item.priority]), this);
        console.log(this.priorityVisible);
        $('.button_filter .dropdown-toggle').dropdown('hide');
    }
    onViewList() {
        this.viewList = true;
    }
    onViewGrid() {
        this.viewList = false;
    }
    onSortDown() {
        this.duringTasks.sort((a, b) => Date.parse(a.data) - Date.parse(b.data));
        this.doneTasks.sort((a, b) => Date.parse(a.data) - Date.parse(b.data));
    }
    onSortUp() {
        console.log('befor', this.duringTasks);
        this.duringTasks.sort((a, b) => Date.parse(b.data) - Date.parse(a.data));
        this.doneTasks.sort((a, b) => Date.parse(b.data) - Date.parse(a.data));
    }
    openTaskCreater() {
        this.isCreaterVisible = true;
    }
    closeTaskCreater() {
        this.isCreaterVisible = false;
    }
    taskAdded(task) {
        this.duringTasks.unshift(task);
        this.closeTaskCreater();
    }
    openEditor(task) {
        this.isEditorVisible = true;
        this.editTask = task;
    }
    closeEditor() {
        this.isEditorVisible = false;
    }
    closeTaskEditor() {
        this.closeEditor();
    }
    onTaskEdit(task) {
        if (task.status === 'during') {
            this.duringTasks.forEach((item, i, arr) => {
                if (item.id === task.id) {
                    arr[i] = task;
                }
            });
        }
        else {
            this.doneTasks.forEach((item, i, arr) => {
                if (item.id === task.id) {
                    arr[i] = task;
                }
            });
        }
        this.closeEditor();
    }
    onTaskRemoved(task) {
        this.duringTasks.forEach((item, i, arr) => {
            if (item.id === task.id) {
                arr.splice(i, 1);
            }
        });
        this.doneTasks.forEach((item, i, arr) => {
            if (item.id === task.id) {
                arr.splice(i, 1);
            }
        });
        this.closeEditor();
    }
    onTaskDone(task) {
        this.duringTasks.forEach((item, i, arr) => {
            if (item.id === task.id) {
                arr.splice(i, 1);
            }
        });
        this.doneTasks.unshift(task);
        this.closeEditor();
    }
    onTaskDuring(task) {
        this.doneTasks.forEach((item, i, arr) => {
            if (item.id === task.id) {
                arr.splice(i, 1);
            }
        });
        this.duringTasks.unshift(task);
        this.closeEditor();
    }
};
HomeComponent.ctorParameters = () => [
    { type: _shared_services_task_service__WEBPACK_IMPORTED_MODULE_2__["TaskService"] },
    { type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'tdl-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/system/home/home.component.html")).default,
        animations: [_shared_animation_fade_animation__WEBPACK_IMPORTED_MODULE_5__["fadeStateTrigger"]],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.scss */ "./src/app/system/home/home.component.scss")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/system/settings/settings.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/system/settings/settings.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".header {\n  display: flex;\n  justify-content: flex-end;\n  align-items: flex-start;\n  padding: 0 20px 0px 60px;\n  background-color: #fff;\n}\n.header .button {\n  margin: 15px 5px;\n  padding: 10px;\n  position: relative;\n}\n.header .button .dropdown-menu {\n  margin-top: 20px;\n}\n.header .button img {\n  height: 30px;\n}\n.header .button_profile {\n  position: relative;\n}\n.header .button_profile .ava img {\n  border-radius: 50%;\n  width: 30px;\n}\n.header .button_profile .chevron {\n  display: none;\n  position: absolute;\n  top: 20px;\n  left: 48px;\n}\n.header .button_profile .chevron img {\n  width: 9px;\n  height: 9px;\n}\n.header .button_profile .active {\n  display: block;\n}\n.home {\n  background-color: #f6f7fa;\n  padding: 20px;\n  position: relative;\n}\n.home .view {\n  position: absolute;\n  top: 20px;\n  right: 40px;\n}\n.home .view .view_icon img {\n  width: 20px;\n  height: 20px;\n}\n.home .toDo h2 {\n  display: inline-block;\n  margin-top: 10px;\n  color: #000000;\n}\n.home .toDo .setting_list {\n  display: flex;\n  flex-wrap: wrap;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n.home .toDo .setting_list .setting_item .card .card-body {\n  display: flex;\n  flex-direction: column;\n}\n.home .toDo .setting_list .setting_item .card .card-body .card-title {\n  font-size: 24px;\n}\n.home .toDo .setting_list .setting_item .card .card-body .bloc {\n  max-height: 100px;\n  margin: 20px;\n}\n.home .toDo .setting_list .setting_item .card .card-body .green {\n  background-color: #013220;\n}\n.home .toDo .setting_list .setting_item .card .card-body .blue {\n  background-color: #0e1a35;\n}\n.home .toDo .setting_list .setting_item .card .card-body .btn-block {\n  font-size: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3lzdGVtL3NldHRpbmdzL0U6XFxNeVNlbGZcXNCc0L7RjyDQv9GA0LDQutGC0LjQutCwIEFOR1xcdG9Eb0xpc3RcXHRvRG9MaXN0L3NyY1xcYXBwXFxzeXN0ZW1cXHNldHRpbmdzXFxzZXR0aW5ncy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc3lzdGVtL3NldHRpbmdzL3NldHRpbmdzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsdUJBQUE7RUFDQSx3QkFBQTtFQUNBLHNCQUFBO0FDQ0Y7QURBRTtFQUlFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FDREo7QURKSTtFQUNFLGdCQUFBO0FDTU47QURESTtFQUNFLFlBQUE7QUNHTjtBREFFO0VBQ0Usa0JBQUE7QUNFSjtBREFNO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0FDRVI7QURDSTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FDQ047QURBTTtFQUNFLFVBQUE7RUFDQSxXQUFBO0FDRVI7QURDSTtFQUNFLGNBQUE7QUNDTjtBREdBO0VBQ0UseUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUNBRjtBRENFO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBQ0NKO0FEQ007RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ0NSO0FESUk7RUFDRSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ0ZOO0FESUk7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUNGTjtBREtVO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0FDSFo7QURJWTtFQUNFLGVBQUE7QUNGZDtBRElZO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0FDRmQ7QURLWTtFQUNFLHlCQUFBO0FDSGQ7QURLWTtFQUNFLHlCQUFBO0FDSGQ7QURLWTtFQUNFLGVBQUE7QUNIZCIsImZpbGUiOiJzcmMvYXBwL3N5c3RlbS9zZXR0aW5ncy9zZXR0aW5ncy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXJ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gIHBhZGRpbmc6IDAgMjBweCAwcHggNjBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIC5idXR0b257XHJcbiAgICAuZHJvcGRvd24tbWVudXtcclxuICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIH1cclxuICAgIG1hcmdpbjogMTVweCA1cHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgaW1ne1xyXG4gICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5idXR0b25fcHJvZmlsZXtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIC5hdmF7XHJcbiAgICAgIGltZ3tcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgd2lkdGg6IDMwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5jaGV2cm9ue1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogMjBweDtcclxuICAgICAgbGVmdDogNDhweDtcclxuICAgICAgaW1nIHtcclxuICAgICAgICB3aWR0aDogOXB4O1xyXG4gICAgICAgIGhlaWdodDogOXB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAuYWN0aXZle1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuICB9XHJcbn1cclxuLmhvbWV7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjdmYTtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAudmlld3tcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMjBweDtcclxuICAgIHJpZ2h0OiA0MHB4O1xyXG4gICAgLnZpZXdfaWNvbntcclxuICAgICAgaW1ne1xyXG4gICAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAudG9EbyB7XHJcbiAgICBoMiB7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICB9XHJcbiAgICAuc2V0dGluZ19saXN0e1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgICAgcGFkZGluZzogMDtcclxuICAgICAgLnNldHRpbmdfaXRlbXtcclxuICAgICAgICAuY2FyZHtcclxuICAgICAgICAgIC5jYXJkLWJvZHl7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIC5jYXJkLXRpdGxle1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuYmxvY3tcclxuICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiAxMDBweDtcclxuICAgICAgICAgICAgICBtYXJnaW46IDIwcHg7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5ncmVlbntcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDEzMjIwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5ibHVle1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwZTFhMzU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmJ0bi1ibG9ja3tcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgfVxyXG59XHJcbiIsIi5oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgcGFkZGluZzogMCAyMHB4IDBweCA2MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuLmhlYWRlciAuYnV0dG9uIHtcbiAgbWFyZ2luOiAxNXB4IDVweDtcbiAgcGFkZGluZzogMTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmhlYWRlciAuYnV0dG9uIC5kcm9wZG93bi1tZW51IHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cbi5oZWFkZXIgLmJ1dHRvbiBpbWcge1xuICBoZWlnaHQ6IDMwcHg7XG59XG4uaGVhZGVyIC5idXR0b25fcHJvZmlsZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5oZWFkZXIgLmJ1dHRvbl9wcm9maWxlIC5hdmEgaW1nIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogMzBweDtcbn1cbi5oZWFkZXIgLmJ1dHRvbl9wcm9maWxlIC5jaGV2cm9uIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDIwcHg7XG4gIGxlZnQ6IDQ4cHg7XG59XG4uaGVhZGVyIC5idXR0b25fcHJvZmlsZSAuY2hldnJvbiBpbWcge1xuICB3aWR0aDogOXB4O1xuICBoZWlnaHQ6IDlweDtcbn1cbi5oZWFkZXIgLmJ1dHRvbl9wcm9maWxlIC5hY3RpdmUge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmhvbWUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmN2ZhO1xuICBwYWRkaW5nOiAyMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uaG9tZSAudmlldyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAyMHB4O1xuICByaWdodDogNDBweDtcbn1cbi5ob21lIC52aWV3IC52aWV3X2ljb24gaW1nIHtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbn1cbi5ob21lIC50b0RvIGgyIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBjb2xvcjogIzAwMDAwMDtcbn1cbi5ob21lIC50b0RvIC5zZXR0aW5nX2xpc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cbi5ob21lIC50b0RvIC5zZXR0aW5nX2xpc3QgLnNldHRpbmdfaXRlbSAuY2FyZCAuY2FyZC1ib2R5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5ob21lIC50b0RvIC5zZXR0aW5nX2xpc3QgLnNldHRpbmdfaXRlbSAuY2FyZCAuY2FyZC1ib2R5IC5jYXJkLXRpdGxlIHtcbiAgZm9udC1zaXplOiAyNHB4O1xufVxuLmhvbWUgLnRvRG8gLnNldHRpbmdfbGlzdCAuc2V0dGluZ19pdGVtIC5jYXJkIC5jYXJkLWJvZHkgLmJsb2Mge1xuICBtYXgtaGVpZ2h0OiAxMDBweDtcbiAgbWFyZ2luOiAyMHB4O1xufVxuLmhvbWUgLnRvRG8gLnNldHRpbmdfbGlzdCAuc2V0dGluZ19pdGVtIC5jYXJkIC5jYXJkLWJvZHkgLmdyZWVuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAxMzIyMDtcbn1cbi5ob21lIC50b0RvIC5zZXR0aW5nX2xpc3QgLnNldHRpbmdfaXRlbSAuY2FyZCAuY2FyZC1ib2R5IC5ibHVlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBlMWEzNTtcbn1cbi5ob21lIC50b0RvIC5zZXR0aW5nX2xpc3QgLnNldHRpbmdfaXRlbSAuY2FyZCAuY2FyZC1ib2R5IC5idG4tYmxvY2sge1xuICBmb250LXNpemU6IDE4cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/system/settings/settings.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/system/settings/settings.component.ts ***!
  \*******************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_services_setting_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/setting.service */ "./src/app/shared/services/setting.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");






let SettingsComponent = class SettingsComponent {
    constructor(authService, router, settingServuce, title) {
        this.authService = authService;
        this.router = router;
        this.settingServuce = settingServuce;
        this.title = title;
        this.greenTheme = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.blueThem = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.userName = '';
    }
    ngOnInit() {
        this.title.setTitle('Setting');
        this.userName = JSON.parse(window.localStorage.getItem('user')).name;
    }
    onLogOut() {
        this.authService.logout();
        this.router.navigate(['/login']);
    }
    onGreenTheme() {
        console.log('greenTheme');
        this.settingServuce.onGreenTheme();
    }
    onBlueTheme() {
        this.settingServuce.onBlueTheme();
    }
};
SettingsComponent.ctorParameters = () => [
    { type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _shared_services_setting_service__WEBPACK_IMPORTED_MODULE_4__["SettingService"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Title"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], SettingsComponent.prototype, "greenTheme", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], SettingsComponent.prototype, "blueThem", void 0);
SettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'tdl-settings',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./settings.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/system/settings/settings.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./settings.component.scss */ "./src/app/system/settings/settings.component.scss")).default]
    })
], SettingsComponent);



/***/ }),

/***/ "./src/app/system/system-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/system/system-routing.module.ts ***!
  \*************************************************/
/*! exports provided: SystemRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SystemRoutingModule", function() { return SystemRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _system_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./system.component */ "./src/app/system/system.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/system/home/home.component.ts");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/system/settings/settings.component.ts");
/* harmony import */ var _shared_services_auth_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/services/auth.guard */ "./src/app/shared/services/auth.guard.ts");







const routes = [
    { path: '', component: _system_component__WEBPACK_IMPORTED_MODULE_3__["SystemComponent"], canActivate: [_shared_services_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]], children: [
            { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
            { path: 'setting', component: _settings_settings_component__WEBPACK_IMPORTED_MODULE_5__["SettingsComponent"] }
        ] }
];
let SystemRoutingModule = class SystemRoutingModule {
};
SystemRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], SystemRoutingModule);



/***/ }),

/***/ "./src/app/system/system.component.scss":
/*!**********************************************!*\
  !*** ./src/app/system/system.component.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("html, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre, a,\na:hover, a:visited, a:focus, a:active, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  vertical-align: baseline;\n  box-sizing: border-box;\n  font-size: 0;\n  text-decoration: none;\n  color: inherit;\n}\n\n/* HTML5 display-role reset for older browsers */\n\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n  display: block;\n}\n\nbody {\n  /*position: relative;*/\n  line-height: 1;\n}\n\nol, ul {\n  list-style: none;\n}\n\nblockquote, q {\n  quotes: none;\n}\n\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: \"\";\n  content: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\n/*--------------------------*/\n\n.system_window {\n  display: flex;\n  justify-content: space-between;\n  min-height: 100vh;\n  height: 100%;\n  position: relative;\n}\n\n@media (max-width: 576px) {\n  .system_window {\n    flex-direction: column;\n  }\n}\n\n.system_window .sideBar {\n  position: relative;\n  min-width: 200px;\n  background-color: #0e1a35;\n  color: white;\n}\n\n@media (max-width: 576px) {\n  .system_window .sideBar {\n    width: 100%;\n    min-width: 0;\n  }\n}\n\n.system_window .sideBar aside {\n  display: flex;\n  flex-direction: column;\n}\n\n.system_window .sideBar .button_menu {\n  position: absolute;\n  top: 15px;\n  left: 210px;\n  padding: 10px;\n}\n\n.system_window .sideBar .button_menu .chevron {\n  position: absolute;\n  top: 19px;\n  left: -2px;\n  display: none;\n}\n\n.system_window .sideBar .button_menu .chevron img {\n  width: 9px;\n  height: 9px;\n}\n\n.system_window .sideBar .button_menu img {\n  width: 30px;\n  height: 30px;\n}\n\n.system_window .sideBar .button_menu .active {\n  display: block;\n}\n\n.system_window .sideBar .side__header {\n  padding: 10px;\n  display: flex;\n  align-items: center;\n  margin-bottom: 20px;\n}\n\n.system_window .sideBar .side__header .side__logo {\n  border: solid 5px;\n  border-radius: 50%;\n  height: 20px;\n  width: 20px;\n}\n\n.system_window .sideBar .side__header h1 {\n  padding: 0 0 3px 10px;\n  margin: 0;\n  font-size: 15px;\n  vertical-align: center;\n}\n\n.system_window .sideBar .side_section .side_menu .side_menu__iteam {\n  padding: 10px;\n  display: flex;\n  align-items: center;\n}\n\n.system_window .sideBar .side_section .side_menu .side_menu__iteam .side_menu__iteam__icon img {\n  height: 12px;\n}\n\n.system_window .sideBar .side_section .side_menu .side_menu__iteam a {\n  padding: 0 0 0 10px;\n  font-size: 12px;\n}\n\n.system_window .sideBar .side_section .side_menu .side_menu__iteam a:focus {\n  color: inherit;\n}\n\n.system_window .sideBar .side_section .side_menu .active {\n  background-color: #122143;\n  border-left: 3px solid #5584ff;\n  padding-left: 7px;\n}\n\n.system_window .green-them {\n  background-color: #013220;\n}\n\n.system_window .green-them .side_section .side_menu .active {\n  background-color: #1e747c;\n  border-left: 3px solid #0c755b;\n  padding-left: 7px;\n}\n\n@media (min-width: 576px) {\n  .system_window .hide {\n    position: absolute;\n    left: -200px;\n  }\n}\n\n.system_window .content {\n  background-color: #f6f7fa;\n  flex-basis: 100%;\n  height: 100%;\n  min-height: 100vh;\n}\n\n.system_window .content section {\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3lzdGVtL0U6XFxNeVNlbGZcXNCc0L7RjyDQv9GA0LDQutGC0LjQutCwIEFOR1xcdG9Eb0xpc3RcXHRvRG9MaXN0L3NyY1xcYXBwXFxzeXN0ZW1cXHN5c3RlbS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc3lzdGVtL3N5c3RlbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7OztFQWFFLFNBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLHdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0FDQ0Y7O0FER0EsZ0RBQUE7O0FBQ0E7O0VBRUUsY0FBQTtBQ0FGOztBREVBO0VBQ0Usc0JBQUE7RUFDQSxjQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxnQkFBQTtBQ0VGOztBRENBO0VBQ0UsWUFBQTtBQ0VGOztBREFBOztFQUVFLFdBQUE7RUFDQSxhQUFBO0FDR0Y7O0FEREE7RUFDRSx5QkFBQTtFQUNBLGlCQUFBO0FDSUY7O0FERkEsNkJBQUE7O0FBQ0E7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0tGOztBREpFO0VBTkY7SUFPSSxzQkFBQTtFQ09GO0FBQ0Y7O0FETEU7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0FDT0o7O0FETkk7RUFMRjtJQU1JLFdBQUE7SUFDQSxZQUFBO0VDU0o7QUFDRjs7QURQSTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtBQ1NOOztBRE5JO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUNRTjs7QURQTTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0FDU1I7O0FEUlE7RUFDRSxVQUFBO0VBQ0EsV0FBQTtBQ1VWOztBRFBNO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNTUjs7QURQTTtFQUNFLGNBQUE7QUNTUjs7QURMSTtFQUNFLGFBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFlQSxtQkFBQTtBQ1BOOztBRFBNO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDU1I7O0FETE07RUFDRSxxQkFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7QUNPUjs7QURBUTtFQUNFLGFBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUNFVjs7QURDWTtFQUNFLFlBQUE7QUNDZDs7QURFVTtFQUNFLG1CQUFBO0VBQ0EsZUFBQTtBQ0FaOztBREVVO0VBQ0UsY0FBQTtBQ0FaOztBREdRO0VBQ0UseUJBQUE7RUFDQSw4QkFBQTtFQUNBLGlCQUFBO0FDRFY7O0FETUU7RUFDRSx5QkFBQTtBQ0pKOztBRE9RO0VBQ0UseUJBQUE7RUFDQSw4QkFBQTtFQUNBLGlCQUFBO0FDTFY7O0FEVUU7RUFDRTtJQUNFLGtCQUFBO0lBQ0EsWUFBQTtFQ1JKO0FBQ0Y7O0FEVUU7RUFDRSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDUko7O0FEU0k7RUFDRSxZQUFBO0FDUE4iLCJmaWxlIjoic3JjL2FwcC9zeXN0ZW0vc3lzdGVtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxyXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsIGEsXHJcbmE6aG92ZXIsYTp2aXNpdGVkLCBhOmZvY3VzLCBhOmFjdGl2ZSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxyXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXHJcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXHJcbmIsIHUsIGksIGNlbnRlcixcclxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcclxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXHJcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxyXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCxcclxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLFxyXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcclxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBib3JkZXI6IDA7XHJcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgZm9udC1zaXplOiAwO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjb2xvcjogaW5oZXJpdDtcclxuXHJcblxyXG59XHJcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cclxuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSxcclxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5ib2R5IHtcclxuICAvKnBvc2l0aW9uOiByZWxhdGl2ZTsqL1xyXG4gIGxpbmUtaGVpZ2h0OiAxO1xyXG59XHJcbm9sLCB1bCB7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuXHJcbn1cclxuYmxvY2txdW90ZSwgcSB7XHJcbiAgcXVvdGVzOiBub25lO1xyXG59XHJcbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxyXG5xOmJlZm9yZSwgcTphZnRlciB7XHJcbiAgY29udGVudDogJyc7XHJcbiAgY29udGVudDogbm9uZTtcclxufVxyXG50YWJsZSB7XHJcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICBib3JkZXItc3BhY2luZzogMDtcclxufVxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuLnN5c3RlbV93aW5kb3d7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBAbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgfVxyXG5cclxuICAuc2lkZUJhciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtaW4td2lkdGg6IDIwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBlMWEzNTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgbWluLXdpZHRoOiAwO1xyXG5cclxuICAgIH1cclxuICAgIGFzaWRle1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgfVxyXG5cclxuICAgIC5idXR0b25fbWVudSB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiAxNXB4O1xyXG4gICAgICBsZWZ0OiAyMTBweDtcclxuICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgLmNoZXZyb24ge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDE5cHg7XHJcbiAgICAgICAgbGVmdDogLTJweDtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICB3aWR0aDogOXB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiA5cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGltZ3tcclxuICAgICAgICB3aWR0aDogMzBweDtcclxuICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgIH1cclxuICAgICAgLmFjdGl2ZSB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuc2lkZV9faGVhZGVyIHtcclxuICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXMgOiBjZW50ZXI7XHJcbiAgICAgIC5zaWRlX19sb2dvIHtcclxuICAgICAgICBib3JkZXI6IHNvbGlkIDVweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICAgIGltZ3tcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaDEge1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMCAzcHggMTBweDtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIH1cclxuICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIH1cclxuICAgIC5zaWRlX3NlY3Rpb24ge1xyXG4gICAgICAuc2lkZV9tZW51IHtcclxuXHJcbiAgICAgICAgLnNpZGVfbWVudV9faXRlYW0ge1xyXG4gICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICAgIC5zaWRlX21lbnVfX2l0ZWFtX19pY29uIHtcclxuICAgICAgICAgICAgaW1ne1xyXG4gICAgICAgICAgICAgIGhlaWdodDogMTJweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMCAwIDEwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGE6Zm9jdXN7XHJcbiAgICAgICAgICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuYWN0aXZlIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxMjIxNDM7XHJcbiAgICAgICAgICBib3JkZXItbGVmdDogM3B4IHNvbGlkICM1NTg0ZmY7XHJcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDdweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLmdyZWVuLXRoZW17XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDEzMjIwO1xyXG4gICAgLnNpZGVfc2VjdGlvbntcclxuICAgICAgLnNpZGVfbWVudXtcclxuICAgICAgICAuYWN0aXZlIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxZTc0N2M7XHJcbiAgICAgICAgICBib3JkZXItbGVmdDogM3B4IHNvbGlkICMwYzc1NWI7XHJcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDdweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSB7XHJcbiAgICAuaGlkZSB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgbGVmdDogLTIwMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICAuY29udGVudHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNmY3ZmE7XHJcbiAgICBmbGV4LWJhc2lzOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgICBzZWN0aW9uIHtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcbiIsImh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSwgYSxcbmE6aG92ZXIsIGE6dmlzaXRlZCwgYTpmb2N1cywgYTphY3RpdmUsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXG5iLCB1LCBpLCBjZW50ZXIsXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlcjogMDtcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBmb250LXNpemU6IDA7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IGluaGVyaXQ7XG59XG5cbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuYm9keSB7XG4gIC8qcG9zaXRpb246IHJlbGF0aXZlOyovXG4gIGxpbmUtaGVpZ2h0OiAxO1xufVxuXG5vbCwgdWwge1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG5ibG9ja3F1b3RlLCBxIHtcbiAgcXVvdGVzOiBub25lO1xufVxuXG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcbnE6YmVmb3JlLCBxOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgY29udGVudDogbm9uZTtcbn1cblxudGFibGUge1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICBib3JkZXItc3BhY2luZzogMDtcbn1cblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4uc3lzdGVtX3dpbmRvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gIC5zeXN0ZW1fd2luZG93IHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG59XG4uc3lzdGVtX3dpbmRvdyAuc2lkZUJhciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWluLXdpZHRoOiAyMDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBlMWEzNTtcbiAgY29sb3I6IHdoaXRlO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gIC5zeXN0ZW1fd2luZG93IC5zaWRlQmFyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtaW4td2lkdGg6IDA7XG4gIH1cbn1cbi5zeXN0ZW1fd2luZG93IC5zaWRlQmFyIGFzaWRlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5zeXN0ZW1fd2luZG93IC5zaWRlQmFyIC5idXR0b25fbWVudSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxNXB4O1xuICBsZWZ0OiAyMTBweDtcbiAgcGFkZGluZzogMTBweDtcbn1cbi5zeXN0ZW1fd2luZG93IC5zaWRlQmFyIC5idXR0b25fbWVudSAuY2hldnJvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxOXB4O1xuICBsZWZ0OiAtMnB4O1xuICBkaXNwbGF5OiBub25lO1xufVxuLnN5c3RlbV93aW5kb3cgLnNpZGVCYXIgLmJ1dHRvbl9tZW51IC5jaGV2cm9uIGltZyB7XG4gIHdpZHRoOiA5cHg7XG4gIGhlaWdodDogOXB4O1xufVxuLnN5c3RlbV93aW5kb3cgLnNpZGVCYXIgLmJ1dHRvbl9tZW51IGltZyB7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG59XG4uc3lzdGVtX3dpbmRvdyAuc2lkZUJhciAuYnV0dG9uX21lbnUgLmFjdGl2ZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLnN5c3RlbV93aW5kb3cgLnNpZGVCYXIgLnNpZGVfX2hlYWRlciB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4uc3lzdGVtX3dpbmRvdyAuc2lkZUJhciAuc2lkZV9faGVhZGVyIC5zaWRlX19sb2dvIHtcbiAgYm9yZGVyOiBzb2xpZCA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgaGVpZ2h0OiAyMHB4O1xuICB3aWR0aDogMjBweDtcbn1cbi5zeXN0ZW1fd2luZG93IC5zaWRlQmFyIC5zaWRlX19oZWFkZXIgaDEge1xuICBwYWRkaW5nOiAwIDAgM3B4IDEwcHg7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xufVxuLnN5c3RlbV93aW5kb3cgLnNpZGVCYXIgLnNpZGVfc2VjdGlvbiAuc2lkZV9tZW51IC5zaWRlX21lbnVfX2l0ZWFtIHtcbiAgcGFkZGluZzogMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5zeXN0ZW1fd2luZG93IC5zaWRlQmFyIC5zaWRlX3NlY3Rpb24gLnNpZGVfbWVudSAuc2lkZV9tZW51X19pdGVhbSAuc2lkZV9tZW51X19pdGVhbV9faWNvbiBpbWcge1xuICBoZWlnaHQ6IDEycHg7XG59XG4uc3lzdGVtX3dpbmRvdyAuc2lkZUJhciAuc2lkZV9zZWN0aW9uIC5zaWRlX21lbnUgLnNpZGVfbWVudV9faXRlYW0gYSB7XG4gIHBhZGRpbmc6IDAgMCAwIDEwcHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5zeXN0ZW1fd2luZG93IC5zaWRlQmFyIC5zaWRlX3NlY3Rpb24gLnNpZGVfbWVudSAuc2lkZV9tZW51X19pdGVhbSBhOmZvY3VzIHtcbiAgY29sb3I6IGluaGVyaXQ7XG59XG4uc3lzdGVtX3dpbmRvdyAuc2lkZUJhciAuc2lkZV9zZWN0aW9uIC5zaWRlX21lbnUgLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxMjIxNDM7XG4gIGJvcmRlci1sZWZ0OiAzcHggc29saWQgIzU1ODRmZjtcbiAgcGFkZGluZy1sZWZ0OiA3cHg7XG59XG4uc3lzdGVtX3dpbmRvdyAuZ3JlZW4tdGhlbSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMTMyMjA7XG59XG4uc3lzdGVtX3dpbmRvdyAuZ3JlZW4tdGhlbSAuc2lkZV9zZWN0aW9uIC5zaWRlX21lbnUgLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxZTc0N2M7XG4gIGJvcmRlci1sZWZ0OiAzcHggc29saWQgIzBjNzU1YjtcbiAgcGFkZGluZy1sZWZ0OiA3cHg7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIHtcbiAgLnN5c3RlbV93aW5kb3cgLmhpZGUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAtMjAwcHg7XG4gIH1cbn1cbi5zeXN0ZW1fd2luZG93IC5jb250ZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjdmYTtcbiAgZmxleC1iYXNpczogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbn1cbi5zeXN0ZW1fd2luZG93IC5jb250ZW50IHNlY3Rpb24ge1xuICBoZWlnaHQ6IDEwMCU7XG59Il19 */");

/***/ }),

/***/ "./src/app/system/system.component.ts":
/*!********************************************!*\
  !*** ./src/app/system/system.component.ts ***!
  \********************************************/
/*! exports provided: SystemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SystemComponent", function() { return SystemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/system/settings/settings.component.ts");
/* harmony import */ var _shared_services_setting_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/services/setting.service */ "./src/app/shared/services/setting.service.ts");





let SystemComponent = class SystemComponent {
    constructor(router, settingService) {
        this.router = router;
        this.settingService = settingService;
        this.isGreenThem = false;
        this.isSideBarVisible = true;
    }
    ngOnInit() {
        this.settingService.isGreenTheme.subscribe((c) => {
            this.isGreenThem = c;
            console.log('settings=', this.isGreenThem);
        });
        console.log('settings=', this.settings);
    }
    toggleSideBar() {
        console.log('hide');
        this.isSideBarVisible = !this.isSideBarVisible;
    }
};
SystemComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _shared_services_setting_service__WEBPACK_IMPORTED_MODULE_4__["SettingService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_settings_settings_component__WEBPACK_IMPORTED_MODULE_3__["SettingsComponent"], { static: false })
], SystemComponent.prototype, "settings", void 0);
SystemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'tdl-system',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./system.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/system/system.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./system.component.scss */ "./src/app/system/system.component.scss")).default]
    })
], SystemComponent);



/***/ }),

/***/ "./src/app/system/system.module.ts":
/*!*****************************************!*\
  !*** ./src/app/system/system.module.ts ***!
  \*****************************************/
/*! exports provided: SystemModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SystemModule", function() { return SystemModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _system_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./system-routing.module */ "./src/app/system/system-routing.module.ts");
/* harmony import */ var _system_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./system.component */ "./src/app/system/system.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/system/home/home.component.ts");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/system/settings/settings.component.ts");
/* harmony import */ var _home_creater_creater_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/creater/creater.component */ "./src/app/system/home/creater/creater.component.ts");
/* harmony import */ var _shared_services_task_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/services/task.service */ "./src/app/shared/services/task.service.ts");
/* harmony import */ var _home_editor_editor_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home/editor/editor.component */ "./src/app/system/home/editor/editor.component.ts");
/* harmony import */ var _shared_services_setting_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../shared/services/setting.service */ "./src/app/shared/services/setting.service.ts");












let SystemModule = class SystemModule {
};
SystemModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _system_component__WEBPACK_IMPORTED_MODULE_4__["SystemComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
            _settings_settings_component__WEBPACK_IMPORTED_MODULE_7__["SettingsComponent"],
            _home_editor_editor_component__WEBPACK_IMPORTED_MODULE_10__["EditorComponent"],
            _home_creater_creater_component__WEBPACK_IMPORTED_MODULE_8__["CreaterComponent"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _system_routing_module__WEBPACK_IMPORTED_MODULE_3__["SystemRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
        ],
        providers: [
            _shared_services_task_service__WEBPACK_IMPORTED_MODULE_9__["TaskService"],
            _shared_services_setting_service__WEBPACK_IMPORTED_MODULE_11__["SettingService"]
        ]
    })
], SystemModule);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\MySelf\Моя практика ANG\toDoList\toDoList\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map