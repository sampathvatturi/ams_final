"use strict";
(self["webpackChunkenlink"] = self["webpackChunkenlink"] || []).push([["default-src_app_shared_text-editor_text-editor_module_ts-src_app_shared_upload-attachments_up-2fab69"],{

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


/***/ }),

/***/ 81721:
/*!**************************************************************************************!*\
  !*** ./src/app/shared/upload-attachments/documents-list/documents-list.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DocumentsListComponent": () => (/* binding */ DocumentsListComponent)
/* harmony export */ });
/* harmony import */ var src_app_shared_upload_attachments_upload_attachments_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/upload-attachments/upload-attachments.component */ 18147);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_shared_services_theme_constant_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/theme-constant.service */ 87341);
/* harmony import */ var src_app_shared_services_apps_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/apps.service */ 53538);
/* harmony import */ var ng_zorro_antd_notification__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/notification */ 76608);
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/modal */ 81803);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/button */ 17619);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 16495);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 36686);
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/table */ 37085);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/grid */ 70031);
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/form */ 83302);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/input */ 22533);

















function DocumentsListComponent_app_loading_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-loading");
} }
function DocumentsListComponent_ng_container_20_button_11_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DocumentsListComponent_ng_container_20_button_11_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r13); const f_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r11.downloadPDF(f_r4.upld_dcmnt_url_tx)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Download");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} }
function DocumentsListComponent_ng_container_20_nz_spin_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "nz-spin", 22);
} }
function DocumentsListComponent_ng_container_20_button_14_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DocumentsListComponent_ng_container_20_button_14_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r16); const f_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r14.openUploadDocuments(f_r4)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Upload");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} }
function DocumentsListComponent_ng_container_20_div_16_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DocumentsListComponent_ng_container_20_div_16_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r19); const f_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit; return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](f_r4.shwSubTbl = !f_r4.shwSubTbl); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function DocumentsListComponent_ng_container_20_div_17_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DocumentsListComponent_ng_container_20_div_17_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r22); const f_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit; return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](f_r4.shwSubTbl = !f_r4.shwSubTbl); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function DocumentsListComponent_ng_container_20_tr_18_tr_4_button_10_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DocumentsListComponent_ng_container_20_tr_18_tr_4_button_10_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r29); const s_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit; const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r27.downloadPDF(s_r24.gnrtd_dcmnt_url_tx)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Download");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} }
function DocumentsListComponent_ng_container_20_tr_18_tr_4_button_12_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DocumentsListComponent_ng_container_20_tr_18_tr_4_button_12_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r32); const s_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit; const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r30.downloadPDF(s_r24.upld_dcmnt_url_tx)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Download");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} }
function DocumentsListComponent_ng_container_20_tr_18_tr_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr", 16)(1, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, DocumentsListComponent_ng_container_20_tr_18_tr_4_button_10_Template, 3, 0, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, DocumentsListComponent_ng_container_20_tr_18_tr_4_button_12_Template, 3, 0, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const s_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](s_r24.sno);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](s_r24.dcmnt_type_nm);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](s_r24.dcmnt_nm);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](s_r24.dcmnt_nu);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", s_r24.gntd_in && s_r24.gnrtd_dcmnt_url_tx);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", s_r24.upld_dcmnt_url_tx);
} }
function DocumentsListComponent_ng_container_20_tr_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "td", 26)(2, "table", 27)(3, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, DocumentsListComponent_ng_container_20_tr_18_tr_4_Template, 13, 6, "tr", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const f_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", f_r4.prvs_dcmnts);
} }
function DocumentsListComponent_ng_container_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "tr", 16)(2, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, DocumentsListComponent_ng_container_20_button_11_Template, 3, 0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, DocumentsListComponent_ng_container_20_nz_spin_13_Template, 1, 0, "nz-spin", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, DocumentsListComponent_ng_container_20_button_14_Template, 3, 0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, DocumentsListComponent_ng_container_20_div_16_Template, 2, 0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, DocumentsListComponent_ng_container_20_div_17_Template, 2, 0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, DocumentsListComponent_ng_container_20_tr_18_Template, 5, 1, "tr", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const f_r4 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](f_r4.sno);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](f_r4.dcmnt_type_nm);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](f_r4.dcmnt_nm);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](f_r4.dcmnt_nu);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", f_r4.upld_dcmnt_url_tx);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.shwSpinner);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", f_r4.sgn_upld_in && !ctx_r1.shwSpinner);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !f_r4.shwSubTbl && f_r4.prvs_dcmnts.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", f_r4.shwSubTbl);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", f_r4.shwSubTbl);
} }
function DocumentsListComponent_ng_container_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Are you sure want to regenerate this document ?");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} }
function DocumentsListComponent_ng_container_24_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "nz-form-item", 14)(2, "nz-form-label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Enter Document Description ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "nz-form-control", 12)(5, "textarea", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function DocumentsListComponent_ng_container_24_Template_textarea_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r35); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r34.dscn_tx = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "div", 14)(8, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzSpan", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzSpan", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r3.dscn_tx);
} }
// import { Button, Modal, Space } from 'antd';
class DocumentsListComponent {
    constructor(themeService, apiSrv, notification, modalService, datePipe, fb) {
        this.themeService = themeService;
        this.apiSrv = apiSrv;
        this.notification = notification;
        this.modalService = modalService;
        this.datePipe = datePipe;
        this.fb = fb;
        this.showLoading = false;
        this.dscn_tx = null;
        this.hms_loggedin_user_clients = [];
        this.attachments = [];
        this.regeneratevisible = false;
        this.confirmvisible = false;
        this.uploadvisible = false;
        this.shwSpinner = false;
        this.hms_loggedin_user_clients = JSON.parse(localStorage.getItem('clients'));
        this.clnt_nm = this.hms_loggedin_user_clients[0].clnt_nm;
        this.scndy_dsply_nm = this.hms_loggedin_user_clients[0].scndy_dsply_nm;
    }
    ngOnInit() {
        this.getDocumentTypes();
    }
    getDocumentTypes() {
        console.log(this.vndr_id);
        console.log(this.hndlr_tx);
        this.showLoading = true;
        const rte = 'documents/document/types/' + this.vndr_id + '/' + this.hndlr_tx;
        this.apiSrv.get(rte).subscribe(res => {
            console.log("DOC LIST          ", res);
            this.showLoading = false;
            if (res['status'] == 404) {
                this.usrAcsErrMsg = true;
            }
            else if (res['status'] == 200) {
                if (res['data'] && res['data'].length) {
                    this.dcmnts = res['data'];
                }
                else {
                    this.dcmnts = {};
                }
                console.log(this.dcmnts, "bbbbbbbbbbbbbbbbbbbbbbbbbb");
            }
            var sno = 0;
            var counter1 = 0;
            this.dcmnts.filter((k) => {
                k['sno'] = sno + 1;
                sno++;
                k.prvs_dcmnts.filter((l) => {
                    l['sno'] = ++counter1;
                });
            });
        });
    }
    generateDocument() {
        console.log(this.regnrt);
        this.regeneratevisible = false;
        this.confirmvisible = true;
        if (this.regnrt == 0) {
            if (this.dscn_tx != null && this.dscn_tx != '') {
                this.confirmvisible = false;
                // this.descriptionDialog.close();
                this.showLoading = true;
                let data = {
                    prcs_id: this.prcs_id,
                    dcmnt_type_nm: this.dcmnt_type_nm,
                    dcmnt_type_id: this.dcmnt_type_id,
                    dscn_tx: this.dscn_tx,
                    tmple_id: this.tmple_id,
                    clnt_nm: this.clnt_nm,
                    scndy_dsply_nm: this.scndy_dsply_nm,
                    vndr_id: this.vndr_id,
                };
                const rte = 'documents/generate/document';
                this.apiSrv.create(data, rte).subscribe(res => {
                    this.showLoading = false;
                    if (res['status'] === 200) {
                        this.showLoading = false;
                        console.log(this.showLoading);
                        this.getDocumentTypes();
                        console.log(this.getDocumentTypes());
                        this.dscn_tx = null;
                        this.notification.create('success', '', res["message"]);
                    }
                    else {
                        this.notification.create('error', '', res["message"]);
                    }
                }, err => {
                    this.showLoading = false;
                    this.notification.create('error', '', 'Please Check your Internet Connection and Try Again');
                });
            }
            else {
                this.notification.create('success', '', 'Please Enter Description');
            }
        }
        else if (this.regnrt == 1) {
            if (this.dscn_tx != null && this.dscn_tx != '') {
                this.confirmvisible = false;
                this.showLoading = true;
                let data = {
                    prcs_id: this.prcs_id,
                    dcmnt_type_nm: this.dcmnt_type_nm,
                    dcmnt_type_id: this.dcmnt_type_id,
                    dscn_tx: this.dscn_tx,
                    tmple_id: this.tmple_id,
                    clnt_nm: this.clnt_nm,
                    scndy_dsply_nm: this.scndy_dsply_nm,
                    vndr_id: this.vndr_id,
                };
                const rte = 'documents/regenerate/document';
                this.apiSrv.create(data, rte).subscribe(res => {
                    this.showLoading = false;
                    if (res['status'] == 200) {
                        this.getDocumentTypes();
                        this.dscn_tx = null;
                        this.notification.create('success', 'Document Generated Successfully', res["message"]);
                    }
                    else {
                        this.notification.create('error', '', res["message"]);
                    }
                }, err => {
                    this.showLoading = false;
                    this.notification.create('error', '', 'Please Check your Internet Connection and Try Again');
                });
            }
            else {
                this.notification.create('error', '', 'Please Enter Description');
            }
        }
    }
    openDscrptn(d, regnrt) {
        console.log(d);
        this.regnrt = regnrt;
        this.tmple_id = d.tmple_id;
        this.prcs_id = d.prcs_id;
        this.dcmnt_type_nm = d.dcmnt_type_nm;
        this.dcmnt_type_id = d.dcmnt_type_id;
        this.isVisible = true;
        if (this.regnrt == 1) {
            this.regeneratevisible = true;
            this.confirmvisible = false;
        }
        else if (this.regnrt == 0) {
            this.dscn_tx = null;
            this.confirmvisible = true;
            this.regeneratevisible = false;
        }
    }
    handleOk() {
        this.showLoading = true;
        this.isOkLoading = false;
        this.regeneratevisible = false;
    }
    handleCancel() {
        this.uploadvisible = false;
        this.confirmvisible = false;
        this.regeneratevisible = false;
    }
    shwDscrptn() {
        this.confirmvisible = true;
        this.regeneratevisible = false;
    }
    downloadPDF(url) {
        window.open(url);
    }
    openUploadDocuments(f) {
        // this.uploadvisible =true;
        const modal = this.modalService.create({
            // nzTitle: 'Modal Title',
            nzContent: src_app_shared_upload_attachments_upload_attachments_component__WEBPACK_IMPORTED_MODULE_0__.UploadAttachmentsComponent,
            nzComponentParams: {
                data: { multple_in: false },
            },
            nzFooter: []
        });
        // const dialogRef = this._matDialog.open(UploadAttachmentsComponent, {
        //   data: { multple_in: false },
        const instance = modal.getContentComponent();
        modal.afterOpen.subscribe(() => console.log('[afterOpen] emitted!'));
        modal.afterClose.subscribe((result) => {
            console.log('[afterClose] The result is:', result);
            if (result == undefined) {
                this.notification.create('error', '', 'Document Upload Failed');
            }
            else if (result && result.attachments.length == 0) {
                this.notification.create('error', '', 'Document Upload Failed');
            }
            else {
                if (f.dcmnt_id == null) {
                    this.uploadNewDocument(f, result.attachments, result.description);
                }
                else {
                    this.uploadSignedDocuments(f, result.attachments, result.description);
                }
                // console.log(f)
                // console.log(result)
            }
        });
    }
    uploadSignedDocuments(f, attachments, description) {
        this.shwSpinner = true;
        console.log(attachments);
        // this.tmple_id = f.tmple_id;
        // this.prcs_id = f.prcs_id;
        this.dcmnt_type_nm = f.dcmnt_type_nm;
        this.dcmnt_type_id = f.dcmnt_type_id;
        this.attachments = attachments;
        this.dscn_tx = description;
        if (f.sgn_upld_in == 1) {
            this.showLoading = true;
            let data = {
                dcmnt_id: f.dcmnt_id,
                attachments: attachments,
                dscn_tx: description,
            };
            const rte = 'documents/upload/generated/document';
            this.apiSrv.create(data, rte).subscribe(res => {
                this.shwSpinner = false;
                if (res['status'] == 200) {
                    this.getDocumentTypes();
                    this.dscn_tx = null;
                    this.notification.create('success', '', 'Document Uploaded Successfully');
                }
                else {
                    this.notification.create('error', '', res['message']);
                }
            }, err => {
                this.shwSpinner = false;
                this.notification.create('error', '', 'Please check your internet connection and try again');
            });
        }
        else {
            this.attachments = attachments;
            // this.descriptionDialogUploadV = this._matDialog.open(this.descriptionDialogUpload,{
            //   disableClose: true
            this.uploadvisible = true;
        }
    }
    uploadNewDocument(f, attachments, description) {
        this.shwSpinner = true;
        let data = {
            prcs_id: f.prcs_id,
            dcmnt_type_id: parseInt(f.dcmnt_type_id),
            vndr_id: this.vndr_id,
            dscn_tx: description,
            attachments: attachments
        };
        // console.log(data)
        const rte = 'documents/upload/document';
        this.apiSrv.create(data, rte).subscribe(res => {
            this.shwSpinner = false;
            if (res['status'] == 200) {
                this.getDocumentTypes();
                this.attachments = [];
                this.notification.create('success', '', 'Document Uploaded Successfully');
            }
            else {
                this.notification.create('error', '', res['message']);
            }
        }, err => {
            this.showLoading = false;
            this.notification.create('error', '', 'Please check your internet connection and try again');
        });
    }
    uploadDocument() {
        if (this.dscn_tx != null && this.dscn_tx != '') {
            // this.descriptionDialogUploadV.close();
            this.uploadvisible = false;
            this.showLoading = true;
            let data = {
                prcs_id: this.prcs_id,
                dcmnt_type_nm: this.dcmnt_type_nm,
                dcmnt_type_id: this.dcmnt_type_id,
                dscn_tx: this.dscn_tx,
                // scndy_dsply_nm: this.scndy_dsply_nm,
                attachments: this.attachments
            };
            const rte = 'documents/upload/generated/document';
            this.apiSrv.create(data, rte).subscribe(res => {
                this.showLoading = false;
                if (res['status'] == 200) {
                    this.getDocumentTypes();
                    this.dscn_tx = null;
                    this.attachments = [];
                    this.notification.create('success', '', 'Document Uploaded Successfully');
                }
                else {
                    this.notification.create('error', '', res['message']);
                }
            }, err => {
                this.showLoading = false;
                this.notification.create('error', '', 'Please check your internet connection and try again');
            });
        }
        else {
            this.notification.create('error', '', 'Please enter description');
        }
    }
}
DocumentsListComponent.ɵfac = function DocumentsListComponent_Factory(t) { return new (t || DocumentsListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_theme_constant_service__WEBPACK_IMPORTED_MODULE_1__.ThemeConstantService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_apps_service__WEBPACK_IMPORTED_MODULE_2__.AppsService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ng_zorro_antd_notification__WEBPACK_IMPORTED_MODULE_4__.NzNotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_5__.NzModalService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.UntypedFormBuilder)); };
DocumentsListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: DocumentsListComponent, selectors: [["app-documents-list"]], inputs: { hndlr_tx: "hndlr_tx", vndr_id: "vndr_id" }, decls: 38, vars: 11, consts: [[4, "ngIf"], ["cdkScrollable", "", 1, "inset-0", "min-w-0", "text-center", "overflow-auto", "print:overflow-visible", "p-5"], [1, "pg-body"], [1, "bdy"], [1, "vl"], [1, "hd"], [1, "inx"], [4, "ngFor", "ngForOf"], [3, "nzVisible", "nzOkLoading", "nzVisibleChange", "nzOnCancel", "nzOnOk"], [4, "nzModalContent"], [1, "ml-auto", "sm:ml-0"], ["nzFor", "dscn_tx", 1, "ds-label", 3, "nzSpan"], ["nzHasFeedback", "", 3, "nzSpan"], ["rows", "4", "nz-input", "", "name", "dscn_tx", "type", "text", "nz-input", "", 3, "ngModel", "ngModelChange"], [1, "-ml-2"], ["nz-button", "", "nzType", "primary", 1, "col", "m-5", 3, "click"], ["data-toggle", "collapse", 1, "accordion-toggle"], ["nz-button", "", "nzType", "primary", "class", "col-md-12", 3, "click", 4, "ngIf"], ["nzSimple", "", 4, "ngIf"], ["class", "expnsion", 3, "click", 4, "ngIf"], ["nz-button", "", "nzType", "primary", 1, "col-md-12", 3, "click"], [1, "mr-1", "clr-wht"], ["nzSimple", ""], [1, "expnsion", 3, "click"], ["nz-icon", "", "nzType", "down-circle", "nzTheme", "outline"], ["nz-icon", "", "nzType", "up-circle", "nzTheme", "outline"], ["colspan", "8", 2, "padding", "0px"], [1, "table", "table-striped", "sb_table"], ["data-toggle", "collapse", "class", "accordion-toggle", 4, "ngFor", "ngForOf"], ["class", "ml-5 gnrtDwnldBtn", 3, "click", 4, "ngIf"], ["class", "upldDwnldBtn", 3, "click", 4, "ngIf"], [1, "ml-5", "gnrtDwnldBtn", 3, "click"], [1, "ml-2", "mr-1", "clr-wht"], [1, "upldDwnldBtn", 3, "click"]], template: function DocumentsListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, DocumentsListComponent_app_loading_0_Template, 1, 0, "app-loading", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "table", 4)(5, "thead")(6, "tr", 5)(7, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "S.No");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Document Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Document Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Document Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Uploaded Document");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Upload");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](20, DocumentsListComponent_ng_container_20_Template, 19, 10, "ng-container", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "nz-modal", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("nzVisibleChange", function DocumentsListComponent_Template_nz_modal_nzVisibleChange_21_listener($event) { return ctx.regeneratevisible = $event; })("nzOnCancel", function DocumentsListComponent_Template_nz_modal_nzOnCancel_21_listener() { return ctx.handleCancel(); })("nzOnOk", function DocumentsListComponent_Template_nz_modal_nzOnOk_21_listener() { return ctx.shwDscrptn(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](22, DocumentsListComponent_ng_container_22_Template, 3, 0, "ng-container", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "nz-modal", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("nzVisibleChange", function DocumentsListComponent_Template_nz_modal_nzVisibleChange_23_listener($event) { return ctx.confirmvisible = $event; })("nzOnCancel", function DocumentsListComponent_Template_nz_modal_nzOnCancel_23_listener() { return ctx.handleCancel(); })("nzOnOk", function DocumentsListComponent_Template_nz_modal_nzOnOk_23_listener() { return ctx.generateDocument(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](24, DocumentsListComponent_ng_container_24_Template, 9, 3, "ng-container", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "nz-modal", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("nzVisibleChange", function DocumentsListComponent_Template_nz_modal_nzVisibleChange_25_listener($event) { return ctx.uploadvisible = $event; })("nzOnCancel", function DocumentsListComponent_Template_nz_modal_nzOnCancel_25_listener() { return ctx.handleCancel(); })("nzOnOk", function DocumentsListComponent_Template_nz_modal_nzOnOk_25_listener() { return ctx.handleOk(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, "Enter Document Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "nz-form-item", 10)(29, "nz-form-label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "Description ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "nz-form-control", 12)(32, "textarea", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function DocumentsListComponent_Template_textarea_ngModelChange_32_listener($event) { return ctx.dscn_tx = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](34, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "div", 10)(36, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DocumentsListComponent_Template_button_click_36_listener() { return ctx.uploadDocument(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37, " Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showLoading === true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.dcmnts);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzVisible", ctx.regeneratevisible)("nzOkLoading", ctx.isOkLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzVisible", ctx.confirmvisible)("nzOkLoading", ctx.isOkLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzVisible", ctx.uploadvisible)("nzOkLoading", ctx.isOkLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzSpan", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzSpan", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.dscn_tx);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_8__.NzButtonComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_9__["ɵNzTransitionPatchDirective"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_10__.NzWaveDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_11__.NzTableCellDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_11__.NzThMeasureDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_11__.NzTheadComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_11__.NzTbodyComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_11__.NzTrDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_12__.NzColDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_12__.NzRowDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_13__.NzFormItemComponent, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_13__.NzFormLabelComponent, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_13__.NzFormControlComponent, ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_5__.NzModalComponent, ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_5__.NzModalContentDirective, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_14__.NzInputDirective], styles: [".strp[_ngcontent-%COMP%] {\n  background: rgba(128, 128, 128, 0.1098039216);\n  padding: 5px;\n  padding-left: 10px;\n  font-weight: 600;\n  text-transform: uppercase;\n  text-align: left;\n}\n\ntable[_ngcontent-%COMP%] {\n  border-collapse: collapse;\n  width: 100%;\n  border: solid 1px #cacccf;\n}\n\ntable[_ngcontent-%COMP%]   .lbx[_ngcontent-%COMP%] {\n  width: 30%;\n}\n\ntr[_ngcontent-%COMP%] {\n  height: 28px;\n  border-bottom: solid 1px #cacccf;\n}\n\ntr[_ngcontent-%COMP%]:nth-child(even) {\n  \n  background: #e5e5e5;\n}\n\ntr[_ngcontent-%COMP%]:nth-child(odd) {\n  \n  background: white;\n}\n\nthead[_ngcontent-%COMP%] {\n  border-bottom: solid 1px #d7cdcd;\n}\n\n.pg-head[_ngcontent-%COMP%] {\n  width: 100%;\n  box-shadow: 0 7px 20px rgba(0, 0, 0, 0.13), 1px 2px 2px rgba(0, 0, 0, 0.21);\n}\n\n.pg[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.pg[_ngcontent-%COMP%]   .tp-head[_ngcontent-%COMP%] {\n  box-shadow: 0 7px 20px rgba(0, 0, 0, 0.13), 1px 2px 2px rgba(0, 0, 0, 0.21);\n  padding: 10px;\n  font-weight: 600;\n}\n\n.pg[_ngcontent-%COMP%]   .inx[_ngcontent-%COMP%] {\n  text-align: center;\n  color: black;\n  width: 35px;\n}\n\n.pg[_ngcontent-%COMP%]   .hd[_ngcontent-%COMP%] {\n  padding: 10px;\n  width: 100%;\n  border-top: solid 2px rgba(128, 128, 128, 0.3294117647);\n  border-bottom: solid 3px grey;\n  font-weight: 600;\n}\n\n.pg[_ngcontent-%COMP%]   .bdy[_ngcontent-%COMP%] {\n  padding: 10px;\n  background: white;\n  overflow: auto;\n}\n\n.pg[_ngcontent-%COMP%]   .vl[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border-right: solid 1px #cacccf;\n}\n\n.pg[_ngcontent-%COMP%]   .vl[_ngcontent-%COMP%]   .hd[_ngcontent-%COMP%] {\n  border-bottom: 2px double black;\n  background: #b0b0b0;\n  text-align: center;\n}\n\n.pg[_ngcontent-%COMP%]   .vl[_ngcontent-%COMP%]   .am[_ngcontent-%COMP%] {\n  text-align: right;\n}\n\n.pg[_ngcontent-%COMP%]   .vl[_ngcontent-%COMP%]   .lb[_ngcontent-%COMP%] {\n  text-align: left;\n}\n\n.pg[_ngcontent-%COMP%]   .vl[_ngcontent-%COMP%]   .dt[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.pg[_ngcontent-%COMP%]   .vl[_ngcontent-%COMP%]   .sm[_ngcontent-%COMP%] {\n  border-top: 3px double #170808;\n  height: 33px;\n  border-bottom: 3px double #170808;\n}\n\n.gnrtDwnldBtn[_ngcontent-%COMP%] {\n  background-color: #27cf27 !important;\n  height: 27px !important;\n  min-height: 23px !important;\n  max-height: 24px !important;\n}\n\n.upldBtn[_ngcontent-%COMP%] {\n  background-color: #2b58e7 !important;\n  height: 27px !important;\n  min-height: 23px !important;\n  max-height: 24px !important;\n}\n\n.upldDwnldBtn[_ngcontent-%COMP%] {\n  background-color: #f44336 !important;\n  height: 27px !important;\n  min-height: 23px !important;\n  max-height: 24px !important;\n}\n\n.clr-wht[_ngcontent-%COMP%] {\n  color: white !important;\n}\n\n.expnsion[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.sb_table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  width: 20%;\n}\n\n.vndr_prfle_btn[_ngcontent-%COMP%] {\n  width: -moz-fit-content;\n  width: fit-content;\n  text-align: center;\n  margin-top: 3px;\n  margin-right: 3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvY3VtZW50cy1saXN0LmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXFN1bnJpc2UlMjBUZWNoXFxhbXNfZnJvbnRlbmRcXHNyY1xcYXBwXFxzaGFyZWRcXHVwbG9hZC1hdHRhY2htZW50c1xcZG9jdW1lbnRzLWxpc3RcXGRvY3VtZW50cy1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNkNBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURFRTtFQUNFLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0FDQ0o7O0FEQ0k7RUFDRSxVQUFBO0FDQ047O0FER0U7RUFDRSxZQUFBO0VBQ0EsZ0NBQUE7QUNBSjs7QURHRTtFQUNFLHNCQUFBO0VBQ0EsbUJBQUE7QUNBSjs7QURHRTtFQUNFLHdCQUFBO0VBQ0EsaUJBQUE7QUNBSjs7QURHRTtFQUNFLGdDQUFBO0FDQUo7O0FER0U7RUFFRSxXQUFBO0VBQ0EsMkVBQUE7QUNESjs7QURJRTtFQUNFLFdBQUE7QUNESjs7QURHSTtFQUNFLDJFQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FDRE47O0FESUk7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDRk47O0FES0k7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUVBLHVEQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtBQ0pOOztBRE9JO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQ0xOOztBRFNNO0VBQ0UsK0JBQUE7QUNQUjs7QURVTTtFQUNFLCtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ1JSOztBRFdNO0VBQ0UsaUJBQUE7QUNUUjs7QURZTTtFQUNFLGdCQUFBO0FDVlI7O0FEYU07RUFDRSxrQkFBQTtBQ1hSOztBRGNNO0VBQ0UsOEJBQUE7RUFDQSxZQUFBO0VBQ0EsaUNBQUE7QUNaUjs7QURpQkU7RUFDRSxvQ0FBQTtFQUNBLHVCQUFBO0VBQ0EsMkJBQUE7RUFDQSwyQkFBQTtBQ2RKOztBRGlCRTtFQUNFLG9DQUFBO0VBQ0EsdUJBQUE7RUFDQSwyQkFBQTtFQUNBLDJCQUFBO0FDZEo7O0FEaUJFO0VBQ0Esb0NBQUE7RUFDQSx1QkFBQTtFQUNFLDJCQUFBO0VBQ0EsMkJBQUE7QUNkSjs7QURpQkU7RUFDRSx1QkFBQTtBQ2RKOztBRGlCRTtFQUNFLGVBQUE7QUNkSjs7QURpQkU7RUFDRSxVQUFBO0FDZEo7O0FEZ0JFO0VBQ0UsdUJBQUE7RUFBQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDYkoiLCJmaWxlIjoiZG9jdW1lbnRzLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3RycCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjODA4MDgwMWM7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgfVxyXG4gIFxyXG4gIHRhYmxlIHtcclxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlcjogc29saWQgMXB4ICNjYWNjY2Y7XHJcbiAgXHJcbiAgICAubGJ4IHtcclxuICAgICAgd2lkdGg6IDMwJTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgdHIge1xyXG4gICAgaGVpZ2h0OiAyOHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICNjYWNjY2Y7XHJcbiAgfVxyXG4gIFxyXG4gIHRyOm50aC1jaGlsZChldmVuKSB7XHJcbiAgICAvKmNsYXNzPVwiYmctZ3JheS01MFwiOyovXHJcbiAgICBiYWNrZ3JvdW5kOiAjZTVlNWU1O1xyXG4gIH1cclxuICBcclxuICB0cjpudGgtY2hpbGQob2RkKSB7XHJcbiAgICAvKiAgICBjbGFzcz1cImJnLXdoaXRlXCI7Ki9cclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIH1cclxuICBcclxuICB0aGVhZCB7XHJcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggI2Q3Y2RjZDtcclxuICB9XHJcbiAgXHJcbiAgLnBnLWhlYWQge1xyXG4gICAgLy8gaGVpZ2h0OjQwMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3gtc2hhZG93OiAwIDdweCAyMHB4IHJnYigwIDAgMCAvIDEzJSksIDFweCAycHggMnB4IHJnYigwIDAgMCAvIDIxJSk7XHJcbiAgfVxyXG4gIFxyXG4gIC5wZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICBcclxuICAgIC50cC1oZWFkIHtcclxuICAgICAgYm94LXNoYWRvdzogMCA3cHggMjBweCByZ2IoMCAwIDAgLyAxMyUpLCAxcHggMnB4IDJweCByZ2IoMCAwIDAgLyAyMSUpO1xyXG4gICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLmlueCB7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICB3aWR0aDogMzVweDtcclxuICAgIH1cclxuICBcclxuICAgIC5oZCB7XHJcbiAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAvLyBib3gtc2hhZG93OiAwIDdweCAyMHB4IHJnYigwIDAgMCAvIDEzJSksIDFweCAycHggMnB4IHJnYigwIDAgMCAvIDIxJSk7XHJcbiAgICAgIGJvcmRlci10b3A6IHNvbGlkIDJweCAjODA4MDgwNTQ7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDNweCBncmV5O1xyXG4gICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLmJkeSB7XHJcbiAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIH1cclxuICBcclxuICAgIC52bCB7XHJcbiAgICAgIHRkIHtcclxuICAgICAgICBib3JkZXItcmlnaHQ6IHNvbGlkIDFweCAjY2FjY2NmO1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIC5oZCB7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IGRvdWJsZSBibGFjaztcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjYjBiMGIwO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICAuYW0ge1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIC5sYiB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICAuZHQge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICAuc20ge1xyXG4gICAgICAgIGJvcmRlci10b3A6IDNweCBkb3VibGUgIzE3MDgwODtcclxuICAgICAgICBoZWlnaHQ6IDMzcHg7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogM3B4IGRvdWJsZSAjMTcwODA4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5nbnJ0RHdubGRCdG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjdjZjI3ICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDI3cHggIWltcG9ydGFudDtcclxuICAgIG1pbi1oZWlnaHQ6IDIzcHggIWltcG9ydGFudDtcclxuICAgIG1heC1oZWlnaHQ6IDI0cHggIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgLnVwbGRCdG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmI1OGU3ICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDI3cHggIWltcG9ydGFudDtcclxuICAgIG1pbi1oZWlnaHQ6IDIzcHggIWltcG9ydGFudDtcclxuICAgIG1heC1oZWlnaHQ6IDI0cHggIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgLnVwbGREd25sZEJ0bntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjQ0MzM2ICFpbXBvcnRhbnQ7XHJcbiAgaGVpZ2h0OiAyN3B4ICFpbXBvcnRhbnQ7XHJcbiAgICBtaW4taGVpZ2h0OiAyM3B4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXgtaGVpZ2h0OiAyNHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5jbHItd2h0e1xyXG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5leHBuc2lvbntcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLnNiX3RhYmxlIHRke1xyXG4gICAgd2lkdGg6MjAlO1xyXG4gIH1cclxuICAudm5kcl9wcmZsZV9idG57XHJcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAzcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDNweDtcclxufVxyXG4gICIsIi5zdHJwIHtcbiAgYmFja2dyb3VuZDogcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjEwOTgwMzkyMTYpO1xuICBwYWRkaW5nOiA1cHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxudGFibGUge1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2NhY2NjZjtcbn1cbnRhYmxlIC5sYngge1xuICB3aWR0aDogMzAlO1xufVxuXG50ciB7XG4gIGhlaWdodDogMjhweDtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICNjYWNjY2Y7XG59XG5cbnRyOm50aC1jaGlsZChldmVuKSB7XG4gIC8qY2xhc3M9XCJiZy1ncmF5LTUwXCI7Ki9cbiAgYmFja2dyb3VuZDogI2U1ZTVlNTtcbn1cblxudHI6bnRoLWNoaWxkKG9kZCkge1xuICAvKiAgICBjbGFzcz1cImJnLXdoaXRlXCI7Ki9cbiAgYmFja2dyb3VuZDogd2hpdGU7XG59XG5cbnRoZWFkIHtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICNkN2NkY2Q7XG59XG5cbi5wZy1oZWFkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJveC1zaGFkb3c6IDAgN3B4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjEzKSwgMXB4IDJweCAycHggcmdiYSgwLCAwLCAwLCAwLjIxKTtcbn1cblxuLnBnIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4ucGcgLnRwLWhlYWQge1xuICBib3gtc2hhZG93OiAwIDdweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4xMyksIDFweCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yMSk7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4ucGcgLmlueCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IGJsYWNrO1xuICB3aWR0aDogMzVweDtcbn1cbi5wZyAuaGQge1xuICBwYWRkaW5nOiAxMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXRvcDogc29saWQgMnB4IHJnYmEoMTI4LCAxMjgsIDEyOCwgMC4zMjk0MTE3NjQ3KTtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgM3B4IGdyZXk7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4ucGcgLmJkeSB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBvdmVyZmxvdzogYXV0bztcbn1cbi5wZyAudmwgdGQge1xuICBib3JkZXItcmlnaHQ6IHNvbGlkIDFweCAjY2FjY2NmO1xufVxuLnBnIC52bCAuaGQge1xuICBib3JkZXItYm90dG9tOiAycHggZG91YmxlIGJsYWNrO1xuICBiYWNrZ3JvdW5kOiAjYjBiMGIwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ucGcgLnZsIC5hbSB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuLnBnIC52bCAubGIge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLnBnIC52bCAuZHQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ucGcgLnZsIC5zbSB7XG4gIGJvcmRlci10b3A6IDNweCBkb3VibGUgIzE3MDgwODtcbiAgaGVpZ2h0OiAzM3B4O1xuICBib3JkZXItYm90dG9tOiAzcHggZG91YmxlICMxNzA4MDg7XG59XG5cbi5nbnJ0RHdubGRCdG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjdjZjI3ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMjdweCAhaW1wb3J0YW50O1xuICBtaW4taGVpZ2h0OiAyM3B4ICFpbXBvcnRhbnQ7XG4gIG1heC1oZWlnaHQ6IDI0cHggIWltcG9ydGFudDtcbn1cblxuLnVwbGRCdG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmI1OGU3ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMjdweCAhaW1wb3J0YW50O1xuICBtaW4taGVpZ2h0OiAyM3B4ICFpbXBvcnRhbnQ7XG4gIG1heC1oZWlnaHQ6IDI0cHggIWltcG9ydGFudDtcbn1cblxuLnVwbGREd25sZEJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNDQzMzYgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAyN3B4ICFpbXBvcnRhbnQ7XG4gIG1pbi1oZWlnaHQ6IDIzcHggIWltcG9ydGFudDtcbiAgbWF4LWhlaWdodDogMjRweCAhaW1wb3J0YW50O1xufVxuXG4uY2xyLXdodCB7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuXG4uZXhwbnNpb24ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5zYl90YWJsZSB0ZCB7XG4gIHdpZHRoOiAyMCU7XG59XG5cbi52bmRyX3ByZmxlX2J0biB7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAzcHg7XG4gIG1hcmdpbi1yaWdodDogM3B4O1xufSJdfQ== */"] });


/***/ }),

/***/ 18147:
/*!***************************************************************************!*\
  !*** ./src/app/shared/upload-attachments/upload-attachments.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UploadAttachmentsComponent": () => (/* binding */ UploadAttachmentsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var ng_zorro_antd_notification__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/notification */ 76608);
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/modal */ 81803);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/button */ 17619);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 16495);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 36686);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/input */ 22533);












function UploadAttachmentsComponent_input_6_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function UploadAttachmentsComponent_input_6_Template_input_change_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.handleInputChange($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UploadAttachmentsComponent_div_7_img_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 15);
} if (rf & 2) {
    const stgImg_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", stgImg_r4.base64, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function UploadAttachmentsComponent_div_7_img_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 16);
} }
function UploadAttachmentsComponent_div_7_img_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 17);
} }
function UploadAttachmentsComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UploadAttachmentsComponent_div_7_Template_div_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const stgImg_r4 = restoredCtx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r10.removeImg(stgImg_r4)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, UploadAttachmentsComponent_div_7_img_2_Template, 1, 1, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, UploadAttachmentsComponent_div_7_img_3_Template, 1, 0, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, UploadAttachmentsComponent_div_7_img_4_Template, 1, 0, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const stgImg_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", stgImg_r4.fl_type == "image/jpeg" || stgImg_r4.fl_type == "image/jpg" || stgImg_r4.fl_type == "image/png");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(stgImg_r4.fl_type == "image/jpeg" || stgImg_r4.fl_type == "image/jpg" || stgImg_r4.fl_type == "image/png" || stgImg_r4.fl_type == "application/pdf"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", stgImg_r4.fl_type == "application/pdf");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](stgImg_r4.fl_name);
} }
class UploadAttachmentsComponent {
    constructor(router, notification, modal) {
        this.router = router;
        this.notification = notification;
        this.modal = modal;
        this.attachments = [];
        this.dscn_tx = null;
        this.shwUpld = true;
    }
    ngOnInit() {
        console.log(this.data);
    }
    Close() {
        this.attachments = [];
        this.modal.destroy(this.attachments);
    }
    handleInputChange(e) {
        let files = e.dataTransfer ? e.dataTransfer.files : e.target.files;
        for (var i = 0; i < files.length; i++) {
            if (files[i].type == 'application/msword' || files[i].type == 'application/vnd.ms-excel' || files[i].type == 'image/jpeg' || files[i].type == 'image/png' || files[i].type == 'image/jpg' || files[i].type == 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' || files[i].type == 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' || files[i].type == 'application/pdf') {
                let file = files[i];
                this.fl_type = file.type;
                this.fl_nm = file.name;
                let reader = new FileReader();
                reader.onload = this._handleReaderLoaded.bind(this);
                reader.readAsDataURL(file);
            }
            else {
                this.notification.create('error', '', "Please Upload Valid File");
            }
        }
    }
    _handleReaderLoaded(e) {
        var reader = e.target;
        this.attachments.push({ fl_type: this.fl_type, fl_name: this.fl_nm, base64: reader.result });
        if (this.data.multple_in == false) {
            if (this.attachments.length == 1) {
                this.shwUpld = false;
            }
            else {
                this.shwUpld = true;
            }
        }
        else {
            this.shwUpld = true;
        }
    }
    removeImg(val) {
        const idx = this.attachments.indexOf(val);
        if (idx !== -1) {
            this.attachments.splice(idx, 1);
        }
        if (this.data.multple_in == false) {
            if (this.attachments.length == 1) {
                this.shwUpld = false;
            }
            else {
                this.shwUpld = true;
            }
        }
        else {
            this.shwUpld = true;
        }
    }
    upload() {
        this.modal.destroy({ attachments: this.attachments, description: this.dscn_tx });
    }
}
UploadAttachmentsComponent.ɵfac = function UploadAttachmentsComponent_Factory(t) { return new (t || UploadAttachmentsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_notification__WEBPACK_IMPORTED_MODULE_2__.NzNotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_3__.NzModalRef)); };
UploadAttachmentsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UploadAttachmentsComponent, selectors: [["upload-attachments"]], inputs: { data: "data" }, decls: 19, vars: 5, consts: [[1, ""], ["nz-button", "", "nzType", "primary", 3, "tabIndex", "click"], ["type", "file", 3, "change", 4, "ngIf"], [4, "ngFor", "ngForOf"], [2, "margin-top", "15px"], ["type", "text", "nz-input", "", 3, "ngModel", "ngModelChange"], [1, "row", 2, "margin-top", "10px"], [1, "col-md-6"], ["nz-button", "", "nzType", "primary", 3, "disabled", "click"], ["nz-button", "", "nzType", "default", 2, "margin-left", "20px", 3, "click"], ["type", "file", 3, "change"], ["svgIcon", "close", 3, "click"], ["width", "100", "height", "100", 3, "src", 4, "ngIf"], ["src", "assets/images/support/docx.png", "width", "100", "height", "100", 4, "ngIf"], ["src", "assets/images/support/pdf.png", "width", "100", "height", "100", 4, "ngIf"], ["width", "100", "height", "100", 3, "src"], ["src", "assets/images/support/docx.png", "width", "100", "height", "100"], ["src", "assets/images/support/pdf.png", "width", "100", "height", "100"]], template: function UploadAttachmentsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "div")(2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Upload Attachment(s)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UploadAttachmentsComponent_Template_button_click_4_listener() { return ctx.Close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, UploadAttachmentsComponent_input_6_Template, 1, 0, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, UploadAttachmentsComponent_div_7_Template, 7, 4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4)(9, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Description ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "textarea", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UploadAttachmentsComponent_Template_textarea_ngModelChange_11_listener($event) { return ctx.dscn_tx = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7)(15, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UploadAttachmentsComponent_Template_button_click_15_listener() { return ctx.upload(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Upload");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UploadAttachmentsComponent_Template_button_click_17_listener() { return ctx.Close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tabIndex", -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.shwUpld);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.attachments);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.dscn_tx);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.attachments.length);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_6__.NzButtonComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_7__["ɵNzTransitionPatchDirective"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_8__.NzWaveDirective, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_9__.NzInputDirective], styles: [".frmfld {\n  width: 40vw;\n}\n\n.RmvBtn {\n  background: transparent;\n  border: none;\n  position: absolute;\n  color: #b92a41;\n  cursor: pointer;\n  font-size: 12px !important;\n  margin-top: -11px;\n  padding-left: -9px;\n  margin-left: 60px;\n}\n\n.imgTme {\n  font-size: 9px;\n}\n\n.imgUploadDiv {\n  border: 1px dotted #cecece;\n  background-color: #ffffff;\n  width: 77px;\n  height: 70px;\n  float: left;\n  margin: 4px;\n  border-radius: 10px;\n}\n\n.imgUploadDiv input[type=file] {\n  display: none;\n}\n\n.imgUploadDiv img {\n  height: 100%;\n  width: 100%;\n  object-fit: cover;\n}\n\n.atchTxt {\n  color: #1e293b;\n  letter-spacing: 0.5px;\n  font-weight: 500;\n}\n\n.file_nm {\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  font-size: 12px;\n  margin-top: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVwbG9hZC1hdHRhY2htZW50cy5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXFN1bnJpc2UlMjBUZWNoXFxhbXNfZnJvbnRlbmRcXHNyY1xcYXBwXFxzaGFyZWRcXHVwbG9hZC1hdHRhY2htZW50c1xcdXBsb2FkLWF0dGFjaG1lbnRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtBQ0NGOztBREVBO0VBQ0UsdUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLDBCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSwwQkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FEQ0U7RUFDRSxhQUFBO0FDQ0o7O0FERUU7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FDQUo7O0FESUE7RUFDRSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQ0RGOztBRElBO0VBQ0UsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUNERiIsImZpbGUiOiJ1cGxvYWQtYXR0YWNobWVudHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZnJtZmxkIHtcclxuICB3aWR0aDogNDB2dztcclxufVxyXG5cclxuLlJtdkJ0biB7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBjb2xvcjogI2I5MmE0MTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLXRvcDogLTExcHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAtOXB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA2MHB4O1xyXG59XHJcblxyXG4uaW1nVG1lIHtcclxuICBmb250LXNpemU6IDlweDtcclxufVxyXG5cclxuLmltZ1VwbG9hZERpdiB7XHJcbiAgYm9yZGVyOiAxcHggZG90dGVkICNjZWNlY2U7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICB3aWR0aDogNzdweDtcclxuICBoZWlnaHQ6IDcwcHg7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgbWFyZ2luOiA0cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuXHJcbiAgaW5wdXRbdHlwZT1cImZpbGVcIl0ge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcblxyXG4gIGltZyB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gIH1cclxufVxyXG5cclxuLmF0Y2hUeHQge1xyXG4gIGNvbG9yOiAjMWUyOTNiO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG4uZmlsZV9ubSB7XHJcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbn0iLCIuZnJtZmxkIHtcbiAgd2lkdGg6IDQwdnc7XG59XG5cbi5SbXZCdG4ge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiBub25lO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbG9yOiAjYjkyYTQxO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiAtMTFweDtcbiAgcGFkZGluZy1sZWZ0OiAtOXB4O1xuICBtYXJnaW4tbGVmdDogNjBweDtcbn1cblxuLmltZ1RtZSB7XG4gIGZvbnQtc2l6ZTogOXB4O1xufVxuXG4uaW1nVXBsb2FkRGl2IHtcbiAgYm9yZGVyOiAxcHggZG90dGVkICNjZWNlY2U7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIHdpZHRoOiA3N3B4O1xuICBoZWlnaHQ6IDcwcHg7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW46IDRweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbi5pbWdVcGxvYWREaXYgaW5wdXRbdHlwZT1maWxlXSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uaW1nVXBsb2FkRGl2IGltZyB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuXG4uYXRjaFR4dCB7XG4gIGNvbG9yOiAjMWUyOTNiO1xuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5maWxlX25tIHtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbWFyZ2luLXRvcDogNXB4O1xufSJdfQ== */"], encapsulation: 2 });


