webpackJsonp([0],{399:function(e,i,t){t(426);var n=t(27)(t(425),t(432),null,null);n.options.__file="D:\\Code\\chrome\\src\\views\\index.vue",n.esModule&&Object.keys(n.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),n.options.functional&&console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions."),e.exports=n.exports},400:function(e,i,t){"use strict";function n(e){return"[object Array]"===S.call(e)}function r(e){return"[object ArrayBuffer]"===S.call(e)}function o(e){return"undefined"!=typeof FormData&&e instanceof FormData}function s(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer}function a(e){return"string"==typeof e}function u(e){return"number"==typeof e}function c(e){return void 0===e}function d(e){return null!==e&&"object"==typeof e}function l(e){return"[object Date]"===S.call(e)}function f(e){return"[object File]"===S.call(e)}function p(e){return"[object Blob]"===S.call(e)}function w(e){return"[object Function]"===S.call(e)}function h(e){return d(e)&&w(e.pipe)}function m(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams}function b(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}function v(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)}function g(e,i){if(null!==e&&void 0!==e)if("object"!=typeof e&&(e=[e]),n(e))for(var t=0,r=e.length;t<r;t++)i.call(null,e[t],t,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&i.call(null,e[o],o,e)}function x(){function e(e,t){"object"==typeof i[t]&&"object"==typeof e?i[t]=x(i[t],e):i[t]=e}for(var i={},t=0,n=arguments.length;t<n;t++)g(arguments[t],e);return i}function y(e,i,t){return g(i,function(i,n){e[n]=t&&"function"==typeof i?_(i,t):i}),e}var _=t(406),k=t(428),S=Object.prototype.toString;e.exports={isArray:n,isArrayBuffer:r,isBuffer:k,isFormData:o,isArrayBufferView:s,isString:a,isNumber:u,isObject:d,isUndefined:c,isDate:l,isFile:f,isBlob:p,isFunction:w,isStream:h,isURLSearchParams:m,isStandardBrowserEnv:v,forEach:g,merge:x,extend:y,trim:b}},401:function(e,i,t){"use strict";(function(i){function n(e,i){!r.isUndefined(e)&&r.isUndefined(e["Content-Type"])&&(e["Content-Type"]=i)}var r=t(400),o=t(422),s={"Content-Type":"application/x-www-form-urlencoded"},a={adapter:function(){var e;return"undefined"!=typeof XMLHttpRequest?e=t(402):void 0!==i&&(e=t(402)),e}(),transformRequest:[function(e,i){return o(i,"Content-Type"),r.isFormData(e)||r.isArrayBuffer(e)||r.isBuffer(e)||r.isStream(e)||r.isFile(e)||r.isBlob(e)?e:r.isArrayBufferView(e)?e.buffer:r.isURLSearchParams(e)?(n(i,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):r.isObject(e)?(n(i,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300}};a.headers={common:{Accept:"application/json, text/plain, */*"}},r.forEach(["delete","get","head"],function(e){a.headers[e]={}}),r.forEach(["post","put","patch"],function(e){a.headers[e]=r.merge(s)}),e.exports=a}).call(i,t(146))},402:function(e,i,t){"use strict";var n=t(400),r=t(414),o=t(417),s=t(423),a=t(421),u=t(405),c="undefined"!=typeof window&&window.btoa&&window.btoa.bind(window)||t(416);e.exports=function(e){return new Promise(function(i,d){var l=e.data,f=e.headers;n.isFormData(l)&&delete f["Content-Type"];var p=new XMLHttpRequest,w="onreadystatechange",h=!1;if("undefined"==typeof window||!window.XDomainRequest||"withCredentials"in p||a(e.url)||(p=new window.XDomainRequest,w="onload",h=!0,p.onprogress=function(){},p.ontimeout=function(){}),e.auth){var m=e.auth.username||"",b=e.auth.password||"";f.Authorization="Basic "+c(m+":"+b)}if(p.open(e.method.toUpperCase(),o(e.url,e.params,e.paramsSerializer),!0),p.timeout=e.timeout,p[w]=function(){if(p&&(4===p.readyState||h)&&(0!==p.status||p.responseURL&&0===p.responseURL.indexOf("file:"))){var t="getAllResponseHeaders"in p?s(p.getAllResponseHeaders()):null,n=e.responseType&&"text"!==e.responseType?p.response:p.responseText,o={data:n,status:1223===p.status?204:p.status,statusText:1223===p.status?"No Content":p.statusText,headers:t,config:e,request:p};r(i,d,o),p=null}},p.onerror=function(){d(u("Network Error",e,null,p)),p=null},p.ontimeout=function(){d(u("timeout of "+e.timeout+"ms exceeded",e,"ECONNABORTED",p)),p=null},n.isStandardBrowserEnv()){var v=t(419),g=(e.withCredentials||a(e.url))&&e.xsrfCookieName?v.read(e.xsrfCookieName):void 0;g&&(f[e.xsrfHeaderName]=g)}if("setRequestHeader"in p&&n.forEach(f,function(e,i){void 0===l&&"content-type"===i.toLowerCase()?delete f[i]:p.setRequestHeader(i,e)}),e.withCredentials&&(p.withCredentials=!0),e.responseType)try{p.responseType=e.responseType}catch(i){if("json"!==e.responseType)throw i}"function"==typeof e.onDownloadProgress&&p.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&p.upload&&p.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then(function(e){p&&(p.abort(),d(e),p=null)}),void 0===l&&(l=null),p.send(l)})}},403:function(e,i,t){"use strict";function n(e){this.message=e}n.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},n.prototype.__CANCEL__=!0,e.exports=n},404:function(e,i,t){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},405:function(e,i,t){"use strict";var n=t(413);e.exports=function(e,i,t,r,o){var s=new Error(e);return n(s,i,t,r,o)}},406:function(e,i,t){"use strict";e.exports=function(e,i){return function(){for(var t=new Array(arguments.length),n=0;n<t.length;n++)t[n]=arguments[n];return e.apply(i,t)}}},407:function(e,i,t){e.exports=t(408)},408:function(e,i,t){"use strict";function n(e){var i=new s(e),t=o(s.prototype.request,i);return r.extend(t,s.prototype,i),r.extend(t,i),t}var r=t(400),o=t(406),s=t(410),a=t(401),u=n(a);u.Axios=s,u.create=function(e){return n(r.merge(a,e))},u.Cancel=t(403),u.CancelToken=t(409),u.isCancel=t(404),u.all=function(e){return Promise.all(e)},u.spread=t(424),e.exports=u,e.exports.default=u},409:function(e,i,t){"use strict";function n(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var i;this.promise=new Promise(function(e){i=e});var t=this;e(function(e){t.reason||(t.reason=new r(e),i(t.reason))})}var r=t(403);n.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},n.source=function(){var e;return{token:new n(function(i){e=i}),cancel:e}},e.exports=n},410:function(e,i,t){"use strict";function n(e){this.defaults=e,this.interceptors={request:new s,response:new s}}var r=t(401),o=t(400),s=t(411),a=t(412);n.prototype.request=function(e){"string"==typeof e&&(e=o.merge({url:arguments[0]},arguments[1])),e=o.merge(r,{method:"get"},this.defaults,e),e.method=e.method.toLowerCase();var i=[a,void 0],t=Promise.resolve(e);for(this.interceptors.request.forEach(function(e){i.unshift(e.fulfilled,e.rejected)}),this.interceptors.response.forEach(function(e){i.push(e.fulfilled,e.rejected)});i.length;)t=t.then(i.shift(),i.shift());return t},o.forEach(["delete","get","head","options"],function(e){n.prototype[e]=function(i,t){return this.request(o.merge(t||{},{method:e,url:i}))}}),o.forEach(["post","put","patch"],function(e){n.prototype[e]=function(i,t,n){return this.request(o.merge(n||{},{method:e,url:i,data:t}))}}),e.exports=n},411:function(e,i,t){"use strict";function n(){this.handlers=[]}var r=t(400);n.prototype.use=function(e,i){return this.handlers.push({fulfilled:e,rejected:i}),this.handlers.length-1},n.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},n.prototype.forEach=function(e){r.forEach(this.handlers,function(i){null!==i&&e(i)})},e.exports=n},412:function(e,i,t){"use strict";function n(e){e.cancelToken&&e.cancelToken.throwIfRequested()}var r=t(400),o=t(415),s=t(404),a=t(401),u=t(420),c=t(418);e.exports=function(e){return n(e),e.baseURL&&!u(e.url)&&(e.url=c(e.baseURL,e.url)),e.headers=e.headers||{},e.data=o(e.data,e.headers,e.transformRequest),e.headers=r.merge(e.headers.common||{},e.headers[e.method]||{},e.headers||{}),r.forEach(["delete","get","head","post","put","patch","common"],function(i){delete e.headers[i]}),(e.adapter||a.adapter)(e).then(function(i){return n(e),i.data=o(i.data,i.headers,e.transformResponse),i},function(i){return s(i)||(n(e),i&&i.response&&(i.response.data=o(i.response.data,i.response.headers,e.transformResponse))),Promise.reject(i)})}},413:function(e,i,t){"use strict";e.exports=function(e,i,t,n,r){return e.config=i,t&&(e.code=t),e.request=n,e.response=r,e}},414:function(e,i,t){"use strict";var n=t(405);e.exports=function(e,i,t){var r=t.config.validateStatus;t.status&&r&&!r(t.status)?i(n("Request failed with status code "+t.status,t.config,null,t.request,t)):e(t)}},415:function(e,i,t){"use strict";var n=t(400);e.exports=function(e,i,t){return n.forEach(t,function(t){e=t(e,i)}),e}},416:function(e,i,t){"use strict";function n(){this.message="String contains an invalid character"}function r(e){for(var i,t,r=String(e),s="",a=0,u=o;r.charAt(0|a)||(u="=",a%1);s+=u.charAt(63&i>>8-a%1*8)){if((t=r.charCodeAt(a+=.75))>255)throw new n;i=i<<8|t}return s}var o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";n.prototype=new Error,n.prototype.code=5,n.prototype.name="InvalidCharacterError",e.exports=r},417:function(e,i,t){"use strict";function n(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var r=t(400);e.exports=function(e,i,t){if(!i)return e;var o;if(t)o=t(i);else if(r.isURLSearchParams(i))o=i.toString();else{var s=[];r.forEach(i,function(e,i){null!==e&&void 0!==e&&(r.isArray(e)?i+="[]":e=[e],r.forEach(e,function(e){r.isDate(e)?e=e.toISOString():r.isObject(e)&&(e=JSON.stringify(e)),s.push(n(i)+"="+n(e))}))}),o=s.join("&")}return o&&(e+=(-1===e.indexOf("?")?"?":"&")+o),e}},418:function(e,i,t){"use strict";e.exports=function(e,i){return i?e.replace(/\/+$/,"")+"/"+i.replace(/^\/+/,""):e}},419:function(e,i,t){"use strict";var n=t(400);e.exports=n.isStandardBrowserEnv()?function(){return{write:function(e,i,t,r,o,s){var a=[];a.push(e+"="+encodeURIComponent(i)),n.isNumber(t)&&a.push("expires="+new Date(t).toGMTString()),n.isString(r)&&a.push("path="+r),n.isString(o)&&a.push("domain="+o),!0===s&&a.push("secure"),document.cookie=a.join("; ")},read:function(e){var i=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return i?decodeURIComponent(i[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}()},420:function(e,i,t){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},421:function(e,i,t){"use strict";var n=t(400);e.exports=n.isStandardBrowserEnv()?function(){function e(e){var i=e;return t&&(r.setAttribute("href",i),i=r.href),r.setAttribute("href",i),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:"/"===r.pathname.charAt(0)?r.pathname:"/"+r.pathname}}var i,t=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");return i=e(window.location.href),function(t){var r=n.isString(t)?e(t):t;return r.protocol===i.protocol&&r.host===i.host}}():function(){return function(){return!0}}()},422:function(e,i,t){"use strict";var n=t(400);e.exports=function(e,i){n.forEach(e,function(t,n){n!==i&&n.toUpperCase()===i.toUpperCase()&&(e[i]=t,delete e[n])})}},423:function(e,i,t){"use strict";var n=t(400),r=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var i,t,o,s={};return e?(n.forEach(e.split("\n"),function(e){if(o=e.indexOf(":"),i=n.trim(e.substr(0,o)).toLowerCase(),t=n.trim(e.substr(o+1)),i){if(s[i]&&r.indexOf(i)>=0)return;s[i]="set-cookie"===i?(s[i]?s[i]:[]).concat([t]):s[i]?s[i]+", "+t:t}}),s):s}},424:function(e,i,t){"use strict";e.exports=function(e){return function(i){return e.apply(null,i)}}},425:function(e,i,t){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var n=t(429),r=t(427),o=t(407);i.default={data:function(){return{os:"win",branch:"Stable 稳定版",arch:"x86",channel:"win_stable_x86",info:{version:"",size:0,time:0,sha1:"",sha256:"",urls:[]},full_info:null}},computed:{time:function(){return this.info.time}},filters:{filesize:function(e){return r(e)}},methods:{on_change:function(){var e=this.channel;switch(this.os+this.branch){case"winStable 稳定版":e="win_stable_x86";break;case"win64Stable 稳定版":e="win_stable_x64";break;case"winBeta 测试版":e="win_beta_x86";break;case"win64Beta 测试版":e="win_beta_x64";break;case"winDev 开发版":e="win_dev_x86";break;case"win64Dev 开发版":e="win_dev_x64";break;case"winCanary 金丝雀版":e="win_canary_x86";break;case"win64Canary 金丝雀版":e="win_canary_x64";break;case"macStable 稳定版":e="mac_stable";break;case"macBeta 测试版":e="mac_beta";break;case"macDev 开发版":e="mac_dev";break;case"macCanary 金丝雀版":e="mac_canary"}this.channel=e}},watch:{os:function(e){this.on_change()},branch:function(e){this.on_change()},channel:function(e){this.full_info&&(this.full_info[this.channel]?this.info=this.full_info[this.channel]:this.$Message.error("查询错误，请稍候再试！"))}},created:function(){var e=this;o.post("https://api.shuax.com/v2/chrome").then(function(i){e.full_info=i.data,e.full_info[e.channel]&&(e.info=e.full_info[e.channel])}).catch(function(i){console.log(i),e.$Spin.hide(),e.$Message.error("查询错误，请稍候再试！")});var i=n();"Windows"==i.os.name&&"amd64"==i.cpu.architecture?this.os="win64":"Mac OS"==i.os.name&&(this.os="mac")}}},426:function(e,i){},427:function(e,i,t){"use strict";(function(i){/**
 * filesize
 *
 * @copyright 2018 Jason Mulligan <jason.mulligan@avoidwork.com>
 * @license BSD-3-Clause
 * @version 3.6.1
 */
!function(i){function t(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=[],s=0,a=void 0,u=void 0,c=void 0,d=void 0,l=void 0,f=void 0,p=void 0,w=void 0,h=void 0,m=void 0,b=void 0,v=void 0,g=void 0,x=void 0,y=void 0;if(isNaN(e))throw new Error("Invalid arguments");return c=!0===i.bits,b=!0===i.unix,u=i.base||2,m=void 0!==i.round?i.round:b?1:2,v=void 0!==i.separator?i.separator||"":"",g=void 0!==i.spacer?i.spacer:b?"":" ",y=i.symbols||i.suffixes||{},x=2===u?i.standard||"jedec":"jedec",h=i.output||"string",l=!0===i.fullform,f=i.fullforms instanceof Array?i.fullforms:[],a=void 0!==i.exponent?i.exponent:-1,w=Number(e),p=w<0,d=u>2?1e3:1024,p&&(w=-w),(-1===a||isNaN(a))&&(a=Math.floor(Math.log(w)/Math.log(d)))<0&&(a=0),a>8&&(a=8),0===w?(t[0]=0,t[1]=b?"":r[x][c?"bits":"bytes"][a]):(s=w/(2===u?Math.pow(2,10*a):Math.pow(1e3,a)),c&&(s*=8)>=d&&a<8&&(s/=d,a++),t[0]=Number(s.toFixed(a>0?m:0)),t[1]=10===u&&1===a?c?"kb":"kB":r[x][c?"bits":"bytes"][a],b&&(t[1]="jedec"===x?t[1].charAt(0):a>0?t[1].replace(/B$/,""):t[1],n.test(t[1])&&(t[0]=Math.floor(t[0]),t[1]=""))),p&&(t[0]=-t[0]),t[1]=y[t[1]]||t[1],"array"===h?t:"exponent"===h?a:"object"===h?{value:t[0],suffix:t[1],symbol:t[1]}:(l&&(t[1]=f[a]?f[a]:o[x][a]+(c?"bit":"byte")+(1===t[0]?"":"s")),v.length>0&&(t[0]=t[0].toString().replace(".",v)),t.join(g))}var n=/^(b|B)$/,r={iec:{bits:["b","Kib","Mib","Gib","Tib","Pib","Eib","Zib","Yib"],bytes:["B","KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"]},jedec:{bits:["b","Kb","Mb","Gb","Tb","Pb","Eb","Zb","Yb"],bytes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"]}},o={iec:["","kibi","mebi","gibi","tebi","pebi","exbi","zebi","yobi"],jedec:["","kilo","mega","giga","tera","peta","exa","zetta","yotta"]};t.partial=function(e){return function(i){return t(i,e)}},e.exports=t}("undefined"!=typeof window&&window)}).call(i,t(49))},428:function(e,i){function t(e){return!!e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}function n(e){return"function"==typeof e.readFloatLE&&"function"==typeof e.slice&&t(e.slice(0,0))}/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
e.exports=function(e){return null!=e&&(t(e)||n(e)||!!e._isBuffer)}},429:function(e,i,t){var n;/*!
 * UAParser.js v0.7.19
 * Lightweight JavaScript-based User-Agent string parser
 * https://github.com/faisalman/ua-parser-js
 *
 * Copyright © 2012-2016 Faisal Salman <fyzlman@gmail.com>
 * Dual licensed under GPLv2 or MIT
 */
!function(r,o){"use strict";var s="model",a="name",u="type",c="vendor",d="version",l="mobile",f="tablet",p={extend:function(e,i){var t={};for(var n in e)i[n]&&i[n].length%2==0?t[n]=i[n].concat(e[n]):t[n]=e[n];return t},has:function(e,i){return"string"==typeof e&&-1!==i.toLowerCase().indexOf(e.toLowerCase())},lowerize:function(e){return e.toLowerCase()},major:function(e){/*!
 * UAParser.js v0.7.19
 * Lightweight JavaScript-based User-Agent string parser
 * https://github.com/faisalman/ua-parser-js
 *
 * Copyright © 2012-2016 Faisal Salman <fyzlman@gmail.com>
 * Dual licensed under GPLv2 or MIT
 */
return"string"==typeof e?e.replace(/[^\d\.]/g,"").split(".")[0]:void 0},trim:function(e){return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")}},w={rgx:function(e,i){for(var t,n,r,o,s,a,u=0;u<i.length&&!s;){var c=i[u],d=i[u+1];for(t=n=0;t<c.length&&!s;)if(s=c[t++].exec(e))for(r=0;r<d.length;r++)a=s[++n],o=d[r],"object"==typeof o&&o.length>0?2==o.length?"function"==typeof o[1]?this[o[0]]=o[1].call(this,a):this[o[0]]=o[1]:3==o.length?"function"!=typeof o[1]||o[1].exec&&o[1].test?this[o[0]]=a?a.replace(o[1],o[2]):void 0:this[o[0]]=a?o[1].call(this,a,o[2]):void 0:4==o.length&&(this[o[0]]=a?o[3].call(this,a.replace(o[1],o[2])):void 0):this[o]=a||void 0;u+=2}},str:function(e,i){for(var t in i)if("object"==typeof i[t]&&i[t].length>0){for(var n=0;n<i[t].length;n++)if(p.has(i[t][n],e))return"?"===t?void 0:t}else if(p.has(i[t],e))return"?"===t?void 0:t;return e}},h={browser:{oldsafari:{version:{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}}},device:{amazon:{model:{"Fire Phone":["SD","KF"]}},sprint:{model:{"Evo Shift 4G":"7373KT"},vendor:{HTC:"APA",Sprint:"Sprint"}}},os:{windows:{version:{ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2000:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"}}}},m={browser:[[/(opera\smini)\/([\w\.-]+)/i,/(opera\s[mobiletab]+).+version\/([\w\.-]+)/i,/(opera).+version\/([\w\.]+)/i,/(opera)[\/\s]+([\w\.]+)/i],[a,d],[/(opios)[\/\s]+([\w\.]+)/i],[[a,"Opera Mini"],d],[/\s(opr)\/([\w\.]+)/i],[[a,"Opera"],d],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i,/(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i,/(?:ms|\()(ie)\s([\w\.]+)/i,/(rekonq)\/([\w\.]*)/i,/(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark)\/([\w\.-]+)/i],[a,d],[/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i],[[a,"IE"],d],[/(edge|edgios|edga)\/((\d+)?[\w\.]+)/i],[[a,"Edge"],d],[/(yabrowser)\/([\w\.]+)/i],[[a,"Yandex"],d],[/(puffin)\/([\w\.]+)/i],[[a,"Puffin"],d],[/(focus)\/([\w\.]+)/i],[[a,"Firefox Focus"],d],[/(opt)\/([\w\.]+)/i],[[a,"Opera Touch"],d],[/((?:[\s\/])uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i],[[a,"UCBrowser"],d],[/(comodo_dragon)\/([\w\.]+)/i],[[a,/_/g," "],d],[/(micromessenger)\/([\w\.]+)/i],[[a,"WeChat"],d],[/(brave)\/([\w\.]+)/i],[[a,"Brave"],d],[/(qqbrowserlite)\/([\w\.]+)/i],[a,d],[/(QQ)\/([\d\.]+)/i],[a,d],[/m?(qqbrowser)[\/\s]?([\w\.]+)/i],[a,d],[/(BIDUBrowser)[\/\s]?([\w\.]+)/i],[a,d],[/(2345Explorer)[\/\s]?([\w\.]+)/i],[a,d],[/(MetaSr)[\/\s]?([\w\.]+)/i],[a],[/(LBBROWSER)/i],[a],[/xiaomi\/miuibrowser\/([\w\.]+)/i],[d,[a,"MIUI Browser"]],[/;fbav\/([\w\.]+);/i],[d,[a,"Facebook"]],[/safari\s(line)\/([\w\.]+)/i,/android.+(line)\/([\w\.]+)\/iab/i],[a,d],[/headlesschrome(?:\/([\w\.]+)|\s)/i],[d,[a,"Chrome Headless"]],[/\swv\).+(chrome)\/([\w\.]+)/i],[[a,/(.+)/,"$1 WebView"],d],[/((?:oculus|samsung)browser)\/([\w\.]+)/i],[[a,/(.+(?:g|us))(.+)/,"$1 $2"],d],[/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i],[d,[a,"Android Browser"]],[/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i],[a,d],[/(dolfin)\/([\w\.]+)/i],[[a,"Dolphin"],d],[/((?:android.+)crmo|crios)\/([\w\.]+)/i],[[a,"Chrome"],d],[/(coast)\/([\w\.]+)/i],[[a,"Opera Coast"],d],[/fxios\/([\w\.-]+)/i],[d,[a,"Firefox"]],[/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i],[d,[a,"Mobile Safari"]],[/version\/([\w\.]+).+?(mobile\s?safari|safari)/i],[d,a],[/webkit.+?(gsa)\/([\w\.]+).+?(mobile\s?safari|safari)(\/[\w\.]+)/i],[[a,"GSA"],d],[/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],[a,[d,w.str,h.browser.oldsafari.version]],[/(konqueror)\/([\w\.]+)/i,/(webkit|khtml)\/([\w\.]+)/i],[a,d],[/(navigator|netscape)\/([\w\.-]+)/i],[[a,"Netscape"],d],[/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,/(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i,/(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i,/(links)\s\(([\w\.]+)/i,/(gobrowser)\/?([\w\.]*)/i,/(ice\s?browser)\/v?([\w\._]+)/i,/(mosaic)[\/\s]([\w\.]+)/i],[a,d]],cpu:[[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],[["architecture","amd64"]],[/(ia32(?=;))/i],[["architecture",p.lowerize]],[/((?:i[346]|x)86)[;\)]/i],[["architecture","ia32"]],[/windows\s(ce|mobile);\sppc;/i],[["architecture","arm"]],[/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],[["architecture",/ower/,"",p.lowerize]],[/(sun4\w)[;\)]/i],[["architecture","sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+[;l]))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i],[["architecture",p.lowerize]]],device:[[/\((ipad|playbook);[\w\s\);-]+(rim|apple)/i],[s,c,[u,f]],[/applecoremedia\/[\w\.]+ \((ipad)/],[s,[c,"Apple"],[u,f]],[/(apple\s{0,1}tv)/i],[[s,"Apple TV"],[c,"Apple"]],[/(archos)\s(gamepad2?)/i,/(hp).+(touchpad)/i,/(hp).+(tablet)/i,/(kindle)\/([\w\.]+)/i,/\s(nook)[\w\s]+build\/(\w+)/i,/(dell)\s(strea[kpr\s\d]*[\dko])/i],[c,s,[u,f]],[/(kf[A-z]+)\sbuild\/.+silk\//i],[s,[c,"Amazon"],[u,f]],[/(sd|kf)[0349hijorstuw]+\sbuild\/.+silk\//i],[[s,w.str,h.device.amazon.model],[c,"Amazon"],[u,l]],[/android.+aft([bms])\sbuild/i],[s,[c,"Amazon"],[u,"smarttv"]],[/\((ip[honed|\s\w*]+);.+(apple)/i],[s,c,[u,l]],[/\((ip[honed|\s\w*]+);/i],[s,[c,"Apple"],[u,l]],[/(blackberry)[\s-]?(\w+)/i,/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i,/(hp)\s([\w\s]+\w)/i,/(asus)-?(\w+)/i],[c,s,[u,l]],[/\(bb10;\s(\w+)/i],[s,[c,"BlackBerry"],[u,l]],[/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone)/i],[s,[c,"Asus"],[u,f]],[/(sony)\s(tablet\s[ps])\sbuild\//i,/(sony)?(?:sgp.+)\sbuild\//i],[[c,"Sony"],[s,"Xperia Tablet"],[u,f]],[/android.+\s([c-g]\d{4}|so[-l]\w+)\sbuild\//i],[s,[c,"Sony"],[u,l]],[/\s(ouya)\s/i,/(nintendo)\s([wids3u]+)/i],[c,s,[u,"console"]],[/android.+;\s(shield)\sbuild/i],[s,[c,"Nvidia"],[u,"console"]],[/(playstation\s[34portablevi]+)/i],[s,[c,"Sony"],[u,"console"]],[/(sprint\s(\w+))/i],[[c,w.str,h.device.sprint.vendor],[s,w.str,h.device.sprint.model],[u,l]],[/(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i],[c,s,[u,f]],[/(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i,/(zte)-(\w*)/i,/(alcatel|geeksphone|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i],[c,[s,/_/g," "],[u,l]],[/(nexus\s9)/i],[s,[c,"HTC"],[u,f]],[/d\/huawei([\w\s-]+)[;\)]/i,/(nexus\s6p)/i],[s,[c,"Huawei"],[u,l]],[/(microsoft);\s(lumia[\s\w]+)/i],[c,s,[u,l]],[/[\s\(;](xbox(?:\sone)?)[\s\);]/i],[s,[c,"Microsoft"],[u,"console"]],[/(kin\.[onetw]{3})/i],[[s,/\./g," "],[c,"Microsoft"],[u,l]],[/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)[\w\s]+build\//i,/mot[\s-]?(\w*)/i,/(XT\d{3,4}) build\//i,/(nexus\s6)/i],[s,[c,"Motorola"],[u,l]],[/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],[s,[c,"Motorola"],[u,f]],[/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],[[c,p.trim],[s,p.trim],[u,"smarttv"]],[/hbbtv.+maple;(\d+)/i],[[s,/^/,"SmartTV"],[c,"Samsung"],[u,"smarttv"]],[/\(dtv[\);].+(aquos)/i],[s,[c,"Sharp"],[u,"smarttv"]],[/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i,/((SM-T\w+))/i],[[c,"Samsung"],s,[u,f]],[/smart-tv.+(samsung)/i],[c,[u,"smarttv"],s],[/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i,/(sam[sung]*)[\s-]*(\w+-?[\w-]*)/i,/sec-((sgh\w+))/i],[[c,"Samsung"],s,[u,l]],[/sie-(\w*)/i],[s,[c,"Siemens"],[u,l]],[/(maemo|nokia).*(n900|lumia\s\d+)/i,/(nokia)[\s_-]?([\w-]*)/i],[[c,"Nokia"],s,[u,l]],[/android\s3\.[\s\w;-]{10}(a\d{3})/i],[s,[c,"Acer"],[u,f]],[/android.+([vl]k\-?\d{3})\s+build/i],[s,[c,"LG"],[u,f]],[/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i],[[c,"LG"],s,[u,f]],[/(lg) netcast\.tv/i],[c,s,[u,"smarttv"]],[/(nexus\s[45])/i,/lg[e;\s\/-]+(\w*)/i,/android.+lg(\-?[\d\w]+)\s+build/i],[s,[c,"LG"],[u,l]],[/android.+(ideatab[a-z0-9\-\s]+)/i],[s,[c,"Lenovo"],[u,f]],[/linux;.+((jolla));/i],[c,s,[u,l]],[/((pebble))app\/[\d\.]+\s/i],[c,s,[u,"wearable"]],[/android.+;\s(oppo)\s?([\w\s]+)\sbuild/i],[c,s,[u,l]],[/crkey/i],[[s,"Chromecast"],[c,"Google"]],[/android.+;\s(glass)\s\d/i],[s,[c,"Google"],[u,"wearable"]],[/android.+;\s(pixel c)[\s)]/i],[s,[c,"Google"],[u,f]],[/android.+;\s(pixel( [23])?( xl)?)\s/i],[s,[c,"Google"],[u,l]],[/android.+;\s(\w+)\s+build\/hm\1/i,/android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i,/android.+(mi[\s\-_]*(?:one|one[\s_]plus|note lte)?[\s_]*(?:\d?\w?)[\s_]*(?:plus)?)\s+build/i,/android.+(redmi[\s\-_]*(?:note)?(?:[\s_]*[\w\s]+))\s+build/i],[[s,/_/g," "],[c,"Xiaomi"],[u,l]],[/android.+(mi[\s\-_]*(?:pad)(?:[\s_]*[\w\s]+))\s+build/i],[[s,/_/g," "],[c,"Xiaomi"],[u,f]],[/android.+;\s(m[1-5]\snote)\sbuild/i],[s,[c,"Meizu"],[u,f]],[/(mz)-([\w-]{2,})/i],[[c,"Meizu"],s,[u,l]],[/android.+a000(1)\s+build/i,/android.+oneplus\s(a\d{4})\s+build/i],[s,[c,"OnePlus"],[u,l]],[/android.+[;\/]\s*(RCT[\d\w]+)\s+build/i],[s,[c,"RCA"],[u,f]],[/android.+[;\/\s]+(Venue[\d\s]{2,7})\s+build/i],[s,[c,"Dell"],[u,f]],[/android.+[;\/]\s*(Q[T|M][\d\w]+)\s+build/i],[s,[c,"Verizon"],[u,f]],[/android.+[;\/]\s+(Barnes[&\s]+Noble\s+|BN[RT])(V?.*)\s+build/i],[[c,"Barnes & Noble"],s,[u,f]],[/android.+[;\/]\s+(TM\d{3}.*\b)\s+build/i],[s,[c,"NuVision"],[u,f]],[/android.+;\s(k88)\sbuild/i],[s,[c,"ZTE"],[u,f]],[/android.+[;\/]\s*(gen\d{3})\s+build.*49h/i],[s,[c,"Swiss"],[u,l]],[/android.+[;\/]\s*(zur\d{3})\s+build/i],[s,[c,"Swiss"],[u,f]],[/android.+[;\/]\s*((Zeki)?TB.*\b)\s+build/i],[s,[c,"Zeki"],[u,f]],[/(android).+[;\/]\s+([YR]\d{2})\s+build/i,/android.+[;\/]\s+(Dragon[\-\s]+Touch\s+|DT)(\w{5})\sbuild/i],[[c,"Dragon Touch"],s,[u,f]],[/android.+[;\/]\s*(NS-?\w{0,9})\sbuild/i],[s,[c,"Insignia"],[u,f]],[/android.+[;\/]\s*((NX|Next)-?\w{0,9})\s+build/i],[s,[c,"NextBook"],[u,f]],[/android.+[;\/]\s*(Xtreme\_)?(V(1[045]|2[015]|30|40|60|7[05]|90))\s+build/i],[[c,"Voice"],s,[u,l]],[/android.+[;\/]\s*(LVTEL\-)?(V1[12])\s+build/i],[[c,"LvTel"],s,[u,l]],[/android.+;\s(PH-1)\s/i],[s,[c,"Essential"],[u,l]],[/android.+[;\/]\s*(V(100MD|700NA|7011|917G).*\b)\s+build/i],[s,[c,"Envizen"],[u,f]],[/android.+[;\/]\s*(Le[\s\-]+Pan)[\s\-]+(\w{1,9})\s+build/i],[c,s,[u,f]],[/android.+[;\/]\s*(Trio[\s\-]*.*)\s+build/i],[s,[c,"MachSpeed"],[u,f]],[/android.+[;\/]\s*(Trinity)[\-\s]*(T\d{3})\s+build/i],[c,s,[u,f]],[/android.+[;\/]\s*TU_(1491)\s+build/i],[s,[c,"Rotor"],[u,f]],[/android.+(KS(.+))\s+build/i],[s,[c,"Amazon"],[u,f]],[/android.+(Gigaset)[\s\-]+(Q\w{1,9})\s+build/i],[c,s,[u,f]],[/\s(tablet|tab)[;\/]/i,/\s(mobile)(?:[;\/]|\ssafari)/i],[[u,p.lowerize],c,s],[/(android[\w\.\s\-]{0,9});.+build/i],[s,[c,"Generic"]]],engine:[[/windows.+\sedge\/([\w\.]+)/i],[d,[a,"EdgeHTML"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i,/(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,/(icab)[\/\s]([23]\.[\d\.]+)/i],[a,d],[/rv\:([\w\.]{1,9}).+(gecko)/i],[d,a]],os:[[/microsoft\s(windows)\s(vista|xp)/i],[a,d],[/(windows)\snt\s6\.2;\s(arm)/i,/(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i,/(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i],[a,[d,w.str,h.os.windows.version]],[/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],[[a,"Windows"],[d,w.str,h.os.windows.version]],[/\((bb)(10);/i],[[a,"BlackBerry"],d],[/(blackberry)\w*\/?([\w\.]*)/i,/(tizen)[\/\s]([\w\.]+)/i,/(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]*)/i,/linux;.+(sailfish);/i],[a,d],[/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]*)/i],[[a,"Symbian"],d],[/\((series40);/i],[a],[/mozilla.+\(mobile;.+gecko.+firefox/i],[[a,"Firefox OS"],d],[/(nintendo|playstation)\s([wids34portablevu]+)/i,/(mint)[\/\s\(]?(\w*)/i,/(mageia|vectorlinux)[;\s]/i,/(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]*)/i,/(hurd|linux)\s?([\w\.]*)/i,/(gnu)\s?([\w\.]*)/i],[a,d],[/(cros)\s[\w]+\s([\w\.]+\w)/i],[[a,"Chromium OS"],d],[/(sunos)\s?([\w\.\d]*)/i],[[a,"Solaris"],d],[/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]*)/i],[a,d],[/(haiku)\s(\w+)/i],[a,d],[/cfnetwork\/.+darwin/i,/ip[honead]{2,4}(?:.*os\s([\w]+)\slike\smac|;\sopera)/i],[[d,/_/g,"."],[a,"iOS"]],[/(mac\sos\sx)\s?([\w\s\.]*)/i,/(macintosh|mac(?=_powerpc)\s)/i],[[a,"Mac OS"],[d,/_/g,"."]],[/((?:open)?solaris)[\/\s-]?([\w\.]*)/i,/(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i,/(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms|fuchsia)/i,/(unix)\s?([\w\.]*)/i],[a,d]]},b=function(e,i){if("object"==typeof e&&(i=e,e=void 0),!(this instanceof b))return new b(e,i).getResult();var t=e||(r&&r.navigator&&r.navigator.userAgent?r.navigator.userAgent:""),n=i?p.extend(m,i):m;return this.getBrowser=function(){var e={name:void 0,version:void 0};return w.rgx.call(e,t,n.browser),e.major=p.major(e.version),e},this.getCPU=function(){var e={architecture:void 0};return w.rgx.call(e,t,n.cpu),e},this.getDevice=function(){var e={vendor:void 0,model:void 0,type:void 0};return w.rgx.call(e,t,n.device),e},this.getEngine=function(){var e={name:void 0,version:void 0};return w.rgx.call(e,t,n.engine),e},this.getOS=function(){var e={name:void 0,version:void 0};return w.rgx.call(e,t,n.os),e},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return t},this.setUA=function(e){return t=e,this},this};b.VERSION="0.7.19",b.BROWSER={NAME:a,MAJOR:"major",VERSION:d},b.CPU={ARCHITECTURE:"architecture"},b.DEVICE={MODEL:s,VENDOR:c,TYPE:u,CONSOLE:"console",MOBILE:l,SMARTTV:"smarttv",TABLET:f,WEARABLE:"wearable",EMBEDDED:"embedded"},b.ENGINE={NAME:a,VERSION:d},b.OS={NAME:a,VERSION:d},void 0!==i?(void 0!==e&&e.exports&&(i=e.exports=b),i.UAParser=b):t(433)?void 0!==(n=function(){return b}.call(i,t,i,e))&&(e.exports=n):r&&(r.UAParser=b);var v=r&&(r.jQuery||r.Zepto);if(void 0!==v&&!v.ua){var g=new b;v.ua=g.getResult(),v.ua.get=function(){return g.getUA()},v.ua.set=function(e){g.setUA(e);var i=g.getResult();for(var t in i)v.ua[t]=i[t]}}}("object"==typeof window?window:this)},430:function(e,i,t){e.exports=t.p+"e48091cbb8242dbb4fa11aefa15a1a02.png"},431:function(e,i,t){e.exports=t.p+"de5988dbf78c5b82bdb0bbb268834dc1.png"},432:function(e,i,t){e.exports={render:function(){var e=this,i=e.$createElement,n=e._self._c||i;return n("div",{staticClass:"container"},[n("h1",[e._v("下载 Chrome")]),e._v(" "),e._m(0),e._v(" "),n("Tabs",{model:{value:e.os,callback:function(i){e.os=i},expression:"os"}},[n("TabPane",{attrs:{label:"Windows",name:"win"}}),e._v(" "),n("TabPane",{attrs:{label:"Windows x64",name:"win64"}}),e._v(" "),n("TabPane",{attrs:{label:"OS X",name:"mac"}}),e._v(" "),n("TabPane",{attrs:{label:"捐赠",name:"donate"}})],1),e._v(" "),"donate"==e.os?n("div",[n("p",[e._v("如果这个网站对您有帮助，欢迎支付宝扫一扫支持我，谢谢。")]),e._v(" "),n("img",{attrs:{src:t(430)}}),e._v(" "),n("img",{attrs:{src:t(431)}})]):n("div",[n("RadioGroup",{attrs:{type:"button"},model:{value:e.branch,callback:function(i){e.branch=i},expression:"branch"}},[n("Radio",{attrs:{label:"Stable 稳定版",disabled:!1}}),e._v(" "),n("Radio",{attrs:{label:"Beta 测试版"}}),e._v(" "),n("Radio",{attrs:{label:"Dev 开发版"}}),e._v(" "),n("Radio",{attrs:{label:"Canary 金丝雀版"}})],1),e._v(" "),n("Divider",{attrs:{dashed:""}}),e._v(" "),e.info.version?n("div",[n("p",[e._v("最新版本："),n("b",[e._v(e._s(e.info.version))])]),e._v(" "),n("p",[e._v("文件大小："),n("b",[e._v(e._s(e._f("filesize")(e.info.size)))])]),e._v(" "),n("p",[e._v("更新时间："),n("b",[n("Time",{attrs:{time:e.time,interval:0}})],1)]),e._v(" "),n("p",[e._v("SHA1："),n("b",[e._v(e._s(e.info.sha1))])]),e._v(" "),n("p",[e._v("SHA256："),n("b",[e._v(e._s(e.info.sha256))])]),e._v(" "),n("Divider",{attrs:{orientation:"left"}},[e._v("下载地址")]),e._v(" "),e._l(e.info.urls,function(i){return n("p",[n("a",{attrs:{href:i}},[e._v(e._s(i))])])})],2):n("div",[n("Spin",{attrs:{size:"large"}})],1)],1)],1)},staticRenderFns:[function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("div",[e._v("这里的安装包来自谷歌官方，不带更新模块。请不要双击安装，而是使用7-Zip解压，放入 "),t("a",{attrs:{href:"https://shuax.com/project/greenchrome/"}},[e._v("GreenChrome")]),e._v(" 更好用哦！")])}]},e.exports.render._withStripped=!0},433:function(e,i){(function(i){e.exports=i}).call(i,{})}});