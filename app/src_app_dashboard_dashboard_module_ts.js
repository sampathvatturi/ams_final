"use strict";
(self["webpackChunkenlink"] = self["webpackChunkenlink"] || []).push([["src_app_dashboard_dashboard_module_ts"],{

/***/ 50425:
/*!*******************************************************!*\
  !*** ./src/app/dashboard/dashboard-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardRoutingModule": () => (/* binding */ DashboardRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _default_default_dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./default/default-dashboard.component */ 27176);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [
    {
        path: '',
        component: _default_default_dashboard_component__WEBPACK_IMPORTED_MODULE_0__.DefaultDashboardComponent,
        data: {
            title: 'State Dashboard ',
            headerDisplay: "none"
        }
    },
    {
        path: 'state-dashboard',
        component: _default_default_dashboard_component__WEBPACK_IMPORTED_MODULE_0__.DefaultDashboardComponent,
        data: {
            title: 'State Dashboard ',
            headerDisplay: "none"
        }
    },
];
class DashboardRoutingModule {
}
DashboardRoutingModule.ɵfac = function DashboardRoutingModule_Factory(t) { return new (t || DashboardRoutingModule)(); };
DashboardRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: DashboardRoutingModule });
DashboardRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](DashboardRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 34814:
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardModule": () => (/* binding */ DashboardModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/shared.module */ 44466);
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard-routing.module */ 50425);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ng2-charts */ 31208);
/* harmony import */ var _shared_services_theme_constant_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/theme-constant.service */ 87341);
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
/* harmony import */ var ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/checkbox */ 28154);
/* harmony import */ var _default_default_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./default/default-dashboard.component */ 27176);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/core */ 22560);



// import { NgChartjsModule } from 'ng-chartjs';




















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
    ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_19__.NzCheckboxModule
];
class DashboardModule {
}
DashboardModule.ɵfac = function DashboardModule_Factory(t) { return new (t || DashboardModule)(); };
DashboardModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineNgModule"]({ type: DashboardModule });
DashboardModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineInjector"]({ providers: [
        _shared_services_theme_constant_service__WEBPACK_IMPORTED_MODULE_2__.ThemeConstantService
    ], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_21__.CommonModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
        _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_1__.DashboardRoutingModule,
        // NgChartjsModule,
        ng2_charts__WEBPACK_IMPORTED_MODULE_22__.NgChartsModule, antdModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵsetNgModuleScope"](DashboardModule, { declarations: [_default_default_dashboard_component__WEBPACK_IMPORTED_MODULE_3__.DefaultDashboardComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_21__.CommonModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
        _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_1__.DashboardRoutingModule,
        // NgChartjsModule,
        ng2_charts__WEBPACK_IMPORTED_MODULE_22__.NgChartsModule, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_4__.NzButtonModule,
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
        ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_19__.NzCheckboxModule] }); })();


/***/ }),

/***/ 27176:
/*!******************************************************************!*\
  !*** ./src/app/dashboard/default/default-dashboard.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DefaultDashboardComponent": () => (/* binding */ DefaultDashboardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _shared_services_theme_constant_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/services/theme-constant.service */ 87341);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/button */ 17619);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 16495);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-charts */ 31208);
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/card */ 48332);
/* harmony import */ var ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/avatar */ 44178);
/* harmony import */ var ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/badge */ 98757);
/* harmony import */ var ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/progress */ 98412);
/* harmony import */ var ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/radio */ 45953);
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/table */ 37085);
/* harmony import */ var ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/tag */ 5020);














