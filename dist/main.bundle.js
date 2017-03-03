webpackJsonp([1,4],{

/***/ 1240:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(808);


/***/ }),

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (immutable) */ __webpack_exports__["a"] = moveIn;
/* harmony export (immutable) */ __webpack_exports__["b"] = fallIn;
/* harmony export (immutable) */ __webpack_exports__["c"] = moveInLeft;

function moveIn() {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* trigger */])('moveIn', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* state */])('void', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* style */])({ position: 'fixed', width: '100%' })),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* state */])('*', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* style */])({ position: 'fixed', width: '100%' })),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* transition */])(':enter', [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* style */])({ opacity: '0', transform: 'translateX(100px)' }),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* animate */])('.6s ease-in-out', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* style */])({ opacity: '1', transform: 'translateX(0)' }))
        ]),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* transition */])(':leave', [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* style */])({ opacity: '1', transform: 'translateX(0)' }),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* animate */])('.3s ease-in-out', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* style */])({ opacity: '0', transform: 'translateX(-200px)' }))
        ])
    ]);
}
function fallIn() {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* trigger */])('fallIn', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* transition */])(':enter', [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* style */])({ opacity: '0', transform: 'translateY(40px)' }),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* animate */])('.9s .6s ease-in-out', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* style */])({ opacity: '1', transform: 'translateY(0)' }))
        ]),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* transition */])(':leave', [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* style */])({ opacity: '1', transform: 'translateX(0)' }),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* animate */])('.9s ease-in-out', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* style */])({ opacity: '0', transform: 'translateX(-200px)' }))
        ])
    ]);
}
function moveInLeft() {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* trigger */])('moveInLeft', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* transition */])(':enter', [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* style */])({ opacity: '0', transform: 'translateX(-100px)' }),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* animate */])('.9s .6s ease-in-out', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* style */])({ opacity: '1', transform: 'translateX(0)' }))
        ])
    ]);
}
//# sourceMappingURL=/Users/i65114/Desktop/GitGrub/src/router.animations.js.map

/***/ }),

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(513);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=/Users/i65114/Desktop/GitGrub/src/polyfills.js.map

/***/ }),

/***/ 322:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2__ = __webpack_require__(99);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecipeService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RecipeService = (function () {
    function RecipeService(af) {
        var _this = this;
        this.af = af;
        this.af.auth.subscribe(function (auth) {
            if (auth) {
                // console.log(auth);
                _this.name = auth;
            }
        });
    }
    RecipeService.prototype.getAll = function () {
        return this.af.database.list('/recipes');
    };
    ;
    // Add favorites to list (stays on service)
    RecipeService.prototype.addFavz = function (recipe) {
        console.log("Favz is called");
        // console.log(recipe);
        var newFav = this.af.database.object("/recipes/" + recipe.$key + "/users");
        var key = {};
        key[this.name.uid] = true;
        newFav.update(key);
    };
    // delete fav from user
    RecipeService.prototype.removeFavz = function (recipe) {
        console.log("Favz is called");
        // console.log(recipe);
        var newFav = this.af.database.object("/recipes/" + recipe.$key + "/users");
        var key = {};
        key[this.name.uid] = false;
        newFav.update(key);
    };
    RecipeService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2__["b" /* AngularFire */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_angularfire2__["b" /* AngularFire */]) === 'function' && _a) || Object])
    ], RecipeService);
    return RecipeService;
    var _a;
}());
//# sourceMappingURL=/Users/i65114/Desktop/GitGrub/src/recipe.service.js.map

/***/ }),

/***/ 512:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "stuff.jpg";

/***/ }),

/***/ 599:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__router_animations__ = __webpack_require__(137);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AboutComponent = (function () {
    function AboutComponent(af, router) {
        var _this = this;
        this.af = af;
        this.router = router;
        this.state = '';
        this.recipes = af.database.list('/recipes');
        af.auth.subscribe(function (auth) {
            if (auth) {
                _this.name = auth;
            }
        });
    }
    AboutComponent.prototype.logout = function () {
        this.af.auth.logout();
        this.router.navigateByUrl('/login');
    };
    AboutComponent.prototype.members = function () {
        this.router.navigateByUrl('/members');
    };
    AboutComponent.prototype.favz = function () {
        this.router.navigateByUrl('/favorites');
    };
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
            selector: 'app-members',
            template: __webpack_require__(975),
            styles: [__webpack_require__(938)],
            animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__router_animations__["a" /* moveIn */])(), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__router_animations__["b" /* fallIn */])(), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__router_animations__["c" /* moveInLeft */])()],
            host: { '[@moveIn]': '' }
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2__["b" /* AngularFire */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_angularfire2__["b" /* AngularFire */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === 'function' && _b) || Object])
    ], AboutComponent);
    return AboutComponent;
    var _a, _b;
}());
//# sourceMappingURL=/Users/i65114/Desktop/GitGrub/src/about.component.js.map

/***/ }),

