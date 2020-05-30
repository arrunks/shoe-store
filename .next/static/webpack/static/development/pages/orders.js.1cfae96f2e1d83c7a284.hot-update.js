webpackHotUpdate("static\\development\\pages\\orders.js",{

/***/ "./pages/orders.js":
/*!*************************!*\
  !*** ./pages/orders.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_withAuth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/withAuth */ \"./lib/withAuth.js\");\n/* harmony import */ var _lib_withLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/withLayout */ \"./lib/withLayout.js\");\n/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apollo/react-hooks */ \"./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! graphql-tag */ \"./node_modules/graphql-tag/src/index.js\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_5__);\n\n\nvar _this = undefined,\n    _jsxFileName = \"C:\\\\my-projects\\\\shoe-store\\\\pages\\\\orders.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n\\tquery orders($type: fetchOrderInput!) {\\n\\t\\torders(where: $type) {\\n\\t\\t\\tshippingAddress\\n\\t\\t}\\n\\t}\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\nvar FETCH_ORDER = graphql_tag__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject());\n\nvar Orders = function Orders(_ref) {\n  _s();\n\n  var user = _ref.user;\n\n  var _useQuery = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4__[\"useQuery\"])(FETCH_ORDER, {\n    variables: {\n      amount: 7997\n    }\n  }),\n      loading = _useQuery.loading,\n      error = _useQuery.error,\n      data = _useQuery.data;\n\n  if (loading) return __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 22\n    }\n  }, \"Loading ...\");\n  return __jsx(\"h1\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 9\n    }\n  }, \"amount \", data.orders[0].amount, \"!\");\n};\n\n_s(Orders, \"OQZiY3KqWoytFPIJWw/H9Hrmbok=\", false, function () {\n  return [_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4__[\"useQuery\"]];\n});\n\n_c = Orders;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c3 = Object(_lib_withAuth__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_c2 = Object(_lib_withLayout__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Orders), {\n  loginRequired: true\n}));\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"Orders\");\n$RefreshReg$(_c2, \"%default%$withAuth\");\n$RefreshReg$(_c3, \"%default%\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9vcmRlcnMuanM/NTdlYiJdLCJuYW1lcyI6WyJGRVRDSF9PUkRFUiIsImdxbCIsIk9yZGVycyIsInVzZXIiLCJ1c2VRdWVyeSIsInZhcmlhYmxlcyIsImFtb3VudCIsImxvYWRpbmciLCJlcnJvciIsImRhdGEiLCJvcmRlcnMiLCJ3aXRoQXV0aCIsIndpdGhMYXlvdXQiLCJsb2dpblJlcXVpcmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFFQSxJQUFNQSxXQUFXLEdBQUdDLGtEQUFILG1CQUFqQjs7QUFRQSxJQUFNQyxNQUFNLEdBQUcsU0FBVEEsTUFBUyxPQUFjO0FBQUE7O0FBQUEsTUFBWEMsSUFBVyxRQUFYQSxJQUFXOztBQUFBLGtCQUNLQyxvRUFBUSxDQUFDSixXQUFELEVBQWM7QUFDdERLLGFBQVMsRUFBRTtBQUFFQyxZQUFNLEVBQUU7QUFBVjtBQUQyQyxHQUFkLENBRGI7QUFBQSxNQUNwQkMsT0FEb0IsYUFDcEJBLE9BRG9CO0FBQUEsTUFDWEMsS0FEVyxhQUNYQSxLQURXO0FBQUEsTUFDSkMsSUFESSxhQUNKQSxJQURJOztBQUk1QixNQUFJRixPQUFKLEVBQWEsT0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUFQO0FBQ2IsU0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUFZRSxJQUFJLENBQUNDLE1BQUwsQ0FBWSxDQUFaLEVBQWVKLE1BQTNCLE1BQVA7QUFDQSxDQU5EOztHQUFNSixNO1VBQzRCRSw0RDs7O0tBRDVCRixNO0FBUVMscUVBQUFTLDZEQUFRLE9BQUNDLCtEQUFVLENBQUNWLE1BQUQsQ0FBWCxFQUFxQjtBQUFFVyxlQUFhLEVBQUU7QUFBakIsQ0FBckIsQ0FBdkIiLCJmaWxlIjoiLi9wYWdlcy9vcmRlcnMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgd2l0aEF1dGggZnJvbSAnLi4vbGliL3dpdGhBdXRoJztcclxuaW1wb3J0IHdpdGhMYXlvdXQgZnJvbSAnLi4vbGliL3dpdGhMYXlvdXQnO1xyXG5cclxuaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tICdAYXBvbGxvL3JlYWN0LWhvb2tzJztcclxuaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XHJcblxyXG5jb25zdCBGRVRDSF9PUkRFUiA9IGdxbGBcclxuXHRxdWVyeSBvcmRlcnMoJHR5cGU6IGZldGNoT3JkZXJJbnB1dCEpIHtcclxuXHRcdG9yZGVycyh3aGVyZTogJHR5cGUpIHtcclxuXHRcdFx0c2hpcHBpbmdBZGRyZXNzXHJcblx0XHR9XHJcblx0fVxyXG5gO1xyXG5cclxuY29uc3QgT3JkZXJzID0gKHsgdXNlciB9KSA9PiB7XHJcblx0Y29uc3QgeyBsb2FkaW5nLCBlcnJvciwgZGF0YSB9ID0gdXNlUXVlcnkoRkVUQ0hfT1JERVIsIHtcclxuXHRcdHZhcmlhYmxlczogeyBhbW91bnQ6IDc5OTcgfSxcclxuXHR9KTtcclxuXHRpZiAobG9hZGluZykgcmV0dXJuIDxwPkxvYWRpbmcgLi4uPC9wPjtcclxuXHRyZXR1cm4gPGgxPmFtb3VudCB7ZGF0YS5vcmRlcnNbMF0uYW1vdW50fSE8L2gxPjtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhBdXRoKHdpdGhMYXlvdXQoT3JkZXJzKSwgeyBsb2dpblJlcXVpcmVkOiB0cnVlIH0pO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/orders.js\n");

/***/ })

})