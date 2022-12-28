"use strict";
(self["webpackChunkenlink"] = self["webpackChunkenlink"] || []).push([["src_app_apps_work_management_tendering_boq_boq_module_ts"],{

/***/ 64188:
/*!*********************************************************************************!*\
  !*** ./src/app/apps/work_management/tendering/boq/boq-navbar/home.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 16495);
/* harmony import */ var ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/menu */ 40713);




class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
    sor() {
        this.showsor = true;
        this.showmanual = false;
        this.showtemplate = false;
        this.showspecs_catlg = false;
    }
    manual() {
        this.showsor = false;
        this.showmanual = true;
        this.showtemplate = false;
        this.showspecs_catlg = false;
    }
    template() {
        this.showsor = false;
        this.showmanual = false;
        this.showtemplate = true;
        this.showspecs_catlg = false;
    }
    catalog() {
        this.showsor = false;
        this.showmanual = false;
        this.showtemplate = false;
        this.showspecs_catlg = true;
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 13, vars: 0, consts: [["nz-menu", "", "nzMode", "horizontal", 1, "boq_menu"], ["nz-menu-item", "", "nzMatchRouter", ""], ["routerLink", "/internal/work-mng/tendering/boq/sor"], ["routerLink", "/internal/work-mng/tendering/boq/template"], ["routerLink", "/internal/work-mng/tendering/boq/manual"], ["routerLink", "/internal/work-mng/tendering/boq/specs_ctlg"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0)(1, "li", 1)(2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "SOR");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 1)(5, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Template");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 1)(8, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Manual");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 1)(11, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Specifications Catalog");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_2__["ɵNzTransitionPatchDirective"], ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_3__.NzMenuDirective, ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_3__.NzMenuItemDirective], styles: [".boq_menu[_ngcontent-%COMP%] {\n  border-radius: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxTdW5yaXNlJTIwVGVjaFxcYW1zX2Zyb250ZW5kXFxzcmNcXGFwcFxcYXBwc1xcd29ya19tYW5hZ2VtZW50XFx0ZW5kZXJpbmdcXGJvcVxcYm9xLW5hdmJhclxcaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0FDQ0oiLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib3FfbWVudXtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgfSIsIi5ib3FfbWVudSB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59Il19 */"] });


/***/ }),

/***/ 33127:
/*!**************************************************************************!*\
  !*** ./src/app/apps/work_management/tendering/boq/boq-routing.module.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BoqRoutingModule": () => (/* binding */ BoqRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _manual_manual_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./manual/manual.component */ 815);
/* harmony import */ var _sor_sor_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sor/sor.component */ 19076);
/* harmony import */ var _specification_catalog_specification_catalog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./specification-catalog/specification-catalog.component */ 43667);
/* harmony import */ var _template_template_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./template/template.component */ 2313);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);







const routes = [
    { path: '', redirectTo: 'sor' },
    { path: 'sor', component: _sor_sor_component__WEBPACK_IMPORTED_MODULE_1__.SorComponent },
    { path: 'manual', component: _manual_manual_component__WEBPACK_IMPORTED_MODULE_0__.ManualComponent },
    { path: 'template', component: _template_template_component__WEBPACK_IMPORTED_MODULE_3__.TemplateComponent },
    { path: 'specs_ctlg', component: _specification_catalog_specification_catalog_component__WEBPACK_IMPORTED_MODULE_2__.SpecificationCatalogComponent },
];
class BoqRoutingModule {
}
BoqRoutingModule.ɵfac = function BoqRoutingModule_Factory(t) { return new (t || BoqRoutingModule)(); };
BoqRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: BoqRoutingModule });
BoqRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](BoqRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] }); })();


/***/ }),

/***/ 75607:
/*!******************************************************************!*\
  !*** ./src/app/apps/work_management/tendering/boq/boq.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BoqModule": () => (/* binding */ BoqModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/shared.module */ 44466);
/* harmony import */ var src_app_providers_http_http_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/providers/http/http.interceptor */ 34477);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ng-zorro-antd/grid */ 70031);
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
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ngx-toastr */ 94817);
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! devextreme-angular */ 65821);
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! devextreme-angular */ 41661);
/* harmony import */ var _boq_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./boq-routing.module */ 33127);
/* harmony import */ var _manual_manual_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./manual/manual.component */ 815);
/* harmony import */ var _sor_sor_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sor/sor.component */ 19076);
/* harmony import */ var _template_template_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./template/template.component */ 2313);
/* harmony import */ var _specification_catalog_specification_catalog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./specification-catalog/specification-catalog.component */ 43667);
/* harmony import */ var _boq_navbar_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./boq-navbar/home.component */ 64188);
/* harmony import */ var ng_zorro_antd_popover__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ng-zorro-antd/popover */ 7773);
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! devextreme-angular */ 91170);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/core */ 22560);












































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
    ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_33__.NzDrawerModule,
    ng_zorro_antd_popover__WEBPACK_IMPORTED_MODULE_34__.NzPopoverModule
];
class BoqModule {
}
BoqModule.ɵfac = function BoqModule_Factory(t) { return new (t || BoqModule)(); };
BoqModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_35__["ɵɵdefineNgModule"]({ type: BoqModule });
BoqModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_35__["ɵɵdefineInjector"]({ providers: [
        ngx_toastr__WEBPACK_IMPORTED_MODULE_36__.ToastrService,
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_37__.HTTP_INTERCEPTORS, useClass: src_app_providers_http_http_interceptor__WEBPACK_IMPORTED_MODULE_1__.HttpConfigInterceptor, multi: true },
    ], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_38__.CommonModule,
        _boq_routing_module__WEBPACK_IMPORTED_MODULE_2__.BoqRoutingModule,
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_39__.ReactiveFormsModule,
        ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_40__.NzGridModule, antdModule, ngx_toastr__WEBPACK_IMPORTED_MODULE_36__.ToastrModule.forRoot(),
        devextreme_angular__WEBPACK_IMPORTED_MODULE_41__.DxDataGridModule,
        devextreme_angular__WEBPACK_IMPORTED_MODULE_42__.DxButtonModule,
        devextreme_angular__WEBPACK_IMPORTED_MODULE_43__.DxTooltipModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_35__["ɵɵsetNgModuleScope"](BoqModule, { declarations: [_manual_manual_component__WEBPACK_IMPORTED_MODULE_3__.ManualComponent,
        _sor_sor_component__WEBPACK_IMPORTED_MODULE_4__.SorComponent,
        _template_template_component__WEBPACK_IMPORTED_MODULE_5__.TemplateComponent,
        _specification_catalog_specification_catalog_component__WEBPACK_IMPORTED_MODULE_6__.SpecificationCatalogComponent,
        _boq_navbar_home_component__WEBPACK_IMPORTED_MODULE_7__.HomeComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_38__.CommonModule,
        _boq_routing_module__WEBPACK_IMPORTED_MODULE_2__.BoqRoutingModule,
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_39__.ReactiveFormsModule,
        ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_40__.NzGridModule, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_8__.NzButtonModule,
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
        ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_33__.NzDrawerModule,
        ng_zorro_antd_popover__WEBPACK_IMPORTED_MODULE_34__.NzPopoverModule, ngx_toastr__WEBPACK_IMPORTED_MODULE_36__.ToastrModule, devextreme_angular__WEBPACK_IMPORTED_MODULE_41__.DxDataGridModule,
        devextreme_angular__WEBPACK_IMPORTED_MODULE_42__.DxButtonModule,
        devextreme_angular__WEBPACK_IMPORTED_MODULE_43__.DxTooltipModule] }); })();


/***/ }),

/***/ 815:
/*!*******************************************************************************!*\
  !*** ./src/app/apps/work_management/tendering/boq/manual/manual.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManualComponent": () => (/* binding */ ManualComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _boq_navbar_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../boq-navbar/home.component */ 64188);


class ManualComponent {
    constructor() { }
    ngOnInit() {
    }
}
ManualComponent.ɵfac = function ManualComponent_Factory(t) { return new (t || ManualComponent)(); };
ManualComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ManualComponent, selectors: [["app-manual"]], decls: 1, vars: 0, template: function ManualComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-home");
    } }, dependencies: [_boq_navbar_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent], styles: [".boq_menu[_ngcontent-%COMP%] {\n  border-radius: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hbnVhbC5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXFN1bnJpc2UlMjBUZWNoXFxhbXNfZnJvbnRlbmRcXHNyY1xcYXBwXFxhcHBzXFx3b3JrX21hbmFnZW1lbnRcXHRlbmRlcmluZ1xcYm9xXFxtYW51YWxcXG1hbnVhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0FDQ0oiLCJmaWxlIjoibWFudWFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJvcV9tZW51e1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICB9IiwiLmJvcV9tZW51IHtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn0iXX0= */"] });


/***/ }),

/***/ 19076:
/*!*************************************************************************!*\
  !*** ./src/app/apps/work_management/tendering/boq/sor/sor.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SorComponent": () => (/* binding */ SorComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/grid */ 70031);
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! devextreme-angular */ 65821);
/* harmony import */ var devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! devextreme-angular/ui/nested */ 18237);
/* harmony import */ var devextreme_angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! devextreme-angular/core */ 46209);
/* harmony import */ var _boq_navbar_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../boq-navbar/home.component */ 64188);







