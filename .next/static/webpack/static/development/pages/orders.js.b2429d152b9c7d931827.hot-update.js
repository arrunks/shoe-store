webpackHotUpdate("static\\development\\pages\\orders.js",{

/***/ "./pages/orders.js":
/*!*************************!*\
  !*** ./pages/orders.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_withAuth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/withAuth */ \"./lib/withAuth.js\");\n/* harmony import */ var _lib_withLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/withLayout */ \"./lib/withLayout.js\");\n/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apollo/react-hooks */ \"./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! graphql-tag */ \"./node_modules/graphql-tag/src/index.js\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_5__);\n\n\nvar _this = undefined,\n    _jsxFileName = \"C:\\\\my-projects\\\\shoe-store\\\\pages\\\\orders.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n\\tquery orders($where: JSON) {\\n\\t\\torders(where: $where) {\\n\\t\\t\\tproducts {\\n\\t\\t\\t\\tname\\n\\t\\t\\t\\tprice\\n\\t\\t\\t}\\n\\t\\t}\\n\\t}\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\nvar FETCH_ORDER = graphql_tag__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject());\n\nvar Orders = function Orders(_ref) {\n  _s();\n\n  var user = _ref.user;\n\n  var _useQuery = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4__[\"useQuery\"])(FETCH_ORDER, {\n    variables: {\n      $type: {\n        amount: 7997\n      }\n    }\n  }),\n      loading = _useQuery.loading,\n      error = _useQuery.error,\n      data = _useQuery.data;\n\n  if (loading) return __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 22\n    }\n  }, \"Loading ...\");\n  return __jsx(\"h1\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 9\n    }\n  }, \"Address \", data.orders[0].shippingAddress, \"!\");\n};\n\n_s(Orders, \"OQZiY3KqWoytFPIJWw/H9Hrmbok=\", false, function () {\n  return [_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4__[\"useQuery\"]];\n});\n\n_c = Orders;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c3 = Object(_lib_withAuth__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_c2 = Object(_lib_withLayout__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Orders), {\n  loginRequired: true\n}));\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"Orders\");\n$RefreshReg$(_c2, \"%default%$withAuth\");\n$RefreshReg$(_c3, \"%default%\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9vcmRlcnMuanM/NTdlYiJdLCJuYW1lcyI6WyJGRVRDSF9PUkRFUiIsImdxbCIsIk9yZGVycyIsInVzZXIiLCJ1c2VRdWVyeSIsInZhcmlhYmxlcyIsIiR0eXBlIiwiYW1vdW50IiwibG9hZGluZyIsImVycm9yIiwiZGF0YSIsIm9yZGVycyIsInNoaXBwaW5nQWRkcmVzcyIsIndpdGhBdXRoIiwid2l0aExheW91dCIsImxvZ2luUmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUVBLElBQU1BLFdBQVcsR0FBR0Msa0RBQUgsbUJBQWpCOztBQVdBLElBQU1DLE1BQU0sR0FBRyxTQUFUQSxNQUFTLE9BQWM7QUFBQTs7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7O0FBQUEsa0JBQ0tDLG9FQUFRLENBQUNKLFdBQUQsRUFBYztBQUN0REssYUFBUyxFQUFFO0FBQUVDLFdBQUssRUFBRTtBQUFFQyxjQUFNLEVBQUU7QUFBVjtBQUFUO0FBRDJDLEdBQWQsQ0FEYjtBQUFBLE1BQ3BCQyxPQURvQixhQUNwQkEsT0FEb0I7QUFBQSxNQUNYQyxLQURXLGFBQ1hBLEtBRFc7QUFBQSxNQUNKQyxJQURJLGFBQ0pBLElBREk7O0FBSTVCLE1BQUlGLE9BQUosRUFBYSxPQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQVA7QUFDYixTQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQWFFLElBQUksQ0FBQ0MsTUFBTCxDQUFZLENBQVosRUFBZUMsZUFBNUIsTUFBUDtBQUNBLENBTkQ7O0dBQU1WLE07VUFDNEJFLDREOzs7S0FENUJGLE07QUFRUyxxRUFBQVcsNkRBQVEsT0FBQ0MsK0RBQVUsQ0FBQ1osTUFBRCxDQUFYLEVBQXFCO0FBQUVhLGVBQWEsRUFBRTtBQUFqQixDQUFyQixDQUF2QiIsImZpbGUiOiIuL3BhZ2VzL29yZGVycy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB3aXRoQXV0aCBmcm9tICcuLi9saWIvd2l0aEF1dGgnO1xyXG5pbXBvcnQgd2l0aExheW91dCBmcm9tICcuLi9saWIvd2l0aExheW91dCc7XHJcblxyXG5pbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gJ0BhcG9sbG8vcmVhY3QtaG9va3MnO1xyXG5pbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcclxuXHJcbmNvbnN0IEZFVENIX09SREVSID0gZ3FsYFxyXG5cdHF1ZXJ5IG9yZGVycygkd2hlcmU6IEpTT04pIHtcclxuXHRcdG9yZGVycyh3aGVyZTogJHdoZXJlKSB7XHJcblx0XHRcdHByb2R1Y3RzIHtcclxuXHRcdFx0XHRuYW1lXHJcblx0XHRcdFx0cHJpY2VcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuYDtcclxuXHJcbmNvbnN0IE9yZGVycyA9ICh7IHVzZXIgfSkgPT4ge1xyXG5cdGNvbnN0IHsgbG9hZGluZywgZXJyb3IsIGRhdGEgfSA9IHVzZVF1ZXJ5KEZFVENIX09SREVSLCB7XHJcblx0XHR2YXJpYWJsZXM6IHsgJHR5cGU6IHsgYW1vdW50OiA3OTk3IH0gfSxcclxuXHR9KTtcclxuXHRpZiAobG9hZGluZykgcmV0dXJuIDxwPkxvYWRpbmcgLi4uPC9wPjtcclxuXHRyZXR1cm4gPGgxPkFkZHJlc3Mge2RhdGEub3JkZXJzWzBdLnNoaXBwaW5nQWRkcmVzc30hPC9oMT47XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoQXV0aCh3aXRoTGF5b3V0KE9yZGVycyksIHsgbG9naW5SZXF1aXJlZDogdHJ1ZSB9KTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/orders.js\n");

/***/ })

})