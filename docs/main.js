(self["webpackChunkng_weather"] = self["webpackChunkng_weather"] || []).push([["main"],{

/***/ 6401:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component.html?ngResource */ 3383);
/* harmony import */ var _app_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.css?ngResource */ 6715);
/* harmony import */ var _app_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_app_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let AppComponent = class AppComponent {
  constructor() {}
  static #_ = this.ctorParameters = () => [];
};
AppComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
  selector: 'app-root',
  template: _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_app_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], AppComponent);


/***/ }),

/***/ 8629:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/service-worker */ 1509);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../environments/environment */ 553);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 6401);
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.routing */ 34);
/* harmony import */ var _components_dynamic_tabs_dynamic_tab_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/dynamic-tabs/dynamic-tab.directive */ 6368);
/* harmony import */ var _components_dynamic_tabs_dynamic_tabs_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/dynamic-tabs/dynamic-tabs.component */ 2374);
/* harmony import */ var _core_interceptors_caching_interceptor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/interceptors/caching.interceptor */ 7822);
/* harmony import */ var _core_tokens_app_tokens__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/tokens/app.tokens */ 9019);
/* harmony import */ var _features_current_conditions_current_conditions_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./features/current-conditions/current-conditions.component */ 5965);
/* harmony import */ var _features_forecasts_list_forecasts_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./features/forecasts-list/forecasts-list.component */ 5563);
/* harmony import */ var _features_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./features/main-page/main-page.component */ 5259);
/* harmony import */ var _features_zipcode_entry_zipcode_entry_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./features/zipcode-entry/zipcode-entry.component */ 9123);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















let AppModule = class AppModule {};
AppModule = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.NgModule)({
  declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _features_zipcode_entry_zipcode_entry_component__WEBPACK_IMPORTED_MODULE_10__.ZipcodeEntryComponent, _features_forecasts_list_forecasts_list_component__WEBPACK_IMPORTED_MODULE_8__.ForecastsListComponent, _features_current_conditions_current_conditions_component__WEBPACK_IMPORTED_MODULE_7__.CurrentConditionsComponent, _features_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_9__.MainPageComponent],
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.BrowserModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpClientModule, _angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterModule, _app_routing__WEBPACK_IMPORTED_MODULE_2__.routing, _components_dynamic_tabs_dynamic_tabs_component__WEBPACK_IMPORTED_MODULE_4__.DynamicTabContainerComponent, _components_dynamic_tabs_dynamic_tab_directive__WEBPACK_IMPORTED_MODULE_3__.DynamicTabComponent, _angular_service_worker__WEBPACK_IMPORTED_MODULE_16__.ServiceWorkerModule.register('/ngsw-worker.js', {
    enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.production
  })],
  providers: [{
    provide: _core_tokens_app_tokens__WEBPACK_IMPORTED_MODULE_6__.CACHE_DURATION,
    useValue: _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.cacheDuration
  }, {
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HTTP_INTERCEPTORS,
    useClass: _core_interceptors_caching_interceptor__WEBPACK_IMPORTED_MODULE_5__.CachingInterceptor,
    multi: true
  }]
})], AppModule);


/***/ }),

/***/ 34:
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   routing: () => (/* binding */ routing)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _features_forecasts_list_forecasts_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./features/forecasts-list/forecasts-list.component */ 5563);
/* harmony import */ var _features_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./features/main-page/main-page.component */ 5259);



const appRoutes = [{
  path: '',
  component: _features_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_1__.MainPageComponent
}, {
  path: 'forecast/:zipcode',
  component: _features_forecasts_list_forecasts_list_component__WEBPACK_IMPORTED_MODULE_0__.ForecastsListComponent
}];
const routing = _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(appRoutes, {});

/***/ }),

/***/ 6368:
/*!******************************************************************!*\
  !*** ./src/app/components/dynamic-tabs/dynamic-tab.directive.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DynamicTabComponent: () => (/* binding */ DynamicTabComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let DynamicTabComponent = class DynamicTabComponent {
  constructor() {
    this.title = '';
    this.onClose = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  static #_ = this.propDecorators = {
    title: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    onClose: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    bodyTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef]
    }]
  };
};
DynamicTabComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive)({
  selector: 'dynamic-tab',
  standalone: true
})], DynamicTabComponent);


/***/ }),