function SorComponent_div_2_dxi_column_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "dxi-column", 14);
} if (rf & 2) {
    const f_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("visible", !f_r3.hide)("dataField", f_r3.field)("caption", f_r3.headerName)("alignment", f_r3.alignment)("width", f_r3.width)("allowResizing", true);
} }
function SorComponent_div_2_div_15_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SorComponent_div_2_div_15_Template_div_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const data_r4 = restoredCtx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r5.onView(data_r4.data)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " View ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} }
const _c0 = function () { return [10, 25, 50, 100]; };
function SorComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "dx-data-grid", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onToolbarPreparing", function SorComponent_div_2_Template_dx_data_grid_onToolbarPreparing_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r7.permissions.insrt_in == 1 ? ctx_r7.onToolbarPreparing($event) : false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "dxo-paging", 4)(4, "dxo-pager", 5)(5, "dxo-search-panel", 6)(6, "dxo-filter-panel", 7)(7, "dxo-header-filter", 7)(8, "dxo-group-panel", 7)(9, "dxo-grouping", 8)(10, "dxo-column-chooser", 9)(11, "dxo-export", 10)(12, "dxo-filter-row", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, SorComponent_div_2_dxi_column_13_Template, 1, 6, "dxi-column", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "dxi-column", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, SorComponent_div_2_div_15_Template, 3, 0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("wordWrapEnabled", true)("dataSource", ctx_r0.rowData)("remoteOperations", false)("allowColumnReordering", true)("rowAlternationEnabled", true)("allowColumnResizing", true)("showColumnLines", true)("showRowLines", true)("showBorders", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("pageSize", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("visible", true)("showPageSizeSelector", true)("allowedPageSizes", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](29, _c0))("showInfo", true);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("enabled", ctx_r0.permissions.exprt_in == 1 ? true : false)("allowExportSelectedData", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("visible", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.columnDefs);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("showInColumnChooser", false)("visible", ctx_r0.permissions.updt_in == 1 ? true : false)("width", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dxTemplateOf", "viewTemplate");
} }
class SorComponent {
    constructor() {
        this.permissions = { "slct_in": 1, "insrt_in": 1, "updt_in": 1, "dlte_in": 1, "exprt_in": 1 };
        this.columnDefs = [
            { headerName: 'Source name', field: 'boq_srce_nm', alignment: 'center' },
            { headerName: 'Description', alignment: 'left', field: 'dscn_tx' },
            { headerName: 'Start date', alignment: 'left', field: 'strt_dt' },
            { headerName: 'End date', alignment: 'left', field: 'end_dt' }
        ];
        this.rowData = [{ "boq_srce_nm": 'xxxxxx',
                "dscn_tx": 'sdsd jldfh ld yfsdfj d gygf j,rys,j f sjl, fjs,yglsj syugfukyfkgul ysgkyufkgs,fs, rysgkuyfl gsruyflgtl ayfg',
                "strt_dt": "5/11/2015",
                "end_dt": "5/11/2015"
            },
            { "boq_srce_nm": 'yyyyyyy',
                "dscn_tx": 1234,
                "strt_dt": "5/11/2015",
                "end_dt": "5/11/2015"
            },
            { "boq_srce_nm": 'zzzzz',
                "dscn_tx": 1234,
                "strt_dt": "5/11/2015",
                "end_dt": "5/11/2015"
            },
            { "boq_srce_nm": 'aaaaaaaaa',
                "dscn_tx": 1234,
                "strt_dt": "5/11/2015",
                "end_dt": "5/11/2015"
            },
            { "boq_srce_nm": 'bbbbbbbbbb',
                "dscn_tx": 1234,
                "strt_dt": "5/11/2015",
                "end_dt": "5/11/2015"
            },
            { "boq_srce_nm": 'cccccccc',
                "dscn_tx": 1234,
                "strt_dt": "5/11/2015",
                "end_dt": "5/11/2015"
            }];
    }
    ngOnInit() {
        this.permissions.insrt_in = 0;
    }
    onToolbarPreparing(e) {
        e.toolbarOptions.items.unshift({
            location: 'after',
            widget: 'dxButton',
            options: {
                icon: 'plus',
                text: 'Register Grants',
                onClick: this.openSideBar.bind(this, 'new'),
                bindingOptions: {
                    'disabled': 'isEmailButtonDisabled'
                }
            }
        });
    }
    openSideBar() {
    }
    onView(data) {
        console.log(data);
    }
}
SorComponent.ɵfac = function SorComponent_Factory(t) { return new (t || SorComponent)(); };
SorComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SorComponent, selectors: [["app-sor"]], decls: 3, vars: 1, consts: [["nz-row", "", "class", "gridTop", 4, "ngIf"], ["nz-row", "", 1, "gridTop"], [1, "ds-card", "grid"], ["id", "gridContainer", 1, "p-8", 2, "width", "100%", 3, "wordWrapEnabled", "dataSource", "remoteOperations", "allowColumnReordering", "rowAlternationEnabled", "allowColumnResizing", "showColumnLines", "showRowLines", "showBorders", "onToolbarPreparing"], [3, "pageSize"], [3, "visible", "showPageSizeSelector", "allowedPageSizes", "showInfo"], [3, "visible", "highlightCaseSensitive"], [3, "visible"], [3, "autoExpandAll"], ["mode", "select", 3, "enabled"], ["fileName", "Change Log", 3, "enabled", "allowExportSelectedData"], [3, "visible", "dataField", "caption", "alignment", "width", "allowResizing", 4, "ngFor", "ngForOf"], ["type", "buttons", "cellTemplate", "viewTemplate", 3, "showInColumnChooser", "visible", "width"], [4, "dxTemplate", "dxTemplateOf"], [3, "visible", "dataField", "caption", "alignment", "width", "allowResizing"], [1, "tblEdtBtn", 3, "click"]], template: function SorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-home");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, SorComponent_div_2_Template, 16, 30, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.permissions.slct_in == 1 ? true : false);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__.NzRowDirective, devextreme_angular__WEBPACK_IMPORTED_MODULE_4__.DxDataGridComponent, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_5__.DxoColumnChooserComponent, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_5__.DxiColumnComponent, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_5__.DxoHeaderFilterComponent, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_5__.DxoExportComponent, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_5__.DxoFilterPanelComponent, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_5__.DxoFilterRowComponent, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_5__.DxoGroupingComponent, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_5__.DxoGroupPanelComponent, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_5__.DxoPagerComponent, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_5__.DxoPagingComponent, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_5__.DxoSearchPanelComponent, devextreme_angular_core__WEBPACK_IMPORTED_MODULE_6__.DxTemplateDirective, _boq_navbar_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent], styles: [".ds-card.grid {\n  max-width: 100%;\n  min-width: 100%;\n  border: 0px solid;\n  padding: 10px;\n  background: #fff;\n  border-color: rgb(240, 240, 240) !important;\n  border-radius: 8px;\n  border: 1px solid;\n  margin-top: 12px;\n}\n  .dx-datagrid .dx-datagid-headers .dx-header-row .dx-datagrid .dx-datagrid-headers .dx-header-filter {\n  outline: none;\n  background: #3190a6;\n  \n  color: #ffffff;\n  font-weight: 900;\n  font-size: 13px;\n  margin-right: 4px;\n}\n  .dx-datagrid .dx-header-filter:before {\n  content: \"\\f050\";\n  font-size: 10px;\n}\n  .dx-datagrid-headers {\n  color: #959595;\n  font-weight: normal;\n  touch-action: pinch-zoom;\n  border-bottom: 5px solid #ddd !important;\n}\n  .dx-datagrid .dx-column-indicators {\n  float: right;\n}\n  .dx-datagrid .dx-row-lines > td {\n  border-bottom: 1px solid #f5f5f5 !important;\n}\n  .dx-datagrid .dx-row > th {\n  background-color: #f9f9f9 !important;\n}\n  .dx-datagrid-borders .dx-datagrid-rowsview,   .dx-datagrid-headers + .dx-datagrid-rowsview {\n  border-top: 1px solid #f9f9f9;\n}\n  .dx-datagrid-borders > .dx-datagrid-rowsview,   .dx-datagrid-borders > .dx-datagrid-total-footer {\n  border-bottom: 1px solid #f9f9f9;\n}\n  .dx-datagrid .dx-column-lines > td {\n  border-left: 1px solid #f5f5f5 !important;\n  border-right: 1px solid #f5f5f5 !important;\n  font-size: 14px;\n  color: black;\n}\n  .dx-datagrid-content .dx-datagrid-table .dx-row .dx-command-edit {\n  width: 100px;\n  min-width: 100px;\n  cursor: pointer;\n}\n  .dx-datagrid .dx-datagrid-headers .dx-header-row > td,   .dx-datagrid .dx-datagrid-headers .dx-header-filter {\n  text-align: center !important;\n  text-transform: capitalize !important;\n}\n  .table-striped tbody tr:nth-of-type(odd) {\n  background-color: #f0f5fb;\n}\n  .dx-row .dx-column-lines .dx-header-row {\n  color: #fbfcfd;\n}\n  .dx-datagrid-rowsview .dx-row {\n  background: rgb(228, 228, 228);\n}\n  .dx-datagrid-headers .dx-datagrid-table .dx-row > td {\n  border-bottom: 1px solid #ddd;\n  color: white !important;\n}\n  .dx-texteditor-input {\n  border-radius: 0px;\n}\n  .dx-datagrid-rowsview .dx-row {\n  background: #ffffff;\n}\n  .dx-datagrid .dx-row-alt > td, .dx-datagrid[_ngcontent-%COMP%]   .dx-row-alt[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > td[_ngcontent-%COMP%] {\n  background-color: #fafafa;\n  border-top: 1px solid #f5f5f5;\n  border-bottom: 1px solid #f5f5f5;\n}\n  .ant-picker {\n  width: 100% !important;\n  border-radius: 5px !important;\n}\n  .dx-datagrid-summary-item {\n  color: white !important;\n  font-weight: 600 !important;\n}\n  .ant-select-multiple .ant-select-selection-item {\n  position: absolute !important;\n  color: black;\n  margin-top: 0px !important;\n  margin-right: 0px !important;\n  margin-bottom: 0px !important;\n  padding: 0 0px 0 0px !important;\n  background: #ffffff !important;\n  border: 0px solid #f0f0f0 !important;\n}\n  .dx-datagrid-filter-row .dx-editor-cell .dx-editor-with-menu .dx-menu {\n  display: block !important;\n}\n  .dx-datagrid-content .dx-datagrid-table {\n  border-collapse: collapse;\n  border-spacing: 0;\n  background: #1969cd;\n  margin: 0;\n  color: white;\n  cursor: pointer;\n  max-width: 10px;\n}\n  .dx-datagrid-content .dx-datagrid-table [class*=column] + [class*=column]:last-child {\n  float: none;\n  background-color: white;\n}\n.sbmtBtm[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  background-color: #e6eff9;\n  border-radius: 5px;\n  float: right;\n}\n.inptLbl[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  color: #3b3d3d;\n  margin-bottom: 2px;\n}\n  .dx-button-mode-contained {\n  background-color: #fff !important;\n  border-color: #ddd !important;\n  color: #145db6 !important;\n  box-shadow: 0 4px 12px 0 rgba(123, 149, 153, 0.36) !important;\n  font-weight: 700 !important;\n}\n  .dx-button-mode-contained .dx-icon {\n  color: #145db6 !important;\n}\n.ant-input[_ngcontent-%COMP%] {\n  font-feature-settings: \"tnum\";\n  position: relative;\n  display: inline-block;\n  padding: 4px 11px;\n  font-size: 14px;\n  line-height: 1.5715;\n  background-color: #fff;\n  border: 1px solid #d9d9d9;\n  border-radius: 5px;\n  transition: all 0.3s;\n}\n.ant-select-single[_ngcontent-%COMP%]:not(.ant-select-customize-input)   .ant-select-selector[_ngcontent-%COMP%] {\n  position: relative;\n  background-color: #fff;\n  border: 1px solid #d9d9d9;\n  border-radius: 5px;\n  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n  width: 100%;\n  height: 32px;\n  padding: 0 11px;\n}\n.stpopts[_ngcontent-%COMP%] {\n  overflow: auto;\n  height: 428px;\n  margin-top: 10px;\n}\n.stpopthdr[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: black;\n  background-color: #f6f6f6;\n  font-size: 14px;\n}\n.stpoptsmainhng[_ngcontent-%COMP%] {\n  font-size: 17px;\n  font-weight: 500;\n  color: #c62828 !important;\n}\n.inptLbl[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  color: #3b3d3d;\n  margin-bottom: 2px;\n}\nnz-select[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.frmrw[_ngcontent-%COMP%] {\n  margin-bottom: 8px !important;\n}\n.addDesCrptn[_ngcontent-%COMP%] {\n  margin: 0px auto;\n  cursor: pointer;\n}\n.mnuprflMrgn[_ngcontent-%COMP%] {\n  margin-bottom: 8px !important;\n}\n.ant-form-item[_ngcontent-%COMP%] {\n  margin: 0 0 4px !important;\n}\n.inpf[_ngcontent-%COMP%] {\n  color: blue;\n}\n.uploadImgg[_ngcontent-%COMP%] {\n  height: 50px;\n  padding-left: 50px;\n  padding-right: 50px;\n  margin: 20px auto;\n  border: 2px dashed #1C8ADB;\n  border-radius: 10px;\n  font-size: 27px;\n  background-color: #f6fbff;\n  color: #1165a4;\n  text-align: center;\n  cursor: pointer;\n}\n.rghtbrdr[_ngcontent-%COMP%] {\n  border-right: 1px dashed #b8b8b8;\n}\n.btmbrdr[_ngcontent-%COMP%] {\n  border-bottom: 1px dashed #b8b8b8;\n}\n.filter-card[_ngcontent-%COMP%] {\n  border-radius: 0;\n  box-shadow: 0 1px 15px 1px rgba(69, 65, 78, 0.08) !important;\n  background-color: #fff;\n  padding: 8px 33px 16px 33px;\n}\n.slwmftouploadform[_ngcontent-%COMP%]   nz-form-label[_ngcontent-%COMP%] {\n  padding-left: 2px !important;\n}\n.pndngaprvalCrd[_ngcontent-%COMP%] {\n  box-shadow: 0 1px 15px 1px rgba(69, 65, 78, 0.08) !important;\n  padding: 11px 14px;\n  margin: 10px 0px;\n  border: 2px solid #bfe7bf;\n  border-radius: 4px;\n  background: azure;\n}\n.pndngaprvalCrd[_ngcontent-%COMP%]   .p_aprvl_cnt[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n  color: #334155;\n}\n.pndngaprvalCrd[_ngcontent-%COMP%]   .p_aprvl_nm[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n}\n.avtr_cls[_ngcontent-%COMP%] {\n  width: 110px;\n  height: 115px;\n  line-height: 110px;\n  font-size: 48px;\n}\n.rightimg[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.cstmheight[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  border-top: 2px solid #255946;\n}\n@media only screen and (min-width: 1500px) and (max-width: 2500px) {\n  .rightimg[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 70%;\n  }\n  .cstmheight[_ngcontent-%COMP%] {\n    height: 425px;\n    border-radius: 8px;\n  }\n  .pndngaprvalCrd[_ngcontent-%COMP%] {\n    box-shadow: 0 1px 15px 1px rgba(69, 65, 78, 0.08) !important;\n    padding: 20px 14px;\n    margin: 10px 0px;\n    border: 1px solid #bfe7bf;\n    border-radius: 4px;\n  }\n}\n.boq_menu[_ngcontent-%COMP%] {\n  border-radius: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNvci5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXFN1bnJpc2UlMjBUZWNoXFxhbXNfZnJvbnRlbmRcXHNyY1xcYXBwXFxhcHBzXFx3b3JrX21hbmFnZW1lbnRcXHRlbmRlcmluZ1xcYm9xXFxzb3JcXHNvci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFRTtFQUNFLGVBQUE7RUFDQSxlQUFBO0VBRUEsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ0RKO0FES0U7RUFDRSxhQUFBO0VBRUEsbUJBQUE7RUFDQSxpREFBQTtFQUNBLGNBQUE7RUFFQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0xKO0FET0U7RUFDRSxnQkFBQTtFQUNBLGVBQUE7QUNMSjtBRE9FO0VBQ0UsY0FBQTtFQUNBLG1CQUFBO0VBRUEsd0JBQUE7RUFDQSx3Q0FBQTtBQ0xKO0FET0U7RUFDRSxZQUFBO0FDTEo7QURPRTtFQUNFLDJDQUFBO0FDTEo7QURPRTtFQUNFLG9DQUFBO0FDTEo7QURPRTs7RUFFRSw2QkFBQTtBQ0xKO0FEUUU7O0VBRUUsZ0NBQUE7QUNOSjtBRFFFO0VBQ0UseUNBQUE7RUFDQSwwQ0FBQTtFQUNBLGVBQUE7RUFFQSxZQUFBO0FDUEo7QURVRTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNSSjtBRFdFOztFQUVFLDZCQUFBO0VBQ0EscUNBQUE7QUNUSjtBRGdCRTtFQUNFLHlCQUFBO0FDZEo7QURnQkU7RUFDRSxjQUFBO0FDZEo7QURpQkU7RUFDRSw4QkFBQTtBQ2ZKO0FEd0JBO0VBQ0UsNkJBQUE7RUFDQSx1QkFBQTtBQ3JCRjtBRHVCQTtFQUNFLGtCQUFBO0FDcEJGO0FEc0JBO0VBQ0UsbUJBQUE7QUNuQkY7QURxQkE7O0VBRUUseUJBQUE7RUFDQSw2QkFBQTtFQUNBLGdDQUFBO0FDbEJGO0FEb0JBO0VBQ0Usc0JBQUE7RUFDQSw2QkFBQTtBQ2pCRjtBRG1CQTtFQUNFLHVCQUFBO0VBR0EsMkJBQUE7QUNuQkY7QURxQkE7RUFDRSw2QkFBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSwrQkFBQTtFQUNBLDhCQUFBO0VBQ0Esb0NBQUE7QUNkRjtBRGdCQTtFQUNFLHlCQUFBO0FDYkY7QURlQTtFQUNFLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUNaRjtBRGNBO0VBQ0UsV0FBQTtFQUNBLHVCQUFBO0FDWEY7QURhQTtFQUNFLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUNWRjtBRFlBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDVEY7QURXQTtFQUNFLGlDQUFBO0VBQ0EsNkJBQUE7RUFDQSx5QkFBQTtFQUNBLDZEQUFBO0VBQ0EsMkJBQUE7QUNSRjtBRFVBO0VBQ0UseUJBQUE7QUNQRjtBRFNBO0VBQ0UsNkJBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtBQ05GO0FEUUE7RUFDRSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlEQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDTEY7QURPQTtFQUNFLGNBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUNKRjtBRE9BO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0FDSkY7QURNQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0FDSEY7QURLQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQ0ZGO0FES0E7RUFDRSxXQUFBO0FDRkY7QURJQTtFQUNFLDZCQUFBO0FDREY7QURHQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtBQ0FGO0FERUE7RUFDRSw2QkFBQTtBQ0NGO0FEQ0E7RUFDRSwwQkFBQTtBQ0VGO0FEQUE7RUFDRSxXQUFBO0FDR0Y7QUREQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNGLG1CQUFBO0VBQ0UsaUJBQUE7RUFDQSwwQkFBQTtFQUNELG1CQUFBO0VBQ0MsZUFBQTtFQUNELHlCQUFBO0VBQ0MsY0FBQTtFQUNELGtCQUFBO0VBQ0EsZUFBQTtBQ0lEO0FERkE7RUFDRSxnQ0FBQTtBQ0tGO0FESEE7RUFDRSxpQ0FBQTtBQ01GO0FESkE7RUFDRSxnQkFBQTtFQUNBLDREQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtBQ09GO0FESkU7RUFDRSw0QkFBQTtBQ09KO0FESkE7RUFDRSw0REFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNPRjtBRE5FO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ1FKO0FETkU7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUNRSjtBRExBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNRRjtBRE5BO0VBQ0UsV0FBQTtBQ1NGO0FETkE7RUFDRSxrQkFBQTtFQUNBLDZCQUFBO0FDU0Y7QURQQTtFQUNFO0lBQ0UsVUFBQTtFQ1VGO0VEUkE7SUFDRSxhQUFBO0lBQ0Msa0JBQUE7RUNVSDtFRFBBO0lBQ0UsNERBQUE7SUFDQSxrQkFBQTtJQUNBLGdCQUFBO0lBQ0EseUJBQUE7SUFDQSxrQkFBQTtFQ1NGO0FBQ0Y7QUROQTtFQUNFLG1CQUFBO0FDUUYiLCJmaWxlIjoic29yLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy9kZXYgZXh0cmVtZSBncmlkIHN0eWxlc1xyXG46Om5nLWRlZXAge1xyXG4gIC5kcy1jYXJkLmdyaWQge1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgbWluLXdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgYm9yZGVyOiAwcHggc29saWQ7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiKDI0MCAyNDAgMjQwKSAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQ7XHJcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xyXG4gICAgLy8gYmFja2dyb3VuZDogI2ZmZmNmNyFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuZHgtZGF0YWdyaWQgLmR4LWRhdGFnaWQtaGVhZGVycyAuZHgtaGVhZGVyLXJvdyAuZHgtZGF0YWdyaWQgLmR4LWRhdGFncmlkLWhlYWRlcnMgLmR4LWhlYWRlci1maWx0ZXIge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIC8vIGJhY2tncm91bmQ6ICMyYzU2ODU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMzE5MGE2O1xyXG4gICAgLyogYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkICNkZGRkZGQgIWltcG9ydGFudDsgKi9cclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgLy8gY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIG1hcmdpbi1yaWdodDogNHB4O1xyXG4gIH1cclxuICAuZHgtZGF0YWdyaWQgLmR4LWhlYWRlci1maWx0ZXI6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IFwiXFxmMDUwXCI7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgfVxyXG4gIC5keC1kYXRhZ3JpZC1oZWFkZXJzIHtcclxuICAgIGNvbG9yOiAjOTU5NTk1O1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIC1tcy10b3VjaC1hY3Rpb246IHBpbmNoLXpvb207XHJcbiAgICB0b3VjaC1hY3Rpb246IHBpbmNoLXpvb207XHJcbiAgICBib3JkZXItYm90dG9tOiA1cHggc29saWQgI2RkZCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAuZHgtZGF0YWdyaWQgLmR4LWNvbHVtbi1pbmRpY2F0b3JzIHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICB9XHJcbiAgLmR4LWRhdGFncmlkIC5keC1yb3ctbGluZXMgPiB0ZCB7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Y1ZjVmNSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAuZHgtZGF0YWdyaWQgLmR4LXJvdyA+IHRoIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOWY5ZjkgIWltcG9ydGFudDtcclxuICB9XHJcbiAgLmR4LWRhdGFncmlkLWJvcmRlcnMgLmR4LWRhdGFncmlkLXJvd3N2aWV3LFxyXG4gIC5keC1kYXRhZ3JpZC1oZWFkZXJzICsgLmR4LWRhdGFncmlkLXJvd3N2aWV3IHtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZjlmOWY5O1xyXG4gIH1cclxuXHJcbiAgLmR4LWRhdGFncmlkLWJvcmRlcnMgPiAuZHgtZGF0YWdyaWQtcm93c3ZpZXcsXHJcbiAgLmR4LWRhdGFncmlkLWJvcmRlcnMgPiAuZHgtZGF0YWdyaWQtdG90YWwtZm9vdGVyIHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjlmOWY5O1xyXG4gIH1cclxuICAuZHgtZGF0YWdyaWQgLmR4LWNvbHVtbi1saW5lcyA+IHRkIHtcclxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2Y1ZjVmNSAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2Y1ZjVmNSAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgLy8gY29sb3I6IHdoaXRlO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gIH1cclxuXHJcbiAgLmR4LWRhdGFncmlkLWNvbnRlbnQgLmR4LWRhdGFncmlkLXRhYmxlIC5keC1yb3cgLmR4LWNvbW1hbmQtZWRpdCB7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBtaW4td2lkdGg6IDEwMHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuXHJcbiAgLmR4LWRhdGFncmlkIC5keC1kYXRhZ3JpZC1oZWFkZXJzIC5keC1oZWFkZXItcm93ID4gdGQsXHJcbiAgLmR4LWRhdGFncmlkIC5keC1kYXRhZ3JpZC1oZWFkZXJzIC5keC1oZWFkZXItZmlsdGVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemUgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC8vIC5keC1kYXRhZ3JpZC1jb250ZW50IC5keC1kYXRhZ3JpZC10YWJsZSAuZHgtcm93ID4gdGQ6Zmlyc3QtY2hpbGQsIC5keC1kYXRhZ3JpZC1jb250ZW50IC5keC1kYXRhZ3JpZC10YWJsZSAuZHgtcm93ID4gdHIgPiB0ZDpmaXJzdC1jaGlsZCB7XHJcbiAgLy8gIHRleHQtYWxpZ246IGNlbnRlciFpbXBvcnRhbnQ7XHJcbiAgLy8gfVxyXG5cclxuICAudGFibGUtc3RyaXBlZCB0Ym9keSB0cjpudGgtb2YtdHlwZShvZGQpIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGY1ZmI7XHJcbiAgfVxyXG4gIC5keC1yb3cgLmR4LWNvbHVtbi1saW5lcyAuZHgtaGVhZGVyLXJvdyB7XHJcbiAgICBjb2xvcjogI2ZiZmNmZDtcclxuICAgIC8vIGNvbG9yIDogYmxhY2s7XHJcbiAgfVxyXG4gIC5keC1kYXRhZ3JpZC1yb3dzdmlldyAuZHgtcm93IHtcclxuICAgIGJhY2tncm91bmQ6IHJnYigyMjgsIDIyOCwgMjI4KTtcclxuICB9XHJcbiAgLy8gOjpuZy1kZWVwIC5keC1kYXRhZ3JpZC1zdW1tYXJ5LWl0ZW0ge1xyXG4gIC8vICAgICBjb2xvcjogcmdiYSg1MSwgNTEsIDUxLCAwLjcpO1xyXG4gIC8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBidXJseXdvb2Q7XHJcbiAgLy8gICAgIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcclxuICAvLyB9XHJcbn1cclxuXHJcbjo6bmctZGVlcCAuZHgtZGF0YWdyaWQtaGVhZGVycyAuZHgtZGF0YWdyaWQtdGFibGUgLmR4LXJvdyA+IHRkIHtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcclxuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxufVxyXG46Om5nLWRlZXAgLmR4LXRleHRlZGl0b3ItaW5wdXQge1xyXG4gIGJvcmRlci1yYWRpdXM6IDBweDtcclxufVxyXG46Om5nLWRlZXAgLmR4LWRhdGFncmlkLXJvd3N2aWV3IC5keC1yb3cge1xyXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbn1cclxuOjpuZy1kZWVwIC5keC1kYXRhZ3JpZCAuZHgtcm93LWFsdCA+IHRkLFxyXG4uZHgtZGF0YWdyaWQgLmR4LXJvdy1hbHQgPiB0ciA+IHRkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZjVmNWY1O1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjVmNWY1O1xyXG59XHJcbjo6bmctZGVlcCAuYW50LXBpY2tlciB7XHJcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICBib3JkZXItcmFkaXVzOiA1cHggIWltcG9ydGFudDtcclxufVxyXG46Om5nLWRlZXAgLmR4LWRhdGFncmlkLXN1bW1hcnktaXRlbSB7XHJcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbn1cclxuOjpuZy1kZWVwIC5keC1kYXRhZ3JpZC1zdW1tYXJ5LWl0ZW0ge1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcclxufVxyXG46Om5nLWRlZXAgLmFudC1zZWxlY3QtbXVsdGlwbGUgLmFudC1zZWxlY3Qtc2VsZWN0aW9uLWl0ZW0ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBtYXJnaW4tdG9wOiAwcHggIWltcG9ydGFudDtcclxuICBtYXJnaW4tcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbi1ib3R0b206IDBweCAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmc6IDAgMHB4IDAgMHB4ICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZDogI2ZmZmZmZiAhaW1wb3J0YW50O1xyXG4gIGJvcmRlcjogMHB4IHNvbGlkICNmMGYwZjAgIWltcG9ydGFudDtcclxufVxyXG46Om5nLWRlZXAgLmR4LWRhdGFncmlkLWZpbHRlci1yb3cgLmR4LWVkaXRvci1jZWxsIC5keC1lZGl0b3Itd2l0aC1tZW51IC5keC1tZW51IHtcclxuICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xyXG59XHJcbjo6bmctZGVlcCAuZHgtZGF0YWdyaWQtY29udGVudCAuZHgtZGF0YWdyaWQtdGFibGUge1xyXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XHJcbiAgYmFja2dyb3VuZDogIzE5NjljZDtcclxuICBtYXJnaW46IDA7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBtYXgtd2lkdGg6IDEwcHg7XHJcbn1cclxuOjpuZy1kZWVwIC5keC1kYXRhZ3JpZC1jb250ZW50IC5keC1kYXRhZ3JpZC10YWJsZSBbY2xhc3MqPVwiY29sdW1uXCJdICsgW2NsYXNzKj1cImNvbHVtblwiXTpsYXN0LWNoaWxkIHtcclxuICBmbG9hdDogbm9uZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG4uc2JtdEJ0bSB7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZlZmY5O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuLmlucHRMYmwge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGNvbG9yOiAjM2IzZDNkO1xyXG4gIG1hcmdpbi1ib3R0b206IDJweDtcclxufVxyXG46Om5nLWRlZXAgLmR4LWJ1dHRvbi1tb2RlLWNvbnRhaW5lZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1jb2xvcjogI2RkZCAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiAjMTQ1ZGI2ICFpbXBvcnRhbnQ7XHJcbiAgYm94LXNoYWRvdzogMCA0cHggMTJweCAwIHJnYmEoMTIzLCAxNDksIDE1MywgMC4zNikgIWltcG9ydGFudDtcclxuICBmb250LXdlaWdodDogNzAwICFpbXBvcnRhbnQ7XHJcbn1cclxuOjpuZy1kZWVwIC5keC1idXR0b24tbW9kZS1jb250YWluZWQgLmR4LWljb24ge1xyXG4gIGNvbG9yOiAjMTQ1ZGI2ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmFudC1pbnB1dCB7XHJcbiAgZm9udC1mZWF0dXJlLXNldHRpbmdzOiBcInRudW1cIjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHBhZGRpbmc6IDRweCAxMXB4O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBsaW5lLWhlaWdodDogMS41NzE1O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2Q5ZDlkOTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbn1cclxuLmFudC1zZWxlY3Qtc2luZ2xlOm5vdCguYW50LXNlbGVjdC1jdXN0b21pemUtaW5wdXQpIC5hbnQtc2VsZWN0LXNlbGVjdG9yIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZDlkOWQ5O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSk7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAzMnB4O1xyXG4gIHBhZGRpbmc6IDAgMTFweDtcclxufVxyXG4uc3Rwb3B0cyB7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgaGVpZ2h0OiA0MjhweDtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG4uc3Rwb3B0aGRyIHtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmNmY2O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG4uc3Rwb3B0c21haW5obmcge1xyXG4gIGZvbnQtc2l6ZTogMTdweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGNvbG9yOiAjYzYyODI4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmlucHRMYmwge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGNvbG9yOiAjM2IzZDNkO1xyXG4gIG1hcmdpbi1ib3R0b206IDJweDtcclxufVxyXG5cclxubnotc2VsZWN0IHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4uZnJtcncge1xyXG4gIG1hcmdpbi1ib3R0b206IDhweCAhaW1wb3J0YW50O1xyXG59XHJcbi5hZGREZXNDcnB0biB7XHJcbiAgbWFyZ2luOiAwcHggYXV0bztcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLm1udXByZmxNcmduIHtcclxuICBtYXJnaW4tYm90dG9tOiA4cHggIWltcG9ydGFudDtcclxufVxyXG4uYW50LWZvcm0taXRlbSB7XHJcbiAgbWFyZ2luOiAwIDAgNHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmlucGZ7XHJcbiAgY29sb3I6Ymx1ZTtcclxufVxyXG4udXBsb2FkSW1nZ3tcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgcGFkZGluZy1sZWZ0OiA1MHB4O1xyXG5wYWRkaW5nLXJpZ2h0OiA1MHB4O1xyXG4gIG1hcmdpbjogMjBweCBhdXRvO1xyXG4gIGJvcmRlcjogMnB4IGRhc2hlZCAjMUM4QURCO1xyXG4gYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBmb250LXNpemU6IDI3cHg7XHJcbiBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmYmZmO1xyXG4gIGNvbG9yOiAjMTE2NWE0O1xyXG4gdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5yZ2h0YnJkciB7XHJcbiAgYm9yZGVyLXJpZ2h0OiAxcHggZGFzaGVkICNiOGI4Yjg7XHJcbn1cclxuLmJ0bWJyZHIge1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgI2I4YjhiODtcclxufVxyXG4uZmlsdGVyLWNhcmQge1xyXG4gIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgYm94LXNoYWRvdzogMCAxcHggMTVweCAxcHggcmdiYSg2OSwgNjUsIDc4LCAwLjA4KSAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgcGFkZGluZzogOHB4IDMzcHggMTZweCAzM3B4O1xyXG59XHJcbi5zbHdtZnRvdXBsb2FkZm9ybSB7XHJcbiAgbnotZm9ybS1sYWJlbCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDJweCAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG4ucG5kbmdhcHJ2YWxDcmQge1xyXG4gIGJveC1zaGFkb3c6IDAgMXB4IDE1cHggMXB4IHJnYig2OSA2NSA3OCAvIDglKSAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmc6IDExcHggMTRweDtcclxuICBtYXJnaW46IDEwcHggMHB4O1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICNiZmU3YmY7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGJhY2tncm91bmQ6IGF6dXJlO1xyXG4gIC5wX2FwcnZsX2NudCB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgY29sb3I6ICMzMzQxNTU7XHJcbiAgfVxyXG4gIC5wX2FwcnZsX25tIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgfVxyXG59XHJcbi5hdnRyX2Nsc3tcclxuICB3aWR0aDogMTEwcHg7XHJcbiAgaGVpZ2h0OiAxMTVweDtcclxuICBsaW5lLWhlaWdodDogMTEwcHg7XHJcbiAgZm9udC1zaXplOiA0OHB4O1xyXG59XHJcbi5yaWdodGltZyBpbWcge1xyXG4gIHdpZHRoOjEwMCU7XHJcbn1cclxuXHJcbi5jc3RtaGVpZ2h0e1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBib3JkZXItdG9wOiAycHggc29saWQgIzI1NTk0NjtcclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6MTUwMHB4KSBhbmQgKG1heC13aWR0aDoyNTAwcHgpe1xyXG4gIC5yaWdodGltZyBpbWcge1xyXG4gICAgd2lkdGg6NzAlO1xyXG4gIH1cclxuICAuY3N0bWhlaWdodHtcclxuICAgIGhlaWdodDogNDI1cHg7XHJcbiAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIH1cclxuXHJcbiAgLnBuZG5nYXBydmFsQ3JkIHtcclxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDE1cHggMXB4IHJnYig2OSA2NSA3OCAvIDglKSAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZzogMjBweCAxNHB4O1xyXG4gICAgbWFyZ2luOiAxMHB4IDBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNiZmU3YmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxufVxyXG5cclxuLmJvcV9tZW51e1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn0iLCI6Om5nLWRlZXAgLmRzLWNhcmQuZ3JpZCB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWluLXdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJvcmRlcjogMHB4IHNvbGlkO1xuICBwYWRkaW5nOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItY29sb3I6IHJnYigyNDAsIDI0MCwgMjQwKSAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkO1xuICBtYXJnaW4tdG9wOiAxMnB4O1xufVxuOjpuZy1kZWVwIC5keC1kYXRhZ3JpZCAuZHgtZGF0YWdpZC1oZWFkZXJzIC5keC1oZWFkZXItcm93IC5keC1kYXRhZ3JpZCAuZHgtZGF0YWdyaWQtaGVhZGVycyAuZHgtaGVhZGVyLWZpbHRlciB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJhY2tncm91bmQ6ICMzMTkwYTY7XG4gIC8qIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCAjZGRkZGRkICFpbXBvcnRhbnQ7ICovXG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250LXdlaWdodDogOTAwO1xuICBmb250LXNpemU6IDEzcHg7XG4gIG1hcmdpbi1yaWdodDogNHB4O1xufVxuOjpuZy1kZWVwIC5keC1kYXRhZ3JpZCAuZHgtaGVhZGVyLWZpbHRlcjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjA1MFwiO1xuICBmb250LXNpemU6IDEwcHg7XG59XG46Om5nLWRlZXAgLmR4LWRhdGFncmlkLWhlYWRlcnMge1xuICBjb2xvcjogIzk1OTU5NTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgLW1zLXRvdWNoLWFjdGlvbjogcGluY2gtem9vbTtcbiAgdG91Y2gtYWN0aW9uOiBwaW5jaC16b29tO1xuICBib3JkZXItYm90dG9tOiA1cHggc29saWQgI2RkZCAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIC5keC1kYXRhZ3JpZCAuZHgtY29sdW1uLWluZGljYXRvcnMge1xuICBmbG9hdDogcmlnaHQ7XG59XG46Om5nLWRlZXAgLmR4LWRhdGFncmlkIC5keC1yb3ctbGluZXMgPiB0ZCB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjVmNWY1ICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgLmR4LWRhdGFncmlkIC5keC1yb3cgPiB0aCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOWY5ZjkgIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCAuZHgtZGF0YWdyaWQtYm9yZGVycyAuZHgtZGF0YWdyaWQtcm93c3ZpZXcsXG46Om5nLWRlZXAgLmR4LWRhdGFncmlkLWhlYWRlcnMgKyAuZHgtZGF0YWdyaWQtcm93c3ZpZXcge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2Y5ZjlmOTtcbn1cbjo6bmctZGVlcCAuZHgtZGF0YWdyaWQtYm9yZGVycyA+IC5keC1kYXRhZ3JpZC1yb3dzdmlldyxcbjo6bmctZGVlcCAuZHgtZGF0YWdyaWQtYm9yZGVycyA+IC5keC1kYXRhZ3JpZC10b3RhbC1mb290ZXIge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Y5ZjlmOTtcbn1cbjo6bmctZGVlcCAuZHgtZGF0YWdyaWQgLmR4LWNvbHVtbi1saW5lcyA+IHRkIHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZjVmNWY1ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNmNWY1ZjUgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogYmxhY2s7XG59XG46Om5nLWRlZXAgLmR4LWRhdGFncmlkLWNvbnRlbnQgLmR4LWRhdGFncmlkLXRhYmxlIC5keC1yb3cgLmR4LWNvbW1hbmQtZWRpdCB7XG4gIHdpZHRoOiAxMDBweDtcbiAgbWluLXdpZHRoOiAxMDBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuOjpuZy1kZWVwIC5keC1kYXRhZ3JpZCAuZHgtZGF0YWdyaWQtaGVhZGVycyAuZHgtaGVhZGVyLXJvdyA+IHRkLFxuOjpuZy1kZWVwIC5keC1kYXRhZ3JpZCAuZHgtZGF0YWdyaWQtaGVhZGVycyAuZHgtaGVhZGVyLWZpbHRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZSAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIC50YWJsZS1zdHJpcGVkIHRib2R5IHRyOm50aC1vZi10eXBlKG9kZCkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmNWZiO1xufVxuOjpuZy1kZWVwIC5keC1yb3cgLmR4LWNvbHVtbi1saW5lcyAuZHgtaGVhZGVyLXJvdyB7XG4gIGNvbG9yOiAjZmJmY2ZkO1xufVxuOjpuZy1kZWVwIC5keC1kYXRhZ3JpZC1yb3dzdmlldyAuZHgtcm93IHtcbiAgYmFja2dyb3VuZDogcmdiKDIyOCwgMjI4LCAyMjgpO1xufVxuXG46Om5nLWRlZXAgLmR4LWRhdGFncmlkLWhlYWRlcnMgLmR4LWRhdGFncmlkLXRhYmxlIC5keC1yb3cgPiB0ZCB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwIC5keC10ZXh0ZWRpdG9yLWlucHV0IHtcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xufVxuXG46Om5nLWRlZXAgLmR4LWRhdGFncmlkLXJvd3N2aWV3IC5keC1yb3cge1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xufVxuXG46Om5nLWRlZXAgLmR4LWRhdGFncmlkIC5keC1yb3ctYWx0ID4gdGQsXG4uZHgtZGF0YWdyaWQgLmR4LXJvdy1hbHQgPiB0ciA+IHRkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNmNWY1ZjU7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjVmNWY1O1xufVxuXG46Om5nLWRlZXAgLmFudC1waWNrZXIge1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiA1cHggIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwIC5keC1kYXRhZ3JpZC1zdW1tYXJ5LWl0ZW0ge1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwIC5keC1kYXRhZ3JpZC1zdW1tYXJ5LWl0ZW0ge1xuICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCAuYW50LXNlbGVjdC1tdWx0aXBsZSAuYW50LXNlbGVjdC1zZWxlY3Rpb24taXRlbSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xuICBjb2xvcjogYmxhY2s7XG4gIG1hcmdpbi10b3A6IDBweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudDtcbiAgcGFkZGluZzogMCAwcHggMCAwcHggIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZiAhaW1wb3J0YW50O1xuICBib3JkZXI6IDBweCBzb2xpZCAjZjBmMGYwICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCAuZHgtZGF0YWdyaWQtZmlsdGVyLXJvdyAuZHgtZWRpdG9yLWNlbGwgLmR4LWVkaXRvci13aXRoLW1lbnUgLmR4LW1lbnUge1xuICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAgLmR4LWRhdGFncmlkLWNvbnRlbnQgLmR4LWRhdGFncmlkLXRhYmxlIHtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XG4gIGJhY2tncm91bmQ6ICMxOTY5Y2Q7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6IHdoaXRlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1heC13aWR0aDogMTBweDtcbn1cblxuOjpuZy1kZWVwIC5keC1kYXRhZ3JpZC1jb250ZW50IC5keC1kYXRhZ3JpZC10YWJsZSBbY2xhc3MqPWNvbHVtbl0gKyBbY2xhc3MqPWNvbHVtbl06bGFzdC1jaGlsZCB7XG4gIGZsb2F0OiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLnNibXRCdG0ge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZlZmY5O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuLmlucHRMYmwge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjM2IzZDNkO1xuICBtYXJnaW4tYm90dG9tOiAycHg7XG59XG5cbjo6bmctZGVlcCAuZHgtYnV0dG9uLW1vZGUtY29udGFpbmVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICBib3JkZXItY29sb3I6ICNkZGQgIWltcG9ydGFudDtcbiAgY29sb3I6ICMxNDVkYjYgIWltcG9ydGFudDtcbiAgYm94LXNoYWRvdzogMCA0cHggMTJweCAwIHJnYmEoMTIzLCAxNDksIDE1MywgMC4zNikgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDcwMCAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAgLmR4LWJ1dHRvbi1tb2RlLWNvbnRhaW5lZCAuZHgtaWNvbiB7XG4gIGNvbG9yOiAjMTQ1ZGI2ICFpbXBvcnRhbnQ7XG59XG5cbi5hbnQtaW5wdXQge1xuICBmb250LWZlYXR1cmUtc2V0dGluZ3M6IFwidG51bVwiO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogNHB4IDExcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDEuNTcxNTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2Q5ZDlkOTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbn1cblxuLmFudC1zZWxlY3Qtc2luZ2xlOm5vdCguYW50LXNlbGVjdC1jdXN0b21pemUtaW5wdXQpIC5hbnQtc2VsZWN0LXNlbGVjdG9yIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZDlkOWQ5O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMzJweDtcbiAgcGFkZGluZzogMCAxMXB4O1xufVxuXG4uc3Rwb3B0cyB7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBoZWlnaHQ6IDQyOHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4uc3Rwb3B0aGRyIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6IGJsYWNrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmNmY2O1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5zdHBvcHRzbWFpbmhuZyB7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6ICNjNjI4MjggIWltcG9ydGFudDtcbn1cblxuLmlucHRMYmwge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjM2IzZDNkO1xuICBtYXJnaW4tYm90dG9tOiAycHg7XG59XG5cbm56LXNlbGVjdCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZnJtcncge1xuICBtYXJnaW4tYm90dG9tOiA4cHggIWltcG9ydGFudDtcbn1cblxuLmFkZERlc0NycHRuIHtcbiAgbWFyZ2luOiAwcHggYXV0bztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubW51cHJmbE1yZ24ge1xuICBtYXJnaW4tYm90dG9tOiA4cHggIWltcG9ydGFudDtcbn1cblxuLmFudC1mb3JtLWl0ZW0ge1xuICBtYXJnaW46IDAgMCA0cHggIWltcG9ydGFudDtcbn1cblxuLmlucGYge1xuICBjb2xvcjogYmx1ZTtcbn1cblxuLnVwbG9hZEltZ2cge1xuICBoZWlnaHQ6IDUwcHg7XG4gIHBhZGRpbmctbGVmdDogNTBweDtcbiAgcGFkZGluZy1yaWdodDogNTBweDtcbiAgbWFyZ2luOiAyMHB4IGF1dG87XG4gIGJvcmRlcjogMnB4IGRhc2hlZCAjMUM4QURCO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBmb250LXNpemU6IDI3cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNmZiZmY7XG4gIGNvbG9yOiAjMTE2NWE0O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnJnaHRicmRyIHtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggZGFzaGVkICNiOGI4Yjg7XG59XG5cbi5idG1icmRyIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCAjYjhiOGI4O1xufVxuXG4uZmlsdGVyLWNhcmQge1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBib3gtc2hhZG93OiAwIDFweCAxNXB4IDFweCByZ2JhKDY5LCA2NSwgNzgsIDAuMDgpICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDhweCAzM3B4IDE2cHggMzNweDtcbn1cblxuLnNsd21mdG91cGxvYWRmb3JtIG56LWZvcm0tbGFiZWwge1xuICBwYWRkaW5nLWxlZnQ6IDJweCAhaW1wb3J0YW50O1xufVxuXG4ucG5kbmdhcHJ2YWxDcmQge1xuICBib3gtc2hhZG93OiAwIDFweCAxNXB4IDFweCByZ2JhKDY5LCA2NSwgNzgsIDAuMDgpICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDExcHggMTRweDtcbiAgbWFyZ2luOiAxMHB4IDBweDtcbiAgYm9yZGVyOiAycHggc29saWQgI2JmZTdiZjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBiYWNrZ3JvdW5kOiBhenVyZTtcbn1cbi5wbmRuZ2FwcnZhbENyZCAucF9hcHJ2bF9jbnQge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiAjMzM0MTU1O1xufVxuLnBuZG5nYXBydmFsQ3JkIC5wX2FwcnZsX25tIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4uYXZ0cl9jbHMge1xuICB3aWR0aDogMTEwcHg7XG4gIGhlaWdodDogMTE1cHg7XG4gIGxpbmUtaGVpZ2h0OiAxMTBweDtcbiAgZm9udC1zaXplOiA0OHB4O1xufVxuXG4ucmlnaHRpbWcgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5jc3RtaGVpZ2h0IHtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBib3JkZXItdG9wOiAycHggc29saWQgIzI1NTk0Njtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNTAwcHgpIGFuZCAobWF4LXdpZHRoOiAyNTAwcHgpIHtcbiAgLnJpZ2h0aW1nIGltZyB7XG4gICAgd2lkdGg6IDcwJTtcbiAgfVxuICAuY3N0bWhlaWdodCB7XG4gICAgaGVpZ2h0OiA0MjVweDtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIH1cbiAgLnBuZG5nYXBydmFsQ3JkIHtcbiAgICBib3gtc2hhZG93OiAwIDFweCAxNXB4IDFweCByZ2JhKDY5LCA2NSwgNzgsIDAuMDgpICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZzogMjBweCAxNHB4O1xuICAgIG1hcmdpbjogMTBweCAwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2JmZTdiZjtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIH1cbn1cbi5ib3FfbWVudSB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59Il19 */"] });


/***/ }),

