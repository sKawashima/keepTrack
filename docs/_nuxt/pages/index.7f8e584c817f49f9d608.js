webpackJsonp([1],{"/TYz":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("4Fw5"),n=a("fwGk"),i=!1;var r=function(t){i||a("xp29")},o=a("VU/8")(s.a,n.a,!1,r,"data-v-2a183b29",null);o.options.__file="pages/index.vue",e.default=o.exports},"4Fw5":function(t,e,a){"use strict";var s=a("oEaD");e.a={components:{Nav:s.a},data:function(){return{necessary:1e4,unnecessary:2e3}},mounted:function(){this.getDB()},methods:{reset:function(){confirm("本当によろしいですか？")&&(this.$store.commit("reset"),this.necessary=this.$store.state.necessary,this.unnecessary=this.$store.state.unnecessary)},getDB:function(){this.$store.state.setDB?(this.necessary=this.$store.state.necessary,this.unnecessary=this.$store.state.unnecessary):setInterval(this.getDB,10)}}}},Cuuq:function(t,e,a){var s=a("qipq");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);a("rjj0")("928fc7e8",s,!1,{sourceMap:!1})},S2xB:function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,".container[data-v-2a183b29]{min-height:calc(100vh - 8rem);width:90vw;max-width:768px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-align:center;-ms-flex-align:center;align-items:center;text-align:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-flow:column;flex-flow:column}.container #statistics[data-v-2a183b29]{margin:32px 0;margin:2rem 0;font-weight:700;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:baseline;-ms-flex-align:baseline;align-items:baseline}.container #statistics h2[data-v-2a183b29]{font-size:24px;font-size:1.5rem}.container #statistics p[data-v-2a183b29]{margin-left:16px;margin-left:1rem;font-size:48px;font-size:3rem}.container #graph[data-v-2a183b29]{display:-webkit-box;display:-ms-flexbox;display:flex;width:100%;margin:0 0 16px;margin:0 0 1rem;background-color:#888}.container #graph .bar[data-v-2a183b29]{height:32px;height:2rem}.container #graph .necessary[data-v-2a183b29]{background-color:#23d160}.container #graph .unnecessary[data-v-2a183b29]{background-color:#ff3860}.container #expense[data-v-2a183b29]{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-pack:distribute;justify-content:space-around;width:100%}.container #expense .item[data-v-2a183b29]{padding:16px;padding:1rem}.container #expense p[data-v-2a183b29]{font-size:1.5em}#input[data-v-2a183b29]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-flow:column;flex-flow:column;width:100%}#input .main[data-v-2a183b29]{color:#3e3e3e;background-color:#d6c726;font-weight:700;-webkit-transition:.1s;transition:.1s}#input .main[data-v-2a183b29]:hover{border:0;background-color:#fce700}#input .button[data-v-2a183b29]{margin-top:16px;margin-top:1rem}",""])},fwGk:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{attrs:{id:"statistics"}},[a("h2",[t._v("出費合計")]),a("p",[t._v(t._s(t.necessary+t.unnecessary)+"円")])]),a("div",{attrs:{id:"graph"}},[a("div",{staticClass:"bar necessary",style:{flexGrow:t.necessary}}),a("div",{staticClass:"bar unnecessary",style:{flexGrow:t.unnecessary}})]),a("div",{attrs:{id:"expense"}},[a("div",{staticClass:"item"},[a("h3",[t._v("必要出費")]),a("p",[t._v(t._s(t.necessary)+"円")])]),a("div",{staticClass:"item"},[a("h3",[t._v("不要出費")]),a("p",[t._v(t._s(t.unnecessary)+"円")])])]),a("div",{attrs:{id:"input"}},[a("nuxt-link",{staticClass:"button is-large main",attrs:{to:"input"}},[t._v("入力")]),a("div",{staticClass:"button",on:{click:t.reset}},[t._v("リセット")])],1)])};s._withStripped=!0;var n={render:s,staticRenderFns:[]};e.a=n},"kBV/":function(t,e,a){"use strict";var s=function(){var t=this.$createElement,e=this._self._c||t;return e("nav",[e("nuxt-link",{staticClass:"nav-contents nav-title",attrs:{to:"/"}},[this._v("TOKT")]),this._m(0)],1)};s._withStripped=!0;var n={render:s,staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"nav-contents nav-left"},[this._v("made by "),e("a",{staticClass:"mylink",attrs:{href:"skawashima.com"}},[this._v("sKawashima")])])}]};e.a=n},oEaD:function(t,e,a){"use strict";var s=a("pieB"),n=a("kBV/"),i=!1;var r=function(t){i||a("Cuuq")},o=a("VU/8")(s.a,n.a,!1,r,"data-v-738fae98",null);o.options.__file="components/Nav.vue",e.a=o.exports},pieB:function(t,e,a){"use strict";e.a={}},qipq:function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,"nav[data-v-738fae98]{width:100vw;height:64px;height:4rem;background-color:#3e3e3e;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}nav .nav-contents[data-v-738fae98],nav[data-v-738fae98]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}nav .nav-contents[data-v-738fae98]{color:#fff;padding:0 32px;padding:0 2rem;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;height:100%}nav .nav-title[data-v-738fae98]{font-weight:700;font-size:1.5em;background-color:#d6c726;color:#3e3e3e;-webkit-transition:.1s;transition:.1s;-ms-flex-item-align:center;align-self:center}nav .nav-title[data-v-738fae98]:hover{background-color:#e9d713}nav .mylink[data-v-738fae98]{color:#d6c726}nav .mylink[data-v-738fae98]:hover{color:#f3eebb}",""])},xp29:function(t,e,a){var s=a("S2xB");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);a("rjj0")("6dcfc945",s,!1,{sourceMap:!1})}});