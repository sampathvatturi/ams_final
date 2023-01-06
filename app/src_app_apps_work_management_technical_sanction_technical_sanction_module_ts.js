"use strict";
(self["webpackChunkenlink"] = self["webpackChunkenlink"] || []).push([["src_app_apps_work_management_technical_sanction_technical_sanction_module_ts"],{

/***/ 53416:
/*!**************************************************************************************************!*\
  !*** ./src/app/apps/work_management/technical_sanction/bridge-design/bridge-design.component.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BridgeDesignComponent": () => (/* binding */ BridgeDesignComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

class BridgeDesignComponent {
    constructor() { }
    ngOnInit() {
    }
}
BridgeDesignComponent.ɵfac = function BridgeDesignComponent_Factory(t) { return new (t || BridgeDesignComponent)(); };
BridgeDesignComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BridgeDesignComponent, selectors: [["app-bridge-design"]], decls: 2, vars: 0, template: function BridgeDesignComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "bridge-design works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJicmlkZ2UtZGVzaWduLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 13598:
/*!************************************************************************************************************!*\
  !*** ./src/app/apps/work_management/technical_sanction/technical-sanction/technical-sanction.component.ts ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TechnicalSanctionComponent": () => (/* binding */ TechnicalSanctionComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

class TechnicalSanctionComponent {
    constructor() { }
    ngOnInit() {
    }
}
TechnicalSanctionComponent.ɵfac = function TechnicalSanctionComponent_Factory(t) { return new (t || TechnicalSanctionComponent)(); };
TechnicalSanctionComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TechnicalSanctionComponent, selectors: [["app-technical-sanction"]], decls: 2, vars: 0, template: function TechnicalSanctionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "technical-sanction works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZWNobmljYWwtc2FuY3Rpb24uY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 52395:
/*!**************************************************************************************!*\
  !*** ./src/app/apps/work_management/technical_sanction/technical_sanction.module.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TechnicalSanctionModule": () => (/* binding */ TechnicalSanctionModule)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/shared.module */ 44466);
/* harmony import */ var src_app_providers_http_http_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/providers/http/http.interceptor */ 34477);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ng-zorro-antd/grid */ 70031);
/* harmony import */ var ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ng-zorro-antd/anchor */ 80295);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/button */ 17619);
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/card */ 48332);
/* harmony import */ var ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/avatar */ 44178);
/* harmony import */ var ng_zorro_antd_rate__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/rate */ 72443);
/* harmony import */ var ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/badge */ 98757);
/* harmony import */ var ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/progress */ 98412);
/* harmony import */ var ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/radio */ 45953);
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/table */ 37085);
/* harmony import */ var ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/dropdown */ 75756);
/* harmony import */ var ng_zorro_antd_timeline__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/timeline */ 58737);
/* harmony import */ var ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/tabs */ 68284);
/* harmony import */ var ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/tag */ 5020);
/* harmony import */ var ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/list */ 97555);
/* harmony import */ var ng_zorro_antd_calendar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/calendar */ 69464);
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ 33923);
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ng-zorro-antd/form */ 83302);
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ng-zorro-antd/modal */ 81803);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ng-zorro-antd/select */ 81071);
/* harmony import */ var ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ng-zorro-antd/upload */ 81371);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ng-zorro-antd/input */ 22533);
/* harmony import */ var ng_zorro_antd_pagination__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ng-zorro-antd/pagination */ 81549);
/* harmony import */ var ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ng-zorro-antd/date-picker */ 6229);
/* harmony import */ var ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ng-zorro-antd/checkbox */ 28154);
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ng-zorro-antd/message */ 74600);
/* harmony import */ var ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ng-zorro-antd/drawer */ 38611);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ngx-toastr */ 94817);
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! devextreme-angular */ 65821);
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! devextreme-angular */ 41661);
/* harmony import */ var _technical_sanction_routing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./technical_sanction.routing */ 52188);
/* harmony import */ var _work_engineer_allotment_work_engineer_allotment_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./work-engineer-allotment/work-engineer-allotment.component */ 13316);
/* harmony import */ var _technical_sanction_technical_sanction_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./technical-sanction/technical-sanction.component */ 13598);
/* harmony import */ var _bridge_design_bridge_design_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bridge-design/bridge-design.component */ 53416);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/core */ 22560);







