/***/ 43667:
/*!*************************************************************************************************************!*\
  !*** ./src/app/apps/work_management/tendering/boq/specification-catalog/specification-catalog.component.ts ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpecificationCatalogComponent": () => (/* binding */ SpecificationCatalogComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _boq_navbar_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../boq-navbar/home.component */ 64188);


class SpecificationCatalogComponent {
    constructor() { }
    ngOnInit() {
    }
}
SpecificationCatalogComponent.ɵfac = function SpecificationCatalogComponent_Factory(t) { return new (t || SpecificationCatalogComponent)(); };
SpecificationCatalogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SpecificationCatalogComponent, selectors: [["app-specification-catalog"]], decls: 1, vars: 0, template: function SpecificationCatalogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-home");
    } }, dependencies: [_boq_navbar_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent], styles: [".boq_menu[_ngcontent-%COMP%] {\n  border-radius: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNwZWNpZmljYXRpb24tY2F0YWxvZy5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXFN1bnJpc2UlMjBUZWNoXFxhbXNfZnJvbnRlbmRcXHNyY1xcYXBwXFxhcHBzXFx3b3JrX21hbmFnZW1lbnRcXHRlbmRlcmluZ1xcYm9xXFxzcGVjaWZpY2F0aW9uLWNhdGFsb2dcXHNwZWNpZmljYXRpb24tY2F0YWxvZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0FDQ0oiLCJmaWxlIjoic3BlY2lmaWNhdGlvbi1jYXRhbG9nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJvcV9tZW51e1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICB9IiwiLmJvcV9tZW51IHtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn0iXX0= */"] });


