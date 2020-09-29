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

  var transDate = function transDate(str) {
    var date = new Date(str);
    console.log(date);
    return date.getDate(str) + '-' + date.getMonth() + '-' + date.getFullYear();
  };

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
    }, transDate(createdAt)), __jsx("td", {
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
  }, ".input-field.jsx-682678643{margin-left:40px !important;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQWJpb2R1biBNaWNoYWVsXFxEZXNrdG9wXFxjaGFpbm1lZGljLWZyb250XFxob3NcXHBhZ2VzXFxyZWNvcmRcXFtpZF0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOEt3QixBQUdnRCw0QkFDL0IiLCJmaWxlIjoiQzpcXFVzZXJzXFxBYmlvZHVuIE1pY2hhZWxcXERlc2t0b3BcXGNoYWlubWVkaWMtZnJvbnRcXGhvc1xccGFnZXNcXHJlY29yZFxcW2lkXS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlU3RhdGUsdXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IE5hdiBmcm9tICcuLi8uLi9jb21wb25lbnRzL2xheW91dC9ob3MnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHtNb2RhbH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9tb2RhbCdcclxuaW1wb3J0IHt1c2VRdWVyeSx1c2VNdXRhdGlvbn0gZnJvbSAnQGFwb2xsby9jbGllbnQnXHJcbmltcG9ydCB7R0VUX0FMTF9SRUNPUkRfQllfVVNFUl9JRCxDUkVBVEVfUkVDT1JEfSBmcm9tICcuLi8uLi9ncmFwaHFsL3NjaGVtYSdcclxuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQge0Zvcm1payxGb3JtLEZpZWxkfSBmcm9tICdmb3JtaWsnXHJcbmltcG9ydCB7dG9hc3R9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5J1xyXG5jb25zdCBNID0gdHlwZW9mIHdpbmRvdyAhPT1cInVuZGVmaW5lZFwiID8gcmVxdWlyZShcIm1hdGVyaWFsaXplLWNzc1wiKTonJ1xyXG5cclxuXHJcblxyXG5jb25zdCBJbmRleCA9ICgpPT57XHJcbiAgICBjb25zdCBbaXNPcGVuLHNldElzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICAgIGNvbnN0IHtxdWVyeX0gPSB1c2VSb3V0ZXIoKVxyXG5cclxuICAgIGNvbnN0IGlkID0gcXVlcnkuaWQuc3BsaXQoXCJfXCIpXHJcblxyXG4gICAgXHJcbiAgIGNvbnN0IHtkYXRhLGxvYWRpbmcscmVmZXRjaH0gPSAgdXNlUXVlcnkoR0VUX0FMTF9SRUNPUkRfQllfVVNFUl9JRCx7dmFyaWFibGVzOnt1c2VySWQ6cGFyc2VJbnQoaWRbMF0pfX0pXHJcblxyXG4gICBjb25zdCBbY3JlYXRlUmVjb3JkXSA9IHVzZU11dGF0aW9uKENSRUFURV9SRUNPUkQse1xyXG4gICAgICAgb25Db21wbGV0ZWQoe2NyZWF0ZVJlY29yZH0pe1xyXG4gICAgICAgIGlmKGNyZWF0ZVJlY29yZC5zdGF0dXMpe1xyXG4gICAgICAgICAgICByZWZldGNoKClcclxuICAgICAgICAgICAgdG9hc3Quc3VjY2VzcyhjcmVhdGVSZWNvcmQubWVzc2FnZSlcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdG9hc3QuZXJyb3IoY3JlYXRlUmVjb3JkLm1lc3NhZ2UpXHJcbiAgICAgICAgfVxyXG4gICAgICAgfSxcclxuICAgICAgIG9uRXJyb3IoZXJyb3JzKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcnMpXHJcbiAgICAgICB9XHJcbiAgIH0pXHJcblxyXG4gICBjb25zdCB0cmFuc0RhdGUgPSAoc3RyKT0+e1xyXG5cclxuY29uc3QgZGF0ZSA9IG5ldyBEYXRlKHN0cilcclxuY29uc29sZS5sb2coZGF0ZSlcclxuXHJcbnJldHVybiBkYXRlLmdldERhdGUoc3RyKSsnLScrZGF0ZS5nZXRNb250aCgpKyctJytkYXRlLmdldEZ1bGxZZWFyKClcclxuICAgfVxyXG5cclxuICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICBNLkF1dG9Jbml0KClcclxuICAgfSlcclxuXHJcbnJldHVybihcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8TmF2IC8+XHJcbiAgICAgICAgICAgIDxiciAvPjxiciAvPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZGFzaGJvYXJkXCI+PGEgY2xhc3NOYW1lPVwiYnRuIGJsdWVcIj5QYXRpZW50IExpc3RzPC9hPjwvTGluaz5cclxuICAgICAgICAgICAgPGg1PntpZFsxXS5yZXBsYWNlKFwiLVwiLFwiIFwiKS50b1VwcGVyQ2FzZSgpfSdzIE1lZGljYWwgUmVjb3JkcyA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biByaWdodCBpbmRpZ29cIiBvbkNsaWNrPXsoKT0+c2V0SXNPcGVuKHRydWUpfT5BZGQgUmVjb3JkPC9idXR0b24+PC9oNT48YnIgLz5cclxuICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgbG9hZGluZyA/IDxwPkxvYWRpbmcuLi48L3A+OlxyXG4gICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInN0cmlwZWRcIj5cclxuICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgIDx0cj48dGg+IzwvdGg+PHRoPkhvc3BpdGFsPC90aD48dGg+UGhvbmU8L3RoPjx0aD5BZGRyZXNzPC90aD48dGg+Q3JlYXRlZDwvdGg+PHRoPi4uLjwvdGg+PC90cj5cclxuICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhID8gZGF0YS5nZXRBbGxSZWNvcmRCeVVzZXJJZC5tYXAoKHt0cmFuc0lkLGhvc3BpdGFsLGNyZWF0ZWRBdH0saSk9PihcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj48dGQ+ezEraX0uPC90ZD48dGQ+e2hvc3BpdGFsLm5hbWV9PC90ZD48dGQ+e2hvc3BpdGFsLnBob25lTnVtYmVyfTwvdGQ+PHRkPntob3NwaXRhbC5hZGRyZXNzfTwvdGQ+PHRkPnt0cmFuc0RhdGUoY3JlYXRlZEF0KX08L3RkPjx0ZD48TGluayBocmVmPVwiL2luZm8vW3RpZF1cIiBhcz17YC9pbmZvLyR7dHJhbnNJZH1gfT48YT48aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPnZpc2liaWxpdHk8L2k+PC9hPjwvTGluaz48L3RkPjwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICkpOm51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8TW9kYWwgdGl0bGU9XCJDcmVhdGUgUmVjb3JkXCIgaXNPcGVuPXtpc09wZW59IFxyXG4gICAgICAgICAgICAgICAgY2xvc2U9eygpPT5zZXRJc09wZW4oZmFsc2UpfSBcclxuICAgICAgICAgICAgICAgIGlzTGluZT17dHJ1ZX0gb3ZlcmZsb3c9e3RydWV9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtaWtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW5hYmxlUmVpbml0aWFsaXplPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbml0aWFsVmFsdWVzPXt7ZGlhZ25vc2lzOlwiXCIsaHlwZXJ0ZW5zaXZlOicnLCB1bGNlcjpcIlwiLCBicDonJyxkaWFiZXRpY3M6JycsYWxsZXJnaWVzOicnLHNtb2tlOicnLGRyaW5rOicnLHN1cmdlcnk6JycsYWxsZXJnaWVzOicnLGFkbWlzc2lvbjonJyxtZWRpY2F0aW9uOicnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBraWRzOjAsbW9kZTpcIlwiLCB1c2VySWQ6cGFyc2VJbnQoaWRbMF0pfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25TdWJtaXQ9eyhpbnB1dCx7c2V0U3VibWl0dGluZyxyZXNldEZvcm19KT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlUmVjb3JkKHt2YXJpYWJsZXM6aW5wdXR9KS50aGVuKChyZXMpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYocmVzLmRhdGEuY3JlYXRlUmVjb3JkLnN0YXR1cyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc2V0Rm9ybSgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldElzT3BlbihmYWxzZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFN1Ym1pdHRpbmcoZmFsc2UpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsoe2hhbmRsZVN1Ym1pdCxpc1N1Ym1pdHRpbmcsdmFsdWVzfSk9PihcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7d2lkdGg6XCIxMDAlXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHMxMiBtNiBpbnB1dC1maWVsZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCB0eXBlPVwidGV4dFwiIG5hbWU9XCJicFwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImJwXCI+Qmxvb2QgUHJlc3N1cmU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHMxMiBtNiBpbnB1dC1maWVsZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCB0eXBlPVwidGV4dFwiIG5hbWU9XCJkaWFiZXRpY3NcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJkaWFiZXRpY3NcIj5EaWFiZXRpY3MgSGlzdG9yeTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgczEyIG02IGlucHV0LWZpZWxkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImFsbGVyZ2llc1wiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImFsbGVyZ2llc1wiPkRydWcgQWxsZXJnaWVzPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBzMTIgbTYgaW5wdXQtZmllbGRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgYXM9XCJzZWxlY3RcIiBuYW1lPVwidWxjZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiIGRpc2FibGVkIHNlbGVjdGVkPkRvIHlvdSBoYXZlIFVsY2VyID88L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlllc1wiPlllczwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiTm9cIj5Obzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgczEyIG02IGlucHV0LWZpZWxkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIGFzPVwic2VsZWN0XCIgbmFtZT1cImh5cGVydGVuc2l2ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCIgZGlzYWJsZWQgc2VsZWN0ZWQ+QXJlIHlvdSBoeXBlcnRlbnNpdmUgPzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiWWVzXCI+WWVzPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJOb1wiPk5vPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9GaWVsZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBzMTIgbTYgaW5wdXQtZmllbGRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgYXM9XCJzZWxlY3RcIiBuYW1lPVwic21va2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiIGRpc2FibGVkIHNlbGVjdGVkPkRvIHlvdSBzbW9rZSA/PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJZZXNcIj5ZZXM8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIk5vXCI+Tm88L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZpZWxkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHMxMiBtNiBpbnB1dC1maWVsZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCBhcz1cInNlbGVjdFwiIG5hbWU9XCJkcmlua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCIgZGlzYWJsZWQgc2VsZWN0ZWQ+RG8geW91IERyaW5rID88L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlllc1wiPlllczwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiTm9cIj5Obzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiT2NjYXNpb25hbGx5XCI+T2NjYXNpb25hbGx5PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9GaWVsZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBzMTIgbTYgaW5wdXQtZmllbGRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgdHlwZT1cInRleHRcIiBuYW1lPVwic3VyZ2VyeVwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInN1cmdlcnlcIj5TdXJnZXJ5IEhpc3Rvcnk8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHMxMiBtNiBpbnB1dC1maWVsZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCB0eXBlPVwidGV4dFwiIG5hbWU9XCJhZG1pc3Npb25cIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJhZG1pc3Npb25cIj5BZG1pc3Npb24gSGlzdG9yeTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgczEyIG02IGlucHV0LWZpZWxkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIm1lZGljYXRpb25cIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJtZWRpY2F0aW9uXCI+Q3VycmVudCBNZWRpY2F0aW9uPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBzMTIgbTYgaW5wdXQtZmllbGRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgdHlwZT1cInRleHRcIiBuYW1lPVwiZGlhZ25vc2lzXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZGlhZ25vc2lzXCI+Q3VycmVudCBEaWFnbm9zaXM8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHMxMiBtNlwiIHN0eWxlPXt7cGFkZGluZ0xlZnQ6XCI1MHB4XCIsIGZvbnRXZWlnaHQ6XCI2MDBcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkZvciBGZW1hbGUgUGF0aWVudHM8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgczEyIG02IGlucHV0LWZpZWxkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIHR5cGU9XCJudW1iZXJcIiBuYW1lPVwia2lkc1wiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImtpZHNcIj5OdW1iZXIgb2Yga2lkczwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgczEyIG02IGlucHV0LWZpZWxkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIGFzPVwic2VsZWN0XCIgbmFtZT1cIm1vZGVcIiBkZWZhdWx0VmFsdWU9XCIgXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIiBkaXNhYmxlZCBzZWxlY3RlZD5Nb2RlIG9mIENoaWxkIEJpcnRoPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJDU1wiPkNTPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJOb3JtYWxcIj5Ob3JtYWw8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZpZWxkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPjxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGluZGlnbyBidG4tbWVkaXVtXCIgZGlzYWJsZWQ9e2lzU3VibWl0dGluZ30gIG9uQ2xpY2s9e2hhbmRsZVN1Ym1pdH0+e2lzU3VibWl0dGluZyA/IFwiUGxlYXNlIHdhaXQuLi5cIjpcIlN1Ym1pdFwifTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgKX08L0Zvcm1paz4gXHJcbiAgICAgICAgICAgIDwvTW9kYWw+XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgIC5pbnB1dC1maWVsZHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDo0MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICB9ICAgIFxyXG4gICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4Il19 */\n/*@ sourceURL=C:\\\\Users\\\\Abiodun Michael\\\\Desktop\\\\chainmedic-front\\\\hos\\\\pages\\\\record\\\\[id].js */"));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcmVjb3JkLy5qcyJdLCJuYW1lcyI6WyJNIiwicmVxdWlyZSIsIkluZGV4IiwidXNlU3RhdGUiLCJpc09wZW4iLCJzZXRJc09wZW4iLCJ1c2VSb3V0ZXIiLCJxdWVyeSIsImlkIiwic3BsaXQiLCJ1c2VRdWVyeSIsIkdFVF9BTExfUkVDT1JEX0JZX1VTRVJfSUQiLCJ2YXJpYWJsZXMiLCJ1c2VySWQiLCJwYXJzZUludCIsImRhdGEiLCJsb2FkaW5nIiwicmVmZXRjaCIsInVzZU11dGF0aW9uIiwiQ1JFQVRFX1JFQ09SRCIsIm9uQ29tcGxldGVkIiwiY3JlYXRlUmVjb3JkIiwic3RhdHVzIiwidG9hc3QiLCJzdWNjZXNzIiwibWVzc2FnZSIsImVycm9yIiwib25FcnJvciIsImVycm9ycyIsImNvbnNvbGUiLCJsb2ciLCJ0cmFuc0RhdGUiLCJzdHIiLCJkYXRlIiwiRGF0ZSIsImdldERhdGUiLCJnZXRNb250aCIsImdldEZ1bGxZZWFyIiwidXNlRWZmZWN0IiwiQXV0b0luaXQiLCJyZXBsYWNlIiwidG9VcHBlckNhc2UiLCJnZXRBbGxSZWNvcmRCeVVzZXJJZCIsIm1hcCIsImkiLCJ0cmFuc0lkIiwiaG9zcGl0YWwiLCJjcmVhdGVkQXQiLCJuYW1lIiwicGhvbmVOdW1iZXIiLCJhZGRyZXNzIiwiZGlhZ25vc2lzIiwiaHlwZXJ0ZW5zaXZlIiwidWxjZXIiLCJicCIsImRpYWJldGljcyIsImFsbGVyZ2llcyIsInNtb2tlIiwiZHJpbmsiLCJzdXJnZXJ5IiwiaW5wdXQiLCJzZXRTdWJtaXR0aW5nIiwicmVzZXRGb3JtIiwidGhlbiIsInJlcyIsImhhbmRsZVN1Ym1pdCIsImlzU3VibWl0dGluZyIsInZhbHVlcyIsIndpZHRoIiwicGFkZGluZ0xlZnQiLCJmb250V2VpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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SyxFQUFFO0FBQUNDLG1CQUFXLEVBQUMsTUFBYjtBQUFxQkMsa0JBQVUsRUFBQztBQUFoQyxPQUFuQztBQUFBLHlDQUFlO0FBQWYsT0FDQTtBQUFBO0FBQUEsNkJBREEsQ0ExRFIsRUE2RFE7QUFBQSx5Q0FBZTtBQUFmLE9BQ0EsTUFBQyw2Q0FBRDtBQUFPLFVBQUksRUFBQyxRQUFaO0FBQXFCLFVBQUksRUFBQztBQUExQixNQURBLEVBRUE7QUFBTyxhQUFPLEVBQUMsTUFBZjtBQUFBO0FBQUEsd0JBRkEsQ0E3RFIsRUFpRVE7QUFBQSx5Q0FBZTtBQUFmLE9BQ0EsTUFBQyw2Q0FBRDtBQUFPLFFBQUUsRUFBQyxRQUFWO0FBQW1CLFVBQUksRUFBQyxNQUF4QjtBQUErQixrQkFBWSxFQUFDO0FBQTVDLE9BQ0k7QUFBUSxXQUFLLEVBQUMsRUFBZDtBQUFpQixjQUFRLE1BQXpCO0FBQTBCLGNBQVEsTUFBbEM7QUFBQTtBQUFBLDZCQURKLEVBRUk7QUFBUSxXQUFLLEVBQUMsSUFBZDtBQUFBO0FBQUEsWUFGSixFQUdJO0FBQVEsV0FBSyxFQUFDLFFBQWQ7QUFBQTtBQUFBLGdCQUhKLENBREEsRUFNQTtBQUFBO0FBQUEsTUFOQSxFQU1NO0FBQUE7QUFBQSxNQU5OLEVBT0E7QUFBMEMsY0FBUSxFQUFFSixZQUFwRDtBQUFtRSxhQUFPLEVBQUVELFlBQTVFO0FBQUEseUNBQWtCO0FBQWxCLE9BQTJGQyxZQUFZLEdBQUcsZ0JBQUgsR0FBb0IsUUFBM0gsQ0FQQSxDQWpFUixDQURJLENBREosQ0FESztBQUFBLEdBZFQsQ0FIUixDQTFCSjtBQUFBO0FBQUEsbXJhQURSO0FBcUlDLENBeEtEOztHQUFNaEUsSztVQUVjSSxxRCxFQUtlSSx1RCxFQUVUUSwwRDs7O0tBVHBCaEIsSztBQTBLU0Esb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcmVjb3JkL1tpZF0uOTE2YWMwZTc2ZjBlZWIzYTQ5NWMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlU3RhdGUsdXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IE5hdiBmcm9tICcuLi8uLi9jb21wb25lbnRzL2xheW91dC9ob3MnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHtNb2RhbH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9tb2RhbCdcclxuaW1wb3J0IHt1c2VRdWVyeSx1c2VNdXRhdGlvbn0gZnJvbSAnQGFwb2xsby9jbGllbnQnXHJcbmltcG9ydCB7R0VUX0FMTF9SRUNPUkRfQllfVVNFUl9JRCxDUkVBVEVfUkVDT1JEfSBmcm9tICcuLi8uLi9ncmFwaHFsL3NjaGVtYSdcclxuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQge0Zvcm1payxGb3JtLEZpZWxkfSBmcm9tICdmb3JtaWsnXHJcbmltcG9ydCB7dG9hc3R9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5J1xyXG5jb25zdCBNID0gdHlwZW9mIHdpbmRvdyAhPT1cInVuZGVmaW5lZFwiID8gcmVxdWlyZShcIm1hdGVyaWFsaXplLWNzc1wiKTonJ1xyXG5cclxuXHJcblxyXG5jb25zdCBJbmRleCA9ICgpPT57XHJcbiAgICBjb25zdCBbaXNPcGVuLHNldElzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICAgIGNvbnN0IHtxdWVyeX0gPSB1c2VSb3V0ZXIoKVxyXG5cclxuICAgIGNvbnN0IGlkID0gcXVlcnkuaWQuc3BsaXQoXCJfXCIpXHJcblxyXG4gICAgXHJcbiAgIGNvbnN0IHtkYXRhLGxvYWRpbmcscmVmZXRjaH0gPSAgdXNlUXVlcnkoR0VUX0FMTF9SRUNPUkRfQllfVVNFUl9JRCx7dmFyaWFibGVzOnt1c2VySWQ6cGFyc2VJbnQoaWRbMF0pfX0pXHJcblxyXG4gICBjb25zdCBbY3JlYXRlUmVjb3JkXSA9IHVzZU11dGF0aW9uKENSRUFURV9SRUNPUkQse1xyXG4gICAgICAgb25Db21wbGV0ZWQoe2NyZWF0ZVJlY29yZH0pe1xyXG4gICAgICAgIGlmKGNyZWF0ZVJlY29yZC5zdGF0dXMpe1xyXG4gICAgICAgICAgICByZWZldGNoKClcclxuICAgICAgICAgICAgdG9hc3Quc3VjY2VzcyhjcmVhdGVSZWNvcmQubWVzc2FnZSlcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdG9hc3QuZXJyb3IoY3JlYXRlUmVjb3JkLm1lc3NhZ2UpXHJcbiAgICAgICAgfVxyXG4gICAgICAgfSxcclxuICAgICAgIG9uRXJyb3IoZXJyb3JzKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcnMpXHJcbiAgICAgICB9XHJcbiAgIH0pXHJcblxyXG4gICBjb25zdCB0cmFuc0RhdGUgPSAoc3RyKT0+e1xyXG5cclxuY29uc3QgZGF0ZSA9IG5ldyBEYXRlKHN0cilcclxuY29uc29sZS5sb2coZGF0ZSlcclxuXHJcbnJldHVybiBkYXRlLmdldERhdGUoc3RyKSsnLScrZGF0ZS5nZXRNb250aCgpKyctJytkYXRlLmdldEZ1bGxZZWFyKClcclxuICAgfVxyXG5cclxuICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICBNLkF1dG9Jbml0KClcclxuICAgfSlcclxuXHJcbnJldHVybihcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8TmF2IC8+XHJcbiAgICAgICAgICAgIDxiciAvPjxiciAvPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZGFzaGJvYXJkXCI+PGEgY2xhc3NOYW1lPVwiYnRuIGJsdWVcIj5QYXRpZW50IExpc3RzPC9hPjwvTGluaz5cclxuICAgICAgICAgICAgPGg1PntpZFsxXS5yZXBsYWNlKFwiLVwiLFwiIFwiKS50b1VwcGVyQ2FzZSgpfSdzIE1lZGljYWwgUmVjb3JkcyA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biByaWdodCBpbmRpZ29cIiBvbkNsaWNrPXsoKT0+c2V0SXNPcGVuKHRydWUpfT5BZGQgUmVjb3JkPC9idXR0b24+PC9oNT48YnIgLz5cclxuICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgbG9hZGluZyA/IDxwPkxvYWRpbmcuLi48L3A+OlxyXG4gICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInN0cmlwZWRcIj5cclxuICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgIDx0cj48dGg+IzwvdGg+PHRoPkhvc3BpdGFsPC90aD48dGg+UGhvbmU8L3RoPjx0aD5BZGRyZXNzPC90aD48dGg+Q3JlYXRlZDwvdGg+PHRoPi4uLjwvdGg+PC90cj5cclxuICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhID8gZGF0YS5nZXRBbGxSZWNvcmRCeVVzZXJJZC5tYXAoKHt0cmFuc0lkLGhvc3BpdGFsLGNyZWF0ZWRBdH0saSk9PihcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj48dGQ+ezEraX0uPC90ZD48dGQ+e2hvc3BpdGFsLm5hbWV9PC90ZD48dGQ+e2hvc3BpdGFsLnBob25lTnVtYmVyfTwvdGQ+PHRkPntob3NwaXRhbC5hZGRyZXNzfTwvdGQ+PHRkPnt0cmFuc0RhdGUoY3JlYXRlZEF0KX08L3RkPjx0ZD48TGluayBocmVmPVwiL2luZm8vW3RpZF1cIiBhcz17YC9pbmZvLyR7dHJhbnNJZH1gfT48YT48aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPnZpc2liaWxpdHk8L2k+PC9hPjwvTGluaz48L3RkPjwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICkpOm51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8TW9kYWwgdGl0bGU9XCJDcmVhdGUgUmVjb3JkXCIgaXNPcGVuPXtpc09wZW59IFxyXG4gICAgICAgICAgICAgICAgY2xvc2U9eygpPT5zZXRJc09wZW4oZmFsc2UpfSBcclxuICAgICAgICAgICAgICAgIGlzTGluZT17dHJ1ZX0gb3ZlcmZsb3c9e3RydWV9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtaWtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW5hYmxlUmVpbml0aWFsaXplPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbml0aWFsVmFsdWVzPXt7ZGlhZ25vc2lzOlwiXCIsaHlwZXJ0ZW5zaXZlOicnLCB1bGNlcjpcIlwiLCBicDonJyxkaWFiZXRpY3M6JycsYWxsZXJnaWVzOicnLHNtb2tlOicnLGRyaW5rOicnLHN1cmdlcnk6JycsYWxsZXJnaWVzOicnLGFkbWlzc2lvbjonJyxtZWRpY2F0aW9uOicnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBraWRzOjAsbW9kZTpcIlwiLCB1c2VySWQ6cGFyc2VJbnQoaWRbMF0pfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25TdWJtaXQ9eyhpbnB1dCx7c2V0U3VibWl0dGluZyxyZXNldEZvcm19KT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlUmVjb3JkKHt2YXJpYWJsZXM6aW5wdXR9KS50aGVuKChyZXMpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYocmVzLmRhdGEuY3JlYXRlUmVjb3JkLnN0YXR1cyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc2V0Rm9ybSgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldElzT3BlbihmYWxzZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFN1Ym1pdHRpbmcoZmFsc2UpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsoe2hhbmRsZVN1Ym1pdCxpc1N1Ym1pdHRpbmcsdmFsdWVzfSk9PihcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7d2lkdGg6XCIxMDAlXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHMxMiBtNiBpbnB1dC1maWVsZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCB0eXBlPVwidGV4dFwiIG5hbWU9XCJicFwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImJwXCI+Qmxvb2QgUHJlc3N1cmU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHMxMiBtNiBpbnB1dC1maWVsZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCB0eXBlPVwidGV4dFwiIG5hbWU9XCJkaWFiZXRpY3NcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJkaWFiZXRpY3NcIj5EaWFiZXRpY3MgSGlzdG9yeTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgczEyIG02IGlucHV0LWZpZWxkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImFsbGVyZ2llc1wiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImFsbGVyZ2llc1wiPkRydWcgQWxsZXJnaWVzPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBzMTIgbTYgaW5wdXQtZmllbGRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgYXM9XCJzZWxlY3RcIiBuYW1lPVwidWxjZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiIGRpc2FibGVkIHNlbGVjdGVkPkRvIHlvdSBoYXZlIFVsY2VyID88L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlllc1wiPlllczwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiTm9cIj5Obzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgczEyIG02IGlucHV0LWZpZWxkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIGFzPVwic2VsZWN0XCIgbmFtZT1cImh5cGVydGVuc2l2ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCIgZGlzYWJsZWQgc2VsZWN0ZWQ+QXJlIHlvdSBoeXBlcnRlbnNpdmUgPzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiWWVzXCI+WWVzPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJOb1wiPk5vPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9GaWVsZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBzMTIgbTYgaW5wdXQtZmllbGRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgYXM9XCJzZWxlY3RcIiBuYW1lPVwic21va2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiIGRpc2FibGVkIHNlbGVjdGVkPkRvIHlvdSBzbW9rZSA/PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJZZXNcIj5ZZXM8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIk5vXCI+Tm88L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZpZWxkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHMxMiBtNiBpbnB1dC1maWVsZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCBhcz1cInNlbGVjdFwiIG5hbWU9XCJkcmlua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCIgZGlzYWJsZWQgc2VsZWN0ZWQ+RG8geW91IERyaW5rID88L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlllc1wiPlllczwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiTm9cIj5Obzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiT2NjYXNpb25hbGx5XCI+T2NjYXNpb25hbGx5PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9GaWVsZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBzMTIgbTYgaW5wdXQtZmllbGRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgdHlwZT1cInRleHRcIiBuYW1lPVwic3VyZ2VyeVwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInN1cmdlcnlcIj5TdXJnZXJ5IEhpc3Rvcnk8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHMxMiBtNiBpbnB1dC1maWVsZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCB0eXBlPVwidGV4dFwiIG5hbWU9XCJhZG1pc3Npb25cIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJhZG1pc3Npb25cIj5BZG1pc3Npb24gSGlzdG9yeTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgczEyIG02IGlucHV0LWZpZWxkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIm1lZGljYXRpb25cIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJtZWRpY2F0aW9uXCI+Q3VycmVudCBNZWRpY2F0aW9uPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBzMTIgbTYgaW5wdXQtZmllbGRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgdHlwZT1cInRleHRcIiBuYW1lPVwiZGlhZ25vc2lzXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZGlhZ25vc2lzXCI+Q3VycmVudCBEaWFnbm9zaXM8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHMxMiBtNlwiIHN0eWxlPXt7cGFkZGluZ0xlZnQ6XCI1MHB4XCIsIGZvbnRXZWlnaHQ6XCI2MDBcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkZvciBGZW1hbGUgUGF0aWVudHM8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgczEyIG02IGlucHV0LWZpZWxkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIHR5cGU9XCJudW1iZXJcIiBuYW1lPVwia2lkc1wiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImtpZHNcIj5OdW1iZXIgb2Yga2lkczwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgczEyIG02IGlucHV0LWZpZWxkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIGFzPVwic2VsZWN0XCIgbmFtZT1cIm1vZGVcIiBkZWZhdWx0VmFsdWU9XCIgXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIiBkaXNhYmxlZCBzZWxlY3RlZD5Nb2RlIG9mIENoaWxkIEJpcnRoPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJDU1wiPkNTPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJOb3JtYWxcIj5Ob3JtYWw8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZpZWxkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPjxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGluZGlnbyBidG4tbWVkaXVtXCIgZGlzYWJsZWQ9e2lzU3VibWl0dGluZ30gIG9uQ2xpY2s9e2hhbmRsZVN1Ym1pdH0+e2lzU3VibWl0dGluZyA/IFwiUGxlYXNlIHdhaXQuLi5cIjpcIlN1Ym1pdFwifTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgKX08L0Zvcm1paz4gXHJcbiAgICAgICAgICAgIDwvTW9kYWw+XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgIC5pbnB1dC1maWVsZHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDo0MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICB9ICAgIFxyXG4gICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4Il0sInNvdXJjZVJvb3QiOiIifQ==