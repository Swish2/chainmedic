webpackHotUpdate_N_E("pages/dashboard",{

/***/ "./pages/dashboard.js":
/*!****************************!*\
  !*** ./pages/dashboard.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_layout_hos__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/layout/hos */ "./components/layout/hos.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var _graphql_schema__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../graphql/schema */ "./graphql/schema.js");
/* harmony import */ var _components_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/modal */ "./components/modal/index.js");


var _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;







var Dashboard = function Dashboard() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      isOpen = _useState[0],
      setIsOpen = _useState[1];

  var _useQuery = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_5__["useQuery"])(_graphql_schema__WEBPACK_IMPORTED_MODULE_6__["GET_ACCESS_BY_HOSPITAL"]),
      data = _useQuery.data,
      loading = _useQuery.loading;

  var _useLazyQuery = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_5__["useLazyQuery"])(_graphql_schema__WEBPACK_IMPORTED_MODULE_6__["GET_USER_INFO_BY_ID"]),
      _useLazyQuery2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useLazyQuery, 2),
      getUserInfoById = _useLazyQuery2[0],
      _useLazyQuery2$ = _useLazyQuery2[1],
      userInfo = _useLazyQuery2$.data,
      loadingInfo = _useLazyQuery2$.loading;

  var handleUser = function handleUser(id) {
    getUserInfoById({
      variables: {
        id: id
      }
    });
    setIsOpen(true);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(_components_layout_hos__WEBPACK_IMPORTED_MODULE_3__["default"], null), __jsx("br", {
    className: "jsx-3301611693"
  }), __jsx("br", {
    className: "jsx-3301611693"
  }), __jsx("div", {
    className: "jsx-3301611693" + " " + "container"
  }, __jsx("h5", {
    className: "jsx-3301611693"
  }, "Patient list"), loading ? __jsx("p", {
    className: "jsx-3301611693"
  }, "Loading...") : __jsx("table", {
    className: "jsx-3301611693" + " " + "striped"
  }, __jsx("thead", {
    className: "jsx-3301611693"
  }, __jsx("tr", {
    className: "jsx-3301611693"
  }, __jsx("th", {
    className: "jsx-3301611693"
  }, "#"), __jsx("th", {
    className: "jsx-3301611693"
  }, "Customer Name"), __jsx("th", {
    className: "jsx-3301611693"
  }, "Email"), __jsx("th", {
    className: "jsx-3301611693"
  }, "Phone Number"), __jsx("th", {
    className: "jsx-3301611693"
  }, "..."))), __jsx("tbody", {
    className: "jsx-3301611693"
  }, data && data.getAccessByHospital ? data.getAccessByHospital.map(function (_ref, i) {
    var id = _ref.id,
        createdAt = _ref.createdAt,
        user = _ref.user;
    return __jsx("tr", {
      key: i,
      className: "jsx-3301611693"
    }, __jsx("td", {
      className: "jsx-3301611693"
    }, 1 + i, "."), __jsx("td", {
      onClick: function onClick() {
        return handleUser(user.id);
      },
      className: "jsx-3301611693" + " " + "user"
    }, user.name), __jsx("td", {
      className: "jsx-3301611693"
    }, user.email), __jsx("td", {
      className: "jsx-3301611693"
    }, user.phoneNumber), __jsx("td", {
      className: "jsx-3301611693"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      as: "/record/".concat(user.id, "_").concat(user.name.replace(/\s+/g, '-').toLowerCase()),
      href: "/record/[id]"
    }, __jsx("a", {
      className: "jsx-3301611693"
    }, __jsx("i", {
      className: "jsx-3301611693" + " " + "material-icons"
    }, "visibility")))));
  }) : null)), __jsx(_components_modal__WEBPACK_IMPORTED_MODULE_7__["Modal"], {
    title: "User Profile",
    isOpen: isOpen,
    close: function close() {
      return setIsOpen(false);
    },
    isLine: true,
    overflow: true,
    width: 30
  }, __jsx("div", {
    style: {
      width: "100%",
      paddingLeft: "30px"
    },
    className: "jsx-3301611693"
  }, __jsx("div", {
    className: "jsx-3301611693" + " " + "row"
  }, __jsx("div", {
    className: "jsx-3301611693" + " " + "col s12"
  }, loadingInfo ? "loading..." : __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("p", {
    className: "jsx-3301611693"
  }, __jsx("b", {
    className: "jsx-3301611693"
  }, "Name:"), __jsx("br", {
    className: "jsx-3301611693"
  }), userInfo && userInfo.getUserInfoById ? userInfo.getUserInfoById.name : ''), __jsx("p", {
    className: "jsx-3301611693"
  }, __jsx("b", {
    className: "jsx-3301611693"
  }, "Email:"), __jsx("br", {
    className: "jsx-3301611693"
  }), userInfo && userInfo.getUserInfoById ? userInfo.getUserInfoById.email : ''), __jsx("p", {
    className: "jsx-3301611693"
  }, __jsx("b", {
    className: "jsx-3301611693"
  }, "Phone:"), __jsx("br", {
    className: "jsx-3301611693"
  }), userInfo && userInfo.getUserInfoById ? userInfo.getUserInfoById.phoneNumber : ''), __jsx("p", {
    className: "jsx-3301611693"
  }, __jsx("b", {
    className: "jsx-3301611693"
  }, "Address:"), __jsx("br", {
    className: "jsx-3301611693"
  }), userInfo && userInfo.getUserInfoById ? userInfo.getUserInfoById.address : ''), __jsx("p", {
    className: "jsx-3301611693"
  }, __jsx("b", {
    className: "jsx-3301611693"
  }, "Date of Birth:"), __jsx("br", {
    className: "jsx-3301611693"
  }), userInfo && userInfo.getUserInfoById ? userInfo.getUserInfoById.dateOfBirth : ''), __jsx("p", {
    className: "jsx-3301611693"
  }, __jsx("b", {
    className: "jsx-3301611693"
  }, "Gender:"), __jsx("br", {
    className: "jsx-3301611693"
  }), userInfo && userInfo.getUserInfoById ? userInfo.getUserInfoById.gender : ''), __jsx("p", {
    className: "jsx-3301611693"
  }, __jsx("b", {
    className: "jsx-3301611693"
  }, "Marital Status:"), __jsx("br", {
    className: "jsx-3301611693"
  }), userInfo && userInfo.getUserInfoById ? userInfo.getUserInfoById.maritalStatus : ''), __jsx("p", {
    className: "jsx-3301611693"
  }, __jsx("b", {
    className: "jsx-3301611693"
  }, "Genotype:"), __jsx("br", {
    className: "jsx-3301611693"
  }), userInfo && userInfo.getUserInfoById ? userInfo.getUserInfoById.genotype : ''), __jsx("p", {
    className: "jsx-3301611693"
  }, __jsx("b", {
    className: "jsx-3301611693"
  }, "Blood Group:"), __jsx("br", {
    className: "jsx-3301611693"
  }), userInfo && userInfo.getUserInfoById ? userInfo.getUserInfoById.bloodGroup : ''))))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "3301611693"
  }, ".user.jsx-3301611693{-webkit-text-decoration:underline;text-decoration:underline;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQWJpb2R1biBNaWNoYWVsXFxEZXNrdG9wXFxjaGFpbm1lZGljLWZyb250XFxob3NcXHBhZ2VzXFxkYXNoYm9hcmQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUV3QixBQUc4Qyw0REFDN0IiLCJmaWxlIjoiQzpcXFVzZXJzXFxBYmlvZHVuIE1pY2hhZWxcXERlc2t0b3BcXGNoYWlubWVkaWMtZnJvbnRcXGhvc1xccGFnZXNcXGRhc2hib2FyZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgTmF2IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0L2hvcydcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQge3VzZVF1ZXJ5LCB1c2VMYXp5UXVlcnl9IGZyb20gJ0BhcG9sbG8vY2xpZW50J1xyXG5pbXBvcnQge0dFVF9BQ0NFU1NfQllfSE9TUElUQUwsR0VUX1VTRVJfSU5GT19CWV9JRH0gZnJvbSAnLi4vZ3JhcGhxbC9zY2hlbWEnXHJcbmltcG9ydCB7TW9kYWx9IGZyb20gJy4uL2NvbXBvbmVudHMvbW9kYWwnXHJcblxyXG5cclxuXHJcbmNvbnN0IERhc2hib2FyZCA9ICgpPT57XHJcbiAgICBjb25zdCBbaXNPcGVuLCBzZXRJc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgICBjb25zdCB7ZGF0YSxsb2FkaW5nfSA9IHVzZVF1ZXJ5KEdFVF9BQ0NFU1NfQllfSE9TUElUQUwpXHJcblxyXG4gICAgY29uc3QgW2dldFVzZXJJbmZvQnlJZCwge2RhdGE6dXNlckluZm8sIGxvYWRpbmc6bG9hZGluZ0luZm99XSA9IHVzZUxhenlRdWVyeShHRVRfVVNFUl9JTkZPX0JZX0lEKVxyXG5cclxuXHJcbiAgICAgICAgY29uc3QgaGFuZGxlVXNlciA9IChpZCk9PntcclxuICAgICAgICAgICAgZ2V0VXNlckluZm9CeUlkKHt2YXJpYWJsZXM6e2lkOmlkfX0pXHJcbiAgICAgICAgICAgIHNldElzT3Blbih0cnVlKVxyXG4gICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8TmF2IC8+XHJcbiAgICAgICAgICAgIDxiciAvPjxiciAvPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgPGg1PlBhdGllbnQgbGlzdDwvaDU+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxvYWRpbmcgPyA8cD5Mb2FkaW5nLi4uPC9wPjpcclxuICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJzdHJpcGVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0cj48dGg+IzwvdGg+PHRoPkN1c3RvbWVyIE5hbWU8L3RoPjx0aD5FbWFpbDwvdGg+PHRoPlBob25lIE51bWJlcjwvdGg+PHRoPi4uLjwvdGg+PC90cj5cclxuICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YSAmJiBkYXRhLmdldEFjY2Vzc0J5SG9zcGl0YWwgPyBkYXRhLmdldEFjY2Vzc0J5SG9zcGl0YWwubWFwKCh7aWQsY3JlYXRlZEF0LHVzZXJ9LGkpPT4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17aX0+PHRkPnsxK2l9LjwvdGQ+PHRkIGNsYXNzTmFtZT1cInVzZXJcIiBvbkNsaWNrPXsoKT0+aGFuZGxlVXNlcih1c2VyLmlkKX0+e3VzZXIubmFtZX08L3RkPjx0ZD57dXNlci5lbWFpbH08L3RkPjx0ZD57dXNlci5waG9uZU51bWJlcn08L3RkPjx0ZD48TGluayBhcz17YC9yZWNvcmQvJHt1c2VyLmlkfV8ke3VzZXIubmFtZS5yZXBsYWNlKC9cXHMrL2csICctJykudG9Mb3dlckNhc2UoKX1gfSBocmVmPVwiL3JlY29yZC9baWRdXCI+PGE+PGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj52aXNpYmlsaXR5PC9pPjwvYT48L0xpbms+PC90ZD48L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSk6bnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICA8TW9kYWwgdGl0bGU9XCJVc2VyIFByb2ZpbGVcIiBpc09wZW49e2lzT3Blbn0gXHJcbiAgICAgICAgICAgICAgICBjbG9zZT17KCk9PnNldElzT3BlbihmYWxzZSl9IFxyXG4gICAgICAgICAgICAgICAgaXNMaW5lPXt0cnVlfSBvdmVyZmxvdz17dHJ1ZX1cclxuICAgICAgICAgICAgICAgIHdpZHRoPXszMH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3dpZHRoOlwiMTAwJVwiLCBwYWRkaW5nTGVmdDpcIjMwcHhcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHMxMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nSW5mbyA/IFwibG9hZGluZy4uLlwiIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+PGI+TmFtZTo8L2I+PGJyIC8+e3VzZXJJbmZvICYmIHVzZXJJbmZvLmdldFVzZXJJbmZvQnlJZCA/IHVzZXJJbmZvLmdldFVzZXJJbmZvQnlJZC5uYW1lOicnfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD48Yj5FbWFpbDo8L2I+PGJyIC8+e3VzZXJJbmZvICYmIHVzZXJJbmZvLmdldFVzZXJJbmZvQnlJZCA/IHVzZXJJbmZvLmdldFVzZXJJbmZvQnlJZC5lbWFpbDonJ308L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+PGI+UGhvbmU6PC9iPjxiciAvPnt1c2VySW5mbyAmJiB1c2VySW5mby5nZXRVc2VySW5mb0J5SWQgPyB1c2VySW5mby5nZXRVc2VySW5mb0J5SWQucGhvbmVOdW1iZXI6Jyd9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPjxiPkFkZHJlc3M6PC9iPjxiciAvPnt1c2VySW5mbyAmJiB1c2VySW5mby5nZXRVc2VySW5mb0J5SWQgPyB1c2VySW5mby5nZXRVc2VySW5mb0J5SWQuYWRkcmVzczonJ308L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+PGI+RGF0ZSBvZiBCaXJ0aDo8L2I+PGJyIC8+e3VzZXJJbmZvICYmIHVzZXJJbmZvLmdldFVzZXJJbmZvQnlJZCA/IHVzZXJJbmZvLmdldFVzZXJJbmZvQnlJZC5kYXRlT2ZCaXJ0aDonJ308L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+PGI+R2VuZGVyOjwvYj48YnIgLz57dXNlckluZm8gJiYgdXNlckluZm8uZ2V0VXNlckluZm9CeUlkID8gdXNlckluZm8uZ2V0VXNlckluZm9CeUlkLmdlbmRlcjonJ308L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+PGI+TWFyaXRhbCBTdGF0dXM6PC9iPjxiciAvPnt1c2VySW5mbyAmJiB1c2VySW5mby5nZXRVc2VySW5mb0J5SWQgPyB1c2VySW5mby5nZXRVc2VySW5mb0J5SWQubWFyaXRhbFN0YXR1czonJ308L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+PGI+R2Vub3R5cGU6PC9iPjxiciAvPnt1c2VySW5mbyAmJiB1c2VySW5mby5nZXRVc2VySW5mb0J5SWQgPyB1c2VySW5mby5nZXRVc2VySW5mb0J5SWQuZ2Vub3R5cGU6Jyd9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPjxiPkJsb29kIEdyb3VwOjwvYj48YnIgLz57dXNlckluZm8gJiYgdXNlckluZm8uZ2V0VXNlckluZm9CeUlkID8gdXNlckluZm8uZ2V0VXNlckluZm9CeUlkLmJsb29kR3JvdXA6Jyd9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L01vZGFsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgIC51c2Vye1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjp1bmRlcmxpbmU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEYXNoYm9hcmQiXX0= */\n/*@ sourceURL=C:\\\\Users\\\\Abiodun Michael\\\\Desktop\\\\chainmedic-front\\\\hos\\\\pages\\\\dashboard.js */"));
};

