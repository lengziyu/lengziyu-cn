(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4ae84778"],{"02c7":function(t,e,i){"use strict";i("50f4")},"0b9d":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"about"},[i("Header",{attrs:{page:"photo"}}),i("Masthead",{attrs:{title:"相册",subtitle:"Photo"}}),i("div",{staticClass:"main"},t._l(t.list,(function(e){return i("div",{staticClass:"group-photo"},[i("div",{staticClass:"gp-title"},[t._v("\n\t\t\t\t"+t._s(e.name)+"\n\t\t\t")]),i("div",{staticClass:"gp-wrap"},t._l(e.list,(function(n,s){return s<3?i("div",{staticClass:"pic-item",style:"transform: rotate("+t.randomNum(5,40)+"deg)",on:{click:function(i){return t.clickImgView(e.list)}}},[i("img",{staticClass:"max",attrs:{src:n.img}})]):t._e()})),0)])})),0),i("Footer")],1)},s=[],o=i("981c"),a=i("2623"),c=i("b2c8"),r=[{name:"喵喵喵~",list:[{name:"(>^ω^<)喵",img:i("d107")},{name:"(>^ω^<)喵",img:i("730f")},{name:"(>^ω^<)喵",img:i("9db0")},{name:"(>^ω^<)喵",img:i("ba06")}]},{name:"我的XL",list:[{name:"XL",img:i("18a3")},{name:"XL",img:i("8f2b")},{name:"XL",img:i("6552")},{name:"XL",img:i("2291")}]},{name:"去过的地方",list:[{name:"高椅岭",img:i("0e0e")},{name:"海陵岛",img:i("d202")},{name:"东江湖",img:i("a2d6")},{name:"广州长隆",img:i("1ea5")}]},{name:"自拍",list:[{name:"sz",img:i("c1cb")},{name:"sz2",img:i("977e")},{name:"sz4",img:i("e7e0")},{name:"sz6",img:i("4180")},{name:"gz",img:i("bdfa")}]}],l=r,d={components:{Header:o["a"],Masthead:a["a"],Footer:c["a"]},data:function(){return{list:l}},computed:{},methods:{randomNum:function(t,e){switch(arguments.length){case 1:return parseInt(Math.random()*t+1,10);case 2:return parseInt(Math.random()*(e-t+1)+t,10);default:return 0}},clickImgView:function(t){var e=this;this.$utils.setStorage("imgView",t),setTimeout((function(){e.$router.push("/photo/imgView")}),50)}}},h=d,u=(i("02c7"),i("033d")),f=Object(u["a"])(h,n,s,!1,null,"c2d8489c",null);e["default"]=f.exports},"0e0e":function(t,e,i){t.exports=i.p+"f52b7045e818b608daeba95f20f8e64c.jpg"},"18a3":function(t,e,i){t.exports=i.p+"44e4e8ad8c30494b8ccde814fac71d16.jpg"},"1ea5":function(t,e,i){t.exports=i.p+"20bcf178062e7a2f0309ca31599c2643.jpg"},2291:function(t,e,i){t.exports=i.p+"afef2b4ebe9ddd8eedfd28791303ccc9.jpg"},2623:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"masthead-wrap"},[i("div",{staticClass:"work-head",attrs:{id:"title"}},[i("div",{staticClass:"container"},[i("div",{staticClass:"transistion cloud left-cloud-notes"}),i("div",{staticClass:"transistion cloud right-cloud-notes"}),i("div",{staticClass:"transistion flag flag-left"}),i("div",{staticClass:"transistion flag flag-right"}),i("div",{staticClass:"row"},[i("div",{staticClass:"col-md-12"},[i("div",{staticClass:"transistion",attrs:{id:"head-slider"}},[i("div",{staticClass:"slide-contents"},[i("div",{staticClass:"slide"},[i("h2",{staticClass:"notes"},[t._v(t._s(t.title))]),i("h3",{staticClass:"subtitle"},[t._v(t._s(t.subtitle))])])])])])])])])])},s=[],o={props:["title","subtitle"]},a=o,c=(i("a1e2"),i("033d")),r=Object(c["a"])(a,n,s,!1,null,"c1e1b3ce",null);e["a"]=r.exports},"29e1":function(t,e,i){"use strict";i("4eb4")},3980:function(t,e,i){},"3f29":function(t,e,i){t.exports=i.p+"4b3190c431232057af193362c9814a81.png"},4180:function(t,e,i){t.exports=i.p+"dcf7a27489676bd49cbfd1a982f59fee.jpg"},"4eb4":function(t,e,i){},"50f4":function(t,e,i){},6552:function(t,e,i){t.exports=i.p+"2246f735c4281778617fb946cb4a3fe0.jpg"},6891:function(t,e,i){t.exports=i.p+"4b07cdc486fa570ec89b9c4cbb54dabc.png"},"730f":function(t,e,i){t.exports=i.p+"f00bb4fa71343aa23eed10bd7a54de04.jpg"},7708:function(t,e,i){"use strict";i("dd37")},"7b15":function(t,e,i){var n,s,o;
/*!
 * headroom.js v0.9.4 - Give your page some headroom. Hide your header until you need it
 * Copyright (c) 2017 Nick Williams - http://wicky.nillia.ms/headroom.js
 * License: MIT
 */(function(i,a){"use strict";s=[],n=a,o="function"===typeof n?n.apply(e,s):n,void 0===o||(t.exports=o)})(0,(function(){"use strict";var t={bind:!!function(){}.bind,classList:"classList"in document.documentElement,rAF:!!(window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame)};function e(t){this.callback=t,this.ticking=!1}function i(t){return t&&"undefined"!==typeof window&&(t===window||t.nodeType)}function n(t){if(arguments.length<=0)throw new Error("Missing arguments in extend function");var e,s,o=t||{};for(s=1;s<arguments.length;s++){var a=arguments[s]||{};for(e in a)"object"!==typeof o[e]||i(o[e])?o[e]=o[e]||a[e]:o[e]=n(o[e],a[e])}return o}function s(t){return t===Object(t)?t:{down:t,up:t}}function o(t,e){e=n(e,o.options),this.lastKnownScrollY=0,this.elem=t,this.tolerance=s(e.tolerance),this.classes=e.classes,this.offset=e.offset,this.scroller=e.scroller,this.initialised=!1,this.onPin=e.onPin,this.onUnpin=e.onUnpin,this.onTop=e.onTop,this.onNotTop=e.onNotTop,this.onBottom=e.onBottom,this.onNotBottom=e.onNotBottom}return window.requestAnimationFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame,e.prototype={constructor:e,update:function(){this.callback&&this.callback(),this.ticking=!1},requestTick:function(){this.ticking||(requestAnimationFrame(this.rafCallback||(this.rafCallback=this.update.bind(this))),this.ticking=!0)},handleEvent:function(){this.requestTick()}},o.prototype={constructor:o,init:function(){if(o.cutsTheMustard)return this.debouncer=new e(this.update.bind(this)),this.elem.classList.add(this.classes.initial),setTimeout(this.attachEvent.bind(this),100),this},destroy:function(){var t=this.classes;for(var e in this.initialised=!1,t)t.hasOwnProperty(e)&&this.elem.classList.remove(t[e]);this.scroller.removeEventListener("scroll",this.debouncer,!1)},attachEvent:function(){this.initialised||(this.lastKnownScrollY=this.getScrollY(),this.initialised=!0,this.scroller.addEventListener("scroll",this.debouncer,!1),this.debouncer.handleEvent())},unpin:function(){var t=this.elem.classList,e=this.classes;!t.contains(e.pinned)&&t.contains(e.unpinned)||(t.add(e.unpinned),t.remove(e.pinned),this.onUnpin&&this.onUnpin.call(this))},pin:function(){var t=this.elem.classList,e=this.classes;t.contains(e.unpinned)&&(t.remove(e.unpinned),t.add(e.pinned),this.onPin&&this.onPin.call(this))},top:function(){var t=this.elem.classList,e=this.classes;t.contains(e.top)||(t.add(e.top),t.remove(e.notTop),this.onTop&&this.onTop.call(this))},notTop:function(){var t=this.elem.classList,e=this.classes;t.contains(e.notTop)||(t.add(e.notTop),t.remove(e.top),this.onNotTop&&this.onNotTop.call(this))},bottom:function(){var t=this.elem.classList,e=this.classes;t.contains(e.bottom)||(t.add(e.bottom),t.remove(e.notBottom),this.onBottom&&this.onBottom.call(this))},notBottom:function(){var t=this.elem.classList,e=this.classes;t.contains(e.notBottom)||(t.add(e.notBottom),t.remove(e.bottom),this.onNotBottom&&this.onNotBottom.call(this))},getScrollY:function(){return void 0!==this.scroller.pageYOffset?this.scroller.pageYOffset:void 0!==this.scroller.scrollTop?this.scroller.scrollTop:(document.documentElement||document.body.parentNode||document.body).scrollTop},getViewportHeight:function(){return window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight},getElementPhysicalHeight:function(t){return Math.max(t.offsetHeight,t.clientHeight)},getScrollerPhysicalHeight:function(){return this.scroller===window||this.scroller===document.body?this.getViewportHeight():this.getElementPhysicalHeight(this.scroller)},getDocumentHeight:function(){var t=document.body,e=document.documentElement;return Math.max(t.scrollHeight,e.scrollHeight,t.offsetHeight,e.offsetHeight,t.clientHeight,e.clientHeight)},getElementHeight:function(t){return Math.max(t.scrollHeight,t.offsetHeight,t.clientHeight)},getScrollerHeight:function(){return this.scroller===window||this.scroller===document.body?this.getDocumentHeight():this.getElementHeight(this.scroller)},isOutOfBounds:function(t){var e=t<0,i=t+this.getScrollerPhysicalHeight()>this.getScrollerHeight();return e||i},toleranceExceeded:function(t,e){return Math.abs(t-this.lastKnownScrollY)>=this.tolerance[e]},shouldUnpin:function(t,e){var i=t>this.lastKnownScrollY,n=t>=this.offset;return i&&n&&e},shouldPin:function(t,e){var i=t<this.lastKnownScrollY,n=t<=this.offset;return i&&e||n},update:function(){var t=this.getScrollY(),e=t>this.lastKnownScrollY?"down":"up",i=this.toleranceExceeded(t,e);this.isOutOfBounds(t)||(t<=this.offset?this.top():this.notTop(),t+this.getViewportHeight()>=this.getScrollerHeight()?this.bottom():this.notBottom(),this.shouldUnpin(t,i)?this.unpin():this.shouldPin(t,i)&&this.pin(),this.lastKnownScrollY=t)}},o.options={tolerance:{up:0,down:0},offset:0,scroller:window,classes:{pinned:"headroom--pinned",unpinned:"headroom--unpinned",top:"headroom--top",notTop:"headroom--not-top",bottom:"headroom--bottom",notBottom:"headroom--not-bottom",initial:"headroom"}},o.cutsTheMustard="undefined"!==typeof t&&t.rAF&&t.bind&&t.classList,o}))},"8f2b":function(t,e,i){t.exports=i.p+"f3da9d927e8e2f86490057a49813ff92.jpg"},"977e":function(t,e,i){t.exports=i.p+"38f25ee7006881d51e4286c86c59f3f6.jpg"},"981c":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"header header--fixed hide-from-print",attrs:{id:"header"}},[n("div",{staticClass:"container"},[t._m(0),t.isMobile?n("div",{staticClass:"icon-nav",on:{click:function(e){t.isShowNav=!0}}},[n("img",{staticClass:"max",attrs:{src:i("3f29")}})]):t._e(),t.isShowNav?n("nav",{class:t.isMobile?"isMobile":"",attrs:{id:"top-nav"}},[n("ul",{staticClass:"nav-list transistion"},t._l(t.list,(function(e,i){return n("li",{key:i,class:t.page==e.key?"page-active":""},[n("a",{attrs:{href:e.url}},[t._v(t._s(e.name))])])})),0)]):t._e(),n("div",{directives:[{name:"show",rawName:"v-show",value:t.isMobile&&t.isShowNav,expression:"isMobile && isShowNav"}],staticClass:"close-nav",on:{click:function(e){t.isShowNav=!1}}},[n("img",{staticClass:"max",attrs:{src:i("6891")}})])])])},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h1",{staticClass:"image-text",attrs:{id:"header-logo"}},[n("a",{attrs:{href:"/"}},[n("span",{staticClass:"mask"}),n("span",{staticClass:"behind"}),n("img",{staticClass:"max",attrs:{src:i("9d64"),alt:""}})])])}],o=i("7b15"),a=i.n(o),c={props:["page"],data:function(){return{isMobile:!1,screenWidth:"",isShowNav:!1,list:[{name:"关于",key:"about",url:"/about"},{name:"生活",key:"life",url:"/life"},{name:"相册",key:"photo",url:"/photo"},{name:"博客",key:"blog",url:"http://lengziyu.cn/blog"}]}},mounted:function(){var t=this,e=new a.a(document.querySelector("#header"),{tolerance:5,offset:205,classes:{initial:"animated",pinned:"slideDown",unpinned:"slideUp"}});e.init(),this.getScreenWidth(),window.addEventListener("resize",(function(){t.getScreenWidth()}))},methods:{getScreenWidth:function(){window.screenWidth=document.body.clientWidth,this.screenWidth=window.screenWidth,this.screenWidth<600?(this.isMobile=!0,this.isShowNav=!1):(this.isMobile=!1,this.isShowNav=!0)}}},r=c,l=(i("7708"),i("033d")),d=Object(l["a"])(r,n,s,!1,null,"558361e9",null);e["a"]=d.exports},"9d64":function(t,e,i){t.exports=i.p+"6905324568cb4541435feb739905ba97.png"},"9db0":function(t,e,i){t.exports=i.p+"6fcd8560bf4d2cab612f01fe707f1351.jpg"},a1e2:function(t,e,i){"use strict";i("3980")},a2d6:function(t,e,i){t.exports=i.p+"e8ac7da96961058ceaf8bf06aec1cdc9.jpg"},b2c8:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("footer",[i("div",{staticClass:"container"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-md-12"},[i("ul",{staticClass:"footer-list"},[i("li",[i("a",{attrs:{href:"https://github.com/lengziyu"}},[i("font",[i("font",[t._v("Github")])],1)],1)]),i("li",[i("a",{attrs:{href:"http://www.lengziyu.cn/blog"}},[i("font",[i("font",[t._v("Blog")])],1)],1)]),i("li",[i("a",{staticClass:"email-lnk",attrs:{href:"https://www.createjs.cc"}},[i("font",[i("font",[t._v("CreateJS")])],1)],1)]),i("li",[i("a",{staticClass:"email-lnk",attrs:{href:"http://www.lengziyu.cn/fenav"}},[i("font",[i("font",[t._v("FE nav")])],1)],1)])])])]),i("div",{staticClass:"row"},[i("div",{staticClass:"col-md-12"},[i("p",[i("font",[i("font",[t._v("©2019~2020 ")])],1),i("a",{attrs:{href:"http://www.lengziyu.cn"}},[i("font",[i("font",[t._v(" lengziyu ")])],1)],1),i("font",[i("font"),i("font",[t._v("版权所有。")])],1)],1)])])])])},s=[],o={},a=o,c=(i("29e1"),i("033d")),r=Object(c["a"])(a,n,s,!1,null,"48190f1c",null);e["a"]=r.exports},ba06:function(t,e,i){t.exports=i.p+"138449d8c256923b0ac823a33fa46aa3.jpg"},bdfa:function(t,e,i){t.exports=i.p+"3d698b1c958b8c6fb2ccf91d7c072dee.jpg"},c1cb:function(t,e,i){t.exports=i.p+"0c8296a491b30daf2f9c1bb05eca0e15.jpg"},d107:function(t,e,i){t.exports=i.p+"975e32684a2da55bb46e8c7d5f796371.jpg"},d202:function(t,e,i){t.exports=i.p+"6aab6663ee85ae099e6455c15255f370.jpg"},dd37:function(t,e,i){},e7e0:function(t,e,i){t.exports=i.p+"dbffa35e47a8b6208cc666c109a44c18.jpg"}}]);