(function(){"use strict";var e={6665:function(e,n,t){t(6992),t(8674),t(9601),t(7727);var o=t(9963),i=(t(1539),t(8783),t(3948),t(6252)),r=t(3577),s=t.p+"img/simple-so.a389cd93.svg",a=(0,i._)("div",{id:"logo"},[(0,i._)("a",{href:"https://hao.zdsr.cn"},[(0,i._)("img",{alt:"简洁导航",src:s})])],-1),u={key:0,id:"site-main"},c={id:"search-bar"},l={id:"container"},d={id:"headline-content"},f={id:"search-tab"},h=["onClick"],_=["action"],g=["name","placeholder"],m=(0,i._)("input",{id:"search-form-submit",class:"float-right",type:"submit",value:"搜索"},null,-1),k=["onClick"];function p(e,n,t,s,p,y){return(0,i.wg)(),(0,i.iD)(i.HY,null,[a,p.engines?((0,i.wg)(),(0,i.iD)("div",u,[(0,i._)("div",c,[(0,i._)("div",l,[(0,i._)("div",d,[(0,i._)("div",f,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(p.engine_names,(function(e){return(0,i.wg)(),(0,i.iD)("span",{key:e,class:(0,r.C_)({active:y.get_search_engine()===e}),onClick:function(n){return y.set_search_engine(e)}},(0,r.zw)(p.engines[e][3]),11,h)})),128))]),(0,i._)("form",{id:"search-form",ref:"search_form",action:p.engines[p.search_engine][0],target:"_blank"},[(0,i.wy)((0,i._)("input",{id:"search-keyword",ref:"search_input","onUpdate:modelValue":n[0]||(n[0]=function(e){return p.keyword=e}),name:p.engines[p.search_engine][1],placeholder:p.engines[p.search_engine][2],autocomplete:"off",autofocus:"",class:"float-left",type:"search",onBlur:n[1]||(n[1]=function(e){return y.blur()}),onFocus:n[2]||(n[2]=function(e){return y.focus()}),onInput:n[3]||(n[3]=function(e){return y.get_hot_keyword()}),onKeydown:[n[4]||(n[4]=(0,o.D2)((function(e){return y.down()}),["down"])),n[5]||(n[5]=(0,o.D2)((0,o.iM)((function(e){return y.up()}),["prevent"]),["up"]))]},null,40,g),[[o.nr,p.keyword]]),m],8,_),(0,i._)("div",{id:"search-hot",style:(0,r.j5)(p.search_hot_display)},[(0,i._)("ul",null,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(p.keywords,(function(e,n){return(0,i.wg)(),(0,i.iD)("li",{key:e,class:(0,r.C_)({selected:p.key_selected===n}),onClick:function(n){return y.go_submit(e)}},[(0,i._)("span",{class:(0,r.C_)("search_index"+n)},(0,r.zw)(n+1),3),(0,i.Uk)((0,r.zw)(e),1)],10,k)})),128))])],4)])])])])):(0,i.kq)("",!0)],64)}var y=t(9669),v=t.n(y),b=t(7247),w=t(4144),C=t.n(w),j={name:"Home",data:function(){return{search_engine:"",engines:"",engine_names:"",keyword:"",keywords:[],key_selected:-1,search_hot_display:"display: none"}},created:function(){var e,n=this;b.Z.get("engines")?(this.engines=b.Z.get("engines"),this.engine_names=b.Z.get("engines")["list"],b.Z.get("search_engine")?this.set_search_engine(b.Z.get("search_engine")):this.set_search_engine(this.engine_names[0])):(e=function(){return v().get("./json/search_engine.json")},e().then((function(e){b.Z.set("engines",e.data),n.engines=e.data,n.engine_names=b.Z.get("engines")["list"],n.set_search_engine(n.engine_names[0])})))},methods:{set_search_engine:function(e){b.Z.set("search_engine",e),this.search_engine=e},get_search_engine:function(){return b.Z.get("search_engine")},get_hot_keyword:function(){var e=this;""!==this.keyword&&""!==this.keyword&&"0"!==this.keyword?(clearTimeout(this.timer),this.timer=setTimeout((function(){var n="https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd="+e.keyword;C()(n,{jsonpCallback:"cb"}).then((function(e){return e.json()})).then((function(n){e.keywords=n.s})).catch((function(e){console.log(e)}))}),50)):this.keywords=[]},go_submit:function(e){this.keyword=e,this.$refs.search_input.value=e,this.$refs.search_form.submit()},getData:function(e){var n=this;C()(e,{jsonpCallback:"callback"}).then((function(e){return console.log(e),console.log(e.json()),e.json()})).then((function(e){n.users=e})).catch((function(e){console.log(e)}))},down:function(){this.key_selected=(this.key_selected+1)%this.keywords.length,this.keyword=this.keywords[this.key_selected],this.$refs.search_input.value=this.keywords[this.key_selected]},up:function(){this.key_selected=(this.key_selected-1+this.keywords.length)%this.keywords.length,this.keyword=this.keywords[this.key_selected],this.$refs.search_input.value=this.keywords[this.key_selected]},blur:function(){var e=this;clearTimeout(this.timer),this.timer=setTimeout((function(){e.search_hot_display="display: none",e.key_selected=-1}),100)},focus:function(){this.search_hot_display="display: block",this.key_selected=-1,this.get_hot_keyword()}}},D=t(3744);const O=(0,D.Z)(j,[["render",p]]);var Z=O,S=t(2119),x=[{path:"/",component:Z},{path:"/nav",name:"nav",component:function(){return t.e(888).then(t.bind(t,7888))}},{path:"/os",name:"os",component:function(){return t.e(390).then(t.bind(t,1390))}},{path:"/software",name:"software",component:function(){return t.e(718).then(t.bind(t,6718))}}],T=(0,S.PO)(),z=(0,S.p7)({history:T,routes:x}),A=z,$=(0,i._)("i",null,null,-1),H=[$],P={id:"setting"},E=(0,i._)("a",null,"书签",-1),F=[E],U=(0,i._)("a",null,"设置",-1),W=[U],N={id:"element"},Y={key:0},I={key:1},J={id:"top-menu-list"},B={id:"top-menu-ul"},K=(0,i.Uk)("首页"),M=(0,i.Uk)("导航"),q=(0,i.Uk)("软件"),V=(0,i.Uk)("系统"),L=(0,i.uE)('<div id="message"></div><div id="foot">©2022 <a class="out_link" href="https://songyili.xyz/" target="_blank">宋一鲤</a> All rights reserved. <a class="out_link beian" href="http://beian.miit.gov.cn/" target="_blank">陇ICP备2022002479号</a><a href="https://github.com/zzd/Simple-Search-Page" style="font-size:12px;" target="_blank"><span class="tag_box">Vue实现版</span></a></div>',2);function R(e,n,t,o,s,a){var u=(0,i.up)("Bookmarks"),c=(0,i.up)("Setting"),l=(0,i.up)("router-link"),d=(0,i.up)("router-view");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i._)("div",{id:"menu",class:(0,r.C_)({on:s.is_on}),onClick:n[0]||(n[0]=function(e){return a.menu_client()})},H,2),(0,i._)("div",{class:(0,r.C_)([{closed:!s.is_on},"list"])},[(0,i._)("ul",P,[(0,i._)("li",{class:(0,r.C_)({selected:"bookmark"===s.menu_selected}),onClick:n[1]||(n[1]=function(e){return a.menu_select("bookmark")})},F,2),(0,i._)("li",{class:(0,r.C_)({selected:"setting"===s.menu_selected}),onClick:n[2]||(n[2]=function(e){return a.menu_select("setting")})},W,2)]),(0,i._)("ul",N,["bookmark"===s.menu_selected?((0,i.wg)(),(0,i.iD)("span",Y,[(0,i.Wm)(u)])):"setting"===s.menu_selected?((0,i.wg)(),(0,i.iD)("span",I,[(0,i.Wm)(c)])):(0,i.kq)("",!0)])],2),(0,i._)("div",{id:"content",ref:"content",onClick:n[3]||(n[3]=function(e){return a.menu_close()})},[(0,i._)("div",J,[(0,i._)("ul",B,[(0,i._)("li",{class:(0,r.C_)({selected:"/"===this.$route.path})},[(0,i.Wm)(l,{to:"/"},{default:(0,i.w5)((function(){return[K]})),_:1})],2),(0,i._)("li",{class:(0,r.C_)({selected:"/nav"===this.$route.path})},[(0,i.Wm)(l,{to:"/nav"},{default:(0,i.w5)((function(){return[M]})),_:1})],2),(0,i._)("li",{class:(0,r.C_)({selected:"/software"===this.$route.path})},[(0,i.Wm)(l,{to:"/software"},{default:(0,i.w5)((function(){return[q]})),_:1})],2),(0,i._)("li",{class:(0,r.C_)({selected:"/os"===this.$route.path})},[(0,i.Wm)(l,{to:"/os"},{default:(0,i.w5)((function(){return[V]})),_:1})],2)])]),(0,i.Wm)(d),L],512)],64)}var G={i8:"3.0.0"},Q={key:0},X={class:"element-title"},ee=["href"],ne={key:1};function te(e,n,t,o,s,a){return s.bookmarks?((0,i.wg)(),(0,i.iD)("span",Q,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(s.bookmarks,(function(e){return(0,i.wg)(),(0,i.iD)("span",{key:e},[(0,i._)("li",X,[(0,i._)("span",null,(0,r.zw)(e.title),1)]),((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(e.node,(function(e){return(0,i.wg)(),(0,i.iD)("li",{key:e},[(0,i._)("a",{href:e.url,rel:"nofollow",target:"_blank"},(0,r.zw)(e.text),9,ee)])})),128))])})),128))])):((0,i.wg)(),(0,i.iD)("span",ne,"努力加载中..."))}var oe={name:"Bookmarks",data:function(){return{data:"",bookmarks:""}},created:function(){var e,n,t=this;(e=b.Z.get("bookmarks"),e)?this.bookmarks=e:(n=function(){return v().get("./json/url.json")},n().then((function(e){b.Z.set("bookmarks",e.data),t.bookmarks=e.data})))}};const ie=(0,D.Z)(oe,[["render",te]]);var re=ie,se=(0,i._)("li",{class:"element-title"},[(0,i._)("span",null,"自定义书签")],-1),ae=(0,i._)("li",null,[(0,i._)("label",{for:"files"},[(0,i._)("a",null,"上传Json")])],-1),ue=(0,i._)("li",{class:"element-title"},[(0,i._)("span",null,"关于本项目")],-1),ce=(0,i._)("div",null,[(0,i._)("p",{style:{color:"red"}}),(0,i._)("h4",null,"作者："),(0,i._)("p",null,[(0,i.Uk)("宋一鲤"),(0,i._)("br")]),(0,i._)("h4",null,"项目介绍："),(0,i._)("p",null,"本项目使用Vue3构建，推荐使用Chrome内核浏览器。"),(0,i._)("h4",null,"样式参考："),(0,i._)("p",null,"万花筒：wht.im")],-1);function le(e,n,t,o,r,s){return(0,i.wg)(),(0,i.iD)(i.HY,null,[se,(0,i._)("li",null,[(0,i._)("a",{onClick:n[0]||(n[0]=function(e){return s.download_json()})},"备份Json")]),ae,(0,i._)("input",{id:"files",ref:"refFile",style:{display:"none"},type:"file",onChange:n[1]||(n[1]=function(){return s.upload_json&&s.upload_json.apply(s,arguments)})},null,544),(0,i._)("li",null,[(0,i._)("a",{onClick:n[2]||(n[2]=function(e){return s.recover_json()})},"恢复默认")]),ue,ce],64)}t(8862);var de={name:"Setting",data:function(){return{data:"",setting:""}},methods:{download_json:function(){var e;e=b.Z.get("bookmarks"),e=JSON.stringify(e,null,4);var n=document.createElement("a");n.setAttribute("href","data:text/plain;charset=utf-8,"+encodeURIComponent(e)),n.setAttribute("download","bookmarks.json"),n.style.display="none",n.click()},upload_json:function(){var e=this.$refs.refFile.files[0],n=new FileReader;n.readAsText(e),n.onload=function(){try{b.Z.set("bookmarks",JSON.parse(this.result))}catch(e){console.log("解析失败，你的文件可能有问题。")}}},recover_json:function(){b.Z.set("bookmarks","")}}};const fe=(0,D.Z)(de,[["render",le]]);var he=fe,_e={name:"Home",components:{Setting:he,Bookmarks:re},data:function(){return{version:G.i8,is_on:!1,menu_selected:"bookmark",background:""}},methods:{menu_client:function(){this.is_on=!this.is_on},menu_close:function(){this.is_on=!1},menu_select:function(e){this.menu_selected=e},set_background:function(e){this.background=e}},watch:{background:function(){try{this.$refs.content.style.background=this.background}catch(e){console.log(e)}}},mounted:function(){this.$refs.content.style.background=this.background}};const ge=(0,D.Z)(_e,[["render",R]]);var me=ge,ke=(0,o.ri)(me);ke.use(A),ke.mount("#app")},7247:function(e,n,t){t(8862);var o={set:function(e,n){localStorage.setItem(e,JSON.stringify(n))},get:function(e){return JSON.parse(localStorage.getItem(e))},remove:function(e){localStorage.removeItem(e)}};n["Z"]=o}},n={};function t(o){var i=n[o];if(void 0!==i)return i.exports;var r=n[o]={exports:{}};return e[o].call(r.exports,r,r.exports,t),r.exports}t.m=e,function(){var e=[];t.O=function(n,o,i,r){if(!o){var s=1/0;for(l=0;l<e.length;l++){o=e[l][0],i=e[l][1],r=e[l][2];for(var a=!0,u=0;u<o.length;u++)(!1&r||s>=r)&&Object.keys(t.O).every((function(e){return t.O[e](o[u])}))?o.splice(u--,1):(a=!1,r<s&&(s=r));if(a){e.splice(l--,1);var c=i();void 0!==c&&(n=c)}}return n}r=r||0;for(var l=e.length;l>0&&e[l-1][2]>r;l--)e[l]=e[l-1];e[l]=[o,i,r]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(n,o){return t.f[o](e,n),n}),[]))}}(),function(){t.u=function(e){return"js/"+e+"-legacy."+{390:"dda96565",718:"5a893f81",888:"d5fe990c"}[e]+".js"}}(),function(){t.miniCssF=function(e){}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="simple-search-page-vue:";t.l=function(o,i,r,s){if(e[o])e[o].push(i);else{var a,u;if(void 0!==r)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var d=c[l];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==n+r){a=d;break}}a||(u=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,t.nc&&a.setAttribute("nonce",t.nc),a.setAttribute("data-webpack",n+r),a.src=o),e[o]=[i];var f=function(n,t){a.onerror=a.onload=null,clearTimeout(h);var i=e[o];if(delete e[o],a.parentNode&&a.parentNode.removeChild(a),i&&i.forEach((function(e){return e(t)})),n)return n(t)},h=setTimeout(f.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=f.bind(null,a.onerror),a.onload=f.bind(null,a.onload),u&&document.head.appendChild(a)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p="/"}(),function(){var e={143:0};t.f.j=function(n,o){var i=t.o(e,n)?e[n]:void 0;if(0!==i)if(i)o.push(i[2]);else{var r=new Promise((function(t,o){i=e[n]=[t,o]}));o.push(i[2]=r);var s=t.p+t.u(n),a=new Error,u=function(o){if(t.o(e,n)&&(i=e[n],0!==i&&(e[n]=void 0),i)){var r=o&&("load"===o.type?"missing":o.type),s=o&&o.target&&o.target.src;a.message="Loading chunk "+n+" failed.\n("+r+": "+s+")",a.name="ChunkLoadError",a.type=r,a.request=s,i[1](a)}};t.l(s,u,"chunk-"+n,n)}},t.O.j=function(n){return 0===e[n]};var n=function(n,o){var i,r,s=o[0],a=o[1],u=o[2],c=0;if(s.some((function(n){return 0!==e[n]}))){for(i in a)t.o(a,i)&&(t.m[i]=a[i]);if(u)var l=u(t)}for(n&&n(o);c<s.length;c++)r=s[c],t.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return t.O(l)},o=self["webpackChunksimple_search_page_vue"]=self["webpackChunksimple_search_page_vue"]||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))}();var o=t.O(void 0,[998],(function(){return t(6665)}));o=t.O(o)})();
//# sourceMappingURL=app-legacy.be13ac81.js.map