/***/ }),

/***/ 73452:
/*!*************************************************************************!*\
  !*** ./src/app/shared/upload-attachments/upload-attachments.modulet.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UploadAttachmentsModule": () => (/* binding */ UploadAttachmentsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var src_app_shared_upload_attachments_upload_attachments_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/upload-attachments/upload-attachments.component */ 18147);
/* harmony import */ var _documents_list_documents_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./documents-list/documents-list.component */ 81721);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/button */ 17619);
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/card */ 48332);
/* harmony import */ var ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/avatar */ 44178);
/* harmony import */ var ng_zorro_antd_rate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/rate */ 72443);
/* harmony import */ var ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/badge */ 98757);
/* harmony import */ var ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/progress */ 98412);
/* harmony import */ var ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/radio */ 45953);
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/table */ 37085);
/* harmony import */ var ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/dropdown */ 75756);
/* harmony import */ var ng_zorro_antd_timeline__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/timeline */ 58737);
/* harmony import */ var ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/tabs */ 68284);
/* harmony import */ var ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/tag */ 5020);
/* harmony import */ var ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/list */ 97555);
/* harmony import */ var ng_zorro_antd_calendar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/calendar */ 69464);
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ 33923);
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/form */ 83302);
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/modal */ 81803);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/select */ 81071);
/* harmony import */ var ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-zorro-antd/upload */ 81371);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ng-zorro-antd/input */ 22533);
/* harmony import */ var ng_zorro_antd_pagination__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ng-zorro-antd/pagination */ 81549);
/* harmony import */ var ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ng-zorro-antd/date-picker */ 6229);
/* harmony import */ var ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ng-zorro-antd/checkbox */ 28154);
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ng-zorro-antd/message */ 74600);
/* harmony import */ var ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ng-zorro-antd/drawer */ 38611);
/* harmony import */ var ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ng-zorro-antd/divider */ 12857);
/* harmony import */ var ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ng-zorro-antd/anchor */ 80295);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/core */ 22560);
































