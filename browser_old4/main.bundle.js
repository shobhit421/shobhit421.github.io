webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'slashers-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_mdc_web__ = __webpack_require__("../../../../@angular-mdc/web/esm5/mdc.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap_carousel__ = __webpack_require__("../../../../ngx-bootstrap/carousel/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular_linkedin_sdk__ = __webpack_require__("../../../../angular-linkedin-sdk/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular_linkedin_sdk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angular_linkedin_sdk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_routes__ = __webpack_require__("../../../../../src/app/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__not_found_not_found_component__ = __webpack_require__("../../../../../src/app/not-found/not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__inscription_inscription_component__ = __webpack_require__("../../../../../src/app/inscription/inscription.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__connexion_connexion_component__ = __webpack_require__("../../../../../src/app/connexion/connexion.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__presentation_presentation_component__ = __webpack_require__("../../../../../src/app/presentation/presentation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_toolbar_toolbar_component__ = __webpack_require__("../../../../../src/app/components/toolbar/toolbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_ngx_facebook__ = __webpack_require__("../../../../ngx-facebook/dist/esm/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_progress_progress_component__ = __webpack_require__("../../../../../src/app/components/progress/progress.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__welcome_welcome_component__ = __webpack_require__("../../../../../src/app/welcome/welcome.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__welcome1_welcome1_component__ = __webpack_require__("../../../../../src/app/welcome1/welcome1.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_FacebookProvider_facebook_service__ = __webpack_require__("../../../../../src/app/services/FacebookProvider/facebook.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__camera_camera_component__ = __webpack_require__("../../../../../src/app/camera/camera.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_ng2_img_cropper__ = __webpack_require__("../../../../ng2-img-cropper/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__profiles_profile_view_profile_view_component__ = __webpack_require__("../../../../../src/app/profiles/profile-view/profile-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_ecosystem_tag_ecosystem_tag_component__ = __webpack_require__("../../../../../src/app/components/ecosystem-tag/ecosystem-tag.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__profiles_profile_profile_component__ = __webpack_require__("../../../../../src/app/profiles/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__profiles_components_profile_identity_profile_identity_component__ = __webpack_require__("../../../../../src/app/profiles/components/profile-identity/profile-identity.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_profile_research_container_profile_research_container_component__ = __webpack_require__("../../../../../src/app/components/profile-research-container/profile-research-container.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_profile_ecosystem_container_profile_ecosystem_container_component__ = __webpack_require__("../../../../../src/app/components/profile-ecosystem-container/profile-ecosystem-container.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__profiles_profile_update_profile_update_component__ = __webpack_require__("../../../../../src/app/profiles/profile-update/profile-update.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__services_mock_slasher_data_service__ = __webpack_require__("../../../../../src/app/services/mock-slasher-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__components_picture_display_picture_display_component__ = __webpack_require__("../../../../../src/app/components/picture-display/picture-display.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__take_picture_take_picture_component__ = __webpack_require__("../../../../../src/app/take-picture/take-picture.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__take_avatar_take_avatar_component__ = __webpack_require__("../../../../../src/app/take-avatar/take-avatar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__services_slasher_data_service__ = __webpack_require__("../../../../../src/app/services/slasher-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__components_profile_extract_profile_extract_component__ = __webpack_require__("../../../../../src/app/components/profile-extract/profile-extract.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38_ng4_validators__ = __webpack_require__("../../../../ng4-validators/ng4-validators/ng4-validators.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__components_slashes_choice_slashes_choice_component__ = __webpack_require__("../../../../../src/app/components/slashes-choice/slashes-choice.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__components_choose_picture_choose_picture_component__ = __webpack_require__("../../../../../src/app/components/choose-picture/choose-picture.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__story_home_home_component__ = __webpack_require__("../../../../../src/app/story/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__story_1_1_component__ = __webpack_require__("../../../../../src/app/story/1/1.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__counter_counter_component__ = __webpack_require__("../../../../../src/app/counter/counter.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__angular_material_chips__ = __webpack_require__("../../../material/esm5/chips.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__components_full_cropped_image_full_cropped_image_component__ = __webpack_require__("../../../../../src/app/components/full-cropped-image/full-cropped-image.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47_ng2_device_detector__ = __webpack_require__("../../../../ng2-device-detector/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__components_search_role_search_role_component__ = __webpack_require__("../../../../../src/app/components/search-role/search-role.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__services_mock_search_domain_service__ = __webpack_require__("../../../../../src/app/services/mock-search-domain.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__profiles_components_profile_toolbar_profile_toolbar_component__ = __webpack_require__("../../../../../src/app/profiles/components/profile-toolbar/profile-toolbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__profiles_profile_edit_links_profile_edit_links_component__ = __webpack_require__("../../../../../src/app/profiles/profile-edit-links/profile-edit-links.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__components_input_location_input_location_component__ = __webpack_require__("../../../../../src/app/components/input-location/input-location.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__profiles_profile_take_picture_profile_take_picture_component__ = __webpack_require__("../../../../../src/app/profiles/profile-take-picture/profile-take-picture.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__profiles_profile_take_avatar_profile_take_avatar_component__ = __webpack_require__("../../../../../src/app/profiles/profile-take-avatar/profile-take-avatar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__services_shared_data_service__ = __webpack_require__("../../../../../src/app/services/shared-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56_ng_click_outside__ = __webpack_require__("../../../../ng-click-outside/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56_ng_click_outside___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_56_ng_click_outside__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__services_globals_globals_service__ = __webpack_require__("../../../../../src/app/services/globals/globals.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











































//bookmark





//bookmark












var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_10__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_11__not_found_not_found_component__["a" /* NotFoundComponent */],
                __WEBPACK_IMPORTED_MODULE_12__inscription_inscription_component__["a" /* InscriptionComponent */],
                __WEBPACK_IMPORTED_MODULE_13__connexion_connexion_component__["a" /* ConnexionComponent */],
                __WEBPACK_IMPORTED_MODULE_14__presentation_presentation_component__["a" /* PresentationComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_toolbar_toolbar_component__["a" /* ToolbarComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_progress_progress_component__["a" /* ProgressComponent */],
                __WEBPACK_IMPORTED_MODULE_18__welcome_welcome_component__["a" /* WelcomeComponent */],
                __WEBPACK_IMPORTED_MODULE_19__welcome1_welcome1_component__["a" /* Welcome1Component */],
                __WEBPACK_IMPORTED_MODULE_21__camera_camera_component__["a" /* CameraComponent */],
                __WEBPACK_IMPORTED_MODULE_23__profiles_profile_view_profile_view_component__["a" /* ProfileViewComponent */],
                __WEBPACK_IMPORTED_MODULE_24__components_ecosystem_tag_ecosystem_tag_component__["a" /* EcosystemTagComponent */],
                __WEBPACK_IMPORTED_MODULE_25__profiles_profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_26__profiles_components_profile_identity_profile_identity_component__["a" /* ProfileIdentityComponent */],
                __WEBPACK_IMPORTED_MODULE_27__components_profile_research_container_profile_research_container_component__["a" /* ProfileResearchContainerComponent */],
                __WEBPACK_IMPORTED_MODULE_28__components_profile_ecosystem_container_profile_ecosystem_container_component__["a" /* ProfileEcosystemContainerComponent */],
                __WEBPACK_IMPORTED_MODULE_29__profiles_profile_update_profile_update_component__["a" /* ProfileUpdateComponent */],
                __WEBPACK_IMPORTED_MODULE_21__camera_camera_component__["a" /* CameraComponent */],
                __WEBPACK_IMPORTED_MODULE_31__components_picture_display_picture_display_component__["a" /* PictureDisplayComponent */],
                __WEBPACK_IMPORTED_MODULE_32__take_picture_take_picture_component__["a" /* TakePictureComponent */],
                __WEBPACK_IMPORTED_MODULE_33__take_avatar_take_avatar_component__["a" /* TakeAvatarComponent */],
                __WEBPACK_IMPORTED_MODULE_37__components_profile_extract_profile_extract_component__["a" /* ProfileExtractComponent */],
                __WEBPACK_IMPORTED_MODULE_39__components_slashes_choice_slashes_choice_component__["a" /* SlashesChoiceComponent */],
                __WEBPACK_IMPORTED_MODULE_40__components_choose_picture_choose_picture_component__["a" /* ChoosePictureComponent */],
                __WEBPACK_IMPORTED_MODULE_41__story_home_home_component__["a" /* StoryhomeComponent */],
                __WEBPACK_IMPORTED_MODULE_42__story_1_1_component__["a" /* Story1Component */],
                __WEBPACK_IMPORTED_MODULE_43__counter_counter_component__["a" /* CounterComponent */],
                __WEBPACK_IMPORTED_MODULE_46__components_full_cropped_image_full_cropped_image_component__["a" /* FullCroppedImageComponent */],
                __WEBPACK_IMPORTED_MODULE_48__components_search_role_search_role_component__["a" /* SearchRoleComponent */],
                __WEBPACK_IMPORTED_MODULE_50__profiles_components_profile_toolbar_profile_toolbar_component__["a" /* ProfileToolbarComponent */],
                __WEBPACK_IMPORTED_MODULE_51__profiles_profile_edit_links_profile_edit_links_component__["a" /* ProfileEditLinksComponent */],
                __WEBPACK_IMPORTED_MODULE_52__components_input_location_input_location_component__["a" /* InputLocationComponent */],
                __WEBPACK_IMPORTED_MODULE_53__profiles_profile_take_picture_profile_take_picture_component__["a" /* ProfileTakePictureComponent */],
                __WEBPACK_IMPORTED_MODULE_54__profiles_profile_take_avatar_profile_take_avatar_component__["a" /* ProfileTakeAvatarComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"].withServerTransition({ appId: 'slashers' }),
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_8__app_routes__["a" /* ROUTES */]),
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["k" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_38_ng4_validators__["a" /* CustomFormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_mdc_web__["a" /* MdcButtonModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_mdc_web__["q" /* MdcToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_mdc_web__["o" /* MdcTextFieldModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_mdc_web__["h" /* MdcIconModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_mdc_web__["n" /* MdcSnackbarModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_mdc_web__["b" /* MdcCardModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_mdc_web__["f" /* MdcFabModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_mdc_web__["l" /* MdcSelectModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_mdc_web__["i" /* MdcListModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_mdc_web__["k" /* MdcRippleModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_mdc_web__["j" /* MdcMenuModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_mdc_web__["e" /* MdcElevationModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_mdc_web__["r" /* MdcTypographyModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_mdc_web__["p" /* MdcThemeModule */],
                __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap_carousel__["a" /* CarouselModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_16_ngx_facebook__["a" /* FacebookModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_7_angular_linkedin_sdk__["LinkedInSdkModule"],
                __WEBPACK_IMPORTED_MODULE_5__angular_mdc_web__["d" /* MdcDialogModule */],
                __WEBPACK_IMPORTED_MODULE_22_ng2_img_cropper__["c" /* ImageCropperModule */],
                __WEBPACK_IMPORTED_MODULE_35__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_36__agm_core__["a" /* AgmCoreModule */].forRoot({
                    apiKey: "AIzaSyAoAz989F5JGKUvA7ncuFcltwMxgL4tIRE",
                    libraries: ["places"]
                }),
                __WEBPACK_IMPORTED_MODULE_47_ng2_device_detector__["a" /* Ng2DeviceDetectorModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_56_ng_click_outside__["ClickOutsideModule"],
                __WEBPACK_IMPORTED_MODULE_44__angular_material_chips__["a" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_mdc_web__["c" /* MdcCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_mdc_web__["g" /* MdcFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_45__angular_material__["a" /* MatInputModule */]
            ],
            providers: [
                { provide: 'apiKey', useValue: '77w6hjnxdx7bi5' },
                { provide: 'authorize', useValue: 'true' },
                __WEBPACK_IMPORTED_MODULE_20__services_FacebookProvider_facebook_service__["a" /* FacebookService */],
                __WEBPACK_IMPORTED_MODULE_30__services_mock_slasher_data_service__["a" /* MockSlasherDataService */],
                __WEBPACK_IMPORTED_MODULE_34__services_slasher_data_service__["a" /* SlasherDataService */],
                __WEBPACK_IMPORTED_MODULE_22_ng2_img_cropper__["b" /* ImageCropperComponent */],
                __WEBPACK_IMPORTED_MODULE_49__services_mock_search_domain_service__["a" /* MockSearchDomainService */],
                __WEBPACK_IMPORTED_MODULE_55__services_shared_data_service__["a" /* SharedDataService */],
                __WEBPACK_IMPORTED_MODULE_57__services_globals_globals_service__["a" /* GlobalsService */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]],
            entryComponents: []
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ROUTES; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__not_found_not_found_component__ = __webpack_require__("../../../../../src/app/not-found/not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__inscription_inscription_component__ = __webpack_require__("../../../../../src/app/inscription/inscription.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__connexion_connexion_component__ = __webpack_require__("../../../../../src/app/connexion/connexion.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__presentation_presentation_component__ = __webpack_require__("../../../../../src/app/presentation/presentation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__welcome_welcome_component__ = __webpack_require__("../../../../../src/app/welcome/welcome.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__welcome1_welcome1_component__ = __webpack_require__("../../../../../src/app/welcome1/welcome1.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__camera_camera_component__ = __webpack_require__("../../../../../src/app/camera/camera.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__profiles_profile_profile_component__ = __webpack_require__("../../../../../src/app/profiles/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__profiles_profile_view_profile_view_component__ = __webpack_require__("../../../../../src/app/profiles/profile-view/profile-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__profiles_profile_update_profile_update_component__ = __webpack_require__("../../../../../src/app/profiles/profile-update/profile-update.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__take_picture_take_picture_component__ = __webpack_require__("../../../../../src/app/take-picture/take-picture.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__take_avatar_take_avatar_component__ = __webpack_require__("../../../../../src/app/take-avatar/take-avatar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__story_home_home_component__ = __webpack_require__("../../../../../src/app/story/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__story_1_1_component__ = __webpack_require__("../../../../../src/app/story/1/1.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__counter_counter_component__ = __webpack_require__("../../../../../src/app/counter/counter.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__profiles_profile_edit_links_profile_edit_links_component__ = __webpack_require__("../../../../../src/app/profiles/profile-edit-links/profile-edit-links.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__profiles_profile_take_picture_profile_take_picture_component__ = __webpack_require__("../../../../../src/app/profiles/profile-take-picture/profile-take-picture.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__profiles_profile_take_avatar_profile_take_avatar_component__ = __webpack_require__("../../../../../src/app/profiles/profile-take-avatar/profile-take-avatar.component.ts");













//bookmark



//bookmark



var ROUTES = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_0__home_home_component__["a" /* HomeComponent */] },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_0__home_home_component__["a" /* HomeComponent */] },
    { path: 'inscription', component: __WEBPACK_IMPORTED_MODULE_2__inscription_inscription_component__["a" /* InscriptionComponent */] },
    { path: 'connexion', component: __WEBPACK_IMPORTED_MODULE_3__connexion_connexion_component__["a" /* ConnexionComponent */] },
    { path: 'presentation', component: __WEBPACK_IMPORTED_MODULE_4__presentation_presentation_component__["a" /* PresentationComponent */] },
    { path: 'welcome', component: __WEBPACK_IMPORTED_MODULE_5__welcome_welcome_component__["a" /* WelcomeComponent */] },
    { path: 'welcome1', component: __WEBPACK_IMPORTED_MODULE_6__welcome1_welcome1_component__["a" /* Welcome1Component */] },
    { path: 'camera', component: __WEBPACK_IMPORTED_MODULE_7__camera_camera_component__["a" /* CameraComponent */] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_8__profiles_profile_profile_component__["a" /* ProfileComponent */] },
    { path: 'profile-view', component: __WEBPACK_IMPORTED_MODULE_9__profiles_profile_view_profile_view_component__["a" /* ProfileViewComponent */] },
    { path: 'profile-update', component: __WEBPACK_IMPORTED_MODULE_10__profiles_profile_update_profile_update_component__["a" /* ProfileUpdateComponent */] },
    { path: 'take-picture', component: __WEBPACK_IMPORTED_MODULE_11__take_picture_take_picture_component__["a" /* TakePictureComponent */] },
    { path: 'take-avatar', component: __WEBPACK_IMPORTED_MODULE_12__take_avatar_take_avatar_component__["a" /* TakeAvatarComponent */] },
    { path: 'story', component: __WEBPACK_IMPORTED_MODULE_13__story_home_home_component__["a" /* StoryhomeComponent */] },
    { path: 'story1', component: __WEBPACK_IMPORTED_MODULE_14__story_1_1_component__["a" /* Story1Component */] },
    { path: 'counter', component: __WEBPACK_IMPORTED_MODULE_15__counter_counter_component__["a" /* CounterComponent */] },
    { path: 'profile-edit-links', component: __WEBPACK_IMPORTED_MODULE_16__profiles_profile_edit_links_profile_edit_links_component__["a" /* ProfileEditLinksComponent */] },
    { path: 'profile-take-picture', component: __WEBPACK_IMPORTED_MODULE_17__profiles_profile_take_picture_profile_take_picture_component__["a" /* ProfileTakePictureComponent */] },
    { path: 'profile-take-avatar', component: __WEBPACK_IMPORTED_MODULE_18__profiles_profile_take_avatar_profile_take_avatar_component__["a" /* ProfileTakeAvatarComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_1__not_found_not_found_component__["a" /* NotFoundComponent */] }
];


/***/ }),

/***/ "../../../../../src/app/camera/camera.component.html":
/***/ (function(module, exports) {

module.exports = "<div #container class=\"main-container\">\n  <video [ngClass]=\"{'element-hidden': pictureTaken}\" #video class=\"video\" autoplay></video>\n  <canvas [ngClass]=\"{'element-hidden': !pictureTaken}\" #canvas class=\"canvas\"></canvas>\n  <button (click)=\"takePicture()\" class=\"picBtn\" mdc-button>\n      <mdc-icon>{{cameraIcon}}</mdc-icon>\n  </button>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/camera/camera.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  background-color: gba(51, 51, 51, 0.9); }\n  :host .main-container {\n    height: 100% !important;\n    position: relative; }\n  :host .picBtn {\n    position: absolute;\n    left: 50%;\n    bottom: 0;\n    padding: 0;\n    -webkit-transform: translate(-50%, 0);\n            transform: translate(-50%, 0); }\n  :host mdc-icon {\n    font-size: 3em; }\n  :host .video {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%); }\n  :host .element-hidden {\n    position: absolute;\n    visibility: hidden; }\n  :host .canvas {\n    background-color: #333;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/camera/camera.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CameraComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CameraComponent = (function () {
    function CameraComponent(router) {
        this.router = router;
        this.pictureTaken = false;
        this.cameraIcon = 'photo_camera';
        this.onSetImageData = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    CameraComponent.prototype.ngOnInit = function () {
        this.initializeMedia();
    };
    CameraComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.video.nativeElement.width = _this.container.nativeElement.offsetWidth;
            _this.video.nativeElement.height = _this.container.nativeElement.offsetHeight;
        });
    };
    CameraComponent.prototype.setCanvasSize = function () {
        if (this.video.nativeElement.offsetWidth / this.video.nativeElement.offsetHeight > this.video.nativeElement.videoWidth / this.video.nativeElement.videoHeight) {
            this.canvas.nativeElement.height = this.video.nativeElement.offsetHeight;
            this.canvas.nativeElement.width = this.canvas.nativeElement.height * this.video.nativeElement.videoWidth / this.video.nativeElement.videoHeight;
        }
        else {
            this.canvas.nativeElement.width = this.video.nativeElement.offsetWidth;
            this.canvas.nativeElement.height = this.canvas.nativeElement.width * this.video.nativeElement.videoHeight / this.video.nativeElement.videoWidth;
        }
    };
    CameraComponent.prototype.initializeMedia = function () {
        var _this = this;
        navigator.mediaDevices.getUserMedia({ video: true }).then(function (stream) {
            _this.video.nativeElement.srcObject = stream;
        }).catch(function (error) {
            console.log(error);
        });
    };
    CameraComponent.prototype.stopVideo = function () {
        this.video.nativeElement.srcObject.getVideoTracks().forEach(function (track) {
            track.stop();
        });
    };
    CameraComponent.prototype.takePicture = function () {
        if (!this.pictureTaken) {
            this.pictureTaken = true;
            this.cameraIcon = 'settings_backup_restore';
            var context = this.canvas.nativeElement.getContext('2d');
            var canvasVideoHeight = this.video.nativeElement.videoHeight;
            var canvasVideoWidth = this.video.nativeElement.videoWidth;
            console.log(canvasVideoWidth, canvasVideoHeight);
            // console.log(this.video.nativeElement.style);
            // console.log(this.video.nativeElement.videoWidth, this.video.nativeElement.videoHeight);
            var videoHeight = canvasVideoHeight / (canvasVideoWidth / this.canvas.nativeElement.width);
            // this.canvas.nativeElement.width = this.video.nativeElement.offsetWidth;
            // this.canvas.nativeElement.height = this.video.nativeElement.offsetHeight;
            // this.canvas.nativeElement.height = this.video.height + 'px';
            // this.canvas.nativeElement.width = this.video.width + 'px';
            // console.log(this.canvas.nativeElement.height, videoHeight, this.video.nativeElement.offsetHeight);
            // const availableHeight = Number.parseInt(this.canvas.nativeElement.getAttribute('height').slice(0, -2));
            // const topMargin = Math.floor((availableHeight - videoHeight) / 2);
            // context.drawImage(this.video.nativeElement, 0, topMargin, this.canvas.nativeElement.width, videoHeight);
            // context.drawImage(this.video.nativeElement, 0, 0, this.canvas.nativeElement.width, videoHeight);
            this.setCanvasSize();
            context.drawImage(this.video.nativeElement, 0, 0, this.canvas.nativeElement.width, this.canvas.nativeElement.height);
            this.stopVideo();
            // console.log(this.canvas.nativeElement.width, this.canvas.nativeElement.height);
            // var resizedCanvas = document.createElement("canvas");
            // var resizedContext = resizedCanvas.getContext("2d");
            // resizedCanvas.width = this.canvas.nativeElement.width;
            // resizedCanvas.height = this.canvas.nativeElement.height;
            // resizedContext.drawImage(this.canvas.nativeElement, 0, 0, this.canvas.nativeElement.width, this.canvas.nativeElement.height);
            // this.onSetImageData.emit(resizedCanvas.toDataURL();
            // let image0:any = new Image();
            // image0.src = resizedCanvas.toDataURL();
            // image0.addEventListener('load', () => {
            //   console.log(image0.width, image0.height);
            // });
            //
            // let image:any = new Image();
            // image.src = this.canvas.nativeElement.toDataURL();
            // image.addEventListener('load', () => {
            //   console.log(image.width, image.height);
            // });
            // this.pictureSrc = this.canvas.nativeElement.toDataURL('image/png');
            this.onSetImageData.emit(this.canvas.nativeElement.toDataURL());
        }
        else {
            this.initializeMedia();
            this.cameraIcon = 'photo_camera';
            this.pictureTaken = false;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('video'),
        __metadata("design:type", Object)
    ], CameraComponent.prototype, "video", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('canvas'),
        __metadata("design:type", Object)
    ], CameraComponent.prototype, "canvas", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('container'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], CameraComponent.prototype, "container", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], CameraComponent.prototype, "onSetImageData", void 0);
    CameraComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'slashers-camera',
            template: __webpack_require__("../../../../../src/app/camera/camera.component.html"),
            styles: [__webpack_require__("../../../../../src/app/camera/camera.component.scss")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], CameraComponent);
    return CameraComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/choose-picture/choose-picture.component.html":
/***/ (function(module, exports) {

module.exports = "<mdc-card>\n  <mdc-card-horizontal>\n    <mdc-card-primary>\n      <mdc-card-title>Souriez !</mdc-card-title><br>\n      <mdc-card-subtitle>\n        Choisissez une photo pour personnaliser votre profil.\n      </mdc-card-subtitle>\n    </mdc-card-primary>\n    <img mdc-card-media-item [size]=\"1.5\" src=\"../../../assets/img/camera.png\" alt=\"camera\" />\n  </mdc-card-horizontal>\n  <mdc-card-actions>\n    <div *ngIf=\"!isPhoneTablet\">\n      <button mdc-card-button (click)=\"clickToOpenCamera()\">Camera</button>\n      <button mdc-card-button (click)=\"clickToOpenFile()\">Galerie</button>\n    </div>\n    <div *ngIf=\"isPhoneTablet\">\n      <button mdc-card-button (click)=\"clickToOpenFile()\">Choisir</button>\n    </div>\n  </mdc-card-actions>\n</mdc-card>\n"

/***/ }),

/***/ "../../../../../src/app/components/choose-picture/choose-picture.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "mdc-card {\n  background-color: #fff; }\n  mdc-card mdc-card-title {\n    font-size: 1.5em;\n    color: #0288D1;\n    line-height: 2em; }\n  mdc-card mdc-card-subtitle {\n    font-size: 0.875em; }\n  mdc-card .mdc-card__actions {\n    display: block;\n    text-align: right;\n    margin-right: 0.5em; }\n    mdc-card .mdc-card__actions .mdc-button {\n      color: #0288D1;\n      padding-left: 1em;\n      padding-right: 1em; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/choose-picture/choose-picture.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChoosePictureComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_device_detector__ = __webpack_require__("../../../../ng2-device-detector/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChoosePictureComponent = (function () {
    function ChoosePictureComponent(deviceService) {
        this.deviceService = deviceService;
        this.openCamera = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.openFile = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    ChoosePictureComponent.prototype.ngOnInit = function () {
        var deviceInfo = this.deviceService.getDeviceInfo();
        if (deviceInfo.device && deviceInfo.device != 'unknown') {
            this.isPhoneTablet = true;
        }
    };
    ChoosePictureComponent.prototype.clickToOpenCamera = function () {
        this.openCamera.emit();
    };
    ChoosePictureComponent.prototype.clickToOpenFile = function () {
        this.openFile.emit();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], ChoosePictureComponent.prototype, "openCamera", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], ChoosePictureComponent.prototype, "openFile", void 0);
    ChoosePictureComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'slashers-choose-picture',
            template: __webpack_require__("../../../../../src/app/components/choose-picture/choose-picture.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/choose-picture/choose-picture.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ng2_device_detector__["b" /* Ng2DeviceService */]])
    ], ChoosePictureComponent);
    return ChoosePictureComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/ecosystem-tag/ecosystem-tag.component.html":
/***/ (function(module, exports) {

module.exports = "<span class=\"container\" [style.color]=\"textColor\" [style.background-color]=\"backgroundColor\" [style.border-color]=\"borderColor\">\n  <img class=\"image\" *ngIf=\"imageSrc\" [src]=\"imageSrc\" />\n  <span class=\"not-image\" *ngIf=\"!imageSrc\"></span>\n  <span class=\"name\" [ngClass]=\"{'empty-left':!imageSrc, 'empty-right':!badge}\">{{name}}</span>\n  <span class=\"badge\" *ngIf=\"badge !== 0\" [style.color]=\"color\">{{badge}}</span>\n</span>\n"

/***/ }),

