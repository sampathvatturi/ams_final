"use strict";
(self["webpackChunkenlink"] = self["webpackChunkenlink"] || []).push([["src_app_apps_work_management_work_management_module_ts"],{

/***/ 55718:
/*!****************************************************************!*\
  !*** ./src/app/apps/work_management/work.management.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WorkMangementModule": () => (/* binding */ WorkMangementModule)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/shared.module */ 44466);
/* harmony import */ var src_app_providers_http_http_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/providers/http/http.interceptor */ 34477);
/* harmony import */ var _work_management_routing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./work.management.routing */ 11224);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);






class WorkMangementModule {
}
WorkMangementModule.ɵfac = function WorkMangementModule_Factory(t) { return new (t || WorkMangementModule)(); };
WorkMangementModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: WorkMangementModule });
WorkMangementModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ providers: [
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HTTP_INTERCEPTORS, useClass: src_app_providers_http_http_interceptor__WEBPACK_IMPORTED_MODULE_1__.HttpConfigInterceptor, multi: true },
    ], imports: [src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
        _work_management_routing__WEBPACK_IMPORTED_MODULE_2__.WorkMangmntRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](WorkMangementModule, { imports: [src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
        _work_management_routing__WEBPACK_IMPORTED_MODULE_2__.WorkMangmntRoutingModule] }); })();


/***/ }),

/***/ 11224:
/*!*****************************************************************!*\
  !*** ./src/app/apps/work_management/work.management.routing.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WorkMangmntRoutingModule": () => (/* binding */ WorkMangmntRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);



