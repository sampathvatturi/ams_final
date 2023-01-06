"use strict";
(self["webpackChunkenlink"] = self["webpackChunkenlink"] || []).push([["src_app_apps_work_management_grant_grant_module_ts"],{

/***/ 32909:
/*!***************************************************************************************!*\
  !*** ./src/app/apps/work_management/grant/grant-reg-form/grant-reg-form.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GrantRegFormComponent": () => (/* binding */ GrantRegFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/icon */ 5655);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/button */ 17619);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 16495);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 36686);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/grid */ 70031);
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/form */ 83302);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/select */ 81071);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/input */ 22533);
/* harmony import */ var ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/date-picker */ 6229);
/* harmony import */ var ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/divider */ 12857);
/* harmony import */ var _shared_upload_attachments_documents_list_documents_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/upload-attachments/documents-list/documents-list.component */ 81721);
/* harmony import */ var _shared_text_editor_text_editor_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/text-editor/text-editor.component */ 14577);
















function GrantRegFormComponent_nz_option_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "nz-option", 37);
} if (rf & 2) {
    const g_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzValue", g_r10.grnt_id)("nzLabel", g_r10.grnt_nm);
} }
function GrantRegFormComponent_nz_option_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "nz-option", 37);
} if (rf & 2) {
    const g_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzValue", g_r11.grnt_ctgry_id)("nzLabel", g_r11.grnt_ctgry_nm);
} }
function GrantRegFormComponent_nz_option_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "nz-option", 37);
} if (rf & 2) {
    const g_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzValue", g_r12.acnt_hd_ky)("nzLabel", g_r12.acnt_hd_nu);
} }
function GrantRegFormComponent_nz_option_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "nz-option", 37);
} if (rf & 2) {
    const g_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzValue", g_r13.yr_id)("nzLabel", g_r13.yr_nm);
} }
function GrantRegFormComponent_ng_template_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Ammounts ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "in Crores");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function GrantRegFormComponent_ng_template_66_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Remarks ");
} }
function GrantRegFormComponent_ng_template_72_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Attachments ");
} }
class GrantRegFormComponent {
    constructor(fb) {
        this.fb = fb;
        this.data = {
            grnt_lst: [{
                    grnt_id: 1,
                    grnt_nm: "CRR"
                },
                {
                    grnt_id: 2,
                    grnt_nm: "MRR"
                },
                {
                    grnt_id: 3,
                    grnt_nm: "DPRO Bldgs."
                }],
            grnt_ctgry_lst: [{
                    grnt_ctgry_id: 1,
                    grnt_ctgry_nm: "Plain"
                },
                {
                    grnt_ctgry_id: 2,
                    grnt_ctgry_nm: "SCP"
                },
                {
                    grnt_ctgry_id: 3,
                    grnt_ctgry_nm: "TSP"
                }],
            grnt_ctgry_acnt_hds_lst_t: [{
                    acnt_hd_ky: 1,
                    acnt_hd_nu: "4515-00-101-25-22-560-531"
                }],
            grnt_sctn_yr_lst: [{
                    yr_id: 1,
                    yr_nm: "2019-20"
                }],
            atchmnt_grnt_id: 1,
            atchmnt_hndlr_tx: "GRNT_SNCTN_REG"
        };
        this.settings = {
            isBtnLoading: false
        };
        this.myform();
    }
    ngOnInit() {
    }
    myform() {
        this.grantRegForm = this.fb.group({
            grnt_id: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            grnt_ctgry_id: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            acnt_hd_ky: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            yr_id: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            be_cr_ct: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(0)]],
            adtnl_be_ct: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(0)]],
            rvsd_be_ct: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(0)]],
            grnt_rlsd_ct: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(0)]],
            dscn_tx: [null],
            rlsd_dt: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]]
        });
    }
    onChange(result) {
        console.log('onChange: ', result);
    }
    getEdtrEntrTxt(edtr_txt) {
        console.log(edtr_txt);
    }
}
GrantRegFormComponent.ɵfac = function GrantRegFormComponent_Factory(t) { return new (t || GrantRegFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormBuilder)); };
GrantRegFormComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: GrantRegFormComponent, selectors: [["app-grant-reg-form"]], decls: 87, vars: 21, consts: [["nz-form", "", 1, "ds-master-form", 3, "formGroup"], [1, "row"], [1, "col-md-8"], [1, "ds-item"], ["nzRequired", "", "nzFor", "gndr_nm", 1, "ds-label", 3, "nzSpan"], ["nzDisableAutoTips", "", "nzErrorTip", "Please Select Grant"], ["nzShowSearch", "", "nzAllowClear", "", "formControlName", "grnt_id", "nzPlaceHolder", ""], ["selected", "selected", 3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"], [1, "col-md-4"], ["nzDisableAutoTips", "", "nzErrorTip", "Please Select Category"], ["nzShowSearch", "", "nzAllowClear", "", "formControlName", "grnt_ctgry_id", "nzPlaceHolder", ""], [1, "col-md-5"], ["nzDisableAutoTips", "", "nzErrorTip", "Please Select Account Head"], ["nzShowSearch", "", "nzAllowClear", "", "formControlName", "acnt_hd_ky", "nzPlaceHolder", ""], [1, "col-md-3"], ["nzDisableAutoTips", "", "nzErrorTip", "Please Select Year of Sanction"], ["nzShowSearch", "", "nzAllowClear", "", "formControlName", "yr_id", "nzPlaceHolder", ""], ["nzDisableAutoTips", "", "nzErrorTip", "Please Select Released date"], ["formControlName", "rlsd_dt"], ["nzOrientation", "left", 3, "nzText"], ["amnt_text", ""], ["nzDisableAutoTips", "", "nzErrorTip", "Please Enter BE Ammount"], ["type", "number", "minlength", "0", "nz-input", "", "formControlName", "be_cr_ct", "required", ""], ["nzFor", "gndr_nm", 1, "ds-label", 3, "nzSpan"], ["nzDisableAutoTips", "", "nzErrorTip", "Please Enter Addl. BE"], ["type", "number", "minlength", "0", "nz-input", "", "formControlName", "adtnl_be_ct"], ["nzDisableAutoTips", "", "nzErrorTip", "Please Enter Revised BE "], ["type", "number", "minlength", "0", "nz-input", "", "formControlName", "rvsd_be_ct"], ["nzDisableAutoTips", "", "nzErrorTip", "Please Enter Grants released"], ["type", "number", "minlength", "0", "nz-input", "", "formControlName", "grnt_rlsd_ct"], ["rmrk_text", ""], [1, "col-md-12"], [3, "getEdtrEntrTxt"], ["fl_upld_text", ""], [3, "vndr_id", "hndlr_tx"], ["nz-button", "", "nzType", "default", 1, "col", "m-5"], ["nz-button", "", "nzType", "primary", 1, "col", "m-5", 3, "disabled", "nzLoading"], ["selected", "selected", 3, "nzValue", "nzLabel"], ["nz-icon", "", "nzType", "credit-card", "nzTheme", "outline", 1, "dvdr-icn"], [1, "sub-lbl"], ["nz-icon", "", "nzType", "edit", "nzTheme", "outline", 1, "dvdr-icn"], ["nz-icon", "", "nzType", "file-text", "nzTheme", "outline", 1, "dvdr-icn"]], template: function GrantRegFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "form", 0)(1, "div", 1)(2, "div", 2)(3, "nz-form-item", 3)(4, "nz-form-label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Grant Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "nz-form-control", 5)(7, "nz-select", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, GrantRegFormComponent_nz_option_8_Template, 1, 2, "nz-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 8)(10, "nz-form-item", 3)(11, "nz-form-label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "nz-form-control", 9)(14, "nz-select", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, GrantRegFormComponent_nz_option_15_Template, 1, 2, "nz-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 1)(17, "div", 11)(18, "nz-form-item", 3)(19, "nz-form-label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Account Head");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "nz-form-control", 12)(22, "nz-select", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](23, GrantRegFormComponent_nz_option_23_Template, 1, 2, "nz-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 14)(25, "nz-form-item", 3)(26, "nz-form-label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "Year of Sanction ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "nz-form-control", 15)(29, "nz-select", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](30, GrantRegFormComponent_nz_option_30_Template, 1, 2, "nz-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 8)(32, "nz-form-item", 3)(33, "nz-form-label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "Released date ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "nz-form-control", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](36, "nz-date-picker", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "nz-divider", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](38, GrantRegFormComponent_ng_template_38_Template, 4, 0, "ng-template", null, 20, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 1)(41, "div", 14)(42, "nz-form-item", 3)(43, "nz-form-label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, "BE ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "nz-form-control", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](46, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "div", 14)(48, "nz-form-item", 3)(49, "nz-form-label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50, "Additional BE ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "nz-form-control", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](52, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "div", 14)(54, "nz-form-item", 3)(55, "nz-form-label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](56, "Revised BE ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "nz-form-control", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](58, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "div", 14)(60, "nz-form-item", 3)(61, "nz-form-label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](62, "Grants released ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "nz-form-control", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](64, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "nz-divider", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](66, GrantRegFormComponent_ng_template_66_Template, 2, 0, "ng-template", null, 30, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "div", 1)(69, "div", 31)(70, "app-text-editor", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("getEdtrEntrTxt", function GrantRegFormComponent_Template_app_text_editor_getEdtrEntrTxt_70_listener($event) { return ctx.getEdtrEntrTxt($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](71, "nz-divider", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](72, GrantRegFormComponent_ng_template_72_Template, 2, 0, "ng-template", null, 33, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "div", 1)(75, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](76, "app-documents-list", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](77, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](78, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](79, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](80, "div", 14)(81, "button", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](82, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](83, "div", 14)(84, "button", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](85, "Submit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](86, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](39);
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](67);
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](73);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.grantRegForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzSpan", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.data.grnt_lst);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzSpan", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.data.grnt_ctgry_lst);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzSpan", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.data.grnt_ctgry_acnt_hds_lst_t);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzSpan", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.data.grnt_sctn_yr_lst);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzSpan", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzText", _r4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzSpan", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzSpan", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzSpan", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzSpan", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzText", _r6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzText", _r8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("vndr_id", ctx.data.atchmnt_grnt_id)("hndlr_tx", ctx.data.atchmnt_hndlr_tx);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx.grantRegForm.valid || ctx.settings.isBtnLoading)("nzLoading", ctx.settings.isBtnLoading);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.MinLengthValidator, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_5__.NzIconDirective, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_6__.NzButtonComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_7__["ɵNzTransitionPatchDirective"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_8__.NzWaveDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_9__.NzColDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_9__.NzRowDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_10__.NzFormDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_10__.NzFormItemComponent, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_10__.NzFormLabelComponent, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_10__.NzFormControlComponent, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_11__.NzOptionComponent, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_11__.NzSelectComponent, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_12__.NzInputDirective, ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_13__.NzDatePickerComponent, ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_14__.NzDividerComponent, _shared_upload_attachments_documents_list_documents_list_component__WEBPACK_IMPORTED_MODULE_0__.DocumentsListComponent, _shared_text_editor_text_editor_component__WEBPACK_IMPORTED_MODULE_1__.TextEditorComponent], styles: [".sub-lbl[_ngcontent-%COMP%] {\n  font-size: 10px;\n}\n\n.dvdr-icn[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdyYW50LXJlZy1mb3JtLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxTdW5yaXNlJTIwVGVjaFxcYW1zX2Zyb250ZW5kXFxzcmNcXGFwcFxcYXBwc1xcd29ya19tYW5hZ2VtZW50XFxncmFudFxcZ3JhbnQtcmVnLWZvcm1cXGdyYW50LXJlZy1mb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtBQ0NKOztBREVBO0VBQ0ksc0JBQUE7QUNDSiIsImZpbGUiOiJncmFudC1yZWctZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdWItbGJse1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG59XHJcblxyXG4uZHZkci1pY257XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59IiwiLnN1Yi1sYmwge1xuICBmb250LXNpemU6IDEwcHg7XG59XG5cbi5kdmRyLWljbiB7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59Il19 */"] });