const antdModule = [
    ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_2__.NzButtonModule,
    ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_3__.NzCardModule,
    ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_4__.NzAvatarModule,
    ng_zorro_antd_rate__WEBPACK_IMPORTED_MODULE_5__.NzRateModule,
    ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_6__.NzBadgeModule,
    ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_7__.NzProgressModule,
    ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_8__.NzRadioModule,
    ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_9__.NzTableModule,
    ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_10__.NzDropDownModule,
    ng_zorro_antd_timeline__WEBPACK_IMPORTED_MODULE_11__.NzTimelineModule,
    ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_12__.NzTabsModule,
    ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_13__.NzTagModule,
    ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_14__.NzListModule,
    ng_zorro_antd_calendar__WEBPACK_IMPORTED_MODULE_15__.NzCalendarModule,
    ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_16__.NzToolTipModule,
    ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_17__.NzFormModule,
    ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_18__.NzModalModule,
    ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_19__.NzSelectModule,
    ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_20__.NzUploadModule,
    ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_21__.NzInputModule,
    ng_zorro_antd_pagination__WEBPACK_IMPORTED_MODULE_22__.NzPaginationModule,
    ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_23__.NzDatePickerModule,
    ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_24__.NzCheckboxModule,
    ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_25__.NzMessageModule,
    ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_26__.NzAnchorModule,
    ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_27__.NzDrawerModule,
    ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_28__.NzDividerModule
];
class UploadAttachmentsModule {
}
UploadAttachmentsModule.ɵfac = function UploadAttachmentsModule_Factory(t) { return new (t || UploadAttachmentsModule)(); };
UploadAttachmentsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵdefineNgModule"]({ type: UploadAttachmentsModule });
UploadAttachmentsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵdefineInjector"]({ providers: [_angular_common__WEBPACK_IMPORTED_MODULE_30__.DatePipe], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_30__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_31__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_31__.ReactiveFormsModule, antdModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵsetNgModuleScope"](UploadAttachmentsModule, { declarations: [src_app_shared_upload_attachments_upload_attachments_component__WEBPACK_IMPORTED_MODULE_0__.UploadAttachmentsComponent, _documents_list_documents_list_component__WEBPACK_IMPORTED_MODULE_1__.DocumentsListComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_30__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_31__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_31__.ReactiveFormsModule, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_2__.NzButtonModule,
        ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_3__.NzCardModule,
        ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_4__.NzAvatarModule,
        ng_zorro_antd_rate__WEBPACK_IMPORTED_MODULE_5__.NzRateModule,
        ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_6__.NzBadgeModule,
        ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_7__.NzProgressModule,
        ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_8__.NzRadioModule,
        ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_9__.NzTableModule,
        ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_10__.NzDropDownModule,
        ng_zorro_antd_timeline__WEBPACK_IMPORTED_MODULE_11__.NzTimelineModule,
        ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_12__.NzTabsModule,
        ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_13__.NzTagModule,
        ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_14__.NzListModule,
        ng_zorro_antd_calendar__WEBPACK_IMPORTED_MODULE_15__.NzCalendarModule,
        ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_16__.NzToolTipModule,
        ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_17__.NzFormModule,
        ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_18__.NzModalModule,
        ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_19__.NzSelectModule,
        ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_20__.NzUploadModule,
        ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_21__.NzInputModule,
        ng_zorro_antd_pagination__WEBPACK_IMPORTED_MODULE_22__.NzPaginationModule,
        ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_23__.NzDatePickerModule,
        ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_24__.NzCheckboxModule,
        ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_25__.NzMessageModule,
        ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_26__.NzAnchorModule,
        ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_27__.NzDrawerModule,
        ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_28__.NzDividerModule], exports: [src_app_shared_upload_attachments_upload_attachments_component__WEBPACK_IMPORTED_MODULE_0__.UploadAttachmentsComponent,
        _documents_list_documents_list_component__WEBPACK_IMPORTED_MODULE_1__.DocumentsListComponent] }); })();


/***/ })

}]);
//# sourceMappingURL=default-src_app_shared_text-editor_text-editor_module_ts-src_app_shared_upload-attachments_up-2fab69.js.map