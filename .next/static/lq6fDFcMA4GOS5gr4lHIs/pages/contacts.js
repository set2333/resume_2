(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{GKrh:function(r,e,t){"use strict";function n(){return(n=Object.assign||function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(r[n]=t[n])}return r}).apply(this,arguments)}var s=t("q1tI"),o=t.n(s),i=t("i8i4"),u=t.n(i),a=o.a.createElement,c=function(r){var e=Object(s.useState)(!1),t=e[0],o=e[1],i=function(){return o(!1)};return[function(e){return t&&void 0!==document?u.a.createPortal(a(r,n({},e,{close:i})),document.querySelector("body")):null},function(){return o(!0)},i]};c.defaultProps={WpapModal:a("div",null,a("p",null,"Hook useModal")),parentNode:null};e.a=c},ODXe:function(r,e,t){"use strict";function n(r,e){return function(r){if(Array.isArray(r))return r}(r)||function(r,e){if(Symbol.iterator in Object(r)||"[object Arguments]"===Object.prototype.toString.call(r)){var t=[],n=!0,s=!1,o=void 0;try{for(var i,u=r[Symbol.iterator]();!(n=(i=u.next()).done)&&(t.push(i.value),!e||t.length!==e);n=!0);}catch(a){s=!0,o=a}finally{try{n||null==u.return||u.return()}finally{if(s)throw o}}return t}}(r,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}t.d(e,"a",(function(){return n}))},Pf5V:function(r,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/contacts",function(){return t("PxqT")}])},PxqT:function(r,e,t){"use strict";t.r(e),t.d(e,"default",(function(){return er}));var n=t("q1tI"),s=t.n(n),o=t("MEkN"),i=t("ODXe"),u=t("MX0m"),a=t.n(u),c=function(r,e){return(c=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,e){r.__proto__=e}||function(r,e){for(var t in e)e.hasOwnProperty(t)&&(r[t]=e[t])})(r,e)};function p(r,e){function t(){this.constructor=r}c(r,e),r.prototype=null===e?Object.create(e):(t.prototype=e.prototype,new t)}var h=t("U8mb");function l(r){return"function"===typeof r}var f=!1,b={Promise:void 0,set useDeprecatedSynchronousErrorHandling(r){r&&(new Error).stack;f=r},get useDeprecatedSynchronousErrorHandling(){return f}};function d(r){setTimeout((function(){throw r}),0)}var y={closed:!0,next:function(r){},error:function(r){if(b.useDeprecatedSynchronousErrorHandling)throw r;d(r)},complete:function(){}},m=function(){return Array.isArray||function(r){return r&&"number"===typeof r.length}}();var w=function(){function r(r){return Error.call(this),this.message=r?r.length+" errors occurred during unsubscription:\n"+r.map((function(r,e){return e+1+") "+r.toString()})).join("\n  "):"",this.name="UnsubscriptionError",this.errors=r,this}return r.prototype=Object.create(Error.prototype),r}(),v=function(){function r(r){this.closed=!1,this._parentOrParents=null,this._subscriptions=null,r&&(this._unsubscribe=r)}return r.prototype.unsubscribe=function(){var e;if(!this.closed){var t,n=this._parentOrParents,s=this._unsubscribe,o=this._subscriptions;if(this.closed=!0,this._parentOrParents=null,this._subscriptions=null,n instanceof r)n.remove(this);else if(null!==n)for(var i=0;i<n.length;++i){n[i].remove(this)}if(l(s))try{s.call(this)}catch(c){e=c instanceof w?g(c.errors):[c]}if(m(o)){i=-1;for(var u=o.length;++i<u;){var a=o[i];if(null!==(t=a)&&"object"===typeof t)try{a.unsubscribe()}catch(c){e=e||[],c instanceof w?e=e.concat(g(c.errors)):e.push(c)}}}if(e)throw new w(e)}},r.prototype.add=function(e){var t=e;if(!e)return r.EMPTY;switch(typeof e){case"function":t=new r(e);case"object":if(t===this||t.closed||"function"!==typeof t.unsubscribe)return t;if(this.closed)return t.unsubscribe(),t;if(!(t instanceof r)){var n=t;(t=new r)._subscriptions=[n]}break;default:throw new Error("unrecognized teardown "+e+" added to Subscription.")}var s=t._parentOrParents;if(null===s)t._parentOrParents=this;else if(s instanceof r){if(s===this)return t;t._parentOrParents=[s,this]}else{if(-1!==s.indexOf(this))return t;s.push(this)}var o=this._subscriptions;return null===o?this._subscriptions=[t]:o.push(t),t},r.prototype.remove=function(r){var e=this._subscriptions;if(e){var t=e.indexOf(r);-1!==t&&e.splice(t,1)}},r.EMPTY=function(r){return r.closed=!0,r}(new r),r}();function g(r){return r.reduce((function(r,e){return r.concat(e instanceof w?e.errors:e)}),[])}var x=function(){return"function"===typeof Symbol?Symbol("rxSubscriber"):"@@rxSubscriber_"+Math.random()}(),_=function(r){function e(t,n,s){var o=r.call(this)||this;switch(o.syncErrorValue=null,o.syncErrorThrown=!1,o.syncErrorThrowable=!1,o.isStopped=!1,arguments.length){case 0:o.destination=y;break;case 1:if(!t){o.destination=y;break}if("object"===typeof t){t instanceof e?(o.syncErrorThrowable=t.syncErrorThrowable,o.destination=t,t.add(o)):(o.syncErrorThrowable=!0,o.destination=new E(o,t));break}default:o.syncErrorThrowable=!0,o.destination=new E(o,t,n,s)}return o}return p(e,r),e.prototype[x]=function(){return this},e.create=function(r,t,n){var s=new e(r,t,n);return s.syncErrorThrowable=!1,s},e.prototype.next=function(r){this.isStopped||this._next(r)},e.prototype.error=function(r){this.isStopped||(this.isStopped=!0,this._error(r))},e.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},e.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,r.prototype.unsubscribe.call(this))},e.prototype._next=function(r){this.destination.next(r)},e.prototype._error=function(r){this.destination.error(r),this.unsubscribe()},e.prototype._complete=function(){this.destination.complete(),this.unsubscribe()},e.prototype._unsubscribeAndRecycle=function(){var r=this._parentOrParents;return this._parentOrParents=null,this.unsubscribe(),this.closed=!1,this.isStopped=!1,this._parentOrParents=r,this},e}(v),E=function(r){function e(e,t,n,s){var o,i=r.call(this)||this;i._parentSubscriber=e;var u=i;return l(t)?o=t:t&&(o=t.next,n=t.error,s=t.complete,t!==y&&(l((u=Object.create(t)).unsubscribe)&&i.add(u.unsubscribe.bind(u)),u.unsubscribe=i.unsubscribe.bind(i))),i._context=u,i._next=o,i._error=n,i._complete=s,i}return p(e,r),e.prototype.next=function(r){if(!this.isStopped&&this._next){var e=this._parentSubscriber;b.useDeprecatedSynchronousErrorHandling&&e.syncErrorThrowable?this.__tryOrSetError(e,this._next,r)&&this.unsubscribe():this.__tryOrUnsub(this._next,r)}},e.prototype.error=function(r){if(!this.isStopped){var e=this._parentSubscriber,t=b.useDeprecatedSynchronousErrorHandling;if(this._error)t&&e.syncErrorThrowable?(this.__tryOrSetError(e,this._error,r),this.unsubscribe()):(this.__tryOrUnsub(this._error,r),this.unsubscribe());else if(e.syncErrorThrowable)t?(e.syncErrorValue=r,e.syncErrorThrown=!0):d(r),this.unsubscribe();else{if(this.unsubscribe(),t)throw r;d(r)}}},e.prototype.complete=function(){var r=this;if(!this.isStopped){var e=this._parentSubscriber;if(this._complete){var t=function(){return r._complete.call(r._context)};b.useDeprecatedSynchronousErrorHandling&&e.syncErrorThrowable?(this.__tryOrSetError(e,t),this.unsubscribe()):(this.__tryOrUnsub(t),this.unsubscribe())}else this.unsubscribe()}},e.prototype.__tryOrUnsub=function(r,e){try{r.call(this._context,e)}catch(t){if(this.unsubscribe(),b.useDeprecatedSynchronousErrorHandling)throw t;d(t)}},e.prototype.__tryOrSetError=function(r,e,t){if(!b.useDeprecatedSynchronousErrorHandling)throw new Error("bad call");try{e.call(this._context,t)}catch(n){return b.useDeprecatedSynchronousErrorHandling?(r.syncErrorValue=n,r.syncErrorThrown=!0,!0):(d(n),!0)}return!1},e.prototype._unsubscribe=function(){var r=this._parentSubscriber;this._context=null,this._parentSubscriber=null,r.unsubscribe()},e}(_);var S=function(){return"function"===typeof Symbol&&Symbol.observable||"@@observable"}();function T(){}function j(r){return r?1===r.length?r[0]:function(e){return r.reduce((function(r,e){return e(r)}),e)}:T}var O=function(){function r(r){this._isScalar=!1,r&&(this._subscribe=r)}return r.prototype.lift=function(e){var t=new r;return t.source=this,t.operator=e,t},r.prototype.subscribe=function(r,e,t){var n=this.operator,s=function(r,e,t){if(r){if(r instanceof _)return r;if(r[x])return r[x]()}return r||e||t?new _(r,e,t):new _(y)}(r,e,t);if(n?s.add(n.call(s,this.source)):s.add(this.source||b.useDeprecatedSynchronousErrorHandling&&!s.syncErrorThrowable?this._subscribe(s):this._trySubscribe(s)),b.useDeprecatedSynchronousErrorHandling&&s.syncErrorThrowable&&(s.syncErrorThrowable=!1,s.syncErrorThrown))throw s.syncErrorValue;return s},r.prototype._trySubscribe=function(r){try{return this._subscribe(r)}catch(e){b.useDeprecatedSynchronousErrorHandling&&(r.syncErrorThrown=!0,r.syncErrorValue=e),!function(r){for(;r;){var e=r,t=e.closed,n=e.destination,s=e.isStopped;if(t||s)return!1;r=n&&n instanceof _?n:null}return!0}(r)?console.warn(e):r.error(e)}},r.prototype.forEach=function(r,e){var t=this;return new(e=P(e))((function(e,n){var s;s=t.subscribe((function(e){try{r(e)}catch(t){n(t),s&&s.unsubscribe()}}),n,e)}))},r.prototype._subscribe=function(r){var e=this.source;return e&&e.subscribe(r)},r.prototype[S]=function(){return this},r.prototype.pipe=function(){for(var r=[],e=0;e<arguments.length;e++)r[e]=arguments[e];return 0===r.length?this:j(r)(this)},r.prototype.toPromise=function(r){var e=this;return new(r=P(r))((function(r,t){var n;e.subscribe((function(r){return n=r}),(function(r){return t(r)}),(function(){return r(n)}))}))},r.create=function(e){return new r(e)},r}();function P(r){if(r||(r=b.Promise||Promise),!r)throw new Error("no Promise impl found");return r}function q(r,e){return function(t){if("function"!==typeof r)throw new TypeError("argument is not a function. Are you looking for `mapTo()`?");return t.lift(new H(r,e))}}var H=function(){function r(r,e){this.project=r,this.thisArg=e}return r.prototype.call=function(r,e){return e.subscribe(new k(r,this.project,this.thisArg))},r}(),k=function(r){function e(e,t,n){var s=r.call(this,e)||this;return s.project=t,s.count=0,s.thisArg=n||s,s}return p(e,r),e.prototype._next=function(r){var e;try{e=this.project.call(this.thisArg,r,this.count++)}catch(t){return void this.destination.error(t)}this.destination.next(e)},e}(_);function D(r,e){return void 0===e&&(e=null),new A({method:"GET",url:r,headers:e})}function M(r,e,t){return new A({method:"POST",url:r,body:e,headers:t})}function X(r,e){return new A({method:"DELETE",url:r,headers:e})}function N(r,e,t){return new A({method:"PUT",url:r,body:e,headers:t})}function C(r,e,t){return new A({method:"PATCH",url:r,body:e,headers:t})}var L=q((function(r,e){return r.response}));function R(r,e){return L(new A({method:"GET",url:r,responseType:"json",headers:e}))}var A=function(r){function e(e){var t=r.call(this)||this,n={async:!0,createXHR:function(){return this.crossDomain?function(){if(h.a.XMLHttpRequest)return new h.a.XMLHttpRequest;if(h.a.XDomainRequest)return new h.a.XDomainRequest;throw new Error("CORS is not supported by your browser")}():function(){if(h.a.XMLHttpRequest)return new h.a.XMLHttpRequest;var r=void 0;try{for(var e=["Msxml2.XMLHTTP","Microsoft.XMLHTTP","Msxml2.XMLHTTP.4.0"],t=0;t<3;t++)try{if(r=e[t],new h.a.ActiveXObject(r))break}catch(n){}return new h.a.ActiveXObject(r)}catch(n){throw new Error("XMLHttpRequest is not supported by your browser")}}()},crossDomain:!0,withCredentials:!1,headers:{},method:"GET",responseType:"json",timeout:0};if("string"===typeof e)n.url=e;else for(var s in e)e.hasOwnProperty(s)&&(n[s]=e[s]);return t.request=n,t}return p(e,r),e.prototype._subscribe=function(r){return new G(r,this.request)},e.create=function(){var r=function(r){return new e(r)};return r.get=D,r.post=M,r.delete=X,r.put=N,r.patch=C,r.getJSON=R,r}(),e}(O),G=function(r){function e(e,t){var n=r.call(this,e)||this;n.request=t,n.done=!1;var s=t.headers=t.headers||{};return t.crossDomain||n.getHeader(s,"X-Requested-With")||(s["X-Requested-With"]="XMLHttpRequest"),n.getHeader(s,"Content-Type")||h.a.FormData&&t.body instanceof h.a.FormData||"undefined"===typeof t.body||(s["Content-Type"]="application/x-www-form-urlencoded; charset=UTF-8"),t.body=n.serializeBody(t.body,n.getHeader(t.headers,"Content-Type")),n.send(),n}return p(e,r),e.prototype.next=function(r){this.done=!0;var e,t=this.xhr,n=this.request,s=this.destination;try{e=new F(r,t,n)}catch(o){return s.error(o)}s.next(e)},e.prototype.send=function(){var r=this.request,e=this.request,t=e.user,n=e.method,s=e.url,o=e.async,i=e.password,u=e.headers,a=e.body;try{var c=this.xhr=r.createXHR();this.setupEvents(c,r),t?c.open(n,s,o,t,i):c.open(n,s,o),o&&(c.timeout=r.timeout,c.responseType=r.responseType),"withCredentials"in c&&(c.withCredentials=!!r.withCredentials),this.setHeaders(c,u),a?c.send(a):c.send()}catch(p){this.error(p)}},e.prototype.serializeBody=function(r,e){if(!r||"string"===typeof r)return r;if(h.a.FormData&&r instanceof h.a.FormData)return r;if(e){var t=e.indexOf(";");-1!==t&&(e=e.substring(0,t))}switch(e){case"application/x-www-form-urlencoded":return Object.keys(r).map((function(e){return encodeURIComponent(e)+"="+encodeURIComponent(r[e])})).join("&");case"application/json":return JSON.stringify(r);default:return r}},e.prototype.setHeaders=function(r,e){for(var t in e)e.hasOwnProperty(t)&&r.setRequestHeader(t,e[t])},e.prototype.getHeader=function(r,e){for(var t in r)if(t.toLowerCase()===e.toLowerCase())return r[t]},e.prototype.setupEvents=function(r,e){var t=e.progressSubscriber;function n(r){var e,t=n,s=t.subscriber,o=t.progressSubscriber,i=t.request;o&&o.error(r);try{e=new I(this,i)}catch(u){e=u}s.error(e)}if(r.ontimeout=n,n.request=e,n.subscriber=this,n.progressSubscriber=t,r.upload&&"withCredentials"in r){var s,o;if(t)s=function(r){s.progressSubscriber.next(r)},h.a.XDomainRequest?r.onprogress=s:r.upload.onprogress=s,s.progressSubscriber=t;o=function(r){var e,t=o,n=t.progressSubscriber,s=t.subscriber,i=t.request;n&&n.error(r);try{e=new U("ajax error",this,i)}catch(u){e=u}s.error(e)},r.onerror=o,o.request=e,o.subscriber=this,o.progressSubscriber=t}function i(r){}function u(r){var e=u,t=e.subscriber,n=e.progressSubscriber,s=e.request;if(4===this.readyState){var o=1223===this.status?204:this.status,i="text"===this.responseType?this.response||this.responseText:this.response;if(0===o&&(o=i?200:0),o<400)n&&n.complete(),t.next(r),t.complete();else{n&&n.error(r);var a=void 0;try{a=new U("ajax error "+o,this,s)}catch(c){a=c}t.error(a)}}}r.onreadystatechange=i,i.subscriber=this,i.progressSubscriber=t,i.request=e,r.onload=u,u.subscriber=this,u.progressSubscriber=t,u.request=e},e.prototype.unsubscribe=function(){var e=this.done,t=this.xhr;!e&&t&&4!==t.readyState&&"function"===typeof t.abort&&t.abort(),r.prototype.unsubscribe.call(this)},e}(_),F=function(){return function(r,e,t){this.originalEvent=r,this.xhr=e,this.request=t,this.status=e.status,this.responseType=e.responseType||t.responseType,this.response=W(this.responseType,e)}}(),U=function(){function r(r,e,t){return Error.call(this),this.message=r,this.name="AjaxError",this.xhr=e,this.request=t,this.status=e.status,this.responseType=e.responseType||t.responseType,this.response=W(this.responseType,e),this}return r.prototype=Object.create(Error.prototype),r}();function W(r,e){switch(r){case"json":return function(r){return"response"in r?r.responseType?r.response:JSON.parse(r.response||r.responseText||"null"):JSON.parse(r.responseText||"null")}(e);case"xml":return e.responseXML;case"text":default:return"response"in e?e.response:e.responseText}}var I=function(r,e){return U.call(this,"ajax timeout",r,e),this.name="AjaxTimeoutError",this},J=function(){return A.create}(),V=t("WGsy"),z=t("GKrh"),B=t("WcnG"),K=s.a.createElement,Y=function(){var r,e,t,o=Object(n.useState)(""),u=o[0],c=o[1],p=Object(n.useState)(""),h=p[0],l=p[1],f=Object(n.useState)(""),b=f[0],d=f[1],y=Object(z.a)(B.a),m=Object(i.a)(y,2),w=m[0];m[1];return K(s.a.Fragment,null,K(w,{messageHead:u,messageText:h,ulData:[],className:"jsx-3751436554"}),K("form",{className:"jsx-3751436554 formMessage"},K("h2",{className:"jsx-3751436554"},"\u0421\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435"),K("textarea",{name:"message",value:u,onChange:function(r){var e=r.target.value;return c(e)},className:"jsx-3751436554 text"}),K("h3",{className:"jsx-3751436554"},"\u041f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u044c\u0442\u0435\u0441\u044c \u043f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430",K("input",{name:"name",type:"text",value:h,onChange:function(r){var e=r.target.value;return l(e)},className:"jsx-3751436554"})),K("h3",{className:"jsx-3751436554"},"\u0412\u0430\u0448 \u0430\u0434\u0440\u0435\u0441"," ",K("input",{name:"adress",type:"adress",value:b,onChange:function(r){var e=r.target.value;return d(e)},className:"jsx-3751436554"})),K(V.a,{onClick:(r=u,e=h,t=b,void J({url:"/sendMessage",method:"POST",headers:{"Content-Type":"application/json; charset=utf-8"},body:{message:r,autor:e,adress:t}}))})),K(a.a,{id:"3751436554"},[".formMessage.jsx-3751436554{width:100%;margin-top:20px;margin-bottom:20px;background:#65e841;border:1px solid black;border-radius:5px;box-shadow:3px 3px 5px black;}",".text.jsx-3751436554{width:90%;height:100px;}","h3.jsx-3751436554{text-align:left;padding:10px 30px;}","input.jsx-3751436554{margin-left:10px;}"]))},Q=t("tPLu"),Z=s.a.createElement,$=function(){return Z(s.a.Fragment,null,Z("h1",null,"\u041d\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u043c\u043d\u0435 \u043c\u043e\u0436\u043d\u043e \u043f\u0440\u044f\u043c\u043e \u0437\u0434\u0435\u0441\u044c"),Z(Y,null),Z("h2",null,"\u0421\u0441\u044b\u043b\u043a\u0438"),Z("ul",null,Z(Q.a,null,"\u0422\u0430\u043a \u0436\u0435 \u043c\u043e\u0436\u043d\u043e \u043d\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u043f\u043e \u0430\u0434\u0440\u0435\u0441\u0443"," ",Z("a",{href:"mailto:set2333@mail.ru"},"set2333@mail.ru.")),Z(Q.a,null,"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043c\u043e\u0439 \u043f\u0440\u043e\u0444\u0438\u043b\u044c \u043d\u0430"," ",Z("a",{href:"https://infostart.ru/profile/99304/"},"\u0418\u043d\u0444\u043e\u0441\u0442\u0430\u0440\u0442\u0435.")),Z(Q.a,null,"\u041c\u043e\u0439"," ",Z("a",{href:"https://habr.com/ru/users/set2333/"},"\u0425\u0430\u0431\u0440")," ","\u0430\u043a\u043a\u0430\u0443\u043d\u0442."),Z(Q.a,null,Z("a",{href:"https://career.habr.com/set2333"},"\u0425\u0430\u0431\u0440 \u043a\u0430\u0440\u044c\u0435\u0440\u0430.")),Z(Q.a,null,"\u0410\u043a\u043a\u0430\u0443\u043d\u0442 \u043d\u0430"," ",Z("a",{href:"https://github.com/set2333/"},"\u0413\u0438\u0442\u0445\u0430\u0431\u0435.")),Z(Q.a,null,"\u041a\u0441\u0442\u0430\u0442\u0438, \u0438\u0441\u0445\u043e\u0434\u043d\u0438\u043a\u0438 \u044d\u0442\u043e\u0433\u043e \u0441\u0430\u0439\u0442\u0430"," ",Z("a",{href:"https://github.com/set2333/Resume"},"\u0442\u0430\u043c \u0436\u0435.")),Z(Q.a,null,"\u0410 \u0432\u043e\u0442"," ",Z("a",{href:"https://drive.google.com/open?id=18QpwXxgM2pvLe-SYb5ftMry-rkhhJhLQ"},"\u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442")," ","\u0441 \u0444\u0438\u043d\u0430\u043b\u0430 \u0426\u0438\u0444\u0440\u043e\u0432\u043e\u0433\u043e \u043f\u0440\u043e\u0440\u044b\u0432\u0430 2019")),Z("h2",null,"\u0421\u0441\u044b\u043b\u043a\u0438 \u043d\u0435 \u0441\u0432\u044f\u0437\u0430\u043d\u043d\u044b\u0435 \u0441 \u0418\u0422"),Z("ul",null,Z(Q.a,null,Z("a",{href:"https://vk.com/set2333"},"\u0412\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u0435")),Z(Q.a,null,"\u0410\u043a\u043a\u0430\u0443\u043d\u0442 \u043d\u0430"," ",Z("a",{href:"https://www.chess.com/member/set2333"},"Chees.com")),Z(Q.a,null,Z("a",{href:"http://samlib.ru/editors/t/trofimow_e_s/"},"\u0421\u0430\u043c\u0438\u0437\u0434\u0430\u0442"))))},rr=s.a.createElement;function er(){return rr(o.a,{content:$})}},U8mb:function(r,e,t){"use strict";(function(r){t.d(e,"a",(function(){return o}));var n="undefined"!==typeof window&&window,s="undefined"!==typeof self&&"undefined"!==typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&self,o=n||"undefined"!==typeof r&&r||s}).call(this,t("yLpj"))},WGsy:function(r,e,t){"use strict";var n=t("MX0m"),s=t.n(n),o=t("q1tI"),i=t.n(o),u=i.a.createElement,a=function(r){var e=r.onClick;return u(i.a.Fragment,null,u("div",{onClick:e,className:"jsx-2272350209 buttonOk"},u("h2",{className:"jsx-2272350209"},"OK")),u(s.a,{id:"2272350209"},[".buttonOk.jsx-2272350209{position:relative;background-color:#38fbff;width:75px;height:30px;margin:10px auto;}","h2.jsx-2272350209{font-family:'Bad Script',cursive;font-size:16px;margin:5px;}","h2.jsx-2272350209:hover{font-size:20px;}"]))};a.defaultProps={onClick:function(){}},e.a=a},WcnG:function(r,e,t){"use strict";var n=t("MX0m"),s=t.n(n),o=t("q1tI"),i=t.n(o),u=t("WGsy"),a=i.a.createElement,c=function(r){var e=r.close,t=r.messageHead,n=r.messageText,o=r.ulData;return a(i.a.Fragment,null,a("div",{className:"jsx-1060231078 messageBG"},a("div",{className:"jsx-1060231078 message"},a("h1",{className:"jsx-1060231078"},t),a("p",{className:"jsx-1060231078"},n),a("ul",{className:"jsx-1060231078"},o.map((function(r){return a("li",{key:r,className:"jsx-1060231078"},r)}))),a(u.a,{onClick:e}))),a(s.a,{id:"1060231078"},[".messageBG.jsx-1060231078{width:100vw;height:100vh;position:absolute;background-color:rgba(0,0,0,0.5);}",".message.jsx-1060231078{position:relative;overflow-y:auto;padding:20px;width:360px;height:360px;text-align:center;background:url(images/note_transparent.svg) repeat-x top left / 36px auto, url(images/cel.svg);background-color:beige;border-top:none;top:200px;margin:auto;}"]))};c.defaultProps={close:function(){},messageHead:"",messageText:"",ulData:[]},e.a=c},tPLu:function(r,e,t){"use strict";var n=t("MX0m"),s=t.n(n),o=t("q1tI"),i=t.n(o),u=i.a.createElement,a=function(r){var e=r.children;return u(i.a.Fragment,null,u("li",{className:"jsx-1141748101"},e),u(s.a,{id:"1141748101"},["li.jsx-1141748101{list-style:none;background:url(images/marker.svg) no-repeat left / contain;text-align:left;padding-left:20px;}"]))};a.defaultProps={children:""},e.a=a},yLpj:function(r,e){var t;t=function(){return this}();try{t=t||new Function("return this")()}catch(n){"object"===typeof window&&(t=window)}r.exports=t}},[["Pf5V",0,2,1,3]]]);