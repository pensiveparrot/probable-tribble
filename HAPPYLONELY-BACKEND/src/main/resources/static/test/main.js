"use strict";
(self["webpackChunktest"] = self["webpackChunktest"] || []).push([["main"],{

/***/ 4976:
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminComponent: () => (/* binding */ AdminComponent)
/* harmony export */ });
/* harmony import */ var C_Users_dillo_Documents_probable_tribble_HAPPYLONELY_FRONTEND_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 6196);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _shop_product_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shop/product/product.service */ 1637);
/* harmony import */ var _common_service_userservice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/service/userservice */ 2744);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/button */ 9136);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/inputtext */ 8361);
/* harmony import */ var primeng_messages__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/messages */ 1564);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/dropdown */ 6895);











function AdminComponent_p_messages_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p-messages", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("valueChange", function AdminComponent_p_messages_0_Template_p_messages_valueChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r4.errorMsg = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx_r0.errorMsg)("enableService", false)("closable", false);
  }
}
function AdminComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "form", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function AdminComponent_div_7_Template_form_ngSubmit_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r6.updateProduct());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2)(3, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Name:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function AdminComponent_div_7_Template_input_ngModelChange_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r8.product.productname = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 2)(7, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Price:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "p-inputNumber", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function AdminComponent_div_7_Template_p_inputNumber_ngModelChange_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r9.product.price = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 2)(11, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Image URL:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function AdminComponent_div_7_Template_input_ngModelChange_13_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r10.product.image = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 2)(15, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Inventory Status:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "p-dropdown", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function AdminComponent_div_7_Template_p_dropdown_ngModelChange_17_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r11.product.inventorystatus = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 2)(19, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Shop Link:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function AdminComponent_div_7_Template_input_ngModelChange_21_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r12.product.shoplink = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](22, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r1.product.productname);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r1.product.price);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r1.product.image);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r1.product.inventorystatus)("options", ctx_r1.inventoryStatusOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r1.product.shoplink);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("label", ctx_r1.buttonLabel);
  }
}
function AdminComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 2)(1, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AdminComponent_div_8_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r14);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r13.onCreateButtonPressed());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function AdminComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "form", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function AdminComponent_div_9_Template_form_ngSubmit_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r16);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r15.createProduct());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2)(3, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Name:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function AdminComponent_div_9_Template_input_ngModelChange_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r16);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r17.product.productname = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 2)(7, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Price:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "p-inputNumber", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function AdminComponent_div_9_Template_p_inputNumber_ngModelChange_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r16);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r18.product.price = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 2)(11, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Image URL:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function AdminComponent_div_9_Template_input_ngModelChange_13_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r16);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r19.product.image = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 2)(15, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Inventory Status:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "p-dropdown", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function AdminComponent_div_9_Template_p_dropdown_ngModelChange_17_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r16);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r20.product.inventorystatus = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 2)(19, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Shop Link:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function AdminComponent_div_9_Template_input_ngModelChange_21_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r16);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r21.product.shoplink = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](22, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r3.product.productname);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r3.product.price);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r3.product.image);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r3.product.inventorystatus)("options", ctx_r3.inventoryStatusOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r3.product.shoplink);
  }
}
class AdminComponent {
  constructor(productService, userService) {
    this.productService = productService;
    this.userService = userService;
    this.errorMsgDetail = "";
    this.bFindClicked = false;
    this.bCreateClicked = false;
    this.errorMsg = [];
    this.statusCode = 0;
    this.product = {
      id: "",
      productname: "",
      price: 0,
      image: "",
      inventorystatus: "",
      shoplink: ""
    };
    this.user = {
      id: "",
      username: "",
      statusmsg: "",
      profileimg: ""
    };
    this.inventoryStatusOptions = [{
      label: 'In Stock',
      value: 'INSTOCK'
    }, {
      label: 'Low Stock',
      value: 'LOWSTOCK'
    }, {
      label: 'Out of Stock',
      value: 'OUTOFSTOCK'
    }];
  }
  get buttonLabel() {
    return `Update: ${this.product.productname}`;
  }
  getProductByName() {
    var _this = this;
    return (0,C_Users_dillo_Documents_probable_tribble_HAPPYLONELY_FRONTEND_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.bFindClicked = true;
      _this.bCreateClicked = false;
      try {
        const response = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.firstValueFrom)(_this.productService.getProductByName(_this.product.productname));
        _this.statusCode = response.status;
        if (_this.statusCode === 200) {
          _this.product = response.body;
          console.log("product: ", _this.product);
        } else {
          if (_this.errorMsg.length > 0) _this.errorMsg.pop();
          _this.errorMsgDetail = "Error getting product with name: " + _this.product.productname + ".  Response code: " + _this.statusCode;
          _this.errorMsg.push({
            severity: 'error',
            summary: 'Error',
            detail: _this.errorMsgDetail
          });
        }
        console.log("status: ", _this.statusCode);
      } catch (error) {
        console.error(error);
      }
    })();
  }
  onCreateButtonPressed() {
    this.bCreateClicked = true;
    this.bFindClicked = false;
  }
  createProduct() {
    var _this2 = this;
    return (0,C_Users_dillo_Documents_probable_tribble_HAPPYLONELY_FRONTEND_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const response = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.firstValueFrom)(_this2.productService.addProduct(_this2.product));
        _this2.statusCode = response.status;
        if (_this2.statusCode === 200) {
          _this2.product = response.body;
          console.log("product: ", _this2.product);
        } else {
          if (_this2.errorMsg.length > 0) _this2.errorMsg.pop();
          _this2.errorMsgDetail = "Error adding product with name: " + _this2.product.productname + ".  Response code: " + _this2.statusCode;
          _this2.errorMsg.push({
            severity: 'error',
            summary: 'Error',
            detail: _this2.errorMsgDetail
          });
        }
        console.log("status code:", _this2.statusCode);
      } catch (error) {
        console.error(error);
      }
    })();
  }
  updateProduct() {
    var _this3 = this;
    return (0,C_Users_dillo_Documents_probable_tribble_HAPPYLONELY_FRONTEND_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const response = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.firstValueFrom)(_this3.productService.updateProduct(_this3.product));
        _this3.statusCode = response.status;
        if (_this3.statusCode === 200) {
          _this3.product = response.body;
          console.log("product: ", _this3.product);
        } else {
          if (_this3.errorMsg.length > 0) _this3.errorMsg.pop();
          _this3.errorMsgDetail = "Error updating product with id: " + _this3.product.id + ".  Response code: " + _this3.statusCode;
          _this3.errorMsg.push({
            severity: 'error',
            summary: 'Error',
            detail: _this3.errorMsgDetail
          });
        }
      } catch (error) {
        console.error(error);
      }
    })();
  }
  addProduct() {
    var _this4 = this;
    return (0,C_Users_dillo_Documents_probable_tribble_HAPPYLONELY_FRONTEND_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const response = (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.firstValueFrom)(_this4.productService.addProduct(_this4.product));
        _this4.statusCode = response.status;
        if (_this4.statusCode === 200) {
          _this4.product = response.body;
          console.log("product: ", _this4.product);
        } else {
          if (_this4.errorMsg.length > 0) _this4.errorMsg.pop();
          _this4.errorMsgDetail = "Error adding product with name: " + _this4.product.productname + ".  Response code: " + _this4.statusCode;
          _this4.errorMsg.push({
            severity: 'error',
            summary: 'Error',
            detail: _this4.errorMsgDetail
          });
        }
      } catch (error) {
        console.error(error);
      }
    })();
  }
  deleteUser() {
    var _this5 = this;
    return (0,C_Users_dillo_Documents_probable_tribble_HAPPYLONELY_FRONTEND_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const response = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.firstValueFrom)(_this5.userService.deleteUser(_this5.user.id));
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    })();
  }
  updateUser() {
    try {
      const response = (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.firstValueFrom)(this.userService.updateUser(this.user));
      this.statusCode = response.status;
      if (this.statusCode === 200) {
        this.user = response.body;
        console.log("user: ", this.user);
      } else {
        if (this.errorMsg.length > 0) this.errorMsg.pop();
        this.errorMsgDetail = "Error updating user with id: " + this.user.id + ".  Response code: " + this.statusCode;
        this.errorMsg.push({
          severity: 'error',
          summary: 'Error',
          detail: this.errorMsgDetail
        });
      }
      console.log("status: ", this.statusCode);
    } catch (error) {
      console.error(error);
    }
  }
  banUser() {
    var _this6 = this;
    return (0,C_Users_dillo_Documents_probable_tribble_HAPPYLONELY_FRONTEND_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const response = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.firstValueFrom)(_this6.userService.banUser(_this6.user));
        _this6.statusCode = response.status;
        if (_this6.statusCode === 200) {
          _this6.user = response.body;
          console.log("user: ", _this6.user);
        } else {
          if (_this6.errorMsg.length > 0) _this6.errorMsg.pop();
          _this6.errorMsgDetail = "Error banning user with id: " + _this6.user.id + ".  Response code: " + _this6.statusCode;
          _this6.errorMsg.push({
            severity: 'error',
            summary: 'Error',
            detail: _this6.errorMsgDetail
          });
        }
        console.log("status: ", _this6.statusCode);
      } catch (error) {
        console.error(error);
      }
    })();
  }
  unbanUser() {
    var _this7 = this;
    return (0,C_Users_dillo_Documents_probable_tribble_HAPPYLONELY_FRONTEND_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const response = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.firstValueFrom)(_this7.userService.unbanUser(_this7.user));
        _this7.statusCode = response.status;
        if (_this7.statusCode === 200) {
          _this7.user = response.body;
          console.log("user: ", _this7.user);
        } else {
          if (_this7.errorMsg.length > 0) _this7.errorMsg.pop();
          _this7.errorMsgDetail = "Error adding product with name: " + _this7.product.productname + ".  Response code: " + _this7.statusCode;
          _this7.errorMsg.push({
            severity: 'error',
            summary: 'Error',
            detail: _this7.errorMsgDetail
          });
        }
        console.log("status: ", _this7.statusCode);
      } catch (error) {
        console.error(error);
      }
    })();
  }
  deleteProduct() {
    var _this8 = this;
    return (0,C_Users_dillo_Documents_probable_tribble_HAPPYLONELY_FRONTEND_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const response = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.firstValueFrom)(_this8.productService.deleteProduct(_this8.product.id));
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    })();
  }
  static #_ = this.ɵfac = function AdminComponent_Factory(t) {
    return new (t || AdminComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_shop_product_product_service__WEBPACK_IMPORTED_MODULE_1__.ProductService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_common_service_userservice__WEBPACK_IMPORTED_MODULE_2__.UserService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: AdminComponent,
    selectors: [["app-admin"]],
    decls: 10,
    vars: 5,
    consts: [[3, "value", "enableService", "closable", "valueChange", 4, "ngIf"], [1, "p-fluid"], [1, "p-field"], [3, "ngSubmit"], [1, "p-inputgroup"], ["name", "productname", "pInputText", "", "placeholder", "Enter product name", 3, "ngModel", "ngModelChange"], ["pButton", "", "label", "Find Product", "type", "submit", "icon", "pi pi-search", "styleClass", "p-button-primary"], [4, "ngIf"], ["class", "p-field", 4, "ngIf"], [3, "value", "enableService", "closable", "valueChange"], ["for", "productname", 1, "p-label"], ["id", "productname", "name", "productname", "pInputText", "", 3, "ngModel", "ngModelChange"], ["for", "price", 1, "p-label"], ["id", "price", "name", "price", "mode", "currency", "currency", "USD", "locale", "en-US", 3, "ngModel", "ngModelChange"], ["for", "image", 1, "p-label"], ["id", "image", "name", "image", "pInputText", "", 3, "ngModel", "ngModelChange"], ["for", "inventorystatus", 1, "p-label"], ["id", "inventorystatus", "name", "inventorystatus", "optionLabel", "label", "optionValue", "value", 3, "ngModel", "options", "ngModelChange"], ["for", "shoplink", 1, "p-label"], ["id", "shoplink", "name", "shoplink", "pInputText", "", 3, "ngModel", "ngModelChange"], ["pButton", "", "type", "submit", "icon", "pi pi-save", "styleClass", "p-button-success", 3, "label"], ["pButton", "", "label", "Create Product", "icon", "pi pi-plus", "styleClass", "p-button-secondary", 3, "click"], ["pButton", "", "label", "Create Product", "type", "submit", "icon", "pi pi-plus", "styleClass", "p-button-success"]],
    template: function AdminComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, AdminComponent_p_messages_0_Template, 1, 3, "p-messages", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function AdminComponent_Template_form_ngSubmit_3_listener() {
          return ctx.getProductByName();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 4)(5, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function AdminComponent_Template_input_ngModelChange_5_listener($event) {
          return ctx.product.productname = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, AdminComponent_div_7_Template, 23, 7, "div", 7)(8, AdminComponent_div_8_Template, 2, 0, "div", 8)(9, AdminComponent_div_9_Template, 23, 6, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.statusCode > 0 && ctx.statusCode !== 200);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.product.productname);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.product.id && ctx.bFindClicked && ctx.bCreateClicked === false);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.bCreateClicked === false && ctx.bFindClicked === false);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.bCreateClicked && ctx.bFindClicked === false);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, primeng_button__WEBPACK_IMPORTED_MODULE_6__.ButtonDirective, primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__.InputText, primeng_messages__WEBPACK_IMPORTED_MODULE_8__.Messages, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgForm, primeng_dropdown__WEBPACK_IMPORTED_MODULE_10__.Dropdown],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 4114:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _art_art_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./art/art.component */ 8388);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.component */ 5443);
/* harmony import */ var _shop_shop_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shop/shop.component */ 5558);
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin/admin.component */ 4976);
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user/user.component */ 1828);
/* harmony import */ var _youtube_dl_youtube_dl_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./youtube-dl/youtube-dl.component */ 1897);
/* harmony import */ var _thread_list_thread_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./thread-list/thread-list.component */ 7720);
/* harmony import */ var _thread_create_thread_create_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./thread-create/thread-create.component */ 2552);
/* harmony import */ var _thread_detail_thread_detail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./thread-detail/thread-detail.component */ 8551);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./login/login.component */ 3644);
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./register/register.component */ 600);
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./auth.guard */ 2193);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./header/header.component */ 2152);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 7580);
















const routes = [{
  path: '',
  redirectTo: 'login',
  pathMatch: 'full'
}, {
  path: 'login',
  component: _login_login_component__WEBPACK_IMPORTED_MODULE_9__.LoginComponent
}, {
  path: 'register',
  component: _register_register_component__WEBPACK_IMPORTED_MODULE_10__.RegisterComponent
}, {
  path: 'home',
  component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__.HomeComponent,
  canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_11__.authGuard]
}, {
  path: 'art',
  component: _art_art_component__WEBPACK_IMPORTED_MODULE_0__.ArtComponent,
  canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_11__.authGuard]
}, {
  path: 'shop',
  component: _shop_shop_component__WEBPACK_IMPORTED_MODULE_2__.ShopComponent,
  canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_11__.authGuard]
}, {
  path: 'user',
  component: _user_user_component__WEBPACK_IMPORTED_MODULE_4__.UserComponent,
  canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_11__.authGuard]
}, {
  path: 'admin',
  component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_3__.AdminComponent,
  canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_11__.authGuard]
}, {
  path: 'youtube-dl',
  component: _youtube_dl_youtube_dl_component__WEBPACK_IMPORTED_MODULE_5__.YoutubeDLComponent,
  canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_11__.authGuard]
}, {
  path: 'threads',
  component: _thread_list_thread_list_component__WEBPACK_IMPORTED_MODULE_6__.ThreadListComponent,
  canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_11__.authGuard]
}, {
  path: 'create-thread',
  component: _thread_create_thread_create_component__WEBPACK_IMPORTED_MODULE_7__.ThreadCreateComponent,
  canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_11__.authGuard]
}, {
  path: 'thread/:id',
  component: _thread_detail_thread_detail_component__WEBPACK_IMPORTED_MODULE_8__.ThreadDetailComponent,
  canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_11__.authGuard]
}, {
  path: 'header',
  component: _header_header_component__WEBPACK_IMPORTED_MODULE_12__.HeaderComponent,
  canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_11__.authGuard]
}, {
  path: "**",
  redirectTo: "login"
}];
class AppRoutingModule {
  static #_ = this.ɵfac = function AppRoutingModule_Factory(t) {
    return new (t || AppRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({
    type: AppRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule.forRoot(routes, {
      useHash: true
    }), _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule]
  });
})();

