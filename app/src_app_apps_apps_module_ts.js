"use strict";
(self["webpackChunkenlink"] = self["webpackChunkenlink"] || []).push([["src_app_apps_apps_module_ts"],{

/***/ 79188:
/*!*********************************************!*\
  !*** ./src/app/apps/apps-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppsRoutingModule": () => (/* binding */ AppsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);



const routes = [
    { path: 'dashboard', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_dashboard_dashboard_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../dashboard/dashboard.module */ 34814)).then(m => m.DashboardModule) },
    { path: 'help', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_devextreme-angular_fesm2015_devextreme-angular-ui-button_js-node_modules-4eb8ed"), __webpack_require__.e("src_app_apps_help-docs_help-docs_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./help-docs/help-docs.module */ 54839)).then(m => m.HelpDocsModule) },
    { path: 'ams', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_devextreme-angular_fesm2015_devextreme-angular-ui-button_js-node_modules-4eb8ed"), __webpack_require__.e("default-src_app_shared_services_auth_md5hash_service_ts"), __webpack_require__.e("src_app_apps_ams_ams_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../apps/ams/ams.module */ 54443)).then(m => m.AmsModule) },
    { path: '**', redirectTo: 'ams' },
];
class AppsRoutingModule {
}
AppsRoutingModule.ɵfac = function AppsRoutingModule_Factory(t) { return new (t || AppsRoutingModule)(); };
AppsRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppsRoutingModule });
AppsRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ }),

/***/ 99269:
/*!*************************************!*\
  !*** ./src/app/apps/apps.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppsModule": () => (/* binding */ AppsModule)
/* harmony export */ });
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/shared.module */ 44466);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _apps_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./apps-routing.module */ 79188);
/* harmony import */ var ngx_quill__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-quill */ 63115);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _providers_http_http_interceptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../providers/http/http.interceptor */ 34477);
/* harmony import */ var _shared_services_theme_constant_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/services/theme-constant.service */ 87341);
/* harmony import */ var _shared_services_table_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/services/table.service */ 28272);
/* harmony import */ var _shared_services_apps_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/services/apps.service */ 53538);
/* harmony import */ var _shared_services_transfer_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/services/transfer.service */ 15329);
/* harmony import */ var _shared_common_ng_antd_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/common/ng-antd.module */ 98334);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);













class AppsModule {
}
AppsModule.ɵfac = function AppsModule_Factory(t) { return new (t || AppsModule)(); };
AppsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: AppsModule });
AppsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ providers: [
        _shared_services_theme_constant_service__WEBPACK_IMPORTED_MODULE_3__.ThemeConstantService,
        _shared_services_apps_service__WEBPACK_IMPORTED_MODULE_5__.AppsService,
        _shared_services_transfer_service__WEBPACK_IMPORTED_MODULE_6__.TransferService,
        _shared_services_table_service__WEBPACK_IMPORTED_MODULE_4__.TableService,
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HTTP_INTERCEPTORS, useClass: _providers_http_http_interceptor__WEBPACK_IMPORTED_MODULE_2__.HttpConfigInterceptor, multi: true },
    ], imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule,
        _apps_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppsRoutingModule,
        ngx_quill__WEBPACK_IMPORTED_MODULE_11__.QuillModule.forRoot(),
        _shared_common_ng_antd_module__WEBPACK_IMPORTED_MODULE_7__.NgAntdModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AppsModule, { imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule,
        _apps_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppsRoutingModule, ngx_quill__WEBPACK_IMPORTED_MODULE_11__.QuillModule, _shared_common_ng_antd_module__WEBPACK_IMPORTED_MODULE_7__.NgAntdModule] }); })();


/***/ }),

/***/ 34477:
/*!****************************************************!*\
  !*** ./src/app/providers/http/http.interceptor.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HttpConfigInterceptor": () => (/* binding */ HttpConfigInterceptor),
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 66587);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 47418);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);





// import { Globals } from '../../services/global.service';
const environment = {
    // origin: 'http://demo.dreamstep.info/apiv1',
    // origin: 'http://localhost:4901/apiv1'
    // origin: 'http://wms.dreamstep.info:9002/apiv1'
    origin: 'http://localhost:8080'
};
class HttpConfigInterceptor {
    constructor(router) {
        this.router = router;
        console.log("HttpConfigInterceptor loaded");
    }
    intercept(req, next) {
        console.log("In intercept");
        const token = localStorage.getItem('x-access-token') || '';
        let url1 = req.url.indexOf("http") > -1 ? req.url : environment.origin + req.url;
        req = req.clone({ url: url1 });
        if (!req.headers.has('Content-Type')) {
            req = req.clone({ headers: req.headers.set('Content-Type', 'application/json') });
        }
        req = req.clone({ headers: req.headers.set('Accept', 'application/json') });
        req = req.clone({ withCredentials: true });
        if (token) {
            req = req.clone({ headers: req.headers.set('x-access-token', token) });
            req = req.clone({ headers: req.headers.set('Cache-Control', 'no-cache') });
            req = req.clone({ headers: req.headers.set('Pragma', 'no-cache') });
        }
        return next.handle(req).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)((event) => {
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpResponse) {
                if (event.headers.get('x-access-token')) {
                    localStorage.setItem('x-access-token', event.headers.get('x-access-token'));
                }
                // console.log(event)
                if (event.status == 200)
                    if (event.body.status == 404) {
                        this.accessDenied(event.body.message);
                    }
            }
            return event;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)((error) => {
            if (error.status == 406 || error.status == 403) {
                localStorage.clear();
                console.log(this.router.url);
                if (!(this.router.url === '/internal' || this.router.url === '/')) {
                    this.sessionError(error.error.message);
                    this.router.navigate(['/'], { replaceUrl: true });
                }
            }
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(error);
        }));
    }
    accessDenied(message) {
        //  this.message.create('error', `${message}`);
    }
    sessionError(message) {
        // const modal: NzModalRef = this.modal.error({
        //     nzTitle: `Please login again.`,
        //     nzContent: `${message}`,
        //     nzMaskClosable: false,
        //     nzClosable: false,
        //     nzFooter: [
        //         {
        //             label: 'Ok',
        //             shape: 'round',
        //             onClick: () => {
        //                 modal.destroy()
        //             }
        //         }
        //     ]
        // });
    }
}
HttpConfigInterceptor.ɵfac = function HttpConfigInterceptor_Factory(t) { return new (t || HttpConfigInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router)); };
HttpConfigInterceptor.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: HttpConfigInterceptor, factory: HttpConfigInterceptor.ɵfac });