/***/ 600:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__router_animations__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__recipe_service__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_toaster__ = __webpack_require__(323);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavoritesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FavoritesComponent = (function () {
    function FavoritesComponent(af, router, recipeService, toasterService) {
        var _this = this;
        this.af = af;
        this.router = router;
        this.recipeService = recipeService;
        this.state = '';
        this.recipes = af.database.list('/recipes');
        af.auth.subscribe(function (auth) {
            if (auth) {
                _this.name = auth;
            }
        });
        this.recipes = recipeService.getAll().map(function (recipes) {
            // console.log(recipes.users);
            return recipes.filter(function (recipe) {
                if (recipe.users && recipe.users[_this.name.uid]) {
                    return true;
                }
                else {
                    return false;
                }
            });
        });
        this.toasterService = toasterService;
    }
    FavoritesComponent.prototype.logout = function () {
        this.af.auth.logout();
        this.router.navigateByUrl('/login');
    };
    FavoritesComponent.prototype.members = function () {
        this.router.navigateByUrl('/members');
    };
    FavoritesComponent.prototype.about = function () {
        this.router.navigateByUrl('/about');
    };
    FavoritesComponent.prototype.removeFavs = function (recipe) {
        this.recipeService.removeFavz(recipe);
        this.toasterService.pop('warning', 'Removed', recipe.title + ' from Favorites');
    };
    FavoritesComponent.prototype.ngOnInit = function () {
    };
    FavoritesComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
            selector: 'app-members',
            providers: [__WEBPACK_IMPORTED_MODULE_5_angular2_toaster__["b" /* ToasterService */]],
            template: __webpack_require__(976),
            styles: [__webpack_require__(939)],
            animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__router_animations__["a" /* moveIn */])(), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__router_animations__["b" /* fallIn */])(), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__router_animations__["c" /* moveInLeft */])(),],
            host: { '[@moveIn]': '' }
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2__["b" /* AngularFire */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_angularfire2__["b" /* AngularFire */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__recipe_service__["a" /* RecipeService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__recipe_service__["a" /* RecipeService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5_angular2_toaster__["b" /* ToasterService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5_angular2_toaster__["b" /* ToasterService */]) === 'function' && _d) || Object])
    ], FavoritesComponent);
    return FavoritesComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/Users/i65114/Desktop/GitGrub/src/favorites.component.js.map

/***/ }),

/***/ 601:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_angularfire2__ = __webpack_require__(609);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(983);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__ = __webpack_require__(776);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(500);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_take__ = __webpack_require__(780);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_take__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AuthGuard = (function () {
    function AuthGuard(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Observable"].from(this.auth)
            .take(1)
            .map(function (state) { return !!state; })
            .do(function (authenticated) {
            if (!authenticated)
                _this.router.navigate(['/login']);
        });
    };
    AuthGuard = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_angularfire2__["c" /* AngularFireAuth */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_angularfire2_angularfire2__["c" /* AngularFireAuth */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* Router */]) === 'function' && _b) || Object])
    ], AuthGuard);
    return AuthGuard;
    var _a, _b;
}());
//# sourceMappingURL=/Users/i65114/Desktop/GitGrub/src/auth.service.js.map

/***/ }),

/***/ 602:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__router_animations__ = __webpack_require__(137);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EmailComponent = (function () {
    function EmailComponent(af, router) {
        var _this = this;
        this.af = af;
        this.router = router;
        this.state = '';
        this.af.auth.subscribe(function (auth) {
            if (auth) {
                _this.router.navigateByUrl('/members');
            }
        });
    }
    EmailComponent.prototype.onSubmit = function (formData) {
        var _this = this;
        if (formData.valid) {
            console.log(formData.value);
            this.af.auth.login({
                email: formData.value.email,
                password: formData.value.password
            }, {
                provider: __WEBPACK_IMPORTED_MODULE_1_angularfire2__["c" /* AuthProviders */].Password,
                method: __WEBPACK_IMPORTED_MODULE_1_angularfire2__["d" /* AuthMethods */].Password,
            }).then(function (success) {
                console.log(success);
                _this.router.navigate(['/members']);
            }).catch(function (err) {
                console.log(err);
                _this.error = err;
            });
        }
    };
    EmailComponent.prototype.ngOnInit = function () {
    };
    EmailComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
            selector: 'app-email',
            template: __webpack_require__(978),
            styles: [__webpack_require__(941)],
            animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__router_animations__["a" /* moveIn */])(), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__router_animations__["b" /* fallIn */])()],
            host: { '[@moveIn]': '' }
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2__["b" /* AngularFire */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_angularfire2__["b" /* AngularFire */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === 'function' && _b) || Object])
    ], EmailComponent);
    return EmailComponent;
    var _a, _b;
}());
//# sourceMappingURL=/Users/i65114/Desktop/GitGrub/src/email.component.js.map

/***/ }),

/***/ 603:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__router_animations__ = __webpack_require__(137);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(af, router) {
        var _this = this;
        this.af = af;
        this.router = router;
        this.af.auth.subscribe(function (auth) {
            if (auth) {
                _this.router.navigateByUrl('/members');
            }
        });
    }
    // loginFb() {
    //   this.af.auth.login({
    //     provider: AuthProviders.Facebook,
    //     method: AuthMethods.Popup,
    //   }).then(
    //       (success) => {
    //       this.router.navigate(['/members']);
    //     }).catch(
    //       (err) => {
    //       this.error = err;
    //     })
    // }
    LoginComponent.prototype.loginGoogle = function () {
        var _this = this;
        this.af.auth.login({
            provider: __WEBPACK_IMPORTED_MODULE_1_angularfire2__["c" /* AuthProviders */].Google,
            method: __WEBPACK_IMPORTED_MODULE_1_angularfire2__["d" /* AuthMethods */].Popup,
        }).then(function (success) {
            _this.router.navigate(['/members']);
        }).catch(function (err) {
            _this.error = err;
        });
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__(979),
            styles: [__webpack_require__(942)],
            animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__router_animations__["a" /* moveIn */])()],
            host: { '[@moveIn]': '' }
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2__["b" /* AngularFire */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_angularfire2__["b" /* AngularFire */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === 'function' && _b) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b;
}());
//# sourceMappingURL=/Users/i65114/Desktop/GitGrub/src/login.component.js.map

/***/ }),

