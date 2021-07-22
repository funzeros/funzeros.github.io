var g={exports:{}},H=function(e,r){return function(){for(var n=new Array(arguments.length),s=0;s<n.length;s++)n[s]=arguments[s];return e.apply(r,n)}},ie=H,y=Object.prototype.toString;function B(t){return y.call(t)==="[object Array]"}function T(t){return typeof t=="undefined"}function oe(t){return t!==null&&!T(t)&&t.constructor!==null&&!T(t.constructor)&&typeof t.constructor.isBuffer=="function"&&t.constructor.isBuffer(t)}function ue(t){return y.call(t)==="[object ArrayBuffer]"}function fe(t){return typeof FormData!="undefined"&&t instanceof FormData}function ce(t){var e;return typeof ArrayBuffer!="undefined"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&t.buffer instanceof ArrayBuffer,e}function le(t){return typeof t=="string"}function de(t){return typeof t=="number"}function M(t){return t!==null&&typeof t=="object"}function R(t){if(y.call(t)!=="[object Object]")return!1;var e=Object.getPrototypeOf(t);return e===null||e===Object.prototype}function he(t){return y.call(t)==="[object Date]"}function pe(t){return y.call(t)==="[object File]"}function me(t){return y.call(t)==="[object Blob]"}function k(t){return y.call(t)==="[object Function]"}function ve(t){return M(t)&&k(t.pipe)}function ye(t){return typeof URLSearchParams!="undefined"&&t instanceof URLSearchParams}function Ee(t){return t.replace(/^\s*/,"").replace(/\s*$/,"")}function we(){return typeof navigator!="undefined"&&(navigator.product==="ReactNative"||navigator.product==="NativeScript"||navigator.product==="NS")?!1:typeof window!="undefined"&&typeof document!="undefined"}function L(t,e){if(!(t===null||typeof t=="undefined"))if(typeof t!="object"&&(t=[t]),B(t))for(var r=0,a=t.length;r<a;r++)e.call(null,t[r],r,t);else for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.call(null,t[n],n,t)}function P(){var t={};function e(n,s){R(t[s])&&R(n)?t[s]=P(t[s],n):R(n)?t[s]=P({},n):B(n)?t[s]=n.slice():t[s]=n}for(var r=0,a=arguments.length;r<a;r++)L(arguments[r],e);return t}function be(t,e,r){return L(e,function(n,s){r&&typeof n=="function"?t[s]=ie(n,r):t[s]=n}),t}function Ce(t){return t.charCodeAt(0)===65279&&(t=t.slice(1)),t}var h={isArray:B,isArrayBuffer:ue,isBuffer:oe,isFormData:fe,isArrayBufferView:ce,isString:le,isNumber:de,isObject:M,isPlainObject:R,isUndefined:T,isDate:he,isFile:pe,isBlob:me,isFunction:k,isStream:ve,isURLSearchParams:ye,isStandardBrowserEnv:we,forEach:L,merge:P,extend:be,trim:Ee,stripBOM:Ce},E=h;function I(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var z=function(e,r,a){if(!r)return e;var n;if(a)n=a(r);else if(E.isURLSearchParams(r))n=r.toString();else{var s=[];E.forEach(r,function(f,v){f===null||typeof f=="undefined"||(E.isArray(f)?v=v+"[]":f=[f],E.forEach(f,function(p){E.isDate(p)?p=p.toISOString():E.isObject(p)&&(p=JSON.stringify(p)),s.push(I(v)+"="+I(p))}))}),n=s.join("&")}if(n){var u=e.indexOf("#");u!==-1&&(e=e.slice(0,u)),e+=(e.indexOf("?")===-1?"?":"&")+n}return e},Re=h;function x(){this.handlers=[]}x.prototype.use=function(e,r){return this.handlers.push({fulfilled:e,rejected:r}),this.handlers.length-1},x.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},x.prototype.forEach=function(e){Re.forEach(this.handlers,function(a){a!==null&&e(a)})};var xe=x,Ae=h,Se=function(e,r,a){return Ae.forEach(a,function(s){e=s(e,r)}),e},K=function(e){return!!(e&&e.__CANCEL__)},Oe=h,Ue=function(e,r){Oe.forEach(e,function(n,s){s!==r&&s.toUpperCase()===r.toUpperCase()&&(e[r]=n,delete e[s])})},$e=function(e,r,a,n,s){return e.config=r,a&&(e.code=a),e.request=n,e.response=s,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e},Ne=$e,V=function(e,r,a,n,s){var u=new Error(e);return Ne(u,r,a,n,s)},ge=V,Be=function(e,r,a){var n=a.config.validateStatus;!a.status||!n||n(a.status)?e(a):r(ge("Request failed with status code "+a.status,a.config,null,a.request,a))},A=h,Te=A.isStandardBrowserEnv()?function(){return{write:function(r,a,n,s,u,i){var f=[];f.push(r+"="+encodeURIComponent(a)),A.isNumber(n)&&f.push("expires="+new Date(n).toGMTString()),A.isString(s)&&f.push("path="+s),A.isString(u)&&f.push("domain="+u),i===!0&&f.push("secure"),document.cookie=f.join("; ")},read:function(r){var a=document.cookie.match(new RegExp("(^|;\\s*)("+r+")=([^;]*)"));return a?decodeURIComponent(a[3]):null},remove:function(r){this.write(r,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}(),Le=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)},Pe=function(e,r){return r?e.replace(/\/+$/,"")+"/"+r.replace(/^\/+/,""):e},De=Le,qe=Pe,je=function(e,r){return e&&!De(r)?qe(e,r):r},D=h,Fe=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"],_e=function(e){var r={},a,n,s;return e&&D.forEach(e.split(`
`),function(i){if(s=i.indexOf(":"),a=D.trim(i.substr(0,s)).toLowerCase(),n=D.trim(i.substr(s+1)),a){if(r[a]&&Fe.indexOf(a)>=0)return;a==="set-cookie"?r[a]=(r[a]?r[a]:[]).concat([n]):r[a]=r[a]?r[a]+", "+n:n}}),r},X=h,He=X.isStandardBrowserEnv()?function(){var e=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a"),a;function n(s){var u=s;return e&&(r.setAttribute("href",u),u=r.href),r.setAttribute("href",u),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:r.pathname.charAt(0)==="/"?r.pathname:"/"+r.pathname}}return a=n(window.location.href),function(u){var i=X.isString(u)?n(u):u;return i.protocol===a.protocol&&i.host===a.host}}():function(){return function(){return!0}}(),S=h,Me=Be,ke=Te,Ie=z,ze=je,Ke=_e,Ve=He,q=V,J=function(e){return new Promise(function(a,n){var s=e.data,u=e.headers;S.isFormData(s)&&delete u["Content-Type"];var i=new XMLHttpRequest;if(e.auth){var f=e.auth.username||"",v=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";u.Authorization="Basic "+btoa(f+":"+v)}var w=ze(e.baseURL,e.url);if(i.open(e.method.toUpperCase(),Ie(w,e.params,e.paramsSerializer),!0),i.timeout=e.timeout,i.onreadystatechange=function(){if(!(!i||i.readyState!==4)&&!(i.status===0&&!(i.responseURL&&i.responseURL.indexOf("file:")===0))){var o="getAllResponseHeaders"in i?Ke(i.getAllResponseHeaders()):null,b=!e.responseType||e.responseType==="text"?i.responseText:i.response,se={data:b,status:i.status,statusText:i.statusText,headers:o,config:e,request:i};Me(a,n,se),i=null}},i.onabort=function(){!i||(n(q("Request aborted",e,"ECONNABORTED",i)),i=null)},i.onerror=function(){n(q("Network Error",e,null,i)),i=null},i.ontimeout=function(){var o="timeout of "+e.timeout+"ms exceeded";e.timeoutErrorMessage&&(o=e.timeoutErrorMessage),n(q(o,e,"ECONNABORTED",i)),i=null},S.isStandardBrowserEnv()){var p=(e.withCredentials||Ve(w))&&e.xsrfCookieName?ke.read(e.xsrfCookieName):void 0;p&&(u[e.xsrfHeaderName]=p)}if("setRequestHeader"in i&&S.forEach(u,function(o,b){typeof s=="undefined"&&b.toLowerCase()==="content-type"?delete u[b]:i.setRequestHeader(b,o)}),S.isUndefined(e.withCredentials)||(i.withCredentials=!!e.withCredentials),e.responseType)try{i.responseType=e.responseType}catch(c){if(e.responseType!=="json")throw c}typeof e.onDownloadProgress=="function"&&i.addEventListener("progress",e.onDownloadProgress),typeof e.onUploadProgress=="function"&&i.upload&&i.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then(function(o){!i||(i.abort(),n(o),i=null)}),s||(s=null),i.send(s)})},d=h,W=Ue,Xe={"Content-Type":"application/x-www-form-urlencoded"};function G(t,e){!d.isUndefined(t)&&d.isUndefined(t["Content-Type"])&&(t["Content-Type"]=e)}function Je(){var t;return(typeof XMLHttpRequest!="undefined"||typeof process!="undefined"&&Object.prototype.toString.call(process)==="[object process]")&&(t=J),t}var O={adapter:Je(),transformRequest:[function(e,r){return W(r,"Accept"),W(r,"Content-Type"),d.isFormData(e)||d.isArrayBuffer(e)||d.isBuffer(e)||d.isStream(e)||d.isFile(e)||d.isBlob(e)?e:d.isArrayBufferView(e)?e.buffer:d.isURLSearchParams(e)?(G(r,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):d.isObject(e)?(G(r,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if(typeof e=="string")try{e=JSON.parse(e)}catch(r){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300}};O.headers={common:{Accept:"application/json, text/plain, */*"}},d.forEach(["delete","get","head"],function(e){O.headers[e]={}}),d.forEach(["post","put","patch"],function(e){O.headers[e]=d.merge(Xe)});var Y=O,Q=h,j=Se,We=K,Ge=Y;function F(t){t.cancelToken&&t.cancelToken.throwIfRequested()}var Ye=function(e){F(e),e.headers=e.headers||{},e.data=j(e.data,e.headers,e.transformRequest),e.headers=Q.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),Q.forEach(["delete","get","head","post","put","patch","common"],function(n){delete e.headers[n]});var r=e.adapter||Ge.adapter;return r(e).then(function(n){return F(e),n.data=j(n.data,n.headers,e.transformResponse),n},function(n){return We(n)||(F(e),n&&n.response&&(n.response.data=j(n.response.data,n.response.headers,e.transformResponse))),Promise.reject(n)})},l=h,Z=function(e,r){r=r||{};var a={},n=["url","method","data"],s=["headers","auth","proxy","params"],u=["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","timeoutMessage","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","decompress","maxContentLength","maxBodyLength","maxRedirects","transport","httpAgent","httpsAgent","cancelToken","socketPath","responseEncoding"],i=["validateStatus"];function f(c,o){return l.isPlainObject(c)&&l.isPlainObject(o)?l.merge(c,o):l.isPlainObject(o)?l.merge({},o):l.isArray(o)?o.slice():o}function v(c){l.isUndefined(r[c])?l.isUndefined(e[c])||(a[c]=f(void 0,e[c])):a[c]=f(e[c],r[c])}l.forEach(n,function(o){l.isUndefined(r[o])||(a[o]=f(void 0,r[o]))}),l.forEach(s,v),l.forEach(u,function(o){l.isUndefined(r[o])?l.isUndefined(e[o])||(a[o]=f(void 0,e[o])):a[o]=f(void 0,r[o])}),l.forEach(i,function(o){o in r?a[o]=f(e[o],r[o]):o in e&&(a[o]=f(void 0,e[o]))});var w=n.concat(s).concat(u).concat(i),p=Object.keys(e).concat(Object.keys(r)).filter(function(o){return w.indexOf(o)===-1});return l.forEach(p,v),a},ee=h,Qe=z,te=xe,Ze=Ye,U=Z;function C(t){this.defaults=t,this.interceptors={request:new te,response:new te}}C.prototype.request=function(e){typeof e=="string"?(e=arguments[1]||{},e.url=arguments[0]):e=e||{},e=U(this.defaults,e),e.method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var r=[Ze,void 0],a=Promise.resolve(e);for(this.interceptors.request.forEach(function(s){r.unshift(s.fulfilled,s.rejected)}),this.interceptors.response.forEach(function(s){r.push(s.fulfilled,s.rejected)});r.length;)a=a.then(r.shift(),r.shift());return a},C.prototype.getUri=function(e){return e=U(this.defaults,e),Qe(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},ee.forEach(["delete","get","head","options"],function(e){C.prototype[e]=function(r,a){return this.request(U(a||{},{method:e,url:r,data:(a||{}).data}))}}),ee.forEach(["post","put","patch"],function(e){C.prototype[e]=function(r,a,n){return this.request(U(n||{},{method:e,url:r,data:a}))}});var et=C;function _(t){this.message=t}_.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},_.prototype.__CANCEL__=!0;var re=_,tt=re;function $(t){if(typeof t!="function")throw new TypeError("executor must be a function.");var e;this.promise=new Promise(function(n){e=n});var r=this;t(function(n){r.reason||(r.reason=new tt(n),e(r.reason))})}$.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},$.source=function(){var e,r=new $(function(n){e=n});return{token:r,cancel:e}};var rt=$,nt=function(e){return function(a){return e.apply(null,a)}},at=function(e){return typeof e=="object"&&e.isAxiosError===!0},ne=h,st=H,N=et,it=Z,ot=Y;function ae(t){var e=new N(t),r=st(N.prototype.request,e);return ne.extend(r,N.prototype,e),ne.extend(r,e),r}var m=ae(ot);m.Axios=N,m.create=function(e){return ae(it(m.defaults,e))},m.Cancel=re,m.CancelToken=rt,m.isCancel=K,m.all=function(e){return Promise.all(e)},m.spread=nt,m.isAxiosError=at,g.exports=m,g.exports.default=m;var ut=g.exports;export{ut as D};