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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
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
    localStorage.setItem('cart', JSON.stringify([])); //NProgress.stop();

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

/***/ 7:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly8vLi9hcG9sbG9DbGllbnQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9DYXJ0SXRlbXMuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9DaGVja291dEZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9IZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL0FwcENvbnRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL2Fwb2xsby5qcyIsIndlYnBhY2s6Ly8vLi9saWIvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL3dpdGhBdXRoLmpzIiwid2VicGFjazovLy8uL2xpYi93aXRoTGF5b3V0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvbGluay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvd2l0aC1yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvbWl0dC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9pcy1keW5hbWljLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1tYXRjaGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1yZWdleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbGluay5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9jaGVja291dC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYXBvbGxvL3JlYWN0LWhvb2tzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFwb2xsby9yZWFjdC1zc3JcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAc3RyaXBlL3JlYWN0LXN0cmlwZS1qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBzdHJpcGUvc3RyaXBlLWpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXBvbGxvLWNhY2hlLWlubWVtb3J5XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXBvbGxvLWNsaWVudFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFwb2xsby1saW5rLWh0dHBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJncmFwaHFsLXRhZ1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImlzb21vcnBoaWMtdW5mZXRjaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQtY29va2llc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibnByb2dyZXNzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJvcC10eXBlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXMtZXhhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RzdHJhcFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInVybFwiIl0sIm5hbWVzIjpbImNyZWF0ZUFwb2xsb0NsaWVudCIsImluaXRpYWxTdGF0ZSIsImN0eCIsImp3dCIsImNvb2tpZXMiLCJBcG9sbG9DbGllbnQiLCJzc3JNb2RlIiwiQm9vbGVhbiIsImxpbmsiLCJIdHRwTGluayIsInVyaSIsInByb2Nlc3MiLCJjcmVkZW50aWFscyIsImZldGNoIiwiaGVhZGVycyIsImF1dGhvcml6YXRpb24iLCJjYWNoZSIsIkluTWVtb3J5Q2FjaGUiLCJyZXN0b3JlIiwiQ2FydEl0ZW1zIiwiZ2xvYmFsU3RvcmUiLCJ1cGRhdGVTdG9yZSIsInVzZUNvbnRleHQiLCJBcHBDb250ZXh0IiwidXNlciIsImNhcnQiLCJyZW1vdmVJdGVtIiwiaWQiLCJyZW1vdmVQcm9kdWN0RnJvbUNhcnQiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsImxlbmd0aCIsIm1hcCIsInByb2R1Y3QiLCJpIiwiZGlzcGxheUltYWdlIiwibmFtZSIsInByaWNlIiwiZGVzY3JpcHRpb24iLCJQTEFDRV9PUkRFUiIsImdxbCIsIkNoZWNrb3V0Rm9ybSIsInNoaXBwaW5nQWRkcmVzcyIsInNldFNoaXBwaW5nQWRkcmVzcyIsInVzZVN0YXRlIiwiY3JlYXRlT3JkZXIiLCJ1c2VNdXRhdGlvbiIsInN1Y2NlZWRlZCIsInNldFN1Y2NlZWRlZCIsImVycm9yIiwic2V0RXJyb3IiLCJwcm9jZXNzaW5nIiwic2V0UHJvY2Vzc2luZyIsImRpc2FibGVkIiwic2V0RGlzYWJsZWQiLCJjbGllbnRTZWNyZXQiLCJzZXRDbGllbnRTZWNyZXQiLCJzdHJpcGUiLCJ1c2VTdHJpcGUiLCJlbGVtZW50cyIsInVzZUVsZW1lbnRzIiwidG90YWxQcmljZSIsInJlZHVjZSIsImEiLCJjIiwidXNlRWZmZWN0Iiwid2luZG93IiwibWV0aG9kIiwiYm9keSIsImFtb3VudCIsInRoZW4iLCJyZXMiLCJqc29uIiwiZGF0YSIsImNhcmRTdHlsZSIsInN0eWxlIiwiYmFzZSIsImNvbG9yIiwiZm9udEZhbWlseSIsImZvbnRTbW9vdGhpbmciLCJmb250U2l6ZSIsImJhY2tHcm91bmRDb2xvciIsImhlaWdodCIsImludmFsaWQiLCJpY29uQ29sb3IiLCJoYW5kbGVDaGFuZ2UiLCJldmVudCIsImVtcHR5IiwibWVzc2FnZSIsInBsYWNlT3JkZXIiLCJOUHJvZ3Jlc3MiLCJzdGFydCIsInBheWxvYWQiLCJjb25maXJtQ2FyZFBheW1lbnQiLCJwYXltZW50X21ldGhvZCIsImNhcmQiLCJnZXRFbGVtZW50IiwiQ2FyZEVsZW1lbnQiLCJiaWxsaW5nX2RldGFpbHMiLCJhZGRyZXNzIiwiY2l0eSIsImNvdW50cnkiLCJsaW5lMSIsImxpbmUyIiwicG9zdGFsX2NvZGUiLCJzdGF0ZSIsImVtYWlsIiwidXNlcm5hbWUiLCJwaG9uZSIsInByb2R1Y3RJZHMiLCJwdXNoIiwidmFyaWFibGVzIiwidHlwZSIsIl9pZCIsInByb2R1Y3RzIiwiUm91dGVyIiwiZSIsInRhcmdldCIsInZhbHVlIiwiSGVhZGVyIiwicm91dGVyIiwidXNlUm91dGVyIiwiaXNPcGVuIiwic2V0SXNPcGVuIiwiZHJvcGRvd25PcGVuIiwic2V0RHJvcGRvd25PcGVuIiwidG9nZ2xlRHJvcGRvd24iLCJwcmV2U3RhdGUiLCJ0b2dnbGUiLCJkb0xvZ291dCIsImRvY3VtZW50IiwiY29va2llIiwicmVsb2FkIiwiZ29Ub09yZGVycyIsImNhcnRDb3VudCIsIlJlYWN0IiwiY3JlYXRlQ29udGV4dCIsImdsb2JhbEFwb2xsb0NsaWVudCIsImluaXRPbkNvbnRleHQiLCJpbkFwcENvbnRleHQiLCJjb25zb2xlIiwid2FybiIsImFwb2xsb0NsaWVudCIsImluaXRBcG9sbG9DbGllbnQiLCJhcG9sbG9TdGF0ZSIsInRvSlNPTiIsIndpdGhBcG9sbG8iLCJzc3IiLCJQYWdlQ29tcG9uZW50IiwiV2l0aEFwb2xsbyIsInBhZ2VQcm9wcyIsImNsaWVudCIsInVuZGVmaW5lZCIsImRpc3BsYXlOYW1lIiwiZ2V0SW5pdGlhbFByb3BzIiwiQXBwIiwiQXBwVHJlZSIsImZpbmlzaGVkIiwiZ2V0RGF0YUZyb21UcmVlIiwicHJvcHMiLCJIZWFkIiwicmV3aW5kIiwiZXh0cmFjdCIsImdldFVuaXF1ZVByb2R1Y3RzIiwidW5pcXVlSWRzIiwiU2V0IiwiZmlsdGVyIiwiaGFzIiwiYWRkIiwiZ2xvYmFsVXNlciIsIndpdGhBdXRoIiwiQmFzZUNvbXBvbmVudCIsImxvZ2luUmVxdWlyZWQiLCJsb2dvdXRSZXF1aXJlZCIsIkNvbXBvbmVudCIsImNvbXBvbmVudERpZE1vdW50IiwiaXNGcm9tU2VydmVyIiwicmVxIiwiQXV0aG9yaXphdGlvbiIsInRvU3RyaW5nIiwiT2JqZWN0IiwiYXNzaWduIiwicmVuZGVyIiwiUHJvcFR5cGVzIiwic2hhcGUiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwiYm9vbCIsIm9uUm91dGVDaGFuZ2VTdGFydCIsIm9uUm91dGVDaGFuZ2VDb21wbGV0ZSIsImRvbmUiLCJvblJvdXRlQ2hhbmdlRXJyb3IiLCJ3aXRoTGF5b3V0IiwiY29uc3RydWN0b3IiLCJrZXkiLCJ2YWwiLCJzZXRTdGF0ZSIsImNhcnRJbkxvY2FsU3RvcmFnZSIsInBhcnNlIiwiZ2V0SXRlbSIsInVwZGF0ZVZhbHVlIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCIsImV4cG9ydHMiLCJfX2VzTW9kdWxlIiwiZGVmYXVsdCIsIl9yZWFjdCIsIl91cmwiLCJfdXRpbHMiLCJfcm91dGVyIiwiX3JvdXRlcjIiLCJpc0xvY2FsIiwiaHJlZiIsInVybCIsIm9yaWdpbiIsImdldExvY2F0aW9uT3JpZ2luIiwiaG9zdCIsInByb3RvY29sIiwibWVtb2l6ZWRGb3JtYXRVcmwiLCJmb3JtYXRGdW5jIiwibGFzdEhyZWYiLCJsYXN0QXMiLCJsYXN0UmVzdWx0IiwiYXMiLCJyZXN1bHQiLCJmb3JtYXRVcmwiLCJmb3JtYXRXaXRoVmFsaWRhdGlvbiIsIm9ic2VydmVyIiwibGlzdGVuZXJzIiwiTWFwIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJwcmVmZXRjaGVkIiwiZ2V0T2JzZXJ2ZXIiLCJlbnRyaWVzIiwiZm9yRWFjaCIsImVudHJ5IiwiY2IiLCJnZXQiLCJpc0ludGVyc2VjdGluZyIsImludGVyc2VjdGlvblJhdGlvIiwidW5vYnNlcnZlIiwiZGVsZXRlIiwicm9vdE1hcmdpbiIsImxpc3RlblRvSW50ZXJzZWN0aW9ucyIsImVsIiwib2JzZXJ2ZSIsInNldCIsImVyciIsIkxpbmsiLCJwIiwiY2xlYW5VcExpc3RlbmVycyIsImZvcm1hdFVybHMiLCJhc0hyZWYiLCJhZGRCYXNlUGF0aCIsImxpbmtDbGlja2VkIiwibm9kZU5hbWUiLCJjdXJyZW50VGFyZ2V0IiwibWV0YUtleSIsImN0cmxLZXkiLCJzaGlmdEtleSIsIm5hdGl2ZUV2ZW50Iiwid2hpY2giLCJwYXRobmFtZSIsImxvY2F0aW9uIiwicmVzb2x2ZSIsInByZXZlbnREZWZhdWx0Iiwic2Nyb2xsIiwiaW5kZXhPZiIsInJlcGxhY2UiLCJzaGFsbG93Iiwic3VjY2VzcyIsInNjcm9sbFRvIiwiZm9jdXMiLCJwcmVmZXRjaCIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwiZ2V0UGF0aHMiLCJwYXJzZWRIcmVmIiwicGFyc2VkQXMiLCJyZXNvbHZlZEhyZWYiLCJoYW5kbGVSZWYiLCJyZWYiLCJ0YWdOYW1lIiwiaXNQcmVmZXRjaGVkIiwiam9pbiIsIm9wdGlvbnMiLCJwYXRocyIsImNhdGNoIiwiY2hpbGRyZW4iLCJjcmVhdGVFbGVtZW50IiwiY2hpbGQiLCJDaGlsZHJlbiIsIm9ubHkiLCJjdXJyZW50Iiwib25Nb3VzZUVudGVyIiwicHJpb3JpdHkiLCJvbkNsaWNrIiwiZGVmYXVsdFByZXZlbnRlZCIsInBhc3NIcmVmIiwiY2xvbmVFbGVtZW50IiwiZXhlY09uY2UiLCJleGFjdCIsInByb3BUeXBlcyIsIm9uZU9mVHlwZSIsIm9iamVjdCIsImVsZW1lbnQiLCJwcm9wTmFtZSIsIl9kZWZhdWx0IiwibWFrZVB1YmxpY1JvdXRlckluc3RhbmNlIiwiY3JlYXRlUm91dGVyIiwid2l0aFJvdXRlciIsIk5leHRSb3V0ZXIiLCJfcm91dGVyQ29udGV4dCIsIl93aXRoUm91dGVyIiwic2luZ2xldG9uUm91dGVyIiwicmVhZHlDYWxsYmFja3MiLCJyZWFkeSIsInVybFByb3BlcnR5RmllbGRzIiwicm91dGVyRXZlbnRzIiwiY29yZU1ldGhvZEZpZWxkcyIsImRlZmluZVByb3BlcnR5IiwiZXZlbnRzIiwiZmllbGQiLCJnZXRSb3V0ZXIiLCJhcmd1bWVudHMiLCJvbiIsImV2ZW50RmllbGQiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInN1YnN0cmluZyIsIl9zaW5nbGV0b25Sb3V0ZXIiLCJzdGFjayIsIkVycm9yIiwiUm91dGVyQ29udGV4dCIsIl9sZW4iLCJhcmdzIiwiQXJyYXkiLCJfa2V5IiwiaW5zdGFuY2UiLCJwcm9wZXJ0eSIsIkNvbXBvc2VkQ29tcG9uZW50IiwiV2l0aFJvdXRlcldyYXBwZXIiLCJvcmlnR2V0SW5pdGlhbFByb3BzIiwibWl0dCIsImFsbCIsImNyZWF0ZSIsImhhbmRsZXIiLCJvZmYiLCJzcGxpY2UiLCJlbWl0IiwiZXZ0cyIsInNsaWNlIiwiX19pbXBvcnREZWZhdWx0IiwibW9kIiwidXJsXzEiLCJtaXR0XzEiLCJ1dGlsc18xIiwiaXNfZHluYW1pY18xIiwicm91dGVfbWF0Y2hlcl8xIiwicm91dGVfcmVnZXhfMSIsImJhc2VQYXRoIiwicGF0aCIsImRlbEJhc2VQYXRoIiwic3Vic3RyIiwidG9Sb3V0ZSIsInByZXBhcmVSb3V0ZSIsImZldGNoTmV4dERhdGEiLCJxdWVyeSIsImlzU2VydmVyUmVuZGVyIiwiYXR0ZW1wdHMiLCJnZXRSZXNwb25zZSIsIl9fTkVYVF9EQVRBX18iLCJidWlsZElkIiwib2siLCJzdGF0dXMiLCJjb2RlIiwiaW5pdGlhbFByb3BzIiwicGFnZUxvYWRlciIsIndyYXBBcHAiLCJzdWJzY3JpcHRpb24iLCJpc0ZhbGxiYWNrIiwic2RjIiwib25Qb3BTdGF0ZSIsImNoYW5nZVN0YXRlIiwiZ2V0VVJMIiwiaXNTc3IiLCJhc1BhdGgiLCJfYnBzIiwiX2dldFN0YXRpY0RhdGEiLCJQcm9taXNlIiwiX2dldFNlcnZlckRhdGEiLCJyb3V0ZSIsImNvbXBvbmVudHMiLCJfX05fU1NHIiwiX19OX1NTUCIsImlzRHluYW1pY1JvdXRlIiwiYXV0b0V4cG9ydCIsInN1YiIsImNsYyIsIl93cmFwQXBwIiwiX3Jld3JpdGVVcmxGb3JOZXh0RXhwb3J0IiwidXBkYXRlIiwibmV3RGF0YSIsIm5vdGlmeSIsImJhY2siLCJoaXN0b3J5IiwiY2hhbmdlIiwiX2FzIiwicmVqZWN0IiwiX2giLCJTVCIsInBlcmZvcm1hbmNlIiwibWFyayIsImFib3J0Q29tcG9uZW50TG9hZCIsIm9ubHlBSGFzaENoYW5nZSIsInNjcm9sbFRvSGFzaCIsInVybElzTmV3IiwiYXNQYXRobmFtZSIsInJvdXRlUmVnZXgiLCJnZXRSb3V0ZVJlZ2V4Iiwicm91dGVNYXRjaCIsImdldFJvdXRlTWF0Y2hlciIsIm1pc3NpbmdQYXJhbXMiLCJrZXlzIiwiZ3JvdXBzIiwicGFyYW0iLCJnZXRSb3V0ZUluZm8iLCJyb3V0ZUluZm8iLCJjYW5jZWxsZWQiLCJhcHBDb21wIiwibmV4dCIsImlzUHJlcmVuZGVyZWQiLCJjYWNoZWRSb3V0ZUluZm8iLCJoYW5kbGVFcnJvciIsImxvYWRFcnJvckZhaWwiLCJmZXRjaENvbXBvbmVudCIsInBhZ2UiLCJnaXBFcnIiLCJpc1ZhbGlkRWxlbWVudFR5cGUiLCJfZ2V0RGF0YSIsImJlZm9yZVBvcFN0YXRlIiwib2xkVXJsTm9IYXNoIiwib2xkSGFzaCIsInNwbGl0IiwibmV3VXJsTm9IYXNoIiwibmV3SGFzaCIsImhhc2giLCJpZEVsIiwiZ2V0RWxlbWVudEJ5SWQiLCJzY3JvbGxJbnRvVmlldyIsIm5hbWVFbCIsImdldEVsZW1lbnRzQnlOYW1lIiwicHJlZmV0Y2hEYXRhIiwiY2FuY2VsIiwiY29tcG9uZW50UmVzdWx0IiwibG9hZFBhZ2UiLCJmbiIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJURVNUX1JPVVRFIiwidGVzdCIsInJlIiwiZXhlYyIsImRlY29kZSIsImRlY29kZVVSSUNvbXBvbmVudCIsIl8iLCJwYXJhbXMiLCJzbHVnTmFtZSIsImciLCJtIiwicG9zIiwicmVwZWF0IiwiZXNjYXBlUmVnZXgiLCJzdHIiLCJub3JtYWxpemVkUm91dGUiLCJlc2NhcGVkUm91dGUiLCJncm91cEluZGV4IiwicGFyYW1ldGVyaXplZFJvdXRlIiwiJDEiLCJpc0NhdGNoQWxsIiwibmFtZWRQYXJhbWV0ZXJpemVkUm91dGUiLCJSZWdFeHAiLCJuYW1lZFJlZ2V4IiwidXNlZCIsImhvc3RuYW1lIiwicG9ydCIsImdldERpc3BsYXlOYW1lIiwiaXNSZXNTZW50IiwiaGVhZGVyc1NlbnQiLCJfYSIsInByb3RvdHlwZSIsInVybE9iamVjdEtleXMiLCJmb3JtYXQiLCJTUCIsIm1lYXN1cmUiLCJDb250YWluZXIiLCJjcmVhdGVVcmwiLCJBcHBJbml0aWFsUHJvcHMiLCJhcHBHZXRJbml0aWFsUHJvcHMiLCJfcmVmIiwiY29tcG9uZW50RGlkQ2F0Y2giLCJfZXJyb3JJbmZvIiwid2FybkNvbnRhaW5lciIsIndhcm5VcmwiLCJwdXNoVG8iLCJwdXNoUm91dGUiLCJwdXNoVXJsIiwicmVwbGFjZVRvIiwicmVwbGFjZVJvdXRlIiwicmVwbGFjZVVybCIsInByb21pc2UiLCJsb2FkU3RyaXBlIiwiQ2hlY2tvdXQiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSxjQUFjO1FBQ2QsSUFBSTtRQUNKOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNyR0Esd0U7Ozs7Ozs7Ozs7O0FDQUEsK0Q7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxrQkFBVCxDQUE0QkMsWUFBNUIsRUFBMENDLEdBQUcsR0FBRyxF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QUFBVSxVQUFNLEVBQUVGLE9BQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxNQUFDLGdFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERCxDQUZELENBREQ7QUFRQSxDQVREOztBQVdlblYsNEhBQVEsQ0FBQ3NCLCtEQUFVLENBQUMrVCxRQUFELENBQVgsRUFBdUI7QUFBRW5WLGVBQWEsRUFBRTtBQUFqQixDQUF2QixDQUF2QixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCQSxnRDs7Ozs7Ozs7Ozs7QUNBQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSxvRDs7Ozs7Ozs7Ozs7QUNBQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSxrRDs7Ozs7Ozs7Ozs7QUNBQSwwQzs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSwrQzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxxQzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxnQyIsImZpbGUiOiJzdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcY2hlY2tvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBjaHVua3NcbiBcdC8vIFwiMFwiIG1lYW5zIFwiYWxyZWFkeSBsb2FkZWRcIlxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJzdGF0aWNcXFxcZGV2ZWxvcG1lbnRcXFxccGFnZXNcXFxcY2hlY2tvdXQuanNcIjogMFxuIFx0fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyB1bmNhdWdodCBlcnJvciBoYW5kbGVyIGZvciB3ZWJwYWNrIHJ1bnRpbWVcbiBcdF9fd2VicGFja19yZXF1aXJlX18ub2UgPSBmdW5jdGlvbihlcnIpIHtcbiBcdFx0cHJvY2Vzcy5uZXh0VGljayhmdW5jdGlvbigpIHtcbiBcdFx0XHR0aHJvdyBlcnI7IC8vIGNhdGNoIHRoaXMgZXJyb3IgYnkgdXNpbmcgaW1wb3J0KCkuY2F0Y2goKVxuIFx0XHR9KTtcbiBcdH07XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA3KTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qc1wiKTsiLCJpbXBvcnQgeyBBcG9sbG9DbGllbnQgfSBmcm9tICdhcG9sbG8tY2xpZW50JztcclxuaW1wb3J0IHsgSW5NZW1vcnlDYWNoZSB9IGZyb20gJ2Fwb2xsby1jYWNoZS1pbm1lbW9yeSc7XHJcbmltcG9ydCB7IEh0dHBMaW5rIH0gZnJvbSAnYXBvbGxvLWxpbmstaHR0cCc7XHJcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xyXG5pbXBvcnQgY29va2llcyBmcm9tICduZXh0LWNvb2tpZXMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlQXBvbGxvQ2xpZW50KGluaXRpYWxTdGF0ZSwgY3R4ID0ge30pIHtcclxuXHQvLyBUaGUgYGN0eGAgKE5leHRQYWdlQ29udGV4dCkgd2lsbCBvbmx5IGJlIHByZXNlbnQgb24gdGhlIHNlcnZlci5cclxuXHQvLyB1c2UgaXQgdG8gZXh0cmFjdCBhdXRoIGhlYWRlcnMgKGN0eC5yZXEpIG9yIHNpbWlsYXIuXHJcblxyXG5cdGNvbnN0IHsgand0IH0gPSBjb29raWVzKGN0eCk7XHJcblxyXG5cdHJldHVybiBuZXcgQXBvbGxvQ2xpZW50KHtcclxuXHRcdHNzck1vZGU6IEJvb2xlYW4oY3R4KSxcclxuXHRcdGxpbms6IG5ldyBIdHRwTGluayh7XHJcblx0XHRcdHVyaTogYCR7cHJvY2Vzcy5lbnYuYmFja2VuZFVybH0vZ3JhcGhxbGAsIC8vIFNlcnZlciBVUkwgKG11c3QgYmUgYWJzb2x1dGUpXHJcblx0XHRcdGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLCAvLyBBZGRpdGlvbmFsIGZldGNoKCkgb3B0aW9ucyBsaWtlIGBjcmVkZW50aWFsc2Agb3IgYGhlYWRlcnNgXHJcblx0XHRcdGZldGNoLFxyXG5cdFx0XHRoZWFkZXJzOiB7XHJcblx0XHRcdFx0YXV0aG9yaXphdGlvbjogand0ID8gYEJlYXJlciAke2p3dH1gIDogJycsXHJcblx0XHRcdH0sXHJcblx0XHR9KSxcclxuXHRcdGNhY2hlOiBuZXcgSW5NZW1vcnlDYWNoZSgpLnJlc3RvcmUoaW5pdGlhbFN0YXRlKSxcclxuXHR9KTtcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQsIHVzZUNvbnRleHQsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcblxyXG5pbXBvcnQgeyBDYXJkRWxlbWVudCwgdXNlU3RyaXBlLCB1c2VFbGVtZW50cyB9IGZyb20gJ0BzdHJpcGUvcmVhY3Qtc3RyaXBlLWpzJztcclxuaW1wb3J0IHsgUm93LCBDb2wsIEJ1dHRvbiwgTGFiZWwsIElucHV0IH0gZnJvbSAncmVhY3RzdHJhcCc7XHJcblxyXG5pbXBvcnQgeyBBcHBDb250ZXh0IH0gZnJvbSAnLi4vbGliL0FwcENvbnRleHQnO1xyXG5pbXBvcnQgeyByZW1vdmVQcm9kdWN0RnJvbUNhcnQgfSBmcm9tICcuLi9saWIvdXRpbHMnO1xyXG5cclxuY29uc3QgQ2FydEl0ZW1zID0gKCkgPT4ge1xyXG5cdGNvbnN0IHsgZ2xvYmFsU3RvcmUsIHVwZGF0ZVN0b3JlIH0gPSB1c2VDb250ZXh0KEFwcENvbnRleHQpO1xyXG5cclxuXHRjb25zdCB7IHVzZXIsIGNhcnQgfSA9IGdsb2JhbFN0b3JlO1xyXG5cclxuXHRjb25zdCByZW1vdmVJdGVtID0gKGNhcnQsIGlkKSA9PiB7XHJcblx0XHRjYXJ0ID0gcmVtb3ZlUHJvZHVjdEZyb21DYXJ0KGNhcnQsIGlkKTtcclxuXHRcdHVwZGF0ZVN0b3JlKCdjYXJ0JywgY2FydCk7XHJcblx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY2FydCcsIEpTT04uc3RyaW5naWZ5KGNhcnQpKTtcclxuXHR9O1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PEZyYWdtZW50PlxyXG5cdFx0XHR7Y2FydC5sZW5ndGggPiAwICYmIChcclxuXHRcdFx0XHQ8Um93PlxyXG5cdFx0XHRcdFx0PENvbCBtZD17Nn0+XHJcblx0XHRcdFx0XHRcdHtjYXJ0Lm1hcCgocHJvZHVjdCwgaSkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdHJldHVybiAoXHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGtleT17aX0gY2xhc3NOYW1lPSd0cmFuc3BhcmVudC1jb250YWluZXIgbWItMic+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxSb3c+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PENvbCBtZD17M30+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncHJvZHVjdC1pbWFnZSc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbWdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0b3BcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR3aWR0aD0nMTAwJSdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRoZWlnaHQ9JzEwMCUnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3JjPXtgJHtwcm9kdWN0LmRpc3BsYXlJbWFnZX1gfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFsdD0nQ2FyZCBpbWFnZSBjYXAnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L0NvbD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8Q29sPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGg0Pntwcm9kdWN0Lm5hbWV9PC9oND5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxwPlJzLiB7cHJvZHVjdC5wcmljZX08L3A+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uIG9uQ2xpY2s9eygpID0+IHJlbW92ZUl0ZW0oY2FydCwgcHJvZHVjdC5pZCl9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRSZW1vdmUgRnJvbSBDYXJ0XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L0J1dHRvbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L0NvbD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9Sb3c+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxSb3c+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PENvbD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT0nbXQtNCc+e3Byb2R1Y3QuZGVzY3JpcHRpb259PC9wPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvQ29sPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L1Jvdz5cclxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdH0pfVxyXG5cdFx0XHRcdFx0PC9Db2w+XHJcblx0XHRcdFx0XHQ8Q29sIG1kPXs2fT5cclxuXHRcdFx0XHRcdFx0PEJ1dHRvbiBjbGFzc05hbWU9J2NoZWNrb3V0LWxpbmsnPlxyXG5cdFx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9Jy9jaGVja291dCc+UHJvY2VlZCBUbyBDaGVja291dDwvTGluaz5cclxuXHRcdFx0XHRcdFx0PC9CdXR0b24+XHJcblx0XHRcdFx0XHRcdDxpbWcgc3JjPSdodHRwczovL3d3dy5pbnRlcm5hdGlvbmFsc2NpZW5jZWVkaXRpbmcuY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE3LzA2L2xvZ28tc3RyaXBlLnBuZycgLz5cclxuXHRcdFx0XHRcdDwvQ29sPlxyXG5cdFx0XHRcdDwvUm93PlxyXG5cdFx0XHQpfVxyXG5cclxuXHRcdFx0e2NhcnQubGVuZ3RoIDw9IDAgJiYgPHA+WW91IGhhdmUgbm90aGluZyBpbiB0aGUgY2FydC48L3A+fVxyXG5cdFx0PC9GcmFnbWVudD5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FydEl0ZW1zO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IENhcmRFbGVtZW50LCB1c2VTdHJpcGUsIHVzZUVsZW1lbnRzIH0gZnJvbSAnQHN0cmlwZS9yZWFjdC1zdHJpcGUtanMnO1xyXG5pbXBvcnQgeyBSb3csIENvbCwgQnV0dG9uLCBMYWJlbCwgSW5wdXQgfSBmcm9tICdyZWFjdHN0cmFwJztcclxuaW1wb3J0IE5Qcm9ncmVzcyBmcm9tICducHJvZ3Jlc3MnO1xyXG5cclxuaW1wb3J0IHdpdGhBdXRoIGZyb20gJy4uL2xpYi93aXRoQXV0aCc7XHJcbmltcG9ydCB3aXRoTGF5b3V0IGZyb20gJy4uL2xpYi93aXRoTGF5b3V0JztcclxuXHJcbmltcG9ydCB7IEFwcENvbnRleHQgfSBmcm9tICcuLi9saWIvQXBwQ29udGV4dCc7XHJcbmltcG9ydCBDYXJ0SXRlbXMgZnJvbSAnLi4vY29tcG9uZW50cy9DYXJ0SXRlbXMnO1xyXG5cclxuaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XHJcbmltcG9ydCB7IHVzZU11dGF0aW9uIH0gZnJvbSAnQGFwb2xsby9yZWFjdC1ob29rcyc7XHJcblxyXG5jb25zdCBQTEFDRV9PUkRFUiA9IGdxbGBcclxuXHRtdXRhdGlvbiBjcmVhdGVPcmRlcigkdHlwZTogY3JlYXRlT3JkZXJJbnB1dCEpIHtcclxuXHRcdGNyZWF0ZU9yZGVyKGlucHV0OiAkdHlwZSkge1xyXG5cdFx0XHRvcmRlciB7XHJcblx0XHRcdFx0aWRcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuYDtcclxuXHJcbmNvbnN0IENoZWNrb3V0Rm9ybSA9ICgpID0+IHtcclxuXHRjb25zdCB7IGdsb2JhbFN0b3JlLCB1cGRhdGVTdG9yZSB9ID0gdXNlQ29udGV4dChBcHBDb250ZXh0KTtcclxuXHRjb25zdCBbc2hpcHBpbmdBZGRyZXNzLCBzZXRTaGlwcGluZ0FkZHJlc3NdID0gdXNlU3RhdGUoKTtcclxuXHRjb25zdCBbY3JlYXRlT3JkZXJdID0gdXNlTXV0YXRpb24oUExBQ0VfT1JERVIpO1xyXG5cclxuXHRjb25zdCB7IHVzZXIsIGNhcnQgfSA9IGdsb2JhbFN0b3JlO1xyXG5cclxuXHRjb25zdCBbc3VjY2VlZGVkLCBzZXRTdWNjZWVkZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cdGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUobnVsbCk7XHJcblx0Y29uc3QgW3Byb2Nlc3NpbmcsIHNldFByb2Nlc3NpbmddID0gdXNlU3RhdGUoJycpO1xyXG5cdGNvbnN0IFtkaXNhYmxlZCwgc2V0RGlzYWJsZWRdID0gdXNlU3RhdGUodHJ1ZSk7XHJcblx0Y29uc3QgW2NsaWVudFNlY3JldCwgc2V0Q2xpZW50U2VjcmV0XSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcblx0Y29uc3Qgc3RyaXBlID0gdXNlU3RyaXBlKCk7XHJcblx0Y29uc3QgZWxlbWVudHMgPSB1c2VFbGVtZW50cygpO1xyXG5cclxuXHRjb25zdCB0b3RhbFByaWNlID0gY2FydC5yZWR1Y2UoKGEsIGMpID0+IHtcclxuXHRcdHJldHVybiBhICsgYy5wcmljZTtcclxuXHR9LCAwKTtcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdC8vIENyZWF0ZSBQYXltZW50SW50ZW50IGFzIHNvb24gYXMgdGhlIHBhZ2UgbG9hZHNcclxuXHRcdGlmICh0b3RhbFByaWNlKSB7XHJcblx0XHRcdHdpbmRvd1xyXG5cdFx0XHRcdC5mZXRjaCgnL2FwaS9zdHJpcGUnLCB7XHJcblx0XHRcdFx0XHRtZXRob2Q6ICdQT1NUJyxcclxuXHRcdFx0XHRcdGhlYWRlcnM6IHtcclxuXHRcdFx0XHRcdFx0J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRib2R5OiBKU09OLnN0cmluZ2lmeSh7IGFtb3VudDogdG90YWxQcmljZSB9KSxcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdC50aGVuKChyZXMpID0+IHtcclxuXHRcdFx0XHRcdHJldHVybiByZXMuanNvbigpO1xyXG5cdFx0XHRcdH0pXHJcblx0XHRcdFx0LnRoZW4oKGRhdGEpID0+IHtcclxuXHRcdFx0XHRcdHNldENsaWVudFNlY3JldChkYXRhLmNsaWVudFNlY3JldCk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHR9XHJcblx0fSwgW3RvdGFsUHJpY2VdKTtcclxuXHJcblx0Y29uc3QgY2FyZFN0eWxlID0ge1xyXG5cdFx0c3R5bGU6IHtcclxuXHRcdFx0YmFzZToge1xyXG5cdFx0XHRcdGNvbG9yOiAnIzMyMzI1ZCcsXHJcblx0XHRcdFx0Zm9udEZhbWlseTogJ0FyaWFsLCBzYW5zLXNlcmlmJyxcclxuXHRcdFx0XHRmb250U21vb3RoaW5nOiAnYW50aWFsaWFzZWQnLFxyXG5cdFx0XHRcdGZvbnRTaXplOiAnMTZweCcsXHJcblx0XHRcdFx0Jzo6cGxhY2Vob2xkZXInOiB7XHJcblx0XHRcdFx0XHRjb2xvcjogJyMzMjMyNWQnLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0YmFja0dyb3VuZENvbG9yOiAnI2ZmZmZmZicsXHJcblx0XHRcdFx0aGVpZ2h0OiAnNDAwcHgnLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRpbnZhbGlkOiB7XHJcblx0XHRcdFx0Y29sb3I6ICcjZmE3NTVhJyxcclxuXHRcdFx0XHRpY29uQ29sb3I6ICcjZmE3NTVhJyxcclxuXHRcdFx0fSxcclxuXHRcdH0sXHJcblx0fTtcclxuXHRjb25zdCBoYW5kbGVDaGFuZ2UgPSBhc3luYyAoZXZlbnQpID0+IHtcclxuXHRcdC8vIExpc3RlbiBmb3IgY2hhbmdlcyBpbiB0aGUgQ2FyZEVsZW1lbnRcclxuXHRcdC8vIGFuZCBkaXNwbGF5IGFueSBlcnJvcnMgYXMgdGhlIGN1c3RvbWVyIHR5cGVzIHRoZWlyIGNhcmQgZGV0YWlsc1xyXG5cdFx0c2V0RGlzYWJsZWQoZXZlbnQuZW1wdHkpO1xyXG5cdFx0c2V0RXJyb3IoZXZlbnQuZXJyb3IgPyBldmVudC5lcnJvci5tZXNzYWdlIDogJycpO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IHBsYWNlT3JkZXIgPSBhc3luYyAoKSA9PiB7XHJcblx0XHRpZiAoIXNoaXBwaW5nQWRkcmVzcyB8fCBkaXNhYmxlZCkge1xyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHR9XHJcblx0XHROUHJvZ3Jlc3Muc3RhcnQoKTtcclxuXHRcdGNvbnN0IHBheWxvYWQgPSBhd2FpdCBzdHJpcGUuY29uZmlybUNhcmRQYXltZW50KGNsaWVudFNlY3JldCwge1xyXG5cdFx0XHRwYXltZW50X21ldGhvZDoge1xyXG5cdFx0XHRcdGNhcmQ6IGVsZW1lbnRzLmdldEVsZW1lbnQoQ2FyZEVsZW1lbnQpLFxyXG5cdFx0XHRcdGJpbGxpbmdfZGV0YWlsczoge1xyXG5cdFx0XHRcdFx0YWRkcmVzczoge1xyXG5cdFx0XHRcdFx0XHRjaXR5OiAnZGVsaGknLFxyXG5cdFx0XHRcdFx0XHRjb3VudHJ5OiAnVVMnLFxyXG5cdFx0XHRcdFx0XHRsaW5lMTogJ2FkZicsXHJcblx0XHRcdFx0XHRcdGxpbmUyOiBudWxsLFxyXG5cdFx0XHRcdFx0XHRwb3N0YWxfY29kZTogJzE4ODg4JyxcclxuXHRcdFx0XHRcdFx0c3RhdGU6ICdkZWhsaScsXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0ZW1haWw6IHVzZXIuZW1haWwsXHJcblx0XHRcdFx0XHRuYW1lOiB1c2VyLnVzZXJuYW1lLFxyXG5cdFx0XHRcdFx0cGhvbmU6ICcrMTU1NTU1NTU1NTUnLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdH0sXHJcblx0XHR9KTtcclxuXHJcblx0XHRjb25zdCBwcm9kdWN0SWRzID0gY2FydC5yZWR1Y2UoKGEsIGMpID0+IHtcclxuXHRcdFx0YS5wdXNoKGMuaWQpO1xyXG5cdFx0XHRyZXR1cm4gYTtcclxuXHRcdH0sIFtdKTtcclxuXHRcdGNyZWF0ZU9yZGVyKHtcclxuXHRcdFx0dmFyaWFibGVzOiB7XHJcblx0XHRcdFx0dHlwZTogeyBkYXRhOiB7IHVzZXI6IHVzZXIuX2lkLCBwcm9kdWN0czogcHJvZHVjdElkcywgc2hpcHBpbmdBZGRyZXNzLCBhbW91bnQ6IHRvdGFsUHJpY2UgfSB9LFxyXG5cdFx0XHR9LFxyXG5cdFx0fSk7XHJcblx0XHR1cGRhdGVTdG9yZSgnY2FydCcsIFtdKTtcclxuXHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjYXJ0JywgSlNPTi5zdHJpbmdpZnkoW10pKTtcclxuXHRcdC8vTlByb2dyZXNzLnN0b3AoKTtcclxuXHRcdFJvdXRlci5wdXNoKCcvb3JkZXJzJyk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgcmVtb3ZlSXRlbSA9IChjYXJ0LCBpZCkgPT4ge1xyXG5cdFx0Y2FydCA9IHJlbW92ZVByb2R1Y3RGcm9tQ2FydChjYXJ0LCBpZCk7XHJcblx0XHR1cGRhdGVTdG9yZSgnY2FydCcsIGNhcnQpO1xyXG5cdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NhcnQnLCBKU09OLnN0cmluZ2lmeShjYXJ0KSk7XHJcblx0fTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXY+XHJcblx0XHRcdHshY2FydCAmJiA8cD5ObyBPcmRlciBpbiBwbGFjZS48L3A+fVxyXG5cdFx0XHR7Y2FydCAmJiAoXHJcblx0XHRcdFx0PFJvdz5cclxuXHRcdFx0XHRcdDxDb2wgbWQ9ezZ9PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ndHJhbnNwYXJlbnQtY29udGFpbmVyJz5cclxuXHRcdFx0XHRcdFx0XHQ8cD5Ub3RhbCBQcmljZTogUnMuIHt0b3RhbFByaWNlfTwvcD5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0PFJvdz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PENvbD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8TGFiZWw+RW50ZXIgQ2FyZCBJbmZvcm1hdGlvbjwvTGFiZWw+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PENhcmRFbGVtZW50XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2NhcmQtbnVtYmVyLWVsZW1lbnQnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvcHRpb25zPXtjYXJkU3R5bGV9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvQ29sPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9Sb3c+XHJcblx0XHRcdFx0XHRcdFx0XHQ8Um93PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8Q29sPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxMYWJlbD5TaGlwcGluZyBBZGRyZXNzOjwvTGFiZWw+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PElucHV0XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlPSd0ZXh0YXJlYSdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG5hbWU9J3RleHQnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpZD0nc2hpcHBpbmdBZGRyZXNzJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyhlKSA9PiBzZXRTaGlwcGluZ0FkZHJlc3MoZS50YXJnZXQudmFsdWUpfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvQ29sPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9Sb3c+XHJcblx0XHRcdFx0XHRcdFx0XHQ8Um93PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8Q29sPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxCdXR0b24gb25DbGljaz17cGxhY2VPcmRlcn0gY2xhc3NOYW1lPSdtdC00Jz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFBsYWNlIE9yZGVyXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9CdXR0b24+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0e2Vycm9yICYmIChcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjYXJkLWVycm9yJyByb2xlPSdhbGVydCc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtlcnJvcn1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCl9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHA+VGVzdGluZyBDYXJkIE51bWJlcjogXCI0MDAwMDU2NjU1NjY1NTU2XCI8L3A+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHA+VGhpcyBpcyBhIGRlbW8gYXBwbGljYXRpb24gb25seSBhbmQgbm8gaXRlbSB3aWxsIGJlIGRlbGl2ZXJlZC48L3A+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvQ29sPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9Sb3c+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9Db2w+XHJcblx0XHRcdFx0XHQ8Q29sIG1kPXs2fT5cclxuXHRcdFx0XHRcdFx0PGltZyBzcmM9J2h0dHBzOi8vd3d3LmludGVybmF0aW9uYWxzY2llbmNlZWRpdGluZy5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTcvMDYvbG9nby1zdHJpcGUucG5nJyAvPlxyXG5cdFx0XHRcdFx0PC9Db2w+XHJcblx0XHRcdFx0PC9Sb3c+XHJcblx0XHRcdCl9XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2hlY2tvdXRGb3JtO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjb29raWVzIGZyb20gJ25leHQtY29va2llcyc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHtcclxuXHRDb2xsYXBzZSxcclxuXHROYXZiYXIsXHJcblx0TmF2YmFyVG9nZ2xlcixcclxuXHROYXZiYXJCcmFuZCxcclxuXHROYXYsXHJcblx0TmF2SXRlbSxcclxuXHROYXZMaW5rLFxyXG5cdERyb3Bkb3duLFxyXG5cdERyb3Bkb3duVG9nZ2xlLFxyXG5cdERyb3Bkb3duTWVudSxcclxuXHREcm9wZG93bkl0ZW0sXHJcblx0TmF2YmFyVGV4dCxcclxuXHRCdXR0b24sXHJcblx0QmFkZ2UsXHJcbn0gZnJvbSAncmVhY3RzdHJhcCc7XHJcblxyXG5pbXBvcnQgeyBBcHBDb250ZXh0IH0gZnJvbSAnLi4vbGliL0FwcENvbnRleHQnO1xyXG5cclxuY29uc3QgSGVhZGVyID0gKCkgPT4ge1xyXG5cdGNvbnN0IHsgZ2xvYmFsU3RvcmUgfSA9IHVzZUNvbnRleHQoQXBwQ29udGV4dCk7XHJcblxyXG5cdGNvbnN0IHsgdXNlciwgY2FydCB9ID0gZ2xvYmFsU3RvcmU7XHJcblxyXG5cdGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cdGNvbnN0IFtpc09wZW4sIHNldElzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblx0Y29uc3QgW2Ryb3Bkb3duT3Blbiwgc2V0RHJvcGRvd25PcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcblx0Y29uc3QgdG9nZ2xlRHJvcGRvd24gPSAoKSA9PiBzZXREcm9wZG93bk9wZW4oKHByZXZTdGF0ZSkgPT4gIXByZXZTdGF0ZSk7XHJcblxyXG5cdGNvbnN0IHRvZ2dsZSA9ICgpID0+IHNldElzT3BlbighaXNPcGVuKTtcclxuXHJcblx0Y29uc3QgZG9Mb2dvdXQgPSAoKSA9PiB7XHJcblx0XHRkb2N1bWVudC5jb29raWUgPSAnand0PTsgcGF0aD0vOyBleHBpcmVzPVRodSwgMDEgSmFuIDE5NzAgMDA6MDA6MDEgR01UJztcclxuXHRcdHJvdXRlci5yZWxvYWQoJy8nKTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBnb1RvT3JkZXJzID0gKCkgPT4ge1xyXG5cdFx0cm91dGVyLnB1c2goJy9vcmRlcnMnKTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBjYXJ0Q291bnQgPSBjYXJ0Lmxlbmd0aCA+IDAgPyBgJHtjYXJ0Lmxlbmd0aH1gIDogJzAnO1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9J25hdmJhci1jb250YWluZXInPlxyXG5cdFx0XHQ8TmF2YmFyIGV4cGFuZD0nbWQnPlxyXG5cdFx0XHRcdDxOYXZiYXJCcmFuZCBocmVmPScvJz5TaG9lIFN0b3JlPC9OYXZiYXJCcmFuZD5cclxuXHRcdFx0XHQ8TmF2YmFyVG9nZ2xlciBvbkNsaWNrPXt0b2dnbGV9IC8+XHJcblx0XHRcdFx0PENvbGxhcHNlIGlzT3Blbj17aXNPcGVufSBuYXZiYXI+XHJcblx0XHRcdFx0XHQ8TmF2IGNsYXNzTmFtZT0nbWwtYXV0bycgbmF2YmFyPlxyXG5cdFx0XHRcdFx0XHQ8TmF2SXRlbT5cclxuXHRcdFx0XHRcdFx0XHQ8TGluayBocmVmPScvY2FydCc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uIGNsYXNzTmFtZT0nbXItMic+XHJcblx0XHRcdFx0XHRcdFx0XHRcdENhcnQgPEJhZGdlIGNvbG9yPSdzZWNvbmRhcnknPntjYXJ0Q291bnR9PC9CYWRnZT5cclxuXHRcdFx0XHRcdFx0XHRcdDwvQnV0dG9uPlxyXG5cdFx0XHRcdFx0XHRcdDwvTGluaz5cclxuXHRcdFx0XHRcdFx0PC9OYXZJdGVtPlxyXG5cdFx0XHRcdFx0XHR7dXNlciAmJiAoXHJcblx0XHRcdFx0XHRcdFx0PFJlYWN0LkZyYWdtZW50PlxyXG5cdFx0XHRcdFx0XHRcdFx0PE5hdkl0ZW0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxEcm9wZG93biBpc09wZW49e2Ryb3Bkb3duT3Blbn0gdG9nZ2xlPXt0b2dnbGVEcm9wZG93bn0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PERyb3Bkb3duVG9nZ2xlIGNhcmV0Pnt1c2VyLnVzZXJuYW1lfTwvRHJvcGRvd25Ub2dnbGU+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PERyb3Bkb3duTWVudT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxEcm9wZG93bkl0ZW0gb25DbGljaz17ZG9Mb2dvdXR9PkxvZ291dDwvRHJvcGRvd25JdGVtPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PERyb3Bkb3duSXRlbSBvbkNsaWNrPXtnb1RvT3JkZXJzfT5PcmRlcnM8L0Ryb3Bkb3duSXRlbT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L0Ryb3Bkb3duTWVudT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9Ecm9wZG93bj5cclxuXHRcdFx0XHRcdFx0XHRcdDwvTmF2SXRlbT5cclxuXHRcdFx0XHRcdFx0XHQ8L1JlYWN0LkZyYWdtZW50PlxyXG5cdFx0XHRcdFx0XHQpfVxyXG5cclxuXHRcdFx0XHRcdFx0eyF1c2VyICYmIChcclxuXHRcdFx0XHRcdFx0XHQ8UmVhY3QuRnJhZ21lbnQ+XHJcblx0XHRcdFx0XHRcdFx0XHQ8TmF2SXRlbT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PExpbmsgaHJlZj0nL3NpZ25pbic+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PEJ1dHRvbiBjbGFzc05hbWU9J21yLTInPlNpZ24gaW48L0J1dHRvbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9OYXZJdGVtPlxyXG5cdFx0XHRcdFx0XHRcdFx0PE5hdkl0ZW0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9Jy9zaWdudXAnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxCdXR0b24+U2lnbiB1cDwvQnV0dG9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L05hdkl0ZW0+XHJcblx0XHRcdFx0XHRcdFx0PC9SZWFjdC5GcmFnbWVudD5cclxuXHRcdFx0XHRcdFx0KX1cclxuXHRcdFx0XHRcdDwvTmF2PlxyXG5cdFx0XHRcdDwvQ29sbGFwc2U+XHJcblx0XHRcdDwvTmF2YmFyPlxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBjb25zdCBBcHBDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCh7fSk7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBBcHAgZnJvbSAnbmV4dC9hcHAnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgeyBBcG9sbG9Qcm92aWRlciB9IGZyb20gJ0BhcG9sbG8vcmVhY3QtaG9va3MnO1xyXG5pbXBvcnQgY3JlYXRlQXBvbGxvQ2xpZW50IGZyb20gJy4uL2Fwb2xsb0NsaWVudCc7XHJcblxyXG4vLyBPbiB0aGUgY2xpZW50LCB3ZSBzdG9yZSB0aGUgQXBvbGxvIENsaWVudCBpbiB0aGUgZm9sbG93aW5nIHZhcmlhYmxlLlxyXG4vLyBUaGlzIHByZXZlbnRzIHRoZSBjbGllbnQgZnJvbSByZWluaXRpYWxpemluZyBiZXR3ZWVuIHBhZ2UgdHJhbnNpdGlvbnMuXHJcbmxldCBnbG9iYWxBcG9sbG9DbGllbnQgPSBudWxsO1xyXG5cclxuLyoqXHJcbiAqIEluc3RhbGxzIHRoZSBBcG9sbG8gQ2xpZW50IG9uIE5leHRQYWdlQ29udGV4dFxyXG4gKiBvciBOZXh0QXBwQ29udGV4dC4gVXNlZnVsIGlmIHlvdSB3YW50IHRvIHVzZSBhcG9sbG9DbGllbnRcclxuICogaW5zaWRlIGdldFN0YXRpY1Byb3BzLCBnZXRTdGF0aWNQYXRocyBvciBnZXRTZXJ2ZXJTaWRlUHJvcHNcclxuICogQHBhcmFtIHtOZXh0UGFnZUNvbnRleHQgfCBOZXh0QXBwQ29udGV4dH0gY3R4XHJcbiAqL1xyXG5leHBvcnQgY29uc3QgaW5pdE9uQ29udGV4dCA9IChjdHgpID0+IHtcclxuXHRjb25zdCBpbkFwcENvbnRleHQgPSBCb29sZWFuKGN0eC5jdHgpO1xyXG5cclxuXHQvLyBXZSBjb25zaWRlciBpbnN0YWxsaW5nIGB3aXRoQXBvbGxvKHsgc3NyOiB0cnVlIH0pYCBvbiBnbG9iYWwgQXBwIGxldmVsXHJcblx0Ly8gYXMgYW50aXBhdHRlcm4gc2luY2UgaXQgZGlzYWJsZXMgcHJvamVjdCB3aWRlIEF1dG9tYXRpYyBTdGF0aWMgT3B0aW1pemF0aW9uLlxyXG5cdGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xyXG5cdFx0aWYgKGluQXBwQ29udGV4dCkge1xyXG5cdFx0XHRjb25zb2xlLndhcm4oXHJcblx0XHRcdFx0J1dhcm5pbmc6IFlvdSBoYXZlIG9wdGVkLW91dCBvZiBBdXRvbWF0aWMgU3RhdGljIE9wdGltaXphdGlvbiBkdWUgdG8gYHdpdGhBcG9sbG9gIGluIGBwYWdlcy9fYXBwYC5cXG4nICtcclxuXHRcdFx0XHRcdCdSZWFkIG1vcmU6IGh0dHBzOi8vZXJyLnNoL25leHQuanMvb3B0LW91dC1hdXRvLXN0YXRpYy1vcHRpbWl6YXRpb25cXG4nXHJcblx0XHRcdCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvLyBJbml0aWFsaXplIEFwb2xsb0NsaWVudCBpZiBub3QgYWxyZWFkeSBkb25lXHJcblx0Y29uc3QgYXBvbGxvQ2xpZW50ID0gY3R4LmFwb2xsb0NsaWVudCB8fCBpbml0QXBvbGxvQ2xpZW50KGN0eC5hcG9sbG9TdGF0ZSB8fCB7fSwgaW5BcHBDb250ZXh0ID8gY3R4LmN0eCA6IGN0eCk7XHJcblxyXG5cdC8vIFdlIHNlbmQgdGhlIEFwb2xsbyBDbGllbnQgYXMgYSBwcm9wIHRvIHRoZSBjb21wb25lbnQgdG8gYXZvaWQgY2FsbGluZyBpbml0QXBvbGxvKCkgdHdpY2UgaW4gdGhlIHNlcnZlci5cclxuXHQvLyBPdGhlcndpc2UsIHRoZSBjb21wb25lbnQgd291bGQgaGF2ZSB0byBjYWxsIGluaXRBcG9sbG8oKSBhZ2FpbiBidXQgdGhpc1xyXG5cdC8vIHRpbWUgd2l0aG91dCB0aGUgY29udGV4dC4gT25jZSB0aGF0IGhhcHBlbnMsIHRoZSBmb2xsb3dpbmcgY29kZSB3aWxsIG1ha2Ugc3VyZSB3ZSBzZW5kXHJcblx0Ly8gdGhlIHByb3AgYXMgYG51bGxgIHRvIHRoZSBicm93c2VyLlxyXG5cdGFwb2xsb0NsaWVudC50b0pTT04gPSAoKSA9PiBudWxsO1xyXG5cclxuXHQvLyBBZGQgYXBvbGxvQ2xpZW50IHRvIE5leHRQYWdlQ29udGV4dCAmIE5leHRBcHBDb250ZXh0LlxyXG5cdC8vIFRoaXMgYWxsb3dzIHVzIHRvIGNvbnN1bWUgdGhlIGFwb2xsb0NsaWVudCBpbnNpZGUgb3VyXHJcblx0Ly8gY3VzdG9tIGBnZXRJbml0aWFsUHJvcHMoeyBhcG9sbG9DbGllbnQgfSlgLlxyXG5cdGN0eC5hcG9sbG9DbGllbnQgPSBhcG9sbG9DbGllbnQ7XHJcblx0aWYgKGluQXBwQ29udGV4dCkge1xyXG5cdFx0Y3R4LmN0eC5hcG9sbG9DbGllbnQgPSBhcG9sbG9DbGllbnQ7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gY3R4O1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIEFsd2F5cyBjcmVhdGVzIGEgbmV3IGFwb2xsbyBjbGllbnQgb24gdGhlIHNlcnZlclxyXG4gKiBDcmVhdGVzIG9yIHJldXNlcyBhcG9sbG8gY2xpZW50IGluIHRoZSBicm93c2VyLlxyXG4gKiBAcGFyYW0gIHtOb3JtYWxpemVkQ2FjaGVPYmplY3R9IGluaXRpYWxTdGF0ZVxyXG4gKiBAcGFyYW0gIHtOZXh0UGFnZUNvbnRleHR9IGN0eFxyXG4gKi9cclxuY29uc3QgaW5pdEFwb2xsb0NsaWVudCA9IChpbml0aWFsU3RhdGUsIGN0eCkgPT4ge1xyXG5cdC8vIE1ha2Ugc3VyZSB0byBjcmVhdGUgYSBuZXcgY2xpZW50IGZvciBldmVyeSBzZXJ2ZXItc2lkZSByZXF1ZXN0IHNvIHRoYXQgZGF0YVxyXG5cdC8vIGlzbid0IHNoYXJlZCBiZXR3ZWVuIGNvbm5lY3Rpb25zICh3aGljaCB3b3VsZCBiZSBiYWQpXHJcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XHJcblx0XHRyZXR1cm4gY3JlYXRlQXBvbGxvQ2xpZW50KGluaXRpYWxTdGF0ZSwgY3R4KTtcclxuXHR9XHJcblxyXG5cdC8vIFJldXNlIGNsaWVudCBvbiB0aGUgY2xpZW50LXNpZGVcclxuXHRpZiAoIWdsb2JhbEFwb2xsb0NsaWVudCkge1xyXG5cdFx0Z2xvYmFsQXBvbGxvQ2xpZW50ID0gY3JlYXRlQXBvbGxvQ2xpZW50KGluaXRpYWxTdGF0ZSwgY3R4KTtcclxuXHR9XHJcblxyXG5cdHJldHVybiBnbG9iYWxBcG9sbG9DbGllbnQ7XHJcbn07XHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBhIHdpdGhBcG9sbG8gSE9DXHJcbiAqIHRoYXQgcHJvdmlkZXMgdGhlIGFwb2xsb0NvbnRleHRcclxuICogdG8gYSBuZXh0LmpzIFBhZ2Ugb3IgQXBwVHJlZS5cclxuICogQHBhcmFtICB7T2JqZWN0fSB3aXRoQXBvbGxvT3B0aW9uc1xyXG4gKiBAcGFyYW0gIHtCb29sZWFufSBbd2l0aEFwb2xsb09wdGlvbnMuc3NyPWZhbHNlXVxyXG4gKiBAcmV0dXJucyB7KFBhZ2VDb21wb25lbnQ6IFJlYWN0Tm9kZSkgPT4gUmVhY3ROb2RlfVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHdpdGhBcG9sbG8gPSAoeyBzc3IgPSBmYWxzZSB9ID0ge30pID0+IChQYWdlQ29tcG9uZW50KSA9PiB7XHJcblx0Y29uc3QgV2l0aEFwb2xsbyA9ICh7IGFwb2xsb0NsaWVudCwgYXBvbGxvU3RhdGUsIC4uLnBhZ2VQcm9wcyB9KSA9PiB7XHJcblx0XHRsZXQgY2xpZW50O1xyXG5cdFx0aWYgKGFwb2xsb0NsaWVudCkge1xyXG5cdFx0XHQvLyBIYXBwZW5zIG9uOiBnZXREYXRhRnJvbVRyZWUgJiBuZXh0LmpzIHNzclxyXG5cdFx0XHRjbGllbnQgPSBhcG9sbG9DbGllbnQ7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHQvLyBIYXBwZW5zIG9uOiBuZXh0LmpzIGNzclxyXG5cdFx0XHRjbGllbnQgPSBpbml0QXBvbGxvQ2xpZW50KGFwb2xsb1N0YXRlLCB1bmRlZmluZWQpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDxBcG9sbG9Qcm92aWRlciBjbGllbnQ9e2NsaWVudH0+XHJcblx0XHRcdFx0PFBhZ2VDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuXHRcdFx0PC9BcG9sbG9Qcm92aWRlcj5cclxuXHRcdCk7XHJcblx0fTtcclxuXHJcblx0Ly8gU2V0IHRoZSBjb3JyZWN0IGRpc3BsYXlOYW1lIGluIGRldmVsb3BtZW50XHJcblx0aWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcclxuXHRcdGNvbnN0IGRpc3BsYXlOYW1lID0gUGFnZUNvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBQYWdlQ29tcG9uZW50Lm5hbWUgfHwgJ0NvbXBvbmVudCc7XHJcblx0XHRXaXRoQXBvbGxvLmRpc3BsYXlOYW1lID0gYHdpdGhBcG9sbG8oJHtkaXNwbGF5TmFtZX0pYDtcclxuXHR9XHJcblxyXG5cdGlmIChzc3IgfHwgUGFnZUNvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMpIHtcclxuXHRcdFdpdGhBcG9sbG8uZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGN0eCkgPT4ge1xyXG5cdFx0XHRjb25zdCBpbkFwcENvbnRleHQgPSBCb29sZWFuKGN0eC5jdHgpO1xyXG5cdFx0XHRjb25zdCB7IGFwb2xsb0NsaWVudCB9ID0gaW5pdE9uQ29udGV4dChjdHgpO1xyXG5cclxuXHRcdFx0Ly8gUnVuIHdyYXBwZWQgZ2V0SW5pdGlhbFByb3BzIG1ldGhvZHNcclxuXHRcdFx0bGV0IHBhZ2VQcm9wcyA9IHt9O1xyXG5cdFx0XHRpZiAoUGFnZUNvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMpIHtcclxuXHRcdFx0XHRwYWdlUHJvcHMgPSBhd2FpdCBQYWdlQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcyhjdHgpO1xyXG5cdFx0XHR9IGVsc2UgaWYgKGluQXBwQ29udGV4dCkge1xyXG5cdFx0XHRcdHBhZ2VQcm9wcyA9IGF3YWl0IEFwcC5nZXRJbml0aWFsUHJvcHMoY3R4KTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8gT25seSBvbiB0aGUgc2VydmVyOlxyXG5cdFx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuXHRcdFx0XHRjb25zdCB7IEFwcFRyZWUgfSA9IGN0eDtcclxuXHRcdFx0XHQvLyBXaGVuIHJlZGlyZWN0aW5nLCB0aGUgcmVzcG9uc2UgaXMgZmluaXNoZWQuXHJcblx0XHRcdFx0Ly8gTm8gcG9pbnQgaW4gY29udGludWluZyB0byByZW5kZXJcclxuXHRcdFx0XHRpZiAoY3R4LnJlcyAmJiBjdHgucmVzLmZpbmlzaGVkKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gcGFnZVByb3BzO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0Ly8gT25seSBpZiBkYXRhRnJvbVRyZWUgaXMgZW5hYmxlZFxyXG5cdFx0XHRcdGlmIChzc3IgJiYgQXBwVHJlZSkge1xyXG5cdFx0XHRcdFx0dHJ5IHtcclxuXHRcdFx0XHRcdFx0Ly8gSW1wb3J0IGBAYXBvbGxvL3JlYWN0LXNzcmAgZHluYW1pY2FsbHkuXHJcblx0XHRcdFx0XHRcdC8vIFdlIGRvbid0IHdhbnQgdG8gaGF2ZSB0aGlzIGluIG91ciBjbGllbnQgYnVuZGxlLlxyXG5cdFx0XHRcdFx0XHRjb25zdCB7IGdldERhdGFGcm9tVHJlZSB9ID0gYXdhaXQgaW1wb3J0KCdAYXBvbGxvL3JlYWN0LXNzcicpO1xyXG5cclxuXHRcdFx0XHRcdFx0Ly8gU2luY2UgQXBwQ29tcG9uZW50cyBhbmQgUGFnZUNvbXBvbmVudHMgaGF2ZSBkaWZmZXJlbnQgY29udGV4dCB0eXBlc1xyXG5cdFx0XHRcdFx0XHQvLyB3ZSBuZWVkIHRvIG1vZGlmeSB0aGVpciBwcm9wcyBhIGxpdHRsZS5cclxuXHRcdFx0XHRcdFx0bGV0IHByb3BzO1xyXG5cdFx0XHRcdFx0XHRpZiAoaW5BcHBDb250ZXh0KSB7XHJcblx0XHRcdFx0XHRcdFx0cHJvcHMgPSB7IC4uLnBhZ2VQcm9wcywgYXBvbGxvQ2xpZW50IH07XHJcblx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0cHJvcHMgPSB7IHBhZ2VQcm9wczogeyAuLi5wYWdlUHJvcHMsIGFwb2xsb0NsaWVudCB9IH07XHJcblx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdC8vIFRha2UgdGhlIE5leHQuanMgQXBwVHJlZSwgZGV0ZXJtaW5lIHdoaWNoIHF1ZXJpZXMgYXJlIG5lZWRlZCB0byByZW5kZXIsXHJcblx0XHRcdFx0XHRcdC8vIGFuZCBmZXRjaCB0aGVtLiBUaGlzIG1ldGhvZCBjYW4gYmUgcHJldHR5IHNsb3cgc2luY2UgaXQgcmVuZGVyc1xyXG5cdFx0XHRcdFx0XHQvLyB5b3VyIGVudGlyZSBBcHBUcmVlIG9uY2UgZm9yIGV2ZXJ5IHF1ZXJ5LiBDaGVjayBvdXQgYXBvbGxvIGZyYWdtZW50c1xyXG5cdFx0XHRcdFx0XHQvLyBpZiB5b3Ugd2FudCB0byByZWR1Y2UgdGhlIG51bWJlciBvZiByZXJlbmRlcnMuXHJcblx0XHRcdFx0XHRcdC8vIGh0dHBzOi8vd3d3LmFwb2xsb2dyYXBocWwuY29tL2RvY3MvcmVhY3QvZGF0YS9mcmFnbWVudHMvXHJcblx0XHRcdFx0XHRcdGF3YWl0IGdldERhdGFGcm9tVHJlZSg8QXBwVHJlZSB7Li4ucHJvcHN9IC8+KTtcclxuXHRcdFx0XHRcdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHRcdFx0XHRcdC8vIFByZXZlbnQgQXBvbGxvIENsaWVudCBHcmFwaFFMIGVycm9ycyBmcm9tIGNyYXNoaW5nIFNTUi5cclxuXHRcdFx0XHRcdFx0Ly8gSGFuZGxlIHRoZW0gaW4gY29tcG9uZW50cyB2aWEgdGhlIGRhdGEuZXJyb3IgcHJvcDpcclxuXHRcdFx0XHRcdFx0Ly8gaHR0cHM6Ly93d3cuYXBvbGxvZ3JhcGhxbC5jb20vZG9jcy9yZWFjdC9hcGkvcmVhY3QtYXBvbGxvLmh0bWwjZ3JhcGhxbC1xdWVyeS1kYXRhLWVycm9yXHJcblx0XHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHdoaWxlIHJ1bm5pbmcgYGdldERhdGFGcm9tVHJlZWAnLCBlcnJvcik7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0Ly8gZ2V0RGF0YUZyb21UcmVlIGRvZXMgbm90IGNhbGwgY29tcG9uZW50V2lsbFVubW91bnRcclxuXHRcdFx0XHRcdC8vIGhlYWQgc2lkZSBlZmZlY3QgdGhlcmVmb3JlIG5lZWQgdG8gYmUgY2xlYXJlZCBtYW51YWxseVxyXG5cdFx0XHRcdFx0SGVhZC5yZXdpbmQoKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4ucGFnZVByb3BzLFxyXG5cdFx0XHRcdC8vIEV4dHJhY3QgcXVlcnkgZGF0YSBmcm9tIHRoZSBBcG9sbG8gc3RvcmVcclxuXHRcdFx0XHRhcG9sbG9TdGF0ZTogYXBvbGxvQ2xpZW50LmNhY2hlLmV4dHJhY3QoKSxcclxuXHRcdFx0XHQvLyBQcm92aWRlIHRoZSBjbGllbnQgZm9yIHNzci4gQXMgc29vbiBhcyB0aGlzIHBheWxvYWRcclxuXHRcdFx0XHQvLyBnZXRzIEpTT04uc3RyaW5naWZpZWQgaXQgd2lsbCByZW1vdmUgaXRzZWxmLlxyXG5cdFx0XHRcdGFwb2xsb0NsaWVudDogY3R4LmFwb2xsb0NsaWVudCxcclxuXHRcdFx0fTtcclxuXHRcdH07XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gV2l0aEFwb2xsbztcclxufTtcclxuIiwiZXhwb3J0IGNvbnN0IGdldFVuaXF1ZVByb2R1Y3RzID0gKHByb2R1Y3RzKSA9PiB7XHJcblx0aWYgKCFwcm9kdWN0cyB8fCBwcm9kdWN0cy5sZW5ndGggPD0gMCkge1xyXG5cdFx0cmV0dXJuIFtdO1xyXG5cdH1cclxuXHRjb25zdCB1bmlxdWVJZHMgPSBuZXcgU2V0KCk7XHJcblx0cmV0dXJuIHByb2R1Y3RzLmZpbHRlcigocHJvZHVjdCkgPT4ge1xyXG5cdFx0aWYgKHVuaXF1ZUlkcy5oYXMocHJvZHVjdC5pZCkpIHtcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fVxyXG5cdFx0dW5pcXVlSWRzLmFkZChwcm9kdWN0LmlkKTtcclxuXHRcdHJldHVybiB0cnVlO1xyXG5cdH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlbW92ZVByb2R1Y3RGcm9tQ2FydCA9IChwcm9kdWN0cywgaWQpID0+IHtcclxuXHRyZXR1cm4gcHJvZHVjdHMuZmlsdGVyKChwcm9kdWN0KSA9PiBwcm9kdWN0LmlkICE9PSBpZCk7XHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgY29va2llcyBmcm9tICduZXh0LWNvb2tpZXMnO1xyXG5cclxubGV0IGdsb2JhbFVzZXIgPSBudWxsO1xyXG5cclxuZnVuY3Rpb24gd2l0aEF1dGgoQmFzZUNvbXBvbmVudCwgeyBsb2dpblJlcXVpcmVkID0gdHJ1ZSwgbG9nb3V0UmVxdWlyZWQgPSBmYWxzZSB9ID0ge30pIHtcclxuXHRjbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cdFx0c3RhdGljIHByb3BUeXBlcyA9IHtcclxuXHRcdFx0dXNlcjogUHJvcFR5cGVzLnNoYXBlKHtcclxuXHRcdFx0XHR1c2VybmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuXHRcdFx0XHRlbWFpbDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG5cdFx0XHR9KSxcclxuXHRcdFx0aXNGcm9tU2VydmVyOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxyXG5cdFx0fTtcclxuXHJcblx0XHRzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xyXG5cdFx0XHR1c2VyOiBudWxsLFxyXG5cdFx0fTtcclxuXHJcblx0XHRjb21wb25lbnREaWRNb3VudCgpIHtcclxuXHRcdFx0Y29uc3QgeyB1c2VyLCBpc0Zyb21TZXJ2ZXIgfSA9IHRoaXMucHJvcHM7XHJcblxyXG5cdFx0XHRpZiAoaXNGcm9tU2VydmVyKSB7XHJcblx0XHRcdFx0Z2xvYmFsVXNlciA9IHVzZXI7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vIElmIGxvZ2luIGlzIHJlcXVpcmVkIGFuZCBub3QgbG9nZ2VkIGluLCByZWRpcmVjdCB0byBcIi9sb2dpblwiIHBhZ2VcclxuXHRcdFx0aWYgKGxvZ2luUmVxdWlyZWQgJiYgIWxvZ291dFJlcXVpcmVkICYmICF1c2VyKSB7XHJcblx0XHRcdFx0Um91dGVyLnB1c2goJy9zaWduaW4nKTtcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vIElmIGxvZ291dCBpcyByZXF1aXJlZCBhbmQgdXNlciBsb2dnZWQgaW4sIHJlZGlyZWN0IHRvIFwiL1wiIHBhZ2VcclxuXHRcdFx0aWYgKGxvZ291dFJlcXVpcmVkICYmIHVzZXIpIHtcclxuXHRcdFx0XHRSb3V0ZXIucHVzaCgnLycpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0c3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyhjdHgpIHtcclxuXHRcdFx0Y29uc3QgaXNGcm9tU2VydmVyID0gISFjdHgucmVxO1xyXG5cclxuXHRcdFx0bGV0IHVzZXIgPSBnbG9iYWxVc2VyO1xyXG5cclxuXHRcdFx0Y29uc3QgeyBqd3QgfSA9IGNvb2tpZXMoY3R4KTtcclxuXHRcdFx0aWYgKGp3dCkge1xyXG5cdFx0XHRcdGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke3Byb2Nlc3MuZW52LmJhY2tlbmRVcmx9L3VzZXJzL21lL2AsIHtcclxuXHRcdFx0XHRcdG1ldGhvZDogJ0dFVCcsXHJcblx0XHRcdFx0XHRoZWFkZXJzOiB7XHJcblx0XHRcdFx0XHRcdEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtqd3R9YCxcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0dXNlciA9IGF3YWl0IHJlcy5qc29uKCk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmIChpc0Zyb21TZXJ2ZXIgJiYgdXNlcikge1xyXG5cdFx0XHRcdC8vIENvbnZlcnQgXCJfaWRcIihPYmplY3RJRCBmcm9tIE1vbmdvREIpIG9iamVjdCB0byBzdHJpbmdcclxuXHRcdFx0XHR1c2VyLl9pZCA9IHVzZXIuX2lkLnRvU3RyaW5nKCk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGNvbnN0IHByb3BzID0geyB1c2VyLCBpc0Zyb21TZXJ2ZXIgfTtcclxuXHJcblx0XHRcdC8vIENhbGwgY2hpbGQgY29tcG9uZW50J3MgXCJnZXRJbml0aWFsUHJvcHNcIiwgaWYgaXQgaXMgZGVmaW5lZFxyXG5cdFx0XHRpZiAoQmFzZUNvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMpIHtcclxuXHRcdFx0XHRPYmplY3QuYXNzaWduKHByb3BzLCAoYXdhaXQgQmFzZUNvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMoY3R4KSkgfHwge30pO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRyZXR1cm4gcHJvcHM7XHJcblx0XHR9XHJcblxyXG5cdFx0cmVuZGVyKCkge1xyXG5cdFx0XHRjb25zdCB7IHVzZXIgfSA9IHRoaXMucHJvcHM7XHJcblxyXG5cdFx0XHRpZiAobG9naW5SZXF1aXJlZCAmJiAhbG9nb3V0UmVxdWlyZWQgJiYgIXVzZXIpIHtcclxuXHRcdFx0XHRyZXR1cm4gbnVsbDtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKGxvZ291dFJlcXVpcmVkICYmIHVzZXIpIHtcclxuXHRcdFx0XHRyZXR1cm4gbnVsbDtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0cmV0dXJuIDxCYXNlQ29tcG9uZW50IHsuLi50aGlzLnByb3BzfSAvPjtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHJldHVybiBBcHA7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhBdXRoO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmltcG9ydCBOUHJvZ3Jlc3MgZnJvbSAnbnByb2dyZXNzJztcclxuXHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkZXInO1xyXG5cclxuaW1wb3J0IHsgd2l0aEFwb2xsbyB9IGZyb20gJy4uL2xpYi9hcG9sbG8nO1xyXG5cclxuUm91dGVyLm9uUm91dGVDaGFuZ2VTdGFydCA9ICgpID0+IE5Qcm9ncmVzcy5zdGFydCgpO1xyXG5Sb3V0ZXIub25Sb3V0ZUNoYW5nZUNvbXBsZXRlID0gKCkgPT4gTlByb2dyZXNzLmRvbmUoKTtcclxuUm91dGVyLm9uUm91dGVDaGFuZ2VFcnJvciA9ICgpID0+IE5Qcm9ncmVzcy5kb25lKCk7XHJcblxyXG5pbXBvcnQgeyBBcHBDb250ZXh0IH0gZnJvbSAnLi9BcHBDb250ZXh0JztcclxuaW1wb3J0IHsgZ2V0VW5pcXVlUHJvZHVjdHMgfSBmcm9tICcuLi9saWIvdXRpbHMnO1xyXG5cclxuZnVuY3Rpb24gd2l0aExheW91dChCYXNlQ29tcG9uZW50KSB7XHJcblx0Y2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHRcdGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcblx0XHRcdHN1cGVyKHByb3BzKTtcclxuXHRcdFx0dGhpcy5zdGF0ZSA9IHtcclxuXHRcdFx0XHR1c2VyOiBwcm9wcy51c2VyLFxyXG5cdFx0XHRcdGNhcnQ6IFtdLFxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cclxuXHRcdHVwZGF0ZVZhbHVlID0gKGtleSwgdmFsKSA9PiB7XHJcblx0XHRcdHRoaXMuc2V0U3RhdGUoeyBba2V5XTogdmFsIH0pO1xyXG5cdFx0fTtcclxuXHJcblx0XHRjb21wb25lbnREaWRNb3VudCgpIHtcclxuXHRcdFx0Y29uc3QgY2FydEluTG9jYWxTdG9yYWdlID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY2FydCcpKTtcclxuXHRcdFx0Y29uc3QgY2FydCA9IGNhcnRJbkxvY2FsU3RvcmFnZSA/IGdldFVuaXF1ZVByb2R1Y3RzKGNhcnRJbkxvY2FsU3RvcmFnZSkgOiBbXTtcclxuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7IGNhcnQgfSk7XHJcblx0XHR9XHJcblxyXG5cdFx0cmVuZGVyKCkge1xyXG5cdFx0XHRyZXR1cm4gKFxyXG5cdFx0XHRcdDxBcHBDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IGdsb2JhbFN0b3JlOiB0aGlzLnN0YXRlLCB1cGRhdGVTdG9yZTogdGhpcy51cGRhdGVWYWx1ZSB9fT5cclxuXHRcdFx0XHRcdDxIZWFkZXIgey4uLnRoaXMucHJvcHN9IC8+XHJcblx0XHRcdFx0XHQ8QmFzZUNvbXBvbmVudCB7Li4udGhpcy5wcm9wc30gLz5cclxuXHRcdFx0XHQ8L0FwcENvbnRleHQuUHJvdmlkZXI+XHJcblx0XHRcdCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRBcHAuZ2V0SW5pdGlhbFByb3BzID0gKGN0eCkgPT4ge1xyXG5cdFx0aWYgKEJhc2VDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzKSB7XHJcblx0XHRcdHJldHVybiBCYXNlQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcyhjdHgpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiB7fTtcclxuXHR9O1xyXG5cclxuXHRyZXR1cm4gd2l0aEFwb2xsbyh7IHNzcjogdHJ1ZSB9KShBcHApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoTGF5b3V0O1xyXG4iLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gIGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDtcbiAgdmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTtcblxuICBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gICAgcmV0dXJuIGNhY2hlO1xuICB9O1xuXG4gIHJldHVybiBjYWNoZTtcbn1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7XG4gIGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHtcbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCBfdHlwZW9mKG9iaikgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgICB9O1xuICB9XG5cbiAgdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7XG5cbiAgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7XG4gICAgcmV0dXJuIGNhY2hlLmdldChvYmopO1xuICB9XG5cbiAgdmFyIG5ld09iaiA9IHt9O1xuICB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDtcblxuICAgICAgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3T2JqW2tleV0gPSBvYmpba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqO1xuXG4gIGlmIChjYWNoZSkge1xuICAgIGNhY2hlLnNldChvYmosIG5ld09iaik7XG4gIH1cblxuICByZXR1cm4gbmV3T2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9wYWdlcy9fYXBwJylcbiIsIlwidXNlIHN0cmljdFwiO3ZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0PXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTt2YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmRlZmF1bHQ9dm9pZCAwO3ZhciBfcmVhY3Q9X2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTt2YXIgX3VybD1yZXF1aXJlKFwidXJsXCIpO3ZhciBfdXRpbHM9cmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi91dGlsc1wiKTt2YXIgX3JvdXRlcj1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3JvdXRlclwiKSk7dmFyIF9yb3V0ZXIyPXJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlclwiKTtmdW5jdGlvbiBpc0xvY2FsKGhyZWYpe3ZhciB1cmw9KDAsX3VybC5wYXJzZSkoaHJlZixmYWxzZSx0cnVlKTt2YXIgb3JpZ2luPSgwLF91cmwucGFyc2UpKCgwLF91dGlscy5nZXRMb2NhdGlvbk9yaWdpbikoKSxmYWxzZSx0cnVlKTtyZXR1cm4hdXJsLmhvc3R8fHVybC5wcm90b2NvbD09PW9yaWdpbi5wcm90b2NvbCYmdXJsLmhvc3Q9PT1vcmlnaW4uaG9zdDt9ZnVuY3Rpb24gbWVtb2l6ZWRGb3JtYXRVcmwoZm9ybWF0RnVuYyl7dmFyIGxhc3RIcmVmPW51bGw7dmFyIGxhc3RBcz1udWxsO3ZhciBsYXN0UmVzdWx0PW51bGw7cmV0dXJuKGhyZWYsYXMpPT57aWYobGFzdFJlc3VsdCYmaHJlZj09PWxhc3RIcmVmJiZhcz09PWxhc3RBcyl7cmV0dXJuIGxhc3RSZXN1bHQ7fXZhciByZXN1bHQ9Zm9ybWF0RnVuYyhocmVmLGFzKTtsYXN0SHJlZj1ocmVmO2xhc3RBcz1hcztsYXN0UmVzdWx0PXJlc3VsdDtyZXR1cm4gcmVzdWx0O307fWZ1bmN0aW9uIGZvcm1hdFVybCh1cmwpe3JldHVybiB1cmwmJnR5cGVvZiB1cmw9PT0nb2JqZWN0Jz8oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHVybCk6dXJsO312YXIgb2JzZXJ2ZXI7dmFyIGxpc3RlbmVycz1uZXcgTWFwKCk7dmFyIEludGVyc2VjdGlvbk9ic2VydmVyPXR5cGVvZiB3aW5kb3chPT0ndW5kZWZpbmVkJz93aW5kb3cuSW50ZXJzZWN0aW9uT2JzZXJ2ZXI6bnVsbDt2YXIgcHJlZmV0Y2hlZD17fTtmdW5jdGlvbiBnZXRPYnNlcnZlcigpey8vIFJldHVybiBzaGFyZWQgaW5zdGFuY2Ugb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgYWxyZWFkeSBjcmVhdGVkXG5pZihvYnNlcnZlcil7cmV0dXJuIG9ic2VydmVyO30vLyBPbmx5IGNyZWF0ZSBzaGFyZWQgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgc3VwcG9ydGVkIGluIGJyb3dzZXJcbmlmKCFJbnRlcnNlY3Rpb25PYnNlcnZlcil7cmV0dXJuIHVuZGVmaW5lZDt9cmV0dXJuIG9ic2VydmVyPW5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihlbnRyaWVzPT57ZW50cmllcy5mb3JFYWNoKGVudHJ5PT57aWYoIWxpc3RlbmVycy5oYXMoZW50cnkudGFyZ2V0KSl7cmV0dXJuO312YXIgY2I9bGlzdGVuZXJzLmdldChlbnRyeS50YXJnZXQpO2lmKGVudHJ5LmlzSW50ZXJzZWN0aW5nfHxlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbz4wKXtvYnNlcnZlci51bm9ic2VydmUoZW50cnkudGFyZ2V0KTtsaXN0ZW5lcnMuZGVsZXRlKGVudHJ5LnRhcmdldCk7Y2IoKTt9fSk7fSx7cm9vdE1hcmdpbjonMjAwcHgnfSk7fXZhciBsaXN0ZW5Ub0ludGVyc2VjdGlvbnM9KGVsLGNiKT0+e3ZhciBvYnNlcnZlcj1nZXRPYnNlcnZlcigpO2lmKCFvYnNlcnZlcil7cmV0dXJuKCk9Pnt9O31vYnNlcnZlci5vYnNlcnZlKGVsKTtsaXN0ZW5lcnMuc2V0KGVsLGNiKTtyZXR1cm4oKT0+e3RyeXtvYnNlcnZlci51bm9ic2VydmUoZWwpO31jYXRjaChlcnIpe2NvbnNvbGUuZXJyb3IoZXJyKTt9bGlzdGVuZXJzLmRlbGV0ZShlbCk7fTt9O2NsYXNzIExpbmsgZXh0ZW5kcyBfcmVhY3QuQ29tcG9uZW50e2NvbnN0cnVjdG9yKHByb3BzKXtzdXBlcihwcm9wcyk7dGhpcy5wPXZvaWQgMDt0aGlzLmNsZWFuVXBMaXN0ZW5lcnM9KCk9Pnt9O3RoaXMuZm9ybWF0VXJscz1tZW1vaXplZEZvcm1hdFVybCgoaHJlZixhc0hyZWYpPT57cmV0dXJue2hyZWY6KDAsX3JvdXRlcjIuYWRkQmFzZVBhdGgpKGZvcm1hdFVybChocmVmKSksYXM6YXNIcmVmPygwLF9yb3V0ZXIyLmFkZEJhc2VQYXRoKShmb3JtYXRVcmwoYXNIcmVmKSk6YXNIcmVmfTt9KTt0aGlzLmxpbmtDbGlja2VkPWU9Pnt2YXJ7bm9kZU5hbWUsdGFyZ2V0fT1lLmN1cnJlbnRUYXJnZXQ7aWYobm9kZU5hbWU9PT0nQScmJih0YXJnZXQmJnRhcmdldCE9PSdfc2VsZid8fGUubWV0YUtleXx8ZS5jdHJsS2V5fHxlLnNoaWZ0S2V5fHxlLm5hdGl2ZUV2ZW50JiZlLm5hdGl2ZUV2ZW50LndoaWNoPT09Mikpey8vIGlnbm9yZSBjbGljayBmb3IgbmV3IHRhYiAvIG5ldyB3aW5kb3cgYmVoYXZpb3JcbnJldHVybjt9dmFye2hyZWYsYXN9PXRoaXMuZm9ybWF0VXJscyh0aGlzLnByb3BzLmhyZWYsdGhpcy5wcm9wcy5hcyk7aWYoIWlzTG9jYWwoaHJlZikpey8vIGlnbm9yZSBjbGljayBpZiBpdCdzIG91dHNpZGUgb3VyIHNjb3BlIChlLmcuIGh0dHBzOi8vZ29vZ2xlLmNvbSlcbnJldHVybjt9dmFye3BhdGhuYW1lfT13aW5kb3cubG9jYXRpb247aHJlZj0oMCxfdXJsLnJlc29sdmUpKHBhdGhuYW1lLGhyZWYpO2FzPWFzPygwLF91cmwucmVzb2x2ZSkocGF0aG5hbWUsYXMpOmhyZWY7ZS5wcmV2ZW50RGVmYXVsdCgpOy8vICBhdm9pZCBzY3JvbGwgZm9yIHVybHMgd2l0aCBhbmNob3IgcmVmc1xudmFye3Njcm9sbH09dGhpcy5wcm9wcztpZihzY3JvbGw9PW51bGwpe3Njcm9sbD1hcy5pbmRleE9mKCcjJyk8MDt9Ly8gcmVwbGFjZSBzdGF0ZSBpbnN0ZWFkIG9mIHB1c2ggaWYgcHJvcCBpcyBwcmVzZW50XG5fcm91dGVyLmRlZmF1bHRbdGhpcy5wcm9wcy5yZXBsYWNlPydyZXBsYWNlJzoncHVzaCddKGhyZWYsYXMse3NoYWxsb3c6dGhpcy5wcm9wcy5zaGFsbG93fSkudGhlbihzdWNjZXNzPT57aWYoIXN1Y2Nlc3MpcmV0dXJuO2lmKHNjcm9sbCl7d2luZG93LnNjcm9sbFRvKDAsMCk7ZG9jdW1lbnQuYm9keS5mb2N1cygpO319KTt9O2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtpZihwcm9wcy5wcmVmZXRjaCl7Y29uc29sZS53YXJuKCdOZXh0LmpzIGF1dG8tcHJlZmV0Y2hlcyBhdXRvbWF0aWNhbGx5IGJhc2VkIG9uIHZpZXdwb3J0LiBUaGUgcHJlZmV0Y2ggYXR0cmlidXRlIGlzIG5vIGxvbmdlciBuZWVkZWQuIE1vcmU6IGh0dHBzOi8vZXJyLnNoL3plaXQvbmV4dC5qcy9wcmVmZXRjaC10cnVlLWRlcHJlY2F0ZWQnKTt9fXRoaXMucD1wcm9wcy5wcmVmZXRjaCE9PWZhbHNlO31jb21wb25lbnRXaWxsVW5tb3VudCgpe3RoaXMuY2xlYW5VcExpc3RlbmVycygpO31nZXRQYXRocygpe3ZhcntwYXRobmFtZX09d2luZG93LmxvY2F0aW9uO3ZhcntocmVmOnBhcnNlZEhyZWYsYXM6cGFyc2VkQXN9PXRoaXMuZm9ybWF0VXJscyh0aGlzLnByb3BzLmhyZWYsdGhpcy5wcm9wcy5hcyk7dmFyIHJlc29sdmVkSHJlZj0oMCxfdXJsLnJlc29sdmUpKHBhdGhuYW1lLHBhcnNlZEhyZWYpO3JldHVybltyZXNvbHZlZEhyZWYscGFyc2VkQXM/KDAsX3VybC5yZXNvbHZlKShwYXRobmFtZSxwYXJzZWRBcyk6cmVzb2x2ZWRIcmVmXTt9aGFuZGxlUmVmKHJlZil7aWYodGhpcy5wJiZJbnRlcnNlY3Rpb25PYnNlcnZlciYmcmVmJiZyZWYudGFnTmFtZSl7dGhpcy5jbGVhblVwTGlzdGVuZXJzKCk7dmFyIGlzUHJlZmV0Y2hlZD1wcmVmZXRjaGVkW3RoaXMuZ2V0UGF0aHMoKS5qb2luKC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4nJScpXTtpZighaXNQcmVmZXRjaGVkKXt0aGlzLmNsZWFuVXBMaXN0ZW5lcnM9bGlzdGVuVG9JbnRlcnNlY3Rpb25zKHJlZiwoKT0+e3RoaXMucHJlZmV0Y2goKTt9KTt9fX0vLyBUaGUgZnVuY3Rpb24gaXMgbWVtb2l6ZWQgc28gdGhhdCBubyBleHRyYSBsaWZlY3ljbGVzIGFyZSBuZWVkZWRcbi8vIGFzIHBlciBodHRwczovL3JlYWN0anMub3JnL2Jsb2cvMjAxOC8wNi8wNy95b3UtcHJvYmFibHktZG9udC1uZWVkLWRlcml2ZWQtc3RhdGUuaHRtbFxucHJlZmV0Y2gob3B0aW9ucyl7aWYoIXRoaXMucHx8dHlwZW9mIHdpbmRvdz09PSd1bmRlZmluZWQnKXJldHVybjsvLyBQcmVmZXRjaCB0aGUgSlNPTiBwYWdlIGlmIGFza2VkIChvbmx5IGluIHRoZSBjbGllbnQpXG52YXIgcGF0aHM9dGhpcy5nZXRQYXRocygpOy8vIFdlIG5lZWQgdG8gaGFuZGxlIGEgcHJlZmV0Y2ggZXJyb3IgaGVyZSBzaW5jZSB3ZSBtYXkgYmVcbi8vIGxvYWRpbmcgd2l0aCBwcmlvcml0eSB3aGljaCBjYW4gcmVqZWN0IGJ1dCB3ZSBkb24ndFxuLy8gd2FudCB0byBmb3JjZSBuYXZpZ2F0aW9uIHNpbmNlIHRoaXMgaXMgb25seSBhIHByZWZldGNoXG5fcm91dGVyLmRlZmF1bHQucHJlZmV0Y2gocGF0aHNbLyogaHJlZiAqLzBdLHBhdGhzWy8qIGFzUGF0aCAqLzFdLG9wdGlvbnMpLmNhdGNoKGVycj0+e2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXsvLyByZXRocm93IHRvIHNob3cgaW52YWxpZCBVUkwgZXJyb3JzXG50aHJvdyBlcnI7fX0pO3ByZWZldGNoZWRbcGF0aHMuam9pbigvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuJyUnKV09dHJ1ZTt9cmVuZGVyKCl7dmFye2NoaWxkcmVufT10aGlzLnByb3BzO3ZhcntocmVmLGFzfT10aGlzLmZvcm1hdFVybHModGhpcy5wcm9wcy5ocmVmLHRoaXMucHJvcHMuYXMpOy8vIERlcHJlY2F0ZWQuIFdhcm5pbmcgc2hvd24gYnkgcHJvcFR5cGUgY2hlY2suIElmIHRoZSBjaGlsZHJlbiBwcm92aWRlZCBpcyBhIHN0cmluZyAoPExpbms+ZXhhbXBsZTwvTGluaz4pIHdlIHdyYXAgaXQgaW4gYW4gPGE+IHRhZ1xuaWYodHlwZW9mIGNoaWxkcmVuPT09J3N0cmluZycpe2NoaWxkcmVuPS8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiYVwiLG51bGwsY2hpbGRyZW4pO30vLyBUaGlzIHdpbGwgcmV0dXJuIHRoZSBmaXJzdCBjaGlsZCwgaWYgbXVsdGlwbGUgYXJlIHByb3ZpZGVkIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3JcbnZhciBjaGlsZD1fcmVhY3QuQ2hpbGRyZW4ub25seShjaGlsZHJlbik7dmFyIHByb3BzPXtyZWY6ZWw9Pnt0aGlzLmhhbmRsZVJlZihlbCk7aWYoY2hpbGQmJnR5cGVvZiBjaGlsZD09PSdvYmplY3QnJiZjaGlsZC5yZWYpe2lmKHR5cGVvZiBjaGlsZC5yZWY9PT0nZnVuY3Rpb24nKWNoaWxkLnJlZihlbCk7ZWxzZSBpZih0eXBlb2YgY2hpbGQucmVmPT09J29iamVjdCcpe2NoaWxkLnJlZi5jdXJyZW50PWVsO319fSxvbk1vdXNlRW50ZXI6ZT0+e2lmKGNoaWxkLnByb3BzJiZ0eXBlb2YgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyPT09J2Z1bmN0aW9uJyl7Y2hpbGQucHJvcHMub25Nb3VzZUVudGVyKGUpO310aGlzLnByZWZldGNoKHtwcmlvcml0eTp0cnVlfSk7fSxvbkNsaWNrOmU9PntpZihjaGlsZC5wcm9wcyYmdHlwZW9mIGNoaWxkLnByb3BzLm9uQ2xpY2s9PT0nZnVuY3Rpb24nKXtjaGlsZC5wcm9wcy5vbkNsaWNrKGUpO31pZighZS5kZWZhdWx0UHJldmVudGVkKXt0aGlzLmxpbmtDbGlja2VkKGUpO319fTsvLyBJZiBjaGlsZCBpcyBhbiA8YT4gdGFnIGFuZCBkb2Vzbid0IGhhdmUgYSBocmVmIGF0dHJpYnV0ZSwgb3IgaWYgdGhlICdwYXNzSHJlZicgcHJvcGVydHkgaXNcbi8vIGRlZmluZWQsIHdlIHNwZWNpZnkgdGhlIGN1cnJlbnQgJ2hyZWYnLCBzbyB0aGF0IHJlcGV0aXRpb24gaXMgbm90IG5lZWRlZCBieSB0aGUgdXNlclxuaWYodGhpcy5wcm9wcy5wYXNzSHJlZnx8Y2hpbGQudHlwZT09PSdhJyYmISgnaHJlZidpbiBjaGlsZC5wcm9wcykpe3Byb3BzLmhyZWY9YXN8fGhyZWY7fS8vIEFkZCB0aGUgZW5kaW5nIHNsYXNoIHRvIHRoZSBwYXRocy4gU28sIHdlIGNhbiBzZXJ2ZSB0aGVcbi8vIFwiPHBhZ2U+L2luZGV4Lmh0bWxcIiBkaXJlY3RseS5cbmlmKHByb2Nlc3MuZW52Ll9fTkVYVF9FWFBPUlRfVFJBSUxJTkdfU0xBU0gpe3ZhciByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydD1yZXF1aXJlKCcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3Jld3JpdGUtdXJsLWZvci1leHBvcnQnKS5yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydDtpZihwcm9wcy5ocmVmJiZ0eXBlb2YgX19ORVhUX0RBVEFfXyE9PSd1bmRlZmluZWQnJiZfX05FWFRfREFUQV9fLm5leHRFeHBvcnQpe3Byb3BzLmhyZWY9cmV3cml0ZVVybEZvck5leHRFeHBvcnQocHJvcHMuaHJlZik7fX1yZXR1cm4gX3JlYWN0LmRlZmF1bHQuY2xvbmVFbGVtZW50KGNoaWxkLHByb3BzKTt9fWlmKHByb2Nlc3MuZW52Lk5PREVfRU5WPT09J2RldmVsb3BtZW50Jyl7dmFyIHdhcm49KDAsX3V0aWxzLmV4ZWNPbmNlKShjb25zb2xlLmVycm9yKTsvLyBUaGlzIG1vZHVsZSBnZXRzIHJlbW92ZWQgYnkgd2VicGFjay5JZ25vcmVQbHVnaW5cbnZhciBQcm9wVHlwZXM9cmVxdWlyZSgncHJvcC10eXBlcycpO3ZhciBleGFjdD1yZXF1aXJlKCdwcm9wLXR5cGVzLWV4YWN0Jyk7Ly8gQHRzLWlnbm9yZSB0aGUgcHJvcGVydHkgaXMgc3VwcG9ydGVkLCB3aGVuIGRlY2xhcmluZyBpdCBvbiB0aGUgY2xhc3MgaXQgb3V0cHV0cyBhbiBleHRyYSBiaXQgb2YgY29kZSB3aGljaCBpcyBub3QgbmVlZGVkLlxuTGluay5wcm9wVHlwZXM9ZXhhY3Qoe2hyZWY6UHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZyxQcm9wVHlwZXMub2JqZWN0XSkuaXNSZXF1aXJlZCxhczpQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLFByb3BUeXBlcy5vYmplY3RdKSxwcmVmZXRjaDpQcm9wVHlwZXMuYm9vbCxyZXBsYWNlOlByb3BUeXBlcy5ib29sLHNoYWxsb3c6UHJvcFR5cGVzLmJvb2wscGFzc0hyZWY6UHJvcFR5cGVzLmJvb2wsc2Nyb2xsOlByb3BUeXBlcy5ib29sLGNoaWxkcmVuOlByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5lbGVtZW50LChwcm9wcyxwcm9wTmFtZSk9Pnt2YXIgdmFsdWU9cHJvcHNbcHJvcE5hbWVdO2lmKHR5cGVvZiB2YWx1ZT09PSdzdHJpbmcnKXt3YXJuKFwiV2FybmluZzogWW91J3JlIHVzaW5nIGEgc3RyaW5nIGRpcmVjdGx5IGluc2lkZSA8TGluaz4uIFRoaXMgdXNhZ2UgaGFzIGJlZW4gZGVwcmVjYXRlZC4gUGxlYXNlIGFkZCBhbiA8YT4gdGFnIGFzIGNoaWxkIG9mIDxMaW5rPlwiKTt9cmV0dXJuIG51bGw7fV0pLmlzUmVxdWlyZWR9KTt9dmFyIF9kZWZhdWx0PUxpbms7ZXhwb3J0cy5kZWZhdWx0PV9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO3ZhciBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkXCIpO3ZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0PXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLnVzZVJvdXRlcj11c2VSb3V0ZXI7ZXhwb3J0cy5tYWtlUHVibGljUm91dGVySW5zdGFuY2U9bWFrZVB1YmxpY1JvdXRlckluc3RhbmNlO2V4cG9ydHMuY3JlYXRlUm91dGVyPWV4cG9ydHMud2l0aFJvdXRlcj1leHBvcnRzLmRlZmF1bHQ9dm9pZCAwO3ZhciBfcmVhY3Q9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO3ZhciBfcm91dGVyMj1faW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXJcIikpO2V4cG9ydHMuUm91dGVyPV9yb3V0ZXIyLmRlZmF1bHQ7ZXhwb3J0cy5OZXh0Um91dGVyPV9yb3V0ZXIyLk5leHRSb3V0ZXI7dmFyIF9yb3V0ZXJDb250ZXh0PXJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHRcIik7dmFyIF93aXRoUm91dGVyPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vd2l0aC1yb3V0ZXJcIikpO2V4cG9ydHMud2l0aFJvdXRlcj1fd2l0aFJvdXRlci5kZWZhdWx0Oy8qIGdsb2JhbCB3aW5kb3cgKi92YXIgc2luZ2xldG9uUm91dGVyPXtyb3V0ZXI6bnVsbCwvLyBob2xkcyB0aGUgYWN0dWFsIHJvdXRlciBpbnN0YW5jZVxucmVhZHlDYWxsYmFja3M6W10scmVhZHkoY2Ipe2lmKHRoaXMucm91dGVyKXJldHVybiBjYigpO2lmKHR5cGVvZiB3aW5kb3chPT0ndW5kZWZpbmVkJyl7dGhpcy5yZWFkeUNhbGxiYWNrcy5wdXNoKGNiKTt9fX07Ly8gQ3JlYXRlIHB1YmxpYyBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzIG9mIHRoZSByb3V0ZXIgaW4gdGhlIHNpbmdsZXRvblJvdXRlclxudmFyIHVybFByb3BlcnR5RmllbGRzPVsncGF0aG5hbWUnLCdyb3V0ZScsJ3F1ZXJ5JywnYXNQYXRoJywnY29tcG9uZW50cycsJ2lzRmFsbGJhY2snLCdiYXNlUGF0aCddO3ZhciByb3V0ZXJFdmVudHM9Wydyb3V0ZUNoYW5nZVN0YXJ0JywnYmVmb3JlSGlzdG9yeUNoYW5nZScsJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCdyb3V0ZUNoYW5nZUVycm9yJywnaGFzaENoYW5nZVN0YXJ0JywnaGFzaENoYW5nZUNvbXBsZXRlJ107dmFyIGNvcmVNZXRob2RGaWVsZHM9WydwdXNoJywncmVwbGFjZScsJ3JlbG9hZCcsJ2JhY2snLCdwcmVmZXRjaCcsJ2JlZm9yZVBvcFN0YXRlJ107Ly8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwnZXZlbnRzJyx7Z2V0KCl7cmV0dXJuIF9yb3V0ZXIyLmRlZmF1bHQuZXZlbnRzO319KTt1cmxQcm9wZXJ0eUZpZWxkcy5mb3JFYWNoKGZpZWxkPT57Ly8gSGVyZSB3ZSBuZWVkIHRvIHVzZSBPYmplY3QuZGVmaW5lUHJvcGVydHkgYmVjYXVzZSwgd2UgbmVlZCB0byByZXR1cm5cbi8vIHRoZSBwcm9wZXJ0eSBhc3NpZ25lZCB0byB0aGUgYWN0dWFsIHJvdXRlclxuLy8gVGhlIHZhbHVlIG1pZ2h0IGdldCBjaGFuZ2VkIGFzIHdlIGNoYW5nZSByb3V0ZXMgYW5kIHRoaXMgaXMgdGhlXG4vLyBwcm9wZXIgd2F5IHRvIGFjY2VzcyBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlcixmaWVsZCx7Z2V0KCl7dmFyIHJvdXRlcj1nZXRSb3V0ZXIoKTtyZXR1cm4gcm91dGVyW2ZpZWxkXTt9fSk7fSk7Y29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKGZpZWxkPT57Ly8gV2UgZG9uJ3QgcmVhbGx5IGtub3cgdGhlIHR5cGVzIGhlcmUsIHNvIHdlIGFkZCB0aGVtIGxhdGVyIGluc3RlYWRcbjtzaW5nbGV0b25Sb3V0ZXJbZmllbGRdPWZ1bmN0aW9uKCl7dmFyIHJvdXRlcj1nZXRSb3V0ZXIoKTtyZXR1cm4gcm91dGVyW2ZpZWxkXSguLi5hcmd1bWVudHMpO307fSk7cm91dGVyRXZlbnRzLmZvckVhY2goZXZlbnQ9PntzaW5nbGV0b25Sb3V0ZXIucmVhZHkoKCk9Pntfcm91dGVyMi5kZWZhdWx0LmV2ZW50cy5vbihldmVudCxmdW5jdGlvbigpe3ZhciBldmVudEZpZWxkPVwib25cIitldmVudC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKStldmVudC5zdWJzdHJpbmcoMSk7dmFyIF9zaW5nbGV0b25Sb3V0ZXI9c2luZ2xldG9uUm91dGVyO2lmKF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0pe3RyeXtfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKC4uLmFyZ3VtZW50cyk7fWNhdGNoKGVycil7Ly8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWNvbnNvbGVcbmNvbnNvbGUuZXJyb3IoXCJFcnJvciB3aGVuIHJ1bm5pbmcgdGhlIFJvdXRlciBldmVudDogXCIrZXZlbnRGaWVsZCk7Ly8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWNvbnNvbGVcbmNvbnNvbGUuZXJyb3IoZXJyLm1lc3NhZ2UrXCJcXG5cIitlcnIuc3RhY2spO319fSk7fSk7fSk7ZnVuY3Rpb24gZ2V0Um91dGVyKCl7aWYoIXNpbmdsZXRvblJvdXRlci5yb3V0ZXIpe3ZhciBtZXNzYWdlPSdObyByb3V0ZXIgaW5zdGFuY2UgZm91bmQuXFxuJysnWW91IHNob3VsZCBvbmx5IHVzZSBcIm5leHQvcm91dGVyXCIgaW5zaWRlIHRoZSBjbGllbnQgc2lkZSBvZiB5b3VyIGFwcC5cXG4nO3Rocm93IG5ldyBFcnJvcihtZXNzYWdlKTt9cmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXI7fS8vIEV4cG9ydCB0aGUgc2luZ2xldG9uUm91dGVyIGFuZCB0aGlzIGlzIHRoZSBwdWJsaWMgQVBJLlxudmFyIF9kZWZhdWx0PXNpbmdsZXRvblJvdXRlcjsvLyBSZWV4cG9ydCB0aGUgd2l0aFJvdXRlIEhPQ1xuZXhwb3J0cy5kZWZhdWx0PV9kZWZhdWx0O2Z1bmN0aW9uIHVzZVJvdXRlcigpe3JldHVybiBfcmVhY3QuZGVmYXVsdC51c2VDb250ZXh0KF9yb3V0ZXJDb250ZXh0LlJvdXRlckNvbnRleHQpO30vLyBJTlRFUk5BTCBBUElTXG4vLyAtLS0tLS0tLS0tLS0tXG4vLyAoZG8gbm90IHVzZSBmb2xsb3dpbmcgZXhwb3J0cyBpbnNpZGUgdGhlIGFwcClcbi8vIENyZWF0ZSBhIHJvdXRlciBhbmQgYXNzaWduIGl0IGFzIHRoZSBzaW5nbGV0b24gaW5zdGFuY2UuXG4vLyBUaGlzIGlzIHVzZWQgaW4gY2xpZW50IHNpZGUgd2hlbiB3ZSBhcmUgaW5pdGlsaXppbmcgdGhlIGFwcC5cbi8vIFRoaXMgc2hvdWxkICoqbm90KiogdXNlIGluc2lkZSB0aGUgc2VydmVyLlxudmFyIGNyZWF0ZVJvdXRlcj1mdW5jdGlvbiBjcmVhdGVSb3V0ZXIoKXtmb3IodmFyIF9sZW49YXJndW1lbnRzLmxlbmd0aCxhcmdzPW5ldyBBcnJheShfbGVuKSxfa2V5PTA7X2tleTxfbGVuO19rZXkrKyl7YXJnc1tfa2V5XT1hcmd1bWVudHNbX2tleV07fXNpbmdsZXRvblJvdXRlci5yb3V0ZXI9bmV3IF9yb3V0ZXIyLmRlZmF1bHQoLi4uYXJncyk7c2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzLmZvckVhY2goY2I9PmNiKCkpO3NpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcz1bXTtyZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlcjt9Oy8vIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBjcmVhdGUgdGhlIGB3aXRoUm91dGVyYCByb3V0ZXIgaW5zdGFuY2VcbmV4cG9ydHMuY3JlYXRlUm91dGVyPWNyZWF0ZVJvdXRlcjtmdW5jdGlvbiBtYWtlUHVibGljUm91dGVySW5zdGFuY2Uocm91dGVyKXt2YXIgX3JvdXRlcj1yb3V0ZXI7dmFyIGluc3RhbmNlPXt9O2Zvcih2YXIgcHJvcGVydHkgb2YgdXJsUHJvcGVydHlGaWVsZHMpe2lmKHR5cGVvZiBfcm91dGVyW3Byb3BlcnR5XT09PSdvYmplY3QnKXtpbnN0YW5jZVtwcm9wZXJ0eV09T2JqZWN0LmFzc2lnbih7fSxfcm91dGVyW3Byb3BlcnR5XSk7Ly8gbWFrZXMgc3VyZSBxdWVyeSBpcyBub3Qgc3RhdGVmdWxcbmNvbnRpbnVlO31pbnN0YW5jZVtwcm9wZXJ0eV09X3JvdXRlcltwcm9wZXJ0eV07fS8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbmluc3RhbmNlLmV2ZW50cz1fcm91dGVyMi5kZWZhdWx0LmV2ZW50cztjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goZmllbGQ9PntpbnN0YW5jZVtmaWVsZF09ZnVuY3Rpb24oKXtyZXR1cm4gX3JvdXRlcltmaWVsZF0oLi4uYXJndW1lbnRzKTt9O30pO3JldHVybiBpbnN0YW5jZTt9IiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZGVmYXVsdD13aXRoUm91dGVyO3ZhciBfcmVhY3Q9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO3ZhciBfcm91dGVyPXJlcXVpcmUoXCIuL3JvdXRlclwiKTtmdW5jdGlvbiB3aXRoUm91dGVyKENvbXBvc2VkQ29tcG9uZW50KXtmdW5jdGlvbiBXaXRoUm91dGVyV3JhcHBlcihwcm9wcyl7cmV0dXJuLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQ29tcG9zZWRDb21wb25lbnQsT2JqZWN0LmFzc2lnbih7cm91dGVyOigwLF9yb3V0ZXIudXNlUm91dGVyKSgpfSxwcm9wcykpO31XaXRoUm91dGVyV3JhcHBlci5nZXRJbml0aWFsUHJvcHM9Q29tcG9zZWRDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzLy8gVGhpcyBpcyBuZWVkZWQgdG8gYWxsb3cgY2hlY2tpbmcgZm9yIGN1c3RvbSBnZXRJbml0aWFsUHJvcHMgaW4gX2FwcFxuO1dpdGhSb3V0ZXJXcmFwcGVyLm9yaWdHZXRJbml0aWFsUHJvcHM9Q29tcG9zZWRDb21wb25lbnQub3JpZ0dldEluaXRpYWxQcm9wcztpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7dmFyIG5hbWU9Q29tcG9zZWRDb21wb25lbnQuZGlzcGxheU5hbWV8fENvbXBvc2VkQ29tcG9uZW50Lm5hbWV8fCdVbmtub3duJztXaXRoUm91dGVyV3JhcHBlci5kaXNwbGF5TmFtZT1cIndpdGhSb3V0ZXIoXCIrbmFtZStcIilcIjt9cmV0dXJuIFdpdGhSb3V0ZXJXcmFwcGVyO30iLCJcInVzZSBzdHJpY3RcIjtcbi8qXG5NSVQgTGljZW5zZVxuXG5Db3B5cmlnaHQgKGMpIEphc29uIE1pbGxlciAoaHR0cHM6Ly9qYXNvbmZvcm1hdC5jb20vKVxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4qL1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZnVuY3Rpb24gbWl0dCgpIHtcbiAgICBjb25zdCBhbGwgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgIHJldHVybiB7XG4gICAgICAgIG9uKHR5cGUsIGhhbmRsZXIpIHtcbiAgICAgICAgICAgIDtcbiAgICAgICAgICAgIChhbGxbdHlwZV0gfHwgKGFsbFt0eXBlXSA9IFtdKSkucHVzaChoYW5kbGVyKTtcbiAgICAgICAgfSxcbiAgICAgICAgb2ZmKHR5cGUsIGhhbmRsZXIpIHtcbiAgICAgICAgICAgIGlmIChhbGxbdHlwZV0pIHtcbiAgICAgICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYml0d2lzZVxuICAgICAgICAgICAgICAgIGFsbFt0eXBlXS5zcGxpY2UoYWxsW3R5cGVdLmluZGV4T2YoaGFuZGxlcikgPj4+IDAsIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBlbWl0KHR5cGUsIC4uLmV2dHMpIHtcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgICAgICAgIDtcbiAgICAgICAgICAgIChhbGxbdHlwZV0gfHwgW10pLnNsaWNlKCkubWFwKChoYW5kbGVyKSA9PiB7XG4gICAgICAgICAgICAgICAgaGFuZGxlciguLi5ldnRzKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgIH07XG59XG5leHBvcnRzLmRlZmF1bHQgPSBtaXR0O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCB1cmxfMSA9IHJlcXVpcmUoXCJ1cmxcIik7XG5jb25zdCBtaXR0XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL21pdHRcIikpO1xuY29uc3QgdXRpbHNfMSA9IHJlcXVpcmUoXCIuLi91dGlsc1wiKTtcbmNvbnN0IGlzX2R5bmFtaWNfMSA9IHJlcXVpcmUoXCIuL3V0aWxzL2lzLWR5bmFtaWNcIik7XG5jb25zdCByb3V0ZV9tYXRjaGVyXzEgPSByZXF1aXJlKFwiLi91dGlscy9yb3V0ZS1tYXRjaGVyXCIpO1xuY29uc3Qgcm91dGVfcmVnZXhfMSA9IHJlcXVpcmUoXCIuL3V0aWxzL3JvdXRlLXJlZ2V4XCIpO1xuY29uc3QgYmFzZVBhdGggPSBwcm9jZXNzLmVudi5fX05FWFRfUk9VVEVSX0JBU0VQQVRIIHx8ICcnO1xuZnVuY3Rpb24gYWRkQmFzZVBhdGgocGF0aCkge1xuICAgIHJldHVybiBwYXRoLmluZGV4T2YoYmFzZVBhdGgpICE9PSAwID8gYmFzZVBhdGggKyBwYXRoIDogcGF0aDtcbn1cbmV4cG9ydHMuYWRkQmFzZVBhdGggPSBhZGRCYXNlUGF0aDtcbmZ1bmN0aW9uIGRlbEJhc2VQYXRoKHBhdGgpIHtcbiAgICByZXR1cm4gcGF0aC5pbmRleE9mKGJhc2VQYXRoKSA9PT0gMFxuICAgICAgICA/IHBhdGguc3Vic3RyKGJhc2VQYXRoLmxlbmd0aCkgfHwgJy8nXG4gICAgICAgIDogcGF0aDtcbn1cbmV4cG9ydHMuZGVsQmFzZVBhdGggPSBkZWxCYXNlUGF0aDtcbmZ1bmN0aW9uIHRvUm91dGUocGF0aCkge1xuICAgIHJldHVybiBwYXRoLnJlcGxhY2UoL1xcLyQvLCAnJykgfHwgJy8nO1xufVxuY29uc3QgcHJlcGFyZVJvdXRlID0gKHBhdGgpID0+IHRvUm91dGUoIXBhdGggfHwgcGF0aCA9PT0gJy8nID8gJy9pbmRleCcgOiBwYXRoKTtcbmZ1bmN0aW9uIGZldGNoTmV4dERhdGEocGF0aG5hbWUsIHF1ZXJ5LCBpc1NlcnZlclJlbmRlciwgY2IpIHtcbiAgICBsZXQgYXR0ZW1wdHMgPSBpc1NlcnZlclJlbmRlciA/IDMgOiAxO1xuICAgIGZ1bmN0aW9uIGdldFJlc3BvbnNlKCkge1xuICAgICAgICByZXR1cm4gZmV0Y2godXRpbHNfMS5mb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgICAgICBwYXRobmFtZTogYWRkQmFzZVBhdGgoXG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlIF9fTkVYVF9EQVRBX19cbiAgICAgICAgICAgIGAvX25leHQvZGF0YS8ke19fTkVYVF9EQVRBX18uYnVpbGRJZH0ke2RlbEJhc2VQYXRoKHBhdGhuYW1lKX0uanNvbmApLFxuICAgICAgICAgICAgcXVlcnksXG4gICAgICAgIH0pLCB7XG4gICAgICAgICAgICAvLyBDb29raWVzIGFyZSByZXF1aXJlZCB0byBiZSBwcmVzZW50IGZvciBOZXh0LmpzJyBTU0cgXCJQcmV2aWV3IE1vZGVcIi5cbiAgICAgICAgICAgIC8vIENvb2tpZXMgbWF5IGFsc28gYmUgcmVxdWlyZWQgZm9yIGBnZXRTZXJ2ZXJTaWRlUHJvcHNgLlxuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vID4gYGZldGNoYCB3b27igJl0IHNlbmQgY29va2llcywgdW5sZXNzIHlvdSBzZXQgdGhlIGNyZWRlbnRpYWxzIGluaXRcbiAgICAgICAgICAgIC8vID4gb3B0aW9uLlxuICAgICAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZldGNoX0FQSS9Vc2luZ19GZXRjaFxuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vID4gRm9yIG1heGltdW0gYnJvd3NlciBjb21wYXRpYmlsaXR5IHdoZW4gaXQgY29tZXMgdG8gc2VuZGluZyAmXG4gICAgICAgICAgICAvLyA+IHJlY2VpdmluZyBjb29raWVzLCBhbHdheXMgc3VwcGx5IHRoZSBgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidgXG4gICAgICAgICAgICAvLyA+IG9wdGlvbiBpbnN0ZWFkIG9mIHJlbHlpbmcgb24gdGhlIGRlZmF1bHQuXG4gICAgICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZ2l0aHViL2ZldGNoI2NhdmVhdHNcbiAgICAgICAgICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICAgICAgICB9KS50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICBpZiAoIXJlcy5vaykge1xuICAgICAgICAgICAgICAgIGlmICgtLWF0dGVtcHRzID4gMCAmJiByZXMuc3RhdHVzID49IDUwMCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZ2V0UmVzcG9uc2UoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGdldFJlc3BvbnNlKClcbiAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgIHJldHVybiBjYiA/IGNiKGRhdGEpIDogZGF0YTtcbiAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAvLyBXZSBzaG91bGQgb25seSB0cmlnZ2VyIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbiBpZiB0aGlzIHdhcyBjYXVzZWRcbiAgICAgICAgLy8gb24gYSBjbGllbnQtc2lkZSB0cmFuc2l0aW9uLiBPdGhlcndpc2UsIHdlJ2QgZ2V0IGludG8gYW4gaW5maW5pdGVcbiAgICAgICAgLy8gbG9vcC5cbiAgICAgICAgaWYgKCFpc1NlcnZlclJlbmRlcikge1xuICAgICAgICAgICAgO1xuICAgICAgICAgICAgZXJyLmNvZGUgPSAnUEFHRV9MT0FEX0VSUk9SJztcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBlcnI7XG4gICAgfSk7XG59XG5jbGFzcyBSb3V0ZXIge1xuICAgIGNvbnN0cnVjdG9yKHBhdGhuYW1lLCBxdWVyeSwgYXMsIHsgaW5pdGlhbFByb3BzLCBwYWdlTG9hZGVyLCBBcHAsIHdyYXBBcHAsIENvbXBvbmVudCwgZXJyLCBzdWJzY3JpcHRpb24sIGlzRmFsbGJhY2ssIH0pIHtcbiAgICAgICAgLy8gU3RhdGljIERhdGEgQ2FjaGVcbiAgICAgICAgdGhpcy5zZGMgPSB7fTtcbiAgICAgICAgdGhpcy5vblBvcFN0YXRlID0gKGUpID0+IHtcbiAgICAgICAgICAgIGlmICghZS5zdGF0ZSkge1xuICAgICAgICAgICAgICAgIC8vIFdlIGdldCBzdGF0ZSBhcyB1bmRlZmluZWQgZm9yIHR3byByZWFzb25zLlxuICAgICAgICAgICAgICAgIC8vICAxLiBXaXRoIG9sZGVyIHNhZmFyaSAoPCA4KSBhbmQgb2xkZXIgY2hyb21lICg8IDM0KVxuICAgICAgICAgICAgICAgIC8vICAyLiBXaGVuIHRoZSBVUkwgY2hhbmdlZCB3aXRoICNcbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIC8vIEluIHRoZSBib3RoIGNhc2VzLCB3ZSBkb24ndCBuZWVkIHRvIHByb2NlZWQgYW5kIGNoYW5nZSB0aGUgcm91dGUuXG4gICAgICAgICAgICAgICAgLy8gKGFzIGl0J3MgYWxyZWFkeSBjaGFuZ2VkKVxuICAgICAgICAgICAgICAgIC8vIEJ1dCB3ZSBjYW4gc2ltcGx5IHJlcGxhY2UgdGhlIHN0YXRlIHdpdGggdGhlIG5ldyBjaGFuZ2VzLlxuICAgICAgICAgICAgICAgIC8vIEFjdHVhbGx5LCBmb3IgKDEpIHdlIGRvbid0IG5lZWQgdG8gbm90aGluZy4gQnV0IGl0J3MgaGFyZCB0byBkZXRlY3QgdGhhdCBldmVudC5cbiAgICAgICAgICAgICAgICAvLyBTbywgZG9pbmcgdGhlIGZvbGxvd2luZyBmb3IgKDEpIGRvZXMgbm8gaGFybS5cbiAgICAgICAgICAgICAgICBjb25zdCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gdGhpcztcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKCdyZXBsYWNlU3RhdGUnLCB1dGlsc18xLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWUsIHF1ZXJ5IH0pLCB1dGlsc18xLmdldFVSTCgpKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBNYWtlIHN1cmUgd2UgZG9uJ3QgcmUtcmVuZGVyIG9uIGluaXRpYWwgbG9hZCxcbiAgICAgICAgICAgIC8vIGNhbiBiZSBjYXVzZWQgYnkgbmF2aWdhdGluZyBiYWNrIGZyb20gYW4gZXh0ZXJuYWwgc2l0ZVxuICAgICAgICAgICAgaWYgKGUuc3RhdGUgJiZcbiAgICAgICAgICAgICAgICB0aGlzLmlzU3NyICYmXG4gICAgICAgICAgICAgICAgZS5zdGF0ZS5hcyA9PT0gdGhpcy5hc1BhdGggJiZcbiAgICAgICAgICAgICAgICB1cmxfMS5wYXJzZShlLnN0YXRlLnVybCkucGF0aG5hbWUgPT09IHRoaXMucGF0aG5hbWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBJZiB0aGUgZG93bnN0cmVhbSBhcHBsaWNhdGlvbiByZXR1cm5zIGZhbHN5LCByZXR1cm4uXG4gICAgICAgICAgICAvLyBUaGV5IHdpbGwgdGhlbiBiZSByZXNwb25zaWJsZSBmb3IgaGFuZGxpbmcgdGhlIGV2ZW50LlxuICAgICAgICAgICAgaWYgKHRoaXMuX2JwcyAmJiAhdGhpcy5fYnBzKGUuc3RhdGUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgeyB1cmwsIGFzLCBvcHRpb25zIH0gPSBlLnN0YXRlO1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHVybCA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIGFzID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ2Bwb3BzdGF0ZWAgZXZlbnQgdHJpZ2dlcmVkIGJ1dCBgZXZlbnQuc3RhdGVgIGRpZCBub3QgaGF2ZSBgdXJsYCBvciBgYXNgIGh0dHBzOi8vZXJyLnNoL3plaXQvbmV4dC5qcy9wb3BzdGF0ZS1zdGF0ZS1lbXB0eScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMucmVwbGFjZSh1cmwsIGFzLCBvcHRpb25zKTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5fZ2V0U3RhdGljRGF0YSA9IChhc1BhdGgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHBhdGhuYW1lID0gcHJlcGFyZVJvdXRlKHVybF8xLnBhcnNlKGFzUGF0aCkucGF0aG5hbWUpO1xuICAgICAgICAgICAgcmV0dXJuIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgJiYgdGhpcy5zZGNbcGF0aG5hbWVdXG4gICAgICAgICAgICAgICAgPyBQcm9taXNlLnJlc29sdmUodGhpcy5zZGNbcGF0aG5hbWVdKVxuICAgICAgICAgICAgICAgIDogZmV0Y2hOZXh0RGF0YShwYXRobmFtZSwgbnVsbCwgdGhpcy5pc1NzciwgZGF0YSA9PiAodGhpcy5zZGNbcGF0aG5hbWVdID0gZGF0YSkpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLl9nZXRTZXJ2ZXJEYXRhID0gKGFzUGF0aCkgPT4ge1xuICAgICAgICAgICAgbGV0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSB1cmxfMS5wYXJzZShhc1BhdGgsIHRydWUpO1xuICAgICAgICAgICAgcGF0aG5hbWUgPSBwcmVwYXJlUm91dGUocGF0aG5hbWUpO1xuICAgICAgICAgICAgcmV0dXJuIGZldGNoTmV4dERhdGEocGF0aG5hbWUsIHF1ZXJ5LCB0aGlzLmlzU3NyKTtcbiAgICAgICAgfTtcbiAgICAgICAgLy8gcmVwcmVzZW50cyB0aGUgY3VycmVudCBjb21wb25lbnQga2V5XG4gICAgICAgIHRoaXMucm91dGUgPSB0b1JvdXRlKHBhdGhuYW1lKTtcbiAgICAgICAgLy8gc2V0IHVwIHRoZSBjb21wb25lbnQgY2FjaGUgKGJ5IHJvdXRlIGtleXMpXG4gICAgICAgIHRoaXMuY29tcG9uZW50cyA9IHt9O1xuICAgICAgICAvLyBXZSBzaG91bGQgbm90IGtlZXAgdGhlIGNhY2hlLCBpZiB0aGVyZSdzIGFuIGVycm9yXG4gICAgICAgIC8vIE90aGVyd2lzZSwgdGhpcyBjYXVzZSBpc3N1ZXMgd2hlbiB3aGVuIGdvaW5nIGJhY2sgYW5kXG4gICAgICAgIC8vIGNvbWUgYWdhaW4gdG8gdGhlIGVycm9yZWQgcGFnZS5cbiAgICAgICAgaWYgKHBhdGhuYW1lICE9PSAnL19lcnJvcicpIHtcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSA9IHtcbiAgICAgICAgICAgICAgICBDb21wb25lbnQsXG4gICAgICAgICAgICAgICAgcHJvcHM6IGluaXRpYWxQcm9wcyxcbiAgICAgICAgICAgICAgICBlcnIsXG4gICAgICAgICAgICAgICAgX19OX1NTRzogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NHLFxuICAgICAgICAgICAgICAgIF9fTl9TU1A6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTUCxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb21wb25lbnRzWycvX2FwcCddID0geyBDb21wb25lbnQ6IEFwcCB9O1xuICAgICAgICAvLyBCYWNrd2FyZHMgY29tcGF0IGZvciBSb3V0ZXIucm91dGVyLmV2ZW50c1xuICAgICAgICAvLyBUT0RPOiBTaG91bGQgYmUgcmVtb3ZlIHRoZSBmb2xsb3dpbmcgbWFqb3IgdmVyc2lvbiBhcyBpdCB3YXMgbmV2ZXIgZG9jdW1lbnRlZFxuICAgICAgICB0aGlzLmV2ZW50cyA9IFJvdXRlci5ldmVudHM7XG4gICAgICAgIHRoaXMucGFnZUxvYWRlciA9IHBhZ2VMb2FkZXI7XG4gICAgICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZTtcbiAgICAgICAgdGhpcy5xdWVyeSA9IHF1ZXJ5O1xuICAgICAgICAvLyBpZiBhdXRvIHByZXJlbmRlcmVkIGFuZCBkeW5hbWljIHJvdXRlIHdhaXQgdG8gdXBkYXRlIGFzUGF0aFxuICAgICAgICAvLyB1bnRpbCBhZnRlciBtb3VudCB0byBwcmV2ZW50IGh5ZHJhdGlvbiBtaXNtYXRjaFxuICAgICAgICB0aGlzLmFzUGF0aCA9XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlIHRoaXMgaXMgdGVtcG9yYXJpbHkgZ2xvYmFsIChhdHRhY2hlZCB0byB3aW5kb3cpXG4gICAgICAgICAgICBpc19keW5hbWljXzEuaXNEeW5hbWljUm91dGUocGF0aG5hbWUpICYmIF9fTkVYVF9EQVRBX18uYXV0b0V4cG9ydCA/IHBhdGhuYW1lIDogYXM7XG4gICAgICAgIHRoaXMuYmFzZVBhdGggPSBiYXNlUGF0aDtcbiAgICAgICAgdGhpcy5zdWIgPSBzdWJzY3JpcHRpb247XG4gICAgICAgIHRoaXMuY2xjID0gbnVsbDtcbiAgICAgICAgdGhpcy5fd3JhcEFwcCA9IHdyYXBBcHA7XG4gICAgICAgIC8vIG1ha2Ugc3VyZSB0byBpZ25vcmUgZXh0cmEgcG9wU3RhdGUgaW4gc2FmYXJpIG9uIG5hdmlnYXRpbmdcbiAgICAgICAgLy8gYmFjayBmcm9tIGV4dGVybmFsIHNpdGVcbiAgICAgICAgdGhpcy5pc1NzciA9IHRydWU7XG4gICAgICAgIHRoaXMuaXNGYWxsYmFjayA9IGlzRmFsbGJhY2s7XG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgLy8gbWFrZSBzdXJlIFwiYXNcIiBkb2Vzbid0IHN0YXJ0IHdpdGggZG91YmxlIHNsYXNoZXMgb3IgZWxzZSBpdCBjYW5cbiAgICAgICAgICAgIC8vIHRocm93IGFuIGVycm9yIGFzIGl0J3MgY29uc2lkZXJlZCBpbnZhbGlkXG4gICAgICAgICAgICBpZiAoYXMuc3Vic3RyKDAsIDIpICE9PSAnLy8nKSB7XG4gICAgICAgICAgICAgICAgLy8gaW4gb3JkZXIgZm9yIGBlLnN0YXRlYCB0byB3b3JrIG9uIHRoZSBgb25wb3BzdGF0ZWAgZXZlbnRcbiAgICAgICAgICAgICAgICAvLyB3ZSBoYXZlIHRvIHJlZ2lzdGVyIHRoZSBpbml0aWFsIHJvdXRlIHVwb24gaW5pdGlhbGl6YXRpb25cbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKCdyZXBsYWNlU3RhdGUnLCB1dGlsc18xLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWUsIHF1ZXJ5IH0pLCBhcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLm9uUG9wU3RhdGUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIEBkZXByZWNhdGVkIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5IGV2ZW4gdGhvdWdoIGl0J3MgYSBwcml2YXRlIG1ldGhvZC5cbiAgICBzdGF0aWMgX3Jld3JpdGVVcmxGb3JOZXh0RXhwb3J0KHVybCkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0VYUE9SVF9UUkFJTElOR19TTEFTSCkge1xuICAgICAgICAgICAgY29uc3QgcmV3cml0ZVVybEZvck5leHRFeHBvcnQgPSByZXF1aXJlKCcuL3Jld3JpdGUtdXJsLWZvci1leHBvcnQnKVxuICAgICAgICAgICAgICAgIC5yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydDtcbiAgICAgICAgICAgIHJldHVybiByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCh1cmwpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHVybDtcbiAgICAgICAgfVxuICAgIH1cbiAgICB1cGRhdGUocm91dGUsIG1vZCkge1xuICAgICAgICBjb25zdCBDb21wb25lbnQgPSBtb2QuZGVmYXVsdCB8fCBtb2Q7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLmNvbXBvbmVudHNbcm91dGVdO1xuICAgICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQ2Fubm90IHVwZGF0ZSB1bmF2YWlsYWJsZSByb3V0ZTogJHtyb3V0ZX1gKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBuZXdEYXRhID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBkYXRhKSwgeyBDb21wb25lbnQsIF9fTl9TU0c6IG1vZC5fX05fU1NHLCBfX05fU1NQOiBtb2QuX19OX1NTUCB9KTtcbiAgICAgICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IG5ld0RhdGE7XG4gICAgICAgIC8vIHBhZ2VzL19hcHAuanMgdXBkYXRlZFxuICAgICAgICBpZiAocm91dGUgPT09ICcvX2FwcCcpIHtcbiAgICAgICAgICAgIHRoaXMubm90aWZ5KHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJvdXRlID09PSB0aGlzLnJvdXRlKSB7XG4gICAgICAgICAgICB0aGlzLm5vdGlmeShuZXdEYXRhKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZWxvYWQoKSB7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR28gYmFjayBpbiBoaXN0b3J5XG4gICAgICovXG4gICAgYmFjaygpIHtcbiAgICAgICAgd2luZG93Lmhpc3RvcnkuYmFjaygpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBQZXJmb3JtcyBhIGBwdXNoU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgICAqL1xuICAgIHB1c2godXJsLCBhcyA9IHVybCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNoYW5nZSgncHVzaFN0YXRlJywgdXJsLCBhcywgb3B0aW9ucyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFBlcmZvcm1zIGEgYHJlcGxhY2VTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAgICovXG4gICAgcmVwbGFjZSh1cmwsIGFzID0gdXJsLCBvcHRpb25zID0ge30pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKTtcbiAgICB9XG4gICAgY2hhbmdlKG1ldGhvZCwgX3VybCwgX2FzLCBvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBpZiAoIW9wdGlvbnMuX2gpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzU3NyID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBtYXJraW5nIHJvdXRlIGNoYW5nZXMgYXMgYSBuYXZpZ2F0aW9uIHN0YXJ0IGVudHJ5XG4gICAgICAgICAgICBpZiAodXRpbHNfMS5TVCkge1xuICAgICAgICAgICAgICAgIHBlcmZvcm1hbmNlLm1hcmsoJ3JvdXRlQ2hhbmdlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBJZiB1cmwgYW5kIGFzIHByb3ZpZGVkIGFzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbixcbiAgICAgICAgICAgIC8vIHdlJ2xsIGZvcm1hdCB0aGVtIGludG8gdGhlIHN0cmluZyB2ZXJzaW9uIGhlcmUuXG4gICAgICAgICAgICBsZXQgdXJsID0gdHlwZW9mIF91cmwgPT09ICdvYmplY3QnID8gdXRpbHNfMS5mb3JtYXRXaXRoVmFsaWRhdGlvbihfdXJsKSA6IF91cmw7XG4gICAgICAgICAgICBsZXQgYXMgPSB0eXBlb2YgX2FzID09PSAnb2JqZWN0JyA/IHV0aWxzXzEuZm9ybWF0V2l0aFZhbGlkYXRpb24oX2FzKSA6IF9hcztcbiAgICAgICAgICAgIHVybCA9IGFkZEJhc2VQYXRoKHVybCk7XG4gICAgICAgICAgICBhcyA9IGFkZEJhc2VQYXRoKGFzKTtcbiAgICAgICAgICAgIC8vIEFkZCB0aGUgZW5kaW5nIHNsYXNoIHRvIHRoZSBwYXRocy4gU28sIHdlIGNhbiBzZXJ2ZSB0aGVcbiAgICAgICAgICAgIC8vIFwiPHBhZ2U+L2luZGV4Lmh0bWxcIiBkaXJlY3RseSBmb3IgdGhlIFNTUiBwYWdlLlxuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9FWFBPUlRfVFJBSUxJTkdfU0xBU0gpIHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCA9IHJlcXVpcmUoJy4vcmV3cml0ZS11cmwtZm9yLWV4cG9ydCcpXG4gICAgICAgICAgICAgICAgICAgIC5yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydDtcbiAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlIHRoaXMgaXMgdGVtcG9yYXJpbHkgZ2xvYmFsIChhdHRhY2hlZCB0byB3aW5kb3cpXG4gICAgICAgICAgICAgICAgaWYgKF9fTkVYVF9EQVRBX18ubmV4dEV4cG9ydCkge1xuICAgICAgICAgICAgICAgICAgICBhcyA9IHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0KGFzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmFib3J0Q29tcG9uZW50TG9hZChhcyk7XG4gICAgICAgICAgICAvLyBJZiB0aGUgdXJsIGNoYW5nZSBpcyBvbmx5IHJlbGF0ZWQgdG8gYSBoYXNoIGNoYW5nZVxuICAgICAgICAgICAgLy8gV2Ugc2hvdWxkIG5vdCBwcm9jZWVkLiBXZSBzaG91bGQgb25seSBjaGFuZ2UgdGhlIHN0YXRlLlxuICAgICAgICAgICAgLy8gV0FSTklORzogYF9oYCBpcyBhbiBpbnRlcm5hbCBvcHRpb24gZm9yIGhhbmRpbmcgTmV4dC5qcyBjbGllbnQtc2lkZVxuICAgICAgICAgICAgLy8gaHlkcmF0aW9uLiBZb3VyIGFwcCBzaG91bGQgX25ldmVyXyB1c2UgdGhpcyBwcm9wZXJ0eS4gSXQgbWF5IGNoYW5nZSBhdFxuICAgICAgICAgICAgLy8gYW55IHRpbWUgd2l0aG91dCBub3RpY2UuXG4gICAgICAgICAgICBpZiAoIW9wdGlvbnMuX2ggJiYgdGhpcy5vbmx5QUhhc2hDaGFuZ2UoYXMpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hc1BhdGggPSBhcztcbiAgICAgICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VTdGFydCcsIGFzKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxUb0hhc2goYXMpO1xuICAgICAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZUNvbXBsZXRlJywgYXMpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgeyBwYXRobmFtZSwgcXVlcnksIHByb3RvY29sIH0gPSB1cmxfMS5wYXJzZSh1cmwsIHRydWUpO1xuICAgICAgICAgICAgaWYgKCFwYXRobmFtZSB8fCBwcm90b2NvbCkge1xuICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBocmVmIHBhc3NlZCB0byByb3V0ZXI6ICR7dXJsfSBodHRwczovL2Vyci5zaC96ZWl0L25leHQuanMvaW52YWxpZC1ocmVmLXBhc3NlZGApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBJZiBhc2tlZCB0byBjaGFuZ2UgdGhlIGN1cnJlbnQgVVJMIHdlIHNob3VsZCByZWxvYWQgdGhlIGN1cnJlbnQgcGFnZVxuICAgICAgICAgICAgLy8gKG5vdCBsb2NhdGlvbi5yZWxvYWQoKSBidXQgcmVsb2FkIGdldEluaXRpYWxQcm9wcyBhbmQgb3RoZXIgTmV4dC5qcyBzdHVmZnMpXG4gICAgICAgICAgICAvLyBXZSBhbHNvIG5lZWQgdG8gc2V0IHRoZSBtZXRob2QgPSByZXBsYWNlU3RhdGUgYWx3YXlzXG4gICAgICAgICAgICAvLyBhcyB0aGlzIHNob3VsZCBub3QgZ28gaW50byB0aGUgaGlzdG9yeSAoVGhhdCdzIGhvdyBicm93c2VycyB3b3JrKVxuICAgICAgICAgICAgLy8gV2Ugc2hvdWxkIGNvbXBhcmUgdGhlIG5ldyBhc1BhdGggdG8gdGhlIGN1cnJlbnQgYXNQYXRoLCBub3QgdGhlIHVybFxuICAgICAgICAgICAgaWYgKCF0aGlzLnVybElzTmV3KGFzKSkge1xuICAgICAgICAgICAgICAgIG1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3Qgcm91dGUgPSB0b1JvdXRlKHBhdGhuYW1lKTtcbiAgICAgICAgICAgIGNvbnN0IHsgc2hhbGxvdyA9IGZhbHNlIH0gPSBvcHRpb25zO1xuICAgICAgICAgICAgaWYgKGlzX2R5bmFtaWNfMS5pc0R5bmFtaWNSb3V0ZShyb3V0ZSkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IHBhdGhuYW1lOiBhc1BhdGhuYW1lIH0gPSB1cmxfMS5wYXJzZShhcyk7XG4gICAgICAgICAgICAgICAgY29uc3Qgcm91dGVSZWdleCA9IHJvdXRlX3JlZ2V4XzEuZ2V0Um91dGVSZWdleChyb3V0ZSk7XG4gICAgICAgICAgICAgICAgY29uc3Qgcm91dGVNYXRjaCA9IHJvdXRlX21hdGNoZXJfMS5nZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleCkoYXNQYXRobmFtZSk7XG4gICAgICAgICAgICAgICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1pc3NpbmdQYXJhbXMgPSBPYmplY3Qua2V5cyhyb3V0ZVJlZ2V4Lmdyb3VwcykuZmlsdGVyKHBhcmFtID0+ICFxdWVyeVtwYXJhbV0pO1xuICAgICAgICAgICAgICAgICAgICBpZiAobWlzc2luZ1BhcmFtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgTWlzbWF0Y2hpbmcgXFxgYXNcXGAgYW5kIFxcYGhyZWZcXGAgZmFpbGVkIHRvIG1hbnVhbGx5IHByb3ZpZGUgYCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGB0aGUgcGFyYW1zOiAke21pc3NpbmdQYXJhbXMuam9pbignLCAnKX0gaW4gdGhlIFxcYGhyZWZcXGAncyBcXGBxdWVyeVxcYGApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlamVjdChuZXcgRXJyb3IoYFRoZSBwcm92aWRlZCBcXGBhc1xcYCB2YWx1ZSAoJHthc1BhdGhuYW1lfSkgaXMgaW5jb21wYXRpYmxlIHdpdGggdGhlIFxcYGhyZWZcXGAgdmFsdWUgKCR7cm91dGV9KS4gYCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYFJlYWQgbW9yZTogaHR0cHM6Ly9lcnIuc2gvemVpdC9uZXh0LmpzL2luY29tcGF0aWJsZS1ocmVmLWFzYCkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBNZXJnZSBwYXJhbXMgaW50byBgcXVlcnlgLCBvdmVyd3JpdGluZyBhbnkgc3BlY2lmaWVkIGluIHNlYXJjaFxuICAgICAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5LCByb3V0ZU1hdGNoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlU3RhcnQnLCBhcyk7XG4gICAgICAgICAgICAvLyBJZiBzaGFsbG93IGlzIHRydWUgYW5kIHRoZSByb3V0ZSBleGlzdHMgaW4gdGhlIHJvdXRlciBjYWNoZSB3ZSByZXVzZSB0aGUgcHJldmlvdXMgcmVzdWx0XG4gICAgICAgICAgICB0aGlzLmdldFJvdXRlSW5mbyhyb3V0ZSwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgc2hhbGxvdykudGhlbihyb3V0ZUluZm8gPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgZXJyb3IgfSA9IHJvdXRlSW5mbztcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IgJiYgZXJyb3IuY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKGZhbHNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdiZWZvcmVIaXN0b3J5Q2hhbmdlJywgYXMpO1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKTtcbiAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBhcHBDb21wID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudDtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93Lm5leHQuaXNQcmVyZW5kZXJlZCA9XG4gICAgICAgICAgICAgICAgICAgICAgICBhcHBDb21wLmdldEluaXRpYWxQcm9wcyA9PT0gYXBwQ29tcC5vcmlnR2V0SW5pdGlhbFByb3BzICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIXJvdXRlSW5mby5Db21wb25lbnQuZ2V0SW5pdGlhbFByb3BzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnNldChyb3V0ZSwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgcm91dGVJbmZvKTtcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyb3IsIGFzKTtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VDb21wbGV0ZScsIGFzKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZSh0cnVlKTtcbiAgICAgICAgICAgIH0sIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBjaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMgPSB7fSkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeSBpcyBub3QgYXZhaWxhYmxlLmApO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnlbbWV0aG9kXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeS4ke21ldGhvZH0gaXMgbm90IGF2YWlsYWJsZWApO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAobWV0aG9kICE9PSAncHVzaFN0YXRlJyB8fCB1dGlsc18xLmdldFVSTCgpICE9PSBhcykge1xuICAgICAgICAgICAgd2luZG93Lmhpc3RvcnlbbWV0aG9kXSh7XG4gICAgICAgICAgICAgICAgdXJsLFxuICAgICAgICAgICAgICAgIGFzLFxuICAgICAgICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgICAgICB9LCBcbiAgICAgICAgICAgIC8vIE1vc3QgYnJvd3NlcnMgY3VycmVudGx5IGlnbm9yZXMgdGhpcyBwYXJhbWV0ZXIsIGFsdGhvdWdoIHRoZXkgbWF5IHVzZSBpdCBpbiB0aGUgZnV0dXJlLlxuICAgICAgICAgICAgLy8gUGFzc2luZyB0aGUgZW1wdHkgc3RyaW5nIGhlcmUgc2hvdWxkIGJlIHNhZmUgYWdhaW5zdCBmdXR1cmUgY2hhbmdlcyB0byB0aGUgbWV0aG9kLlxuICAgICAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hpc3RvcnkvcmVwbGFjZVN0YXRlXG4gICAgICAgICAgICAnJywgYXMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldFJvdXRlSW5mbyhyb3V0ZSwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgc2hhbGxvdyA9IGZhbHNlKSB7XG4gICAgICAgIGNvbnN0IGNhY2hlZFJvdXRlSW5mbyA9IHRoaXMuY29tcG9uZW50c1tyb3V0ZV07XG4gICAgICAgIC8vIElmIHRoZXJlIGlzIGEgc2hhbGxvdyByb3V0ZSB0cmFuc2l0aW9uIHBvc3NpYmxlXG4gICAgICAgIC8vIElmIHRoZSByb3V0ZSBpcyBhbHJlYWR5IHJlbmRlcmVkIG9uIHRoZSBzY3JlZW4uXG4gICAgICAgIGlmIChzaGFsbG93ICYmIGNhY2hlZFJvdXRlSW5mbyAmJiB0aGlzLnJvdXRlID09PSByb3V0ZSkge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShjYWNoZWRSb3V0ZUluZm8pO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGhhbmRsZUVycm9yID0gKGVyciwgbG9hZEVycm9yRmFpbCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlcnIuY29kZSA9PT0gJ1BBR0VfTE9BRF9FUlJPUicgfHwgbG9hZEVycm9yRmFpbCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBJZiB3ZSBjYW4ndCBsb2FkIHRoZSBwYWdlIGl0IGNvdWxkIGJlIG9uZSBvZiBmb2xsb3dpbmcgcmVhc29uc1xuICAgICAgICAgICAgICAgICAgICAvLyAgMS4gUGFnZSBkb2Vzbid0IGV4aXN0c1xuICAgICAgICAgICAgICAgICAgICAvLyAgMi4gUGFnZSBkb2VzIGV4aXN0IGluIGEgZGlmZmVyZW50IHpvbmVcbiAgICAgICAgICAgICAgICAgICAgLy8gIDMuIEludGVybmFsIGVycm9yIHdoaWxlIGxvYWRpbmcgdGhlIHBhZ2VcbiAgICAgICAgICAgICAgICAgICAgLy8gU28sIGRvaW5nIGEgaGFyZCByZWxvYWQgaXMgdGhlIHByb3BlciB3YXkgdG8gZGVhbCB3aXRoIHRoaXMuXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXM7XG4gICAgICAgICAgICAgICAgICAgIC8vIENoYW5naW5nIHRoZSBVUkwgZG9lc24ndCBibG9jayBleGVjdXRpbmcgdGhlIGN1cnJlbnQgY29kZSBwYXRoLlxuICAgICAgICAgICAgICAgICAgICAvLyBTbywgd2UgbmVlZCB0byBtYXJrIGl0IGFzIGEgY2FuY2VsbGVkIGVycm9yIGFuZCBzdG9wIHRoZSByb3V0aW5nIGxvZ2ljLlxuICAgICAgICAgICAgICAgICAgICBlcnIuY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSBUT0RPOiBmaXggdGhlIGNvbnRyb2wgZmxvdyBoZXJlXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKHsgZXJyb3I6IGVyciB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSBUT0RPOiBmaXggdGhlIGNvbnRyb2wgZmxvdyBoZXJlXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKHsgZXJyb3I6IGVyciB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh0aGlzLmZldGNoQ29tcG9uZW50KCcvX2Vycm9yJylcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeyBwYWdlOiBDb21wb25lbnQgfSA9IHJlcztcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgcm91dGVJbmZvID0geyBDb21wb25lbnQsIGVyciB9O1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgICAgICAgICB9KS50aGVuKHByb3BzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBwcm9wcztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8uZXJyb3IgPSBlcnI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyb3V0ZUluZm8pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSwgZ2lwRXJyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBlcnJvciBwYWdlIGBnZXRJbml0aWFsUHJvcHNgOiAnLCBnaXBFcnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5lcnJvciA9IGVycjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJvdXRlSW5mbyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGVyciA9PiBoYW5kbGVFcnJvcihlcnIsIHRydWUpKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGlmIChjYWNoZWRSb3V0ZUluZm8pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShjYWNoZWRSb3V0ZUluZm8pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5mZXRjaENvbXBvbmVudChyb3V0ZSkudGhlbihyZXMgPT4gcmVzb2x2ZSh7XG4gICAgICAgICAgICAgICAgQ29tcG9uZW50OiByZXMucGFnZSxcbiAgICAgICAgICAgICAgICBfX05fU1NHOiByZXMubW9kLl9fTl9TU0csXG4gICAgICAgICAgICAgICAgX19OX1NTUDogcmVzLm1vZC5fX05fU1NQLFxuICAgICAgICAgICAgfSksIHJlamVjdCk7XG4gICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbigocm91dGVJbmZvKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB7IENvbXBvbmVudCwgX19OX1NTRywgX19OX1NTUCB9ID0gcm91dGVJbmZvO1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IGlzVmFsaWRFbGVtZW50VHlwZSB9ID0gcmVxdWlyZSgncmVhY3QtaXMnKTtcbiAgICAgICAgICAgICAgICBpZiAoIWlzVmFsaWRFbGVtZW50VHlwZShDb21wb25lbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIGRlZmF1bHQgZXhwb3J0IGlzIG5vdCBhIFJlYWN0IENvbXBvbmVudCBpbiBwYWdlOiBcIiR7cGF0aG5hbWV9XCJgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZ2V0RGF0YSgoKSA9PiBfX05fU1NHXG4gICAgICAgICAgICAgICAgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKGFzKVxuICAgICAgICAgICAgICAgIDogX19OX1NTUFxuICAgICAgICAgICAgICAgICAgICA/IHRoaXMuX2dldFNlcnZlckRhdGEoYXMpXG4gICAgICAgICAgICAgICAgICAgIDogdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCBcbiAgICAgICAgICAgICAgICAgICAgLy8gd2UgcHJvdmlkZSBBcHBUcmVlIGxhdGVyIHNvIHRoaXMgbmVlZHMgdG8gYmUgYGFueWBcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzUGF0aDogYXMsXG4gICAgICAgICAgICAgICAgICAgIH0pKS50aGVuKHByb3BzID0+IHtcbiAgICAgICAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBwcm9wcztcbiAgICAgICAgICAgICAgICB0aGlzLmNvbXBvbmVudHNbcm91dGVdID0gcm91dGVJbmZvO1xuICAgICAgICAgICAgICAgIHJldHVybiByb3V0ZUluZm87XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChoYW5kbGVFcnJvcik7XG4gICAgfVxuICAgIHNldChyb3V0ZSwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgZGF0YSkge1xuICAgICAgICB0aGlzLmlzRmFsbGJhY2sgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5yb3V0ZSA9IHJvdXRlO1xuICAgICAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWU7XG4gICAgICAgIHRoaXMucXVlcnkgPSBxdWVyeTtcbiAgICAgICAgdGhpcy5hc1BhdGggPSBhcztcbiAgICAgICAgdGhpcy5ub3RpZnkoZGF0YSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENhbGxiYWNrIHRvIGV4ZWN1dGUgYmVmb3JlIHJlcGxhY2luZyByb3V0ZXIgc3RhdGVcbiAgICAgKiBAcGFyYW0gY2IgY2FsbGJhY2sgdG8gYmUgZXhlY3V0ZWRcbiAgICAgKi9cbiAgICBiZWZvcmVQb3BTdGF0ZShjYikge1xuICAgICAgICB0aGlzLl9icHMgPSBjYjtcbiAgICB9XG4gICAgb25seUFIYXNoQ2hhbmdlKGFzKSB7XG4gICAgICAgIGlmICghdGhpcy5hc1BhdGgpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIGNvbnN0IFtvbGRVcmxOb0hhc2gsIG9sZEhhc2hdID0gdGhpcy5hc1BhdGguc3BsaXQoJyMnKTtcbiAgICAgICAgY29uc3QgW25ld1VybE5vSGFzaCwgbmV3SGFzaF0gPSBhcy5zcGxpdCgnIycpO1xuICAgICAgICAvLyBNYWtlcyBzdXJlIHdlIHNjcm9sbCB0byB0aGUgcHJvdmlkZWQgaGFzaCBpZiB0aGUgdXJsL2hhc2ggYXJlIHRoZSBzYW1lXG4gICAgICAgIGlmIChuZXdIYXNoICYmIG9sZFVybE5vSGFzaCA9PT0gbmV3VXJsTm9IYXNoICYmIG9sZEhhc2ggPT09IG5ld0hhc2gpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIHRoZSB1cmxzIGFyZSBjaGFuZ2UsIHRoZXJlJ3MgbW9yZSB0aGFuIGEgaGFzaCBjaGFuZ2VcbiAgICAgICAgaWYgKG9sZFVybE5vSGFzaCAhPT0gbmV3VXJsTm9IYXNoKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgdGhlIGhhc2ggaGFzIGNoYW5nZWQsIHRoZW4gaXQncyBhIGhhc2ggb25seSBjaGFuZ2UuXG4gICAgICAgIC8vIFRoaXMgY2hlY2sgaXMgbmVjZXNzYXJ5IHRvIGhhbmRsZSBib3RoIHRoZSBlbnRlciBhbmRcbiAgICAgICAgLy8gbGVhdmUgaGFzaCA9PT0gJycgY2FzZXMuIFRoZSBpZGVudGl0eSBjYXNlIGZhbGxzIHRocm91Z2hcbiAgICAgICAgLy8gYW5kIGlzIHRyZWF0ZWQgYXMgYSBuZXh0IHJlbG9hZC5cbiAgICAgICAgcmV0dXJuIG9sZEhhc2ggIT09IG5ld0hhc2g7XG4gICAgfVxuICAgIHNjcm9sbFRvSGFzaChhcykge1xuICAgICAgICBjb25zdCBbLCBoYXNoXSA9IGFzLnNwbGl0KCcjJyk7XG4gICAgICAgIC8vIFNjcm9sbCB0byB0b3AgaWYgdGhlIGhhc2ggaXMganVzdCBgI2Agd2l0aCBubyB2YWx1ZVxuICAgICAgICBpZiAoaGFzaCA9PT0gJycpIHtcbiAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBGaXJzdCB3ZSBjaGVjayBpZiB0aGUgZWxlbWVudCBieSBpZCBpcyBmb3VuZFxuICAgICAgICBjb25zdCBpZEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaCk7XG4gICAgICAgIGlmIChpZEVsKSB7XG4gICAgICAgICAgICBpZEVsLnNjcm9sbEludG9WaWV3KCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgdGhlcmUncyBubyBlbGVtZW50IHdpdGggdGhlIGlkLCB3ZSBjaGVjayB0aGUgYG5hbWVgIHByb3BlcnR5XG4gICAgICAgIC8vIFRvIG1pcnJvciBicm93c2Vyc1xuICAgICAgICBjb25zdCBuYW1lRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShoYXNoKVswXTtcbiAgICAgICAgaWYgKG5hbWVFbCkge1xuICAgICAgICAgICAgbmFtZUVsLnNjcm9sbEludG9WaWV3KCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdXJsSXNOZXcoYXNQYXRoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFzUGF0aCAhPT0gYXNQYXRoO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBQcmVmZXRjaCBwYWdlIGNvZGUsIHlvdSBtYXkgd2FpdCBmb3IgdGhlIGRhdGEgZHVyaW5nIHBhZ2UgcmVuZGVyaW5nLlxuICAgICAqIFRoaXMgZmVhdHVyZSBvbmx5IHdvcmtzIGluIHByb2R1Y3Rpb24hXG4gICAgICogQHBhcmFtIHVybCB0aGUgaHJlZiBvZiBwcmVmZXRjaGVkIHBhZ2VcbiAgICAgKiBAcGFyYW0gYXNQYXRoIHRoZSBhcyBwYXRoIG9mIHRoZSBwcmVmZXRjaGVkIHBhZ2VcbiAgICAgKi9cbiAgICBwcmVmZXRjaCh1cmwsIGFzUGF0aCA9IHVybCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB7IHBhdGhuYW1lLCBwcm90b2NvbCB9ID0gdXJsXzEucGFyc2UodXJsKTtcbiAgICAgICAgICAgIGlmICghcGF0aG5hbWUgfHwgcHJvdG9jb2wpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgaHJlZiBwYXNzZWQgdG8gcm91dGVyOiAke3VybH0gaHR0cHM6Ly9lcnIuc2gvemVpdC9uZXh0LmpzL2ludmFsaWQtaHJlZi1wYXNzZWRgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gUHJlZmV0Y2ggaXMgbm90IHN1cHBvcnRlZCBpbiBkZXZlbG9wbWVudCBtb2RlIGJlY2F1c2UgaXQgd291bGQgdHJpZ2dlciBvbi1kZW1hbmQtZW50cmllc1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCByb3V0ZSA9IGRlbEJhc2VQYXRoKHRvUm91dGUocGF0aG5hbWUpKTtcbiAgICAgICAgICAgIFByb21pc2UuYWxsKFtcbiAgICAgICAgICAgICAgICB0aGlzLnBhZ2VMb2FkZXIucHJlZmV0Y2hEYXRhKHVybCwgZGVsQmFzZVBhdGgoYXNQYXRoKSksXG4gICAgICAgICAgICAgICAgdGhpcy5wYWdlTG9hZGVyW29wdGlvbnMucHJpb3JpdHkgPyAnbG9hZFBhZ2UnIDogJ3ByZWZldGNoJ10ocm91dGUpLFxuICAgICAgICAgICAgXSkudGhlbigoKSA9PiByZXNvbHZlKCksIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBhc3luYyBmZXRjaENvbXBvbmVudChyb3V0ZSkge1xuICAgICAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2U7XG4gICAgICAgIGNvbnN0IGNhbmNlbCA9ICh0aGlzLmNsYyA9ICgpID0+IHtcbiAgICAgICAgICAgIGNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgIH0pO1xuICAgICAgICByb3V0ZSA9IGRlbEJhc2VQYXRoKHJvdXRlKTtcbiAgICAgICAgY29uc3QgY29tcG9uZW50UmVzdWx0ID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmxvYWRQYWdlKHJvdXRlKTtcbiAgICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICAgICAgY29uc3QgZXJyb3IgPSBuZXcgRXJyb3IoYEFib3J0IGZldGNoaW5nIGNvbXBvbmVudCBmb3Igcm91dGU6IFwiJHtyb3V0ZX1cImApO1xuICAgICAgICAgICAgZXJyb3IuY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICAgICAgICB0aGlzLmNsYyA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudFJlc3VsdDtcbiAgICB9XG4gICAgX2dldERhdGEoZm4pIHtcbiAgICAgICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlO1xuICAgICAgICBjb25zdCBjYW5jZWwgPSAoKSA9PiB7XG4gICAgICAgICAgICBjYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmNsYyA9IGNhbmNlbDtcbiAgICAgICAgcmV0dXJuIGZuKCkudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jbGMgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVyciA9IG5ldyBFcnJvcignTG9hZGluZyBpbml0aWFsIHByb3BzIGNhbmNlbGxlZCcpO1xuICAgICAgICAgICAgICAgIGVyci5jYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwgY3R4KSB7XG4gICAgICAgIGNvbnN0IHsgQ29tcG9uZW50OiBBcHAgfSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXTtcbiAgICAgICAgY29uc3QgQXBwVHJlZSA9IHRoaXMuX3dyYXBBcHAoQXBwKTtcbiAgICAgICAgY3R4LkFwcFRyZWUgPSBBcHBUcmVlO1xuICAgICAgICByZXR1cm4gdXRpbHNfMS5sb2FkR2V0SW5pdGlhbFByb3BzKEFwcCwge1xuICAgICAgICAgICAgQXBwVHJlZSxcbiAgICAgICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgICAgIHJvdXRlcjogdGhpcyxcbiAgICAgICAgICAgIGN0eCxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGFib3J0Q29tcG9uZW50TG9hZChhcykge1xuICAgICAgICBpZiAodGhpcy5jbGMpIHtcbiAgICAgICAgICAgIGNvbnN0IGUgPSBuZXcgRXJyb3IoJ1JvdXRlIENhbmNlbGxlZCcpO1xuICAgICAgICAgICAgZS5jYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZSwgYXMpO1xuICAgICAgICAgICAgdGhpcy5jbGMoKTtcbiAgICAgICAgICAgIHRoaXMuY2xjID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBub3RpZnkoZGF0YSkge1xuICAgICAgICB0aGlzLnN1YihkYXRhLCB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50KTtcbiAgICB9XG59XG5leHBvcnRzLmRlZmF1bHQgPSBSb3V0ZXI7XG5Sb3V0ZXIuZXZlbnRzID0gbWl0dF8xLmRlZmF1bHQoKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLy8gSWRlbnRpZnkgL1twYXJhbV0vIGluIHJvdXRlIHN0cmluZ1xuY29uc3QgVEVTVF9ST1VURSA9IC9cXC9cXFtbXi9dKz9cXF0oPz1cXC98JCkvO1xuZnVuY3Rpb24gaXNEeW5hbWljUm91dGUocm91dGUpIHtcbiAgICByZXR1cm4gVEVTVF9ST1VURS50ZXN0KHJvdXRlKTtcbn1cbmV4cG9ydHMuaXNEeW5hbWljUm91dGUgPSBpc0R5bmFtaWNSb3V0ZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZnVuY3Rpb24gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXgpIHtcbiAgICBjb25zdCB7IHJlLCBncm91cHMgfSA9IHJvdXRlUmVnZXg7XG4gICAgcmV0dXJuIChwYXRobmFtZSkgPT4ge1xuICAgICAgICBjb25zdCByb3V0ZU1hdGNoID0gcmUuZXhlYyhwYXRobmFtZSk7XG4gICAgICAgIGlmICghcm91dGVNYXRjaCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRlY29kZSA9IChwYXJhbSkgPT4ge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHBhcmFtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChfKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZXJyID0gbmV3IEVycm9yKCdmYWlsZWQgdG8gZGVjb2RlIHBhcmFtJyk7XG4gICAgICAgICAgICAgICAgZXJyLmNvZGUgPSAnREVDT0RFX0ZBSUxFRCc7XG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBwYXJhbXMgPSB7fTtcbiAgICAgICAgT2JqZWN0LmtleXMoZ3JvdXBzKS5mb3JFYWNoKChzbHVnTmFtZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZyA9IGdyb3Vwc1tzbHVnTmFtZV07XG4gICAgICAgICAgICBjb25zdCBtID0gcm91dGVNYXRjaFtnLnBvc107XG4gICAgICAgICAgICBpZiAobSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgcGFyYW1zW3NsdWdOYW1lXSA9IH5tLmluZGV4T2YoJy8nKVxuICAgICAgICAgICAgICAgICAgICA/IG0uc3BsaXQoJy8nKS5tYXAoZW50cnkgPT4gZGVjb2RlKGVudHJ5KSlcbiAgICAgICAgICAgICAgICAgICAgOiBnLnJlcGVhdFxuICAgICAgICAgICAgICAgICAgICAgICAgPyBbZGVjb2RlKG0pXVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBkZWNvZGUobSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcGFyYW1zO1xuICAgIH07XG59XG5leHBvcnRzLmdldFJvdXRlTWF0Y2hlciA9IGdldFJvdXRlTWF0Y2hlcjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLy8gdGhpcyBpc24ndCBpbXBvcnRpbmcgdGhlIGVzY2FwZS1zdHJpbmctcmVnZXggbW9kdWxlXG4vLyB0byByZWR1Y2UgYnl0ZXNcbmZ1bmN0aW9uIGVzY2FwZVJlZ2V4KHN0cikge1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvW3xcXFxce30oKVtcXF1eJCsqPy4tXS9nLCAnXFxcXCQmJyk7XG59XG5mdW5jdGlvbiBnZXRSb3V0ZVJlZ2V4KG5vcm1hbGl6ZWRSb3V0ZSkge1xuICAgIC8vIEVzY2FwZSBhbGwgY2hhcmFjdGVycyB0aGF0IGNvdWxkIGJlIGNvbnNpZGVyZWQgUmVnRXhcbiAgICBjb25zdCBlc2NhcGVkUm91dGUgPSBlc2NhcGVSZWdleChub3JtYWxpemVkUm91dGUucmVwbGFjZSgvXFwvJC8sICcnKSB8fCAnLycpO1xuICAgIGNvbnN0IGdyb3VwcyA9IHt9O1xuICAgIGxldCBncm91cEluZGV4ID0gMTtcbiAgICBjb25zdCBwYXJhbWV0ZXJpemVkUm91dGUgPSBlc2NhcGVkUm91dGUucmVwbGFjZSgvXFwvXFxcXFxcWyhbXi9dKz8pXFxcXFxcXSg/PVxcL3wkKS9nLCAoXywgJDEpID0+IHtcbiAgICAgICAgY29uc3QgaXNDYXRjaEFsbCA9IC9eKFxcXFxcXC4pezN9Ly50ZXN0KCQxKTtcbiAgICAgICAgZ3JvdXBzWyQxXG4gICAgICAgICAgICAvLyBVbi1lc2NhcGUga2V5XG4gICAgICAgICAgICAucmVwbGFjZSgvXFxcXChbfFxcXFx7fSgpW1xcXV4kKyo/Li1dKS9nLCAnJDEnKVxuICAgICAgICAgICAgLnJlcGxhY2UoL15cXC57M30vLCAnJylcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlcXVlbmNlc1xuICAgICAgICBdID0geyBwb3M6IGdyb3VwSW5kZXgrKywgcmVwZWF0OiBpc0NhdGNoQWxsIH07XG4gICAgICAgIHJldHVybiBpc0NhdGNoQWxsID8gJy8oLis/KScgOiAnLyhbXi9dKz8pJztcbiAgICB9KTtcbiAgICBsZXQgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGU7XG4gICAgLy8gZGVhZCBjb2RlIGVsaW1pbmF0ZSBmb3IgYnJvd3NlciBzaW5jZSBpdCdzIG9ubHkgbmVlZGVkXG4gICAgLy8gd2hpbGUgZ2VuZXJhdGluZyByb3V0ZXMtbWFuaWZlc3RcbiAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGUgPSBlc2NhcGVkUm91dGUucmVwbGFjZSgvXFwvXFxcXFxcWyhbXi9dKz8pXFxcXFxcXSg/PVxcL3wkKS9nLCAoXywgJDEpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGlzQ2F0Y2hBbGwgPSAvXihcXFxcXFwuKXszfS8udGVzdCgkMSk7XG4gICAgICAgICAgICBjb25zdCBrZXkgPSAkMVxuICAgICAgICAgICAgICAgIC8vIFVuLWVzY2FwZSBrZXlcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgvXFxcXChbfFxcXFx7fSgpW1xcXV4kKyo/Li1dKS9nLCAnJDEnKVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9eXFwuezN9LywgJycpO1xuICAgICAgICAgICAgcmV0dXJuIGlzQ2F0Y2hBbGxcbiAgICAgICAgICAgICAgICA/IGAvKD88JHtlc2NhcGVSZWdleChrZXkpfT4uKz8pYFxuICAgICAgICAgICAgICAgIDogYC8oPzwke2VzY2FwZVJlZ2V4KGtleSl9PlteL10rPylgO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oeyByZTogbmV3IFJlZ0V4cCgnXicgKyBwYXJhbWV0ZXJpemVkUm91dGUgKyAnKD86Lyk/JCcsICdpJyksIGdyb3VwcyB9LCAobmFtZWRQYXJhbWV0ZXJpemVkUm91dGVcbiAgICAgICAgPyB7XG4gICAgICAgICAgICBuYW1lZFJlZ2V4OiBgXiR7bmFtZWRQYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGAsXG4gICAgICAgIH1cbiAgICAgICAgOiB7fSkpO1xufVxuZXhwb3J0cy5nZXRSb3V0ZVJlZ2V4ID0gZ2V0Um91dGVSZWdleDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgdXJsXzEgPSByZXF1aXJlKFwidXJsXCIpO1xuLyoqXG4gKiBVdGlsc1xuICovXG5mdW5jdGlvbiBleGVjT25jZShmbikge1xuICAgIGxldCB1c2VkID0gZmFsc2U7XG4gICAgbGV0IHJlc3VsdDtcbiAgICByZXR1cm4gKCguLi5hcmdzKSA9PiB7XG4gICAgICAgIGlmICghdXNlZCkge1xuICAgICAgICAgICAgdXNlZCA9IHRydWU7XG4gICAgICAgICAgICByZXN1bHQgPSBmbiguLi5hcmdzKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0pO1xufVxuZXhwb3J0cy5leGVjT25jZSA9IGV4ZWNPbmNlO1xuZnVuY3Rpb24gZ2V0TG9jYXRpb25PcmlnaW4oKSB7XG4gICAgY29uc3QgeyBwcm90b2NvbCwgaG9zdG5hbWUsIHBvcnQgfSA9IHdpbmRvdy5sb2NhdGlvbjtcbiAgICByZXR1cm4gYCR7cHJvdG9jb2x9Ly8ke2hvc3RuYW1lfSR7cG9ydCA/ICc6JyArIHBvcnQgOiAnJ31gO1xufVxuZXhwb3J0cy5nZXRMb2NhdGlvbk9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luO1xuZnVuY3Rpb24gZ2V0VVJMKCkge1xuICAgIGNvbnN0IHsgaHJlZiB9ID0gd2luZG93LmxvY2F0aW9uO1xuICAgIGNvbnN0IG9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKCk7XG4gICAgcmV0dXJuIGhyZWYuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpO1xufVxuZXhwb3J0cy5nZXRVUkwgPSBnZXRVUkw7XG5mdW5jdGlvbiBnZXREaXNwbGF5TmFtZShDb21wb25lbnQpIHtcbiAgICByZXR1cm4gdHlwZW9mIENvbXBvbmVudCA9PT0gJ3N0cmluZydcbiAgICAgICAgPyBDb21wb25lbnRcbiAgICAgICAgOiBDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nO1xufVxuZXhwb3J0cy5nZXREaXNwbGF5TmFtZSA9IGdldERpc3BsYXlOYW1lO1xuZnVuY3Rpb24gaXNSZXNTZW50KHJlcykge1xuICAgIHJldHVybiByZXMuZmluaXNoZWQgfHwgcmVzLmhlYWRlcnNTZW50O1xufVxuZXhwb3J0cy5pc1Jlc1NlbnQgPSBpc1Jlc1NlbnQ7XG5hc3luYyBmdW5jdGlvbiBsb2FkR2V0SW5pdGlhbFByb3BzKEFwcCwgY3R4KSB7XG4gICAgdmFyIF9hO1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGlmICgoX2EgPSBBcHAucHJvdG90eXBlKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShBcHApfS5nZXRJbml0aWFsUHJvcHMoKVwiIGlzIGRlZmluZWQgYXMgYW4gaW5zdGFuY2UgbWV0aG9kIC0gdmlzaXQgaHR0cHM6Ly9lcnIuc2gvemVpdC9uZXh0LmpzL2dldC1pbml0aWFsLXByb3BzLWFzLWFuLWluc3RhbmNlLW1ldGhvZCBmb3IgbW9yZSBpbmZvcm1hdGlvbi5gO1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIHdoZW4gY2FsbGVkIGZyb20gX2FwcCBgY3R4YCBpcyBuZXN0ZWQgaW4gYGN0eGBcbiAgICBjb25zdCByZXMgPSBjdHgucmVzIHx8IChjdHguY3R4ICYmIGN0eC5jdHgucmVzKTtcbiAgICBpZiAoIUFwcC5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICAgICAgaWYgKGN0eC5jdHggJiYgY3R4LkNvbXBvbmVudCkge1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSBwYWdlUHJvcHMgZGVmYXVsdFxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBwYWdlUHJvcHM6IGF3YWl0IGxvYWRHZXRJbml0aWFsUHJvcHMoY3R4LkNvbXBvbmVudCwgY3R4LmN0eCksXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7fTtcbiAgICB9XG4gICAgY29uc3QgcHJvcHMgPSBhd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGN0eCk7XG4gICAgaWYgKHJlcyAmJiBpc1Jlc1NlbnQocmVzKSkge1xuICAgICAgICByZXR1cm4gcHJvcHM7XG4gICAgfVxuICAgIGlmICghcHJvcHMpIHtcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoQXBwKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBzaG91bGQgcmVzb2x2ZSB0byBhbiBvYmplY3QuIEJ1dCBmb3VuZCBcIiR7cHJvcHN9XCIgaW5zdGVhZC5gO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgfVxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGlmIChPYmplY3Qua2V5cyhwcm9wcykubGVuZ3RoID09PSAwICYmICFjdHguY3R4KSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYCR7Z2V0RGlzcGxheU5hbWUoQXBwKX0gcmV0dXJuZWQgYW4gZW1wdHkgb2JqZWN0IGZyb20gXFxgZ2V0SW5pdGlhbFByb3BzXFxgLiBUaGlzIGRlLW9wdGltaXplcyBhbmQgcHJldmVudHMgYXV0b21hdGljIHN0YXRpYyBvcHRpbWl6YXRpb24uIGh0dHBzOi8vZXJyLnNoL3plaXQvbmV4dC5qcy9lbXB0eS1vYmplY3QtZ2V0SW5pdGlhbFByb3BzYCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHByb3BzO1xufVxuZXhwb3J0cy5sb2FkR2V0SW5pdGlhbFByb3BzID0gbG9hZEdldEluaXRpYWxQcm9wcztcbmV4cG9ydHMudXJsT2JqZWN0S2V5cyA9IFtcbiAgICAnYXV0aCcsXG4gICAgJ2hhc2gnLFxuICAgICdob3N0JyxcbiAgICAnaG9zdG5hbWUnLFxuICAgICdocmVmJyxcbiAgICAncGF0aCcsXG4gICAgJ3BhdGhuYW1lJyxcbiAgICAncG9ydCcsXG4gICAgJ3Byb3RvY29sJyxcbiAgICAncXVlcnknLFxuICAgICdzZWFyY2gnLFxuICAgICdzbGFzaGVzJyxcbl07XG5mdW5jdGlvbiBmb3JtYXRXaXRoVmFsaWRhdGlvbih1cmwsIG9wdGlvbnMpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgICAgaWYgKHVybCAhPT0gbnVsbCAmJiB0eXBlb2YgdXJsID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgT2JqZWN0LmtleXModXJsKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGV4cG9ydHMudXJsT2JqZWN0S2V5cy5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgVW5rbm93biBrZXkgcGFzc2VkIHZpYSB1cmxPYmplY3QgaW50byB1cmwuZm9ybWF0OiAke2tleX1gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdXJsXzEuZm9ybWF0KHVybCwgb3B0aW9ucyk7XG59XG5leHBvcnRzLmZvcm1hdFdpdGhWYWxpZGF0aW9uID0gZm9ybWF0V2l0aFZhbGlkYXRpb247XG5leHBvcnRzLlNQID0gdHlwZW9mIHBlcmZvcm1hbmNlICE9PSAndW5kZWZpbmVkJztcbmV4cG9ydHMuU1QgPSBleHBvcnRzLlNQICYmXG4gICAgdHlwZW9mIHBlcmZvcm1hbmNlLm1hcmsgPT09ICdmdW5jdGlvbicgJiZcbiAgICB0eXBlb2YgcGVyZm9ybWFuY2UubWVhc3VyZSA9PT0gJ2Z1bmN0aW9uJztcbiIsIlwidXNlIHN0cmljdFwiO3ZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0PXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLkNvbnRhaW5lcj1Db250YWluZXI7ZXhwb3J0cy5jcmVhdGVVcmw9Y3JlYXRlVXJsO2V4cG9ydHMuZGVmYXVsdD12b2lkIDA7dmFyIF9yZWFjdD1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7dmFyIF91dGlscz1yZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzXCIpO2V4cG9ydHMuQXBwSW5pdGlhbFByb3BzPV91dGlscy5BcHBJbml0aWFsUHJvcHM7LyoqXG4gKiBgQXBwYCBjb21wb25lbnQgaXMgdXNlZCBmb3IgaW5pdGlhbGl6ZSBvZiBwYWdlcy4gSXQgYWxsb3dzIGZvciBvdmVyd3JpdGluZyBhbmQgZnVsbCBjb250cm9sIG9mIHRoZSBgcGFnZWAgaW5pdGlhbGl6YXRpb24uXG4gKiBUaGlzIGFsbG93cyBmb3Iga2VlcGluZyBzdGF0ZSBiZXR3ZWVuIG5hdmlnYXRpb24sIGN1c3RvbSBlcnJvciBoYW5kbGluZywgaW5qZWN0aW5nIGFkZGl0aW9uYWwgZGF0YS5cbiAqL2FzeW5jIGZ1bmN0aW9uIGFwcEdldEluaXRpYWxQcm9wcyhfcmVmKXt2YXJ7Q29tcG9uZW50LGN0eH09X3JlZjt2YXIgcGFnZVByb3BzPWF3YWl0KDAsX3V0aWxzLmxvYWRHZXRJbml0aWFsUHJvcHMpKENvbXBvbmVudCxjdHgpO3JldHVybntwYWdlUHJvcHN9O31jbGFzcyBBcHAgZXh0ZW5kcyBfcmVhY3QuZGVmYXVsdC5Db21wb25lbnR7Ly8gS2VwdCBoZXJlIGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eS5cbi8vIFdoZW4gc29tZW9uZSBlbmRlZCBBcHAgdGhleSBjb3VsZCBjYWxsIGBzdXBlci5jb21wb25lbnREaWRDYXRjaGAuXG4vLyBAZGVwcmVjYXRlZCBUaGlzIG1ldGhvZCBpcyBubyBsb25nZXIgbmVlZGVkLiBFcnJvcnMgYXJlIGNhdWdodCBhdCB0aGUgdG9wIGxldmVsXG5jb21wb25lbnREaWRDYXRjaChlcnJvcixfZXJyb3JJbmZvKXt0aHJvdyBlcnJvcjt9cmVuZGVyKCl7dmFye3JvdXRlcixDb21wb25lbnQscGFnZVByb3BzLF9fTl9TU0csX19OX1NTUH09dGhpcy5wcm9wcztyZXR1cm4vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChDb21wb25lbnQsT2JqZWN0LmFzc2lnbih7fSxwYWdlUHJvcHMsLy8gd2UgZG9uJ3QgYWRkIHRoZSBsZWdhY3kgVVJMIHByb3AgaWYgaXQncyB1c2luZyBub24tbGVnYWN5XG4vLyBtZXRob2RzIGxpa2UgZ2V0U3RhdGljUHJvcHMgYW5kIGdldFNlcnZlclNpZGVQcm9wc1xuIShfX05fU1NHfHxfX05fU1NQKT97dXJsOmNyZWF0ZVVybChyb3V0ZXIpfTp7fSkpO319ZXhwb3J0cy5kZWZhdWx0PUFwcDtBcHAub3JpZ0dldEluaXRpYWxQcm9wcz1hcHBHZXRJbml0aWFsUHJvcHM7QXBwLmdldEluaXRpYWxQcm9wcz1hcHBHZXRJbml0aWFsUHJvcHM7dmFyIHdhcm5Db250YWluZXI7dmFyIHdhcm5Vcmw7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe3dhcm5Db250YWluZXI9KDAsX3V0aWxzLmV4ZWNPbmNlKSgoKT0+e2NvbnNvbGUud2FybihcIldhcm5pbmc6IHRoZSBgQ29udGFpbmVyYCBpbiBgX2FwcGAgaGFzIGJlZW4gZGVwcmVjYXRlZCBhbmQgc2hvdWxkIGJlIHJlbW92ZWQuIGh0dHBzOi8vZXJyLnNoL3plaXQvbmV4dC5qcy9hcHAtY29udGFpbmVyLWRlcHJlY2F0ZWRcIik7fSk7d2FyblVybD0oMCxfdXRpbHMuZXhlY09uY2UpKCgpPT57Y29uc29sZS5lcnJvcihcIldhcm5pbmc6IHRoZSAndXJsJyBwcm9wZXJ0eSBpcyBkZXByZWNhdGVkLiBodHRwczovL2Vyci5zaC96ZWl0L25leHQuanMvdXJsLWRlcHJlY2F0ZWRcIik7fSk7fS8vIEBkZXByZWNhdGVkIG5vb3AgZm9yIG5vdyB1bnRpbCByZW1vdmFsXG5mdW5jdGlvbiBDb250YWluZXIocCl7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpd2FybkNvbnRhaW5lcigpO3JldHVybiBwLmNoaWxkcmVuO31mdW5jdGlvbiBjcmVhdGVVcmwocm91dGVyKXsvLyBUaGlzIGlzIHRvIG1ha2Ugc3VyZSB3ZSBkb24ndCByZWZlcmVuY2VzIHRoZSByb3V0ZXIgb2JqZWN0IGF0IGNhbGwgdGltZVxudmFye3BhdGhuYW1lLGFzUGF0aCxxdWVyeX09cm91dGVyO3JldHVybntnZXQgcXVlcnkoKXtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl3YXJuVXJsKCk7cmV0dXJuIHF1ZXJ5O30sZ2V0IHBhdGhuYW1lKCl7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpd2FyblVybCgpO3JldHVybiBwYXRobmFtZTt9LGdldCBhc1BhdGgoKXtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl3YXJuVXJsKCk7cmV0dXJuIGFzUGF0aDt9LGJhY2s6KCk9PntpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl3YXJuVXJsKCk7cm91dGVyLmJhY2soKTt9LHB1c2g6KHVybCxhcyk9PntpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl3YXJuVXJsKCk7cmV0dXJuIHJvdXRlci5wdXNoKHVybCxhcyk7fSxwdXNoVG86KGhyZWYsYXMpPT57aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpd2FyblVybCgpO3ZhciBwdXNoUm91dGU9YXM/aHJlZjonJzt2YXIgcHVzaFVybD1hc3x8aHJlZjtyZXR1cm4gcm91dGVyLnB1c2gocHVzaFJvdXRlLHB1c2hVcmwpO30scmVwbGFjZToodXJsLGFzKT0+e2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXdhcm5VcmwoKTtyZXR1cm4gcm91dGVyLnJlcGxhY2UodXJsLGFzKTt9LHJlcGxhY2VUbzooaHJlZixhcyk9PntpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl3YXJuVXJsKCk7dmFyIHJlcGxhY2VSb3V0ZT1hcz9ocmVmOicnO3ZhciByZXBsYWNlVXJsPWFzfHxocmVmO3JldHVybiByb3V0ZXIucmVwbGFjZShyZXBsYWNlUm91dGUscmVwbGFjZVVybCk7fX07fSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9saW5rJylcbiIsImltcG9ydCB3aXRoQXV0aCBmcm9tICcuLi9saWIvd2l0aEF1dGgnO1xyXG5pbXBvcnQgd2l0aExheW91dCBmcm9tICcuLi9saWIvd2l0aExheW91dCc7XHJcbmltcG9ydCB7IGxvYWRTdHJpcGUgfSBmcm9tICdAc3RyaXBlL3N0cmlwZS1qcyc7XHJcbmltcG9ydCB7IEVsZW1lbnRzIH0gZnJvbSAnQHN0cmlwZS9yZWFjdC1zdHJpcGUtanMnO1xyXG5cclxuaW1wb3J0IENoZWNrb3V0Rm9ybSBmcm9tICcuLi9jb21wb25lbnRzL0NoZWNrb3V0Rm9ybSc7XHJcblxyXG5jb25zdCBwcm9taXNlID0gbG9hZFN0cmlwZSgncGtfdGVzdF93MzNiMlRBak10UG9CNjZySmIwang0aEwwMENwM1RielFrJyk7XHJcblxyXG5jb25zdCBDaGVja291dCA9ICgpID0+IHtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdj5cclxuXHRcdFx0PGgyPkNoZWNrb3V0PC9oMj5cclxuXHRcdFx0PEVsZW1lbnRzIHN0cmlwZT17cHJvbWlzZX0+XHJcblx0XHRcdFx0PENoZWNrb3V0Rm9ybSAvPlxyXG5cdFx0XHQ8L0VsZW1lbnRzPlxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhBdXRoKHdpdGhMYXlvdXQoQ2hlY2tvdXQpLCB7IGxvZ2luUmVxdWlyZWQ6IHRydWUgfSk7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhcG9sbG8vcmVhY3QtaG9va3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFwb2xsby9yZWFjdC1zc3JcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHN0cmlwZS9yZWFjdC1zdHJpcGUtanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHN0cmlwZS9zdHJpcGUtanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXBvbGxvLWNhY2hlLWlubWVtb3J5XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFwb2xsby1jbGllbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXBvbGxvLWxpbmstaHR0cFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJncmFwaHFsLXRhZ1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpc29tb3JwaGljLXVuZmV0Y2hcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1jb29raWVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJucHJvZ3Jlc3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzLWV4YWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0c3RyYXBcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidXJsXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=