/***/ 604:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__router_animations__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Favorites_recipe_service__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_toaster__ = __webpack_require__(323);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MembersComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// import {bootstrapItem} from "@angular/cli/lib/ast-tools";
var MembersComponent = (function () {
    function MembersComponent(af, router, recipeService, toasterService) {
        var _this = this;
        this.af = af;
        this.router = router;
        this.recipeService = recipeService;
        this.state = '';
        this.userSearch = '';
        this.af.auth.subscribe(function (auth) {
            if (auth) {
                // console.log(auth);
                _this.name = auth;
            }
        });
        recipeService.getAll().subscribe(function (recipes) {
            _this.recipes = recipes;
            _this.filteredRec = _this.recipes;
            // console.log(this.recipes);
        });
        this.toasterService = toasterService;
    }
    MembersComponent.prototype.logout = function () {
        this.af.auth.logout();
        this.router.navigateByUrl('/login');
    };
    MembersComponent.prototype.favz = function () {
        this.router.navigateByUrl('/favorites');
    };
    MembersComponent.prototype.about = function () {
        this.router.navigateByUrl('/about');
    };
    MembersComponent.prototype.myFilter = function () {
        var _this = this;
        this.filteredRec = this.recipes.filter(function (recipe) {
            return recipe.title.toLowerCase().indexOf(_this.userSearch.toLowerCase()) > -1;
        });
    };
    MembersComponent.prototype.addFavs = function (recipe) {
        this.recipeService.addFavz(recipe);
        this.toasterService.pop('info', 'Added', recipe.title + ' to Favorites');
    };
    MembersComponent.prototype.removeFavs = function (recipe) {
        this.recipeService.removeFavz(recipe);
        this.toasterService.pop('warning', 'Removed', recipe.title + ' from Favorites');
    };
    MembersComponent.prototype.isFav = function (recipe) {
        return recipe.users && recipe.users[this.name.uid];
    };
    MembersComponent.prototype.ngOnInit = function () {
    };
    MembersComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
            selector: 'app-members',
            // directives: [ToasterContainerComponent],
            providers: [__WEBPACK_IMPORTED_MODULE_5_angular2_toaster__["b" /* ToasterService */]],
            template: __webpack_require__(980),
            styles: [__webpack_require__(943)],
            animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__router_animations__["a" /* moveIn */])(), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__router_animations__["b" /* fallIn */])(), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__router_animations__["c" /* moveInLeft */])()],
            host: { '[@moveIn]': '' }
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2__["b" /* AngularFire */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_angularfire2__["b" /* AngularFire */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__Favorites_recipe_service__["a" /* RecipeService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__Favorites_recipe_service__["a" /* RecipeService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5_angular2_toaster__["b" /* ToasterService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5_angular2_toaster__["b" /* ToasterService */]) === 'function' && _d) || Object])
    ], MembersComponent);
    return MembersComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/Users/i65114/Desktop/GitGrub/src/members.component.js.map

/***/ }),

/***/ 605:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__router_animations__ = __webpack_require__(137);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignupComponent = (function () {
    function SignupComponent(af, router) {
        this.af = af;
        this.router = router;
        this.state = '';
    }
    SignupComponent.prototype.onSubmit = function (formData) {
        var _this = this;
        if (formData.valid) {
            console.log(formData.value);
            this.af.auth.createUser({
                email: formData.value.email,
                password: formData.value.password
            }).then(function (success) {
                _this.router.navigate(['/members']);
            }).catch(function (err) {
                _this.error = err;
            });
        }
    };
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
            selector: 'app-signup',
            template: __webpack_require__(981),
            styles: [__webpack_require__(944)],
            animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__router_animations__["a" /* moveIn */])(), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__router_animations__["b" /* fallIn */])()],
            host: { '[@moveIn]': '' }
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2__["b" /* AngularFire */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_angularfire2__["b" /* AngularFire */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === 'function' && _b) || Object])
    ], SignupComponent);
    return SignupComponent;
    var _a, _b;
}());
//# sourceMappingURL=/Users/i65114/Desktop/GitGrub/src/signup.component.js.map

/***/ }),

/***/ 807:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 807;


/***/ }),

/***/ 808:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(894);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(927);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__(925);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/Users/i65114/Desktop/GitGrub/src/main.js.map

/***/ }),

/***/ 924:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(977),
            styles: [__webpack_require__(940)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=/Users/i65114/Desktop/GitGrub/src/app.component.js.map

/***/ }),

/***/ 925:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(890);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(924);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login_component__ = __webpack_require__(603);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__email_email_component__ = __webpack_require__(602);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__signup_signup_component__ = __webpack_require__(605);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__members_members_component__ = __webpack_require__(604);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__auth_service__ = __webpack_require__(601);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_routes__ = __webpack_require__(926);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ng2_bootstrap__ = __webpack_require__(959);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__Favorites_favorites_component__ = __webpack_require__(600);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__About_about_component__ = __webpack_require__(599);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__Favorites_recipe_service__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angular2_toaster__ = __webpack_require__(323);
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

















// Must export the config
var firebaseConfig = {
    apiKey: "AIzaSyBVR8A-Mawq6aJiudG-i1Aes_dVf3JTovw",
    authDomain: "recip-311bc.firebaseapp.com",
    databaseURL: "https://recip-311bc.firebaseio.com",
    storageBucket: "recip-311bc.appspot.com",
    messagingSenderId: "779087682601"
};
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_7__email_email_component__["a" /* EmailComponent */],
                __WEBPACK_IMPORTED_MODULE_8__signup_signup_component__["a" /* SignupComponent */],
                __WEBPACK_IMPORTED_MODULE_9__members_members_component__["a" /* MembersComponent */],
                __WEBPACK_IMPORTED_MODULE_13__Favorites_favorites_component__["a" /* FavoritesComponent */],
                __WEBPACK_IMPORTED_MODULE_14__About_about_component__["a" /* AboutComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_11__app_routes__["a" /* routes */],
                __WEBPACK_IMPORTED_MODULE_12_ng2_bootstrap__["a" /* AlertModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_16_angular2_toaster__["a" /* ToasterModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_10__auth_service__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_15__Favorites_recipe_service__["a" /* RecipeService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/Users/i65114/Desktop/GitGrub/src/app.module.js.map

/***/ }),