/***/ }),

/***/ 67426:
/*!************************************************************!*\
  !*** ./src/app/apps/work_management/grant/grant.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GrantModule": () => (/* binding */ GrantModule)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/shared.module */ 44466);
/* harmony import */ var src_app_providers_http_http_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/providers/http/http.interceptor */ 34477);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ng-zorro-antd/grid */ 70031);
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
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ngx-toastr */ 94817);
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! devextreme-angular */ 65821);
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! devextreme-angular */ 41661);
/* harmony import */ var _grant_routing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./grant.routing */ 94259);
/* harmony import */ var _grants_home_grants_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./grants-home/grants-home.component */ 81932);
/* harmony import */ var _grant_reg_form_grant_reg_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./grant-reg-form/grant-reg-form.component */ 32909);
/* harmony import */ var ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ng-zorro-antd/divider */ 12857);
/* harmony import */ var src_app_shared_upload_attachments_upload_attachments_modulet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/upload-attachments/upload-attachments.modulet */ 73452);
/* harmony import */ var src_app_shared_text_editor_text_editor_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/text-editor/text-editor.module */ 7798);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/core */ 22560);









































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
    ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_32__.NzDrawerModule,
    ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_33__.NzDividerModule
];
class GrantModule {
}
GrantModule.ɵfac = function GrantModule_Factory(t) { return new (t || GrantModule)(); };
GrantModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_34__["ɵɵdefineNgModule"]({ type: GrantModule });
GrantModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_34__["ɵɵdefineInjector"]({ providers: [
        ngx_toastr__WEBPACK_IMPORTED_MODULE_35__.ToastrService,
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_36__.HTTP_INTERCEPTORS, useClass: src_app_providers_http_http_interceptor__WEBPACK_IMPORTED_MODULE_1__.HttpConfigInterceptor, multi: true },
    ], imports: [src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_37__.ReactiveFormsModule,
        ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_38__.NzGridModule, antdModule, _grant_routing__WEBPACK_IMPORTED_MODULE_2__.GrantRoutingModule,
        ngx_toastr__WEBPACK_IMPORTED_MODULE_35__.ToastrModule.forRoot(),
        devextreme_angular__WEBPACK_IMPORTED_MODULE_39__.DxDataGridModule,
        devextreme_angular__WEBPACK_IMPORTED_MODULE_40__.DxButtonModule,
        src_app_shared_upload_attachments_upload_attachments_modulet__WEBPACK_IMPORTED_MODULE_5__.UploadAttachmentsModule,
        src_app_shared_text_editor_text_editor_module__WEBPACK_IMPORTED_MODULE_6__.TextEditorModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_34__["ɵɵsetNgModuleScope"](GrantModule, { declarations: [_grants_home_grants_home_component__WEBPACK_IMPORTED_MODULE_3__.GrantsHomeComponent,
        _grant_reg_form_grant_reg_form_component__WEBPACK_IMPORTED_MODULE_4__.GrantRegFormComponent], imports: [src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_37__.ReactiveFormsModule,
        ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_38__.NzGridModule, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_7__.NzButtonModule,
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
        ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_32__.NzDrawerModule,
        ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_33__.NzDividerModule, _grant_routing__WEBPACK_IMPORTED_MODULE_2__.GrantRoutingModule, ngx_toastr__WEBPACK_IMPORTED_MODULE_35__.ToastrModule, devextreme_angular__WEBPACK_IMPORTED_MODULE_39__.DxDataGridModule,
        devextreme_angular__WEBPACK_IMPORTED_MODULE_40__.DxButtonModule,
        src_app_shared_upload_attachments_upload_attachments_modulet__WEBPACK_IMPORTED_MODULE_5__.UploadAttachmentsModule,
        src_app_shared_text_editor_text_editor_module__WEBPACK_IMPORTED_MODULE_6__.TextEditorModule] }); })();


/***/ }),

/***/ 94259:
/*!*************************************************************!*\
  !*** ./src/app/apps/work_management/grant/grant.routing.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GrantRoutingModule": () => (/* binding */ GrantRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _grants_home_grants_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./grants-home/grants-home.component */ 81932);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [
    { path: '', redirectTo: 'home' },
    { path: 'home', component: _grants_home_grants_home_component__WEBPACK_IMPORTED_MODULE_0__.GrantsHomeComponent },
];
class GrantRoutingModule {
}
GrantRoutingModule.ɵfac = function GrantRoutingModule_Factory(t) { return new (t || GrantRoutingModule)(); };
GrantRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: GrantRoutingModule });
GrantRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](GrantRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 81932:
/*!*********************************************************************************!*\
  !*** ./src/app/apps/work_management/grant/grants-home/grants-home.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GrantsHomeComponent": () => (/* binding */ GrantsHomeComponent)
/* harmony export */ });
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chart.js */ 37942);
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_shared_services_apps_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/apps.service */ 53538);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ 94817);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/modal */ 81803);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/grid */ 70031);
/* harmony import */ var ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/drawer */ 38611);
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! devextreme-angular */ 65821);
/* harmony import */ var devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! devextreme-angular/ui/nested */ 18237);
/* harmony import */ var devextreme_angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! devextreme-angular/core */ 46209);
/* harmony import */ var _grant_reg_form_grant_reg_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../grant-reg-form/grant-reg-form.component */ 32909);















function GrantsHomeComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "div", 10)(2, "div", 11)(3, "div", 12)(4, "div", 10)(5, "div", 11)(6, "div", 13)(7, "div", 10)(8, "div", 14)(9, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "14");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, " Total Grants ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 17)(14, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 11)(17, "div", 13)(18, "div", 10)(19, "div", 14)(20, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "4");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, " Plain ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 17)(25, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](26, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 11)(28, "div", 13)(29, "div", 10)(30, "div", 14)(31, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, "9");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34, " SCP ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "div", 17)(36, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](37, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "div", 11)(39, "div", 13)(40, "div", 10)(41, "div", 14)(42, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](43, "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](45, " TSP ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "div", 17)(47, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](48, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "div", 11)(50, "div", 12)(51, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](52, "Monthly Grants Registration statistics");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](53, "canvas", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
} }
function GrantsHomeComponent_div_9_dxi_column_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "dxi-column", 40);
} if (rf & 2) {
    const f_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("visible", !f_r7.hide)("dataField", f_r7.field)("caption", f_r7.headerName)("alignment", f_r7.alignment)("width", f_r7.width)("allowResizing", true);
} }
function GrantsHomeComponent_div_9_div_15_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function GrantsHomeComponent_div_9_div_15_Template_div_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10); const data_r8 = restoredCtx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r9.onView(data_r8)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " View ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} }
function GrantsHomeComponent_div_9_div_17_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function GrantsHomeComponent_div_9_div_17_Template_div_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r13); const data_r11 = restoredCtx.$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r12.openSideBarEdit("edit", data_r11.data)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Edit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} }
function GrantsHomeComponent_div_9_div_19_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function GrantsHomeComponent_div_9_div_19_Template_div_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r16); const data_r14 = restoredCtx.$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r15.getFarmerIDCard(data_r14.data)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Farmer ID Card ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} }
const _c0 = function () { return [10, 25, 50, 100]; };
function GrantsHomeComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 24)(1, "div", 25)(2, "dx-data-grid", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onToolbarPreparing", function GrantsHomeComponent_div_9_Template_dx_data_grid_onToolbarPreparing_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r17.permissions.insrt_in == 1 ? ctx_r17.onToolbarPreparing($event) : false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "dxo-paging", 27)(4, "dxo-pager", 28)(5, "dxo-search-panel", 29)(6, "dxo-filter-panel", 30)(7, "dxo-header-filter", 30)(8, "dxo-group-panel", 30)(9, "dxo-grouping", 31)(10, "dxo-column-chooser", 32)(11, "dxo-export", 33)(12, "dxo-filter-row", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, GrantsHomeComponent_div_9_dxi_column_13_Template, 1, 6, "dxi-column", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "dxi-column", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, GrantsHomeComponent_div_9_div_15_Template, 3, 0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "dxi-column", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, GrantsHomeComponent_div_9_div_17_Template, 3, 0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "dxi-column", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](19, GrantsHomeComponent_div_9_div_19_Template, 3, 0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("wordWrapEnabled", true)("dataSource", ctx_r1.rowData)("remoteOperations", false)("allowColumnReordering", true)("rowAlternationEnabled", true)("allowColumnResizing", true)("showColumnLines", true)("showRowLines", true)("showBorders", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("pageSize", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("visible", true)("showPageSizeSelector", true)("allowedPageSizes", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](36, _c0))("showInfo", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("visible", true)("highlightCaseSensitive", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("visible", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("visible", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("visible", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("autoExpandAll", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("enabled", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("enabled", ctx_r1.permissions.exprt_in == 1 ? true : false)("allowExportSelectedData", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("visible", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r1.columnDefs);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("showInColumnChooser", false)("visible", ctx_r1.permissions.updt_in == 1 ? true : false)("width", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dxTemplateOf", "viewTemplate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("showInColumnChooser", false)("width", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dxTemplateOf", "EditTemplate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("showInColumnChooser", false)("visible", true)("width", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dxTemplateOf", "frmrTemplate");
} }
function GrantsHomeComponent_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "app-grant-reg-form");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} }
const _c1 = function () { return { height: "calc(100% - 55px)", overflow: "auto", "padding-bottom": "53px" }; };
class GrantsHomeComponent {
    constructor(apisrvc, toastr, fb, modal, router) {
        this.apisrvc = apisrvc;
        this.toastr = toastr;
        this.fb = fb;
        this.modal = modal;
        this.router = router;
        this.permissions = { "slct_in": 1, "insrt_in": 1, "updt_in": 1, "dlte_in": 1, "exprt_in": 1 };
        this.data = {
            sd_nv_hdng: ''
        };
        this.settings = {
            shw_sd_nv: false
        };
    }
    ngOnInit() {
        this.getBarchart();
    }
    getBarchart() {
        let tmp_data = [
            {
                "mnth_id": 1,
                "mnth_nm": "January",
                "Year": null,
                "ttlFarmers": null,
                "approvedFarmers": null,
                "pendingFarmers": null
            },
            {
                "mnth_id": 2,
                "mnth_nm": "Febuary",
                "Year": null,
                "ttlFarmers": null,
                "approvedFarmers": null,
                "pendingFarmers": null
            },
            {
                "mnth_id": 3,
                "mnth_nm": "March",
                "Year": null,
                "ttlFarmers": null,
                "approvedFarmers": null,
                "pendingFarmers": null
            },
            {
                "mnth_id": 4,
                "mnth_nm": "April",
                "Year": null,
                "ttlFarmers": null,
                "approvedFarmers": null,
                "pendingFarmers": null
            },
            {
                "mnth_id": 5,
                "mnth_nm": "May",
                "Year": null,
                "ttlFarmers": null,
                "approvedFarmers": null,
                "pendingFarmers": null
            },
            {
                "mnth_id": 6,
                "mnth_nm": "June",
                "Year": null,
                "ttlFarmers": null,
                "approvedFarmers": null,
                "pendingFarmers": null
            },
            {
                "mnth_id": 7,
                "mnth_nm": "July",
                "Year": 2022,
                "ttlFarmers": 38,
                "approvedFarmers": 35,
                "pendingFarmers": 3
            },
            {
                "mnth_id": 8,
                "mnth_nm": "August",
                "Year": null,
                "ttlFarmers": null,
                "approvedFarmers": null,
                "pendingFarmers": null
            },
            {
                "mnth_id": 9,
                "mnth_nm": "September",
                "Year": 2022,
                "ttlFarmers": 71,
                "approvedFarmers": 71,
                "pendingFarmers": 0
            },
            {
                "mnth_id": 10,
                "mnth_nm": "October",
                "Year": null,
                "ttlFarmers": null,
                "approvedFarmers": null,
                "pendingFarmers": null
            },
            {
                "mnth_id": 11,
                "mnth_nm": "November",
                "Year": null,
                "ttlFarmers": null,
                "approvedFarmers": null,
                "pendingFarmers": null
            },
            {
                "mnth_id": 12,
                "mnth_nm": "December",
                "Year": null,
                "ttlFarmers": null,
                "approvedFarmers": null,
                "pendingFarmers": null
            }
        ];
        this.ChartData = tmp_data;
        console.log(this.ChartData);
        var t1 = [];
        var t2 = [];
        var t3 = [];
        this.ChartData.forEach((item) => {
            item.pendingFarmers;
            t1.push(item.pendingFarmers);
            t2.push(item.approvedFarmers);
            t3.push(item.mnth_nm);
        });
        console.log('========================');
        console.log(t1);
        console.log(t2);
        this.stackedBarChart = new chart_js__WEBPACK_IMPORTED_MODULE_0__('stackedBarChart', {
            type: 'bar',
            data: {
                labels: t3,
                datasets: [
                    {
                        label: 'Plain',
                        data: t2,
                        borderWidth: 2,
                        backgroundColor: '#71D16B'
                    },
                    {
                        label: 'SCP',
                        data: t1,
                        borderWidth: 2,
                        backgroundColor: '#E47F06'
                    },
                    {
                        label: 'TSP',
                        data: t1,
                        borderWidth: 2,
                        backgroundColor: '#255946'
                    }
                ]
            },
            options: {
                scales: {
                    xAxes: [{
                            stacked: true,
                        }],
                    yAxes: [{
                            stacked: true,
                        }]
                },
                legend: {
                    display: true,
                    position: 'bottom'
                },
                plugins: {
                    datalabels: {
                        formatter: (value) => {
                            if (value < 0) {
                                return '';
                            }
                            return value;
                        }
                    }
                }
            }
        });
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
        this.settings.shw_sd_nv = true;
        this.data.sd_nv_hdng = "Grant Registration";
    }
    cancel(e) {
        this.settings.shw_sd_nv = false;
    }
    closeSideBar() {
        this.settings.shw_sd_nv = false;
    }
    openSideBarEdit(opt, data) {
    }
    confirm() {
    }
    onCellClick(opt, data) {
    }
    closeSideBarEdit(event) {
    }
}
GrantsHomeComponent.ɵfac = function GrantsHomeComponent_Factory(t) { return new (t || GrantsHomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_apps_service__WEBPACK_IMPORTED_MODULE_1__.AppsService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_6__.NzModalService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router)); };
GrantsHomeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: GrantsHomeComponent, selectors: [["app-grants-home"]], decls: 13, vars: 8, consts: [[1, "page-header"], [1, "row", "align-items-md-center"], [1, "col-md-12"], [1, "media"], [1, "media-body", "m-l-15", "header-border"], [1, "mb-0", "header-label"], [4, "ngIf"], ["nz-row", "", "class", "gridTop", 4, "ngIf"], [3, "nzBodyStyle", "nzMaskClosable", "nzWidth", "nzVisible", "nzTitle", "nzOnClose"], [4, "nzDrawerContent"], [1, "row"], [1, "col-md-6"], [1, "filter-card", "cstmheight"], [1, "pndngaprvalCrd"], [1, "col-md-9"], [1, "p_aprvl_cnt"], [1, "p_aprvl_nm"], [1, "col-md-3"], [1, "rightimg"], ["src", "assets/images/logo/farmer.png"], ["src", "assets/images/logo/check-mark.png"], ["src", "assets/images/logo/time.png"], ["src", "assets/images/logo/accept.png"], ["id", "stackedBarChart", 2, "height", "100%", "width", "100%"], ["nz-row", "", 1, "gridTop"], [1, "ds-card", "grid"], ["id", "gridContainer", 1, "p-8", 2, "width", "100%", 3, "wordWrapEnabled", "dataSource", "remoteOperations", "allowColumnReordering", "rowAlternationEnabled", "allowColumnResizing", "showColumnLines", "showRowLines", "showBorders", "onToolbarPreparing"], [3, "pageSize"], [3, "visible", "showPageSizeSelector", "allowedPageSizes", "showInfo"], [3, "visible", "highlightCaseSensitive"], [3, "visible"], [3, "autoExpandAll"], ["mode", "select", 3, "enabled"], ["fileName", "Change Log", 3, "enabled", "allowExportSelectedData"], [3, "visible", "dataField", "caption", "alignment", "width", "allowResizing", 4, "ngFor", "ngForOf"], ["type", "buttons", "cellTemplate", "viewTemplate", 3, "showInColumnChooser", "visible", "width"], [4, "dxTemplate", "dxTemplateOf"], ["type", "buttons", "cellTemplate", "EditTemplate", 3, "showInColumnChooser", "width"], [3, "click", 4, "dxTemplate", "dxTemplateOf"], ["type", "buttons", "cellTemplate", "frmrTemplate", 3, "showInColumnChooser", "visible", "width"], [3, "visible", "dataField", "caption", "alignment", "width", "allowResizing"], [1, "tblEdtBtn", 3, "click"], [3, "click"], [1, "cursor-pointer", "tblEdtBtn"], [1, "sdebarfilter-card", "mgnb-2", "addbeneficiaryForm"]], template: function GrantsHomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h6", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Grants Registration");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, GrantsHomeComponent_div_7_Template, 54, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, GrantsHomeComponent_div_9_Template, 20, 37, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div")(11, "nz-drawer", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("nzOnClose", function GrantsHomeComponent_Template_nz_drawer_nzOnClose_11_listener() { return ctx.closeSideBar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, GrantsHomeComponent_ng_container_12_Template, 3, 0, "ng-container", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.permissions.slct_in == 1 ? true : false);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzBodyStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](7, _c1))("nzMaskClosable", false)("nzWidth", 1050)("nzVisible", ctx.settings.shw_sd_nv)("nzTitle", ctx.data.sd_nv_hdng);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_9__.NzRowDirective, ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_10__.NzDrawerComponent, ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_10__.NzDrawerContentDirective, devextreme_angular__WEBPACK_IMPORTED_MODULE_11__.DxDataGridComponent, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_12__.DxoColumnChooserComponent, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_12__.DxiColumnComponent, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_12__.DxoHeaderFilterComponent, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_12__.DxoExportComponent, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_12__.DxoFilterPanelComponent, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_12__.DxoFilterRowComponent, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_12__.DxoGroupingComponent, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_12__.DxoGroupPanelComponent, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_12__.DxoPagerComponent, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_12__.DxoPagingComponent, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_12__.DxoSearchPanelComponent, devextreme_angular_core__WEBPACK_IMPORTED_MODULE_13__.DxTemplateDirective, _grant_reg_form_grant_reg_form_component__WEBPACK_IMPORTED_MODULE_2__.GrantRegFormComponent], styles: [".ds-card.grid {\n  max-width: 100%;\n  min-width: 100%;\n  border: 0px solid;\n  padding: 10px;\n  background: #fff;\n  border-color: rgb(240, 240, 240) !important;\n  border-radius: 8px;\n  border: 1px solid;\n  margin-top: 12px;\n}\n  .dx-datagrid .dx-datagid-headers .dx-header-row .dx-datagrid .dx-datagrid-headers .dx-header-filter {\n  outline: none;\n  background: #3190a6;\n  \n  color: #ffffff;\n  font-weight: 900;\n  font-size: 13px;\n  margin-right: 4px;\n}\n  .dx-datagrid .dx-header-filter:before {\n  content: \"\\f050\";\n  font-size: 10px;\n}\n  .dx-datagrid-headers {\n  color: #959595;\n  font-weight: normal;\n  touch-action: pinch-zoom;\n  border-bottom: 5px solid #ddd !important;\n}\n  .dx-datagrid .dx-column-indicators {\n  float: right;\n}\n  .dx-datagrid .dx-row-lines > td {\n  border-bottom: 1px solid #f5f5f5 !important;\n}\n  .dx-datagrid .dx-row > th {\n  background-color: #f9f9f9 !important;\n}\n  .dx-datagrid-borders .dx-datagrid-rowsview,   .dx-datagrid-headers + .dx-datagrid-rowsview {\n  border-top: 1px solid #f9f9f9;\n}\n  .dx-datagrid-borders > .dx-datagrid-rowsview,   .dx-datagrid-borders > .dx-datagrid-total-footer {\n  border-bottom: 1px solid #f9f9f9;\n}\n  .dx-datagrid .dx-column-lines > td {\n  border-left: 1px solid #f5f5f5 !important;\n  border-right: 1px solid #f5f5f5 !important;\n  font-size: 14px;\n  color: black;\n}\n  .dx-datagrid-content .dx-datagrid-table .dx-row .dx-command-edit {\n  width: 100px;\n  min-width: 100px;\n  cursor: pointer;\n}\n  .dx-datagrid .dx-datagrid-headers .dx-header-row > td,   .dx-datagrid .dx-datagrid-headers .dx-header-filter {\n  text-align: center !important;\n  text-transform: capitalize !important;\n}\n  .table-striped tbody tr:nth-of-type(odd) {\n  background-color: #f0f5fb;\n}\n  .dx-row .dx-column-lines .dx-header-row {\n  color: #fbfcfd;\n}\n  .dx-datagrid-rowsview .dx-row {\n  background: rgb(228, 228, 228);\n}\n  .dx-datagrid-headers .dx-datagrid-table .dx-row > td {\n  border-bottom: 1px solid #ddd;\n  color: white !important;\n}\n  .dx-texteditor-input {\n  border-radius: 0px;\n}\n  .dx-datagrid-rowsview .dx-row {\n  background: #ffffff;\n}\n  .dx-datagrid .dx-row-alt > td, .dx-datagrid[_ngcontent-%COMP%]   .dx-row-alt[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > td[_ngcontent-%COMP%] {\n  background-color: #fafafa;\n  border-top: 1px solid #f5f5f5;\n  border-bottom: 1px solid #f5f5f5;\n}\n  .ant-picker {\n  width: 100% !important;\n  border-radius: 5px !important;\n}\n  .dx-datagrid-summary-item {\n  color: white !important;\n  font-weight: 600 !important;\n}\n  .ant-select-multiple .ant-select-selection-item {\n  position: absolute !important;\n  color: black;\n  margin-top: 0px !important;\n  margin-right: 0px !important;\n  margin-bottom: 0px !important;\n  padding: 0 0px 0 0px !important;\n  background: #ffffff !important;\n  border: 0px solid #f0f0f0 !important;\n}\n  .dx-datagrid-filter-row .dx-editor-cell .dx-editor-with-menu .dx-menu {\n  display: block !important;\n}\n  .dx-datagrid-content .dx-datagrid-table {\n  border-collapse: collapse;\n  border-spacing: 0;\n  background: #1969cd;\n  margin: 0;\n  color: white;\n  cursor: pointer;\n  max-width: 10px;\n}\n  .dx-datagrid-content .dx-datagrid-table [class*=column] + [class*=column]:last-child {\n  float: none;\n  background-color: white;\n}\n.sbmtBtm[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  background-color: #e6eff9;\n  border-radius: 5px;\n  float: right;\n}\n.inptLbl[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  color: #3b3d3d;\n  margin-bottom: 2px;\n}\n  .dx-button-mode-contained {\n  background-color: #fff !important;\n  border-color: #ddd !important;\n  color: #145db6 !important;\n  box-shadow: 0 4px 12px 0 rgba(123, 149, 153, 0.36) !important;\n  font-weight: 700 !important;\n}\n  .dx-button-mode-contained .dx-icon {\n  color: #145db6 !important;\n}\n.ant-input[_ngcontent-%COMP%] {\n  font-feature-settings: \"tnum\";\n  position: relative;\n  display: inline-block;\n  padding: 4px 11px;\n  font-size: 14px;\n  line-height: 1.5715;\n  background-color: #fff;\n  border: 1px solid #d9d9d9;\n  border-radius: 5px;\n  transition: all 0.3s;\n}\n.ant-select-single[_ngcontent-%COMP%]:not(.ant-select-customize-input)   .ant-select-selector[_ngcontent-%COMP%] {\n  position: relative;\n  background-color: #fff;\n  border: 1px solid #d9d9d9;\n  border-radius: 5px;\n  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n  width: 100%;\n  height: 32px;\n  padding: 0 11px;\n}\n.stpopts[_ngcontent-%COMP%] {\n  overflow: auto;\n  height: 428px;\n  margin-top: 10px;\n}\n.stpopthdr[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: black;\n  background-color: #f6f6f6;\n  font-size: 14px;\n}\n.stpoptsmainhng[_ngcontent-%COMP%] {\n  font-size: 17px;\n  font-weight: 500;\n  color: #c62828 !important;\n}\n.inptLbl[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  color: #3b3d3d;\n  margin-bottom: 2px;\n}\nnz-select[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.frmrw[_ngcontent-%COMP%] {\n  margin-bottom: 8px !important;\n}\n.addDesCrptn[_ngcontent-%COMP%] {\n  margin: 0px auto;\n  cursor: pointer;\n}\n.mnuprflMrgn[_ngcontent-%COMP%] {\n  margin-bottom: 8px !important;\n}\n.ant-form-item[_ngcontent-%COMP%] {\n  margin: 0 0 4px !important;\n}\n.inpf[_ngcontent-%COMP%] {\n  color: blue;\n}\n.uploadImgg[_ngcontent-%COMP%] {\n  height: 50px;\n  padding-left: 50px;\n  padding-right: 50px;\n  margin: 20px auto;\n  border: 2px dashed #1C8ADB;\n  border-radius: 10px;\n  font-size: 27px;\n  background-color: #f6fbff;\n  color: #1165a4;\n  text-align: center;\n  cursor: pointer;\n}\n.rghtbrdr[_ngcontent-%COMP%] {\n  border-right: 1px dashed #b8b8b8;\n}\n.btmbrdr[_ngcontent-%COMP%] {\n  border-bottom: 1px dashed #b8b8b8;\n}\n.filter-card[_ngcontent-%COMP%] {\n  border-radius: 0;\n  box-shadow: 0 1px 15px 1px rgba(69, 65, 78, 0.08) !important;\n  background-color: #fff;\n  padding: 8px 33px 16px 33px;\n}\n.slwmftouploadform[_ngcontent-%COMP%]   nz-form-label[_ngcontent-%COMP%] {\n  padding-left: 2px !important;\n}\n.pndngaprvalCrd[_ngcontent-%COMP%] {\n  box-shadow: 0 1px 15px 1px rgba(69, 65, 78, 0.08) !important;\n  padding: 11px 14px;\n  margin: 10px 0px;\n  border: 2px solid #bfe7bf;\n  border-radius: 4px;\n  background: azure;\n}\n.pndngaprvalCrd[_ngcontent-%COMP%]   .p_aprvl_cnt[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n  color: #334155;\n}\n.pndngaprvalCrd[_ngcontent-%COMP%]   .p_aprvl_nm[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n}\n.avtr_cls[_ngcontent-%COMP%] {\n  width: 110px;\n  height: 115px;\n  line-height: 110px;\n  font-size: 48px;\n}\n.rightimg[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.cstmheight[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  border-top: 2px solid #255946;\n}\n@media only screen and (min-width: 1500px) and (max-width: 2500px) {\n  .rightimg[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 70%;\n  }\n  .cstmheight[_ngcontent-%COMP%] {\n    height: 425px;\n    border-radius: 8px;\n  }\n  .pndngaprvalCrd[_ngcontent-%COMP%] {\n    box-shadow: 0 1px 15px 1px rgba(69, 65, 78, 0.08) !important;\n    padding: 20px 14px;\n    margin: 10px 0px;\n    border: 1px solid #bfe7bf;\n    border-radius: 4px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdyYW50cy1ob21lLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxTdW5yaXNlJTIwVGVjaFxcYW1zX2Zyb250ZW5kXFxzcmNcXGFwcFxcYXBwc1xcd29ya19tYW5hZ2VtZW50XFxncmFudFxcZ3JhbnRzLWhvbWVcXGdyYW50cy1ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVFO0VBQ0UsZUFBQTtFQUNBLGVBQUE7RUFFQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLDJDQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDREo7QURLRTtFQUNFLGFBQUE7RUFFQSxtQkFBQTtFQUNBLGlEQUFBO0VBQ0EsY0FBQTtFQUVBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDTEo7QURPRTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtBQ0xKO0FET0U7RUFDRSxjQUFBO0VBQ0EsbUJBQUE7RUFFQSx3QkFBQTtFQUNBLHdDQUFBO0FDTEo7QURPRTtFQUNFLFlBQUE7QUNMSjtBRE9FO0VBQ0UsMkNBQUE7QUNMSjtBRE9FO0VBQ0Usb0NBQUE7QUNMSjtBRE9FOztFQUVFLDZCQUFBO0FDTEo7QURRRTs7RUFFRSxnQ0FBQTtBQ05KO0FEUUU7RUFDRSx5Q0FBQTtFQUNBLDBDQUFBO0VBQ0EsZUFBQTtFQUVBLFlBQUE7QUNQSjtBRFVFO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ1JKO0FEV0U7O0VBRUUsNkJBQUE7RUFDQSxxQ0FBQTtBQ1RKO0FEZ0JFO0VBQ0UseUJBQUE7QUNkSjtBRGdCRTtFQUNFLGNBQUE7QUNkSjtBRGlCRTtFQUNFLDhCQUFBO0FDZko7QUR3QkE7RUFDRSw2QkFBQTtFQUNBLHVCQUFBO0FDckJGO0FEdUJBO0VBQ0Usa0JBQUE7QUNwQkY7QURzQkE7RUFDRSxtQkFBQTtBQ25CRjtBRHFCQTs7RUFFRSx5QkFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0NBQUE7QUNsQkY7QURvQkE7RUFDRSxzQkFBQTtFQUNBLDZCQUFBO0FDakJGO0FEbUJBO0VBQ0UsdUJBQUE7RUFHQSwyQkFBQTtBQ25CRjtBRHFCQTtFQUNFLDZCQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtFQUNBLCtCQUFBO0VBQ0EsOEJBQUE7RUFDQSxvQ0FBQTtBQ2RGO0FEZ0JBO0VBQ0UseUJBQUE7QUNiRjtBRGVBO0VBQ0UseUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQ1pGO0FEY0E7RUFDRSxXQUFBO0VBQ0EsdUJBQUE7QUNYRjtBRGFBO0VBQ0UsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQ1ZGO0FEWUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUNURjtBRFdBO0VBQ0UsaUNBQUE7RUFDQSw2QkFBQTtFQUNBLHlCQUFBO0VBQ0EsNkRBQUE7RUFDQSwyQkFBQTtBQ1JGO0FEVUE7RUFDRSx5QkFBQTtBQ1BGO0FEU0E7RUFDRSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0FDTkY7QURRQTtFQUNFLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EseURBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNMRjtBRE9BO0VBQ0UsY0FBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQ0pGO0FET0E7RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7QUNKRjtBRE1BO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7QUNIRjtBREtBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDRkY7QURLQTtFQUNFLFdBQUE7QUNGRjtBRElBO0VBQ0UsNkJBQUE7QUNERjtBREdBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0FDQUY7QURFQTtFQUNFLDZCQUFBO0FDQ0Y7QURDQTtFQUNFLDBCQUFBO0FDRUY7QURBQTtFQUNFLFdBQUE7QUNHRjtBRERBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0YsbUJBQUE7RUFDRSxpQkFBQTtFQUNBLDBCQUFBO0VBQ0QsbUJBQUE7RUFDQyxlQUFBO0VBQ0QseUJBQUE7RUFDQyxjQUFBO0VBQ0Qsa0JBQUE7RUFDQSxlQUFBO0FDSUQ7QURGQTtFQUNFLGdDQUFBO0FDS0Y7QURIQTtFQUNFLGlDQUFBO0FDTUY7QURKQTtFQUNFLGdCQUFBO0VBQ0EsNERBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0FDT0Y7QURKRTtFQUNFLDRCQUFBO0FDT0o7QURKQTtFQUNFLDREQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ09GO0FETkU7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDUUo7QURORTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQ1FKO0FETEE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ1FGO0FETkE7RUFDRSxXQUFBO0FDU0Y7QUROQTtFQUNFLGtCQUFBO0VBQ0EsNkJBQUE7QUNTRjtBRFBBO0VBQ0U7SUFDRSxVQUFBO0VDVUY7RURSQTtJQUNFLGFBQUE7SUFDQyxrQkFBQTtFQ1VIO0VEUEE7SUFDRSw0REFBQTtJQUNBLGtCQUFBO0lBQ0EsZ0JBQUE7SUFDQSx5QkFBQTtJQUNBLGtCQUFBO0VDU0Y7QUFDRiIsImZpbGUiOiJncmFudHMtaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vZGV2IGV4dHJlbWUgZ3JpZCBzdHlsZXNcclxuOjpuZy1kZWVwIHtcclxuICAuZHMtY2FyZC5ncmlkIHtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIG1pbi13aWR0aDogMTAwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIGJvcmRlcjogMHB4IHNvbGlkO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYigyNDAgMjQwIDI0MCkgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xyXG4gICAgbWFyZ2luLXRvcDogMTJweDtcclxuICAgIC8vIGJhY2tncm91bmQ6ICNmZmZjZjchaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmR4LWRhdGFncmlkIC5keC1kYXRhZ2lkLWhlYWRlcnMgLmR4LWhlYWRlci1yb3cgLmR4LWRhdGFncmlkIC5keC1kYXRhZ3JpZC1oZWFkZXJzIC5keC1oZWFkZXItZmlsdGVyIHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAvLyBiYWNrZ3JvdW5kOiAjMmM1Njg1O1xyXG4gICAgYmFja2dyb3VuZDogIzMxOTBhNjtcclxuICAgIC8qIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCAjZGRkZGRkICFpbXBvcnRhbnQ7ICovXHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIC8vIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDRweDtcclxuICB9XHJcbiAgLmR4LWRhdGFncmlkIC5keC1oZWFkZXItZmlsdGVyOmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiBcIlxcZjA1MFwiO1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gIH1cclxuICAuZHgtZGF0YWdyaWQtaGVhZGVycyB7XHJcbiAgICBjb2xvcjogIzk1OTU5NTtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAtbXMtdG91Y2gtYWN0aW9uOiBwaW5jaC16b29tO1xyXG4gICAgdG91Y2gtYWN0aW9uOiBwaW5jaC16b29tO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkICNkZGQgIWltcG9ydGFudDtcclxuICB9XHJcbiAgLmR4LWRhdGFncmlkIC5keC1jb2x1bW4taW5kaWNhdG9ycyB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgfVxyXG4gIC5keC1kYXRhZ3JpZCAuZHgtcm93LWxpbmVzID4gdGQge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmNWY1ZjUgIWltcG9ydGFudDtcclxuICB9XHJcbiAgLmR4LWRhdGFncmlkIC5keC1yb3cgPiB0aCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5keC1kYXRhZ3JpZC1ib3JkZXJzIC5keC1kYXRhZ3JpZC1yb3dzdmlldyxcclxuICAuZHgtZGF0YWdyaWQtaGVhZGVycyArIC5keC1kYXRhZ3JpZC1yb3dzdmlldyB7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2Y5ZjlmOTtcclxuICB9XHJcblxyXG4gIC5keC1kYXRhZ3JpZC1ib3JkZXJzID4gLmR4LWRhdGFncmlkLXJvd3N2aWV3LFxyXG4gIC5keC1kYXRhZ3JpZC1ib3JkZXJzID4gLmR4LWRhdGFncmlkLXRvdGFsLWZvb3RlciB7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Y5ZjlmOTtcclxuICB9XHJcbiAgLmR4LWRhdGFncmlkIC5keC1jb2x1bW4tbGluZXMgPiB0ZCB7XHJcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNmNWY1ZjUgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNmNWY1ZjUgIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIC8vIGNvbG9yOiB3aGl0ZTtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICB9XHJcblxyXG4gIC5keC1kYXRhZ3JpZC1jb250ZW50IC5keC1kYXRhZ3JpZC10YWJsZSAuZHgtcm93IC5keC1jb21tYW5kLWVkaXQge1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgbWluLXdpZHRoOiAxMDBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcblxyXG4gIC5keC1kYXRhZ3JpZCAuZHgtZGF0YWdyaWQtaGVhZGVycyAuZHgtaGVhZGVyLXJvdyA+IHRkLFxyXG4gIC5keC1kYXRhZ3JpZCAuZHgtZGF0YWdyaWQtaGVhZGVycyAuZHgtaGVhZGVyLWZpbHRlciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAvLyAuZHgtZGF0YWdyaWQtY29udGVudCAuZHgtZGF0YWdyaWQtdGFibGUgLmR4LXJvdyA+IHRkOmZpcnN0LWNoaWxkLCAuZHgtZGF0YWdyaWQtY29udGVudCAuZHgtZGF0YWdyaWQtdGFibGUgLmR4LXJvdyA+IHRyID4gdGQ6Zmlyc3QtY2hpbGQge1xyXG4gIC8vICB0ZXh0LWFsaWduOiBjZW50ZXIhaW1wb3J0YW50O1xyXG4gIC8vIH1cclxuXHJcbiAgLnRhYmxlLXN0cmlwZWQgdGJvZHkgdHI6bnRoLW9mLXR5cGUob2RkKSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmNWZiO1xyXG4gIH1cclxuICAuZHgtcm93IC5keC1jb2x1bW4tbGluZXMgLmR4LWhlYWRlci1yb3cge1xyXG4gICAgY29sb3I6ICNmYmZjZmQ7XHJcbiAgICAvLyBjb2xvciA6IGJsYWNrO1xyXG4gIH1cclxuICAuZHgtZGF0YWdyaWQtcm93c3ZpZXcgLmR4LXJvdyB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjI4LCAyMjgsIDIyOCk7XHJcbiAgfVxyXG4gIC8vIDo6bmctZGVlcCAuZHgtZGF0YWdyaWQtc3VtbWFyeS1pdGVtIHtcclxuICAvLyAgICAgY29sb3I6IHJnYmEoNTEsIDUxLCA1MSwgMC43KTtcclxuICAvLyAgICAgYmFja2dyb3VuZC1jb2xvcjogYnVybHl3b29kO1xyXG4gIC8vICAgICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XHJcbiAgLy8gfVxyXG59XHJcblxyXG46Om5nLWRlZXAgLmR4LWRhdGFncmlkLWhlYWRlcnMgLmR4LWRhdGFncmlkLXRhYmxlIC5keC1yb3cgPiB0ZCB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XHJcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbn1cclxuOjpuZy1kZWVwIC5keC10ZXh0ZWRpdG9yLWlucHV0IHtcclxuICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbn1cclxuOjpuZy1kZWVwIC5keC1kYXRhZ3JpZC1yb3dzdmlldyAuZHgtcm93IHtcclxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG59XHJcbjo6bmctZGVlcCAuZHgtZGF0YWdyaWQgLmR4LXJvdy1hbHQgPiB0ZCxcclxuLmR4LWRhdGFncmlkIC5keC1yb3ctYWx0ID4gdHIgPiB0ZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgI2Y1ZjVmNTtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Y1ZjVmNTtcclxufVxyXG46Om5nLWRlZXAgLmFudC1waWNrZXIge1xyXG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuOjpuZy1kZWVwIC5keC1kYXRhZ3JpZC1zdW1tYXJ5LWl0ZW0ge1xyXG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG59XHJcbjo6bmctZGVlcCAuZHgtZGF0YWdyaWQtc3VtbWFyeS1pdGVtIHtcclxuICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XHJcbn1cclxuOjpuZy1kZWVwIC5hbnQtc2VsZWN0LW11bHRpcGxlIC5hbnQtc2VsZWN0LXNlbGVjdGlvbi1pdGVtIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgbWFyZ2luLXRvcDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLXJpZ2h0OiAwcHggIWltcG9ydGFudDtcclxuICBtYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudDtcclxuICBwYWRkaW5nOiAwIDBweCAwIDBweCAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQ6ICNmZmZmZmYgIWltcG9ydGFudDtcclxuICBib3JkZXI6IDBweCBzb2xpZCAjZjBmMGYwICFpbXBvcnRhbnQ7XHJcbn1cclxuOjpuZy1kZWVwIC5keC1kYXRhZ3JpZC1maWx0ZXItcm93IC5keC1lZGl0b3ItY2VsbCAuZHgtZWRpdG9yLXdpdGgtbWVudSAuZHgtbWVudSB7XHJcbiAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcclxufVxyXG46Om5nLWRlZXAgLmR4LWRhdGFncmlkLWNvbnRlbnQgLmR4LWRhdGFncmlkLXRhYmxlIHtcclxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gIGJvcmRlci1zcGFjaW5nOiAwO1xyXG4gIGJhY2tncm91bmQ6ICMxOTY5Y2Q7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgbWF4LXdpZHRoOiAxMHB4O1xyXG59XHJcbjo6bmctZGVlcCAuZHgtZGF0YWdyaWQtY29udGVudCAuZHgtZGF0YWdyaWQtdGFibGUgW2NsYXNzKj1cImNvbHVtblwiXSArIFtjbGFzcyo9XCJjb2x1bW5cIl06bGFzdC1jaGlsZCB7XHJcbiAgZmxvYXQ6IG5vbmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuLnNibXRCdG0ge1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZWZmOTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcbi5pbnB0TGJsIHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBjb2xvcjogIzNiM2QzZDtcclxuICBtYXJnaW4tYm90dG9tOiAycHg7XHJcbn1cclxuOjpuZy1kZWVwIC5keC1idXR0b24tbW9kZS1jb250YWluZWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxuICBib3JkZXItY29sb3I6ICNkZGQgIWltcG9ydGFudDtcclxuICBjb2xvcjogIzE0NWRiNiAhaW1wb3J0YW50O1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDEycHggMCByZ2JhKDEyMywgMTQ5LCAxNTMsIDAuMzYpICFpbXBvcnRhbnQ7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMCAhaW1wb3J0YW50O1xyXG59XHJcbjo6bmctZGVlcCAuZHgtYnV0dG9uLW1vZGUtY29udGFpbmVkIC5keC1pY29uIHtcclxuICBjb2xvcjogIzE0NWRiNiAhaW1wb3J0YW50O1xyXG59XHJcbi5hbnQtaW5wdXQge1xyXG4gIGZvbnQtZmVhdHVyZS1zZXR0aW5nczogXCJ0bnVtXCI7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBwYWRkaW5nOiA0cHggMTFweDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNTcxNTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkOWQ5ZDk7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG59XHJcbi5hbnQtc2VsZWN0LXNpbmdsZTpub3QoLmFudC1zZWxlY3QtY3VzdG9taXplLWlucHV0KSAuYW50LXNlbGVjdC1zZWxlY3RvciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2Q5ZDlkOTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMzJweDtcclxuICBwYWRkaW5nOiAwIDExcHg7XHJcbn1cclxuLnN0cG9wdHMge1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG4gIGhlaWdodDogNDI4cHg7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuLnN0cG9wdGhkciB7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjZmNjtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuLnN0cG9wdHNtYWluaG5nIHtcclxuICBmb250LXNpemU6IDE3cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBjb2xvcjogI2M2MjgyOCAhaW1wb3J0YW50O1xyXG59XHJcbi5pbnB0TGJsIHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBjb2xvcjogIzNiM2QzZDtcclxuICBtYXJnaW4tYm90dG9tOiAycHg7XHJcbn1cclxuXHJcbm56LXNlbGVjdCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmZybXJ3IHtcclxuICBtYXJnaW4tYm90dG9tOiA4cHggIWltcG9ydGFudDtcclxufVxyXG4uYWRkRGVzQ3JwdG4ge1xyXG4gIG1hcmdpbjogMHB4IGF1dG87XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5tbnVwcmZsTXJnbiB7XHJcbiAgbWFyZ2luLWJvdHRvbTogOHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmFudC1mb3JtLWl0ZW0ge1xyXG4gIG1hcmdpbjogMCAwIDRweCAhaW1wb3J0YW50O1xyXG59XHJcbi5pbnBme1xyXG4gIGNvbG9yOmJsdWU7XHJcbn1cclxuLnVwbG9hZEltZ2d7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIHBhZGRpbmctbGVmdDogNTBweDtcclxucGFkZGluZy1yaWdodDogNTBweDtcclxuICBtYXJnaW46IDIwcHggYXV0bztcclxuICBib3JkZXI6IDJweCBkYXNoZWQgIzFDOEFEQjtcclxuIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgZm9udC1zaXplOiAyN3B4O1xyXG4gYmFja2dyb3VuZC1jb2xvcjogI2Y2ZmJmZjtcclxuICBjb2xvcjogIzExNjVhNDtcclxuIHRleHQtYWxpZ246IGNlbnRlcjtcclxuIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4ucmdodGJyZHIge1xyXG4gIGJvcmRlci1yaWdodDogMXB4IGRhc2hlZCAjYjhiOGI4O1xyXG59XHJcbi5idG1icmRyIHtcclxuICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkICNiOGI4Yjg7XHJcbn1cclxuLmZpbHRlci1jYXJkIHtcclxuICBib3JkZXItcmFkaXVzOiAwO1xyXG4gIGJveC1zaGFkb3c6IDAgMXB4IDE1cHggMXB4IHJnYmEoNjksIDY1LCA3OCwgMC4wOCkgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIHBhZGRpbmc6IDhweCAzM3B4IDE2cHggMzNweDtcclxufVxyXG4uc2x3bWZ0b3VwbG9hZGZvcm0ge1xyXG4gIG56LWZvcm0tbGFiZWwge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAycHggIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuLnBuZG5nYXBydmFsQ3JkIHtcclxuICBib3gtc2hhZG93OiAwIDFweCAxNXB4IDFweCByZ2IoNjkgNjUgNzggLyA4JSkgIWltcG9ydGFudDtcclxuICBwYWRkaW5nOiAxMXB4IDE0cHg7XHJcbiAgbWFyZ2luOiAxMHB4IDBweDtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjYmZlN2JmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBiYWNrZ3JvdW5kOiBhenVyZTtcclxuICAucF9hcHJ2bF9jbnQge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGNvbG9yOiAjMzM0MTU1O1xyXG4gIH1cclxuICAucF9hcHJ2bF9ubSB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gIH1cclxufVxyXG4uYXZ0cl9jbHN7XHJcbiAgd2lkdGg6IDExMHB4O1xyXG4gIGhlaWdodDogMTE1cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDExMHB4O1xyXG4gIGZvbnQtc2l6ZTogNDhweDtcclxufVxyXG4ucmlnaHRpbWcgaW1nIHtcclxuICB3aWR0aDoxMDAlO1xyXG59XHJcblxyXG4uY3N0bWhlaWdodHtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICMyNTU5NDY7XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOjE1MDBweCkgYW5kIChtYXgtd2lkdGg6MjUwMHB4KXtcclxuICAucmlnaHRpbWcgaW1nIHtcclxuICAgIHdpZHRoOjcwJTtcclxuICB9XHJcbiAgLmNzdG1oZWlnaHR7XHJcbiAgICBoZWlnaHQ6IDQyNXB4O1xyXG4gICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICB9XHJcblxyXG4gIC5wbmRuZ2FwcnZhbENyZCB7XHJcbiAgICBib3gtc2hhZG93OiAwIDFweCAxNXB4IDFweCByZ2IoNjkgNjUgNzggLyA4JSkgIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmc6IDIwcHggMTRweDtcclxuICAgIG1hcmdpbjogMTBweCAwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYmZlN2JmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcbn0iLCI6Om5nLWRlZXAgLmRzLWNhcmQuZ3JpZCB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWluLXdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJvcmRlcjogMHB4IHNvbGlkO1xuICBwYWRkaW5nOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItY29sb3I6IHJnYigyNDAsIDI0MCwgMjQwKSAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkO1xuICBtYXJnaW4tdG9wOiAxMnB4O1xufVxuOjpuZy1kZWVwIC5keC1kYXRhZ3JpZCAuZHgtZGF0YWdpZC1oZWFkZXJzIC5keC1oZWFkZXItcm93IC5keC1kYXRhZ3JpZCAuZHgtZGF0YWdyaWQtaGVhZGVycyAuZHgtaGVhZGVyLWZpbHRlciB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJhY2tncm91bmQ6ICMzMTkwYTY7XG4gIC8qIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCAjZGRkZGRkICFpbXBvcnRhbnQ7ICovXG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250LXdlaWdodDogOTAwO1xuICBmb250LXNpemU6IDEzcHg7XG4gIG1hcmdpbi1yaWdodDogNHB4O1xufVxuOjpuZy1kZWVwIC5keC1kYXRhZ3JpZCAuZHgtaGVhZGVyLWZpbHRlcjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjA1MFwiO1xuICBmb250LXNpemU6IDEwcHg7XG59XG46Om5nLWRlZXAgLmR4LWRhdGFncmlkLWhlYWRlcnMge1xuICBjb2xvcjogIzk1OTU5NTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgLW1zLXRvdWNoLWFjdGlvbjogcGluY2gtem9vbTtcbiAgdG91Y2gtYWN0aW9uOiBwaW5jaC16b29tO1xuICBib3JkZXItYm90dG9tOiA1cHggc29saWQgI2RkZCAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIC5keC1kYXRhZ3JpZCAuZHgtY29sdW1uLWluZGljYXRvcnMge1xuICBmbG9hdDogcmlnaHQ7XG59XG46Om5nLWRlZXAgLmR4LWRhdGFncmlkIC5keC1yb3ctbGluZXMgPiB0ZCB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjVmNWY1ICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgLmR4LWRhdGFncmlkIC5keC1yb3cgPiB0aCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOWY5ZjkgIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCAuZHgtZGF0YWdyaWQtYm9yZGVycyAuZHgtZGF0YWdyaWQtcm93c3ZpZXcsXG46Om5nLWRlZXAgLmR4LWRhdGFncmlkLWhlYWRlcnMgKyAuZHgtZGF0YWdyaWQtcm93c3ZpZXcge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2Y5ZjlmOTtcbn1cbjo6bmctZGVlcCAuZHgtZGF0YWdyaWQtYm9yZGVycyA+IC5keC1kYXRhZ3JpZC1yb3dzdmlldyxcbjo6bmctZGVlcCAuZHgtZGF0YWdyaWQtYm9yZGVycyA+IC5keC1kYXRhZ3JpZC10b3RhbC1mb290ZXIge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Y5ZjlmOTtcbn1cbjo6bmctZGVlcCAuZHgtZGF0YWdyaWQgLmR4LWNvbHVtbi1saW5lcyA+IHRkIHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZjVmNWY1ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNmNWY1ZjUgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogYmxhY2s7XG59XG46Om5nLWRlZXAgLmR4LWRhdGFncmlkLWNvbnRlbnQgLmR4LWRhdGFncmlkLXRhYmxlIC5keC1yb3cgLmR4LWNvbW1hbmQtZWRpdCB7XG4gIHdpZHRoOiAxMDBweDtcbiAgbWluLXdpZHRoOiAxMDBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuOjpuZy1kZWVwIC5keC1kYXRhZ3JpZCAuZHgtZGF0YWdyaWQtaGVhZGVycyAuZHgtaGVhZGVyLXJvdyA+IHRkLFxuOjpuZy1kZWVwIC5keC1kYXRhZ3JpZCAuZHgtZGF0YWdyaWQtaGVhZGVycyAuZHgtaGVhZGVyLWZpbHRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZSAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIC50YWJsZS1zdHJpcGVkIHRib2R5IHRyOm50aC1vZi10eXBlKG9kZCkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmNWZiO1xufVxuOjpuZy1kZWVwIC5keC1yb3cgLmR4LWNvbHVtbi1saW5lcyAuZHgtaGVhZGVyLXJvdyB7XG4gIGNvbG9yOiAjZmJmY2ZkO1xufVxuOjpuZy1kZWVwIC5keC1kYXRhZ3JpZC1yb3dzdmlldyAuZHgtcm93IHtcbiAgYmFja2dyb3VuZDogcmdiKDIyOCwgMjI4LCAyMjgpO1xufVxuXG46Om5nLWRlZXAgLmR4LWRhdGFncmlkLWhlYWRlcnMgLmR4LWRhdGFncmlkLXRhYmxlIC5keC1yb3cgPiB0ZCB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwIC5keC10ZXh0ZWRpdG9yLWlucHV0IHtcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xufVxuXG46Om5nLWRlZXAgLmR4LWRhdGFncmlkLXJvd3N2aWV3IC5keC1yb3cge1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xufVxuXG46Om5nLWRlZXAgLmR4LWRhdGFncmlkIC5keC1yb3ctYWx0ID4gdGQsXG4uZHgtZGF0YWdyaWQgLmR4LXJvdy1hbHQgPiB0ciA+IHRkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNmNWY1ZjU7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjVmNWY1O1xufVxuXG46Om5nLWRlZXAgLmFudC1waWNrZXIge1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiA1cHggIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwIC5keC1kYXRhZ3JpZC1zdW1tYXJ5LWl0ZW0ge1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwIC5keC1kYXRhZ3JpZC1zdW1tYXJ5LWl0ZW0ge1xuICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCAuYW50LXNlbGVjdC1tdWx0aXBsZSAuYW50LXNlbGVjdC1zZWxlY3Rpb24taXRlbSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xuICBjb2xvcjogYmxhY2s7XG4gIG1hcmdpbi10b3A6IDBweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudDtcbiAgcGFkZGluZzogMCAwcHggMCAwcHggIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZiAhaW1wb3J0YW50O1xuICBib3JkZXI6IDBweCBzb2xpZCAjZjBmMGYwICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCAuZHgtZGF0YWdyaWQtZmlsdGVyLXJvdyAuZHgtZWRpdG9yLWNlbGwgLmR4LWVkaXRvci13aXRoLW1lbnUgLmR4LW1lbnUge1xuICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAgLmR4LWRhdGFncmlkLWNvbnRlbnQgLmR4LWRhdGFncmlkLXRhYmxlIHtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XG4gIGJhY2tncm91bmQ6ICMxOTY5Y2Q7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6IHdoaXRlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1heC13aWR0aDogMTBweDtcbn1cblxuOjpuZy1kZWVwIC5keC1kYXRhZ3JpZC1jb250ZW50IC5keC1kYXRhZ3JpZC10YWJsZSBbY2xhc3MqPWNvbHVtbl0gKyBbY2xhc3MqPWNvbHVtbl06bGFzdC1jaGlsZCB7XG4gIGZsb2F0OiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLnNibXRCdG0ge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZlZmY5O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuLmlucHRMYmwge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjM2IzZDNkO1xuICBtYXJnaW4tYm90dG9tOiAycHg7XG59XG5cbjo6bmctZGVlcCAuZHgtYnV0dG9uLW1vZGUtY29udGFpbmVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICBib3JkZXItY29sb3I6ICNkZGQgIWltcG9ydGFudDtcbiAgY29sb3I6ICMxNDVkYjYgIWltcG9ydGFudDtcbiAgYm94LXNoYWRvdzogMCA0cHggMTJweCAwIHJnYmEoMTIzLCAxNDksIDE1MywgMC4zNikgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDcwMCAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAgLmR4LWJ1dHRvbi1tb2RlLWNvbnRhaW5lZCAuZHgtaWNvbiB7XG4gIGNvbG9yOiAjMTQ1ZGI2ICFpbXBvcnRhbnQ7XG59XG5cbi5hbnQtaW5wdXQge1xuICBmb250LWZlYXR1cmUtc2V0dGluZ3M6IFwidG51bVwiO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogNHB4IDExcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDEuNTcxNTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2Q5ZDlkOTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbn1cblxuLmFudC1zZWxlY3Qtc2luZ2xlOm5vdCguYW50LXNlbGVjdC1jdXN0b21pemUtaW5wdXQpIC5hbnQtc2VsZWN0LXNlbGVjdG9yIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZDlkOWQ5O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMzJweDtcbiAgcGFkZGluZzogMCAxMXB4O1xufVxuXG4uc3Rwb3B0cyB7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBoZWlnaHQ6IDQyOHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4uc3Rwb3B0aGRyIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6IGJsYWNrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmNmY2O1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5zdHBvcHRzbWFpbmhuZyB7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6ICNjNjI4MjggIWltcG9ydGFudDtcbn1cblxuLmlucHRMYmwge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjM2IzZDNkO1xuICBtYXJnaW4tYm90dG9tOiAycHg7XG59XG5cbm56LXNlbGVjdCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZnJtcncge1xuICBtYXJnaW4tYm90dG9tOiA4cHggIWltcG9ydGFudDtcbn1cblxuLmFkZERlc0NycHRuIHtcbiAgbWFyZ2luOiAwcHggYXV0bztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubW51cHJmbE1yZ24ge1xuICBtYXJnaW4tYm90dG9tOiA4cHggIWltcG9ydGFudDtcbn1cblxuLmFudC1mb3JtLWl0ZW0ge1xuICBtYXJnaW46IDAgMCA0cHggIWltcG9ydGFudDtcbn1cblxuLmlucGYge1xuICBjb2xvcjogYmx1ZTtcbn1cblxuLnVwbG9hZEltZ2cge1xuICBoZWlnaHQ6IDUwcHg7XG4gIHBhZGRpbmctbGVmdDogNTBweDtcbiAgcGFkZGluZy1yaWdodDogNTBweDtcbiAgbWFyZ2luOiAyMHB4IGF1dG87XG4gIGJvcmRlcjogMnB4IGRhc2hlZCAjMUM4QURCO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBmb250LXNpemU6IDI3cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNmZiZmY7XG4gIGNvbG9yOiAjMTE2NWE0O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnJnaHRicmRyIHtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggZGFzaGVkICNiOGI4Yjg7XG59XG5cbi5idG1icmRyIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCAjYjhiOGI4O1xufVxuXG4uZmlsdGVyLWNhcmQge1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBib3gtc2hhZG93OiAwIDFweCAxNXB4IDFweCByZ2JhKDY5LCA2NSwgNzgsIDAuMDgpICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDhweCAzM3B4IDE2cHggMzNweDtcbn1cblxuLnNsd21mdG91cGxvYWRmb3JtIG56LWZvcm0tbGFiZWwge1xuICBwYWRkaW5nLWxlZnQ6IDJweCAhaW1wb3J0YW50O1xufVxuXG4ucG5kbmdhcHJ2YWxDcmQge1xuICBib3gtc2hhZG93OiAwIDFweCAxNXB4IDFweCByZ2JhKDY5LCA2NSwgNzgsIDAuMDgpICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDExcHggMTRweDtcbiAgbWFyZ2luOiAxMHB4IDBweDtcbiAgYm9yZGVyOiAycHggc29saWQgI2JmZTdiZjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBiYWNrZ3JvdW5kOiBhenVyZTtcbn1cbi5wbmRuZ2FwcnZhbENyZCAucF9hcHJ2bF9jbnQge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiAjMzM0MTU1O1xufVxuLnBuZG5nYXBydmFsQ3JkIC5wX2FwcnZsX25tIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4uYXZ0cl9jbHMge1xuICB3aWR0aDogMTEwcHg7XG4gIGhlaWdodDogMTE1cHg7XG4gIGxpbmUtaGVpZ2h0OiAxMTBweDtcbiAgZm9udC1zaXplOiA0OHB4O1xufVxuXG4ucmlnaHRpbWcgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5jc3RtaGVpZ2h0IHtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBib3JkZXItdG9wOiAycHggc29saWQgIzI1NTk0Njtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNTAwcHgpIGFuZCAobWF4LXdpZHRoOiAyNTAwcHgpIHtcbiAgLnJpZ2h0aW1nIGltZyB7XG4gICAgd2lkdGg6IDcwJTtcbiAgfVxuICAuY3N0bWhlaWdodCB7XG4gICAgaGVpZ2h0OiA0MjVweDtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIH1cbiAgLnBuZG5nYXBydmFsQ3JkIHtcbiAgICBib3gtc2hhZG93OiAwIDFweCAxNXB4IDFweCByZ2JhKDY5LCA2NSwgNzgsIDAuMDgpICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZzogMjBweCAxNHB4O1xuICAgIG1hcmdpbjogMTBweCAwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2JmZTdiZjtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIH1cbn0iXX0= */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_apps_work_management_grant_grant_module_ts.js.map