/***/ }),

/***/ 28272:
/*!**************************************************!*\
  !*** ./src/app/shared/services/table.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TableService": () => (/* binding */ TableService)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);


class TableService {
    deepCopy(object) {
        return JSON.parse(JSON.stringify(object));
    }
    /**
     * sort array via single
     * @param sortAttribute {key: property of the object, value: 'ascend' or 'descend'}
     * @param inputData
     */
    sort(sortAttribute, inputData) {
        const dataArr = this.deepCopy(inputData);
        if (sortAttribute.key === '' || sortAttribute.value === null) {
            return dataArr;
        }
        let outputDataList = dataArr.sort((a, b) => {
            const isAsc = sortAttribute.value === 'ascend';
            switch (sortAttribute.key) {
                case sortAttribute.key:
                    return this.compare(typeof a[sortAttribute.key] !== "string" ? a[sortAttribute.key] : a[sortAttribute.key].toUpperCase(), typeof b[sortAttribute.key] !== "string" ? b[sortAttribute.key] : b[sortAttribute.key].toUpperCase(), isAsc);
                default:
                    return 0;
            }
        });
        return outputDataList;
    }
    /**
     * Wild card search on all property of the object
     * @param input
     * @param inputData
     */
    search(input, inputData) {
        const searchText = (item) => {
            for (let key in item) {
                if (item[key] == null) {
                    continue;
                }
                if (typeof item[key] == 'number' && item[key] != 0) {
                    let date = (0,_angular_common__WEBPACK_IMPORTED_MODULE_0__.formatDate)(item[key], 'yyyy-MM-dd HH:mm:ss', 'en');
                    if (date.indexOf(input.toString()) !== -1) {
                        return true;
                    }
                    continue;
                }
                if (item[key].toString().toUpperCase().indexOf(input.toString().toUpperCase()) !== -1) {
                    return true;
                }
            }
        };
        inputData = inputData.filter(value => searchText(value));
        return inputData;
    }
    /**
     * if isAsc is true
     * a > b    = 1
     * a === b  = 0
     * a < b    = -1
     *
     * if isAsc is false
     * a > b    = -1
     * a === b  = 0
     * a < b    = 1
     *
     * @param a
     * @param b
     * @param isAsc
     */
    compare(a, b, isAsc) {
        // null value is - (dash)
        if (!a)
            a = '-';
        if (!b)
            b = '-';
        if (a === b)
            return 0;
        return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
    }
}
TableService.ɵfac = function TableService_Factory(t) { return new (t || TableService)(); };
TableService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: TableService, factory: TableService.ɵfac });


/***/ }),

/***/ 15329:
/*!*****************************************************!*\
  !*** ./src/app/shared/services/transfer.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TransferService": () => (/* binding */ TransferService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 60124);


class TransferService {
    constructor(router) {
        this.router = router;
    }
    setSupportCallData(data) {
        TransferService.ivrData = data;
    }
    getSupportCallData() {
        return TransferService.ivrData;
    }
    setData(data) {
        TransferService.data = data;
    }
    getData() {
        return TransferService.data;
    }
    setLoclData(Key, data) {
        localStorage.setItem(Key, JSON.stringify(data));
    }
    getLoclData(Key) {
        var data;
        data = localStorage.getItem(Key);
        return JSON.parse(data);
    }
    ClearLocalData(key) {
        localStorage.removeItem(key);
    }
    clearData() {
        TransferService.data = undefined;
    }
}
TransferService.ɵfac = function TransferService_Factory(t) { return new (t || TransferService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router)); };
TransferService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TransferService, factory: TransferService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 63115:
/*!*******************************************************!*\
  !*** ./node_modules/ngx-quill/fesm2020/ngx-quill.mjs ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QUILL_CONFIG_TOKEN": () => (/* binding */ QUILL_CONFIG_TOKEN),
/* harmony export */   "QuillEditorBase": () => (/* binding */ QuillEditorBase),
/* harmony export */   "QuillEditorComponent": () => (/* binding */ QuillEditorComponent),
/* harmony export */   "QuillModule": () => (/* binding */ QuillModule),
/* harmony export */   "QuillService": () => (/* binding */ QuillService),
/* harmony export */   "QuillViewComponent": () => (/* binding */ QuillViewComponent),
/* harmony export */   "QuillViewHTMLComponent": () => (/* binding */ QuillViewHTMLComponent),
/* harmony export */   "defaultModules": () => (/* binding */ defaultModules)
/* harmony export */ });
/* harmony import */ var C_Users_ADMIN_Documents_GitHub_ams_frontend_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 83918);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 52160);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 32425);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 36312);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 79128);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 80823);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);











function QuillEditorComponent_ng_container_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 2);
  }
}

function QuillEditorComponent_ng_container_0_pre_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "pre", 2);
  }
}

function QuillEditorComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, QuillEditorComponent_ng_container_0_div_1_Template, 1, 0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, QuillEditorComponent_ng_container_0_pre_2_Template, 1, 0, "pre", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r0.preserve);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.preserve);
  }
}

function QuillEditorComponent_ng_container_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 2);
  }
}

function QuillEditorComponent_ng_container_2_pre_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "pre", 2);
  }
}

function QuillEditorComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, QuillEditorComponent_ng_container_2_div_1_Template, 1, 0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, QuillEditorComponent_ng_container_2_pre_2_Template, 1, 0, "pre", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r1.preserve);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.preserve);
  }
}

const _c0 = [[["", "quill-editor-toolbar", ""]]];
const _c1 = ["[quill-editor-toolbar]"];

function QuillViewComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 1);
  }
}

function QuillViewComponent_pre_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "pre", 1);
  }
}

const defaultModules = {
  toolbar: [['bold', 'italic', 'underline', 'strike'], ['blockquote', 'code-block'], [{
    header: 1
  }, {
    header: 2
  }], [{
    list: 'ordered'
  }, {
    list: 'bullet'
  }], [{
    script: 'sub'
  }, {
    script: 'super'
  }], [{
    indent: '-1'
  }, {
    indent: '+1'
  }], [{
    direction: 'rtl'
  }], [{
    size: ['small', false, 'large', 'huge']
  }], [{
    header: [1, 2, 3, 4, 5, 6, false]
  }], [{
    color: []
  }, {
    background: []
  }], [{
    font: []
  }], [{
    align: []
  }], ['clean'], ['link', 'image', 'video'] // link and image, video
  ]
};

const getFormat = (format, configFormat) => {
  const passedFormat = format || configFormat;
  return passedFormat || 'html';
};

const QUILL_CONFIG_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken('config', {
  providedIn: 'root',
  factory: () => ({
    modules: defaultModules
  })
});

class QuillService {
  constructor(injector, config) {
    var _this = this;

    this.config = config;
    this.quill$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.defer)( /*#__PURE__*/(0,C_Users_ADMIN_Documents_GitHub_ams_frontend_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this.Quill) {
        // Quill adds events listeners on import https://github.com/quilljs/quill/blob/develop/core/emitter.js#L8
        // We'd want to use the unpatched `addEventListener` method to have all event callbacks to be run outside of zone.
        // We don't know yet if the `zone.js` is used or not, just save the value to restore it back further.
        const maybePatchedAddEventListener = _this.document.addEventListener; // There're 2 types of Angular applications:
        // 1) zone-full (by default)
        // 2) zone-less
        // The developer can avoid importing the `zone.js` package and tells Angular that he/she is responsible for running
        // the change detection by himself. This is done by "nooping" the zone through `CompilerOptions` when bootstrapping
        // the root module. We fallback to `document.addEventListener` if `__zone_symbol__addEventListener` is not defined,
        // this means the `zone.js` is not imported.
        // The `__zone_symbol__addEventListener` is basically a native DOM API, which is not patched by zone.js, thus not even going
        // through the `zone.js` task lifecycle. You can also access the native DOM API as follows `target[Zone.__symbol__('methodName')]`.
        // eslint-disable-next-line @typescript-eslint/dot-notation

        _this.document.addEventListener = _this.document['__zone_symbol__addEventListener'] || _this.document.addEventListener;
        const quillImport = yield __webpack_require__.e(/*! import() */ "node_modules_quill_dist_quill_js").then(__webpack_require__.t.bind(__webpack_require__, /*! quill */ 63786, 19));
        _this.document.addEventListener = maybePatchedAddEventListener;
        _this.Quill = quillImport.default ? quillImport.default : quillImport;
      } // Only register custom options and modules once


      _this.config.customOptions?.forEach(customOption => {
        const newCustomOption = _this.Quill.import(customOption.import);

        newCustomOption.whitelist = customOption.whitelist;

        _this.Quill.register(newCustomOption, true, _this.config.suppressGlobalRegisterWarning);
      });
      _this.config.customModules?.forEach(({
        implementation,
        path
      }) => {
        _this.Quill.register(path, implementation, _this.config.suppressGlobalRegisterWarning);
      });
      return _this.Quill;
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.shareReplay)({
      bufferSize: 1,
      refCount: true
    }));
    this.document = injector.get(_angular_common__WEBPACK_IMPORTED_MODULE_4__.DOCUMENT);

    if (!this.config) {
      this.config = {
        modules: defaultModules
      };
    }
  }

  getQuill() {
    return this.quill$;
  }

}

QuillService.ɵfac = function QuillService_Factory(t) {
  return new (t || QuillService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](QUILL_CONFIG_TOKEN, 8));
};

QuillService.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: QuillService,
  factory: QuillService.ɵfac,
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](QuillService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injector
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
        args: [QUILL_CONFIG_TOKEN]
      }]
    }];
  }, null);
})(); // eslint-disable-next-line @angular-eslint/directive-class-suffix


class QuillEditorBase {
  constructor(injector, elementRef, cd, domSanitizer, platformId, renderer, zone, service) {
    this.elementRef = elementRef;
    this.cd = cd;
    this.domSanitizer = domSanitizer;
    this.platformId = platformId;
    this.renderer = renderer;
    this.zone = zone;
    this.service = service;
    this.required = false;
    this.customToolbarPosition = 'top';
    this.styles = null;
    this.strict = true;
    this.customOptions = [];
    this.customModules = [];
    this.preserveWhitespace = false;
    this.trimOnValidation = false;
    this.compareValues = false;
    this.filterNull = false;
    /*
    https://github.com/KillerCodeMonkey/ngx-quill/issues/1257 - fix null value set
           provide default empty value
    by default null
           e.g. defaultEmptyValue="" - empty string
           <quill-editor
      defaultEmptyValue=""
      formControlName="message"
    ></quill-editor>
    */

    this.defaultEmptyValue = null;
    this.onEditorCreated = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.onEditorChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.onContentChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.onSelectionChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.onFocus = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.onBlur = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.disabled = false; // used to store initial value before ViewInit

    this.preserve = false;
    this.toolbarPosition = 'top';
    this.subscription = null;
    this.quillSubscription = null;

    this.valueGetter = (quillEditor, editorElement) => {
      let html = editorElement.querySelector('.ql-editor').innerHTML;

      if (html === '<p><br></p>' || html === '<div><br></div>') {
        html = this.defaultEmptyValue;
      }

      let modelValue = html;
      const format = getFormat(this.format, this.service.config.format);

      if (format === 'text') {
        modelValue = quillEditor.getText();
      } else if (format === 'object') {
        modelValue = quillEditor.getContents();
      } else if (format === 'json') {
        try {
          modelValue = JSON.stringify(quillEditor.getContents());
        } catch (e) {
          modelValue = quillEditor.getText();
        }
      }

      return modelValue;
    };

    this.valueSetter = (quillEditor, value) => {
      const format = getFormat(this.format, this.service.config.format);

      if (format === 'html') {
        const sanitize = [true, false].includes(this.sanitize) ? this.sanitize : this.service.config.sanitize || false;

        if (sanitize) {
          value = this.domSanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_1__.SecurityContext.HTML, value);
        }

        return quillEditor.clipboard.convert(value);
      } else if (format === 'json') {
        try {
          return JSON.parse(value);
        } catch (e) {
          return [{
            insert: value
          }];
        }
      }

      return value;
    };

