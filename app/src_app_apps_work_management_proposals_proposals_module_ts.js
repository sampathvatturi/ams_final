"use strict";
(self["webpackChunkenlink"] = self["webpackChunkenlink"] || []).push([["src_app_apps_work_management_proposals_proposals_module_ts"],{

/***/ 65506:
/*!*******************************************************************************************!*\
  !*** ./src/app/apps/work_management/proposals/proposals-home/proposals-home.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProposalsHomeComponent": () => (/* binding */ ProposalsHomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

class ProposalsHomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
ProposalsHomeComponent.ɵfac = function ProposalsHomeComponent_Factory(t) { return new (t || ProposalsHomeComponent)(); };
ProposalsHomeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProposalsHomeComponent, selectors: [["app-proposals-home"]], decls: 2, vars: 0, template: function ProposalsHomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "proposals-home works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9wb3NhbHMtaG9tZS5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 8530:
/*!********************************************************************!*\
  !*** ./src/app/apps/work_management/proposals/proposals.module.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProposalsModule": () => (/* binding */ ProposalsModule)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/shared.module */ 44466);
/* harmony import */ var src_app_providers_http_http_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/providers/http/http.interceptor */ 34477);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ng-zorro-antd/grid */ 70031);
/* harmony import */ var ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ng-zorro-antd/anchor */ 80295);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/button */ 17619);
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/card */ 48332);
/* harmony import */ var ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/avatar */ 44178);
/* harmony import */ var ng_zorro_antd_rate__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/rate */ 72443);
/* harmony import */ var ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/badge */ 98757);
/* harmony import */ var ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/progress */ 98412);
/* harmony import */ var ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/radio */ 45953);
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/table */ 37085);
/* harmony import */ var ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/dropdown */ 75756);
/* harmony import */ var ng_zorro_antd_timeline__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/timeline */ 58737);
/* harmony import */ var ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/tabs */ 68284);
/* harmony import */ var ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/tag */ 5020);
/* harmony import */ var ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/list */ 97555);
/* harmony import */ var ng_zorro_antd_calendar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/calendar */ 69464);
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ 33923);
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/form */ 83302);
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-zorro-antd/modal */ 81803);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ng-zorro-antd/select */ 81071);
/* harmony import */ var ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ng-zorro-antd/upload */ 81371);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ng-zorro-antd/input */ 22533);
/* harmony import */ var ng_zorro_antd_pagination__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ng-zorro-antd/pagination */ 81549);
/* harmony import */ var ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ng-zorro-antd/date-picker */ 6229);
/* harmony import */ var ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ng-zorro-antd/checkbox */ 28154);
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ng-zorro-antd/message */ 74600);
/* harmony import */ var ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ng-zorro-antd/drawer */ 38611);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ngx-toastr */ 94817);
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! devextreme-angular */ 65821);
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! devextreme-angular */ 41661);
/* harmony import */ var _proposals_routing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./proposals.routing */ 37907);
/* harmony import */ var _proposals_home_proposals_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./proposals-home/proposals-home.component */ 65506);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/core */ 22560);





































