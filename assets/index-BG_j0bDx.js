(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function t(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(a){if(a.ep)return;a.ep=!0;const l=t(a);fetch(a.href,l)}})();function Hv(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Gu={exports:{}},qo={},Wu={exports:{}},_t={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dm;function Vv(){if(dm)return _t;dm=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),_=Symbol.iterator;function x(z){return z===null||typeof z!="object"?null:(z=_&&z[_]||z["@@iterator"],typeof z=="function"?z:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,b={};function y(z,le,Ue){this.props=z,this.context=le,this.refs=b,this.updater=Ue||S}y.prototype.isReactComponent={},y.prototype.setState=function(z,le){if(typeof z!="object"&&typeof z!="function"&&z!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,z,le,"setState")},y.prototype.forceUpdate=function(z){this.updater.enqueueForceUpdate(this,z,"forceUpdate")};function g(){}g.prototype=y.prototype;function N(z,le,Ue){this.props=z,this.context=le,this.refs=b,this.updater=Ue||S}var I=N.prototype=new g;I.constructor=N,w(I,y.prototype),I.isPureReactComponent=!0;var C=Array.isArray,H=Object.prototype.hasOwnProperty,O={current:null},k={key:!0,ref:!0,__self:!0,__source:!0};function G(z,le,Ue){var ke,Xe={},se=null,ge=null;if(le!=null)for(ke in le.ref!==void 0&&(ge=le.ref),le.key!==void 0&&(se=""+le.key),le)H.call(le,ke)&&!k.hasOwnProperty(ke)&&(Xe[ke]=le[ke]);var we=arguments.length-2;if(we===1)Xe.children=Ue;else if(1<we){for(var Be=Array(we),je=0;je<we;je++)Be[je]=arguments[je+2];Xe.children=Be}if(z&&z.defaultProps)for(ke in we=z.defaultProps,we)Xe[ke]===void 0&&(Xe[ke]=we[ke]);return{$$typeof:s,type:z,key:se,ref:ge,props:Xe,_owner:O.current}}function P(z,le){return{$$typeof:s,type:z.type,key:le,ref:z.ref,props:z.props,_owner:z._owner}}function A(z){return typeof z=="object"&&z!==null&&z.$$typeof===s}function V(z){var le={"=":"=0",":":"=2"};return"$"+z.replace(/[=:]/g,function(Ue){return le[Ue]})}var q=/\/+/g;function oe(z,le){return typeof z=="object"&&z!==null&&z.key!=null?V(""+z.key):le.toString(36)}function ve(z,le,Ue,ke,Xe){var se=typeof z;(se==="undefined"||se==="boolean")&&(z=null);var ge=!1;if(z===null)ge=!0;else switch(se){case"string":case"number":ge=!0;break;case"object":switch(z.$$typeof){case s:case e:ge=!0}}if(ge)return ge=z,Xe=Xe(ge),z=ke===""?"."+oe(ge,0):ke,C(Xe)?(Ue="",z!=null&&(Ue=z.replace(q,"$&/")+"/"),ve(Xe,le,Ue,"",function(je){return je})):Xe!=null&&(A(Xe)&&(Xe=P(Xe,Ue+(!Xe.key||ge&&ge.key===Xe.key?"":(""+Xe.key).replace(q,"$&/")+"/")+z)),le.push(Xe)),1;if(ge=0,ke=ke===""?".":ke+":",C(z))for(var we=0;we<z.length;we++){se=z[we];var Be=ke+oe(se,we);ge+=ve(se,le,Ue,Be,Xe)}else if(Be=x(z),typeof Be=="function")for(z=Be.call(z),we=0;!(se=z.next()).done;)se=se.value,Be=ke+oe(se,we++),ge+=ve(se,le,Ue,Be,Xe);else if(se==="object")throw le=String(z),Error("Objects are not valid as a React child (found: "+(le==="[object Object]"?"object with keys {"+Object.keys(z).join(", ")+"}":le)+"). If you meant to render a collection of children, use an array instead.");return ge}function fe(z,le,Ue){if(z==null)return z;var ke=[],Xe=0;return ve(z,ke,"","",function(se){return le.call(Ue,se,Xe++)}),ke}function pe(z){if(z._status===-1){var le=z._result;le=le(),le.then(function(Ue){(z._status===0||z._status===-1)&&(z._status=1,z._result=Ue)},function(Ue){(z._status===0||z._status===-1)&&(z._status=2,z._result=Ue)}),z._status===-1&&(z._status=0,z._result=le)}if(z._status===1)return z._result.default;throw z._result}var me={current:null},j={transition:null},_e={ReactCurrentDispatcher:me,ReactCurrentBatchConfig:j,ReactCurrentOwner:O};function de(){throw Error("act(...) is not supported in production builds of React.")}return _t.Children={map:fe,forEach:function(z,le,Ue){fe(z,function(){le.apply(this,arguments)},Ue)},count:function(z){var le=0;return fe(z,function(){le++}),le},toArray:function(z){return fe(z,function(le){return le})||[]},only:function(z){if(!A(z))throw Error("React.Children.only expected to receive a single React element child.");return z}},_t.Component=y,_t.Fragment=t,_t.Profiler=a,_t.PureComponent=N,_t.StrictMode=r,_t.Suspense=m,_t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=_e,_t.act=de,_t.cloneElement=function(z,le,Ue){if(z==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+z+".");var ke=w({},z.props),Xe=z.key,se=z.ref,ge=z._owner;if(le!=null){if(le.ref!==void 0&&(se=le.ref,ge=O.current),le.key!==void 0&&(Xe=""+le.key),z.type&&z.type.defaultProps)var we=z.type.defaultProps;for(Be in le)H.call(le,Be)&&!k.hasOwnProperty(Be)&&(ke[Be]=le[Be]===void 0&&we!==void 0?we[Be]:le[Be])}var Be=arguments.length-2;if(Be===1)ke.children=Ue;else if(1<Be){we=Array(Be);for(var je=0;je<Be;je++)we[je]=arguments[je+2];ke.children=we}return{$$typeof:s,type:z.type,key:Xe,ref:se,props:ke,_owner:ge}},_t.createContext=function(z){return z={$$typeof:u,_currentValue:z,_currentValue2:z,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},z.Provider={$$typeof:l,_context:z},z.Consumer=z},_t.createElement=G,_t.createFactory=function(z){var le=G.bind(null,z);return le.type=z,le},_t.createRef=function(){return{current:null}},_t.forwardRef=function(z){return{$$typeof:f,render:z}},_t.isValidElement=A,_t.lazy=function(z){return{$$typeof:v,_payload:{_status:-1,_result:z},_init:pe}},_t.memo=function(z,le){return{$$typeof:h,type:z,compare:le===void 0?null:le}},_t.startTransition=function(z){var le=j.transition;j.transition={};try{z()}finally{j.transition=le}},_t.unstable_act=de,_t.useCallback=function(z,le){return me.current.useCallback(z,le)},_t.useContext=function(z){return me.current.useContext(z)},_t.useDebugValue=function(){},_t.useDeferredValue=function(z){return me.current.useDeferredValue(z)},_t.useEffect=function(z,le){return me.current.useEffect(z,le)},_t.useId=function(){return me.current.useId()},_t.useImperativeHandle=function(z,le,Ue){return me.current.useImperativeHandle(z,le,Ue)},_t.useInsertionEffect=function(z,le){return me.current.useInsertionEffect(z,le)},_t.useLayoutEffect=function(z,le){return me.current.useLayoutEffect(z,le)},_t.useMemo=function(z,le){return me.current.useMemo(z,le)},_t.useReducer=function(z,le,Ue){return me.current.useReducer(z,le,Ue)},_t.useRef=function(z){return me.current.useRef(z)},_t.useState=function(z){return me.current.useState(z)},_t.useSyncExternalStore=function(z,le,Ue){return me.current.useSyncExternalStore(z,le,Ue)},_t.useTransition=function(){return me.current.useTransition()},_t.version="18.3.1",_t}var fm;function Rf(){return fm||(fm=1,Wu.exports=Vv()),Wu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hm;function Gv(){if(hm)return qo;hm=1;var s=Rf(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(f,m,h){var v,_={},x=null,S=null;h!==void 0&&(x=""+h),m.key!==void 0&&(x=""+m.key),m.ref!==void 0&&(S=m.ref);for(v in m)r.call(m,v)&&!l.hasOwnProperty(v)&&(_[v]=m[v]);if(f&&f.defaultProps)for(v in m=f.defaultProps,m)_[v]===void 0&&(_[v]=m[v]);return{$$typeof:e,type:f,key:x,ref:S,props:_,_owner:a.current}}return qo.Fragment=t,qo.jsx=u,qo.jsxs=u,qo}var pm;function Wv(){return pm||(pm=1,Gu.exports=Gv()),Gu.exports}var E=Wv(),Tt=Rf();const jv=Hv(Tt);var Rl={},ju={exports:{}},Vn={},Xu={exports:{}},Yu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mm;function Xv(){return mm||(mm=1,(function(s){function e(j,_e){var de=j.length;j.push(_e);e:for(;0<de;){var z=de-1>>>1,le=j[z];if(0<a(le,_e))j[z]=_e,j[de]=le,de=z;else break e}}function t(j){return j.length===0?null:j[0]}function r(j){if(j.length===0)return null;var _e=j[0],de=j.pop();if(de!==_e){j[0]=de;e:for(var z=0,le=j.length,Ue=le>>>1;z<Ue;){var ke=2*(z+1)-1,Xe=j[ke],se=ke+1,ge=j[se];if(0>a(Xe,de))se<le&&0>a(ge,Xe)?(j[z]=ge,j[se]=de,z=se):(j[z]=Xe,j[ke]=de,z=ke);else if(se<le&&0>a(ge,de))j[z]=ge,j[se]=de,z=se;else break e}}return _e}function a(j,_e){var de=j.sortIndex-_e.sortIndex;return de!==0?de:j.id-_e.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var u=Date,f=u.now();s.unstable_now=function(){return u.now()-f}}var m=[],h=[],v=1,_=null,x=3,S=!1,w=!1,b=!1,y=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function I(j){for(var _e=t(h);_e!==null;){if(_e.callback===null)r(h);else if(_e.startTime<=j)r(h),_e.sortIndex=_e.expirationTime,e(m,_e);else break;_e=t(h)}}function C(j){if(b=!1,I(j),!w)if(t(m)!==null)w=!0,pe(H);else{var _e=t(h);_e!==null&&me(C,_e.startTime-j)}}function H(j,_e){w=!1,b&&(b=!1,g(G),G=-1),S=!0;var de=x;try{for(I(_e),_=t(m);_!==null&&(!(_.expirationTime>_e)||j&&!V());){var z=_.callback;if(typeof z=="function"){_.callback=null,x=_.priorityLevel;var le=z(_.expirationTime<=_e);_e=s.unstable_now(),typeof le=="function"?_.callback=le:_===t(m)&&r(m),I(_e)}else r(m);_=t(m)}if(_!==null)var Ue=!0;else{var ke=t(h);ke!==null&&me(C,ke.startTime-_e),Ue=!1}return Ue}finally{_=null,x=de,S=!1}}var O=!1,k=null,G=-1,P=5,A=-1;function V(){return!(s.unstable_now()-A<P)}function q(){if(k!==null){var j=s.unstable_now();A=j;var _e=!0;try{_e=k(!0,j)}finally{_e?oe():(O=!1,k=null)}}else O=!1}var oe;if(typeof N=="function")oe=function(){N(q)};else if(typeof MessageChannel<"u"){var ve=new MessageChannel,fe=ve.port2;ve.port1.onmessage=q,oe=function(){fe.postMessage(null)}}else oe=function(){y(q,0)};function pe(j){k=j,O||(O=!0,oe())}function me(j,_e){G=y(function(){j(s.unstable_now())},_e)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(j){j.callback=null},s.unstable_continueExecution=function(){w||S||(w=!0,pe(H))},s.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<j?Math.floor(1e3/j):5},s.unstable_getCurrentPriorityLevel=function(){return x},s.unstable_getFirstCallbackNode=function(){return t(m)},s.unstable_next=function(j){switch(x){case 1:case 2:case 3:var _e=3;break;default:_e=x}var de=x;x=_e;try{return j()}finally{x=de}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(j,_e){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var de=x;x=j;try{return _e()}finally{x=de}},s.unstable_scheduleCallback=function(j,_e,de){var z=s.unstable_now();switch(typeof de=="object"&&de!==null?(de=de.delay,de=typeof de=="number"&&0<de?z+de:z):de=z,j){case 1:var le=-1;break;case 2:le=250;break;case 5:le=1073741823;break;case 4:le=1e4;break;default:le=5e3}return le=de+le,j={id:v++,callback:_e,priorityLevel:j,startTime:de,expirationTime:le,sortIndex:-1},de>z?(j.sortIndex=de,e(h,j),t(m)===null&&j===t(h)&&(b?(g(G),G=-1):b=!0,me(C,de-z))):(j.sortIndex=le,e(m,j),w||S||(w=!0,pe(H))),j},s.unstable_shouldYield=V,s.unstable_wrapCallback=function(j){var _e=x;return function(){var de=x;x=_e;try{return j.apply(this,arguments)}finally{x=de}}}})(Yu)),Yu}var gm;function Yv(){return gm||(gm=1,Xu.exports=Xv()),Xu.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vm;function qv(){if(vm)return Vn;vm=1;var s=Rf(),e=Yv();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,a={};function l(n,i){u(n,i),u(n+"Capture",i)}function u(n,i){for(a[n]=i,n=0;n<i.length;n++)r.add(i[n])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),m=Object.prototype.hasOwnProperty,h=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},_={};function x(n){return m.call(_,n)?!0:m.call(v,n)?!1:h.test(n)?_[n]=!0:(v[n]=!0,!1)}function S(n,i,o,c){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:o!==null?!o.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function w(n,i,o,c){if(i===null||typeof i>"u"||S(n,i,o,c))return!0;if(c)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function b(n,i,o,c,d,p,M){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=o,this.propertyName=n,this.type=i,this.sanitizeURL=p,this.removeEmptyString=M}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){y[n]=new b(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];y[i]=new b(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){y[n]=new b(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){y[n]=new b(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){y[n]=new b(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){y[n]=new b(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){y[n]=new b(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){y[n]=new b(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){y[n]=new b(n,5,!1,n.toLowerCase(),null,!1,!1)});var g=/[\-:]([a-z])/g;function N(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(g,N);y[i]=new b(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(g,N);y[i]=new b(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(g,N);y[i]=new b(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){y[n]=new b(n,1,!1,n.toLowerCase(),null,!1,!1)}),y.xlinkHref=new b("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){y[n]=new b(n,1,!1,n.toLowerCase(),null,!0,!0)});function I(n,i,o,c){var d=y.hasOwnProperty(i)?y[i]:null;(d!==null?d.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(w(i,o,d,c)&&(o=null),c||d===null?x(i)&&(o===null?n.removeAttribute(i):n.setAttribute(i,""+o)):d.mustUseProperty?n[d.propertyName]=o===null?d.type===3?!1:"":o:(i=d.attributeName,c=d.attributeNamespace,o===null?n.removeAttribute(i):(d=d.type,o=d===3||d===4&&o===!0?"":""+o,c?n.setAttributeNS(c,i,o):n.setAttribute(i,o))))}var C=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,H=Symbol.for("react.element"),O=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),G=Symbol.for("react.strict_mode"),P=Symbol.for("react.profiler"),A=Symbol.for("react.provider"),V=Symbol.for("react.context"),q=Symbol.for("react.forward_ref"),oe=Symbol.for("react.suspense"),ve=Symbol.for("react.suspense_list"),fe=Symbol.for("react.memo"),pe=Symbol.for("react.lazy"),me=Symbol.for("react.offscreen"),j=Symbol.iterator;function _e(n){return n===null||typeof n!="object"?null:(n=j&&n[j]||n["@@iterator"],typeof n=="function"?n:null)}var de=Object.assign,z;function le(n){if(z===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);z=i&&i[1]||""}return`
`+z+n}var Ue=!1;function ke(n,i){if(!n||Ue)return"";Ue=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(ae){var c=ae}Reflect.construct(n,[],i)}else{try{i.call()}catch(ae){c=ae}n.call(i.prototype)}else{try{throw Error()}catch(ae){c=ae}n()}}catch(ae){if(ae&&c&&typeof ae.stack=="string"){for(var d=ae.stack.split(`
`),p=c.stack.split(`
`),M=d.length-1,F=p.length-1;1<=M&&0<=F&&d[M]!==p[F];)F--;for(;1<=M&&0<=F;M--,F--)if(d[M]!==p[F]){if(M!==1||F!==1)do if(M--,F--,0>F||d[M]!==p[F]){var W=`
`+d[M].replace(" at new "," at ");return n.displayName&&W.includes("<anonymous>")&&(W=W.replace("<anonymous>",n.displayName)),W}while(1<=M&&0<=F);break}}}finally{Ue=!1,Error.prepareStackTrace=o}return(n=n?n.displayName||n.name:"")?le(n):""}function Xe(n){switch(n.tag){case 5:return le(n.type);case 16:return le("Lazy");case 13:return le("Suspense");case 19:return le("SuspenseList");case 0:case 2:case 15:return n=ke(n.type,!1),n;case 11:return n=ke(n.type.render,!1),n;case 1:return n=ke(n.type,!0),n;default:return""}}function se(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case k:return"Fragment";case O:return"Portal";case P:return"Profiler";case G:return"StrictMode";case oe:return"Suspense";case ve:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case V:return(n.displayName||"Context")+".Consumer";case A:return(n._context.displayName||"Context")+".Provider";case q:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case fe:return i=n.displayName||null,i!==null?i:se(n.type)||"Memo";case pe:i=n._payload,n=n._init;try{return se(n(i))}catch{}}return null}function ge(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return se(i);case 8:return i===G?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function we(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Be(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function je(n){var i=Be(n)?"checked":"value",o=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var d=o.get,p=o.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return d.call(this)},set:function(M){c=""+M,p.call(this,M)}}),Object.defineProperty(n,i,{enumerable:o.enumerable}),{getValue:function(){return c},setValue:function(M){c=""+M},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function pt(n){n._valueTracker||(n._valueTracker=je(n))}function Ht(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var o=i.getValue(),c="";return n&&(c=Be(n)?n.checked?"true":"false":n.value),n=c,n!==o?(i.setValue(n),!0):!1}function B(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Ae(n,i){var o=i.checked;return de({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??n._wrapperState.initialChecked})}function Fe(n,i){var o=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;o=we(i.value!=null?i.value:o),n._wrapperState={initialChecked:c,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function Le(n,i){i=i.checked,i!=null&&I(n,"checked",i,!1)}function K(n,i){Le(n,i);var o=we(i.value),c=i.type;if(o!=null)c==="number"?(o===0&&n.value===""||n.value!=o)&&(n.value=""+o):n.value!==""+o&&(n.value=""+o);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?ze(n,i.type,o):i.hasOwnProperty("defaultValue")&&ze(n,i.type,we(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function ut(n,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,o||i===n.value||(n.value=i),n.defaultValue=i}o=n.name,o!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,o!==""&&(n.name=o)}function ze(n,i,o){(i!=="number"||B(n.ownerDocument)!==n)&&(o==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+o&&(n.defaultValue=""+o))}var st=Array.isArray;function Ct(n,i,o,c){if(n=n.options,i){i={};for(var d=0;d<o.length;d++)i["$"+o[d]]=!0;for(o=0;o<n.length;o++)d=i.hasOwnProperty("$"+n[o].value),n[o].selected!==d&&(n[o].selected=d),d&&c&&(n[o].defaultSelected=!0)}else{for(o=""+we(o),i=null,d=0;d<n.length;d++){if(n[d].value===o){n[d].selected=!0,c&&(n[d].defaultSelected=!0);return}i!==null||n[d].disabled||(i=n[d])}i!==null&&(i.selected=!0)}}function Dt(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return de({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function D(n,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(t(92));if(st(o)){if(1<o.length)throw Error(t(93));o=o[0]}i=o}i==null&&(i=""),o=i}n._wrapperState={initialValue:we(o)}}function T(n,i){var o=we(i.value),c=we(i.defaultValue);o!=null&&(o=""+o,o!==n.value&&(n.value=o),i.defaultValue==null&&n.defaultValue!==o&&(n.defaultValue=o)),c!=null&&(n.defaultValue=""+c)}function ne(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function Ee(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Re(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?Ee(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var xe,et=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,c,d){MSApp.execUnsafeLocalFunction(function(){return n(i,o,c,d)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(xe=xe||document.createElement("div"),xe.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=xe.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function De(n,i){if(i){var o=n.firstChild;if(o&&o===n.lastChild&&o.nodeType===3){o.nodeValue=i;return}}n.textContent=i}var He={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},tt=["Webkit","ms","Moz","O"];Object.keys(He).forEach(function(n){tt.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),He[i]=He[n]})});function Ne(n,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||He.hasOwnProperty(n)&&He[n]?(""+i).trim():i+"px"}function U(n,i){n=n.style;for(var o in i)if(i.hasOwnProperty(o)){var c=o.indexOf("--")===0,d=Ne(o,i[o],c);o==="float"&&(o="cssFloat"),c?n.setProperty(o,d):n[o]=d}}var ee=de({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ie(n,i){if(i){if(ee[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function J(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Me=null;function L(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Q=null,ce=null,Te=null;function Se(n){if(n=Io(n)){if(typeof Q!="function")throw Error(t(280));var i=n.stateNode;i&&(i=Va(i),Q(n.stateNode,n.type,i))}}function ye(n){ce?Te?Te.push(n):Te=[n]:ce=n}function Ve(){if(ce){var n=ce,i=Te;if(Te=ce=null,Se(n),i)for(n=0;n<i.length;n++)Se(i[n])}}function Ye(n,i){return n(i)}function xt(){}var mt=!1;function mn(n,i,o){if(mt)return n(i,o);mt=!0;try{return Ye(n,i,o)}finally{mt=!1,(ce!==null||Te!==null)&&(xt(),Ve())}}function en(n,i){var o=n.stateNode;if(o===null)return null;var c=Va(o);if(c===null)return null;o=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(o&&typeof o!="function")throw Error(t(231,i,typeof o));return o}var wi=!1;if(f)try{var Rn={};Object.defineProperty(Rn,"passive",{get:function(){wi=!0}}),window.addEventListener("test",Rn,Rn),window.removeEventListener("test",Rn,Rn)}catch{wi=!1}function Bi(n,i,o,c,d,p,M,F,W){var ae=Array.prototype.slice.call(arguments,3);try{i.apply(o,ae)}catch(be){this.onError(be)}}var ci=!1,Jn=null,Un=!1,ei=null,Hi={onError:function(n){ci=!0,Jn=n}};function Hr(n,i,o,c,d,p,M,F,W){ci=!1,Jn=null,Bi.apply(Hi,arguments)}function Ai(n,i,o,c,d,p,M,F,W){if(Hr.apply(this,arguments),ci){if(ci){var ae=Jn;ci=!1,Jn=null}else throw Error(t(198));Un||(Un=!0,ei=ae)}}function Fn(n){var i=n,o=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(o=i.return),n=i.return;while(n)}return i.tag===3?o:null}function Ma(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function Ta(n){if(Fn(n)!==n)throw Error(t(188))}function fc(n){var i=n.alternate;if(!i){if(i=Fn(n),i===null)throw Error(t(188));return i!==n?null:n}for(var o=n,c=i;;){var d=o.return;if(d===null)break;var p=d.alternate;if(p===null){if(c=d.return,c!==null){o=c;continue}break}if(d.child===p.child){for(p=d.child;p;){if(p===o)return Ta(d),n;if(p===c)return Ta(d),i;p=p.sibling}throw Error(t(188))}if(o.return!==c.return)o=d,c=p;else{for(var M=!1,F=d.child;F;){if(F===o){M=!0,o=d,c=p;break}if(F===c){M=!0,c=d,o=p;break}F=F.sibling}if(!M){for(F=p.child;F;){if(F===o){M=!0,o=p,c=d;break}if(F===c){M=!0,c=p,o=d;break}F=F.sibling}if(!M)throw Error(t(189))}}if(o.alternate!==c)throw Error(t(190))}if(o.tag!==3)throw Error(t(188));return o.stateNode.current===o?n:i}function wa(n){return n=fc(n),n!==null?Aa(n):null}function Aa(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=Aa(n);if(i!==null)return i;n=n.sibling}return null}var R=e.unstable_scheduleCallback,$=e.unstable_cancelCallback,ue=e.unstable_shouldYield,he=e.unstable_requestPaint,Y=e.unstable_now,Ie=e.unstable_getCurrentPriorityLevel,Ge=e.unstable_ImmediatePriority,Qe=e.unstable_UserBlockingPriority,qe=e.unstable_NormalPriority,ct=e.unstable_LowPriority,dt=e.unstable_IdlePriority,rt=null,ft=null;function Lt(n){if(ft&&typeof ft.onCommitFiberRoot=="function")try{ft.onCommitFiberRoot(rt,n,void 0,(n.current.flags&128)===128)}catch{}}var At=Math.clz32?Math.clz32:ot,kt=Math.log,Nt=Math.LN2;function ot(n){return n>>>=0,n===0?32:31-(kt(n)/Nt|0)|0}var Ut=64,yt=4194304;function rn(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function ui(n,i){var o=n.pendingLanes;if(o===0)return 0;var c=0,d=n.suspendedLanes,p=n.pingedLanes,M=o&268435455;if(M!==0){var F=M&~d;F!==0?c=rn(F):(p&=M,p!==0&&(c=rn(p)))}else M=o&~d,M!==0?c=rn(M):p!==0&&(c=rn(p));if(c===0)return 0;if(i!==0&&i!==c&&(i&d)===0&&(d=c&-c,p=i&-i,d>=p||d===16&&(p&4194240)!==0))return i;if((c&4)!==0&&(c|=o&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)o=31-At(i),d=1<<o,c|=n[o],i&=~d;return c}function Cn(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Vr(n,i){for(var o=n.suspendedLanes,c=n.pingedLanes,d=n.expirationTimes,p=n.pendingLanes;0<p;){var M=31-At(p),F=1<<M,W=d[M];W===-1?((F&o)===0||(F&c)!==0)&&(d[M]=Cn(F,i)):W<=i&&(n.expiredLanes|=F),p&=~F}}function zt(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function bn(){var n=Ut;return Ut<<=1,(Ut&4194240)===0&&(Ut=64),n}function xn(n){for(var i=[],o=0;31>o;o++)i.push(n);return i}function Qt(n,i,o){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-At(i),n[i]=o}function yn(n,i){var o=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<o;){var d=31-At(o),p=1<<d;i[d]=0,c[d]=-1,n[d]=-1,o&=~p}}function Gr(n,i){var o=n.entangledLanes|=i;for(n=n.entanglements;o;){var c=31-At(o),d=1<<c;d&i|n[c]&i&&(n[c]|=i),o&=~d}}var St=0;function Gf(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Wf,hc,jf,Xf,Yf,pc=!1,Ra=[],lr=null,cr=null,ur=null,vo=new Map,_o=new Map,dr=[],c0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function qf(n,i){switch(n){case"focusin":case"focusout":lr=null;break;case"dragenter":case"dragleave":cr=null;break;case"mouseover":case"mouseout":ur=null;break;case"pointerover":case"pointerout":vo.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":_o.delete(i.pointerId)}}function xo(n,i,o,c,d,p){return n===null||n.nativeEvent!==p?(n={blockedOn:i,domEventName:o,eventSystemFlags:c,nativeEvent:p,targetContainers:[d]},i!==null&&(i=Io(i),i!==null&&hc(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),n)}function u0(n,i,o,c,d){switch(i){case"focusin":return lr=xo(lr,n,i,o,c,d),!0;case"dragenter":return cr=xo(cr,n,i,o,c,d),!0;case"mouseover":return ur=xo(ur,n,i,o,c,d),!0;case"pointerover":var p=d.pointerId;return vo.set(p,xo(vo.get(p)||null,n,i,o,c,d)),!0;case"gotpointercapture":return p=d.pointerId,_o.set(p,xo(_o.get(p)||null,n,i,o,c,d)),!0}return!1}function Kf(n){var i=Wr(n.target);if(i!==null){var o=Fn(i);if(o!==null){if(i=o.tag,i===13){if(i=Ma(o),i!==null){n.blockedOn=i,Yf(n.priority,function(){jf(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){n.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Ca(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var o=gc(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(o===null){o=n.nativeEvent;var c=new o.constructor(o.type,o);Me=c,o.target.dispatchEvent(c),Me=null}else return i=Io(o),i!==null&&hc(i),n.blockedOn=o,!1;i.shift()}return!0}function $f(n,i,o){Ca(n)&&o.delete(i)}function d0(){pc=!1,lr!==null&&Ca(lr)&&(lr=null),cr!==null&&Ca(cr)&&(cr=null),ur!==null&&Ca(ur)&&(ur=null),vo.forEach($f),_o.forEach($f)}function yo(n,i){n.blockedOn===i&&(n.blockedOn=null,pc||(pc=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,d0)))}function So(n){function i(d){return yo(d,n)}if(0<Ra.length){yo(Ra[0],n);for(var o=1;o<Ra.length;o++){var c=Ra[o];c.blockedOn===n&&(c.blockedOn=null)}}for(lr!==null&&yo(lr,n),cr!==null&&yo(cr,n),ur!==null&&yo(ur,n),vo.forEach(i),_o.forEach(i),o=0;o<dr.length;o++)c=dr[o],c.blockedOn===n&&(c.blockedOn=null);for(;0<dr.length&&(o=dr[0],o.blockedOn===null);)Kf(o),o.blockedOn===null&&dr.shift()}var xs=C.ReactCurrentBatchConfig,ba=!0;function f0(n,i,o,c){var d=St,p=xs.transition;xs.transition=null;try{St=1,mc(n,i,o,c)}finally{St=d,xs.transition=p}}function h0(n,i,o,c){var d=St,p=xs.transition;xs.transition=null;try{St=4,mc(n,i,o,c)}finally{St=d,xs.transition=p}}function mc(n,i,o,c){if(ba){var d=gc(n,i,o,c);if(d===null)Ic(n,i,c,Pa,o),qf(n,c);else if(u0(d,n,i,o,c))c.stopPropagation();else if(qf(n,c),i&4&&-1<c0.indexOf(n)){for(;d!==null;){var p=Io(d);if(p!==null&&Wf(p),p=gc(n,i,o,c),p===null&&Ic(n,i,c,Pa,o),p===d)break;d=p}d!==null&&c.stopPropagation()}else Ic(n,i,c,null,o)}}var Pa=null;function gc(n,i,o,c){if(Pa=null,n=L(c),n=Wr(n),n!==null)if(i=Fn(n),i===null)n=null;else if(o=i.tag,o===13){if(n=Ma(i),n!==null)return n;n=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return Pa=n,null}function Zf(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ie()){case Ge:return 1;case Qe:return 4;case qe:case ct:return 16;case dt:return 536870912;default:return 16}default:return 16}}var fr=null,vc=null,La=null;function Qf(){if(La)return La;var n,i=vc,o=i.length,c,d="value"in fr?fr.value:fr.textContent,p=d.length;for(n=0;n<o&&i[n]===d[n];n++);var M=o-n;for(c=1;c<=M&&i[o-c]===d[p-c];c++);return La=d.slice(n,1<c?1-c:void 0)}function Na(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function Ia(){return!0}function Jf(){return!1}function Xn(n){function i(o,c,d,p,M){this._reactName=o,this._targetInst=d,this.type=c,this.nativeEvent=p,this.target=M,this.currentTarget=null;for(var F in n)n.hasOwnProperty(F)&&(o=n[F],this[F]=o?o(p):p[F]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?Ia:Jf,this.isPropagationStopped=Jf,this}return de(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Ia)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Ia)},persist:function(){},isPersistent:Ia}),i}var ys={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},_c=Xn(ys),Eo=de({},ys,{view:0,detail:0}),p0=Xn(Eo),xc,yc,Mo,Da=de({},Eo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ec,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Mo&&(Mo&&n.type==="mousemove"?(xc=n.screenX-Mo.screenX,yc=n.screenY-Mo.screenY):yc=xc=0,Mo=n),xc)},movementY:function(n){return"movementY"in n?n.movementY:yc}}),eh=Xn(Da),m0=de({},Da,{dataTransfer:0}),g0=Xn(m0),v0=de({},Eo,{relatedTarget:0}),Sc=Xn(v0),_0=de({},ys,{animationName:0,elapsedTime:0,pseudoElement:0}),x0=Xn(_0),y0=de({},ys,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),S0=Xn(y0),E0=de({},ys,{data:0}),th=Xn(E0),M0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},T0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},w0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function A0(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=w0[n])?!!i[n]:!1}function Ec(){return A0}var R0=de({},Eo,{key:function(n){if(n.key){var i=M0[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=Na(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?T0[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ec,charCode:function(n){return n.type==="keypress"?Na(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Na(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),C0=Xn(R0),b0=de({},Da,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),nh=Xn(b0),P0=de({},Eo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ec}),L0=Xn(P0),N0=de({},ys,{propertyName:0,elapsedTime:0,pseudoElement:0}),I0=Xn(N0),D0=de({},Da,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),U0=Xn(D0),F0=[9,13,27,32],Mc=f&&"CompositionEvent"in window,To=null;f&&"documentMode"in document&&(To=document.documentMode);var O0=f&&"TextEvent"in window&&!To,ih=f&&(!Mc||To&&8<To&&11>=To),rh=" ",sh=!1;function oh(n,i){switch(n){case"keyup":return F0.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ah(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Ss=!1;function k0(n,i){switch(n){case"compositionend":return ah(i);case"keypress":return i.which!==32?null:(sh=!0,rh);case"textInput":return n=i.data,n===rh&&sh?null:n;default:return null}}function z0(n,i){if(Ss)return n==="compositionend"||!Mc&&oh(n,i)?(n=Qf(),La=vc=fr=null,Ss=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return ih&&i.locale!=="ko"?null:i.data;default:return null}}var B0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function lh(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!B0[n.type]:i==="textarea"}function ch(n,i,o,c){ye(c),i=za(i,"onChange"),0<i.length&&(o=new _c("onChange","change",null,o,c),n.push({event:o,listeners:i}))}var wo=null,Ao=null;function H0(n){Rh(n,0)}function Ua(n){var i=As(n);if(Ht(i))return n}function V0(n,i){if(n==="change")return i}var uh=!1;if(f){var Tc;if(f){var wc="oninput"in document;if(!wc){var dh=document.createElement("div");dh.setAttribute("oninput","return;"),wc=typeof dh.oninput=="function"}Tc=wc}else Tc=!1;uh=Tc&&(!document.documentMode||9<document.documentMode)}function fh(){wo&&(wo.detachEvent("onpropertychange",hh),Ao=wo=null)}function hh(n){if(n.propertyName==="value"&&Ua(Ao)){var i=[];ch(i,Ao,n,L(n)),mn(H0,i)}}function G0(n,i,o){n==="focusin"?(fh(),wo=i,Ao=o,wo.attachEvent("onpropertychange",hh)):n==="focusout"&&fh()}function W0(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Ua(Ao)}function j0(n,i){if(n==="click")return Ua(i)}function X0(n,i){if(n==="input"||n==="change")return Ua(i)}function Y0(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var di=typeof Object.is=="function"?Object.is:Y0;function Ro(n,i){if(di(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var o=Object.keys(n),c=Object.keys(i);if(o.length!==c.length)return!1;for(c=0;c<o.length;c++){var d=o[c];if(!m.call(i,d)||!di(n[d],i[d]))return!1}return!0}function ph(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function mh(n,i){var o=ph(n);n=0;for(var c;o;){if(o.nodeType===3){if(c=n+o.textContent.length,n<=i&&c>=i)return{node:o,offset:i-n};n=c}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=ph(o)}}function gh(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?gh(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function vh(){for(var n=window,i=B();i instanceof n.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)n=i.contentWindow;else break;i=B(n.document)}return i}function Ac(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function q0(n){var i=vh(),o=n.focusedElem,c=n.selectionRange;if(i!==o&&o&&o.ownerDocument&&gh(o.ownerDocument.documentElement,o)){if(c!==null&&Ac(o)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(n,o.value.length);else if(n=(i=o.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var d=o.textContent.length,p=Math.min(c.start,d);c=c.end===void 0?p:Math.min(c.end,d),!n.extend&&p>c&&(d=c,c=p,p=d),d=mh(o,p);var M=mh(o,c);d&&M&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==M.node||n.focusOffset!==M.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),n.removeAllRanges(),p>c?(n.addRange(i),n.extend(M.node,M.offset)):(i.setEnd(M.node,M.offset),n.addRange(i)))}}for(i=[],n=o;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)n=i[o],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var K0=f&&"documentMode"in document&&11>=document.documentMode,Es=null,Rc=null,Co=null,Cc=!1;function _h(n,i,o){var c=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;Cc||Es==null||Es!==B(c)||(c=Es,"selectionStart"in c&&Ac(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Co&&Ro(Co,c)||(Co=c,c=za(Rc,"onSelect"),0<c.length&&(i=new _c("onSelect","select",null,i,o),n.push({event:i,listeners:c}),i.target=Es)))}function Fa(n,i){var o={};return o[n.toLowerCase()]=i.toLowerCase(),o["Webkit"+n]="webkit"+i,o["Moz"+n]="moz"+i,o}var Ms={animationend:Fa("Animation","AnimationEnd"),animationiteration:Fa("Animation","AnimationIteration"),animationstart:Fa("Animation","AnimationStart"),transitionend:Fa("Transition","TransitionEnd")},bc={},xh={};f&&(xh=document.createElement("div").style,"AnimationEvent"in window||(delete Ms.animationend.animation,delete Ms.animationiteration.animation,delete Ms.animationstart.animation),"TransitionEvent"in window||delete Ms.transitionend.transition);function Oa(n){if(bc[n])return bc[n];if(!Ms[n])return n;var i=Ms[n],o;for(o in i)if(i.hasOwnProperty(o)&&o in xh)return bc[n]=i[o];return n}var yh=Oa("animationend"),Sh=Oa("animationiteration"),Eh=Oa("animationstart"),Mh=Oa("transitionend"),Th=new Map,wh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function hr(n,i){Th.set(n,i),l(i,[n])}for(var Pc=0;Pc<wh.length;Pc++){var Lc=wh[Pc],$0=Lc.toLowerCase(),Z0=Lc[0].toUpperCase()+Lc.slice(1);hr($0,"on"+Z0)}hr(yh,"onAnimationEnd"),hr(Sh,"onAnimationIteration"),hr(Eh,"onAnimationStart"),hr("dblclick","onDoubleClick"),hr("focusin","onFocus"),hr("focusout","onBlur"),hr(Mh,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var bo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Q0=new Set("cancel close invalid load scroll toggle".split(" ").concat(bo));function Ah(n,i,o){var c=n.type||"unknown-event";n.currentTarget=o,Ai(c,i,void 0,n),n.currentTarget=null}function Rh(n,i){i=(i&4)!==0;for(var o=0;o<n.length;o++){var c=n[o],d=c.event;c=c.listeners;e:{var p=void 0;if(i)for(var M=c.length-1;0<=M;M--){var F=c[M],W=F.instance,ae=F.currentTarget;if(F=F.listener,W!==p&&d.isPropagationStopped())break e;Ah(d,F,ae),p=W}else for(M=0;M<c.length;M++){if(F=c[M],W=F.instance,ae=F.currentTarget,F=F.listener,W!==p&&d.isPropagationStopped())break e;Ah(d,F,ae),p=W}}}if(Un)throw n=ei,Un=!1,ei=null,n}function Gt(n,i){var o=i[zc];o===void 0&&(o=i[zc]=new Set);var c=n+"__bubble";o.has(c)||(Ch(i,n,2,!1),o.add(c))}function Nc(n,i,o){var c=0;i&&(c|=4),Ch(o,n,c,i)}var ka="_reactListening"+Math.random().toString(36).slice(2);function Po(n){if(!n[ka]){n[ka]=!0,r.forEach(function(o){o!=="selectionchange"&&(Q0.has(o)||Nc(o,!1,n),Nc(o,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[ka]||(i[ka]=!0,Nc("selectionchange",!1,i))}}function Ch(n,i,o,c){switch(Zf(i)){case 1:var d=f0;break;case 4:d=h0;break;default:d=mc}o=d.bind(null,i,o,n),d=void 0,!wi||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),c?d!==void 0?n.addEventListener(i,o,{capture:!0,passive:d}):n.addEventListener(i,o,!0):d!==void 0?n.addEventListener(i,o,{passive:d}):n.addEventListener(i,o,!1)}function Ic(n,i,o,c,d){var p=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var M=c.tag;if(M===3||M===4){var F=c.stateNode.containerInfo;if(F===d||F.nodeType===8&&F.parentNode===d)break;if(M===4)for(M=c.return;M!==null;){var W=M.tag;if((W===3||W===4)&&(W=M.stateNode.containerInfo,W===d||W.nodeType===8&&W.parentNode===d))return;M=M.return}for(;F!==null;){if(M=Wr(F),M===null)return;if(W=M.tag,W===5||W===6){c=p=M;continue e}F=F.parentNode}}c=c.return}mn(function(){var ae=p,be=L(o),Pe=[];e:{var Ce=Th.get(n);if(Ce!==void 0){var Ke=_c,Je=n;switch(n){case"keypress":if(Na(o)===0)break e;case"keydown":case"keyup":Ke=C0;break;case"focusin":Je="focus",Ke=Sc;break;case"focusout":Je="blur",Ke=Sc;break;case"beforeblur":case"afterblur":Ke=Sc;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ke=eh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ke=g0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ke=L0;break;case yh:case Sh:case Eh:Ke=x0;break;case Mh:Ke=I0;break;case"scroll":Ke=p0;break;case"wheel":Ke=U0;break;case"copy":case"cut":case"paste":Ke=S0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ke=nh}var nt=(i&4)!==0,Jt=!nt&&n==="scroll",te=nt?Ce!==null?Ce+"Capture":null:Ce;nt=[];for(var X=ae,re;X!==null;){re=X;var Oe=re.stateNode;if(re.tag===5&&Oe!==null&&(re=Oe,te!==null&&(Oe=en(X,te),Oe!=null&&nt.push(Lo(X,Oe,re)))),Jt)break;X=X.return}0<nt.length&&(Ce=new Ke(Ce,Je,null,o,be),Pe.push({event:Ce,listeners:nt}))}}if((i&7)===0){e:{if(Ce=n==="mouseover"||n==="pointerover",Ke=n==="mouseout"||n==="pointerout",Ce&&o!==Me&&(Je=o.relatedTarget||o.fromElement)&&(Wr(Je)||Je[Vi]))break e;if((Ke||Ce)&&(Ce=be.window===be?be:(Ce=be.ownerDocument)?Ce.defaultView||Ce.parentWindow:window,Ke?(Je=o.relatedTarget||o.toElement,Ke=ae,Je=Je?Wr(Je):null,Je!==null&&(Jt=Fn(Je),Je!==Jt||Je.tag!==5&&Je.tag!==6)&&(Je=null)):(Ke=null,Je=ae),Ke!==Je)){if(nt=eh,Oe="onMouseLeave",te="onMouseEnter",X="mouse",(n==="pointerout"||n==="pointerover")&&(nt=nh,Oe="onPointerLeave",te="onPointerEnter",X="pointer"),Jt=Ke==null?Ce:As(Ke),re=Je==null?Ce:As(Je),Ce=new nt(Oe,X+"leave",Ke,o,be),Ce.target=Jt,Ce.relatedTarget=re,Oe=null,Wr(be)===ae&&(nt=new nt(te,X+"enter",Je,o,be),nt.target=re,nt.relatedTarget=Jt,Oe=nt),Jt=Oe,Ke&&Je)t:{for(nt=Ke,te=Je,X=0,re=nt;re;re=Ts(re))X++;for(re=0,Oe=te;Oe;Oe=Ts(Oe))re++;for(;0<X-re;)nt=Ts(nt),X--;for(;0<re-X;)te=Ts(te),re--;for(;X--;){if(nt===te||te!==null&&nt===te.alternate)break t;nt=Ts(nt),te=Ts(te)}nt=null}else nt=null;Ke!==null&&bh(Pe,Ce,Ke,nt,!1),Je!==null&&Jt!==null&&bh(Pe,Jt,Je,nt,!0)}}e:{if(Ce=ae?As(ae):window,Ke=Ce.nodeName&&Ce.nodeName.toLowerCase(),Ke==="select"||Ke==="input"&&Ce.type==="file")var it=V0;else if(lh(Ce))if(uh)it=X0;else{it=W0;var at=G0}else(Ke=Ce.nodeName)&&Ke.toLowerCase()==="input"&&(Ce.type==="checkbox"||Ce.type==="radio")&&(it=j0);if(it&&(it=it(n,ae))){ch(Pe,it,o,be);break e}at&&at(n,Ce,ae),n==="focusout"&&(at=Ce._wrapperState)&&at.controlled&&Ce.type==="number"&&ze(Ce,"number",Ce.value)}switch(at=ae?As(ae):window,n){case"focusin":(lh(at)||at.contentEditable==="true")&&(Es=at,Rc=ae,Co=null);break;case"focusout":Co=Rc=Es=null;break;case"mousedown":Cc=!0;break;case"contextmenu":case"mouseup":case"dragend":Cc=!1,_h(Pe,o,be);break;case"selectionchange":if(K0)break;case"keydown":case"keyup":_h(Pe,o,be)}var lt;if(Mc)e:{switch(n){case"compositionstart":var ht="onCompositionStart";break e;case"compositionend":ht="onCompositionEnd";break e;case"compositionupdate":ht="onCompositionUpdate";break e}ht=void 0}else Ss?oh(n,o)&&(ht="onCompositionEnd"):n==="keydown"&&o.keyCode===229&&(ht="onCompositionStart");ht&&(ih&&o.locale!=="ko"&&(Ss||ht!=="onCompositionStart"?ht==="onCompositionEnd"&&Ss&&(lt=Qf()):(fr=be,vc="value"in fr?fr.value:fr.textContent,Ss=!0)),at=za(ae,ht),0<at.length&&(ht=new th(ht,n,null,o,be),Pe.push({event:ht,listeners:at}),lt?ht.data=lt:(lt=ah(o),lt!==null&&(ht.data=lt)))),(lt=O0?k0(n,o):z0(n,o))&&(ae=za(ae,"onBeforeInput"),0<ae.length&&(be=new th("onBeforeInput","beforeinput",null,o,be),Pe.push({event:be,listeners:ae}),be.data=lt))}Rh(Pe,i)})}function Lo(n,i,o){return{instance:n,listener:i,currentTarget:o}}function za(n,i){for(var o=i+"Capture",c=[];n!==null;){var d=n,p=d.stateNode;d.tag===5&&p!==null&&(d=p,p=en(n,o),p!=null&&c.unshift(Lo(n,p,d)),p=en(n,i),p!=null&&c.push(Lo(n,p,d))),n=n.return}return c}function Ts(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function bh(n,i,o,c,d){for(var p=i._reactName,M=[];o!==null&&o!==c;){var F=o,W=F.alternate,ae=F.stateNode;if(W!==null&&W===c)break;F.tag===5&&ae!==null&&(F=ae,d?(W=en(o,p),W!=null&&M.unshift(Lo(o,W,F))):d||(W=en(o,p),W!=null&&M.push(Lo(o,W,F)))),o=o.return}M.length!==0&&n.push({event:i,listeners:M})}var J0=/\r\n?/g,ev=/\u0000|\uFFFD/g;function Ph(n){return(typeof n=="string"?n:""+n).replace(J0,`
`).replace(ev,"")}function Ba(n,i,o){if(i=Ph(i),Ph(n)!==i&&o)throw Error(t(425))}function Ha(){}var Dc=null,Uc=null;function Fc(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Oc=typeof setTimeout=="function"?setTimeout:void 0,tv=typeof clearTimeout=="function"?clearTimeout:void 0,Lh=typeof Promise=="function"?Promise:void 0,nv=typeof queueMicrotask=="function"?queueMicrotask:typeof Lh<"u"?function(n){return Lh.resolve(null).then(n).catch(iv)}:Oc;function iv(n){setTimeout(function(){throw n})}function kc(n,i){var o=i,c=0;do{var d=o.nextSibling;if(n.removeChild(o),d&&d.nodeType===8)if(o=d.data,o==="/$"){if(c===0){n.removeChild(d),So(i);return}c--}else o!=="$"&&o!=="$?"&&o!=="$!"||c++;o=d}while(o);So(i)}function pr(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function Nh(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var o=n.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return n;i--}else o==="/$"&&i++}n=n.previousSibling}return null}var ws=Math.random().toString(36).slice(2),Ri="__reactFiber$"+ws,No="__reactProps$"+ws,Vi="__reactContainer$"+ws,zc="__reactEvents$"+ws,rv="__reactListeners$"+ws,sv="__reactHandles$"+ws;function Wr(n){var i=n[Ri];if(i)return i;for(var o=n.parentNode;o;){if(i=o[Vi]||o[Ri]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(n=Nh(n);n!==null;){if(o=n[Ri])return o;n=Nh(n)}return i}n=o,o=n.parentNode}return null}function Io(n){return n=n[Ri]||n[Vi],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function As(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Va(n){return n[No]||null}var Bc=[],Rs=-1;function mr(n){return{current:n}}function Wt(n){0>Rs||(n.current=Bc[Rs],Bc[Rs]=null,Rs--)}function Vt(n,i){Rs++,Bc[Rs]=n.current,n.current=i}var gr={},Sn=mr(gr),On=mr(!1),jr=gr;function Cs(n,i){var o=n.type.contextTypes;if(!o)return gr;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var d={},p;for(p in o)d[p]=i[p];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=d),d}function kn(n){return n=n.childContextTypes,n!=null}function Ga(){Wt(On),Wt(Sn)}function Ih(n,i,o){if(Sn.current!==gr)throw Error(t(168));Vt(Sn,i),Vt(On,o)}function Dh(n,i,o){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return o;c=c.getChildContext();for(var d in c)if(!(d in i))throw Error(t(108,ge(n)||"Unknown",d));return de({},o,c)}function Wa(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||gr,jr=Sn.current,Vt(Sn,n),Vt(On,On.current),!0}function Uh(n,i,o){var c=n.stateNode;if(!c)throw Error(t(169));o?(n=Dh(n,i,jr),c.__reactInternalMemoizedMergedChildContext=n,Wt(On),Wt(Sn),Vt(Sn,n)):Wt(On),Vt(On,o)}var Gi=null,ja=!1,Hc=!1;function Fh(n){Gi===null?Gi=[n]:Gi.push(n)}function ov(n){ja=!0,Fh(n)}function vr(){if(!Hc&&Gi!==null){Hc=!0;var n=0,i=St;try{var o=Gi;for(St=1;n<o.length;n++){var c=o[n];do c=c(!0);while(c!==null)}Gi=null,ja=!1}catch(d){throw Gi!==null&&(Gi=Gi.slice(n+1)),R(Ge,vr),d}finally{St=i,Hc=!1}}return null}var bs=[],Ps=0,Xa=null,Ya=0,ti=[],ni=0,Xr=null,Wi=1,ji="";function Yr(n,i){bs[Ps++]=Ya,bs[Ps++]=Xa,Xa=n,Ya=i}function Oh(n,i,o){ti[ni++]=Wi,ti[ni++]=ji,ti[ni++]=Xr,Xr=n;var c=Wi;n=ji;var d=32-At(c)-1;c&=~(1<<d),o+=1;var p=32-At(i)+d;if(30<p){var M=d-d%5;p=(c&(1<<M)-1).toString(32),c>>=M,d-=M,Wi=1<<32-At(i)+d|o<<d|c,ji=p+n}else Wi=1<<p|o<<d|c,ji=n}function Vc(n){n.return!==null&&(Yr(n,1),Oh(n,1,0))}function Gc(n){for(;n===Xa;)Xa=bs[--Ps],bs[Ps]=null,Ya=bs[--Ps],bs[Ps]=null;for(;n===Xr;)Xr=ti[--ni],ti[ni]=null,ji=ti[--ni],ti[ni]=null,Wi=ti[--ni],ti[ni]=null}var Yn=null,qn=null,jt=!1,fi=null;function kh(n,i){var o=oi(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=n,i=n.deletions,i===null?(n.deletions=[o],n.flags|=16):i.push(o)}function zh(n,i){switch(n.tag){case 5:var o=n.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,Yn=n,qn=pr(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,Yn=n,qn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=Xr!==null?{id:Wi,overflow:ji}:null,n.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=oi(18,null,null,0),o.stateNode=i,o.return=n,n.child=o,Yn=n,qn=null,!0):!1;default:return!1}}function Wc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function jc(n){if(jt){var i=qn;if(i){var o=i;if(!zh(n,i)){if(Wc(n))throw Error(t(418));i=pr(o.nextSibling);var c=Yn;i&&zh(n,i)?kh(c,o):(n.flags=n.flags&-4097|2,jt=!1,Yn=n)}}else{if(Wc(n))throw Error(t(418));n.flags=n.flags&-4097|2,jt=!1,Yn=n}}}function Bh(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Yn=n}function qa(n){if(n!==Yn)return!1;if(!jt)return Bh(n),jt=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!Fc(n.type,n.memoizedProps)),i&&(i=qn)){if(Wc(n))throw Hh(),Error(t(418));for(;i;)kh(n,i),i=pr(i.nextSibling)}if(Bh(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var o=n.data;if(o==="/$"){if(i===0){qn=pr(n.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}n=n.nextSibling}qn=null}}else qn=Yn?pr(n.stateNode.nextSibling):null;return!0}function Hh(){for(var n=qn;n;)n=pr(n.nextSibling)}function Ls(){qn=Yn=null,jt=!1}function Xc(n){fi===null?fi=[n]:fi.push(n)}var av=C.ReactCurrentBatchConfig;function Do(n,i,o){if(n=o.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(t(309));var c=o.stateNode}if(!c)throw Error(t(147,n));var d=c,p=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===p?i.ref:(i=function(M){var F=d.refs;M===null?delete F[p]:F[p]=M},i._stringRef=p,i)}if(typeof n!="string")throw Error(t(284));if(!o._owner)throw Error(t(290,n))}return n}function Ka(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function Vh(n){var i=n._init;return i(n._payload)}function Gh(n){function i(te,X){if(n){var re=te.deletions;re===null?(te.deletions=[X],te.flags|=16):re.push(X)}}function o(te,X){if(!n)return null;for(;X!==null;)i(te,X),X=X.sibling;return null}function c(te,X){for(te=new Map;X!==null;)X.key!==null?te.set(X.key,X):te.set(X.index,X),X=X.sibling;return te}function d(te,X){return te=wr(te,X),te.index=0,te.sibling=null,te}function p(te,X,re){return te.index=re,n?(re=te.alternate,re!==null?(re=re.index,re<X?(te.flags|=2,X):re):(te.flags|=2,X)):(te.flags|=1048576,X)}function M(te){return n&&te.alternate===null&&(te.flags|=2),te}function F(te,X,re,Oe){return X===null||X.tag!==6?(X=Ou(re,te.mode,Oe),X.return=te,X):(X=d(X,re),X.return=te,X)}function W(te,X,re,Oe){var it=re.type;return it===k?be(te,X,re.props.children,Oe,re.key):X!==null&&(X.elementType===it||typeof it=="object"&&it!==null&&it.$$typeof===pe&&Vh(it)===X.type)?(Oe=d(X,re.props),Oe.ref=Do(te,X,re),Oe.return=te,Oe):(Oe=xl(re.type,re.key,re.props,null,te.mode,Oe),Oe.ref=Do(te,X,re),Oe.return=te,Oe)}function ae(te,X,re,Oe){return X===null||X.tag!==4||X.stateNode.containerInfo!==re.containerInfo||X.stateNode.implementation!==re.implementation?(X=ku(re,te.mode,Oe),X.return=te,X):(X=d(X,re.children||[]),X.return=te,X)}function be(te,X,re,Oe,it){return X===null||X.tag!==7?(X=ts(re,te.mode,Oe,it),X.return=te,X):(X=d(X,re),X.return=te,X)}function Pe(te,X,re){if(typeof X=="string"&&X!==""||typeof X=="number")return X=Ou(""+X,te.mode,re),X.return=te,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case H:return re=xl(X.type,X.key,X.props,null,te.mode,re),re.ref=Do(te,null,X),re.return=te,re;case O:return X=ku(X,te.mode,re),X.return=te,X;case pe:var Oe=X._init;return Pe(te,Oe(X._payload),re)}if(st(X)||_e(X))return X=ts(X,te.mode,re,null),X.return=te,X;Ka(te,X)}return null}function Ce(te,X,re,Oe){var it=X!==null?X.key:null;if(typeof re=="string"&&re!==""||typeof re=="number")return it!==null?null:F(te,X,""+re,Oe);if(typeof re=="object"&&re!==null){switch(re.$$typeof){case H:return re.key===it?W(te,X,re,Oe):null;case O:return re.key===it?ae(te,X,re,Oe):null;case pe:return it=re._init,Ce(te,X,it(re._payload),Oe)}if(st(re)||_e(re))return it!==null?null:be(te,X,re,Oe,null);Ka(te,re)}return null}function Ke(te,X,re,Oe,it){if(typeof Oe=="string"&&Oe!==""||typeof Oe=="number")return te=te.get(re)||null,F(X,te,""+Oe,it);if(typeof Oe=="object"&&Oe!==null){switch(Oe.$$typeof){case H:return te=te.get(Oe.key===null?re:Oe.key)||null,W(X,te,Oe,it);case O:return te=te.get(Oe.key===null?re:Oe.key)||null,ae(X,te,Oe,it);case pe:var at=Oe._init;return Ke(te,X,re,at(Oe._payload),it)}if(st(Oe)||_e(Oe))return te=te.get(re)||null,be(X,te,Oe,it,null);Ka(X,Oe)}return null}function Je(te,X,re,Oe){for(var it=null,at=null,lt=X,ht=X=0,hn=null;lt!==null&&ht<re.length;ht++){lt.index>ht?(hn=lt,lt=null):hn=lt.sibling;var bt=Ce(te,lt,re[ht],Oe);if(bt===null){lt===null&&(lt=hn);break}n&&lt&&bt.alternate===null&&i(te,lt),X=p(bt,X,ht),at===null?it=bt:at.sibling=bt,at=bt,lt=hn}if(ht===re.length)return o(te,lt),jt&&Yr(te,ht),it;if(lt===null){for(;ht<re.length;ht++)lt=Pe(te,re[ht],Oe),lt!==null&&(X=p(lt,X,ht),at===null?it=lt:at.sibling=lt,at=lt);return jt&&Yr(te,ht),it}for(lt=c(te,lt);ht<re.length;ht++)hn=Ke(lt,te,ht,re[ht],Oe),hn!==null&&(n&&hn.alternate!==null&&lt.delete(hn.key===null?ht:hn.key),X=p(hn,X,ht),at===null?it=hn:at.sibling=hn,at=hn);return n&&lt.forEach(function(Ar){return i(te,Ar)}),jt&&Yr(te,ht),it}function nt(te,X,re,Oe){var it=_e(re);if(typeof it!="function")throw Error(t(150));if(re=it.call(re),re==null)throw Error(t(151));for(var at=it=null,lt=X,ht=X=0,hn=null,bt=re.next();lt!==null&&!bt.done;ht++,bt=re.next()){lt.index>ht?(hn=lt,lt=null):hn=lt.sibling;var Ar=Ce(te,lt,bt.value,Oe);if(Ar===null){lt===null&&(lt=hn);break}n&&lt&&Ar.alternate===null&&i(te,lt),X=p(Ar,X,ht),at===null?it=Ar:at.sibling=Ar,at=Ar,lt=hn}if(bt.done)return o(te,lt),jt&&Yr(te,ht),it;if(lt===null){for(;!bt.done;ht++,bt=re.next())bt=Pe(te,bt.value,Oe),bt!==null&&(X=p(bt,X,ht),at===null?it=bt:at.sibling=bt,at=bt);return jt&&Yr(te,ht),it}for(lt=c(te,lt);!bt.done;ht++,bt=re.next())bt=Ke(lt,te,ht,bt.value,Oe),bt!==null&&(n&&bt.alternate!==null&&lt.delete(bt.key===null?ht:bt.key),X=p(bt,X,ht),at===null?it=bt:at.sibling=bt,at=bt);return n&&lt.forEach(function(Bv){return i(te,Bv)}),jt&&Yr(te,ht),it}function Jt(te,X,re,Oe){if(typeof re=="object"&&re!==null&&re.type===k&&re.key===null&&(re=re.props.children),typeof re=="object"&&re!==null){switch(re.$$typeof){case H:e:{for(var it=re.key,at=X;at!==null;){if(at.key===it){if(it=re.type,it===k){if(at.tag===7){o(te,at.sibling),X=d(at,re.props.children),X.return=te,te=X;break e}}else if(at.elementType===it||typeof it=="object"&&it!==null&&it.$$typeof===pe&&Vh(it)===at.type){o(te,at.sibling),X=d(at,re.props),X.ref=Do(te,at,re),X.return=te,te=X;break e}o(te,at);break}else i(te,at);at=at.sibling}re.type===k?(X=ts(re.props.children,te.mode,Oe,re.key),X.return=te,te=X):(Oe=xl(re.type,re.key,re.props,null,te.mode,Oe),Oe.ref=Do(te,X,re),Oe.return=te,te=Oe)}return M(te);case O:e:{for(at=re.key;X!==null;){if(X.key===at)if(X.tag===4&&X.stateNode.containerInfo===re.containerInfo&&X.stateNode.implementation===re.implementation){o(te,X.sibling),X=d(X,re.children||[]),X.return=te,te=X;break e}else{o(te,X);break}else i(te,X);X=X.sibling}X=ku(re,te.mode,Oe),X.return=te,te=X}return M(te);case pe:return at=re._init,Jt(te,X,at(re._payload),Oe)}if(st(re))return Je(te,X,re,Oe);if(_e(re))return nt(te,X,re,Oe);Ka(te,re)}return typeof re=="string"&&re!==""||typeof re=="number"?(re=""+re,X!==null&&X.tag===6?(o(te,X.sibling),X=d(X,re),X.return=te,te=X):(o(te,X),X=Ou(re,te.mode,Oe),X.return=te,te=X),M(te)):o(te,X)}return Jt}var Ns=Gh(!0),Wh=Gh(!1),$a=mr(null),Za=null,Is=null,Yc=null;function qc(){Yc=Is=Za=null}function Kc(n){var i=$a.current;Wt($a),n._currentValue=i}function $c(n,i,o){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===o)break;n=n.return}}function Ds(n,i){Za=n,Yc=Is=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(zn=!0),n.firstContext=null)}function ii(n){var i=n._currentValue;if(Yc!==n)if(n={context:n,memoizedValue:i,next:null},Is===null){if(Za===null)throw Error(t(308));Is=n,Za.dependencies={lanes:0,firstContext:n}}else Is=Is.next=n;return i}var qr=null;function Zc(n){qr===null?qr=[n]:qr.push(n)}function jh(n,i,o,c){var d=i.interleaved;return d===null?(o.next=o,Zc(i)):(o.next=d.next,d.next=o),i.interleaved=o,Xi(n,c)}function Xi(n,i){n.lanes|=i;var o=n.alternate;for(o!==null&&(o.lanes|=i),o=n,n=n.return;n!==null;)n.childLanes|=i,o=n.alternate,o!==null&&(o.childLanes|=i),o=n,n=n.return;return o.tag===3?o.stateNode:null}var _r=!1;function Qc(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Xh(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Yi(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function xr(n,i,o){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(Rt&2)!==0){var d=c.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),c.pending=i,Xi(n,o)}return d=c.interleaved,d===null?(i.next=i,Zc(c)):(i.next=d.next,d.next=i),c.interleaved=i,Xi(n,o)}function Qa(n,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,o|=c,i.lanes=o,Gr(n,o)}}function Yh(n,i){var o=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,o===c)){var d=null,p=null;if(o=o.firstBaseUpdate,o!==null){do{var M={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};p===null?d=p=M:p=p.next=M,o=o.next}while(o!==null);p===null?d=p=i:p=p.next=i}else d=p=i;o={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:p,shared:c.shared,effects:c.effects},n.updateQueue=o;return}n=o.lastBaseUpdate,n===null?o.firstBaseUpdate=i:n.next=i,o.lastBaseUpdate=i}function Ja(n,i,o,c){var d=n.updateQueue;_r=!1;var p=d.firstBaseUpdate,M=d.lastBaseUpdate,F=d.shared.pending;if(F!==null){d.shared.pending=null;var W=F,ae=W.next;W.next=null,M===null?p=ae:M.next=ae,M=W;var be=n.alternate;be!==null&&(be=be.updateQueue,F=be.lastBaseUpdate,F!==M&&(F===null?be.firstBaseUpdate=ae:F.next=ae,be.lastBaseUpdate=W))}if(p!==null){var Pe=d.baseState;M=0,be=ae=W=null,F=p;do{var Ce=F.lane,Ke=F.eventTime;if((c&Ce)===Ce){be!==null&&(be=be.next={eventTime:Ke,lane:0,tag:F.tag,payload:F.payload,callback:F.callback,next:null});e:{var Je=n,nt=F;switch(Ce=i,Ke=o,nt.tag){case 1:if(Je=nt.payload,typeof Je=="function"){Pe=Je.call(Ke,Pe,Ce);break e}Pe=Je;break e;case 3:Je.flags=Je.flags&-65537|128;case 0:if(Je=nt.payload,Ce=typeof Je=="function"?Je.call(Ke,Pe,Ce):Je,Ce==null)break e;Pe=de({},Pe,Ce);break e;case 2:_r=!0}}F.callback!==null&&F.lane!==0&&(n.flags|=64,Ce=d.effects,Ce===null?d.effects=[F]:Ce.push(F))}else Ke={eventTime:Ke,lane:Ce,tag:F.tag,payload:F.payload,callback:F.callback,next:null},be===null?(ae=be=Ke,W=Pe):be=be.next=Ke,M|=Ce;if(F=F.next,F===null){if(F=d.shared.pending,F===null)break;Ce=F,F=Ce.next,Ce.next=null,d.lastBaseUpdate=Ce,d.shared.pending=null}}while(!0);if(be===null&&(W=Pe),d.baseState=W,d.firstBaseUpdate=ae,d.lastBaseUpdate=be,i=d.shared.interleaved,i!==null){d=i;do M|=d.lane,d=d.next;while(d!==i)}else p===null&&(d.shared.lanes=0);Zr|=M,n.lanes=M,n.memoizedState=Pe}}function qh(n,i,o){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],d=c.callback;if(d!==null){if(c.callback=null,c=o,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var Uo={},Ci=mr(Uo),Fo=mr(Uo),Oo=mr(Uo);function Kr(n){if(n===Uo)throw Error(t(174));return n}function Jc(n,i){switch(Vt(Oo,i),Vt(Fo,n),Vt(Ci,Uo),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:Re(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=Re(i,n)}Wt(Ci),Vt(Ci,i)}function Us(){Wt(Ci),Wt(Fo),Wt(Oo)}function Kh(n){Kr(Oo.current);var i=Kr(Ci.current),o=Re(i,n.type);i!==o&&(Vt(Fo,n),Vt(Ci,o))}function eu(n){Fo.current===n&&(Wt(Ci),Wt(Fo))}var Yt=mr(0);function el(n){for(var i=n;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var tu=[];function nu(){for(var n=0;n<tu.length;n++)tu[n]._workInProgressVersionPrimary=null;tu.length=0}var tl=C.ReactCurrentDispatcher,iu=C.ReactCurrentBatchConfig,$r=0,qt=null,sn=null,dn=null,nl=!1,ko=!1,zo=0,lv=0;function En(){throw Error(t(321))}function ru(n,i){if(i===null)return!1;for(var o=0;o<i.length&&o<n.length;o++)if(!di(n[o],i[o]))return!1;return!0}function su(n,i,o,c,d,p){if($r=p,qt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,tl.current=n===null||n.memoizedState===null?fv:hv,n=o(c,d),ko){p=0;do{if(ko=!1,zo=0,25<=p)throw Error(t(301));p+=1,dn=sn=null,i.updateQueue=null,tl.current=pv,n=o(c,d)}while(ko)}if(tl.current=sl,i=sn!==null&&sn.next!==null,$r=0,dn=sn=qt=null,nl=!1,i)throw Error(t(300));return n}function ou(){var n=zo!==0;return zo=0,n}function bi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return dn===null?qt.memoizedState=dn=n:dn=dn.next=n,dn}function ri(){if(sn===null){var n=qt.alternate;n=n!==null?n.memoizedState:null}else n=sn.next;var i=dn===null?qt.memoizedState:dn.next;if(i!==null)dn=i,sn=n;else{if(n===null)throw Error(t(310));sn=n,n={memoizedState:sn.memoizedState,baseState:sn.baseState,baseQueue:sn.baseQueue,queue:sn.queue,next:null},dn===null?qt.memoizedState=dn=n:dn=dn.next=n}return dn}function Bo(n,i){return typeof i=="function"?i(n):i}function au(n){var i=ri(),o=i.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var c=sn,d=c.baseQueue,p=o.pending;if(p!==null){if(d!==null){var M=d.next;d.next=p.next,p.next=M}c.baseQueue=d=p,o.pending=null}if(d!==null){p=d.next,c=c.baseState;var F=M=null,W=null,ae=p;do{var be=ae.lane;if(($r&be)===be)W!==null&&(W=W.next={lane:0,action:ae.action,hasEagerState:ae.hasEagerState,eagerState:ae.eagerState,next:null}),c=ae.hasEagerState?ae.eagerState:n(c,ae.action);else{var Pe={lane:be,action:ae.action,hasEagerState:ae.hasEagerState,eagerState:ae.eagerState,next:null};W===null?(F=W=Pe,M=c):W=W.next=Pe,qt.lanes|=be,Zr|=be}ae=ae.next}while(ae!==null&&ae!==p);W===null?M=c:W.next=F,di(c,i.memoizedState)||(zn=!0),i.memoizedState=c,i.baseState=M,i.baseQueue=W,o.lastRenderedState=c}if(n=o.interleaved,n!==null){d=n;do p=d.lane,qt.lanes|=p,Zr|=p,d=d.next;while(d!==n)}else d===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function lu(n){var i=ri(),o=i.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var c=o.dispatch,d=o.pending,p=i.memoizedState;if(d!==null){o.pending=null;var M=d=d.next;do p=n(p,M.action),M=M.next;while(M!==d);di(p,i.memoizedState)||(zn=!0),i.memoizedState=p,i.baseQueue===null&&(i.baseState=p),o.lastRenderedState=p}return[p,c]}function $h(){}function Zh(n,i){var o=qt,c=ri(),d=i(),p=!di(c.memoizedState,d);if(p&&(c.memoizedState=d,zn=!0),c=c.queue,cu(ep.bind(null,o,c,n),[n]),c.getSnapshot!==i||p||dn!==null&&dn.memoizedState.tag&1){if(o.flags|=2048,Ho(9,Jh.bind(null,o,c,d,i),void 0,null),fn===null)throw Error(t(349));($r&30)!==0||Qh(o,i,d)}return d}function Qh(n,i,o){n.flags|=16384,n={getSnapshot:i,value:o},i=qt.updateQueue,i===null?(i={lastEffect:null,stores:null},qt.updateQueue=i,i.stores=[n]):(o=i.stores,o===null?i.stores=[n]:o.push(n))}function Jh(n,i,o,c){i.value=o,i.getSnapshot=c,tp(i)&&np(n)}function ep(n,i,o){return o(function(){tp(i)&&np(n)})}function tp(n){var i=n.getSnapshot;n=n.value;try{var o=i();return!di(n,o)}catch{return!0}}function np(n){var i=Xi(n,1);i!==null&&gi(i,n,1,-1)}function ip(n){var i=bi();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Bo,lastRenderedState:n},i.queue=n,n=n.dispatch=dv.bind(null,qt,n),[i.memoizedState,n]}function Ho(n,i,o,c){return n={tag:n,create:i,destroy:o,deps:c,next:null},i=qt.updateQueue,i===null?(i={lastEffect:null,stores:null},qt.updateQueue=i,i.lastEffect=n.next=n):(o=i.lastEffect,o===null?i.lastEffect=n.next=n:(c=o.next,o.next=n,n.next=c,i.lastEffect=n)),n}function rp(){return ri().memoizedState}function il(n,i,o,c){var d=bi();qt.flags|=n,d.memoizedState=Ho(1|i,o,void 0,c===void 0?null:c)}function rl(n,i,o,c){var d=ri();c=c===void 0?null:c;var p=void 0;if(sn!==null){var M=sn.memoizedState;if(p=M.destroy,c!==null&&ru(c,M.deps)){d.memoizedState=Ho(i,o,p,c);return}}qt.flags|=n,d.memoizedState=Ho(1|i,o,p,c)}function sp(n,i){return il(8390656,8,n,i)}function cu(n,i){return rl(2048,8,n,i)}function op(n,i){return rl(4,2,n,i)}function ap(n,i){return rl(4,4,n,i)}function lp(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function cp(n,i,o){return o=o!=null?o.concat([n]):null,rl(4,4,lp.bind(null,i,n),o)}function uu(){}function up(n,i){var o=ri();i=i===void 0?null:i;var c=o.memoizedState;return c!==null&&i!==null&&ru(i,c[1])?c[0]:(o.memoizedState=[n,i],n)}function dp(n,i){var o=ri();i=i===void 0?null:i;var c=o.memoizedState;return c!==null&&i!==null&&ru(i,c[1])?c[0]:(n=n(),o.memoizedState=[n,i],n)}function fp(n,i,o){return($r&21)===0?(n.baseState&&(n.baseState=!1,zn=!0),n.memoizedState=o):(di(o,i)||(o=bn(),qt.lanes|=o,Zr|=o,n.baseState=!0),i)}function cv(n,i){var o=St;St=o!==0&&4>o?o:4,n(!0);var c=iu.transition;iu.transition={};try{n(!1),i()}finally{St=o,iu.transition=c}}function hp(){return ri().memoizedState}function uv(n,i,o){var c=Mr(n);if(o={lane:c,action:o,hasEagerState:!1,eagerState:null,next:null},pp(n))mp(i,o);else if(o=jh(n,i,o,c),o!==null){var d=Ln();gi(o,n,c,d),gp(o,i,c)}}function dv(n,i,o){var c=Mr(n),d={lane:c,action:o,hasEagerState:!1,eagerState:null,next:null};if(pp(n))mp(i,d);else{var p=n.alternate;if(n.lanes===0&&(p===null||p.lanes===0)&&(p=i.lastRenderedReducer,p!==null))try{var M=i.lastRenderedState,F=p(M,o);if(d.hasEagerState=!0,d.eagerState=F,di(F,M)){var W=i.interleaved;W===null?(d.next=d,Zc(i)):(d.next=W.next,W.next=d),i.interleaved=d;return}}catch{}finally{}o=jh(n,i,d,c),o!==null&&(d=Ln(),gi(o,n,c,d),gp(o,i,c))}}function pp(n){var i=n.alternate;return n===qt||i!==null&&i===qt}function mp(n,i){ko=nl=!0;var o=n.pending;o===null?i.next=i:(i.next=o.next,o.next=i),n.pending=i}function gp(n,i,o){if((o&4194240)!==0){var c=i.lanes;c&=n.pendingLanes,o|=c,i.lanes=o,Gr(n,o)}}var sl={readContext:ii,useCallback:En,useContext:En,useEffect:En,useImperativeHandle:En,useInsertionEffect:En,useLayoutEffect:En,useMemo:En,useReducer:En,useRef:En,useState:En,useDebugValue:En,useDeferredValue:En,useTransition:En,useMutableSource:En,useSyncExternalStore:En,useId:En,unstable_isNewReconciler:!1},fv={readContext:ii,useCallback:function(n,i){return bi().memoizedState=[n,i===void 0?null:i],n},useContext:ii,useEffect:sp,useImperativeHandle:function(n,i,o){return o=o!=null?o.concat([n]):null,il(4194308,4,lp.bind(null,i,n),o)},useLayoutEffect:function(n,i){return il(4194308,4,n,i)},useInsertionEffect:function(n,i){return il(4,2,n,i)},useMemo:function(n,i){var o=bi();return i=i===void 0?null:i,n=n(),o.memoizedState=[n,i],n},useReducer:function(n,i,o){var c=bi();return i=o!==void 0?o(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=uv.bind(null,qt,n),[c.memoizedState,n]},useRef:function(n){var i=bi();return n={current:n},i.memoizedState=n},useState:ip,useDebugValue:uu,useDeferredValue:function(n){return bi().memoizedState=n},useTransition:function(){var n=ip(!1),i=n[0];return n=cv.bind(null,n[1]),bi().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,o){var c=qt,d=bi();if(jt){if(o===void 0)throw Error(t(407));o=o()}else{if(o=i(),fn===null)throw Error(t(349));($r&30)!==0||Qh(c,i,o)}d.memoizedState=o;var p={value:o,getSnapshot:i};return d.queue=p,sp(ep.bind(null,c,p,n),[n]),c.flags|=2048,Ho(9,Jh.bind(null,c,p,o,i),void 0,null),o},useId:function(){var n=bi(),i=fn.identifierPrefix;if(jt){var o=ji,c=Wi;o=(c&~(1<<32-At(c)-1)).toString(32)+o,i=":"+i+"R"+o,o=zo++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=lv++,i=":"+i+"r"+o.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},hv={readContext:ii,useCallback:up,useContext:ii,useEffect:cu,useImperativeHandle:cp,useInsertionEffect:op,useLayoutEffect:ap,useMemo:dp,useReducer:au,useRef:rp,useState:function(){return au(Bo)},useDebugValue:uu,useDeferredValue:function(n){var i=ri();return fp(i,sn.memoizedState,n)},useTransition:function(){var n=au(Bo)[0],i=ri().memoizedState;return[n,i]},useMutableSource:$h,useSyncExternalStore:Zh,useId:hp,unstable_isNewReconciler:!1},pv={readContext:ii,useCallback:up,useContext:ii,useEffect:cu,useImperativeHandle:cp,useInsertionEffect:op,useLayoutEffect:ap,useMemo:dp,useReducer:lu,useRef:rp,useState:function(){return lu(Bo)},useDebugValue:uu,useDeferredValue:function(n){var i=ri();return sn===null?i.memoizedState=n:fp(i,sn.memoizedState,n)},useTransition:function(){var n=lu(Bo)[0],i=ri().memoizedState;return[n,i]},useMutableSource:$h,useSyncExternalStore:Zh,useId:hp,unstable_isNewReconciler:!1};function hi(n,i){if(n&&n.defaultProps){i=de({},i),n=n.defaultProps;for(var o in n)i[o]===void 0&&(i[o]=n[o]);return i}return i}function du(n,i,o,c){i=n.memoizedState,o=o(c,i),o=o==null?i:de({},i,o),n.memoizedState=o,n.lanes===0&&(n.updateQueue.baseState=o)}var ol={isMounted:function(n){return(n=n._reactInternals)?Fn(n)===n:!1},enqueueSetState:function(n,i,o){n=n._reactInternals;var c=Ln(),d=Mr(n),p=Yi(c,d);p.payload=i,o!=null&&(p.callback=o),i=xr(n,p,d),i!==null&&(gi(i,n,d,c),Qa(i,n,d))},enqueueReplaceState:function(n,i,o){n=n._reactInternals;var c=Ln(),d=Mr(n),p=Yi(c,d);p.tag=1,p.payload=i,o!=null&&(p.callback=o),i=xr(n,p,d),i!==null&&(gi(i,n,d,c),Qa(i,n,d))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var o=Ln(),c=Mr(n),d=Yi(o,c);d.tag=2,i!=null&&(d.callback=i),i=xr(n,d,c),i!==null&&(gi(i,n,c,o),Qa(i,n,c))}};function vp(n,i,o,c,d,p,M){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,p,M):i.prototype&&i.prototype.isPureReactComponent?!Ro(o,c)||!Ro(d,p):!0}function _p(n,i,o){var c=!1,d=gr,p=i.contextType;return typeof p=="object"&&p!==null?p=ii(p):(d=kn(i)?jr:Sn.current,c=i.contextTypes,p=(c=c!=null)?Cs(n,d):gr),i=new i(o,p),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=ol,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=p),i}function xp(n,i,o,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,c),i.state!==n&&ol.enqueueReplaceState(i,i.state,null)}function fu(n,i,o,c){var d=n.stateNode;d.props=o,d.state=n.memoizedState,d.refs={},Qc(n);var p=i.contextType;typeof p=="object"&&p!==null?d.context=ii(p):(p=kn(i)?jr:Sn.current,d.context=Cs(n,p)),d.state=n.memoizedState,p=i.getDerivedStateFromProps,typeof p=="function"&&(du(n,i,p,o),d.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&ol.enqueueReplaceState(d,d.state,null),Ja(n,o,d,c),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function Fs(n,i){try{var o="",c=i;do o+=Xe(c),c=c.return;while(c);var d=o}catch(p){d=`
Error generating stack: `+p.message+`
`+p.stack}return{value:n,source:i,stack:d,digest:null}}function hu(n,i,o){return{value:n,source:null,stack:o??null,digest:i??null}}function pu(n,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var mv=typeof WeakMap=="function"?WeakMap:Map;function yp(n,i,o){o=Yi(-1,o),o.tag=3,o.payload={element:null};var c=i.value;return o.callback=function(){hl||(hl=!0,bu=c),pu(n,i)},o}function Sp(n,i,o){o=Yi(-1,o),o.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var d=i.value;o.payload=function(){return c(d)},o.callback=function(){pu(n,i)}}var p=n.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(o.callback=function(){pu(n,i),typeof c!="function"&&(Sr===null?Sr=new Set([this]):Sr.add(this));var M=i.stack;this.componentDidCatch(i.value,{componentStack:M!==null?M:""})}),o}function Ep(n,i,o){var c=n.pingCache;if(c===null){c=n.pingCache=new mv;var d=new Set;c.set(i,d)}else d=c.get(i),d===void 0&&(d=new Set,c.set(i,d));d.has(o)||(d.add(o),n=bv.bind(null,n,i,o),i.then(n,n))}function Mp(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function Tp(n,i,o,c,d){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=Yi(-1,1),i.tag=2,xr(o,i,1))),o.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var gv=C.ReactCurrentOwner,zn=!1;function Pn(n,i,o,c){i.child=n===null?Wh(i,null,o,c):Ns(i,n.child,o,c)}function wp(n,i,o,c,d){o=o.render;var p=i.ref;return Ds(i,d),c=su(n,i,o,c,p,d),o=ou(),n!==null&&!zn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,qi(n,i,d)):(jt&&o&&Vc(i),i.flags|=1,Pn(n,i,c,d),i.child)}function Ap(n,i,o,c,d){if(n===null){var p=o.type;return typeof p=="function"&&!Fu(p)&&p.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=p,Rp(n,i,p,c,d)):(n=xl(o.type,null,c,i,i.mode,d),n.ref=i.ref,n.return=i,i.child=n)}if(p=n.child,(n.lanes&d)===0){var M=p.memoizedProps;if(o=o.compare,o=o!==null?o:Ro,o(M,c)&&n.ref===i.ref)return qi(n,i,d)}return i.flags|=1,n=wr(p,c),n.ref=i.ref,n.return=i,i.child=n}function Rp(n,i,o,c,d){if(n!==null){var p=n.memoizedProps;if(Ro(p,c)&&n.ref===i.ref)if(zn=!1,i.pendingProps=c=p,(n.lanes&d)!==0)(n.flags&131072)!==0&&(zn=!0);else return i.lanes=n.lanes,qi(n,i,d)}return mu(n,i,o,c,d)}function Cp(n,i,o){var c=i.pendingProps,d=c.children,p=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Vt(ks,Kn),Kn|=o;else{if((o&1073741824)===0)return n=p!==null?p.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,Vt(ks,Kn),Kn|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=p!==null?p.baseLanes:o,Vt(ks,Kn),Kn|=c}else p!==null?(c=p.baseLanes|o,i.memoizedState=null):c=o,Vt(ks,Kn),Kn|=c;return Pn(n,i,d,o),i.child}function bp(n,i){var o=i.ref;(n===null&&o!==null||n!==null&&n.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function mu(n,i,o,c,d){var p=kn(o)?jr:Sn.current;return p=Cs(i,p),Ds(i,d),o=su(n,i,o,c,p,d),c=ou(),n!==null&&!zn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,qi(n,i,d)):(jt&&c&&Vc(i),i.flags|=1,Pn(n,i,o,d),i.child)}function Pp(n,i,o,c,d){if(kn(o)){var p=!0;Wa(i)}else p=!1;if(Ds(i,d),i.stateNode===null)ll(n,i),_p(i,o,c),fu(i,o,c,d),c=!0;else if(n===null){var M=i.stateNode,F=i.memoizedProps;M.props=F;var W=M.context,ae=o.contextType;typeof ae=="object"&&ae!==null?ae=ii(ae):(ae=kn(o)?jr:Sn.current,ae=Cs(i,ae));var be=o.getDerivedStateFromProps,Pe=typeof be=="function"||typeof M.getSnapshotBeforeUpdate=="function";Pe||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(F!==c||W!==ae)&&xp(i,M,c,ae),_r=!1;var Ce=i.memoizedState;M.state=Ce,Ja(i,c,M,d),W=i.memoizedState,F!==c||Ce!==W||On.current||_r?(typeof be=="function"&&(du(i,o,be,c),W=i.memoizedState),(F=_r||vp(i,o,F,c,Ce,W,ae))?(Pe||typeof M.UNSAFE_componentWillMount!="function"&&typeof M.componentWillMount!="function"||(typeof M.componentWillMount=="function"&&M.componentWillMount(),typeof M.UNSAFE_componentWillMount=="function"&&M.UNSAFE_componentWillMount()),typeof M.componentDidMount=="function"&&(i.flags|=4194308)):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=W),M.props=c,M.state=W,M.context=ae,c=F):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{M=i.stateNode,Xh(n,i),F=i.memoizedProps,ae=i.type===i.elementType?F:hi(i.type,F),M.props=ae,Pe=i.pendingProps,Ce=M.context,W=o.contextType,typeof W=="object"&&W!==null?W=ii(W):(W=kn(o)?jr:Sn.current,W=Cs(i,W));var Ke=o.getDerivedStateFromProps;(be=typeof Ke=="function"||typeof M.getSnapshotBeforeUpdate=="function")||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(F!==Pe||Ce!==W)&&xp(i,M,c,W),_r=!1,Ce=i.memoizedState,M.state=Ce,Ja(i,c,M,d);var Je=i.memoizedState;F!==Pe||Ce!==Je||On.current||_r?(typeof Ke=="function"&&(du(i,o,Ke,c),Je=i.memoizedState),(ae=_r||vp(i,o,ae,c,Ce,Je,W)||!1)?(be||typeof M.UNSAFE_componentWillUpdate!="function"&&typeof M.componentWillUpdate!="function"||(typeof M.componentWillUpdate=="function"&&M.componentWillUpdate(c,Je,W),typeof M.UNSAFE_componentWillUpdate=="function"&&M.UNSAFE_componentWillUpdate(c,Je,W)),typeof M.componentDidUpdate=="function"&&(i.flags|=4),typeof M.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof M.componentDidUpdate!="function"||F===n.memoizedProps&&Ce===n.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||F===n.memoizedProps&&Ce===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=Je),M.props=c,M.state=Je,M.context=W,c=ae):(typeof M.componentDidUpdate!="function"||F===n.memoizedProps&&Ce===n.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||F===n.memoizedProps&&Ce===n.memoizedState||(i.flags|=1024),c=!1)}return gu(n,i,o,c,p,d)}function gu(n,i,o,c,d,p){bp(n,i);var M=(i.flags&128)!==0;if(!c&&!M)return d&&Uh(i,o,!1),qi(n,i,p);c=i.stateNode,gv.current=i;var F=M&&typeof o.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&M?(i.child=Ns(i,n.child,null,p),i.child=Ns(i,null,F,p)):Pn(n,i,F,p),i.memoizedState=c.state,d&&Uh(i,o,!0),i.child}function Lp(n){var i=n.stateNode;i.pendingContext?Ih(n,i.pendingContext,i.pendingContext!==i.context):i.context&&Ih(n,i.context,!1),Jc(n,i.containerInfo)}function Np(n,i,o,c,d){return Ls(),Xc(d),i.flags|=256,Pn(n,i,o,c),i.child}var vu={dehydrated:null,treeContext:null,retryLane:0};function _u(n){return{baseLanes:n,cachePool:null,transitions:null}}function Ip(n,i,o){var c=i.pendingProps,d=Yt.current,p=!1,M=(i.flags&128)!==0,F;if((F=M)||(F=n!==null&&n.memoizedState===null?!1:(d&2)!==0),F?(p=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),Vt(Yt,d&1),n===null)return jc(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(M=c.children,n=c.fallback,p?(c=i.mode,p=i.child,M={mode:"hidden",children:M},(c&1)===0&&p!==null?(p.childLanes=0,p.pendingProps=M):p=yl(M,c,0,null),n=ts(n,c,o,null),p.return=i,n.return=i,p.sibling=n,i.child=p,i.child.memoizedState=_u(o),i.memoizedState=vu,n):xu(i,M));if(d=n.memoizedState,d!==null&&(F=d.dehydrated,F!==null))return vv(n,i,M,c,F,d,o);if(p){p=c.fallback,M=i.mode,d=n.child,F=d.sibling;var W={mode:"hidden",children:c.children};return(M&1)===0&&i.child!==d?(c=i.child,c.childLanes=0,c.pendingProps=W,i.deletions=null):(c=wr(d,W),c.subtreeFlags=d.subtreeFlags&14680064),F!==null?p=wr(F,p):(p=ts(p,M,o,null),p.flags|=2),p.return=i,c.return=i,c.sibling=p,i.child=c,c=p,p=i.child,M=n.child.memoizedState,M=M===null?_u(o):{baseLanes:M.baseLanes|o,cachePool:null,transitions:M.transitions},p.memoizedState=M,p.childLanes=n.childLanes&~o,i.memoizedState=vu,c}return p=n.child,n=p.sibling,c=wr(p,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=o),c.return=i,c.sibling=null,n!==null&&(o=i.deletions,o===null?(i.deletions=[n],i.flags|=16):o.push(n)),i.child=c,i.memoizedState=null,c}function xu(n,i){return i=yl({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function al(n,i,o,c){return c!==null&&Xc(c),Ns(i,n.child,null,o),n=xu(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function vv(n,i,o,c,d,p,M){if(o)return i.flags&256?(i.flags&=-257,c=hu(Error(t(422))),al(n,i,M,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(p=c.fallback,d=i.mode,c=yl({mode:"visible",children:c.children},d,0,null),p=ts(p,d,M,null),p.flags|=2,c.return=i,p.return=i,c.sibling=p,i.child=c,(i.mode&1)!==0&&Ns(i,n.child,null,M),i.child.memoizedState=_u(M),i.memoizedState=vu,p);if((i.mode&1)===0)return al(n,i,M,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var F=c.dgst;return c=F,p=Error(t(419)),c=hu(p,c,void 0),al(n,i,M,c)}if(F=(M&n.childLanes)!==0,zn||F){if(c=fn,c!==null){switch(M&-M){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(c.suspendedLanes|M))!==0?0:d,d!==0&&d!==p.retryLane&&(p.retryLane=d,Xi(n,d),gi(c,n,d,-1))}return Uu(),c=hu(Error(t(421))),al(n,i,M,c)}return d.data==="$?"?(i.flags|=128,i.child=n.child,i=Pv.bind(null,n),d._reactRetry=i,null):(n=p.treeContext,qn=pr(d.nextSibling),Yn=i,jt=!0,fi=null,n!==null&&(ti[ni++]=Wi,ti[ni++]=ji,ti[ni++]=Xr,Wi=n.id,ji=n.overflow,Xr=i),i=xu(i,c.children),i.flags|=4096,i)}function Dp(n,i,o){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),$c(n.return,i,o)}function yu(n,i,o,c,d){var p=n.memoizedState;p===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:o,tailMode:d}:(p.isBackwards=i,p.rendering=null,p.renderingStartTime=0,p.last=c,p.tail=o,p.tailMode=d)}function Up(n,i,o){var c=i.pendingProps,d=c.revealOrder,p=c.tail;if(Pn(n,i,c.children,o),c=Yt.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Dp(n,o,i);else if(n.tag===19)Dp(n,o,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(Vt(Yt,c),(i.mode&1)===0)i.memoizedState=null;else switch(d){case"forwards":for(o=i.child,d=null;o!==null;)n=o.alternate,n!==null&&el(n)===null&&(d=o),o=o.sibling;o=d,o===null?(d=i.child,i.child=null):(d=o.sibling,o.sibling=null),yu(i,!1,d,o,p);break;case"backwards":for(o=null,d=i.child,i.child=null;d!==null;){if(n=d.alternate,n!==null&&el(n)===null){i.child=d;break}n=d.sibling,d.sibling=o,o=d,d=n}yu(i,!0,o,null,p);break;case"together":yu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function ll(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function qi(n,i,o){if(n!==null&&(i.dependencies=n.dependencies),Zr|=i.lanes,(o&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,o=wr(n,n.pendingProps),i.child=o,o.return=i;n.sibling!==null;)n=n.sibling,o=o.sibling=wr(n,n.pendingProps),o.return=i;o.sibling=null}return i.child}function _v(n,i,o){switch(i.tag){case 3:Lp(i),Ls();break;case 5:Kh(i);break;case 1:kn(i.type)&&Wa(i);break;case 4:Jc(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,d=i.memoizedProps.value;Vt($a,c._currentValue),c._currentValue=d;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(Vt(Yt,Yt.current&1),i.flags|=128,null):(o&i.child.childLanes)!==0?Ip(n,i,o):(Vt(Yt,Yt.current&1),n=qi(n,i,o),n!==null?n.sibling:null);Vt(Yt,Yt.current&1);break;case 19:if(c=(o&i.childLanes)!==0,(n.flags&128)!==0){if(c)return Up(n,i,o);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),Vt(Yt,Yt.current),c)break;return null;case 22:case 23:return i.lanes=0,Cp(n,i,o)}return qi(n,i,o)}var Fp,Su,Op,kp;Fp=function(n,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)n.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},Su=function(){},Op=function(n,i,o,c){var d=n.memoizedProps;if(d!==c){n=i.stateNode,Kr(Ci.current);var p=null;switch(o){case"input":d=Ae(n,d),c=Ae(n,c),p=[];break;case"select":d=de({},d,{value:void 0}),c=de({},c,{value:void 0}),p=[];break;case"textarea":d=Dt(n,d),c=Dt(n,c),p=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=Ha)}ie(o,c);var M;o=null;for(ae in d)if(!c.hasOwnProperty(ae)&&d.hasOwnProperty(ae)&&d[ae]!=null)if(ae==="style"){var F=d[ae];for(M in F)F.hasOwnProperty(M)&&(o||(o={}),o[M]="")}else ae!=="dangerouslySetInnerHTML"&&ae!=="children"&&ae!=="suppressContentEditableWarning"&&ae!=="suppressHydrationWarning"&&ae!=="autoFocus"&&(a.hasOwnProperty(ae)?p||(p=[]):(p=p||[]).push(ae,null));for(ae in c){var W=c[ae];if(F=d!=null?d[ae]:void 0,c.hasOwnProperty(ae)&&W!==F&&(W!=null||F!=null))if(ae==="style")if(F){for(M in F)!F.hasOwnProperty(M)||W&&W.hasOwnProperty(M)||(o||(o={}),o[M]="");for(M in W)W.hasOwnProperty(M)&&F[M]!==W[M]&&(o||(o={}),o[M]=W[M])}else o||(p||(p=[]),p.push(ae,o)),o=W;else ae==="dangerouslySetInnerHTML"?(W=W?W.__html:void 0,F=F?F.__html:void 0,W!=null&&F!==W&&(p=p||[]).push(ae,W)):ae==="children"?typeof W!="string"&&typeof W!="number"||(p=p||[]).push(ae,""+W):ae!=="suppressContentEditableWarning"&&ae!=="suppressHydrationWarning"&&(a.hasOwnProperty(ae)?(W!=null&&ae==="onScroll"&&Gt("scroll",n),p||F===W||(p=[])):(p=p||[]).push(ae,W))}o&&(p=p||[]).push("style",o);var ae=p;(i.updateQueue=ae)&&(i.flags|=4)}},kp=function(n,i,o,c){o!==c&&(i.flags|=4)};function Vo(n,i){if(!jt)switch(n.tailMode){case"hidden":i=n.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?n.tail=null:o.sibling=null;break;case"collapsed":o=n.tail;for(var c=null;o!==null;)o.alternate!==null&&(c=o),o=o.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function Mn(n){var i=n.alternate!==null&&n.alternate.child===n.child,o=0,c=0;if(i)for(var d=n.child;d!==null;)o|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)o|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=c,n.childLanes=o,i}function xv(n,i,o){var c=i.pendingProps;switch(Gc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Mn(i),null;case 1:return kn(i.type)&&Ga(),Mn(i),null;case 3:return c=i.stateNode,Us(),Wt(On),Wt(Sn),nu(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(qa(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,fi!==null&&(Nu(fi),fi=null))),Su(n,i),Mn(i),null;case 5:eu(i);var d=Kr(Oo.current);if(o=i.type,n!==null&&i.stateNode!=null)Op(n,i,o,c,d),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return Mn(i),null}if(n=Kr(Ci.current),qa(i)){c=i.stateNode,o=i.type;var p=i.memoizedProps;switch(c[Ri]=i,c[No]=p,n=(i.mode&1)!==0,o){case"dialog":Gt("cancel",c),Gt("close",c);break;case"iframe":case"object":case"embed":Gt("load",c);break;case"video":case"audio":for(d=0;d<bo.length;d++)Gt(bo[d],c);break;case"source":Gt("error",c);break;case"img":case"image":case"link":Gt("error",c),Gt("load",c);break;case"details":Gt("toggle",c);break;case"input":Fe(c,p),Gt("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!p.multiple},Gt("invalid",c);break;case"textarea":D(c,p),Gt("invalid",c)}ie(o,p),d=null;for(var M in p)if(p.hasOwnProperty(M)){var F=p[M];M==="children"?typeof F=="string"?c.textContent!==F&&(p.suppressHydrationWarning!==!0&&Ba(c.textContent,F,n),d=["children",F]):typeof F=="number"&&c.textContent!==""+F&&(p.suppressHydrationWarning!==!0&&Ba(c.textContent,F,n),d=["children",""+F]):a.hasOwnProperty(M)&&F!=null&&M==="onScroll"&&Gt("scroll",c)}switch(o){case"input":pt(c),ut(c,p,!0);break;case"textarea":pt(c),ne(c);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(c.onclick=Ha)}c=d,i.updateQueue=c,c!==null&&(i.flags|=4)}else{M=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=Ee(o)),n==="http://www.w3.org/1999/xhtml"?o==="script"?(n=M.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=M.createElement(o,{is:c.is}):(n=M.createElement(o),o==="select"&&(M=n,c.multiple?M.multiple=!0:c.size&&(M.size=c.size))):n=M.createElementNS(n,o),n[Ri]=i,n[No]=c,Fp(n,i,!1,!1),i.stateNode=n;e:{switch(M=J(o,c),o){case"dialog":Gt("cancel",n),Gt("close",n),d=c;break;case"iframe":case"object":case"embed":Gt("load",n),d=c;break;case"video":case"audio":for(d=0;d<bo.length;d++)Gt(bo[d],n);d=c;break;case"source":Gt("error",n),d=c;break;case"img":case"image":case"link":Gt("error",n),Gt("load",n),d=c;break;case"details":Gt("toggle",n),d=c;break;case"input":Fe(n,c),d=Ae(n,c),Gt("invalid",n);break;case"option":d=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},d=de({},c,{value:void 0}),Gt("invalid",n);break;case"textarea":D(n,c),d=Dt(n,c),Gt("invalid",n);break;default:d=c}ie(o,d),F=d;for(p in F)if(F.hasOwnProperty(p)){var W=F[p];p==="style"?U(n,W):p==="dangerouslySetInnerHTML"?(W=W?W.__html:void 0,W!=null&&et(n,W)):p==="children"?typeof W=="string"?(o!=="textarea"||W!=="")&&De(n,W):typeof W=="number"&&De(n,""+W):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(a.hasOwnProperty(p)?W!=null&&p==="onScroll"&&Gt("scroll",n):W!=null&&I(n,p,W,M))}switch(o){case"input":pt(n),ut(n,c,!1);break;case"textarea":pt(n),ne(n);break;case"option":c.value!=null&&n.setAttribute("value",""+we(c.value));break;case"select":n.multiple=!!c.multiple,p=c.value,p!=null?Ct(n,!!c.multiple,p,!1):c.defaultValue!=null&&Ct(n,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=Ha)}switch(o){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return Mn(i),null;case 6:if(n&&i.stateNode!=null)kp(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(o=Kr(Oo.current),Kr(Ci.current),qa(i)){if(c=i.stateNode,o=i.memoizedProps,c[Ri]=i,(p=c.nodeValue!==o)&&(n=Yn,n!==null))switch(n.tag){case 3:Ba(c.nodeValue,o,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Ba(c.nodeValue,o,(n.mode&1)!==0)}p&&(i.flags|=4)}else c=(o.nodeType===9?o:o.ownerDocument).createTextNode(c),c[Ri]=i,i.stateNode=c}return Mn(i),null;case 13:if(Wt(Yt),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(jt&&qn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Hh(),Ls(),i.flags|=98560,p=!1;else if(p=qa(i),c!==null&&c.dehydrated!==null){if(n===null){if(!p)throw Error(t(318));if(p=i.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(t(317));p[Ri]=i}else Ls(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Mn(i),p=!1}else fi!==null&&(Nu(fi),fi=null),p=!0;if(!p)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=o,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(Yt.current&1)!==0?on===0&&(on=3):Uu())),i.updateQueue!==null&&(i.flags|=4),Mn(i),null);case 4:return Us(),Su(n,i),n===null&&Po(i.stateNode.containerInfo),Mn(i),null;case 10:return Kc(i.type._context),Mn(i),null;case 17:return kn(i.type)&&Ga(),Mn(i),null;case 19:if(Wt(Yt),p=i.memoizedState,p===null)return Mn(i),null;if(c=(i.flags&128)!==0,M=p.rendering,M===null)if(c)Vo(p,!1);else{if(on!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(M=el(n),M!==null){for(i.flags|=128,Vo(p,!1),c=M.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=o,o=i.child;o!==null;)p=o,n=c,p.flags&=14680066,M=p.alternate,M===null?(p.childLanes=0,p.lanes=n,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=M.childLanes,p.lanes=M.lanes,p.child=M.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=M.memoizedProps,p.memoizedState=M.memoizedState,p.updateQueue=M.updateQueue,p.type=M.type,n=M.dependencies,p.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),o=o.sibling;return Vt(Yt,Yt.current&1|2),i.child}n=n.sibling}p.tail!==null&&Y()>zs&&(i.flags|=128,c=!0,Vo(p,!1),i.lanes=4194304)}else{if(!c)if(n=el(M),n!==null){if(i.flags|=128,c=!0,o=n.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),Vo(p,!0),p.tail===null&&p.tailMode==="hidden"&&!M.alternate&&!jt)return Mn(i),null}else 2*Y()-p.renderingStartTime>zs&&o!==1073741824&&(i.flags|=128,c=!0,Vo(p,!1),i.lanes=4194304);p.isBackwards?(M.sibling=i.child,i.child=M):(o=p.last,o!==null?o.sibling=M:i.child=M,p.last=M)}return p.tail!==null?(i=p.tail,p.rendering=i,p.tail=i.sibling,p.renderingStartTime=Y(),i.sibling=null,o=Yt.current,Vt(Yt,c?o&1|2:o&1),i):(Mn(i),null);case 22:case 23:return Du(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(Kn&1073741824)!==0&&(Mn(i),i.subtreeFlags&6&&(i.flags|=8192)):Mn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function yv(n,i){switch(Gc(i),i.tag){case 1:return kn(i.type)&&Ga(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return Us(),Wt(On),Wt(Sn),nu(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return eu(i),null;case 13:if(Wt(Yt),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));Ls()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Wt(Yt),null;case 4:return Us(),null;case 10:return Kc(i.type._context),null;case 22:case 23:return Du(),null;case 24:return null;default:return null}}var cl=!1,Tn=!1,Sv=typeof WeakSet=="function"?WeakSet:Set,$e=null;function Os(n,i){var o=n.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(c){Kt(n,i,c)}else o.current=null}function Eu(n,i,o){try{o()}catch(c){Kt(n,i,c)}}var zp=!1;function Ev(n,i){if(Dc=ba,n=vh(),Ac(n)){if("selectionStart"in n)var o={start:n.selectionStart,end:n.selectionEnd};else e:{o=(o=n.ownerDocument)&&o.defaultView||window;var c=o.getSelection&&o.getSelection();if(c&&c.rangeCount!==0){o=c.anchorNode;var d=c.anchorOffset,p=c.focusNode;c=c.focusOffset;try{o.nodeType,p.nodeType}catch{o=null;break e}var M=0,F=-1,W=-1,ae=0,be=0,Pe=n,Ce=null;t:for(;;){for(var Ke;Pe!==o||d!==0&&Pe.nodeType!==3||(F=M+d),Pe!==p||c!==0&&Pe.nodeType!==3||(W=M+c),Pe.nodeType===3&&(M+=Pe.nodeValue.length),(Ke=Pe.firstChild)!==null;)Ce=Pe,Pe=Ke;for(;;){if(Pe===n)break t;if(Ce===o&&++ae===d&&(F=M),Ce===p&&++be===c&&(W=M),(Ke=Pe.nextSibling)!==null)break;Pe=Ce,Ce=Pe.parentNode}Pe=Ke}o=F===-1||W===-1?null:{start:F,end:W}}else o=null}o=o||{start:0,end:0}}else o=null;for(Uc={focusedElem:n,selectionRange:o},ba=!1,$e=i;$e!==null;)if(i=$e,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,$e=n;else for(;$e!==null;){i=$e;try{var Je=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(Je!==null){var nt=Je.memoizedProps,Jt=Je.memoizedState,te=i.stateNode,X=te.getSnapshotBeforeUpdate(i.elementType===i.type?nt:hi(i.type,nt),Jt);te.__reactInternalSnapshotBeforeUpdate=X}break;case 3:var re=i.stateNode.containerInfo;re.nodeType===1?re.textContent="":re.nodeType===9&&re.documentElement&&re.removeChild(re.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Oe){Kt(i,i.return,Oe)}if(n=i.sibling,n!==null){n.return=i.return,$e=n;break}$e=i.return}return Je=zp,zp=!1,Je}function Go(n,i,o){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&n)===n){var p=d.destroy;d.destroy=void 0,p!==void 0&&Eu(i,o,p)}d=d.next}while(d!==c)}}function ul(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&n)===n){var c=o.create;o.destroy=c()}o=o.next}while(o!==i)}}function Mu(n){var i=n.ref;if(i!==null){var o=n.stateNode;switch(n.tag){case 5:n=o;break;default:n=o}typeof i=="function"?i(n):i.current=n}}function Bp(n){var i=n.alternate;i!==null&&(n.alternate=null,Bp(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[Ri],delete i[No],delete i[zc],delete i[rv],delete i[sv])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Hp(n){return n.tag===5||n.tag===3||n.tag===4}function Vp(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Hp(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Tu(n,i,o){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(n,i):o.insertBefore(n,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(n,o)):(i=o,i.appendChild(n)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=Ha));else if(c!==4&&(n=n.child,n!==null))for(Tu(n,i,o),n=n.sibling;n!==null;)Tu(n,i,o),n=n.sibling}function wu(n,i,o){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?o.insertBefore(n,i):o.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(wu(n,i,o),n=n.sibling;n!==null;)wu(n,i,o),n=n.sibling}var gn=null,pi=!1;function yr(n,i,o){for(o=o.child;o!==null;)Gp(n,i,o),o=o.sibling}function Gp(n,i,o){if(ft&&typeof ft.onCommitFiberUnmount=="function")try{ft.onCommitFiberUnmount(rt,o)}catch{}switch(o.tag){case 5:Tn||Os(o,i);case 6:var c=gn,d=pi;gn=null,yr(n,i,o),gn=c,pi=d,gn!==null&&(pi?(n=gn,o=o.stateNode,n.nodeType===8?n.parentNode.removeChild(o):n.removeChild(o)):gn.removeChild(o.stateNode));break;case 18:gn!==null&&(pi?(n=gn,o=o.stateNode,n.nodeType===8?kc(n.parentNode,o):n.nodeType===1&&kc(n,o),So(n)):kc(gn,o.stateNode));break;case 4:c=gn,d=pi,gn=o.stateNode.containerInfo,pi=!0,yr(n,i,o),gn=c,pi=d;break;case 0:case 11:case 14:case 15:if(!Tn&&(c=o.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var p=d,M=p.destroy;p=p.tag,M!==void 0&&((p&2)!==0||(p&4)!==0)&&Eu(o,i,M),d=d.next}while(d!==c)}yr(n,i,o);break;case 1:if(!Tn&&(Os(o,i),c=o.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=o.memoizedProps,c.state=o.memoizedState,c.componentWillUnmount()}catch(F){Kt(o,i,F)}yr(n,i,o);break;case 21:yr(n,i,o);break;case 22:o.mode&1?(Tn=(c=Tn)||o.memoizedState!==null,yr(n,i,o),Tn=c):yr(n,i,o);break;default:yr(n,i,o)}}function Wp(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var o=n.stateNode;o===null&&(o=n.stateNode=new Sv),i.forEach(function(c){var d=Lv.bind(null,n,c);o.has(c)||(o.add(c),c.then(d,d))})}}function mi(n,i){var o=i.deletions;if(o!==null)for(var c=0;c<o.length;c++){var d=o[c];try{var p=n,M=i,F=M;e:for(;F!==null;){switch(F.tag){case 5:gn=F.stateNode,pi=!1;break e;case 3:gn=F.stateNode.containerInfo,pi=!0;break e;case 4:gn=F.stateNode.containerInfo,pi=!0;break e}F=F.return}if(gn===null)throw Error(t(160));Gp(p,M,d),gn=null,pi=!1;var W=d.alternate;W!==null&&(W.return=null),d.return=null}catch(ae){Kt(d,i,ae)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)jp(i,n),i=i.sibling}function jp(n,i){var o=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(mi(i,n),Pi(n),c&4){try{Go(3,n,n.return),ul(3,n)}catch(nt){Kt(n,n.return,nt)}try{Go(5,n,n.return)}catch(nt){Kt(n,n.return,nt)}}break;case 1:mi(i,n),Pi(n),c&512&&o!==null&&Os(o,o.return);break;case 5:if(mi(i,n),Pi(n),c&512&&o!==null&&Os(o,o.return),n.flags&32){var d=n.stateNode;try{De(d,"")}catch(nt){Kt(n,n.return,nt)}}if(c&4&&(d=n.stateNode,d!=null)){var p=n.memoizedProps,M=o!==null?o.memoizedProps:p,F=n.type,W=n.updateQueue;if(n.updateQueue=null,W!==null)try{F==="input"&&p.type==="radio"&&p.name!=null&&Le(d,p),J(F,M);var ae=J(F,p);for(M=0;M<W.length;M+=2){var be=W[M],Pe=W[M+1];be==="style"?U(d,Pe):be==="dangerouslySetInnerHTML"?et(d,Pe):be==="children"?De(d,Pe):I(d,be,Pe,ae)}switch(F){case"input":K(d,p);break;case"textarea":T(d,p);break;case"select":var Ce=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!p.multiple;var Ke=p.value;Ke!=null?Ct(d,!!p.multiple,Ke,!1):Ce!==!!p.multiple&&(p.defaultValue!=null?Ct(d,!!p.multiple,p.defaultValue,!0):Ct(d,!!p.multiple,p.multiple?[]:"",!1))}d[No]=p}catch(nt){Kt(n,n.return,nt)}}break;case 6:if(mi(i,n),Pi(n),c&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,p=n.memoizedProps;try{d.nodeValue=p}catch(nt){Kt(n,n.return,nt)}}break;case 3:if(mi(i,n),Pi(n),c&4&&o!==null&&o.memoizedState.isDehydrated)try{So(i.containerInfo)}catch(nt){Kt(n,n.return,nt)}break;case 4:mi(i,n),Pi(n);break;case 13:mi(i,n),Pi(n),d=n.child,d.flags&8192&&(p=d.memoizedState!==null,d.stateNode.isHidden=p,!p||d.alternate!==null&&d.alternate.memoizedState!==null||(Cu=Y())),c&4&&Wp(n);break;case 22:if(be=o!==null&&o.memoizedState!==null,n.mode&1?(Tn=(ae=Tn)||be,mi(i,n),Tn=ae):mi(i,n),Pi(n),c&8192){if(ae=n.memoizedState!==null,(n.stateNode.isHidden=ae)&&!be&&(n.mode&1)!==0)for($e=n,be=n.child;be!==null;){for(Pe=$e=be;$e!==null;){switch(Ce=$e,Ke=Ce.child,Ce.tag){case 0:case 11:case 14:case 15:Go(4,Ce,Ce.return);break;case 1:Os(Ce,Ce.return);var Je=Ce.stateNode;if(typeof Je.componentWillUnmount=="function"){c=Ce,o=Ce.return;try{i=c,Je.props=i.memoizedProps,Je.state=i.memoizedState,Je.componentWillUnmount()}catch(nt){Kt(c,o,nt)}}break;case 5:Os(Ce,Ce.return);break;case 22:if(Ce.memoizedState!==null){qp(Pe);continue}}Ke!==null?(Ke.return=Ce,$e=Ke):qp(Pe)}be=be.sibling}e:for(be=null,Pe=n;;){if(Pe.tag===5){if(be===null){be=Pe;try{d=Pe.stateNode,ae?(p=d.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(F=Pe.stateNode,W=Pe.memoizedProps.style,M=W!=null&&W.hasOwnProperty("display")?W.display:null,F.style.display=Ne("display",M))}catch(nt){Kt(n,n.return,nt)}}}else if(Pe.tag===6){if(be===null)try{Pe.stateNode.nodeValue=ae?"":Pe.memoizedProps}catch(nt){Kt(n,n.return,nt)}}else if((Pe.tag!==22&&Pe.tag!==23||Pe.memoizedState===null||Pe===n)&&Pe.child!==null){Pe.child.return=Pe,Pe=Pe.child;continue}if(Pe===n)break e;for(;Pe.sibling===null;){if(Pe.return===null||Pe.return===n)break e;be===Pe&&(be=null),Pe=Pe.return}be===Pe&&(be=null),Pe.sibling.return=Pe.return,Pe=Pe.sibling}}break;case 19:mi(i,n),Pi(n),c&4&&Wp(n);break;case 21:break;default:mi(i,n),Pi(n)}}function Pi(n){var i=n.flags;if(i&2){try{e:{for(var o=n.return;o!==null;){if(Hp(o)){var c=o;break e}o=o.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(De(d,""),c.flags&=-33);var p=Vp(n);wu(n,p,d);break;case 3:case 4:var M=c.stateNode.containerInfo,F=Vp(n);Tu(n,F,M);break;default:throw Error(t(161))}}catch(W){Kt(n,n.return,W)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function Mv(n,i,o){$e=n,Xp(n)}function Xp(n,i,o){for(var c=(n.mode&1)!==0;$e!==null;){var d=$e,p=d.child;if(d.tag===22&&c){var M=d.memoizedState!==null||cl;if(!M){var F=d.alternate,W=F!==null&&F.memoizedState!==null||Tn;F=cl;var ae=Tn;if(cl=M,(Tn=W)&&!ae)for($e=d;$e!==null;)M=$e,W=M.child,M.tag===22&&M.memoizedState!==null?Kp(d):W!==null?(W.return=M,$e=W):Kp(d);for(;p!==null;)$e=p,Xp(p),p=p.sibling;$e=d,cl=F,Tn=ae}Yp(n)}else(d.subtreeFlags&8772)!==0&&p!==null?(p.return=d,$e=p):Yp(n)}}function Yp(n){for(;$e!==null;){var i=$e;if((i.flags&8772)!==0){var o=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:Tn||ul(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!Tn)if(o===null)c.componentDidMount();else{var d=i.elementType===i.type?o.memoizedProps:hi(i.type,o.memoizedProps);c.componentDidUpdate(d,o.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var p=i.updateQueue;p!==null&&qh(i,p,c);break;case 3:var M=i.updateQueue;if(M!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}qh(i,M,o)}break;case 5:var F=i.stateNode;if(o===null&&i.flags&4){o=F;var W=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":W.autoFocus&&o.focus();break;case"img":W.src&&(o.src=W.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var ae=i.alternate;if(ae!==null){var be=ae.memoizedState;if(be!==null){var Pe=be.dehydrated;Pe!==null&&So(Pe)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Tn||i.flags&512&&Mu(i)}catch(Ce){Kt(i,i.return,Ce)}}if(i===n){$e=null;break}if(o=i.sibling,o!==null){o.return=i.return,$e=o;break}$e=i.return}}function qp(n){for(;$e!==null;){var i=$e;if(i===n){$e=null;break}var o=i.sibling;if(o!==null){o.return=i.return,$e=o;break}$e=i.return}}function Kp(n){for(;$e!==null;){var i=$e;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{ul(4,i)}catch(W){Kt(i,o,W)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var d=i.return;try{c.componentDidMount()}catch(W){Kt(i,d,W)}}var p=i.return;try{Mu(i)}catch(W){Kt(i,p,W)}break;case 5:var M=i.return;try{Mu(i)}catch(W){Kt(i,M,W)}}}catch(W){Kt(i,i.return,W)}if(i===n){$e=null;break}var F=i.sibling;if(F!==null){F.return=i.return,$e=F;break}$e=i.return}}var Tv=Math.ceil,dl=C.ReactCurrentDispatcher,Au=C.ReactCurrentOwner,si=C.ReactCurrentBatchConfig,Rt=0,fn=null,tn=null,vn=0,Kn=0,ks=mr(0),on=0,Wo=null,Zr=0,fl=0,Ru=0,jo=null,Bn=null,Cu=0,zs=1/0,Ki=null,hl=!1,bu=null,Sr=null,pl=!1,Er=null,ml=0,Xo=0,Pu=null,gl=-1,vl=0;function Ln(){return(Rt&6)!==0?Y():gl!==-1?gl:gl=Y()}function Mr(n){return(n.mode&1)===0?1:(Rt&2)!==0&&vn!==0?vn&-vn:av.transition!==null?(vl===0&&(vl=bn()),vl):(n=St,n!==0||(n=window.event,n=n===void 0?16:Zf(n.type)),n)}function gi(n,i,o,c){if(50<Xo)throw Xo=0,Pu=null,Error(t(185));Qt(n,o,c),((Rt&2)===0||n!==fn)&&(n===fn&&((Rt&2)===0&&(fl|=o),on===4&&Tr(n,vn)),Hn(n,c),o===1&&Rt===0&&(i.mode&1)===0&&(zs=Y()+500,ja&&vr()))}function Hn(n,i){var o=n.callbackNode;Vr(n,i);var c=ui(n,n===fn?vn:0);if(c===0)o!==null&&$(o),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(o!=null&&$(o),i===1)n.tag===0?ov(Zp.bind(null,n)):Fh(Zp.bind(null,n)),nv(function(){(Rt&6)===0&&vr()}),o=null;else{switch(Gf(c)){case 1:o=Ge;break;case 4:o=Qe;break;case 16:o=qe;break;case 536870912:o=dt;break;default:o=qe}o=sm(o,$p.bind(null,n))}n.callbackPriority=i,n.callbackNode=o}}function $p(n,i){if(gl=-1,vl=0,(Rt&6)!==0)throw Error(t(327));var o=n.callbackNode;if(Bs()&&n.callbackNode!==o)return null;var c=ui(n,n===fn?vn:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||i)i=_l(n,c);else{i=c;var d=Rt;Rt|=2;var p=Jp();(fn!==n||vn!==i)&&(Ki=null,zs=Y()+500,Jr(n,i));do try{Rv();break}catch(F){Qp(n,F)}while(!0);qc(),dl.current=p,Rt=d,tn!==null?i=0:(fn=null,vn=0,i=on)}if(i!==0){if(i===2&&(d=zt(n),d!==0&&(c=d,i=Lu(n,d))),i===1)throw o=Wo,Jr(n,0),Tr(n,c),Hn(n,Y()),o;if(i===6)Tr(n,c);else{if(d=n.current.alternate,(c&30)===0&&!wv(d)&&(i=_l(n,c),i===2&&(p=zt(n),p!==0&&(c=p,i=Lu(n,p))),i===1))throw o=Wo,Jr(n,0),Tr(n,c),Hn(n,Y()),o;switch(n.finishedWork=d,n.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:es(n,Bn,Ki);break;case 3:if(Tr(n,c),(c&130023424)===c&&(i=Cu+500-Y(),10<i)){if(ui(n,0)!==0)break;if(d=n.suspendedLanes,(d&c)!==c){Ln(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=Oc(es.bind(null,n,Bn,Ki),i);break}es(n,Bn,Ki);break;case 4:if(Tr(n,c),(c&4194240)===c)break;for(i=n.eventTimes,d=-1;0<c;){var M=31-At(c);p=1<<M,M=i[M],M>d&&(d=M),c&=~p}if(c=d,c=Y()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*Tv(c/1960))-c,10<c){n.timeoutHandle=Oc(es.bind(null,n,Bn,Ki),c);break}es(n,Bn,Ki);break;case 5:es(n,Bn,Ki);break;default:throw Error(t(329))}}}return Hn(n,Y()),n.callbackNode===o?$p.bind(null,n):null}function Lu(n,i){var o=jo;return n.current.memoizedState.isDehydrated&&(Jr(n,i).flags|=256),n=_l(n,i),n!==2&&(i=Bn,Bn=o,i!==null&&Nu(i)),n}function Nu(n){Bn===null?Bn=n:Bn.push.apply(Bn,n)}function wv(n){for(var i=n;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var c=0;c<o.length;c++){var d=o[c],p=d.getSnapshot;d=d.value;try{if(!di(p(),d))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Tr(n,i){for(i&=~Ru,i&=~fl,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var o=31-At(i),c=1<<o;n[o]=-1,i&=~c}}function Zp(n){if((Rt&6)!==0)throw Error(t(327));Bs();var i=ui(n,0);if((i&1)===0)return Hn(n,Y()),null;var o=_l(n,i);if(n.tag!==0&&o===2){var c=zt(n);c!==0&&(i=c,o=Lu(n,c))}if(o===1)throw o=Wo,Jr(n,0),Tr(n,i),Hn(n,Y()),o;if(o===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,es(n,Bn,Ki),Hn(n,Y()),null}function Iu(n,i){var o=Rt;Rt|=1;try{return n(i)}finally{Rt=o,Rt===0&&(zs=Y()+500,ja&&vr())}}function Qr(n){Er!==null&&Er.tag===0&&(Rt&6)===0&&Bs();var i=Rt;Rt|=1;var o=si.transition,c=St;try{if(si.transition=null,St=1,n)return n()}finally{St=c,si.transition=o,Rt=i,(Rt&6)===0&&vr()}}function Du(){Kn=ks.current,Wt(ks)}function Jr(n,i){n.finishedWork=null,n.finishedLanes=0;var o=n.timeoutHandle;if(o!==-1&&(n.timeoutHandle=-1,tv(o)),tn!==null)for(o=tn.return;o!==null;){var c=o;switch(Gc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Ga();break;case 3:Us(),Wt(On),Wt(Sn),nu();break;case 5:eu(c);break;case 4:Us();break;case 13:Wt(Yt);break;case 19:Wt(Yt);break;case 10:Kc(c.type._context);break;case 22:case 23:Du()}o=o.return}if(fn=n,tn=n=wr(n.current,null),vn=Kn=i,on=0,Wo=null,Ru=fl=Zr=0,Bn=jo=null,qr!==null){for(i=0;i<qr.length;i++)if(o=qr[i],c=o.interleaved,c!==null){o.interleaved=null;var d=c.next,p=o.pending;if(p!==null){var M=p.next;p.next=d,c.next=M}o.pending=c}qr=null}return n}function Qp(n,i){do{var o=tn;try{if(qc(),tl.current=sl,nl){for(var c=qt.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}nl=!1}if($r=0,dn=sn=qt=null,ko=!1,zo=0,Au.current=null,o===null||o.return===null){on=1,Wo=i,tn=null;break}e:{var p=n,M=o.return,F=o,W=i;if(i=vn,F.flags|=32768,W!==null&&typeof W=="object"&&typeof W.then=="function"){var ae=W,be=F,Pe=be.tag;if((be.mode&1)===0&&(Pe===0||Pe===11||Pe===15)){var Ce=be.alternate;Ce?(be.updateQueue=Ce.updateQueue,be.memoizedState=Ce.memoizedState,be.lanes=Ce.lanes):(be.updateQueue=null,be.memoizedState=null)}var Ke=Mp(M);if(Ke!==null){Ke.flags&=-257,Tp(Ke,M,F,p,i),Ke.mode&1&&Ep(p,ae,i),i=Ke,W=ae;var Je=i.updateQueue;if(Je===null){var nt=new Set;nt.add(W),i.updateQueue=nt}else Je.add(W);break e}else{if((i&1)===0){Ep(p,ae,i),Uu();break e}W=Error(t(426))}}else if(jt&&F.mode&1){var Jt=Mp(M);if(Jt!==null){(Jt.flags&65536)===0&&(Jt.flags|=256),Tp(Jt,M,F,p,i),Xc(Fs(W,F));break e}}p=W=Fs(W,F),on!==4&&(on=2),jo===null?jo=[p]:jo.push(p),p=M;do{switch(p.tag){case 3:p.flags|=65536,i&=-i,p.lanes|=i;var te=yp(p,W,i);Yh(p,te);break e;case 1:F=W;var X=p.type,re=p.stateNode;if((p.flags&128)===0&&(typeof X.getDerivedStateFromError=="function"||re!==null&&typeof re.componentDidCatch=="function"&&(Sr===null||!Sr.has(re)))){p.flags|=65536,i&=-i,p.lanes|=i;var Oe=Sp(p,F,i);Yh(p,Oe);break e}}p=p.return}while(p!==null)}tm(o)}catch(it){i=it,tn===o&&o!==null&&(tn=o=o.return);continue}break}while(!0)}function Jp(){var n=dl.current;return dl.current=sl,n===null?sl:n}function Uu(){(on===0||on===3||on===2)&&(on=4),fn===null||(Zr&268435455)===0&&(fl&268435455)===0||Tr(fn,vn)}function _l(n,i){var o=Rt;Rt|=2;var c=Jp();(fn!==n||vn!==i)&&(Ki=null,Jr(n,i));do try{Av();break}catch(d){Qp(n,d)}while(!0);if(qc(),Rt=o,dl.current=c,tn!==null)throw Error(t(261));return fn=null,vn=0,on}function Av(){for(;tn!==null;)em(tn)}function Rv(){for(;tn!==null&&!ue();)em(tn)}function em(n){var i=rm(n.alternate,n,Kn);n.memoizedProps=n.pendingProps,i===null?tm(n):tn=i,Au.current=null}function tm(n){var i=n;do{var o=i.alternate;if(n=i.return,(i.flags&32768)===0){if(o=xv(o,i,Kn),o!==null){tn=o;return}}else{if(o=yv(o,i),o!==null){o.flags&=32767,tn=o;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{on=6,tn=null;return}}if(i=i.sibling,i!==null){tn=i;return}tn=i=n}while(i!==null);on===0&&(on=5)}function es(n,i,o){var c=St,d=si.transition;try{si.transition=null,St=1,Cv(n,i,o,c)}finally{si.transition=d,St=c}return null}function Cv(n,i,o,c){do Bs();while(Er!==null);if((Rt&6)!==0)throw Error(t(327));o=n.finishedWork;var d=n.finishedLanes;if(o===null)return null;if(n.finishedWork=null,n.finishedLanes=0,o===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var p=o.lanes|o.childLanes;if(yn(n,p),n===fn&&(tn=fn=null,vn=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||pl||(pl=!0,sm(qe,function(){return Bs(),null})),p=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||p){p=si.transition,si.transition=null;var M=St;St=1;var F=Rt;Rt|=4,Au.current=null,Ev(n,o),jp(o,n),q0(Uc),ba=!!Dc,Uc=Dc=null,n.current=o,Mv(o),he(),Rt=F,St=M,si.transition=p}else n.current=o;if(pl&&(pl=!1,Er=n,ml=d),p=n.pendingLanes,p===0&&(Sr=null),Lt(o.stateNode),Hn(n,Y()),i!==null)for(c=n.onRecoverableError,o=0;o<i.length;o++)d=i[o],c(d.value,{componentStack:d.stack,digest:d.digest});if(hl)throw hl=!1,n=bu,bu=null,n;return(ml&1)!==0&&n.tag!==0&&Bs(),p=n.pendingLanes,(p&1)!==0?n===Pu?Xo++:(Xo=0,Pu=n):Xo=0,vr(),null}function Bs(){if(Er!==null){var n=Gf(ml),i=si.transition,o=St;try{if(si.transition=null,St=16>n?16:n,Er===null)var c=!1;else{if(n=Er,Er=null,ml=0,(Rt&6)!==0)throw Error(t(331));var d=Rt;for(Rt|=4,$e=n.current;$e!==null;){var p=$e,M=p.child;if(($e.flags&16)!==0){var F=p.deletions;if(F!==null){for(var W=0;W<F.length;W++){var ae=F[W];for($e=ae;$e!==null;){var be=$e;switch(be.tag){case 0:case 11:case 15:Go(8,be,p)}var Pe=be.child;if(Pe!==null)Pe.return=be,$e=Pe;else for(;$e!==null;){be=$e;var Ce=be.sibling,Ke=be.return;if(Bp(be),be===ae){$e=null;break}if(Ce!==null){Ce.return=Ke,$e=Ce;break}$e=Ke}}}var Je=p.alternate;if(Je!==null){var nt=Je.child;if(nt!==null){Je.child=null;do{var Jt=nt.sibling;nt.sibling=null,nt=Jt}while(nt!==null)}}$e=p}}if((p.subtreeFlags&2064)!==0&&M!==null)M.return=p,$e=M;else e:for(;$e!==null;){if(p=$e,(p.flags&2048)!==0)switch(p.tag){case 0:case 11:case 15:Go(9,p,p.return)}var te=p.sibling;if(te!==null){te.return=p.return,$e=te;break e}$e=p.return}}var X=n.current;for($e=X;$e!==null;){M=$e;var re=M.child;if((M.subtreeFlags&2064)!==0&&re!==null)re.return=M,$e=re;else e:for(M=X;$e!==null;){if(F=$e,(F.flags&2048)!==0)try{switch(F.tag){case 0:case 11:case 15:ul(9,F)}}catch(it){Kt(F,F.return,it)}if(F===M){$e=null;break e}var Oe=F.sibling;if(Oe!==null){Oe.return=F.return,$e=Oe;break e}$e=F.return}}if(Rt=d,vr(),ft&&typeof ft.onPostCommitFiberRoot=="function")try{ft.onPostCommitFiberRoot(rt,n)}catch{}c=!0}return c}finally{St=o,si.transition=i}}return!1}function nm(n,i,o){i=Fs(o,i),i=yp(n,i,1),n=xr(n,i,1),i=Ln(),n!==null&&(Qt(n,1,i),Hn(n,i))}function Kt(n,i,o){if(n.tag===3)nm(n,n,o);else for(;i!==null;){if(i.tag===3){nm(i,n,o);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Sr===null||!Sr.has(c))){n=Fs(o,n),n=Sp(i,n,1),i=xr(i,n,1),n=Ln(),i!==null&&(Qt(i,1,n),Hn(i,n));break}}i=i.return}}function bv(n,i,o){var c=n.pingCache;c!==null&&c.delete(i),i=Ln(),n.pingedLanes|=n.suspendedLanes&o,fn===n&&(vn&o)===o&&(on===4||on===3&&(vn&130023424)===vn&&500>Y()-Cu?Jr(n,0):Ru|=o),Hn(n,i)}function im(n,i){i===0&&((n.mode&1)===0?i=1:(i=yt,yt<<=1,(yt&130023424)===0&&(yt=4194304)));var o=Ln();n=Xi(n,i),n!==null&&(Qt(n,i,o),Hn(n,o))}function Pv(n){var i=n.memoizedState,o=0;i!==null&&(o=i.retryLane),im(n,o)}function Lv(n,i){var o=0;switch(n.tag){case 13:var c=n.stateNode,d=n.memoizedState;d!==null&&(o=d.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),im(n,o)}var rm;rm=function(n,i,o){if(n!==null)if(n.memoizedProps!==i.pendingProps||On.current)zn=!0;else{if((n.lanes&o)===0&&(i.flags&128)===0)return zn=!1,_v(n,i,o);zn=(n.flags&131072)!==0}else zn=!1,jt&&(i.flags&1048576)!==0&&Oh(i,Ya,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;ll(n,i),n=i.pendingProps;var d=Cs(i,Sn.current);Ds(i,o),d=su(null,i,c,n,d,o);var p=ou();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,kn(c)?(p=!0,Wa(i)):p=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,Qc(i),d.updater=ol,i.stateNode=d,d._reactInternals=i,fu(i,c,n,o),i=gu(null,i,c,!0,p,o)):(i.tag=0,jt&&p&&Vc(i),Pn(null,i,d,o),i=i.child),i;case 16:c=i.elementType;e:{switch(ll(n,i),n=i.pendingProps,d=c._init,c=d(c._payload),i.type=c,d=i.tag=Iv(c),n=hi(c,n),d){case 0:i=mu(null,i,c,n,o);break e;case 1:i=Pp(null,i,c,n,o);break e;case 11:i=wp(null,i,c,n,o);break e;case 14:i=Ap(null,i,c,hi(c.type,n),o);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:hi(c,d),mu(n,i,c,d,o);case 1:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:hi(c,d),Pp(n,i,c,d,o);case 3:e:{if(Lp(i),n===null)throw Error(t(387));c=i.pendingProps,p=i.memoizedState,d=p.element,Xh(n,i),Ja(i,c,null,o);var M=i.memoizedState;if(c=M.element,p.isDehydrated)if(p={element:c,isDehydrated:!1,cache:M.cache,pendingSuspenseBoundaries:M.pendingSuspenseBoundaries,transitions:M.transitions},i.updateQueue.baseState=p,i.memoizedState=p,i.flags&256){d=Fs(Error(t(423)),i),i=Np(n,i,c,o,d);break e}else if(c!==d){d=Fs(Error(t(424)),i),i=Np(n,i,c,o,d);break e}else for(qn=pr(i.stateNode.containerInfo.firstChild),Yn=i,jt=!0,fi=null,o=Wh(i,null,c,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(Ls(),c===d){i=qi(n,i,o);break e}Pn(n,i,c,o)}i=i.child}return i;case 5:return Kh(i),n===null&&jc(i),c=i.type,d=i.pendingProps,p=n!==null?n.memoizedProps:null,M=d.children,Fc(c,d)?M=null:p!==null&&Fc(c,p)&&(i.flags|=32),bp(n,i),Pn(n,i,M,o),i.child;case 6:return n===null&&jc(i),null;case 13:return Ip(n,i,o);case 4:return Jc(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=Ns(i,null,c,o):Pn(n,i,c,o),i.child;case 11:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:hi(c,d),wp(n,i,c,d,o);case 7:return Pn(n,i,i.pendingProps,o),i.child;case 8:return Pn(n,i,i.pendingProps.children,o),i.child;case 12:return Pn(n,i,i.pendingProps.children,o),i.child;case 10:e:{if(c=i.type._context,d=i.pendingProps,p=i.memoizedProps,M=d.value,Vt($a,c._currentValue),c._currentValue=M,p!==null)if(di(p.value,M)){if(p.children===d.children&&!On.current){i=qi(n,i,o);break e}}else for(p=i.child,p!==null&&(p.return=i);p!==null;){var F=p.dependencies;if(F!==null){M=p.child;for(var W=F.firstContext;W!==null;){if(W.context===c){if(p.tag===1){W=Yi(-1,o&-o),W.tag=2;var ae=p.updateQueue;if(ae!==null){ae=ae.shared;var be=ae.pending;be===null?W.next=W:(W.next=be.next,be.next=W),ae.pending=W}}p.lanes|=o,W=p.alternate,W!==null&&(W.lanes|=o),$c(p.return,o,i),F.lanes|=o;break}W=W.next}}else if(p.tag===10)M=p.type===i.type?null:p.child;else if(p.tag===18){if(M=p.return,M===null)throw Error(t(341));M.lanes|=o,F=M.alternate,F!==null&&(F.lanes|=o),$c(M,o,i),M=p.sibling}else M=p.child;if(M!==null)M.return=p;else for(M=p;M!==null;){if(M===i){M=null;break}if(p=M.sibling,p!==null){p.return=M.return,M=p;break}M=M.return}p=M}Pn(n,i,d.children,o),i=i.child}return i;case 9:return d=i.type,c=i.pendingProps.children,Ds(i,o),d=ii(d),c=c(d),i.flags|=1,Pn(n,i,c,o),i.child;case 14:return c=i.type,d=hi(c,i.pendingProps),d=hi(c.type,d),Ap(n,i,c,d,o);case 15:return Rp(n,i,i.type,i.pendingProps,o);case 17:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:hi(c,d),ll(n,i),i.tag=1,kn(c)?(n=!0,Wa(i)):n=!1,Ds(i,o),_p(i,c,d),fu(i,c,d,o),gu(null,i,c,!0,n,o);case 19:return Up(n,i,o);case 22:return Cp(n,i,o)}throw Error(t(156,i.tag))};function sm(n,i){return R(n,i)}function Nv(n,i,o,c){this.tag=n,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function oi(n,i,o,c){return new Nv(n,i,o,c)}function Fu(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Iv(n){if(typeof n=="function")return Fu(n)?1:0;if(n!=null){if(n=n.$$typeof,n===q)return 11;if(n===fe)return 14}return 2}function wr(n,i){var o=n.alternate;return o===null?(o=oi(n.tag,i,n.key,n.mode),o.elementType=n.elementType,o.type=n.type,o.stateNode=n.stateNode,o.alternate=n,n.alternate=o):(o.pendingProps=i,o.type=n.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=n.flags&14680064,o.childLanes=n.childLanes,o.lanes=n.lanes,o.child=n.child,o.memoizedProps=n.memoizedProps,o.memoizedState=n.memoizedState,o.updateQueue=n.updateQueue,i=n.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=n.sibling,o.index=n.index,o.ref=n.ref,o}function xl(n,i,o,c,d,p){var M=2;if(c=n,typeof n=="function")Fu(n)&&(M=1);else if(typeof n=="string")M=5;else e:switch(n){case k:return ts(o.children,d,p,i);case G:M=8,d|=8;break;case P:return n=oi(12,o,i,d|2),n.elementType=P,n.lanes=p,n;case oe:return n=oi(13,o,i,d),n.elementType=oe,n.lanes=p,n;case ve:return n=oi(19,o,i,d),n.elementType=ve,n.lanes=p,n;case me:return yl(o,d,p,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case A:M=10;break e;case V:M=9;break e;case q:M=11;break e;case fe:M=14;break e;case pe:M=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=oi(M,o,i,d),i.elementType=n,i.type=c,i.lanes=p,i}function ts(n,i,o,c){return n=oi(7,n,c,i),n.lanes=o,n}function yl(n,i,o,c){return n=oi(22,n,c,i),n.elementType=me,n.lanes=o,n.stateNode={isHidden:!1},n}function Ou(n,i,o){return n=oi(6,n,null,i),n.lanes=o,n}function ku(n,i,o){return i=oi(4,n.children!==null?n.children:[],n.key,i),i.lanes=o,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function Dv(n,i,o,c,d){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=xn(0),this.expirationTimes=xn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=xn(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function zu(n,i,o,c,d,p,M,F,W){return n=new Dv(n,i,o,F,W),i===1?(i=1,p===!0&&(i|=8)):i=0,p=oi(3,null,null,i),n.current=p,p.stateNode=n,p.memoizedState={element:c,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},Qc(p),n}function Uv(n,i,o){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:O,key:c==null?null:""+c,children:n,containerInfo:i,implementation:o}}function om(n){if(!n)return gr;n=n._reactInternals;e:{if(Fn(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(kn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var o=n.type;if(kn(o))return Dh(n,o,i)}return i}function am(n,i,o,c,d,p,M,F,W){return n=zu(o,c,!0,n,d,p,M,F,W),n.context=om(null),o=n.current,c=Ln(),d=Mr(o),p=Yi(c,d),p.callback=i??null,xr(o,p,d),n.current.lanes=d,Qt(n,d,c),Hn(n,c),n}function Sl(n,i,o,c){var d=i.current,p=Ln(),M=Mr(d);return o=om(o),i.context===null?i.context=o:i.pendingContext=o,i=Yi(p,M),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=xr(d,i,M),n!==null&&(gi(n,d,M,p),Qa(n,d,M)),M}function El(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function lm(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var o=n.retryLane;n.retryLane=o!==0&&o<i?o:i}}function Bu(n,i){lm(n,i),(n=n.alternate)&&lm(n,i)}function Fv(){return null}var cm=typeof reportError=="function"?reportError:function(n){console.error(n)};function Hu(n){this._internalRoot=n}Ml.prototype.render=Hu.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));Sl(n,i,null,null)},Ml.prototype.unmount=Hu.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;Qr(function(){Sl(null,n,null,null)}),i[Vi]=null}};function Ml(n){this._internalRoot=n}Ml.prototype.unstable_scheduleHydration=function(n){if(n){var i=Xf();n={blockedOn:null,target:n,priority:i};for(var o=0;o<dr.length&&i!==0&&i<dr[o].priority;o++);dr.splice(o,0,n),o===0&&Kf(n)}};function Vu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Tl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function um(){}function Ov(n,i,o,c,d){if(d){if(typeof c=="function"){var p=c;c=function(){var ae=El(M);p.call(ae)}}var M=am(i,c,n,0,null,!1,!1,"",um);return n._reactRootContainer=M,n[Vi]=M.current,Po(n.nodeType===8?n.parentNode:n),Qr(),M}for(;d=n.lastChild;)n.removeChild(d);if(typeof c=="function"){var F=c;c=function(){var ae=El(W);F.call(ae)}}var W=zu(n,0,!1,null,null,!1,!1,"",um);return n._reactRootContainer=W,n[Vi]=W.current,Po(n.nodeType===8?n.parentNode:n),Qr(function(){Sl(i,W,o,c)}),W}function wl(n,i,o,c,d){var p=o._reactRootContainer;if(p){var M=p;if(typeof d=="function"){var F=d;d=function(){var W=El(M);F.call(W)}}Sl(i,M,n,d)}else M=Ov(o,i,n,d,c);return El(M)}Wf=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var o=rn(i.pendingLanes);o!==0&&(Gr(i,o|1),Hn(i,Y()),(Rt&6)===0&&(zs=Y()+500,vr()))}break;case 13:Qr(function(){var c=Xi(n,1);if(c!==null){var d=Ln();gi(c,n,1,d)}}),Bu(n,1)}},hc=function(n){if(n.tag===13){var i=Xi(n,134217728);if(i!==null){var o=Ln();gi(i,n,134217728,o)}Bu(n,134217728)}},jf=function(n){if(n.tag===13){var i=Mr(n),o=Xi(n,i);if(o!==null){var c=Ln();gi(o,n,i,c)}Bu(n,i)}},Xf=function(){return St},Yf=function(n,i){var o=St;try{return St=n,i()}finally{St=o}},Q=function(n,i,o){switch(i){case"input":if(K(n,o),i=o.name,o.type==="radio"&&i!=null){for(o=n;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var c=o[i];if(c!==n&&c.form===n.form){var d=Va(c);if(!d)throw Error(t(90));Ht(c),K(c,d)}}}break;case"textarea":T(n,o);break;case"select":i=o.value,i!=null&&Ct(n,!!o.multiple,i,!1)}},Ye=Iu,xt=Qr;var kv={usingClientEntryPoint:!1,Events:[Io,As,Va,ye,Ve,Iu]},Yo={findFiberByHostInstance:Wr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},zv={bundleType:Yo.bundleType,version:Yo.version,rendererPackageName:Yo.rendererPackageName,rendererConfig:Yo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:C.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=wa(n),n===null?null:n.stateNode},findFiberByHostInstance:Yo.findFiberByHostInstance||Fv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Al=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Al.isDisabled&&Al.supportsFiber)try{rt=Al.inject(zv),ft=Al}catch{}}return Vn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=kv,Vn.createPortal=function(n,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Vu(i))throw Error(t(200));return Uv(n,i,null,o)},Vn.createRoot=function(n,i){if(!Vu(n))throw Error(t(299));var o=!1,c="",d=cm;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=zu(n,1,!1,null,null,o,!1,c,d),n[Vi]=i.current,Po(n.nodeType===8?n.parentNode:n),new Hu(i)},Vn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=wa(i),n=n===null?null:n.stateNode,n},Vn.flushSync=function(n){return Qr(n)},Vn.hydrate=function(n,i,o){if(!Tl(i))throw Error(t(200));return wl(null,n,i,!0,o)},Vn.hydrateRoot=function(n,i,o){if(!Vu(n))throw Error(t(405));var c=o!=null&&o.hydratedSources||null,d=!1,p="",M=cm;if(o!=null&&(o.unstable_strictMode===!0&&(d=!0),o.identifierPrefix!==void 0&&(p=o.identifierPrefix),o.onRecoverableError!==void 0&&(M=o.onRecoverableError)),i=am(i,null,n,1,o??null,d,!1,p,M),n[Vi]=i.current,Po(n),c)for(n=0;n<c.length;n++)o=c[n],d=o._getVersion,d=d(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,d]:i.mutableSourceEagerHydrationData.push(o,d);return new Ml(i)},Vn.render=function(n,i,o){if(!Tl(i))throw Error(t(200));return wl(null,n,i,!1,o)},Vn.unmountComponentAtNode=function(n){if(!Tl(n))throw Error(t(40));return n._reactRootContainer?(Qr(function(){wl(null,null,n,!1,function(){n._reactRootContainer=null,n[Vi]=null})}),!0):!1},Vn.unstable_batchedUpdates=Iu,Vn.unstable_renderSubtreeIntoContainer=function(n,i,o,c){if(!Tl(o))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return wl(n,i,o,!1,c)},Vn.version="18.3.1-next-f1338f8080-20240426",Vn}var _m;function Kv(){if(_m)return ju.exports;_m=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),ju.exports=qv(),ju.exports}var xm;function $v(){if(xm)return Rl;xm=1;var s=Kv();return Rl.createRoot=s.createRoot,Rl.hydrateRoot=s.hydrateRoot,Rl}var Zv=$v();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qv=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Ag=(...s)=>s.filter((e,t,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Jv={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e_=Tt.forwardRef(({color:s="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:r,className:a="",children:l,iconNode:u,...f},m)=>Tt.createElement("svg",{ref:m,...Jv,width:e,height:e,stroke:s,strokeWidth:r?Number(t)*24/Number(e):t,className:Ag("lucide",a),...f},[...u.map(([h,v])=>Tt.createElement(h,v)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const It=(s,e)=>{const t=Tt.forwardRef(({className:r,...a},l)=>Tt.createElement(e_,{ref:l,iconNode:e,className:Ag(`lucide-${Qv(s)}`,r),...a}));return t.displayName=`${s}`,t};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $i=It("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zl=It("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Id=It("Building2",[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ym=It("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t_=It("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n_=It("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i_=It("Compass",[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ia=It("Crosshair",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"22",x2:"18",y1:"12",y2:"12",key:"l9bcsi"}],["line",{x1:"6",x2:"2",y1:"12",y2:"12",key:"13hhkx"}],["line",{x1:"12",x2:"12",y1:"6",y2:"2",key:"10w3f3"}],["line",{x1:"12",x2:"12",y1:"22",y2:"18",key:"15g9kq"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r_=It("Crown",[["path",{d:"M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z",key:"1vdc57"}],["path",{d:"M5 21h14",key:"11awu3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dd=It("Flame",[["path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",key:"96xj49"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s_=It("Gamepad2",[["line",{x1:"6",x2:"10",y1:"11",y2:"11",key:"1gktln"}],["line",{x1:"8",x2:"8",y1:"9",y2:"13",key:"qnk9ow"}],["line",{x1:"15",x2:"15.01",y1:"12",y2:"12",key:"krot7o"}],["line",{x1:"18",x2:"18.01",y1:"10",y2:"10",key:"1lcuu1"}],["path",{d:"M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z",key:"mfqc10"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cl=It("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sm=It("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Em=It("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o_=It("Package",[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",key:"1a0edw"}],["path",{d:"M12 22V12",key:"d0xqtd"}],["path",{d:"m3.3 7 7.703 4.734a2 2 0 0 0 1.994 0L20.7 7",key:"yx3hmr"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qu=It("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cf=It("Radio",[["path",{d:"M4.9 19.1C1 15.2 1 8.8 4.9 4.9",key:"1vaf9d"}],["path",{d:"M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5",key:"u1ii0m"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5",key:"1j5fej"}],["path",{d:"M19.1 4.9C23 8.8 23 15.1 19.1 19",key:"10b0cb"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a_=It("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l_=It("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ud=It("ShoppingBag",[["path",{d:"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z",key:"hou9p0"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rg=It("Skull",[["path",{d:"m12.5 17-.5-1-.5 1h1z",key:"3me087"}],["path",{d:"M15 22a1 1 0 0 0 1-1v-1a2 2 0 0 0 1.56-3.25 8 8 0 1 0-11.12 0A2 2 0 0 0 8 20v1a1 1 0 0 0 1 1z",key:"1o5pge"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ku=It("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c_=It("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ra=It("Truck",[["path",{d:"M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",key:"wrbu53"}],["path",{d:"M15 18H9",key:"1lyqi6"}],["path",{d:"M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",key:"lysw3i"}],["circle",{cx:"17",cy:"18",r:"2",key:"332jqn"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dr=It("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mm=It("Wallet",[["path",{d:"M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1",key:"18etb6"}],["path",{d:"M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4",key:"xoc0q4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u_=It("Warehouse",[["path",{d:"M22 8.35V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.35A2 2 0 0 1 3.26 6.5l8-3.2a2 2 0 0 1 1.48 0l8 3.2A2 2 0 0 1 22 8.35Z",key:"gksnxg"}],["path",{d:"M6 18h12",key:"9pbo8z"}],["path",{d:"M6 14h12",key:"4cwo0f"}],["rect",{width:"12",height:"12",x:"6",y:"10",key:"apd30q"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tm=It("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d_=It("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]),Bt={width:1920,height:1320},yi=[{id:"ember",name:"Blue Ember",tag:"STREET",color:"#62b7f8",wholesale:25,retail:60,unlock:1,icon:"◆"},{id:"velvet",name:"Velvet Cloud",tag:"RARE",color:"#be89fd",wholesale:65,retail:145,unlock:3,icon:"✦"},{id:"chromatic",name:"Chromatic",tag:"ELITE",color:"#fa89c7",wholesale:155,retail:320,unlock:7,icon:"◈"},{id:"nova",name:"Nova Veil",tag:"LEGEND",color:"#f4c36b",wholesale:360,retail:720,unlock:12,icon:"✺"}],In=[{id:"old",name:"OLD QUARTER",short:"Old Quarter",color:"#80b7a2",risk:12,unlock:1,bounds:[0,0,630,670],demand:1},{id:"neon",name:"NEON MILE",short:"Neon Mile",color:"#db81f9",risk:28,unlock:2,bounds:[630,0,1330,670],demand:1.15},{id:"heights",name:"CROWN HEIGHTS",short:"Crown Heights",color:"#f4c782",risk:45,unlock:5,bounds:[1330,0,1920,670],demand:1.38},{id:"south",name:"SOUTH BLOCK",short:"South Block",color:"#77d1dc",risk:22,unlock:3,bounds:[0,670,630,1320],demand:1.08},{id:"docks",name:"THE DOCKS",short:"The Docks",color:"#e1a16c",risk:37,unlock:4,bounds:[630,670,1330,1320],demand:1.25},{id:"industrial",name:"IRON DISTRICT",short:"Iron District",color:"#8c9daf",risk:55,unlock:8,bounds:[1330,670,1920,1320],demand:1.5}],Li=[{id:"apartment",name:"THE FLAT",kind:"home",district:"old",x:180,y:120,w:190,h:150,tag:"YOUR FIRST HOME",color:5402470},{id:"corner",name:"CORNER STORE",kind:"supply",district:"old",x:690,y:130,w:190,h:155,tag:"UNDERGROUND EXCHANGE",color:6645847},{id:"club",name:"AFTERHOURS",kind:"contact",district:"neon",x:1180,y:100,w:190,h:175,tag:"NETWORK HUB",color:7558510},{id:"penthouse",name:"GLASS TOWER",kind:"property",district:"heights",x:1660,y:120,w:175,h:180,tag:"PREMIUM HQ",color:5401461,cost:32e3},{id:"lot",name:"OLD WAREHOUSE",kind:"property",district:"old",x:160,y:465,w:220,h:178,tag:"WAREHOUSE",color:5595499,cost:1400},{id:"bar",name:"RED ROOM",kind:"contact",district:"neon",x:715,y:490,w:165,h:145,tag:"MEET CONTACTS",color:6966112},{id:"market",name:"MIDNIGHT MARKET",kind:"supply",district:"neon",x:1172,y:474,w:210,h:166,tag:"WHOLESALE",color:6708822},{id:"office",name:"PRIVATE OFFICE",kind:"property",district:"heights",x:1650,y:455,w:185,h:175,tag:"BUSINESS HQ",color:5862509,cost:7800},{id:"yard",name:"LOWRISE COURT",kind:"contact",district:"south",x:175,y:865,w:198,h:160,tag:"CUSTOMER HUB",color:6839382},{id:"garage",name:"MOTOR GARAGE",kind:"property",district:"docks",x:711,y:874,w:177,h:170,tag:"GARAGE",color:5398374,cost:4e3},{id:"depot",name:"FREIGHT DEPOT",kind:"mission",district:"docks",x:1175,y:856,w:210,h:172,tag:"DELIVERY MISSIONS",color:6710355},{id:"safehouse",name:"THE HIDEOUT",kind:"safehouse",district:"industrial",x:1660,y:850,w:180,h:168,tag:"LAY LOW",color:5136985},{id:"laundry",name:"BACKSTREET",kind:"contact",district:"south",x:174,y:1092,w:210,h:140,tag:"NEIGHBORHOOD",color:6252117},{id:"terminal",name:"TERMINAL 09",kind:"mission",district:"industrial",x:1653,y:1080,w:195,h:142,tag:"HIGH STAKES",color:7298651}],Ur=[{id:"marcus",name:"MARCUS",personality:"cautious",district:"old",x:430,y:310,tier:1,style:"The regular",color:8049085,preferred:"ember"},{id:"ivy",name:"IVY",personality:"friendly",district:"old",x:510,y:445,tier:1,style:"The connector",color:16760719,preferred:"ember"},{id:"theo",name:"THEO",personality:"impatient",district:"old",x:314,y:700,tier:1,style:"The night owl",color:11379701,preferred:"ember"},{id:"raya",name:"RAYA",personality:"friendly",district:"neon",x:920,y:354,tier:2,style:"The trendsetter",color:15834834,preferred:"velvet"},{id:"jules",name:"JULES",personality:"cautious",district:"neon",x:1110,y:715,tier:2,style:"The hustler",color:16373374,preferred:"velvet"},{id:"asher",name:"ASHER",personality:"impatient",district:"neon",x:680,y:746,tier:2,style:"The regular",color:8243695,preferred:"ember"},{id:"lena",name:"LENA",personality:"cautious",district:"heights",x:1595,y:336,tier:3,style:"The collector",color:15116762,preferred:"chromatic"},{id:"milo",name:"MILO",personality:"friendly",district:"heights",x:1489,y:600,tier:3,style:"The VIP",color:11194280,preferred:"velvet"},{id:"juno",name:"JUNO",personality:"impatient",district:"south",x:490,y:1040,tier:2,style:"The runner",color:16757117,preferred:"ember"},{id:"nova",name:"NOVA",personality:"friendly",district:"south",x:440,y:1110,tier:2,style:"The connector",color:11643371,preferred:"velvet"},{id:"dex",name:"DEX",personality:"cautious",district:"docks",x:920,y:1080,tier:3,style:"The fixer",color:8250584,preferred:"chromatic"},{id:"sable",name:"SABLE",personality:"impatient",district:"docks",x:1090,y:845,tier:3,style:"The operator",color:15247020,preferred:"chromatic"},{id:"rio",name:"RIO",personality:"friendly",district:"industrial",x:1475,y:1112,tier:4,style:"The legend",color:16374419,preferred:"nova"},{id:"echo",name:"ECHO",personality:"cautious",district:"industrial",x:1510,y:795,tier:4,style:"The ghost",color:9283314,preferred:"nova"}],lc=[{id:"apartment",name:"The Flat",cost:0,capacity:18,desc:"Your starter apartment. Small but yours.",bonus:"Home base"},{id:"lot",name:"Old Warehouse",cost:1400,capacity:45,desc:"More room for a growing operation.",bonus:"+27 storage slots"},{id:"garage",name:"Motor Garage",cost:4e3,capacity:85,desc:"A base for a larger crew.",bonus:"+40 storage slots"},{id:"office",name:"Private Office",cost:7800,capacity:140,desc:"Command your operations in style.",bonus:"+55 storage slots"},{id:"penthouse",name:"Glass Tower",cost:32e3,capacity:250,desc:"The city looks different from up here.",bonus:"+110 storage slots"}],f_=[[1,"STREET RUNNER"],[3,"LOCAL DEALER"],[6,"NEIGHBORHOOD BOSS"],[10,"KINGPIN"],[16,"CITY LEGEND"],[24,"UNDERWORLD ICON"]];function $u(s){var e;return((e=[...f_].reverse().find(([t])=>s>=t))==null?void 0:e[1])||"STREET RUNNER"}function h_(s){return Math.max(1,Math.floor(Math.sqrt(Math.max(0,s)/90))+1)}function p_(s){return 90*s*s}const Cg="cartel-city-save-v1",so=s=>Math.max(0,Math.round(s)),wm=s=>s[Math.floor(Math.random()*s.length)],$t=s=>"$"+Math.round(s||0).toLocaleString("en-US"),sa=s=>lc.filter(e=>s.properties.includes(e.id)).reduce((e,t)=>e+t.capacity,0),oa=s=>Object.values(s.stock).reduce((e,t)=>e+t,0),ua=s=>h_(s.xp),oo=(s,e,t="retail",r="old")=>{const a=typeof e=="string"?yi.find(f=>f.id===e):e;if(!a)return 0;const l=In.find(f=>f.id===r)||In[0],u=s.market[a.id]||1;return Math.max(1,so((t==="wholesale"?a.wholesale:a.retail)*u*(t==="wholesale"?1:l.demand)))},li=(s,e,t="NEWS")=>{s.logs.unshift({id:s.serial++,message:e,tag:t,time:s.elapsed}),s.logs=s.logs.slice(0,45)};function Fd(){const s=Date.now();return{version:1,seed:Math.floor(Math.random()*999999),cash:500,xp:0,heat:8,rep:2,day:1,elapsed:0,stock:{ember:6,velvet:0,chromatic:0,nova:0},market:{ember:1,velvet:1,chromatic:1,nova:1},contacts:{},properties:["apartment"],workers:[],territory:{old:18,neon:0,heights:0,south:0,docks:0,industrial:0},deals:0,earned:0,missionsDone:0,missions:[],mission:null,missionSerial:1,logs:[{id:1,tag:"WELCOME",message:"Welcome to Cartel City. Find Marcus or Ivy to make your first deal.",time:0}],cooldown:0,serial:2,lastSaved:s,player:{x:410,y:320},weather:"CLEAR",event:"QUIET STREETS"}}function m_(s=globalThis.localStorage){try{const e=JSON.parse(s.getItem(Cg)||"null");if(!e||e.version!==1||typeof e.cash!="number"||!e.player)return Fd();const t=Math.min(100,Math.max(0,Math.floor((Date.now()-(e.lastSaved||Date.now()))/1e3)));return t?bg(e,t):e}catch{return Fd()}}function Zu(s,e=globalThis.localStorage){try{return e.setItem(Cg,JSON.stringify({...s,lastSaved:Date.now()})),!0}catch{return!1}}function Ql(s,e,t){var u;const r=yi.find(f=>f.id===t);if(!r)return 0;const a=((u=s.contacts[e.id])==null?void 0:u.trust)||25,l=e.preferred===r.id?1.18:1;return so(oo(s,r,"retail",e.district)*l*(1+a/500))}function hs(s,e){var t;return ua(s)>=(((t=In.find(r=>r.id===e))==null?void 0:t.unlock)||1)}function bg(s,e=1){const t=structuredClone(s);let r=Math.min(120,Math.max(0,Math.floor(e)));for(;r--;){if(t.elapsed+=1,t.day=1+Math.floor(t.elapsed/260),t.heat>0&&t.elapsed%7===0&&(t.heat=Math.max(0,t.heat-1)),t.cooldown>0&&(t.cooldown=Math.max(0,t.cooldown-1)),t.elapsed%21===0){for(const a of t.workers)if(t.stock.ember>0){t.stock.ember-=1;const l=so(oo(t,"ember","retail",a.district)*.57);t.cash+=l,t.earned+=l,t.xp+=6,t.heat=Math.min(100,t.heat+Math.ceil(Math.random()*2)),a.earned+=l,Math.random()<.05&&li(t,a.name+" completed an NPC order. +"+$t(l),"CREW")}}if(t.elapsed%42===0){const a=wm(yi),l=.82+Math.random()*.38;t.market[a.id]=Math.round(Math.min(1.65,Math.max(.66,t.market[a.id]*l))*100)/100}if(t.elapsed%155===0){const l=wm([{name:"NEON MILE AFTER DARK",message:"Night crowds increase demand near Neon Mile.",kind:"BOOM"},{name:"STREET CHECKPOINTS",message:"Patrols have intensified across the city.",kind:"HEAT"},{name:"MARKET SHORTAGE",message:"The underworld exchange reports tighter supplies.",kind:"MARKET"},{name:"THE CITY BREATHES",message:"A quiet hour gives every crew room to regroup.",kind:"CALM"},{name:"RIVAL MOVEMENT",message:"Rival crews are testing territorial boundaries.",kind:"RIVAL"}]);if(t.event=l.name,li(t,l.message,"CITY EVENT"),l.kind==="HEAT"&&(t.heat=Math.min(100,t.heat+8)),l.kind==="CALM"&&(t.heat=Math.max(0,t.heat-10)),l.kind==="MARKET")for(const u of Object.keys(t.market))t.market[u]=Math.min(1.65,t.market[u]*1.1)}if(t.heat>=88&&t.cooldown===0){const a=so(t.cash*.22);t.cash=Math.max(0,t.cash-a),t.heat=47,t.cooldown=55,li(t,"CITY CRACKDOWN: A raid cost your crew "+$t(a)+". Operations are disrupted.","POLICE")}}return t}function Xt(s){throw new Error(s)}function g_(s,e){var a;const t=structuredClone(s);let r="";switch(e.type){case"buy":{const l=yi.find(m=>m.id===e.product),u=Number(e.quantity);(!l||!Number.isSafeInteger(u)||u<1||u>30)&&Xt("Choose a quantity between 1 and 30."),ua(t)<l.unlock&&Xt("Unlock this product at level "+l.unlock+"."),oa(t)+u>sa(t)&&Xt("Not enough storage space. Upgrade your property.");const f=oo(t,l,"wholesale")*u;t.cash<f&&Xt("Not enough cash for this purchase."),t.cash-=f,t.stock[l.id]+=u,t.xp+=u*2,t.heat=Math.min(100,t.heat+Math.ceil(u/7)),r="Purchased "+u+" × "+l.name+" for "+$t(f)+".",li(t,r,"SUPPLY");break}case"deal":{const l=Ur.find(S=>S.id===e.npc),u=yi.find(S=>S.id===e.product);(!l||!u)&&Xt("Contact or item not found."),hs(t,l.district)||Xt("This district is locked. Increase your reputation first.");const f=Number(e.quantity||1);(!Number.isSafeInteger(f)||f<1||f>3)&&Xt("Each meeting allows 1–3 units."),(t.stock[u.id]||0)<f&&Xt("You do not have enough stock.");const m=t.contacts[l.id]||{trust:25,lastDeal:-1e3};t.elapsed-m.lastDeal<12&&Xt(l.name+" needs some time before another meeting.");const h=Ql(t,l,u.id),v=Number(e.ask);(!Number.isFinite(v)||v<1||v>5e3)&&Xt("Enter a valid offer.");const _=l.personality==="friendly"?.13:l.personality==="impatient"?-.06:0,x=Math.min(.97,Math.max(.08,.78+(m.trust-25)*.004+_-(v/h-1)*.85-(u.id!==l.preferred?.13:0)-(t.heat>65?.12:0)));if(m.lastDeal=t.elapsed,Math.random()<=x){const S=so(v*f);t.cash+=S,t.stock[u.id]-=f,t.deals+=1,t.earned+=S,t.xp+=30+f*10,t.rep+=2,t.heat=Math.min(100,t.heat+2+f*2+Math.ceil((((a=In.find(w=>w.id===l.district))==null?void 0:a.risk)||10)/35)),m.trust=Math.min(100,m.trust+4),r=l.name+" accepted your offer. +"+$t(S),li(t,r,"DEAL")}else m.trust=Math.max(0,m.trust-3),t.heat=Math.min(100,t.heat+1),r=l.name+" turned down your offer. Try another price later.",li(t,r,"REJECTED");t.contacts[l.id]=m;break}case"property":{const l=lc.find(u=>u.id===e.id);l||Xt("Unknown property."),t.properties.includes(l.id)&&Xt("You already own this property."),t.cash<l.cost&&Xt("Not enough cash."),t.cash-=l.cost,t.properties.push(l.id),t.xp+=180,r="Acquired "+l.name+". Your storage capacity increased.",li(t,r,"PROPERTY");break}case"hire":{const l=In.find(v=>v.id===e.district)||In[0];hs(t,l.id)||Xt("This district is still locked.");const u=1+t.properties.length*2;t.workers.length>=u&&Xt("Your properties can only support "+u+" crew members.");const f=350+t.workers.length*220;t.cash<f&&Xt("Not enough cash. Recruitment costs "+$t(f)+"."),t.cash-=f;const m=["KAI","GHOST","MASON","SKYE","ROOK","ACE","ONYX","JAX","REMI","BLAZE"],h=m[t.workers.length%m.length];t.workers.push({id:t.serial++,name:h,district:l.id,earned:0}),t.xp+=55,r=h+" joined your crew in "+l.short+". Workers use Blue Ember stock to complete fictional NPC orders.",li(t,r,"CREW");break}case"territory":{const l=In.find(h=>h.id===e.id);l||Xt("Unknown territory."),hs(t,l.id)||Xt("Unlock this district at level "+l.unlock+".");const u=t.territory[l.id]||0;u>=100&&Xt("You already control this district.");const f=90+Math.floor(u/20)*75;t.cash<f&&Xt("You need "+$t(f)+" to organize a territory challenge."),t.cash-=f;const m=Math.max(.35,Math.min(.93,.86-l.risk/180+ua(t)/80));if(Math.random()<m){const h=14+Math.floor(Math.random()*13);t.territory[l.id]=Math.min(100,u+h),t.xp+=80,t.rep+=8,t.heat=Math.min(100,t.heat+7),r="Territory secured! "+l.short+" control +"+h+"%."}else t.heat=Math.min(100,t.heat+12),r="Your rivals held the block. Heat is rising.";li(t,r,"TERRITORY");break}case"missionStart":{t.mission&&Xt("Finish the current mission first.");const l=Li.filter(m=>m.kind==="mission"||m.kind==="contact"||m.kind==="safehouse"),u=l[Math.floor(Math.random()*l.length)],f=175+ua(t)*35;t.mission={id:t.missionSerial++,target:u.id,title:"NIGHT DELIVERY",reward:f},r="New mission: reach "+u.name+" to finish the run. Reward: "+$t(f)+".",li(t,r,"MISSION");break}case"visit":{const l=Li.find(u=>u.id===e.id);l||Xt("Unknown building."),t.mission&&t.mission.target===l.id?(t.cash+=t.mission.reward,t.earned+=t.mission.reward,t.xp+=95,t.rep+=5,t.heat=Math.min(100,t.heat+7),t.missionsDone++,r="Delivery completed. +"+$t(t.mission.reward)+" and +95 XP.",li(t,r,"MISSION"),t.mission=null):r="Arrived at "+l.name+".";break}case"laylow":{t.heat<5&&Xt("The streets are already quiet.");const l=Math.min(t.cash,Math.ceil(t.heat*1.2));t.cash-=l,t.heat=Math.max(0,t.heat-32),r="You kept a low profile and reduced heat. Cost: "+$t(l)+".",li(t,r,"LOW PROFILE");break}case"travel":{const l=Number(e.x),u=Number(e.y);return Number.isFinite(l)&&Number.isFinite(u)&&(t.player={x:Math.max(0,Math.min(1920,l)),y:Math.max(0,Math.min(1320,u))}),{state:t,message:""}}default:Xt("Unknown action.")}return t.lastSaved=Date.now(),{state:t,message:r}}function v_(s){return so(s.cash+yi.reduce((e,t)=>e+(s.stock[t.id]||0)*oo(s,t,"wholesale"),0)+s.properties.reduce((e,t)=>{var r;return e+(((r=lc.find(a=>a.id===t))==null?void 0:r.cost)||0)},0))}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const bf="180",__=0,Am=1,x_=2,Pg=1,Lg=2,rr=3,zr=0,jn=1,Di=2,Or=0,io=1,Rm=2,Cm=3,bm=4,y_=5,ds=100,S_=101,E_=102,M_=103,T_=104,w_=200,A_=201,R_=202,C_=203,Od=204,kd=205,b_=206,P_=207,L_=208,N_=209,I_=210,D_=211,U_=212,F_=213,O_=214,zd=0,Bd=1,Hd=2,ao=3,Vd=4,Gd=5,Wd=6,jd=7,Ng=0,k_=1,z_=2,kr=0,B_=1,H_=2,V_=3,Ig=4,G_=5,W_=6,j_=7,Dg=300,lo=301,co=302,Xd=303,Yd=304,cc=306,qd=1e3,ps=1001,Kd=1002,Mi=1003,X_=1004,bl=1005,Ui=1006,Qu=1007,ms=1008,ki=1009,Ug=1010,Fg=1011,ha=1012,Pf=1013,vs=1014,or=1015,_a=1016,Lf=1017,Nf=1018,pa=1020,Og=35902,kg=35899,zg=1021,Bg=1022,Ei=1023,ma=1026,ga=1027,Hg=1028,If=1029,Vg=1030,Df=1031,Uf=1033,Jl=33776,ec=33777,tc=33778,nc=33779,$d=35840,Zd=35841,Qd=35842,Jd=35843,ef=36196,tf=37492,nf=37496,rf=37808,sf=37809,of=37810,af=37811,lf=37812,cf=37813,uf=37814,df=37815,ff=37816,hf=37817,pf=37818,mf=37819,gf=37820,vf=37821,_f=36492,xf=36494,yf=36495,Sf=36283,Ef=36284,Mf=36285,Tf=36286,Y_=3200,q_=3201,Gg=0,K_=1,Fr="",Wn="srgb",uo="srgb-linear",rc="linear",Ft="srgb",Hs=7680,Pm=519,$_=512,Z_=513,Q_=514,Wg=515,J_=516,ex=517,tx=518,nx=519,Lm=35044,Nm="300 es",Fi=2e3,sc=2001;class ho{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){const r=this._listeners;if(r===void 0)return;const a=r[e];if(a!==void 0){const l=a.indexOf(t);l!==-1&&a.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const r=t[e.type];if(r!==void 0){e.target=this;const a=r.slice(0);for(let l=0,u=a.length;l<u;l++)a[l].call(this,e);e.target=null}}}const wn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ju=Math.PI/180,wf=180/Math.PI;function xa(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(wn[s&255]+wn[s>>8&255]+wn[s>>16&255]+wn[s>>24&255]+"-"+wn[e&255]+wn[e>>8&255]+"-"+wn[e>>16&15|64]+wn[e>>24&255]+"-"+wn[t&63|128]+wn[t>>8&255]+"-"+wn[t>>16&255]+wn[t>>24&255]+wn[r&255]+wn[r>>8&255]+wn[r>>16&255]+wn[r>>24&255]).toLowerCase()}function wt(s,e,t){return Math.max(e,Math.min(t,s))}function ix(s,e){return(s%e+e)%e}function ed(s,e,t){return(1-t)*s+t*e}function Ko(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Gn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class Mt{constructor(e=0,t=0){Mt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,a=e.elements;return this.x=a[0]*t+a[3]*r+a[6],this.y=a[1]*t+a[4]*r+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=wt(this.x,e.x,t.x),this.y=wt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=wt(this.x,e,t),this.y=wt(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(wt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(wt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),a=Math.sin(t),l=this.x-e.x,u=this.y-e.y;return this.x=l*r-u*a+e.x,this.y=l*a+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ya{constructor(e=0,t=0,r=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=a}static slerpFlat(e,t,r,a,l,u,f){let m=r[a+0],h=r[a+1],v=r[a+2],_=r[a+3];const x=l[u+0],S=l[u+1],w=l[u+2],b=l[u+3];if(f===0){e[t+0]=m,e[t+1]=h,e[t+2]=v,e[t+3]=_;return}if(f===1){e[t+0]=x,e[t+1]=S,e[t+2]=w,e[t+3]=b;return}if(_!==b||m!==x||h!==S||v!==w){let y=1-f;const g=m*x+h*S+v*w+_*b,N=g>=0?1:-1,I=1-g*g;if(I>Number.EPSILON){const H=Math.sqrt(I),O=Math.atan2(H,g*N);y=Math.sin(y*O)/H,f=Math.sin(f*O)/H}const C=f*N;if(m=m*y+x*C,h=h*y+S*C,v=v*y+w*C,_=_*y+b*C,y===1-f){const H=1/Math.sqrt(m*m+h*h+v*v+_*_);m*=H,h*=H,v*=H,_*=H}}e[t]=m,e[t+1]=h,e[t+2]=v,e[t+3]=_}static multiplyQuaternionsFlat(e,t,r,a,l,u){const f=r[a],m=r[a+1],h=r[a+2],v=r[a+3],_=l[u],x=l[u+1],S=l[u+2],w=l[u+3];return e[t]=f*w+v*_+m*S-h*x,e[t+1]=m*w+v*x+h*_-f*S,e[t+2]=h*w+v*S+f*x-m*_,e[t+3]=v*w-f*_-m*x-h*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,a){return this._x=e,this._y=t,this._z=r,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,a=e._y,l=e._z,u=e._order,f=Math.cos,m=Math.sin,h=f(r/2),v=f(a/2),_=f(l/2),x=m(r/2),S=m(a/2),w=m(l/2);switch(u){case"XYZ":this._x=x*v*_+h*S*w,this._y=h*S*_-x*v*w,this._z=h*v*w+x*S*_,this._w=h*v*_-x*S*w;break;case"YXZ":this._x=x*v*_+h*S*w,this._y=h*S*_-x*v*w,this._z=h*v*w-x*S*_,this._w=h*v*_+x*S*w;break;case"ZXY":this._x=x*v*_-h*S*w,this._y=h*S*_+x*v*w,this._z=h*v*w+x*S*_,this._w=h*v*_-x*S*w;break;case"ZYX":this._x=x*v*_-h*S*w,this._y=h*S*_+x*v*w,this._z=h*v*w-x*S*_,this._w=h*v*_+x*S*w;break;case"YZX":this._x=x*v*_+h*S*w,this._y=h*S*_+x*v*w,this._z=h*v*w-x*S*_,this._w=h*v*_-x*S*w;break;case"XZY":this._x=x*v*_-h*S*w,this._y=h*S*_-x*v*w,this._z=h*v*w+x*S*_,this._w=h*v*_+x*S*w;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,a=Math.sin(r);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],a=t[4],l=t[8],u=t[1],f=t[5],m=t[9],h=t[2],v=t[6],_=t[10],x=r+f+_;if(x>0){const S=.5/Math.sqrt(x+1);this._w=.25/S,this._x=(v-m)*S,this._y=(l-h)*S,this._z=(u-a)*S}else if(r>f&&r>_){const S=2*Math.sqrt(1+r-f-_);this._w=(v-m)/S,this._x=.25*S,this._y=(a+u)/S,this._z=(l+h)/S}else if(f>_){const S=2*Math.sqrt(1+f-r-_);this._w=(l-h)/S,this._x=(a+u)/S,this._y=.25*S,this._z=(m+v)/S}else{const S=2*Math.sqrt(1+_-r-f);this._w=(u-a)/S,this._x=(l+h)/S,this._y=(m+v)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(wt(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const a=Math.min(1,t/r);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,a=e._y,l=e._z,u=e._w,f=t._x,m=t._y,h=t._z,v=t._w;return this._x=r*v+u*f+a*h-l*m,this._y=a*v+u*m+l*f-r*h,this._z=l*v+u*h+r*m-a*f,this._w=u*v-r*f-a*m-l*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const r=this._x,a=this._y,l=this._z,u=this._w;let f=u*e._w+r*e._x+a*e._y+l*e._z;if(f<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,f=-f):this.copy(e),f>=1)return this._w=u,this._x=r,this._y=a,this._z=l,this;const m=1-f*f;if(m<=Number.EPSILON){const S=1-t;return this._w=S*u+t*this._w,this._x=S*r+t*this._x,this._y=S*a+t*this._y,this._z=S*l+t*this._z,this.normalize(),this}const h=Math.sqrt(m),v=Math.atan2(h,f),_=Math.sin((1-t)*v)/h,x=Math.sin(t*v)/h;return this._w=u*_+this._w*x,this._x=r*_+this._x*x,this._y=a*_+this._y*x,this._z=l*_+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),a=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(a*Math.sin(e),a*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Z{constructor(e=0,t=0,r=0){Z.prototype.isVector3=!0,this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Im.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Im.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,a=this.z,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6]*a,this.y=l[1]*t+l[4]*r+l[7]*a,this.z=l[2]*t+l[5]*r+l[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,a=this.z,l=e.elements,u=1/(l[3]*t+l[7]*r+l[11]*a+l[15]);return this.x=(l[0]*t+l[4]*r+l[8]*a+l[12])*u,this.y=(l[1]*t+l[5]*r+l[9]*a+l[13])*u,this.z=(l[2]*t+l[6]*r+l[10]*a+l[14])*u,this}applyQuaternion(e){const t=this.x,r=this.y,a=this.z,l=e.x,u=e.y,f=e.z,m=e.w,h=2*(u*a-f*r),v=2*(f*t-l*a),_=2*(l*r-u*t);return this.x=t+m*h+u*_-f*v,this.y=r+m*v+f*h-l*_,this.z=a+m*_+l*v-u*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,a=this.z,l=e.elements;return this.x=l[0]*t+l[4]*r+l[8]*a,this.y=l[1]*t+l[5]*r+l[9]*a,this.z=l[2]*t+l[6]*r+l[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=wt(this.x,e.x,t.x),this.y=wt(this.y,e.y,t.y),this.z=wt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=wt(this.x,e,t),this.y=wt(this.y,e,t),this.z=wt(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(wt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,a=e.y,l=e.z,u=t.x,f=t.y,m=t.z;return this.x=a*m-l*f,this.y=l*u-r*m,this.z=r*f-a*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return td.copy(this).projectOnVector(e),this.sub(td)}reflect(e){return this.sub(td.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(wt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,a=this.z-e.z;return t*t+r*r+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const a=Math.sin(t)*e;return this.x=a*Math.sin(r),this.y=Math.cos(t)*e,this.z=a*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const td=new Z,Im=new ya;class gt{constructor(e,t,r,a,l,u,f,m,h){gt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,a,l,u,f,m,h)}set(e,t,r,a,l,u,f,m,h){const v=this.elements;return v[0]=e,v[1]=a,v[2]=f,v[3]=t,v[4]=l,v[5]=m,v[6]=r,v[7]=u,v[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,a=t.elements,l=this.elements,u=r[0],f=r[3],m=r[6],h=r[1],v=r[4],_=r[7],x=r[2],S=r[5],w=r[8],b=a[0],y=a[3],g=a[6],N=a[1],I=a[4],C=a[7],H=a[2],O=a[5],k=a[8];return l[0]=u*b+f*N+m*H,l[3]=u*y+f*I+m*O,l[6]=u*g+f*C+m*k,l[1]=h*b+v*N+_*H,l[4]=h*y+v*I+_*O,l[7]=h*g+v*C+_*k,l[2]=x*b+S*N+w*H,l[5]=x*y+S*I+w*O,l[8]=x*g+S*C+w*k,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],a=e[2],l=e[3],u=e[4],f=e[5],m=e[6],h=e[7],v=e[8];return t*u*v-t*f*h-r*l*v+r*f*m+a*l*h-a*u*m}invert(){const e=this.elements,t=e[0],r=e[1],a=e[2],l=e[3],u=e[4],f=e[5],m=e[6],h=e[7],v=e[8],_=v*u-f*h,x=f*m-v*l,S=h*l-u*m,w=t*_+r*x+a*S;if(w===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/w;return e[0]=_*b,e[1]=(a*h-v*r)*b,e[2]=(f*r-a*u)*b,e[3]=x*b,e[4]=(v*t-a*m)*b,e[5]=(a*l-f*t)*b,e[6]=S*b,e[7]=(r*m-h*t)*b,e[8]=(u*t-r*l)*b,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,a,l,u,f){const m=Math.cos(l),h=Math.sin(l);return this.set(r*m,r*h,-r*(m*u+h*f)+u+e,-a*h,a*m,-a*(-h*u+m*f)+f+t,0,0,1),this}scale(e,t){return this.premultiply(nd.makeScale(e,t)),this}rotate(e){return this.premultiply(nd.makeRotation(-e)),this}translate(e,t){return this.premultiply(nd.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let a=0;a<9;a++)if(t[a]!==r[a])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const nd=new gt;function jg(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function oc(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function rx(){const s=oc("canvas");return s.style.display="block",s}const Dm={};function va(s){s in Dm||(Dm[s]=!0,console.warn(s))}function sx(s,e,t){return new Promise(function(r,a){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:a();break;case s.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:r()}}setTimeout(l,t)})}const Um=new gt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Fm=new gt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ox(){const s={enabled:!0,workingColorSpace:uo,spaces:{},convert:function(a,l,u){return this.enabled===!1||l===u||!l||!u||(this.spaces[l].transfer===Ft&&(a.r=ar(a.r),a.g=ar(a.g),a.b=ar(a.b)),this.spaces[l].primaries!==this.spaces[u].primaries&&(a.applyMatrix3(this.spaces[l].toXYZ),a.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Ft&&(a.r=ro(a.r),a.g=ro(a.g),a.b=ro(a.b))),a},workingToColorSpace:function(a,l){return this.convert(a,this.workingColorSpace,l)},colorSpaceToWorking:function(a,l){return this.convert(a,l,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===Fr?rc:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,l=this.workingColorSpace){return a.fromArray(this.spaces[l].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,l,u){return a.copy(this.spaces[l].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,l){return va("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(a,l)},toWorkingColorSpace:function(a,l){return va("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(a,l)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[uo]:{primaries:e,whitePoint:r,transfer:rc,toXYZ:Um,fromXYZ:Fm,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Wn},outputColorSpaceConfig:{drawingBufferColorSpace:Wn}},[Wn]:{primaries:e,whitePoint:r,transfer:Ft,toXYZ:Um,fromXYZ:Fm,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Wn}}}),s}const Pt=ox();function ar(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ro(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Vs;class ax{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Vs===void 0&&(Vs=oc("canvas")),Vs.width=e.width,Vs.height=e.height;const a=Vs.getContext("2d");e instanceof ImageData?a.putImageData(e,0,0):a.drawImage(e,0,0,e.width,e.height),r=Vs}return r.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=oc("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const a=r.getImageData(0,0,e.width,e.height),l=a.data;for(let u=0;u<l.length;u++)l[u]=ar(l[u]/255)*255;return r.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(ar(t[r]/255)*255):t[r]=ar(t[r]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let lx=0;class Ff{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:lx++}),this.uuid=xa(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},a=this.data;if(a!==null){let l;if(Array.isArray(a)){l=[];for(let u=0,f=a.length;u<f;u++)a[u].isDataTexture?l.push(id(a[u].image)):l.push(id(a[u]))}else l=id(a);r.url=l}return t||(e.images[this.uuid]=r),r}}function id(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?ax.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let cx=0;const rd=new Z;class Dn extends ho{constructor(e=Dn.DEFAULT_IMAGE,t=Dn.DEFAULT_MAPPING,r=ps,a=ps,l=Ui,u=ms,f=Ei,m=ki,h=Dn.DEFAULT_ANISOTROPY,v=Fr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:cx++}),this.uuid=xa(),this.name="",this.source=new Ff(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=l,this.minFilter=u,this.anisotropy=h,this.format=f,this.internalFormat=null,this.type=m,this.offset=new Mt(0,0),this.repeat=new Mt(1,1),this.center=new Mt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new gt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(rd).x}get height(){return this.source.getSize(rd).y}get depth(){return this.source.getSize(rd).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const r=e[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}a&&r&&a.isVector2&&r.isVector2||a&&r&&a.isVector3&&r.isVector3||a&&r&&a.isMatrix3&&r.isMatrix3?a.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Dg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case qd:e.x=e.x-Math.floor(e.x);break;case ps:e.x=e.x<0?0:1;break;case Kd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case qd:e.y=e.y-Math.floor(e.y);break;case ps:e.y=e.y<0?0:1;break;case Kd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Dn.DEFAULT_IMAGE=null;Dn.DEFAULT_MAPPING=Dg;Dn.DEFAULT_ANISOTROPY=1;class Ot{constructor(e=0,t=0,r=0,a=1){Ot.prototype.isVector4=!0,this.x=e,this.y=t,this.z=r,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,a){return this.x=e,this.y=t,this.z=r,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,a=this.z,l=this.w,u=e.elements;return this.x=u[0]*t+u[4]*r+u[8]*a+u[12]*l,this.y=u[1]*t+u[5]*r+u[9]*a+u[13]*l,this.z=u[2]*t+u[6]*r+u[10]*a+u[14]*l,this.w=u[3]*t+u[7]*r+u[11]*a+u[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,a,l;const m=e.elements,h=m[0],v=m[4],_=m[8],x=m[1],S=m[5],w=m[9],b=m[2],y=m[6],g=m[10];if(Math.abs(v-x)<.01&&Math.abs(_-b)<.01&&Math.abs(w-y)<.01){if(Math.abs(v+x)<.1&&Math.abs(_+b)<.1&&Math.abs(w+y)<.1&&Math.abs(h+S+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const I=(h+1)/2,C=(S+1)/2,H=(g+1)/2,O=(v+x)/4,k=(_+b)/4,G=(w+y)/4;return I>C&&I>H?I<.01?(r=0,a=.707106781,l=.707106781):(r=Math.sqrt(I),a=O/r,l=k/r):C>H?C<.01?(r=.707106781,a=0,l=.707106781):(a=Math.sqrt(C),r=O/a,l=G/a):H<.01?(r=.707106781,a=.707106781,l=0):(l=Math.sqrt(H),r=k/l,a=G/l),this.set(r,a,l,t),this}let N=Math.sqrt((y-w)*(y-w)+(_-b)*(_-b)+(x-v)*(x-v));return Math.abs(N)<.001&&(N=1),this.x=(y-w)/N,this.y=(_-b)/N,this.z=(x-v)/N,this.w=Math.acos((h+S+g-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=wt(this.x,e.x,t.x),this.y=wt(this.y,e.y,t.y),this.z=wt(this.z,e.z,t.z),this.w=wt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=wt(this.x,e,t),this.y=wt(this.y,e,t),this.z=wt(this.z,e,t),this.w=wt(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(wt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ux extends ho{constructor(e=1,t=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ui,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=r.depth,this.scissor=new Ot(0,0,e,t),this.scissorTest=!1,this.viewport=new Ot(0,0,e,t);const a={width:e,height:t,depth:r.depth},l=new Dn(a);this.textures=[];const u=r.count;for(let f=0;f<u;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const t={minFilter:Ui,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let a=0,l=this.textures.length;a<l;a++)this.textures[a].image.width=e,this.textures[a].image.height=t,this.textures[a].image.depth=r,this.textures[a].isArrayTexture=this.textures[a].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,r=e.textures.length;t<r;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const a=Object.assign({},e.textures[t].image);this.textures[t].source=new Ff(a)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class _s extends ux{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class Xg extends Dn{constructor(e=null,t=1,r=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:a},this.magFilter=Mi,this.minFilter=Mi,this.wrapR=ps,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class dx extends Dn{constructor(e=null,t=1,r=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:a},this.magFilter=Mi,this.minFilter=Mi,this.wrapR=ps,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Sa{constructor(e=new Z(1/0,1/0,1/0),t=new Z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(vi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(vi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=vi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let u=0,f=l.count;u<f;u++)e.isMesh===!0?e.getVertexPosition(u,vi):vi.fromBufferAttribute(l,u),vi.applyMatrix4(e.matrixWorld),this.expandByPoint(vi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Pl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Pl.copy(r.boundingBox)),Pl.applyMatrix4(e.matrixWorld),this.union(Pl)}const a=e.children;for(let l=0,u=a.length;l<u;l++)this.expandByObject(a[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,vi),vi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter($o),Ll.subVectors(this.max,$o),Gs.subVectors(e.a,$o),Ws.subVectors(e.b,$o),js.subVectors(e.c,$o),Rr.subVectors(Ws,Gs),Cr.subVectors(js,Ws),ns.subVectors(Gs,js);let t=[0,-Rr.z,Rr.y,0,-Cr.z,Cr.y,0,-ns.z,ns.y,Rr.z,0,-Rr.x,Cr.z,0,-Cr.x,ns.z,0,-ns.x,-Rr.y,Rr.x,0,-Cr.y,Cr.x,0,-ns.y,ns.x,0];return!sd(t,Gs,Ws,js,Ll)||(t=[1,0,0,0,1,0,0,0,1],!sd(t,Gs,Ws,js,Ll))?!1:(Nl.crossVectors(Rr,Cr),t=[Nl.x,Nl.y,Nl.z],sd(t,Gs,Ws,js,Ll))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,vi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(vi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Zi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Zi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Zi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Zi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Zi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Zi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Zi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Zi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Zi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Zi=[new Z,new Z,new Z,new Z,new Z,new Z,new Z,new Z],vi=new Z,Pl=new Sa,Gs=new Z,Ws=new Z,js=new Z,Rr=new Z,Cr=new Z,ns=new Z,$o=new Z,Ll=new Z,Nl=new Z,is=new Z;function sd(s,e,t,r,a){for(let l=0,u=s.length-3;l<=u;l+=3){is.fromArray(s,l);const f=a.x*Math.abs(is.x)+a.y*Math.abs(is.y)+a.z*Math.abs(is.z),m=e.dot(is),h=t.dot(is),v=r.dot(is);if(Math.max(-Math.max(m,h,v),Math.min(m,h,v))>f)return!1}return!0}const fx=new Sa,Zo=new Z,od=new Z;class Of{constructor(e=new Z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):fx.setFromPoints(e).getCenter(r);let a=0;for(let l=0,u=e.length;l<u;l++)a=Math.max(a,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Zo.subVectors(e,this.center);const t=Zo.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),a=(r-this.radius)*.5;this.center.addScaledVector(Zo,a/r),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(od.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Zo.copy(e.center).add(od)),this.expandByPoint(Zo.copy(e.center).sub(od))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Qi=new Z,ad=new Z,Il=new Z,br=new Z,ld=new Z,Dl=new Z,cd=new Z;class hx{constructor(e=new Z,t=new Z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Qi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Qi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Qi.copy(this.origin).addScaledVector(this.direction,t),Qi.distanceToSquared(e))}distanceSqToSegment(e,t,r,a){ad.copy(e).add(t).multiplyScalar(.5),Il.copy(t).sub(e).normalize(),br.copy(this.origin).sub(ad);const l=e.distanceTo(t)*.5,u=-this.direction.dot(Il),f=br.dot(this.direction),m=-br.dot(Il),h=br.lengthSq(),v=Math.abs(1-u*u);let _,x,S,w;if(v>0)if(_=u*m-f,x=u*f-m,w=l*v,_>=0)if(x>=-w)if(x<=w){const b=1/v;_*=b,x*=b,S=_*(_+u*x+2*f)+x*(u*_+x+2*m)+h}else x=l,_=Math.max(0,-(u*x+f)),S=-_*_+x*(x+2*m)+h;else x=-l,_=Math.max(0,-(u*x+f)),S=-_*_+x*(x+2*m)+h;else x<=-w?(_=Math.max(0,-(-u*l+f)),x=_>0?-l:Math.min(Math.max(-l,-m),l),S=-_*_+x*(x+2*m)+h):x<=w?(_=0,x=Math.min(Math.max(-l,-m),l),S=x*(x+2*m)+h):(_=Math.max(0,-(u*l+f)),x=_>0?l:Math.min(Math.max(-l,-m),l),S=-_*_+x*(x+2*m)+h);else x=u>0?-l:l,_=Math.max(0,-(u*x+f)),S=-_*_+x*(x+2*m)+h;return r&&r.copy(this.origin).addScaledVector(this.direction,_),a&&a.copy(ad).addScaledVector(Il,x),S}intersectSphere(e,t){Qi.subVectors(e.center,this.origin);const r=Qi.dot(this.direction),a=Qi.dot(Qi)-r*r,l=e.radius*e.radius;if(a>l)return null;const u=Math.sqrt(l-a),f=r-u,m=r+u;return m<0?null:f<0?this.at(m,t):this.at(f,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,a,l,u,f,m;const h=1/this.direction.x,v=1/this.direction.y,_=1/this.direction.z,x=this.origin;return h>=0?(r=(e.min.x-x.x)*h,a=(e.max.x-x.x)*h):(r=(e.max.x-x.x)*h,a=(e.min.x-x.x)*h),v>=0?(l=(e.min.y-x.y)*v,u=(e.max.y-x.y)*v):(l=(e.max.y-x.y)*v,u=(e.min.y-x.y)*v),r>u||l>a||((l>r||isNaN(r))&&(r=l),(u<a||isNaN(a))&&(a=u),_>=0?(f=(e.min.z-x.z)*_,m=(e.max.z-x.z)*_):(f=(e.max.z-x.z)*_,m=(e.min.z-x.z)*_),r>m||f>a)||((f>r||r!==r)&&(r=f),(m<a||a!==a)&&(a=m),a<0)?null:this.at(r>=0?r:a,t)}intersectsBox(e){return this.intersectBox(e,Qi)!==null}intersectTriangle(e,t,r,a,l){ld.subVectors(t,e),Dl.subVectors(r,e),cd.crossVectors(ld,Dl);let u=this.direction.dot(cd),f;if(u>0){if(a)return null;f=1}else if(u<0)f=-1,u=-u;else return null;br.subVectors(this.origin,e);const m=f*this.direction.dot(Dl.crossVectors(br,Dl));if(m<0)return null;const h=f*this.direction.dot(ld.cross(br));if(h<0||m+h>u)return null;const v=-f*br.dot(cd);return v<0?null:this.at(v/u,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Zt{constructor(e,t,r,a,l,u,f,m,h,v,_,x,S,w,b,y){Zt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,a,l,u,f,m,h,v,_,x,S,w,b,y)}set(e,t,r,a,l,u,f,m,h,v,_,x,S,w,b,y){const g=this.elements;return g[0]=e,g[4]=t,g[8]=r,g[12]=a,g[1]=l,g[5]=u,g[9]=f,g[13]=m,g[2]=h,g[6]=v,g[10]=_,g[14]=x,g[3]=S,g[7]=w,g[11]=b,g[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Zt().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,r=e.elements,a=1/Xs.setFromMatrixColumn(e,0).length(),l=1/Xs.setFromMatrixColumn(e,1).length(),u=1/Xs.setFromMatrixColumn(e,2).length();return t[0]=r[0]*a,t[1]=r[1]*a,t[2]=r[2]*a,t[3]=0,t[4]=r[4]*l,t[5]=r[5]*l,t[6]=r[6]*l,t[7]=0,t[8]=r[8]*u,t[9]=r[9]*u,t[10]=r[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,a=e.y,l=e.z,u=Math.cos(r),f=Math.sin(r),m=Math.cos(a),h=Math.sin(a),v=Math.cos(l),_=Math.sin(l);if(e.order==="XYZ"){const x=u*v,S=u*_,w=f*v,b=f*_;t[0]=m*v,t[4]=-m*_,t[8]=h,t[1]=S+w*h,t[5]=x-b*h,t[9]=-f*m,t[2]=b-x*h,t[6]=w+S*h,t[10]=u*m}else if(e.order==="YXZ"){const x=m*v,S=m*_,w=h*v,b=h*_;t[0]=x+b*f,t[4]=w*f-S,t[8]=u*h,t[1]=u*_,t[5]=u*v,t[9]=-f,t[2]=S*f-w,t[6]=b+x*f,t[10]=u*m}else if(e.order==="ZXY"){const x=m*v,S=m*_,w=h*v,b=h*_;t[0]=x-b*f,t[4]=-u*_,t[8]=w+S*f,t[1]=S+w*f,t[5]=u*v,t[9]=b-x*f,t[2]=-u*h,t[6]=f,t[10]=u*m}else if(e.order==="ZYX"){const x=u*v,S=u*_,w=f*v,b=f*_;t[0]=m*v,t[4]=w*h-S,t[8]=x*h+b,t[1]=m*_,t[5]=b*h+x,t[9]=S*h-w,t[2]=-h,t[6]=f*m,t[10]=u*m}else if(e.order==="YZX"){const x=u*m,S=u*h,w=f*m,b=f*h;t[0]=m*v,t[4]=b-x*_,t[8]=w*_+S,t[1]=_,t[5]=u*v,t[9]=-f*v,t[2]=-h*v,t[6]=S*_+w,t[10]=x-b*_}else if(e.order==="XZY"){const x=u*m,S=u*h,w=f*m,b=f*h;t[0]=m*v,t[4]=-_,t[8]=h*v,t[1]=x*_+b,t[5]=u*v,t[9]=S*_-w,t[2]=w*_-S,t[6]=f*v,t[10]=b*_+x}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(px,e,mx)}lookAt(e,t,r){const a=this.elements;return $n.subVectors(e,t),$n.lengthSq()===0&&($n.z=1),$n.normalize(),Pr.crossVectors(r,$n),Pr.lengthSq()===0&&(Math.abs(r.z)===1?$n.x+=1e-4:$n.z+=1e-4,$n.normalize(),Pr.crossVectors(r,$n)),Pr.normalize(),Ul.crossVectors($n,Pr),a[0]=Pr.x,a[4]=Ul.x,a[8]=$n.x,a[1]=Pr.y,a[5]=Ul.y,a[9]=$n.y,a[2]=Pr.z,a[6]=Ul.z,a[10]=$n.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,a=t.elements,l=this.elements,u=r[0],f=r[4],m=r[8],h=r[12],v=r[1],_=r[5],x=r[9],S=r[13],w=r[2],b=r[6],y=r[10],g=r[14],N=r[3],I=r[7],C=r[11],H=r[15],O=a[0],k=a[4],G=a[8],P=a[12],A=a[1],V=a[5],q=a[9],oe=a[13],ve=a[2],fe=a[6],pe=a[10],me=a[14],j=a[3],_e=a[7],de=a[11],z=a[15];return l[0]=u*O+f*A+m*ve+h*j,l[4]=u*k+f*V+m*fe+h*_e,l[8]=u*G+f*q+m*pe+h*de,l[12]=u*P+f*oe+m*me+h*z,l[1]=v*O+_*A+x*ve+S*j,l[5]=v*k+_*V+x*fe+S*_e,l[9]=v*G+_*q+x*pe+S*de,l[13]=v*P+_*oe+x*me+S*z,l[2]=w*O+b*A+y*ve+g*j,l[6]=w*k+b*V+y*fe+g*_e,l[10]=w*G+b*q+y*pe+g*de,l[14]=w*P+b*oe+y*me+g*z,l[3]=N*O+I*A+C*ve+H*j,l[7]=N*k+I*V+C*fe+H*_e,l[11]=N*G+I*q+C*pe+H*de,l[15]=N*P+I*oe+C*me+H*z,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],a=e[8],l=e[12],u=e[1],f=e[5],m=e[9],h=e[13],v=e[2],_=e[6],x=e[10],S=e[14],w=e[3],b=e[7],y=e[11],g=e[15];return w*(+l*m*_-a*h*_-l*f*x+r*h*x+a*f*S-r*m*S)+b*(+t*m*S-t*h*x+l*u*x-a*u*S+a*h*v-l*m*v)+y*(+t*h*_-t*f*S-l*u*_+r*u*S+l*f*v-r*h*v)+g*(-a*f*v-t*m*_+t*f*x+a*u*_-r*u*x+r*m*v)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],a=e[2],l=e[3],u=e[4],f=e[5],m=e[6],h=e[7],v=e[8],_=e[9],x=e[10],S=e[11],w=e[12],b=e[13],y=e[14],g=e[15],N=_*y*h-b*x*h+b*m*S-f*y*S-_*m*g+f*x*g,I=w*x*h-v*y*h-w*m*S+u*y*S+v*m*g-u*x*g,C=v*b*h-w*_*h+w*f*S-u*b*S-v*f*g+u*_*g,H=w*_*m-v*b*m-w*f*x+u*b*x+v*f*y-u*_*y,O=t*N+r*I+a*C+l*H;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const k=1/O;return e[0]=N*k,e[1]=(b*x*l-_*y*l-b*a*S+r*y*S+_*a*g-r*x*g)*k,e[2]=(f*y*l-b*m*l+b*a*h-r*y*h-f*a*g+r*m*g)*k,e[3]=(_*m*l-f*x*l-_*a*h+r*x*h+f*a*S-r*m*S)*k,e[4]=I*k,e[5]=(v*y*l-w*x*l+w*a*S-t*y*S-v*a*g+t*x*g)*k,e[6]=(w*m*l-u*y*l-w*a*h+t*y*h+u*a*g-t*m*g)*k,e[7]=(u*x*l-v*m*l+v*a*h-t*x*h-u*a*S+t*m*S)*k,e[8]=C*k,e[9]=(w*_*l-v*b*l-w*r*S+t*b*S+v*r*g-t*_*g)*k,e[10]=(u*b*l-w*f*l+w*r*h-t*b*h-u*r*g+t*f*g)*k,e[11]=(v*f*l-u*_*l-v*r*h+t*_*h+u*r*S-t*f*S)*k,e[12]=H*k,e[13]=(v*b*a-w*_*a+w*r*x-t*b*x-v*r*y+t*_*y)*k,e[14]=(w*f*a-u*b*a-w*r*m+t*b*m+u*r*y-t*f*y)*k,e[15]=(u*_*a-v*f*a+v*r*m-t*_*m-u*r*x+t*f*x)*k,this}scale(e){const t=this.elements,r=e.x,a=e.y,l=e.z;return t[0]*=r,t[4]*=a,t[8]*=l,t[1]*=r,t[5]*=a,t[9]*=l,t[2]*=r,t[6]*=a,t[10]*=l,t[3]*=r,t[7]*=a,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,a))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),a=Math.sin(t),l=1-r,u=e.x,f=e.y,m=e.z,h=l*u,v=l*f;return this.set(h*u+r,h*f-a*m,h*m+a*f,0,h*f+a*m,v*f+r,v*m-a*u,0,h*m-a*f,v*m+a*u,l*m*m+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,a,l,u){return this.set(1,r,l,0,e,1,u,0,t,a,1,0,0,0,0,1),this}compose(e,t,r){const a=this.elements,l=t._x,u=t._y,f=t._z,m=t._w,h=l+l,v=u+u,_=f+f,x=l*h,S=l*v,w=l*_,b=u*v,y=u*_,g=f*_,N=m*h,I=m*v,C=m*_,H=r.x,O=r.y,k=r.z;return a[0]=(1-(b+g))*H,a[1]=(S+C)*H,a[2]=(w-I)*H,a[3]=0,a[4]=(S-C)*O,a[5]=(1-(x+g))*O,a[6]=(y+N)*O,a[7]=0,a[8]=(w+I)*k,a[9]=(y-N)*k,a[10]=(1-(x+b))*k,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,r){const a=this.elements;let l=Xs.set(a[0],a[1],a[2]).length();const u=Xs.set(a[4],a[5],a[6]).length(),f=Xs.set(a[8],a[9],a[10]).length();this.determinant()<0&&(l=-l),e.x=a[12],e.y=a[13],e.z=a[14],_i.copy(this);const h=1/l,v=1/u,_=1/f;return _i.elements[0]*=h,_i.elements[1]*=h,_i.elements[2]*=h,_i.elements[4]*=v,_i.elements[5]*=v,_i.elements[6]*=v,_i.elements[8]*=_,_i.elements[9]*=_,_i.elements[10]*=_,t.setFromRotationMatrix(_i),r.x=l,r.y=u,r.z=f,this}makePerspective(e,t,r,a,l,u,f=Fi,m=!1){const h=this.elements,v=2*l/(t-e),_=2*l/(r-a),x=(t+e)/(t-e),S=(r+a)/(r-a);let w,b;if(m)w=l/(u-l),b=u*l/(u-l);else if(f===Fi)w=-(u+l)/(u-l),b=-2*u*l/(u-l);else if(f===sc)w=-u/(u-l),b=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return h[0]=v,h[4]=0,h[8]=x,h[12]=0,h[1]=0,h[5]=_,h[9]=S,h[13]=0,h[2]=0,h[6]=0,h[10]=w,h[14]=b,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,r,a,l,u,f=Fi,m=!1){const h=this.elements,v=2/(t-e),_=2/(r-a),x=-(t+e)/(t-e),S=-(r+a)/(r-a);let w,b;if(m)w=1/(u-l),b=u/(u-l);else if(f===Fi)w=-2/(u-l),b=-(u+l)/(u-l);else if(f===sc)w=-1/(u-l),b=-l/(u-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return h[0]=v,h[4]=0,h[8]=0,h[12]=x,h[1]=0,h[5]=_,h[9]=0,h[13]=S,h[2]=0,h[6]=0,h[10]=w,h[14]=b,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let a=0;a<16;a++)if(t[a]!==r[a])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}const Xs=new Z,_i=new Zt,px=new Z(0,0,0),mx=new Z(1,1,1),Pr=new Z,Ul=new Z,$n=new Z,Om=new Zt,km=new ya;class zi{constructor(e=0,t=0,r=0,a=zi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,a=this._order){return this._x=e,this._y=t,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const a=e.elements,l=a[0],u=a[4],f=a[8],m=a[1],h=a[5],v=a[9],_=a[2],x=a[6],S=a[10];switch(t){case"XYZ":this._y=Math.asin(wt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-v,S),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(x,h),this._z=0);break;case"YXZ":this._x=Math.asin(-wt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(f,S),this._z=Math.atan2(m,h)):(this._y=Math.atan2(-_,l),this._z=0);break;case"ZXY":this._x=Math.asin(wt(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-_,S),this._z=Math.atan2(-u,h)):(this._y=0,this._z=Math.atan2(m,l));break;case"ZYX":this._y=Math.asin(-wt(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(x,S),this._z=Math.atan2(m,l)):(this._x=0,this._z=Math.atan2(-u,h));break;case"YZX":this._z=Math.asin(wt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-v,h),this._y=Math.atan2(-_,l)):(this._x=0,this._y=Math.atan2(f,S));break;case"XZY":this._z=Math.asin(-wt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(x,h),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-v,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return Om.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Om,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return km.setFromEuler(this),this.setFromQuaternion(km,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}zi.DEFAULT_ORDER="XYZ";class Yg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let gx=0;const zm=new Z,Ys=new ya,Ji=new Zt,Fl=new Z,Qo=new Z,vx=new Z,_x=new ya,Bm=new Z(1,0,0),Hm=new Z(0,1,0),Vm=new Z(0,0,1),Gm={type:"added"},xx={type:"removed"},qs={type:"childadded",child:null},ud={type:"childremoved",child:null};class _n extends ho{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:gx++}),this.uuid=xa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=_n.DEFAULT_UP.clone();const e=new Z,t=new zi,r=new ya,a=new Z(1,1,1);function l(){r.setFromEuler(t,!1)}function u(){t.setFromQuaternion(r,void 0,!1)}t._onChange(l),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Zt},normalMatrix:{value:new gt}}),this.matrix=new Zt,this.matrixWorld=new Zt,this.matrixAutoUpdate=_n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=_n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Yg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ys.setFromAxisAngle(e,t),this.quaternion.multiply(Ys),this}rotateOnWorldAxis(e,t){return Ys.setFromAxisAngle(e,t),this.quaternion.premultiply(Ys),this}rotateX(e){return this.rotateOnAxis(Bm,e)}rotateY(e){return this.rotateOnAxis(Hm,e)}rotateZ(e){return this.rotateOnAxis(Vm,e)}translateOnAxis(e,t){return zm.copy(e).applyQuaternion(this.quaternion),this.position.add(zm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Bm,e)}translateY(e){return this.translateOnAxis(Hm,e)}translateZ(e){return this.translateOnAxis(Vm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ji.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?Fl.copy(e):Fl.set(e,t,r);const a=this.parent;this.updateWorldMatrix(!0,!1),Qo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ji.lookAt(Qo,Fl,this.up):Ji.lookAt(Fl,Qo,this.up),this.quaternion.setFromRotationMatrix(Ji),a&&(Ji.extractRotation(a.matrixWorld),Ys.setFromRotationMatrix(Ji),this.quaternion.premultiply(Ys.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Gm),qs.child=e,this.dispatchEvent(qs),qs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(xx),ud.child=e,this.dispatchEvent(ud),ud.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ji.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ji.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ji),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Gm),qs.child=e,this.dispatchEvent(qs),qs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,a=this.children.length;r<a;r++){const u=this.children[r].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const a=this.children;for(let l=0,u=a.length;l<u;l++)a[l].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qo,e,vx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qo,_x,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,a=t.length;r<a;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,a=t.length;r<a;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,a=t.length;r<a;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const a=this.children;for(let l=0,u=a.length;l<u;l++)a[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(f=>({...f})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(e),a.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function l(f,m){return f[m.uuid]===void 0&&(f[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=l(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const m=f.shapes;if(Array.isArray(m))for(let h=0,v=m.length;h<v;h++){const _=m[h];l(e.shapes,_)}else l(e.shapes,m)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let m=0,h=this.material.length;m<h;m++)f.push(l(e.materials,this.material[m]));a.material=f}else a.material=l(e.materials,this.material);if(this.children.length>0){a.children=[];for(let f=0;f<this.children.length;f++)a.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let f=0;f<this.animations.length;f++){const m=this.animations[f];a.animations.push(l(e.animations,m))}}if(t){const f=u(e.geometries),m=u(e.materials),h=u(e.textures),v=u(e.images),_=u(e.shapes),x=u(e.skeletons),S=u(e.animations),w=u(e.nodes);f.length>0&&(r.geometries=f),m.length>0&&(r.materials=m),h.length>0&&(r.textures=h),v.length>0&&(r.images=v),_.length>0&&(r.shapes=_),x.length>0&&(r.skeletons=x),S.length>0&&(r.animations=S),w.length>0&&(r.nodes=w)}return r.object=a,r;function u(f){const m=[];for(const h in f){const v=f[h];delete v.metadata,m.push(v)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const a=e.children[r];this.add(a.clone())}return this}}_n.DEFAULT_UP=new Z(0,1,0);_n.DEFAULT_MATRIX_AUTO_UPDATE=!0;_n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const xi=new Z,er=new Z,dd=new Z,tr=new Z,Ks=new Z,$s=new Z,Wm=new Z,fd=new Z,hd=new Z,pd=new Z,md=new Ot,gd=new Ot,vd=new Ot;class Si{constructor(e=new Z,t=new Z,r=new Z){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,a){a.subVectors(r,t),xi.subVectors(e,t),a.cross(xi);const l=a.lengthSq();return l>0?a.multiplyScalar(1/Math.sqrt(l)):a.set(0,0,0)}static getBarycoord(e,t,r,a,l){xi.subVectors(a,t),er.subVectors(r,t),dd.subVectors(e,t);const u=xi.dot(xi),f=xi.dot(er),m=xi.dot(dd),h=er.dot(er),v=er.dot(dd),_=u*h-f*f;if(_===0)return l.set(0,0,0),null;const x=1/_,S=(h*m-f*v)*x,w=(u*v-f*m)*x;return l.set(1-S-w,w,S)}static containsPoint(e,t,r,a){return this.getBarycoord(e,t,r,a,tr)===null?!1:tr.x>=0&&tr.y>=0&&tr.x+tr.y<=1}static getInterpolation(e,t,r,a,l,u,f,m){return this.getBarycoord(e,t,r,a,tr)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(l,tr.x),m.addScaledVector(u,tr.y),m.addScaledVector(f,tr.z),m)}static getInterpolatedAttribute(e,t,r,a,l,u){return md.setScalar(0),gd.setScalar(0),vd.setScalar(0),md.fromBufferAttribute(e,t),gd.fromBufferAttribute(e,r),vd.fromBufferAttribute(e,a),u.setScalar(0),u.addScaledVector(md,l.x),u.addScaledVector(gd,l.y),u.addScaledVector(vd,l.z),u}static isFrontFacing(e,t,r,a){return xi.subVectors(r,t),er.subVectors(e,t),xi.cross(er).dot(a)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,a){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,r,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return xi.subVectors(this.c,this.b),er.subVectors(this.a,this.b),xi.cross(er).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Si.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Si.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,a,l){return Si.getInterpolation(e,this.a,this.b,this.c,t,r,a,l)}containsPoint(e){return Si.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Si.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,a=this.b,l=this.c;let u,f;Ks.subVectors(a,r),$s.subVectors(l,r),fd.subVectors(e,r);const m=Ks.dot(fd),h=$s.dot(fd);if(m<=0&&h<=0)return t.copy(r);hd.subVectors(e,a);const v=Ks.dot(hd),_=$s.dot(hd);if(v>=0&&_<=v)return t.copy(a);const x=m*_-v*h;if(x<=0&&m>=0&&v<=0)return u=m/(m-v),t.copy(r).addScaledVector(Ks,u);pd.subVectors(e,l);const S=Ks.dot(pd),w=$s.dot(pd);if(w>=0&&S<=w)return t.copy(l);const b=S*h-m*w;if(b<=0&&h>=0&&w<=0)return f=h/(h-w),t.copy(r).addScaledVector($s,f);const y=v*w-S*_;if(y<=0&&_-v>=0&&S-w>=0)return Wm.subVectors(l,a),f=(_-v)/(_-v+(S-w)),t.copy(a).addScaledVector(Wm,f);const g=1/(y+b+x);return u=b*g,f=x*g,t.copy(r).addScaledVector(Ks,u).addScaledVector($s,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const qg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Lr={h:0,s:0,l:0},Ol={h:0,s:0,l:0};function _d(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Et{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Wn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Pt.colorSpaceToWorking(this,t),this}setRGB(e,t,r,a=Pt.workingColorSpace){return this.r=e,this.g=t,this.b=r,Pt.colorSpaceToWorking(this,a),this}setHSL(e,t,r,a=Pt.workingColorSpace){if(e=ix(e,1),t=wt(t,0,1),r=wt(r,0,1),t===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+t):r+t-r*t,u=2*r-l;this.r=_d(u,l,e+1/3),this.g=_d(u,l,e),this.b=_d(u,l,e-1/3)}return Pt.colorSpaceToWorking(this,a),this}setStyle(e,t=Wn){function r(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=a[1],f=a[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=a[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(l,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Wn){const r=qg[e.toLowerCase()];return r!==void 0?this.setHex(r,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ar(e.r),this.g=ar(e.g),this.b=ar(e.b),this}copyLinearToSRGB(e){return this.r=ro(e.r),this.g=ro(e.g),this.b=ro(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Wn){return Pt.workingToColorSpace(An.copy(this),e),Math.round(wt(An.r*255,0,255))*65536+Math.round(wt(An.g*255,0,255))*256+Math.round(wt(An.b*255,0,255))}getHexString(e=Wn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Pt.workingColorSpace){Pt.workingToColorSpace(An.copy(this),t);const r=An.r,a=An.g,l=An.b,u=Math.max(r,a,l),f=Math.min(r,a,l);let m,h;const v=(f+u)/2;if(f===u)m=0,h=0;else{const _=u-f;switch(h=v<=.5?_/(u+f):_/(2-u-f),u){case r:m=(a-l)/_+(a<l?6:0);break;case a:m=(l-r)/_+2;break;case l:m=(r-a)/_+4;break}m/=6}return e.h=m,e.s=h,e.l=v,e}getRGB(e,t=Pt.workingColorSpace){return Pt.workingToColorSpace(An.copy(this),t),e.r=An.r,e.g=An.g,e.b=An.b,e}getStyle(e=Wn){Pt.workingToColorSpace(An.copy(this),e);const t=An.r,r=An.g,a=An.b;return e!==Wn?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(a*255)})`}offsetHSL(e,t,r){return this.getHSL(Lr),this.setHSL(Lr.h+e,Lr.s+t,Lr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(Lr),e.getHSL(Ol);const r=ed(Lr.h,Ol.h,t),a=ed(Lr.s,Ol.s,t),l=ed(Lr.l,Ol.l,t);return this.setHSL(r,a,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,a=this.b,l=e.elements;return this.r=l[0]*t+l[3]*r+l[6]*a,this.g=l[1]*t+l[4]*r+l[7]*a,this.b=l[2]*t+l[5]*r+l[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const An=new Et;Et.NAMES=qg;let yx=0;class Ea extends ho{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:yx++}),this.uuid=xa(),this.name="",this.type="Material",this.blending=io,this.side=zr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Od,this.blendDst=kd,this.blendEquation=ds,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Et(0,0,0),this.blendAlpha=0,this.depthFunc=ao,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Pm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Hs,this.stencilZFail=Hs,this.stencilZPass=Hs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(r):a&&a.isVector3&&r&&r.isVector3?a.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==io&&(r.blending=this.blending),this.side!==zr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Od&&(r.blendSrc=this.blendSrc),this.blendDst!==kd&&(r.blendDst=this.blendDst),this.blendEquation!==ds&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==ao&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Pm&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Hs&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Hs&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Hs&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function a(l){const u=[];for(const f in l){const m=l[f];delete m.metadata,u.push(m)}return u}if(t){const l=a(e.textures),u=a(e.images);l.length>0&&(r.textures=l),u.length>0&&(r.images=u)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const a=t.length;r=new Array(a);for(let l=0;l!==a;++l)r[l]=t[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class gs extends Ea{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zi,this.combine=Ng,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const nn=new Z,kl=new Mt;let Sx=0;class Oi{constructor(e,t,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Sx++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=Lm,this.updateRanges=[],this.gpuType=or,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let a=0,l=this.itemSize;a<l;a++)this.array[e+a]=t.array[r+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)kl.fromBufferAttribute(this,t),kl.applyMatrix3(e),this.setXY(t,kl.x,kl.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)nn.fromBufferAttribute(this,t),nn.applyMatrix3(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)nn.fromBufferAttribute(this,t),nn.applyMatrix4(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)nn.fromBufferAttribute(this,t),nn.applyNormalMatrix(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)nn.fromBufferAttribute(this,t),nn.transformDirection(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=Ko(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=Gn(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ko(t,this.array)),t}setX(e,t){return this.normalized&&(t=Gn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ko(t,this.array)),t}setY(e,t){return this.normalized&&(t=Gn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ko(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Gn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ko(t,this.array)),t}setW(e,t){return this.normalized&&(t=Gn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=Gn(t,this.array),r=Gn(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,a){return e*=this.itemSize,this.normalized&&(t=Gn(t,this.array),r=Gn(r,this.array),a=Gn(a,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=a,this}setXYZW(e,t,r,a,l){return e*=this.itemSize,this.normalized&&(t=Gn(t,this.array),r=Gn(r,this.array),a=Gn(a,this.array),l=Gn(l,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=a,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Lm&&(e.usage=this.usage),e}}class Kg extends Oi{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class $g extends Oi{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class ln extends Oi{constructor(e,t,r){super(new Float32Array(e),t,r)}}let Ex=0;const ai=new Zt,xd=new _n,Zs=new Z,Zn=new Sa,Jo=new Sa,pn=new Z;class Ti extends ho{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ex++}),this.uuid=xa(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(jg(e)?$g:Kg)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new gt().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ai.makeRotationFromQuaternion(e),this.applyMatrix4(ai),this}rotateX(e){return ai.makeRotationX(e),this.applyMatrix4(ai),this}rotateY(e){return ai.makeRotationY(e),this.applyMatrix4(ai),this}rotateZ(e){return ai.makeRotationZ(e),this.applyMatrix4(ai),this}translate(e,t,r){return ai.makeTranslation(e,t,r),this.applyMatrix4(ai),this}scale(e,t,r){return ai.makeScale(e,t,r),this.applyMatrix4(ai),this}lookAt(e){return xd.lookAt(e),xd.updateMatrix(),this.applyMatrix4(xd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Zs).negate(),this.translate(Zs.x,Zs.y,Zs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let a=0,l=e.length;a<l;a++){const u=e[a];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new ln(r,3))}else{const r=Math.min(e.length,t.count);for(let a=0;a<r;a++){const l=e[a];t.setXYZ(a,l.x,l.y,l.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Sa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Z(-1/0,-1/0,-1/0),new Z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const l=t[r];Zn.setFromBufferAttribute(l),this.morphTargetsRelative?(pn.addVectors(this.boundingBox.min,Zn.min),this.boundingBox.expandByPoint(pn),pn.addVectors(this.boundingBox.max,Zn.max),this.boundingBox.expandByPoint(pn)):(this.boundingBox.expandByPoint(Zn.min),this.boundingBox.expandByPoint(Zn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Of);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Z,1/0);return}if(e){const r=this.boundingSphere.center;if(Zn.setFromBufferAttribute(e),t)for(let l=0,u=t.length;l<u;l++){const f=t[l];Jo.setFromBufferAttribute(f),this.morphTargetsRelative?(pn.addVectors(Zn.min,Jo.min),Zn.expandByPoint(pn),pn.addVectors(Zn.max,Jo.max),Zn.expandByPoint(pn)):(Zn.expandByPoint(Jo.min),Zn.expandByPoint(Jo.max))}Zn.getCenter(r);let a=0;for(let l=0,u=e.count;l<u;l++)pn.fromBufferAttribute(e,l),a=Math.max(a,r.distanceToSquared(pn));if(t)for(let l=0,u=t.length;l<u;l++){const f=t[l],m=this.morphTargetsRelative;for(let h=0,v=f.count;h<v;h++)pn.fromBufferAttribute(f,h),m&&(Zs.fromBufferAttribute(e,h),pn.add(Zs)),a=Math.max(a,r.distanceToSquared(pn))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,a=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Oi(new Float32Array(4*r.count),4));const u=this.getAttribute("tangent"),f=[],m=[];for(let G=0;G<r.count;G++)f[G]=new Z,m[G]=new Z;const h=new Z,v=new Z,_=new Z,x=new Mt,S=new Mt,w=new Mt,b=new Z,y=new Z;function g(G,P,A){h.fromBufferAttribute(r,G),v.fromBufferAttribute(r,P),_.fromBufferAttribute(r,A),x.fromBufferAttribute(l,G),S.fromBufferAttribute(l,P),w.fromBufferAttribute(l,A),v.sub(h),_.sub(h),S.sub(x),w.sub(x);const V=1/(S.x*w.y-w.x*S.y);isFinite(V)&&(b.copy(v).multiplyScalar(w.y).addScaledVector(_,-S.y).multiplyScalar(V),y.copy(_).multiplyScalar(S.x).addScaledVector(v,-w.x).multiplyScalar(V),f[G].add(b),f[P].add(b),f[A].add(b),m[G].add(y),m[P].add(y),m[A].add(y))}let N=this.groups;N.length===0&&(N=[{start:0,count:e.count}]);for(let G=0,P=N.length;G<P;++G){const A=N[G],V=A.start,q=A.count;for(let oe=V,ve=V+q;oe<ve;oe+=3)g(e.getX(oe+0),e.getX(oe+1),e.getX(oe+2))}const I=new Z,C=new Z,H=new Z,O=new Z;function k(G){H.fromBufferAttribute(a,G),O.copy(H);const P=f[G];I.copy(P),I.sub(H.multiplyScalar(H.dot(P))).normalize(),C.crossVectors(O,P);const V=C.dot(m[G])<0?-1:1;u.setXYZW(G,I.x,I.y,I.z,V)}for(let G=0,P=N.length;G<P;++G){const A=N[G],V=A.start,q=A.count;for(let oe=V,ve=V+q;oe<ve;oe+=3)k(e.getX(oe+0)),k(e.getX(oe+1)),k(e.getX(oe+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Oi(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let x=0,S=r.count;x<S;x++)r.setXYZ(x,0,0,0);const a=new Z,l=new Z,u=new Z,f=new Z,m=new Z,h=new Z,v=new Z,_=new Z;if(e)for(let x=0,S=e.count;x<S;x+=3){const w=e.getX(x+0),b=e.getX(x+1),y=e.getX(x+2);a.fromBufferAttribute(t,w),l.fromBufferAttribute(t,b),u.fromBufferAttribute(t,y),v.subVectors(u,l),_.subVectors(a,l),v.cross(_),f.fromBufferAttribute(r,w),m.fromBufferAttribute(r,b),h.fromBufferAttribute(r,y),f.add(v),m.add(v),h.add(v),r.setXYZ(w,f.x,f.y,f.z),r.setXYZ(b,m.x,m.y,m.z),r.setXYZ(y,h.x,h.y,h.z)}else for(let x=0,S=t.count;x<S;x+=3)a.fromBufferAttribute(t,x+0),l.fromBufferAttribute(t,x+1),u.fromBufferAttribute(t,x+2),v.subVectors(u,l),_.subVectors(a,l),v.cross(_),r.setXYZ(x+0,v.x,v.y,v.z),r.setXYZ(x+1,v.x,v.y,v.z),r.setXYZ(x+2,v.x,v.y,v.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)pn.fromBufferAttribute(e,t),pn.normalize(),e.setXYZ(t,pn.x,pn.y,pn.z)}toNonIndexed(){function e(f,m){const h=f.array,v=f.itemSize,_=f.normalized,x=new h.constructor(m.length*v);let S=0,w=0;for(let b=0,y=m.length;b<y;b++){f.isInterleavedBufferAttribute?S=m[b]*f.data.stride+f.offset:S=m[b]*v;for(let g=0;g<v;g++)x[w++]=h[S++]}return new Oi(x,v,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ti,r=this.index.array,a=this.attributes;for(const f in a){const m=a[f],h=e(m,r);t.setAttribute(f,h)}const l=this.morphAttributes;for(const f in l){const m=[],h=l[f];for(let v=0,_=h.length;v<_;v++){const x=h[v],S=e(x,r);m.push(S)}t.morphAttributes[f]=m}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let f=0,m=u.length;f<m;f++){const h=u[f];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const h in m)m[h]!==void 0&&(e[h]=m[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const m in r){const h=r[m];e.data.attributes[m]=h.toJSON(e.data)}const a={};let l=!1;for(const m in this.morphAttributes){const h=this.morphAttributes[m],v=[];for(let _=0,x=h.length;_<x;_++){const S=h[_];v.push(S.toJSON(e.data))}v.length>0&&(a[m]=v,l=!0)}l&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere=f.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const a=e.attributes;for(const h in a){const v=a[h];this.setAttribute(h,v.clone(t))}const l=e.morphAttributes;for(const h in l){const v=[],_=l[h];for(let x=0,S=_.length;x<S;x++)v.push(_[x].clone(t));this.morphAttributes[h]=v}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let h=0,v=u.length;h<v;h++){const _=u[h];this.addGroup(_.start,_.count,_.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const jm=new Zt,rs=new hx,zl=new Of,Xm=new Z,Bl=new Z,Hl=new Z,Vl=new Z,yd=new Z,Gl=new Z,Ym=new Z,Wl=new Z;class an extends _n{constructor(e=new Ti,t=new gs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const a=t[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=a.length;l<u;l++){const f=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(e,t){const r=this.geometry,a=r.attributes.position,l=r.morphAttributes.position,u=r.morphTargetsRelative;t.fromBufferAttribute(a,e);const f=this.morphTargetInfluences;if(l&&f){Gl.set(0,0,0);for(let m=0,h=l.length;m<h;m++){const v=f[m],_=l[m];v!==0&&(yd.fromBufferAttribute(_,e),u?Gl.addScaledVector(yd,v):Gl.addScaledVector(yd.sub(t),v))}t.add(Gl)}return t}raycast(e,t){const r=this.geometry,a=this.material,l=this.matrixWorld;a!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),zl.copy(r.boundingSphere),zl.applyMatrix4(l),rs.copy(e.ray).recast(e.near),!(zl.containsPoint(rs.origin)===!1&&(rs.intersectSphere(zl,Xm)===null||rs.origin.distanceToSquared(Xm)>(e.far-e.near)**2))&&(jm.copy(l).invert(),rs.copy(e.ray).applyMatrix4(jm),!(r.boundingBox!==null&&rs.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,rs)))}_computeIntersections(e,t,r){let a;const l=this.geometry,u=this.material,f=l.index,m=l.attributes.position,h=l.attributes.uv,v=l.attributes.uv1,_=l.attributes.normal,x=l.groups,S=l.drawRange;if(f!==null)if(Array.isArray(u))for(let w=0,b=x.length;w<b;w++){const y=x[w],g=u[y.materialIndex],N=Math.max(y.start,S.start),I=Math.min(f.count,Math.min(y.start+y.count,S.start+S.count));for(let C=N,H=I;C<H;C+=3){const O=f.getX(C),k=f.getX(C+1),G=f.getX(C+2);a=jl(this,g,e,r,h,v,_,O,k,G),a&&(a.faceIndex=Math.floor(C/3),a.face.materialIndex=y.materialIndex,t.push(a))}}else{const w=Math.max(0,S.start),b=Math.min(f.count,S.start+S.count);for(let y=w,g=b;y<g;y+=3){const N=f.getX(y),I=f.getX(y+1),C=f.getX(y+2);a=jl(this,u,e,r,h,v,_,N,I,C),a&&(a.faceIndex=Math.floor(y/3),t.push(a))}}else if(m!==void 0)if(Array.isArray(u))for(let w=0,b=x.length;w<b;w++){const y=x[w],g=u[y.materialIndex],N=Math.max(y.start,S.start),I=Math.min(m.count,Math.min(y.start+y.count,S.start+S.count));for(let C=N,H=I;C<H;C+=3){const O=C,k=C+1,G=C+2;a=jl(this,g,e,r,h,v,_,O,k,G),a&&(a.faceIndex=Math.floor(C/3),a.face.materialIndex=y.materialIndex,t.push(a))}}else{const w=Math.max(0,S.start),b=Math.min(m.count,S.start+S.count);for(let y=w,g=b;y<g;y+=3){const N=y,I=y+1,C=y+2;a=jl(this,u,e,r,h,v,_,N,I,C),a&&(a.faceIndex=Math.floor(y/3),t.push(a))}}}}function Mx(s,e,t,r,a,l,u,f){let m;if(e.side===jn?m=r.intersectTriangle(u,l,a,!0,f):m=r.intersectTriangle(a,l,u,e.side===zr,f),m===null)return null;Wl.copy(f),Wl.applyMatrix4(s.matrixWorld);const h=t.ray.origin.distanceTo(Wl);return h<t.near||h>t.far?null:{distance:h,point:Wl.clone(),object:s}}function jl(s,e,t,r,a,l,u,f,m,h){s.getVertexPosition(f,Bl),s.getVertexPosition(m,Hl),s.getVertexPosition(h,Vl);const v=Mx(s,e,t,r,Bl,Hl,Vl,Ym);if(v){const _=new Z;Si.getBarycoord(Ym,Bl,Hl,Vl,_),a&&(v.uv=Si.getInterpolatedAttribute(a,f,m,h,_,new Mt)),l&&(v.uv1=Si.getInterpolatedAttribute(l,f,m,h,_,new Mt)),u&&(v.normal=Si.getInterpolatedAttribute(u,f,m,h,_,new Z),v.normal.dot(r.direction)>0&&v.normal.multiplyScalar(-1));const x={a:f,b:m,c:h,normal:new Z,materialIndex:0};Si.getNormal(Bl,Hl,Vl,x.normal),v.face=x,v.barycoord=_}return v}class po extends Ti{constructor(e=1,t=1,r=1,a=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:a,heightSegments:l,depthSegments:u};const f=this;a=Math.floor(a),l=Math.floor(l),u=Math.floor(u);const m=[],h=[],v=[],_=[];let x=0,S=0;w("z","y","x",-1,-1,r,t,e,u,l,0),w("z","y","x",1,-1,r,t,-e,u,l,1),w("x","z","y",1,1,e,r,t,a,u,2),w("x","z","y",1,-1,e,r,-t,a,u,3),w("x","y","z",1,-1,e,t,r,a,l,4),w("x","y","z",-1,-1,e,t,-r,a,l,5),this.setIndex(m),this.setAttribute("position",new ln(h,3)),this.setAttribute("normal",new ln(v,3)),this.setAttribute("uv",new ln(_,2));function w(b,y,g,N,I,C,H,O,k,G,P){const A=C/k,V=H/G,q=C/2,oe=H/2,ve=O/2,fe=k+1,pe=G+1;let me=0,j=0;const _e=new Z;for(let de=0;de<pe;de++){const z=de*V-oe;for(let le=0;le<fe;le++){const Ue=le*A-q;_e[b]=Ue*N,_e[y]=z*I,_e[g]=ve,h.push(_e.x,_e.y,_e.z),_e[b]=0,_e[y]=0,_e[g]=O>0?1:-1,v.push(_e.x,_e.y,_e.z),_.push(le/k),_.push(1-de/G),me+=1}}for(let de=0;de<G;de++)for(let z=0;z<k;z++){const le=x+z+fe*de,Ue=x+z+fe*(de+1),ke=x+(z+1)+fe*(de+1),Xe=x+(z+1)+fe*de;m.push(le,Ue,Xe),m.push(Ue,ke,Xe),j+=6}f.addGroup(S,j,P),S+=j,x+=me}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new po(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function fo(s){const e={};for(const t in s){e[t]={};for(const r in s[t]){const a=s[t][r];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=a.clone():Array.isArray(a)?e[t][r]=a.slice():e[t][r]=a}}return e}function Nn(s){const e={};for(let t=0;t<s.length;t++){const r=fo(s[t]);for(const a in r)e[a]=r[a]}return e}function Tx(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Zg(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Pt.workingColorSpace}const wx={clone:fo,merge:Nn};var Ax=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Rx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Br extends Ea{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ax,this.fragmentShader=Rx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=fo(e.uniforms),this.uniformsGroups=Tx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const u=this.uniforms[a].value;u&&u.isTexture?t.uniforms[a]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[a]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[a]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[a]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[a]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[a]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[a]={type:"m4",value:u.toArray()}:t.uniforms[a]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const a in this.extensions)this.extensions[a]===!0&&(r[a]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class Qg extends _n{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Zt,this.projectionMatrix=new Zt,this.projectionMatrixInverse=new Zt,this.coordinateSystem=Fi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Nr=new Z,qm=new Mt,Km=new Mt;class Qn extends Qg{constructor(e=50,t=1,r=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=wf*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ju*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return wf*2*Math.atan(Math.tan(Ju*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){Nr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Nr.x,Nr.y).multiplyScalar(-e/Nr.z),Nr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Nr.x,Nr.y).multiplyScalar(-e/Nr.z)}getViewSize(e,t){return this.getViewBounds(e,qm,Km),t.subVectors(Km,qm)}setViewOffset(e,t,r,a,l,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=a,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ju*.5*this.fov)/this.zoom,r=2*t,a=this.aspect*r,l=-.5*a;const u=this.view;if(this.view!==null&&this.view.enabled){const m=u.fullWidth,h=u.fullHeight;l+=u.offsetX*a/m,t-=u.offsetY*r/h,a*=u.width/m,r*=u.height/h}const f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+a,t,t-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Qs=-90,Js=1;class Cx extends _n{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new Qn(Qs,Js,e,t);a.layers=this.layers,this.add(a);const l=new Qn(Qs,Js,e,t);l.layers=this.layers,this.add(l);const u=new Qn(Qs,Js,e,t);u.layers=this.layers,this.add(u);const f=new Qn(Qs,Js,e,t);f.layers=this.layers,this.add(f);const m=new Qn(Qs,Js,e,t);m.layers=this.layers,this.add(m);const h=new Qn(Qs,Js,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,a,l,u,f,m]=t;for(const h of t)this.remove(h);if(e===Fi)r.up.set(0,1,0),r.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===sc)r.up.set(0,-1,0),r.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,f,m,h,v]=this.children,_=e.getRenderTarget(),x=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),w=e.xr.enabled;e.xr.enabled=!1;const b=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,a),e.render(t,l),e.setRenderTarget(r,1,a),e.render(t,u),e.setRenderTarget(r,2,a),e.render(t,f),e.setRenderTarget(r,3,a),e.render(t,m),e.setRenderTarget(r,4,a),e.render(t,h),r.texture.generateMipmaps=b,e.setRenderTarget(r,5,a),e.render(t,v),e.setRenderTarget(_,x,S),e.xr.enabled=w,r.texture.needsPMREMUpdate=!0}}class Jg extends Dn{constructor(e=[],t=lo,r,a,l,u,f,m,h,v){super(e,t,r,a,l,u,f,m,h,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class bx extends _s{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},a=[r,r,r,r,r,r];this.texture=new Jg(a),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new po(5,5,5),l=new Br({name:"CubemapFromEquirect",uniforms:fo(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:jn,blending:Or});l.uniforms.tEquirect.value=t;const u=new an(a,l),f=t.minFilter;return t.minFilter===ms&&(t.minFilter=Ui),new Cx(1,10,this).update(e,u),t.minFilter=f,u.geometry.dispose(),u.material.dispose(),this}clear(e,t=!0,r=!0,a=!0){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,r,a);e.setRenderTarget(l)}}class Ni extends _n{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Px={type:"move"};class Sd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ni,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ni,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ni,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let a=null,l=null,u=null;const f=this._targetRay,m=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){u=!0;for(const b of e.hand.values()){const y=t.getJointPose(b,r),g=this._getHandJoint(h,b);y!==null&&(g.matrix.fromArray(y.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=y.radius),g.visible=y!==null}const v=h.joints["index-finger-tip"],_=h.joints["thumb-tip"],x=v.position.distanceTo(_.position),S=.02,w=.005;h.inputState.pinching&&x>S+w?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&x<=S-w&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,r),l!==null&&(m.matrix.fromArray(l.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,l.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(l.linearVelocity)):m.hasLinearVelocity=!1,l.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(l.angularVelocity)):m.hasAngularVelocity=!1));f!==null&&(a=t.getPose(e.targetRaySpace,r),a===null&&l!==null&&(a=l),a!==null&&(f.matrix.fromArray(a.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,a.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(a.linearVelocity)):f.hasLinearVelocity=!1,a.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(a.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(Px)))}return f!==null&&(f.visible=a!==null),m!==null&&(m.visible=l!==null),h!==null&&(h.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new Ni;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}class da{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Et(e),this.density=t}clone(){return new da(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Lx extends _n{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new zi,this.environmentIntensity=1,this.environmentRotation=new zi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Ed=new Z,Nx=new Z,Ix=new gt;class cs{constructor(e=new Z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,a){return this.normal.set(e,t,r),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const a=Ed.subVectors(r,t).cross(Nx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const r=e.delta(Ed),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/a;return l<0||l>1?null:t.copy(e.start).addScaledVector(r,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||Ix.getNormalMatrix(e),a=this.coplanarPoint(Ed).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-a.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ss=new Of,Dx=new Mt(.5,.5),Xl=new Z;class kf{constructor(e=new cs,t=new cs,r=new cs,a=new cs,l=new cs,u=new cs){this.planes=[e,t,r,a,l,u]}set(e,t,r,a,l,u){const f=this.planes;return f[0].copy(e),f[1].copy(t),f[2].copy(r),f[3].copy(a),f[4].copy(l),f[5].copy(u),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=Fi,r=!1){const a=this.planes,l=e.elements,u=l[0],f=l[1],m=l[2],h=l[3],v=l[4],_=l[5],x=l[6],S=l[7],w=l[8],b=l[9],y=l[10],g=l[11],N=l[12],I=l[13],C=l[14],H=l[15];if(a[0].setComponents(h-u,S-v,g-w,H-N).normalize(),a[1].setComponents(h+u,S+v,g+w,H+N).normalize(),a[2].setComponents(h+f,S+_,g+b,H+I).normalize(),a[3].setComponents(h-f,S-_,g-b,H-I).normalize(),r)a[4].setComponents(m,x,y,C).normalize(),a[5].setComponents(h-m,S-x,g-y,H-C).normalize();else if(a[4].setComponents(h-m,S-x,g-y,H-C).normalize(),t===Fi)a[5].setComponents(h+m,S+x,g+y,H+C).normalize();else if(t===sc)a[5].setComponents(m,x,y,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ss.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ss.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ss)}intersectsSprite(e){ss.center.set(0,0,0);const t=Dx.distanceTo(e.center);return ss.radius=.7071067811865476+t,ss.applyMatrix4(e.matrixWorld),this.intersectsSphere(ss)}intersectsSphere(e){const t=this.planes,r=e.center,a=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(r)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const a=t[r];if(Xl.x=a.normal.x>0?e.max.x:e.min.x,Xl.y=a.normal.y>0?e.max.y:e.min.y,Xl.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(Xl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ux extends Dn{constructor(e,t,r,a,l,u,f,m,h){super(e,t,r,a,l,u,f,m,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class e0 extends Dn{constructor(e,t,r=vs,a,l,u,f=Mi,m=Mi,h,v=ma,_=1){if(v!==ma&&v!==ga)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:e,height:t,depth:_};super(x,a,l,u,f,m,v,r,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ff(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class t0 extends Dn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ac extends Ti{constructor(e=1,t=1,r=1,a=32,l=1,u=!1,f=0,m=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:r,radialSegments:a,heightSegments:l,openEnded:u,thetaStart:f,thetaLength:m};const h=this;a=Math.floor(a),l=Math.floor(l);const v=[],_=[],x=[],S=[];let w=0;const b=[],y=r/2;let g=0;N(),u===!1&&(e>0&&I(!0),t>0&&I(!1)),this.setIndex(v),this.setAttribute("position",new ln(_,3)),this.setAttribute("normal",new ln(x,3)),this.setAttribute("uv",new ln(S,2));function N(){const C=new Z,H=new Z;let O=0;const k=(t-e)/r;for(let G=0;G<=l;G++){const P=[],A=G/l,V=A*(t-e)+e;for(let q=0;q<=a;q++){const oe=q/a,ve=oe*m+f,fe=Math.sin(ve),pe=Math.cos(ve);H.x=V*fe,H.y=-A*r+y,H.z=V*pe,_.push(H.x,H.y,H.z),C.set(fe,k,pe).normalize(),x.push(C.x,C.y,C.z),S.push(oe,1-A),P.push(w++)}b.push(P)}for(let G=0;G<a;G++)for(let P=0;P<l;P++){const A=b[P][G],V=b[P+1][G],q=b[P+1][G+1],oe=b[P][G+1];(e>0||P!==0)&&(v.push(A,V,oe),O+=3),(t>0||P!==l-1)&&(v.push(V,q,oe),O+=3)}h.addGroup(g,O,0),g+=O}function I(C){const H=w,O=new Mt,k=new Z;let G=0;const P=C===!0?e:t,A=C===!0?1:-1;for(let q=1;q<=a;q++)_.push(0,y*A,0),x.push(0,A,0),S.push(.5,.5),w++;const V=w;for(let q=0;q<=a;q++){const ve=q/a*m+f,fe=Math.cos(ve),pe=Math.sin(ve);k.x=P*pe,k.y=y*A,k.z=P*fe,_.push(k.x,k.y,k.z),x.push(0,A,0),O.x=fe*.5+.5,O.y=pe*.5*A+.5,S.push(O.x,O.y),w++}for(let q=0;q<a;q++){const oe=H+q,ve=V+q;C===!0?v.push(ve,ve+1,oe):v.push(ve+1,ve,oe),G+=3}h.addGroup(g,G,C===!0?1:2),g+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ac(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class zf extends Ti{constructor(e=[],t=[],r=1,a=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:r,detail:a};const l=[],u=[];f(a),h(r),v(),this.setAttribute("position",new ln(l,3)),this.setAttribute("normal",new ln(l.slice(),3)),this.setAttribute("uv",new ln(u,2)),a===0?this.computeVertexNormals():this.normalizeNormals();function f(N){const I=new Z,C=new Z,H=new Z;for(let O=0;O<t.length;O+=3)S(t[O+0],I),S(t[O+1],C),S(t[O+2],H),m(I,C,H,N)}function m(N,I,C,H){const O=H+1,k=[];for(let G=0;G<=O;G++){k[G]=[];const P=N.clone().lerp(C,G/O),A=I.clone().lerp(C,G/O),V=O-G;for(let q=0;q<=V;q++)q===0&&G===O?k[G][q]=P:k[G][q]=P.clone().lerp(A,q/V)}for(let G=0;G<O;G++)for(let P=0;P<2*(O-G)-1;P++){const A=Math.floor(P/2);P%2===0?(x(k[G][A+1]),x(k[G+1][A]),x(k[G][A])):(x(k[G][A+1]),x(k[G+1][A+1]),x(k[G+1][A]))}}function h(N){const I=new Z;for(let C=0;C<l.length;C+=3)I.x=l[C+0],I.y=l[C+1],I.z=l[C+2],I.normalize().multiplyScalar(N),l[C+0]=I.x,l[C+1]=I.y,l[C+2]=I.z}function v(){const N=new Z;for(let I=0;I<l.length;I+=3){N.x=l[I+0],N.y=l[I+1],N.z=l[I+2];const C=y(N)/2/Math.PI+.5,H=g(N)/Math.PI+.5;u.push(C,1-H)}w(),_()}function _(){for(let N=0;N<u.length;N+=6){const I=u[N+0],C=u[N+2],H=u[N+4],O=Math.max(I,C,H),k=Math.min(I,C,H);O>.9&&k<.1&&(I<.2&&(u[N+0]+=1),C<.2&&(u[N+2]+=1),H<.2&&(u[N+4]+=1))}}function x(N){l.push(N.x,N.y,N.z)}function S(N,I){const C=N*3;I.x=e[C+0],I.y=e[C+1],I.z=e[C+2]}function w(){const N=new Z,I=new Z,C=new Z,H=new Z,O=new Mt,k=new Mt,G=new Mt;for(let P=0,A=0;P<l.length;P+=9,A+=6){N.set(l[P+0],l[P+1],l[P+2]),I.set(l[P+3],l[P+4],l[P+5]),C.set(l[P+6],l[P+7],l[P+8]),O.set(u[A+0],u[A+1]),k.set(u[A+2],u[A+3]),G.set(u[A+4],u[A+5]),H.copy(N).add(I).add(C).divideScalar(3);const V=y(H);b(O,A+0,N,V),b(k,A+2,I,V),b(G,A+4,C,V)}}function b(N,I,C,H){H<0&&N.x===1&&(u[I]=N.x-1),C.x===0&&C.z===0&&(u[I]=H/2/Math.PI+.5)}function y(N){return Math.atan2(N.z,-N.x)}function g(N){return Math.atan2(-N.y,Math.sqrt(N.x*N.x+N.z*N.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zf(e.vertices,e.indices,e.radius,e.details)}}class Bf extends zf{constructor(e=1,t=0){const r=(1+Math.sqrt(5))/2,a=1/r,l=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-a,-r,0,-a,r,0,a,-r,0,a,r,-a,-r,0,-a,r,0,a,-r,0,a,r,0,-r,0,-a,r,0,-a,-r,0,a,r,0,a],u=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(l,u,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Bf(e.radius,e.detail)}}class mo extends Ti{constructor(e=1,t=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:a};const l=e/2,u=t/2,f=Math.floor(r),m=Math.floor(a),h=f+1,v=m+1,_=e/f,x=t/m,S=[],w=[],b=[],y=[];for(let g=0;g<v;g++){const N=g*x-u;for(let I=0;I<h;I++){const C=I*_-l;w.push(C,-N,0),b.push(0,0,1),y.push(I/f),y.push(1-g/m)}}for(let g=0;g<m;g++)for(let N=0;N<f;N++){const I=N+h*g,C=N+h*(g+1),H=N+1+h*(g+1),O=N+1+h*g;S.push(I,C,O),S.push(C,H,O)}this.setIndex(S),this.setAttribute("position",new ln(w,3)),this.setAttribute("normal",new ln(b,3)),this.setAttribute("uv",new ln(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mo(e.width,e.height,e.widthSegments,e.heightSegments)}}class Hf extends Ti{constructor(e=1,t=32,r=16,a=0,l=Math.PI*2,u=0,f=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:r,phiStart:a,phiLength:l,thetaStart:u,thetaLength:f},t=Math.max(3,Math.floor(t)),r=Math.max(2,Math.floor(r));const m=Math.min(u+f,Math.PI);let h=0;const v=[],_=new Z,x=new Z,S=[],w=[],b=[],y=[];for(let g=0;g<=r;g++){const N=[],I=g/r;let C=0;g===0&&u===0?C=.5/t:g===r&&m===Math.PI&&(C=-.5/t);for(let H=0;H<=t;H++){const O=H/t;_.x=-e*Math.cos(a+O*l)*Math.sin(u+I*f),_.y=e*Math.cos(u+I*f),_.z=e*Math.sin(a+O*l)*Math.sin(u+I*f),w.push(_.x,_.y,_.z),x.copy(_).normalize(),b.push(x.x,x.y,x.z),y.push(O+C,1-I),N.push(h++)}v.push(N)}for(let g=0;g<r;g++)for(let N=0;N<t;N++){const I=v[g][N+1],C=v[g][N],H=v[g+1][N],O=v[g+1][N+1];(g!==0||u>0)&&S.push(I,C,O),(g!==r-1||m<Math.PI)&&S.push(C,H,O)}this.setIndex(S),this.setAttribute("position",new ln(w,3)),this.setAttribute("normal",new ln(b,3)),this.setAttribute("uv",new ln(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hf(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class fa extends Ti{constructor(e=1,t=.4,r=12,a=48,l=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:r,tubularSegments:a,arc:l},r=Math.floor(r),a=Math.floor(a);const u=[],f=[],m=[],h=[],v=new Z,_=new Z,x=new Z;for(let S=0;S<=r;S++)for(let w=0;w<=a;w++){const b=w/a*l,y=S/r*Math.PI*2;_.x=(e+t*Math.cos(y))*Math.cos(b),_.y=(e+t*Math.cos(y))*Math.sin(b),_.z=t*Math.sin(y),f.push(_.x,_.y,_.z),v.x=e*Math.cos(b),v.y=e*Math.sin(b),x.subVectors(_,v).normalize(),m.push(x.x,x.y,x.z),h.push(w/a),h.push(S/r)}for(let S=1;S<=r;S++)for(let w=1;w<=a;w++){const b=(a+1)*S+w-1,y=(a+1)*(S-1)+w-1,g=(a+1)*(S-1)+w,N=(a+1)*S+w;u.push(b,y,N),u.push(y,g,N)}this.setIndex(u),this.setAttribute("position",new ln(f,3)),this.setAttribute("normal",new ln(m,3)),this.setAttribute("uv",new ln(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fa(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Fx extends Ea{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Et(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Gg,this.normalScale=new Mt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ox extends Ea{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Y_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class kx extends Ea{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class uc extends _n{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Et(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class zx extends uc{constructor(e,t,r){super(e,r),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(_n.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Et(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Md=new Zt,$m=new Z,Zm=new Z;class n0{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Mt(512,512),this.mapType=ki,this.map=null,this.mapPass=null,this.matrix=new Zt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new kf,this._frameExtents=new Mt(1,1),this._viewportCount=1,this._viewports=[new Ot(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,r=this.matrix;$m.setFromMatrixPosition(e.matrixWorld),t.position.copy($m),Zm.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Zm),t.updateMatrixWorld(),Md.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Md,t.coordinateSystem,t.reversedDepth),t.reversedDepth?r.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Md)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Qm=new Zt,ea=new Z,Td=new Z;class Bx extends n0{constructor(){super(new Qn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Mt(4,2),this._viewportCount=6,this._viewports=[new Ot(2,1,1,1),new Ot(0,1,1,1),new Ot(3,1,1,1),new Ot(1,1,1,1),new Ot(3,0,1,1),new Ot(1,0,1,1)],this._cubeDirections=[new Z(1,0,0),new Z(-1,0,0),new Z(0,0,1),new Z(0,0,-1),new Z(0,1,0),new Z(0,-1,0)],this._cubeUps=[new Z(0,1,0),new Z(0,1,0),new Z(0,1,0),new Z(0,1,0),new Z(0,0,1),new Z(0,0,-1)]}updateMatrices(e,t=0){const r=this.camera,a=this.matrix,l=e.distance||r.far;l!==r.far&&(r.far=l,r.updateProjectionMatrix()),ea.setFromMatrixPosition(e.matrixWorld),r.position.copy(ea),Td.copy(r.position),Td.add(this._cubeDirections[t]),r.up.copy(this._cubeUps[t]),r.lookAt(Td),r.updateMatrixWorld(),a.makeTranslation(-ea.x,-ea.y,-ea.z),Qm.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Qm,r.coordinateSystem,r.reversedDepth)}}class Jm extends uc{constructor(e,t,r=0,a=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=a,this.shadow=new Bx}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class i0 extends Qg{constructor(e=-1,t=1,r=1,a=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=a,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,a,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=a,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let l=r-e,u=r+e,f=a+t,m=a-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=h*this.view.offsetX,u=l+h*this.view.width,f-=v*this.view.offsetY,m=f-v*this.view.height}this.projectionMatrix.makeOrthographic(l,u,f,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Hx extends n0{constructor(){super(new i0(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Vx extends uc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(_n.DEFAULT_UP),this.updateMatrix(),this.target=new _n,this.shadow=new Hx}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Gx extends uc{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Wx extends Qn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class jx{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function eg(s,e,t,r){const a=Xx(r);switch(t){case zg:return s*e;case Hg:return s*e/a.components*a.byteLength;case If:return s*e/a.components*a.byteLength;case Vg:return s*e*2/a.components*a.byteLength;case Df:return s*e*2/a.components*a.byteLength;case Bg:return s*e*3/a.components*a.byteLength;case Ei:return s*e*4/a.components*a.byteLength;case Uf:return s*e*4/a.components*a.byteLength;case Jl:case ec:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case tc:case nc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Zd:case Jd:return Math.max(s,16)*Math.max(e,8)/4;case $d:case Qd:return Math.max(s,8)*Math.max(e,8)/2;case ef:case tf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case nf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case rf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case sf:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case of:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case af:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case lf:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case cf:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case uf:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case df:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case ff:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case hf:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case pf:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case mf:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case gf:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case vf:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case _f:case xf:case yf:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Sf:case Ef:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Mf:case Tf:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Xx(s){switch(s){case ki:case Ug:return{byteLength:1,components:1};case ha:case Fg:case _a:return{byteLength:2,components:1};case Lf:case Nf:return{byteLength:2,components:4};case vs:case Pf:case or:return{byteLength:4,components:1};case Og:case kg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:bf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=bf);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function r0(){let s=null,e=!1,t=null,r=null;function a(l,u){t(l,u),r=s.requestAnimationFrame(a)}return{start:function(){e!==!0&&t!==null&&(r=s.requestAnimationFrame(a),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){s=l}}}function Yx(s){const e=new WeakMap;function t(f,m){const h=f.array,v=f.usage,_=h.byteLength,x=s.createBuffer();s.bindBuffer(m,x),s.bufferData(m,h,v),f.onUploadCallback();let S;if(h instanceof Float32Array)S=s.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)S=s.HALF_FLOAT;else if(h instanceof Uint16Array)f.isFloat16BufferAttribute?S=s.HALF_FLOAT:S=s.UNSIGNED_SHORT;else if(h instanceof Int16Array)S=s.SHORT;else if(h instanceof Uint32Array)S=s.UNSIGNED_INT;else if(h instanceof Int32Array)S=s.INT;else if(h instanceof Int8Array)S=s.BYTE;else if(h instanceof Uint8Array)S=s.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)S=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:x,type:S,bytesPerElement:h.BYTES_PER_ELEMENT,version:f.version,size:_}}function r(f,m,h){const v=m.array,_=m.updateRanges;if(s.bindBuffer(h,f),_.length===0)s.bufferSubData(h,0,v);else{_.sort((S,w)=>S.start-w.start);let x=0;for(let S=1;S<_.length;S++){const w=_[x],b=_[S];b.start<=w.start+w.count+1?w.count=Math.max(w.count,b.start+b.count-w.start):(++x,_[x]=b)}_.length=x+1;for(let S=0,w=_.length;S<w;S++){const b=_[S];s.bufferSubData(h,b.start*v.BYTES_PER_ELEMENT,v,b.start,b.count)}m.clearUpdateRanges()}m.onUploadCallback()}function a(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const m=e.get(f);m&&(s.deleteBuffer(m.buffer),e.delete(f))}function u(f,m){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const v=e.get(f);(!v||v.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const h=e.get(f);if(h===void 0)e.set(f,t(f,m));else if(h.version<f.version){if(h.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,f,m),h.version=f.version}}return{get:a,remove:l,update:u}}var qx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Kx=`#ifdef USE_ALPHAHASH
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
#endif`,$x=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Zx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Qx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Jx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ey=`#ifdef USE_AOMAP
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
#endif`,ty=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ny=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,iy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ry=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,sy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,oy=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ay=`#ifdef USE_IRIDESCENCE
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
#endif`,ly=`#ifdef USE_BUMPMAP
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
#endif`,cy=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,uy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,dy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,fy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,hy=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,py=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,my=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,gy=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,vy=`#define PI 3.141592653589793
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
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,_y=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,xy=`vec3 transformedNormal = objectNormal;
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
#endif`,yy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Sy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ey=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,My=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ty="gl_FragColor = linearToOutputTexel( gl_FragColor );",wy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ay=`#ifdef USE_ENVMAP
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
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Ry=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Cy=`#ifdef USE_ENVMAP
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
#endif`,by=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Py=`#ifdef USE_ENVMAP
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
#endif`,Ly=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ny=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Iy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Dy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Uy=`#ifdef USE_GRADIENTMAP
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
}`,Fy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Oy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ky=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,zy=`uniform bool receiveShadow;
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
#endif`,By=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
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
#endif`,Hy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Vy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Gy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Wy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,jy=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,Xy=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
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
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Yy=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif`,qy=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
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
#endif`,Ky=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$y=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Zy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,eS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,tS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,nS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,iS=`#if defined( USE_POINTS_UV )
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
#endif`,rS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,sS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,oS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,aS=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,lS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cS=`#ifdef USE_MORPHTARGETS
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
#endif`,uS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,dS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,fS=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,hS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,gS=`#ifdef USE_NORMALMAP
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
#endif`,vS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,_S=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,xS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,yS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,SS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ES=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,MS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,TS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,wS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,AS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,RS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,CS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,bS=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,PS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,LS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,NS=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,IS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,DS=`#ifdef USE_SKINNING
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
#endif`,US=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,FS=`#ifdef USE_SKINNING
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
#endif`,OS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,kS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,zS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,BS=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,HS=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,VS=`#ifdef USE_TRANSMISSION
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
#endif`,GS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,WS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,XS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const YS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,qS=`uniform sampler2D t2D;
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
}`,KS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$S=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ZS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,QS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,JS=`#include <common>
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
}`,e1=`#if DEPTH_PACKING == 3200
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
}`,t1=`#define DISTANCE
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
}`,n1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
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
	gl_FragColor = packDepthToRGBA( dist );
}`,i1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,r1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,s1=`uniform float scale;
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
}`,o1=`uniform vec3 diffuse;
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
}`,a1=`#include <common>
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
}`,l1=`uniform vec3 diffuse;
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
}`,c1=`#define LAMBERT
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
}`,u1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,d1=`#define MATCAP
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
}`,f1=`#define MATCAP
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
}`,h1=`#define NORMAL
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
}`,p1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,m1=`#define PHONG
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
}`,g1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,v1=`#define STANDARD
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
}`,_1=`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,x1=`#define TOON
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
}`,y1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,S1=`uniform float size;
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
}`,E1=`uniform vec3 diffuse;
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
}`,M1=`#include <common>
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
}`,T1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,w1=`uniform float rotation;
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
}`,A1=`uniform vec3 diffuse;
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
}`,vt={alphahash_fragment:qx,alphahash_pars_fragment:Kx,alphamap_fragment:$x,alphamap_pars_fragment:Zx,alphatest_fragment:Qx,alphatest_pars_fragment:Jx,aomap_fragment:ey,aomap_pars_fragment:ty,batching_pars_vertex:ny,batching_vertex:iy,begin_vertex:ry,beginnormal_vertex:sy,bsdfs:oy,iridescence_fragment:ay,bumpmap_pars_fragment:ly,clipping_planes_fragment:cy,clipping_planes_pars_fragment:uy,clipping_planes_pars_vertex:dy,clipping_planes_vertex:fy,color_fragment:hy,color_pars_fragment:py,color_pars_vertex:my,color_vertex:gy,common:vy,cube_uv_reflection_fragment:_y,defaultnormal_vertex:xy,displacementmap_pars_vertex:yy,displacementmap_vertex:Sy,emissivemap_fragment:Ey,emissivemap_pars_fragment:My,colorspace_fragment:Ty,colorspace_pars_fragment:wy,envmap_fragment:Ay,envmap_common_pars_fragment:Ry,envmap_pars_fragment:Cy,envmap_pars_vertex:by,envmap_physical_pars_fragment:By,envmap_vertex:Py,fog_vertex:Ly,fog_pars_vertex:Ny,fog_fragment:Iy,fog_pars_fragment:Dy,gradientmap_pars_fragment:Uy,lightmap_pars_fragment:Fy,lights_lambert_fragment:Oy,lights_lambert_pars_fragment:ky,lights_pars_begin:zy,lights_toon_fragment:Hy,lights_toon_pars_fragment:Vy,lights_phong_fragment:Gy,lights_phong_pars_fragment:Wy,lights_physical_fragment:jy,lights_physical_pars_fragment:Xy,lights_fragment_begin:Yy,lights_fragment_maps:qy,lights_fragment_end:Ky,logdepthbuf_fragment:$y,logdepthbuf_pars_fragment:Zy,logdepthbuf_pars_vertex:Qy,logdepthbuf_vertex:Jy,map_fragment:eS,map_pars_fragment:tS,map_particle_fragment:nS,map_particle_pars_fragment:iS,metalnessmap_fragment:rS,metalnessmap_pars_fragment:sS,morphinstance_vertex:oS,morphcolor_vertex:aS,morphnormal_vertex:lS,morphtarget_pars_vertex:cS,morphtarget_vertex:uS,normal_fragment_begin:dS,normal_fragment_maps:fS,normal_pars_fragment:hS,normal_pars_vertex:pS,normal_vertex:mS,normalmap_pars_fragment:gS,clearcoat_normal_fragment_begin:vS,clearcoat_normal_fragment_maps:_S,clearcoat_pars_fragment:xS,iridescence_pars_fragment:yS,opaque_fragment:SS,packing:ES,premultiplied_alpha_fragment:MS,project_vertex:TS,dithering_fragment:wS,dithering_pars_fragment:AS,roughnessmap_fragment:RS,roughnessmap_pars_fragment:CS,shadowmap_pars_fragment:bS,shadowmap_pars_vertex:PS,shadowmap_vertex:LS,shadowmask_pars_fragment:NS,skinbase_vertex:IS,skinning_pars_vertex:DS,skinning_vertex:US,skinnormal_vertex:FS,specularmap_fragment:OS,specularmap_pars_fragment:kS,tonemapping_fragment:zS,tonemapping_pars_fragment:BS,transmission_fragment:HS,transmission_pars_fragment:VS,uv_pars_fragment:GS,uv_pars_vertex:WS,uv_vertex:jS,worldpos_vertex:XS,background_vert:YS,background_frag:qS,backgroundCube_vert:KS,backgroundCube_frag:$S,cube_vert:ZS,cube_frag:QS,depth_vert:JS,depth_frag:e1,distanceRGBA_vert:t1,distanceRGBA_frag:n1,equirect_vert:i1,equirect_frag:r1,linedashed_vert:s1,linedashed_frag:o1,meshbasic_vert:a1,meshbasic_frag:l1,meshlambert_vert:c1,meshlambert_frag:u1,meshmatcap_vert:d1,meshmatcap_frag:f1,meshnormal_vert:h1,meshnormal_frag:p1,meshphong_vert:m1,meshphong_frag:g1,meshphysical_vert:v1,meshphysical_frag:_1,meshtoon_vert:x1,meshtoon_frag:y1,points_vert:S1,points_frag:E1,shadow_vert:M1,shadow_frag:T1,sprite_vert:w1,sprite_frag:A1},We={common:{diffuse:{value:new Et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new gt},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new gt}},envmap:{envMap:{value:null},envMapRotation:{value:new gt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new gt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new gt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new gt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new gt},normalScale:{value:new Mt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new gt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new gt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new gt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new gt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0},uvTransform:{value:new gt}},sprite:{diffuse:{value:new Et(16777215)},opacity:{value:1},center:{value:new Mt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new gt},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0}}},Ii={basic:{uniforms:Nn([We.common,We.specularmap,We.envmap,We.aomap,We.lightmap,We.fog]),vertexShader:vt.meshbasic_vert,fragmentShader:vt.meshbasic_frag},lambert:{uniforms:Nn([We.common,We.specularmap,We.envmap,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.fog,We.lights,{emissive:{value:new Et(0)}}]),vertexShader:vt.meshlambert_vert,fragmentShader:vt.meshlambert_frag},phong:{uniforms:Nn([We.common,We.specularmap,We.envmap,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.fog,We.lights,{emissive:{value:new Et(0)},specular:{value:new Et(1118481)},shininess:{value:30}}]),vertexShader:vt.meshphong_vert,fragmentShader:vt.meshphong_frag},standard:{uniforms:Nn([We.common,We.envmap,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.roughnessmap,We.metalnessmap,We.fog,We.lights,{emissive:{value:new Et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:vt.meshphysical_vert,fragmentShader:vt.meshphysical_frag},toon:{uniforms:Nn([We.common,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.gradientmap,We.fog,We.lights,{emissive:{value:new Et(0)}}]),vertexShader:vt.meshtoon_vert,fragmentShader:vt.meshtoon_frag},matcap:{uniforms:Nn([We.common,We.bumpmap,We.normalmap,We.displacementmap,We.fog,{matcap:{value:null}}]),vertexShader:vt.meshmatcap_vert,fragmentShader:vt.meshmatcap_frag},points:{uniforms:Nn([We.points,We.fog]),vertexShader:vt.points_vert,fragmentShader:vt.points_frag},dashed:{uniforms:Nn([We.common,We.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:vt.linedashed_vert,fragmentShader:vt.linedashed_frag},depth:{uniforms:Nn([We.common,We.displacementmap]),vertexShader:vt.depth_vert,fragmentShader:vt.depth_frag},normal:{uniforms:Nn([We.common,We.bumpmap,We.normalmap,We.displacementmap,{opacity:{value:1}}]),vertexShader:vt.meshnormal_vert,fragmentShader:vt.meshnormal_frag},sprite:{uniforms:Nn([We.sprite,We.fog]),vertexShader:vt.sprite_vert,fragmentShader:vt.sprite_frag},background:{uniforms:{uvTransform:{value:new gt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:vt.background_vert,fragmentShader:vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new gt}},vertexShader:vt.backgroundCube_vert,fragmentShader:vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:vt.cube_vert,fragmentShader:vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:vt.equirect_vert,fragmentShader:vt.equirect_frag},distanceRGBA:{uniforms:Nn([We.common,We.displacementmap,{referencePosition:{value:new Z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:vt.distanceRGBA_vert,fragmentShader:vt.distanceRGBA_frag},shadow:{uniforms:Nn([We.lights,We.fog,{color:{value:new Et(0)},opacity:{value:1}}]),vertexShader:vt.shadow_vert,fragmentShader:vt.shadow_frag}};Ii.physical={uniforms:Nn([Ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new gt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new gt},clearcoatNormalScale:{value:new Mt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new gt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new gt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new gt},sheen:{value:0},sheenColor:{value:new Et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new gt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new gt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new gt},transmissionSamplerSize:{value:new Mt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new gt},attenuationDistance:{value:0},attenuationColor:{value:new Et(0)},specularColor:{value:new Et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new gt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new gt},anisotropyVector:{value:new Mt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new gt}}]),vertexShader:vt.meshphysical_vert,fragmentShader:vt.meshphysical_frag};const Yl={r:0,b:0,g:0},os=new zi,R1=new Zt;function C1(s,e,t,r,a,l,u){const f=new Et(0);let m=l===!0?0:1,h,v,_=null,x=0,S=null;function w(I){let C=I.isScene===!0?I.background:null;return C&&C.isTexture&&(C=(I.backgroundBlurriness>0?t:e).get(C)),C}function b(I){let C=!1;const H=w(I);H===null?g(f,m):H&&H.isColor&&(g(H,1),C=!0);const O=s.xr.getEnvironmentBlendMode();O==="additive"?r.buffers.color.setClear(0,0,0,1,u):O==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,u),(s.autoClear||C)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function y(I,C){const H=w(C);H&&(H.isCubeTexture||H.mapping===cc)?(v===void 0&&(v=new an(new po(1,1,1),new Br({name:"BackgroundCubeMaterial",uniforms:fo(Ii.backgroundCube.uniforms),vertexShader:Ii.backgroundCube.vertexShader,fragmentShader:Ii.backgroundCube.fragmentShader,side:jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(O,k,G){this.matrixWorld.copyPosition(G.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(v)),os.copy(C.backgroundRotation),os.x*=-1,os.y*=-1,os.z*=-1,H.isCubeTexture&&H.isRenderTargetTexture===!1&&(os.y*=-1,os.z*=-1),v.material.uniforms.envMap.value=H,v.material.uniforms.flipEnvMap.value=H.isCubeTexture&&H.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(R1.makeRotationFromEuler(os)),v.material.toneMapped=Pt.getTransfer(H.colorSpace)!==Ft,(_!==H||x!==H.version||S!==s.toneMapping)&&(v.material.needsUpdate=!0,_=H,x=H.version,S=s.toneMapping),v.layers.enableAll(),I.unshift(v,v.geometry,v.material,0,0,null)):H&&H.isTexture&&(h===void 0&&(h=new an(new mo(2,2),new Br({name:"BackgroundMaterial",uniforms:fo(Ii.background.uniforms),vertexShader:Ii.background.vertexShader,fragmentShader:Ii.background.fragmentShader,side:zr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(h)),h.material.uniforms.t2D.value=H,h.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,h.material.toneMapped=Pt.getTransfer(H.colorSpace)!==Ft,H.matrixAutoUpdate===!0&&H.updateMatrix(),h.material.uniforms.uvTransform.value.copy(H.matrix),(_!==H||x!==H.version||S!==s.toneMapping)&&(h.material.needsUpdate=!0,_=H,x=H.version,S=s.toneMapping),h.layers.enableAll(),I.unshift(h,h.geometry,h.material,0,0,null))}function g(I,C){I.getRGB(Yl,Zg(s)),r.buffers.color.setClear(Yl.r,Yl.g,Yl.b,C,u)}function N(){v!==void 0&&(v.geometry.dispose(),v.material.dispose(),v=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return f},setClearColor:function(I,C=1){f.set(I),m=C,g(f,m)},getClearAlpha:function(){return m},setClearAlpha:function(I){m=I,g(f,m)},render:b,addToRenderList:y,dispose:N}}function b1(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},a=x(null);let l=a,u=!1;function f(A,V,q,oe,ve){let fe=!1;const pe=_(oe,q,V);l!==pe&&(l=pe,h(l.object)),fe=S(A,oe,q,ve),fe&&w(A,oe,q,ve),ve!==null&&e.update(ve,s.ELEMENT_ARRAY_BUFFER),(fe||u)&&(u=!1,C(A,V,q,oe),ve!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(ve).buffer))}function m(){return s.createVertexArray()}function h(A){return s.bindVertexArray(A)}function v(A){return s.deleteVertexArray(A)}function _(A,V,q){const oe=q.wireframe===!0;let ve=r[A.id];ve===void 0&&(ve={},r[A.id]=ve);let fe=ve[V.id];fe===void 0&&(fe={},ve[V.id]=fe);let pe=fe[oe];return pe===void 0&&(pe=x(m()),fe[oe]=pe),pe}function x(A){const V=[],q=[],oe=[];for(let ve=0;ve<t;ve++)V[ve]=0,q[ve]=0,oe[ve]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:q,attributeDivisors:oe,object:A,attributes:{},index:null}}function S(A,V,q,oe){const ve=l.attributes,fe=V.attributes;let pe=0;const me=q.getAttributes();for(const j in me)if(me[j].location>=0){const de=ve[j];let z=fe[j];if(z===void 0&&(j==="instanceMatrix"&&A.instanceMatrix&&(z=A.instanceMatrix),j==="instanceColor"&&A.instanceColor&&(z=A.instanceColor)),de===void 0||de.attribute!==z||z&&de.data!==z.data)return!0;pe++}return l.attributesNum!==pe||l.index!==oe}function w(A,V,q,oe){const ve={},fe=V.attributes;let pe=0;const me=q.getAttributes();for(const j in me)if(me[j].location>=0){let de=fe[j];de===void 0&&(j==="instanceMatrix"&&A.instanceMatrix&&(de=A.instanceMatrix),j==="instanceColor"&&A.instanceColor&&(de=A.instanceColor));const z={};z.attribute=de,de&&de.data&&(z.data=de.data),ve[j]=z,pe++}l.attributes=ve,l.attributesNum=pe,l.index=oe}function b(){const A=l.newAttributes;for(let V=0,q=A.length;V<q;V++)A[V]=0}function y(A){g(A,0)}function g(A,V){const q=l.newAttributes,oe=l.enabledAttributes,ve=l.attributeDivisors;q[A]=1,oe[A]===0&&(s.enableVertexAttribArray(A),oe[A]=1),ve[A]!==V&&(s.vertexAttribDivisor(A,V),ve[A]=V)}function N(){const A=l.newAttributes,V=l.enabledAttributes;for(let q=0,oe=V.length;q<oe;q++)V[q]!==A[q]&&(s.disableVertexAttribArray(q),V[q]=0)}function I(A,V,q,oe,ve,fe,pe){pe===!0?s.vertexAttribIPointer(A,V,q,ve,fe):s.vertexAttribPointer(A,V,q,oe,ve,fe)}function C(A,V,q,oe){b();const ve=oe.attributes,fe=q.getAttributes(),pe=V.defaultAttributeValues;for(const me in fe){const j=fe[me];if(j.location>=0){let _e=ve[me];if(_e===void 0&&(me==="instanceMatrix"&&A.instanceMatrix&&(_e=A.instanceMatrix),me==="instanceColor"&&A.instanceColor&&(_e=A.instanceColor)),_e!==void 0){const de=_e.normalized,z=_e.itemSize,le=e.get(_e);if(le===void 0)continue;const Ue=le.buffer,ke=le.type,Xe=le.bytesPerElement,se=ke===s.INT||ke===s.UNSIGNED_INT||_e.gpuType===Pf;if(_e.isInterleavedBufferAttribute){const ge=_e.data,we=ge.stride,Be=_e.offset;if(ge.isInstancedInterleavedBuffer){for(let je=0;je<j.locationSize;je++)g(j.location+je,ge.meshPerAttribute);A.isInstancedMesh!==!0&&oe._maxInstanceCount===void 0&&(oe._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let je=0;je<j.locationSize;je++)y(j.location+je);s.bindBuffer(s.ARRAY_BUFFER,Ue);for(let je=0;je<j.locationSize;je++)I(j.location+je,z/j.locationSize,ke,de,we*Xe,(Be+z/j.locationSize*je)*Xe,se)}else{if(_e.isInstancedBufferAttribute){for(let ge=0;ge<j.locationSize;ge++)g(j.location+ge,_e.meshPerAttribute);A.isInstancedMesh!==!0&&oe._maxInstanceCount===void 0&&(oe._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let ge=0;ge<j.locationSize;ge++)y(j.location+ge);s.bindBuffer(s.ARRAY_BUFFER,Ue);for(let ge=0;ge<j.locationSize;ge++)I(j.location+ge,z/j.locationSize,ke,de,z*Xe,z/j.locationSize*ge*Xe,se)}}else if(pe!==void 0){const de=pe[me];if(de!==void 0)switch(de.length){case 2:s.vertexAttrib2fv(j.location,de);break;case 3:s.vertexAttrib3fv(j.location,de);break;case 4:s.vertexAttrib4fv(j.location,de);break;default:s.vertexAttrib1fv(j.location,de)}}}}N()}function H(){G();for(const A in r){const V=r[A];for(const q in V){const oe=V[q];for(const ve in oe)v(oe[ve].object),delete oe[ve];delete V[q]}delete r[A]}}function O(A){if(r[A.id]===void 0)return;const V=r[A.id];for(const q in V){const oe=V[q];for(const ve in oe)v(oe[ve].object),delete oe[ve];delete V[q]}delete r[A.id]}function k(A){for(const V in r){const q=r[V];if(q[A.id]===void 0)continue;const oe=q[A.id];for(const ve in oe)v(oe[ve].object),delete oe[ve];delete q[A.id]}}function G(){P(),u=!0,l!==a&&(l=a,h(l.object))}function P(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:f,reset:G,resetDefaultState:P,dispose:H,releaseStatesOfGeometry:O,releaseStatesOfProgram:k,initAttributes:b,enableAttribute:y,disableUnusedAttributes:N}}function P1(s,e,t){let r;function a(h){r=h}function l(h,v){s.drawArrays(r,h,v),t.update(v,r,1)}function u(h,v,_){_!==0&&(s.drawArraysInstanced(r,h,v,_),t.update(v,r,_))}function f(h,v,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,h,0,v,0,_);let S=0;for(let w=0;w<_;w++)S+=v[w];t.update(S,r,1)}function m(h,v,_,x){if(_===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let w=0;w<h.length;w++)u(h[w],v[w],x[w]);else{S.multiDrawArraysInstancedWEBGL(r,h,0,v,0,x,0,_);let w=0;for(let b=0;b<_;b++)w+=v[b]*x[b];t.update(w,r,1)}}this.setMode=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=f,this.renderMultiDrawInstances=m}function L1(s,e,t,r){let a;function l(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const k=e.get("EXT_texture_filter_anisotropic");a=s.getParameter(k.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function u(k){return!(k!==Ei&&r.convert(k)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(k){const G=k===_a&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(k!==ki&&r.convert(k)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&k!==or&&!G)}function m(k){if(k==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";k="mediump"}return k==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const v=m(h);v!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",v,"instead."),h=v);const _=t.logarithmicDepthBuffer===!0,x=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),S=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),w=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=s.getParameter(s.MAX_TEXTURE_SIZE),y=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),N=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),I=s.getParameter(s.MAX_VARYING_VECTORS),C=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),H=w>0,O=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:m,textureFormatReadable:u,textureTypeReadable:f,precision:h,logarithmicDepthBuffer:_,reversedDepthBuffer:x,maxTextures:S,maxVertexTextures:w,maxTextureSize:b,maxCubemapSize:y,maxAttributes:g,maxVertexUniforms:N,maxVaryings:I,maxFragmentUniforms:C,vertexTextures:H,maxSamples:O}}function N1(s){const e=this;let t=null,r=0,a=!1,l=!1;const u=new cs,f=new gt,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(_,x){const S=_.length!==0||x||r!==0||a;return a=x,r=_.length,S},this.beginShadows=function(){l=!0,v(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(_,x){t=v(_,x,0)},this.setState=function(_,x,S){const w=_.clippingPlanes,b=_.clipIntersection,y=_.clipShadows,g=s.get(_);if(!a||w===null||w.length===0||l&&!y)l?v(null):h();else{const N=l?0:r,I=N*4;let C=g.clippingState||null;m.value=C,C=v(w,x,I,S);for(let H=0;H!==I;++H)C[H]=t[H];g.clippingState=C,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=N}};function h(){m.value!==t&&(m.value=t,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function v(_,x,S,w){const b=_!==null?_.length:0;let y=null;if(b!==0){if(y=m.value,w!==!0||y===null){const g=S+b*4,N=x.matrixWorldInverse;f.getNormalMatrix(N),(y===null||y.length<g)&&(y=new Float32Array(g));for(let I=0,C=S;I!==b;++I,C+=4)u.copy(_[I]).applyMatrix4(N,f),u.normal.toArray(y,C),y[C+3]=u.constant}m.value=y,m.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,y}}function I1(s){let e=new WeakMap;function t(u,f){return f===Xd?u.mapping=lo:f===Yd&&(u.mapping=co),u}function r(u){if(u&&u.isTexture){const f=u.mapping;if(f===Xd||f===Yd)if(e.has(u)){const m=e.get(u).texture;return t(m,u.mapping)}else{const m=u.image;if(m&&m.height>0){const h=new bx(m.height);return h.fromEquirectangularTexture(s,u),e.set(u,h),u.addEventListener("dispose",a),t(h.texture,u.mapping)}else return null}}return u}function a(u){const f=u.target;f.removeEventListener("dispose",a);const m=e.get(f);m!==void 0&&(e.delete(f),m.dispose())}function l(){e=new WeakMap}return{get:r,dispose:l}}const no=4,tg=[.125,.215,.35,.446,.526,.582],fs=20,wd=new i0,ng=new Et;let Ad=null,Rd=0,Cd=0,bd=!1;const us=(1+Math.sqrt(5))/2,eo=1/us,ig=[new Z(-us,eo,0),new Z(us,eo,0),new Z(-eo,0,us),new Z(eo,0,us),new Z(0,us,-eo),new Z(0,us,eo),new Z(-1,1,-1),new Z(1,1,-1),new Z(-1,1,1),new Z(1,1,1)],D1=new Z;class rg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,r=.1,a=100,l={}){const{size:u=256,position:f=D1}=l;Ad=this._renderer.getRenderTarget(),Rd=this._renderer.getActiveCubeFace(),Cd=this._renderer.getActiveMipmapLevel(),bd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,r,a,m,f),t>0&&this._blur(m,0,0,t),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ag(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=og(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ad,Rd,Cd),this._renderer.xr.enabled=bd,e.scissorTest=!1,ql(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===lo||e.mapping===co?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ad=this._renderer.getRenderTarget(),Rd=this._renderer.getActiveCubeFace(),Cd=this._renderer.getActiveMipmapLevel(),bd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:Ui,minFilter:Ui,generateMipmaps:!1,type:_a,format:Ei,colorSpace:uo,depthBuffer:!1},a=sg(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=sg(e,t,r);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=U1(l)),this._blurMaterial=F1(l,e,t)}return a}_compileMaterial(e){const t=new an(this._lodPlanes[0],e);this._renderer.compile(t,wd)}_sceneToCubeUV(e,t,r,a,l){const m=new Qn(90,1,t,r),h=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],_=this._renderer,x=_.autoClear,S=_.toneMapping;_.getClearColor(ng),_.toneMapping=kr,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(a),_.clearDepth(),_.setRenderTarget(null));const b=new gs({name:"PMREM.Background",side:jn,depthWrite:!1,depthTest:!1}),y=new an(new po,b);let g=!1;const N=e.background;N?N.isColor&&(b.color.copy(N),e.background=null,g=!0):(b.color.copy(ng),g=!0);for(let I=0;I<6;I++){const C=I%3;C===0?(m.up.set(0,h[I],0),m.position.set(l.x,l.y,l.z),m.lookAt(l.x+v[I],l.y,l.z)):C===1?(m.up.set(0,0,h[I]),m.position.set(l.x,l.y,l.z),m.lookAt(l.x,l.y+v[I],l.z)):(m.up.set(0,h[I],0),m.position.set(l.x,l.y,l.z),m.lookAt(l.x,l.y,l.z+v[I]));const H=this._cubeSize;ql(a,C*H,I>2?H:0,H,H),_.setRenderTarget(a),g&&_.render(y,m),_.render(e,m)}y.geometry.dispose(),y.material.dispose(),_.toneMapping=S,_.autoClear=x,e.background=N}_textureToCubeUV(e,t){const r=this._renderer,a=e.mapping===lo||e.mapping===co;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=ag()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=og());const l=a?this._cubemapMaterial:this._equirectMaterial,u=new an(this._lodPlanes[0],l),f=l.uniforms;f.envMap.value=e;const m=this._cubeSize;ql(t,0,0,3*m,2*m),r.setRenderTarget(t),r.render(u,wd)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const a=this._lodPlanes.length;for(let l=1;l<a;l++){const u=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),f=ig[(a-l-1)%ig.length];this._blur(e,l-1,l,u,f)}t.autoClear=r}_blur(e,t,r,a,l){const u=this._pingPongRenderTarget;this._halfBlur(e,u,t,r,a,"latitudinal",l),this._halfBlur(u,e,r,r,a,"longitudinal",l)}_halfBlur(e,t,r,a,l,u,f){const m=this._renderer,h=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const v=3,_=new an(this._lodPlanes[a],h),x=h.uniforms,S=this._sizeLods[r]-1,w=isFinite(l)?Math.PI/(2*S):2*Math.PI/(2*fs-1),b=l/w,y=isFinite(l)?1+Math.floor(v*b):fs;y>fs&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${fs}`);const g=[];let N=0;for(let k=0;k<fs;++k){const G=k/b,P=Math.exp(-G*G/2);g.push(P),k===0?N+=P:k<y&&(N+=2*P)}for(let k=0;k<g.length;k++)g[k]=g[k]/N;x.envMap.value=e.texture,x.samples.value=y,x.weights.value=g,x.latitudinal.value=u==="latitudinal",f&&(x.poleAxis.value=f);const{_lodMax:I}=this;x.dTheta.value=w,x.mipInt.value=I-r;const C=this._sizeLods[a],H=3*C*(a>I-no?a-I+no:0),O=4*(this._cubeSize-C);ql(t,H,O,3*C,2*C),m.setRenderTarget(t),m.render(_,wd)}}function U1(s){const e=[],t=[],r=[];let a=s;const l=s-no+1+tg.length;for(let u=0;u<l;u++){const f=Math.pow(2,a);t.push(f);let m=1/f;u>s-no?m=tg[u-s+no-1]:u===0&&(m=0),r.push(m);const h=1/(f-2),v=-h,_=1+h,x=[v,v,_,v,_,_,v,v,_,_,v,_],S=6,w=6,b=3,y=2,g=1,N=new Float32Array(b*w*S),I=new Float32Array(y*w*S),C=new Float32Array(g*w*S);for(let O=0;O<S;O++){const k=O%3*2/3-1,G=O>2?0:-1,P=[k,G,0,k+2/3,G,0,k+2/3,G+1,0,k,G,0,k+2/3,G+1,0,k,G+1,0];N.set(P,b*w*O),I.set(x,y*w*O);const A=[O,O,O,O,O,O];C.set(A,g*w*O)}const H=new Ti;H.setAttribute("position",new Oi(N,b)),H.setAttribute("uv",new Oi(I,y)),H.setAttribute("faceIndex",new Oi(C,g)),e.push(H),a>no&&a--}return{lodPlanes:e,sizeLods:t,sigmas:r}}function sg(s,e,t){const r=new _s(s,e,t);return r.texture.mapping=cc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function ql(s,e,t,r,a){s.viewport.set(e,t,r,a),s.scissor.set(e,t,r,a)}function F1(s,e,t){const r=new Float32Array(fs),a=new Z(0,1,0);return new Br({name:"SphericalGaussianBlur",defines:{n:fs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:Vf(),fragmentShader:`

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
		`,blending:Or,depthTest:!1,depthWrite:!1})}function og(){return new Br({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Vf(),fragmentShader:`

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
		`,blending:Or,depthTest:!1,depthWrite:!1})}function ag(){return new Br({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Vf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Or,depthTest:!1,depthWrite:!1})}function Vf(){return`

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
	`}function O1(s){let e=new WeakMap,t=null;function r(f){if(f&&f.isTexture){const m=f.mapping,h=m===Xd||m===Yd,v=m===lo||m===co;if(h||v){let _=e.get(f);const x=_!==void 0?_.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==x)return t===null&&(t=new rg(s)),_=h?t.fromEquirectangular(f,_):t.fromCubemap(f,_),_.texture.pmremVersion=f.pmremVersion,e.set(f,_),_.texture;if(_!==void 0)return _.texture;{const S=f.image;return h&&S&&S.height>0||v&&S&&a(S)?(t===null&&(t=new rg(s)),_=h?t.fromEquirectangular(f):t.fromCubemap(f),_.texture.pmremVersion=f.pmremVersion,e.set(f,_),f.addEventListener("dispose",l),_.texture):null}}}return f}function a(f){let m=0;const h=6;for(let v=0;v<h;v++)f[v]!==void 0&&m++;return m===h}function l(f){const m=f.target;m.removeEventListener("dispose",l);const h=e.get(m);h!==void 0&&(e.delete(m),h.dispose())}function u(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:r,dispose:u}}function k1(s){const e={};function t(r){if(e[r]!==void 0)return e[r];let a;switch(r){case"WEBGL_depth_texture":a=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=s.getExtension(r)}return e[r]=a,a}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const a=t(r);return a===null&&va("THREE.WebGLRenderer: "+r+" extension not supported."),a}}}function z1(s,e,t,r){const a={},l=new WeakMap;function u(_){const x=_.target;x.index!==null&&e.remove(x.index);for(const w in x.attributes)e.remove(x.attributes[w]);x.removeEventListener("dispose",u),delete a[x.id];const S=l.get(x);S&&(e.remove(S),l.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,t.memory.geometries--}function f(_,x){return a[x.id]===!0||(x.addEventListener("dispose",u),a[x.id]=!0,t.memory.geometries++),x}function m(_){const x=_.attributes;for(const S in x)e.update(x[S],s.ARRAY_BUFFER)}function h(_){const x=[],S=_.index,w=_.attributes.position;let b=0;if(S!==null){const N=S.array;b=S.version;for(let I=0,C=N.length;I<C;I+=3){const H=N[I+0],O=N[I+1],k=N[I+2];x.push(H,O,O,k,k,H)}}else if(w!==void 0){const N=w.array;b=w.version;for(let I=0,C=N.length/3-1;I<C;I+=3){const H=I+0,O=I+1,k=I+2;x.push(H,O,O,k,k,H)}}else return;const y=new(jg(x)?$g:Kg)(x,1);y.version=b;const g=l.get(_);g&&e.remove(g),l.set(_,y)}function v(_){const x=l.get(_);if(x){const S=_.index;S!==null&&x.version<S.version&&h(_)}else h(_);return l.get(_)}return{get:f,update:m,getWireframeAttribute:v}}function B1(s,e,t){let r;function a(x){r=x}let l,u;function f(x){l=x.type,u=x.bytesPerElement}function m(x,S){s.drawElements(r,S,l,x*u),t.update(S,r,1)}function h(x,S,w){w!==0&&(s.drawElementsInstanced(r,S,l,x*u,w),t.update(S,r,w))}function v(x,S,w){if(w===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,S,0,l,x,0,w);let y=0;for(let g=0;g<w;g++)y+=S[g];t.update(y,r,1)}function _(x,S,w,b){if(w===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let g=0;g<x.length;g++)h(x[g]/u,S[g],b[g]);else{y.multiDrawElementsInstancedWEBGL(r,S,0,l,x,0,b,0,w);let g=0;for(let N=0;N<w;N++)g+=S[N]*b[N];t.update(g,r,1)}}this.setMode=a,this.setIndex=f,this.render=m,this.renderInstances=h,this.renderMultiDraw=v,this.renderMultiDrawInstances=_}function H1(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,u,f){switch(t.calls++,u){case s.TRIANGLES:t.triangles+=f*(l/3);break;case s.LINES:t.lines+=f*(l/2);break;case s.LINE_STRIP:t.lines+=f*(l-1);break;case s.LINE_LOOP:t.lines+=f*l;break;case s.POINTS:t.points+=f*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",u);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:r}}function V1(s,e,t){const r=new WeakMap,a=new Ot;function l(u,f,m){const h=u.morphTargetInfluences,v=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,_=v!==void 0?v.length:0;let x=r.get(f);if(x===void 0||x.count!==_){let A=function(){G.dispose(),r.delete(f),f.removeEventListener("dispose",A)};var S=A;x!==void 0&&x.texture.dispose();const w=f.morphAttributes.position!==void 0,b=f.morphAttributes.normal!==void 0,y=f.morphAttributes.color!==void 0,g=f.morphAttributes.position||[],N=f.morphAttributes.normal||[],I=f.morphAttributes.color||[];let C=0;w===!0&&(C=1),b===!0&&(C=2),y===!0&&(C=3);let H=f.attributes.position.count*C,O=1;H>e.maxTextureSize&&(O=Math.ceil(H/e.maxTextureSize),H=e.maxTextureSize);const k=new Float32Array(H*O*4*_),G=new Xg(k,H,O,_);G.type=or,G.needsUpdate=!0;const P=C*4;for(let V=0;V<_;V++){const q=g[V],oe=N[V],ve=I[V],fe=H*O*4*V;for(let pe=0;pe<q.count;pe++){const me=pe*P;w===!0&&(a.fromBufferAttribute(q,pe),k[fe+me+0]=a.x,k[fe+me+1]=a.y,k[fe+me+2]=a.z,k[fe+me+3]=0),b===!0&&(a.fromBufferAttribute(oe,pe),k[fe+me+4]=a.x,k[fe+me+5]=a.y,k[fe+me+6]=a.z,k[fe+me+7]=0),y===!0&&(a.fromBufferAttribute(ve,pe),k[fe+me+8]=a.x,k[fe+me+9]=a.y,k[fe+me+10]=a.z,k[fe+me+11]=ve.itemSize===4?a.w:1)}}x={count:_,texture:G,size:new Mt(H,O)},r.set(f,x),f.addEventListener("dispose",A)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)m.getUniforms().setValue(s,"morphTexture",u.morphTexture,t);else{let w=0;for(let y=0;y<h.length;y++)w+=h[y];const b=f.morphTargetsRelative?1:1-w;m.getUniforms().setValue(s,"morphTargetBaseInfluence",b),m.getUniforms().setValue(s,"morphTargetInfluences",h)}m.getUniforms().setValue(s,"morphTargetsTexture",x.texture,t),m.getUniforms().setValue(s,"morphTargetsTextureSize",x.size)}return{update:l}}function G1(s,e,t,r){let a=new WeakMap;function l(m){const h=r.render.frame,v=m.geometry,_=e.get(m,v);if(a.get(_)!==h&&(e.update(_),a.set(_,h)),m.isInstancedMesh&&(m.hasEventListener("dispose",f)===!1&&m.addEventListener("dispose",f),a.get(m)!==h&&(t.update(m.instanceMatrix,s.ARRAY_BUFFER),m.instanceColor!==null&&t.update(m.instanceColor,s.ARRAY_BUFFER),a.set(m,h))),m.isSkinnedMesh){const x=m.skeleton;a.get(x)!==h&&(x.update(),a.set(x,h))}return _}function u(){a=new WeakMap}function f(m){const h=m.target;h.removeEventListener("dispose",f),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:l,dispose:u}}const s0=new Dn,lg=new e0(1,1),o0=new Xg,a0=new dx,l0=new Jg,cg=[],ug=[],dg=new Float32Array(16),fg=new Float32Array(9),hg=new Float32Array(4);function go(s,e,t){const r=s[0];if(r<=0||r>0)return s;const a=e*t;let l=cg[a];if(l===void 0&&(l=new Float32Array(a),cg[a]=l),e!==0){r.toArray(l,0);for(let u=1,f=0;u!==e;++u)f+=t,s[u].toArray(l,f)}return l}function cn(s,e){if(s.length!==e.length)return!1;for(let t=0,r=s.length;t<r;t++)if(s[t]!==e[t])return!1;return!0}function un(s,e){for(let t=0,r=e.length;t<r;t++)s[t]=e[t]}function dc(s,e){let t=ug[e];t===void 0&&(t=new Int32Array(e),ug[e]=t);for(let r=0;r!==e;++r)t[r]=s.allocateTextureUnit();return t}function W1(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function j1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(cn(t,e))return;s.uniform2fv(this.addr,e),un(t,e)}}function X1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(cn(t,e))return;s.uniform3fv(this.addr,e),un(t,e)}}function Y1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(cn(t,e))return;s.uniform4fv(this.addr,e),un(t,e)}}function q1(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(cn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),un(t,e)}else{if(cn(t,r))return;hg.set(r),s.uniformMatrix2fv(this.addr,!1,hg),un(t,r)}}function K1(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(cn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),un(t,e)}else{if(cn(t,r))return;fg.set(r),s.uniformMatrix3fv(this.addr,!1,fg),un(t,r)}}function $1(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(cn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),un(t,e)}else{if(cn(t,r))return;dg.set(r),s.uniformMatrix4fv(this.addr,!1,dg),un(t,r)}}function Z1(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Q1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(cn(t,e))return;s.uniform2iv(this.addr,e),un(t,e)}}function J1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(cn(t,e))return;s.uniform3iv(this.addr,e),un(t,e)}}function eE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(cn(t,e))return;s.uniform4iv(this.addr,e),un(t,e)}}function tE(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function nE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(cn(t,e))return;s.uniform2uiv(this.addr,e),un(t,e)}}function iE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(cn(t,e))return;s.uniform3uiv(this.addr,e),un(t,e)}}function rE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(cn(t,e))return;s.uniform4uiv(this.addr,e),un(t,e)}}function sE(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a);let l;this.type===s.SAMPLER_2D_SHADOW?(lg.compareFunction=Wg,l=lg):l=s0,t.setTexture2D(e||l,a)}function oE(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),t.setTexture3D(e||a0,a)}function aE(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),t.setTextureCube(e||l0,a)}function lE(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),t.setTexture2DArray(e||o0,a)}function cE(s){switch(s){case 5126:return W1;case 35664:return j1;case 35665:return X1;case 35666:return Y1;case 35674:return q1;case 35675:return K1;case 35676:return $1;case 5124:case 35670:return Z1;case 35667:case 35671:return Q1;case 35668:case 35672:return J1;case 35669:case 35673:return eE;case 5125:return tE;case 36294:return nE;case 36295:return iE;case 36296:return rE;case 35678:case 36198:case 36298:case 36306:case 35682:return sE;case 35679:case 36299:case 36307:return oE;case 35680:case 36300:case 36308:case 36293:return aE;case 36289:case 36303:case 36311:case 36292:return lE}}function uE(s,e){s.uniform1fv(this.addr,e)}function dE(s,e){const t=go(e,this.size,2);s.uniform2fv(this.addr,t)}function fE(s,e){const t=go(e,this.size,3);s.uniform3fv(this.addr,t)}function hE(s,e){const t=go(e,this.size,4);s.uniform4fv(this.addr,t)}function pE(s,e){const t=go(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function mE(s,e){const t=go(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function gE(s,e){const t=go(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function vE(s,e){s.uniform1iv(this.addr,e)}function _E(s,e){s.uniform2iv(this.addr,e)}function xE(s,e){s.uniform3iv(this.addr,e)}function yE(s,e){s.uniform4iv(this.addr,e)}function SE(s,e){s.uniform1uiv(this.addr,e)}function EE(s,e){s.uniform2uiv(this.addr,e)}function ME(s,e){s.uniform3uiv(this.addr,e)}function TE(s,e){s.uniform4uiv(this.addr,e)}function wE(s,e,t){const r=this.cache,a=e.length,l=dc(t,a);cn(r,l)||(s.uniform1iv(this.addr,l),un(r,l));for(let u=0;u!==a;++u)t.setTexture2D(e[u]||s0,l[u])}function AE(s,e,t){const r=this.cache,a=e.length,l=dc(t,a);cn(r,l)||(s.uniform1iv(this.addr,l),un(r,l));for(let u=0;u!==a;++u)t.setTexture3D(e[u]||a0,l[u])}function RE(s,e,t){const r=this.cache,a=e.length,l=dc(t,a);cn(r,l)||(s.uniform1iv(this.addr,l),un(r,l));for(let u=0;u!==a;++u)t.setTextureCube(e[u]||l0,l[u])}function CE(s,e,t){const r=this.cache,a=e.length,l=dc(t,a);cn(r,l)||(s.uniform1iv(this.addr,l),un(r,l));for(let u=0;u!==a;++u)t.setTexture2DArray(e[u]||o0,l[u])}function bE(s){switch(s){case 5126:return uE;case 35664:return dE;case 35665:return fE;case 35666:return hE;case 35674:return pE;case 35675:return mE;case 35676:return gE;case 5124:case 35670:return vE;case 35667:case 35671:return _E;case 35668:case 35672:return xE;case 35669:case 35673:return yE;case 5125:return SE;case 36294:return EE;case 36295:return ME;case 36296:return TE;case 35678:case 36198:case 36298:case 36306:case 35682:return wE;case 35679:case 36299:case 36307:return AE;case 35680:case 36300:case 36308:case 36293:return RE;case 36289:case 36303:case 36311:case 36292:return CE}}class PE{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=cE(t.type)}}class LE{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=bE(t.type)}}class NE{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const a=this.seq;for(let l=0,u=a.length;l!==u;++l){const f=a[l];f.setValue(e,t[f.id],r)}}}const Pd=/(\w+)(\])?(\[|\.)?/g;function pg(s,e){s.seq.push(e),s.map[e.id]=e}function IE(s,e,t){const r=s.name,a=r.length;for(Pd.lastIndex=0;;){const l=Pd.exec(r),u=Pd.lastIndex;let f=l[1];const m=l[2]==="]",h=l[3];if(m&&(f=f|0),h===void 0||h==="["&&u+2===a){pg(t,h===void 0?new PE(f,s,e):new LE(f,s,e));break}else{let _=t.map[f];_===void 0&&(_=new NE(f),pg(t,_)),t=_}}}class ic{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<r;++a){const l=e.getActiveUniform(t,a),u=e.getUniformLocation(t,l.name);IE(l,u,this)}}setValue(e,t,r,a){const l=this.map[t];l!==void 0&&l.setValue(e,r,a)}setOptional(e,t,r){const a=t[r];a!==void 0&&this.setValue(e,r,a)}static upload(e,t,r,a){for(let l=0,u=t.length;l!==u;++l){const f=t[l],m=r[f.id];m.needsUpdate!==!1&&f.setValue(e,m.value,a)}}static seqWithValue(e,t){const r=[];for(let a=0,l=e.length;a!==l;++a){const u=e[a];u.id in t&&r.push(u)}return r}}function mg(s,e,t){const r=s.createShader(e);return s.shaderSource(r,t),s.compileShader(r),r}const DE=37297;let UE=0;function FE(s,e){const t=s.split(`
`),r=[],a=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let u=a;u<l;u++){const f=u+1;r.push(`${f===e?">":" "} ${f}: ${t[u]}`)}return r.join(`
`)}const gg=new gt;function OE(s){Pt._getMatrix(gg,Pt.workingColorSpace,s);const e=`mat3( ${gg.elements.map(t=>t.toFixed(4))} )`;switch(Pt.getTransfer(s)){case rc:return[e,"LinearTransferOETF"];case Ft:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function vg(s,e,t){const r=s.getShaderParameter(e,s.COMPILE_STATUS),l=(s.getShaderInfoLog(e)||"").trim();if(r&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const f=parseInt(u[1]);return t.toUpperCase()+`

`+l+`

`+FE(s.getShaderSource(e),f)}else return l}function kE(s,e){const t=OE(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function zE(s,e){let t;switch(e){case B_:t="Linear";break;case H_:t="Reinhard";break;case V_:t="Cineon";break;case Ig:t="ACESFilmic";break;case W_:t="AgX";break;case j_:t="Neutral";break;case G_:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Kl=new Z;function BE(){Pt.getLuminanceCoefficients(Kl);const s=Kl.x.toFixed(4),e=Kl.y.toFixed(4),t=Kl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function HE(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(aa).join(`
`)}function VE(s){const e=[];for(const t in s){const r=s[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function GE(s,e){const t={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){const l=s.getActiveAttrib(e,a),u=l.name;let f=1;l.type===s.FLOAT_MAT2&&(f=2),l.type===s.FLOAT_MAT3&&(f=3),l.type===s.FLOAT_MAT4&&(f=4),t[u]={type:l.type,location:s.getAttribLocation(e,u),locationSize:f}}return t}function aa(s){return s!==""}function _g(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function xg(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const WE=/^[ \t]*#include +<([\w\d./]+)>/gm;function Af(s){return s.replace(WE,XE)}const jE=new Map;function XE(s,e){let t=vt[e];if(t===void 0){const r=jE.get(e);if(r!==void 0)t=vt[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Af(t)}const YE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function yg(s){return s.replace(YE,qE)}function qE(s,e,t,r){let a="";for(let l=parseInt(e);l<parseInt(t);l++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return a}function Sg(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function KE(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Pg?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Lg?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===rr&&(e="SHADOWMAP_TYPE_VSM"),e}function $E(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case lo:case co:e="ENVMAP_TYPE_CUBE";break;case cc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function ZE(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case co:e="ENVMAP_MODE_REFRACTION";break}return e}function QE(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Ng:e="ENVMAP_BLENDING_MULTIPLY";break;case k_:e="ENVMAP_BLENDING_MIX";break;case z_:e="ENVMAP_BLENDING_ADD";break}return e}function JE(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function eM(s,e,t,r){const a=s.getContext(),l=t.defines;let u=t.vertexShader,f=t.fragmentShader;const m=KE(t),h=$E(t),v=ZE(t),_=QE(t),x=JE(t),S=HE(t),w=VE(l),b=a.createProgram();let y,g,N=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w].filter(aa).join(`
`),y.length>0&&(y+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w].filter(aa).join(`
`),g.length>0&&(g+=`
`)):(y=[Sg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+v:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+m:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(aa).join(`
`),g=[Sg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+v:"",t.envMap?"#define "+_:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+m:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==kr?"#define TONE_MAPPING":"",t.toneMapping!==kr?vt.tonemapping_pars_fragment:"",t.toneMapping!==kr?zE("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",vt.colorspace_pars_fragment,kE("linearToOutputTexel",t.outputColorSpace),BE(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(aa).join(`
`)),u=Af(u),u=_g(u,t),u=xg(u,t),f=Af(f),f=_g(f,t),f=xg(f,t),u=yg(u),f=yg(f),t.isRawShaderMaterial!==!0&&(N=`#version 300 es
`,y=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,g=["#define varying in",t.glslVersion===Nm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Nm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const I=N+y+u,C=N+g+f,H=mg(a,a.VERTEX_SHADER,I),O=mg(a,a.FRAGMENT_SHADER,C);a.attachShader(b,H),a.attachShader(b,O),t.index0AttributeName!==void 0?a.bindAttribLocation(b,0,t.index0AttributeName):t.morphTargets===!0&&a.bindAttribLocation(b,0,"position"),a.linkProgram(b);function k(V){if(s.debug.checkShaderErrors){const q=a.getProgramInfoLog(b)||"",oe=a.getShaderInfoLog(H)||"",ve=a.getShaderInfoLog(O)||"",fe=q.trim(),pe=oe.trim(),me=ve.trim();let j=!0,_e=!0;if(a.getProgramParameter(b,a.LINK_STATUS)===!1)if(j=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(a,b,H,O);else{const de=vg(a,H,"vertex"),z=vg(a,O,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(b,a.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+fe+`
`+de+`
`+z)}else fe!==""?console.warn("THREE.WebGLProgram: Program Info Log:",fe):(pe===""||me==="")&&(_e=!1);_e&&(V.diagnostics={runnable:j,programLog:fe,vertexShader:{log:pe,prefix:y},fragmentShader:{log:me,prefix:g}})}a.deleteShader(H),a.deleteShader(O),G=new ic(a,b),P=GE(a,b)}let G;this.getUniforms=function(){return G===void 0&&k(this),G};let P;this.getAttributes=function(){return P===void 0&&k(this),P};let A=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=a.getProgramParameter(b,DE)),A},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(b),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=UE++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=H,this.fragmentShader=O,this}let tM=0;class nM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,a=this._getShaderStage(t),l=this._getShaderStage(r),u=this._getShaderCacheForMaterial(e);return u.has(a)===!1&&(u.add(a),a.usedTimes++),u.has(l)===!1&&(u.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new iM(e),t.set(e,r)),r}}class iM{constructor(e){this.id=tM++,this.code=e,this.usedTimes=0}}function rM(s,e,t,r,a,l,u){const f=new Yg,m=new nM,h=new Set,v=[],_=a.logarithmicDepthBuffer,x=a.vertexTextures;let S=a.precision;const w={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(P){return h.add(P),P===0?"uv":`uv${P}`}function y(P,A,V,q,oe){const ve=q.fog,fe=oe.geometry,pe=P.isMeshStandardMaterial?q.environment:null,me=(P.isMeshStandardMaterial?t:e).get(P.envMap||pe),j=me&&me.mapping===cc?me.image.height:null,_e=w[P.type];P.precision!==null&&(S=a.getMaxPrecision(P.precision),S!==P.precision&&console.warn("THREE.WebGLProgram.getParameters:",P.precision,"not supported, using",S,"instead."));const de=fe.morphAttributes.position||fe.morphAttributes.normal||fe.morphAttributes.color,z=de!==void 0?de.length:0;let le=0;fe.morphAttributes.position!==void 0&&(le=1),fe.morphAttributes.normal!==void 0&&(le=2),fe.morphAttributes.color!==void 0&&(le=3);let Ue,ke,Xe,se;if(_e){const mt=Ii[_e];Ue=mt.vertexShader,ke=mt.fragmentShader}else Ue=P.vertexShader,ke=P.fragmentShader,m.update(P),Xe=m.getVertexShaderID(P),se=m.getFragmentShaderID(P);const ge=s.getRenderTarget(),we=s.state.buffers.depth.getReversed(),Be=oe.isInstancedMesh===!0,je=oe.isBatchedMesh===!0,pt=!!P.map,Ht=!!P.matcap,B=!!me,Ae=!!P.aoMap,Fe=!!P.lightMap,Le=!!P.bumpMap,K=!!P.normalMap,ut=!!P.displacementMap,ze=!!P.emissiveMap,st=!!P.metalnessMap,Ct=!!P.roughnessMap,Dt=P.anisotropy>0,D=P.clearcoat>0,T=P.dispersion>0,ne=P.iridescence>0,Ee=P.sheen>0,Re=P.transmission>0,xe=Dt&&!!P.anisotropyMap,et=D&&!!P.clearcoatMap,De=D&&!!P.clearcoatNormalMap,He=D&&!!P.clearcoatRoughnessMap,tt=ne&&!!P.iridescenceMap,Ne=ne&&!!P.iridescenceThicknessMap,U=Ee&&!!P.sheenColorMap,ee=Ee&&!!P.sheenRoughnessMap,ie=!!P.specularMap,J=!!P.specularColorMap,Me=!!P.specularIntensityMap,L=Re&&!!P.transmissionMap,Q=Re&&!!P.thicknessMap,ce=!!P.gradientMap,Te=!!P.alphaMap,Se=P.alphaTest>0,ye=!!P.alphaHash,Ve=!!P.extensions;let Ye=kr;P.toneMapped&&(ge===null||ge.isXRRenderTarget===!0)&&(Ye=s.toneMapping);const xt={shaderID:_e,shaderType:P.type,shaderName:P.name,vertexShader:Ue,fragmentShader:ke,defines:P.defines,customVertexShaderID:Xe,customFragmentShaderID:se,isRawShaderMaterial:P.isRawShaderMaterial===!0,glslVersion:P.glslVersion,precision:S,batching:je,batchingColor:je&&oe._colorsTexture!==null,instancing:Be,instancingColor:Be&&oe.instanceColor!==null,instancingMorph:Be&&oe.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:ge===null?s.outputColorSpace:ge.isXRRenderTarget===!0?ge.texture.colorSpace:uo,alphaToCoverage:!!P.alphaToCoverage,map:pt,matcap:Ht,envMap:B,envMapMode:B&&me.mapping,envMapCubeUVHeight:j,aoMap:Ae,lightMap:Fe,bumpMap:Le,normalMap:K,displacementMap:x&&ut,emissiveMap:ze,normalMapObjectSpace:K&&P.normalMapType===K_,normalMapTangentSpace:K&&P.normalMapType===Gg,metalnessMap:st,roughnessMap:Ct,anisotropy:Dt,anisotropyMap:xe,clearcoat:D,clearcoatMap:et,clearcoatNormalMap:De,clearcoatRoughnessMap:He,dispersion:T,iridescence:ne,iridescenceMap:tt,iridescenceThicknessMap:Ne,sheen:Ee,sheenColorMap:U,sheenRoughnessMap:ee,specularMap:ie,specularColorMap:J,specularIntensityMap:Me,transmission:Re,transmissionMap:L,thicknessMap:Q,gradientMap:ce,opaque:P.transparent===!1&&P.blending===io&&P.alphaToCoverage===!1,alphaMap:Te,alphaTest:Se,alphaHash:ye,combine:P.combine,mapUv:pt&&b(P.map.channel),aoMapUv:Ae&&b(P.aoMap.channel),lightMapUv:Fe&&b(P.lightMap.channel),bumpMapUv:Le&&b(P.bumpMap.channel),normalMapUv:K&&b(P.normalMap.channel),displacementMapUv:ut&&b(P.displacementMap.channel),emissiveMapUv:ze&&b(P.emissiveMap.channel),metalnessMapUv:st&&b(P.metalnessMap.channel),roughnessMapUv:Ct&&b(P.roughnessMap.channel),anisotropyMapUv:xe&&b(P.anisotropyMap.channel),clearcoatMapUv:et&&b(P.clearcoatMap.channel),clearcoatNormalMapUv:De&&b(P.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:He&&b(P.clearcoatRoughnessMap.channel),iridescenceMapUv:tt&&b(P.iridescenceMap.channel),iridescenceThicknessMapUv:Ne&&b(P.iridescenceThicknessMap.channel),sheenColorMapUv:U&&b(P.sheenColorMap.channel),sheenRoughnessMapUv:ee&&b(P.sheenRoughnessMap.channel),specularMapUv:ie&&b(P.specularMap.channel),specularColorMapUv:J&&b(P.specularColorMap.channel),specularIntensityMapUv:Me&&b(P.specularIntensityMap.channel),transmissionMapUv:L&&b(P.transmissionMap.channel),thicknessMapUv:Q&&b(P.thicknessMap.channel),alphaMapUv:Te&&b(P.alphaMap.channel),vertexTangents:!!fe.attributes.tangent&&(K||Dt),vertexColors:P.vertexColors,vertexAlphas:P.vertexColors===!0&&!!fe.attributes.color&&fe.attributes.color.itemSize===4,pointsUvs:oe.isPoints===!0&&!!fe.attributes.uv&&(pt||Te),fog:!!ve,useFog:P.fog===!0,fogExp2:!!ve&&ve.isFogExp2,flatShading:P.flatShading===!0&&P.wireframe===!1,sizeAttenuation:P.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:we,skinning:oe.isSkinnedMesh===!0,morphTargets:fe.morphAttributes.position!==void 0,morphNormals:fe.morphAttributes.normal!==void 0,morphColors:fe.morphAttributes.color!==void 0,morphTargetsCount:z,morphTextureStride:le,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:P.dithering,shadowMapEnabled:s.shadowMap.enabled&&V.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ye,decodeVideoTexture:pt&&P.map.isVideoTexture===!0&&Pt.getTransfer(P.map.colorSpace)===Ft,decodeVideoTextureEmissive:ze&&P.emissiveMap.isVideoTexture===!0&&Pt.getTransfer(P.emissiveMap.colorSpace)===Ft,premultipliedAlpha:P.premultipliedAlpha,doubleSided:P.side===Di,flipSided:P.side===jn,useDepthPacking:P.depthPacking>=0,depthPacking:P.depthPacking||0,index0AttributeName:P.index0AttributeName,extensionClipCullDistance:Ve&&P.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ve&&P.extensions.multiDraw===!0||je)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:P.customProgramCacheKey()};return xt.vertexUv1s=h.has(1),xt.vertexUv2s=h.has(2),xt.vertexUv3s=h.has(3),h.clear(),xt}function g(P){const A=[];if(P.shaderID?A.push(P.shaderID):(A.push(P.customVertexShaderID),A.push(P.customFragmentShaderID)),P.defines!==void 0)for(const V in P.defines)A.push(V),A.push(P.defines[V]);return P.isRawShaderMaterial===!1&&(N(A,P),I(A,P),A.push(s.outputColorSpace)),A.push(P.customProgramCacheKey),A.join()}function N(P,A){P.push(A.precision),P.push(A.outputColorSpace),P.push(A.envMapMode),P.push(A.envMapCubeUVHeight),P.push(A.mapUv),P.push(A.alphaMapUv),P.push(A.lightMapUv),P.push(A.aoMapUv),P.push(A.bumpMapUv),P.push(A.normalMapUv),P.push(A.displacementMapUv),P.push(A.emissiveMapUv),P.push(A.metalnessMapUv),P.push(A.roughnessMapUv),P.push(A.anisotropyMapUv),P.push(A.clearcoatMapUv),P.push(A.clearcoatNormalMapUv),P.push(A.clearcoatRoughnessMapUv),P.push(A.iridescenceMapUv),P.push(A.iridescenceThicknessMapUv),P.push(A.sheenColorMapUv),P.push(A.sheenRoughnessMapUv),P.push(A.specularMapUv),P.push(A.specularColorMapUv),P.push(A.specularIntensityMapUv),P.push(A.transmissionMapUv),P.push(A.thicknessMapUv),P.push(A.combine),P.push(A.fogExp2),P.push(A.sizeAttenuation),P.push(A.morphTargetsCount),P.push(A.morphAttributeCount),P.push(A.numDirLights),P.push(A.numPointLights),P.push(A.numSpotLights),P.push(A.numSpotLightMaps),P.push(A.numHemiLights),P.push(A.numRectAreaLights),P.push(A.numDirLightShadows),P.push(A.numPointLightShadows),P.push(A.numSpotLightShadows),P.push(A.numSpotLightShadowsWithMaps),P.push(A.numLightProbes),P.push(A.shadowMapType),P.push(A.toneMapping),P.push(A.numClippingPlanes),P.push(A.numClipIntersection),P.push(A.depthPacking)}function I(P,A){f.disableAll(),A.supportsVertexTextures&&f.enable(0),A.instancing&&f.enable(1),A.instancingColor&&f.enable(2),A.instancingMorph&&f.enable(3),A.matcap&&f.enable(4),A.envMap&&f.enable(5),A.normalMapObjectSpace&&f.enable(6),A.normalMapTangentSpace&&f.enable(7),A.clearcoat&&f.enable(8),A.iridescence&&f.enable(9),A.alphaTest&&f.enable(10),A.vertexColors&&f.enable(11),A.vertexAlphas&&f.enable(12),A.vertexUv1s&&f.enable(13),A.vertexUv2s&&f.enable(14),A.vertexUv3s&&f.enable(15),A.vertexTangents&&f.enable(16),A.anisotropy&&f.enable(17),A.alphaHash&&f.enable(18),A.batching&&f.enable(19),A.dispersion&&f.enable(20),A.batchingColor&&f.enable(21),A.gradientMap&&f.enable(22),P.push(f.mask),f.disableAll(),A.fog&&f.enable(0),A.useFog&&f.enable(1),A.flatShading&&f.enable(2),A.logarithmicDepthBuffer&&f.enable(3),A.reversedDepthBuffer&&f.enable(4),A.skinning&&f.enable(5),A.morphTargets&&f.enable(6),A.morphNormals&&f.enable(7),A.morphColors&&f.enable(8),A.premultipliedAlpha&&f.enable(9),A.shadowMapEnabled&&f.enable(10),A.doubleSided&&f.enable(11),A.flipSided&&f.enable(12),A.useDepthPacking&&f.enable(13),A.dithering&&f.enable(14),A.transmission&&f.enable(15),A.sheen&&f.enable(16),A.opaque&&f.enable(17),A.pointsUvs&&f.enable(18),A.decodeVideoTexture&&f.enable(19),A.decodeVideoTextureEmissive&&f.enable(20),A.alphaToCoverage&&f.enable(21),P.push(f.mask)}function C(P){const A=w[P.type];let V;if(A){const q=Ii[A];V=wx.clone(q.uniforms)}else V=P.uniforms;return V}function H(P,A){let V;for(let q=0,oe=v.length;q<oe;q++){const ve=v[q];if(ve.cacheKey===A){V=ve,++V.usedTimes;break}}return V===void 0&&(V=new eM(s,A,P,l),v.push(V)),V}function O(P){if(--P.usedTimes===0){const A=v.indexOf(P);v[A]=v[v.length-1],v.pop(),P.destroy()}}function k(P){m.remove(P)}function G(){m.dispose()}return{getParameters:y,getProgramCacheKey:g,getUniforms:C,acquireProgram:H,releaseProgram:O,releaseShaderCache:k,programs:v,dispose:G}}function sM(){let s=new WeakMap;function e(u){return s.has(u)}function t(u){let f=s.get(u);return f===void 0&&(f={},s.set(u,f)),f}function r(u){s.delete(u)}function a(u,f,m){s.get(u)[f]=m}function l(){s=new WeakMap}return{has:e,get:t,remove:r,update:a,dispose:l}}function oM(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Eg(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Mg(){const s=[];let e=0;const t=[],r=[],a=[];function l(){e=0,t.length=0,r.length=0,a.length=0}function u(_,x,S,w,b,y){let g=s[e];return g===void 0?(g={id:_.id,object:_,geometry:x,material:S,groupOrder:w,renderOrder:_.renderOrder,z:b,group:y},s[e]=g):(g.id=_.id,g.object=_,g.geometry=x,g.material=S,g.groupOrder=w,g.renderOrder=_.renderOrder,g.z=b,g.group=y),e++,g}function f(_,x,S,w,b,y){const g=u(_,x,S,w,b,y);S.transmission>0?r.push(g):S.transparent===!0?a.push(g):t.push(g)}function m(_,x,S,w,b,y){const g=u(_,x,S,w,b,y);S.transmission>0?r.unshift(g):S.transparent===!0?a.unshift(g):t.unshift(g)}function h(_,x){t.length>1&&t.sort(_||oM),r.length>1&&r.sort(x||Eg),a.length>1&&a.sort(x||Eg)}function v(){for(let _=e,x=s.length;_<x;_++){const S=s[_];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:t,transmissive:r,transparent:a,init:l,push:f,unshift:m,finish:v,sort:h}}function aM(){let s=new WeakMap;function e(r,a){const l=s.get(r);let u;return l===void 0?(u=new Mg,s.set(r,[u])):a>=l.length?(u=new Mg,l.push(u)):u=l[a],u}function t(){s=new WeakMap}return{get:e,dispose:t}}function lM(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Z,color:new Et};break;case"SpotLight":t={position:new Z,direction:new Z,color:new Et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Z,color:new Et,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Z,skyColor:new Et,groundColor:new Et};break;case"RectAreaLight":t={color:new Et,position:new Z,halfWidth:new Z,halfHeight:new Z};break}return s[e.id]=t,t}}}function cM(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let uM=0;function dM(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function fM(s){const e=new lM,t=cM(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new Z);const a=new Z,l=new Zt,u=new Zt;function f(h){let v=0,_=0,x=0;for(let P=0;P<9;P++)r.probe[P].set(0,0,0);let S=0,w=0,b=0,y=0,g=0,N=0,I=0,C=0,H=0,O=0,k=0;h.sort(dM);for(let P=0,A=h.length;P<A;P++){const V=h[P],q=V.color,oe=V.intensity,ve=V.distance,fe=V.shadow&&V.shadow.map?V.shadow.map.texture:null;if(V.isAmbientLight)v+=q.r*oe,_+=q.g*oe,x+=q.b*oe;else if(V.isLightProbe){for(let pe=0;pe<9;pe++)r.probe[pe].addScaledVector(V.sh.coefficients[pe],oe);k++}else if(V.isDirectionalLight){const pe=e.get(V);if(pe.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const me=V.shadow,j=t.get(V);j.shadowIntensity=me.intensity,j.shadowBias=me.bias,j.shadowNormalBias=me.normalBias,j.shadowRadius=me.radius,j.shadowMapSize=me.mapSize,r.directionalShadow[S]=j,r.directionalShadowMap[S]=fe,r.directionalShadowMatrix[S]=V.shadow.matrix,N++}r.directional[S]=pe,S++}else if(V.isSpotLight){const pe=e.get(V);pe.position.setFromMatrixPosition(V.matrixWorld),pe.color.copy(q).multiplyScalar(oe),pe.distance=ve,pe.coneCos=Math.cos(V.angle),pe.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),pe.decay=V.decay,r.spot[b]=pe;const me=V.shadow;if(V.map&&(r.spotLightMap[H]=V.map,H++,me.updateMatrices(V),V.castShadow&&O++),r.spotLightMatrix[b]=me.matrix,V.castShadow){const j=t.get(V);j.shadowIntensity=me.intensity,j.shadowBias=me.bias,j.shadowNormalBias=me.normalBias,j.shadowRadius=me.radius,j.shadowMapSize=me.mapSize,r.spotShadow[b]=j,r.spotShadowMap[b]=fe,C++}b++}else if(V.isRectAreaLight){const pe=e.get(V);pe.color.copy(q).multiplyScalar(oe),pe.halfWidth.set(V.width*.5,0,0),pe.halfHeight.set(0,V.height*.5,0),r.rectArea[y]=pe,y++}else if(V.isPointLight){const pe=e.get(V);if(pe.color.copy(V.color).multiplyScalar(V.intensity),pe.distance=V.distance,pe.decay=V.decay,V.castShadow){const me=V.shadow,j=t.get(V);j.shadowIntensity=me.intensity,j.shadowBias=me.bias,j.shadowNormalBias=me.normalBias,j.shadowRadius=me.radius,j.shadowMapSize=me.mapSize,j.shadowCameraNear=me.camera.near,j.shadowCameraFar=me.camera.far,r.pointShadow[w]=j,r.pointShadowMap[w]=fe,r.pointShadowMatrix[w]=V.shadow.matrix,I++}r.point[w]=pe,w++}else if(V.isHemisphereLight){const pe=e.get(V);pe.skyColor.copy(V.color).multiplyScalar(oe),pe.groundColor.copy(V.groundColor).multiplyScalar(oe),r.hemi[g]=pe,g++}}y>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=We.LTC_FLOAT_1,r.rectAreaLTC2=We.LTC_FLOAT_2):(r.rectAreaLTC1=We.LTC_HALF_1,r.rectAreaLTC2=We.LTC_HALF_2)),r.ambient[0]=v,r.ambient[1]=_,r.ambient[2]=x;const G=r.hash;(G.directionalLength!==S||G.pointLength!==w||G.spotLength!==b||G.rectAreaLength!==y||G.hemiLength!==g||G.numDirectionalShadows!==N||G.numPointShadows!==I||G.numSpotShadows!==C||G.numSpotMaps!==H||G.numLightProbes!==k)&&(r.directional.length=S,r.spot.length=b,r.rectArea.length=y,r.point.length=w,r.hemi.length=g,r.directionalShadow.length=N,r.directionalShadowMap.length=N,r.pointShadow.length=I,r.pointShadowMap.length=I,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=N,r.pointShadowMatrix.length=I,r.spotLightMatrix.length=C+H-O,r.spotLightMap.length=H,r.numSpotLightShadowsWithMaps=O,r.numLightProbes=k,G.directionalLength=S,G.pointLength=w,G.spotLength=b,G.rectAreaLength=y,G.hemiLength=g,G.numDirectionalShadows=N,G.numPointShadows=I,G.numSpotShadows=C,G.numSpotMaps=H,G.numLightProbes=k,r.version=uM++)}function m(h,v){let _=0,x=0,S=0,w=0,b=0;const y=v.matrixWorldInverse;for(let g=0,N=h.length;g<N;g++){const I=h[g];if(I.isDirectionalLight){const C=r.directional[_];C.direction.setFromMatrixPosition(I.matrixWorld),a.setFromMatrixPosition(I.target.matrixWorld),C.direction.sub(a),C.direction.transformDirection(y),_++}else if(I.isSpotLight){const C=r.spot[S];C.position.setFromMatrixPosition(I.matrixWorld),C.position.applyMatrix4(y),C.direction.setFromMatrixPosition(I.matrixWorld),a.setFromMatrixPosition(I.target.matrixWorld),C.direction.sub(a),C.direction.transformDirection(y),S++}else if(I.isRectAreaLight){const C=r.rectArea[w];C.position.setFromMatrixPosition(I.matrixWorld),C.position.applyMatrix4(y),u.identity(),l.copy(I.matrixWorld),l.premultiply(y),u.extractRotation(l),C.halfWidth.set(I.width*.5,0,0),C.halfHeight.set(0,I.height*.5,0),C.halfWidth.applyMatrix4(u),C.halfHeight.applyMatrix4(u),w++}else if(I.isPointLight){const C=r.point[x];C.position.setFromMatrixPosition(I.matrixWorld),C.position.applyMatrix4(y),x++}else if(I.isHemisphereLight){const C=r.hemi[b];C.direction.setFromMatrixPosition(I.matrixWorld),C.direction.transformDirection(y),b++}}}return{setup:f,setupView:m,state:r}}function Tg(s){const e=new fM(s),t=[],r=[];function a(v){h.camera=v,t.length=0,r.length=0}function l(v){t.push(v)}function u(v){r.push(v)}function f(){e.setup(t)}function m(v){e.setupView(t,v)}const h={lightsArray:t,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:h,setupLights:f,setupLightsView:m,pushLight:l,pushShadow:u}}function hM(s){let e=new WeakMap;function t(a,l=0){const u=e.get(a);let f;return u===void 0?(f=new Tg(s),e.set(a,[f])):l>=u.length?(f=new Tg(s),u.push(f)):f=u[l],f}function r(){e=new WeakMap}return{get:t,dispose:r}}const pM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,mM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function gM(s,e,t){let r=new kf;const a=new Mt,l=new Mt,u=new Ot,f=new Ox({depthPacking:q_}),m=new kx,h={},v=t.maxTextureSize,_={[zr]:jn,[jn]:zr,[Di]:Di},x=new Br({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Mt},radius:{value:4}},vertexShader:pM,fragmentShader:mM}),S=x.clone();S.defines.HORIZONTAL_PASS=1;const w=new Ti;w.setAttribute("position",new Oi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new an(w,x),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Pg;let g=this.type;this.render=function(O,k,G){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||O.length===0)return;const P=s.getRenderTarget(),A=s.getActiveCubeFace(),V=s.getActiveMipmapLevel(),q=s.state;q.setBlending(Or),q.buffers.depth.getReversed()===!0?q.buffers.color.setClear(0,0,0,0):q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);const oe=g!==rr&&this.type===rr,ve=g===rr&&this.type!==rr;for(let fe=0,pe=O.length;fe<pe;fe++){const me=O[fe],j=me.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",me,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;a.copy(j.mapSize);const _e=j.getFrameExtents();if(a.multiply(_e),l.copy(j.mapSize),(a.x>v||a.y>v)&&(a.x>v&&(l.x=Math.floor(v/_e.x),a.x=l.x*_e.x,j.mapSize.x=l.x),a.y>v&&(l.y=Math.floor(v/_e.y),a.y=l.y*_e.y,j.mapSize.y=l.y)),j.map===null||oe===!0||ve===!0){const z=this.type!==rr?{minFilter:Mi,magFilter:Mi}:{};j.map!==null&&j.map.dispose(),j.map=new _s(a.x,a.y,z),j.map.texture.name=me.name+".shadowMap",j.camera.updateProjectionMatrix()}s.setRenderTarget(j.map),s.clear();const de=j.getViewportCount();for(let z=0;z<de;z++){const le=j.getViewport(z);u.set(l.x*le.x,l.y*le.y,l.x*le.z,l.y*le.w),q.viewport(u),j.updateMatrices(me,z),r=j.getFrustum(),C(k,G,j.camera,me,this.type)}j.isPointLightShadow!==!0&&this.type===rr&&N(j,G),j.needsUpdate=!1}g=this.type,y.needsUpdate=!1,s.setRenderTarget(P,A,V)};function N(O,k){const G=e.update(b);x.defines.VSM_SAMPLES!==O.blurSamples&&(x.defines.VSM_SAMPLES=O.blurSamples,S.defines.VSM_SAMPLES=O.blurSamples,x.needsUpdate=!0,S.needsUpdate=!0),O.mapPass===null&&(O.mapPass=new _s(a.x,a.y)),x.uniforms.shadow_pass.value=O.map.texture,x.uniforms.resolution.value=O.mapSize,x.uniforms.radius.value=O.radius,s.setRenderTarget(O.mapPass),s.clear(),s.renderBufferDirect(k,null,G,x,b,null),S.uniforms.shadow_pass.value=O.mapPass.texture,S.uniforms.resolution.value=O.mapSize,S.uniforms.radius.value=O.radius,s.setRenderTarget(O.map),s.clear(),s.renderBufferDirect(k,null,G,S,b,null)}function I(O,k,G,P){let A=null;const V=G.isPointLight===!0?O.customDistanceMaterial:O.customDepthMaterial;if(V!==void 0)A=V;else if(A=G.isPointLight===!0?m:f,s.localClippingEnabled&&k.clipShadows===!0&&Array.isArray(k.clippingPlanes)&&k.clippingPlanes.length!==0||k.displacementMap&&k.displacementScale!==0||k.alphaMap&&k.alphaTest>0||k.map&&k.alphaTest>0||k.alphaToCoverage===!0){const q=A.uuid,oe=k.uuid;let ve=h[q];ve===void 0&&(ve={},h[q]=ve);let fe=ve[oe];fe===void 0&&(fe=A.clone(),ve[oe]=fe,k.addEventListener("dispose",H)),A=fe}if(A.visible=k.visible,A.wireframe=k.wireframe,P===rr?A.side=k.shadowSide!==null?k.shadowSide:k.side:A.side=k.shadowSide!==null?k.shadowSide:_[k.side],A.alphaMap=k.alphaMap,A.alphaTest=k.alphaToCoverage===!0?.5:k.alphaTest,A.map=k.map,A.clipShadows=k.clipShadows,A.clippingPlanes=k.clippingPlanes,A.clipIntersection=k.clipIntersection,A.displacementMap=k.displacementMap,A.displacementScale=k.displacementScale,A.displacementBias=k.displacementBias,A.wireframeLinewidth=k.wireframeLinewidth,A.linewidth=k.linewidth,G.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const q=s.properties.get(A);q.light=G}return A}function C(O,k,G,P,A){if(O.visible===!1)return;if(O.layers.test(k.layers)&&(O.isMesh||O.isLine||O.isPoints)&&(O.castShadow||O.receiveShadow&&A===rr)&&(!O.frustumCulled||r.intersectsObject(O))){O.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,O.matrixWorld);const oe=e.update(O),ve=O.material;if(Array.isArray(ve)){const fe=oe.groups;for(let pe=0,me=fe.length;pe<me;pe++){const j=fe[pe],_e=ve[j.materialIndex];if(_e&&_e.visible){const de=I(O,_e,P,A);O.onBeforeShadow(s,O,k,G,oe,de,j),s.renderBufferDirect(G,null,oe,de,O,j),O.onAfterShadow(s,O,k,G,oe,de,j)}}}else if(ve.visible){const fe=I(O,ve,P,A);O.onBeforeShadow(s,O,k,G,oe,fe,null),s.renderBufferDirect(G,null,oe,fe,O,null),O.onAfterShadow(s,O,k,G,oe,fe,null)}}const q=O.children;for(let oe=0,ve=q.length;oe<ve;oe++)C(q[oe],k,G,P,A)}function H(O){O.target.removeEventListener("dispose",H);for(const G in h){const P=h[G],A=O.target.uuid;A in P&&(P[A].dispose(),delete P[A])}}}const vM={[zd]:Bd,[Hd]:Wd,[Vd]:jd,[ao]:Gd,[Bd]:zd,[Wd]:Hd,[jd]:Vd,[Gd]:ao};function _M(s,e){function t(){let L=!1;const Q=new Ot;let ce=null;const Te=new Ot(0,0,0,0);return{setMask:function(Se){ce!==Se&&!L&&(s.colorMask(Se,Se,Se,Se),ce=Se)},setLocked:function(Se){L=Se},setClear:function(Se,ye,Ve,Ye,xt){xt===!0&&(Se*=Ye,ye*=Ye,Ve*=Ye),Q.set(Se,ye,Ve,Ye),Te.equals(Q)===!1&&(s.clearColor(Se,ye,Ve,Ye),Te.copy(Q))},reset:function(){L=!1,ce=null,Te.set(-1,0,0,0)}}}function r(){let L=!1,Q=!1,ce=null,Te=null,Se=null;return{setReversed:function(ye){if(Q!==ye){const Ve=e.get("EXT_clip_control");ye?Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.ZERO_TO_ONE_EXT):Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.NEGATIVE_ONE_TO_ONE_EXT),Q=ye;const Ye=Se;Se=null,this.setClear(Ye)}},getReversed:function(){return Q},setTest:function(ye){ye?ge(s.DEPTH_TEST):we(s.DEPTH_TEST)},setMask:function(ye){ce!==ye&&!L&&(s.depthMask(ye),ce=ye)},setFunc:function(ye){if(Q&&(ye=vM[ye]),Te!==ye){switch(ye){case zd:s.depthFunc(s.NEVER);break;case Bd:s.depthFunc(s.ALWAYS);break;case Hd:s.depthFunc(s.LESS);break;case ao:s.depthFunc(s.LEQUAL);break;case Vd:s.depthFunc(s.EQUAL);break;case Gd:s.depthFunc(s.GEQUAL);break;case Wd:s.depthFunc(s.GREATER);break;case jd:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Te=ye}},setLocked:function(ye){L=ye},setClear:function(ye){Se!==ye&&(Q&&(ye=1-ye),s.clearDepth(ye),Se=ye)},reset:function(){L=!1,ce=null,Te=null,Se=null,Q=!1}}}function a(){let L=!1,Q=null,ce=null,Te=null,Se=null,ye=null,Ve=null,Ye=null,xt=null;return{setTest:function(mt){L||(mt?ge(s.STENCIL_TEST):we(s.STENCIL_TEST))},setMask:function(mt){Q!==mt&&!L&&(s.stencilMask(mt),Q=mt)},setFunc:function(mt,mn,en){(ce!==mt||Te!==mn||Se!==en)&&(s.stencilFunc(mt,mn,en),ce=mt,Te=mn,Se=en)},setOp:function(mt,mn,en){(ye!==mt||Ve!==mn||Ye!==en)&&(s.stencilOp(mt,mn,en),ye=mt,Ve=mn,Ye=en)},setLocked:function(mt){L=mt},setClear:function(mt){xt!==mt&&(s.clearStencil(mt),xt=mt)},reset:function(){L=!1,Q=null,ce=null,Te=null,Se=null,ye=null,Ve=null,Ye=null,xt=null}}}const l=new t,u=new r,f=new a,m=new WeakMap,h=new WeakMap;let v={},_={},x=new WeakMap,S=[],w=null,b=!1,y=null,g=null,N=null,I=null,C=null,H=null,O=null,k=new Et(0,0,0),G=0,P=!1,A=null,V=null,q=null,oe=null,ve=null;const fe=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let pe=!1,me=0;const j=s.getParameter(s.VERSION);j.indexOf("WebGL")!==-1?(me=parseFloat(/^WebGL (\d)/.exec(j)[1]),pe=me>=1):j.indexOf("OpenGL ES")!==-1&&(me=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),pe=me>=2);let _e=null,de={};const z=s.getParameter(s.SCISSOR_BOX),le=s.getParameter(s.VIEWPORT),Ue=new Ot().fromArray(z),ke=new Ot().fromArray(le);function Xe(L,Q,ce,Te){const Se=new Uint8Array(4),ye=s.createTexture();s.bindTexture(L,ye),s.texParameteri(L,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(L,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ve=0;Ve<ce;Ve++)L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY?s.texImage3D(Q,0,s.RGBA,1,1,Te,0,s.RGBA,s.UNSIGNED_BYTE,Se):s.texImage2D(Q+Ve,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Se);return ye}const se={};se[s.TEXTURE_2D]=Xe(s.TEXTURE_2D,s.TEXTURE_2D,1),se[s.TEXTURE_CUBE_MAP]=Xe(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),se[s.TEXTURE_2D_ARRAY]=Xe(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),se[s.TEXTURE_3D]=Xe(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),f.setClear(0),ge(s.DEPTH_TEST),u.setFunc(ao),Le(!1),K(Am),ge(s.CULL_FACE),Ae(Or);function ge(L){v[L]!==!0&&(s.enable(L),v[L]=!0)}function we(L){v[L]!==!1&&(s.disable(L),v[L]=!1)}function Be(L,Q){return _[L]!==Q?(s.bindFramebuffer(L,Q),_[L]=Q,L===s.DRAW_FRAMEBUFFER&&(_[s.FRAMEBUFFER]=Q),L===s.FRAMEBUFFER&&(_[s.DRAW_FRAMEBUFFER]=Q),!0):!1}function je(L,Q){let ce=S,Te=!1;if(L){ce=x.get(Q),ce===void 0&&(ce=[],x.set(Q,ce));const Se=L.textures;if(ce.length!==Se.length||ce[0]!==s.COLOR_ATTACHMENT0){for(let ye=0,Ve=Se.length;ye<Ve;ye++)ce[ye]=s.COLOR_ATTACHMENT0+ye;ce.length=Se.length,Te=!0}}else ce[0]!==s.BACK&&(ce[0]=s.BACK,Te=!0);Te&&s.drawBuffers(ce)}function pt(L){return w!==L?(s.useProgram(L),w=L,!0):!1}const Ht={[ds]:s.FUNC_ADD,[S_]:s.FUNC_SUBTRACT,[E_]:s.FUNC_REVERSE_SUBTRACT};Ht[M_]=s.MIN,Ht[T_]=s.MAX;const B={[w_]:s.ZERO,[A_]:s.ONE,[R_]:s.SRC_COLOR,[Od]:s.SRC_ALPHA,[I_]:s.SRC_ALPHA_SATURATE,[L_]:s.DST_COLOR,[b_]:s.DST_ALPHA,[C_]:s.ONE_MINUS_SRC_COLOR,[kd]:s.ONE_MINUS_SRC_ALPHA,[N_]:s.ONE_MINUS_DST_COLOR,[P_]:s.ONE_MINUS_DST_ALPHA,[D_]:s.CONSTANT_COLOR,[U_]:s.ONE_MINUS_CONSTANT_COLOR,[F_]:s.CONSTANT_ALPHA,[O_]:s.ONE_MINUS_CONSTANT_ALPHA};function Ae(L,Q,ce,Te,Se,ye,Ve,Ye,xt,mt){if(L===Or){b===!0&&(we(s.BLEND),b=!1);return}if(b===!1&&(ge(s.BLEND),b=!0),L!==y_){if(L!==y||mt!==P){if((g!==ds||C!==ds)&&(s.blendEquation(s.FUNC_ADD),g=ds,C=ds),mt)switch(L){case io:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Rm:s.blendFunc(s.ONE,s.ONE);break;case Cm:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case bm:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case io:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Rm:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Cm:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case bm:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}N=null,I=null,H=null,O=null,k.set(0,0,0),G=0,y=L,P=mt}return}Se=Se||Q,ye=ye||ce,Ve=Ve||Te,(Q!==g||Se!==C)&&(s.blendEquationSeparate(Ht[Q],Ht[Se]),g=Q,C=Se),(ce!==N||Te!==I||ye!==H||Ve!==O)&&(s.blendFuncSeparate(B[ce],B[Te],B[ye],B[Ve]),N=ce,I=Te,H=ye,O=Ve),(Ye.equals(k)===!1||xt!==G)&&(s.blendColor(Ye.r,Ye.g,Ye.b,xt),k.copy(Ye),G=xt),y=L,P=!1}function Fe(L,Q){L.side===Di?we(s.CULL_FACE):ge(s.CULL_FACE);let ce=L.side===jn;Q&&(ce=!ce),Le(ce),L.blending===io&&L.transparent===!1?Ae(Or):Ae(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),u.setFunc(L.depthFunc),u.setTest(L.depthTest),u.setMask(L.depthWrite),l.setMask(L.colorWrite);const Te=L.stencilWrite;f.setTest(Te),Te&&(f.setMask(L.stencilWriteMask),f.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),f.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),ze(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?ge(s.SAMPLE_ALPHA_TO_COVERAGE):we(s.SAMPLE_ALPHA_TO_COVERAGE)}function Le(L){A!==L&&(L?s.frontFace(s.CW):s.frontFace(s.CCW),A=L)}function K(L){L!==__?(ge(s.CULL_FACE),L!==V&&(L===Am?s.cullFace(s.BACK):L===x_?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):we(s.CULL_FACE),V=L}function ut(L){L!==q&&(pe&&s.lineWidth(L),q=L)}function ze(L,Q,ce){L?(ge(s.POLYGON_OFFSET_FILL),(oe!==Q||ve!==ce)&&(s.polygonOffset(Q,ce),oe=Q,ve=ce)):we(s.POLYGON_OFFSET_FILL)}function st(L){L?ge(s.SCISSOR_TEST):we(s.SCISSOR_TEST)}function Ct(L){L===void 0&&(L=s.TEXTURE0+fe-1),_e!==L&&(s.activeTexture(L),_e=L)}function Dt(L,Q,ce){ce===void 0&&(_e===null?ce=s.TEXTURE0+fe-1:ce=_e);let Te=de[ce];Te===void 0&&(Te={type:void 0,texture:void 0},de[ce]=Te),(Te.type!==L||Te.texture!==Q)&&(_e!==ce&&(s.activeTexture(ce),_e=ce),s.bindTexture(L,Q||se[L]),Te.type=L,Te.texture=Q)}function D(){const L=de[_e];L!==void 0&&L.type!==void 0&&(s.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function T(){try{s.compressedTexImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ne(){try{s.compressedTexImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ee(){try{s.texSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Re(){try{s.texSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function xe(){try{s.compressedTexSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function et(){try{s.compressedTexSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function De(){try{s.texStorage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function He(){try{s.texStorage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function tt(){try{s.texImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ne(){try{s.texImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function U(L){Ue.equals(L)===!1&&(s.scissor(L.x,L.y,L.z,L.w),Ue.copy(L))}function ee(L){ke.equals(L)===!1&&(s.viewport(L.x,L.y,L.z,L.w),ke.copy(L))}function ie(L,Q){let ce=h.get(Q);ce===void 0&&(ce=new WeakMap,h.set(Q,ce));let Te=ce.get(L);Te===void 0&&(Te=s.getUniformBlockIndex(Q,L.name),ce.set(L,Te))}function J(L,Q){const Te=h.get(Q).get(L);m.get(Q)!==Te&&(s.uniformBlockBinding(Q,Te,L.__bindingPointIndex),m.set(Q,Te))}function Me(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),u.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),v={},_e=null,de={},_={},x=new WeakMap,S=[],w=null,b=!1,y=null,g=null,N=null,I=null,C=null,H=null,O=null,k=new Et(0,0,0),G=0,P=!1,A=null,V=null,q=null,oe=null,ve=null,Ue.set(0,0,s.canvas.width,s.canvas.height),ke.set(0,0,s.canvas.width,s.canvas.height),l.reset(),u.reset(),f.reset()}return{buffers:{color:l,depth:u,stencil:f},enable:ge,disable:we,bindFramebuffer:Be,drawBuffers:je,useProgram:pt,setBlending:Ae,setMaterial:Fe,setFlipSided:Le,setCullFace:K,setLineWidth:ut,setPolygonOffset:ze,setScissorTest:st,activeTexture:Ct,bindTexture:Dt,unbindTexture:D,compressedTexImage2D:T,compressedTexImage3D:ne,texImage2D:tt,texImage3D:Ne,updateUBOMapping:ie,uniformBlockBinding:J,texStorage2D:De,texStorage3D:He,texSubImage2D:Ee,texSubImage3D:Re,compressedTexSubImage2D:xe,compressedTexSubImage3D:et,scissor:U,viewport:ee,reset:Me}}function xM(s,e,t,r,a,l,u){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Mt,v=new WeakMap;let _;const x=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(D,T){return S?new OffscreenCanvas(D,T):oc("canvas")}function b(D,T,ne){let Ee=1;const Re=Dt(D);if((Re.width>ne||Re.height>ne)&&(Ee=ne/Math.max(Re.width,Re.height)),Ee<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const xe=Math.floor(Ee*Re.width),et=Math.floor(Ee*Re.height);_===void 0&&(_=w(xe,et));const De=T?w(xe,et):_;return De.width=xe,De.height=et,De.getContext("2d").drawImage(D,0,0,xe,et),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Re.width+"x"+Re.height+") to ("+xe+"x"+et+")."),De}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Re.width+"x"+Re.height+")."),D;return D}function y(D){return D.generateMipmaps}function g(D){s.generateMipmap(D)}function N(D){return D.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?s.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function I(D,T,ne,Ee,Re=!1){if(D!==null){if(s[D]!==void 0)return s[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let xe=T;if(T===s.RED&&(ne===s.FLOAT&&(xe=s.R32F),ne===s.HALF_FLOAT&&(xe=s.R16F),ne===s.UNSIGNED_BYTE&&(xe=s.R8)),T===s.RED_INTEGER&&(ne===s.UNSIGNED_BYTE&&(xe=s.R8UI),ne===s.UNSIGNED_SHORT&&(xe=s.R16UI),ne===s.UNSIGNED_INT&&(xe=s.R32UI),ne===s.BYTE&&(xe=s.R8I),ne===s.SHORT&&(xe=s.R16I),ne===s.INT&&(xe=s.R32I)),T===s.RG&&(ne===s.FLOAT&&(xe=s.RG32F),ne===s.HALF_FLOAT&&(xe=s.RG16F),ne===s.UNSIGNED_BYTE&&(xe=s.RG8)),T===s.RG_INTEGER&&(ne===s.UNSIGNED_BYTE&&(xe=s.RG8UI),ne===s.UNSIGNED_SHORT&&(xe=s.RG16UI),ne===s.UNSIGNED_INT&&(xe=s.RG32UI),ne===s.BYTE&&(xe=s.RG8I),ne===s.SHORT&&(xe=s.RG16I),ne===s.INT&&(xe=s.RG32I)),T===s.RGB_INTEGER&&(ne===s.UNSIGNED_BYTE&&(xe=s.RGB8UI),ne===s.UNSIGNED_SHORT&&(xe=s.RGB16UI),ne===s.UNSIGNED_INT&&(xe=s.RGB32UI),ne===s.BYTE&&(xe=s.RGB8I),ne===s.SHORT&&(xe=s.RGB16I),ne===s.INT&&(xe=s.RGB32I)),T===s.RGBA_INTEGER&&(ne===s.UNSIGNED_BYTE&&(xe=s.RGBA8UI),ne===s.UNSIGNED_SHORT&&(xe=s.RGBA16UI),ne===s.UNSIGNED_INT&&(xe=s.RGBA32UI),ne===s.BYTE&&(xe=s.RGBA8I),ne===s.SHORT&&(xe=s.RGBA16I),ne===s.INT&&(xe=s.RGBA32I)),T===s.RGB&&(ne===s.UNSIGNED_INT_5_9_9_9_REV&&(xe=s.RGB9_E5),ne===s.UNSIGNED_INT_10F_11F_11F_REV&&(xe=s.R11F_G11F_B10F)),T===s.RGBA){const et=Re?rc:Pt.getTransfer(Ee);ne===s.FLOAT&&(xe=s.RGBA32F),ne===s.HALF_FLOAT&&(xe=s.RGBA16F),ne===s.UNSIGNED_BYTE&&(xe=et===Ft?s.SRGB8_ALPHA8:s.RGBA8),ne===s.UNSIGNED_SHORT_4_4_4_4&&(xe=s.RGBA4),ne===s.UNSIGNED_SHORT_5_5_5_1&&(xe=s.RGB5_A1)}return(xe===s.R16F||xe===s.R32F||xe===s.RG16F||xe===s.RG32F||xe===s.RGBA16F||xe===s.RGBA32F)&&e.get("EXT_color_buffer_float"),xe}function C(D,T){let ne;return D?T===null||T===vs||T===pa?ne=s.DEPTH24_STENCIL8:T===or?ne=s.DEPTH32F_STENCIL8:T===ha&&(ne=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===vs||T===pa?ne=s.DEPTH_COMPONENT24:T===or?ne=s.DEPTH_COMPONENT32F:T===ha&&(ne=s.DEPTH_COMPONENT16),ne}function H(D,T){return y(D)===!0||D.isFramebufferTexture&&D.minFilter!==Mi&&D.minFilter!==Ui?Math.log2(Math.max(T.width,T.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?T.mipmaps.length:1}function O(D){const T=D.target;T.removeEventListener("dispose",O),G(T),T.isVideoTexture&&v.delete(T)}function k(D){const T=D.target;T.removeEventListener("dispose",k),A(T)}function G(D){const T=r.get(D);if(T.__webglInit===void 0)return;const ne=D.source,Ee=x.get(ne);if(Ee){const Re=Ee[T.__cacheKey];Re.usedTimes--,Re.usedTimes===0&&P(D),Object.keys(Ee).length===0&&x.delete(ne)}r.remove(D)}function P(D){const T=r.get(D);s.deleteTexture(T.__webglTexture);const ne=D.source,Ee=x.get(ne);delete Ee[T.__cacheKey],u.memory.textures--}function A(D){const T=r.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),r.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let Ee=0;Ee<6;Ee++){if(Array.isArray(T.__webglFramebuffer[Ee]))for(let Re=0;Re<T.__webglFramebuffer[Ee].length;Re++)s.deleteFramebuffer(T.__webglFramebuffer[Ee][Re]);else s.deleteFramebuffer(T.__webglFramebuffer[Ee]);T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer[Ee])}else{if(Array.isArray(T.__webglFramebuffer))for(let Ee=0;Ee<T.__webglFramebuffer.length;Ee++)s.deleteFramebuffer(T.__webglFramebuffer[Ee]);else s.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&s.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let Ee=0;Ee<T.__webglColorRenderbuffer.length;Ee++)T.__webglColorRenderbuffer[Ee]&&s.deleteRenderbuffer(T.__webglColorRenderbuffer[Ee]);T.__webglDepthRenderbuffer&&s.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const ne=D.textures;for(let Ee=0,Re=ne.length;Ee<Re;Ee++){const xe=r.get(ne[Ee]);xe.__webglTexture&&(s.deleteTexture(xe.__webglTexture),u.memory.textures--),r.remove(ne[Ee])}r.remove(D)}let V=0;function q(){V=0}function oe(){const D=V;return D>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+a.maxTextures),V+=1,D}function ve(D){const T=[];return T.push(D.wrapS),T.push(D.wrapT),T.push(D.wrapR||0),T.push(D.magFilter),T.push(D.minFilter),T.push(D.anisotropy),T.push(D.internalFormat),T.push(D.format),T.push(D.type),T.push(D.generateMipmaps),T.push(D.premultiplyAlpha),T.push(D.flipY),T.push(D.unpackAlignment),T.push(D.colorSpace),T.join()}function fe(D,T){const ne=r.get(D);if(D.isVideoTexture&&st(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&ne.__version!==D.version){const Ee=D.image;if(Ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{se(ne,D,T);return}}else D.isExternalTexture&&(ne.__webglTexture=D.sourceTexture?D.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,ne.__webglTexture,s.TEXTURE0+T)}function pe(D,T){const ne=r.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&ne.__version!==D.version){se(ne,D,T);return}t.bindTexture(s.TEXTURE_2D_ARRAY,ne.__webglTexture,s.TEXTURE0+T)}function me(D,T){const ne=r.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&ne.__version!==D.version){se(ne,D,T);return}t.bindTexture(s.TEXTURE_3D,ne.__webglTexture,s.TEXTURE0+T)}function j(D,T){const ne=r.get(D);if(D.version>0&&ne.__version!==D.version){ge(ne,D,T);return}t.bindTexture(s.TEXTURE_CUBE_MAP,ne.__webglTexture,s.TEXTURE0+T)}const _e={[qd]:s.REPEAT,[ps]:s.CLAMP_TO_EDGE,[Kd]:s.MIRRORED_REPEAT},de={[Mi]:s.NEAREST,[X_]:s.NEAREST_MIPMAP_NEAREST,[bl]:s.NEAREST_MIPMAP_LINEAR,[Ui]:s.LINEAR,[Qu]:s.LINEAR_MIPMAP_NEAREST,[ms]:s.LINEAR_MIPMAP_LINEAR},z={[$_]:s.NEVER,[nx]:s.ALWAYS,[Z_]:s.LESS,[Wg]:s.LEQUAL,[Q_]:s.EQUAL,[tx]:s.GEQUAL,[J_]:s.GREATER,[ex]:s.NOTEQUAL};function le(D,T){if(T.type===or&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Ui||T.magFilter===Qu||T.magFilter===bl||T.magFilter===ms||T.minFilter===Ui||T.minFilter===Qu||T.minFilter===bl||T.minFilter===ms)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(D,s.TEXTURE_WRAP_S,_e[T.wrapS]),s.texParameteri(D,s.TEXTURE_WRAP_T,_e[T.wrapT]),(D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY)&&s.texParameteri(D,s.TEXTURE_WRAP_R,_e[T.wrapR]),s.texParameteri(D,s.TEXTURE_MAG_FILTER,de[T.magFilter]),s.texParameteri(D,s.TEXTURE_MIN_FILTER,de[T.minFilter]),T.compareFunction&&(s.texParameteri(D,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(D,s.TEXTURE_COMPARE_FUNC,z[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Mi||T.minFilter!==bl&&T.minFilter!==ms||T.type===or&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||r.get(T).__currentAnisotropy){const ne=e.get("EXT_texture_filter_anisotropic");s.texParameterf(D,ne.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,a.getMaxAnisotropy())),r.get(T).__currentAnisotropy=T.anisotropy}}}function Ue(D,T){let ne=!1;D.__webglInit===void 0&&(D.__webglInit=!0,T.addEventListener("dispose",O));const Ee=T.source;let Re=x.get(Ee);Re===void 0&&(Re={},x.set(Ee,Re));const xe=ve(T);if(xe!==D.__cacheKey){Re[xe]===void 0&&(Re[xe]={texture:s.createTexture(),usedTimes:0},u.memory.textures++,ne=!0),Re[xe].usedTimes++;const et=Re[D.__cacheKey];et!==void 0&&(Re[D.__cacheKey].usedTimes--,et.usedTimes===0&&P(T)),D.__cacheKey=xe,D.__webglTexture=Re[xe].texture}return ne}function ke(D,T,ne){return Math.floor(Math.floor(D/ne)/T)}function Xe(D,T,ne,Ee){const xe=D.updateRanges;if(xe.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,T.width,T.height,ne,Ee,T.data);else{xe.sort((Ne,U)=>Ne.start-U.start);let et=0;for(let Ne=1;Ne<xe.length;Ne++){const U=xe[et],ee=xe[Ne],ie=U.start+U.count,J=ke(ee.start,T.width,4),Me=ke(U.start,T.width,4);ee.start<=ie+1&&J===Me&&ke(ee.start+ee.count-1,T.width,4)===J?U.count=Math.max(U.count,ee.start+ee.count-U.start):(++et,xe[et]=ee)}xe.length=et+1;const De=s.getParameter(s.UNPACK_ROW_LENGTH),He=s.getParameter(s.UNPACK_SKIP_PIXELS),tt=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,T.width);for(let Ne=0,U=xe.length;Ne<U;Ne++){const ee=xe[Ne],ie=Math.floor(ee.start/4),J=Math.ceil(ee.count/4),Me=ie%T.width,L=Math.floor(ie/T.width),Q=J,ce=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,Me),s.pixelStorei(s.UNPACK_SKIP_ROWS,L),t.texSubImage2D(s.TEXTURE_2D,0,Me,L,Q,ce,ne,Ee,T.data)}D.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,De),s.pixelStorei(s.UNPACK_SKIP_PIXELS,He),s.pixelStorei(s.UNPACK_SKIP_ROWS,tt)}}function se(D,T,ne){let Ee=s.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(Ee=s.TEXTURE_2D_ARRAY),T.isData3DTexture&&(Ee=s.TEXTURE_3D);const Re=Ue(D,T),xe=T.source;t.bindTexture(Ee,D.__webglTexture,s.TEXTURE0+ne);const et=r.get(xe);if(xe.version!==et.__version||Re===!0){t.activeTexture(s.TEXTURE0+ne);const De=Pt.getPrimaries(Pt.workingColorSpace),He=T.colorSpace===Fr?null:Pt.getPrimaries(T.colorSpace),tt=T.colorSpace===Fr||De===He?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,tt);let Ne=b(T.image,!1,a.maxTextureSize);Ne=Ct(T,Ne);const U=l.convert(T.format,T.colorSpace),ee=l.convert(T.type);let ie=I(T.internalFormat,U,ee,T.colorSpace,T.isVideoTexture);le(Ee,T);let J;const Me=T.mipmaps,L=T.isVideoTexture!==!0,Q=et.__version===void 0||Re===!0,ce=xe.dataReady,Te=H(T,Ne);if(T.isDepthTexture)ie=C(T.format===ga,T.type),Q&&(L?t.texStorage2D(s.TEXTURE_2D,1,ie,Ne.width,Ne.height):t.texImage2D(s.TEXTURE_2D,0,ie,Ne.width,Ne.height,0,U,ee,null));else if(T.isDataTexture)if(Me.length>0){L&&Q&&t.texStorage2D(s.TEXTURE_2D,Te,ie,Me[0].width,Me[0].height);for(let Se=0,ye=Me.length;Se<ye;Se++)J=Me[Se],L?ce&&t.texSubImage2D(s.TEXTURE_2D,Se,0,0,J.width,J.height,U,ee,J.data):t.texImage2D(s.TEXTURE_2D,Se,ie,J.width,J.height,0,U,ee,J.data);T.generateMipmaps=!1}else L?(Q&&t.texStorage2D(s.TEXTURE_2D,Te,ie,Ne.width,Ne.height),ce&&Xe(T,Ne,U,ee)):t.texImage2D(s.TEXTURE_2D,0,ie,Ne.width,Ne.height,0,U,ee,Ne.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){L&&Q&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Te,ie,Me[0].width,Me[0].height,Ne.depth);for(let Se=0,ye=Me.length;Se<ye;Se++)if(J=Me[Se],T.format!==Ei)if(U!==null)if(L){if(ce)if(T.layerUpdates.size>0){const Ve=eg(J.width,J.height,T.format,T.type);for(const Ye of T.layerUpdates){const xt=J.data.subarray(Ye*Ve/J.data.BYTES_PER_ELEMENT,(Ye+1)*Ve/J.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Se,0,0,Ye,J.width,J.height,1,U,xt)}T.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Se,0,0,0,J.width,J.height,Ne.depth,U,J.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Se,ie,J.width,J.height,Ne.depth,0,J.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else L?ce&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,Se,0,0,0,J.width,J.height,Ne.depth,U,ee,J.data):t.texImage3D(s.TEXTURE_2D_ARRAY,Se,ie,J.width,J.height,Ne.depth,0,U,ee,J.data)}else{L&&Q&&t.texStorage2D(s.TEXTURE_2D,Te,ie,Me[0].width,Me[0].height);for(let Se=0,ye=Me.length;Se<ye;Se++)J=Me[Se],T.format!==Ei?U!==null?L?ce&&t.compressedTexSubImage2D(s.TEXTURE_2D,Se,0,0,J.width,J.height,U,J.data):t.compressedTexImage2D(s.TEXTURE_2D,Se,ie,J.width,J.height,0,J.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?ce&&t.texSubImage2D(s.TEXTURE_2D,Se,0,0,J.width,J.height,U,ee,J.data):t.texImage2D(s.TEXTURE_2D,Se,ie,J.width,J.height,0,U,ee,J.data)}else if(T.isDataArrayTexture)if(L){if(Q&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Te,ie,Ne.width,Ne.height,Ne.depth),ce)if(T.layerUpdates.size>0){const Se=eg(Ne.width,Ne.height,T.format,T.type);for(const ye of T.layerUpdates){const Ve=Ne.data.subarray(ye*Se/Ne.data.BYTES_PER_ELEMENT,(ye+1)*Se/Ne.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,ye,Ne.width,Ne.height,1,U,ee,Ve)}T.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Ne.width,Ne.height,Ne.depth,U,ee,Ne.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,ie,Ne.width,Ne.height,Ne.depth,0,U,ee,Ne.data);else if(T.isData3DTexture)L?(Q&&t.texStorage3D(s.TEXTURE_3D,Te,ie,Ne.width,Ne.height,Ne.depth),ce&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Ne.width,Ne.height,Ne.depth,U,ee,Ne.data)):t.texImage3D(s.TEXTURE_3D,0,ie,Ne.width,Ne.height,Ne.depth,0,U,ee,Ne.data);else if(T.isFramebufferTexture){if(Q)if(L)t.texStorage2D(s.TEXTURE_2D,Te,ie,Ne.width,Ne.height);else{let Se=Ne.width,ye=Ne.height;for(let Ve=0;Ve<Te;Ve++)t.texImage2D(s.TEXTURE_2D,Ve,ie,Se,ye,0,U,ee,null),Se>>=1,ye>>=1}}else if(Me.length>0){if(L&&Q){const Se=Dt(Me[0]);t.texStorage2D(s.TEXTURE_2D,Te,ie,Se.width,Se.height)}for(let Se=0,ye=Me.length;Se<ye;Se++)J=Me[Se],L?ce&&t.texSubImage2D(s.TEXTURE_2D,Se,0,0,U,ee,J):t.texImage2D(s.TEXTURE_2D,Se,ie,U,ee,J);T.generateMipmaps=!1}else if(L){if(Q){const Se=Dt(Ne);t.texStorage2D(s.TEXTURE_2D,Te,ie,Se.width,Se.height)}ce&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,U,ee,Ne)}else t.texImage2D(s.TEXTURE_2D,0,ie,U,ee,Ne);y(T)&&g(Ee),et.__version=xe.version,T.onUpdate&&T.onUpdate(T)}D.__version=T.version}function ge(D,T,ne){if(T.image.length!==6)return;const Ee=Ue(D,T),Re=T.source;t.bindTexture(s.TEXTURE_CUBE_MAP,D.__webglTexture,s.TEXTURE0+ne);const xe=r.get(Re);if(Re.version!==xe.__version||Ee===!0){t.activeTexture(s.TEXTURE0+ne);const et=Pt.getPrimaries(Pt.workingColorSpace),De=T.colorSpace===Fr?null:Pt.getPrimaries(T.colorSpace),He=T.colorSpace===Fr||et===De?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,He);const tt=T.isCompressedTexture||T.image[0].isCompressedTexture,Ne=T.image[0]&&T.image[0].isDataTexture,U=[];for(let ye=0;ye<6;ye++)!tt&&!Ne?U[ye]=b(T.image[ye],!0,a.maxCubemapSize):U[ye]=Ne?T.image[ye].image:T.image[ye],U[ye]=Ct(T,U[ye]);const ee=U[0],ie=l.convert(T.format,T.colorSpace),J=l.convert(T.type),Me=I(T.internalFormat,ie,J,T.colorSpace),L=T.isVideoTexture!==!0,Q=xe.__version===void 0||Ee===!0,ce=Re.dataReady;let Te=H(T,ee);le(s.TEXTURE_CUBE_MAP,T);let Se;if(tt){L&&Q&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Te,Me,ee.width,ee.height);for(let ye=0;ye<6;ye++){Se=U[ye].mipmaps;for(let Ve=0;Ve<Se.length;Ve++){const Ye=Se[Ve];T.format!==Ei?ie!==null?L?ce&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ve,0,0,Ye.width,Ye.height,ie,Ye.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ve,Me,Ye.width,Ye.height,0,Ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?ce&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ve,0,0,Ye.width,Ye.height,ie,J,Ye.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ve,Me,Ye.width,Ye.height,0,ie,J,Ye.data)}}}else{if(Se=T.mipmaps,L&&Q){Se.length>0&&Te++;const ye=Dt(U[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Te,Me,ye.width,ye.height)}for(let ye=0;ye<6;ye++)if(Ne){L?ce&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,U[ye].width,U[ye].height,ie,J,U[ye].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,Me,U[ye].width,U[ye].height,0,ie,J,U[ye].data);for(let Ve=0;Ve<Se.length;Ve++){const xt=Se[Ve].image[ye].image;L?ce&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ve+1,0,0,xt.width,xt.height,ie,J,xt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ve+1,Me,xt.width,xt.height,0,ie,J,xt.data)}}else{L?ce&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,ie,J,U[ye]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,Me,ie,J,U[ye]);for(let Ve=0;Ve<Se.length;Ve++){const Ye=Se[Ve];L?ce&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ve+1,0,0,ie,J,Ye.image[ye]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ve+1,Me,ie,J,Ye.image[ye])}}}y(T)&&g(s.TEXTURE_CUBE_MAP),xe.__version=Re.version,T.onUpdate&&T.onUpdate(T)}D.__version=T.version}function we(D,T,ne,Ee,Re,xe){const et=l.convert(ne.format,ne.colorSpace),De=l.convert(ne.type),He=I(ne.internalFormat,et,De,ne.colorSpace),tt=r.get(T),Ne=r.get(ne);if(Ne.__renderTarget=T,!tt.__hasExternalTextures){const U=Math.max(1,T.width>>xe),ee=Math.max(1,T.height>>xe);Re===s.TEXTURE_3D||Re===s.TEXTURE_2D_ARRAY?t.texImage3D(Re,xe,He,U,ee,T.depth,0,et,De,null):t.texImage2D(Re,xe,He,U,ee,0,et,De,null)}t.bindFramebuffer(s.FRAMEBUFFER,D),ze(T)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Ee,Re,Ne.__webglTexture,0,ut(T)):(Re===s.TEXTURE_2D||Re>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Re<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Ee,Re,Ne.__webglTexture,xe),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Be(D,T,ne){if(s.bindRenderbuffer(s.RENDERBUFFER,D),T.depthBuffer){const Ee=T.depthTexture,Re=Ee&&Ee.isDepthTexture?Ee.type:null,xe=C(T.stencilBuffer,Re),et=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,De=ut(T);ze(T)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,De,xe,T.width,T.height):ne?s.renderbufferStorageMultisample(s.RENDERBUFFER,De,xe,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,xe,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,et,s.RENDERBUFFER,D)}else{const Ee=T.textures;for(let Re=0;Re<Ee.length;Re++){const xe=Ee[Re],et=l.convert(xe.format,xe.colorSpace),De=l.convert(xe.type),He=I(xe.internalFormat,et,De,xe.colorSpace),tt=ut(T);ne&&ze(T)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,tt,He,T.width,T.height):ze(T)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,tt,He,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,He,T.width,T.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function je(D,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,D),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Ee=r.get(T.depthTexture);Ee.__renderTarget=T,(!Ee.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),fe(T.depthTexture,0);const Re=Ee.__webglTexture,xe=ut(T);if(T.depthTexture.format===ma)ze(T)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Re,0,xe):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Re,0);else if(T.depthTexture.format===ga)ze(T)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Re,0,xe):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Re,0);else throw new Error("Unknown depthTexture format")}function pt(D){const T=r.get(D),ne=D.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==D.depthTexture){const Ee=D.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),Ee){const Re=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,Ee.removeEventListener("dispose",Re)};Ee.addEventListener("dispose",Re),T.__depthDisposeCallback=Re}T.__boundDepthTexture=Ee}if(D.depthTexture&&!T.__autoAllocateDepthBuffer){if(ne)throw new Error("target.depthTexture not supported in Cube render targets");const Ee=D.texture.mipmaps;Ee&&Ee.length>0?je(T.__webglFramebuffer[0],D):je(T.__webglFramebuffer,D)}else if(ne){T.__webglDepthbuffer=[];for(let Ee=0;Ee<6;Ee++)if(t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[Ee]),T.__webglDepthbuffer[Ee]===void 0)T.__webglDepthbuffer[Ee]=s.createRenderbuffer(),Be(T.__webglDepthbuffer[Ee],D,!1);else{const Re=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,xe=T.__webglDepthbuffer[Ee];s.bindRenderbuffer(s.RENDERBUFFER,xe),s.framebufferRenderbuffer(s.FRAMEBUFFER,Re,s.RENDERBUFFER,xe)}}else{const Ee=D.texture.mipmaps;if(Ee&&Ee.length>0?t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=s.createRenderbuffer(),Be(T.__webglDepthbuffer,D,!1);else{const Re=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,xe=T.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,xe),s.framebufferRenderbuffer(s.FRAMEBUFFER,Re,s.RENDERBUFFER,xe)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ht(D,T,ne){const Ee=r.get(D);T!==void 0&&we(Ee.__webglFramebuffer,D,D.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),ne!==void 0&&pt(D)}function B(D){const T=D.texture,ne=r.get(D),Ee=r.get(T);D.addEventListener("dispose",k);const Re=D.textures,xe=D.isWebGLCubeRenderTarget===!0,et=Re.length>1;if(et||(Ee.__webglTexture===void 0&&(Ee.__webglTexture=s.createTexture()),Ee.__version=T.version,u.memory.textures++),xe){ne.__webglFramebuffer=[];for(let De=0;De<6;De++)if(T.mipmaps&&T.mipmaps.length>0){ne.__webglFramebuffer[De]=[];for(let He=0;He<T.mipmaps.length;He++)ne.__webglFramebuffer[De][He]=s.createFramebuffer()}else ne.__webglFramebuffer[De]=s.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){ne.__webglFramebuffer=[];for(let De=0;De<T.mipmaps.length;De++)ne.__webglFramebuffer[De]=s.createFramebuffer()}else ne.__webglFramebuffer=s.createFramebuffer();if(et)for(let De=0,He=Re.length;De<He;De++){const tt=r.get(Re[De]);tt.__webglTexture===void 0&&(tt.__webglTexture=s.createTexture(),u.memory.textures++)}if(D.samples>0&&ze(D)===!1){ne.__webglMultisampledFramebuffer=s.createFramebuffer(),ne.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,ne.__webglMultisampledFramebuffer);for(let De=0;De<Re.length;De++){const He=Re[De];ne.__webglColorRenderbuffer[De]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,ne.__webglColorRenderbuffer[De]);const tt=l.convert(He.format,He.colorSpace),Ne=l.convert(He.type),U=I(He.internalFormat,tt,Ne,He.colorSpace,D.isXRRenderTarget===!0),ee=ut(D);s.renderbufferStorageMultisample(s.RENDERBUFFER,ee,U,D.width,D.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+De,s.RENDERBUFFER,ne.__webglColorRenderbuffer[De])}s.bindRenderbuffer(s.RENDERBUFFER,null),D.depthBuffer&&(ne.__webglDepthRenderbuffer=s.createRenderbuffer(),Be(ne.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(xe){t.bindTexture(s.TEXTURE_CUBE_MAP,Ee.__webglTexture),le(s.TEXTURE_CUBE_MAP,T);for(let De=0;De<6;De++)if(T.mipmaps&&T.mipmaps.length>0)for(let He=0;He<T.mipmaps.length;He++)we(ne.__webglFramebuffer[De][He],D,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+De,He);else we(ne.__webglFramebuffer[De],D,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+De,0);y(T)&&g(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(et){for(let De=0,He=Re.length;De<He;De++){const tt=Re[De],Ne=r.get(tt);let U=s.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(U=D.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(U,Ne.__webglTexture),le(U,tt),we(ne.__webglFramebuffer,D,tt,s.COLOR_ATTACHMENT0+De,U,0),y(tt)&&g(U)}t.unbindTexture()}else{let De=s.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(De=D.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(De,Ee.__webglTexture),le(De,T),T.mipmaps&&T.mipmaps.length>0)for(let He=0;He<T.mipmaps.length;He++)we(ne.__webglFramebuffer[He],D,T,s.COLOR_ATTACHMENT0,De,He);else we(ne.__webglFramebuffer,D,T,s.COLOR_ATTACHMENT0,De,0);y(T)&&g(De),t.unbindTexture()}D.depthBuffer&&pt(D)}function Ae(D){const T=D.textures;for(let ne=0,Ee=T.length;ne<Ee;ne++){const Re=T[ne];if(y(Re)){const xe=N(D),et=r.get(Re).__webglTexture;t.bindTexture(xe,et),g(xe),t.unbindTexture()}}}const Fe=[],Le=[];function K(D){if(D.samples>0){if(ze(D)===!1){const T=D.textures,ne=D.width,Ee=D.height;let Re=s.COLOR_BUFFER_BIT;const xe=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,et=r.get(D),De=T.length>1;if(De)for(let tt=0;tt<T.length;tt++)t.bindFramebuffer(s.FRAMEBUFFER,et.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+tt,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,et.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+tt,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,et.__webglMultisampledFramebuffer);const He=D.texture.mipmaps;He&&He.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,et.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,et.__webglFramebuffer);for(let tt=0;tt<T.length;tt++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(Re|=s.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(Re|=s.STENCIL_BUFFER_BIT)),De){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,et.__webglColorRenderbuffer[tt]);const Ne=r.get(T[tt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Ne,0)}s.blitFramebuffer(0,0,ne,Ee,0,0,ne,Ee,Re,s.NEAREST),m===!0&&(Fe.length=0,Le.length=0,Fe.push(s.COLOR_ATTACHMENT0+tt),D.depthBuffer&&D.resolveDepthBuffer===!1&&(Fe.push(xe),Le.push(xe),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Le)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Fe))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),De)for(let tt=0;tt<T.length;tt++){t.bindFramebuffer(s.FRAMEBUFFER,et.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+tt,s.RENDERBUFFER,et.__webglColorRenderbuffer[tt]);const Ne=r.get(T[tt]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,et.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+tt,s.TEXTURE_2D,Ne,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,et.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&m){const T=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[T])}}}function ut(D){return Math.min(a.maxSamples,D.samples)}function ze(D){const T=r.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function st(D){const T=u.render.frame;v.get(D)!==T&&(v.set(D,T),D.update())}function Ct(D,T){const ne=D.colorSpace,Ee=D.format,Re=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||ne!==uo&&ne!==Fr&&(Pt.getTransfer(ne)===Ft?(Ee!==Ei||Re!==ki)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ne)),T}function Dt(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(h.width=D.naturalWidth||D.width,h.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(h.width=D.displayWidth,h.height=D.displayHeight):(h.width=D.width,h.height=D.height),h}this.allocateTextureUnit=oe,this.resetTextureUnits=q,this.setTexture2D=fe,this.setTexture2DArray=pe,this.setTexture3D=me,this.setTextureCube=j,this.rebindTextures=Ht,this.setupRenderTarget=B,this.updateRenderTargetMipmap=Ae,this.updateMultisampleRenderTarget=K,this.setupDepthRenderbuffer=pt,this.setupFrameBufferTexture=we,this.useMultisampledRTT=ze}function yM(s,e){function t(r,a=Fr){let l;const u=Pt.getTransfer(a);if(r===ki)return s.UNSIGNED_BYTE;if(r===Lf)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Nf)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Og)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===kg)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===Ug)return s.BYTE;if(r===Fg)return s.SHORT;if(r===ha)return s.UNSIGNED_SHORT;if(r===Pf)return s.INT;if(r===vs)return s.UNSIGNED_INT;if(r===or)return s.FLOAT;if(r===_a)return s.HALF_FLOAT;if(r===zg)return s.ALPHA;if(r===Bg)return s.RGB;if(r===Ei)return s.RGBA;if(r===ma)return s.DEPTH_COMPONENT;if(r===ga)return s.DEPTH_STENCIL;if(r===Hg)return s.RED;if(r===If)return s.RED_INTEGER;if(r===Vg)return s.RG;if(r===Df)return s.RG_INTEGER;if(r===Uf)return s.RGBA_INTEGER;if(r===Jl||r===ec||r===tc||r===nc)if(u===Ft)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===Jl)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===ec)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===tc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===nc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===Jl)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===ec)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===tc)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===nc)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===$d||r===Zd||r===Qd||r===Jd)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===$d)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Zd)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Qd)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Jd)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===ef||r===tf||r===nf)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===ef||r===tf)return u===Ft?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===nf)return u===Ft?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===rf||r===sf||r===of||r===af||r===lf||r===cf||r===uf||r===df||r===ff||r===hf||r===pf||r===mf||r===gf||r===vf)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===rf)return u===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===sf)return u===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===of)return u===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===af)return u===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===lf)return u===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===cf)return u===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===uf)return u===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===df)return u===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===ff)return u===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===hf)return u===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===pf)return u===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===mf)return u===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===gf)return u===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===vf)return u===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===_f||r===xf||r===yf)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===_f)return u===Ft?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===xf)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===yf)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Sf||r===Ef||r===Mf||r===Tf)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===Sf)return l.COMPRESSED_RED_RGTC1_EXT;if(r===Ef)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Mf)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Tf)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===pa?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:t}}const SM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,EM=`
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

}`;class MM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const r=new t0(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new Br({vertexShader:SM,fragmentShader:EM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new an(new mo(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class TM extends ho{constructor(e,t){super();const r=this;let a=null,l=1,u=null,f="local-floor",m=1,h=null,v=null,_=null,x=null,S=null,w=null;const b=typeof XRWebGLBinding<"u",y=new MM,g={},N=t.getContextAttributes();let I=null,C=null;const H=[],O=[],k=new Mt;let G=null;const P=new Qn;P.viewport=new Ot;const A=new Qn;A.viewport=new Ot;const V=[P,A],q=new Wx;let oe=null,ve=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(se){let ge=H[se];return ge===void 0&&(ge=new Sd,H[se]=ge),ge.getTargetRaySpace()},this.getControllerGrip=function(se){let ge=H[se];return ge===void 0&&(ge=new Sd,H[se]=ge),ge.getGripSpace()},this.getHand=function(se){let ge=H[se];return ge===void 0&&(ge=new Sd,H[se]=ge),ge.getHandSpace()};function fe(se){const ge=O.indexOf(se.inputSource);if(ge===-1)return;const we=H[ge];we!==void 0&&(we.update(se.inputSource,se.frame,h||u),we.dispatchEvent({type:se.type,data:se.inputSource}))}function pe(){a.removeEventListener("select",fe),a.removeEventListener("selectstart",fe),a.removeEventListener("selectend",fe),a.removeEventListener("squeeze",fe),a.removeEventListener("squeezestart",fe),a.removeEventListener("squeezeend",fe),a.removeEventListener("end",pe),a.removeEventListener("inputsourceschange",me);for(let se=0;se<H.length;se++){const ge=O[se];ge!==null&&(O[se]=null,H[se].disconnect(ge))}oe=null,ve=null,y.reset();for(const se in g)delete g[se];e.setRenderTarget(I),S=null,x=null,_=null,a=null,C=null,Xe.stop(),r.isPresenting=!1,e.setPixelRatio(G),e.setSize(k.width,k.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(se){l=se,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(se){f=se,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||u},this.setReferenceSpace=function(se){h=se},this.getBaseLayer=function(){return x!==null?x:S},this.getBinding=function(){return _===null&&b&&(_=new XRWebGLBinding(a,t)),_},this.getFrame=function(){return w},this.getSession=function(){return a},this.setSession=async function(se){if(a=se,a!==null){if(I=e.getRenderTarget(),a.addEventListener("select",fe),a.addEventListener("selectstart",fe),a.addEventListener("selectend",fe),a.addEventListener("squeeze",fe),a.addEventListener("squeezestart",fe),a.addEventListener("squeezeend",fe),a.addEventListener("end",pe),a.addEventListener("inputsourceschange",me),N.xrCompatible!==!0&&await t.makeXRCompatible(),G=e.getPixelRatio(),e.getSize(k),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let we=null,Be=null,je=null;N.depth&&(je=N.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,we=N.stencil?ga:ma,Be=N.stencil?pa:vs);const pt={colorFormat:t.RGBA8,depthFormat:je,scaleFactor:l};_=this.getBinding(),x=_.createProjectionLayer(pt),a.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),C=new _s(x.textureWidth,x.textureHeight,{format:Ei,type:ki,depthTexture:new e0(x.textureWidth,x.textureHeight,Be,void 0,void 0,void 0,void 0,void 0,void 0,we),stencilBuffer:N.stencil,colorSpace:e.outputColorSpace,samples:N.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const we={antialias:N.antialias,alpha:!0,depth:N.depth,stencil:N.stencil,framebufferScaleFactor:l};S=new XRWebGLLayer(a,t,we),a.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),C=new _s(S.framebufferWidth,S.framebufferHeight,{format:Ei,type:ki,colorSpace:e.outputColorSpace,stencilBuffer:N.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(m),h=null,u=await a.requestReferenceSpace(f),Xe.setContext(a),Xe.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function me(se){for(let ge=0;ge<se.removed.length;ge++){const we=se.removed[ge],Be=O.indexOf(we);Be>=0&&(O[Be]=null,H[Be].disconnect(we))}for(let ge=0;ge<se.added.length;ge++){const we=se.added[ge];let Be=O.indexOf(we);if(Be===-1){for(let pt=0;pt<H.length;pt++)if(pt>=O.length){O.push(we),Be=pt;break}else if(O[pt]===null){O[pt]=we,Be=pt;break}if(Be===-1)break}const je=H[Be];je&&je.connect(we)}}const j=new Z,_e=new Z;function de(se,ge,we){j.setFromMatrixPosition(ge.matrixWorld),_e.setFromMatrixPosition(we.matrixWorld);const Be=j.distanceTo(_e),je=ge.projectionMatrix.elements,pt=we.projectionMatrix.elements,Ht=je[14]/(je[10]-1),B=je[14]/(je[10]+1),Ae=(je[9]+1)/je[5],Fe=(je[9]-1)/je[5],Le=(je[8]-1)/je[0],K=(pt[8]+1)/pt[0],ut=Ht*Le,ze=Ht*K,st=Be/(-Le+K),Ct=st*-Le;if(ge.matrixWorld.decompose(se.position,se.quaternion,se.scale),se.translateX(Ct),se.translateZ(st),se.matrixWorld.compose(se.position,se.quaternion,se.scale),se.matrixWorldInverse.copy(se.matrixWorld).invert(),je[10]===-1)se.projectionMatrix.copy(ge.projectionMatrix),se.projectionMatrixInverse.copy(ge.projectionMatrixInverse);else{const Dt=Ht+st,D=B+st,T=ut-Ct,ne=ze+(Be-Ct),Ee=Ae*B/D*Dt,Re=Fe*B/D*Dt;se.projectionMatrix.makePerspective(T,ne,Ee,Re,Dt,D),se.projectionMatrixInverse.copy(se.projectionMatrix).invert()}}function z(se,ge){ge===null?se.matrixWorld.copy(se.matrix):se.matrixWorld.multiplyMatrices(ge.matrixWorld,se.matrix),se.matrixWorldInverse.copy(se.matrixWorld).invert()}this.updateCamera=function(se){if(a===null)return;let ge=se.near,we=se.far;y.texture!==null&&(y.depthNear>0&&(ge=y.depthNear),y.depthFar>0&&(we=y.depthFar)),q.near=A.near=P.near=ge,q.far=A.far=P.far=we,(oe!==q.near||ve!==q.far)&&(a.updateRenderState({depthNear:q.near,depthFar:q.far}),oe=q.near,ve=q.far),q.layers.mask=se.layers.mask|6,P.layers.mask=q.layers.mask&3,A.layers.mask=q.layers.mask&5;const Be=se.parent,je=q.cameras;z(q,Be);for(let pt=0;pt<je.length;pt++)z(je[pt],Be);je.length===2?de(q,P,A):q.projectionMatrix.copy(P.projectionMatrix),le(se,q,Be)};function le(se,ge,we){we===null?se.matrix.copy(ge.matrixWorld):(se.matrix.copy(we.matrixWorld),se.matrix.invert(),se.matrix.multiply(ge.matrixWorld)),se.matrix.decompose(se.position,se.quaternion,se.scale),se.updateMatrixWorld(!0),se.projectionMatrix.copy(ge.projectionMatrix),se.projectionMatrixInverse.copy(ge.projectionMatrixInverse),se.isPerspectiveCamera&&(se.fov=wf*2*Math.atan(1/se.projectionMatrix.elements[5]),se.zoom=1)}this.getCamera=function(){return q},this.getFoveation=function(){if(!(x===null&&S===null))return m},this.setFoveation=function(se){m=se,x!==null&&(x.fixedFoveation=se),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=se)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(q)},this.getCameraTexture=function(se){return g[se]};let Ue=null;function ke(se,ge){if(v=ge.getViewerPose(h||u),w=ge,v!==null){const we=v.views;S!==null&&(e.setRenderTargetFramebuffer(C,S.framebuffer),e.setRenderTarget(C));let Be=!1;we.length!==q.cameras.length&&(q.cameras.length=0,Be=!0);for(let B=0;B<we.length;B++){const Ae=we[B];let Fe=null;if(S!==null)Fe=S.getViewport(Ae);else{const K=_.getViewSubImage(x,Ae);Fe=K.viewport,B===0&&(e.setRenderTargetTextures(C,K.colorTexture,K.depthStencilTexture),e.setRenderTarget(C))}let Le=V[B];Le===void 0&&(Le=new Qn,Le.layers.enable(B),Le.viewport=new Ot,V[B]=Le),Le.matrix.fromArray(Ae.transform.matrix),Le.matrix.decompose(Le.position,Le.quaternion,Le.scale),Le.projectionMatrix.fromArray(Ae.projectionMatrix),Le.projectionMatrixInverse.copy(Le.projectionMatrix).invert(),Le.viewport.set(Fe.x,Fe.y,Fe.width,Fe.height),B===0&&(q.matrix.copy(Le.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale)),Be===!0&&q.cameras.push(Le)}const je=a.enabledFeatures;if(je&&je.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&b){_=r.getBinding();const B=_.getDepthInformation(we[0]);B&&B.isValid&&B.texture&&y.init(B,a.renderState)}if(je&&je.includes("camera-access")&&b){e.state.unbindTexture(),_=r.getBinding();for(let B=0;B<we.length;B++){const Ae=we[B].camera;if(Ae){let Fe=g[Ae];Fe||(Fe=new t0,g[Ae]=Fe);const Le=_.getCameraImage(Ae);Fe.sourceTexture=Le}}}}for(let we=0;we<H.length;we++){const Be=O[we],je=H[we];Be!==null&&je!==void 0&&je.update(Be,ge,h||u)}Ue&&Ue(se,ge),ge.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ge}),w=null}const Xe=new r0;Xe.setAnimationLoop(ke),this.setAnimationLoop=function(se){Ue=se},this.dispose=function(){}}}const as=new zi,wM=new Zt;function AM(s,e){function t(y,g){y.matrixAutoUpdate===!0&&y.updateMatrix(),g.value.copy(y.matrix)}function r(y,g){g.color.getRGB(y.fogColor.value,Zg(s)),g.isFog?(y.fogNear.value=g.near,y.fogFar.value=g.far):g.isFogExp2&&(y.fogDensity.value=g.density)}function a(y,g,N,I,C){g.isMeshBasicMaterial||g.isMeshLambertMaterial?l(y,g):g.isMeshToonMaterial?(l(y,g),_(y,g)):g.isMeshPhongMaterial?(l(y,g),v(y,g)):g.isMeshStandardMaterial?(l(y,g),x(y,g),g.isMeshPhysicalMaterial&&S(y,g,C)):g.isMeshMatcapMaterial?(l(y,g),w(y,g)):g.isMeshDepthMaterial?l(y,g):g.isMeshDistanceMaterial?(l(y,g),b(y,g)):g.isMeshNormalMaterial?l(y,g):g.isLineBasicMaterial?(u(y,g),g.isLineDashedMaterial&&f(y,g)):g.isPointsMaterial?m(y,g,N,I):g.isSpriteMaterial?h(y,g):g.isShadowMaterial?(y.color.value.copy(g.color),y.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function l(y,g){y.opacity.value=g.opacity,g.color&&y.diffuse.value.copy(g.color),g.emissive&&y.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(y.map.value=g.map,t(g.map,y.mapTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,t(g.alphaMap,y.alphaMapTransform)),g.bumpMap&&(y.bumpMap.value=g.bumpMap,t(g.bumpMap,y.bumpMapTransform),y.bumpScale.value=g.bumpScale,g.side===jn&&(y.bumpScale.value*=-1)),g.normalMap&&(y.normalMap.value=g.normalMap,t(g.normalMap,y.normalMapTransform),y.normalScale.value.copy(g.normalScale),g.side===jn&&y.normalScale.value.negate()),g.displacementMap&&(y.displacementMap.value=g.displacementMap,t(g.displacementMap,y.displacementMapTransform),y.displacementScale.value=g.displacementScale,y.displacementBias.value=g.displacementBias),g.emissiveMap&&(y.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,y.emissiveMapTransform)),g.specularMap&&(y.specularMap.value=g.specularMap,t(g.specularMap,y.specularMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest);const N=e.get(g),I=N.envMap,C=N.envMapRotation;I&&(y.envMap.value=I,as.copy(C),as.x*=-1,as.y*=-1,as.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(as.y*=-1,as.z*=-1),y.envMapRotation.value.setFromMatrix4(wM.makeRotationFromEuler(as)),y.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=g.reflectivity,y.ior.value=g.ior,y.refractionRatio.value=g.refractionRatio),g.lightMap&&(y.lightMap.value=g.lightMap,y.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,y.lightMapTransform)),g.aoMap&&(y.aoMap.value=g.aoMap,y.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,y.aoMapTransform))}function u(y,g){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,g.map&&(y.map.value=g.map,t(g.map,y.mapTransform))}function f(y,g){y.dashSize.value=g.dashSize,y.totalSize.value=g.dashSize+g.gapSize,y.scale.value=g.scale}function m(y,g,N,I){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,y.size.value=g.size*N,y.scale.value=I*.5,g.map&&(y.map.value=g.map,t(g.map,y.uvTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,t(g.alphaMap,y.alphaMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest)}function h(y,g){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,y.rotation.value=g.rotation,g.map&&(y.map.value=g.map,t(g.map,y.mapTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,t(g.alphaMap,y.alphaMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest)}function v(y,g){y.specular.value.copy(g.specular),y.shininess.value=Math.max(g.shininess,1e-4)}function _(y,g){g.gradientMap&&(y.gradientMap.value=g.gradientMap)}function x(y,g){y.metalness.value=g.metalness,g.metalnessMap&&(y.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,y.metalnessMapTransform)),y.roughness.value=g.roughness,g.roughnessMap&&(y.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,y.roughnessMapTransform)),g.envMap&&(y.envMapIntensity.value=g.envMapIntensity)}function S(y,g,N){y.ior.value=g.ior,g.sheen>0&&(y.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),y.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(y.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,y.sheenColorMapTransform)),g.sheenRoughnessMap&&(y.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,y.sheenRoughnessMapTransform))),g.clearcoat>0&&(y.clearcoat.value=g.clearcoat,y.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(y.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,y.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(y.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===jn&&y.clearcoatNormalScale.value.negate())),g.dispersion>0&&(y.dispersion.value=g.dispersion),g.iridescence>0&&(y.iridescence.value=g.iridescence,y.iridescenceIOR.value=g.iridescenceIOR,y.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(y.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,y.iridescenceMapTransform)),g.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),g.transmission>0&&(y.transmission.value=g.transmission,y.transmissionSamplerMap.value=N.texture,y.transmissionSamplerSize.value.set(N.width,N.height),g.transmissionMap&&(y.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,y.transmissionMapTransform)),y.thickness.value=g.thickness,g.thicknessMap&&(y.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=g.attenuationDistance,y.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(y.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(y.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=g.specularIntensity,y.specularColor.value.copy(g.specularColor),g.specularColorMap&&(y.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,y.specularColorMapTransform)),g.specularIntensityMap&&(y.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,y.specularIntensityMapTransform))}function w(y,g){g.matcap&&(y.matcap.value=g.matcap)}function b(y,g){const N=e.get(g).light;y.referencePosition.value.setFromMatrixPosition(N.matrixWorld),y.nearDistance.value=N.shadow.camera.near,y.farDistance.value=N.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function RM(s,e,t,r){let a={},l={},u=[];const f=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function m(N,I){const C=I.program;r.uniformBlockBinding(N,C)}function h(N,I){let C=a[N.id];C===void 0&&(w(N),C=v(N),a[N.id]=C,N.addEventListener("dispose",y));const H=I.program;r.updateUBOMapping(N,H);const O=e.render.frame;l[N.id]!==O&&(x(N),l[N.id]=O)}function v(N){const I=_();N.__bindingPointIndex=I;const C=s.createBuffer(),H=N.__size,O=N.usage;return s.bindBuffer(s.UNIFORM_BUFFER,C),s.bufferData(s.UNIFORM_BUFFER,H,O),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,I,C),C}function _(){for(let N=0;N<f;N++)if(u.indexOf(N)===-1)return u.push(N),N;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(N){const I=a[N.id],C=N.uniforms,H=N.__cache;s.bindBuffer(s.UNIFORM_BUFFER,I);for(let O=0,k=C.length;O<k;O++){const G=Array.isArray(C[O])?C[O]:[C[O]];for(let P=0,A=G.length;P<A;P++){const V=G[P];if(S(V,O,P,H)===!0){const q=V.__offset,oe=Array.isArray(V.value)?V.value:[V.value];let ve=0;for(let fe=0;fe<oe.length;fe++){const pe=oe[fe],me=b(pe);typeof pe=="number"||typeof pe=="boolean"?(V.__data[0]=pe,s.bufferSubData(s.UNIFORM_BUFFER,q+ve,V.__data)):pe.isMatrix3?(V.__data[0]=pe.elements[0],V.__data[1]=pe.elements[1],V.__data[2]=pe.elements[2],V.__data[3]=0,V.__data[4]=pe.elements[3],V.__data[5]=pe.elements[4],V.__data[6]=pe.elements[5],V.__data[7]=0,V.__data[8]=pe.elements[6],V.__data[9]=pe.elements[7],V.__data[10]=pe.elements[8],V.__data[11]=0):(pe.toArray(V.__data,ve),ve+=me.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,q,V.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function S(N,I,C,H){const O=N.value,k=I+"_"+C;if(H[k]===void 0)return typeof O=="number"||typeof O=="boolean"?H[k]=O:H[k]=O.clone(),!0;{const G=H[k];if(typeof O=="number"||typeof O=="boolean"){if(G!==O)return H[k]=O,!0}else if(G.equals(O)===!1)return G.copy(O),!0}return!1}function w(N){const I=N.uniforms;let C=0;const H=16;for(let k=0,G=I.length;k<G;k++){const P=Array.isArray(I[k])?I[k]:[I[k]];for(let A=0,V=P.length;A<V;A++){const q=P[A],oe=Array.isArray(q.value)?q.value:[q.value];for(let ve=0,fe=oe.length;ve<fe;ve++){const pe=oe[ve],me=b(pe),j=C%H,_e=j%me.boundary,de=j+_e;C+=_e,de!==0&&H-de<me.storage&&(C+=H-de),q.__data=new Float32Array(me.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=C,C+=me.storage}}}const O=C%H;return O>0&&(C+=H-O),N.__size=C,N.__cache={},this}function b(N){const I={boundary:0,storage:0};return typeof N=="number"||typeof N=="boolean"?(I.boundary=4,I.storage=4):N.isVector2?(I.boundary=8,I.storage=8):N.isVector3||N.isColor?(I.boundary=16,I.storage=12):N.isVector4?(I.boundary=16,I.storage=16):N.isMatrix3?(I.boundary=48,I.storage=48):N.isMatrix4?(I.boundary=64,I.storage=64):N.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",N),I}function y(N){const I=N.target;I.removeEventListener("dispose",y);const C=u.indexOf(I.__bindingPointIndex);u.splice(C,1),s.deleteBuffer(a[I.id]),delete a[I.id],delete l[I.id]}function g(){for(const N in a)s.deleteBuffer(a[N]);u=[],a={},l={}}return{bind:m,update:h,dispose:g}}class CM{constructor(e={}){const{canvas:t=rx(),context:r=null,depth:a=!0,stencil:l=!1,alpha:u=!1,antialias:f=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:h=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:x=!1}=e;this.isWebGLRenderer=!0;let S;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=r.getContextAttributes().alpha}else S=u;const w=new Uint32Array(4),b=new Int32Array(4);let y=null,g=null;const N=[],I=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=kr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let H=!1;this._outputColorSpace=Wn;let O=0,k=0,G=null,P=-1,A=null;const V=new Ot,q=new Ot;let oe=null;const ve=new Et(0);let fe=0,pe=t.width,me=t.height,j=1,_e=null,de=null;const z=new Ot(0,0,pe,me),le=new Ot(0,0,pe,me);let Ue=!1;const ke=new kf;let Xe=!1,se=!1;const ge=new Zt,we=new Z,Be=new Ot,je={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let pt=!1;function Ht(){return G===null?j:1}let B=r;function Ae(R,$){return t.getContext(R,$)}try{const R={alpha:!0,depth:a,stencil:l,antialias:f,premultipliedAlpha:m,preserveDrawingBuffer:h,powerPreference:v,failIfMajorPerformanceCaveat:_};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${bf}`),t.addEventListener("webglcontextlost",ce,!1),t.addEventListener("webglcontextrestored",Te,!1),t.addEventListener("webglcontextcreationerror",Se,!1),B===null){const $="webgl2";if(B=Ae($,R),B===null)throw Ae($)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let Fe,Le,K,ut,ze,st,Ct,Dt,D,T,ne,Ee,Re,xe,et,De,He,tt,Ne,U,ee,ie,J,Me;function L(){Fe=new k1(B),Fe.init(),ie=new yM(B,Fe),Le=new L1(B,Fe,e,ie),K=new _M(B,Fe),Le.reversedDepthBuffer&&x&&K.buffers.depth.setReversed(!0),ut=new H1(B),ze=new sM,st=new xM(B,Fe,K,ze,Le,ie,ut),Ct=new I1(C),Dt=new O1(C),D=new Yx(B),J=new b1(B,D),T=new z1(B,D,ut,J),ne=new G1(B,T,D,ut),Ne=new V1(B,Le,st),De=new N1(ze),Ee=new rM(C,Ct,Dt,Fe,Le,J,De),Re=new AM(C,ze),xe=new aM,et=new hM(Fe),tt=new C1(C,Ct,Dt,K,ne,S,m),He=new gM(C,ne,Le),Me=new RM(B,ut,Le,K),U=new P1(B,Fe,ut),ee=new B1(B,Fe,ut),ut.programs=Ee.programs,C.capabilities=Le,C.extensions=Fe,C.properties=ze,C.renderLists=xe,C.shadowMap=He,C.state=K,C.info=ut}L();const Q=new TM(C,B);this.xr=Q,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const R=Fe.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Fe.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(R){R!==void 0&&(j=R,this.setSize(pe,me,!1))},this.getSize=function(R){return R.set(pe,me)},this.setSize=function(R,$,ue=!0){if(Q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}pe=R,me=$,t.width=Math.floor(R*j),t.height=Math.floor($*j),ue===!0&&(t.style.width=R+"px",t.style.height=$+"px"),this.setViewport(0,0,R,$)},this.getDrawingBufferSize=function(R){return R.set(pe*j,me*j).floor()},this.setDrawingBufferSize=function(R,$,ue){pe=R,me=$,j=ue,t.width=Math.floor(R*ue),t.height=Math.floor($*ue),this.setViewport(0,0,R,$)},this.getCurrentViewport=function(R){return R.copy(V)},this.getViewport=function(R){return R.copy(z)},this.setViewport=function(R,$,ue,he){R.isVector4?z.set(R.x,R.y,R.z,R.w):z.set(R,$,ue,he),K.viewport(V.copy(z).multiplyScalar(j).round())},this.getScissor=function(R){return R.copy(le)},this.setScissor=function(R,$,ue,he){R.isVector4?le.set(R.x,R.y,R.z,R.w):le.set(R,$,ue,he),K.scissor(q.copy(le).multiplyScalar(j).round())},this.getScissorTest=function(){return Ue},this.setScissorTest=function(R){K.setScissorTest(Ue=R)},this.setOpaqueSort=function(R){_e=R},this.setTransparentSort=function(R){de=R},this.getClearColor=function(R){return R.copy(tt.getClearColor())},this.setClearColor=function(){tt.setClearColor(...arguments)},this.getClearAlpha=function(){return tt.getClearAlpha()},this.setClearAlpha=function(){tt.setClearAlpha(...arguments)},this.clear=function(R=!0,$=!0,ue=!0){let he=0;if(R){let Y=!1;if(G!==null){const Ie=G.texture.format;Y=Ie===Uf||Ie===Df||Ie===If}if(Y){const Ie=G.texture.type,Ge=Ie===ki||Ie===vs||Ie===ha||Ie===pa||Ie===Lf||Ie===Nf,Qe=tt.getClearColor(),qe=tt.getClearAlpha(),ct=Qe.r,dt=Qe.g,rt=Qe.b;Ge?(w[0]=ct,w[1]=dt,w[2]=rt,w[3]=qe,B.clearBufferuiv(B.COLOR,0,w)):(b[0]=ct,b[1]=dt,b[2]=rt,b[3]=qe,B.clearBufferiv(B.COLOR,0,b))}else he|=B.COLOR_BUFFER_BIT}$&&(he|=B.DEPTH_BUFFER_BIT),ue&&(he|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(he)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ce,!1),t.removeEventListener("webglcontextrestored",Te,!1),t.removeEventListener("webglcontextcreationerror",Se,!1),tt.dispose(),xe.dispose(),et.dispose(),ze.dispose(),Ct.dispose(),Dt.dispose(),ne.dispose(),J.dispose(),Me.dispose(),Ee.dispose(),Q.dispose(),Q.removeEventListener("sessionstart",en),Q.removeEventListener("sessionend",wi),Rn.stop()};function ce(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),H=!0}function Te(){console.log("THREE.WebGLRenderer: Context Restored."),H=!1;const R=ut.autoReset,$=He.enabled,ue=He.autoUpdate,he=He.needsUpdate,Y=He.type;L(),ut.autoReset=R,He.enabled=$,He.autoUpdate=ue,He.needsUpdate=he,He.type=Y}function Se(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function ye(R){const $=R.target;$.removeEventListener("dispose",ye),Ve($)}function Ve(R){Ye(R),ze.remove(R)}function Ye(R){const $=ze.get(R).programs;$!==void 0&&($.forEach(function(ue){Ee.releaseProgram(ue)}),R.isShaderMaterial&&Ee.releaseShaderCache(R))}this.renderBufferDirect=function(R,$,ue,he,Y,Ie){$===null&&($=je);const Ge=Y.isMesh&&Y.matrixWorld.determinant()<0,Qe=Fn(R,$,ue,he,Y);K.setMaterial(he,Ge);let qe=ue.index,ct=1;if(he.wireframe===!0){if(qe=T.getWireframeAttribute(ue),qe===void 0)return;ct=2}const dt=ue.drawRange,rt=ue.attributes.position;let ft=dt.start*ct,Lt=(dt.start+dt.count)*ct;Ie!==null&&(ft=Math.max(ft,Ie.start*ct),Lt=Math.min(Lt,(Ie.start+Ie.count)*ct)),qe!==null?(ft=Math.max(ft,0),Lt=Math.min(Lt,qe.count)):rt!=null&&(ft=Math.max(ft,0),Lt=Math.min(Lt,rt.count));const At=Lt-ft;if(At<0||At===1/0)return;J.setup(Y,he,Qe,ue,qe);let kt,Nt=U;if(qe!==null&&(kt=D.get(qe),Nt=ee,Nt.setIndex(kt)),Y.isMesh)he.wireframe===!0?(K.setLineWidth(he.wireframeLinewidth*Ht()),Nt.setMode(B.LINES)):Nt.setMode(B.TRIANGLES);else if(Y.isLine){let ot=he.linewidth;ot===void 0&&(ot=1),K.setLineWidth(ot*Ht()),Y.isLineSegments?Nt.setMode(B.LINES):Y.isLineLoop?Nt.setMode(B.LINE_LOOP):Nt.setMode(B.LINE_STRIP)}else Y.isPoints?Nt.setMode(B.POINTS):Y.isSprite&&Nt.setMode(B.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)va("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Nt.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if(Fe.get("WEBGL_multi_draw"))Nt.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const ot=Y._multiDrawStarts,Ut=Y._multiDrawCounts,yt=Y._multiDrawCount,rn=qe?D.get(qe).bytesPerElement:1,ui=ze.get(he).currentProgram.getUniforms();for(let Cn=0;Cn<yt;Cn++)ui.setValue(B,"_gl_DrawID",Cn),Nt.render(ot[Cn]/rn,Ut[Cn])}else if(Y.isInstancedMesh)Nt.renderInstances(ft,At,Y.count);else if(ue.isInstancedBufferGeometry){const ot=ue._maxInstanceCount!==void 0?ue._maxInstanceCount:1/0,Ut=Math.min(ue.instanceCount,ot);Nt.renderInstances(ft,At,Ut)}else Nt.render(ft,At)};function xt(R,$,ue){R.transparent===!0&&R.side===Di&&R.forceSinglePass===!1?(R.side=jn,R.needsUpdate=!0,Hi(R,$,ue),R.side=zr,R.needsUpdate=!0,Hi(R,$,ue),R.side=Di):Hi(R,$,ue)}this.compile=function(R,$,ue=null){ue===null&&(ue=R),g=et.get(ue),g.init($),I.push(g),ue.traverseVisible(function(Y){Y.isLight&&Y.layers.test($.layers)&&(g.pushLight(Y),Y.castShadow&&g.pushShadow(Y))}),R!==ue&&R.traverseVisible(function(Y){Y.isLight&&Y.layers.test($.layers)&&(g.pushLight(Y),Y.castShadow&&g.pushShadow(Y))}),g.setupLights();const he=new Set;return R.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const Ie=Y.material;if(Ie)if(Array.isArray(Ie))for(let Ge=0;Ge<Ie.length;Ge++){const Qe=Ie[Ge];xt(Qe,ue,Y),he.add(Qe)}else xt(Ie,ue,Y),he.add(Ie)}),g=I.pop(),he},this.compileAsync=function(R,$,ue=null){const he=this.compile(R,$,ue);return new Promise(Y=>{function Ie(){if(he.forEach(function(Ge){ze.get(Ge).currentProgram.isReady()&&he.delete(Ge)}),he.size===0){Y(R);return}setTimeout(Ie,10)}Fe.get("KHR_parallel_shader_compile")!==null?Ie():setTimeout(Ie,10)})};let mt=null;function mn(R){mt&&mt(R)}function en(){Rn.stop()}function wi(){Rn.start()}const Rn=new r0;Rn.setAnimationLoop(mn),typeof self<"u"&&Rn.setContext(self),this.setAnimationLoop=function(R){mt=R,Q.setAnimationLoop(R),R===null?Rn.stop():Rn.start()},Q.addEventListener("sessionstart",en),Q.addEventListener("sessionend",wi),this.render=function(R,$){if($!==void 0&&$.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(H===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),Q.enabled===!0&&Q.isPresenting===!0&&(Q.cameraAutoUpdate===!0&&Q.updateCamera($),$=Q.getCamera()),R.isScene===!0&&R.onBeforeRender(C,R,$,G),g=et.get(R,I.length),g.init($),I.push(g),ge.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),ke.setFromProjectionMatrix(ge,Fi,$.reversedDepth),se=this.localClippingEnabled,Xe=De.init(this.clippingPlanes,se),y=xe.get(R,N.length),y.init(),N.push(y),Q.enabled===!0&&Q.isPresenting===!0){const Ie=C.xr.getDepthSensingMesh();Ie!==null&&Bi(Ie,$,-1/0,C.sortObjects)}Bi(R,$,0,C.sortObjects),y.finish(),C.sortObjects===!0&&y.sort(_e,de),pt=Q.enabled===!1||Q.isPresenting===!1||Q.hasDepthSensing()===!1,pt&&tt.addToRenderList(y,R),this.info.render.frame++,Xe===!0&&De.beginShadows();const ue=g.state.shadowsArray;He.render(ue,R,$),Xe===!0&&De.endShadows(),this.info.autoReset===!0&&this.info.reset();const he=y.opaque,Y=y.transmissive;if(g.setupLights(),$.isArrayCamera){const Ie=$.cameras;if(Y.length>0)for(let Ge=0,Qe=Ie.length;Ge<Qe;Ge++){const qe=Ie[Ge];Jn(he,Y,R,qe)}pt&&tt.render(R);for(let Ge=0,Qe=Ie.length;Ge<Qe;Ge++){const qe=Ie[Ge];ci(y,R,qe,qe.viewport)}}else Y.length>0&&Jn(he,Y,R,$),pt&&tt.render(R),ci(y,R,$);G!==null&&k===0&&(st.updateMultisampleRenderTarget(G),st.updateRenderTargetMipmap(G)),R.isScene===!0&&R.onAfterRender(C,R,$),J.resetDefaultState(),P=-1,A=null,I.pop(),I.length>0?(g=I[I.length-1],Xe===!0&&De.setGlobalState(C.clippingPlanes,g.state.camera)):g=null,N.pop(),N.length>0?y=N[N.length-1]:y=null};function Bi(R,$,ue,he){if(R.visible===!1)return;if(R.layers.test($.layers)){if(R.isGroup)ue=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update($);else if(R.isLight)g.pushLight(R),R.castShadow&&g.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||ke.intersectsSprite(R)){he&&Be.setFromMatrixPosition(R.matrixWorld).applyMatrix4(ge);const Ge=ne.update(R),Qe=R.material;Qe.visible&&y.push(R,Ge,Qe,ue,Be.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||ke.intersectsObject(R))){const Ge=ne.update(R),Qe=R.material;if(he&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Be.copy(R.boundingSphere.center)):(Ge.boundingSphere===null&&Ge.computeBoundingSphere(),Be.copy(Ge.boundingSphere.center)),Be.applyMatrix4(R.matrixWorld).applyMatrix4(ge)),Array.isArray(Qe)){const qe=Ge.groups;for(let ct=0,dt=qe.length;ct<dt;ct++){const rt=qe[ct],ft=Qe[rt.materialIndex];ft&&ft.visible&&y.push(R,Ge,ft,ue,Be.z,rt)}}else Qe.visible&&y.push(R,Ge,Qe,ue,Be.z,null)}}const Ie=R.children;for(let Ge=0,Qe=Ie.length;Ge<Qe;Ge++)Bi(Ie[Ge],$,ue,he)}function ci(R,$,ue,he){const Y=R.opaque,Ie=R.transmissive,Ge=R.transparent;g.setupLightsView(ue),Xe===!0&&De.setGlobalState(C.clippingPlanes,ue),he&&K.viewport(V.copy(he)),Y.length>0&&Un(Y,$,ue),Ie.length>0&&Un(Ie,$,ue),Ge.length>0&&Un(Ge,$,ue),K.buffers.depth.setTest(!0),K.buffers.depth.setMask(!0),K.buffers.color.setMask(!0),K.setPolygonOffset(!1)}function Jn(R,$,ue,he){if((ue.isScene===!0?ue.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[he.id]===void 0&&(g.state.transmissionRenderTarget[he.id]=new _s(1,1,{generateMipmaps:!0,type:Fe.has("EXT_color_buffer_half_float")||Fe.has("EXT_color_buffer_float")?_a:ki,minFilter:ms,samples:4,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Pt.workingColorSpace}));const Ie=g.state.transmissionRenderTarget[he.id],Ge=he.viewport||V;Ie.setSize(Ge.z*C.transmissionResolutionScale,Ge.w*C.transmissionResolutionScale);const Qe=C.getRenderTarget(),qe=C.getActiveCubeFace(),ct=C.getActiveMipmapLevel();C.setRenderTarget(Ie),C.getClearColor(ve),fe=C.getClearAlpha(),fe<1&&C.setClearColor(16777215,.5),C.clear(),pt&&tt.render(ue);const dt=C.toneMapping;C.toneMapping=kr;const rt=he.viewport;if(he.viewport!==void 0&&(he.viewport=void 0),g.setupLightsView(he),Xe===!0&&De.setGlobalState(C.clippingPlanes,he),Un(R,ue,he),st.updateMultisampleRenderTarget(Ie),st.updateRenderTargetMipmap(Ie),Fe.has("WEBGL_multisampled_render_to_texture")===!1){let ft=!1;for(let Lt=0,At=$.length;Lt<At;Lt++){const kt=$[Lt],Nt=kt.object,ot=kt.geometry,Ut=kt.material,yt=kt.group;if(Ut.side===Di&&Nt.layers.test(he.layers)){const rn=Ut.side;Ut.side=jn,Ut.needsUpdate=!0,ei(Nt,ue,he,ot,Ut,yt),Ut.side=rn,Ut.needsUpdate=!0,ft=!0}}ft===!0&&(st.updateMultisampleRenderTarget(Ie),st.updateRenderTargetMipmap(Ie))}C.setRenderTarget(Qe,qe,ct),C.setClearColor(ve,fe),rt!==void 0&&(he.viewport=rt),C.toneMapping=dt}function Un(R,$,ue){const he=$.isScene===!0?$.overrideMaterial:null;for(let Y=0,Ie=R.length;Y<Ie;Y++){const Ge=R[Y],Qe=Ge.object,qe=Ge.geometry,ct=Ge.group;let dt=Ge.material;dt.allowOverride===!0&&he!==null&&(dt=he),Qe.layers.test(ue.layers)&&ei(Qe,$,ue,qe,dt,ct)}}function ei(R,$,ue,he,Y,Ie){R.onBeforeRender(C,$,ue,he,Y,Ie),R.modelViewMatrix.multiplyMatrices(ue.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Y.onBeforeRender(C,$,ue,he,R,Ie),Y.transparent===!0&&Y.side===Di&&Y.forceSinglePass===!1?(Y.side=jn,Y.needsUpdate=!0,C.renderBufferDirect(ue,$,he,Y,R,Ie),Y.side=zr,Y.needsUpdate=!0,C.renderBufferDirect(ue,$,he,Y,R,Ie),Y.side=Di):C.renderBufferDirect(ue,$,he,Y,R,Ie),R.onAfterRender(C,$,ue,he,Y,Ie)}function Hi(R,$,ue){$.isScene!==!0&&($=je);const he=ze.get(R),Y=g.state.lights,Ie=g.state.shadowsArray,Ge=Y.state.version,Qe=Ee.getParameters(R,Y.state,Ie,$,ue),qe=Ee.getProgramCacheKey(Qe);let ct=he.programs;he.environment=R.isMeshStandardMaterial?$.environment:null,he.fog=$.fog,he.envMap=(R.isMeshStandardMaterial?Dt:Ct).get(R.envMap||he.environment),he.envMapRotation=he.environment!==null&&R.envMap===null?$.environmentRotation:R.envMapRotation,ct===void 0&&(R.addEventListener("dispose",ye),ct=new Map,he.programs=ct);let dt=ct.get(qe);if(dt!==void 0){if(he.currentProgram===dt&&he.lightsStateVersion===Ge)return Ai(R,Qe),dt}else Qe.uniforms=Ee.getUniforms(R),R.onBeforeCompile(Qe,C),dt=Ee.acquireProgram(Qe,qe),ct.set(qe,dt),he.uniforms=Qe.uniforms;const rt=he.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(rt.clippingPlanes=De.uniform),Ai(R,Qe),he.needsLights=Ta(R),he.lightsStateVersion=Ge,he.needsLights&&(rt.ambientLightColor.value=Y.state.ambient,rt.lightProbe.value=Y.state.probe,rt.directionalLights.value=Y.state.directional,rt.directionalLightShadows.value=Y.state.directionalShadow,rt.spotLights.value=Y.state.spot,rt.spotLightShadows.value=Y.state.spotShadow,rt.rectAreaLights.value=Y.state.rectArea,rt.ltc_1.value=Y.state.rectAreaLTC1,rt.ltc_2.value=Y.state.rectAreaLTC2,rt.pointLights.value=Y.state.point,rt.pointLightShadows.value=Y.state.pointShadow,rt.hemisphereLights.value=Y.state.hemi,rt.directionalShadowMap.value=Y.state.directionalShadowMap,rt.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,rt.spotShadowMap.value=Y.state.spotShadowMap,rt.spotLightMatrix.value=Y.state.spotLightMatrix,rt.spotLightMap.value=Y.state.spotLightMap,rt.pointShadowMap.value=Y.state.pointShadowMap,rt.pointShadowMatrix.value=Y.state.pointShadowMatrix),he.currentProgram=dt,he.uniformsList=null,dt}function Hr(R){if(R.uniformsList===null){const $=R.currentProgram.getUniforms();R.uniformsList=ic.seqWithValue($.seq,R.uniforms)}return R.uniformsList}function Ai(R,$){const ue=ze.get(R);ue.outputColorSpace=$.outputColorSpace,ue.batching=$.batching,ue.batchingColor=$.batchingColor,ue.instancing=$.instancing,ue.instancingColor=$.instancingColor,ue.instancingMorph=$.instancingMorph,ue.skinning=$.skinning,ue.morphTargets=$.morphTargets,ue.morphNormals=$.morphNormals,ue.morphColors=$.morphColors,ue.morphTargetsCount=$.morphTargetsCount,ue.numClippingPlanes=$.numClippingPlanes,ue.numIntersection=$.numClipIntersection,ue.vertexAlphas=$.vertexAlphas,ue.vertexTangents=$.vertexTangents,ue.toneMapping=$.toneMapping}function Fn(R,$,ue,he,Y){$.isScene!==!0&&($=je),st.resetTextureUnits();const Ie=$.fog,Ge=he.isMeshStandardMaterial?$.environment:null,Qe=G===null?C.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:uo,qe=(he.isMeshStandardMaterial?Dt:Ct).get(he.envMap||Ge),ct=he.vertexColors===!0&&!!ue.attributes.color&&ue.attributes.color.itemSize===4,dt=!!ue.attributes.tangent&&(!!he.normalMap||he.anisotropy>0),rt=!!ue.morphAttributes.position,ft=!!ue.morphAttributes.normal,Lt=!!ue.morphAttributes.color;let At=kr;he.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(At=C.toneMapping);const kt=ue.morphAttributes.position||ue.morphAttributes.normal||ue.morphAttributes.color,Nt=kt!==void 0?kt.length:0,ot=ze.get(he),Ut=g.state.lights;if(Xe===!0&&(se===!0||R!==A)){const Qt=R===A&&he.id===P;De.setState(he,R,Qt)}let yt=!1;he.version===ot.__version?(ot.needsLights&&ot.lightsStateVersion!==Ut.state.version||ot.outputColorSpace!==Qe||Y.isBatchedMesh&&ot.batching===!1||!Y.isBatchedMesh&&ot.batching===!0||Y.isBatchedMesh&&ot.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&ot.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&ot.instancing===!1||!Y.isInstancedMesh&&ot.instancing===!0||Y.isSkinnedMesh&&ot.skinning===!1||!Y.isSkinnedMesh&&ot.skinning===!0||Y.isInstancedMesh&&ot.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&ot.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&ot.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&ot.instancingMorph===!1&&Y.morphTexture!==null||ot.envMap!==qe||he.fog===!0&&ot.fog!==Ie||ot.numClippingPlanes!==void 0&&(ot.numClippingPlanes!==De.numPlanes||ot.numIntersection!==De.numIntersection)||ot.vertexAlphas!==ct||ot.vertexTangents!==dt||ot.morphTargets!==rt||ot.morphNormals!==ft||ot.morphColors!==Lt||ot.toneMapping!==At||ot.morphTargetsCount!==Nt)&&(yt=!0):(yt=!0,ot.__version=he.version);let rn=ot.currentProgram;yt===!0&&(rn=Hi(he,$,Y));let ui=!1,Cn=!1,Vr=!1;const zt=rn.getUniforms(),bn=ot.uniforms;if(K.useProgram(rn.program)&&(ui=!0,Cn=!0,Vr=!0),he.id!==P&&(P=he.id,Cn=!0),ui||A!==R){K.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),zt.setValue(B,"projectionMatrix",R.projectionMatrix),zt.setValue(B,"viewMatrix",R.matrixWorldInverse);const yn=zt.map.cameraPosition;yn!==void 0&&yn.setValue(B,we.setFromMatrixPosition(R.matrixWorld)),Le.logarithmicDepthBuffer&&zt.setValue(B,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(he.isMeshPhongMaterial||he.isMeshToonMaterial||he.isMeshLambertMaterial||he.isMeshBasicMaterial||he.isMeshStandardMaterial||he.isShaderMaterial)&&zt.setValue(B,"isOrthographic",R.isOrthographicCamera===!0),A!==R&&(A=R,Cn=!0,Vr=!0)}if(Y.isSkinnedMesh){zt.setOptional(B,Y,"bindMatrix"),zt.setOptional(B,Y,"bindMatrixInverse");const Qt=Y.skeleton;Qt&&(Qt.boneTexture===null&&Qt.computeBoneTexture(),zt.setValue(B,"boneTexture",Qt.boneTexture,st))}Y.isBatchedMesh&&(zt.setOptional(B,Y,"batchingTexture"),zt.setValue(B,"batchingTexture",Y._matricesTexture,st),zt.setOptional(B,Y,"batchingIdTexture"),zt.setValue(B,"batchingIdTexture",Y._indirectTexture,st),zt.setOptional(B,Y,"batchingColorTexture"),Y._colorsTexture!==null&&zt.setValue(B,"batchingColorTexture",Y._colorsTexture,st));const xn=ue.morphAttributes;if((xn.position!==void 0||xn.normal!==void 0||xn.color!==void 0)&&Ne.update(Y,ue,rn),(Cn||ot.receiveShadow!==Y.receiveShadow)&&(ot.receiveShadow=Y.receiveShadow,zt.setValue(B,"receiveShadow",Y.receiveShadow)),he.isMeshGouraudMaterial&&he.envMap!==null&&(bn.envMap.value=qe,bn.flipEnvMap.value=qe.isCubeTexture&&qe.isRenderTargetTexture===!1?-1:1),he.isMeshStandardMaterial&&he.envMap===null&&$.environment!==null&&(bn.envMapIntensity.value=$.environmentIntensity),Cn&&(zt.setValue(B,"toneMappingExposure",C.toneMappingExposure),ot.needsLights&&Ma(bn,Vr),Ie&&he.fog===!0&&Re.refreshFogUniforms(bn,Ie),Re.refreshMaterialUniforms(bn,he,j,me,g.state.transmissionRenderTarget[R.id]),ic.upload(B,Hr(ot),bn,st)),he.isShaderMaterial&&he.uniformsNeedUpdate===!0&&(ic.upload(B,Hr(ot),bn,st),he.uniformsNeedUpdate=!1),he.isSpriteMaterial&&zt.setValue(B,"center",Y.center),zt.setValue(B,"modelViewMatrix",Y.modelViewMatrix),zt.setValue(B,"normalMatrix",Y.normalMatrix),zt.setValue(B,"modelMatrix",Y.matrixWorld),he.isShaderMaterial||he.isRawShaderMaterial){const Qt=he.uniformsGroups;for(let yn=0,Gr=Qt.length;yn<Gr;yn++){const St=Qt[yn];Me.update(St,rn),Me.bind(St,rn)}}return rn}function Ma(R,$){R.ambientLightColor.needsUpdate=$,R.lightProbe.needsUpdate=$,R.directionalLights.needsUpdate=$,R.directionalLightShadows.needsUpdate=$,R.pointLights.needsUpdate=$,R.pointLightShadows.needsUpdate=$,R.spotLights.needsUpdate=$,R.spotLightShadows.needsUpdate=$,R.rectAreaLights.needsUpdate=$,R.hemisphereLights.needsUpdate=$}function Ta(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return G},this.setRenderTargetTextures=function(R,$,ue){const he=ze.get(R);he.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,he.__autoAllocateDepthBuffer===!1&&(he.__useRenderToTexture=!1),ze.get(R.texture).__webglTexture=$,ze.get(R.depthTexture).__webglTexture=he.__autoAllocateDepthBuffer?void 0:ue,he.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,$){const ue=ze.get(R);ue.__webglFramebuffer=$,ue.__useDefaultFramebuffer=$===void 0};const fc=B.createFramebuffer();this.setRenderTarget=function(R,$=0,ue=0){G=R,O=$,k=ue;let he=!0,Y=null,Ie=!1,Ge=!1;if(R){const qe=ze.get(R);if(qe.__useDefaultFramebuffer!==void 0)K.bindFramebuffer(B.FRAMEBUFFER,null),he=!1;else if(qe.__webglFramebuffer===void 0)st.setupRenderTarget(R);else if(qe.__hasExternalTextures)st.rebindTextures(R,ze.get(R.texture).__webglTexture,ze.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const rt=R.depthTexture;if(qe.__boundDepthTexture!==rt){if(rt!==null&&ze.has(rt)&&(R.width!==rt.image.width||R.height!==rt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");st.setupDepthRenderbuffer(R)}}const ct=R.texture;(ct.isData3DTexture||ct.isDataArrayTexture||ct.isCompressedArrayTexture)&&(Ge=!0);const dt=ze.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(dt[$])?Y=dt[$][ue]:Y=dt[$],Ie=!0):R.samples>0&&st.useMultisampledRTT(R)===!1?Y=ze.get(R).__webglMultisampledFramebuffer:Array.isArray(dt)?Y=dt[ue]:Y=dt,V.copy(R.viewport),q.copy(R.scissor),oe=R.scissorTest}else V.copy(z).multiplyScalar(j).floor(),q.copy(le).multiplyScalar(j).floor(),oe=Ue;if(ue!==0&&(Y=fc),K.bindFramebuffer(B.FRAMEBUFFER,Y)&&he&&K.drawBuffers(R,Y),K.viewport(V),K.scissor(q),K.setScissorTest(oe),Ie){const qe=ze.get(R.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+$,qe.__webglTexture,ue)}else if(Ge){const qe=$;for(let ct=0;ct<R.textures.length;ct++){const dt=ze.get(R.textures[ct]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+ct,dt.__webglTexture,ue,qe)}}else if(R!==null&&ue!==0){const qe=ze.get(R.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,qe.__webglTexture,ue)}P=-1},this.readRenderTargetPixels=function(R,$,ue,he,Y,Ie,Ge,Qe=0){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let qe=ze.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ge!==void 0&&(qe=qe[Ge]),qe){K.bindFramebuffer(B.FRAMEBUFFER,qe);try{const ct=R.textures[Qe],dt=ct.format,rt=ct.type;if(!Le.textureFormatReadable(dt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Le.textureTypeReadable(rt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=R.width-he&&ue>=0&&ue<=R.height-Y&&(R.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Qe),B.readPixels($,ue,he,Y,ie.convert(dt),ie.convert(rt),Ie))}finally{const ct=G!==null?ze.get(G).__webglFramebuffer:null;K.bindFramebuffer(B.FRAMEBUFFER,ct)}}},this.readRenderTargetPixelsAsync=async function(R,$,ue,he,Y,Ie,Ge,Qe=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let qe=ze.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ge!==void 0&&(qe=qe[Ge]),qe)if($>=0&&$<=R.width-he&&ue>=0&&ue<=R.height-Y){K.bindFramebuffer(B.FRAMEBUFFER,qe);const ct=R.textures[Qe],dt=ct.format,rt=ct.type;if(!Le.textureFormatReadable(dt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Le.textureTypeReadable(rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ft=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,ft),B.bufferData(B.PIXEL_PACK_BUFFER,Ie.byteLength,B.STREAM_READ),R.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Qe),B.readPixels($,ue,he,Y,ie.convert(dt),ie.convert(rt),0);const Lt=G!==null?ze.get(G).__webglFramebuffer:null;K.bindFramebuffer(B.FRAMEBUFFER,Lt);const At=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await sx(B,At,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,ft),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,Ie),B.deleteBuffer(ft),B.deleteSync(At),Ie}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,$=null,ue=0){const he=Math.pow(2,-ue),Y=Math.floor(R.image.width*he),Ie=Math.floor(R.image.height*he),Ge=$!==null?$.x:0,Qe=$!==null?$.y:0;st.setTexture2D(R,0),B.copyTexSubImage2D(B.TEXTURE_2D,ue,0,0,Ge,Qe,Y,Ie),K.unbindTexture()};const wa=B.createFramebuffer(),Aa=B.createFramebuffer();this.copyTextureToTexture=function(R,$,ue=null,he=null,Y=0,Ie=null){Ie===null&&(Y!==0?(va("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ie=Y,Y=0):Ie=0);let Ge,Qe,qe,ct,dt,rt,ft,Lt,At;const kt=R.isCompressedTexture?R.mipmaps[Ie]:R.image;if(ue!==null)Ge=ue.max.x-ue.min.x,Qe=ue.max.y-ue.min.y,qe=ue.isBox3?ue.max.z-ue.min.z:1,ct=ue.min.x,dt=ue.min.y,rt=ue.isBox3?ue.min.z:0;else{const xn=Math.pow(2,-Y);Ge=Math.floor(kt.width*xn),Qe=Math.floor(kt.height*xn),R.isDataArrayTexture?qe=kt.depth:R.isData3DTexture?qe=Math.floor(kt.depth*xn):qe=1,ct=0,dt=0,rt=0}he!==null?(ft=he.x,Lt=he.y,At=he.z):(ft=0,Lt=0,At=0);const Nt=ie.convert($.format),ot=ie.convert($.type);let Ut;$.isData3DTexture?(st.setTexture3D($,0),Ut=B.TEXTURE_3D):$.isDataArrayTexture||$.isCompressedArrayTexture?(st.setTexture2DArray($,0),Ut=B.TEXTURE_2D_ARRAY):(st.setTexture2D($,0),Ut=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,$.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,$.unpackAlignment);const yt=B.getParameter(B.UNPACK_ROW_LENGTH),rn=B.getParameter(B.UNPACK_IMAGE_HEIGHT),ui=B.getParameter(B.UNPACK_SKIP_PIXELS),Cn=B.getParameter(B.UNPACK_SKIP_ROWS),Vr=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,kt.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,kt.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,ct),B.pixelStorei(B.UNPACK_SKIP_ROWS,dt),B.pixelStorei(B.UNPACK_SKIP_IMAGES,rt);const zt=R.isDataArrayTexture||R.isData3DTexture,bn=$.isDataArrayTexture||$.isData3DTexture;if(R.isDepthTexture){const xn=ze.get(R),Qt=ze.get($),yn=ze.get(xn.__renderTarget),Gr=ze.get(Qt.__renderTarget);K.bindFramebuffer(B.READ_FRAMEBUFFER,yn.__webglFramebuffer),K.bindFramebuffer(B.DRAW_FRAMEBUFFER,Gr.__webglFramebuffer);for(let St=0;St<qe;St++)zt&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,ze.get(R).__webglTexture,Y,rt+St),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,ze.get($).__webglTexture,Ie,At+St)),B.blitFramebuffer(ct,dt,Ge,Qe,ft,Lt,Ge,Qe,B.DEPTH_BUFFER_BIT,B.NEAREST);K.bindFramebuffer(B.READ_FRAMEBUFFER,null),K.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(Y!==0||R.isRenderTargetTexture||ze.has(R)){const xn=ze.get(R),Qt=ze.get($);K.bindFramebuffer(B.READ_FRAMEBUFFER,wa),K.bindFramebuffer(B.DRAW_FRAMEBUFFER,Aa);for(let yn=0;yn<qe;yn++)zt?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,xn.__webglTexture,Y,rt+yn):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,xn.__webglTexture,Y),bn?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Qt.__webglTexture,Ie,At+yn):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Qt.__webglTexture,Ie),Y!==0?B.blitFramebuffer(ct,dt,Ge,Qe,ft,Lt,Ge,Qe,B.COLOR_BUFFER_BIT,B.NEAREST):bn?B.copyTexSubImage3D(Ut,Ie,ft,Lt,At+yn,ct,dt,Ge,Qe):B.copyTexSubImage2D(Ut,Ie,ft,Lt,ct,dt,Ge,Qe);K.bindFramebuffer(B.READ_FRAMEBUFFER,null),K.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else bn?R.isDataTexture||R.isData3DTexture?B.texSubImage3D(Ut,Ie,ft,Lt,At,Ge,Qe,qe,Nt,ot,kt.data):$.isCompressedArrayTexture?B.compressedTexSubImage3D(Ut,Ie,ft,Lt,At,Ge,Qe,qe,Nt,kt.data):B.texSubImage3D(Ut,Ie,ft,Lt,At,Ge,Qe,qe,Nt,ot,kt):R.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,Ie,ft,Lt,Ge,Qe,Nt,ot,kt.data):R.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,Ie,ft,Lt,kt.width,kt.height,Nt,kt.data):B.texSubImage2D(B.TEXTURE_2D,Ie,ft,Lt,Ge,Qe,Nt,ot,kt);B.pixelStorei(B.UNPACK_ROW_LENGTH,yt),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,rn),B.pixelStorei(B.UNPACK_SKIP_PIXELS,ui),B.pixelStorei(B.UNPACK_SKIP_ROWS,Cn),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Vr),Ie===0&&$.generateMipmaps&&B.generateMipmap(Ut),K.unbindTexture()},this.initRenderTarget=function(R){ze.get(R).__webglFramebuffer===void 0&&st.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?st.setTextureCube(R,0):R.isData3DTexture?st.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?st.setTexture2DArray(R,0):st.setTexture2D(R,0),K.unbindTexture()},this.resetState=function(){O=0,k=0,G=null,K.reset(),J.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Fi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Pt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Pt._getUnpackColorSpace()}}const la=.11,ls=1.72,$l=1.1,Ir=[453,1020,1515],ta=[368,773,1116],nr=s=>typeof s=="string"?new Et(s):new Et(s),Ze=s=>s*la,na=(s,e,t)=>Math.min(t,Math.max(e,s)),to=s=>Math.round(s);function Ld(s){s.traverse(e=>{if(e.geometry&&e.geometry.dispose(),e.material){const t=Array.isArray(e.material)?e.material:[e.material];for(const r of t)r.map&&r.map.dispose(),r.dispose()}})}function Nd(s,e=7,t="#aaf5c5",r=1.3){const a=document.createElement("canvas");a.width=1024,a.height=192;const l=a.getContext("2d");l.clearRect(0,0,1024,192),l.fillStyle="#0b171e",l.fillRect(0,0,1024,192),l.strokeStyle=t,l.lineWidth=10,l.strokeRect(7,7,1010,178),l.fillStyle=t,l.fillRect(24,36,7,118),l.font="bold 78px Arial, sans-serif",l.textAlign="center",l.textBaseline="middle",l.fillStyle="#f2fff9",l.fillText(s.substring(0,20),520,100,930);const u=new Ux(a);u.colorSpace=Wn;const f=new gs({map:u,side:Di,transparent:!0,depthWrite:!1});return new an(new mo(e,r),f)}function bM(s,e={}){var Ne;const t=new CM({antialias:!0,alpha:!1,powerPreference:"high-performance"});t.setPixelRatio(Math.min(window.devicePixelRatio||1,1.75)),t.setSize(Math.max(1,s.clientWidth),Math.max(1,s.clientHeight),!1),t.outputColorSpace=Wn,t.toneMapping=Ig,t.toneMappingExposure=1.36,t.shadowMap.enabled=!0,t.shadowMap.type=Lg,t.domElement.className="city-webgl",t.domElement.setAttribute("aria-label","3D playable city. Click to control the camera, WASD to walk, E to interact."),t.domElement.style.touchAction="none",s.appendChild(t.domElement);const r=new Lx;r.background=new Et(1319728),r.fog=new da(1319728,.0076);const a=new Qn(74,1,.07,270);a.rotation.order="YXZ";const l=new Ni,u=new Ni;r.add(l,u),u.visible=!1;const f=new Map;function m(U,ee=null,ie=1){const J=[U,ee,ie].join(":");if(f.has(J))return f.get(J);const Me={color:U,metalness:.09,roughness:.86};ee&&(Me.emissive=ee,Me.emissiveIntensity=.82),ie!==1&&(Me.transparent=!0,Me.opacity=ie,Me.depthWrite=!1);const L=new Fx(Me);return f.set(J,L),L}function h(U,ee,ie,J,Me,L,Q,ce,Te={}){const Se=new an(new po(Me,L,Q),m(ce,Te.emissive,Te.opacity||1));return Se.position.set(ee,ie,J),Se.castShadow=!!Te.shadow,Se.receiveShadow=!!Te.receive,U.add(Se),Se}function v(U,ee,ie,J,Me,L,Q,ce,Te=9){const Se=new an(new ac(Me,L,Q,Te),m(ce));return Se.position.set(ee,ie,J),Se.castShadow=!0,U.add(Se),Se}function _(U,ee,ie,J,Me,L,Q=9){const ce=new an(new Hf(Me,Q,7),m(L));return ce.position.set(ee,ie,J),ce.castShadow=!0,U.add(ce),ce}const x=new zx(11655418,2108713,2.3);r.add(x);const S=new Vx(16765601,2.5);S.position.set(32,70,15),S.castShadow=!0,S.shadow.mapSize.set(2048,2048),S.shadow.camera.left=-85,S.shadow.camera.right=85,S.shadow.camera.top=85,S.shadow.camera.bottom=-85,S.shadow.normalBias=.06,r.add(S);const w=new Gx(7050916,.32);r.add(w);function b(){const U=new an(new mo(Ze(Bt.width)+60,Ze(Bt.height)+60),m(2638393));U.rotation.x=-Math.PI/2,U.position.set(Ze(Bt.width/2),-.12,Ze(Bt.height/2)),U.receiveShadow=!0,l.add(U);for(let ee=0;ee<Bt.width;ee+=100)for(let ie=0;ie<Bt.height;ie+=100){const J=to(ee/100),Me=to(ie/100),L=Ze(ee+50),Q=Ze(ie+50);Ir.some(ce=>Math.abs(ce-(ee+50))<83)||ta.some(ce=>Math.abs(ce-(ie+50))<82)||h(l,L,-.055,Q,Ze(95),.055,Ze(94),(J*9+Me*19)%3===0?3494218:3230275,{receive:!0})}for(const ee of Ir){const ie=Ze(ee);h(l,ie,-.035,Ze(Bt.height/2),10.2,.07,Ze(Bt.height),2239542,{receive:!0}),h(l,ie-5.6,.045,Ze(Bt.height/2),1.1,.18,Ze(Bt.height),8753805),h(l,ie+5.6,.045,Ze(Bt.height/2),1.1,.18,Ze(Bt.height),8753805);for(let J=0;J<Ze(Bt.height);J+=5)h(l,ie,.015,J,.15,.023,2.3,14800552,{emissive:5328176})}for(const ee of ta){const ie=Ze(ee);h(l,Ze(Bt.width/2),-.028,ie,Ze(Bt.width),.075,10.2,2239542,{receive:!0}),h(l,Ze(Bt.width/2),.048,ie-5.6,Ze(Bt.width),.18,1.1,8688266),h(l,Ze(Bt.width/2),.048,ie+5.6,Ze(Bt.width),.18,1.1,8688266);for(let J=0;J<Ze(Bt.width);J+=5)h(l,J,.016,ie,2.3,.02,.15,14997165,{emissive:5328176})}for(const ee of Ir)for(const ie of ta){for(let J=-4;J<=4;J++)h(l,Ze(ee)+J*1.15,.045,Ze(ie)-7.6,.64,.02,2.5,12505806),h(l,Ze(ee)+J*1.15,.045,Ze(ie)+7.6,.64,.02,2.5,12505806);for(let J=-4;J<=4;J++)h(l,Ze(ee)-7.6,.044,Ze(ie)+J*1.15,2.5,.02,.64,12505806),h(l,Ze(ee)+7.6,.044,Ze(ie)+J*1.15,2.5,.02,.64,12505806)}}b(),new Map(In.map(U=>[U.id,U]));const y=[],g=new Map,N=[];function I(U,ee,ie,J){const Me=[];for(const L of Ir){const Q=Ze(L),ce=Q<U?-1:1;Me.push({distance:Math.abs(Q-U)-ie/2,axis:"x",side:ce})}for(const L of ta){const Q=Ze(L),ce=Q<ee?-1:1;Me.push({distance:Math.abs(Q-ee)-J/2,axis:"z",side:ce})}return Me.sort((L,Q)=>L.distance-Q.distance),Me[0]}m(3695485,533565);function C(U,ee){const ie=Ze(U.x+U.w/2),J=Ze(U.y+U.h/2),Me=Ze(U.w)*.84,L=Ze(U.h)*.84,Q=U.kind,ce=(Q==="property"?17:Q==="home"?12:Q==="mission"?13:10)+ee*7%11,Te=new Ni;Te.position.set(ie,0,J),l.add(Te);const Se=[4745828,5462380,5467768,7431261,5725800,5927787,6708072][ee%7];h(Te,0,ce/2,0,Me,ce,L,Se,{shadow:!0,receive:!0}),h(Te,0,ce+.22,0,Me+.7,.48,L+.75,2570819,{shadow:!0}),h(Te,0,.53,0,Me+.55,1.05,L+.55,2438204,{shadow:!0}),h(Te,0,ce-.8,0,Me+.55,.38,L+.55,8031106);const ye=Math.max(2,Math.floor(ce/3.4));for(let Jn=0;Jn<ye;Jn++){const Un=3.3+Jn*3.08;for(let ei=-2;ei<=2;ei++){const Hi=ei*Me/5.3,Hr=ei*L/5.3,Ai=(Jn*13+ei*7+ee*19)%6!==0,Fn=Ai?7905713:2440779;h(Te,Hi,Un,L/2+.024,Me/8,1.48,.09,Fn,{emissive:Ai?1521214:null}),h(Te,Hi,Un,-L/2-.024,Me/8,1.48,.09,Fn,{emissive:Ai?1521214:null}),h(Te,Me/2+.024,Un,Hr,.09,1.48,L/8,Fn,{emissive:Ai?1521214:null}),h(Te,-Me/2-.024,Un,Hr,.09,1.48,L/8,Fn,{emissive:Ai?1521214:null})}}const Ve=Q==="contact"?"#f8a4df":Q==="supply"?"#8de4fb":Q==="mission"?"#ffcc8d":Q==="safehouse"?"#b8f7a2":"#c3ff96",Ye=I(ie,J,Me,L),xt=Ye.axis==="x"?Ye.side*(Me/2+.08):0,mt=Ye.axis==="z"?Ye.side*(L/2+.08):0;Ye.axis==="z"?(h(Te,xt,1.5,mt,2.5,3,.2,1385769,{emissive:1522741}),h(Te,xt,1.85,mt+Ye.side*.12,1.75,1.74,.16,4360056,{emissive:1788741}),h(Te,xt,3.15,mt,3.5,.11,.4,nr(Ve).getHex(),{emissive:nr(Ve).getHex()})):(h(Te,xt,1.5,mt,.2,3,2.5,1385769,{emissive:1522741}),h(Te,xt+Ye.side*.12,1.85,mt,.16,1.74,1.75,4360056,{emissive:1788741}),h(Te,xt,3.15,mt,.4,.11,3.5,nr(Ve).getHex(),{emissive:nr(Ve).getHex()}));const mn=Nd(U.name,Math.min(8,Me*.85),Ve,1.15);mn.position.set(xt+Ye.side*(Ye.axis==="x"?.15:0),5.15,mt+Ye.side*(Ye.axis==="z"?.15:0)),Ye.axis==="x"?mn.rotation.y=Ye.side*Math.PI/2:Ye.side===-1&&(mn.rotation.y=Math.PI),Te.add(mn);const en=ie+(Ye.axis==="x"?Ye.side*(Me/2+1.55):0),wi=J+(Ye.axis==="z"?Ye.side*(L/2+1.55):0),Rn=v(l,en,.05,wi,1.2,1.4,.1,nr(Ve).getHex(),30);Rn.material=m(nr(Ve).getHex(),nr(Ve).getHex(),.47);const Bi=new an(new fa(1.15,.055,8,40),new gs({color:Ve,transparent:!0,opacity:.75}));Bi.rotation.x=Math.PI/2,Bi.position.set(en,.11,wi),l.add(Bi);const ci={type:"building",id:U.id,name:U.name,x:en,z:wi,label:"ENTER "+U.name,key:"building:"+U.id};g.set(U.id,ci),N.push(ci),y.push({minX:ie-Me/2-.7,maxX:ie+Me/2+.7,minZ:J-L/2-.7,maxZ:J+L/2+.7}),h(Te,Me/4,ce+.7,-L/4,2.6,1.1,2.2,7767175,{shadow:!0}),v(Te,-Me/4,ce+1,-L/4,.16,.26,1.65,10465446),ee%3===0&&h(Te,0,ce-1.7,L/2+.13,Me*.7,.09,.25,nr(Ve).getHex(),{emissive:nr(Ve).getHex()})}Li.forEach(C);function H(U,ee,ie=!0){const J=new Ni;if(J.position.set(U,0,ee),l.add(J),v(J,0,2.6,0,.095,.18,5.2,4478813),h(J,1.15,5.12,0,2.3,.12,.17,7373962),_(J,2.2,5,0,.37,16770476,9).material=m(16771783,14724962),ie){const Me=new Jm(16770219,11,18,2);Me.position.set(2.2,4.8,0),l.add(Me)}}for(let U=0;U<32;U++){const ee=Ir[U%3],ie=Ze(35+Math.floor(U/3)*117);H(Ze(ee)+7.3,ie,U<9)}function O(U,ee,ie){v(l,U,1.45,ee,.36,.45,2.9,5523002);for(let J=0;J<3;J++){const Me=new an(new Bf(1.65+ie%4*.13,0),m(J%2===0?4750173:6919532));Me.position.set(U+(J-1)*.46,3.7+J%2*.7,ee+(J-1)*.55),Me.castShadow=!0,l.add(Me)}}for(let U=0;U<40;U++){const ee=Ze(70+U*347%1760),ie=Ze(74+U*197%1140);y.some(J=>ee>J.minX-2&&ee<J.maxX+2&&ie>J.minZ-2&&ie<J.maxZ+2)||Ir.some(J=>Math.abs(ee-Ze(J))<7)||ta.some(J=>Math.abs(ie-Ze(J))<7)||O(ee,ie,U)}const k=[];function G(U,ee,ie,J,Me){const L=new Ni;L.position.set(ee,0,ie),U.add(L);const Q=2701636,ce=[13673611,11104340,15186590,8936777][Me%4];h(L,0,1.18,0,.7,1.04,.43,J,{shadow:!0}),h(L,0,1.35,-.23,.74,.23,.13,Q),_(L,0,2.05,0,.27,ce);const Te=_(L,0,2.22,-.01,.277,Me%3===0?3155751:4667951);Te.scale.y=.5,h(L,-.42,1.25,0,.17,.86,.27,ce,{shadow:!0}),h(L,.42,1.25,0,.17,.86,.27,ce,{shadow:!0});const Se=h(L,-.2,.42,0,.26,.8,.3,1516329,{shadow:!0}),ye=h(L,.2,.42,0,.26,.8,.3,1516329,{shadow:!0});return h(L,-.2,.07,-.07,.31,.16,.48,1254185),h(L,.2,.07,-.07,.31,.16,.48,1254185),{root:L,leg1:Se,leg2:ye,baseX:ee,baseZ:ie,phase:Me*2.5}}Ur.forEach((U,ee)=>{const ie=Ze(U.x),J=Ze(U.y),Me=G(l,ie,J,U.color,ee),L=v(l,ie,.075,J,.47,.58,.14,12909468,26);L.material=new gs({color:12188048,transparent:!0,opacity:.45});const Q=new an(new fa(.36,.052,8,24),new gs({color:11467661}));Q.rotation.x=Math.PI/2,Q.position.set(ie,2.67,J),l.add(Q);const ce={type:"npc",id:U.id,name:U.name,x:ie,z:J,label:"TALK TO "+U.name,key:"npc:"+U.id};N.push(ce),k.push({...Me,marker:L,above:Q,point:ce,npc:U})});const P=[];for(let U=0;U<28;U++){const ee=Ze(Ir[U%3]+(U%2===0?23:-24)),ie=Ze(65+U*43%1150);P.push({...G(l,ee,ie,[5995385,9466716,6580882,9333626][U%4],U+34),speed:.22+U%5*.12})}const A=[];for(let U=0;U<13;U++){const ee=new Ni,ie=U%3,J=Ze(Ir[ie]),Me=Ze(40+U*97%1100);ee.position.set(J+(U%2?2.2:-2.2),.3,Me),l.add(ee),h(ee,0,.52,0,1.85,.69,3.8,U<3?3955845:[4488304,9264216,5924479][U%3],{shadow:!0}),h(ee,0,1.07,-.32,1.58,.65,1.9,3231840,{shadow:!0});for(const Q of[-.99,.99])for(const ce of[-1.1,1.05]){const Te=new an(new ac(.37,.37,.22,12),m(1120541));Te.rotation.z=Math.PI/2,Te.position.set(Q,.25,ce),ee.add(Te)}h(ee,-.57,.58,-1.94,.46,.22,.14,16772016,{emissive:13937518}),h(ee,.57,.58,-1.94,.46,.22,.14,16772016,{emissive:13937518});let L=null;U<3&&(L=h(ee,0,1.45,-.3,.85,.1,.37,16484996,{emissive:14960715})),A.push({g:ee,startZ:Me,direction:U%2===0?1:-1,rate:.8+U*.15,police:U<3,light:L,roadX:J})}let V=[];function q(U){Ld(u),u.clear(),V=[];const ee=U.kind==="supply"?6471630:U.kind==="contact"?13209017:U.kind==="mission"?15974787:10408620,ie=17,J=22;h(u,0,-.2,0,ie,.4,J,3948605,{receive:!0});for(let Se=-8;Se<=8;Se+=2)h(u,Se,-.008,0,.04,.01,J,6648170);h(u,0,4.5,-11,ie,9,.55,3757146),h(u,-8.5,4.5,0,.55,9,J,4281178),h(u,8.5,4.5,0,.55,9,4281178),h(u,0,8.8,0,ie,.35,J,2307130),h(u,-5,3.4,-10.65,5.2,3.1,.15,2113362,{emissive:1521994}),h(u,5,3.4,-10.65,4.5,3.1,.15,2113362,{emissive:1521994});for(const Se of[-7,0,7]){const ye=new Jm(ee,10,16,2);ye.position.set(Se,6.9,-2),u.add(ye),v(u,Se,8.3,-2,.6,.6,.16,ee)}h(u,0,1,-4.9,8.4,2,1.5,5399388,{shadow:!0}),h(u,0,2.07,-4.9,8.6,.17,1.66,9731684),h(u,1.3,2.23,-4.9,1.15,.27,.8,1845552),h(u,1.3,2.58,-4.9,.9,.55,.13,7316640,{emissive:1595991});const Me=Nd(U.name,8,"#b9f6af",1.65);Me.position.set(0,5.95,-10.6),u.add(Me);for(const Se of[-7.5,7.5])for(let ye=0;ye<3;ye++){const Ve=.65+ye*1.32;h(u,Se,Ve,-2.7,.65,.12,10.5,8491404);for(let Ye=0;Ye<7;Ye++)h(u,Se,Ve+.45,-7+Ye*1.27,.42,.85,.7,[8298909,8550285,9335647,8231795][(ye+Ye)%4])}h(u,-4.6,.8,6,3.5,1.05,1.65,4747882,{shadow:!0}),h(u,-4.6,1.32,6.68,3.5,.98,.37,3694678),h(u,-4.6,.55,3.8,2.8,.35,1.45,8875867,{shadow:!0}),h(u,-4.6,.03,4.4,5,.025,4.2,6577750),v(u,5,.6,4.3,.55,.6,1.15,5924706),_(u,5,1.7,4.3,1.12,5216365,10).scale.set(.8,1.35,.8),h(u,0,2.2,10.73,3.15,4.4,.35,1583150,{emissive:1260590}),h(u,0,4.43,10.64,3.4,.18,.36,ee,{emissive:ee});const Q=Nd("EXIT TO STREET",4.3,"#b8fb9b",.8);Q.position.set(0,5.4,10.35),Q.rotation.y=Math.PI,u.add(Q),V.push({type:"exit",id:U.id,name:"STREET",x:0,z:8.4,label:"EXIT TO STREET",key:"exit"});const ce={type:"interior",id:U.id,name:U.name,x:1.3,z:-2.7,label:"USE "+U.name+" TERMINAL",key:"terminal"};V.push(ce);const Te=new an(new fa(1.4,.07,8,32),new gs({color:ee,transparent:!0,opacity:.6}));Te.rotation.x=Math.PI/2,Te.position.set(1.3,.05,-2.7),u.add(Te)}const oe=(Ne=e.getState)==null?void 0:Ne.call(e),ve=(oe==null?void 0:oe.player)||{x:410,y:320};a.position.set(Ze(ve.x),ls,Ze(ve.y));let fe=-.8,pe=0,me=null,j=null,_e=!1,de=!1,z=!1,le="";const Ue=new Set,ke=new Set,Xe=new jx;function se(){a.rotation.y=fe,a.rotation.x=pe}se();function ge(U,ee){if(me)return U<-7.7||U>7.7||ee<-10.2||ee>9.8;if(U<1||ee<1||U>Ze(Bt.width)-1||ee>Ze(Bt.height)-1)return!0;for(const ie of y)if(U>ie.minX-$l&&U<ie.maxX+$l&&ee>ie.minZ-$l&&ee<ie.maxZ+$l)return!0;return!1}function we(){var U;return!de&&((U=e.canMove)==null?void 0:U.call(e))!==!1}function Be(U,ee){we()&&(fe-=U*.0023,pe=na(pe-ee*.0021,-1.18,1.18),se())}function je(){var U;z=document.pointerLockElement===t.domElement,(U=e.onLock)==null||U.call(e,z)}function pt(U){var ee,ie,J;if(U.pointerType==="touch"){we()&&((ie=(ee=t.domElement).setPointerCapture)==null||ie.call(ee,U.pointerId),Ht=U.pointerId,B=U.clientX,Ae=U.clientY);return}if(we()&&!z&&t.domElement.requestPointerLock)try{const Me=t.domElement.requestPointerLock();(J=Me==null?void 0:Me.catch)==null||J.call(Me,()=>{})}catch{}}let Ht=null,B=0,Ae=0;function Fe(U){U.pointerType==="touch"&&Ht===U.pointerId&&(Be((U.clientX-B)*1.6,(U.clientY-Ae)*1.6),B=U.clientX,Ae=U.clientY)}function Le(U){Ht===U.pointerId&&(Ht=null)}function K(U){z&&Be(U.movementX,U.movementY)}function ut(U){var J;const ee=(J=document.activeElement)==null?void 0:J.tagName;if(ee==="INPUT"||ee==="TEXTAREA"||ee==="SELECT")return;const ie=U.key.toLowerCase();["w","a","s","d","shift","arrowup","arrowdown","arrowleft","arrowright","e"].includes(ie)&&(["arrowup","arrowdown","arrowleft","arrowright"].includes(ie)&&U.preventDefault(),Ue.add(ie),ie==="e"&&!U.repeat&&we()&&Ee())}function ze(U){Ue.delete(U.key.toLowerCase())}function st(){return new Z(-Math.sin(fe),0,-Math.cos(fe))}new Z;const Ct=new Z;function Dt(){if(!we())return null;const U=me?V:N,ee=st();let ie=null,J=1/0;for(const Me of U){const L=Me.x-a.position.x,Q=Me.z-a.position.z,ce=Math.hypot(L,Q);if(ce>5.4)continue;const Te=(ee.x*L+ee.z*Q)/(ce||1);if(Te<.28&&ce>2.15)continue;const Se=ce-Te*.9;Se<J&&(J=Se,ie=Me)}return ie}function D(U){var ie;const ee=(U==null?void 0:U.key)||"";ee!==le&&(le=ee,(ie=e.onFocus)==null||ie.call(e,U?{key:U.key,type:U.type,name:U.name,label:U.label}:null))}function T(U){var ie;const ee=Li.find(J=>J.id===U);!ee||me||(me=ee.id,j=a.position.clone(),q(ee),l.visible=!1,u.visible=!0,r.fog=new da(1846836,.018),a.position.set(0,ls,5.7),fe=0,pe=-.045,se(),D(null),(ie=e.onRoom)==null||ie.call(e,ee))}function ne(){var U;me&&(me=null,u.visible=!1,l.visible=!0,r.fog=new da(1319728,.0076),a.position.copy(j||new Z(Ze(410),ls,Ze(320))),fe=0,pe=0,se(),D(null),(U=e.onRoom)==null||U.call(e,null))}function Ee(){var ee,ie;if(!we())return!1;const U=Dt();return U?U.type==="exit"?(ne(),!0):U.type==="interior"?((ee=e.onInteract)==null||ee.call(e,{type:"interior",id:U.id}),!0):((ie=e.onInteract)==null||ie.call(e,{type:U.type,id:U.id}),!0):!1}function Re(){const U=s.clientWidth||1,ee=s.clientHeight||1;a.aspect=U/ee,a.updateProjectionMatrix(),t.setSize(U,ee,!1)}const xe=new ResizeObserver(Re);xe.observe(s),Re(),t.domElement.addEventListener("pointerdown",pt),t.domElement.addEventListener("pointermove",Fe),t.domElement.addEventListener("pointerup",Le),t.domElement.addEventListener("pointercancel",Le),document.addEventListener("pointerlockchange",je),document.addEventListener("mousemove",K),window.addEventListener("keydown",ut),window.addEventListener("keyup",ze);let et=0,De=0,He=0;function tt(){var ie,J,Me;if(_e)return;requestAnimationFrame(tt);const U=Math.min(.05,Xe.getDelta());He+=U;const ee=((J=(ie=e.getState)==null?void 0:ie.call(e))==null?void 0:J.heat)||0;for(let L=0;L<k.length;L++){const Q=k[L],ce=He*.7+Q.phase;Q.root.position.x=Q.baseX+Math.sin(ce)*.37,Q.root.position.z=Q.baseZ+Math.cos(ce*.73)*.3,Q.root.rotation.y=Math.sin(ce*.31)*.8,Q.leg1.rotation.x=Math.sin(ce*2)*.17,Q.leg2.rotation.x=-Math.sin(ce*2)*.17,Q.above.position.y=2.75+Math.sin(He*2.5+L)*.12,Q.point.x=Q.root.position.x,Q.point.z=Q.root.position.z}for(let L=0;L<P.length;L++){const Q=P[L];Q.root.position.z=Q.baseZ+Math.sin(He*.2+L)*14,Q.root.rotation.y=Math.cos(He*.2+L)>=0?0:Math.PI,Q.leg1.rotation.x=Math.sin(He*7+L)*.37,Q.leg2.rotation.x=-Q.leg1.rotation.x}for(let L=0;L<A.length;L++){const Q=A[L],ce=Ze(Bt.height)-18;Q.g.position.z=6+((Q.startZ+Q.direction*He*Q.rate*3)%ce+ce)%ce,Q.g.rotation.y=Q.direction>0?Math.PI:0,Q.g.visible=!Q.police||ee>=25,Q.light&&(Q.light.material=He*5%1<.5?m(15621207,15615301):m(6524411,3562224))}if(we()){const L=(Ue.has("w")||Ue.has("arrowup")||ke.has("forward")?1:0)-(Ue.has("s")||Ue.has("arrowdown")||ke.has("backward")?1:0),Q=(Ue.has("d")||Ue.has("arrowright")||ke.has("right")?1:0)-(Ue.has("a")||Ue.has("arrowleft")||ke.has("left")?1:0),ce=st();if(Ct.set(ce.x*L+ce.z*-Q,0,ce.z*L+ce.x*Q),Ct.set(ce.x*L+Math.cos(fe)*Q,0,ce.z*L-Math.sin(fe)*Q),Ct.lengthSq()>0){Ct.normalize();const Te=Ue.has("shift")||ke.has("sprint")?12.5:7.6,Se=Ct.x*U*Te,ye=Ct.z*U*Te;ge(a.position.x+Se,a.position.z)||(a.position.x+=Se),ge(a.position.x,a.position.z+ye)||(a.position.z+=ye),a.position.y=ls+Math.sin(He*11)*(Ue.has("shift")?.065:.035)}else a.position.y=ls}He-De>.12&&(De=He,D(Dt())),He-et>1.2&&!me&&(et=He,(Me=e.onPosition)==null||Me.call(e,{x:to(a.position.x/la),y:to(a.position.z/la)})),t.render(r,a)}return tt(),{enter:T,exit:ne,interact:Ee,setControl(U,ee){ee?ke.add(U):ke.delete(U)},pause(U){de=!!U,de&&(ke.clear(),document.pointerLockElement===t.domElement&&document.exitPointerLock(),D(null))},lock(){var U;if(we()&&t.domElement.requestPointerLock)try{const ee=t.domElement.requestPointerLock();(U=ee==null?void 0:ee.catch)==null||U.call(ee,()=>{})}catch{}},jump(U,ee){me&&ne(),a.position.set(na(Ze(U),2,Ze(Bt.width)-2),ls,na(Ze(ee),2,Ze(Bt.height)-2)),D(null)},move(U,ee){var Me;me&&ne();const ie=na(Ze(U),2,Ze(Bt.width)-2),J=na(Ze(ee),2,Ze(Bt.height)-2);a.position.set(ie,ls,J),ge(a.position.x,a.position.z)&&(a.position.z+=9,ge(a.position.x,a.position.z)&&(a.position.x+=9)),(Me=e.onPosition)==null||Me.call(e,{x:to(a.position.x/la),y:to(a.position.z/la)}),D(null)},destroy(){_e=!0,xe.disconnect(),document.pointerLockElement===t.domElement&&document.exitPointerLock(),t.domElement.removeEventListener("pointerdown",pt),t.domElement.removeEventListener("pointermove",Fe),t.domElement.removeEventListener("pointerup",Le),t.domElement.removeEventListener("pointercancel",Le),document.removeEventListener("pointerlockchange",je),document.removeEventListener("mousemove",K),window.removeEventListener("keydown",ut),window.removeEventListener("keyup",ze),Ld(l),Ld(u);for(const U of f.values())U.dispose();t.dispose(),t.domElement.remove()}}}const PM=[["city","Explore city",i_],["market","Underground market",Ud],["contacts","Street contacts",Dr],["crew","Your crew",Dr],["territory","Territory control",ia],["properties","Properties",Id],["missions","Night missions",ra],["intel","City intelligence",Cf]],LM=()=>{try{return localStorage.getItem("cartel-city-intro-v1")==="yes"}catch{return!1}},NM=(s,e=100)=>Math.min(100,Math.max(0,100*s/Math.max(1,e)));function ca({value:s,max:e=100,tone:t="lime"}){return E.jsx("div",{className:"bar "+t,children:E.jsx("span",{style:{width:NM(s,e)+"%"}})})}function sr({children:s,onClick:e,disabled:t,kind:r="primary"}){return E.jsx("button",{disabled:t,onClick:e,className:"action "+r,children:s})}function ir({code:s,title:e,icon:t}){return E.jsxs("div",{className:"panel-title",children:[E.jsxs("span",{className:"eyebrow",children:[s," / CARTEL CITY"]}),E.jsxs("div",{children:[E.jsx("h2",{children:e}),t&&E.jsx(t,{size:19})]})]})}function IM({p:s}){return E.jsx("span",{className:"item-symbol",style:{"--accent":s.color},children:s.icon})}function wg({heat:s,onHide:e}){return E.jsxs("div",{className:"heat-card",children:[E.jsxs("div",{children:[E.jsxs("span",{children:[E.jsx(Dd,{size:14})," POLICE HEAT"]}),E.jsxs("b",{children:[Math.round(s),"%"]})]}),E.jsx(ca,{value:s,tone:s>70?"red":s>30?"gold":"lime"}),E.jsx("small",{children:s<25?"LOW PROFILE":s<50?"PATROLS ACTIVE":s<75?"HIGH ALERT":"CRACKDOWN IMMINENT"}),e&&E.jsxs(sr,{kind:"subtle",onClick:e,disabled:s<5,children:[E.jsx(l_,{size:14})," LAY LOW & REDUCE HEAT"]})]})}function DM({onStart:s,progress:e}){return E.jsxs("div",{className:"intro",children:[E.jsx("div",{className:"intro-grid"}),E.jsxs("div",{className:"intro-nav",children:[E.jsx("div",{className:"mark",children:E.jsx(Rg,{size:22})}),E.jsxs("div",{className:"brand-text",children:["CARTEL",E.jsx("span",{children:"CITY"})]}),E.jsx("div",{className:"intro-right",children:"UNDERGROUND SIMULATOR / V1.0"})]}),E.jsxs("section",{className:"intro-content",children:[E.jsxs("div",{className:"intro-copy",children:[E.jsxs("div",{className:"eyebrow",children:[E.jsx("i",{className:"live-dot"})," THE CITY NEVER SLEEPS"]}),E.jsxs("h1",{children:["MAKE YOUR",E.jsx("br",{}),E.jsx("em",{children:"OWN RULES."})]}),E.jsx("p",{children:"One city. Six districts. A thousand ways to the top. Start with a cheap apartment and $500. Build your empire, meet your contacts, and survive the heat."}),E.jsxs("button",{className:"start-btn",onClick:s,children:[E.jsx(s_,{size:20}),e?"CONTINUE YOUR EMPIRE":"ENTER CARTEL CITY",E.jsx(Zl,{size:19})]}),E.jsxs("div",{className:"intro-highlights",children:[E.jsx("span",{children:"EXPLORE THE CITY"}),E.jsx("span",{children:"BUILD YOUR CREW"}),E.jsx("span",{children:"SURVIVE THE HEAT"})]})]}),E.jsxs("div",{className:"intro-visual",children:[E.jsxs("div",{className:"visual-top",children:[E.jsx(Cf,{size:14})," LIVE CITY SURVEILLANCE 09"]}),E.jsx("div",{className:"visual-skyline",children:Array.from({length:14},(t,r)=>E.jsx("span",{style:{height:30+r*41%75+"%"}},r))}),E.jsxs("div",{className:"visual-code",children:[E.jsx("span",{children:"06 DISTRICTS"}),E.jsx("strong",{children:"01 EMPIRE"}),E.jsx("small",{children:"VANTA CITY · NORTH AMERICA · FICTIONAL"})]}),E.jsx("div",{className:"visual-line"})]})]}),E.jsxs("footer",{className:"intro-footer",children:[E.jsx("span",{children:"CARTEL CITY © 2026"}),E.jsx("span",{children:"FICTIONAL GOODS · NO REAL MONEY · SAVED ON THIS DEVICE"})]})]})}function UM(){var B;const[s,e]=Tt.useState(()=>m_()),t=Tt.useRef(s),r=Tt.useRef(null),a=Tt.useRef(null),l=Tt.useRef(s.player),[u,f]=Tt.useState("city"),[m,h]=Tt.useState("marcus"),[v,_]=Tt.useState("ember"),[x,S]=Tt.useState(1),[w,b]=Tt.useState(65),[y,g]=Tt.useState(3),[N,I]=Tt.useState("old"),[C,H]=Tt.useState(()=>!LM()),[O,k]=Tt.useState(!1),[G,P]=Tt.useState(null),[A,V]=Tt.useState(null),[q,oe]=Tt.useState(s.player),ve=Tt.useRef(null),[fe,pe]=Tt.useState(null),[me,j]=Tt.useState(!1),_e=Tt.useRef(!0);_e.current=!C&&!O&&u==="city";const de=Tt.useCallback((Ae,Fe="success")=>{clearTimeout(ve.current),V({message:Ae,kind:Fe}),ve.current=setTimeout(()=>V(null),4500)},[]),z=Tt.useCallback(Ae=>{try{const Fe=g_(t.current,Ae);return t.current=Fe.state,e(Fe.state),Zu(Fe.state),Fe.message&&de(Fe.message,Fe.message.includes("turned down")||Fe.message.includes("rivals held")?"warning":"success"),Fe}catch(Fe){return de(Fe.message||"This action is unavailable.","error"),null}},[de]),le=Tt.useCallback(Ae=>{var Fe;if(Ae.type==="npc"){const Le=Ur.find(K=>K.id===Ae.id);if(!Le)return;h(Le.id),_(Le.preferred),S(1),b(Ql(t.current,Le,Le.preferred)),f("deal")}else if(Ae.type==="building"){const Le=Li.find(K=>K.id===Ae.id);if(!Le)return;z({type:"visit",id:Le.id}),(Fe=a.current)==null||Fe.enter(Le.id),P(Le),f("city")}else if(Ae.type==="interior"){const Le=Li.find(K=>K.id===Ae.id);if(!Le)return;f(Le.kind==="supply"?"market":Le.kind==="mission"?"missions":Le.kind==="property"||Le.kind==="home"?"properties":Le.kind==="safehouse"?"city":"contacts")}k(!1)},[z]);Tt.useEffect(()=>{if(!r.current)return;const Ae=bM(r.current,{getState:()=>t.current,onInteract:le,onPosition:Fe=>{l.current=Fe,oe(Fe)},onFocus:pe,onLock:j,onRoom:P,canMove:()=>_e.current});return a.current=Ae,()=>{Ae.destroy(),a.current=null}},[le]),Tt.useEffect(()=>{var Ae;(Ae=a.current)==null||Ae.pause(!_e.current)},[C,u,O]),Tt.useEffect(()=>{const Ae=Fe=>{var K;const Le=(K=document.activeElement)==null?void 0:K.tagName;Le==="INPUT"||Le==="TEXTAREA"||Le==="SELECT"||(Fe.key==="Tab"&&(Fe.preventDefault(),k(ut=>!ut),f("city")),Fe.key==="Escape"&&(k(!1),f("city")),Fe.key.toLowerCase()==="i"&&(k(!1),f("market")))};return window.addEventListener("keydown",Ae),()=>window.removeEventListener("keydown",Ae)},[]),Tt.useEffect(()=>{const Ae=setInterval(()=>{const Fe=bg(t.current,1);Fe.player=l.current,t.current=Fe,e(Fe),Zu(Fe)},1e3);return()=>clearInterval(Ae)},[]),Tt.useEffect(()=>()=>clearTimeout(ve.current),[]);const Ue=ua(s),ke=Ur.find(Ae=>Ae.id===m)||Ur[0],Xe=s.contacts[ke.id]||{trust:25,lastDeal:-999},se=yi.find(Ae=>Ae.id===v)||yi[0],ge=In.find(Ae=>q.x>=Ae.bounds[0]&&q.x<Ae.bounds[2]&&q.y>=Ae.bounds[1]&&q.y<Ae.bounds[3])||In[0],we=(Ae,Fe)=>{var Le;(Le=a.current)==null||Le.move(Ae,Fe),f("city"),P(null),k(!1)},Be=Ae=>{f(Ae),k(!1)},je=()=>{var Fe;if(!window.confirm("Permanently reset the local game save and start a new empire?"))return;const Ae=Fd();t.current=Ae,e(Ae),l.current=Ae.player,oe(Ae.player),Zu(Ae),(Fe=a.current)==null||Fe.jump(Ae.player.x,Ae.player.y),f("city"),de("Your empire has been reset.")},pt=()=>{H(!1);try{localStorage.setItem("cartel-city-intro-v1","yes")}catch{}},Ht=()=>{var Ae,Fe,Le;return u==="market"?E.jsxs(E.Fragment,{children:[E.jsx(ir,{code:"01 / EXCHANGE",title:"Underground Market",icon:Ud}),E.jsx("p",{className:"panel-subtitle",children:"Buy fictional contraband. Market prices fluctuate, and every order uses warehouse space."}),E.jsxs("div",{className:"progress-label",children:[E.jsx("span",{children:"STORAGE CAPACITY"}),E.jsxs("b",{children:[oa(s)," / ",sa(s)]})]}),E.jsx(ca,{value:oa(s),max:sa(s),tone:"cyan"}),E.jsxs("div",{className:"counter-row",children:[E.jsx("span",{children:"ORDER QUANTITY"}),E.jsxs("div",{className:"stepper",children:[E.jsx("button",{onClick:()=>g(K=>Math.max(1,K-1)),children:E.jsx(Em,{size:13})}),E.jsx("strong",{children:y}),E.jsx("button",{onClick:()=>g(K=>Math.min(30,K+1)),children:E.jsx(qu,{size:13})})]})]}),E.jsx("div",{className:"product-list",children:yi.map(K=>E.jsxs("article",{className:"product",children:[E.jsxs("div",{className:"product-main",children:[E.jsx(IM,{p:K}),E.jsxs("div",{children:[E.jsxs("small",{children:[K.tag," · LEVEL ",K.unlock]}),E.jsx("strong",{children:K.name}),E.jsxs("span",{children:["OWNED: ",s.stock[K.id]||0]})]}),E.jsxs("div",{className:"product-value",children:[$t(oo(s,K,"wholesale")),E.jsx("small",{children:"PER UNIT"})]})]}),E.jsxs(sr,{disabled:Ue<K.unlock,kind:"buy",onClick:()=>z({type:"buy",product:K.id,quantity:y}),children:[Ue<K.unlock?"UNLOCKS AT LVL "+K.unlock:"BUY "+y+" FOR "+$t(oo(s,K,"wholesale")*y)," ",E.jsx($i,{size:14})]})]},K.id))})]}):u==="deal"?E.jsxs(E.Fragment,{children:[E.jsx(ir,{code:"02 / NEGOTIATE",title:"Contact Meeting",icon:Dr}),E.jsxs("div",{className:"npc-profile",children:[E.jsx("div",{className:"npc-portrait",style:{"--portrait":"#"+ke.color.toString(16).padStart(6,"0")},children:ke.name.slice(0,1)}),E.jsxs("div",{children:[E.jsx("span",{className:"eyebrow",children:"ACTIVE STREET CONTACT"}),E.jsx("h3",{children:ke.name}),E.jsxs("small",{children:[ke.style," · ",ke.personality]}),E.jsx("b",{children:(Ae=In.find(K=>K.id===ke.district))==null?void 0:Ae.short})]})]}),E.jsxs("div",{className:"progress-label",children:[E.jsx("span",{children:"RELATIONSHIP TRUST"}),E.jsxs("b",{children:[Xe.trust,"%"]})]}),E.jsx(ca,{value:Xe.trust,tone:"cyan"}),E.jsxs("div",{className:"speech",children:["“",ke.personality==="friendly"?"Hey, heard you were making moves. Got something good?":ke.personality==="cautious"?"Keep it quiet. Make me a fair offer.":"Make it quick. I have other places to be.","”"]}),E.jsx("label",{className:"input-label",children:"FICTIONAL PRODUCT"}),E.jsx("select",{value:v,onChange:K=>{_(K.target.value),b(Ql(t.current,ke,K.target.value))},children:yi.map(K=>E.jsxs("option",{value:K.id,children:[K.name," — in stock ",s.stock[K.id]]},K.id))}),E.jsxs("div",{className:"dual-fields",children:[E.jsxs("div",{children:[E.jsx("label",{className:"input-label",children:"UNITS"}),E.jsxs("div",{className:"stepper large",children:[E.jsx("button",{onClick:()=>S(K=>Math.max(1,K-1)),children:E.jsx(Em,{size:15})}),E.jsx("strong",{children:x}),E.jsx("button",{onClick:()=>S(K=>Math.min(3,K+1)),children:E.jsx(qu,{size:15})})]})]}),E.jsxs("div",{children:[E.jsx("label",{className:"input-label",children:"OFFER / UNIT"}),E.jsxs("div",{className:"price-input",children:[E.jsx("span",{children:"$"}),E.jsx("input",{type:"number",min:"1",max:"5000",value:w,onChange:K=>b(Number(K.target.value))})]})]})]}),E.jsxs("div",{className:"receipt",children:[E.jsxs("div",{children:[E.jsx("span",{children:"SUGGESTED PRICE"}),E.jsx("b",{children:$t(Ql(s,ke,v))})]}),E.jsxs("div",{children:[E.jsx("span",{children:"YOUR ASK"}),E.jsx("b",{children:$t(w*x)})]}),E.jsxs("div",{children:[E.jsx("span",{children:"ITEMS AVAILABLE"}),E.jsx("b",{children:s.stock[se.id]||0})]})]}),E.jsxs(sr,{disabled:!hs(s,ke.district)||s.stock[se.id]<x||s.elapsed-Xe.lastDeal<12,onClick:()=>z({type:"deal",npc:ke.id,product:se.id,quantity:x,ask:w}),children:[E.jsx(ym,{size:16})," ",s.elapsed-Xe.lastDeal<12?"CONTACT COOLING DOWN":"PROPOSE DEAL"," ",E.jsx($i,{size:16})]}),E.jsx("p",{className:"tiny-note",children:"Fictional NPCs accept or refuse offers based on price, trust, and police attention."}),E.jsx(sr,{kind:"subtle",onClick:()=>Be("contacts"),children:"BACK TO CONTACTS"})]}):u==="contacts"?E.jsxs(E.Fragment,{children:[E.jsx(ir,{code:"02 / NETWORK",title:"Street Contacts",icon:Dr}),E.jsx("p",{className:"panel-subtitle",children:"Meet your contacts on the map. Each has preferred fictional goods, a personality, and relationship trust."}),E.jsx("div",{className:"npc-list",children:Ur.map(K=>{const ut=In.find(st=>st.id===K.district),ze=hs(s,K.district);return E.jsxs("div",{className:"npc-row",children:[E.jsx("div",{className:"npc-bubble",style:{"--portrait":"#"+K.color.toString(16).padStart(6,"0")},children:K.name[0]}),E.jsxs("div",{children:[E.jsx("strong",{children:K.name}),E.jsxs("small",{children:[K.style," · ",ut.short]})]}),E.jsx("button",{disabled:!ze,onClick:()=>we(K.x,K.y),children:ze?E.jsxs(E.Fragment,{children:[E.jsx(ia,{size:13})," FIND"]}):"LVL "+ut.unlock})]},K.id)})})]}):u==="crew"?E.jsxs(E.Fragment,{children:[E.jsx(ir,{code:"03 / MANAGEMENT",title:"Your Crew",icon:Dr}),E.jsx("p",{className:"panel-subtitle",children:"Hire NPC workers who automatically sell fictional Blue Ember stock. They earn gradually and increase your police heat."}),E.jsxs("div",{className:"double-stats",children:[E.jsxs("div",{children:[E.jsx("span",{children:"ACTIVE CREW"}),E.jsxs("strong",{children:[s.workers.length," / ",1+s.properties.length*2]})]}),E.jsxs("div",{children:[E.jsx("span",{children:"CREW EARNINGS"}),E.jsx("strong",{children:$t(s.workers.reduce((K,ut)=>K+ut.earned,0))})]})]}),E.jsx("label",{className:"input-label",children:"ASSIGNED DISTRICT"}),E.jsx("select",{value:N,onChange:K=>I(K.target.value),children:In.filter(K=>hs(s,K.id)).map(K=>E.jsx("option",{value:K.id,children:K.short},K.id))}),E.jsxs("div",{className:"notice-card",children:[E.jsx(d_,{size:22}),E.jsxs("p",{children:["Hiring a worker costs ",$t(350+s.workers.length*220),". Crew consume your inventory to complete simulated orders every 21 seconds."]})]}),E.jsxs(sr,{disabled:s.workers.length>=1+s.properties.length*2||s.cash<350+s.workers.length*220,onClick:()=>z({type:"hire",district:N}),children:[E.jsx(qu,{size:15})," HIRE NEW WORKER ",E.jsx($i,{size:15})]}),E.jsx("div",{className:"list-heading",children:"YOUR ROSTER"}),s.workers.length?s.workers.map(K=>{var ut;return E.jsxs("div",{className:"crew-row",children:[E.jsx("span",{className:"npc-bubble",children:K.name[0]}),E.jsxs("div",{children:[E.jsx("strong",{children:K.name}),E.jsxs("small",{children:[(ut=In.find(ze=>ze.id===K.district))==null?void 0:ut.short," · ON SHIFT"]})]}),E.jsx("b",{children:$t(K.earned)})]},K.id)}):E.jsxs("div",{className:"empty",children:[E.jsx(Dr,{size:28}),E.jsx("strong",{children:"WORKING SOLO"}),E.jsx("p",{children:"Recruit your first worker to grow your operation."})]})]}):u==="territory"?E.jsxs(E.Fragment,{children:[E.jsx(ir,{code:"04 / EXPANSION",title:"Territory Control",icon:ia}),E.jsx("p",{className:"panel-subtitle",children:"Grow influence by challenging rival groups in each fictional neighborhood. Riskier districts are tougher."}),E.jsx("div",{className:"territory-list",children:In.map(K=>{const ut=hs(s,K.id),ze=s.territory[K.id]||0;return E.jsxs("article",{className:"territory",style:{"--tone":K.color},children:[E.jsxs("div",{className:"territory-top",children:[E.jsxs("b",{children:[E.jsx("i",{}),K.name]}),E.jsx("small",{children:ut?"RISK "+K.risk+"%":"UNLOCK LVL "+K.unlock})]}),E.jsx(ca,{value:ze,tone:"cyan"}),E.jsxs("div",{className:"territory-actions",children:[E.jsxs("strong",{children:[ze,"% CONTROL"]}),E.jsx("button",{title:"Locate district",onClick:()=>we((K.bounds[0]+K.bounds[2])/2,(K.bounds[1]+K.bounds[3])/2),children:E.jsx(Cl,{size:15})}),E.jsxs("button",{disabled:!ut||ze===100,onClick:()=>z({type:"territory",id:K.id}),children:[ut?ze===100?"OWNED":"CHALLENGE":"LOCKED"," ",E.jsx($i,{size:13})]})]})]},K.id)})})]}):u==="properties"?E.jsxs(E.Fragment,{children:[E.jsx(ir,{code:"05 / ASSETS",title:"Properties",icon:Id}),E.jsx("p",{className:"panel-subtitle",children:"Expand your storage and crew capacity by buying new properties. Locate each building on the map."}),E.jsxs("div",{className:"notice-card",children:[E.jsx(u_,{size:20}),E.jsxs("p",{children:["Warehouse space: ",E.jsxs("strong",{children:[oa(s)," / ",sa(s)]})," units"]})]}),lc.map(K=>{const ut=s.properties.includes(K.id),ze=Li.find(st=>st.id===K.id);return E.jsxs("article",{className:"property",children:[E.jsxs("div",{className:"property-banner",children:[E.jsx(Id,{size:30}),E.jsx("span",{children:ut?"OWNED":"FOR SALE"})]}),E.jsxs("div",{className:"property-copy",children:[E.jsx("strong",{children:K.name}),E.jsx("p",{children:K.desc}),E.jsx("small",{children:K.bonus})]}),E.jsxs("div",{className:"property-actions",children:[E.jsxs("button",{onClick:()=>we(ze.x+ze.w/2,ze.y+ze.h+20),children:[E.jsx(Cl,{size:13})," LOCATE"]}),E.jsxs(sr,{disabled:ut,kind:"buy",onClick:()=>z({type:"property",id:K.id}),children:[ut?"OWNED":$t(K.cost)," ",E.jsx($i,{size:13})]})]})]},K.id)})]}):u==="missions"?E.jsxs(E.Fragment,{children:[E.jsx(ir,{code:"06 / COURIER",title:"Night Runs",icon:ra}),E.jsx("p",{className:"panel-subtitle",children:"Accept a fictional courier mission. Explore the city and interact with the destination building to finish."}),E.jsxs("div",{className:"mission",children:[E.jsxs("div",{className:"mission-tag",children:[E.jsx(Ku,{size:14}),s.mission?"MISSION IN PROGRESS":"NEW MISSION AVAILABLE"]}),E.jsx(ra,{size:40}),E.jsx("h3",{children:s.mission?"NIGHT DELIVERY":"NIGHT COURIER"}),E.jsx("p",{children:s.mission?"Reach "+((Fe=Li.find(K=>K.id===s.mission.target))==null?void 0:Fe.name)+" and interact with the building.":"A new contact needs a routine delivery across the city. Find the destination and collect your reward."}),E.jsxs("div",{className:"mission-pay",children:[E.jsx("span",{children:"REWARD"}),E.jsxs("strong",{children:[$t(((Le=s.mission)==null?void 0:Le.reward)||175+Ue*35)," + XP"]})]}),s.mission?E.jsxs(sr,{onClick:()=>{const K=Li.find(ut=>ut.id===s.mission.target);K&&we(K.x+K.w/2,K.y+K.h+20)},children:[E.jsx(Cl,{size:14})," SHOW OBJECTIVE ",E.jsx($i,{size:14})]}):E.jsxs(sr,{onClick:()=>z({type:"missionStart"}),children:[E.jsx(ra,{size:15})," ACCEPT MISSION ",E.jsx($i,{size:14})]})]}),E.jsx("div",{className:"list-heading",children:"YOUR RECORD"}),E.jsxs("div",{className:"record-row",children:[E.jsx("span",{children:"COMPLETED MISSIONS"}),E.jsx("b",{children:s.missionsDone})]}),E.jsxs("div",{className:"record-row",children:[E.jsx("span",{children:"SUCCESSFUL DEALS"}),E.jsx("b",{children:s.deals})]}),E.jsxs("div",{className:"record-row",children:[E.jsx("span",{children:"GROSS EARNINGS"}),E.jsx("b",{children:$t(s.earned)})]})]}):u==="intel"?E.jsxs(E.Fragment,{children:[E.jsx(ir,{code:"07 / LIVE FEED",title:"City Intelligence",icon:Cf}),E.jsx("p",{className:"panel-subtitle",children:"Live simulation: watch events, price multipliers, and rising police activity throughout the fictional city."}),E.jsxs("div",{className:"online-line",children:[E.jsx("i",{className:"live-dot"})," SIMULATION ACTIVE ",E.jsxs("b",{children:["DAY ",s.day]})]}),E.jsx(wg,{heat:s.heat}),E.jsx("div",{className:"list-heading",children:"MARKET MOVEMENT"}),yi.map(K=>E.jsxs("div",{className:"market-row",children:[E.jsxs("span",{children:[E.jsx("i",{style:{background:K.color}}),K.name]}),E.jsxs("b",{children:[Math.round((s.market[K.id]||1)*100),"% ",E.jsx(c_,{size:13})]})]},K.id)),E.jsx("div",{className:"list-heading",children:"LATEST TRANSMISSIONS"}),s.logs.slice(0,18).map(K=>E.jsxs("div",{className:"intel-log",children:[E.jsxs("small",{children:[K.tag," · T+",K.time,"s"]}),E.jsx("p",{children:K.message})]},K.id)),E.jsxs(sr,{kind:"subtle",onClick:je,children:[E.jsx(a_,{size:13})," RESET LOCAL SAVE"]})]}):E.jsxs(E.Fragment,{children:[E.jsx(ir,{code:"00 / COMMAND",title:"Your Empire",icon:r_}),E.jsxs("div",{className:"empire",children:[E.jsx("div",{className:"eyebrow",children:"YOUR TOTAL EMPIRE VALUE"}),E.jsx("strong",{children:$t(v_(s))}),E.jsxs("div",{children:[E.jsx("span",{children:$u(Ue)}),E.jsxs("b",{children:["LEVEL ",Ue]})]})]}),E.jsxs("div",{className:"double-stats overview",children:[E.jsxs("div",{children:[E.jsx(Mm,{size:15}),E.jsx("span",{children:"AVAILABLE CASH"}),E.jsx("strong",{children:$t(s.cash)})]}),E.jsxs("div",{children:[E.jsx(o_,{size:15}),E.jsx("span",{children:"STORAGE"}),E.jsxs("strong",{children:[oa(s)," / ",sa(s)]})]}),E.jsxs("div",{children:[E.jsx(Dr,{size:15}),E.jsx("span",{children:"YOUR CREW"}),E.jsx("strong",{children:s.workers.length})]}),E.jsxs("div",{children:[E.jsx(Ku,{size:15}),E.jsx("span",{children:"FINISHED MISSIONS"}),E.jsx("strong",{children:s.missionsDone})]})]}),E.jsx("div",{className:"list-heading",children:"YOUR NEXT MOVE"}),E.jsxs("div",{className:"quick-links",children:[E.jsxs("button",{onClick:()=>we(Ur[0].x,Ur[0].y),children:[E.jsx("span",{children:E.jsx(Dr,{size:17})}),E.jsxs("div",{children:[E.jsx("strong",{children:"Meet Marcus"}),E.jsx("small",{children:"Start your first street meeting"})]}),E.jsx(Zl,{size:15})]}),E.jsxs("button",{onClick:()=>Be("market"),children:[E.jsx("span",{children:E.jsx(Ud,{size:17})}),E.jsxs("div",{children:[E.jsx("strong",{children:"Visit the Exchange"}),E.jsx("small",{children:"Explore fictional trading goods"})]}),E.jsx(Zl,{size:15})]}),E.jsxs("button",{onClick:()=>Be("missions"),children:[E.jsx("span",{children:E.jsx(ra,{size:17})}),E.jsxs("div",{children:[E.jsx("strong",{children:"Accept a Night Run"}),E.jsx("small",{children:"Explore the living city"})]}),E.jsx(Zl,{size:15})]})]}),E.jsx(wg,{heat:s.heat,onHide:()=>z({type:"laylow"})})]})};return E.jsxs("div",{className:"shell mode-3d",children:[E.jsxs("aside",{className:"sidebar "+(O?"mobile-open":""),children:[E.jsxs("div",{className:"brand",children:[E.jsx("div",{className:"mark",children:E.jsx(Rg,{size:20})}),E.jsxs("div",{className:"brand-text",children:["CARTEL",E.jsx("span",{children:"CITY"}),E.jsx("small",{children:"UNDERGROUND SIMULATOR"})]})]}),E.jsx("div",{className:"sidebar-section",children:"YOUR WORLD"}),E.jsx("nav",{children:PM.map(([Ae,Fe,Le])=>E.jsxs("button",{className:"nav "+(u===Ae||u==="deal"&&Ae==="contacts"?"active":""),onClick:()=>Be(Ae),children:[E.jsx(Le,{size:18}),E.jsx("span",{children:Fe}),Ae==="missions"&&s.mission&&E.jsx("i",{className:"count",children:"1"})]},Ae))}),E.jsxs("div",{className:"sidebar-bottom",children:[E.jsxs("div",{className:"agent",children:[E.jsx("span",{children:"CC"}),E.jsxs("div",{children:[E.jsx("strong",{children:"STREET OPERATOR"}),E.jsxs("small",{children:["LEVEL ",Ue," · ",$u(Ue)]})]})]}),E.jsxs("div",{className:"sidebar-copy",children:["CARTEL CITY / 3D EDITION",E.jsx("br",{}),"FIRST PERSON · SINGLE PLAYER"]})]})]}),E.jsxs("main",{className:"main",children:[E.jsxs("header",{className:"topbar",children:[E.jsxs("div",{className:"current",children:[E.jsx("button",{className:"menu-toggle",onClick:()=>k(!O),"aria-label":"Open navigation menu",children:E.jsx(Sm,{size:19})}),E.jsxs("div",{children:[E.jsx("small",{children:"YOU ARE IN"}),E.jsxs("strong",{style:{color:ge.color},children:[E.jsx(Cl,{size:14}),ge.short]})]}),E.jsx(t_,{size:14,className:"mute"}),E.jsx("span",{children:"CITY OVERVIEW"})]}),E.jsxs("div",{className:"top-stats",children:[E.jsxs("div",{className:"top-day",children:[E.jsx("i",{className:"live-dot"})," DAY ",String(s.day).padStart(2,"0")]}),E.jsxs("div",{className:"top-level",children:[E.jsxs("span",{children:["LEVEL ",Ue," · ",$u(Ue)]}),E.jsx(ca,{value:s.xp,max:p_(Ue)})]}),E.jsxs("div",{className:"top-heat",children:[E.jsx(Dd,{size:17}),E.jsxs("div",{children:[E.jsx("span",{children:"POLICE HEAT"}),E.jsxs("b",{children:[Math.round(s.heat),"%"]})]})]}),E.jsxs("div",{className:"wallet",children:[E.jsx(Mm,{size:19}),E.jsxs("div",{children:[E.jsx("span",{children:"YOUR BALANCE"}),E.jsx("b",{children:$t(s.cash)})]})]})]})]}),E.jsxs("div",{className:"play-area",children:[E.jsx("div",{className:"map-canvas",ref:r}),E.jsx("div",{className:"map-vignette"}),E.jsxs("div",{className:"fps-crosshair","aria-hidden":"true",children:[E.jsx("span",{}),E.jsx("span",{}),E.jsx("span",{}),E.jsx("span",{})]}),u==="city"&&!C&&E.jsx("div",{className:"fps-target",children:fe?E.jsxs("button",{onClick:()=>{var Ae;return(Ae=a.current)==null?void 0:Ae.interact()},children:[E.jsx("span",{className:"keycap",children:"E"})," ",fe.label]}):me?E.jsx("span",{children:"LOOK AT A PERSON OR A DOOR · PRESS E TO INTERACT"}):E.jsxs("button",{className:"fps-click",onClick:()=>{var Ae;return(Ae=a.current)==null?void 0:Ae.lock()},children:[E.jsx(ia,{size:14})," CLICK TO LOOK AROUND"]})}),E.jsxs("button",{className:"fps-menu-button",onClick:()=>k(Ae=>!Ae),children:[E.jsx(Sm,{size:17})," MENU ",E.jsx("kbd",{children:"TAB"})]}),G&&E.jsxs("div",{className:"indoor-status",children:[E.jsxs("div",{children:[E.jsx("span",{children:"INSIDE LOCATION"}),E.jsx("strong",{children:G.name})]}),E.jsxs("button",{onClick:()=>{var Ae;(Ae=a.current)==null||Ae.exit(),P(null),f("city")},children:["EXIT ",E.jsx($i,{size:13})]}),E.jsx("button",{onClick:()=>Be(G.kind==="supply"?"market":G.kind==="mission"?"missions":G.kind==="property"||G.kind==="home"?"properties":"contacts"),children:"OPEN TERMINAL"})]}),E.jsxs("div",{className:"fps-touch-controls",children:[E.jsx("div",{className:"touch-move",children:[["forward","↑"],["left","←"],["backward","↓"],["right","→"]].map(([Ae,Fe])=>E.jsx("button",{className:"touch-"+Ae,onPointerDown:Le=>{var K;Le.preventDefault(),Le.currentTarget.setPointerCapture(Le.pointerId),(K=a.current)==null||K.setControl(Ae,!0)},onPointerUp:()=>{var Le;return(Le=a.current)==null?void 0:Le.setControl(Ae,!1)},onPointerCancel:()=>{var Le;return(Le=a.current)==null?void 0:Le.setControl(Ae,!1)},children:Fe},Ae))}),E.jsxs("button",{className:"touch-use",onClick:()=>{var Ae;return(Ae=a.current)==null?void 0:Ae.interact()},children:["E ",E.jsx("small",{children:"USE"})]})]}),E.jsxs("div",{className:"map-brand",children:[E.jsxs("span",{children:[E.jsx("i",{className:"live-dot"})," SIMULATION ONLINE"]}),E.jsxs("h2",{children:["VANTA CITY",E.jsx("span",{children:"."})," ",E.jsx("em",{children:"3D"})]}),E.jsx("small",{children:"OPEN CITY // FIRST PERSON // YOUR EMPIRE"})]}),E.jsxs("div",{className:"map-help",children:[E.jsxs("span",{children:[E.jsx("b",{children:"WASD"})," MOVE"]}),E.jsxs("span",{children:[E.jsx("b",{children:"MOUSE"})," LOOK"]}),E.jsxs("span",{children:[E.jsx("b",{children:"E"})," INTERACT"]}),E.jsxs("span",{children:[E.jsx("b",{children:"SHIFT"})," SPRINT"]}),E.jsxs("span",{children:[E.jsx("b",{children:"TAB"})," MENU"]})]}),E.jsxs("div",{className:"coordinates",children:[E.jsx(ia,{size:14}),Math.round(q.x).toString().padStart(4,"0")," : ",Math.round(q.y).toString().padStart(4,"0")]}),s.mission&&E.jsxs("button",{className:"mission-float",onClick:()=>Be("missions"),children:[E.jsx(Ku,{size:19}),E.jsxs("div",{children:[E.jsx("small",{children:"ACTIVE OBJECTIVE"}),E.jsx("strong",{children:(B=Li.find(Ae=>Ae.id===s.mission.target))==null?void 0:B.name})]}),E.jsx($i,{size:15})]}),s.heat>=75&&E.jsxs("div",{className:"heat-alert",children:[E.jsx(Dd,{size:15})," HIGH POLICE HEAT — CONSIDER LAYING LOW"]}),u!=="city"&&E.jsxs("aside",{className:"panel",children:[E.jsx("button",{className:"panel-close",title:"Back to 3D world",onClick:()=>f("city"),children:E.jsx(Tm,{size:18})}),E.jsx("div",{className:"panel-scroll",children:Ht()},u)]})]}),E.jsxs("footer",{className:"footer",children:[E.jsxs("span",{children:[E.jsx("i",{className:"live-dot"})," OFFLINE SINGLE PLAYER · AUTOSAVED IN THIS BROWSER"]}),E.jsx("span",{children:"FICTIONAL ITEMS · NO REAL MONEY OR DRUGS"})]})]}),O&&E.jsx("div",{className:"scrim",onClick:()=>k(!1)}),A&&E.jsxs("div",{className:"toast "+A.kind,children:[E.jsx("span",{children:A.kind==="success"?E.jsx(ym,{size:17}):E.jsx(n_,{size:17})}),E.jsx("p",{children:A.message}),E.jsx("button",{onClick:()=>V(null),children:E.jsx(Tm,{size:15})})]}),C&&E.jsx(DM,{progress:s.elapsed>0||s.deals>0,onStart:pt})]})}Zv.createRoot(document.getElementById("root")).render(E.jsx(jv.StrictMode,{children:E.jsx(UM,{})}));