/***/ }),

/***/ 92:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _common_service_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common/service/auth.service */ 6055);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/header.component */ 2152);




function AppComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-header");
  }
}
class AppComponent {
  constructor(auth, router) {
    this.auth = auth;
    this.router = router;
  }
  userAuthenticated() {
    return this.auth.loggedIn();
  }
  static #_ = this.ɵfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_common_service_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    decls: 3,
    vars: 1,
    consts: [[1, "main-content"]],
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, AppComponent_Conditional_0_Template, 1, 0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](0, ctx.userAuthenticated() ? 0 : -1);
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, _header_header_component__WEBPACK_IMPORTED_MODULE_1__.HeaderComponent],
    styles: [".main-content[_ngcontent-%COMP%] {\n    padding-left: 80px;\n    \n\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsd0RBQXdEO0FBQzVEIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4tY29udGVudCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDgwcHg7XHJcbiAgICAvKiBBZGp1c3QgdGhpcyB2YWx1ZSBiYXNlZCBvbiB0aGUgd2lkdGggb2YgeW91ciBoZWFkZXIgKi9cclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 635:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule),
/* harmony export */   tokenGetter: () => (/* binding */ tokenGetter)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 4114);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 92);
/* harmony import */ var _art_art_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./art/art.component */ 8388);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ 5443);
/* harmony import */ var primeng_menu__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/menu */ 6054);
/* harmony import */ var primeng_image__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/image */ 6971);
/* harmony import */ var primeng_galleria__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/galleria */ 4747);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! primeng/dialog */ 6280);
/* harmony import */ var _shop_shop_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shop/shop.component */ 5558);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! primeng/button */ 9136);
/* harmony import */ var primeng_carousel__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! primeng/carousel */ 4178);
/* harmony import */ var primeng_tag__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! primeng/tag */ 3616);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! primeng/inputtext */ 8361);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./admin/admin.component */ 4976);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var primeng_messages__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! primeng/messages */ 1564);
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! primeng/inputtextarea */ 7058);
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user/user.component */ 1828);
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! primeng/card */ 1486);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3835);
/* harmony import */ var _youtube_dl_youtube_dl_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./youtube-dl/youtube-dl.component */ 1897);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! primeng/dropdown */ 6895);
/* harmony import */ var primeng_fileupload__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! primeng/fileupload */ 3209);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! primeng/table */ 6676);
/* harmony import */ var _thread_list_thread_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./thread-list/thread-list.component */ 7720);
/* harmony import */ var _thread_detail_thread_detail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./thread-detail/thread-detail.component */ 8551);
/* harmony import */ var _thread_create_thread_create_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./thread-create/thread-create.component */ 2552);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./login/login.component */ 3644);
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./register/register.component */ 600);
/* harmony import */ var primeng_toolbar__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! primeng/toolbar */ 1973);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/toast */ 1225);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./header/header.component */ 2152);
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @auth0/angular-jwt */ 2389);
/* harmony import */ var primeng_message__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! primeng/message */ 9605);
/* harmony import */ var primeng_rating__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/rating */ 3015);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 7580);







































function tokenGetter() {
  return localStorage.getItem('token');
}
class AppModule {
  static #_ = this.ɵfac = function AppModule_Factory(t) {
    return new (t || AppModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineNgModule"]({
    type: AppModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineInjector"]({
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, primeng_toast__WEBPACK_IMPORTED_MODULE_16__.ToastModule, primeng_image__WEBPACK_IMPORTED_MODULE_17__.ImageModule, primeng_menu__WEBPACK_IMPORTED_MODULE_18__.MenuModule, primeng_rating__WEBPACK_IMPORTED_MODULE_19__.RatingModule, primeng_galleria__WEBPACK_IMPORTED_MODULE_20__.GalleriaModule, primeng_dialog__WEBPACK_IMPORTED_MODULE_21__.DialogModule, primeng_button__WEBPACK_IMPORTED_MODULE_22__.ButtonModule, primeng_carousel__WEBPACK_IMPORTED_MODULE_23__.CarouselModule, primeng_tag__WEBPACK_IMPORTED_MODULE_24__.TagModule, primeng_message__WEBPACK_IMPORTED_MODULE_25__.MessageModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_26__.InputTextModule, primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_27__.InputTextareaModule, primeng_messages__WEBPACK_IMPORTED_MODULE_28__.MessagesModule, primeng_card__WEBPACK_IMPORTED_MODULE_29__.CardModule, _angular_forms__WEBPACK_IMPORTED_MODULE_30__.FormsModule, primeng_dropdown__WEBPACK_IMPORTED_MODULE_31__.DropdownModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_32__.BrowserAnimationsModule, primeng_fileupload__WEBPACK_IMPORTED_MODULE_33__.FileUploadModule, primeng_table__WEBPACK_IMPORTED_MODULE_34__.TableModule, primeng_toolbar__WEBPACK_IMPORTED_MODULE_35__.ToolbarModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_36__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_30__.ReactiveFormsModule, _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_37__.JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ['https://localhost:8443'] // replace with your API domain
      }
    })]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _art_art_component__WEBPACK_IMPORTED_MODULE_2__.ArtComponent, _home_home_component__WEBPACK_IMPORTED_MODULE_3__.HomeComponent, _shop_shop_component__WEBPACK_IMPORTED_MODULE_4__.ShopComponent, _admin_admin_component__WEBPACK_IMPORTED_MODULE_5__.AdminComponent, _user_user_component__WEBPACK_IMPORTED_MODULE_6__.UserComponent, _youtube_dl_youtube_dl_component__WEBPACK_IMPORTED_MODULE_7__.YoutubeDLComponent, _thread_list_thread_list_component__WEBPACK_IMPORTED_MODULE_8__.ThreadListComponent, _thread_detail_thread_detail_component__WEBPACK_IMPORTED_MODULE_9__.ThreadDetailComponent, _thread_create_thread_create_component__WEBPACK_IMPORTED_MODULE_10__.ThreadCreateComponent, _login_login_component__WEBPACK_IMPORTED_MODULE_11__.LoginComponent, _register_register_component__WEBPACK_IMPORTED_MODULE_12__.RegisterComponent, _header_header_component__WEBPACK_IMPORTED_MODULE_13__.HeaderComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, primeng_toast__WEBPACK_IMPORTED_MODULE_16__.ToastModule, primeng_image__WEBPACK_IMPORTED_MODULE_17__.ImageModule, primeng_menu__WEBPACK_IMPORTED_MODULE_18__.MenuModule, primeng_rating__WEBPACK_IMPORTED_MODULE_19__.RatingModule, primeng_galleria__WEBPACK_IMPORTED_MODULE_20__.GalleriaModule, primeng_dialog__WEBPACK_IMPORTED_MODULE_21__.DialogModule, primeng_button__WEBPACK_IMPORTED_MODULE_22__.ButtonModule, primeng_carousel__WEBPACK_IMPORTED_MODULE_23__.CarouselModule, primeng_tag__WEBPACK_IMPORTED_MODULE_24__.TagModule, primeng_message__WEBPACK_IMPORTED_MODULE_25__.MessageModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_26__.InputTextModule, primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_27__.InputTextareaModule, primeng_messages__WEBPACK_IMPORTED_MODULE_28__.MessagesModule, primeng_card__WEBPACK_IMPORTED_MODULE_29__.CardModule, _angular_forms__WEBPACK_IMPORTED_MODULE_30__.FormsModule, primeng_dropdown__WEBPACK_IMPORTED_MODULE_31__.DropdownModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_32__.BrowserAnimationsModule, primeng_fileupload__WEBPACK_IMPORTED_MODULE_33__.FileUploadModule, primeng_table__WEBPACK_IMPORTED_MODULE_34__.TableModule, primeng_toolbar__WEBPACK_IMPORTED_MODULE_35__.ToolbarModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_36__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_30__.ReactiveFormsModule, _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_37__.JwtModule]
  });
})();

/***/ }),

/***/ 8388:
/*!**************************************!*\
  !*** ./src/app/art/art.component.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ArtComponent: () => (/* binding */ ArtComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/api */ 7780);
/* harmony import */ var primeng_galleria__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/galleria */ 4747);



function ArtComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 7)(3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r2.itemImageSrc, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", item_r2.alt);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r2.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r2.description);
  }
}
function ArtComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r3.thumbnailImageSrc, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", item_r3.alt);
  }
}
class ArtComponent {
  constructor() {
    this.images = [{
      previewImageSrc: '../../assets/1.jpg',
      thumbnailImageSrc: '../../assets/1.jpg',
      alt: 'Description for Image 1',
      title: '1'
    }, {
      previewImageSrc: '../../assets/2.jpg',
      thumbnailImageSrc: '../../assets/2.jpg',
      alt: 'Description for Image 2',
      title: '2'
    }, {
      previewImageSrc: '../../assets/3.jpg',
      thumbnailImageSrc: '../../assets/3.jpg',
      alt: 'Description for Image 3',
      title: '3'
    }, {
      previewImageSrc: '../../assets/4.jpg',
      thumbnailImageSrc: '../../assets/4.jpg',
      alt: 'Description for Image 4',
      title: '4'
    }, {
      previewImageSrc: '../../assets/5.jpg',
      thumbnailImageSrc: '../../assets/5.jpg',
      alt: 'Description for Image 5',
      title: '5'
    }, {
      previewImageSrc: '../../assets/6.jpg',
      thumbnailImageSrc: '../../assets/6.jpg',
      alt: 'Description for Image 6',
      title: '6'
    }, {
      previewImageSrc: '../../assets/7.jpg',
      thumbnailImageSrc: '../../assets/7.jpg',
      alt: 'Description for Image 7',
      title: '7'
    }, {
      previewImageSrc: '../../assets/8.jpg',
      thumbnailImageSrc: '../../assets/8.jpg',
      alt: 'Description for Image 8',
      title: '8'
    }, {
      previewImageSrc: '../../assets/9.jpg',
      thumbnailImageSrc: '../../assets/9.jpg',
      alt: 'Description for Image 9',
      title: '9'
    }, {
      previewImageSrc: '../../assets/10.jpg',
      thumbnailImageSrc: '../../assets/10.jpg',
      alt: 'Description for Image 10',
      title: '10'
    }, {
      previewImageSrc: '../../assets/11.jpg',
      thumbnailImageSrc: '../../assets/11.jpg',
      alt: 'Description for Image 11',
      title: '11'
    }, {
      previewImageSrc: '../../assets/12.jpg',
      thumbnailImageSrc: '../../assets/12.jpg',
      alt: 'Description for Image 12',
      title: '12'
    }, {
      previewImageSrc: '../../assets/13.jpg',
      thumbnailImageSrc: '../../assets/13.jpg',
      alt: 'Description for Image 13',
      title: '13'
    }, {
      previewImageSrc: '../../assets/14.jpg',
      thumbnailImageSrc: '../../assets/14.jpg',
      alt: 'Description for Image 14',
      title: '14'
    }, {
      previewImageSrc: '../../assets/15.jpg',
      thumbnailImageSrc: '../../assets/15.jpg',
      alt: 'Description for Image 15',
      title: '15'
    }, {
      previewImageSrc: '../../assets/16.jpg',
      thumbnailImageSrc: '../../assets/16.jpg',
      alt: 'Description for Image 16',
      title: '16'
    }, {
      previewImageSrc: '../../assets/17.jpg',
      thumbnailImageSrc: '../../assets/17.jpg',
      alt: 'Description for Image 17',
      title: '17'
    }, {
      previewImageSrc: '../../assets/18.jpg',
      thumbnailImageSrc: '../../assets/18.jpg',
      alt: 'Description for Image 18',
      title: '18'
    }];
  }
  ngOnInit() {}
  static #_ = this.ɵfac = function ArtComponent_Factory(t) {
    return new (t || ArtComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ArtComponent,
    selectors: [["app-art"]],
    decls: 6,
    vars: 7,
    consts: [[1, "artPage"], [1, "pageTitle"], [3, "value", "numVisible", "showThumbnails", "showItemNavigators", "showItemNavigatorsOnHover", "autoPlay", "transitionInterval"], ["pTemplate", "item"], ["pTemplate", "thumbnail"], [1, "artItem"], [1, "artImgs", 3, "src", "alt"], [1, "artCaption"], [1, "grid", "grid-nogutter", "justify-content-center"], [3, "src", "alt"]],
    template: function ArtComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Art Gallery");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p-galleria", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ArtComponent_ng_template_4_Template, 7, 4, "ng-template", 3)(5, ArtComponent_ng_template_5_Template, 2, 2, "ng-template", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.images)("numVisible", 1)("showThumbnails", true)("showItemNavigators", false)("showItemNavigatorsOnHover", false)("autoPlay", false)("transitionInterval", 3000);
      }
    },
    dependencies: [primeng_api__WEBPACK_IMPORTED_MODULE_1__.PrimeTemplate, primeng_galleria__WEBPACK_IMPORTED_MODULE_2__.Galleria],
    styles: [".artPage[_ngcontent-%COMP%] {\n    text-align: center;\n    padding: 20px;\n}\n\n.pageTitle[_ngcontent-%COMP%] {\n    font-size: 24px;\n    margin-bottom: 20px;\n}\n\n.artItem[_ngcontent-%COMP%] {\n    position: relative;\n}\n\n.artImgs[_ngcontent-%COMP%] {\n    max-width: 100%;\n    height: auto;\n    border-radius: 5px;\n    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);\n}\n\n\n.artImg[_ngcontent-%COMP%] {\n    max-width: 100%;\n    max-height: 100%;\n    object-fit: contain;\n}\n\n.artCaption[_ngcontent-%COMP%] {\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    background-color: rgba(0, 0, 0, 0.7);\n    color: #fff;\n    padding: 10px;\n    text-align: left;\n    opacity: 0;\n    transition: opacity 0.3s ease-in-out;\n}\n\n.artItem[_ngcontent-%COMP%]:hover   .artCaption[_ngcontent-%COMP%] {\n    opacity: 1;\n}\n\n.artCaption[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 18px;\n    margin-bottom: 5px;\n}\n\n.artCaption[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXJ0L2FydC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsd0NBQXdDO0FBQzVDOzs7QUFHQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxPQUFPO0lBQ1AsUUFBUTtJQUNSLG9DQUFvQztJQUNwQyxXQUFXO0lBQ1gsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixVQUFVO0lBQ1Ysb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGVBQWU7QUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyIuYXJ0UGFnZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcblxyXG4ucGFnZVRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi5hcnRJdGVtIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmFydEltZ3Mge1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAycHggNnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxufVxyXG5cclxuXHJcbi5hcnRJbWcge1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LWhlaWdodDogMTAwJTtcclxuICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XHJcbn1cclxuXHJcbi5hcnRDYXB0aW9uIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4uYXJ0SXRlbTpob3ZlciAuYXJ0Q2FwdGlvbiB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4uYXJ0Q2FwdGlvbiBoMyB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbn1cclxuXHJcbi5hcnRDYXB0aW9uIHAge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}
;

/***/ }),

/***/ 2193:
/*!*******************************!*\
  !*** ./src/app/auth.guard.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   authGuard: () => (/* binding */ authGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _common_service_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common/service/auth.service */ 6055);


const authGuard = (route, state) => {
  const authService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_common_service_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService);
  if (authService.loggedIn()) {
    return true;
  } else {
    return false;
  }
};

/***/ }),

