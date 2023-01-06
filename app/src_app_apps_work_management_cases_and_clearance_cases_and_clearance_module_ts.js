"use strict";
(self["webpackChunkenlink"] = self["webpackChunkenlink"] || []).push([["src_app_apps_work_management_cases_and_clearance_cases_and_clearance_module_ts"],{

/***/ 65323:
/*!***********************************************************************************************************!*\
  !*** ./src/app/apps/work_management/cases_and_clearance/arbitoration-case/arbitoration-case.component.ts ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArbitorationCaseComponent": () => (/* binding */ ArbitorationCaseComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

class ArbitorationCaseComponent {
    constructor() { }
    ngOnInit() {
    }
}
ArbitorationCaseComponent.ɵfac = function ArbitorationCaseComponent_Factory(t) { return new (t || ArbitorationCaseComponent)(); };
ArbitorationCaseComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ArbitorationCaseComponent, selectors: [["app-arbitoration-case"]], decls: 2, vars: 0, template: function ArbitorationCaseComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "arbitoration-case works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcmJpdG9yYXRpb24tY2FzZS5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 19088:
/*!****************************************************************************************!*\
  !*** ./src/app/apps/work_management/cases_and_clearance/cases_and_clearance.module.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CasesAndClearanceModule": () => (/* binding */ CasesAndClearanceModule)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/shared.module */ 44466);
/* harmony import */ var src_app_providers_http_http_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/providers/http/http.interceptor */ 34477);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ng-zorro-antd/grid */ 70031);
/* harmony import */ var ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ng-zorro-antd/anchor */ 80295);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/button */ 17619);
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/card */ 48332);
/* harmony import */ var ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/avatar */ 44178);
/* harmony import */ var ng_zorro_antd_rate__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/rate */ 72443);
/* harmony import */ var ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/badge */ 98757);
/* harmony import */ var ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/progress */ 98412);
/* harmony import */ var ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/radio */ 45953);
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/table */ 37085);
/* harmony import */ var ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/dropdown */ 75756);
/* harmony import */ var ng_zorro_antd_timeline__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/timeline */ 58737);
/* harmony import */ var ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/tabs */ 68284);
/* harmony import */ var ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/tag */ 5020);
/* harmony import */ var ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-zorro-antd/list */ 97555);
/* harmony import */ var ng_zorro_antd_calendar__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ng-zorro-antd/calendar */ 69464);
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ 33923);
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ng-zorro-antd/form */ 83302);
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ng-zorro-antd/modal */ 81803);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ng-zorro-antd/select */ 81071);
/* harmony import */ var ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ng-zorro-antd/upload */ 81371);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ng-zorro-antd/input */ 22533);
/* harmony import */ var ng_zorro_antd_pagination__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ng-zorro-antd/pagination */ 81549);
/* harmony import */ var ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ng-zorro-antd/date-picker */ 6229);
/* harmony import */ var ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ng-zorro-antd/checkbox */ 28154);
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ng-zorro-antd/message */ 74600);
/* harmony import */ var ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ng-zorro-antd/drawer */ 38611);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ngx-toastr */ 94817);
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! devextreme-angular */ 65821);
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! devextreme-angular */ 41661);
/* harmony import */ var _cases_and_clearance_routing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cases_and_clearance.routing */ 94004);
/* harmony import */ var _forest_clearance_forest_clearance_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forest-clearance/forest-clearance.component */ 86136);
/* harmony import */ var _court_cases_court_cases_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./court-cases/court-cases.component */ 46584);
/* harmony import */ var _vig_enforcement_vig_enforcement_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./vig-enforcement/vig-enforcement.component */ 26525);
/* harmony import */ var _arbitoration_case_arbitoration_case_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./arbitoration-case/arbitoration-case.component */ 65323);
/* harmony import */ var _deviations_deviations_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./deviations/deviations.component */ 63352);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/core */ 22560);









