/***/ "../../../../../src/app/components/ecosystem-tag/ecosystem-tag.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: inline-block;\n  font-family: Roboto; }\n\n.container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: 2em;\n  padding: 0;\n  box-sizing: border-box;\n  border-radius: 999px;\n  border-width: 1px;\n  border-style: solid; }\n  .container .image {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: 2em;\n    height: 2em;\n    margin-left: -1px;\n    border-radius: 999px; }\n  .container .not-image {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    height: 2em;\n    width: 1px; }\n  .container .name {\n    -webkit-box-flex: 1;\n        -ms-flex: 1 1 auto;\n            flex: 1 1 auto;\n    margin-left: 0.5em;\n    margin-right: 0.5em; }\n  .container .name.empty-left {\n    margin-left: 1em; }\n  .container .name.empty-right {\n    margin-right: 1em; }\n  .container .badge {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    background-color: #fff;\n    display: inline-block;\n    text-align: center;\n    min-width: 1.5em;\n    height: 1.5em;\n    border-radius: 999px;\n    font-size: 1em;\n    line-height: 1.5em;\n    font-weight: bold;\n    margin-right: 0.5em; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/ecosystem-tag/ecosystem-tag.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EcosystemTagComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EcosystemTagComponent = (function () {
    function EcosystemTagComponent() {
    }
    EcosystemTagComponent.prototype.ngOnInit = function () {
        if (this.fill) {
            this.textColor = '#fff';
            this.backgroundColor = this.color;
            this.borderColor = 'transparent';
        }
        else {
            this.textColor = this.color;
            this.backgroundColor = 'transparent';
            this.borderColor = this.color;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], EcosystemTagComponent.prototype, "color", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], EcosystemTagComponent.prototype, "name", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], EcosystemTagComponent.prototype, "imageSrc", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], EcosystemTagComponent.prototype, "badge", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], EcosystemTagComponent.prototype, "fill", void 0);
    EcosystemTagComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'slashers-ecosystem-tag',
            template: __webpack_require__("../../../../../src/app/components/ecosystem-tag/ecosystem-tag.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/ecosystem-tag/ecosystem-tag.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], EcosystemTagComponent);
    return EcosystemTagComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/full-cropped-image/full-cropped-image.component.html":
/***/ (function(module, exports) {

module.exports = "<div #container class=\"canvas-container\">\n  <canvas #canvas></canvas>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/full-cropped-image/full-cropped-image.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".canvas-container {\n  width: 100%;\n  height: 100%; }\n\n:host {\n  display: block; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/full-cropped-image/full-cropped-image.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FullCroppedImageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FullCroppedImageComponent = (function () {
    function FullCroppedImageComponent() {
        this.cropperPosition = {
            tlPosition: { x: 0, y: 0 },
            brPosition: { x: 1, y: 1 }
        };
    }
    FullCroppedImageComponent.prototype.onResize = function (event) {
        this.drawImage();
    };
    FullCroppedImageComponent.prototype.ngOnInit = function () {
    };
    FullCroppedImageComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (changes.imageSrc && changes.imageSrc.currentValue) {
            this.image = new Image();
            this.image.src = this.imageSrc;
            this.image.addEventListener('load', function () {
                _this.drawImage();
            });
        }
    };
    FullCroppedImageComponent.prototype.drawImage = function () {
        var imageWidth = this.image.width;
        var imageHeight = this.image.height;
        var screenWidth = this.container.nativeElement.offsetWidth;
        var screenHeight = this.container.nativeElement.offsetHeight;
        var cropTopLeftX = this.cropperPosition.tlPosition.x * imageWidth;
        var cropTopLeftY = this.cropperPosition.tlPosition.y * imageHeight;
        var cropBottomRightX = this.cropperPosition.brPosition.x * imageWidth;
        var cropBottomRightY = this.cropperPosition.brPosition.y * imageHeight;
        var dispoWidth = (cropBottomRightX - cropTopLeftX) + 2 * Math.min(cropTopLeftX, imageWidth - cropBottomRightX);
        var dispoHeight = (cropBottomRightY - cropTopLeftY) + 2 * Math.min(cropTopLeftY, imageHeight - cropBottomRightY);
        var scaleX = screenWidth / dispoWidth;
        var scaleY = screenHeight / dispoHeight;
        var scale = Math.max(scaleX, scaleY);
        var context = this.canvas.nativeElement.getContext('2d');
        this.canvas.nativeElement.width = screenWidth;
        this.canvas.nativeElement.height = screenHeight;
        var posCenterX = (cropTopLeftX + (cropBottomRightX - cropTopLeftX) / 2) * scale;
        var posX = posCenterX - (this.canvas.nativeElement.width / 2);
        var posCenterY = (cropTopLeftY + (cropBottomRightY - cropTopLeftY) / 2) * scale;
        var posY = posCenterY - (this.canvas.nativeElement.height / 2);
        context.drawImage(this.image, -posX, -posY, this.image.width * scale, this.image.height * scale);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('canvas'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], FullCroppedImageComponent.prototype, "canvas", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('container'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], FullCroppedImageComponent.prototype, "container", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], FullCroppedImageComponent.prototype, "imageSrc", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], FullCroppedImageComponent.prototype, "cropperPosition", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], FullCroppedImageComponent.prototype, "onResize", null);
    FullCroppedImageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'slashers-full-cropped-image',
            template: __webpack_require__("../../../../../src/app/components/full-cropped-image/full-cropped-image.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/full-cropped-image/full-cropped-image.component.scss")]
        })
    ], FullCroppedImageComponent);
    return FullCroppedImageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/input-location/input-location.component.html":
/***/ (function(module, exports) {

module.exports = "<div [formGroup]=\"form\">\n  <mdc-text-field #search [(ngModel)]=\"data.location\" name=\"location\" label=\"Ville\" formControlName=\"location\" [fullwidth]=\"true\"></mdc-text-field>\n  <div class=\"validation-input\">\n    <div class=\"mdc-slash-validation-text\" *ngIf=\"form.controls.location.touched && form.controls.location.errors?.required\">\n      La ville est obligatoire\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/input-location/input-location.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/input-location/input-location.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputLocationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var InputLocationComponent = (function () {
    function InputLocationComponent(mapsAPILoader, ngZone) {
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this.placeChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    InputLocationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.mapsAPILoader.load().then(function () {
            _this.autocomplete = new google.maps.places.Autocomplete(_this.search.inputText.nativeElement, {
                types: ['(cities)'],
                componentRestrictions: { country: 'FR' }
            });
            _this.autocomplete.addListener("place_changed", function () {
                _this.searchPlace();
            });
        });
        this.form.addControl('location', new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required]));
    };
    InputLocationComponent.prototype.searchPlace = function () {
        var _this = this;
        this.ngZone.run(function () {
            //get the place result
            var place = _this.autocomplete.getPlace();
            // this.slasherData.location = place.formatted_address;
            _this.placeChanged.emit(place);
            // console.log(place);
            //verify result
            // if (place.geometry === undefined || place.geometry === null) {
            //   return;
            // }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormGroup */])
    ], InputLocationComponent.prototype, "form", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], InputLocationComponent.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], InputLocationComponent.prototype, "placeChanged", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('search'),
        __metadata("design:type", Object)
    ], InputLocationComponent.prototype, "search", void 0);
    InputLocationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'slashers-input-location',
            template: __webpack_require__("../../../../../src/app/components/input-location/input-location.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/input-location/input-location.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__agm_core__["b" /* MapsAPILoader */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]])
    ], InputLocationComponent);
    return InputLocationComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/picture-display/picture-display.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <img-cropper *ngIf=\"imageLoaded\" #cropper [image]=\"data\" [settings]=\"cropperSettings\" (onCrop)=\"cropped($event)\"></img-cropper> -->\n\n\n<div #container class=\"container\">\n  <img-cropper *ngIf=\"imageLoaded\" #cropper [image]=\"data\" [settings]=\"cropperSettings\" (onCrop)=\"cropped($event)\"></img-cropper>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/picture-display/picture-display.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container {\n  background-color: rgba(51, 51, 51, 0.9);\n  height: 100%;\n  position: relative; }\n\nimg-cropper {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/picture-display/picture-display.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PictureDisplayComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_img_cropper__ = __webpack_require__("../../../../ng2-img-cropper/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PictureDisplayComponent = (function () {
    function PictureDisplayComponent() {
        this.onSetImageData = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.imageLoaded = false;
        this.cropperSettings = new __WEBPACK_IMPORTED_MODULE_1_ng2_img_cropper__["a" /* CropperSettings */]();
        this.cropperSettings.rounded = true;
        this.cropperSettings.noFileInput = true;
        this.data = {};
    }
    PictureDisplayComponent.prototype.onResize = function (event) {
        this.setCanvasSize();
        this.cropper.cropper.resizeCanvas(this.cropperSettings.canvasWidth, this.cropperSettings.canvasHeight, true);
    };
    PictureDisplayComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (changes.src && changes.src.currentValue) {
            this.image = new Image();
            this.image.src = this.src;
            this.image.addEventListener('load', function () {
                _this.drawImage();
            });
        }
    };
    PictureDisplayComponent.prototype.ngAfterViewInit = function () {
        // setTimeout( () => {
        //   this.image = new Image();
        //   this.image.src = this.src;
        //
        //   this.image.addEventListener('load', () => {
        //     this.drawImage();
        //   });
        // });
    };
    PictureDisplayComponent.prototype.setCanvasSize = function () {
        if (this.container.nativeElement.offsetWidth / this.container.nativeElement.offsetHeight > this.image.width / this.image.height) {
            this.cropperSettings.canvasHeight = this.container.nativeElement.offsetHeight;
            this.cropperSettings.canvasWidth = this.cropperSettings.canvasHeight * this.image.width / this.image.height;
        }
        else {
            this.cropperSettings.canvasWidth = this.container.nativeElement.offsetWidth;
            this.cropperSettings.canvasHeight = this.cropperSettings.canvasWidth * this.image.height / this.image.width;
        }
        // console.log(this.cropperSettings.canvasWidth, this.cropperSettings.canvasHeight);
    };
    PictureDisplayComponent.prototype.drawImage = function () {
        var _this = this;
        this.setCanvasSize();
        this.imageLoaded = true;
        setTimeout(function () {
            _this.cropper.setImage(_this.image);
        });
    };
    PictureDisplayComponent.prototype.cropped = function () {
        var cropperBounds = this.cropper.cropper.getCropBounds();
        // let tlPosition = {
        //   x: cropperBounds.left / this.cropperSettings.canvasWidth,
        //   y: cropperBounds.top / this.cropperSettings.canvasHeight
        // };
        // let brPosition = {
        //   x: cropperBounds.right / this.cropperSettings.canvasWidth,
        //   y: cropperBounds.bottom / this.cropperSettings.canvasHeight
        // }
        var tlPosition = {
            x: cropperBounds.left / this.image.width,
            y: cropperBounds.top / this.image.height
        };
        var brPosition = {
            x: cropperBounds.right / this.image.width,
            y: cropperBounds.bottom / this.image.height
        };
        var info = {
            cropperSrc: this.data.image,
            cropperPosition: {
                tlPosition: tlPosition,
                brPosition: brPosition
            }
        };
        this.onSetImageData.emit(info);
    };
    PictureDisplayComponent.prototype.fileChangeListener = function ($event) {
        var image = new Image();
        var file = $event.target.files[0];
        var myReader = new FileReader();
        var that = this;
        myReader.onloadend = function (loadEvent) {
            image.src = loadEvent.target.result;
            that.cropper.setImage(image);
        };
        myReader.readAsDataURL(file);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], PictureDisplayComponent.prototype, "src", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('cropper', undefined),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ng2_img_cropper__["b" /* ImageCropperComponent */])
    ], PictureDisplayComponent.prototype, "cropper", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('container'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], PictureDisplayComponent.prototype, "container", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], PictureDisplayComponent.prototype, "onSetImageData", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], PictureDisplayComponent.prototype, "onResize", null);
    PictureDisplayComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'slashers-picture-display',
            template: __webpack_require__("../../../../../src/app/components/picture-display/picture-display.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/picture-display/picture-display.component.scss")],
        }),
        __metadata("design:paramtypes", [])
    ], PictureDisplayComponent);
    return PictureDisplayComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/profile-ecosystem-container/profile-ecosystem-container.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"part-header\">\n  <span class=\"title\">{{title}}</span>\n  <span class=\"toggle-ecosystem-text\" (click)=\"toggleEcosystem()\">{{toggleEcosystemText}}</span>\n</div>\n\n<div *ngFor=\"let category of ecosystem\">\n\n  <div class=\"ecosystem-container\" [mdc-elevation]=\"2\">\n    <div class=\"header\" (click)=\"toggleCategory(category)\">\n      <div class=\"description\">\n        <div class=\"title\" [style.color]=\"category.color\">\n          <span *ngIf=\"category.nbGroupedElements\">{{category.nbGroupedElements}}</span> {{category.title}}\n        </div>\n        <div class=\"shot\">\n          <span *ngIf=\"category.nbShots\">{{category.nbShots}} shots</span>\n          <span *ngIf=\"!category.nbShots\">&nbsp;</span>\n        </div>\n      </div>\n      <div class=\"arrow\">\n        <mdc-icon *ngIf=\"category.nbGroupedElements\" [@rotateCategoryArrow]=\"category.state\">keyboard_arrow_down</mdc-icon>\n      </div>\n    </div>\n    <div class=\"ecosystem-elements\" *ngIf=\"category.nbGroupedElements && category.state === 'opened'\" [@shrinkOut]=\"'opened'\">\n      <slashers-ecosystem-tag class=\"ecosystem-element\" *ngFor=\"let element of category.elements\"\n        [color]=\"category.color\"\n        [fill]=\"element.fill\"\n        [name]=\"element.name\"\n        [badge]=\"element.badge\"\n        [imageSrc]=\"element.imgSrc\">\n      </slashers-ecosystem-tag>\n      <div class=\"see-story\" [style.color]=\"category.color\">\n        Voir la story {{category.title}}\n      </div>\n      <div *ngIf=\"editable\" class=\"edit-story\" [style.color]=\"category.color\">\n        Editer {{category.title}}\n      </div>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/profile-ecosystem-container/profile-ecosystem-container.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".part-header {\n  margin-bottom: 1em; }\n  .part-header .title {\n    color: rgba(0, 0, 0, 0.87); }\n\n.toggle-ecosystem-text {\n  float: right;\n  font-size: 0.875em;\n  color: rgba(0, 0, 0, 0.57); }\n\n.ecosystem-container {\n  margin: 0.5em 0;\n  padding: 0.5em;\n  background-color: #fafafa; }\n  .ecosystem-container .header {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    margin-bottom: 0.5em; }\n    .ecosystem-container .header .description {\n      -webkit-box-flex: 1;\n          -ms-flex: 1 1 auto;\n              flex: 1 1 auto; }\n      .ecosystem-container .header .description .title {\n        font-size: 1em;\n        line-height: 1.5em; }\n      .ecosystem-container .header .description .shot {\n        font-size: 0.875em;\n        color: rgba(0, 0, 0, 0.57); }\n    .ecosystem-container .header .arrow {\n      -webkit-box-flex: 0;\n          -ms-flex: 0 0 auto;\n              flex: 0 0 auto;\n      font-size: 1.5em;\n      color: rgba(0, 0, 0, 0.57); }\n  .ecosystem-container .ecosystem-elements {\n    overflow: hidden;\n    margin-top: 1.5em; }\n    .ecosystem-container .ecosystem-elements .ecosystem-element {\n      margin-bottom: 0.5em; }\n    .ecosystem-container .ecosystem-elements .ecosystem-element:not(:last-child) {\n      margin-right: 0.5em; }\n  .ecosystem-container .see-story {\n    margin-top: 1.5em;\n    margin-bottom: 1em;\n    text-align: center;\n    font-size: 1em; }\n  .ecosystem-container .edit-story {\n    margin-top: 2em;\n    margin-bottom: 1em;\n    text-align: center;\n    font-size: 0.875em; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/profile-ecosystem-container/profile-ecosystem-container.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileEcosystemContainerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__("../../../animations/esm5/animations.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProfileEcosystemContainerComponent = (function () {
    function ProfileEcosystemContainerComponent() {
        this.editable = false;
        this.toggleEcosystemText = 'Tout ouvrir';
    }
    ProfileEcosystemContainerComponent.prototype.toggleCategory = function (category) {
        if (category.nbGroupedElements === 0)
            return;
        category.state = (category.state === 'opened') ? 'closed' : 'opened';
        this.displayToggleEcosystemText();
    };
    ProfileEcosystemContainerComponent.prototype.displayToggleEcosystemText = function () {
        this.toggleEcosystemText = this.checkCategoriesAllClosed() ? 'Tout ouvrir' : 'Tout fermer';
    };
    ProfileEcosystemContainerComponent.prototype.checkCategoriesAllClosed = function () {
        var allClosed = true;
        for (var i = 0; i < this.ecosystem.length; i++) {
            var category = this.ecosystem[i];
            if (category.state === 'opened') {
                allClosed = false;
                break;
            }
        }
        return allClosed;
    };
    ProfileEcosystemContainerComponent.prototype.toggleEcosystem = function () {
        var newState = this.checkCategoriesAllClosed() ? 'opened' : 'closed';
        for (var i = 0; i < this.ecosystem.length; i++) {
            var category = this.ecosystem[i];
            category.state = newState;
            if (category.nbGroupedElements === 0) {
                category.state = 'closed';
            }
        }
        this.displayToggleEcosystemText();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], ProfileEcosystemContainerComponent.prototype, "title", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], ProfileEcosystemContainerComponent.prototype, "ecosystem", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], ProfileEcosystemContainerComponent.prototype, "editable", void 0);
    ProfileEcosystemContainerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'slashers-profile-ecosystem-container',
            template: __webpack_require__("../../../../../src/app/components/profile-ecosystem-container/profile-ecosystem-container.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/profile-ecosystem-container/profile-ecosystem-container.component.scss")],
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["k" /* trigger */])('shrinkOut', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* state */])('opened', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* style */])({ height: '*' })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* transition */])('* => void', [
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* style */])({ height: '*' }),
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('100ms ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* style */])({ height: 0 }))
                    ]),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* transition */])('void => *', [
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* style */])({ height: '0' }),
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('100ms ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* style */])({ height: '*' }))
                    ])
                ]),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["k" /* trigger */])('rotateCategoryArrow', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* state */])('opened', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* style */])({ transform: 'rotate(-180deg)' })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* state */])('closed', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* style */])({ transform: 'rotate(0deg)' })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* transition */])('opened <=> closed', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('100ms ease-in-out')),
                ])
            ]
        }),
        __metadata("design:paramtypes", [])
    ], ProfileEcosystemContainerComponent);
    return ProfileEcosystemContainerComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/profile-extract/profile-extract.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"profile-extract-container\">\n  <div class=\"image-container\">\n    <img [src]=\"imageSrc\" />\n  </div>\n  <div class=\"text-container\">\n    <div class=\"title\">{{title}}</div>\n    <div class=\"subtitle\">{{subtitle}}</div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/profile-extract/profile-extract.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".profile-extract-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding: 1em 1.5em;\n  text-align: left;\n  background-color: #ffffff; }\n  .profile-extract-container .image-container {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    height: 2.5em; }\n    .profile-extract-container .image-container img {\n      width: 2.5em;\n      height: 2.5em;\n      border-radius: 50%; }\n  .profile-extract-container .text-container {\n    -webkit-box-flex: 1;\n        -ms-flex: 1 1 auto;\n            flex: 1 1 auto;\n    margin-left: 1em; }\n    .profile-extract-container .text-container .title {\n      font-size: 1em;\n      line-height: 1.5em;\n      color: rgba(0, 0, 0, 0.54); }\n    .profile-extract-container .text-container .subtitle {\n      font-size: 0.875em;\n      font-weight: 500;\n      color: #000000; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/profile-extract/profile-extract.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileExtractComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProfileExtractComponent = (function () {
    function ProfileExtractComponent(elementRef) {
        this.elementRef = elementRef;
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], ProfileExtractComponent.prototype, "imageSrc", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], ProfileExtractComponent.prototype, "title", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], ProfileExtractComponent.prototype, "subtitle", void 0);
    ProfileExtractComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'slashers-profile-extract',
            template: __webpack_require__("../../../../../src/app/components/profile-extract/profile-extract.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/profile-extract/profile-extract.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
    ], ProfileExtractComponent);
    return ProfileExtractComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/profile-research-container/profile-research-container.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let mission of missions\">\n\n  <div [mdc-elevation]=\"2\" class=\"mission-container\">\n    <div class=\"image-group\">\n      <img *ngIf=\"mission.imgSrc\" class=\"image\" [src]=\"mission.imgSrc\" alt=\"Second slide\">\n      <div *ngIf=\"!mission.imgSrc\" class=\"no-image\" [style.background-color]=\"mission.color\">\n        <mdc-icon class=\"icon\">highlight</mdc-icon>\n      </div>\n    </div>\n    <div class=\"description\">\n      <div class=\"role\">{{mission.role}}</div>\n      <div class=\"tag\" [style.color]=\"mission.color\">#{{mission.tag}}</div>\n      <div class=\"category\">{{mission.category}}</div>\n    </div>\n    <div class=\"arrow\" *ngIf=\"mission.imgSrc\">\n      <mdc-icon>keyboard_arrow_right</mdc-icon>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/profile-research-container/profile-research-container.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mission-container {\n  margin: 0.5em 0;\n  padding: 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  border-radius: 2px;\n  background-color: #fafafa; }\n  .mission-container .image-group {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    padding: 0;\n    margin: 0;\n    height: 5.5em; }\n    .mission-container .image-group .image, .mission-container .image-group .no-image {\n      margin: 0;\n      padding: 0;\n      width: 5.5em;\n      height: 5.5em;\n      border-top-left-radius: 2px;\n      border-bottom-left-radius: 2px; }\n    .mission-container .image-group .no-image {\n      margin: 0;\n      padding: 0;\n      width: 5.5em;\n      height: 5.5em;\n      border-top-left-radius: 2px;\n      border-bottom-left-radius: 2px;\n      display: table;\n      text-align: center; }\n      .mission-container .image-group .no-image .icon {\n        display: table-cell;\n        vertical-align: middle;\n        color: #fff;\n        font-size: 2.5em; }\n  .mission-container .description {\n    -webkit-box-flex: 1;\n        -ms-flex: 1 1 auto;\n            flex: 1 1 auto;\n    margin: 0;\n    padding: 0 1em;\n    line-height: 1.5em; }\n    .mission-container .description .category {\n      font-size: 1em;\n      color: rgba(0, 0, 0, 0.87); }\n    .mission-container .description .title {\n      font-size: 1em; }\n    .mission-container .description .ecosystem {\n      font-size: 0.875em;\n      color: rgba(0, 0, 0, 0.54); }\n  .mission-container .arrow {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    font-size: 1.5em;\n    color: rgba(0, 0, 0, 0.57); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/profile-research-container/profile-research-container.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileResearchContainerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProfileResearchContainerComponent = (function () {
    function ProfileResearchContainerComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], ProfileResearchContainerComponent.prototype, "missions", void 0);
    ProfileResearchContainerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'slashers-profile-research-container',
            template: __webpack_require__("../../../../../src/app/components/profile-research-container/profile-research-container.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/profile-research-container/profile-research-container.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ProfileResearchContainerComponent);
    return ProfileResearchContainerComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/progress/progress.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"footer\">\n    <div class=\"container footer-wrap\">\n        <button mdc-button class=\"side\" [routerLink]=\"['/' + precedent]\" *ngIf=\"precedent\">\n            <mdc-icon>keyboard_arrow_left</mdc-icon>\n            <span class=\"p-side p-left\">Retour</span>\n        </button>\n        <button mdc-button class=\"side\" (click)=\"goPrev()\" *ngIf=\"!precedent\">\n            <mdc-icon>keyboard_arrow_left</mdc-icon>\n            <span class=\"p-side p-left\">Retour</span>\n        </button>\n        <button mdc-button class=\"middle\">\n            <div class=\"progress\">\n                <div class=\"progress-bar\" role=\"progressbar\" [ngStyle]=\"{width: progress + '%'}\"\n                     [attr.aria-valuenow]=\"progress\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n            </div>\n        </button>\n        <button mdc-button class=\"side\" [disabled]=\"!nextEnabled\" [routerLink]=\"['/' + suivant]\" *ngIf=\"suivant\">\n            <span class=\"p-side p-right\">Suivant</span>\n            <mdc-icon>keyboard_arrow_right</mdc-icon>\n        </button>\n        <button mdc-button class=\"side\" [disabled]=\"!nextEnabled\" (click)=\"goNext()\" *ngIf=\"!suivant\">\n            <span class=\"p-side p-right\">Suivant</span>\n            <mdc-icon>keyboard_arrow_right</mdc-icon>\n        </button>\n    </div>\n</div>\n<div class=\"footer-block\"></div>\n"

/***/ }),

/***/ "../../../../../src/app/components/progress/progress.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".footer {\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n  height: 53px;\n  background-color: #fafafa;\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.24), 0 0 2px 0 rgba(0, 0, 0, 0.12);\n  border: 0.5px solid;\n  border-image-source: linear-gradient(to top, transparent, transparent 80%, rgba(0, 0, 0, 0.02) 95%, rgba(0, 0, 0, 0.04));\n  border-image-slice: 1; }\n\n/* used to simulate footer relative position */\n.footer-block {\n  width: 100%;\n  height: 53px; }\n\n.footer-wrap {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  text-align: center; }\n\n.side {\n  width: 125px;\n  margin-top: 10px;\n  font-family: Roboto;\n  font-size: 14px;\n  font-weight: 500;\n  color: #6d6d6d !important; }\n\n.p-side {\n  font-family: Roboto; }\n\n.p-left {\n  margin-left: -12px; }\n\n.p-right {\n  margin-right: -5px; }\n\n.middle {\n  width: 35%;\n  margin-top: 10px; }\n\n.progress {\n  height: 3px; }\n\n.progress-bar {\n  background-color: #4285F4; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/progress/progress.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgressComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProgressComponent = (function () {
    function ProgressComponent() {
        this.prev = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.next = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    ProgressComponent.prototype.goPrev = function () {
        this.prev.emit();
    };
    ProgressComponent.prototype.goNext = function () {
        this.next.emit();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], ProgressComponent.prototype, "precedent", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], ProgressComponent.prototype, "suivant", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], ProgressComponent.prototype, "progress", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], ProgressComponent.prototype, "nextEnabled", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], ProgressComponent.prototype, "prev", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], ProgressComponent.prototype, "next", void 0);
    ProgressComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'slashers-progress',
            template: __webpack_require__("../../../../../src/app/components/progress/progress.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/progress/progress.component.scss")]
        })
    ], ProgressComponent);
    return ProgressComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/search-role/search-role.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"top-container\">\n  <div class=\"select-role-container\">\n    <mdc-select placeholder=\"Rôle\" [(ngModel)]=\"roleSelected\" name=\"role\" [disabled]=\"false\">\n      <mdc-select-item *ngFor=\"let role of roles\" [value]=\"role\">\n        {{role}}\n      </mdc-select-item>\n    </mdc-select>\n  </div>\n  <div class=\"search-domain-container\">\n    <mdc-text-field #searchDomain [(ngModel)]=\"domainTerm\" name=\"domain\" placeholder=\"Domaine\" (keyup)=\"domainTerm$.next($event.target.value)\"></mdc-text-field><br>\n  </div>\n  <div class=\"add-role-button-container\">\n    <button class=\"add-role-button\" [disabled]=\"!roleSelected\" mdc-ripple (click)=\"addRole()\"><mdc-icon>highlight</mdc-icon></button>\n  </div>\n</div>\n\n\n<div *ngIf=\"panelSearchOpened && results\" class=\"panel-search-results\" (clickOutside)=\"panelSearchOpened = false\">\n  <div class=\"slashers-list-container\">\n    <div *ngIf=\"results.length !== 1\">\n      <div *ngFor=\"let result of results\" class=\"slashers-list-item\" mdc-ripple (click)=\"clickOnDomain($event, result)\">\n        <div class=\"nb-shots\">{{result.nbShots}} Shots</div>\n        <div>#{{result.name}}</div>\n      </div>\n    </div>\n    <div *ngIf=\"results.length === 1\">\n      <div *ngFor=\"let key of ecosystemKeys\" class=\"slashers-list-item\" mdc-ripple (click)=\"clickOnCategory(globals.EcosystemCategory[key].name)\">\n        <div>#{{results[0].name}}</div>\n        <div class=\"category\" [style.color]=\"globals.EcosystemCategory[key].color\">{{globals.EcosystemCategory[key].name}}</div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/search-role/search-role.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host ::ng-deep mdc-select-menu {\n  max-height: 50vh; }\n\n:host ::ng-deep mdc-select mdc-select-surface {\n  padding-left: 0;\n  border: 0;\n  background-color: transparent; }\n\n:host ::ng-deep mdc-select .mdc-select__label--float-above {\n  display: none !important; }\n\n:host ::ng-deep mdc-select mdc-select-surface mdc-select-label {\n  left: 0;\n  bottom: 0; }\n\n.top-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  width: 100%; }\n  .top-container .select-role-container {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 25vw;\n            flex: 0 0 25vw;\n    margin-top: -30px;\n    overflow: hidden; }\n  .top-container .search-domain-container {\n    -webkit-box-flex: 1;\n        -ms-flex: 1 1 auto;\n            flex: 1 1 auto;\n    margin-top: -30px; }\n    .top-container .search-domain-container mdc-text-field {\n      width: 100%;\n      padding-left: 1em;\n      padding-right: 0.5em; }\n  .top-container .add-role-button-container {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto; }\n    .top-container .add-role-button-container .add-role-button {\n      font-size: 1em;\n      width: 2.875em;\n      height: 2.875em;\n      border-radius: 50%;\n      background-color: #feb00e;\n      color: #fff;\n      position: relative;\n      border-width: 0; }\n      .top-container .add-role-button-container .add-role-button mdc-icon {\n        position: absolute;\n        top: 50%;\n        left: 50%;\n        -webkit-transform: translate(-50%, -50%);\n                transform: translate(-50%, -50%); }\n\n.panel-search-results {\n  position: relative; }\n  .panel-search-results .slashers-list-container {\n    overflow-y: scroll;\n    max-height: 50vh;\n    margin-top: 1px;\n    background-color: #fafafa;\n    box-shadow: 0 2px 1px 0 rgba(0, 0, 0, 0.3);\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%; }\n    .panel-search-results .slashers-list-container .slashers-list-item {\n      padding: 0.625em 1em 0.875em 1em; }\n      .panel-search-results .slashers-list-container .slashers-list-item .nb-shots {\n        float: right;\n        color: rgba(0, 0, 0, 0.37);\n        font-size: 0.875em; }\n      .panel-search-results .slashers-list-container .slashers-list-item .category {\n        fontc-size: 0.875em;\n        color: rgba(0, 0, 0, 0.54); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/search-role/search-role.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchRoleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_mock_search_domain_service__ = __webpack_require__("../../../../../src/app/services/mock-search-domain.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_globals_globals_service__ = __webpack_require__("../../../../../src/app/services/globals/globals.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SearchRoleComponent = (function () {
    function SearchRoleComponent(globals, searchService) {
        var _this = this;
        this.globals = globals;
        this.searchService = searchService;
        this.addSearchRole = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.domainTerm$ = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
        this.panelSearchOpened = true;
        this.roles = [
            'Non précisé',
            'Une mission freelance',
            'Un engagement bénévole',
            'Un stage',
            'Un nouveau job',
            'Un poste d\'associé.e',
            'Une mission freelance',
            'Un engagement bénévole',
            'Un stage',
            'Un nouveau job',
            'Un poste d\'associé.e',
            'Une mission freelance',
            'Un engagement bénévole',
            'Un stage',
            'Un nouveau job',
            'Un poste d\'associé.e'
        ];
        this.searchService.search(this.domainTerm$)
            .subscribe(function (results) {
            if (!results) {
                _this.results = null;
                return;
            }
            var indexDomainTerm = __WEBPACK_IMPORTED_MODULE_4_lodash__["findIndex"](results, function (x) {
                return x.name == _this.domainTerm;
            });
            if (indexDomainTerm === -1) {
                var term = { name: _this.domainTerm, nbShots: 0 };
                results = [term].concat(results);
            }
            else {
                results = [
                    results[indexDomainTerm]
                ].concat(__WEBPACK_IMPORTED_MODULE_4_lodash__["slice"](results, 0, indexDomainTerm), __WEBPACK_IMPORTED_MODULE_4_lodash__["slice"](results, indexDomainTerm + 1));
            }
            _this.results = results;
        });
    }
    SearchRoleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.searchDomain.inputText.nativeElement.onfocus = function () {
            // wait for the clickOutside propagation
            setTimeout(function () {
                _this.panelSearchOpened = true;
            });
        };
        this.ecosystemKeys = Object.keys(this.globals.EcosystemCategory);
    };
    SearchRoleComponent.prototype.clickOnDomain = function (event, domain) {
        event.stopPropagation();
        this.domainTerm = domain.name;
        this.results = [domain];
    };
    SearchRoleComponent.prototype.clickOnCategory = function (category) {
        this.categorySelected = category;
        this.panelSearchOpened = false;
    };
    SearchRoleComponent.prototype.addRole = function () {
        this.addSearchRole.emit({
            role: this.roleSelected,
            domain: this.domainTerm,
            category: this.categorySelected
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], SearchRoleComponent.prototype, "addSearchRole", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('searchDomain'),
        __metadata("design:type", Object)
    ], SearchRoleComponent.prototype, "searchDomain", void 0);
    SearchRoleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'slashers-search-role',
            template: __webpack_require__("../../../../../src/app/components/search-role/search-role.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/search-role/search-role.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_globals_globals_service__["a" /* GlobalsService */], __WEBPACK_IMPORTED_MODULE_2__services_mock_search_domain_service__["a" /* MockSearchDomainService */]])
    ], SearchRoleComponent);
    return SearchRoleComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/slashes-choice/slashes-choice.component.html":