/***/ 2374:
/*!*******************************************************************!*\
  !*** ./src/app/components/dynamic-tabs/dynamic-tabs.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DynamicTabContainerComponent: () => (/* binding */ DynamicTabContainerComponent)
/* harmony export */ });
/* harmony import */ var _dynamic_tabs_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dynamic-tabs.component.html?ngResource */ 6652);
/* harmony import */ var _dynamic_tabs_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dynamic-tabs.component.css?ngResource */ 3455);
/* harmony import */ var _dynamic_tabs_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_dynamic_tabs_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 7422);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 5746);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 5046);
/* harmony import */ var _dynamic_tab_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dynamic-tab.directive */ 6368);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};






let DynamicTabContainerComponent = class DynamicTabContainerComponent {
  constructor() {
    this.currentTabIndex = 0;
  }
  ngAfterContentInit() {
    this.subscription = this.tabs.changes.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(tabs => tabs.toArray()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(currentTabs => {
      if (currentTabs.length === 0) {
        this.currentTabIndex = 0; //* reset index when there are no tabs
      }
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.filter)(currentTabs => currentTabs.length > 0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(currentTabs => Math.min(this.currentTabIndex, currentTabs.length - 1))).subscribe(index => this.openTab(index));
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  openTab(index) {
    this.currentTabIndex = index;
  }
  closeTab(tab, index) {
    tab.onClose.emit();
  }
  static #_ = this.propDecorators = {
    tabs: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ContentChildren,
      args: [_dynamic_tab_directive__WEBPACK_IMPORTED_MODULE_2__.DynamicTabComponent]
    }]
  };
};
DynamicTabContainerComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'dynamic-tabs',
  standalone: true,
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule],
  template: _dynamic_tabs_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_dynamic_tabs_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], DynamicTabContainerComponent);


/***/ }),

/***/ 7822:
/*!**********************************************************!*\
  !*** ./src/app/core/interceptors/caching.interceptor.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CachingInterceptor: () => (/* binding */ CachingInterceptor)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 3064);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 5746);
/* harmony import */ var _services_caching_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/caching.service */ 282);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};





let CachingInterceptor = class CachingInterceptor {
  constructor() {
    this.cachingService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_services_caching_service__WEBPACK_IMPORTED_MODULE_0__.CachingService);
  }
  intercept(request, next) {
    // Check if the request is a GET request
    if (request.method === 'GET') {
      const cachedData = this.cachingService.getData(request.url);
      if (cachedData) {
        // If cached data exists, return it as an Observable
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__.Observable(observer => {
          observer.next(new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpResponse({
            body: cachedData
          }));
          observer.complete();
        });
      } else {
        // If no cached data, make the HTTP request and cache the response
        return next.handle(request).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(event => {
          if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpResponse) {
            this.cachingService.cacheData(request.url, event.body);
          }
        }));
      }
    } else {
      // If it's not a GET request, proceed with the original request
      return next.handle(request);
    }
  }
};
CachingInterceptor = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)()], CachingInterceptor);


/***/ }),

/***/ 282:
/*!**************************************************!*\
  !*** ./src/app/core/services/caching.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CachingService: () => (/* binding */ CachingService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _tokens_app_tokens__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../tokens/app.tokens */ 9019);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};


let CachingService = class CachingService {
  constructor() {
    this.storageKeyPrefix = 'weather-app-cache-';
    this.maxAge = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_tokens_app_tokens__WEBPACK_IMPORTED_MODULE_0__.CACHE_DURATION) ?? 0;
  }
  // Check if data is present in cache and not expired
  getData(key) {
    const storageKey = this.getStorageKey(key);
    const cachedData = localStorage.getItem(storageKey);
    try {
      const {
        data,
        timestamp
      } = cachedData ? JSON.parse(cachedData) : {
        data: null,
        timestamp: 0
      };
      if (Date.now() - timestamp < this.maxAge) {
        return data;
      }
    } catch (error) {
      console.error('Error parsing JSON from localStorage:', error);
    }
    return null;
  }
  // Cache data with a specific key
  cacheData(key, data) {
    const storageKey = this.getStorageKey(key);
    const timestamp = Date.now();
    const cacheEntry = {
      data,
      timestamp
    };
    try {
      localStorage.setItem(storageKey, JSON.stringify(cacheEntry));
    } catch (error) {
      console.error('Error storing data in localStorage:', error);
    }
  }
  // Generate a unique storage key for each cache entry
  getStorageKey(key) {
    return `${this.storageKeyPrefix}${key}`;
  }
};
CachingService = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
  providedIn: 'root'
})], CachingService);