const antdModule = [
    ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_6__.NzButtonModule,
    ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_7__.NzCardModule,
    ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_8__.NzAvatarModule,
    ng_zorro_antd_rate__WEBPACK_IMPORTED_MODULE_9__.NzRateModule,
    ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_10__.NzBadgeModule,
    ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_11__.NzProgressModule,
    ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_12__.NzRadioModule,
    ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_13__.NzTableModule,
    ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_14__.NzDropDownModule,
    ng_zorro_antd_timeline__WEBPACK_IMPORTED_MODULE_15__.NzTimelineModule,
    ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_16__.NzTabsModule,
    ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_17__.NzTagModule,
    ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_18__.NzListModule,
    ng_zorro_antd_calendar__WEBPACK_IMPORTED_MODULE_19__.NzCalendarModule,
    ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_20__.NzToolTipModule,
    ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_21__.NzFormModule,
    ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_22__.NzModalModule,
    ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_23__.NzSelectModule,
    ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_24__.NzUploadModule,
    ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_25__.NzInputModule,
    ng_zorro_antd_pagination__WEBPACK_IMPORTED_MODULE_26__.NzPaginationModule,
    ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_27__.NzDatePickerModule,
    ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_28__.NzCheckboxModule,
    ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_29__.NzMessageModule,
    ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_30__.NzAnchorModule,
    ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_31__.NzDrawerModule
];
class TechnicalSanctionModule {
}
TechnicalSanctionModule.ɵfac = function TechnicalSanctionModule_Factory(t) { return new (t || TechnicalSanctionModule)(); };
TechnicalSanctionModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵdefineNgModule"]({ type: TechnicalSanctionModule });
TechnicalSanctionModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵdefineInjector"]({ providers: [
        ngx_toastr__WEBPACK_IMPORTED_MODULE_33__.ToastrService,
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_34__.HTTP_INTERCEPTORS, useClass: src_app_providers_http_http_interceptor__WEBPACK_IMPORTED_MODULE_1__.HttpConfigInterceptor, multi: true },
    ], imports: [src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_35__.ReactiveFormsModule,
        ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_36__.NzGridModule, antdModule, _technical_sanction_routing__WEBPACK_IMPORTED_MODULE_2__.TechnicalSanctionRoutingModule,
        ngx_toastr__WEBPACK_IMPORTED_MODULE_33__.ToastrModule.forRoot(),
        devextreme_angular__WEBPACK_IMPORTED_MODULE_37__.DxDataGridModule,
        devextreme_angular__WEBPACK_IMPORTED_MODULE_38__.DxButtonModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵsetNgModuleScope"](TechnicalSanctionModule, { declarations: [_work_engineer_allotment_work_engineer_allotment_component__WEBPACK_IMPORTED_MODULE_3__.WorkEngineerAllotmentComponent,
        _technical_sanction_technical_sanction_component__WEBPACK_IMPORTED_MODULE_4__.TechnicalSanctionComponent,
        _bridge_design_bridge_design_component__WEBPACK_IMPORTED_MODULE_5__.BridgeDesignComponent], imports: [src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_35__.ReactiveFormsModule,
        ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_36__.NzGridModule, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_6__.NzButtonModule,
        ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_7__.NzCardModule,
        ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_8__.NzAvatarModule,
        ng_zorro_antd_rate__WEBPACK_IMPORTED_MODULE_9__.NzRateModule,
        ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_10__.NzBadgeModule,
        ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_11__.NzProgressModule,
        ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_12__.NzRadioModule,
        ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_13__.NzTableModule,
        ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_14__.NzDropDownModule,
        ng_zorro_antd_timeline__WEBPACK_IMPORTED_MODULE_15__.NzTimelineModule,
        ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_16__.NzTabsModule,
        ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_17__.NzTagModule,
        ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_18__.NzListModule,
        ng_zorro_antd_calendar__WEBPACK_IMPORTED_MODULE_19__.NzCalendarModule,
        ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_20__.NzToolTipModule,
        ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_21__.NzFormModule,
        ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_22__.NzModalModule,
        ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_23__.NzSelectModule,
        ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_24__.NzUploadModule,
        ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_25__.NzInputModule,
        ng_zorro_antd_pagination__WEBPACK_IMPORTED_MODULE_26__.NzPaginationModule,
        ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_27__.NzDatePickerModule,
        ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_28__.NzCheckboxModule,
        ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_29__.NzMessageModule,
        ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_30__.NzAnchorModule,
        ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_31__.NzDrawerModule, _technical_sanction_routing__WEBPACK_IMPORTED_MODULE_2__.TechnicalSanctionRoutingModule, ngx_toastr__WEBPACK_IMPORTED_MODULE_33__.ToastrModule, devextreme_angular__WEBPACK_IMPORTED_MODULE_37__.DxDataGridModule,
        devextreme_angular__WEBPACK_IMPORTED_MODULE_38__.DxButtonModule] }); })();


