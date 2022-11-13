"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[243],{3069:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{ad:function(){return wn}});var dt,wt,_firebase_app__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(5816),_firebase_component__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(8463),_firebase_logger__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(3333),_firebase_util__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(4444);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class d{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}d.UNAUTHENTICATED=new d(null),d.GOOGLE_CREDENTIALS=new d("google-credentials-uid"),d.FIRST_PARTY=new d("first-party-uid"),d.MOCK_USER=new d("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let w="9.14.0",m=new _firebase_logger__WEBPACK_IMPORTED_MODULE_2__.Yd("@firebase/firestore");function v(t){if("string"==typeof t)return t;try{return JSON.stringify(t)}catch(e){return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function b(t="Unexpected state"){let e=`FIRESTORE (${w}) INTERNAL ASSERTION FAILED: `+t;throw function(t){if(m.logLevel<=_firebase_logger__WEBPACK_IMPORTED_MODULE_2__.in.ERROR){let n=[].map(v);m.error(`Firestore (${w}): ${t}`,...n)}}(e),Error(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let P="invalid-argument",S="failed-precondition";class U extends _firebase_util__WEBPACK_IMPORTED_MODULE_3__.ZR{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class B{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Q{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(d.UNAUTHENTICATED))}shutdown(){}}class z{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class G{constructor(t){this.auth=null,t.onInit(t=>{this.auth=t})}getToken(){return this.auth?this.auth.getToken().then(t=>t?("string"==typeof t.accessToken||b(),new B(t.accessToken,new d(this.auth.getUid()))):null):Promise.resolve(null)}invalidateToken(){}start(t,e){}shutdown(){}}class W{constructor(t,e,n,r){this.t=t,this.i=e,this.o=n,this.u=r,this.type="FirstParty",this.user=d.FIRST_PARTY,this.h=new Map}l(){return this.u?this.u():("object"==typeof this.t&&null!==this.t&&this.t.auth&&this.t.auth.getAuthHeaderValueForFirstParty||b(),this.t.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.h.set("X-Goog-AuthUser",this.i);let t=this.l();return t&&this.h.set("Authorization",t),this.o&&this.h.set("X-Goog-Iam-Authorization-Token",this.o),this.h}}class K{constructor(t,e,n,r){this.t=t,this.i=e,this.o=n,this.u=r}getToken(){return Promise.resolve(new W(this.t,this.i,this.o,this.u))}start(t,e){t.enqueueRetryable(()=>e(d.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Y{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class H{constructor(t){this.m=t,this.appCheck=null,t.onInit(t=>{this.appCheck=t})}getToken(){return this.appCheck?this.appCheck.getToken().then(t=>t?("string"==typeof t.token||b(),new Y(t.token)):null):Promise.resolve(null)}invalidateToken(){}start(t,e){}shutdown(){}}class X{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new X("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof X&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ (wt=dt||(dt={}))[wt.OK=0]="OK",wt[wt.CANCELLED=1]="CANCELLED",wt[wt.UNKNOWN=2]="UNKNOWN",wt[wt.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",wt[wt.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",wt[wt.NOT_FOUND=5]="NOT_FOUND",wt[wt.ALREADY_EXISTS=6]="ALREADY_EXISTS",wt[wt.PERMISSION_DENIED=7]="PERMISSION_DENIED",wt[wt.UNAUTHENTICATED=16]="UNAUTHENTICATED",wt[wt.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",wt[wt.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",wt[wt.ABORTED=10]="ABORTED",wt[wt.OUT_OF_RANGE=11]="OUT_OF_RANGE",wt[wt.UNIMPLEMENTED=12]="UNIMPLEMENTED",wt[wt.INTERNAL=13]="INTERNAL",wt[wt.UNAVAILABLE=14]="UNAVAILABLE",wt[wt.DATA_LOSS=15]="DATA_LOSS";class Pt{constructor(t,e,n,r,s){this.key=t,this.value=e,this.color=null!=n?n:Pt.RED,this.left=null!=r?r:Pt.EMPTY,this.right=null!=s?s:Pt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,r,s){return new Pt(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=s?s:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let r=this,s=n(t,r.key);return(r=s<0?r.copy(null,null,null,r.left.insert(t,e,n),null):0===s?r.copy(null,e,null,null,null):r.copy(null,null,null,null,r.right.insert(t,e,n))).fixUp()}removeMin(){if(this.left.isEmpty())return Pt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),(t=t.copy(null,null,null,t.left.removeMin(),null)).fixUp()}remove(t,e){let n,r=this;if(0>e(t,r.key))r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,e),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===e(t,r.key)){if(r.right.isEmpty())return Pt.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,e))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=(t=(t=t.copy(null,null,null,null,t.right.rotateRight())).rotateLeft()).colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=(t=t.rotateRight()).colorFlip()),t}rotateLeft(){let t=this.copy(null,null,Pt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){let t=this.copy(null,null,Pt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){let t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){let t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw b();let t=this.left.check();if(t!==this.right.check())throw b();return t+(this.isRed()?0:1)}}Pt.EMPTY=null,Pt.RED=!0,Pt.BLACK=!1,Pt.EMPTY=new class{constructor(){this.size=0}get key(){throw b()}get value(){throw b()}get color(){throw b()}get left(){throw b()}get right(){throw b()}copy(t,e,n,r,s){return this}insert(t,e,n){return new Pt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Dt{constructor(t){this.binaryString=t}static fromBase64String(t){let e=atob(t);return new Dt(e)}static fromUint8Array(t){let e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new Dt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return btoa(this.binaryString)}toUint8Array(){return function(t){let e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){var t1,e;return(t1=this.binaryString)<(e=t.binaryString)?-1:t1>e?1:0}isEqual(t){return this.binaryString===t.binaryString}}Dt.EMPTY_BYTE_STRING=new Dt("");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let an=new Map;class ln{constructor(t){var e;if(void 0===t.host){if(void 0!==t.ssl)throw new U(P,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new U(P,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,function(t,e,n,r){if(!0===e&&!0===r)throw new U(P,`${t} and ${n} cannot be used together.`)}("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class fn{constructor(t,e,n,r){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ln({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new U(S,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new U(S,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ln(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new Q;switch(t.type){case"gapi":let e=t.client;return new K(e,t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new U(P,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){let e=an.get(t);e&&(function(t,...e){if(m.logLevel<=_firebase_logger__WEBPACK_IMPORTED_MODULE_2__.in.DEBUG){let n=e.map(v);m.debug(`Firestore (${w}): ${t}`,...n)}}("ComponentProvider","Removing Datastore"),an.delete(t),e.terminate())}(this),Promise.resolve()}}function wn(e,n){let r="object"==typeof e?e:(0,_firebase_app__WEBPACK_IMPORTED_MODULE_0__.Mq)(),i=(0,_firebase_app__WEBPACK_IMPORTED_MODULE_0__.qX)(r,"firestore/lite").getImmediate({identifier:"string"==typeof e?e:n||"(default)"});if(!i._initialized){let t=(0,_firebase_util__WEBPACK_IMPORTED_MODULE_3__.P0)("firestore");t&&function(t,e,n,r={}){var s;let i=(t=function(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new U(P,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{let n=function(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{var t1;let e=(t1=t).constructor?t1.constructor.name:null;return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":b()}(t);throw new U(P,`Expected type '${e.name}', but it was: ${n}`)}}return t}(t,fn))._getSettings();if("firestore.googleapis.com"!==i.host&&i.host!==e&&function(t){if(m.logLevel<=_firebase_logger__WEBPACK_IMPORTED_MODULE_2__.in.WARN){let n=[].map(v);m.warn(`Firestore (${w}): ${t}`,...n)}}("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},i),{host:`${e}:${n}`,ssl:!1})),r.mockUserToken){let e1,n1;if("string"==typeof r.mockUserToken)e1=r.mockUserToken,n1=d.MOCK_USER;else{e1=(0,_firebase_util__WEBPACK_IMPORTED_MODULE_3__.Sg)(r.mockUserToken,null===(s=t._app)||void 0===s?void 0:s.options.projectId);let i1=r.mockUserToken.sub||r.mockUserToken.user_id;if(!i1)throw new U(P,"mockUserToken must contain 'sub' or 'user_id' field!");n1=new d(i1)}t._authCredentials=new z(new B(e1,n1))}}(i,...t)}return i}w=`${_firebase_app__WEBPACK_IMPORTED_MODULE_0__.Jn}_lite`,(0,_firebase_app__WEBPACK_IMPORTED_MODULE_0__.Xd)(new _firebase_component__WEBPACK_IMPORTED_MODULE_1__.wA("firestore/lite",(t,{instanceIdentifier:e,options:n})=>{let r=t.getProvider("app").getImmediate(),s=new fn(new G(t.getProvider("auth-internal")),new H(t.getProvider("app-check-internal")),function(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new U(P,'"projectId" not provided in firebase.initializeApp.');return new X(t.options.projectId,e)}(r,e),r);return n&&s._setSettings(n),s},"PUBLIC").setMultipleInstances(!0)),(0,_firebase_app__WEBPACK_IMPORTED_MODULE_0__.KN)("firestore-lite","3.7.3",""),(0,_firebase_app__WEBPACK_IMPORTED_MODULE_0__.KN)("firestore-lite","3.7.3","esm2017")}}]);