webpackHotUpdate_N_E("pages/record/[id]",{

/***/ "./pages/record/[id].js":
/*!******************************!*\
  !*** ./pages/record/[id].js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_layout_hos__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/layout/hos */ "./components/layout/hos.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/modal */ "./components/modal/index.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var _graphql_schema__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../graphql/schema */ "./graphql/schema.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.js");



var _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;









var M = true ? __webpack_require__(/*! materialize-css */ "./node_modules/materialize-css/dist/js/materialize.js") : undefined;

var Index = function Index() {
  _s();

  var _ref3;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      isOpen = _useState[0],
      setIsOpen = _useState[1];

  var _useRouter = Object(next_router__WEBPACK_IMPORTED_MODULE_9__["useRouter"])(),
      query = _useRouter.query;

  var id = query.id.split("_");

  var _useQuery = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_7__["useQuery"])(_graphql_schema__WEBPACK_IMPORTED_MODULE_8__["GET_ALL_RECORD_BY_USER_ID"], {
    variables: {
      userId: parseInt(id[0])
    }
  }),
      data = _useQuery.data,
      loading = _useQuery.loading,
      refetch = _useQuery.refetch;

  var _useMutation = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_7__["useMutation"])(_graphql_schema__WEBPACK_IMPORTED_MODULE_8__["CREATE_RECORD"], {
    onCompleted: function onCompleted(_ref) {
      var createRecord = _ref.createRecord;

      if (createRecord.status) {
        refetch();
        react_toastify__WEBPACK_IMPORTED_MODULE_11__["toast"].success(createRecord.message);
      } else {
        react_toastify__WEBPACK_IMPORTED_MODULE_11__["toast"].error(createRecord.message);
      }
    },
    onError: function onError(errors) {
      console.log(errors);
    }
  }),
      _useMutation2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useMutation, 1),
      createRecord = _useMutation2[0];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    M.AutoInit();
  });
  return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx(_components_layout_hos__WEBPACK_IMPORTED_MODULE_4__["default"], null), __jsx("br", {
    className: "jsx-682678643"
  }), __jsx("br", {
    className: "jsx-682678643"
  }), __jsx("div", {
    className: "jsx-682678643" + " " + "container"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "/dashboard"
  }, __jsx("a", {
    className: "jsx-682678643" + " " + "btn blue"
  }, "Patient Lists")), __jsx("h5", {
    className: "jsx-682678643"
  }, id[1].replace("-", " ").toUpperCase(), "'s Medical Records ", __jsx("button", {
    onClick: function onClick() {
      return setIsOpen(true);
    },
    className: "jsx-682678643" + " " + "btn right indigo"
  }, "Add Record")), __jsx("br", {
    className: "jsx-682678643"
  }), loading ? __jsx("p", {
    className: "jsx-682678643"
  }, "Loading...") : __jsx("table", {
    className: "jsx-682678643" + " " + "striped"
  }, __jsx("thead", {
    className: "jsx-682678643"
  }, __jsx("tr", {
    className: "jsx-682678643"
  }, __jsx("th", {
    className: "jsx-682678643"
  }, "#"), __jsx("th", {
    className: "jsx-682678643"
  }, "Hospital"), __jsx("th", {
    className: "jsx-682678643"
  }, "Phone"), __jsx("th", {
    className: "jsx-682678643"
  }, "Address"), __jsx("th", {
    className: "jsx-682678643"
  }, "Created"), __jsx("th", {
    className: "jsx-682678643"
  }, "..."))), __jsx("tbody", {
    className: "jsx-682678643"
  }, data ? data.getAllRecordByUserId.map(function (_ref2, i) {
    var transId = _ref2.transId,
        hospital = _ref2.hospital,
        createdAt = _ref2.createdAt;
    return __jsx("tr", {
      className: "jsx-682678643"
    }, __jsx("td", {
      className: "jsx-682678643"
    }, 1 + i, "."), __jsx("td", {
      className: "jsx-682678643"
    }, hospital.name), __jsx("td", {
      className: "jsx-682678643"
    }, hospital.phoneNumber), __jsx("td", {
      className: "jsx-682678643"
    }, hospital.address), __jsx("td", {
      className: "jsx-682678643"
    }, createdAt), __jsx("td", {
      className: "jsx-682678643"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
      href: "/info/[tid]",
      as: "/info/".concat(transId)
    }, __jsx("a", {
      className: "jsx-682678643"
    }, __jsx("i", {
      className: "jsx-682678643" + " " + "material-icons"
    }, "visibility")))));
  }) : null))), __jsx(_components_modal__WEBPACK_IMPORTED_MODULE_6__["Modal"], {
    title: "Create Record",
    isOpen: isOpen,
    close: function close() {
      return setIsOpen(false);
    },
    isLine: true,
    overflow: true
  }, __jsx(formik__WEBPACK_IMPORTED_MODULE_10__["Formik"], {
    enableReinitialize: true,
    initialValues: (_ref3 = {
      diagnosis: "",
      hypertensive: '',
      ulcer: "",
      bp: '',
      diabetics: '',
      allergies: '',
      smoke: '',
      drink: '',
      surgery: ''
    }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref3, "allergies", ''), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref3, "admission", ''), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref3, "medication", ''), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref3, "kids", 0), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref3, "mode", ""), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref3, "userId", parseInt(id[0])), _ref3),
    onSubmit: function onSubmit(input, _ref4) {
      var setSubmitting = _ref4.setSubmitting,
          resetForm = _ref4.resetForm;
      createRecord({
        variables: input
      }).then(function (res) {
        if (res.data.createRecord.status) {
          resetForm();
          setIsOpen(false);
        }

        setSubmitting(false);
      });
    }
  }, function (_ref5) {
    var handleSubmit = _ref5.handleSubmit,
        isSubmitting = _ref5.isSubmitting,
        values = _ref5.values;
    return __jsx(formik__WEBPACK_IMPORTED_MODULE_10__["Form"], null, __jsx("div", {
      style: {
        width: "100%"
      },
      className: "jsx-682678643"
    }, __jsx("div", {
      className: "jsx-682678643" + " " + "row"
    }, __jsx("div", {
      className: "jsx-682678643" + " " + "col s12 m6 input-field"
    }, __jsx(formik__WEBPACK_IMPORTED_MODULE_10__["Field"], {
      type: "text",
      name: "bp"
    }), __jsx("label", {
      htmlFor: "bp",
      className: "jsx-682678643"
    }, "Blood Pressure")), __jsx("div", {
      className: "jsx-682678643" + " " + "col s12 m6 input-field"
    }, __jsx(formik__WEBPACK_IMPORTED_MODULE_10__["Field"], {
      type: "text",
      name: "diabetics"
    }), __jsx("label", {
      htmlFor: "diabetics",
      className: "jsx-682678643"
    }, "Diabetics History")), __jsx("div", {
      className: "jsx-682678643" + " " + "col s12 m6 input-field"
    }, __jsx(formik__WEBPACK_IMPORTED_MODULE_10__["Field"], {
      type: "text",
      name: "allergies"
    }), __jsx("label", {
      htmlFor: "allergies",
      className: "jsx-682678643"
    }, "Drug Allergies")), __jsx("div", {
      className: "jsx-682678643" + " " + "col s12 m6 input-field"
    }, __jsx(formik__WEBPACK_IMPORTED_MODULE_10__["Field"], {
      as: "select",
      name: "ulcer"
    }, __jsx("option", {
      value: "",
      disabled: true,
      selected: true,
      className: "jsx-682678643"
    }, "Do you have Ulcer ?"), __jsx("option", {
      value: "Yes",
      className: "jsx-682678643"
    }, "Yes"), __jsx("option", {
      value: "No",
      className: "jsx-682678643"
    }, "No"))), __jsx("div", {
      className: "jsx-682678643" + " " + "col s12 m6 input-field"
    }, __jsx(formik__WEBPACK_IMPORTED_MODULE_10__["Field"], {
      as: "select",
      name: "hypertensive"
    }, __jsx("option", {
      value: "",
      disabled: true,
      selected: true,
      className: "jsx-682678643"
    }, "Are you hypertensive ?"), __jsx("option", {
      value: "Yes",
      className: "jsx-682678643"
    }, "Yes"), __jsx("option", {
      value: "No",
      className: "jsx-682678643"
    }, "No"))), __jsx("div", {
      className: "jsx-682678643" + " " + "col s12 m6 input-field"
    }, __jsx(formik__WEBPACK_IMPORTED_MODULE_10__["Field"], {
      as: "select",
      name: "smoke"
    }, __jsx("option", {
      value: "",
      disabled: true,
      selected: true,
      className: "jsx-682678643"
    }, "Do you smoke ?"), __jsx("option", {
      value: "Yes",
      className: "jsx-682678643"
    }, "Yes"), __jsx("option", {
      value: "No",
      className: "jsx-682678643"
    }, "No"))), __jsx("div", {
      className: "jsx-682678643" + " " + "col s12 m6 input-field"
    }, __jsx(formik__WEBPACK_IMPORTED_MODULE_10__["Field"], {
      as: "select",
      name: "drink"
    }, __jsx("option", {
      value: "",
      disabled: true,
      selected: true,
      className: "jsx-682678643"
    }, "Do you Drink ?"), __jsx("option", {
      value: "Yes",
      className: "jsx-682678643"
    }, "Yes"), __jsx("option", {
      value: "No",
      className: "jsx-682678643"
    }, "No"), __jsx("option", {
      value: "Occasionally",
      className: "jsx-682678643"
    }, "Occasionally"))), __jsx("div", {
      className: "jsx-682678643" + " " + "col s12 m6 input-field"
    }, __jsx(formik__WEBPACK_IMPORTED_MODULE_10__["Field"], {
      type: "text",
      name: "surgery"
    }), __jsx("label", {
      htmlFor: "surgery",
      className: "jsx-682678643"
    }, "Surgery History")), __jsx("div", {
      className: "jsx-682678643" + " " + "col s12 m6 input-field"
    }, __jsx(formik__WEBPACK_IMPORTED_MODULE_10__["Field"], {
      type: "text",
      name: "admission"
    }), __jsx("label", {
      htmlFor: "admission",
      className: "jsx-682678643"
    }, "Admission History")), __jsx("div", {
      className: "jsx-682678643" + " " + "col s12 m6 input-field"
    }, __jsx(formik__WEBPACK_IMPORTED_MODULE_10__["Field"], {
      type: "text",
      name: "medication"
    }), __jsx("label", {
      htmlFor: "medication",
      className: "jsx-682678643"
    }, "Current Medication")), __jsx("div", {
      className: "jsx-682678643" + " " + "col s12 m6 input-field"
    }, __jsx(formik__WEBPACK_IMPORTED_MODULE_10__["Field"], {
      type: "text",
      name: "diagnosis"
    }), __jsx("label", {
      htmlFor: "diagnosis",
      className: "jsx-682678643"
    }, "Current Diagnosis")), __jsx("div", {
      style: {
        paddingLeft: "50px",
        fontWeight: "600"
      },
      className: "jsx-682678643" + " " + "col s12 m6"
    }, __jsx("p", {
      className: "jsx-682678643"
    }, "For Female Patients")), __jsx("div", {
      className: "jsx-682678643" + " " + "col s12 m6 input-field"
    }, __jsx(formik__WEBPACK_IMPORTED_MODULE_10__["Field"], {
      type: "number",
      name: "kids"
    }), __jsx("label", {
      htmlFor: "kids",
      className: "jsx-682678643"
    }, "Number of kids")), __jsx("div", {
      className: "jsx-682678643" + " " + "col s12 m6 input-field"
    }, __jsx(formik__WEBPACK_IMPORTED_MODULE_10__["Field"], {
      as: "select",
      name: "mode",
      defaultValue: " "
    }, __jsx("option", {
      value: "",
      disabled: true,
      selected: true,
      className: "jsx-682678643"
    }, "Mode of Child Birth"), __jsx("option", {
      value: "CS",
      className: "jsx-682678643"
    }, "CS"), __jsx("option", {
      value: "Normal",
      className: "jsx-682678643"
    }, "Normal")), __jsx("br", {
      className: "jsx-682678643"
    }), __jsx("br", {
      className: "jsx-682678643"
    }), __jsx("button", {
      disabled: isSubmitting,
      onClick: handleSubmit,
      className: "jsx-682678643" + " " + "btn indigo btn-medium"
    }, isSubmitting ? "Please wait..." : "Submit")))));
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "682678643"
  }, ".input-field.jsx-682678643{margin-left:40px !important;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQWJpb2R1biBNaWNoYWVsXFxEZXNrdG9wXFxjaGFpbm1lZGljLWZyb250XFxob3NcXHBhZ2VzXFxyZWNvcmRcXFtpZF0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUt3QixBQUdnRCw0QkFDL0IiLCJmaWxlIjoiQzpcXFVzZXJzXFxBYmlvZHVuIE1pY2hhZWxcXERlc2t0b3BcXGNoYWlubWVkaWMtZnJvbnRcXGhvc1xccGFnZXNcXHJlY29yZFxcW2lkXS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlU3RhdGUsdXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IE5hdiBmcm9tICcuLi8uLi9jb21wb25lbnRzL2xheW91dC9ob3MnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHtNb2RhbH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9tb2RhbCdcclxuaW1wb3J0IHt1c2VRdWVyeSx1c2VNdXRhdGlvbn0gZnJvbSAnQGFwb2xsby9jbGllbnQnXHJcbmltcG9ydCB7R0VUX0FMTF9SRUNPUkRfQllfVVNFUl9JRCxDUkVBVEVfUkVDT1JEfSBmcm9tICcuLi8uLi9ncmFwaHFsL3NjaGVtYSdcclxuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQge0Zvcm1payxGb3JtLEZpZWxkfSBmcm9tICdmb3JtaWsnXHJcbmltcG9ydCB7dG9hc3R9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5J1xyXG5jb25zdCBNID0gdHlwZW9mIHdpbmRvdyAhPT1cInVuZGVmaW5lZFwiID8gcmVxdWlyZShcIm1hdGVyaWFsaXplLWNzc1wiKTonJ1xyXG5cclxuXHJcblxyXG5jb25zdCBJbmRleCA9ICgpPT57XHJcbiAgICBjb25zdCBbaXNPcGVuLHNldElzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICAgIGNvbnN0IHtxdWVyeX0gPSB1c2VSb3V0ZXIoKVxyXG5cclxuICAgIGNvbnN0IGlkID0gcXVlcnkuaWQuc3BsaXQoXCJfXCIpXHJcblxyXG4gICAgXHJcbiAgIGNvbnN0IHtkYXRhLGxvYWRpbmcscmVmZXRjaH0gPSAgdXNlUXVlcnkoR0VUX0FMTF9SRUNPUkRfQllfVVNFUl9JRCx7dmFyaWFibGVzOnt1c2VySWQ6cGFyc2VJbnQoaWRbMF0pfX0pXHJcblxyXG4gICBjb25zdCBbY3JlYXRlUmVjb3JkXSA9IHVzZU11dGF0aW9uKENSRUFURV9SRUNPUkQse1xyXG4gICAgICAgb25Db21wbGV0ZWQoe2NyZWF0ZVJlY29yZH0pe1xyXG4gICAgICAgIGlmKGNyZWF0ZVJlY29yZC5zdGF0dXMpe1xyXG4gICAgICAgICAgICByZWZldGNoKClcclxuICAgICAgICAgICAgdG9hc3Quc3VjY2VzcyhjcmVhdGVSZWNvcmQubWVzc2FnZSlcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdG9hc3QuZXJyb3IoY3JlYXRlUmVjb3JkLm1lc3NhZ2UpXHJcbiAgICAgICAgfVxyXG4gICAgICAgfSxcclxuICAgICAgIG9uRXJyb3IoZXJyb3JzKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcnMpXHJcbiAgICAgICB9XHJcbiAgIH0pXHJcblxyXG5cclxuICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICBNLkF1dG9Jbml0KClcclxuICAgfSlcclxuXHJcbnJldHVybihcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8TmF2IC8+XHJcbiAgICAgICAgICAgIDxiciAvPjxiciAvPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZGFzaGJvYXJkXCI+PGEgY2xhc3NOYW1lPVwiYnRuIGJsdWVcIj5QYXRpZW50IExpc3RzPC9hPjwvTGluaz5cclxuICAgICAgICAgICAgPGg1PntpZFsxXS5yZXBsYWNlKFwiLVwiLFwiIFwiKS50b1VwcGVyQ2FzZSgpfSdzIE1lZGljYWwgUmVjb3JkcyA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biByaWdodCBpbmRpZ29cIiBvbkNsaWNrPXsoKT0+c2V0SXNPcGVuKHRydWUpfT5BZGQgUmVjb3JkPC9idXR0b24+PC9oNT48YnIgLz5cclxuICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgbG9hZGluZyA/IDxwPkxvYWRpbmcuLi48L3A+OlxyXG4gICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInN0cmlwZWRcIj5cclxuICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgIDx0cj48dGg+IzwvdGg+PHRoPkhvc3BpdGFsPC90aD48dGg+UGhvbmU8L3RoPjx0aD5BZGRyZXNzPC90aD48dGg+Q3JlYXRlZDwvdGg+PHRoPi4uLjwvdGg+PC90cj5cclxuICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhID8gZGF0YS5nZXRBbGxSZWNvcmRCeVVzZXJJZC5tYXAoKHt0cmFuc0lkLGhvc3BpdGFsLGNyZWF0ZWRBdH0saSk9PihcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj48dGQ+ezEraX0uPC90ZD48dGQ+e2hvc3BpdGFsLm5hbWV9PC90ZD48dGQ+e2hvc3BpdGFsLnBob25lTnVtYmVyfTwvdGQ+PHRkPntob3NwaXRhbC5hZGRyZXNzfTwvdGQ+PHRkPntjcmVhdGVkQXR9PC90ZD48dGQ+PExpbmsgaHJlZj1cIi9pbmZvL1t0aWRdXCIgYXM9e2AvaW5mby8ke3RyYW5zSWR9YH0+PGE+PGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj52aXNpYmlsaXR5PC9pPjwvYT48L0xpbms+PC90ZD48L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICApKTpudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPE1vZGFsIHRpdGxlPVwiQ3JlYXRlIFJlY29yZFwiIGlzT3Blbj17aXNPcGVufSBcclxuICAgICAgICAgICAgICAgIGNsb3NlPXsoKT0+c2V0SXNPcGVuKGZhbHNlKX0gXHJcbiAgICAgICAgICAgICAgICBpc0xpbmU9e3RydWV9IG92ZXJmbG93PXt0cnVlfT5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybWlrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuYWJsZVJlaW5pdGlhbGl6ZT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5pdGlhbFZhbHVlcz17e2RpYWdub3NpczpcIlwiLGh5cGVydGVuc2l2ZTonJywgdWxjZXI6XCJcIiwgYnA6JycsZGlhYmV0aWNzOicnLGFsbGVyZ2llczonJyxzbW9rZTonJyxkcmluazonJyxzdXJnZXJ5OicnLGFsbGVyZ2llczonJyxhZG1pc3Npb246JycsbWVkaWNhdGlvbjonJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAga2lkczowLG1vZGU6XCJcIiwgdXNlcklkOnBhcnNlSW50KGlkWzBdKX19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uU3VibWl0PXsoaW5wdXQse3NldFN1Ym1pdHRpbmcscmVzZXRGb3JtfSk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZVJlY29yZCh7dmFyaWFibGVzOmlucHV0fSkudGhlbigocmVzKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHJlcy5kYXRhLmNyZWF0ZVJlY29yZC5zdGF0dXMpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNldEZvcm0oKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRJc09wZW4oZmFsc2UpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTdWJtaXR0aW5nKGZhbHNlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KHtoYW5kbGVTdWJtaXQsaXNTdWJtaXR0aW5nLHZhbHVlc30pPT4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3dpZHRoOlwiMTAwJVwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBzMTIgbTYgaW5wdXQtZmllbGRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgdHlwZT1cInRleHRcIiBuYW1lPVwiYnBcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJicFwiPkJsb29kIFByZXNzdXJlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBzMTIgbTYgaW5wdXQtZmllbGRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgdHlwZT1cInRleHRcIiBuYW1lPVwiZGlhYmV0aWNzXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZGlhYmV0aWNzXCI+RGlhYmV0aWNzIEhpc3Rvcnk8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHMxMiBtNiBpbnB1dC1maWVsZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCB0eXBlPVwidGV4dFwiIG5hbWU9XCJhbGxlcmdpZXNcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJhbGxlcmdpZXNcIj5EcnVnIEFsbGVyZ2llczwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgczEyIG02IGlucHV0LWZpZWxkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIGFzPVwic2VsZWN0XCIgbmFtZT1cInVsY2VyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIiBkaXNhYmxlZCBzZWxlY3RlZD5EbyB5b3UgaGF2ZSBVbGNlciA/PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJZZXNcIj5ZZXM8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIk5vXCI+Tm88L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZpZWxkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHMxMiBtNiBpbnB1dC1maWVsZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCBhcz1cInNlbGVjdFwiIG5hbWU9XCJoeXBlcnRlbnNpdmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiIGRpc2FibGVkIHNlbGVjdGVkPkFyZSB5b3UgaHlwZXJ0ZW5zaXZlID88L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlllc1wiPlllczwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiTm9cIj5Obzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgczEyIG02IGlucHV0LWZpZWxkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIGFzPVwic2VsZWN0XCIgbmFtZT1cInNtb2tlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIiBkaXNhYmxlZCBzZWxlY3RlZD5EbyB5b3Ugc21va2UgPzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiWWVzXCI+WWVzPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJOb1wiPk5vPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9GaWVsZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBzMTIgbTYgaW5wdXQtZmllbGRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgYXM9XCJzZWxlY3RcIiBuYW1lPVwiZHJpbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiIGRpc2FibGVkIHNlbGVjdGVkPkRvIHlvdSBEcmluayA/PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJZZXNcIj5ZZXM8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIk5vXCI+Tm88L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIk9jY2FzaW9uYWxseVwiPk9jY2FzaW9uYWxseTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgczEyIG02IGlucHV0LWZpZWxkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInN1cmdlcnlcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJzdXJnZXJ5XCI+U3VyZ2VyeSBIaXN0b3J5PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBzMTIgbTYgaW5wdXQtZmllbGRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgdHlwZT1cInRleHRcIiBuYW1lPVwiYWRtaXNzaW9uXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiYWRtaXNzaW9uXCI+QWRtaXNzaW9uIEhpc3Rvcnk8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHMxMiBtNiBpbnB1dC1maWVsZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCB0eXBlPVwidGV4dFwiIG5hbWU9XCJtZWRpY2F0aW9uXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibWVkaWNhdGlvblwiPkN1cnJlbnQgTWVkaWNhdGlvbjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgczEyIG02IGlucHV0LWZpZWxkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImRpYWdub3Npc1wiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImRpYWdub3Npc1wiPkN1cnJlbnQgRGlhZ25vc2lzPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBzMTIgbTZcIiBzdHlsZT17e3BhZGRpbmdMZWZ0OlwiNTBweFwiLCBmb250V2VpZ2h0OlwiNjAwXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5Gb3IgRmVtYWxlIFBhdGllbnRzPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHMxMiBtNiBpbnB1dC1maWVsZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCB0eXBlPVwibnVtYmVyXCIgbmFtZT1cImtpZHNcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJraWRzXCI+TnVtYmVyIG9mIGtpZHM8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHMxMiBtNiBpbnB1dC1maWVsZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCBhcz1cInNlbGVjdFwiIG5hbWU9XCJtb2RlXCIgZGVmYXVsdFZhbHVlPVwiIFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCIgZGlzYWJsZWQgc2VsZWN0ZWQ+TW9kZSBvZiBDaGlsZCBCaXJ0aDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQ1NcIj5DUzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiTm9ybWFsXCI+Tm9ybWFsPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9GaWVsZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz48YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBpbmRpZ28gYnRuLW1lZGl1bVwiIGRpc2FibGVkPXtpc1N1Ym1pdHRpbmd9ICBvbkNsaWNrPXtoYW5kbGVTdWJtaXR9Pntpc1N1Ym1pdHRpbmcgPyBcIlBsZWFzZSB3YWl0Li4uXCI6XCJTdWJtaXRcIn08L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgICl9PC9Gb3JtaWs+IFxyXG4gICAgICAgICAgICA8L01vZGFsPlxyXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICAuaW5wdXQtZmllbGR7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6NDBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgfSAgICBcclxuICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleCJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\Abiodun Michael\\\\Desktop\\\\chainmedic-front\\\\hos\\\\pages\\\\record\\\\[id].js */"));
};