/***/ (function(module, exports) {

module.exports = "<div [formGroup]=\"form\">\n  <mdc-text-field #slashe0 label=\"Un.e\" type=\"text\" name=\"slashe0\" [(ngModel)]=\"slashes[0]\" formControlName=\"slashe0\" [fullwidth]=\"true\" ></mdc-text-field>\n  <div class=\"validation-input\">\n    <div class=\"mdc-slash-validation-text\" *ngIf=\"form.controls.slashe0.touched && form.controls.slashe0.errors?.required\">\n      Choisir au moins un slash\n    </div>\n  </div>\n\n  <mdc-text-field #slashe1 label=\"Et aussi un.e\" type=\"text\" name=\"slashe1\" [fullwidth]=\"true\" formControlName=\"slashe1\" [(ngModel)]=\"slashes[1]\"></mdc-text-field>\n  <div class=\"validation-input\">\n    <div class=\"mdc-slash-helper-text\">\n      facultatif\n    </div>\n  </div>\n\n  <div [ngClass]=\"{'hide-slashe': !slashes[1]}\">\n    <mdc-text-field #slashe2 label=\"Et parfois un.e\" name=\"slashe2\" type=\"text\" [(ngModel)]=\"slashes[2]\" formControlName=\"slashe2\" [fullwidth]=\"true\"></mdc-text-field>\n    <div class=\"validation-input\">\n      <div class=\"mdc-slash-helper-text\">\n        facultatif\n      </div>\n    </div>\n  </div>\n\n  <div [ngClass]=\"{'hide-slashe': !slashes[2]}\">\n    <mdc-text-field #slashe3 label=\"Et parfois un.e\" name=\"slashe3\" type=\"text\" [(ngModel)]=\"slashes[3]\" formControlName=\"slashe3\" [fullwidth]=\"true\"></mdc-text-field>\n    <div class=\"validation-input\">\n      <div class=\"mdc-slash-helper-text\">\n        facultatif\n      </div>\n    </div>\n  </div>\n\n  <div [ngClass]=\"{'hide-slashe': !slashes[3]}\">\n    <mdc-text-field #slashe4 label=\"Et parfois un.e\" name=\"slashe4\" type=\"text\" [(ngModel)]=\"slashes[4]\" formControlName=\"slashe4\" [fullwidth]=\"true\"></mdc-text-field>\n    <div class=\"validation-input\">\n      <div class=\"mdc-slash-helper-text\">\n        facultatif\n      </div>\n    </div>\n  </div>\n\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/slashes-choice/slashes-choice.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".hide-slashe {\n  position: absolute;\n  visibility: hidden; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/slashes-choice/slashes-choice.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SlashesChoiceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SlashesChoiceComponent = (function () {
    function SlashesChoiceComponent(cd) {
        this.cd = cd;
        this.focus = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    SlashesChoiceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.form.addControl('slashe0', new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required]));
        this.form.addControl('slashe1', new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](''));
        this.form.addControl('slashe2', new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](''));
        this.form.addControl('slashe3', new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](''));
        this.form.addControl('slashe4', new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](''));
        this.cd.detectChanges(); // because ExpressionChangedAfterItHasBeenCheckedError (do it better)
        setTimeout(function () {
            var onFocus = function () {
                _this.focus.emit();
            };
            _this.slashe0.inputText.nativeElement.onfocus = onFocus;
            _this.slashe1.inputText.nativeElement.onfocus = onFocus;
            _this.slashe2.inputText.nativeElement.onfocus = onFocus;
            _this.slashe3.inputText.nativeElement.onfocus = onFocus;
            _this.slashe4.inputText.nativeElement.onfocus = onFocus;
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], SlashesChoiceComponent.prototype, "slashes", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormGroup */])
    ], SlashesChoiceComponent.prototype, "form", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], SlashesChoiceComponent.prototype, "focus", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('slashe0'),
        __metadata("design:type", Object)
    ], SlashesChoiceComponent.prototype, "slashe0", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('slashe1'),
        __metadata("design:type", Object)
    ], SlashesChoiceComponent.prototype, "slashe1", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('slashe2'),
        __metadata("design:type", Object)
    ], SlashesChoiceComponent.prototype, "slashe2", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('slashe3'),
        __metadata("design:type", Object)
    ], SlashesChoiceComponent.prototype, "slashe3", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('slashe4'),
        __metadata("design:type", Object)
    ], SlashesChoiceComponent.prototype, "slashe4", void 0);
    SlashesChoiceComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'slashers-slashes-choice',
            template: __webpack_require__("../../../../../src/app/components/slashes-choice/slashes-choice.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/slashes-choice/slashes-choice.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]])
    ], SlashesChoiceComponent);
    return SlashesChoiceComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/toolbar/toolbar.component.html":
/***/ (function(module, exports) {

module.exports = "<mdc-toolbar [mdc-elevation]=\"5\">\n    <mdc-toolbar-row class=\"container\">\n        <mdc-toolbar-section [alignStart]=\"true\">\n            <mdc-toolbar-title>{{title}}</mdc-toolbar-title>\n        </mdc-toolbar-section>\n        <mdc-toolbar-section [alignEnd]=\"true\">\n            <mdc-icon>more_vert</mdc-icon>\n        </mdc-toolbar-section>\n    </mdc-toolbar-row>\n</mdc-toolbar>\n"

/***/ }),

/***/ "../../../../../src/app/components/toolbar/toolbar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "mdc-toolbar-title {\n  color: #ffffff; }\n\nmdc-icon {\n  margin-right: 8px;\n  color: #ffffff; }\n\n@media screen and (min-width: 580px) and (min-width: 768px) {\n  .container {\n    max-width: 720px !important; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/toolbar/toolbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToolbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ToolbarComponent = (function () {
    function ToolbarComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], ToolbarComponent.prototype, "title", void 0);
    ToolbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'slashers-toolbar',
            template: __webpack_require__("../../../../../src/app/components/toolbar/toolbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/toolbar/toolbar.component.scss")]
        })
    ], ToolbarComponent);
    return ToolbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/connexion/connexion.component.html":
/***/ (function(module, exports) {

module.exports = "<slashers-toolbar title=\"Connexion\"></slashers-toolbar>\n<div class=\"container wrapper\">\n    <button mdc-button class=\"first-btn\" [secondary]=\"true\" [raised]=\"true\" (click)=\"loginWithFacebook()\">SE\n        CONNECTER AVEC FACEBOOK\n    </button>\n    <button mdc-button class=\"second-btn\" [raised]=\"true\" (click)=\"loginWithLinkedIn()\">SE CONNECTER AVEC LINKEDIN</button>\n    <p class=\"text-mail\" mdc-typography-body2>Se connecter avec une adresse mail</p>\n    <form (ngSubmit)=\"onLogin()\" [formGroup]=\"form\">\n      <mdc-text-field [(ngModel)]=\"account.email\" name=\"email\" type=\"email\" label=\"E-mail\" formControlName=\"email\" [fullwidth]=\"true\"></mdc-text-field>\n      <div class=\"validation-input\">\n        <div class=\"mdc-slash-validation-text\" *ngIf=\"form.controls.email.touched && form.controls.email.errors?.required\">\n          L'email est obligatoire\n        </div>\n      </div>\n\n      <mdc-text-field [(ngModel)]=\"account.password\" name=\"password\" type=\"password\" label=\"Mot de passe\" formControlName=\"password\" [fullwidth]=\"true\"></mdc-text-field>\n      <div class=\"validation-input\">\n        <div class=\"mdc-slash-validation-text\" *ngIf=\"form.controls.password.touched && form.controls.password.errors?.required\">\n          Le mot de passe est obligatoire\n        </div>\n      </div>\n\n      <button class=\"submit-btn\" type=\"submit\" mdc-button [raised]=\"true\" [disabled]=\"!form.valid\">SE CONNECTER</button>\n\n    </form>\n\n    <div class=\"forgotten-password\">\n      Mot de passe oublié ?\n    </div>\n\n    <p class=\"become-slasher\">\n      Pas encore utilisateur Slashers ? <a href [routerLink]=\"['/inscription']\" class=\"login\">Inscrivez-vous</a>\n    </p>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/connexion/connexion.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container {\n  margin-top: 3.375em; }\n\nbutton {\n  width: 100%;\n  color: #FFFFFF !important; }\n\n.second-btn {\n  background-color: #0077B5;\n  margin-top: 1.25em; }\n\n.text-mail {\n  margin-top: 3em; }\n\np {\n  font-family: Roboto !important; }\n\n.submit-btn {\n  background-color: #0288D1; }\n\n.login {\n  color: #000000 !important; }\n\n.become-slasher {\n  font-size: 0.875em; }\n\n.forgotten-password {\n  margin-top: 1.5em;\n  font-size: 0.75em;\n  font-weight: 500;\n  color: #0288d1; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/connexion/connexion.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConnexionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular_linkedin_sdk__ = __webpack_require__("../../../../angular-linkedin-sdk/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular_linkedin_sdk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular_linkedin_sdk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_FacebookProvider_facebook_service__ = __webpack_require__("../../../../../src/app/services/FacebookProvider/facebook.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_slasher_data_service__ = __webpack_require__("../../../../../src/app/services/slasher-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_mdc_web__ = __webpack_require__("../../../../@angular-mdc/web/esm5/mdc.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ConnexionComponent = (function () {
    function ConnexionComponent(fb, linkedInService, slasherDataService, mdcSnackbar, formBuilder) {
        this.fb = fb;
        this.linkedInService = linkedInService;
        this.slasherDataService = slasherDataService;
        this.mdcSnackbar = mdcSnackbar;
        this.formBuilder = formBuilder;
        this.account = { email: null, password: null };
    }
    ConnexionComponent.prototype.ngOnInit = function () {
        this.form = this.formBuilder.group({
            email: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["l" /* Validators */].required]],
            password: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["l" /* Validators */].required]]
        });
    };
    ConnexionComponent.prototype.loginWithFacebook = function () {
        var _this = this;
        this.fb.login().then(function (response) {
            console.log(response);
            _this.fb.getData().then(function (data) {
                console.log(data);
            }).catch(function (error) { return console.error(error); });
        }).catch(function (error) { return console.error(error); });
    };
    ConnexionComponent.prototype.loginWithLinkedIn = function () {
        this.linkedInService.login().subscribe({
            next: function (state) {
                console.log(state);
            },
            complete: function () {
                // Completed
            }
        });
    };
    ConnexionComponent.prototype.onLogin = function () {
        var _this = this;
        this.slasherDataService.connection(this.account.email, this.account.password)
            .then(function (data) {
            console.log(data);
            if (data.statusCode == 409) {
                _this.mdcSnackbar.show('Email ou mdp incorrect', 'OK');
            }
        }, function (error) {
            console.log(error);
        });
        // console.log(this.account);
    };
    ConnexionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'slashers-connexion',
            template: __webpack_require__("../../../../../src/app/connexion/connexion.component.html"),
            styles: [__webpack_require__("../../../../../src/app/connexion/connexion.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_FacebookProvider_facebook_service__["a" /* FacebookService */],
            __WEBPACK_IMPORTED_MODULE_1_angular_linkedin_sdk__["LinkedInService"],
            __WEBPACK_IMPORTED_MODULE_3__services_slasher_data_service__["a" /* SlasherDataService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_mdc_web__["m" /* MdcSnackbar */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* FormBuilder */]])
    ], ConnexionComponent);
    return ConnexionComponent;
}());



/***/ }),

/***/ "../../../../../src/app/counter/counter.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <p>\n    <ng-content></ng-content>\n    Count: {{ count }} -\n    <input type=\"text\" [(ngModel)]=\"count\">\n    <textarea [(ngModel)]=\"count\"></textarea>\n    <button (click)=\"increment()\">Increment</button>\n  </p>\n</div>"

/***/ }),

/***/ "../../../../../src/app/counter/counter.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CounterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CounterComponent = (function () {
    function CounterComponent() {
        this.count = 0;
    }
    CounterComponent.prototype.increment = function () {
        this.count++;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], CounterComponent.prototype, "count", void 0);
    CounterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'rio-counter',
            template: __webpack_require__("../../../../../src/app/counter/counter.component.html")
        })
    ], CounterComponent);
    return CounterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"wrapper\">\n        <carousel>\n            <slide>\n                <img src=\"./assets/img/bg.png\" alt=\"First slide\">\n            </slide>\n            <slide>\n                <img src=\"./assets/img/bg.png\" alt=\"Second slide\">\n            </slide>\n            <slide>\n                <img src=\"./assets/img/bg.png\" alt=\"Third slide\">\n            </slide>\n            <slide>\n                <img src=\"./assets/img/bg.png\" alt=\"Fourth slide\">\n            </slide>\n        </carousel>\n        <div>\n            <button mdc-button class=\"btn-left\" [routerLink]=\"['./inscription']\" [raised]=\"true\">S'inscrire</button>\n            <button mdc-button class=\"btn-right\" [routerLink]=\"['./connexion']\" [raised]=\"true\">Se connecter</button>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".wrapper {\n  height: 100vh;\n  background-color: #FFB300;\n  margin-top: 0vh !important; }\n\n@media screen and (max-width: 580px) {\n  .wrapper {\n    margin-left: 0vw !important;\n    margin-right: 0vw !important; } }\n\nimg {\n  display: block;\n  height: 80vh; }\n\n.btn-left {\n  float: left;\n  background-color: #E0E0E0;\n  margin-left: 30px;\n  margin-top: 30px; }\n\n.btn-right {\n  float: right;\n  background-color: #0288D1;\n  margin-right: 30px;\n  margin-top: 30px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'slashers-home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.scss")]
        })
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/inscription/inscription.component.html":
/***/ (function(module, exports) {

module.exports = "<slashers-toolbar title=\"Inscription\"></slashers-toolbar>\n<div class=\"container wrapper\">\n    <button mdc-button class=\"first-btn\" [secondary]=\"true\" [raised]=\"true\" (click)=\"registerWithFacebook()\" [disabled]=\"true\">S’INSCRIRE\n        AVEC FACEBOOK\n    </button>\n    <button mdc-button class=\"second-btn\" [raised]=\"true\" (click)=\"registerWithLinkedIn()\" [disabled]=\"true\">S’INSCRIRE AVEC LINKEDIN\n    </button>\n    <p class=\"text-mail\" mdc-typography-body2>S’inscrire avec une adresse mail</p>\n\n\n    <form (ngSubmit)=\"onRegister()\" [formGroup]=\"form\">\n        <mdc-text-field [(ngModel)]=\"account.email\" formControlName=\"email\" type=\"email\" name=\"email\" label=\"E-mail\" [fullwidth]=\"true\"></mdc-text-field>\n        <div class=\"validation-input\">\n          <div class=\"mdc-slash-validation-text\" *ngIf=\"form.controls.email.touched && form.controls.email.errors?.required\">\n            L'email est obligatoire\n          </div>\n          <div class=\"mdc-slash-validation-text\" *ngIf=\"form.controls.email.touched && !form.controls.email.errors?.required && form.controls.email.errors?.email\">\n            Le format de l'email est incorrect\n          </div>\n        </div>\n\n        <mdc-text-field [(ngModel)]=\"account.password\" formControlName=\"password\" name=\"password\" label=\"Mot de passe\"\n          type=\"password\" label=\"Mot de passe\" [fullwidth]=\"true\">\n        </mdc-text-field>\n        <div class=\"validation-input\">\n          <div class=\"mdc-slash-validation-text\" *ngIf=\"form.controls.password.touched && form.controls.password.errors?.required\">\n            Le mot de passe est obligatoire\n          </div>\n          <div class=\"mdc-slash-validation-text\" *ngIf=\"form.controls.password.touched && !form.controls.password.errors?.required && form.controls.password.errors?.minlength\">\n            Le mot de passe doit faire au moins 7 caractères\n          </div>\n          <div class=\"mdc-slash-helper-text\" *ngIf=\"!form.controls.password.touched\">\n            Au moins 7 caractères\n          </div>\n        </div>\n\n        <mdc-text-field [(ngModel)]=\"account.confirmation\" formControlName=\"confirmation\" name=\"confirmation\"\n          label=\"Confirmer le mot de passe\" type=\"password\" [fullwidth]=\"true\">\n        </mdc-text-field>\n        <div class=\"validation-input\">\n          <div class=\"mdc-slash-validation-text\" *ngIf=\"form.controls.confirmation.touched && form.controls.confirmation.errors?.required\">\n            La confirmation est obligatoire\n          </div>\n          <div class=\"mdc-slash-validation-text\" *ngIf=\"form.controls.confirmation.touched && !form.controls.confirmation.errors?.required && form.controls.confirmation.errors?.equalTo\">\n            Les deux mots de passes ne correspondent pas\n          </div>\n        </div>\n\n        <button class=\"submit-btn\" type=\"submit\" mdc-button [raised]=\"true\" [disabled]=\"!form.valid\">\n            S’INSCRIRE\n        </button>\n        <p class=\"p-rules\" mdc-typography-subheading1>\n            <span class=\"span-rules\">En cliquant sur \"s'inscrire” vous acceptez</span> <br>\n            les <a href class=\"a-rules\">conditions générales d’utilisations</a>\n        </p>\n        <p class=\"connect\">Déjà utilisateur de Slashers ? <a href class=\"connect-link\" [routerLink]=\"['/connexion']\">Connectez-vous</a></p>\n    </form>\n\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/inscription/inscription.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container {\n  margin-top: 3.375em; }\n\nbutton {\n  width: 100%;\n  color: #FFFFFF !important; }\n\n.second-btn {\n  background-color: #0077B5;\n  margin-top: 1.25em; }\n\n.text-mail {\n  margin-top: 3em; }\n\np {\n  font-family: Roboto; }\n\n.right-helper {\n  text-align: right; }\n\n.submit-btn {\n  margin-top: 0.5em;\n  background-color: #0288D1; }\n\n.p-rules {\n  font-size: .8em !important; }\n\n.span-rules {\n  color: #828282 !important; }\n\n.a-rules {\n  color: #0288D1 !important; }\n\n.connect {\n  font-size: 0.875em; }\n  .connect .connect-link {\n    color: #000000 !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/inscription/inscription.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InscriptionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular_linkedin_sdk__ = __webpack_require__("../../../../angular-linkedin-sdk/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular_linkedin_sdk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular_linkedin_sdk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_FacebookProvider_facebook_service__ = __webpack_require__("../../../../../src/app/services/FacebookProvider/facebook.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_slasher_data_service__ = __webpack_require__("../../../../../src/app/services/slasher-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_mdc_web__ = __webpack_require__("../../../../@angular-mdc/web/esm5/mdc.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng4_validators__ = __webpack_require__("../../../../ng4-validators/ng4-validators/ng4-validators.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var InscriptionComponent = (function () {
    function InscriptionComponent(fb, linkedInService, slasherDataService, mdcSnackbar, router, formBuilder) {
        this.fb = fb;
        this.linkedInService = linkedInService;
        this.slasherDataService = slasherDataService;
        this.mdcSnackbar = mdcSnackbar;
        this.router = router;
        this.formBuilder = formBuilder;
        this.account = { email: null, password: null, confirmation: null };
    }
    InscriptionComponent.prototype.ngOnInit = function () {
        var password = new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_7__angular_forms__["l" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_7__angular_forms__["l" /* Validators */].minLength(7)]);
        var confirmation = new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_7__angular_forms__["l" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_6_ng4_validators__["b" /* CustomValidators */].equalTo(password)]);
        this.form = this.formBuilder.group({
            email: ['', [__WEBPACK_IMPORTED_MODULE_7__angular_forms__["l" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_7__angular_forms__["l" /* Validators */].email]],
            password: password,
            confirmation: confirmation
        });
    };
    InscriptionComponent.prototype.registerWithFacebook = function () {
        var _this = this;
        this.fb.login().then(function (response) {
            console.log(response);
            _this.fb.getData().then(function (data) {
                console.log(data);
            }).catch(function (error) { return console.error(error); });
        }).catch(function (error) { return console.error(error); });
    };
    InscriptionComponent.prototype.registerWithLinkedIn = function () {
        this.linkedInService.login().subscribe({
            next: function (state) {
                console.log(state);
            },
            complete: function () {
                // Completed
            }
        });
    };
    InscriptionComponent.prototype.onRegister = function () {
        var _this = this;
        this.slasherDataService.signup(this.account.email, this.account.password)
            .then(function (data) {
            if (data.statusCode == 409) {
                _this.mdcSnackbar.show('Email déjà utilisé', 'OK'
                // {
                //   duration: 5000
                // }
                );
            }
            else {
                _this.router.navigate(['/presentation']);
            }
        }, function (error) {
            console.log(error);
        });
    };
    InscriptionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'slashers-inscription',
            template: __webpack_require__("../../../../../src/app/inscription/inscription.component.html"),
            styles: [__webpack_require__("../../../../../src/app/inscription/inscription.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_FacebookProvider_facebook_service__["a" /* FacebookService */],
            __WEBPACK_IMPORTED_MODULE_1_angular_linkedin_sdk__["LinkedInService"],
            __WEBPACK_IMPORTED_MODULE_3__services_slasher_data_service__["a" /* SlasherDataService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_mdc_web__["m" /* MdcSnackbar */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* FormBuilder */]])
    ], InscriptionComponent);
    return InscriptionComponent;
}());



/***/ }),

/***/ "../../../../../src/app/not-found/not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>404 Not Found</h1>\n"

/***/ }),

/***/ "../../../../../src/app/not-found/not-found.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/not-found/not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NotFoundComponent = (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'slashers-not-found',
            template: __webpack_require__("../../../../../src/app/not-found/not-found.component.html"),
            styles: [__webpack_require__("../../../../../src/app/not-found/not-found.component.scss")]
        })
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "../../../../../src/app/presentation/presentation.component.html":
/***/ (function(module, exports) {

module.exports = "<slashers-toolbar title=\"Présentation\"></slashers-toolbar>\n<div class=\"wrapper container\">\n  <form [formGroup]=\"form\">\n    <mdc-text-field [(ngModel)]=\"slasherData.firstName\" name=\"firstName\" label=\"Prénom\" formControlName=\"firstName\" [fullwidth]=\"true\"></mdc-text-field>\n    <div class=\"validation-input\">\n      <div class=\"mdc-slash-validation-text\" *ngIf=\"form.controls.firstName.touched && form.controls.firstName.errors?.required\">\n        Le prénom est obligatoire\n      </div>\n    </div>\n\n    <mdc-text-field [(ngModel)]=\"slasherData.lastName\"name=\"lastName\" label=\"Nom\" formControlName=\"lastName\" [fullwidth]=\"true\"></mdc-text-field>\n    <div class=\"validation-input\">\n      <div class=\"mdc-slash-validation-text\" *ngIf=\"form.controls.lastName.touched && form.controls.lastName.errors?.required\">\n        Le nom est obligatoire\n      </div>\n    </div>\n    <div class=\"blue-helper\">\n      Indiquer votre identité réelle permettera aux autres slashers de vous retrouver facilement\n    </div>\n\n    <mdc-text-field [(ngModel)]=\"slasherData.age\" name=\"age\" label=\"Âge\" type=\"number\" formControlName=\"age\" [fullwidth]=\"true\"></mdc-text-field>\n    <div class=\"validation-input\">\n      <div class=\"mdc-slash-validation-text\" *ngIf=\"form.controls.age.touched && form.controls.age.errors?.required\">\n        L'âge est obligatoire\n      </div>\n      <div class=\"mdc-slash-validation-text\" *ngIf=\"form.controls.age.touched && form.controls.age.errors?.min\">\n        Âge minimum : 16 ans\n      </div>\n      <div class=\"mdc-slash-helper-text\">\n        Ne s'affichera pas sur votre profil\n      </div>\n    </div>\n\n    <!-- <mdc-text-field [(ngModel)]=\"slasherData.location\" name=\"location\" label=\"Ville\" formControlName=\"location\" [fullwidth]=\"true\" #search></mdc-text-field>\n    <div class=\"validation-input\">\n      <div class=\"mdc-slash-validation-text\" *ngIf=\"form.controls.location.touched && form.controls.location.errors?.required\">\n        La ville est obligatoire\n      </div>\n    </div> -->\n\n    <!-- <mdc-text-field name=\"location\" label=\"Ville\" formControlName=\"location\" [fullwidth]=\"true\" #search></mdc-text-field>\n    <div class=\"validation-input\">\n      <div class=\"mdc-slash-validation-text\" *ngIf=\"form.controls.location.touched && form.controls.location.errors?.required\">\n        La ville est obligatoire\n      </div>\n    </div> -->\n\n    <slashers-input-location [form]=\"form\" (placeChanged)=\"placeChanged($event)\" [data]=\"slasherData\"></slashers-input-location>\n\n  </form>\n</div>\n\n<slashers-progress precedent=\"inscription\" progress=\"0\" suivant=\"take-picture\" [nextEnabled]=\"form.valid\"></slashers-progress>\n"

/***/ }),

