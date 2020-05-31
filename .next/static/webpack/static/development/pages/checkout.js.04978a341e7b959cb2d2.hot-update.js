webpackHotUpdate("static\\development\\pages\\checkout.js",{

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-cookies */ \"./node_modules/next-cookies/index.js\");\n/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_cookies__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ \"./node_modules/reactstrap/es/index.js\");\n/* harmony import */ var _lib_AppContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/AppContext */ \"./lib/AppContext.js\");\nvar _this = undefined,\n    _jsxFileName = \"C:\\\\my-projects\\\\shoe-store\\\\components\\\\Header.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\nvar Header = function Header() {\n  _s();\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useContext\"])(_lib_AppContext__WEBPACK_IMPORTED_MODULE_5__[\"AppContext\"]),\n      globalStore = _useContext.globalStore;\n\n  var user = globalStore.user,\n      cart = globalStore.cart;\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"])();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      isOpen = _useState[0],\n      setIsOpen = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      dropdownOpen = _useState2[0],\n      setDropdownOpen = _useState2[1];\n\n  var toggleDropdown = function toggleDropdown() {\n    return setDropdownOpen(function (prevState) {\n      return !prevState;\n    });\n  };\n\n  var toggle = function toggle() {\n    return setIsOpen(!isOpen);\n  };\n\n  var doLogout = function doLogout() {\n    document.cookie = 'jwt=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT';\n    router.reload('/');\n  };\n\n  var goToOrders = function goToOrders() {\n    router.push('/orders');\n  };\n\n  var cartCount = cart.length > 0 ? \"\".concat(cart.length) : '0';\n  return __jsx(\"div\", {\n    className: \"navbar-container\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 3\n    }\n  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__[\"Navbar\"], {\n    expand: \"md\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 4\n    }\n  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__[\"NavbarBrand\"], {\n    href: \"/\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 5\n    }\n  }, \"Shoe Store\"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__[\"NavbarToggler\"], {\n    onClick: toggle,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 5\n    }\n  }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    href: \"/cart\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 5\n    }\n  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__[\"Button\"], {\n    className: \"mr-2\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 6\n    }\n  }, \"Cart \", __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__[\"Badge\"], {\n    color: \"secondary\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 12\n    }\n  }, cartCount))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__[\"Collapse\"], {\n    isOpen: isOpen,\n    navbar: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 5\n    }\n  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__[\"Nav\"], {\n    className: \"ml-auto\",\n    navbar: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 6\n    }\n  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__[\"NavItem\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 7\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    href: \"/cart\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 8\n    }\n  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__[\"Button\"], {\n    className: \"mr-2\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 9\n    }\n  }, \"Cart \", __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__[\"Badge\"], {\n    color: \"secondary\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 15\n    }\n  }, cartCount)))), user && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 8\n    }\n  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__[\"NavItem\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 9\n    }\n  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__[\"Dropdown\"], {\n    isOpen: dropdownOpen,\n    toggle: toggleDropdown,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 10\n    }\n  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__[\"DropdownToggle\"], {\n    caret: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 11\n    }\n  }, user.username), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__[\"DropdownMenu\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 11\n    }\n  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__[\"DropdownItem\"], {\n    onClick: doLogout,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 12\n    }\n  }, \"Logout\"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__[\"DropdownItem\"], {\n    onClick: goToOrders,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 12\n    }\n  }, \"Orders\"))))), !user && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 8\n    }\n  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__[\"NavItem\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 9\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    href: \"/signin\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 10\n    }\n  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__[\"Button\"], {\n    className: \"mr-2\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 11\n    }\n  }, \"Sign in\"))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__[\"NavItem\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 9\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    href: \"/signup\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 10\n    }\n  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__[\"Button\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 90,\n      columnNumber: 11\n    }\n  }, \"Sign up\"))))))));\n};\n\n_s(Header, \"9pul9/zkY1pBi5MG/nwIyd7y7x4=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"]];\n});\n\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\n\nvar _c;\n\n$RefreshReg$(_c, \"Header\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlYWRlci5qcz82ZjRhIl0sIm5hbWVzIjpbIkhlYWRlciIsInVzZUNvbnRleHQiLCJBcHBDb250ZXh0IiwiZ2xvYmFsU3RvcmUiLCJ1c2VyIiwiY2FydCIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZVN0YXRlIiwiaXNPcGVuIiwic2V0SXNPcGVuIiwiZHJvcGRvd25PcGVuIiwic2V0RHJvcGRvd25PcGVuIiwidG9nZ2xlRHJvcGRvd24iLCJwcmV2U3RhdGUiLCJ0b2dnbGUiLCJkb0xvZ291dCIsImRvY3VtZW50IiwiY29va2llIiwicmVsb2FkIiwiZ29Ub09yZGVycyIsInB1c2giLCJjYXJ0Q291bnQiLCJsZW5ndGgiLCJ1c2VybmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFpQkE7O0FBRUEsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUFBOztBQUFBLG9CQUNJQyx3REFBVSxDQUFDQywwREFBRCxDQURkO0FBQUEsTUFDWkMsV0FEWSxlQUNaQSxXQURZOztBQUFBLE1BR1pDLElBSFksR0FHR0QsV0FISCxDQUdaQyxJQUhZO0FBQUEsTUFHTkMsSUFITSxHQUdHRixXQUhILENBR05FLElBSE07QUFLcEIsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4Qjs7QUFMb0Isa0JBTVFDLHNEQUFRLENBQUMsS0FBRCxDQU5oQjtBQUFBLE1BTWJDLE1BTmE7QUFBQSxNQU1MQyxTQU5LOztBQUFBLG1CQU9vQkYsc0RBQVEsQ0FBQyxLQUFELENBUDVCO0FBQUEsTUFPYkcsWUFQYTtBQUFBLE1BT0NDLGVBUEQ7O0FBU3BCLE1BQU1DLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUI7QUFBQSxXQUFNRCxlQUFlLENBQUMsVUFBQ0UsU0FBRDtBQUFBLGFBQWUsQ0FBQ0EsU0FBaEI7QUFBQSxLQUFELENBQXJCO0FBQUEsR0FBdkI7O0FBRUEsTUFBTUMsTUFB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QUFBLGNBREQsRUFFQyxNQUFDLHVEQUFEO0FBQWMsV0FBTyxFQUFFSSxVQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkQsQ0FGRCxDQURELENBREQsQ0FURixFQXNCRSxDQUFDaEIsSUFBRCxJQUNBLE1BQUMsNENBQUQsQ0FBTyxRQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxNQUFDLGtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLFNBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMsaURBQUQ7QUFBUSxhQUFTLEVBQUMsTUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURELENBREQsQ0FERCxFQU1DLE1BQUMsa0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsU0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQyxpREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREQsQ0FERCxDQU5ELENBdkJGLENBREQsQ0FSRCxDQURELENBREQ7QUFvREEsQ0E1RUQ7O0dBQU1KLE07VUFLVU8scUQ7OztLQUxWUCxNO0FBOEVTQSxxRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvSGVhZGVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY29va2llcyBmcm9tICduZXh0LWNvb2tpZXMnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7XHJcblx0Q29sbGFwc2UsXHJcblx0TmF2YmFyLFxyXG5cdE5hdmJhclRvZ2dsZXIsXHJcblx0TmF2YmFyQnJhbmQsXHJcblx0TmF2LFxyXG5cdE5hdkl0ZW0sXHJcblx0TmF2TGluayxcclxuXHREcm9wZG93bixcclxuXHREcm9wZG93blRvZ2dsZSxcclxuXHREcm9wZG93bk1lbnUsXHJcblx0RHJvcGRvd25JdGVtLFxyXG5cdE5hdmJhclRleHQsXHJcblx0QnV0dG9uLFxyXG5cdEJhZGdlLFxyXG59IGZyb20gJ3JlYWN0c3RyYXAnO1xyXG5cclxuaW1wb3J0IHsgQXBwQ29udGV4dCB9IGZyb20gJy4uL2xpYi9BcHBDb250ZXh0JztcclxuXHJcbmNvbnN0IEhlYWRlciA9ICgpID0+IHtcclxuXHRjb25zdCB7IGdsb2JhbFN0b3JlIH0gPSB1c2VDb250ZXh0KEFwcENvbnRleHQpO1xyXG5cclxuXHRjb25zdCB7IHVzZXIsIGNhcnQgfSA9IGdsb2JhbFN0b3JlO1xyXG5cclxuXHRjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHRjb25zdCBbaXNPcGVuLCBzZXRJc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cdGNvbnN0IFtkcm9wZG93bk9wZW4sIHNldERyb3Bkb3duT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG5cdGNvbnN0IHRvZ2dsZURyb3Bkb3duID0gKCkgPT4gc2V0RHJvcGRvd25PcGVuKChwcmV2U3RhdGUpID0+ICFwcmV2U3RhdGUpO1xyXG5cclxuXHRjb25zdCB0b2dnbGUgPSAoKSA9PiBzZXRJc09wZW4oIWlzT3Blbik7XHJcblxyXG5cdGNvbnN0IGRvTG9nb3V0ID0gKCkgPT4ge1xyXG5cdFx0ZG9jdW1lbnQuY29va2llID0gJ2p3dD07IHBhdGg9LzsgZXhwaXJlcz1UaHUsIDAxIEphbiAxOTcwIDAwOjAwOjAxIEdNVCc7XHJcblx0XHRyb3V0ZXIucmVsb2FkKCcvJyk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgZ29Ub09yZGVycyA9ICgpID0+IHtcclxuXHRcdHJvdXRlci5wdXNoKCcvb3JkZXJzJyk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgY2FydENvdW50ID0gY2FydC5sZW5ndGggPiAwID8gYCR7Y2FydC5sZW5ndGh9YCA6ICcwJztcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXYgY2xhc3NOYW1lPSduYXZiYXItY29udGFpbmVyJz5cclxuXHRcdFx0PE5hdmJhciBleHBhbmQ9J21kJz5cclxuXHRcdFx0XHQ8TmF2YmFyQnJhbmQgaHJlZj0nLyc+U2hvZSBTdG9yZTwvTmF2YmFyQnJhbmQ+XHJcblx0XHRcdFx0PE5hdmJhclRvZ2dsZXIgb25DbGljaz17dG9nZ2xlfSAvPlxyXG5cdFx0XHRcdDxMaW5rIGhyZWY9Jy9jYXJ0Jz5cclxuXHRcdFx0XHRcdDxCdXR0b24gY2xhc3NOYW1lPSdtci0yJz5cclxuXHRcdFx0XHRcdFx0Q2FydCA8QmFkZ2UgY29sb3I9J3NlY29uZGFyeSc+e2NhcnRDb3VudH08L0JhZGdlPlxyXG5cdFx0XHRcdFx0PC9CdXR0b24+XHJcblx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHRcdDxDb2xsYXBzZSBpc09wZW49e2lzT3Blbn0gbmF2YmFyPlxyXG5cdFx0XHRcdFx0PE5hdiBjbGFzc05hbWU9J21sLWF1dG8nIG5hdmJhcj5cclxuXHRcdFx0XHRcdFx0PE5hdkl0ZW0+XHJcblx0XHRcdFx0XHRcdFx0PExpbmsgaHJlZj0nL2NhcnQnPlxyXG5cdFx0XHRcdFx0XHRcdFx0PEJ1dHRvbiBjbGFzc05hbWU9J21yLTInPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRDYXJ0IDxCYWRnZSBjb2xvcj0nc2Vjb25kYXJ5Jz57Y2FydENvdW50fTwvQmFkZ2U+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L0J1dHRvbj5cclxuXHRcdFx0XHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdFx0XHRcdDwvTmF2SXRlbT5cclxuXHRcdFx0XHRcdFx0e3VzZXIgJiYgKFxyXG5cdFx0XHRcdFx0XHRcdDxSZWFjdC5GcmFnbWVudD5cclxuXHRcdFx0XHRcdFx0XHRcdDxOYXZJdGVtPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8RHJvcGRvd24gaXNPcGVuPXtkcm9wZG93bk9wZW59IHRvZ2dsZT17dG9nZ2xlRHJvcGRvd259PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxEcm9wZG93blRvZ2dsZSBjYXJldD57dXNlci51c2VybmFtZX08L0Ryb3Bkb3duVG9nZ2xlPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxEcm9wZG93bk1lbnU+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8RHJvcGRvd25JdGVtIG9uQ2xpY2s9e2RvTG9nb3V0fT5Mb2dvdXQ8L0Ryb3Bkb3duSXRlbT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxEcm9wZG93bkl0ZW0gb25DbGljaz17Z29Ub09yZGVyc30+T3JkZXJzPC9Ecm9wZG93bkl0ZW0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9Ecm9wZG93bk1lbnU+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvRHJvcGRvd24+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L05hdkl0ZW0+XHJcblx0XHRcdFx0XHRcdFx0PC9SZWFjdC5GcmFnbWVudD5cclxuXHRcdFx0XHRcdFx0KX1cclxuXHJcblx0XHRcdFx0XHRcdHshdXNlciAmJiAoXHJcblx0XHRcdFx0XHRcdFx0PFJlYWN0LkZyYWdtZW50PlxyXG5cdFx0XHRcdFx0XHRcdFx0PE5hdkl0ZW0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9Jy9zaWduaW4nPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxCdXR0b24gY2xhc3NOYW1lPSdtci0yJz5TaWduIGluPC9CdXR0b24+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvTGluaz5cclxuXHRcdFx0XHRcdFx0XHRcdDwvTmF2SXRlbT5cclxuXHRcdFx0XHRcdFx0XHRcdDxOYXZJdGVtPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8TGluayBocmVmPScvc2lnbnVwJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uPlNpZ24gdXA8L0J1dHRvbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9OYXZJdGVtPlxyXG5cdFx0XHRcdFx0XHRcdDwvUmVhY3QuRnJhZ21lbnQ+XHJcblx0XHRcdFx0XHRcdCl9XHJcblx0XHRcdFx0XHQ8L05hdj5cclxuXHRcdFx0XHQ8L0NvbGxhcHNlPlxyXG5cdFx0XHQ8L05hdmJhcj5cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Header.js\n");

/***/ })

})