/***/ }),

/***/ 689:
/*!***************************************************!*\
  !*** ./src/app/core/services/stateful.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BaseStatefulService: () => (/* binding */ BaseStatefulService)
/* harmony export */ });
/* harmony import */ var _angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core/rxjs-interop */ 839);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 2484);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 462);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 5083);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 680);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 5746);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 6932);



class BaseStatefulService {
  constructor() {
    this.actions = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    this.state = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(this.getInitialState());
    this.state$ = this.state.asObservable().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.shareReplay)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(s => this.onStateChange(s)));
    this.actions.pipe((0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_5__.takeUntilDestroyed)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.scan)((state, action) => this.reducer(state, action), this.getInitialState())).subscribe(newState => this.state.next(newState));
  }
  dispatch(action) {
    this.actions.next(action);
  }
}

/***/ }),

/***/ 9019:
/*!*******************************************!*\
  !*** ./src/app/core/tokens/app.tokens.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CACHE_DURATION: () => (/* binding */ CACHE_DURATION)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

const CACHE_DURATION = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('Cache Duration');

/***/ }),

/***/ 5965:
/*!*****************************************************************************!*\
  !*** ./src/app/features/current-conditions/current-conditions.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CurrentConditionsComponent: () => (/* binding */ CurrentConditionsComponent)
/* harmony export */ });
/* harmony import */ var _current_conditions_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./current-conditions.component.html?ngResource */ 9009);
/* harmony import */ var _current_conditions_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./current-conditions.component.css?ngResource */ 6498);
/* harmony import */ var _current_conditions_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_current_conditions_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 9681);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 4555);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 7965);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 7422);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 8175);
/* harmony import */ var _services_location_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/location.service */ 5434);
/* harmony import */ var _services_weather_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/weather.service */ 1125);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};







let CurrentConditionsComponent = class CurrentConditionsComponent {
  constructor() {
    this.weatherService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_services_weather_service__WEBPACK_IMPORTED_MODULE_3__.WeatherService);
    this.locationService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_services_location_service__WEBPACK_IMPORTED_MODULE_2__.LocationService);
    // Observable to store the combined data for all locations
    this.locationsData$ = this.locationService.state$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.mergeMap)(locationState => {
      // Check if there are any stored zip code inputs
      if (locationState.length === 0) {
        // If no zip codes, stop the chain to avoid unnecessary operations
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)([]);
      }
      // For each stored location, fetch the corresponding weather data
      // Map it to an array of objects containing zip and corresponding data or error message
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.combineLatest)(this.getLocationDataForState(locationState));
    }));
  }
  // Request data for each zipcode in the locationsState using the weatherService
  // If there is no data for a certain zipcode, return an object with an error message and no data
  getLocationDataForState(locationState) {
    return locationState.map(zipcode => this.weatherService.addCurrentConditions(zipcode).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(data => ({
      zipcode,
      data,
      title: `${data.name} (${zipcode})`
    })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.catchError)(errorResponse => {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)({
        zipcode: zipcode,
        title: zipcode,
        errorMessage: errorResponse.error.message || 'An error occurred'
      });
    })));
  }
};
CurrentConditionsComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'app-current-conditions',
  template: _current_conditions_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_current_conditions_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], CurrentConditionsComponent);


/***/ }),

/***/ 5563:
/*!*********************************************************************!*\
  !*** ./src/app/features/forecasts-list/forecasts-list.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ForecastsListComponent: () => (/* binding */ ForecastsListComponent)
/* harmony export */ });
/* harmony import */ var _forecasts_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forecasts-list.component.html?ngResource */ 8269);
/* harmony import */ var _forecasts_list_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forecasts-list.component.css?ngResource */ 4204);
/* harmony import */ var _forecasts_list_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_forecasts_list_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _services_weather_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/weather.service */ 1125);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};





let ForecastsListComponent = class ForecastsListComponent {
  constructor(weatherService, route) {
    this.weatherService = weatherService;
    route.params.subscribe(params => {
      this.zipcode = params['zipcode'];
      weatherService.getForecast(this.zipcode).subscribe(data => this.forecast = data);
    });
  }
  static #_ = this.ctorParameters = () => [{
    type: _services_weather_service__WEBPACK_IMPORTED_MODULE_2__.WeatherService
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute
  }];
};
ForecastsListComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'app-forecasts-list',
  template: _forecasts_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_forecasts_list_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], ForecastsListComponent);


