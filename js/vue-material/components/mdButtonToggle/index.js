/*!
* Vue Material v0.7.5
* Made with love by Marcos Moura
* Released under the MIT License.
*/   
!(function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.VueMaterial=e():t.VueMaterial=e()})(this,(function(){return (function(t){function e(n){if(o[n])return o[n].exports;var r=o[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var o={};return e.m=t,e.c=o,e.d=function(t,o,n){e.o(t,o)||Object.defineProperty(t,o,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var o=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(o,"a",o),o},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/",e(e.s=452)})({0:function(t,e){t.exports=function(t,e,o,n,r){var d,l=t=t||{},u=typeof t.default;"object"!==u&&"function"!==u||(d=t,l=t.default);var a="function"==typeof l?l.options:l;e&&(a.render=e.render,a.staticRenderFns=e.staticRenderFns),n&&(a._scopeId=n);var c;if(r?(c=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(r)},a._ssrRegister=c):o&&(c=o),c){var i=a.functional,g=i?a.render:a.beforeCreate;i?a.render=function(t,e){return c.call(e),g(t,e)}:a.beforeCreate=g?[].concat(g,c):[c]}return{esModule:d,exports:l,options:a}}},1:function(t,e,o){"use strict";function n(t){if(!t)return null;var e=t.mdTheme;return e||"md-theme"!==t.$options._componentTag||(e=t.mdName),e||n(t.$parent)}Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{mdTheme:String},computed:{mdEffectiveTheme:function(){return n(this)||this.$material.currentTheme},themeClass:function(){return this.$material.prefix+this.mdEffectiveTheme}},watch:{mdTheme:function(t){this.$material.useTheme(t)}},beforeMount:function(){var t=this.mdTheme;this.$material.useTheme(t||"default")}},t.exports=e.default},120:function(t,e,o){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function r(t){t.component("md-button-toggle",l.default),t.material.styles.push(a.default)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=r;var d=o(121),l=n(d),u=o(125),a=n(u);t.exports=e.default},121:function(t,e,o){function n(t){o(122)}var r=o(0)(o(123),o(124),n,null,null);t.exports=r.exports},122:function(t,e){},123:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o(1),r=(function(t){return t&&t.__esModule?t:{default:t}})(n),d=void 0;e.default={name:"md-button-toggle",props:{mdSingle:Boolean,mdManualToggle:Boolean},mixins:[r.default],mounted:function(){var t=this;this.mdManualToggle||this.$children.forEach((function(e){var o=e.$el;d=function(){t.mdSingle?(t.$children.forEach((function(t){t.$el.classList.remove("md-toggle")})),o.classList.add("md-toggle")):o.classList.toggle("md-toggle")},o&&o.classList.contains("md-button")&&o.addEventListener("click",d)}))},beforeDestroy:function(){this.mdManualToggle||this.$children.forEach((function(t){var e=t.$el;e&&e.classList.contains("md-button")&&e.removeEventListener("click",d)}))}},t.exports=e.default},124:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"md-button-toggle",class:[t.themeClass]},[t._t("default")],2)},staticRenderFns:[]}},125:function(t,e){t.exports='.THEME_NAME.md-button-toggle .md-button:after{width:1px;position:absolute;top:0;bottom:0;left:0;content:" "}.THEME_NAME.md-button-toggle .md-toggle{color:BACKGROUND-CONTRAST-0.54;background-color:BACKGROUND-CONTRAST-0.26}.THEME_NAME.md-button-toggle .md-toggle:hover:not([disabled]){background-color:BACKGROUND-CONTRAST-0.38}.THEME_NAME.md-button-toggle .md-toggle+.md-toggle:after{background-color:BACKGROUND-CONTRAST-0.12}.THEME_NAME.md-button-toggle.md-raised .md-toggle{color:BACKGROUND-CONTRAST-0.54;background-color:BACKGROUND-CONTRAST-0.26}.THEME_NAME.md-button-toggle.md-raised .md-toggle:hover:not([disabled]){background-color:BACKGROUND-CONTRAST-0.38}.THEME_NAME.md-button-toggle.md-raised .md-toggle+.md-toggle:after{background-color:BACKGROUND-CONTRAST-0.12}.THEME_NAME.md-button-toggle.md-primary .md-toggle{color:PRIMARY-CONTRAST;background-color:PRIMARY-COLOR}.THEME_NAME.md-button-toggle.md-primary .md-toggle:hover:not([disabled]){background-color:PRIMARY-COLOR}.THEME_NAME.md-button-toggle.md-primary .md-toggle+.md-toggle:after{background-color:PRIMARY-COLOR-600}.THEME_NAME.md-button-toggle.md-accent .md-toggle{color:ACCENT-CONTRAST;background-color:ACCENT-COLOR}.THEME_NAME.md-button-toggle.md-accent .md-toggle:hover:not([disabled]){background-color:ACCENT-COLOR}.THEME_NAME.md-button-toggle.md-accent .md-toggle+.md-toggle:after{background-color:ACCENT-COLOR-600}.THEME_NAME.md-button-toggle.md-warn .md-toggle{color:WARN-CONTRAST;background-color:WARN-COLOR}.THEME_NAME.md-button-toggle.md-warn .md-toggle:hover:not([disabled]){background-color:WARN-COLOR}.THEME_NAME.md-button-toggle.md-warn .md-toggle+.md-toggle:after{background-color:WARN-COLOR-600}.THEME_NAME.md-button-toggle [disabled]{color:rgba(0,0,0,0.26)}.THEME_NAME.md-button-toggle [disabled].md-toggle{color:BACKGROUND-CONTRAST-0.2;background-color:rgba(0,0,0,0.26)}\n'},452:function(t,e,o){t.exports=o(120)}})}));