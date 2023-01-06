"use strict";
(self["webpackChunkenlink"] = self["webpackChunkenlink"] || []).push([["src_app_apps_work_management_dashboard_dashboard_module_ts"],{

/***/ 84457:
/*!***************************************************************************************************!*\
  !*** ./src/app/apps/work_management/dashboard/category-dashboard/category-dashboard.component.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoryDashboardComponent": () => (/* binding */ CategoryDashboardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_shared_services_apps_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/apps.service */ 53538);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/icon */ 5655);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 16495);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/grid */ 70031);







const _c0 = function (a0) { return { "background-color": a0 }; };
function CategoryDashboardComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CategoryDashboardComponent_div_11_Template_div_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const c_r1 = restoredCtx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.openTcktLstPage(c_r1)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 11)(2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const c_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSpan", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](4, _c0, c_r1.icn_bg_clr_nm));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](c_r1.ttl_cnt);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", c_r1.tckt_ctgry_nm, " ");
} }
class CategoryDashboardComponent {
    constructor(apiSrv, router) {
        this.apiSrv = apiSrv;
        this.router = router;
        this.apiSrv.getLgnUsrDtls().then((res) => {
            console.log("USR DTLS ", res);
            if (res) {
                this.usrdtls = res;
                this.getDshbrdCunts();
            }
        });
    }
    ngOnInit() {
    }
    getDshbrdCunts() {
        console.log("get gettcktCounts");
        const rte = 'admin/category_dashboard/counts/' + this.usrdtls.usr_id;
        this.apiSrv.get(rte).subscribe(res => {
            console.log("COUNT RES ", res);
            if (res['status'] === 200) {
                this.gettcktCounts = res['data'];
                console.log(this.gettcktCounts);
            }
            else {
            }
        }, (err) => {
        });
    }
    openTcktLstPage(c) {
        let objToSend = {
            queryParams: {
                tckt_ctgry_id: c.tckt_ctgry_id,
                tckt_ctgry_nm: c.tckt_ctgry_nm
            }
        };
        this.router.navigate(['/internal/work-mng/tickets/list'], {
            state: { tcktDtls: objToSend }
        });
    }
}
CategoryDashboardComponent.ɵfac = function CategoryDashboardComponent_Factory(t) { return new (t || CategoryDashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_services_apps_service__WEBPACK_IMPORTED_MODULE_0__.AppsService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router)); };
CategoryDashboardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CategoryDashboardComponent, selectors: [["app-category-dashboard"]], decls: 12, vars: 2, consts: [[1, "page-header"], [1, "row", "align-items-md-center"], [1, "col-md-6"], [1, "media", "m-v-10"], ["nz-icon", "", "nzType", "file", "nzTheme", "twotone", 1, "header-icon"], [1, "media-body", "m-l-15", "header-border"], [1, "mb-0", "header-label"], [1, "filter-card", "slwmftouploadform"], ["nz-row", "", 1, "btmbrdr", 3, "nzGutter"], ["nz-col", "", "class", "rghtbrdr crsr-pntr", 3, "nzSpan", "click", 4, "ngFor", "ngForOf"], ["nz-col", "", 1, "rghtbrdr", "crsr-pntr", 3, "nzSpan", "click"], [1, "pndngaprvalCrd", 3, "ngStyle"], [1, "p_aprvl_cnt"], [1, "p_aprvl_nm"]], template: function CategoryDashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5)(7, "h6", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 7)(10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, CategoryDashboardComponent_div_11_Template, 6, 6, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzGutter", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.gettcktCounts);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgStyle, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_4__.NzIconDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_5__["ɵNzTransitionPatchDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__.NzColDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__.NzRowDirective], styles: [".filter-card[_ngcontent-%COMP%] {\n  border-radius: 0;\n  box-shadow: 0 1px 15px 1px rgba(69, 65, 78, 0.08) !important;\n  background-color: #fff;\n  padding: 8px 33px 16px 33px;\n  margin: 0.5% 1%;\n}\n\n.pndngaprvalCrd[_ngcontent-%COMP%] {\n  text-align: center;\n  box-shadow: 0 1px 15px 1px rgba(69, 65, 78, 0.08) !important;\n  padding: 20px 14px;\n  margin: 10px 0px;\n}\n\n.pndngaprvalCrd[_ngcontent-%COMP%]   .p_aprvl_cnt[_ngcontent-%COMP%] {\n  font-size: 25px;\n  font-weight: 500;\n}\n\n.pndngaprvalCrd[_ngcontent-%COMP%]   .p_aprvl_nm[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 500;\n}\n\n.pndngaprvalCrd[_ngcontent-%COMP%]:nth-child(1) {\n  background: #fd8e35;\n  border-radius: 4px;\n  color: white;\n}\n\n.pndngaprvalCrd[_ngcontent-%COMP%]:nth-child(2) {\n  border-radius: 4px;\n  color: white;\n  background: #506af0 !important;\n}\n\n.pndngaprvalCrd[_ngcontent-%COMP%]:nth-child(3) {\n  background: #56e0b7;\n  border-radius: 4px;\n  color: white;\n}\n\n.pndngaprvalCrd[_ngcontent-%COMP%]:nth-child(4) {\n  background: #39c3fb;\n  border-radius: 4px;\n  color: white;\n}\n\n.crsr-pntr[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhdGVnb3J5LWRhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcU3VucmlzZSUyMFRlY2hcXGFtc19mcm9udGVuZFxcc3JjXFxhcHBcXGFwcHNcXHdvcmtfbWFuYWdlbWVudFxcZGFzaGJvYXJkXFxjYXRlZ29yeS1kYXNoYm9hcmRcXGNhdGVnb3J5LWRhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0EsNERBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsZUFBQTtBQ0NKOztBRENFO0VBQ0Usa0JBQUE7RUFDQSw0REFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNFSjs7QURESTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQ0dOOztBRERJO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FDR047O0FEQ0U7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQ0VKOztBREFFO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsOEJBQUE7QUNHSjs7QUREQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FDSUE7O0FEQUE7RUFDSSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQ0dKOztBREFBO0VBQ0UsZUFBQTtBQ0dGIiwiZmlsZSI6ImNhdGVnb3J5LWRhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5maWx0ZXItY2FyZCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgYm94LXNoYWRvdzogMCAxcHggMTVweCAxcHggcmdiYSg2OSw2NSw3OCwuMDgpIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBwYWRkaW5nOiA4cHggMzNweCAxNnB4IDMzcHg7XHJcbiAgICBtYXJnaW46IDAuNSUgMSU7XHJcbiAgfVxyXG4gIC5wbmRuZ2FwcnZhbENyZHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDE1cHggMXB4IHJnYig2OSA2NSA3OCAvIDglKSAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZzogMjBweCAxNHB4O1xyXG4gICAgbWFyZ2luOiAxMHB4IDBweDtcclxuICAgIC5wX2FwcnZsX2NudHtcclxuICAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgfVxyXG4gICAgLnBfYXBydmxfbm17XHJcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5wbmRuZ2FwcnZhbENyZDpudGgtY2hpbGQoMSl7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmQ4ZTM1O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuICAucG5kbmdhcHJ2YWxDcmQ6bnRoLWNoaWxkKDIpe1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZDogIzUwNmFmMCFpbXBvcnRhbnQ7XHJcbn1cclxuLnBuZG5nYXBydmFsQ3JkOm50aC1jaGlsZCgzKXtcclxuYmFja2dyb3VuZDogIzU2ZTBiNztcclxuYm9yZGVyLXJhZGl1czogNHB4O1xyXG5jb2xvcjogd2hpdGU7XHJcbn1cclxuICAgXHJcbiAgXHJcbi5wbmRuZ2FwcnZhbENyZDpudGgtY2hpbGQoNCl7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMzljM2ZiO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgY29sb3I6IHdoaXRlOyAgIFxyXG59XHJcblxyXG4uY3Jzci1wbnRye1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufSIsIi5maWx0ZXItY2FyZCB7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDE1cHggMXB4IHJnYmEoNjksIDY1LCA3OCwgMC4wOCkgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogOHB4IDMzcHggMTZweCAzM3B4O1xuICBtYXJnaW46IDAuNSUgMSU7XG59XG5cbi5wbmRuZ2FwcnZhbENyZCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm94LXNoYWRvdzogMCAxcHggMTVweCAxcHggcmdiYSg2OSwgNjUsIDc4LCAwLjA4KSAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAyMHB4IDE0cHg7XG4gIG1hcmdpbjogMTBweCAwcHg7XG59XG4ucG5kbmdhcHJ2YWxDcmQgLnBfYXBydmxfY250IHtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuLnBuZG5nYXBydmFsQ3JkIC5wX2FwcnZsX25tIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4ucG5kbmdhcHJ2YWxDcmQ6bnRoLWNoaWxkKDEpIHtcbiAgYmFja2dyb3VuZDogI2ZkOGUzNTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5wbmRuZ2FwcnZhbENyZDpudGgtY2hpbGQoMikge1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZDogIzUwNmFmMCAhaW1wb3J0YW50O1xufVxuXG4ucG5kbmdhcHJ2YWxDcmQ6bnRoLWNoaWxkKDMpIHtcbiAgYmFja2dyb3VuZDogIzU2ZTBiNztcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5wbmRuZ2FwcnZhbENyZDpudGgtY2hpbGQoNCkge1xuICBiYWNrZ3JvdW5kOiAjMzljM2ZiO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmNyc3ItcG50ciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn0iXX0= */"] });