/***/ }),

/***/ 52188:
/*!***************************************************************************************!*\
  !*** ./src/app/apps/work_management/technical_sanction/technical_sanction.routing.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TechnicalSanctionRoutingModule": () => (/* binding */ TechnicalSanctionRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _bridge_design_bridge_design_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bridge-design/bridge-design.component */ 53416);
/* harmony import */ var _technical_sanction_technical_sanction_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./technical-sanction/technical-sanction.component */ 13598);
/* harmony import */ var _work_engineer_allotment_work_engineer_allotment_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./work-engineer-allotment/work-engineer-allotment.component */ 13316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);






const routes = [
    { path: '', redirectTo: 'original' },
    { path: 'original', component: _technical_sanction_technical_sanction_component__WEBPACK_IMPORTED_MODULE_1__.TechnicalSanctionComponent },
    { path: 'allotment', component: _work_engineer_allotment_work_engineer_allotment_component__WEBPACK_IMPORTED_MODULE_2__.WorkEngineerAllotmentComponent },
    { path: 'bridge-design', component: _bridge_design_bridge_design_component__WEBPACK_IMPORTED_MODULE_0__.BridgeDesignComponent },
];
class TechnicalSanctionRoutingModule {
}
TechnicalSanctionRoutingModule.ɵfac = function TechnicalSanctionRoutingModule_Factory(t) { return new (t || TechnicalSanctionRoutingModule)(); };
TechnicalSanctionRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: TechnicalSanctionRoutingModule });
TechnicalSanctionRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](TechnicalSanctionRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] }); })();


/***/ }),

/***/ 13316:
/*!**********************************************************************************************************************!*\
  !*** ./src/app/apps/work_management/technical_sanction/work-engineer-allotment/work-engineer-allotment.component.ts ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WorkEngineerAllotmentComponent": () => (/* binding */ WorkEngineerAllotmentComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

class WorkEngineerAllotmentComponent {
    constructor() { }
    ngOnInit() {
    }
}
WorkEngineerAllotmentComponent.ɵfac = function WorkEngineerAllotmentComponent_Factory(t) { return new (t || WorkEngineerAllotmentComponent)(); };
WorkEngineerAllotmentComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WorkEngineerAllotmentComponent, selectors: [["app-work-engineer-allotment"]], decls: 2, vars: 0, template: function WorkEngineerAllotmentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "work-engineer-allotment works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3b3JrLWVuZ2luZWVyLWFsbG90bWVudC5jb21wb25lbnQuY3NzIn0= */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_apps_work_management_technical_sanction_technical_sanction_module_ts.js.map