webpackJsonp([1],{0:function(e,t,n){e.exports=n("msSN")},1:function(e,t){},"45Ns":function(e,t){},"5e9e":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"state",function(){return r}),n.d(t,"mutations",function(){return a});var r=function(){return{enable:!0,type:"none",effect:"none"}},a={setType:function(e,t){e.type=t},setEffect:function(e,t){e.effect=t}}},AA66:function(e,t){},CJsk:function(e,t){},LOWA:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"SET_PAGE_SCROLL_POSITION",function(){return s}),n.d(t,"state",function(){return c}),n.d(t,"mutations",function(){return u}),n.d(t,"actions",function(){return l});var r=n("bOdI"),a=n.n(r),o=n("Dd8w"),i=n.n(o),s="SET_PAGE_SCROLL_POSITION",c=function(){return{scrollPostionMap:{}}},u=a()({},s,function(e,t){var n=t.pageId,r=t.scrollPosition;e.scrollPostionMap=i()({},e.scrollPostionMap,a()({},n,r))}),l={savePageScrollPosition:function(e,t){var n=e.commit,r=t.pageId,a=t.scrollPosition;n(s,{pageId:r,scrollPosition:a})}}},Uz7q:function(e,t){e.exports={buildVersion:1573987895453,build:{ssr:!1,publicPath:"/lavas-zj/",compress:!0,cssExtract:!0},middleware:{all:[],server:[],client:[]},router:{mode:"history",base:"/lavas-zj/",pageTransition:{type:"fade",transitionClass:"fade"}},errorHandler:{defaultErrorMessage:"Internal Server Error",showRealErrorMessage:!1,errorPath:"/error"},serviceWorker:{enable:!0,swDest:"/Users/zhangjing74/Documents/pwaPro/lavas-github-zj/dist/service-worker.js"},skeleton:{enable:!0,asyncCSS:!0}}},VfP6:function(e,t,n){var r={"./pageTransition.js":"5e9e","./scrollBehavior.js":"LOWA"};function a(e){return n(o(e))}function o(e){var t=r[e];if(!(t+1))throw new Error("Cannot find module '"+e+"'.");return t}a.keys=function(){return Object.keys(r)},a.resolve=o,e.exports=a,a.id="VfP6"},ZFl9:function(e,t){},gHRC:function(e,t){},hS4j:function(e,t){},msSN:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("//Fk"),a=n.n(r),o=n("Gu7T"),i=n.n(o),s=n("Xxa5"),c=n.n(s),u=n("exGp"),l=n.n(u),f=n("/5sW"),p=n("1nuA"),h=function(){var e=l()(c.a.mark(function e(t){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{});case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}();function d(e,t){var n={isClient:!0,app:t,store:e.store,route:e.to,from:e.from},r=e.next;return n.params=n.route.params||{},n.query=n.route.query||{},n.redirect=function(e){var t=e.status,a=void 0===t?302:t,o=e.path,i=void 0===o?"":o,s=e.query,c=void 0===s?{}:s,u=e.external,l=void 0!==u&&u;n._redirected=!0,r({path:i,query:c,status:a,external:l})},n}var v=function(){var e=l()(c.a.mark(function e(t,n){var r;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:r=0;case 1:if(!(r<t.length)){e.next=9;break}if(!n._redirected){e.next=4;break}return e.abrupt("return");case 4:return e.next=6,m(t[r],n);case 6:r++,e.next=1;break;case 9:case"end":return e.stop()}},e,this)}));return function(t,n){return e.apply(this,arguments)}}();function m(e,t){var n=void 0;return 2===e.length?n=new a.a(function(n,r){e(t,function(e,a){e?(t.error(e),r(e)):n(a)})}):(n=e(t))&&(n instanceof a.a||"function"==typeof n.then)||(n=a.a.resolve(n)),n}var w=n("Uz7q"),y=n.n(w),g=n("Dd8w"),b=n.n(g),x=n("p3jY"),_=n.n(x),k=n("/ocq"),P={name:"appshell",metaInfo:{title:"Lavas",meta:[{name:"keywords",content:"lavas PWA"},{name:"description",content:"基于 Vue 的 PWA 解决方案，帮助开发者快速搭建 PWA 应用，解决接入 PWA 的各种问题"}],bodyAttrs:{"empty-appshell":void 0}}},T=n("XyMi"),E=Object(T.a)(P,function(){var e=this.$createElement;return(this._self._c||e)("div")},[],!1,null,null,null).exports,S=n("fZjL"),A=n.n(S),j={name:"error",computed:{message:function(){return this.$route.params.error||"您访问的路径不存在"}},created:function(){var e=this.$route.query;0!==A()(e).length&&this.$router.replace({name:"error",params:e})}};var C=function(e){n("45Ns")},M=Object(T.a)(j,function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"page-error"},[t("p",[this._v(this._s(this.message))])])},[],!1,C,"data-v-b5544618",null).exports,I=n("d7EF"),O=n.n(I),L=n("Meid"),$=n.n(L);var W={wuhan:"248aed894a504e30ac5fea4771d82c4a","武汉":"248aed894a504e30ac5fea4771d82c4a",beijing:"5cb4f64a2af3411c88e99f40ee96224b","北京":"5cb4f64a2af3411c88e99f40ee96224b"};$.a.loadCss("https://js.arcgis.com/4.13/esri/themes/light/main.css"),$.a.loadModules(["esri/Map","esri/views/MapView","esri/Graphic","esri/layers/FeatureLayer","esri/WebMap","esri/widgets/Search"],{url:"https://js.arcgis.com/4.13/"}).then(function(e){var t=O()(e,6),n=t[0],r=t[1],a=t[2],o=t[3],i=t[4],s=t[5],c=(new n({basemap:"hybrid"}),new i({portalItem:{id:"5cd32b831bfb43d08e5ee75e7b40d53d"}})),u=new r({container:"viewDiv",map:c,zoom:3}),l=new s({view:u,autoSelect:!1});function f(e){e.queryFeatures().then(function(e){var t=e.features.length>0?e.features[0]:{},n=t.geometry&&t.geometry.extent;!function(e,t){console.log("x is",e,"y is",t);var n=new a({geometry:{type:"point",longitude:t,latitude:e},symbol:{type:"simple-marker",color:[226,119,40],outline:{color:[255,255,255],width:2}}});u.graphics.addMany([n])}(n.center&&n.center.latitude,n.center&&n.center.longitude)})}u.ui.add(l,"top-right"),u.on("click",function(e){console.log(e.mapPoint.x,e.mapPoint.y)}),l.on("search-blur",function(e){var t=e.target.searchTerm;if(W[t]){u.zoom=3,c.layers.removeAll(),u.graphics.removeAll();var n=new o({portalItem:{id:W[t]},renderer:{type:"simple",symbol:{type:"simple-line",color:"rgba(0,100,0,0.6)",size:3,outline:{color:[0,0,0,.1],width:.5}}},outFields:["*"]});c.layers.add(n),f(n)}})},function(e){console.log(e)});var q={name:"index",metaInfo:{title:"Home",titleTemplate:"%s - Lavas",meta:[{name:"keywords",content:"lavas PWA"},{name:"description",content:"基于 Vue 的 PWA 解决方案，帮助开发者快速搭建 PWA 应用，解决接入 PWA 的各种问题"}]},asyncData:function(){var e=l()(c.a.mark(function e(t){t.store,t.route;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()};var D=function(e){n("hS4j")},R=[{path:"/appshell",component:E,meta:{},name:"appshell"},{path:"/",component:Object(T.a)(q,function(){var e=this.$createElement;return(this._self._c||e)("div",{attrs:{id:"viewDiv"}})},[],!1,D,"data-v-1af3c7fb",null).exports,meta:{},name:"index"},{path:"/error",component:M,meta:{},name:"error",alias:"*"}];f.a.use(k.a);var B=function(e,t,n){if(n)return n;var r={};return e.hash&&(r.selector=e.hash),e.matched.some(function(e){return e.meta.scrollToTop})&&(r.x=0,r.y=0),r},N=R.filter(function(e){return e.keepAlive||e.meta.keepAlive}).map(function(e){return e.name});var z=n("woOf"),F=n.n(z),U=n("BO1k"),V=n.n(U),G=n("NYxO");f.a.use(G.a);var H=n("VfP6"),X=H.keys(),Y={},J=!0,Z=!1,K=void 0;try{for(var Q,ee=V()(X);!(J=(Q=ee.next()).done);J=!0){var te=Q.value;if("./index.js"===te){Y=pe(te);break}}}catch(e){Z=!0,K=e}finally{try{!J&&ee.return&&ee.return()}finally{if(Z)throw K}}if("function"!=typeof Y){Y.modules=Y.modules||{};var ne=!0,re=!1,ae=void 0;try{for(var oe,ie=V()(X);!(ne=(oe=ie.next()).done);ne=!0){var se=oe.value;if("./index.js"!==se){var ce=se.replace(/^\.\//,"").replace(/\.js$/,""),ue=ce.split("/"),le=he(Y,ue);le[ce=ue.pop()]=pe(se),le[ce].namespaced=!0}}}catch(e){re=!0,ae=e}finally{try{!ne&&ie.return&&ie.return()}finally{if(re)throw ae}}}var fe=Y instanceof Function?Y:function(){return new G.a.Store(F()({},Y,{state:Y.state instanceof Function?Y.state():{}}))};function pe(e){var t=H(e),n=t.default||t;if(n.commit)throw new Error("[lavas] store/"+e.replace("./","")+" should export a method which returns a Vuex instance.");if(n.state&&"function"!=typeof n.state)throw new Error("[lavas] state should be a function in store/"+e.replace("./",""));return n}function he(e,t){if(1===t.length)return e.modules;var n=t.shift(),r=e.modules[n]=e.modules[n]||{};return r.namespaced=!0,r.modules=r.modules||{},he(r,t)}var de=!1,ve={name:"updateToast",props:{text:{type:String,default:"站点发生更新，请手动刷新"}},data:function(){return{show:!1}},mounted:function(){window.addEventListener("sw.update",this.showUpdate),navigator.serviceWorker&&navigator.serviceWorker.addEventListener("controllerchange",this.handleSWChange)},beforeDestroy:function(){window.removeEventListener("sw.update",this.showUpdate),navigator.serviceWorker&&navigator.serviceWorker.removeEventListener("controllerchange",this.handleSWChange)},methods:{showUpdate:function(e){this.show=!0},handleRefresh:function(){try{navigator.serviceWorker.getRegistration().then(function(e){e.waiting.postMessage("skipWaiting")})}catch(e){window.location.reload()}},handleSWChange:function(){de||(de=!0,window.location.reload())}}};var me=function(e){n("AA66")},we={name:"app",components:{UpdateToast:Object(T.a)(ve,function(){var e=this.$createElement,t=this._self._c||e;return t("transition",{attrs:{name:"popup"}},[t("div",{directives:[{name:"show",rawName:"v-show",value:this.show,expression:"show"}],staticClass:"update-toast"},[t("span",[this._v(this._s(this.text))]),this._v(" "),t("span",{staticClass:"update-toast-close-btn",on:{click:this.handleRefresh}},[t("i",{staticClass:"iconfont icon-refresh"})])])])},[],!1,me,"data-v-0486d485",null).exports},computed:b()({},Object(G.c)("pageTransition",{pageTransitionType:function(e){return e.type},pageTransitionEffect:function(e){return e.effect}}),Object(G.c)("scrollBehavior",{scrollPostionMap:function(e){return e.scrollPostionMap}}),{pageTransitionClass:function(){return"transition-"+this.pageTransitionType},routerViewKey:function(){var e=this.$route,t=e.name,n=e.params,r=A()(n);return r.length?t+r.reduce(function(e,t){return e+n[t]},""):null}}),data:function(){return{keepAlivePages:N}},methods:b()({},Object(G.b)("scrollBehavior",["savePageScrollPosition"]),{restoreContainerScrollPosition:function(e,t){e.classList.add("app-view-scroll-enabled"),e.scrollTop=t},restoreBodyScrollPosition:function(e,t){e.classList.remove("app-view-scroll-enabled"),document.body.scrollTop=document.documentElement.scrollTop=t},handleBeforeEnter:function(e){var t=this,n=e.dataset.pageId,r=(this.scrollPostionMap[n]||{}).y,a=void 0===r?0:r;f.a.nextTick(function(){t.restoreContainerScrollPosition(e,a)})},handleAfterEnter:function(e){var t=e.dataset.pageId,n=(this.scrollPostionMap[t]||{}).y,r=void 0===n?0:n;this.restoreBodyScrollPosition(e,r)},handleBeforeLeave:function(e){var t=e.dataset.pageId,n=document.body.scrollTop||document.documentElement.scrollTop;this.restoreContainerScrollPosition(e,n),this.savePageScrollPosition({pageId:t,scrollPosition:{y:n}})}})};var ye=function(e){n("gHRC")},ge=Object(T.a)(we,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("transition",{attrs:{name:e.pageTransitionEffect},on:{"before-enter":e.handleBeforeEnter,"after-enter":e.handleAfterEnter,"before-leave":e.handleBeforeLeave}},[n("keep-alive",{attrs:{include:[].concat(e.keepAlivePages)}},[n("router-view",{key:e.routerViewKey,class:["app-view",e.pageTransitionClass],attrs:{"data-page-id":e.$route.fullPath}})],1)],1),e._v(" "),n("update-toast")],1)},[],!1,ye,null,null).exports,be=n("dAEq"),xe=n.n(be);f.a.use(xe.a,{ak:"5zxdlnOlA5kwsp2tgNvBPG2XNftGEe4T"}),f.a.use(_.a),f.a.config.productionTip=!1;var _e={data:function(){return{percent:0,show:!1,canSuccess:!0,duration:3e3,height:"2px",color:"#ffca2b",failedColor:"#ff0000"}},methods:{start:function(){var e=this;return this.show=!0,this.canSuccess=!0,this._timer&&(clearInterval(this._timer),this.percent=0),this._cut=1e4/Math.floor(this.duration),this._timer=setInterval(function(){e.increase(e._cut*Math.random()),e.percent>95&&e.finish()},100),this},set:function(e){return this.show=!0,this.canSuccess=!0,this.percent=Math.floor(e),this},get:function(){return Math.floor(this.percent)},increase:function(e){return this.percent=this.percent+Math.floor(e),this},decrease:function(e){return this.percent=this.percent-Math.floor(e),this},finish:function(){return this.percent=100,this.hide(),this},pause:function(){return clearInterval(this._timer),this},hide:function(){var e=this;return clearInterval(this._timer),this._timer=null,setTimeout(function(){e.show=!1,e.$nextTick(function(){setTimeout(function(){e.percent=0},200)})},500),this},fail:function(){return this.canSuccess=!1,this}}};var ke=function(e){n("ZFl9")},Pe=Object(T.a)(_e,function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"progress",style:{width:this.percent+"%",height:this.height,"background-color":this.canSuccess?this.color:this.failedColor,opacity:this.show?1:0}})},[],!1,ke,"data-v-2e9576fc",null).exports,Te=n("p5k0"),Ee=n.n(Te),Se=n("XGXE"),Ae=n.n(Se);n("MU8w"),n("CJsk");Ee.a.shim(),Ae.a.shim();var je=f.a.prototype.$loading=new f.a(Pe).$mount(),Ce=function(){var e=function(){var e=new k.a({mode:"history",base:"/lavas-zj/",scrollBehavior:B,routes:R});return e.beforeEach(function(t,n,r){e.app.$store&&e.app.$store.state.pageTransition.enable&&(e.app.$store.commit("pageTransition/setType","fade"),e.app.$store.commit("pageTransition/setEffect","fade")),r()}),e}(),t=fe();return{App:f.a.extend(b()({router:e,store:t},ge)),router:e,store:t}}(),Me=Ce.App,Ie=Ce.router,Oe=Ce.store,Le=y.a.build,$e=Le.ssr,We=Le.cssExtract,qe=y.a.middleware,De=void 0===qe?{}:qe,Re=y.a.skeleton,Be=Re.enable,Ne=Re.asyncCSS,ze=void 0;window.__INITIAL_STATE__&&Oe.replaceState(window.__INITIAL_STATE__),"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual"),document.body.appendChild(je.$el),f.a.mixin({beforeRouteUpdate:function(){var e=l()(c.a.mark(function e(t,n,r){var a;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:(a=this.$options.asyncData)?(je.start(),a.call(this,{store:this.$store,route:t}).then(function(){je.finish(),r()}).catch(r)):r();case 2:case"end":return e.stop()}},e,this)}));return function(t,n,r){return e.apply(this,arguments)}}()});var Fe=!0;if(function(){var e=this;Ie.beforeEach(function(){var t=l()(c.a.mark(function t(n,r,a){var o,s,u,l,f,m,w;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(Fe||n.path!==r.path){e.next=2;break}return e.abrupt("return",a());case 2:return Fe=!1,o=Ie.getMatchedComponents(n),s=[].concat(i()(De.all||[]),i()(De.client||[]),i()(o.filter(function(e){var t=e.middleware;return!!t}).reduce(function(e,t){var n=t.middleware;return e.concat(n)},[]))),e.next=7,h(s);case 7:if(u=e.sent,!(l=s.find(function(e){return"function"!=typeof u[e]}))){e.next=11;break}throw new Error("Unknown middleware "+l);case 11:return f=!1,m=d({to:n,from:r,store:Oe,next:function(e){if(je.finish&&je.finish(),!f){if(f=!0,e.external)return e.query=Object(p.stringify)(e.query),e.path=e.path+(e.query?"?"+e.query:""),window.location.replace(e.path),a();a(e)}}},ze),w=s.map(function(e){return u[e]}),e.next=17,v(w,m);case 17:f||a();case 18:case"end":return e.stop()}},t,e)}));return function(e,n,r){return t.apply(this,arguments)}}())}(),!document.body.hasAttribute("empty-appshell")&&$e)ze=new Me,Ie.onReady(function(){Ve(),ze.$mount("#app")});else{var Ue=Be&&Ne&&We;window.mountLavas=function(){setTimeout(function(){var e=document.querySelector("#app");e&&(e.innerHTML=""),ze.$mount("#app")},0)},Ve(),ze=new Me,($e||!Ue||Ue&&window.STYLE_READY)&&window.mountLavas()}function Ve(){var e=this;Ie.beforeResolve(function(t,n,r){var o=Ie.getMatchedComponents(t),i=Ie.getMatchedComponents(n),s=!1,u=o.filter(function(e,t){return s||(s=i[t]!==e)});if(!u.length)return r();je.start(),a.a.all(u.filter(function(e){return e.asyncData&&(!e.asyncDataFetched||!t.meta.keepAlive)}).map(function(){var n=l()(c.a.mark(function n(r){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.asyncData({store:Oe,route:t});case 2:r.asyncDataFetched=!0;case 3:case"end":return e.stop()}},n,e)}));return function(e){return n.apply(this,arguments)}}())).then(function(){je.finish(),r()}).catch(r)})}}},[0]);
//# sourceMappingURL=index.c55d529b.js.map