const routes = [
    { path: 'master-data', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_apps_work_management_master_data_mng_master_data_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./master_data_mng/master.data.module */ 43637)).then(m => m.MasterDataMngmntModule) },
    { path: 'dashboard', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_apps_work_management_dashboard_dashboard_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./dashboard/dashboard.module */ 89218)).then(m => m.DashboardModule) },
    { path: 'tickets', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_devextreme-angular_fesm2015_devextreme-angular-ui-button_js-node_modules-af0b1e"), __webpack_require__.e("src_app_apps_work_management_tickets_tickets_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./tickets/tickets.module */ 22764)).then(m => m.TicketModule) },
    { path: 'grants', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_devextreme-angular_fesm2015_devextreme-angular-ui-button_js-node_modules-af0b1e"), __webpack_require__.e("default-src_app_shared_text-editor_text-editor_module_ts-src_app_shared_upload-attachments_up-2fab69"), __webpack_require__.e("src_app_apps_work_management_grant_grant_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./grant/grant.module */ 67426)).then(m => m.GrantModule) },
    { path: 'proposals', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_devextreme-angular_fesm2015_devextreme-angular-ui-button_js-node_modules-af0b1e"), __webpack_require__.e("src_app_apps_work_management_proposals_proposals_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./proposals/proposals.module */ 8530)).then(m => m.ProposalsModule) },
    { path: 'proceedings', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_devextreme-angular_fesm2015_devextreme-angular-ui-button_js-node_modules-af0b1e"), __webpack_require__.e("default-src_app_shared_text-editor_text-editor_module_ts-src_app_shared_upload-attachments_up-2fab69"), __webpack_require__.e("src_app_apps_work_management_proceedings_proceedings_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./proceedings/proceedings.module */ 42041)).then(m => m.ProceedingModule) },
    { path: 'admin-sanction', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_devextreme-angular_fesm2015_devextreme-angular-ui-button_js-node_modules-af0b1e"), __webpack_require__.e("src_app_apps_work_management_admin_sanctions_admin_sanction_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./admin_sanctions/admin_sanction.module */ 33113)).then(m => m.AdminSanctionModule) },
    { path: 'tech-sanction', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_devextreme-angular_fesm2015_devextreme-angular-ui-button_js-node_modules-af0b1e"), __webpack_require__.e("src_app_apps_work_management_technical_sanction_technical_sanction_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./technical_sanction/technical_sanction.module */ 52395)).then(m => m.TechnicalSanctionModule) },
    { path: 'tendering', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_devextreme-angular_fesm2015_devextreme-angular-ui-button_js-node_modules-af0b1e"), __webpack_require__.e("src_app_apps_work_management_tendering_tendering_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./tendering/tendering.module */ 94707)).then(m => m.TenderingModule) },
    { path: 'aggrement', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_devextreme-angular_fesm2015_devextreme-angular-ui-button_js-node_modules-af0b1e"), __webpack_require__.e("src_app_apps_work_management_aggrement_aggrement_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./aggrement/aggrement.module */ 97629)).then(m => m.AggrementModule) },
    { path: 'contractors', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_devextreme-angular_fesm2015_devextreme-angular-ui-button_js-node_modules-af0b1e"), __webpack_require__.e("src_app_apps_work_management_contractors_management_contractors_management_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./contractors_management/contractors_management.module */ 26779)).then(m => m.ContractorsManagementModule) },
    { path: 'measurement', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_devextreme-angular_fesm2015_devextreme-angular-ui-button_js-node_modules-af0b1e"), __webpack_require__.e("src_app_apps_work_management_work_measurement_work_measurement_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./work_measurement/work_measurement.module */ 3182)).then(m => m.WorkMeasurementModule) },
    { path: 'cases', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_devextreme-angular_fesm2015_devextreme-angular-ui-button_js-node_modules-af0b1e"), __webpack_require__.e("src_app_apps_work_management_cases_and_clearance_cases_and_clearance_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./cases_and_clearance/cases_and_clearance.module */ 19088)).then(m => m.CasesAndClearanceModule) },
    { path: 'completion', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_devextreme-angular_fesm2015_devextreme-angular-ui-button_js-node_modules-af0b1e"), __webpack_require__.e("src_app_apps_work_management_completion_completion_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./completion/completion.module */ 30057)).then(m => m.CompletionModule) },
    { path: 'inspection', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_devextreme-angular_fesm2015_devextreme-angular-ui-button_js-node_modules-af0b1e"), __webpack_require__.e("src_app_apps_work_management_inspection_audit_inspection_audit_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./inspection_audit/inspection_audit.module */ 3221)).then(m => m.InspectionAuditModule) },
    { path: 'payments', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_devextreme-angular_fesm2015_devextreme-angular-ui-button_js-node_modules-af0b1e"), __webpack_require__.e("src_app_apps_work_management_payments_payments_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./payments/payments.module */ 28059)).then(m => m.PaymentsModule) },
    { path: 'miscellaneous', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_devextreme-angular_fesm2015_devextreme-angular-ui-button_js-node_modules-af0b1e"), __webpack_require__.e("src_app_apps_work_management_miscellaneous_miscellaneous_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./miscellaneous/miscellaneous.module */ 21555)).then(m => m.MiscellaneousModule) },
    { path: 'bulk-load', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_devextreme-angular_fesm2015_devextreme-angular-ui-button_js-node_modules-af0b1e"), __webpack_require__.e("src_app_apps_work_management_bulk_uploads_bulk_uploads_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./bulk_uploads/bulk_uploads.module */ 81209)).then(m => m.BulkUploadModule) },
    { path: 'vendor', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_devextreme-angular_fesm2015_devextreme-angular-ui-button_js-node_modules-af0b1e"), __webpack_require__.e("src_app_apps_work_management_vendor_vendor_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./vendor/vendor.module */ 84478)).then(m => m.VendorModule) },
];
class WorkMangmntRoutingModule {
}
WorkMangmntRoutingModule.ɵfac = function WorkMangmntRoutingModule_Factory(t) { return new (t || WorkMangmntRoutingModule)(); };
WorkMangmntRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: WorkMangmntRoutingModule });
WorkMangmntRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](WorkMangmntRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_apps_work_management_work_management_module_ts.js.map