/***/ }),

/***/ 2313:
/*!***********************************************************************************!*\
  !*** ./src/app/apps/work_management/tendering/boq/template/template.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TemplateComponent": () => (/* binding */ TemplateComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _boq_navbar_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../boq-navbar/home.component */ 64188);


class TemplateComponent {
    constructor() { }
    ngOnInit() {
    }
}
TemplateComponent.ɵfac = function TemplateComponent_Factory(t) { return new (t || TemplateComponent)(); };
TemplateComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TemplateComponent, selectors: [["app-template"]], decls: 1, vars: 0, template: function TemplateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-home");
    } }, dependencies: [_boq_navbar_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent], styles: [".boq_menu[_ngcontent-%COMP%] {\n  border-radius: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlbXBsYXRlLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcU3VucmlzZSUyMFRlY2hcXGFtc19mcm9udGVuZFxcc3JjXFxhcHBcXGFwcHNcXHdvcmtfbWFuYWdlbWVudFxcdGVuZGVyaW5nXFxib3FcXHRlbXBsYXRlXFx0ZW1wbGF0ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0FDQ0oiLCJmaWxlIjoidGVtcGxhdGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm9xX21lbnV7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIH0iLCIuYm9xX21lbnUge1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufSJdfQ== */"] });


/***/ }),

