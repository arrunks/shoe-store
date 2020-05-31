module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"static\\development\\pages\\checkout.js": 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "./apolloClient.js":
/*!*************************!*\
  !*** ./apolloClient.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createApolloClient; });
/* harmony import */ var apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-client */ "apollo-client");
/* harmony import */ var apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apollo_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apollo-cache-inmemory */ "apollo-cache-inmemory");
/* harmony import */ var apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var apollo_link_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! apollo-link-http */ "apollo-link-http");
/* harmony import */ var apollo_link_http__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(apollo_link_http__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-cookies */ "next-cookies");
/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_cookies__WEBPACK_IMPORTED_MODULE_4__);





function createApolloClient(initialState, ctx = {}) {
  // The `ctx` (NextPageContext) will only be present on the server.
  // use it to extract auth headers (ctx.req) or similar.
  const {
    jwt
  } = next_cookies__WEBPACK_IMPORTED_MODULE_4___default()(ctx);
  return new apollo_client__WEBPACK_IMPORTED_MODULE_0__["ApolloClient"]({
    ssrMode: Boolean(ctx),
    link: new apollo_link_http__WEBPACK_IMPORTED_MODULE_2__["HttpLink"]({
      uri: `${"http://localhost:1337"}/graphql`,
      // Server URL (must be absolute)
      credentials: 'same-origin',
      // Additional fetch() options like `credentials` or `headers`
      fetch: (isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default()),
      headers: {
        authorization: jwt ? `Bearer ${jwt}` : ''
      }
    }),
    cache: new apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_1__["InMemoryCache"]().restore(initialState)
  });
}

/***/ }),

/***/ "./components/CartItems.js":
/*!*********************************!*\
  !*** ./components/CartItems.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @stripe/react-stripe-js */ "@stripe/react-stripe-js");
/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_AppContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/AppContext */ "./lib/AppContext.js");
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/utils */ "./lib/utils.js");
var _jsxFileName = "C:\\my-projects\\shoe-store\\components\\CartItems.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const CartItems = () => {
  const {
    globalStore,
    updateStore
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_lib_AppContext__WEBPACK_IMPORTED_MODULE_4__["AppContext"]);
  const {
    user,
    cart
  } = globalStore;

  const removeItem = (cart, id) => {
    cart = Object(_lib_utils__WEBPACK_IMPORTED_MODULE_5__["removeProductFromCart"])(cart, id);
    updateStore('cart', cart);
    localStorage.setItem('cart', JSON.stringify(cart));
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 3
    }
  }, cart.length > 0 && __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 5
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    md: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 6
    }
  }, cart.map((product, i) => {
    return __jsx("div", {
      key: i,
      className: "transparent-container mb-2",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 10
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
      md: 3,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 11
      }
    }, __jsx("div", {
      className: "product-image",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 12
      }
    }, __jsx("img", {
      top: true,
      width: "100%",
      height: "100%",
      src: `${product.displayImage}`,
      alt: "Card image cap",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 13
      }
    }))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 11
      }
    }, __jsx("h4", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 12
      }
    }, product.name), __jsx("p", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 12
      }
    }, "Rs. ", product.price), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
      onClick: () => removeItem(cart, product.id),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 12
      }
    }, "Remove From Cart"))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 10
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 11
      }
    }, __jsx("p", {
      className: "mt-4",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 12
      }
    }, product.description))));
  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    md: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 6
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    className: "checkout-link",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/checkout",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 8
    }
  }, "Proceed To Checkout")), __jsx("img", {
    src: "https://www.internationalscienceediting.com/wp-content/uploads/2017/06/logo-stripe.png",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }
  }))), cart.length <= 0 && __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 25
    }
  }, "You have nothing in the cart."));
};

/* harmony default export */ __webpack_exports__["default"] = (CartItems);

/***/ }),

/***/ "./components/CheckoutForm.js":
/*!************************************!*\
  !*** ./components/CheckoutForm.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @stripe/react-stripe-js */ "@stripe/react-stripe-js");
/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! nprogress */ "nprogress");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib_withAuth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/withAuth */ "./lib/withAuth.js");
/* harmony import */ var _lib_withLayout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/withLayout */ "./lib/withLayout.js");
/* harmony import */ var _lib_AppContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lib/AppContext */ "./lib/AppContext.js");
/* harmony import */ var _components_CartItems__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/CartItems */ "./components/CartItems.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @apollo/react-hooks */ "@apollo/react-hooks");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_10__);
var _jsxFileName = "C:\\my-projects\\shoe-store\\components\\CheckoutForm.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;











const PLACE_ORDER = graphql_tag__WEBPACK_IMPORTED_MODULE_9___default.a`
	mutation createOrder($type: createOrderInput!) {
		createOrder(input: $type) {
			order {
				id
			}
		}
	}
`;

const CheckoutForm = () => {
  const {
    globalStore,
    updateStore
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_lib_AppContext__WEBPACK_IMPORTED_MODULE_7__["AppContext"]);
  const {
    0: shippingAddress,
    1: setShippingAddress
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  const [createOrder] = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_10__["useMutation"])(PLACE_ORDER);
  const {
    user,
    cart
  } = globalStore;
  const {
    0: succeeded,
    1: setSucceeded
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: error,
    1: setError
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const {
    0: processing,
    1: setProcessing
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: disabled,
    1: setDisabled
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  const {
    0: clientSecret,
    1: setClientSecret
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const stripe = Object(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_2__["useStripe"])();
  const elements = Object(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_2__["useElements"])();
  const totalPrice = cart.reduce((a, c) => {
    return a + c.price;
  }, 0);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    // Create PaymentIntent as soon as the page loads
    if (totalPrice) {
      window.fetch('/api/stripe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          amount: totalPrice
        })
      }).then(res => {
        return res.json();
      }).then(data => {
        setClientSecret(data.clientSecret);
      });
    }
  }, [totalPrice]);
  const cardStyle = {
    style: {
      base: {
        color: '#32325d',
        fontFamily: 'Arial, sans-serif',
        fontSmoothing: 'antialiased',
        fontSize: '16px',
        '::placeholder': {
          color: '#32325d'
        },
        backGroundColor: '#ffffff',
        height: '400px'
      },
      invalid: {
        color: '#fa755a',
        iconColor: '#fa755a'
      }
    }
  };

  const handleChange = async event => {
    // Listen for changes in the CardElement
    // and display any errors as the customer types their card details
    setDisabled(event.empty);
    setError(event.error ? event.error.message : '');
  };

  const placeOrder = async () => {
    if (!shippingAddress || disabled) {
      return false;
    }

    nprogress__WEBPACK_IMPORTED_MODULE_4___default.a.start();
    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_2__["CardElement"]),
        billing_details: {
          address: {
            city: 'delhi',
            country: 'US',
            line1: 'adf',
            line2: null,
            postal_code: '18888',
            state: 'dehli'
          },
          email: user.email,
          name: user.username,
          phone: '+15555555555'
        }
      }
    });
    const productIds = cart.reduce((a, c) => {
      a.push(c.id);
      return a;
    }, []);
    createOrder({
      variables: {
        type: {
          data: {
            user: user._id,
            products: productIds,
            shippingAddress,
            amount: totalPrice
          }
        }
      }
    });
    updateStore('cart', []);
    localStorage.setItem('cart', JSON.stringify([]));
    nprogress__WEBPACK_IMPORTED_MODULE_4___default.a.stop();
    next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push('/orders');
  };

  const removeItem = (cart, id) => {
    cart = removeProductFromCart(cart, id);
    updateStore('cart', cart);
    localStorage.setItem('cart', JSON.stringify(cart));
  };

  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 3
    }
  }, !cart && __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 14
    }
  }, "No Order in place."), cart && __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 5
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    md: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 6
    }
  }, __jsx("div", {
    className: "transparent-container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 7
    }
  }, __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 8
    }
  }, "Total Price: Rs. ", totalPrice), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 8
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 9
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 10
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Label"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 11
    }
  }, "Enter Card Information"), __jsx(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_2__["CardElement"], {
    className: "card-number-element",
    options: cardStyle,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 11
    }
  }))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 9
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 10
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Label"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 11
    }
  }, "Shipping Address:"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Input"], {
    type: "textarea",
    name: "text",
    id: "shippingAddress",
    onChange: e => setShippingAddress(e.target.value),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 11
    }
  }))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 9
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 10
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    onClick: placeOrder,
    className: "mt-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 11
    }
  }, "Place Order"), error && __jsx("div", {
    className: "card-error",
    role: "alert",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 12
    }
  }, error), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 11
    }
  }, "Testing Card Number: \"4000056655665556\""), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 11
    }
  }, "This is a demo application only and no item will be delivered.")))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    md: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 6
    }
  }, __jsx("img", {
    src: "https://www.internationalscienceediting.com/wp-content/uploads/2017/06/logo-stripe.png",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 7
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (CheckoutForm);

/***/ }),

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-cookies */ "next-cookies");
/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_cookies__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib_AppContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/AppContext */ "./lib/AppContext.js");
var _jsxFileName = "C:\\my-projects\\shoe-store\\components\\Header.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const Header = () => {
  const {
    globalStore
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_lib_AppContext__WEBPACK_IMPORTED_MODULE_5__["AppContext"]);
  const {
    user,
    cart
  } = globalStore;
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  const {
    0: isOpen,
    1: setIsOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: dropdownOpen,
    1: setDropdownOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const toggleDropdown = () => setDropdownOpen(prevState => !prevState);

  const toggle = () => setIsOpen(!isOpen);

  const doLogout = () => {
    document.cookie = 'jwt=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT';
    router.reload('/');
  };

  const goToOrders = () => {
    router.push('/orders');
  };

  const cartCount = cart.length > 0 ? `${cart.length}` : '0';
  return __jsx("div", {
    className: "navbar-container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 3
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Navbar"], {
    expand: "md",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 4
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["NavbarBrand"], {
    href: "/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 5
    }
  }, "Shoe Store"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["NavbarToggler"], {
    onClick: toggle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 5
    }
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Collapse"], {
    isOpen: isOpen,
    navbar: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 5
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Nav"], {
    className: "ml-auto",
    navbar: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 6
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["NavItem"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/cart",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 8
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    className: "mr-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 9
    }
  }, "Cart ", __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Badge"], {
    color: "secondary",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 15
    }
  }, cartCount)))), user && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 8
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["NavItem"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 9
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Dropdown"], {
    isOpen: dropdownOpen,
    toggle: toggleDropdown,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 10
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["DropdownToggle"], {
    caret: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 11
    }
  }, user.username), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["DropdownMenu"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 11
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["DropdownItem"], {
    onClick: doLogout,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 12
    }
  }, "Logout"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["DropdownItem"], {
    onClick: goToOrders,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 12
    }
  }, "Orders"))))), !user && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 8
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["NavItem"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/signin",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 10
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    className: "mr-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 11
    }
  }, "Sign in"))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["NavItem"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/signup",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 10
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 11
    }
  }, "Sign up"))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./lib/AppContext.js":
/*!***************************!*\
  !*** ./lib/AppContext.js ***!
  \***************************/
/*! exports provided: AppContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppContext", function() { return AppContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const AppContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext({});

/***/ }),

/***/ "./lib/apollo.js":
/*!***********************!*\
  !*** ./lib/apollo.js ***!
  \***********************/
/*! exports provided: initOnContext, withApollo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initOnContext", function() { return initOnContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withApollo", function() { return withApollo; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/react-hooks */ "@apollo/react-hooks");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _apolloClient__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../apolloClient */ "./apolloClient.js");
var _jsxFileName = "C:\\my-projects\\shoe-store\\lib\\apollo.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





 // On the client, we store the Apollo Client in the following variable.
// This prevents the client from reinitializing between page transitions.

let globalApolloClient = null;
/**
 * Installs the Apollo Client on NextPageContext
 * or NextAppContext. Useful if you want to use apolloClient
 * inside getStaticProps, getStaticPaths or getServerSideProps
 * @param {NextPageContext | NextAppContext} ctx
 */

const initOnContext = ctx => {
  const inAppContext = Boolean(ctx.ctx); // We consider installing `withApollo({ ssr: true })` on global App level
  // as antipattern since it disables project wide Automatic Static Optimization.

  if (true) {
    if (inAppContext) {
      console.warn('Warning: You have opted-out of Automatic Static Optimization due to `withApollo` in `pages/_app`.\n' + 'Read more: https://err.sh/next.js/opt-out-auto-static-optimization\n');
    }
  } // Initialize ApolloClient if not already done


  const apolloClient = ctx.apolloClient || initApolloClient(ctx.apolloState || {}, inAppContext ? ctx.ctx : ctx); // We send the Apollo Client as a prop to the component to avoid calling initApollo() twice in the server.
  // Otherwise, the component would have to call initApollo() again but this
  // time without the context. Once that happens, the following code will make sure we send
  // the prop as `null` to the browser.

  apolloClient.toJSON = () => null; // Add apolloClient to NextPageContext & NextAppContext.
  // This allows us to consume the apolloClient inside our
  // custom `getInitialProps({ apolloClient })`.


  ctx.apolloClient = apolloClient;

  if (inAppContext) {
    ctx.ctx.apolloClient = apolloClient;
  }

  return ctx;
};
/**
 * Always creates a new apollo client on the server
 * Creates or reuses apollo client in the browser.
 * @param  {NormalizedCacheObject} initialState
 * @param  {NextPageContext} ctx
 */

const initApolloClient = (initialState, ctx) => {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (true) {
    return Object(_apolloClient__WEBPACK_IMPORTED_MODULE_4__["default"])(initialState, ctx);
  } // Reuse client on the client-side


  if (!globalApolloClient) {
    globalApolloClient = Object(_apolloClient__WEBPACK_IMPORTED_MODULE_4__["default"])(initialState, ctx);
  }

  return globalApolloClient;
};
/**
 * Creates a withApollo HOC
 * that provides the apolloContext
 * to a next.js Page or AppTree.
 * @param  {Object} withApolloOptions
 * @param  {Boolean} [withApolloOptions.ssr=false]
 * @returns {(PageComponent: ReactNode) => ReactNode}
 */


const withApollo = ({
  ssr = false
} = {}) => PageComponent => {
  const WithApollo = (_ref) => {
    let {
      apolloClient,
      apolloState
    } = _ref,
        pageProps = _objectWithoutProperties(_ref, ["apolloClient", "apolloState"]);

    let client;

    if (apolloClient) {
      // Happens on: getDataFromTree & next.js ssr
      client = apolloClient;
    } else {
      // Happens on: next.js csr
      client = initApolloClient(apolloState, undefined);
    }

    return __jsx(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__["ApolloProvider"], {
      client: client,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 4
      }
    }, __jsx(PageComponent, _extends({}, pageProps, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 5
      }
    })));
  }; // Set the correct displayName in development


  if (true) {
    const displayName = PageComponent.displayName || PageComponent.name || 'Component';
    WithApollo.displayName = `withApollo(${displayName})`;
  }

  if (ssr || PageComponent.getInitialProps) {
    WithApollo.getInitialProps = async ctx => {
      const inAppContext = Boolean(ctx.ctx);
      const {
        apolloClient
      } = initOnContext(ctx); // Run wrapped getInitialProps methods

      let pageProps = {};

      if (PageComponent.getInitialProps) {
        pageProps = await PageComponent.getInitialProps(ctx);
      } else if (inAppContext) {
        pageProps = await next_app__WEBPACK_IMPORTED_MODULE_1___default.a.getInitialProps(ctx);
      } // Only on the server:


      if (true) {
        const {
          AppTree
        } = ctx; // When redirecting, the response is finished.
        // No point in continuing to render

        if (ctx.res && ctx.res.finished) {
          return pageProps;
        } // Only if dataFromTree is enabled


        if (ssr && AppTree) {
          try {
            // Import `@apollo/react-ssr` dynamically.
            // We don't want to have this in our client bundle.
            const {
              getDataFromTree
            } = await Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(null, /*! @apollo/react-ssr */ "@apollo/react-ssr", 7)); // Since AppComponents and PageComponents have different context types
            // we need to modify their props a little.

            let props;

            if (inAppContext) {
              props = _objectSpread(_objectSpread({}, pageProps), {}, {
                apolloClient
              });
            } else {
              props = {
                pageProps: _objectSpread(_objectSpread({}, pageProps), {}, {
                  apolloClient
                })
              };
            } // Take the Next.js AppTree, determine which queries are needed to render,
            // and fetch them. This method can be pretty slow since it renders
            // your entire AppTree once for every query. Check out apollo fragments
            // if you want to reduce the number of rerenders.
            // https://www.apollographql.com/docs/react/data/fragments/


            await getDataFromTree(__jsx(AppTree, _extends({}, props, {
              __self: undefined,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 147,
                columnNumber: 29
              }
            })));
          } catch (error) {
            // Prevent Apollo Client GraphQL errors from crashing SSR.
            // Handle them in components via the data.error prop:
            // https://www.apollographql.com/docs/react/api/react-apollo.html#graphql-query-data-error
            console.error('Error while running `getDataFromTree`', error);
          } // getDataFromTree does not call componentWillUnmount
          // head side effect therefore need to be cleared manually


          next_head__WEBPACK_IMPORTED_MODULE_2___default.a.rewind();
        }
      }

      return _objectSpread(_objectSpread({}, pageProps), {}, {
        // Extract query data from the Apollo store
        apolloState: apolloClient.cache.extract(),
        // Provide the client for ssr. As soon as this payload
        // gets JSON.stringified it will remove itself.
        apolloClient: ctx.apolloClient
      });
    };
  }

  return WithApollo;
};

/***/ }),

/***/ "./lib/utils.js":
/*!**********************!*\
  !*** ./lib/utils.js ***!
  \**********************/
/*! exports provided: getUniqueProducts, removeProductFromCart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUniqueProducts", function() { return getUniqueProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeProductFromCart", function() { return removeProductFromCart; });
const getUniqueProducts = products => {
  if (!products || products.length <= 0) {
    return [];
  }

  const uniqueIds = new Set();
  return products.filter(product => {
    if (uniqueIds.has(product.id)) {
      return false;
    }

    uniqueIds.add(product.id);
    return true;
  });
};
const removeProductFromCart = (products, id) => {
  return products.filter(product => product.id !== id);
};

/***/ }),

/***/ "./lib/withAuth.js":
/*!*************************!*\
  !*** ./lib/withAuth.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-cookies */ "next-cookies");
/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_cookies__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\my-projects\\shoe-store\\lib\\withAuth.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





let globalUser = null;