/***/ }),

/***/ 89218:
/*!********************************************************************!*\
  !*** ./src/app/apps/work_management/dashboard/dashboard.module.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardModule": () => (/* binding */ DashboardModule)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/shared.module */ 44466);
/* harmony import */ var src_app_providers_http_http_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/providers/http/http.interceptor */ 34477);
/* harmony import */ var _dashboard_routing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard.routing */ 13884);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/grid */ 70031);
/* harmony import */ var _category_dashboard_category_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./category-dashboard/category-dashboard.component */ 84457);
/* harmony import */ var _state_dashboard_state_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./state-dashboard/state-dashboard.component */ 16014);
/* harmony import */ var _district_dashboard_district_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./district-dashboard/district-dashboard.component */ 54591);
/* harmony import */ var _pending_action_dashboard_pending_action_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pending-action-dashboard/pending-action-dashboard.component */ 38091);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);











class DashboardModule {
}
DashboardModule.ɵfac = function DashboardModule_Factory(t) { return new (t || DashboardModule)(); };
DashboardModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: DashboardModule });
DashboardModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ providers: [
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HTTP_INTERCEPTORS, useClass: src_app_providers_http_http_interceptor__WEBPACK_IMPORTED_MODULE_1__.HttpConfigInterceptor, multi: true },
    ], imports: [src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule,
        _dashboard_routing__WEBPACK_IMPORTED_MODULE_2__.DashboardRoutingModule,
        ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_10__.NzGridModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](DashboardModule, { declarations: [_category_dashboard_category_dashboard_component__WEBPACK_IMPORTED_MODULE_3__.CategoryDashboardComponent,
        _state_dashboard_state_dashboard_component__WEBPACK_IMPORTED_MODULE_4__.StateDashboardComponent,
        _district_dashboard_district_dashboard_component__WEBPACK_IMPORTED_MODULE_5__.DistrictDashboardComponent,
        _pending_action_dashboard_pending_action_dashboard_component__WEBPACK_IMPORTED_MODULE_6__.PendingActionDashboardComponent], imports: [src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule,
        _dashboard_routing__WEBPACK_IMPORTED_MODULE_2__.DashboardRoutingModule,
        ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_10__.NzGridModule] }); })();