/***/ "../../../../../src/app/presentation/presentation.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container {\n  margin-top: 2em; }\n\n.blue-helper {\n  font-size: 0.75em;\n  font-weight: 500;\n  color: #0288d1;\n  max-width: 80%;\n  margin-left: 20%;\n  text-align: right; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/presentation/presentation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PresentationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_slasher_data_service__ = __webpack_require__("../../../../../src/app/services/slasher-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng4_validators__ = __webpack_require__("../../../../ng4-validators/ng4-validators/ng4-validators.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PresentationComponent = (function () {
    function PresentationComponent(slasherDataService, mapsAPILoader, ngZone, formBuilder) {
        this.slasherDataService = slasherDataService;
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this.formBuilder = formBuilder;
    }
    PresentationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.slasherDataService.slasherData$.subscribe(function (data) {
            _this.slasherData = data;
        });
        this.form = this.formBuilder.group({
            firstName: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["l" /* Validators */].required]],
            lastName: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["l" /* Validators */].required]],
            age: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["l" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3_ng4_validators__["b" /* CustomValidators */].min(16)]],
        });
        // this.mapsAPILoader.load().then(() => {
        //   let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.inputText.elementRef.nativeElement, {
        //     types: ['(cities)'],
        //     componentRestrictions: { country: 'FR' }
        //   });
        //   autocomplete.addListener("place_changed", () => {
        //     this.ngZone.run(() => {
        //       //get the place result
        //       let place: google.maps.places.PlaceResult = autocomplete.getPlace();
        //
        //       this.slasherData.location = place.formatted_address;
        //
        //       //verify result
        //       if (place.geometry === undefined || place.geometry === null) {
        //         return;
        //       }
        //     });
        //   });
        // });
    };
    PresentationComponent.prototype.placeChanged = function (place) {
        if (place && place.geometry !== undefined && place.geometry !== null) {
            this.slasherData.location = place.formatted_address;
            var locationGPS = { lat: place.geometry.location.lat(), long: place.geometry.location.lng() };
            console.log(locationGPS);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('search'),
        __metadata("design:type", Object)
    ], PresentationComponent.prototype, "searchElementRef", void 0);
    PresentationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'slashers-presentation',
            template: __webpack_require__("../../../../../src/app/presentation/presentation.component.html"),
            styles: [__webpack_require__("../../../../../src/app/presentation/presentation.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_slasher_data_service__["a" /* SlasherDataService */],
            __WEBPACK_IMPORTED_MODULE_2__agm_core__["b" /* MapsAPILoader */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormBuilder */]])
    ], PresentationComponent);
    return PresentationComponent;
}());



/***/ }),

/***/ "../../../../../src/app/profiles/components/profile-identity/profile-identity.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"profile-container\" style=\"width:100%;\">\n  <slashers-full-cropped-image class=\"profile-img\" [imageSrc]=\"imageSrc\" [ngClass]=\"{'blur': blur}\"></slashers-full-cropped-image>\n  <div class=\"shadow\"></div>\n  <!-- <button class=\"story-button\" mdc-button [stroked]=\"true\">\n    LIRE LA STORY\n  </button> -->\n  <ng-content></ng-content>\n</div>\n<div class=\"avatar-container\">\n  <img class=\"avatar-img\" [src]=\"avatarSrc\" alt=\"avatar\">\n  <div class=\"edit-img\" *ngIf=\"editable\" (click)=\"updateAvatar.emit()\"><mdc-icon>camera_alt</mdc-icon></div>\n</div>\n<div *ngIf=\"informations\" class=\"informations\">\n  <div class=\"name\">{{informations.name}}</div>\n  <div class=\"slashes\">{{informations.slashes}}</div>\n  <div class=\"location\">{{informations.location}}</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/profiles/components/profile-identity/profile-identity.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".profile-container {\n  width: 100%;\n  overflow: hidden;\n  margin: 0;\n  position: relative; }\n  .profile-container .profile-img {\n    display: block;\n    width: 100vw;\n    height: 60vw; }\n  .profile-container .profile-img.blur {\n    -webkit-filter: blur(12px);\n            filter: blur(12px);\n    -webkit-transform: scale(1.1);\n            transform: scale(1.1); }\n  .profile-container .shadow {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    z-index: 1;\n    background-image: linear-gradient(to top, #000000, transparent); }\n\n:host ::ng-deep .profile-container button {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  color: #fff;\n  z-index: 2;\n  border-width: 1px;\n  border-color: #fff; }\n\n.avatar-container {\n  position: relative;\n  height: 2.3125em; }\n  .avatar-container .avatar-img {\n    position: absolute;\n    top: 0;\n    left: 50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n    z-index: 2;\n    width: 4.625em;\n    height: auto;\n    border-radius: 50%; }\n  .avatar-container .edit-img {\n    position: absolute;\n    top: 0;\n    left: 50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n    z-index: 3; }\n    .avatar-container .edit-img mdc-icon {\n      font-size: 2em;\n      color: #fff; }\n\n.informations {\n  text-align: center; }\n  .informations .name {\n    font-size: 1.5em; }\n  .informations .slashes {\n    font-size: 0.875em;\n    padding-top: 0.25em; }\n  .informations .location {\n    font-size: 0.75em;\n    padding-top: 0.25em; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/profiles/components/profile-identity/profile-identity.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileIdentityComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProfileIdentityComponent = (function () {
    function ProfileIdentityComponent() {
        this.editable = false;
        this.blur = false;
        this.updateAvatar = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], ProfileIdentityComponent.prototype, "imageSrc", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], ProfileIdentityComponent.prototype, "avatarSrc", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], ProfileIdentityComponent.prototype, "editable", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], ProfileIdentityComponent.prototype, "blur", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ProfileIdentityComponent.prototype, "informations", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], ProfileIdentityComponent.prototype, "updateAvatar", void 0);
    ProfileIdentityComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'slashers-profile-identity',
            template: __webpack_require__("../../../../../src/app/profiles/components/profile-identity/profile-identity.component.html"),
            styles: [__webpack_require__("../../../../../src/app/profiles/components/profile-identity/profile-identity.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ProfileIdentityComponent);
    return ProfileIdentityComponent;
}());



/***/ }),

/***/ "../../../../../src/app/profiles/components/profile-toolbar/profile-toolbar.component.html":
/***/ (function(module, exports) {

module.exports = "<mdc-toolbar [fixed]=\"true\">\n    <mdc-toolbar-row class=\"container\">\n      <mdc-icon *ngIf=\"!hasPrev\"mdc-toolbar-menu-icon>menu</mdc-icon>\n      <mdc-icon *ngIf=\"hasPrev\" mdc-toolbar-menu-icon (click)=\"goPrev()\">arrow_back</mdc-icon>\n      <mdc-toolbar-title>{{title}}</mdc-toolbar-title>\n      <mdc-toolbar-section [alignEnd]=\"true\">\n        <mdc-icon *ngIf=\"hasSearch\">search</mdc-icon>\n        <mdc-icon *ngIf=\"hasMore\">more_vert</mdc-icon>\n        <mdc-icon *ngIf=\"hasValidate\" (click)=\"validate.emit()\">done</mdc-icon>\n      </mdc-toolbar-section>\n    </mdc-toolbar-row>\n</mdc-toolbar>\n"

/***/ }),

/***/ "../../../../../src/app/profiles/components/profile-toolbar/profile-toolbar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "mdc-toolbar-title {\n  color: #ffffff; }\n\nmdc-icon {\n  margin-right: 8px;\n  color: #ffffff; }\n\n@media screen and (min-width: 580px) and (min-width: 768px) {\n  .container {\n    max-width: 720px !important; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/profiles/components/profile-toolbar/profile-toolbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileToolbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProfileToolbarComponent = (function () {
    function ProfileToolbarComponent(router) {
        this.router = router;
        this.hasSearch = false;
        this.hasMore = false;
        this.hasValidate = false;
        this.hasPrev = false;
        this.prevEnabled = true;
        this.goPrevious = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.validate = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    ProfileToolbarComponent.prototype.goPrev = function () {
        if (this.prevEnabled) {
            if (this.previous) {
                this.router.navigate(['/' + this.previous]);
            }
            else {
                this.goPrevious.emit();
            }
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], ProfileToolbarComponent.prototype, "title", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], ProfileToolbarComponent.prototype, "hasSearch", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], ProfileToolbarComponent.prototype, "hasMore", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], ProfileToolbarComponent.prototype, "hasValidate", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], ProfileToolbarComponent.prototype, "hasPrev", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], ProfileToolbarComponent.prototype, "previous", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], ProfileToolbarComponent.prototype, "progress", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], ProfileToolbarComponent.prototype, "prevEnabled", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], ProfileToolbarComponent.prototype, "goPrevious", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], ProfileToolbarComponent.prototype, "validate", void 0);
    ProfileToolbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'slashers-profile-toolbar',
            template: __webpack_require__("../../../../../src/app/profiles/components/profile-toolbar/profile-toolbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/profiles/components/profile-toolbar/profile-toolbar.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], ProfileToolbarComponent);
    return ProfileToolbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/profiles/profile-edit-links/profile-edit-links.component.html":
/***/ (function(module, exports) {

module.exports = "<slashers-profile-toolbar title=\"Editez vos liens\" hasPrev=\"true\" previous=\"profile\"></slashers-profile-toolbar>\n\n<div class=\"title\">\n  Vous retrouverez sur le web:\n</div>\n<div class=\"elements-container\">\n\n  <div *ngFor=\"let element of elements;let i = index;\" class=\"element-container\" [style.order]=\"getOrder(i)\">\n    <div class=\"element-image\">\n      <img *ngIf=\"element.imageSrc\" class=\"link-img\" [src]=\"element.imageSrc\" />\n      <mdc-icon *ngIf=\"!element.imageSrc\" class=\"link-icon\" [style.color]=\"element.color\">insert_link</mdc-icon>\n    </div>\n    <div class=\"element-link\">\n      <div *ngIf=\"element.link\" class=\"link-text\">\n        {{element.link}}\n      </div>\n      <div *ngIf=\"!element.link\">\n        <button class=\"link-button\" mdc-button [raised]=\"true\" [style.backgroundColor]=\"element.color\">Ajouter à mon compte {{element.name}}</button>\n      </div>\n    </div>\n    <div *ngIf=\"element.link\" class=\"element-action\">\n      <mdc-icon class=\"more\" (click)=\"openMenu(menu)\">more_vert</mdc-icon>\n      <div mdc-menu-anchor>\n        <mdc-menu class=\"menu-action\" #menu openFrom=\"topLeft\">\n          <mdc-menu-item class=\"marked\" (click)=\"setAsPrioritary(i)\">Afficher en priorité</mdc-menu-item>\n          <mdc-menu-item (click)=\"updateLink(i)\">Modifier</mdc-menu-item>\n          <mdc-menu-item (click)=\"removeLink(i)\">Supprimer</mdc-menu-item>\n        </mdc-menu>\n      </div>\n    </div>\n    <div *ngIf=\"!element.link\" class=\"element-action\"></div>\n  </div>\n\n  <div class=\"element-container\" [style.order]=\"3\">\n    <div class=\"element-image\">\n      <mdc-icon class=\"link-icon own-link-icon\">insert_link</mdc-icon>\n    </div>\n    <div class=\"element-link\">\n      <button class=\"link-button own-link-button\" mdc-button [raised]=\"true\">Ajouter un site perso</button>\n    </div>\n    <div class=\"element-action\"></div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/profiles/profile-edit-links/profile-edit-links.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  /* height 100vh to remove link action menu*/\n  display: inline-block;\n  height: 100vh;\n  width: 100%; }\n\n.title {\n  font-size: 1em;\n  color: rgba(0, 0, 0, 0.57);\n  margin: 1.5em 1em; }\n\n.elements-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n  .elements-container .element-container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    padding: 0.625em 0.5em 0.625em 1em; }\n    .elements-container .element-container .element-image {\n      -webkit-box-flex: 0;\n          -ms-flex: 0 0 auto;\n              flex: 0 0 auto;\n      height: 1.5em; }\n      .elements-container .element-container .element-image .link-img {\n        width: 1.5em;\n        height: 1.5em; }\n      .elements-container .element-container .element-image .link-icon {\n        font-size: 1.5em; }\n      .elements-container .element-container .element-image .link-icon.own-link-icon {\n        color: #feb00e; }\n    .elements-container .element-container .element-link {\n      -webkit-box-flex: 1;\n          -ms-flex: 1 1 auto;\n              flex: 1 1 auto;\n      padding-left: 1.5em;\n      padding-right: 1.5em; }\n      .elements-container .element-container .element-link .link-text {\n        color: #0288d1;\n        font-size: 1em; }\n      .elements-container .element-container .element-link .link-button {\n        color: #fff;\n        width: 100%; }\n      .elements-container .element-container .element-link .link-button.own-link-button {\n        background-color: #feb00e; }\n    .elements-container .element-container .element-action {\n      -webkit-box-flex: 0;\n          -ms-flex: 0 0 auto;\n              flex: 0 0 auto;\n      width: 1.5em;\n      height: 1.5em; }\n      .elements-container .element-container .element-action .menu-action {\n        background-color: #fafafa; }\n        .elements-container .element-container .element-action .menu-action .marked {\n          background-color: #e0e0e0; }\n      .elements-container .element-container .element-action .more {\n        color: rgba(0, 0, 0, 0.57); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/profiles/profile-edit-links/profile-edit-links.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileEditLinksComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var LinkType;
(function (LinkType) {
    LinkType[LinkType["Social"] = 17] = "Social";
    LinkType[LinkType["Own"] = 18] = "Own";
})(LinkType || (LinkType = {}));
;
var ProfileEditLinksComponent = (function () {
    function ProfileEditLinksComponent() {
        this.linkType = LinkType;
        this.elements = [
            { type: this.linkType.Social, name: 'Facebook', link: 'facebook.com/fabricioLavandier', priority: 0, imageSrc: '../assets/img/facebook-icon.png', color: '#3b5998' },
            { type: this.linkType.Social, name: 'Linkedin', link: '', priority: 0, imageSrc: '../assets/img/linkedin-icon.png', color: '#007bb5' },
            { type: this.linkType.Social, name: 'Twitter', link: 'twitter.com/fabricioLavandier', priority: 1, imageSrc: '../assets/img/twitter-icon.png', color: '#55acee' },
            { type: this.linkType.Own, name: '', link: 'fabricioLavandier.com', priority: 0, imageSrc: '', color: '#feb00e' },
        ];
    }
    ProfileEditLinksComponent.prototype.getOrder = function (index) {
        var element = this.elements[index];
        return element.link ? (1 - element.priority) : 2;
    };
    ProfileEditLinksComponent.prototype.openMenu = function (menu) {
        menu.open();
    };
    ProfileEditLinksComponent.prototype.setAsPrioritary = function (index) {
        this.elements = __WEBPACK_IMPORTED_MODULE_1_lodash__["map"](this.elements, function (x, i) {
            x.priority = (i === index) ? 1 : 0;
            return x;
        });
    };
    ProfileEditLinksComponent.prototype.updateLink = function (index) {
    };
    ProfileEditLinksComponent.prototype.removeLink = function (index) {
        var _this = this;
        this.elements = __WEBPACK_IMPORTED_MODULE_1_lodash__(this.elements)
            .map(function (x, i) {
            if (i === index) {
                x.link = '';
            }
            return x;
        })
            .filter(function (x, i) {
            return (i !== index || x.type === _this.linkType.Social);
        })
            .value();
    };
    ProfileEditLinksComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'slashers-profile-edit-links',
            template: __webpack_require__("../../../../../src/app/profiles/profile-edit-links/profile-edit-links.component.html"),
            styles: [__webpack_require__("../../../../../src/app/profiles/profile-edit-links/profile-edit-links.component.scss")],
        })
    ], ProfileEditLinksComponent);
    return ProfileEditLinksComponent;
}());



/***/ }),

/***/ "../../../../../src/app/profiles/profile-take-avatar/profile-take-avatar.component.html":
/***/ (function(module, exports) {

module.exports = "<slashers-profile-toolbar\n  title=\"Modifier ma photo\"\n  hasPrev=\"true\"\n  previous=\"profile-update\"\n  [hasValidate]=\"true\"\n  (validate)=\"validate()\">\n</slashers-profile-toolbar>\n\n<div style=\"flex: 1 1 0\">\n  <slashers-picture-display style=\"flex: 1 1 0;min-width:0;min-height:0;\" [src]=\"slasherData.imageSrc\" (onSetImageData)=\"onSetImageData($event)\"></slashers-picture-display>\n</div>\n\n<!-- <slashers-progress style=\"flex:0 0 auto;\" precedent=\"take-picture\" progress=\"33\" (next)=\"goNext()\" [nextEnabled]=\"true\"></slashers-progress> -->\n"

/***/ }),

/***/ "../../../../../src/app/profiles/profile-take-avatar/profile-take-avatar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  background-color: rgba(51, 51, 51, 0.9);\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  height: 100vh;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n\nslashers-profile-toolbar {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 auto;\n          flex: 0 0 auto; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/profiles/profile-take-avatar/profile-take-avatar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileTakeAvatarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_slasher_data_service__ = __webpack_require__("../../../../../src/app/services/slasher-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileTakeAvatarComponent = (function () {
    function ProfileTakeAvatarComponent(slasherDataService, router) {
        this.slasherDataService = slasherDataService;
        this.router = router;
    }
    ProfileTakeAvatarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.slasherDataService.slasherData$.subscribe(function (data) {
            _this.slasherData = data;
        });
    };
    ProfileTakeAvatarComponent.prototype.onSetImageData = function (event) {
        this.slasherDataService.slasherData.avatarSrc = event.cropperSrc;
        this.slasherDataService.slasherData.cropperPosition = event.cropperPosition;
    };
    ProfileTakeAvatarComponent.prototype.validate = function () {
        var _this = this;
        this.slasherDataService.update()
            .then(function (data) {
            _this.router.navigate(['/profile-update']);
        }, function (error) {
            console.log(error);
        });
    };
    ProfileTakeAvatarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'slashers-profile-take-avatar',
            template: __webpack_require__("../../../../../src/app/profiles/profile-take-avatar/profile-take-avatar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/profiles/profile-take-avatar/profile-take-avatar.component.scss")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_slasher_data_service__["a" /* SlasherDataService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], ProfileTakeAvatarComponent);
    return ProfileTakeAvatarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/profiles/profile-take-picture/profile-take-picture.component.html":
/***/ (function(module, exports) {

module.exports = "<slashers-profile-toolbar\n  title=\"Modifier ma photo\"\n  hasPrev=\"true\"\n  previous=\"profile-update\"\n  [hasValidate]=\"true\"\n  (validate)=\"validate()\">\n</slashers-profile-toolbar>\n\n<slashers-choose-picture *ngIf=\"!showCamera\" (openCamera)=\"openCamera()\" (openFile)=\"openFile()\"></slashers-choose-picture>\n\n<div *ngIf=\"showCamera\" class=\"camera-container\">\n  <slashers-camera (onSetImageData)=\"onSetImageData($event)\"></slashers-camera>\n</div>\n\n<input #inputFile style=\"position:absolute;visibility:hidden;\" type=\"file\" accept=\"image/*\" (change)=\"imagePicked($event)\">\n\n<div class=\"bottom\"></div>\n"

/***/ }),

/***/ "../../../../../src/app/profiles/profile-take-picture/profile-take-picture.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  background-color: rgba(51, 51, 51, 0.8);\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  height: 100vh;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n  :host slashers-profile-toolbar {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto; }\n  :host slashers-choose-picture {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    margin-left: 0.5em;\n    margin-right: 0.5em; }\n  :host .camera-container {\n    -webkit-box-flex: 1;\n        -ms-flex: 1 1 0px;\n            flex: 1 1 0; }\n  :host .bottom {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    height: 56px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/profiles/profile-take-picture/profile-take-picture.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileTakePictureComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_slasher_data_service__ = __webpack_require__("../../../../../src/app/services/slasher-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileTakePictureComponent = (function () {
    function ProfileTakePictureComponent(slasherDataService, router) {
        this.slasherDataService = slasherDataService;
        this.router = router;
        this.showCamera = false;
    }
    ProfileTakePictureComponent.prototype.openCamera = function () {
        this.showCamera = true;
    };
    ProfileTakePictureComponent.prototype.openFile = function () {
        this.inputFile.nativeElement.click();
    };
    ProfileTakePictureComponent.prototype.onSetImageData = function (data) {
        this.slasherDataService.slasherData.imageSrc = data;
    };
    ProfileTakePictureComponent.prototype.imagePicked = function (fileInput) {
        var _this = this;
        var reader = new FileReader();
        reader.onload = function (e) {
            _this.slasherDataService.slasherData.imageSrc = e.target.result;
            _this.router.navigate(['/profile-take-avatar']);
        };
        reader.readAsDataURL(fileInput.target.files[0]);
    };
    ProfileTakePictureComponent.prototype.validate = function () {
        if (this.slasherDataService.slasherData.imageSrc) {
            this.slasherDataService.update();
            this.router.navigate(['/profile-take-avatar']);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('inputFile'),
        __metadata("design:type", Object)
    ], ProfileTakePictureComponent.prototype, "inputFile", void 0);
    ProfileTakePictureComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'slashers-profile-take-picture',
            template: __webpack_require__("../../../../../src/app/profiles/profile-take-picture/profile-take-picture.component.html"),
            styles: [__webpack_require__("../../../../../src/app/profiles/profile-take-picture/profile-take-picture.component.scss")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_slasher_data_service__["a" /* SlasherDataService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], ProfileTakePictureComponent);
    return ProfileTakePictureComponent;
}());



/***/ }),

/***/ "../../../../../src/app/profiles/profile-update/profile-update.component.html":
/***/ (function(module, exports) {

module.exports = "<slashers-profile-toolbar\n  title=\"Modifier mon profil\"\n  hasPrev=\"true\"\n  previous=\"profile\"\n  [hasValidate]=\"true\"\n  (validate)=\"validate()\">\n</slashers-profile-toolbar>\n\n<slashers-profile-identity\n  [imageSrc]=\"slasherData.imageSrc\"\n  [avatarSrc]=\"slasherData.avatarSrc\"\n  [editable]=\"true\"\n  (updateAvatar)=\"updateAvatar()\">\n  <button mdc-button [stroked]=\"true\" [routerLink]=\"['/profile']\">\n    <mdc-icon>mode_edit</mdc-icon>EDITER MA STORY\n  </button>\n</slashers-profile-identity>\n\n<div class=\"container\">\n\n  <form [formGroup]=\"form\">\n\n      <mdc-text-field [(ngModel)]=\"slasherData.firstName\" name=\"firstName\" label=\"Prénom\" formControlName=\"firstName\" [fullwidth]=\"true\"></mdc-text-field>\n      <div class=\"validation-input\">\n        <div class=\"mdc-slash-validation-text\" *ngIf=\"form.controls.firstName.touched && form.controls.firstName.errors?.required\">\n          Le prénom est obligatoire\n        </div>\n      </div>\n\n      <mdc-text-field [(ngModel)]=\"slasherData.lastName\"name=\"lastName\" label=\"Nom\" formControlName=\"lastName\" [fullwidth]=\"true\"></mdc-text-field>\n      <div class=\"validation-input\">\n        <div class=\"mdc-slash-validation-text\" *ngIf=\"form.controls.lastName.touched && form.controls.lastName.errors?.required\">\n          Le nom est obligatoire\n        </div>\n      </div>\n      <div class=\"blue-helper\">\n        Indiquer votre identité réelle permettera aux autres slashers de vous retrouver facilement\n      </div>\n\n      <mdc-text-field [(ngModel)]=\"slasherData.age\" name=\"age\" label=\"Âge\" type=\"number\" formControlName=\"age\" [fullwidth]=\"true\"></mdc-text-field>\n      <div class=\"validation-input\">\n        <div class=\"mdc-slash-validation-text\" *ngIf=\"form.controls.age.touched && form.controls.age.errors?.required\">\n          L'âge est obligatoire\n        </div>\n        <div class=\"mdc-slash-validation-text\" *ngIf=\"form.controls.age.touched && form.controls.age.errors?.min\">\n          Âge minimum : 16 ans\n        </div>\n        <div class=\"mdc-slash-helper-text\">\n          Ne s'affichera pas sur votre profil\n        </div>\n      </div>\n\n      <slashers-input-location [form]=\"form\" (placeChanged)=\"placeChanged($event)\" [data]=\"slasherData\"></slashers-input-location>\n\n      <div class=\"title-slashes-choice\">Mes slashs: </div>\n      <slashers-slashes-choice [form]=\"form\" [slashes]=\"slashes\"></slashers-slashes-choice>\n\n      <mdc-textarea [(ngModel)]=\"slasherData.biography\" name=\"biography\" label=\"Ma biographie\" formControlName=\"biography\" [fullwidth]=\"true\" rows=\"4\">\n      </mdc-textarea>\n\n  </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/profiles/profile-update/profile-update.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container {\n  margin: 0 1em; }\n\n.blue-helper {\n  font-size: 0.75em;\n  font-weight: 500;\n  color: #0288d1;\n  max-width: 80%;\n  margin-left: 20%;\n  text-align: right; }\n\n.title-slashes-choice {\n  color: rgba(0, 0, 0, 0.57);\n  margin-bottom: 1em; }\n\nmdc-textarea {\n  padding: 0;\n  border: 0; }\n\n:host ::ng-deep textarea {\n  padding-left: 0 !important;\n  padding-right: 0 !important;\n  padding-bottom: 0 !important; }\n\n:host ::ng-deep .mdc-text-field--textarea .mdc-text-field__label {\n  padding: 0;\n  font-size: 0.75em; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/profiles/profile-update/profile-update.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileUpdateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_slasher_data_service__ = __webpack_require__("../../../../../src/app/services/slasher-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng4_validators__ = __webpack_require__("../../../../ng4-validators/ng4-validators/ng4-validators.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProfileUpdateComponent = (function () {
    function ProfileUpdateComponent(slasherDataService, formBuilder, router) {
        this.slasherDataService = slasherDataService;
        this.formBuilder = formBuilder;
        this.router = router;
    }
    ProfileUpdateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.slasherDataService.slasherData$.subscribe(function (data) {
            _this.slasherData = data;
            var emptyArray = __WEBPACK_IMPORTED_MODULE_2_lodash__["fill"](new Array(5), '');
            _this.slashes = __WEBPACK_IMPORTED_MODULE_2_lodash__["map"](emptyArray, function (x, i) {
                if (_this.slasherData.slashes.length > i) {
                    return _this.slasherData.slashes[i];
                }
            });
        });
        this.form = this.formBuilder.group({
            firstName: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["l" /* Validators */].required]],
            lastName: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["l" /* Validators */].required]],
            age: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["l" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3_ng4_validators__["b" /* CustomValidators */].min(16)]],
            biography: [''],
        });
        // this.form = this.formBuilder.group({});
    };
    ProfileUpdateComponent.prototype.placeChanged = function (place) {
        if (place && place.geometry !== undefined && place.geometry !== null) {
            this.slasherData.location = place.formatted_address;
            var locationGPS = { lat: place.geometry.location.lat(), long: place.geometry.location.lng() };
            console.log(locationGPS);
        }
    };
    ProfileUpdateComponent.prototype.updateAvatar = function () {
        this.router.navigate(['/profile-take-picture']);
    };
    ProfileUpdateComponent.prototype.validate = function () {
        if (this.form.valid) {
            console.log('ok');
        }
        else {
            console.log('pas ok');
        }
        this.router.navigate(['/profile']);
    };
    ProfileUpdateComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'slashers-profile-update',
            template: __webpack_require__("../../../../../src/app/profiles/profile-update/profile-update.component.html"),
            styles: [__webpack_require__("../../../../../src/app/profiles/profile-update/profile-update.component.scss")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_slasher_data_service__["a" /* SlasherDataService */], __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]])
    ], ProfileUpdateComponent);
    return ProfileUpdateComponent;
}());