const antdModule = [
    ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_8__.NzButtonModule,
    ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_9__.NzCardModule,
    ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_10__.NzAvatarModule,
    ng_zorro_antd_rate__WEBPACK_IMPORTED_MODULE_11__.NzRateModule,
    ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_12__.NzBadgeModule,
    ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_13__.NzProgressModule,
    ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_14__.NzRadioModule,
    ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_15__.NzTableModule,
    ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_16__.NzDropDownModule,
    ng_zorro_antd_timeline__WEBPACK_IMPORTED_MODULE_17__.NzTimelineModule,
    ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_18__.NzTabsModule,
    ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_19__.NzTagModule,
    ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_20__.NzListModule,
    ng_zorro_antd_calendar__WEBPACK_IMPORTED_MODULE_21__.NzCalendarModule,
    ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_22__.NzToolTipModule,
    ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_23__.NzFormModule,
    ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_24__.NzModalModule,
    ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_25__.NzSelectModule,
    ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_26__.NzUploadModule,
    ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_27__.NzInputModule,
    ng_zorro_antd_pagination__WEBPACK_IMPORTED_MODULE_28__.NzPaginationModule,
    ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_29__.NzDatePickerModule,
    ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_30__.NzCheckboxModule,
    ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_31__.NzMessageModule,
    ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_32__.NzAnchorModule,
    ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_33__.NzDrawerModule
];
class CasesAndClearanceModule {
}
CasesAndClearanceModule.ɵfac = function CasesAndClearanceModule_Factory(t) { return new (t || CasesAndClearanceModule)(); };
CasesAndClearanceModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_34__["ɵɵdefineNgModule"]({ type: CasesAndClearanceModule });
CasesAndClearanceModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_34__["ɵɵdefineInjector"]({ providers: [
        ngx_toastr__WEBPACK_IMPORTED_MODULE_35__.ToastrService,
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_36__.HTTP_INTERCEPTORS, useClass: src_app_providers_http_http_interceptor__WEBPACK_IMPORTED_MODULE_1__.HttpConfigInterceptor, multi: true },
    ], imports: [src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_37__.ReactiveFormsModule,
        ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_38__.NzGridModule, antdModule, _cases_and_clearance_routing__WEBPACK_IMPORTED_MODULE_2__.CasesAndClearanceRoutingModule,
        ngx_toastr__WEBPACK_IMPORTED_MODULE_35__.ToastrModule.forRoot(),
        devextreme_angular__WEBPACK_IMPORTED_MODULE_39__.DxDataGridModule,
        devextreme_angular__WEBPACK_IMPORTED_MODULE_40__.DxButtonModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_34__["ɵɵsetNgModuleScope"](CasesAndClearanceModule, { declarations: [_forest_clearance_forest_clearance_component__WEBPACK_IMPORTED_MODULE_3__.ForestClearanceComponent,
        _court_cases_court_cases_component__WEBPACK_IMPORTED_MODULE_4__.CourtCasesComponent,
        _vig_enforcement_vig_enforcement_component__WEBPACK_IMPORTED_MODULE_5__.VigEnforcementComponent,
        _arbitoration_case_arbitoration_case_component__WEBPACK_IMPORTED_MODULE_6__.ArbitorationCaseComponent,
        _deviations_deviations_component__WEBPACK_IMPORTED_MODULE_7__.DeviationsComponent], imports: [src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_37__.ReactiveFormsModule,
        ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_38__.NzGridModule, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_8__.NzButtonModule,
        ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_9__.NzCardModule,
        ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_10__.NzAvatarModule,
        ng_zorro_antd_rate__WEBPACK_IMPORTED_MODULE_11__.NzRateModule,
        ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_12__.NzBadgeModule,
        ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_13__.NzProgressModule,
        ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_14__.NzRadioModule,
        ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_15__.NzTableModule,
        ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_16__.NzDropDownModule,
        ng_zorro_antd_timeline__WEBPACK_IMPORTED_MODULE_17__.NzTimelineModule,
        ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_18__.NzTabsModule,
        ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_19__.NzTagModule,
        ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_20__.NzListModule,
        ng_zorro_antd_calendar__WEBPACK_IMPORTED_MODULE_21__.NzCalendarModule,
        ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_22__.NzToolTipModule,
        ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_23__.NzFormModule,
        ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_24__.NzModalModule,
        ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_25__.NzSelectModule,
        ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_26__.NzUploadModule,
        ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_27__.NzInputModule,
        ng_zorro_antd_pagination__WEBPACK_IMPORTED_MODULE_28__.NzPaginationModule,
        ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_29__.NzDatePickerModule,
        ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_30__.NzCheckboxModule,
        ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_31__.NzMessageModule,
        ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_32__.NzAnchorModule,
        ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_33__.NzDrawerModule, _cases_and_clearance_routing__WEBPACK_IMPORTED_MODULE_2__.CasesAndClearanceRoutingModule, ngx_toastr__WEBPACK_IMPORTED_MODULE_35__.ToastrModule, devextreme_angular__WEBPACK_IMPORTED_MODULE_39__.DxDataGridModule,
        devextreme_angular__WEBPACK_IMPORTED_MODULE_40__.DxButtonModule] }); })();


/***/ }),

/***/ 94004:
/*!*****************************************************************************************!*\
  !*** ./src/app/apps/work_management/cases_and_clearance/cases_and_clearance.routing.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CasesAndClearanceRoutingModule": () => (/* binding */ CasesAndClearanceRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _arbitoration_case_arbitoration_case_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arbitoration-case/arbitoration-case.component */ 65323);
