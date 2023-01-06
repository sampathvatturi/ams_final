"use strict";
(self["webpackChunkenlink"] = self["webpackChunkenlink"] || []).push([["src_app_apps_work_management_miscellaneous_miscellaneous_module_ts"],{

/***/ 21555:
/*!****************************************************************************!*\
  !*** ./src/app/apps/work_management/miscellaneous/miscellaneous.module.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MiscellaneousModule": () => (/* binding */ MiscellaneousModule)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/shared.module */ 44466);
/* harmony import */ var src_app_providers_http_http_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/providers/http/http.interceptor */ 34477);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ng-zorro-antd/grid */ 70031);
/* harmony import */ var ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ng-zorro-antd/anchor */ 80295);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/button */ 17619);
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/card */ 48332);
/* harmony import */ var ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/avatar */ 44178);
/* harmony import */ var ng_zorro_antd_rate__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/rate */ 72443);
/* harmony import */ var ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/badge */ 98757);
/* harmony import */ var ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/progress */ 98412);
/* harmony import */ var ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/radio */ 45953);
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/table */ 37085);
/* harmony import */ var ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/dropdown */ 75756);
/* harmony import */ var ng_zorro_antd_timeline__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/timeline */ 58737);
/* harmony import */ var ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/tabs */ 68284);
/* harmony import */ var ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-zorro-antd/tag */ 5020);
/* harmony import */ var ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ng-zorro-antd/list */ 97555);
/* harmony import */ var ng_zorro_antd_calendar__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ng-zorro-antd/calendar */ 69464);
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ 33923);
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ng-zorro-antd/form */ 83302);
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ng-zorro-antd/modal */ 81803);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ng-zorro-antd/select */ 81071);
/* harmony import */ var ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ng-zorro-antd/upload */ 81371);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ng-zorro-antd/input */ 22533);
/* harmony import */ var ng_zorro_antd_pagination__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ng-zorro-antd/pagination */ 81549);
/* harmony import */ var ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ng-zorro-antd/date-picker */ 6229);
/* harmony import */ var ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ng-zorro-antd/checkbox */ 28154);
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ng-zorro-antd/message */ 74600);
/* harmony import */ var ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ng-zorro-antd/drawer */ 38611);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ngx-toastr */ 94817);
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! devextreme-angular */ 65821);
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! devextreme-angular */ 41661);
/* harmony import */ var _miscellaneous_routing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./miscellaneous.routing */ 96363);
/* harmony import */ var _road_transfer_road_transfer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./road-transfer/road-transfer.component */ 2378);
/* harmony import */ var _mondal_work_abstract_mondal_work_abstract_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mondal-work-abstract/mondal-work-abstract.component */ 69019);
/* harmony import */ var _technical_powers_of_officers_technical_powers_of_officers_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./technical-powers-of-officers/technical-powers-of-officers.component */ 85554);
/* harmony import */ var _quarry_chart_for_habitation_quarry_chart_for_habitation_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./quarry-chart-for-habitation/quarry-chart-for-habitation.component */ 81220);
/* harmony import */ var _quarry_chart_for_roads_quarry_chart_for_roads_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./quarry-chart-for-roads/quarry-chart-for-roads.component */ 47535);
/* harmony import */ var ng_zorro_antd_collapse__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ng-zorro-antd/collapse */ 65644);
/* harmony import */ var ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ng-zorro-antd/typography */ 63140);
/* harmony import */ var src_app_shared_text_editor_text_editor_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/text-editor/text-editor.module */ 7798);
/* harmony import */ var ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ng-zorro-antd/divider */ 12857);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/core */ 22560);














































const antdModule = [
    ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_9__.NzButtonModule,
    ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_10__.NzCardModule,
    ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_11__.NzAvatarModule,
    ng_zorro_antd_rate__WEBPACK_IMPORTED_MODULE_12__.NzRateModule,
    ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_13__.NzBadgeModule,
    ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_14__.NzProgressModule,
    ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_15__.NzRadioModule,
    ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_16__.NzTableModule,
    ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_17__.NzDropDownModule,
    ng_zorro_antd_timeline__WEBPACK_IMPORTED_MODULE_18__.NzTimelineModule,
    ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_19__.NzTabsModule,
    ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_20__.NzTagModule,
    ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_21__.NzListModule,
    ng_zorro_antd_calendar__WEBPACK_IMPORTED_MODULE_22__.NzCalendarModule,
    ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_23__.NzToolTipModule,
    ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_24__.NzFormModule,
    ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_25__.NzModalModule,
    ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_26__.NzSelectModule,
    ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_27__.NzUploadModule,
    ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_28__.NzInputModule,
    ng_zorro_antd_pagination__WEBPACK_IMPORTED_MODULE_29__.NzPaginationModule,
    ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_30__.NzDatePickerModule,
    ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_31__.NzCheckboxModule,
    ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_32__.NzMessageModule,
    ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_33__.NzAnchorModule,
    ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_34__.NzDrawerModule,
    ng_zorro_antd_collapse__WEBPACK_IMPORTED_MODULE_35__.NzCollapseModule,
    ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_36__.NzTypographyModule,
    _angular_forms__WEBPACK_IMPORTED_MODULE_37__.FormsModule,
    ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_38__.NzDividerModule
];
class MiscellaneousModule {
}
MiscellaneousModule.ɵfac = function MiscellaneousModule_Factory(t) { return new (t || MiscellaneousModule)(); };
MiscellaneousModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵdefineNgModule"]({ type: MiscellaneousModule });
MiscellaneousModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵdefineInjector"]({ providers: [
        ngx_toastr__WEBPACK_IMPORTED_MODULE_40__.ToastrService,
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_41__.HTTP_INTERCEPTORS, useClass: src_app_providers_http_http_interceptor__WEBPACK_IMPORTED_MODULE_1__.HttpConfigInterceptor, multi: true },
    ], imports: [src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_37__.ReactiveFormsModule,
        ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_42__.NzGridModule, antdModule, _miscellaneous_routing__WEBPACK_IMPORTED_MODULE_2__.MiscellaneousRoutingModule,
        ngx_toastr__WEBPACK_IMPORTED_MODULE_40__.ToastrModule.forRoot(),
        devextreme_angular__WEBPACK_IMPORTED_MODULE_43__.DxDataGridModule,
        devextreme_angular__WEBPACK_IMPORTED_MODULE_44__.DxButtonModule,
        src_app_shared_text_editor_text_editor_module__WEBPACK_IMPORTED_MODULE_8__.TextEditorModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵsetNgModuleScope"](MiscellaneousModule, { declarations: [_road_transfer_road_transfer_component__WEBPACK_IMPORTED_MODULE_3__.RoadTransferComponent,
        _mondal_work_abstract_mondal_work_abstract_component__WEBPACK_IMPORTED_MODULE_4__.MondalWorkAbstractComponent,
        _technical_powers_of_officers_technical_powers_of_officers_component__WEBPACK_IMPORTED_MODULE_5__.TechnicalPowersOfOfficersComponent,
        _quarry_chart_for_habitation_quarry_chart_for_habitation_component__WEBPACK_IMPORTED_MODULE_6__.QuarryChartForHabitationComponent,
        _quarry_chart_for_roads_quarry_chart_for_roads_component__WEBPACK_IMPORTED_MODULE_7__.QuarryChartForRoadsComponent], imports: [src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_37__.ReactiveFormsModule,
        ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_42__.NzGridModule, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_9__.NzButtonModule,
        ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_10__.NzCardModule,
        ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_11__.NzAvatarModule,
        ng_zorro_antd_rate__WEBPACK_IMPORTED_MODULE_12__.NzRateModule,
        ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_13__.NzBadgeModule,
        ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_14__.NzProgressModule,
        ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_15__.NzRadioModule,
        ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_16__.NzTableModule,
        ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_17__.NzDropDownModule,
        ng_zorro_antd_timeline__WEBPACK_IMPORTED_MODULE_18__.NzTimelineModule,
        ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_19__.NzTabsModule,
        ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_20__.NzTagModule,
        ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_21__.NzListModule,
        ng_zorro_antd_calendar__WEBPACK_IMPORTED_MODULE_22__.NzCalendarModule,
        ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_23__.NzToolTipModule,
        ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_24__.NzFormModule,
        ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_25__.NzModalModule,
        ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_26__.NzSelectModule,
        ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_27__.NzUploadModule,
        ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_28__.NzInputModule,
        ng_zorro_antd_pagination__WEBPACK_IMPORTED_MODULE_29__.NzPaginationModule,
        ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_30__.NzDatePickerModule,
        ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_31__.NzCheckboxModule,
        ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_32__.NzMessageModule,
        ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_33__.NzAnchorModule,
        ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_34__.NzDrawerModule,
        ng_zorro_antd_collapse__WEBPACK_IMPORTED_MODULE_35__.NzCollapseModule,
        ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_36__.NzTypographyModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_37__.FormsModule,
        ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_38__.NzDividerModule, _miscellaneous_routing__WEBPACK_IMPORTED_MODULE_2__.MiscellaneousRoutingModule, ngx_toastr__WEBPACK_IMPORTED_MODULE_40__.ToastrModule, devextreme_angular__WEBPACK_IMPORTED_MODULE_43__.DxDataGridModule,
        devextreme_angular__WEBPACK_IMPORTED_MODULE_44__.DxButtonModule,
        src_app_shared_text_editor_text_editor_module__WEBPACK_IMPORTED_MODULE_8__.TextEditorModule] }); })();


/***/ }),

/***/ 96363:
/*!*****************************************************************************!*\
  !*** ./src/app/apps/work_management/miscellaneous/miscellaneous.routing.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MiscellaneousRoutingModule": () => (/* binding */ MiscellaneousRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _mondal_work_abstract_mondal_work_abstract_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mondal-work-abstract/mondal-work-abstract.component */ 69019);
/* harmony import */ var _quarry_chart_for_habitation_quarry_chart_for_habitation_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./quarry-chart-for-habitation/quarry-chart-for-habitation.component */ 81220);
/* harmony import */ var _quarry_chart_for_roads_quarry_chart_for_roads_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./quarry-chart-for-roads/quarry-chart-for-roads.component */ 47535);
/* harmony import */ var _road_transfer_road_transfer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./road-transfer/road-transfer.component */ 2378);
/* harmony import */ var _technical_powers_of_officers_technical_powers_of_officers_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./technical-powers-of-officers/technical-powers-of-officers.component */ 85554);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);








const routes = [
    { path: '', redirectTo: 'roads/road-transfer' },
    { path: 'roads/road-transfer', component: _road_transfer_road_transfer_component__WEBPACK_IMPORTED_MODULE_3__.RoadTransferComponent },
    { path: 'abastract/mandal-works', component: _mondal_work_abstract_mondal_work_abstract_component__WEBPACK_IMPORTED_MODULE_0__.MondalWorkAbstractComponent },
    { path: 'master/technical-powers', component: _technical_powers_of_officers_technical_powers_of_officers_component__WEBPACK_IMPORTED_MODULE_4__.TechnicalPowersOfOfficersComponent },
    { path: 'quarry/chart-habitation', component: _quarry_chart_for_habitation_quarry_chart_for_habitation_component__WEBPACK_IMPORTED_MODULE_1__.QuarryChartForHabitationComponent },
    { path: 'quarry/chart-roads', component: _quarry_chart_for_roads_quarry_chart_for_roads_component__WEBPACK_IMPORTED_MODULE_2__.QuarryChartForRoadsComponent },
];
class MiscellaneousRoutingModule {
}
MiscellaneousRoutingModule.ɵfac = function MiscellaneousRoutingModule_Factory(t) { return new (t || MiscellaneousRoutingModule)(); };
MiscellaneousRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: MiscellaneousRoutingModule });
MiscellaneousRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](MiscellaneousRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule] }); })();


/***/ }),

/***/ 69019:
/*!***********************************************************************************************************!*\
  !*** ./src/app/apps/work_management/miscellaneous/mondal-work-abstract/mondal-work-abstract.component.ts ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MondalWorkAbstractComponent": () => (/* binding */ MondalWorkAbstractComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

