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

/***/ "./src/app/Todo.ts":
/*!*************************!*\
  !*** ./src/app/Todo.ts ***!
  \*************************/
/*! exports provided: Todo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Todo", function() { return Todo; });
var Todo = /** @class */ (function () {
    function Todo() {
    }
    return Todo;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".todo-app {\n  text-align: justify-all;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBdUI7QUFDekIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b2RvLWFwcCB7XG4gIHRleHQtYWxpZ246IGp1c3RpZnktYWxsO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <h2>\n    {{ title }}!\n  </h2>\n  <img width=\"50\" alt=\"Angular Logo\"\n       src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\n</div>\n\n<div class=\"todo-app\">\n\n  <app-todo-form (todoSubmitted)=\"addInTodoList($event)\"></app-todo-form>\n\n  <br/><hr><hr><br/>\n\n  <app-todo-list [todoAdded]=\"addTodo\"></app-todo-list>\n\n</div>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Manage your todos';
    }
    AppComponent.prototype.addInTodoList = function (todo) {
        this.addTodo = todo;
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _todo_form_todo_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./todo-form/todo-form.component */ "./src/app/todo-form/todo-form.component.ts");
/* harmony import */ var _todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./todo-list/todo-list.component */ "./src/app/todo-list/todo-list.component.ts");






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _todo_form_todo_form_component__WEBPACK_IMPORTED_MODULE_4__["TodoFormComponent"],
                _todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_5__["TodoListComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/todo-form/todo-form.component.css":
/*!***************************************************!*\
  !*** ./src/app/todo-form/todo-form.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RvZG8tZm9ybS90b2RvLWZvcm0uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/todo-form/todo-form.component.html":
/*!****************************************************!*\
  !*** ./src/app/todo-form/todo-form.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"todo-form\">\n\n  <div *ngIf=\"message\" class=\"message\">Alert! {{message}}</div>\n\n  <label id=\"name\">Task name\n    <input (input)=\"todo.taskName = $event.target.value\" [value]=\"todo.taskName\" type=\"text\" placeholder=\"Task Name\"\n           required>\n  </label>\n  <label id=\"date\">\n    <input (input)=\"todo.taskCompletedBy = $event.target.value\" [value]=\"todo.taskCompletedBy\" type=\"date\" required>\n  </label>\n  <br/>\n  <label id=\"description\" *ngIf=\"todo.taskType=='task'\">Description\n    <textarea (input)=\"todo.taskDescription = $event.target.value\" placeholder=\"Description\"></textarea>\n  </label>\n  <br/>\n  <label id=\"types\">\n    <select (change)=\"todo.taskType=$event.target.value; todo.taskDescription='';\" [value]=\"todo.taskType\" required>\n      <option value=\"\">Types</option>\n      <option value=\"task\">Task</option>\n      <option value=\"todo\">Todo</option>\n      <option value=\"item\">Item</option>\n    </select>\n  </label>\n  <button name=\"add\" (click)=\"submitTask()\">Add</button>\n  <button name=\"reset\" (click)=\"initialTodoForm()\">Reset</button>\n\n</div>\n"

/***/ }),

/***/ "./src/app/todo-form/todo-form.component.ts":
/*!**************************************************!*\
  !*** ./src/app/todo-form/todo-form.component.ts ***!
  \**************************************************/