/***/ 91170:
/*!***********************************************************************************!*\
  !*** ./node_modules/devextreme-angular/fesm2015/devextreme-angular-ui-tooltip.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DxTooltipComponent": () => (/* binding */ DxTooltipComponent),
/* harmony export */   "DxTooltipModule": () => (/* binding */ DxTooltipModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var devextreme_ui_tooltip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! devextreme/ui/tooltip */ 52397);
/* harmony import */ var devextreme_angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! devextreme-angular/core */ 46209);
/* harmony import */ var devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! devextreme-angular/ui/nested */ 18237);








/*!
 * devextreme-angular
 * Version: 22.1.6
 * Build date: Tue Oct 18 2022
 *
 * Copyright (c) 2012 - 2022 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-angular
 */

const _c0 = ["*"];
/**
 * The Tooltip UI component displays a tooltip for a specified element on the page.

 */

class DxTooltipComponent extends devextreme_angular_core__WEBPACK_IMPORTED_MODULE_1__.DxComponent {
  constructor(elementRef, ngZone, templateHost, _watcherHelper, optionHost, transferState, platformId) {
    super(elementRef, ngZone, templateHost, _watcherHelper, transferState, platformId);

    this._createEventEmitters([{
      subscribe: 'contentReady',
      emit: 'onContentReady'
    }, {
      subscribe: 'disposing',
      emit: 'onDisposing'
    }, {
      subscribe: 'hidden',
      emit: 'onHidden'
    }, {
      subscribe: 'hiding',
      emit: 'onHiding'
    }, {
      subscribe: 'initialized',
      emit: 'onInitialized'
    }, {
      subscribe: 'optionChanged',
      emit: 'onOptionChanged'
    }, {
      subscribe: 'showing',
      emit: 'onShowing'
    }, {
      subscribe: 'shown',
      emit: 'onShown'
    }, {
      emit: 'animationChange'
    }, {
      emit: 'closeOnOutsideClickChange'
    }, {
      emit: 'containerChange'
    }, {
      emit: 'contentTemplateChange'
    }, {
      emit: 'copyRootClassesToWrapperChange'
    }, {
      emit: 'deferRenderingChange'
    }, {
      emit: 'disabledChange'
    }, {
      emit: 'elementAttrChange'
    }, {
      emit: 'heightChange'
    }, {
      emit: 'hideEventChange'
    }, {
      emit: 'hideOnOutsideClickChange'
    }, {
      emit: 'hideOnParentScrollChange'
    }, {
      emit: 'hintChange'
    }, {
      emit: 'hoverStateEnabledChange'
    }, {
      emit: 'maxHeightChange'
    }, {
      emit: 'maxWidthChange'
    }, {
      emit: 'minHeightChange'
    }, {
      emit: 'minWidthChange'
    }, {
      emit: 'positionChange'
    }, {
      emit: 'rtlEnabledChange'
    }, {
      emit: 'shadingChange'
    }, {
      emit: 'shadingColorChange'
    }, {
      emit: 'showEventChange'
    }, {
      emit: 'targetChange'
    }, {
      emit: 'visibleChange'
    }, {
      emit: 'widthChange'
    }, {
      emit: 'wrapperAttrChange'
    }]);

    optionHost.setHost(this);
  }
  /**
   * Configures UI component visibility animations. This object contains two fields: show and hide.
  
   */