/***/ }),

/***/ "../../../../../src/app/profiles/profile-view/profile-view.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <mdc-toolbar [mdc-elevation]=\"5\" style=\"position:absolute;top:0;left:0;\">\n    <mdc-toolbar-row class=\"container\">\n      <mdc-icon mdc-toolbar-menu-icon>menu</mdc-icon>\n      <mdc-toolbar-title>Fabricio Lavandier</mdc-toolbar-title>\n      <mdc-toolbar-section [alignEnd]=\"true\">\n        <mdc-icon>search</mdc-icon>\n        <mdc-icon>more_vert</mdc-icon>\n      </mdc-toolbar-section>\n    </mdc-toolbar-row>\n</mdc-toolbar> -->\n\n\n<!-- <mdc-toolbar [style.backgroundColor]=\"toolbarBackgroundColor\" style=\"overflow:hidden;\"\n  [flexible]=\"true\"\n  [fixed]=\"true\"\n  [waterfall]=\"true\"\n  [fixedLastrow]=\"false\"\n  (change)=\"changeRatio($event)\">\n  <mdc-toolbar-row style=\"height:400px;\">\n    <mdc-toolbar-section [alignStart]=\"true\">\n      <a href=\"#\" mdc-toolbar-menu-icon material-icon>menu</a>\n      <mdc-toolbar-title>{{profileInformations.name}}</mdc-toolbar-title>\n    </mdc-toolbar-section>\n  </mdc-toolbar-row>\n</mdc-toolbar> -->\n\n\n<slashers-profile-toolbar\n  [title]=\"profileInformations.name\"\n  [hasSearch]=\"true\"\n  [hasMore]=\"true\">\n</slashers-profile-toolbar>\n\n<slashers-profile-identity\n  [imageSrc]=\"slasherData.imageSrc\"\n  [avatarSrc]=\"slasherData.avatarSrc\"\n  [blur]=\"true\"\n  [informations]=\"profileInformations\"\n  [editable]=\"false\">\n  <button mdc-button [stroked]=\"true\" [routerLink]=\"['/profile']\">\n    LIRE LA STORY\n  </button>\n</slashers-profile-identity>\n\n\n<div class=\"main-container\">\n\n  <!-- <div class=\"identity\">\n    <div class=\"name\">Fabricio Lavandier</div>\n    <div class=\"profession\">Producteur / Consultant / Musicien</div>\n    <div class=\"location\">Paris, France</div>\n  </div> -->\n\n  <div class=\"contact-button-container\">\n    <button class=\"contact-button\" mdc-button [raised]=\"true\">CONTACTER</button>\n  </div>\n\n  <div class=\"shared\">\n    <div class=\"title-container\">\n      En commun avec vous :\n    </div>\n    <div class=\"recap\">\n      10 relations, 2 groupes, 5# écosystème\n    </div>\n  </div>\n\n  <div class=\"divider\"></div>\n\n  <div class=\"title-container\">\n    {{slasherData.firstName}} veut dénicher :\n  </div>\n  <slashers-profile-research-container [missions]=\"missions\"></slashers-profile-research-container>\n\n  <div class=\"divider\"></div>\n\n  <slashers-profile-ecosystem-container title=\"L'écosystème de {{slasherData.firstName}} :\" [ecosystem]=\"ecosystem\"></slashers-profile-ecosystem-container>\n\n  <div class=\"divider\"></div>\n\n  <div class=\"web-container part-container\">\n    <div class=\"part-header\">Retrouver {{slasherData.firstName}} sur le web :</div>\n    <div>\n      <a class=\"facebook-link\">\n        <img src=\"./assets/img/profile/facebook-icon.png\" alt=\"facebook\"/>\n        facebook.com/fabricio-lavandier78\n      </a>\n    </div>\n  </div>\n\n  <div class=\"divider\"></div>\n\n  <div class=\"group-container part-container\">\n    <div class=\"part-header\">Les groupes de {{slasherData.firstName}}</div>\n    <div class=\"description\">\n      ¯\\_(^^')_/¯<br>\n      {{slasherData.firstName}} n'est dans aucun groupe...\n    </div>\n    <div class=\"group-buttons\">\n      <button class=\"invite-button\" mdc-button [raised]=\"true\">INVITER {{slasherData.firstName | uppercase}}</button>\n      <!-- <button class=\"add-button\" mdc-fab [mini]=\"false\"><mdc-icon>add</mdc-icon></button> -->\n    </div>\n  </div>\n\n  <button class=\"add-button\" mdc-fab [mini]=\"false\" position=\"bottom-right\">\n    <mdc-icon>add</mdc-icon>\n  </button>\n\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/profiles/profile-view/profile-view.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  font-family: Roboto; }\n\n.divider {\n  height: 1px;\n  margin: 1em -1em;\n  background-color: rgba(0, 0, 0, 0.25); }\n\nmdc-toolbar {\n  z-index: 50;\n  color: #fff; }\n  mdc-toolbar .mdc-toolbar__menu-icon {\n    color: #fff; }\n  mdc-toolbar mdc-toolbar-section mdc-icon {\n    margin-right: 0.5em; }\n\n.profile-container {\n  width: 100%;\n  overflow: hidden;\n  margin: 0;\n  position: relative; }\n  .profile-container .profile-img {\n    display: block;\n    width: 100%;\n    margin: -20% 0; }\n  .profile-container .shadow {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    z-index: 10;\n    background-image: linear-gradient(to top, #000000, transparent); }\n  .profile-container .story-button {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n    padding-left: 2em;\n    padding-right: 2em;\n    color: #fff;\n    z-index: 20;\n    border-width: 1px;\n    border-color: #fff; }\n\n.avatar-container {\n  position: relative;\n  height: 2.3125em; }\n  .avatar-container .avatar-img {\n    position: absolute;\n    top: 0;\n    left: 50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n    z-index: 15;\n    width: 4.625em;\n    height: auto;\n    border-radius: 50%; }\n\n.main-container {\n  font-size: 1em;\n  margin-left: 1em;\n  margin-right: 1em; }\n  .main-container .identity {\n    text-align: center;\n    margin-bottom: 1em; }\n    .main-container .identity .name {\n      font-size: 1.5em; }\n    .main-container .identity .profession {\n      font-size: 0.875em; }\n    .main-container .identity .location {\n      font-size: 0.75em; }\n  .main-container .contact-button-container {\n    margin-top: 0.875em;\n    margin-bottom: 1.5em;\n    text-align: center; }\n    .main-container .contact-button-container .contact-button {\n      color: #fff;\n      background-color: #0288d1; }\n  .main-container .shared {\n    margin-bottom: 2em; }\n    .main-container .shared .recap {\n      margin-top: 0.5em;\n      font-size: 0.875em;\n      color: rgba(0, 0, 0, 0.54); }\n  .main-container .part-container .part-header {\n    font-size: 1em;\n    margin-bottom: 1.5em; }\n  .main-container .missions-container {\n    margin-top: 2.5em;\n    margin-bottom: 2em; }\n    .main-container .missions-container .mission-container {\n      margin: 0.5em -0.5em;\n      padding: 0;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      border-radius: 2px;\n      background-color: #fafafa; }\n      .main-container .missions-container .mission-container .image-group {\n        -webkit-box-flex: 0;\n            -ms-flex: 0 0 auto;\n                flex: 0 0 auto;\n        padding: 0;\n        margin: 0;\n        height: 5.5em; }\n        .main-container .missions-container .mission-container .image-group .image, .main-container .missions-container .mission-container .image-group .no-image {\n          margin: 0;\n          padding: 0;\n          width: 5.5em;\n          height: 5.5em;\n          border-top-left-radius: 2px;\n          border-bottom-left-radius: 2px; }\n        .main-container .missions-container .mission-container .image-group .no-image {\n          margin: 0;\n          padding: 0;\n          width: 5.5em;\n          height: 5.5em;\n          border-top-left-radius: 2px;\n          border-bottom-left-radius: 2px;\n          display: table;\n          text-align: center; }\n          .main-container .missions-container .mission-container .image-group .no-image .icon {\n            display: table-cell;\n            vertical-align: middle;\n            color: #fff;\n            font-size: 2.5em; }\n      .main-container .missions-container .mission-container .description {\n        -webkit-box-flex: 1;\n            -ms-flex: 1 1 auto;\n                flex: 1 1 auto;\n        margin: 0;\n        padding: 0 1em;\n        line-height: 1.5em; }\n        .main-container .missions-container .mission-container .description .category {\n          font-size: 1em;\n          color: rgba(0, 0, 0, 0.87); }\n        .main-container .missions-container .mission-container .description .title {\n          font-size: 1em; }\n        .main-container .missions-container .mission-container .description .ecosystem {\n          font-size: 0.875em;\n          color: rgba(0, 0, 0, 0.54); }\n      .main-container .missions-container .mission-container .arrow {\n        -webkit-box-flex: 0;\n            -ms-flex: 0 0 auto;\n                flex: 0 0 auto;\n        font-size: 1.5em;\n        color: rgba(0, 0, 0, 0.57); }\n  .main-container .ecosystems-container .toggle-ecosystems-text {\n    float: right;\n    font-size: 0.875em;\n    color: rgba(0, 0, 0, 0.57); }\n  .main-container .ecosystems-container .ecosystem-container {\n    margin: 0.5em -0.5em;\n    padding: 0.5em;\n    background-color: #fafafa; }\n    .main-container .ecosystems-container .ecosystem-container .header {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      margin-bottom: 0.5em; }\n      .main-container .ecosystems-container .ecosystem-container .header .description {\n        -webkit-box-flex: 1;\n            -ms-flex: 1 1 auto;\n                flex: 1 1 auto; }\n        .main-container .ecosystems-container .ecosystem-container .header .description .title {\n          font-size: 1em;\n          line-height: 1.5em; }\n        .main-container .ecosystems-container .ecosystem-container .header .description .shot {\n          font-size: 0.875em;\n          color: rgba(0, 0, 0, 0.57); }\n      .main-container .ecosystems-container .ecosystem-container .header .arrow {\n        -webkit-box-flex: 0;\n            -ms-flex: 0 0 auto;\n                flex: 0 0 auto;\n        font-size: 1.5em;\n        color: rgba(0, 0, 0, 0.57); }\n    .main-container .ecosystems-container .ecosystem-container .ecosystem-elements {\n      overflow: hidden;\n      margin-top: 1.5em; }\n      .main-container .ecosystems-container .ecosystem-container .ecosystem-elements .ecosystem-element {\n        margin-bottom: 0.5em; }\n      .main-container .ecosystems-container .ecosystem-container .ecosystem-elements .ecosystem-element:not(:last-child) {\n        margin-right: 0.5em; }\n    .main-container .ecosystems-container .ecosystem-container .see-story {\n      margin-top: 1.5em;\n      margin-bottom: 1em;\n      text-align: center;\n      font-size: 0.875em; }\n  .main-container .web-container {\n    margin-bottom: 2em; }\n    .main-container .web-container .facebook-link {\n      color: #0288d1;\n      font-size: 1em; }\n      .main-container .web-container .facebook-link img {\n        height: 1.125em;\n        width: auto; }\n  .main-container .group-container {\n    margin-bottom: 2em;\n    margin-top: 1em; }\n    .main-container .group-container .description {\n      text-align: center;\n      font-size: 1.5em;\n      color: rgba(51, 51, 51, 0.57); }\n    .main-container .group-container .group-buttons {\n      text-align: center;\n      margin-top: 1.5em;\n      position: relative; }\n      .main-container .group-container .group-buttons .invite-button {\n        color: #fff;\n        background-color: #0288d1; }\n\n.add-button {\n  background-color: #feb00e; }\n  .add-button mdc-icon {\n    font-size: 1.5em; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/profiles/profile-view/profile-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_slasher_data_service__ = __webpack_require__("../../../../../src/app/services/slasher-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_globals_globals_service__ = __webpack_require__("../../../../../src/app/services/globals/globals.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_animations__ = __webpack_require__("../../../animations/esm5/animations.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProfileViewComponent = (function () {
    function ProfileViewComponent(slasherDataService, globals) {
        this.slasherDataService = slasherDataService;
        this.globals = globals;
        this.missions = [
            { role: 'Mission Freelance', tag: 'UX/UIDesign', category: 'Compétence', color: '#860034', imgSrc: '' },
            { role: 'Mission Freelance', tag: 'Start-up', category: 'Centre d\'intérêt', color: '#006c95', imgSrc: './assets/img/profile/startup.jpg' },
            { role: 'Mission Freelance', tag: 'ESS', category: 'Centre d\'intérêt', color: '#006c95', imgSrc: '' },
        ];
        this.ecosystem = [
            {
                title: this.globals.EcosystemCategory.SKILL.name,
                color: this.globals.EcosystemCategory.SKILL.color,
                nbGroupedElements: 10,
                nbShots: 3,
                state: 'closed',
                elements: [
                    { imgSrc: '', name: 'UX Design', fill: false, badge: 0 },
                    { imgSrc: './assets/img/profile/programmation.jpg', name: 'Programmation', fill: true, badge: 2 },
                    { imgSrc: '', name: 'Startups', fill: true, badge: 0 },
                    { imgSrc: '', name: 'Economy', fill: false, badge: 0 },
                    { imgSrc: '', name: 'Art', fill: false, badge: 0 },
                    { imgSrc: '', name: 'DIY', fill: false, badge: 0 },
                    { imgSrc: '', name: 'Communication', fill: false, badge: 0 },
                    { imgSrc: './assets/img/profile/audiovisuel.jpg', name: 'Audiovisuel', fill: true, badge: 2 }
                ]
            },
            {
                title: this.globals.EcosystemCategory.POWER.name,
                color: this.globals.EcosystemCategory.POWER.color,
                nbGroupedElements: 2,
                nbShots: 1,
                state: 'closed',
                elements: [
                    { imgSrc: '', name: 'Pouvoir 1', fill: false, badge: 0 },
                    { imgSrc: '', name: 'Pouvoir 2', fill: true, badge: 0 }
                ]
            },
            {
                title: this.globals.EcosystemCategory.INTEREST.name,
                color: this.globals.EcosystemCategory.INTEREST.color,
                nbGroupedElements: 1,
                nbShots: 1,
                state: 'closed',
                elements: [
                    { imgSrc: '', name: 'Musique', fill: false, badge: 0 },
                ]
            },
            {
                title: this.globals.EcosystemCategory.MOTIVATION.name,
                color: this.globals.EcosystemCategory.MOTIVATION.color,
                nbGroupedElements: 0,
                nbShots: 0,
                state: 'closed',
                elements: []
            },
            {
                title: this.globals.EcosystemCategory.VALUE.name,
                color: this.globals.EcosystemCategory.VALUE.color,
                nbGroupedElements: 2,
                nbShots: 1,
                state: 'closed',
                elements: [
                    { imgSrc: '', name: 'Partage', fill: true, badge: 0 },
                    { imgSrc: '', name: 'Confiance', fill: false, badge: 0 }
                ]
            },
            {
                title: this.globals.EcosystemCategory.SPOT.name,
                color: this.globals.EcosystemCategory.SPOT.color,
                nbGroupedElements: 3,
                nbShots: 1,
                state: 'closed',
                elements: [
                    { imgSrc: '', name: 'Spot 1', fill: false, badge: 0 },
                    { imgSrc: '', name: 'Spot 2', fill: true, badge: 2 }
                ]
            },
        ];
    }
    ProfileViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.slasherDataService.slasherData$.subscribe(function (data) {
            _this.slasherData = data;
            if (data) {
                _this.profileInformations = {
                    name: data.firstName + ' ' + data.lastName,
                    slashes: __WEBPACK_IMPORTED_MODULE_3_lodash__["join"](__WEBPACK_IMPORTED_MODULE_3_lodash__["compact"](data.slashes), ' / '),
                    location: data.location
                };
            }
        });
    };
    ProfileViewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'slashers-profile-view',
            template: __webpack_require__("../../../../../src/app/profiles/profile-view/profile-view.component.html"),
            styles: [__webpack_require__("../../../../../src/app/profiles/profile-view/profile-view.component.scss")],
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["k" /* trigger */])('shrinkOut', [
                    Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["h" /* state */])('opened', Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["i" /* style */])({ height: '*' })),
                    Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["j" /* transition */])('* => void', [
                        Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["i" /* style */])({ height: '*' }),
                        Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["e" /* animate */])('100ms ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["i" /* style */])({ height: 0 }))
                    ]),
                    Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["j" /* transition */])('void => *', [
                        Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["i" /* style */])({ height: '0' }),
                        Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["e" /* animate */])('100ms ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["i" /* style */])({ height: '*' }))
                    ])
                ]),
                Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["k" /* trigger */])('rotateEcosystemArrow', [
                    Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["h" /* state */])('opened', Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["i" /* style */])({ transform: 'rotate(-180deg)' })),
                    Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["h" /* state */])('closed', Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["i" /* style */])({ transform: 'rotate(0deg)' })),
                    Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["j" /* transition */])('opened <=> closed', Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["e" /* animate */])('100ms ease-in-out')),
                ])
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_slasher_data_service__["a" /* SlasherDataService */], __WEBPACK_IMPORTED_MODULE_2__services_globals_globals_service__["a" /* GlobalsService */]])
    ], ProfileViewComponent);
    return ProfileViewComponent;
}());



/***/ }),

/***/ "../../../../../src/app/profiles/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<slashers-profile-toolbar\n  title=\"Mon profil\"\n  [hasSearch]=\"true\"\n  [hasMore]=\"true\">\n</slashers-profile-toolbar>\n\n<slashers-profile-identity\n  [imageSrc]=\"slasherData.imageSrc\"\n  [avatarSrc]=\"slasherData.avatarSrc\"\n  [blur]=\"true\"\n  [informations]=\"profileInformations\"\n  [editable]=\"false\">\n</slashers-profile-identity>\n\n<div class=\"main-container\">\n\n  <div class=\"top-buttons\">\n    <button class=\"update-profile-button\" mdc-button [stroked]=\"true\" [routerLink]=\"['/profile-update']\">MODIFIER MON PROFIL</button>\n    <button class=\"messages-button\" mdc-button [raised]=\"true\">MESSAGES</button>\n  </div>\n\n  <div class=\"search-role-title\">\n    Je veux dénicher :\n  </div>\n\n  <slashers-search-role (addSearchRole)=\"addSearchRole($event)\"></slashers-search-role>\n\n  <slashers-profile-research-container [missions]=\"missions\"></slashers-profile-research-container>\n\n  <div class=\"divider\"></div>\n\n  <slashers-profile-ecosystem-container title=\"Mon écosystème :\" [ecosystem]=\"ecosystem\" [editable]=\"true\"></slashers-profile-ecosystem-container>\n\n  <div class=\"divider\"></div>\n\n  <div class=\"web-container\">\n    <div class=\"title-container\">Me retrouver sur le web :</div>\n    <div>\n      <a class=\"facebook-link\">\n        <img src=\"./assets/img/facebook-icon.png\" alt=\"facebook\"/>\n        facebook.com/fabricio-lavandier78\n      </a>\n    </div>\n    <div class=\"edit-links\">\n      <span [routerLink]=\"['/profile-edit-links']\">Editer mes liens</span>\n    </div>\n  </div>\n\n  <div class=\"divider\"></div>\n\n  <div class=\"group-container\">\n    <div class=\"title-container\">\n      Mes groupes:\n    </div>\n    <div class=\"group-informations\">\n      <div class=\"group-description\">\n        Aucun groupe...\n      </div>\n      <div>\n        <button class=\"search-group-button\" mdc-button [raised]=\"true\">RECHERCHER</button>\n      </div>\n    </div>\n  </div>\n\n</div>\n\n<div class=\"creation-group-container\">\n  <div class=\"text\">\n    <div class=\"title\">\n      Créer un groupe\n    </div>\n    <div class=\"subtitle\">\n      Idéal pour regrouper les stories des membres d’un projet, d’un événement, etc.\n    </div>\n  </div>\n  <div class=\"action\" mdc-ripple>\n    <div class=\"add-container\">\n      <mdc-icon class=\"add-icon\">add</mdc-icon>\n    </div>\n  </div>\n</div>\n\n<button class=\"add-button\" mdc-fab [mini]=\"false\" position=\"bottom-right\">\n  <mdc-icon>add</mdc-icon>\n</button>\n"

/***/ }),

/***/ "../../../../../src/app/profiles/profile/profile.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".divider {\n  height: 1px;\n  margin: 1em -1em;\n  background-color: rgba(0, 0, 0, 0.25); }\n\n.main-container {\n  margin-left: 0.5em;\n  margin-right: 0.5em; }\n  .main-container .title-container {\n    color: rgba(0, 0, 0, 0.87);\n    margin-bottom: 2em; }\n  .main-container .top-buttons {\n    margin-bottom: 1.5em;\n    margin-top: 0.875em; }\n    .main-container .top-buttons .update-profile-button {\n      color: rgba(0, 0, 0, 0.5);\n      border-color: rgba(0, 0, 0, 0.5);\n      font-size: 0.875em; }\n    .main-container .top-buttons .messages-button {\n      float: right;\n      color: #fff;\n      background-color: #0288d1; }\n  .main-container .search-role-title {\n    margin-bottom: 0.5em;\n    color: rgba(0, 0, 0, 0.87); }\n  .main-container .web-container {\n    margin-bottom: 2em;\n    margin-left: 0.5em;\n    margin-right: 0.5em; }\n    .main-container .web-container .facebook-link {\n      color: #0288d1;\n      font-size: 1em; }\n      .main-container .web-container .facebook-link img {\n        height: 1.125em;\n        width: auto;\n        margin-right: 1.5em; }\n    .main-container .web-container .edit-links {\n      text-align: center;\n      color: #0288d1;\n      margin-top: 2em; }\n  .main-container .group-container {\n    margin-left: 0.5em;\n    margin-right: 0.5em; }\n    .main-container .group-container .group-informations {\n      text-align: center; }\n      .main-container .group-container .group-informations .group-description {\n        color: rgba(51, 51, 51, 0.57);\n        font-size: 1.5em; }\n      .main-container .group-container .group-informations .search-group-button {\n        color: #fff;\n        background-color: #0288d1;\n        margin-top: 1em;\n        margin-bottom: 2em; }\n\n.creation-group-container {\n  padding: 1.5em 1em;\n  background-color: #fafafa;\n  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.32);\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  margin-bottom: 8em; }\n  .creation-group-container .text {\n    -webkit-box-flex: 1;\n        -ms-flex: 1 1 auto;\n            flex: 1 1 auto;\n    padding-right: 1em; }\n    .creation-group-container .text .title {\n      color: #333333;\n      font-size: 1.5em;\n      margin-bottom: 0.5em; }\n    .creation-group-container .text .subtitle {\n      color: #828282;\n      font-size: 0.875em;\n      line-height: 1.5em; }\n  .creation-group-container .action {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto; }\n    .creation-group-container .action .add-container {\n      background-color: #bdbdbd;\n      width: 7.5em;\n      height: 7.5em;\n      position: relative; }\n      .creation-group-container .action .add-container .add-icon {\n        position: absolute;\n        top: 50%;\n        left: 50%;\n        -webkit-transform: translate(-50%, -50%);\n                transform: translate(-50%, -50%);\n        color: #fff;\n        font-size: 4.25em; }\n\n.add-button {\n  background-color: #feb00e; }\n  .add-button mdc-icon {\n    font-size: 1.5em; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/profiles/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_globals_globals_service__ = __webpack_require__("../../../../../src/app/services/globals/globals.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_slasher_data_service__ = __webpack_require__("../../../../../src/app/services/slasher-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfileComponent = (function () {
    function ProfileComponent(globals, slasherDataService) {
        this.globals = globals;
        this.slasherDataService = slasherDataService;
        this.missions = [
            { role: 'Mission Freelance', tag: 'UX/UIDesign', category: 'Compétence', color: '#860034', imgSrc: '' },
            { role: 'Mission Freelance', tag: 'Start-up', category: 'Centre d\'intérêt', color: '#006c95', imgSrc: './assets/img/profile/startup.jpg' },
            { role: 'Mission Freelance', tag: 'ESS', category: 'Centre d\'intérêt', color: '#006c95', imgSrc: '' },
        ];
        this.ecosystem = [
            {
                title: this.globals.EcosystemCategory.SKILL.name,
                color: this.globals.EcosystemCategory.SKILL.color,
                nbGroupedElements: 10,
                nbShots: 3,
                state: 'closed',
                elements: [
                    { imgSrc: '', name: 'UX Design', fill: false, badge: 0 },
                    { imgSrc: './assets/img/profile/programmation.jpg', name: 'Programmation', fill: true, badge: 2 },
                    { imgSrc: '', name: 'Startups', fill: true, badge: 0 },
                    { imgSrc: '', name: 'Economy', fill: false, badge: 0 },
                    { imgSrc: '', name: 'Art', fill: false, badge: 0 },
                    { imgSrc: '', name: 'DIY', fill: false, badge: 0 },
                    { imgSrc: '', name: 'Communication', fill: false, badge: 0 },
                    { imgSrc: './assets/img/profile/audiovisuel.jpg', name: 'Audiovisuel', fill: true, badge: 2 }
                ]
            },
            {
                title: this.globals.EcosystemCategory.POWER.name,
                color: this.globals.EcosystemCategory.POWER.color,
                nbGroupedElements: 2,
                nbShots: 1,
                state: 'closed',
                elements: [
                    { imgSrc: '', name: 'Pouvoir 1', fill: false, badge: 0 },
                    { imgSrc: '', name: 'Pouvoir 2', fill: true, badge: 0 }
                ]
            },
            {
                title: this.globals.EcosystemCategory.INTEREST.name,
                color: this.globals.EcosystemCategory.INTEREST.color,
                nbGroupedElements: 1,
                nbShots: 1,
                state: 'closed',
                elements: [
                    { imgSrc: '', name: 'Musique', fill: false, badge: 0 },
                ]
            },
            {
                title: this.globals.EcosystemCategory.MOTIVATION.name,
                color: this.globals.EcosystemCategory.MOTIVATION.color,
                nbGroupedElements: 0,
                nbShots: 0,
                state: 'closed',
                elements: []
            },
            {
                title: this.globals.EcosystemCategory.VALUE.name,
                color: this.globals.EcosystemCategory.VALUE.color,
                nbGroupedElements: 2,
                nbShots: 1,
                state: 'closed',
                elements: [
                    { imgSrc: '', name: 'Partage', fill: true, badge: 0 },
                    { imgSrc: '', name: 'Confiance', fill: false, badge: 0 }
                ]
            },
            {
                title: this.globals.EcosystemCategory.SPOT.name,
                color: this.globals.EcosystemCategory.SPOT.color,
                nbGroupedElements: 3,
                nbShots: 1,
                state: 'closed',
                elements: [
                    { imgSrc: '', name: 'Spot 1', fill: false, badge: 0 },
                    { imgSrc: '', name: 'Spot 2', fill: true, badge: 2 }
                ]
            },
        ];
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.slasherDataService.slasherData$.subscribe(function (data) {
            _this.slasherData = data;
            if (data) {
                _this.profileInformations = {
                    name: data.firstName + ' ' + data.lastName,
                    slashes: __WEBPACK_IMPORTED_MODULE_3_lodash__["join"](__WEBPACK_IMPORTED_MODULE_3_lodash__["compact"](data.slashes), ' / '),
                    location: data.location
                };
            }
        });
    };
    ProfileComponent.prototype.addSearchRole = function (event) {
        var newSearchRole = {
            role: event.role,
            tag: event.domain || '',
            category: event.category || '',
            color: '',
            imgSrc: ''
        };
        var category = __WEBPACK_IMPORTED_MODULE_3_lodash__["filter"](this.globals.EcosystemCategory, function (x) {
            return x.name === event.category;
        });
        newSearchRole.color = category.length > 0 ? category[0].color : '#000';
        this.missions.push(newSearchRole);
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'slashers-profile',
            template: __webpack_require__("../../../../../src/app/profiles/profile/profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/profiles/profile/profile.component.scss")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_globals_globals_service__["a" /* GlobalsService */], __WEBPACK_IMPORTED_MODULE_2__services_slasher_data_service__["a" /* SlasherDataService */]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "../../../../../src/app/services/FacebookProvider/facebook.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FacebookService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_facebook__ = __webpack_require__("../../../../ngx-facebook/dist/esm/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FacebookService = (function () {
    function FacebookService(fb) {
        this.fb = fb;
        this.loginOptions = {
            enable_profile_selector: true,
            return_scopes: true,
            scope: 'public_profile,email'
        };
        var initParams = {
            appId: '1408787492562997',
            xfbml: true,
            version: 'v2.11'
        };
        fb.init(initParams);
    }
    FacebookService.prototype.login = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.fb.login(_this.loginOptions).then(function (response) {
                resolve(response);
            }).catch(reject);
        });
    };
    FacebookService.prototype.getData = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.fb.api('/me?fields=id,email,first_name,last_name,cover,picture').then(function (response) {
                resolve(response);
            }).catch(reject);
        });
    };
    FacebookService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ngx_facebook__["b" /* FacebookService */]])
    ], FacebookService);
    return FacebookService;
}());