/***/ }),

/***/ 5259:
/*!***********************************************************!*\
  !*** ./src/app/features/main-page/main-page.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MainPageComponent: () => (/* binding */ MainPageComponent)
/* harmony export */ });
/* harmony import */ var _main_page_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main-page.component.html?ngResource */ 920);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};


let MainPageComponent = class MainPageComponent {};
MainPageComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Component)({
  selector: 'app-main-page',
  template: _main_page_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__
})], MainPageComponent);


/***/ }),

/***/ 9123:
/*!*******************************************************************!*\
  !*** ./src/app/features/zipcode-entry/zipcode-entry.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZipcodeEntryComponent: () => (/* binding */ ZipcodeEntryComponent)
/* harmony export */ });
/* harmony import */ var _zipcode_entry_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./zipcode-entry.component.html?ngResource */ 2969);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _services_location_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/location.service */ 5434);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let ZipcodeEntryComponent = class ZipcodeEntryComponent {
  constructor() {
    this.locationService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_services_location_service__WEBPACK_IMPORTED_MODULE_1__.LocationService);
  }
  addLocation(zipcode) {
    this.locationService.addLocation(zipcode);
  }
};
ZipcodeEntryComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
  selector: 'app-zipcode-entry',
  template: _zipcode_entry_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__
})], ZipcodeEntryComponent);


/***/ }),

/***/ 5434:
/*!**********************************************!*\
  !*** ./src/app/services/location.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LocationService: () => (/* binding */ LocationService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _core_services_stateful_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/services/stateful.service */ 689);
/* harmony import */ var _utils_state_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @utils/state-utils */ 5051);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};



const LOCATIONS = 'locations';
let LocationService = class LocationService extends _core_services_stateful_service__WEBPACK_IMPORTED_MODULE_0__.BaseStatefulService {
  constructor() {
    super();
    this.updateStorageFn = locations => localStorage.setItem(LOCATIONS, JSON.stringify(locations));
  }
  reducer(state, action) {
    switch (action.type) {
      case _utils_state_utils__WEBPACK_IMPORTED_MODULE_1__.ActionType.Add:
        return [...state, action.payload];
      case _utils_state_utils__WEBPACK_IMPORTED_MODULE_1__.ActionType.Remove:
        return [...state.slice(0, action.payload), ...state.slice(action.payload + 1)];
      default:
        return state;
    }
  }
  onStateChange(state) {
    this.updateStorageFn(state);
  }
  getInitialState() {
    return JSON.parse(localStorage.getItem(LOCATIONS)) ?? [];
  }
  // Additional methods specific to LocationService
  addLocation(zipcode) {
    this.dispatch({
      type: _utils_state_utils__WEBPACK_IMPORTED_MODULE_1__.ActionType.Add,
      payload: zipcode
    });
  }
  removeLocation(index) {
    this.dispatch({
      type: _utils_state_utils__WEBPACK_IMPORTED_MODULE_1__.ActionType.Remove,
      payload: index
    });
  }
  static #_ = this.ctorParameters = () => [];
};
LocationService = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
  providedIn: 'root'
})], LocationService);


/***/ }),

/***/ 1125:
/*!*********************************************!*\
  !*** ./src/app/services/weather.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WeatherService: () => (/* binding */ WeatherService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var WeatherService_1;


