"use strict";
(self["webpackChunkenlink"] = self["webpackChunkenlink"] || []).push([["src_app_apps_work_management_aggrement_aggrement_module_ts"],{

/***/ 97629:
/*!********************************************************************!*\
  !*** ./src/app/apps/work_management/aggrement/aggrement.module.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AggrementModule": () => (/* binding */ AggrementModule)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/shared.module */ 44466);
/* harmony import */ var src_app_providers_http_http_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/providers/http/http.interceptor */ 34477);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ng-zorro-antd/grid */ 70031);
/* harmony import */ var ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ng-zorro-antd/anchor */ 80295);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/button */ 17619);
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/card */ 48332);
/* harmony import */ var ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/avatar */ 44178);
/* harmony import */ var ng_zorro_antd_rate__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/rate */ 72443);
/* harmony import */ var ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/badge */ 98757);
/* harmony import */ var ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/progress */ 98412);
/* harmony import */ var ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/radio */ 45953);
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/table */ 37085);
/* harmony import */ var ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/dropdown */ 75756);
/* harmony import */ var ng_zorro_antd_timeline__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/timeline */ 58737);
/* harmony import */ var ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/tabs */ 68284);
/* harmony import */ var ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/tag */ 5020);
/* harmony import */ var ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/list */ 97555);
/* harmony import */ var ng_zorro_antd_calendar__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-zorro-antd/calendar */ 69464);
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ 33923);
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ng-zorro-antd/form */ 83302);
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ng-zorro-antd/modal */ 81803);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ng-zorro-antd/select */ 81071);
/* harmony import */ var ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ng-zorro-antd/upload */ 81371);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ng-zorro-antd/input */ 22533);
/* harmony import */ var ng_zorro_antd_pagination__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ng-zorro-antd/pagination */ 81549);
/* harmony import */ var ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ng-zorro-antd/date-picker */ 6229);
/* harmony import */ var ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ng-zorro-antd/checkbox */ 28154);
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ng-zorro-antd/message */ 74600);
/* harmony import */ var ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ng-zorro-antd/drawer */ 38611);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ngx-toastr */ 94817);
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! devextreme-angular */ 65821);
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! devextreme-angular */ 41661);
/* harmony import */ var _aggrement_routing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./aggrement.routing */ 60455);
/* harmony import */ var _loa_loa_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loa/loa.component */ 55771);
/* harmony import */ var _aggrement_aggrement_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./aggrement/aggrement.component */ 57381);
/* harmony import */ var _supplementary_aggrement_supplementary_aggrement_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./supplementary-aggrement/supplementary-aggrement.component */ 70819);
/* harmony import */ var _eoat_eoat_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./eoat/eoat.component */ 17146);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/core */ 22560);








































