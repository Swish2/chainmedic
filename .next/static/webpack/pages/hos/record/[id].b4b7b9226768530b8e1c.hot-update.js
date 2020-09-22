webpackHotUpdate_N_E("pages/hos/record/[id]",{

/***/ "./pages/hos/record/[id].js":
/*!**********************************!*\
  !*** ./pages/hos/record/[id].js ***!
  \**********************************/
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
/* harmony import */ var _components_layout_hos__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/layout/hos */ "./components/layout/hos.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/modal */ "./components/modal/index.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var _graphql_schema__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../graphql/schema */ "./graphql/schema.js");
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
  }, __jsx("h5", {
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
      href: "/hos/info/[tid]",
      as: "/hos/info/".concat(transId)
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
    }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref3, "allergies", ''), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref3, "admission", ''), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref3, "medication", ''), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref3, "kids", ''), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref3, "mode", ''), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref3, "userId", parseInt(id[0])), _ref3),
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
      name: "mode"
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
  }, ".input-field.jsx-682678643{margin-left:40px !important;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQWJpb2R1biBNaWNoYWVsXFxEZXNrdG9wXFxjaGFpbm1lZGljXFxmcm9udFxccGFnZXNcXGhvc1xccmVjb3JkXFxbaWRdLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFLd0IsQUFHZ0QsNEJBQy9CIiwiZmlsZSI6IkM6XFxVc2Vyc1xcQWJpb2R1biBNaWNoYWVsXFxEZXNrdG9wXFxjaGFpbm1lZGljXFxmcm9udFxccGFnZXNcXGhvc1xccmVjb3JkXFxbaWRdLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2VTdGF0ZSx1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgTmF2IGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvbGF5b3V0L2hvcydcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQge01vZGFsfSBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL21vZGFsJ1xyXG5pbXBvcnQge3VzZVF1ZXJ5LHVzZU11dGF0aW9ufSBmcm9tICdAYXBvbGxvL2NsaWVudCdcclxuaW1wb3J0IHtHRVRfQUxMX1JFQ09SRF9CWV9VU0VSX0lELENSRUFURV9SRUNPUkR9IGZyb20gJy4uLy4uLy4uL2dyYXBocWwvc2NoZW1hJ1xyXG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCB7Rm9ybWlrLEZvcm0sRmllbGR9IGZyb20gJ2Zvcm1paydcclxuaW1wb3J0IHt0b2FzdH0gZnJvbSAncmVhY3QtdG9hc3RpZnknXHJcbmNvbnN0IE0gPSB0eXBlb2Ygd2luZG93ICE9PVwidW5kZWZpbmVkXCIgPyByZXF1aXJlKFwibWF0ZXJpYWxpemUtY3NzXCIpOicnXHJcblxyXG5cclxuXHJcbmNvbnN0IEluZGV4ID0gKCk9PntcclxuICAgIGNvbnN0IFtpc09wZW4sc2V0SXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gICAgY29uc3Qge3F1ZXJ5fSA9IHVzZVJvdXRlcigpXHJcblxyXG4gICAgY29uc3QgaWQgPSBxdWVyeS5pZC5zcGxpdChcIl9cIilcclxuXHJcbiAgICBcclxuICAgY29uc3Qge2RhdGEsbG9hZGluZyxyZWZldGNofSA9ICB1c2VRdWVyeShHRVRfQUxMX1JFQ09SRF9CWV9VU0VSX0lELHt2YXJpYWJsZXM6e3VzZXJJZDpwYXJzZUludChpZFswXSl9fSlcclxuXHJcbiAgIGNvbnN0IFtjcmVhdGVSZWNvcmRdID0gdXNlTXV0YXRpb24oQ1JFQVRFX1JFQ09SRCx7XHJcbiAgICAgICBvbkNvbXBsZXRlZCh7Y3JlYXRlUmVjb3JkfSl7XHJcbiAgICAgICAgaWYoY3JlYXRlUmVjb3JkLnN0YXR1cyl7XHJcbiAgICAgICAgICAgIHJlZmV0Y2goKVxyXG4gICAgICAgICAgICB0b2FzdC5zdWNjZXNzKGNyZWF0ZVJlY29yZC5tZXNzYWdlKVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0b2FzdC5lcnJvcihjcmVhdGVSZWNvcmQubWVzc2FnZSlcclxuICAgICAgICB9XHJcbiAgICAgICB9LFxyXG4gICAgICAgb25FcnJvcihlcnJvcnMpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9ycylcclxuICAgICAgIH1cclxuICAgfSlcclxuXHJcblxyXG4gICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgIE0uQXV0b0luaXQoKVxyXG4gICB9KVxyXG5cclxucmV0dXJuKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxOYXYgLz5cclxuICAgICAgICAgICAgPGJyIC8+PGJyIC8+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8aDU+e2lkWzFdLnJlcGxhY2UoXCItXCIsXCIgXCIpLnRvVXBwZXJDYXNlKCl9J3MgTWVkaWNhbCBSZWNvcmRzIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIHJpZ2h0IGluZGlnb1wiIG9uQ2xpY2s9eygpPT5zZXRJc09wZW4odHJ1ZSl9PkFkZCBSZWNvcmQ8L2J1dHRvbj48L2g1PjxiciAvPlxyXG4gICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICBsb2FkaW5nID8gPHA+TG9hZGluZy4uLjwvcD46XHJcbiAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwic3RyaXBlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgPHRyPjx0aD4jPC90aD48dGg+SG9zcGl0YWw8L3RoPjx0aD5QaG9uZTwvdGg+PHRoPkFkZHJlc3M8L3RoPjx0aD5DcmVhdGVkPC90aD48dGg+Li4uPC90aD48L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEgPyBkYXRhLmdldEFsbFJlY29yZEJ5VXNlcklkLm1hcCgoe3RyYW5zSWQsaG9zcGl0YWwsY3JlYXRlZEF0fSxpKT0+KFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPjx0ZD57MStpfS48L3RkPjx0ZD57aG9zcGl0YWwubmFtZX08L3RkPjx0ZD57aG9zcGl0YWwucGhvbmVOdW1iZXJ9PC90ZD48dGQ+e2hvc3BpdGFsLmFkZHJlc3N9PC90ZD48dGQ+e2NyZWF0ZWRBdH08L3RkPjx0ZD48TGluayBocmVmPVwiL2hvcy9pbmZvL1t0aWRdXCIgYXM9e2AvaG9zL2luZm8vJHt0cmFuc0lkfWB9PjxhPjxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+dmlzaWJpbGl0eTwvaT48L2E+PC9MaW5rPjwvdGQ+PC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgKSk6bnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxNb2RhbCB0aXRsZT1cIkNyZWF0ZSBSZWNvcmRcIiBpc09wZW49e2lzT3Blbn0gXHJcbiAgICAgICAgICAgICAgICBjbG9zZT17KCk9PnNldElzT3BlbihmYWxzZSl9IFxyXG4gICAgICAgICAgICAgICAgaXNMaW5lPXt0cnVlfSBvdmVyZmxvdz17dHJ1ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm1pa1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbmFibGVSZWluaXRpYWxpemU9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWxWYWx1ZXM9e3tkaWFnbm9zaXM6XCJcIixoeXBlcnRlbnNpdmU6JycsIHVsY2VyOlwiXCIsIGJwOicnLGRpYWJldGljczonJyxhbGxlcmdpZXM6Jycsc21va2U6JycsZHJpbms6Jycsc3VyZ2VyeTonJyxhbGxlcmdpZXM6JycsYWRtaXNzaW9uOicnLG1lZGljYXRpb246Jycsa2lkczonJyxtb2RlOicnLCB1c2VySWQ6cGFyc2VJbnQoaWRbMF0pfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25TdWJtaXQ9eyhpbnB1dCx7c2V0U3VibWl0dGluZyxyZXNldEZvcm19KT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlUmVjb3JkKHt2YXJpYWJsZXM6aW5wdXR9KS50aGVuKChyZXMpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYocmVzLmRhdGEuY3JlYXRlUmVjb3JkLnN0YXR1cyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc2V0Rm9ybSgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldElzT3BlbihmYWxzZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFN1Ym1pdHRpbmcoZmFsc2UpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsoe2hhbmRsZVN1Ym1pdCxpc1N1Ym1pdHRpbmcsdmFsdWVzfSk9PihcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7d2lkdGg6XCIxMDAlXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHMxMiBtNiBpbnB1dC1maWVsZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCB0eXBlPVwidGV4dFwiIG5hbWU9XCJicFwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImJwXCI+Qmxvb2QgUHJlc3N1cmU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHMxMiBtNiBpbnB1dC1maWVsZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCB0eXBlPVwidGV4dFwiIG5hbWU9XCJkaWFiZXRpY3NcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJkaWFiZXRpY3NcIj5EaWFiZXRpY3MgSGlzdG9yeTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgczEyIG02IGlucHV0LWZpZWxkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImFsbGVyZ2llc1wiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImFsbGVyZ2llc1wiPkRydWcgQWxsZXJnaWVzPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBzMTIgbTYgaW5wdXQtZmllbGRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgYXM9XCJzZWxlY3RcIiBuYW1lPVwidWxjZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiIGRpc2FibGVkIHNlbGVjdGVkPkRvIHlvdSBoYXZlIFVsY2VyID88L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlllc1wiPlllczwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiTm9cIj5Obzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgczEyIG02IGlucHV0LWZpZWxkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIGFzPVwic2VsZWN0XCIgbmFtZT1cImh5cGVydGVuc2l2ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCIgZGlzYWJsZWQgc2VsZWN0ZWQ+QXJlIHlvdSBoeXBlcnRlbnNpdmUgPzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiWWVzXCI+WWVzPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJOb1wiPk5vPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9GaWVsZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBzMTIgbTYgaW5wdXQtZmllbGRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgYXM9XCJzZWxlY3RcIiBuYW1lPVwic21va2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiIGRpc2FibGVkIHNlbGVjdGVkPkRvIHlvdSBzbW9rZSA/PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJZZXNcIj5ZZXM8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIk5vXCI+Tm88L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZpZWxkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHMxMiBtNiBpbnB1dC1maWVsZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCBhcz1cInNlbGVjdFwiIG5hbWU9XCJkcmlua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCIgZGlzYWJsZWQgc2VsZWN0ZWQ+RG8geW91IERyaW5rID88L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlllc1wiPlllczwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiTm9cIj5Obzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiT2NjYXNpb25hbGx5XCI+T2NjYXNpb25hbGx5PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9GaWVsZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBzMTIgbTYgaW5wdXQtZmllbGRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgdHlwZT1cInRleHRcIiBuYW1lPVwic3VyZ2VyeVwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInN1cmdlcnlcIj5TdXJnZXJ5IEhpc3Rvcnk8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHMxMiBtNiBpbnB1dC1maWVsZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCB0eXBlPVwidGV4dFwiIG5hbWU9XCJhZG1pc3Npb25cIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJhZG1pc3Npb25cIj5BZG1pc3Npb24gSGlzdG9yeTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgczEyIG02IGlucHV0LWZpZWxkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIm1lZGljYXRpb25cIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJtZWRpY2F0aW9uXCI+Q3VycmVudCBNZWRpY2F0aW9uPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBzMTIgbTYgaW5wdXQtZmllbGRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgdHlwZT1cInRleHRcIiBuYW1lPVwiZGlhZ25vc2lzXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZGlhZ25vc2lzXCI+Q3VycmVudCBEaWFnbm9zaXM8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHMxMiBtNlwiIHN0eWxlPXt7cGFkZGluZ0xlZnQ6XCI1MHB4XCIsIGZvbnRXZWlnaHQ6XCI2MDBcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkZvciBGZW1hbGUgUGF0aWVudHM8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgczEyIG02IGlucHV0LWZpZWxkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIHR5cGU9XCJudW1iZXJcIiBuYW1lPVwia2lkc1wiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImtpZHNcIj5OdW1iZXIgb2Yga2lkczwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgczEyIG02IGlucHV0LWZpZWxkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIGFzPVwic2VsZWN0XCIgbmFtZT1cIm1vZGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiIGRpc2FibGVkIHNlbGVjdGVkPk1vZGUgb2YgQ2hpbGQgQmlydGg8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkNTXCI+Q1M8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIk5vcm1hbFwiPk5vcm1hbDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+PGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gaW5kaWdvIGJ0bi1tZWRpdW1cIiBkaXNhYmxlZD17aXNTdWJtaXR0aW5nfSAgb25DbGljaz17aGFuZGxlU3VibWl0fT57aXNTdWJtaXR0aW5nID8gXCJQbGVhc2Ugd2FpdC4uLlwiOlwiU3VibWl0XCJ9PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgICAgICAgICAgICApfTwvRm9ybWlrPiBcclxuICAgICAgICAgICAgPC9Nb2RhbD5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgLmlucHV0LWZpZWxke1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OjQwcHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIH0gICAgXHJcbiAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXgiXX0= */\n/*@ sourceURL=C:\\\\Users\\\\Abiodun Michael\\\\Desktop\\\\chainmedic\\\\front\\\\pages\\\\hos\\\\record\\\\[id].js */"));
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaG9zL3JlY29yZC8uanMiXSwibmFtZXMiOlsiTSIsInJlcXVpcmUiLCJJbmRleCIsInVzZVN0YXRlIiwiaXNPcGVuIiwic2V0SXNPcGVuIiwidXNlUm91dGVyIiwicXVlcnkiLCJpZCIsInNwbGl0IiwidXNlUXVlcnkiLCJHRVRfQUxMX1JFQ09SRF9CWV9VU0VSX0lEIiwidmFyaWFibGVzIiwidXNlcklkIiwicGFyc2VJbnQiLCJkYXRhIiwibG9hZGluZyIsInJlZmV0Y2giLCJ1c2VNdXRhdGlvbiIsIkNSRUFURV9SRUNPUkQiLCJvbkNvbXBsZXRlZCIsImNyZWF0ZVJlY29yZCIsInN0YXR1cyIsInRvYXN0Iiwic3VjY2VzcyIsIm1lc3NhZ2UiLCJlcnJvciIsIm9uRXJyb3IiLCJlcnJvcnMiLCJjb25zb2xlIiwibG9nIiwidXNlRWZmZWN0IiwiQXV0b0luaXQiLCJyZXBsYWNlIiwidG9VcHBlckNhc2UiLCJnZXRBbGxSZWNvcmRCeVVzZXJJZCIsIm1hcCIsImkiLCJ0cmFuc0lkIiwiaG9zcGl0YWwiLCJjcmVhdGVkQXQiLCJuYW1lIiwicGhvbmVOdW1iZXIiLCJhZGRyZXNzIiwiZGlhZ25vc2lzIiwiaHlwZXJ0ZW5zaXZlIiwidWxjZXIiLCJicCIsImRpYWJldGljcyIsImFsbGVyZ2llcyIsInNtb2tlIiwiZHJpbmsiLCJzdXJnZXJ5IiwiaW5wdXQiLCJzZXRTdWJtaXR0aW5nIiwicmVzZXRGb3JtIiwidGhlbiIsInJlcyIsImhhbmRsZVN1Ym1pdCIsImlzU3VibWl0dGluZyIsInZhbHVlcyIsIndpZHRoIiwicGFkZGluZ0xlZnQiLCJmb250V2VpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBTUEsQ0FBQyxHQUFHLE9BQStCQyxtQkFBTyxDQUFDLDhFQUFELENBQXRDLEdB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QUMsSUFBZDtBQUFBO0FBQUEsWUFGSixFQUdJO0FBQVEsV0FBSyxFQUFDLFFBQWQ7QUFBQTtBQUFBLGdCQUhKLENBREEsRUFNQTtBQUFBO0FBQUEsTUFOQSxFQU1NO0FBQUE7QUFBQSxNQU5OLEVBT0E7QUFBMEMsY0FBUSxFQUFFSixZQUFwRDtBQUFtRSxhQUFPLEVBQUVELFlBQTVFO0FBQUEseUNBQWtCO0FBQWxCLE9BQTJGQyxZQUFZLEdBQUcsZ0JBQUgsR0FBb0IsUUFBM0gsQ0FQQSxDQWpFUixDQURJLENBREosQ0FESztBQUFBLEdBYlQsQ0FIUixDQXpCSjtBQUFBO0FBQUEsOHhaQURSO0FBbUlDLENBL0pEOztHQUFNekQsSztVQUVjSSxxRCxFQUtlSSx1RCxFQUVUUSwwRDs7O0tBVHBCaEIsSztBQWlLU0Esb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaG9zL3JlY29yZC9baWRdLmI0YjdiOTIyNjc2ODUzMGI4ZTFjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse3VzZVN0YXRlLHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBOYXYgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9sYXlvdXQvaG9zJ1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCB7TW9kYWx9IGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvbW9kYWwnXHJcbmltcG9ydCB7dXNlUXVlcnksdXNlTXV0YXRpb259IGZyb20gJ0BhcG9sbG8vY2xpZW50J1xyXG5pbXBvcnQge0dFVF9BTExfUkVDT1JEX0JZX1VTRVJfSUQsQ1JFQVRFX1JFQ09SRH0gZnJvbSAnLi4vLi4vLi4vZ3JhcGhxbC9zY2hlbWEnXHJcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHtGb3JtaWssRm9ybSxGaWVsZH0gZnJvbSAnZm9ybWlrJ1xyXG5pbXBvcnQge3RvYXN0fSBmcm9tICdyZWFjdC10b2FzdGlmeSdcclxuY29uc3QgTSA9IHR5cGVvZiB3aW5kb3cgIT09XCJ1bmRlZmluZWRcIiA/IHJlcXVpcmUoXCJtYXRlcmlhbGl6ZS1jc3NcIik6JydcclxuXHJcblxyXG5cclxuY29uc3QgSW5kZXggPSAoKT0+e1xyXG4gICAgY29uc3QgW2lzT3BlbixzZXRJc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgICBjb25zdCB7cXVlcnl9ID0gdXNlUm91dGVyKClcclxuXHJcbiAgICBjb25zdCBpZCA9IHF1ZXJ5LmlkLnNwbGl0KFwiX1wiKVxyXG5cclxuICAgIFxyXG4gICBjb25zdCB7ZGF0YSxsb2FkaW5nLHJlZmV0Y2h9ID0gIHVzZVF1ZXJ5KEdFVF9BTExfUkVDT1JEX0JZX1VTRVJfSUQse3ZhcmlhYmxlczp7dXNlcklkOnBhcnNlSW50KGlkWzBdKX19KVxyXG5cclxuICAgY29uc3QgW2NyZWF0ZVJlY29yZF0gPSB1c2VNdXRhdGlvbihDUkVBVEVfUkVDT1JELHtcclxuICAgICAgIG9uQ29tcGxldGVkKHtjcmVhdGVSZWNvcmR9KXtcclxuICAgICAgICBpZihjcmVhdGVSZWNvcmQuc3RhdHVzKXtcclxuICAgICAgICAgICAgcmVmZXRjaCgpXHJcbiAgICAgICAgICAgIHRvYXN0LnN1Y2Nlc3MoY3JlYXRlUmVjb3JkLm1lc3NhZ2UpXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHRvYXN0LmVycm9yKGNyZWF0ZVJlY29yZC5tZXNzYWdlKVxyXG4gICAgICAgIH1cclxuICAgICAgIH0sXHJcbiAgICAgICBvbkVycm9yKGVycm9ycyl7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3JzKVxyXG4gICAgICAgfVxyXG4gICB9KVxyXG5cclxuXHJcbiAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgTS5BdXRvSW5pdCgpXHJcbiAgIH0pXHJcblxyXG5yZXR1cm4oXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPE5hdiAvPlxyXG4gICAgICAgICAgICA8YnIgLz48YnIgLz5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxoNT57aWRbMV0ucmVwbGFjZShcIi1cIixcIiBcIikudG9VcHBlckNhc2UoKX0ncyBNZWRpY2FsIFJlY29yZHMgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gcmlnaHQgaW5kaWdvXCIgb25DbGljaz17KCk9PnNldElzT3Blbih0cnVlKX0+QWRkIFJlY29yZDwvYnV0dG9uPjwvaDU+PGJyIC8+XHJcbiAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgIGxvYWRpbmcgPyA8cD5Mb2FkaW5nLi4uPC9wPjpcclxuICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJzdHJpcGVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICA8dHI+PHRoPiM8L3RoPjx0aD5Ib3NwaXRhbDwvdGg+PHRoPlBob25lPC90aD48dGg+QWRkcmVzczwvdGg+PHRoPkNyZWF0ZWQ8L3RoPjx0aD4uLi48L3RoPjwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YSA/IGRhdGEuZ2V0QWxsUmVjb3JkQnlVc2VySWQubWFwKCh7dHJhbnNJZCxob3NwaXRhbCxjcmVhdGVkQXR9LGkpPT4oXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+PHRkPnsxK2l9LjwvdGQ+PHRkPntob3NwaXRhbC5uYW1lfTwvdGQ+PHRkPntob3NwaXRhbC5waG9uZU51bWJlcn08L3RkPjx0ZD57aG9zcGl0YWwuYWRkcmVzc308L3RkPjx0ZD57Y3JlYXRlZEF0fTwvdGQ+PHRkPjxMaW5rIGhyZWY9XCIvaG9zL2luZm8vW3RpZF1cIiBhcz17YC9ob3MvaW5mby8ke3RyYW5zSWR9YH0+PGE+PGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj52aXNpYmlsaXR5PC9pPjwvYT48L0xpbms+PC90ZD48L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICApKTpudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPE1vZGFsIHRpdGxlPVwiQ3JlYXRlIFJlY29yZFwiIGlzT3Blbj17aXNPcGVufSBcclxuICAgICAgICAgICAgICAgIGNsb3NlPXsoKT0+c2V0SXNPcGVuKGZhbHNlKX0gXHJcbiAgICAgICAgICAgICAgICBpc0xpbmU9e3RydWV9IG92ZXJmbG93PXt0cnVlfT5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybWlrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuYWJsZVJlaW5pdGlhbGl6ZT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5pdGlhbFZhbHVlcz17e2RpYWdub3NpczpcIlwiLGh5cGVydGVuc2l2ZTonJywgdWxjZXI6XCJcIiwgYnA6JycsZGlhYmV0aWNzOicnLGFsbGVyZ2llczonJyxzbW9rZTonJyxkcmluazonJyxzdXJnZXJ5OicnLGFsbGVyZ2llczonJyxhZG1pc3Npb246JycsbWVkaWNhdGlvbjonJyxraWRzOicnLG1vZGU6JycsIHVzZXJJZDpwYXJzZUludChpZFswXSl9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvblN1Ym1pdD17KGlucHV0LHtzZXRTdWJtaXR0aW5nLHJlc2V0Rm9ybX0pPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVSZWNvcmQoe3ZhcmlhYmxlczppbnB1dH0pLnRoZW4oKHJlcyk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihyZXMuZGF0YS5jcmVhdGVSZWNvcmQuc3RhdHVzKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzZXRGb3JtKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0SXNPcGVuKGZhbHNlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U3VibWl0dGluZyhmYWxzZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyh7aGFuZGxlU3VibWl0LGlzU3VibWl0dGluZyx2YWx1ZXN9KT0+KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3t3aWR0aDpcIjEwMCVcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgczEyIG02IGlucHV0LWZpZWxkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImJwXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiYnBcIj5CbG9vZCBQcmVzc3VyZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgczEyIG02IGlucHV0LWZpZWxkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImRpYWJldGljc1wiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImRpYWJldGljc1wiPkRpYWJldGljcyBIaXN0b3J5PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBzMTIgbTYgaW5wdXQtZmllbGRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgdHlwZT1cInRleHRcIiBuYW1lPVwiYWxsZXJnaWVzXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiYWxsZXJnaWVzXCI+RHJ1ZyBBbGxlcmdpZXM8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHMxMiBtNiBpbnB1dC1maWVsZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCBhcz1cInNlbGVjdFwiIG5hbWU9XCJ1bGNlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCIgZGlzYWJsZWQgc2VsZWN0ZWQ+RG8geW91IGhhdmUgVWxjZXIgPzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiWWVzXCI+WWVzPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJOb1wiPk5vPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9GaWVsZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBzMTIgbTYgaW5wdXQtZmllbGRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgYXM9XCJzZWxlY3RcIiBuYW1lPVwiaHlwZXJ0ZW5zaXZlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIiBkaXNhYmxlZCBzZWxlY3RlZD5BcmUgeW91IGh5cGVydGVuc2l2ZSA/PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJZZXNcIj5ZZXM8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIk5vXCI+Tm88L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZpZWxkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHMxMiBtNiBpbnB1dC1maWVsZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCBhcz1cInNlbGVjdFwiIG5hbWU9XCJzbW9rZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCIgZGlzYWJsZWQgc2VsZWN0ZWQ+RG8geW91IHNtb2tlID88L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlllc1wiPlllczwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiTm9cIj5Obzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgczEyIG02IGlucHV0LWZpZWxkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIGFzPVwic2VsZWN0XCIgbmFtZT1cImRyaW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIiBkaXNhYmxlZCBzZWxlY3RlZD5EbyB5b3UgRHJpbmsgPzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiWWVzXCI+WWVzPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJOb1wiPk5vPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJPY2Nhc2lvbmFsbHlcIj5PY2Nhc2lvbmFsbHk8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZpZWxkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHMxMiBtNiBpbnB1dC1maWVsZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCB0eXBlPVwidGV4dFwiIG5hbWU9XCJzdXJnZXJ5XCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwic3VyZ2VyeVwiPlN1cmdlcnkgSGlzdG9yeTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgczEyIG02IGlucHV0LWZpZWxkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImFkbWlzc2lvblwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImFkbWlzc2lvblwiPkFkbWlzc2lvbiBIaXN0b3J5PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBzMTIgbTYgaW5wdXQtZmllbGRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgdHlwZT1cInRleHRcIiBuYW1lPVwibWVkaWNhdGlvblwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm1lZGljYXRpb25cIj5DdXJyZW50IE1lZGljYXRpb248L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHMxMiBtNiBpbnB1dC1maWVsZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCB0eXBlPVwidGV4dFwiIG5hbWU9XCJkaWFnbm9zaXNcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJkaWFnbm9zaXNcIj5DdXJyZW50IERpYWdub3NpczwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgczEyIG02XCIgc3R5bGU9e3twYWRkaW5nTGVmdDpcIjUwcHhcIiwgZm9udFdlaWdodDpcIjYwMFwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+Rm9yIEZlbWFsZSBQYXRpZW50czwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBzMTIgbTYgaW5wdXQtZmllbGRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgdHlwZT1cIm51bWJlclwiIG5hbWU9XCJraWRzXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwia2lkc1wiPk51bWJlciBvZiBraWRzPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBzMTIgbTYgaW5wdXQtZmllbGRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgYXM9XCJzZWxlY3RcIiBuYW1lPVwibW9kZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCIgZGlzYWJsZWQgc2VsZWN0ZWQ+TW9kZSBvZiBDaGlsZCBCaXJ0aDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQ1NcIj5DUzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiTm9ybWFsXCI+Tm9ybWFsPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9GaWVsZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz48YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBpbmRpZ28gYnRuLW1lZGl1bVwiIGRpc2FibGVkPXtpc1N1Ym1pdHRpbmd9ICBvbkNsaWNrPXtoYW5kbGVTdWJtaXR9Pntpc1N1Ym1pdHRpbmcgPyBcIlBsZWFzZSB3YWl0Li4uXCI6XCJTdWJtaXRcIn08L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgICl9PC9Gb3JtaWs+IFxyXG4gICAgICAgICAgICA8L01vZGFsPlxyXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICAuaW5wdXQtZmllbGR7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6NDBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgfSAgICBcclxuICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleCJdLCJzb3VyY2VSb290IjoiIn0=