    this.selectionChangeHandler = (range, oldRange, source) => {
      const shouldTriggerOnModelTouched = !range && !!this.onModelTouched; // only emit changes when there's any listener

      if (!this.onBlur.observers.length && !this.onFocus.observers.length && !this.onSelectionChanged.observers.length && !shouldTriggerOnModelTouched) {
        return;
      }

      this.zone.run(() => {
        if (range === null) {
          this.onBlur.emit({
            editor: this.quillEditor,
            source
          });
        } else if (oldRange === null) {
          this.onFocus.emit({
            editor: this.quillEditor,
            source
          });
        }

        this.onSelectionChanged.emit({
          editor: this.quillEditor,
          oldRange,
          range,
          source
        });

        if (shouldTriggerOnModelTouched) {
          this.onModelTouched();
        }

        this.cd.markForCheck();
      });
    };

    this.textChangeHandler = (delta, oldDelta, source) => {
      // only emit changes emitted by user interactions
      const text = this.quillEditor.getText();
      const content = this.quillEditor.getContents();
      let html = this.editorElem.querySelector('.ql-editor').innerHTML;

      if (html === '<p><br></p>' || html === '<div><br></div>') {
        html = this.defaultEmptyValue;
      }

      const trackChanges = this.trackChanges || this.service.config.trackChanges;
      const shouldTriggerOnModelChange = (source === 'user' || trackChanges && trackChanges === 'all') && !!this.onModelChange; // only emit changes when there's any listener

      if (!this.onContentChanged.observers.length && !shouldTriggerOnModelChange) {
        return;
      }

      this.zone.run(() => {
        if (shouldTriggerOnModelChange) {
          this.onModelChange(this.valueGetter(this.quillEditor, this.editorElem));
        }

        this.onContentChanged.emit({
          content,
          delta,
          editor: this.quillEditor,
          html,
          oldDelta,
          source,
          text
        });
        this.cd.markForCheck();
      });
    }; // eslint-disable-next-line max-len


    this.editorChangeHandler = (event, current, old, source) => {
      // only emit changes when there's any listener
      if (!this.onEditorChanged.observers.length) {
        return;
      } // only emit changes emitted by user interactions


      if (event === 'text-change') {
        const text = this.quillEditor.getText();
        const content = this.quillEditor.getContents();
        let html = this.editorElem.querySelector('.ql-editor').innerHTML;

        if (html === '<p><br></p>' || html === '<div><br></div>') {
          html = this.defaultEmptyValue;
        }

        this.zone.run(() => {
          this.onEditorChanged.emit({
            content,
            delta: current,
            editor: this.quillEditor,
            event,
            html,
            oldDelta: old,
            source,
            text
          });
          this.cd.markForCheck();
        });
      } else {
        this.zone.run(() => {
          this.onEditorChanged.emit({
            editor: this.quillEditor,
            event,
            oldRange: old,
            range: current,
            source
          });
          this.cd.markForCheck();
        });
      }
    };

