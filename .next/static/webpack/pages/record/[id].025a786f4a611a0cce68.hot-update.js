webpackHotUpdate_N_E("pages/record/[id]",{

/***/ "./components/layout/hos.js":
/*!**********************************!*\
  !*** ./components/layout/hos.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







var Nav = function Nav() {
  var handleLogout = function handleLogout() {
    localStorage.removeItem("hos_token");
    next_router__WEBPACK_IMPORTED_MODULE_6___default.a.push('/');
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, null, __jsx("title", {
    className: "jsx-105136494"
  }, "HOS"), __jsx("link", {
    href: "https://fonts.googleapis.com/icon?family=Material+Icons",
    rel: "stylesheet",
    className: "jsx-105136494"
  })), __jsx("nav", {
    className: "jsx-105136494" + " " + "indigo"
  }, __jsx("div", {
    className: "jsx-105136494" + " " + "nav-wrapper container"
  }, __jsx("a", {
    href: "/dashboard",
    className: "jsx-105136494" + " " + "brand-logo"
  }, "ChainMedic"), __jsx("ul", {
    id: "nav-mobile",
    className: "jsx-105136494" + " " + "right hide-on-med-and-down"
  }, __jsx("li", {
    className: "jsx-105136494"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "/dashboard"
  }, __jsx("a", {
    className: "jsx-105136494"
  }, "Dashboard"))), __jsx("li", {
    className: "jsx-105136494"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "/profile"
  }, __jsx("a", {
    className: "jsx-105136494"
  }, __jsx("i", {
    className: "jsx-105136494" + " " + "material-icons"
  }, "person")))), __jsx("li", {
    onClick: function onClick() {
      return handleLogout();
    },
    className: "jsx-105136494" + " " + "logout"
  }, __jsx("i", {
    className: "jsx-105136494" + " " + "material-icons"
  }, "power_settings_new"))))), __jsx(react_toastify__WEBPACK_IMPORTED_MODULE_3__["ToastContainer"], {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: true,
    newestOnTop: false,
    closeOnClick: true,
    rtl: false,
    pauseOnFocusLoss: true,
    draggable: true,
    pauseOnHover: true
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "105136494"
  }, ".logout.jsx-105136494{cursor:pointer;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQWJpb2R1biBNaWNoYWVsXFxEZXNrdG9wXFxjaGFpbm1lZGljLWZyb250XFxob3NcXGNvbXBvbmVudHNcXGxheW91dFxcaG9zLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRDWSxBQUdtQyxlQUVsQiIsImZpbGUiOiJDOlxcVXNlcnNcXEFiaW9kdW4gTWljaGFlbFxcRGVza3RvcFxcY2hhaW5tZWRpYy1mcm9udFxcaG9zXFxjb21wb25lbnRzXFxsYXlvdXRcXGhvcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IHsgVG9hc3RDb250YWluZXIgfSBmcm9tICdyZWFjdC10b2FzdGlmeSdcclxuaW1wb3J0IENvb2tpZXMgZnJvbSAnanMtY29va2llJ1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXHJcblxyXG5cclxuY29uc3QgTmF2ID0gKCk9PntcclxuICBcclxuXHJcbiAgICBjb25zdCBoYW5kbGVMb2dvdXQgPSAoKT0+e1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwiaG9zX3Rva2VuXCIpXHJcbiAgICAgICAgUm91dGVyLnB1c2goJy8nKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8PlxyXG4gICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICA8dGl0bGU+SE9TPC90aXRsZT5cclxuICAgICAgICAgICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vaWNvbj9mYW1pbHk9TWF0ZXJpYWwrSWNvbnNcIiByZWw9XCJzdHlsZXNoZWV0XCIvPlxyXG4gICAgICAgIDwvSGVhZD5cclxuICAgICAgICA8bmF2IGNsYXNzTmFtZT1cImluZGlnb1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdi13cmFwcGVyIGNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiL2Rhc2hib2FyZFwiIGNsYXNzTmFtZT1cImJyYW5kLWxvZ29cIj5DaGFpbk1lZGljPC9hPlxyXG4gICAgICAgICAgICA8dWwgaWQ9XCJuYXYtbW9iaWxlXCIgY2xhc3NOYW1lPVwicmlnaHQgaGlkZS1vbi1tZWQtYW5kLWRvd25cIj5cclxuICAgICAgICAgICAgICAgIDxsaT48TGluayBocmVmPVwiL2Rhc2hib2FyZFwiPjxhPkRhc2hib2FyZDwvYT48L0xpbms+PC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT48TGluayBocmVmPVwiL3Byb2ZpbGVcIj48YT48aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPnBlcnNvbjwvaT48L2E+PC9MaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGkgb25DbGljaz17KCk9PmhhbmRsZUxvZ291dCgpfSBjbGFzc05hbWU9XCJsb2dvdXRcIj48aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPnBvd2VyX3NldHRpbmdzX25ldzwvaT48L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L25hdj5cclxuICAgICAgICA8VG9hc3RDb250YWluZXJcclxuICAgICAgICAgICAgcG9zaXRpb249XCJib3R0b20tcmlnaHRcIlxyXG4gICAgICAgICAgICBhdXRvQ2xvc2U9ezUwMDB9XHJcbiAgICAgICAgICAgIGhpZGVQcm9ncmVzc0Jhcj17dHJ1ZX1cclxuICAgICAgICAgICAgbmV3ZXN0T25Ub3A9e2ZhbHNlfVxyXG4gICAgICAgICAgICBjbG9zZU9uQ2xpY2tcclxuICAgICAgICAgICAgcnRsPXtmYWxzZX1cclxuICAgICAgICAgICAgcGF1c2VPbkZvY3VzTG9zc1xyXG4gICAgICAgICAgICBkcmFnZ2FibGVcclxuICAgICAgICAgICAgcGF1c2VPbkhvdmVyXHJcbiAgICAgICAgICAgIC8+XHJcblxyXG48c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICAubG9nb3V0e1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjpwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfSAgICBcclxuICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXYiXX0= */\n/*@ sourceURL=C:\\\\Users\\\\Abiodun Michael\\\\Desktop\\\\chainmedic-front\\\\hos\\\\components\\\\layout\\\\hos.js */"));
};

_c = Nav;
/* harmony default export */ __webpack_exports__["default"] = (Nav);

var _c;

$RefreshReg$(_c, "Nav");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQvaG9zLmpzIl0sIm5hbWVzIjpbIk5hdiIsImhhbmRsZUxvZ291dCIsImxvY2FsU3RvcmFnZSIsInJlbW92ZUl0ZW0iLCJSb3V0ZXIiLCJwdXNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQSxJQUFNQSxHQUFHLEdBQUcsU0FBTkEsR0FBTSxHQUFJO0FBR1osTUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBSTtBQUNyQkMsZ0JBQVksQ0FBQ0MsVUFBYixDQUF3QixXQUF4QjtBQUNBQyxzREFBTSxDQUFDQyxJQUFQLENBQVksR0FBWjtBQUNILEdBSEQ7O0FBS0EsU0FDSSxtRUFDQSxNQUFDLGdEQUFELFFBQ0k7QUFBQTtBQUFBLFdBREosRUFFSTtBQUFNLFFBQUksRUFBQyx5REFBWDtBQUFxRSxPQUFHLEVBQUMsWUFBekU7QUFBQTtBQUFBLElBRkosQ0FEQSxFQUtBO0FBQUEsdUNBQWU7QUFBZixLQUNJO0FBQUEsdUNBQWU7QUFBZixLQUNBO0FBQUcsUUFBSSxFQUFDLFlBQVI7QUFBQSx1Q0FBK0I7QUFBL0Isa0JBREEsRUFFQTtBQUFJLE1BQUUsRUFBQyxZQUFQO0FBQUEsdUNBQThCO0FBQTlCLEtBQ0k7QUFBQTtBQUFBLEtBQUksTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQztBQUFYLEtBQXdCO0FBQUE7QUFBQSxpQkFBeEIsQ0FBSixDQURKLEVBRUk7QUFBQTtBQUFBLEtBQUksTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQztBQUFYLEtBQXNCO0FBQUE7QUFBQSxLQUFHO0FBQUEsdUNBQWE7QUFBYixjQUFILENBQXRCLENBQUosQ0FGSixFQUdJO0FBQUksV0FBTyxFQUFFO0FBQUEsYUFBSUosWUFBWSxFQUFoQjtBQUFBLEtBQWI7QUFBQSx1Q0FBMkM7QUFBM0MsS0FBb0Q7QUFBQSx1Q0FBYTtBQUFiLDBCQUFwRCxDQUhKLENBRkEsQ0FESixDQUxBLEVBZUEsTUFBQyw2REFBRDtBQUNJLFlBQVEsRUFBQyxjQURiO0FBRUksYUFBUyxFQUFFLElBRmY7QUFHSSxtQkFBZSxFQUFFLElBSHJCO0FBSUksZUFBVyxFQUFFLEtBSmpCO0FBS0ksZ0JBQVksTUFMaEI7QUFNSSxPQUFHLEVBQUUsS0FOVDtBQU9JLG9CQUFnQixNQVBwQjtBQVFJLGFBQVMsTUFSYjtBQVNJLGdCQUFZO0FBVGhCLElBZkE7QUFBQTtBQUFBLDY1RkFESjtBQW9DSCxDQTVDRDs7S0FBTUQsRztBQThDU0Esa0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcmVjb3JkL1tpZF0uMDI1YTc4NmY0YTYxMWEwY2NlNjguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IHsgVG9hc3RDb250YWluZXIgfSBmcm9tICdyZWFjdC10b2FzdGlmeSdcclxuaW1wb3J0IENvb2tpZXMgZnJvbSAnanMtY29va2llJ1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXHJcblxyXG5cclxuY29uc3QgTmF2ID0gKCk9PntcclxuICBcclxuXHJcbiAgICBjb25zdCBoYW5kbGVMb2dvdXQgPSAoKT0+e1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwiaG9zX3Rva2VuXCIpXHJcbiAgICAgICAgUm91dGVyLnB1c2goJy8nKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8PlxyXG4gICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICA8dGl0bGU+SE9TPC90aXRsZT5cclxuICAgICAgICAgICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vaWNvbj9mYW1pbHk9TWF0ZXJpYWwrSWNvbnNcIiByZWw9XCJzdHlsZXNoZWV0XCIvPlxyXG4gICAgICAgIDwvSGVhZD5cclxuICAgICAgICA8bmF2IGNsYXNzTmFtZT1cImluZGlnb1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdi13cmFwcGVyIGNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiL2Rhc2hib2FyZFwiIGNsYXNzTmFtZT1cImJyYW5kLWxvZ29cIj5DaGFpbk1lZGljPC9hPlxyXG4gICAgICAgICAgICA8dWwgaWQ9XCJuYXYtbW9iaWxlXCIgY2xhc3NOYW1lPVwicmlnaHQgaGlkZS1vbi1tZWQtYW5kLWRvd25cIj5cclxuICAgICAgICAgICAgICAgIDxsaT48TGluayBocmVmPVwiL2Rhc2hib2FyZFwiPjxhPkRhc2hib2FyZDwvYT48L0xpbms+PC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT48TGluayBocmVmPVwiL3Byb2ZpbGVcIj48YT48aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPnBlcnNvbjwvaT48L2E+PC9MaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGkgb25DbGljaz17KCk9PmhhbmRsZUxvZ291dCgpfSBjbGFzc05hbWU9XCJsb2dvdXRcIj48aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPnBvd2VyX3NldHRpbmdzX25ldzwvaT48L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L25hdj5cclxuICAgICAgICA8VG9hc3RDb250YWluZXJcclxuICAgICAgICAgICAgcG9zaXRpb249XCJib3R0b20tcmlnaHRcIlxyXG4gICAgICAgICAgICBhdXRvQ2xvc2U9ezUwMDB9XHJcbiAgICAgICAgICAgIGhpZGVQcm9ncmVzc0Jhcj17dHJ1ZX1cclxuICAgICAgICAgICAgbmV3ZXN0T25Ub3A9e2ZhbHNlfVxyXG4gICAgICAgICAgICBjbG9zZU9uQ2xpY2tcclxuICAgICAgICAgICAgcnRsPXtmYWxzZX1cclxuICAgICAgICAgICAgcGF1c2VPbkZvY3VzTG9zc1xyXG4gICAgICAgICAgICBkcmFnZ2FibGVcclxuICAgICAgICAgICAgcGF1c2VPbkhvdmVyXHJcbiAgICAgICAgICAgIC8+XHJcblxyXG48c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICAubG9nb3V0e1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjpwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfSAgICBcclxuICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXYiXSwic291cmNlUm9vdCI6IiJ9