const antdModule = [
    ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_7__.NzButtonModule,
    ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_8__.NzCardModule,
    ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_9__.NzAvatarModule,
    ng_zorro_antd_rate__WEBPACK_IMPORTED_MODULE_10__.NzRateModule,
    ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_11__.NzBadgeModule,
    ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_12__.NzProgressModule,
    ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_13__.NzRadioModule,
    ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_14__.NzTableModule,
    ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_15__.NzDropDownModule,
    ng_zorro_antd_timeline__WEBPACK_IMPORTED_MODULE_16__.NzTimelineModule,
    ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_17__.NzTabsModule,
    ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_18__.NzTagModule,
    ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_19__.NzListModule,
    ng_zorro_antd_calendar__WEBPACK_IMPORTED_MODULE_20__.NzCalendarModule,
    ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_21__.NzToolTipModule,
    ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_22__.NzFormModule,
    ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_23__.NzModalModule,
    ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_24__.NzSelectModule,
    ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_25__.NzUploadModule,
    ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_26__.NzInputModule,
    ng_zorro_antd_pagination__WEBPACK_IMPORTED_MODULE_27__.NzPaginationModule,
    ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_28__.NzDatePickerModule,
    ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_29__.NzCheckboxModule,
    ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_30__.NzMessageModule,
    ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_31__.NzAnchorModule,
    ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_32__.NzDrawerModule
];
class AggrementModule {
}
AggrementModule.ɵfac = function AggrementModule_Factory(t) { return new (t || AggrementModule)(); };
AggrementModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_33__["ɵɵdefineNgModule"]({ type: AggrementModule });
AggrementModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_33__["ɵɵdefineInjector"]({ providers: [
        ngx_toastr__WEBPACK_IMPORTED_MODULE_34__.ToastrService,
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_35__.HTTP_INTERCEPTORS, useClass: src_app_providers_http_http_interceptor__WEBPACK_IMPORTED_MODULE_1__.HttpConfigInterceptor, multi: true },
    ], imports: [src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_36__.ReactiveFormsModule,
        ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_37__.NzGridModule, antdModule, _aggrement_routing__WEBPACK_IMPORTED_MODULE_2__.AggrementRoutingModule,
        ngx_toastr__WEBPACK_IMPORTED_MODULE_34__.ToastrModule.forRoot(),
        devextreme_angular__WEBPACK_IMPORTED_MODULE_38__.DxDataGridModule,
        devextreme_angular__WEBPACK_IMPORTED_MODULE_39__.DxButtonModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_33__["ɵɵsetNgModuleScope"](AggrementModule, { declarations: [_loa_loa_component__WEBPACK_IMPORTED_MODULE_3__.LoaComponent,
        _aggrement_aggrement_component__WEBPACK_IMPORTED_MODULE_4__.AggrementComponent,
        _supplementary_aggrement_supplementary_aggrement_component__WEBPACK_IMPORTED_MODULE_5__.SupplementaryAggrementComponent,
        _eoat_eoat_component__WEBPACK_IMPORTED_MODULE_6__.EoatComponent], imports: [src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_36__.ReactiveFormsModule,
        ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_37__.NzGridModule, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_7__.NzButtonModule,
        ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_8__.NzCardModule,
        ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_9__.NzAvatarModule,
        ng_zorro_antd_rate__WEBPACK_IMPORTED_MODULE_10__.NzRateModule,
        ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_11__.NzBadgeModule,
        ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_12__.NzProgressModule,
        ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_13__.NzRadioModule,
        ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_14__.NzTableModule,
        ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_15__.NzDropDownModule,
        ng_zorro_antd_timeline__WEBPACK_IMPORTED_MODULE_16__.NzTimelineModule,
        ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_17__.NzTabsModule,
        ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_18__.NzTagModule,
        ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_19__.NzListModule,
        ng_zorro_antd_calendar__WEBPACK_IMPORTED_MODULE_20__.NzCalendarModule,
        ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_21__.NzToolTipModule,
        ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_22__.NzFormModule,
        ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_23__.NzModalModule,
        ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_24__.NzSelectModule,
        ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_25__.NzUploadModule,
        ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_26__.NzInputModule,
        ng_zorro_antd_pagination__WEBPACK_IMPORTED_MODULE_27__.NzPaginationModule,
        ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_28__.NzDatePickerModule,
        ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_29__.NzCheckboxModule,
        ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_30__.NzMessageModule,
        ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_31__.NzAnchorModule,
        ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_32__.NzDrawerModule, _aggrement_routing__WEBPACK_IMPORTED_MODULE_2__.AggrementRoutingModule, ngx_toastr__WEBPACK_IMPORTED_MODULE_34__.ToastrModule, devextreme_angular__WEBPACK_IMPORTED_MODULE_38__.DxDataGridModule,
        devextreme_angular__WEBPACK_IMPORTED_MODULE_39__.DxButtonModule] }); })();


/***/ }),

/***/ 60455:
/*!*********************************************************************!*\
  !*** ./src/app/apps/work_management/aggrement/aggrement.routing.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AggrementRoutingModule": () => (/* binding */ AggrementRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _aggrement_aggrement_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./aggrement/aggrement.component */ 57381);