  get animation() {
    return this._getOption('animation');
  }

  set animation(value) {
    this._setOption('animation', value);
  }
  /**
   * Specifies whether to close the UI component if a user clicks outside the popover window or outside the target element.
  
   * @deprecated Use the hideOnOutsideClick option instead.
  
   */


  get closeOnOutsideClick() {
    return this._getOption('closeOnOutsideClick');
  }

  set closeOnOutsideClick(value) {
    this._setOption('closeOnOutsideClick', value);
  }
  /**
   * Specifies the container in which to render the UI component.
  
   */


  get container() {
    return this._getOption('container');
  }

  set container(value) {
    this._setOption('container', value);
  }
  /**
   * Specifies a custom template for the UI component content.
  
   */


  get contentTemplate() {
    return this._getOption('contentTemplate');
  }

  set contentTemplate(value) {
    this._setOption('contentTemplate', value);
  }
  /**
   * Copies your custom CSS classes from the root element to the wrapper element.
  
   * @deprecated Use the wrapperAttr property instead.
  
   */


  get copyRootClassesToWrapper() {
    return this._getOption('copyRootClassesToWrapper');
  }

  set copyRootClassesToWrapper(value) {
    this._setOption('copyRootClassesToWrapper', value);
  }
  /**
   * Specifies whether to render the UI component&apos;s content when it is displayed. If false, the content is rendered immediately.
  
   */