class MondalWorkAbstractComponent {
    constructor() { }
    ngOnInit() {
    }
}
MondalWorkAbstractComponent.ɵfac = function MondalWorkAbstractComponent_Factory(t) { return new (t || MondalWorkAbstractComponent)(); };
MondalWorkAbstractComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MondalWorkAbstractComponent, selectors: [["app-mondal-work-abstract"]], decls: 2, vars: 0, template: function MondalWorkAbstractComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "mondal-work-abstract works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb25kYWwtd29yay1hYnN0cmFjdC5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 81220:
/*!*************************************************************************************************************************!*\
  !*** ./src/app/apps/work_management/miscellaneous/quarry-chart-for-habitation/quarry-chart-for-habitation.component.ts ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuarryChartForHabitationComponent": () => (/* binding */ QuarryChartForHabitationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

class QuarryChartForHabitationComponent {
    constructor() { }
    ngOnInit() {
    }
}
QuarryChartForHabitationComponent.ɵfac = function QuarryChartForHabitationComponent_Factory(t) { return new (t || QuarryChartForHabitationComponent)(); };
QuarryChartForHabitationComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: QuarryChartForHabitationComponent, selectors: [["app-quarry-chart-for-habitation"]], decls: 2, vars: 0, template: function QuarryChartForHabitationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "quarry-chart-for-habitation works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJxdWFycnktY2hhcnQtZm9yLWhhYml0YXRpb24uY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 47535:
/*!***************************************************************************************************************!*\
  !*** ./src/app/apps/work_management/miscellaneous/quarry-chart-for-roads/quarry-chart-for-roads.component.ts ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuarryChartForRoadsComponent": () => (/* binding */ QuarryChartForRoadsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

class QuarryChartForRoadsComponent {
    constructor() { }
    ngOnInit() {
    }
}
QuarryChartForRoadsComponent.ɵfac = function QuarryChartForRoadsComponent_Factory(t) { return new (t || QuarryChartForRoadsComponent)(); };
QuarryChartForRoadsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: QuarryChartForRoadsComponent, selectors: [["app-quarry-chart-for-roads"]], decls: 2, vars: 0, template: function QuarryChartForRoadsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "quarry-chart-for-roads works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJxdWFycnktY2hhcnQtZm9yLXJvYWRzLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 2378:
/*!*********************************************************************************************!*\
  !*** ./src/app/apps/work_management/miscellaneous/road-transfer/road-transfer.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoadTransferComponent": () => (/* binding */ RoadTransferComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/message */ 74600);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/icon */ 5655);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/button */ 17619);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 16495);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 36686);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/grid */ 70031);
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/card */ 48332);
/* harmony import */ var ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/list */ 97555);
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/form */ 83302);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/select */ 81071);
/* harmony import */ var ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/upload */ 81371);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/input */ 22533);
/* harmony import */ var ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/date-picker */ 6229);
/* harmony import */ var ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/drawer */ 38611);
/* harmony import */ var ng_zorro_antd_collapse__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/collapse */ 65644);
/* harmony import */ var ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/typography */ 63140);
/* harmony import */ var ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-zorro-antd/divider */ 12857);
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! devextreme-angular */ 65821);
/* harmony import */ var devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! devextreme-angular/ui/nested */ 18237);
/* harmony import */ var devextreme_angular_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! devextreme-angular/core */ 46209);
/* harmony import */ var _shared_text_editor_text_editor_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/text-editor/text-editor.component */ 14577);

