const antdModule = [
    ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_4__.NzButtonModule,
    ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_5__.NzCardModule,
    ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_6__.NzAvatarModule,
    ng_zorro_antd_rate__WEBPACK_IMPORTED_MODULE_7__.NzRateModule,
    ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_8__.NzBadgeModule,
    ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_9__.NzProgressModule,
    ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_10__.NzRadioModule,
    ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_11__.NzTableModule,
    ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_12__.NzDropDownModule,
    ng_zorro_antd_timeline__WEBPACK_IMPORTED_MODULE_13__.NzTimelineModule,
    ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_14__.NzTabsModule,
    ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_15__.NzTagModule,
    ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_16__.NzListModule,
    ng_zorro_antd_calendar__WEBPACK_IMPORTED_MODULE_17__.NzCalendarModule,
    ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_18__.NzToolTipModule,
    ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_19__.NzFormModule,
    ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_20__.NzModalModule,
    ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_21__.NzSelectModule,
    ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_22__.NzUploadModule,
    ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_23__.NzInputModule,
    ng_zorro_antd_pagination__WEBPACK_IMPORTED_MODULE_24__.NzPaginationModule,
    ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_25__.NzDatePickerModule,
    ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_26__.NzCheckboxModule,
    ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_27__.NzMessageModule,
    ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_28__.NzAnchorModule,
    ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_29__.NzDrawerModule
];
class ProposalsModule {
}
ProposalsModule.ɵfac = function ProposalsModule_Factory(t) { return new (t || ProposalsModule)(); };
ProposalsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵdefineNgModule"]({ type: ProposalsModule });
ProposalsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵdefineInjector"]({ providers: [
        ngx_toastr__WEBPACK_IMPORTED_MODULE_31__.ToastrService,
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_32__.HTTP_INTERCEPTORS, useClass: src_app_providers_http_http_interceptor__WEBPACK_IMPORTED_MODULE_1__.HttpConfigInterceptor, multi: true },
    ], imports: [src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_33__.ReactiveFormsModule,
        ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_34__.NzGridModule, antdModule, _proposals_routing__WEBPACK_IMPORTED_MODULE_2__.ProposalsRoutingModule,
        ngx_toastr__WEBPACK_IMPORTED_MODULE_31__.ToastrModule.forRoot(),
        devextreme_angular__WEBPACK_IMPORTED_MODULE_35__.DxDataGridModule,
        devextreme_angular__WEBPACK_IMPORTED_MODULE_36__.DxButtonModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵsetNgModuleScope"](ProposalsModule, { declarations: [_proposals_home_proposals_home_component__WEBPACK_IMPORTED_MODULE_3__.ProposalsHomeComponent], imports: [src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_33__.ReactiveFormsModule,
        ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_34__.NzGridModule, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_4__.NzButtonModule,
        ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_5__.NzCardModule,
        ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_6__.NzAvatarModule,
        ng_zorro_antd_rate__WEBPACK_IMPORTED_MODULE_7__.NzRateModule,
        ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_8__.NzBadgeModule,
        ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_9__.NzProgressModule,
        ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_10__.NzRadioModule,
        ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_11__.NzTableModule,
        ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_12__.NzDropDownModule,
        ng_zorro_antd_timeline__WEBPACK_IMPORTED_MODULE_13__.NzTimelineModule,
        ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_14__.NzTabsModule,
        ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_15__.NzTagModule,
        ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_16__.NzListModule,
        ng_zorro_antd_calendar__WEBPACK_IMPORTED_MODULE_17__.NzCalendarModule,
        ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_18__.NzToolTipModule,
        ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_19__.NzFormModule,
        ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_20__.NzModalModule,
        ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_21__.NzSelectModule,
        ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_22__.NzUploadModule,
        ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_23__.NzInputModule,
        ng_zorro_antd_pagination__WEBPACK_IMPORTED_MODULE_24__.NzPaginationModule,
        ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_25__.NzDatePickerModule,
        ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_26__.NzCheckboxModule,
        ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_27__.NzMessageModule,
        ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_28__.NzAnchorModule,
        ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_29__.NzDrawerModule, _proposals_routing__WEBPACK_IMPORTED_MODULE_2__.ProposalsRoutingModule, ngx_toastr__WEBPACK_IMPORTED_MODULE_31__.ToastrModule, devextreme_angular__WEBPACK_IMPORTED_MODULE_35__.DxDataGridModule,
        devextreme_angular__WEBPACK_IMPORTED_MODULE_36__.DxButtonModule] }); })();


/***/ }),

/***/ 37907:
/*!*********************************************************************!*\
  !*** ./src/app/apps/work_management/proposals/proposals.routing.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProposalsRoutingModule": () => (/* binding */ ProposalsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _proposals_home_proposals_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./proposals-home/proposals-home.component */ 65506);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [
    { path: '', redirectTo: 'home' },
    { path: 'home', component: _proposals_home_proposals_home_component__WEBPACK_IMPORTED_MODULE_0__.ProposalsHomeComponent },
];
class ProposalsRoutingModule {
}
ProposalsRoutingModule.ɵfac = function ProposalsRoutingModule_Factory(t) { return new (t || ProposalsRoutingModule)(); };
ProposalsRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ProposalsRoutingModule });
ProposalsRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ProposalsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_apps_work_management_proposals_proposals_module_ts.js.map