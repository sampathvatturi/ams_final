"use strict";
(self["webpackChunkenlink"] = self["webpackChunkenlink"] || []).push([["src_app_apps_work_management_tickets_tickets_module_ts"],{

/***/ 33122:
/*!*************************************************************************************!*\
  !*** ./src/app/apps/work_management/tickets/tickets-list/tickets-list.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TicketsListComponent": () => (/* binding */ TicketsListComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var src_app_shared_services_apps_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/apps.service */ 53538);
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/message */ 74600);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ 94817);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/icon */ 5655);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/button */ 17619);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 16495);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 36686);
/* harmony import */ var _shared_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/components/loading/loading.component */ 28424);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/grid */ 70031);
/* harmony import */ var ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/tabs */ 68284);
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/modal */ 81803);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/input */ 22533);
/* harmony import */ var ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/drawer */ 38611);
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! devextreme-angular */ 65821);
/* harmony import */ var devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! devextreme-angular/ui/nested */ 18237);
/* harmony import */ var devextreme_angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! devextreme-angular/core */ 46209);





















function TicketsListComponent_ds_loading_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "ds-loading");
} }
function TicketsListComponent_dxi_column_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "dxi-column", 42);
} if (rf & 2) {
    const f_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("visible", f_r14.visible)("dataField", f_r14.field)("caption", f_r14.headerName)("width", f_r14.width)("alignment", f_r14.alignment)("allowResizing", true)("allowFiltering", f_r14.filter)("allowHeaderFiltering", f_r14.filter);
} }
function TicketsListComponent_div_48_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TicketsListComponent_div_48_Template_div_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r17); const data_r15 = restoredCtx.$implicit; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r16.shwTmelineDtls(data_r15)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Timeline ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} }
function TicketsListComponent_button_50_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TicketsListComponent_button_50_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r18.aprovefto()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Approve Beneficiary");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r3.disblesubmit == true);
} }
function TicketsListComponent_button_51_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TicketsListComponent_button_51_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r20.rejectAprval()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Reject");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r4.disblesubmit == true);
} }
function TicketsListComponent_dxi_column_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "dxi-column", 42);
} if (rf & 2) {
    const f_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("visible", f_r22.visible)("dataField", f_r22.field)("caption", f_r22.headerName)("width", f_r22.width)("alignment", f_r22.alignment)("allowResizing", true)("allowFiltering", f_r22.filter)("allowHeaderFiltering", f_r22.filter);
} }
function TicketsListComponent_div_61_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TicketsListComponent_div_61_Template_div_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r25); const data_r23 = restoredCtx.$implicit; const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r24.shwTmelineDtls(data_r23)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Timeline ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} }
function TicketsListComponent_app_benificiaries_timeline_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-benificiaries-timeline", 46);
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("bnfcryId", ctx_r7.selectedbnfcry_id);
} }
function TicketsListComponent_ng_template_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0);
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("The Ticket is getting closed upon rejecting please confirm Ticket No: ", ctx_r9.selectedItemKeys[0].fto_tckt_id, "");
} }
function TicketsListComponent_ng_template_67_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Comment reason for Rejection");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div")(3, "input", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function TicketsListComponent_ng_template_67_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r27); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r26.desc_tx = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r11.desc_tx);
} }
function TicketsListComponent_ng_template_69_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TicketsListComponent_ng_template_69_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r29); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r28.cancel()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TicketsListComponent_ng_template_69_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r29); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r30.delete()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Reject");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
const _c0 = function () { return [10, 25, 50, 100]; };
const _c1 = function () { return { height: "calc(100% - 55px)", overflow: "auto", "padding-bottom": "53px" }; };
class TicketsListComponent {
    constructor(route, router, fb, apiSrv, message, toastr) {
        this.route = route;
        this.router = router;
        this.fb = fb;
        this.apiSrv = apiSrv;
        this.message = message;
        this.toastr = toastr;
        this.data = {
            tckt_dtls: null,
            tckt_ctgry_id: null,
            tckt_ctgry_nm: ''
        };
        this.usrdtls = {
            ste_nm: '',
            dstrt_nm: '',
            mndl_nm: '',
            mndl_id: ''
        };
        this.columnDefs = [];
        this.shwgrid = false;
        this.slctdGnrtSlryLst = [];
        this.apiSrv.getLgnUsrDtls().then((res) => {
            console.log(res);
            if (res) {
                this.usrdtls = res;
                this.getGps();
            }
        });
        let nav_extrs = this.router.getCurrentNavigation().extras;
        if (nav_extrs && nav_extrs['state']) {
            let tcktDtls = nav_extrs['state'];
            if (tcktDtls['tcktDtls']) {
                tcktDtls = tcktDtls['tcktDtls'];
                this.data.tckt_dtls = tcktDtls['queryParams'];
                this.data.tckt_ctgry_id = tcktDtls['queryParams']['tckt_ctgry_id'];
                this.data.tckt_ctgry_nm = tcktDtls['queryParams']['tckt_ctgry_nm'];
            }
            console.log("TICKET DETAILS     ", tcktDtls);
        }
        this.columnDefs = [
            { headerName: 'Sno', field: 'sno', alignment: 'center', cellClass: 'pm-grid-number-cell', width: 'auto', filter: false, visible: true, },
            { headerName: 'Name', field: 'bnfcy_nm', alignment: 'left', cellClass: 'pm-grid-number-cell', width: 'auto', sortable: true, filter: true, visible: true, },
            { headerName: 'Mobile No', field: 'MOBILE_NO', alignment: 'center', cellClass: 'pm-grid-number-cell', width: 'auto', visible: true, },
            { headerName: 'Date of Birth', field: 'DOB', alignment: 'center', cellClass: 'pm-grid-number-cell', width: 'auto', visible: true, },
            { headerName: 'Father/Husband Name', field: 'BENEF_FATHER_HUSBAND_NAME', alignment: 'left', cellClass: 'pm-grid-number-cell', width: 'auto', visible: true, },
            { headerName: 'Mother Name', field: 'bnfcy_mthr_nm', alignment: 'left', cellClass: 'pm-grid-number-cell', width: 'auto', visible: true, },
            { headerName: 'Gender', field: 'gndr_id', alignment: 'left', cellClass: 'pm-grid-number-cell', width: 'auto', visible: true, },
            { headerName: 'Aadhar No', field: 'adhr_nu', alignment: 'center', cellClass: 'pm-grid-number-cell', width: 'auto', visible: true, },
            { headerName: 'Bank Name', field: 'bnk_nm', alignment: 'left', cellClass: 'pm-grid-number-cell', width: 'auto', visible: true, },
            { headerName: 'Account No', field: 'bnk_acnt_nu', alignment: 'center', cellClass: 'pm-grid-number-cell', width: 'auto', visible: true, },
            { headerName: 'Payment Amount', field: 'amnt', alignment: 'center', cellClass: 'pm-grid-number-cell', width: 'auto', visible: true, },
        ];
    }
    ngOnInit() {
        this.gpSelForm = this.fb.group({
            grampanchayat: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
        });
        this.apiSrv.get(`iht/pndng_approvals/counts`).subscribe(res => {
            if (res['status'] == 200) {
                this.pndg_cnt = res['data'][0].pndng_aprvl_ct;
            }
        });
    }
    getGps() {
        const rte = 'master/getGrampnchyts/' + this.usrdtls.mndl_id;
        this.apiSrv.get(rte).subscribe(res => {
            if (res['status'] === 200) {
                this.gps = res['data'];
            }
        });
    }
    fetchDetails(t) {
        this.shwgrid = true;
        this.slctdGnrtSlryLst = [];
        if (!this.gpSelForm.valid) {
            this.toastr.error('Please select all the fields');
            return;
        }
        var tab_id = t;
        this.loader = true;
        this.bnfcrydtls = [];
        this.apiSrv.get('iht/beneficiary/user/all/' + this.gpSelForm.value.grampanchayat + '/0/0/' + tab_id).subscribe(res => {
            this.loader = false;
            if (res['status'] === 200) {
                this.bnfcrydtls = res['data'];
                this.bnfcrydtls.filter((k) => {
                    if (k['sts'] == "Approved") {
                        k['shwChkBox'] = false;
                    }
                    else {
                        k['shwChkBox'] = true;
                    }
                });
                this.disblesubmit = false;
            }
        }, (err) => {
            this.loader = false;
        });
    }
    createMessage(type, msg) {
        this.message.create(type, msg);
    }
    selectionChanged(data) {
        this.disblesubmit = false;
        this.slctdGnrtSlryLst = [];
        this.selectedItemKeys = data.selectedRowKeys;
        const SELECTEDKEYS = data.selectedRowKeys.filter(i => i.shwChkBox === true);
        // Filters the Keys from currentSelectedRowKeys to disable the checkbox, and IsNameExists is true  
        const DISABLEDKEYS = data.currentSelectedRowKeys.filter(i => (i.shwChkBox == false));
        if (DISABLEDKEYS.length > 0) {
            data.component.deselectRows(DISABLEDKEYS);
        }
        this.slctdGnrtSlryLst = SELECTEDKEYS;
    }
    overrideOnValueChanged(event) {
        if (event.parentType === "dataRow" && event.row.rowType === "data" && event.command === 'select') {
            event.editorOptions.disabled = !event.row.data.shwChkBox;
        }
    }
    shwTmelineDtls(data) {
        this.shwSidebarTimeline = true;
        this.disblesubmit = true;
        this.selectedbnfcry_id = data.data.bnfcy_id;
    }
    closeSideBar() {
        this.shwSidebarTimeline = false;
        this.disblesubmit = true;
        this.selectedbnfcry_id = false;
    }
    aprovefto() {
        this.postdata = [];
        this.postdata.push({
            "tckts_data": this.selectedItemKeys,
            "isApproved": 1
        });
        if (this.selectedItemKeys.length > 1) {
            this.toastr.warning('Please select single beneficiary');
        }
        else {
            this.loader = true;
            this.disblesubmit = true;
            this.apiSrv.post(this.postdata[0], 'iht/approval/work').subscribe(res => {
                this.loader = false;
                this.disblesubmit = false;
                if (res['status'] === 200) {
                    this.toastr.success('Beneficiary Approved Successfully');
                    this.aprvebeneficiary = res['data'];
                }
                else {
                    this.toastr.error(res['message']);
                }
                this.fetchDetails(1);
            }, (err) => {
                this.loader = false;
                this.disblesubmit = false;
                this.toastr.error("Something went wrong. Please try again later.");
            });
        }
    }
    tabchange(e) {
        if (e.index == 0) {
            this.fetchDetails(1);
        }
        else if (e.index == 1) {
            this.fetchDetails(2);
        }
    }
    cancel() {
        this.message.info('Not rejected');
        this.isVisible = false;
    }
    delete() {
        var postData = {
            rjct_cmnt_tx: this.desc_tx,
            tckt_id: this.selectedItemKeys[0].tckt_id,
            gp_id: this.selectedItemKeys[0].gp_id
        };
        this.loader = true;
        this.apiSrv.post(postData, 'iht/ticket/reject').subscribe(res => {
            this.loader = false;
            if (res['status'] == 200) {
                this.isVisible = false;
                this.toastr.success("Ticket rejected Successfully");
            }
            else {
                this.toastr.error(res['message']);
            }
            this.fetchDetails(1);
        }, (err) => {
            this.loader = false;
            this.toastr.error('Something went wrong.');
        });
    }
    rejectAprval() {
        this.tcktID = this.selectedItemKeys[0].tckt_id;
        if (this.selectedItemKeys && this.selectedItemKeys.length == 1) {
            this.isVisible = true;
        }
        else {
            this.toastr.warning('Please select single beneficiary');
        }
    }
}
TicketsListComponent.ɵfac = function TicketsListComponent_Factory(t) { return new (t || TicketsListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_shared_services_apps_service__WEBPACK_IMPORTED_MODULE_0__.AppsService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_5__.NzMessageService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_6__.ToastrService)); };
TicketsListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: TicketsListComponent, selectors: [["app-tickets-list"]], decls: 71, vars: 52, consts: [[1, "page-header"], [1, "row", "align-items-md-center"], [1, "col-md-6"], [1, "media", "m-v-10"], ["nz-icon", "", "nzType", "file", "nzTheme", "twotone", 1, "header-icon"], [1, "media-body", "m-l-15", "header-border"], [1, "mb-0", "header-label"], [1, "tpfilter-card"], ["nz-row", "", 1, "tpcrdheight", 3, "nzGutter"], ["nz-col", "", 3, "nzSpan"], [1, "state"], [1, "top_lbls"], ["nz-col", "", 1, "tpbrdrs", 3, "nzSpan"], [1, "district"], [1, "mandal"], [4, "ngIf"], [1, "filter-card", "slwmftouploadform"], [1, "aprvalTabs"], ["nzType", "card", 3, "nzSelectChange"], ["nzTitle", "Pending Approvals"], ["id", "data-grid-demo", 1, "slryGnrtn"], ["id", "gridContainer", 2, "max-width", "100% !important", "width", "100% !important", 3, "dataSource", "showBorders", "onEditorPreparing", "onSelectionChanged"], [3, "pageSize"], [3, "showPageSizeSelector", "allowedPageSizes", "showInfo"], [3, "visible", "highlightCaseSensitive"], [3, "visible"], ["mode", "cell", 3, "allowUpdating", "allowAdding", "allowDeleting"], ["mode", "multiple"], [3, "visible", "dataField", "caption", "width", "alignment", "allowResizing", "allowFiltering", "allowHeaderFiltering", 4, "ngFor", "ngForOf"], ["type", "buttons", "caption", "Timeline", "cellTemplate", "timelineTemplate", 3, "showInColumnChooser", "width"], [4, "dxTemplate", "dxTemplateOf"], [1, "centertxt"], ["nz-button", "", "nzType", "primary", "style", "margin-top: 20px; margin-bottom: 20px;", 3, "disabled", "click", 4, "ngIf"], ["nz-button", "", "nzType", "primary", "style", "margin-top: 20px; margin-bottom: 20px; margin-left:10px", "nzDanger", "", 3, "disabled", "click", 4, "ngIf"], ["nzTitle", "Recently Approved"], ["id", "gridContainer", 3, "dataSource", "showBorders"], ["nzTitle", "Timeline", 3, "nzBodyStyle", "nzMaskClosable", "nzWidth", "nzVisible", "nzOnClose"], [3, "bnfcryId", 4, "ngIf"], [3, "nzVisible", "nzTitle", "nzContent", "nzFooter", "nzVisibleChange", "nzOnCancel"], ["modalTitle", ""], ["modalContent", ""], ["modalFooter", ""], [3, "visible", "dataField", "caption", "width", "alignment", "allowResizing", "allowFiltering", "allowHeaderFiltering"], [1, "cursor-pointer", "tblEdtBtn", 3, "click"], ["nz-button", "", "nzType", "primary", 2, "margin-top", "20px", "margin-bottom", "20px", 3, "disabled", "click"], ["nz-button", "", "nzType", "primary", "nzDanger", "", 2, "margin-top", "20px", "margin-bottom", "20px", "margin-left", "10px", 3, "disabled", "click"], [3, "bnfcryId"], ["nz-input", "", "placeholder", "Basic usage", 3, "ngModel", "ngModelChange"], ["nz-button", "", "nzType", "default", 3, "click"], ["nz-button", "", "nzType", "primary", 1, "modelReject", 3, "click"]], template: function TicketsListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "div", 0)(2, "div", 1)(3, "div", 2)(4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 5)(8, "h6", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 7)(11, "div", 8)(12, "div", 9)(13, "div", 10)(14, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "State");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, ": ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 12)(20, "div", 13)(21, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "District");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, ": ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 9)(27, "div", 14)(28, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Mandal");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, " : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](33, TicketsListComponent_ds_loading_33_Template, 1, 0, "ds-loading", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 16)(35, "div", 17)(36, "nz-tabset", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("nzSelectChange", function TicketsListComponent_Template_nz_tabset_nzSelectChange_36_listener($event) { return ctx.tabchange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "nz-tab", 19)(38, "div", 20)(39, "dx-data-grid", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onEditorPreparing", function TicketsListComponent_Template_dx_data_grid_onEditorPreparing_39_listener($event) { return ctx.overrideOnValueChanged($event); })("onSelectionChanged", function TicketsListComponent_Template_dx_data_grid_onSelectionChanged_39_listener($event) { return ctx.selectionChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](40, "dxo-paging", 22)(41, "dxo-pager", 23)(42, "dxo-search-panel", 24)(43, "dxo-filter-panel", 25)(44, "dxo-editing", 26)(45, "dxo-selection", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](46, TicketsListComponent_dxi_column_46_Template, 1, 8, "dxi-column", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "dxi-column", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](48, TicketsListComponent_div_48_Template, 3, 0, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](50, TicketsListComponent_button_50_Template, 2, 1, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](51, TicketsListComponent_button_51_Template, 2, 1, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "nz-tab", 34)(53, "div", 20)(54, "dx-data-grid", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](55, "dxo-paging", 22)(56, "dxo-pager", 23)(57, "dxo-search-panel", 24)(58, "dxo-filter-panel", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](59, TicketsListComponent_dxi_column_59_Template, 1, 8, "dxi-column", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "dxi-column", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](61, TicketsListComponent_div_61_Template, 3, 0, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "nz-drawer", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("nzOnClose", function TicketsListComponent_Template_nz_drawer_nzOnClose_62_listener() { return ctx.closeSideBar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](63, TicketsListComponent_app_benificiaries_timeline_63_Template, 1, 1, "app-benificiaries-timeline", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "nz-modal", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("nzVisibleChange", function TicketsListComponent_Template_nz_modal_nzVisibleChange_64_listener($event) { return ctx.isVisible = $event; })("nzOnCancel", function TicketsListComponent_Template_nz_modal_nzOnCancel_64_listener() { return ctx.cancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](65, TicketsListComponent_ng_template_65_Template, 1, 1, "ng-template", null, 39, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](67, TicketsListComponent_ng_template_67_Template, 4, 1, "ng-template", null, 40, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](69, TicketsListComponent_ng_template_69_Template, 4, 0, "ng-template", null, 41, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](66);
        const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](68);
        const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](70);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx.data.tckt_ctgry_nm, " Assigned Tickets");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzGutter", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzSpan", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.usrdtls.ste_nm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzSpan", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.usrdtls.dstrt_nm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzSpan", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.usrdtls.mndl_nm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.loader);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dataSource", ctx.bnfcrydtls)("showBorders", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("pageSize", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("showPageSizeSelector", true)("allowedPageSizes", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](49, _c0))("showInfo", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("visible", true)("highlightCaseSensitive", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("visible", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("allowUpdating", false)("allowAdding", false)("allowDeleting", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.columnDefs);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("showInColumnChooser", false)("width", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dxTemplateOf", "timelineTemplate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.slctdGnrtSlryLst && ctx.slctdGnrtSlryLst.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.slctdGnrtSlryLst && ctx.slctdGnrtSlryLst.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dataSource", ctx.bnfcrydtls)("showBorders", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("pageSize", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("showPageSizeSelector", true)("allowedPageSizes", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](50, _c0))("showInfo", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("visible", true)("highlightCaseSensitive", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("visible", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.columnDefs);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("showInColumnChooser", false)("width", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dxTemplateOf", "timelineTemplate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzBodyStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](51, _c1))("nzMaskClosable", false)("nzWidth", 500)("nzVisible", ctx.shwSidebarTimeline);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.selectedbnfcry_id);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzVisible", ctx.isVisible)("nzTitle", _r8)("nzContent", _r10)("nzFooter", _r12);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_8__.NzIconDirective, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_9__.NzButtonComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_10__["ɵNzTransitionPatchDirective"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_11__.NzWaveDirective, _shared_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_1__.LoadingComponent, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_12__.NzColDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_12__.NzRowDirective, ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_13__.NzTabSetComponent, ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_13__.NzTabComponent, ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_14__.NzModalComponent, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_15__.NzInputDirective, ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_16__.NzDrawerComponent, devextreme_angular__WEBPACK_IMPORTED_MODULE_17__.DxDataGridComponent, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_18__.DxiColumnComponent, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_18__.DxoEditingComponent, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_18__.DxoFilterPanelComponent, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_18__.DxoPagerComponent, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_18__.DxoPagingComponent, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_18__.DxoSearchPanelComponent, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_18__.DxoSelectionComponent, devextreme_angular_core__WEBPACK_IMPORTED_MODULE_19__.DxTemplateDirective], styles: [".filter-card[_ngcontent-%COMP%] {\n  border-radius: 0;\n  box-shadow: 0 1px 15px 1px rgba(69, 65, 78, 0.08) !important;\n  background-color: #fff;\n  padding: 8px 33px 16px 33px;\n}\n\n.tpfilter-card[_ngcontent-%COMP%] {\n  margin: 0.5% 0%;\n  border-radius: 0;\n  box-shadow: 0 1px 15px 1px rgba(69, 65, 78, 0.08) !important;\n  background-color: #4075a8;\n  height: 50px;\n  color: white;\n}\n\n.top_lbls[_ngcontent-%COMP%] {\n  color: #ffeb3b;\n  margin-right: 8px;\n}\n\n.state[_ngcontent-%COMP%], .district[_ngcontent-%COMP%], .mandal[_ngcontent-%COMP%] {\n  font-size: 16px;\n  text-align: center;\n  font-weight: 600;\n  margin-top: 12px;\n}\n\n.bnfcryform[_ngcontent-%COMP%]   nz-form-label[_ngcontent-%COMP%] {\n  padding-left: 2px !important;\n}\n\n.bnfcryform[_ngcontent-%COMP%]   .ant-form-item[_ngcontent-%COMP%] {\n  margin: 0 0 0px !important;\n}\n\n.bnfcryform[_ngcontent-%COMP%]   nz-select[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.bnfcryform[_ngcontent-%COMP%]   nz-date-picker[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.bnfcryform[_ngcontent-%COMP%]   nz-form-control[_ngcontent-%COMP%] {\n  padding-left: 2px !important;\n  padding-right: 2px !important;\n}\n\n.centertxt[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\nnz-divider[_ngcontent-%COMP%] {\n  color: #4794dc !important;\n}\n\n.aprvbnfcrytble[_ngcontent-%COMP%] {\n  width: 100%;\n  overflow: auto;\n  height: 400px;\n  border: 1px solid #d9d9d9;\n  margin-top: 20px;\n}\n\n.bnftrytble[_ngcontent-%COMP%] {\n  width: 215%;\n}\n\n.bnftrytble[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  background: #bcdfff;\n}\n\n.bnftrytble[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border: 1px solid #efefef;\n  padding: 6px 10px;\n  text-align: center;\n  width: 200px;\n}\n\n.bnftrytble[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 200px;\n}\n\n.aprvlfrm[_ngcontent-%COMP%] {\n  margin-top: 0px;\n}\n\n.tpcrdheight[_ngcontent-%COMP%] {\n  height: 50px;\n}\n\n.rghtbrdr[_ngcontent-%COMP%] {\n  border-right: 1px dashed #b8b8b8;\n}\n\n.btmbrdr[_ngcontent-%COMP%] {\n  border-bottom: 1px dashed #b8b8b8;\n}\n\n.state[_ngcontent-%COMP%], .district[_ngcontent-%COMP%], .mandal[_ngcontent-%COMP%] {\n  font-size: 16px;\n  text-align: center;\n  font-weight: 600;\n  margin-top: 12px;\n}\n\n.pndngaprvalCrd[_ngcontent-%COMP%] {\n  text-align: center;\n  box-shadow: 0 1px 15px 1px rgba(69, 65, 78, 0.08) !important;\n  padding: 20px 14px;\n  margin: 10px 0px;\n}\n\n.pndngaprvalCrd[_ngcontent-%COMP%]   .p_aprvl_cnt[_ngcontent-%COMP%] {\n  font-size: 25px;\n  font-weight: 500;\n}\n\n.pndngaprvalCrd[_ngcontent-%COMP%]   .p_aprvl_nm[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 500;\n}\n\n.slwmftouploadform[_ngcontent-%COMP%]   nz-form-label[_ngcontent-%COMP%] {\n  padding-left: 2px !important;\n}\n\n.slwmftouploadform[_ngcontent-%COMP%]   .ant-form-item[_ngcontent-%COMP%] {\n  margin: 0 0 0px !important;\n}\n\n.slwmftouploadform[_ngcontent-%COMP%]   nz-select[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.slwmftouploadform[_ngcontent-%COMP%]   nz-form-control[_ngcontent-%COMP%] {\n  padding-left: 2px !important;\n  padding-right: 2px !important;\n}\n\n.centertxt[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\nnz-divider[_ngcontent-%COMP%] {\n  color: #4794dc !important;\n}\n\n.bnftrytble[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  width: 100%;\n}\n\n.bnftrytble[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  background: #bcdfff;\n}\n\n.bnftrytble[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border: 1px solid #efefef;\n  padding: 6px 10px;\n  text-align: center;\n}\n\n.bnftrytble[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\nnz-month-picker[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\nnz-year-picker[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.aprvalTabs[_ngcontent-%COMP%]    .ant-tabs-nav {\n  width: -moz-fit-content !important;\n  width: fit-content !important;\n  margin: 0px auto !important;\n  margin-top: 20px !important;\n  border: 1px solid #1890ff !important;\n}\n\n.aprvalTabs[_ngcontent-%COMP%]    .ant-tabs-tab-active {\n  color: #ffffff !important;\n  background: #1890ff !important;\n}\n\n.aprvalTabs[_ngcontent-%COMP%]    .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {\n  color: #ffffff !important;\n}\n\n.aprvalTabs[_ngcontent-%COMP%]    .ant-tabs-card.ant-tabs-top > .ant-tabs-nav .ant-tabs-tab + .ant-tabs-tab {\n  margin-left: 0px !important;\n}\n\n.topsctnFrm[_ngcontent-%COMP%] {\n  margin-top: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRpY2tldHMtbGlzdC5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcU3VucmlzZSUyMFRlY2hcXGFtc19mcm9udGVuZFxcc3JjXFxhcHBcXGFwcHNcXHdvcmtfbWFuYWdlbWVudFxcdGlja2V0c1xcdGlja2V0cy1saXN0XFx0aWNrZXRzLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLDREQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtBQ0NKOztBREVBO0VBRUksZUFBQTtFQUNKLGdCQUFBO0VBQ0EsNERBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FDQUE7O0FERUE7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURDQTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNFSjs7QURDSTtFQUNJLDRCQUFBO0FDRVI7O0FEQUk7RUFDSSwwQkFBQTtBQ0VSOztBREFJO0VBQ0ksV0FBQTtBQ0VSOztBREFJO0VBQ0ksV0FBQTtBQ0VSOztBREFJO0VBQ0ksNEJBQUE7RUFDQSw2QkFBQTtBQ0VSOztBRENBO0VBQ0ksa0JBQUE7QUNFSjs7QURBQTtFQUNJLHlCQUFBO0FDR0o7O0FEREE7RUFDSSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0FDSUo7O0FERkE7RUFDSSxXQUFBO0FDS0o7O0FESkk7RUFDSSxtQkFBQTtBQ01SOztBREpJO0VBQ0kseUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQ01SOztBREpJO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0FDTVI7O0FESEE7RUFDSSxlQUFBO0FDTUo7O0FESkU7RUFDRSxZQUFBO0FDT0o7O0FER0U7RUFDRSxnQ0FBQTtBQ0FKOztBREVFO0VBQ0UsaUNBQUE7QUNDSjs7QURDRTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBRUEsZ0JBQUE7QUNFSjs7QURDRTtFQUNFLGtCQUFBO0VBQ0EsNERBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDRUo7O0FEREk7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUNHTjs7QURESTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQ0dOOztBRENJO0VBQ0UsNEJBQUE7QUNFTjs7QURBSTtFQUNFLDBCQUFBO0FDRU47O0FEQUk7RUFDRSxXQUFBO0FDRU47O0FEQUk7RUFDRSw0QkFBQTtFQUNBLDZCQUFBO0FDRU47O0FEQ0U7RUFDRSxrQkFBQTtBQ0VKOztBREFFO0VBQ0UseUJBQUE7QUNHSjs7QURERTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtBQ0lKOztBREhJO0VBQ0UsbUJBQUE7QUNLTjs7QURISTtFQUNFLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0tOOztBREhJO0VBQ0Usa0JBQUE7QUNLTjs7QURGRTtFQUNFLFdBQUE7QUNLSjs7QURIRTtFQUNFLFdBQUE7QUNNSjs7QURGSTtFQUNBLGtDQUFBO0VBQUEsNkJBQUE7RUFDQSwyQkFBQTtFQUNBLDJCQUFBO0VBQ0Esb0NBQUE7QUNLSjs7QURGSTtFQUNFLHlCQUFBO0VBQ0EsOEJBQUE7QUNJTjs7QURGRTtFQUNFLHlCQUFBO0FDSUo7O0FERkU7RUFDRSwyQkFBQTtBQ0lKOztBREFFO0VBQ0UsZ0JBQUE7QUNHSiIsImZpbGUiOiJ0aWNrZXRzLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmlsdGVyLWNhcmQge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDE1cHggMXB4IHJnYmEoNjksNjUsNzgsLjA4KSFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgcGFkZGluZzogOHB4IDMzcHggMTZweCAzM3B4O1xyXG4gICAgIFxyXG59XHJcbi50cGZpbHRlci1jYXJkXHJcbntcclxuICAgIG1hcmdpbjogMC41JSAwJTtcclxuYm9yZGVyLXJhZGl1czogMDtcclxuYm94LXNoYWRvdzogMCAxcHggMTVweCAxcHggcmdiKDY5IDY1IDc4IC8gOCUpICFpbXBvcnRhbnQ7XHJcbmJhY2tncm91bmQtY29sb3I6ICM0MDc1YTg7XHJcbmhlaWdodDogNTBweDtcclxuY29sb3I6IHdoaXRlO1xyXG59XHJcbi50b3BfbGJsc3tcclxuICAgIGNvbG9yOiAjZmZlYjNiO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbn1cclxuLnN0YXRlLC5kaXN0cmljdCwubWFuZGFsIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xyXG59XHJcbi5ibmZjcnlmb3Jte1xyXG4gICAgbnotZm9ybS1sYWJlbHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDJweCFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuYW50LWZvcm0taXRlbSB7XHJcbiAgICAgICAgbWFyZ2luOiAwIDAgMHB4IWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIG56LXNlbGVjdHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIG56LWRhdGUtcGlja2Vye1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gICAgbnotZm9ybS1jb250cm9se1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDoycHghaW1wb3J0YW50O1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6MnB4IWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG4uY2VudGVydHh0e1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbm56LWRpdmlkZXJ7XHJcbiAgICBjb2xvcjogIzQ3OTRkYyFpbXBvcnRhbnQ7XHJcbn1cclxuLmFwcnZibmZjcnl0Ymxle1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIGhlaWdodDogNDAwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZDlkOWQ5O1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG4uYm5mdHJ5dGJsZXtcclxuICAgIHdpZHRoOiAyMTUlO1xyXG4gICAgdGhlYWR7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2JjZGZmZjtcclxuICAgIH1cclxuICAgIHRyIHRke1xyXG4gICAgICAgIGJvcmRlcjoxcHggc29saWQgI2VmZWZlZjtcclxuICAgICAgICBwYWRkaW5nOiA2cHggMTBweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgd2lkdGg6MjAwcHhcclxuICAgIH1cclxuICAgIHRoe1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB3aWR0aDoyMDBweDtcclxuICAgIH1cclxufVxyXG4uYXBydmxmcm17XHJcbiAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgfVxyXG4gIC50cGNyZGhlaWdodHtcclxuICAgIGhlaWdodDo1MHB4O1xyXG4gIH1cclxuICAvLyAudHBicmRyc3tcclxuICAvLyAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2Q4ZDhkODtcclxuICAvLyAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkOGQ4ZDg7XHJcbiAgLy8gfVxyXG4gIC8vIC50b3BfbGJsc3tcclxuICAvLyAgIGNvbG9yOiAjMTg5MGZmO1xyXG4gIC8vICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgLy8gfVxyXG4gIC5yZ2h0YnJkcntcclxuICAgIGJvcmRlci1yaWdodDogMXB4IGRhc2hlZCAjYjhiOGI4O1xyXG4gIH1cclxuICAuYnRtYnJkcntcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgI2I4YjhiODtcclxuICB9XHJcbiAgLnN0YXRlLC5kaXN0cmljdCwubWFuZGFse1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIG1hcmdpbi10b3A6IDEycHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5wbmRuZ2FwcnZhbENyZHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDE1cHggMXB4IHJnYig2OSA2NSA3OCAvIDglKSAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZzogMjBweCAxNHB4O1xyXG4gICAgbWFyZ2luOiAxMHB4IDBweDtcclxuICAgIC5wX2FwcnZsX2NudHtcclxuICAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgfVxyXG4gICAgLnBfYXBydmxfbm17XHJcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIH1cclxuICB9XHJcbiAgLnNsd21mdG91cGxvYWRmb3JtIHtcclxuICAgIG56LWZvcm0tbGFiZWwge1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDJweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmFudC1mb3JtLWl0ZW0ge1xyXG4gICAgICBtYXJnaW46IDAgMCAwcHggIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIG56LXNlbGVjdCB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gICAgbnotZm9ybS1jb250cm9se1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDJweCFpbXBvcnRhbnQ7XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDJweCFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5jZW50ZXJ0eHQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICBuei1kaXZpZGVyIHtcclxuICAgIGNvbG9yOiAjNDc5NGRjICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5ibmZ0cnl0YmxlIHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRoZWFkIHtcclxuICAgICAgYmFja2dyb3VuZDogI2JjZGZmZjtcclxuICAgIH1cclxuICAgIHRyIHRkIHtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2VmZWZlZjtcclxuICAgICAgcGFkZGluZzogNnB4IDEwcHg7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIHRoIHtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gIH1cclxuICBuei1tb250aC1waWNrZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIG56LXllYXItcGlja2VyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICBcclxuICAuYXBydmFsVGFicyB7XHJcbiAgICA6Om5nLWRlZXAuYW50LXRhYnMtbmF2e1xyXG4gICAgd2lkdGg6IGZpdC1jb250ZW50IWltcG9ydGFudDtcclxuICAgIG1hcmdpbjogMHB4IGF1dG8haW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLXRvcDogMjBweCFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMTg5MGZmIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICA6Om5nLWRlZXAuYW50LXRhYnMtdGFiLWFjdGl2ZSB7XHJcbiAgICAgIGNvbG9yOiAjZmZmZmZmIWltcG9ydGFudDtcclxuICAgICAgYmFja2dyb3VuZDogIzE4OTBmZiFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIDo6bmctZGVlcC5hbnQtdGFicy10YWIuYW50LXRhYnMtdGFiLWFjdGl2ZSAuYW50LXRhYnMtdGFiLWJ0biB7XHJcbiAgICBjb2xvcjogI2ZmZmZmZiFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIDo6bmctZGVlcC5hbnQtdGFicy1jYXJkLmFudC10YWJzLXRvcD4uYW50LXRhYnMtbmF2IC5hbnQtdGFicy10YWIrLmFudC10YWJzLXRhYntcclxuICAgIG1hcmdpbi1sZWZ0OiAwcHghaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgfVxyXG4gIC50b3BzY3RuRnJte1xyXG4gICAgbWFyZ2luLXRvcDoyNXB4O1xyXG4gIH0iLCIuZmlsdGVyLWNhcmQge1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBib3gtc2hhZG93OiAwIDFweCAxNXB4IDFweCByZ2JhKDY5LCA2NSwgNzgsIDAuMDgpICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDhweCAzM3B4IDE2cHggMzNweDtcbn1cblxuLnRwZmlsdGVyLWNhcmQge1xuICBtYXJnaW46IDAuNSUgMCU7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDE1cHggMXB4IHJnYmEoNjksIDY1LCA3OCwgMC4wOCkgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQwNzVhODtcbiAgaGVpZ2h0OiA1MHB4O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi50b3BfbGJscyB7XG4gIGNvbG9yOiAjZmZlYjNiO1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbn1cblxuLnN0YXRlLCAuZGlzdHJpY3QsIC5tYW5kYWwge1xuICBmb250LXNpemU6IDE2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbWFyZ2luLXRvcDogMTJweDtcbn1cblxuLmJuZmNyeWZvcm0gbnotZm9ybS1sYWJlbCB7XG4gIHBhZGRpbmctbGVmdDogMnB4ICFpbXBvcnRhbnQ7XG59XG4uYm5mY3J5Zm9ybSAuYW50LWZvcm0taXRlbSB7XG4gIG1hcmdpbjogMCAwIDBweCAhaW1wb3J0YW50O1xufVxuLmJuZmNyeWZvcm0gbnotc2VsZWN0IHtcbiAgd2lkdGg6IDEwMCU7XG59XG4uYm5mY3J5Zm9ybSBuei1kYXRlLXBpY2tlciB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmJuZmNyeWZvcm0gbnotZm9ybS1jb250cm9sIHtcbiAgcGFkZGluZy1sZWZ0OiAycHggIWltcG9ydGFudDtcbiAgcGFkZGluZy1yaWdodDogMnB4ICFpbXBvcnRhbnQ7XG59XG5cbi5jZW50ZXJ0eHQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbm56LWRpdmlkZXIge1xuICBjb2xvcjogIzQ3OTRkYyAhaW1wb3J0YW50O1xufVxuXG4uYXBydmJuZmNyeXRibGUge1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIGhlaWdodDogNDAwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkOWQ5ZDk7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5ibmZ0cnl0YmxlIHtcbiAgd2lkdGg6IDIxNSU7XG59XG4uYm5mdHJ5dGJsZSB0aGVhZCB7XG4gIGJhY2tncm91bmQ6ICNiY2RmZmY7XG59XG4uYm5mdHJ5dGJsZSB0ciB0ZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZmVmZWY7XG4gIHBhZGRpbmc6IDZweCAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAyMDBweDtcbn1cbi5ibmZ0cnl0YmxlIHRoIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMjAwcHg7XG59XG5cbi5hcHJ2bGZybSB7XG4gIG1hcmdpbi10b3A6IDBweDtcbn1cblxuLnRwY3JkaGVpZ2h0IHtcbiAgaGVpZ2h0OiA1MHB4O1xufVxuXG4ucmdodGJyZHIge1xuICBib3JkZXItcmlnaHQ6IDFweCBkYXNoZWQgI2I4YjhiODtcbn1cblxuLmJ0bWJyZHIge1xuICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkICNiOGI4Yjg7XG59XG5cbi5zdGF0ZSwgLmRpc3RyaWN0LCAubWFuZGFsIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgbWFyZ2luLXRvcDogMTJweDtcbn1cblxuLnBuZG5nYXBydmFsQ3JkIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3gtc2hhZG93OiAwIDFweCAxNXB4IDFweCByZ2JhKDY5LCA2NSwgNzgsIDAuMDgpICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDIwcHggMTRweDtcbiAgbWFyZ2luOiAxMHB4IDBweDtcbn1cbi5wbmRuZ2FwcnZhbENyZCAucF9hcHJ2bF9jbnQge1xuICBmb250LXNpemU6IDI1cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4ucG5kbmdhcHJ2YWxDcmQgLnBfYXBydmxfbm0ge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5zbHdtZnRvdXBsb2FkZm9ybSBuei1mb3JtLWxhYmVsIHtcbiAgcGFkZGluZy1sZWZ0OiAycHggIWltcG9ydGFudDtcbn1cbi5zbHdtZnRvdXBsb2FkZm9ybSAuYW50LWZvcm0taXRlbSB7XG4gIG1hcmdpbjogMCAwIDBweCAhaW1wb3J0YW50O1xufVxuLnNsd21mdG91cGxvYWRmb3JtIG56LXNlbGVjdCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLnNsd21mdG91cGxvYWRmb3JtIG56LWZvcm0tY29udHJvbCB7XG4gIHBhZGRpbmctbGVmdDogMnB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctcmlnaHQ6IDJweCAhaW1wb3J0YW50O1xufVxuXG4uY2VudGVydHh0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5uei1kaXZpZGVyIHtcbiAgY29sb3I6ICM0Nzk0ZGMgIWltcG9ydGFudDtcbn1cblxuLmJuZnRyeXRibGUge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cbi5ibmZ0cnl0YmxlIHRoZWFkIHtcbiAgYmFja2dyb3VuZDogI2JjZGZmZjtcbn1cbi5ibmZ0cnl0YmxlIHRyIHRkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2VmZWZlZjtcbiAgcGFkZGluZzogNnB4IDEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5ibmZ0cnl0YmxlIHRoIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5uei1tb250aC1waWNrZXIge1xuICB3aWR0aDogMTAwJTtcbn1cblxubnoteWVhci1waWNrZXIge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmFwcnZhbFRhYnMgOjpuZy1kZWVwLmFudC10YWJzLW5hdiB7XG4gIHdpZHRoOiBmaXQtY29udGVudCAhaW1wb3J0YW50O1xuICBtYXJnaW46IDBweCBhdXRvICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDIwcHggIWltcG9ydGFudDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzE4OTBmZiAhaW1wb3J0YW50O1xufVxuLmFwcnZhbFRhYnMgOjpuZy1kZWVwLmFudC10YWJzLXRhYi1hY3RpdmUge1xuICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiAjMTg5MGZmICFpbXBvcnRhbnQ7XG59XG4uYXBydmFsVGFicyA6Om5nLWRlZXAuYW50LXRhYnMtdGFiLmFudC10YWJzLXRhYi1hY3RpdmUgLmFudC10YWJzLXRhYi1idG4ge1xuICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xufVxuLmFwcnZhbFRhYnMgOjpuZy1kZWVwLmFudC10YWJzLWNhcmQuYW50LXRhYnMtdG9wID4gLmFudC10YWJzLW5hdiAuYW50LXRhYnMtdGFiICsgLmFudC10YWJzLXRhYiB7XG4gIG1hcmdpbi1sZWZ0OiAwcHggIWltcG9ydGFudDtcbn1cblxuLnRvcHNjdG5Gcm0ge1xuICBtYXJnaW4tdG9wOiAyNXB4O1xufSJdfQ== */"] });


/***/ }),