    this.document = injector.get(_angular_common__WEBPACK_IMPORTED_MODULE_4__.DOCUMENT);
  }

  static normalizeClassNames(classes) {
    const classList = classes.trim().split(' ');
    return classList.reduce((prev, cur) => {
      const trimmed = cur.trim();

      if (trimmed) {
        prev.push(trimmed);
      }

      return prev;
    }, []);
  }

  ngOnInit() {
    this.preserve = this.preserveWhitespace;
    this.toolbarPosition = this.customToolbarPosition;
  }

  ngAfterViewInit() {
    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_4__.isPlatformServer)(this.platformId)) {
      return;
    } // The `quill-editor` component might be destroyed before the `quill` chunk is loaded and its code is executed
    // this will lead to runtime exceptions, since the code will be executed on DOM nodes that don't exist within the tree.
    // eslint-disable-next-line @typescript-eslint/naming-convention


    this.quillSubscription = this.service.getQuill().subscribe(Quill => {
      this.editorElem = this.elementRef.nativeElement.querySelector('[quill-editor-element]');
      const toolbarElem = this.elementRef.nativeElement.querySelector('[quill-editor-toolbar]');
      const modules = Object.assign({}, this.modules || this.service.config.modules);

      if (toolbarElem) {
        modules.toolbar = toolbarElem;
      } else if (modules.toolbar === undefined) {
        modules.toolbar = defaultModules.toolbar;
      }

      let placeholder = this.placeholder !== undefined ? this.placeholder : this.service.config.placeholder;

      if (placeholder === undefined) {
        placeholder = 'Insert text here ...';
      }

      if (this.styles) {
        Object.keys(this.styles).forEach(key => {
          this.renderer.setStyle(this.editorElem, key, this.styles[key]);
        });
      }

      if (this.classes) {
        this.addClasses(this.classes);
      }

      this.customOptions.forEach(customOption => {
        const newCustomOption = Quill.import(customOption.import);
        newCustomOption.whitelist = customOption.whitelist;
        Quill.register(newCustomOption, true);
      });
      this.customModules.forEach(({
        implementation,
        path
      }) => {
        Quill.register(path, implementation);
      });
      let bounds = this.bounds && this.bounds === 'self' ? this.editorElem : this.bounds;

      if (!bounds) {
        bounds = this.service.config.bounds ? this.service.config.bounds : this.document.body;
      }

      let debug = this.debug;

      if (!debug && debug !== false && this.service.config.debug) {
        debug = this.service.config.debug;
      }

      let readOnly = this.readOnly;

      if (!readOnly && this.readOnly !== false) {
        readOnly = this.service.config.readOnly !== undefined ? this.service.config.readOnly : false;
      }

      let defaultEmptyValue = this.defaultEmptyValue;

      if (this.service.config.hasOwnProperty('defaultEmptyValue')) {
        defaultEmptyValue = this.service.config.defaultEmptyValue;
      }

      let scrollingContainer = this.scrollingContainer;

      if (!scrollingContainer && this.scrollingContainer !== null) {
        scrollingContainer = this.service.config.scrollingContainer === null || this.service.config.scrollingContainer ? this.service.config.scrollingContainer : null;
      }

      let formats = this.formats;

      if (!formats && formats === undefined) {
        formats = this.service.config.formats ? [...this.service.config.formats] : this.service.config.formats === null ? null : undefined;
      }

      this.zone.runOutsideAngular(() => {
        this.quillEditor = new Quill(this.editorElem, {
          bounds,
          debug: debug,
          formats: formats,
          modules,
          placeholder,
          readOnly,
          defaultEmptyValue,
          scrollingContainer: scrollingContainer,
          strict: this.strict,
          theme: this.theme || (this.service.config.theme ? this.service.config.theme : 'snow')
        }); // Set optional link placeholder, Quill has no native API for it so using workaround

        if (this.linkPlaceholder) {
          const tooltip = this.quillEditor?.theme?.tooltip;
          const input = tooltip?.root?.querySelector('input[data-link]');

          if (input?.dataset) {
            input.dataset.link = this.linkPlaceholder;
          }
        }
      });

      if (this.content) {
        const format = getFormat(this.format, this.service.config.format);

        if (format === 'text') {
          this.quillEditor.setText(this.content, 'silent');
        } else {
          const newValue = this.valueSetter(this.quillEditor, this.content);
          this.quillEditor.setContents(newValue, 'silent');
        }

        this.quillEditor.getModule('history').clear();
      } // initialize disabled status based on this.disabled as default value


      this.setDisabledState();
      this.addQuillEventListeners(); // The `requestAnimationFrame` triggers change detection. There's no sense to invoke the `requestAnimationFrame` if anyone is
      // listening to the `onEditorCreated` event inside the template, for instance `<quill-view (onEditorCreated)="...">`.

      if (!this.onEditorCreated.observers.length && !this.onValidatorChanged) {
        return;
      } // The `requestAnimationFrame` will trigger change detection and `onEditorCreated` will also call `markDirty()`
      // internally, since Angular wraps template event listeners into `listener` instruction. We're using the `requestAnimationFrame`
      // to prevent the frame drop and avoid `ExpressionChangedAfterItHasBeenCheckedError` error.


      requestAnimationFrame(() => {
        if (this.onValidatorChanged) {
          this.onValidatorChanged();
        }

        this.onEditorCreated.emit(this.quillEditor);
      });
    });
  }

  ngOnDestroy() {
    this.dispose();
    this.quillSubscription?.unsubscribe();
    this.quillSubscription = null;
  }

  ngOnChanges(changes) {
    if (!this.quillEditor) {
      return;
    }
    /* eslint-disable @typescript-eslint/dot-notation */


    if (changes.readOnly) {
      this.quillEditor.enable(!changes.readOnly.currentValue);
    }

    if (changes.placeholder) {
      this.quillEditor.root.dataset.placeholder = changes.placeholder.currentValue;
    }

    if (changes.defaultEmptyValue) {
      this.quillEditor.root.dataset.defaultEmptyValue = changes.defaultEmptyValue.currentValue;
    }

    if (changes.styles) {
      const currentStyling = changes.styles.currentValue;
      const previousStyling = changes.styles.previousValue;

      if (previousStyling) {
        Object.keys(previousStyling).forEach(key => {
          this.renderer.removeStyle(this.editorElem, key);
        });
      }

      if (currentStyling) {
        Object.keys(currentStyling).forEach(key => {
          this.renderer.setStyle(this.editorElem, key, this.styles[key]);
        });
      }
    }

    if (changes.classes) {
      const currentClasses = changes.classes.currentValue;
      const previousClasses = changes.classes.previousValue;

      if (previousClasses) {
        this.removeClasses(previousClasses);
      }

      if (currentClasses) {
        this.addClasses(currentClasses);
      }
    } // We'd want to re-apply event listeners if the `debounceTime` binding changes to apply the
    // `debounceTime` operator or vice-versa remove it.


    if (changes.debounceTime) {
      this.addQuillEventListeners();
    }
    /* eslint-enable @typescript-eslint/dot-notation */

  }

  addClasses(classList) {
    QuillEditorBase.normalizeClassNames(classList).forEach(c => {
      this.renderer.addClass(this.editorElem, c);
    });
  }

  removeClasses(classList) {
    QuillEditorBase.normalizeClassNames(classList).forEach(c => {
      this.renderer.removeClass(this.editorElem, c);
    });
  }

  writeValue(currentValue) {
    // optional fix for https://github.com/angular/angular/issues/14988
    if (this.filterNull && currentValue === null) {
      return;
    }

    this.content = currentValue;

    if (!this.quillEditor) {
      return;
    }

    const format = getFormat(this.format, this.service.config.format);
    const newValue = this.valueSetter(this.quillEditor, currentValue);

    if (this.compareValues) {
      const currentEditorValue = this.quillEditor.getContents();

      if (JSON.stringify(currentEditorValue) === JSON.stringify(newValue)) {
        return;
      }
    }

    if (currentValue) {
      if (format === 'text') {
        this.quillEditor.setText(currentValue);
      } else {
        this.quillEditor.setContents(newValue);
      }

      return;
    }

    this.quillEditor.setText('');
  }

  setDisabledState(isDisabled = this.disabled) {
    // store initial value to set appropriate disabled status after ViewInit
    this.disabled = isDisabled;

    if (this.quillEditor) {
      if (isDisabled) {
        this.quillEditor.disable();
        this.renderer.setAttribute(this.elementRef.nativeElement, 'disabled', 'disabled');
      } else {
        if (!this.readOnly) {
          this.quillEditor.enable();
        }

        this.renderer.removeAttribute(this.elementRef.nativeElement, 'disabled');
      }
    }
  }

  registerOnChange(fn) {
    this.onModelChange = fn;
  }

  registerOnTouched(fn) {
    this.onModelTouched = fn;
  }

  registerOnValidatorChange(fn) {
    this.onValidatorChanged = fn;
  }

  validate() {
    if (!this.quillEditor) {
      return null;
    }

    const err = {};
    let valid = true;
    const text = this.quillEditor.getText(); // trim text if wanted + handle special case that an empty editor contains a new line

    const textLength = this.trimOnValidation ? text.trim().length : text.length === 1 && text.trim().length === 0 ? 0 : text.length - 1;
    const deltaOperations = this.quillEditor.getContents().ops;
    const onlyEmptyOperation = deltaOperations && deltaOperations.length === 1 && ['\n', ''].includes(deltaOperations[0].insert);

    if (this.minLength && textLength && textLength < this.minLength) {
      err.minLengthError = {
        given: textLength,
        minLength: this.minLength
      };
      valid = false;
    }

    if (this.maxLength && textLength > this.maxLength) {
      err.maxLengthError = {
        given: textLength,
        maxLength: this.maxLength
      };
      valid = false;
    }

    if (this.required && !textLength && onlyEmptyOperation) {
      err.requiredError = {
        empty: true
      };
      valid = false;
    }

    return valid ? null : err;
  }

  addQuillEventListeners() {
    this.dispose(); // We have to enter the `<root>` zone when adding event listeners, so `debounceTime` will spawn the
    // `AsyncAction` there w/o triggering change detections. We still re-enter the Angular's zone through
    // `zone.run` when we emit an event to the parent component.

    this.zone.runOutsideAngular(() => {
      this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subscription();
      this.subscription.add( // mark model as touched if editor lost focus
      (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.fromEvent)(this.quillEditor, 'selection-change').subscribe(([range, oldRange, source]) => {
        this.selectionChangeHandler(range, oldRange, source);
      })); // The `fromEvent` supports passing JQuery-style event targets, the editor has `on` and `off` methods which
      // will be invoked upon subscription and teardown.

      let textChange$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.fromEvent)(this.quillEditor, 'text-change');
      let editorChange$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.fromEvent)(this.quillEditor, 'editor-change');

      if (typeof this.debounceTime === 'number') {
        textChange$ = textChange$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.debounceTime)(this.debounceTime));
        editorChange$ = editorChange$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.debounceTime)(this.debounceTime));
      }

      this.subscription.add( // update model if text changes
      textChange$.subscribe(([delta, oldDelta, source]) => {
        this.textChangeHandler(delta, oldDelta, source);
      }));
      this.subscription.add( // triggered if selection or text changed
      editorChange$.subscribe(([event, current, old, source]) => {
        this.editorChangeHandler(event, current, old, source);
      }));
    });
  }

  dispose() {
    if (this.subscription !== null) {
      this.subscription.unsubscribe();
      this.subscription = null;
    }
  }

}