  get deferRendering() {
    return this._getOption('deferRendering');
  }

  set deferRendering(value) {
    this._setOption('deferRendering', value);
  }
  /**
   * Specifies whether the UI component responds to user interaction.
  
   */


  get disabled() {
    return this._getOption('disabled');
  }

  set disabled(value) {
    this._setOption('disabled', value);
  }
  /**
   * Specifies the global attributes to be attached to the UI component&apos;s container element.
  
   * @deprecated Use the wrapperAttr option instead.
  
   */


  get elementAttr() {
    return this._getOption('elementAttr');
  }

  set elementAttr(value) {
    this._setOption('elementAttr', value);
  }
  /**
   * Specifies the UI component&apos;s height.
  
   */


  get height() {
    return this._getOption('height');
  }

  set height(value) {
    this._setOption('height', value);
  }
  /**
   * Specifies properties of popover hiding. Ignored if the shading property is set to true.
  
   */


  get hideEvent() {
    return this._getOption('hideEvent');
  }

  set hideEvent(value) {
    this._setOption('hideEvent', value);
  }
  /**
   * Specifies whether to hide the UI component if a user clicks outside the popover window or outside the target element.
  
   */


  get hideOnOutsideClick() {
    return this._getOption('hideOnOutsideClick');
  }

  set hideOnOutsideClick(value) {
    this._setOption('hideOnOutsideClick', value);
  }
  /**
   * Specifies whether to hide the widget when users scroll one of its parent elements.
  
   */


  get hideOnParentScroll() {
    return this._getOption('hideOnParentScroll');
  }

  set hideOnParentScroll(value) {
    this._setOption('hideOnParentScroll', value);
  }
  /**
   * Specifies text for a hint that appears when a user pauses on the UI component.
  
   */


  get hint() {
    return this._getOption('hint');
  }

  set hint(value) {
    this._setOption('hint', value);
  }
  /**
   * Specifies whether the UI component changes its state when a user pauses on it.
  
   */


  get hoverStateEnabled() {
    return this._getOption('hoverStateEnabled');
  }

  set hoverStateEnabled(value) {
    this._setOption('hoverStateEnabled', value);
  }
  /**
   * Specifies the maximum height the UI component can reach while resizing.
  
   */


  get maxHeight() {
    return this._getOption('maxHeight');
  }

  set maxHeight(value) {
    this._setOption('maxHeight', value);
  }
  /**
   * Specifies the maximum width the UI component can reach while resizing.
  
   */


  get maxWidth() {
    return this._getOption('maxWidth');
  }

  set maxWidth(value) {
    this._setOption('maxWidth', value);
  }
  /**
   * Specifies the minimum height the UI component can reach while resizing.
  
   */


  get minHeight() {
    return this._getOption('minHeight');
  }

  set minHeight(value) {
    this._setOption('minHeight', value);
  }
  /**
   * Specifies the minimum width the UI component can reach while resizing.
  
   */


  get minWidth() {
    return this._getOption('minWidth');
  }

  set minWidth(value) {
    this._setOption('minWidth', value);
  }
  /**
   * An object defining UI component positioning properties.
  
   */


  get position() {
    return this._getOption('position');
  }

  set position(value) {
    this._setOption('position', value);
  }
  /**
   * Switches the UI component to a right-to-left representation.
  
   */


  get rtlEnabled() {
    return this._getOption('rtlEnabled');
  }

  set rtlEnabled(value) {
    this._setOption('rtlEnabled', value);
  }
  /**
   * Specifies whether to shade the background when the UI component is active.
  
   */


  get shading() {
    return this._getOption('shading');
  }

  set shading(value) {
    this._setOption('shading', value);
  }
  /**
   * Specifies the shading color. Applies only if shading is enabled.
  
   */


  get shadingColor() {
    return this._getOption('shadingColor');
  }

  set shadingColor(value) {
    this._setOption('shadingColor', value);
  }
  /**
   * Specifies properties for displaying the UI component.
  
   */


  get showEvent() {
    return this._getOption('showEvent');
  }

  set showEvent(value) {
    this._setOption('showEvent', value);
  }
  /**
   * Specifies the element against which to position the widget.
  
   */


  get target() {
    return this._getOption('target');
  }

  set target(value) {
    this._setOption('target', value);
  }
  /**
   * A Boolean value specifying whether or not the UI component is visible.
  
   */


  get visible() {
    return this._getOption('visible');
  }

  set visible(value) {
    this._setOption('visible', value);
  }
  /**
   * Specifies the UI component&apos;s width.
  
   */


  get width() {
    return this._getOption('width');
  }

  set width(value) {
    this._setOption('width', value);
  }
  /**
   * Specifies the global attributes for the UI component&apos;s wrapper element.
  
   */


  get wrapperAttr() {
    return this._getOption('wrapperAttr');
  }

  set wrapperAttr(value) {
    this._setOption('wrapperAttr', value);
  }

  _createInstance(element, options) {
    return new devextreme_ui_tooltip__WEBPACK_IMPORTED_MODULE_0__["default"](element, options);
  }

  ngOnDestroy() {
    this._destroyWidget();
  }

}
/** @nocollapse */


DxTooltipComponent.ɵfac = function DxTooltipComponent_Factory(t) {
  return new (t || DxTooltipComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](devextreme_angular_core__WEBPACK_IMPORTED_MODULE_1__.DxTemplateHost), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](devextreme_angular_core__WEBPACK_IMPORTED_MODULE_1__.WatcherHelper), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](devextreme_angular_core__WEBPACK_IMPORTED_MODULE_1__.NestedOptionHost), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.TransferState), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.PLATFORM_ID));
};
/** @nocollapse */