function DefaultDashboardComponent_tr_121_nz_progress_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "nz-progress", 37);
} if (rf & 2) {
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzStrokeColor", ctx_r3.cyan)("nzPercent", item_r2.stock)("nzShowInfo", false);
} }
function DefaultDashboardComponent_tr_121_nz_progress_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "nz-progress", 37);
} if (rf & 2) {
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzStrokeColor", ctx_r4.gold)("nzPercent", item_r2.stock)("nzShowInfo", false);
} }
function DefaultDashboardComponent_tr_121_nz_progress_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "nz-progress", 37);
} if (rf & 2) {
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzStrokeColor", ctx_r5.red)("nzPercent", item_r2.stock)("nzShowInfo", false);
} }
function DefaultDashboardComponent_tr_121_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td")(2, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "nz-avatar", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "td")(12, "div", 32)(13, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, DefaultDashboardComponent_tr_121_nz_progress_14_Template, 1, 3, "nz-progress", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, DefaultDashboardComponent_tr_121_nz_progress_15_Template, 1, 3, "nz-progress", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, DefaultDashboardComponent_tr_121_nz_progress_16_Template, 1, 3, "nz-progress", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSrc", item_r2.avatar);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r2.sales);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("$", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](10, 8, item_r2.earn, "3.2-5"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r2.stock > 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r2.stock > 40 && item_r2.stock < 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r2.stock < 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r2.stock);
} }
class DefaultDashboardComponent {
    constructor(colorConfig) {
        this.colorConfig = colorConfig;
        this.themeColors = this.colorConfig.get().colors;
        this.blue = this.themeColors.blue;
        this.blueLight = this.themeColors.blueLight;
        this.cyan = this.themeColors.cyan;
        this.cyanLight = this.themeColors.cyanLight;
        this.gold = this.themeColors.gold;
        this.purple = this.themeColors.purple;
        this.purpleLight = this.themeColors.purpleLight;
        this.red = this.themeColors.red;
        this.taskListIndex = 0;
        this.revenueChartFormat = 'revenueMonth';
        this.revenueChartData = [{
                data: [30, 60, 40, 50, 40, 55, 85, 65, 75, 50, 70],
                label: 'Series A'
            }];
        this.currentrevenueChartLabelsIdx = 1;
        this.revenueChartLabels = ["16th", "17th", "18th", "19th", "20th", "21th", "22th", "23th", "24th", "25th", "26th"];
        this.revenueChartOptions = {
            maintainAspectRatio: false,
            responsive: true,
            hover: {
                mode: 'nearest',
                intersect: true
            },
            tooltips: {
                mode: 'index'
            },
            scales: {
                xAxes: [{
                        gridLines: [{
                                display: false,
                            }],
                        ticks: {
                            display: true,
                            fontColor: this.themeColors.grayLight,
                            fontSize: 13,
                            padding: 10
                        }
                    }],
                yAxes: [{
                        gridLines: {
                            drawBorder: false,
                            drawTicks: false,
                            borderDash: [3, 4],
                            zeroLineWidth: 1,
                            zeroLineBorderDash: [3, 4]
                        },
                        ticks: {
                            display: true,
                            max: 100,
                            stepSize: 20,
                            fontColor: this.themeColors.grayLight,
                            fontSize: 13,
                            padding: 10
                        }
                    }],
            }
        };
        this.revenueChartColors = [
            {
                backgroundColor: this.themeColors.transparent,
                borderColor: this.blue,
                pointBackgroundColor: this.blue,
                pointBorderColor: this.themeColors.white,
                pointHoverBackgroundColor: this.blueLight,
                pointHoverBorderColor: this.blueLight
            }
        ];
        this.revenueChartType = 'line';
        this.customersChartLabels = ['New', 'Returning', 'Others'];
        this.customersChartData = [350, 450, 100];
        this.customersChartColors = [{
                backgroundColor: [this.cyan, this.purple, this.gold],
                pointBackgroundColor: [this.cyan, this.purple, this.gold]
            }];
        this.customersChartOptions = {
            cutoutPercentage: 75,
            maintainAspectRatio: false
        };
        this.customersChartType = 'doughnut';
        //Bar Chart
        this.avgProfitChartOptions = {
            scaleShowVerticalLines: false,
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                xAxes: [{
                        display: true,
                        stacked: true,
                        scaleLabel: {
                            display: false,
                            labelString: 'Month'
                        },
                        gridLines: false,
                        ticks: {
                            display: true,
                            beginAtZero: true,
                            fontSize: 13,
                            padding: 10
                        }
                    }],
                yAxes: [{
                        display: true,
                        stacked: true,
                        scaleLabel: {
                            display: false,
                            labelString: 'Value'
                        },
                        gridLines: {
                            drawBorder: false,
                            offsetGridLines: false,
                            drawTicks: false,
                            borderDash: [3, 4],
                            zeroLineWidth: 1,
                            zeroLineBorderDash: [3, 4]
                        },
                        ticks: {
                            stepSize: 40,
                            display: true,
                            beginAtZero: true,
                            fontSize: 13,
                            padding: 10
                        }
                    }]
            }
        };
        this.avgProfitChartLabels = ['Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'];
        this.avgProfitChartType = 'bar';
        this.avgProfitChartLegend = false;
        this.avgProfitChartColors = [
            {
                backgroundColor: this.blue,
                borderWidth: 0
            },
            {
                backgroundColor: this.blueLight,
                borderWidth: 0
            }
        ];
        this.avgProfitChartData = [
            {
                data: [38, 38, 30, 19, 56, 55, 31],
                label: 'Series A',
                categoryPercentage: 0.35,
                barPercentage: 0.3,
            },
            {
                data: [55, 69, 90, 81, 86, 27, 77],
                label: 'Series B',
                categoryPercentage: 0.35,
                barPercentage: 0.3,
            }
        ];
        this.productsList = [
            {
                name: 'Gray Sofa',
                avatar: 'assets/images/others/thumb-9.jpg',
                earn: 1912,
                sales: 81,
                stock: 82,
            },
            {
                name: 'Beat Headphone',
                avatar: 'assets/images/others/thumb-10.jpg',
                earn: 1377,
                sales: 26,
                stock: 61
            },
            {
                name: 'Wooden Rhino',
                avatar: 'assets/images/others/thumb-11.jpg',
                earn: 9212,
                sales: 71,
                stock: 23,
            },
            {
                name: 'Red Chair',
                avatar: 'assets/images/others/thumb-12.jpg',
                earn: 1298,
                sales: 79,
                stock: 54,
            },
            {
                name: 'Wristband',
                avatar: 'assets/images/others/thumb-13.jpg',
                earn: 7376,
                sales: 60,
                stock: 76,
            }
        ];
        this.fileList = [
            {
                icon: "file-word",
                name: "Documentation.doc",
                color: this.blue,
                size: "1.2MB"
            },
            {
                icon: "file-excel",
                name: "Expensess.xls",
                color: this.cyan,
                size: "518KB"
            },
            {
                icon: "file-text",
                name: "Receipt.txt",
                color: this.purple,
                size: "355KB"
            },
            {
                icon: "file-word",
                name: "Project Requirement.doc",
                color: this.blue,
                size: "1.6MB"
            },
            {
                icon: "file-pdf",
                name: "App Flow.pdf",
                color: this.red,
                size: "19.8MB"
            },
            {
                icon: "file-ppt",
                name: "Presentation.ppt",
                color: this.gold,
                size: "2.7MB"
            },
        ];
        this.activityList = [
            {
                name: "Virgil Gonzales",
                avatar: this.blue,
                date: "10:44 PM",
                action: "Complete task",
                target: "Prototype Design",
                actionType: "completed"
            },
            {
                name: "Lilian Stone",
                avatar: this.cyan,
                date: "8:34 PM",
                action: "Attached file",
                target: "Mockup Zip",
                actionType: "upload"
            },
            {
                name: "Erin Gonzales",
                avatar: this.gold,
                date: "8:34 PM",
                action: "Commented",
                target: "'This is not our work!'",
                actionType: "comment"
            },
            {
                name: "Riley Newman",
                avatar: this.blue,
                date: "8:34 PM",
                action: "Commented",
                target: "'Hi, please done this before tommorow'",
                actionType: "comment"
            },
            {
                name: "Pamela Wanda",
                avatar: this.red,
                date: "8:34 PM",
                action: "Removed",
                target: "a file",
                actionType: "removed"
            },
            {
                name: "Marshall Nichols",
                avatar: this.purple,
                date: "5:21 PM",
                action: "Create",
                target: "this project",
                actionType: "created"
            }
        ];
        this.taskListToday = [
            {
                title: "Define users and workflow",
                desc: "A cheeseburger is more than sandwich",
                checked: false
            },
            {
                title: "Schedule jobs",
                desc: "I'm gonna build me an airport",
                checked: true
            },
            {
                title: "Extend the data model",
                desc: "Let us wax poetic about cheeseburger.",
                checked: true
            },
            {
                title: "Change interface",
                desc: "Efficiently unleash cross-media information",
                checked: false
            },
            {
                title: "Create databases",
                desc: "Here's the story of a man named Brady",
                checked: false
            }
        ];
        this.taskListWeek = [
            {
                title: "Verify connectivity",
                desc: "Bugger bag egg's old boy willy jolly",
                checked: false
            },
            {
                title: "Order console machines",
                desc: "Value proposition alpha crowdsource",
                checked: false
            },
            {
                title: "Customize Template",
                desc: "Do you see any Teletubbies in here",
                checked: true
            },
            {
                title: "Batch schedule",
                desc: "Trillion a very small stage in a vast",
                checked: true
            },
            {
                title: "Prepare implementation",
                desc: "Drop in axle roll-in rail slide",
                checked: true
            }
        ];
        this.taskListMonth = [
            {
                title: "Create user groups",
                desc: "Nipperkin run a rig ballast chase",
                checked: false
            },
            {
                title: "Design Wireframe",
                desc: "Value proposition alpha crowdsource",
                checked: true
            },
            {
                title: "Project Launch",
                desc: "I'll be sure to note that",
                checked: false
            },
            {
                title: "Management meeting",
                desc: "Hand-crafted exclusive finest",
                checked: false
            },
            {
                title: "Extend data model",
                desc: "European minnow priapumfish mosshead",
                checked: true
            }
        ];
    }
}
DefaultDashboardComponent.ɵfac = function DefaultDashboardComponent_Factory(t) { return new (t || DefaultDashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_services_theme_constant_service__WEBPACK_IMPORTED_MODULE_0__.ThemeConstantService)); };
DefaultDashboardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DefaultDashboardComponent, selectors: [["ng-component"]], decls: 122, vars: 27, consts: [[1, "row"], [1, "col-md-6", "col-lg-3"], [1, "media", "align-items-center"], ["nzIcon", "dollar", 1, "ant-avatar-blue", 3, "nzSize"], [1, "m-l-15"], [1, "m-b-0"], [1, "m-b-0", "text-muted"], ["nzIcon", "line-chart", 1, "ant-avatar-cyan", 3, "nzSize"], ["nzIcon", "profile", 1, "ant-avatar-gold", 3, "nzSize"], ["nzIcon", "user", 1, "ant-avatar-purple", 3, "nzSize"], [1, "col-md-12", "col-lg-8"], [1, "d-flex", "justify-content-between", "align-items-center"], [3, "ngModel", "ngModelChange"], ["nz-radio-button", "", "nzValue", "revenueMonth"], ["nz-radio-button", "", "nzValue", "revenueYear"], [1, "m-t-50", 2, "height", "330px"], ["baseChart", "", 3, "datasets", "labels", "options", "legend", "type"], [1, "col-md-12", "col-lg-4"], [1, "m-v-60", "text-center", 2, "height", "200px"], [1, "row", "border-top", "p-t-25"], [1, "col-4"], [1, "d-flex", "justify-content-center"], ["nzStatus", "default", 3, "nzColor"], [1, "m-l-5"], [1, "m-b-0", "muted"], [3, "nzColor"], [1, "m-t-50", 2, "height", "360px"], ["nz-button", "", "nzType", "default", "nzSize", "small"], [1, "m-t-30"], [1, "no-border-last", 3, "nzData", "nzShowPagination"], ["productTable", ""], [4, "ngFor", "ngForOf"], [1, "d-flex", "align-items-center"], ["nzShape", "square", "nzIcon", "picture", 3, "nzSrc"], [1, "m-l-10"], [1, "w-90", "p-r-10"], ["nzSize", "small", 3, "nzStrokeColor", "nzPercent", "nzShowInfo", 4, "ngIf"], ["nzSize", "small", 3, "nzStrokeColor", "nzPercent", "nzShowInfo"]], template: function DefaultDashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "nz-card")(3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "nz-avatar", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4)(6, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "$23,523");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Profit");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 1)(11, "nz-card")(12, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "nz-avatar", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 4)(15, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "+ 17.21%");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Growth");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 1)(20, "nz-card")(21, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "nz-avatar", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 4)(24, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "3,685");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Orders");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 1)(29, "nz-card")(30, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "nz-avatar", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 4)(33, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "1,832");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Customers");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 0)(38, "div", 10)(39, "nz-card")(40, "div", 11)(41, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Total Revenue");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div")(44, "nz-radio-group", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function DefaultDashboardComponent_Template_nz_radio_group_ngModelChange_44_listener($event) { return ctx.revenueChartFormat = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Month");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Year");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](50, "canvas", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 17)(52, "nz-card")(53, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "Customers");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](56, "canvas", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 19)(58, "div", 20)(59, "div", 21)(60, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](61, "nz-badge", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "div", 23)(63, "h4", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, "350");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, "New");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "div", 20)(68, "div", 21)(69, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](70, "nz-badge", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "div", 23)(72, "h4", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, "450");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75, "Returning");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "div", 20)(77, "div", 21)(78, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](79, "nz-badge", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "div", 23)(81, "h4", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](82, "100");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](84, "Others");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "div", 0)(86, "div", 17)(87, "nz-card")(88, "div", 11)(89, "div")(90, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](91, "$17,267");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](93, "Avg.Profit");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "div")(95, "nz-tag", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](96, "+ 5.7%");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](98, "canvas", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "div", 10)(100, "nz-card")(101, "div", 11)(102, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](103, "Top Product");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "div")(105, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](106, "View All");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "div", 28)(108, "nz-table", 29, 30)(110, "thead")(111, "tr")(112, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](113, "Product");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](115, "Sales");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](116, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](117, "Earning");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](118, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](119, "Stock Left");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](120, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](121, DefaultDashboardComponent_tr_121_Template, 19, 11, "tr", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](109);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSize", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSize", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSize", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSize", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.revenueChartFormat);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("datasets", ctx.revenueChartData)("labels", ctx.revenueChartLabels)("options", ctx.revenueChartOptions)("legend", false)("type", ctx.revenueChartType);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("datasets", ctx.customersChartData)("labels", ctx.customersChartLabels)("options", ctx.customersChartOptions)("legend", false)("type", ctx.customersChartType);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzColor", ctx.cyan);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzColor", ctx.purple);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzColor", ctx.gold);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzColor", "cyan");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("datasets", ctx.avgProfitChartData)("labels", ctx.avgProfitChartLabels)("options", ctx.avgProfitChartOptions)("legend", ctx.avgProfitChartLegend)("type", ctx.avgProfitChartType);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzData", ctx.productsList)("nzShowPagination", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _r0.data);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_4__.NzButtonComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_5__["ɵNzTransitionPatchDirective"], ng2_charts__WEBPACK_IMPORTED_MODULE_6__.BaseChartDirective, ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_7__.NzCardComponent, ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_8__.NzAvatarComponent, ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_9__.NzBadgeComponent, ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_10__.NzProgressComponent, ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_11__.NzRadioComponent, ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_11__.NzRadioButtonDirective, ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_11__.NzRadioGroupComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_12__.NzTableComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_12__.NzTableCellDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_12__.NzThMeasureDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_12__.NzTheadComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_12__.NzTbodyComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_12__.NzTrDirective, ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_13__.NzTagComponent, _angular_common__WEBPACK_IMPORTED_MODULE_2__.DecimalPipe], encapsulation: 2 });


/***/ })

}]);
//# sourceMappingURL=src_app_dashboard_dashboard_module_ts.js.map