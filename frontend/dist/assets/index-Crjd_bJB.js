function xy(t,e){for(var n=0;n<e.length;n++){const i=e[n];if(typeof i!="string"&&!Array.isArray(i)){for(const r in i)if(r!=="default"&&!(r in t)){const s=Object.getOwnPropertyDescriptor(i,r);s&&Object.defineProperty(t,r,s.get?s:{enumerable:!0,get:()=>i[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function vy(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var x0={exports:{}},wc={},v0={exports:{}},Ke={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xa=Symbol.for("react.element"),_y=Symbol.for("react.portal"),yy=Symbol.for("react.fragment"),Sy=Symbol.for("react.strict_mode"),Ey=Symbol.for("react.profiler"),My=Symbol.for("react.provider"),wy=Symbol.for("react.context"),by=Symbol.for("react.forward_ref"),Ty=Symbol.for("react.suspense"),Ay=Symbol.for("react.memo"),Cy=Symbol.for("react.lazy"),Lp=Symbol.iterator;function Ry(t){return t===null||typeof t!="object"?null:(t=Lp&&t[Lp]||t["@@iterator"],typeof t=="function"?t:null)}var _0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y0=Object.assign,S0={};function so(t,e,n){this.props=t,this.context=e,this.refs=S0,this.updater=n||_0}so.prototype.isReactComponent={};so.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};so.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function E0(){}E0.prototype=so.prototype;function ih(t,e,n){this.props=t,this.context=e,this.refs=S0,this.updater=n||_0}var rh=ih.prototype=new E0;rh.constructor=ih;y0(rh,so.prototype);rh.isPureReactComponent=!0;var Dp=Array.isArray,M0=Object.prototype.hasOwnProperty,sh={current:null},w0={key:!0,ref:!0,__self:!0,__source:!0};function b0(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)M0.call(e,i)&&!w0.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:xa,type:t,key:s,ref:o,props:r,_owner:sh.current}}function Py(t,e){return{$$typeof:xa,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function oh(t){return typeof t=="object"&&t!==null&&t.$$typeof===xa}function Ny(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Ip=/\/+/g;function Jc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Ny(""+t.key):e.toString(36)}function bl(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case xa:case _y:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Jc(o,0):i,Dp(r)?(n="",t!=null&&(n=t.replace(Ip,"$&/")+"/"),bl(r,e,n,"",function(c){return c})):r!=null&&(oh(r)&&(r=Py(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Ip,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Dp(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+Jc(s,a);o+=bl(s,e,n,l,r)}else if(l=Ry(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+Jc(s,a++),o+=bl(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Fa(t,e,n){if(t==null)return t;var i=[],r=0;return bl(t,i,"","",function(s){return e.call(n,s,r++)}),i}function Ly(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var cn={current:null},Tl={transition:null},Dy={ReactCurrentDispatcher:cn,ReactCurrentBatchConfig:Tl,ReactCurrentOwner:sh};function T0(){throw Error("act(...) is not supported in production builds of React.")}Ke.Children={map:Fa,forEach:function(t,e,n){Fa(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Fa(t,function(){e++}),e},toArray:function(t){return Fa(t,function(e){return e})||[]},only:function(t){if(!oh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ke.Component=so;Ke.Fragment=yy;Ke.Profiler=Ey;Ke.PureComponent=ih;Ke.StrictMode=Sy;Ke.Suspense=Ty;Ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Dy;Ke.act=T0;Ke.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=y0({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=sh.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)M0.call(e,l)&&!w0.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:xa,type:t.type,key:r,ref:s,props:i,_owner:o}};Ke.createContext=function(t){return t={$$typeof:wy,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:My,_context:t},t.Consumer=t};Ke.createElement=b0;Ke.createFactory=function(t){var e=b0.bind(null,t);return e.type=t,e};Ke.createRef=function(){return{current:null}};Ke.forwardRef=function(t){return{$$typeof:by,render:t}};Ke.isValidElement=oh;Ke.lazy=function(t){return{$$typeof:Cy,_payload:{_status:-1,_result:t},_init:Ly}};Ke.memo=function(t,e){return{$$typeof:Ay,type:t,compare:e===void 0?null:e}};Ke.startTransition=function(t){var e=Tl.transition;Tl.transition={};try{t()}finally{Tl.transition=e}};Ke.unstable_act=T0;Ke.useCallback=function(t,e){return cn.current.useCallback(t,e)};Ke.useContext=function(t){return cn.current.useContext(t)};Ke.useDebugValue=function(){};Ke.useDeferredValue=function(t){return cn.current.useDeferredValue(t)};Ke.useEffect=function(t,e){return cn.current.useEffect(t,e)};Ke.useId=function(){return cn.current.useId()};Ke.useImperativeHandle=function(t,e,n){return cn.current.useImperativeHandle(t,e,n)};Ke.useInsertionEffect=function(t,e){return cn.current.useInsertionEffect(t,e)};Ke.useLayoutEffect=function(t,e){return cn.current.useLayoutEffect(t,e)};Ke.useMemo=function(t,e){return cn.current.useMemo(t,e)};Ke.useReducer=function(t,e,n){return cn.current.useReducer(t,e,n)};Ke.useRef=function(t){return cn.current.useRef(t)};Ke.useState=function(t){return cn.current.useState(t)};Ke.useSyncExternalStore=function(t,e,n){return cn.current.useSyncExternalStore(t,e,n)};Ke.useTransition=function(){return cn.current.useTransition()};Ke.version="18.3.1";v0.exports=Ke;var ee=v0.exports;const A0=vy(ee),C0=xy({__proto__:null,default:A0},[ee]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Iy=ee,Uy=Symbol.for("react.element"),Fy=Symbol.for("react.fragment"),Oy=Object.prototype.hasOwnProperty,ky=Iy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,By={key:!0,ref:!0,__self:!0,__source:!0};function R0(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)Oy.call(e,i)&&!By.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:Uy,type:t,key:s,ref:o,props:r,_owner:ky.current}}wc.Fragment=Fy;wc.jsx=R0;wc.jsxs=R0;x0.exports=wc;var R=x0.exports,uf={},P0={exports:{}},Cn={},N0={exports:{}},L0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(O,q){var k=O.length;O.push(q);e:for(;0<k;){var ne=k-1>>>1,ie=O[ne];if(0<r(ie,q))O[ne]=q,O[k]=ie,k=ne;else break e}}function n(O){return O.length===0?null:O[0]}function i(O){if(O.length===0)return null;var q=O[0],k=O.pop();if(k!==q){O[0]=k;e:for(var ne=0,ie=O.length,De=ie>>>1;ne<De;){var He=2*(ne+1)-1,Fe=O[He],Y=He+1,se=O[Y];if(0>r(Fe,k))Y<ie&&0>r(se,Fe)?(O[ne]=se,O[Y]=k,ne=Y):(O[ne]=Fe,O[He]=k,ne=He);else if(Y<ie&&0>r(se,k))O[ne]=se,O[Y]=k,ne=Y;else break e}}return q}function r(O,q){var k=O.sortIndex-q.sortIndex;return k!==0?k:O.id-q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],u=1,h=null,f=3,g=!1,m=!1,y=!1,p=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,x=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(O){for(var q=n(c);q!==null;){if(q.callback===null)i(c);else if(q.startTime<=O)i(c),q.sortIndex=q.expirationTime,e(l,q);else break;q=n(c)}}function E(O){if(y=!1,_(O),!m)if(n(l)!==null)m=!0,F(b);else{var q=n(c);q!==null&&U(E,q.startTime-O)}}function b(O,q){m=!1,y&&(y=!1,d(v),v=-1),g=!0;var k=f;try{for(_(q),h=n(l);h!==null&&(!(h.expirationTime>q)||O&&!P());){var ne=h.callback;if(typeof ne=="function"){h.callback=null,f=h.priorityLevel;var ie=ne(h.expirationTime<=q);q=t.unstable_now(),typeof ie=="function"?h.callback=ie:h===n(l)&&i(l),_(q)}else i(l);h=n(l)}if(h!==null)var De=!0;else{var He=n(c);He!==null&&U(E,He.startTime-q),De=!1}return De}finally{h=null,f=k,g=!1}}var T=!1,C=null,v=-1,w=5,V=-1;function P(){return!(t.unstable_now()-V<w)}function z(){if(C!==null){var O=t.unstable_now();V=O;var q=!0;try{q=C(!0,O)}finally{q?H():(T=!1,C=null)}}else T=!1}var H;if(typeof x=="function")H=function(){x(z)};else if(typeof MessageChannel<"u"){var K=new MessageChannel,B=K.port2;K.port1.onmessage=z,H=function(){B.postMessage(null)}}else H=function(){p(z,0)};function F(O){C=O,T||(T=!0,H())}function U(O,q){v=p(function(){O(t.unstable_now())},q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(O){O.callback=null},t.unstable_continueExecution=function(){m||g||(m=!0,F(b))},t.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<O?Math.floor(1e3/O):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(O){switch(f){case 1:case 2:case 3:var q=3;break;default:q=f}var k=f;f=q;try{return O()}finally{f=k}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(O,q){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var k=f;f=O;try{return q()}finally{f=k}},t.unstable_scheduleCallback=function(O,q,k){var ne=t.unstable_now();switch(typeof k=="object"&&k!==null?(k=k.delay,k=typeof k=="number"&&0<k?ne+k:ne):k=ne,O){case 1:var ie=-1;break;case 2:ie=250;break;case 5:ie=1073741823;break;case 4:ie=1e4;break;default:ie=5e3}return ie=k+ie,O={id:u++,callback:q,priorityLevel:O,startTime:k,expirationTime:ie,sortIndex:-1},k>ne?(O.sortIndex=k,e(c,O),n(l)===null&&O===n(c)&&(y?(d(v),v=-1):y=!0,U(E,k-ne))):(O.sortIndex=ie,e(l,O),m||g||(m=!0,F(b))),O},t.unstable_shouldYield=P,t.unstable_wrapCallback=function(O){var q=f;return function(){var k=f;f=q;try{return O.apply(this,arguments)}finally{f=k}}}})(L0);N0.exports=L0;var zy=N0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vy=ee,An=zy;function re(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var D0=new Set,Yo={};function os(t,e){Xs(t,e),Xs(t+"Capture",e)}function Xs(t,e){for(Yo[t]=e,t=0;t<e.length;t++)D0.add(e[t])}var Oi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ff=Object.prototype.hasOwnProperty,Hy=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Up={},Fp={};function Gy(t){return ff.call(Fp,t)?!0:ff.call(Up,t)?!1:Hy.test(t)?Fp[t]=!0:(Up[t]=!0,!1)}function Wy(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function jy(t,e,n,i){if(e===null||typeof e>"u"||Wy(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function un(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var $t={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){$t[t]=new un(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];$t[e]=new un(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){$t[t]=new un(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){$t[t]=new un(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){$t[t]=new un(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){$t[t]=new un(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){$t[t]=new un(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){$t[t]=new un(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){$t[t]=new un(t,5,!1,t.toLowerCase(),null,!1,!1)});var ah=/[\-:]([a-z])/g;function lh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(ah,lh);$t[e]=new un(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(ah,lh);$t[e]=new un(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(ah,lh);$t[e]=new un(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){$t[t]=new un(t,1,!1,t.toLowerCase(),null,!1,!1)});$t.xlinkHref=new un("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){$t[t]=new un(t,1,!1,t.toLowerCase(),null,!0,!0)});function ch(t,e,n,i){var r=$t.hasOwnProperty(e)?$t[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(jy(e,n,r,i)&&(n=null),i||r===null?Gy(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Wi=Vy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Oa=Symbol.for("react.element"),Ts=Symbol.for("react.portal"),As=Symbol.for("react.fragment"),uh=Symbol.for("react.strict_mode"),df=Symbol.for("react.profiler"),I0=Symbol.for("react.provider"),U0=Symbol.for("react.context"),fh=Symbol.for("react.forward_ref"),hf=Symbol.for("react.suspense"),pf=Symbol.for("react.suspense_list"),dh=Symbol.for("react.memo"),nr=Symbol.for("react.lazy"),F0=Symbol.for("react.offscreen"),Op=Symbol.iterator;function go(t){return t===null||typeof t!="object"?null:(t=Op&&t[Op]||t["@@iterator"],typeof t=="function"?t:null)}var Et=Object.assign,Qc;function Do(t){if(Qc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Qc=e&&e[1]||""}return`
`+Qc+t}var eu=!1;function tu(t,e){if(!t||eu)return"";eu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{eu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Do(t):""}function Xy(t){switch(t.tag){case 5:return Do(t.type);case 16:return Do("Lazy");case 13:return Do("Suspense");case 19:return Do("SuspenseList");case 0:case 2:case 15:return t=tu(t.type,!1),t;case 11:return t=tu(t.type.render,!1),t;case 1:return t=tu(t.type,!0),t;default:return""}}function mf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case As:return"Fragment";case Ts:return"Portal";case df:return"Profiler";case uh:return"StrictMode";case hf:return"Suspense";case pf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case U0:return(t.displayName||"Context")+".Consumer";case I0:return(t._context.displayName||"Context")+".Provider";case fh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case dh:return e=t.displayName||null,e!==null?e:mf(t.type)||"Memo";case nr:e=t._payload,t=t._init;try{return mf(t(e))}catch{}}return null}function qy(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return mf(e);case 8:return e===uh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function yr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function O0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function $y(t){var e=O0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ka(t){t._valueTracker||(t._valueTracker=$y(t))}function k0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=O0(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Xl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function gf(t,e){var n=e.checked;return Et({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function kp(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=yr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function B0(t,e){e=e.checked,e!=null&&ch(t,"checked",e,!1)}function xf(t,e){B0(t,e);var n=yr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?vf(t,e.type,n):e.hasOwnProperty("defaultValue")&&vf(t,e.type,yr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Bp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function vf(t,e,n){(e!=="number"||Xl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Io=Array.isArray;function ks(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+yr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function _f(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(re(91));return Et({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function zp(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(re(92));if(Io(n)){if(1<n.length)throw Error(re(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:yr(n)}}function z0(t,e){var n=yr(e.value),i=yr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Vp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function V0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function yf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?V0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ba,H0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ba=Ba||document.createElement("div"),Ba.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ba.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ko(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var zo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Yy=["Webkit","ms","Moz","O"];Object.keys(zo).forEach(function(t){Yy.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),zo[e]=zo[t]})});function G0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||zo.hasOwnProperty(t)&&zo[t]?(""+e).trim():e+"px"}function W0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=G0(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var Ky=Et({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Sf(t,e){if(e){if(Ky[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(re(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(re(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(re(61))}if(e.style!=null&&typeof e.style!="object")throw Error(re(62))}}function Ef(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Mf=null;function hh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var wf=null,Bs=null,zs=null;function Hp(t){if(t=ya(t)){if(typeof wf!="function")throw Error(re(280));var e=t.stateNode;e&&(e=Rc(e),wf(t.stateNode,t.type,e))}}function j0(t){Bs?zs?zs.push(t):zs=[t]:Bs=t}function X0(){if(Bs){var t=Bs,e=zs;if(zs=Bs=null,Hp(t),e)for(t=0;t<e.length;t++)Hp(e[t])}}function q0(t,e){return t(e)}function $0(){}var nu=!1;function Y0(t,e,n){if(nu)return t(e,n);nu=!0;try{return q0(t,e,n)}finally{nu=!1,(Bs!==null||zs!==null)&&($0(),X0())}}function Zo(t,e){var n=t.stateNode;if(n===null)return null;var i=Rc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(re(231,e,typeof n));return n}var bf=!1;if(Oi)try{var xo={};Object.defineProperty(xo,"passive",{get:function(){bf=!0}}),window.addEventListener("test",xo,xo),window.removeEventListener("test",xo,xo)}catch{bf=!1}function Zy(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(u){this.onError(u)}}var Vo=!1,ql=null,$l=!1,Tf=null,Jy={onError:function(t){Vo=!0,ql=t}};function Qy(t,e,n,i,r,s,o,a,l){Vo=!1,ql=null,Zy.apply(Jy,arguments)}function eS(t,e,n,i,r,s,o,a,l){if(Qy.apply(this,arguments),Vo){if(Vo){var c=ql;Vo=!1,ql=null}else throw Error(re(198));$l||($l=!0,Tf=c)}}function as(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function K0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Gp(t){if(as(t)!==t)throw Error(re(188))}function tS(t){var e=t.alternate;if(!e){if(e=as(t),e===null)throw Error(re(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Gp(r),t;if(s===i)return Gp(r),e;s=s.sibling}throw Error(re(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(re(189))}}if(n.alternate!==i)throw Error(re(190))}if(n.tag!==3)throw Error(re(188));return n.stateNode.current===n?t:e}function Z0(t){return t=tS(t),t!==null?J0(t):null}function J0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=J0(t);if(e!==null)return e;t=t.sibling}return null}var Q0=An.unstable_scheduleCallback,Wp=An.unstable_cancelCallback,nS=An.unstable_shouldYield,iS=An.unstable_requestPaint,At=An.unstable_now,rS=An.unstable_getCurrentPriorityLevel,ph=An.unstable_ImmediatePriority,ex=An.unstable_UserBlockingPriority,Yl=An.unstable_NormalPriority,sS=An.unstable_LowPriority,tx=An.unstable_IdlePriority,bc=null,di=null;function oS(t){if(di&&typeof di.onCommitFiberRoot=="function")try{di.onCommitFiberRoot(bc,t,void 0,(t.current.flags&128)===128)}catch{}}var Zn=Math.clz32?Math.clz32:cS,aS=Math.log,lS=Math.LN2;function cS(t){return t>>>=0,t===0?32:31-(aS(t)/lS|0)|0}var za=64,Va=4194304;function Uo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Kl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=Uo(a):(s&=o,s!==0&&(i=Uo(s)))}else o=n&~r,o!==0?i=Uo(o):s!==0&&(i=Uo(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Zn(e),r=1<<n,i|=t[n],e&=~r;return i}function uS(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function fS(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Zn(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=uS(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Af(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function nx(){var t=za;return za<<=1,!(za&4194240)&&(za=64),t}function iu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function va(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Zn(e),t[e]=n}function dS(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Zn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function mh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Zn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var at=0;function ix(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var rx,gh,sx,ox,ax,Cf=!1,Ha=[],fr=null,dr=null,hr=null,Jo=new Map,Qo=new Map,rr=[],hS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function jp(t,e){switch(t){case"focusin":case"focusout":fr=null;break;case"dragenter":case"dragleave":dr=null;break;case"mouseover":case"mouseout":hr=null;break;case"pointerover":case"pointerout":Jo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Qo.delete(e.pointerId)}}function vo(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=ya(e),e!==null&&gh(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function pS(t,e,n,i,r){switch(e){case"focusin":return fr=vo(fr,t,e,n,i,r),!0;case"dragenter":return dr=vo(dr,t,e,n,i,r),!0;case"mouseover":return hr=vo(hr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Jo.set(s,vo(Jo.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Qo.set(s,vo(Qo.get(s)||null,t,e,n,i,r)),!0}return!1}function lx(t){var e=Gr(t.target);if(e!==null){var n=as(e);if(n!==null){if(e=n.tag,e===13){if(e=K0(n),e!==null){t.blockedOn=e,ax(t.priority,function(){sx(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Al(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Rf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Mf=i,n.target.dispatchEvent(i),Mf=null}else return e=ya(n),e!==null&&gh(e),t.blockedOn=n,!1;e.shift()}return!0}function Xp(t,e,n){Al(t)&&n.delete(e)}function mS(){Cf=!1,fr!==null&&Al(fr)&&(fr=null),dr!==null&&Al(dr)&&(dr=null),hr!==null&&Al(hr)&&(hr=null),Jo.forEach(Xp),Qo.forEach(Xp)}function _o(t,e){t.blockedOn===e&&(t.blockedOn=null,Cf||(Cf=!0,An.unstable_scheduleCallback(An.unstable_NormalPriority,mS)))}function ea(t){function e(r){return _o(r,t)}if(0<Ha.length){_o(Ha[0],t);for(var n=1;n<Ha.length;n++){var i=Ha[n];i.blockedOn===t&&(i.blockedOn=null)}}for(fr!==null&&_o(fr,t),dr!==null&&_o(dr,t),hr!==null&&_o(hr,t),Jo.forEach(e),Qo.forEach(e),n=0;n<rr.length;n++)i=rr[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<rr.length&&(n=rr[0],n.blockedOn===null);)lx(n),n.blockedOn===null&&rr.shift()}var Vs=Wi.ReactCurrentBatchConfig,Zl=!0;function gS(t,e,n,i){var r=at,s=Vs.transition;Vs.transition=null;try{at=1,xh(t,e,n,i)}finally{at=r,Vs.transition=s}}function xS(t,e,n,i){var r=at,s=Vs.transition;Vs.transition=null;try{at=4,xh(t,e,n,i)}finally{at=r,Vs.transition=s}}function xh(t,e,n,i){if(Zl){var r=Rf(t,e,n,i);if(r===null)hu(t,e,i,Jl,n),jp(t,i);else if(pS(r,t,e,n,i))i.stopPropagation();else if(jp(t,i),e&4&&-1<hS.indexOf(t)){for(;r!==null;){var s=ya(r);if(s!==null&&rx(s),s=Rf(t,e,n,i),s===null&&hu(t,e,i,Jl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else hu(t,e,i,null,n)}}var Jl=null;function Rf(t,e,n,i){if(Jl=null,t=hh(i),t=Gr(t),t!==null)if(e=as(t),e===null)t=null;else if(n=e.tag,n===13){if(t=K0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Jl=t,null}function cx(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(rS()){case ph:return 1;case ex:return 4;case Yl:case sS:return 16;case tx:return 536870912;default:return 16}default:return 16}}var ar=null,vh=null,Cl=null;function ux(){if(Cl)return Cl;var t,e=vh,n=e.length,i,r="value"in ar?ar.value:ar.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return Cl=r.slice(t,1<i?1-i:void 0)}function Rl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ga(){return!0}function qp(){return!1}function Rn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ga:qp,this.isPropagationStopped=qp,this}return Et(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ga)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ga)},persist:function(){},isPersistent:Ga}),e}var oo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},_h=Rn(oo),_a=Et({},oo,{view:0,detail:0}),vS=Rn(_a),ru,su,yo,Tc=Et({},_a,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:yh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==yo&&(yo&&t.type==="mousemove"?(ru=t.screenX-yo.screenX,su=t.screenY-yo.screenY):su=ru=0,yo=t),ru)},movementY:function(t){return"movementY"in t?t.movementY:su}}),$p=Rn(Tc),_S=Et({},Tc,{dataTransfer:0}),yS=Rn(_S),SS=Et({},_a,{relatedTarget:0}),ou=Rn(SS),ES=Et({},oo,{animationName:0,elapsedTime:0,pseudoElement:0}),MS=Rn(ES),wS=Et({},oo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),bS=Rn(wS),TS=Et({},oo,{data:0}),Yp=Rn(TS),AS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},CS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},RS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function PS(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=RS[t])?!!e[t]:!1}function yh(){return PS}var NS=Et({},_a,{key:function(t){if(t.key){var e=AS[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Rl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?CS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:yh,charCode:function(t){return t.type==="keypress"?Rl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Rl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),LS=Rn(NS),DS=Et({},Tc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Kp=Rn(DS),IS=Et({},_a,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:yh}),US=Rn(IS),FS=Et({},oo,{propertyName:0,elapsedTime:0,pseudoElement:0}),OS=Rn(FS),kS=Et({},Tc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),BS=Rn(kS),zS=[9,13,27,32],Sh=Oi&&"CompositionEvent"in window,Ho=null;Oi&&"documentMode"in document&&(Ho=document.documentMode);var VS=Oi&&"TextEvent"in window&&!Ho,fx=Oi&&(!Sh||Ho&&8<Ho&&11>=Ho),Zp=" ",Jp=!1;function dx(t,e){switch(t){case"keyup":return zS.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function hx(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Cs=!1;function HS(t,e){switch(t){case"compositionend":return hx(e);case"keypress":return e.which!==32?null:(Jp=!0,Zp);case"textInput":return t=e.data,t===Zp&&Jp?null:t;default:return null}}function GS(t,e){if(Cs)return t==="compositionend"||!Sh&&dx(t,e)?(t=ux(),Cl=vh=ar=null,Cs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return fx&&e.locale!=="ko"?null:e.data;default:return null}}var WS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Qp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!WS[t.type]:e==="textarea"}function px(t,e,n,i){j0(i),e=Ql(e,"onChange"),0<e.length&&(n=new _h("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Go=null,ta=null;function jS(t){bx(t,0)}function Ac(t){var e=Ns(t);if(k0(e))return t}function XS(t,e){if(t==="change")return e}var mx=!1;if(Oi){var au;if(Oi){var lu="oninput"in document;if(!lu){var em=document.createElement("div");em.setAttribute("oninput","return;"),lu=typeof em.oninput=="function"}au=lu}else au=!1;mx=au&&(!document.documentMode||9<document.documentMode)}function tm(){Go&&(Go.detachEvent("onpropertychange",gx),ta=Go=null)}function gx(t){if(t.propertyName==="value"&&Ac(ta)){var e=[];px(e,ta,t,hh(t)),Y0(jS,e)}}function qS(t,e,n){t==="focusin"?(tm(),Go=e,ta=n,Go.attachEvent("onpropertychange",gx)):t==="focusout"&&tm()}function $S(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ac(ta)}function YS(t,e){if(t==="click")return Ac(e)}function KS(t,e){if(t==="input"||t==="change")return Ac(e)}function ZS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ei=typeof Object.is=="function"?Object.is:ZS;function na(t,e){if(ei(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!ff.call(e,r)||!ei(t[r],e[r]))return!1}return!0}function nm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function im(t,e){var n=nm(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=nm(n)}}function xx(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?xx(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function vx(){for(var t=window,e=Xl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Xl(t.document)}return e}function Eh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function JS(t){var e=vx(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&xx(n.ownerDocument.documentElement,n)){if(i!==null&&Eh(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=im(n,s);var o=im(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var QS=Oi&&"documentMode"in document&&11>=document.documentMode,Rs=null,Pf=null,Wo=null,Nf=!1;function rm(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Nf||Rs==null||Rs!==Xl(i)||(i=Rs,"selectionStart"in i&&Eh(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Wo&&na(Wo,i)||(Wo=i,i=Ql(Pf,"onSelect"),0<i.length&&(e=new _h("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Rs)))}function Wa(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ps={animationend:Wa("Animation","AnimationEnd"),animationiteration:Wa("Animation","AnimationIteration"),animationstart:Wa("Animation","AnimationStart"),transitionend:Wa("Transition","TransitionEnd")},cu={},_x={};Oi&&(_x=document.createElement("div").style,"AnimationEvent"in window||(delete Ps.animationend.animation,delete Ps.animationiteration.animation,delete Ps.animationstart.animation),"TransitionEvent"in window||delete Ps.transitionend.transition);function Cc(t){if(cu[t])return cu[t];if(!Ps[t])return t;var e=Ps[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in _x)return cu[t]=e[n];return t}var yx=Cc("animationend"),Sx=Cc("animationiteration"),Ex=Cc("animationstart"),Mx=Cc("transitionend"),wx=new Map,sm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Mr(t,e){wx.set(t,e),os(e,[t])}for(var uu=0;uu<sm.length;uu++){var fu=sm[uu],eE=fu.toLowerCase(),tE=fu[0].toUpperCase()+fu.slice(1);Mr(eE,"on"+tE)}Mr(yx,"onAnimationEnd");Mr(Sx,"onAnimationIteration");Mr(Ex,"onAnimationStart");Mr("dblclick","onDoubleClick");Mr("focusin","onFocus");Mr("focusout","onBlur");Mr(Mx,"onTransitionEnd");Xs("onMouseEnter",["mouseout","mouseover"]);Xs("onMouseLeave",["mouseout","mouseover"]);Xs("onPointerEnter",["pointerout","pointerover"]);Xs("onPointerLeave",["pointerout","pointerover"]);os("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));os("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));os("onBeforeInput",["compositionend","keypress","textInput","paste"]);os("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));os("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));os("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Fo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),nE=new Set("cancel close invalid load scroll toggle".split(" ").concat(Fo));function om(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,eS(i,e,void 0,t),t.currentTarget=null}function bx(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;om(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;om(r,a,c),s=l}}}if($l)throw t=Tf,$l=!1,Tf=null,t}function gt(t,e){var n=e[Ff];n===void 0&&(n=e[Ff]=new Set);var i=t+"__bubble";n.has(i)||(Tx(e,t,2,!1),n.add(i))}function du(t,e,n){var i=0;e&&(i|=4),Tx(n,t,i,e)}var ja="_reactListening"+Math.random().toString(36).slice(2);function ia(t){if(!t[ja]){t[ja]=!0,D0.forEach(function(n){n!=="selectionchange"&&(nE.has(n)||du(n,!1,t),du(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ja]||(e[ja]=!0,du("selectionchange",!1,e))}}function Tx(t,e,n,i){switch(cx(e)){case 1:var r=gS;break;case 4:r=xS;break;default:r=xh}n=r.bind(null,e,n,t),r=void 0,!bf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function hu(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Gr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}Y0(function(){var c=s,u=hh(n),h=[];e:{var f=wx.get(t);if(f!==void 0){var g=_h,m=t;switch(t){case"keypress":if(Rl(n)===0)break e;case"keydown":case"keyup":g=LS;break;case"focusin":m="focus",g=ou;break;case"focusout":m="blur",g=ou;break;case"beforeblur":case"afterblur":g=ou;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=$p;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=yS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=US;break;case yx:case Sx:case Ex:g=MS;break;case Mx:g=OS;break;case"scroll":g=vS;break;case"wheel":g=BS;break;case"copy":case"cut":case"paste":g=bS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Kp}var y=(e&4)!==0,p=!y&&t==="scroll",d=y?f!==null?f+"Capture":null:f;y=[];for(var x=c,_;x!==null;){_=x;var E=_.stateNode;if(_.tag===5&&E!==null&&(_=E,d!==null&&(E=Zo(x,d),E!=null&&y.push(ra(x,E,_)))),p)break;x=x.return}0<y.length&&(f=new g(f,m,null,n,u),h.push({event:f,listeners:y}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",f&&n!==Mf&&(m=n.relatedTarget||n.fromElement)&&(Gr(m)||m[ki]))break e;if((g||f)&&(f=u.window===u?u:(f=u.ownerDocument)?f.defaultView||f.parentWindow:window,g?(m=n.relatedTarget||n.toElement,g=c,m=m?Gr(m):null,m!==null&&(p=as(m),m!==p||m.tag!==5&&m.tag!==6)&&(m=null)):(g=null,m=c),g!==m)){if(y=$p,E="onMouseLeave",d="onMouseEnter",x="mouse",(t==="pointerout"||t==="pointerover")&&(y=Kp,E="onPointerLeave",d="onPointerEnter",x="pointer"),p=g==null?f:Ns(g),_=m==null?f:Ns(m),f=new y(E,x+"leave",g,n,u),f.target=p,f.relatedTarget=_,E=null,Gr(u)===c&&(y=new y(d,x+"enter",m,n,u),y.target=_,y.relatedTarget=p,E=y),p=E,g&&m)t:{for(y=g,d=m,x=0,_=y;_;_=fs(_))x++;for(_=0,E=d;E;E=fs(E))_++;for(;0<x-_;)y=fs(y),x--;for(;0<_-x;)d=fs(d),_--;for(;x--;){if(y===d||d!==null&&y===d.alternate)break t;y=fs(y),d=fs(d)}y=null}else y=null;g!==null&&am(h,f,g,y,!1),m!==null&&p!==null&&am(h,p,m,y,!0)}}e:{if(f=c?Ns(c):window,g=f.nodeName&&f.nodeName.toLowerCase(),g==="select"||g==="input"&&f.type==="file")var b=XS;else if(Qp(f))if(mx)b=KS;else{b=$S;var T=qS}else(g=f.nodeName)&&g.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(b=YS);if(b&&(b=b(t,c))){px(h,b,n,u);break e}T&&T(t,f,c),t==="focusout"&&(T=f._wrapperState)&&T.controlled&&f.type==="number"&&vf(f,"number",f.value)}switch(T=c?Ns(c):window,t){case"focusin":(Qp(T)||T.contentEditable==="true")&&(Rs=T,Pf=c,Wo=null);break;case"focusout":Wo=Pf=Rs=null;break;case"mousedown":Nf=!0;break;case"contextmenu":case"mouseup":case"dragend":Nf=!1,rm(h,n,u);break;case"selectionchange":if(QS)break;case"keydown":case"keyup":rm(h,n,u)}var C;if(Sh)e:{switch(t){case"compositionstart":var v="onCompositionStart";break e;case"compositionend":v="onCompositionEnd";break e;case"compositionupdate":v="onCompositionUpdate";break e}v=void 0}else Cs?dx(t,n)&&(v="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(v="onCompositionStart");v&&(fx&&n.locale!=="ko"&&(Cs||v!=="onCompositionStart"?v==="onCompositionEnd"&&Cs&&(C=ux()):(ar=u,vh="value"in ar?ar.value:ar.textContent,Cs=!0)),T=Ql(c,v),0<T.length&&(v=new Yp(v,t,null,n,u),h.push({event:v,listeners:T}),C?v.data=C:(C=hx(n),C!==null&&(v.data=C)))),(C=VS?HS(t,n):GS(t,n))&&(c=Ql(c,"onBeforeInput"),0<c.length&&(u=new Yp("onBeforeInput","beforeinput",null,n,u),h.push({event:u,listeners:c}),u.data=C))}bx(h,e)})}function ra(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ql(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Zo(t,n),s!=null&&i.unshift(ra(t,s,r)),s=Zo(t,e),s!=null&&i.push(ra(t,s,r))),t=t.return}return i}function fs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function am(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=Zo(n,s),l!=null&&o.unshift(ra(n,l,a))):r||(l=Zo(n,s),l!=null&&o.push(ra(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var iE=/\r\n?/g,rE=/\u0000|\uFFFD/g;function lm(t){return(typeof t=="string"?t:""+t).replace(iE,`
`).replace(rE,"")}function Xa(t,e,n){if(e=lm(e),lm(t)!==e&&n)throw Error(re(425))}function ec(){}var Lf=null,Df=null;function If(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Uf=typeof setTimeout=="function"?setTimeout:void 0,sE=typeof clearTimeout=="function"?clearTimeout:void 0,cm=typeof Promise=="function"?Promise:void 0,oE=typeof queueMicrotask=="function"?queueMicrotask:typeof cm<"u"?function(t){return cm.resolve(null).then(t).catch(aE)}:Uf;function aE(t){setTimeout(function(){throw t})}function pu(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),ea(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);ea(e)}function pr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function um(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ao=Math.random().toString(36).slice(2),li="__reactFiber$"+ao,sa="__reactProps$"+ao,ki="__reactContainer$"+ao,Ff="__reactEvents$"+ao,lE="__reactListeners$"+ao,cE="__reactHandles$"+ao;function Gr(t){var e=t[li];if(e)return e;for(var n=t.parentNode;n;){if(e=n[ki]||n[li]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=um(t);t!==null;){if(n=t[li])return n;t=um(t)}return e}t=n,n=t.parentNode}return null}function ya(t){return t=t[li]||t[ki],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ns(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(re(33))}function Rc(t){return t[sa]||null}var Of=[],Ls=-1;function wr(t){return{current:t}}function xt(t){0>Ls||(t.current=Of[Ls],Of[Ls]=null,Ls--)}function mt(t,e){Ls++,Of[Ls]=t.current,t.current=e}var Sr={},rn=wr(Sr),pn=wr(!1),Qr=Sr;function qs(t,e){var n=t.type.contextTypes;if(!n)return Sr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function mn(t){return t=t.childContextTypes,t!=null}function tc(){xt(pn),xt(rn)}function fm(t,e,n){if(rn.current!==Sr)throw Error(re(168));mt(rn,e),mt(pn,n)}function Ax(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(re(108,qy(t)||"Unknown",r));return Et({},n,i)}function nc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Sr,Qr=rn.current,mt(rn,t),mt(pn,pn.current),!0}function dm(t,e,n){var i=t.stateNode;if(!i)throw Error(re(169));n?(t=Ax(t,e,Qr),i.__reactInternalMemoizedMergedChildContext=t,xt(pn),xt(rn),mt(rn,t)):xt(pn),mt(pn,n)}var Ri=null,Pc=!1,mu=!1;function Cx(t){Ri===null?Ri=[t]:Ri.push(t)}function uE(t){Pc=!0,Cx(t)}function br(){if(!mu&&Ri!==null){mu=!0;var t=0,e=at;try{var n=Ri;for(at=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Ri=null,Pc=!1}catch(r){throw Ri!==null&&(Ri=Ri.slice(t+1)),Q0(ph,br),r}finally{at=e,mu=!1}}return null}var Ds=[],Is=0,ic=null,rc=0,Dn=[],In=0,es=null,Pi=1,Ni="";function kr(t,e){Ds[Is++]=rc,Ds[Is++]=ic,ic=t,rc=e}function Rx(t,e,n){Dn[In++]=Pi,Dn[In++]=Ni,Dn[In++]=es,es=t;var i=Pi;t=Ni;var r=32-Zn(i)-1;i&=~(1<<r),n+=1;var s=32-Zn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Pi=1<<32-Zn(e)+r|n<<r|i,Ni=s+t}else Pi=1<<s|n<<r|i,Ni=t}function Mh(t){t.return!==null&&(kr(t,1),Rx(t,1,0))}function wh(t){for(;t===ic;)ic=Ds[--Is],Ds[Is]=null,rc=Ds[--Is],Ds[Is]=null;for(;t===es;)es=Dn[--In],Dn[In]=null,Ni=Dn[--In],Dn[In]=null,Pi=Dn[--In],Dn[In]=null}var bn=null,wn=null,vt=!1,qn=null;function Px(t,e){var n=Fn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function hm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,bn=t,wn=pr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,bn=t,wn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=es!==null?{id:Pi,overflow:Ni}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Fn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,bn=t,wn=null,!0):!1;default:return!1}}function kf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Bf(t){if(vt){var e=wn;if(e){var n=e;if(!hm(t,e)){if(kf(t))throw Error(re(418));e=pr(n.nextSibling);var i=bn;e&&hm(t,e)?Px(i,n):(t.flags=t.flags&-4097|2,vt=!1,bn=t)}}else{if(kf(t))throw Error(re(418));t.flags=t.flags&-4097|2,vt=!1,bn=t}}}function pm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;bn=t}function qa(t){if(t!==bn)return!1;if(!vt)return pm(t),vt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!If(t.type,t.memoizedProps)),e&&(e=wn)){if(kf(t))throw Nx(),Error(re(418));for(;e;)Px(t,e),e=pr(e.nextSibling)}if(pm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(re(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){wn=pr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}wn=null}}else wn=bn?pr(t.stateNode.nextSibling):null;return!0}function Nx(){for(var t=wn;t;)t=pr(t.nextSibling)}function $s(){wn=bn=null,vt=!1}function bh(t){qn===null?qn=[t]:qn.push(t)}var fE=Wi.ReactCurrentBatchConfig;function So(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(re(309));var i=n.stateNode}if(!i)throw Error(re(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(re(284));if(!n._owner)throw Error(re(290,t))}return t}function $a(t,e){throw t=Object.prototype.toString.call(e),Error(re(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function mm(t){var e=t._init;return e(t._payload)}function Lx(t){function e(d,x){if(t){var _=d.deletions;_===null?(d.deletions=[x],d.flags|=16):_.push(x)}}function n(d,x){if(!t)return null;for(;x!==null;)e(d,x),x=x.sibling;return null}function i(d,x){for(d=new Map;x!==null;)x.key!==null?d.set(x.key,x):d.set(x.index,x),x=x.sibling;return d}function r(d,x){return d=vr(d,x),d.index=0,d.sibling=null,d}function s(d,x,_){return d.index=_,t?(_=d.alternate,_!==null?(_=_.index,_<x?(d.flags|=2,x):_):(d.flags|=2,x)):(d.flags|=1048576,x)}function o(d){return t&&d.alternate===null&&(d.flags|=2),d}function a(d,x,_,E){return x===null||x.tag!==6?(x=Eu(_,d.mode,E),x.return=d,x):(x=r(x,_),x.return=d,x)}function l(d,x,_,E){var b=_.type;return b===As?u(d,x,_.props.children,E,_.key):x!==null&&(x.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===nr&&mm(b)===x.type)?(E=r(x,_.props),E.ref=So(d,x,_),E.return=d,E):(E=Fl(_.type,_.key,_.props,null,d.mode,E),E.ref=So(d,x,_),E.return=d,E)}function c(d,x,_,E){return x===null||x.tag!==4||x.stateNode.containerInfo!==_.containerInfo||x.stateNode.implementation!==_.implementation?(x=Mu(_,d.mode,E),x.return=d,x):(x=r(x,_.children||[]),x.return=d,x)}function u(d,x,_,E,b){return x===null||x.tag!==7?(x=Kr(_,d.mode,E,b),x.return=d,x):(x=r(x,_),x.return=d,x)}function h(d,x,_){if(typeof x=="string"&&x!==""||typeof x=="number")return x=Eu(""+x,d.mode,_),x.return=d,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Oa:return _=Fl(x.type,x.key,x.props,null,d.mode,_),_.ref=So(d,null,x),_.return=d,_;case Ts:return x=Mu(x,d.mode,_),x.return=d,x;case nr:var E=x._init;return h(d,E(x._payload),_)}if(Io(x)||go(x))return x=Kr(x,d.mode,_,null),x.return=d,x;$a(d,x)}return null}function f(d,x,_,E){var b=x!==null?x.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return b!==null?null:a(d,x,""+_,E);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Oa:return _.key===b?l(d,x,_,E):null;case Ts:return _.key===b?c(d,x,_,E):null;case nr:return b=_._init,f(d,x,b(_._payload),E)}if(Io(_)||go(_))return b!==null?null:u(d,x,_,E,null);$a(d,_)}return null}function g(d,x,_,E,b){if(typeof E=="string"&&E!==""||typeof E=="number")return d=d.get(_)||null,a(x,d,""+E,b);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Oa:return d=d.get(E.key===null?_:E.key)||null,l(x,d,E,b);case Ts:return d=d.get(E.key===null?_:E.key)||null,c(x,d,E,b);case nr:var T=E._init;return g(d,x,_,T(E._payload),b)}if(Io(E)||go(E))return d=d.get(_)||null,u(x,d,E,b,null);$a(x,E)}return null}function m(d,x,_,E){for(var b=null,T=null,C=x,v=x=0,w=null;C!==null&&v<_.length;v++){C.index>v?(w=C,C=null):w=C.sibling;var V=f(d,C,_[v],E);if(V===null){C===null&&(C=w);break}t&&C&&V.alternate===null&&e(d,C),x=s(V,x,v),T===null?b=V:T.sibling=V,T=V,C=w}if(v===_.length)return n(d,C),vt&&kr(d,v),b;if(C===null){for(;v<_.length;v++)C=h(d,_[v],E),C!==null&&(x=s(C,x,v),T===null?b=C:T.sibling=C,T=C);return vt&&kr(d,v),b}for(C=i(d,C);v<_.length;v++)w=g(C,d,v,_[v],E),w!==null&&(t&&w.alternate!==null&&C.delete(w.key===null?v:w.key),x=s(w,x,v),T===null?b=w:T.sibling=w,T=w);return t&&C.forEach(function(P){return e(d,P)}),vt&&kr(d,v),b}function y(d,x,_,E){var b=go(_);if(typeof b!="function")throw Error(re(150));if(_=b.call(_),_==null)throw Error(re(151));for(var T=b=null,C=x,v=x=0,w=null,V=_.next();C!==null&&!V.done;v++,V=_.next()){C.index>v?(w=C,C=null):w=C.sibling;var P=f(d,C,V.value,E);if(P===null){C===null&&(C=w);break}t&&C&&P.alternate===null&&e(d,C),x=s(P,x,v),T===null?b=P:T.sibling=P,T=P,C=w}if(V.done)return n(d,C),vt&&kr(d,v),b;if(C===null){for(;!V.done;v++,V=_.next())V=h(d,V.value,E),V!==null&&(x=s(V,x,v),T===null?b=V:T.sibling=V,T=V);return vt&&kr(d,v),b}for(C=i(d,C);!V.done;v++,V=_.next())V=g(C,d,v,V.value,E),V!==null&&(t&&V.alternate!==null&&C.delete(V.key===null?v:V.key),x=s(V,x,v),T===null?b=V:T.sibling=V,T=V);return t&&C.forEach(function(z){return e(d,z)}),vt&&kr(d,v),b}function p(d,x,_,E){if(typeof _=="object"&&_!==null&&_.type===As&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case Oa:e:{for(var b=_.key,T=x;T!==null;){if(T.key===b){if(b=_.type,b===As){if(T.tag===7){n(d,T.sibling),x=r(T,_.props.children),x.return=d,d=x;break e}}else if(T.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===nr&&mm(b)===T.type){n(d,T.sibling),x=r(T,_.props),x.ref=So(d,T,_),x.return=d,d=x;break e}n(d,T);break}else e(d,T);T=T.sibling}_.type===As?(x=Kr(_.props.children,d.mode,E,_.key),x.return=d,d=x):(E=Fl(_.type,_.key,_.props,null,d.mode,E),E.ref=So(d,x,_),E.return=d,d=E)}return o(d);case Ts:e:{for(T=_.key;x!==null;){if(x.key===T)if(x.tag===4&&x.stateNode.containerInfo===_.containerInfo&&x.stateNode.implementation===_.implementation){n(d,x.sibling),x=r(x,_.children||[]),x.return=d,d=x;break e}else{n(d,x);break}else e(d,x);x=x.sibling}x=Mu(_,d.mode,E),x.return=d,d=x}return o(d);case nr:return T=_._init,p(d,x,T(_._payload),E)}if(Io(_))return m(d,x,_,E);if(go(_))return y(d,x,_,E);$a(d,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,x!==null&&x.tag===6?(n(d,x.sibling),x=r(x,_),x.return=d,d=x):(n(d,x),x=Eu(_,d.mode,E),x.return=d,d=x),o(d)):n(d,x)}return p}var Ys=Lx(!0),Dx=Lx(!1),sc=wr(null),oc=null,Us=null,Th=null;function Ah(){Th=Us=oc=null}function Ch(t){var e=sc.current;xt(sc),t._currentValue=e}function zf(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Hs(t,e){oc=t,Th=Us=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(hn=!0),t.firstContext=null)}function kn(t){var e=t._currentValue;if(Th!==t)if(t={context:t,memoizedValue:e,next:null},Us===null){if(oc===null)throw Error(re(308));Us=t,oc.dependencies={lanes:0,firstContext:t}}else Us=Us.next=t;return e}var Wr=null;function Rh(t){Wr===null?Wr=[t]:Wr.push(t)}function Ix(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Rh(e)):(n.next=r.next,r.next=n),e.interleaved=n,Bi(t,i)}function Bi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var ir=!1;function Ph(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ux(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Di(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function mr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,et&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Bi(t,n)}return r=i.interleaved,r===null?(e.next=e,Rh(i)):(e.next=r.next,r.next=e),i.interleaved=e,Bi(t,n)}function Pl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,mh(t,n)}}function gm(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function ac(t,e,n,i){var r=t.updateQueue;ir=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var u=t.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==o&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;o=0,u=c=l=null,a=s;do{var f=a.lane,g=a.eventTime;if((i&f)===f){u!==null&&(u=u.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var m=t,y=a;switch(f=e,g=n,y.tag){case 1:if(m=y.payload,typeof m=="function"){h=m.call(g,h,f);break e}h=m;break e;case 3:m.flags=m.flags&-65537|128;case 0:if(m=y.payload,f=typeof m=="function"?m.call(g,h,f):m,f==null)break e;h=Et({},h,f);break e;case 2:ir=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=r.effects,f===null?r.effects=[a]:f.push(a))}else g={eventTime:g,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=g,l=h):u=u.next=g,o|=f;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;f=a,a=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(u===null&&(l=h),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);ns|=o,t.lanes=o,t.memoizedState=h}}function xm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(re(191,r));r.call(i)}}}var Sa={},hi=wr(Sa),oa=wr(Sa),aa=wr(Sa);function jr(t){if(t===Sa)throw Error(re(174));return t}function Nh(t,e){switch(mt(aa,e),mt(oa,t),mt(hi,Sa),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:yf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=yf(e,t)}xt(hi),mt(hi,e)}function Ks(){xt(hi),xt(oa),xt(aa)}function Fx(t){jr(aa.current);var e=jr(hi.current),n=yf(e,t.type);e!==n&&(mt(oa,t),mt(hi,n))}function Lh(t){oa.current===t&&(xt(hi),xt(oa))}var yt=wr(0);function lc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var gu=[];function Dh(){for(var t=0;t<gu.length;t++)gu[t]._workInProgressVersionPrimary=null;gu.length=0}var Nl=Wi.ReactCurrentDispatcher,xu=Wi.ReactCurrentBatchConfig,ts=0,St=null,Ft=null,Ht=null,cc=!1,jo=!1,la=0,dE=0;function Kt(){throw Error(re(321))}function Ih(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ei(t[n],e[n]))return!1;return!0}function Uh(t,e,n,i,r,s){if(ts=s,St=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Nl.current=t===null||t.memoizedState===null?gE:xE,t=n(i,r),jo){s=0;do{if(jo=!1,la=0,25<=s)throw Error(re(301));s+=1,Ht=Ft=null,e.updateQueue=null,Nl.current=vE,t=n(i,r)}while(jo)}if(Nl.current=uc,e=Ft!==null&&Ft.next!==null,ts=0,Ht=Ft=St=null,cc=!1,e)throw Error(re(300));return t}function Fh(){var t=la!==0;return la=0,t}function oi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ht===null?St.memoizedState=Ht=t:Ht=Ht.next=t,Ht}function Bn(){if(Ft===null){var t=St.alternate;t=t!==null?t.memoizedState:null}else t=Ft.next;var e=Ht===null?St.memoizedState:Ht.next;if(e!==null)Ht=e,Ft=t;else{if(t===null)throw Error(re(310));Ft=t,t={memoizedState:Ft.memoizedState,baseState:Ft.baseState,baseQueue:Ft.baseQueue,queue:Ft.queue,next:null},Ht===null?St.memoizedState=Ht=t:Ht=Ht.next=t}return Ht}function ca(t,e){return typeof e=="function"?e(t):e}function vu(t){var e=Bn(),n=e.queue;if(n===null)throw Error(re(311));n.lastRenderedReducer=t;var i=Ft,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var u=c.lane;if((ts&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var h={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=h,o=i):l=l.next=h,St.lanes|=u,ns|=u}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,ei(i,e.memoizedState)||(hn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,St.lanes|=s,ns|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function _u(t){var e=Bn(),n=e.queue;if(n===null)throw Error(re(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);ei(s,e.memoizedState)||(hn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Ox(){}function kx(t,e){var n=St,i=Bn(),r=e(),s=!ei(i.memoizedState,r);if(s&&(i.memoizedState=r,hn=!0),i=i.queue,Oh(Vx.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Ht!==null&&Ht.memoizedState.tag&1){if(n.flags|=2048,ua(9,zx.bind(null,n,i,r,e),void 0,null),Gt===null)throw Error(re(349));ts&30||Bx(n,e,r)}return r}function Bx(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=St.updateQueue,e===null?(e={lastEffect:null,stores:null},St.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function zx(t,e,n,i){e.value=n,e.getSnapshot=i,Hx(e)&&Gx(t)}function Vx(t,e,n){return n(function(){Hx(e)&&Gx(t)})}function Hx(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ei(t,n)}catch{return!0}}function Gx(t){var e=Bi(t,1);e!==null&&Jn(e,t,1,-1)}function vm(t){var e=oi();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ca,lastRenderedState:t},e.queue=t,t=t.dispatch=mE.bind(null,St,t),[e.memoizedState,t]}function ua(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=St.updateQueue,e===null?(e={lastEffect:null,stores:null},St.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Wx(){return Bn().memoizedState}function Ll(t,e,n,i){var r=oi();St.flags|=t,r.memoizedState=ua(1|e,n,void 0,i===void 0?null:i)}function Nc(t,e,n,i){var r=Bn();i=i===void 0?null:i;var s=void 0;if(Ft!==null){var o=Ft.memoizedState;if(s=o.destroy,i!==null&&Ih(i,o.deps)){r.memoizedState=ua(e,n,s,i);return}}St.flags|=t,r.memoizedState=ua(1|e,n,s,i)}function _m(t,e){return Ll(8390656,8,t,e)}function Oh(t,e){return Nc(2048,8,t,e)}function jx(t,e){return Nc(4,2,t,e)}function Xx(t,e){return Nc(4,4,t,e)}function qx(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function $x(t,e,n){return n=n!=null?n.concat([t]):null,Nc(4,4,qx.bind(null,e,t),n)}function kh(){}function Yx(t,e){var n=Bn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Ih(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Kx(t,e){var n=Bn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Ih(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Zx(t,e,n){return ts&21?(ei(n,e)||(n=nx(),St.lanes|=n,ns|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,hn=!0),t.memoizedState=n)}function hE(t,e){var n=at;at=n!==0&&4>n?n:4,t(!0);var i=xu.transition;xu.transition={};try{t(!1),e()}finally{at=n,xu.transition=i}}function Jx(){return Bn().memoizedState}function pE(t,e,n){var i=xr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Qx(t))ev(e,n);else if(n=Ix(t,e,n,i),n!==null){var r=an();Jn(n,t,i,r),tv(n,e,i)}}function mE(t,e,n){var i=xr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Qx(t))ev(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,ei(a,o)){var l=e.interleaved;l===null?(r.next=r,Rh(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Ix(t,e,r,i),n!==null&&(r=an(),Jn(n,t,i,r),tv(n,e,i))}}function Qx(t){var e=t.alternate;return t===St||e!==null&&e===St}function ev(t,e){jo=cc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function tv(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,mh(t,n)}}var uc={readContext:kn,useCallback:Kt,useContext:Kt,useEffect:Kt,useImperativeHandle:Kt,useInsertionEffect:Kt,useLayoutEffect:Kt,useMemo:Kt,useReducer:Kt,useRef:Kt,useState:Kt,useDebugValue:Kt,useDeferredValue:Kt,useTransition:Kt,useMutableSource:Kt,useSyncExternalStore:Kt,useId:Kt,unstable_isNewReconciler:!1},gE={readContext:kn,useCallback:function(t,e){return oi().memoizedState=[t,e===void 0?null:e],t},useContext:kn,useEffect:_m,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ll(4194308,4,qx.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ll(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ll(4,2,t,e)},useMemo:function(t,e){var n=oi();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=oi();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=pE.bind(null,St,t),[i.memoizedState,t]},useRef:function(t){var e=oi();return t={current:t},e.memoizedState=t},useState:vm,useDebugValue:kh,useDeferredValue:function(t){return oi().memoizedState=t},useTransition:function(){var t=vm(!1),e=t[0];return t=hE.bind(null,t[1]),oi().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=St,r=oi();if(vt){if(n===void 0)throw Error(re(407));n=n()}else{if(n=e(),Gt===null)throw Error(re(349));ts&30||Bx(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,_m(Vx.bind(null,i,s,t),[t]),i.flags|=2048,ua(9,zx.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=oi(),e=Gt.identifierPrefix;if(vt){var n=Ni,i=Pi;n=(i&~(1<<32-Zn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=la++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=dE++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},xE={readContext:kn,useCallback:Yx,useContext:kn,useEffect:Oh,useImperativeHandle:$x,useInsertionEffect:jx,useLayoutEffect:Xx,useMemo:Kx,useReducer:vu,useRef:Wx,useState:function(){return vu(ca)},useDebugValue:kh,useDeferredValue:function(t){var e=Bn();return Zx(e,Ft.memoizedState,t)},useTransition:function(){var t=vu(ca)[0],e=Bn().memoizedState;return[t,e]},useMutableSource:Ox,useSyncExternalStore:kx,useId:Jx,unstable_isNewReconciler:!1},vE={readContext:kn,useCallback:Yx,useContext:kn,useEffect:Oh,useImperativeHandle:$x,useInsertionEffect:jx,useLayoutEffect:Xx,useMemo:Kx,useReducer:_u,useRef:Wx,useState:function(){return _u(ca)},useDebugValue:kh,useDeferredValue:function(t){var e=Bn();return Ft===null?e.memoizedState=t:Zx(e,Ft.memoizedState,t)},useTransition:function(){var t=_u(ca)[0],e=Bn().memoizedState;return[t,e]},useMutableSource:Ox,useSyncExternalStore:kx,useId:Jx,unstable_isNewReconciler:!1};function jn(t,e){if(t&&t.defaultProps){e=Et({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Vf(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:Et({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Lc={isMounted:function(t){return(t=t._reactInternals)?as(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=an(),r=xr(t),s=Di(i,r);s.payload=e,n!=null&&(s.callback=n),e=mr(t,s,r),e!==null&&(Jn(e,t,r,i),Pl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=an(),r=xr(t),s=Di(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=mr(t,s,r),e!==null&&(Jn(e,t,r,i),Pl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=an(),i=xr(t),r=Di(n,i);r.tag=2,e!=null&&(r.callback=e),e=mr(t,r,i),e!==null&&(Jn(e,t,i,n),Pl(e,t,i))}};function ym(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!na(n,i)||!na(r,s):!0}function nv(t,e,n){var i=!1,r=Sr,s=e.contextType;return typeof s=="object"&&s!==null?s=kn(s):(r=mn(e)?Qr:rn.current,i=e.contextTypes,s=(i=i!=null)?qs(t,r):Sr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Lc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Sm(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Lc.enqueueReplaceState(e,e.state,null)}function Hf(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Ph(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=kn(s):(s=mn(e)?Qr:rn.current,r.context=qs(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Vf(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Lc.enqueueReplaceState(r,r.state,null),ac(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Zs(t,e){try{var n="",i=e;do n+=Xy(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function yu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Gf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var _E=typeof WeakMap=="function"?WeakMap:Map;function iv(t,e,n){n=Di(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){dc||(dc=!0,Qf=i),Gf(t,e)},n}function rv(t,e,n){n=Di(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Gf(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Gf(t,e),typeof i!="function"&&(gr===null?gr=new Set([this]):gr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Em(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new _E;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=DE.bind(null,t,e,n),e.then(t,t))}function Mm(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function wm(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Di(-1,1),e.tag=2,mr(n,e,1))),n.lanes|=1),t)}var yE=Wi.ReactCurrentOwner,hn=!1;function on(t,e,n,i){e.child=t===null?Dx(e,null,n,i):Ys(e,t.child,n,i)}function bm(t,e,n,i,r){n=n.render;var s=e.ref;return Hs(e,r),i=Uh(t,e,n,i,s,r),n=Fh(),t!==null&&!hn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,zi(t,e,r)):(vt&&n&&Mh(e),e.flags|=1,on(t,e,i,r),e.child)}function Tm(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Xh(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,sv(t,e,s,i,r)):(t=Fl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:na,n(o,i)&&t.ref===e.ref)return zi(t,e,r)}return e.flags|=1,t=vr(s,i),t.ref=e.ref,t.return=e,e.child=t}function sv(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(na(s,i)&&t.ref===e.ref)if(hn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(hn=!0);else return e.lanes=t.lanes,zi(t,e,r)}return Wf(t,e,n,i,r)}function ov(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},mt(Os,Mn),Mn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,mt(Os,Mn),Mn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,mt(Os,Mn),Mn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,mt(Os,Mn),Mn|=i;return on(t,e,r,n),e.child}function av(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Wf(t,e,n,i,r){var s=mn(n)?Qr:rn.current;return s=qs(e,s),Hs(e,r),n=Uh(t,e,n,i,s,r),i=Fh(),t!==null&&!hn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,zi(t,e,r)):(vt&&i&&Mh(e),e.flags|=1,on(t,e,n,r),e.child)}function Am(t,e,n,i,r){if(mn(n)){var s=!0;nc(e)}else s=!1;if(Hs(e,r),e.stateNode===null)Dl(t,e),nv(e,n,i),Hf(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=kn(c):(c=mn(n)?Qr:rn.current,c=qs(e,c));var u=n.getDerivedStateFromProps,h=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&Sm(e,o,i,c),ir=!1;var f=e.memoizedState;o.state=f,ac(e,i,o,r),l=e.memoizedState,a!==i||f!==l||pn.current||ir?(typeof u=="function"&&(Vf(e,n,u,i),l=e.memoizedState),(a=ir||ym(e,n,a,i,f,l,c))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,Ux(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:jn(e.type,a),o.props=c,h=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=kn(l):(l=mn(n)?Qr:rn.current,l=qs(e,l));var g=n.getDerivedStateFromProps;(u=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||f!==l)&&Sm(e,o,i,l),ir=!1,f=e.memoizedState,o.state=f,ac(e,i,o,r);var m=e.memoizedState;a!==h||f!==m||pn.current||ir?(typeof g=="function"&&(Vf(e,n,g,i),m=e.memoizedState),(c=ir||ym(e,n,c,i,f,m,l)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,m,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,m,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=m),o.props=i,o.state=m,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),i=!1)}return jf(t,e,n,i,s,r)}function jf(t,e,n,i,r,s){av(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&dm(e,n,!1),zi(t,e,s);i=e.stateNode,yE.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=Ys(e,t.child,null,s),e.child=Ys(e,null,a,s)):on(t,e,a,s),e.memoizedState=i.state,r&&dm(e,n,!0),e.child}function lv(t){var e=t.stateNode;e.pendingContext?fm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&fm(t,e.context,!1),Nh(t,e.containerInfo)}function Cm(t,e,n,i,r){return $s(),bh(r),e.flags|=256,on(t,e,n,i),e.child}var Xf={dehydrated:null,treeContext:null,retryLane:0};function qf(t){return{baseLanes:t,cachePool:null,transitions:null}}function cv(t,e,n){var i=e.pendingProps,r=yt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),mt(yt,r&1),t===null)return Bf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Uc(o,i,0,null),t=Kr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=qf(n),e.memoizedState=Xf,t):Bh(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return SE(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=vr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=vr(a,s):(s=Kr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?qf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Xf,i}return s=t.child,t=s.sibling,i=vr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Bh(t,e){return e=Uc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ya(t,e,n,i){return i!==null&&bh(i),Ys(e,t.child,null,n),t=Bh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function SE(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=yu(Error(re(422))),Ya(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Uc({mode:"visible",children:i.children},r,0,null),s=Kr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Ys(e,t.child,null,o),e.child.memoizedState=qf(o),e.memoizedState=Xf,s);if(!(e.mode&1))return Ya(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(re(419)),i=yu(s,i,void 0),Ya(t,e,o,i)}if(a=(o&t.childLanes)!==0,hn||a){if(i=Gt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Bi(t,r),Jn(i,t,r,-1))}return jh(),i=yu(Error(re(421))),Ya(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=IE.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,wn=pr(r.nextSibling),bn=e,vt=!0,qn=null,t!==null&&(Dn[In++]=Pi,Dn[In++]=Ni,Dn[In++]=es,Pi=t.id,Ni=t.overflow,es=e),e=Bh(e,i.children),e.flags|=4096,e)}function Rm(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),zf(t.return,e,n)}function Su(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function uv(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(on(t,e,i.children,n),i=yt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Rm(t,n,e);else if(t.tag===19)Rm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(mt(yt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&lc(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Su(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&lc(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Su(e,!0,n,null,s);break;case"together":Su(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Dl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function zi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ns|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(re(153));if(e.child!==null){for(t=e.child,n=vr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=vr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function EE(t,e,n){switch(e.tag){case 3:lv(e),$s();break;case 5:Fx(e);break;case 1:mn(e.type)&&nc(e);break;case 4:Nh(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;mt(sc,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(mt(yt,yt.current&1),e.flags|=128,null):n&e.child.childLanes?cv(t,e,n):(mt(yt,yt.current&1),t=zi(t,e,n),t!==null?t.sibling:null);mt(yt,yt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return uv(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),mt(yt,yt.current),i)break;return null;case 22:case 23:return e.lanes=0,ov(t,e,n)}return zi(t,e,n)}var fv,$f,dv,hv;fv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};$f=function(){};dv=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,jr(hi.current);var s=null;switch(n){case"input":r=gf(t,r),i=gf(t,i),s=[];break;case"select":r=Et({},r,{value:void 0}),i=Et({},i,{value:void 0}),s=[];break;case"textarea":r=_f(t,r),i=_f(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=ec)}Sf(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Yo.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Yo.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&gt("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};hv=function(t,e,n,i){n!==i&&(e.flags|=4)};function Eo(t,e){if(!vt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Zt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function ME(t,e,n){var i=e.pendingProps;switch(wh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Zt(e),null;case 1:return mn(e.type)&&tc(),Zt(e),null;case 3:return i=e.stateNode,Ks(),xt(pn),xt(rn),Dh(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(qa(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,qn!==null&&(nd(qn),qn=null))),$f(t,e),Zt(e),null;case 5:Lh(e);var r=jr(aa.current);if(n=e.type,t!==null&&e.stateNode!=null)dv(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(re(166));return Zt(e),null}if(t=jr(hi.current),qa(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[li]=e,i[sa]=s,t=(e.mode&1)!==0,n){case"dialog":gt("cancel",i),gt("close",i);break;case"iframe":case"object":case"embed":gt("load",i);break;case"video":case"audio":for(r=0;r<Fo.length;r++)gt(Fo[r],i);break;case"source":gt("error",i);break;case"img":case"image":case"link":gt("error",i),gt("load",i);break;case"details":gt("toggle",i);break;case"input":kp(i,s),gt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},gt("invalid",i);break;case"textarea":zp(i,s),gt("invalid",i)}Sf(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Xa(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Xa(i.textContent,a,t),r=["children",""+a]):Yo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&gt("scroll",i)}switch(n){case"input":ka(i),Bp(i,s,!0);break;case"textarea":ka(i),Vp(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=ec)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=V0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[li]=e,t[sa]=i,fv(t,e,!1,!1),e.stateNode=t;e:{switch(o=Ef(n,i),n){case"dialog":gt("cancel",t),gt("close",t),r=i;break;case"iframe":case"object":case"embed":gt("load",t),r=i;break;case"video":case"audio":for(r=0;r<Fo.length;r++)gt(Fo[r],t);r=i;break;case"source":gt("error",t),r=i;break;case"img":case"image":case"link":gt("error",t),gt("load",t),r=i;break;case"details":gt("toggle",t),r=i;break;case"input":kp(t,i),r=gf(t,i),gt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=Et({},i,{value:void 0}),gt("invalid",t);break;case"textarea":zp(t,i),r=_f(t,i),gt("invalid",t);break;default:r=i}Sf(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?W0(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&H0(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ko(t,l):typeof l=="number"&&Ko(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Yo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&gt("scroll",t):l!=null&&ch(t,s,l,o))}switch(n){case"input":ka(t),Bp(t,i,!1);break;case"textarea":ka(t),Vp(t);break;case"option":i.value!=null&&t.setAttribute("value",""+yr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?ks(t,!!i.multiple,s,!1):i.defaultValue!=null&&ks(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=ec)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Zt(e),null;case 6:if(t&&e.stateNode!=null)hv(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(re(166));if(n=jr(aa.current),jr(hi.current),qa(e)){if(i=e.stateNode,n=e.memoizedProps,i[li]=e,(s=i.nodeValue!==n)&&(t=bn,t!==null))switch(t.tag){case 3:Xa(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Xa(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[li]=e,e.stateNode=i}return Zt(e),null;case 13:if(xt(yt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(vt&&wn!==null&&e.mode&1&&!(e.flags&128))Nx(),$s(),e.flags|=98560,s=!1;else if(s=qa(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(re(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(re(317));s[li]=e}else $s(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Zt(e),s=!1}else qn!==null&&(nd(qn),qn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||yt.current&1?Ot===0&&(Ot=3):jh())),e.updateQueue!==null&&(e.flags|=4),Zt(e),null);case 4:return Ks(),$f(t,e),t===null&&ia(e.stateNode.containerInfo),Zt(e),null;case 10:return Ch(e.type._context),Zt(e),null;case 17:return mn(e.type)&&tc(),Zt(e),null;case 19:if(xt(yt),s=e.memoizedState,s===null)return Zt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Eo(s,!1);else{if(Ot!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=lc(t),o!==null){for(e.flags|=128,Eo(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return mt(yt,yt.current&1|2),e.child}t=t.sibling}s.tail!==null&&At()>Js&&(e.flags|=128,i=!0,Eo(s,!1),e.lanes=4194304)}else{if(!i)if(t=lc(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Eo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!vt)return Zt(e),null}else 2*At()-s.renderingStartTime>Js&&n!==1073741824&&(e.flags|=128,i=!0,Eo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=At(),e.sibling=null,n=yt.current,mt(yt,i?n&1|2:n&1),e):(Zt(e),null);case 22:case 23:return Wh(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Mn&1073741824&&(Zt(e),e.subtreeFlags&6&&(e.flags|=8192)):Zt(e),null;case 24:return null;case 25:return null}throw Error(re(156,e.tag))}function wE(t,e){switch(wh(e),e.tag){case 1:return mn(e.type)&&tc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ks(),xt(pn),xt(rn),Dh(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Lh(e),null;case 13:if(xt(yt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(re(340));$s()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return xt(yt),null;case 4:return Ks(),null;case 10:return Ch(e.type._context),null;case 22:case 23:return Wh(),null;case 24:return null;default:return null}}var Ka=!1,en=!1,bE=typeof WeakSet=="function"?WeakSet:Set,ve=null;function Fs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){wt(t,e,i)}else n.current=null}function Yf(t,e,n){try{n()}catch(i){wt(t,e,i)}}var Pm=!1;function TE(t,e){if(Lf=Zl,t=vx(),Eh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,u=0,h=t,f=null;t:for(;;){for(var g;h!==n||r!==0&&h.nodeType!==3||(a=o+r),h!==s||i!==0&&h.nodeType!==3||(l=o+i),h.nodeType===3&&(o+=h.nodeValue.length),(g=h.firstChild)!==null;)f=h,h=g;for(;;){if(h===t)break t;if(f===n&&++c===r&&(a=o),f===s&&++u===i&&(l=o),(g=h.nextSibling)!==null)break;h=f,f=h.parentNode}h=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Df={focusedElem:t,selectionRange:n},Zl=!1,ve=e;ve!==null;)if(e=ve,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,ve=t;else for(;ve!==null;){e=ve;try{var m=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(m!==null){var y=m.memoizedProps,p=m.memoizedState,d=e.stateNode,x=d.getSnapshotBeforeUpdate(e.elementType===e.type?y:jn(e.type,y),p);d.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(re(163))}}catch(E){wt(e,e.return,E)}if(t=e.sibling,t!==null){t.return=e.return,ve=t;break}ve=e.return}return m=Pm,Pm=!1,m}function Xo(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Yf(e,n,s)}r=r.next}while(r!==i)}}function Dc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Kf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function pv(t){var e=t.alternate;e!==null&&(t.alternate=null,pv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[li],delete e[sa],delete e[Ff],delete e[lE],delete e[cE])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function mv(t){return t.tag===5||t.tag===3||t.tag===4}function Nm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||mv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Zf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=ec));else if(i!==4&&(t=t.child,t!==null))for(Zf(t,e,n),t=t.sibling;t!==null;)Zf(t,e,n),t=t.sibling}function Jf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Jf(t,e,n),t=t.sibling;t!==null;)Jf(t,e,n),t=t.sibling}var jt=null,Xn=!1;function qi(t,e,n){for(n=n.child;n!==null;)gv(t,e,n),n=n.sibling}function gv(t,e,n){if(di&&typeof di.onCommitFiberUnmount=="function")try{di.onCommitFiberUnmount(bc,n)}catch{}switch(n.tag){case 5:en||Fs(n,e);case 6:var i=jt,r=Xn;jt=null,qi(t,e,n),jt=i,Xn=r,jt!==null&&(Xn?(t=jt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):jt.removeChild(n.stateNode));break;case 18:jt!==null&&(Xn?(t=jt,n=n.stateNode,t.nodeType===8?pu(t.parentNode,n):t.nodeType===1&&pu(t,n),ea(t)):pu(jt,n.stateNode));break;case 4:i=jt,r=Xn,jt=n.stateNode.containerInfo,Xn=!0,qi(t,e,n),jt=i,Xn=r;break;case 0:case 11:case 14:case 15:if(!en&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Yf(n,e,o),r=r.next}while(r!==i)}qi(t,e,n);break;case 1:if(!en&&(Fs(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){wt(n,e,a)}qi(t,e,n);break;case 21:qi(t,e,n);break;case 22:n.mode&1?(en=(i=en)||n.memoizedState!==null,qi(t,e,n),en=i):qi(t,e,n);break;default:qi(t,e,n)}}function Lm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new bE),e.forEach(function(i){var r=UE.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Vn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:jt=a.stateNode,Xn=!1;break e;case 3:jt=a.stateNode.containerInfo,Xn=!0;break e;case 4:jt=a.stateNode.containerInfo,Xn=!0;break e}a=a.return}if(jt===null)throw Error(re(160));gv(s,o,r),jt=null,Xn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){wt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)xv(e,t),e=e.sibling}function xv(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Vn(e,t),ii(t),i&4){try{Xo(3,t,t.return),Dc(3,t)}catch(y){wt(t,t.return,y)}try{Xo(5,t,t.return)}catch(y){wt(t,t.return,y)}}break;case 1:Vn(e,t),ii(t),i&512&&n!==null&&Fs(n,n.return);break;case 5:if(Vn(e,t),ii(t),i&512&&n!==null&&Fs(n,n.return),t.flags&32){var r=t.stateNode;try{Ko(r,"")}catch(y){wt(t,t.return,y)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&B0(r,s),Ef(a,o);var c=Ef(a,s);for(o=0;o<l.length;o+=2){var u=l[o],h=l[o+1];u==="style"?W0(r,h):u==="dangerouslySetInnerHTML"?H0(r,h):u==="children"?Ko(r,h):ch(r,u,h,c)}switch(a){case"input":xf(r,s);break;case"textarea":z0(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?ks(r,!!s.multiple,g,!1):f!==!!s.multiple&&(s.defaultValue!=null?ks(r,!!s.multiple,s.defaultValue,!0):ks(r,!!s.multiple,s.multiple?[]:"",!1))}r[sa]=s}catch(y){wt(t,t.return,y)}}break;case 6:if(Vn(e,t),ii(t),i&4){if(t.stateNode===null)throw Error(re(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(y){wt(t,t.return,y)}}break;case 3:if(Vn(e,t),ii(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{ea(e.containerInfo)}catch(y){wt(t,t.return,y)}break;case 4:Vn(e,t),ii(t);break;case 13:Vn(e,t),ii(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Hh=At())),i&4&&Lm(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?(en=(c=en)||u,Vn(e,t),en=c):Vn(e,t),ii(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!u&&t.mode&1)for(ve=t,u=t.child;u!==null;){for(h=ve=u;ve!==null;){switch(f=ve,g=f.child,f.tag){case 0:case 11:case 14:case 15:Xo(4,f,f.return);break;case 1:Fs(f,f.return);var m=f.stateNode;if(typeof m.componentWillUnmount=="function"){i=f,n=f.return;try{e=i,m.props=e.memoizedProps,m.state=e.memoizedState,m.componentWillUnmount()}catch(y){wt(i,n,y)}}break;case 5:Fs(f,f.return);break;case 22:if(f.memoizedState!==null){Im(h);continue}}g!==null?(g.return=f,ve=g):Im(h)}u=u.sibling}e:for(u=null,h=t;;){if(h.tag===5){if(u===null){u=h;try{r=h.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=G0("display",o))}catch(y){wt(t,t.return,y)}}}else if(h.tag===6){if(u===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(y){wt(t,t.return,y)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;u===h&&(u=null),h=h.return}u===h&&(u=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Vn(e,t),ii(t),i&4&&Lm(t);break;case 21:break;default:Vn(e,t),ii(t)}}function ii(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(mv(n)){var i=n;break e}n=n.return}throw Error(re(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Ko(r,""),i.flags&=-33);var s=Nm(t);Jf(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Nm(t);Zf(t,a,o);break;default:throw Error(re(161))}}catch(l){wt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function AE(t,e,n){ve=t,vv(t)}function vv(t,e,n){for(var i=(t.mode&1)!==0;ve!==null;){var r=ve,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Ka;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||en;a=Ka;var c=en;if(Ka=o,(en=l)&&!c)for(ve=r;ve!==null;)o=ve,l=o.child,o.tag===22&&o.memoizedState!==null?Um(r):l!==null?(l.return=o,ve=l):Um(r);for(;s!==null;)ve=s,vv(s),s=s.sibling;ve=r,Ka=a,en=c}Dm(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,ve=s):Dm(t)}}function Dm(t){for(;ve!==null;){var e=ve;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:en||Dc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!en)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:jn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&xm(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}xm(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var h=u.dehydrated;h!==null&&ea(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(re(163))}en||e.flags&512&&Kf(e)}catch(f){wt(e,e.return,f)}}if(e===t){ve=null;break}if(n=e.sibling,n!==null){n.return=e.return,ve=n;break}ve=e.return}}function Im(t){for(;ve!==null;){var e=ve;if(e===t){ve=null;break}var n=e.sibling;if(n!==null){n.return=e.return,ve=n;break}ve=e.return}}function Um(t){for(;ve!==null;){var e=ve;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Dc(4,e)}catch(l){wt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){wt(e,r,l)}}var s=e.return;try{Kf(e)}catch(l){wt(e,s,l)}break;case 5:var o=e.return;try{Kf(e)}catch(l){wt(e,o,l)}}}catch(l){wt(e,e.return,l)}if(e===t){ve=null;break}var a=e.sibling;if(a!==null){a.return=e.return,ve=a;break}ve=e.return}}var CE=Math.ceil,fc=Wi.ReactCurrentDispatcher,zh=Wi.ReactCurrentOwner,On=Wi.ReactCurrentBatchConfig,et=0,Gt=null,Dt=null,qt=0,Mn=0,Os=wr(0),Ot=0,fa=null,ns=0,Ic=0,Vh=0,qo=null,dn=null,Hh=0,Js=1/0,Ci=null,dc=!1,Qf=null,gr=null,Za=!1,lr=null,hc=0,$o=0,ed=null,Il=-1,Ul=0;function an(){return et&6?At():Il!==-1?Il:Il=At()}function xr(t){return t.mode&1?et&2&&qt!==0?qt&-qt:fE.transition!==null?(Ul===0&&(Ul=nx()),Ul):(t=at,t!==0||(t=window.event,t=t===void 0?16:cx(t.type)),t):1}function Jn(t,e,n,i){if(50<$o)throw $o=0,ed=null,Error(re(185));va(t,n,i),(!(et&2)||t!==Gt)&&(t===Gt&&(!(et&2)&&(Ic|=n),Ot===4&&sr(t,qt)),gn(t,i),n===1&&et===0&&!(e.mode&1)&&(Js=At()+500,Pc&&br()))}function gn(t,e){var n=t.callbackNode;fS(t,e);var i=Kl(t,t===Gt?qt:0);if(i===0)n!==null&&Wp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Wp(n),e===1)t.tag===0?uE(Fm.bind(null,t)):Cx(Fm.bind(null,t)),oE(function(){!(et&6)&&br()}),n=null;else{switch(ix(i)){case 1:n=ph;break;case 4:n=ex;break;case 16:n=Yl;break;case 536870912:n=tx;break;default:n=Yl}n=Tv(n,_v.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function _v(t,e){if(Il=-1,Ul=0,et&6)throw Error(re(327));var n=t.callbackNode;if(Gs()&&t.callbackNode!==n)return null;var i=Kl(t,t===Gt?qt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=pc(t,i);else{e=i;var r=et;et|=2;var s=Sv();(Gt!==t||qt!==e)&&(Ci=null,Js=At()+500,Yr(t,e));do try{NE();break}catch(a){yv(t,a)}while(!0);Ah(),fc.current=s,et=r,Dt!==null?e=0:(Gt=null,qt=0,e=Ot)}if(e!==0){if(e===2&&(r=Af(t),r!==0&&(i=r,e=td(t,r))),e===1)throw n=fa,Yr(t,0),sr(t,i),gn(t,At()),n;if(e===6)sr(t,i);else{if(r=t.current.alternate,!(i&30)&&!RE(r)&&(e=pc(t,i),e===2&&(s=Af(t),s!==0&&(i=s,e=td(t,s))),e===1))throw n=fa,Yr(t,0),sr(t,i),gn(t,At()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(re(345));case 2:Br(t,dn,Ci);break;case 3:if(sr(t,i),(i&130023424)===i&&(e=Hh+500-At(),10<e)){if(Kl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){an(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Uf(Br.bind(null,t,dn,Ci),e);break}Br(t,dn,Ci);break;case 4:if(sr(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-Zn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=At()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*CE(i/1960))-i,10<i){t.timeoutHandle=Uf(Br.bind(null,t,dn,Ci),i);break}Br(t,dn,Ci);break;case 5:Br(t,dn,Ci);break;default:throw Error(re(329))}}}return gn(t,At()),t.callbackNode===n?_v.bind(null,t):null}function td(t,e){var n=qo;return t.current.memoizedState.isDehydrated&&(Yr(t,e).flags|=256),t=pc(t,e),t!==2&&(e=dn,dn=n,e!==null&&nd(e)),t}function nd(t){dn===null?dn=t:dn.push.apply(dn,t)}function RE(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!ei(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function sr(t,e){for(e&=~Vh,e&=~Ic,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Zn(e),i=1<<n;t[n]=-1,e&=~i}}function Fm(t){if(et&6)throw Error(re(327));Gs();var e=Kl(t,0);if(!(e&1))return gn(t,At()),null;var n=pc(t,e);if(t.tag!==0&&n===2){var i=Af(t);i!==0&&(e=i,n=td(t,i))}if(n===1)throw n=fa,Yr(t,0),sr(t,e),gn(t,At()),n;if(n===6)throw Error(re(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Br(t,dn,Ci),gn(t,At()),null}function Gh(t,e){var n=et;et|=1;try{return t(e)}finally{et=n,et===0&&(Js=At()+500,Pc&&br())}}function is(t){lr!==null&&lr.tag===0&&!(et&6)&&Gs();var e=et;et|=1;var n=On.transition,i=at;try{if(On.transition=null,at=1,t)return t()}finally{at=i,On.transition=n,et=e,!(et&6)&&br()}}function Wh(){Mn=Os.current,xt(Os)}function Yr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,sE(n)),Dt!==null)for(n=Dt.return;n!==null;){var i=n;switch(wh(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&tc();break;case 3:Ks(),xt(pn),xt(rn),Dh();break;case 5:Lh(i);break;case 4:Ks();break;case 13:xt(yt);break;case 19:xt(yt);break;case 10:Ch(i.type._context);break;case 22:case 23:Wh()}n=n.return}if(Gt=t,Dt=t=vr(t.current,null),qt=Mn=e,Ot=0,fa=null,Vh=Ic=ns=0,dn=qo=null,Wr!==null){for(e=0;e<Wr.length;e++)if(n=Wr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}Wr=null}return t}function yv(t,e){do{var n=Dt;try{if(Ah(),Nl.current=uc,cc){for(var i=St.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}cc=!1}if(ts=0,Ht=Ft=St=null,jo=!1,la=0,zh.current=null,n===null||n.return===null){Ot=1,fa=e,Dt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=qt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,h=u.tag;if(!(u.mode&1)&&(h===0||h===11||h===15)){var f=u.alternate;f?(u.updateQueue=f.updateQueue,u.memoizedState=f.memoizedState,u.lanes=f.lanes):(u.updateQueue=null,u.memoizedState=null)}var g=Mm(o);if(g!==null){g.flags&=-257,wm(g,o,a,s,e),g.mode&1&&Em(s,c,e),e=g,l=c;var m=e.updateQueue;if(m===null){var y=new Set;y.add(l),e.updateQueue=y}else m.add(l);break e}else{if(!(e&1)){Em(s,c,e),jh();break e}l=Error(re(426))}}else if(vt&&a.mode&1){var p=Mm(o);if(p!==null){!(p.flags&65536)&&(p.flags|=256),wm(p,o,a,s,e),bh(Zs(l,a));break e}}s=l=Zs(l,a),Ot!==4&&(Ot=2),qo===null?qo=[s]:qo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var d=iv(s,l,e);gm(s,d);break e;case 1:a=l;var x=s.type,_=s.stateNode;if(!(s.flags&128)&&(typeof x.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(gr===null||!gr.has(_)))){s.flags|=65536,e&=-e,s.lanes|=e;var E=rv(s,a,e);gm(s,E);break e}}s=s.return}while(s!==null)}Mv(n)}catch(b){e=b,Dt===n&&n!==null&&(Dt=n=n.return);continue}break}while(!0)}function Sv(){var t=fc.current;return fc.current=uc,t===null?uc:t}function jh(){(Ot===0||Ot===3||Ot===2)&&(Ot=4),Gt===null||!(ns&268435455)&&!(Ic&268435455)||sr(Gt,qt)}function pc(t,e){var n=et;et|=2;var i=Sv();(Gt!==t||qt!==e)&&(Ci=null,Yr(t,e));do try{PE();break}catch(r){yv(t,r)}while(!0);if(Ah(),et=n,fc.current=i,Dt!==null)throw Error(re(261));return Gt=null,qt=0,Ot}function PE(){for(;Dt!==null;)Ev(Dt)}function NE(){for(;Dt!==null&&!nS();)Ev(Dt)}function Ev(t){var e=bv(t.alternate,t,Mn);t.memoizedProps=t.pendingProps,e===null?Mv(t):Dt=e,zh.current=null}function Mv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=wE(n,e),n!==null){n.flags&=32767,Dt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ot=6,Dt=null;return}}else if(n=ME(n,e,Mn),n!==null){Dt=n;return}if(e=e.sibling,e!==null){Dt=e;return}Dt=e=t}while(e!==null);Ot===0&&(Ot=5)}function Br(t,e,n){var i=at,r=On.transition;try{On.transition=null,at=1,LE(t,e,n,i)}finally{On.transition=r,at=i}return null}function LE(t,e,n,i){do Gs();while(lr!==null);if(et&6)throw Error(re(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(re(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(dS(t,s),t===Gt&&(Dt=Gt=null,qt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Za||(Za=!0,Tv(Yl,function(){return Gs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=On.transition,On.transition=null;var o=at;at=1;var a=et;et|=4,zh.current=null,TE(t,n),xv(n,t),JS(Df),Zl=!!Lf,Df=Lf=null,t.current=n,AE(n),iS(),et=a,at=o,On.transition=s}else t.current=n;if(Za&&(Za=!1,lr=t,hc=r),s=t.pendingLanes,s===0&&(gr=null),oS(n.stateNode),gn(t,At()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(dc)throw dc=!1,t=Qf,Qf=null,t;return hc&1&&t.tag!==0&&Gs(),s=t.pendingLanes,s&1?t===ed?$o++:($o=0,ed=t):$o=0,br(),null}function Gs(){if(lr!==null){var t=ix(hc),e=On.transition,n=at;try{if(On.transition=null,at=16>t?16:t,lr===null)var i=!1;else{if(t=lr,lr=null,hc=0,et&6)throw Error(re(331));var r=et;for(et|=4,ve=t.current;ve!==null;){var s=ve,o=s.child;if(ve.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(ve=c;ve!==null;){var u=ve;switch(u.tag){case 0:case 11:case 15:Xo(8,u,s)}var h=u.child;if(h!==null)h.return=u,ve=h;else for(;ve!==null;){u=ve;var f=u.sibling,g=u.return;if(pv(u),u===c){ve=null;break}if(f!==null){f.return=g,ve=f;break}ve=g}}}var m=s.alternate;if(m!==null){var y=m.child;if(y!==null){m.child=null;do{var p=y.sibling;y.sibling=null,y=p}while(y!==null)}}ve=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,ve=o;else e:for(;ve!==null;){if(s=ve,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Xo(9,s,s.return)}var d=s.sibling;if(d!==null){d.return=s.return,ve=d;break e}ve=s.return}}var x=t.current;for(ve=x;ve!==null;){o=ve;var _=o.child;if(o.subtreeFlags&2064&&_!==null)_.return=o,ve=_;else e:for(o=x;ve!==null;){if(a=ve,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Dc(9,a)}}catch(b){wt(a,a.return,b)}if(a===o){ve=null;break e}var E=a.sibling;if(E!==null){E.return=a.return,ve=E;break e}ve=a.return}}if(et=r,br(),di&&typeof di.onPostCommitFiberRoot=="function")try{di.onPostCommitFiberRoot(bc,t)}catch{}i=!0}return i}finally{at=n,On.transition=e}}return!1}function Om(t,e,n){e=Zs(n,e),e=iv(t,e,1),t=mr(t,e,1),e=an(),t!==null&&(va(t,1,e),gn(t,e))}function wt(t,e,n){if(t.tag===3)Om(t,t,n);else for(;e!==null;){if(e.tag===3){Om(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(gr===null||!gr.has(i))){t=Zs(n,t),t=rv(e,t,1),e=mr(e,t,1),t=an(),e!==null&&(va(e,1,t),gn(e,t));break}}e=e.return}}function DE(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=an(),t.pingedLanes|=t.suspendedLanes&n,Gt===t&&(qt&n)===n&&(Ot===4||Ot===3&&(qt&130023424)===qt&&500>At()-Hh?Yr(t,0):Vh|=n),gn(t,e)}function wv(t,e){e===0&&(t.mode&1?(e=Va,Va<<=1,!(Va&130023424)&&(Va=4194304)):e=1);var n=an();t=Bi(t,e),t!==null&&(va(t,e,n),gn(t,n))}function IE(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),wv(t,n)}function UE(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(re(314))}i!==null&&i.delete(e),wv(t,n)}var bv;bv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||pn.current)hn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return hn=!1,EE(t,e,n);hn=!!(t.flags&131072)}else hn=!1,vt&&e.flags&1048576&&Rx(e,rc,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Dl(t,e),t=e.pendingProps;var r=qs(e,rn.current);Hs(e,n),r=Uh(null,e,i,t,r,n);var s=Fh();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,mn(i)?(s=!0,nc(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Ph(e),r.updater=Lc,e.stateNode=r,r._reactInternals=e,Hf(e,i,t,n),e=jf(null,e,i,!0,s,n)):(e.tag=0,vt&&s&&Mh(e),on(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Dl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=OE(i),t=jn(i,t),r){case 0:e=Wf(null,e,i,t,n);break e;case 1:e=Am(null,e,i,t,n);break e;case 11:e=bm(null,e,i,t,n);break e;case 14:e=Tm(null,e,i,jn(i.type,t),n);break e}throw Error(re(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:jn(i,r),Wf(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:jn(i,r),Am(t,e,i,r,n);case 3:e:{if(lv(e),t===null)throw Error(re(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Ux(t,e),ac(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Zs(Error(re(423)),e),e=Cm(t,e,i,n,r);break e}else if(i!==r){r=Zs(Error(re(424)),e),e=Cm(t,e,i,n,r);break e}else for(wn=pr(e.stateNode.containerInfo.firstChild),bn=e,vt=!0,qn=null,n=Dx(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if($s(),i===r){e=zi(t,e,n);break e}on(t,e,i,n)}e=e.child}return e;case 5:return Fx(e),t===null&&Bf(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,If(i,r)?o=null:s!==null&&If(i,s)&&(e.flags|=32),av(t,e),on(t,e,o,n),e.child;case 6:return t===null&&Bf(e),null;case 13:return cv(t,e,n);case 4:return Nh(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Ys(e,null,i,n):on(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:jn(i,r),bm(t,e,i,r,n);case 7:return on(t,e,e.pendingProps,n),e.child;case 8:return on(t,e,e.pendingProps.children,n),e.child;case 12:return on(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,mt(sc,i._currentValue),i._currentValue=o,s!==null)if(ei(s.value,o)){if(s.children===r.children&&!pn.current){e=zi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Di(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),zf(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(re(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),zf(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}on(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Hs(e,n),r=kn(r),i=i(r),e.flags|=1,on(t,e,i,n),e.child;case 14:return i=e.type,r=jn(i,e.pendingProps),r=jn(i.type,r),Tm(t,e,i,r,n);case 15:return sv(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:jn(i,r),Dl(t,e),e.tag=1,mn(i)?(t=!0,nc(e)):t=!1,Hs(e,n),nv(e,i,r),Hf(e,i,r,n),jf(null,e,i,!0,t,n);case 19:return uv(t,e,n);case 22:return ov(t,e,n)}throw Error(re(156,e.tag))};function Tv(t,e){return Q0(t,e)}function FE(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Fn(t,e,n,i){return new FE(t,e,n,i)}function Xh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function OE(t){if(typeof t=="function")return Xh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===fh)return 11;if(t===dh)return 14}return 2}function vr(t,e){var n=t.alternate;return n===null?(n=Fn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Fl(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")Xh(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case As:return Kr(n.children,r,s,e);case uh:o=8,r|=8;break;case df:return t=Fn(12,n,e,r|2),t.elementType=df,t.lanes=s,t;case hf:return t=Fn(13,n,e,r),t.elementType=hf,t.lanes=s,t;case pf:return t=Fn(19,n,e,r),t.elementType=pf,t.lanes=s,t;case F0:return Uc(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case I0:o=10;break e;case U0:o=9;break e;case fh:o=11;break e;case dh:o=14;break e;case nr:o=16,i=null;break e}throw Error(re(130,t==null?t:typeof t,""))}return e=Fn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Kr(t,e,n,i){return t=Fn(7,t,i,e),t.lanes=n,t}function Uc(t,e,n,i){return t=Fn(22,t,i,e),t.elementType=F0,t.lanes=n,t.stateNode={isHidden:!1},t}function Eu(t,e,n){return t=Fn(6,t,null,e),t.lanes=n,t}function Mu(t,e,n){return e=Fn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function kE(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=iu(0),this.expirationTimes=iu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=iu(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function qh(t,e,n,i,r,s,o,a,l){return t=new kE(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Fn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ph(s),t}function BE(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ts,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Av(t){if(!t)return Sr;t=t._reactInternals;e:{if(as(t)!==t||t.tag!==1)throw Error(re(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(mn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(re(171))}if(t.tag===1){var n=t.type;if(mn(n))return Ax(t,n,e)}return e}function Cv(t,e,n,i,r,s,o,a,l){return t=qh(n,i,!0,t,r,s,o,a,l),t.context=Av(null),n=t.current,i=an(),r=xr(n),s=Di(i,r),s.callback=e??null,mr(n,s,r),t.current.lanes=r,va(t,r,i),gn(t,i),t}function Fc(t,e,n,i){var r=e.current,s=an(),o=xr(r);return n=Av(n),e.context===null?e.context=n:e.pendingContext=n,e=Di(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=mr(r,e,o),t!==null&&(Jn(t,r,o,s),Pl(t,r,o)),o}function mc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function km(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function $h(t,e){km(t,e),(t=t.alternate)&&km(t,e)}function zE(){return null}var Rv=typeof reportError=="function"?reportError:function(t){console.error(t)};function Yh(t){this._internalRoot=t}Oc.prototype.render=Yh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(re(409));Fc(t,e,null,null)};Oc.prototype.unmount=Yh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;is(function(){Fc(null,t,null,null)}),e[ki]=null}};function Oc(t){this._internalRoot=t}Oc.prototype.unstable_scheduleHydration=function(t){if(t){var e=ox();t={blockedOn:null,target:t,priority:e};for(var n=0;n<rr.length&&e!==0&&e<rr[n].priority;n++);rr.splice(n,0,t),n===0&&lx(t)}};function Kh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function kc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Bm(){}function VE(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=mc(o);s.call(c)}}var o=Cv(e,i,t,0,null,!1,!1,"",Bm);return t._reactRootContainer=o,t[ki]=o.current,ia(t.nodeType===8?t.parentNode:t),is(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=mc(l);a.call(c)}}var l=qh(t,0,!1,null,null,!1,!1,"",Bm);return t._reactRootContainer=l,t[ki]=l.current,ia(t.nodeType===8?t.parentNode:t),is(function(){Fc(e,l,n,i)}),l}function Bc(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=mc(o);a.call(l)}}Fc(e,o,t,r)}else o=VE(n,e,t,r,i);return mc(o)}rx=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Uo(e.pendingLanes);n!==0&&(mh(e,n|1),gn(e,At()),!(et&6)&&(Js=At()+500,br()))}break;case 13:is(function(){var i=Bi(t,1);if(i!==null){var r=an();Jn(i,t,1,r)}}),$h(t,1)}};gh=function(t){if(t.tag===13){var e=Bi(t,134217728);if(e!==null){var n=an();Jn(e,t,134217728,n)}$h(t,134217728)}};sx=function(t){if(t.tag===13){var e=xr(t),n=Bi(t,e);if(n!==null){var i=an();Jn(n,t,e,i)}$h(t,e)}};ox=function(){return at};ax=function(t,e){var n=at;try{return at=t,e()}finally{at=n}};wf=function(t,e,n){switch(e){case"input":if(xf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Rc(i);if(!r)throw Error(re(90));k0(i),xf(i,r)}}}break;case"textarea":z0(t,n);break;case"select":e=n.value,e!=null&&ks(t,!!n.multiple,e,!1)}};q0=Gh;$0=is;var HE={usingClientEntryPoint:!1,Events:[ya,Ns,Rc,j0,X0,Gh]},Mo={findFiberByHostInstance:Gr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},GE={bundleType:Mo.bundleType,version:Mo.version,rendererPackageName:Mo.rendererPackageName,rendererConfig:Mo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Wi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Z0(t),t===null?null:t.stateNode},findFiberByHostInstance:Mo.findFiberByHostInstance||zE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ja=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ja.isDisabled&&Ja.supportsFiber)try{bc=Ja.inject(GE),di=Ja}catch{}}Cn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=HE;Cn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Kh(e))throw Error(re(200));return BE(t,e,null,n)};Cn.createRoot=function(t,e){if(!Kh(t))throw Error(re(299));var n=!1,i="",r=Rv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=qh(t,1,!1,null,null,n,!1,i,r),t[ki]=e.current,ia(t.nodeType===8?t.parentNode:t),new Yh(e)};Cn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(re(188)):(t=Object.keys(t).join(","),Error(re(268,t)));return t=Z0(e),t=t===null?null:t.stateNode,t};Cn.flushSync=function(t){return is(t)};Cn.hydrate=function(t,e,n){if(!kc(e))throw Error(re(200));return Bc(null,t,e,!0,n)};Cn.hydrateRoot=function(t,e,n){if(!Kh(t))throw Error(re(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=Rv;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Cv(e,null,t,1,n??null,r,!1,s,o),t[ki]=e.current,ia(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Oc(e)};Cn.render=function(t,e,n){if(!kc(e))throw Error(re(200));return Bc(null,t,e,!1,n)};Cn.unmountComponentAtNode=function(t){if(!kc(t))throw Error(re(40));return t._reactRootContainer?(is(function(){Bc(null,null,t,!1,function(){t._reactRootContainer=null,t[ki]=null})}),!0):!1};Cn.unstable_batchedUpdates=Gh;Cn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!kc(n))throw Error(re(200));if(t==null||t._reactInternals===void 0)throw Error(re(38));return Bc(t,e,n,!1,i)};Cn.version="18.3.1-next-f1338f8080-20240426";function Pv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Pv)}catch(t){console.error(t)}}Pv(),P0.exports=Cn;var WE=P0.exports,zm=WE;uf.createRoot=zm.createRoot,uf.hydrateRoot=zm.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function da(){return da=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},da.apply(this,arguments)}var cr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(cr||(cr={}));const Vm="popstate";function jE(t){t===void 0&&(t={});function e(i,r){let{pathname:s,search:o,hash:a}=i.location;return id("",{pathname:s,search:o,hash:a},r.state&&r.state.usr||null,r.state&&r.state.key||"default")}function n(i,r){return typeof r=="string"?r:gc(r)}return qE(e,n,null,t)}function Rt(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Zh(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function XE(){return Math.random().toString(36).substr(2,8)}function Hm(t,e){return{usr:t.state,key:t.key,idx:e}}function id(t,e,n,i){return n===void 0&&(n=null),da({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?lo(e):e,{state:n,key:e&&e.key||i||XE()})}function gc(t){let{pathname:e="/",search:n="",hash:i=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function lo(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let i=t.indexOf("?");i>=0&&(e.search=t.substr(i),t=t.substr(0,i)),t&&(e.pathname=t)}return e}function qE(t,e,n,i){i===void 0&&(i={});let{window:r=document.defaultView,v5Compat:s=!1}=i,o=r.history,a=cr.Pop,l=null,c=u();c==null&&(c=0,o.replaceState(da({},o.state,{idx:c}),""));function u(){return(o.state||{idx:null}).idx}function h(){a=cr.Pop;let p=u(),d=p==null?null:p-c;c=p,l&&l({action:a,location:y.location,delta:d})}function f(p,d){a=cr.Push;let x=id(y.location,p,d);c=u()+1;let _=Hm(x,c),E=y.createHref(x);try{o.pushState(_,"",E)}catch(b){if(b instanceof DOMException&&b.name==="DataCloneError")throw b;r.location.assign(E)}s&&l&&l({action:a,location:y.location,delta:1})}function g(p,d){a=cr.Replace;let x=id(y.location,p,d);c=u();let _=Hm(x,c),E=y.createHref(x);o.replaceState(_,"",E),s&&l&&l({action:a,location:y.location,delta:0})}function m(p){let d=r.location.origin!=="null"?r.location.origin:r.location.href,x=typeof p=="string"?p:gc(p);return x=x.replace(/ $/,"%20"),Rt(d,"No window.location.(origin|href) available to create URL for href: "+x),new URL(x,d)}let y={get action(){return a},get location(){return t(r,o)},listen(p){if(l)throw new Error("A history only accepts one active listener");return r.addEventListener(Vm,h),l=p,()=>{r.removeEventListener(Vm,h),l=null}},createHref(p){return e(r,p)},createURL:m,encodeLocation(p){let d=m(p);return{pathname:d.pathname,search:d.search,hash:d.hash}},push:f,replace:g,go(p){return o.go(p)}};return y}var Gm;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Gm||(Gm={}));function $E(t,e,n){return n===void 0&&(n="/"),YE(t,e,n)}function YE(t,e,n,i){let r=typeof e=="string"?lo(e):e,s=Jh(r.pathname||"/",n);if(s==null)return null;let o=Nv(t);KE(o);let a=null;for(let l=0;a==null&&l<o.length;++l){let c=lM(s);a=sM(o[l],c)}return a}function Nv(t,e,n,i){e===void 0&&(e=[]),n===void 0&&(n=[]),i===void 0&&(i="");let r=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(Rt(l.relativePath.startsWith(i),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(i.length));let c=_r([i,l.relativePath]),u=n.concat(l);s.children&&s.children.length>0&&(Rt(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),Nv(s.children,e,u,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:iM(c,s.index),routesMeta:u})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))r(s,o);else for(let l of Lv(s.path))r(s,o,l)}),e}function Lv(t){let e=t.split("/");if(e.length===0)return[];let[n,...i]=e,r=n.endsWith("?"),s=n.replace(/\?$/,"");if(i.length===0)return r?[s,""]:[s];let o=Lv(i.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),r&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function KE(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:rM(e.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}const ZE=/^:[\w-]+$/,JE=3,QE=2,eM=1,tM=10,nM=-2,Wm=t=>t==="*";function iM(t,e){let n=t.split("/"),i=n.length;return n.some(Wm)&&(i+=nM),e&&(i+=QE),n.filter(r=>!Wm(r)).reduce((r,s)=>r+(ZE.test(s)?JE:s===""?eM:tM),i)}function rM(t,e){return t.length===e.length&&t.slice(0,-1).every((i,r)=>i===e[r])?t[t.length-1]-e[e.length-1]:0}function sM(t,e,n){let{routesMeta:i}=t,r={},s="/",o=[];for(let a=0;a<i.length;++a){let l=i[a],c=a===i.length-1,u=s==="/"?e:e.slice(s.length)||"/",h=oM({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},u),f=l.route;if(!h)return null;Object.assign(r,h.params),o.push({params:r,pathname:_r([s,h.pathname]),pathnameBase:hM(_r([s,h.pathnameBase])),route:f}),h.pathnameBase!=="/"&&(s=_r([s,h.pathnameBase]))}return o}function oM(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,i]=aM(t.path,t.caseSensitive,t.end),r=e.match(n);if(!r)return null;let s=r[0],o=s.replace(/(.)\/+$/,"$1"),a=r.slice(1);return{params:i.reduce((c,u,h)=>{let{paramName:f,isOptional:g}=u;if(f==="*"){let y=a[h]||"";o=s.slice(0,s.length-y.length).replace(/(.)\/+$/,"$1")}const m=a[h];return g&&!m?c[f]=void 0:c[f]=(m||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function aM(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Zh(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let i=[],r="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(i.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(i.push({paramName:"*"}),r+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?r+="\\/*$":t!==""&&t!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,e?void 0:"i"),i]}function lM(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Zh(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Jh(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,i=t.charAt(n);return i&&i!=="/"?null:t.slice(n)||"/"}const cM=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,uM=t=>cM.test(t);function fM(t,e){e===void 0&&(e="/");let{pathname:n,search:i="",hash:r=""}=typeof t=="string"?lo(t):t,s;if(n)if(uM(n))s=n;else{if(n.includes("//")){let o=n;n=n.replace(/\/\/+/g,"/"),Zh(!1,"Pathnames cannot have embedded double slashes - normalizing "+(o+" -> "+n))}n.startsWith("/")?s=jm(n.substring(1),"/"):s=jm(n,e)}else s=e;return{pathname:s,search:pM(i),hash:mM(r)}}function jm(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(r=>{r===".."?n.length>1&&n.pop():r!=="."&&n.push(r)}),n.length>1?n.join("/"):"/"}function wu(t,e,n,i){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function dM(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Qh(t,e){let n=dM(t);return e?n.map((i,r)=>r===n.length-1?i.pathname:i.pathnameBase):n.map(i=>i.pathnameBase)}function ep(t,e,n,i){i===void 0&&(i=!1);let r;typeof t=="string"?r=lo(t):(r=da({},t),Rt(!r.pathname||!r.pathname.includes("?"),wu("?","pathname","search",r)),Rt(!r.pathname||!r.pathname.includes("#"),wu("#","pathname","hash",r)),Rt(!r.search||!r.search.includes("#"),wu("#","search","hash",r)));let s=t===""||r.pathname==="",o=s?"/":r.pathname,a;if(o==null)a=n;else{let h=e.length-1;if(!i&&o.startsWith("..")){let f=o.split("/");for(;f[0]==="..";)f.shift(),h-=1;r.pathname=f.join("/")}a=h>=0?e[h]:"/"}let l=fM(r,a),c=o&&o!=="/"&&o.endsWith("/"),u=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||u)&&(l.pathname+="/"),l}const _r=t=>t.join("/").replace(/\/\/+/g,"/"),hM=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),pM=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,mM=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function gM(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const Dv=["post","put","patch","delete"];new Set(Dv);const xM=["get",...Dv];new Set(xM);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ha(){return ha=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},ha.apply(this,arguments)}const tp=ee.createContext(null),vM=ee.createContext(null),Tr=ee.createContext(null),zc=ee.createContext(null),Ar=ee.createContext({outlet:null,matches:[],isDataRoute:!1}),Iv=ee.createContext(null);function _M(t,e){let{relative:n}=e===void 0?{}:e;co()||Rt(!1);let{basename:i,navigator:r}=ee.useContext(Tr),{hash:s,pathname:o,search:a}=Fv(t,{relative:n}),l=o;return i!=="/"&&(l=o==="/"?i:_r([i,o])),r.createHref({pathname:l,search:a,hash:s})}function co(){return ee.useContext(zc)!=null}function Ea(){return co()||Rt(!1),ee.useContext(zc).location}function Uv(t){ee.useContext(Tr).static||ee.useLayoutEffect(t)}function uo(){let{isDataRoute:t}=ee.useContext(Ar);return t?LM():yM()}function yM(){co()||Rt(!1);let t=ee.useContext(tp),{basename:e,future:n,navigator:i}=ee.useContext(Tr),{matches:r}=ee.useContext(Ar),{pathname:s}=Ea(),o=JSON.stringify(Qh(r,n.v7_relativeSplatPath)),a=ee.useRef(!1);return Uv(()=>{a.current=!0}),ee.useCallback(function(c,u){if(u===void 0&&(u={}),!a.current)return;if(typeof c=="number"){i.go(c);return}let h=ep(c,JSON.parse(o),s,u.relative==="path");t==null&&e!=="/"&&(h.pathname=h.pathname==="/"?e:_r([e,h.pathname])),(u.replace?i.replace:i.push)(h,u.state,u)},[e,i,o,s,t])}function Fv(t,e){let{relative:n}=e===void 0?{}:e,{future:i}=ee.useContext(Tr),{matches:r}=ee.useContext(Ar),{pathname:s}=Ea(),o=JSON.stringify(Qh(r,i.v7_relativeSplatPath));return ee.useMemo(()=>ep(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function SM(t,e){return EM(t,e)}function EM(t,e,n,i){co()||Rt(!1);let{navigator:r}=ee.useContext(Tr),{matches:s}=ee.useContext(Ar),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let c=Ea(),u;if(e){var h;let p=typeof e=="string"?lo(e):e;l==="/"||(h=p.pathname)!=null&&h.startsWith(l)||Rt(!1),u=p}else u=c;let f=u.pathname||"/",g=f;if(l!=="/"){let p=l.replace(/^\//,"").split("/");g="/"+f.replace(/^\//,"").split("/").slice(p.length).join("/")}let m=$E(t,{pathname:g}),y=AM(m&&m.map(p=>Object.assign({},p,{params:Object.assign({},a,p.params),pathname:_r([l,r.encodeLocation?r.encodeLocation(p.pathname).pathname:p.pathname]),pathnameBase:p.pathnameBase==="/"?l:_r([l,r.encodeLocation?r.encodeLocation(p.pathnameBase).pathname:p.pathnameBase])})),s,n,i);return e&&y?ee.createElement(zc.Provider,{value:{location:ha({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:cr.Pop}},y):y}function MM(){let t=NM(),e=gM(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return ee.createElement(ee.Fragment,null,ee.createElement("h2",null,"Unexpected Application Error!"),ee.createElement("h3",{style:{fontStyle:"italic"}},e),n?ee.createElement("pre",{style:r},n):null,null)}const wM=ee.createElement(MM,null);class bM extends ee.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?ee.createElement(Ar.Provider,{value:this.props.routeContext},ee.createElement(Iv.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function TM(t){let{routeContext:e,match:n,children:i}=t,r=ee.useContext(tp);return r&&r.static&&r.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=n.route.id),ee.createElement(Ar.Provider,{value:e},i)}function AM(t,e,n,i){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),i===void 0&&(i=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=i)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,a=(r=n)==null?void 0:r.errors;if(a!=null){let u=o.findIndex(h=>h.route.id&&(a==null?void 0:a[h.route.id])!==void 0);u>=0||Rt(!1),o=o.slice(0,Math.min(o.length,u+1))}let l=!1,c=-1;if(n&&i&&i.v7_partialHydration)for(let u=0;u<o.length;u++){let h=o[u];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(c=u),h.route.id){let{loaderData:f,errors:g}=n,m=h.route.loader&&f[h.route.id]===void 0&&(!g||g[h.route.id]===void 0);if(h.route.lazy||m){l=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((u,h,f)=>{let g,m=!1,y=null,p=null;n&&(g=a&&h.route.id?a[h.route.id]:void 0,y=h.route.errorElement||wM,l&&(c<0&&f===0?(DM("route-fallback"),m=!0,p=null):c===f&&(m=!0,p=h.route.hydrateFallbackElement||null)));let d=e.concat(o.slice(0,f+1)),x=()=>{let _;return g?_=y:m?_=p:h.route.Component?_=ee.createElement(h.route.Component,null):h.route.element?_=h.route.element:_=u,ee.createElement(TM,{match:h,routeContext:{outlet:u,matches:d,isDataRoute:n!=null},children:_})};return n&&(h.route.ErrorBoundary||h.route.errorElement||f===0)?ee.createElement(bM,{location:n.location,revalidation:n.revalidation,component:y,error:g,children:x(),routeContext:{outlet:null,matches:d,isDataRoute:!0}}):x()},null)}var Ov=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(Ov||{}),kv=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(kv||{});function CM(t){let e=ee.useContext(tp);return e||Rt(!1),e}function RM(t){let e=ee.useContext(vM);return e||Rt(!1),e}function PM(t){let e=ee.useContext(Ar);return e||Rt(!1),e}function Bv(t){let e=PM(),n=e.matches[e.matches.length-1];return n.route.id||Rt(!1),n.route.id}function NM(){var t;let e=ee.useContext(Iv),n=RM(),i=Bv();return e!==void 0?e:(t=n.errors)==null?void 0:t[i]}function LM(){let{router:t}=CM(Ov.UseNavigateStable),e=Bv(kv.UseNavigateStable),n=ee.useRef(!1);return Uv(()=>{n.current=!0}),ee.useCallback(function(r,s){s===void 0&&(s={}),n.current&&(typeof r=="number"?t.navigate(r):t.navigate(r,ha({fromRouteId:e},s)))},[t,e])}const Xm={};function DM(t,e,n){Xm[t]||(Xm[t]=!0)}function IM(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function zv(t){let{to:e,replace:n,state:i,relative:r}=t;co()||Rt(!1);let{future:s,static:o}=ee.useContext(Tr),{matches:a}=ee.useContext(Ar),{pathname:l}=Ea(),c=uo(),u=ep(e,Qh(a,s.v7_relativeSplatPath),l,r==="path"),h=JSON.stringify(u);return ee.useEffect(()=>c(JSON.parse(h),{replace:n,state:i,relative:r}),[c,h,r,n,i]),null}function Oo(t){Rt(!1)}function UM(t){let{basename:e="/",children:n=null,location:i,navigationType:r=cr.Pop,navigator:s,static:o=!1,future:a}=t;co()&&Rt(!1);let l=e.replace(/^\/*/,"/"),c=ee.useMemo(()=>({basename:l,navigator:s,static:o,future:ha({v7_relativeSplatPath:!1},a)}),[l,a,s,o]);typeof i=="string"&&(i=lo(i));let{pathname:u="/",search:h="",hash:f="",state:g=null,key:m="default"}=i,y=ee.useMemo(()=>{let p=Jh(u,l);return p==null?null:{location:{pathname:p,search:h,hash:f,state:g,key:m},navigationType:r}},[l,u,h,f,g,m,r]);return y==null?null:ee.createElement(Tr.Provider,{value:c},ee.createElement(zc.Provider,{children:n,value:y}))}function FM(t){let{children:e,location:n}=t;return SM(rd(e),n)}new Promise(()=>{});function rd(t,e){e===void 0&&(e=[]);let n=[];return ee.Children.forEach(t,(i,r)=>{if(!ee.isValidElement(i))return;let s=[...e,r];if(i.type===ee.Fragment){n.push.apply(n,rd(i.props.children,s));return}i.type!==Oo&&Rt(!1),!i.props.index||!i.props.children||Rt(!1);let o={id:i.props.id||s.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(o.children=rd(i.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function sd(){return sd=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},sd.apply(this,arguments)}function OM(t,e){if(t==null)return{};var n={},i=Object.keys(t),r,s;for(s=0;s<i.length;s++)r=i[s],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}function kM(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function BM(t,e){return t.button===0&&(!e||e==="_self")&&!kM(t)}const zM=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],VM="6";try{window.__reactRouterVersion=VM}catch{}const HM="startTransition",qm=C0[HM];function GM(t){let{basename:e,children:n,future:i,window:r}=t,s=ee.useRef();s.current==null&&(s.current=jE({window:r,v5Compat:!0}));let o=s.current,[a,l]=ee.useState({action:o.action,location:o.location}),{v7_startTransition:c}=i||{},u=ee.useCallback(h=>{c&&qm?qm(()=>l(h)):l(h)},[l,c]);return ee.useLayoutEffect(()=>o.listen(u),[o,u]),ee.useEffect(()=>IM(i),[i]),ee.createElement(UM,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:i})}const WM=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",jM=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Vv=ee.forwardRef(function(e,n){let{onClick:i,relative:r,reloadDocument:s,replace:o,state:a,target:l,to:c,preventScrollReset:u,viewTransition:h}=e,f=OM(e,zM),{basename:g}=ee.useContext(Tr),m,y=!1;if(typeof c=="string"&&jM.test(c)&&(m=c,WM))try{let _=new URL(window.location.href),E=c.startsWith("//")?new URL(_.protocol+c):new URL(c),b=Jh(E.pathname,g);E.origin===_.origin&&b!=null?c=b+E.search+E.hash:y=!0}catch{}let p=_M(c,{relative:r}),d=XM(c,{replace:o,state:a,target:l,preventScrollReset:u,relative:r,viewTransition:h});function x(_){i&&i(_),_.defaultPrevented||d(_)}return ee.createElement("a",sd({},f,{href:m||p,onClick:y||s?i:x,ref:n,target:l}))});var $m;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})($m||($m={}));var Ym;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Ym||(Ym={}));function XM(t,e){let{target:n,replace:i,state:r,preventScrollReset:s,relative:o,viewTransition:a}=e===void 0?{}:e,l=uo(),c=Ea(),u=Fv(t,{relative:o});return ee.useCallback(h=>{if(BM(h,n)){h.preventDefault();let f=i!==void 0?i:gc(c)===gc(u);l(t,{replace:f,state:r,preventScrollReset:s,relative:o,viewTransition:a})}},[c,l,u,i,r,n,t,s,o,a])}const Ma=ee.createContext(null),qM=({children:t})=>{const[e,n]=ee.useState(localStorage.getItem("token")),[i,r]=ee.useState(null),s=uo();ee.useEffect(()=>{if(e)try{const u=e.split(".")[1].replace(/-/g,"+").replace(/_/g,"/"),h=decodeURIComponent(atob(u).split("").map(g=>"%"+("00"+g.charCodeAt(0).toString(16)).slice(-2)).join("")),f=JSON.parse(h);r(f.sub)}catch(c){console.error("Failed to decode token",c),a()}else r(null)},[e]);const o=c=>{localStorage.setItem("token",c),n(c)},a=()=>{localStorage.removeItem("token"),n(null),r(null),s("/login")},l=!!e;return R.jsx(Ma.Provider,{value:{token:e,user:i,isAuthenticated:l,login:o,logout:a},children:t})},$M=()=>{const{isAuthenticated:t,logout:e}=ee.useContext(Ma);return t?R.jsx("nav",{className:"bg-slate-800 border-b border-slate-700 shadow-sm",children:R.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:R.jsxs("div",{className:"flex justify-between h-16 items-center",children:[R.jsx("div",{className:"flex-shrink-0 flex items-center",children:R.jsx("span",{className:"text-xl font-bold text-indigo-500 tracking-tight",children:"CybrMoon"})}),R.jsx("div",{children:R.jsx("button",{onClick:e,className:"text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-slate-700 transition",children:"Logout"})})]})})}):null},YM=({children:t})=>{const{isAuthenticated:e}=ee.useContext(Ma);return e?t:R.jsx(zv,{to:"/login",replace:!0})};function Hv(t,e){return function(){return t.apply(e,arguments)}}const{toString:KM}=Object.prototype,{getPrototypeOf:np}=Object,{iterator:Vc,toStringTag:Gv}=Symbol,Hc=(t=>e=>{const n=KM.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),ti=t=>(t=t.toLowerCase(),e=>Hc(e)===t),Gc=t=>e=>typeof e===t,{isArray:fo}=Array,Qs=Gc("undefined");function wa(t){return t!==null&&!Qs(t)&&t.constructor!==null&&!Qs(t.constructor)&&xn(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const Wv=ti("ArrayBuffer");function ZM(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&Wv(t.buffer),e}const JM=Gc("string"),xn=Gc("function"),jv=Gc("number"),ba=t=>t!==null&&typeof t=="object",QM=t=>t===!0||t===!1,Ol=t=>{if(Hc(t)!=="object")return!1;const e=np(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Gv in t)&&!(Vc in t)},ew=t=>{if(!ba(t)||wa(t))return!1;try{return Object.keys(t).length===0&&Object.getPrototypeOf(t)===Object.prototype}catch{return!1}},tw=ti("Date"),nw=ti("File"),iw=t=>!!(t&&typeof t.uri<"u"),rw=t=>t&&typeof t.getParts<"u",sw=ti("Blob"),ow=ti("FileList"),aw=t=>ba(t)&&xn(t.pipe);function lw(){return typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}}const Km=lw(),Zm=typeof Km.FormData<"u"?Km.FormData:void 0,cw=t=>{let e;return t&&(Zm&&t instanceof Zm||xn(t.append)&&((e=Hc(t))==="formdata"||e==="object"&&xn(t.toString)&&t.toString()==="[object FormData]"))},uw=ti("URLSearchParams"),[fw,dw,hw,pw]=["ReadableStream","Request","Response","Headers"].map(ti),mw=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Ta(t,e,{allOwnKeys:n=!1}={}){if(t===null||typeof t>"u")return;let i,r;if(typeof t!="object"&&(t=[t]),fo(t))for(i=0,r=t.length;i<r;i++)e.call(null,t[i],i,t);else{if(wa(t))return;const s=n?Object.getOwnPropertyNames(t):Object.keys(t),o=s.length;let a;for(i=0;i<o;i++)a=s[i],e.call(null,t[a],a,t)}}function Xv(t,e){if(wa(t))return null;e=e.toLowerCase();const n=Object.keys(t);let i=n.length,r;for(;i-- >0;)if(r=n[i],e===r.toLowerCase())return r;return null}const Xr=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,qv=t=>!Qs(t)&&t!==Xr;function od(){const{caseless:t,skipUndefined:e}=qv(this)&&this||{},n={},i=(r,s)=>{if(s==="__proto__"||s==="constructor"||s==="prototype")return;const o=t&&Xv(n,s)||s;Ol(n[o])&&Ol(r)?n[o]=od(n[o],r):Ol(r)?n[o]=od({},r):fo(r)?n[o]=r.slice():(!e||!Qs(r))&&(n[o]=r)};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&Ta(arguments[r],i);return n}const gw=(t,e,n,{allOwnKeys:i}={})=>(Ta(e,(r,s)=>{n&&xn(r)?Object.defineProperty(t,s,{value:Hv(r,n),writable:!0,enumerable:!0,configurable:!0}):Object.defineProperty(t,s,{value:r,writable:!0,enumerable:!0,configurable:!0})},{allOwnKeys:i}),t),xw=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),vw=(t,e,n,i)=>{t.prototype=Object.create(e.prototype,i),Object.defineProperty(t.prototype,"constructor",{value:t,writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},_w=(t,e,n,i)=>{let r,s,o;const a={};if(e=e||{},t==null)return e;do{for(r=Object.getOwnPropertyNames(t),s=r.length;s-- >0;)o=r[s],(!i||i(o,t,e))&&!a[o]&&(e[o]=t[o],a[o]=!0);t=n!==!1&&np(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},yw=(t,e,n)=>{t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;const i=t.indexOf(e,n);return i!==-1&&i===n},Sw=t=>{if(!t)return null;if(fo(t))return t;let e=t.length;if(!jv(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},Ew=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&np(Uint8Array)),Mw=(t,e)=>{const i=(t&&t[Vc]).call(t);let r;for(;(r=i.next())&&!r.done;){const s=r.value;e.call(t,s[0],s[1])}},ww=(t,e)=>{let n;const i=[];for(;(n=t.exec(e))!==null;)i.push(n);return i},bw=ti("HTMLFormElement"),Tw=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,i,r){return i.toUpperCase()+r}),Jm=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),Aw=ti("RegExp"),$v=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),i={};Ta(n,(r,s)=>{let o;(o=e(r,s,t))!==!1&&(i[s]=o||r)}),Object.defineProperties(t,i)},Cw=t=>{$v(t,(e,n)=>{if(xn(t)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const i=t[n];if(xn(i)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},Rw=(t,e)=>{const n={},i=r=>{r.forEach(s=>{n[s]=!0})};return fo(t)?i(t):i(String(t).split(e)),n},Pw=()=>{},Nw=(t,e)=>t!=null&&Number.isFinite(t=+t)?t:e;function Lw(t){return!!(t&&xn(t.append)&&t[Gv]==="FormData"&&t[Vc])}const Dw=t=>{const e=new Array(10),n=(i,r)=>{if(ba(i)){if(e.indexOf(i)>=0)return;if(wa(i))return i;if(!("toJSON"in i)){e[r]=i;const s=fo(i)?[]:{};return Ta(i,(o,a)=>{const l=n(o,r+1);!Qs(l)&&(s[a]=l)}),e[r]=void 0,s}}return i};return n(t,0)},Iw=ti("AsyncFunction"),Uw=t=>t&&(ba(t)||xn(t))&&xn(t.then)&&xn(t.catch),Yv=((t,e)=>t?setImmediate:e?((n,i)=>(Xr.addEventListener("message",({source:r,data:s})=>{r===Xr&&s===n&&i.length&&i.shift()()},!1),r=>{i.push(r),Xr.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",xn(Xr.postMessage)),Fw=typeof queueMicrotask<"u"?queueMicrotask.bind(Xr):typeof process<"u"&&process.nextTick||Yv,Ow=t=>t!=null&&xn(t[Vc]),X={isArray:fo,isArrayBuffer:Wv,isBuffer:wa,isFormData:cw,isArrayBufferView:ZM,isString:JM,isNumber:jv,isBoolean:QM,isObject:ba,isPlainObject:Ol,isEmptyObject:ew,isReadableStream:fw,isRequest:dw,isResponse:hw,isHeaders:pw,isUndefined:Qs,isDate:tw,isFile:nw,isReactNativeBlob:iw,isReactNative:rw,isBlob:sw,isRegExp:Aw,isFunction:xn,isStream:aw,isURLSearchParams:uw,isTypedArray:Ew,isFileList:ow,forEach:Ta,merge:od,extend:gw,trim:mw,stripBOM:xw,inherits:vw,toFlatObject:_w,kindOf:Hc,kindOfTest:ti,endsWith:yw,toArray:Sw,forEachEntry:Mw,matchAll:ww,isHTMLForm:bw,hasOwnProperty:Jm,hasOwnProp:Jm,reduceDescriptors:$v,freezeMethods:Cw,toObjectSet:Rw,toCamelCase:Tw,noop:Pw,toFiniteNumber:Nw,findKey:Xv,global:Xr,isContextDefined:qv,isSpecCompliantForm:Lw,toJSONObject:Dw,isAsyncFn:Iw,isThenable:Uw,setImmediate:Yv,asap:Fw,isIterable:Ow};let ke=class Kv extends Error{static from(e,n,i,r,s,o){const a=new Kv(e.message,n||e.code,i,r,s);return a.cause=e,a.name=e.name,e.status!=null&&a.status==null&&(a.status=e.status),o&&Object.assign(a,o),a}constructor(e,n,i,r,s){super(e),Object.defineProperty(this,"message",{value:e,enumerable:!0,writable:!0,configurable:!0}),this.name="AxiosError",this.isAxiosError=!0,n&&(this.code=n),i&&(this.config=i),r&&(this.request=r),s&&(this.response=s,this.status=s.status)}toJSON(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:X.toJSONObject(this.config),code:this.code,status:this.status}}};ke.ERR_BAD_OPTION_VALUE="ERR_BAD_OPTION_VALUE";ke.ERR_BAD_OPTION="ERR_BAD_OPTION";ke.ECONNABORTED="ECONNABORTED";ke.ETIMEDOUT="ETIMEDOUT";ke.ERR_NETWORK="ERR_NETWORK";ke.ERR_FR_TOO_MANY_REDIRECTS="ERR_FR_TOO_MANY_REDIRECTS";ke.ERR_DEPRECATED="ERR_DEPRECATED";ke.ERR_BAD_RESPONSE="ERR_BAD_RESPONSE";ke.ERR_BAD_REQUEST="ERR_BAD_REQUEST";ke.ERR_CANCELED="ERR_CANCELED";ke.ERR_NOT_SUPPORT="ERR_NOT_SUPPORT";ke.ERR_INVALID_URL="ERR_INVALID_URL";const kw=null;function ad(t){return X.isPlainObject(t)||X.isArray(t)}function Zv(t){return X.endsWith(t,"[]")?t.slice(0,-2):t}function bu(t,e,n){return t?t.concat(e).map(function(r,s){return r=Zv(r),!n&&s?"["+r+"]":r}).join(n?".":""):e}function Bw(t){return X.isArray(t)&&!t.some(ad)}const zw=X.toFlatObject(X,{},null,function(e){return/^is[A-Z]/.test(e)});function Wc(t,e,n){if(!X.isObject(t))throw new TypeError("target must be an object");e=e||new FormData,n=X.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(y,p){return!X.isUndefined(p[y])});const i=n.metaTokens,r=n.visitor||u,s=n.dots,o=n.indexes,l=(n.Blob||typeof Blob<"u"&&Blob)&&X.isSpecCompliantForm(e);if(!X.isFunction(r))throw new TypeError("visitor must be a function");function c(m){if(m===null)return"";if(X.isDate(m))return m.toISOString();if(X.isBoolean(m))return m.toString();if(!l&&X.isBlob(m))throw new ke("Blob is not supported. Use a Buffer instead.");return X.isArrayBuffer(m)||X.isTypedArray(m)?l&&typeof Blob=="function"?new Blob([m]):Buffer.from(m):m}function u(m,y,p){let d=m;if(X.isReactNative(e)&&X.isReactNativeBlob(m))return e.append(bu(p,y,s),c(m)),!1;if(m&&!p&&typeof m=="object"){if(X.endsWith(y,"{}"))y=i?y:y.slice(0,-2),m=JSON.stringify(m);else if(X.isArray(m)&&Bw(m)||(X.isFileList(m)||X.endsWith(y,"[]"))&&(d=X.toArray(m)))return y=Zv(y),d.forEach(function(_,E){!(X.isUndefined(_)||_===null)&&e.append(o===!0?bu([y],E,s):o===null?y:y+"[]",c(_))}),!1}return ad(m)?!0:(e.append(bu(p,y,s),c(m)),!1)}const h=[],f=Object.assign(zw,{defaultVisitor:u,convertValue:c,isVisitable:ad});function g(m,y){if(!X.isUndefined(m)){if(h.indexOf(m)!==-1)throw Error("Circular reference detected in "+y.join("."));h.push(m),X.forEach(m,function(d,x){(!(X.isUndefined(d)||d===null)&&r.call(e,d,X.isString(x)?x.trim():x,y,f))===!0&&g(d,y?y.concat(x):[x])}),h.pop()}}if(!X.isObject(t))throw new TypeError("data must be an object");return g(t),e}function Qm(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(i){return e[i]})}function ip(t,e){this._pairs=[],t&&Wc(t,this,e)}const Jv=ip.prototype;Jv.append=function(e,n){this._pairs.push([e,n])};Jv.toString=function(e){const n=e?function(i){return e.call(this,i,Qm)}:Qm;return this._pairs.map(function(r){return n(r[0])+"="+n(r[1])},"").join("&")};function Vw(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function Qv(t,e,n){if(!e)return t;const i=n&&n.encode||Vw,r=X.isFunction(n)?{serialize:n}:n,s=r&&r.serialize;let o;if(s?o=s(e,r):o=X.isURLSearchParams(e)?e.toString():new ip(e,r).toString(i),o){const a=t.indexOf("#");a!==-1&&(t=t.slice(0,a)),t+=(t.indexOf("?")===-1?"?":"&")+o}return t}class eg{constructor(){this.handlers=[]}use(e,n,i){return this.handlers.push({fulfilled:e,rejected:n,synchronous:i?i.synchronous:!1,runWhen:i?i.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){X.forEach(this.handlers,function(i){i!==null&&e(i)})}}const rp={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1,legacyInterceptorReqResOrdering:!0},Hw=typeof URLSearchParams<"u"?URLSearchParams:ip,Gw=typeof FormData<"u"?FormData:null,Ww=typeof Blob<"u"?Blob:null,jw={isBrowser:!0,classes:{URLSearchParams:Hw,FormData:Gw,Blob:Ww},protocols:["http","https","file","blob","url","data"]},sp=typeof window<"u"&&typeof document<"u",ld=typeof navigator=="object"&&navigator||void 0,Xw=sp&&(!ld||["ReactNative","NativeScript","NS"].indexOf(ld.product)<0),qw=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",$w=sp&&window.location.href||"http://localhost",Yw=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:sp,hasStandardBrowserEnv:Xw,hasStandardBrowserWebWorkerEnv:qw,navigator:ld,origin:$w},Symbol.toStringTag,{value:"Module"})),tn={...Yw,...jw};function Kw(t,e){return Wc(t,new tn.classes.URLSearchParams,{visitor:function(n,i,r,s){return tn.isNode&&X.isBuffer(n)?(this.append(i,n.toString("base64")),!1):s.defaultVisitor.apply(this,arguments)},...e})}function Zw(t){return X.matchAll(/\w+|\[(\w*)]/g,t).map(e=>e[0]==="[]"?"":e[1]||e[0])}function Jw(t){const e={},n=Object.keys(t);let i;const r=n.length;let s;for(i=0;i<r;i++)s=n[i],e[s]=t[s];return e}function e_(t){function e(n,i,r,s){let o=n[s++];if(o==="__proto__")return!0;const a=Number.isFinite(+o),l=s>=n.length;return o=!o&&X.isArray(r)?r.length:o,l?(X.hasOwnProp(r,o)?r[o]=[r[o],i]:r[o]=i,!a):((!r[o]||!X.isObject(r[o]))&&(r[o]=[]),e(n,i,r[o],s)&&X.isArray(r[o])&&(r[o]=Jw(r[o])),!a)}if(X.isFormData(t)&&X.isFunction(t.entries)){const n={};return X.forEachEntry(t,(i,r)=>{e(Zw(i),r,n,0)}),n}return null}function Qw(t,e,n){if(X.isString(t))try{return(e||JSON.parse)(t),X.trim(t)}catch(i){if(i.name!=="SyntaxError")throw i}return(n||JSON.stringify)(t)}const Aa={transitional:rp,adapter:["xhr","http","fetch"],transformRequest:[function(e,n){const i=n.getContentType()||"",r=i.indexOf("application/json")>-1,s=X.isObject(e);if(s&&X.isHTMLForm(e)&&(e=new FormData(e)),X.isFormData(e))return r?JSON.stringify(e_(e)):e;if(X.isArrayBuffer(e)||X.isBuffer(e)||X.isStream(e)||X.isFile(e)||X.isBlob(e)||X.isReadableStream(e))return e;if(X.isArrayBufferView(e))return e.buffer;if(X.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let a;if(s){if(i.indexOf("application/x-www-form-urlencoded")>-1)return Kw(e,this.formSerializer).toString();if((a=X.isFileList(e))||i.indexOf("multipart/form-data")>-1){const l=this.env&&this.env.FormData;return Wc(a?{"files[]":e}:e,l&&new l,this.formSerializer)}}return s||r?(n.setContentType("application/json",!1),Qw(e)):e}],transformResponse:[function(e){const n=this.transitional||Aa.transitional,i=n&&n.forcedJSONParsing,r=this.responseType==="json";if(X.isResponse(e)||X.isReadableStream(e))return e;if(e&&X.isString(e)&&(i&&!this.responseType||r)){const o=!(n&&n.silentJSONParsing)&&r;try{return JSON.parse(e,this.parseReviver)}catch(a){if(o)throw a.name==="SyntaxError"?ke.from(a,ke.ERR_BAD_RESPONSE,this,null,this.response):a}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:tn.classes.FormData,Blob:tn.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};X.forEach(["delete","get","head","post","put","patch"],t=>{Aa.headers[t]={}});const eb=X.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),tb=t=>{const e={};let n,i,r;return t&&t.split(`
`).forEach(function(o){r=o.indexOf(":"),n=o.substring(0,r).trim().toLowerCase(),i=o.substring(r+1).trim(),!(!n||e[n]&&eb[n])&&(n==="set-cookie"?e[n]?e[n].push(i):e[n]=[i]:e[n]=e[n]?e[n]+", "+i:i)}),e},tg=Symbol("internals");function wo(t){return t&&String(t).trim().toLowerCase()}function kl(t){return t===!1||t==null?t:X.isArray(t)?t.map(kl):String(t).replace(/[\r\n]+$/,"")}function nb(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let i;for(;i=n.exec(t);)e[i[1]]=i[2];return e}const ib=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function Tu(t,e,n,i,r){if(X.isFunction(i))return i.call(this,e,n);if(r&&(e=n),!!X.isString(e)){if(X.isString(i))return e.indexOf(i)!==-1;if(X.isRegExp(i))return i.test(e)}}function rb(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,i)=>n.toUpperCase()+i)}function sb(t,e){const n=X.toCamelCase(" "+e);["get","set","has"].forEach(i=>{Object.defineProperty(t,i+n,{value:function(r,s,o){return this[i].call(this,e,r,s,o)},configurable:!0})})}let vn=class{constructor(e){e&&this.set(e)}set(e,n,i){const r=this;function s(a,l,c){const u=wo(l);if(!u)throw new Error("header name must be a non-empty string");const h=X.findKey(r,u);(!h||r[h]===void 0||c===!0||c===void 0&&r[h]!==!1)&&(r[h||l]=kl(a))}const o=(a,l)=>X.forEach(a,(c,u)=>s(c,u,l));if(X.isPlainObject(e)||e instanceof this.constructor)o(e,n);else if(X.isString(e)&&(e=e.trim())&&!ib(e))o(tb(e),n);else if(X.isObject(e)&&X.isIterable(e)){let a={},l,c;for(const u of e){if(!X.isArray(u))throw TypeError("Object iterator must return a key-value pair");a[c=u[0]]=(l=a[c])?X.isArray(l)?[...l,u[1]]:[l,u[1]]:u[1]}o(a,n)}else e!=null&&s(n,e,i);return this}get(e,n){if(e=wo(e),e){const i=X.findKey(this,e);if(i){const r=this[i];if(!n)return r;if(n===!0)return nb(r);if(X.isFunction(n))return n.call(this,r,i);if(X.isRegExp(n))return n.exec(r);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=wo(e),e){const i=X.findKey(this,e);return!!(i&&this[i]!==void 0&&(!n||Tu(this,this[i],i,n)))}return!1}delete(e,n){const i=this;let r=!1;function s(o){if(o=wo(o),o){const a=X.findKey(i,o);a&&(!n||Tu(i,i[a],a,n))&&(delete i[a],r=!0)}}return X.isArray(e)?e.forEach(s):s(e),r}clear(e){const n=Object.keys(this);let i=n.length,r=!1;for(;i--;){const s=n[i];(!e||Tu(this,this[s],s,e,!0))&&(delete this[s],r=!0)}return r}normalize(e){const n=this,i={};return X.forEach(this,(r,s)=>{const o=X.findKey(i,s);if(o){n[o]=kl(r),delete n[s];return}const a=e?rb(s):String(s).trim();a!==s&&delete n[s],n[a]=kl(r),i[a]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return X.forEach(this,(i,r)=>{i!=null&&i!==!1&&(n[r]=e&&X.isArray(i)?i.join(", "):i)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,n])=>e+": "+n).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...n){const i=new this(e);return n.forEach(r=>i.set(r)),i}static accessor(e){const i=(this[tg]=this[tg]={accessors:{}}).accessors,r=this.prototype;function s(o){const a=wo(o);i[a]||(sb(r,o),i[a]=!0)}return X.isArray(e)?e.forEach(s):s(e),this}};vn.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);X.reduceDescriptors(vn.prototype,({value:t},e)=>{let n=e[0].toUpperCase()+e.slice(1);return{get:()=>t,set(i){this[n]=i}}});X.freezeMethods(vn);function Au(t,e){const n=this||Aa,i=e||n,r=vn.from(i.headers);let s=i.data;return X.forEach(t,function(a){s=a.call(n,s,r.normalize(),e?e.status:void 0)}),r.normalize(),s}function t_(t){return!!(t&&t.__CANCEL__)}let Ca=class extends ke{constructor(e,n,i){super(e??"canceled",ke.ERR_CANCELED,n,i),this.name="CanceledError",this.__CANCEL__=!0}};function n_(t,e,n){const i=n.config.validateStatus;!n.status||!i||i(n.status)?t(n):e(new ke("Request failed with status code "+n.status,[ke.ERR_BAD_REQUEST,ke.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function ob(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}function ab(t,e){t=t||10;const n=new Array(t),i=new Array(t);let r=0,s=0,o;return e=e!==void 0?e:1e3,function(l){const c=Date.now(),u=i[s];o||(o=c),n[r]=l,i[r]=c;let h=s,f=0;for(;h!==r;)f+=n[h++],h=h%t;if(r=(r+1)%t,r===s&&(s=(s+1)%t),c-o<e)return;const g=u&&c-u;return g?Math.round(f*1e3/g):void 0}}function lb(t,e){let n=0,i=1e3/e,r,s;const o=(c,u=Date.now())=>{n=u,r=null,s&&(clearTimeout(s),s=null),t(...c)};return[(...c)=>{const u=Date.now(),h=u-n;h>=i?o(c,u):(r=c,s||(s=setTimeout(()=>{s=null,o(r)},i-h)))},()=>r&&o(r)]}const xc=(t,e,n=3)=>{let i=0;const r=ab(50,250);return lb(s=>{const o=s.loaded,a=s.lengthComputable?s.total:void 0,l=o-i,c=r(l),u=o<=a;i=o;const h={loaded:o,total:a,progress:a?o/a:void 0,bytes:l,rate:c||void 0,estimated:c&&a&&u?(a-o)/c:void 0,event:s,lengthComputable:a!=null,[e?"download":"upload"]:!0};t(h)},n)},ng=(t,e)=>{const n=t!=null;return[i=>e[0]({lengthComputable:n,total:t,loaded:i}),e[1]]},ig=t=>(...e)=>X.asap(()=>t(...e)),cb=tn.hasStandardBrowserEnv?((t,e)=>n=>(n=new URL(n,tn.origin),t.protocol===n.protocol&&t.host===n.host&&(e||t.port===n.port)))(new URL(tn.origin),tn.navigator&&/(msie|trident)/i.test(tn.navigator.userAgent)):()=>!0,ub=tn.hasStandardBrowserEnv?{write(t,e,n,i,r,s,o){if(typeof document>"u")return;const a=[`${t}=${encodeURIComponent(e)}`];X.isNumber(n)&&a.push(`expires=${new Date(n).toUTCString()}`),X.isString(i)&&a.push(`path=${i}`),X.isString(r)&&a.push(`domain=${r}`),s===!0&&a.push("secure"),X.isString(o)&&a.push(`SameSite=${o}`),document.cookie=a.join("; ")},read(t){if(typeof document>"u")return null;const e=document.cookie.match(new RegExp("(?:^|; )"+t+"=([^;]*)"));return e?decodeURIComponent(e[1]):null},remove(t){this.write(t,"",Date.now()-864e5,"/")}}:{write(){},read(){return null},remove(){}};function fb(t){return typeof t!="string"?!1:/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function db(t,e){return e?t.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):t}function i_(t,e,n){let i=!fb(e);return t&&(i||n==!1)?db(t,e):e}const rg=t=>t instanceof vn?{...t}:t;function rs(t,e){e=e||{};const n={};function i(c,u,h,f){return X.isPlainObject(c)&&X.isPlainObject(u)?X.merge.call({caseless:f},c,u):X.isPlainObject(u)?X.merge({},u):X.isArray(u)?u.slice():u}function r(c,u,h,f){if(X.isUndefined(u)){if(!X.isUndefined(c))return i(void 0,c,h,f)}else return i(c,u,h,f)}function s(c,u){if(!X.isUndefined(u))return i(void 0,u)}function o(c,u){if(X.isUndefined(u)){if(!X.isUndefined(c))return i(void 0,c)}else return i(void 0,u)}function a(c,u,h){if(h in e)return i(c,u);if(h in t)return i(void 0,c)}const l={url:s,method:s,data:s,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(c,u,h)=>r(rg(c),rg(u),h,!0)};return X.forEach(Object.keys({...t,...e}),function(u){if(u==="__proto__"||u==="constructor"||u==="prototype")return;const h=X.hasOwnProp(l,u)?l[u]:r,f=h(t[u],e[u],u);X.isUndefined(f)&&h!==a||(n[u]=f)}),n}const r_=t=>{const e=rs({},t);let{data:n,withXSRFToken:i,xsrfHeaderName:r,xsrfCookieName:s,headers:o,auth:a}=e;if(e.headers=o=vn.from(o),e.url=Qv(i_(e.baseURL,e.url,e.allowAbsoluteUrls),t.params,t.paramsSerializer),a&&o.set("Authorization","Basic "+btoa((a.username||"")+":"+(a.password?unescape(encodeURIComponent(a.password)):""))),X.isFormData(n)){if(tn.hasStandardBrowserEnv||tn.hasStandardBrowserWebWorkerEnv)o.setContentType(void 0);else if(X.isFunction(n.getHeaders)){const l=n.getHeaders(),c=["content-type","content-length"];Object.entries(l).forEach(([u,h])=>{c.includes(u.toLowerCase())&&o.set(u,h)})}}if(tn.hasStandardBrowserEnv&&(i&&X.isFunction(i)&&(i=i(e)),i||i!==!1&&cb(e.url))){const l=r&&s&&ub.read(s);l&&o.set(r,l)}return e},hb=typeof XMLHttpRequest<"u",pb=hb&&function(t){return new Promise(function(n,i){const r=r_(t);let s=r.data;const o=vn.from(r.headers).normalize();let{responseType:a,onUploadProgress:l,onDownloadProgress:c}=r,u,h,f,g,m;function y(){g&&g(),m&&m(),r.cancelToken&&r.cancelToken.unsubscribe(u),r.signal&&r.signal.removeEventListener("abort",u)}let p=new XMLHttpRequest;p.open(r.method.toUpperCase(),r.url,!0),p.timeout=r.timeout;function d(){if(!p)return;const _=vn.from("getAllResponseHeaders"in p&&p.getAllResponseHeaders()),b={data:!a||a==="text"||a==="json"?p.responseText:p.response,status:p.status,statusText:p.statusText,headers:_,config:t,request:p};n_(function(C){n(C),y()},function(C){i(C),y()},b),p=null}"onloadend"in p?p.onloadend=d:p.onreadystatechange=function(){!p||p.readyState!==4||p.status===0&&!(p.responseURL&&p.responseURL.indexOf("file:")===0)||setTimeout(d)},p.onabort=function(){p&&(i(new ke("Request aborted",ke.ECONNABORTED,t,p)),p=null)},p.onerror=function(E){const b=E&&E.message?E.message:"Network Error",T=new ke(b,ke.ERR_NETWORK,t,p);T.event=E||null,i(T),p=null},p.ontimeout=function(){let E=r.timeout?"timeout of "+r.timeout+"ms exceeded":"timeout exceeded";const b=r.transitional||rp;r.timeoutErrorMessage&&(E=r.timeoutErrorMessage),i(new ke(E,b.clarifyTimeoutError?ke.ETIMEDOUT:ke.ECONNABORTED,t,p)),p=null},s===void 0&&o.setContentType(null),"setRequestHeader"in p&&X.forEach(o.toJSON(),function(E,b){p.setRequestHeader(b,E)}),X.isUndefined(r.withCredentials)||(p.withCredentials=!!r.withCredentials),a&&a!=="json"&&(p.responseType=r.responseType),c&&([f,m]=xc(c,!0),p.addEventListener("progress",f)),l&&p.upload&&([h,g]=xc(l),p.upload.addEventListener("progress",h),p.upload.addEventListener("loadend",g)),(r.cancelToken||r.signal)&&(u=_=>{p&&(i(!_||_.type?new Ca(null,t,p):_),p.abort(),p=null)},r.cancelToken&&r.cancelToken.subscribe(u),r.signal&&(r.signal.aborted?u():r.signal.addEventListener("abort",u)));const x=ob(r.url);if(x&&tn.protocols.indexOf(x)===-1){i(new ke("Unsupported protocol "+x+":",ke.ERR_BAD_REQUEST,t));return}p.send(s||null)})},mb=(t,e)=>{const{length:n}=t=t?t.filter(Boolean):[];if(e||n){let i=new AbortController,r;const s=function(c){if(!r){r=!0,a();const u=c instanceof Error?c:this.reason;i.abort(u instanceof ke?u:new Ca(u instanceof Error?u.message:u))}};let o=e&&setTimeout(()=>{o=null,s(new ke(`timeout of ${e}ms exceeded`,ke.ETIMEDOUT))},e);const a=()=>{t&&(o&&clearTimeout(o),o=null,t.forEach(c=>{c.unsubscribe?c.unsubscribe(s):c.removeEventListener("abort",s)}),t=null)};t.forEach(c=>c.addEventListener("abort",s));const{signal:l}=i;return l.unsubscribe=()=>X.asap(a),l}},gb=function*(t,e){let n=t.byteLength;if(n<e){yield t;return}let i=0,r;for(;i<n;)r=i+e,yield t.slice(i,r),i=r},xb=async function*(t,e){for await(const n of vb(t))yield*gb(n,e)},vb=async function*(t){if(t[Symbol.asyncIterator]){yield*t;return}const e=t.getReader();try{for(;;){const{done:n,value:i}=await e.read();if(n)break;yield i}}finally{await e.cancel()}},sg=(t,e,n,i)=>{const r=xb(t,e);let s=0,o,a=l=>{o||(o=!0,i&&i(l))};return new ReadableStream({async pull(l){try{const{done:c,value:u}=await r.next();if(c){a(),l.close();return}let h=u.byteLength;if(n){let f=s+=h;n(f)}l.enqueue(new Uint8Array(u))}catch(c){throw a(c),c}},cancel(l){return a(l),r.return()}},{highWaterMark:2})},og=64*1024,{isFunction:Qa}=X,_b=(({Request:t,Response:e})=>({Request:t,Response:e}))(X.global),{ReadableStream:ag,TextEncoder:lg}=X.global,cg=(t,...e)=>{try{return!!t(...e)}catch{return!1}},yb=t=>{t=X.merge.call({skipUndefined:!0},_b,t);const{fetch:e,Request:n,Response:i}=t,r=e?Qa(e):typeof fetch=="function",s=Qa(n),o=Qa(i);if(!r)return!1;const a=r&&Qa(ag),l=r&&(typeof lg=="function"?(m=>y=>m.encode(y))(new lg):async m=>new Uint8Array(await new n(m).arrayBuffer())),c=s&&a&&cg(()=>{let m=!1;const y=new ag,p=new n(tn.origin,{body:y,method:"POST",get duplex(){return m=!0,"half"}}).headers.has("Content-Type");return y.cancel(),m&&!p}),u=o&&a&&cg(()=>X.isReadableStream(new i("").body)),h={stream:u&&(m=>m.body)};r&&["text","arrayBuffer","blob","formData","stream"].forEach(m=>{!h[m]&&(h[m]=(y,p)=>{let d=y&&y[m];if(d)return d.call(y);throw new ke(`Response type '${m}' is not supported`,ke.ERR_NOT_SUPPORT,p)})});const f=async m=>{if(m==null)return 0;if(X.isBlob(m))return m.size;if(X.isSpecCompliantForm(m))return(await new n(tn.origin,{method:"POST",body:m}).arrayBuffer()).byteLength;if(X.isArrayBufferView(m)||X.isArrayBuffer(m))return m.byteLength;if(X.isURLSearchParams(m)&&(m=m+""),X.isString(m))return(await l(m)).byteLength},g=async(m,y)=>{const p=X.toFiniteNumber(m.getContentLength());return p??f(y)};return async m=>{let{url:y,method:p,data:d,signal:x,cancelToken:_,timeout:E,onDownloadProgress:b,onUploadProgress:T,responseType:C,headers:v,withCredentials:w="same-origin",fetchOptions:V}=r_(m),P=e||fetch;C=C?(C+"").toLowerCase():"text";let z=mb([x,_&&_.toAbortSignal()],E),H=null;const K=z&&z.unsubscribe&&(()=>{z.unsubscribe()});let B;try{if(T&&c&&p!=="get"&&p!=="head"&&(B=await g(v,d))!==0){let ne=new n(y,{method:"POST",body:d,duplex:"half"}),ie;if(X.isFormData(d)&&(ie=ne.headers.get("content-type"))&&v.setContentType(ie),ne.body){const[De,He]=ng(B,xc(ig(T)));d=sg(ne.body,og,De,He)}}X.isString(w)||(w=w?"include":"omit");const F=s&&"credentials"in n.prototype,U={...V,signal:z,method:p.toUpperCase(),headers:v.normalize().toJSON(),body:d,duplex:"half",credentials:F?w:void 0};H=s&&new n(y,U);let O=await(s?P(H,V):P(y,U));const q=u&&(C==="stream"||C==="response");if(u&&(b||q&&K)){const ne={};["status","statusText","headers"].forEach(Fe=>{ne[Fe]=O[Fe]});const ie=X.toFiniteNumber(O.headers.get("content-length")),[De,He]=b&&ng(ie,xc(ig(b),!0))||[];O=new i(sg(O.body,og,De,()=>{He&&He(),K&&K()}),ne)}C=C||"text";let k=await h[X.findKey(h,C)||"text"](O,m);return!q&&K&&K(),await new Promise((ne,ie)=>{n_(ne,ie,{data:k,headers:vn.from(O.headers),status:O.status,statusText:O.statusText,config:m,request:H})})}catch(F){throw K&&K(),F&&F.name==="TypeError"&&/Load failed|fetch/i.test(F.message)?Object.assign(new ke("Network Error",ke.ERR_NETWORK,m,H,F&&F.response),{cause:F.cause||F}):ke.from(F,F&&F.code,m,H,F&&F.response)}}},Sb=new Map,s_=t=>{let e=t&&t.env||{};const{fetch:n,Request:i,Response:r}=e,s=[i,r,n];let o=s.length,a=o,l,c,u=Sb;for(;a--;)l=s[a],c=u.get(l),c===void 0&&u.set(l,c=a?new Map:yb(e)),u=c;return c};s_();const op={http:kw,xhr:pb,fetch:{get:s_}};X.forEach(op,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch{}Object.defineProperty(t,"adapterName",{value:e})}});const ug=t=>`- ${t}`,Eb=t=>X.isFunction(t)||t===null||t===!1;function Mb(t,e){t=X.isArray(t)?t:[t];const{length:n}=t;let i,r;const s={};for(let o=0;o<n;o++){i=t[o];let a;if(r=i,!Eb(i)&&(r=op[(a=String(i)).toLowerCase()],r===void 0))throw new ke(`Unknown adapter '${a}'`);if(r&&(X.isFunction(r)||(r=r.get(e))))break;s[a||"#"+o]=r}if(!r){const o=Object.entries(s).map(([l,c])=>`adapter ${l} `+(c===!1?"is not supported by the environment":"is not available in the build"));let a=n?o.length>1?`since :
`+o.map(ug).join(`
`):" "+ug(o[0]):"as no adapter specified";throw new ke("There is no suitable adapter to dispatch the request "+a,"ERR_NOT_SUPPORT")}return r}const o_={getAdapter:Mb,adapters:op};function Cu(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new Ca(null,t)}function fg(t){return Cu(t),t.headers=vn.from(t.headers),t.data=Au.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),o_.getAdapter(t.adapter||Aa.adapter,t)(t).then(function(i){return Cu(t),i.data=Au.call(t,t.transformResponse,i),i.headers=vn.from(i.headers),i},function(i){return t_(i)||(Cu(t),i&&i.response&&(i.response.data=Au.call(t,t.transformResponse,i.response),i.response.headers=vn.from(i.response.headers))),Promise.reject(i)})}const a_="1.14.0",jc={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{jc[t]=function(i){return typeof i===t||"a"+(e<1?"n ":" ")+t}});const dg={};jc.transitional=function(e,n,i){function r(s,o){return"[Axios v"+a_+"] Transitional option '"+s+"'"+o+(i?". "+i:"")}return(s,o,a)=>{if(e===!1)throw new ke(r(o," has been removed"+(n?" in "+n:"")),ke.ERR_DEPRECATED);return n&&!dg[o]&&(dg[o]=!0,console.warn(r(o," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(s,o,a):!0}};jc.spelling=function(e){return(n,i)=>(console.warn(`${i} is likely a misspelling of ${e}`),!0)};function wb(t,e,n){if(typeof t!="object")throw new ke("options must be an object",ke.ERR_BAD_OPTION_VALUE);const i=Object.keys(t);let r=i.length;for(;r-- >0;){const s=i[r],o=e[s];if(o){const a=t[s],l=a===void 0||o(a,s,t);if(l!==!0)throw new ke("option "+s+" must be "+l,ke.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new ke("Unknown option "+s,ke.ERR_BAD_OPTION)}}const Bl={assertOptions:wb,validators:jc},Pn=Bl.validators;let Zr=class{constructor(e){this.defaults=e||{},this.interceptors={request:new eg,response:new eg}}async request(e,n){try{return await this._request(e,n)}catch(i){if(i instanceof Error){let r={};Error.captureStackTrace?Error.captureStackTrace(r):r=new Error;const s=r.stack?r.stack.replace(/^.+\n/,""):"";try{i.stack?s&&!String(i.stack).endsWith(s.replace(/^.+\n.+\n/,""))&&(i.stack+=`
`+s):i.stack=s}catch{}}throw i}}_request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=rs(this.defaults,n);const{transitional:i,paramsSerializer:r,headers:s}=n;i!==void 0&&Bl.assertOptions(i,{silentJSONParsing:Pn.transitional(Pn.boolean),forcedJSONParsing:Pn.transitional(Pn.boolean),clarifyTimeoutError:Pn.transitional(Pn.boolean),legacyInterceptorReqResOrdering:Pn.transitional(Pn.boolean)},!1),r!=null&&(X.isFunction(r)?n.paramsSerializer={serialize:r}:Bl.assertOptions(r,{encode:Pn.function,serialize:Pn.function},!0)),n.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?n.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:n.allowAbsoluteUrls=!0),Bl.assertOptions(n,{baseUrl:Pn.spelling("baseURL"),withXsrfToken:Pn.spelling("withXSRFToken")},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o=s&&X.merge(s.common,s[n.method]);s&&X.forEach(["delete","get","head","post","put","patch","common"],m=>{delete s[m]}),n.headers=vn.concat(o,s);const a=[];let l=!0;this.interceptors.request.forEach(function(y){if(typeof y.runWhen=="function"&&y.runWhen(n)===!1)return;l=l&&y.synchronous;const p=n.transitional||rp;p&&p.legacyInterceptorReqResOrdering?a.unshift(y.fulfilled,y.rejected):a.push(y.fulfilled,y.rejected)});const c=[];this.interceptors.response.forEach(function(y){c.push(y.fulfilled,y.rejected)});let u,h=0,f;if(!l){const m=[fg.bind(this),void 0];for(m.unshift(...a),m.push(...c),f=m.length,u=Promise.resolve(n);h<f;)u=u.then(m[h++],m[h++]);return u}f=a.length;let g=n;for(;h<f;){const m=a[h++],y=a[h++];try{g=m(g)}catch(p){y.call(this,p);break}}try{u=fg.call(this,g)}catch(m){return Promise.reject(m)}for(h=0,f=c.length;h<f;)u=u.then(c[h++],c[h++]);return u}getUri(e){e=rs(this.defaults,e);const n=i_(e.baseURL,e.url,e.allowAbsoluteUrls);return Qv(n,e.params,e.paramsSerializer)}};X.forEach(["delete","get","head","options"],function(e){Zr.prototype[e]=function(n,i){return this.request(rs(i||{},{method:e,url:n,data:(i||{}).data}))}});X.forEach(["post","put","patch"],function(e){function n(i){return function(s,o,a){return this.request(rs(a||{},{method:e,headers:i?{"Content-Type":"multipart/form-data"}:{},url:s,data:o}))}}Zr.prototype[e]=n(),Zr.prototype[e+"Form"]=n(!0)});let bb=class l_{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(s){n=s});const i=this;this.promise.then(r=>{if(!i._listeners)return;let s=i._listeners.length;for(;s-- >0;)i._listeners[s](r);i._listeners=null}),this.promise.then=r=>{let s;const o=new Promise(a=>{i.subscribe(a),s=a}).then(r);return o.cancel=function(){i.unsubscribe(s)},o},e(function(s,o,a){i.reason||(i.reason=new Ca(s,o,a),n(i.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const e=new AbortController,n=i=>{e.abort(i)};return this.subscribe(n),e.signal.unsubscribe=()=>this.unsubscribe(n),e.signal}static source(){let e;return{token:new l_(function(r){e=r}),cancel:e}}};function Tb(t){return function(n){return t.apply(null,n)}}function Ab(t){return X.isObject(t)&&t.isAxiosError===!0}const cd={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(cd).forEach(([t,e])=>{cd[e]=t});function c_(t){const e=new Zr(t),n=Hv(Zr.prototype.request,e);return X.extend(n,Zr.prototype,e,{allOwnKeys:!0}),X.extend(n,e,null,{allOwnKeys:!0}),n.create=function(r){return c_(rs(t,r))},n}const Pt=c_(Aa);Pt.Axios=Zr;Pt.CanceledError=Ca;Pt.CancelToken=bb;Pt.isCancel=t_;Pt.VERSION=a_;Pt.toFormData=Wc;Pt.AxiosError=ke;Pt.Cancel=Pt.CanceledError;Pt.all=function(e){return Promise.all(e)};Pt.spread=Tb;Pt.isAxiosError=Ab;Pt.mergeConfig=rs;Pt.AxiosHeaders=vn;Pt.formToJSON=t=>e_(X.isHTMLForm(t)?new FormData(t):t);Pt.getAdapter=o_.getAdapter;Pt.HttpStatusCode=cd;Pt.default=Pt;const{Axios:J3,AxiosError:Q3,CanceledError:e2,isCancel:t2,CancelToken:n2,VERSION:i2,all:r2,Cancel:s2,isAxiosError:o2,spread:a2,toFormData:l2,AxiosHeaders:c2,HttpStatusCode:u2,formToJSON:f2,getAdapter:d2,mergeConfig:h2}=Pt,Ra=Pt.create({baseURL:"http://localhost:8080",headers:{"Content-Type":"application/json"}});Ra.interceptors.request.use(t=>{const e=localStorage.getItem("token");return e&&(t.headers.Authorization=`Bearer ${e}`),t},t=>Promise.reject(t));Ra.interceptors.response.use(t=>t,t=>(t.response&&t.response.status===401&&(localStorage.removeItem("token"),window.location.href="/login"),Promise.reject(t)));/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ap="183",Cb=0,hg=1,Rb=2,zl=1,Pb=2,ko=3,Er=0,_n=1,ci=2,Ii=0,Ws=1,pg=2,mg=3,gg=4,Nb=5,Vr=100,Lb=101,Db=102,Ib=103,Ub=104,Fb=200,Ob=201,kb=202,Bb=203,ud=204,fd=205,zb=206,Vb=207,Hb=208,Gb=209,Wb=210,jb=211,Xb=212,qb=213,$b=214,dd=0,hd=1,pd=2,eo=3,md=4,gd=5,xd=6,vd=7,u_=0,Yb=1,Kb=2,pi=0,f_=1,d_=2,h_=3,p_=4,m_=5,g_=6,x_=7,v_=300,ss=301,to=302,Ru=303,Pu=304,Xc=306,_d=1e3,Li=1001,yd=1002,Xt=1003,Zb=1004,el=1005,nn=1006,Nu=1007,qr=1008,Un=1009,__=1010,y_=1011,pa=1012,lp=1013,gi=1014,ui=1015,Vi=1016,cp=1017,up=1018,ma=1020,S_=35902,E_=35899,M_=1021,w_=1022,Kn=1023,Hi=1026,$r=1027,b_=1028,fp=1029,no=1030,dp=1031,hp=1033,Vl=33776,Hl=33777,Gl=33778,Wl=33779,Sd=35840,Ed=35841,Md=35842,wd=35843,bd=36196,Td=37492,Ad=37496,Cd=37488,Rd=37489,Pd=37490,Nd=37491,Ld=37808,Dd=37809,Id=37810,Ud=37811,Fd=37812,Od=37813,kd=37814,Bd=37815,zd=37816,Vd=37817,Hd=37818,Gd=37819,Wd=37820,jd=37821,Xd=36492,qd=36494,$d=36495,Yd=36283,Kd=36284,Zd=36285,Jd=36286,Jb=3200,Qb=0,e1=1,or="",Ln="srgb",io="srgb-linear",vc="linear",st="srgb",ds=7680,xg=519,t1=512,n1=513,i1=514,pp=515,r1=516,s1=517,mp=518,o1=519,vg=35044,_g="300 es",fi=2e3,_c=2001;function a1(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function yc(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function l1(){const t=yc("canvas");return t.style.display="block",t}const yg={};function Sg(...t){const e="THREE."+t.shift();console.log(e,...t)}function T_(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function ze(...t){t=T_(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function nt(...t){t=T_(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function Sc(...t){const e=t.join(" ");e in yg||(yg[e]=!0,ze(...t))}function c1(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const u1={[dd]:hd,[pd]:xd,[md]:vd,[eo]:gd,[hd]:dd,[xd]:pd,[vd]:md,[gd]:eo};class ho{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Lu=Math.PI/180,Qd=180/Math.PI;function Pa(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Jt[t&255]+Jt[t>>8&255]+Jt[t>>16&255]+Jt[t>>24&255]+"-"+Jt[e&255]+Jt[e>>8&255]+"-"+Jt[e>>16&15|64]+Jt[e>>24&255]+"-"+Jt[n&63|128]+Jt[n>>8&255]+"-"+Jt[n>>16&255]+Jt[n>>24&255]+Jt[i&255]+Jt[i>>8&255]+Jt[i>>16&255]+Jt[i>>24&255]).toLowerCase()}function Ze(t,e,n){return Math.max(e,Math.min(n,t))}function f1(t,e){return(t%e+e)%e}function Du(t,e,n){return(1-n)*t+n*e}function bo(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function fn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class ut{constructor(e=0,n=0){ut.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Ze(this.x,e.x,n.x),this.y=Ze(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Ze(this.x,e,n),this.y=Ze(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ze(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Ze(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class po{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],h=i[r+3],f=s[o+0],g=s[o+1],m=s[o+2],y=s[o+3];if(h!==y||l!==f||c!==g||u!==m){let p=l*f+c*g+u*m+h*y;p<0&&(f=-f,g=-g,m=-m,y=-y,p=-p);let d=1-a;if(p<.9995){const x=Math.acos(p),_=Math.sin(x);d=Math.sin(d*x)/_,a=Math.sin(a*x)/_,l=l*d+f*a,c=c*d+g*a,u=u*d+m*a,h=h*d+y*a}else{l=l*d+f*a,c=c*d+g*a,u=u*d+m*a,h=h*d+y*a;const x=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=x,c*=x,u*=x,h*=x}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],h=s[o],f=s[o+1],g=s[o+2],m=s[o+3];return e[n]=a*m+u*h+l*g-c*f,e[n+1]=l*m+u*f+c*h-a*g,e[n+2]=c*m+u*g+a*f-l*h,e[n+3]=u*m-a*h-l*f-c*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),h=a(s/2),f=l(i/2),g=l(r/2),m=l(s/2);switch(o){case"XYZ":this._x=f*u*h+c*g*m,this._y=c*g*h-f*u*m,this._z=c*u*m+f*g*h,this._w=c*u*h-f*g*m;break;case"YXZ":this._x=f*u*h+c*g*m,this._y=c*g*h-f*u*m,this._z=c*u*m-f*g*h,this._w=c*u*h+f*g*m;break;case"ZXY":this._x=f*u*h-c*g*m,this._y=c*g*h+f*u*m,this._z=c*u*m+f*g*h,this._w=c*u*h-f*g*m;break;case"ZYX":this._x=f*u*h-c*g*m,this._y=c*g*h+f*u*m,this._z=c*u*m-f*g*h,this._w=c*u*h+f*g*m;break;case"YZX":this._x=f*u*h+c*g*m,this._y=c*g*h+f*u*m,this._z=c*u*m-f*g*h,this._w=c*u*h-f*g*m;break;case"XZY":this._x=f*u*h-c*g*m,this._y=c*g*h-f*u*m,this._z=c*u*m+f*g*h,this._w=c*u*h+f*g*m;break;default:ze("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],h=n[10],f=i+a+h;if(f>0){const g=.5/Math.sqrt(f+1);this._w=.25/g,this._x=(u-l)*g,this._y=(s-c)*g,this._z=(o-r)*g}else if(i>a&&i>h){const g=2*Math.sqrt(1+i-a-h);this._w=(u-l)/g,this._x=.25*g,this._y=(r+o)/g,this._z=(s+c)/g}else if(a>h){const g=2*Math.sqrt(1+a-i-h);this._w=(s-c)/g,this._x=(r+o)/g,this._y=.25*g,this._z=(l+u)/g}else{const g=2*Math.sqrt(1+h-i-a);this._w=(o-r)/g,this._x=(s+c)/g,this._y=(l+u)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ze(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){let i=e._x,r=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,r=-r,s=-s,o=-o,a=-a);let l=1-n;if(a<.9995){const c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,n=Math.sin(n*c)/u,this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+o*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+o*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class j{constructor(e=0,n=0,i=0){j.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Eg.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Eg.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*n-s*r),h=2*(s*i-o*n);return this.x=n+l*c+o*h-a*u,this.y=i+l*u+a*c-s*h,this.z=r+l*h+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Ze(this.x,e.x,n.x),this.y=Ze(this.y,e.y,n.y),this.z=Ze(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Ze(this.x,e,n),this.y=Ze(this.y,e,n),this.z=Ze(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ze(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Iu.copy(this).projectOnVector(e),this.sub(Iu)}reflect(e){return this.sub(Iu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Ze(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Iu=new j,Eg=new po;class Ge{constructor(e,n,i,r,s,o,a,l,c){Ge.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],f=i[2],g=i[5],m=i[8],y=r[0],p=r[3],d=r[6],x=r[1],_=r[4],E=r[7],b=r[2],T=r[5],C=r[8];return s[0]=o*y+a*x+l*b,s[3]=o*p+a*_+l*T,s[6]=o*d+a*E+l*C,s[1]=c*y+u*x+h*b,s[4]=c*p+u*_+h*T,s[7]=c*d+u*E+h*C,s[2]=f*y+g*x+m*b,s[5]=f*p+g*_+m*T,s[8]=f*d+g*E+m*C,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*s,g=c*s-o*l,m=n*h+i*f+r*g;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/m;return e[0]=h*y,e[1]=(r*c-u*i)*y,e[2]=(a*i-r*o)*y,e[3]=f*y,e[4]=(u*n-r*l)*y,e[5]=(r*s-a*n)*y,e[6]=g*y,e[7]=(i*l-c*n)*y,e[8]=(o*n-i*s)*y,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Uu.makeScale(e,n)),this}rotate(e){return this.premultiply(Uu.makeRotation(-e)),this}translate(e,n){return this.premultiply(Uu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Uu=new Ge,Mg=new Ge().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),wg=new Ge().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function d1(){const t={enabled:!0,workingColorSpace:io,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===st&&(r.r=Ui(r.r),r.g=Ui(r.g),r.b=Ui(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===st&&(r.r=js(r.r),r.g=js(r.g),r.b=js(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===or?vc:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Sc("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Sc("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[io]:{primaries:e,whitePoint:i,transfer:vc,toXYZ:Mg,fromXYZ:wg,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Ln},outputColorSpaceConfig:{drawingBufferColorSpace:Ln}},[Ln]:{primaries:e,whitePoint:i,transfer:st,toXYZ:Mg,fromXYZ:wg,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Ln}}}),t}const Qe=d1();function Ui(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function js(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let hs;class h1{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{hs===void 0&&(hs=yc("canvas")),hs.width=e.width,hs.height=e.height;const r=hs.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=hs}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=yc("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Ui(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Ui(n[i]/255)*255):n[i]=Ui(n[i]);return{data:n,width:e.width,height:e.height}}else return ze("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let p1=0;class gp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:p1++}),this.uuid=Pa(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Fu(r[o].image)):s.push(Fu(r[o]))}else s=Fu(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Fu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?h1.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(ze("Texture: Unable to serialize Texture."),{})}let m1=0;const Ou=new j;class ln extends ho{constructor(e=ln.DEFAULT_IMAGE,n=ln.DEFAULT_MAPPING,i=Li,r=Li,s=nn,o=qr,a=Kn,l=Un,c=ln.DEFAULT_ANISOTROPY,u=or){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:m1++}),this.uuid=Pa(),this.name="",this.source=new gp(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ut(0,0),this.repeat=new ut(1,1),this.center=new ut(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ou).x}get height(){return this.source.getSize(Ou).y}get depth(){return this.source.getSize(Ou).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){ze(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){ze(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==v_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case _d:e.x=e.x-Math.floor(e.x);break;case Li:e.x=e.x<0?0:1;break;case yd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case _d:e.y=e.y-Math.floor(e.y);break;case Li:e.y=e.y<0?0:1;break;case yd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}ln.DEFAULT_IMAGE=null;ln.DEFAULT_MAPPING=v_;ln.DEFAULT_ANISOTROPY=1;class Ct{constructor(e=0,n=0,i=0,r=1){Ct.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],g=l[5],m=l[9],y=l[2],p=l[6],d=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-y)<.01&&Math.abs(m-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+y)<.1&&Math.abs(m+p)<.1&&Math.abs(c+g+d-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const _=(c+1)/2,E=(g+1)/2,b=(d+1)/2,T=(u+f)/4,C=(h+y)/4,v=(m+p)/4;return _>E&&_>b?_<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(_),r=T/i,s=C/i):E>b?E<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),i=T/r,s=v/r):b<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(b),i=C/s,r=v/s),this.set(i,r,s,n),this}let x=Math.sqrt((p-m)*(p-m)+(h-y)*(h-y)+(f-u)*(f-u));return Math.abs(x)<.001&&(x=1),this.x=(p-m)/x,this.y=(h-y)/x,this.z=(f-u)/x,this.w=Math.acos((c+g+d-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Ze(this.x,e.x,n.x),this.y=Ze(this.y,e.y,n.y),this.z=Ze(this.z,e.z,n.z),this.w=Ze(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Ze(this.x,e,n),this.y=Ze(this.y,e,n),this.z=Ze(this.z,e,n),this.w=Ze(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ze(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class g1 extends ho{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:nn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new Ct(0,0,e,n),this.scissorTest=!1,this.viewport=new Ct(0,0,e,n),this.textures=[];const r={width:e,height:n,depth:i.depth},s=new ln(r),o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const n={minFilter:nn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new gp(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class mi extends g1{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class A_ extends ln{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=Li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class x1 extends ln{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=Li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class It{constructor(e,n,i,r,s,o,a,l,c,u,h,f,g,m,y,p){It.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,u,h,f,g,m,y,p)}set(e,n,i,r,s,o,a,l,c,u,h,f,g,m,y,p){const d=this.elements;return d[0]=e,d[4]=n,d[8]=i,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=u,d[10]=h,d[14]=f,d[3]=g,d[7]=m,d[11]=y,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new It().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinant()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const n=this.elements,i=e.elements,r=1/ps.setFromMatrixColumn(e,0).length(),s=1/ps.setFromMatrixColumn(e,1).length(),o=1/ps.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=o*u,g=o*h,m=a*u,y=a*h;n[0]=l*u,n[4]=-l*h,n[8]=c,n[1]=g+m*c,n[5]=f-y*c,n[9]=-a*l,n[2]=y-f*c,n[6]=m+g*c,n[10]=o*l}else if(e.order==="YXZ"){const f=l*u,g=l*h,m=c*u,y=c*h;n[0]=f+y*a,n[4]=m*a-g,n[8]=o*c,n[1]=o*h,n[5]=o*u,n[9]=-a,n[2]=g*a-m,n[6]=y+f*a,n[10]=o*l}else if(e.order==="ZXY"){const f=l*u,g=l*h,m=c*u,y=c*h;n[0]=f-y*a,n[4]=-o*h,n[8]=m+g*a,n[1]=g+m*a,n[5]=o*u,n[9]=y-f*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const f=o*u,g=o*h,m=a*u,y=a*h;n[0]=l*u,n[4]=m*c-g,n[8]=f*c+y,n[1]=l*h,n[5]=y*c+f,n[9]=g*c-m,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const f=o*l,g=o*c,m=a*l,y=a*c;n[0]=l*u,n[4]=y-f*h,n[8]=m*h+g,n[1]=h,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=g*h+m,n[10]=f-y*h}else if(e.order==="XZY"){const f=o*l,g=o*c,m=a*l,y=a*c;n[0]=l*u,n[4]=-h,n[8]=c*u,n[1]=f*h+y,n[5]=o*u,n[9]=g*h-m,n[2]=m*h-g,n[6]=a*u,n[10]=y*h+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(v1,e,_1)}lookAt(e,n,i){const r=this.elements;return Sn.subVectors(e,n),Sn.lengthSq()===0&&(Sn.z=1),Sn.normalize(),$i.crossVectors(i,Sn),$i.lengthSq()===0&&(Math.abs(i.z)===1?Sn.x+=1e-4:Sn.z+=1e-4,Sn.normalize(),$i.crossVectors(i,Sn)),$i.normalize(),tl.crossVectors(Sn,$i),r[0]=$i.x,r[4]=tl.x,r[8]=Sn.x,r[1]=$i.y,r[5]=tl.y,r[9]=Sn.y,r[2]=$i.z,r[6]=tl.z,r[10]=Sn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],f=i[9],g=i[13],m=i[2],y=i[6],p=i[10],d=i[14],x=i[3],_=i[7],E=i[11],b=i[15],T=r[0],C=r[4],v=r[8],w=r[12],V=r[1],P=r[5],z=r[9],H=r[13],K=r[2],B=r[6],F=r[10],U=r[14],O=r[3],q=r[7],k=r[11],ne=r[15];return s[0]=o*T+a*V+l*K+c*O,s[4]=o*C+a*P+l*B+c*q,s[8]=o*v+a*z+l*F+c*k,s[12]=o*w+a*H+l*U+c*ne,s[1]=u*T+h*V+f*K+g*O,s[5]=u*C+h*P+f*B+g*q,s[9]=u*v+h*z+f*F+g*k,s[13]=u*w+h*H+f*U+g*ne,s[2]=m*T+y*V+p*K+d*O,s[6]=m*C+y*P+p*B+d*q,s[10]=m*v+y*z+p*F+d*k,s[14]=m*w+y*H+p*U+d*ne,s[3]=x*T+_*V+E*K+b*O,s[7]=x*C+_*P+E*B+b*q,s[11]=x*v+_*z+E*F+b*k,s[15]=x*w+_*H+E*U+b*ne,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],g=e[14],m=e[3],y=e[7],p=e[11],d=e[15],x=l*g-c*f,_=a*g-c*h,E=a*f-l*h,b=o*g-c*u,T=o*f-l*u,C=o*h-a*u;return n*(y*x-p*_+d*E)-i*(m*x-p*b+d*T)+r*(m*_-y*b+d*C)-s*(m*E-y*T+p*C)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],g=e[11],m=e[12],y=e[13],p=e[14],d=e[15],x=n*a-i*o,_=n*l-r*o,E=n*c-s*o,b=i*l-r*a,T=i*c-s*a,C=r*c-s*l,v=u*y-h*m,w=u*p-f*m,V=u*d-g*m,P=h*p-f*y,z=h*d-g*y,H=f*d-g*p,K=x*H-_*z+E*P+b*V-T*w+C*v;if(K===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/K;return e[0]=(a*H-l*z+c*P)*B,e[1]=(r*z-i*H-s*P)*B,e[2]=(y*C-p*T+d*b)*B,e[3]=(f*T-h*C-g*b)*B,e[4]=(l*V-o*H-c*w)*B,e[5]=(n*H-r*V+s*w)*B,e[6]=(p*E-m*C-d*_)*B,e[7]=(u*C-f*E+g*_)*B,e[8]=(o*z-a*V+c*v)*B,e[9]=(i*V-n*z-s*v)*B,e[10]=(m*T-y*E+d*x)*B,e[11]=(h*E-u*T-g*x)*B,e[12]=(a*w-o*P-l*v)*B,e[13]=(n*P-i*w+r*v)*B,e[14]=(y*_-m*b-p*x)*B,e[15]=(u*b-h*_+f*x)*B,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,u=o+o,h=a+a,f=s*c,g=s*u,m=s*h,y=o*u,p=o*h,d=a*h,x=l*c,_=l*u,E=l*h,b=i.x,T=i.y,C=i.z;return r[0]=(1-(y+d))*b,r[1]=(g+E)*b,r[2]=(m-_)*b,r[3]=0,r[4]=(g-E)*T,r[5]=(1-(f+d))*T,r[6]=(p+x)*T,r[7]=0,r[8]=(m+_)*C,r[9]=(p-x)*C,r[10]=(1-(f+y))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinant();if(s===0)return i.set(1,1,1),n.identity(),this;let o=ps.set(r[0],r[1],r[2]).length();const a=ps.set(r[4],r[5],r[6]).length(),l=ps.set(r[8],r[9],r[10]).length();s<0&&(o=-o),Hn.copy(this);const c=1/o,u=1/a,h=1/l;return Hn.elements[0]*=c,Hn.elements[1]*=c,Hn.elements[2]*=c,Hn.elements[4]*=u,Hn.elements[5]*=u,Hn.elements[6]*=u,Hn.elements[8]*=h,Hn.elements[9]*=h,Hn.elements[10]*=h,n.setFromRotationMatrix(Hn),i.x=o,i.y=a,i.z=l,this}makePerspective(e,n,i,r,s,o,a=fi,l=!1){const c=this.elements,u=2*s/(n-e),h=2*s/(i-r),f=(n+e)/(n-e),g=(i+r)/(i-r);let m,y;if(l)m=s/(o-s),y=o*s/(o-s);else if(a===fi)m=-(o+s)/(o-s),y=-2*o*s/(o-s);else if(a===_c)m=-o/(o-s),y=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=g,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=fi,l=!1){const c=this.elements,u=2/(n-e),h=2/(i-r),f=-(n+e)/(n-e),g=-(i+r)/(i-r);let m,y;if(l)m=1/(o-s),y=o/(o-s);else if(a===fi)m=-2/(o-s),y=-(o+s)/(o-s);else if(a===_c)m=-1/(o-s),y=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=h,c[9]=0,c[13]=g,c[2]=0,c[6]=0,c[10]=m,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const ps=new j,Hn=new It,v1=new j(0,0,0),_1=new j(1,1,1),$i=new j,tl=new j,Sn=new j,bg=new It,Tg=new po;class Gi{constructor(e=0,n=0,i=0,r=Gi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],h=r[2],f=r[6],g=r[10];switch(n){case"XYZ":this._y=Math.asin(Ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,g),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ze(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,g),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ze(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,g),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ze(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,g),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ze(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,g));break;case"XZY":this._z=Math.asin(-Ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,g),this._y=0);break;default:ze("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return bg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(bg,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Tg.setFromEuler(this),this.setFromQuaternion(Tg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Gi.DEFAULT_ORDER="XYZ";class C_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let y1=0;const Ag=new j,ms=new po,Ei=new It,nl=new j,To=new j,S1=new j,E1=new po,Cg=new j(1,0,0),Rg=new j(0,1,0),Pg=new j(0,0,1),Ng={type:"added"},M1={type:"removed"},gs={type:"childadded",child:null},ku={type:"childremoved",child:null};class Tn extends ho{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:y1++}),this.uuid=Pa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Tn.DEFAULT_UP.clone();const e=new j,n=new Gi,i=new po,r=new j(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new It},normalMatrix:{value:new Ge}}),this.matrix=new It,this.matrixWorld=new It,this.matrixAutoUpdate=Tn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new C_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return ms.setFromAxisAngle(e,n),this.quaternion.multiply(ms),this}rotateOnWorldAxis(e,n){return ms.setFromAxisAngle(e,n),this.quaternion.premultiply(ms),this}rotateX(e){return this.rotateOnAxis(Cg,e)}rotateY(e){return this.rotateOnAxis(Rg,e)}rotateZ(e){return this.rotateOnAxis(Pg,e)}translateOnAxis(e,n){return Ag.copy(e).applyQuaternion(this.quaternion),this.position.add(Ag.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Cg,e)}translateY(e){return this.translateOnAxis(Rg,e)}translateZ(e){return this.translateOnAxis(Pg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ei.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?nl.copy(e):nl.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),To.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ei.lookAt(To,nl,this.up):Ei.lookAt(nl,To,this.up),this.quaternion.setFromRotationMatrix(Ei),r&&(Ei.extractRotation(r.matrixWorld),ms.setFromRotationMatrix(Ei),this.quaternion.premultiply(ms.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(nt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ng),gs.child=e,this.dispatchEvent(gs),gs.child=null):nt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(M1),ku.child=e,this.dispatchEvent(ku),ku.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ei.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ei.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ei),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ng),gs.child=e,this.dispatchEvent(gs),gs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(To,e,S1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(To,E1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*r,s[13]+=i-s[1]*n-s[5]*i-s[9]*r,s[14]+=r-s[2]*n-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),g=o(e.animations),m=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),g.length>0&&(i.animations=g),m.length>0&&(i.nodes=m)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Tn.DEFAULT_UP=new j(0,1,0);Tn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class il extends Tn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const w1={type:"move"};class Bu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new il,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new il,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new il,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const y of e.hand.values()){const p=n.getJointPose(y,i),d=this._getHandJoint(c,y);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),g=.02,m=.005;c.inputState.pinching&&f>g+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=g-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(w1)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new il;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const R_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Yi={h:0,s:0,l:0},rl={h:0,s:0,l:0};function zu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class ot{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Ln){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=Qe.workingColorSpace){return this.r=e,this.g=n,this.b=i,Qe.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=Qe.workingColorSpace){if(e=f1(e,1),n=Ze(n,0,1),i=Ze(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=zu(o,s,e+1/3),this.g=zu(o,s,e),this.b=zu(o,s,e-1/3)}return Qe.colorSpaceToWorking(this,r),this}setStyle(e,n=Ln){function i(s){s!==void 0&&parseFloat(s)<1&&ze("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:ze("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);ze("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Ln){const i=R_[e.toLowerCase()];return i!==void 0?this.setHex(i,n):ze("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ui(e.r),this.g=Ui(e.g),this.b=Ui(e.b),this}copyLinearToSRGB(e){return this.r=js(e.r),this.g=js(e.g),this.b=js(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ln){return Qe.workingToColorSpace(Qt.copy(this),e),Math.round(Ze(Qt.r*255,0,255))*65536+Math.round(Ze(Qt.g*255,0,255))*256+Math.round(Ze(Qt.b*255,0,255))}getHexString(e=Ln){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Qe.workingColorSpace){Qe.workingToColorSpace(Qt.copy(this),n);const i=Qt.r,r=Qt.g,s=Qt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=Qe.workingColorSpace){return Qe.workingToColorSpace(Qt.copy(this),n),e.r=Qt.r,e.g=Qt.g,e.b=Qt.b,e}getStyle(e=Ln){Qe.workingToColorSpace(Qt.copy(this),e);const n=Qt.r,i=Qt.g,r=Qt.b;return e!==Ln?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Yi),this.setHSL(Yi.h+e,Yi.s+n,Yi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Yi),e.getHSL(rl);const i=Du(Yi.h,rl.h,n),r=Du(Yi.s,rl.s,n),s=Du(Yi.l,rl.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Qt=new ot;ot.NAMES=R_;class b1 extends Tn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Gi,this.environmentIntensity=1,this.environmentRotation=new Gi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Gn=new j,Mi=new j,Vu=new j,wi=new j,xs=new j,vs=new j,Lg=new j,Hu=new j,Gu=new j,Wu=new j,ju=new Ct,Xu=new Ct,qu=new Ct;class Yn{constructor(e=new j,n=new j,i=new j){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Gn.subVectors(e,n),r.cross(Gn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Gn.subVectors(r,n),Mi.subVectors(i,n),Vu.subVectors(e,n);const o=Gn.dot(Gn),a=Gn.dot(Mi),l=Gn.dot(Vu),c=Mi.dot(Mi),u=Mi.dot(Vu),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const f=1/h,g=(c*l-a*u)*f,m=(o*u-a*l)*f;return s.set(1-g-m,m,g)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,wi)===null?!1:wi.x>=0&&wi.y>=0&&wi.x+wi.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,wi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,wi.x),l.addScaledVector(o,wi.y),l.addScaledVector(a,wi.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return ju.setScalar(0),Xu.setScalar(0),qu.setScalar(0),ju.fromBufferAttribute(e,n),Xu.fromBufferAttribute(e,i),qu.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(ju,s.x),o.addScaledVector(Xu,s.y),o.addScaledVector(qu,s.z),o}static isFrontFacing(e,n,i,r){return Gn.subVectors(i,n),Mi.subVectors(e,n),Gn.cross(Mi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Gn.subVectors(this.c,this.b),Mi.subVectors(this.a,this.b),Gn.cross(Mi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Yn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Yn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Yn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Yn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Yn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;xs.subVectors(r,i),vs.subVectors(s,i),Hu.subVectors(e,i);const l=xs.dot(Hu),c=vs.dot(Hu);if(l<=0&&c<=0)return n.copy(i);Gu.subVectors(e,r);const u=xs.dot(Gu),h=vs.dot(Gu);if(u>=0&&h<=u)return n.copy(r);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(xs,o);Wu.subVectors(e,s);const g=xs.dot(Wu),m=vs.dot(Wu);if(m>=0&&g<=m)return n.copy(s);const y=g*c-l*m;if(y<=0&&c>=0&&m<=0)return a=c/(c-m),n.copy(i).addScaledVector(vs,a);const p=u*m-g*h;if(p<=0&&h-u>=0&&g-m>=0)return Lg.subVectors(s,r),a=(h-u)/(h-u+(g-m)),n.copy(r).addScaledVector(Lg,a);const d=1/(p+y+f);return o=y*d,a=f*d,n.copy(i).addScaledVector(xs,o).addScaledVector(vs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Na{constructor(e=new j(1/0,1/0,1/0),n=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Wn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Wn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Wn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Wn):Wn.fromBufferAttribute(s,o),Wn.applyMatrix4(e.matrixWorld),this.expandByPoint(Wn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),sl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),sl.copy(i.boundingBox)),sl.applyMatrix4(e.matrixWorld),this.union(sl)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Wn),Wn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ao),ol.subVectors(this.max,Ao),_s.subVectors(e.a,Ao),ys.subVectors(e.b,Ao),Ss.subVectors(e.c,Ao),Ki.subVectors(ys,_s),Zi.subVectors(Ss,ys),Nr.subVectors(_s,Ss);let n=[0,-Ki.z,Ki.y,0,-Zi.z,Zi.y,0,-Nr.z,Nr.y,Ki.z,0,-Ki.x,Zi.z,0,-Zi.x,Nr.z,0,-Nr.x,-Ki.y,Ki.x,0,-Zi.y,Zi.x,0,-Nr.y,Nr.x,0];return!$u(n,_s,ys,Ss,ol)||(n=[1,0,0,0,1,0,0,0,1],!$u(n,_s,ys,Ss,ol))?!1:(al.crossVectors(Ki,Zi),n=[al.x,al.y,al.z],$u(n,_s,ys,Ss,ol))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Wn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Wn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(bi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),bi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),bi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),bi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),bi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),bi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),bi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),bi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(bi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const bi=[new j,new j,new j,new j,new j,new j,new j,new j],Wn=new j,sl=new Na,_s=new j,ys=new j,Ss=new j,Ki=new j,Zi=new j,Nr=new j,Ao=new j,ol=new j,al=new j,Lr=new j;function $u(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Lr.fromArray(t,s);const a=r.x*Math.abs(Lr.x)+r.y*Math.abs(Lr.y)+r.z*Math.abs(Lr.z),l=e.dot(Lr),c=n.dot(Lr),u=i.dot(Lr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Lt=new j,ll=new ut;let T1=0;class Qn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:T1++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=vg,this.updateRanges=[],this.gpuType=ui,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)ll.fromBufferAttribute(this,n),ll.applyMatrix3(e),this.setXY(n,ll.x,ll.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Lt.fromBufferAttribute(this,n),Lt.applyMatrix3(e),this.setXYZ(n,Lt.x,Lt.y,Lt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Lt.fromBufferAttribute(this,n),Lt.applyMatrix4(e),this.setXYZ(n,Lt.x,Lt.y,Lt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Lt.fromBufferAttribute(this,n),Lt.applyNormalMatrix(e),this.setXYZ(n,Lt.x,Lt.y,Lt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Lt.fromBufferAttribute(this,n),Lt.transformDirection(e),this.setXYZ(n,Lt.x,Lt.y,Lt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=bo(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=fn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=bo(n,this.array)),n}setX(e,n){return this.normalized&&(n=fn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=bo(n,this.array)),n}setY(e,n){return this.normalized&&(n=fn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=bo(n,this.array)),n}setZ(e,n){return this.normalized&&(n=fn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=bo(n,this.array)),n}setW(e,n){return this.normalized&&(n=fn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=fn(n,this.array),i=fn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=fn(n,this.array),i=fn(i,this.array),r=fn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=fn(n,this.array),i=fn(i,this.array),r=fn(r,this.array),s=fn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==vg&&(e.usage=this.usage),e}}class P_ extends Qn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class N_ extends Qn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Fi extends Qn{constructor(e,n,i){super(new Float32Array(e),n,i)}}const A1=new Na,Co=new j,Yu=new j;class xp{constructor(e=new j,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):A1.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Co.subVectors(e,this.center);const n=Co.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Co,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Yu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Co.copy(e.center).add(Yu)),this.expandByPoint(Co.copy(e.center).sub(Yu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let C1=0;const Nn=new It,Ku=new Tn,Es=new j,En=new Na,Ro=new Na,Vt=new j;class _i extends ho{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:C1++}),this.uuid=Pa(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(a1(e)?N_:P_)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ge().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Nn.makeRotationFromQuaternion(e),this.applyMatrix4(Nn),this}rotateX(e){return Nn.makeRotationX(e),this.applyMatrix4(Nn),this}rotateY(e){return Nn.makeRotationY(e),this.applyMatrix4(Nn),this}rotateZ(e){return Nn.makeRotationZ(e),this.applyMatrix4(Nn),this}translate(e,n,i){return Nn.makeTranslation(e,n,i),this.applyMatrix4(Nn),this}scale(e,n,i){return Nn.makeScale(e,n,i),this.applyMatrix4(Nn),this}lookAt(e){return Ku.lookAt(e),Ku.updateMatrix(),this.applyMatrix4(Ku.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Es).negate(),this.translate(Es.x,Es.y,Es.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Fi(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&ze("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Na);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){nt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];En.setFromBufferAttribute(s),this.morphTargetsRelative?(Vt.addVectors(this.boundingBox.min,En.min),this.boundingBox.expandByPoint(Vt),Vt.addVectors(this.boundingBox.max,En.max),this.boundingBox.expandByPoint(Vt)):(this.boundingBox.expandByPoint(En.min),this.boundingBox.expandByPoint(En.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&nt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xp);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){nt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new j,1/0);return}if(e){const i=this.boundingSphere.center;if(En.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Ro.setFromBufferAttribute(a),this.morphTargetsRelative?(Vt.addVectors(En.min,Ro.min),En.expandByPoint(Vt),Vt.addVectors(En.max,Ro.max),En.expandByPoint(Vt)):(En.expandByPoint(Ro.min),En.expandByPoint(Ro.max))}En.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Vt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Vt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Vt.fromBufferAttribute(a,c),l&&(Es.fromBufferAttribute(e,c),Vt.add(Es)),r=Math.max(r,i.distanceToSquared(Vt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&nt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){nt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Qn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let v=0;v<i.count;v++)a[v]=new j,l[v]=new j;const c=new j,u=new j,h=new j,f=new ut,g=new ut,m=new ut,y=new j,p=new j;function d(v,w,V){c.fromBufferAttribute(i,v),u.fromBufferAttribute(i,w),h.fromBufferAttribute(i,V),f.fromBufferAttribute(s,v),g.fromBufferAttribute(s,w),m.fromBufferAttribute(s,V),u.sub(c),h.sub(c),g.sub(f),m.sub(f);const P=1/(g.x*m.y-m.x*g.y);isFinite(P)&&(y.copy(u).multiplyScalar(m.y).addScaledVector(h,-g.y).multiplyScalar(P),p.copy(h).multiplyScalar(g.x).addScaledVector(u,-m.x).multiplyScalar(P),a[v].add(y),a[w].add(y),a[V].add(y),l[v].add(p),l[w].add(p),l[V].add(p))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let v=0,w=x.length;v<w;++v){const V=x[v],P=V.start,z=V.count;for(let H=P,K=P+z;H<K;H+=3)d(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const _=new j,E=new j,b=new j,T=new j;function C(v){b.fromBufferAttribute(r,v),T.copy(b);const w=a[v];_.copy(w),_.sub(b.multiplyScalar(b.dot(w))).normalize(),E.crossVectors(T,w);const P=E.dot(l[v])<0?-1:1;o.setXYZW(v,_.x,_.y,_.z,P)}for(let v=0,w=x.length;v<w;++v){const V=x[v],P=V.start,z=V.count;for(let H=P,K=P+z;H<K;H+=3)C(e.getX(H+0)),C(e.getX(H+1)),C(e.getX(H+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Qn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,g=i.count;f<g;f++)i.setXYZ(f,0,0,0);const r=new j,s=new j,o=new j,a=new j,l=new j,c=new j,u=new j,h=new j;if(e)for(let f=0,g=e.count;f<g;f+=3){const m=e.getX(f+0),y=e.getX(f+1),p=e.getX(f+2);r.fromBufferAttribute(n,m),s.fromBufferAttribute(n,y),o.fromBufferAttribute(n,p),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(i,m),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,p),a.add(u),l.add(u),c.add(u),i.setXYZ(m,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,g=n.count;f<g;f+=3)r.fromBufferAttribute(n,f+0),s.fromBufferAttribute(n,f+1),o.fromBufferAttribute(n,f+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Vt.fromBufferAttribute(e,n),Vt.normalize(),e.setXYZ(n,Vt.x,Vt.y,Vt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let g=0,m=0;for(let y=0,p=l.length;y<p;y++){a.isInterleavedBufferAttribute?g=l[y]*a.data.stride+a.offset:g=l[y]*u;for(let d=0;d<u;d++)f[m++]=c[g++]}return new Qn(f,u,h)}if(this.index===null)return ze("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new _i,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],g=e(f,i);l.push(g)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const g=c[h];u.push(g.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,g=h.length;f<g;f++)u.push(h[f].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let R1=0;class La extends ho{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:R1++}),this.uuid=Pa(),this.name="",this.type="Material",this.blending=Ws,this.side=Er,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ud,this.blendDst=fd,this.blendEquation=Vr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ot(0,0,0),this.blendAlpha=0,this.depthFunc=eo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=xg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ds,this.stencilZFail=ds,this.stencilZPass=ds,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){ze(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){ze(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ws&&(i.blending=this.blending),this.side!==Er&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ud&&(i.blendSrc=this.blendSrc),this.blendDst!==fd&&(i.blendDst=this.blendDst),this.blendEquation!==Vr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==eo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==xg&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ds&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ds&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ds&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Ti=new j,Zu=new j,cl=new j,Ji=new j,Ju=new j,ul=new j,Qu=new j;class P1{constructor(e=new j,n=new j(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ti)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ti.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ti.copy(this.origin).addScaledVector(this.direction,n),Ti.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Zu.copy(e).add(n).multiplyScalar(.5),cl.copy(n).sub(e).normalize(),Ji.copy(this.origin).sub(Zu);const s=e.distanceTo(n)*.5,o=-this.direction.dot(cl),a=Ji.dot(this.direction),l=-Ji.dot(cl),c=Ji.lengthSq(),u=Math.abs(1-o*o);let h,f,g,m;if(u>0)if(h=o*l-a,f=o*a-l,m=s*u,h>=0)if(f>=-m)if(f<=m){const y=1/u;h*=y,f*=y,g=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=s,h=Math.max(0,-(o*f+a)),g=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(o*f+a)),g=-h*h+f*(f+2*l)+c;else f<=-m?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),g=-h*h+f*(f+2*l)+c):f<=m?(h=0,f=Math.min(Math.max(-s,-l),s),g=f*(f+2*l)+c):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),g=-h*h+f*(f+2*l)+c);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),g=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Zu).addScaledVector(cl,f),g}intersectSphere(e,n){Ti.subVectors(e.center,this.origin);const i=Ti.dot(this.direction),r=Ti.dot(Ti)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Ti)!==null}intersectTriangle(e,n,i,r,s){Ju.subVectors(n,e),ul.subVectors(i,e),Qu.crossVectors(Ju,ul);let o=this.direction.dot(Qu),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ji.subVectors(this.origin,e);const l=a*this.direction.dot(ul.crossVectors(Ji,ul));if(l<0)return null;const c=a*this.direction.dot(Ju.cross(Ji));if(c<0||l+c>o)return null;const u=-a*Ji.dot(Qu);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class L_ extends La{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gi,this.combine=u_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Dg=new It,Dr=new P1,fl=new xp,Ig=new j,dl=new j,hl=new j,pl=new j,ef=new j,ml=new j,Ug=new j,gl=new j;class xi extends Tn{constructor(e=new _i,n=new L_){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){ml.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(ef.fromBufferAttribute(h,e),o?ml.addScaledVector(ef,u):ml.addScaledVector(ef.sub(n),u))}n.add(ml)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),fl.copy(i.boundingSphere),fl.applyMatrix4(s),Dr.copy(e.ray).recast(e.near),!(fl.containsPoint(Dr.origin)===!1&&(Dr.intersectSphere(fl,Ig)===null||Dr.origin.distanceToSquared(Ig)>(e.far-e.near)**2))&&(Dg.copy(s).invert(),Dr.copy(e.ray).applyMatrix4(Dg),!(i.boundingBox!==null&&Dr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Dr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,g=s.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,y=f.length;m<y;m++){const p=f[m],d=o[p.materialIndex],x=Math.max(p.start,g.start),_=Math.min(a.count,Math.min(p.start+p.count,g.start+g.count));for(let E=x,b=_;E<b;E+=3){const T=a.getX(E),C=a.getX(E+1),v=a.getX(E+2);r=xl(this,d,e,i,c,u,h,T,C,v),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const m=Math.max(0,g.start),y=Math.min(a.count,g.start+g.count);for(let p=m,d=y;p<d;p+=3){const x=a.getX(p),_=a.getX(p+1),E=a.getX(p+2);r=xl(this,o,e,i,c,u,h,x,_,E),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,y=f.length;m<y;m++){const p=f[m],d=o[p.materialIndex],x=Math.max(p.start,g.start),_=Math.min(l.count,Math.min(p.start+p.count,g.start+g.count));for(let E=x,b=_;E<b;E+=3){const T=E,C=E+1,v=E+2;r=xl(this,d,e,i,c,u,h,T,C,v),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const m=Math.max(0,g.start),y=Math.min(l.count,g.start+g.count);for(let p=m,d=y;p<d;p+=3){const x=p,_=p+1,E=p+2;r=xl(this,o,e,i,c,u,h,x,_,E),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}}}function N1(t,e,n,i,r,s,o,a){let l;if(e.side===_n?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Er,a),l===null)return null;gl.copy(a),gl.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(gl);return c<n.near||c>n.far?null:{distance:c,point:gl.clone(),object:t}}function xl(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,dl),t.getVertexPosition(l,hl),t.getVertexPosition(c,pl);const u=N1(t,e,n,i,dl,hl,pl,Ug);if(u){const h=new j;Yn.getBarycoord(Ug,dl,hl,pl,h),r&&(u.uv=Yn.getInterpolatedAttribute(r,a,l,c,h,new ut)),s&&(u.uv1=Yn.getInterpolatedAttribute(s,a,l,c,h,new ut)),o&&(u.normal=Yn.getInterpolatedAttribute(o,a,l,c,h,new j),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new j,materialIndex:0};Yn.getNormal(dl,hl,pl,f.normal),u.face=f,u.barycoord=h}return u}class L1 extends ln{constructor(e=null,n=1,i=1,r,s,o,a,l,c=Xt,u=Xt,h,f){super(null,o,a,l,c,u,r,s,h,f),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const tf=new j,D1=new j,I1=new Ge;class zr{constructor(e=new j(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=tf.subVectors(i,n).cross(D1.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(tf),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||I1.getNormalMatrix(e),r=this.coplanarPoint(tf).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ir=new xp,U1=new ut(.5,.5),vl=new j;class D_{constructor(e=new zr,n=new zr,i=new zr,r=new zr,s=new zr,o=new zr){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=fi,i=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],u=s[4],h=s[5],f=s[6],g=s[7],m=s[8],y=s[9],p=s[10],d=s[11],x=s[12],_=s[13],E=s[14],b=s[15];if(r[0].setComponents(c-o,g-u,d-m,b-x).normalize(),r[1].setComponents(c+o,g+u,d+m,b+x).normalize(),r[2].setComponents(c+a,g+h,d+y,b+_).normalize(),r[3].setComponents(c-a,g-h,d-y,b-_).normalize(),i)r[4].setComponents(l,f,p,E).normalize(),r[5].setComponents(c-l,g-f,d-p,b-E).normalize();else if(r[4].setComponents(c-l,g-f,d-p,b-E).normalize(),n===fi)r[5].setComponents(c+l,g+f,d+p,b+E).normalize();else if(n===_c)r[5].setComponents(l,f,p,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ir.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Ir.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ir)}intersectsSprite(e){Ir.center.set(0,0,0);const n=U1.distanceTo(e.center);return Ir.radius=.7071067811865476+n,Ir.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ir)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(vl.x=r.normal.x>0?e.max.x:e.min.x,vl.y=r.normal.y>0?e.max.y:e.min.y,vl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(vl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class I_ extends ln{constructor(e=[],n=ss,i,r,s,o,a,l,c,u){super(e,n,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ga extends ln{constructor(e,n,i=gi,r,s,o,a=Xt,l=Xt,c,u=Hi,h=1){if(u!==Hi&&u!==$r)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:n,depth:h};super(f,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new gp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class F1 extends ga{constructor(e,n=gi,i=ss,r,s,o=Xt,a=Xt,l,c=Hi){const u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,n,i,r,s,o,a,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class U_ extends ln{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Da extends _i{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,g=0;m("z","y","x",-1,-1,i,n,e,o,s,0),m("z","y","x",1,-1,i,n,-e,o,s,1),m("x","z","y",1,1,e,i,n,r,o,2),m("x","z","y",1,-1,e,i,-n,r,o,3),m("x","y","z",1,-1,e,n,i,r,s,4),m("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Fi(c,3)),this.setAttribute("normal",new Fi(u,3)),this.setAttribute("uv",new Fi(h,2));function m(y,p,d,x,_,E,b,T,C,v,w){const V=E/C,P=b/v,z=E/2,H=b/2,K=T/2,B=C+1,F=v+1;let U=0,O=0;const q=new j;for(let k=0;k<F;k++){const ne=k*P-H;for(let ie=0;ie<B;ie++){const De=ie*V-z;q[y]=De*x,q[p]=ne*_,q[d]=K,c.push(q.x,q.y,q.z),q[y]=0,q[p]=0,q[d]=T>0?1:-1,u.push(q.x,q.y,q.z),h.push(ie/C),h.push(1-k/v),U+=1}}for(let k=0;k<v;k++)for(let ne=0;ne<C;ne++){const ie=f+ne+B*k,De=f+ne+B*(k+1),He=f+(ne+1)+B*(k+1),Fe=f+(ne+1)+B*k;l.push(ie,De,Fe),l.push(De,He,Fe),O+=6}a.addGroup(g,O,w),g+=O,f+=U}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Da(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class qc extends _i{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,h=e/a,f=n/l,g=[],m=[],y=[],p=[];for(let d=0;d<u;d++){const x=d*f-o;for(let _=0;_<c;_++){const E=_*h-s;m.push(E,-x,0),y.push(0,0,1),p.push(_/a),p.push(1-d/l)}}for(let d=0;d<l;d++)for(let x=0;x<a;x++){const _=x+c*d,E=x+c*(d+1),b=x+1+c*(d+1),T=x+1+c*d;g.push(_,E,T),g.push(E,b,T)}this.setIndex(g),this.setAttribute("position",new Fi(m,3)),this.setAttribute("normal",new Fi(y,3)),this.setAttribute("uv",new Fi(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qc(e.width,e.height,e.widthSegments,e.heightSegments)}}function ro(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(ze("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function sn(t){const e={};for(let n=0;n<t.length;n++){const i=ro(t[n]);for(const r in i)e[r]=i[r]}return e}function O1(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function F_(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Qe.workingColorSpace}const k1={clone:ro,merge:sn};var B1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,z1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class vi extends La{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=B1,this.fragmentShader=z1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ro(e.uniforms),this.uniformsGroups=O1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class O_ extends vi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class V1 extends La{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Jb,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class H1 extends La{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const _l=new j,yl=new po,ri=new j;class k_ extends Tn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new It,this.projectionMatrix=new It,this.projectionMatrixInverse=new It,this.coordinateSystem=fi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(_l,yl,ri),ri.x===1&&ri.y===1&&ri.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(_l,yl,ri.set(1,1,1)).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorld.decompose(_l,yl,ri),ri.x===1&&ri.y===1&&ri.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(_l,yl,ri.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Qi=new j,Fg=new ut,Og=new ut;class $n extends k_{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Qd*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Lu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Qd*2*Math.atan(Math.tan(Lu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Qi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Qi.x,Qi.y).multiplyScalar(-e/Qi.z),Qi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Qi.x,Qi.y).multiplyScalar(-e/Qi.z)}getViewSize(e,n){return this.getViewBounds(e,Fg,Og),n.subVectors(Og,Fg)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Lu*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class vp extends k_{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Ms=-90,ws=1;class G1 extends Tn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new $n(Ms,ws,e,n);r.layers=this.layers,this.add(r);const s=new $n(Ms,ws,e,n);s.layers=this.layers,this.add(s);const o=new $n(Ms,ws,e,n);o.layers=this.layers,this.add(o);const a=new $n(Ms,ws,e,n);a.layers=this.layers,this.add(a);const l=new $n(Ms,ws,e,n);l.layers=this.layers,this.add(l);const c=new $n(Ms,ws,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===fi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===_c)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(n,s),e.setRenderTarget(i,1,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,2,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,3,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,4,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(n,u),e.setRenderTarget(h,f,g),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}}class W1 extends $n{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function kg(t,e,n,i){const r=j1(i);switch(n){case M_:return t*e;case b_:return t*e/r.components*r.byteLength;case fp:return t*e/r.components*r.byteLength;case no:return t*e*2/r.components*r.byteLength;case dp:return t*e*2/r.components*r.byteLength;case w_:return t*e*3/r.components*r.byteLength;case Kn:return t*e*4/r.components*r.byteLength;case hp:return t*e*4/r.components*r.byteLength;case Vl:case Hl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Gl:case Wl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Ed:case wd:return Math.max(t,16)*Math.max(e,8)/4;case Sd:case Md:return Math.max(t,8)*Math.max(e,8)/2;case bd:case Td:case Cd:case Rd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Ad:case Pd:case Nd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Ld:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Dd:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Id:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Ud:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Fd:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Od:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case kd:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Bd:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case zd:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Vd:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Hd:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Gd:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Wd:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case jd:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Xd:case qd:case $d:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Yd:case Kd:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Zd:case Jd:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function j1(t){switch(t){case Un:case __:return{byteLength:1,components:1};case pa:case y_:case Vi:return{byteLength:2,components:1};case cp:case up:return{byteLength:2,components:4};case gi:case lp:case ui:return{byteLength:4,components:1};case S_:case E_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ap}}));typeof window<"u"&&(window.__THREE__?ze("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ap);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function B_(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function X1(t){const e=new WeakMap;function n(a,l){const c=a.array,u=a.usage,h=c.byteLength,f=t.createBuffer();t.bindBuffer(l,f),t.bufferData(l,c,u),a.onUploadCallback();let g;if(c instanceof Float32Array)g=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)g=t.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?g=t.HALF_FLOAT:g=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)g=t.SHORT;else if(c instanceof Uint32Array)g=t.UNSIGNED_INT;else if(c instanceof Int32Array)g=t.INT;else if(c instanceof Int8Array)g=t.BYTE;else if(c instanceof Uint8Array)g=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)g=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:g,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){const u=l.array,h=l.updateRanges;if(t.bindBuffer(c,a),h.length===0)t.bufferSubData(c,0,u);else{h.sort((g,m)=>g.start-m.start);let f=0;for(let g=1;g<h.length;g++){const m=h[f],y=h[g];y.start<=m.start+m.count+1?m.count=Math.max(m.count,y.start+y.count-m.start):(++f,h[f]=y)}h.length=f+1;for(let g=0,m=h.length;g<m;g++){const y=h[g];t.bufferSubData(c,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var q1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$1=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Y1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,K1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Z1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,J1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Q1=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,eT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,tT=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,nT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,iT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,rT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,sT=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,oT=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,aT=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,lT=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,cT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,uT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,fT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,dT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,hT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,pT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,mT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,gT=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,xT=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,vT=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,_T=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,yT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ST=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ET=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,MT="gl_FragColor = linearToOutputTexel( gl_FragColor );",wT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,bT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,TT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,AT=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,CT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,RT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,PT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,NT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,LT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,DT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,IT=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,UT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,FT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,OT=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,kT=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,BT=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,zT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,VT=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,HT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,GT=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,WT=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,jT=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,XT=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,qT=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,$T=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,YT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,KT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ZT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,JT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,QT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,eA=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,tA=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,nA=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,iA=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,rA=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,sA=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,oA=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,aA=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lA=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,cA=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,uA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,fA=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,dA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,mA=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,gA=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,xA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,vA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,_A=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,yA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,SA=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,EA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,MA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,wA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,bA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,TA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,AA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,CA=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,RA=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,PA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,NA=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,LA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,DA=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,IA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,UA=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,FA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,OA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,kA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,BA=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,zA=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,VA=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,HA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,GA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,WA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,jA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const XA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,qA=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$A=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,YA=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,KA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ZA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,JA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,QA=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,eC=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,tC=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,nC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,iC=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rC=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sC=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,oC=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,aC=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lC=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cC=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uC=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,fC=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dC=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,hC=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,pC=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mC=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gC=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,xC=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vC=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_C=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yC=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,SC=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,EC=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,MC=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,wC=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,bC=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,We={alphahash_fragment:q1,alphahash_pars_fragment:$1,alphamap_fragment:Y1,alphamap_pars_fragment:K1,alphatest_fragment:Z1,alphatest_pars_fragment:J1,aomap_fragment:Q1,aomap_pars_fragment:eT,batching_pars_vertex:tT,batching_vertex:nT,begin_vertex:iT,beginnormal_vertex:rT,bsdfs:sT,iridescence_fragment:oT,bumpmap_pars_fragment:aT,clipping_planes_fragment:lT,clipping_planes_pars_fragment:cT,clipping_planes_pars_vertex:uT,clipping_planes_vertex:fT,color_fragment:dT,color_pars_fragment:hT,color_pars_vertex:pT,color_vertex:mT,common:gT,cube_uv_reflection_fragment:xT,defaultnormal_vertex:vT,displacementmap_pars_vertex:_T,displacementmap_vertex:yT,emissivemap_fragment:ST,emissivemap_pars_fragment:ET,colorspace_fragment:MT,colorspace_pars_fragment:wT,envmap_fragment:bT,envmap_common_pars_fragment:TT,envmap_pars_fragment:AT,envmap_pars_vertex:CT,envmap_physical_pars_fragment:BT,envmap_vertex:RT,fog_vertex:PT,fog_pars_vertex:NT,fog_fragment:LT,fog_pars_fragment:DT,gradientmap_pars_fragment:IT,lightmap_pars_fragment:UT,lights_lambert_fragment:FT,lights_lambert_pars_fragment:OT,lights_pars_begin:kT,lights_toon_fragment:zT,lights_toon_pars_fragment:VT,lights_phong_fragment:HT,lights_phong_pars_fragment:GT,lights_physical_fragment:WT,lights_physical_pars_fragment:jT,lights_fragment_begin:XT,lights_fragment_maps:qT,lights_fragment_end:$T,logdepthbuf_fragment:YT,logdepthbuf_pars_fragment:KT,logdepthbuf_pars_vertex:ZT,logdepthbuf_vertex:JT,map_fragment:QT,map_pars_fragment:eA,map_particle_fragment:tA,map_particle_pars_fragment:nA,metalnessmap_fragment:iA,metalnessmap_pars_fragment:rA,morphinstance_vertex:sA,morphcolor_vertex:oA,morphnormal_vertex:aA,morphtarget_pars_vertex:lA,morphtarget_vertex:cA,normal_fragment_begin:uA,normal_fragment_maps:fA,normal_pars_fragment:dA,normal_pars_vertex:hA,normal_vertex:pA,normalmap_pars_fragment:mA,clearcoat_normal_fragment_begin:gA,clearcoat_normal_fragment_maps:xA,clearcoat_pars_fragment:vA,iridescence_pars_fragment:_A,opaque_fragment:yA,packing:SA,premultiplied_alpha_fragment:EA,project_vertex:MA,dithering_fragment:wA,dithering_pars_fragment:bA,roughnessmap_fragment:TA,roughnessmap_pars_fragment:AA,shadowmap_pars_fragment:CA,shadowmap_pars_vertex:RA,shadowmap_vertex:PA,shadowmask_pars_fragment:NA,skinbase_vertex:LA,skinning_pars_vertex:DA,skinning_vertex:IA,skinnormal_vertex:UA,specularmap_fragment:FA,specularmap_pars_fragment:OA,tonemapping_fragment:kA,tonemapping_pars_fragment:BA,transmission_fragment:zA,transmission_pars_fragment:VA,uv_pars_fragment:HA,uv_pars_vertex:GA,uv_vertex:WA,worldpos_vertex:jA,background_vert:XA,background_frag:qA,backgroundCube_vert:$A,backgroundCube_frag:YA,cube_vert:KA,cube_frag:ZA,depth_vert:JA,depth_frag:QA,distance_vert:eC,distance_frag:tC,equirect_vert:nC,equirect_frag:iC,linedashed_vert:rC,linedashed_frag:sC,meshbasic_vert:oC,meshbasic_frag:aC,meshlambert_vert:lC,meshlambert_frag:cC,meshmatcap_vert:uC,meshmatcap_frag:fC,meshnormal_vert:dC,meshnormal_frag:hC,meshphong_vert:pC,meshphong_frag:mC,meshphysical_vert:gC,meshphysical_frag:xC,meshtoon_vert:vC,meshtoon_frag:_C,points_vert:yC,points_frag:SC,shadow_vert:EC,shadow_frag:MC,sprite_vert:wC,sprite_frag:bC},he={common:{diffuse:{value:new ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},envMapRotation:{value:new Ge},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new ot(16777215)},opacity:{value:1},center:{value:new ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},ai={basic:{uniforms:sn([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:We.meshbasic_vert,fragmentShader:We.meshbasic_frag},lambert:{uniforms:sn([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new ot(0)},envMapIntensity:{value:1}}]),vertexShader:We.meshlambert_vert,fragmentShader:We.meshlambert_frag},phong:{uniforms:sn([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new ot(0)},specular:{value:new ot(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:We.meshphong_vert,fragmentShader:We.meshphong_frag},standard:{uniforms:sn([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag},toon:{uniforms:sn([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new ot(0)}}]),vertexShader:We.meshtoon_vert,fragmentShader:We.meshtoon_frag},matcap:{uniforms:sn([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:We.meshmatcap_vert,fragmentShader:We.meshmatcap_frag},points:{uniforms:sn([he.points,he.fog]),vertexShader:We.points_vert,fragmentShader:We.points_frag},dashed:{uniforms:sn([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:We.linedashed_vert,fragmentShader:We.linedashed_frag},depth:{uniforms:sn([he.common,he.displacementmap]),vertexShader:We.depth_vert,fragmentShader:We.depth_frag},normal:{uniforms:sn([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:We.meshnormal_vert,fragmentShader:We.meshnormal_frag},sprite:{uniforms:sn([he.sprite,he.fog]),vertexShader:We.sprite_vert,fragmentShader:We.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:We.background_vert,fragmentShader:We.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ge}},vertexShader:We.backgroundCube_vert,fragmentShader:We.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:We.cube_vert,fragmentShader:We.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:We.equirect_vert,fragmentShader:We.equirect_frag},distance:{uniforms:sn([he.common,he.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:We.distance_vert,fragmentShader:We.distance_frag},shadow:{uniforms:sn([he.lights,he.fog,{color:{value:new ot(0)},opacity:{value:1}}]),vertexShader:We.shadow_vert,fragmentShader:We.shadow_frag}};ai.physical={uniforms:sn([ai.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new ot(0)},specularColor:{value:new ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag};const Sl={r:0,b:0,g:0},Ur=new Gi,TC=new It;function AC(t,e,n,i,r,s){const o=new ot(0);let a=r===!0?0:1,l,c,u=null,h=0,f=null;function g(x){let _=x.isScene===!0?x.background:null;if(_&&_.isTexture){const E=x.backgroundBlurriness>0;_=e.get(_,E)}return _}function m(x){let _=!1;const E=g(x);E===null?p(o,a):E&&E.isColor&&(p(E,1),_=!0);const b=t.xr.getEnvironmentBlendMode();b==="additive"?n.buffers.color.setClear(0,0,0,1,s):b==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(t.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function y(x,_){const E=g(_);E&&(E.isCubeTexture||E.mapping===Xc)?(c===void 0&&(c=new xi(new Da(1,1,1),new vi({name:"BackgroundCubeMaterial",uniforms:ro(ai.backgroundCube.uniforms),vertexShader:ai.backgroundCube.vertexShader,fragmentShader:ai.backgroundCube.fragmentShader,side:_n,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,T,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),Ur.copy(_.backgroundRotation),Ur.x*=-1,Ur.y*=-1,Ur.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Ur.y*=-1,Ur.z*=-1),c.material.uniforms.envMap.value=E,c.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(TC.makeRotationFromEuler(Ur)),c.material.toneMapped=Qe.getTransfer(E.colorSpace)!==st,(u!==E||h!==E.version||f!==t.toneMapping)&&(c.material.needsUpdate=!0,u=E,h=E.version,f=t.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null)):E&&E.isTexture&&(l===void 0&&(l=new xi(new qc(2,2),new vi({name:"BackgroundMaterial",uniforms:ro(ai.background.uniforms),vertexShader:ai.background.vertexShader,fragmentShader:ai.background.fragmentShader,side:Er,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=E,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=Qe.getTransfer(E.colorSpace)!==st,E.matrixAutoUpdate===!0&&E.updateMatrix(),l.material.uniforms.uvTransform.value.copy(E.matrix),(u!==E||h!==E.version||f!==t.toneMapping)&&(l.material.needsUpdate=!0,u=E,h=E.version,f=t.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function p(x,_){x.getRGB(Sl,F_(t)),n.buffers.color.setClear(Sl.r,Sl.g,Sl.b,_,s)}function d(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(x,_=1){o.set(x),a=_,p(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(x){a=x,p(o,a)},render:m,addToRenderList:y,dispose:d}}function CC(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,o=!1;function a(P,z,H,K,B){let F=!1;const U=h(P,K,H,z);s!==U&&(s=U,c(s.object)),F=g(P,K,H,B),F&&m(P,K,H,B),B!==null&&e.update(B,t.ELEMENT_ARRAY_BUFFER),(F||o)&&(o=!1,E(P,z,H,K),B!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function l(){return t.createVertexArray()}function c(P){return t.bindVertexArray(P)}function u(P){return t.deleteVertexArray(P)}function h(P,z,H,K){const B=K.wireframe===!0;let F=i[z.id];F===void 0&&(F={},i[z.id]=F);const U=P.isInstancedMesh===!0?P.id:0;let O=F[U];O===void 0&&(O={},F[U]=O);let q=O[H.id];q===void 0&&(q={},O[H.id]=q);let k=q[B];return k===void 0&&(k=f(l()),q[B]=k),k}function f(P){const z=[],H=[],K=[];for(let B=0;B<n;B++)z[B]=0,H[B]=0,K[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:H,attributeDivisors:K,object:P,attributes:{},index:null}}function g(P,z,H,K){const B=s.attributes,F=z.attributes;let U=0;const O=H.getAttributes();for(const q in O)if(O[q].location>=0){const ne=B[q];let ie=F[q];if(ie===void 0&&(q==="instanceMatrix"&&P.instanceMatrix&&(ie=P.instanceMatrix),q==="instanceColor"&&P.instanceColor&&(ie=P.instanceColor)),ne===void 0||ne.attribute!==ie||ie&&ne.data!==ie.data)return!0;U++}return s.attributesNum!==U||s.index!==K}function m(P,z,H,K){const B={},F=z.attributes;let U=0;const O=H.getAttributes();for(const q in O)if(O[q].location>=0){let ne=F[q];ne===void 0&&(q==="instanceMatrix"&&P.instanceMatrix&&(ne=P.instanceMatrix),q==="instanceColor"&&P.instanceColor&&(ne=P.instanceColor));const ie={};ie.attribute=ne,ne&&ne.data&&(ie.data=ne.data),B[q]=ie,U++}s.attributes=B,s.attributesNum=U,s.index=K}function y(){const P=s.newAttributes;for(let z=0,H=P.length;z<H;z++)P[z]=0}function p(P){d(P,0)}function d(P,z){const H=s.newAttributes,K=s.enabledAttributes,B=s.attributeDivisors;H[P]=1,K[P]===0&&(t.enableVertexAttribArray(P),K[P]=1),B[P]!==z&&(t.vertexAttribDivisor(P,z),B[P]=z)}function x(){const P=s.newAttributes,z=s.enabledAttributes;for(let H=0,K=z.length;H<K;H++)z[H]!==P[H]&&(t.disableVertexAttribArray(H),z[H]=0)}function _(P,z,H,K,B,F,U){U===!0?t.vertexAttribIPointer(P,z,H,B,F):t.vertexAttribPointer(P,z,H,K,B,F)}function E(P,z,H,K){y();const B=K.attributes,F=H.getAttributes(),U=z.defaultAttributeValues;for(const O in F){const q=F[O];if(q.location>=0){let k=B[O];if(k===void 0&&(O==="instanceMatrix"&&P.instanceMatrix&&(k=P.instanceMatrix),O==="instanceColor"&&P.instanceColor&&(k=P.instanceColor)),k!==void 0){const ne=k.normalized,ie=k.itemSize,De=e.get(k);if(De===void 0)continue;const He=De.buffer,Fe=De.type,Y=De.bytesPerElement,se=Fe===t.INT||Fe===t.UNSIGNED_INT||k.gpuType===lp;if(k.isInterleavedBufferAttribute){const ue=k.data,be=ue.stride,Ie=k.offset;if(ue.isInstancedInterleavedBuffer){for(let Ue=0;Ue<q.locationSize;Ue++)d(q.location+Ue,ue.meshPerAttribute);P.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let Ue=0;Ue<q.locationSize;Ue++)p(q.location+Ue);t.bindBuffer(t.ARRAY_BUFFER,He);for(let Ue=0;Ue<q.locationSize;Ue++)_(q.location+Ue,ie/q.locationSize,Fe,ne,be*Y,(Ie+ie/q.locationSize*Ue)*Y,se)}else{if(k.isInstancedBufferAttribute){for(let ue=0;ue<q.locationSize;ue++)d(q.location+ue,k.meshPerAttribute);P.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=k.meshPerAttribute*k.count)}else for(let ue=0;ue<q.locationSize;ue++)p(q.location+ue);t.bindBuffer(t.ARRAY_BUFFER,He);for(let ue=0;ue<q.locationSize;ue++)_(q.location+ue,ie/q.locationSize,Fe,ne,ie*Y,ie/q.locationSize*ue*Y,se)}}else if(U!==void 0){const ne=U[O];if(ne!==void 0)switch(ne.length){case 2:t.vertexAttrib2fv(q.location,ne);break;case 3:t.vertexAttrib3fv(q.location,ne);break;case 4:t.vertexAttrib4fv(q.location,ne);break;default:t.vertexAttrib1fv(q.location,ne)}}}}x()}function b(){w();for(const P in i){const z=i[P];for(const H in z){const K=z[H];for(const B in K){const F=K[B];for(const U in F)u(F[U].object),delete F[U];delete K[B]}}delete i[P]}}function T(P){if(i[P.id]===void 0)return;const z=i[P.id];for(const H in z){const K=z[H];for(const B in K){const F=K[B];for(const U in F)u(F[U].object),delete F[U];delete K[B]}}delete i[P.id]}function C(P){for(const z in i){const H=i[z];for(const K in H){const B=H[K];if(B[P.id]===void 0)continue;const F=B[P.id];for(const U in F)u(F[U].object),delete F[U];delete B[P.id]}}}function v(P){for(const z in i){const H=i[z],K=P.isInstancedMesh===!0?P.id:0,B=H[K];if(B!==void 0){for(const F in B){const U=B[F];for(const O in U)u(U[O].object),delete U[O];delete B[F]}delete H[K],Object.keys(H).length===0&&delete i[z]}}}function w(){V(),o=!0,s!==r&&(s=r,c(s.object))}function V(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:w,resetDefaultState:V,dispose:b,releaseStatesOfGeometry:T,releaseStatesOfObject:v,releaseStatesOfProgram:C,initAttributes:y,enableAttribute:p,disableUnusedAttributes:x}}function RC(t,e,n){let i;function r(c){i=c}function s(c,u){t.drawArrays(i,c,u),n.update(u,i,1)}function o(c,u,h){h!==0&&(t.drawArraysInstanced(i,c,u,h),n.update(u,i,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,h);let g=0;for(let m=0;m<h;m++)g+=u[m];n.update(g,i,1)}function l(c,u,h,f){if(h===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<c.length;m++)o(c[m],u[m],f[m]);else{g.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,h);let m=0;for(let y=0;y<h;y++)m+=u[y]*f[y];n.update(m,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function PC(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(C){return!(C!==Kn&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const v=C===Vi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Un&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==ui&&!v)}function l(C){if(C==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(ze("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),g=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),m=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=t.getParameter(t.MAX_TEXTURE_SIZE),p=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),d=t.getParameter(t.MAX_VERTEX_ATTRIBS),x=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),_=t.getParameter(t.MAX_VARYING_VECTORS),E=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),b=t.getParameter(t.MAX_SAMPLES),T=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:g,maxVertexTextures:m,maxTextureSize:y,maxCubemapSize:p,maxAttributes:d,maxVertexUniforms:x,maxVaryings:_,maxFragmentUniforms:E,maxSamples:b,samples:T}}function NC(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new zr,a=new Ge,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const g=h.length!==0||f||i!==0||r;return r=f,i=h.length,g},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){n=u(h,f,0)},this.setState=function(h,f,g){const m=h.clippingPlanes,y=h.clipIntersection,p=h.clipShadows,d=t.get(h);if(!r||m===null||m.length===0||s&&!p)s?u(null):c();else{const x=s?0:i,_=x*4;let E=d.clippingState||null;l.value=E,E=u(m,f,_,g);for(let b=0;b!==_;++b)E[b]=n[b];d.clippingState=E,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,f,g,m){const y=h!==null?h.length:0;let p=null;if(y!==0){if(p=l.value,m!==!0||p===null){const d=g+y*4,x=f.matrixWorldInverse;a.getNormalMatrix(x),(p===null||p.length<d)&&(p=new Float32Array(d));for(let _=0,E=g;_!==y;++_,E+=4)o.copy(h[_]).applyMatrix4(x,a),o.normal.toArray(p,E),p[E+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,p}}const ur=4,Bg=[.125,.215,.35,.446,.526,.582],Hr=20,LC=256,Po=new vp,zg=new ot;let nf=null,rf=0,sf=0,of=!1;const DC=new j;class Vg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){const{size:o=256,position:a=DC}=s;nf=this._renderer.getRenderTarget(),rf=this._renderer.getActiveCubeFace(),sf=this._renderer.getActiveMipmapLevel(),of=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Wg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Gg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(nf,rf,sf),this._renderer.xr.enabled=of,e.scissorTest=!1,bs(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===ss||e.mapping===to?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),nf=this._renderer.getRenderTarget(),rf=this._renderer.getActiveCubeFace(),sf=this._renderer.getActiveMipmapLevel(),of=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:nn,minFilter:nn,generateMipmaps:!1,type:Vi,format:Kn,colorSpace:io,depthBuffer:!1},r=Hg(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Hg(e,n,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=IC(s)),this._blurMaterial=FC(s,e,n),this._ggxMaterial=UC(s,e,n)}return r}_compileMaterial(e){const n=new xi(new _i,e);this._renderer.compile(n,Po)}_sceneToCubeUV(e,n,i,r,s){const l=new $n(90,1,n,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,g=h.toneMapping;h.getClearColor(zg),h.toneMapping=pi,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new xi(new Da,new L_({name:"PMREM.Background",side:_n,depthWrite:!1,depthTest:!1})));const y=this._backgroundBox,p=y.material;let d=!1;const x=e.background;x?x.isColor&&(p.color.copy(x),e.background=null,d=!0):(p.color.copy(zg),d=!0);for(let _=0;_<6;_++){const E=_%3;E===0?(l.up.set(0,c[_],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[_],s.y,s.z)):E===1?(l.up.set(0,0,c[_]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[_],s.z)):(l.up.set(0,c[_],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[_]));const b=this._cubeSize;bs(r,E*b,_>2?b:0,b,b),h.setRenderTarget(r),d&&h.render(y,l),h.render(e,l)}h.toneMapping=g,h.autoClear=f,e.background=x}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===ss||e.mapping===to;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Wg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Gg());const s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;bs(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Po)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);n.autoClear=i}_applyGGXFilter(e,n,i){const r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const l=o.uniforms,c=i/(this._lodMeshes.length-1),u=n/(this._lodMeshes.length-1),h=Math.sqrt(c*c-u*u),f=0+c*1.25,g=h*f,{_lodMax:m}=this,y=this._sizeLods[i],p=3*y*(i>m-ur?i-m+ur:0),d=4*(this._cubeSize-y);l.envMap.value=e.texture,l.roughness.value=g,l.mipInt.value=m-n,bs(s,p,d,3*y,2*y),r.setRenderTarget(s),r.render(a,Po),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=m-i,bs(e,p,d,3*y,2*y),r.setRenderTarget(e),r.render(a,Po)}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&nt("blur direction must be either latitudinal or longitudinal!");const u=3,h=this._lodMeshes[r];h.material=c;const f=c.uniforms,g=this._sizeLods[i]-1,m=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*Hr-1),y=s/m,p=isFinite(s)?1+Math.floor(u*y):Hr;p>Hr&&ze(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Hr}`);const d=[];let x=0;for(let C=0;C<Hr;++C){const v=C/y,w=Math.exp(-v*v/2);d.push(w),C===0?x+=w:C<p&&(x+=2*w)}for(let C=0;C<d.length;C++)d[C]=d[C]/x;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:_}=this;f.dTheta.value=m,f.mipInt.value=_-i;const E=this._sizeLods[r],b=3*E*(r>_-ur?r-_+ur:0),T=4*(this._cubeSize-E);bs(n,b,T,3*E,2*E),l.setRenderTarget(n),l.render(h,Po)}}function IC(t){const e=[],n=[],i=[];let r=t;const s=t-ur+1+Bg.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let l=1/a;o>t-ur?l=Bg[o-t+ur-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],g=6,m=6,y=3,p=2,d=1,x=new Float32Array(y*m*g),_=new Float32Array(p*m*g),E=new Float32Array(d*m*g);for(let T=0;T<g;T++){const C=T%3*2/3-1,v=T>2?0:-1,w=[C,v,0,C+2/3,v,0,C+2/3,v+1,0,C,v,0,C+2/3,v+1,0,C,v+1,0];x.set(w,y*m*T),_.set(f,p*m*T);const V=[T,T,T,T,T,T];E.set(V,d*m*T)}const b=new _i;b.setAttribute("position",new Qn(x,y)),b.setAttribute("uv",new Qn(_,p)),b.setAttribute("faceIndex",new Qn(E,d)),i.push(new xi(b,null)),r>ur&&r--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function Hg(t,e,n){const i=new mi(t,e,n);return i.texture.mapping=Xc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function bs(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function UC(t,e,n){return new vi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:LC,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:$c(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ii,depthTest:!1,depthWrite:!1})}function FC(t,e,n){const i=new Float32Array(Hr),r=new j(0,1,0);return new vi({name:"SphericalGaussianBlur",defines:{n:Hr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:$c(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ii,depthTest:!1,depthWrite:!1})}function Gg(){return new vi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:$c(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ii,depthTest:!1,depthWrite:!1})}function Wg(){return new vi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:$c(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ii,depthTest:!1,depthWrite:!1})}function $c(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class z_ extends mi{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new I_(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Da(5,5,5),s=new vi({name:"CubemapFromEquirect",uniforms:ro(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:_n,blending:Ii});s.uniforms.tEquirect.value=n;const o=new xi(r,s),a=n.minFilter;return n.minFilter===qr&&(n.minFilter=nn),new G1(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}function OC(t){let e=new WeakMap,n=new WeakMap,i=null;function r(f,g=!1){return f==null?null:g?o(f):s(f)}function s(f){if(f&&f.isTexture){const g=f.mapping;if(g===Ru||g===Pu)if(e.has(f)){const m=e.get(f).texture;return a(m,f.mapping)}else{const m=f.image;if(m&&m.height>0){const y=new z_(m.height);return y.fromEquirectangularTexture(t,f),e.set(f,y),f.addEventListener("dispose",c),a(y.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture){const g=f.mapping,m=g===Ru||g===Pu,y=g===ss||g===to;if(m||y){let p=n.get(f);const d=p!==void 0?p.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==d)return i===null&&(i=new Vg(t)),p=m?i.fromEquirectangular(f,p):i.fromCubemap(f,p),p.texture.pmremVersion=f.pmremVersion,n.set(f,p),p.texture;if(p!==void 0)return p.texture;{const x=f.image;return m&&x&&x.height>0||y&&x&&l(x)?(i===null&&(i=new Vg(t)),p=m?i.fromEquirectangular(f):i.fromCubemap(f),p.texture.pmremVersion=f.pmremVersion,n.set(f,p),f.addEventListener("dispose",u),p.texture):null}}}return f}function a(f,g){return g===Ru?f.mapping=ss:g===Pu&&(f.mapping=to),f}function l(f){let g=0;const m=6;for(let y=0;y<m;y++)f[y]!==void 0&&g++;return g===m}function c(f){const g=f.target;g.removeEventListener("dispose",c);const m=e.get(g);m!==void 0&&(e.delete(g),m.dispose())}function u(f){const g=f.target;g.removeEventListener("dispose",u);const m=n.get(g);m!==void 0&&(n.delete(g),m.dispose())}function h(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function kC(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Sc("WebGLRenderer: "+i+" extension not supported."),r}}}function BC(t,e,n,i){const r={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const m in f.attributes)e.remove(f.attributes[m]);f.removeEventListener("dispose",o),delete r[f.id];const g=s.get(f);g&&(e.remove(g),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function a(h,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,n.memory.geometries++),f}function l(h){const f=h.attributes;for(const g in f)e.update(f[g],t.ARRAY_BUFFER)}function c(h){const f=[],g=h.index,m=h.attributes.position;let y=0;if(m===void 0)return;if(g!==null){const x=g.array;y=g.version;for(let _=0,E=x.length;_<E;_+=3){const b=x[_+0],T=x[_+1],C=x[_+2];f.push(b,T,T,C,C,b)}}else{const x=m.array;y=m.version;for(let _=0,E=x.length/3-1;_<E;_+=3){const b=_+0,T=_+1,C=_+2;f.push(b,T,T,C,C,b)}}const p=new(m.count>=65535?N_:P_)(f,1);p.version=y;const d=s.get(h);d&&e.remove(d),s.set(h,p)}function u(h){const f=s.get(h);if(f){const g=h.index;g!==null&&f.version<g.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function zC(t,e,n){let i;function r(f){i=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,g){t.drawElements(i,g,s,f*o),n.update(g,i,1)}function c(f,g,m){m!==0&&(t.drawElementsInstanced(i,g,s,f*o,m),n.update(g,i,m))}function u(f,g,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,g,0,s,f,0,m);let p=0;for(let d=0;d<m;d++)p+=g[d];n.update(p,i,1)}function h(f,g,m,y){if(m===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let d=0;d<f.length;d++)c(f[d]/o,g[d],y[d]);else{p.multiDrawElementsInstancedWEBGL(i,g,0,s,f,0,y,0,m);let d=0;for(let x=0;x<m;x++)d+=g[x]*y[x];n.update(d,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function VC(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:nt("WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function HC(t,e,n){const i=new WeakMap,r=new Ct;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let f=i.get(a);if(f===void 0||f.count!==h){let V=function(){v.dispose(),i.delete(a),a.removeEventListener("dispose",V)};var g=V;f!==void 0&&f.texture.dispose();const m=a.morphAttributes.position!==void 0,y=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],x=a.morphAttributes.normal||[],_=a.morphAttributes.color||[];let E=0;m===!0&&(E=1),y===!0&&(E=2),p===!0&&(E=3);let b=a.attributes.position.count*E,T=1;b>e.maxTextureSize&&(T=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const C=new Float32Array(b*T*4*h),v=new A_(C,b,T,h);v.type=ui,v.needsUpdate=!0;const w=E*4;for(let P=0;P<h;P++){const z=d[P],H=x[P],K=_[P],B=b*T*4*P;for(let F=0;F<z.count;F++){const U=F*w;m===!0&&(r.fromBufferAttribute(z,F),C[B+U+0]=r.x,C[B+U+1]=r.y,C[B+U+2]=r.z,C[B+U+3]=0),y===!0&&(r.fromBufferAttribute(H,F),C[B+U+4]=r.x,C[B+U+5]=r.y,C[B+U+6]=r.z,C[B+U+7]=0),p===!0&&(r.fromBufferAttribute(K,F),C[B+U+8]=r.x,C[B+U+9]=r.y,C[B+U+10]=r.z,C[B+U+11]=K.itemSize===4?r.w:1)}}f={count:h,texture:v,size:new ut(b,T)},i.set(a,f),a.addEventListener("dispose",V)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let m=0;for(let p=0;p<c.length;p++)m+=c[p];const y=a.morphTargetsRelative?1:1-m;l.getUniforms().setValue(t,"morphTargetBaseInfluence",y),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",f.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",f.size)}return{update:s}}function GC(t,e,n,i,r){let s=new WeakMap;function o(c){const u=r.render.frame,h=c.geometry,f=e.get(c,h);if(s.get(f)!==u&&(e.update(f),s.set(f,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==u&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){const g=c.skeleton;s.get(g)!==u&&(g.update(),s.set(g,u))}return f}function a(){s=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:o,dispose:a}}const WC={[f_]:"LINEAR_TONE_MAPPING",[d_]:"REINHARD_TONE_MAPPING",[h_]:"CINEON_TONE_MAPPING",[p_]:"ACES_FILMIC_TONE_MAPPING",[g_]:"AGX_TONE_MAPPING",[x_]:"NEUTRAL_TONE_MAPPING",[m_]:"CUSTOM_TONE_MAPPING"};function jC(t,e,n,i,r){const s=new mi(e,n,{type:t,depthBuffer:i,stencilBuffer:r}),o=new mi(e,n,{type:Vi,depthBuffer:!1,stencilBuffer:!1}),a=new _i;a.setAttribute("position",new Fi([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new Fi([0,2,0,0,2,0],2));const l=new O_({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new xi(a,l),u=new vp(-1,1,1,-1,0,1);let h=null,f=null,g=!1,m,y=null,p=[],d=!1;this.setSize=function(x,_){s.setSize(x,_),o.setSize(x,_);for(let E=0;E<p.length;E++){const b=p[E];b.setSize&&b.setSize(x,_)}},this.setEffects=function(x){p=x,d=p.length>0&&p[0].isRenderPass===!0;const _=s.width,E=s.height;for(let b=0;b<p.length;b++){const T=p[b];T.setSize&&T.setSize(_,E)}},this.begin=function(x,_){if(g||x.toneMapping===pi&&p.length===0)return!1;if(y=_,_!==null){const E=_.width,b=_.height;(s.width!==E||s.height!==b)&&this.setSize(E,b)}return d===!1&&x.setRenderTarget(s),m=x.toneMapping,x.toneMapping=pi,!0},this.hasRenderPass=function(){return d},this.end=function(x,_){x.toneMapping=m,g=!0;let E=s,b=o;for(let T=0;T<p.length;T++){const C=p[T];if(C.enabled!==!1&&(C.render(x,b,E,_),C.needsSwap!==!1)){const v=E;E=b,b=v}}if(h!==x.outputColorSpace||f!==x.toneMapping){h=x.outputColorSpace,f=x.toneMapping,l.defines={},Qe.getTransfer(h)===st&&(l.defines.SRGB_TRANSFER="");const T=WC[f];T&&(l.defines[T]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=E.texture,x.setRenderTarget(y),x.render(c,u),y=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){s.dispose(),o.dispose(),a.dispose(),l.dispose()}}const V_=new ln,eh=new ga(1,1),H_=new A_,G_=new x1,W_=new I_,jg=[],Xg=[],qg=new Float32Array(16),$g=new Float32Array(9),Yg=new Float32Array(4);function mo(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=jg[r];if(s===void 0&&(s=new Float32Array(r),jg[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function kt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Bt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Yc(t,e){let n=Xg[e];n===void 0&&(n=new Int32Array(e),Xg[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function XC(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function qC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(kt(n,e))return;t.uniform2fv(this.addr,e),Bt(n,e)}}function $C(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(kt(n,e))return;t.uniform3fv(this.addr,e),Bt(n,e)}}function YC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(kt(n,e))return;t.uniform4fv(this.addr,e),Bt(n,e)}}function KC(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(kt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Bt(n,e)}else{if(kt(n,i))return;Yg.set(i),t.uniformMatrix2fv(this.addr,!1,Yg),Bt(n,i)}}function ZC(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(kt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Bt(n,e)}else{if(kt(n,i))return;$g.set(i),t.uniformMatrix3fv(this.addr,!1,$g),Bt(n,i)}}function JC(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(kt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Bt(n,e)}else{if(kt(n,i))return;qg.set(i),t.uniformMatrix4fv(this.addr,!1,qg),Bt(n,i)}}function QC(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function eR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(kt(n,e))return;t.uniform2iv(this.addr,e),Bt(n,e)}}function tR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(kt(n,e))return;t.uniform3iv(this.addr,e),Bt(n,e)}}function nR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(kt(n,e))return;t.uniform4iv(this.addr,e),Bt(n,e)}}function iR(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function rR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(kt(n,e))return;t.uniform2uiv(this.addr,e),Bt(n,e)}}function sR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(kt(n,e))return;t.uniform3uiv(this.addr,e),Bt(n,e)}}function oR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(kt(n,e))return;t.uniform4uiv(this.addr,e),Bt(n,e)}}function aR(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(eh.compareFunction=n.isReversedDepthBuffer()?mp:pp,s=eh):s=V_,n.setTexture2D(e||s,r)}function lR(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||G_,r)}function cR(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||W_,r)}function uR(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||H_,r)}function fR(t){switch(t){case 5126:return XC;case 35664:return qC;case 35665:return $C;case 35666:return YC;case 35674:return KC;case 35675:return ZC;case 35676:return JC;case 5124:case 35670:return QC;case 35667:case 35671:return eR;case 35668:case 35672:return tR;case 35669:case 35673:return nR;case 5125:return iR;case 36294:return rR;case 36295:return sR;case 36296:return oR;case 35678:case 36198:case 36298:case 36306:case 35682:return aR;case 35679:case 36299:case 36307:return lR;case 35680:case 36300:case 36308:case 36293:return cR;case 36289:case 36303:case 36311:case 36292:return uR}}function dR(t,e){t.uniform1fv(this.addr,e)}function hR(t,e){const n=mo(e,this.size,2);t.uniform2fv(this.addr,n)}function pR(t,e){const n=mo(e,this.size,3);t.uniform3fv(this.addr,n)}function mR(t,e){const n=mo(e,this.size,4);t.uniform4fv(this.addr,n)}function gR(t,e){const n=mo(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function xR(t,e){const n=mo(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function vR(t,e){const n=mo(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function _R(t,e){t.uniform1iv(this.addr,e)}function yR(t,e){t.uniform2iv(this.addr,e)}function SR(t,e){t.uniform3iv(this.addr,e)}function ER(t,e){t.uniform4iv(this.addr,e)}function MR(t,e){t.uniform1uiv(this.addr,e)}function wR(t,e){t.uniform2uiv(this.addr,e)}function bR(t,e){t.uniform3uiv(this.addr,e)}function TR(t,e){t.uniform4uiv(this.addr,e)}function AR(t,e,n){const i=this.cache,r=e.length,s=Yc(n,r);kt(i,s)||(t.uniform1iv(this.addr,s),Bt(i,s));let o;this.type===t.SAMPLER_2D_SHADOW?o=eh:o=V_;for(let a=0;a!==r;++a)n.setTexture2D(e[a]||o,s[a])}function CR(t,e,n){const i=this.cache,r=e.length,s=Yc(n,r);kt(i,s)||(t.uniform1iv(this.addr,s),Bt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||G_,s[o])}function RR(t,e,n){const i=this.cache,r=e.length,s=Yc(n,r);kt(i,s)||(t.uniform1iv(this.addr,s),Bt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||W_,s[o])}function PR(t,e,n){const i=this.cache,r=e.length,s=Yc(n,r);kt(i,s)||(t.uniform1iv(this.addr,s),Bt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||H_,s[o])}function NR(t){switch(t){case 5126:return dR;case 35664:return hR;case 35665:return pR;case 35666:return mR;case 35674:return gR;case 35675:return xR;case 35676:return vR;case 5124:case 35670:return _R;case 35667:case 35671:return yR;case 35668:case 35672:return SR;case 35669:case 35673:return ER;case 5125:return MR;case 36294:return wR;case 36295:return bR;case 36296:return TR;case 35678:case 36198:case 36298:case 36306:case 35682:return AR;case 35679:case 36299:case 36307:return CR;case 35680:case 36300:case 36308:case 36293:return RR;case 36289:case 36303:case 36311:case 36292:return PR}}class LR{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=fR(n.type)}}class DR{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=NR(n.type)}}class IR{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const af=/(\w+)(\])?(\[|\.)?/g;function Kg(t,e){t.seq.push(e),t.map[e.id]=e}function UR(t,e,n){const i=t.name,r=i.length;for(af.lastIndex=0;;){const s=af.exec(i),o=af.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Kg(n,c===void 0?new LR(a,t,e):new DR(a,t,e));break}else{let h=n.map[a];h===void 0&&(h=new IR(a),Kg(n,h)),n=h}}}class jl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(n,o),l=e.getUniformLocation(n,a.name);UR(a,l,this)}const r=[],s=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function Zg(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const FR=37297;let OR=0;function kR(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const Jg=new Ge;function BR(t){Qe._getMatrix(Jg,Qe.workingColorSpace,t);const e=`mat3( ${Jg.elements.map(n=>n.toFixed(4))} )`;switch(Qe.getTransfer(t)){case vc:return[e,"LinearTransferOETF"];case st:return[e,"sRGBTransferOETF"];default:return ze("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Qg(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return n.toUpperCase()+`

`+s+`

`+kR(t.getShaderSource(e),a)}else return s}function zR(t,e){const n=BR(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const VR={[f_]:"Linear",[d_]:"Reinhard",[h_]:"Cineon",[p_]:"ACESFilmic",[g_]:"AgX",[x_]:"Neutral",[m_]:"Custom"};function HR(t,e){const n=VR[e];return n===void 0?(ze("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const El=new j;function GR(){Qe.getLuminanceCoefficients(El);const t=El.x.toFixed(4),e=El.y.toFixed(4),n=El.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function WR(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Bo).join(`
`)}function jR(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function XR(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Bo(t){return t!==""}function e0(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function t0(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const qR=/^[ \t]*#include +<([\w\d./]+)>/gm;function th(t){return t.replace(qR,YR)}const $R=new Map;function YR(t,e){let n=We[e];if(n===void 0){const i=$R.get(e);if(i!==void 0)n=We[i],ze('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return th(n)}const KR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function n0(t){return t.replace(KR,ZR)}function ZR(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function i0(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const JR={[zl]:"SHADOWMAP_TYPE_PCF",[ko]:"SHADOWMAP_TYPE_VSM"};function QR(t){return JR[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const eP={[ss]:"ENVMAP_TYPE_CUBE",[to]:"ENVMAP_TYPE_CUBE",[Xc]:"ENVMAP_TYPE_CUBE_UV"};function tP(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":eP[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const nP={[to]:"ENVMAP_MODE_REFRACTION"};function iP(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":nP[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const rP={[u_]:"ENVMAP_BLENDING_MULTIPLY",[Yb]:"ENVMAP_BLENDING_MIX",[Kb]:"ENVMAP_BLENDING_ADD"};function sP(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":rP[t.combine]||"ENVMAP_BLENDING_NONE"}function oP(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function aP(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=QR(n),c=tP(n),u=iP(n),h=sP(n),f=oP(n),g=WR(n),m=jR(s),y=r.createProgram();let p,d,x=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m].filter(Bo).join(`
`),p.length>0&&(p+=`
`),d=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m].filter(Bo).join(`
`),d.length>0&&(d+=`
`)):(p=[i0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Bo).join(`
`),d=[i0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==pi?"#define TONE_MAPPING":"",n.toneMapping!==pi?We.tonemapping_pars_fragment:"",n.toneMapping!==pi?HR("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",We.colorspace_pars_fragment,zR("linearToOutputTexel",n.outputColorSpace),GR(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Bo).join(`
`)),o=th(o),o=e0(o,n),o=t0(o,n),a=th(a),a=e0(a,n),a=t0(a,n),o=n0(o),a=n0(a),n.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,p=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,d=["#define varying in",n.glslVersion===_g?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===_g?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const _=x+p+o,E=x+d+a,b=Zg(r,r.VERTEX_SHADER,_),T=Zg(r,r.FRAGMENT_SHADER,E);r.attachShader(y,b),r.attachShader(y,T),n.index0AttributeName!==void 0?r.bindAttribLocation(y,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function C(P){if(t.debug.checkShaderErrors){const z=r.getProgramInfoLog(y)||"",H=r.getShaderInfoLog(b)||"",K=r.getShaderInfoLog(T)||"",B=z.trim(),F=H.trim(),U=K.trim();let O=!0,q=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(O=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,y,b,T);else{const k=Qg(r,b,"vertex"),ne=Qg(r,T,"fragment");nt("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+B+`
`+k+`
`+ne)}else B!==""?ze("WebGLProgram: Program Info Log:",B):(F===""||U==="")&&(q=!1);q&&(P.diagnostics={runnable:O,programLog:B,vertexShader:{log:F,prefix:p},fragmentShader:{log:U,prefix:d}})}r.deleteShader(b),r.deleteShader(T),v=new jl(r,y),w=XR(r,y)}let v;this.getUniforms=function(){return v===void 0&&C(this),v};let w;this.getAttributes=function(){return w===void 0&&C(this),w};let V=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return V===!1&&(V=r.getProgramParameter(y,FR)),V},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=OR++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=b,this.fragmentShader=T,this}let lP=0;class cP{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new uP(e),n.set(e,i)),i}}class uP{constructor(e){this.id=lP++,this.code=e,this.usedTimes=0}}function fP(t,e,n,i,r,s){const o=new C_,a=new cP,l=new Set,c=[],u=new Map,h=i.logarithmicDepthBuffer;let f=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(v){return l.add(v),v===0?"uv":`uv${v}`}function y(v,w,V,P,z){const H=P.fog,K=z.geometry,B=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?P.environment:null,F=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,U=e.get(v.envMap||B,F),O=U&&U.mapping===Xc?U.image.height:null,q=g[v.type];v.precision!==null&&(f=i.getMaxPrecision(v.precision),f!==v.precision&&ze("WebGLProgram.getParameters:",v.precision,"not supported, using",f,"instead."));const k=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,ne=k!==void 0?k.length:0;let ie=0;K.morphAttributes.position!==void 0&&(ie=1),K.morphAttributes.normal!==void 0&&(ie=2),K.morphAttributes.color!==void 0&&(ie=3);let De,He,Fe,Y;if(q){const rt=ai[q];De=rt.vertexShader,He=rt.fragmentShader}else De=v.vertexShader,He=v.fragmentShader,a.update(v),Fe=a.getVertexShaderID(v),Y=a.getFragmentShaderID(v);const se=t.getRenderTarget(),ue=t.state.buffers.depth.getReversed(),be=z.isInstancedMesh===!0,Ie=z.isBatchedMesh===!0,Ue=!!v.map,_t=!!v.matcap,Ye=!!U,Je=!!v.aoMap,ft=!!v.lightMap,je=!!v.bumpMap,bt=!!v.normalMap,N=!!v.displacementMap,Nt=!!v.emissiveMap,it=!!v.metalnessMap,ht=!!v.roughnessMap,Ce=v.anisotropy>0,A=v.clearcoat>0,S=v.dispersion>0,D=v.iridescence>0,Q=v.sheen>0,te=v.transmission>0,J=Ce&&!!v.anisotropyMap,Ee=A&&!!v.clearcoatMap,fe=A&&!!v.clearcoatNormalMap,Le=A&&!!v.clearcoatRoughnessMap,Oe=D&&!!v.iridescenceMap,oe=D&&!!v.iridescenceThicknessMap,le=Q&&!!v.sheenColorMap,Me=Q&&!!v.sheenRoughnessMap,Te=!!v.specularMap,ge=!!v.specularColorMap,Xe=!!v.specularIntensityMap,L=te&&!!v.transmissionMap,de=te&&!!v.thicknessMap,ce=!!v.gradientMap,_e=!!v.alphaMap,ae=v.alphaTest>0,Z=!!v.alphaHash,we=!!v.extensions;let Be=pi;v.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(Be=t.toneMapping);const pt={shaderID:q,shaderType:v.type,shaderName:v.name,vertexShader:De,fragmentShader:He,defines:v.defines,customVertexShaderID:Fe,customFragmentShaderID:Y,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:f,batching:Ie,batchingColor:Ie&&z._colorsTexture!==null,instancing:be,instancingColor:be&&z.instanceColor!==null,instancingMorph:be&&z.morphTexture!==null,outputColorSpace:se===null?t.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:io,alphaToCoverage:!!v.alphaToCoverage,map:Ue,matcap:_t,envMap:Ye,envMapMode:Ye&&U.mapping,envMapCubeUVHeight:O,aoMap:Je,lightMap:ft,bumpMap:je,normalMap:bt,displacementMap:N,emissiveMap:Nt,normalMapObjectSpace:bt&&v.normalMapType===e1,normalMapTangentSpace:bt&&v.normalMapType===Qb,metalnessMap:it,roughnessMap:ht,anisotropy:Ce,anisotropyMap:J,clearcoat:A,clearcoatMap:Ee,clearcoatNormalMap:fe,clearcoatRoughnessMap:Le,dispersion:S,iridescence:D,iridescenceMap:Oe,iridescenceThicknessMap:oe,sheen:Q,sheenColorMap:le,sheenRoughnessMap:Me,specularMap:Te,specularColorMap:ge,specularIntensityMap:Xe,transmission:te,transmissionMap:L,thicknessMap:de,gradientMap:ce,opaque:v.transparent===!1&&v.blending===Ws&&v.alphaToCoverage===!1,alphaMap:_e,alphaTest:ae,alphaHash:Z,combine:v.combine,mapUv:Ue&&m(v.map.channel),aoMapUv:Je&&m(v.aoMap.channel),lightMapUv:ft&&m(v.lightMap.channel),bumpMapUv:je&&m(v.bumpMap.channel),normalMapUv:bt&&m(v.normalMap.channel),displacementMapUv:N&&m(v.displacementMap.channel),emissiveMapUv:Nt&&m(v.emissiveMap.channel),metalnessMapUv:it&&m(v.metalnessMap.channel),roughnessMapUv:ht&&m(v.roughnessMap.channel),anisotropyMapUv:J&&m(v.anisotropyMap.channel),clearcoatMapUv:Ee&&m(v.clearcoatMap.channel),clearcoatNormalMapUv:fe&&m(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Le&&m(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Oe&&m(v.iridescenceMap.channel),iridescenceThicknessMapUv:oe&&m(v.iridescenceThicknessMap.channel),sheenColorMapUv:le&&m(v.sheenColorMap.channel),sheenRoughnessMapUv:Me&&m(v.sheenRoughnessMap.channel),specularMapUv:Te&&m(v.specularMap.channel),specularColorMapUv:ge&&m(v.specularColorMap.channel),specularIntensityMapUv:Xe&&m(v.specularIntensityMap.channel),transmissionMapUv:L&&m(v.transmissionMap.channel),thicknessMapUv:de&&m(v.thicknessMap.channel),alphaMapUv:_e&&m(v.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(bt||Ce),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!K.attributes.uv&&(Ue||_e),fog:!!H,useFog:v.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||K.attributes.normal===void 0&&bt===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:ue,skinning:z.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:ne,morphTextureStride:ie,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:v.dithering,shadowMapEnabled:t.shadowMap.enabled&&V.length>0,shadowMapType:t.shadowMap.type,toneMapping:Be,decodeVideoTexture:Ue&&v.map.isVideoTexture===!0&&Qe.getTransfer(v.map.colorSpace)===st,decodeVideoTextureEmissive:Nt&&v.emissiveMap.isVideoTexture===!0&&Qe.getTransfer(v.emissiveMap.colorSpace)===st,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===ci,flipSided:v.side===_n,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:we&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(we&&v.extensions.multiDraw===!0||Ie)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return pt.vertexUv1s=l.has(1),pt.vertexUv2s=l.has(2),pt.vertexUv3s=l.has(3),l.clear(),pt}function p(v){const w=[];if(v.shaderID?w.push(v.shaderID):(w.push(v.customVertexShaderID),w.push(v.customFragmentShaderID)),v.defines!==void 0)for(const V in v.defines)w.push(V),w.push(v.defines[V]);return v.isRawShaderMaterial===!1&&(d(w,v),x(w,v),w.push(t.outputColorSpace)),w.push(v.customProgramCacheKey),w.join()}function d(v,w){v.push(w.precision),v.push(w.outputColorSpace),v.push(w.envMapMode),v.push(w.envMapCubeUVHeight),v.push(w.mapUv),v.push(w.alphaMapUv),v.push(w.lightMapUv),v.push(w.aoMapUv),v.push(w.bumpMapUv),v.push(w.normalMapUv),v.push(w.displacementMapUv),v.push(w.emissiveMapUv),v.push(w.metalnessMapUv),v.push(w.roughnessMapUv),v.push(w.anisotropyMapUv),v.push(w.clearcoatMapUv),v.push(w.clearcoatNormalMapUv),v.push(w.clearcoatRoughnessMapUv),v.push(w.iridescenceMapUv),v.push(w.iridescenceThicknessMapUv),v.push(w.sheenColorMapUv),v.push(w.sheenRoughnessMapUv),v.push(w.specularMapUv),v.push(w.specularColorMapUv),v.push(w.specularIntensityMapUv),v.push(w.transmissionMapUv),v.push(w.thicknessMapUv),v.push(w.combine),v.push(w.fogExp2),v.push(w.sizeAttenuation),v.push(w.morphTargetsCount),v.push(w.morphAttributeCount),v.push(w.numDirLights),v.push(w.numPointLights),v.push(w.numSpotLights),v.push(w.numSpotLightMaps),v.push(w.numHemiLights),v.push(w.numRectAreaLights),v.push(w.numDirLightShadows),v.push(w.numPointLightShadows),v.push(w.numSpotLightShadows),v.push(w.numSpotLightShadowsWithMaps),v.push(w.numLightProbes),v.push(w.shadowMapType),v.push(w.toneMapping),v.push(w.numClippingPlanes),v.push(w.numClipIntersection),v.push(w.depthPacking)}function x(v,w){o.disableAll(),w.instancing&&o.enable(0),w.instancingColor&&o.enable(1),w.instancingMorph&&o.enable(2),w.matcap&&o.enable(3),w.envMap&&o.enable(4),w.normalMapObjectSpace&&o.enable(5),w.normalMapTangentSpace&&o.enable(6),w.clearcoat&&o.enable(7),w.iridescence&&o.enable(8),w.alphaTest&&o.enable(9),w.vertexColors&&o.enable(10),w.vertexAlphas&&o.enable(11),w.vertexUv1s&&o.enable(12),w.vertexUv2s&&o.enable(13),w.vertexUv3s&&o.enable(14),w.vertexTangents&&o.enable(15),w.anisotropy&&o.enable(16),w.alphaHash&&o.enable(17),w.batching&&o.enable(18),w.dispersion&&o.enable(19),w.batchingColor&&o.enable(20),w.gradientMap&&o.enable(21),v.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.reversedDepthBuffer&&o.enable(4),w.skinning&&o.enable(5),w.morphTargets&&o.enable(6),w.morphNormals&&o.enable(7),w.morphColors&&o.enable(8),w.premultipliedAlpha&&o.enable(9),w.shadowMapEnabled&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),w.decodeVideoTextureEmissive&&o.enable(20),w.alphaToCoverage&&o.enable(21),v.push(o.mask)}function _(v){const w=g[v.type];let V;if(w){const P=ai[w];V=k1.clone(P.uniforms)}else V=v.uniforms;return V}function E(v,w){let V=u.get(w);return V!==void 0?++V.usedTimes:(V=new aP(t,w,v,r),c.push(V),u.set(w,V)),V}function b(v){if(--v.usedTimes===0){const w=c.indexOf(v);c[w]=c[c.length-1],c.pop(),u.delete(v.cacheKey),v.destroy()}}function T(v){a.remove(v)}function C(){a.dispose()}return{getParameters:y,getProgramCacheKey:p,getUniforms:_,acquireProgram:E,releaseProgram:b,releaseShaderCache:T,programs:c,dispose:C}}function dP(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function hP(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function r0(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function s0(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(f){let g=0;return f.isInstancedMesh&&(g+=2),f.isSkinnedMesh&&(g+=1),g}function a(f,g,m,y,p,d){let x=t[e];return x===void 0?(x={id:f.id,object:f,geometry:g,material:m,materialVariant:o(f),groupOrder:y,renderOrder:f.renderOrder,z:p,group:d},t[e]=x):(x.id=f.id,x.object=f,x.geometry=g,x.material=m,x.materialVariant=o(f),x.groupOrder=y,x.renderOrder=f.renderOrder,x.z=p,x.group=d),e++,x}function l(f,g,m,y,p,d){const x=a(f,g,m,y,p,d);m.transmission>0?i.push(x):m.transparent===!0?r.push(x):n.push(x)}function c(f,g,m,y,p,d){const x=a(f,g,m,y,p,d);m.transmission>0?i.unshift(x):m.transparent===!0?r.unshift(x):n.unshift(x)}function u(f,g){n.length>1&&n.sort(f||hP),i.length>1&&i.sort(g||r0),r.length>1&&r.sort(g||r0)}function h(){for(let f=e,g=t.length;f<g;f++){const m=t[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:h,sort:u}}function pP(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new s0,t.set(i,[o])):r>=s.length?(o=new s0,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function mP(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new j,color:new ot};break;case"SpotLight":n={position:new j,direction:new j,color:new ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new j,color:new ot,distance:0,decay:0};break;case"HemisphereLight":n={direction:new j,skyColor:new ot,groundColor:new ot};break;case"RectAreaLight":n={color:new ot,position:new j,halfWidth:new j,halfHeight:new j};break}return t[e.id]=n,n}}}function gP(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let xP=0;function vP(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function _P(t){const e=new mP,n=gP(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new j);const r=new j,s=new It,o=new It;function a(c){let u=0,h=0,f=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let g=0,m=0,y=0,p=0,d=0,x=0,_=0,E=0,b=0,T=0,C=0;c.sort(vP);for(let w=0,V=c.length;w<V;w++){const P=c[w],z=P.color,H=P.intensity,K=P.distance;let B=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===no?B=P.shadow.map.texture:B=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)u+=z.r*H,h+=z.g*H,f+=z.b*H;else if(P.isLightProbe){for(let F=0;F<9;F++)i.probe[F].addScaledVector(P.sh.coefficients[F],H);C++}else if(P.isDirectionalLight){const F=e.get(P);if(F.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const U=P.shadow,O=n.get(P);O.shadowIntensity=U.intensity,O.shadowBias=U.bias,O.shadowNormalBias=U.normalBias,O.shadowRadius=U.radius,O.shadowMapSize=U.mapSize,i.directionalShadow[g]=O,i.directionalShadowMap[g]=B,i.directionalShadowMatrix[g]=P.shadow.matrix,x++}i.directional[g]=F,g++}else if(P.isSpotLight){const F=e.get(P);F.position.setFromMatrixPosition(P.matrixWorld),F.color.copy(z).multiplyScalar(H),F.distance=K,F.coneCos=Math.cos(P.angle),F.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),F.decay=P.decay,i.spot[y]=F;const U=P.shadow;if(P.map&&(i.spotLightMap[b]=P.map,b++,U.updateMatrices(P),P.castShadow&&T++),i.spotLightMatrix[y]=U.matrix,P.castShadow){const O=n.get(P);O.shadowIntensity=U.intensity,O.shadowBias=U.bias,O.shadowNormalBias=U.normalBias,O.shadowRadius=U.radius,O.shadowMapSize=U.mapSize,i.spotShadow[y]=O,i.spotShadowMap[y]=B,E++}y++}else if(P.isRectAreaLight){const F=e.get(P);F.color.copy(z).multiplyScalar(H),F.halfWidth.set(P.width*.5,0,0),F.halfHeight.set(0,P.height*.5,0),i.rectArea[p]=F,p++}else if(P.isPointLight){const F=e.get(P);if(F.color.copy(P.color).multiplyScalar(P.intensity),F.distance=P.distance,F.decay=P.decay,P.castShadow){const U=P.shadow,O=n.get(P);O.shadowIntensity=U.intensity,O.shadowBias=U.bias,O.shadowNormalBias=U.normalBias,O.shadowRadius=U.radius,O.shadowMapSize=U.mapSize,O.shadowCameraNear=U.camera.near,O.shadowCameraFar=U.camera.far,i.pointShadow[m]=O,i.pointShadowMap[m]=B,i.pointShadowMatrix[m]=P.shadow.matrix,_++}i.point[m]=F,m++}else if(P.isHemisphereLight){const F=e.get(P);F.skyColor.copy(P.color).multiplyScalar(H),F.groundColor.copy(P.groundColor).multiplyScalar(H),i.hemi[d]=F,d++}}p>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=he.LTC_FLOAT_1,i.rectAreaLTC2=he.LTC_FLOAT_2):(i.rectAreaLTC1=he.LTC_HALF_1,i.rectAreaLTC2=he.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=f;const v=i.hash;(v.directionalLength!==g||v.pointLength!==m||v.spotLength!==y||v.rectAreaLength!==p||v.hemiLength!==d||v.numDirectionalShadows!==x||v.numPointShadows!==_||v.numSpotShadows!==E||v.numSpotMaps!==b||v.numLightProbes!==C)&&(i.directional.length=g,i.spot.length=y,i.rectArea.length=p,i.point.length=m,i.hemi.length=d,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=E+b-T,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=C,v.directionalLength=g,v.pointLength=m,v.spotLength=y,v.rectAreaLength=p,v.hemiLength=d,v.numDirectionalShadows=x,v.numPointShadows=_,v.numSpotShadows=E,v.numSpotMaps=b,v.numLightProbes=C,i.version=xP++)}function l(c,u){let h=0,f=0,g=0,m=0,y=0;const p=u.matrixWorldInverse;for(let d=0,x=c.length;d<x;d++){const _=c[d];if(_.isDirectionalLight){const E=i.directional[h];E.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(p),h++}else if(_.isSpotLight){const E=i.spot[g];E.position.setFromMatrixPosition(_.matrixWorld),E.position.applyMatrix4(p),E.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(p),g++}else if(_.isRectAreaLight){const E=i.rectArea[m];E.position.setFromMatrixPosition(_.matrixWorld),E.position.applyMatrix4(p),o.identity(),s.copy(_.matrixWorld),s.premultiply(p),o.extractRotation(s),E.halfWidth.set(_.width*.5,0,0),E.halfHeight.set(0,_.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),m++}else if(_.isPointLight){const E=i.point[f];E.position.setFromMatrixPosition(_.matrixWorld),E.position.applyMatrix4(p),f++}else if(_.isHemisphereLight){const E=i.hemi[y];E.direction.setFromMatrixPosition(_.matrixWorld),E.direction.transformDirection(p),y++}}}return{setup:a,setupView:l,state:i}}function o0(t){const e=new _P(t),n=[],i=[];function r(u){c.camera=u,n.length=0,i.length=0}function s(u){n.push(u)}function o(u){i.push(u)}function a(){e.setup(n)}function l(u){e.setupView(n,u)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function yP(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new o0(t),e.set(r,[a])):s>=o.length?(a=new o0(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}const SP=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,EP=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,MP=[new j(1,0,0),new j(-1,0,0),new j(0,1,0),new j(0,-1,0),new j(0,0,1),new j(0,0,-1)],wP=[new j(0,-1,0),new j(0,-1,0),new j(0,0,1),new j(0,0,-1),new j(0,-1,0),new j(0,-1,0)],a0=new It,No=new j,lf=new j;function bP(t,e,n){let i=new D_;const r=new ut,s=new ut,o=new Ct,a=new V1,l=new H1,c={},u=n.maxTextureSize,h={[Er]:_n,[_n]:Er,[ci]:ci},f=new vi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ut},radius:{value:4}},vertexShader:SP,fragmentShader:EP}),g=f.clone();g.defines.HORIZONTAL_PASS=1;const m=new _i;m.setAttribute("position",new Qn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new xi(m,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=zl;let d=this.type;this.render=function(T,C,v){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;this.type===Pb&&(ze("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=zl);const w=t.getRenderTarget(),V=t.getActiveCubeFace(),P=t.getActiveMipmapLevel(),z=t.state;z.setBlending(Ii),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const H=d!==this.type;H&&C.traverse(function(K){K.material&&(Array.isArray(K.material)?K.material.forEach(B=>B.needsUpdate=!0):K.material.needsUpdate=!0)});for(let K=0,B=T.length;K<B;K++){const F=T[K],U=F.shadow;if(U===void 0){ze("WebGLShadowMap:",F,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;r.copy(U.mapSize);const O=U.getFrameExtents();r.multiply(O),s.copy(U.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/O.x),r.x=s.x*O.x,U.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/O.y),r.y=s.y*O.y,U.mapSize.y=s.y));const q=t.state.buffers.depth.getReversed();if(U.camera._reversedDepth=q,U.map===null||H===!0){if(U.map!==null&&(U.map.depthTexture!==null&&(U.map.depthTexture.dispose(),U.map.depthTexture=null),U.map.dispose()),this.type===ko){if(F.isPointLight){ze("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}U.map=new mi(r.x,r.y,{format:no,type:Vi,minFilter:nn,magFilter:nn,generateMipmaps:!1}),U.map.texture.name=F.name+".shadowMap",U.map.depthTexture=new ga(r.x,r.y,ui),U.map.depthTexture.name=F.name+".shadowMapDepth",U.map.depthTexture.format=Hi,U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=Xt,U.map.depthTexture.magFilter=Xt}else F.isPointLight?(U.map=new z_(r.x),U.map.depthTexture=new F1(r.x,gi)):(U.map=new mi(r.x,r.y),U.map.depthTexture=new ga(r.x,r.y,gi)),U.map.depthTexture.name=F.name+".shadowMap",U.map.depthTexture.format=Hi,this.type===zl?(U.map.depthTexture.compareFunction=q?mp:pp,U.map.depthTexture.minFilter=nn,U.map.depthTexture.magFilter=nn):(U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=Xt,U.map.depthTexture.magFilter=Xt);U.camera.updateProjectionMatrix()}const k=U.map.isWebGLCubeRenderTarget?6:1;for(let ne=0;ne<k;ne++){if(U.map.isWebGLCubeRenderTarget)t.setRenderTarget(U.map,ne),t.clear();else{ne===0&&(t.setRenderTarget(U.map),t.clear());const ie=U.getViewport(ne);o.set(s.x*ie.x,s.y*ie.y,s.x*ie.z,s.y*ie.w),z.viewport(o)}if(F.isPointLight){const ie=U.camera,De=U.matrix,He=F.distance||ie.far;He!==ie.far&&(ie.far=He,ie.updateProjectionMatrix()),No.setFromMatrixPosition(F.matrixWorld),ie.position.copy(No),lf.copy(ie.position),lf.add(MP[ne]),ie.up.copy(wP[ne]),ie.lookAt(lf),ie.updateMatrixWorld(),De.makeTranslation(-No.x,-No.y,-No.z),a0.multiplyMatrices(ie.projectionMatrix,ie.matrixWorldInverse),U._frustum.setFromProjectionMatrix(a0,ie.coordinateSystem,ie.reversedDepth)}else U.updateMatrices(F);i=U.getFrustum(),E(C,v,U.camera,F,this.type)}U.isPointLightShadow!==!0&&this.type===ko&&x(U,v),U.needsUpdate=!1}d=this.type,p.needsUpdate=!1,t.setRenderTarget(w,V,P)};function x(T,C){const v=e.update(y);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,g.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,g.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new mi(r.x,r.y,{format:no,type:Vi})),f.uniforms.shadow_pass.value=T.map.depthTexture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,t.setRenderTarget(T.mapPass),t.clear(),t.renderBufferDirect(C,null,v,f,y,null),g.uniforms.shadow_pass.value=T.mapPass.texture,g.uniforms.resolution.value=T.mapSize,g.uniforms.radius.value=T.radius,t.setRenderTarget(T.map),t.clear(),t.renderBufferDirect(C,null,v,g,y,null)}function _(T,C,v,w){let V=null;const P=v.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(P!==void 0)V=P;else if(V=v.isPointLight===!0?l:a,t.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const z=V.uuid,H=C.uuid;let K=c[z];K===void 0&&(K={},c[z]=K);let B=K[H];B===void 0&&(B=V.clone(),K[H]=B,C.addEventListener("dispose",b)),V=B}if(V.visible=C.visible,V.wireframe=C.wireframe,w===ko?V.side=C.shadowSide!==null?C.shadowSide:C.side:V.side=C.shadowSide!==null?C.shadowSide:h[C.side],V.alphaMap=C.alphaMap,V.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,V.map=C.map,V.clipShadows=C.clipShadows,V.clippingPlanes=C.clippingPlanes,V.clipIntersection=C.clipIntersection,V.displacementMap=C.displacementMap,V.displacementScale=C.displacementScale,V.displacementBias=C.displacementBias,V.wireframeLinewidth=C.wireframeLinewidth,V.linewidth=C.linewidth,v.isPointLight===!0&&V.isMeshDistanceMaterial===!0){const z=t.properties.get(V);z.light=v}return V}function E(T,C,v,w,V){if(T.visible===!1)return;if(T.layers.test(C.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&V===ko)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,T.matrixWorld);const H=e.update(T),K=T.material;if(Array.isArray(K)){const B=H.groups;for(let F=0,U=B.length;F<U;F++){const O=B[F],q=K[O.materialIndex];if(q&&q.visible){const k=_(T,q,w,V);T.onBeforeShadow(t,T,C,v,H,k,O),t.renderBufferDirect(v,null,H,k,T,O),T.onAfterShadow(t,T,C,v,H,k,O)}}}else if(K.visible){const B=_(T,K,w,V);T.onBeforeShadow(t,T,C,v,H,B,null),t.renderBufferDirect(v,null,H,B,T,null),T.onAfterShadow(t,T,C,v,H,B,null)}}const z=T.children;for(let H=0,K=z.length;H<K;H++)E(z[H],C,v,w,V)}function b(T){T.target.removeEventListener("dispose",b);for(const v in c){const w=c[v],V=T.target.uuid;V in w&&(w[V].dispose(),delete w[V])}}}function TP(t,e){function n(){let L=!1;const de=new Ct;let ce=null;const _e=new Ct(0,0,0,0);return{setMask:function(ae){ce!==ae&&!L&&(t.colorMask(ae,ae,ae,ae),ce=ae)},setLocked:function(ae){L=ae},setClear:function(ae,Z,we,Be,pt){pt===!0&&(ae*=Be,Z*=Be,we*=Be),de.set(ae,Z,we,Be),_e.equals(de)===!1&&(t.clearColor(ae,Z,we,Be),_e.copy(de))},reset:function(){L=!1,ce=null,_e.set(-1,0,0,0)}}}function i(){let L=!1,de=!1,ce=null,_e=null,ae=null;return{setReversed:function(Z){if(de!==Z){const we=e.get("EXT_clip_control");Z?we.clipControlEXT(we.LOWER_LEFT_EXT,we.ZERO_TO_ONE_EXT):we.clipControlEXT(we.LOWER_LEFT_EXT,we.NEGATIVE_ONE_TO_ONE_EXT),de=Z;const Be=ae;ae=null,this.setClear(Be)}},getReversed:function(){return de},setTest:function(Z){Z?se(t.DEPTH_TEST):ue(t.DEPTH_TEST)},setMask:function(Z){ce!==Z&&!L&&(t.depthMask(Z),ce=Z)},setFunc:function(Z){if(de&&(Z=u1[Z]),_e!==Z){switch(Z){case dd:t.depthFunc(t.NEVER);break;case hd:t.depthFunc(t.ALWAYS);break;case pd:t.depthFunc(t.LESS);break;case eo:t.depthFunc(t.LEQUAL);break;case md:t.depthFunc(t.EQUAL);break;case gd:t.depthFunc(t.GEQUAL);break;case xd:t.depthFunc(t.GREATER);break;case vd:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}_e=Z}},setLocked:function(Z){L=Z},setClear:function(Z){ae!==Z&&(ae=Z,de&&(Z=1-Z),t.clearDepth(Z))},reset:function(){L=!1,ce=null,_e=null,ae=null,de=!1}}}function r(){let L=!1,de=null,ce=null,_e=null,ae=null,Z=null,we=null,Be=null,pt=null;return{setTest:function(rt){L||(rt?se(t.STENCIL_TEST):ue(t.STENCIL_TEST))},setMask:function(rt){de!==rt&&!L&&(t.stencilMask(rt),de=rt)},setFunc:function(rt,yi,Si){(ce!==rt||_e!==yi||ae!==Si)&&(t.stencilFunc(rt,yi,Si),ce=rt,_e=yi,ae=Si)},setOp:function(rt,yi,Si){(Z!==rt||we!==yi||Be!==Si)&&(t.stencilOp(rt,yi,Si),Z=rt,we=yi,Be=Si)},setLocked:function(rt){L=rt},setClear:function(rt){pt!==rt&&(t.clearStencil(rt),pt=rt)},reset:function(){L=!1,de=null,ce=null,_e=null,ae=null,Z=null,we=null,Be=null,pt=null}}}const s=new n,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let u={},h={},f=new WeakMap,g=[],m=null,y=!1,p=null,d=null,x=null,_=null,E=null,b=null,T=null,C=new ot(0,0,0),v=0,w=!1,V=null,P=null,z=null,H=null,K=null;const B=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,U=0;const O=t.getParameter(t.VERSION);O.indexOf("WebGL")!==-1?(U=parseFloat(/^WebGL (\d)/.exec(O)[1]),F=U>=1):O.indexOf("OpenGL ES")!==-1&&(U=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),F=U>=2);let q=null,k={};const ne=t.getParameter(t.SCISSOR_BOX),ie=t.getParameter(t.VIEWPORT),De=new Ct().fromArray(ne),He=new Ct().fromArray(ie);function Fe(L,de,ce,_e){const ae=new Uint8Array(4),Z=t.createTexture();t.bindTexture(L,Z),t.texParameteri(L,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(L,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let we=0;we<ce;we++)L===t.TEXTURE_3D||L===t.TEXTURE_2D_ARRAY?t.texImage3D(de,0,t.RGBA,1,1,_e,0,t.RGBA,t.UNSIGNED_BYTE,ae):t.texImage2D(de+we,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ae);return Z}const Y={};Y[t.TEXTURE_2D]=Fe(t.TEXTURE_2D,t.TEXTURE_2D,1),Y[t.TEXTURE_CUBE_MAP]=Fe(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[t.TEXTURE_2D_ARRAY]=Fe(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Y[t.TEXTURE_3D]=Fe(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),se(t.DEPTH_TEST),o.setFunc(eo),je(!1),bt(hg),se(t.CULL_FACE),Je(Ii);function se(L){u[L]!==!0&&(t.enable(L),u[L]=!0)}function ue(L){u[L]!==!1&&(t.disable(L),u[L]=!1)}function be(L,de){return h[L]!==de?(t.bindFramebuffer(L,de),h[L]=de,L===t.DRAW_FRAMEBUFFER&&(h[t.FRAMEBUFFER]=de),L===t.FRAMEBUFFER&&(h[t.DRAW_FRAMEBUFFER]=de),!0):!1}function Ie(L,de){let ce=g,_e=!1;if(L){ce=f.get(de),ce===void 0&&(ce=[],f.set(de,ce));const ae=L.textures;if(ce.length!==ae.length||ce[0]!==t.COLOR_ATTACHMENT0){for(let Z=0,we=ae.length;Z<we;Z++)ce[Z]=t.COLOR_ATTACHMENT0+Z;ce.length=ae.length,_e=!0}}else ce[0]!==t.BACK&&(ce[0]=t.BACK,_e=!0);_e&&t.drawBuffers(ce)}function Ue(L){return m!==L?(t.useProgram(L),m=L,!0):!1}const _t={[Vr]:t.FUNC_ADD,[Lb]:t.FUNC_SUBTRACT,[Db]:t.FUNC_REVERSE_SUBTRACT};_t[Ib]=t.MIN,_t[Ub]=t.MAX;const Ye={[Fb]:t.ZERO,[Ob]:t.ONE,[kb]:t.SRC_COLOR,[ud]:t.SRC_ALPHA,[Wb]:t.SRC_ALPHA_SATURATE,[Hb]:t.DST_COLOR,[zb]:t.DST_ALPHA,[Bb]:t.ONE_MINUS_SRC_COLOR,[fd]:t.ONE_MINUS_SRC_ALPHA,[Gb]:t.ONE_MINUS_DST_COLOR,[Vb]:t.ONE_MINUS_DST_ALPHA,[jb]:t.CONSTANT_COLOR,[Xb]:t.ONE_MINUS_CONSTANT_COLOR,[qb]:t.CONSTANT_ALPHA,[$b]:t.ONE_MINUS_CONSTANT_ALPHA};function Je(L,de,ce,_e,ae,Z,we,Be,pt,rt){if(L===Ii){y===!0&&(ue(t.BLEND),y=!1);return}if(y===!1&&(se(t.BLEND),y=!0),L!==Nb){if(L!==p||rt!==w){if((d!==Vr||E!==Vr)&&(t.blendEquation(t.FUNC_ADD),d=Vr,E=Vr),rt)switch(L){case Ws:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case pg:t.blendFunc(t.ONE,t.ONE);break;case mg:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case gg:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:nt("WebGLState: Invalid blending: ",L);break}else switch(L){case Ws:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case pg:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case mg:nt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case gg:nt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:nt("WebGLState: Invalid blending: ",L);break}x=null,_=null,b=null,T=null,C.set(0,0,0),v=0,p=L,w=rt}return}ae=ae||de,Z=Z||ce,we=we||_e,(de!==d||ae!==E)&&(t.blendEquationSeparate(_t[de],_t[ae]),d=de,E=ae),(ce!==x||_e!==_||Z!==b||we!==T)&&(t.blendFuncSeparate(Ye[ce],Ye[_e],Ye[Z],Ye[we]),x=ce,_=_e,b=Z,T=we),(Be.equals(C)===!1||pt!==v)&&(t.blendColor(Be.r,Be.g,Be.b,pt),C.copy(Be),v=pt),p=L,w=!1}function ft(L,de){L.side===ci?ue(t.CULL_FACE):se(t.CULL_FACE);let ce=L.side===_n;de&&(ce=!ce),je(ce),L.blending===Ws&&L.transparent===!1?Je(Ii):Je(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),o.setFunc(L.depthFunc),o.setTest(L.depthTest),o.setMask(L.depthWrite),s.setMask(L.colorWrite);const _e=L.stencilWrite;a.setTest(_e),_e&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Nt(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?se(t.SAMPLE_ALPHA_TO_COVERAGE):ue(t.SAMPLE_ALPHA_TO_COVERAGE)}function je(L){V!==L&&(L?t.frontFace(t.CW):t.frontFace(t.CCW),V=L)}function bt(L){L!==Cb?(se(t.CULL_FACE),L!==P&&(L===hg?t.cullFace(t.BACK):L===Rb?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ue(t.CULL_FACE),P=L}function N(L){L!==z&&(F&&t.lineWidth(L),z=L)}function Nt(L,de,ce){L?(se(t.POLYGON_OFFSET_FILL),(H!==de||K!==ce)&&(H=de,K=ce,o.getReversed()&&(de=-de),t.polygonOffset(de,ce))):ue(t.POLYGON_OFFSET_FILL)}function it(L){L?se(t.SCISSOR_TEST):ue(t.SCISSOR_TEST)}function ht(L){L===void 0&&(L=t.TEXTURE0+B-1),q!==L&&(t.activeTexture(L),q=L)}function Ce(L,de,ce){ce===void 0&&(q===null?ce=t.TEXTURE0+B-1:ce=q);let _e=k[ce];_e===void 0&&(_e={type:void 0,texture:void 0},k[ce]=_e),(_e.type!==L||_e.texture!==de)&&(q!==ce&&(t.activeTexture(ce),q=ce),t.bindTexture(L,de||Y[L]),_e.type=L,_e.texture=de)}function A(){const L=k[q];L!==void 0&&L.type!==void 0&&(t.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function S(){try{t.compressedTexImage2D(...arguments)}catch(L){nt("WebGLState:",L)}}function D(){try{t.compressedTexImage3D(...arguments)}catch(L){nt("WebGLState:",L)}}function Q(){try{t.texSubImage2D(...arguments)}catch(L){nt("WebGLState:",L)}}function te(){try{t.texSubImage3D(...arguments)}catch(L){nt("WebGLState:",L)}}function J(){try{t.compressedTexSubImage2D(...arguments)}catch(L){nt("WebGLState:",L)}}function Ee(){try{t.compressedTexSubImage3D(...arguments)}catch(L){nt("WebGLState:",L)}}function fe(){try{t.texStorage2D(...arguments)}catch(L){nt("WebGLState:",L)}}function Le(){try{t.texStorage3D(...arguments)}catch(L){nt("WebGLState:",L)}}function Oe(){try{t.texImage2D(...arguments)}catch(L){nt("WebGLState:",L)}}function oe(){try{t.texImage3D(...arguments)}catch(L){nt("WebGLState:",L)}}function le(L){De.equals(L)===!1&&(t.scissor(L.x,L.y,L.z,L.w),De.copy(L))}function Me(L){He.equals(L)===!1&&(t.viewport(L.x,L.y,L.z,L.w),He.copy(L))}function Te(L,de){let ce=c.get(de);ce===void 0&&(ce=new WeakMap,c.set(de,ce));let _e=ce.get(L);_e===void 0&&(_e=t.getUniformBlockIndex(de,L.name),ce.set(L,_e))}function ge(L,de){const _e=c.get(de).get(L);l.get(de)!==_e&&(t.uniformBlockBinding(de,_e,L.__bindingPointIndex),l.set(de,_e))}function Xe(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),u={},q=null,k={},h={},f=new WeakMap,g=[],m=null,y=!1,p=null,d=null,x=null,_=null,E=null,b=null,T=null,C=new ot(0,0,0),v=0,w=!1,V=null,P=null,z=null,H=null,K=null,De.set(0,0,t.canvas.width,t.canvas.height),He.set(0,0,t.canvas.width,t.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:se,disable:ue,bindFramebuffer:be,drawBuffers:Ie,useProgram:Ue,setBlending:Je,setMaterial:ft,setFlipSided:je,setCullFace:bt,setLineWidth:N,setPolygonOffset:Nt,setScissorTest:it,activeTexture:ht,bindTexture:Ce,unbindTexture:A,compressedTexImage2D:S,compressedTexImage3D:D,texImage2D:Oe,texImage3D:oe,updateUBOMapping:Te,uniformBlockBinding:ge,texStorage2D:fe,texStorage3D:Le,texSubImage2D:Q,texSubImage3D:te,compressedTexSubImage2D:J,compressedTexSubImage3D:Ee,scissor:le,viewport:Me,reset:Xe}}function AP(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ut,u=new WeakMap;let h;const f=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(A,S){return g?new OffscreenCanvas(A,S):yc("canvas")}function y(A,S,D){let Q=1;const te=Ce(A);if((te.width>D||te.height>D)&&(Q=D/Math.max(te.width,te.height)),Q<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const J=Math.floor(Q*te.width),Ee=Math.floor(Q*te.height);h===void 0&&(h=m(J,Ee));const fe=S?m(J,Ee):h;return fe.width=J,fe.height=Ee,fe.getContext("2d").drawImage(A,0,0,J,Ee),ze("WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+J+"x"+Ee+")."),fe}else return"data"in A&&ze("WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),A;return A}function p(A){return A.generateMipmaps}function d(A){t.generateMipmap(A)}function x(A){return A.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?t.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function _(A,S,D,Q,te=!1){if(A!==null){if(t[A]!==void 0)return t[A];ze("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let J=S;if(S===t.RED&&(D===t.FLOAT&&(J=t.R32F),D===t.HALF_FLOAT&&(J=t.R16F),D===t.UNSIGNED_BYTE&&(J=t.R8)),S===t.RED_INTEGER&&(D===t.UNSIGNED_BYTE&&(J=t.R8UI),D===t.UNSIGNED_SHORT&&(J=t.R16UI),D===t.UNSIGNED_INT&&(J=t.R32UI),D===t.BYTE&&(J=t.R8I),D===t.SHORT&&(J=t.R16I),D===t.INT&&(J=t.R32I)),S===t.RG&&(D===t.FLOAT&&(J=t.RG32F),D===t.HALF_FLOAT&&(J=t.RG16F),D===t.UNSIGNED_BYTE&&(J=t.RG8)),S===t.RG_INTEGER&&(D===t.UNSIGNED_BYTE&&(J=t.RG8UI),D===t.UNSIGNED_SHORT&&(J=t.RG16UI),D===t.UNSIGNED_INT&&(J=t.RG32UI),D===t.BYTE&&(J=t.RG8I),D===t.SHORT&&(J=t.RG16I),D===t.INT&&(J=t.RG32I)),S===t.RGB_INTEGER&&(D===t.UNSIGNED_BYTE&&(J=t.RGB8UI),D===t.UNSIGNED_SHORT&&(J=t.RGB16UI),D===t.UNSIGNED_INT&&(J=t.RGB32UI),D===t.BYTE&&(J=t.RGB8I),D===t.SHORT&&(J=t.RGB16I),D===t.INT&&(J=t.RGB32I)),S===t.RGBA_INTEGER&&(D===t.UNSIGNED_BYTE&&(J=t.RGBA8UI),D===t.UNSIGNED_SHORT&&(J=t.RGBA16UI),D===t.UNSIGNED_INT&&(J=t.RGBA32UI),D===t.BYTE&&(J=t.RGBA8I),D===t.SHORT&&(J=t.RGBA16I),D===t.INT&&(J=t.RGBA32I)),S===t.RGB&&(D===t.UNSIGNED_INT_5_9_9_9_REV&&(J=t.RGB9_E5),D===t.UNSIGNED_INT_10F_11F_11F_REV&&(J=t.R11F_G11F_B10F)),S===t.RGBA){const Ee=te?vc:Qe.getTransfer(Q);D===t.FLOAT&&(J=t.RGBA32F),D===t.HALF_FLOAT&&(J=t.RGBA16F),D===t.UNSIGNED_BYTE&&(J=Ee===st?t.SRGB8_ALPHA8:t.RGBA8),D===t.UNSIGNED_SHORT_4_4_4_4&&(J=t.RGBA4),D===t.UNSIGNED_SHORT_5_5_5_1&&(J=t.RGB5_A1)}return(J===t.R16F||J===t.R32F||J===t.RG16F||J===t.RG32F||J===t.RGBA16F||J===t.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function E(A,S){let D;return A?S===null||S===gi||S===ma?D=t.DEPTH24_STENCIL8:S===ui?D=t.DEPTH32F_STENCIL8:S===pa&&(D=t.DEPTH24_STENCIL8,ze("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===gi||S===ma?D=t.DEPTH_COMPONENT24:S===ui?D=t.DEPTH_COMPONENT32F:S===pa&&(D=t.DEPTH_COMPONENT16),D}function b(A,S){return p(A)===!0||A.isFramebufferTexture&&A.minFilter!==Xt&&A.minFilter!==nn?Math.log2(Math.max(S.width,S.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?S.mipmaps.length:1}function T(A){const S=A.target;S.removeEventListener("dispose",T),v(S),S.isVideoTexture&&u.delete(S)}function C(A){const S=A.target;S.removeEventListener("dispose",C),V(S)}function v(A){const S=i.get(A);if(S.__webglInit===void 0)return;const D=A.source,Q=f.get(D);if(Q){const te=Q[S.__cacheKey];te.usedTimes--,te.usedTimes===0&&w(A),Object.keys(Q).length===0&&f.delete(D)}i.remove(A)}function w(A){const S=i.get(A);t.deleteTexture(S.__webglTexture);const D=A.source,Q=f.get(D);delete Q[S.__cacheKey],o.memory.textures--}function V(A){const S=i.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),i.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(S.__webglFramebuffer[Q]))for(let te=0;te<S.__webglFramebuffer[Q].length;te++)t.deleteFramebuffer(S.__webglFramebuffer[Q][te]);else t.deleteFramebuffer(S.__webglFramebuffer[Q]);S.__webglDepthbuffer&&t.deleteRenderbuffer(S.__webglDepthbuffer[Q])}else{if(Array.isArray(S.__webglFramebuffer))for(let Q=0;Q<S.__webglFramebuffer.length;Q++)t.deleteFramebuffer(S.__webglFramebuffer[Q]);else t.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&t.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&t.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let Q=0;Q<S.__webglColorRenderbuffer.length;Q++)S.__webglColorRenderbuffer[Q]&&t.deleteRenderbuffer(S.__webglColorRenderbuffer[Q]);S.__webglDepthRenderbuffer&&t.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const D=A.textures;for(let Q=0,te=D.length;Q<te;Q++){const J=i.get(D[Q]);J.__webglTexture&&(t.deleteTexture(J.__webglTexture),o.memory.textures--),i.remove(D[Q])}i.remove(A)}let P=0;function z(){P=0}function H(){const A=P;return A>=r.maxTextures&&ze("WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),P+=1,A}function K(A){const S=[];return S.push(A.wrapS),S.push(A.wrapT),S.push(A.wrapR||0),S.push(A.magFilter),S.push(A.minFilter),S.push(A.anisotropy),S.push(A.internalFormat),S.push(A.format),S.push(A.type),S.push(A.generateMipmaps),S.push(A.premultiplyAlpha),S.push(A.flipY),S.push(A.unpackAlignment),S.push(A.colorSpace),S.join()}function B(A,S){const D=i.get(A);if(A.isVideoTexture&&it(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&D.__version!==A.version){const Q=A.image;if(Q===null)ze("WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)ze("WebGLRenderer: Texture marked for update but image is incomplete");else{Y(D,A,S);return}}else A.isExternalTexture&&(D.__webglTexture=A.sourceTexture?A.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,D.__webglTexture,t.TEXTURE0+S)}function F(A,S){const D=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&D.__version!==A.version){Y(D,A,S);return}else A.isExternalTexture&&(D.__webglTexture=A.sourceTexture?A.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,D.__webglTexture,t.TEXTURE0+S)}function U(A,S){const D=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&D.__version!==A.version){Y(D,A,S);return}n.bindTexture(t.TEXTURE_3D,D.__webglTexture,t.TEXTURE0+S)}function O(A,S){const D=i.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&D.__version!==A.version){se(D,A,S);return}n.bindTexture(t.TEXTURE_CUBE_MAP,D.__webglTexture,t.TEXTURE0+S)}const q={[_d]:t.REPEAT,[Li]:t.CLAMP_TO_EDGE,[yd]:t.MIRRORED_REPEAT},k={[Xt]:t.NEAREST,[Zb]:t.NEAREST_MIPMAP_NEAREST,[el]:t.NEAREST_MIPMAP_LINEAR,[nn]:t.LINEAR,[Nu]:t.LINEAR_MIPMAP_NEAREST,[qr]:t.LINEAR_MIPMAP_LINEAR},ne={[t1]:t.NEVER,[o1]:t.ALWAYS,[n1]:t.LESS,[pp]:t.LEQUAL,[i1]:t.EQUAL,[mp]:t.GEQUAL,[r1]:t.GREATER,[s1]:t.NOTEQUAL};function ie(A,S){if(S.type===ui&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===nn||S.magFilter===Nu||S.magFilter===el||S.magFilter===qr||S.minFilter===nn||S.minFilter===Nu||S.minFilter===el||S.minFilter===qr)&&ze("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(A,t.TEXTURE_WRAP_S,q[S.wrapS]),t.texParameteri(A,t.TEXTURE_WRAP_T,q[S.wrapT]),(A===t.TEXTURE_3D||A===t.TEXTURE_2D_ARRAY)&&t.texParameteri(A,t.TEXTURE_WRAP_R,q[S.wrapR]),t.texParameteri(A,t.TEXTURE_MAG_FILTER,k[S.magFilter]),t.texParameteri(A,t.TEXTURE_MIN_FILTER,k[S.minFilter]),S.compareFunction&&(t.texParameteri(A,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(A,t.TEXTURE_COMPARE_FUNC,ne[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Xt||S.minFilter!==el&&S.minFilter!==qr||S.type===ui&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const D=e.get("EXT_texture_filter_anisotropic");t.texParameterf(A,D.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function De(A,S){let D=!1;A.__webglInit===void 0&&(A.__webglInit=!0,S.addEventListener("dispose",T));const Q=S.source;let te=f.get(Q);te===void 0&&(te={},f.set(Q,te));const J=K(S);if(J!==A.__cacheKey){te[J]===void 0&&(te[J]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,D=!0),te[J].usedTimes++;const Ee=te[A.__cacheKey];Ee!==void 0&&(te[A.__cacheKey].usedTimes--,Ee.usedTimes===0&&w(S)),A.__cacheKey=J,A.__webglTexture=te[J].texture}return D}function He(A,S,D){return Math.floor(Math.floor(A/D)/S)}function Fe(A,S,D,Q){const J=A.updateRanges;if(J.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,S.width,S.height,D,Q,S.data);else{J.sort((oe,le)=>oe.start-le.start);let Ee=0;for(let oe=1;oe<J.length;oe++){const le=J[Ee],Me=J[oe],Te=le.start+le.count,ge=He(Me.start,S.width,4),Xe=He(le.start,S.width,4);Me.start<=Te+1&&ge===Xe&&He(Me.start+Me.count-1,S.width,4)===ge?le.count=Math.max(le.count,Me.start+Me.count-le.start):(++Ee,J[Ee]=Me)}J.length=Ee+1;const fe=t.getParameter(t.UNPACK_ROW_LENGTH),Le=t.getParameter(t.UNPACK_SKIP_PIXELS),Oe=t.getParameter(t.UNPACK_SKIP_ROWS);t.pixelStorei(t.UNPACK_ROW_LENGTH,S.width);for(let oe=0,le=J.length;oe<le;oe++){const Me=J[oe],Te=Math.floor(Me.start/4),ge=Math.ceil(Me.count/4),Xe=Te%S.width,L=Math.floor(Te/S.width),de=ge,ce=1;t.pixelStorei(t.UNPACK_SKIP_PIXELS,Xe),t.pixelStorei(t.UNPACK_SKIP_ROWS,L),n.texSubImage2D(t.TEXTURE_2D,0,Xe,L,de,ce,D,Q,S.data)}A.clearUpdateRanges(),t.pixelStorei(t.UNPACK_ROW_LENGTH,fe),t.pixelStorei(t.UNPACK_SKIP_PIXELS,Le),t.pixelStorei(t.UNPACK_SKIP_ROWS,Oe)}}function Y(A,S,D){let Q=t.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(Q=t.TEXTURE_2D_ARRAY),S.isData3DTexture&&(Q=t.TEXTURE_3D);const te=De(A,S),J=S.source;n.bindTexture(Q,A.__webglTexture,t.TEXTURE0+D);const Ee=i.get(J);if(J.version!==Ee.__version||te===!0){n.activeTexture(t.TEXTURE0+D);const fe=Qe.getPrimaries(Qe.workingColorSpace),Le=S.colorSpace===or?null:Qe.getPrimaries(S.colorSpace),Oe=S.colorSpace===or||fe===Le?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Oe);let oe=y(S.image,!1,r.maxTextureSize);oe=ht(S,oe);const le=s.convert(S.format,S.colorSpace),Me=s.convert(S.type);let Te=_(S.internalFormat,le,Me,S.colorSpace,S.isVideoTexture);ie(Q,S);let ge;const Xe=S.mipmaps,L=S.isVideoTexture!==!0,de=Ee.__version===void 0||te===!0,ce=J.dataReady,_e=b(S,oe);if(S.isDepthTexture)Te=E(S.format===$r,S.type),de&&(L?n.texStorage2D(t.TEXTURE_2D,1,Te,oe.width,oe.height):n.texImage2D(t.TEXTURE_2D,0,Te,oe.width,oe.height,0,le,Me,null));else if(S.isDataTexture)if(Xe.length>0){L&&de&&n.texStorage2D(t.TEXTURE_2D,_e,Te,Xe[0].width,Xe[0].height);for(let ae=0,Z=Xe.length;ae<Z;ae++)ge=Xe[ae],L?ce&&n.texSubImage2D(t.TEXTURE_2D,ae,0,0,ge.width,ge.height,le,Me,ge.data):n.texImage2D(t.TEXTURE_2D,ae,Te,ge.width,ge.height,0,le,Me,ge.data);S.generateMipmaps=!1}else L?(de&&n.texStorage2D(t.TEXTURE_2D,_e,Te,oe.width,oe.height),ce&&Fe(S,oe,le,Me)):n.texImage2D(t.TEXTURE_2D,0,Te,oe.width,oe.height,0,le,Me,oe.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){L&&de&&n.texStorage3D(t.TEXTURE_2D_ARRAY,_e,Te,Xe[0].width,Xe[0].height,oe.depth);for(let ae=0,Z=Xe.length;ae<Z;ae++)if(ge=Xe[ae],S.format!==Kn)if(le!==null)if(L){if(ce)if(S.layerUpdates.size>0){const we=kg(ge.width,ge.height,S.format,S.type);for(const Be of S.layerUpdates){const pt=ge.data.subarray(Be*we/ge.data.BYTES_PER_ELEMENT,(Be+1)*we/ge.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ae,0,0,Be,ge.width,ge.height,1,le,pt)}S.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ae,0,0,0,ge.width,ge.height,oe.depth,le,ge.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ae,Te,ge.width,ge.height,oe.depth,0,ge.data,0,0);else ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else L?ce&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,ae,0,0,0,ge.width,ge.height,oe.depth,le,Me,ge.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ae,Te,ge.width,ge.height,oe.depth,0,le,Me,ge.data)}else{L&&de&&n.texStorage2D(t.TEXTURE_2D,_e,Te,Xe[0].width,Xe[0].height);for(let ae=0,Z=Xe.length;ae<Z;ae++)ge=Xe[ae],S.format!==Kn?le!==null?L?ce&&n.compressedTexSubImage2D(t.TEXTURE_2D,ae,0,0,ge.width,ge.height,le,ge.data):n.compressedTexImage2D(t.TEXTURE_2D,ae,Te,ge.width,ge.height,0,ge.data):ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?ce&&n.texSubImage2D(t.TEXTURE_2D,ae,0,0,ge.width,ge.height,le,Me,ge.data):n.texImage2D(t.TEXTURE_2D,ae,Te,ge.width,ge.height,0,le,Me,ge.data)}else if(S.isDataArrayTexture)if(L){if(de&&n.texStorage3D(t.TEXTURE_2D_ARRAY,_e,Te,oe.width,oe.height,oe.depth),ce)if(S.layerUpdates.size>0){const ae=kg(oe.width,oe.height,S.format,S.type);for(const Z of S.layerUpdates){const we=oe.data.subarray(Z*ae/oe.data.BYTES_PER_ELEMENT,(Z+1)*ae/oe.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,Z,oe.width,oe.height,1,le,Me,we)}S.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,le,Me,oe.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Te,oe.width,oe.height,oe.depth,0,le,Me,oe.data);else if(S.isData3DTexture)L?(de&&n.texStorage3D(t.TEXTURE_3D,_e,Te,oe.width,oe.height,oe.depth),ce&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,le,Me,oe.data)):n.texImage3D(t.TEXTURE_3D,0,Te,oe.width,oe.height,oe.depth,0,le,Me,oe.data);else if(S.isFramebufferTexture){if(de)if(L)n.texStorage2D(t.TEXTURE_2D,_e,Te,oe.width,oe.height);else{let ae=oe.width,Z=oe.height;for(let we=0;we<_e;we++)n.texImage2D(t.TEXTURE_2D,we,Te,ae,Z,0,le,Me,null),ae>>=1,Z>>=1}}else if(Xe.length>0){if(L&&de){const ae=Ce(Xe[0]);n.texStorage2D(t.TEXTURE_2D,_e,Te,ae.width,ae.height)}for(let ae=0,Z=Xe.length;ae<Z;ae++)ge=Xe[ae],L?ce&&n.texSubImage2D(t.TEXTURE_2D,ae,0,0,le,Me,ge):n.texImage2D(t.TEXTURE_2D,ae,Te,le,Me,ge);S.generateMipmaps=!1}else if(L){if(de){const ae=Ce(oe);n.texStorage2D(t.TEXTURE_2D,_e,Te,ae.width,ae.height)}ce&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,le,Me,oe)}else n.texImage2D(t.TEXTURE_2D,0,Te,le,Me,oe);p(S)&&d(Q),Ee.__version=J.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function se(A,S,D){if(S.image.length!==6)return;const Q=De(A,S),te=S.source;n.bindTexture(t.TEXTURE_CUBE_MAP,A.__webglTexture,t.TEXTURE0+D);const J=i.get(te);if(te.version!==J.__version||Q===!0){n.activeTexture(t.TEXTURE0+D);const Ee=Qe.getPrimaries(Qe.workingColorSpace),fe=S.colorSpace===or?null:Qe.getPrimaries(S.colorSpace),Le=S.colorSpace===or||Ee===fe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le);const Oe=S.isCompressedTexture||S.image[0].isCompressedTexture,oe=S.image[0]&&S.image[0].isDataTexture,le=[];for(let Z=0;Z<6;Z++)!Oe&&!oe?le[Z]=y(S.image[Z],!0,r.maxCubemapSize):le[Z]=oe?S.image[Z].image:S.image[Z],le[Z]=ht(S,le[Z]);const Me=le[0],Te=s.convert(S.format,S.colorSpace),ge=s.convert(S.type),Xe=_(S.internalFormat,Te,ge,S.colorSpace),L=S.isVideoTexture!==!0,de=J.__version===void 0||Q===!0,ce=te.dataReady;let _e=b(S,Me);ie(t.TEXTURE_CUBE_MAP,S);let ae;if(Oe){L&&de&&n.texStorage2D(t.TEXTURE_CUBE_MAP,_e,Xe,Me.width,Me.height);for(let Z=0;Z<6;Z++){ae=le[Z].mipmaps;for(let we=0;we<ae.length;we++){const Be=ae[we];S.format!==Kn?Te!==null?L?ce&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,we,0,0,Be.width,Be.height,Te,Be.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,we,Xe,Be.width,Be.height,0,Be.data):ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?ce&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,we,0,0,Be.width,Be.height,Te,ge,Be.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,we,Xe,Be.width,Be.height,0,Te,ge,Be.data)}}}else{if(ae=S.mipmaps,L&&de){ae.length>0&&_e++;const Z=Ce(le[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,_e,Xe,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(oe){L?ce&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,le[Z].width,le[Z].height,Te,ge,le[Z].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Xe,le[Z].width,le[Z].height,0,Te,ge,le[Z].data);for(let we=0;we<ae.length;we++){const pt=ae[we].image[Z].image;L?ce&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,we+1,0,0,pt.width,pt.height,Te,ge,pt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,we+1,Xe,pt.width,pt.height,0,Te,ge,pt.data)}}else{L?ce&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Te,ge,le[Z]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Xe,Te,ge,le[Z]);for(let we=0;we<ae.length;we++){const Be=ae[we];L?ce&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,we+1,0,0,Te,ge,Be.image[Z]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,we+1,Xe,Te,ge,Be.image[Z])}}}p(S)&&d(t.TEXTURE_CUBE_MAP),J.__version=te.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function ue(A,S,D,Q,te,J){const Ee=s.convert(D.format,D.colorSpace),fe=s.convert(D.type),Le=_(D.internalFormat,Ee,fe,D.colorSpace),Oe=i.get(S),oe=i.get(D);if(oe.__renderTarget=S,!Oe.__hasExternalTextures){const le=Math.max(1,S.width>>J),Me=Math.max(1,S.height>>J);te===t.TEXTURE_3D||te===t.TEXTURE_2D_ARRAY?n.texImage3D(te,J,Le,le,Me,S.depth,0,Ee,fe,null):n.texImage2D(te,J,Le,le,Me,0,Ee,fe,null)}n.bindFramebuffer(t.FRAMEBUFFER,A),Nt(S)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Q,te,oe.__webglTexture,0,N(S)):(te===t.TEXTURE_2D||te>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,Q,te,oe.__webglTexture,J),n.bindFramebuffer(t.FRAMEBUFFER,null)}function be(A,S,D){if(t.bindRenderbuffer(t.RENDERBUFFER,A),S.depthBuffer){const Q=S.depthTexture,te=Q&&Q.isDepthTexture?Q.type:null,J=E(S.stencilBuffer,te),Ee=S.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;Nt(S)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,N(S),J,S.width,S.height):D?t.renderbufferStorageMultisample(t.RENDERBUFFER,N(S),J,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,J,S.width,S.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Ee,t.RENDERBUFFER,A)}else{const Q=S.textures;for(let te=0;te<Q.length;te++){const J=Q[te],Ee=s.convert(J.format,J.colorSpace),fe=s.convert(J.type),Le=_(J.internalFormat,Ee,fe,J.colorSpace);Nt(S)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,N(S),Le,S.width,S.height):D?t.renderbufferStorageMultisample(t.RENDERBUFFER,N(S),Le,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,Le,S.width,S.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Ie(A,S,D){const Q=S.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,A),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const te=i.get(S.depthTexture);if(te.__renderTarget=S,(!te.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),Q){if(te.__webglInit===void 0&&(te.__webglInit=!0,S.depthTexture.addEventListener("dispose",T)),te.__webglTexture===void 0){te.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,te.__webglTexture),ie(t.TEXTURE_CUBE_MAP,S.depthTexture);const Oe=s.convert(S.depthTexture.format),oe=s.convert(S.depthTexture.type);let le;S.depthTexture.format===Hi?le=t.DEPTH_COMPONENT24:S.depthTexture.format===$r&&(le=t.DEPTH24_STENCIL8);for(let Me=0;Me<6;Me++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,le,S.width,S.height,0,Oe,oe,null)}}else B(S.depthTexture,0);const J=te.__webglTexture,Ee=N(S),fe=Q?t.TEXTURE_CUBE_MAP_POSITIVE_X+D:t.TEXTURE_2D,Le=S.depthTexture.format===$r?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(S.depthTexture.format===Hi)Nt(S)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Le,fe,J,0,Ee):t.framebufferTexture2D(t.FRAMEBUFFER,Le,fe,J,0);else if(S.depthTexture.format===$r)Nt(S)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Le,fe,J,0,Ee):t.framebufferTexture2D(t.FRAMEBUFFER,Le,fe,J,0);else throw new Error("Unknown depthTexture format")}function Ue(A){const S=i.get(A),D=A.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==A.depthTexture){const Q=A.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),Q){const te=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,Q.removeEventListener("dispose",te)};Q.addEventListener("dispose",te),S.__depthDisposeCallback=te}S.__boundDepthTexture=Q}if(A.depthTexture&&!S.__autoAllocateDepthBuffer)if(D)for(let Q=0;Q<6;Q++)Ie(S.__webglFramebuffer[Q],A,Q);else{const Q=A.texture.mipmaps;Q&&Q.length>0?Ie(S.__webglFramebuffer[0],A,0):Ie(S.__webglFramebuffer,A,0)}else if(D){S.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer[Q]),S.__webglDepthbuffer[Q]===void 0)S.__webglDepthbuffer[Q]=t.createRenderbuffer(),be(S.__webglDepthbuffer[Q],A,!1);else{const te=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,J=S.__webglDepthbuffer[Q];t.bindRenderbuffer(t.RENDERBUFFER,J),t.framebufferRenderbuffer(t.FRAMEBUFFER,te,t.RENDERBUFFER,J)}}else{const Q=A.texture.mipmaps;if(Q&&Q.length>0?n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=t.createRenderbuffer(),be(S.__webglDepthbuffer,A,!1);else{const te=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,J=S.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,J),t.framebufferRenderbuffer(t.FRAMEBUFFER,te,t.RENDERBUFFER,J)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function _t(A,S,D){const Q=i.get(A);S!==void 0&&ue(Q.__webglFramebuffer,A,A.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),D!==void 0&&Ue(A)}function Ye(A){const S=A.texture,D=i.get(A),Q=i.get(S);A.addEventListener("dispose",C);const te=A.textures,J=A.isWebGLCubeRenderTarget===!0,Ee=te.length>1;if(Ee||(Q.__webglTexture===void 0&&(Q.__webglTexture=t.createTexture()),Q.__version=S.version,o.memory.textures++),J){D.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(S.mipmaps&&S.mipmaps.length>0){D.__webglFramebuffer[fe]=[];for(let Le=0;Le<S.mipmaps.length;Le++)D.__webglFramebuffer[fe][Le]=t.createFramebuffer()}else D.__webglFramebuffer[fe]=t.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){D.__webglFramebuffer=[];for(let fe=0;fe<S.mipmaps.length;fe++)D.__webglFramebuffer[fe]=t.createFramebuffer()}else D.__webglFramebuffer=t.createFramebuffer();if(Ee)for(let fe=0,Le=te.length;fe<Le;fe++){const Oe=i.get(te[fe]);Oe.__webglTexture===void 0&&(Oe.__webglTexture=t.createTexture(),o.memory.textures++)}if(A.samples>0&&Nt(A)===!1){D.__webglMultisampledFramebuffer=t.createFramebuffer(),D.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,D.__webglMultisampledFramebuffer);for(let fe=0;fe<te.length;fe++){const Le=te[fe];D.__webglColorRenderbuffer[fe]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,D.__webglColorRenderbuffer[fe]);const Oe=s.convert(Le.format,Le.colorSpace),oe=s.convert(Le.type),le=_(Le.internalFormat,Oe,oe,Le.colorSpace,A.isXRRenderTarget===!0),Me=N(A);t.renderbufferStorageMultisample(t.RENDERBUFFER,Me,le,A.width,A.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.RENDERBUFFER,D.__webglColorRenderbuffer[fe])}t.bindRenderbuffer(t.RENDERBUFFER,null),A.depthBuffer&&(D.__webglDepthRenderbuffer=t.createRenderbuffer(),be(D.__webglDepthRenderbuffer,A,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(J){n.bindTexture(t.TEXTURE_CUBE_MAP,Q.__webglTexture),ie(t.TEXTURE_CUBE_MAP,S);for(let fe=0;fe<6;fe++)if(S.mipmaps&&S.mipmaps.length>0)for(let Le=0;Le<S.mipmaps.length;Le++)ue(D.__webglFramebuffer[fe][Le],A,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Le);else ue(D.__webglFramebuffer[fe],A,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);p(S)&&d(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ee){for(let fe=0,Le=te.length;fe<Le;fe++){const Oe=te[fe],oe=i.get(Oe);let le=t.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(le=A.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(le,oe.__webglTexture),ie(le,Oe),ue(D.__webglFramebuffer,A,Oe,t.COLOR_ATTACHMENT0+fe,le,0),p(Oe)&&d(le)}n.unbindTexture()}else{let fe=t.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(fe=A.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(fe,Q.__webglTexture),ie(fe,S),S.mipmaps&&S.mipmaps.length>0)for(let Le=0;Le<S.mipmaps.length;Le++)ue(D.__webglFramebuffer[Le],A,S,t.COLOR_ATTACHMENT0,fe,Le);else ue(D.__webglFramebuffer,A,S,t.COLOR_ATTACHMENT0,fe,0);p(S)&&d(fe),n.unbindTexture()}A.depthBuffer&&Ue(A)}function Je(A){const S=A.textures;for(let D=0,Q=S.length;D<Q;D++){const te=S[D];if(p(te)){const J=x(A),Ee=i.get(te).__webglTexture;n.bindTexture(J,Ee),d(J),n.unbindTexture()}}}const ft=[],je=[];function bt(A){if(A.samples>0){if(Nt(A)===!1){const S=A.textures,D=A.width,Q=A.height;let te=t.COLOR_BUFFER_BIT;const J=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Ee=i.get(A),fe=S.length>1;if(fe)for(let Oe=0;Oe<S.length;Oe++)n.bindFramebuffer(t.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Oe,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Ee.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Oe,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer);const Le=A.texture.mipmaps;Le&&Le.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer);for(let Oe=0;Oe<S.length;Oe++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(te|=t.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(te|=t.STENCIL_BUFFER_BIT)),fe){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Ee.__webglColorRenderbuffer[Oe]);const oe=i.get(S[Oe]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,oe,0)}t.blitFramebuffer(0,0,D,Q,0,0,D,Q,te,t.NEAREST),l===!0&&(ft.length=0,je.length=0,ft.push(t.COLOR_ATTACHMENT0+Oe),A.depthBuffer&&A.resolveDepthBuffer===!1&&(ft.push(J),je.push(J),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,je)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,ft))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),fe)for(let Oe=0;Oe<S.length;Oe++){n.bindFramebuffer(t.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Oe,t.RENDERBUFFER,Ee.__webglColorRenderbuffer[Oe]);const oe=i.get(S[Oe]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Ee.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Oe,t.TEXTURE_2D,oe,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const S=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[S])}}}function N(A){return Math.min(r.maxSamples,A.samples)}function Nt(A){const S=i.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function it(A){const S=o.render.frame;u.get(A)!==S&&(u.set(A,S),A.update())}function ht(A,S){const D=A.colorSpace,Q=A.format,te=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||D!==io&&D!==or&&(Qe.getTransfer(D)===st?(Q!==Kn||te!==Un)&&ze("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):nt("WebGLTextures: Unsupported texture color space:",D)),S}function Ce(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=z,this.setTexture2D=B,this.setTexture2DArray=F,this.setTexture3D=U,this.setTextureCube=O,this.rebindTextures=_t,this.setupRenderTarget=Ye,this.updateRenderTargetMipmap=Je,this.updateMultisampleRenderTarget=bt,this.setupDepthRenderbuffer=Ue,this.setupFrameBufferTexture=ue,this.useMultisampledRTT=Nt,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function CP(t,e){function n(i,r=or){let s;const o=Qe.getTransfer(r);if(i===Un)return t.UNSIGNED_BYTE;if(i===cp)return t.UNSIGNED_SHORT_4_4_4_4;if(i===up)return t.UNSIGNED_SHORT_5_5_5_1;if(i===S_)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===E_)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===__)return t.BYTE;if(i===y_)return t.SHORT;if(i===pa)return t.UNSIGNED_SHORT;if(i===lp)return t.INT;if(i===gi)return t.UNSIGNED_INT;if(i===ui)return t.FLOAT;if(i===Vi)return t.HALF_FLOAT;if(i===M_)return t.ALPHA;if(i===w_)return t.RGB;if(i===Kn)return t.RGBA;if(i===Hi)return t.DEPTH_COMPONENT;if(i===$r)return t.DEPTH_STENCIL;if(i===b_)return t.RED;if(i===fp)return t.RED_INTEGER;if(i===no)return t.RG;if(i===dp)return t.RG_INTEGER;if(i===hp)return t.RGBA_INTEGER;if(i===Vl||i===Hl||i===Gl||i===Wl)if(o===st)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Vl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Hl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Gl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Wl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Vl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Hl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Gl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Wl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Sd||i===Ed||i===Md||i===wd)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Sd)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ed)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Md)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===wd)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===bd||i===Td||i===Ad||i===Cd||i===Rd||i===Pd||i===Nd)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===bd||i===Td)return o===st?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Ad)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Cd)return s.COMPRESSED_R11_EAC;if(i===Rd)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Pd)return s.COMPRESSED_RG11_EAC;if(i===Nd)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Ld||i===Dd||i===Id||i===Ud||i===Fd||i===Od||i===kd||i===Bd||i===zd||i===Vd||i===Hd||i===Gd||i===Wd||i===jd)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Ld)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Dd)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Id)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ud)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Fd)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Od)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===kd)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Bd)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===zd)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Vd)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Hd)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Gd)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Wd)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===jd)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Xd||i===qd||i===$d)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Xd)return o===st?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===qd)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===$d)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Yd||i===Kd||i===Zd||i===Jd)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Yd)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Kd)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Zd)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Jd)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ma?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const RP=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,PP=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class NP{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new U_(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new vi({vertexShader:RP,fragmentShader:PP,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new xi(new qc(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class LP extends ho{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,g=null,m=null;const y=typeof XRWebGLBinding<"u",p=new NP,d={},x=n.getContextAttributes();let _=null,E=null;const b=[],T=[],C=new ut;let v=null;const w=new $n;w.viewport=new Ct;const V=new $n;V.viewport=new Ct;const P=[w,V],z=new W1;let H=null,K=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let se=b[Y];return se===void 0&&(se=new Bu,b[Y]=se),se.getTargetRaySpace()},this.getControllerGrip=function(Y){let se=b[Y];return se===void 0&&(se=new Bu,b[Y]=se),se.getGripSpace()},this.getHand=function(Y){let se=b[Y];return se===void 0&&(se=new Bu,b[Y]=se),se.getHandSpace()};function B(Y){const se=T.indexOf(Y.inputSource);if(se===-1)return;const ue=b[se];ue!==void 0&&(ue.update(Y.inputSource,Y.frame,c||o),ue.dispatchEvent({type:Y.type,data:Y.inputSource}))}function F(){r.removeEventListener("select",B),r.removeEventListener("selectstart",B),r.removeEventListener("selectend",B),r.removeEventListener("squeeze",B),r.removeEventListener("squeezestart",B),r.removeEventListener("squeezeend",B),r.removeEventListener("end",F),r.removeEventListener("inputsourceschange",U);for(let Y=0;Y<b.length;Y++){const se=T[Y];se!==null&&(T[Y]=null,b[Y].disconnect(se))}H=null,K=null,p.reset();for(const Y in d)delete d[Y];e.setRenderTarget(_),g=null,f=null,h=null,r=null,E=null,Fe.stop(),i.isPresenting=!1,e.setPixelRatio(v),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,i.isPresenting===!0&&ze("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,i.isPresenting===!0&&ze("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return f!==null?f:g},this.getBinding=function(){return h===null&&y&&(h=new XRWebGLBinding(r,n)),h},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(Y){if(r=Y,r!==null){if(_=e.getRenderTarget(),r.addEventListener("select",B),r.addEventListener("selectstart",B),r.addEventListener("selectend",B),r.addEventListener("squeeze",B),r.addEventListener("squeezestart",B),r.addEventListener("squeezeend",B),r.addEventListener("end",F),r.addEventListener("inputsourceschange",U),x.xrCompatible!==!0&&await n.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(C),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let ue=null,be=null,Ie=null;x.depth&&(Ie=x.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ue=x.stencil?$r:Hi,be=x.stencil?ma:gi);const Ue={colorFormat:n.RGBA8,depthFormat:Ie,scaleFactor:s};h=this.getBinding(),f=h.createProjectionLayer(Ue),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),E=new mi(f.textureWidth,f.textureHeight,{format:Kn,type:Un,depthTexture:new ga(f.textureWidth,f.textureHeight,be,void 0,void 0,void 0,void 0,void 0,void 0,ue),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const ue={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};g=new XRWebGLLayer(r,n,ue),r.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),E=new mi(g.framebufferWidth,g.framebufferHeight,{format:Kn,type:Un,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Fe.setContext(r),Fe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function U(Y){for(let se=0;se<Y.removed.length;se++){const ue=Y.removed[se],be=T.indexOf(ue);be>=0&&(T[be]=null,b[be].disconnect(ue))}for(let se=0;se<Y.added.length;se++){const ue=Y.added[se];let be=T.indexOf(ue);if(be===-1){for(let Ue=0;Ue<b.length;Ue++)if(Ue>=T.length){T.push(ue),be=Ue;break}else if(T[Ue]===null){T[Ue]=ue,be=Ue;break}if(be===-1)break}const Ie=b[be];Ie&&Ie.connect(ue)}}const O=new j,q=new j;function k(Y,se,ue){O.setFromMatrixPosition(se.matrixWorld),q.setFromMatrixPosition(ue.matrixWorld);const be=O.distanceTo(q),Ie=se.projectionMatrix.elements,Ue=ue.projectionMatrix.elements,_t=Ie[14]/(Ie[10]-1),Ye=Ie[14]/(Ie[10]+1),Je=(Ie[9]+1)/Ie[5],ft=(Ie[9]-1)/Ie[5],je=(Ie[8]-1)/Ie[0],bt=(Ue[8]+1)/Ue[0],N=_t*je,Nt=_t*bt,it=be/(-je+bt),ht=it*-je;if(se.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(ht),Y.translateZ(it),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Ie[10]===-1)Y.projectionMatrix.copy(se.projectionMatrix),Y.projectionMatrixInverse.copy(se.projectionMatrixInverse);else{const Ce=_t+it,A=Ye+it,S=N-ht,D=Nt+(be-ht),Q=Je*Ye/A*Ce,te=ft*Ye/A*Ce;Y.projectionMatrix.makePerspective(S,D,Q,te,Ce,A),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function ne(Y,se){se===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(se.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(r===null)return;let se=Y.near,ue=Y.far;p.texture!==null&&(p.depthNear>0&&(se=p.depthNear),p.depthFar>0&&(ue=p.depthFar)),z.near=V.near=w.near=se,z.far=V.far=w.far=ue,(H!==z.near||K!==z.far)&&(r.updateRenderState({depthNear:z.near,depthFar:z.far}),H=z.near,K=z.far),z.layers.mask=Y.layers.mask|6,w.layers.mask=z.layers.mask&-5,V.layers.mask=z.layers.mask&-3;const be=Y.parent,Ie=z.cameras;ne(z,be);for(let Ue=0;Ue<Ie.length;Ue++)ne(Ie[Ue],be);Ie.length===2?k(z,w,V):z.projectionMatrix.copy(w.projectionMatrix),ie(Y,z,be)};function ie(Y,se,ue){ue===null?Y.matrix.copy(se.matrixWorld):(Y.matrix.copy(ue.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(se.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(se.projectionMatrix),Y.projectionMatrixInverse.copy(se.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Qd*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(f===null&&g===null))return l},this.setFoveation=function(Y){l=Y,f!==null&&(f.fixedFoveation=Y),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=Y)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(z)},this.getCameraTexture=function(Y){return d[Y]};let De=null;function He(Y,se){if(u=se.getViewerPose(c||o),m=se,u!==null){const ue=u.views;g!==null&&(e.setRenderTargetFramebuffer(E,g.framebuffer),e.setRenderTarget(E));let be=!1;ue.length!==z.cameras.length&&(z.cameras.length=0,be=!0);for(let Ye=0;Ye<ue.length;Ye++){const Je=ue[Ye];let ft=null;if(g!==null)ft=g.getViewport(Je);else{const bt=h.getViewSubImage(f,Je);ft=bt.viewport,Ye===0&&(e.setRenderTargetTextures(E,bt.colorTexture,bt.depthStencilTexture),e.setRenderTarget(E))}let je=P[Ye];je===void 0&&(je=new $n,je.layers.enable(Ye),je.viewport=new Ct,P[Ye]=je),je.matrix.fromArray(Je.transform.matrix),je.matrix.decompose(je.position,je.quaternion,je.scale),je.projectionMatrix.fromArray(Je.projectionMatrix),je.projectionMatrixInverse.copy(je.projectionMatrix).invert(),je.viewport.set(ft.x,ft.y,ft.width,ft.height),Ye===0&&(z.matrix.copy(je.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),be===!0&&z.cameras.push(je)}const Ie=r.enabledFeatures;if(Ie&&Ie.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&y){h=i.getBinding();const Ye=h.getDepthInformation(ue[0]);Ye&&Ye.isValid&&Ye.texture&&p.init(Ye,r.renderState)}if(Ie&&Ie.includes("camera-access")&&y){e.state.unbindTexture(),h=i.getBinding();for(let Ye=0;Ye<ue.length;Ye++){const Je=ue[Ye].camera;if(Je){let ft=d[Je];ft||(ft=new U_,d[Je]=ft);const je=h.getCameraImage(Je);ft.sourceTexture=je}}}}for(let ue=0;ue<b.length;ue++){const be=T[ue],Ie=b[ue];be!==null&&Ie!==void 0&&Ie.update(be,se,c||o)}De&&De(Y,se),se.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:se}),m=null}const Fe=new B_;Fe.setAnimationLoop(He),this.setAnimationLoop=function(Y){De=Y},this.dispose=function(){}}}const Fr=new Gi,DP=new It;function IP(t,e){function n(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function i(p,d){d.color.getRGB(p.fogColor.value,F_(t)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function r(p,d,x,_,E){d.isMeshBasicMaterial?s(p,d):d.isMeshLambertMaterial?(s(p,d),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(s(p,d),h(p,d)):d.isMeshPhongMaterial?(s(p,d),u(p,d),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(s(p,d),f(p,d),d.isMeshPhysicalMaterial&&g(p,d,E)):d.isMeshMatcapMaterial?(s(p,d),m(p,d)):d.isMeshDepthMaterial?s(p,d):d.isMeshDistanceMaterial?(s(p,d),y(p,d)):d.isMeshNormalMaterial?s(p,d):d.isLineBasicMaterial?(o(p,d),d.isLineDashedMaterial&&a(p,d)):d.isPointsMaterial?l(p,d,x,_):d.isSpriteMaterial?c(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,n(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,n(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,n(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===_n&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,n(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===_n&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,n(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,n(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,n(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const x=e.get(d),_=x.envMap,E=x.envMapRotation;_&&(p.envMap.value=_,Fr.copy(E),Fr.x*=-1,Fr.y*=-1,Fr.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Fr.y*=-1,Fr.z*=-1),p.envMapRotation.value.setFromMatrix4(DP.makeRotationFromEuler(Fr)),p.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap&&(p.lightMap.value=d.lightMap,p.lightMapIntensity.value=d.lightMapIntensity,n(d.lightMap,p.lightMapTransform)),d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,n(d.aoMap,p.aoMapTransform))}function o(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,n(d.map,p.mapTransform))}function a(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function l(p,d,x,_){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*x,p.scale.value=_*.5,d.map&&(p.map.value=d.map,n(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,n(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function c(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,n(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,n(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function u(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function h(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function f(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,n(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,n(d.roughnessMap,p.roughnessMapTransform)),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function g(p,d,x){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,n(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,n(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,n(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,n(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,n(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===_n&&p.clearcoatNormalScale.value.negate())),d.dispersion>0&&(p.dispersion.value=d.dispersion),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,n(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,n(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=x.texture,p.transmissionSamplerSize.value.set(x.width,x.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,n(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,n(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,n(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,n(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,n(d.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,d){d.matcap&&(p.matcap.value=d.matcap)}function y(p,d){const x=e.get(d).light;p.referencePosition.value.setFromMatrixPosition(x.matrixWorld),p.nearDistance.value=x.shadow.camera.near,p.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function UP(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,_){const E=_.program;i.uniformBlockBinding(x,E)}function c(x,_){let E=r[x.id];E===void 0&&(m(x),E=u(x),r[x.id]=E,x.addEventListener("dispose",p));const b=_.program;i.updateUBOMapping(x,b);const T=e.render.frame;s[x.id]!==T&&(f(x),s[x.id]=T)}function u(x){const _=h();x.__bindingPointIndex=_;const E=t.createBuffer(),b=x.__size,T=x.usage;return t.bindBuffer(t.UNIFORM_BUFFER,E),t.bufferData(t.UNIFORM_BUFFER,b,T),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,_,E),E}function h(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return nt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(x){const _=r[x.id],E=x.uniforms,b=x.__cache;t.bindBuffer(t.UNIFORM_BUFFER,_);for(let T=0,C=E.length;T<C;T++){const v=Array.isArray(E[T])?E[T]:[E[T]];for(let w=0,V=v.length;w<V;w++){const P=v[w];if(g(P,T,w,b)===!0){const z=P.__offset,H=Array.isArray(P.value)?P.value:[P.value];let K=0;for(let B=0;B<H.length;B++){const F=H[B],U=y(F);typeof F=="number"||typeof F=="boolean"?(P.__data[0]=F,t.bufferSubData(t.UNIFORM_BUFFER,z+K,P.__data)):F.isMatrix3?(P.__data[0]=F.elements[0],P.__data[1]=F.elements[1],P.__data[2]=F.elements[2],P.__data[3]=0,P.__data[4]=F.elements[3],P.__data[5]=F.elements[4],P.__data[6]=F.elements[5],P.__data[7]=0,P.__data[8]=F.elements[6],P.__data[9]=F.elements[7],P.__data[10]=F.elements[8],P.__data[11]=0):(F.toArray(P.__data,K),K+=U.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,z,P.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function g(x,_,E,b){const T=x.value,C=_+"_"+E;if(b[C]===void 0)return typeof T=="number"||typeof T=="boolean"?b[C]=T:b[C]=T.clone(),!0;{const v=b[C];if(typeof T=="number"||typeof T=="boolean"){if(v!==T)return b[C]=T,!0}else if(v.equals(T)===!1)return v.copy(T),!0}return!1}function m(x){const _=x.uniforms;let E=0;const b=16;for(let C=0,v=_.length;C<v;C++){const w=Array.isArray(_[C])?_[C]:[_[C]];for(let V=0,P=w.length;V<P;V++){const z=w[V],H=Array.isArray(z.value)?z.value:[z.value];for(let K=0,B=H.length;K<B;K++){const F=H[K],U=y(F),O=E%b,q=O%U.boundary,k=O+q;E+=q,k!==0&&b-k<U.storage&&(E+=b-k),z.__data=new Float32Array(U.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=E,E+=U.storage}}}const T=E%b;return T>0&&(E+=b-T),x.__size=E,x.__cache={},this}function y(x){const _={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(_.boundary=4,_.storage=4):x.isVector2?(_.boundary=8,_.storage=8):x.isVector3||x.isColor?(_.boundary=16,_.storage=12):x.isVector4?(_.boundary=16,_.storage=16):x.isMatrix3?(_.boundary=48,_.storage=48):x.isMatrix4?(_.boundary=64,_.storage=64):x.isTexture?ze("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ze("WebGLRenderer: Unsupported uniform value type.",x),_}function p(x){const _=x.target;_.removeEventListener("dispose",p);const E=o.indexOf(_.__bindingPointIndex);o.splice(E,1),t.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function d(){for(const x in r)t.deleteBuffer(r[x]);o=[],r={},s={}}return{bind:l,update:c,dispose:d}}const FP=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let si=null;function OP(){return si===null&&(si=new L1(FP,16,16,no,Vi),si.name="DFG_LUT",si.minFilter=nn,si.magFilter=nn,si.wrapS=Li,si.wrapT=Li,si.generateMipmaps=!1,si.needsUpdate=!0),si}class kP{constructor(e={}){const{canvas:n=l1(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1,outputBufferType:g=Un}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=o;const y=g,p=new Set([hp,dp,fp]),d=new Set([Un,gi,pa,ma,cp,up]),x=new Uint32Array(4),_=new Int32Array(4);let E=null,b=null;const T=[],C=[];let v=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=pi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const w=this;let V=!1;this._outputColorSpace=Ln;let P=0,z=0,H=null,K=-1,B=null;const F=new Ct,U=new Ct;let O=null;const q=new ot(0);let k=0,ne=n.width,ie=n.height,De=1,He=null,Fe=null;const Y=new Ct(0,0,ne,ie),se=new Ct(0,0,ne,ie);let ue=!1;const be=new D_;let Ie=!1,Ue=!1;const _t=new It,Ye=new j,Je=new Ct,ft={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let je=!1;function bt(){return H===null?De:1}let N=i;function Nt(M,I){return n.getContext(M,I)}try{const M={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${ap}`),n.addEventListener("webglcontextlost",we,!1),n.addEventListener("webglcontextrestored",Be,!1),n.addEventListener("webglcontextcreationerror",pt,!1),N===null){const I="webgl2";if(N=Nt(I,M),N===null)throw Nt(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw nt("WebGLRenderer: "+M.message),M}let it,ht,Ce,A,S,D,Q,te,J,Ee,fe,Le,Oe,oe,le,Me,Te,ge,Xe,L,de,ce,_e;function ae(){it=new kC(N),it.init(),de=new CP(N,it),ht=new PC(N,it,e,de),Ce=new TP(N,it),ht.reversedDepthBuffer&&f&&Ce.buffers.depth.setReversed(!0),A=new VC(N),S=new dP,D=new AP(N,it,Ce,S,ht,de,A),Q=new OC(w),te=new X1(N),ce=new CC(N,te),J=new BC(N,te,A,ce),Ee=new GC(N,J,te,ce,A),ge=new HC(N,ht,D),le=new NC(S),fe=new fP(w,Q,it,ht,ce,le),Le=new IP(w,S),Oe=new pP,oe=new yP(it),Te=new AC(w,Q,Ce,Ee,m,l),Me=new bP(w,Ee,ht),_e=new UP(N,A,ht,Ce),Xe=new RC(N,it,A),L=new zC(N,it,A),A.programs=fe.programs,w.capabilities=ht,w.extensions=it,w.properties=S,w.renderLists=Oe,w.shadowMap=Me,w.state=Ce,w.info=A}ae(),y!==Un&&(v=new jC(y,n.width,n.height,r,s));const Z=new LP(w,N);this.xr=Z,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const M=it.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=it.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return De},this.setPixelRatio=function(M){M!==void 0&&(De=M,this.setSize(ne,ie,!1))},this.getSize=function(M){return M.set(ne,ie)},this.setSize=function(M,I,$=!0){if(Z.isPresenting){ze("WebGLRenderer: Can't change size while VR device is presenting.");return}ne=M,ie=I,n.width=Math.floor(M*De),n.height=Math.floor(I*De),$===!0&&(n.style.width=M+"px",n.style.height=I+"px"),v!==null&&v.setSize(n.width,n.height),this.setViewport(0,0,M,I)},this.getDrawingBufferSize=function(M){return M.set(ne*De,ie*De).floor()},this.setDrawingBufferSize=function(M,I,$){ne=M,ie=I,De=$,n.width=Math.floor(M*$),n.height=Math.floor(I*$),this.setViewport(0,0,M,I)},this.setEffects=function(M){if(y===Un){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let I=0;I<M.length;I++)if(M[I].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}v.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(F)},this.getViewport=function(M){return M.copy(Y)},this.setViewport=function(M,I,$,W){M.isVector4?Y.set(M.x,M.y,M.z,M.w):Y.set(M,I,$,W),Ce.viewport(F.copy(Y).multiplyScalar(De).round())},this.getScissor=function(M){return M.copy(se)},this.setScissor=function(M,I,$,W){M.isVector4?se.set(M.x,M.y,M.z,M.w):se.set(M,I,$,W),Ce.scissor(U.copy(se).multiplyScalar(De).round())},this.getScissorTest=function(){return ue},this.setScissorTest=function(M){Ce.setScissorTest(ue=M)},this.setOpaqueSort=function(M){He=M},this.setTransparentSort=function(M){Fe=M},this.getClearColor=function(M){return M.copy(Te.getClearColor())},this.setClearColor=function(){Te.setClearColor(...arguments)},this.getClearAlpha=function(){return Te.getClearAlpha()},this.setClearAlpha=function(){Te.setClearAlpha(...arguments)},this.clear=function(M=!0,I=!0,$=!0){let W=0;if(M){let G=!1;if(H!==null){const pe=H.texture.format;G=p.has(pe)}if(G){const pe=H.texture.type,xe=d.has(pe),me=Te.getClearColor(),Ae=Te.getClearAlpha(),Pe=me.r,Ve=me.g,qe=me.b;xe?(x[0]=Pe,x[1]=Ve,x[2]=qe,x[3]=Ae,N.clearBufferuiv(N.COLOR,0,x)):(_[0]=Pe,_[1]=Ve,_[2]=qe,_[3]=Ae,N.clearBufferiv(N.COLOR,0,_))}else W|=N.COLOR_BUFFER_BIT}I&&(W|=N.DEPTH_BUFFER_BIT),$&&(W|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W!==0&&N.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",we,!1),n.removeEventListener("webglcontextrestored",Be,!1),n.removeEventListener("webglcontextcreationerror",pt,!1),Te.dispose(),Oe.dispose(),oe.dispose(),S.dispose(),Q.dispose(),Ee.dispose(),ce.dispose(),_e.dispose(),fe.dispose(),Z.dispose(),Z.removeEventListener("sessionstart",wp),Z.removeEventListener("sessionend",bp),Rr.stop()};function we(M){M.preventDefault(),Sg("WebGLRenderer: Context Lost."),V=!0}function Be(){Sg("WebGLRenderer: Context Restored."),V=!1;const M=A.autoReset,I=Me.enabled,$=Me.autoUpdate,W=Me.needsUpdate,G=Me.type;ae(),A.autoReset=M,Me.enabled=I,Me.autoUpdate=$,Me.needsUpdate=W,Me.type=G}function pt(M){nt("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function rt(M){const I=M.target;I.removeEventListener("dispose",rt),yi(I)}function yi(M){Si(M),S.remove(M)}function Si(M){const I=S.get(M).programs;I!==void 0&&(I.forEach(function($){fe.releaseProgram($)}),M.isShaderMaterial&&fe.releaseShaderCache(M))}this.renderBufferDirect=function(M,I,$,W,G,pe){I===null&&(I=ft);const xe=G.isMesh&&G.matrixWorld.determinant()<0,me=fy(M,I,$,W,G);Ce.setMaterial(W,xe);let Ae=$.index,Pe=1;if(W.wireframe===!0){if(Ae=J.getWireframeAttribute($),Ae===void 0)return;Pe=2}const Ve=$.drawRange,qe=$.attributes.position;let Ne=Ve.start*Pe,lt=(Ve.start+Ve.count)*Pe;pe!==null&&(Ne=Math.max(Ne,pe.start*Pe),lt=Math.min(lt,(pe.start+pe.count)*Pe)),Ae!==null?(Ne=Math.max(Ne,0),lt=Math.min(lt,Ae.count)):qe!=null&&(Ne=Math.max(Ne,0),lt=Math.min(lt,qe.count));const Tt=lt-Ne;if(Tt<0||Tt===1/0)return;ce.setup(G,W,me,$,Ae);let Mt,ct=Xe;if(Ae!==null&&(Mt=te.get(Ae),ct=L,ct.setIndex(Mt)),G.isMesh)W.wireframe===!0?(Ce.setLineWidth(W.wireframeLinewidth*bt()),ct.setMode(N.LINES)):ct.setMode(N.TRIANGLES);else if(G.isLine){let Yt=W.linewidth;Yt===void 0&&(Yt=1),Ce.setLineWidth(Yt*bt()),G.isLineSegments?ct.setMode(N.LINES):G.isLineLoop?ct.setMode(N.LINE_LOOP):ct.setMode(N.LINE_STRIP)}else G.isPoints?ct.setMode(N.POINTS):G.isSprite&&ct.setMode(N.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)Sc("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ct.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(it.get("WEBGL_multi_draw"))ct.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const Yt=G._multiDrawStarts,Re=G._multiDrawCounts,yn=G._multiDrawCount,tt=Ae?te.get(Ae).bytesPerElement:1,zn=S.get(W).currentProgram.getUniforms();for(let ni=0;ni<yn;ni++)zn.setValue(N,"_gl_DrawID",ni),ct.render(Yt[ni]/tt,Re[ni])}else if(G.isInstancedMesh)ct.renderInstances(Ne,Tt,G.count);else if($.isInstancedBufferGeometry){const Yt=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Re=Math.min($.instanceCount,Yt);ct.renderInstances(Ne,Tt,Re)}else ct.render(Ne,Tt)};function Mp(M,I,$){M.transparent===!0&&M.side===ci&&M.forceSinglePass===!1?(M.side=_n,M.needsUpdate=!0,Ua(M,I,$),M.side=Er,M.needsUpdate=!0,Ua(M,I,$),M.side=ci):Ua(M,I,$)}this.compile=function(M,I,$=null){$===null&&($=M),b=oe.get($),b.init(I),C.push(b),$.traverseVisible(function(G){G.isLight&&G.layers.test(I.layers)&&(b.pushLight(G),G.castShadow&&b.pushShadow(G))}),M!==$&&M.traverseVisible(function(G){G.isLight&&G.layers.test(I.layers)&&(b.pushLight(G),G.castShadow&&b.pushShadow(G))}),b.setupLights();const W=new Set;return M.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const pe=G.material;if(pe)if(Array.isArray(pe))for(let xe=0;xe<pe.length;xe++){const me=pe[xe];Mp(me,$,G),W.add(me)}else Mp(pe,$,G),W.add(pe)}),b=C.pop(),W},this.compileAsync=function(M,I,$=null){const W=this.compile(M,I,$);return new Promise(G=>{function pe(){if(W.forEach(function(xe){S.get(xe).currentProgram.isReady()&&W.delete(xe)}),W.size===0){G(M);return}setTimeout(pe,10)}it.get("KHR_parallel_shader_compile")!==null?pe():setTimeout(pe,10)})};let Kc=null;function uy(M){Kc&&Kc(M)}function wp(){Rr.stop()}function bp(){Rr.start()}const Rr=new B_;Rr.setAnimationLoop(uy),typeof self<"u"&&Rr.setContext(self),this.setAnimationLoop=function(M){Kc=M,Z.setAnimationLoop(M),M===null?Rr.stop():Rr.start()},Z.addEventListener("sessionstart",wp),Z.addEventListener("sessionend",bp),this.render=function(M,I){if(I!==void 0&&I.isCamera!==!0){nt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(V===!0)return;const $=Z.enabled===!0&&Z.isPresenting===!0,W=v!==null&&(H===null||$)&&v.begin(w,H);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),Z.enabled===!0&&Z.isPresenting===!0&&(v===null||v.isCompositing()===!1)&&(Z.cameraAutoUpdate===!0&&Z.updateCamera(I),I=Z.getCamera()),M.isScene===!0&&M.onBeforeRender(w,M,I,H),b=oe.get(M,C.length),b.init(I),C.push(b),_t.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),be.setFromProjectionMatrix(_t,fi,I.reversedDepth),Ue=this.localClippingEnabled,Ie=le.init(this.clippingPlanes,Ue),E=Oe.get(M,T.length),E.init(),T.push(E),Z.enabled===!0&&Z.isPresenting===!0){const xe=w.xr.getDepthSensingMesh();xe!==null&&Zc(xe,I,-1/0,w.sortObjects)}Zc(M,I,0,w.sortObjects),E.finish(),w.sortObjects===!0&&E.sort(He,Fe),je=Z.enabled===!1||Z.isPresenting===!1||Z.hasDepthSensing()===!1,je&&Te.addToRenderList(E,M),this.info.render.frame++,Ie===!0&&le.beginShadows();const G=b.state.shadowsArray;if(Me.render(G,M,I),Ie===!0&&le.endShadows(),this.info.autoReset===!0&&this.info.reset(),(W&&v.hasRenderPass())===!1){const xe=E.opaque,me=E.transmissive;if(b.setupLights(),I.isArrayCamera){const Ae=I.cameras;if(me.length>0)for(let Pe=0,Ve=Ae.length;Pe<Ve;Pe++){const qe=Ae[Pe];Ap(xe,me,M,qe)}je&&Te.render(M);for(let Pe=0,Ve=Ae.length;Pe<Ve;Pe++){const qe=Ae[Pe];Tp(E,M,qe,qe.viewport)}}else me.length>0&&Ap(xe,me,M,I),je&&Te.render(M),Tp(E,M,I)}H!==null&&z===0&&(D.updateMultisampleRenderTarget(H),D.updateRenderTargetMipmap(H)),W&&v.end(w),M.isScene===!0&&M.onAfterRender(w,M,I),ce.resetDefaultState(),K=-1,B=null,C.pop(),C.length>0?(b=C[C.length-1],Ie===!0&&le.setGlobalState(w.clippingPlanes,b.state.camera)):b=null,T.pop(),T.length>0?E=T[T.length-1]:E=null};function Zc(M,I,$,W){if(M.visible===!1)return;if(M.layers.test(I.layers)){if(M.isGroup)$=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(I);else if(M.isLight)b.pushLight(M),M.castShadow&&b.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||be.intersectsSprite(M)){W&&Je.setFromMatrixPosition(M.matrixWorld).applyMatrix4(_t);const xe=Ee.update(M),me=M.material;me.visible&&E.push(M,xe,me,$,Je.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||be.intersectsObject(M))){const xe=Ee.update(M),me=M.material;if(W&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Je.copy(M.boundingSphere.center)):(xe.boundingSphere===null&&xe.computeBoundingSphere(),Je.copy(xe.boundingSphere.center)),Je.applyMatrix4(M.matrixWorld).applyMatrix4(_t)),Array.isArray(me)){const Ae=xe.groups;for(let Pe=0,Ve=Ae.length;Pe<Ve;Pe++){const qe=Ae[Pe],Ne=me[qe.materialIndex];Ne&&Ne.visible&&E.push(M,xe,Ne,$,Je.z,qe)}}else me.visible&&E.push(M,xe,me,$,Je.z,null)}}const pe=M.children;for(let xe=0,me=pe.length;xe<me;xe++)Zc(pe[xe],I,$,W)}function Tp(M,I,$,W){const{opaque:G,transmissive:pe,transparent:xe}=M;b.setupLightsView($),Ie===!0&&le.setGlobalState(w.clippingPlanes,$),W&&Ce.viewport(F.copy(W)),G.length>0&&Ia(G,I,$),pe.length>0&&Ia(pe,I,$),xe.length>0&&Ia(xe,I,$),Ce.buffers.depth.setTest(!0),Ce.buffers.depth.setMask(!0),Ce.buffers.color.setMask(!0),Ce.setPolygonOffset(!1)}function Ap(M,I,$,W){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[W.id]===void 0){const Ne=it.has("EXT_color_buffer_half_float")||it.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[W.id]=new mi(1,1,{generateMipmaps:!0,type:Ne?Vi:Un,minFilter:qr,samples:Math.max(4,ht.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qe.workingColorSpace})}const pe=b.state.transmissionRenderTarget[W.id],xe=W.viewport||F;pe.setSize(xe.z*w.transmissionResolutionScale,xe.w*w.transmissionResolutionScale);const me=w.getRenderTarget(),Ae=w.getActiveCubeFace(),Pe=w.getActiveMipmapLevel();w.setRenderTarget(pe),w.getClearColor(q),k=w.getClearAlpha(),k<1&&w.setClearColor(16777215,.5),w.clear(),je&&Te.render($);const Ve=w.toneMapping;w.toneMapping=pi;const qe=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),b.setupLightsView(W),Ie===!0&&le.setGlobalState(w.clippingPlanes,W),Ia(M,$,W),D.updateMultisampleRenderTarget(pe),D.updateRenderTargetMipmap(pe),it.has("WEBGL_multisampled_render_to_texture")===!1){let Ne=!1;for(let lt=0,Tt=I.length;lt<Tt;lt++){const Mt=I[lt],{object:ct,geometry:Yt,material:Re,group:yn}=Mt;if(Re.side===ci&&ct.layers.test(W.layers)){const tt=Re.side;Re.side=_n,Re.needsUpdate=!0,Cp(ct,$,W,Yt,Re,yn),Re.side=tt,Re.needsUpdate=!0,Ne=!0}}Ne===!0&&(D.updateMultisampleRenderTarget(pe),D.updateRenderTargetMipmap(pe))}w.setRenderTarget(me,Ae,Pe),w.setClearColor(q,k),qe!==void 0&&(W.viewport=qe),w.toneMapping=Ve}function Ia(M,I,$){const W=I.isScene===!0?I.overrideMaterial:null;for(let G=0,pe=M.length;G<pe;G++){const xe=M[G],{object:me,geometry:Ae,group:Pe}=xe;let Ve=xe.material;Ve.allowOverride===!0&&W!==null&&(Ve=W),me.layers.test($.layers)&&Cp(me,I,$,Ae,Ve,Pe)}}function Cp(M,I,$,W,G,pe){M.onBeforeRender(w,I,$,W,G,pe),M.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),G.onBeforeRender(w,I,$,W,M,pe),G.transparent===!0&&G.side===ci&&G.forceSinglePass===!1?(G.side=_n,G.needsUpdate=!0,w.renderBufferDirect($,I,W,G,M,pe),G.side=Er,G.needsUpdate=!0,w.renderBufferDirect($,I,W,G,M,pe),G.side=ci):w.renderBufferDirect($,I,W,G,M,pe),M.onAfterRender(w,I,$,W,G,pe)}function Ua(M,I,$){I.isScene!==!0&&(I=ft);const W=S.get(M),G=b.state.lights,pe=b.state.shadowsArray,xe=G.state.version,me=fe.getParameters(M,G.state,pe,I,$),Ae=fe.getProgramCacheKey(me);let Pe=W.programs;W.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?I.environment:null,W.fog=I.fog;const Ve=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;W.envMap=Q.get(M.envMap||W.environment,Ve),W.envMapRotation=W.environment!==null&&M.envMap===null?I.environmentRotation:M.envMapRotation,Pe===void 0&&(M.addEventListener("dispose",rt),Pe=new Map,W.programs=Pe);let qe=Pe.get(Ae);if(qe!==void 0){if(W.currentProgram===qe&&W.lightsStateVersion===xe)return Pp(M,me),qe}else me.uniforms=fe.getUniforms(M),M.onBeforeCompile(me,w),qe=fe.acquireProgram(me,Ae),Pe.set(Ae,qe),W.uniforms=me.uniforms;const Ne=W.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Ne.clippingPlanes=le.uniform),Pp(M,me),W.needsLights=hy(M),W.lightsStateVersion=xe,W.needsLights&&(Ne.ambientLightColor.value=G.state.ambient,Ne.lightProbe.value=G.state.probe,Ne.directionalLights.value=G.state.directional,Ne.directionalLightShadows.value=G.state.directionalShadow,Ne.spotLights.value=G.state.spot,Ne.spotLightShadows.value=G.state.spotShadow,Ne.rectAreaLights.value=G.state.rectArea,Ne.ltc_1.value=G.state.rectAreaLTC1,Ne.ltc_2.value=G.state.rectAreaLTC2,Ne.pointLights.value=G.state.point,Ne.pointLightShadows.value=G.state.pointShadow,Ne.hemisphereLights.value=G.state.hemi,Ne.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Ne.spotLightMatrix.value=G.state.spotLightMatrix,Ne.spotLightMap.value=G.state.spotLightMap,Ne.pointShadowMatrix.value=G.state.pointShadowMatrix),W.currentProgram=qe,W.uniformsList=null,qe}function Rp(M){if(M.uniformsList===null){const I=M.currentProgram.getUniforms();M.uniformsList=jl.seqWithValue(I.seq,M.uniforms)}return M.uniformsList}function Pp(M,I){const $=S.get(M);$.outputColorSpace=I.outputColorSpace,$.batching=I.batching,$.batchingColor=I.batchingColor,$.instancing=I.instancing,$.instancingColor=I.instancingColor,$.instancingMorph=I.instancingMorph,$.skinning=I.skinning,$.morphTargets=I.morphTargets,$.morphNormals=I.morphNormals,$.morphColors=I.morphColors,$.morphTargetsCount=I.morphTargetsCount,$.numClippingPlanes=I.numClippingPlanes,$.numIntersection=I.numClipIntersection,$.vertexAlphas=I.vertexAlphas,$.vertexTangents=I.vertexTangents,$.toneMapping=I.toneMapping}function fy(M,I,$,W,G){I.isScene!==!0&&(I=ft),D.resetTextureUnits();const pe=I.fog,xe=W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial?I.environment:null,me=H===null?w.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:io,Ae=W.isMeshStandardMaterial||W.isMeshLambertMaterial&&!W.envMap||W.isMeshPhongMaterial&&!W.envMap,Pe=Q.get(W.envMap||xe,Ae),Ve=W.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,qe=!!$.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Ne=!!$.morphAttributes.position,lt=!!$.morphAttributes.normal,Tt=!!$.morphAttributes.color;let Mt=pi;W.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&(Mt=w.toneMapping);const ct=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Yt=ct!==void 0?ct.length:0,Re=S.get(W),yn=b.state.lights;if(Ie===!0&&(Ue===!0||M!==B)){const zt=M===B&&W.id===K;le.setState(W,M,zt)}let tt=!1;W.version===Re.__version?(Re.needsLights&&Re.lightsStateVersion!==yn.state.version||Re.outputColorSpace!==me||G.isBatchedMesh&&Re.batching===!1||!G.isBatchedMesh&&Re.batching===!0||G.isBatchedMesh&&Re.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&Re.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&Re.instancing===!1||!G.isInstancedMesh&&Re.instancing===!0||G.isSkinnedMesh&&Re.skinning===!1||!G.isSkinnedMesh&&Re.skinning===!0||G.isInstancedMesh&&Re.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Re.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Re.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Re.instancingMorph===!1&&G.morphTexture!==null||Re.envMap!==Pe||W.fog===!0&&Re.fog!==pe||Re.numClippingPlanes!==void 0&&(Re.numClippingPlanes!==le.numPlanes||Re.numIntersection!==le.numIntersection)||Re.vertexAlphas!==Ve||Re.vertexTangents!==qe||Re.morphTargets!==Ne||Re.morphNormals!==lt||Re.morphColors!==Tt||Re.toneMapping!==Mt||Re.morphTargetsCount!==Yt)&&(tt=!0):(tt=!0,Re.__version=W.version);let zn=Re.currentProgram;tt===!0&&(zn=Ua(W,I,G));let ni=!1,Pr=!1,cs=!1;const dt=zn.getUniforms(),Wt=Re.uniforms;if(Ce.useProgram(zn.program)&&(ni=!0,Pr=!0,cs=!0),W.id!==K&&(K=W.id,Pr=!0),ni||B!==M){Ce.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),dt.setValue(N,"projectionMatrix",M.projectionMatrix),dt.setValue(N,"viewMatrix",M.matrixWorldInverse);const Xi=dt.map.cameraPosition;Xi!==void 0&&Xi.setValue(N,Ye.setFromMatrixPosition(M.matrixWorld)),ht.logarithmicDepthBuffer&&dt.setValue(N,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&dt.setValue(N,"isOrthographic",M.isOrthographicCamera===!0),B!==M&&(B=M,Pr=!0,cs=!0)}if(Re.needsLights&&(yn.state.directionalShadowMap.length>0&&dt.setValue(N,"directionalShadowMap",yn.state.directionalShadowMap,D),yn.state.spotShadowMap.length>0&&dt.setValue(N,"spotShadowMap",yn.state.spotShadowMap,D),yn.state.pointShadowMap.length>0&&dt.setValue(N,"pointShadowMap",yn.state.pointShadowMap,D)),G.isSkinnedMesh){dt.setOptional(N,G,"bindMatrix"),dt.setOptional(N,G,"bindMatrixInverse");const zt=G.skeleton;zt&&(zt.boneTexture===null&&zt.computeBoneTexture(),dt.setValue(N,"boneTexture",zt.boneTexture,D))}G.isBatchedMesh&&(dt.setOptional(N,G,"batchingTexture"),dt.setValue(N,"batchingTexture",G._matricesTexture,D),dt.setOptional(N,G,"batchingIdTexture"),dt.setValue(N,"batchingIdTexture",G._indirectTexture,D),dt.setOptional(N,G,"batchingColorTexture"),G._colorsTexture!==null&&dt.setValue(N,"batchingColorTexture",G._colorsTexture,D));const ji=$.morphAttributes;if((ji.position!==void 0||ji.normal!==void 0||ji.color!==void 0)&&ge.update(G,$,zn),(Pr||Re.receiveShadow!==G.receiveShadow)&&(Re.receiveShadow=G.receiveShadow,dt.setValue(N,"receiveShadow",G.receiveShadow)),(W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial)&&W.envMap===null&&I.environment!==null&&(Wt.envMapIntensity.value=I.environmentIntensity),Wt.dfgLUT!==void 0&&(Wt.dfgLUT.value=OP()),Pr&&(dt.setValue(N,"toneMappingExposure",w.toneMappingExposure),Re.needsLights&&dy(Wt,cs),pe&&W.fog===!0&&Le.refreshFogUniforms(Wt,pe),Le.refreshMaterialUniforms(Wt,W,De,ie,b.state.transmissionRenderTarget[M.id]),jl.upload(N,Rp(Re),Wt,D)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(jl.upload(N,Rp(Re),Wt,D),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&dt.setValue(N,"center",G.center),dt.setValue(N,"modelViewMatrix",G.modelViewMatrix),dt.setValue(N,"normalMatrix",G.normalMatrix),dt.setValue(N,"modelMatrix",G.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const zt=W.uniformsGroups;for(let Xi=0,us=zt.length;Xi<us;Xi++){const Np=zt[Xi];_e.update(Np,zn),_e.bind(Np,zn)}}return zn}function dy(M,I){M.ambientLightColor.needsUpdate=I,M.lightProbe.needsUpdate=I,M.directionalLights.needsUpdate=I,M.directionalLightShadows.needsUpdate=I,M.pointLights.needsUpdate=I,M.pointLightShadows.needsUpdate=I,M.spotLights.needsUpdate=I,M.spotLightShadows.needsUpdate=I,M.rectAreaLights.needsUpdate=I,M.hemisphereLights.needsUpdate=I}function hy(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return H},this.setRenderTargetTextures=function(M,I,$){const W=S.get(M);W.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),S.get(M.texture).__webglTexture=I,S.get(M.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:$,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,I){const $=S.get(M);$.__webglFramebuffer=I,$.__useDefaultFramebuffer=I===void 0};const py=N.createFramebuffer();this.setRenderTarget=function(M,I=0,$=0){H=M,P=I,z=$;let W=null,G=!1,pe=!1;if(M){const me=S.get(M);if(me.__useDefaultFramebuffer!==void 0){Ce.bindFramebuffer(N.FRAMEBUFFER,me.__webglFramebuffer),F.copy(M.viewport),U.copy(M.scissor),O=M.scissorTest,Ce.viewport(F),Ce.scissor(U),Ce.setScissorTest(O),K=-1;return}else if(me.__webglFramebuffer===void 0)D.setupRenderTarget(M);else if(me.__hasExternalTextures)D.rebindTextures(M,S.get(M.texture).__webglTexture,S.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const Ve=M.depthTexture;if(me.__boundDepthTexture!==Ve){if(Ve!==null&&S.has(Ve)&&(M.width!==Ve.image.width||M.height!==Ve.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(M)}}const Ae=M.texture;(Ae.isData3DTexture||Ae.isDataArrayTexture||Ae.isCompressedArrayTexture)&&(pe=!0);const Pe=S.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Pe[I])?W=Pe[I][$]:W=Pe[I],G=!0):M.samples>0&&D.useMultisampledRTT(M)===!1?W=S.get(M).__webglMultisampledFramebuffer:Array.isArray(Pe)?W=Pe[$]:W=Pe,F.copy(M.viewport),U.copy(M.scissor),O=M.scissorTest}else F.copy(Y).multiplyScalar(De).floor(),U.copy(se).multiplyScalar(De).floor(),O=ue;if($!==0&&(W=py),Ce.bindFramebuffer(N.FRAMEBUFFER,W)&&Ce.drawBuffers(M,W),Ce.viewport(F),Ce.scissor(U),Ce.setScissorTest(O),G){const me=S.get(M.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+I,me.__webglTexture,$)}else if(pe){const me=I;for(let Ae=0;Ae<M.textures.length;Ae++){const Pe=S.get(M.textures[Ae]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+Ae,Pe.__webglTexture,$,me)}}else if(M!==null&&$!==0){const me=S.get(M.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,me.__webglTexture,$)}K=-1},this.readRenderTargetPixels=function(M,I,$,W,G,pe,xe,me=0){if(!(M&&M.isWebGLRenderTarget)){nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=S.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&xe!==void 0&&(Ae=Ae[xe]),Ae){Ce.bindFramebuffer(N.FRAMEBUFFER,Ae);try{const Pe=M.textures[me],Ve=Pe.format,qe=Pe.type;if(M.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+me),!ht.textureFormatReadable(Ve)){nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ht.textureTypeReadable(qe)){nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=M.width-W&&$>=0&&$<=M.height-G&&N.readPixels(I,$,W,G,de.convert(Ve),de.convert(qe),pe)}finally{const Pe=H!==null?S.get(H).__webglFramebuffer:null;Ce.bindFramebuffer(N.FRAMEBUFFER,Pe)}}},this.readRenderTargetPixelsAsync=async function(M,I,$,W,G,pe,xe,me=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ae=S.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&xe!==void 0&&(Ae=Ae[xe]),Ae)if(I>=0&&I<=M.width-W&&$>=0&&$<=M.height-G){Ce.bindFramebuffer(N.FRAMEBUFFER,Ae);const Pe=M.textures[me],Ve=Pe.format,qe=Pe.type;if(M.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+me),!ht.textureFormatReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ht.textureTypeReadable(qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ne=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Ne),N.bufferData(N.PIXEL_PACK_BUFFER,pe.byteLength,N.STREAM_READ),N.readPixels(I,$,W,G,de.convert(Ve),de.convert(qe),0);const lt=H!==null?S.get(H).__webglFramebuffer:null;Ce.bindFramebuffer(N.FRAMEBUFFER,lt);const Tt=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await c1(N,Tt,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,Ne),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,pe),N.deleteBuffer(Ne),N.deleteSync(Tt),pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,I=null,$=0){const W=Math.pow(2,-$),G=Math.floor(M.image.width*W),pe=Math.floor(M.image.height*W),xe=I!==null?I.x:0,me=I!==null?I.y:0;D.setTexture2D(M,0),N.copyTexSubImage2D(N.TEXTURE_2D,$,0,0,xe,me,G,pe),Ce.unbindTexture()};const my=N.createFramebuffer(),gy=N.createFramebuffer();this.copyTextureToTexture=function(M,I,$=null,W=null,G=0,pe=0){let xe,me,Ae,Pe,Ve,qe,Ne,lt,Tt;const Mt=M.isCompressedTexture?M.mipmaps[pe]:M.image;if($!==null)xe=$.max.x-$.min.x,me=$.max.y-$.min.y,Ae=$.isBox3?$.max.z-$.min.z:1,Pe=$.min.x,Ve=$.min.y,qe=$.isBox3?$.min.z:0;else{const Wt=Math.pow(2,-G);xe=Math.floor(Mt.width*Wt),me=Math.floor(Mt.height*Wt),M.isDataArrayTexture?Ae=Mt.depth:M.isData3DTexture?Ae=Math.floor(Mt.depth*Wt):Ae=1,Pe=0,Ve=0,qe=0}W!==null?(Ne=W.x,lt=W.y,Tt=W.z):(Ne=0,lt=0,Tt=0);const ct=de.convert(I.format),Yt=de.convert(I.type);let Re;I.isData3DTexture?(D.setTexture3D(I,0),Re=N.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(D.setTexture2DArray(I,0),Re=N.TEXTURE_2D_ARRAY):(D.setTexture2D(I,0),Re=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,I.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,I.unpackAlignment);const yn=N.getParameter(N.UNPACK_ROW_LENGTH),tt=N.getParameter(N.UNPACK_IMAGE_HEIGHT),zn=N.getParameter(N.UNPACK_SKIP_PIXELS),ni=N.getParameter(N.UNPACK_SKIP_ROWS),Pr=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,Mt.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Mt.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Pe),N.pixelStorei(N.UNPACK_SKIP_ROWS,Ve),N.pixelStorei(N.UNPACK_SKIP_IMAGES,qe);const cs=M.isDataArrayTexture||M.isData3DTexture,dt=I.isDataArrayTexture||I.isData3DTexture;if(M.isDepthTexture){const Wt=S.get(M),ji=S.get(I),zt=S.get(Wt.__renderTarget),Xi=S.get(ji.__renderTarget);Ce.bindFramebuffer(N.READ_FRAMEBUFFER,zt.__webglFramebuffer),Ce.bindFramebuffer(N.DRAW_FRAMEBUFFER,Xi.__webglFramebuffer);for(let us=0;us<Ae;us++)cs&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,S.get(M).__webglTexture,G,qe+us),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,S.get(I).__webglTexture,pe,Tt+us)),N.blitFramebuffer(Pe,Ve,xe,me,Ne,lt,xe,me,N.DEPTH_BUFFER_BIT,N.NEAREST);Ce.bindFramebuffer(N.READ_FRAMEBUFFER,null),Ce.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(G!==0||M.isRenderTargetTexture||S.has(M)){const Wt=S.get(M),ji=S.get(I);Ce.bindFramebuffer(N.READ_FRAMEBUFFER,my),Ce.bindFramebuffer(N.DRAW_FRAMEBUFFER,gy);for(let zt=0;zt<Ae;zt++)cs?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Wt.__webglTexture,G,qe+zt):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Wt.__webglTexture,G),dt?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,ji.__webglTexture,pe,Tt+zt):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,ji.__webglTexture,pe),G!==0?N.blitFramebuffer(Pe,Ve,xe,me,Ne,lt,xe,me,N.COLOR_BUFFER_BIT,N.NEAREST):dt?N.copyTexSubImage3D(Re,pe,Ne,lt,Tt+zt,Pe,Ve,xe,me):N.copyTexSubImage2D(Re,pe,Ne,lt,Pe,Ve,xe,me);Ce.bindFramebuffer(N.READ_FRAMEBUFFER,null),Ce.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else dt?M.isDataTexture||M.isData3DTexture?N.texSubImage3D(Re,pe,Ne,lt,Tt,xe,me,Ae,ct,Yt,Mt.data):I.isCompressedArrayTexture?N.compressedTexSubImage3D(Re,pe,Ne,lt,Tt,xe,me,Ae,ct,Mt.data):N.texSubImage3D(Re,pe,Ne,lt,Tt,xe,me,Ae,ct,Yt,Mt):M.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,pe,Ne,lt,xe,me,ct,Yt,Mt.data):M.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,pe,Ne,lt,Mt.width,Mt.height,ct,Mt.data):N.texSubImage2D(N.TEXTURE_2D,pe,Ne,lt,xe,me,ct,Yt,Mt);N.pixelStorei(N.UNPACK_ROW_LENGTH,yn),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,tt),N.pixelStorei(N.UNPACK_SKIP_PIXELS,zn),N.pixelStorei(N.UNPACK_SKIP_ROWS,ni),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Pr),pe===0&&I.generateMipmaps&&N.generateMipmap(Re),Ce.unbindTexture()},this.initRenderTarget=function(M){S.get(M).__webglFramebuffer===void 0&&D.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?D.setTextureCube(M,0):M.isData3DTexture?D.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?D.setTexture2DArray(M,0):D.setTexture2D(M,0),Ce.unbindTexture()},this.resetState=function(){P=0,z=0,H=null,Ce.reset(),ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return fi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Qe._getDrawingBufferColorSpace(e),n.unpackColorSpace=Qe._getUnpackColorSpace()}}function _p(){const t=ee.useRef(null),e=ee.useRef({scene:null,camera:null,renderer:null,mesh:null,uniforms:null,animationId:null});return ee.useEffect(()=>{if(!t.current)return;const n=t.current,{current:i}=e,r=`
      attribute vec3 position;
      void main() {
        gl_Position = vec4(position, 1.0);
      }
    `,s=`
      precision highp float;
      uniform vec2 resolution;
      uniform float time;
      uniform float xScale;
      uniform float yScale;
      uniform float distortion;

      void main() {
        vec2 p = (gl_FragCoord.xy * 2.0 - resolution) / min(resolution.x, resolution.y);
        
        float d = length(p) * distortion;
        
        float rx = p.x * (1.0 + d);
        float gx = p.x;
        float bx = p.x * (1.0 - d);

        float r = 0.05 / abs(p.y + sin((rx + time) * xScale) * yScale);
        float g = 0.05 / abs(p.y + sin((gx + time) * xScale) * yScale);
        float b = 0.05 / abs(p.y + sin((bx + time) * xScale) * yScale);
        
        gl_FragColor = vec4(r, g, b, 1.0);
      }
    `,o=()=>{i.scene=new b1,i.renderer=new kP({canvas:n}),i.renderer.setPixelRatio(window.devicePixelRatio),i.renderer.setClearColor(new ot(0)),i.camera=new vp(-1,1,1,-1,0,-1),i.uniforms={resolution:{value:[window.innerWidth,window.innerHeight]},time:{value:0},xScale:{value:1},yScale:{value:.5},distortion:{value:.05}};const c=[-1,-1,0,1,-1,0,-1,1,0,1,-1,0,-1,1,0,1,1,0],u=new Qn(new Float32Array(c),3),h=new _i;h.setAttribute("position",u);const f=new O_({vertexShader:r,fragmentShader:s,uniforms:i.uniforms,side:ci});i.mesh=new xi(h,f),i.scene.add(i.mesh),l()},a=()=>{i.uniforms&&(i.uniforms.time.value+=.01),i.renderer&&i.scene&&i.camera&&i.renderer.render(i.scene,i.camera),i.animationId=requestAnimationFrame(a)},l=()=>{if(!i.renderer||!i.uniforms)return;const c=window.innerWidth,u=window.innerHeight;i.renderer.setSize(c,u,!1),i.uniforms.resolution.value=[c,u]};return o(),a(),window.addEventListener("resize",l),()=>{var c,u;i.animationId&&cancelAnimationFrame(i.animationId),window.removeEventListener("resize",l),i.mesh&&((c=i.scene)==null||c.remove(i.mesh),i.mesh.geometry.dispose(),i.mesh.material instanceof La&&i.mesh.material.dispose()),(u=i.renderer)==null||u.dispose()}},[]),R.jsx("canvas",{ref:t,className:"fixed top-0 left-0 w-full h-full block"})}function l0(t,e){if(typeof t=="function")return t(e);t!=null&&(t.current=e)}function BP(...t){return e=>{let n=!1;const i=t.map(r=>{const s=l0(r,e);return!n&&typeof s=="function"&&(n=!0),s});if(n)return()=>{for(let r=0;r<i.length;r++){const s=i[r];typeof s=="function"?s():l0(t[r],null)}}}}var zP=Symbol.for("react.lazy"),Ec=C0[" use ".trim().toString()];function VP(t){return typeof t=="object"&&t!==null&&"then"in t}function j_(t){return t!=null&&typeof t=="object"&&"$$typeof"in t&&t.$$typeof===zP&&"_payload"in t&&VP(t._payload)}function HP(t){const e=GP(t),n=ee.forwardRef((i,r)=>{let{children:s,...o}=i;j_(s)&&typeof Ec=="function"&&(s=Ec(s._payload));const a=ee.Children.toArray(s),l=a.find(jP);if(l){const c=l.props.children,u=a.map(h=>h===l?ee.Children.count(c)>1?ee.Children.only(null):ee.isValidElement(c)?c.props.children:null:h);return R.jsx(e,{...o,ref:r,children:ee.isValidElement(c)?ee.cloneElement(c,void 0,u):null})}return R.jsx(e,{...o,ref:r,children:s})});return n.displayName=`${t}.Slot`,n}var X_=HP("Slot");function GP(t){const e=ee.forwardRef((n,i)=>{let{children:r,...s}=n;if(j_(r)&&typeof Ec=="function"&&(r=Ec(r._payload)),ee.isValidElement(r)){const o=qP(r),a=XP(s,r.props);return r.type!==ee.Fragment&&(a.ref=i?BP(i,o):o),ee.cloneElement(r,a)}return ee.Children.count(r)>1?ee.Children.only(null):null});return e.displayName=`${t}.SlotClone`,e}var WP=Symbol("radix.slottable");function jP(t){return ee.isValidElement(t)&&typeof t.type=="function"&&"__radixId"in t.type&&t.type.__radixId===WP}function XP(t,e){const n={...e};for(const i in e){const r=t[i],s=e[i];/^on[A-Z]/.test(i)?r&&s?n[i]=(...a)=>{const l=s(...a);return r(...a),l}:r&&(n[i]=r):i==="style"?n[i]={...r,...s}:i==="className"&&(n[i]=[r,s].filter(Boolean).join(" "))}return{...t,...n}}function qP(t){var i,r;let e=(i=Object.getOwnPropertyDescriptor(t.props,"ref"))==null?void 0:i.get,n=e&&"isReactWarning"in e&&e.isReactWarning;return n?t.ref:(e=(r=Object.getOwnPropertyDescriptor(t,"ref"))==null?void 0:r.get,n=e&&"isReactWarning"in e&&e.isReactWarning,n?t.props.ref:t.props.ref||t.ref)}function q_(t){var e,n,i="";if(typeof t=="string"||typeof t=="number")i+=t;else if(typeof t=="object")if(Array.isArray(t)){var r=t.length;for(e=0;e<r;e++)t[e]&&(n=q_(t[e]))&&(i&&(i+=" "),i+=n)}else for(n in t)t[n]&&(i&&(i+=" "),i+=n);return i}function $_(){for(var t,e,n=0,i="",r=arguments.length;n<r;n++)(t=arguments[n])&&(e=q_(t))&&(i&&(i+=" "),i+=e);return i}const c0=t=>typeof t=="boolean"?`${t}`:t===0?"0":t,u0=$_,Y_=(t,e)=>n=>{var i;if((e==null?void 0:e.variants)==null)return u0(t,n==null?void 0:n.class,n==null?void 0:n.className);const{variants:r,defaultVariants:s}=e,o=Object.keys(r).map(c=>{const u=n==null?void 0:n[c],h=s==null?void 0:s[c];if(u===null)return null;const f=c0(u)||c0(h);return r[c][f]}),a=n&&Object.entries(n).reduce((c,u)=>{let[h,f]=u;return f===void 0||(c[h]=f),c},{}),l=e==null||(i=e.compoundVariants)===null||i===void 0?void 0:i.reduce((c,u)=>{let{class:h,className:f,...g}=u;return Object.entries(g).every(m=>{let[y,p]=m;return Array.isArray(p)?p.includes({...s,...a}[y]):{...s,...a}[y]===p})?[...c,h,f]:c},[]);return u0(t,o,l,n==null?void 0:n.class,n==null?void 0:n.className)},$P=(t,e)=>{const n=new Array(t.length+e.length);for(let i=0;i<t.length;i++)n[i]=t[i];for(let i=0;i<e.length;i++)n[t.length+i]=e[i];return n},YP=(t,e)=>({classGroupId:t,validator:e}),K_=(t=new Map,e=null,n)=>({nextPart:t,validators:e,classGroupId:n}),Mc="-",f0=[],KP="arbitrary..",ZP=t=>{const e=QP(t),{conflictingClassGroups:n,conflictingClassGroupModifiers:i}=t;return{getClassGroupId:o=>{if(o.startsWith("[")&&o.endsWith("]"))return JP(o);const a=o.split(Mc),l=a[0]===""&&a.length>1?1:0;return Z_(a,l,e)},getConflictingClassGroupIds:(o,a)=>{if(a){const l=i[o],c=n[o];return l?c?$P(c,l):l:c||f0}return n[o]||f0}}},Z_=(t,e,n)=>{if(t.length-e===0)return n.classGroupId;const r=t[e],s=n.nextPart.get(r);if(s){const c=Z_(t,e+1,s);if(c)return c}const o=n.validators;if(o===null)return;const a=e===0?t.join(Mc):t.slice(e).join(Mc),l=o.length;for(let c=0;c<l;c++){const u=o[c];if(u.validator(a))return u.classGroupId}},JP=t=>t.slice(1,-1).indexOf(":")===-1?void 0:(()=>{const e=t.slice(1,-1),n=e.indexOf(":"),i=e.slice(0,n);return i?KP+i:void 0})(),QP=t=>{const{theme:e,classGroups:n}=t;return e3(n,e)},e3=(t,e)=>{const n=K_();for(const i in t){const r=t[i];yp(r,n,i,e)}return n},yp=(t,e,n,i)=>{const r=t.length;for(let s=0;s<r;s++){const o=t[s];t3(o,e,n,i)}},t3=(t,e,n,i)=>{if(typeof t=="string"){n3(t,e,n);return}if(typeof t=="function"){i3(t,e,n,i);return}r3(t,e,n,i)},n3=(t,e,n)=>{const i=t===""?e:J_(e,t);i.classGroupId=n},i3=(t,e,n,i)=>{if(s3(t)){yp(t(i),e,n,i);return}e.validators===null&&(e.validators=[]),e.validators.push(YP(n,t))},r3=(t,e,n,i)=>{const r=Object.entries(t),s=r.length;for(let o=0;o<s;o++){const[a,l]=r[o];yp(l,J_(e,a),n,i)}},J_=(t,e)=>{let n=t;const i=e.split(Mc),r=i.length;for(let s=0;s<r;s++){const o=i[s];let a=n.nextPart.get(o);a||(a=K_(),n.nextPart.set(o,a)),n=a}return n},s3=t=>"isThemeGetter"in t&&t.isThemeGetter===!0,o3=t=>{if(t<1)return{get:()=>{},set:()=>{}};let e=0,n=Object.create(null),i=Object.create(null);const r=(s,o)=>{n[s]=o,e++,e>t&&(e=0,i=n,n=Object.create(null))};return{get(s){let o=n[s];if(o!==void 0)return o;if((o=i[s])!==void 0)return r(s,o),o},set(s,o){s in n?n[s]=o:r(s,o)}}},nh="!",d0=":",a3=[],h0=(t,e,n,i,r)=>({modifiers:t,hasImportantModifier:e,baseClassName:n,maybePostfixModifierPosition:i,isExternal:r}),l3=t=>{const{prefix:e,experimentalParseClassName:n}=t;let i=r=>{const s=[];let o=0,a=0,l=0,c;const u=r.length;for(let y=0;y<u;y++){const p=r[y];if(o===0&&a===0){if(p===d0){s.push(r.slice(l,y)),l=y+1;continue}if(p==="/"){c=y;continue}}p==="["?o++:p==="]"?o--:p==="("?a++:p===")"&&a--}const h=s.length===0?r:r.slice(l);let f=h,g=!1;h.endsWith(nh)?(f=h.slice(0,-1),g=!0):h.startsWith(nh)&&(f=h.slice(1),g=!0);const m=c&&c>l?c-l:void 0;return h0(s,g,f,m)};if(e){const r=e+d0,s=i;i=o=>o.startsWith(r)?s(o.slice(r.length)):h0(a3,!1,o,void 0,!0)}if(n){const r=i;i=s=>n({className:s,parseClassName:r})}return i},c3=t=>{const e=new Map;return t.orderSensitiveModifiers.forEach((n,i)=>{e.set(n,1e6+i)}),n=>{const i=[];let r=[];for(let s=0;s<n.length;s++){const o=n[s],a=o[0]==="[",l=e.has(o);a||l?(r.length>0&&(r.sort(),i.push(...r),r=[]),i.push(o)):r.push(o)}return r.length>0&&(r.sort(),i.push(...r)),i}},u3=t=>({cache:o3(t.cacheSize),parseClassName:l3(t),sortModifiers:c3(t),...ZP(t)}),f3=/\s+/,d3=(t,e)=>{const{parseClassName:n,getClassGroupId:i,getConflictingClassGroupIds:r,sortModifiers:s}=e,o=[],a=t.trim().split(f3);let l="";for(let c=a.length-1;c>=0;c-=1){const u=a[c],{isExternal:h,modifiers:f,hasImportantModifier:g,baseClassName:m,maybePostfixModifierPosition:y}=n(u);if(h){l=u+(l.length>0?" "+l:l);continue}let p=!!y,d=i(p?m.substring(0,y):m);if(!d){if(!p){l=u+(l.length>0?" "+l:l);continue}if(d=i(m),!d){l=u+(l.length>0?" "+l:l);continue}p=!1}const x=f.length===0?"":f.length===1?f[0]:s(f).join(":"),_=g?x+nh:x,E=_+d;if(o.indexOf(E)>-1)continue;o.push(E);const b=r(d,p);for(let T=0;T<b.length;++T){const C=b[T];o.push(_+C)}l=u+(l.length>0?" "+l:l)}return l},h3=(...t)=>{let e=0,n,i,r="";for(;e<t.length;)(n=t[e++])&&(i=Q_(n))&&(r&&(r+=" "),r+=i);return r},Q_=t=>{if(typeof t=="string")return t;let e,n="";for(let i=0;i<t.length;i++)t[i]&&(e=Q_(t[i]))&&(n&&(n+=" "),n+=e);return n},p3=(t,...e)=>{let n,i,r,s;const o=l=>{const c=e.reduce((u,h)=>h(u),t());return n=u3(c),i=n.cache.get,r=n.cache.set,s=a,a(l)},a=l=>{const c=i(l);if(c)return c;const u=d3(l,n);return r(l,u),u};return s=o,(...l)=>s(h3(...l))},m3=[],Ut=t=>{const e=n=>n[t]||m3;return e.isThemeGetter=!0,e},ey=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,ty=/^\((?:(\w[\w-]*):)?(.+)\)$/i,g3=/^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/,x3=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,v3=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,_3=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,y3=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,S3=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,er=t=>g3.test(t),$e=t=>!!t&&!Number.isNaN(Number(t)),tr=t=>!!t&&Number.isInteger(Number(t)),cf=t=>t.endsWith("%")&&$e(t.slice(0,-1)),Ai=t=>x3.test(t),ny=()=>!0,E3=t=>v3.test(t)&&!_3.test(t),Sp=()=>!1,M3=t=>y3.test(t),w3=t=>S3.test(t),b3=t=>!ye(t)&&!Se(t),T3=t=>Cr(t,sy,Sp),ye=t=>ey.test(t),Or=t=>Cr(t,oy,E3),p0=t=>Cr(t,I3,$e),A3=t=>Cr(t,ly,ny),C3=t=>Cr(t,ay,Sp),m0=t=>Cr(t,iy,Sp),R3=t=>Cr(t,ry,w3),Ml=t=>Cr(t,cy,M3),Se=t=>ty.test(t),Lo=t=>ls(t,oy),P3=t=>ls(t,ay),g0=t=>ls(t,iy),N3=t=>ls(t,sy),L3=t=>ls(t,ry),wl=t=>ls(t,cy,!0),D3=t=>ls(t,ly,!0),Cr=(t,e,n)=>{const i=ey.exec(t);return i?i[1]?e(i[1]):n(i[2]):!1},ls=(t,e,n=!1)=>{const i=ty.exec(t);return i?i[1]?e(i[1]):n:!1},iy=t=>t==="position"||t==="percentage",ry=t=>t==="image"||t==="url",sy=t=>t==="length"||t==="size"||t==="bg-size",oy=t=>t==="length",I3=t=>t==="number",ay=t=>t==="family-name",ly=t=>t==="number"||t==="weight",cy=t=>t==="shadow",U3=()=>{const t=Ut("color"),e=Ut("font"),n=Ut("text"),i=Ut("font-weight"),r=Ut("tracking"),s=Ut("leading"),o=Ut("breakpoint"),a=Ut("container"),l=Ut("spacing"),c=Ut("radius"),u=Ut("shadow"),h=Ut("inset-shadow"),f=Ut("text-shadow"),g=Ut("drop-shadow"),m=Ut("blur"),y=Ut("perspective"),p=Ut("aspect"),d=Ut("ease"),x=Ut("animate"),_=()=>["auto","avoid","all","avoid-page","page","left","right","column"],E=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"],b=()=>[...E(),Se,ye],T=()=>["auto","hidden","clip","visible","scroll"],C=()=>["auto","contain","none"],v=()=>[Se,ye,l],w=()=>[er,"full","auto",...v()],V=()=>[tr,"none","subgrid",Se,ye],P=()=>["auto",{span:["full",tr,Se,ye]},tr,Se,ye],z=()=>[tr,"auto",Se,ye],H=()=>["auto","min","max","fr",Se,ye],K=()=>["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"],B=()=>["start","end","center","stretch","center-safe","end-safe"],F=()=>["auto",...v()],U=()=>[er,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...v()],O=()=>[er,"screen","full","dvw","lvw","svw","min","max","fit",...v()],q=()=>[er,"screen","full","lh","dvh","lvh","svh","min","max","fit",...v()],k=()=>[t,Se,ye],ne=()=>[...E(),g0,m0,{position:[Se,ye]}],ie=()=>["no-repeat",{repeat:["","x","y","space","round"]}],De=()=>["auto","cover","contain",N3,T3,{size:[Se,ye]}],He=()=>[cf,Lo,Or],Fe=()=>["","none","full",c,Se,ye],Y=()=>["",$e,Lo,Or],se=()=>["solid","dashed","dotted","double"],ue=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],be=()=>[$e,cf,g0,m0],Ie=()=>["","none",m,Se,ye],Ue=()=>["none",$e,Se,ye],_t=()=>["none",$e,Se,ye],Ye=()=>[$e,Se,ye],Je=()=>[er,"full",...v()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[Ai],breakpoint:[Ai],color:[ny],container:[Ai],"drop-shadow":[Ai],ease:["in","out","in-out"],font:[b3],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[Ai],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[Ai],shadow:[Ai],spacing:["px",$e],text:[Ai],"text-shadow":[Ai],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",er,ye,Se,p]}],container:["container"],columns:[{columns:[$e,ye,Se,a]}],"break-after":[{"break-after":_()}],"break-before":[{"break-before":_()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:b()}],overflow:[{overflow:T()}],"overflow-x":[{"overflow-x":T()}],"overflow-y":[{"overflow-y":T()}],overscroll:[{overscroll:C()}],"overscroll-x":[{"overscroll-x":C()}],"overscroll-y":[{"overscroll-y":C()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:w()}],"inset-x":[{"inset-x":w()}],"inset-y":[{"inset-y":w()}],start:[{"inset-s":w(),start:w()}],end:[{"inset-e":w(),end:w()}],"inset-bs":[{"inset-bs":w()}],"inset-be":[{"inset-be":w()}],top:[{top:w()}],right:[{right:w()}],bottom:[{bottom:w()}],left:[{left:w()}],visibility:["visible","invisible","collapse"],z:[{z:[tr,"auto",Se,ye]}],basis:[{basis:[er,"full","auto",a,...v()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[$e,er,"auto","initial","none",ye]}],grow:[{grow:["",$e,Se,ye]}],shrink:[{shrink:["",$e,Se,ye]}],order:[{order:[tr,"first","last","none",Se,ye]}],"grid-cols":[{"grid-cols":V()}],"col-start-end":[{col:P()}],"col-start":[{"col-start":z()}],"col-end":[{"col-end":z()}],"grid-rows":[{"grid-rows":V()}],"row-start-end":[{row:P()}],"row-start":[{"row-start":z()}],"row-end":[{"row-end":z()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":H()}],"auto-rows":[{"auto-rows":H()}],gap:[{gap:v()}],"gap-x":[{"gap-x":v()}],"gap-y":[{"gap-y":v()}],"justify-content":[{justify:[...K(),"normal"]}],"justify-items":[{"justify-items":[...B(),"normal"]}],"justify-self":[{"justify-self":["auto",...B()]}],"align-content":[{content:["normal",...K()]}],"align-items":[{items:[...B(),{baseline:["","last"]}]}],"align-self":[{self:["auto",...B(),{baseline:["","last"]}]}],"place-content":[{"place-content":K()}],"place-items":[{"place-items":[...B(),"baseline"]}],"place-self":[{"place-self":["auto",...B()]}],p:[{p:v()}],px:[{px:v()}],py:[{py:v()}],ps:[{ps:v()}],pe:[{pe:v()}],pbs:[{pbs:v()}],pbe:[{pbe:v()}],pt:[{pt:v()}],pr:[{pr:v()}],pb:[{pb:v()}],pl:[{pl:v()}],m:[{m:F()}],mx:[{mx:F()}],my:[{my:F()}],ms:[{ms:F()}],me:[{me:F()}],mbs:[{mbs:F()}],mbe:[{mbe:F()}],mt:[{mt:F()}],mr:[{mr:F()}],mb:[{mb:F()}],ml:[{ml:F()}],"space-x":[{"space-x":v()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":v()}],"space-y-reverse":["space-y-reverse"],size:[{size:U()}],"inline-size":[{inline:["auto",...O()]}],"min-inline-size":[{"min-inline":["auto",...O()]}],"max-inline-size":[{"max-inline":["none",...O()]}],"block-size":[{block:["auto",...q()]}],"min-block-size":[{"min-block":["auto",...q()]}],"max-block-size":[{"max-block":["none",...q()]}],w:[{w:[a,"screen",...U()]}],"min-w":[{"min-w":[a,"screen","none",...U()]}],"max-w":[{"max-w":[a,"screen","none","prose",{screen:[o]},...U()]}],h:[{h:["screen","lh",...U()]}],"min-h":[{"min-h":["screen","lh","none",...U()]}],"max-h":[{"max-h":["screen","lh",...U()]}],"font-size":[{text:["base",n,Lo,Or]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[i,D3,A3]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",cf,ye]}],"font-family":[{font:[P3,C3,e]}],"font-features":[{"font-features":[ye]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[r,Se,ye]}],"line-clamp":[{"line-clamp":[$e,"none",Se,p0]}],leading:[{leading:[s,...v()]}],"list-image":[{"list-image":["none",Se,ye]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",Se,ye]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:k()}],"text-color":[{text:k()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...se(),"wavy"]}],"text-decoration-thickness":[{decoration:[$e,"from-font","auto",Se,Or]}],"text-decoration-color":[{decoration:k()}],"underline-offset":[{"underline-offset":[$e,"auto",Se,ye]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:v()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",Se,ye]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],wrap:[{wrap:["break-word","anywhere","normal"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",Se,ye]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:ne()}],"bg-repeat":[{bg:ie()}],"bg-size":[{bg:De()}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},tr,Se,ye],radial:["",Se,ye],conic:[tr,Se,ye]},L3,R3]}],"bg-color":[{bg:k()}],"gradient-from-pos":[{from:He()}],"gradient-via-pos":[{via:He()}],"gradient-to-pos":[{to:He()}],"gradient-from":[{from:k()}],"gradient-via":[{via:k()}],"gradient-to":[{to:k()}],rounded:[{rounded:Fe()}],"rounded-s":[{"rounded-s":Fe()}],"rounded-e":[{"rounded-e":Fe()}],"rounded-t":[{"rounded-t":Fe()}],"rounded-r":[{"rounded-r":Fe()}],"rounded-b":[{"rounded-b":Fe()}],"rounded-l":[{"rounded-l":Fe()}],"rounded-ss":[{"rounded-ss":Fe()}],"rounded-se":[{"rounded-se":Fe()}],"rounded-ee":[{"rounded-ee":Fe()}],"rounded-es":[{"rounded-es":Fe()}],"rounded-tl":[{"rounded-tl":Fe()}],"rounded-tr":[{"rounded-tr":Fe()}],"rounded-br":[{"rounded-br":Fe()}],"rounded-bl":[{"rounded-bl":Fe()}],"border-w":[{border:Y()}],"border-w-x":[{"border-x":Y()}],"border-w-y":[{"border-y":Y()}],"border-w-s":[{"border-s":Y()}],"border-w-e":[{"border-e":Y()}],"border-w-bs":[{"border-bs":Y()}],"border-w-be":[{"border-be":Y()}],"border-w-t":[{"border-t":Y()}],"border-w-r":[{"border-r":Y()}],"border-w-b":[{"border-b":Y()}],"border-w-l":[{"border-l":Y()}],"divide-x":[{"divide-x":Y()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":Y()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...se(),"hidden","none"]}],"divide-style":[{divide:[...se(),"hidden","none"]}],"border-color":[{border:k()}],"border-color-x":[{"border-x":k()}],"border-color-y":[{"border-y":k()}],"border-color-s":[{"border-s":k()}],"border-color-e":[{"border-e":k()}],"border-color-bs":[{"border-bs":k()}],"border-color-be":[{"border-be":k()}],"border-color-t":[{"border-t":k()}],"border-color-r":[{"border-r":k()}],"border-color-b":[{"border-b":k()}],"border-color-l":[{"border-l":k()}],"divide-color":[{divide:k()}],"outline-style":[{outline:[...se(),"none","hidden"]}],"outline-offset":[{"outline-offset":[$e,Se,ye]}],"outline-w":[{outline:["",$e,Lo,Or]}],"outline-color":[{outline:k()}],shadow:[{shadow:["","none",u,wl,Ml]}],"shadow-color":[{shadow:k()}],"inset-shadow":[{"inset-shadow":["none",h,wl,Ml]}],"inset-shadow-color":[{"inset-shadow":k()}],"ring-w":[{ring:Y()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:k()}],"ring-offset-w":[{"ring-offset":[$e,Or]}],"ring-offset-color":[{"ring-offset":k()}],"inset-ring-w":[{"inset-ring":Y()}],"inset-ring-color":[{"inset-ring":k()}],"text-shadow":[{"text-shadow":["none",f,wl,Ml]}],"text-shadow-color":[{"text-shadow":k()}],opacity:[{opacity:[$e,Se,ye]}],"mix-blend":[{"mix-blend":[...ue(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":ue()}],"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],"mask-image-linear-pos":[{"mask-linear":[$e]}],"mask-image-linear-from-pos":[{"mask-linear-from":be()}],"mask-image-linear-to-pos":[{"mask-linear-to":be()}],"mask-image-linear-from-color":[{"mask-linear-from":k()}],"mask-image-linear-to-color":[{"mask-linear-to":k()}],"mask-image-t-from-pos":[{"mask-t-from":be()}],"mask-image-t-to-pos":[{"mask-t-to":be()}],"mask-image-t-from-color":[{"mask-t-from":k()}],"mask-image-t-to-color":[{"mask-t-to":k()}],"mask-image-r-from-pos":[{"mask-r-from":be()}],"mask-image-r-to-pos":[{"mask-r-to":be()}],"mask-image-r-from-color":[{"mask-r-from":k()}],"mask-image-r-to-color":[{"mask-r-to":k()}],"mask-image-b-from-pos":[{"mask-b-from":be()}],"mask-image-b-to-pos":[{"mask-b-to":be()}],"mask-image-b-from-color":[{"mask-b-from":k()}],"mask-image-b-to-color":[{"mask-b-to":k()}],"mask-image-l-from-pos":[{"mask-l-from":be()}],"mask-image-l-to-pos":[{"mask-l-to":be()}],"mask-image-l-from-color":[{"mask-l-from":k()}],"mask-image-l-to-color":[{"mask-l-to":k()}],"mask-image-x-from-pos":[{"mask-x-from":be()}],"mask-image-x-to-pos":[{"mask-x-to":be()}],"mask-image-x-from-color":[{"mask-x-from":k()}],"mask-image-x-to-color":[{"mask-x-to":k()}],"mask-image-y-from-pos":[{"mask-y-from":be()}],"mask-image-y-to-pos":[{"mask-y-to":be()}],"mask-image-y-from-color":[{"mask-y-from":k()}],"mask-image-y-to-color":[{"mask-y-to":k()}],"mask-image-radial":[{"mask-radial":[Se,ye]}],"mask-image-radial-from-pos":[{"mask-radial-from":be()}],"mask-image-radial-to-pos":[{"mask-radial-to":be()}],"mask-image-radial-from-color":[{"mask-radial-from":k()}],"mask-image-radial-to-color":[{"mask-radial-to":k()}],"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],"mask-image-radial-pos":[{"mask-radial-at":E()}],"mask-image-conic-pos":[{"mask-conic":[$e]}],"mask-image-conic-from-pos":[{"mask-conic-from":be()}],"mask-image-conic-to-pos":[{"mask-conic-to":be()}],"mask-image-conic-from-color":[{"mask-conic-from":k()}],"mask-image-conic-to-color":[{"mask-conic-to":k()}],"mask-mode":[{mask:["alpha","luminance","match"]}],"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],"mask-position":[{mask:ne()}],"mask-repeat":[{mask:ie()}],"mask-size":[{mask:De()}],"mask-type":[{"mask-type":["alpha","luminance"]}],"mask-image":[{mask:["none",Se,ye]}],filter:[{filter:["","none",Se,ye]}],blur:[{blur:Ie()}],brightness:[{brightness:[$e,Se,ye]}],contrast:[{contrast:[$e,Se,ye]}],"drop-shadow":[{"drop-shadow":["","none",g,wl,Ml]}],"drop-shadow-color":[{"drop-shadow":k()}],grayscale:[{grayscale:["",$e,Se,ye]}],"hue-rotate":[{"hue-rotate":[$e,Se,ye]}],invert:[{invert:["",$e,Se,ye]}],saturate:[{saturate:[$e,Se,ye]}],sepia:[{sepia:["",$e,Se,ye]}],"backdrop-filter":[{"backdrop-filter":["","none",Se,ye]}],"backdrop-blur":[{"backdrop-blur":Ie()}],"backdrop-brightness":[{"backdrop-brightness":[$e,Se,ye]}],"backdrop-contrast":[{"backdrop-contrast":[$e,Se,ye]}],"backdrop-grayscale":[{"backdrop-grayscale":["",$e,Se,ye]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[$e,Se,ye]}],"backdrop-invert":[{"backdrop-invert":["",$e,Se,ye]}],"backdrop-opacity":[{"backdrop-opacity":[$e,Se,ye]}],"backdrop-saturate":[{"backdrop-saturate":[$e,Se,ye]}],"backdrop-sepia":[{"backdrop-sepia":["",$e,Se,ye]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":v()}],"border-spacing-x":[{"border-spacing-x":v()}],"border-spacing-y":[{"border-spacing-y":v()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",Se,ye]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[$e,"initial",Se,ye]}],ease:[{ease:["linear","initial",d,Se,ye]}],delay:[{delay:[$e,Se,ye]}],animate:[{animate:["none",x,Se,ye]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[y,Se,ye]}],"perspective-origin":[{"perspective-origin":b()}],rotate:[{rotate:Ue()}],"rotate-x":[{"rotate-x":Ue()}],"rotate-y":[{"rotate-y":Ue()}],"rotate-z":[{"rotate-z":Ue()}],scale:[{scale:_t()}],"scale-x":[{"scale-x":_t()}],"scale-y":[{"scale-y":_t()}],"scale-z":[{"scale-z":_t()}],"scale-3d":["scale-3d"],skew:[{skew:Ye()}],"skew-x":[{"skew-x":Ye()}],"skew-y":[{"skew-y":Ye()}],transform:[{transform:[Se,ye,"","none","gpu","cpu"]}],"transform-origin":[{origin:b()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:Je()}],"translate-x":[{"translate-x":Je()}],"translate-y":[{"translate-y":Je()}],"translate-z":[{"translate-z":Je()}],"translate-none":["translate-none"],accent:[{accent:k()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:k()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",Se,ye]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":v()}],"scroll-mx":[{"scroll-mx":v()}],"scroll-my":[{"scroll-my":v()}],"scroll-ms":[{"scroll-ms":v()}],"scroll-me":[{"scroll-me":v()}],"scroll-mbs":[{"scroll-mbs":v()}],"scroll-mbe":[{"scroll-mbe":v()}],"scroll-mt":[{"scroll-mt":v()}],"scroll-mr":[{"scroll-mr":v()}],"scroll-mb":[{"scroll-mb":v()}],"scroll-ml":[{"scroll-ml":v()}],"scroll-p":[{"scroll-p":v()}],"scroll-px":[{"scroll-px":v()}],"scroll-py":[{"scroll-py":v()}],"scroll-ps":[{"scroll-ps":v()}],"scroll-pe":[{"scroll-pe":v()}],"scroll-pbs":[{"scroll-pbs":v()}],"scroll-pbe":[{"scroll-pbe":v()}],"scroll-pt":[{"scroll-pt":v()}],"scroll-pr":[{"scroll-pr":v()}],"scroll-pb":[{"scroll-pb":v()}],"scroll-pl":[{"scroll-pl":v()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",Se,ye]}],fill:[{fill:["none",...k()]}],"stroke-w":[{stroke:[$e,Lo,Or,p0]}],stroke:[{stroke:["none",...k()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","inset-bs","inset-be","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pbs","pbe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mbs","mbe","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-bs","border-w-be","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-bs","border-color-be","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mbs","scroll-mbe","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pbs","scroll-pbe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}},F3=p3(U3);function Jr(...t){return F3($_(t))}const O3=Y_("inline-flex items-center cursor-pointer justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-primary-foreground hover:bg-destructive/90",cool:"dark:inset-shadow-2xs dark:inset-shadow-white/10 bg-linear-to-t border border-b-2 border-zinc-950/40 from-primary to-primary/85 shadow-md shadow-primary/20 ring-1 ring-inset ring-white/25 transition-[filter] duration-200 hover:brightness-110 active:brightness-90 dark:border-x-0 text-primary-foreground dark:text-primary-foreground dark:border-t-0 dark:border-primary/50 dark:ring-white/5",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),k3=ee.forwardRef(({className:t,variant:e,size:n,asChild:i=!1,...r},s)=>{const o=i?X_:"button";return R.jsx(o,{className:Jr(O3({variant:e,size:n,className:t})),ref:s,...r})});k3.displayName="Button";const B3=Y_("inline-flex items-center transition-colors justify-center cursor-pointer gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-[color,box-shadow] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",{variants:{variant:{default:"bg-transparent hover:scale-105 duration-300 transition text-primary border-primary",destructive:"bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2 has-[>svg]:px-3",sm:"h-8 text-xs gap-1.5 px-4 has-[>svg]:px-4",lg:"h-10 rounded-md px-6 has-[>svg]:px-4",xl:"h-12 rounded-md px-8 has-[>svg]:px-6",xxl:"h-14 rounded-md px-10 has-[>svg]:px-8",icon:"size-9"}},defaultVariants:{variant:"default",size:"xxl"}});function Ep({className:t,variant:e,size:n,asChild:i=!1,children:r,...s}){const o=i?X_:"button";return R.jsx(R.Fragment,{children:R.jsxs(o,{"data-slot":"button",className:Jr("relative",B3({variant:e,size:n,className:t})),...s,children:[R.jsx("div",{className:`absolute top-0 left-0 z-0 h-full w-full rounded-full 
            shadow-[0_0_6px_rgba(0,0,0,0.03),0_2px_6px_rgba(0,0,0,0.08),inset_3px_3px_0.5px_-3px_rgba(0,0,0,0.9),inset_-3px_-3px_0.5px_-3px_rgba(0,0,0,0.85),inset_1px_1px_1px_-0.5px_rgba(0,0,0,0.6),inset_-1px_-1px_1px_-0.5px_rgba(0,0,0,0.6),inset_0_0_6px_6px_rgba(0,0,0,0.12),inset_0_0_2px_2px_rgba(0,0,0,0.06),0_0_12px_rgba(255,255,255,0.15)] 
        transition-all 
        dark:shadow-[0_0_8px_rgba(0,0,0,0.03),0_2px_6px_rgba(0,0,0,0.08),inset_3px_3px_0.5px_-3.5px_rgba(255,255,255,0.09),inset_-3px_-3px_0.5px_-3.5px_rgba(255,255,255,0.85),inset_1px_1px_1px_-0.5px_rgba(255,255,255,0.6),inset_-1px_-1px_1px_-0.5px_rgba(255,255,255,0.6),inset_0_0_6px_6px_rgba(255,255,255,0.12),inset_0_0_2px_2px_rgba(255,255,255,0.06),0_0_12px_rgba(0,0,0,0.15)]`}),R.jsx("div",{className:"absolute top-0 left-0 isolate -z-10 h-full w-full overflow-hidden rounded-md",style:{backdropFilter:'url("#container-glass")'}}),R.jsx("div",{className:"pointer-events-none z-10 ",children:r}),R.jsx(z3,{})]})})}function z3(){return R.jsx("svg",{className:"hidden",children:R.jsx("defs",{children:R.jsxs("filter",{id:"container-glass",x:"0%",y:"0%",width:"100%",height:"100%",colorInterpolationFilters:"sRGB",children:[R.jsx("feTurbulence",{type:"fractalNoise",baseFrequency:"0.05 0.05",numOctaves:"1",seed:"1",result:"turbulence"}),R.jsx("feGaussianBlur",{in:"turbulence",stdDeviation:"2",result:"blurredNoise"}),R.jsx("feDisplacementMap",{in:"SourceGraphic",in2:"blurredNoise",scale:"70",xChannelSelector:"R",yChannelSelector:"B",result:"displaced"}),R.jsx("feGaussianBlur",{in:"displaced",stdDeviation:"4",result:"finalBlur"}),R.jsx("feComposite",{in:"finalBlur",in2:"finalBlur",operator:"over"})]})})})}const V3={default:{outer:"bg-gradient-to-b from-[#000] to-[#A0A0A0]",inner:"bg-gradient-to-b from-[#FAFAFA] via-[#3E3E3E] to-[#E5E5E5]",button:"bg-gradient-to-b from-[#B9B9B9] to-[#969696]",textColor:"text-white",textShadow:"[text-shadow:_0_-1px_0_rgb(80_80_80_/_100%)]"},primary:{outer:"bg-gradient-to-b from-[#000] to-[#A0A0A0]",inner:"bg-gradient-to-b from-primary via-secondary to-muted",button:"bg-gradient-to-b from-primary to-primary/40",textColor:"text-white",textShadow:"[text-shadow:_0_-1px_0_rgb(30_58_138_/_100%)]"},success:{outer:"bg-gradient-to-b from-[#005A43] to-[#7CCB9B]",inner:"bg-gradient-to-b from-[#E5F8F0] via-[#00352F] to-[#D1F0E6]",button:"bg-gradient-to-b from-[#9ADBC8] to-[#3E8F7C]",textColor:"text-[#FFF7F0]",textShadow:"[text-shadow:_0_-1px_0_rgb(6_78_59_/_100%)]"},error:{outer:"bg-gradient-to-b from-[#5A0000] to-[#FFAEB0]",inner:"bg-gradient-to-b from-[#FFDEDE] via-[#680002] to-[#FFE9E9]",button:"bg-gradient-to-b from-[#F08D8F] to-[#A45253]",textColor:"text-[#FFF7F0]",textShadow:"[text-shadow:_0_-1px_0_rgb(146_64_14_/_100%)]"},gold:{outer:"bg-gradient-to-b from-[#917100] to-[#EAD98F]",inner:"bg-gradient-to-b from-[#FFFDDD] via-[#856807] to-[#FFF1B3]",button:"bg-gradient-to-b from-[#FFEBA1] to-[#9B873F]",textColor:"text-[#FFFDE5]",textShadow:"[text-shadow:_0_-1px_0_rgb(178_140_2_/_100%)]"},bronze:{outer:"bg-gradient-to-b from-[#864813] to-[#E9B486]",inner:"bg-gradient-to-b from-[#EDC5A1] via-[#5F2D01] to-[#FFDEC1]",button:"bg-gradient-to-b from-[#FFE3C9] to-[#A36F3D]",textColor:"text-[#FFF7F0]",textShadow:"[text-shadow:_0_-1px_0_rgb(124_45_18_/_100%)]"}},H3=(t="default",e,n,i)=>{const r=V3[t],s="all 250ms cubic-bezier(0.1, 0.4, 0.2, 1)";return{wrapper:Jr("relative inline-flex transform-gpu rounded-md p-[1.25px] will-change-transform",r.outer),wrapperStyle:{transform:e?"translateY(2.5px) scale(0.99)":"translateY(0) scale(1)",boxShadow:e?"0 1px 2px rgba(0, 0, 0, 0.15)":n&&!i?"0 4px 12px rgba(0, 0, 0, 0.12)":"0 3px 8px rgba(0, 0, 0, 0.08)",transition:s,transformOrigin:"center center"},inner:Jr("absolute inset-[1px] transform-gpu rounded-lg will-change-transform",r.inner),innerStyle:{transition:s,transformOrigin:"center center",filter:n&&!e&&!i?"brightness(1.05)":"none"},button:Jr("relative z-10 m-[1px] rounded-md inline-flex h-11 transform-gpu cursor-pointer items-center justify-center overflow-hidden rounded-md px-6 py-2 text-sm leading-none font-semibold will-change-transform outline-none",r.button,r.textColor,r.textShadow),buttonStyle:{transform:e?"scale(0.97)":"scale(1)",transition:s,transformOrigin:"center center",filter:n&&!e&&!i?"brightness(1.02)":"none"}}},G3=({isPressed:t})=>R.jsx("div",{className:Jr("pointer-events-none absolute inset-0 z-20 overflow-hidden transition-opacity duration-300",t?"opacity-20":"opacity-0"),children:R.jsx("div",{className:"absolute inset-0 rounded-md bg-gradient-to-r from-transparent via-neutral-100 to-transparent"})}),W3=ee.forwardRef(({children:t,className:e,variant:n="default",...i},r)=>{const[s,o]=ee.useState(!1),[a,l]=ee.useState(!1),[c,u]=ee.useState(!1);ee.useEffect(()=>{u("ontouchstart"in window||navigator.maxTouchPoints>0)},[]);const h=t||"Button",f=H3(n,s,a,c),g=()=>{o(!0)},m=()=>{o(!1)},y=()=>{o(!1),l(!1)},p=()=>{c||l(!0)},d=()=>{o(!0)},x=()=>{o(!1)},_=()=>{o(!1)};return R.jsxs("div",{className:f.wrapper,style:f.wrapperStyle,children:[R.jsx("div",{className:f.inner,style:f.innerStyle}),R.jsxs("button",{ref:r,className:Jr(f.button,e),style:f.buttonStyle,...i,onMouseDown:g,onMouseUp:m,onMouseLeave:y,onMouseEnter:p,onTouchStart:d,onTouchEnd:x,onTouchCancel:_,children:[R.jsx(G3,{isPressed:s}),h,a&&!s&&!c&&R.jsx("div",{className:"pointer-events-none absolute inset-0 bg-gradient-to-t rounded-lg from-transparent to-white/5"})]})]})});W3.displayName="MetalButton";const j3=()=>{const[t,e]=ee.useState(""),[n,i]=ee.useState(""),[r,s]=ee.useState(""),[o,a]=ee.useState(!1),{login:l}=ee.useContext(Ma),c=uo(),u=async h=>{h.preventDefault(),s(""),a(!0);try{const f=await Ra.post("/auth/login",{email:t,password:n});f.data.token&&(l(f.data.token),c("/dashboard"))}catch(f){f.response&&(f.response.status===401||f.response.status===404)?s("Invalid credentials."):s("An unexpected error occurred. Please try again later.")}finally{a(!1)}};return R.jsxs("div",{className:"min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-black selection:bg-green-500/30",children:[R.jsx(_p,{}),R.jsx("header",{className:"absolute top-0 w-full flex justify-between items-center px-8 py-6 z-20",children:R.jsx("div",{className:"flex items-center gap-2",children:R.jsx("span",{className:"text-2xl font-bold tracking-tighter text-white",children:"CybrMoon"})})}),R.jsxs("main",{className:"relative flex w-full max-w-7xl flex-col xl:flex-row items-center justify-center z-10 gap-12 px-4 py-20 mt-12",children:[R.jsxs("div",{className:"flex-1 text-center xl:text-left pt-10",children:[R.jsx("h1",{className:"mb-3 text-white text-center text-7xl font-extrabold tracking-tighter md:text-[clamp(2rem,8vw,5.5rem)] leading-[0.9]",children:"CybrMoon Identity"}),R.jsx("p",{className:"text-white/60 px-6 max-w-2xl mx-auto text-center text-xs md:text-sm lg:text-lg mt-6",children:"Next-generation access control and token management for distributed AWS microservices architecture."}),R.jsxs("div",{className:"my-8 flex items-center justify-center gap-2 bg-white/5 backdrop-blur-md px-4 py-2 rounded-full w-fit mx-auto border border-white/10 shadow-[0_0_20px_rgba(34,197,94,0.1)] hover:shadow-[0_0_30px_rgba(34,197,94,0.2)] transition-shadow",children:[R.jsxs("span",{className:"relative flex h-3 w-3 items-center justify-center",children:[R.jsx("span",{className:"absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"}),R.jsx("span",{className:"relative inline-flex h-2 w-2 rounded-full bg-green-500"})]}),R.jsx("p",{className:"text-xs text-white font-medium",children:"Authentication Nodes Online"})]})]}),R.jsx("div",{className:"w-full max-w-md xl:mr-10",children:R.jsxs("div",{className:"bg-[#0b0c10]/80 backdrop-blur-xl p-8 rounded-3xl border border-white/5 shadow-2xl relative overflow-hidden",children:[R.jsx("div",{className:"absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-green-500/50 to-transparent opacity-80"}),R.jsxs("div",{className:"flex flex-col items-center mb-8 text-center pt-2",children:[R.jsx("h2",{className:"text-3xl font-bold tracking-tight text-white mb-2",children:"Welcome Back"}),R.jsx("p",{className:"text-white/50 text-sm",children:"Sign in to your CybrMoon account"})]}),r&&R.jsx("div",{className:"mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-xl",children:R.jsx("p",{className:"text-sm text-red-400 font-medium text-center",children:r})}),R.jsxs("form",{onSubmit:u,className:"space-y-5",children:[R.jsxs("div",{className:"space-y-1.5",children:[R.jsx("label",{className:"block text-xs font-semibold uppercase tracking-widest text-white/50 pl-1",htmlFor:"email",children:"Email Address"}),R.jsxs("div",{className:"relative",children:[R.jsx("span",{className:"material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-white/30 text-[20px]",children:"alternate_email"}),R.jsx("input",{className:"w-full bg-white/5 border border-white/10 text-white py-3.5 pl-12 pr-4 rounded-xl focus:ring-1 focus:ring-green-500/50 focus:border-green-500/50 transition-all duration-300 placeholder:text-white/20 text-sm outline-none shadow-inner",id:"email",placeholder:"you@example.com",type:"email",value:t,onChange:h=>e(h.target.value),required:!0})]})]}),R.jsxs("div",{className:"space-y-1.5 pb-2",children:[R.jsxs("div",{className:"flex justify-between items-center pl-1 pr-1",children:[R.jsx("label",{className:"block text-xs font-semibold uppercase tracking-widest text-white/50",htmlFor:"password",children:"Password"}),R.jsx("a",{href:"#",className:"text-[10px] text-green-500/80 hover:text-green-400 transition-colors uppercase tracking-wider font-semibold",children:"Forgot?"})]}),R.jsxs("div",{className:"relative",children:[R.jsx("span",{className:"material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-white/30 text-[20px]",children:"lock"}),R.jsx("input",{className:"w-full bg-white/5 border border-white/10 text-white py-3.5 pl-12 pr-4 rounded-xl focus:ring-1 focus:ring-green-500/50 focus:border-green-500/50 transition-all duration-300 placeholder:text-white/20 text-sm outline-none shadow-inner",id:"password",placeholder:"••••••••",type:"password",value:n,onChange:h=>i(h.target.value),required:!0})]})]}),R.jsx("div",{className:"pt-2 flex justify-center w-full relative z-20",children:R.jsx(Ep,{type:"submit",className:"w-[80%]",size:"xl",disabled:o,children:R.jsx("span",{className:"text-white font-bold tracking-wide",children:o?"Authenticating...":"Let's Go"})})})]}),R.jsxs("div",{className:"mt-10 text-center text-[13px] text-white/40",children:["Don't have an account?",R.jsx(Vv,{to:"/register",className:"text-green-500 font-medium hover:text-green-400 ml-2 transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:bg-green-500/30",children:"Sign up"})]})]})})]}),R.jsx("footer",{className:"absolute bottom-5 text-center w-full z-10 pointer-events-none",children:R.jsx("p",{className:"text-[10px] uppercase tracking-[0.3em] text-white/20 font-medium",children:"© 2026 CybrMoon Identity"})})]})},X3=()=>{const[t,e]=ee.useState(""),[n,i]=ee.useState(""),[r,s]=ee.useState(""),[o,a]=ee.useState(""),[l,c]=ee.useState(""),[u,h]=ee.useState(""),[f,g]=ee.useState(!1),m=uo(),y=async p=>{p.preventDefault(),c(""),h(""),g(!0);try{await Ra.post("/auth/register",{email:t,password:n}),h("Account created successfully! Redirecting to login..."),setTimeout(()=>m("/login"),2e3)}catch(d){if(d.response&&d.response.status===409)c("An account with this email already exists.");else if(d.response&&d.response.status===400&&d.response.data.errors){const x=Object.values(d.response.data.errors)[0];c(x)}else c("Registration failed. Please try again.")}finally{g(!1)}};return R.jsxs("div",{className:"min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-black selection:bg-green-500/30",children:[R.jsx(_p,{}),R.jsx("header",{className:"absolute top-0 w-full flex justify-between items-center px-8 py-6 z-20",children:R.jsx("div",{className:"flex items-center gap-2",children:R.jsx("span",{className:"text-2xl font-bold tracking-tighter text-white",children:"CybrMoon"})})}),R.jsxs("main",{className:"relative flex w-full max-w-7xl flex-col xl:flex-row items-center justify-center z-10 gap-12 px-4 py-20 mt-12",children:[R.jsxs("div",{className:"flex-1 text-center xl:text-left pt-10",children:[R.jsx("h1",{className:"mb-3 text-white text-center text-7xl font-extrabold tracking-tighter md:text-[clamp(2rem,8vw,5.5rem)] leading-[0.9]",children:"CybrMoon Identity"}),R.jsx("p",{className:"text-white/60 px-6 max-w-2xl mx-auto text-center text-xs md:text-sm lg:text-lg mt-6",children:"Secure perimeter node enrollment and credential issuance for AWS decentralized architectures."}),R.jsxs("div",{className:"my-8 flex items-center justify-center gap-2 bg-white/5 backdrop-blur-md px-4 py-2 rounded-full w-fit mx-auto border border-white/10 shadow-[0_0_20px_rgba(34,197,94,0.1)] hover:shadow-[0_0_30px_rgba(34,197,94,0.2)] transition-shadow",children:[R.jsxs("span",{className:"relative flex h-3 w-3 items-center justify-center",children:[R.jsx("span",{className:"absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"}),R.jsx("span",{className:"relative inline-flex h-2 w-2 rounded-full bg-green-500"})]}),R.jsx("p",{className:"text-xs text-white font-medium",children:"New Node Registration Open"})]})]}),R.jsx("div",{className:"w-full max-w-lg z-10",children:R.jsxs("div",{className:"bg-[#0b0c10]/80 backdrop-blur-xl p-8 rounded-3xl border border-white/5 shadow-2xl relative overflow-hidden",children:[R.jsx("div",{className:"absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-green-500/50 to-transparent opacity-80"}),R.jsxs("div",{className:"flex flex-col mb-8 text-center pt-2",children:[R.jsx("h2",{className:"text-3xl font-bold tracking-tight text-white mb-2",children:"Create Account"}),R.jsx("p",{className:"text-white/50 text-sm",children:"Join the CybrMoon platform"})]}),l&&R.jsx("div",{className:"mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-xl",children:R.jsx("p",{className:"text-sm text-red-500 font-medium text-center",children:l})}),u&&R.jsx("div",{className:"mb-6 p-4 bg-green-500/10 border border-green-500/20 rounded-xl",children:R.jsx("p",{className:"text-sm text-green-400 font-medium text-center",children:u})}),R.jsxs("form",{onSubmit:y,className:"space-y-5",children:[R.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[R.jsxs("div",{className:"space-y-1.5",children:[R.jsx("label",{className:"block text-[10px] font-semibold uppercase tracking-widest text-white/50 pl-1",htmlFor:"first-name",children:"First Name"}),R.jsx("input",{className:"w-full bg-white/5 border border-white/10 text-white py-3 px-4 rounded-xl focus:ring-1 focus:ring-green-500/50 focus:border-green-500/50 transition-all outline-none placeholder:text-white/20 text-sm",id:"first-name",placeholder:"John",type:"text",value:r,onChange:p=>s(p.target.value)})]}),R.jsxs("div",{className:"space-y-1.5",children:[R.jsx("label",{className:"block text-[10px] font-semibold uppercase tracking-widest text-white/50 pl-1",htmlFor:"last-name",children:"Last Name"}),R.jsx("input",{className:"w-full bg-white/5 border border-white/10 text-white py-3 px-4 rounded-xl focus:ring-1 focus:ring-green-500/50 focus:border-green-500/50 transition-all outline-none placeholder:text-white/20 text-sm",id:"last-name",placeholder:"Doe",type:"text",value:o,onChange:p=>a(p.target.value)})]})]}),R.jsxs("div",{className:"space-y-1.5",children:[R.jsx("label",{className:"block text-[10px] font-semibold uppercase tracking-widest text-white/50 pl-1",htmlFor:"email",children:"Email Address"}),R.jsxs("div",{className:"relative",children:[R.jsx("span",{className:"material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-white/30 text-[18px]",children:"mail"}),R.jsx("input",{className:"w-full bg-white/5 border border-white/10 text-white py-3 pl-11 pr-4 rounded-xl focus:ring-1 focus:ring-green-500/50 focus:border-green-500/50 transition-all duration-300 placeholder:text-white/20 text-sm outline-none shadow-inner",id:"email",placeholder:"you@example.com",type:"email",value:t,onChange:p=>e(p.target.value),required:!0})]})]}),R.jsxs("div",{className:"space-y-1.5",children:[R.jsx("label",{className:"block text-[10px] font-semibold uppercase tracking-widest text-white/50 pl-1",htmlFor:"password",children:"Password"}),R.jsxs("div",{className:"relative pb-2",children:[R.jsx("span",{className:"material-symbols-outlined absolute left-4 top-[22px] -translate-y-1/2 text-white/30 text-[18px]",children:"lock"}),R.jsx("input",{className:"w-full bg-white/5 border border-white/10 text-white py-3 pl-11 pr-4 rounded-xl focus:ring-1 focus:ring-green-500/50 focus:border-green-500/50 transition-all duration-300 placeholder:text-white/20 text-sm outline-none shadow-inner",id:"password",placeholder:"••••••••",type:"password",value:n,onChange:p=>i(p.target.value),required:!0})]})]}),R.jsx("div",{className:"pt-2 flex justify-center w-full relative z-20",children:R.jsx(Ep,{type:"submit",disabled:f||u,className:"w-[80%]",size:"xl",children:R.jsx("span",{className:"text-white font-bold tracking-wide",children:f?"Creating...":"Sign Up"})})})]}),R.jsxs("div",{className:"mt-8 text-center text-[13px] text-white/40",children:["Already have an account?",R.jsx(Vv,{to:"/login",className:"text-green-500 font-medium hover:text-green-400 ml-2 transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:bg-green-500/30",children:"Sign in"})]})]})})]}),R.jsx("footer",{className:"absolute bottom-5 text-center w-full z-10 pointer-events-none",children:R.jsx("p",{className:"text-[10px] uppercase tracking-[0.3em] text-white/20 font-medium",children:"© 2026 CybrMoon Identity"})})]})},q3=()=>{const{user:t,token:e,logout:n}=ee.useContext(Ma),[i,r]=ee.useState(""),[s,o]=ee.useState(!0),[a,l]=ee.useState(""),c=uo(),u=()=>{if(!e)return"Unknown";try{const f=JSON.parse(atob(e.split(".")[1]));return new Date(f.exp*1e3).toLocaleString()}catch{return"Unknown"}};ee.useEffect(()=>{(async()=>{try{const g=await Ra.get("/users/profile");r(g.data.message)}catch{l("Failed to fetch profile data.")}finally{o(!1)}})()},[]);const h=()=>{n(),c("/login")};return R.jsxs("div",{className:"min-h-screen flex bg-black selection:bg-green-500/30 relative overflow-hidden",children:[R.jsx(_p,{}),R.jsx("aside",{className:"hidden md:flex flex-col h-screen w-64 border-r border-white/10 bg-[#0b0c10]/40 backdrop-blur-2xl sticky top-0 z-20 shadow-[4px_0_24px_rgba(0,0,0,0.5)]",children:R.jsxs("div",{className:"flex flex-col h-full p-6",children:[R.jsxs("div",{className:"mb-10",children:[R.jsx("h1",{className:"text-xl font-black text-white font-['Space_Grotesk'] tracking-tighter",children:"CybrMoon"}),R.jsx("p",{className:"text-[10px] uppercase tracking-[0.2em] text-green-500 font-bold",children:"Celestial Sentinel"})]}),R.jsxs("nav",{className:"flex-1 space-y-2",children:[R.jsxs("a",{className:"flex items-center gap-3 px-4 py-3 text-green-400 bg-green-500/10 rounded-lg border border-green-500/20 transition-all duration-300 group shadow-inner",href:"#",children:[R.jsx("span",{className:"material-symbols-outlined",style:{fontVariationSettings:"'FILL' 1"},children:"dashboard"}),R.jsx("span",{className:"font-['Space_Grotesk'] font-semibold",children:"Dashboard"})]}),R.jsxs("a",{className:"flex items-center gap-3 px-4 py-3 text-white/50 hover:text-white hover:bg-white/5 rounded-lg border border-transparent hover:border-white/5 transition-all duration-300",href:"#",children:[R.jsx("span",{className:"material-symbols-outlined",children:"key"}),R.jsx("span",{className:"font-['Space_Grotesk']",children:"Tokens"})]}),R.jsxs("a",{className:"flex items-center gap-3 px-4 py-3 text-white/50 hover:text-white hover:bg-white/5 rounded-lg border border-transparent hover:border-white/5 transition-all duration-300",href:"#",children:[R.jsx("span",{className:"material-symbols-outlined",children:"security"}),R.jsx("span",{className:"font-['Space_Grotesk']",children:"Audit Logs"})]}),R.jsxs("a",{className:"flex items-center gap-3 px-4 py-3 text-white/50 hover:text-white hover:bg-white/5 rounded-lg border border-transparent hover:border-white/5 transition-all duration-300",href:"#",children:[R.jsx("span",{className:"material-symbols-outlined",children:"settings"}),R.jsx("span",{className:"font-['Space_Grotesk']",children:"Settings"})]})]}),R.jsx("div",{className:"mt-auto pt-6 border-t border-white/10",children:R.jsxs("div",{className:"flex items-center gap-3",children:[R.jsx("div",{className:"w-10 h-10 rounded-full bg-black/40 flex items-center justify-center overflow-hidden border border-green-500/30 shadow-inner",children:R.jsx("span",{className:"material-symbols-outlined text-green-400",children:"person"})}),R.jsxs("div",{className:"overflow-hidden",children:[R.jsx("p",{className:"text-sm font-medium text-white truncate",children:t||"you@example.com"}),R.jsx("p",{className:"text-xs text-white/50 truncate",children:"Administrator"})]})]})})]})}),R.jsxs("div",{className:"flex-1 flex flex-col min-w-0 z-10",children:[R.jsxs("header",{className:"w-full sticky top-0 z-50 bg-[#0b0c10]/40 backdrop-blur-2xl shadow-[0_10px_30px_rgba(0,0,0,0.5)] px-8 py-4 flex justify-between items-center border-b border-white/10",children:[R.jsx("div",{className:"md:hidden",children:R.jsx("h1",{className:"text-2xl font-bold tracking-tighter text-white font-['Space_Grotesk']",children:"CybrMoon"})}),R.jsx("div",{className:"hidden md:block",children:R.jsxs("div",{className:"relative",children:[R.jsx("span",{className:"material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-white/40 text-sm",children:"search"}),R.jsx("input",{className:"bg-black/40 border border-white/10 rounded-full py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-1 focus:ring-green-500/50 focus:border-green-500/50 w-64 text-white transition-all placeholder:text-white/30 shadow-inner",placeholder:"Global search...",type:"text"})]})}),R.jsxs("div",{className:"flex items-center gap-6",children:[R.jsxs("button",{className:"text-white/50 hover:text-white transition-colors relative",children:[R.jsx("span",{className:"material-symbols-outlined",children:"notifications"}),R.jsx("span",{className:"absolute top-0 right-0 w-2 h-2 bg-green-500 rounded-full shadow-[0_0_10px_#22c55e]"})]}),R.jsx(Ep,{onClick:h,className:"w-fit",size:"sm",children:R.jsx("span",{className:"text-white font-bold tracking-wide",children:"Logout"})})]})]}),R.jsxs("main",{className:"p-8 max-w-7xl mx-auto w-full space-y-10 pb-24 md:pb-8",children:[R.jsxs("section",{className:"space-y-4",children:[R.jsx("h2",{className:"text-6xl md:text-7xl font-extrabold tracking-tighter font-headline text-white leading-none",children:"Dashboard"}),R.jsx("p",{className:"text-white/60 text-lg font-medium max-w-xl",children:"Welcome back to your secure workspace. Monitor nodes, manage access, and control microservices identity traffic instantly."})]}),a&&R.jsx("p",{className:"text-red-500 font-medium bg-red-500/10 p-4 rounded-xl border border-red-500/20",children:a}),R.jsxs("div",{className:"grid grid-cols-1 xl:grid-cols-2 gap-8",children:[R.jsxs("div",{className:"bg-black/40 backdrop-blur-xl p-8 rounded-3xl relative overflow-hidden group border border-white/10 shadow-2xl transition-all hover:bg-black/60",children:[R.jsx("div",{className:"absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity",children:R.jsx("span",{className:"material-symbols-outlined text-8xl text-green-500",children:"account_circle"})}),R.jsx("div",{className:"absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"}),R.jsxs("div",{className:"relative z-10 space-y-8",children:[R.jsxs("div",{className:"flex items-center gap-4",children:[R.jsx("div",{className:"w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 shadow-[0_0_30px_rgba(255,255,255,0.05)]",children:R.jsx("span",{className:"material-symbols-outlined text-white text-3xl",children:"person"})}),R.jsx("h3",{className:"text-2xl font-bold tracking-tight text-white",children:"User Profile"})]}),s?R.jsx("div",{className:"animate-pulse flex space-x-4",children:R.jsxs("div",{className:"flex-1 space-y-4 py-1",children:[R.jsx("div",{className:"h-4 bg-white/10 rounded w-3/4"}),R.jsx("div",{className:"h-4 bg-white/10 rounded w-1/2"})]})}):R.jsxs("div",{className:"space-y-6",children:[R.jsxs("div",{className:"space-y-1.5",children:[R.jsx("p",{className:"text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold",children:"Email Address"}),R.jsx("p",{className:"text-white font-medium truncate text-lg",children:t||"you@example.com"})]}),R.jsxs("div",{className:"flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/5 shadow-inner",children:[R.jsx("span",{className:"material-symbols-outlined text-green-500 text-3xl",children:"verified_user"}),R.jsxs("div",{className:"flex flex-col",children:[R.jsx("p",{className:"text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold",children:"System Status"}),R.jsx("p",{className:"text-sm font-medium text-white/90 mt-0.5",children:i||"User profile active and synchronized"})]})]})]}),R.jsx("div",{className:"pt-2",children:R.jsxs("button",{className:"text-sm text-white/80 hover:text-white font-semibold flex items-center gap-1.5 group/btn transition-colors border border-white/10 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10",children:["Manage Identity",R.jsx("span",{className:"material-symbols-outlined text-[16px] group-hover/btn:translate-x-1 transition-transform",children:"arrow_forward"})]})})]})]}),R.jsxs("div",{className:"bg-black/40 backdrop-blur-xl p-8 rounded-3xl relative overflow-hidden group border border-white/10 shadow-2xl transition-all hover:bg-black/60",children:[R.jsx("div",{className:"absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity",children:R.jsx("span",{className:"material-symbols-outlined text-8xl text-green-500",children:"security"})}),R.jsx("div",{className:"absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-green-500/50 to-transparent"}),R.jsxs("div",{className:"relative z-10 space-y-8",children:[R.jsxs("div",{className:"flex items-center gap-4",children:[R.jsx("div",{className:"w-14 h-14 rounded-2xl bg-green-500/10 flex items-center justify-center border border-green-500/20 shadow-[0_0_30px_rgba(34,197,94,0.1)]",children:R.jsx("span",{className:"material-symbols-outlined text-green-400 text-3xl",style:{fontVariationSettings:"'FILL' 1"},children:"lock"})}),R.jsx("h3",{className:"text-2xl font-bold tracking-tight text-white",children:"Security Context"})]}),R.jsxs("div",{className:"space-y-6",children:[R.jsxs("div",{className:"space-y-1.5",children:[R.jsx("p",{className:"text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold",children:"Active Auth Token"}),R.jsx("div",{className:"bg-white/5 p-4 rounded-xl border border-white/10 shadow-inner font-mono text-[11px] text-white/60 break-all leading-relaxed flex-shrink-0 relative",children:e?`${e.substring(0,110)}...`:"None"})]}),R.jsxs("div",{className:"flex items-center justify-between bg-black/40 p-3 rounded-xl border border-white/5",children:[R.jsxs("div",{className:"flex items-center gap-3",children:[R.jsx("span",{className:"material-symbols-outlined text-green-500/80",children:"schedule"}),R.jsxs("div",{className:"flex flex-col",children:[R.jsx("p",{className:"text-[9px] uppercase tracking-[0.1em] text-white/40 font-bold",children:"Token Expiration"}),R.jsx("p",{className:"text-xs text-white/80 font-medium",children:u()})]})]}),R.jsx("span",{className:"px-3 py-1.5 bg-green-500/20 text-green-400 text-[10px] font-bold rounded-md uppercase tracking-wider relative overflow-hidden border border-green-500/30",children:R.jsx("span",{className:"relative z-10",children:"Active Session"})})]})]}),R.jsx("div",{className:"pt-2",children:R.jsxs("button",{className:"text-sm text-green-400 hover:text-green-300 transition-colors font-semibold flex items-center gap-1.5 group/btn border border-green-500/20 px-4 py-2 rounded-lg bg-green-500/10 hover:bg-green-500/20 shadow-[0_0_15px_rgba(34,197,94,0.1)]",children:["Security Protocols",R.jsx("span",{className:"material-symbols-outlined text-[16px] group-hover/btn:translate-x-1 transition-transform",children:"shield"})]})})]})]})]}),R.jsxs("div",{className:"w-full h-48 rounded-3xl overflow-hidden relative border border-white/10 bg-black/40 backdrop-blur-md mt-6 shadow-2xl",children:[R.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"}),R.jsx("div",{className:"absolute top-0 right-0 p-8 w-1/2 h-full opacity-20",children:R.jsx("div",{className:"w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-500/40 via-transparent to-transparent blur-[60px]"})}),R.jsxs("div",{className:"absolute bottom-8 left-8 z-20",children:[R.jsxs("div",{className:"flex items-center gap-3 mb-2 bg-black/60 w-fit px-4 py-1.5 rounded-full border border-white/10",children:[R.jsxs("span",{className:"relative flex h-2 w-2 items-center justify-center",children:[R.jsx("span",{className:"absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"}),R.jsx("span",{className:"relative inline-flex h-1.5 w-1.5 rounded-full bg-green-500"})]}),R.jsx("p",{className:"text-[10px] font-bold uppercase tracking-[0.3em] text-green-500",children:"Global Node Status"})]}),R.jsx("p",{className:"text-white/70 font-medium text-lg leading-relaxed max-w-xl",children:'"Network telemetry optimal. Authentication nodes distributing traffic seamlessly."'})]})]})]})]}),R.jsxs("nav",{className:"md:hidden fixed bottom-0 left-0 right-0 h-[72px] bg-[#0b0c10]/80 backdrop-blur-2xl flex items-center justify-around px-4 z-50 border-t border-white/10 pb-safe",children:[R.jsxs("button",{className:"text-green-400 flex flex-col items-center gap-1.5",children:[R.jsx("span",{className:"material-symbols-outlined text-2xl",style:{fontVariationSettings:"'FILL' 1"},children:"dashboard"}),R.jsx("span",{className:"text-[9px] font-bold tracking-widest",children:"DASH"})]}),R.jsxs("button",{className:"text-white/40 hover:text-white transition-colors flex flex-col items-center gap-1.5",children:[R.jsx("span",{className:"material-symbols-outlined text-2xl",children:"key"}),R.jsx("span",{className:"text-[9px] font-bold tracking-widest",children:"TOKENS"})]}),R.jsxs("button",{className:"text-white/40 hover:text-white transition-colors flex flex-col items-center gap-1.5",children:[R.jsx("span",{className:"material-symbols-outlined text-2xl",children:"security"}),R.jsx("span",{className:"text-[9px] font-bold tracking-widest",children:"AUDIT"})]}),R.jsxs("button",{className:"text-white/40 hover:text-white transition-colors flex flex-col items-center gap-1.5",children:[R.jsx("span",{className:"material-symbols-outlined text-2xl",children:"settings"}),R.jsx("span",{className:"text-[9px] font-bold tracking-widest",children:"CONFIG"})]})]})]})};function $3(){return R.jsx(GM,{children:R.jsx(qM,{children:R.jsxs("div",{className:"flex flex-col min-h-screen",children:[R.jsx($M,{}),R.jsx("main",{className:"flex-grow",children:R.jsxs(FM,{children:[R.jsx(Oo,{path:"/",element:R.jsx(zv,{to:"/login",replace:!0})}),R.jsx(Oo,{path:"/login",element:R.jsx(j3,{})}),R.jsx(Oo,{path:"/register",element:R.jsx(X3,{})}),R.jsx(Oo,{path:"/dashboard",element:R.jsx(YM,{children:R.jsx(q3,{})})})]})})]})})})}uf.createRoot(document.getElementById("root")).render(R.jsx(A0.StrictMode,{children:R.jsx($3,{})}));