function RoadTransferComponent_dxi_column_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "dxi-column", 24);
} if (rf & 2) {
    const f_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("visible", !f_r5.hide)("dataField", f_r5.field)("caption", f_r5.headerName)("alignment", f_r5.alignment)("width", 175)("allowResizing", false);
} }
function RoadTransferComponent_div_29_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RoadTransferComponent_div_29_Template_div_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const data_r6 = restoredCtx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r7.openSideBarEdit("edit", data_r6.data)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Edit Proposal ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} }
function RoadTransferComponent_div_31_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RoadTransferComponent_div_31_Template_div_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r10.openSideBarEdit("go", $event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " G.O details ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} }
function RoadTransferComponent_div_33_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RoadTransferComponent_div_33_Template_div_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r13.openSideBarEdit("ho", $event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " HandOver ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} }
function RoadTransferComponent_div_35_nz_collapse_panel_23_form_1_nz_option_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "nz-option", 57);
} if (rf & 2) {
    const p_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzValue", p_r24)("nzLabel", p_r24);
} }
function RoadTransferComponent_div_35_nz_collapse_panel_23_form_1_nz_option_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "nz-option", 57);
} if (rf & 2) {
    const p_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzValue", p_r25)("nzLabel", p_r25);
} }
function RoadTransferComponent_div_35_nz_collapse_panel_23_form_1_nz_option_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "nz-option", 58);
} if (rf & 2) {
    const d_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzValue", d_r26.nm)("nzLabel", d_r26.nm);
} }
function RoadTransferComponent_div_35_nz_collapse_panel_23_form_1_nz_option_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "nz-option", 57);
} if (rf & 2) {
    const m_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzValue", m_r27.nm)("nzLabel", m_r27.nm);
} }
const _c0 = function () { return { authorization: "authorization-text" }; };
function RoadTransferComponent_div_35_nz_collapse_panel_23_form_1_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function RoadTransferComponent_div_35_nz_collapse_panel_23_form_1_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r29); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r28.submitForm()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 34)(2, "div", 35)(3, "nz-form-item")(4, "nz-form-label", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Date of proposal Initiation");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "nz-form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "nz-date-picker", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 35)(9, "nz-form-item")(10, "nz-form-label", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Proposal Initiated By Name of the person/Org/PR");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "nz-form-control")(13, "nz-select", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, RoadTransferComponent_div_35_nz_collapse_panel_23_form_1_nz_option_14_Template, 1, 2, "nz-option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 35)(16, "nz-form-item")(17, "nz-form-label", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Proposal Initiated By Dept./PR/Govt.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "nz-form-control")(20, "nz-select", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, RoadTransferComponent_div_35_nz_collapse_panel_23_form_1_nz_option_21_Template, 1, 2, "nz-option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 34)(23, "div", 35)(24, "nz-form-item")(25, "nz-form-label", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "District ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "nz-form-control")(28, "nz-select", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, RoadTransferComponent_div_35_nz_collapse_panel_23_form_1_nz_option_29_Template, 1, 2, "nz-option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 35)(31, "nz-form-item")(32, "nz-form-label", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Mandal");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "nz-form-control")(35, "nz-select", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](36, RoadTransferComponent_div_35_nz_collapse_panel_23_form_1_nz_option_36_Template, 1, 2, "nz-option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 35)(38, "nz-form-item")(39, "nz-form-label", 45)(40, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Name of the Road");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "nz-form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](43, "input", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 34)(45, "div", 35)(46, "nz-form-item")(47, "nz-form-label", 47)(48, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "Full or partial length proposed for transfer");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "nz-form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](51, "input", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 35)(53, "nz-form-item")(54, "nz-form-label", 49)(55, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "Propose transferred Length in Km");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "nz-form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](58, "input", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "div", 35)(60, "nz-form-item")(61, "nz-form-label", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "Upload related Documents");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "nz-form-control")(64, "nz-upload", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("nzChange", function RoadTransferComponent_div_35_nz_collapse_panel_23_form_1_Template_nz_upload_nzChange_64_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r29); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r30.handleChange($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "button", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](66, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, " Click to Upload ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "nz-form-item", 54)(69, "nz-form-control", 55)(70, "button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r17.validateForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSpan", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSpan", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r17.data.proposal_pers);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSpan", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r17.data.proposal_dept);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSpan", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r17.data.districts);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSpan", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r17.data.mandals);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSpan", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSpan", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSpan", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSpan", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzHeaders", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](17, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSpan", 24)("nzOffset", 20);
} }
function RoadTransferComponent_div_35_nz_collapse_panel_23_form_2_nz_option_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "nz-option", 57);
} if (rf & 2) {
    const d_r33 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzValue", d_r33.nm)("nzLabel", d_r33.nm);
} }
function RoadTransferComponent_div_35_nz_collapse_panel_23_form_2_nz_option_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "nz-option", 57);
} if (rf & 2) {
    const m_r34 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzValue", m_r34.nm)("nzLabel", m_r34.nm);
} }
function RoadTransferComponent_div_35_nz_collapse_panel_23_form_2_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function RoadTransferComponent_div_35_nz_collapse_panel_23_form_2_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r36); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r35.submitForm1()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 34)(2, "div", 35)(3, "nz-form-item")(4, "nz-form-label", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Year Of Order");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "nz-form-control")(7, "nz-select", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "nz-option", 60)(9, "nz-option", 61)(10, "nz-option", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 35)(12, "nz-form-item")(13, "nz-form-label", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "nz-form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "nz-date-picker", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 35)(18, "nz-form-item")(19, "nz-form-label", 64)(20, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Transfer GO Proceedings Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "nz-form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "input", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 34)(25, "div", 35)(26, "nz-form-item")(27, "nz-form-label", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Name of the District");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "nz-form-control")(30, "nz-select", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, RoadTransferComponent_div_35_nz_collapse_panel_23_form_2_nz_option_31_Template, 1, 2, "nz-option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 35)(33, "nz-form-item")(34, "nz-form-label", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Mandal");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "nz-form-control")(37, "nz-select", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](38, RoadTransferComponent_div_35_nz_collapse_panel_23_form_2_nz_option_38_Template, 1, 2, "nz-option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 35)(40, "nz-form-item")(41, "nz-form-label", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Road ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "nz-form-control")(44, "nz-select", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](45, "nz-option", 69)(46, "nz-option", 70)(47, "nz-option", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 34)(49, "div", 35)(50, "nz-form-item")(51, "nz-form-label", 72)(52, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "Name of the Road");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "nz-form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](55, "input", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 35)(57, "nz-form-item")(58, "nz-form-label", 74)(59, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "Propose transferred Length in Km as per G.O");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "nz-form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](62, "input", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "div", 35)(64, "nz-form-item")(65, "nz-form-label", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, "Upload G.O copy");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "nz-form-control")(68, "nz-upload", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("nzChange", function RoadTransferComponent_div_35_nz_collapse_panel_23_form_2_Template_nz_upload_nzChange_68_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r36); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r37.handleChange($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "button", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](70, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, " Click to Upload ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "nz-form-item", 54)(73, "nz-form-control", 55)(74, "button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r18.validateForm1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSpan", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSpan", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSpan", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSpan", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r18.data.districts);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSpan", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r18.data.mandals);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSpan", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSpan", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSpan", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSpan", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzHeaders", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](15, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSpan", 24)("nzOffset", 20);
} }
function RoadTransferComponent_div_35_nz_collapse_panel_23_form_3_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Surface Details ");
} }
function RoadTransferComponent_div_35_nz_collapse_panel_23_form_3_ng_template_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " CD Works ");
} }
function RoadTransferComponent_div_35_nz_collapse_panel_23_form_3_ng_template_96_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Remarks ");
} }
function RoadTransferComponent_div_35_nz_collapse_panel_23_form_3_Template(rf, ctx) { if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function RoadTransferComponent_div_35_nz_collapse_panel_23_form_3_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r45); const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r44.submitForm2()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "nz-form-item")(2, "nz-form-label", 76)(3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Actual Transferred length in Km as per site conditions");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "nz-form-control", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "input", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "nz-divider", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, RoadTransferComponent_div_35_nz_collapse_panel_23_form_3_ng_template_8_Template, 2, 0, "ng-template", null, 80, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 34)(11, "div", 35)(12, "nz-form-item")(13, "nz-form-label", 81)(14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Earthen/Track");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "nz-form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "input", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 35)(19, "nz-form-item")(20, "nz-form-label", 83)(21, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Gravel");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "nz-form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "input", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 35)(26, "nz-form-item")(27, "nz-form-label", 85)(28, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "WBM/WMM");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "nz-form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "input", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 34)(33, "div", 35)(34, "nz-form-item")(35, "nz-form-label", 87)(36, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "BT");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "nz-form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "input", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 35)(41, "nz-form-item")(42, "nz-form-label", 89)(43, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "CC");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "nz-form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](46, "input", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "nz-divider", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](48, RoadTransferComponent_div_35_nz_collapse_panel_23_form_3_ng_template_48_Template, 2, 0, "ng-template", null, 91, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 34)(51, "div", 92)(52, "nz-form-item", 93)(53, "nz-form-label", 94)(54, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "No of pipe culverts");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "nz-form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](57, "input", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "div", 92)(59, "nz-form-item")(60, "nz-form-label", 96)(61, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "No of Slab culverts");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "nz-form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](64, "input", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "div", 92)(66, "nz-form-item")(67, "nz-form-label", 98)(68, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, "No of Road Dams");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "nz-form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](71, "input", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "div", 92)(73, "nz-form-item")(74, "nz-form-label", 100)(75, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, "No of Bridges");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "nz-form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](78, "input", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "div", 34)(80, "div", 102)(81, "nz-form-item")(82, "nz-form-label", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](83, "Date of Handing over");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "nz-form-control", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](85, "nz-date-picker", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "div", 102)(87, "nz-form-item")(88, "nz-form-label", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](89, "HandOver Road Chart");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "nz-form-control", 77)(91, "nz-upload", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("nzChange", function RoadTransferComponent_div_35_nz_collapse_panel_23_form_3_Template_nz_upload_nzChange_91_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r45); const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r46.handleChange($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "button", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](93, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](94, " Click to Upload ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "nz-divider", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](96, RoadTransferComponent_div_35_nz_collapse_panel_23_form_3_ng_template_96_Template, 2, 0, "ng-template", null, 105, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "div", 34)(99, "div", 106)(100, "app-text-editor", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("getEdtrEntrTxt", function RoadTransferComponent_div_35_nz_collapse_panel_23_form_3_Template_app_text_editor_getEdtrEntrTxt_100_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r45); const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r47.getEdtrEntrTxt($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "nz-form-item", 54)(102, "nz-form-control", 55)(103, "button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](104, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](9);
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](49);
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](97);
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r19.validateForm2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSpan", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSpan", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzText", _r38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSpan", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSpan", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSpan", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSpan", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSpan", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzText", _r40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSpan", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSpan", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSpan", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSpan", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSpan", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSpan", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSpan", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSpan", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzHeaders", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](22, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzText", _r42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSpan", 24)("nzOffset", 20);
} }
function RoadTransferComponent_div_35_nz_collapse_panel_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nz-collapse-panel", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, RoadTransferComponent_div_35_nz_collapse_panel_23_form_1_Template, 72, 18, "form", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, RoadTransferComponent_div_35_nz_collapse_panel_23_form_2_Template, 76, 16, "form", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, RoadTransferComponent_div_35_nz_collapse_panel_23_form_3_Template, 105, 23, "form", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const panel_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzHeader", panel_r16.name)("nzActive", panel_r16.active)("nzDisabled", panel_r16.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", panel_r16.name === "Proposal Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", panel_r16.name === "G.O Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", panel_r16.name === "HandOver Details");
} }
function RoadTransferComponent_div_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "nz-list")(2, "nz-list-item")(3, "span", 28)(4, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Road ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " 12 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "nz-list-item")(8, "span", 28)(9, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Road Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " 433 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "nz-list-item")(13, "span", 28)(14, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "District");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, " Rajahmundry ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "nz-list-item")(18, "span", 28)(19, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Mandal");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, " Rajahmundry ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "nz-collapse", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, RoadTransferComponent_div_35_nz_collapse_panel_23_Template, 4, 6, "nz-collapse-panel", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzExpandIconPosition", ctx_r4.expandIconPosition);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r4.panels);
} }
const _c1 = function () { return [10, 25, 50, 100]; };
const _c2 = function () { return { overflow: "auto" }; };
class RoadTransferComponent {
    constructor(msg, fb) {
        this.msg = msg;
        this.fb = fb;
        this.rowData = [{ "sno": 1,
                "trnsr_id": 1234,
                "prpsl_dt": "5/11/2015",
                "prpl_init_by_name": "Sagar",
                "prpl_init_by_dept": "Govt.AP",
                "dist": "East Godavari",
                "mand": "Rajanagaram",
                "rd_id": 1,
                "trnsr_nu": "road1",
                "fl_lngth_trnsr_in": 5,
                "trnsfr_lnth_ct": 10,
                "prpsl_st": "1",
                "docs": "Sanction Letter"
            },
            { "sno": 2,
                "trnsr_id": 2134,
                "prpsl_dt": "7/10/2014",
                "prpl_init_by_name": "Sampath",
                "prpl_init_by_dept": "Govt.AP",
                "dist": "West Godavari",
                "mand": "Eluru",
                "rd_id": 2,
                "trnsr_nu": "road2",
                "fl_lngth_trnsr_in": 10,
                "trnsfr_lnth_ct": 12,
                "prpsl_st": "2",
                "docs": "Sanction Letter"
            },
            { "sno": 3,
                "trnsr_id": 3214,
                "prpsl_dt": "9/10/2015",
                "prpl_init_by_name": "Rao",
                "prpl_init_by_dept": "Govt.AP",
                "dist": "Guntur",
                "mand": "Thadikonda",
                "rd_id": 3,
                "trnsr_nu": "road3",
                "fl_lngth_trnsr_in": 15,
                "trnsfr_lnth_ct": 14,
                "prpsl_st": "1",
                "docs": "Sanction Letter"
            },
            { "sno": 4,
                "trnsr_id": 4231,
                "prpsl_dt": "3/11/2016",
                "prpl_init_by_name": "Sai Kumar",
                "prpl_init_by_dept": "Govt.AP",
                "dist": "Prakasham",
                "mand": "Ongole",
                "rd_id": 4,
                "trnsr_nu": "road4",
                "fl_lngth_trnsr_in": 20,
                "trnsfr_lnth_ct": 16,
                "prpsl_st": "1",
                "docs": "Sanction Letter"
            },
            { "sno": 5,
                "trnsr_id": 1423,
                "prpsl_dt": "2/09/2015",
                "prpl_init_by_name": "Hari",
                "prpl_init_by_dept": "Govt.AP",
                "dist": "Chitoor",
                "mand": "Renigunta",
                "rd_id": 5,
                "trnsr_nu": "road5",
                "fl_lngth_trnsr_in": 25,
                "trnsfr_lnth_ct": 18,
                "prpsl_st": "2",
                "docs": "Sanction Letter"
            },
            { "sno": 6,
                "trnsr_id": 3241,
                "prpsl_dt": "1/08/2015",
                "prpl_init_by_name": "Rana",
                "prpl_init_by_dept": "Govt.AP",
                "dist": "Krishna",
                "mand": "Vijayawada",
                "rd_id": 6,
                "trnsr_nu": "road6",
                "fl_lngth_trnsr_in": 22,
                "trnsfr_lnth_ct": 20,
                "prpsl_st": "1",
                "docs": "Sanction Letter"
            }];
        this.data = {
            districts: [{
                    id: 1,
                    nm: "Krishna"
                },
                {
                    id: 2,
                    nm: "Chitoor"
                },
                {
                    id: 3,
                    nm: "Prakasham"
                },
                {
                    id: 4,
                    nm: "Guntur"
                },
                {
                    id: 5,
                    nm: "West Godavari"
                },
                {
                    id: 6,
                    nm: "East Godavari"
                }],
            mandals: [{
                    id: 1,
                    nm: "Vijayawada"
                },
                {
                    id: 2,
                    nm: "Rajanagaram"
                },
                {
                    id: 3,
                    nm: "Eluru"
                },
                {
                    id: 4,
                    nm: "Thadikonda"
                },
                {
                    id: 5,
                    nm: "Ongole"
                },
                {
                    id: 6,
                    nm: "Renigunta"
                }],
            proposal_pers: [
                'Sagar', 'Sampath', 'Rana', 'Rao', 'Sai Kumar', 'Hari'
            ],
            proposal_dept: [
                'Govt.AP'
            ]
        };
        this.permissions = { "slct_in": 1, "insrt_in": 1, "updt_in": 1, "dlte_in": 1, "exprt_in": 1 };
        this.columnDefs = [
            { headerName: 'Sl.No.', field: 'sno', alignment: 'center', filter: false },
            { headerName: 'Road Transfer Identifier', alignment: 'left', field: 'trnsr_id' },
            { headerName: 'Proposal date', alignment: 'left', field: 'prpsl_dt' },
            { headerName: 'Proposal initiated by Name of the Person/ Organization/ Public Representative', alignment: 'left', field: 'prpl_init_by_name' },
            { headerName: 'Poroposal initiated by (Dept./ Public Representatives/ Govt)', alignment: 'center', field: 'prpl_init_by_dept' },
            { headerName: 'District', field: 'dist', alignment: 'left' },
            { headerName: 'Mandal', field: 'mand', alignment: 'center' },
            { headerName: 'Road Identifier', alignment: 'left', field: 'rd_id' },
            { headerName: 'Road type Name', field: 'trnsr_nu', alignment: 'center' },
            { headerName: 'Full length transfer indicator', alignment: 'center', field: 'fl_lngth_trnsr_in' },
            { headerName: 'Propose transferred length in km', alignment: 'center', field: 'trnsfr_lnth_ct' },
            { headerName: 'Stage of Proposal', alignment: 'left', field: 'prpsl_st' },
            { headerName: 'Upload Related documents', alignment: 'left', field: 'docs' },
        ];
        this.showForm = false;
        this.expandIconPosition = 'right';
        this.panels = [
            {
                active: false,
                name: 'Proposal Details',
                disabled: false
            },
            {
                active: false,
                disabled: false,
                name: 'G.O Details'
            },
            {
                active: false,
                disabled: false,
                name: 'HandOver Details'
            }
        ];
        this.addform();
        this.editform('');
        this.goform();
        this.hoform();
    }
    ngOnInit() {
    }
    handleChange(info) {
        if (info.file.status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (info.file.status === 'done') {
            this.msg.success(`${info.file.name} file uploaded successfully`);
        }
        else if (info.file.status === 'error') {
            this.msg.error(`${info.file.name} file upload failed.`);
        }
    }
    onToolbarPreparing(e) {
        e.toolbarOptions.items.unshift({
            location: 'after',
            widget: 'dxButton',
            options: {
                icon: 'plus',
                text: 'Add Proposal',
                onClick: this.openSideBar.bind(this, 'new'),
                bindingOptions: {
                    'disabled': 'isEmailButtonDisabled'
                }
            }
        });
    }
    openSideBar() {
        this.showForm = true;
        this.panels[0].active = true;
        this.addform();
    }
    openSideBarEdit(role, data) {
        if (role === 'edit') {
            this.showForm = true;
            this.panels[0].active = true;
            this.editform(data);
        }
        else if (role === 'go') {
            this.showForm = true;
            this.panels[1].active = true;
            this.goform();
        }
        else {
            this.showForm = true;
            this.panels[2].active = true;
            this.hoform();
        }
    }
    addform() {
        this.validateForm = this.fb.group({
            datePicker: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            prop_init_POPR: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            prop_init_DPRG: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            district: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            mandal: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            nameofroad: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            lengthofroad: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            lengthofroadproposed: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]]
        });
    }
    editform(data) {
        console.log(data);
        this.validateForm = this.fb.group({
            datePicker: [data.prpsl_dt, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            prop_init_POPR: [data.prpl_init_by_name, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            prop_init_DPRG: [data.prpl_init_by_dept, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            district: [data.dist, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            mandal: [data.mand, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            nameofroad: [data.trnsr_nu, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            lengthofroad: [data.fl_lngth_trnsr_in, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            lengthofroadproposed: [data.trnsfr_lnth_ct, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]]
        });
    }
    goform() {
        this.validateForm1 = this.fb.group({
            yr_of_odr: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            datePicker1: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            trns_go_prcdngs_num: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            dist_name: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            mandal_name: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            road_id: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            nameofroad1: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            lengthofroadproposedgo: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]]
        });
    }
    hoform() {
        this.validateForm2 = this.fb.group({
            actl_lgt_aspr_site: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            earthen: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            gravel: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            wbm: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            bt: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            cc: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            num_of_pipeculvrts: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            num_of_slabculvrts: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            num_of_road_dams: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            num_of_brdgs: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            datePicker2: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
        });
    }
    close() {
        this.showForm = false;
        this.panels[0].active = false;
        this.panels[1].active = false;
        this.panels[2].active = false;
    }
    submitForm() {
        if (this.validateForm.valid) {
            console.log('submit', this.validateForm.value);
        }
    }
    submitForm1() {
        console.log('submit', this.validateForm1.value);
    }
    submitForm2() {
        if (this.validateForm.valid) {
            console.log('submit', this.validateForm2.value);
        }
        else {
        }
    }
}
RoadTransferComponent.ɵfac = function RoadTransferComponent_Factory(t) { return new (t || RoadTransferComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_3__.NzMessageService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.UntypedFormBuilder)); };
RoadTransferComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: RoadTransferComponent, selectors: [["app-road-transfer"]], decls: 36, vars: 46, consts: [[2, "text-align", "center"], ["nz-row", "", 3, "nzGutter"], ["nz-col", "", 3, "nzSpan"], ["nzTitle", "15"], ["nzTitle", "9"], ["nzTitle", "5"], [1, "ds-card", "grid"], ["id", "gridContainer", 1, "p-8", "flow", 2, "width", "100%", 3, "wordWrapEnabled", "dataSource", "remoteOperations", "allowColumnReordering", "rowAlternationEnabled", "allowColumnResizing", "showColumnLines", "showRowLines", "showBorders", "onToolbarPreparing"], [3, "pageSize"], ["columnRenderingMode", "virtual"], [3, "visible", "showPageSizeSelector", "allowedPageSizes", "showInfo"], [3, "visible", "highlightCaseSensitive"], [3, "visible"], [3, "autoExpandAll"], ["mode", "select", 3, "enabled"], ["fileName", "Change Log", 3, "enabled", "allowExportSelectedData"], [3, "visible", "dataField", "caption", "alignment", "width", "allowResizing", 4, "ngFor", "ngForOf"], ["type", "buttons", "cellTemplate", "viewTemplate", 3, "showInColumnChooser", "visible", "width"], [4, "dxTemplate", "dxTemplateOf"], ["type", "button1", "cellTemplate", "EditTemplate", 3, "showInColumnChooser", "width"], [3, "click", 4, "dxTemplate", "dxTemplateOf"], ["type", "button2", "cellTemplate", "frmrTemplate", 3, "showInColumnChooser", "visible", "width"], ["nzTitle", "Proposal details", 3, "nzBodyStyle", "nzMaskClosable", "nzWidth", "nzVisible", "nzOnClose"], [4, "nzDrawerContent"], [3, "visible", "dataField", "caption", "alignment", "width", "allowResizing"], [1, "tblEdtBtn", 3, "click"], [3, "click"], [1, "cursor-pointer", "tblEdtBtn"], ["nz-typography", ""], ["nzAccordion", "", 3, "nzExpandIconPosition"], [3, "nzHeader", "nzActive", "nzDisabled", 4, "ngFor", "ngForOf"], [3, "nzHeader", "nzActive", "nzDisabled"], ["nz-form", "", 3, "formGroup", "ngSubmit", 4, "ngIf"], ["nz-form", "", 3, "formGroup", "ngSubmit"], [1, "row"], [1, "col-md-4"], ["nzRequired", "", 3, "nzSpan"], ["formControlName", "datePicker"], ["nzShowSearch", "", "nzAllowClear", "", "formControlName", "prop_init_POPR"], [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"], ["nzShowSearch", "", "nzAllowClear", "", "formControlName", "prop_init_DPRG"], ["nzRequired", "", 1, "ds-label", 3, "nzSpan"], ["nzShowSearch", "", "nzAllowClear", "", "formControlName", "district"], ["selected", "selected", 3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"], ["nzShowSearch", "", "nzAllowClear", "", "formControlName", "mandal"], ["nzFor", "nameofroad", "nzRequired", "", 1, "ds-label", 3, "nzSpan"], ["nz-input", "", "id", "nameofroad", "formControlName", "nameofroad"], ["nzFor", "lengthofroad", "nzRequired", "", 1, "ds-label", 3, "nzSpan"], ["nz-input", "", "id", "lengthofroad", "formControlName", "lengthofroad", "type", "number"], ["nzFor", "lengthofroadproposed", "nzRequired", "", 1, "ds-label", 3, "nzSpan"], ["nz-input", "", "id", "lengthofroadproposed", "formControlName", "lengthofroadproposed", "type", "number"], ["nzAction", "https://www.mocky.io/v2/5cc8019d300000980a055e76", 3, "nzHeaders", "nzChange"], ["nz-button", ""], ["nz-icon", "", "nzType", "upload"], ["nz-row", ""], [3, "nzSpan", "nzOffset"], ["nz-button", "", "nzType", "primary", 1, "sb_btn"], [3, "nzValue", "nzLabel"], ["selected", "selected", 3, "nzValue", "nzLabel"], ["nzShowSearch", "", "nzAllowClear", "", "formControlName", "yr_of_odr"], ["nzValue", "2015", "nzLabel", "2015"], ["nzValue", "2016", "nzLabel", "2016"], ["nzValue", "2017", "nzLabel", "2017"], ["formControlName", "datePicker1"], ["nzFor", "trns_go_prcdngs_num", "nzRequired", "", 1, "ds-label", 3, "nzSpan"], ["nz-input", "", "id", "trns_go_prcdngs_num", "formControlName", "trns_go_prcdngs_num"], ["nzShowSearch", "", "nzAllowClear", "", "formControlName", "dist_name"], ["nzShowSearch", "", "nzAllowClear", "", "formControlName", "mandal_name"], ["formControlName", "road_id"], ["nzValue", "jack", "nzLabel", "Jack"], ["nzValue", "lucy", "nzLabel", "Lucy"], ["nzValue", "disabled", "nzLabel", "Disabled"], ["nzFor", "nameofroad1", "nzRequired", "", 3, "nzSpan"], ["nz-input", "", "id", "nameofroad1", "formControlName", "nameofroad1"], ["nzFor", "lengthofroadproposedgo", "nzRequired", "", 3, "nzSpan"], ["nz-input", "", "id", "lengthofroadproposedgp", "formControlName", "lengthofroadproposedgo", "type", "number"], ["nzFor", "actl_lgt_aspr_site", "nzRequired", "", 1, "pull_left", 3, "nzSpan"], [3, "nzSpan"], ["type", "number", "nz-input", "", "id", "actl_lgt_aspr_site", "formControlName", "actl_lgt_aspr_site"], ["nzOrientation", "left", 3, "nzText"], ["surf_text", ""], ["nzFor", "earthen", "nzRequired", "", 1, "ds-label", 3, "nzSpan"], ["nz-input", "", "id", "earthen", "formControlName", "earthen"], ["nzFor", "gravel", "nzRequired", "", 1, "ds-label", 3, "nzSpan"], ["nz-input", "", "id", "gravel", "formControlName", "gravel"], ["nzFor", "wbm", "nzRequired", "", 1, "ds-label", 3, "nzSpan"], ["nz-input", "", "id", "wbm", "formControlName", "wbm"], ["nzFor", "bt", "nzRequired", "", 1, "ds-label", 3, "nzSpan"], ["nz-input", "", "id", "bt", "formControlName", "bt"], ["nzFor", "cc", "nzRequired", "", 1, "ds-label", 3, "nzSpan"], ["nz-input", "", "id", "cc", "formControlName", "cc"], ["cd_text", ""], [1, "col-md-3"], [1, "ds-item"], ["nzFor", "num_of_pipeculvrts", "nzRequired", "", 1, "ds-label", 3, "nzSpan"], ["nz-input", "", "id", "num_of_pipeculvrts", "formControlName", "num_of_pipeculvrts", "type", "number"], ["nzFor", "num_of_slabculvrts", "nzRequired", "", 1, "ds-label", 3, "nzSpan"], ["nz-input", "", "id", "num_of_slabculvrts", "formControlName", "num_of_slabculvrts", "type", "number"], ["nzFor", "num_of_road_dams", "nzRequired", "", 1, "ds-label", 3, "nzSpan"], ["nz-input", "", "id", "num_of_road_dams", "formControlName", "num_of_road_dams", "type", "number"], ["nzFor", "num_of_brdgs", "nzRequired", "", 1, "ds-label", 3, "nzSpan"], ["nz-input", "", "id", "num_of_brdgs", "formControlName", "num_of_brdgs", "type", "number"], [1, "col-md-6"], ["nzRequired", "", 1, "pull_left", 3, "nzSpan"], ["formControlName", "datePicker2"], ["rmrk_text", ""], [1, "col-md-12"], [3, "getEdtrEntrTxt"], ["nz-icon", "", "nzType", "form", "nzTheme", "outline", 1, "dvdr-icn"], ["nz-icon", "", "nzType", "edit", "nzTheme", "outline", 1, "dvdr-icn"]], template: function RoadTransferComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "nz-card", 3)(4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "In proposals");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 2)(7, "nz-card", 4)(8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "GO Issued Pending Transfer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 2)(11, "nz-card", 5)(12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Handed Over");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 6)(15, "dx-data-grid", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onToolbarPreparing", function RoadTransferComponent_Template_dx_data_grid_onToolbarPreparing_15_listener($event) { return ctx.permissions.insrt_in == 1 ? ctx.onToolbarPreparing($event) : false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "dxo-paging", 8)(17, "dxo-scrolling", 9)(18, "dxo-pager", 10)(19, "dxo-search-panel", 11)(20, "dxo-filter-panel", 12)(21, "dxo-header-filter", 12)(22, "dxo-group-panel", 12)(23, "dxo-grouping", 13)(24, "dxo-column-chooser", 14)(25, "dxo-export", 15)(26, "dxo-filter-row", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, RoadTransferComponent_dxi_column_27_Template, 1, 6, "dxi-column", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "dxi-column", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, RoadTransferComponent_div_29_Template, 3, 0, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "dxi-column", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, RoadTransferComponent_div_31_Template, 3, 0, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "dxi-column", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](33, RoadTransferComponent_div_33_Template, 3, 0, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "nz-drawer", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("nzOnClose", function RoadTransferComponent_Template_nz_drawer_nzOnClose_34_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](35, RoadTransferComponent_div_35_Template, 24, 2, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzGutter", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSpan", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSpan", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSpan", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("wordWrapEnabled", true)("dataSource", ctx.rowData)("remoteOperations", false)("allowColumnReordering", true)("rowAlternationEnabled", true)("allowColumnResizing", true)("showColumnLines", true)("showRowLines", true)("showBorders", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("pageSize", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("visible", true)("showPageSizeSelector", true)("allowedPageSizes", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](44, _c1))("showInfo", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("visible", true)("highlightCaseSensitive", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("visible", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("visible", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("visible", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("autoExpandAll", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("enabled", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("enabled", ctx.permissions.exprt_in == 1 ? true : false)("allowExportSelectedData", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("visible", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.columnDefs);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("showInColumnChooser", false)("visible", ctx.permissions.updt_in == 1 ? true : false)("width", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dxTemplateOf", "viewTemplate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("showInColumnChooser", false)("width", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dxTemplateOf", "EditTemplate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("showInColumnChooser", false)("visible", true)("width", 150);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dxTemplateOf", "frmrTemplate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzBodyStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](45, _c2))("nzMaskClosable", false)("nzWidth", 1050)("nzVisible", ctx.showForm);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_5__.NzIconDirective, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_6__.NzButtonComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_7__["ɵNzTransitionPatchDirective"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_8__.NzWaveDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_9__.NzColDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_9__.NzRowDirective, ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_10__.NzCardComponent, ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_11__.NzListComponent, ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_11__.NzListItemComponent, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_12__.NzFormDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_12__.NzFormItemComponent, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_12__.NzFormLabelComponent, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_12__.NzFormControlComponent, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_13__.NzOptionComponent, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_13__.NzSelectComponent, ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_14__.NzUploadComponent, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_15__.NzInputDirective, ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_16__.NzDatePickerComponent, ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_17__.NzDrawerComponent, ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_17__.NzDrawerContentDirective, ng_zorro_antd_collapse__WEBPACK_IMPORTED_MODULE_18__.NzCollapsePanelComponent, ng_zorro_antd_collapse__WEBPACK_IMPORTED_MODULE_18__.NzCollapseComponent, ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_19__.NzTypographyComponent, ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_20__.NzDividerComponent, devextreme_angular__WEBPACK_IMPORTED_MODULE_21__.DxDataGridComponent, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_22__.DxoColumnChooserComponent, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_22__.DxiColumnComponent, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_22__.DxoHeaderFilterComponent, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_22__.DxoExportComponent, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_22__.DxoFilterPanelComponent, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_22__.DxoFilterRowComponent, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_22__.DxoGroupingComponent, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_22__.DxoGroupPanelComponent, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_22__.DxoPagerComponent, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_22__.DxoPagingComponent, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_22__.DxoScrollingComponent, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_22__.DxoSearchPanelComponent, devextreme_angular_core__WEBPACK_IMPORTED_MODULE_23__.DxTemplateDirective, _shared_text_editor_text_editor_component__WEBPACK_IMPORTED_MODULE_0__.TextEditorComponent], styles: [".ds-card.grid {\n  max-width: 100%;\n  min-width: 100%;\n  border: 0px solid;\n  padding: 10px;\n  background: #fff;\n  border-color: rgb(240, 240, 240) !important;\n  border-radius: 8px;\n  border: 1px solid;\n  margin-top: 12px;\n}\n  .dx-datagrid .dx-datagid-headers .dx-header-row .dx-datagrid .dx-datagrid-headers .dx-header-filter {\n  outline: none;\n  background: #3190a6;\n  \n  color: #ffffff;\n  font-weight: 900;\n  font-size: 13px;\n  margin-right: 4px;\n}\n  .dx-datagrid .dx-header-filter:before {\n  content: \"\\f050\";\n  font-size: 10px;\n}\n  .dx-datagrid-headers {\n  color: #959595;\n  font-weight: normal;\n  touch-action: pinch-zoom;\n  border-bottom: 5px solid #ddd !important;\n}\n  .dx-datagrid .dx-column-indicators {\n  float: right;\n}\n  .dx-datagrid .dx-row-lines > td {\n  border-bottom: 1px solid #f5f5f5 !important;\n}\n  .dx-datagrid .dx-row > th {\n  background-color: #f9f9f9 !important;\n}\n  .dx-datagrid-borders .dx-datagrid-rowsview,   .dx-datagrid-headers + .dx-datagrid-rowsview {\n  border-top: 1px solid #f9f9f9;\n}\n  .dx-datagrid-borders > .dx-datagrid-rowsview,   .dx-datagrid-borders > .dx-datagrid-total-footer {\n  border-bottom: 1px solid #f9f9f9;\n}\n  .dx-datagrid .dx-column-lines > td {\n  border-left: 1px solid #f5f5f5 !important;\n  border-right: 1px solid #f5f5f5 !important;\n  font-size: 14px;\n  color: black;\n}\n  .dx-datagrid-content .dx-datagrid-table .dx-row .dx-command-edit {\n  width: 100px;\n  min-width: 100px;\n  cursor: pointer;\n}\n  .dx-datagrid .dx-datagrid-headers .dx-header-row > td,   .dx-datagrid .dx-datagrid-headers .dx-header-filter {\n  text-align: center !important;\n  text-transform: capitalize !important;\n}\n  .table-striped tbody tr:nth-of-type(odd) {\n  background-color: #f0f5fb;\n}\n  .dx-row .dx-column-lines .dx-header-row {\n  color: #fbfcfd;\n}\n  .dx-datagrid-rowsview .dx-row {\n  background: rgb(228, 228, 228);\n}\n  .dx-datagrid-headers .dx-datagrid-table .dx-row > td {\n  border-bottom: 1px solid #ddd;\n  color: white !important;\n}\n  .dx-texteditor-input {\n  border-radius: 0px;\n}\n  .dx-datagrid-rowsview .dx-row {\n  background: #ffffff;\n}\n  .dx-datagrid .dx-row-alt > td, .dx-datagrid[_ngcontent-%COMP%]   .dx-row-alt[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > td[_ngcontent-%COMP%] {\n  background-color: #fafafa;\n  border-top: 1px solid #f5f5f5;\n  border-bottom: 1px solid #f5f5f5;\n}\n  .ant-picker {\n  width: 100% !important;\n  border-radius: 5px !important;\n}\n  .dx-datagrid-summary-item {\n  color: white !important;\n  font-weight: 600 !important;\n}\n  .ant-select-multiple .ant-select-selection-item {\n  position: absolute !important;\n  color: black;\n  margin-top: 0px !important;\n  margin-right: 0px !important;\n  margin-bottom: 0px !important;\n  padding: 0 0px 0 0px !important;\n  background: #ffffff !important;\n  border: 0px solid #f0f0f0 !important;\n}\n  .dx-datagrid-filter-row .dx-editor-cell .dx-editor-with-menu .dx-menu {\n  display: block !important;\n}\n  .dx-datagrid-content .dx-datagrid-table {\n  border-collapse: collapse;\n  border-spacing: 0;\n  background: #1969cd;\n  margin: 0;\n  color: white;\n  cursor: pointer;\n  max-width: 10px;\n}\n  .dx-datagrid-content .dx-datagrid-table [class*=column] + [class*=column]:last-child {\n  float: none;\n  background-color: white;\n}\n.sbmtBtm[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  background-color: #e6eff9;\n  border-radius: 5px;\n  float: right;\n}\n.inptLbl[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  color: #3b3d3d;\n  margin-bottom: 2px;\n}\n  .dx-button-mode-contained {\n  background-color: #fff !important;\n  border-color: #ddd !important;\n  color: #145db6 !important;\n  box-shadow: 0 4px 12px 0 rgba(123, 149, 153, 0.36) !important;\n  font-weight: 700 !important;\n}\n  .dx-button-mode-contained .dx-icon {\n  color: #145db6 !important;\n}\n.ant-input[_ngcontent-%COMP%] {\n  font-feature-settings: \"tnum\";\n  position: relative;\n  display: inline-block;\n  padding: 4px 11px;\n  font-size: 14px;\n  line-height: 1.5715;\n  background-color: #fff;\n  border: 1px solid #d9d9d9;\n  border-radius: 5px;\n  transition: all 0.3s;\n}\n.ant-select-single[_ngcontent-%COMP%]:not(.ant-select-customize-input)   .ant-select-selector[_ngcontent-%COMP%] {\n  position: relative;\n  background-color: #fff;\n  border: 1px solid #d9d9d9;\n  border-radius: 5px;\n  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n  width: 100%;\n  height: 32px;\n  padding: 0 11px;\n}\n.stpopts[_ngcontent-%COMP%] {\n  overflow: auto;\n  height: 428px;\n  margin-top: 10px;\n}\n.stpopthdr[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: black;\n  background-color: #f6f6f6;\n  font-size: 14px;\n}\n.stpoptsmainhng[_ngcontent-%COMP%] {\n  font-size: 17px;\n  font-weight: 500;\n  color: #c62828 !important;\n}\n.inptLbl[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  color: #3b3d3d;\n  margin-bottom: 2px;\n}\nnz-select[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.frmrw[_ngcontent-%COMP%] {\n  margin-bottom: 8px !important;\n}\n.addDesCrptn[_ngcontent-%COMP%] {\n  margin: 0px auto;\n  cursor: pointer;\n}\n.mnuprflMrgn[_ngcontent-%COMP%] {\n  margin-bottom: 8px !important;\n}\n.ant-form-item[_ngcontent-%COMP%] {\n  margin: 0 0 4px !important;\n}\n.inpf[_ngcontent-%COMP%] {\n  color: blue;\n}\n.uploadImgg[_ngcontent-%COMP%] {\n  height: 50px;\n  padding-left: 50px;\n  padding-right: 50px;\n  margin: 20px auto;\n  border: 2px dashed #1C8ADB;\n  border-radius: 10px;\n  font-size: 27px;\n  background-color: #f6fbff;\n  color: #1165a4;\n  text-align: center;\n  cursor: pointer;\n}\n.rghtbrdr[_ngcontent-%COMP%] {\n  border-right: 1px dashed #b8b8b8;\n}\n.btmbrdr[_ngcontent-%COMP%] {\n  border-bottom: 1px dashed #b8b8b8;\n}\n.filter-card[_ngcontent-%COMP%] {\n  border-radius: 0;\n  box-shadow: 0 1px 15px 1px rgba(69, 65, 78, 0.08) !important;\n  background-color: #fff;\n  padding: 8px 33px 16px 33px;\n}\n.slwmftouploadform[_ngcontent-%COMP%]   nz-form-label[_ngcontent-%COMP%] {\n  padding-left: 2px !important;\n}\n.pndngaprvalCrd[_ngcontent-%COMP%] {\n  box-shadow: 0 1px 15px 1px rgba(69, 65, 78, 0.08) !important;\n  padding: 11px 14px;\n  margin: 10px 0px;\n  border: 2px solid #bfe7bf;\n  border-radius: 4px;\n  background: azure;\n}\n.pndngaprvalCrd[_ngcontent-%COMP%]   .p_aprvl_cnt[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n  color: #334155;\n}\n.pndngaprvalCrd[_ngcontent-%COMP%]   .p_aprvl_nm[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n}\n.avtr_cls[_ngcontent-%COMP%] {\n  width: 110px;\n  height: 115px;\n  line-height: 110px;\n  font-size: 48px;\n}\n.rightimg[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.cstmheight[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  border-top: 2px solid #255946;\n}\n@media only screen and (min-width: 1500px) and (max-width: 2500px) {\n  .rightimg[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 70%;\n  }\n  .cstmheight[_ngcontent-%COMP%] {\n    height: 425px;\n    border-radius: 8px;\n  }\n  .pndngaprvalCrd[_ngcontent-%COMP%] {\n    box-shadow: 0 1px 15px 1px rgba(69, 65, 78, 0.08) !important;\n    padding: 20px 14px;\n    margin: 10px 0px;\n    border: 1px solid #bfe7bf;\n    border-radius: 4px;\n  }\n}\n.flow[_ngcontent-%COMP%] {\n  overflow-x: scroll;\n}\n.sb_btn[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n.ds-label[_ngcontent-%COMP%] {\n  margin-bottom: -15px;\n}\n.pull_left[_ngcontent-%COMP%] {\n  text-align: justify;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvYWQtdHJhbnNmZXIuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXFN1bnJpc2UlMjBUZWNoXFxhbXNfZnJvbnRlbmRcXHNyY1xcYXBwXFxhcHBzXFx3b3JrX21hbmFnZW1lbnRcXG1pc2NlbGxhbmVvdXNcXHJvYWQtdHJhbnNmZXJcXHJvYWQtdHJhbnNmZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUk7RUFDRSxlQUFBO0VBQ0EsZUFBQTtFQUVBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsMkNBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNETjtBREtJO0VBQ0UsYUFBQTtFQUVBLG1CQUFBO0VBQ0EsaURBQUE7RUFDQSxjQUFBO0VBRUEsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNMTjtBRE9JO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0FDTE47QURPSTtFQUNFLGNBQUE7RUFDQSxtQkFBQTtFQUVBLHdCQUFBO0VBQ0Esd0NBQUE7QUNMTjtBRE9JO0VBQ0UsWUFBQTtBQ0xOO0FET0k7RUFDRSwyQ0FBQTtBQ0xOO0FET0k7RUFDRSxvQ0FBQTtBQ0xOO0FET0k7O0VBRUUsNkJBQUE7QUNMTjtBRFFJOztFQUVFLGdDQUFBO0FDTk47QURRSTtFQUNFLHlDQUFBO0VBQ0EsMENBQUE7RUFDQSxlQUFBO0VBRUEsWUFBQTtBQ1BOO0FEVUk7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDUk47QURXSTs7RUFFRSw2QkFBQTtFQUNBLHFDQUFBO0FDVE47QURnQkk7RUFDRSx5QkFBQTtBQ2ROO0FEZ0JJO0VBQ0UsY0FBQTtBQ2ROO0FEaUJJO0VBQ0UsOEJBQUE7QUNmTjtBRHdCRTtFQUNFLDZCQUFBO0VBQ0EsdUJBQUE7QUNyQko7QUR1QkU7RUFDRSxrQkFBQTtBQ3BCSjtBRHNCRTtFQUNFLG1CQUFBO0FDbkJKO0FEcUJFOztFQUVFLHlCQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQ0FBQTtBQ2xCSjtBRG9CRTtFQUNFLHNCQUFBO0VBQ0EsNkJBQUE7QUNqQko7QURtQkU7RUFDRSx1QkFBQTtFQUdBLDJCQUFBO0FDbkJKO0FEcUJFO0VBQ0UsNkJBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0EsK0JBQUE7RUFDQSw4QkFBQTtFQUNBLG9DQUFBO0FDZEo7QURnQkU7RUFDRSx5QkFBQTtBQ2JKO0FEZUU7RUFDRSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FDWko7QURjRTtFQUNFLFdBQUE7RUFDQSx1QkFBQTtBQ1hKO0FEYUU7RUFDRSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FDVko7QURZRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQ1RKO0FEV0U7RUFDRSxpQ0FBQTtFQUNBLDZCQUFBO0VBQ0EseUJBQUE7RUFDQSw2REFBQTtFQUNBLDJCQUFBO0FDUko7QURVRTtFQUNFLHlCQUFBO0FDUEo7QURTRTtFQUNFLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7QUNOSjtBRFFFO0VBQ0Usa0JBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5REFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ0xKO0FET0U7RUFDRSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FDSko7QURPRTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtBQ0pKO0FETUU7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtBQ0hKO0FES0U7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUNGSjtBREtFO0VBQ0UsV0FBQTtBQ0ZKO0FESUU7RUFDRSw2QkFBQTtBQ0RKO0FER0U7RUFDRSxnQkFBQTtFQUNBLGVBQUE7QUNBSjtBREVFO0VBQ0UsNkJBQUE7QUNDSjtBRENFO0VBQ0UsMEJBQUE7QUNFSjtBREFFO0VBQ0UsV0FBQTtBQ0dKO0FEREU7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDRixtQkFBQTtFQUNFLGlCQUFBO0VBQ0EsMEJBQUE7RUFDRCxtQkFBQTtFQUNDLGVBQUE7RUFDRCx5QkFBQTtFQUNDLGNBQUE7RUFDRCxrQkFBQTtFQUNBLGVBQUE7QUNJSDtBREZFO0VBQ0UsZ0NBQUE7QUNLSjtBREhFO0VBQ0UsaUNBQUE7QUNNSjtBREpFO0VBQ0UsZ0JBQUE7RUFDQSw0REFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7QUNPSjtBREpJO0VBQ0UsNEJBQUE7QUNPTjtBREpFO0VBQ0UsNERBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDT0o7QUROSTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNRTjtBRE5JO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FDUU47QURMRTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDUUo7QURORTtFQUNFLFdBQUE7QUNTSjtBRE5FO0VBQ0Usa0JBQUE7RUFDQSw2QkFBQTtBQ1NKO0FEUEU7RUFDRTtJQUNFLFVBQUE7RUNVSjtFRFJFO0lBQ0UsYUFBQTtJQUNDLGtCQUFBO0VDVUw7RURQRTtJQUNFLDREQUFBO0lBQ0Esa0JBQUE7SUFDQSxnQkFBQTtJQUNBLHlCQUFBO0lBQ0Esa0JBQUE7RUNTSjtBQUNGO0FETkE7RUFDRSxrQkFBQTtBQ1FGO0FETkE7RUFDRSxnQkFBQTtBQ1NGO0FEUEE7RUFDRSxvQkFBQTtBQ1VGO0FEUEE7RUFDRSxtQkFBQTtBQ1VGIiwiZmlsZSI6InJvYWQtdHJhbnNmZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvL2RldiBleHRyZW1lIGdyaWQgc3R5bGVzXHJcbjo6bmctZGVlcCB7XHJcbiAgICAuZHMtY2FyZC5ncmlkIHtcclxuICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgYm9yZGVyOiAwcHggc29saWQ7XHJcbiAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogcmdiKDI0MCAyNDAgMjQwKSAhaW1wb3J0YW50O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkO1xyXG4gICAgICBtYXJnaW4tdG9wOiAxMnB4O1xyXG4gICAgICAvLyBiYWNrZ3JvdW5kOiAjZmZmY2Y3IWltcG9ydGFudDtcclxuICAgIH1cclxuICBcclxuICAgIC5keC1kYXRhZ3JpZCAuZHgtZGF0YWdpZC1oZWFkZXJzIC5keC1oZWFkZXItcm93IC5keC1kYXRhZ3JpZCAuZHgtZGF0YWdyaWQtaGVhZGVycyAuZHgtaGVhZGVyLWZpbHRlciB7XHJcbiAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgIC8vIGJhY2tncm91bmQ6ICMyYzU2ODU7XHJcbiAgICAgIGJhY2tncm91bmQ6ICMzMTkwYTY7XHJcbiAgICAgIC8qIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCAjZGRkZGRkICFpbXBvcnRhbnQ7ICovXHJcbiAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAvLyBjb2xvcjogYmxhY2s7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiA0cHg7XHJcbiAgICB9XHJcbiAgICAuZHgtZGF0YWdyaWQgLmR4LWhlYWRlci1maWx0ZXI6YmVmb3JlIHtcclxuICAgICAgY29udGVudDogXCJcXGYwNTBcIjtcclxuICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgfVxyXG4gICAgLmR4LWRhdGFncmlkLWhlYWRlcnMge1xyXG4gICAgICBjb2xvcjogIzk1OTU5NTtcclxuICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgLW1zLXRvdWNoLWFjdGlvbjogcGluY2gtem9vbTtcclxuICAgICAgdG91Y2gtYWN0aW9uOiBwaW5jaC16b29tO1xyXG4gICAgICBib3JkZXItYm90dG9tOiA1cHggc29saWQgI2RkZCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmR4LWRhdGFncmlkIC5keC1jb2x1bW4taW5kaWNhdG9ycyB7XHJcbiAgICAgIGZsb2F0OiByaWdodDtcclxuICAgIH1cclxuICAgIC5keC1kYXRhZ3JpZCAuZHgtcm93LWxpbmVzID4gdGQge1xyXG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Y1ZjVmNSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmR4LWRhdGFncmlkIC5keC1yb3cgPiB0aCB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmOWY5ZjkgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5keC1kYXRhZ3JpZC1ib3JkZXJzIC5keC1kYXRhZ3JpZC1yb3dzdmlldyxcclxuICAgIC5keC1kYXRhZ3JpZC1oZWFkZXJzICsgLmR4LWRhdGFncmlkLXJvd3N2aWV3IHtcclxuICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNmOWY5Zjk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuZHgtZGF0YWdyaWQtYm9yZGVycyA+IC5keC1kYXRhZ3JpZC1yb3dzdmlldyxcclxuICAgIC5keC1kYXRhZ3JpZC1ib3JkZXJzID4gLmR4LWRhdGFncmlkLXRvdGFsLWZvb3RlciB7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjlmOWY5O1xyXG4gICAgfVxyXG4gICAgLmR4LWRhdGFncmlkIC5keC1jb2x1bW4tbGluZXMgPiB0ZCB7XHJcbiAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2Y1ZjVmNSAhaW1wb3J0YW50O1xyXG4gICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZjVmNWY1ICFpbXBvcnRhbnQ7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgLy8gY29sb3I6IHdoaXRlO1xyXG4gICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuZHgtZGF0YWdyaWQtY29udGVudCAuZHgtZGF0YWdyaWQtdGFibGUgLmR4LXJvdyAuZHgtY29tbWFuZC1lZGl0IHtcclxuICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICBtaW4td2lkdGg6IDEwMHB4O1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuZHgtZGF0YWdyaWQgLmR4LWRhdGFncmlkLWhlYWRlcnMgLmR4LWhlYWRlci1yb3cgPiB0ZCxcclxuICAgIC5keC1kYXRhZ3JpZCAuZHgtZGF0YWdyaWQtaGVhZGVycyAuZHgtaGVhZGVyLWZpbHRlciB7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLy8gLmR4LWRhdGFncmlkLWNvbnRlbnQgLmR4LWRhdGFncmlkLXRhYmxlIC5keC1yb3cgPiB0ZDpmaXJzdC1jaGlsZCwgLmR4LWRhdGFncmlkLWNvbnRlbnQgLmR4LWRhdGFncmlkLXRhYmxlIC5keC1yb3cgPiB0ciA+IHRkOmZpcnN0LWNoaWxkIHtcclxuICAgIC8vICB0ZXh0LWFsaWduOiBjZW50ZXIhaW1wb3J0YW50O1xyXG4gICAgLy8gfVxyXG4gIFxyXG4gICAgLnRhYmxlLXN0cmlwZWQgdGJvZHkgdHI6bnRoLW9mLXR5cGUob2RkKSB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGY1ZmI7XHJcbiAgICB9XHJcbiAgICAuZHgtcm93IC5keC1jb2x1bW4tbGluZXMgLmR4LWhlYWRlci1yb3cge1xyXG4gICAgICBjb2xvcjogI2ZiZmNmZDtcclxuICAgICAgLy8gY29sb3IgOiBibGFjaztcclxuICAgIH1cclxuICAgIC5keC1kYXRhZ3JpZC1yb3dzdmlldyAuZHgtcm93IHtcclxuICAgICAgYmFja2dyb3VuZDogcmdiKDIyOCwgMjI4LCAyMjgpO1xyXG4gICAgfVxyXG4gICAgLy8gOjpuZy1kZWVwIC5keC1kYXRhZ3JpZC1zdW1tYXJ5LWl0ZW0ge1xyXG4gICAgLy8gICAgIGNvbG9yOiByZ2JhKDUxLCA1MSwgNTEsIDAuNyk7XHJcbiAgICAvLyAgICAgYmFja2dyb3VuZC1jb2xvcjogYnVybHl3b29kO1xyXG4gICAgLy8gICAgIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcclxuICAgIC8vIH1cclxuICB9XHJcbiAgXHJcbiAgOjpuZy1kZWVwIC5keC1kYXRhZ3JpZC1oZWFkZXJzIC5keC1kYXRhZ3JpZC10YWJsZSAuZHgtcm93ID4gdGQge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XHJcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICB9XHJcbiAgOjpuZy1kZWVwIC5keC10ZXh0ZWRpdG9yLWlucHV0IHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcclxuICB9XHJcbiAgOjpuZy1kZWVwIC5keC1kYXRhZ3JpZC1yb3dzdmlldyAuZHgtcm93IHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgfVxyXG4gIDo6bmctZGVlcCAuZHgtZGF0YWdyaWQgLmR4LXJvdy1hbHQgPiB0ZCxcclxuICAuZHgtZGF0YWdyaWQgLmR4LXJvdy1hbHQgPiB0ciA+IHRkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2Y1ZjVmNTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjVmNWY1O1xyXG4gIH1cclxuICA6Om5nLWRlZXAgLmFudC1waWNrZXIge1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICA6Om5nLWRlZXAgLmR4LWRhdGFncmlkLXN1bW1hcnktaXRlbSB7XHJcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICB9XHJcbiAgOjpuZy1kZWVwIC5keC1kYXRhZ3JpZC1zdW1tYXJ5LWl0ZW0ge1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICA6Om5nLWRlZXAgLmFudC1zZWxlY3QtbXVsdGlwbGUgLmFudC1zZWxlY3Qtc2VsZWN0aW9uLWl0ZW0ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBtYXJnaW4tdG9wOiAwcHggIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1yaWdodDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmc6IDAgMHB4IDAgMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXI6IDBweCBzb2xpZCAjZjBmMGYwICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIDo6bmctZGVlcCAuZHgtZGF0YWdyaWQtZmlsdGVyLXJvdyAuZHgtZWRpdG9yLWNlbGwgLmR4LWVkaXRvci13aXRoLW1lbnUgLmR4LW1lbnUge1xyXG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcclxuICB9XHJcbiAgOjpuZy1kZWVwIC5keC1kYXRhZ3JpZC1jb250ZW50IC5keC1kYXRhZ3JpZC10YWJsZSB7XHJcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gICAgYm9yZGVyLXNwYWNpbmc6IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMTk2OWNkO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgbWF4LXdpZHRoOiAxMHB4O1xyXG4gIH1cclxuICA6Om5nLWRlZXAgLmR4LWRhdGFncmlkLWNvbnRlbnQgLmR4LWRhdGFncmlkLXRhYmxlIFtjbGFzcyo9XCJjb2x1bW5cIl0gKyBbY2xhc3MqPVwiY29sdW1uXCJdOmxhc3QtY2hpbGQge1xyXG4gICAgZmxvYXQ6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbiAgLnNibXRCdG0ge1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNmVmZjk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgfVxyXG4gIC5pbnB0TGJsIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBjb2xvcjogIzNiM2QzZDtcclxuICAgIG1hcmdpbi1ib3R0b206IDJweDtcclxuICB9XHJcbiAgOjpuZy1kZWVwIC5keC1idXR0b24tbW9kZS1jb250YWluZWQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZGRkICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogIzE0NWRiNiAhaW1wb3J0YW50O1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggMTJweCAwIHJnYmEoMTIzLCAxNDksIDE1MywgMC4zNikgIWltcG9ydGFudDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDAgIWltcG9ydGFudDtcclxuICB9XHJcbiAgOjpuZy1kZWVwIC5keC1idXR0b24tbW9kZS1jb250YWluZWQgLmR4LWljb24ge1xyXG4gICAgY29sb3I6ICMxNDVkYjYgIWltcG9ydGFudDtcclxuICB9XHJcbiAgLmFudC1pbnB1dCB7XHJcbiAgICBmb250LWZlYXR1cmUtc2V0dGluZ3M6IFwidG51bVwiO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcGFkZGluZzogNHB4IDExcHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMS41NzE1O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkOWQ5ZDk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICB9XHJcbiAgLmFudC1zZWxlY3Qtc2luZ2xlOm5vdCguYW50LXNlbGVjdC1jdXN0b21pemUtaW5wdXQpIC5hbnQtc2VsZWN0LXNlbGVjdG9yIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZDlkOWQ5O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDMycHg7XHJcbiAgICBwYWRkaW5nOiAwIDExcHg7XHJcbiAgfVxyXG4gIC5zdHBvcHRzIHtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgaGVpZ2h0OiA0MjhweDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5zdHBvcHRoZHIge1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNmY2ZjY7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgfVxyXG4gIC5zdHBvcHRzbWFpbmhuZyB7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgY29sb3I6ICNjNjI4MjggIWltcG9ydGFudDtcclxuICB9XHJcbiAgLmlucHRMYmwge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGNvbG9yOiAjM2IzZDNkO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMnB4O1xyXG4gIH1cclxuICBcclxuICBuei1zZWxlY3Qge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIC5mcm1ydyB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA4cHggIWltcG9ydGFudDtcclxuICB9XHJcbiAgLmFkZERlc0NycHRuIHtcclxuICAgIG1hcmdpbjogMHB4IGF1dG87XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG4gIC5tbnVwcmZsTXJnbiB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA4cHggIWltcG9ydGFudDtcclxuICB9XHJcbiAgLmFudC1mb3JtLWl0ZW0ge1xyXG4gICAgbWFyZ2luOiAwIDAgNHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5pbnBme1xyXG4gICAgY29sb3I6Ymx1ZTtcclxuICB9XHJcbiAgLnVwbG9hZEltZ2d7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDUwcHg7XHJcbiAgcGFkZGluZy1yaWdodDogNTBweDtcclxuICAgIG1hcmdpbjogMjBweCBhdXRvO1xyXG4gICAgYm9yZGVyOiAycHggZGFzaGVkICMxQzhBREI7XHJcbiAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDI3cHg7XHJcbiAgIGJhY2tncm91bmQtY29sb3I6ICNmNmZiZmY7XHJcbiAgICBjb2xvcjogIzExNjVhNDtcclxuICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG4gIC5yZ2h0YnJkciB7XHJcbiAgICBib3JkZXItcmlnaHQ6IDFweCBkYXNoZWQgI2I4YjhiODtcclxuICB9XHJcbiAgLmJ0bWJyZHIge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCAjYjhiOGI4O1xyXG4gIH1cclxuICAuZmlsdGVyLWNhcmQge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDE1cHggMXB4IHJnYmEoNjksIDY1LCA3OCwgMC4wOCkgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBwYWRkaW5nOiA4cHggMzNweCAxNnB4IDMzcHg7XHJcbiAgfVxyXG4gIC5zbHdtZnRvdXBsb2FkZm9ybSB7XHJcbiAgICBuei1mb3JtLWxhYmVsIHtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAycHggIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcbiAgLnBuZG5nYXBydmFsQ3JkIHtcclxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDE1cHggMXB4IHJnYig2OSA2NSA3OCAvIDglKSAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZzogMTFweCAxNHB4O1xyXG4gICAgbWFyZ2luOiAxMHB4IDBweDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNiZmU3YmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBhenVyZTtcclxuICAgIC5wX2FwcnZsX2NudCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgY29sb3I6ICMzMzQxNTU7XHJcbiAgICB9XHJcbiAgICAucF9hcHJ2bF9ubSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIH1cclxuICB9XHJcbiAgLmF2dHJfY2xze1xyXG4gICAgd2lkdGg6IDExMHB4O1xyXG4gICAgaGVpZ2h0OiAxMTVweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxMTBweDtcclxuICAgIGZvbnQtc2l6ZTogNDhweDtcclxuICB9XHJcbiAgLnJpZ2h0aW1nIGltZyB7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gIH1cclxuICBcclxuICAuY3N0bWhlaWdodHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCAjMjU1OTQ2O1xyXG4gIH1cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6MTUwMHB4KSBhbmQgKG1heC13aWR0aDoyNTAwcHgpe1xyXG4gICAgLnJpZ2h0aW1nIGltZyB7XHJcbiAgICAgIHdpZHRoOjcwJTtcclxuICAgIH1cclxuICAgIC5jc3RtaGVpZ2h0e1xyXG4gICAgICBoZWlnaHQ6IDQyNXB4O1xyXG4gICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLnBuZG5nYXBydmFsQ3JkIHtcclxuICAgICAgYm94LXNoYWRvdzogMCAxcHggMTVweCAxcHggcmdiKDY5IDY1IDc4IC8gOCUpICFpbXBvcnRhbnQ7XHJcbiAgICAgIHBhZGRpbmc6IDIwcHggMTRweDtcclxuICAgICAgbWFyZ2luOiAxMHB4IDBweDtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2JmZTdiZjtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIH1cclxuICB9XHJcblxyXG4uZmxvd3tcclxuICBvdmVyZmxvdy14OiBzY3JvbGw7XHJcbn1cclxuLnNiX2J0bntcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcbi5kcy1sYWJlbHtcclxuICBtYXJnaW4tYm90dG9tOiAtMTVweDtcclxufVxyXG5cclxuLnB1bGxfbGVmdHtcclxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG59IiwiOjpuZy1kZWVwIC5kcy1jYXJkLmdyaWQge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1pbi13aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBib3JkZXI6IDBweCBzb2xpZDtcbiAgcGFkZGluZzogMTBweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLWNvbG9yOiByZ2IoMjQwLCAyNDAsIDI0MCkgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBib3JkZXI6IDFweCBzb2xpZDtcbiAgbWFyZ2luLXRvcDogMTJweDtcbn1cbjo6bmctZGVlcCAuZHgtZGF0YWdyaWQgLmR4LWRhdGFnaWQtaGVhZGVycyAuZHgtaGVhZGVyLXJvdyAuZHgtZGF0YWdyaWQgLmR4LWRhdGFncmlkLWhlYWRlcnMgLmR4LWhlYWRlci1maWx0ZXIge1xuICBvdXRsaW5lOiBub25lO1xuICBiYWNrZ3JvdW5kOiAjMzE5MGE2O1xuICAvKiBib3JkZXItYm90dG9tOiA1cHggc29saWQgI2RkZGRkZCAhaW1wb3J0YW50OyAqL1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBtYXJnaW4tcmlnaHQ6IDRweDtcbn1cbjo6bmctZGVlcCAuZHgtZGF0YWdyaWQgLmR4LWhlYWRlci1maWx0ZXI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYwNTBcIjtcbiAgZm9udC1zaXplOiAxMHB4O1xufVxuOjpuZy1kZWVwIC5keC1kYXRhZ3JpZC1oZWFkZXJzIHtcbiAgY29sb3I6ICM5NTk1OTU7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIC1tcy10b3VjaC1hY3Rpb246IHBpbmNoLXpvb207XG4gIHRvdWNoLWFjdGlvbjogcGluY2gtem9vbTtcbiAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkICNkZGQgIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCAuZHgtZGF0YWdyaWQgLmR4LWNvbHVtbi1pbmRpY2F0b3JzIHtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuOjpuZy1kZWVwIC5keC1kYXRhZ3JpZCAuZHgtcm93LWxpbmVzID4gdGQge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Y1ZjVmNSAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIC5keC1kYXRhZ3JpZCAuZHgtcm93ID4gdGgge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5ICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgLmR4LWRhdGFncmlkLWJvcmRlcnMgLmR4LWRhdGFncmlkLXJvd3N2aWV3LFxuOjpuZy1kZWVwIC5keC1kYXRhZ3JpZC1oZWFkZXJzICsgLmR4LWRhdGFncmlkLXJvd3N2aWV3IHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNmOWY5Zjk7XG59XG46Om5nLWRlZXAgLmR4LWRhdGFncmlkLWJvcmRlcnMgPiAuZHgtZGF0YWdyaWQtcm93c3ZpZXcsXG46Om5nLWRlZXAgLmR4LWRhdGFncmlkLWJvcmRlcnMgPiAuZHgtZGF0YWdyaWQtdG90YWwtZm9vdGVyIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmOWY5Zjk7XG59XG46Om5nLWRlZXAgLmR4LWRhdGFncmlkIC5keC1jb2x1bW4tbGluZXMgPiB0ZCB7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2Y1ZjVmNSAhaW1wb3J0YW50O1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZjVmNWY1ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6IGJsYWNrO1xufVxuOjpuZy1kZWVwIC5keC1kYXRhZ3JpZC1jb250ZW50IC5keC1kYXRhZ3JpZC10YWJsZSAuZHgtcm93IC5keC1jb21tYW5kLWVkaXQge1xuICB3aWR0aDogMTAwcHg7XG4gIG1pbi13aWR0aDogMTAwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbjo6bmctZGVlcCAuZHgtZGF0YWdyaWQgLmR4LWRhdGFncmlkLWhlYWRlcnMgLmR4LWhlYWRlci1yb3cgPiB0ZCxcbjo6bmctZGVlcCAuZHgtZGF0YWdyaWQgLmR4LWRhdGFncmlkLWhlYWRlcnMgLmR4LWhlYWRlci1maWx0ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemUgIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCAudGFibGUtc3RyaXBlZCB0Ym9keSB0cjpudGgtb2YtdHlwZShvZGQpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjVmYjtcbn1cbjo6bmctZGVlcCAuZHgtcm93IC5keC1jb2x1bW4tbGluZXMgLmR4LWhlYWRlci1yb3cge1xuICBjb2xvcjogI2ZiZmNmZDtcbn1cbjo6bmctZGVlcCAuZHgtZGF0YWdyaWQtcm93c3ZpZXcgLmR4LXJvdyB7XG4gIGJhY2tncm91bmQ6IHJnYigyMjgsIDIyOCwgMjI4KTtcbn1cblxuOjpuZy1kZWVwIC5keC1kYXRhZ3JpZC1oZWFkZXJzIC5keC1kYXRhZ3JpZC10YWJsZSAuZHgtcm93ID4gdGQge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCAuZHgtdGV4dGVkaXRvci1pbnB1dCB7XG4gIGJvcmRlci1yYWRpdXM6IDBweDtcbn1cblxuOjpuZy1kZWVwIC5keC1kYXRhZ3JpZC1yb3dzdmlldyAuZHgtcm93IHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbn1cblxuOjpuZy1kZWVwIC5keC1kYXRhZ3JpZCAuZHgtcm93LWFsdCA+IHRkLFxuLmR4LWRhdGFncmlkIC5keC1yb3ctYWx0ID4gdHIgPiB0ZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZjVmNWY1O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Y1ZjVmNTtcbn1cblxuOjpuZy1kZWVwIC5hbnQtcGlja2VyIHtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogNXB4ICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCAuZHgtZGF0YWdyaWQtc3VtbWFyeS1pdGVtIHtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCAuZHgtZGF0YWdyaWQtc3VtbWFyeS1pdGVtIHtcbiAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAgLmFudC1zZWxlY3QtbXVsdGlwbGUgLmFudC1zZWxlY3Qtc2VsZWN0aW9uLWl0ZW0ge1xuICBwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcbiAgY29sb3I6IGJsYWNrO1xuICBtYXJnaW4tdG9wOiAwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luLXJpZ2h0OiAwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDAgMHB4IDAgMHB4ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmYgIWltcG9ydGFudDtcbiAgYm9yZGVyOiAwcHggc29saWQgI2YwZjBmMCAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAgLmR4LWRhdGFncmlkLWZpbHRlci1yb3cgLmR4LWVkaXRvci1jZWxsIC5keC1lZGl0b3Itd2l0aC1tZW51IC5keC1tZW51IHtcbiAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwIC5keC1kYXRhZ3JpZC1jb250ZW50IC5keC1kYXRhZ3JpZC10YWJsZSB7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIGJvcmRlci1zcGFjaW5nOiAwO1xuICBiYWNrZ3JvdW5kOiAjMTk2OWNkO1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXgtd2lkdGg6IDEwcHg7XG59XG5cbjo6bmctZGVlcCAuZHgtZGF0YWdyaWQtY29udGVudCAuZHgtZGF0YWdyaWQtdGFibGUgW2NsYXNzKj1jb2x1bW5dICsgW2NsYXNzKj1jb2x1bW5dOmxhc3QtY2hpbGQge1xuICBmbG9hdDogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5zYm10QnRtIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZWZmOTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbi5pbnB0TGJsIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogIzNiM2QzZDtcbiAgbWFyZ2luLWJvdHRvbTogMnB4O1xufVxuXG46Om5nLWRlZXAgLmR4LWJ1dHRvbi1tb2RlLWNvbnRhaW5lZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgYm9yZGVyLWNvbG9yOiAjZGRkICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjMTQ1ZGI2ICFpbXBvcnRhbnQ7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDEycHggMCByZ2JhKDEyMywgMTQ5LCAxNTMsIDAuMzYpICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiA3MDAgIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwIC5keC1idXR0b24tbW9kZS1jb250YWluZWQgLmR4LWljb24ge1xuICBjb2xvcjogIzE0NWRiNiAhaW1wb3J0YW50O1xufVxuXG4uYW50LWlucHV0IHtcbiAgZm9udC1mZWF0dXJlLXNldHRpbmdzOiBcInRudW1cIjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDRweCAxMXB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjU3MTU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkOWQ5ZDk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG59XG5cbi5hbnQtc2VsZWN0LXNpbmdsZTpub3QoLmFudC1zZWxlY3QtY3VzdG9taXplLWlucHV0KSAuYW50LXNlbGVjdC1zZWxlY3RvciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2Q5ZDlkOTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSk7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDMycHg7XG4gIHBhZGRpbmc6IDAgMTFweDtcbn1cblxuLnN0cG9wdHMge1xuICBvdmVyZmxvdzogYXV0bztcbiAgaGVpZ2h0OiA0MjhweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLnN0cG9wdGhkciB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiBibGFjaztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjZmNjtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uc3Rwb3B0c21haW5obmcge1xuICBmb250LXNpemU6IDE3cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjYzYyODI4ICFpbXBvcnRhbnQ7XG59XG5cbi5pbnB0TGJsIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogIzNiM2QzZDtcbiAgbWFyZ2luLWJvdHRvbTogMnB4O1xufVxuXG5uei1zZWxlY3Qge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmZybXJ3IHtcbiAgbWFyZ2luLWJvdHRvbTogOHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5hZGREZXNDcnB0biB7XG4gIG1hcmdpbjogMHB4IGF1dG87XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm1udXByZmxNcmduIHtcbiAgbWFyZ2luLWJvdHRvbTogOHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5hbnQtZm9ybS1pdGVtIHtcbiAgbWFyZ2luOiAwIDAgNHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5pbnBmIHtcbiAgY29sb3I6IGJsdWU7XG59XG5cbi51cGxvYWRJbWdnIHtcbiAgaGVpZ2h0OiA1MHB4O1xuICBwYWRkaW5nLWxlZnQ6IDUwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDUwcHg7XG4gIG1hcmdpbjogMjBweCBhdXRvO1xuICBib3JkZXI6IDJweCBkYXNoZWQgIzFDOEFEQjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgZm9udC1zaXplOiAyN3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmYmZmO1xuICBjb2xvcjogIzExNjVhNDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5yZ2h0YnJkciB7XG4gIGJvcmRlci1yaWdodDogMXB4IGRhc2hlZCAjYjhiOGI4O1xufVxuXG4uYnRtYnJkciB7XG4gIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgI2I4YjhiODtcbn1cblxuLmZpbHRlci1jYXJkIHtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgYm94LXNoYWRvdzogMCAxcHggMTVweCAxcHggcmdiYSg2OSwgNjUsIDc4LCAwLjA4KSAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiA4cHggMzNweCAxNnB4IDMzcHg7XG59XG5cbi5zbHdtZnRvdXBsb2FkZm9ybSBuei1mb3JtLWxhYmVsIHtcbiAgcGFkZGluZy1sZWZ0OiAycHggIWltcG9ydGFudDtcbn1cblxuLnBuZG5nYXBydmFsQ3JkIHtcbiAgYm94LXNoYWRvdzogMCAxcHggMTVweCAxcHggcmdiYSg2OSwgNjUsIDc4LCAwLjA4KSAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAxMXB4IDE0cHg7XG4gIG1hcmdpbjogMTBweCAwcHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNiZmU3YmY7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYmFja2dyb3VuZDogYXp1cmU7XG59XG4ucG5kbmdhcHJ2YWxDcmQgLnBfYXBydmxfY250IHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogIzMzNDE1NTtcbn1cbi5wbmRuZ2FwcnZhbENyZCAucF9hcHJ2bF9ubSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLmF2dHJfY2xzIHtcbiAgd2lkdGg6IDExMHB4O1xuICBoZWlnaHQ6IDExNXB4O1xuICBsaW5lLWhlaWdodDogMTEwcHg7XG4gIGZvbnQtc2l6ZTogNDhweDtcbn1cblxuLnJpZ2h0aW1nIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uY3N0bWhlaWdodCB7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICMyNTU5NDY7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTUwMHB4KSBhbmQgKG1heC13aWR0aDogMjUwMHB4KSB7XG4gIC5yaWdodGltZyBpbWcge1xuICAgIHdpZHRoOiA3MCU7XG4gIH1cbiAgLmNzdG1oZWlnaHQge1xuICAgIGhlaWdodDogNDI1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICB9XG4gIC5wbmRuZ2FwcnZhbENyZCB7XG4gICAgYm94LXNoYWRvdzogMCAxcHggMTVweCAxcHggcmdiYSg2OSwgNjUsIDc4LCAwLjA4KSAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmc6IDIwcHggMTRweDtcbiAgICBtYXJnaW46IDEwcHggMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNiZmU3YmY7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICB9XG59XG4uZmxvdyB7XG4gIG92ZXJmbG93LXg6IHNjcm9sbDtcbn1cblxuLnNiX2J0biB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5kcy1sYWJlbCB7XG4gIG1hcmdpbi1ib3R0b206IC0xNXB4O1xufVxuXG4ucHVsbF9sZWZ0IHtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbn0iXX0= */"] });


/***/ }),

