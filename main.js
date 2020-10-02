(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\coding\myapp\src\main.ts */"zUnb");


/***/ }),

/***/ "73fu":
/*!****************************************!*\
  !*** ./src/app/accordion.component.ts ***!
  \****************************************/
/*! exports provided: AccordionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionComponent", function() { return AccordionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _toggle_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toggle.component */ "EiIL");



const _c0 = ["*"];
class AccordionComponent {
    ngAfterContentInit() {
        this.toggles.map((toggle, i) => {
            toggle.setActive.subscribe(() => this.setActive(i));
        });
    }
    setActive(index) {
        this.toggles.map((toggle, i) => {
            index !== i || toggle.active === true ? toggle.active = false : toggle.active = true;
        });
    }
}
AccordionComponent.ɵfac = function AccordionComponent_Factory(t) { return new (t || AccordionComponent)(); };
AccordionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AccordionComponent, selectors: [["accordion"]], contentQueries: function AccordionComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _toggle_component__WEBPACK_IMPORTED_MODULE_1__["ToggleComponent"], false);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.toggles = _t);
    } }, ngContentSelectors: _c0, decls: 2, vars: 0, consts: [[1, "accordion"]], template: function AccordionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccordionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'accordion',
                template: `
    <div class="accordion">
      <ng-content></ng-content>
    </div>
  `
            }]
    }], null, { toggles: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
            args: [_toggle_component__WEBPACK_IMPORTED_MODULE_1__["ToggleComponent"]]
        }] }); })();


/***/ }),

/***/ "AytR":
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

/***/ "EiIL":
/*!*************************************!*\
  !*** ./src/app/toggle.component.ts ***!
  \*************************************/
/*! exports provided: ToggleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleComponent", function() { return ToggleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



function ToggleComponent_i_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 6);
} }
function ToggleComponent_i_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 7);
} }
function ToggleComponent_i_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 8);
} }
function ToggleComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = ["*"];
class ToggleComponent {
    constructor() {
        this.active = false;
        this.title = "Default title";
        this.setActive = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
}
ToggleComponent.ɵfac = function ToggleComponent_Factory(t) { return new (t || ToggleComponent)(); };
ToggleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ToggleComponent, selectors: [["toggle"]], inputs: { active: "active", title: "title" }, outputs: { setActive: "setActive" }, ngContentSelectors: _c0, decls: 8, vars: 7, consts: [[1, "toggle"], [1, "toggle_heading", 3, "click"], ["class", "fa fa-angle-down", "style", "color:#3fb057;float:right", 4, "ngIf"], ["class", "fa fa-angle-up", "style", "color:#3fb057;float:right", 4, "ngIf"], ["class", "fa fa-info-circle", "style", "color:#3fb057;float:right", 4, "ngIf"], ["class", "toggle_content", 4, "ngIf"], [1, "fa", "fa-angle-down", 2, "color", "#3fb057", "float", "right"], [1, "fa", "fa-angle-up", 2, "color", "#3fb057", "float", "right"], [1, "fa", "fa-info-circle", 2, "color", "#3fb057", "float", "right"], [1, "toggle_content"]], template: function ToggleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToggleComponent_Template_div_click_1_listener() { return ctx.setActive.emit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ToggleComponent_i_4_Template, 1, 0, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ToggleComponent_i_5_Template, 1, 0, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ToggleComponent_i_6_Template, 1, 0, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ToggleComponent_div_7_Template, 2, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 5, ctx.title), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.active);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.active && ctx.title != "Model Inputs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.active && ctx.title == "Model Inputs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.active);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["UpperCasePipe"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToggleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'toggle',
                template: `
    <div class="toggle">
      <div class="toggle_heading" (click)="setActive.emit()">
        {{ title | uppercase }} 
        <i *ngIf="!active " class="fa fa-angle-down" style="color:#3fb057;float:right"></i>
        <i *ngIf="active && title != 'Model Inputs'" class="fa fa-angle-up" style="color:#3fb057;float:right"></i>
        <i *ngIf="active && title == 'Model Inputs'" class="fa fa-info-circle" style="color:#3fb057;float:right"></i> 
        
      </div>
      <div *ngIf="active" class="toggle_content">
        <ng-content></ng-content>
      </div>
    </div>
  `,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].Default
                /* Don't change it with OnPush because it's content projected */
            }]
    }], null, { active: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], setActive: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "OIL4":
/*!***********************************!*\
  !*** ./src/app/tabs.component.ts ***!
  \***********************************/
/*! exports provided: TabsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsComponent", function() { return TabsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _tab_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab.component */ "RHbF");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function TabsComponent_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TabsComponent_li_1_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const tab_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.selectTab(tab_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tab_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", tab_r1.active);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tab_r1.title);
} }
const _c0 = ["*"];
class TabsComponent {
    // contentChildren are set
    ngAfterContentInit() {
        // get all active tabs
        let activeTabs = this.tabs.filter((tab) => tab.active);
        // if there is no active tab set, activate the first
        if (activeTabs.length === 0) {
            this.selectTab(this.tabs.first);
        }
    }
    selectTab(tab) {
        // deactivate all tabs
        this.tabs.toArray().forEach(tab => tab.active = false);
        // activate the tab the user has clicked on.
        tab.active = true;
    }
}
TabsComponent.ɵfac = function TabsComponent_Factory(t) { return new (t || TabsComponent)(); };
TabsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TabsComponent, selectors: [["my-tabs"]], contentQueries: function TabsComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _tab_component__WEBPACK_IMPORTED_MODULE_1__["TabComponent"], false);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.tabs = _t);
    } }, ngContentSelectors: _c0, decls: 3, vars: 1, consts: [[1, "nav", "nav-tabs"], [3, "active", "click", 4, "ngFor", "ngForOf"], [3, "click"]], template: function TabsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TabsComponent_li_1_Template, 3, 3, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tabs);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: [".tab-close[_ngcontent-%COMP%] {\n        color: gray;\n        text-align: right;\n        cursor: pointer;\n      }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TabsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'my-tabs',
                template: `
      <ul class="nav nav-tabs">
        <li *ngFor="let tab of tabs" (click)="selectTab(tab)" [class.active]="tab.active">
          <a>{{tab.title}}</a>
        </li>
      </ul>
      <ng-content></ng-content>
    `,
                styles: [
                    `
      .tab-close {
        color: gray;
        text-align: right;
        cursor: pointer;
      }
      `
                ]
            }]
    }], null, { tabs: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
            args: [_tab_component__WEBPACK_IMPORTED_MODULE_1__["TabComponent"]]
        }] }); })();


/***/ }),

/***/ "RHbF":
/*!**********************************!*\
  !*** ./src/app/tab.component.ts ***!
  \**********************************/
/*! exports provided: TabComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabComponent", function() { return TabComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


const _c0 = ["*"];
class TabComponent {
    constructor() {
        this.active = false;
    }
}
TabComponent.ɵfac = function TabComponent_Factory(t) { return new (t || TabComponent)(); };
TabComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TabComponent, selectors: [["my-tab"]], inputs: { title: ["tabTitle", "title"], active: "active" }, ngContentSelectors: _c0, decls: 2, vars: 1, consts: [[1, "pane", 3, "hidden"]], template: function TabComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.active);
    } }, styles: [".pane[_ngcontent-%COMP%]{\n      padding: 1em;\n    }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TabComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'my-tab',
                styles: [
                    `
    .pane{
      padding: 1em;
    }
  `
                ],
                template: `
    <div [hidden]="!active" class="pane">
      <ng-content></ng-content>
    </div>
  `
            }]
    }], null, { title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['tabTitle']
        }], active: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _accordion_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./accordion.component */ "73fu");