QuillEditorBase.ɵfac = function QuillEditorBase_Factory(t) {
  return new (t || QuillEditorBase)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.DomSanitizer), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](QuillService));
};

QuillEditorBase.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
  type: QuillEditorBase,
  inputs: {
    format: "format",
    theme: "theme",
    modules: "modules",
    debug: "debug",
    readOnly: "readOnly",
    placeholder: "placeholder",
    maxLength: "maxLength",
    minLength: "minLength",
    required: "required",
    formats: "formats",
    customToolbarPosition: "customToolbarPosition",
    sanitize: "sanitize",
    styles: "styles",
    strict: "strict",
    scrollingContainer: "scrollingContainer",
    bounds: "bounds",
    customOptions: "customOptions",
    customModules: "customModules",
    trackChanges: "trackChanges",
    preserveWhitespace: "preserveWhitespace",
    classes: "classes",
    trimOnValidation: "trimOnValidation",
    linkPlaceholder: "linkPlaceholder",
    compareValues: "compareValues",
    filterNull: "filterNull",
    debounceTime: "debounceTime",
    defaultEmptyValue: "defaultEmptyValue",
    valueGetter: "valueGetter",
    valueSetter: "valueSetter"
  },
  outputs: {
    onEditorCreated: "onEditorCreated",
    onEditorChanged: "onEditorChanged",
    onContentChanged: "onContentChanged",
    onSelectionChanged: "onSelectionChanged",
    onFocus: "onFocus",
    onBlur: "onBlur"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](QuillEditorBase, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injector
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef
    }, {
      type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.DomSanitizer
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID]
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Renderer2
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone
    }, {
      type: QuillService
    }];
  }, {
    format: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    theme: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    modules: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    debug: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    readOnly: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    placeholder: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    maxLength: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    minLength: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    required: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    formats: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    customToolbarPosition: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    sanitize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    styles: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    strict: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    scrollingContainer: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    bounds: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    customOptions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    customModules: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    trackChanges: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    preserveWhitespace: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    classes: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    trimOnValidation: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    linkPlaceholder: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    compareValues: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    filterNull: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    debounceTime: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    defaultEmptyValue: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    onEditorCreated: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    onEditorChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    onContentChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    onSelectionChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    onFocus: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    onBlur: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    valueGetter: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    valueSetter: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  });
})();