/***/ 6055:
/*!************************************************!*\
  !*** ./src/app/common/service/auth.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthService: () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);




class AuthService {
  constructor(http, route) {
    this.http = http;
    this.route = route;
    this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({/* other headers if needed */});
    this.options = {
      headers: this.headers,
      withCredentials: true
    };
    this.router = route;
  }
  getUserRole() {
    return this.http.get(`https://${window.location.hostname}:8443/api/user/getUserRole`, {
      withCredentials: true
    });
  }
  loggedIn() {
    return (localStorage.getItem('token') ?? '').length > 0;
  }
  static #_ = this.ɵfac = function AuthService_Factory(t) {
    return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: AuthService,
    factory: AuthService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 6666:
/*!*************************************************!*\
  !*** ./src/app/common/service/forum.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ForumService: () => (/* binding */ ForumService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 6443);


class ForumService {
  constructor(http) {
    this.http = http;
    this.currentThreadId = "";
  }
  addPost(post) {
    return this.http.post(`https://${window.location.hostname}:8443/api/forum/addPost`, post, {
      observe: 'response',
      withCredentials: true
    });
  }
  addThread(thread) {
    return this.http.post(`https://${window.location.hostname}:8443/api/forum/addThread`, thread, {
      observe: 'response',
      withCredentials: true
    });
  }
  fetchThreadsList() {
    return this.http.get(`https://${window.location.hostname}:8443/api/forum/getThreads`, {
      observe: 'response',
      withCredentials: true
    });
  }
  isOwnerOrModerator(senderId) {
    return this.http.get(`https://${window.location.hostname}:8443/api/forum/isOwnerOrModerator/${senderId}`, {
      observe: 'response',
      withCredentials: true
    });
  }
  getThreadById(id) {
    return this.http.get(`https://${window.location.hostname}:8443/api/forum/getThreadById/${id}`, {
      observe: 'response',
      withCredentials: true
    });
  }
  addProfileComment(comment) {
    return this.http.post(`https://${window.location.hostname}:8443/api/forum/addProfileComment`, comment, {
      observe: 'response',
      withCredentials: true
    });
  }
  addCredits(credits) {
    return this.http.post(`https://${window.location.hostname}:8443/api/forum/addCredits`, credits, {
      observe: 'response',
      withCredentials: true
    });
  }
  getPostsByThreadId(id) {
    return this.http.get(`https://${window.location.hostname}:8443/api/forum/getPostsByThreadId/${id}`, {
      observe: 'response',
      withCredentials: true
    });
  }
  static #_ = this.ɵfac = function ForumService_Factory(t) {
    return new (t || ForumService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: ForumService,
    factory: ForumService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 2744:
/*!***********************************************!*\
  !*** ./src/app/common/service/userservice.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserService: () => (/* binding */ UserService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);



class UserService {
  constructor(http) {
    this.http = http;
    this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({/* other headers if needed */});
    this.options = {
      headers: this.headers,
      withCredentials: true
    };
  }
  isAuthenticated() {
    return this.http.get("https://" + window.location.hostname + ":8443/" + "api/user/isAuthenticated", {
      observe: 'response',
      withCredentials: true
    });
  }
  changeEmail(hlUser) {
    return this.http.put(`https://${window.location.hostname}:8443/api/user/changeEmail`, hlUser, this.options);
  }
  getUserById(userId) {
    return this.http.get(`https://${window.location.hostname}:8443/api/user/getUserById/${userId}`, this.options);
  }
  getUser() {
    return this.http.get("https://" + window.location.hostname + ":8443/" + "api/user/getUserByUsername", {
      observe: 'response',
      withCredentials: true
    });
  }
  editUser(user) {
    return this.http.post("https://" + window.location.hostname + ":8443/" + "api/user/editUser", user, {
      observe: 'response',
      withCredentials: true
    });
  }
  addArt(art) {
    return this.http.post("https://" + window.location.hostname + ":8443/" + "api/art/addArt", art, {
      observe: 'response',
      withCredentials: true
    });
  }
  uploadArt(file, artName, artAuthor) {
    const apiUrl = `https://${window.location.hostname}:8443/api/art/uploadArt`;
    const formData = new FormData();
    formData.append('file', file);
    formData.append('artName', artName);
    formData.append('artAuthor', artAuthor);
    return this.http.post(apiUrl, formData, {
      observe: 'response',
      responseType: 'text',
      withCredentials: true
    });
  }
  deleteUser(userId) {
    return this.http.delete(`https://${window.location.hostname}:8443/api/user/deleteUser/${userId}`, this.options);
  }
  updateUser(user) {
    return this.http.put(`https://${window.location.hostname}:8443/api/user/updateUser`, user, this.options);
  }
  banUser(userId) {
    return this.http.put(`https://${window.location.hostname}:8443/api/user/banUser/${userId}`, null, this.options);
  }
  unbanUser(userId) {
    return this.http.put(`https://${window.location.hostname}:8443/api/user/unbanUser/${userId}`, null, this.options);
  }
  changeRole(userId, newRole) {
    return this.http.put(`https://${window.location.hostname}:8443/api/user/changeRole/${userId}/${newRole}`, null, this.options);
  }
  static #_ = this.ɵfac = function UserService_Factory(t) {
    return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: UserService,
    factory: UserService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 4315:
/*!*************************************!*\
  !*** ./src/app/common/util/util.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Util: () => (/* binding */ Util)
/* harmony export */ });
class Util {
  static setDelay(i) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  }
}

/***/ }),

/***/ 2152:
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeaderComponent: () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var C_Users_dillo_Documents_probable_tribble_HAPPYLONELY_FRONTEND_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 6196);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _common_service_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/service/auth.service */ 6055);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var primeng_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/menu */ 6054);






const _c0 = () => ({
  "width": "100%",
  "background-color": "transparent",
  "border": "none"
});
class HeaderComponent {
  constructor(authService, router) {
    this.authService = authService;
    this.router = router;
    this.title = 'HAPPYLONELY';
    this.items = [{
      icon: 'pi pi-home',
      routerLink: 'home'
    }, {
      icon: 'pi pi-comments',
      routerLink: 'threads'
    }, {
      icon: 'pi pi-shopping-bag',
      routerLink: 'shop'
    }, {
      icon: 'pi pi-pencil',
      routerLink: 'art'
    }, {
      icon: 'pi pi-user',
      routerLink: 'user'
    }, {
      icon: 'pi pi-youtube',
      routerLink: 'youtube-dl'
    }];
  }
  ngOnInit() {
    var _this = this;
    return (0,C_Users_dillo_Documents_probable_tribble_HAPPYLONELY_FRONTEND_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this.getUserRole();
    })();
  }
  getUserRole() {
    var _this2 = this;
    return (0,C_Users_dillo_Documents_probable_tribble_HAPPYLONELY_FRONTEND_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const response = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.firstValueFrom)(_this2.authService.getUserRole());
        console.log(response);
        if (response >= 5) {
          _this2.items = [{
            icon: 'pi pi-home',
            routerLink: 'home'
          }, {
            icon: 'pi pi-comments',
            routerLink: 'threads'
          }, {
            icon: 'pi pi-shopping-bag',
            routerLink: 'shop'
          }, {
            icon: 'pi pi-pencil',
            routerLink: 'art'
          }, {
            icon: 'pi pi-user',
            routerLink: 'user'
          }, {
            icon: 'pi pi-youtube',
            routerLink: 'youtube-dl'
          }, {
            icon: 'pi pi-lock',
            routerLink: 'admin'
          }];
        }
      } catch (error) {
        console.error(error);
      }
    })();
  }
  static #_ = this.ɵfac = function HeaderComponent_Factory(t) {
    return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_common_service_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: HeaderComponent,
    selectors: [["app-header"]],
    decls: 2,
    vars: 4,
    consts: [[1, "header-container"], [3, "model"]],
    template: function HeaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "p-menu", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](3, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("model", ctx.items);
      }
    },
    dependencies: [primeng_menu__WEBPACK_IMPORTED_MODULE_5__.Menu],
    styles: [".header-container[_ngcontent-%COMP%] {\n    position: fixed;\n    top: 360px;\n    left: 0;\n    bottom: 0;\n    width: 80px;\n    background-color: transparent;\n    padding: 20px 0;\n    z-index: 1000;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n[_nghost-%COMP%]     .p-menu {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 100%;\n}\n\n[_nghost-%COMP%]     .p-menu .p-menuitem {\n    margin-bottom: 20px;\n}\n\n[_nghost-%COMP%]     .p-menu .p-menuitem-icon {\n    font-size: 24px;\n    color: #ffffff;\n    transition: color 0.3s;\n}\n\n[_nghost-%COMP%]     .p-menu .p-menuitem-icon:hover {\n    color: #007bff;\n}\n\n@media screen and (max-width: 768px) {\n    .header-container[_ngcontent-%COMP%] {\n        top: -30px;\n        width: 65px;\n    }\n\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLFVBQVU7SUFDVixPQUFPO0lBQ1AsU0FBUztJQUNULFdBQVc7SUFDWCw2QkFBNkI7SUFDN0IsZUFBZTtJQUNmLGFBQWE7SUFDYixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLFdBQVc7QUFDZjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixjQUFjO0lBQ2Qsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJO1FBQ0ksVUFBVTtRQUNWLFdBQVc7SUFDZjs7QUFFSiIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXItY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMzYwcHg7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgd2lkdGg6IDgwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIHBhZGRpbmc6IDIwcHggMDtcclxuICAgIHotaW5kZXg6IDEwMDA7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLnAtbWVudSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5wLW1lbnUgLnAtbWVudWl0ZW0ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5wLW1lbnUgLnAtbWVudWl0ZW0taWNvbiB7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIHRyYW5zaXRpb246IGNvbG9yIDAuM3M7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAucC1tZW51IC5wLW1lbnVpdGVtLWljb246aG92ZXIge1xyXG4gICAgY29sb3I6ICMwMDdiZmY7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAuaGVhZGVyLWNvbnRhaW5lciB7XHJcbiAgICAgICAgdG9wOiAtMzBweDtcclxuICAgICAgICB3aWR0aDogNjVweDtcclxuICAgIH1cclxuXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 3673:
/*!**************************************!*\
  !*** ./src/app/home/chat.service.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChatService: () => (/* binding */ ChatService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 819);
/* harmony import */ var sockjs_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sockjs-client */ 9550);
/* harmony import */ var sockjs_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sockjs_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _stomp_stompjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @stomp/stompjs */ 2865);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 6443);





class ChatService {
  constructor(http) {
    this.http = http;
    this.messageSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    this.initializeWebSocketConnection();
  }
  initializeWebSocketConnection() {
    const token = localStorage.getItem('token'); // get the JWT token from local storage
    if (token != null) {
      this.stompClient = new _stomp_stompjs__WEBPACK_IMPORTED_MODULE_2__.Client({
        webSocketFactory: () => new sockjs_client__WEBPACK_IMPORTED_MODULE_0__(`https://${window.location.hostname}:8443/websocket?token=${token}`),
        reconnectDelay: 5000,
        onConnect: receipt => {
          console.log('Connected:', receipt);
          this.stompClient?.subscribe('/topic/messages', messageOutput => {
            const message = JSON.parse(messageOutput.body);
            if (message) {
              this.messageSubject.next(message);
            }
          });
        },
        onStompError: error => {
          console.error('STOMP Error:', error);
        }
      });
      this.stompClient.activate();
    }
  }
  userHasChatGptApiKey() {
    return this.http.get(`https://${window.location.hostname}:8443/api/chat/userHasChatGptApiKey`, {
      withCredentials: true
    });
  }
  useChatGPT(request) {
    return this.http.post(`https://${window.location.hostname}:8443/api/chat/useChatGPT`, request, {
      withCredentials: true
    });
  }
  getNewMessageObservable() {
    return this.messageSubject.asObservable();
  }
  // Fetch all Messages
  getMessages() {
    return this.http.get(`https://${window.location.hostname}:8443/api/chat/messages`, {
      withCredentials: true
    });
  }
  // Send a new Message
  sendMessage(message) {
    if (this.stompClient && this.stompClient.connected) {
      this.stompClient.publish({
        destination: "/app/chat/send",
        body: JSON.stringify(message)
      });
    }
  }
  getUserDetails() {
    return this.http.get(`https://${window.location.hostname}:8443/api/user/getUserByUsername`, {
      withCredentials: true
    });
  }
  static #_ = this.ɵfac = function ChatService_Factory(t) {
    return new (t || ChatService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
    token: ChatService,
    factory: ChatService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 5443:
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeComponent: () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var C_Users_dillo_Documents_probable_tribble_HAPPYLONELY_FRONTEND_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/animations */ 7172);
/* harmony import */ var highlight_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! highlight.js */ 7868);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _chat_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chat.service */ 3673);
/* harmony import */ var _common_service_userservice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/service/userservice */ 2744);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/api */ 7780);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/dialog */ 6280);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/button */ 9136);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/inputtext */ 8361);
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/inputtextarea */ 7058);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var primeng_fileupload__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/fileupload */ 3209);