/***/ }),

/***/ "../../../../../src/app/services/globals/globals.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var GlobalsService = (function () {
    function GlobalsService() {
        this.EcosystemCategory = {
            SKILL: { name: 'Compétences', color: '#860034' },
            POWER: { name: 'Super Pouvoirs', color: '#df3275' },
            INTEREST: { name: 'Centres d\'intérêts', color: '#006c95' },
            MOTIVATION: { name: 'Motivations', color: '#2c9cc7' },
            VALUE: { name: 'Valeurs', color: '#ff9439' },
            SPOT: { name: 'Spots', color: '#60b300' },
        };
    }
    GlobalsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], GlobalsService);
    return GlobalsService;
}());



/***/ }),

/***/ "../../../../../src/app/services/mock-search-domain.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MockSearchDomainService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/distinctUntilChanged.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MockSearchDomainService = (function () {
    function MockSearchDomainService() {
        this.data = [
            { name: 'Dessin', nbShots: 22912 },
            { name: 'Design', nbShots: 18345 },
            { name: 'Dessiner', nbShots: 17652 },
            { name: 'Dessinateur', nbShots: 13923 },
            { name: 'Dessinatrice', nbShots: 10689 },
            { name: 'Destructeur', nbShots: 9623 },
            { name: 'Devineur', nbShots: 1260 },
            { name: 'Devin', nbShots: 634 },
        ];
        this.data$ = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
    }
    MockSearchDomainService.prototype.getData = function (beg) {
        return __WEBPACK_IMPORTED_MODULE_6_lodash__["filter"](this.data, function (x) {
            return x.name.toLowerCase().startsWith(beg.toLowerCase());
        });
    };
    MockSearchDomainService.prototype.search = function (terms) {
        var _this = this;
        return terms
            .debounceTime(300)
            .distinctUntilChanged()
            .map(function (term) {
            return term ? _this.getData(term) : null;
            // return this.getData(term);
        });
    };
    MockSearchDomainService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], MockSearchDomainService);
    return MockSearchDomainService;
}());



/***/ }),

/***/ "../../../../../src/app/services/mock-slasher-data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MockSlasherDataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MockSlasherDataService = (function () {
    function MockSlasherDataService() {
        this.slasherData = {
            imageSrc: './assets/img/profile/fabricio.jpg',
            firstName: 'Fabricio',
            lastName: 'Lavandier',
            age: 32,
            city: 'Paris',
            country: 'France',
            slashes: [
                'Producteur',
                'Consultant'
            ],
            biography: 'Lorem ipsum dolor sit amet. Baigne dans la musique, s’éclabousse avec le VTT, et nage dans l’univers geek.',
            facebookLink: 'facebook.com/fabricio-lavandier78',
            linkedinLink: '',
            twitterLink: '',
            otherLinks: []
        };
    }
    MockSlasherDataService.prototype.getSlasherData = function () {
        return this.slasherData;
    };
    MockSlasherDataService.prototype.setSlasherDataService = function (data) {
        this.slasherData = data;
    };
    MockSlasherDataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], MockSlasherDataService);
    return MockSlasherDataService;
}());



/***/ }),

/***/ "../../../../../src/app/services/shared-data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedDataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var SharedDataService = (function () {
    function SharedDataService() {
    }
    SharedDataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], SharedDataService);
    return SharedDataService;
}());



/***/ }),

/***/ "../../../../../src/app/services/slasher-data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SlasherDataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SlasherDataService = (function () {
    function SlasherDataService(http) {
        this.http = http;
        this.slasherData = {
            imageSrc: '',
            cropperPosition: {},
            avatarSrc: '',
            firstName: '',
            lastName: '',
            age: undefined,
            location: '',
            slashes: []
            // biography: '',
            // facebookLink: '',
            // linkedinLink: '',
            // twitterLink: '',
            // otherLinks: []
        };
        this.slasherData$ = new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](this.slasherData);
        if (localStorage.getItem('slasherId')) {
            this.getSlasher();
            // this.update();
        }
    }
    SlasherDataService.prototype.getSlasher = function () {
        var _this = this;
        var body = {
            id: localStorage.getItem('slasherId')
        };
        return this.http
            .post('https://aurelcamp.fr/api/user/get.php', body).toPromise()
            .then(function (data) {
            data.result.slashes = data.result.slashes && JSON.parse(data.result.slashes);
            data.result.cropperPosition = data.result.cropperPosition && JSON.parse(data.result.cropperPosition);
            _this.slasherData = data.result;
            _this.slasherData$.next(data.result);
        });
    };
    SlasherDataService.prototype.signup = function (email, password) {
        var body = {
            email: email,
            password: password
        };
        return this.http
            .post('https://aurelcamp.fr/api/user/create.php', body).toPromise()
            .then(function (data) {
            if (data.statusCode == '201') {
                localStorage.setItem('slasherId', data.result.id);
            }
            return data;
        });
        // .then((data)=> {
        //   console.log(data);
        // })
        // See below - subscribe() is still necessary when using post().
        // .subscribe((message) => {
        //   console.log(message);
        // }, (error)=> {
        //   console.log(error);
        // });
    };
    SlasherDataService.prototype.connection = function (email, password) {
        var body = {
            email: email,
            password: password
        };
        return this.http
            .post('https://aurelcamp.fr/api/user/connection.php', body).toPromise()
            .then(function (data) {
            if (data.statusCode == '200') {
                localStorage.setItem('slasherId', data.result.id);
            }
            return data;
        });
    };
    SlasherDataService.prototype.update = function () {
        var body = __assign({ id: localStorage.getItem('slasherId') }, this.slasherData);
        return this.http
            .post('https://aurelcamp.fr/api/user/update.php', body).toPromise();
        // let body = {
        //   id: localStorage.getItem('slasherId'),
        //   slashes: ['Producteur', 'Designeur'];
        // }
        // return this.http
        // .post('http://les-combien.com/slashers/api/user/update.php', body)
        // .subscribe((message) => {
        //   console.log(message);
        // }, (error)=> {
        //   console.log(error);
        // });
    };
    SlasherDataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], SlasherDataService);
    return SlasherDataService;
}());



/***/ }),