DxTooltipComponent.ɵcmp =
/** @pureOrBreakMyCode */
_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: DxTooltipComponent,
  selectors: [["dx-tooltip"]],
  inputs: {
    animation: "animation",
    closeOnOutsideClick: "closeOnOutsideClick",
    container: "container",
    contentTemplate: "contentTemplate",
    copyRootClassesToWrapper: "copyRootClassesToWrapper",
    deferRendering: "deferRendering",
    disabled: "disabled",
    elementAttr: "elementAttr",
    height: "height",
    hideEvent: "hideEvent",
    hideOnOutsideClick: "hideOnOutsideClick",
    hideOnParentScroll: "hideOnParentScroll",
    hint: "hint",
    hoverStateEnabled: "hoverStateEnabled",
    maxHeight: "maxHeight",
    maxWidth: "maxWidth",
    minHeight: "minHeight",
    minWidth: "minWidth",
    position: "position",
    rtlEnabled: "rtlEnabled",
    shading: "shading",
    shadingColor: "shadingColor",
    showEvent: "showEvent",
    target: "target",
    visible: "visible",
    width: "width",
    wrapperAttr: "wrapperAttr"
  },
  outputs: {
    onContentReady: "onContentReady",
    onDisposing: "onDisposing",
    onHidden: "onHidden",
    onHiding: "onHiding",
    onInitialized: "onInitialized",
    onOptionChanged: "onOptionChanged",
    onShowing: "onShowing",
    onShown: "onShown",
    animationChange: "animationChange",
    closeOnOutsideClickChange: "closeOnOutsideClickChange",
    containerChange: "containerChange",
    contentTemplateChange: "contentTemplateChange",
    copyRootClassesToWrapperChange: "copyRootClassesToWrapperChange",
    deferRenderingChange: "deferRenderingChange",
    disabledChange: "disabledChange",
    elementAttrChange: "elementAttrChange",
    heightChange: "heightChange",
    hideEventChange: "hideEventChange",
    hideOnOutsideClickChange: "hideOnOutsideClickChange",
    hideOnParentScrollChange: "hideOnParentScrollChange",
    hintChange: "hintChange",
    hoverStateEnabledChange: "hoverStateEnabledChange",
    maxHeightChange: "maxHeightChange",
    maxWidthChange: "maxWidthChange",
    minHeightChange: "minHeightChange",
    minWidthChange: "minWidthChange",
    positionChange: "positionChange",
    rtlEnabledChange: "rtlEnabledChange",
    shadingChange: "shadingChange",
    shadingColorChange: "shadingColorChange",
    showEventChange: "showEventChange",
    targetChange: "targetChange",
    visibleChange: "visibleChange",
    widthChange: "widthChange",
    wrapperAttrChange: "wrapperAttrChange"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([devextreme_angular_core__WEBPACK_IMPORTED_MODULE_1__.DxTemplateHost, devextreme_angular_core__WEBPACK_IMPORTED_MODULE_1__.WatcherHelper, devextreme_angular_core__WEBPACK_IMPORTED_MODULE_1__.NestedOptionHost]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]],
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function DxTooltipComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](0);
    }
  },
  encapsulation: 2
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](DxTooltipComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component,
    args: [{
      selector: 'dx-tooltip',
      template: '<ng-content></ng-content>',
      providers: [devextreme_angular_core__WEBPACK_IMPORTED_MODULE_1__.DxTemplateHost, devextreme_angular_core__WEBPACK_IMPORTED_MODULE_1__.WatcherHelper, devextreme_angular_core__WEBPACK_IMPORTED_MODULE_1__.NestedOptionHost]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone
    }, {
      type: devextreme_angular_core__WEBPACK_IMPORTED_MODULE_1__.DxTemplateHost
    }, {
      type: devextreme_angular_core__WEBPACK_IMPORTED_MODULE_1__.WatcherHelper
    }, {
      type: devextreme_angular_core__WEBPACK_IMPORTED_MODULE_1__.NestedOptionHost
    }, {
      type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.TransferState
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Inject,
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_2__.PLATFORM_ID]
      }]
    }];
  }, {
    animation: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    closeOnOutsideClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    container: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    contentTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    copyRootClassesToWrapper: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    deferRendering: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    elementAttr: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    height: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    hideEvent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    hideOnOutsideClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    hideOnParentScroll: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    hint: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    hoverStateEnabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    maxHeight: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    maxWidth: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    minHeight: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    minWidth: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    position: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    rtlEnabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    shading: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    shadingColor: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    showEvent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    target: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    visible: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    width: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    wrapperAttr: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    onContentReady: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
    }],
    onDisposing: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
    }],
    onHidden: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
    }],
    onHiding: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
    }],
    onInitialized: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
    }],
    onOptionChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
    }],
    onShowing: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
    }],
    onShown: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
    }],
    animationChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
    }],
    closeOnOutsideClickChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
    }],
    containerChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
    }],
    contentTemplateChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
    }],
    copyRootClassesToWrapperChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
    }],
    deferRenderingChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
    }],
    disabledChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
    }],
    elementAttrChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
    }],
    heightChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
    }],
    hideEventChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
    }],
    hideOnOutsideClickChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
    }],
    hideOnParentScrollChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
    }],
    hintChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
    }],
    hoverStateEnabledChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
    }],
    maxHeightChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
    }],
    maxWidthChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
    }],
    minHeightChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
    }],
    minWidthChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
    }],
    positionChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
    }],
    rtlEnabledChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
    }],
    shadingChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
    }],
    shadingColorChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
    }],
    showEventChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
    }],
    targetChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
    }],
    visibleChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
    }],
    widthChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
    }],
    wrapperAttrChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
    }]
  });
})();

class DxTooltipModule {}
/** @nocollapse */


DxTooltipModule.ɵfac = function DxTooltipModule_Factory(t) {
  return new (t || DxTooltipModule)();
};
/** @nocollapse */


DxTooltipModule.ɵmod =
/** @pureOrBreakMyCode */
_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: DxTooltipModule
});
/** @nocollapse */

DxTooltipModule.ɵinj =
/** @pureOrBreakMyCode */
_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [[devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_4__.DxoAnimationModule, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_4__.DxoHideModule, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_4__.DxoFromModule, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_4__.DxoPositionModule, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_4__.DxoAtModule, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_4__.DxoBoundaryOffsetModule, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_4__.DxoCollisionModule, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_4__.DxoMyModule, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_4__.DxoOffsetModule, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_4__.DxoToModule, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_4__.DxoShowModule, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_4__.DxoHideEventModule, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_4__.DxoShowEventModule, devextreme_angular_core__WEBPACK_IMPORTED_MODULE_1__.DxIntegrationModule, devextreme_angular_core__WEBPACK_IMPORTED_MODULE_1__.DxTemplateModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.BrowserTransferStateModule], devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_4__.DxoAnimationModule, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_4__.DxoHideModule, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_4__.DxoFromModule, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_4__.DxoPositionModule, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_4__.DxoAtModule, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_4__.DxoBoundaryOffsetModule, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_4__.DxoCollisionModule, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_4__.DxoMyModule, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_4__.DxoOffsetModule, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_4__.DxoToModule, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_4__.DxoShowModule, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_4__.DxoHideEventModule, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_4__.DxoShowEventModule, devextreme_angular_core__WEBPACK_IMPORTED_MODULE_1__.DxTemplateModule]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](DxTooltipModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule,
    args: [{
      imports: [devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_4__.DxoAnimationModule, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_4__.DxoHideModule, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_4__.DxoFromModule, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_4__.DxoPositionModule, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_4__.DxoAtModule, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_4__.DxoBoundaryOffsetModule, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_4__.DxoCollisionModule, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_4__.DxoMyModule, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_4__.DxoOffsetModule, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_4__.DxoToModule, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_4__.DxoShowModule, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_4__.DxoHideEventModule, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_4__.DxoShowEventModule, devextreme_angular_core__WEBPACK_IMPORTED_MODULE_1__.DxIntegrationModule, devextreme_angular_core__WEBPACK_IMPORTED_MODULE_1__.DxTemplateModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.BrowserTransferStateModule],
      declarations: [DxTooltipComponent],
      exports: [DxTooltipComponent, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_4__.DxoAnimationModule, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_4__.DxoHideModule, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_4__.DxoFromModule, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_4__.DxoPositionModule, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_4__.DxoAtModule, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_4__.DxoBoundaryOffsetModule, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_4__.DxoCollisionModule, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_4__.DxoMyModule, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_4__.DxoOffsetModule, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_4__.DxoToModule, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_4__.DxoShowModule, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_4__.DxoHideEventModule, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_4__.DxoShowEventModule, devextreme_angular_core__WEBPACK_IMPORTED_MODULE_1__.DxTemplateModule]
    }]
  }], null, null);
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](DxTooltipModule, {
    declarations: [DxTooltipComponent],
    imports: [devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_4__.DxoAnimationModule, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_4__.DxoHideModule, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_4__.DxoFromModule, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_4__.DxoPositionModule, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_4__.DxoAtModule, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_4__.DxoBoundaryOffsetModule, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_4__.DxoCollisionModule, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_4__.DxoMyModule, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_4__.DxoOffsetModule, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_4__.DxoToModule, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_4__.DxoShowModule, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_4__.DxoHideEventModule, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_4__.DxoShowEventModule, devextreme_angular_core__WEBPACK_IMPORTED_MODULE_1__.DxIntegrationModule, devextreme_angular_core__WEBPACK_IMPORTED_MODULE_1__.DxTemplateModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.BrowserTransferStateModule],
    exports: [DxTooltipComponent, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_4__.DxoAnimationModule, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_4__.DxoHideModule, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_4__.DxoFromModule, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_4__.DxoPositionModule, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_4__.DxoAtModule, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_4__.DxoBoundaryOffsetModule, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_4__.DxoCollisionModule, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_4__.DxoMyModule, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_4__.DxoOffsetModule, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_4__.DxoToModule, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_4__.DxoShowModule, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_4__.DxoHideEventModule, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_4__.DxoShowEventModule, devextreme_angular_core__WEBPACK_IMPORTED_MODULE_1__.DxTemplateModule]
  });
})();
/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ 52397:
/*!***************************************************!*\
  !*** ./node_modules/devextreme/esm/ui/tooltip.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _tooltip_tooltip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tooltip/tooltip */ 35400);
/**
 * DevExtreme (esm/ui/tooltip.js)
 * Version: 22.1.6
 * Build date: Tue Oct 18 2022
 *
 * Copyright (c) 2012 - 2022 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_tooltip_tooltip__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ 35400:
/*!***********************************************************!*\
  !*** ./node_modules/devextreme/esm/ui/tooltip/tooltip.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _core_renderer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/renderer */ 82545);
/* harmony import */ var _core_guid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/guid */ 53898);
/* harmony import */ var _core_component_registrator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/component_registrator */ 5102);
/* harmony import */ var _core_utils_extend__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/utils/extend */ 91967);
/* harmony import */ var _popover__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../popover */ 50787);
/* harmony import */ var _core_utils_type__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/utils/type */ 29166);
/**
 * DevExtreme (esm/ui/tooltip/tooltip.js)
 * Version: 22.1.6
 * Build date: Tue Oct 18 2022
 *
 * Copyright (c) 2012 - 2022 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */





var TOOLTIP_CLASS = "dx-tooltip";
var TOOLTIP_WRAPPER_CLASS = "dx-tooltip-wrapper";

var Tooltip = _popover__WEBPACK_IMPORTED_MODULE_4__["default"].inherit({
  _getDefaultOptions: function () {
    return (0,_core_utils_extend__WEBPACK_IMPORTED_MODULE_3__.extend)(this.callBase(), {
      toolbarItems: [],
      showCloseButton: false,
      showTitle: false,
      title: null,
      titleTemplate: null,
      onTitleRendered: null,
      bottomTemplate: null,
      propagateOutsideClick: true
    });
  },
  _render: function () {
    this.$element().addClass(TOOLTIP_CLASS);
    this.$wrapper().addClass(TOOLTIP_WRAPPER_CLASS);
    this.callBase();
  },
  _renderContent: function () {
    this.callBase();
    this._contentId = "dx-" + new _core_guid__WEBPACK_IMPORTED_MODULE_1__["default"]();
    this.$overlayContent().attr({
      id: this._contentId,
      role: "tooltip"
    });

    this._toggleAriaDescription(true);
  },
  _toggleAriaDescription: function (showing) {
    var $target = (0,_core_renderer__WEBPACK_IMPORTED_MODULE_0__["default"])(this.option("target"));
    var label = showing ? this._contentId : void 0;

    if (!(0,_core_utils_type__WEBPACK_IMPORTED_MODULE_5__.isWindow)($target.get(0))) {
      this.setAria("describedby", label, $target);
    }
  }
});
(0,_core_component_registrator__WEBPACK_IMPORTED_MODULE_2__["default"])("dxTooltip", Tooltip);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tooltip);

/***/ })

}]);
//# sourceMappingURL=src_app_apps_work_management_tendering_boq_boq_module_ts.js.map