const _c0 = ["messagesContainer"];
function HomeComponent_div_6_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 24)(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const message_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](message_r6.sender.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHTML", ctx_r7.formatMessage(message_r6.content), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
  }
}
function HomeComponent_div_6_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 24)(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const message_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](message_r6.sender.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", message_r6 == null ? null : message_r6.content, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
  }
}
function HomeComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 20)(1, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HomeComponent_div_6_Template_img_click_4_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r12);
      const message_r6 = restoredCtx.$implicit;
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r11.showUserProfile(message_r6.sender));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, HomeComponent_div_6_div_5_Template, 5, 2, "div", 23)(6, HomeComponent_div_6_div_6_Template, 5, 2, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const message_r6 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](3, 5, message_r6.date_sent, "MMM d, y, h:mm a"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("alt", "", message_r6.sender.username, "'s profile image");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", message_r6.sender.profileimg, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r1.isValidImageURL(message_r6.content));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.isValidImageURL(message_r6.content));
  }
}
function HomeComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HomeComponent_div_7_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r14);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r13.openDialog());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function HomeComponent_div_14_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 38)(1, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Upload Art");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HomeComponent_div_14_ng_template_2_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r18);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r17.minimizeModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HomeComponent_div_14_ng_template_2_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r18);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r19.closeModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function HomeComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "p-dialog", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("visibleChange", function HomeComponent_div_14_Template_p_dialog_visibleChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r21);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r20.isDialogOpen = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, HomeComponent_div_14_ng_template_2_Template, 7, 0, "ng-template", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 30)(4, "div", 31)(5, "label", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Art Name:");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function HomeComponent_div_14_Template_input_ngModelChange_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r21);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r22.artName = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 31)(9, "label", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Art Author:");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function HomeComponent_div_14_Template_input_ngModelChange_11_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r21);
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r23.artAuthor = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 31)(13, "label", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "Select File:");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "input", 36, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function HomeComponent_div_14_Template_input_change_15_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r21);
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r24.onFileSelected($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 31)(18, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HomeComponent_div_14_Template_button_click_18_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r21);
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r25.onUploadClicked());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("@fadeInOut", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("visible", ctx_r4.isDialogOpen)("modal", true)("closable", false)("styleClass", "custom-dialog");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r4.artName);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r4.artAuthor);
  }
}
function HomeComponent_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r5.selectedUser == null ? null : ctx_r5.selectedUser.username, " ");
  }
}
class HomeComponent {
  showUserProfile(user) {
    this.selectedUser = user;
    this.showUserProfileDialog = true;
  }
  closeUserProfile() {
    this.selectedUser = null;
    this.showUserProfileDialog = false;
  }
  constructor(chatService, user, primengConfig, cdr // Inject ChangeDetectorRef
  ) {
    this.chatService = chatService;
    this.user = user;
    this.primengConfig = primengConfig;
    this.cdr = cdr;
    this.Messages = [];
    this.newMessageContent = '';
    this.selectedUser = null;
    this.showUserProfileDialog = false;
    this.isUserHaveChatGptApiKey = false;
    this.hluser = {
      id: "",
      username: "",
      statusmsg: "",
      profileimg: "",
      gptapikey: ""
    };
    this.isDialogOpen = false; // To manage the open/close state of the dialog
    this.isDialogMinimized = false; // To manage the minimized state of the dialog
    this.artName = "";
    this.artAuthor = "";
    this.selectedFile = null;
    this.selectedFileBase64 = null;
    this.showUploadDialog = false;
    const protocol = window.location.protocol;
    const host = window.location.hostname;
    const port = '8443'; // Assuming your Spring Boot backend runs on port 8080. Adjust if different.
    this.backendBaseUrl = `${protocol}//${host}:${port}`;
    this.primengConfig.ripple = true; // For ripple effect on buttons
    // Subscribe to the message observable. WebSocket initialization is done in the service's constructor.
    this.chatService.getNewMessageObservable().subscribe(message => {
      // Ensure that you're not adding duplicate messages
      if (!this.Messages.some(m => m.date_sent === message.date_sent && m.content === message.content)) {
        this.Messages.push(message);
      }
    });
  }
  openDialog() {
    this.isDialogOpen = true;
    this.isDialogMinimized = false;
  }
  minimizeModal() {
    this.isDialogOpen = false;
    this.isDialogMinimized = true;
  }
  closeModal() {
    this.isDialogOpen = false;
    this.isDialogMinimized = false;
  }
  ngOnInit() {
    var _this = this;
    return (0,C_Users_dillo_Documents_probable_tribble_HAPPYLONELY_FRONTEND_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this.getUsername(); // Fetch the username once on initialization
      highlight_js__WEBPACK_IMPORTED_MODULE_1__["default"].highlightAll();
    })();
  }
  ngAfterViewChecked() {
    this.scrollToBottom();
  }
  formatMessage(message) {
    const codeBlockRegex = /```(\w+)\n([\s\S]*?)```/g;
    const boldRegex = /\*\*(.*?)\*\*/g;
    const headingRegex = /### (.*?)(\n|$)/g;
    const lineBreakRegex = /\n/g;
    const orderedListRegex = /(\d+\..*?)(\n|$)/g;
    const unorderedListRegex = /(\* .*?)(\n|$)/g;
    // Replace list items first
    let formattedMessage = message.replace(orderedListRegex, '<li>$1</li>').replace(unorderedListRegex, '<li>$1</li>');
    // Then wrap all consecutive list items in <ol> or <ul> tags
    const orderedListBlockRegex = /((<li>\d+\..*?<\/li>)+)/g;
    const unorderedListBlockRegex = /((<li>\* .*?<\/li>)+)/g;
    formattedMessage = formattedMessage.replace(orderedListBlockRegex, '<ol>$1</ol>').replace(unorderedListBlockRegex, '<ul>$1</ul>');
    // Replace other markdown syntax
    return formattedMessage.replace(codeBlockRegex, (_match, language, code) => {
      const highlightedCode = highlight_js__WEBPACK_IMPORTED_MODULE_1__["default"].highlight(language, code).value;
      return `<pre><code class="hljs ${language}">${highlightedCode}</code></pre>`;
    }).replace(boldRegex, '<strong>$1</strong>').replace(headingRegex, '<h3>$1</h3>').replace(lineBreakRegex, '<br/>');
  }
  onFileSelected(event) {
    this.selectedFile = event.target.files[0];
  }
  convertPathToUrl(artName, artAuthor) {
    const filename = `${artName}_${artAuthor}.jpg`;
    const encodedFilename = encodeURIComponent(filename);
    const backendBaseUrl = `${window.location.protocol}//${window.location.hostname}:8443`;
    return `${backendBaseUrl}/artwork/${encodedFilename}`;
  }
  onUploadClicked() {
    var _this2 = this;
    if (this.artName && this.artName.trim() !== '' && this.artAuthor && this.artAuthor.trim() !== '' && this.selectedFile) {
      this.user.uploadArt(this.selectedFile, this.artName, this.artAuthor).subscribe( /*#__PURE__*/function () {
        var _ref = (0,C_Users_dillo_Documents_probable_tribble_HAPPYLONELY_FRONTEND_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (response) {
          console.log('Received response:', response);
          if (response.status === 201) {
            console.log('Art added successfully');
            _this2.isDialogOpen = false; // Close the modal dialog
            _this2.cdr.detectChanges(); // Trigger change detection
            // Rebuild the artImageFilePath into a URL
            const artImageUrl = _this2.convertPathToUrl(_this2.artName, _this2.artAuthor);
            // The newMessageContent now contains the URL of the image
            _this2.newMessageContent = artImageUrl;
            _this2.sendMessage();
          } else {
            console.error('Failed to upload art with response status:', response.status);
          }
        });
        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }(), error => {
        console.error('Error uploading art:', error);
      });
    } else {
      console.warn('Please ensure all fields are filled.');
    }
  }
  isValidImageURL(url) {
    const backendBaseUrl = `${window.location.protocol}//${window.location.hostname}:8443`;
    const isArtworkUrl = url.startsWith(`${backendBaseUrl}/artwork/`);
    const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.webp', '.svg'];
    const urlExtension = url.slice(url.lastIndexOf('.'));
    const isImageExtension = imageExtensions.includes(urlExtension);
    return isArtworkUrl && isImageExtension;
  }
  scrollToBottom() {
    try {
      this.messagesContainer.nativeElement.scrollTop = this.messagesContainer.nativeElement.scrollHeight;
    } catch (err) {}
  }
  getUsername() {
    return new Promise((resolve, reject) => {
      this.chatService.getUserDetails().subscribe(data => {
        if (data !== null) {
          this.hluser = {
            id: data.id,
            username: data.username,
            statusmsg: data.statusmsg,
            profileimg: data.profileimg,
            gptapikey: data.gptapikey
          };
          console.log("final");
          console.log("data: " + JSON.stringify(data));
          resolve(this.hluser);
        } else {
          reject("error");
        }
      });
    });
  }
  sendMessage() {
    var _this3 = this;
    return (0,C_Users_dillo_Documents_probable_tribble_HAPPYLONELY_FRONTEND_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this3.newMessageContent.trim()) {
        if (_this3.hluser && _this3.hluser.username) {
          if (_this3.newMessageContent.replace("\n", "").startsWith('/chatgpt')) {
            let messageMap = new Map();
            let toParts = [];
            if (_this3.newMessageContent.includes('sk-')) {
              toParts = _this3.newMessageContent.split(' ', 3);
            } else {
              toParts = _this3.newMessageContent.split(' ', 2);
            }
            const parts = toParts;
            if (parts.length === 3) {
              messageMap.set('apiKey', parts[1]);
              messageMap.set('message', _this3.newMessageContent.split(parts[1] + ' ')[1]);
            } else if (parts.length === 2) {
              messageMap.set('message', _this3.newMessageContent.split(parts[0] + ' ')[1]);
              if (_this3.hluser.gptapikey) {
                messageMap.set('apiKey', _this3.hluser.gptapikey);
              } else {
                throw new Error('You need to provide an API key to use ChatGPT. Use the format /chatgpt your-api-key message');
              }
            } else {
              throw new Error('Invalid command format. Use /chatgpt your-api-key message or /chatgpt message');
            }
            const request = {
              'message': messageMap.get('message'),
              'apiKey': messageMap.get('apiKey')
            };
            _this3.chatService.useChatGPT(request).subscribe({
              next: response => {
                console.log('ChatGPT response:', response);
                _this3.newMessageContent = response;
              },
              error: error => {
                console.error('Error using ChatGPT:', error);
              }
            });
          } else if (_this3.isValidImageURL(_this3.newMessageContent)) {
            const newMessage = {
              content: _this3.newMessageContent,
              sender: _this3.hluser,
              date_sent: new Date()
            };
            _this3.chatService.sendMessage(newMessage);
            console.log("newMessage:", JSON.stringify(newMessage));
          } else {
            const newMessage = {
              content: _this3.newMessageContent,
              sender: _this3.hluser,
              date_sent: new Date()
            };
            _this3.chatService.sendMessage(newMessage);
            console.log("newMessage:", JSON.stringify(newMessage));
          }
          _this3.newMessageContent = '';
          _this3.cdr.detectChanges();
        } else {
          console.error("User details are not available");
        }
      }
    })();
  }
  static #_ = this.ɵfac = function HomeComponent_Factory(t) {
    return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_chat_service__WEBPACK_IMPORTED_MODULE_2__.ChatService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_common_service_userservice__WEBPACK_IMPORTED_MODULE_3__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_5__.PrimeNGConfig), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectorRef));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: HomeComponent,
    selectors: [["app-home"]],
    viewQuery: function HomeComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.messagesContainer = _t.first);
      }
    },
    decls: 23,
    vars: 10,
    consts: [["rel", "stylesheet", "href", "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"], [1, "main-container"], [1, "messages-container"], ["messagesContainer", ""], [1, "messages-wrapper"], ["class", "message-item", 4, "ngFor", "ngForOf"], ["class", "minimized-dialog", 3, "click", 4, "ngIf"], [1, "input-section"], ["rows", "1", "cols", "80", "pInputTextarea", "", 1, "input-textarea", 3, "ngModel", "ngModelChange", "keydown.enter"], ["name", "file", "url", "https://localhost:8443/api/art/uploadArt", "accept", "image/*"], ["fileInput", ""], ["pButton", "", "type", "button", 1, "ui-button-secondary", "btn-upload", 3, "click"], [1, "pi", "pi-upload"], [4, "ngIf"], ["pButton", "", "type", "button", 1, "ui-button-success", "btn-send", 3, "click"], [1, "pi", "pi-send"], [3, "visible", "visibleChange", "onHide"], ["pTemplate", "header"], [1, "dialog-content"], [1, "profile-dialog-image", 3, "src", "alt"], [1, "message-item"], [1, "message-timestamp"], [1, "message-image", 3, "src", "alt", "click"], ["class", "message-content", 4, "ngIf"], [1, "message-content"], [3, "innerHTML"], ["alt", "Image content", 3, "src"], [1, "minimized-dialog", 3, "click"], [1, "pi", "pi-window-minimize"], ["header", "Upload Art", 3, "visible", "modal", "closable", "styleClass", "visibleChange"], [1, "ui-g"], [1, "ui-g-12"], ["for", "artName"], ["type", "text", "pInputText", "", 3, "ngModel", "ngModelChange"], ["for", "artAuthor"], ["for", "fileInput"], ["type", "file", 3, "change"], ["pButton", "", "type", "button", "label", "Upload", 3, "click"], [1, "modal-header"], [1, "modal-title"], ["pRipple", "", 1, "modal-control", 3, "click"], [1, "pi", "pi-minus"], [1, "pi", "pi-times"]],
    template: function HomeComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "link", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1)(2, "div", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, HomeComponent_div_6_Template, 7, 8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, HomeComponent_div_7_Template, 2, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 7)(9, "textarea", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function HomeComponent_Template_textarea_ngModelChange_9_listener($event) {
          return ctx.newMessageContent = $event;
        })("keydown.enter", function HomeComponent_Template_textarea_keydown_enter_9_listener() {
          return ctx.sendMessage();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "p-fileUpload", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_12_listener() {
          return ctx.openDialog();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, HomeComponent_div_14_Template, 19, 7, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_15_listener() {
          return ctx.sendMessage();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](16, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "p-dialog", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("visibleChange", function HomeComponent_Template_p_dialog_visibleChange_17_listener($event) {
          return ctx.showUserProfileDialog = $event;
        })("onHide", function HomeComponent_Template_p_dialog_onHide_17_listener() {
          return ctx.closeUserProfile();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](18, HomeComponent_ng_template_18_Template, 1, 1, "ng-template", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](20, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.Messages);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isDialogMinimized);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.newMessageContent);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("display", "none");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isDialogOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("visible", ctx.showUserProfileDialog);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("alt", "", ctx.selectedUser == null ? null : ctx.selectedUser.username, "'s profile image");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", ctx.selectedUser == null ? null : ctx.selectedUser.profileimg, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.selectedUser == null ? null : ctx.selectedUser.statusmsg);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, primeng_api__WEBPACK_IMPORTED_MODULE_5__.PrimeTemplate, primeng_dialog__WEBPACK_IMPORTED_MODULE_7__.Dialog, primeng_button__WEBPACK_IMPORTED_MODULE_8__.ButtonDirective, primeng_inputtext__WEBPACK_IMPORTED_MODULE_9__.InputText, primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_10__.InputTextarea, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgModel, primeng_fileupload__WEBPACK_IMPORTED_MODULE_12__.FileUpload, _angular_common__WEBPACK_IMPORTED_MODULE_6__.DatePipe],
    styles: ["body[_ngcontent-%COMP%] {\n    background-color: #181818;\n    color: #ffffff;\n    font-family: 'Roboto', sans-serif;\n    font-size: 16px;\n}\n\n.messages-container[_ngcontent-%COMP%] {\n    height: 400px;\n    overflow-y: auto;\n}\n\n.messages-wrapper[_ngcontent-%COMP%] {\n    padding: 10px;\n}\n\n.main-container[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    padding: 30px;\n    background-color: #181818;\n    border-radius: 5px;\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n}\n\n.message-content[_ngcontent-%COMP%] {\n    word-wrap: break-word;\n}\n\n.message-item[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    padding: 15px;\n    border-radius: 5px;\n    background-color: #282828;\n    margin-bottom: 15px;\n    color: #ffffff;\n}\n\n.modal-title[_ngcontent-%COMP%] {\n    font-size: 18px;\n    font-weight: bold;\n}\n\n.modal-control[_ngcontent-%COMP%] {\n    background: none;\n    border: none;\n    cursor: pointer;\n    font-size: 16px;\n}\n\n.modal-header[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 10px;\n    background-color: #f5f5f5;\n}\n\n.message-image[_ngcontent-%COMP%] {\n    width: 40px;\n    height: 40px;\n    border-radius: 50%;\n    margin-right: 10px;\n    cursor: pointer;\n}\n\n.message-timestamp[_ngcontent-%COMP%] {\n    font-size: 14px;\n    margin-right: 25px;\n    color: #888;\n}\n\n.input-section[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    margin-top: 20px;\n}\n\n.input-textarea[_ngcontent-%COMP%] {\n    flex: 1;\n    margin-right: 10px;\n}\n\n.btn-upload[_ngcontent-%COMP%], .btn-send[_ngcontent-%COMP%] {\n    margin-left: 10px;\n    background-color: #007bff;\n    color: #fff;\n    border: none;\n    padding: 15px 25px;\n    border-radius: 5px;\n    cursor: pointer;\n    transition: background-color 0.3s;\n}\n\n.btn-upload[_ngcontent-%COMP%]:hover, .btn-send[_ngcontent-%COMP%]:hover {\n    background-color: #0056b3;\n}\n\n.profile-dialog-image[_ngcontent-%COMP%] {\n    width: 100px;\n    height: 100px;\n    border-radius: 50%;\n    margin-bottom: 10px;\n}\n\n.dialog-content[_ngcontent-%COMP%] {\n    text-align: center;\n}\n\n  .custom-dialog {\n    background-color: rgba(255, 255, 255, 0.8);\n    border-radius: 10px;\n    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n}\n\n  .custom-dialog .modal-header {\n    background-color: transparent;\n    border-bottom: none;\n    padding: 1rem;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n}\n\n  .custom-dialog .modal-header .modal-title {\n    font-size: 1.25rem;\n    font-weight: 600;\n}\n\n  .custom-dialog .modal-header .modal-control {\n    border: none;\n    background-color: transparent;\n    font-size: 1.25rem;\n    color: #6c757d;\n    cursor: pointer;\n    transition: color 0.2s;\n}\n\n  .custom-dialog .modal-header .modal-control:hover {\n    color: #343a40;\n}\n\n  .custom-dialog .ui-dialog-content {\n    padding: 1.5rem;\n}\n\n  .custom-dialog .ui-dialog-content label {\n    font-weight: 600;\n    margin-bottom: 0.5rem;\n}\n\n  .custom-dialog .ui-dialog-content input[type=\"text\"],   .custom-dialog .ui-dialog-content input[type=\"file\"] {\n    width: 100%;\n    padding: 0.5rem;\n    border: 1px solid #ced4da;\n    border-radius: 4px;\n    margin-bottom: 1rem;\n}\n\n  .custom-dialog .ui-dialog-content button {\n    margin-top: 1rem;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7SUFDekIsY0FBYztJQUNkLGlDQUFpQztJQUNqQyxlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLHVDQUF1QztBQUMzQzs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixlQUFlO0lBQ2YsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsV0FBVztBQUNmOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxPQUFPO0lBQ1Asa0JBQWtCO0FBQ3RCOztBQUVBOztJQUVJLGlCQUFpQjtJQUNqQix5QkFBeUI7SUFDekIsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixpQ0FBaUM7QUFDckM7O0FBRUE7O0lBRUkseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksMENBQTBDO0lBQzFDLG1CQUFtQjtJQUNuQix5Q0FBeUM7QUFDN0M7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0IsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osNkJBQTZCO0lBQzdCLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsZUFBZTtJQUNmLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHFCQUFxQjtBQUN6Qjs7QUFFQTs7SUFFSSxXQUFXO0lBQ1gsZUFBZTtJQUNmLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTgxODE4O1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuXHJcbi5tZXNzYWdlcy1jb250YWluZXIge1xyXG4gICAgaGVpZ2h0OiA0MDBweDtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbn1cclxuXHJcbi5tZXNzYWdlcy13cmFwcGVyIHtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbi5tYWluLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHBhZGRpbmc6IDMwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTgxODE4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG59XHJcblxyXG4ubWVzc2FnZS1jb250ZW50IHtcclxuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxufVxyXG5cclxuLm1lc3NhZ2UtaXRlbSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjgyODI4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG59XHJcblxyXG4ubW9kYWwtdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5tb2RhbC1jb250cm9sIHtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuXHJcbi5tb2RhbC1oZWFkZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcclxufVxyXG5cclxuLm1lc3NhZ2UtaW1hZ2Uge1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5tZXNzYWdlLXRpbWVzdGFtcCB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDI1cHg7XHJcbiAgICBjb2xvcjogIzg4ODtcclxufVxyXG5cclxuLmlucHV0LXNlY3Rpb24ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG4uaW5wdXQtdGV4dGFyZWEge1xyXG4gICAgZmxleDogMTtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG5cclxuLmJ0bi11cGxvYWQsXHJcbi5idG4tc2VuZCB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDdiZmY7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHBhZGRpbmc6IDE1cHggMjVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcztcclxufVxyXG5cclxuLmJ0bi11cGxvYWQ6aG92ZXIsXHJcbi5idG4tc2VuZDpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1NmIzO1xyXG59XHJcblxyXG4ucHJvZmlsZS1kaWFsb2ctaW1hZ2Uge1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5kaWFsb2ctY29udGVudCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAuY3VzdG9tLWRpYWxvZyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAycHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAuY3VzdG9tLWRpYWxvZyAubW9kYWwtaGVhZGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5jdXN0b20tZGlhbG9nIC5tb2RhbC1oZWFkZXIgLm1vZGFsLXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAuY3VzdG9tLWRpYWxvZyAubW9kYWwtaGVhZGVyIC5tb2RhbC1jb250cm9sIHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xyXG4gICAgY29sb3I6ICM2Yzc1N2Q7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjJzO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLmN1c3RvbS1kaWFsb2cgLm1vZGFsLWhlYWRlciAubW9kYWwtY29udHJvbDpob3ZlciB7XHJcbiAgICBjb2xvcjogIzM0M2E0MDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5jdXN0b20tZGlhbG9nIC51aS1kaWFsb2ctY29udGVudCB7XHJcbiAgICBwYWRkaW5nOiAxLjVyZW07XHJcbn1cclxuXHJcbjo6bmctZGVlcCAuY3VzdG9tLWRpYWxvZyAudWktZGlhbG9nLWNvbnRlbnQgbGFiZWwge1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5jdXN0b20tZGlhbG9nIC51aS1kaWFsb2ctY29udGVudCBpbnB1dFt0eXBlPVwidGV4dFwiXSxcclxuOjpuZy1kZWVwIC5jdXN0b20tZGlhbG9nIC51aS1kaWFsb2ctY29udGVudCBpbnB1dFt0eXBlPVwiZmlsZVwiXSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDAuNXJlbTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjZWQ0ZGE7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLmN1c3RvbS1kaWFsb2cgLnVpLWRpYWxvZy1jb250ZW50IGJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"],
    data: {
      animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_13__.trigger)('fadeInOut', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_13__.state)('in', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_13__.style)({
        opacity: 1
      })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_13__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_13__.style)({
        opacity: 0
      }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_13__.animate)(600)]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_13__.transition)(':leave', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_13__.animate)(600, (0,_angular_animations__WEBPACK_IMPORTED_MODULE_13__.style)({
        opacity: 0
      }))])])]
    }
  });
}

