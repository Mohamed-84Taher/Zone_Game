(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[19],{162:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(176);t.a=function(e){var t=e.width,a=void 0===t?"100px":t,n=e.height,o=void 0===n?"100px":n;return r.a.createElement(c.a,{animation:"border",role:"status",style:{width:a,height:o},className:"d-block m-auto"},r.a.createElement("span",{className:"sr-only"},"Loading..."))}},168:function(e,t,a){"use strict";t.__esModule=!0,t.LinkContainer=void 0;var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c=a(0),o=l(c),i=l(a(4)),s=a(11);function l(e){return e&&e.__esModule?e:{default:e}}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var f=function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)},d=t.LinkContainer=function(e){function t(){var a,n;u(this,t);for(var r=arguments.length,c=Array(r),o=0;o<r;o++)c[o]=arguments[o];return a=n=p(this,e.call.apply(e,[this].concat(c))),n.handleClick=function(e){var t=n.props,a=t.children,r=t.onClick;if(a.props.onClick&&a.props.onClick(e),r&&r(e),!e.defaultPrevented&&0===e.button&&!f(e)){e.preventDefault();var c=n.props,o=c.replace,i=c.to,s=c.history;o?s.replace(i):s.push(i)}},p(n,a)}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.render=function(){var e=this,t=this.props,a=t.history,c=(t.location,t.match,t.staticContext,t.children),i=(t.replace,t.to),l=t.exact,u=t.strict,p=t.activeClassName,f=t.className,d=t.activeStyle,m=t.style,y=t.isActive,b=function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}(t,["history","location","match","staticContext","children","replace","to","exact","strict","activeClassName","className","activeStyle","style","isActive"]),h=a.createHref("string"===typeof i?{pathname:i}:i),v=o.default.Children.only(c);return o.default.createElement(s.Route,{path:"object"===("undefined"===typeof i?"undefined":r(i))?i.pathname:i,exact:l,strict:u,children:function(t){var a=t.location,r=t.match,c=!!(y?y(r,a):r);return o.default.cloneElement(v,n({},b,{className:[f,v.props.className,c?p:null].join(" ").trim(),style:c?n({},m,d):m,href:h,onClick:e.handleClick}))}})},t}(c.Component);d.propTypes={history:i.default.shape({push:i.default.func.isRequired,replace:i.default.func.isRequired,createHref:i.default.func.isRequired}).isRequired,location:i.default.object,match:i.default.object,staticContext:i.default.object,children:i.default.element.isRequired,onClick:i.default.func,replace:i.default.bool,to:i.default.oneOfType([i.default.string,i.default.object]).isRequired,exact:i.default.bool,strict:i.default.bool,className:i.default.string,activeClassName:i.default.string,style:i.default.object,activeStyle:i.default.object,isActive:i.default.func},d.defaultProps={replace:!1,exact:!1,strict:!1,activeClassName:"active"},t.default=(0,s.withRouter)(d)},175:function(e,t,a){e.exports=a(178)()},176:function(e,t,a){"use strict";var n=a(2),r=a(3),c=a(5),o=a.n(c),i=a(0),s=a.n(i),l=a(6),u=s.a.forwardRef((function(e,t){var a=e.bsPrefix,c=e.variant,i=e.animation,u=e.size,p=e.children,f=e.as,d=void 0===f?"div":f,m=e.className,y=Object(r.a)(e,["bsPrefix","variant","animation","size","children","as","className"]),b=(a=Object(l.a)(a,"spinner"))+"-"+i;return s.a.createElement(d,Object(n.a)({ref:t},y,{className:o()(m,b,u&&b+"-"+u,c&&"text-"+c)}),p)}));u.displayName="Spinner",t.a=u},178:function(e,t,a){"use strict";var n=a(179);function r(){}function c(){}c.resetWarningCache=r,e.exports=function(){function e(e,t,a,r,c,o){if(o!==n){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function t(){return e}e.isRequired=e;var a={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:c,resetWarningCache:r};return a.PropTypes=a,a}},179:function(e,t,a){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},180:function(e,t,a){"use strict";t.__esModule=!0,t.LinkContainer=t.IndexLinkContainer=void 0;var n=c(a(181)),r=c(a(168));function c(e){return e&&e.__esModule?e:{default:e}}t.IndexLinkContainer=n.default,t.LinkContainer=r.default},181:function(e,t,a){"use strict";t.__esModule=!0,t.IndexLinkContainer=void 0;var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r=i(a(0)),c=a(11),o=i(a(168));function i(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var u=t.IndexLinkContainer=function(e){function t(){return s(this,t),l(this,e.apply(this,arguments))}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.render=function(){return r.default.createElement(o.default,n({},this.props,{exact:!0}))},t}(r.default.Component);t.default=(0,c.withRouter)(u)},182:function(e,t,a){"use strict";var n=a(21),r=a(0),c=a.n(r),o=a(175),i=a.n(o),s=a(2),l=a(3),u=a(5),p=a.n(u),f=a(6),d=a(29),m=c.a.forwardRef((function(e,t){var a=e.active,n=e.disabled,r=e.className,o=e.style,i=e.activeLabel,u=e.children,f=Object(l.a)(e,["active","disabled","className","style","activeLabel","children"]),m=a||n?"span":d.a;return c.a.createElement("li",{ref:t,style:o,className:p()(r,"page-item",{active:a,disabled:n})},c.a.createElement(m,Object(s.a)({className:"page-link",disabled:n},f),u,a&&i&&c.a.createElement("span",{className:"sr-only"},i)))}));m.defaultProps={active:!1,disabled:!1,activeLabel:"(current)"},m.displayName="PageItem";var y=m;function b(e,t,a){function n(e){var n=e.children,r=Object(l.a)(e,["children"]);return c.a.createElement(m,r,c.a.createElement("span",{"aria-hidden":"true"},n||t),c.a.createElement("span",{className:"sr-only"},a))}return void 0===a&&(a=e),n.displayName=e,n}var h=b("First","\xab"),v=b("Prev","\u2039","Previous"),E=b("Ellipsis","\u2026","More"),g=b("Next","\u203a"),O=b("Last","\xbb"),N=c.a.forwardRef((function(e,t){var a=e.bsPrefix,n=e.className,r=e.children,o=e.size,i=Object(l.a)(e,["bsPrefix","className","children","size"]),u=Object(f.a)(a,"pagination");return c.a.createElement("ul",Object(s.a)({ref:t},i,{className:p()(n,u,o&&u+"-"+o)}),r)}));N.First=h,N.Prev=v,N.Ellipsis=E,N.Item=y,N.Next=g,N.Last=O;var j=N,k=a(180),x=function(e){var t=e.page,a=e.pages,r=e.isAdmin,o=void 0!==r&&r,i=e.path,s=void 0===i?"":i,l=e.keyword,u=void 0===l?"":l;return a>1&&c.a.createElement(j,null,Object(n.a)(Array(a).keys()).map((function(e){return c.a.createElement(k.LinkContainer,{key:e+1,to:o?"".concat(s,"/page/").concat(e+1):u?"/search/".concat(u,"/page/").concat(e+1):"".concat(s,"/page/").concat(e+1)},c.a.createElement(j.Item,{active:e+1===t},e+1))})))};x.prototype={page:i.a.number.isRequired,pages:i.a.number.isRequired,isAdmin:i.a.bool,path:i.a.string,keyword:i.a.string};t.a=x},201:function(e,t,a){"use strict";var n=a(2),r=a(3),c=a(5),o=a.n(c),i=a(0),s=a.n(i),l=a(6),u=s.a.forwardRef((function(e,t){var a=e.bsPrefix,c=e.className,i=e.striped,u=e.bordered,p=e.borderless,f=e.hover,d=e.size,m=e.variant,y=e.responsive,b=Object(r.a)(e,["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"]),h=Object(l.a)(a,"table"),v=o()(c,h,m&&h+"-"+m,d&&h+"-"+d,i&&h+"-striped",u&&h+"-bordered",p&&h+"-borderless",f&&h+"-hover"),E=s.a.createElement("table",Object(n.a)({},b,{className:v,ref:t}));if(y){var g=h+"-responsive";return"string"===typeof y&&(g=g+"-"+y),s.a.createElement("div",{className:g},E)}return E}));t.a=u},281:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(17),o=a(102),i=a(201),s=a(11),l=a(15),u=a(8),p=a.n(u),f=a(22),d=a(30),m=a(46),y=a(58),b=a(162),h=a(182);t.default=function(e){var t=e.match,a=Object(c.b)(),u=Object(c.c)((function(e){return e.users})),v=u.loading,E=u.data,g=u.page,O=u.error,N=t.params.pageNumber;Object(n.useEffect)((function(){var e=l.a.CancelToken.source();return a(function(e,t){return function(){var a=Object(f.a)(p.a.mark((function a(n,r){var c,o;return p.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n({type:m.c}),a.prev=1,a.next=4,l.a.get("/api/users",{params:{pageNumber:e},cancelToken:t});case 4:c=a.sent,o=c.data,n({type:m.d,payload:o}),a.next=12;break;case 9:a.prev=9,a.t0=a.catch(1),l.a.isCancel(a.t0)?n({type:m.a}):n({type:m.b,payload:a.t0.response&&a.t0.response.data.message?a.t0.response.data.message:a.t0.response});case 12:case"end":return a.stop()}}),a,null,[[1,9]])})));return function(e,t){return a.apply(this,arguments)}}()}(N,e.token)),function(){e.cancel()}}),[a,N]);var j=!v&&E.map((function(e){return r.a.createElement("tr",{key:e._id},r.a.createElement("td",null,r.a.createElement(s.Link,{to:"/admin/users/".concat(e._id,"/edit")},e._id)),r.a.createElement("td",null,e.name),r.a.createElement("td",null,r.a.createElement("a",{href:"emailto:".concat(e.email)},e.email)),r.a.createElement("td",null,e.isAdmin?r.a.createElement("i",{className:"fas fa-check",style:{color:"green"}}):r.a.createElement("i",{className:"fas fa-times",style:{color:"red"}})),r.a.createElement("td",null,r.a.createElement(s.Link,{to:"/admin/users/".concat(e._id,"/edit")},r.a.createElement(o.a,{variant:"light",className:"btn-sm"},r.a.createElement("i",{className:"fas fa-edit"}))),r.a.createElement(o.a,{variant:"danger",className:"btn-sm",onClick:function(){return a((t=e._id,function(){var e=Object(f.a)(p.a.mark((function e(a,n){var r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n().users.data,e.prev=1,a({type:d.b,payload:t}),e.next=5,l.a.delete("/api/users/".concat(t));case 5:a({type:d.c}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),a({type:d.a,payload:{error:e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.response,users:r}});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,a){return e.apply(this,arguments)}}()));var t}},r.a.createElement("i",{className:"fas fa-trash"}))))}));return r.a.createElement(r.a.Fragment,null,v?r.a.createElement(b.a,null):r.a.createElement(r.a.Fragment,null,O&&r.a.createElement(y.a,{variant:"danger"},O),r.a.createElement("h1",null,"Users"),r.a.createElement(i.a,{striped:!0,bordered:!0,hover:!0,responsive:!0,className:"table-sm"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"ID"),r.a.createElement("th",null,"NAME"),r.a.createElement("th",null,"EMAIL"),r.a.createElement("th",null,"ADMIN"),r.a.createElement("th",null,"ACTIONS"))),r.a.createElement("tbody",null,j)),r.a.createElement(h.a,{isAdmin:!0,path:"/admin/userList",pages:g.total,page:g.current})))}}}]);
//# sourceMappingURL=UserList.99d65f61.chunk.js.map