let WeatherService = class WeatherService {
  static #_ = WeatherService_1 = this;
  static #_2 = this.URL = 'http://api.openweathermap.org/data/2.5';
  static #_3 = this.APPID = '5a4b2d457ecbef9eb2a71e480b947604';
  static #_4 = this.ICON_URL = 'https://raw.githubusercontent.com/udacity/Sunshine-Version-2/sunshine_master/app/src/main/res/drawable-hdpi/';
  constructor(http) {
    this.http = http;
  }
  addCurrentConditions(zipcode) {
    // Here we make a request to get the current conditions data from the API. Note the use of backticks and an expression to insert the zipcode
    return this.http.get(`${WeatherService_1.URL}/weather?zip=${zipcode},us&units=imperial&APPID=${WeatherService_1.APPID}`);
  }
  getForecast(zipcode) {
    // Here we make a request to get the forecast data from the API. Note the use of backticks and an expression to insert the zipcode
    return this.http.get(`${WeatherService_1.URL}/forecast/daily?zip=${zipcode},us&units=imperial&cnt=5&APPID=${WeatherService_1.APPID}`);
  }
  getWeatherIcon(id) {
    if (id >= 200 && id <= 232) return WeatherService_1.ICON_URL + 'art_storm.png';else if (id >= 501 && id <= 511) return WeatherService_1.ICON_URL + 'art_rain.png';else if (id === 500 || id >= 520 && id <= 531) return WeatherService_1.ICON_URL + 'art_light_rain.png';else if (id >= 600 && id <= 622) return WeatherService_1.ICON_URL + 'art_snow.png';else if (id >= 801 && id <= 804) return WeatherService_1.ICON_URL + 'art_clouds.png';else if (id === 741 || id === 761) return WeatherService_1.ICON_URL + 'art_fog.png';else return WeatherService_1.ICON_URL + 'art_clear.png';
  }
  static #_5 = this.ctorParameters = () => [{
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient
  }];
};
WeatherService = WeatherService_1 = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
  providedIn: 'root'
})], WeatherService);


/***/ }),

/***/ 5051:
/*!**************************************!*\
  !*** ./src/app/utils/state-utils.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ActionType: () => (/* binding */ ActionType)
/* harmony export */ });
var ActionType;
(function (ActionType) {
  ActionType[ActionType["Init"] = 0] = "Init";
  ActionType[ActionType["Add"] = 1] = "Add";
  ActionType[ActionType["Remove"] = 2] = "Remove";
})(ActionType || (ActionType = {}));

/***/ }),

/***/ 553:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
const environment = {
  production: false,
  cacheDuration: 2 * 60 * 60 * 1000 // 2 hours in milliseconds
};

/***/ }),

/***/ 4913:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 4737);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 8629);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 553);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule);

/***/ }),

/***/ 6715:
/*!**********************************************!*\
  !*** ./src/app/app.component.css?ngResource ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 2487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ 1386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ``, "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 3455:
/*!*******************************************************************************!*\
  !*** ./src/app/components/dynamic-tabs/dynamic-tabs.component.css?ngResource ***!
  \*******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 2487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 1386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.tab-header {
	display: flex;
	align-items: center;
}

.tab-title {
	margin-right: 0.1rem;
	cursor: pointer;
	background-color: #337ab7;
	color: white;
	padding: 0.3rem 0.5rem;
	border: 1px solid black;
}

.tab-title button {
	color: white;
	background-color: transparent;
	border: none;
	margin-left: 1rem;
}

.tab-title.is-active {
	background-color: black;
}

.tab-content {
	padding: 5rem;
	border: 1px solid black;
}
`, "",{"version":3,"sources":["webpack://./src/app/components/dynamic-tabs/dynamic-tabs.component.css"],"names":[],"mappings":"AAAA;CACC,aAAa;CACb,mBAAmB;AACpB;;AAEA;CACC,oBAAoB;CACpB,eAAe;CACf,yBAAyB;CACzB,YAAY;CACZ,sBAAsB;CACtB,uBAAuB;AACxB;;AAEA;CACC,YAAY;CACZ,6BAA6B;CAC7B,YAAY;CACZ,iBAAiB;AAClB;;AAEA;CACC,uBAAuB;AACxB;;AAEA;CACC,aAAa;CACb,uBAAuB;AACxB","sourcesContent":[".tab-header {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n}\r\n\r\n.tab-title {\r\n\tmargin-right: 0.1rem;\r\n\tcursor: pointer;\r\n\tbackground-color: #337ab7;\r\n\tcolor: white;\r\n\tpadding: 0.3rem 0.5rem;\r\n\tborder: 1px solid black;\r\n}\r\n\r\n.tab-title button {\r\n\tcolor: white;\r\n\tbackground-color: transparent;\r\n\tborder: none;\r\n\tmargin-left: 1rem;\r\n}\r\n\r\n.tab-title.is-active {\r\n\tbackground-color: black;\r\n}\r\n\r\n.tab-content {\r\n\tpadding: 5rem;\r\n\tborder: 1px solid black;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 6498:
/*!*****************************************************************************************!*\
  !*** ./src/app/features/current-conditions/current-conditions.component.css?ngResource ***!
  \*****************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 2487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 1386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.close {
	cursor: pointer;
}

.flex {
	display: flex;
	justify-content: space-between;
}
`, "",{"version":3,"sources":["webpack://./src/app/features/current-conditions/current-conditions.component.css"],"names":[],"mappings":"AAAA;CACC,eAAe;AAChB;;AAEA;CACC,aAAa;CACb,8BAA8B;AAC/B","sourcesContent":[".close {\r\n\tcursor: pointer;\r\n}\r\n\r\n.flex {\r\n\tdisplay: flex;\r\n\tjustify-content: space-between;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 4204:
/*!*********************************************************************************!*\
  !*** ./src/app/features/forecasts-list/forecasts-list.component.css?ngResource ***!
  \*********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 2487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 1386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.icon {
  width: 45px;
  height: 45px;
  position: absolute;
  right: 20px;
  top: -2px;
}
`, "",{"version":3,"sources":["webpack://./src/app/features/forecasts-list/forecasts-list.component.css"],"names":[],"mappings":"AAAA;EACE,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,WAAW;EACX,SAAS;AACX","sourcesContent":[".icon {\r\n  width: 45px;\r\n  height: 45px;\r\n  position: absolute;\r\n  right: 20px;\r\n  top: -2px;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 3383:
/*!***********************************************!*\
  !*** ./src/app/app.component.html?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "<router-outlet></router-outlet>\r\n";

/***/ }),

