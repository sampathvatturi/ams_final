"use strict";
(self["webpackChunkenlink"] = self["webpackChunkenlink"] || []).push([["src_app_apps_work_management_admin_sanctions_admin_sanction_module_ts"],{

/***/ 33113:
/*!*******************************************************************************!*\
  !*** ./src/app/apps/work_management/admin_sanctions/admin_sanction.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminSanctionModule": () => (/* binding */ AdminSanctionModule)
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
/* harmony import */ var _admin_sanction_routing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin_sanction.routing */ 3653);
/* harmony import */ var _original_sactions_original_sactions_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./original-sactions/original-sactions.component */ 73904);
/* harmony import */ var _alternate_sanctions_alternate_sanctions_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./alternate-sanctions/alternate-sanctions.component */ 30194);
/* harmony import */ var _revised_sanctions_revised_sanctions_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./revised-sanctions/revised-sanctions.component */ 79993);
/* harmony import */ var _dropping_of_sanction_works_dropping_of_sanction_works_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dropping-of-sanction-works/dropping-of-sanction-works.component */ 29606);
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
class AdminSanctionModule {
}
AdminSanctionModule.ɵfac = function AdminSanctionModule_Factory(t) { return new (t || AdminSanctionModule)(); };
AdminSanctionModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_33__["ɵɵdefineNgModule"]({ type: AdminSanctionModule });
AdminSanctionModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_33__["ɵɵdefineInjector"]({ providers: [
        ngx_toastr__WEBPACK_IMPORTED_MODULE_34__.ToastrService,
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_35__.HTTP_INTERCEPTORS, useClass: src_app_providers_http_http_interceptor__WEBPACK_IMPORTED_MODULE_1__.HttpConfigInterceptor, multi: true },
    ], imports: [src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_36__.ReactiveFormsModule,
        ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_37__.NzGridModule, antdModule, _admin_sanction_routing__WEBPACK_IMPORTED_MODULE_2__.AdminSanctionRoutingModule,
        ngx_toastr__WEBPACK_IMPORTED_MODULE_34__.ToastrModule.forRoot(),
        devextreme_angular__WEBPACK_IMPORTED_MODULE_38__.DxDataGridModule,
        devextreme_angular__WEBPACK_IMPORTED_MODULE_39__.DxButtonModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_33__["ɵɵsetNgModuleScope"](AdminSanctionModule, { declarations: [_original_sactions_original_sactions_component__WEBPACK_IMPORTED_MODULE_3__.OriginalSactionsComponent,
        _alternate_sanctions_alternate_sanctions_component__WEBPACK_IMPORTED_MODULE_4__.AlternateSanctionsComponent,
        _revised_sanctions_revised_sanctions_component__WEBPACK_IMPORTED_MODULE_5__.RevisedSanctionsComponent,
        _dropping_of_sanction_works_dropping_of_sanction_works_component__WEBPACK_IMPORTED_MODULE_6__.DroppingOfSanctionWorksComponent], imports: [src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
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
        ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_32__.NzDrawerModule, _admin_sanction_routing__WEBPACK_IMPORTED_MODULE_2__.AdminSanctionRoutingModule, ngx_toastr__WEBPACK_IMPORTED_MODULE_34__.ToastrModule, devextreme_angular__WEBPACK_IMPORTED_MODULE_38__.DxDataGridModule,
        devextreme_angular__WEBPACK_IMPORTED_MODULE_39__.DxButtonModule] }); })();


/***/ }),

/***/ 3653:
/*!********************************************************************************!*\
  !*** ./src/app/apps/work_management/admin_sanctions/admin_sanction.routing.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminSanctionRoutingModule": () => (/* binding */ AdminSanctionRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _alternate_sanctions_alternate_sanctions_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alternate-sanctions/alternate-sanctions.component */ 30194);
/* harmony import */ var _dropping_of_sanction_works_dropping_of_sanction_works_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dropping-of-sanction-works/dropping-of-sanction-works.component */ 29606);
/* harmony import */ var _original_sactions_original_sactions_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./original-sactions/original-sactions.component */ 73904);
/* harmony import */ var _revised_sanctions_revised_sanctions_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./revised-sanctions/revised-sanctions.component */ 79993);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);