/***/ "../../../../../src/app/story/1/1.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"back\">\n\t<slashers-full-cropped-image #fullCroopedImage [imageSrc]=\"imageSrc\" [cropperPosition]=\"cropperPosition\"></slashers-full-cropped-image>\n</div>\n<div id=\"front\" class=\"story-form\" (click)=\"onPageClick($event);\">\n\n\t<div class=\"top-div\">\n\n\t<p class=\"text-top\">Pas maintenant</p>\n\n\t<button mdc-button class=\"btn\" [routerLink]=\"['./']\" [raised]=\"true\" [disabled]=\"disablePublish\">PUBLIER</button>\t\n\n\t</div>\n\t\n\t\n\t<form class=\"formwidth\" id=\"form\" (ngSubmit)=\"onSubmit()\" #myForm=\"ngForm\" [formGroup]=\"story\">\n\t    <!--mat-form-field  hintLabel=\"Max 10 characters\">\n          <input matInput #firstname maxlength=\"10\" placeholder=\"First Name\" [(ngModel)]=\"testForm.firstname\" name=\"firstname\">\n        <mat-hint align=\"end\">{{firstname.value?.length || 0}}/10</mat-hint>\n        </mat-form-field >\n        \n        <mat-form-field id=\"description\"  dividerColor=\"primary\" formControlName=\"story.description\" name=\"Description\">\n            <div id=\"biodiv\" contenteditable=\"true\" style=\"width: 200px; height: 80px; border: 1px solid black;\" (keyup)=\"onKeyUp($event)\">\n                Here is some nice text\n            </div>\n        </mat-form-field-->\n        \n        <mdc-text-field id=\"titre\" formControlName=\"titre\" name=\"Titre\"\n          label=\"Moi, Sarah…\"\n          type=\"text\" \n          (keyup)=\"onKeytitre($event)\"\n            maxlength=\"50\">\n        </mdc-text-field>\n       <p id=\"counter\">{{titre_counter}}/50</p>\n\t\t\t\t<br>\n        <!--mat-form-field id=\"description\"  dividerColor=\"primary\"  name=\"Description\" -->\n            <!--textarea matInput formControlName=\"description\" placeholder=\"Ma biographie\" \n            (keyup)=\"onKeyUp($event)\" [(ngModel)]=\"str\" [ngModelOptions]=\"{standalone: true}\" rows=\"3\" ></textarea-->\n            <div id=\"description\" contenteditable=\"true\" dividerColor=\"primary\" matInput placeholder=\"Ma biographie\" \n                (click)=\"onClick($event)\">\n            </div>\n            <mdc-icon matSuffix class=\"micbtn\">mic</mdc-icon>\n          <!--/mat-form-field-->\n              \n\t </form>\n\t\t\n\t<div class=\"keyresults abs autotext autolist\" style=\"display: none;\">\n\t    <mdc-list id=\"autotextlist\">\n        <mdc-list-item *ngFor=\"let dkey of matchKeywords\" class=\"autotext_li\" (click)=\"selectKeyword($event, dkey)\">\n            <div class=\"key-name\" style=\"color: rgba(0, 0, 0, 0.87)\">{{dkey.name}}</div>\n            <div class=\"count-shot\">{{dkey.shots}} shots</div>                   \n        </mdc-list-item>\n    </mdc-list>\n\t</div>\n\t\n\t<div class=\"list2 abs autolist\" style=\"display: none;\">\n\t    <mdc-list id=\"autotextlist2\">\n        <mdc-list-item *ngFor=\"let keycat of categories\" class=\"autotext_li\" (click)=\"selectKeywordCat($event, keycat)\">\n      \n      <ul class=\"mdc-list mdc-list--two-line mdc-list--dense demo-list\">\n              <li class=\"mdc-list-item\" [style.color]=keycat.color>\n                <span class=\"mdc-list-item__text\">\n                  {{selectedKeyword.name}}\n                  <span class=\"mdc-list-item__secondary-text\">{{keycat.category}}</span>\n                </span>\n              </li>\n      </ul>\n        </mdc-list-item>\n\t  </mdc-list>  \n    \n\t</div>\n\t\t\n\t <!--form (ngSubmit)=\"onSubmit()\" id=\"form\" [formGroup]=\"story\">\n\n\t\t\n\t\t<mdc-text-field id=\"titre\" formControlName=\"titre\" name=\"Titre\"\n\t\t  label=\"Moi, Sarah…\"\n\t\t  type=\"text\" \n\t\t  (keyup)=\"onKeytitre($event)\"\n\t\t\tmaxlength=\"50\" \n\t\t  >\n\t\t</mdc-text-field>\n       <p id=\"counter\">{{titre_counter}}/50</p>\n        <br>\n\t\t<mat-form-field id=\"description\"  dividerColor=\"primary\" formControlName=\"story.description\" name=\"Description\" >\n\t\t\t\t<textarea matInput placeholder=\"Ma biographie\" (keyup)=\"onKeyUp($event)\" [(ngModel)]=\"str\" [ngModelOptions]=\"{standalone: true}\" rows=\"3\" ></textarea>\n\t\t\t\t<mdc-icon matSuffix class=\"micbtn\">mic</mdc-icon>\n\t\t\t  </mat-form-field>\t\n\t \n\t \n\t   \n\t </form-->\n\t\n\t\n\t<div class=\"content\">\n\t\t<p id=\"single-line\">À propos de vous :</p>\n\t\t<p id=\"text-2\">Mes liens</p>\n\t\t\n\n\n\t\t<p id=\"text-3\">Où vous retrouver sur le web</p>\n\n\t\t<div id=\"icon-down\" (click)=\"social()\">\n\t\t\t<mdc-icon *ngIf=\"socialshow\">keyboard_arrow_down</mdc-icon>\n\t\t\t<mdc-icon *ngIf=\"!socialshow\">keyboard_arrow_up</mdc-icon>\n\t\t</div>\n\t\t\n\t</div>\n\n\t<div class=\"content-2\" [hidden]=\"true\">\n\n\t\t<p id=\"text-4\">Dans votre écosystème :</p>\n\t\t<p id=\"text-5\">Vous évoquez ici :</p>\n\n\t</div>\n\t\n  <mat-chip-list [hidden]=\"true\">\n\t<div id=\"wrapper\" class=\"style-4\">\n    <div class=\"table\" >\n        <div class=\"tr\" >\n            <div class=\"td\">             \n\t\t      <mat-chip style=\"border-color: #860034;\"\n\t\t       [style.background-color] = \"chip_back\"\n\t\t\t [style.color] = \"chip_col\"\n\t\t\t (click)=\"showcard()\"\n\t\t      >\n\t\t  \tCompétences {{k}} \n\t\t\t</mat-chip>\n            </div> \n            <div class=\"td\">\n                 <mat-chip style=\"border-color: #df3275;\">Super Pouvoirs</mat-chip>\n            </div> \n            <div class=\"td\">\n                 <mat-chip style=\"border-color: #006c95;\">Centres d’intérêts</mat-chip>\n            </div> \n            <div class=\"td\">\n                 <mat-chip style=\"border-color: #2c9cc7\">Motivations</mat-chip>\n            </div> \n            <div class=\"td\">\n                <mat-chip style=\"border-color: #ff9439\">Valeurs</mat-chip> \n            </div> \n            <div class=\"td\">\n                <mat-chip style=\"border-color: #60b300\">Spots</mat-chip>\n            </div>           \n\t        </div>\n\t    </div>\n\t</div> \n   </mat-chip-list>\n\n\t<!-- TRIGGER ELEMENTS -->\n\t<div id=\"social\" [hidden]=\"socialshow\">\n\n\t\t<i class=\"fab fa-facebook-f fa-lg\">\n\t\t</i>\n\n\t\t<p class=\"social1\" >facebook.com/sarahaoki.03</p>\n\t\t\t<i class=\"fab fa-linkedin-in fa-lg\">\n\t\t\t</i>\n\n\t\t<button  class= \"social-btn social2\" mdc-button  [raised]=\"true\" >Ajouter mon compte Linkedin</button>\n\n\t\t<i class=\"fab fa-twitter fa-lg\">\n\t\t\t</i>\n\n\t\t<button  class= \"social-btn social3\" mdc-button [raised]=\"true\" >Ajouter mon compte Twitter</button>\n\t</div>\n\t\n\t<mdc-list id=\"results\" [hidden]=\"resultshow\" (click)=\"hideresults()\">\n\t\t<mdc-list-item>\n\t\t\t<div style=\"padding-right: 150px\" >#musique</div>\n\t\t\t<div class=\"count-shot\">22949 shots</div>\t\t\t\t\t\n\t\t</mdc-list-item>\n\t\t<mdc-list-item>\n\t\t\t<div style=\"padding-right: 170px\">#music</div>\n\t\t\t<div class=\"count-shot\">13532 shots</div>\n\t\t</mdc-list-item>\n\t\t<mdc-list-item>\n\t\t\t<div style=\"padding-right: 150px\">#musicien</div>\n\t\t\t<div class=\"count-shot\">9427 shots</div>\n\t\t</mdc-list-item>\n\t\t<mdc-list-item>\n\t\t\t<div style=\"padding-right: 80px\">#MusiqueClassique</div>\n\t\t\t<div class=\"count-shot\">8371 shots</div>\n\t\t</mdc-list-item>\n\t</mdc-list>\n\n\t<mdc-list id=\"results2\" [hidden]=\"resultshow2\" (click)=\"hideresults()\">\n\t\t<mdc-list-item>\n      \n      <ul class=\"mdc-list mdc-list--two-line mdc-list--dense demo-list\">\n              <li class=\"mdc-list-item\" style=\" color: #006c95;\">\n                <span class=\"mdc-list-item__text\" (click)=\"updateinput('musique')\">\n                  #musique\n                  <span class=\"mdc-list-item__secondary-text\">Centre d’interêts</span>\n                </span>\n              </li>\n      </ul>\n\t\t</mdc-list-item>\n\t\t<mdc-list-item>\n\t\t\t<!--<ul>\n\t\t\t\t<li style=\" color: #860034;\">#musique</li>\n\t\t\t\t<div class=\"count-shot2\">Compétence</div>\n\t\t\t</ul>-->\n      \n      <ul class=\"mdc-list mdc-list--two-line mdc-list--dense demo-list\">\n              <li class=\"mdc-list-item\" style=\" color: #860034;\">\n                <span class=\"mdc-list-item__text\" (click)=\"updateinput('musique')\">\n                  #musique\n                  <span class=\"mdc-list-item__secondary-text\">Compétence</span>\n                </span>\n              </li>\n      </ul>\n\t\t</mdc-list-item>\n\t\t<mdc-list-item>\n\t\t\t<!--<ul>\n\t\t\t\t<li style=\" color: #df3275;\">#musique</li>\n\t\t\t\t<div class=\"count-shot2\">Super pouvoir</div>\n\t\t\t</ul>-->\n      <ul class=\"mdc-list mdc-list--two-line mdc-list--dense demo-list\">\n              <li class=\"mdc-list-item\" style=\" color: #df3275;\">\n                <span class=\"mdc-list-item__text\" (click)=\"updateinput('musique')\">\n                  #musique\n                  <span class=\"mdc-list-item__secondary-text\">Super pouvoir</span>\n                </span>\n              </li>\n      </ul>\n\t\t</mdc-list-item>\n\t\t<mdc-list-item>\n\t\t<!--\t<ul>\n\t\t\t\t<li style=\" color: #2c9cc7;\">#musique</li>\n\t\t\t\t<div class=\"count-shot2\">Motivation</div>\n\t\t\t</ul>-->\n      \n      <ul class=\"mdc-list mdc-list--two-line mdc-list--dense demo-list\">\n              <li class=\"mdc-list-item\" style=\" color: #2c9cc7;\">\n                <span class=\"mdc-list-item__text\" (click)=\"updateinput('musique')\">\n                  #musique\n                  <span class=\"mdc-list-item__secondary-text\">Motivation</span>\n                </span>\n              </li>\n      </ul>\n\t\t</mdc-list-item>\n\t</mdc-list>\n\n\n<div [hidden]=\"card\">\n\t<mdc-card >\n  <mdc-card-primary >\n    <mdc-card-title><strong>Compétences</strong>  évoquées ici :  <mdc-icon (click)=\"showcard()\" id=\"clear\" class=\"Shape\">highlight_off</mdc-icon>\n    </mdc-card-title>\n  </mdc-card-primary>\n  <mdc-card-supporting-text>\n\t  <ul>\n\t\t  <li class=\"checkli\">\n\t\t\t   <mdc-form-field >\n\t\t\t\t<label>Musique</label>\n\t\t\t\t<div>\n\t\t\t\t\t\t\t<mdc-checkbox  [checked] = \"false\" [(ngModel)]=\"musiquecheckboxFlag\" \n\t\t\t\t\t(click)=\"checkboxclick()\">\n\t\t\t\t\t</mdc-checkbox>\n\t\t\t\t</div>\n\t\t</mdc-form-field>\n\t\t  </li>\n\t\t  <li class=\"checkli\">\n\t\t\t<mdc-form-field>\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<label>Composition</label>\n\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t<mdc-checkbox  [checked] = \"false\" [(ngModel)]=\"compositioncheckboxFlag\">\n\t\t\t\t\t\t\t</mdc-checkbox>\t\n\t\t\t\t\t\t\t</div>\t\t\t\t\t\n\t\t\t</mdc-form-field>\n\t\t  </li>\n\t\t <li class=\"checkli\">\n\t\t\t <mdc-form-field>\n\t\t\t\t<label>BeatMaking</label>\n\t\t\t\t<div>\n\t\t\t\t\t<mdc-checkbox  [checked] = \"false\" [(ngModel)]=\"beatmakingcheckboxFlag\">\n\t\t\t</mdc-checkbox>\n\t\t\t\t</div>\t\n\t\t</mdc-form-field>\n\t\t </li>\n\n\n\t\t\n\t\t\n\t\t\n\t  </ul>\n\t\t\n  </mdc-card-supporting-text>\n</mdc-card>\n</div>\n\t\n</div>\n\n   <div id=\"bottom-bar\" [hidden]=\"false\">\n\n   \t\t<button mdc-button class=\"btn-bottom\" [disabled]=\"true\">\n\t\t  <mdc-icon class=\"icon-bottom\">people</mdc-icon>\n\t\t</button>\n\t\t<button mdc-button class=\"btn-bottom\" [disabled]=\"true\">\n\t\t  <mdc-icon class=\"icon-bottom\">location_on</mdc-icon>\n\t\t</button>\n\t\t<button mdc-button class=\"btn-bottom\" [disabled]=\"true\">\n\t\t  \n\t\t  \t<div id=\"elipse\">\n\t\t  \t\t<mdc-icon class=\"icon-bottom\">\n\t\t  \t\thighlight\n\t\t  \t\t</mdc-icon>\n\t\t  \t</div>\n\t\t  \t\n\t\t</button>\n\t\t<button mdc-button class=\"btn-bottom\" [disabled]=\"true\">\n\t\t  <mdc-icon class=\"icon-bottom\"> <strong >@</strong> </mdc-icon>\n\t\t</button>\n\t\t<button mdc-button class=\"btn-bottom\" [disabled]=\"hashtag\">\n\t\t  <mdc-icon class=\"icon-bottom\"><strong>#</strong></mdc-icon>\n\t\t</button>\n\n   </div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/story/1/1.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "slashers-full-cropped-image {\n  width: 100vw;\n  height: 100vh;\n  -webkit-filter: blur(4px);\n  /* Safari 6.0 - 9.0 */\n  filter: blur(4px); }\n\ntextarea {\n  resize: none !important; }\n\n[contentEditable=true]:empty:before {\n  content: attr(placeholder);\n  color: grey; }\n\n[contentEditable=true]:empty:focus:before {\n  content: \"\"; }\n\n#description {\n  float: left;\n  min-height: 90px !important;\n  max-height: 90px !important;\n  overflow-y: scroll;\n  outline: none;\n  padding-top: 10px;\n  border-bottom: 1px solid grey;\n  display: block;\n  color: rgba(0, 0, 0, 0.87);\n  width: 93vw;\n  font-size: 16px; }\n\n#autotextlist2 ul li {\n  height: auto; }\n\n.autolist {\n  position: fixed;\n  width: auto !important;\n  display: inline-block;\n  background-color: #f6f6f6;\n  z-index: 9999;\n  height: 280px;\n  /*280px;40vh;*/\n  overflow-y: scroll; }\n\n.autolist .autotext_li {\n  width: 328px;\n  /*80vw;*/\n  height: 56px;\n  /*56px;15vh;*/ }\n\nul {\n  list-style-type: none; }\n\nul li {\n  /* display: block;*/ }\n\n/*\n.autotext .key-name{\n  padding-right: 150px;\n}*/\n.list2 ul {\n  /*border-bottom: 1px solid black !important;*/\n  padding: 5px 10px;\n  margin-top: 5px; }\n\nli {\n  list-style: none; }\n\nmdc-checkbox {\n  position: relative;\n  left: 30px; }\n\n#back {\n  position: fixed;\n  z-index: 0;\n  height: 100vh;\n  width: 100vw; }\n\n#front {\n  position: absolute;\n  z-index: 1;\n  top: 0px;\n  height: 100vh;\n  width: 100vw;\n  background-color: rgba(255, 255, 255, 0.85); }\n\n.top-div {\n  position: fixed;\n  top: 0;\n  z-index: 2;\n  margin: 0;\n  padding: 0; }\n\n.text-top {\n  padding-top: 25px;\n  padding-left: 23px;\n  size: 14px;\n  color: rgba(0, 0, 0, 0.54); }\n\n.btn {\n  width: 120px;\n  height: 36px;\n  position: fixed;\n  top: 34px;\n  right: 16px;\n  color: #ffffff;\n  letter-spacing: 1.5px; }\n\n#form {\n  position: fixed;\n  top: 94px;\n  left: 16px; }\n\n#titre {\n  width: 93vw;\n  height: 34px;\n  font-family: Roboto;\n  font-size: 22px;\n  color: rgba(0, 0, 0, 0.38); }\n\nmdc-textarea.label {\n  background-color: transparent; }\n\n#counter {\n  position: fixed;\n  top: 137px;\n  right: 3vw;\n  width: 38px;\n  height: 21px;\n  font-family: Roboto;\n  font-size: 12px;\n  color: rgba(0, 0, 0, 0.38); }\n\n.micbtn {\n  background-color: transparent;\n  color: #1565c0;\n  border: 0;\n  padding: 0;\n  text-decoration: none;\n  position: absolute;\n  /*top: 20vh;*/\n  margin-top: 70px;\n  right: 2vw; }\n\n.micbtn:hover {\n  cursor: pointer; }\n\n.content {\n  position: fixed;\n  top: 280px;\n  left: 16px; }\n\n#single-line {\n  font-size: 14px;\n  color: rgba(0, 0, 0, 0.57); }\n\n#text-2 {\n  font-size: 12px;\n  color: #000000;\n  position: fixed;\n  left: 19px; }\n\n#text-3 {\n  font-size: 12px;\n  color: rgba(0, 0, 0, 0.57);\n  position: fixed;\n  right: 55px; }\n\n#icon-down {\n  position: fixed;\n  right: 24px;\n  text-decoration: none;\n  margin-top: 6px; }\n\n#icon-down:hover {\n  cursor: pointer; }\n\n.content-2 {\n  position: fixed;\n  top: 420px;\n  left: 16px; }\n\n#text-4 {\n  font-size: 16px;\n  color: rgba(0, 0, 0, 0.87); }\n\n#text-5 {\n  font-size: 14px;\n  color: rgba(0, 0, 0, 0.54); }\n\nmat-chip-list {\n  position: fixed;\n  top: 500px;\n  left: 16px; }\n\nmat-chip {\n  background-color: transparent;\n  border: solid 1px;\n  font-size: 14px;\n  color: rgba(0, 0, 0, 0.54);\n  white-space: nowrap;\n  text-align: center; }\n\nmat-chip:hover {\n  cursor: pointer; }\n\n#wrapper {\n  width: 96vw;\n  height: 60px;\n  overflow-x: scroll;\n  white-space: no-wrap; }\n\n.table {\n  display: table; }\n\n.tr {\n  display: table-row; }\n\n.td {\n  display: table-cell;\n  padding: 5px 5px 5px 5px; }\n\n.style-4::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 0px transparent;\n  background-color: transparent; }\n\n.style-4::-webkit-scrollbar {\n  height: 4px;\n  width: 0px;\n  background-color: transparent; }\n\n.style-4::-webkit-scrollbar-thumb {\n  background-color: transparent;\n  border: 1px solid #E0E0E0; }\n\n#elipse {\n  width: 40px;\n  height: 40px;\n  border: solid 2px rgba(0, 0, 0, 0.54);\n  border-radius: 50%; }\n\n#bottom-bar {\n  position: fixed;\n  bottom: 0px;\n  right: 0px;\n  left: 0px;\n  height: 65px;\n  background-color: #E0E0E0;\n  z-index: 5;\n  text-align: center; }\n\n.icon-bottom {\n  font-size: 24px; }\n\n.btn-bottom {\n  text-align: center;\n  height: 65px;\n  width: auto; }\n\n#results {\n  position: fixed;\n  top: 190px;\n  width: 320px;\n  height: 280px;\n  left: 16px;\n  background-color: #f6f6f6; }\n\nmdc-list-item {\n  padding: 5px 20px 5px 20px; }\n\n.count-shot {\n  color: rgba(0, 0, 0, 0.37);\n  font-size: 14px;\n  position: absolute;\n  right: 4vw; }\n\n#results2 {\n  position: fixed;\n  top: 190px;\n  width: 320px;\n  height: 280px;\n  left: 16px;\n  background-color: #f6f6f6; }\n\n.count-shot2 {\n  color: rgba(0, 0, 0, 0.54);\n  font-size: 12px; }\n\n.demo-list {\n  font-size: 16px; }\n\nmdc-card {\n  position: fixed;\n  top: 220px;\n  left: 12px;\n  z-index: 10;\n  width: 296px;\n  border-radius: 3px;\n  background-color: #fafafa; }\n\nmdc-card-primary {\n  height: 50px;\n  background-color: #860034; }\n\nmdc-card-title {\n  color: #fff;\n  font-size: 16px; }\n\n#clear {\n  position: fixed;\n  margin-top: 5px;\n  margin-left: 40px; }\n\nmdc-form-field {\n  padding-top: 20px; }\n\n#social {\n  position: fixed;\n  top: 260px;\n  left: 23px; }\n\n.social-btn {\n  background-color: #0288d1;\n  color: #fff;\n  text-transform: capitalize;\n  left: 66px; }\n\n.social1 {\n  color: #0288d1;\n  font-size: 16px;\n  left: 66px;\n  position: fixed;\n  top: 355px; }\n\n.social2 {\n  position: fixed;\n  top: 416px;\n  width: 228px;\n  height: 36px; }\n\n.social3 {\n  position: fixed;\n  top: 474px;\n  width: 228px;\n  height: 36px; }\n\n.fa-facebook-f {\n  color: #0288d1;\n  top: 369px;\n  position: fixed; }\n\n.fa-linkedin-in {\n  color: #0288d1;\n  position: fixed;\n  top: 429px; }\n\n.fa-twitter {\n  color: #0288d1;\n  position: fixed;\n  top: 485px; }\n\n#clear:hover {\n  cursor: pointer; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/story/1/1.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Story1Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_slasher_data_service__ = __webpack_require__("../../../../../src/app/services/slasher-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// shobhit421.github.io : shobhit421: y114dff3

var Story1Component = (function () {
    function Story1Component(slasherDataService) {
        this.slasherDataService = slasherDataService;
        // testForm: any[];
        this.hideResults = true;
        this.keywordShow = false;
        this.keywordCatShow = false;
        this.autosearch = false;
        this.autosearchtext = '';
        this.keyHash = false;
        this.disablePublish = true;
        //  keysMenu: any = ['ArrowLeft'];
        this.testForm = { 'firstname': '', 'address': '' };
    }
    Story1Component.prototype.ngOnInit = function () {
        var _this = this;
        //  this.testForm = new FormControl("", [Validators.max(50), Validators.min(0)]);
        this.desckeywords = [{ 'name': '#musique', 'keyword': 'musique', 'shots': '22949' },
            { 'name': '#music', 'keyword': 'music', 'shots': '13532' },
            { 'name': '#musicien', 'keyword': 'musicien', 'shots': '9427' },
            { 'name': '#MusiqueClassique', 'keyword': 'MusiqueClassique', 'shots': '8371' }];
        this.categories = [{ 'category': 'Compétence', 'color': '#860034' },
            { 'category': 'Centre d’interêts', 'color': '#006c95' },
            { 'category': 'Super pouvoir', 'color': '#df3275' },
            { 'category': 'Motivation', 'color': '#2c9cc7' }];
        this.selectedKeyword = {};
        //this.str = "Let's make a fresh start";
        this.slasherDataService.slasherData$.subscribe(function (data) {
            _this.slasherData = data;
            if (_this.slasherData.imageSrc) {
                _this.imageSrc = _this.slasherData.imageSrc;
                _this.cropperPosition = _this.slasherData.cropperPosition;
            }
            else {
                _this.imageSrc = './assets/img/profile-img.jpg';
                _this.cropperPosition = {
                    tlPosition: { x: 0, y: 0 },
                    brPosition: { x: 1, y: 1 }
                };
            }
        });
        this.titre_counter = 0;
        this.textcount = true;
        this.disablePublish = true;
        this.resultshow = true;
        this.resultshow2 = true;
        this.card = true;
        this.socialshow = true;
        this.hashtag = true;
        this.chip_back = "transparent";
        this.chip_col = "rgba(0, 0, 0, 0.54)";
        this.mock = ["Musique", "Composition", "BeatMaking"];
        this.k = "";
        this.story = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormGroup */]({
            titre: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormControl */](),
            description: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormControl */]()
        });
        this.handleKeyEvents();
    };
    Story1Component.prototype.clearPlaceHolder = function () {
        if (!$("#description").text().trim().length) {
            $("#description").empty();
        }
    };
    Story1Component.prototype.handleKeyEvents = function () {
        var that = this;
        $(document).ready(function () {
            that.clearPlaceHolder();
            $('#description').on('focus', function () {
                $(window).scrollTop(10);
                var keyboard_shown = $(window).scrollTop() > 0;
                $(window).scrollTop(0);
                // $('#front').append(keyboard_shown?'keyboard ':'nokeyboard ');
            });
            /*
            if (/Mobi/i.test(navigator.userAgent)) {
                  $('html').css({"overflow":"auto"});
                  $('body').css({"height":"auto"});
                  $('body').css({"overflow":"auto"});
                  $('.scrollable').css({"position":"inherit"});
              }*/
            $("[contenteditable]").focusout(function () {
                var element = $(this);
                if (!element.text().trim().length) {
                    element.empty();
                }
            });
            $("#description").on('keydown', function (e) {
                if (!/(android)/i.test(navigator.userAgent)) {
                    if (e.key == "#") {
                        that.getSelectionCoords();
                        var tempEl = "<span id='keym' class='keymarker'>&nbsp;</span>";
                        that.pasteKeywordHtml(tempEl);
                        var contentEditable = document.getElementById('description');
                        var lastItem = document.getElementById('keym');
                        contentEditable.focus();
                        that.selectElementText(lastItem, window);
                    }
                }
            });
            $("#description").on('keyup', function (e) {
                var fieldData = $(this).text();
                if (fieldData && fieldData.trim().length > 0) {
                    that.disablePublish = false;
                }
                else {
                    that.disablePublish = true;
                }
                that.enableAutoSearch(e);
                if (that.autosearch) {
                    var inputKeyword = $(".keymarker").text();
                    var searchKeyword = inputKeyword;
                    if (!/(android)/i.test(navigator.userAgent)) {
                        searchKeyword = inputKeyword.substring(1, inputKeyword.length);
                    }
                    if (searchKeyword == "") {
                        $('.autotext').hide();
                        $('.list2').hide();
                        //   $(".keymarker").remove();
                    }
                    else {
                        $('.autotext').css('left', 'auto').css('right', 'auto').css('height', '280px').hide();
                        that.updateKeywordListByStr(searchKeyword);
                        if (that.matchKeywords && that.matchKeywords.length) {
                            var postCss = that.getAutoListPos();
                            $('.autotext').css('top', that.savedCords.y + 18).css(postCss.pos, postCss.x).show();
                            var autoListH = that.getAutoListHeight('keyword');
                            $(".autotext").css('height', autoListH).show();
                        }
                    }
                }
            });
        });
    };
    Story1Component.prototype.isAndroid = function () {
        // var ua = navigator.userAgent.toLowerCase();
        return /(android)/i.test(navigator.userAgent); //(ua.indexOf("android") > -1);
    };
    Story1Component.prototype.enableAutoSearch = function (e) {
        var el = document.getElementById("description");
        var inputChar;
        if (/(android)/i.test(navigator.userAgent)) {
            inputChar = this.getCharacterPrecedingCaret(el);
        }
        else {
            inputChar = e.key;
        }
        if (inputChar == '#') {
            this.autosearch = true;
            var cords = this.getSelectionCoords();
            this.savedCords = cords;
            if (/(android)/i.test(navigator.userAgent)) {
                this.insertMarkerForAndroid(inputChar);
            }
        }
        else if ((inputChar.trim().length == 0) && this.autosearch) {
            this.autosearch = false;
            $('.autotext').hide();
            this.keywordShow = false;
            this.removeTextMarker();
        }
    };
    Story1Component.prototype.removeTextMarker = function () {
        if ($(".keymarker") && $(".keymarker").length) {
            var inputKeyword = $(".keymarker").text();
            this.pasteKeywordHtml(inputKeyword);
        }
    };
    Story1Component.prototype.insertMarkerForAndroid = function (inputChar) {
        var contentEl = document.getElementById('description');
        var tempEl = "<span id='keym' class='keymarker'>" + inputChar + "</span>";
        this.pasteKeywordHtml(tempEl);
        var markerNode = document.getElementById('keym');
        contentEl.focus();
        this.selectElementText(markerNode, window);
        var htmlData = contentEl.innerHTML;
        htmlData = htmlData.replace(/#<span/gi, "<span");
        contentEl.innerHTML = htmlData;
        var range = document.createRange();
        var sel = window.getSelection();
        var i, matchNode;
        matchNode = document.getElementById("keym");
        range.setStart(matchNode, 1);
        range.collapse(true);
        sel.removeAllRanges();
        sel.addRange(range);
        // contentEl.focus();
        var cords = this.getSelectionCoords();
        this.savedCords = cords;
    };
    /*
    showCaretPos() {
  
      var el = document.getElementById("description");
          var range = window.getSelection().getRangeAt(0);
      var elTxt = el.innerText;
     
       var caretOffset = this.getCaretCharacterOffsetWithin(el);
     // var caretOffset = this.getCharacterOffsetWithin(range, el);
      // var caretOffset = this. this.getCaretPosition();
      var textBefore = elTxt.substring(0,  caretOffset);
      var textAfter  = elTxt.substring(caretOffset, elTxt.length);
      var lastChar = textBefore.substr(textBefore.length - 1);
     // caretPosEl.innerHTML = "Caret position: " + caretOffset;
     // console.log(caretPosEl);
     
     
     return lastChar;
  }
  getCharacterOffsetWithin(range, node) {
      var treeWalker = document.createTreeWalker(
          node,
          NodeFilter.SHOW_TEXT,
          function(node) {
              var nodeRange = document.createRange();
              nodeRange.selectNodeContents(node);
              return nodeRange.compareBoundaryPoints(Range.END_TO_END, range) < 1 ?
                  NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
          },
          false
      );
  
      var charCount = 0;
      while (treeWalker.nextNode()) {
          charCount += treeWalker.currentNode.length;
      }
      if (range.startContainer.nodeType == 3) {
          charCount += range.startOffset;
      }
      return charCount;
  }
    getCaretCharacterOffsetWithin(element) {
      var caretOffset = 0;
      var doc = element.ownerDocument || element.document;
      var win = doc.defaultView || doc.parentWindow;
      var sel;
      if (typeof win.getSelection != "undefined") {
          sel = win.getSelection();
          if (sel.rangeCount > 0) {
              var range = win.getSelection().getRangeAt(0);
              var preCaretRange = range.cloneRange();
              preCaretRange.selectNodeContents(element);
              preCaretRange.setEnd(range.endContainer, range.endOffset);
              caretOffset = preCaretRange.toString().length;
          }
      } else if ( (sel = doc.selection) && sel.type != "Control") {
          var textRange = sel.createRange();
          var preCaretTextRange = doc.body.createTextRange();
          preCaretTextRange.moveToElementText(element);
          preCaretTextRange.setEndPoint("EndToEnd", textRange);
          caretOffset = preCaretTextRange.text.length;
      }
    //  console.log(caretOffset);
    this.savedCaretPosition = caretOffset;
      return caretOffset;
    }*/
    Story1Component.prototype.onPageClick = function (e) {
        e.preventDefault();
        //console.log(e.currentTarget);
        if (e && e.target) {
            if (e.target['id'] && e.target['id'] !== 'description') {
                $('.autotext').hide();
                $('.list2').hide();
                // $("#keymarker").remove();
            }
        }
    };
    Story1Component.prototype.selectKeyword = function (e, keywordObj) {
        var _this = this;
        //console.log(keywordObj);
        e.preventDefault();
        this.selectedKeyword = keywordObj;
        setTimeout(function (that) {
            var cords = that.savedCords;
            $('.autotext').hide();
            var postCss = that.getAutoListPos();
            $('.list2').css('left', 'auto').css('right', 'auto').css('height', '280px');
            $('.list2').css('top', cords.y + 18).css(postCss.pos, postCss.x).show();
            var autoListH = _this.getAutoListHeight('keywordcat');
            $(".list2").css('height', autoListH).show();
            //   that.getKeywordCategories(that.selectedKeyword);
        }, 100, this);
    };
    Story1Component.prototype.getKeywordCategories = function (selectedKeyword) {
        var cords = this.savedCords;
        var i;
        for (i = 0; i < this.keywordCategories.length; i++) {
            var currKeywordCat = this.keywordCategories[i];
            if (currKeywordCat[this.selectedKeyword.name] && currKeywordCat[this.selectedKeyword.name].length) {
                this.selectedKeywordCategories = currKeywordCat[this.selectedKeyword.name];
                break;
            }
        }
        $('.list2').css('left', 'auto').css('right', 'auto').css('height', '280px');
        $('.list2').css('top', cords.y + 18).css('left', cords.x).show();
        var autoListH = this.getAutoListHeight('keywordcat');
        $(".list2").css('height', autoListH).show();
        this.keywordCatShow = true;
        this.selectedKeyword = selectedKeyword;
    };
    Story1Component.prototype.selectKeywordCat = function (e, keywordCat) {
        this.selectedCategory = keywordCat;
        var pastekeyword = this.selectedKeyword.keyword;
        pastekeyword.substring(1);
        var target = e.target || e.srcElement || e.currentTarget;
        // var currEl = '<span contenteditable="'+!/(android)/i.test(navigator.userAgent)+'" style="color:'+this.selectedCategory.color+'">' + pastekeyword + '</span>';
        var currEl = '<span contenteditable="false" style="color:' + this.selectedCategory.color + '">' + pastekeyword + '</span>';
        currEl = currEl + "&nbsp;";
        // currEl = "&nbsp;" + currEl + "&nbsp;";
        this.pasteKeywordHtml(currEl);
        this.autosearch = false;
    };
    Story1Component.prototype.onClick = function (e) {
        e.preventDefault();
        if (e.currentTarget.id === 'description') {
            $('.autotext').hide();
            $('.list2').hide();
            // $(".keymarker").remove();
        }
    };
    Story1Component.prototype.updateKeywordListByStr = function (inputStr) {
        this.matchKeywords = [];
        var i;
        inputStr = inputStr.trim();
        var re = new RegExp(inputStr, 'g');
        for (i = 0; i < this.desckeywords.length; i++) {
            var currKeyword = this.desckeywords[i].name;
            // matchKeywords
            if (currKeyword.match(re)) {
                this.matchKeywords.push(this.desckeywords[i]);
            }
        }
    };
    Story1Component.prototype.checkStr = function (inputtxt) {
        var letters = /^[0-9a-zA-Z]+$/;
        if (inputtxt.match(letters)) {
            return true;
        }
        return false;
    };
    Story1Component.prototype.getAutoListPos = function () {
        var atw = $('.autotext').width();
        var autoTxtWidth = atw;
        var caretXPos = parseInt(this.savedCords.x);
        var containerWidth = $('#description').width();
        var posCss = { 'pos': 'left', 'x': caretXPos };
        // containerWidth < (autoTxtWidth + caretXPos + 50)
        var compareWidth = containerWidth - caretXPos;
        /*
        if (containerWidth < autoTxtWidth+20) {
            posCss = {'pos':'left', 'x':15};
        } else if (containerWidth > autoTxtWidth+20) {
            let testw = caretXPos + autoTxtWidth;
            if (testw > containerWidth) {
                let rightpos = containerWidth - testw;
                rightpos = Math.abs(rightpos);
                posCss = {'pos':'right', 'x':rightpos};
            } else {
                posCss = {'pos':'left', 'x':caretXPos};
            }
          //  posCss = {'pos':'right', 'x':rightPos};
        }*/ // 415
        if (containerWidth < 415) {
            posCss = { 'pos': 'left', 'x': 15 };
        }
        else {
            var testw = caretXPos + autoTxtWidth;
            if (testw < containerWidth) {
                posCss = { 'pos': 'left', 'x': caretXPos };
            }
            else {
                var rightpos = screen.width - caretXPos;
                rightpos = Math.abs(rightpos);
                posCss = { 'pos': 'right', 'x': rightpos };
            }
        }
        /*
        if (containerWidth < 400 && (containerWidth <= autoTxtWidth+20)) {
          posCss = {'pos':'left', 'x':15};
        } else if (compareWidth <= (autoTxtWidth+10)) {
          posCss = {'pos':'right', 'x':compareWidth};
      }*/
        return posCss;
    };
    Story1Component.prototype.getAutoListHeight = function (type) {
        var screenHeight = window.screen.availHeight;
        var pageHeight = window.innerHeight;
        if (type == 'keyword') {
            var autoListTopPos = $(".autotext").position().top;
            var autoListH = $(".autotext").height();
        }
        else if (type == 'keywordcat') {
            var autoListTopPos = $(".list2").position().top;
            var autoListH = $(".list2").height();
        }
        var bottomH = $('#bottom-bar').height();
        var autoListRemainH = pageHeight - autoListTopPos - bottomH - 5;
        if (autoListRemainH > autoListH) {
            autoListRemainH = autoListH - 20; //+'px';
        }
        else {
            autoListRemainH = autoListRemainH; //+'px';
        }
        return autoListRemainH;
    };
    Story1Component.prototype.getCharacterPrecedingCaret = function (containerEl) {
        var precedingChar = "", sel, range, precedingRange;
        if (window.getSelection) {
            sel = window.getSelection();
            if (sel.rangeCount > 0) {
                range = sel.getRangeAt(0).cloneRange();
                range.collapse(true);
                range.setStart(containerEl, 0);
                precedingChar = range.toString().slice(-1);
            }
        }
        else if ((sel = document['selection']) && sel.type != "Control") {
            range = sel.createRange();
            precedingRange = range.duplicate();
            precedingRange.moveToElementText(containerEl);
            precedingRange.setEndPoint("EndToStart", range);
            precedingChar = precedingRange.text.slice(-1);
        }
        return precedingChar;
    };
    Story1Component.prototype.pasteKeywordHtml = function (keyhtml) {
        var editor = document.getElementById("description");
        var range = this.saveRange;
        var sel = this.savedsel;
        range.deleteContents();
        $(".keymarker").remove();
        // Range.createContextualFragment() would be useful here but is
        // non-standard and not supported in all browsers (IE9, for one)
        var el = document.createElement("div");
        el.innerHTML = keyhtml;
        var frag = document.createDocumentFragment(), node, lastNode;
        while ((node = el.firstChild)) {
            lastNode = frag.appendChild(node);
        }
        range.insertNode(frag);
        // Preserve the selection
        if (lastNode) {
            range = range.cloneRange();
            range.setStartAfter(lastNode);
            range.collapse(true);
            sel.removeAllRanges();
            sel.addRange(range);
        }
        $('.autotext').hide();
        $('.list2').hide();
        this.keywordShow = false;
        this.keywordCatShow = false;
        editor.normalize();
        return false;
    };
    Story1Component.prototype.getSelectionCoords = function () {
        var sel = document['selection'], range, rect;
        this.savedsel = sel;
        var x = 0, y = 0;
        if (sel) {
            if (sel.type != "Control") {
                range = sel.createRange();
                range.collapse(true);
                this.saveRange = range;
                x = range.boundingLeft;
                y = range.boundingTop;
            }
        }
        else if (window.getSelection) {
            sel = window.getSelection();
            this.savedsel = sel;
            if (sel.rangeCount) {
                range = sel.getRangeAt(0).cloneRange();
                this.saveRange = range;
                if (range.getClientRects) {
                    range.collapse(true);
                    if (range.getClientRects().length > 0) {
                        rect = range.getClientRects()[0];
                        x = rect.left;
                        y = rect.top;
                    }
                }
                // Fall back to inserting a temporary element
                if (x == 0 && y == 0) {
                    var span = document.createElement("span");
                    if (span.getClientRects) {
                        // Ensure span has dimensions and position by
                        // adding a zero-width space character
                        span.appendChild(document.createTextNode("\u200b"));
                        range.insertNode(span);
                        rect = span.getClientRects()[0];
                        x = rect.left;
                        y = rect.top;
                        var spanParent = span.parentNode;
                        spanParent.removeChild(span);
                        // Glue any broken text nodes back together
                        spanParent.normalize();
                    }
                }
            }
        }
        return { x: x, y: y };
    };
    Story1Component.prototype.selectElementText = function (el, win) {
        win = win || window;
        var doc = win.document, sel, range;
        if (win.getSelection && doc.createRange) {
            range = doc.createRange();
            range.selectNodeContents(el);
            range.collapse(false);
            sel = win.getSelection();
            sel.removeAllRanges();
            sel.addRange(range);
        }
        else if (doc.body.createTextRange) {
            range = doc.body.createTextRange();
            range.moveToElementText(el);
            range.select();
        }
    };
    /*
    getWordPrecedingCaret(containerEl) {
      var preceding = "",
          sel,
          range,
          precedingRange;
      if (window.getSelection) {
          sel = window.getSelection();
          if (sel.rangeCount > 0) {
              range = sel.getRangeAt(0).cloneRange();
              range.collapse(true);
              range.setStart(containerEl, 0);
              preceding = range.toString();
          }
      } else if ((sel = document['selection']) && sel.type != "Control") {
          range = sel.createRange();
          precedingRange = range.duplicate();
          precedingRange.moveToElementText(containerEl);
          precedingRange.setEndPoint("EndToStart", range);
          preceding = precedingRange.text;
      }
    
      var words = range.toString().trim().split(' '),
          lastWord = words[words.length - 1];
          
      if (lastWord) {
          var resultValue = ''; // this value is coming from some other function
          if (resultValue == lastWord) {
              console.log('do nothing: ' + lastWord);
              // do nothing
          } else {
              console.log('replace word ' + lastWord);
              
              // Find word start and end
              var wordStart = range.toString().lastIndexOf(lastWord);
              var wordEnd = wordStart + lastWord.length;
              console.log("pos: (" + wordStart + ", " + wordEnd + ")");
                             
              range.setStart(containerEl.firstChild, wordStart);
              range.setEnd(containerEl.firstChild, wordEnd);
              range.deleteContents();
              range.insertNode(document.createTextNode(resultValue));
              // delete That specific word and replace if with resultValue
    
              // Merge multiple text nodes
              containerEl.normalize();
          }
          return lastWord;
      }
    }*/
    Story1Component.prototype.onSubmit = function () {
    };
    Story1Component.prototype.onKeytitre = function (e) {
        this.titre_counter = e.target.value.length;
    };
    /*
    
      onKey(e: any) {
        //e.target.value = e.target.value.trim()
        //console.log(e.target.value);
        //console.log(e.target.value.trim().slice(-1));
        if (e.target.value.trim().slice(-1) == "#") {
          this.resultshow = false;
        }
        if (!e.target.value.includes("#")) {
          this.resultshow = true;
          this.resultshow2 = true;
        }
        if (e.target.value == "") {
          this.resultshow = true;
        }
    
        if (e.target.value.length >= 1) {
          this.textcount = false;
        }
        else {
          this.textcount = true;
        }
    
        var tag = e.target.value.trim().split("#").pop();
       // console.log(tag);
    
        if (tag == "Musique" || tag == "musique") {
          console.log("I am in true");
          this.resultshow = true;
          this.resultshow2 = false;
          this.hashtag = false;
          /*this.chip_back = "#860034";
          this.chip_col = "#fff";
          if(this.k == ""){
           this.k = 0;
          }
          if(this.k < 1){
           this.k++;
          }//
        } else {
          //console.log("I am in false");
        }
    
      }
      */
    Story1Component.prototype.hideresults = function () {
        this.resultshow = true;
        this.resultshow2 = true;
    };
    Story1Component.prototype.showcard = function () {
        if (this.card) {
            this.card = false;
        }
        else {
            this.card = true;
        }
    };
    Story1Component.prototype.social = function () {
        if (this.socialshow) {
            this.socialshow = false;
        }
        else {
            this.socialshow = true;
        }
    };
    Story1Component.prototype.uiclick = function () {
        this.resultshow = true;
        this.resultshow2 = true;
    };
    Story1Component.prototype.updateinput = function (strval) {
        console.log(strval);
        this.newstr = "#" + strval;
        console.log("I am here now " + strval);
        ///this.str = "<span style=' color: #860034;'>"+this.str+"</span>";
        //this.str = "you have done it";
        console.log(this.str);
        this.str = this.str.replace(this.newstr, strval);
        this.musiquecheckboxFlag = true;
        this.chip_back = "#860034";
        this.chip_col = "#fff";
        if (this.k == "") {
            this.k = 0;
        }
        if (this.k < 1) {
            this.k++;
        }
    };
    Story1Component.prototype.checkboxclick = function () {
        if (this.musiquecheckboxFlag == false) {
            this.chip_back = "transparent";
            this.chip_col = "rgba(0, 0, 0, 0.54)";
            this.k = "";
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fullCroopedImage'),
        __metadata("design:type", Object)
    ], Story1Component.prototype, "fullCroopedImage", void 0);
    Story1Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'slashers-story-home',
            template: __webpack_require__("../../../../../src/app/story/1/1.component.html"),
            styles: [__webpack_require__("../../../../../src/app/story/1/1.component.scss")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_slasher_data_service__["a" /* SlasherDataService */]])
    ], Story1Component);
    return Story1Component;
}());



/***/ }),

/***/ "../../../../../src/app/story/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<slashers-full-cropped-image #fullCroopedImage [imageSrc]=\"imageSrc\" [cropperPosition]=\"cropperPosition\"></slashers-full-cropped-image>\n\n<div class=\"top-div\">\n<p class=\"text-top\">Pas maintenant</p>\n<button mdc-button class=\"btn\" [routerLink]=\"['./']\" [raised]=\"true\" >Suivant</button>\t\n</div>\n\n\n<div class=\"big-circle-container\">\n  <div class=\"big-circle\" [@checkClicked]=\"checkClicked\"></div>\n</div>\n\n<div class=\"main-text\" id=\"heading-text\" [style.display]=\"!checkClicked ? 'block' : 'none'\">\n\t<p>Rien de mieux qu’une <br> Story pour se présenter !</p>\n</div>\n\n<div class=\"check-button-circle\"></div>\n<button class=\"check-button\" mdc-fab [mini]=\"false\" position=\"bottom-right\" (click)=\"btnclick()\">\n  <mdc-icon>check</mdc-icon>\n</button>\n"

/***/ }),