/***/ 926:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_login_component__ = __webpack_require__(603);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__members_members_component__ = __webpack_require__(604);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_service__ = __webpack_require__(601);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__signup_signup_component__ = __webpack_require__(605);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__email_email_component__ = __webpack_require__(602);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Favorites_favorites_component__ = __webpack_require__(600);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__About_about_component__ = __webpack_require__(599);
/* unused harmony export router */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });








var router = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_1__login_login_component__["a" /* LoginComponent */] },
    { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_4__signup_signup_component__["a" /* SignupComponent */] },
    { path: 'login-email', component: __WEBPACK_IMPORTED_MODULE_5__email_email_component__["a" /* EmailComponent */] },
    { path: 'members', component: __WEBPACK_IMPORTED_MODULE_2__members_members_component__["a" /* MembersComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* AuthGuard */]] },
    { path: 'favorites', component: __WEBPACK_IMPORTED_MODULE_6__Favorites_favorites_component__["a" /* FavoritesComponent */] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_7__About_about_component__["a" /* AboutComponent */] }
];
var routes = __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forRoot(router);
//# sourceMappingURL=/Users/i65114/Desktop/GitGrub/src/app.routes.js.map

/***/ }),

/***/ 927:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/Users/i65114/Desktop/GitGrub/src/environment.js.map

/***/ }),

/***/ 938:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(86)();
// imports