/***/ }),

/***/ 3644:
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginComponent: () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var C_Users_dillo_Documents_probable_tribble_HAPPYLONELY_FRONTEND_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 6196);
/* harmony import */ var _common_util_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/util/util */ 4315);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/button */ 9136);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/inputtext */ 8361);
/* harmony import */ var primeng_messages__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/messages */ 1564);
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/card */ 1486);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 4456);











class LoginComponent {
  constructor(http, router) {
    this.http = http;
    this.router = router;
    this.failedAttempts = 0;
    this.msgs = [];
  }
  login() {
    var _this = this;
    return (0,C_Users_dillo_Documents_probable_tribble_HAPPYLONELY_FRONTEND_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const url = `https://${window.location.hostname}:8443/login`;
      const loginRequest = {
        username: _this.username,
        password: _this.password,
        token: ''
      };
      try {
        const response = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.firstValueFrom)(_this.http.post(url, loginRequest));
        if (response.token) {
          localStorage.setItem('token', response.token);
          _this.failedAttempts = 0;
          _this.msgs = [{
            severity: 'success',
            summary: 'Success Message',
            detail: 'Login successful.'
          }];
          _this.router.navigate(['home']);
        } else {
          _this.failedAttempts++;
          switch (_this.failedAttempts) {
            case 1:
              _this.firstFailedAttempt = new Date();
              _this.msgs = [{
                severity: 'error',
                summary: 'Error Message',
                detail: 'Login failed. Please try again.'
              }];
              break;
            case 10:
              _common_util_util__WEBPACK_IMPORTED_MODULE_1__.Util.setDelay(600);
              _this.msgs = [{
                severity: 'error',
                summary: 'Error Message',
                detail: 'Timed out for 10 minutes.  Please wait for new login attempt'
              }];
              break;
            default:
              const numFailedAttemptsLeft = 10 - _this.failedAttempts;
              const errorMsg = ("You have " + numFailedAttemptsLeft + " attempts left until you are temporarily blocked from logging in.").toString();
              _this.msgs = [{
                severity: 'error',
                summary: 'Error Message',
                detail: errorMsg
              }];
              break;
          }
        }
      } catch (error) {
        console.error(error);
      }
    })();
  }
  static #_ = this.ɵfac = function LoginComponent_Factory(t) {
    return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: LoginComponent,
    selectors: [["app-login"]],
    decls: 24,
    vars: 3,
    consts: [[1, "p-grid", "p-justify-center", "login-container"], [1, "p-col-12", "p-md-6", "p-lg-4"], [1, "messages-panel", 3, "value", "valueChange"], ["header", "Login", 1, "login-card"], [1, "login-form", 3, "ngSubmit"], [1, "p-field"], ["for", "username", 1, "input-label"], [1, "input-wrapper"], [1, "pi", "pi-user"], ["id", "username", "name", "username", "pInputText", "", "placeholder", "Enter username", 1, "uniform-input", 3, "ngModel", "ngModelChange"], ["for", "password", 1, "input-label"], [1, "pi", "pi-lock"], ["id", "password", "name", "password", "type", "password", "pInputText", "", "placeholder", "Enter password", 1, "uniform-input", 3, "ngModel", "ngModelChange"], [1, "button-group"], ["type", "submit", "label", "Login", "styleClass", "p-button-primary"], ["routerLink", "/register", "label", "Register", "styleClass", "p-button-secondary"], [1, "register-link"], ["routerLink", "/register"]],
    template: function LoginComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "p-messages", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("valueChange", function LoginComponent_Template_p_messages_valueChange_2_listener($event) {
          return ctx.msgs = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "p-card", 3)(4, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_4_listener() {
          return ctx.login();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 5)(6, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_10_listener($event) {
          return ctx.username = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 5)(12, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_16_listener($event) {
          return ctx.password = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "p-button", 14)(19, "p-button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, " Not registered? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "Register here");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx.msgs);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.password);
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, primeng_button__WEBPACK_IMPORTED_MODULE_6__.Button, primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__.InputText, primeng_messages__WEBPACK_IMPORTED_MODULE_8__.Messages, primeng_card__WEBPACK_IMPORTED_MODULE_9__.Card, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgForm],
    styles: [".login-container[_ngcontent-%COMP%] {\n    background-color: transparent;\n    padding: 2rem;\n}\n\n.messages-panel[_ngcontent-%COMP%] {\n    margin-bottom: 1rem;\n}\n\n.login-card[_ngcontent-%COMP%] {\n    border-radius: 8px;\n    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n\n.login-form[_ngcontent-%COMP%] {\n    padding: 2rem;\n}\n\n.input-label[_ngcontent-%COMP%] {\n    font-weight: bold;\n    margin-bottom: 0.5rem;\n}\n\n.input-wrapper[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    border: 1px solid #ced4da;\n    border-radius: 4px;\n    padding: 0.5rem;\n    margin-bottom: 1rem;\n}\n\n.input-wrapper[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    margin-right: 0.5rem;\n    color: #6c757d;\n}\n\n.uniform-input[_ngcontent-%COMP%] {\n    flex: 1;\n    border: none;\n    outline: none;\n}\n\n.button-group[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: space-between;\n    margin-bottom: 1rem;\n}\n\n.p-inputtext[_ngcontent-%COMP%] {\n    width: 100%;\n}\n\n.register-link[_ngcontent-%COMP%] {\n    text-align: center;\n}\n\n.register-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: #007bff;\n    text-decoration: none;\n}\n\n@media screen and (max-width: 768px) {\n    .input-wrapper[_ngcontent-%COMP%] {\n        top: auto;\n        left: auto;\n        bottom: auto;\n        top: auto;\n        display: flex;\n        align-items: center;\n        border: 1px solid #ced4da;\n        border-radius: 4px;\n        padding: 0.5rem;\n        margin-bottom: 1rem;\n    }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDZCQUE2QjtJQUM3QixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLHdDQUF3QztBQUM1Qzs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLE9BQU87SUFDUCxZQUFZO0lBQ1osYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksY0FBYztJQUNkLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJO1FBQ0ksU0FBUztRQUNULFVBQVU7UUFDVixZQUFZO1FBQ1osU0FBUztRQUNULGFBQWE7UUFDYixtQkFBbUI7UUFDbkIseUJBQXlCO1FBQ3pCLGtCQUFrQjtRQUNsQixlQUFlO1FBQ2YsbUJBQW1CO0lBQ3ZCO0FBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW4tY29udGFpbmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgcGFkZGluZzogMnJlbTtcclxufVxyXG5cclxuLm1lc3NhZ2VzLXBhbmVsIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbn1cclxuXHJcbi5sb2dpbi1jYXJkIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbn1cclxuXHJcbi5sb2dpbi1mb3JtIHtcclxuICAgIHBhZGRpbmc6IDJyZW07XHJcbn1cclxuXHJcbi5pbnB1dC1sYWJlbCB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcclxufVxyXG5cclxuLmlucHV0LXdyYXBwZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2VkNGRhO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgcGFkZGluZzogMC41cmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxufVxyXG5cclxuLmlucHV0LXdyYXBwZXIgaSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcclxuICAgIGNvbG9yOiAjNmM3NTdkO1xyXG59XHJcblxyXG4udW5pZm9ybS1pbnB1dCB7XHJcbiAgICBmbGV4OiAxO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuLmJ1dHRvbi1ncm91cCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxufVxyXG5cclxuLnAtaW5wdXR0ZXh0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ucmVnaXN0ZXItbGluayB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5yZWdpc3Rlci1saW5rIGEge1xyXG4gICAgY29sb3I6ICMwMDdiZmY7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAuaW5wdXQtd3JhcHBlciB7XHJcbiAgICAgICAgdG9wOiBhdXRvO1xyXG4gICAgICAgIGxlZnQ6IGF1dG87XHJcbiAgICAgICAgYm90dG9tOiBhdXRvO1xyXG4gICAgICAgIHRvcDogYXV0bztcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NlZDRkYTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgcGFkZGluZzogMC41cmVtO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 600:
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RegisterComponent: () => (/* binding */ RegisterComponent)
/* harmony export */ });
/* harmony import */ var C_Users_dillo_Documents_probable_tribble_HAPPYLONELY_FRONTEND_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 6196);
/* harmony import */ var _common_util_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/util/util */ 4315);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/api */ 7780);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/button */ 9136);
/* harmony import */ var primeng_message__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/message */ 9605);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/inputtext */ 8361);
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/card */ 1486);














