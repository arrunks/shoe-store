webpackHotUpdate("static\\development\\pages\\checkout.js",{

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-cookies */ \"./node_modules/next-cookies/index.js\");\n/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_cookies__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ \"./node_modules/reactstrap/es/index.js\");\n/* harmony import */ var _lib_AppContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/AppContext */ \"./lib/AppContext.js\");\nvar _this = undefined,\n    _jsxFileName = \"C:\\\\my-projects\\\\shoe-store\\\\components\\\\Header.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\nvar Header = function Header() {\n  _s();\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useContext\"])(_lib_AppContext__WEBPACK_IMPORTED_MODULE_5__[\"AppContext\"]),\n      globalStore = _useContext.globalStore;\n\n  var user = globalStore.user,\n      cart = globalStore.cart;\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"])();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      isOpen = _useState[0],\n      setIsOpen = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      dropdownOpen = _useState2[0],\n      setDropdownOpen = _useState2[1];\n\n  var toggleDropdown = function toggleDropdown() {\n    return setDropdownOpen(function (prevState) {\n      return !prevState;\n    });\n  };\n\n  var toggle = function toggle() {\n    return setIsOpen(!isOpen);\n  };\n\n  var doLogout = function doLogout() {\n    document.cookie = 'jwt=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT';\n    router.reload('/');\n  };\n\n  var goToOrders = function goToOrders() {\n    router.push('/orders');\n  };\n\n  var cartCount = cart.length > 0 ? \"\".concat(cart.length) : '0';\n  return __jsx(\"div\", {\n    className: \"navbar-container\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 3\n    }\n  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__[\"Navbar\"], {\n    expand: \"md\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 4\n    }\n  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__[\"NavbarBrand\"], {\n    href: \"/\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 5\n    }\n  }, \"Shoe Store\"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__[\"NavbarToggler\"], {\n    onClick: toggle,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 5\n    }\n  }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    className: \"ml-auto\",\n    href: \"/cart\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 5\n    }\n  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__[\"Button\"], {\n    className: \"mr-2\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 6\n    }\n  }, \"Cart \", __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__[\"Badge\"], {\n    color: \"secondary\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 12\n    }\n  }, cartCount))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__[\"Collapse\"], {\n    isOpen: isOpen,\n    navbar: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 5\n    }\n  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__[\"Nav\"], {\n    className: \"ml-auto\",\n    navbar: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 6\n    }\n  }, user && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 8\n    }\n  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__[\"NavItem\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 9\n    }\n  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__[\"Dropdown\"], {\n    isOpen: dropdownOpen,\n    toggle: toggleDropdown,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 10\n    }\n  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__[\"DropdownToggle\"], {\n    caret: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 11\n    }\n  }, user.username), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__[\"DropdownMenu\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 11\n    }\n  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__[\"DropdownItem\"], {\n    onClick: doLogout,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 12\n    }\n  }, \"Logout\"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__[\"DropdownItem\"], {\n    onClick: goToOrders,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 12\n    }\n  }, \"Orders\"))))), !user && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 8\n    }\n  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__[\"NavItem\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 9\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    href: \"/signin\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 10\n    }\n  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__[\"Button\"], {\n    className: \"mr-2\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 11\n    }\n  }, \"Sign in\"))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__[\"NavItem\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 9\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    href: \"/signup\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 10\n    }\n  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__[\"Button\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 11\n    }\n  }, \"Sign up\"))))))));\n};\n\n_s(Header, \"9pul9/zkY1pBi5MG/nwIyd7y7x4=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"]];\n});\n\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\n\nvar _c;\n\n$RefreshReg$(_c, \"Header\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlYWRlci5qcz82ZjRhIl0sIm5hbWVzIjpbIkhlYWRlciIsInVzZUNvbnRleHQiLCJBcHBDb250ZXh0IiwiZ2xvYmFsU3RvcmUiLCJ1c2VyIiwiY2FydCIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZVN0YXRlIiwiaXNPcGVuIiwic2V0SXNPcGVuIiwiZHJvcGRvd25PcGVuIiwic2V0RHJvcGRvd25PcGVuIiwidG9nZ2xlRHJvcGRvd24iLCJwcmV2U3RhdGUiLCJ0b2dnbGUiLCJkb0xvZ291dCIsImRvY3VtZW50IiwiY29va2llIiwicmVsb2FkIiwiZ29Ub09yZGVycyIsInB1c2giLCJjYXJ0Q291bnQiLCJsZW5ndGgiLCJ1c2VybmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFpQkE7O0FBRUEsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUFBOztBQUFBLG9CQUNJQyx3REFBVSxDQUFDQywwREFBRCxDQURkO0FBQUEsTUFDWkMsV0FEWSxlQUNaQSxXQURZOztBQUFBLE1BR1pDLElBSFksR0FHR0QsV0FISCxDQUdaQyxJQUhZO0FBQUEsTUFHTkMsSUFITSxHQUdHRixXQUhILENBR05FLElBSE07QUFLcEIsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4Qjs7QUFMb0Isa0JBTVFDLHNEQUFRLENBQUMsS0FBRCxDQU5oQjtBQUFBLE1BTWJDLE1BTmE7QUFBQSxNQU1MQyxTQU5LOztBQUFBLG1CQU9vQkYsc0RBQVEsQ0FBQyxLQUFELENBUDVCO0FBQUEsTUFPYkcsWUFQYTtBQUFBLE1BT0NDLGVBUEQ7O0FBU3BCLE1BQU1DLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUI7QUFBQSxXQUFNRCxlQUFlLENBQUMsVUFBQ0UsU0FBRDtBQUFBLGFBQWUsQ0FBQ0EsU0FBaEI7QUFBQSxLQUFELENBQXJCO0FBQUEsR0FBdkI7O0FBRUEsTUFBTUMsTUFB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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQyxpREFBRDtBQUFRLGFBQVMsRUFBQyxNQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREQsQ0FERCxDQURELEVBTUMsTUFBQyxrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxTQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxNQUFDLGlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERCxDQURELENBTkQsQ0FoQkYsQ0FERCxDQVJELENBREQsQ0FERDtBQTZDQSxDQXJFRDs7R0FBTUosTTtVQUtVTyxxRDs7O0tBTFZQLE07QUF1RVNBLHFFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9IZWFkZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjb29raWVzIGZyb20gJ25leHQtY29va2llcyc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHtcclxuXHRDb2xsYXBzZSxcclxuXHROYXZiYXIsXHJcblx0TmF2YmFyVG9nZ2xlcixcclxuXHROYXZiYXJCcmFuZCxcclxuXHROYXYsXHJcblx0TmF2SXRlbSxcclxuXHROYXZMaW5rLFxyXG5cdERyb3Bkb3duLFxyXG5cdERyb3Bkb3duVG9nZ2xlLFxyXG5cdERyb3Bkb3duTWVudSxcclxuXHREcm9wZG93bkl0ZW0sXHJcblx0TmF2YmFyVGV4dCxcclxuXHRCdXR0b24sXHJcblx0QmFkZ2UsXHJcbn0gZnJvbSAncmVhY3RzdHJhcCc7XHJcblxyXG5pbXBvcnQgeyBBcHBDb250ZXh0IH0gZnJvbSAnLi4vbGliL0FwcENvbnRleHQnO1xyXG5cclxuY29uc3QgSGVhZGVyID0gKCkgPT4ge1xyXG5cdGNvbnN0IHsgZ2xvYmFsU3RvcmUgfSA9IHVzZUNvbnRleHQoQXBwQ29udGV4dCk7XHJcblxyXG5cdGNvbnN0IHsgdXNlciwgY2FydCB9ID0gZ2xvYmFsU3RvcmU7XHJcblxyXG5cdGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cdGNvbnN0IFtpc09wZW4sIHNldElzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblx0Y29uc3QgW2Ryb3Bkb3duT3Blbiwgc2V0RHJvcGRvd25PcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcblx0Y29uc3QgdG9nZ2xlRHJvcGRvd24gPSAoKSA9PiBzZXREcm9wZG93bk9wZW4oKHByZXZTdGF0ZSkgPT4gIXByZXZTdGF0ZSk7XHJcblxyXG5cdGNvbnN0IHRvZ2dsZSA9ICgpID0+IHNldElzT3BlbighaXNPcGVuKTtcclxuXHJcblx0Y29uc3QgZG9Mb2dvdXQgPSAoKSA9PiB7XHJcblx0XHRkb2N1bWVudC5jb29raWUgPSAnand0PTsgcGF0aD0vOyBleHBpcmVzPVRodSwgMDEgSmFuIDE5NzAgMDA6MDA6MDEgR01UJztcclxuXHRcdHJvdXRlci5yZWxvYWQoJy8nKTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBnb1RvT3JkZXJzID0gKCkgPT4ge1xyXG5cdFx0cm91dGVyLnB1c2goJy9vcmRlcnMnKTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBjYXJ0Q291bnQgPSBjYXJ0Lmxlbmd0aCA+IDAgPyBgJHtjYXJ0Lmxlbmd0aH1gIDogJzAnO1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9J25hdmJhci1jb250YWluZXInPlxyXG5cdFx0XHQ8TmF2YmFyIGV4cGFuZD0nbWQnPlxyXG5cdFx0XHRcdDxOYXZiYXJCcmFuZCBocmVmPScvJz5TaG9lIFN0b3JlPC9OYXZiYXJCcmFuZD5cclxuXHRcdFx0XHQ8TmF2YmFyVG9nZ2xlciBvbkNsaWNrPXt0b2dnbGV9IC8+XHJcblx0XHRcdFx0PExpbmsgY2xhc3NOYW1lPSdtbC1hdXRvJyBocmVmPScvY2FydCc+XHJcblx0XHRcdFx0XHQ8QnV0dG9uIGNsYXNzTmFtZT0nbXItMic+XHJcblx0XHRcdFx0XHRcdENhcnQgPEJhZGdlIGNvbG9yPSdzZWNvbmRhcnknPntjYXJ0Q291bnR9PC9CYWRnZT5cclxuXHRcdFx0XHRcdDwvQnV0dG9uPlxyXG5cdFx0XHRcdDwvTGluaz5cclxuXHRcdFx0XHQ8Q29sbGFwc2UgaXNPcGVuPXtpc09wZW59IG5hdmJhcj5cclxuXHRcdFx0XHRcdDxOYXYgY2xhc3NOYW1lPSdtbC1hdXRvJyBuYXZiYXI+XHJcblx0XHRcdFx0XHRcdHt1c2VyICYmIChcclxuXHRcdFx0XHRcdFx0XHQ8UmVhY3QuRnJhZ21lbnQ+XHJcblx0XHRcdFx0XHRcdFx0XHQ8TmF2SXRlbT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PERyb3Bkb3duIGlzT3Blbj17ZHJvcGRvd25PcGVufSB0b2dnbGU9e3RvZ2dsZURyb3Bkb3dufT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8RHJvcGRvd25Ub2dnbGUgY2FyZXQ+e3VzZXIudXNlcm5hbWV9PC9Ecm9wZG93blRvZ2dsZT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8RHJvcGRvd25NZW51PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PERyb3Bkb3duSXRlbSBvbkNsaWNrPXtkb0xvZ291dH0+TG9nb3V0PC9Ecm9wZG93bkl0ZW0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8RHJvcGRvd25JdGVtIG9uQ2xpY2s9e2dvVG9PcmRlcnN9Pk9yZGVyczwvRHJvcGRvd25JdGVtPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvRHJvcGRvd25NZW51PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L0Ryb3Bkb3duPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9OYXZJdGVtPlxyXG5cdFx0XHRcdFx0XHRcdDwvUmVhY3QuRnJhZ21lbnQ+XHJcblx0XHRcdFx0XHRcdCl9XHJcblxyXG5cdFx0XHRcdFx0XHR7IXVzZXIgJiYgKFxyXG5cdFx0XHRcdFx0XHRcdDxSZWFjdC5GcmFnbWVudD5cclxuXHRcdFx0XHRcdFx0XHRcdDxOYXZJdGVtPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8TGluayBocmVmPScvc2lnbmluJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uIGNsYXNzTmFtZT0nbXItMic+U2lnbiBpbjwvQnV0dG9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L05hdkl0ZW0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8TmF2SXRlbT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PExpbmsgaHJlZj0nL3NpZ251cCc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PEJ1dHRvbj5TaWduIHVwPC9CdXR0b24+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvTGluaz5cclxuXHRcdFx0XHRcdFx0XHRcdDwvTmF2SXRlbT5cclxuXHRcdFx0XHRcdFx0XHQ8L1JlYWN0LkZyYWdtZW50PlxyXG5cdFx0XHRcdFx0XHQpfVxyXG5cdFx0XHRcdFx0PC9OYXY+XHJcblx0XHRcdFx0PC9Db2xsYXBzZT5cclxuXHRcdFx0PC9OYXZiYXI+XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Header.js\n");

/***/ })

})