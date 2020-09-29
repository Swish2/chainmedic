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

  var date = function date() {
    var date = new Date(str);
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
  }, ".input-field.jsx-682678643{margin-left:40px !important;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQWJpb2R1biBNaWNoYWVsXFxEZXNrdG9wXFxjaGFpbm1lZGljLWZyb250XFxob3NcXHBhZ2VzXFxyZWNvcmRcXFtpZF0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNkt3QixBQUdnRCw0QkFDL0IiLCJmaWxlIjoiQzpcXFVzZXJzXFxBYmlvZHVuIE1pY2hhZWxcXERlc2t0b3BcXGNoYWlubWVkaWMtZnJvbnRcXGhvc1xccGFnZXNcXHJlY29yZFxcW2lkXS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlU3RhdGUsdXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IE5hdiBmcm9tICcuLi8uLi9jb21wb25lbnRzL2xheW91dC9ob3MnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHtNb2RhbH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9tb2RhbCdcclxuaW1wb3J0IHt1c2VRdWVyeSx1c2VNdXRhdGlvbn0gZnJvbSAnQGFwb2xsby9jbGllbnQnXHJcbmltcG9ydCB7R0VUX0FMTF9SRUNPUkRfQllfVVNFUl9JRCxDUkVBVEVfUkVDT1JEfSBmcm9tICcuLi8uLi9ncmFwaHFsL3NjaGVtYSdcclxuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQge0Zvcm1payxGb3JtLEZpZWxkfSBmcm9tICdmb3JtaWsnXHJcbmltcG9ydCB7dG9hc3R9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5J1xyXG5jb25zdCBNID0gdHlwZW9mIHdpbmRvdyAhPT1cInVuZGVmaW5lZFwiID8gcmVxdWlyZShcIm1hdGVyaWFsaXplLWNzc1wiKTonJ1xyXG5cclxuXHJcblxyXG5jb25zdCBJbmRleCA9ICgpPT57XHJcbiAgICBjb25zdCBbaXNPcGVuLHNldElzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICAgIGNvbnN0IHtxdWVyeX0gPSB1c2VSb3V0ZXIoKVxyXG5cclxuICAgIGNvbnN0IGlkID0gcXVlcnkuaWQuc3BsaXQoXCJfXCIpXHJcblxyXG4gICAgXHJcbiAgIGNvbnN0IHtkYXRhLGxvYWRpbmcscmVmZXRjaH0gPSAgdXNlUXVlcnkoR0VUX0FMTF9SRUNPUkRfQllfVVNFUl9JRCx7dmFyaWFibGVzOnt1c2VySWQ6cGFyc2VJbnQoaWRbMF0pfX0pXHJcblxyXG4gICBjb25zdCBbY3JlYXRlUmVjb3JkXSA9IHVzZU11dGF0aW9uKENSRUFURV9SRUNPUkQse1xyXG4gICAgICAgb25Db21wbGV0ZWQoe2NyZWF0ZVJlY29yZH0pe1xyXG4gICAgICAgIGlmKGNyZWF0ZVJlY29yZC5zdGF0dXMpe1xyXG4gICAgICAgICAgICByZWZldGNoKClcclxuICAgICAgICAgICAgdG9hc3Quc3VjY2VzcyhjcmVhdGVSZWNvcmQubWVzc2FnZSlcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdG9hc3QuZXJyb3IoY3JlYXRlUmVjb3JkLm1lc3NhZ2UpXHJcbiAgICAgICAgfVxyXG4gICAgICAgfSxcclxuICAgICAgIG9uRXJyb3IoZXJyb3JzKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcnMpXHJcbiAgICAgICB9XHJcbiAgIH0pXHJcblxyXG4gICBjb25zdCBkYXRlID0gKCk9PntcclxuXHJcbmNvbnN0IGRhdGUgPSBuZXcgRGF0ZShzdHIpXHJcblxyXG5yZXR1cm4gZGF0ZS5nZXREYXRlKHN0cikrJy0nK2RhdGUuZ2V0TW9udGgoKSsnLScrZGF0ZS5nZXRGdWxsWWVhcigpXHJcbiAgIH1cclxuXHJcbiAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgTS5BdXRvSW5pdCgpXHJcbiAgIH0pXHJcblxyXG5yZXR1cm4oXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPE5hdiAvPlxyXG4gICAgICAgICAgICA8YnIgLz48YnIgLz5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2Rhc2hib2FyZFwiPjxhIGNsYXNzTmFtZT1cImJ0biBibHVlXCI+UGF0aWVudCBMaXN0czwvYT48L0xpbms+XHJcbiAgICAgICAgICAgIDxoNT57aWRbMV0ucmVwbGFjZShcIi1cIixcIiBcIikudG9VcHBlckNhc2UoKX0ncyBNZWRpY2FsIFJlY29yZHMgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gcmlnaHQgaW5kaWdvXCIgb25DbGljaz17KCk9PnNldElzT3Blbih0cnVlKX0+QWRkIFJlY29yZDwvYnV0dG9uPjwvaDU+PGJyIC8+XHJcbiAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgIGxvYWRpbmcgPyA8cD5Mb2FkaW5nLi4uPC9wPjpcclxuICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJzdHJpcGVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICA8dHI+PHRoPiM8L3RoPjx0aD5Ib3NwaXRhbDwvdGg+PHRoPlBob25lPC90aD48dGg+QWRkcmVzczwvdGg+PHRoPkNyZWF0ZWQ8L3RoPjx0aD4uLi48L3RoPjwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YSA/IGRhdGEuZ2V0QWxsUmVjb3JkQnlVc2VySWQubWFwKCh7dHJhbnNJZCxob3NwaXRhbCxjcmVhdGVkQXR9LGkpPT4oXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+PHRkPnsxK2l9LjwvdGQ+PHRkPntob3NwaXRhbC5uYW1lfTwvdGQ+PHRkPntob3NwaXRhbC5waG9uZU51bWJlcn08L3RkPjx0ZD57aG9zcGl0YWwuYWRkcmVzc308L3RkPjx0ZD57Y3JlYXRlZEF0fTwvdGQ+PHRkPjxMaW5rIGhyZWY9XCIvaW5mby9bdGlkXVwiIGFzPXtgL2luZm8vJHt0cmFuc0lkfWB9PjxhPjxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+dmlzaWJpbGl0eTwvaT48L2E+PC9MaW5rPjwvdGQ+PC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgKSk6bnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxNb2RhbCB0aXRsZT1cIkNyZWF0ZSBSZWNvcmRcIiBpc09wZW49e2lzT3Blbn0gXHJcbiAgICAgICAgICAgICAgICBjbG9zZT17KCk9PnNldElzT3BlbihmYWxzZSl9IFxyXG4gICAgICAgICAgICAgICAgaXNMaW5lPXt0cnVlfSBvdmVyZmxvdz17dHJ1ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm1pa1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbmFibGVSZWluaXRpYWxpemU9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWxWYWx1ZXM9e3tkaWFnbm9zaXM6XCJcIixoeXBlcnRlbnNpdmU6JycsIHVsY2VyOlwiXCIsIGJwOicnLGRpYWJldGljczonJyxhbGxlcmdpZXM6Jycsc21va2U6JycsZHJpbms6Jycsc3VyZ2VyeTonJyxhbGxlcmdpZXM6JycsYWRtaXNzaW9uOicnLG1lZGljYXRpb246JycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtpZHM6MCxtb2RlOlwiXCIsIHVzZXJJZDpwYXJzZUludChpZFswXSl9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvblN1Ym1pdD17KGlucHV0LHtzZXRTdWJtaXR0aW5nLHJlc2V0Rm9ybX0pPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVSZWNvcmQoe3ZhcmlhYmxlczppbnB1dH0pLnRoZW4oKHJlcyk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihyZXMuZGF0YS5jcmVhdGVSZWNvcmQuc3RhdHVzKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzZXRGb3JtKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0SXNPcGVuKGZhbHNlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U3VibWl0dGluZyhmYWxzZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyh7aGFuZGxlU3VibWl0LGlzU3VibWl0dGluZyx2YWx1ZXN9KT0+KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3t3aWR0aDpcIjEwMCVcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgczEyIG02IGlucHV0LWZpZWxkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImJwXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiYnBcIj5CbG9vZCBQcmVzc3VyZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgczEyIG02IGlucHV0LWZpZWxkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImRpYWJldGljc1wiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImRpYWJldGljc1wiPkRpYWJldGljcyBIaXN0b3J5PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBzMTIgbTYgaW5wdXQtZmllbGRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgdHlwZT1cInRleHRcIiBuYW1lPVwiYWxsZXJnaWVzXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiYWxsZXJnaWVzXCI+RHJ1ZyBBbGxlcmdpZXM8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHMxMiBtNiBpbnB1dC1maWVsZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCBhcz1cInNlbGVjdFwiIG5hbWU9XCJ1bGNlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCIgZGlzYWJsZWQgc2VsZWN0ZWQ+RG8geW91IGhhdmUgVWxjZXIgPzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiWWVzXCI+WWVzPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJOb1wiPk5vPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9GaWVsZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBzMTIgbTYgaW5wdXQtZmllbGRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgYXM9XCJzZWxlY3RcIiBuYW1lPVwiaHlwZXJ0ZW5zaXZlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIiBkaXNhYmxlZCBzZWxlY3RlZD5BcmUgeW91IGh5cGVydGVuc2l2ZSA/PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJZZXNcIj5ZZXM8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIk5vXCI+Tm88L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZpZWxkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHMxMiBtNiBpbnB1dC1maWVsZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCBhcz1cInNlbGVjdFwiIG5hbWU9XCJzbW9rZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCIgZGlzYWJsZWQgc2VsZWN0ZWQ+RG8geW91IHNtb2tlID88L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlllc1wiPlllczwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiTm9cIj5Obzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgczEyIG02IGlucHV0LWZpZWxkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIGFzPVwic2VsZWN0XCIgbmFtZT1cImRyaW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIiBkaXNhYmxlZCBzZWxlY3RlZD5EbyB5b3UgRHJpbmsgPzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiWWVzXCI+WWVzPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJOb1wiPk5vPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJPY2Nhc2lvbmFsbHlcIj5PY2Nhc2lvbmFsbHk8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZpZWxkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHMxMiBtNiBpbnB1dC1maWVsZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCB0eXBlPVwidGV4dFwiIG5hbWU9XCJzdXJnZXJ5XCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwic3VyZ2VyeVwiPlN1cmdlcnkgSGlzdG9yeTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgczEyIG02IGlucHV0LWZpZWxkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImFkbWlzc2lvblwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImFkbWlzc2lvblwiPkFkbWlzc2lvbiBIaXN0b3J5PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBzMTIgbTYgaW5wdXQtZmllbGRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgdHlwZT1cInRleHRcIiBuYW1lPVwibWVkaWNhdGlvblwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm1lZGljYXRpb25cIj5DdXJyZW50IE1lZGljYXRpb248L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHMxMiBtNiBpbnB1dC1maWVsZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCB0eXBlPVwidGV4dFwiIG5hbWU9XCJkaWFnbm9zaXNcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJkaWFnbm9zaXNcIj5DdXJyZW50IERpYWdub3NpczwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgczEyIG02XCIgc3R5bGU9e3twYWRkaW5nTGVmdDpcIjUwcHhcIiwgZm9udFdlaWdodDpcIjYwMFwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+Rm9yIEZlbWFsZSBQYXRpZW50czwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBzMTIgbTYgaW5wdXQtZmllbGRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgdHlwZT1cIm51bWJlclwiIG5hbWU9XCJraWRzXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwia2lkc1wiPk51bWJlciBvZiBraWRzPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBzMTIgbTYgaW5wdXQtZmllbGRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgYXM9XCJzZWxlY3RcIiBuYW1lPVwibW9kZVwiIGRlZmF1bHRWYWx1ZT1cIiBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiIGRpc2FibGVkIHNlbGVjdGVkPk1vZGUgb2YgQ2hpbGQgQmlydGg8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkNTXCI+Q1M8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIk5vcm1hbFwiPk5vcm1hbDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+PGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gaW5kaWdvIGJ0bi1tZWRpdW1cIiBkaXNhYmxlZD17aXNTdWJtaXR0aW5nfSAgb25DbGljaz17aGFuZGxlU3VibWl0fT57aXNTdWJtaXR0aW5nID8gXCJQbGVhc2Ugd2FpdC4uLlwiOlwiU3VibWl0XCJ9PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgICAgICAgICAgICApfTwvRm9ybWlrPiBcclxuICAgICAgICAgICAgPC9Nb2RhbD5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgLmlucHV0LWZpZWxke1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OjQwcHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIH0gICAgXHJcbiAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXgiXX0= */\n/*@ sourceURL=C:\\\\Users\\\\Abiodun Michael\\\\Desktop\\\\chainmedic-front\\\\hos\\\\pages\\\\record\\\\[id].js */"));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcmVjb3JkLy5qcyJdLCJuYW1lcyI6WyJNIiwicmVxdWlyZSIsIkluZGV4IiwidXNlU3RhdGUiLCJpc09wZW4iLCJzZXRJc09wZW4iLCJ1c2VSb3V0ZXIiLCJxdWVyeSIsImlkIiwic3BsaXQiLCJ1c2VRdWVyeSIsIkdFVF9BTExfUkVDT1JEX0JZX1VTRVJfSUQiLCJ2YXJpYWJsZXMiLCJ1c2VySWQiLCJwYXJzZUludCIsImRhdGEiLCJsb2FkaW5nIiwicmVmZXRjaCIsInVzZU11dGF0aW9uIiwiQ1JFQVRFX1JFQ09SRCIsIm9uQ29tcGxldGVkIiwiY3JlYXRlUmVjb3JkIiwic3RhdHVzIiwidG9hc3QiLCJzdWNjZXNzIiwibWVzc2FnZSIsImVycm9yIiwib25FcnJvciIsImVycm9ycyIsImNvbnNvbGUiLCJsb2ciLCJkYXRlIiwiRGF0ZSIsInN0ciIsImdldERhdGUiLCJnZXRNb250aCIsImdldEZ1bGxZZWFyIiwidXNlRWZmZWN0IiwiQXV0b0luaXQiLCJyZXBsYWNlIiwidG9VcHBlckNhc2UiLCJnZXRBbGxSZWNvcmRCeVVzZXJJZCIsIm1hcCIsImkiLCJ0cmFuc0lkIiwiaG9zcGl0YWwiLCJjcmVhdGVkQXQiLCJuYW1lIiwicGhvbmVOdW1iZXIiLCJhZGRyZXNzIiwiZGlhZ25vc2lzIiwiaHlwZXJ0ZW5zaXZlIiwidWxjZXIiLCJicCIsImRpYWJldGljcyIsImFsbGVyZ2llcyIsInNtb2tlIiwiZHJpbmsiLCJzdXJnZXJ5IiwiaW5wdXQiLCJzZXRTdWJtaXR0aW5nIiwicmVzZXRGb3JtIiwidGhlbiIsInJlcyIsImhhbmRsZVN1Ym1pdCIsImlzU3VibWl0dGluZyIsInZhbHVlcyIsIndpZHRoIiwicGFkZGluZ0xlZnQiLCJmb250V2VpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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O0FBQUEsNkJBREEsQ0ExRFIsRUE2RFE7QUFBQSx5Q0FBZTtBQUFmLE9BQ0EsTUFBQyw2Q0FBRDtBQUFPLFVBQUksRUFBQyxRQUFaO0FBQXFCLFVBQUksRUFBQztBQUExQixNQURBLEVBRUE7QUFBTyxhQUFPLEVBQUMsTUFBZjtBQUFBO0FBQUEsd0JBRkEsQ0E3RFIsRUFpRVE7QUFBQSx5Q0FBZTtBQUFmLE9BQ0EsTUFBQyw2Q0FBRDtBQUFPLFFBQUUsRUFBQyxRQUFWO0FBQW1CLFVBQUksRUFBQyxNQUF4QjtBQUErQixrQkFBWSxFQUFDO0FBQTVDLE9BQ0k7QUFBUSxXQUFLLEVBQUMsRUFBZDtBQUFpQixjQUFRLE1BQXpCO0FBQTBCLGNBQVEsTUFBbEM7QUFBQTtBQUFBLDZCQURKLEVBRUk7QUFBUSxXQUFLLEVBQUMsSUFBZDtBQUFBO0FBQUEsWUFGSixFQUdJO0FBQVEsV0FBSyxFQUFDLFFBQWQ7QUFBQTtBQUFBLGdCQUhKLENBREEsRUFNQTtBQUFBO0FBQUEsTUFOQSxFQU1NO0FBQUE7QUFBQSxNQU5OLEVBT0E7QUFBMEMsY0FBUSxFQUFFSixZQUFwRDtBQUFtRSxhQUFPLEVBQUVELFlBQTVFO0FBQUEseUNBQWtCO0FBQWxCLE9BQTJGQyxZQUFZLEdBQUcsZ0JBQUgsR0FBb0IsUUFBM0gsQ0FQQSxDQWpFUixDQURJLENBREosQ0FESztBQUFBLEdBZFQsQ0FIUixDQTFCSjtBQUFBO0FBQUEsK25hQURSO0FBcUlDLENBdktEOztHQUFNL0QsSztVQUVjSSxxRCxFQUtlSSx1RCxFQUVUUSwwRDs7O0tBVHBCaEIsSztBQXlLU0Esb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcmVjb3JkL1tpZF0uYTlhMThmYjA3NmY3OTgzZmQ1MTYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlU3RhdGUsdXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IE5hdiBmcm9tICcuLi8uLi9jb21wb25lbnRzL2xheW91dC9ob3MnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHtNb2RhbH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9tb2RhbCdcclxuaW1wb3J0IHt1c2VRdWVyeSx1c2VNdXRhdGlvbn0gZnJvbSAnQGFwb2xsby9jbGllbnQnXHJcbmltcG9ydCB7R0VUX0FMTF9SRUNPUkRfQllfVVNFUl9JRCxDUkVBVEVfUkVDT1JEfSBmcm9tICcuLi8uLi9ncmFwaHFsL3NjaGVtYSdcclxuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQge0Zvcm1payxGb3JtLEZpZWxkfSBmcm9tICdmb3JtaWsnXHJcbmltcG9ydCB7dG9hc3R9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5J1xyXG5jb25zdCBNID0gdHlwZW9mIHdpbmRvdyAhPT1cInVuZGVmaW5lZFwiID8gcmVxdWlyZShcIm1hdGVyaWFsaXplLWNzc1wiKTonJ1xyXG5cclxuXHJcblxyXG5jb25zdCBJbmRleCA9ICgpPT57XHJcbiAgICBjb25zdCBbaXNPcGVuLHNldElzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICAgIGNvbnN0IHtxdWVyeX0gPSB1c2VSb3V0ZXIoKVxyXG5cclxuICAgIGNvbnN0IGlkID0gcXVlcnkuaWQuc3BsaXQoXCJfXCIpXHJcblxyXG4gICAgXHJcbiAgIGNvbnN0IHtkYXRhLGxvYWRpbmcscmVmZXRjaH0gPSAgdXNlUXVlcnkoR0VUX0FMTF9SRUNPUkRfQllfVVNFUl9JRCx7dmFyaWFibGVzOnt1c2VySWQ6cGFyc2VJbnQoaWRbMF0pfX0pXHJcblxyXG4gICBjb25zdCBbY3JlYXRlUmVjb3JkXSA9IHVzZU11dGF0aW9uKENSRUFURV9SRUNPUkQse1xyXG4gICAgICAgb25Db21wbGV0ZWQoe2NyZWF0ZVJlY29yZH0pe1xyXG4gICAgICAgIGlmKGNyZWF0ZVJlY29yZC5zdGF0dXMpe1xyXG4gICAgICAgICAgICByZWZldGNoKClcclxuICAgICAgICAgICAgdG9hc3Quc3VjY2VzcyhjcmVhdGVSZWNvcmQubWVzc2FnZSlcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdG9hc3QuZXJyb3IoY3JlYXRlUmVjb3JkLm1lc3NhZ2UpXHJcbiAgICAgICAgfVxyXG4gICAgICAgfSxcclxuICAgICAgIG9uRXJyb3IoZXJyb3JzKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcnMpXHJcbiAgICAgICB9XHJcbiAgIH0pXHJcblxyXG4gICBjb25zdCBkYXRlID0gKCk9PntcclxuXHJcbmNvbnN0IGRhdGUgPSBuZXcgRGF0ZShzdHIpXHJcblxyXG5yZXR1cm4gZGF0ZS5nZXREYXRlKHN0cikrJy0nK2RhdGUuZ2V0TW9udGgoKSsnLScrZGF0ZS5nZXRGdWxsWWVhcigpXHJcbiAgIH1cclxuXHJcbiAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgTS5BdXRvSW5pdCgpXHJcbiAgIH0pXHJcblxyXG5yZXR1cm4oXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPE5hdiAvPlxyXG4gICAgICAgICAgICA8YnIgLz48YnIgLz5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2Rhc2hib2FyZFwiPjxhIGNsYXNzTmFtZT1cImJ0biBibHVlXCI+UGF0aWVudCBMaXN0czwvYT48L0xpbms+XHJcbiAgICAgICAgICAgIDxoNT57aWRbMV0ucmVwbGFjZShcIi1cIixcIiBcIikudG9VcHBlckNhc2UoKX0ncyBNZWRpY2FsIFJlY29yZHMgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gcmlnaHQgaW5kaWdvXCIgb25DbGljaz17KCk9PnNldElzT3Blbih0cnVlKX0+QWRkIFJlY29yZDwvYnV0dG9uPjwvaDU+PGJyIC8+XHJcbiAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgIGxvYWRpbmcgPyA8cD5Mb2FkaW5nLi4uPC9wPjpcclxuICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJzdHJpcGVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICA8dHI+PHRoPiM8L3RoPjx0aD5Ib3NwaXRhbDwvdGg+PHRoPlBob25lPC90aD48dGg+QWRkcmVzczwvdGg+PHRoPkNyZWF0ZWQ8L3RoPjx0aD4uLi48L3RoPjwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YSA/IGRhdGEuZ2V0QWxsUmVjb3JkQnlVc2VySWQubWFwKCh7dHJhbnNJZCxob3NwaXRhbCxjcmVhdGVkQXR9LGkpPT4oXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+PHRkPnsxK2l9LjwvdGQ+PHRkPntob3NwaXRhbC5uYW1lfTwvdGQ+PHRkPntob3NwaXRhbC5waG9uZU51bWJlcn08L3RkPjx0ZD57aG9zcGl0YWwuYWRkcmVzc308L3RkPjx0ZD57Y3JlYXRlZEF0fTwvdGQ+PHRkPjxMaW5rIGhyZWY9XCIvaW5mby9bdGlkXVwiIGFzPXtgL2luZm8vJHt0cmFuc0lkfWB9PjxhPjxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+dmlzaWJpbGl0eTwvaT48L2E+PC9MaW5rPjwvdGQ+PC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgKSk6bnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxNb2RhbCB0aXRsZT1cIkNyZWF0ZSBSZWNvcmRcIiBpc09wZW49e2lzT3Blbn0gXHJcbiAgICAgICAgICAgICAgICBjbG9zZT17KCk9PnNldElzT3BlbihmYWxzZSl9IFxyXG4gICAgICAgICAgICAgICAgaXNMaW5lPXt0cnVlfSBvdmVyZmxvdz17dHJ1ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm1pa1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbmFibGVSZWluaXRpYWxpemU9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWxWYWx1ZXM9e3tkaWFnbm9zaXM6XCJcIixoeXBlcnRlbnNpdmU6JycsIHVsY2VyOlwiXCIsIGJwOicnLGRpYWJldGljczonJyxhbGxlcmdpZXM6Jycsc21va2U6JycsZHJpbms6Jycsc3VyZ2VyeTonJyxhbGxlcmdpZXM6JycsYWRtaXNzaW9uOicnLG1lZGljYXRpb246JycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtpZHM6MCxtb2RlOlwiXCIsIHVzZXJJZDpwYXJzZUludChpZFswXSl9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvblN1Ym1pdD17KGlucHV0LHtzZXRTdWJtaXR0aW5nLHJlc2V0Rm9ybX0pPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVSZWNvcmQoe3ZhcmlhYmxlczppbnB1dH0pLnRoZW4oKHJlcyk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihyZXMuZGF0YS5jcmVhdGVSZWNvcmQuc3RhdHVzKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzZXRGb3JtKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0SXNPcGVuKGZhbHNlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U3VibWl0dGluZyhmYWxzZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyh7aGFuZGxlU3VibWl0LGlzU3VibWl0dGluZyx2YWx1ZXN9KT0+KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3t3aWR0aDpcIjEwMCVcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgczEyIG02IGlucHV0LWZpZWxkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImJwXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiYnBcIj5CbG9vZCBQcmVzc3VyZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgczEyIG02IGlucHV0LWZpZWxkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImRpYWJldGljc1wiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImRpYWJldGljc1wiPkRpYWJldGljcyBIaXN0b3J5PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBzMTIgbTYgaW5wdXQtZmllbGRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgdHlwZT1cInRleHRcIiBuYW1lPVwiYWxsZXJnaWVzXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiYWxsZXJnaWVzXCI+RHJ1ZyBBbGxlcmdpZXM8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHMxMiBtNiBpbnB1dC1maWVsZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCBhcz1cInNlbGVjdFwiIG5hbWU9XCJ1bGNlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCIgZGlzYWJsZWQgc2VsZWN0ZWQ+RG8geW91IGhhdmUgVWxjZXIgPzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiWWVzXCI+WWVzPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJOb1wiPk5vPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9GaWVsZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBzMTIgbTYgaW5wdXQtZmllbGRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgYXM9XCJzZWxlY3RcIiBuYW1lPVwiaHlwZXJ0ZW5zaXZlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIiBkaXNhYmxlZCBzZWxlY3RlZD5BcmUgeW91IGh5cGVydGVuc2l2ZSA/PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJZZXNcIj5ZZXM8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIk5vXCI+Tm88L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZpZWxkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHMxMiBtNiBpbnB1dC1maWVsZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCBhcz1cInNlbGVjdFwiIG5hbWU9XCJzbW9rZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCIgZGlzYWJsZWQgc2VsZWN0ZWQ+RG8geW91IHNtb2tlID88L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlllc1wiPlllczwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiTm9cIj5Obzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgczEyIG02IGlucHV0LWZpZWxkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIGFzPVwic2VsZWN0XCIgbmFtZT1cImRyaW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIiBkaXNhYmxlZCBzZWxlY3RlZD5EbyB5b3UgRHJpbmsgPzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiWWVzXCI+WWVzPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJOb1wiPk5vPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJPY2Nhc2lvbmFsbHlcIj5PY2Nhc2lvbmFsbHk8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZpZWxkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHMxMiBtNiBpbnB1dC1maWVsZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCB0eXBlPVwidGV4dFwiIG5hbWU9XCJzdXJnZXJ5XCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwic3VyZ2VyeVwiPlN1cmdlcnkgSGlzdG9yeTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgczEyIG02IGlucHV0LWZpZWxkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImFkbWlzc2lvblwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImFkbWlzc2lvblwiPkFkbWlzc2lvbiBIaXN0b3J5PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBzMTIgbTYgaW5wdXQtZmllbGRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgdHlwZT1cInRleHRcIiBuYW1lPVwibWVkaWNhdGlvblwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm1lZGljYXRpb25cIj5DdXJyZW50IE1lZGljYXRpb248L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHMxMiBtNiBpbnB1dC1maWVsZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCB0eXBlPVwidGV4dFwiIG5hbWU9XCJkaWFnbm9zaXNcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJkaWFnbm9zaXNcIj5DdXJyZW50IERpYWdub3NpczwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgczEyIG02XCIgc3R5bGU9e3twYWRkaW5nTGVmdDpcIjUwcHhcIiwgZm9udFdlaWdodDpcIjYwMFwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+Rm9yIEZlbWFsZSBQYXRpZW50czwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBzMTIgbTYgaW5wdXQtZmllbGRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgdHlwZT1cIm51bWJlclwiIG5hbWU9XCJraWRzXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwia2lkc1wiPk51bWJlciBvZiBraWRzPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBzMTIgbTYgaW5wdXQtZmllbGRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgYXM9XCJzZWxlY3RcIiBuYW1lPVwibW9kZVwiIGRlZmF1bHRWYWx1ZT1cIiBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiIGRpc2FibGVkIHNlbGVjdGVkPk1vZGUgb2YgQ2hpbGQgQmlydGg8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkNTXCI+Q1M8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIk5vcm1hbFwiPk5vcm1hbDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+PGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gaW5kaWdvIGJ0bi1tZWRpdW1cIiBkaXNhYmxlZD17aXNTdWJtaXR0aW5nfSAgb25DbGljaz17aGFuZGxlU3VibWl0fT57aXNTdWJtaXR0aW5nID8gXCJQbGVhc2Ugd2FpdC4uLlwiOlwiU3VibWl0XCJ9PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgICAgICAgICAgICApfTwvRm9ybWlrPiBcclxuICAgICAgICAgICAgPC9Nb2RhbD5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgLmlucHV0LWZpZWxke1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OjQwcHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIH0gICAgXHJcbiAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXgiXSwic291cmNlUm9vdCI6IiJ9