_s(Index, "EGy93moMhSmsqOhzFnTfWR61+nY=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_9__["useRouter"], _apollo_client__WEBPACK_IMPORTED_MODULE_7__["useQuery"], _apollo_client__WEBPACK_IMPORTED_MODULE_7__["useMutation"]];
});

_c = Index;
/* harmony default export */ __webpack_exports__["default"] = (Index);

var _c;

$RefreshReg$(_c, "Index");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcmVjb3JkLy5qcyJdLCJuYW1lcyI6WyJNIiwicmVxdWlyZSIsIkluZGV4IiwidXNlU3RhdGUiLCJpc09wZW4iLCJzZXRJc09wZW4iLCJ1c2VSb3V0ZXIiLCJxdWVyeSIsImlkIiwic3BsaXQiLCJ1c2VRdWVyeSIsIkdFVF9BTExfUkVDT1JEX0JZX1VTRVJfSUQiLCJ2YXJpYWJsZXMiLCJ1c2VySWQiLCJwYXJzZUludCIsImRhdGEiLCJsb2FkaW5nIiwicmVmZXRjaCIsInVzZU11dGF0aW9uIiwiQ1JFQVRFX1JFQ09SRCIsIm9uQ29tcGxldGVkIiwiY3JlYXRlUmVjb3JkIiwic3RhdHVzIiwidG9hc3QiLCJzdWNjZXNzIiwibWVzc2FnZSIsImVycm9yIiwib25FcnJvciIsImVycm9ycyIsImNvbnNvbGUiLCJsb2ciLCJ1c2VFZmZlY3QiLCJBdXRvSW5pdCIsInJlcGxhY2UiLCJ0b1VwcGVyQ2FzZSIsImdldEFsbFJlY29yZEJ5VXNlcklkIiwibWFwIiwiaSIsInRyYW5zSWQiLCJob3NwaXRhbCIsImNyZWF0ZWRBdCIsIm5hbWUiLCJwaG9uZU51bWJlciIsImFkZHJlc3MiLCJkaWFnbm9zaXMiLCJoeXBlcnRlbnNpdmUiLCJ1bGNlciIsImJwIiwiZGlhYmV0aWNzIiwiYWxsZXJnaWVzIiwic21va2UiLCJkcmluayIsInN1cmdlcnkiLCJpbnB1dCIsInNldFN1Ym1pdHRpbmciLCJyZXNldEZvcm0iLCJ0aGVuIiwicmVzIiwiaGFuZGxlU3VibWl0IiwiaXNTdWJtaXR0aW5nIiwidmFsdWVzIiwid2lkdGgiLCJwYWRkaW5nTGVmdCIsImZvbnRXZWlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFNQSxDQUFDLEdBQUcsT0FBK0JDLG1CQUFPLENBQUMsOEVBQUQsQ0FBdEMsR0FBMEQs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LFdBQUssRUFBQyxFQUFkO0FBQWlCLGNBQVEsTUFBekI7QUFBMEIsY0FBUSxNQUFsQztBQUFBO0FBQUEsNkJBREosRUFFSTtBQUFRLFdBQUssRUFBQyxJQUFkO0FBQUE7QUFBQSxZQUZKLEVBR0k7QUFBUSxXQUFLLEVBQUMsUUFBZDtBQUFBO0FBQUEsZ0JBSEosQ0FEQSxFQU1BO0FBQUE7QUFBQSxNQU5BLEVBTU07QUFBQTtBQUFBLE1BTk4sRUFPQTtBQUEwQyxjQUFRLEVBQUVKLFlBQXBEO0FBQW1FLGFBQU8sRUFBRUQsWUFBNUU7QUFBQSx5Q0FBa0I7QUFBbEIsT0FBMkZDLFlBQVksR0FBRyxnQkFBSCxHQUFvQixRQUEzSCxDQVBBLENBakVSLENBREksQ0FESixDQURLO0FBQUEsR0FkVCxDQUhSLENBMUJKO0FBQUE7QUFBQSxtOFpBRFI7QUFxSUMsQ0FqS0Q7O0dBQU16RCxLO1VBRWNJLHFELEVBS2VJLHVELEVBRVRRLDBEOzs7S0FUcEJoQixLO0FBbUtTQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9yZWNvcmQvW2lkXS43ODBiNDQ3MDhlODk0N2QyNDFjNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2VTdGF0ZSx1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgTmF2IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbGF5b3V0L2hvcydcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQge01vZGFsfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL21vZGFsJ1xyXG5pbXBvcnQge3VzZVF1ZXJ5LHVzZU11dGF0aW9ufSBmcm9tICdAYXBvbGxvL2NsaWVudCdcclxuaW1wb3J0IHtHRVRfQUxMX1JFQ09SRF9CWV9VU0VSX0lELENSRUFURV9SRUNPUkR9IGZyb20gJy4uLy4uL2dyYXBocWwvc2NoZW1hJ1xyXG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCB7Rm9ybWlrLEZvcm0sRmllbGR9IGZyb20gJ2Zvcm1paydcclxuaW1wb3J0IHt0b2FzdH0gZnJvbSAncmVhY3QtdG9hc3RpZnknXHJcbmNvbnN0IE0gPSB0eXBlb2Ygd2luZG93ICE9PVwidW5kZWZpbmVkXCIgPyByZXF1aXJlKFwibWF0ZXJpYWxpemUtY3NzXCIpOicnXHJcblxyXG5cclxuXHJcbmNvbnN0IEluZGV4ID0gKCk9PntcclxuICAgIGNvbnN0IFtpc09wZW4sc2V0SXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gICAgY29uc3Qge3F1ZXJ5fSA9IHVzZVJvdXRlcigpXHJcblxyXG4gICAgY29uc3QgaWQgPSBxdWVyeS5pZC5zcGxpdChcIl9cIilcclxuXHJcbiAgICBcclxuICAgY29uc3Qge2RhdGEsbG9hZGluZyxyZWZldGNofSA9ICB1c2VRdWVyeShHRVRfQUxMX1JFQ09SRF9CWV9VU0VSX0lELHt2YXJpYWJsZXM6e3VzZXJJZDpwYXJzZUludChpZFswXSl9fSlcclxuXHJcbiAgIGNvbnN0IFtjcmVhdGVSZWNvcmRdID0gdXNlTXV0YXRpb24oQ1JFQVRFX1JFQ09SRCx7XHJcbiAgICAgICBvbkNvbXBsZXRlZCh7Y3JlYXRlUmVjb3JkfSl7XHJcbiAgICAgICAgaWYoY3JlYXRlUmVjb3JkLnN0YXR1cyl7XHJcbiAgICAgICAgICAgIHJlZmV0Y2goKVxyXG4gICAgICAgICAgICB0b2FzdC5zdWNjZXNzKGNyZWF0ZVJlY29yZC5tZXNzYWdlKVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0b2FzdC5lcnJvcihjcmVhdGVSZWNvcmQubWVzc2FnZSlcclxuICAgICAgICB9XHJcbiAgICAgICB9LFxyXG4gICAgICAgb25FcnJvcihlcnJvcnMpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9ycylcclxuICAgICAgIH1cclxuICAgfSlcclxuXHJcblxyXG4gICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgIE0uQXV0b0luaXQoKVxyXG4gICB9KVxyXG5cclxucmV0dXJuKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxOYXYgLz5cclxuICAgICAgICAgICAgPGJyIC8+PGJyIC8+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9kYXNoYm9hcmRcIj48YSBjbGFzc05hbWU9XCJidG4gYmx1ZVwiPlBhdGllbnQgTGlzdHM8L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICA8aDU+e2lkWzFdLnJlcGxhY2UoXCItXCIsXCIgXCIpLnRvVXBwZXJDYXNlKCl9J3MgTWVkaWNhbCBSZWNvcmRzIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIHJpZ2h0IGluZGlnb1wiIG9uQ2xpY2s9eygpPT5zZXRJc09wZW4odHJ1ZSl9PkFkZCBSZWNvcmQ8L2J1dHRvbj48L2g1PjxiciAvPlxyXG4gICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICBsb2FkaW5nID8gPHA+TG9hZGluZy4uLjwvcD46XHJcbiAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwic3RyaXBlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgPHRyPjx0aD4jPC90aD48dGg+SG9zcGl0YWw8L3RoPjx0aD5QaG9uZTwvdGg+PHRoPkFkZHJlc3M8L3RoPjx0aD5DcmVhdGVkPC90aD48dGg+Li4uPC90aD48L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEgPyBkYXRhLmdldEFsbFJlY29yZEJ5VXNlcklkLm1hcCgoe3RyYW5zSWQsaG9zcGl0YWwsY3JlYXRlZEF0fSxpKT0+KFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPjx0ZD57MStpfS48L3RkPjx0ZD57aG9zcGl0YWwubmFtZX08L3RkPjx0ZD57aG9zcGl0YWwucGhvbmVOdW1iZXJ9PC90ZD48dGQ+e2hvc3BpdGFsLmFkZHJlc3N9PC90ZD48dGQ+e2NyZWF0ZWRBdH08L3RkPjx0ZD48TGluayBocmVmPVwiL2luZm8vW3RpZF1cIiBhcz17YC9pbmZvLyR7dHJhbnNJZH1gfT48YT48aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPnZpc2liaWxpdHk8L2k+PC9hPjwvTGluaz48L3RkPjwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICkpOm51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8TW9kYWwgdGl0bGU9XCJDcmVhdGUgUmVjb3JkXCIgaXNPcGVuPXtpc09wZW59IFxyXG4gICAgICAgICAgICAgICAgY2xvc2U9eygpPT5zZXRJc09wZW4oZmFsc2UpfSBcclxuICAgICAgICAgICAgICAgIGlzTGluZT17dHJ1ZX0gb3ZlcmZsb3c9e3RydWV9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtaWtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW5hYmxlUmVpbml0aWFsaXplPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbml0aWFsVmFsdWVzPXt7ZGlhZ25vc2lzOlwiXCIsaHlwZXJ0ZW5zaXZlOicnLCB1bGNlcjpcIlwiLCBicDonJyxkaWFiZXRpY3M6JycsYWxsZXJnaWVzOicnLHNtb2tlOicnLGRyaW5rOicnLHN1cmdlcnk6JycsYWxsZXJnaWVzOicnLGFkbWlzc2lvbjonJyxtZWRpY2F0aW9uOicnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBraWRzOjAsbW9kZTpcIlwiLCB1c2VySWQ6cGFyc2VJbnQoaWRbMF0pfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25TdWJtaXQ9eyhpbnB1dCx7c2V0U3VibWl0dGluZyxyZXNldEZvcm19KT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlUmVjb3JkKHt2YXJpYWJsZXM6aW5wdXR9KS50aGVuKChyZXMpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYocmVzLmRhdGEuY3JlYXRlUmVjb3JkLnN0YXR1cyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc2V0Rm9ybSgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldElzT3BlbihmYWxzZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFN1Ym1pdHRpbmcoZmFsc2UpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsoe2hhbmRsZVN1Ym1pdCxpc1N1Ym1pdHRpbmcsdmFsdWVzfSk9PihcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7d2lkdGg6XCIxMDAlXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHMxMiBtNiBpbnB1dC1maWVsZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCB0eXBlPVwidGV4dFwiIG5hbWU9XCJicFwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImJwXCI+Qmxvb2QgUHJlc3N1cmU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHMxMiBtNiBpbnB1dC1maWVsZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCB0eXBlPVwidGV4dFwiIG5hbWU9XCJkaWFiZXRpY3NcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJkaWFiZXRpY3NcIj5EaWFiZXRpY3MgSGlzdG9yeTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgczEyIG02IGlucHV0LWZpZWxkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImFsbGVyZ2llc1wiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImFsbGVyZ2llc1wiPkRydWcgQWxsZXJnaWVzPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBzMTIgbTYgaW5wdXQtZmllbGRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgYXM9XCJzZWxlY3RcIiBuYW1lPVwidWxjZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiIGRpc2FibGVkIHNlbGVjdGVkPkRvIHlvdSBoYXZlIFVsY2VyID88L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlllc1wiPlllczwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiTm9cIj5Obzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgczEyIG02IGlucHV0LWZpZWxkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIGFzPVwic2VsZWN0XCIgbmFtZT1cImh5cGVydGVuc2l2ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCIgZGlzYWJsZWQgc2VsZWN0ZWQ+QXJlIHlvdSBoeXBlcnRlbnNpdmUgPzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiWWVzXCI+WWVzPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJOb1wiPk5vPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9GaWVsZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBzMTIgbTYgaW5wdXQtZmllbGRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgYXM9XCJzZWxlY3RcIiBuYW1lPVwic21va2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiIGRpc2FibGVkIHNlbGVjdGVkPkRvIHlvdSBzbW9rZSA/PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJZZXNcIj5ZZXM8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIk5vXCI+Tm88L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZpZWxkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHMxMiBtNiBpbnB1dC1maWVsZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCBhcz1cInNlbGVjdFwiIG5hbWU9XCJkcmlua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCIgZGlzYWJsZWQgc2VsZWN0ZWQ+RG8geW91IERyaW5rID88L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlllc1wiPlllczwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiTm9cIj5Obzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiT2NjYXNpb25hbGx5XCI+T2NjYXNpb25hbGx5PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9GaWVsZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBzMTIgbTYgaW5wdXQtZmllbGRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgdHlwZT1cInRleHRcIiBuYW1lPVwic3VyZ2VyeVwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInN1cmdlcnlcIj5TdXJnZXJ5IEhpc3Rvcnk8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHMxMiBtNiBpbnB1dC1maWVsZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCB0eXBlPVwidGV4dFwiIG5hbWU9XCJhZG1pc3Npb25cIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJhZG1pc3Npb25cIj5BZG1pc3Npb24gSGlzdG9yeTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgczEyIG02IGlucHV0LWZpZWxkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIm1lZGljYXRpb25cIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJtZWRpY2F0aW9uXCI+Q3VycmVudCBNZWRpY2F0aW9uPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBzMTIgbTYgaW5wdXQtZmllbGRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgdHlwZT1cInRleHRcIiBuYW1lPVwiZGlhZ25vc2lzXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZGlhZ25vc2lzXCI+Q3VycmVudCBEaWFnbm9zaXM8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHMxMiBtNlwiIHN0eWxlPXt7cGFkZGluZ0xlZnQ6XCI1MHB4XCIsIGZvbnRXZWlnaHQ6XCI2MDBcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkZvciBGZW1hbGUgUGF0aWVudHM8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgczEyIG02IGlucHV0LWZpZWxkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIHR5cGU9XCJudW1iZXJcIiBuYW1lPVwia2lkc1wiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImtpZHNcIj5OdW1iZXIgb2Yga2lkczwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgczEyIG02IGlucHV0LWZpZWxkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIGFzPVwic2VsZWN0XCIgbmFtZT1cIm1vZGVcIiBkZWZhdWx0VmFsdWU9XCIgXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIiBkaXNhYmxlZCBzZWxlY3RlZD5Nb2RlIG9mIENoaWxkIEJpcnRoPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJDU1wiPkNTPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJOb3JtYWxcIj5Ob3JtYWw8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZpZWxkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPjxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGluZGlnbyBidG4tbWVkaXVtXCIgZGlzYWJsZWQ9e2lzU3VibWl0dGluZ30gIG9uQ2xpY2s9e2hhbmRsZVN1Ym1pdH0+e2lzU3VibWl0dGluZyA/IFwiUGxlYXNlIHdhaXQuLi5cIjpcIlN1Ym1pdFwifTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgKX08L0Zvcm1paz4gXHJcbiAgICAgICAgICAgIDwvTW9kYWw+XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgIC5pbnB1dC1maWVsZHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDo0MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICB9ICAgIFxyXG4gICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4Il0sInNvdXJjZVJvb3QiOiIifQ==