/***/ }),

/***/ 13884:
/*!*********************************************************************!*\
  !*** ./src/app/apps/work_management/dashboard/dashboard.routing.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardRoutingModule": () => (/* binding */ DashboardRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _district_dashboard_district_dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./district-dashboard/district-dashboard.component */ 54591);
/* harmony import */ var _pending_action_dashboard_pending_action_dashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pending-action-dashboard/pending-action-dashboard.component */ 38091);
/* harmony import */ var _state_dashboard_state_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./state-dashboard/state-dashboard.component */ 16014);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);






const routes = [
    { path: '', redirectTo: 'state-dashboard' },
    { path: 'state-dashboard', component: _state_dashboard_state_dashboard_component__WEBPACK_IMPORTED_MODULE_2__.StateDashboardComponent },
    { path: 'district-dashboard', component: _district_dashboard_district_dashboard_component__WEBPACK_IMPORTED_MODULE_0__.DistrictDashboardComponent },
    { path: 'pending-action', component: _pending_action_dashboard_pending_action_dashboard_component__WEBPACK_IMPORTED_MODULE_1__.PendingActionDashboardComponent },
];
class DashboardRoutingModule {
}
DashboardRoutingModule.ɵfac = function DashboardRoutingModule_Factory(t) { return new (t || DashboardRoutingModule)(); };
DashboardRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: DashboardRoutingModule });
DashboardRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](DashboardRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] }); })();


/***/ }),

/***/ 54591:
/*!***************************************************************************************************!*\
  !*** ./src/app/apps/work_management/dashboard/district-dashboard/district-dashboard.component.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DistrictDashboardComponent": () => (/* binding */ DistrictDashboardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

class DistrictDashboardComponent {
    constructor() { }
    ngOnInit() {
    }
}
DistrictDashboardComponent.ɵfac = function DistrictDashboardComponent_Factory(t) { return new (t || DistrictDashboardComponent)(); };
DistrictDashboardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DistrictDashboardComponent, selectors: [["app-district-dashboard"]], decls: 2, vars: 0, template: function DistrictDashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "district-dashboard works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkaXN0cmljdC1kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 38091:
/*!***************************************************************************************************************!*\
  !*** ./src/app/apps/work_management/dashboard/pending-action-dashboard/pending-action-dashboard.component.ts ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PendingActionDashboardComponent": () => (/* binding */ PendingActionDashboardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

class PendingActionDashboardComponent {
    constructor() { }
    ngOnInit() {
    }
}
PendingActionDashboardComponent.ɵfac = function PendingActionDashboardComponent_Factory(t) { return new (t || PendingActionDashboardComponent)(); };
PendingActionDashboardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PendingActionDashboardComponent, selectors: [["app-pending-action-dashboard"]], decls: 2, vars: 0, template: function PendingActionDashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "pending-action-dashboard works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwZW5kaW5nLWFjdGlvbi1kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 16014:
/*!*********************************************************************************************!*\
  !*** ./src/app/apps/work_management/dashboard/state-dashboard/state-dashboard.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StateDashboardComponent": () => (/* binding */ StateDashboardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

class StateDashboardComponent {
    constructor() { }
    ngOnInit() {
    }
}
StateDashboardComponent.ɵfac = function StateDashboardComponent_Factory(t) { return new (t || StateDashboardComponent)(); };
StateDashboardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StateDashboardComponent, selectors: [["app-state-dashboard"]], decls: 2, vars: 0, template: function StateDashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "state-dashboard works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdGF0ZS1kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_apps_work_management_dashboard_dashboard_module_ts.js.map