function withAuth(BaseComponent, {
  loginRequired = true,
  logoutRequired = false
} = {}) {
  class App extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
    componentDidMount() {
      const {
        user,
        isFromServer
      } = this.props;

      if (isFromServer) {
        globalUser = user;
      } // If login is required and not logged in, redirect to "/login" page


      if (loginRequired && !logoutRequired && !user) {
        next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push('/signin');
        return;
      } // If logout is required and user logged in, redirect to "/" page


      if (logoutRequired && user) {
        next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push('/');
      }
    }

    static async getInitialProps(ctx) {
      const isFromServer = !!ctx.req;
      let user = globalUser;
      const {
        jwt
      } = next_cookies__WEBPACK_IMPORTED_MODULE_3___default()(ctx);

      if (jwt) {
        const res = await fetch(`${"http://localhost:1337"}/users/me/`, {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${jwt}`
          }
        });
        user = await res.json();
      }

      if (isFromServer && user) {
        // Convert "_id"(ObjectID from MongoDB) object to string
        user._id = user._id.toString();
      }

      const props = {
        user,
        isFromServer
      }; // Call child component's "getInitialProps", if it is defined

      if (BaseComponent.getInitialProps) {
        Object.assign(props, (await BaseComponent.getInitialProps(ctx)) || {});
      }

      return props;
    }

    render() {
      const {
        user
      } = this.props;

      if (loginRequired && !logoutRequired && !user) {
        return null;
      }

      if (logoutRequired && user) {
        return null;
      }

      return __jsx(BaseComponent, _extends({}, this.props, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 11
        }
      }));
    }

  }

  _defineProperty(App, "propTypes", {
    user: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
      username: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
      email: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
    }),
    isFromServer: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired
  });

  _defineProperty(App, "defaultProps", {
    user: null
  });

  return App;
}

/* harmony default export */ __webpack_exports__["default"] = (withAuth);

/***/ }),

/***/ "./lib/withLayout.js":
/*!***************************!*\
  !*** ./lib/withLayout.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! nprogress */ "nprogress");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
/* harmony import */ var _lib_apollo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/apollo */ "./lib/apollo.js");
/* harmony import */ var _AppContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AppContext */ "./lib/AppContext.js");
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/utils */ "./lib/utils.js");
var _jsxFileName = "C:\\my-projects\\shoe-store\\lib\\withLayout.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







next_router__WEBPACK_IMPORTED_MODULE_1___default.a.onRouteChangeStart = () => nprogress__WEBPACK_IMPORTED_MODULE_2___default.a.start();

next_router__WEBPACK_IMPORTED_MODULE_1___default.a.onRouteChangeComplete = () => nprogress__WEBPACK_IMPORTED_MODULE_2___default.a.done();

next_router__WEBPACK_IMPORTED_MODULE_1___default.a.onRouteChangeError = () => nprogress__WEBPACK_IMPORTED_MODULE_2___default.a.done();




function withLayout(BaseComponent) {
  class App extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
    constructor(props) {
      super(props);

      _defineProperty(this, "updateValue", (key, val) => {
        this.setState({
          [key]: val
        });
      });

      this.state = {
        user: props.user,
        cart: []
      };
    }

    componentDidMount() {
      const cartInLocalStorage = JSON.parse(localStorage.getItem('cart'));
      const cart = cartInLocalStorage ? Object(_lib_utils__WEBPACK_IMPORTED_MODULE_6__["getUniqueProducts"])(cartInLocalStorage) : [];
      this.setState({
        cart
      });
    }

    render() {
      return __jsx(_AppContext__WEBPACK_IMPORTED_MODULE_5__["AppContext"].Provider, {
        value: {
          globalStore: this.state,
          updateStore: this.updateValue
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 5
        }
      }, __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_3__["default"], _extends({}, this.props, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 6
        }
      })), __jsx(BaseComponent, _extends({}, this.props, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 6
        }
      })));
    }

  }

  App.getInitialProps = ctx => {
    if (BaseComponent.getInitialProps) {
      return BaseComponent.getInitialProps(ctx);
    }

    return {};
  };

  return Object(_lib_apollo__WEBPACK_IMPORTED_MODULE_4__["withApollo"])({
    ssr: true
  })(App);
}

/* harmony default export */ __webpack_exports__["default"] = (withLayout);

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_app */ "./node_modules/next/dist/pages/_app.js")


/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _url = __webpack_require__(/*! url */ "url");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _router2 = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new Map();
var IntersectionObserver = false ? undefined : null;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: (0, _router2.addBasePath)(formatUrl(href)),
        as: asHref ? (0, _router2.addBasePath)(formatUrl(asHref)) : asHref
      };
    });

    this.linkClicked = e => {
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getPaths() {
    var {
      pathname
    } = window.location;
    var {
      href: parsedHref,
      as: parsedAs
    } = this.formatUrls(this.props.href, this.props.as);
    var resolvedHref = (0, _url.resolve)(pathname, parsedHref);
    return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      var isPrefetched = prefetched[this.getPaths().join( // Join on an invalid URI character
      '%')];

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch(options) {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var paths = this.getPaths(); // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch

    _router.default.prefetch(paths[
    /* href */
    0], paths[
    /* asPath */
    1], options).catch(err => {
      if (true) {
        // rethrow to show invalid URL errors
        throw err;
      }
    });

    prefetched[paths.join( // Join on an invalid URI character
    '%')] = true;
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = /*#__PURE__*/_react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch({
          priority: true
        });
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) { var rewriteUrlForNextExport; }

    return _react.default.cloneElement(child, props);
  }

}

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var PropTypes = __webpack_require__(/*! prop-types */ "prop-types");

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, (props, propName) => {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

const basePath =  false || '';

function addBasePath(path) {
  return path.indexOf(basePath) !== 0 ? basePath + path : path;
}

exports.addBasePath = addBasePath;

function delBasePath(path) {
  return path.indexOf(basePath) === 0 ? path.substr(basePath.length) || '/' : path;
}

exports.delBasePath = delBasePath;

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

const prepareRoute = path => toRoute(!path || path === '/' ? '/index' : path);

function fetchNextData(pathname, query, isServerRender, cb) {
  let attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch(utils_1.formatWithValidation({
      pathname: addBasePath( // @ts-ignore __NEXT_DATA__
      `/_next/data/${__NEXT_DATA__.buildId}${delBasePath(pathname)}.json`),
      query
    }), {
      // Cookies are required to be present for Next.js' SSG "Preview Mode".
      // Cookies may also be required for `getServerSideProps`.
      //
      // > `fetch` won’t send cookies, unless you set the credentials init
      // > option.
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      //
      // > For maximum browser compatibility when it comes to sending &
      // > receiving cookies, always supply the `credentials: 'same-origin'`
      // > option instead of relying on the default.
      // https://github.com/github/fetch#caveats
      credentials: 'same-origin'
    }).then(res => {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error(`Failed to load static props`);
      }

      return res.json();
    });
  }

  return getResponse().then(data => {
    return cb ? cb(data) : data;
  }).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    // Static Data Cache
    this.sdc = {};

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.as === this.asPath && url_1.parse(e.state.url).pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute(url_1.parse(asPath).pathname);
      return  false ? undefined : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
    };

    this._getServerData = asPath => {
      let {
        pathname,
        query
      } = url_1.parse(asPath, true);
      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, this.isSsr);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign(Object.assign({}, data), {
      Component,
      __N_SSG: mod.__N_SSG,
      __N_SSP: mod.__N_SSP
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      let url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as;
      url = addBasePath(url);
      as = addBasePath(as); // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, as, options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      }

      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeRegex = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (true) {
              console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
            }

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, as, options);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        }

        this.set(route, pathname, query, as, routeInfo);

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      window.history[method]({
        url,
        as,
        options
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    const handleError = (err, loadErrorFail) => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(res => {
          const {
            page: Component
          } = res;
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }).catch(err => handleError(err, true)));
      });
    };

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(res => resolve({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }), reject);
    }).then(routeInfo => {
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return this._getData(() => __N_SSG ? this._getStaticData(as) : __N_SSP ? this._getServerData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(handleError);
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch page code, you may wait for the data during page rendering.
   * This feature only works in production!
   * @param url the href of prefetched page
   * @param asPath the as path of the prefetched page
   */


  prefetch(url, asPath = url, options = {}) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) {
        return;
      }

      const route = delBasePath(toRoute(pathname));
      Promise.all([this.pageLoader.prefetchData(url, delBasePath(asPath)), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]).then(() => resolve(), reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    route = delBasePath(route);
    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return utils_1.loadGetInitialProps(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = escapeRegex(normalizedRoute.replace(/\/$/, '') || '/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  let namedParameterizedRoute; // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    namedParameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
      const isCatchAll = /^(\\\.){3}/.test($1);
      const key = $1 // Un-escape key
      .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '');
      return isCatchAll ? `/(?<${escapeRegex(key)}>.+?)` : `/(?<${escapeRegex(key)}>[^/]+?)`;
    });
  }

  return Object.assign({
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  }, namedParameterizedRoute ? {
    namedRegex: `^${namedParameterizedRoute}(?:/)?$`
  } : {});
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (true) {
    if ((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

exports.AppInitialProps = _utils.AppInitialProps;
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/

async function appGetInitialProps(_ref) {
  var {
    Component,
    ctx
  } = _ref;
  var pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);
  return {
    pageProps
  };
}

class App extends _react.default.Component {
  // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level
  componentDidCatch(error, _errorInfo) {
    throw error;
  }

  render() {
    var {
      router,
      Component,
      pageProps,
      __N_SSG,
      __N_SSP
    } = this.props;
    return /*#__PURE__*/_react.default.createElement(Component, Object.assign({}, pageProps, // we don't add the legacy URL prop if it's using non-legacy
    // methods like getStaticProps and getServerSideProps
    !(__N_SSG || __N_SSP) ? {
      url: createUrl(router)
    } : {}));
  }

}

exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
var warnContainer;
var warnUrl;

if (true) {
  warnContainer = (0, _utils.execOnce)(() => {
    console.warn("Warning: the `Container` in `_app` has been deprecated and should be removed. https://err.sh/zeit/next.js/app-container-deprecated");
  });
  warnUrl = (0, _utils.execOnce)(() => {
    console.error("Warning: the 'url' property is deprecated. https://err.sh/zeit/next.js/url-deprecated");
  });
} // @deprecated noop for now until removal


function Container(p) {
  if (true) warnContainer();
  return p.children;
}

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  var {
    pathname,
    asPath,
    query
  } = router;
  return {
    get query() {
      if (true) warnUrl();
      return query;
    },

    get pathname() {
      if (true) warnUrl();
      return pathname;
    },

    get asPath() {
      if (true) warnUrl();
      return asPath;
    },

    back: () => {
      if (true) warnUrl();
      router.back();
    },
    push: (url, as) => {
      if (true) warnUrl();
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (true) warnUrl();
      var pushRoute = as ? href : '';
      var pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (true) warnUrl();
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (true) warnUrl();
      var replaceRoute = as ? href : '';
      var replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/checkout.js":
/*!***************************!*\
  !*** ./pages/checkout.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_withAuth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/withAuth */ "./lib/withAuth.js");
/* harmony import */ var _lib_withLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/withLayout */ "./lib/withLayout.js");
/* harmony import */ var _stripe_stripe_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @stripe/stripe-js */ "@stripe/stripe-js");
/* harmony import */ var _stripe_stripe_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_stripe_stripe_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @stripe/react-stripe-js */ "@stripe/react-stripe-js");
/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_CheckoutForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/CheckoutForm */ "./components/CheckoutForm.js");
var _jsxFileName = "C:\\my-projects\\shoe-store\\pages\\checkout.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const promise = Object(_stripe_stripe_js__WEBPACK_IMPORTED_MODULE_3__["loadStripe"])('pk_test_w33b2TAjMtPoB66rJb0jx4hL00Cp3TbzQk');

const Checkout = () => {
  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 3
    }
  }, __jsx("h2", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 4
    }
  }, "Checkout"), __jsx(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_4__["Elements"], {
    stripe: promise,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 4
    }
  }, __jsx(_components_CheckoutForm__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_lib_withAuth__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_lib_withLayout__WEBPACK_IMPORTED_MODULE_2__["default"])(Checkout), {
  loginRequired: true
}));

/***/ }),

/***/ 3:
/*!*********************************!*\
  !*** multi ./pages/checkout.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\my-projects\shoe-store\pages\checkout.js */"./pages/checkout.js");


/***/ }),

/***/ "@apollo/react-hooks":
/*!**************************************!*\
  !*** external "@apollo/react-hooks" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@apollo/react-hooks");

/***/ }),

/***/ "@apollo/react-ssr":
/*!************************************!*\
  !*** external "@apollo/react-ssr" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@apollo/react-ssr");

/***/ }),

/***/ "@stripe/react-stripe-js":
/*!******************************************!*\
  !*** external "@stripe/react-stripe-js" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@stripe/react-stripe-js");

/***/ }),

/***/ "@stripe/stripe-js":
/*!************************************!*\
  !*** external "@stripe/stripe-js" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@stripe/stripe-js");

/***/ }),

/***/ "apollo-cache-inmemory":
/*!****************************************!*\
  !*** external "apollo-cache-inmemory" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-cache-inmemory");

/***/ }),

/***/ "apollo-client":
/*!********************************!*\
  !*** external "apollo-client" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-client");

/***/ }),

/***/ "apollo-link-http":
/*!***********************************!*\
  !*** external "apollo-link-http" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-link-http");

/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "next-cookies":
/*!*******************************!*\
  !*** external "next-cookies" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-cookies");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "nprogress":
/*!****************************!*\
  !*** external "nprogress" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("nprogress");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "reactstrap":
/*!*****************************!*\
  !*** external "reactstrap" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly8vLi9hcG9sbG9DbGllbnQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9DYXJ0SXRlbXMuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9DaGVja291dEZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9IZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL0FwcENvbnRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL2Fwb2xsby5qcyIsIndlYnBhY2s6Ly8vLi9saWIvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL3dpdGhBdXRoLmpzIiwid2VicGFjazovLy8uL2xpYi93aXRoTGF5b3V0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvbGluay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvd2l0aC1yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvbWl0dC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9pcy1keW5hbWljLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1tYXRjaGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1yZWdleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbGluay5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9jaGVja291dC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYXBvbGxvL3JlYWN0LWhvb2tzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFwb2xsby9yZWFjdC1zc3JcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAc3RyaXBlL3JlYWN0LXN0cmlwZS1qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBzdHJpcGUvc3RyaXBlLWpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXBvbGxvLWNhY2hlLWlubWVtb3J5XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXBvbGxvLWNsaWVudFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFwb2xsby1saW5rLWh0dHBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJncmFwaHFsLXRhZ1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImlzb21vcnBoaWMtdW5mZXRjaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQtY29va2llc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibnByb2dyZXNzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJvcC10eXBlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXMtZXhhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RzdHJhcFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInVybFwiIl0sIm5hbWVzIjpbImNyZWF0ZUFwb2xsb0NsaWVudCIsImluaXRpYWxTdGF0ZSIsImN0eCIsImp3dCIsImNvb2tpZXMiLCJBcG9sbG9DbGllbnQiLCJzc3JNb2RlIiwiQm9vbGVhbiIsImxpbmsiLCJIdHRwTGluayIsInVyaSIsInByb2Nlc3MiLCJjcmVkZW50aWFscyIsImZldGNoIiwiaGVhZGVycyIsImF1dGhvcml6YXRpb24iLCJjYWNoZSIsIkluTWVtb3J5Q2FjaGUiLCJyZXN0b3JlIiwiQ2FydEl0ZW1zIiwiZ2xvYmFsU3RvcmUiLCJ1cGRhdGVTdG9yZSIsInVzZUNvbnRleHQiLCJBcHBDb250ZXh0IiwidXNlciIsImNhcnQiLCJyZW1vdmVJdGVtIiwiaWQiLCJyZW1vdmVQcm9kdWN0RnJvbUNhcnQiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsImxlbmd0aCIsIm1hcCIsInByb2R1Y3QiLCJpIiwiZGlzcGxheUltYWdlIiwibmFtZSIsInByaWNlIiwiZGVzY3JpcHRpb24iLCJQTEFDRV9PUkRFUiIsImdxbCIsIkNoZWNrb3V0Rm9ybSIsInNoaXBwaW5nQWRkcmVzcyIsInNldFNoaXBwaW5nQWRkcmVzcyIsInVzZVN0YXRlIiwiY3JlYXRlT3JkZXIiLCJ1c2VNdXRhdGlvbiIsInN1Y2NlZWRlZCIsInNldFN1Y2NlZWRlZCIsImVycm9yIiwic2V0RXJyb3IiLCJwcm9jZXNzaW5nIiwic2V0UHJvY2Vzc2luZyIsImRpc2FibGVkIiwic2V0RGlzYWJsZWQiLCJjbGllbnRTZWNyZXQiLCJzZXRDbGllbnRTZWNyZXQiLCJzdHJpcGUiLCJ1c2VTdHJpcGUiLCJlbGVtZW50cyIsInVzZUVsZW1lbnRzIiwidG90YWxQcmljZSIsInJlZHVjZSIsImEiLCJjIiwidXNlRWZmZWN0Iiwid2luZG93IiwibWV0aG9kIiwiYm9keSIsImFtb3VudCIsInRoZW4iLCJyZXMiLCJqc29uIiwiZGF0YSIsImNhcmRTdHlsZSIsInN0eWxlIiwiYmFzZSIsImNvbG9yIiwiZm9udEZhbWlseSIsImZvbnRTbW9vdGhpbmciLCJmb250U2l6ZSIsImJhY2tHcm91bmRDb2xvciIsImhlaWdodCIsImludmFsaWQiLCJpY29uQ29sb3IiLCJoYW5kbGVDaGFuZ2UiLCJldmVudCIsImVtcHR5IiwibWVzc2FnZSIsInBsYWNlT3JkZXIiLCJOUHJvZ3Jlc3MiLCJzdGFydCIsInBheWxvYWQiLCJjb25maXJtQ2FyZFBheW1lbnQiLCJwYXltZW50X21ldGhvZCIsImNhcmQiLCJnZXRFbGVtZW50IiwiQ2FyZEVsZW1lbnQiLCJiaWxsaW5nX2RldGFpbHMiLCJhZGRyZXNzIiwiY2l0eSIsImNvdW50cnkiLCJsaW5lMSIsImxpbmUyIiwicG9zdGFsX2NvZGUiLCJzdGF0ZSIsImVtYWlsIiwidXNlcm5hbWUiLCJwaG9uZSIsInByb2R1Y3RJZHMiLCJwdXNoIiwidmFyaWFibGVzIiwidHlwZSIsIl9pZCIsInByb2R1Y3RzIiwic3RvcCIsIlJvdXRlciIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIkhlYWRlciIsInJvdXRlciIsInVzZVJvdXRlciIsImlzT3BlbiIsInNldElzT3BlbiIsImRyb3Bkb3duT3BlbiIsInNldERyb3Bkb3duT3BlbiIsInRvZ2dsZURyb3Bkb3duIiwicHJldlN0YXRlIiwidG9nZ2xlIiwiZG9Mb2dvdXQiLCJkb2N1bWVudCIsImNvb2tpZSIsInJlbG9hZCIsImdvVG9PcmRlcnMiLCJjYXJ0Q291bnQiLCJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJnbG9iYWxBcG9sbG9DbGllbnQiLCJpbml0T25Db250ZXh0IiwiaW5BcHBDb250ZXh0IiwiY29uc29sZSIsIndhcm4iLCJhcG9sbG9DbGllbnQiLCJpbml0QXBvbGxvQ2xpZW50IiwiYXBvbGxvU3RhdGUiLCJ0b0pTT04iLCJ3aXRoQXBvbGxvIiwic3NyIiwiUGFnZUNvbXBvbmVudCIsIldpdGhBcG9sbG8iLCJwYWdlUHJvcHMiLCJjbGllbnQiLCJ1bmRlZmluZWQiLCJkaXNwbGF5TmFtZSIsImdldEluaXRpYWxQcm9wcyIsIkFwcCIsIkFwcFRyZWUiLCJmaW5pc2hlZCIsImdldERhdGFGcm9tVHJlZSIsInByb3BzIiwiSGVhZCIsInJld2luZCIsImV4dHJhY3QiLCJnZXRVbmlxdWVQcm9kdWN0cyIsInVuaXF1ZUlkcyIsIlNldCIsImZpbHRlciIsImhhcyIsImFkZCIsImdsb2JhbFVzZXIiLCJ3aXRoQXV0aCIsIkJhc2VDb21wb25lbnQiLCJsb2dpblJlcXVpcmVkIiwibG9nb3V0UmVxdWlyZWQiLCJDb21wb25lbnQiLCJjb21wb25lbnREaWRNb3VudCIsImlzRnJvbVNlcnZlciIsInJlcSIsIkF1dGhvcml6YXRpb24iLCJ0b1N0cmluZyIsIk9iamVjdCIsImFzc2lnbiIsInJlbmRlciIsIlByb3BUeXBlcyIsInNoYXBlIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsImJvb2wiLCJvblJvdXRlQ2hhbmdlU3RhcnQiLCJvblJvdXRlQ2hhbmdlQ29tcGxldGUiLCJkb25lIiwib25Sb3V0ZUNoYW5nZUVycm9yIiwid2l0aExheW91dCIsImNvbnN0cnVjdG9yIiwia2V5IiwidmFsIiwic2V0U3RhdGUiLCJjYXJ0SW5Mb2NhbFN0b3JhZ2UiLCJwYXJzZSIsImdldEl0ZW0iLCJ1cGRhdGVWYWx1ZSIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJyZXF1aXJlIiwiX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQiLCJleHBvcnRzIiwiX19lc01vZHVsZSIsImRlZmF1bHQiLCJfcmVhY3QiLCJfdXJsIiwiX3V0aWxzIiwiX3JvdXRlciIsIl9yb3V0ZXIyIiwiaXNMb2NhbCIsImhyZWYiLCJ1cmwiLCJvcmlnaW4iLCJnZXRMb2NhdGlvbk9yaWdpbiIsImhvc3QiLCJwcm90b2NvbCIsIm1lbW9pemVkRm9ybWF0VXJsIiwiZm9ybWF0RnVuYyIsImxhc3RIcmVmIiwibGFzdEFzIiwibGFzdFJlc3VsdCIsImFzIiwicmVzdWx0IiwiZm9ybWF0VXJsIiwiZm9ybWF0V2l0aFZhbGlkYXRpb24iLCJvYnNlcnZlciIsImxpc3RlbmVycyIsIk1hcCIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwicHJlZmV0Y2hlZCIsImdldE9ic2VydmVyIiwiZW50cmllcyIsImZvckVhY2giLCJlbnRyeSIsImNiIiwiZ2V0IiwiaXNJbnRlcnNlY3RpbmciLCJpbnRlcnNlY3Rpb25SYXRpbyIsInVub2JzZXJ2ZSIsImRlbGV0ZSIsInJvb3RNYXJnaW4iLCJsaXN0ZW5Ub0ludGVyc2VjdGlvbnMiLCJlbCIsIm9ic2VydmUiLCJzZXQiLCJlcnIiLCJMaW5rIiwicCIsImNsZWFuVXBMaXN0ZW5lcnMiLCJmb3JtYXRVcmxzIiwiYXNIcmVmIiwiYWRkQmFzZVBhdGgiLCJsaW5rQ2xpY2tlZCIsIm5vZGVOYW1lIiwiY3VycmVudFRhcmdldCIsIm1ldGFLZXkiLCJjdHJsS2V5Iiwic2hpZnRLZXkiLCJuYXRpdmVFdmVudCIsIndoaWNoIiwicGF0aG5hbWUiLCJsb2NhdGlvbiIsInJlc29sdmUiLCJwcmV2ZW50RGVmYXVsdCIsInNjcm9sbCIsImluZGV4T2YiLCJyZXBsYWNlIiwic2hhbGxvdyIsInN1Y2Nlc3MiLCJzY3JvbGxUbyIsImZvY3VzIiwicHJlZmV0Y2giLCJjb21wb25lbnRXaWxsVW5tb3VudCIsImdldFBhdGhzIiwicGFyc2VkSHJlZiIsInBhcnNlZEFzIiwicmVzb2x2ZWRIcmVmIiwiaGFuZGxlUmVmIiwicmVmIiwidGFnTmFtZSIsImlzUHJlZmV0Y2hlZCIsImpvaW4iLCJvcHRpb25zIiwicGF0aHMiLCJjYXRjaCIsImNoaWxkcmVuIiwiY3JlYXRlRWxlbWVudCIsImNoaWxkIiwiQ2hpbGRyZW4iLCJvbmx5IiwiY3VycmVudCIsIm9uTW91c2VFbnRlciIsInByaW9yaXR5Iiwib25DbGljayIsImRlZmF1bHRQcmV2ZW50ZWQiLCJwYXNzSHJlZiIsImNsb25lRWxlbWVudCIsImV4ZWNPbmNlIiwiZXhhY3QiLCJwcm9wVHlwZXMiLCJvbmVPZlR5cGUiLCJvYmplY3QiLCJlbGVtZW50IiwicHJvcE5hbWUiLCJfZGVmYXVsdCIsIm1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZSIsImNyZWF0ZVJvdXRlciIsIndpdGhSb3V0ZXIiLCJOZXh0Um91dGVyIiwiX3JvdXRlckNvbnRleHQiLCJfd2l0aFJvdXRlciIsInNpbmdsZXRvblJvdXRlciIsInJlYWR5Q2FsbGJhY2tzIiwicmVhZHkiLCJ1cmxQcm9wZXJ0eUZpZWxkcyIsInJvdXRlckV2ZW50cyIsImNvcmVNZXRob2RGaWVsZHMiLCJkZWZpbmVQcm9wZXJ0eSIsImV2ZW50cyIsImZpZWxkIiwiZ2V0Um91dGVyIiwiYXJndW1lbnRzIiwib24iLCJldmVudEZpZWxkIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzdWJzdHJpbmciLCJfc2luZ2xldG9uUm91dGVyIiwic3RhY2siLCJFcnJvciIsIlJvdXRlckNvbnRleHQiLCJfbGVuIiwiYXJncyIsIkFycmF5IiwiX2tleSIsImluc3RhbmNlIiwicHJvcGVydHkiLCJDb21wb3NlZENvbXBvbmVudCIsIldpdGhSb3V0ZXJXcmFwcGVyIiwib3JpZ0dldEluaXRpYWxQcm9wcyIsIm1pdHQiLCJhbGwiLCJjcmVhdGUiLCJoYW5kbGVyIiwib2ZmIiwic3BsaWNlIiwiZW1pdCIsImV2dHMiLCJzbGljZSIsIl9faW1wb3J0RGVmYXVsdCIsIm1vZCIsInVybF8xIiwibWl0dF8xIiwidXRpbHNfMSIsImlzX2R5bmFtaWNfMSIsInJvdXRlX21hdGNoZXJfMSIsInJvdXRlX3JlZ2V4XzEiLCJiYXNlUGF0aCIsInBhdGgiLCJkZWxCYXNlUGF0aCIsInN1YnN0ciIsInRvUm91dGUiLCJwcmVwYXJlUm91dGUiLCJmZXRjaE5leHREYXRhIiwicXVlcnkiLCJpc1NlcnZlclJlbmRlciIsImF0dGVtcHRzIiwiZ2V0UmVzcG9uc2UiLCJfX05FWFRfREFUQV9fIiwiYnVpbGRJZCIsIm9rIiwic3RhdHVzIiwiY29kZSIsImluaXRpYWxQcm9wcyIsInBhZ2VMb2FkZXIiLCJ3cmFwQXBwIiwic3Vic2NyaXB0aW9uIiwiaXNGYWxsYmFjayIsInNkYyIsIm9uUG9wU3RhdGUiLCJjaGFuZ2VTdGF0ZSIsImdldFVSTCIsImlzU3NyIiwiYXNQYXRoIiwiX2JwcyIsIl9nZXRTdGF0aWNEYXRhIiwiUHJvbWlzZSIsIl9nZXRTZXJ2ZXJEYXRhIiwicm91dGUiLCJjb21wb25lbnRzIiwiX19OX1NTRyIsIl9fTl9TU1AiLCJpc0R5bmFtaWNSb3V0ZSIsImF1dG9FeHBvcnQiLCJzdWIiLCJjbGMiLCJfd3JhcEFwcCIsIl9yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCIsInVwZGF0ZSIsIm5ld0RhdGEiLCJub3RpZnkiLCJiYWNrIiwiaGlzdG9yeSIsImNoYW5nZSIsIl9hcyIsInJlamVjdCIsIl9oIiwiU1QiLCJwZXJmb3JtYW5jZSIsIm1hcmsiLCJhYm9ydENvbXBvbmVudExvYWQiLCJvbmx5QUhhc2hDaGFuZ2UiLCJzY3JvbGxUb0hhc2giLCJ1cmxJc05ldyIsImFzUGF0aG5hbWUiLCJyb3V0ZVJlZ2V4IiwiZ2V0Um91dGVSZWdleCIsInJvdXRlTWF0Y2giLCJnZXRSb3V0ZU1hdGNoZXIiLCJtaXNzaW5nUGFyYW1zIiwia2V5cyIsImdyb3VwcyIsInBhcmFtIiwiZ2V0Um91dGVJbmZvIiwicm91dGVJbmZvIiwiY2FuY2VsbGVkIiwiYXBwQ29tcCIsIm5leHQiLCJpc1ByZXJlbmRlcmVkIiwiY2FjaGVkUm91dGVJbmZvIiwiaGFuZGxlRXJyb3IiLCJsb2FkRXJyb3JGYWlsIiwiZmV0Y2hDb21wb25lbnQiLCJwYWdlIiwiZ2lwRXJyIiwiaXNWYWxpZEVsZW1lbnRUeXBlIiwiX2dldERhdGEiLCJiZWZvcmVQb3BTdGF0ZSIsIm9sZFVybE5vSGFzaCIsIm9sZEhhc2giLCJzcGxpdCIsIm5ld1VybE5vSGFzaCIsIm5ld0hhc2giLCJoYXNoIiwiaWRFbCIsImdldEVsZW1lbnRCeUlkIiwic2Nyb2xsSW50b1ZpZXciLCJuYW1lRWwiLCJnZXRFbGVtZW50c0J5TmFtZSIsInByZWZldGNoRGF0YSIsImNhbmNlbCIsImNvbXBvbmVudFJlc3VsdCIsImxvYWRQYWdlIiwiZm4iLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwiVEVTVF9ST1VURSIsInRlc3QiLCJyZSIsImV4ZWMiLCJkZWNvZGUiLCJkZWNvZGVVUklDb21wb25lbnQiLCJfIiwicGFyYW1zIiwic2x1Z05hbWUiLCJnIiwibSIsInBvcyIsInJlcGVhdCIsImVzY2FwZVJlZ2V4Iiwic3RyIiwibm9ybWFsaXplZFJvdXRlIiwiZXNjYXBlZFJvdXRlIiwiZ3JvdXBJbmRleCIsInBhcmFtZXRlcml6ZWRSb3V0ZSIsIiQxIiwiaXNDYXRjaEFsbCIsIm5hbWVkUGFyYW1ldGVyaXplZFJvdXRlIiwiUmVnRXhwIiwibmFtZWRSZWdleCIsInVzZWQiLCJob3N0bmFtZSIsInBvcnQiLCJnZXREaXNwbGF5TmFtZSIsImlzUmVzU2VudCIsImhlYWRlcnNTZW50IiwiX2EiLCJwcm90b3R5cGUiLCJ1cmxPYmplY3RLZXlzIiwiZm9ybWF0IiwiU1AiLCJtZWFzdXJlIiwiQ29udGFpbmVyIiwiY3JlYXRlVXJsIiwiQXBwSW5pdGlhbFByb3BzIiwiYXBwR2V0SW5pdGlhbFByb3BzIiwiX3JlZiIsImNvbXBvbmVudERpZENhdGNoIiwiX2Vycm9ySW5mbyIsIndhcm5Db250YWluZXIiLCJ3YXJuVXJsIiwicHVzaFRvIiwicHVzaFJvdXRlIiwicHVzaFVybCIsInJlcGxhY2VUbyIsInJlcGxhY2VSb3V0ZSIsInJlcGxhY2VVcmwiLCJwcm9taXNlIiwibG9hZFN0cmlwZSIsIkNoZWNrb3V0Il0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsY0FBYztRQUNkLElBQUk7UUFDSjs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDckdBLHdFOzs7Ozs7Ozs7OztBQ0FBLCtEOzs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0Esa0JBQVQsQ0FBNEJDLFlBQTVCLEVBQTBDQyxHQUFH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RUFFQyxNQUFDLGdFQUFEO0FBQVUsVUFBTSxFQUFFRixPQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQyxnRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREQsQ0FGRCxDQUREO0FBUUEsQ0FURDs7QUFXZW5WLDRIQUFRLENBQUNzQiwrREFBVSxDQUFDK1QsUUFBRCxDQUFYLEVBQXVCO0FBQUVuVixlQUFhLEVBQUU7QUFBakIsQ0FBdkIsQ0FBdkIsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQkEsZ0Q7Ozs7Ozs7Ozs7O0FDQUEsOEM7Ozs7Ozs7Ozs7O0FDQUEsb0Q7Ozs7Ozs7Ozs7O0FDQUEsOEM7Ozs7Ozs7Ozs7O0FDQUEsa0Q7Ozs7Ozs7Ozs7O0FDQUEsMEM7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEscUM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsZ0MiLCJmaWxlIjoic3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGNoZWNrb3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgY2h1bmtzXG4gXHQvLyBcIjBcIiBtZWFucyBcImFscmVhZHkgbG9hZGVkXCJcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwic3RhdGljXFxcXGRldmVsb3BtZW50XFxcXHBhZ2VzXFxcXGNoZWNrb3V0LmpzXCI6IDBcbiBcdH07XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gdW5jYXVnaHQgZXJyb3IgaGFuZGxlciBmb3Igd2VicGFjayBydW50aW1lXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm9lID0gZnVuY3Rpb24oZXJyKSB7XG4gXHRcdHByb2Nlc3MubmV4dFRpY2soZnVuY3Rpb24oKSB7XG4gXHRcdFx0dGhyb3cgZXJyOyAvLyBjYXRjaCB0aGlzIGVycm9yIGJ5IHVzaW5nIGltcG9ydCgpLmNhdGNoKClcbiBcdFx0fSk7XG4gXHR9O1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMyk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIik7IiwiaW1wb3J0IHsgQXBvbGxvQ2xpZW50IH0gZnJvbSAnYXBvbGxvLWNsaWVudCc7XHJcbmltcG9ydCB7IEluTWVtb3J5Q2FjaGUgfSBmcm9tICdhcG9sbG8tY2FjaGUtaW5tZW1vcnknO1xyXG5pbXBvcnQgeyBIdHRwTGluayB9IGZyb20gJ2Fwb2xsby1saW5rLWh0dHAnO1xyXG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJztcclxuaW1wb3J0IGNvb2tpZXMgZnJvbSAnbmV4dC1jb29raWVzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUFwb2xsb0NsaWVudChpbml0aWFsU3RhdGUsIGN0eCA9IHt9KSB7XHJcblx0Ly8gVGhlIGBjdHhgIChOZXh0UGFnZUNvbnRleHQpIHdpbGwgb25seSBiZSBwcmVzZW50IG9uIHRoZSBzZXJ2ZXIuXHJcblx0Ly8gdXNlIGl0IHRvIGV4dHJhY3QgYXV0aCBoZWFkZXJzIChjdHgucmVxKSBvciBzaW1pbGFyLlxyXG5cclxuXHRjb25zdCB7IGp3dCB9ID0gY29va2llcyhjdHgpO1xyXG5cclxuXHRyZXR1cm4gbmV3IEFwb2xsb0NsaWVudCh7XHJcblx0XHRzc3JNb2RlOiBCb29sZWFuKGN0eCksXHJcblx0XHRsaW5rOiBuZXcgSHR0cExpbmsoe1xyXG5cdFx0XHR1cmk6IGAke3Byb2Nlc3MuZW52LmJhY2tlbmRVcmx9L2dyYXBocWxgLCAvLyBTZXJ2ZXIgVVJMIChtdXN0IGJlIGFic29sdXRlKVxyXG5cdFx0XHRjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJywgLy8gQWRkaXRpb25hbCBmZXRjaCgpIG9wdGlvbnMgbGlrZSBgY3JlZGVudGlhbHNgIG9yIGBoZWFkZXJzYFxyXG5cdFx0XHRmZXRjaCxcclxuXHRcdFx0aGVhZGVyczoge1xyXG5cdFx0XHRcdGF1dGhvcml6YXRpb246IGp3dCA/IGBCZWFyZXIgJHtqd3R9YCA6ICcnLFxyXG5cdFx0XHR9LFxyXG5cdFx0fSksXHJcblx0XHRjYWNoZTogbmV3IEluTWVtb3J5Q2FjaGUoKS5yZXN0b3JlKGluaXRpYWxTdGF0ZSksXHJcblx0fSk7XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50LCB1c2VDb250ZXh0LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuaW1wb3J0IHsgQ2FyZEVsZW1lbnQsIHVzZVN0cmlwZSwgdXNlRWxlbWVudHMgfSBmcm9tICdAc3RyaXBlL3JlYWN0LXN0cmlwZS1qcyc7XHJcbmltcG9ydCB7IFJvdywgQ29sLCBCdXR0b24sIExhYmVsLCBJbnB1dCB9IGZyb20gJ3JlYWN0c3RyYXAnO1xyXG5cclxuaW1wb3J0IHsgQXBwQ29udGV4dCB9IGZyb20gJy4uL2xpYi9BcHBDb250ZXh0JztcclxuaW1wb3J0IHsgcmVtb3ZlUHJvZHVjdEZyb21DYXJ0IH0gZnJvbSAnLi4vbGliL3V0aWxzJztcclxuXHJcbmNvbnN0IENhcnRJdGVtcyA9ICgpID0+IHtcclxuXHRjb25zdCB7IGdsb2JhbFN0b3JlLCB1cGRhdGVTdG9yZSB9ID0gdXNlQ29udGV4dChBcHBDb250ZXh0KTtcclxuXHJcblx0Y29uc3QgeyB1c2VyLCBjYXJ0IH0gPSBnbG9iYWxTdG9yZTtcclxuXHJcblx0Y29uc3QgcmVtb3ZlSXRlbSA9IChjYXJ0LCBpZCkgPT4ge1xyXG5cdFx0Y2FydCA9IHJlbW92ZVByb2R1Y3RGcm9tQ2FydChjYXJ0LCBpZCk7XHJcblx0XHR1cGRhdGVTdG9yZSgnY2FydCcsIGNhcnQpO1xyXG5cdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NhcnQnLCBKU09OLnN0cmluZ2lmeShjYXJ0KSk7XHJcblx0fTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxGcmFnbWVudD5cclxuXHRcdFx0e2NhcnQubGVuZ3RoID4gMCAmJiAoXHJcblx0XHRcdFx0PFJvdz5cclxuXHRcdFx0XHRcdDxDb2wgbWQ9ezZ9PlxyXG5cdFx0XHRcdFx0XHR7Y2FydC5tYXAoKHByb2R1Y3QsIGkpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRyZXR1cm4gKFxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBrZXk9e2l9IGNsYXNzTmFtZT0ndHJhbnNwYXJlbnQtY29udGFpbmVyIG1iLTInPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8Um93PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxDb2wgbWQ9ezN9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3Byb2R1Y3QtaW1hZ2UnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW1nXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dG9wXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0d2lkdGg9JzEwMCUnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aGVpZ2h0PScxMDAlJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNyYz17YCR7cHJvZHVjdC5kaXNwbGF5SW1hZ2V9YH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhbHQ9J0NhcmQgaW1hZ2UgY2FwJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9Db2w+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PENvbD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxoND57cHJvZHVjdC5uYW1lfTwvaDQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8cD5Scy4ge3Byb2R1Y3QucHJpY2V9PC9wPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiByZW1vdmVJdGVtKGNhcnQsIHByb2R1Y3QuaWQpfT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0UmVtb3ZlIEZyb20gQ2FydFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9CdXR0b24+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9Db2w+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvUm93PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8Um93PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxDb2w+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9J210LTQnPntwcm9kdWN0LmRlc2NyaXB0aW9ufTwvcD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L0NvbD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9Sb3c+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHR9KX1cclxuXHRcdFx0XHRcdDwvQ29sPlxyXG5cdFx0XHRcdFx0PENvbCBtZD17Nn0+XHJcblx0XHRcdFx0XHRcdDxCdXR0b24gY2xhc3NOYW1lPSdjaGVja291dC1saW5rJz5cclxuXHRcdFx0XHRcdFx0XHQ8TGluayBocmVmPScvY2hlY2tvdXQnPlByb2NlZWQgVG8gQ2hlY2tvdXQ8L0xpbms+XHJcblx0XHRcdFx0XHRcdDwvQnV0dG9uPlxyXG5cdFx0XHRcdFx0XHQ8aW1nIHNyYz0naHR0cHM6Ly93d3cuaW50ZXJuYXRpb25hbHNjaWVuY2VlZGl0aW5nLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxNy8wNi9sb2dvLXN0cmlwZS5wbmcnIC8+XHJcblx0XHRcdFx0XHQ8L0NvbD5cclxuXHRcdFx0XHQ8L1Jvdz5cclxuXHRcdFx0KX1cclxuXHJcblx0XHRcdHtjYXJ0Lmxlbmd0aCA8PSAwICYmIDxwPllvdSBoYXZlIG5vdGhpbmcgaW4gdGhlIGNhcnQuPC9wPn1cclxuXHRcdDwvRnJhZ21lbnQ+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcnRJdGVtcztcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyBDYXJkRWxlbWVudCwgdXNlU3RyaXBlLCB1c2VFbGVtZW50cyB9IGZyb20gJ0BzdHJpcGUvcmVhY3Qtc3RyaXBlLWpzJztcclxuaW1wb3J0IHsgUm93LCBDb2wsIEJ1dHRvbiwgTGFiZWwsIElucHV0IH0gZnJvbSAncmVhY3RzdHJhcCc7XHJcbmltcG9ydCBOUHJvZ3Jlc3MgZnJvbSAnbnByb2dyZXNzJztcclxuXHJcbmltcG9ydCB3aXRoQXV0aCBmcm9tICcuLi9saWIvd2l0aEF1dGgnO1xyXG5pbXBvcnQgd2l0aExheW91dCBmcm9tICcuLi9saWIvd2l0aExheW91dCc7XHJcblxyXG5pbXBvcnQgeyBBcHBDb250ZXh0IH0gZnJvbSAnLi4vbGliL0FwcENvbnRleHQnO1xyXG5pbXBvcnQgQ2FydEl0ZW1zIGZyb20gJy4uL2NvbXBvbmVudHMvQ2FydEl0ZW1zJztcclxuXHJcbmltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xyXG5pbXBvcnQgeyB1c2VNdXRhdGlvbiB9IGZyb20gJ0BhcG9sbG8vcmVhY3QtaG9va3MnO1xyXG5cclxuY29uc3QgUExBQ0VfT1JERVIgPSBncWxgXHJcblx0bXV0YXRpb24gY3JlYXRlT3JkZXIoJHR5cGU6IGNyZWF0ZU9yZGVySW5wdXQhKSB7XHJcblx0XHRjcmVhdGVPcmRlcihpbnB1dDogJHR5cGUpIHtcclxuXHRcdFx0b3JkZXIge1xyXG5cdFx0XHRcdGlkXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbmA7XHJcblxyXG5jb25zdCBDaGVja291dEZvcm0gPSAoKSA9PiB7XHJcblx0Y29uc3QgeyBnbG9iYWxTdG9yZSwgdXBkYXRlU3RvcmUgfSA9IHVzZUNvbnRleHQoQXBwQ29udGV4dCk7XHJcblx0Y29uc3QgW3NoaXBwaW5nQWRkcmVzcywgc2V0U2hpcHBpbmdBZGRyZXNzXSA9IHVzZVN0YXRlKCk7XHJcblx0Y29uc3QgW2NyZWF0ZU9yZGVyXSA9IHVzZU11dGF0aW9uKFBMQUNFX09SREVSKTtcclxuXHJcblx0Y29uc3QgeyB1c2VyLCBjYXJ0IH0gPSBnbG9iYWxTdG9yZTtcclxuXHJcblx0Y29uc3QgW3N1Y2NlZWRlZCwgc2V0U3VjY2VlZGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHRjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cdGNvbnN0IFtwcm9jZXNzaW5nLCBzZXRQcm9jZXNzaW5nXSA9IHVzZVN0YXRlKCcnKTtcclxuXHRjb25zdCBbZGlzYWJsZWQsIHNldERpc2FibGVkXSA9IHVzZVN0YXRlKHRydWUpO1xyXG5cdGNvbnN0IFtjbGllbnRTZWNyZXQsIHNldENsaWVudFNlY3JldF0gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG5cdGNvbnN0IHN0cmlwZSA9IHVzZVN0cmlwZSgpO1xyXG5cdGNvbnN0IGVsZW1lbnRzID0gdXNlRWxlbWVudHMoKTtcclxuXHJcblx0Y29uc3QgdG90YWxQcmljZSA9IGNhcnQucmVkdWNlKChhLCBjKSA9PiB7XHJcblx0XHRyZXR1cm4gYSArIGMucHJpY2U7XHJcblx0fSwgMCk7XHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHQvLyBDcmVhdGUgUGF5bWVudEludGVudCBhcyBzb29uIGFzIHRoZSBwYWdlIGxvYWRzXHJcblx0XHRpZiAodG90YWxQcmljZSkge1xyXG5cdFx0XHR3aW5kb3dcclxuXHRcdFx0XHQuZmV0Y2goJy9hcGkvc3RyaXBlJywge1xyXG5cdFx0XHRcdFx0bWV0aG9kOiAnUE9TVCcsXHJcblx0XHRcdFx0XHRoZWFkZXJzOiB7XHJcblx0XHRcdFx0XHRcdCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0Ym9keTogSlNPTi5zdHJpbmdpZnkoeyBhbW91bnQ6IHRvdGFsUHJpY2UgfSksXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHQudGhlbigocmVzKSA9PiB7XHJcblx0XHRcdFx0XHRyZXR1cm4gcmVzLmpzb24oKTtcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdC50aGVuKChkYXRhKSA9PiB7XHJcblx0XHRcdFx0XHRzZXRDbGllbnRTZWNyZXQoZGF0YS5jbGllbnRTZWNyZXQpO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdH0sIFt0b3RhbFByaWNlXSk7XHJcblxyXG5cdGNvbnN0IGNhcmRTdHlsZSA9IHtcclxuXHRcdHN0eWxlOiB7XHJcblx0XHRcdGJhc2U6IHtcclxuXHRcdFx0XHRjb2xvcjogJyMzMjMyNWQnLFxyXG5cdFx0XHRcdGZvbnRGYW1pbHk6ICdBcmlhbCwgc2Fucy1zZXJpZicsXHJcblx0XHRcdFx0Zm9udFNtb290aGluZzogJ2FudGlhbGlhc2VkJyxcclxuXHRcdFx0XHRmb250U2l6ZTogJzE2cHgnLFxyXG5cdFx0XHRcdCc6OnBsYWNlaG9sZGVyJzoge1xyXG5cdFx0XHRcdFx0Y29sb3I6ICcjMzIzMjVkJyxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdGJhY2tHcm91bmRDb2xvcjogJyNmZmZmZmYnLFxyXG5cdFx0XHRcdGhlaWdodDogJzQwMHB4JyxcclxuXHRcdFx0fSxcclxuXHRcdFx0aW52YWxpZDoge1xyXG5cdFx0XHRcdGNvbG9yOiAnI2ZhNzU1YScsXHJcblx0XHRcdFx0aWNvbkNvbG9yOiAnI2ZhNzU1YScsXHJcblx0XHRcdH0sXHJcblx0XHR9LFxyXG5cdH07XHJcblx0Y29uc3QgaGFuZGxlQ2hhbmdlID0gYXN5bmMgKGV2ZW50KSA9PiB7XHJcblx0XHQvLyBMaXN0ZW4gZm9yIGNoYW5nZXMgaW4gdGhlIENhcmRFbGVtZW50XHJcblx0XHQvLyBhbmQgZGlzcGxheSBhbnkgZXJyb3JzIGFzIHRoZSBjdXN0b21lciB0eXBlcyB0aGVpciBjYXJkIGRldGFpbHNcclxuXHRcdHNldERpc2FibGVkKGV2ZW50LmVtcHR5KTtcclxuXHRcdHNldEVycm9yKGV2ZW50LmVycm9yID8gZXZlbnQuZXJyb3IubWVzc2FnZSA6ICcnKTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBwbGFjZU9yZGVyID0gYXN5bmMgKCkgPT4ge1xyXG5cdFx0aWYgKCFzaGlwcGluZ0FkZHJlc3MgfHwgZGlzYWJsZWQpIHtcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fVxyXG5cdFx0TlByb2dyZXNzLnN0YXJ0KCk7XHJcblx0XHRjb25zdCBwYXlsb2FkID0gYXdhaXQgc3RyaXBlLmNvbmZpcm1DYXJkUGF5bWVudChjbGllbnRTZWNyZXQsIHtcclxuXHRcdFx0cGF5bWVudF9tZXRob2Q6IHtcclxuXHRcdFx0XHRjYXJkOiBlbGVtZW50cy5nZXRFbGVtZW50KENhcmRFbGVtZW50KSxcclxuXHRcdFx0XHRiaWxsaW5nX2RldGFpbHM6IHtcclxuXHRcdFx0XHRcdGFkZHJlc3M6IHtcclxuXHRcdFx0XHRcdFx0Y2l0eTogJ2RlbGhpJyxcclxuXHRcdFx0XHRcdFx0Y291bnRyeTogJ1VTJyxcclxuXHRcdFx0XHRcdFx0bGluZTE6ICdhZGYnLFxyXG5cdFx0XHRcdFx0XHRsaW5lMjogbnVsbCxcclxuXHRcdFx0XHRcdFx0cG9zdGFsX2NvZGU6ICcxODg4OCcsXHJcblx0XHRcdFx0XHRcdHN0YXRlOiAnZGVobGknLFxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdGVtYWlsOiB1c2VyLmVtYWlsLFxyXG5cdFx0XHRcdFx0bmFtZTogdXNlci51c2VybmFtZSxcclxuXHRcdFx0XHRcdHBob25lOiAnKzE1NTU1NTU1NTU1JyxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHR9LFxyXG5cdFx0fSk7XHJcblxyXG5cdFx0Y29uc3QgcHJvZHVjdElkcyA9IGNhcnQucmVkdWNlKChhLCBjKSA9PiB7XHJcblx0XHRcdGEucHVzaChjLmlkKTtcclxuXHRcdFx0cmV0dXJuIGE7XHJcblx0XHR9LCBbXSk7XHJcblx0XHRjcmVhdGVPcmRlcih7XHJcblx0XHRcdHZhcmlhYmxlczoge1xyXG5cdFx0XHRcdHR5cGU6IHsgZGF0YTogeyB1c2VyOiB1c2VyLl9pZCwgcHJvZHVjdHM6IHByb2R1Y3RJZHMsIHNoaXBwaW5nQWRkcmVzcywgYW1vdW50OiB0b3RhbFByaWNlIH0gfSxcclxuXHRcdFx0fSxcclxuXHRcdH0pO1xyXG5cdFx0dXBkYXRlU3RvcmUoJ2NhcnQnLCBbXSk7XHJcblx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY2FydCcsIEpTT04uc3RyaW5naWZ5KFtdKSk7XHJcblx0XHROUHJvZ3Jlc3Muc3RvcCgpO1xyXG5cdFx0Um91dGVyLnB1c2goJy9vcmRlcnMnKTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCByZW1vdmVJdGVtID0gKGNhcnQsIGlkKSA9PiB7XHJcblx0XHRjYXJ0ID0gcmVtb3ZlUHJvZHVjdEZyb21DYXJ0KGNhcnQsIGlkKTtcclxuXHRcdHVwZGF0ZVN0b3JlKCdjYXJ0JywgY2FydCk7XHJcblx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY2FydCcsIEpTT04uc3RyaW5naWZ5KGNhcnQpKTtcclxuXHR9O1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdj5cclxuXHRcdFx0eyFjYXJ0ICYmIDxwPk5vIE9yZGVyIGluIHBsYWNlLjwvcD59XHJcblx0XHRcdHtjYXJ0ICYmIChcclxuXHRcdFx0XHQ8Um93PlxyXG5cdFx0XHRcdFx0PENvbCBtZD17Nn0+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSd0cmFuc3BhcmVudC1jb250YWluZXInPlxyXG5cdFx0XHRcdFx0XHRcdDxwPlRvdGFsIFByaWNlOiBScy4ge3RvdGFsUHJpY2V9PC9wPlxyXG5cdFx0XHRcdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHRcdFx0XHQ8Um93PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8Q29sPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxMYWJlbD5FbnRlciBDYXJkIEluZm9ybWF0aW9uPC9MYWJlbD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8Q2FyZEVsZW1lbnRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nY2FyZC1udW1iZXItZWxlbWVudCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9wdGlvbnM9e2NhcmRTdHlsZX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9Db2w+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L1Jvdz5cclxuXHRcdFx0XHRcdFx0XHRcdDxSb3c+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxDb2w+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PExhYmVsPlNoaXBwaW5nIEFkZHJlc3M6PC9MYWJlbD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8SW5wdXRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9J3RleHRhcmVhJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bmFtZT0ndGV4dCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlkPSdzaGlwcGluZ0FkZHJlc3MnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KGUpID0+IHNldFNoaXBwaW5nQWRkcmVzcyhlLnRhcmdldC52YWx1ZSl9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9Db2w+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L1Jvdz5cclxuXHRcdFx0XHRcdFx0XHRcdDxSb3c+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxDb2w+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PEJ1dHRvbiBvbkNsaWNrPXtwbGFjZU9yZGVyfSBjbGFzc05hbWU9J210LTQnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0UGxhY2UgT3JkZXJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L0J1dHRvbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7ZXJyb3IgJiYgKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NhcmQtZXJyb3InIHJvbGU9J2FsZXJ0Jz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e2Vycm9yfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0KX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8cD5UZXN0aW5nIENhcmQgTnVtYmVyOiBcIjQwMDAwNTY2NTU2NjU1NTZcIjwvcD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8cD5UaGlzIGlzIGEgZGVtbyBhcHBsaWNhdGlvbiBvbmx5IGFuZCBubyBpdGVtIHdpbGwgYmUgZGVsaXZlcmVkLjwvcD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9Db2w+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L1Jvdz5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L0NvbD5cclxuXHRcdFx0XHRcdDxDb2wgbWQ9ezZ9PlxyXG5cdFx0XHRcdFx0XHQ8aW1nIHNyYz0naHR0cHM6Ly93d3cuaW50ZXJuYXRpb25hbHNjaWVuY2VlZGl0aW5nLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxNy8wNi9sb2dvLXN0cmlwZS5wbmcnIC8+XHJcblx0XHRcdFx0XHQ8L0NvbD5cclxuXHRcdFx0XHQ8L1Jvdz5cclxuXHRcdFx0KX1cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDaGVja291dEZvcm07XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGNvb2tpZXMgZnJvbSAnbmV4dC1jb29raWVzJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQge1xyXG5cdENvbGxhcHNlLFxyXG5cdE5hdmJhcixcclxuXHROYXZiYXJUb2dnbGVyLFxyXG5cdE5hdmJhckJyYW5kLFxyXG5cdE5hdixcclxuXHROYXZJdGVtLFxyXG5cdE5hdkxpbmssXHJcblx0RHJvcGRvd24sXHJcblx0RHJvcGRvd25Ub2dnbGUsXHJcblx0RHJvcGRvd25NZW51LFxyXG5cdERyb3Bkb3duSXRlbSxcclxuXHROYXZiYXJUZXh0LFxyXG5cdEJ1dHRvbixcclxuXHRCYWRnZSxcclxufSBmcm9tICdyZWFjdHN0cmFwJztcclxuXHJcbmltcG9ydCB7IEFwcENvbnRleHQgfSBmcm9tICcuLi9saWIvQXBwQ29udGV4dCc7XHJcblxyXG5jb25zdCBIZWFkZXIgPSAoKSA9PiB7XHJcblx0Y29uc3QgeyBnbG9iYWxTdG9yZSB9ID0gdXNlQ29udGV4dChBcHBDb250ZXh0KTtcclxuXHJcblx0Y29uc3QgeyB1c2VyLCBjYXJ0IH0gPSBnbG9iYWxTdG9yZTtcclxuXHJcblx0Y29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblx0Y29uc3QgW2lzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHRjb25zdCBbZHJvcGRvd25PcGVuLCBzZXREcm9wZG93bk9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuXHRjb25zdCB0b2dnbGVEcm9wZG93biA9ICgpID0+IHNldERyb3Bkb3duT3BlbigocHJldlN0YXRlKSA9PiAhcHJldlN0YXRlKTtcclxuXHJcblx0Y29uc3QgdG9nZ2xlID0gKCkgPT4gc2V0SXNPcGVuKCFpc09wZW4pO1xyXG5cclxuXHRjb25zdCBkb0xvZ291dCA9ICgpID0+IHtcclxuXHRcdGRvY3VtZW50LmNvb2tpZSA9ICdqd3Q9OyBwYXRoPS87IGV4cGlyZXM9VGh1LCAwMSBKYW4gMTk3MCAwMDowMDowMSBHTVQnO1xyXG5cdFx0cm91dGVyLnJlbG9hZCgnLycpO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGdvVG9PcmRlcnMgPSAoKSA9PiB7XHJcblx0XHRyb3V0ZXIucHVzaCgnL29yZGVycycpO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGNhcnRDb3VudCA9IGNhcnQubGVuZ3RoID4gMCA/IGAke2NhcnQubGVuZ3RofWAgOiAnMCc7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT0nbmF2YmFyLWNvbnRhaW5lcic+XHJcblx0XHRcdDxOYXZiYXIgZXhwYW5kPSdtZCc+XHJcblx0XHRcdFx0PE5hdmJhckJyYW5kIGhyZWY9Jy8nPlNob2UgU3RvcmU8L05hdmJhckJyYW5kPlxyXG5cdFx0XHRcdDxOYXZiYXJUb2dnbGVyIG9uQ2xpY2s9e3RvZ2dsZX0gLz5cclxuXHRcdFx0XHQ8Q29sbGFwc2UgaXNPcGVuPXtpc09wZW59IG5hdmJhcj5cclxuXHRcdFx0XHRcdDxOYXYgY2xhc3NOYW1lPSdtbC1hdXRvJyBuYXZiYXI+XHJcblx0XHRcdFx0XHRcdDxOYXZJdGVtPlxyXG5cdFx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9Jy9jYXJ0Jz5cclxuXHRcdFx0XHRcdFx0XHRcdDxCdXR0b24gY2xhc3NOYW1lPSdtci0yJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0Q2FydCA8QmFkZ2UgY29sb3I9J3NlY29uZGFyeSc+e2NhcnRDb3VudH08L0JhZGdlPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9CdXR0b24+XHJcblx0XHRcdFx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHRcdFx0XHQ8L05hdkl0ZW0+XHJcblx0XHRcdFx0XHRcdHt1c2VyICYmIChcclxuXHRcdFx0XHRcdFx0XHQ8UmVhY3QuRnJhZ21lbnQ+XHJcblx0XHRcdFx0XHRcdFx0XHQ8TmF2SXRlbT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PERyb3Bkb3duIGlzT3Blbj17ZHJvcGRvd25PcGVufSB0b2dnbGU9e3RvZ2dsZURyb3Bkb3dufT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8RHJvcGRvd25Ub2dnbGUgY2FyZXQ+e3VzZXIudXNlcm5hbWV9PC9Ecm9wZG93blRvZ2dsZT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8RHJvcGRvd25NZW51PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PERyb3Bkb3duSXRlbSBvbkNsaWNrPXtkb0xvZ291dH0+TG9nb3V0PC9Ecm9wZG93bkl0ZW0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8RHJvcGRvd25JdGVtIG9uQ2xpY2s9e2dvVG9PcmRlcnN9Pk9yZGVyczwvRHJvcGRvd25JdGVtPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvRHJvcGRvd25NZW51PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L0Ryb3Bkb3duPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9OYXZJdGVtPlxyXG5cdFx0XHRcdFx0XHRcdDwvUmVhY3QuRnJhZ21lbnQ+XHJcblx0XHRcdFx0XHRcdCl9XHJcblxyXG5cdFx0XHRcdFx0XHR7IXVzZXIgJiYgKFxyXG5cdFx0XHRcdFx0XHRcdDxSZWFjdC5GcmFnbWVudD5cclxuXHRcdFx0XHRcdFx0XHRcdDxOYXZJdGVtPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8TGluayBocmVmPScvc2lnbmluJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uIGNsYXNzTmFtZT0nbXItMic+U2lnbiBpbjwvQnV0dG9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L05hdkl0ZW0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8TmF2SXRlbT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PExpbmsgaHJlZj0nL3NpZ251cCc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PEJ1dHRvbj5TaWduIHVwPC9CdXR0b24+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvTGluaz5cclxuXHRcdFx0XHRcdFx0XHRcdDwvTmF2SXRlbT5cclxuXHRcdFx0XHRcdFx0XHQ8L1JlYWN0LkZyYWdtZW50PlxyXG5cdFx0XHRcdFx0XHQpfVxyXG5cdFx0XHRcdFx0PC9OYXY+XHJcblx0XHRcdFx0PC9Db2xsYXBzZT5cclxuXHRcdFx0PC9OYXZiYXI+XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFwcENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KHt9KTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEFwcCBmcm9tICduZXh0L2FwcCc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCB7IEFwb2xsb1Byb3ZpZGVyIH0gZnJvbSAnQGFwb2xsby9yZWFjdC1ob29rcyc7XHJcbmltcG9ydCBjcmVhdGVBcG9sbG9DbGllbnQgZnJvbSAnLi4vYXBvbGxvQ2xpZW50JztcclxuXHJcbi8vIE9uIHRoZSBjbGllbnQsIHdlIHN0b3JlIHRoZSBBcG9sbG8gQ2xpZW50IGluIHRoZSBmb2xsb3dpbmcgdmFyaWFibGUuXHJcbi8vIFRoaXMgcHJldmVudHMgdGhlIGNsaWVudCBmcm9tIHJlaW5pdGlhbGl6aW5nIGJldHdlZW4gcGFnZSB0cmFuc2l0aW9ucy5cclxubGV0IGdsb2JhbEFwb2xsb0NsaWVudCA9IG51bGw7XHJcblxyXG4vKipcclxuICogSW5zdGFsbHMgdGhlIEFwb2xsbyBDbGllbnQgb24gTmV4dFBhZ2VDb250ZXh0XHJcbiAqIG9yIE5leHRBcHBDb250ZXh0LiBVc2VmdWwgaWYgeW91IHdhbnQgdG8gdXNlIGFwb2xsb0NsaWVudFxyXG4gKiBpbnNpZGUgZ2V0U3RhdGljUHJvcHMsIGdldFN0YXRpY1BhdGhzIG9yIGdldFNlcnZlclNpZGVQcm9wc1xyXG4gKiBAcGFyYW0ge05leHRQYWdlQ29udGV4dCB8IE5leHRBcHBDb250ZXh0fSBjdHhcclxuICovXHJcbmV4cG9ydCBjb25zdCBpbml0T25Db250ZXh0ID0gKGN0eCkgPT4ge1xyXG5cdGNvbnN0IGluQXBwQ29udGV4dCA9IEJvb2xlYW4oY3R4LmN0eCk7XHJcblxyXG5cdC8vIFdlIGNvbnNpZGVyIGluc3RhbGxpbmcgYHdpdGhBcG9sbG8oeyBzc3I6IHRydWUgfSlgIG9uIGdsb2JhbCBBcHAgbGV2ZWxcclxuXHQvLyBhcyBhbnRpcGF0dGVybiBzaW5jZSBpdCBkaXNhYmxlcyBwcm9qZWN0IHdpZGUgQXV0b21hdGljIFN0YXRpYyBPcHRpbWl6YXRpb24uXHJcblx0aWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XHJcblx0XHRpZiAoaW5BcHBDb250ZXh0KSB7XHJcblx0XHRcdGNvbnNvbGUud2FybihcclxuXHRcdFx0XHQnV2FybmluZzogWW91IGhhdmUgb3B0ZWQtb3V0IG9mIEF1dG9tYXRpYyBTdGF0aWMgT3B0aW1pemF0aW9uIGR1ZSB0byBgd2l0aEFwb2xsb2AgaW4gYHBhZ2VzL19hcHBgLlxcbicgK1xyXG5cdFx0XHRcdFx0J1JlYWQgbW9yZTogaHR0cHM6Ly9lcnIuc2gvbmV4dC5qcy9vcHQtb3V0LWF1dG8tc3RhdGljLW9wdGltaXphdGlvblxcbidcclxuXHRcdFx0KTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8vIEluaXRpYWxpemUgQXBvbGxvQ2xpZW50IGlmIG5vdCBhbHJlYWR5IGRvbmVcclxuXHRjb25zdCBhcG9sbG9DbGllbnQgPSBjdHguYXBvbGxvQ2xpZW50IHx8IGluaXRBcG9sbG9DbGllbnQoY3R4LmFwb2xsb1N0YXRlIHx8IHt9LCBpbkFwcENvbnRleHQgPyBjdHguY3R4IDogY3R4KTtcclxuXHJcblx0Ly8gV2Ugc2VuZCB0aGUgQXBvbGxvIENsaWVudCBhcyBhIHByb3AgdG8gdGhlIGNvbXBvbmVudCB0byBhdm9pZCBjYWxsaW5nIGluaXRBcG9sbG8oKSB0d2ljZSBpbiB0aGUgc2VydmVyLlxyXG5cdC8vIE90aGVyd2lzZSwgdGhlIGNvbXBvbmVudCB3b3VsZCBoYXZlIHRvIGNhbGwgaW5pdEFwb2xsbygpIGFnYWluIGJ1dCB0aGlzXHJcblx0Ly8gdGltZSB3aXRob3V0IHRoZSBjb250ZXh0LiBPbmNlIHRoYXQgaGFwcGVucywgdGhlIGZvbGxvd2luZyBjb2RlIHdpbGwgbWFrZSBzdXJlIHdlIHNlbmRcclxuXHQvLyB0aGUgcHJvcCBhcyBgbnVsbGAgdG8gdGhlIGJyb3dzZXIuXHJcblx0YXBvbGxvQ2xpZW50LnRvSlNPTiA9ICgpID0+IG51bGw7XHJcblxyXG5cdC8vIEFkZCBhcG9sbG9DbGllbnQgdG8gTmV4dFBhZ2VDb250ZXh0ICYgTmV4dEFwcENvbnRleHQuXHJcblx0Ly8gVGhpcyBhbGxvd3MgdXMgdG8gY29uc3VtZSB0aGUgYXBvbGxvQ2xpZW50IGluc2lkZSBvdXJcclxuXHQvLyBjdXN0b20gYGdldEluaXRpYWxQcm9wcyh7IGFwb2xsb0NsaWVudCB9KWAuXHJcblx0Y3R4LmFwb2xsb0NsaWVudCA9IGFwb2xsb0NsaWVudDtcclxuXHRpZiAoaW5BcHBDb250ZXh0KSB7XHJcblx0XHRjdHguY3R4LmFwb2xsb0NsaWVudCA9IGFwb2xsb0NsaWVudDtcclxuXHR9XHJcblxyXG5cdHJldHVybiBjdHg7XHJcbn07XHJcblxyXG4vKipcclxuICogQWx3YXlzIGNyZWF0ZXMgYSBuZXcgYXBvbGxvIGNsaWVudCBvbiB0aGUgc2VydmVyXHJcbiAqIENyZWF0ZXMgb3IgcmV1c2VzIGFwb2xsbyBjbGllbnQgaW4gdGhlIGJyb3dzZXIuXHJcbiAqIEBwYXJhbSAge05vcm1hbGl6ZWRDYWNoZU9iamVjdH0gaW5pdGlhbFN0YXRlXHJcbiAqIEBwYXJhbSAge05leHRQYWdlQ29udGV4dH0gY3R4XHJcbiAqL1xyXG5jb25zdCBpbml0QXBvbGxvQ2xpZW50ID0gKGluaXRpYWxTdGF0ZSwgY3R4KSA9PiB7XHJcblx0Ly8gTWFrZSBzdXJlIHRvIGNyZWF0ZSBhIG5ldyBjbGllbnQgZm9yIGV2ZXJ5IHNlcnZlci1zaWRlIHJlcXVlc3Qgc28gdGhhdCBkYXRhXHJcblx0Ly8gaXNuJ3Qgc2hhcmVkIGJldHdlZW4gY29ubmVjdGlvbnMgKHdoaWNoIHdvdWxkIGJlIGJhZClcclxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuXHRcdHJldHVybiBjcmVhdGVBcG9sbG9DbGllbnQoaW5pdGlhbFN0YXRlLCBjdHgpO1xyXG5cdH1cclxuXHJcblx0Ly8gUmV1c2UgY2xpZW50IG9uIHRoZSBjbGllbnQtc2lkZVxyXG5cdGlmICghZ2xvYmFsQXBvbGxvQ2xpZW50KSB7XHJcblx0XHRnbG9iYWxBcG9sbG9DbGllbnQgPSBjcmVhdGVBcG9sbG9DbGllbnQoaW5pdGlhbFN0YXRlLCBjdHgpO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIGdsb2JhbEFwb2xsb0NsaWVudDtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIGEgd2l0aEFwb2xsbyBIT0NcclxuICogdGhhdCBwcm92aWRlcyB0aGUgYXBvbGxvQ29udGV4dFxyXG4gKiB0byBhIG5leHQuanMgUGFnZSBvciBBcHBUcmVlLlxyXG4gKiBAcGFyYW0gIHtPYmplY3R9IHdpdGhBcG9sbG9PcHRpb25zXHJcbiAqIEBwYXJhbSAge0Jvb2xlYW59IFt3aXRoQXBvbGxvT3B0aW9ucy5zc3I9ZmFsc2VdXHJcbiAqIEByZXR1cm5zIHsoUGFnZUNvbXBvbmVudDogUmVhY3ROb2RlKSA9PiBSZWFjdE5vZGV9XHJcbiAqL1xyXG5leHBvcnQgY29uc3Qgd2l0aEFwb2xsbyA9ICh7IHNzciA9IGZhbHNlIH0gPSB7fSkgPT4gKFBhZ2VDb21wb25lbnQpID0+IHtcclxuXHRjb25zdCBXaXRoQXBvbGxvID0gKHsgYXBvbGxvQ2xpZW50LCBhcG9sbG9TdGF0ZSwgLi4ucGFnZVByb3BzIH0pID0+IHtcclxuXHRcdGxldCBjbGllbnQ7XHJcblx0XHRpZiAoYXBvbGxvQ2xpZW50KSB7XHJcblx0XHRcdC8vIEhhcHBlbnMgb246IGdldERhdGFGcm9tVHJlZSAmIG5leHQuanMgc3NyXHJcblx0XHRcdGNsaWVudCA9IGFwb2xsb0NsaWVudDtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdC8vIEhhcHBlbnMgb246IG5leHQuanMgY3NyXHJcblx0XHRcdGNsaWVudCA9IGluaXRBcG9sbG9DbGllbnQoYXBvbGxvU3RhdGUsIHVuZGVmaW5lZCk7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PEFwb2xsb1Byb3ZpZGVyIGNsaWVudD17Y2xpZW50fT5cclxuXHRcdFx0XHQ8UGFnZUNvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG5cdFx0XHQ8L0Fwb2xsb1Byb3ZpZGVyPlxyXG5cdFx0KTtcclxuXHR9O1xyXG5cclxuXHQvLyBTZXQgdGhlIGNvcnJlY3QgZGlzcGxheU5hbWUgaW4gZGV2ZWxvcG1lbnRcclxuXHRpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xyXG5cdFx0Y29uc3QgZGlzcGxheU5hbWUgPSBQYWdlQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IFBhZ2VDb21wb25lbnQubmFtZSB8fCAnQ29tcG9uZW50JztcclxuXHRcdFdpdGhBcG9sbG8uZGlzcGxheU5hbWUgPSBgd2l0aEFwb2xsbygke2Rpc3BsYXlOYW1lfSlgO1xyXG5cdH1cclxuXHJcblx0aWYgKHNzciB8fCBQYWdlQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcykge1xyXG5cdFx0V2l0aEFwb2xsby5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoY3R4KSA9PiB7XHJcblx0XHRcdGNvbnN0IGluQXBwQ29udGV4dCA9IEJvb2xlYW4oY3R4LmN0eCk7XHJcblx0XHRcdGNvbnN0IHsgYXBvbGxvQ2xpZW50IH0gPSBpbml0T25Db250ZXh0KGN0eCk7XHJcblxyXG5cdFx0XHQvLyBSdW4gd3JhcHBlZCBnZXRJbml0aWFsUHJvcHMgbWV0aG9kc1xyXG5cdFx0XHRsZXQgcGFnZVByb3BzID0ge307XHJcblx0XHRcdGlmIChQYWdlQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcykge1xyXG5cdFx0XHRcdHBhZ2VQcm9wcyA9IGF3YWl0IFBhZ2VDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzKGN0eCk7XHJcblx0XHRcdH0gZWxzZSBpZiAoaW5BcHBDb250ZXh0KSB7XHJcblx0XHRcdFx0cGFnZVByb3BzID0gYXdhaXQgQXBwLmdldEluaXRpYWxQcm9wcyhjdHgpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvLyBPbmx5IG9uIHRoZSBzZXJ2ZXI6XHJcblx0XHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xyXG5cdFx0XHRcdGNvbnN0IHsgQXBwVHJlZSB9ID0gY3R4O1xyXG5cdFx0XHRcdC8vIFdoZW4gcmVkaXJlY3RpbmcsIHRoZSByZXNwb25zZSBpcyBmaW5pc2hlZC5cclxuXHRcdFx0XHQvLyBObyBwb2ludCBpbiBjb250aW51aW5nIHRvIHJlbmRlclxyXG5cdFx0XHRcdGlmIChjdHgucmVzICYmIGN0eC5yZXMuZmluaXNoZWQpIHtcclxuXHRcdFx0XHRcdHJldHVybiBwYWdlUHJvcHM7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQvLyBPbmx5IGlmIGRhdGFGcm9tVHJlZSBpcyBlbmFibGVkXHJcblx0XHRcdFx0aWYgKHNzciAmJiBBcHBUcmVlKSB7XHJcblx0XHRcdFx0XHR0cnkge1xyXG5cdFx0XHRcdFx0XHQvLyBJbXBvcnQgYEBhcG9sbG8vcmVhY3Qtc3NyYCBkeW5hbWljYWxseS5cclxuXHRcdFx0XHRcdFx0Ly8gV2UgZG9uJ3Qgd2FudCB0byBoYXZlIHRoaXMgaW4gb3VyIGNsaWVudCBidW5kbGUuXHJcblx0XHRcdFx0XHRcdGNvbnN0IHsgZ2V0RGF0YUZyb21UcmVlIH0gPSBhd2FpdCBpbXBvcnQoJ0BhcG9sbG8vcmVhY3Qtc3NyJyk7XHJcblxyXG5cdFx0XHRcdFx0XHQvLyBTaW5jZSBBcHBDb21wb25lbnRzIGFuZCBQYWdlQ29tcG9uZW50cyBoYXZlIGRpZmZlcmVudCBjb250ZXh0IHR5cGVzXHJcblx0XHRcdFx0XHRcdC8vIHdlIG5lZWQgdG8gbW9kaWZ5IHRoZWlyIHByb3BzIGEgbGl0dGxlLlxyXG5cdFx0XHRcdFx0XHRsZXQgcHJvcHM7XHJcblx0XHRcdFx0XHRcdGlmIChpbkFwcENvbnRleHQpIHtcclxuXHRcdFx0XHRcdFx0XHRwcm9wcyA9IHsgLi4ucGFnZVByb3BzLCBhcG9sbG9DbGllbnQgfTtcclxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRwcm9wcyA9IHsgcGFnZVByb3BzOiB7IC4uLnBhZ2VQcm9wcywgYXBvbGxvQ2xpZW50IH0gfTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0Ly8gVGFrZSB0aGUgTmV4dC5qcyBBcHBUcmVlLCBkZXRlcm1pbmUgd2hpY2ggcXVlcmllcyBhcmUgbmVlZGVkIHRvIHJlbmRlcixcclxuXHRcdFx0XHRcdFx0Ly8gYW5kIGZldGNoIHRoZW0uIFRoaXMgbWV0aG9kIGNhbiBiZSBwcmV0dHkgc2xvdyBzaW5jZSBpdCByZW5kZXJzXHJcblx0XHRcdFx0XHRcdC8vIHlvdXIgZW50aXJlIEFwcFRyZWUgb25jZSBmb3IgZXZlcnkgcXVlcnkuIENoZWNrIG91dCBhcG9sbG8gZnJhZ21lbnRzXHJcblx0XHRcdFx0XHRcdC8vIGlmIHlvdSB3YW50IHRvIHJlZHVjZSB0aGUgbnVtYmVyIG9mIHJlcmVuZGVycy5cclxuXHRcdFx0XHRcdFx0Ly8gaHR0cHM6Ly93d3cuYXBvbGxvZ3JhcGhxbC5jb20vZG9jcy9yZWFjdC9kYXRhL2ZyYWdtZW50cy9cclxuXHRcdFx0XHRcdFx0YXdhaXQgZ2V0RGF0YUZyb21UcmVlKDxBcHBUcmVlIHsuLi5wcm9wc30gLz4pO1xyXG5cdFx0XHRcdFx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdFx0XHRcdFx0Ly8gUHJldmVudCBBcG9sbG8gQ2xpZW50IEdyYXBoUUwgZXJyb3JzIGZyb20gY3Jhc2hpbmcgU1NSLlxyXG5cdFx0XHRcdFx0XHQvLyBIYW5kbGUgdGhlbSBpbiBjb21wb25lbnRzIHZpYSB0aGUgZGF0YS5lcnJvciBwcm9wOlxyXG5cdFx0XHRcdFx0XHQvLyBodHRwczovL3d3dy5hcG9sbG9ncmFwaHFsLmNvbS9kb2NzL3JlYWN0L2FwaS9yZWFjdC1hcG9sbG8uaHRtbCNncmFwaHFsLXF1ZXJ5LWRhdGEtZXJyb3JcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5lcnJvcignRXJyb3Igd2hpbGUgcnVubmluZyBgZ2V0RGF0YUZyb21UcmVlYCcsIGVycm9yKTtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHQvLyBnZXREYXRhRnJvbVRyZWUgZG9lcyBub3QgY2FsbCBjb21wb25lbnRXaWxsVW5tb3VudFxyXG5cdFx0XHRcdFx0Ly8gaGVhZCBzaWRlIGVmZmVjdCB0aGVyZWZvcmUgbmVlZCB0byBiZSBjbGVhcmVkIG1hbnVhbGx5XHJcblx0XHRcdFx0XHRIZWFkLnJld2luZCgpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5wYWdlUHJvcHMsXHJcblx0XHRcdFx0Ly8gRXh0cmFjdCBxdWVyeSBkYXRhIGZyb20gdGhlIEFwb2xsbyBzdG9yZVxyXG5cdFx0XHRcdGFwb2xsb1N0YXRlOiBhcG9sbG9DbGllbnQuY2FjaGUuZXh0cmFjdCgpLFxyXG5cdFx0XHRcdC8vIFByb3ZpZGUgdGhlIGNsaWVudCBmb3Igc3NyLiBBcyBzb29uIGFzIHRoaXMgcGF5bG9hZFxyXG5cdFx0XHRcdC8vIGdldHMgSlNPTi5zdHJpbmdpZmllZCBpdCB3aWxsIHJlbW92ZSBpdHNlbGYuXHJcblx0XHRcdFx0YXBvbGxvQ2xpZW50OiBjdHguYXBvbGxvQ2xpZW50LFxyXG5cdFx0XHR9O1xyXG5cdFx0fTtcclxuXHR9XHJcblxyXG5cdHJldHVybiBXaXRoQXBvbGxvO1xyXG59O1xyXG4iLCJleHBvcnQgY29uc3QgZ2V0VW5pcXVlUHJvZHVjdHMgPSAocHJvZHVjdHMpID0+IHtcclxuXHRpZiAoIXByb2R1Y3RzIHx8IHByb2R1Y3RzLmxlbmd0aCA8PSAwKSB7XHJcblx0XHRyZXR1cm4gW107XHJcblx0fVxyXG5cdGNvbnN0IHVuaXF1ZUlkcyA9IG5ldyBTZXQoKTtcclxuXHRyZXR1cm4gcHJvZHVjdHMuZmlsdGVyKChwcm9kdWN0KSA9PiB7XHJcblx0XHRpZiAodW5pcXVlSWRzLmhhcyhwcm9kdWN0LmlkKSkge1xyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHR9XHJcblx0XHR1bmlxdWVJZHMuYWRkKHByb2R1Y3QuaWQpO1xyXG5cdFx0cmV0dXJuIHRydWU7XHJcblx0fSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgcmVtb3ZlUHJvZHVjdEZyb21DYXJ0ID0gKHByb2R1Y3RzLCBpZCkgPT4ge1xyXG5cdHJldHVybiBwcm9kdWN0cy5maWx0ZXIoKHByb2R1Y3QpID0+IHByb2R1Y3QuaWQgIT09IGlkKTtcclxufTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBjb29raWVzIGZyb20gJ25leHQtY29va2llcyc7XHJcblxyXG5sZXQgZ2xvYmFsVXNlciA9IG51bGw7XHJcblxyXG5mdW5jdGlvbiB3aXRoQXV0aChCYXNlQ29tcG9uZW50LCB7IGxvZ2luUmVxdWlyZWQgPSB0cnVlLCBsb2dvdXRSZXF1aXJlZCA9IGZhbHNlIH0gPSB7fSkge1xyXG5cdGNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblx0XHRzdGF0aWMgcHJvcFR5cGVzID0ge1xyXG5cdFx0XHR1c2VyOiBQcm9wVHlwZXMuc2hhcGUoe1xyXG5cdFx0XHRcdHVzZXJuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG5cdFx0XHRcdGVtYWlsOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcblx0XHRcdH0pLFxyXG5cdFx0XHRpc0Zyb21TZXJ2ZXI6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXHJcblx0XHR9O1xyXG5cclxuXHRcdHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XHJcblx0XHRcdHVzZXI6IG51bGwsXHJcblx0XHR9O1xyXG5cclxuXHRcdGNvbXBvbmVudERpZE1vdW50KCkge1xyXG5cdFx0XHRjb25zdCB7IHVzZXIsIGlzRnJvbVNlcnZlciB9ID0gdGhpcy5wcm9wcztcclxuXHJcblx0XHRcdGlmIChpc0Zyb21TZXJ2ZXIpIHtcclxuXHRcdFx0XHRnbG9iYWxVc2VyID0gdXNlcjtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8gSWYgbG9naW4gaXMgcmVxdWlyZWQgYW5kIG5vdCBsb2dnZWQgaW4sIHJlZGlyZWN0IHRvIFwiL2xvZ2luXCIgcGFnZVxyXG5cdFx0XHRpZiAobG9naW5SZXF1aXJlZCAmJiAhbG9nb3V0UmVxdWlyZWQgJiYgIXVzZXIpIHtcclxuXHRcdFx0XHRSb3V0ZXIucHVzaCgnL3NpZ25pbicpO1xyXG5cdFx0XHRcdHJldHVybjtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8gSWYgbG9nb3V0IGlzIHJlcXVpcmVkIGFuZCB1c2VyIGxvZ2dlZCBpbiwgcmVkaXJlY3QgdG8gXCIvXCIgcGFnZVxyXG5cdFx0XHRpZiAobG9nb3V0UmVxdWlyZWQgJiYgdXNlcikge1xyXG5cdFx0XHRcdFJvdXRlci5wdXNoKCcvJyk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKGN0eCkge1xyXG5cdFx0XHRjb25zdCBpc0Zyb21TZXJ2ZXIgPSAhIWN0eC5yZXE7XHJcblxyXG5cdFx0XHRsZXQgdXNlciA9IGdsb2JhbFVzZXI7XHJcblxyXG5cdFx0XHRjb25zdCB7IGp3dCB9ID0gY29va2llcyhjdHgpO1xyXG5cdFx0XHRpZiAoand0KSB7XHJcblx0XHRcdFx0Y29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7cHJvY2Vzcy5lbnYuYmFja2VuZFVybH0vdXNlcnMvbWUvYCwge1xyXG5cdFx0XHRcdFx0bWV0aG9kOiAnR0VUJyxcclxuXHRcdFx0XHRcdGhlYWRlcnM6IHtcclxuXHRcdFx0XHRcdFx0QXV0aG9yaXphdGlvbjogYEJlYXJlciAke2p3dH1gLFxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHR1c2VyID0gYXdhaXQgcmVzLmpzb24oKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKGlzRnJvbVNlcnZlciAmJiB1c2VyKSB7XHJcblx0XHRcdFx0Ly8gQ29udmVydCBcIl9pZFwiKE9iamVjdElEIGZyb20gTW9uZ29EQikgb2JqZWN0IHRvIHN0cmluZ1xyXG5cdFx0XHRcdHVzZXIuX2lkID0gdXNlci5faWQudG9TdHJpbmcoKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Y29uc3QgcHJvcHMgPSB7IHVzZXIsIGlzRnJvbVNlcnZlciB9O1xyXG5cclxuXHRcdFx0Ly8gQ2FsbCBjaGlsZCBjb21wb25lbnQncyBcImdldEluaXRpYWxQcm9wc1wiLCBpZiBpdCBpcyBkZWZpbmVkXHJcblx0XHRcdGlmIChCYXNlQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcykge1xyXG5cdFx0XHRcdE9iamVjdC5hc3NpZ24ocHJvcHMsIChhd2FpdCBCYXNlQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcyhjdHgpKSB8fCB7fSk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHJldHVybiBwcm9wcztcclxuXHRcdH1cclxuXHJcblx0XHRyZW5kZXIoKSB7XHJcblx0XHRcdGNvbnN0IHsgdXNlciB9ID0gdGhpcy5wcm9wcztcclxuXHJcblx0XHRcdGlmIChsb2dpblJlcXVpcmVkICYmICFsb2dvdXRSZXF1aXJlZCAmJiAhdXNlcikge1xyXG5cdFx0XHRcdHJldHVybiBudWxsO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAobG9nb3V0UmVxdWlyZWQgJiYgdXNlcikge1xyXG5cdFx0XHRcdHJldHVybiBudWxsO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRyZXR1cm4gPEJhc2VDb21wb25lbnQgey4uLnRoaXMucHJvcHN9IC8+O1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cmV0dXJuIEFwcDtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aEF1dGg7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuaW1wb3J0IE5Qcm9ncmVzcyBmcm9tICducHJvZ3Jlc3MnO1xyXG5cclxuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL0hlYWRlcic7XHJcblxyXG5pbXBvcnQgeyB3aXRoQXBvbGxvIH0gZnJvbSAnLi4vbGliL2Fwb2xsbyc7XHJcblxyXG5Sb3V0ZXIub25Sb3V0ZUNoYW5nZVN0YXJ0ID0gKCkgPT4gTlByb2dyZXNzLnN0YXJ0KCk7XHJcblJvdXRlci5vblJvdXRlQ2hhbmdlQ29tcGxldGUgPSAoKSA9PiBOUHJvZ3Jlc3MuZG9uZSgpO1xyXG5Sb3V0ZXIub25Sb3V0ZUNoYW5nZUVycm9yID0gKCkgPT4gTlByb2dyZXNzLmRvbmUoKTtcclxuXHJcbmltcG9ydCB7IEFwcENvbnRleHQgfSBmcm9tICcuL0FwcENvbnRleHQnO1xyXG5pbXBvcnQgeyBnZXRVbmlxdWVQcm9kdWN0cyB9IGZyb20gJy4uL2xpYi91dGlscyc7XHJcblxyXG5mdW5jdGlvbiB3aXRoTGF5b3V0KEJhc2VDb21wb25lbnQpIHtcclxuXHRjbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cdFx0Y29uc3RydWN0b3IocHJvcHMpIHtcclxuXHRcdFx0c3VwZXIocHJvcHMpO1xyXG5cdFx0XHR0aGlzLnN0YXRlID0ge1xyXG5cdFx0XHRcdHVzZXI6IHByb3BzLnVzZXIsXHJcblx0XHRcdFx0Y2FydDogW10sXHJcblx0XHRcdH07XHJcblx0XHR9XHJcblxyXG5cdFx0dXBkYXRlVmFsdWUgPSAoa2V5LCB2YWwpID0+IHtcclxuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7IFtrZXldOiB2YWwgfSk7XHJcblx0XHR9O1xyXG5cclxuXHRcdGNvbXBvbmVudERpZE1vdW50KCkge1xyXG5cdFx0XHRjb25zdCBjYXJ0SW5Mb2NhbFN0b3JhZ2UgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjYXJ0JykpO1xyXG5cdFx0XHRjb25zdCBjYXJ0ID0gY2FydEluTG9jYWxTdG9yYWdlID8gZ2V0VW5pcXVlUHJvZHVjdHMoY2FydEluTG9jYWxTdG9yYWdlKSA6IFtdO1xyXG5cdFx0XHR0aGlzLnNldFN0YXRlKHsgY2FydCB9KTtcclxuXHRcdH1cclxuXHJcblx0XHRyZW5kZXIoKSB7XHJcblx0XHRcdHJldHVybiAoXHJcblx0XHRcdFx0PEFwcENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgZ2xvYmFsU3RvcmU6IHRoaXMuc3RhdGUsIHVwZGF0ZVN0b3JlOiB0aGlzLnVwZGF0ZVZhbHVlIH19PlxyXG5cdFx0XHRcdFx0PEhlYWRlciB7Li4udGhpcy5wcm9wc30gLz5cclxuXHRcdFx0XHRcdDxCYXNlQ29tcG9uZW50IHsuLi50aGlzLnByb3BzfSAvPlxyXG5cdFx0XHRcdDwvQXBwQ29udGV4dC5Qcm92aWRlcj5cclxuXHRcdFx0KTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdEFwcC5nZXRJbml0aWFsUHJvcHMgPSAoY3R4KSA9PiB7XHJcblx0XHRpZiAoQmFzZUNvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMpIHtcclxuXHRcdFx0cmV0dXJuIEJhc2VDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzKGN0eCk7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIHt9O1xyXG5cdH07XHJcblxyXG5cdHJldHVybiB3aXRoQXBvbGxvKHsgc3NyOiB0cnVlIH0pKEFwcCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhMYXlvdXQ7XHJcbiIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiLi4vaGVscGVycy90eXBlb2ZcIik7XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsO1xuICB2YXIgY2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuXG4gIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgICByZXR1cm4gY2FjaGU7XG4gIH07XG5cbiAgcmV0dXJuIGNhY2hlO1xufVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHtcbiAgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkge1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgXCJkZWZhdWx0XCI6IG9ialxuICAgIH07XG4gIH1cblxuICB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTtcblxuICBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHtcbiAgICByZXR1cm4gY2FjaGUuZ2V0KG9iaik7XG4gIH1cblxuICB2YXIgbmV3T2JqID0ge307XG4gIHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgIHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsO1xuXG4gICAgICBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdPYmpba2V5XSA9IG9ialtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7XG5cbiAgaWYgKGNhY2hlKSB7XG4gICAgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTtcbiAgfVxuXG4gIHJldHVybiBuZXdPYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L3BhZ2VzL19hcHAnKVxuIiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO3ZhciBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkXCIpO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZGVmYXVsdD12b2lkIDA7dmFyIF9yZWFjdD1faW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO3ZhciBfdXJsPXJlcXVpcmUoXCJ1cmxcIik7dmFyIF91dGlscz1yZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzXCIpO3ZhciBfcm91dGVyPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vcm91dGVyXCIpKTt2YXIgX3JvdXRlcjI9cmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyXCIpO2Z1bmN0aW9uIGlzTG9jYWwoaHJlZil7dmFyIHVybD0oMCxfdXJsLnBhcnNlKShocmVmLGZhbHNlLHRydWUpO3ZhciBvcmlnaW49KDAsX3VybC5wYXJzZSkoKDAsX3V0aWxzLmdldExvY2F0aW9uT3JpZ2luKSgpLGZhbHNlLHRydWUpO3JldHVybiF1cmwuaG9zdHx8dXJsLnByb3RvY29sPT09b3JpZ2luLnByb3RvY29sJiZ1cmwuaG9zdD09PW9yaWdpbi5ob3N0O31mdW5jdGlvbiBtZW1vaXplZEZvcm1hdFVybChmb3JtYXRGdW5jKXt2YXIgbGFzdEhyZWY9bnVsbDt2YXIgbGFzdEFzPW51bGw7dmFyIGxhc3RSZXN1bHQ9bnVsbDtyZXR1cm4oaHJlZixhcyk9PntpZihsYXN0UmVzdWx0JiZocmVmPT09bGFzdEhyZWYmJmFzPT09bGFzdEFzKXtyZXR1cm4gbGFzdFJlc3VsdDt9dmFyIHJlc3VsdD1mb3JtYXRGdW5jKGhyZWYsYXMpO2xhc3RIcmVmPWhyZWY7bGFzdEFzPWFzO2xhc3RSZXN1bHQ9cmVzdWx0O3JldHVybiByZXN1bHQ7fTt9ZnVuY3Rpb24gZm9ybWF0VXJsKHVybCl7cmV0dXJuIHVybCYmdHlwZW9mIHVybD09PSdvYmplY3QnPygwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikodXJsKTp1cmw7fXZhciBvYnNlcnZlcjt2YXIgbGlzdGVuZXJzPW5ldyBNYXAoKTt2YXIgSW50ZXJzZWN0aW9uT2JzZXJ2ZXI9dHlwZW9mIHdpbmRvdyE9PSd1bmRlZmluZWQnP3dpbmRvdy5JbnRlcnNlY3Rpb25PYnNlcnZlcjpudWxsO3ZhciBwcmVmZXRjaGVkPXt9O2Z1bmN0aW9uIGdldE9ic2VydmVyKCl7Ly8gUmV0dXJuIHNoYXJlZCBpbnN0YW5jZSBvZiBJbnRlcnNlY3Rpb25PYnNlcnZlciBpZiBhbHJlYWR5IGNyZWF0ZWRcbmlmKG9ic2VydmVyKXtyZXR1cm4gb2JzZXJ2ZXI7fS8vIE9ubHkgY3JlYXRlIHNoYXJlZCBJbnRlcnNlY3Rpb25PYnNlcnZlciBpZiBzdXBwb3J0ZWQgaW4gYnJvd3NlclxuaWYoIUludGVyc2VjdGlvbk9ic2VydmVyKXtyZXR1cm4gdW5kZWZpbmVkO31yZXR1cm4gb2JzZXJ2ZXI9bmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGVudHJpZXM9PntlbnRyaWVzLmZvckVhY2goZW50cnk9PntpZighbGlzdGVuZXJzLmhhcyhlbnRyeS50YXJnZXQpKXtyZXR1cm47fXZhciBjYj1saXN0ZW5lcnMuZ2V0KGVudHJ5LnRhcmdldCk7aWYoZW50cnkuaXNJbnRlcnNlY3Rpbmd8fGVudHJ5LmludGVyc2VjdGlvblJhdGlvPjApe29ic2VydmVyLnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpO2xpc3RlbmVycy5kZWxldGUoZW50cnkudGFyZ2V0KTtjYigpO319KTt9LHtyb290TWFyZ2luOicyMDBweCd9KTt9dmFyIGxpc3RlblRvSW50ZXJzZWN0aW9ucz0oZWwsY2IpPT57dmFyIG9ic2VydmVyPWdldE9ic2VydmVyKCk7aWYoIW9ic2VydmVyKXtyZXR1cm4oKT0+e307fW9ic2VydmVyLm9ic2VydmUoZWwpO2xpc3RlbmVycy5zZXQoZWwsY2IpO3JldHVybigpPT57dHJ5e29ic2VydmVyLnVub2JzZXJ2ZShlbCk7fWNhdGNoKGVycil7Y29uc29sZS5lcnJvcihlcnIpO31saXN0ZW5lcnMuZGVsZXRlKGVsKTt9O307Y2xhc3MgTGluayBleHRlbmRzIF9yZWFjdC5Db21wb25lbnR7Y29uc3RydWN0b3IocHJvcHMpe3N1cGVyKHByb3BzKTt0aGlzLnA9dm9pZCAwO3RoaXMuY2xlYW5VcExpc3RlbmVycz0oKT0+e307dGhpcy5mb3JtYXRVcmxzPW1lbW9pemVkRm9ybWF0VXJsKChocmVmLGFzSHJlZik9PntyZXR1cm57aHJlZjooMCxfcm91dGVyMi5hZGRCYXNlUGF0aCkoZm9ybWF0VXJsKGhyZWYpKSxhczphc0hyZWY/KDAsX3JvdXRlcjIuYWRkQmFzZVBhdGgpKGZvcm1hdFVybChhc0hyZWYpKTphc0hyZWZ9O30pO3RoaXMubGlua0NsaWNrZWQ9ZT0+e3Zhcntub2RlTmFtZSx0YXJnZXR9PWUuY3VycmVudFRhcmdldDtpZihub2RlTmFtZT09PSdBJyYmKHRhcmdldCYmdGFyZ2V0IT09J19zZWxmJ3x8ZS5tZXRhS2V5fHxlLmN0cmxLZXl8fGUuc2hpZnRLZXl8fGUubmF0aXZlRXZlbnQmJmUubmF0aXZlRXZlbnQud2hpY2g9PT0yKSl7Ly8gaWdub3JlIGNsaWNrIGZvciBuZXcgdGFiIC8gbmV3IHdpbmRvdyBiZWhhdmlvclxucmV0dXJuO312YXJ7aHJlZixhc309dGhpcy5mb3JtYXRVcmxzKHRoaXMucHJvcHMuaHJlZix0aGlzLnByb3BzLmFzKTtpZighaXNMb2NhbChocmVmKSl7Ly8gaWdub3JlIGNsaWNrIGlmIGl0J3Mgb3V0c2lkZSBvdXIgc2NvcGUgKGUuZy4gaHR0cHM6Ly9nb29nbGUuY29tKVxucmV0dXJuO312YXJ7cGF0aG5hbWV9PXdpbmRvdy5sb2NhdGlvbjtocmVmPSgwLF91cmwucmVzb2x2ZSkocGF0aG5hbWUsaHJlZik7YXM9YXM/KDAsX3VybC5yZXNvbHZlKShwYXRobmFtZSxhcyk6aHJlZjtlLnByZXZlbnREZWZhdWx0KCk7Ly8gIGF2b2lkIHNjcm9sbCBmb3IgdXJscyB3aXRoIGFuY2hvciByZWZzXG52YXJ7c2Nyb2xsfT10aGlzLnByb3BzO2lmKHNjcm9sbD09bnVsbCl7c2Nyb2xsPWFzLmluZGV4T2YoJyMnKTwwO30vLyByZXBsYWNlIHN0YXRlIGluc3RlYWQgb2YgcHVzaCBpZiBwcm9wIGlzIHByZXNlbnRcbl9yb3V0ZXIuZGVmYXVsdFt0aGlzLnByb3BzLnJlcGxhY2U/J3JlcGxhY2UnOidwdXNoJ10oaHJlZixhcyx7c2hhbGxvdzp0aGlzLnByb3BzLnNoYWxsb3d9KS50aGVuKHN1Y2Nlc3M9PntpZighc3VjY2VzcylyZXR1cm47aWYoc2Nyb2xsKXt3aW5kb3cuc2Nyb2xsVG8oMCwwKTtkb2N1bWVudC5ib2R5LmZvY3VzKCk7fX0pO307aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe2lmKHByb3BzLnByZWZldGNoKXtjb25zb2xlLndhcm4oJ05leHQuanMgYXV0by1wcmVmZXRjaGVzIGF1dG9tYXRpY2FsbHkgYmFzZWQgb24gdmlld3BvcnQuIFRoZSBwcmVmZXRjaCBhdHRyaWJ1dGUgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gTW9yZTogaHR0cHM6Ly9lcnIuc2gvemVpdC9uZXh0LmpzL3ByZWZldGNoLXRydWUtZGVwcmVjYXRlZCcpO319dGhpcy5wPXByb3BzLnByZWZldGNoIT09ZmFsc2U7fWNvbXBvbmVudFdpbGxVbm1vdW50KCl7dGhpcy5jbGVhblVwTGlzdGVuZXJzKCk7fWdldFBhdGhzKCl7dmFye3BhdGhuYW1lfT13aW5kb3cubG9jYXRpb247dmFye2hyZWY6cGFyc2VkSHJlZixhczpwYXJzZWRBc309dGhpcy5mb3JtYXRVcmxzKHRoaXMucHJvcHMuaHJlZix0aGlzLnByb3BzLmFzKTt2YXIgcmVzb2x2ZWRIcmVmPSgwLF91cmwucmVzb2x2ZSkocGF0aG5hbWUscGFyc2VkSHJlZik7cmV0dXJuW3Jlc29sdmVkSHJlZixwYXJzZWRBcz8oMCxfdXJsLnJlc29sdmUpKHBhdGhuYW1lLHBhcnNlZEFzKTpyZXNvbHZlZEhyZWZdO31oYW5kbGVSZWYocmVmKXtpZih0aGlzLnAmJkludGVyc2VjdGlvbk9ic2VydmVyJiZyZWYmJnJlZi50YWdOYW1lKXt0aGlzLmNsZWFuVXBMaXN0ZW5lcnMoKTt2YXIgaXNQcmVmZXRjaGVkPXByZWZldGNoZWRbdGhpcy5nZXRQYXRocygpLmpvaW4oLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiclJyldO2lmKCFpc1ByZWZldGNoZWQpe3RoaXMuY2xlYW5VcExpc3RlbmVycz1saXN0ZW5Ub0ludGVyc2VjdGlvbnMocmVmLCgpPT57dGhpcy5wcmVmZXRjaCgpO30pO319fS8vIFRoZSBmdW5jdGlvbiBpcyBtZW1vaXplZCBzbyB0aGF0IG5vIGV4dHJhIGxpZmVjeWNsZXMgYXJlIG5lZWRlZFxuLy8gYXMgcGVyIGh0dHBzOi8vcmVhY3Rqcy5vcmcvYmxvZy8yMDE4LzA2LzA3L3lvdS1wcm9iYWJseS1kb250LW5lZWQtZGVyaXZlZC1zdGF0ZS5odG1sXG5wcmVmZXRjaChvcHRpb25zKXtpZighdGhpcy5wfHx0eXBlb2Ygd2luZG93PT09J3VuZGVmaW5lZCcpcmV0dXJuOy8vIFByZWZldGNoIHRoZSBKU09OIHBhZ2UgaWYgYXNrZWQgKG9ubHkgaW4gdGhlIGNsaWVudClcbnZhciBwYXRocz10aGlzLmdldFBhdGhzKCk7Ly8gV2UgbmVlZCB0byBoYW5kbGUgYSBwcmVmZXRjaCBlcnJvciBoZXJlIHNpbmNlIHdlIG1heSBiZVxuLy8gbG9hZGluZyB3aXRoIHByaW9yaXR5IHdoaWNoIGNhbiByZWplY3QgYnV0IHdlIGRvbid0XG4vLyB3YW50IHRvIGZvcmNlIG5hdmlnYXRpb24gc2luY2UgdGhpcyBpcyBvbmx5IGEgcHJlZmV0Y2hcbl9yb3V0ZXIuZGVmYXVsdC5wcmVmZXRjaChwYXRoc1svKiBocmVmICovMF0scGF0aHNbLyogYXNQYXRoICovMV0sb3B0aW9ucykuY2F0Y2goZXJyPT57aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpey8vIHJldGhyb3cgdG8gc2hvdyBpbnZhbGlkIFVSTCBlcnJvcnNcbnRocm93IGVycjt9fSk7cHJlZmV0Y2hlZFtwYXRocy5qb2luKC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4nJScpXT10cnVlO31yZW5kZXIoKXt2YXJ7Y2hpbGRyZW59PXRoaXMucHJvcHM7dmFye2hyZWYsYXN9PXRoaXMuZm9ybWF0VXJscyh0aGlzLnByb3BzLmhyZWYsdGhpcy5wcm9wcy5hcyk7Ly8gRGVwcmVjYXRlZC4gV2FybmluZyBzaG93biBieSBwcm9wVHlwZSBjaGVjay4gSWYgdGhlIGNoaWxkcmVuIHByb3ZpZGVkIGlzIGEgc3RyaW5nICg8TGluaz5leGFtcGxlPC9MaW5rPikgd2Ugd3JhcCBpdCBpbiBhbiA8YT4gdGFnXG5pZih0eXBlb2YgY2hpbGRyZW49PT0nc3RyaW5nJyl7Y2hpbGRyZW49LyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJhXCIsbnVsbCxjaGlsZHJlbik7fS8vIFRoaXMgd2lsbCByZXR1cm4gdGhlIGZpcnN0IGNoaWxkLCBpZiBtdWx0aXBsZSBhcmUgcHJvdmlkZWQgaXQgd2lsbCB0aHJvdyBhbiBlcnJvclxudmFyIGNoaWxkPV9yZWFjdC5DaGlsZHJlbi5vbmx5KGNoaWxkcmVuKTt2YXIgcHJvcHM9e3JlZjplbD0+e3RoaXMuaGFuZGxlUmVmKGVsKTtpZihjaGlsZCYmdHlwZW9mIGNoaWxkPT09J29iamVjdCcmJmNoaWxkLnJlZil7aWYodHlwZW9mIGNoaWxkLnJlZj09PSdmdW5jdGlvbicpY2hpbGQucmVmKGVsKTtlbHNlIGlmKHR5cGVvZiBjaGlsZC5yZWY9PT0nb2JqZWN0Jyl7Y2hpbGQucmVmLmN1cnJlbnQ9ZWw7fX19LG9uTW91c2VFbnRlcjplPT57aWYoY2hpbGQucHJvcHMmJnR5cGVvZiBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXI9PT0nZnVuY3Rpb24nKXtjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIoZSk7fXRoaXMucHJlZmV0Y2goe3ByaW9yaXR5OnRydWV9KTt9LG9uQ2xpY2s6ZT0+e2lmKGNoaWxkLnByb3BzJiZ0eXBlb2YgY2hpbGQucHJvcHMub25DbGljaz09PSdmdW5jdGlvbicpe2NoaWxkLnByb3BzLm9uQ2xpY2soZSk7fWlmKCFlLmRlZmF1bHRQcmV2ZW50ZWQpe3RoaXMubGlua0NsaWNrZWQoZSk7fX19Oy8vIElmIGNoaWxkIGlzIGFuIDxhPiB0YWcgYW5kIGRvZXNuJ3QgaGF2ZSBhIGhyZWYgYXR0cmlidXRlLCBvciBpZiB0aGUgJ3Bhc3NIcmVmJyBwcm9wZXJ0eSBpc1xuLy8gZGVmaW5lZCwgd2Ugc3BlY2lmeSB0aGUgY3VycmVudCAnaHJlZicsIHNvIHRoYXQgcmVwZXRpdGlvbiBpcyBub3QgbmVlZGVkIGJ5IHRoZSB1c2VyXG5pZih0aGlzLnByb3BzLnBhc3NIcmVmfHxjaGlsZC50eXBlPT09J2EnJiYhKCdocmVmJ2luIGNoaWxkLnByb3BzKSl7cHJvcHMuaHJlZj1hc3x8aHJlZjt9Ly8gQWRkIHRoZSBlbmRpbmcgc2xhc2ggdG8gdGhlIHBhdGhzLiBTbywgd2UgY2FuIHNlcnZlIHRoZVxuLy8gXCI8cGFnZT4vaW5kZXguaHRtbFwiIGRpcmVjdGx5LlxuaWYocHJvY2Vzcy5lbnYuX19ORVhUX0VYUE9SVF9UUkFJTElOR19TTEFTSCl7dmFyIHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0PXJlcXVpcmUoJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcmV3cml0ZS11cmwtZm9yLWV4cG9ydCcpLnJld3JpdGVVcmxGb3JOZXh0RXhwb3J0O2lmKHByb3BzLmhyZWYmJnR5cGVvZiBfX05FWFRfREFUQV9fIT09J3VuZGVmaW5lZCcmJl9fTkVYVF9EQVRBX18ubmV4dEV4cG9ydCl7cHJvcHMuaHJlZj1yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydChwcm9wcy5ocmVmKTt9fXJldHVybiBfcmVhY3QuZGVmYXVsdC5jbG9uZUVsZW1lbnQoY2hpbGQscHJvcHMpO319aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlY9PT0nZGV2ZWxvcG1lbnQnKXt2YXIgd2Fybj0oMCxfdXRpbHMuZXhlY09uY2UpKGNvbnNvbGUuZXJyb3IpOy8vIFRoaXMgbW9kdWxlIGdldHMgcmVtb3ZlZCBieSB3ZWJwYWNrLklnbm9yZVBsdWdpblxudmFyIFByb3BUeXBlcz1yZXF1aXJlKCdwcm9wLXR5cGVzJyk7dmFyIGV4YWN0PXJlcXVpcmUoJ3Byb3AtdHlwZXMtZXhhY3QnKTsvLyBAdHMtaWdub3JlIHRoZSBwcm9wZXJ0eSBpcyBzdXBwb3J0ZWQsIHdoZW4gZGVjbGFyaW5nIGl0IG9uIHRoZSBjbGFzcyBpdCBvdXRwdXRzIGFuIGV4dHJhIGJpdCBvZiBjb2RlIHdoaWNoIGlzIG5vdCBuZWVkZWQuXG5MaW5rLnByb3BUeXBlcz1leGFjdCh7aHJlZjpQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLFByb3BUeXBlcy5vYmplY3RdKS5pc1JlcXVpcmVkLGFzOlByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsUHJvcFR5cGVzLm9iamVjdF0pLHByZWZldGNoOlByb3BUeXBlcy5ib29sLHJlcGxhY2U6UHJvcFR5cGVzLmJvb2wsc2hhbGxvdzpQcm9wVHlwZXMuYm9vbCxwYXNzSHJlZjpQcm9wVHlwZXMuYm9vbCxzY3JvbGw6UHJvcFR5cGVzLmJvb2wsY2hpbGRyZW46UHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmVsZW1lbnQsKHByb3BzLHByb3BOYW1lKT0+e3ZhciB2YWx1ZT1wcm9wc1twcm9wTmFtZV07aWYodHlwZW9mIHZhbHVlPT09J3N0cmluZycpe3dhcm4oXCJXYXJuaW5nOiBZb3UncmUgdXNpbmcgYSBzdHJpbmcgZGlyZWN0bHkgaW5zaWRlIDxMaW5rPi4gVGhpcyB1c2FnZSBoYXMgYmVlbiBkZXByZWNhdGVkLiBQbGVhc2UgYWRkIGFuIDxhPiB0YWcgYXMgY2hpbGQgb2YgPExpbms+XCIpO31yZXR1cm4gbnVsbDt9XSkuaXNSZXF1aXJlZH0pO312YXIgX2RlZmF1bHQ9TGluaztleHBvcnRzLmRlZmF1bHQ9X2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkPXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMudXNlUm91dGVyPXVzZVJvdXRlcjtleHBvcnRzLm1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZT1tYWtlUHVibGljUm91dGVySW5zdGFuY2U7ZXhwb3J0cy5jcmVhdGVSb3V0ZXI9ZXhwb3J0cy53aXRoUm91dGVyPWV4cG9ydHMuZGVmYXVsdD12b2lkIDA7dmFyIF9yZWFjdD1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7dmFyIF9yb3V0ZXIyPV9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlclwiKSk7ZXhwb3J0cy5Sb3V0ZXI9X3JvdXRlcjIuZGVmYXVsdDtleHBvcnRzLk5leHRSb3V0ZXI9X3JvdXRlcjIuTmV4dFJvdXRlcjt2YXIgX3JvdXRlckNvbnRleHQ9cmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dFwiKTt2YXIgX3dpdGhSb3V0ZXI9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi93aXRoLXJvdXRlclwiKSk7ZXhwb3J0cy53aXRoUm91dGVyPV93aXRoUm91dGVyLmRlZmF1bHQ7LyogZ2xvYmFsIHdpbmRvdyAqL3ZhciBzaW5nbGV0b25Sb3V0ZXI9e3JvdXRlcjpudWxsLC8vIGhvbGRzIHRoZSBhY3R1YWwgcm91dGVyIGluc3RhbmNlXG5yZWFkeUNhbGxiYWNrczpbXSxyZWFkeShjYil7aWYodGhpcy5yb3V0ZXIpcmV0dXJuIGNiKCk7aWYodHlwZW9mIHdpbmRvdyE9PSd1bmRlZmluZWQnKXt0aGlzLnJlYWR5Q2FsbGJhY2tzLnB1c2goY2IpO319fTsvLyBDcmVhdGUgcHVibGljIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMgb2YgdGhlIHJvdXRlciBpbiB0aGUgc2luZ2xldG9uUm91dGVyXG52YXIgdXJsUHJvcGVydHlGaWVsZHM9WydwYXRobmFtZScsJ3JvdXRlJywncXVlcnknLCdhc1BhdGgnLCdjb21wb25lbnRzJywnaXNGYWxsYmFjaycsJ2Jhc2VQYXRoJ107dmFyIHJvdXRlckV2ZW50cz1bJ3JvdXRlQ2hhbmdlU3RhcnQnLCdiZWZvcmVIaXN0b3J5Q2hhbmdlJywncm91dGVDaGFuZ2VDb21wbGV0ZScsJ3JvdXRlQ2hhbmdlRXJyb3InLCdoYXNoQ2hhbmdlU3RhcnQnLCdoYXNoQ2hhbmdlQ29tcGxldGUnXTt2YXIgY29yZU1ldGhvZEZpZWxkcz1bJ3B1c2gnLCdyZXBsYWNlJywncmVsb2FkJywnYmFjaycsJ3ByZWZldGNoJywnYmVmb3JlUG9wU3RhdGUnXTsvLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCdldmVudHMnLHtnZXQoKXtyZXR1cm4gX3JvdXRlcjIuZGVmYXVsdC5ldmVudHM7fX0pO3VybFByb3BlcnR5RmllbGRzLmZvckVhY2goZmllbGQ9PnsvLyBIZXJlIHdlIG5lZWQgdG8gdXNlIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSBiZWNhdXNlLCB3ZSBuZWVkIHRvIHJldHVyblxuLy8gdGhlIHByb3BlcnR5IGFzc2lnbmVkIHRvIHRoZSBhY3R1YWwgcm91dGVyXG4vLyBUaGUgdmFsdWUgbWlnaHQgZ2V0IGNoYW5nZWQgYXMgd2UgY2hhbmdlIHJvdXRlcyBhbmQgdGhpcyBpcyB0aGVcbi8vIHByb3BlciB3YXkgdG8gYWNjZXNzIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLGZpZWxkLHtnZXQoKXt2YXIgcm91dGVyPWdldFJvdXRlcigpO3JldHVybiByb3V0ZXJbZmllbGRdO319KTt9KTtjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goZmllbGQ9PnsvLyBXZSBkb24ndCByZWFsbHkga25vdyB0aGUgdHlwZXMgaGVyZSwgc28gd2UgYWRkIHRoZW0gbGF0ZXIgaW5zdGVhZFxuO3NpbmdsZXRvblJvdXRlcltmaWVsZF09ZnVuY3Rpb24oKXt2YXIgcm91dGVyPWdldFJvdXRlcigpO3JldHVybiByb3V0ZXJbZmllbGRdKC4uLmFyZ3VtZW50cyk7fTt9KTtyb3V0ZXJFdmVudHMuZm9yRWFjaChldmVudD0+e3NpbmdsZXRvblJvdXRlci5yZWFkeSgoKT0+e19yb3V0ZXIyLmRlZmF1bHQuZXZlbnRzLm9uKGV2ZW50LGZ1bmN0aW9uKCl7dmFyIGV2ZW50RmllbGQ9XCJvblwiK2V2ZW50LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpK2V2ZW50LnN1YnN0cmluZygxKTt2YXIgX3NpbmdsZXRvblJvdXRlcj1zaW5nbGV0b25Sb3V0ZXI7aWYoX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSl7dHJ5e19zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0oLi4uYXJndW1lbnRzKTt9Y2F0Y2goZXJyKXsvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tY29uc29sZVxuY29uc29sZS5lcnJvcihcIkVycm9yIHdoZW4gcnVubmluZyB0aGUgUm91dGVyIGV2ZW50OiBcIitldmVudEZpZWxkKTsvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tY29uc29sZVxuY29uc29sZS5lcnJvcihlcnIubWVzc2FnZStcIlxcblwiK2Vyci5zdGFjayk7fX19KTt9KTt9KTtmdW5jdGlvbiBnZXRSb3V0ZXIoKXtpZighc2luZ2xldG9uUm91dGVyLnJvdXRlcil7dmFyIG1lc3NhZ2U9J05vIHJvdXRlciBpbnN0YW5jZSBmb3VuZC5cXG4nKydZb3Ugc2hvdWxkIG9ubHkgdXNlIFwibmV4dC9yb3V0ZXJcIiBpbnNpZGUgdGhlIGNsaWVudCBzaWRlIG9mIHlvdXIgYXBwLlxcbic7dGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO31yZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlcjt9Ly8gRXhwb3J0IHRoZSBzaW5nbGV0b25Sb3V0ZXIgYW5kIHRoaXMgaXMgdGhlIHB1YmxpYyBBUEkuXG52YXIgX2RlZmF1bHQ9c2luZ2xldG9uUm91dGVyOy8vIFJlZXhwb3J0IHRoZSB3aXRoUm91dGUgSE9DXG5leHBvcnRzLmRlZmF1bHQ9X2RlZmF1bHQ7ZnVuY3Rpb24gdXNlUm91dGVyKCl7cmV0dXJuIF9yZWFjdC5kZWZhdWx0LnVzZUNvbnRleHQoX3JvdXRlckNvbnRleHQuUm91dGVyQ29udGV4dCk7fS8vIElOVEVSTkFMIEFQSVNcbi8vIC0tLS0tLS0tLS0tLS1cbi8vIChkbyBub3QgdXNlIGZvbGxvd2luZyBleHBvcnRzIGluc2lkZSB0aGUgYXBwKVxuLy8gQ3JlYXRlIGEgcm91dGVyIGFuZCBhc3NpZ24gaXQgYXMgdGhlIHNpbmdsZXRvbiBpbnN0YW5jZS5cbi8vIFRoaXMgaXMgdXNlZCBpbiBjbGllbnQgc2lkZSB3aGVuIHdlIGFyZSBpbml0aWxpemluZyB0aGUgYXBwLlxuLy8gVGhpcyBzaG91bGQgKipub3QqKiB1c2UgaW5zaWRlIHRoZSBzZXJ2ZXIuXG52YXIgY3JlYXRlUm91dGVyPWZ1bmN0aW9uIGNyZWF0ZVJvdXRlcigpe2Zvcih2YXIgX2xlbj1hcmd1bWVudHMubGVuZ3RoLGFyZ3M9bmV3IEFycmF5KF9sZW4pLF9rZXk9MDtfa2V5PF9sZW47X2tleSsrKXthcmdzW19rZXldPWFyZ3VtZW50c1tfa2V5XTt9c2luZ2xldG9uUm91dGVyLnJvdXRlcj1uZXcgX3JvdXRlcjIuZGVmYXVsdCguLi5hcmdzKTtzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MuZm9yRWFjaChjYj0+Y2IoKSk7c2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzPVtdO3JldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyO307Ly8gVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIGNyZWF0ZSB0aGUgYHdpdGhSb3V0ZXJgIHJvdXRlciBpbnN0YW5jZVxuZXhwb3J0cy5jcmVhdGVSb3V0ZXI9Y3JlYXRlUm91dGVyO2Z1bmN0aW9uIG1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZShyb3V0ZXIpe3ZhciBfcm91dGVyPXJvdXRlcjt2YXIgaW5zdGFuY2U9e307Zm9yKHZhciBwcm9wZXJ0eSBvZiB1cmxQcm9wZXJ0eUZpZWxkcyl7aWYodHlwZW9mIF9yb3V0ZXJbcHJvcGVydHldPT09J29iamVjdCcpe2luc3RhbmNlW3Byb3BlcnR5XT1PYmplY3QuYXNzaWduKHt9LF9yb3V0ZXJbcHJvcGVydHldKTsvLyBtYWtlcyBzdXJlIHF1ZXJ5IGlzIG5vdCBzdGF0ZWZ1bFxuY29udGludWU7fWluc3RhbmNlW3Byb3BlcnR5XT1fcm91dGVyW3Byb3BlcnR5XTt9Ly8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuaW5zdGFuY2UuZXZlbnRzPV9yb3V0ZXIyLmRlZmF1bHQuZXZlbnRzO2NvcmVNZXRob2RGaWVsZHMuZm9yRWFjaChmaWVsZD0+e2luc3RhbmNlW2ZpZWxkXT1mdW5jdGlvbigpe3JldHVybiBfcm91dGVyW2ZpZWxkXSguLi5hcmd1bWVudHMpO307fSk7cmV0dXJuIGluc3RhbmNlO30iLCJcInVzZSBzdHJpY3RcIjt2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5kZWZhdWx0PXdpdGhSb3V0ZXI7dmFyIF9yZWFjdD1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7dmFyIF9yb3V0ZXI9cmVxdWlyZShcIi4vcm91dGVyXCIpO2Z1bmN0aW9uIHdpdGhSb3V0ZXIoQ29tcG9zZWRDb21wb25lbnQpe2Z1bmN0aW9uIFdpdGhSb3V0ZXJXcmFwcGVyKHByb3BzKXtyZXR1cm4vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChDb21wb3NlZENvbXBvbmVudCxPYmplY3QuYXNzaWduKHtyb3V0ZXI6KDAsX3JvdXRlci51c2VSb3V0ZXIpKCl9LHByb3BzKSk7fVdpdGhSb3V0ZXJXcmFwcGVyLmdldEluaXRpYWxQcm9wcz1Db21wb3NlZENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMvLyBUaGlzIGlzIG5lZWRlZCB0byBhbGxvdyBjaGVja2luZyBmb3IgY3VzdG9tIGdldEluaXRpYWxQcm9wcyBpbiBfYXBwXG47V2l0aFJvdXRlcldyYXBwZXIub3JpZ0dldEluaXRpYWxQcm9wcz1Db21wb3NlZENvbXBvbmVudC5vcmlnR2V0SW5pdGlhbFByb3BzO2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXt2YXIgbmFtZT1Db21wb3NlZENvbXBvbmVudC5kaXNwbGF5TmFtZXx8Q29tcG9zZWRDb21wb25lbnQubmFtZXx8J1Vua25vd24nO1dpdGhSb3V0ZXJXcmFwcGVyLmRpc3BsYXlOYW1lPVwid2l0aFJvdXRlcihcIituYW1lK1wiKVwiO31yZXR1cm4gV2l0aFJvdXRlcldyYXBwZXI7fSIsIlwidXNlIHN0cmljdFwiO1xuLypcbk1JVCBMaWNlbnNlXG5cbkNvcHlyaWdodCAoYykgSmFzb24gTWlsbGVyIChodHRwczovL2phc29uZm9ybWF0LmNvbS8pXG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiovXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5mdW5jdGlvbiBtaXR0KCkge1xuICAgIGNvbnN0IGFsbCA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgb24odHlwZSwgaGFuZGxlcikge1xuICAgICAgICAgICAgO1xuICAgICAgICAgICAgKGFsbFt0eXBlXSB8fCAoYWxsW3R5cGVdID0gW10pKS5wdXNoKGhhbmRsZXIpO1xuICAgICAgICB9LFxuICAgICAgICBvZmYodHlwZSwgaGFuZGxlcikge1xuICAgICAgICAgICAgaWYgKGFsbFt0eXBlXSkge1xuICAgICAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1iaXR3aXNlXG4gICAgICAgICAgICAgICAgYWxsW3R5cGVdLnNwbGljZShhbGxbdHlwZV0uaW5kZXhPZihoYW5kbGVyKSA+Pj4gMCwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGVtaXQodHlwZSwgLi4uZXZ0cykge1xuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgICAgICAgO1xuICAgICAgICAgICAgKGFsbFt0eXBlXSB8fCBbXSkuc2xpY2UoKS5tYXAoKGhhbmRsZXIpID0+IHtcbiAgICAgICAgICAgICAgICBoYW5kbGVyKC4uLmV2dHMpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgfTtcbn1cbmV4cG9ydHMuZGVmYXVsdCA9IG1pdHQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHVybF8xID0gcmVxdWlyZShcInVybFwiKTtcbmNvbnN0IG1pdHRfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vbWl0dFwiKSk7XG5jb25zdCB1dGlsc18xID0gcmVxdWlyZShcIi4uL3V0aWxzXCIpO1xuY29uc3QgaXNfZHluYW1pY18xID0gcmVxdWlyZShcIi4vdXRpbHMvaXMtZHluYW1pY1wiKTtcbmNvbnN0IHJvdXRlX21hdGNoZXJfMSA9IHJlcXVpcmUoXCIuL3V0aWxzL3JvdXRlLW1hdGNoZXJcIik7XG5jb25zdCByb3V0ZV9yZWdleF8xID0gcmVxdWlyZShcIi4vdXRpbHMvcm91dGUtcmVnZXhcIik7XG5jb25zdCBiYXNlUGF0aCA9IHByb2Nlc3MuZW52Ll9fTkVYVF9ST1VURVJfQkFTRVBBVEggfHwgJyc7XG5mdW5jdGlvbiBhZGRCYXNlUGF0aChwYXRoKSB7XG4gICAgcmV0dXJuIHBhdGguaW5kZXhPZihiYXNlUGF0aCkgIT09IDAgPyBiYXNlUGF0aCArIHBhdGggOiBwYXRoO1xufVxuZXhwb3J0cy5hZGRCYXNlUGF0aCA9IGFkZEJhc2VQYXRoO1xuZnVuY3Rpb24gZGVsQmFzZVBhdGgocGF0aCkge1xuICAgIHJldHVybiBwYXRoLmluZGV4T2YoYmFzZVBhdGgpID09PSAwXG4gICAgICAgID8gcGF0aC5zdWJzdHIoYmFzZVBhdGgubGVuZ3RoKSB8fCAnLydcbiAgICAgICAgOiBwYXRoO1xufVxuZXhwb3J0cy5kZWxCYXNlUGF0aCA9IGRlbEJhc2VQYXRoO1xuZnVuY3Rpb24gdG9Sb3V0ZShwYXRoKSB7XG4gICAgcmV0dXJuIHBhdGgucmVwbGFjZSgvXFwvJC8sICcnKSB8fCAnLyc7XG59XG5jb25zdCBwcmVwYXJlUm91dGUgPSAocGF0aCkgPT4gdG9Sb3V0ZSghcGF0aCB8fCBwYXRoID09PSAnLycgPyAnL2luZGV4JyA6IHBhdGgpO1xuZnVuY3Rpb24gZmV0Y2hOZXh0RGF0YShwYXRobmFtZSwgcXVlcnksIGlzU2VydmVyUmVuZGVyLCBjYikge1xuICAgIGxldCBhdHRlbXB0cyA9IGlzU2VydmVyUmVuZGVyID8gMyA6IDE7XG4gICAgZnVuY3Rpb24gZ2V0UmVzcG9uc2UoKSB7XG4gICAgICAgIHJldHVybiBmZXRjaCh1dGlsc18xLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHtcbiAgICAgICAgICAgIHBhdGhuYW1lOiBhZGRCYXNlUGF0aChcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmUgX19ORVhUX0RBVEFfX1xuICAgICAgICAgICAgYC9fbmV4dC9kYXRhLyR7X19ORVhUX0RBVEFfXy5idWlsZElkfSR7ZGVsQmFzZVBhdGgocGF0aG5hbWUpfS5qc29uYCksXG4gICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgfSksIHtcbiAgICAgICAgICAgIC8vIENvb2tpZXMgYXJlIHJlcXVpcmVkIHRvIGJlIHByZXNlbnQgZm9yIE5leHQuanMnIFNTRyBcIlByZXZpZXcgTW9kZVwiLlxuICAgICAgICAgICAgLy8gQ29va2llcyBtYXkgYWxzbyBiZSByZXF1aXJlZCBmb3IgYGdldFNlcnZlclNpZGVQcm9wc2AuXG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gPiBgZmV0Y2hgIHdvbuKAmXQgc2VuZCBjb29raWVzLCB1bmxlc3MgeW91IHNldCB0aGUgY3JlZGVudGlhbHMgaW5pdFxuICAgICAgICAgICAgLy8gPiBvcHRpb24uXG4gICAgICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRmV0Y2hfQVBJL1VzaW5nX0ZldGNoXG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gPiBGb3IgbWF4aW11bSBicm93c2VyIGNvbXBhdGliaWxpdHkgd2hlbiBpdCBjb21lcyB0byBzZW5kaW5nICZcbiAgICAgICAgICAgIC8vID4gcmVjZWl2aW5nIGNvb2tpZXMsIGFsd2F5cyBzdXBwbHkgdGhlIGBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ2BcbiAgICAgICAgICAgIC8vID4gb3B0aW9uIGluc3RlYWQgb2YgcmVseWluZyBvbiB0aGUgZGVmYXVsdC5cbiAgICAgICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9naXRodWIvZmV0Y2gjY2F2ZWF0c1xuICAgICAgICAgICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG4gICAgICAgIH0pLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgIGlmICghcmVzLm9rKSB7XG4gICAgICAgICAgICAgICAgaWYgKC0tYXR0ZW1wdHMgPiAwICYmIHJlcy5zdGF0dXMgPj0gNTAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBnZXRSZXNwb25zZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gZ2V0UmVzcG9uc2UoKVxuICAgICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgcmV0dXJuIGNiID8gY2IoZGF0YSkgOiBkYXRhO1xuICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIC8vIFdlIHNob3VsZCBvbmx5IHRyaWdnZXIgYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uIGlmIHRoaXMgd2FzIGNhdXNlZFxuICAgICAgICAvLyBvbiBhIGNsaWVudC1zaWRlIHRyYW5zaXRpb24uIE90aGVyd2lzZSwgd2UnZCBnZXQgaW50byBhbiBpbmZpbml0ZVxuICAgICAgICAvLyBsb29wLlxuICAgICAgICBpZiAoIWlzU2VydmVyUmVuZGVyKSB7XG4gICAgICAgICAgICA7XG4gICAgICAgICAgICBlcnIuY29kZSA9ICdQQUdFX0xPQURfRVJST1InO1xuICAgICAgICB9XG4gICAgICAgIHRocm93IGVycjtcbiAgICB9KTtcbn1cbmNsYXNzIFJvdXRlciB7XG4gICAgY29uc3RydWN0b3IocGF0aG5hbWUsIHF1ZXJ5LCBhcywgeyBpbml0aWFsUHJvcHMsIHBhZ2VMb2FkZXIsIEFwcCwgd3JhcEFwcCwgQ29tcG9uZW50LCBlcnIsIHN1YnNjcmlwdGlvbiwgaXNGYWxsYmFjaywgfSkge1xuICAgICAgICAvLyBTdGF0aWMgRGF0YSBDYWNoZVxuICAgICAgICB0aGlzLnNkYyA9IHt9O1xuICAgICAgICB0aGlzLm9uUG9wU3RhdGUgPSAoZSkgPT4ge1xuICAgICAgICAgICAgaWYgKCFlLnN0YXRlKSB7XG4gICAgICAgICAgICAgICAgLy8gV2UgZ2V0IHN0YXRlIGFzIHVuZGVmaW5lZCBmb3IgdHdvIHJlYXNvbnMuXG4gICAgICAgICAgICAgICAgLy8gIDEuIFdpdGggb2xkZXIgc2FmYXJpICg8IDgpIGFuZCBvbGRlciBjaHJvbWUgKDwgMzQpXG4gICAgICAgICAgICAgICAgLy8gIDIuIFdoZW4gdGhlIFVSTCBjaGFuZ2VkIHdpdGggI1xuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgLy8gSW4gdGhlIGJvdGggY2FzZXMsIHdlIGRvbid0IG5lZWQgdG8gcHJvY2VlZCBhbmQgY2hhbmdlIHRoZSByb3V0ZS5cbiAgICAgICAgICAgICAgICAvLyAoYXMgaXQncyBhbHJlYWR5IGNoYW5nZWQpXG4gICAgICAgICAgICAgICAgLy8gQnV0IHdlIGNhbiBzaW1wbHkgcmVwbGFjZSB0aGUgc3RhdGUgd2l0aCB0aGUgbmV3IGNoYW5nZXMuXG4gICAgICAgICAgICAgICAgLy8gQWN0dWFsbHksIGZvciAoMSkgd2UgZG9uJ3QgbmVlZCB0byBub3RoaW5nLiBCdXQgaXQncyBoYXJkIHRvIGRldGVjdCB0aGF0IGV2ZW50LlxuICAgICAgICAgICAgICAgIC8vIFNvLCBkb2luZyB0aGUgZm9sbG93aW5nIGZvciAoMSkgZG9lcyBubyBoYXJtLlxuICAgICAgICAgICAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSB0aGlzO1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoJ3JlcGxhY2VTdGF0ZScsIHV0aWxzXzEuZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZSwgcXVlcnkgfSksIHV0aWxzXzEuZ2V0VVJMKCkpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIE1ha2Ugc3VyZSB3ZSBkb24ndCByZS1yZW5kZXIgb24gaW5pdGlhbCBsb2FkLFxuICAgICAgICAgICAgLy8gY2FuIGJlIGNhdXNlZCBieSBuYXZpZ2F0aW5nIGJhY2sgZnJvbSBhbiBleHRlcm5hbCBzaXRlXG4gICAgICAgICAgICBpZiAoZS5zdGF0ZSAmJlxuICAgICAgICAgICAgICAgIHRoaXMuaXNTc3IgJiZcbiAgICAgICAgICAgICAgICBlLnN0YXRlLmFzID09PSB0aGlzLmFzUGF0aCAmJlxuICAgICAgICAgICAgICAgIHVybF8xLnBhcnNlKGUuc3RhdGUudXJsKS5wYXRobmFtZSA9PT0gdGhpcy5wYXRobmFtZSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIElmIHRoZSBkb3duc3RyZWFtIGFwcGxpY2F0aW9uIHJldHVybnMgZmFsc3ksIHJldHVybi5cbiAgICAgICAgICAgIC8vIFRoZXkgd2lsbCB0aGVuIGJlIHJlc3BvbnNpYmxlIGZvciBoYW5kbGluZyB0aGUgZXZlbnQuXG4gICAgICAgICAgICBpZiAodGhpcy5fYnBzICYmICF0aGlzLl9icHMoZS5zdGF0ZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCB7IHVybCwgYXMsIG9wdGlvbnMgfSA9IGUuc3RhdGU7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdXJsID09PSAndW5kZWZpbmVkJyB8fCB0eXBlb2YgYXMgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybignYHBvcHN0YXRlYCBldmVudCB0cmlnZ2VyZWQgYnV0IGBldmVudC5zdGF0ZWAgZGlkIG5vdCBoYXZlIGB1cmxgIG9yIGBhc2AgaHR0cHM6Ly9lcnIuc2gvemVpdC9uZXh0LmpzL3BvcHN0YXRlLXN0YXRlLWVtcHR5Jyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5yZXBsYWNlKHVybCwgYXMsIG9wdGlvbnMpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLl9nZXRTdGF0aWNEYXRhID0gKGFzUGF0aCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcGF0aG5hbWUgPSBwcmVwYXJlUm91dGUodXJsXzEucGFyc2UoYXNQYXRoKS5wYXRobmFtZSk7XG4gICAgICAgICAgICByZXR1cm4gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyAmJiB0aGlzLnNkY1twYXRobmFtZV1cbiAgICAgICAgICAgICAgICA/IFByb21pc2UucmVzb2x2ZSh0aGlzLnNkY1twYXRobmFtZV0pXG4gICAgICAgICAgICAgICAgOiBmZXRjaE5leHREYXRhKHBhdGhuYW1lLCBudWxsLCB0aGlzLmlzU3NyLCBkYXRhID0+ICh0aGlzLnNkY1twYXRobmFtZV0gPSBkYXRhKSk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuX2dldFNlcnZlckRhdGEgPSAoYXNQYXRoKSA9PiB7XG4gICAgICAgICAgICBsZXQgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHVybF8xLnBhcnNlKGFzUGF0aCwgdHJ1ZSk7XG4gICAgICAgICAgICBwYXRobmFtZSA9IHByZXBhcmVSb3V0ZShwYXRobmFtZSk7XG4gICAgICAgICAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShwYXRobmFtZSwgcXVlcnksIHRoaXMuaXNTc3IpO1xuICAgICAgICB9O1xuICAgICAgICAvLyByZXByZXNlbnRzIHRoZSBjdXJyZW50IGNvbXBvbmVudCBrZXlcbiAgICAgICAgdGhpcy5yb3V0ZSA9IHRvUm91dGUocGF0aG5hbWUpO1xuICAgICAgICAvLyBzZXQgdXAgdGhlIGNvbXBvbmVudCBjYWNoZSAoYnkgcm91dGUga2V5cylcbiAgICAgICAgdGhpcy5jb21wb25lbnRzID0ge307XG4gICAgICAgIC8vIFdlIHNob3VsZCBub3Qga2VlcCB0aGUgY2FjaGUsIGlmIHRoZXJlJ3MgYW4gZXJyb3JcbiAgICAgICAgLy8gT3RoZXJ3aXNlLCB0aGlzIGNhdXNlIGlzc3VlcyB3aGVuIHdoZW4gZ29pbmcgYmFjayBhbmRcbiAgICAgICAgLy8gY29tZSBhZ2FpbiB0byB0aGUgZXJyb3JlZCBwYWdlLlxuICAgICAgICBpZiAocGF0aG5hbWUgIT09ICcvX2Vycm9yJykge1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdID0ge1xuICAgICAgICAgICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgICAgICAgICBwcm9wczogaW5pdGlhbFByb3BzLFxuICAgICAgICAgICAgICAgIGVycixcbiAgICAgICAgICAgICAgICBfX05fU1NHOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU0csXG4gICAgICAgICAgICAgICAgX19OX1NTUDogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NQLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10gPSB7IENvbXBvbmVudDogQXBwIH07XG4gICAgICAgIC8vIEJhY2t3YXJkcyBjb21wYXQgZm9yIFJvdXRlci5yb3V0ZXIuZXZlbnRzXG4gICAgICAgIC8vIFRPRE86IFNob3VsZCBiZSByZW1vdmUgdGhlIGZvbGxvd2luZyBtYWpvciB2ZXJzaW9uIGFzIGl0IHdhcyBuZXZlciBkb2N1bWVudGVkXG4gICAgICAgIHRoaXMuZXZlbnRzID0gUm91dGVyLmV2ZW50cztcbiAgICAgICAgdGhpcy5wYWdlTG9hZGVyID0gcGFnZUxvYWRlcjtcbiAgICAgICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lO1xuICAgICAgICB0aGlzLnF1ZXJ5ID0gcXVlcnk7XG4gICAgICAgIC8vIGlmIGF1dG8gcHJlcmVuZGVyZWQgYW5kIGR5bmFtaWMgcm91dGUgd2FpdCB0byB1cGRhdGUgYXNQYXRoXG4gICAgICAgIC8vIHVudGlsIGFmdGVyIG1vdW50IHRvIHByZXZlbnQgaHlkcmF0aW9uIG1pc21hdGNoXG4gICAgICAgIHRoaXMuYXNQYXRoID1cbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmUgdGhpcyBpcyB0ZW1wb3JhcmlseSBnbG9iYWwgKGF0dGFjaGVkIHRvIHdpbmRvdylcbiAgICAgICAgICAgIGlzX2R5bmFtaWNfMS5pc0R5bmFtaWNSb3V0ZShwYXRobmFtZSkgJiYgX19ORVhUX0RBVEFfXy5hdXRvRXhwb3J0ID8gcGF0aG5hbWUgOiBhcztcbiAgICAgICAgdGhpcy5iYXNlUGF0aCA9IGJhc2VQYXRoO1xuICAgICAgICB0aGlzLnN1YiA9IHN1YnNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5jbGMgPSBudWxsO1xuICAgICAgICB0aGlzLl93cmFwQXBwID0gd3JhcEFwcDtcbiAgICAgICAgLy8gbWFrZSBzdXJlIHRvIGlnbm9yZSBleHRyYSBwb3BTdGF0ZSBpbiBzYWZhcmkgb24gbmF2aWdhdGluZ1xuICAgICAgICAvLyBiYWNrIGZyb20gZXh0ZXJuYWwgc2l0ZVxuICAgICAgICB0aGlzLmlzU3NyID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5pc0ZhbGxiYWNrID0gaXNGYWxsYmFjaztcbiAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAvLyBtYWtlIHN1cmUgXCJhc1wiIGRvZXNuJ3Qgc3RhcnQgd2l0aCBkb3VibGUgc2xhc2hlcyBvciBlbHNlIGl0IGNhblxuICAgICAgICAgICAgLy8gdGhyb3cgYW4gZXJyb3IgYXMgaXQncyBjb25zaWRlcmVkIGludmFsaWRcbiAgICAgICAgICAgIGlmIChhcy5zdWJzdHIoMCwgMikgIT09ICcvLycpIHtcbiAgICAgICAgICAgICAgICAvLyBpbiBvcmRlciBmb3IgYGUuc3RhdGVgIHRvIHdvcmsgb24gdGhlIGBvbnBvcHN0YXRlYCBldmVudFxuICAgICAgICAgICAgICAgIC8vIHdlIGhhdmUgdG8gcmVnaXN0ZXIgdGhlIGluaXRpYWwgcm91dGUgdXBvbiBpbml0aWFsaXphdGlvblxuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoJ3JlcGxhY2VTdGF0ZScsIHV0aWxzXzEuZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZSwgcXVlcnkgfSksIGFzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMub25Qb3BTdGF0ZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gQGRlcHJlY2F0ZWQgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkgZXZlbiB0aG91Z2ggaXQncyBhIHByaXZhdGUgbWV0aG9kLlxuICAgIHN0YXRpYyBfcmV3cml0ZVVybEZvck5leHRFeHBvcnQodXJsKSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfRVhQT1JUX1RSQUlMSU5HX1NMQVNIKSB7XG4gICAgICAgICAgICBjb25zdCByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCA9IHJlcXVpcmUoJy4vcmV3cml0ZS11cmwtZm9yLWV4cG9ydCcpXG4gICAgICAgICAgICAgICAgLnJld3JpdGVVcmxGb3JOZXh0RXhwb3J0O1xuICAgICAgICAgICAgcmV0dXJuIHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0KHVybCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdXJsO1xuICAgICAgICB9XG4gICAgfVxuICAgIHVwZGF0ZShyb3V0ZSwgbW9kKSB7XG4gICAgICAgIGNvbnN0IENvbXBvbmVudCA9IG1vZC5kZWZhdWx0IHx8IG1vZDtcbiAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMuY29tcG9uZW50c1tyb3V0ZV07XG4gICAgICAgIGlmICghZGF0YSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBDYW5ub3QgdXBkYXRlIHVuYXZhaWxhYmxlIHJvdXRlOiAke3JvdXRlfWApO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG5ld0RhdGEgPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGRhdGEpLCB7IENvbXBvbmVudCwgX19OX1NTRzogbW9kLl9fTl9TU0csIF9fTl9TU1A6IG1vZC5fX05fU1NQIH0pO1xuICAgICAgICB0aGlzLmNvbXBvbmVudHNbcm91dGVdID0gbmV3RGF0YTtcbiAgICAgICAgLy8gcGFnZXMvX2FwcC5qcyB1cGRhdGVkXG4gICAgICAgIGlmIChyb3V0ZSA9PT0gJy9fYXBwJykge1xuICAgICAgICAgICAgdGhpcy5ub3RpZnkodGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAocm91dGUgPT09IHRoaXMucm91dGUpIHtcbiAgICAgICAgICAgIHRoaXMubm90aWZ5KG5ld0RhdGEpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJlbG9hZCgpIHtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHbyBiYWNrIGluIGhpc3RvcnlcbiAgICAgKi9cbiAgICBiYWNrKCkge1xuICAgICAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFBlcmZvcm1zIGEgYHB1c2hTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAgICovXG4gICAgcHVzaCh1cmwsIGFzID0gdXJsLCBvcHRpb25zID0ge30pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdwdXNoU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUGVyZm9ybXMgYSBgcmVwbGFjZVN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICAgKi9cbiAgICByZXBsYWNlKHVybCwgYXMgPSB1cmwsIG9wdGlvbnMgPSB7fSkge1xuICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3JlcGxhY2VTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpO1xuICAgIH1cbiAgICBjaGFuZ2UobWV0aG9kLCBfdXJsLCBfYXMsIG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGlmICghb3B0aW9ucy5faCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaXNTc3IgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIG1hcmtpbmcgcm91dGUgY2hhbmdlcyBhcyBhIG5hdmlnYXRpb24gc3RhcnQgZW50cnlcbiAgICAgICAgICAgIGlmICh1dGlsc18xLlNUKSB7XG4gICAgICAgICAgICAgICAgcGVyZm9ybWFuY2UubWFyaygncm91dGVDaGFuZ2UnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIElmIHVybCBhbmQgYXMgcHJvdmlkZWQgYXMgYW4gb2JqZWN0IHJlcHJlc2VudGF0aW9uLFxuICAgICAgICAgICAgLy8gd2UnbGwgZm9ybWF0IHRoZW0gaW50byB0aGUgc3RyaW5nIHZlcnNpb24gaGVyZS5cbiAgICAgICAgICAgIGxldCB1cmwgPSB0eXBlb2YgX3VybCA9PT0gJ29iamVjdCcgPyB1dGlsc18xLmZvcm1hdFdpdGhWYWxpZGF0aW9uKF91cmwpIDogX3VybDtcbiAgICAgICAgICAgIGxldCBhcyA9IHR5cGVvZiBfYXMgPT09ICdvYmplY3QnID8gdXRpbHNfMS5mb3JtYXRXaXRoVmFsaWRhdGlvbihfYXMpIDogX2FzO1xuICAgICAgICAgICAgdXJsID0gYWRkQmFzZVBhdGgodXJsKTtcbiAgICAgICAgICAgIGFzID0gYWRkQmFzZVBhdGgoYXMpO1xuICAgICAgICAgICAgLy8gQWRkIHRoZSBlbmRpbmcgc2xhc2ggdG8gdGhlIHBhdGhzLiBTbywgd2UgY2FuIHNlcnZlIHRoZVxuICAgICAgICAgICAgLy8gXCI8cGFnZT4vaW5kZXguaHRtbFwiIGRpcmVjdGx5IGZvciB0aGUgU1NSIHBhZ2UuXG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0VYUE9SVF9UUkFJTElOR19TTEFTSCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0ID0gcmVxdWlyZSgnLi9yZXdyaXRlLXVybC1mb3ItZXhwb3J0JylcbiAgICAgICAgICAgICAgICAgICAgLnJld3JpdGVVcmxGb3JOZXh0RXhwb3J0O1xuICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmUgdGhpcyBpcyB0ZW1wb3JhcmlseSBnbG9iYWwgKGF0dGFjaGVkIHRvIHdpbmRvdylcbiAgICAgICAgICAgICAgICBpZiAoX19ORVhUX0RBVEFfXy5uZXh0RXhwb3J0KSB7XG4gICAgICAgICAgICAgICAgICAgIGFzID0gcmV3cml0ZVVybEZvck5leHRFeHBvcnQoYXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuYWJvcnRDb21wb25lbnRMb2FkKGFzKTtcbiAgICAgICAgICAgIC8vIElmIHRoZSB1cmwgY2hhbmdlIGlzIG9ubHkgcmVsYXRlZCB0byBhIGhhc2ggY2hhbmdlXG4gICAgICAgICAgICAvLyBXZSBzaG91bGQgbm90IHByb2NlZWQuIFdlIHNob3VsZCBvbmx5IGNoYW5nZSB0aGUgc3RhdGUuXG4gICAgICAgICAgICAvLyBXQVJOSU5HOiBgX2hgIGlzIGFuIGludGVybmFsIG9wdGlvbiBmb3IgaGFuZGluZyBOZXh0LmpzIGNsaWVudC1zaWRlXG4gICAgICAgICAgICAvLyBoeWRyYXRpb24uIFlvdXIgYXBwIHNob3VsZCBfbmV2ZXJfIHVzZSB0aGlzIHByb3BlcnR5LiBJdCBtYXkgY2hhbmdlIGF0XG4gICAgICAgICAgICAvLyBhbnkgdGltZSB3aXRob3V0IG5vdGljZS5cbiAgICAgICAgICAgIGlmICghb3B0aW9ucy5faCAmJiB0aGlzLm9ubHlBSGFzaENoYW5nZShhcykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFzUGF0aCA9IGFzO1xuICAgICAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZVN0YXJ0JywgYXMpO1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbFRvSGFzaChhcyk7XG4gICAgICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlQ29tcGxldGUnLCBhcyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUodHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCB7IHBhdGhuYW1lLCBxdWVyeSwgcHJvdG9jb2wgfSA9IHVybF8xLnBhcnNlKHVybCwgdHJ1ZSk7XG4gICAgICAgICAgICBpZiAoIXBhdGhuYW1lIHx8IHByb3RvY29sKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIGhyZWYgcGFzc2VkIHRvIHJvdXRlcjogJHt1cmx9IGh0dHBzOi8vZXJyLnNoL3plaXQvbmV4dC5qcy9pbnZhbGlkLWhyZWYtcGFzc2VkYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIElmIGFza2VkIHRvIGNoYW5nZSB0aGUgY3VycmVudCBVUkwgd2Ugc2hvdWxkIHJlbG9hZCB0aGUgY3VycmVudCBwYWdlXG4gICAgICAgICAgICAvLyAobm90IGxvY2F0aW9uLnJlbG9hZCgpIGJ1dCByZWxvYWQgZ2V0SW5pdGlhbFByb3BzIGFuZCBvdGhlciBOZXh0LmpzIHN0dWZmcylcbiAgICAgICAgICAgIC8vIFdlIGFsc28gbmVlZCB0byBzZXQgdGhlIG1ldGhvZCA9IHJlcGxhY2VTdGF0ZSBhbHdheXNcbiAgICAgICAgICAgIC8vIGFzIHRoaXMgc2hvdWxkIG5vdCBnbyBpbnRvIHRoZSBoaXN0b3J5IChUaGF0J3MgaG93IGJyb3dzZXJzIHdvcmspXG4gICAgICAgICAgICAvLyBXZSBzaG91bGQgY29tcGFyZSB0aGUgbmV3IGFzUGF0aCB0byB0aGUgY3VycmVudCBhc1BhdGgsIG5vdCB0aGUgdXJsXG4gICAgICAgICAgICBpZiAoIXRoaXMudXJsSXNOZXcoYXMpKSB7XG4gICAgICAgICAgICAgICAgbWV0aG9kID0gJ3JlcGxhY2VTdGF0ZSc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCByb3V0ZSA9IHRvUm91dGUocGF0aG5hbWUpO1xuICAgICAgICAgICAgY29uc3QgeyBzaGFsbG93ID0gZmFsc2UgfSA9IG9wdGlvbnM7XG4gICAgICAgICAgICBpZiAoaXNfZHluYW1pY18xLmlzRHluYW1pY1JvdXRlKHJvdXRlKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgcGF0aG5hbWU6IGFzUGF0aG5hbWUgfSA9IHVybF8xLnBhcnNlKGFzKTtcbiAgICAgICAgICAgICAgICBjb25zdCByb3V0ZVJlZ2V4ID0gcm91dGVfcmVnZXhfMS5nZXRSb3V0ZVJlZ2V4KHJvdXRlKTtcbiAgICAgICAgICAgICAgICBjb25zdCByb3V0ZU1hdGNoID0gcm91dGVfbWF0Y2hlcl8xLmdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4KShhc1BhdGhuYW1lKTtcbiAgICAgICAgICAgICAgICBpZiAoIXJvdXRlTWF0Y2gpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbWlzc2luZ1BhcmFtcyA9IE9iamVjdC5rZXlzKHJvdXRlUmVnZXguZ3JvdXBzKS5maWx0ZXIocGFyYW0gPT4gIXF1ZXJ5W3BhcmFtXSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChtaXNzaW5nUGFyYW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGBNaXNtYXRjaGluZyBcXGBhc1xcYCBhbmQgXFxgaHJlZlxcYCBmYWlsZWQgdG8gbWFudWFsbHkgcHJvdmlkZSBgICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYHRoZSBwYXJhbXM6ICR7bWlzc2luZ1BhcmFtcy5qb2luKCcsICcpfSBpbiB0aGUgXFxgaHJlZlxcYCdzIFxcYHF1ZXJ5XFxgYCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVqZWN0KG5ldyBFcnJvcihgVGhlIHByb3ZpZGVkIFxcYGFzXFxgIHZhbHVlICgke2FzUGF0aG5hbWV9KSBpcyBpbmNvbXBhdGlibGUgd2l0aCB0aGUgXFxgaHJlZlxcYCB2YWx1ZSAoJHtyb3V0ZX0pLiBgICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgUmVhZCBtb3JlOiBodHRwczovL2Vyci5zaC96ZWl0L25leHQuanMvaW5jb21wYXRpYmxlLWhyZWYtYXNgKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIE1lcmdlIHBhcmFtcyBpbnRvIGBxdWVyeWAsIG92ZXJ3cml0aW5nIGFueSBzcGVjaWZpZWQgaW4gc2VhcmNoXG4gICAgICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnksIHJvdXRlTWF0Y2gpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VTdGFydCcsIGFzKTtcbiAgICAgICAgICAgIC8vIElmIHNoYWxsb3cgaXMgdHJ1ZSBhbmQgdGhlIHJvdXRlIGV4aXN0cyBpbiB0aGUgcm91dGVyIGNhY2hlIHdlIHJldXNlIHRoZSBwcmV2aW91cyByZXN1bHRcbiAgICAgICAgICAgIHRoaXMuZ2V0Um91dGVJbmZvKHJvdXRlLCBwYXRobmFtZSwgcXVlcnksIGFzLCBzaGFsbG93KS50aGVuKHJvdXRlSW5mbyA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgeyBlcnJvciB9ID0gcm91dGVJbmZvO1xuICAgICAgICAgICAgICAgIGlmIChlcnJvciAmJiBlcnJvci5jYW5jZWxsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoZmFsc2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLCBhcyk7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFwcENvbXAgPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50O1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubmV4dC5pc1ByZXJlbmRlcmVkID1cbiAgICAgICAgICAgICAgICAgICAgICAgIGFwcENvbXAuZ2V0SW5pdGlhbFByb3BzID09PSBhcHBDb21wLm9yaWdHZXRJbml0aWFsUHJvcHMgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAhcm91dGVJbmZvLkNvbXBvbmVudC5nZXRJbml0aWFsUHJvcHM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuc2V0KHJvdXRlLCBwYXRobmFtZSwgcXVlcnksIGFzLCByb3V0ZUluZm8pO1xuICAgICAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnJvciwgYXMpO1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgYXMpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKHRydWUpO1xuICAgICAgICAgICAgfSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucyA9IHt9KSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5IGlzIG5vdCBhdmFpbGFibGUuYCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeVttZXRob2RdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5LiR7bWV0aG9kfSBpcyBub3QgYXZhaWxhYmxlYCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChtZXRob2QgIT09ICdwdXNoU3RhdGUnIHx8IHV0aWxzXzEuZ2V0VVJMKCkgIT09IGFzKSB7XG4gICAgICAgICAgICB3aW5kb3cuaGlzdG9yeVttZXRob2RdKHtcbiAgICAgICAgICAgICAgICB1cmwsXG4gICAgICAgICAgICAgICAgYXMsXG4gICAgICAgICAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgICAgIH0sIFxuICAgICAgICAgICAgLy8gTW9zdCBicm93c2VycyBjdXJyZW50bHkgaWdub3JlcyB0aGlzIHBhcmFtZXRlciwgYWx0aG91Z2ggdGhleSBtYXkgdXNlIGl0IGluIHRoZSBmdXR1cmUuXG4gICAgICAgICAgICAvLyBQYXNzaW5nIHRoZSBlbXB0eSBzdHJpbmcgaGVyZSBzaG91bGQgYmUgc2FmZSBhZ2FpbnN0IGZ1dHVyZSBjaGFuZ2VzIHRvIHRoZSBtZXRob2QuXG4gICAgICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSGlzdG9yeS9yZXBsYWNlU3RhdGVcbiAgICAgICAgICAgICcnLCBhcyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0Um91dGVJbmZvKHJvdXRlLCBwYXRobmFtZSwgcXVlcnksIGFzLCBzaGFsbG93ID0gZmFsc2UpIHtcbiAgICAgICAgY29uc3QgY2FjaGVkUm91dGVJbmZvID0gdGhpcy5jb21wb25lbnRzW3JvdXRlXTtcbiAgICAgICAgLy8gSWYgdGhlcmUgaXMgYSBzaGFsbG93IHJvdXRlIHRyYW5zaXRpb24gcG9zc2libGVcbiAgICAgICAgLy8gSWYgdGhlIHJvdXRlIGlzIGFscmVhZHkgcmVuZGVyZWQgb24gdGhlIHNjcmVlbi5cbiAgICAgICAgaWYgKHNoYWxsb3cgJiYgY2FjaGVkUm91dGVJbmZvICYmIHRoaXMucm91dGUgPT09IHJvdXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGNhY2hlZFJvdXRlSW5mbyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaGFuZGxlRXJyb3IgPSAoZXJyLCBsb2FkRXJyb3JGYWlsKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVyci5jb2RlID09PSAnUEFHRV9MT0FEX0VSUk9SJyB8fCBsb2FkRXJyb3JGYWlsKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIElmIHdlIGNhbid0IGxvYWQgdGhlIHBhZ2UgaXQgY291bGQgYmUgb25lIG9mIGZvbGxvd2luZyByZWFzb25zXG4gICAgICAgICAgICAgICAgICAgIC8vICAxLiBQYWdlIGRvZXNuJ3QgZXhpc3RzXG4gICAgICAgICAgICAgICAgICAgIC8vICAyLiBQYWdlIGRvZXMgZXhpc3QgaW4gYSBkaWZmZXJlbnQgem9uZVxuICAgICAgICAgICAgICAgICAgICAvLyAgMy4gSW50ZXJuYWwgZXJyb3Igd2hpbGUgbG9hZGluZyB0aGUgcGFnZVxuICAgICAgICAgICAgICAgICAgICAvLyBTbywgZG9pbmcgYSBoYXJkIHJlbG9hZCBpcyB0aGUgcHJvcGVyIHdheSB0byBkZWFsIHdpdGggdGhpcy5cbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhcztcbiAgICAgICAgICAgICAgICAgICAgLy8gQ2hhbmdpbmcgdGhlIFVSTCBkb2Vzbid0IGJsb2NrIGV4ZWN1dGluZyB0aGUgY3VycmVudCBjb2RlIHBhdGguXG4gICAgICAgICAgICAgICAgICAgIC8vIFNvLCB3ZSBuZWVkIHRvIG1hcmsgaXQgYXMgYSBjYW5jZWxsZWQgZXJyb3IgYW5kIHN0b3AgdGhlIHJvdXRpbmcgbG9naWMuXG4gICAgICAgICAgICAgICAgICAgIGVyci5jYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlIFRPRE86IGZpeCB0aGUgY29udHJvbCBmbG93IGhlcmVcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoeyBlcnJvcjogZXJyIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlIFRPRE86IGZpeCB0aGUgY29udHJvbCBmbG93IGhlcmVcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoeyBlcnJvcjogZXJyIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXNvbHZlKHRoaXMuZmV0Y2hDb21wb25lbnQoJy9fZXJyb3InKVxuICAgICAgICAgICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB7IHBhZ2U6IENvbXBvbmVudCB9ID0gcmVzO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByb3V0ZUluZm8gPSB7IENvbXBvbmVudCwgZXJyIH07XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLnRoZW4ocHJvcHMgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5lcnJvciA9IGVycjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJvdXRlSW5mbyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCBnaXBFcnIgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGVycm9yIHBhZ2UgYGdldEluaXRpYWxQcm9wc2A6ICcsIGdpcEVycik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLmVycm9yID0gZXJyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHt9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUocm91dGVJbmZvKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goZXJyID0+IGhhbmRsZUVycm9yKGVyciwgdHJ1ZSkpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgaWYgKGNhY2hlZFJvdXRlSW5mbykge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKGNhY2hlZFJvdXRlSW5mbyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmZldGNoQ29tcG9uZW50KHJvdXRlKS50aGVuKHJlcyA9PiByZXNvbHZlKHtcbiAgICAgICAgICAgICAgICBDb21wb25lbnQ6IHJlcy5wYWdlLFxuICAgICAgICAgICAgICAgIF9fTl9TU0c6IHJlcy5tb2QuX19OX1NTRyxcbiAgICAgICAgICAgICAgICBfX05fU1NQOiByZXMubW9kLl9fTl9TU1AsXG4gICAgICAgICAgICB9KSwgcmVqZWN0KTtcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKChyb3V0ZUluZm8pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHsgQ29tcG9uZW50LCBfX05fU1NHLCBfX05fU1NQIH0gPSByb3V0ZUluZm87XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgaXNWYWxpZEVsZW1lbnRUeXBlIH0gPSByZXF1aXJlKCdyZWFjdC1pcycpO1xuICAgICAgICAgICAgICAgIGlmICghaXNWYWxpZEVsZW1lbnRUeXBlKENvbXBvbmVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgZGVmYXVsdCBleHBvcnQgaXMgbm90IGEgUmVhY3QgQ29tcG9uZW50IGluIHBhZ2U6IFwiJHtwYXRobmFtZX1cImApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9nZXREYXRhKCgpID0+IF9fTl9TU0dcbiAgICAgICAgICAgICAgICA/IHRoaXMuX2dldFN0YXRpY0RhdGEoYXMpXG4gICAgICAgICAgICAgICAgOiBfX05fU1NQXG4gICAgICAgICAgICAgICAgICAgID8gdGhpcy5fZ2V0U2VydmVyRGF0YShhcylcbiAgICAgICAgICAgICAgICAgICAgOiB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIFxuICAgICAgICAgICAgICAgICAgICAvLyB3ZSBwcm92aWRlIEFwcFRyZWUgbGF0ZXIgc28gdGhpcyBuZWVkcyB0byBiZSBgYW55YFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgICAgICAgICAgICAgYXNQYXRoOiBhcyxcbiAgICAgICAgICAgICAgICAgICAgfSkpLnRoZW4ocHJvcHMgPT4ge1xuICAgICAgICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzO1xuICAgICAgICAgICAgICAgIHRoaXMuY29tcG9uZW50c1tyb3V0ZV0gPSByb3V0ZUluZm87XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJvdXRlSW5mbztcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGhhbmRsZUVycm9yKTtcbiAgICB9XG4gICAgc2V0KHJvdXRlLCBwYXRobmFtZSwgcXVlcnksIGFzLCBkYXRhKSB7XG4gICAgICAgIHRoaXMuaXNGYWxsYmFjayA9IGZhbHNlO1xuICAgICAgICB0aGlzLnJvdXRlID0gcm91dGU7XG4gICAgICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZTtcbiAgICAgICAgdGhpcy5xdWVyeSA9IHF1ZXJ5O1xuICAgICAgICB0aGlzLmFzUGF0aCA9IGFzO1xuICAgICAgICB0aGlzLm5vdGlmeShkYXRhKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2FsbGJhY2sgdG8gZXhlY3V0ZSBiZWZvcmUgcmVwbGFjaW5nIHJvdXRlciBzdGF0ZVxuICAgICAqIEBwYXJhbSBjYiBjYWxsYmFjayB0byBiZSBleGVjdXRlZFxuICAgICAqL1xuICAgIGJlZm9yZVBvcFN0YXRlKGNiKSB7XG4gICAgICAgIHRoaXMuX2JwcyA9IGNiO1xuICAgIH1cbiAgICBvbmx5QUhhc2hDaGFuZ2UoYXMpIHtcbiAgICAgICAgaWYgKCF0aGlzLmFzUGF0aClcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgY29uc3QgW29sZFVybE5vSGFzaCwgb2xkSGFzaF0gPSB0aGlzLmFzUGF0aC5zcGxpdCgnIycpO1xuICAgICAgICBjb25zdCBbbmV3VXJsTm9IYXNoLCBuZXdIYXNoXSA9IGFzLnNwbGl0KCcjJyk7XG4gICAgICAgIC8vIE1ha2VzIHN1cmUgd2Ugc2Nyb2xsIHRvIHRoZSBwcm92aWRlZCBoYXNoIGlmIHRoZSB1cmwvaGFzaCBhcmUgdGhlIHNhbWVcbiAgICAgICAgaWYgKG5ld0hhc2ggJiYgb2xkVXJsTm9IYXNoID09PSBuZXdVcmxOb0hhc2ggJiYgb2xkSGFzaCA9PT0gbmV3SGFzaCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgdGhlIHVybHMgYXJlIGNoYW5nZSwgdGhlcmUncyBtb3JlIHRoYW4gYSBoYXNoIGNoYW5nZVxuICAgICAgICBpZiAob2xkVXJsTm9IYXNoICE9PSBuZXdVcmxOb0hhc2gpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiB0aGUgaGFzaCBoYXMgY2hhbmdlZCwgdGhlbiBpdCdzIGEgaGFzaCBvbmx5IGNoYW5nZS5cbiAgICAgICAgLy8gVGhpcyBjaGVjayBpcyBuZWNlc3NhcnkgdG8gaGFuZGxlIGJvdGggdGhlIGVudGVyIGFuZFxuICAgICAgICAvLyBsZWF2ZSBoYXNoID09PSAnJyBjYXNlcy4gVGhlIGlkZW50aXR5IGNhc2UgZmFsbHMgdGhyb3VnaFxuICAgICAgICAvLyBhbmQgaXMgdHJlYXRlZCBhcyBhIG5leHQgcmVsb2FkLlxuICAgICAgICByZXR1cm4gb2xkSGFzaCAhPT0gbmV3SGFzaDtcbiAgICB9XG4gICAgc2Nyb2xsVG9IYXNoKGFzKSB7XG4gICAgICAgIGNvbnN0IFssIGhhc2hdID0gYXMuc3BsaXQoJyMnKTtcbiAgICAgICAgLy8gU2Nyb2xsIHRvIHRvcCBpZiB0aGUgaGFzaCBpcyBqdXN0IGAjYCB3aXRoIG5vIHZhbHVlXG4gICAgICAgIGlmIChoYXNoID09PSAnJykge1xuICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIEZpcnN0IHdlIGNoZWNrIGlmIHRoZSBlbGVtZW50IGJ5IGlkIGlzIGZvdW5kXG4gICAgICAgIGNvbnN0IGlkRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChoYXNoKTtcbiAgICAgICAgaWYgKGlkRWwpIHtcbiAgICAgICAgICAgIGlkRWwuc2Nyb2xsSW50b1ZpZXcoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiB0aGVyZSdzIG5vIGVsZW1lbnQgd2l0aCB0aGUgaWQsIHdlIGNoZWNrIHRoZSBgbmFtZWAgcHJvcGVydHlcbiAgICAgICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgICAgIGNvbnN0IG5hbWVFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKGhhc2gpWzBdO1xuICAgICAgICBpZiAobmFtZUVsKSB7XG4gICAgICAgICAgICBuYW1lRWwuc2Nyb2xsSW50b1ZpZXcoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB1cmxJc05ldyhhc1BhdGgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXNQYXRoICE9PSBhc1BhdGg7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFByZWZldGNoIHBhZ2UgY29kZSwgeW91IG1heSB3YWl0IGZvciB0aGUgZGF0YSBkdXJpbmcgcGFnZSByZW5kZXJpbmcuXG4gICAgICogVGhpcyBmZWF0dXJlIG9ubHkgd29ya3MgaW4gcHJvZHVjdGlvbiFcbiAgICAgKiBAcGFyYW0gdXJsIHRoZSBocmVmIG9mIHByZWZldGNoZWQgcGFnZVxuICAgICAqIEBwYXJhbSBhc1BhdGggdGhlIGFzIHBhdGggb2YgdGhlIHByZWZldGNoZWQgcGFnZVxuICAgICAqL1xuICAgIHByZWZldGNoKHVybCwgYXNQYXRoID0gdXJsLCBvcHRpb25zID0ge30pIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHByb3RvY29sIH0gPSB1cmxfMS5wYXJzZSh1cmwpO1xuICAgICAgICAgICAgaWYgKCFwYXRobmFtZSB8fCBwcm90b2NvbCkge1xuICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBocmVmIHBhc3NlZCB0byByb3V0ZXI6ICR7dXJsfSBodHRwczovL2Vyci5zaC96ZWl0L25leHQuanMvaW52YWxpZC1ocmVmLXBhc3NlZGApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBQcmVmZXRjaCBpcyBub3Qgc3VwcG9ydGVkIGluIGRldmVsb3BtZW50IG1vZGUgYmVjYXVzZSBpdCB3b3VsZCB0cmlnZ2VyIG9uLWRlbWFuZC1lbnRyaWVzXG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHJvdXRlID0gZGVsQmFzZVBhdGgodG9Sb3V0ZShwYXRobmFtZSkpO1xuICAgICAgICAgICAgUHJvbWlzZS5hbGwoW1xuICAgICAgICAgICAgICAgIHRoaXMucGFnZUxvYWRlci5wcmVmZXRjaERhdGEodXJsLCBkZWxCYXNlUGF0aChhc1BhdGgpKSxcbiAgICAgICAgICAgICAgICB0aGlzLnBhZ2VMb2FkZXJbb3B0aW9ucy5wcmlvcml0eSA/ICdsb2FkUGFnZScgOiAncHJlZmV0Y2gnXShyb3V0ZSksXG4gICAgICAgICAgICBdKS50aGVuKCgpID0+IHJlc29sdmUoKSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGFzeW5jIGZldGNoQ29tcG9uZW50KHJvdXRlKSB7XG4gICAgICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZTtcbiAgICAgICAgY29uc3QgY2FuY2VsID0gKHRoaXMuY2xjID0gKCkgPT4ge1xuICAgICAgICAgICAgY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJvdXRlID0gZGVsQmFzZVBhdGgocm91dGUpO1xuICAgICAgICBjb25zdCBjb21wb25lbnRSZXN1bHQgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIubG9hZFBhZ2Uocm91dGUpO1xuICAgICAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICBjb25zdCBlcnJvciA9IG5ldyBFcnJvcihgQWJvcnQgZmV0Y2hpbmcgY29tcG9uZW50IGZvciByb3V0ZTogXCIke3JvdXRlfVwiYCk7XG4gICAgICAgICAgICBlcnJvci5jYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgICAgICAgIHRoaXMuY2xjID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29tcG9uZW50UmVzdWx0O1xuICAgIH1cbiAgICBfZ2V0RGF0YShmbikge1xuICAgICAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2U7XG4gICAgICAgIGNvbnN0IGNhbmNlbCA9ICgpID0+IHtcbiAgICAgICAgICAgIGNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuY2xjID0gY2FuY2VsO1xuICAgICAgICByZXR1cm4gZm4oKS50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNsYyA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZXJyID0gbmV3IEVycm9yKCdMb2FkaW5nIGluaXRpYWwgcHJvcHMgY2FuY2VsbGVkJyk7XG4gICAgICAgICAgICAgICAgZXJyLmNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBnZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCBjdHgpIHtcbiAgICAgICAgY29uc3QgeyBDb21wb25lbnQ6IEFwcCB9ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddO1xuICAgICAgICBjb25zdCBBcHBUcmVlID0gdGhpcy5fd3JhcEFwcChBcHApO1xuICAgICAgICBjdHguQXBwVHJlZSA9IEFwcFRyZWU7XG4gICAgICAgIHJldHVybiB1dGlsc18xLmxvYWRHZXRJbml0aWFsUHJvcHMoQXBwLCB7XG4gICAgICAgICAgICBBcHBUcmVlLFxuICAgICAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICAgICAgcm91dGVyOiB0aGlzLFxuICAgICAgICAgICAgY3R4LFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgYWJvcnRDb21wb25lbnRMb2FkKGFzKSB7XG4gICAgICAgIGlmICh0aGlzLmNsYykge1xuICAgICAgICAgICAgY29uc3QgZSA9IG5ldyBFcnJvcignUm91dGUgQ2FuY2VsbGVkJyk7XG4gICAgICAgICAgICBlLmNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlLCBhcyk7XG4gICAgICAgICAgICB0aGlzLmNsYygpO1xuICAgICAgICAgICAgdGhpcy5jbGMgPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxuICAgIG5vdGlmeShkYXRhKSB7XG4gICAgICAgIHRoaXMuc3ViKGRhdGEsIHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQpO1xuICAgIH1cbn1cbmV4cG9ydHMuZGVmYXVsdCA9IFJvdXRlcjtcblJvdXRlci5ldmVudHMgPSBtaXR0XzEuZGVmYXVsdCgpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vLyBJZGVudGlmeSAvW3BhcmFtXS8gaW4gcm91dGUgc3RyaW5nXG5jb25zdCBURVNUX1JPVVRFID0gL1xcL1xcW1teL10rP1xcXSg/PVxcL3wkKS87XG5mdW5jdGlvbiBpc0R5bmFtaWNSb3V0ZShyb3V0ZSkge1xuICAgIHJldHVybiBURVNUX1JPVVRFLnRlc3Qocm91dGUpO1xufVxuZXhwb3J0cy5pc0R5bmFtaWNSb3V0ZSA9IGlzRHluYW1pY1JvdXRlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5mdW5jdGlvbiBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleCkge1xuICAgIGNvbnN0IHsgcmUsIGdyb3VwcyB9ID0gcm91dGVSZWdleDtcbiAgICByZXR1cm4gKHBhdGhuYW1lKSA9PiB7XG4gICAgICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSByZS5leGVjKHBhdGhuYW1lKTtcbiAgICAgICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZGVjb2RlID0gKHBhcmFtKSA9PiB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQocGFyYW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKF8pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBlcnIgPSBuZXcgRXJyb3IoJ2ZhaWxlZCB0byBkZWNvZGUgcGFyYW0nKTtcbiAgICAgICAgICAgICAgICBlcnIuY29kZSA9ICdERUNPREVfRkFJTEVEJztcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IHt9O1xuICAgICAgICBPYmplY3Qua2V5cyhncm91cHMpLmZvckVhY2goKHNsdWdOYW1lKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBnID0gZ3JvdXBzW3NsdWdOYW1lXTtcbiAgICAgICAgICAgIGNvbnN0IG0gPSByb3V0ZU1hdGNoW2cucG9zXTtcbiAgICAgICAgICAgIGlmIChtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBwYXJhbXNbc2x1Z05hbWVdID0gfm0uaW5kZXhPZignLycpXG4gICAgICAgICAgICAgICAgICAgID8gbS5zcGxpdCgnLycpLm1hcChlbnRyeSA9PiBkZWNvZGUoZW50cnkpKVxuICAgICAgICAgICAgICAgICAgICA6IGcucmVwZWF0XG4gICAgICAgICAgICAgICAgICAgICAgICA/IFtkZWNvZGUobSldXG4gICAgICAgICAgICAgICAgICAgICAgICA6IGRlY29kZShtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBwYXJhbXM7XG4gICAgfTtcbn1cbmV4cG9ydHMuZ2V0Um91dGVNYXRjaGVyID0gZ2V0Um91dGVNYXRjaGVyO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vLyB0aGlzIGlzbid0IGltcG9ydGluZyB0aGUgZXNjYXBlLXN0cmluZy1yZWdleCBtb2R1bGVcbi8vIHRvIHJlZHVjZSBieXRlc1xuZnVuY3Rpb24gZXNjYXBlUmVnZXgoc3RyKSB7XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC9bfFxcXFx7fSgpW1xcXV4kKyo/Li1dL2csICdcXFxcJCYnKTtcbn1cbmZ1bmN0aW9uIGdldFJvdXRlUmVnZXgobm9ybWFsaXplZFJvdXRlKSB7XG4gICAgLy8gRXNjYXBlIGFsbCBjaGFyYWN0ZXJzIHRoYXQgY291bGQgYmUgY29uc2lkZXJlZCBSZWdFeFxuICAgIGNvbnN0IGVzY2FwZWRSb3V0ZSA9IGVzY2FwZVJlZ2V4KG5vcm1hbGl6ZWRSb3V0ZS5yZXBsYWNlKC9cXC8kLywgJycpIHx8ICcvJyk7XG4gICAgY29uc3QgZ3JvdXBzID0ge307XG4gICAgbGV0IGdyb3VwSW5kZXggPSAxO1xuICAgIGNvbnN0IHBhcmFtZXRlcml6ZWRSb3V0ZSA9IGVzY2FwZWRSb3V0ZS5yZXBsYWNlKC9cXC9cXFxcXFxbKFteL10rPylcXFxcXFxdKD89XFwvfCQpL2csIChfLCAkMSkgPT4ge1xuICAgICAgICBjb25zdCBpc0NhdGNoQWxsID0gL14oXFxcXFxcLil7M30vLnRlc3QoJDEpO1xuICAgICAgICBncm91cHNbJDFcbiAgICAgICAgICAgIC8vIFVuLWVzY2FwZSBrZXlcbiAgICAgICAgICAgIC5yZXBsYWNlKC9cXFxcKFt8XFxcXHt9KClbXFxdXiQrKj8uLV0pL2csICckMScpXG4gICAgICAgICAgICAucmVwbGFjZSgvXlxcLnszfS8sICcnKVxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VxdWVuY2VzXG4gICAgICAgIF0gPSB7IHBvczogZ3JvdXBJbmRleCsrLCByZXBlYXQ6IGlzQ2F0Y2hBbGwgfTtcbiAgICAgICAgcmV0dXJuIGlzQ2F0Y2hBbGwgPyAnLyguKz8pJyA6ICcvKFteL10rPyknO1xuICAgIH0pO1xuICAgIGxldCBuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZTtcbiAgICAvLyBkZWFkIGNvZGUgZWxpbWluYXRlIGZvciBicm93c2VyIHNpbmNlIGl0J3Mgb25seSBuZWVkZWRcbiAgICAvLyB3aGlsZSBnZW5lcmF0aW5nIHJvdXRlcy1tYW5pZmVzdFxuICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSA9IGVzY2FwZWRSb3V0ZS5yZXBsYWNlKC9cXC9cXFxcXFxbKFteL10rPylcXFxcXFxdKD89XFwvfCQpL2csIChfLCAkMSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaXNDYXRjaEFsbCA9IC9eKFxcXFxcXC4pezN9Ly50ZXN0KCQxKTtcbiAgICAgICAgICAgIGNvbnN0IGtleSA9ICQxXG4gICAgICAgICAgICAgICAgLy8gVW4tZXNjYXBlIGtleVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9cXFxcKFt8XFxcXHt9KClbXFxdXiQrKj8uLV0pL2csICckMScpXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoL15cXC57M30vLCAnJyk7XG4gICAgICAgICAgICByZXR1cm4gaXNDYXRjaEFsbFxuICAgICAgICAgICAgICAgID8gYC8oPzwke2VzY2FwZVJlZ2V4KGtleSl9Pi4rPylgXG4gICAgICAgICAgICAgICAgOiBgLyg/PCR7ZXNjYXBlUmVnZXgoa2V5KX0+W14vXSs/KWA7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7IHJlOiBuZXcgUmVnRXhwKCdeJyArIHBhcmFtZXRlcml6ZWRSb3V0ZSArICcoPzovKT8kJywgJ2knKSwgZ3JvdXBzIH0sIChuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZVxuICAgICAgICA/IHtcbiAgICAgICAgICAgIG5hbWVkUmVnZXg6IGBeJHtuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCxcbiAgICAgICAgfVxuICAgICAgICA6IHt9KSk7XG59XG5leHBvcnRzLmdldFJvdXRlUmVnZXggPSBnZXRSb3V0ZVJlZ2V4O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCB1cmxfMSA9IHJlcXVpcmUoXCJ1cmxcIik7XG4vKipcbiAqIFV0aWxzXG4gKi9cbmZ1bmN0aW9uIGV4ZWNPbmNlKGZuKSB7XG4gICAgbGV0IHVzZWQgPSBmYWxzZTtcbiAgICBsZXQgcmVzdWx0O1xuICAgIHJldHVybiAoKC4uLmFyZ3MpID0+IHtcbiAgICAgICAgaWYgKCF1c2VkKSB7XG4gICAgICAgICAgICB1c2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIHJlc3VsdCA9IGZuKC4uLmFyZ3MpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSk7XG59XG5leHBvcnRzLmV4ZWNPbmNlID0gZXhlY09uY2U7XG5mdW5jdGlvbiBnZXRMb2NhdGlvbk9yaWdpbigpIHtcbiAgICBjb25zdCB7IHByb3RvY29sLCBob3N0bmFtZSwgcG9ydCB9ID0gd2luZG93LmxvY2F0aW9uO1xuICAgIHJldHVybiBgJHtwcm90b2NvbH0vLyR7aG9zdG5hbWV9JHtwb3J0ID8gJzonICsgcG9ydCA6ICcnfWA7XG59XG5leHBvcnRzLmdldExvY2F0aW9uT3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW47XG5mdW5jdGlvbiBnZXRVUkwoKSB7XG4gICAgY29uc3QgeyBocmVmIH0gPSB3aW5kb3cubG9jYXRpb247XG4gICAgY29uc3Qgb3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKTtcbiAgICByZXR1cm4gaHJlZi5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aCk7XG59XG5leHBvcnRzLmdldFVSTCA9IGdldFVSTDtcbmZ1bmN0aW9uIGdldERpc3BsYXlOYW1lKENvbXBvbmVudCkge1xuICAgIHJldHVybiB0eXBlb2YgQ29tcG9uZW50ID09PSAnc3RyaW5nJ1xuICAgICAgICA/IENvbXBvbmVudFxuICAgICAgICA6IENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bic7XG59XG5leHBvcnRzLmdldERpc3BsYXlOYW1lID0gZ2V0RGlzcGxheU5hbWU7XG5mdW5jdGlvbiBpc1Jlc1NlbnQocmVzKSB7XG4gICAgcmV0dXJuIHJlcy5maW5pc2hlZCB8fCByZXMuaGVhZGVyc1NlbnQ7XG59XG5leHBvcnRzLmlzUmVzU2VudCA9IGlzUmVzU2VudDtcbmFzeW5jIGZ1bmN0aW9uIGxvYWRHZXRJbml0aWFsUHJvcHMoQXBwLCBjdHgpIHtcbiAgICB2YXIgX2E7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgaWYgKChfYSA9IEFwcC5wcm90b3R5cGUpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKEFwcCl9LmdldEluaXRpYWxQcm9wcygpXCIgaXMgZGVmaW5lZCBhcyBhbiBpbnN0YW5jZSBtZXRob2QgLSB2aXNpdCBodHRwczovL2Vyci5zaC96ZWl0L25leHQuanMvZ2V0LWluaXRpYWwtcHJvcHMtYXMtYW4taW5zdGFuY2UtbWV0aG9kIGZvciBtb3JlIGluZm9ybWF0aW9uLmA7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gd2hlbiBjYWxsZWQgZnJvbSBfYXBwIGBjdHhgIGlzIG5lc3RlZCBpbiBgY3R4YFxuICAgIGNvbnN0IHJlcyA9IGN0eC5yZXMgfHwgKGN0eC5jdHggJiYgY3R4LmN0eC5yZXMpO1xuICAgIGlmICghQXBwLmdldEluaXRpYWxQcm9wcykge1xuICAgICAgICBpZiAoY3R4LmN0eCAmJiBjdHguQ29tcG9uZW50KSB7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlIHBhZ2VQcm9wcyBkZWZhdWx0XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHBhZ2VQcm9wczogYXdhaXQgbG9hZEdldEluaXRpYWxQcm9wcyhjdHguQ29tcG9uZW50LCBjdHguY3R4KSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHt9O1xuICAgIH1cbiAgICBjb25zdCBwcm9wcyA9IGF3YWl0IEFwcC5nZXRJbml0aWFsUHJvcHMoY3R4KTtcbiAgICBpZiAocmVzICYmIGlzUmVzU2VudChyZXMpKSB7XG4gICAgICAgIHJldHVybiBwcm9wcztcbiAgICB9XG4gICAgaWYgKCFwcm9wcykge1xuICAgICAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShBcHApfS5nZXRJbml0aWFsUHJvcHMoKVwiIHNob3VsZCByZXNvbHZlIHRvIGFuIG9iamVjdC4gQnV0IGZvdW5kIFwiJHtwcm9wc31cIiBpbnN0ZWFkLmA7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICB9XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKHByb3BzKS5sZW5ndGggPT09IDAgJiYgIWN0eC5jdHgpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihgJHtnZXREaXNwbGF5TmFtZShBcHApfSByZXR1cm5lZCBhbiBlbXB0eSBvYmplY3QgZnJvbSBcXGBnZXRJbml0aWFsUHJvcHNcXGAuIFRoaXMgZGUtb3B0aW1pemVzIGFuZCBwcmV2ZW50cyBhdXRvbWF0aWMgc3RhdGljIG9wdGltaXphdGlvbi4gaHR0cHM6Ly9lcnIuc2gvemVpdC9uZXh0LmpzL2VtcHR5LW9iamVjdC1nZXRJbml0aWFsUHJvcHNgKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcHJvcHM7XG59XG5leHBvcnRzLmxvYWRHZXRJbml0aWFsUHJvcHMgPSBsb2FkR2V0SW5pdGlhbFByb3BzO1xuZXhwb3J0cy51cmxPYmplY3RLZXlzID0gW1xuICAgICdhdXRoJyxcbiAgICAnaGFzaCcsXG4gICAgJ2hvc3QnLFxuICAgICdob3N0bmFtZScsXG4gICAgJ2hyZWYnLFxuICAgICdwYXRoJyxcbiAgICAncGF0aG5hbWUnLFxuICAgICdwb3J0JyxcbiAgICAncHJvdG9jb2wnLFxuICAgICdxdWVyeScsXG4gICAgJ3NlYXJjaCcsXG4gICAgJ3NsYXNoZXMnLFxuXTtcbmZ1bmN0aW9uIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHVybCwgb3B0aW9ucykge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgICBpZiAodXJsICE9PSBudWxsICYmIHR5cGVvZiB1cmwgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyh1cmwpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXhwb3J0cy51cmxPYmplY3RLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGBVbmtub3duIGtleSBwYXNzZWQgdmlhIHVybE9iamVjdCBpbnRvIHVybC5mb3JtYXQ6ICR7a2V5fWApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB1cmxfMS5mb3JtYXQodXJsLCBvcHRpb25zKTtcbn1cbmV4cG9ydHMuZm9ybWF0V2l0aFZhbGlkYXRpb24gPSBmb3JtYXRXaXRoVmFsaWRhdGlvbjtcbmV4cG9ydHMuU1AgPSB0eXBlb2YgcGVyZm9ybWFuY2UgIT09ICd1bmRlZmluZWQnO1xuZXhwb3J0cy5TVCA9IGV4cG9ydHMuU1AgJiZcbiAgICB0eXBlb2YgcGVyZm9ybWFuY2UubWFyayA9PT0gJ2Z1bmN0aW9uJyAmJlxuICAgIHR5cGVvZiBwZXJmb3JtYW5jZS5tZWFzdXJlID09PSAnZnVuY3Rpb24nO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuQ29udGFpbmVyPUNvbnRhaW5lcjtleHBvcnRzLmNyZWF0ZVVybD1jcmVhdGVVcmw7ZXhwb3J0cy5kZWZhdWx0PXZvaWQgMDt2YXIgX3JlYWN0PV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTt2YXIgX3V0aWxzPXJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvdXRpbHNcIik7ZXhwb3J0cy5BcHBJbml0aWFsUHJvcHM9X3V0aWxzLkFwcEluaXRpYWxQcm9wczsvKipcbiAqIGBBcHBgIGNvbXBvbmVudCBpcyB1c2VkIGZvciBpbml0aWFsaXplIG9mIHBhZ2VzLiBJdCBhbGxvd3MgZm9yIG92ZXJ3cml0aW5nIGFuZCBmdWxsIGNvbnRyb2wgb2YgdGhlIGBwYWdlYCBpbml0aWFsaXphdGlvbi5cbiAqIFRoaXMgYWxsb3dzIGZvciBrZWVwaW5nIHN0YXRlIGJldHdlZW4gbmF2aWdhdGlvbiwgY3VzdG9tIGVycm9yIGhhbmRsaW5nLCBpbmplY3RpbmcgYWRkaXRpb25hbCBkYXRhLlxuICovYXN5bmMgZnVuY3Rpb24gYXBwR2V0SW5pdGlhbFByb3BzKF9yZWYpe3ZhcntDb21wb25lbnQsY3R4fT1fcmVmO3ZhciBwYWdlUHJvcHM9YXdhaXQoMCxfdXRpbHMubG9hZEdldEluaXRpYWxQcm9wcykoQ29tcG9uZW50LGN0eCk7cmV0dXJue3BhZ2VQcm9wc307fWNsYXNzIEFwcCBleHRlbmRzIF9yZWFjdC5kZWZhdWx0LkNvbXBvbmVudHsvLyBLZXB0IGhlcmUgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5LlxuLy8gV2hlbiBzb21lb25lIGVuZGVkIEFwcCB0aGV5IGNvdWxkIGNhbGwgYHN1cGVyLmNvbXBvbmVudERpZENhdGNoYC5cbi8vIEBkZXByZWNhdGVkIFRoaXMgbWV0aG9kIGlzIG5vIGxvbmdlciBuZWVkZWQuIEVycm9ycyBhcmUgY2F1Z2h0IGF0IHRoZSB0b3AgbGV2ZWxcbmNvbXBvbmVudERpZENhdGNoKGVycm9yLF9lcnJvckluZm8pe3Rocm93IGVycm9yO31yZW5kZXIoKXt2YXJ7cm91dGVyLENvbXBvbmVudCxwYWdlUHJvcHMsX19OX1NTRyxfX05fU1NQfT10aGlzLnByb3BzO3JldHVybi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KENvbXBvbmVudCxPYmplY3QuYXNzaWduKHt9LHBhZ2VQcm9wcywvLyB3ZSBkb24ndCBhZGQgdGhlIGxlZ2FjeSBVUkwgcHJvcCBpZiBpdCdzIHVzaW5nIG5vbi1sZWdhY3lcbi8vIG1ldGhvZHMgbGlrZSBnZXRTdGF0aWNQcm9wcyBhbmQgZ2V0U2VydmVyU2lkZVByb3BzXG4hKF9fTl9TU0d8fF9fTl9TU1ApP3t1cmw6Y3JlYXRlVXJsKHJvdXRlcil9Ont9KSk7fX1leHBvcnRzLmRlZmF1bHQ9QXBwO0FwcC5vcmlnR2V0SW5pdGlhbFByb3BzPWFwcEdldEluaXRpYWxQcm9wcztBcHAuZ2V0SW5pdGlhbFByb3BzPWFwcEdldEluaXRpYWxQcm9wczt2YXIgd2FybkNvbnRhaW5lcjt2YXIgd2FyblVybDtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7d2FybkNvbnRhaW5lcj0oMCxfdXRpbHMuZXhlY09uY2UpKCgpPT57Y29uc29sZS53YXJuKFwiV2FybmluZzogdGhlIGBDb250YWluZXJgIGluIGBfYXBwYCBoYXMgYmVlbiBkZXByZWNhdGVkIGFuZCBzaG91bGQgYmUgcmVtb3ZlZC4gaHR0cHM6Ly9lcnIuc2gvemVpdC9uZXh0LmpzL2FwcC1jb250YWluZXItZGVwcmVjYXRlZFwiKTt9KTt3YXJuVXJsPSgwLF91dGlscy5leGVjT25jZSkoKCk9Pntjb25zb2xlLmVycm9yKFwiV2FybmluZzogdGhlICd1cmwnIHByb3BlcnR5IGlzIGRlcHJlY2F0ZWQuIGh0dHBzOi8vZXJyLnNoL3plaXQvbmV4dC5qcy91cmwtZGVwcmVjYXRlZFwiKTt9KTt9Ly8gQGRlcHJlY2F0ZWQgbm9vcCBmb3Igbm93IHVudGlsIHJlbW92YWxcbmZ1bmN0aW9uIENvbnRhaW5lcihwKXtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl3YXJuQ29udGFpbmVyKCk7cmV0dXJuIHAuY2hpbGRyZW47fWZ1bmN0aW9uIGNyZWF0ZVVybChyb3V0ZXIpey8vIFRoaXMgaXMgdG8gbWFrZSBzdXJlIHdlIGRvbid0IHJlZmVyZW5jZXMgdGhlIHJvdXRlciBvYmplY3QgYXQgY2FsbCB0aW1lXG52YXJ7cGF0aG5hbWUsYXNQYXRoLHF1ZXJ5fT1yb3V0ZXI7cmV0dXJue2dldCBxdWVyeSgpe2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXdhcm5VcmwoKTtyZXR1cm4gcXVlcnk7fSxnZXQgcGF0aG5hbWUoKXtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl3YXJuVXJsKCk7cmV0dXJuIHBhdGhuYW1lO30sZ2V0IGFzUGF0aCgpe2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXdhcm5VcmwoKTtyZXR1cm4gYXNQYXRoO30sYmFjazooKT0+e2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXdhcm5VcmwoKTtyb3V0ZXIuYmFjaygpO30scHVzaDoodXJsLGFzKT0+e2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXdhcm5VcmwoKTtyZXR1cm4gcm91dGVyLnB1c2godXJsLGFzKTt9LHB1c2hUbzooaHJlZixhcyk9PntpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl3YXJuVXJsKCk7dmFyIHB1c2hSb3V0ZT1hcz9ocmVmOicnO3ZhciBwdXNoVXJsPWFzfHxocmVmO3JldHVybiByb3V0ZXIucHVzaChwdXNoUm91dGUscHVzaFVybCk7fSxyZXBsYWNlOih1cmwsYXMpPT57aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpd2FyblVybCgpO3JldHVybiByb3V0ZXIucmVwbGFjZSh1cmwsYXMpO30scmVwbGFjZVRvOihocmVmLGFzKT0+e2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXdhcm5VcmwoKTt2YXIgcmVwbGFjZVJvdXRlPWFzP2hyZWY6Jyc7dmFyIHJlcGxhY2VVcmw9YXN8fGhyZWY7cmV0dXJuIHJvdXRlci5yZXBsYWNlKHJlcGxhY2VSb3V0ZSxyZXBsYWNlVXJsKTt9fTt9IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2xpbmsnKVxuIiwiaW1wb3J0IHdpdGhBdXRoIGZyb20gJy4uL2xpYi93aXRoQXV0aCc7XHJcbmltcG9ydCB3aXRoTGF5b3V0IGZyb20gJy4uL2xpYi93aXRoTGF5b3V0JztcclxuaW1wb3J0IHsgbG9hZFN0cmlwZSB9IGZyb20gJ0BzdHJpcGUvc3RyaXBlLWpzJztcclxuaW1wb3J0IHsgRWxlbWVudHMgfSBmcm9tICdAc3RyaXBlL3JlYWN0LXN0cmlwZS1qcyc7XHJcblxyXG5pbXBvcnQgQ2hlY2tvdXRGb3JtIGZyb20gJy4uL2NvbXBvbmVudHMvQ2hlY2tvdXRGb3JtJztcclxuXHJcbmNvbnN0IHByb21pc2UgPSBsb2FkU3RyaXBlKCdwa190ZXN0X3czM2IyVEFqTXRQb0I2NnJKYjBqeDRoTDAwQ3AzVGJ6UWsnKTtcclxuXHJcbmNvbnN0IENoZWNrb3V0ID0gKCkgPT4ge1xyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2PlxyXG5cdFx0XHQ8aDI+Q2hlY2tvdXQ8L2gyPlxyXG5cdFx0XHQ8RWxlbWVudHMgc3RyaXBlPXtwcm9taXNlfT5cclxuXHRcdFx0XHQ8Q2hlY2tvdXRGb3JtIC8+XHJcblx0XHRcdDwvRWxlbWVudHM+XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aEF1dGgod2l0aExheW91dChDaGVja291dCksIHsgbG9naW5SZXF1aXJlZDogdHJ1ZSB9KTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFwb2xsby9yZWFjdC1ob29rc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYXBvbGxvL3JlYWN0LXNzclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAc3RyaXBlL3JlYWN0LXN0cmlwZS1qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAc3RyaXBlL3N0cmlwZS1qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhcG9sbG8tY2FjaGUtaW5tZW1vcnlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXBvbGxvLWNsaWVudFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhcG9sbG8tbGluay1odHRwXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImdyYXBocWwtdGFnXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImlzb21vcnBoaWMtdW5mZXRjaFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LWNvb2tpZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5wcm9ncmVzc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXMtZXhhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RzdHJhcFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ1cmxcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==