class QuillEditorComponent extends QuillEditorBase {
  constructor(injector, elementRef, cd, domSanitizer, platformId, renderer, zone, service) {
    super(injector, elementRef, cd, domSanitizer, platformId, renderer, zone, service);
  }

}

QuillEditorComponent.ɵfac = function QuillEditorComponent_Factory(t) {
  return new (t || QuillEditorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.DomSanitizer), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](QuillService));
};

QuillEditorComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: QuillEditorComponent,
  selectors: [["quill-editor"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
    multi: true,
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NG_VALUE_ACCESSOR,
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(() => QuillEditorComponent)
  }, {
    multi: true,
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NG_VALIDATORS,
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(() => QuillEditorComponent)
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
  ngContentSelectors: _c1,
  decls: 3,
  vars: 2,
  consts: [[4, "ngIf"], ["quill-editor-element", "", 4, "ngIf"], ["quill-editor-element", ""]],
  template: function QuillEditorComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"](_c0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, QuillEditorComponent_ng_container_0_Template, 3, 2, "ng-container", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, QuillEditorComponent_ng_container_2_Template, 3, 2, "ng-container", 0);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.toolbarPosition !== "top");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.toolbarPosition === "top");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf],
  styles: [":host{display:inline-block}\n"],
  encapsulation: 2
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](QuillEditorComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewEncapsulation.None,
      providers: [{
        multi: true,
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NG_VALUE_ACCESSOR,
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(() => QuillEditorComponent)
      }, {
        multi: true,
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NG_VALIDATORS,
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(() => QuillEditorComponent)
      }],
      selector: 'quill-editor',
      template: `
  <ng-container *ngIf="toolbarPosition !== 'top'">
    <div quill-editor-element *ngIf="!preserve"></div>
    <pre quill-editor-element *ngIf="preserve"></pre>
  </ng-container>
  <ng-content select="[quill-editor-toolbar]"></ng-content>
  <ng-container *ngIf="toolbarPosition === 'top'">
    <div quill-editor-element *ngIf="!preserve"></div>
    <pre quill-editor-element *ngIf="preserve"></pre>
  </ng-container>
`,
      styles: [`
    :host {
      display: inline-block;
    }
    `]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injector
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef]
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef]
      }]
    }, {
      type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.DomSanitizer,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
        args: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.DomSanitizer]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID]
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Renderer2,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__.Renderer2]
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone]
      }]
    }, {
      type: QuillService,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
        args: [QuillService]
      }]
    }];
  }, null);
})();

class QuillViewHTMLComponent {
  constructor(sanitizer, service) {
    this.sanitizer = sanitizer;
    this.service = service;
    this.content = '';
    this.innerHTML = '';
    this.themeClass = 'ql-snow';
  }

  ngOnChanges(changes) {
    if (changes.theme) {
      const theme = changes.theme.currentValue || (this.service.config.theme ? this.service.config.theme : 'snow');
      this.themeClass = `ql-${theme} ngx-quill-view-html`;
    } else if (!this.theme) {
      const theme = this.service.config.theme ? this.service.config.theme : 'snow';
      this.themeClass = `ql-${theme} ngx-quill-view-html`;
    }

    if (changes.content) {
      const content = changes.content.currentValue;
      const sanitize = [true, false].includes(this.sanitize) ? this.sanitize : this.service.config.sanitize || false;
      this.innerHTML = sanitize ? content : this.sanitizer.bypassSecurityTrustHtml(content);
    }
  }

}

QuillViewHTMLComponent.ɵfac = function QuillViewHTMLComponent_Factory(t) {
  return new (t || QuillViewHTMLComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.DomSanitizer), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](QuillService));
};

QuillViewHTMLComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: QuillViewHTMLComponent,
  selectors: [["quill-view-html"]],
  inputs: {
    content: "content",
    theme: "theme",
    sanitize: "sanitize"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
  decls: 2,
  vars: 2,
  consts: [[1, "ql-container", 3, "ngClass"], [1, "ql-editor", 3, "innerHTML"]],
  template: function QuillViewHTMLComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.themeClass);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", ctx.innerHTML, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass],
  styles: [".ql-container.ngx-quill-view-html{border:0}\n"],
  encapsulation: 2
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](QuillViewHTMLComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewEncapsulation.None,
      selector: 'quill-view-html',
      styles: [`
.ql-container.ngx-quill-view-html {
  border: 0;
}
`],
      template: `
  <div class="ql-container" [ngClass]="themeClass">
    <div class="ql-editor" [innerHTML]="innerHTML">
    </div>
  </div>
`
    }]
  }], function () {
    return [{
      type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.DomSanitizer,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
        args: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.DomSanitizer]
      }]
    }, {
      type: QuillService
    }];
  }, {
    content: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    theme: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    sanitize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  });
})();