/***/ "../../../../../src/app/story/home/home.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "slashers-full-cropped-image {\n  width: 100vw;\n  height: 100vh; }\n\n.top-div {\n  position: fixed;\n  top: 2%;\n  z-index: 2;\n  margin: 0;\n  padding: 0; }\n\n.text-top {\n  position: fixed;\n  top: 25px;\n  left: 23px;\n  size: 14px;\n  color: rgba(0, 0, 0, 0.54); }\n\n.btn {\n  width: 120px;\n  height: 36px;\n  background-color: rgba(0, 0, 0, 0.3);\n  position: fixed;\n  top: 34px;\n  right: 16px;\n  color: #ffffff;\n  text-transform: capitalize; }\n\n.main-text {\n  position: absolute;\n  width: 268px;\n  height: 75px;\n  font-size: 22px;\n  color: #ffffff;\n  z-index: 2;\n  top: 350px;\n  left: 54px; }\n\n.big-circle-container {\n  position: fixed;\n  bottom: 0;\n  right: 0;\n  width: 100vw;\n  height: 100vw;\n  overflow: hidden;\n  bottom: 0;\n  right: 0; }\n\n.big-circle {\n  width: 200vw;\n  height: 200vw;\n  background-color: yellow;\n  border-radius: 10000px;\n  margin-left: -2vw;\n  background-color: #1565c0;\n  background-image: linear-gradient(to top, rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.06) 20%, rgba(255, 255, 255, 0)); }\n\n.check-button-circle {\n  z-index: 1;\n  width: 88px;\n  height: 88px;\n  position: fixed;\n  bottom: 0;\n  right: 0;\n  border-radius: 50%;\n  background-color: #fff; }\n\n.check-button {\n  z-index: 2;\n  background-color: #feb00e; }\n\n@media (max-width: 420px) {\n  #heading-text {\n    margin-top: 120px;\n    margin-left: 30px; } }\n\n@media (max-width: 375px) {\n  #heading-text {\n    margin-top: 200px;\n    margin-left: 30px; } }\n\n@media (max-width: 360px) {\n  #heading-text {\n    margin-top: 40px;\n    margin-left: 20px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/story/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoryhomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_slasher_data_service__ = __webpack_require__("../../../../../src/app/services/slasher-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_animations__ = __webpack_require__("../../../animations/esm5/animations.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StoryhomeComponent = (function () {
    function StoryhomeComponent(slasherDataService) {
        this.slasherDataService = slasherDataService;
        // imageSrc = './assets/img/slasher.jpg';
        this.checkClicked = false;
    }
    StoryhomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.slasherDataService.slasherData$.subscribe(function (data) {
            _this.slasherData = data;
            if (_this.slasherData.imageSrc) {
                _this.imageSrc = _this.slasherData.imageSrc;
                _this.cropperPosition = _this.slasherData.cropperPosition;
            }
            else {
                _this.imageSrc = './assets/img/profile-img.jpg';
                _this.cropperPosition = {
                    tlPosition: { x: 0, y: 0 },
                    brPosition: { x: 1, y: 1 }
                };
            }
        });
    };
    StoryhomeComponent.prototype.btnclick = function () {
        if (this.checkClicked) {
            this.checkClicked = false;
        }
        else {
            this.checkClicked = true;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fullCroopedImage'),
        __metadata("design:type", Object)
    ], StoryhomeComponent.prototype, "fullCroopedImage", void 0);
    StoryhomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'slashers-story-home',
            template: __webpack_require__("../../../../../src/app/story/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/story/home/home.component.scss")],
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["k" /* trigger */])('checkClicked', [
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* state */])('true', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* style */])({ transform: 'scale(0)', marginLeft: '-44px', marginTop: '-44px' })),
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["j" /* transition */])('0 => 1', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["e" /* animate */])('200ms')),
                ])
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_slasher_data_service__["a" /* SlasherDataService */]])
    ], StoryhomeComponent);
    return StoryhomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/take-avatar/take-avatar.component.html":
/***/ (function(module, exports) {

module.exports = "<slashers-toolbar title=\"Votre photo\" style=\"flex:0 0 auto;\"></slashers-toolbar>\n\n<div style=\"flex: 1 1 0\">\n  <slashers-picture-display style=\"flex: 1 1 0;min-width:0;min-height:0;\" [src]=\"slasherData.imageSrc\" (onSetImageData)=\"onSetImageData($event)\"></slashers-picture-display>\n</div>\n\n<slashers-progress style=\"flex:0 0 auto;\" precedent=\"take-picture\" progress=\"33\" (next)=\"goNext()\" [nextEnabled]=\"true\"></slashers-progress>\n"

/***/ }),

/***/ "../../../../../src/app/take-avatar/take-avatar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  background-color: rgba(51, 51, 51, 0.9);\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  height: 100vh;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/take-avatar/take-avatar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TakeAvatarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_slasher_data_service__ = __webpack_require__("../../../../../src/app/services/slasher-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TakeAvatarComponent = (function () {
    function TakeAvatarComponent(slasherDataService, router) {
        this.slasherDataService = slasherDataService;
        this.router = router;
    }
    TakeAvatarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.slasherDataService.slasherData$.subscribe(function (data) {
            _this.slasherData = data;
        });
    };
    TakeAvatarComponent.prototype.onSetImageData = function (event) {
        // this.slasherDataService.slasherData.avatarSrc = $event;
        this.slasherDataService.slasherData.avatarSrc = event.cropperSrc;
        this.slasherDataService.slasherData.cropperPosition = event.cropperPosition;
        // console.log(event);
    };
    TakeAvatarComponent.prototype.goNext = function () {
        var _this = this;
        this.slasherDataService.update()
            .then(function (data) {
            _this.router.navigate(['/welcome']);
        }, function (error) {
            console.log(error);
        });
    };
    TakeAvatarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'slashers-take-avatar',
            template: __webpack_require__("../../../../../src/app/take-avatar/take-avatar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/take-avatar/take-avatar.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_slasher_data_service__["a" /* SlasherDataService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], TakeAvatarComponent);
    return TakeAvatarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/take-picture/take-picture.component.html":
/***/ (function(module, exports) {

module.exports = "<slashers-toolbar title=\"Votre photo\"></slashers-toolbar>\n\n<slashers-choose-picture *ngIf=\"!showCamera\" (openCamera)=\"openCamera()\" (openFile)=\"openFile()\"></slashers-choose-picture>\n\n<div *ngIf=\"showCamera\" class=\"camera-container\">\n  <slashers-camera (onSetImageData)=\"onSetImageData($event)\"></slashers-camera>\n</div>\n\n<input #inputFile style=\"position:absolute;visibility:hidden;\" type=\"file\" accept=\"image/*\" (change)=\"imagePicked($event)\">\n<slashers-progress precedent=\"presentation\" progress=\"33\" (next)=\"goNext()\" [nextEnabled]=\"true\"></slashers-progress>\n\n<canvas #canvasRendering style=\"visibility:hidden;display:none;\"></canvas>\n"

/***/ }),

/***/ "../../../../../src/app/take-picture/take-picture.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  background-color: rgba(51, 51, 51, 0.8);\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  height: 100vh;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n  :host slashers-choose-picture {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    margin-left: 0.5em;\n    margin-right: 0.5em; }\n  :host .camera-container {\n    -webkit-box-flex: 1;\n        -ms-flex: 1 1 0px;\n            flex: 1 1 0; }\n  :host slashers-toolbar {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto; }\n  :host slashers-progress {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/take-picture/take-picture.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TakePictureComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_slasher_data_service__ = __webpack_require__("../../../../../src/app/services/slasher-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TakePictureComponent = (function () {
    function TakePictureComponent(slasherDataService, router) {
        this.slasherDataService = slasherDataService;
        this.router = router;
        this.showCamera = false;
    }
    TakePictureComponent.prototype.openCamera = function () {
        this.showCamera = true;
    };
    TakePictureComponent.prototype.openFile = function () {
        this.inputFile.nativeElement.click();
    };
    TakePictureComponent.prototype.onSetImageData = function (data) {
        this.slasherDataService.slasherData.imageSrc = data;
    };
    TakePictureComponent.prototype.imagePicked = function (fileInput) {
        var _this = this;
        var reader = new FileReader();
        reader.onload = function (e) {
            // this.slasherDataService.slasherData.imageSrc = e.target.result;
            // this.router.navigate(['/take-avatar']);
            var image = new Image();
            image.src = e.target.result;
            image.addEventListener('load', function () {
                var context = _this.canvasRendering.nativeElement.getContext('2d');
                _this.canvasRendering.nativeElement.width = image.width;
                _this.canvasRendering.nativeElement.height = image.height;
                context.drawImage(image, 0, 0, _this.canvasRendering.nativeElement.width, _this.canvasRendering.nativeElement.height);
                var imageUrl = _this.canvasRendering.nativeElement.toDataURL();
                _this.slasherDataService.slasherData.imageSrc = imageUrl;
                _this.router.navigate(['/take-avatar']);
            });
        };
        reader.readAsDataURL(fileInput.target.files[0]);
    };
    TakePictureComponent.prototype.goNext = function () {
        this.slasherDataService.update();
        if (!this.slasherDataService.slasherData.imageSrc) {
            this.router.navigate(['/welcome']);
        }
        else {
            this.router.navigate(['/take-avatar']);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('inputFile'),
        __metadata("design:type", Object)
    ], TakePictureComponent.prototype, "inputFile", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('canvasRendering'),
        __metadata("design:type", Object)
    ], TakePictureComponent.prototype, "canvasRendering", void 0);
    TakePictureComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'slashers-take-picture',
            template: __webpack_require__("../../../../../src/app/take-picture/take-picture.component.html"),
            styles: [__webpack_require__("../../../../../src/app/take-picture/take-picture.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_slasher_data_service__["a" /* SlasherDataService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], TakePictureComponent);
    return TakePictureComponent;
}());



/***/ }),

/***/ "../../../../../src/app/welcome/welcome.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"container\"> -->\n    <div class=\"wrapper\">\n      <div [@editSlashes]=\"!editSlashes\" style=\"overflow:hidden\">\n        <div class=\"headline\"> Bienvenue {{slasherData.firstName}} </div>\n        <div class=\"avatar-container\">\n          <img *ngIf=\"slasherData.avatarSrc\" class=\"avatar-img\" [src]=\"slasherData.avatarSrc\" alt=\"image de l'avatar\" />\n          <img *ngIf=\"!slasherData.avatarSrc\" class=\"avatar-img\" src=\"./assets/img/avatar-default.png\" alt=\"image de l'avatar\" />\n        </div>\n      </div>\n\n      <div *ngIf=\"!editSlashes\" class=\"headline2\">Tous les Slashers ont... leurs slashs !</div>\n      <div *ngIf=\"editSlashes\" class=\"headline2 upddate-text\">Vous pourrez modifier à tous moments ;)</div>\n\n      <!-- <div >\n        Vous pourrez modifier à tous moments ;)\n      </div> -->\n      <div *ngIf=\"!editSlashes\" class=\"other-profile-extracts-wrapper\">\n        <div class=\"other-profile-extracts-container\" [@slideProfileExtract]=\"slideProfileExtractState\" (@slideProfileExtract.done)=\"slideProfileExtractAnimationDone($event)\">\n\n          <slashers-profile-extract\n            [imageSrc]=\"otherProfileExtracts[indexProfileExtractsData].imageSrc\" [title]=\"otherProfileExtracts[indexProfileExtractsData].title\" [subtitle]=\"otherProfileExtracts[indexProfileExtractsData].subtitle\">\n          </slashers-profile-extract>\n\n          <slashers-profile-extract\n            [imageSrc]=\"otherProfileExtracts[indexProfileExtractsData+1].imageSrc\" [title]=\"otherProfileExtracts[indexProfileExtractsData+1].title\" [subtitle]=\"otherProfileExtracts[indexProfileExtractsData+1].subtitle\">\n          </slashers-profile-extract>\n\n        </div>\n      </div>\n\n      <div class=\"slasher-profile-extract\" *ngIf=\"editSlashes\">\n        <slashers-profile-extract\n          [imageSrc]=\"this.slasherData.avatarSrc\" [title]=\"getSlasherProfileExtractName()\" [subtitle]=\"getSlasherProfileExtractSlashes()\">\n        </slashers-profile-extract>\n      </div>\n\n\n      <div class=\"headline3\"> {{slasherData.firstName}}, vous êtes : </div>\n\n\n      <!-- <form #form=\"ngForm\" class=\"slashes-form\">\n        <mdc-text-field label=\"Un.e\" type=\"text\" name=\"slashe0\" [(ngModel)]=\"slashes[0]\" [required]=\"true\" [fullwidth]=\"true\"></mdc-text-field>\n        <p mdc-text-field-helper-text [validation]=\"true\" [persistent]=\"false \">\n          Choisissez un slash\n        </p>\n        <p mdc-text-field-helper-text class=\"text-helper first-slash-helper\" [validation]=\"false\" [persistent]=\"true \">Activité\n            principale</p>\n        <mdc-text-field label=\"Et aussi un.e\" type=\"text\" name=\"slashe1\" [fullwidth]=\"true\" [(ngModel)]=\"slashes[1]\"></mdc-text-field>\n        <p mdc-text-field-helper-text class=\"text-helper\" [validation]=\"false\" [persistent]=\"true\">Facultatif</p>\n\n\n        <div *ngFor=\"let slashe of slashes;let i = index\">\n          <div *ngIf=\"i > 1 && slashes[i-1]\">\n            <mdc-text-field label=\"Et parfois un.e\" name=\"slashe{{ids[i+2]}}\" [(ngModel)]=\"slashes[i+2]\" type=\"text\"  [fullwidth]=\"true\"></mdc-text-field>\n            <p mdc-text-field-helper-text class=\"text-helper\" [validation]=\"false\" [persistent]=\"true\">Facultatif</p>\n          </div>\n        </div>\n\n        <div *ngIf=\"slashes[1]\">\n          <mdc-text-field label=\"Et parfois un.e\" name=\"slashe2\" type=\"text\" [(ngModel)]=\"slashes[2]\" [fullwidth]=\"true\"></mdc-text-field>\n          <p mdc-text-field-helper-text class=\"text-helper\" [validation]=\"false\" [persistent]=\"true\">Facultatif</p>\n        </div>\n\n        <div *ngIf=\"slashes[2]\">\n          <mdc-text-field label=\"Et parfois un.e\" name=\"slashe3\" type=\"text\" [(ngModel)]=\"slashes[3]\" [fullwidth]=\"true\"></mdc-text-field>\n          <p mdc-text-field-helper-text class=\"text-helper\" [validation]=\"false\" [persistent]=\"true\">Facultatif</p>\n        </div>\n\n        <div *ngIf=\"slashes[3]\">\n          <mdc-text-field label=\"Et parfois un.e\" name=\"slashe4\" type=\"text\" [(ngModel)]=\"slashes[4]\" [fullwidth]=\"true\"></mdc-text-field>\n          <p mdc-text-field-helper-text class=\"text-helper\" [validation]=\"false\" [persistent]=\"true\">Facultatif</p>\n        </div>\n\n      </form> -->\n\n\n\n      <form [formGroup]=\"form\" class=\"slashes-form\">\n\n        <slashers-slashes-choice [form]=\"form\" [slashes]=\"slashes\" (focus)=\"slasherChoiceFocus()\"></slashers-slashes-choice>\n\n      </form>\n\n\n\n\n    </div>\n<!-- </div> -->\n<slashers-progress (prev)=\"goPrev()\" progress=\"67\" (next)=\"goNext()\" [nextEnabled]=\"form.valid\"></slashers-progress>\n"

/***/ }),

/***/ "../../../../../src/app/welcome/welcome.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "slashers-welcome {\n  background-color: #f2f2f2; }\n\n:host {\n  text-align: center; }\n\n.wrapper {\n  min-height: 100vh;\n  background-color: #f2f2f2; }\n\n@media screen and (max-width: 580px) {\n  .wrapper {\n    margin-left: 0vw !important;\n    margin-right: 0vw !important; } }\n\n.avatar-container {\n  text-align: center; }\n  .avatar-container .avatar-img {\n    width: 4.25em;\n    height: 4.25em;\n    border-radius: 50%; }\n\n.headline {\n  padding-top: 1.875em;\n  padding-bottom: 0.75em;\n  font-size: 1.5em;\n  color: #1565c0; }\n\n.headline2 {\n  margin-top: 1em;\n  margin-bottom: 0.75em;\n  font-size: 1em;\n  font-weight: 500;\n  color: #3d3d3d; }\n\n.headline3 {\n  font-size: 1.5em;\n  color: #333333;\n  margin-top: 1em; }\n\n.slashes-form {\n  margin-left: 1em;\n  margin-right: 1em;\n  margin-top: 0.5em;\n  text-align: left; }\n\n.text-helper {\n  text-align: right;\n  font-size: 0.75em;\n  color: rgba(0, 0, 0, 0.38); }\n  .text-helper.first-slash-helper {\n    margin-top: -24px; }\n\n.other-profile-extracts-wrapper {\n  overflow: hidden; }\n  .other-profile-extracts-wrapper .other-profile-extracts-container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row; }\n    .other-profile-extracts-wrapper .other-profile-extracts-container slashers-profile-extract {\n      -webkit-box-flex: 0;\n          -ms-flex: 0 0 100vw;\n              flex: 0 0 100vw; }\n\n.slasher-profile-extract {\n  margin-top: 1em; }\n\n.upddate-text {\n  margin-top: 3em; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/welcome/welcome.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_slasher_data_service__ = __webpack_require__("../../../../../src/app/services/slasher-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_animations__ = __webpack_require__("../../../animations/esm5/animations.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var WelcomeComponent = (function () {
    function WelcomeComponent(slasherDataService, router, formBuilder) {
        this.slasherDataService = slasherDataService;
        this.router = router;
        this.formBuilder = formBuilder;
        this.editSlashes = false;
        this.avatarSrc = "./assets/img/slasher.jpg";
        this.otherProfileExtracts = [
            { imageSrc: './assets/img/slasher.jpg', title: 'Fabricio Lavandier', subtitle: 'Producteur / Musicien / Scénariste' },
            { imageSrc: './assets/img/slasher.jpg', title: 'Jean Dupont', subtitle: 'Dessinateur / Chanteur' },
            { imageSrc: './assets/img/slasher.jpg', title: 'Patrice Martin', subtitle: 'Magicien / Réalisateur' },
            { imageSrc: './assets/img/slasher.jpg', title: 'Sébastien Durand', subtitle: 'Design' },
            { imageSrc: './assets/img/slasher.jpg', title: 'Bernard Pascal', subtitle: 'Développeur' },
            // repeat first (do it better)
            { imageSrc: './assets/img/slasher.jpg', title: 'Fabricio Lavandier', subtitle: 'Producteur / Musicien / Scénariste' }
        ];
    }
    WelcomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.slasherDataService.slasherData$.subscribe(function (data) {
            _this.slasherData = data;
            var emptyArray = __WEBPACK_IMPORTED_MODULE_2_lodash__["fill"](new Array(5), '');
            _this.slashes = __WEBPACK_IMPORTED_MODULE_2_lodash__["map"](emptyArray, function (x, i) {
                if (_this.slasherData.slashes.length > i) {
                    return _this.slasherData.slashes[i];
                }
            });
            console.log(_this.slashes);
        });
        this.form = this.formBuilder.group({});
        this.initializeAnimationProfileExtract();
    };
    WelcomeComponent.prototype.initializeAnimationProfileExtract = function () {
        var _this = this;
        this.indexProfileExtractsData = 0;
        this.slideProfileExtractState = 'place';
        setTimeout(function () {
            _this.animateProfileExtracts();
        }, 3000);
    };
    WelcomeComponent.prototype.animateProfileExtracts = function () {
        var _this = this;
        this.slideProfileExtractState = 'slide';
        setTimeout(function () {
            _this.animateProfileExtracts();
        }, 3000);
    };
    WelcomeComponent.prototype.slideProfileExtractAnimationDone = function (event) {
        var _this = this;
        if (event.toState === 'slide') {
            setTimeout(function () {
                _this.slideProfileExtractState = 'place';
                _this.indexProfileExtractsData = (_this.indexProfileExtractsData + 1) % (_this.otherProfileExtracts.length - 1);
            });
        }
    };
    WelcomeComponent.prototype.slasherChoiceFocus = function () {
        this.editSlashes = true;
    };
    WelcomeComponent.prototype.getSlasherProfileExtractName = function () {
        return this.slasherData.firstName + ' ' + this.slasherData.lastName;
    };
    WelcomeComponent.prototype.getSlasherProfileExtractSlashes = function () {
        return __WEBPACK_IMPORTED_MODULE_2_lodash__["join"](__WEBPACK_IMPORTED_MODULE_2_lodash__["compact"](this.slashes), ' / ');
    };
    WelcomeComponent.prototype.goPrev = function () {
        if (!this.slasherDataService.slasherData.imageSrc) {
            this.router.navigate(['/take-picture']);
        }
        else {
            this.router.navigate(['/take-avatar']);
        }
    };
    WelcomeComponent.prototype.goNext = function () {
        this.slasherData.slashes = __WEBPACK_IMPORTED_MODULE_2_lodash__["compact"](this.slashes);
        this.slasherDataService.update();
        this.router.navigate(['/intro-1-story']);
    };
    WelcomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'slashers-welcome',
            template: __webpack_require__("../../../../../src/app/welcome/welcome.component.html"),
            styles: [__webpack_require__("../../../../../src/app/welcome/welcome.component.scss")],
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["k" /* trigger */])('editSlashes', [
                    // state('true' , style({ opacity: 1, transform: 'scale(1.0)' })),
                    // state('false', style({ opacity: 0, transform: 'scale(0.0)'  })),
                    Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["h" /* state */])('true', Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["i" /* style */])({ height: '*' })),
                    Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["h" /* state */])('false', Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["i" /* style */])({ height: '0' })),
                    Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["j" /* transition */])('1 <=> 0', Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["e" /* animate */])('300ms')),
                ]),
                Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["k" /* trigger */])('slideProfileExtract', [
                    Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["h" /* state */])('slide', Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["i" /* style */])({ transform: 'translate(-100%, 0)' })),
                    Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["h" /* state */])('place', Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["i" /* style */])({ transform: 'translate(0, 0)' })),
                    Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["j" /* transition */])('place => slide', Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["e" /* animate */])('500ms')),
                ])
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_slasher_data_service__["a" /* SlasherDataService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormBuilder */]])
    ], WelcomeComponent);
    return WelcomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/welcome1/welcome1.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"wrapper\">\n        <p class=\"title1 title\">Vous pourrez modifier à tous moments ;)</p>\n        <!-- <div class=\"row-ng\">\n            <p class=\"Two-line-item\">Fabricio Lavandier</p>\n            <p class=\"Secondary-text\">Producteur / Musicien / Scénariste </p>\n        </div> -->\n        <slashers-profile-extract\n          [imageSrc]=\"slasherData.avatarSrc\" [title]=\"profileExtractName\" [subtitle]=\"profileExtractSlashes\">\n        </slashers-profile-extract>\n        <p class=\"title2 title\">Sarah, vous êtes :</p>\n        <div class=\"inputs\">\n            <!-- <mdc-text-field label=\"Un.e\" type=\"text\" min=\"0\"\n                           [required]=\"true\"></mdc-text-field>\n            <div *ngFor=\"let input of inputs\">\n                <mdc-text-field [(ngModel)]=\"input.name\"\n                               (ngModelChange)=\"onChange(input.oldVal, $event); input.oldVal = $event;\"\n                               label=\"Et aussi un.e\" type=\"text\" min=\"0\"></mdc-text-field>\n                <p mdc-text-field-helper-text class=\"slash2-helper\" [validation]=\"false\" [persistent]=\"true\">\n                    Facultatif</p></div> -->\n        </div>\n\n\n        <form #form=\"ngForm\" class=\"slashes-form\">\n            <mdc-text-field label=\"Un.e\" type=\"text\" name=\"slashe0\" [(ngModel)]=\"slashes[0]\" [required]=\"true\" [fullwidth]=\"true\"></mdc-text-field>\n            <p mdc-text-field-helper-text [validation]=\"true\" [persistent]=\"false \">\n              Choisissez un slash\n            </p>\n            <p mdc-text-field-helper-text class=\"text-helper first-slash-helper\" [validation]=\"false\" [persistent]=\"true \">Activité\n                principale</p>\n            <mdc-text-field label=\"Et aussi un.e\" type=\"text\" name=\"slashe1\" [fullwidth]=\"true\" [(ngModel)]=\"slashes[1]\"></mdc-text-field>\n            <p mdc-text-field-helper-text class=\"text-helper\" [validation]=\"false\" [persistent]=\"true\">Facultatif</p>\n\n            <div *ngIf=\"slashes[1]\">\n              <mdc-text-field label=\"Et parfois un.e\" name=\"slashe2\" type=\"text\" [(ngModel)]=\"slashes[2]\" [fullwidth]=\"true\"></mdc-text-field>\n              <p mdc-text-field-helper-text class=\"text-helper\" [validation]=\"false\" [persistent]=\"true\">Facultatif</p>\n            </div>\n\n            <div *ngIf=\"slashes[2]\">\n              <mdc-text-field label=\"Et parfois un.e\" name=\"slashe3\" type=\"text\" [(ngModel)]=\"slashes[3]\" [fullwidth]=\"true\"></mdc-text-field>\n              <p mdc-text-field-helper-text class=\"text-helper\" [validation]=\"false\" [persistent]=\"true\">Facultatif</p>\n            </div>\n\n            <div *ngIf=\"slashes[3]\">\n              <mdc-text-field label=\"Et parfois un.e\" name=\"slashe4\" type=\"text\" [(ngModel)]=\"slashes[4]\" [fullwidth]=\"true\"></mdc-text-field>\n              <p mdc-text-field-helper-text class=\"text-helper\" [validation]=\"false\" [persistent]=\"true\">Facultatif</p>\n            </div>\n\n        </form>\n\n    </div>\n</div>\n<slashers-progress precedent=\"welcome\" progress=\"100\" (next)=goNext() [nextEnabled]=\"form.valid\"></slashers-progress>\n"

/***/ }),

/***/ "../../../../../src/app/welcome1/welcome1.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".wrapper {\n  height: 100vh;\n  background-color: #f2f2f2;\n  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.24), 0 0 4px 0 rgba(0, 0, 0, 0.12);\n  margin-top: 0vh !important;\n  overflow: auto; }\n\n@media screen and (max-width: 580px) {\n  .wrapper {\n    margin-left: 0vw !important;\n    margin-right: 0vw !important; } }\n\n.row-ng {\n  margin-top: 25px;\n  height: 72px;\n  background-color: #ffffff;\n  -webkit-animation: 2s ease-out 0s 1 slideInFromLeft;\n          animation: 2s ease-out 0s 1 slideInFromLeft; }\n\np {\n  margin: 0px; }\n\n@-webkit-keyframes slideInFromLeft {\n  0% {\n    -webkit-transform: translateX(-100%);\n            transform: translateX(-100%); }\n  100% {\n    -webkit-transform: translateX(0px);\n            transform: translateX(0px); } }\n\n@keyframes slideInFromLeft {\n  0% {\n    -webkit-transform: translateX(-100%);\n            transform: translateX(-100%); }\n  100% {\n    -webkit-transform: translateX(0px);\n            transform: translateX(0px); } }\n\n.Two-line-item {\n  position: absolute;\n  margin-top: 12px;\n  margin-left: 100px;\n  width: 131px;\n  height: 24px;\n  font-family: Roboto;\n  font-size: 16px;\n  color: rgba(0, 0, 0, 0.54); }\n\n.Secondary-text {\n  position: absolute;\n  margin-top: 35px;\n  margin-left: 100px;\n  width: 219px;\n  height: 20px;\n  font-family: Roboto;\n  font-size: 14px;\n  font-weight: 500;\n  color: #000000; }\n\n.title {\n  font-family: Roboto;\n  color: #333333;\n  text-align: center; }\n\n.title1 {\n  font-size: 19px;\n  font-weight: 500;\n  margin-top: 40px; }\n\n.title2 {\n  font-size: 24px;\n  margin-top: 35px; }\n\n.slashes-form {\n  margin-left: 1em;\n  margin-right: 1em;\n  margin-top: 0.5em;\n  text-align: left; }\n\n.text-helper {\n  text-align: right;\n  font-size: 0.75em;\n  color: rgba(0, 0, 0, 0.38); }\n  .text-helper.first-slash-helper {\n    margin-top: -24px; }\n\n.slash2-helper {\n  float: right;\n  font-family: Roboto; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/welcome1/welcome1.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Welcome1Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_slasher_data_service__ = __webpack_require__("../../../../../src/app/services/slasher-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Welcome1Component = (function () {
    function Welcome1Component(slasherDataService) {
        this.slasherDataService = slasherDataService;
        this.inputs = [{ oldVal: null, newVal: null }];
    }
    Welcome1Component.prototype.ngOnInit = function () {
        var _this = this;
        // this.avatarSrc = this.slasherDataService.slasherData.avatarSrc;Vinaurel2594!
        this.slasherDataService.slasherData$.subscribe(function (data) {
            _this.slasherData = data;
            _this.profileExtractSlashes = __WEBPACK_IMPORTED_MODULE_2_lodash__["join"](data.slashes, ' / ');
            _this.profileExtractName = data.firstName + ' ' + data.lastName;
            var emptyArray = __WEBPACK_IMPORTED_MODULE_2_lodash__["fill"](new Array(5), '');
            _this.slashes = __WEBPACK_IMPORTED_MODULE_2_lodash__["map"](emptyArray, function (x, i) {
                if (_this.slasherData.slashes.length > i) {
                    return _this.slasherData.slashes[i];
                }
            });
        });
    };
    Welcome1Component.prototype.goNext = function () {
        this.slasherData.slashes = __WEBPACK_IMPORTED_MODULE_2_lodash__["compact"](this.slashes);
        this.slasherDataService.update();
    };
    Welcome1Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'slashers-welcome1',
            template: __webpack_require__("../../../../../src/app/welcome1/welcome1.component.html"),
            styles: [__webpack_require__("../../../../../src/app/welcome1/welcome1.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_slasher_data_service__["a" /* SlasherDataService */]])
    ], Welcome1Component);
    return Welcome1Component;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
document.addEventListener('DOMContentLoaded', function () {
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
});


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map