/***/ 6652:
/*!********************************************************************************!*\
  !*** ./src/app/components/dynamic-tabs/dynamic-tabs.component.html?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ng-container *ngIf=\"tabs.length > 0\">\r\n\t<div class=\"tab-header\">\r\n\t\t<ng-container *ngFor=\"let tab of tabs; let i = index\">\r\n\t\t\t<div\r\n\t\t\t\tclass=\"tab-title\"\r\n\t\t\t\t[ngClass]=\"{ 'is-active': i === currentTabIndex }\"\r\n\t\t\t\t(click)=\"openTab(i)\"\r\n\t\t\t>\r\n\t\t\t\t{{ tab.title }}\r\n\t\t\t\t<button (click)=\"closeTab(tab, i)\">X</button>\r\n\t\t\t</div>\r\n\t\t</ng-container>\r\n\t</div>\r\n\t<div class=\"tab-content\">\r\n\t\t<ng-container *ngFor=\"let tab of tabs; let i = index\">\r\n\t\t\t<ng-container *ngIf=\"i === currentTabIndex\">\r\n\t\t\t\t<ng-container\r\n\t\t\t\t\t*ngTemplateOutlet=\"\r\n\t\t\t\t\t\ttab.bodyTemplate;\r\n\t\t\t\t\t\tcontext: { $implicit: tab }\r\n\t\t\t\t\t\"\r\n\t\t\t\t></ng-container>\r\n\t\t\t</ng-container>\r\n\t\t</ng-container>\r\n\t</div>\r\n</ng-container>\r\n";

/***/ }),