const routes = [
    { path: '', redirectTo: 'original' },
    { path: 'original', component: _original_sactions_original_sactions_component__WEBPACK_IMPORTED_MODULE_2__.OriginalSactionsComponent },
    { path: 'alternate', component: _alternate_sanctions_alternate_sanctions_component__WEBPACK_IMPORTED_MODULE_0__.AlternateSanctionsComponent },
    { path: 'revised', component: _revised_sanctions_revised_sanctions_component__WEBPACK_IMPORTED_MODULE_3__.RevisedSanctionsComponent },
    { path: 'droping', component: _dropping_of_sanction_works_dropping_of_sanction_works_component__WEBPACK_IMPORTED_MODULE_1__.DroppingOfSanctionWorksComponent },
];
class AdminSanctionRoutingModule {
}
AdminSanctionRoutingModule.ɵfac = function AdminSanctionRoutingModule_Factory(t) { return new (t || AdminSanctionRoutingModule)(); };
AdminSanctionRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AdminSanctionRoutingModule });
AdminSanctionRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AdminSanctionRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] }); })();


/***/ }),

/***/ 30194:
/*!***********************************************************************************************************!*\
  !*** ./src/app/apps/work_management/admin_sanctions/alternate-sanctions/alternate-sanctions.component.ts ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlternateSanctionsComponent": () => (/* binding */ AlternateSanctionsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

class AlternateSanctionsComponent {
    constructor() { }
    ngOnInit() {
    }
}
AlternateSanctionsComponent.ɵfac = function AlternateSanctionsComponent_Factory(t) { return new (t || AlternateSanctionsComponent)(); };
AlternateSanctionsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AlternateSanctionsComponent, selectors: [["app-alternate-sanctions"]], decls: 2, vars: 0, template: function AlternateSanctionsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "alternate-sanctions works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhbHRlcm5hdGUtc2FuY3Rpb25zLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 29606:
/*!*************************************************************************************************************************!*\
  !*** ./src/app/apps/work_management/admin_sanctions/dropping-of-sanction-works/dropping-of-sanction-works.component.ts ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DroppingOfSanctionWorksComponent": () => (/* binding */ DroppingOfSanctionWorksComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

class DroppingOfSanctionWorksComponent {
    constructor() { }
    ngOnInit() {
    }
}
DroppingOfSanctionWorksComponent.ɵfac = function DroppingOfSanctionWorksComponent_Factory(t) { return new (t || DroppingOfSanctionWorksComponent)(); };
DroppingOfSanctionWorksComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DroppingOfSanctionWorksComponent, selectors: [["app-dropping-of-sanction-works"]], decls: 2, vars: 0, template: function DroppingOfSanctionWorksComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "dropping-of-sanction-works works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkcm9wcGluZy1vZi1zYW5jdGlvbi13b3Jrcy5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 73904:
/*!*******************************************************************************************************!*\
  !*** ./src/app/apps/work_management/admin_sanctions/original-sactions/original-sactions.component.ts ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OriginalSactionsComponent": () => (/* binding */ OriginalSactionsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

class OriginalSactionsComponent {
    constructor() { }
    ngOnInit() {
    }
}
OriginalSactionsComponent.ɵfac = function OriginalSactionsComponent_Factory(t) { return new (t || OriginalSactionsComponent)(); };
OriginalSactionsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OriginalSactionsComponent, selectors: [["app-original-sactions"]], decls: 2, vars: 0, template: function OriginalSactionsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "original-sactions works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvcmlnaW5hbC1zYWN0aW9ucy5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 79993:
/*!*******************************************************************************************************!*\
  !*** ./src/app/apps/work_management/admin_sanctions/revised-sanctions/revised-sanctions.component.ts ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RevisedSanctionsComponent": () => (/* binding */ RevisedSanctionsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

class RevisedSanctionsComponent {
    constructor() { }
    ngOnInit() {
    }
}
RevisedSanctionsComponent.ɵfac = function RevisedSanctionsComponent_Factory(t) { return new (t || RevisedSanctionsComponent)(); };
RevisedSanctionsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RevisedSanctionsComponent, selectors: [["app-revised-sanctions"]], decls: 2, vars: 0, template: function RevisedSanctionsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "revised-sanctions works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXZpc2VkLXNhbmN0aW9ucy5jb21wb25lbnQuY3NzIn0= */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_apps_work_management_admin_sanctions_admin_sanction_module_ts.js.map