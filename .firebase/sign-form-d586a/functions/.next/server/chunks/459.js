exports.id = 459;
exports.ids = [459];
exports.modules = {

/***/ 9353:
/***/ ((module) => {

// Exports
module.exports = {
	"neon": "Login_neon__Uy0ig",
	"login_body": "Login_login_body__1IR_9",
	"login_box": "Login_login_box__74RX9",
	"user_box": "Login_user_box__rbFAX",
	"user_input": "Login_user_input__ur7VO",
	"user_label": "Login_user_label__3ZEOx",
	"btn-anim1": "Login_btn-anim1__gdncq",
	"btn-anim2": "Login_btn-anim2__5QHq_",
	"btn-anim3": "Login_btn-anim3__j8IAK",
	"btn-anim4": "Login_btn-anim4__DQC7g",
	"signup_button": "Login_signup_button__B3428"
};


/***/ }),

/***/ 236:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* binding */ auth)
/* harmony export */ });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3745);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(401);
/* harmony import */ var firebase_firestore_lite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6401);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_auth__WEBPACK_IMPORTED_MODULE_1__, firebase_firestore_lite__WEBPACK_IMPORTED_MODULE_2__]);
([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_auth__WEBPACK_IMPORTED_MODULE_1__, firebase_firestore_lite__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
// Import the functions you need from the SDKs you need



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCMYA4SOcdQZjE2MQMuUyDBGWQVCnIs4so",
    authDomain: "sign-form-d586a.firebaseapp.com",
    projectId: "sign-form-d586a",
    storageBucket: "sign-form-d586a.appspot.com",
    messagingSenderId: "375280782530",
    appId: "1:375280782530:web:2bc75602dd14af2953ff5b"
};
// Initialize Firebase
const app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);
const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.getAuth)(app);
const db = (0,firebase_firestore_lite__WEBPACK_IMPORTED_MODULE_2__.getFirestore)(app);

/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (db)));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;