/***/ 9009:
/*!******************************************************************************************!*\
  !*** ./src/app/features/current-conditions/current-conditions.component.html?ngResource ***!
  \******************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<dynamic-tabs>\r\n\t<ng-container\r\n\t\t*ngFor=\"let location of locationsData$ | async; let i = index\"\r\n\t>\r\n\t\t<dynamic-tab\r\n\t\t\t[title]=\"location.title\"\r\n\t\t\t(onClose)=\"locationService.removeLocation(i)\"\r\n\t\t>\r\n\t\t\t<ng-template let-tab=\"location\">\r\n\t\t\t\t<div class=\"flex\">\r\n\t\t\t\t\t<ng-container *ngIf=\"location.data; else errorTemplate\">\r\n\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t<h4>\r\n\t\t\t\t\t\t\t\tCurrent conditions:\r\n\t\t\t\t\t\t\t\t{{ location.data.weather[0].main }}\r\n\t\t\t\t\t\t\t</h4>\r\n\t\t\t\t\t\t\t<h4>Temperatures today:</h4>\r\n\t\t\t\t\t\t\t<p>\r\n\t\t\t\t\t\t\t\tCurrent\r\n\t\t\t\t\t\t\t\t{{ location.data.main.temp | number : '.0-0' }}\r\n\t\t\t\t\t\t\t\t- Max\r\n\t\t\t\t\t\t\t\t{{\r\n\t\t\t\t\t\t\t\t\tlocation.data.main.temp_max\r\n\t\t\t\t\t\t\t\t\t\t| number : '.0-0'\r\n\t\t\t\t\t\t\t\t}}\r\n\t\t\t\t\t\t\t\t- Min\r\n\t\t\t\t\t\t\t\t{{\r\n\t\t\t\t\t\t\t\t\tlocation.data.main.temp_min\r\n\t\t\t\t\t\t\t\t\t\t| number : '.0-0'\r\n\t\t\t\t\t\t\t\t}}\r\n\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t<p>\r\n\t\t\t\t\t\t\t\t<a\r\n\t\t\t\t\t\t\t\t\t[routerLink]=\"[\r\n\t\t\t\t\t\t\t\t\t\t'/forecast',\r\n\t\t\t\t\t\t\t\t\t\tlocation.zipcode\r\n\t\t\t\t\t\t\t\t\t]\"\r\n\t\t\t\t\t\t\t\t\t>Show 5-day forecast for\r\n\t\t\t\t\t\t\t\t\t{{ location.data.name }}</a\r\n\t\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t<img\r\n\t\t\t\t\t\t\t\t[src]=\"\r\n\t\t\t\t\t\t\t\t\tweatherService.getWeatherIcon(\r\n\t\t\t\t\t\t\t\t\t\tlocation.data.weather[0].id\r\n\t\t\t\t\t\t\t\t\t)\r\n\t\t\t\t\t\t\t\t\"\r\n\t\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t<ng-template #errorTemplate>\r\n\t\t\t\t\t\t<h4>{{ location.errorMessage }}</h4>\r\n\t\t\t\t\t</ng-template>\r\n\t\t\t\t</div>\r\n\t\t\t</ng-template>\r\n\t\t</dynamic-tab>\r\n\t</ng-container>\r\n</dynamic-tabs>\r\n";

/***/ }),

/***/ 8269:
/*!**********************************************************************************!*\
  !*** ./src/app/features/forecasts-list/forecasts-list.component.html?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div>\r\n\t<div class=\"panel panel-default\">\r\n\t\t<div class=\"panel-heading\">\r\n\t\t\t<h3 class=\"panel-title\">\r\n\t\t\t\t5-day forecast for {{ forecast?.city.name }}\r\n\t\t\t</h3>\r\n\t\t</div>\r\n\t\t<ul class=\"list-group\">\r\n\t\t\t<li\r\n\t\t\t\t*ngFor=\"let dailyForecast of forecast?.list\"\r\n\t\t\t\tclass=\"list-group-item\"\r\n\t\t\t>\r\n\t\t\t\t{{ dailyForecast.dt * 1000 | date : 'EEEE, MMM d' }}:\r\n\t\t\t\t{{ dailyForecast.weather[0].main }}\r\n\t\t\t\t- Min: {{ dailyForecast.temp.min | number : '.0-0' }} - Max:\r\n\t\t\t\t{{ dailyForecast.temp.max | number : '.0-0' }}\r\n\r\n\t\t\t\t<img\r\n\t\t\t\t\t[src]=\"\r\n\t\t\t\t\t\tweatherService.getWeatherIcon(\r\n\t\t\t\t\t\t\tdailyForecast.weather[0].id\r\n\t\t\t\t\t\t)\r\n\t\t\t\t\t\"\r\n\t\t\t\t\tclass=\"icon\"\r\n\t\t\t\t/>\r\n\t\t\t</li>\r\n\t\t</ul>\r\n\t</div>\r\n</div>\r\n<button class=\"btn btn-success\" [routerLink]=\"'/'\">< Back to main page</button>\r\n";

/***/ }),

/***/ 920:
/*!************************************************************************!*\
  !*** ./src/app/features/main-page/main-page.component.html?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"container-fluid\">\r\n\t<app-zipcode-entry> </app-zipcode-entry>\r\n\t<app-current-conditions></app-current-conditions>\r\n</div>\r\n";

/***/ }),

/***/ 2969:
/*!********************************************************************************!*\
  !*** ./src/app/features/zipcode-entry/zipcode-entry.component.html?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"well\">\r\n  <h2>Enter a zipcode:</h2>\r\n  <input type=\"text\" #zipcode placeholder=\"Zipcode\" class=\"form-control\">\r\n  <br>\r\n  <button class=\"btn btn-primary\" (click)=\"addLocation(zipcode.value)\" >\r\n    Add location\r\n  </button>\r\n</div>\r\n";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4913)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map