/***/ 85554:
/*!***************************************************************************************************************************!*\
  !*** ./src/app/apps/work_management/miscellaneous/technical-powers-of-officers/technical-powers-of-officers.component.ts ***!
  \***************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TechnicalPowersOfOfficersComponent": () => (/* binding */ TechnicalPowersOfOfficersComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

class TechnicalPowersOfOfficersComponent {
    constructor() { }
    ngOnInit() {
    }
}
TechnicalPowersOfOfficersComponent.ɵfac = function TechnicalPowersOfOfficersComponent_Factory(t) { return new (t || TechnicalPowersOfOfficersComponent)(); };
TechnicalPowersOfOfficersComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TechnicalPowersOfOfficersComponent, selectors: [["app-technical-powers-of-officers"]], decls: 2, vars: 0, template: function TechnicalPowersOfOfficersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "technical-powers-of-officers works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZWNobmljYWwtcG93ZXJzLW9mLW9mZmljZXJzLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 14577:
/*!*************************************************************!*\
  !*** ./src/app/shared/text-editor/text-editor.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TextEditorComponent": () => (/* binding */ TextEditorComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var ngx_quill__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-quill */ 63115);




class TextEditorComponent {
    constructor() {
        this.edtr_txt = '';
        this.edtr_modules = {
            toolbar: [
                ['bold', 'italic', 'underline', 'strike'],
                ['blockquote', 'code-block'],
                [{ 'header': 1 }, { 'header': 2 }],
                [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                [{ 'script': 'sub' }, { 'script': 'super' }],
                [{ 'indent': '-1' }, { 'indent': '+1' }],
                [{ 'direction': 'rtl' }],
                [{ 'size': ['small', false, 'large', 'huge'] }],
                [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
                [{ 'color': [] }, { 'background': [] }],
                [{ 'font': [] }],
                [{ 'align': [] }],
                ['clean'],
                ['link'] // link and image, video
            ]
        };
        this.getEdtrEntrTxt = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    ngOnInit() {
    }
    onChange(event) {
        this.getEdtrEntrTxt.emit(event.html);
    }
}
TextEditorComponent.ɵfac = function TextEditorComponent_Factory(t) { return new (t || TextEditorComponent)(); };
TextEditorComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TextEditorComponent, selectors: [["app-text-editor"]], outputs: { getEdtrEntrTxt: "getEdtrEntrTxt" }, decls: 2, vars: 2, consts: [[1, "edtr-css"], [2, "width", "100%", 3, "modules", "ngModel", "ngModelChange", "onContentChanged"]], template: function TextEditorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "quill-editor", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TextEditorComponent_Template_quill_editor_ngModelChange_1_listener($event) { return ctx.edtr_txt = $event; })("onContentChanged", function TextEditorComponent_Template_quill_editor_onContentChanged_1_listener($event) { return ctx.onChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("modules", ctx.edtr_modules)("ngModel", ctx.edtr_txt);
    } }, dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgModel, ngx_quill__WEBPACK_IMPORTED_MODULE_2__.QuillEditorComponent], styles: [".edtr-css[_ngcontent-%COMP%] {\n  width: 100%;\n  height: -moz-fit-content !important;\n  height: fit-content !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRleHQtZWRpdG9yLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcU3VucmlzZSUyMFRlY2hcXGFtc19mcm9udGVuZFxcc3JjXFxhcHBcXHNoYXJlZFxcdGV4dC1lZGl0b3JcXHRleHQtZWRpdG9yLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLG1DQUFBO0VBQUEsOEJBQUE7QUNDSiIsImZpbGUiOiJ0ZXh0LWVkaXRvci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lZHRyLWNzc3tcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudCAhaW1wb3J0YW50O1xyXG59IiwiLmVkdHItY3NzIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogZml0LWNvbnRlbnQgIWltcG9ydGFudDtcbn0iXX0= */"] });


/***/ }),

/***/ 7798:
/*!**********************************************************!*\
  !*** ./src/app/shared/text-editor/text-editor.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TextEditorModule": () => (/* binding */ TextEditorModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _text_editor_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./text-editor.component */ 14577);
/* harmony import */ var ngx_quill__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-quill */ 63115);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);






class TextEditorModule {
}
TextEditorModule.ɵfac = function TextEditorModule_Factory(t) { return new (t || TextEditorModule)(); };
TextEditorModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: TextEditorModule });
TextEditorModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule,
        ngx_quill__WEBPACK_IMPORTED_MODULE_4__.QuillModule.forRoot()] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](TextEditorModule, { declarations: [_text_editor_component__WEBPACK_IMPORTED_MODULE_0__.TextEditorComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule, ngx_quill__WEBPACK_IMPORTED_MODULE_4__.QuillModule], exports: [_text_editor_component__WEBPACK_IMPORTED_MODULE_0__.TextEditorComponent] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_apps_work_management_miscellaneous_miscellaneous_module_ts.js.map