/* harmony import */ var _toggle_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toggle.component */ "EiIL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function AppComponent_div_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "95%");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Match");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Nicolana Lindolam");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "User Exprience Researcher & Designer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Test@gmail.com");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "last message:12-12-20");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "input", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "label", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Jan 19 - present");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "4months");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Jan 19 - present");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "2 years 0 months");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "ul", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Relavent Exprience: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "6 Yrs");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Total Exprience: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "6 Yrs");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Total Exprience: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "6 Yrs");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "UX Researcher & Designer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "p", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "microsoft");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "UX Researcher & Designer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "p", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "microsoft");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "ul", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "button");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "sketch");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "button");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "inteviewa");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "button");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "sketch");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "button");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "inteviewa");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "button");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "sketch");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "button");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "inteviewa");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "ul", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "li", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "img", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "img", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "img", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "img", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_div_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "95%");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Match");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Nicolana Lindolam");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "User Exprience Researcher & Designer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Test@gmail.com");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "last message:12-12-20");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "input", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "label", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "jan 19 - present");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "4months");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "jan 19 - present");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "2 years 0 months");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "ul", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Relavent Exprience: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "6 Yrs");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Total Exprience: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "6 Yrs");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Total Exprience: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "6 Yrs");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "UX Researcher & Designer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "p", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "microsoft");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "UX Researcher & Designer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "p", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "microsoft");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "ul", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "button");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "sketch");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "button");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "inteviewa");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "button");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "sketch");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "button");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "inteviewa");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "button");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "sketch");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "button");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "inteviewa");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "ul", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "li", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "img", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "img", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "img", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "img", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_div_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " saved");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_div_66_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " saved");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AppComponent {
    constructor() {
        this.title = 'myapp';
        this.viewMode = 'results';
        this.candidate = [
            {
                name: 'vikki',
                desigination: 'UX Researcher & Designer',
                location: [
                    {
                        iconn: 'fx-',
                    }
                ],
                Company: [{
                        Designation: 'UX Researcher & Designer',
                        company: 'Microsoft'
                    }],
                Exprience: [{
                        RelaventExprience: '6 Yrs',
                        TotalExprience: '10 Yrs',
                        AvarageTemture: '1.5Yr'
                    }],
            }
        ];
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 67, vars: 11, consts: [[1, "first-div"], [1, "left"], [2, "font-weight", "600"], ["title", "Title"], ["title", "company"], ["title", "education"], ["title", "industry"], ["title", "skills"], ["title", "keywords"], ["title", "advanced"], ["title", "Model Inputs", "active", "true;"], ["type", "text", "placeholder", "Add companies your search model", 2, "width", "-webkit-fill-available", "height", "30px", "padding", "4px 12px"], [1, "inform"], [1, "firstint"], [2, "color", "#3fb057"], [1, "right-main"], [1, "mainheader"], [1, "mainheader1"], [1, "fi"], [1, "fi1"], [1, "mainheader2"], [1, "tablink"], [3, "click"], [3, "ngSwitch"], ["class", "right", 4, "ngSwitchCase"], ["class", "right", "style", "margin-top: 8px;", 4, "ngSwitchCase"], [4, "ngSwitchCase"], [1, "right"], [1, "profiledetails"], [1, "partone"], [1, "namesec"], [1, "namemain", 2, "display", "flex"], [1, "namesec1"], [1, "namesec2"], [1, "sideicon"], ["href", ""], ["aria-hidden", "true", 1, "fa", "fa-bullhorn"], [1, "fa", "fa-user-o"], [1, "parttwo"], [1, "contactmail"], [2, "display", "flex"], ["aria-hidden", "true", 1, "fa", "fa-envelope"], [1, "parttwoleft"], [1, "checkbox"], [1, "form-check"], ["type", "checkbox", "id", "test1", "value", "true", "checked", "true"], ["for", "test1"], [1, "years"], [1, "parttworight"], [1, "exprience"], [1, "exprienceList"], [1, "deigination"], [2, "color", "#65cbb4"], [1, "tagsmain"], [1, "tagleft"], [1, "tagleftbutton"], [1, "tagright"], [1, "tagrightimg"], [1, "tagrightimgli"], ["src", "https://img.icons8.com/cute-clipart/2x/facebook.png", "alt", ""], ["src", "https://img.icons8.com/bubbles/2x/twitter-circled.png", "alt", ""], ["src", "https://img.icons8.com/color/2x/linkedin.png", "alt", ""], [1, "right", 2, "margin-top", "8px"], ["type", "checkbox", "id", "test2"], ["for", "test2"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "accordion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "FILLTER BY ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "toggle", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "toggle", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "toggle", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "toggle", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "toggle", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "toggle", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "toggle", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "toggle", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Google");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "FaceBoox");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Amazon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Uber");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "DELECT ALL ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "+");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "ul", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_a_click_50_listener() { return ctx.viewMode = "results"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Results");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_a_click_53_listener() { return ctx.viewMode = "saved"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Saved");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " 112");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_a_click_58_listener() { return ctx.viewMode = "archived"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Archived");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, " 332");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](63, AppComponent_div_63_Template, 105, 0, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](64, AppComponent_div_64_Template, 100, 0, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](65, AppComponent_div_65_Template, 2, 0, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](66, AppComponent_div_66_Template, 2, 0, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.viewMode == "results");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.viewMode == "saved");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.viewMode == "archived");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx.viewMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "results");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "results");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "saved");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "archived");
    } }, directives: [_accordion_component__WEBPACK_IMPORTED_MODULE_1__["AccordionComponent"], _toggle_component__WEBPACK_IMPORTED_MODULE_2__["ToggleComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitchCase"]], styles: [".first-div[_ngcontent-%COMP%]{\r\n    width: 90%;\r\n    display: flex;\r\n    margin: 0% auto;\r\n}\r\n.left[_ngcontent-%COMP%]{\r\n    width: 40%;\r\n}\r\n.right-main[_ngcontent-%COMP%]{\r\n\r\n    width: 60%;\r\n    padding: 0% 2%;\r\n}\r\n.right-main[_ngcontent-%COMP%]{\r\n    margin-top: 20px;\r\n}\r\n.right[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    background-color: white;\r\n    z-index: 1;\r\n  box-shadow: 0 10px 6px -6px #555;\r\n}\r\n.profiledetails[_ngcontent-%COMP%]{\r\n    \r\n}\r\n.partone[_ngcontent-%COMP%]{\r\n    position: relative;\r\n}\r\n\r\n.namesec[_ngcontent-%COMP%]{\r\n    display: inline-block;\r\n    width: 50%;\r\n    \r\n}\r\n.deigination[_ngcontent-%COMP%]{\r\nposition: relative;\r\n}\r\n.deigination[_ngcontent-%COMP%]:before{\r\n    content: \"\";\r\n    position: absolute;\r\n    width: 8px;\r\n    height: 0px;\r\n    background: #bfbcbc;\r\n    top: 47%;\r\n    left: -11px;\r\n    border-radius: 50%;\r\n    padding: 4px 0;\r\n    bottom: 50%;\r\n}\r\n.sideicon[_ngcontent-%COMP%]{\r\n    display: inline-block;\r\n    float: right;\r\n    margin-right: 12px;\r\n    margin-top: 5px;\r\n}\r\n.sideicon[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    background: black;\r\n    padding: 4px;\r\n    color: white;\r\n    border-radius: 50;\r\n    border-radius: 50%;\r\n}\r\n.parttwo[_ngcontent-%COMP%]{\r\n    width: 87%;\r\n    border-top: 2px dotted #bfbcbc;\r\n    display: flex;\r\n    margin-top: 16px;\r\n}\r\n.parttwoleft[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n.parttworight[_ngcontent-%COMP%]{\r\n    border-left: 2px dotted #bfbcbc;\r\n}\r\n.exprienceList[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n}\r\n.tagrightimg[_ngcontent-%COMP%]{\r\n    display: flex\r\n}\r\n.tagrightimg[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    width: 32px;\r\n    height: auto;\r\n}\r\n.tagsmain[_ngcontent-%COMP%]{\r\n    display: flex\r\n}\r\n.tagleftbutton[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n}\r\n.tagleft[_ngcontent-%COMP%]{\r\n    display: grid;\r\n    align-items: center;\r\n}\r\n.contactmail[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    border: 2px dotted #bfbcbc;\r\n    \r\n    font-size: 13px;\r\n    top: 34%;\r\n    right: -10%;\r\n}\r\n\r\n.exprienceList[_ngcontent-%COMP%]{\r\n    padding: 7px 0;\r\n}\r\n.exprience[_ngcontent-%COMP%]{\r\n    padding: 0px 3px;\r\n}\r\n.namesec1[_ngcontent-%COMP%]{\r\n    \r\n    \r\n        \r\n    \r\n    background-color: #3fb057;\r\n    color: white;\r\n    margin-left: 14px;\r\n    margin-right: 14px;\r\n    height: 46px;\r\n    width: 45px;\r\n    font-size: 3ox;\r\n    position: relative;\r\n    top: -8px;\r\n}\r\n.namesec1[_ngcontent-%COMP%]:before {\r\n    content: \"\";\r\n    border-style: solid;\r\n    color: white;\r\n    border-width: 36px 40px 0 0;\r\n    border-color: #3fb057 transparent transparent transparent;\r\n    position: absolute;\r\n    z-index: -1;\r\n    top: 36px;\r\n    left: 0;\r\n}\r\n.namesec1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n    position: relative;\r\n    bottom: 7px;\r\n}\r\n.namesec1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    font-size: 14px;\r\n     text-align: center;\r\n}\r\n.namesec1[_ngcontent-%COMP%]:after {\r\n    content: \"\";\r\n    border-style: solid;\r\n    border-width: 38px 39.5px 0 0;\r\n    border-color: #3fb057 transparent transparent transparent;\r\n    position: absolute;\r\n    z-index: 1;\r\n    top: 33px;\r\n    right: 0px;\r\n    z-index: -1;\r\n    transform: rotate(90deg);\r\n}\r\n.right[_ngcontent-%COMP%]{\r\n    position: relative;\r\n}\r\n.right[_ngcontent-%COMP%]:before {\r\n    content: \"\\002B\";\r\n    color: white;\r\n    background: #3fb057;\r\n    padding: 9px 15px;\r\n    border-radius: 50%;\r\n    height: 26px;\r\n    \r\n    right: -20px;\r\n    top: 30%;\r\n    position: absolute;\r\n    font-size: 27px;\r\n    font-weight: 900;\r\n}\r\n.right[_ngcontent-%COMP%]::after {\r\n    content: \"\\00D7\";\r\n    color: white;\r\n    background: red;\r\n    padding: 9px 15px;\r\n    border-radius: 50%;\r\n    height: 26px;\r\n    \r\n    right: -20px;\r\n    top: 60%;\r\n    position: absolute;\r\n    font-size: 27px;\r\n    font-weight: 900;\r\n}\r\n.exprienceList[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n    font-weight: 500;\r\n}\r\n.deigination[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    font-weight: 500;\r\n}\r\n.toggle_heading[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{\r\nfloat: right;\r\n\r\n\r\ncolor: #3fb057;\r\nfont-size: 26px;\r\nposition: relative;\r\nbottom: 6px;\r\n\r\n}\r\n.years[_ngcontent-%COMP%]{\r\n    width: 116px;\r\n    text-align: center;\r\n}\r\n.inform[_ngcontent-%COMP%]{\r\n      \r\n      display: grid;\r\n      grid-template-columns: repeat(2, 1fr);\r\n}\r\n.inform[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n      \r\n    padding: 7px 39px;\r\n}\r\n.firstint[_ngcontent-%COMP%]{\r\n    text-align: right;\r\n    font-size: 20px;\r\n    color: #3fb057;\r\n    font-weight: 800;\r\n}\r\n.mainheader[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    justify-content: space-between;\r\n    margin-bottom: 9px;\r\n}\r\n.mainheader1[_ngcontent-%COMP%]{\r\n    display: flex;\r\n}\r\n.tablink[_ngcontent-%COMP%]{\r\n    display: flex;\r\n}\r\n.mainheader1[_ngcontent-%COMP%]   .fi1[_ngcontent-%COMP%] {\r\n    background: red;\r\n    border-radius: 50%;\r\n    padding: 2px 7px;\r\n    margin-left: 6px;\r\n    font-weight: 600;\r\n    color: white;\r\n}\r\n.mainheader1[_ngcontent-%COMP%]   .fi[_ngcontent-%COMP%] {\r\n    color: white;\r\n    background: #3fb057;\r\n    border-radius: 50%;\r\n    padding: 2px 7px;\r\n    margin-left: 6px;\r\n    font-weight: 600;\r\n}\r\n.active[_ngcontent-%COMP%]{\r\n    border-bottom:2px solid #3fb057 ;\r\n    font-weight: 600;\r\n}\r\n.accordion[_ngcontent-%COMP%] {\r\n    max-width: 400px;\r\n    margin: 00px auto;\r\n    \r\n  }\r\n\r\n@media (min-width: 1281px) { \r\n    \r\n}\r\n@media (min-width: 1025px) and (max-width: 1280px){ \r\n    \r\n}\r\n@media (min-width: 1030px) and (max-width: 1180px){ \r\n    .parttwo[_ngcontent-%COMP%]:after {\r\n        content: \"\";\r\n        position: absolute;\r\n        width: 1px;\r\n        height: 89px!important;\r\n        border-right: 2px dotted #bfbcbc;\r\n        right: 0;\r\n    }\r\n}\r\n\r\n@media (min-width: 500px) and (max-width: 650px) {\r\n    .parttwo[_ngcontent-%COMP%]:after {\r\n        content: \"\";\r\n        position: absolute;\r\n        width: 1px;\r\n        height: 18px!important;\r\n        border-right: 2px dotted #bfbcbc;\r\n        right: 0;\r\n    }\r\n    .contactmail[_ngcontent-%COMP%] {\r\n        position: absolute;\r\n        border: 2px dotted #bfbcbc;\r\n        font-size: 11px!important;\r\n        top: 63px!important;\r\n        transform: rotate(450deg)!important; \r\n        right: -71px!important;\r\n    }\r\n}\r\n@media (min-width: 481px) and (max-width: 767px) { \r\n     \r\n    .first-div[_ngcontent-%COMP%] {\r\n        width: 90%;\r\n        display: flex;\r\n        flex-wrap: wrap;\r\n        margin: 0% auto;\r\n    }\r\n    .left[_ngcontent-%COMP%]{\r\n        width: 100%;\r\n    }\r\n    .right-main[_ngcontent-%COMP%]{\r\n        width: 100%;\r\n        padding: 0;\r\n    }\r\n    .right[_ngcontent-%COMP%]:before {\r\n        content: \"\\002B\";\r\n    color: white;\r\n    background: #3fb057;\r\n    padding: 9px 15px;\r\n    border-radius: 50%;\r\n    height: 26px;\r\n    right: -20px;\r\n    top: 72%;\r\n    position: absolute;\r\n    font-size: 27px;\r\n    font-weight: 900;   }\r\n    .right[_ngcontent-%COMP%]:after {\r\n        content: \"\\00D7\";\r\n    color: white;\r\n    background: red;\r\n    padding: 9px 15px;\r\n    border-radius: 50%;\r\n    height: 26px;\r\n    right: -20px;\r\n    top: 19%;\r\n    position: absolute;\r\n    font-size: 27px;\r\n    font-weight: 900;\r\n    }\r\n    .contactmail[_ngcontent-%COMP%] {\r\n        position: absolute;\r\n        border: 2px dotted #bfbcbc;\r\n        font-size: 11px;\r\n        top: 63px;\r\n        \r\n        right: -71px;\r\n    }\r\n    .tagrightimg[_ngcontent-%COMP%]{\r\n        display: flex;\r\n        flex-wrap: wrap;\r\n    }\r\n    .years[_ngcontent-%COMP%]{\r\n        width: 71px;\r\n        text-align: center;\r\n    }\r\n    .parttwo[_ngcontent-%COMP%]:after {\r\n        content: \"\";\r\n        position: absolute;\r\n        width: 1px;\r\n        height: 81px;\r\n        border-right: 2px dotted #bfbcbc;\r\n        right: 0;\r\n    }\r\n    .accordion[_ngcontent-%COMP%] {\r\n        max-width: 100%;\r\n        margin: 0px auto;\r\n    }\r\n}\r\n\r\n@media (min-width: 768px) and (max-width: 1024px){ \r\n    \r\n    .first-div[_ngcontent-%COMP%] {\r\n        width: 90%;\r\n        display: flex;\r\n        flex-wrap: wrap;\r\n        margin: 0% auto;\r\n    }\r\n    .left[_ngcontent-%COMP%]{\r\n        width: 100%;\r\n    }\r\n    .right-main[_ngcontent-%COMP%]{\r\n        width: 100%;\r\n        padding: 0;\r\n    }\r\n    .right[_ngcontent-%COMP%]:before {\r\n        content: \"\\002B\";\r\n    color: white;\r\n    background: #3fb057;\r\n    padding: 9px 15px;\r\n    border-radius: 50%;\r\n    height: 26px;\r\n    right: -20px;\r\n    top: 72%;\r\n    position: absolute;\r\n    font-size: 27px;\r\n    font-weight: 900;   }\r\n    .right[_ngcontent-%COMP%]:after {\r\n        content: \"\\00D7\";\r\n    color: white;\r\n    background: red;\r\n    padding: 9px 15px;\r\n    border-radius: 50%;\r\n    height: 26px;\r\n    right: -20px;\r\n    top: 19%;\r\n    position: absolute;\r\n    font-size: 27px;\r\n    font-weight: 900;\r\n    }\r\n    .contactmail[_ngcontent-%COMP%] {\r\n        position: absolute;\r\n        border: 2px dotted #bfbcbc;\r\n        font-size: 11px;\r\n        top: 63px;\r\n        \r\n        right: -71px;\r\n    }\r\n    .tagrightimg[_ngcontent-%COMP%]{\r\n        display: flex;\r\n        flex-wrap: wrap;\r\n    }\r\n    .years[_ngcontent-%COMP%]{\r\n        width: 71px;\r\n        text-align: center;\r\n    }\r\n    .parttwo[_ngcontent-%COMP%]:after {\r\n    content: \"\";\r\n    position: absolute;\r\n    width: 1px;\r\n    height: 62px;\r\n    border-right: 2px dotted #bfbcbc;\r\n    right: 0;\r\n    }\r\n    .accordion[_ngcontent-%COMP%] {\r\n        max-width: 100%;\r\n        margin: 0px auto;\r\n    }\r\n}\r\n\r\n@media (max-width: 480px) { \r\n    .first-div[_ngcontent-%COMP%] {\r\n        width: 90%;\r\n        display: flex;\r\n        flex-wrap: wrap;\r\n        margin: 0% auto;\r\n    }\r\n    .left[_ngcontent-%COMP%]{\r\n        width: 100%;\r\n    }\r\n    .right-main[_ngcontent-%COMP%]{\r\n        width: 100%;\r\n        padding: 0;\r\n    }\r\n    .right[_ngcontent-%COMP%]:before {\r\n        content: \"\\002B\";\r\n    color: white;\r\n    background: #3fb057;\r\n    padding: 9px 15px;\r\n    border-radius: 50%;\r\n    height: 26px;\r\n    right: -20px;\r\n    top: 90%;\r\n    position: absolute;\r\n    font-size: 27px;\r\n    font-weight: 900;   }\r\n    .right[_ngcontent-%COMP%]:after {\r\n        content: \"\\00D7\";\r\n    color: white;\r\n    background: red;\r\n    padding: 9px 15px;\r\n    border-radius: 50%;\r\n    height: 26px;\r\n    right: -20px;\r\n    top: 77%;\r\n    position: absolute;\r\n    font-size: 27px;\r\n    font-weight: 900;\r\n    }\r\n    .contactmail[_ngcontent-%COMP%] {\r\n        position: absolute;\r\n        border: 2px dotted #bfbcbc;\r\n        font-size: 11px;\r\n        top: 131px;\r\n        transform: rotate(450deg);\r\n        \r\n        right: -90px;\r\n    }\r\n    .tagrightimg[_ngcontent-%COMP%]{\r\n        display: flex;\r\n        flex-wrap: wrap;\r\n    }\r\n    .years[_ngcontent-%COMP%]{\r\n        width: 71px;\r\n        text-align: center;\r\n    }\r\n    .parttwo[_ngcontent-%COMP%]:after {\r\n        content: \"\";\r\n        position: absolute;\r\n        width: 1px;\r\n        height: 81px;\r\n        border-right: 2px dotted #bfbcbc;\r\n        right: 0;\r\n    }\r\n}\r\n\r\n[type=\"checkbox\"][_ngcontent-%COMP%]:not(:checked), [type=\"checkbox\"][_ngcontent-%COMP%]:checked {\r\n  position: absolute;\r\n  left: -9999px;\r\n}\r\n[type=\"checkbox\"][_ngcontent-%COMP%]:not(:checked)    + label[_ngcontent-%COMP%], [type=\"checkbox\"][_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  padding-left: 1.95em;\r\n  cursor: pointer;\r\n}\r\n\r\n[type=\"checkbox\"][_ngcontent-%COMP%]:not(:checked)    + label[_ngcontent-%COMP%]:before, [type=\"checkbox\"][_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%]:before {\r\n  content: '';\r\n  position: absolute;\r\n  left: 0; top: 0;\r\n  width: 1.25em; height: 1.25em;\r\n  border: 2px solid #ccc;\r\n  background: #fff;\r\n  border-radius: 4px;\r\n  box-shadow: inset 0 1px 3px rgba(0,0,0,.1);\r\n}\r\n\r\n[type=\"checkbox\"][_ngcontent-%COMP%]:not(:checked)    + label[_ngcontent-%COMP%]:after, [type=\"checkbox\"][_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%]:after {\r\n  content: '\\2713\\0020';\r\n  position: absolute;\r\n  background:#3fb057;\r\n  top: .15em; left: .22em;\r\n  font-size: 1.3em;\r\n  line-height: 0.8;\r\n  color: white;\r\n  transition: all .2s;\r\n  font-family: 'Lucida Sans Unicode', 'Arial Unicode MS', Arial;\r\n}\r\n\r\n[type=\"checkbox\"][_ngcontent-%COMP%]:not(:checked)    + label[_ngcontent-%COMP%]:after {\r\n  opacity: 0;\r\n  transform: scale(0);\r\n}\r\n[type=\"checkbox\"][_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%]:after {\r\n  opacity: 1;\r\n  transform: scale(1);\r\n}\r\n\r\n[type=\"checkbox\"][_ngcontent-%COMP%]:disabled:not(:checked)    + label[_ngcontent-%COMP%]:before, [type=\"checkbox\"][_ngcontent-%COMP%]:disabled:checked    + label[_ngcontent-%COMP%]:before {\r\n  box-shadow: none;\r\n  border-color: #bbb;\r\n  background-color: #ddd;\r\n}\r\n[type=\"checkbox\"][_ngcontent-%COMP%]:disabled:checked    + label[_ngcontent-%COMP%]:after {\r\n  color: #999;\r\n}\r\n[type=\"checkbox\"][_ngcontent-%COMP%]:disabled    + label[_ngcontent-%COMP%] {\r\n  color: #aaa;\r\n}\r\n\r\n[type=\"checkbox\"][_ngcontent-%COMP%]:checked:focus    + label[_ngcontent-%COMP%]:before, [type=\"checkbox\"][_ngcontent-%COMP%]:not(:checked):focus    + label[_ngcontent-%COMP%]:before {\r\n  border: 2px dotted blue;\r\n}\r\n\r\nlabel[_ngcontent-%COMP%]:hover:before {\r\n  border: 2px solid #4778d9!important;\r\n}\r\n.tablink[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    cursor: pointer;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0lBQ1YsYUFBYTtJQUNiLGVBQWU7QUFDbkI7QUFDQTtJQUNJLFVBQVU7QUFDZDtBQUNBOztJQUVJLFVBQVU7SUFDVixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLFdBQVc7SUFDWCx1QkFBdUI7SUFDdkIsVUFBVTtFQUdaLGdDQUFnQztBQUNsQztBQUNBOztBQUVBO0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTs7Ozs7OztHQU9HO0FBRUg7SUFDSSxxQkFBcUI7SUFDckIsVUFBVTs7QUFFZDtBQUVBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLFFBQVE7SUFDUixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxXQUFXO0FBQ2Y7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7QUFFQTtJQUNJLFVBQVU7SUFDViw4QkFBOEI7SUFDOUIsYUFBYTtJQUNiLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksK0JBQStCO0FBQ25DO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsZUFBZTtBQUNuQjtBQUNBO0lBQ0k7QUFDSjtBQUNBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7QUFFQTtJQUNJO0FBQ0o7QUFFQTtJQUNJLGFBQWE7SUFDYixlQUFlO0FBQ25CO0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCO0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsMEJBQTBCO0lB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LGVBQWU7SUFDbkI7SUFDQTtRQUNJLFdBQVc7UUFDWCxrQkFBa0I7SUFDdEI7SUFDQTtRQUNJLFdBQVc7UUFDWCxrQkFBa0I7UUFDbEIsVUFBVTtRQUNWLFlBQVk7UUFDWixnQ0FBZ0M7UUFDaEMsUUFBUTtJQUNaO0FBQ0o7QUFLQSwyQkFBMkI7QUFDM0I7O0VBRUUsa0JBQWtCO0VBQ2xCLGFBQWE7QUFDZjtBQUNBOztFQUVFLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsZUFBZTtBQUNqQjtBQUVBLG9CQUFvQjtBQUNwQjs7RUFFRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLE9BQU8sRUFBRSxNQUFNO0VBQ2YsYUFBYSxFQUFFLGNBQWM7RUFDN0Isc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsMENBQTBDO0FBQzVDO0FBQ0Esd0JBQXdCO0FBQ3hCOztFQUVFLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFVBQVUsRUFBRSxXQUFXO0VBQ3ZCLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQiw2REFBNkQ7QUFDL0Q7QUFDQSxnQ0FBZ0M7QUFDaEM7RUFDRSxVQUFVO0VBQ1YsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsbUJBQW1CO0FBQ3JCO0FBQ0Esc0JBQXNCO0FBQ3RCOztFQUVFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxXQUFXO0FBQ2I7QUFDQTtFQUNFLFdBQVc7QUFDYjtBQUNBLGtCQUFrQjtBQUNsQjs7RUFFRSx1QkFBdUI7QUFDekI7QUFFQSxxQ0FBcUM7QUFDckM7RUFDRSxtQ0FBbUM7QUFDckM7QUFFQTtJQUNJLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5maXJzdC1kaXZ7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1hcmdpbjogMCUgYXV0bztcclxufVxyXG4ubGVmdHtcclxuICAgIHdpZHRoOiA0MCU7XHJcbn1cclxuLnJpZ2h0LW1haW57XHJcblxyXG4gICAgd2lkdGg6IDYwJTtcclxuICAgIHBhZGRpbmc6IDAlIDIlO1xyXG59XHJcbi5yaWdodC1tYWlue1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG4ucmlnaHR7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAxMHB4IDZweCAtNnB4ICM1NTU7XHJcbiAgLW1vei1ib3gtc2hhZG93OiAwIDEwcHggNnB4IC02cHggIzU1NTtcclxuICBib3gtc2hhZG93OiAwIDEwcHggNnB4IC02cHggIzU1NTtcclxufVxyXG4ucHJvZmlsZWRldGFpbHN7XHJcbiAgICBcclxufVxyXG5cclxuLnBhcnRvbmV7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLyogLnBhcnRvbmUgc3BhbntcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGJhY2tncm91bmQ6ICMzZmIwNTc7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDo3JTtcclxufSAqL1xyXG5cclxuLm5hbWVzZWN7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgXHJcbn1cclxuXHJcbi5kZWlnaW5hdGlvbntcclxucG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5kZWlnaW5hdGlvbjpiZWZvcmV7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDhweDtcclxuICAgIGhlaWdodDogMHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2JmYmNiYztcclxuICAgIHRvcDogNDclO1xyXG4gICAgbGVmdDogLTExcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBwYWRkaW5nOiA0cHggMDtcclxuICAgIGJvdHRvbTogNTAlO1xyXG59XHJcblxyXG4uc2lkZWljb257XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbn1cclxuLnNpZGVpY29uIGF7XHJcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcclxuICAgIHBhZGRpbmc6IDRweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcblxyXG4ucGFydHR3b3tcclxuICAgIHdpZHRoOiA4NyU7XHJcbiAgICBib3JkZXItdG9wOiAycHggZG90dGVkICNiZmJjYmM7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWFyZ2luLXRvcDogMTZweDtcclxufVxyXG4ucGFydHR3b2xlZnR7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4ucGFydHR3b3JpZ2h0e1xyXG4gICAgYm9yZGVyLWxlZnQ6IDJweCBkb3R0ZWQgI2JmYmNiYztcclxufVxyXG4uZXhwcmllbmNlTGlzdHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuLnRhZ3JpZ2h0aW1ne1xyXG4gICAgZGlzcGxheTogZmxleFxyXG59XHJcbi50YWdyaWdodGltZyBsaSBpbWd7XHJcbiAgICB3aWR0aDogMzJweDtcclxuICAgIGhlaWdodDogYXV0bztcclxufVxyXG5cclxuLnRhZ3NtYWlue1xyXG4gICAgZGlzcGxheTogZmxleFxyXG59XHJcblxyXG4udGFnbGVmdGJ1dHRvbntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuXHJcbi50YWdsZWZ0e1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jb250YWN0bWFpbHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvcmRlcjogMnB4IGRvdHRlZCAjYmZiY2JjO1xyXG4gICAgLyogYm90dG9tOiA2M3B4OyAqL1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgdG9wOiAzNCU7XHJcbiAgICByaWdodDogLTEwJTtcclxufVxyXG5cclxuLyogLmNvbnRhY3RtYWlsOmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgd2lkdGg6IDAuNXB4O1xyXG4gICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgYm9yZGVyLWxlZnQ6IDJweCBkb3R0ZWQgI2JmYmNiYztcclxuICAgIGxlZnQ6IDYxcHg7XHJcbiAgICByaWdodDogMDtcclxuICAgIHRvcDogLTQ1cHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn0gKi9cclxuXHJcbi5leHByaWVuY2VMaXN0e1xyXG4gICAgcGFkZGluZzogN3B4IDA7XHJcbn1cclxuLmV4cHJpZW5jZXtcclxuICAgIHBhZGRpbmc6IDBweCAzcHg7XHJcbn1cclxuLm5hbWVzZWMxe1xyXG4gICAgXHJcbiAgICBcclxuICAgICAgICAvKiBwYWRkaW5nOiAwOyAqL1xyXG4gICAgLyogbWFyZ2luOiAwOyAqL1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNmYjA1NztcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNHB4O1xyXG4gICAgaGVpZ2h0OiA0NnB4O1xyXG4gICAgd2lkdGg6IDQ1cHg7XHJcbiAgICBmb250LXNpemU6IDNveDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogLThweDtcclxufVxyXG5cclxuLm5hbWVzZWMxOmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci13aWR0aDogMzZweCA0MHB4IDAgMDtcclxuICAgIGJvcmRlci1jb2xvcjogIzNmYjA1NyB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IC0xO1xyXG4gICAgdG9wOiAzNnB4O1xyXG4gICAgbGVmdDogMDtcclxufVxyXG4ubmFtZXNlYzEgc3BhbntcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJvdHRvbTogN3B4O1xyXG59XHJcbi5uYW1lc2VjMSBzcGFuIHB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5uYW1lc2VjMTphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci13aWR0aDogMzhweCAzOS41cHggMCAwO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjM2ZiMDU3IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIHRvcDogMzNweDtcclxuICAgIHJpZ2h0OiAwcHg7XHJcbiAgICB6LWluZGV4OiAtMTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcclxufVxyXG5cclxuLnJpZ2h0e1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5yaWdodDpiZWZvcmUge1xyXG4gICAgY29udGVudDogXCJcXDAwMkJcIjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQ6ICMzZmIwNTc7XHJcbiAgICBwYWRkaW5nOiA5cHggMTVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGhlaWdodDogMjZweDtcclxuICAgIC8qIHdpZHRoOiAyN3B4OyAqL1xyXG4gICAgcmlnaHQ6IC0yMHB4O1xyXG4gICAgdG9wOiAzMCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBmb250LXNpemU6IDI3cHg7XHJcbiAgICBmb250LXdlaWdodDogOTAwO1xyXG59XHJcblxyXG5cclxuLnJpZ2h0OjphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIlxcMDBEN1wiO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZDogcmVkO1xyXG4gICAgcGFkZGluZzogOXB4IDE1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBoZWlnaHQ6IDI2cHg7XHJcbiAgICAvKiB3aWR0aDogMjdweDsgKi9cclxuICAgIHJpZ2h0OiAtMjBweDtcclxuICAgIHRvcDogNjAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgZm9udC1zaXplOiAyN3B4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcclxufVxyXG4uZXhwcmllbmNlTGlzdCBsaSBzcGFue1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG4uZGVpZ2luYXRpb24gcHtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbi50b2dnbGVfaGVhZGluZyBpe1xyXG5mbG9hdDogcmlnaHQ7XHJcbi8qIGJhY2tncm91bmQ6ICMzZmIwNTc7ICovXHJcbi8qIHBhZGRpbmc6IDVweCA3cHg7ICovXHJcbmNvbG9yOiAjM2ZiMDU3O1xyXG5mb250LXNpemU6IDI2cHg7XHJcbnBvc2l0aW9uOiByZWxhdGl2ZTtcclxuYm90dG9tOiA2cHg7XHJcblxyXG59XHJcbi55ZWFyc3tcclxuICAgIHdpZHRoOiAxMTZweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uaW5mb3Jte1xyXG4gICAgICBcclxuICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcclxufVxyXG4uaW5mb3JtIGRpdiB7XHJcbiAgICAgIFxyXG4gICAgcGFkZGluZzogN3B4IDM5cHg7XHJcbn1cclxuLmZpcnN0aW50e1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBjb2xvcjogIzNmYjA1NztcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbn1cclxuLm1haW5oZWFkZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogOXB4O1xyXG59XHJcbi5tYWluaGVhZGVyMXtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuLnRhYmxpbmt7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4ubWFpbmhlYWRlcjEgLmZpMSB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZWQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBwYWRkaW5nOiAycHggN3B4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLm1haW5oZWFkZXIxIC5maSB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjM2ZiMDU3O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgcGFkZGluZzogMnB4IDdweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA2cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4uYWN0aXZle1xyXG4gICAgYm9yZGVyLWJvdHRvbToycHggc29saWQgIzNmYjA1NyA7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4uYWNjb3JkaW9uIHtcclxuICAgIG1heC13aWR0aDogNDAwcHg7XHJcbiAgICBtYXJnaW46IDAwcHggYXV0bztcclxuICAgIC8qIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDZweCAzNnB4IC0ycHggcmdiYSgwLDAsMCwwLjUpO1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiAwcHggNnB4IDM2cHggLTJweCByZ2JhKDAsMCwwLDAuNSk7XHJcbiAgICBib3gtc2hhZG93OiAwcHggNnB4IDM2cHggLTJweCByZ2JhKDAsMCwwLDAuNSk7ICovXHJcbiAgfVxyXG4gIFxyXG4vKiBNZWRpYSBRdWVyeSBmb3IgTGFyZ2Ugc2NyZWVucyAqLyBcclxuQG1lZGlhIChtaW4td2lkdGg6IDEyODFweCkgeyBcclxuICAgIFxyXG59IFxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDEwMjVweCkgYW5kIChtYXgtd2lkdGg6IDEyODBweCl7IFxyXG4gICAgXHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiAxMDMwcHgpIGFuZCAobWF4LXdpZHRoOiAxMTgwcHgpeyBcclxuICAgIC5wYXJ0dHdvOmFmdGVyIHtcclxuICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB3aWR0aDogMXB4O1xyXG4gICAgICAgIGhlaWdodDogODlweCFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAycHggZG90dGVkICNiZmJjYmM7XHJcbiAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qIE1lZGlhIFF1ZXJ5IGZvciBsb3cgcmVzb2x1dGlvbiAgVGFibGV0cywgSXBhZHMgKi8gXHJcbkBtZWRpYSAobWluLXdpZHRoOiA1MDBweCkgYW5kIChtYXgtd2lkdGg6IDY1MHB4KSB7XHJcbiAgICAucGFydHR3bzphZnRlciB7XHJcbiAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgd2lkdGg6IDFweDtcclxuICAgICAgICBoZWlnaHQ6IDE4cHghaW1wb3J0YW50O1xyXG4gICAgICAgIGJvcmRlci1yaWdodDogMnB4IGRvdHRlZCAjYmZiY2JjO1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgfVxyXG4gICAgLmNvbnRhY3RtYWlsIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgYm9yZGVyOiAycHggZG90dGVkICNiZmJjYmM7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMXB4IWltcG9ydGFudDtcclxuICAgICAgICB0b3A6IDYzcHghaW1wb3J0YW50O1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1MGRlZykhaW1wb3J0YW50OyBcclxuICAgICAgICByaWdodDogLTcxcHghaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcbkBtZWRpYSAobWluLXdpZHRoOiA0ODFweCkgYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7IFxyXG4gICAgIFxyXG4gICAgLmZpcnN0LWRpdiB7XHJcbiAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICBtYXJnaW46IDAlIGF1dG87XHJcbiAgICB9XHJcbiAgICAubGVmdHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIC5yaWdodC1tYWlue1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICB9XHJcbiAgICAucmlnaHQ6YmVmb3JlIHtcclxuICAgICAgICBjb250ZW50OiBcIlxcMDAyQlwiO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZDogIzNmYjA1NztcclxuICAgIHBhZGRpbmc6IDlweCAxNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgaGVpZ2h0OiAyNnB4O1xyXG4gICAgcmlnaHQ6IC0yMHB4O1xyXG4gICAgdG9wOiA3MiU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBmb250LXNpemU6IDI3cHg7XHJcbiAgICBmb250LXdlaWdodDogOTAwOyAgIH1cclxuICAgIC5yaWdodDphZnRlciB7XHJcbiAgICAgICAgY29udGVudDogXCJcXDAwRDdcIjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQ6IHJlZDtcclxuICAgIHBhZGRpbmc6IDlweCAxNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgaGVpZ2h0OiAyNnB4O1xyXG4gICAgcmlnaHQ6IC0yMHB4O1xyXG4gICAgdG9wOiAxOSU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBmb250LXNpemU6IDI3cHg7XHJcbiAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgfVxyXG4gICAgLmNvbnRhY3RtYWlsIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgYm9yZGVyOiAycHggZG90dGVkICNiZmJjYmM7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgICAgIHRvcDogNjNweDtcclxuICAgICAgICAvKiB0cmFuc2Zvcm06IHJvdGF0ZSg0NTBkZWcpOyAqL1xyXG4gICAgICAgIHJpZ2h0OiAtNzFweDtcclxuICAgIH1cclxuICAgIC50YWdyaWdodGltZ3tcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIH1cclxuICAgIC55ZWFyc3tcclxuICAgICAgICB3aWR0aDogNzFweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAucGFydHR3bzphZnRlciB7XHJcbiAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgd2lkdGg6IDFweDtcclxuICAgICAgICBoZWlnaHQ6IDgxcHg7XHJcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAycHggZG90dGVkICNiZmJjYmM7XHJcbiAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICB9XHJcbiAgICAuYWNjb3JkaW9uIHtcclxuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWFyZ2luOiAwcHggYXV0bztcclxuICAgIH1cclxufSBcclxuICBcclxuLyogTWVkaWEgUXVlcnkgZm9yIFRhYmxldHMgSXBhZHMgcG9ydHJhaXQgbW9kZSAqLyBcclxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogMTAyNHB4KXsgXHJcbiAgICBcclxuICAgIC5maXJzdC1kaXYge1xyXG4gICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgbWFyZ2luOiAwJSBhdXRvO1xyXG4gICAgfVxyXG4gICAgLmxlZnR7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICAucmlnaHQtbWFpbntcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgfVxyXG4gICAgLnJpZ2h0OmJlZm9yZSB7XHJcbiAgICAgICAgY29udGVudDogXCJcXDAwMkJcIjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQ6ICMzZmIwNTc7XHJcbiAgICBwYWRkaW5nOiA5cHggMTVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGhlaWdodDogMjZweDtcclxuICAgIHJpZ2h0OiAtMjBweDtcclxuICAgIHRvcDogNzIlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgZm9udC1zaXplOiAyN3B4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDkwMDsgICB9XHJcbiAgICAucmlnaHQ6YWZ0ZXIge1xyXG4gICAgICAgIGNvbnRlbnQ6IFwiXFwwMEQ3XCI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kOiByZWQ7XHJcbiAgICBwYWRkaW5nOiA5cHggMTVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGhlaWdodDogMjZweDtcclxuICAgIHJpZ2h0OiAtMjBweDtcclxuICAgIHRvcDogMTklO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgZm9udC1zaXplOiAyN3B4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgIH1cclxuICAgIC5jb250YWN0bWFpbCB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGJvcmRlcjogMnB4IGRvdHRlZCAjYmZiY2JjO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgICAgICB0b3A6IDYzcHg7XHJcbiAgICAgICAgLyogdHJhbnNmb3JtOiByb3RhdGUoNDUwZGVnKTsgKi9cclxuICAgICAgICByaWdodDogLTcxcHg7XHJcbiAgICB9XHJcbiAgICAudGFncmlnaHRpbWd7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICB9XHJcbiAgICAueWVhcnN7XHJcbiAgICAgICAgd2lkdGg6IDcxcHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLnBhcnR0d286YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxcHg7XHJcbiAgICBoZWlnaHQ6IDYycHg7XHJcbiAgICBib3JkZXItcmlnaHQ6IDJweCBkb3R0ZWQgI2JmYmNiYztcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgfVxyXG4gICAgLmFjY29yZGlvbiB7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1hcmdpbjogMHB4IGF1dG87XHJcbiAgICB9XHJcbn0gXHJcblxyXG5cclxuICAvKiBNZWRpYSBRdWVyeSBmb3IgTW9iaWxlIERldmljZXMgKi8gXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7IFxyXG4gICAgLmZpcnN0LWRpdiB7XHJcbiAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICBtYXJnaW46IDAlIGF1dG87XHJcbiAgICB9XHJcbiAgICAubGVmdHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIC5yaWdodC1tYWlue1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICB9XHJcbiAgICAucmlnaHQ6YmVmb3JlIHtcclxuICAgICAgICBjb250ZW50OiBcIlxcMDAyQlwiO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZDogIzNmYjA1NztcclxuICAgIHBhZGRpbmc6IDlweCAxNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgaGVpZ2h0OiAyNnB4O1xyXG4gICAgcmlnaHQ6IC0yMHB4O1xyXG4gICAgdG9wOiA5MCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBmb250LXNpemU6IDI3cHg7XHJcbiAgICBmb250LXdlaWdodDogOTAwOyAgIH1cclxuICAgIC5yaWdodDphZnRlciB7XHJcbiAgICAgICAgY29udGVudDogXCJcXDAwRDdcIjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQ6IHJlZDtcclxuICAgIHBhZGRpbmc6IDlweCAxNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgaGVpZ2h0OiAyNnB4O1xyXG4gICAgcmlnaHQ6IC0yMHB4O1xyXG4gICAgdG9wOiA3NyU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBmb250LXNpemU6IDI3cHg7XHJcbiAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgfVxyXG4gICAgLmNvbnRhY3RtYWlsIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgYm9yZGVyOiAycHggZG90dGVkICNiZmJjYmM7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgICAgIHRvcDogMTMxcHg7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDUwZGVnKTtcclxuICAgICAgICAvKiBib3R0b206IDA7ICovXHJcbiAgICAgICAgcmlnaHQ6IC05MHB4O1xyXG4gICAgfVxyXG4gICAgLnRhZ3JpZ2h0aW1ne1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgfVxyXG4gICAgLnllYXJze1xyXG4gICAgICAgIHdpZHRoOiA3MXB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC5wYXJ0dHdvOmFmdGVyIHtcclxuICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB3aWR0aDogMXB4O1xyXG4gICAgICAgIGhlaWdodDogODFweDtcclxuICAgICAgICBib3JkZXItcmlnaHQ6IDJweCBkb3R0ZWQgI2JmYmNiYztcclxuICAgICAgICByaWdodDogMDtcclxuICAgIH1cclxufSBcclxuICBcclxuXHJcblxyXG5cclxuLyogQmFzZSBmb3IgbGFiZWwgc3R5bGluZyAqL1xyXG5bdHlwZT1cImNoZWNrYm94XCJdOm5vdCg6Y2hlY2tlZCksXHJcblt0eXBlPVwiY2hlY2tib3hcIl06Y2hlY2tlZCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IC05OTk5cHg7XHJcbn1cclxuW3R5cGU9XCJjaGVja2JveFwiXTpub3QoOmNoZWNrZWQpICsgbGFiZWwsXHJcblt0eXBlPVwiY2hlY2tib3hcIl06Y2hlY2tlZCArIGxhYmVsIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgcGFkZGluZy1sZWZ0OiAxLjk1ZW07XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4vKiBjaGVja2JveCBhc3BlY3QgKi9cclxuW3R5cGU9XCJjaGVja2JveFwiXTpub3QoOmNoZWNrZWQpICsgbGFiZWw6YmVmb3JlLFxyXG5bdHlwZT1cImNoZWNrYm94XCJdOmNoZWNrZWQgKyBsYWJlbDpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAwOyB0b3A6IDA7XHJcbiAgd2lkdGg6IDEuMjVlbTsgaGVpZ2h0OiAxLjI1ZW07XHJcbiAgYm9yZGVyOiAycHggc29saWQgI2NjYztcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAzcHggcmdiYSgwLDAsMCwuMSk7XHJcbn1cclxuLyogY2hlY2tlZCBtYXJrIGFzcGVjdCAqL1xyXG5bdHlwZT1cImNoZWNrYm94XCJdOm5vdCg6Y2hlY2tlZCkgKyBsYWJlbDphZnRlcixcclxuW3R5cGU9XCJjaGVja2JveFwiXTpjaGVja2VkICsgbGFiZWw6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6ICdcXDI3MTNcXDAwMjAnO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBiYWNrZ3JvdW5kOiMzZmIwNTc7XHJcbiAgdG9wOiAuMTVlbTsgbGVmdDogLjIyZW07XHJcbiAgZm9udC1zaXplOiAxLjNlbTtcclxuICBsaW5lLWhlaWdodDogMC44O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB0cmFuc2l0aW9uOiBhbGwgLjJzO1xyXG4gIGZvbnQtZmFtaWx5OiAnTHVjaWRhIFNhbnMgVW5pY29kZScsICdBcmlhbCBVbmljb2RlIE1TJywgQXJpYWw7XHJcbn1cclxuLyogY2hlY2tlZCBtYXJrIGFzcGVjdCBjaGFuZ2VzICovXHJcblt0eXBlPVwiY2hlY2tib3hcIl06bm90KDpjaGVja2VkKSArIGxhYmVsOmFmdGVyIHtcclxuICBvcGFjaXR5OiAwO1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbn1cclxuW3R5cGU9XCJjaGVja2JveFwiXTpjaGVja2VkICsgbGFiZWw6YWZ0ZXIge1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxufVxyXG4vKiBkaXNhYmxlZCBjaGVja2JveCAqL1xyXG5bdHlwZT1cImNoZWNrYm94XCJdOmRpc2FibGVkOm5vdCg6Y2hlY2tlZCkgKyBsYWJlbDpiZWZvcmUsXHJcblt0eXBlPVwiY2hlY2tib3hcIl06ZGlzYWJsZWQ6Y2hlY2tlZCArIGxhYmVsOmJlZm9yZSB7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxuICBib3JkZXItY29sb3I6ICNiYmI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcclxufVxyXG5bdHlwZT1cImNoZWNrYm94XCJdOmRpc2FibGVkOmNoZWNrZWQgKyBsYWJlbDphZnRlciB7XHJcbiAgY29sb3I6ICM5OTk7XHJcbn1cclxuW3R5cGU9XCJjaGVja2JveFwiXTpkaXNhYmxlZCArIGxhYmVsIHtcclxuICBjb2xvcjogI2FhYTtcclxufVxyXG4vKiBhY2Nlc3NpYmlsaXR5ICovXHJcblt0eXBlPVwiY2hlY2tib3hcIl06Y2hlY2tlZDpmb2N1cyArIGxhYmVsOmJlZm9yZSxcclxuW3R5cGU9XCJjaGVja2JveFwiXTpub3QoOmNoZWNrZWQpOmZvY3VzICsgbGFiZWw6YmVmb3JlIHtcclxuICBib3JkZXI6IDJweCBkb3R0ZWQgYmx1ZTtcclxufVxyXG5cclxuLyogaG92ZXIgc3R5bGUganVzdCBmb3IgaW5mb3JtYXRpb24gKi9cclxubGFiZWw6aG92ZXI6YmVmb3JlIHtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjNDc3OGQ5IWltcG9ydGFudDtcclxufVxyXG5cclxuLnRhYmxpbmsgbGkgYXtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _accordion_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./accordion.component */ "73fu");
/* harmony import */ var _toggle_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./toggle.component */ "EiIL");
/* harmony import */ var _tabs_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tabs.component */ "OIL4");
/* harmony import */ var _tab_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab.component */ "RHbF");








class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _accordion_component__WEBPACK_IMPORTED_MODULE_3__["AccordionComponent"], _toggle_component__WEBPACK_IMPORTED_MODULE_4__["ToggleComponent"], _tabs_component__WEBPACK_IMPORTED_MODULE_5__["TabsComponent"], _tab_component__WEBPACK_IMPORTED_MODULE_6__["TabComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _accordion_component__WEBPACK_IMPORTED_MODULE_3__["AccordionComponent"], _toggle_component__WEBPACK_IMPORTED_MODULE_4__["ToggleComponent"], _tabs_component__WEBPACK_IMPORTED_MODULE_5__["TabsComponent"], _tab_component__WEBPACK_IMPORTED_MODULE_6__["TabComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_compiler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/compiler */ "1uSB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
;





if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map