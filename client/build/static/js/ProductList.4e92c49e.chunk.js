(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[12],{162:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(176);t.a=function(e){var t=e.width,a=void 0===t?"100px":t,n=e.height,o=void 0===n?"100px":n;return r.a.createElement(c.a,{animation:"border",role:"status",style:{width:a,height:o},className:"d-block m-auto"},r.a.createElement("span",{className:"sr-only"},"Loading..."))}},168:function(e,t,a){"use strict";t.__esModule=!0,t.LinkContainer=void 0;var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c=a(0),o=l(c),i=l(a(4)),s=a(11);function l(e){return e&&e.__esModule?e:{default:e}}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var f=function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)},d=t.LinkContainer=function(e){function t(){var a,n;u(this,t);for(var r=arguments.length,c=Array(r),o=0;o<r;o++)c[o]=arguments[o];return a=n=p(this,e.call.apply(e,[this].concat(c))),n.handleClick=function(e){var t=n.props,a=t.children,r=t.onClick;if(a.props.onClick&&a.props.onClick(e),r&&r(e),!e.defaultPrevented&&0===e.button&&!f(e)){e.preventDefault();var c=n.props,o=c.replace,i=c.to,s=c.history;o?s.replace(i):s.push(i)}},p(n,a)}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.render=function(){var e=this,t=this.props,a=t.history,c=(t.location,t.match,t.staticContext,t.children),i=(t.replace,t.to),l=t.exact,u=t.strict,p=t.activeClassName,f=t.className,d=t.activeStyle,m=t.style,v=t.isActive,y=function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}(t,["history","location","match","staticContext","children","replace","to","exact","strict","activeClassName","className","activeStyle","style","isActive"]),b=a.createHref("string"===typeof i?{pathname:i}:i),h=o.default.Children.only(c);return o.default.createElement(s.Route,{path:"object"===("undefined"===typeof i?"undefined":r(i))?i.pathname:i,exact:l,strict:u,children:function(t){var a=t.location,r=t.match,c=!!(v?v(r,a):r);return o.default.cloneElement(h,n({},y,{className:[f,h.props.className,c?p:null].join(" ").trim(),style:c?n({},m,d):m,href:b,onClick:e.handleClick}))}})},t}(c.Component);d.propTypes={history:i.default.shape({push:i.default.func.isRequired,replace:i.default.func.isRequired,createHref:i.default.func.isRequired}).isRequired,location:i.default.object,match:i.default.object,staticContext:i.default.object,children:i.default.element.isRequired,onClick:i.default.func,replace:i.default.bool,to:i.default.oneOfType([i.default.string,i.default.object]).isRequired,exact:i.default.bool,strict:i.default.bool,className:i.default.string,activeClassName:i.default.string,style:i.default.object,activeStyle:i.default.object,isActive:i.default.func},d.defaultProps={replace:!1,exact:!1,strict:!1,activeClassName:"active"},t.default=(0,s.withRouter)(d)},175:function(e,t,a){e.exports=a(178)()},176:function(e,t,a){"use strict";var n=a(2),r=a(3),c=a(5),o=a.n(c),i=a(0),s=a.n(i),l=a(6),u=s.a.forwardRef((function(e,t){var a=e.bsPrefix,c=e.variant,i=e.animation,u=e.size,p=e.children,f=e.as,d=void 0===f?"div":f,m=e.className,v=Object(r.a)(e,["bsPrefix","variant","animation","size","children","as","className"]),y=(a=Object(l.a)(a,"spinner"))+"-"+i;return s.a.createElement(d,Object(n.a)({ref:t},v,{className:o()(m,y,u&&y+"-"+u,c&&"text-"+c)}),p)}));u.displayName="Spinner",t.a=u},178:function(e,t,a){"use strict";var n=a(179);function r(){}function c(){}c.resetWarningCache=r,e.exports=function(){function e(e,t,a,r,c,o){if(o!==n){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function t(){return e}e.isRequired=e;var a={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:c,resetWarningCache:r};return a.PropTypes=a,a}},179:function(e,t,a){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},180:function(e,t,a){"use strict";t.__esModule=!0,t.LinkContainer=t.IndexLinkContainer=void 0;var n=c(a(181)),r=c(a(168));function c(e){return e&&e.__esModule?e:{default:e}}t.IndexLinkContainer=n.default,t.LinkContainer=r.default},181:function(e,t,a){"use strict";t.__esModule=!0,t.IndexLinkContainer=void 0;var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r=i(a(0)),c=a(11),o=i(a(168));function i(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var u=t.IndexLinkContainer=function(e){function t(){return s(this,t),l(this,e.apply(this,arguments))}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.render=function(){return r.default.createElement(o.default,n({},this.props,{exact:!0}))},t}(r.default.Component);t.default=(0,c.withRouter)(u)},182:function(e,t,a){"use strict";var n=a(21),r=a(0),c=a.n(r),o=a(175),i=a.n(o),s=a(2),l=a(3),u=a(5),p=a.n(u),f=a(6),d=a(29),m=c.a.forwardRef((function(e,t){var a=e.active,n=e.disabled,r=e.className,o=e.style,i=e.activeLabel,u=e.children,f=Object(l.a)(e,["active","disabled","className","style","activeLabel","children"]),m=a||n?"span":d.a;return c.a.createElement("li",{ref:t,style:o,className:p()(r,"page-item",{active:a,disabled:n})},c.a.createElement(m,Object(s.a)({className:"page-link",disabled:n},f),u,a&&i&&c.a.createElement("span",{className:"sr-only"},i)))}));m.defaultProps={active:!1,disabled:!1,activeLabel:"(current)"},m.displayName="PageItem";var v=m;function y(e,t,a){function n(e){var n=e.children,r=Object(l.a)(e,["children"]);return c.a.createElement(m,r,c.a.createElement("span",{"aria-hidden":"true"},n||t),c.a.createElement("span",{className:"sr-only"},a))}return void 0===a&&(a=e),n.displayName=e,n}var b=y("First","\xab"),h=y("Prev","\u2039","Previous"),E=y("Ellipsis","\u2026","More"),g=y("Next","\u203a"),O=y("Last","\xbb"),N=c.a.forwardRef((function(e,t){var a=e.bsPrefix,n=e.className,r=e.children,o=e.size,i=Object(l.a)(e,["bsPrefix","className","children","size"]),u=Object(f.a)(a,"pagination");return c.a.createElement("ul",Object(s.a)({ref:t},i,{className:p()(n,u,o&&u+"-"+o)}),r)}));N.First=b,N.Prev=h,N.Ellipsis=E,N.Item=v,N.Next=g,N.Last=O;var j=N,k=a(180),x=function(e){var t=e.page,a=e.pages,r=e.isAdmin,o=void 0!==r&&r,i=e.path,s=void 0===i?"":i,l=e.keyword,u=void 0===l?"":l;return a>1&&c.a.createElement(j,null,Object(n.a)(Array(a).keys()).map((function(e){return c.a.createElement(k.LinkContainer,{key:e+1,to:o?"".concat(s,"/page/").concat(e+1):u?"/search/".concat(u,"/page/").concat(e+1):"".concat(s,"/page/").concat(e+1)},c.a.createElement(j.Item,{active:e+1===t},e+1))})))};x.prototype={page:i.a.number.isRequired,pages:i.a.number.isRequired,isAdmin:i.a.bool,path:i.a.string,keyword:i.a.string};t.a=x},197:function(e,t,a){"use strict";a.d(t,"c",(function(){return l})),a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return p}));var n=a(8),r=a.n(n),c=a(22),o=a(15),i=a(51),s=a(20),l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,n=arguments.length>3?arguments[3]:void 0;return function(){var s=Object(c.a)(r.a.mark((function c(s){var l,u;return r.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return s({type:i.c}),r.prev=1,r.next=4,o.a.get("/api/products",{params:{keyword:e,category:t,pageNumber:a},cancelToken:n});case 4:l=r.sent,u=l.data,s({type:i.d,payload:u}),r.next=12;break;case 9:r.prev=9,r.t0=r.catch(1),o.a.isCancel(r.t0)?s({type:i.a}):s({type:i.b,payload:r.t0.response&&r.t0.response.data.message?r.t0.response.data.message:r.t0.message});case 12:case"end":return r.stop()}}),c,null,[[1,9]])})));return function(e){return s.apply(this,arguments)}}()},u=function(){return function(){var e=Object(c.a)(r.a.mark((function e(t){var a,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:s.b}),e.prev=1,e.next=4,o.a.post("/api/products",{});case 4:a=e.sent,n=a.data,t({type:s.c,payload:n}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),t({type:s.a,payload:e.t0.response&&e.t0.response.message?e.t0.response.message:e.t0.message});case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()},p=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(a,n){var c;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=n().products.data,a({type:s.e,payload:e}),t.prev=2,t.next=5,o.a.delete("/api/products/".concat(e));case 5:a({type:s.f}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(2),a({type:s.d,payload:{error:t.t0.response&&t.t0.response.data.message?t.t0.response.data.message:t.t0.message,prevProducts:c}});case 11:case"end":return t.stop()}}),t,null,[[2,8]])})));return function(e,a){return t.apply(this,arguments)}}()}},201:function(e,t,a){"use strict";var n=a(2),r=a(3),c=a(5),o=a.n(c),i=a(0),s=a.n(i),l=a(6),u=s.a.forwardRef((function(e,t){var a=e.bsPrefix,c=e.className,i=e.striped,u=e.bordered,p=e.borderless,f=e.hover,d=e.size,m=e.variant,v=e.responsive,y=Object(r.a)(e,["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"]),b=Object(l.a)(a,"table"),h=o()(c,b,m&&b+"-"+m,d&&b+"-"+d,i&&b+"-striped",u&&b+"-bordered",p&&b+"-borderless",f&&b+"-hover"),E=s.a.createElement("table",Object(n.a)({},y,{className:h,ref:t}));if(v){var g=b+"-responsive";return"string"===typeof v&&(g=g+"-"+v),s.a.createElement("div",{className:g},E)}return E}));t.a=u},273:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(17),o=a(102),i=a(114),s=a(71),l=a(201),u=a(11),p=a(15),f=a(197),d=a(58),m=a(162),v=a(182);t.default=function(e){var t=e.match,a=Object(c.b)(),y=Object(c.c)((function(e){return e.products})),b=y.loading,h=y.data,E=y.page,g=y.error,O=t.params.pageNumber;Object(n.useEffect)((function(){var e=p.a.CancelToken.source();return a(Object(f.c)(void 0,void 0,O,e.token)),function(){e.cancel()}}),[a,O]);var N=!b&&h.map((function(e){return r.a.createElement("tr",{key:e._id},r.a.createElement("td",null,r.a.createElement(u.Link,{to:"/admin/products/".concat(e._id,"/edit")},e._id)),r.a.createElement("td",null,e.name),r.a.createElement("td",null,"$",e.price),r.a.createElement("td",null,e.category),r.a.createElement("td",null,e.brand),r.a.createElement("td",null,e.releaseDate.split("T")[0]),r.a.createElement("td",null,r.a.createElement(u.Link,{to:"/admin/products/".concat(e._id,"/edit")},r.a.createElement(o.a,{variant:"light",className:"btn-sm"},r.a.createElement("i",{className:"fas fa-edit"}))),r.a.createElement(o.a,{variant:"danger",className:"btn-sm",onClick:function(){return t=e._id,void a(Object(f.b)(t));var t}},r.a.createElement("i",{className:"fas fa-trash"}))))}));return r.a.createElement(r.a.Fragment,null,b?r.a.createElement(m.a,null):r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,{className:"align-items-center"},r.a.createElement(s.a,null,r.a.createElement("h1",null,"Products")),r.a.createElement(s.a,{className:"text-right"},r.a.createElement(o.a,{className:"my-3",onClick:function(){a(Object(f.a)())}},r.a.createElement("i",{className:"fas fa-plus"})," Create Product"))),g&&r.a.createElement(d.a,{variant:"danger"},g),r.a.createElement(l.a,{striped:!0,bordered:!0,hover:!0,responsive:!0,className:"table-sm"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"ID"),r.a.createElement("th",null,"NAME"),r.a.createElement("th",null,"PRICE"),r.a.createElement("th",null,"CATEGORY"),r.a.createElement("th",null,"BRAND"),r.a.createElement("th",null,"RELEASE DATE"),r.a.createElement("th",null,"ACTIONS"))),r.a.createElement("tbody",null,N)),r.a.createElement(v.a,{isAdmin:!0,path:"/admin/productList",page:E.current,pages:E.total})))}}}]);
//# sourceMappingURL=ProductList.4e92c49e.chunk.js.map