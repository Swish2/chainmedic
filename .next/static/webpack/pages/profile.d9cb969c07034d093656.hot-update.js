webpackHotUpdate_N_E("pages/profile",{

/***/ "./graphql/schema.js":
/*!***************************!*\
  !*** ./graphql/schema.js ***!
  \***************************/
/*! exports provided: LOGIN_HOSPITAL, LOGIN_USER, GET_USER_INFO, GET_ACCESS_BY_HOSPITAL, GET_ALL_RECORD_BY_USER_ID, GET_ALL_RECORD_BY_USER, CREATE_RECORD, CREATE_HOSPITAL, GET_USER_INFO_BY_ID, CREATE_USER, CREATE_ACCESS, UPDATE_USER, UPDATE_HOSPITAL, GET_HOSPITAL_PROFILE, VERIFY_USER, VERIFY_HOSPITAL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_HOSPITAL", function() { return LOGIN_HOSPITAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_USER", function() { return LOGIN_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_USER_INFO", function() { return GET_USER_INFO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_ACCESS_BY_HOSPITAL", function() { return GET_ACCESS_BY_HOSPITAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_ALL_RECORD_BY_USER_ID", function() { return GET_ALL_RECORD_BY_USER_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_ALL_RECORD_BY_USER", function() { return GET_ALL_RECORD_BY_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATE_RECORD", function() { return CREATE_RECORD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATE_HOSPITAL", function() { return CREATE_HOSPITAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_USER_INFO_BY_ID", function() { return GET_USER_INFO_BY_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATE_USER", function() { return CREATE_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATE_ACCESS", function() { return CREATE_ACCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_USER", function() { return UPDATE_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_HOSPITAL", function() { return UPDATE_HOSPITAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_HOSPITAL_PROFILE", function() { return GET_HOSPITAL_PROFILE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VERIFY_USER", function() { return VERIFY_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VERIFY_HOSPITAL", function() { return VERIFY_HOSPITAL; });
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");


function _templateObject16() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    mutation VerifyHospital(\n        $email:String!,\n        $code:String!\n    ){\n        verifyHospital(input:{\n            email:$email,\n            code:$code\n        }){\n            message\n            status\n        }\n    }\n"]);

  _templateObject16 = function _templateObject16() {
    return data;
  };

  return data;
}

function _templateObject15() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    mutation VerifyUser(\n        $email:String!,\n        $code:String!\n    ){\n        verifyUser(input:{\n            email:$email,\n            code:$code\n        }){\n            message\n            status\n        }\n    }\n"]);

  _templateObject15 = function _templateObject15() {
    return data;
  };

  return data;
}

function _templateObject14() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    query{\n        getHospitalProfile{\n            name\n            email\n            address\n            regNumber\n            publicKey\n            privateKey\n            phoneNumber\n        }\n    }\n\n"]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    mutation UpdateHospital(\n        $name: String!\n        $phoneNumber: String!\n        $address: String!\n        $regNumber: String!\n    ){\n        updateHospital(input:{\n            name:$name,\n            phoneNumber:$phoneNumber,\n            address:$address,\n            regNumber:$regNumber\n        }){\n            message\n            status\n        }\n    }\n"]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    mutation UpdateUser(\n        $name: String!\n        $phoneNumber: String!\n        $dateOfBirth: String\n        $address: String!\n        $gender: String!\n        $maritalStatus: String\n        $genotype: String\n        $bloodGroup: String\n    ){\n        updateUser(input :{\n            name:$name,\n            phoneNumber:$phoneNumber,\n            dateOfBirth:$dateOfBirth,\n            address:$address,\n            gender:$gender,\n            maritalStatus:$maritalStatus,\n            genotype:$genotype,\n            bloodGroup:$bloodGroup\n        }) {\n            message\n            status\n        }\n    }\n\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\nmutation CreateAccess($email:String!)\n    {\n        createAccess(email:$email){\n        message\n        status\n        }\n    }\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    mutation CreateUser(\n        $name:String!,\n        $email:String!,\n        $phoneNumber:String!,\n        $password:String!,\n        $address:String!\n    ){\n        createUser(input:{\n            name:$name,\n            email:$email,\n            phoneNumber:$phoneNumber,\n            password:$password,\n            address:$address\n        }){\n            message\n            status\n        }\n    }\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    query GetUserInfoById($id:Int){\n        getUserInfoById(id:$id){\n            name\n            address\n            gender\n            dateOfBirth\n            maritalStatus\n            genotype\n            bloodGroup\n            email\n            phoneNumber\n        }\n    }\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    mutation CreateHospital(\n        $name:String!,\n        $email:String!,\n        $phoneNumber:String!,\n        $password:String!,\n        $address:String!\n    ){\n        createHospital(input:{\n            name:$name,\n            email:$email,\n            phoneNumber:$phoneNumber,\n            password:$password,\n            address:$address\n        }){\n            message\n            status\n        }\n    }\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    mutation CreateRecord(\n        $bp:String,\n        $diabetics:String,\n        $allergies:String,\n        $smoke:String,\n        $drink:String,\n        $surgery:String,\n        $admission:String,\n        $medication:String,\n        $kids:Int,\n        $userId:Int\n    ){\n        createRecord(input:{\n            bp:$bp,\n            diabetics:$diabetics,\n            allergies:$allergies,\n            smoke:$smoke,\n            drink:$drink,\n            surgery:$surgery,\n            admission:$admission,\n            medication:$medication,\n            kids:$kids,\n            userId:$userId\n        }){\n            message\n            status\n        }\n    }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    query {\n        getAllRecordByUser{\n            transId\n            createdAt\n            hospital{\n                name\n            }\n          }\n    }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    query GetAllRecordByUserId($userId:Int){\n        getAllRecordByUserId(userId:$userId){\n            transId\n            createdAt\n            hospital{\n                name\n                address\n                phoneNumber\n            }\n            user{\n                address\n                phoneNumber\n            }\n          }\n    }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    query{\n        getAccessByHospital{\n            id\n            createdAt\n            user{\n                id\n                name\n                email\n                phoneNumber\n                address\n            }\n        }\n    }\n\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    query{\n        getUserProfile{\n            name\n            email\n            phoneNumber\n            address\n            gender\n            dateOfBirth\n            bloodGroup\n            genotype\n            maritalStatus\n        }\n    }\n\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    mutation Login(\n        $email:String!,\n        $password:String!\n    ){\n        login(input:{\n            email:$email,\n            password:$password\n        }){\n            message\n            status\n            token\n        }\n    }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    mutation LoginHospital(\n        $email:String!,\n        $password:String!\n    ){\n        loginHospital(input:{\n            email:$email,\n            password:$password\n        }){\n            message\n            status\n            token\n        }\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var LOGIN_HOSPITAL = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_1__["gql"])(_templateObject());
var LOGIN_USER = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_1__["gql"])(_templateObject2());
var GET_USER_INFO = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_1__["gql"])(_templateObject3());
var GET_ACCESS_BY_HOSPITAL = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_1__["gql"])(_templateObject4());
var GET_ALL_RECORD_BY_USER_ID = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_1__["gql"])(_templateObject5());
var GET_ALL_RECORD_BY_USER = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_1__["gql"])(_templateObject6());
var CREATE_RECORD = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_1__["gql"])(_templateObject7());
var CREATE_HOSPITAL = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_1__["gql"])(_templateObject8());
var GET_USER_INFO_BY_ID = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_1__["gql"])(_templateObject9());
var CREATE_USER = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_1__["gql"])(_templateObject10());
var CREATE_ACCESS = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_1__["gql"])(_templateObject11());
var UPDATE_USER = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_1__["gql"])(_templateObject12());
var UPDATE_HOSPITAL = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_1__["gql"])(_templateObject13());
var GET_HOSPITAL_PROFILE = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_1__["gql"])(_templateObject14());
var VERIFY_USER = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_1__["gql"])(_templateObject15());
var VERIFY_HOSPITAL = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_1__["gql"])(_templateObject16());

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZ3JhcGhxbC9zY2hlbWEuanMiXSwibmFtZXMiOlsiTE9HSU5fSE9TUElUQUwiLCJncWwiLCJMT0dJTl9VU0VSIiwiR0VUX1VTRVJfSU5GTyIsIkdFVF9BQ0NFU1NfQllfSE9TUElUQUwiLCJHRVRfQUxMX1JFQ09SRF9CWV9VU0VSX0lEIiwiR0VUX0FMTF9SRUNPUkRfQllfVVNFUiIsIkNSRUFURV9SRUNPUkQiLCJDUkVBVEVfSE9TUElUQUwiLCJHRVRfVVNFUl9JTkZPX0JZX0lEIiwiQ1JFQVRFX1VTRVIiLCJDUkVBVEVfQUNDRVNTIiwiVVBEQVRFX1VTRVIiLCJVUERBVEVfSE9TUElUQUwiLCJHRVRfSE9TUElUQUxfUFJPRklMRSIsIlZFUklGWV9VU0VSIiwiVkVSSUZZX0hPU1BJVEFMIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRU8sSUFBTUEsY0FBYyxHQUFHQywwREFBSCxtQkFBcEI7QUFnQkEsSUFBTUMsVUFBVSxHQUFHRCwwREFBSCxvQkFBaEI7QUFnQkEsSUFBTUUsYUFBYSxHQUFHRiwwREFBSCxvQkFBbkI7QUFpQkEsSUFBTUcsc0JBQXNCLEdBQUdILDBEQUFILG9CQUE1QjtBQWtCQSxJQUFNSSx5QkFBeUIsR0FBR0osMERBQUgsb0JBQS9CO0FBaUJBLElBQU1LLHNCQUFzQixHQUFHTCwwREFBSCxvQkFBNUI7QUFZQSxJQUFNTSxhQUFhLEdBQUdOLDBEQUFILG9CQUFuQjtBQStCQSxJQUFNTyxlQUFlLEdBQUdQLDBEQUFILG9CQUFyQjtBQXFCQSxJQUFNUSxtQkFBbUIsR0FBR1IsMERBQUgsb0JBQXpCO0FBZ0JBLElBQU1TLFdBQVcsR0FBR1QsMERBQUgscUJBQWpCO0FBcUJBLElBQU1VLGFBQWEsR0FBR1YsMERBQUgscUJBQW5CO0FBVUEsSUFBTVcsV0FBVyxHQUFHWCwwREFBSCxxQkFBakI7QUE0QkEsSUFBTVksZUFBZSxHQUFHWiwwREFBSCxxQkFBckI7QUFtQkEsSUFBTWEsb0JBQW9CLEdBQUdiLDBEQUFILHFCQUExQjtBQWVBLElBQU1jLFdBQVcsR0FBR2QsMERBQUgscUJBQWpCO0FBZUEsSUFBTWUsZUFBZSxHQUFHZiwwREFBSCxxQkFBckIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZmlsZS5kOWNiOTY5YzA3MDM0ZDA5MzY1Ni5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtncWx9IGZyb20gJ0BhcG9sbG8vY2xpZW50J1xyXG5cclxuZXhwb3J0IGNvbnN0IExPR0lOX0hPU1BJVEFMID0gZ3FsYFxyXG4gICAgbXV0YXRpb24gTG9naW5Ib3NwaXRhbChcclxuICAgICAgICAkZW1haWw6U3RyaW5nISxcclxuICAgICAgICAkcGFzc3dvcmQ6U3RyaW5nIVxyXG4gICAgKXtcclxuICAgICAgICBsb2dpbkhvc3BpdGFsKGlucHV0OntcclxuICAgICAgICAgICAgZW1haWw6JGVtYWlsLFxyXG4gICAgICAgICAgICBwYXNzd29yZDokcGFzc3dvcmRcclxuICAgICAgICB9KXtcclxuICAgICAgICAgICAgbWVzc2FnZVxyXG4gICAgICAgICAgICBzdGF0dXNcclxuICAgICAgICAgICAgdG9rZW5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBMT0dJTl9VU0VSID0gZ3FsYFxyXG4gICAgbXV0YXRpb24gTG9naW4oXHJcbiAgICAgICAgJGVtYWlsOlN0cmluZyEsXHJcbiAgICAgICAgJHBhc3N3b3JkOlN0cmluZyFcclxuICAgICl7XHJcbiAgICAgICAgbG9naW4oaW5wdXQ6e1xyXG4gICAgICAgICAgICBlbWFpbDokZW1haWwsXHJcbiAgICAgICAgICAgIHBhc3N3b3JkOiRwYXNzd29yZFxyXG4gICAgICAgIH0pe1xyXG4gICAgICAgICAgICBtZXNzYWdlXHJcbiAgICAgICAgICAgIHN0YXR1c1xyXG4gICAgICAgICAgICB0b2tlblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IEdFVF9VU0VSX0lORk8gPSBncWxgXHJcbiAgICBxdWVyeXtcclxuICAgICAgICBnZXRVc2VyUHJvZmlsZXtcclxuICAgICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgICBlbWFpbFxyXG4gICAgICAgICAgICBwaG9uZU51bWJlclxyXG4gICAgICAgICAgICBhZGRyZXNzXHJcbiAgICAgICAgICAgIGdlbmRlclxyXG4gICAgICAgICAgICBkYXRlT2ZCaXJ0aFxyXG4gICAgICAgICAgICBibG9vZEdyb3VwXHJcbiAgICAgICAgICAgIGdlbm90eXBlXHJcbiAgICAgICAgICAgIG1hcml0YWxTdGF0dXNcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgR0VUX0FDQ0VTU19CWV9IT1NQSVRBTCA9IGdxbGBcclxuICAgIHF1ZXJ5e1xyXG4gICAgICAgIGdldEFjY2Vzc0J5SG9zcGl0YWx7XHJcbiAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgIGNyZWF0ZWRBdFxyXG4gICAgICAgICAgICB1c2Vye1xyXG4gICAgICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgICAgIG5hbWVcclxuICAgICAgICAgICAgICAgIGVtYWlsXHJcbiAgICAgICAgICAgICAgICBwaG9uZU51bWJlclxyXG4gICAgICAgICAgICAgICAgYWRkcmVzc1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuYFxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBHRVRfQUxMX1JFQ09SRF9CWV9VU0VSX0lEID0gZ3FsYFxyXG4gICAgcXVlcnkgR2V0QWxsUmVjb3JkQnlVc2VySWQoJHVzZXJJZDpJbnQpe1xyXG4gICAgICAgIGdldEFsbFJlY29yZEJ5VXNlcklkKHVzZXJJZDokdXNlcklkKXtcclxuICAgICAgICAgICAgdHJhbnNJZFxyXG4gICAgICAgICAgICBjcmVhdGVkQXRcclxuICAgICAgICAgICAgaG9zcGl0YWx7XHJcbiAgICAgICAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICAgICAgICBhZGRyZXNzXHJcbiAgICAgICAgICAgICAgICBwaG9uZU51bWJlclxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHVzZXJ7XHJcbiAgICAgICAgICAgICAgICBhZGRyZXNzXHJcbiAgICAgICAgICAgICAgICBwaG9uZU51bWJlclxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICB9XHJcbmBcclxuZXhwb3J0IGNvbnN0IEdFVF9BTExfUkVDT1JEX0JZX1VTRVIgPSBncWxgXHJcbiAgICBxdWVyeSB7XHJcbiAgICAgICAgZ2V0QWxsUmVjb3JkQnlVc2Vye1xyXG4gICAgICAgICAgICB0cmFuc0lkXHJcbiAgICAgICAgICAgIGNyZWF0ZWRBdFxyXG4gICAgICAgICAgICBob3NwaXRhbHtcclxuICAgICAgICAgICAgICAgIG5hbWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgfVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgQ1JFQVRFX1JFQ09SRCA9IGdxbGBcclxuICAgIG11dGF0aW9uIENyZWF0ZVJlY29yZChcclxuICAgICAgICAkYnA6U3RyaW5nLFxyXG4gICAgICAgICRkaWFiZXRpY3M6U3RyaW5nLFxyXG4gICAgICAgICRhbGxlcmdpZXM6U3RyaW5nLFxyXG4gICAgICAgICRzbW9rZTpTdHJpbmcsXHJcbiAgICAgICAgJGRyaW5rOlN0cmluZyxcclxuICAgICAgICAkc3VyZ2VyeTpTdHJpbmcsXHJcbiAgICAgICAgJGFkbWlzc2lvbjpTdHJpbmcsXHJcbiAgICAgICAgJG1lZGljYXRpb246U3RyaW5nLFxyXG4gICAgICAgICRraWRzOkludCxcclxuICAgICAgICAkdXNlcklkOkludFxyXG4gICAgKXtcclxuICAgICAgICBjcmVhdGVSZWNvcmQoaW5wdXQ6e1xyXG4gICAgICAgICAgICBicDokYnAsXHJcbiAgICAgICAgICAgIGRpYWJldGljczokZGlhYmV0aWNzLFxyXG4gICAgICAgICAgICBhbGxlcmdpZXM6JGFsbGVyZ2llcyxcclxuICAgICAgICAgICAgc21va2U6JHNtb2tlLFxyXG4gICAgICAgICAgICBkcmluazokZHJpbmssXHJcbiAgICAgICAgICAgIHN1cmdlcnk6JHN1cmdlcnksXHJcbiAgICAgICAgICAgIGFkbWlzc2lvbjokYWRtaXNzaW9uLFxyXG4gICAgICAgICAgICBtZWRpY2F0aW9uOiRtZWRpY2F0aW9uLFxyXG4gICAgICAgICAgICBraWRzOiRraWRzLFxyXG4gICAgICAgICAgICB1c2VySWQ6JHVzZXJJZFxyXG4gICAgICAgIH0pe1xyXG4gICAgICAgICAgICBtZXNzYWdlXHJcbiAgICAgICAgICAgIHN0YXR1c1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IENSRUFURV9IT1NQSVRBTCA9IGdxbGBcclxuICAgIG11dGF0aW9uIENyZWF0ZUhvc3BpdGFsKFxyXG4gICAgICAgICRuYW1lOlN0cmluZyEsXHJcbiAgICAgICAgJGVtYWlsOlN0cmluZyEsXHJcbiAgICAgICAgJHBob25lTnVtYmVyOlN0cmluZyEsXHJcbiAgICAgICAgJHBhc3N3b3JkOlN0cmluZyEsXHJcbiAgICAgICAgJGFkZHJlc3M6U3RyaW5nIVxyXG4gICAgKXtcclxuICAgICAgICBjcmVhdGVIb3NwaXRhbChpbnB1dDp7XHJcbiAgICAgICAgICAgIG5hbWU6JG5hbWUsXHJcbiAgICAgICAgICAgIGVtYWlsOiRlbWFpbCxcclxuICAgICAgICAgICAgcGhvbmVOdW1iZXI6JHBob25lTnVtYmVyLFxyXG4gICAgICAgICAgICBwYXNzd29yZDokcGFzc3dvcmQsXHJcbiAgICAgICAgICAgIGFkZHJlc3M6JGFkZHJlc3NcclxuICAgICAgICB9KXtcclxuICAgICAgICAgICAgbWVzc2FnZVxyXG4gICAgICAgICAgICBzdGF0dXNcclxuICAgICAgICB9XHJcbiAgICB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBHRVRfVVNFUl9JTkZPX0JZX0lEID0gZ3FsYFxyXG4gICAgcXVlcnkgR2V0VXNlckluZm9CeUlkKCRpZDpJbnQpe1xyXG4gICAgICAgIGdldFVzZXJJbmZvQnlJZChpZDokaWQpe1xyXG4gICAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICAgIGFkZHJlc3NcclxuICAgICAgICAgICAgZ2VuZGVyXHJcbiAgICAgICAgICAgIGRhdGVPZkJpcnRoXHJcbiAgICAgICAgICAgIG1hcml0YWxTdGF0dXNcclxuICAgICAgICAgICAgZ2Vub3R5cGVcclxuICAgICAgICAgICAgYmxvb2RHcm91cFxyXG4gICAgICAgICAgICBlbWFpbFxyXG4gICAgICAgICAgICBwaG9uZU51bWJlclxyXG4gICAgICAgIH1cclxuICAgIH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IENSRUFURV9VU0VSID0gZ3FsYFxyXG4gICAgbXV0YXRpb24gQ3JlYXRlVXNlcihcclxuICAgICAgICAkbmFtZTpTdHJpbmchLFxyXG4gICAgICAgICRlbWFpbDpTdHJpbmchLFxyXG4gICAgICAgICRwaG9uZU51bWJlcjpTdHJpbmchLFxyXG4gICAgICAgICRwYXNzd29yZDpTdHJpbmchLFxyXG4gICAgICAgICRhZGRyZXNzOlN0cmluZyFcclxuICAgICl7XHJcbiAgICAgICAgY3JlYXRlVXNlcihpbnB1dDp7XHJcbiAgICAgICAgICAgIG5hbWU6JG5hbWUsXHJcbiAgICAgICAgICAgIGVtYWlsOiRlbWFpbCxcclxuICAgICAgICAgICAgcGhvbmVOdW1iZXI6JHBob25lTnVtYmVyLFxyXG4gICAgICAgICAgICBwYXNzd29yZDokcGFzc3dvcmQsXHJcbiAgICAgICAgICAgIGFkZHJlc3M6JGFkZHJlc3NcclxuICAgICAgICB9KXtcclxuICAgICAgICAgICAgbWVzc2FnZVxyXG4gICAgICAgICAgICBzdGF0dXNcclxuICAgICAgICB9XHJcbiAgICB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBDUkVBVEVfQUNDRVNTID0gZ3FsYFxyXG5tdXRhdGlvbiBDcmVhdGVBY2Nlc3MoJGVtYWlsOlN0cmluZyEpXHJcbiAgICB7XHJcbiAgICAgICAgY3JlYXRlQWNjZXNzKGVtYWlsOiRlbWFpbCl7XHJcbiAgICAgICAgbWVzc2FnZVxyXG4gICAgICAgIHN0YXR1c1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IFVQREFURV9VU0VSID0gZ3FsYFxyXG4gICAgbXV0YXRpb24gVXBkYXRlVXNlcihcclxuICAgICAgICAkbmFtZTogU3RyaW5nIVxyXG4gICAgICAgICRwaG9uZU51bWJlcjogU3RyaW5nIVxyXG4gICAgICAgICRkYXRlT2ZCaXJ0aDogU3RyaW5nXHJcbiAgICAgICAgJGFkZHJlc3M6IFN0cmluZyFcclxuICAgICAgICAkZ2VuZGVyOiBTdHJpbmchXHJcbiAgICAgICAgJG1hcml0YWxTdGF0dXM6IFN0cmluZ1xyXG4gICAgICAgICRnZW5vdHlwZTogU3RyaW5nXHJcbiAgICAgICAgJGJsb29kR3JvdXA6IFN0cmluZ1xyXG4gICAgKXtcclxuICAgICAgICB1cGRhdGVVc2VyKGlucHV0IDp7XHJcbiAgICAgICAgICAgIG5hbWU6JG5hbWUsXHJcbiAgICAgICAgICAgIHBob25lTnVtYmVyOiRwaG9uZU51bWJlcixcclxuICAgICAgICAgICAgZGF0ZU9mQmlydGg6JGRhdGVPZkJpcnRoLFxyXG4gICAgICAgICAgICBhZGRyZXNzOiRhZGRyZXNzLFxyXG4gICAgICAgICAgICBnZW5kZXI6JGdlbmRlcixcclxuICAgICAgICAgICAgbWFyaXRhbFN0YXR1czokbWFyaXRhbFN0YXR1cyxcclxuICAgICAgICAgICAgZ2Vub3R5cGU6JGdlbm90eXBlLFxyXG4gICAgICAgICAgICBibG9vZEdyb3VwOiRibG9vZEdyb3VwXHJcbiAgICAgICAgfSkge1xyXG4gICAgICAgICAgICBtZXNzYWdlXHJcbiAgICAgICAgICAgIHN0YXR1c1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBVUERBVEVfSE9TUElUQUwgPSBncWxgXHJcbiAgICBtdXRhdGlvbiBVcGRhdGVIb3NwaXRhbChcclxuICAgICAgICAkbmFtZTogU3RyaW5nIVxyXG4gICAgICAgICRwaG9uZU51bWJlcjogU3RyaW5nIVxyXG4gICAgICAgICRhZGRyZXNzOiBTdHJpbmchXHJcbiAgICAgICAgJHJlZ051bWJlcjogU3RyaW5nIVxyXG4gICAgKXtcclxuICAgICAgICB1cGRhdGVIb3NwaXRhbChpbnB1dDp7XHJcbiAgICAgICAgICAgIG5hbWU6JG5hbWUsXHJcbiAgICAgICAgICAgIHBob25lTnVtYmVyOiRwaG9uZU51bWJlcixcclxuICAgICAgICAgICAgYWRkcmVzczokYWRkcmVzcyxcclxuICAgICAgICAgICAgcmVnTnVtYmVyOiRyZWdOdW1iZXJcclxuICAgICAgICB9KXtcclxuICAgICAgICAgICAgbWVzc2FnZVxyXG4gICAgICAgICAgICBzdGF0dXNcclxuICAgICAgICB9XHJcbiAgICB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBHRVRfSE9TUElUQUxfUFJPRklMRSA9IGdxbGBcclxuICAgIHF1ZXJ5e1xyXG4gICAgICAgIGdldEhvc3BpdGFsUHJvZmlsZXtcclxuICAgICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgICBlbWFpbFxyXG4gICAgICAgICAgICBhZGRyZXNzXHJcbiAgICAgICAgICAgIHJlZ051bWJlclxyXG4gICAgICAgICAgICBwdWJsaWNLZXlcclxuICAgICAgICAgICAgcHJpdmF0ZUtleVxyXG4gICAgICAgICAgICBwaG9uZU51bWJlclxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBWRVJJRllfVVNFUiA9IGdxbGBcclxuICAgIG11dGF0aW9uIFZlcmlmeVVzZXIoXHJcbiAgICAgICAgJGVtYWlsOlN0cmluZyEsXHJcbiAgICAgICAgJGNvZGU6U3RyaW5nIVxyXG4gICAgKXtcclxuICAgICAgICB2ZXJpZnlVc2VyKGlucHV0OntcclxuICAgICAgICAgICAgZW1haWw6JGVtYWlsLFxyXG4gICAgICAgICAgICBjb2RlOiRjb2RlXHJcbiAgICAgICAgfSl7XHJcbiAgICAgICAgICAgIG1lc3NhZ2VcclxuICAgICAgICAgICAgc3RhdHVzXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgVkVSSUZZX0hPU1BJVEFMID0gZ3FsYFxyXG4gICAgbXV0YXRpb24gVmVyaWZ5SG9zcGl0YWwoXHJcbiAgICAgICAgJGVtYWlsOlN0cmluZyEsXHJcbiAgICAgICAgJGNvZGU6U3RyaW5nIVxyXG4gICAgKXtcclxuICAgICAgICB2ZXJpZnlIb3NwaXRhbChpbnB1dDp7XHJcbiAgICAgICAgICAgIGVtYWlsOiRlbWFpbCxcclxuICAgICAgICAgICAgY29kZTokY29kZVxyXG4gICAgICAgIH0pe1xyXG4gICAgICAgICAgICBtZXNzYWdlXHJcbiAgICAgICAgICAgIHN0YXR1c1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuYCJdLCJzb3VyY2VSb290IjoiIn0=