function RegisterComponent_ng_template_3_p_message_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "p-message", 23);
  }
}
function RegisterComponent_ng_template_3_p_message_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "p-message", 24);
  }
}
function RegisterComponent_ng_template_3_p_message_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "p-message", 25);
  }
}
function RegisterComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "form", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function RegisterComponent_ng_template_3_Template_form_ngSubmit_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r4.onSubmit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 5)(2, "label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "i", 8)(6, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, RegisterComponent_ng_template_3_p_message_7_Template, 1, 0, "p-message", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 5)(9, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Username");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "i", 12)(13, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, RegisterComponent_ng_template_3_p_message_14_Template, 1, 0, "p-message", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 5)(16, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "i", 16)(20, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, RegisterComponent_ng_template_3_p_message_21_Template, 1, 0, "p-message", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "p-button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, " Already registered? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "Login here");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    let tmp_1_0;
    let tmp_2_0;
    let tmp_3_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r0.registerForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (tmp_1_0 = ctx_r0.registerForm.get("email")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (tmp_2_0 = ctx_r0.registerForm.get("username")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (tmp_3_0 = ctx_r0.registerForm.get("password")) == null ? null : tmp_3_0.errors == null ? null : tmp_3_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r0.registerForm.invalid);
  }
}
class RegisterComponent {
  constructor(formBuilder, http, router) {
    this.formBuilder = formBuilder;
    this.http = http;
    this.router = router;
    this.failedAttempts = 0;
    this.msgs = [];
  }
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]
    });
  }
  onSubmit() {
    var _this = this;
    return (0,C_Users_dillo_Documents_probable_tribble_HAPPYLONELY_FRONTEND_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this.registerForm.valid) {
        const url = `https://${window.location.hostname}:8443/register`;
        const registerRequest = {
          username: _this.registerForm.get('username')?.value,
          password: _this.registerForm.get('password')?.value,
          email: _this.registerForm.get('email')?.value
        };
        try {
          const response = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.firstValueFrom)(_this.http.post(url, registerRequest));
          if (response.id) {
            _this.failedAttempts = 0;
            _this.msgs = [{
              severity: 'success',
              summary: 'Success Message',
              detail: 'Register successful.  You may now login'
            }];
            _common_util_util__WEBPACK_IMPORTED_MODULE_1__.Util.setDelay(2);
            _this.router.navigate(['login']);
          } else {
            _this.failedAttempts++;
            switch (_this.failedAttempts) {
              case 1:
                _this.firstFailedAttempt = new Date();
                _this.msgs = [{
                  severity: 'error',
                  summary: 'Error Message',
                  detail: 'Registration failed. Please try again.'
                }];
                break;
              case 10:
                _common_util_util__WEBPACK_IMPORTED_MODULE_1__.Util.setDelay(600);
                _this.msgs = [{
                  severity: 'error',
                  summary: 'Error Message',
                  detail: 'Timed out for 10 minutes.  Please wait for new registration attempt'
                }];
                break;
              default:
                const numFailedAttemptsLeft = 10 - _this.failedAttempts;
                const errorMsg = ("You have " + numFailedAttemptsLeft + " attempts left until you are temporarily blocked from registering.").toString();
                _this.msgs = [{
                  severity: 'error',
                  summary: 'Error Message',
                  detail: errorMsg
                }];
                break;
            }
          }
        } catch (error) {
          console.error(error);
        }
      }
    })();
  }
  static #_ = this.ɵfac = function RegisterComponent_Factory(t) {
    return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: RegisterComponent,
    selectors: [["app-register"]],
    decls: 4,
    vars: 0,
    consts: [[1, "p-grid", "p-justify-center", "register-container"], [1, "p-col-8"], ["header", "Register", 1, "register-card"], ["pTemplate", "content"], [1, "register-form", 3, "formGroup", "ngSubmit"], [1, "p-field"], ["for", "email", 1, "input-label"], [1, "input-wrapper"], [1, "pi", "pi-envelope"], ["id", "email", "type", "email", "pInputText", "", "formControlName", "email", 1, "uniform-input"], ["severity", "error", "text", "Email is required", "class", "error-message", 4, "ngIf"], ["for", "username", 1, "input-label"], [1, "pi", "pi-user"], ["id", "username", "type", "text", "pInputText", "", "formControlName", "username", 1, "uniform-input"], ["severity", "error", "text", "Username is required", "class", "error-message", 4, "ngIf"], ["for", "password", 1, "input-label"], [1, "pi", "pi-lock"], ["id", "password", "name", "password", "type", "password", "pInputText", "", "formControlName", "password", 1, "uniform-input"], ["severity", "error", "text", "Password is required", "class", "error-message", 4, "ngIf"], [1, "button-group"], ["type", "submit", "label", "Register", 1, "register-button", 3, "disabled"], [1, "login-link"], ["routerLink", "/login"], ["severity", "error", "text", "Email is required", 1, "error-message"], ["severity", "error", "text", "Username is required", 1, "error-message"], ["severity", "error", "text", "Password is required", 1, "error-message"]],
    template: function RegisterComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "p-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, RegisterComponent_ng_template_3_Template, 28, 5, "ng-template", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, primeng_api__WEBPACK_IMPORTED_MODULE_8__.PrimeTemplate, primeng_button__WEBPACK_IMPORTED_MODULE_9__.Button, primeng_message__WEBPACK_IMPORTED_MODULE_10__.UIMessage, primeng_inputtext__WEBPACK_IMPORTED_MODULE_11__.InputText, primeng_card__WEBPACK_IMPORTED_MODULE_12__.Card, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName],
    styles: [".register-container[_ngcontent-%COMP%] {\n    background-color: transparent;\n    padding: 2rem;\n}\n\n.register-card[_ngcontent-%COMP%] {\n    border-radius: 8px;\n    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n\n.p-inputtext[_ngcontent-%COMP%] {\n    width: 100%;\n}\n\n.register-form[_ngcontent-%COMP%] {\n    padding: 2rem;\n}\n\n.input-label[_ngcontent-%COMP%] {\n    font-weight: bold;\n    margin-bottom: 0.5rem;\n}\n\n.input-wrapper[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    border: 1px solid #ced4da;\n    border-radius: 4px;\n    padding: 0.5rem;\n    margin-bottom: 1rem;\n}\n\n.input-wrapper[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    margin-right: 0.5rem;\n    color: #6c757d;\n}\n\n.uniform-input[_ngcontent-%COMP%] {\n    flex: 1;\n    border: none;\n    outline: none;\n}\n\n.error-message[_ngcontent-%COMP%] {\n    margin-top: 0.5rem;\n}\n\n.button-group[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n    margin-top: 1rem;\n}\n\n.register-button[_ngcontent-%COMP%] {\n    width: 100%;\n}\n\n.login-link[_ngcontent-%COMP%] {\n    text-align: center;\n    margin-top: 1rem;\n}\n\n.login-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: #007bff;\n    text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDZCQUE2QjtJQUM3QixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLHdDQUF3QztBQUM1Qzs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLE9BQU87SUFDUCxZQUFZO0lBQ1osYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxxQkFBcUI7QUFDekIiLCJzb3VyY2VzQ29udGVudCI6WyIucmVnaXN0ZXItY29udGFpbmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgcGFkZGluZzogMnJlbTtcclxufVxyXG5cclxuLnJlZ2lzdGVyLWNhcmQge1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxufVxyXG5cclxuLnAtaW5wdXR0ZXh0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ucmVnaXN0ZXItZm9ybSB7XHJcbiAgICBwYWRkaW5nOiAycmVtO1xyXG59XHJcblxyXG4uaW5wdXQtbGFiZWwge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XHJcbn1cclxuXHJcbi5pbnB1dC13cmFwcGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NlZDRkYTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIHBhZGRpbmc6IDAuNXJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbn1cclxuXHJcbi5pbnB1dC13cmFwcGVyIGkge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XHJcbiAgICBjb2xvcjogIzZjNzU3ZDtcclxufVxyXG5cclxuLnVuaWZvcm0taW5wdXQge1xyXG4gICAgZmxleDogMTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbi5lcnJvci1tZXNzYWdlIHtcclxuICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcclxufVxyXG5cclxuLmJ1dHRvbi1ncm91cCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG59XHJcblxyXG4ucmVnaXN0ZXItYnV0dG9uIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ubG9naW4tbGluayB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG59XHJcblxyXG4ubG9naW4tbGluayBhIHtcclxuICAgIGNvbG9yOiAjMDA3YmZmO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 1637:
/*!*************************************************!*\
  !*** ./src/app/shop/product/product.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductService: () => (/* binding */ ProductService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 6443);


class ProductService {
  constructor(http) {
    this.http = http;
  }
  deleteProduct(id) {
    return this.http.delete(`https://${window.location.hostname}:8443/api/products/deleteProduct/${id}`, {
      observe: 'response',
      withCredentials: true
    });
  }
  getProductById(id) {
    return this.http.get(`https://${window.location.hostname}:8443/api/products/getProductById/${id}`);
  }
  getAllProducts() {
    return this.http.get(`https://${window.location.hostname}:8443/api/products/getAllProducts`);
  }
  updateProduct(product) {
    return this.http.put(`https://${window.location.hostname}:8443/api/products/updateProduct`, product, {
      observe: 'response',
      withCredentials: true
    });
  }
  getProductByName(productname) {
    return this.http.get(`https://${window.location.hostname}:8443/api/products/getProductByName/${productname}`, {
      observe: 'response',
      withCredentials: true
    });
  }
  addProduct(product) {
    return this.http.post(`https://${window.location.hostname}:8443/api/products/addProduct`, product, {
      observe: 'response',
      withCredentials: true
    });
  }
  static #_ = this.ɵfac = function ProductService_Factory(t) {
    return new (t || ProductService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: ProductService,
    factory: ProductService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 5558:
/*!****************************************!*\
  !*** ./src/app/shop/shop.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ShopComponent: () => (/* binding */ ShopComponent)
/* harmony export */ });
/* harmony import */ var C_Users_dillo_Documents_probable_tribble_HAPPYLONELY_FRONTEND_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 6196);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _product_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product/product.service */ 1637);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/api */ 7780);
/* harmony import */ var primeng_rating__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/rating */ 3015);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/button */ 9136);
/* harmony import */ var primeng_carousel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/carousel */ 4178);
/* harmony import */ var primeng_tag__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/tag */ 3616);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 4456);











const _c0 = (a0, a1) => ({
  "pi-heart": a0,
  "pi-heart-fill": a1
});
function ShopComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 4)(1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ShopComponent_ng_template_4_Template_button_click_3_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);
      const product_r1 = restoredCtx.$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.toggleFavorite(product_r1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 9)(6, "h4", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "p-rating", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "h6", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "p-tag", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 15)(14, "p-button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ShopComponent_ng_template_4_Template_p_button_click_14_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);
      const product_r1 = restoredCtx.$implicit;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r4.onClick(product_r1.shoplink));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const product_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("src", product_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("alt", product_r1.productname);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](11, _c0, !product_r1.isFavorite, product_r1.isFavorite));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](product_r1.productname);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", product_r1.rating)("readonly", true)("cancel", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"]("$" + product_r1.price);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", product_r1.inventorystatus)("severity", ctx_r0.getSeverity(product_r1.inventorystatus));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r0.setDisabled(product_r1.inventorystatus));
  }
}
class ShopComponent {
  constructor(productService) {
    this.productService = productService;
    this.products = [];
    this.product = {
      id: "",
      productname: "",
      price: 0,
      image: "",
      inventorystatus: "",
      shoplink: "",
      isFavorite: false,
      rating: 0
    };
    this.responsiveOptions = [{
      breakpoint: '1024px',
      numVisible: 3,
      numScroll: 3
    }, {
      breakpoint: '768px',
      numVisible: 2,
      numScroll: 2
    }, {
      breakpoint: '560px',
      numVisible: 1,
      numScroll: 1
    }];
  }
  ngOnInit() {
    var _this = this;
    return (0,C_Users_dillo_Documents_probable_tribble_HAPPYLONELY_FRONTEND_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this.loadAllProducts();
    })();
  }
  loadAllProducts() {
    var _this2 = this;
    return (0,C_Users_dillo_Documents_probable_tribble_HAPPYLONELY_FRONTEND_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        let product;
        const response = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.firstValueFrom)(_this2.productService.getAllProducts());
        if (response && response.length > 0) {
          response.forEach(curProduct => {
            product.id = curProduct.id;
            product.productname = curProduct.productname;
            product.price = curProduct.price;
            product.inventorystatus = curProduct.inventorystatus;
            product.image = curProduct.image;
            product.shoplink = curProduct.shoplink;
            product.isFavorite = curProduct.isFavorite;
            product.rating = curProduct.rating;
            _this2.products.push(product);
          });
          console.log("products: ", _this2.products);
        }
      } catch (error) {
        console.error(error);
      }
    })();
  }
  loadProduct() {
    var _this3 = this;
    return (0,C_Users_dillo_Documents_probable_tribble_HAPPYLONELY_FRONTEND_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const response = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.firstValueFrom)(_this3.productService.getProductById(1));
        if (response && response.id > 0) {
          _this3.product.id = response.id;
          _this3.product.productname = response.productname;
          _this3.product.price = response.price;
          _this3.product.inventorystatus = response.inventorystatus;
          _this3.product.image = response.image;
          _this3.product.shoplink = response.shoplink;
          _this3.product.isFavorite = false;
          _this3.product.rating = Math.floor(Math.random() * 5) + 1; // Simulate random rating
          console.log("product: ", JSON.stringify(_this3.product));
        }
      } catch (error) {
        console.error(error);
      }
    })();
  }
  getSeverity(status) {
    switch (status) {
      case 'In Stock':
        return 'success';
      case 'Low Stock':
        return 'warning';
      case 'Out Of Stock':
        return 'danger';
      default:
        return 'medium';
    }
  }
  setDisabled(status) {
    return status === "Out Of Stock";
  }
  onClick(productLink) {
    if (productLink != '') window.open(productLink, "_self");
  }
  toggleFavorite(product) {
    product.isFavorite = !product.isFavorite;
  }
  static #_ = this.ɵfac = function ShopComponent_Factory(t) {
    return new (t || ShopComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_product_product_service__WEBPACK_IMPORTED_MODULE_1__.ProductService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: ShopComponent,
    selectors: [["app-shop"]],
    decls: 5,
    vars: 5,
    consts: [[1, "shoppingPage"], [1, "pageTitle"], [3, "value", "numVisible", "numScroll", "circular", "responsiveOptions"], ["pTemplate", "item"], [1, "product-card"], [1, "product-image"], [1, "product-img", 3, "src", "alt"], [1, "favorite-btn", 3, "click"], [1, "pi", 3, "ngClass"], [1, "product-details"], [1, "product-name"], [1, "product-rating"], [3, "ngModel", "readonly", "cancel"], [1, "product-price"], [3, "value", "severity"], [1, "product-actions"], ["type", "button", "label", "Add to Cart", "icon", "pi pi-shopping-cart", "styleClass", "p-button-rounded p-button-primary", 3, "disabled", "click"]],
    template: function ShopComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Featured Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "p-carousel", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, ShopComponent_ng_template_4_Template, 15, 14, "ng-template", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx.products)("numVisible", 3)("numScroll", 1)("circular", false)("responsiveOptions", ctx.responsiveOptions);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, primeng_api__WEBPACK_IMPORTED_MODULE_5__.PrimeTemplate, primeng_rating__WEBPACK_IMPORTED_MODULE_6__.Rating, primeng_button__WEBPACK_IMPORTED_MODULE_7__.Button, primeng_carousel__WEBPACK_IMPORTED_MODULE_8__.Carousel, primeng_tag__WEBPACK_IMPORTED_MODULE_9__.Tag, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgModel],
    styles: [".shoppingPage[_ngcontent-%COMP%] {\n    padding: 20px;\n}\n\n.pageTitle[_ngcontent-%COMP%] {\n    font-size: 24px;\n    margin-bottom: 20px;\n    text-align: center;\n}\n\n.product-card[_ngcontent-%COMP%] {\n    border: 1px solid #ccc;\n    border-radius: 5px;\n    padding: 10px;\n    margin: 10px;\n    text-align: center;\n    transition: box-shadow 0.3s ease-in-out;\n}\n\n.product-card[_ngcontent-%COMP%]:hover {\n    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\n}\n\n.product-image[_ngcontent-%COMP%] {\n    position: relative;\n    margin-bottom: 10px;\n}\n\n.product-img[_ngcontent-%COMP%] {\n    max-width: 100%;\n    height: auto;\n}\n\n.favorite-btn[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 10px;\n    right: 10px;\n    background-color: transparent;\n    border: none;\n    color: #ff4081;\n    font-size: 24px;\n    cursor: pointer;\n}\n\n.product-name[_ngcontent-%COMP%] {\n    font-size: 18px;\n    margin-bottom: 5px;\n}\n\n.product-rating[_ngcontent-%COMP%] {\n    margin-bottom: 5px;\n}\n\n.product-price[_ngcontent-%COMP%] {\n    font-size: 16px;\n    font-weight: bold;\n    margin-bottom: 5px;\n}\n\n.product-actions[_ngcontent-%COMP%] {\n    margin-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hvcC9zaG9wLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHVDQUF1QztBQUMzQzs7QUFFQTtJQUNJLHdDQUF3QztBQUM1Qzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsV0FBVztJQUNYLDZCQUE2QjtJQUM3QixZQUFZO0lBQ1osY0FBYztJQUNkLGVBQWU7SUFDZixlQUFlO0FBQ25COztBQUVBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCIiwic291cmNlc0NvbnRlbnQiOlsiLnNob3BwaW5nUGFnZSB7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcblxyXG4ucGFnZVRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5wcm9kdWN0LWNhcmQge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuM3MgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbi5wcm9kdWN0LWNhcmQ6aG92ZXIge1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxufVxyXG5cclxuLnByb2R1Y3QtaW1hZ2Uge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLnByb2R1Y3QtaW1nIHtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxufVxyXG5cclxuLmZhdm9yaXRlLWJ0biB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDEwcHg7XHJcbiAgICByaWdodDogMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY29sb3I6ICNmZjQwODE7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5wcm9kdWN0LW5hbWUge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG59XHJcblxyXG4ucHJvZHVjdC1yYXRpbmcge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG59XHJcblxyXG4ucHJvZHVjdC1wcmljZSB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG5cclxuLnByb2R1Y3QtYWN0aW9ucyB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 2552:
/*!**********************************************************!*\
  !*** ./src/app/thread-create/thread-create.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ThreadCreateComponent: () => (/* binding */ ThreadCreateComponent)
/* harmony export */ });
/* harmony import */ var C_Users_dillo_Documents_probable_tribble_HAPPYLONELY_FRONTEND_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 6196);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _common_service_forum_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/service/forum.service */ 6666);
/* harmony import */ var _common_service_userservice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/service/userservice */ 2744);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/button */ 9136);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/inputtext */ 8361);
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/inputtextarea */ 7058);
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/card */ 1486);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/dropdown */ 6895);












