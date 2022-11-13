"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[590],{3103:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{a5:function(){return createUserWithEmailAndPassword},a6:function(){return signInWithEmailAndPassword},n:function(){return getAuth}});var clientPlatform,_firebase_util__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(4444),_firebase_app__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(5816),_firebase_logger__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(3333),tslib__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(655),_firebase_component__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(8463);function _prodErrorMap(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}let _DEFAULT_AUTH_ERROR_FACTORY=new _firebase_util__WEBPACK_IMPORTED_MODULE_0__.LL("auth","Firebase",_prodErrorMap()),logClient=new _firebase_logger__WEBPACK_IMPORTED_MODULE_2__.Yd("@firebase/auth");function _logError(msg,...args){logClient.logLevel<=_firebase_logger__WEBPACK_IMPORTED_MODULE_2__.in.ERROR&&logClient.error(`Auth (${_firebase_app__WEBPACK_IMPORTED_MODULE_1__.Jn}): ${msg}`,...args)}/**
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
 */ function _fail(authOrCode,...rest){throw createErrorInternal(authOrCode,...rest)}function _createError(authOrCode,...rest){return createErrorInternal(authOrCode,...rest)}function createErrorInternal(authOrCode,...rest){if("string"!=typeof authOrCode){let code=rest[0],fullParams=[...rest.slice(1)];return fullParams[0]&&(fullParams[0].appName=authOrCode.name),authOrCode._errorFactory.create(code,...fullParams)}return _DEFAULT_AUTH_ERROR_FACTORY.create(authOrCode,...rest)}function _assert(assertion,authOrCode,...rest){if(!assertion)throw createErrorInternal(authOrCode,...rest)}function debugFail(failure){let message="INTERNAL ASSERTION FAILED: "+failure;throw _logError(message),Error(message)}/**
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
 */ let instanceCache=new Map;function _getInstance(cls){cls instanceof Function||debugFail("Expected a class definition");let instance=instanceCache.get(cls);return instance?(instance instanceof cls||debugFail("Instance stored in cache mismatched with class"),instance):(instance=new cls,instanceCache.set(cls,instance),instance)}/**
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
 */ function _getCurrentUrl(){var _a;return"undefined"!=typeof self&&(null===(_a=self.location)||void 0===_a?void 0:_a.href)||""}function _getCurrentScheme(){var _a;return"undefined"!=typeof self&&(null===(_a=self.location)||void 0===_a?void 0:_a.protocol)||null}/**
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
 */ class Delay{constructor(shortDelay,longDelay){this.shortDelay=shortDelay,this.longDelay=longDelay,longDelay>shortDelay||debugFail("Short delay should be less than long delay!"),this.isMobile=(0,_firebase_util__WEBPACK_IMPORTED_MODULE_0__.uI)()||(0,_firebase_util__WEBPACK_IMPORTED_MODULE_0__.b$)()}get(){return!("undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&("http:"===_getCurrentScheme()||"https:"===_getCurrentScheme()||(0,_firebase_util__WEBPACK_IMPORTED_MODULE_0__.ru)()||"connection"in navigator))||navigator.onLine?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */ function _emulatorUrl(config,path){config.emulator||debugFail("Emulator should always be set here");let{url}=config.emulator;return path?`${url}${path.startsWith("/")?path.slice(1):path}`:url}/**
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
 */ class FetchProvider{static initialize(fetchImpl,headersImpl,responseImpl){this.fetchImpl=fetchImpl,headersImpl&&(this.headersImpl=headersImpl),responseImpl&&(this.responseImpl=responseImpl)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void debugFail("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void debugFail("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void debugFail("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */ let SERVER_ERROR_MAP={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"},DEFAULT_API_TIMEOUT_MS=new Delay(3e4,6e4);function _addTidIfNecessary(auth,request){return auth.tenantId&&!request.tenantId?Object.assign(Object.assign({},request),{tenantId:auth.tenantId}):request}async function _performApiRequest(auth,method,path,request,customErrorMap={}){return _performFetchWithErrorHandling(auth,customErrorMap,async()=>{let body={},params={};request&&("GET"===method?params=request:body={body:JSON.stringify(request)});let query=(0,_firebase_util__WEBPACK_IMPORTED_MODULE_0__.xO)(Object.assign({key:auth.config.apiKey},params)).slice(1),headers=await auth._getAdditionalHeaders();return headers["Content-Type"]="application/json",auth.languageCode&&(headers["X-Firebase-Locale"]=auth.languageCode),FetchProvider.fetch()(_getFinalTarget(auth,auth.config.apiHost,path,query),Object.assign({method,headers,referrerPolicy:"no-referrer"},body))})}async function _performFetchWithErrorHandling(auth,customErrorMap,fetchFn){auth._canInitEmulator=!1;let errorMap=Object.assign(Object.assign({},SERVER_ERROR_MAP),customErrorMap);try{let networkTimeout=new NetworkTimeout(auth),response=await Promise.race([fetchFn(),networkTimeout.promise]);networkTimeout.clearNetworkTimeout();let json=await response.json();if("needConfirmation"in json)throw _makeTaggedError(auth,"account-exists-with-different-credential",json);if(response.ok&&!("errorMessage"in json))return json;{let errorMessage=response.ok?json.errorMessage:json.error.message,[serverErrorCode,serverErrorMessage]=errorMessage.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===serverErrorCode)throw _makeTaggedError(auth,"credential-already-in-use",json);if("EMAIL_EXISTS"===serverErrorCode)throw _makeTaggedError(auth,"email-already-in-use",json);if("USER_DISABLED"===serverErrorCode)throw _makeTaggedError(auth,"user-disabled",json);let authError=errorMap[serverErrorCode]||serverErrorCode.toLowerCase().replace(/[_\s]+/g,"-");if(serverErrorMessage)throw function(auth,code,message){let errorMap=Object.assign(Object.assign({},_prodErrorMap()),{[code]:message}),factory=new _firebase_util__WEBPACK_IMPORTED_MODULE_0__.LL("auth","Firebase",errorMap);return factory.create(code,{appName:auth.name})}(auth,authError,serverErrorMessage);_fail(auth,authError)}}catch(e){if(e instanceof _firebase_util__WEBPACK_IMPORTED_MODULE_0__.ZR)throw e;_fail(auth,"network-request-failed")}}async function _performSignInRequest(auth,method,path,request,customErrorMap={}){let serverResponse=await _performApiRequest(auth,method,path,request,customErrorMap);return"mfaPendingCredential"in serverResponse&&_fail(auth,"multi-factor-auth-required",{_serverResponse:serverResponse}),serverResponse}function _getFinalTarget(auth,host,path,query){let base=`${host}${path}?${query}`;return auth.config.emulator?_emulatorUrl(auth.config,base):`${auth.config.apiScheme}://${base}`}class NetworkTimeout{constructor(auth){this.auth=auth,this.timer=null,this.promise=new Promise((_,reject)=>{this.timer=setTimeout(()=>reject(_createError(this.auth,"network-request-failed")),DEFAULT_API_TIMEOUT_MS.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function _makeTaggedError(auth,code,response){let errorParams={appName:auth.name};response.email&&(errorParams.email=response.email),response.phoneNumber&&(errorParams.phoneNumber=response.phoneNumber);let error=_createError(auth,code,errorParams);return error.customData._tokenResponse=response,error}/**
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
 */ async function deleteAccount(auth,request){return _performApiRequest(auth,"POST","/v1/accounts:delete",request)}async function getAccountInfo(auth,request){return _performApiRequest(auth,"POST","/v1/accounts:lookup",request)}/**
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
 */ function utcTimestampToDateString(utcTimestamp){if(utcTimestamp)try{let date=new Date(Number(utcTimestamp));if(!isNaN(date.getTime()))return date.toUTCString()}catch(e){}}async function getIdTokenResult(user,forceRefresh=!1){let userInternal=(0,_firebase_util__WEBPACK_IMPORTED_MODULE_0__.m9)(user),token=await userInternal.getIdToken(forceRefresh),claims=_parseToken(token);_assert(claims&&claims.exp&&claims.auth_time&&claims.iat,userInternal.auth,"internal-error");let firebase="object"==typeof claims.firebase?claims.firebase:void 0,signInProvider=null==firebase?void 0:firebase.sign_in_provider;return{claims,token,authTime:utcTimestampToDateString(secondsStringToMilliseconds(claims.auth_time)),issuedAtTime:utcTimestampToDateString(secondsStringToMilliseconds(claims.iat)),expirationTime:utcTimestampToDateString(secondsStringToMilliseconds(claims.exp)),signInProvider:signInProvider||null,signInSecondFactor:(null==firebase?void 0:firebase.sign_in_second_factor)||null}}function secondsStringToMilliseconds(seconds){return 1e3*Number(seconds)}function _parseToken(token){let[algorithm,payload,signature]=token.split(".");if(void 0===algorithm||void 0===payload||void 0===signature)return _logError("JWT malformed, contained fewer than 3 sections"),null;try{let decoded=(0,_firebase_util__WEBPACK_IMPORTED_MODULE_0__.tV)(payload);if(!decoded)return _logError("Failed to decode base64 JWT payload"),null;return JSON.parse(decoded)}catch(e){return _logError("Caught error parsing JWT payload as JSON",null==e?void 0:e.toString()),null}}/**
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
 */ async function _logoutIfInvalidated(user,promise,bypassAuthState=!1){if(bypassAuthState)return promise;try{return await promise}catch(e){throw e instanceof _firebase_util__WEBPACK_IMPORTED_MODULE_0__.ZR&&function({code}){return"auth/user-disabled"===code||"auth/user-token-expired"===code}(e)&&user.auth.currentUser===user&&await user.auth.signOut(),e}}/**
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
 */ class ProactiveRefresh{constructor(user){this.user=user,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(wasError){var _a;if(wasError){let interval=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),interval}{this.errorBackoff=3e4;let expTime=null!==(_a=this.user.stsTokenManager.expirationTime)&&void 0!==_a?_a:0,interval1=expTime-Date.now()-3e5;return Math.max(0,interval1)}}schedule(wasError=!1){if(!this.isRunning)return;let interval=this.getInterval(wasError);this.timerId=setTimeout(async()=>{await this.iteration()},interval)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(null==e?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */ class UserMetadata{constructor(createdAt,lastLoginAt){this.createdAt=createdAt,this.lastLoginAt=lastLoginAt,this._initializeTime()}_initializeTime(){this.lastSignInTime=utcTimestampToDateString(this.lastLoginAt),this.creationTime=utcTimestampToDateString(this.createdAt)}_copy(metadata){this.createdAt=metadata.createdAt,this.lastLoginAt=metadata.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
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
 */ async function _reloadWithoutSaving(user){var _a;let auth=user.auth,idToken=await user.getIdToken(),response=await _logoutIfInvalidated(user,getAccountInfo(auth,{idToken}));_assert(null==response?void 0:response.users.length,auth,"internal-error");let coreAccount=response.users[0];user._notifyReloadListener(coreAccount);let newProviderData=(null===(_a=coreAccount.providerUserInfo)||void 0===_a?void 0:_a.length)?coreAccount.providerUserInfo.map(_a=>{var{providerId}=_a,provider=(0,tslib__WEBPACK_IMPORTED_MODULE_4__._T)(_a,["providerId"]);return{providerId,uid:provider.rawId||"",displayName:provider.displayName||null,email:provider.email||null,phoneNumber:provider.phoneNumber||null,photoURL:provider.photoUrl||null}}):[],providerData=function(original,newData){let deduped=original.filter(o=>!newData.some(n=>n.providerId===o.providerId));return[...deduped,...newData]}(user.providerData,newProviderData),oldIsAnonymous=user.isAnonymous,newIsAnonymous=!(user.email&&coreAccount.passwordHash)&&!(null==providerData?void 0:providerData.length),updates={uid:coreAccount.localId,displayName:coreAccount.displayName||null,photoURL:coreAccount.photoUrl||null,email:coreAccount.email||null,emailVerified:coreAccount.emailVerified||!1,phoneNumber:coreAccount.phoneNumber||null,tenantId:coreAccount.tenantId||null,providerData,metadata:new UserMetadata(coreAccount.createdAt,coreAccount.lastLoginAt),isAnonymous:!!oldIsAnonymous&&newIsAnonymous};Object.assign(user,updates)}async function reload(user){let userInternal=(0,_firebase_util__WEBPACK_IMPORTED_MODULE_0__.m9)(user);await _reloadWithoutSaving(userInternal),await userInternal.auth._persistUserIfCurrent(userInternal),userInternal.auth._notifyListenersIfCurrent(userInternal)}/**
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
 */ async function requestStsToken(auth,refreshToken){let response=await _performFetchWithErrorHandling(auth,{},async()=>{let body=(0,_firebase_util__WEBPACK_IMPORTED_MODULE_0__.xO)({grant_type:"refresh_token",refresh_token:refreshToken}).slice(1),{tokenApiHost,apiKey}=auth.config,url=_getFinalTarget(auth,tokenApiHost,"/v1/token",`key=${apiKey}`),headers=await auth._getAdditionalHeaders();return headers["Content-Type"]="application/x-www-form-urlencoded",FetchProvider.fetch()(url,{method:"POST",headers,body})});return{accessToken:response.access_token,expiresIn:response.expires_in,refreshToken:response.refresh_token}}/**
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
 */ class StsTokenManager{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(response){_assert(response.idToken,"internal-error"),_assert(void 0!==response.idToken,"internal-error"),_assert(void 0!==response.refreshToken,"internal-error");let expiresIn="expiresIn"in response&&void 0!==response.expiresIn?Number(response.expiresIn):function(token){let parsedToken=_parseToken(token);return _assert(parsedToken,"internal-error"),_assert(void 0!==parsedToken.exp,"internal-error"),_assert(void 0!==parsedToken.iat,"internal-error"),Number(parsedToken.exp)-Number(parsedToken.iat)}(response.idToken);this.updateTokensAndExpiration(response.idToken,response.refreshToken,expiresIn)}async getToken(auth,forceRefresh=!1){return(_assert(!this.accessToken||this.refreshToken,auth,"user-token-expired"),forceRefresh||!this.accessToken||this.isExpired)?this.refreshToken?(await this.refresh(auth,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(auth,oldToken){let{accessToken,refreshToken,expiresIn}=await requestStsToken(auth,oldToken);this.updateTokensAndExpiration(accessToken,refreshToken,Number(expiresIn))}updateTokensAndExpiration(accessToken,refreshToken,expiresInSec){this.refreshToken=refreshToken||null,this.accessToken=accessToken||null,this.expirationTime=Date.now()+1e3*expiresInSec}static fromJSON(appName,object){let{refreshToken,accessToken,expirationTime}=object,manager=new StsTokenManager;return refreshToken&&(_assert("string"==typeof refreshToken,"internal-error",{appName}),manager.refreshToken=refreshToken),accessToken&&(_assert("string"==typeof accessToken,"internal-error",{appName}),manager.accessToken=accessToken),expirationTime&&(_assert("number"==typeof expirationTime,"internal-error",{appName}),manager.expirationTime=expirationTime),manager}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(stsTokenManager){this.accessToken=stsTokenManager.accessToken,this.refreshToken=stsTokenManager.refreshToken,this.expirationTime=stsTokenManager.expirationTime}_clone(){return Object.assign(new StsTokenManager,this.toJSON())}_performRefresh(){return debugFail("not implemented")}}/**
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
 */ function assertStringOrUndefined(assertion,appName){_assert("string"==typeof assertion||void 0===assertion,"internal-error",{appName})}class UserImpl{constructor(_a){var{uid,auth,stsTokenManager}=_a,opt=(0,tslib__WEBPACK_IMPORTED_MODULE_4__._T)(_a,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ProactiveRefresh(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=uid,this.auth=auth,this.stsTokenManager=stsTokenManager,this.accessToken=stsTokenManager.accessToken,this.displayName=opt.displayName||null,this.email=opt.email||null,this.emailVerified=opt.emailVerified||!1,this.phoneNumber=opt.phoneNumber||null,this.photoURL=opt.photoURL||null,this.isAnonymous=opt.isAnonymous||!1,this.tenantId=opt.tenantId||null,this.providerData=opt.providerData?[...opt.providerData]:[],this.metadata=new UserMetadata(opt.createdAt||void 0,opt.lastLoginAt||void 0)}async getIdToken(forceRefresh){let accessToken=await _logoutIfInvalidated(this,this.stsTokenManager.getToken(this.auth,forceRefresh));return _assert(accessToken,this.auth,"internal-error"),this.accessToken!==accessToken&&(this.accessToken=accessToken,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),accessToken}getIdTokenResult(forceRefresh){return getIdTokenResult(this,forceRefresh)}reload(){return reload(this)}_assign(user){this!==user&&(_assert(this.uid===user.uid,this.auth,"internal-error"),this.displayName=user.displayName,this.photoURL=user.photoURL,this.email=user.email,this.emailVerified=user.emailVerified,this.phoneNumber=user.phoneNumber,this.isAnonymous=user.isAnonymous,this.tenantId=user.tenantId,this.providerData=user.providerData.map(userInfo=>Object.assign({},userInfo)),this.metadata._copy(user.metadata),this.stsTokenManager._assign(user.stsTokenManager))}_clone(auth){return new UserImpl(Object.assign(Object.assign({},this),{auth,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(callback){_assert(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=callback,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(userInfo){this.reloadListener?this.reloadListener(userInfo):this.reloadUserInfo=userInfo}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(response,reload=!1){let tokensRefreshed=!1;response.idToken&&response.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(response),tokensRefreshed=!0),reload&&await _reloadWithoutSaving(this),await this.auth._persistUserIfCurrent(this),tokensRefreshed&&this.auth._notifyListenersIfCurrent(this)}async delete(){let idToken=await this.getIdToken();return await _logoutIfInvalidated(this,deleteAccount(this.auth,{idToken})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(userInfo=>Object.assign({},userInfo)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(auth,object){var _a,_b,_c,_d,_e,_f,_g,_h;let displayName=null!==(_a=object.displayName)&&void 0!==_a?_a:void 0,email=null!==(_b=object.email)&&void 0!==_b?_b:void 0,phoneNumber=null!==(_c=object.phoneNumber)&&void 0!==_c?_c:void 0,photoURL=null!==(_d=object.photoURL)&&void 0!==_d?_d:void 0,tenantId=null!==(_e=object.tenantId)&&void 0!==_e?_e:void 0,_redirectEventId=null!==(_f=object._redirectEventId)&&void 0!==_f?_f:void 0,createdAt=null!==(_g=object.createdAt)&&void 0!==_g?_g:void 0,lastLoginAt=null!==(_h=object.lastLoginAt)&&void 0!==_h?_h:void 0,{uid,emailVerified,isAnonymous,providerData,stsTokenManager:plainObjectTokenManager}=object;_assert(uid&&plainObjectTokenManager,auth,"internal-error");let stsTokenManager=StsTokenManager.fromJSON(this.name,plainObjectTokenManager);_assert("string"==typeof uid,auth,"internal-error"),assertStringOrUndefined(displayName,auth.name),assertStringOrUndefined(email,auth.name),_assert("boolean"==typeof emailVerified,auth,"internal-error"),_assert("boolean"==typeof isAnonymous,auth,"internal-error"),assertStringOrUndefined(phoneNumber,auth.name),assertStringOrUndefined(photoURL,auth.name),assertStringOrUndefined(tenantId,auth.name),assertStringOrUndefined(_redirectEventId,auth.name),assertStringOrUndefined(createdAt,auth.name),assertStringOrUndefined(lastLoginAt,auth.name);let user=new UserImpl({uid,auth,email,emailVerified,displayName,isAnonymous,photoURL,phoneNumber,tenantId,stsTokenManager,createdAt,lastLoginAt});return providerData&&Array.isArray(providerData)&&(user.providerData=providerData.map(userInfo=>Object.assign({},userInfo))),_redirectEventId&&(user._redirectEventId=_redirectEventId),user}static async _fromIdTokenResponse(auth,idTokenResponse,isAnonymous=!1){let stsTokenManager=new StsTokenManager;stsTokenManager.updateFromServerResponse(idTokenResponse);let user=new UserImpl({uid:idTokenResponse.localId,auth,stsTokenManager,isAnonymous});return await _reloadWithoutSaving(user),user}}/**
 * @license
 * Copyright 2019 Google LLC
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
 */ class InMemoryPersistence{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(key,value){this.storage[key]=value}async _get(key){let value=this.storage[key];return void 0===value?null:value}async _remove(key){delete this.storage[key]}_addListener(_key,_listener){}_removeListener(_key,_listener){}}/**
 * @license
 * Copyright 2019 Google LLC
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
 */ function _persistenceKeyName(key,apiKey,appName){return`firebase:${key}:${apiKey}:${appName}`}InMemoryPersistence.type="NONE";class PersistenceUserManager{constructor(persistence,auth,userKey){this.persistence=persistence,this.auth=auth,this.userKey=userKey;let{config,name}=this.auth;this.fullUserKey=_persistenceKeyName(this.userKey,config.apiKey,name),this.fullPersistenceKey=_persistenceKeyName("persistence",config.apiKey,name),this.boundEventHandler=auth._onStorageEvent.bind(auth),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(user){return this.persistence._set(this.fullUserKey,user.toJSON())}async getCurrentUser(){let blob=await this.persistence._get(this.fullUserKey);return blob?UserImpl._fromJSON(this.auth,blob):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(newPersistence){if(this.persistence===newPersistence)return;let currentUser=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=newPersistence,currentUser)return this.setCurrentUser(currentUser)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(auth,persistenceHierarchy,userKey="authUser"){if(!persistenceHierarchy.length)return new PersistenceUserManager(_getInstance(InMemoryPersistence),auth,userKey);let availablePersistences=(await Promise.all(persistenceHierarchy.map(async persistence=>{if(await persistence._isAvailable())return persistence}))).filter(persistence=>persistence),selectedPersistence=availablePersistences[0]||_getInstance(InMemoryPersistence),key=_persistenceKeyName(userKey,auth.config.apiKey,auth.name),userToMigrate=null;for(let persistence of persistenceHierarchy)try{let blob=await persistence._get(key);if(blob){let user=UserImpl._fromJSON(auth,blob);persistence!==selectedPersistence&&(userToMigrate=user),selectedPersistence=persistence;break}}catch(_a){}let migrationHierarchy=availablePersistences.filter(p=>p._shouldAllowMigration);return selectedPersistence._shouldAllowMigration&&migrationHierarchy.length&&(selectedPersistence=migrationHierarchy[0],userToMigrate&&await selectedPersistence._set(key,userToMigrate.toJSON()),await Promise.all(persistenceHierarchy.map(async persistence=>{if(persistence!==selectedPersistence)try{await persistence._remove(key)}catch(_a){}}))),new PersistenceUserManager(selectedPersistence,auth,userKey)}}/**
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
 */ function _getBrowserName(userAgent){let ua=userAgent.toLowerCase();if(ua.includes("opera/")||ua.includes("opr/")||ua.includes("opios/"))return"Opera";if(_isIEMobile(ua))return"IEMobile";if(ua.includes("msie")||ua.includes("trident/"))return"IE";{if(ua.includes("edge/"))return"Edge";if(_isFirefox(ua))return"Firefox";if(ua.includes("silk/"))return"Silk";if(_isBlackBerry(ua))return"Blackberry";if(_isWebOS(ua))return"Webos";if(_isSafari(ua))return"Safari";if((ua.includes("chrome/")||_isChromeIOS(ua))&&!ua.includes("edge/"))return"Chrome";if(_isAndroid(ua))return"Android";let matches=userAgent.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/);if((null==matches?void 0:matches.length)===2)return matches[1]}return"Other"}function _isFirefox(ua=(0,_firebase_util__WEBPACK_IMPORTED_MODULE_0__.z$)()){return/firefox\//i.test(ua)}function _isSafari(userAgent=(0,_firebase_util__WEBPACK_IMPORTED_MODULE_0__.z$)()){let ua=userAgent.toLowerCase();return ua.includes("safari/")&&!ua.includes("chrome/")&&!ua.includes("crios/")&&!ua.includes("android")}function _isChromeIOS(ua=(0,_firebase_util__WEBPACK_IMPORTED_MODULE_0__.z$)()){return/crios\//i.test(ua)}function _isIEMobile(ua=(0,_firebase_util__WEBPACK_IMPORTED_MODULE_0__.z$)()){return/iemobile/i.test(ua)}function _isAndroid(ua=(0,_firebase_util__WEBPACK_IMPORTED_MODULE_0__.z$)()){return/android/i.test(ua)}function _isBlackBerry(ua=(0,_firebase_util__WEBPACK_IMPORTED_MODULE_0__.z$)()){return/blackberry/i.test(ua)}function _isWebOS(ua=(0,_firebase_util__WEBPACK_IMPORTED_MODULE_0__.z$)()){return/webos/i.test(ua)}function _isIOS(ua=(0,_firebase_util__WEBPACK_IMPORTED_MODULE_0__.z$)()){return/iphone|ipad|ipod/i.test(ua)||/macintosh/i.test(ua)&&/mobile/i.test(ua)}function _isMobileBrowser(ua=(0,_firebase_util__WEBPACK_IMPORTED_MODULE_0__.z$)()){return _isIOS(ua)||_isAndroid(ua)||_isWebOS(ua)||_isBlackBerry(ua)||/windows phone/i.test(ua)||_isIEMobile(ua)}/**
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
 */ function _getClientVersion(clientPlatform,frameworks=[]){let reportedPlatform;switch(clientPlatform){case"Browser":reportedPlatform=_getBrowserName((0,_firebase_util__WEBPACK_IMPORTED_MODULE_0__.z$)());break;case"Worker":reportedPlatform=`${_getBrowserName((0,_firebase_util__WEBPACK_IMPORTED_MODULE_0__.z$)())}-${clientPlatform}`;break;default:reportedPlatform=clientPlatform}let reportedFrameworks=frameworks.length?frameworks.join(","):"FirebaseCore-web";return`${reportedPlatform}/JsCore/${_firebase_app__WEBPACK_IMPORTED_MODULE_1__.Jn}/${reportedFrameworks}`}/**
 * @license
 * Copyright 2022 Google LLC
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
 */ class AuthMiddlewareQueue{constructor(auth){this.auth=auth,this.queue=[]}pushCallback(callback,onAbort){let wrappedCallback=user=>new Promise((resolve,reject)=>{try{let result=callback(user);resolve(result)}catch(e){reject(e)}});wrappedCallback.onAbort=onAbort,this.queue.push(wrappedCallback);let index=this.queue.length-1;return()=>{this.queue[index]=()=>Promise.resolve()}}async runMiddleware(nextUser){if(this.auth.currentUser===nextUser)return;let onAbortStack=[];try{for(let beforeStateCallback of this.queue)await beforeStateCallback(nextUser),beforeStateCallback.onAbort&&onAbortStack.push(beforeStateCallback.onAbort)}catch(e){for(let onAbort of(onAbortStack.reverse(),onAbortStack))try{onAbort()}catch(_){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null==e?void 0:e.message})}}}/**
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
 */ class AuthImpl{constructor(app,heartbeatServiceProvider,config){this.app=app,this.heartbeatServiceProvider=heartbeatServiceProvider,this.config=config,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Subscription(this),this.idTokenSubscription=new Subscription(this),this.beforeStateQueue=new AuthMiddlewareQueue(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=_DEFAULT_AUTH_ERROR_FACTORY,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=app.name,this.clientVersion=config.sdkClientVersion}_initializeWithPersistence(persistenceHierarchy,popupRedirectResolver){return popupRedirectResolver&&(this._popupRedirectResolver=_getInstance(popupRedirectResolver)),this._initializationPromise=this.queue(async()=>{var _a,_b;if(!this._deleted&&(this.persistenceManager=await PersistenceUserManager.create(this,persistenceHierarchy),!this._deleted)){if(null===(_a=this._popupRedirectResolver)||void 0===_a?void 0:_a._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){}await this.initializeCurrentUser(popupRedirectResolver),this.lastNotifiedUid=(null===(_b=this.currentUser)||void 0===_b?void 0:_b.uid)||null,this._deleted||(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;let user=await this.assertedPersistence.getCurrentUser();if(this.currentUser||user){if(this.currentUser&&user&&this.currentUser.uid===user.uid){this._currentUser._assign(user),await this.currentUser.getIdToken();return}await this._updateCurrentUser(user,!0)}}async initializeCurrentUser(popupRedirectResolver){var _a;let previouslyStoredUser=await this.assertedPersistence.getCurrentUser(),futureCurrentUser=previouslyStoredUser,needsTocheckMiddleware=!1;if(popupRedirectResolver&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();let redirectUserEventId=null===(_a=this.redirectUser)||void 0===_a?void 0:_a._redirectEventId,storedUserEventId=null==futureCurrentUser?void 0:futureCurrentUser._redirectEventId,result=await this.tryRedirectSignIn(popupRedirectResolver);(!redirectUserEventId||redirectUserEventId===storedUserEventId)&&(null==result?void 0:result.user)&&(futureCurrentUser=result.user,needsTocheckMiddleware=!0)}if(!futureCurrentUser)return this.directlySetCurrentUser(null);if(!futureCurrentUser._redirectEventId){if(needsTocheckMiddleware)try{await this.beforeStateQueue.runMiddleware(futureCurrentUser)}catch(e){futureCurrentUser=previouslyStoredUser,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(e))}return futureCurrentUser?this.reloadAndSetCurrentUserOrClear(futureCurrentUser):this.directlySetCurrentUser(null)}return(_assert(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===futureCurrentUser._redirectEventId)?this.directlySetCurrentUser(futureCurrentUser):this.reloadAndSetCurrentUserOrClear(futureCurrentUser)}async tryRedirectSignIn(redirectResolver){let result=null;try{result=await this._popupRedirectResolver._completeRedirectFn(this,redirectResolver,!0)}catch(e){await this._setRedirectUser(null)}return result}async reloadAndSetCurrentUserOrClear(user){try{await _reloadWithoutSaving(user)}catch(e){if((null==e?void 0:e.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(user)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;let navigatorLanguage=navigator;return navigatorLanguage.languages&&navigatorLanguage.languages[0]||navigatorLanguage.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(userExtern){let user=userExtern?(0,_firebase_util__WEBPACK_IMPORTED_MODULE_0__.m9)(userExtern):null;return user&&_assert(user.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(user&&user._clone(this))}async _updateCurrentUser(user,skipBeforeStateCallbacks=!1){if(!this._deleted)return user&&_assert(this.tenantId===user.tenantId,this,"tenant-id-mismatch"),skipBeforeStateCallbacks||await this.beforeStateQueue.runMiddleware(user),this.queue(async()=>{await this.directlySetCurrentUser(user),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(persistence){return this.queue(async()=>{await this.assertedPersistence.setPersistence(_getInstance(persistence))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(errorMap){this._errorFactory=new _firebase_util__WEBPACK_IMPORTED_MODULE_0__.LL("auth","Firebase",errorMap())}onAuthStateChanged(nextOrObserver,error,completed){return this.registerStateListener(this.authStateSubscription,nextOrObserver,error,completed)}beforeAuthStateChanged(callback,onAbort){return this.beforeStateQueue.pushCallback(callback,onAbort)}onIdTokenChanged(nextOrObserver,error,completed){return this.registerStateListener(this.idTokenSubscription,nextOrObserver,error,completed)}toJSON(){var _a;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(_a=this._currentUser)||void 0===_a?void 0:_a.toJSON()}}async _setRedirectUser(user,popupRedirectResolver){let redirectManager=await this.getOrInitRedirectPersistenceManager(popupRedirectResolver);return null===user?redirectManager.removeCurrentUser():redirectManager.setCurrentUser(user)}async getOrInitRedirectPersistenceManager(popupRedirectResolver){if(!this.redirectPersistenceManager){let resolver=popupRedirectResolver&&_getInstance(popupRedirectResolver)||this._popupRedirectResolver;_assert(resolver,this,"argument-error"),this.redirectPersistenceManager=await PersistenceUserManager.create(this,[_getInstance(resolver._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(id){var _a,_b;return(this._isInitialized&&await this.queue(async()=>{}),(null===(_a=this._currentUser)||void 0===_a?void 0:_a._redirectEventId)===id)?this._currentUser:(null===(_b=this.redirectUser)||void 0===_b?void 0:_b._redirectEventId)===id?this.redirectUser:null}async _persistUserIfCurrent(user){if(user===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(user))}_notifyListenersIfCurrent(user){user===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var _a,_b;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);let currentUid=null!==(_b=null===(_a=this.currentUser)||void 0===_a?void 0:_a.uid)&&void 0!==_b?_b:null;this.lastNotifiedUid!==currentUid&&(this.lastNotifiedUid=currentUid,this.authStateSubscription.next(this.currentUser))}registerStateListener(subscription,nextOrObserver,error,completed){if(this._deleted)return()=>{};let cb="function"==typeof nextOrObserver?nextOrObserver:nextOrObserver.next.bind(nextOrObserver),promise=this._isInitialized?Promise.resolve():this._initializationPromise;return(_assert(promise,this,"internal-error"),promise.then(()=>cb(this.currentUser)),"function"==typeof nextOrObserver)?subscription.addObserver(nextOrObserver,error,completed):subscription.addObserver(nextOrObserver)}async directlySetCurrentUser(user){this.currentUser&&this.currentUser!==user&&this._currentUser._stopProactiveRefresh(),user&&this.isProactiveRefreshEnabled&&user._startProactiveRefresh(),this.currentUser=user,user?await this.assertedPersistence.setCurrentUser(user):await this.assertedPersistence.removeCurrentUser()}queue(action){return this.operations=this.operations.then(action,action),this.operations}get assertedPersistence(){return _assert(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(framework){!framework||this.frameworks.includes(framework)||(this.frameworks.push(framework),this.frameworks.sort(),this.clientVersion=_getClientVersion(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var _a;let headers={"X-Client-Version":this.clientVersion};this.app.options.appId&&(headers["X-Firebase-gmpid"]=this.app.options.appId);let heartbeatsHeader=await (null===(_a=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===_a?void 0:_a.getHeartbeatsHeader());return heartbeatsHeader&&(headers["X-Firebase-Client"]=heartbeatsHeader),headers}}function _castAuth(auth){return(0,_firebase_util__WEBPACK_IMPORTED_MODULE_0__.m9)(auth)}class Subscription{constructor(auth){this.auth=auth,this.observer=null,this.addObserver=(0,_firebase_util__WEBPACK_IMPORTED_MODULE_0__.ne)(observer=>this.observer=observer)}get next(){return _assert(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function extractProtocol(url){let protocolEnd=url.indexOf(":");return protocolEnd<0?"":url.substr(0,protocolEnd+1)}function parsePort(portStr){if(!portStr)return null;let port=Number(portStr);return isNaN(port)?null:port}/**
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
 */ class AuthCredential{constructor(providerId,signInMethod){this.providerId=providerId,this.signInMethod=signInMethod}toJSON(){return debugFail("not implemented")}_getIdTokenResponse(_auth){return debugFail("not implemented")}_linkToIdToken(_auth,_idToken){return debugFail("not implemented")}_getReauthenticationResolver(_auth){return debugFail("not implemented")}}async function updateEmailPassword(auth,request){return _performApiRequest(auth,"POST","/v1/accounts:update",request)}/**
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
 */ async function signInWithPassword(auth,request){return _performSignInRequest(auth,"POST","/v1/accounts:signInWithPassword",_addTidIfNecessary(auth,request))}/**
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
 */ async function signInWithEmailLink$1(auth,request){return _performSignInRequest(auth,"POST","/v1/accounts:signInWithEmailLink",_addTidIfNecessary(auth,request))}async function signInWithEmailLinkForLinking(auth,request){return _performSignInRequest(auth,"POST","/v1/accounts:signInWithEmailLink",_addTidIfNecessary(auth,request))}/**
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
 */ class EmailAuthCredential extends AuthCredential{constructor(_email,_password,signInMethod,_tenantId=null){super("password",signInMethod),this._email=_email,this._password=_password,this._tenantId=_tenantId}static _fromEmailAndPassword(email,password){return new EmailAuthCredential(email,password,"password")}static _fromEmailAndCode(email,oobCode,tenantId=null){return new EmailAuthCredential(email,oobCode,"emailLink",tenantId)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(json){let obj="string"==typeof json?JSON.parse(json):json;if((null==obj?void 0:obj.email)&&(null==obj?void 0:obj.password)){if("password"===obj.signInMethod)return this._fromEmailAndPassword(obj.email,obj.password);if("emailLink"===obj.signInMethod)return this._fromEmailAndCode(obj.email,obj.password,obj.tenantId)}return null}async _getIdTokenResponse(auth){switch(this.signInMethod){case"password":return signInWithPassword(auth,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return signInWithEmailLink$1(auth,{email:this._email,oobCode:this._password});default:_fail(auth,"internal-error")}}async _linkToIdToken(auth,idToken){switch(this.signInMethod){case"password":return updateEmailPassword(auth,{idToken,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return signInWithEmailLinkForLinking(auth,{idToken,email:this._email,oobCode:this._password});default:_fail(auth,"internal-error")}}_getReauthenticationResolver(auth){return this._getIdTokenResponse(auth)}}/**
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
 */ async function signInWithIdp(auth,request){return _performSignInRequest(auth,"POST","/v1/accounts:signInWithIdp",_addTidIfNecessary(auth,request))}class OAuthCredential extends AuthCredential{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(params){let cred=new OAuthCredential(params.providerId,params.signInMethod);return params.idToken||params.accessToken?(params.idToken&&(cred.idToken=params.idToken),params.accessToken&&(cred.accessToken=params.accessToken),params.nonce&&!params.pendingToken&&(cred.nonce=params.nonce),params.pendingToken&&(cred.pendingToken=params.pendingToken)):params.oauthToken&&params.oauthTokenSecret?(cred.accessToken=params.oauthToken,cred.secret=params.oauthTokenSecret):_fail("argument-error"),cred}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(json){let obj="string"==typeof json?JSON.parse(json):json,{providerId,signInMethod}=obj,rest=(0,tslib__WEBPACK_IMPORTED_MODULE_4__._T)(obj,["providerId","signInMethod"]);if(!providerId||!signInMethod)return null;let cred=new OAuthCredential(providerId,signInMethod);return cred.idToken=rest.idToken||void 0,cred.accessToken=rest.accessToken||void 0,cred.secret=rest.secret,cred.nonce=rest.nonce,cred.pendingToken=rest.pendingToken||null,cred}_getIdTokenResponse(auth){let request=this.buildRequest();return signInWithIdp(auth,request)}_linkToIdToken(auth,idToken){let request=this.buildRequest();return request.idToken=idToken,signInWithIdp(auth,request)}_getReauthenticationResolver(auth){let request=this.buildRequest();return request.autoCreate=!1,signInWithIdp(auth,request)}buildRequest(){let request={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)request.pendingToken=this.pendingToken;else{let postBody={};this.idToken&&(postBody.id_token=this.idToken),this.accessToken&&(postBody.access_token=this.accessToken),this.secret&&(postBody.oauth_token_secret=this.secret),postBody.providerId=this.providerId,this.nonce&&!this.pendingToken&&(postBody.nonce=this.nonce),request.postBody=(0,_firebase_util__WEBPACK_IMPORTED_MODULE_0__.xO)(postBody)}return request}}/**
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
 */ async function sendPhoneVerificationCode(auth,request){return _performApiRequest(auth,"POST","/v1/accounts:sendVerificationCode",_addTidIfNecessary(auth,request))}async function signInWithPhoneNumber$1(auth,request){return _performSignInRequest(auth,"POST","/v1/accounts:signInWithPhoneNumber",_addTidIfNecessary(auth,request))}async function linkWithPhoneNumber$1(auth,request){let response=await _performSignInRequest(auth,"POST","/v1/accounts:signInWithPhoneNumber",_addTidIfNecessary(auth,request));if(response.temporaryProof)throw _makeTaggedError(auth,"account-exists-with-different-credential",response);return response}let VERIFY_PHONE_NUMBER_FOR_EXISTING_ERROR_MAP_={USER_NOT_FOUND:"user-not-found"};async function verifyPhoneNumberForExisting(auth,request){let apiRequest=Object.assign(Object.assign({},request),{operation:"REAUTH"});return _performSignInRequest(auth,"POST","/v1/accounts:signInWithPhoneNumber",_addTidIfNecessary(auth,apiRequest),VERIFY_PHONE_NUMBER_FOR_EXISTING_ERROR_MAP_)}/**
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
 */ class PhoneAuthCredential extends AuthCredential{constructor(params){super("phone","phone"),this.params=params}static _fromVerification(verificationId,verificationCode){return new PhoneAuthCredential({verificationId,verificationCode})}static _fromTokenResponse(phoneNumber,temporaryProof){return new PhoneAuthCredential({phoneNumber,temporaryProof})}_getIdTokenResponse(auth){return signInWithPhoneNumber$1(auth,this._makeVerificationRequest())}_linkToIdToken(auth,idToken){return linkWithPhoneNumber$1(auth,Object.assign({idToken},this._makeVerificationRequest()))}_getReauthenticationResolver(auth){return verifyPhoneNumberForExisting(auth,this._makeVerificationRequest())}_makeVerificationRequest(){let{temporaryProof,phoneNumber,verificationId,verificationCode}=this.params;return temporaryProof&&phoneNumber?{temporaryProof,phoneNumber}:{sessionInfo:verificationId,code:verificationCode}}toJSON(){let obj={providerId:this.providerId};return this.params.phoneNumber&&(obj.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(obj.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(obj.verificationCode=this.params.verificationCode),this.params.verificationId&&(obj.verificationId=this.params.verificationId),obj}static fromJSON(json){"string"==typeof json&&(json=JSON.parse(json));let{verificationId,verificationCode,phoneNumber,temporaryProof}=json;return verificationCode||verificationId||phoneNumber||temporaryProof?new PhoneAuthCredential({verificationId,verificationCode,phoneNumber,temporaryProof}):null}}class ActionCodeURL{constructor(actionLink){var _a,_b,_c,_d,_e,_f;let searchParams=(0,_firebase_util__WEBPACK_IMPORTED_MODULE_0__.zd)((0,_firebase_util__WEBPACK_IMPORTED_MODULE_0__.pd)(actionLink)),apiKey=null!==(_a=searchParams.apiKey)&&void 0!==_a?_a:null,code=null!==(_b=searchParams.oobCode)&&void 0!==_b?_b:null,operation=/**
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
 */ function(mode){switch(mode){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(_c=searchParams.mode)&&void 0!==_c?_c:null);_assert(apiKey&&code&&operation,"argument-error"),this.apiKey=apiKey,this.operation=operation,this.code=code,this.continueUrl=null!==(_d=searchParams.continueUrl)&&void 0!==_d?_d:null,this.languageCode=null!==(_e=searchParams.languageCode)&&void 0!==_e?_e:null,this.tenantId=null!==(_f=searchParams.tenantId)&&void 0!==_f?_f:null}static parseLink(link){let actionLink=function(url){let link=(0,_firebase_util__WEBPACK_IMPORTED_MODULE_0__.zd)((0,_firebase_util__WEBPACK_IMPORTED_MODULE_0__.pd)(url)).link,doubleDeepLink=link?(0,_firebase_util__WEBPACK_IMPORTED_MODULE_0__.zd)((0,_firebase_util__WEBPACK_IMPORTED_MODULE_0__.pd)(link)).deep_link_id:null,iOSDeepLink=(0,_firebase_util__WEBPACK_IMPORTED_MODULE_0__.zd)((0,_firebase_util__WEBPACK_IMPORTED_MODULE_0__.pd)(url)).deep_link_id,iOSDoubleDeepLink=iOSDeepLink?(0,_firebase_util__WEBPACK_IMPORTED_MODULE_0__.zd)((0,_firebase_util__WEBPACK_IMPORTED_MODULE_0__.pd)(iOSDeepLink)).link:null;return iOSDoubleDeepLink||iOSDeepLink||doubleDeepLink||link||url}(link);try{return new ActionCodeURL(actionLink)}catch(_a){return null}}}/**
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
 */ class EmailAuthProvider{constructor(){this.providerId=EmailAuthProvider.PROVIDER_ID}static credential(email,password){return EmailAuthCredential._fromEmailAndPassword(email,password)}static credentialWithLink(email,emailLink){let actionCodeUrl=ActionCodeURL.parseLink(emailLink);return _assert(actionCodeUrl,"argument-error"),EmailAuthCredential._fromEmailAndCode(email,actionCodeUrl.code,actionCodeUrl.tenantId)}}EmailAuthProvider.PROVIDER_ID="password",EmailAuthProvider.EMAIL_PASSWORD_SIGN_IN_METHOD="password",EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */ class FederatedAuthProvider{constructor(providerId){this.providerId=providerId,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(languageCode){this.defaultLanguageCode=languageCode}setCustomParameters(customOAuthParameters){return this.customParameters=customOAuthParameters,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
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
 */ class BaseOAuthProvider extends FederatedAuthProvider{constructor(){super(...arguments),this.scopes=[]}addScope(scope){return this.scopes.includes(scope)||this.scopes.push(scope),this}getScopes(){return[...this.scopes]}}/**
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
 */ class FacebookAuthProvider extends BaseOAuthProvider{constructor(){super("facebook.com")}static credential(accessToken){return OAuthCredential._fromParams({providerId:FacebookAuthProvider.PROVIDER_ID,signInMethod:FacebookAuthProvider.FACEBOOK_SIGN_IN_METHOD,accessToken})}static credentialFromResult(userCredential){return FacebookAuthProvider.credentialFromTaggedObject(userCredential)}static credentialFromError(error){return FacebookAuthProvider.credentialFromTaggedObject(error.customData||{})}static credentialFromTaggedObject({_tokenResponse:tokenResponse}){if(!tokenResponse||!("oauthAccessToken"in tokenResponse)||!tokenResponse.oauthAccessToken)return null;try{return FacebookAuthProvider.credential(tokenResponse.oauthAccessToken)}catch(_a){return null}}}FacebookAuthProvider.FACEBOOK_SIGN_IN_METHOD="facebook.com",FacebookAuthProvider.PROVIDER_ID="facebook.com";/**
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
 */ class GoogleAuthProvider extends BaseOAuthProvider{constructor(){super("google.com"),this.addScope("profile")}static credential(idToken,accessToken){return OAuthCredential._fromParams({providerId:GoogleAuthProvider.PROVIDER_ID,signInMethod:GoogleAuthProvider.GOOGLE_SIGN_IN_METHOD,idToken,accessToken})}static credentialFromResult(userCredential){return GoogleAuthProvider.credentialFromTaggedObject(userCredential)}static credentialFromError(error){return GoogleAuthProvider.credentialFromTaggedObject(error.customData||{})}static credentialFromTaggedObject({_tokenResponse:tokenResponse}){if(!tokenResponse)return null;let{oauthIdToken,oauthAccessToken}=tokenResponse;if(!oauthIdToken&&!oauthAccessToken)return null;try{return GoogleAuthProvider.credential(oauthIdToken,oauthAccessToken)}catch(_a){return null}}}GoogleAuthProvider.GOOGLE_SIGN_IN_METHOD="google.com",GoogleAuthProvider.PROVIDER_ID="google.com";/**
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
 */ class GithubAuthProvider extends BaseOAuthProvider{constructor(){super("github.com")}static credential(accessToken){return OAuthCredential._fromParams({providerId:GithubAuthProvider.PROVIDER_ID,signInMethod:GithubAuthProvider.GITHUB_SIGN_IN_METHOD,accessToken})}static credentialFromResult(userCredential){return GithubAuthProvider.credentialFromTaggedObject(userCredential)}static credentialFromError(error){return GithubAuthProvider.credentialFromTaggedObject(error.customData||{})}static credentialFromTaggedObject({_tokenResponse:tokenResponse}){if(!tokenResponse||!("oauthAccessToken"in tokenResponse)||!tokenResponse.oauthAccessToken)return null;try{return GithubAuthProvider.credential(tokenResponse.oauthAccessToken)}catch(_a){return null}}}GithubAuthProvider.GITHUB_SIGN_IN_METHOD="github.com",GithubAuthProvider.PROVIDER_ID="github.com";/**
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
 */ class TwitterAuthProvider extends BaseOAuthProvider{constructor(){super("twitter.com")}static credential(token,secret){return OAuthCredential._fromParams({providerId:TwitterAuthProvider.PROVIDER_ID,signInMethod:TwitterAuthProvider.TWITTER_SIGN_IN_METHOD,oauthToken:token,oauthTokenSecret:secret})}static credentialFromResult(userCredential){return TwitterAuthProvider.credentialFromTaggedObject(userCredential)}static credentialFromError(error){return TwitterAuthProvider.credentialFromTaggedObject(error.customData||{})}static credentialFromTaggedObject({_tokenResponse:tokenResponse}){if(!tokenResponse)return null;let{oauthAccessToken,oauthTokenSecret}=tokenResponse;if(!oauthAccessToken||!oauthTokenSecret)return null;try{return TwitterAuthProvider.credential(oauthAccessToken,oauthTokenSecret)}catch(_a){return null}}}/**
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
 */ async function signUp(auth,request){return _performSignInRequest(auth,"POST","/v1/accounts:signUp",_addTidIfNecessary(auth,request))}TwitterAuthProvider.TWITTER_SIGN_IN_METHOD="twitter.com",TwitterAuthProvider.PROVIDER_ID="twitter.com";/**
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
 */ class UserCredentialImpl{constructor(params){this.user=params.user,this.providerId=params.providerId,this._tokenResponse=params._tokenResponse,this.operationType=params.operationType}static async _fromIdTokenResponse(auth,operationType,idTokenResponse,isAnonymous=!1){let user=await UserImpl._fromIdTokenResponse(auth,idTokenResponse,isAnonymous),providerId=providerIdForResponse(idTokenResponse),userCred=new UserCredentialImpl({user,providerId,_tokenResponse:idTokenResponse,operationType});return userCred}static async _forOperation(user,operationType,response){await user._updateTokensIfNecessary(response,!0);let providerId=providerIdForResponse(response);return new UserCredentialImpl({user,providerId,_tokenResponse:response,operationType})}}function providerIdForResponse(response){return response.providerId?response.providerId:"phoneNumber"in response?"phone":null}/**
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
 */ class MultiFactorError extends _firebase_util__WEBPACK_IMPORTED_MODULE_0__.ZR{constructor(auth,error,operationType,user){var _a;super(error.code,error.message),this.operationType=operationType,this.user=user,Object.setPrototypeOf(this,MultiFactorError.prototype),this.customData={appName:auth.name,tenantId:null!==(_a=auth.tenantId)&&void 0!==_a?_a:void 0,_serverResponse:error.customData._serverResponse,operationType}}static _fromErrorAndOperation(auth,error,operationType,user){return new MultiFactorError(auth,error,operationType,user)}}function _processCredentialSavingMfaContextIfNecessary(auth,operationType,credential,user){let idTokenProvider="reauthenticate"===operationType?credential._getReauthenticationResolver(auth):credential._getIdTokenResponse(auth);return idTokenProvider.catch(error=>{if("auth/multi-factor-auth-required"===error.code)throw MultiFactorError._fromErrorAndOperation(auth,error,operationType,user);throw error})}async function _link$1(user,credential,bypassAuthState=!1){let response=await _logoutIfInvalidated(user,credential._linkToIdToken(user.auth,await user.getIdToken()),bypassAuthState);return UserCredentialImpl._forOperation(user,"link",response)}/**
 * @license
 * Copyright 2019 Google LLC
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
 */ async function _reauthenticate(user,credential,bypassAuthState=!1){let{auth}=user,operationType="reauthenticate";try{let response=await _logoutIfInvalidated(user,_processCredentialSavingMfaContextIfNecessary(auth,operationType,credential,user),bypassAuthState);_assert(response.idToken,auth,"internal-error");let parsed=_parseToken(response.idToken);_assert(parsed,auth,"internal-error");let{sub:localId}=parsed;return _assert(user.uid===localId,auth,"user-mismatch"),UserCredentialImpl._forOperation(user,operationType,response)}catch(e){throw(null==e?void 0:e.code)==="auth/user-not-found"&&_fail(auth,"user-mismatch"),e}}/**
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
 */ async function _signInWithCredential(auth,credential,bypassAuthState=!1){let operationType="signIn",response=await _processCredentialSavingMfaContextIfNecessary(auth,operationType,credential),userCredential=await UserCredentialImpl._fromIdTokenResponse(auth,operationType,response);return bypassAuthState||await auth._updateCurrentUser(userCredential.user),userCredential}async function signInWithCredential(auth,credential){return _signInWithCredential(_castAuth(auth),credential)}async function createUserWithEmailAndPassword(auth,email,password){let authInternal=_castAuth(auth),response=await signUp(authInternal,{returnSecureToken:!0,email,password}),userCredential=await UserCredentialImpl._fromIdTokenResponse(authInternal,"signIn",response);return await authInternal._updateCurrentUser(userCredential.user),userCredential}function signInWithEmailAndPassword(auth,email,password){return signInWithCredential((0,_firebase_util__WEBPACK_IMPORTED_MODULE_0__.m9)(auth),EmailAuthProvider.credential(email,password))}new WeakMap;let STORAGE_AVAILABLE_KEY="__sak";/**
 * @license
 * Copyright 2019 Google LLC
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
 */ class BrowserPersistenceClass{constructor(storageRetriever,type){this.storageRetriever=storageRetriever,this.type=type}_isAvailable(){try{if(!this.storage)return Promise.resolve(!1);return this.storage.setItem(STORAGE_AVAILABLE_KEY,"1"),this.storage.removeItem(STORAGE_AVAILABLE_KEY),Promise.resolve(!0)}catch(_a){return Promise.resolve(!1)}}_set(key,value){return this.storage.setItem(key,JSON.stringify(value)),Promise.resolve()}_get(key){let json=this.storage.getItem(key);return Promise.resolve(json?JSON.parse(json):null)}_remove(key){return this.storage.removeItem(key),Promise.resolve()}get storage(){return this.storageRetriever()}}class BrowserLocalPersistence extends BrowserPersistenceClass{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(event,poll)=>this.onStorageEvent(event,poll),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=/**
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
 */ function(){let ua=(0,_firebase_util__WEBPACK_IMPORTED_MODULE_0__.z$)();return _isSafari(ua)||_isIOS(ua)}()&&function(){try{return!!(window&&window!==window.top)}catch(e){return!1}}(),this.fallbackToPolling=_isMobileBrowser(),this._shouldAllowMigration=!0}forAllChangedKeys(cb){for(let key of Object.keys(this.listeners)){let newValue=this.storage.getItem(key),oldValue=this.localCache[key];newValue!==oldValue&&cb(key,oldValue,newValue)}}onStorageEvent(event,poll=!1){if(!event.key){this.forAllChangedKeys((key,_oldValue,newValue)=>{this.notifyListeners(key,newValue)});return}let key=event.key;if(poll?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){let storedValue=this.storage.getItem(key);if(event.newValue!==storedValue)null!==event.newValue?this.storage.setItem(key,event.newValue):this.storage.removeItem(key);else if(this.localCache[key]===event.newValue&&!poll)return}let triggerListeners=()=>{let storedValue=this.storage.getItem(key);(poll||this.localCache[key]!==storedValue)&&this.notifyListeners(key,storedValue)},storedValue1=this.storage.getItem(key);(0,_firebase_util__WEBPACK_IMPORTED_MODULE_0__.w1)()&&10===document.documentMode&&storedValue1!==event.newValue&&event.newValue!==event.oldValue?setTimeout(triggerListeners,10):triggerListeners()}notifyListeners(key,value){this.localCache[key]=value;let listeners=this.listeners[key];if(listeners)for(let listener of Array.from(listeners))listener(value?JSON.parse(value):value)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((key,oldValue,newValue)=>{this.onStorageEvent(new StorageEvent("storage",{key,oldValue,newValue}),!0)})},1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(key,listener){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[key]||(this.listeners[key]=new Set,this.localCache[key]=this.storage.getItem(key)),this.listeners[key].add(listener)}_removeListener(key,listener){this.listeners[key]&&(this.listeners[key].delete(listener),0===this.listeners[key].size&&delete this.listeners[key]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(key,value){await super._set(key,value),this.localCache[key]=JSON.stringify(value)}async _get(key){let value=await super._get(key);return this.localCache[key]=JSON.stringify(value),value}async _remove(key){await super._remove(key),delete this.localCache[key]}}BrowserLocalPersistence.type="LOCAL";/**
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
 */ class BrowserSessionPersistence extends BrowserPersistenceClass{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(_key,_listener){}_removeListener(_key,_listener){}}BrowserSessionPersistence.type="SESSION";/**
 * @license
 * Copyright 2019 Google LLC
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
 */ class Receiver{constructor(eventTarget){this.eventTarget=eventTarget,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(eventTarget){let existingInstance=this.receivers.find(receiver=>receiver.isListeningto(eventTarget));if(existingInstance)return existingInstance;let newInstance=new Receiver(eventTarget);return this.receivers.push(newInstance),newInstance}isListeningto(eventTarget){return this.eventTarget===eventTarget}async handleEvent(event){let{eventId,eventType,data}=event.data,handlers=this.handlersMap[eventType];if(!(null==handlers?void 0:handlers.size))return;event.ports[0].postMessage({status:"ack",eventId,eventType});let promises=Array.from(handlers).map(async handler=>handler(event.origin,data)),response=await Promise.all(promises.map(async promise=>{try{let value=await promise;return{fulfilled:!0,value}}catch(reason){return{fulfilled:!1,reason}}}));event.ports[0].postMessage({status:"done",eventId,eventType,response})}_subscribe(eventType,eventHandler){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[eventType]||(this.handlersMap[eventType]=new Set),this.handlersMap[eventType].add(eventHandler)}_unsubscribe(eventType,eventHandler){this.handlersMap[eventType]&&eventHandler&&this.handlersMap[eventType].delete(eventHandler),eventHandler&&0!==this.handlersMap[eventType].size||delete this.handlersMap[eventType],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}/**
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
 */ function _generateEventId(prefix="",digits=10){let random="";for(let i=0;i<digits;i++)random+=Math.floor(10*Math.random());return prefix+random}Receiver.receivers=[];/**
 * @license
 * Copyright 2019 Google LLC
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
 */ class Sender{constructor(target){this.target=target,this.handlers=new Set}removeMessageHandler(handler){handler.messageChannel&&(handler.messageChannel.port1.removeEventListener("message",handler.onMessage),handler.messageChannel.port1.close()),this.handlers.delete(handler)}async _send(eventType,data,timeout=50){let completionTimer,handler;let messageChannel="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!messageChannel)throw Error("connection_unavailable");return new Promise((resolve,reject)=>{let eventId=_generateEventId("",20);messageChannel.port1.start();let ackTimer=setTimeout(()=>{reject(Error("unsupported_event"))},timeout);handler={messageChannel,onMessage(event){if(event.data.eventId===eventId)switch(event.data.status){case"ack":clearTimeout(ackTimer),completionTimer=setTimeout(()=>{reject(Error("timeout"))},3e3);break;case"done":clearTimeout(completionTimer),resolve(event.data.response);break;default:clearTimeout(ackTimer),clearTimeout(completionTimer),reject(Error("invalid_response"))}}},this.handlers.add(handler),messageChannel.port1.addEventListener("message",handler.onMessage),this.target.postMessage({eventType,eventId,data},[messageChannel.port2])}).finally(()=>{handler&&this.removeMessageHandler(handler)})}}/**
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
 */ function _window(){return window}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */ function _isWorker(){return void 0!==_window().WorkerGlobalScope&&"function"==typeof _window().importScripts}async function _getActiveServiceWorker(){if(!(null==navigator?void 0:navigator.serviceWorker))return null;try{let registration=await navigator.serviceWorker.ready;return registration.active}catch(_a){return null}}/**
 * @license
 * Copyright 2019 Google LLC
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
 */ let DB_NAME="firebaseLocalStorageDb",DB_OBJECTSTORE_NAME="firebaseLocalStorage",DB_DATA_KEYPATH="fbase_key";class DBPromise{constructor(request){this.request=request}toPromise(){return new Promise((resolve,reject)=>{this.request.addEventListener("success",()=>{resolve(this.request.result)}),this.request.addEventListener("error",()=>{reject(this.request.error)})})}}function getObjectStore(db,isReadWrite){return db.transaction([DB_OBJECTSTORE_NAME],isReadWrite?"readwrite":"readonly").objectStore(DB_OBJECTSTORE_NAME)}function _openDatabase(){let request=indexedDB.open(DB_NAME,1);return new Promise((resolve,reject)=>{request.addEventListener("error",()=>{reject(request.error)}),request.addEventListener("upgradeneeded",()=>{let db=request.result;try{db.createObjectStore(DB_OBJECTSTORE_NAME,{keyPath:DB_DATA_KEYPATH})}catch(e){reject(e)}}),request.addEventListener("success",async()=>{let db=request.result;db.objectStoreNames.contains(DB_OBJECTSTORE_NAME)?resolve(db):(db.close(),await function(){let request=indexedDB.deleteDatabase(DB_NAME);return new DBPromise(request).toPromise()}(),resolve(await _openDatabase()))})})}async function _putObject(db,key,value){let request=getObjectStore(db,!0).put({[DB_DATA_KEYPATH]:key,value});return new DBPromise(request).toPromise()}async function getObject(db,key){let request=getObjectStore(db,!1).get(key),data=await new DBPromise(request).toPromise();return void 0===data?null:data.value}function _deleteObject(db,key){let request=getObjectStore(db,!0).delete(key);return new DBPromise(request).toPromise()}class IndexedDBLocalPersistence{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db||(this.db=await _openDatabase()),this.db}async _withRetries(op){let numAttempts=0;for(;;)try{let db=await this._openDb();return await op(db)}catch(e){if(numAttempts++>3)throw e;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return _isWorker()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Receiver._getInstance(_isWorker()?self:null),this.receiver._subscribe("keyChanged",async(_origin,data)=>{let keys=await this._poll();return{keyProcessed:keys.includes(data.key)}}),this.receiver._subscribe("ping",async(_origin,_data)=>["keyChanged"])}async initializeSender(){var _a,_b;if(this.activeServiceWorker=await _getActiveServiceWorker(),!this.activeServiceWorker)return;this.sender=new Sender(this.activeServiceWorker);let results=await this.sender._send("ping",{},800);results&&(null===(_a=results[0])||void 0===_a?void 0:_a.fulfilled)&&(null===(_b=results[0])||void 0===_b?void 0:_b.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(key){var _a;if(this.sender&&this.activeServiceWorker&&((null===(_a=null==navigator?void 0:navigator.serviceWorker)||void 0===_a?void 0:_a.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key},this.serviceWorkerReceiverAvailable?800:50)}catch(_a1){}}async _isAvailable(){try{if(!indexedDB)return!1;let db=await _openDatabase();return await _putObject(db,STORAGE_AVAILABLE_KEY,"1"),await _deleteObject(db,STORAGE_AVAILABLE_KEY),!0}catch(_a){}return!1}async _withPendingWrite(write){this.pendingWrites++;try{await write()}finally{this.pendingWrites--}}async _set(key,value){return this._withPendingWrite(async()=>(await this._withRetries(db=>_putObject(db,key,value)),this.localCache[key]=value,this.notifyServiceWorker(key)))}async _get(key){let obj=await this._withRetries(db=>getObject(db,key));return this.localCache[key]=obj,obj}async _remove(key){return this._withPendingWrite(async()=>(await this._withRetries(db=>_deleteObject(db,key)),delete this.localCache[key],this.notifyServiceWorker(key)))}async _poll(){let result=await this._withRetries(db=>{let getAllRequest=getObjectStore(db,!1).getAll();return new DBPromise(getAllRequest).toPromise()});if(!result||0!==this.pendingWrites)return[];let keys=[],keysInResult=new Set;for(let{fbase_key:key,value}of result)keysInResult.add(key),JSON.stringify(this.localCache[key])!==JSON.stringify(value)&&(this.notifyListeners(key,value),keys.push(key));for(let localKey of Object.keys(this.localCache))this.localCache[localKey]&&!keysInResult.has(localKey)&&(this.notifyListeners(localKey,null),keys.push(localKey));return keys}notifyListeners(key,newValue){this.localCache[key]=newValue;let listeners=this.listeners[key];if(listeners)for(let listener of Array.from(listeners))listener(newValue)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(key,listener){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[key]||(this.listeners[key]=new Set,this._get(key)),this.listeners[key].add(listener)}_removeListener(key,listener){this.listeners[key]&&(this.listeners[key].delete(listener),0===this.listeners[key].size&&delete this.listeners[key]),0===Object.keys(this.listeners).length&&this.stopPolling()}}function _generateCallbackName(prefix){return`__${prefix}${Math.floor(1e6*Math.random())}`}async function _verifyPhoneNumber(auth,options,verifier){var _a,request,request1;let recaptchaToken=await verifier.verify();try{let phoneInfoOptions;if(_assert("string"==typeof recaptchaToken,auth,"argument-error"),_assert("recaptcha"===verifier.type,auth,"argument-error"),phoneInfoOptions="string"==typeof options?{phoneNumber:options}:options,"session"in phoneInfoOptions){let session=phoneInfoOptions.session;if("phoneNumber"in phoneInfoOptions){_assert("enroll"===session.type,auth,"internal-error");let response=await (request={idToken:session.credential,phoneEnrollmentInfo:{phoneNumber:phoneInfoOptions.phoneNumber,recaptchaToken}},_performApiRequest(auth,"POST","/v2/accounts/mfaEnrollment:start",_addTidIfNecessary(auth,request)));return response.phoneSessionInfo.sessionInfo}{_assert("signin"===session.type,auth,"internal-error");let mfaEnrollmentId=(null===(_a=phoneInfoOptions.multiFactorHint)||void 0===_a?void 0:_a.uid)||phoneInfoOptions.multiFactorUid;_assert(mfaEnrollmentId,auth,"missing-multi-factor-info");let response1=await (request1={mfaPendingCredential:session.credential,mfaEnrollmentId,phoneSignInInfo:{recaptchaToken}},_performApiRequest(auth,"POST","/v2/accounts/mfaSignIn:start",_addTidIfNecessary(auth,request1)));return response1.phoneResponseInfo.sessionInfo}}{let{sessionInfo}=await sendPhoneVerificationCode(auth,{phoneNumber:phoneInfoOptions.phoneNumber,recaptchaToken});return sessionInfo}}finally{verifier._reset()}}IndexedDBLocalPersistence.type="LOCAL",_generateCallbackName("rcb"),new Delay(3e4,6e4);/**
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
 */ class PhoneAuthProvider{constructor(auth){this.providerId=PhoneAuthProvider.PROVIDER_ID,this.auth=_castAuth(auth)}verifyPhoneNumber(phoneOptions,applicationVerifier){return _verifyPhoneNumber(this.auth,phoneOptions,(0,_firebase_util__WEBPACK_IMPORTED_MODULE_0__.m9)(applicationVerifier))}static credential(verificationId,verificationCode){return PhoneAuthCredential._fromVerification(verificationId,verificationCode)}static credentialFromResult(userCredential){return PhoneAuthProvider.credentialFromTaggedObject(userCredential)}static credentialFromError(error){return PhoneAuthProvider.credentialFromTaggedObject(error.customData||{})}static credentialFromTaggedObject({_tokenResponse:tokenResponse}){if(!tokenResponse)return null;let{phoneNumber,temporaryProof}=tokenResponse;return phoneNumber&&temporaryProof?PhoneAuthCredential._fromTokenResponse(phoneNumber,temporaryProof):null}}PhoneAuthProvider.PROVIDER_ID="phone",PhoneAuthProvider.PHONE_SIGN_IN_METHOD="phone";/**
 * @license
 * Copyright 2019 Google LLC
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
 */ class IdpCredential extends AuthCredential{constructor(params){super("custom","custom"),this.params=params}_getIdTokenResponse(auth){return signInWithIdp(auth,this._buildIdpRequest())}_linkToIdToken(auth,idToken){return signInWithIdp(auth,this._buildIdpRequest(idToken))}_getReauthenticationResolver(auth){return signInWithIdp(auth,this._buildIdpRequest())}_buildIdpRequest(idToken){let request={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return idToken&&(request.idToken=idToken),request}}function _signIn(params){return _signInWithCredential(params.auth,new IdpCredential(params),params.bypassAuthState)}function _reauth(params){let{auth,user}=params;return _assert(user,auth,"internal-error"),_reauthenticate(user,new IdpCredential(params),params.bypassAuthState)}async function _link(params){let{auth,user}=params;return _assert(user,auth,"internal-error"),_link$1(user,new IdpCredential(params),params.bypassAuthState)}/**
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
 */ class AbstractPopupRedirectOperation{constructor(auth,filter,resolver,user,bypassAuthState=!1){this.auth=auth,this.resolver=resolver,this.user=user,this.bypassAuthState=bypassAuthState,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(filter)?filter:[filter]}execute(){return new Promise(async(resolve,reject)=>{this.pendingPromise={resolve,reject};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}})}async onAuthEvent(event){let{urlResponse,sessionId,postBody,tenantId,error,type}=event;if(error){this.reject(error);return}let params={auth:this.auth,requestUri:urlResponse,sessionId:sessionId,tenantId:tenantId||void 0,postBody:postBody||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(type)(params))}catch(e){this.reject(e)}}onError(error){this.reject(error)}getIdpTask(type){switch(type){case"signInViaPopup":case"signInViaRedirect":return _signIn;case"linkViaPopup":case"linkViaRedirect":return _link;case"reauthViaPopup":case"reauthViaRedirect":return _reauth;default:_fail(this.auth,"internal-error")}}resolve(cred){this.pendingPromise||debugFail("Pending promise was never set"),this.pendingPromise.resolve(cred),this.unregisterAndCleanUp()}reject(error){this.pendingPromise||debugFail("Pending promise was never set"),this.pendingPromise.reject(error),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */ let _POLL_WINDOW_CLOSE_TIMEOUT=new Delay(2e3,1e4);class PopupOperation extends AbstractPopupRedirectOperation{constructor(auth,filter,provider,resolver,user){super(auth,filter,resolver,user),this.provider=provider,this.authWindow=null,this.pollId=null,PopupOperation.currentPopupAction&&PopupOperation.currentPopupAction.cancel(),PopupOperation.currentPopupAction=this}async executeNotNull(){let result=await this.execute();return _assert(result,this.auth,"internal-error"),result}async onExecution(){1===this.filter.length||debugFail("Popup operations only handle one event");let eventId=_generateEventId();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],eventId),this.authWindow.associatedEvent=eventId,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,isSupported=>{isSupported||this.reject(_createError(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var _a;return(null===(_a=this.authWindow)||void 0===_a?void 0:_a.associatedEvent)||null}cancel(){this.reject(_createError(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,PopupOperation.currentPopupAction=null}pollUserCancellation(){let poll=()=>{var _a,_b;if(null===(_b=null===(_a=this.authWindow)||void 0===_a?void 0:_a.window)||void 0===_b?void 0:_b.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(_createError(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(poll,_POLL_WINDOW_CLOSE_TIMEOUT.get())};poll()}}PopupOperation.currentPopupAction=null;let redirectOutcomeMap=new Map;class RedirectAction extends AbstractPopupRedirectOperation{constructor(auth,resolver,bypassAuthState=!1){super(auth,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],resolver,void 0,bypassAuthState),this.eventId=null}async execute(){let readyOutcome=redirectOutcomeMap.get(this.auth._key());if(!readyOutcome){try{let hasPendingRedirect=await _getAndClearPendingRedirectStatus(this.resolver,this.auth),result=hasPendingRedirect?await super.execute():null;readyOutcome=()=>Promise.resolve(result)}catch(e){readyOutcome=()=>Promise.reject(e)}redirectOutcomeMap.set(this.auth._key(),readyOutcome)}return this.bypassAuthState||redirectOutcomeMap.set(this.auth._key(),()=>Promise.resolve(null)),readyOutcome()}async onAuthEvent(event){if("signInViaRedirect"===event.type)return super.onAuthEvent(event);if("unknown"===event.type){this.resolve(null);return}if(event.eventId){let user=await this.auth._redirectUserForId(event.eventId);if(user)return this.user=user,super.onAuthEvent(event);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function _getAndClearPendingRedirectStatus(resolver,auth){let key=_persistenceKeyName("pendingRedirect",auth.config.apiKey,auth.name),persistence=_getInstance(resolver._redirectPersistence);if(!await persistence._isAvailable())return!1;let hasPendingRedirect=await persistence._get(key)==="true";return await persistence._remove(key),hasPendingRedirect}function _overrideRedirectResult(auth,result){redirectOutcomeMap.set(auth._key(),result)}async function _getRedirectResult(auth,resolverExtern,bypassAuthState=!1){let authInternal=_castAuth(auth),resolver=resolverExtern?_getInstance(resolverExtern):(_assert(authInternal._popupRedirectResolver,authInternal,"argument-error"),authInternal._popupRedirectResolver),action=new RedirectAction(authInternal,resolver,bypassAuthState),result=await action.execute();return result&&!bypassAuthState&&(delete result.user._redirectEventId,await authInternal._persistUserIfCurrent(result.user),await authInternal._setRedirectUser(null,resolverExtern)),result}class AuthEventManager{constructor(auth){this.auth=auth,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(authEventConsumer){this.consumers.add(authEventConsumer),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,authEventConsumer)&&(this.sendToConsumer(this.queuedRedirectEvent,authEventConsumer),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(authEventConsumer){this.consumers.delete(authEventConsumer)}onEvent(event){if(this.hasEventBeenHandled(event))return!1;let handled=!1;return this.consumers.forEach(consumer=>{this.isEventForConsumer(event,consumer)&&(handled=!0,this.sendToConsumer(event,consumer),this.saveEventToCache(event))}),this.hasHandledPotentialRedirect||!function(event){switch(event.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return isNullRedirectEvent(event);default:return!1}}(event)||(this.hasHandledPotentialRedirect=!0,handled||(this.queuedRedirectEvent=event,handled=!0)),handled}sendToConsumer(event,consumer){var _a;if(event.error&&!isNullRedirectEvent(event)){let code=(null===(_a=event.error.code)||void 0===_a?void 0:_a.split("auth/")[1])||"internal-error";consumer.onError(_createError(this.auth,code))}else consumer.onAuthEvent(event)}isEventForConsumer(event,consumer){let eventIdMatches=null===consumer.eventId||!!event.eventId&&event.eventId===consumer.eventId;return consumer.filter.includes(event.type)&&eventIdMatches}hasEventBeenHandled(event){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(eventUid(event))}saveEventToCache(event){this.cachedEventUids.add(eventUid(event)),this.lastProcessedEventTime=Date.now()}}function eventUid(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(v=>v).join("-")}function isNullRedirectEvent({type,error}){return"unknown"===type&&(null==error?void 0:error.code)==="auth/no-auth-event"}/**
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
 */ async function _getProjectConfig(auth,request={}){return _performApiRequest(auth,"GET","/v1/projects",request)}/**
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
 */ let IP_ADDRESS_REGEX=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,HTTP_REGEX=/^https?/;async function _validateOrigin(auth){if(auth.config.emulator)return;let{authorizedDomains}=await _getProjectConfig(auth);for(let domain of authorizedDomains)try{if(function(expected){let currentUrl=_getCurrentUrl(),{protocol,hostname}=new URL(currentUrl);if(expected.startsWith("chrome-extension://")){let ceUrl=new URL(expected);return""===ceUrl.hostname&&""===hostname?"chrome-extension:"===protocol&&expected.replace("chrome-extension://","")===currentUrl.replace("chrome-extension://",""):"chrome-extension:"===protocol&&ceUrl.hostname===hostname}if(!HTTP_REGEX.test(protocol))return!1;if(IP_ADDRESS_REGEX.test(expected))return hostname===expected;let escapedDomainPattern=expected.replace(/\./g,"\\."),re=RegExp("^(.+\\."+escapedDomainPattern+"|"+escapedDomainPattern+")$","i");return re.test(hostname)}(domain))return}catch(_a){}_fail(auth,"unauthorized-domain")}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */ let NETWORK_TIMEOUT=new Delay(3e4,6e4);function resetUnloadedGapiModules(){let beacon=_window().___jsl;if(null==beacon?void 0:beacon.H){for(let hint of Object.keys(beacon.H))if(beacon.H[hint].r=beacon.H[hint].r||[],beacon.H[hint].L=beacon.H[hint].L||[],beacon.H[hint].r=[...beacon.H[hint].L],beacon.CP)for(let i=0;i<beacon.CP.length;i++)beacon.CP[i]=null}}let cachedGApiLoader=null,PING_TIMEOUT=new Delay(5e3,15e3),IFRAME_ATTRIBUTES={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},EID_FROM_APIHOST=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);async function _openIframe(auth){let context=await (cachedGApiLoader=cachedGApiLoader||new Promise((resolve,reject)=>{var _a,_b,_c,url;function loadGapiIframe(){resetUnloadedGapiModules(),gapi.load("gapi.iframes",{callback(){resolve(gapi.iframes.getContext())},ontimeout(){resetUnloadedGapiModules(),reject(_createError(auth,"network-request-failed"))},timeout:NETWORK_TIMEOUT.get()})}if(null===(_b=null===(_a=_window().gapi)||void 0===_a?void 0:_a.iframes)||void 0===_b?void 0:_b.Iframe)resolve(gapi.iframes.getContext());else if(null===(_c=_window().gapi)||void 0===_c?void 0:_c.load)loadGapiIframe();else{let cbName=_generateCallbackName("iframefcb");return _window()[cbName]=()=>{gapi.load?loadGapiIframe():reject(_createError(auth,"network-request-failed"))},(url=`https://apis.google.com/js/api.js?onload=${cbName}`,new Promise((resolve,reject)=>{var _a,_b;let el=document.createElement("script");el.setAttribute("src",url),el.onload=resolve,el.onerror=e=>{let error=_createError("internal-error");error.customData=e,reject(error)},el.type="text/javascript",el.charset="UTF-8",(null!==(_b=null===(_a=document.getElementsByTagName("head"))||void 0===_a?void 0:_a[0])&&void 0!==_b?_b:document).appendChild(el)})).catch(e=>reject(e))}}).catch(error=>{throw cachedGApiLoader=null,error})),gapi1=_window().gapi;return _assert(gapi1,auth,"internal-error"),context.open({where:document.body,url:function(auth){let config=auth.config;_assert(config.authDomain,auth,"auth-domain-config-required");let url=config.emulator?_emulatorUrl(config,"emulator/auth/iframe"):`https://${auth.config.authDomain}/__/auth/iframe`,params={apiKey:config.apiKey,appName:auth.name,v:_firebase_app__WEBPACK_IMPORTED_MODULE_1__.Jn},eid=EID_FROM_APIHOST.get(auth.config.apiHost);eid&&(params.eid=eid);let frameworks=auth._getFrameworks();return frameworks.length&&(params.fw=frameworks.join(",")),`${url}?${(0,_firebase_util__WEBPACK_IMPORTED_MODULE_0__.xO)(params).slice(1)}`}(auth),messageHandlersFilter:gapi1.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:IFRAME_ATTRIBUTES,dontclear:!0},iframe=>new Promise(async(resolve,reject)=>{await iframe.restyle({setHideOnLeave:!1});let networkError=_createError(auth,"network-request-failed"),networkErrorTimer=_window().setTimeout(()=>{reject(networkError)},PING_TIMEOUT.get());function clearTimerAndResolve(){_window().clearTimeout(networkErrorTimer),resolve(iframe)}iframe.ping(clearTimerAndResolve).then(clearTimerAndResolve,()=>{reject(networkError)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */ let BASE_POPUP_OPTIONS={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class AuthPopup{constructor(window1){this.window=window1,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function _getRedirectUrl(auth,provider,authType,redirectUrl,eventId,additionalParams){_assert(auth.config.authDomain,auth,"auth-domain-config-required"),_assert(auth.config.apiKey,auth,"invalid-api-key");let params={apiKey:auth.config.apiKey,appName:auth.name,authType,redirectUrl,v:_firebase_app__WEBPACK_IMPORTED_MODULE_1__.Jn,eventId};if(provider instanceof FederatedAuthProvider)for(let[key,value]of(provider.setDefaultLanguage(auth.languageCode),params.providerId=provider.providerId||"",(0,_firebase_util__WEBPACK_IMPORTED_MODULE_0__.xb)(provider.getCustomParameters())||(params.customParameters=JSON.stringify(provider.getCustomParameters())),Object.entries(additionalParams||{})))params[key]=value;if(provider instanceof BaseOAuthProvider){let scopes=provider.getScopes().filter(scope=>""!==scope);scopes.length>0&&(params.scopes=scopes.join(","))}auth.tenantId&&(params.tid=auth.tenantId);let paramsDict=params;for(let key1 of Object.keys(paramsDict))void 0===paramsDict[key1]&&delete paramsDict[key1];return`${function({config}){return config.emulator?_emulatorUrl(config,"emulator/auth/handler"):`https://${config.authDomain}/__/auth/handler`}(auth)}?${(0,_firebase_util__WEBPACK_IMPORTED_MODULE_0__.xO)(paramsDict).slice(1)}`}/**
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
 */ let WEB_STORAGE_SUPPORT_KEY="webStorageSupport",browserPopupRedirectResolver=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=BrowserSessionPersistence,this._completeRedirectFn=_getRedirectResult,this._overrideRedirectResult=_overrideRedirectResult}async _openPopup(auth,provider,authType,eventId){var _a;(null===(_a=this.eventManagers[auth._key()])||void 0===_a?void 0:_a.manager)||debugFail("_initialize() not called before _openPopup()");let url=_getRedirectUrl(auth,provider,authType,_getCurrentUrl(),eventId);return function(auth,url,name,width=500,height=600){let top=Math.max((window.screen.availHeight-height)/2,0).toString(),left=Math.max((window.screen.availWidth-width)/2,0).toString(),target="",options=Object.assign(Object.assign({},BASE_POPUP_OPTIONS),{width:width.toString(),height:height.toString(),top,left}),ua=(0,_firebase_util__WEBPACK_IMPORTED_MODULE_0__.z$)().toLowerCase();name&&(target=_isChromeIOS(ua)?"_blank":name),_isFirefox(ua)&&(url=url||"http://localhost",options.scrollbars="yes");let optionsString=Object.entries(options).reduce((accum,[key,value])=>`${accum}${key}=${value},`,"");if(function(ua=(0,_firebase_util__WEBPACK_IMPORTED_MODULE_0__.z$)()){var _a;return _isIOS(ua)&&!!(null===(_a=window.navigator)||void 0===_a?void 0:_a.standalone)}(ua)&&"_self"!==target)return function(url,target){let el=document.createElement("a");el.href=url,el.target=target;let click=document.createEvent("MouseEvent");click.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),el.dispatchEvent(click)}(url||"",target),new AuthPopup(null);let newWin=window.open(url||"",target,optionsString);_assert(newWin,auth,"popup-blocked");try{newWin.focus()}catch(e){}return new AuthPopup(newWin)}(auth,url,_generateEventId())}async _openRedirect(auth,provider,authType,eventId){var url;return await this._originValidation(auth),url=_getRedirectUrl(auth,provider,authType,_getCurrentUrl(),eventId),_window().location.href=url,new Promise(()=>{})}_initialize(auth){let key=auth._key();if(this.eventManagers[key]){let{manager,promise}=this.eventManagers[key];return manager?Promise.resolve(manager):(promise||debugFail("If manager is not set, promise should be"),promise)}let promise1=this.initAndGetManager(auth);return this.eventManagers[key]={promise:promise1},promise1.catch(()=>{delete this.eventManagers[key]}),promise1}async initAndGetManager(auth){let iframe=await _openIframe(auth),manager=new AuthEventManager(auth);return iframe.register("authEvent",iframeEvent=>{_assert(null==iframeEvent?void 0:iframeEvent.authEvent,auth,"invalid-auth-event");let handled=manager.onEvent(iframeEvent.authEvent);return{status:handled?"ACK":"ERROR"}},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[auth._key()]={manager},this.iframes[auth._key()]=iframe,manager}_isIframeWebStorageSupported(auth,cb){let iframe=this.iframes[auth._key()];iframe.send(WEB_STORAGE_SUPPORT_KEY,{type:WEB_STORAGE_SUPPORT_KEY},result=>{var _a;let isSupported=null===(_a=null==result?void 0:result[0])||void 0===_a?void 0:_a[WEB_STORAGE_SUPPORT_KEY];void 0!==isSupported&&cb(!!isSupported),_fail(auth,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(auth){let key=auth._key();return this.originValidationPromises[key]||(this.originValidationPromises[key]=_validateOrigin(auth)),this.originValidationPromises[key]}get _shouldInitProactively(){return _isMobileBrowser()||_isSafari()||_isIOS()}};class MultiFactorAssertionImpl{constructor(factorId){this.factorId=factorId}_process(auth,session,displayName){switch(session.type){case"enroll":return this._finalizeEnroll(auth,session.credential,displayName);case"signin":return this._finalizeSignIn(auth,session.credential);default:return debugFail("unexpected MultiFactorSessionType")}}}class PhoneMultiFactorAssertionImpl extends MultiFactorAssertionImpl{constructor(credential){super("phone"),this.credential=credential}static _fromCredential(credential){return new PhoneMultiFactorAssertionImpl(credential)}_finalizeEnroll(auth,idToken,displayName){return _performApiRequest(auth,"POST","/v2/accounts/mfaEnrollment:finalize",_addTidIfNecessary(auth,{idToken,displayName,phoneVerificationInfo:this.credential._makeVerificationRequest()}))}_finalizeSignIn(auth,mfaPendingCredential){return _performApiRequest(auth,"POST","/v2/accounts/mfaSignIn:finalize",_addTidIfNecessary(auth,{mfaPendingCredential,phoneVerificationInfo:this.credential._makeVerificationRequest()}))}}var name="@firebase/auth",version="0.20.11";/**
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
 */ class AuthInterop{constructor(auth){this.auth=auth,this.internalListeners=new Map}getUid(){var _a;return this.assertAuthConfigured(),(null===(_a=this.auth.currentUser)||void 0===_a?void 0:_a.uid)||null}async getToken(forceRefresh){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;let accessToken=await this.auth.currentUser.getIdToken(forceRefresh);return{accessToken}}addAuthTokenListener(listener){if(this.assertAuthConfigured(),this.internalListeners.has(listener))return;let unsubscribe=this.auth.onIdTokenChanged(user=>{listener((null==user?void 0:user.stsTokenManager.accessToken)||null)});this.internalListeners.set(listener,unsubscribe),this.updateProactiveRefresh()}removeAuthTokenListener(listener){this.assertAuthConfigured();let unsubscribe=this.internalListeners.get(listener);unsubscribe&&(this.internalListeners.delete(listener),unsubscribe(),this.updateProactiveRefresh())}assertAuthConfigured(){_assert(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}let authIdTokenMaxAge=(0,_firebase_util__WEBPACK_IMPORTED_MODULE_0__.Pz)("authIdTokenMaxAge")||300,lastPostedIdToken=null,mintCookieFactory=url=>async user=>{let idTokenResult=user&&await user.getIdTokenResult(),idTokenAge=idTokenResult&&(new Date().getTime()-Date.parse(idTokenResult.issuedAtTime))/1e3;if(idTokenAge&&idTokenAge>authIdTokenMaxAge)return;let idToken=null==idTokenResult?void 0:idTokenResult.token;lastPostedIdToken!==idToken&&(lastPostedIdToken=idToken,await fetch(url,{method:idToken?"POST":"DELETE",headers:idToken?{Authorization:`Bearer ${idToken}`}:{}}))};function getAuth(app=(0,_firebase_app__WEBPACK_IMPORTED_MODULE_1__.Mq)()){let provider=(0,_firebase_app__WEBPACK_IMPORTED_MODULE_1__.qX)(app,"auth");if(provider.isInitialized())return provider.getImmediate();let auth=/**
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
 */ function(app,deps){let provider=(0,_firebase_app__WEBPACK_IMPORTED_MODULE_1__.qX)(app,"auth");if(provider.isInitialized()){let auth=provider.getImmediate(),initialOptions=provider.getOptions();if((0,_firebase_util__WEBPACK_IMPORTED_MODULE_0__.vZ)(initialOptions,null!=deps?deps:{}))return auth;_fail(auth,"already-initialized")}let auth1=provider.initialize({options:deps});return auth1}(app,{popupRedirectResolver:browserPopupRedirectResolver,persistence:[IndexedDBLocalPersistence,BrowserLocalPersistence,BrowserSessionPersistence]}),authTokenSyncUrl=(0,_firebase_util__WEBPACK_IMPORTED_MODULE_0__.Pz)("authTokenSyncURL");if(authTokenSyncUrl){var onAbort,nextOrObserver;let mintCookie=mintCookieFactory(authTokenSyncUrl);onAbort=()=>mintCookie(auth.currentUser),(0,_firebase_util__WEBPACK_IMPORTED_MODULE_0__.m9)(auth).beforeAuthStateChanged(mintCookie,onAbort),nextOrObserver=user=>mintCookie(user),(0,_firebase_util__WEBPACK_IMPORTED_MODULE_0__.m9)(auth).onIdTokenChanged(nextOrObserver,void 0,void 0)}let authEmulatorHost=(0,_firebase_util__WEBPACK_IMPORTED_MODULE_0__.q4)("auth");return authEmulatorHost&&function(auth,url,options){let authInternal=_castAuth(auth);_assert(authInternal._canInitEmulator,authInternal,"emulator-config-failed"),_assert(/^https?:\/\//.test(url),authInternal,"invalid-emulator-scheme");let disableWarnings=!!(null==options?void 0:options.disableWarnings),protocol=extractProtocol(url),{host,port}=function(url){let protocol=extractProtocol(url),authority=/(\/\/)?([^?#/]+)/.exec(url.substr(protocol.length));if(!authority)return{host:"",port:null};let hostAndPort=authority[2].split("@").pop()||"",bracketedIPv6=/^(\[[^\]]+\])(:|$)/.exec(hostAndPort);if(bracketedIPv6){let host=bracketedIPv6[1];return{host,port:parsePort(hostAndPort.substr(host.length+1))}}{let[host1,port]=hostAndPort.split(":");return{host:host1,port:parsePort(port)}}}(url),portStr=null===port?"":`:${port}`;authInternal.config.emulator={url:`${protocol}//${host}${portStr}/`},authInternal.settings.appVerificationDisabledForTesting=!0,authInternal.emulatorConfig=Object.freeze({host,port,protocol:protocol.replace(":",""),options:Object.freeze({disableWarnings})}),disableWarnings||function(){function attachBanner(){let el=document.createElement("p"),sty=el.style;el.innerText="Running in emulator mode. Do not use with production credentials.",sty.position="fixed",sty.width="100%",sty.backgroundColor="#ffffff",sty.border=".1em solid #000000",sty.color="#b50000",sty.bottom="0px",sty.left="0px",sty.margin="0px",sty.zIndex="10000",sty.textAlign="center",el.classList.add("firebase-emulator-warning"),document.body.appendChild(el)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",attachBanner):attachBanner())}()}(auth,`http://${authEmulatorHost}`),auth}clientPlatform="Browser",(0,_firebase_app__WEBPACK_IMPORTED_MODULE_1__.Xd)(new _firebase_component__WEBPACK_IMPORTED_MODULE_3__.wA("auth",(container,{options:deps})=>{let app=container.getProvider("app").getImmediate(),heartbeatServiceProvider=container.getProvider("heartbeat"),{apiKey,authDomain}=app.options;return((app,heartbeatServiceProvider)=>{_assert(apiKey&&!apiKey.includes(":"),"invalid-api-key",{appName:app.name}),_assert(!(null==authDomain?void 0:authDomain.includes(":")),"argument-error",{appName:app.name});let config={apiKey,authDomain,clientPlatform,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:_getClientVersion(clientPlatform)},authInstance=new AuthImpl(app,heartbeatServiceProvider,config);return function(auth,deps){let persistence=(null==deps?void 0:deps.persistence)||[],hierarchy=(Array.isArray(persistence)?persistence:[persistence]).map(_getInstance);(null==deps?void 0:deps.errorMap)&&auth._updateErrorMap(deps.errorMap),auth._initializeWithPersistence(hierarchy,null==deps?void 0:deps.popupRedirectResolver)}(authInstance,deps),authInstance})(app,heartbeatServiceProvider)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((container,_instanceIdentifier,_instance)=>{let authInternalProvider=container.getProvider("auth-internal");authInternalProvider.initialize()})),(0,_firebase_app__WEBPACK_IMPORTED_MODULE_1__.Xd)(new _firebase_component__WEBPACK_IMPORTED_MODULE_3__.wA("auth-internal",container=>{let auth=_castAuth(container.getProvider("auth").getImmediate());return new AuthInterop(auth)},"PRIVATE").setInstantiationMode("EXPLICIT")),(0,_firebase_app__WEBPACK_IMPORTED_MODULE_1__.KN)(name,version,/**
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
 */ function(clientPlatform){switch(clientPlatform){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(clientPlatform)),(0,_firebase_app__WEBPACK_IMPORTED_MODULE_1__.KN)(name,version,"esm2017")}}]);