/* harmony import */ var _eoat_eoat_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./eoat/eoat.component */ 17146);
/* harmony import */ var _loa_loa_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loa/loa.component */ 55771);
/* harmony import */ var _supplementary_aggrement_supplementary_aggrement_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./supplementary-aggrement/supplementary-aggrement.component */ 70819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);







const routes = [
    { path: '', redirectTo: 'loa' },
    { path: 'loa', component: _loa_loa_component__WEBPACK_IMPORTED_MODULE_2__.LoaComponent },
    { path: 'signing', component: _aggrement_aggrement_component__WEBPACK_IMPORTED_MODULE_0__.AggrementComponent },
    { path: 'supplementary', component: _supplementary_aggrement_supplementary_aggrement_component__WEBPACK_IMPORTED_MODULE_3__.SupplementaryAggrementComponent },
    { path: 'eoat', component: _eoat_eoat_component__WEBPACK_IMPORTED_MODULE_1__.EoatComponent },
];
class AggrementRoutingModule {
}
AggrementRoutingModule.ɵfac = function AggrementRoutingModule_Factory(t) { return new (t || AggrementRoutingModule)(); };
AggrementRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AggrementRoutingModule });
AggrementRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AggrementRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] }); })();


/***/ }),

/***/ 57381:
/*!*********************************************************************************!*\
  !*** ./src/app/apps/work_management/aggrement/aggrement/aggrement.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AggrementComponent": () => (/* binding */ AggrementComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

class AggrementComponent {
    constructor() { }
    ngOnInit() {
    }
}
AggrementComponent.ɵfac = function AggrementComponent_Factory(t) { return new (t || AggrementComponent)(); };
AggrementComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AggrementComponent, selectors: [["app-aggrement"]], decls: 2, vars: 0, template: function AggrementComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "aggrement works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZ2dyZW1lbnQuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 17146:
/*!***********************************************************************!*\
  !*** ./src/app/apps/work_management/aggrement/eoat/eoat.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EoatComponent": () => (/* binding */ EoatComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

class EoatComponent {
    constructor() { }
    ngOnInit() {
    }
}
EoatComponent.ɵfac = function EoatComponent_Factory(t) { return new (t || EoatComponent)(); };
EoatComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EoatComponent, selectors: [["app-eoat"]], decls: 2, vars: 0, template: function EoatComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "eoat works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlb2F0LmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 55771:
/*!*********************************************************************!*\
  !*** ./src/app/apps/work_management/aggrement/loa/loa.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoaComponent": () => (/* binding */ LoaComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

class LoaComponent {
    constructor() { }
    ngOnInit() {
    }
}
LoaComponent.ɵfac = function LoaComponent_Factory(t) { return new (t || LoaComponent)(); };
LoaComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoaComponent, selectors: [["app-loa"]], decls: 2, vars: 0, template: function LoaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "loa works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2EuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 70819:
/*!*************************************************************************************************************!*\
  !*** ./src/app/apps/work_management/aggrement/supplementary-aggrement/supplementary-aggrement.component.ts ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SupplementaryAggrementComponent": () => (/* binding */ SupplementaryAggrementComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

class SupplementaryAggrementComponent {
    constructor() { }
    ngOnInit() {
    }
}
SupplementaryAggrementComponent.ɵfac = function SupplementaryAggrementComponent_Factory(t) { return new (t || SupplementaryAggrementComponent)(); };
SupplementaryAggrementComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SupplementaryAggrementComponent, selectors: [["app-supplementary-aggrement"]], decls: 2, vars: 0, template: function SupplementaryAggrementComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "supplementary-aggrement works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdXBwbGVtZW50YXJ5LWFnZ3JlbWVudC5jb21wb25lbnQuY3NzIn0= */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_apps_work_management_aggrement_aggrement_module_ts.js.map