// module
exports.push([module.i, "#logo {\n  margin: 0 auto;\n  text-align: center;\n}\n\n#logo:hover {\n  -webkit-transform: rotate(360deg) scale(1.1);\n          transform: rotate(360deg) scale(1.1);\n}\n\n#aboutme{\n  text-align: center;\n  padding: 4px;\n}\n\n#toolbar {\n  padding: 0;\n  width: 70%;\n  margin-left: -35%;\n}\n\n.banner {\n  text-align: center;\n}\n\nheader {\n  background: lightgray;\n  width: 100%;\n  border-radius: 4px;\n}\n\n.basic-btn {\n  width: 100px;\n  margin: 0 auto;\n  text-align: center;\n  padding: 15px;\n  border-radius: 4px;\n}\n\n#page {\n  padding: 3em;\n  margin: 0;\n}\n\n#page img {\n  margin-top: 30px;\n}\n\nh2 {\n  margin: 0;\n}\n\n@media (max-width: 600px) {\n  #page {\n    padding: 1em;\n  }\n\n  #toolbar {\n    width: 90%;\n    margin-left: -45%;\n  }\n}\n\n.scroll-me {\n  display: inline-block;\n  overflow-y: scroll;\n  height: calc(100vh - 375px);\n  /*margin: 0 auto;*/\n  width: 100%;\n  background: lightgray;\n  border-radius: 4px;\n}\n\n.center-me {\n  margin: 0 auto;\n  width: 900px;\n}\n\n.glyphicon {\n\n  color: #FF7878;\n  font-size: 25px;\n}\n\n/*.glyphicon glyphicon-fire{*/\n/*color: orangered;*/\n/*font-size: 50px;*/\n\n/*}*/\n\n.form-group {\n  width: 55%;\n  margin: 16px auto;\n}\n\n#mccheese_background {\n  background-image: url(" + __webpack_require__(512) + ");\n  color: #515151;\n  border-radius: 4px;\n  background-size: cover;\n  height: 140px;\n  margin: 0 auto;\n  text-align: center;\n\n}\n\n.banner {\n  margin-top: 30px;\n}\n\n.feedback {\n  list-style: none;\n}\n\n.scroll-me {\n  display: inline-block;\n  overflow-y: scroll;\n  height: calc(100vh - 375px);\n  /*margin: 0 auto;*/\n  width: 100%;\n  background: beige;\n  border-radius: 4px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 939:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(86)();
// imports


// module
exports.push([module.i, "\n#logo {\n  margin: 0 auto;\n  text-align: center;\n}\n\n#logo:hover {\n  -webkit-transform: rotate(360deg) scale(1.1);\n          transform: rotate(360deg) scale(1.1);\n}\n\n#toolbar {\n  padding: 0;\n  width: 70%;\n  margin-left: -35%;\n}\n\n.banner {\n  text-align: center;\n}\n\nheader {\n  background: lightgray;\n  width: 100%;\n  border-radius: 4px;\n}\n\n.basic-btn {\n  width: 100px;\n  margin: 0 auto;\n  text-align: center;\n  padding: 15px;\n  border-radius: 4px;\n}\n\n#page {\n  padding: 3em;\n  margin: 0;\n}\n\n#page img {\n  margin-top: 30px;\n}\n\nh2 {\n  margin: 0;\n}\n\n@media (max-width: 600px) {\n  #page {\n    padding: 1em;\n  }\n\n  #toolbar {\n    width: 90%;\n    margin-left: -45%;\n  }\n}\n\n.scroll-me {\n  display: inline-block;\n  overflow-y: scroll;\n  height: calc(100vh - 375px);\n  /*margin: 0 auto;*/\n  width: 100%;\n  background: lightgray;\n  border-radius: 4px;\n}\n\n.center-me {\n  margin: 0 auto;\n  width: 900px;\n}\n\n.glyphicon {\n\n  color: #FF7878;\n  font-size: 25px;\n  -webkit-transition: all 1s cubic-bezier(0.68, -0.55, 0.27, 1.55);\n  transition: all 1s cubic-bezier(0.68, -0.55, 0.27, 1.55);\n}\n\n.glyphicon:hover {\n  -webkit-transform: rotate(360deg) scale(2);\n          transform: rotate(360deg) scale(2);\n\n}\n\n\n.form-group {\n  width: 55%;\n  margin: 16px auto;\n}\n\n#mccheese_background {\n  background-image: url(" + __webpack_require__(512) + ");\n  color: #515151;\n  border-radius: 4px;\n  background-size: cover;\n  height: 140px;\n  margin: 0 auto;\n  text-align: center;\n\n}\n\n.banner {\n  margin-top: 30px;\n}\n\n.scroll-me {\n  display: inline-block;\n  overflow-y: scroll;\n  height: calc(100vh - 375px);\n  /*margin: 0 auto;*/\n  width: 100%;\n  background: lightgray;\n  border-radius: 4px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 940:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(86)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 941:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(86)();
// imports


// module
exports.push([module.i, ".txt {\n  border-radius: 4px;\n\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 942:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(86)();
// imports


// module
exports.push([module.i, "#logo:hover {\n  -webkit-transform: rotate(360deg) scale(1.1);\n          transform: rotate(360deg) scale(1.1);\n}\n\n#header {\n  text-align: center;\n  font-size: 40px;\n  color: #505050;\n  font-family: 'Roboto';\n  border-radius: 25px;\n}\n\n#mccheese {\n  width: auto;\n  margin: 1.5em auto 4em auto;\n  display: block;\n}\n\n#google {\n  border: 1px solid #95989A;\n  background: #fff url(" + __webpack_require__(946) + ") no-repeat 25px;\n  background-size: 25px;\n  border-radius: 4px;\n\n}\n\n#email {\n  background: darkred url(" + __webpack_require__(945) + ") no-repeat 25px;\n  background-size: 25px;\n  fill: whitesmoke;\n  color: whitesmoke;\n  border-radius: 4px;\n\n}\n\n@media (max-width: 600px) {\n  #page {\n    padding: 1em;\n  }\n\n  #toolbar {\n    width: 90%;\n    margin-left: -45%;\n  }\n\n  #google {\n    background: #fff;\n  }\n\n  #email {\n    background: #ECECEC;\n  }\n}\n\n.form-container {\n  border-radius: 4px;\n  background-color: beige;\n  width: 30%\n}\n\n/*#verified {*/\n  /*text-align: center;*/\n  /*font-size: 10px;*/\n  /*color: orangered;*/\n/*}*/\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 943:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(86)();
// imports


// module
exports.push([module.i, "#logo {\n  margin: 0 auto;\n  text-align: center;\n}\n\n#logo:hover {\n  -webkit-transform: rotate(360deg) scale(1.1);\n          transform: rotate(360deg) scale(1.1);\n}\n\n#toolbar {\n  padding: 0;\n  width: 70%;\n  margin-left: -35%;\n}\n\n.banner {\n  text-align: center;\n}\n\nheader {\n  background: lightgray;\n  width: 100%;\n  border-radius: 4px;\n\n}\n\n.basic-btn {\n  width: 100px;\n  margin: 0 auto;\n  text-align: center;\n  padding: 15px;\n  border-radius: 4px;\n}\n\n#page {\n  padding: 3em;\n  margin: 0;\n}\n\n#page img {\n  margin-top: 30px;\n}\n\nh2 {\n  margin: 0;\n}\n\n@media (max-width: 600px) {\n  #page {\n    padding: 1em;\n  }\n\n  #toolbar {\n    width: 90%;\n    margin-left: -45%;\n  }\n}\n\n.scroll-me {\n  display: inline-block;\n  overflow-y: scroll;\n  height: calc(100vh - 375px);\n  /*margin: 0 auto;*/\n  width: 100%;\n  background: lightgray;\n  border-radius: 4px;\n}\n\n.center-me {\n  margin: 0 auto;\n  width: 900px;\n}\n\n.glyphicon {\n\n  color: #FF7878;\n  font-size: 25px;\n  -webkit-transition: all 1s cubic-bezier(0.68, -0.55, 0.27, 1.55);\n  transition: all 1s cubic-bezier(0.68, -0.55, 0.27, 1.55);\n}\n\n.glyphicon:hover {\n  -webkit-transform: rotate(360deg) scale(2);\n          transform: rotate(360deg) scale(2);\n\n}\n\n/*.glyphicon glyphicon-fire{*/\n/*color: orangered;*/\n/*font-size: 50px;*/\n\n/*}*/\n\n.form-group {\n  width: 100%;\n  margin: 0 auto;\n  padding: 14px;\n}\n\n.form-control {\n  width: 55%;\n  margin: 16px auto;\n  padding: 16px;\n  box-shadow: 0px 1px 2px 0px #909090;\n  text-align: center;\n}\n\n#mccheese_background {\n  background-image: url(" + __webpack_require__(512) + ");\n  color: #515151;\n  border-radius: 4px;\n  background-size: cover;\n  height: 140px;\n  margin: 0 auto;\n  text-align: center;\n  box-shadow: 0px 3px 5px 0px #909090;\n\n}\n\n.banner {\n  margin-top: 30px;\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 944:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(86)();
// imports


// module
exports.push([module.i, ".txt {\n  border-radius: 4px;\n\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 945:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "email.svg";

/***/ }),

/***/ 946:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "google.svg";

/***/ }),

/***/ 951:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 612,
	"./af.js": 612,
	"./ar": 618,
	"./ar-dz": 613,
	"./ar-dz.js": 613,
	"./ar-ly": 614,
	"./ar-ly.js": 614,
	"./ar-ma": 615,
	"./ar-ma.js": 615,
	"./ar-sa": 616,
	"./ar-sa.js": 616,
	"./ar-tn": 617,
	"./ar-tn.js": 617,
	"./ar.js": 618,
	"./az": 619,
	"./az.js": 619,
	"./be": 620,
	"./be.js": 620,
	"./bg": 621,
	"./bg.js": 621,
	"./bn": 622,
	"./bn.js": 622,
	"./bo": 623,
	"./bo.js": 623,
	"./br": 624,
	"./br.js": 624,
	"./bs": 625,
	"./bs.js": 625,
	"./ca": 626,
	"./ca.js": 626,
	"./cs": 627,
	"./cs.js": 627,
	"./cv": 628,
	"./cv.js": 628,
	"./cy": 629,
	"./cy.js": 629,
	"./da": 630,
	"./da.js": 630,
	"./de": 632,
	"./de-at": 631,
	"./de-at.js": 631,
	"./de.js": 632,
	"./dv": 633,
	"./dv.js": 633,
	"./el": 634,
	"./el.js": 634,
	"./en-au": 635,
	"./en-au.js": 635,
	"./en-ca": 636,
	"./en-ca.js": 636,
	"./en-gb": 637,
	"./en-gb.js": 637,
	"./en-ie": 638,
	"./en-ie.js": 638,
	"./en-nz": 639,
	"./en-nz.js": 639,
	"./eo": 640,
	"./eo.js": 640,
	"./es": 642,
	"./es-do": 641,
	"./es-do.js": 641,
	"./es.js": 642,
	"./et": 643,
	"./et.js": 643,
	"./eu": 644,
	"./eu.js": 644,
	"./fa": 645,
	"./fa.js": 645,
	"./fi": 646,
	"./fi.js": 646,
	"./fo": 647,
	"./fo.js": 647,
	"./fr": 650,
	"./fr-ca": 648,
	"./fr-ca.js": 648,
	"./fr-ch": 649,
	"./fr-ch.js": 649,
	"./fr.js": 650,
	"./fy": 651,
	"./fy.js": 651,
	"./gd": 652,
	"./gd.js": 652,
	"./gl": 653,
	"./gl.js": 653,
	"./he": 654,
	"./he.js": 654,
	"./hi": 655,
	"./hi.js": 655,
	"./hr": 656,
	"./hr.js": 656,
	"./hu": 657,
	"./hu.js": 657,
	"./hy-am": 658,
	"./hy-am.js": 658,
	"./id": 659,
	"./id.js": 659,
	"./is": 660,
	"./is.js": 660,
	"./it": 661,
	"./it.js": 661,
	"./ja": 662,
	"./ja.js": 662,
	"./jv": 663,
	"./jv.js": 663,
	"./ka": 664,
	"./ka.js": 664,
	"./kk": 665,
	"./kk.js": 665,
	"./km": 666,
	"./km.js": 666,
	"./ko": 667,
	"./ko.js": 667,
	"./ky": 668,
	"./ky.js": 668,
	"./lb": 669,
	"./lb.js": 669,
	"./lo": 670,
	"./lo.js": 670,
	"./lt": 671,
	"./lt.js": 671,
	"./lv": 672,
	"./lv.js": 672,
	"./me": 673,
	"./me.js": 673,
	"./mi": 674,
	"./mi.js": 674,
	"./mk": 675,
	"./mk.js": 675,
	"./ml": 676,
	"./ml.js": 676,
	"./mr": 677,
	"./mr.js": 677,
	"./ms": 679,
	"./ms-my": 678,
	"./ms-my.js": 678,
	"./ms.js": 679,
	"./my": 680,
	"./my.js": 680,
	"./nb": 681,
	"./nb.js": 681,
	"./ne": 682,
	"./ne.js": 682,
	"./nl": 684,
	"./nl-be": 683,
	"./nl-be.js": 683,
	"./nl.js": 684,
	"./nn": 685,
	"./nn.js": 685,
	"./pa-in": 686,
	"./pa-in.js": 686,
	"./pl": 687,
	"./pl.js": 687,
	"./pt": 689,
	"./pt-br": 688,
	"./pt-br.js": 688,
	"./pt.js": 689,
	"./ro": 690,
	"./ro.js": 690,
	"./ru": 691,
	"./ru.js": 691,
	"./se": 692,
	"./se.js": 692,
	"./si": 693,
	"./si.js": 693,
	"./sk": 694,
	"./sk.js": 694,
	"./sl": 695,
	"./sl.js": 695,
	"./sq": 696,
	"./sq.js": 696,
	"./sr": 698,
	"./sr-cyrl": 697,
	"./sr-cyrl.js": 697,
	"./sr.js": 698,
	"./ss": 699,
	"./ss.js": 699,
	"./sv": 700,
	"./sv.js": 700,
	"./sw": 701,
	"./sw.js": 701,
	"./ta": 702,
	"./ta.js": 702,
	"./te": 703,
	"./te.js": 703,
	"./tet": 704,
	"./tet.js": 704,
	"./th": 705,
	"./th.js": 705,
	"./tl-ph": 706,
	"./tl-ph.js": 706,
	"./tlh": 707,
	"./tlh.js": 707,
	"./tr": 708,
	"./tr.js": 708,
	"./tzl": 709,
	"./tzl.js": 709,
	"./tzm": 711,
	"./tzm-latn": 710,
	"./tzm-latn.js": 710,
	"./tzm.js": 711,
	"./uk": 712,
	"./uk.js": 712,
	"./uz": 713,
	"./uz.js": 713,
	"./vi": 714,
	"./vi.js": 714,
	"./x-pseudo": 715,
	"./x-pseudo.js": 715,
	"./yo": 716,
	"./yo.js": 716,
	"./zh-cn": 717,
	"./zh-cn.js": 717,
	"./zh-hk": 718,
	"./zh-hk.js": 718,
	"./zh-tw": 719,
	"./zh-tw.js": 719
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 951;


/***/ }),

/***/ 975:
/***/ (function(module, exports) {

module.exports = "<div class=\"memberz form-container container-fluidx\" id=\"toolbar\">\n  <header [@fallIn]=\"state\">\n    <button (click)=\"logout()\" class=\"basic-btn\">Logout</button>\n    <button (click)=\"members()\" class=\"basic-btn\">Home</button>\n    <button (click)=\"favz()\" class=\"basic-btn\">Favorites</button>\n    <button (click)=\"about()\" class=\"basic-btn\">About</button>\n  </header>\n  <div id=\"mccheese_background\">\n    <!--<div id=\"page\" [@moveInLeft]=\"state\">-->\n    <div id=\"logo1\">\n      <img [@fallIn]=\"state\" id=logo src=\"assets/images/logo3.png\"/>\n    </div>\n    <!--<h2 class=\"banner\">Hey {{ name.auth.displayName || 'Friend' }}, Welcome to Git Grub! Enjoy the Recipes.</h2><br>-->\n    <!--</div>-->\n  </div>\n  <h2 [@moveInLeft]=\"state\" class=\"banner\">Hey {{ name.auth.displayName || 'Friend' }}, Welcome to Git Grub! Enjoy the\n    Recipes.</h2><br>\n\n  <div id=\"aboutme\">\n    <h3 [@moveInLeft]=\"state\"> Welcome to the about page.</h3>\n    <p [@fallIn]=\"state\">\n      This app was created by Austin Fashimpaur, Bryce Groesbeck and Kevin Kirkman.\n      This app is dedicated to our love of food.\n    </p><br>\n    <div class=\"scroll-me\">\n      <div>\n        <ul class=\"feedback\">\n          <li>\n            <blockquote>\"your app astonished me, looking like a good crafted and professional application. Also, details\n              are\n              important being able to login with google+ and graphics are looking attractive\" - NMA\n            </blockquote>\n          </li>\n          <br>\n          <li>\n            <blockquote>\"I really like this app it is user friendly and I like that I don't have to make up another\n              login\n              for it, I can just use my google login. The Images are great and I like the wide arrange of recipes that I\n              can use. I also liked the fact that I could save favorites and go to that list quickly. Very good app.\" -\n              JSN\n            </blockquote>\n          </li>\n          <br>\n          <li>\n            <blockquote>\"I like this app, it is something I can see myself using. I like that I can login however I want\n              and favorite things\" - JJG\n            </blockquote>\n          </li>\n          <br>\n          <li>\n            <blockquote>\"The interface and animations are attractive and modern while still feeling clean and\n              professional.\" - MBT\n            </blockquote>\n          </li>\n          <br>\n          <li>\n            <blockquote>\"Looks good, good job\" - CEW\n            </blockquote>\n          </li>\n          <li>\n            <blockquote>\"This looks like a tasteful site to use\" - CLP\n            </blockquote>\n          </li>\n          <li>\n            <blockquote>\"I liked the options to add to a Favorites list. The style and organization was great as well.\n              It seems well thought-out, and has practical use, especially with the option to save to a Favorites list,\n              for people wanting to keep track of recipes.\" - MJC Verified\n            </blockquote>\n          </li>\n          <li>\n            <blockquote>\n              \"I'd like some more tabs to be able to sort my food better even in my favorites tab id like a tab for each meal like breakfast and dinner but also an all tab or maybe even a random button to enjoy a random treat.\" - RKH\n            </blockquote>\n          </li>\n          <li>\n            <blockquote>\n              \"Actually very nicely done. I love the pictures. They entice me to want to try the recipes. I would only add a concordance to make it a little easier to find specific types of food. Nice job.\" - LB\n            </blockquote>\n          </li>\n          <li>\n            <blockquote>\n              \"I like it. It is visually pleasing and well laid out.\" - LWF\n            </blockquote>\n          </li>\n          <li>\n          <blockquote>\n          \"I like the site and it’s very user friendly, with recipes I would definitely make.\" - SS\n          </blockquote>\n        </li>\n          <li>\n            <blockquote>\n            \"A tasty photo greets the you at the login, but improvement to the main login to identify what this website is for is a must.  Within the website, a filter option with breakfast, lunch, dinner, snacks, and desserts as well as types of foods (e.g. Asian, BBQ, Mexican, etc.) would be the icing on this treat of a site \" An option to add your own recipe would be the extra seasoning this website needs. A great and useful idea for a page.  Selling advertising space for grocery stores near the user would be useful too, especially if the ingredients in a recipe could be automatically put into a shopping cart from a nearby store. - JPB\n            </blockquote>\n          </li>\n          <li>\n            <blockquote>\n            \"\"\n            </blockquote>\n          </li>\n          <li>\n            <blockquote>\n\n            </blockquote>\n          </li>\n          <li>\n            <blockquote>\n\n            </blockquote>\n          </li>\n\n\n        </ul>\n      </div>\n    </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ 976:
/***/ (function(module, exports) {

module.exports = "<div class=\"memberz form-container container-fluidx\" id=\"toolbar\">\n  <header [@fallIn]=\"state\">\n    <button (click)=\"logout()\" class=\"basic-btn\">Logout</button>\n    <button (click)=\"members()\" class=\"basic-btn\">Home</button>\n    <button (click)=\"favz()\" class=\"basic-btn\">Favorites</button>\n    <button (click)=\"about()\" class=\"basic-btn\">About</button>\n  </header>\n  <div id=\"mccheese_background\">\n    <!--<div id=\"page\" [@moveInLeft]=\"state\">-->\n    <div id=\"logo1\">\n      <img [@fallIn]=\"state\" id=logo src=\"assets/images/logo3.png\"/>\n    </div>\n\n  </div>\n  <h2 [@moveInLeft]=\"state\" class=\"banner\">Hey {{ name.auth.displayName || 'Friend' }}, Welcome to Git Grub! Enjoy the Favorites.</h2><br>\n\n  <!--content-->\n  <div class=\"scroll-me\">\n    <div class=\"center-me\">\n      <div class=\"wellz well col-sm-1 col-md-3\" [@fallIn]=\"state\" *ngFor=\"let recipe of recipes | async\">\n        <img class=\"pics\" src=\"{{ recipe.image_url }}\"/><br>\n        <div class=\"bottomPart\">\n          <h5 class=\"col-sm-9\"><a href=\"{{ recipe.source_url }}\" target=\"_blank\">{{ recipe.title }}</a></h5><br>\n          <span class=\"trash glyphicon glyphicon-trash col-sm-3\" title=\"Remove from Favorites\" (click)=\"removeFavs(recipe)\"></span>\n        </div>\n      </div>\n    </div>\n    <toaster-container></toaster-container>\n  </div>\n\n</div>\n\n"

/***/ }),

/***/ 977:
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n\n"

/***/ }),

/***/ 978:
/***/ (function(module, exports) {

module.exports = "<div class=\"form-container\">\n    <a routerLink=\"/login\" id=\"goback\">Go back</a>\n    <h2>Login with Email</h2>\n\n    <span class=\"error\" *ngIf=\"error\" [@fallIn]='state'>{{ error }}</span>\n\n    <form #formData='ngForm' (ngSubmit)=\"onSubmit(formData)\">\n\n      <input type=\"text\" placeholder=\"Email address...\" (ngModel)=\"email\" name=\"email\" class=\"txt\" required>\n      <input type=\"password\" placeholder=\"Password...\" (ngModel)=\"password\" name=\"password\" class=\"txt\" required>\n\n      <button type=\"submit\" [disabled]=\"!formData.valid\" class=\"basic-btn\">Log in</button>\n      <a routerLink=\"/signup\" class=\"alc\">Don't have an account?</a>\n  </form>\n</div>\n"

/***/ }),

/***/ 979:
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"form-container\">\n\n  <!--<h3 id=\"header\">Welcome to Git Grub!</h3>-->\n  <img class=\"logo\" src=\"assets/images/logo3.png\" id=\"logo\">\n  <img src=\"assets/images/avocado.gif\" id=\"mccheese\">\n\n    <span class=\"error\" *ngIf=\"error\">{{ error }}</span>\n\n  <button (click)=\"loginGoogle()\" id=\"google\">Login with Google</button>\n  <button routerLink=\"/login-email\" id=\"email\">Login with Email</button>\n\n  <a routerLink=\"/signup\" routerLinkActive=\"active\" class=\"alc\">No account? <strong>Create one here</strong></a>\n  <!--<p id=\"verified\">This App is MJC Verified</p>-->\n</div>\n"

/***/ }),

/***/ 980:
/***/ (function(module, exports) {

module.exports = "<div class=\"memberzx form-container container-fluidx\" id=\"toolbar\">\n  <header [@fallIn]=\"state\">\n    <button (click)=\"logout()\" class=\"basic-btn\">Logout</button>\n    <button (click)=\"members()\" class=\"basic-btn\">Home</button>\n    <button (click)=\"favz()\" class=\"basic-btn\">Favorites</button>\n    <button (click)=\"about()\" class=\"basic-btn\">About</button>\n  </header>\n  <div id=\"mccheese_background\">\n    <div id=\"logo1\">\n      <img [@fallIn]=\"state\" id=logo src=\"assets/images/logo3.png\"/>\n    </div>\n\n  </div>\n  <h2 [@moveInLeft]=\"state\" class=\"banner\">Hey {{ name.auth.displayName || name.auth.email  }}, Welcome to Git Grub! Enjoy the Recipes.</h2><br>\n  <div class=\"form-group\">\n    <input [@fallIn]=\"state\" type=\"text\" class=\"form-control\" id=\"userSearch\" required [(ngModel)]=\"userSearch\"\n           (keydown)=\"myFilter()\"\n           name=\"name\" placeholder=\"Search Recipes...\">\n  </div>\n\n  <!--content-->\n  <div class=\"scroll-me\">\n    <div class=\"center-me\">\n      <div class=\"wellz well col-sm-1 col-md-3\" [@moveInLeft]=\"state\" *ngFor=\"let recipe of filteredRec\">\n        <img class=\"pics\" src=\"{{ recipe.image_url }}\"/><br>\n        <div class=\"bottomPart\">\n          <h5 class=\"col-sm-9\"><a href=\"{{ recipe.source_url }}\" target=\"_blank\">{{ recipe.title }}</a></h5><br>\n\n          <span *ngIf=\"isFav(recipe)\" title=\"Remove Favorite\" class=\"gliph glyphicon glyphicon-heart col-sm-3\" (click)=\"removeFavs(recipe)\"></span>\n          <span *ngIf=\"!isFav(recipe)\" title=\"Add Favorite\" class=\"gliph glyphicon glyphicon-heart-empty col-sm-3\" (click)=\"addFavs(recipe)\"></span>\n\n        </div>\n      </div>\n    </div>\n    <toaster-container></toaster-container>\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ 981:
/***/ (function(module, exports) {

module.exports = "<div class=\"form-container\">\n  <a routerLink=\"/login\" id=\"goback\">Go back</a>\n\n  <h2>Join now</h2>\n\n  <span class=\"error\" *ngIf=\"error\" [@fallIn]='state'>{{ error }}</span>\n    \n  <form #formData='ngForm' (ngSubmit)=\"onSubmit(formData)\">\n\n    <input type=\"text\" placeholder=\"Email address..\" (ngModel)=\"email\" name=\"email\" class=\"txt\" required>\n    <input type=\"password\" placeholder=\"Password\" (ngModel)=\"password\" name=\"password\" class=\"txt\" required>\n\n    <button type=\"submit\" [disabled]=\"!formData.valid\" class=\"basic-btn\">Create my account</button>\n  </form>\n</div>"

/***/ })

},[1240]);
//# sourceMappingURL=main.bundle.js.map