/*! exports provided: TodoFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoFormComponent", function() { return TodoFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TodoFormComponent = /** @class */ (function () {
    function TodoFormComponent() {
        this.message = '';
        this.todoSubmitted = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    TodoFormComponent.prototype.ngOnInit = function () {
        this.initialTodoForm();
    };
    TodoFormComponent.prototype.submitTask = function () {
        if (!this.todo.taskType || !this.todo.taskName || !this.todo.taskCompletedBy) {
            this.message = 'All fields are required.';
            return;
        }
        this.todoSubmitted.emit(this.todo);
        this.initialTodoForm();
    };
    TodoFormComponent.prototype.initialTodoForm = function () {
        this.todo = {
            taskType: '',
            taskName: '',
            taskCompletedBy: null,
            completed: false
        };
        this.message = '';
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TodoFormComponent.prototype, "todoSubmitted", void 0);
    TodoFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-todo-form',
            template: __webpack_require__(/*! ./todo-form.component.html */ "./src/app/todo-form/todo-form.component.html"),
            styles: [__webpack_require__(/*! ./todo-form.component.css */ "./src/app/todo-form/todo-form.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TodoFormComponent);
    return TodoFormComponent;
}());



/***/ }),

/***/ "./src/app/todo-list/todo-list.component.css":
/*!***************************************************!*\
  !*** ./src/app/todo-list/todo-list.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".todo-list .completed {\n  text-decoration: line-through;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9kby1saXN0L3RvZG8tbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNkJBQTZCO0FBQy9CIiwiZmlsZSI6InNyYy9hcHAvdG9kby1saXN0L3RvZG8tbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvZG8tbGlzdCAuY29tcGxldGVkIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/todo-list/todo-list.component.html":
/*!****************************************************!*\
  !*** ./src/app/todo-list/todo-list.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"todo-list\">\n  <div *ngFor=\"let todo of taskList; index as i\">\n    <div class=\"todo todo-{{i+1}}\">\n\n      <div class=\"type\" [style.textDecoration]=\"todo.completed ? 'line-through' : 'underline'\">\n        Type: {{todo.taskType}}</div>\n      <div class=\"name\" [class.completed]=\"todo.completed\">\n        Task name: {{todo.taskName}}</div>\n      <br/>\n      <div *ngIf=\"todo.taskDescription\" class=\"description\" [class.completed]=\"todo.completed\">\n        Description: {{todo.taskDescription}}</div>\n      <div class=\"completed-by\" [class.completed]=\"todo.completed\">\n        Completed By: {{todo.taskCompletedBy}}</div>\n      <br/>\n      <button (click)=\"deleteTodo(i)\">\n        Delete</button>\n      <button (click)=\"toggleTodo(todo)\">\n        Mark {{todo.completed ? 'Incomplete' : 'Complete'}}</button>\n\n    </div>\n    <hr>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/todo-list/todo-list.component.ts":
/*!**************************************************!*\
  !*** ./src/app/todo-list/todo-list.component.ts ***!
  \**************************************************/
/*! exports provided: TodoListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoListComponent", function() { return TodoListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Todo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Todo */ "./src/app/Todo.ts");



var TodoListComponent = /** @class */ (function () {
    function TodoListComponent() {
        this.taskList = [];
    }
    // OnChanges() method hook gets triggered whenever ng detects changes to input properties of the component (or directive).
    TodoListComponent.prototype.ngOnChanges = function (changes) {
        if (changes.todoAdded.currentValue) {
            this.taskList.push(changes.todoAdded.currentValue);
            this.saveInLocalStorage();
        }
    };
    // OnInit() method hook runs only once when this angular component gets initialized
    TodoListComponent.prototype.ngOnInit = function () {
        // LocalStorage: Keeps data locally in browser's local storage. Data with no expiration date that will persist after the browser window is closed (until the user manually clears the browser cache or until your web app clears the data).
        // SessionStorage: Keeps data locally in browser's session storage. Data gets cleared after the browser window is closed (from all tabs opened for this domain).
        // These are synchronous HTML5 web Storage API {For async process, use IndexedDB web storage API}. These data cannot be read by server. Hence safe (unlike cookies). Every domain has its data storage given.
        // These APIs have their events also to put some more features & error emitting support to detect if max storage size(10MB mostly) is reached for this domain.
        this.getFromLocalStorage();
    };
    TodoListComponent.prototype.deleteTodo = function (index) {
        this.taskList.splice(index, 1);
        this.saveInLocalStorage();
    };
    TodoListComponent.prototype.toggleTodo = function (todo) {
        todo.completed = !todo.completed;
        this.saveInLocalStorage();
    };
    TodoListComponent.prototype.getFromLocalStorage = function () {
        this.taskList = JSON.parse(localStorage.getItem('taskList')) || []; //similarly for Session Storage : sessionStorage.getItem('taskList')
    };
    TodoListComponent.prototype.saveInLocalStorage = function () {
        localStorage.setItem('taskList', JSON.stringify(this.taskList)); //similarly for Session Storage : sessionStorage.setItem('taskList', stringValue)
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _Todo__WEBPACK_IMPORTED_MODULE_2__["Todo"])
    ], TodoListComponent.prototype, "todoAdded", void 0);
    TodoListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-todo-list',
            template: __webpack_require__(/*! ./todo-list.component.html */ "./src/app/todo-list/todo-list.component.html"),
            styles: [__webpack_require__(/*! ./todo-list.component.css */ "./src/app/todo-list/todo-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TodoListComponent);
    return TodoListComponent;
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

module.exports = __webpack_require__(/*! /home/travis/build/shruti-mittal/first-ng-app/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map