class ThreadCreateComponent {
  constructor(forumService, userService, router) {
    this.forumService = forumService;
    this.userService = userService;
    this.router = router;
    this.newThread = {
      id: '',
      content: '',
      sender: {
        id: '',
        username: '',
        statusmsg: '',
        profileimg: ''
      },
      date_sent: new Date(),
      title: '',
      category: '',
      posts: []
    };
    this.categories = ['Art', 'Music', 'Games', 'Movies', 'Books', 'Other'];
  }
  onSubmit() {
    var _this = this;
    return (0,C_Users_dillo_Documents_probable_tribble_HAPPYLONELY_FRONTEND_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        yield _this.getUsername(); // Wait for getUsername to complete and typecast 'sender' to 'HLUser'
        // Set the sender of the new thread
        console.log("Submitting new thread:", JSON.stringify(_this.newThread)); // Extra logging
        const response = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.firstValueFrom)(_this.forumService.addThread(_this.newThread));
        console.log(response);
        _this.forumService.currentThreadId = response.body.id;
        _this.router.navigate(['/thread', _this.forumService.currentThreadId]);
      } catch (error) {
        console.error(error);
      }
    })();
  }
  getUsername() {
    var _this2 = this;
    return (0,C_Users_dillo_Documents_probable_tribble_HAPPYLONELY_FRONTEND_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const response = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.firstValueFrom)(_this2.userService.getUser());
        _this2.newThread.sender = {
          id: response.body.id,
          username: response.body.username,
          statusmsg: response.body.statusmsg,
          profileimg: response.body.profileimg
        };
      } catch (error) {
        console.error(error);
      }
      return _this2.newThread.sender;
    })();
  }
  static #_ = this.ɵfac = function ThreadCreateComponent_Factory(t) {
    return new (t || ThreadCreateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_common_service_forum_service__WEBPACK_IMPORTED_MODULE_1__.ForumService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_common_service_userservice__WEBPACK_IMPORTED_MODULE_2__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: ThreadCreateComponent,
    selectors: [["app-thread-create"]],
    decls: 15,
    vars: 4,
    consts: [[1, "thread-form-container"], ["header", "Create New Thread", 1, "thread-form-card"], [1, "thread-form", 3, "ngSubmit"], [1, "p-fluid"], [1, "p-field"], ["for", "title"], ["id", "title", "type", "text", "pInputText", "", "placeholder", "Enter title", "name", "title", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "content"], ["id", "content", "pInputTextarea", "", "placeholder", "Enter content", "name", "content", "rows", "5", 1, "form-control", 3, "ngModel", "ngModelChange"], ["id", "category", "placeholder", "Select a Category", "name", "category", 1, "form-control", 3, "options", "ngModel", "ngModelChange"], ["type", "submit", "pButton", "", "label", "Create Thread", 1, "submit-button"]],
    template: function ThreadCreateComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "p-card", 1)(2, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function ThreadCreateComponent_Template_form_ngSubmit_2_listener() {
          return ctx.onSubmit();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 3)(4, "div", 4)(5, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ThreadCreateComponent_Template_input_ngModelChange_7_listener($event) {
          return ctx.newThread.title = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 4)(9, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Content");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "textarea", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ThreadCreateComponent_Template_textarea_ngModelChange_11_listener($event) {
          return ctx.newThread.content = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "p-dropdown", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ThreadCreateComponent_Template_p_dropdown_ngModelChange_12_listener($event) {
          return ctx.newThread.category = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](14, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.newThread.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.newThread.content);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("options", ctx.categories)("ngModel", ctx.newThread.category);
      }
    },
    dependencies: [primeng_button__WEBPACK_IMPORTED_MODULE_6__.ButtonDirective, primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__.InputText, primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_8__.InputTextarea, primeng_card__WEBPACK_IMPORTED_MODULE_9__.Card, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgForm, primeng_dropdown__WEBPACK_IMPORTED_MODULE_11__.Dropdown],
    styles: [".thread-form-container[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n    padding: 2rem;\n    background-color: transparent;\n}\n\n.thread-form-card[_ngcontent-%COMP%] {\n    width: 100%;\n    max-width: 600px;\n    border-radius: 8px;\n    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n\n.thread-form[_ngcontent-%COMP%] {\n    padding: 2rem;\n}\n\n.form-control[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-bottom: 1.5rem;\n}\n\n.submit-button[_ngcontent-%COMP%] {\n    display: block;\n    margin: auto;\n    width: 100%;\n}\n\n.p-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    font-weight: bold;\n    margin-bottom: 0.5rem;\n}\n\n.p-fluid[_ngcontent-%COMP%]   .p-field[_ngcontent-%COMP%] {\n    margin-bottom: 1.5rem;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdGhyZWFkLWNyZWF0ZS90aHJlYWQtY3JlYXRlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQix3Q0FBd0M7QUFDNUM7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksV0FBVztJQUNYLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6QiIsInNvdXJjZXNDb250ZW50IjpbIi50aHJlYWQtZm9ybS1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMnJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4udGhyZWFkLWZvcm0tY2FyZCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1heC13aWR0aDogNjAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG59XHJcblxyXG4udGhyZWFkLWZvcm0ge1xyXG4gICAgcGFkZGluZzogMnJlbTtcclxufVxyXG5cclxuLmZvcm0tY29udHJvbCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcclxufVxyXG5cclxuLnN1Ym1pdC1idXR0b24ge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnAtZmllbGQgbGFiZWwge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XHJcbn1cclxuXHJcbi5wLWZsdWlkIC5wLWZpZWxkIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 8551:
/*!**********************************************************!*\
  !*** ./src/app/thread-detail/thread-detail.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ThreadDetailComponent: () => (/* binding */ ThreadDetailComponent)
/* harmony export */ });
/* harmony import */ var C_Users_dillo_Documents_probable_tribble_HAPPYLONELY_FRONTEND_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 6196);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _common_service_forum_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/service/forum.service */ 6666);
/* harmony import */ var _common_service_userservice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/service/userservice */ 2744);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/button */ 9136);
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/inputtextarea */ 7058);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 4456);










function ThreadDetailComponent_div_0_div_12_img_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "img", 19);
  }
  if (rf & 2) {
    const post_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", post_r2.sender.profileimg, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
  }
}
function ThreadDetailComponent_div_0_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 12)(1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, ThreadDetailComponent_div_0_div_12_img_2_Template, 1, 1, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 15)(4, "div", 16)(5, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](9, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const post_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", post_r2.sender.profileimg);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](post_r2.sender.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](9, 4, post_r2.date_sent, "short"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](post_r2.content);
  }
}
function ThreadDetailComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 4)(7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 5)(10, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Posts");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, ThreadDetailComponent_div_0_div_12_Template, 12, 7, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 7)(14, "form", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function ThreadDetailComponent_div_0_Template_form_ngSubmit_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r5.addPost());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 9)(16, "textarea", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ThreadDetailComponent_div_0_Template_textarea_ngModelChange_16_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r7.newPost.content = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.thread.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.thread.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.thread.content);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.thread.posts);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r0.newPost.content);
  }
}
class ThreadDetailComponent {
  ngOnInit() {
    const idFromRoute = this.aRoute.snapshot.params['id'];
    if (idFromRoute) {
      this.id = idFromRoute;
      localStorage.setItem('threadId', this.id);
    } else {
      const storedId = localStorage.getItem('threadId');
      if (storedId) {
        this.id = storedId;
      }
    }
    this.getThread();
  }
  constructor(forumService, userService, aRoute, router) {
    this.forumService = forumService;
    this.userService = userService;
    this.aRoute = aRoute;
    this.router = router;
    this.user = {};
    this.thread = {};
    this.newPost = {};
    this.id = this.forumService.currentThreadId;
    this.posterProfileImg = "";
  }
  getUser() {
    var _this = this;
    return (0,C_Users_dillo_Documents_probable_tribble_HAPPYLONELY_FRONTEND_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const response = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.firstValueFrom)(_this.userService.getUser());
        _this.user.id = response.body.id;
        _this.user.username = response.body.username;
        _this.user.statusmsg = response.body.statusmsg;
        _this.user.profileimg = response.body.profileimg;
      } catch (error) {
        console.error("An error occurred:", error);
      }
    })();
  }
  getThread() {
    var _this2 = this;
    return (0,C_Users_dillo_Documents_probable_tribble_HAPPYLONELY_FRONTEND_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const response = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.firstValueFrom)(_this2.forumService.getThreadById(_this2.id));
        _this2.thread.id = response.body.id;
        _this2.thread.title = response.body.title;
        _this2.thread.category = response.body.category;
        _this2.thread.posts = response.body.posts;
        _this2.thread.date_sent = response.body.date_sent;
        _this2.thread.content = response.body.content;
        _this2.thread.sender = {};
        _this2.thread.sender.id = response.body.sender.id;
        _this2.thread.sender.username = response.body.sender.username;
        _this2.thread.sender.profileimg = response.body.sender.profileimg;
        _this2.thread.sender.statusmsg = response.body.sender.statusmsg;
        yield _this2.getPosts();
      } catch (error) {
        console.error(error);
      }
    })();
  }
  addPost() {
    var _this3 = this;
    return (0,C_Users_dillo_Documents_probable_tribble_HAPPYLONELY_FRONTEND_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this3.getUser();
      _this3.newPost.sender = {}; // Initialize newPost.sender
      _this3.newPost.sender.id = _this3.user.id;
      _this3.newPost.sender.username = _this3.user.username;
      _this3.newPost.sender.profileimg = _this3.user.profileimg;
      _this3.newPost.sender.statusmsg = _this3.user.statusmsg;
      _this3.newPost.date_sent = new Date();
      _this3.newPost.thread = {};
      _this3.newPost.thread.id = _this3.aRoute.snapshot.paramMap.get('id');
      yield (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.firstValueFrom)(_this3.forumService.addPost(_this3.newPost));
      yield _this3.getPosts();
    })();
  }
  getPosts() {
    var _this4 = this;
    return (0,C_Users_dillo_Documents_probable_tribble_HAPPYLONELY_FRONTEND_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const id = _this4.id;
      try {
        const response = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.firstValueFrom)(_this4.forumService.getPostsByThreadId(id));
        _this4.thread.posts = response.body;
      } catch (error) {
        console.error(error);
      }
    })();
  }
  static #_ = this.ɵfac = function ThreadDetailComponent_Factory(t) {
    return new (t || ThreadDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_common_service_forum_service__WEBPACK_IMPORTED_MODULE_1__.ForumService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_common_service_userservice__WEBPACK_IMPORTED_MODULE_2__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: ThreadDetailComponent,
    selectors: [["app-thread-detail"]],
    decls: 1,
    vars: 1,
    consts: [["class", "thread-container", 4, "ngIf"], [1, "thread-container"], [1, "thread-header"], [1, "category"], [1, "thread-content"], [1, "posts-section"], ["class", "post", 4, "ngFor", "ngForOf"], [1, "input-area"], [3, "ngSubmit"], [1, "input-container"], ["pInputTextarea", "", "name", "postContent", "placeholder", "Write a post...", 3, "ngModel", "ngModelChange"], ["type", "submit", "pButton", "", "icon", "pi pi-send", "label", "Add Post", 1, "p-button-rounded"], [1, "post"], [1, "user-image-container"], ["alt", "User Image", "class", "user-image", 3, "src", 4, "ngIf"], [1, "post-content"], [1, "post-header"], [1, "username"], [1, "timestamp"], ["alt", "User Image", 1, "user-image", 3, "src"]],
    template: function ThreadDetailComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, ThreadDetailComponent_div_0_Template, 18, 5, "div", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.thread);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, primeng_button__WEBPACK_IMPORTED_MODULE_7__.ButtonDirective, primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_8__.InputTextarea, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgForm, _angular_common__WEBPACK_IMPORTED_MODULE_6__.DatePipe],
    styles: [".thread-container[_ngcontent-%COMP%] {\n    padding: 20px;\n}\n\n.thread-header[_ngcontent-%COMP%] {\n    margin-bottom: 20px;\n}\n\n.thread-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 24px;\n    margin-bottom: 5px;\n}\n\n.category[_ngcontent-%COMP%] {\n    color: #888;\n}\n\n.thread-content[_ngcontent-%COMP%] {\n    margin-bottom: 20px;\n}\n\n.posts-section[_ngcontent-%COMP%] {\n    margin-bottom: 80px;\n}\n\n.post[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: flex-start;\n    margin-bottom: 20px;\n}\n\n.user-image[_ngcontent-%COMP%] {\n    width: 40px;\n    height: 40px;\n    border-radius: 50%;\n    margin-right: 10px;\n}\n\n.post-content[_ngcontent-%COMP%] {\n    flex: 1;\n}\n\n.post-header[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    margin-bottom: 5px;\n}\n\n.username[_ngcontent-%COMP%] {\n    font-weight: bold;\n    margin-right: 10px;\n}\n\n.timestamp[_ngcontent-%COMP%] {\n    color: #888;\n    font-size: 12px;\n}\n\n.input-area[_ngcontent-%COMP%] {\n    position: fixed;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    padding: 10px;\n    background-color: transparent;\n}\n\n.input-container[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n}\n\n.input-container[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n    flex: 1;\n    margin-right: 10px;\n}\n\n.user-image-container[_ngcontent-%COMP%] {\n    width: 40px;\n    height: 40px;\n    border-radius: 50%;\n    margin-right: 10px;\n    overflow: hidden;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: transparent;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdGhyZWFkLWRldGFpbC90aHJlYWQtZGV0YWlsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksT0FBTztBQUNYOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsU0FBUztJQUNULE9BQU87SUFDUCxRQUFRO0lBQ1IsYUFBYTtJQUNiLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxPQUFPO0lBQ1Asa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQiw2QkFBNkI7QUFDakMiLCJzb3VyY2VzQ29udGVudCI6WyIudGhyZWFkLWNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcblxyXG4udGhyZWFkLWhlYWRlciB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4udGhyZWFkLWhlYWRlciBoMiB7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbn1cclxuXHJcbi5jYXRlZ29yeSB7XHJcbiAgICBjb2xvcjogIzg4ODtcclxufVxyXG5cclxuLnRocmVhZC1jb250ZW50IHtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi5wb3N0cy1zZWN0aW9uIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDgwcHg7XHJcbn1cclxuXHJcbi5wb3N0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi51c2VyLWltYWdlIHtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4ucG9zdC1jb250ZW50IHtcclxuICAgIGZsZXg6IDE7XHJcbn1cclxuXHJcbi5wb3N0LWhlYWRlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG5cclxuLnVzZXJuYW1lIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4udGltZXN0YW1wIHtcclxuICAgIGNvbG9yOiAjODg4O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG4uaW5wdXQtYXJlYSB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5pbnB1dC1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5pbnB1dC1jb250YWluZXIgdGV4dGFyZWEge1xyXG4gICAgZmxleDogMTtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG5cclxuLnVzZXItaW1hZ2UtY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 7720:
/*!******************************************************!*\
  !*** ./src/app/thread-list/thread-list.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ThreadListComponent: () => (/* binding */ ThreadListComponent)
/* harmony export */ });
/* harmony import */ var C_Users_dillo_Documents_probable_tribble_HAPPYLONELY_FRONTEND_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 6196);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _common_service_forum_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/service/forum.service */ 6666);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/api */ 7780);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/table */ 6676);







function ThreadListComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Category");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Creator");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function ThreadListComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td")(2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "td")(5, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "td")(8, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "td")(11, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ThreadListComponent_ng_template_10_Template_button_click_11_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);
      const thread_r2 = restoredCtx.$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.viewThread(thread_r2.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, " View ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const thread_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](thread_r2.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](thread_r2.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](thread_r2.sender.username);
  }
}
class ThreadListComponent {
  constructor(router, forumService) {
    this.router = router;
    this.forumService = forumService;
    this.threads = [];
  } // Inject the service
  ngOnInit() {
    var _this = this;
    return (0,C_Users_dillo_Documents_probable_tribble_HAPPYLONELY_FRONTEND_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this.getThreads();
    })();
  }
  getThreads() {
    var _this2 = this;
    return (0,C_Users_dillo_Documents_probable_tribble_HAPPYLONELY_FRONTEND_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const response = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.firstValueFrom)(_this2.forumService.fetchThreadsList());
      console.log(response);
    })();
  }
  addThread() {
    this.router.navigate(['/create-thread']);
  }
  viewThread(id) {
    this.forumService.currentThreadId = id;
    this.router.navigate(['/thread', this.forumService.currentThreadId]);
  }
  static #_ = this.ɵfac = function ThreadListComponent_Factory(t) {
    return new (t || ThreadListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_common_service_forum_service__WEBPACK_IMPORTED_MODULE_1__.ForumService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: ThreadListComponent,
    selectors: [["app-thread-list"]],
    decls: 11,
    vars: 1,
    consts: [["rel", "stylesheet", "href", "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"], [1, "forum-header"], [1, "add-thread-button", 3, "click"], [1, "fa", "fa-plus"], ["styleClass", "forum-table", 3, "value"], ["pTemplate", "header"], ["pTemplate", "body"], [1, "thread-title"], [1, "thread-category"], [1, "thread-creator"], [1, "view-thread-button", 3, "click"], [1, "fa", "fa-eye"]],
    template: function ThreadListComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "link", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 1)(3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Forum");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ThreadListComponent_Template_button_click_5_listener() {
          return ctx.addThread();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, " Add Thread ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "p-table", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, ThreadListComponent_ng_template_9_Template, 9, 0, "ng-template", 5)(10, ThreadListComponent_ng_template_10_Template, 14, 3, "ng-template", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx.threads);
      }
    },
    dependencies: [primeng_api__WEBPACK_IMPORTED_MODULE_5__.PrimeTemplate, primeng_table__WEBPACK_IMPORTED_MODULE_6__.Table],
    styles: [".forum-header[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin-bottom: 20px;\n}\n\n.forum-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 24px;\n    font-weight: bold;\n    color: #333;\n}\n\n.add-thread-button[_ngcontent-%COMP%] {\n    background-color: #007bff;\n    color: #fff;\n    border: none;\n    padding: 10px 20px;\n    border-radius: 4px;\n    font-size: 16px;\n    cursor: pointer;\n    transition: background-color 0.3s;\n}\n\n.add-thread-button[_ngcontent-%COMP%]:hover {\n    background-color: #0056b3;\n}\n\n.forum-table[_ngcontent-%COMP%] {\n    width: 100%;\n    border-collapse: collapse;\n}\n\n.forum-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .forum-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 12px;\n    text-align: left;\n    border-bottom: 1px solid #ddd;\n}\n\n.forum-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n    background-color: #f5f5f5;\n    font-weight: bold;\n    color: #333;\n}\n\n.thread-title[_ngcontent-%COMP%] {\n    font-size: 18px;\n    font-weight: bold;\n    color: #333;\n}\n\n.thread-category[_ngcontent-%COMP%] {\n    font-size: 16px;\n    color: #777;\n}\n\n.thread-creator[_ngcontent-%COMP%] {\n    font-size: 16px;\n    color: #555;\n}\n\n.view-thread-button[_ngcontent-%COMP%] {\n    background-color: #28a745;\n    color: #fff;\n    border: none;\n    padding: 8px 16px;\n    border-radius: 4px;\n    font-size: 14px;\n    cursor: pointer;\n    transition: background-color 0.3s;\n}\n\n.view-thread-button[_ngcontent-%COMP%]:hover {\n    background-color: #218838;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdGhyZWFkLWxpc3QvdGhyZWFkLWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsV0FBVztBQUNmOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsZUFBZTtJQUNmLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCx5QkFBeUI7QUFDN0I7O0FBRUE7O0lBRUksYUFBYTtJQUNiLGdCQUFnQjtJQUNoQiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsaUJBQWlCO0lBQ2pCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsV0FBVztBQUNmOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGVBQWU7SUFDZixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsV0FBVztJQUNYLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixlQUFlO0lBQ2YsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcnVtLWhlYWRlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi5mb3J1bS1oZWFkZXIgaDIge1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogIzMzMztcclxufVxyXG5cclxuLmFkZC10aHJlYWQtYnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDdiZmY7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcztcclxufVxyXG5cclxuLmFkZC10aHJlYWQtYnV0dG9uOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDU2YjM7XHJcbn1cclxuXHJcbi5mb3J1bS10YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbn1cclxuXHJcbi5mb3J1bS10YWJsZSB0aCxcclxuLmZvcnVtLXRhYmxlIHRkIHtcclxuICAgIHBhZGRpbmc6IDEycHg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XHJcbn1cclxuXHJcbi5mb3J1bS10YWJsZSB0aCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogIzMzMztcclxufVxyXG5cclxuLnRocmVhZC10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiAjMzMzO1xyXG59XHJcblxyXG4udGhyZWFkLWNhdGVnb3J5IHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGNvbG9yOiAjNzc3O1xyXG59XHJcblxyXG4udGhyZWFkLWNyZWF0b3Ige1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgY29sb3I6ICM1NTU7XHJcbn1cclxuXHJcbi52aWV3LXRocmVhZC1idXR0b24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI4YTc0NTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgcGFkZGluZzogOHB4IDE2cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3M7XHJcbn1cclxuXHJcbi52aWV3LXRocmVhZC1idXR0b246aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIxODgzODtcclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 1828:
/*!****************************************!*\
  !*** ./src/app/user/user.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserComponent: () => (/* binding */ UserComponent)
/* harmony export */ });
/* harmony import */ var C_Users_dillo_Documents_probable_tribble_HAPPYLONELY_FRONTEND_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 6196);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _common_service_userservice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/service/userservice */ 2744);
/* harmony import */ var _common_service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/service/auth.service */ 6055);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/button */ 9136);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/inputtext */ 8361);
/* harmony import */ var primeng_messages__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/messages */ 1564);
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/card */ 1486);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 4456);










class UserComponent {
  constructor(userService, authService) {
    this.userService = userService;
    this.authService = authService;
    this.user = {
      id: "",
      username: "",
      statusmsg: "",
      profileimg: ""
    };
    this.updatedUser = {
      id: "",
      username: "",
      statusmsg: "",
      profileimg: ""
    };
    this.statusCode = 0;
    this.errorMsgDetail = "";
    this.errorMsg = [];
  }
  ngOnInit() {}
  getUser() {
    var _this = this;
    return (0,C_Users_dillo_Documents_probable_tribble_HAPPYLONELY_FRONTEND_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const response = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.firstValueFrom)(_this.userService.getUser());
        _this.statusCode = response.status;
        if (_this.statusCode === 200) {
          _this.user = response.body;
          console.log("user: ", _this.user);
        } else {
          if (_this.errorMsg.length > 0) _this.errorMsg.pop();
          _this.errorMsgDetail = "Error getting user.  Response code: " + _this.statusCode;
          _this.errorMsg.push({
            severity: 'error',
            summary: 'Error',
            detail: _this.errorMsgDetail
          });
        }
      } catch (error) {
        console.error(error);
      }
    })();
  }
  updateUser() {
    var _this2 = this;
    return (0,C_Users_dillo_Documents_probable_tribble_HAPPYLONELY_FRONTEND_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        yield _this2.getUser();
        if (_this2.user !== null) {
          _this2.updatedUser.username = _this2.user.username;
          _this2.updatedUser.id = _this2.user.id;
        }
        const response = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.firstValueFrom)(_this2.userService.editUser(_this2.updatedUser));
        _this2.statusCode = response.status;
        if (_this2.statusCode === 200) {
          _this2.updatedUser = response.body;
          console.log("user: ", _this2.updatedUser);
        } else {
          if (_this2.errorMsg.length > 0) _this2.errorMsg.pop();
          _this2.errorMsgDetail = "Error updating user with id: " + _this2.updatedUser.id + ".  Response code: " + _this2.statusCode;
          _this2.errorMsg.push({
            severity: 'error',
            summary: 'Error',
            detail: _this2.errorMsgDetail
          });
        }
      } catch (error) {
        console.error(error);
      }
    })();
  }
  changeEmail() {
    var _this3 = this;
    return (0,C_Users_dillo_Documents_probable_tribble_HAPPYLONELY_FRONTEND_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this3.userService.changeEmail(_this3.updatedUser).subscribe({
        next: response => {
          _this3.statusCode = response.status;
          _this3.updatedUser = response.body;
          console.log("user: " + JSON.stringify(_this3.updatedUser));
          console.log("status code: " + _this3.statusCode);
        },
        error: error => {
          _this3.statusCode = error.status;
          console.error("An error occurred:", error);
          console.log("status code: " + _this3.statusCode);
          _this3.errorMsgDetail = "Error updating user with id: " + _this3.updatedUser.id + ".  Response code: " + _this3.statusCode;
          _this3.errorMsg.pop();
          _this3.errorMsg.push({
            severity: 'error',
            summary: 'Error',
            detail: _this3.errorMsgDetail
          });
        }
      });
    })();
  }
  static #_ = this.ɵfac = function UserComponent_Factory(t) {
    return new (t || UserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_common_service_userservice__WEBPACK_IMPORTED_MODULE_1__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_common_service_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: UserComponent,
    selectors: [["app-user"]],
    decls: 13,
    vars: 3,
    consts: [["header", "Edit User Profile"], [3, "value", "valueChange"], [1, "p-fluid", "p-formgrid", "p-grid"], [1, "p-field", "p-col-12"], ["for", "statusmsg"], ["id", "statusmsg", "type", "text", "pInputText", "", "placeholder", "Enter your status message", 3, "ngModel", "ngModelChange"], ["for", "profileimg"], ["id", "profileimg", "type", "text", "pInputText", "", "placeholder", "Enter URL for your profile image", 3, "ngModel", "ngModelChange"], ["pButton", "", "type", "button", "label", "Update", 1, "ui-button-success", 3, "click"]],
    template: function UserComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p-card", 0)(1, "p-messages", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("valueChange", function UserComponent_Template_p_messages_valueChange_1_listener($event) {
          return ctx.errorMsg = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2)(3, "div", 3)(4, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Status Message");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function UserComponent_Template_input_ngModelChange_6_listener($event) {
          return ctx.updatedUser.statusmsg = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 3)(8, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Profile Image URL");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function UserComponent_Template_input_ngModelChange_10_listener($event) {
          return ctx.updatedUser.profileimg = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 3)(12, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function UserComponent_Template_button_click_12_listener() {
          return ctx.updateUser();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", ctx.errorMsg);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.updatedUser.statusmsg);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.updatedUser.profileimg);
      }
    },
    dependencies: [primeng_button__WEBPACK_IMPORTED_MODULE_5__.ButtonDirective, primeng_inputtext__WEBPACK_IMPORTED_MODULE_6__.InputText, primeng_messages__WEBPACK_IMPORTED_MODULE_7__.Messages, primeng_card__WEBPACK_IMPORTED_MODULE_8__.Card, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgModel],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 1897:
/*!****************************************************!*\
  !*** ./src/app/youtube-dl/youtube-dl.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   YoutubeDLComponent: () => (/* binding */ YoutubeDLComponent)
/* harmony export */ });
/* harmony import */ var C_Users_dillo_Documents_probable_tribble_HAPPYLONELY_FRONTEND_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! file-saver */ 5841);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 6196);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/button */ 9136);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/inputtext */ 8361);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/dropdown */ 6895);









class YoutubeDLComponent {
  constructor(http) {
    this.http = http;
    this.url = '';
    this.types = [{
      name: 'Music',
      value: 'music'
    }, {
      name: 'Video',
      value: 'video'
    }];
  }
  download() {
    var _this = this;
    return (0,C_Users_dillo_Documents_probable_tribble_HAPPYLONELY_FRONTEND_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this.url && _this.selectedType) {
        const body = {
          url: _this.url,
          type: _this.selectedType
        };
        try {
          const response = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.firstValueFrom)(_this.http.post('https://' + window.location.hostname + ':8443/api/youtube-dl/download', body, {
            observe: 'response',
            responseType: 'arraybuffer'
          }));
          let filename = response.headers.get('Content-Disposition')?.split('=')[1];
          if (response.body && filename) {
            let blob = new Blob([response.body], {
              type: _this.selectedType === 'music' ? 'audio/mpeg' : 'video/mp4'
            });
            _this.createAndDownloadBlobFile(blob, filename);
          }
        } catch (error) {
          console.error(error);
        }
      } else {
        alert('Please enter a URL and select a type.');
      }
    })();
  }
  createAndDownloadBlobFile(blob, filename) {
    (0,file_saver__WEBPACK_IMPORTED_MODULE_1__.saveAs)(blob, filename);
  }
  static #_ = this.ɵfac = function YoutubeDLComponent_Factory(t) {
    return new (t || YoutubeDLComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: YoutubeDLComponent,
    selectors: [["app-youtube-dl"]],
    decls: 13,
    vars: 3,
    consts: [[1, "p-grid", "p-fluid"], [1, "p-col-12"], [1, "p-inputgroup"], [1, "p-inputgroup-addon"], [1, "pi", "pi-globe"], ["id", "url", "type", "text", "pInputText", "", "placeholder", "Enter URL", 1, "p-inputtext", "p-component", 3, "ngModel", "ngModelChange"], [1, "custom-dropdown"], [1, "pi", "pi-list"], ["optionLabel", "name", "optionValue", "value", 3, "options", "ngModel", "ngModelChange"], ["pButton", "", "type", "button", "label", "Download", "icon", "pi pi-download", "styleClass", "p-button-success p-button-rounded", 3, "click"]],
    template: function YoutubeDLComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function YoutubeDLComponent_Template_input_ngModelChange_5_listener($event) {
          return ctx.url = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 1)(7, "div", 6)(8, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "p-dropdown", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function YoutubeDLComponent_Template_p_dropdown_ngModelChange_10_listener($event) {
          return ctx.selectedType = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 1)(12, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function YoutubeDLComponent_Template_button_click_12_listener() {
          return ctx.download();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.url);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("options", ctx.types)("ngModel", ctx.selectedType);
      }
    },
    dependencies: [primeng_button__WEBPACK_IMPORTED_MODULE_5__.ButtonDirective, primeng_inputtext__WEBPACK_IMPORTED_MODULE_6__.InputText, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, primeng_dropdown__WEBPACK_IMPORTED_MODULE_8__.Dropdown],
    styles: [".custom-dropdown[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    width: 50%;\n}\n\n.custom-dropdown[_ngcontent-%COMP%]   .p-inputgroup-addon[_ngcontent-%COMP%] {\n    margin-right: 0px;\n}\n\n.custom-dropdown[_ngcontent-%COMP%]   .p-dropdown[_ngcontent-%COMP%] {\n    flex-grow: 1;\n}\n\n.custom-dropdown[_ngcontent-%COMP%]   .p-dropdown[_ngcontent-%COMP%]   .p-dropdown-label[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 0.75rem;\n    font-size: 1rem;\n    height: auto;\n    line-height: 1.5;\n    display: flex;\n    align-items: center;\n}\n\n.custom-dropdown[_ngcontent-%COMP%]   .p-dropdown-panel[_ngcontent-%COMP%] {\n    width: 100%;\n}\n\n.custom-dropdown[_ngcontent-%COMP%]   .p-dropdown-items[_ngcontent-%COMP%] {\n    width: 100%;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAveW91dHViZS1kbC95b3V0dWJlLWRsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxXQUFXO0FBQ2YiLCJzb3VyY2VzQ29udGVudCI6WyIuY3VzdG9tLWRyb3Bkb3duIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgd2lkdGg6IDUwJTtcclxufVxyXG5cclxuLmN1c3RvbS1kcm9wZG93biAucC1pbnB1dGdyb3VwLWFkZG9uIHtcclxuICAgIG1hcmdpbi1yaWdodDogMHB4O1xyXG59XHJcblxyXG4uY3VzdG9tLWRyb3Bkb3duIC5wLWRyb3Bkb3duIHtcclxuICAgIGZsZXgtZ3JvdzogMTtcclxufVxyXG5cclxuLmN1c3RvbS1kcm9wZG93biAucC1kcm9wZG93biAucC1kcm9wZG93bi1sYWJlbCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDAuNzVyZW07XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jdXN0b20tZHJvcGRvd24gLnAtZHJvcGRvd24tcGFuZWwge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5jdXN0b20tZHJvcGRvd24gLnAtZHJvcGRvd24taXRlbXMge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 4429:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 635);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4429)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map