/***/ 22764:
/*!****************************************************************!*\
  !*** ./src/app/apps/work_management/tickets/tickets.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TicketModule": () => (/* binding */ TicketModule)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/shared.module */ 44466);
/* harmony import */ var src_app_providers_http_http_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/providers/http/http.interceptor */ 34477);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ng-zorro-antd/grid */ 70031);
/* harmony import */ var _tickets_list_tickets_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tickets-list/tickets-list.component */ 33122);
/* harmony import */ var _tickets_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tickets.routing */ 10753);
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
class TicketModule {
}
TicketModule.ɵfac = function TicketModule_Factory(t) { return new (t || TicketModule)(); };
TicketModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵdefineNgModule"]({ type: TicketModule });
TicketModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵdefineInjector"]({ providers: [
        ngx_toastr__WEBPACK_IMPORTED_MODULE_31__.ToastrService,
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_32__.HTTP_INTERCEPTORS, useClass: src_app_providers_http_http_interceptor__WEBPACK_IMPORTED_MODULE_1__.HttpConfigInterceptor, multi: true },
    ], imports: [src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_33__.ReactiveFormsModule,
        ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_34__.NzGridModule, antdModule, _tickets_routing__WEBPACK_IMPORTED_MODULE_3__.TicketRoutingModule,
        ngx_toastr__WEBPACK_IMPORTED_MODULE_31__.ToastrModule.forRoot(),
        devextreme_angular__WEBPACK_IMPORTED_MODULE_35__.DxDataGridModule,
        devextreme_angular__WEBPACK_IMPORTED_MODULE_36__.DxButtonModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵsetNgModuleScope"](TicketModule, { declarations: [_tickets_list_tickets_list_component__WEBPACK_IMPORTED_MODULE_2__.TicketsListComponent], imports: [src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
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
        ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_29__.NzDrawerModule, _tickets_routing__WEBPACK_IMPORTED_MODULE_3__.TicketRoutingModule, ngx_toastr__WEBPACK_IMPORTED_MODULE_31__.ToastrModule, devextreme_angular__WEBPACK_IMPORTED_MODULE_35__.DxDataGridModule,
        devextreme_angular__WEBPACK_IMPORTED_MODULE_36__.DxButtonModule] }); })();


/***/ }),

/***/ 10753:
/*!*****************************************************************!*\
  !*** ./src/app/apps/work_management/tickets/tickets.routing.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TicketRoutingModule": () => (/* binding */ TicketRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _tickets_list_tickets_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tickets-list/tickets-list.component */ 33122);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [
    { path: '', redirectTo: 'list' },
    { path: 'list', component: _tickets_list_tickets_list_component__WEBPACK_IMPORTED_MODULE_0__.TicketsListComponent },
];
class TicketRoutingModule {
}
TicketRoutingModule.ɵfac = function TicketRoutingModule_Factory(t) { return new (t || TicketRoutingModule)(); };
TicketRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: TicketRoutingModule });
TicketRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](TicketRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_apps_work_management_tickets_tickets_module_ts.js.map