_s(Dashboard, "xo3lC3ABEFB1aS5h14VMVVEKZH4=", false, function () {
  return [_apollo_client__WEBPACK_IMPORTED_MODULE_5__["useQuery"], _apollo_client__WEBPACK_IMPORTED_MODULE_5__["useLazyQuery"]];
});

_c = Dashboard;
/* harmony default export */ __webpack_exports__["default"] = (Dashboard);

var _c;

$RefreshReg$(_c, "Dashboard");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZGFzaGJvYXJkLmpzIl0sIm5hbWVzIjpbIkRhc2hib2FyZCIsInVzZVN0YXRlIiwiaXNPcGVuIiwic2V0SXNPcGVuIiwidXNlUXVlcnkiLCJHRVRfQUNDRVNTX0JZX0hPU1BJVEFMIiwiZGF0YSIsImxvYWRpbmciLCJ1c2VMYXp5UXVlcnkiLCJHRVRfVVNFUl9JTkZPX0JZX0lEIiwiZ2V0VXNlckluZm9CeUlkIiwidXNlckluZm8iLCJsb2FkaW5nSW5mbyIsImhhbmRsZVVzZXIiLCJpZCIsInZhcmlhYmxlcyIsImdldEFjY2Vzc0J5SG9zcGl0YWwiLCJtYXAiLCJpIiwiY3JlYXRlZEF0IiwidXNlciIsIm5hbWUiLCJlbWFpbCIsInBob25lTnVtYmVyIiwicmVwbGFjZSIsInRvTG93ZXJDYXNlIiwid2lkdGgiLCJwYWRkaW5nTGVmdCIsImFkZHJlc3MiLCJkYXRlT2ZCaXJ0aCIsImdlbmRlciIsIm1hcml0YWxTdGF0dXMiLCJnZW5vdHlwZSIsImJsb29kR3JvdXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBSUEsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBSTtBQUFBOztBQUFBLGtCQUNVQyxzREFBUSxDQUFDLEtBQUQsQ0FEbEI7QUFBQSxNQUNYQyxNQURXO0FBQUEsTUFDSEMsU0FERzs7QUFBQSxrQkFFS0MsK0RBQVEsQ0FBQ0Msc0VBQUQsQ0FGYjtBQUFBLE1BRVhDLElBRlcsYUFFWEEsSUFGVztBQUFBLE1BRU5DLE9BRk0sYUFFTkEsT0FGTTs7QUFBQSxzQkFJOENDLG1FQUFZLENBQUNDLG1FQUFELENBSjFEO0FBQUE7QUFBQSxNQUlYQyxlQUpXO0FBQUE7QUFBQSxNQUlZQyxRQUpaLG1CQUlPTCxJQUpQO0FBQUEsTUFJOEJNLFdBSjlCLG1CQUlzQkwsT0FKdEI7O0FBT2QsTUFBTU0sVUFBVSxHQUFHLFNBQWJB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QUE7QUFBQSxLQUFHO0FBQUE7QUFBQSxvQkFBSCxFQUFzQjtBQUFBO0FBQUEsSUFBdEIsRUFBNkJyQixRQUFRLElBQUlBLFFBQVEsQ0FBQ0QsZUFBckIsR0FBdUNDLFFBQVEsQ0FBQ0QsZUFBVCxDQUF5QnVCLFVBQWhFLEdBQTJFLEVBQXhHLENBVEosQ0FISixDQURKLENBREEsQ0FKSCxDQWxCTCxDQUpKO0FBQUE7QUFBQSx3K0xBREo7QUEwREgsQ0F4RUQ7O0dBQU1qQyxTO1VBRXFCSSx1RCxFQUV5Q0ksMkQ7OztLQUo5RFIsUztBQTBFU0Esd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZGFzaGJvYXJkLjM5M2QzYjllNWI3ZjhkMTJiNTEzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse3VzZVN0YXRlfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IE5hdiBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dC9ob3MnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHt1c2VRdWVyeSwgdXNlTGF6eVF1ZXJ5fSBmcm9tICdAYXBvbGxvL2NsaWVudCdcclxuaW1wb3J0IHtHRVRfQUNDRVNTX0JZX0hPU1BJVEFMLEdFVF9VU0VSX0lORk9fQllfSUR9IGZyb20gJy4uL2dyYXBocWwvc2NoZW1hJ1xyXG5pbXBvcnQge01vZGFsfSBmcm9tICcuLi9jb21wb25lbnRzL21vZGFsJ1xyXG5cclxuXHJcblxyXG5jb25zdCBEYXNoYm9hcmQgPSAoKT0+e1xyXG4gICAgY29uc3QgW2lzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gICAgY29uc3Qge2RhdGEsbG9hZGluZ30gPSB1c2VRdWVyeShHRVRfQUNDRVNTX0JZX0hPU1BJVEFMKVxyXG5cclxuICAgIGNvbnN0IFtnZXRVc2VySW5mb0J5SWQsIHtkYXRhOnVzZXJJbmZvLCBsb2FkaW5nOmxvYWRpbmdJbmZvfV0gPSB1c2VMYXp5UXVlcnkoR0VUX1VTRVJfSU5GT19CWV9JRClcclxuXHJcblxyXG4gICAgICAgIGNvbnN0IGhhbmRsZVVzZXIgPSAoaWQpPT57XHJcbiAgICAgICAgICAgIGdldFVzZXJJbmZvQnlJZCh7dmFyaWFibGVzOntpZDppZH19KVxyXG4gICAgICAgICAgICBzZXRJc09wZW4odHJ1ZSlcclxuICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPE5hdiAvPlxyXG4gICAgICAgICAgICA8YnIgLz48YnIgLz5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxoNT5QYXRpZW50IGxpc3Q8L2g1PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsb2FkaW5nID8gPHA+TG9hZGluZy4uLjwvcD46XHJcbiAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwic3RyaXBlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICA8dHI+PHRoPiM8L3RoPjx0aD5DdXN0b21lciBOYW1lPC90aD48dGg+RW1haWw8L3RoPjx0aD5QaG9uZSBOdW1iZXI8L3RoPjx0aD4uLi48L3RoPjwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEgJiYgZGF0YS5nZXRBY2Nlc3NCeUhvc3BpdGFsID8gZGF0YS5nZXRBY2Nlc3NCeUhvc3BpdGFsLm1hcCgoe2lkLGNyZWF0ZWRBdCx1c2VyfSxpKT0+KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e2l9Pjx0ZD57MStpfS48L3RkPjx0ZCBjbGFzc05hbWU9XCJ1c2VyXCIgb25DbGljaz17KCk9PmhhbmRsZVVzZXIodXNlci5pZCl9Pnt1c2VyLm5hbWV9PC90ZD48dGQ+e3VzZXIuZW1haWx9PC90ZD48dGQ+e3VzZXIucGhvbmVOdW1iZXJ9PC90ZD48dGQ+PExpbmsgYXM9e2AvcmVjb3JkLyR7dXNlci5pZH1fJHt1c2VyLm5hbWUucmVwbGFjZSgvXFxzKy9nLCAnLScpLnRvTG93ZXJDYXNlKCl9YH0gaHJlZj1cIi9yZWNvcmQvW2lkXVwiPjxhPjxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+dmlzaWJpbGl0eTwvaT48L2E+PC9MaW5rPjwvdGQ+PC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpOm51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgPE1vZGFsIHRpdGxlPVwiVXNlciBQcm9maWxlXCIgaXNPcGVuPXtpc09wZW59IFxyXG4gICAgICAgICAgICAgICAgY2xvc2U9eygpPT5zZXRJc09wZW4oZmFsc2UpfSBcclxuICAgICAgICAgICAgICAgIGlzTGluZT17dHJ1ZX0gb3ZlcmZsb3c9e3RydWV9XHJcbiAgICAgICAgICAgICAgICB3aWR0aD17MzB9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3t3aWR0aDpcIjEwMCVcIiwgcGFkZGluZ0xlZnQ6XCIzMHB4XCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBzMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZ0luZm8gPyBcImxvYWRpbmcuLi5cIiA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPjxiPk5hbWU6PC9iPjxiciAvPnt1c2VySW5mbyAmJiB1c2VySW5mby5nZXRVc2VySW5mb0J5SWQgPyB1c2VySW5mby5nZXRVc2VySW5mb0J5SWQubmFtZTonJ308L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+PGI+RW1haWw6PC9iPjxiciAvPnt1c2VySW5mbyAmJiB1c2VySW5mby5nZXRVc2VySW5mb0J5SWQgPyB1c2VySW5mby5nZXRVc2VySW5mb0J5SWQuZW1haWw6Jyd9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPjxiPlBob25lOjwvYj48YnIgLz57dXNlckluZm8gJiYgdXNlckluZm8uZ2V0VXNlckluZm9CeUlkID8gdXNlckluZm8uZ2V0VXNlckluZm9CeUlkLnBob25lTnVtYmVyOicnfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD48Yj5BZGRyZXNzOjwvYj48YnIgLz57dXNlckluZm8gJiYgdXNlckluZm8uZ2V0VXNlckluZm9CeUlkID8gdXNlckluZm8uZ2V0VXNlckluZm9CeUlkLmFkZHJlc3M6Jyd9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPjxiPkRhdGUgb2YgQmlydGg6PC9iPjxiciAvPnt1c2VySW5mbyAmJiB1c2VySW5mby5nZXRVc2VySW5mb0J5SWQgPyB1c2VySW5mby5nZXRVc2VySW5mb0J5SWQuZGF0ZU9mQmlydGg6Jyd9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPjxiPkdlbmRlcjo8L2I+PGJyIC8+e3VzZXJJbmZvICYmIHVzZXJJbmZvLmdldFVzZXJJbmZvQnlJZCA/IHVzZXJJbmZvLmdldFVzZXJJbmZvQnlJZC5nZW5kZXI6Jyd9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPjxiPk1hcml0YWwgU3RhdHVzOjwvYj48YnIgLz57dXNlckluZm8gJiYgdXNlckluZm8uZ2V0VXNlckluZm9CeUlkID8gdXNlckluZm8uZ2V0VXNlckluZm9CeUlkLm1hcml0YWxTdGF0dXM6Jyd9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPjxiPkdlbm90eXBlOjwvYj48YnIgLz57dXNlckluZm8gJiYgdXNlckluZm8uZ2V0VXNlckluZm9CeUlkID8gdXNlckluZm8uZ2V0VXNlckluZm9CeUlkLmdlbm90eXBlOicnfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD48Yj5CbG9vZCBHcm91cDo8L2I+PGJyIC8+e3VzZXJJbmZvICYmIHVzZXJJbmZvLmdldFVzZXJJbmZvQnlJZCA/IHVzZXJJbmZvLmdldFVzZXJJbmZvQnlJZC5ibG9vZEdyb3VwOicnfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9Nb2RhbD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICAudXNlcntcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246dW5kZXJsaW5lO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGFzaGJvYXJkIl0sInNvdXJjZVJvb3QiOiIifQ==