class QuillViewComponent {
  constructor(elementRef, renderer, zone, service, domSanitizer, platformId) {
    this.elementRef = elementRef;
    this.renderer = renderer;
    this.zone = zone;
    this.service = service;
    this.domSanitizer = domSanitizer;
    this.platformId = platformId;
    this.strict = true;
    this.customModules = [];
    this.customOptions = [];
    this.preserveWhitespace = false;
    this.onEditorCreated = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.preserve = false;
    this.quillSubscription = null;

    this.valueSetter = (quillEditor, value) => {
      const format = getFormat(this.format, this.service.config.format);
      let content = value;

      if (format === 'text') {
        quillEditor.setText(content);
      } else {
        if (format === 'html') {
          const sanitize = [true, false].includes(this.sanitize) ? this.sanitize : this.service.config.sanitize || false;

          if (sanitize) {
            value = this.domSanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_1__.SecurityContext.HTML, value);
          }

          content = quillEditor.clipboard.convert(value);
        } else if (format === 'json') {
          try {
            content = JSON.parse(value);
          } catch (e) {
            content = [{
              insert: value
            }];
          }
        }

        quillEditor.setContents(content);
      }
    };
  }

  ngOnInit() {
    this.preserve = this.preserveWhitespace;
  }

  ngOnChanges(changes) {
    if (!this.quillEditor) {
      return;
    }

    if (changes.content) {
      this.valueSetter(this.quillEditor, changes.content.currentValue);
    }
  }

  ngAfterViewInit() {
    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_4__.isPlatformServer)(this.platformId)) {
      return;
    } // eslint-disable-next-line @typescript-eslint/naming-convention


    this.quillSubscription = this.service.getQuill().subscribe(Quill => {
      const modules = Object.assign({}, this.modules || this.service.config.modules);
      modules.toolbar = false;
      this.customOptions.forEach(customOption => {
        const newCustomOption = Quill.import(customOption.import);
        newCustomOption.whitelist = customOption.whitelist;
        Quill.register(newCustomOption, true);
      });
      this.customModules.forEach(({
        implementation,
        path
      }) => {
        Quill.register(path, implementation);
      });
      let debug = this.debug;

      if (!debug && debug !== false && this.service.config.debug) {
        debug = this.service.config.debug;
      }

      let formats = this.formats;

      if (!formats && formats === undefined) {
        formats = this.service.config.formats ? Object.assign({}, this.service.config.formats) : this.service.config.formats === null ? null : undefined;
      }

      const theme = this.theme || (this.service.config.theme ? this.service.config.theme : 'snow');
      this.editorElem = this.elementRef.nativeElement.querySelector('[quill-view-element]');
      this.zone.runOutsideAngular(() => {
        this.quillEditor = new Quill(this.editorElem, {
          debug: debug,
          formats: formats,
          modules,
          readOnly: true,
          strict: this.strict,
          theme
        });
      });
      this.renderer.addClass(this.editorElem, 'ngx-quill-view');

      if (this.content) {
        this.valueSetter(this.quillEditor, this.content);
      } // The `requestAnimationFrame` triggers change detection. There's no sense to invoke the `requestAnimationFrame` if anyone is
      // listening to the `onEditorCreated` event inside the template, for instance `<quill-view (onEditorCreated)="...">`.


      if (!this.onEditorCreated.observers.length) {
        return;
      } // The `requestAnimationFrame` will trigger change detection and `onEditorCreated` will also call `markDirty()`
      // internally, since Angular wraps template event listeners into `listener` instruction. We're using the `requestAnimationFrame`
      // to prevent the frame drop and avoid `ExpressionChangedAfterItHasBeenCheckedError` error.


      requestAnimationFrame(() => {
        this.onEditorCreated.emit(this.quillEditor);
      });
    });
  }

  ngOnDestroy() {
    this.quillSubscription?.unsubscribe();
    this.quillSubscription = null;
  }

}

QuillViewComponent.ɵfac = function QuillViewComponent_Factory(t) {
  return new (t || QuillViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](QuillService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.DomSanitizer), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID));
};

QuillViewComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: QuillViewComponent,
  selectors: [["quill-view"]],
  inputs: {
    format: "format",
    theme: "theme",
    modules: "modules",
    debug: "debug",
    formats: "formats",
    sanitize: "sanitize",
    strict: "strict",
    content: "content",
    customModules: "customModules",
    customOptions: "customOptions",
    preserveWhitespace: "preserveWhitespace"
  },
  outputs: {
    onEditorCreated: "onEditorCreated"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
  decls: 2,
  vars: 2,
  consts: [["quill-view-element", "", 4, "ngIf"], ["quill-view-element", ""]],
  template: function QuillViewComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, QuillViewComponent_div_0_Template, 1, 0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, QuillViewComponent_pre_1_Template, 1, 0, "pre", 0);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.preserve);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.preserve);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf],
  styles: [".ql-container.ngx-quill-view{border:0}\n"],
  encapsulation: 2
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](QuillViewComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewEncapsulation.None,
      selector: 'quill-view',
      styles: [`
.ql-container.ngx-quill-view {
  border: 0;
}
`],
      template: `
<div quill-view-element *ngIf="!preserve"></div>
<pre quill-view-element *ngIf="preserve"></pre>
`
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Renderer2
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone
    }, {
      type: QuillService
    }, {
      type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.DomSanitizer
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID]
      }]
    }];
  }, {
    format: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    theme: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    modules: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    debug: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    formats: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    sanitize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    strict: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    content: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    customModules: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    customOptions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    preserveWhitespace: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    onEditorCreated: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }]
  });
})();

class QuillModule {
  static forRoot(config) {
    return {
      ngModule: QuillModule,
      providers: [{
        provide: QUILL_CONFIG_TOKEN,
        useValue: config
      }]
    };
  }

}

QuillModule.ɵfac = function QuillModule_Factory(t) {
  return new (t || QuillModule)();
};

QuillModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: QuillModule
});
QuillModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](QuillModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule,
    args: [{
      declarations: [QuillEditorComponent, QuillViewComponent, QuillViewHTMLComponent],
      exports: [QuillEditorComponent, QuillViewComponent, QuillViewHTMLComponent],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule]
    }]
  }], null, null);
})();
/*
 * Public API Surface of ngx-quill
 */

/**
 * Generated bundle index. Do not edit.
 */




/***/ })

}]);
//# sourceMappingURL=src_app_apps_apps_module_ts.js.map