/* harmony import */ var _court_cases_court_cases_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./court-cases/court-cases.component */ 46584);
/* harmony import */ var _deviations_deviations_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./deviations/deviations.component */ 63352);
/* harmony import */ var _forest_clearance_forest_clearance_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forest-clearance/forest-clearance.component */ 86136);
/* harmony import */ var _vig_enforcement_vig_enforcement_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./vig-enforcement/vig-enforcement.component */ 26525);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);








const routes = [
    { path: '', redirectTo: 'clearance/forest' },
    { path: 'clearance/forest', component: _forest_clearance_forest_clearance_component__WEBPACK_IMPORTED_MODULE_3__.ForestClearanceComponent },
    { path: 'court-cases', component: _court_cases_court_cases_component__WEBPACK_IMPORTED_MODULE_1__.CourtCasesComponent },
    { path: 'vig-enforcement', component: _vig_enforcement_vig_enforcement_component__WEBPACK_IMPORTED_MODULE_4__.VigEnforcementComponent },
    { path: 'arbitration-cases', component: _arbitoration_case_arbitoration_case_component__WEBPACK_IMPORTED_MODULE_0__.ArbitorationCaseComponent },
    { path: 'cr-deviations', component: _deviations_deviations_component__WEBPACK_IMPORTED_MODULE_2__.DeviationsComponent },
];
class CasesAndClearanceRoutingModule {
}
CasesAndClearanceRoutingModule.ɵfac = function CasesAndClearanceRoutingModule_Factory(t) { return new (t || CasesAndClearanceRoutingModule)(); };
CasesAndClearanceRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: CasesAndClearanceRoutingModule });
CasesAndClearanceRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](CasesAndClearanceRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule] }); })();


/***/ }),

/***/ 46584:
/*!***********************************************************************************************!*\
  !*** ./src/app/apps/work_management/cases_and_clearance/court-cases/court-cases.component.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CourtCasesComponent": () => (/* binding */ CourtCasesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

class CourtCasesComponent {
    constructor() { }
    ngOnInit() {
    }
}
CourtCasesComponent.ɵfac = function CourtCasesComponent_Factory(t) { return new (t || CourtCasesComponent)(); };
CourtCasesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CourtCasesComponent, selectors: [["app-court-cases"]], decls: 2, vars: 0, template: function CourtCasesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "court-cases works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb3VydC1jYXNlcy5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 63352:
/*!*********************************************************************************************!*\
  !*** ./src/app/apps/work_management/cases_and_clearance/deviations/deviations.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeviationsComponent": () => (/* binding */ DeviationsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

class DeviationsComponent {
    constructor() { }
    ngOnInit() {
    }
}
DeviationsComponent.ɵfac = function DeviationsComponent_Factory(t) { return new (t || DeviationsComponent)(); };
DeviationsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DeviationsComponent, selectors: [["app-deviations"]], decls: 2, vars: 0, template: function DeviationsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "deviations works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZXZpYXRpb25zLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 86136:
/*!*********************************************************************************************************!*\
  !*** ./src/app/apps/work_management/cases_and_clearance/forest-clearance/forest-clearance.component.ts ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForestClearanceComponent": () => (/* binding */ ForestClearanceComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

class ForestClearanceComponent {
    constructor() { }
    ngOnInit() {
    }
}
ForestClearanceComponent.ɵfac = function ForestClearanceComponent_Factory(t) { return new (t || ForestClearanceComponent)(); };
ForestClearanceComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ForestClearanceComponent, selectors: [["app-forest-clearance"]], decls: 2, vars: 0, template: function ForestClearanceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "forest-clearance works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3Jlc3QtY2xlYXJhbmNlLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 26525:
/*!*******************************************************************************************************!*\
  !*** ./src/app/apps/work_management/cases_and_clearance/vig-enforcement/vig-enforcement.component.ts ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VigEnforcementComponent": () => (/* binding */ VigEnforcementComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

class VigEnforcementComponent {
    constructor() { }
    ngOnInit() {
    }
}
VigEnforcementComponent.ɵfac = function VigEnforcementComponent_Factory(t) { return new (t || VigEnforcementComponent)(); };
VigEnforcementComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VigEnforcementComponent, selectors: [["app-vig-enforcement"]], decls: 2, vars: 0, template: function VigEnforcementComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "vig-enforcement works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aWctZW5mb3JjZW1lbnQuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_apps_work_management_cases_and_clearance_cases_and_clearance_module_ts.js.map