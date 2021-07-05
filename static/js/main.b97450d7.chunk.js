(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{25:function(e,n,t){},26:function(e,n,t){},27:function(e,n,t){"use strict";t.r(n);var r=t(0),o=t(2),i=t.n(o),c=t(8),s=t(5),a=t(12),l=t(13),u=(t(23),t(3)),h=t(4),d=t(7),b=t(6),f="CHANGE_SEARCHFIELD",g="REQUEST_ROBOTS_PENDING",j="REQUEST_ROBOTS_SUCCESS",p="REQUEST_ROBOTS_FAILED",v=function(){return function(e){var n;e({type:g}),(n="https://jsonplaceholder.typicode.com/users",fetch(n).then((function(e){return e.json()}))).then((function(n){return e({type:j,payload:n})})).catch((function(n){return e({type:p,payload:n})}))}},O=t(1),w=function(e){var n=e.name,t=e.email,r=e.id;return Object(O.jsxs)("div",{className:"tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5",children:[Object(O.jsx)("img",{alt:"robots",src:"https://robohash.org/".concat(r,"?size=200x200")}),Object(O.jsxs)("div",{children:[Object(O.jsx)("h2",{children:n}),Object(O.jsx)("p",{children:t})]})]})},m=function(e){var n=e.robots;return Object(O.jsx)("div",{children:n.map((function(e,t){return Object(O.jsx)(w,{id:n[t].id,name:n[t].name,email:n[t].email},t)}))})},x=function(e){e.searchfield;var n=e.searchChange;return Object(O.jsx)("div",{className:"pa2",children:Object(O.jsx)("input",{"aria-label":"Search Robots",className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:n})})},y=function(e){return Object(O.jsx)("div",{style:{overflow:"scroll",border:"1px solid black",height:"800px"},children:e.children})},S=function(e){Object(d.a)(t,e);var n=Object(b.a)(t);function t(e){var r;return Object(u.a)(this,t),(r=n.call(this,e)).state={hasError:!1},r}return Object(h.a)(t,[{key:"componentDidCatch",value:function(e,n){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(O.jsx)("h1",{children:"Something went wrong."}):this.props.children}}]),t}(r.Component),R=(t(25),function(e){Object(d.a)(t,e);var n=Object(b.a)(t);function t(){return Object(u.a)(this,t),n.apply(this,arguments)}return Object(h.a)(t,[{key:"componentDidMount",value:function(){this.props.onRequestRobots()}},{key:"render",value:function(){var e=this.props,n=e.robots,t=e.searchField,r=e.onSearchChange,o=e.isPending,i=n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return Object(O.jsxs)("div",{className:"tc",children:[Object(O.jsx)("h1",{className:"f1",children:"RoboFriends"}),Object(O.jsx)(x,{searchChange:r}),Object(O.jsx)(y,{children:o?Object(O.jsx)("h1",{children:"Loading"}):Object(O.jsx)(S,{children:Object(O.jsx)(m,{robots:i})})})]})}}]),t}(r.Component)),k=Object(s.b)((function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending}}),(function(e){return{onSearchChange:function(n){return e((t=n.target.value,{type:f,payload:t}));var t},onRequestRobots:function(){return e(v())}}}))(R),C=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function E(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var F=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,28)).then((function(n){var t=n.getCLS,r=n.getFID,o=n.getFCP,i=n.getLCP,c=n.getTTFB;t(e),r(e),o(e),i(e),c(e)}))},P={searchField:""},L={robots:[],isPending:!0},N=(t(26),Object(l.createLogger)()),T=Object(c.b)({requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(n.type){case g:return Object.assign({},e,{isPending:!0});case j:return Object.assign({},e,{robots:n.payload,isPending:!1});case p:return Object.assign({},e,{error:n.payload});default:return e}},searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(n.type){case f:return Object.assign({},e,{searchField:n.payload});default:return e}}}),W=Object(c.c)(T,Object(c.a)(a.a,N));i.a.render(Object(O.jsx)(s.a,{store:W,children:Object(O.jsx)(k,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/robofriends-redux",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/robofriends-redux","/service-worker.js");C?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var r=t.headers.get("content-type");404===t.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):E(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):E(n,e)}))}}(),F()}},[[27,1,2]]]);
//# sourceMappingURL=main.b97450d7.chunk.js.map