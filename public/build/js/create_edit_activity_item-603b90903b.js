!function(e){function t(i){if(a[i])return a[i].exports;var n=a[i]={i:i,l:!1,exports:{}};return e[i].call(n.exports,n,n.exports,t),n.l=!0,n.exports}var a={};return t.m=e,t.c=a,t.i=function(e){return e},t.d=function(e,t,a){Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:a})},t.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(a,"a",a),a},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=13)}([function(e,t,a){"use strict";t.a={methods:{isValidImageFormat:function(e){return"image/jpg"===e.type||"image/jpeg"===e.type||"image/png"==e.type}}}},function(e,t,a){"use strict";t.a={methods:{hasFiles:function(e){return e.target.files.length>0},resetImageFileInput:function(e){$(e.target).val("")},getImageInputElement:function(e){return $(this.$refs["add-image"][e])},resetOptionImage:function(e){var t=this.getImageInputElement(e);this.options[e].image="",this.options[e].imagePreview=!1,this.$nextTick(function(){t.tooltip("destroy")})},imageSelected:function(e,t){var a=this;if(this.hasFiles(e)){if(!this.isValidImageFormat(e.target.files[0]))return this.resetImageFileInput(e),this.resetOptionImage(t),void alert(this.$t("image-format-hint"));this.options[t].image=e.target.files[0].name,this.options[t].imagePreview=!1,this.options[t].imageSelected=!0;var i=this.getImageInputElement(t);this.$nextTick(function(){i.data&&i.data("original-title")?i.attr("data-original-title",i.attr("title")).removeAttr("title").tooltip("show"):(i.attr("data-original-title",a.options[t].image),i.attr("title",a.options[t].image))})}},canRemoveSelectedImage:function(e){return!!this.options[e].imageSelected},removeSelectedImage:function(e){if(this.canRemoveSelectedImage(e)){var t=this.options[e];t.image_url?(t.image=t.image_url.split("/").pop(),t.imagePreview=!0):t.image="",t.imageSelected=!1,$(this.$refs["option-image"][e]).val("");var a=this.getImageInputElement(e);this.$nextTick(function(){t.image?a.attr("data-original-title",t.image):(a.attr("title",""),a.attr("data-original-title",""))})}},canRemoveImage:function(e){return!!this.options[e].image_url&&!this.canRemoveSelectedImage(e)},removeImage:function(e){this.canRemoveImage(e)&&$(this.$refs["removed-option-images"][e]).trigger("click")},hasImageRemoved:function(e){return this.removedImages.indexOf(this.options[e].id)!==-1}}}},function(e,t,a){"use strict";(function(t){function a(e,t){window.console&&(console.warn("[vue-i18n] "+e),t&&console.warn(t.stack))}function i(e,t,a){if("object"==typeof t)a(t);else{var i=t.call(this);if("function"==typeof i)if(i.resolved)a(i.resolved);else if(i.requested)i.pendingCallbacks.push(a);else{i.requested=!0;var o=i.pendingCallbacks=[a];i(function(e){i.resolved=e;for(var t=0,a=o.length;t<a;t++)o[t](e)},function(){a()})}else n(i)&&i.then(function(e){a(e)},function(){a()})["catch"](function(e){console.error(e),a()})}}function n(e){return e&&"function"==typeof e.then}function o(e){if(!_){var t=e.$watch("__watcher__",function(e){});_=e._watchers[0].constructor,t()}return _}function r(e){return!b&&e&&e._data&&e._data.__ob__&&e._data.__ob__.dep&&(b=e._data.__ob__.dep.constructor),b}function s(e){return null===e||void 0===e}function c(e,t){function a(a){var i=arguments.length;return i?i>1?e.apply(t,arguments):e.call(t,a):e.call(t)}return a._length=e.length,a}function l(e){return null!==e&&"object"==typeof e}function d(e){return C.call(e)===x}function m(e,t){return O.call(e,t)}function u(e){return Z.test(e)}function p(e){var t=e.charCodeAt(0),a=e.charCodeAt(e.length-1);return t!==a||34!==t&&39!==t?e:e.slice(1,-1)}function g(e){if(void 0===e)return"eof";var t=e.charCodeAt(0);switch(t){case 91:case 93:case 46:case 34:case 39:case 48:return e;case 95:case 36:case 45:return"ident";case 32:case 9:case 10:case 13:case 160:case 65279:case 8232:case 8233:return"ws"}return t>=97&&t<=122||t>=65&&t<=90?"ident":t>=49&&t<=57?"number":"else"}function f(e){var t=e.trim();return("0"!==e.charAt(0)||!isNaN(e))&&(u(t)?p(t):"*"+t)}function v(e){function t(){var t=e[d+1];if(m===Q&&"'"===t||m===q&&'"'===t)return d++,i="\\"+t,p[L](),!0}var a,i,n,o,r,s,c,l=[],d=-1,m=E,u=0,p=[];for(p[z]=function(){void 0!==n&&(l.push(n),n=void 0)},p[L]=function(){void 0===n?n=i:n+=i},p[F]=function(){p[L](),u++},p[M]=function(){if(u>0)u--,m=U,p[L]();else{if(u=0,n=f(n),n===!1)return!1;p[z]()}};null!=m;)if(d++,a=e[d],"\\"!==a||!t()){if(o=g(a),c=G[m],r=c[o]||c["else"]||H,r===H)return;if(m=r[0],s=p[r[1]],s&&(i=r[2],i=void 0===i?a:i,s()===!1))return;if(m===B)return l.raw=e,l}}function h(e){var t=T[e];return t||(t=v(e),t&&(T[e]=t)),t}function I(e,i){void 0===i&&(i={});var n=e.version&&Number(e.version.split(".")[0])||-1;if("production"!==t.env.NODE_ENV&&I.installed)return void a("already installed.");if("production"!==t.env.NODE_ENV&&n<2)return void a("vue-i18n ("+I.version+") need to use Vue 2.0 or later (Vue: "+e.version+").");var o="en";y(e,o),$(e,Y),k(e,Y),A(e,Y,o),K(e)}function y(e,t){var a=e.config.silent;e.config.silent=!0,Y||(Y=new e({data:{lang:t,locales:{}}})),e.config.silent=a}var _,b,w,$=function(e,t){e.locale=function(e,n,o){return void 0===n?t.locales[e]:void(null===n?(t.locales[e]=void 0,delete t.locales[e]):i(e,n,function(i){i?t.$set(t.locales,e,i):a("failed set `"+e+"` locale"),o&&o()}))}},k=function(e,t){var a=e.prototype._init;e.prototype._init=function(e){var i=this;a.call(this,e),this.$parent||(this._$lang=t,this._langUnwatch=this._$lang.$watch("$data",function(e,t){i.$forceUpdate()},{deep:!0}))};var i=e.prototype._destroy;e.prototype._destroy=function(){!this.$parent&&this._langUnwatch&&(this._langUnwatch(),this._langUnwatch=null,this._$lang=null),i.apply(this,arguments)}},C=Object.prototype.toString,x="[object Object]",O=Object.prototype.hasOwnProperty,R=null,D=null,A=function(e,t,a){function i(e,t){var a=new n(t,e,null,{lazy:!0});return function(){return a.dirty&&a.evaluate(),s&&s.target&&a.depend(),a.value}}var n=o(t),s=r(t);Object.defineProperty(e.config,"lang",{enumerable:!0,configurable:!0,get:i(function(){return t.lang},t),set:c(function(e){t.lang=e},t)}),w=a,Object.defineProperty(e.config,"fallbackLang",{enumerable:!0,configurable:!0,get:function(){return w},set:function(e){w=e}}),Object.defineProperty(e.config,"missingHandler",{enumerable:!0,configurable:!0,get:function(){return R},set:function(e){R=e}}),Object.defineProperty(e.config,"i18nFormatter",{enumerable:!0,configurable:!0,get:function(){return D},set:function(e){D=e}})},P=/(%|)\{([0-9a-zA-Z_]+)\}/g,S=function(e){function t(e){for(var t=[],a=arguments.length-1;a-- >0;)t[a]=arguments[a+1];return t=1===t.length&&"object"==typeof t[0]?t[0]:{},t&&t.hasOwnProperty||(t={}),e.replace(P,function(a,i,n,o){var r;return"{"===e[o-1]&&"}"===e[o+a.length]?n:(r=m(t,n)?t[n]:a,s(r)?"":r)})}return t},T=Object.create(null),L=0,z=1,F=2,M=3,E=0,N=1,j=2,V=3,U=4,Q=5,q=6,B=7,H=8,G=[];G[E]={ws:[E],ident:[V,L],"[":[U],eof:[B]},G[N]={ws:[N],".":[j],"[":[U],eof:[B]},G[j]={ws:[j],ident:[V,L],0:[V,L],number:[V,L]},G[V]={ident:[V,L],0:[V,L],number:[V,L],ws:[N,z],".":[j,z],"[":[U,z],eof:[B,z]},G[U]={"'":[Q,L],'"':[q,L],"[":[U,F],"]":[N,M],eof:H,"else":[U,L]},G[Q]={"'":[U,L],eof:H,"else":[Q,L]},G[q]={'"':[U,L],eof:H,"else":[q,L]};var Y,Z=/^\s?(true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/,J=function(e){function t(e){if(null===e||void 0===e)return!0;if(Array.isArray(e)){if(e.length>0)return!1;if(0===e.length)return!0}else if(d(e))for(var t in e)if(m(e,t))return!1;return!0}function a(e,a){if(!l(e))return null;var i=h(a);if(t(i))return null;for(var n=i.length,o=null,r=e,s=0;s<n;){var c=r[i[s]];if(void 0===c){r=null;break}r=c,s++}return o=r}return a},K=function(e){function i(){for(var t=[],a=arguments.length;a--;)t[a]=arguments[a];var i=e.config.lang,n=e.config.fallbackLang;return 1===t.length?l(t[0])||Array.isArray(t[0])?t=t[0]:"string"==typeof t[0]&&(i=t[0]):2===t.length&&("string"==typeof t[0]&&(i=t[0]),(l(t[1])||Array.isArray(t[1]))&&(t=t[1])),{lang:i,fallback:n,params:t}}function n(e,t){return!(!e||!t)&&!s(h(e,t))}function o(t,i,n){if(!t)return null;var r=h(t,i);if(Array.isArray(r))return r;if(s(r)&&(r=t[i]),s(r))return null;if("string"!=typeof r)return a("Value of key '"+i+"' is not a string!"),null;if(r.indexOf("@:")>=0){var c=r.match(/(@:[\w|.]+)/g);for(var l in c){var d=c[l],m=d.substr(2),u=o(t,m,n);r=r.replace(d,u)}}return n?e.config.i18nFormatter?e.config.i18nFormatter.apply(null,[r].concat(n)):v(r,n):r}function r(e,i,n,r,c){var l=null;return l=o(e(i),r,c),s(l)?(l=o(e(n),r,c),s(l)?null:("production"!==t.env.NODE_ENV&&a('Fall back to translate the keypath "'+r+'" with "'+n+'" language.'),l)):l}function d(i,n,o,r){return s(r)?(e.config.missingHandler?e.config.missingHandler.apply(null,[i,n,o]):"production"!==t.env.NODE_ENV&&a('Cannot translate the value of keypath "'+n+'". Use the value of keypath as default'),n):r}function m(t){return e.locale(t)}function u(e){return this.$options.locales[e]}function p(e){return e?e>1?1:0:1}function g(e,t){return e=Math.abs(e),2===t?p(e):e?Math.min(e,2):0}function f(e,t){if(!e&&"string"!=typeof e)return null;var a=e.split("|");return t=g(t,a.length),a[t]?a[t].trim():e}var v=S(e),h=J(e);return e.t=function(e){for(var t=[],a=arguments.length-1;a-- >0;)t[a]=arguments[a+1];if(!e)return"";var n=i.apply(void 0,t),o=n.lang,s=n.fallback,c=n.params;return d(o,e,null,r(m,o,s,e,c))},e.tc=function(t,a){for(var i=[],n=arguments.length-2;n-- >0;)i[n]=arguments[n+2];return f(e.t.apply(e,[t].concat(i)),a)},e.te=function(e){for(var t=[],a=arguments.length-1;a-- >0;)t[a]=arguments[a+1];var o=i.apply(void 0,t),r=o.lang;return n(m(r),e)},e.prototype.$t=function(e){for(var t=[],a=arguments.length-1;a-- >0;)t[a]=arguments[a+1];if(!e)return"";var n=i.apply(void 0,t),o=n.lang,s=n.fallback,l=n.params,p=null;return this.$options.locales&&(p=r(c(u,this),o,s,e,l))?p:d(o,e,this,r(m,o,s,e,l))},e.prototype.$tc=function(e,t){for(var a=[],i=arguments.length-2;i-- >0;)a[i]=arguments[i+2];return"number"!=typeof t&&"undefined"!=typeof t?e:f((n=this).$t.apply(n,[e].concat(a)),t);var n},e.prototype.$te=function(e){for(var t=[],a=arguments.length-1;a-- >0;)t[a]=arguments[a+1];var o=i.apply(void 0,t),r=o.lang,s=!1;return this.$options.locales&&(s=n(c(u)(r),e)),s||(s=n(m(r),e)),s},e.mixin({computed:{$lang:function(){return e.config.lang}}}),e};I.version="__VERSION__","undefined"!=typeof window&&window.Vue&&window.Vue.use(I),e.exports=I}).call(t,a(9))},function(e,t,a){var i,n;i=a(6);var o=a(10);n=i=i||{},"object"!=typeof i["default"]&&"function"!=typeof i["default"]||(n=i=i["default"]),"function"==typeof n&&(n=n.options),n.render=o.render,n.staticRenderFns=o.staticRenderFns,e.exports=i},function(e,t,a){var i,n;i=a(7);var o=a(12);n=i=i||{},"object"!=typeof i["default"]&&"function"!=typeof i["default"]||(n=i=i["default"]),"function"==typeof n&&(n=n.options),n.render=o.render,n.staticRenderFns=o.staticRenderFns,e.exports=i},function(e,t,a){var i,n;i=a(8);var o=a(11);n=i=i||{},"object"!=typeof i["default"]&&"function"!=typeof i["default"]||(n=i=i["default"]),"function"==typeof n&&(n=n.options),n.render=o.render,n.staticRenderFns=o.staticRenderFns,e.exports=i},function(e,t,a){"use strict";t["default"]={mounted:function(){var e=this;this.$parent.hasQuestionData()?this.options=this.$parent.getQuestionData():this.options=[{id:0,option:"",image:"",option_match:"",image_match:""},{id:0,option:"",image:"",option_match:"",image_match:""},{id:0,option:"",image:"",option_match:"",image_match:""},{id:0,option:"",image:"",option_match:"",image_match:""}],this.$parent.hasRemovedImagesData()&&(this.removedImages=this.$parent.getRemovedImagesData()),this.$parent.hasRemovedImageMatchesData()&&(this.removedMatchImages=this.$parent.getRemovedImageMatchesData()),this.$nextTick(function(){$(e.$el).find('[data-toggle="tooltip"]').tooltip()})},data:function(){return{options:[],removedImages:[],removedMatchImages:[]}},methods:{addImage:function(e,t){$(this.$refs[t][e]).trigger("click")},removeOption:function(e){this.options.length<2||this.options.splice(e,1)},addOption:function(){var e=this;this.options.push({id:0,option:"",image:"",option_match:"",image_match:""}),this.$nextTick(function(){$(e.$el).find('[data-toggle="tooltip"]').tooltip()})},imageSelected:function(e,t,a){var i=this;if(!(!e.target.files.length>0)){"add-match-image"===a?(this.options[t].imageMatchPreview=!1,this.options[t].imageMatchSelected=!0,this.options[t].image_match=e.target.files[0].name):(this.options[t].imagePreview=!1,this.options[t].imageSelected=!0,this.options[t].image=e.target.files[0].name);var n=$(this.$refs[a][t]);this.$nextTick(function(){var e="add-match-image"===a?"image_match":"image";n.data&&n.data("original-title")?n.attr("data-original-title",n.attr("title")).removeAttr("title").tooltip("show"):(n.attr("data-original-title",i.options[t][e]),n.attr("title",i.options[t][e]))})}},canRemoveSelectedImage:function(e,t){var a=t?"imageMatchSelected":"imageSelected";return!!this.options[e][a]},canRemoveImage:function(e,t){var a=t?"image_match_url":"image_url";return!!this.options[e][a]&&!this.canRemoveSelectedImage(e,t)},hasImageRemoved:function(e,t){var a=t?"removedMatchImages":"removedImages";return this[a].indexOf(this.options[e].id)!==-1},removeSelectedImage:function(e,t){if(this.canRemoveSelectedImage(e,t)){var a=this.options[e],i=t?"image_match":"image",n=t?"image_match_url":"image_url",o=t?"imageMatchPreview":"imagePreview",r=t?"imageMatchSelected":"imageSelected",s=t?"option-match-image":"option-image",c=t?"add-match-image":"add-image";a[n]?(a[i]=a[n].split("/").pop(),a[o]=!0):a[i]="",a[r]=!1,$(this.$refs[s][e]).val("");var l=$(this.$refs[c][e]);this.$nextTick(function(){a[i]?l.attr("data-original-title",a[i]):(l.attr("title",""),l.attr("data-original-title",""))})}},removeImage:function(e,t){if(this.canRemoveImage(e,t)){var a=t?"removed-option-match-images":"removed-option-images";$(this.$refs[a][e]).trigger("click")}}}}},function(e,t,a){"use strict";var i=a(0),n=a(1);t["default"]={mixins:[i.a,n.a],mounted:function(){var e=this;this.$parent.hasQuestionData()?(this.options=this.$parent.getQuestionData(),this.enforceCorrectOption()):this.options=[{id:0,option:"",correct:!0,image:""},{id:0,option:"",correct:!1,image:""},{id:0,option:"",correct:!1,image:""},{id:0,option:"",correct:!1,image:""}],this.$parent.hasRemovedImagesData()&&(this.removedImages=this.$parent.getRemovedImagesData()),this.$nextTick(function(){$(e.$el).find('[data-toggle="tooltip"]').tooltip()})},data:function(){return{options:[],removedImages:[]}},methods:{addImage:function(e){$(this.$refs["option-image"][e]).trigger("click")},canRemoveOptions:function(){return this.options.length>2},removeOption:function(e){this.canRemoveOptions()&&(this.options.splice(e,1),this.enforceCorrectOption())},addOption:function(){var e=this;this.options.push({id:0,option:"",correct:!1,image:""}),this.$nextTick(function(){$(e.$el).find('[data-toggle="tooltip"]').tooltip()})},hasCorrectOptions:function(){return _.some(this.options,["correct",!0])},enforceCorrectOption:function(){this.hasCorrectOptions()||(this.options[0].correct=!0)}}}},function(e,t,a){"use strict";var i=a(0),n=a(1);t["default"]={mixins:[i.a,n.a],mounted:function(){var e=this;if(this.$parent.hasQuestionData()){this.options=this.$parent.getQuestionData();var t=_.findIndex(this.options,["correct",!0]);this.checkedOption=t!==-1?t:0}else this.options=[{id:0,option:"",image:""},{id:0,option:"",image:""},{id:0,option:"",image:""},{id:0,option:"",image:""}];this.$parent.hasRemovedImagesData()&&(this.removedImages=this.$parent.getRemovedImagesData()),this.$nextTick(function(){$(e.$el).find('[data-toggle="tooltip"]').tooltip()})},data:function(){return{options:[],checkedOption:0,removedImages:[]}},methods:{addImage:function(e){$(this.$refs["option-image"][e]).trigger("click")},canRemoveOptions:function(){return this.options.length>2},removeOption:function(e){this.canRemoveOptions()&&(this.options.splice(e,1),this.checkedOption===e?this.checkedOption=0:this.checkedOption>e&&(this.checkedOption-=1))},addOption:function(){var e=this;this.options.push({id:0,option:"",image:""}),this.$nextTick(function(){$(e.$el).find('[data-toggle="tooltip"]').tooltip()})}}}},function(e,t){function a(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function n(e){if(d===setTimeout)return setTimeout(e,0);if((d===a||!d)&&setTimeout)return d=setTimeout,setTimeout(e,0);try{return d(e,0)}catch(t){try{return d.call(null,e,0)}catch(t){return d.call(this,e,0)}}}function o(e){if(m===clearTimeout)return clearTimeout(e);if((m===i||!m)&&clearTimeout)return m=clearTimeout,clearTimeout(e);try{return m(e)}catch(t){try{return m.call(null,e)}catch(t){return m.call(this,e)}}}function r(){f&&p&&(f=!1,p.length?g=p.concat(g):v=-1,g.length&&s())}function s(){if(!f){var e=n(r);f=!0;for(var t=g.length;t;){for(p=g,g=[];++v<t;)p&&p[v].run();v=-1,t=g.length}p=null,f=!1,o(e)}}function c(e,t){this.fun=e,this.array=t}function l(){}var d,m,u=e.exports={};!function(){try{d="function"==typeof setTimeout?setTimeout:a}catch(e){d=a}try{m="function"==typeof clearTimeout?clearTimeout:i}catch(e){m=i}}();var p,g=[],f=!1,v=-1;u.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var a=1;a<arguments.length;a++)t[a-1]=arguments[a];g.push(new c(e,t)),1!==g.length||f||n(s)},c.prototype.run=function(){this.fun.apply(null,this.array)},u.title="browser",u.browser=!0,u.env={},u.argv=[],u.version="",u.versions={},u.on=l,u.addListener=l,u.once=l,u.off=l,u.removeListener=l,u.removeAllListeners=l,u.emit=l,u.prependListener=l,u.prependOnceListener=l,u.listeners=function(e){return[]},u.binding=function(e){throw new Error("process.binding is not supported")},u.cwd=function(){return"/"},u.chdir=function(e){throw new Error("process.chdir is not supported")},u.umask=function(){return 0}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"sz-question",attrs:{id:"question-type-match-pairs"}},[e._l(e.options,function(t,i){return a("div",{staticClass:"row sz-option-row"},[a("div",{staticClass:"col-xs-5"},[a("div",{staticClass:"input-group"},[e.$parent.hasPreview(t)?a("span",{staticClass:"input-group-addon"},[a("a",{attrs:{target:"_blank",href:e.$parent.getOptionImageUrl(t.image)}},[a("img",{staticClass:"sz-option-image-small",attrs:{alt:"option-image",src:e.$parent.getOptionImageUrl(t.image)}})])]):e._e(),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.id,expression:"option.id"}],attrs:{type:"hidden",name:"ids[]"},domProps:{value:t.id},on:{input:function(a){a.target.composing||e.$set(t,"id",a.target.value)}}}),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.option,expression:"option.option"}],staticClass:"form-control",attrs:{type:"text",name:"options[]",placeholder:e.$t("option-text")},domProps:{value:t.option},on:{input:function(a){a.target.composing||e.$set(t,"option",a.target.value)}}})])]),e._v(" "),a("div",{staticClass:"col-xs-5"},[a("div",{staticClass:"input-group"},[e.$parent.hasPreview(t,"image_match","imageMatchPreview")?a("span",{staticClass:"input-group-addon"},[a("a",{attrs:{target:"_blank",href:e.$parent.getOptionImageUrl(t.image_match)}},[a("img",{staticClass:"sz-option-image-small",attrs:{alt:"option-match-image",src:e.$parent.getOptionImageUrl(t.image_match)}})])]):e._e(),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.option_match,expression:"option.option_match"}],staticClass:"form-control",attrs:{type:"text",name:"matches[]",placeholder:e.$t("option-text")},domProps:{value:t.option_match},on:{input:function(a){a.target.composing||e.$set(t,"option_match",a.target.value)}}})])]),e._v(" "),a("div",{staticClass:"col-xs-2 sz-btn-controls"},[a("a",{staticClass:"btn sz-option-remove","class":{disabled:e.options.length<2},attrs:{href:"#",tabindex:"-1"},on:{click:function(t){t.preventDefault(),e.removeOption(i)}}},[a("i",{staticClass:"mdi mdi-close-circle-outline",attrs:{"aria-hidden":"true"}})])]),e._v(" "),a("div",{staticClass:"col-xs-5"},[a("input",{ref:"option-image",refInFor:!0,staticStyle:{display:"none"},attrs:{type:"file",accept:"image/jpeg, image/png",capture:"camera",name:"option-image-"+i},on:{change:function(t){e.imageSelected(t,i,"add-image")}}}),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.removedImages,expression:"removedImages"}],ref:"removed-option-images",refInFor:!0,staticStyle:{display:"none"},attrs:{type:"checkbox",name:"removed-option-images[]"},domProps:{value:t.id,checked:Array.isArray(e.removedImages)?e._i(e.removedImages,t.id)>-1:e.removedImages},on:{change:function(a){var i=e.removedImages,n=a.target,o=!!n.checked;if(Array.isArray(i)){var r=t.id,s=e._i(i,r);n.checked?s<0&&(e.removedImages=i.concat([r])):s>-1&&(e.removedImages=i.slice(0,s).concat(i.slice(s+1)))}else e.removedImages=o}}}),e._v(" "),a("div",{staticClass:"btn-group btn-group-sm",attrs:{role:"group"}},[a("a",{ref:"add-image",refInFor:!0,staticClass:"btn sz-image-add","class":{"sz-option-has-image":t.image},attrs:{href:"#",tabindex:"-1",title:t.image,"data-toggle":"tooltip","data-placement":"top"},on:{click:function(t){t.preventDefault(),e.addImage(i,"option-image")}}},[a("i",{staticClass:"mdi mdi-camera",attrs:{"aria-hidden":"true"}})]),e._v(" "),t.id&&t.image_url?a("a",{staticClass:"btn btn-danger","class":{disabled:!e.canRemoveImage(i,!1)},attrs:{href:"#",tabindex:"-1","data-toggle":"tooltip","data-placement":"top",title:e.$t("remove-existing-image")},on:{click:function(t){t.preventDefault(),e.removeImage(i,!1)}}},[e.hasImageRemoved(i,!1)?e._e():a("i",{staticClass:"mdi mdi-checkbox-blank-outline",attrs:{"aria-hidden":"true"}}),e._v(" "),e.hasImageRemoved(i,!1)?a("i",{staticClass:"mdi mdi-checkbox-marked-outline",attrs:{"aria-hidden":"true"}}):e._e()]):e._e(),e._v(" "),a("a",{staticClass:"btn btn-warning","class":{disabled:!e.canRemoveSelectedImage(i,!1)},attrs:{href:"#",tabindex:"-1","data-toggle":"tooltip","data-placement":"top",title:e.$t("remove-selected-image")},on:{click:function(t){t.preventDefault(),e.removeSelectedImage(i,!1)}}},[a("i",{staticClass:"mdi mdi-delete",attrs:{"aria-hidden":"true"}})])])]),e._v(" "),a("div",{staticClass:"col-xs-5"},[a("input",{ref:"option-match-image",refInFor:!0,staticStyle:{display:"none"},attrs:{type:"file",accept:"image/jpeg, image/png",capture:"camera",name:"option-match-image-"+i},on:{change:function(t){e.imageSelected(t,i,"add-match-image")}}}),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.removedMatchImages,expression:"removedMatchImages"}],ref:"removed-option-match-images",refInFor:!0,staticStyle:{display:"none"},attrs:{type:"checkbox",name:"removed-option-match-images[]"},domProps:{value:t.id,checked:Array.isArray(e.removedMatchImages)?e._i(e.removedMatchImages,t.id)>-1:e.removedMatchImages},on:{change:function(a){var i=e.removedMatchImages,n=a.target,o=!!n.checked;if(Array.isArray(i)){var r=t.id,s=e._i(i,r);n.checked?s<0&&(e.removedMatchImages=i.concat([r])):s>-1&&(e.removedMatchImages=i.slice(0,s).concat(i.slice(s+1)))}else e.removedMatchImages=o}}}),e._v(" "),a("div",{staticClass:"btn-group btn-group-sm",attrs:{role:"group"}},[a("a",{ref:"add-match-image",refInFor:!0,staticClass:"btn sz-image-add","class":{"sz-option-has-image":t.image_match},attrs:{href:"#",tabindex:"-1",title:t.image_match,"data-toggle":"tooltip","data-placement":"top"},on:{click:function(t){t.preventDefault(),e.addImage(i,"option-match-image")}}},[a("i",{staticClass:"mdi mdi-camera",attrs:{"aria-hidden":"true"}})]),e._v(" "),t.id&&t.image_match_url?a("a",{staticClass:"btn btn-danger","class":{disabled:!e.canRemoveImage(i,!0)},attrs:{href:"#",tabindex:"-1","data-toggle":"tooltip","data-placement":"top",title:e.$t("remove-existing-image")},on:{click:function(t){t.preventDefault(),e.removeImage(i,!0)}}},[e.hasImageRemoved(i,!0)?e._e():a("i",{staticClass:"mdi mdi-checkbox-blank-outline",attrs:{"aria-hidden":"true"}}),e._v(" "),e.hasImageRemoved(i,!0)?a("i",{staticClass:"mdi mdi-checkbox-marked-outline",attrs:{"aria-hidden":"true"}}):e._e()]):e._e(),e._v(" "),a("a",{staticClass:"btn btn-warning","class":{disabled:!e.canRemoveSelectedImage(i,!0)},attrs:{href:"#",tabindex:"-1","data-toggle":"tooltip","data-placement":"top",title:e.$t("remove-selected-image")},on:{click:function(t){t.preventDefault(),e.removeSelectedImage(i,!0)}}},[a("i",{staticClass:"mdi mdi-delete",attrs:{"aria-hidden":"true"}})])])])])}),e._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-xs-12"},[a("a",{staticClass:"btn",attrs:{href:"#",tabindex:"-1"},on:{click:function(t){return t.preventDefault(),e.addOption(t)}}},[a("i",{staticClass:"mdi mdi-plus-circle-outline",attrs:{"aria-hidden":"true",title:e.$t("add-option")}})])])])],2)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"sz-question",attrs:{id:"question-type-one-correct-answer"}},[e._l(e.options,function(t,i){return a("div",{staticClass:"row sz-option-row"},[a("div",{staticClass:"col-xs-10"},[a("div",{staticClass:"input-group"},[e.$parent.hasPreview(t)?a("span",{staticClass:"input-group-addon"},[a("a",{attrs:{target:"_blank",href:e.$parent.getOptionImageUrl(t.image)}},[a("img",{staticClass:"sz-option-image-small","class":{removed:e.hasImageRemoved(i)},attrs:{alt:"option-image",src:e.$parent.getOptionImageUrl(t.image)}})])]):e._e(),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.id,expression:"option.id"}],attrs:{type:"hidden",name:"ids[]"},domProps:{value:t.id},on:{input:function(a){a.target.composing||e.$set(t,"id",a.target.value)}}}),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.option,expression:"option.option"}],staticClass:"form-control",attrs:{type:"text",name:"options[]",placeholder:e.$t("option-text")},domProps:{value:t.option},on:{input:function(a){a.target.composing||e.$set(t,"option",a.target.value)}}}),e._v(" "),a("span",{staticClass:"input-group-addon"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.checkedOption,expression:"checkedOption"}],attrs:{type:"radio",name:"correct","aria-label":"Correct",tabindex:"-1","data-toggle":"tooltip","data-placement":"left",title:e.$t("mark-option-as-correct")},domProps:{value:i,checked:e._q(e.checkedOption,i)},on:{change:function(t){e.checkedOption=i}}})])])]),e._v(" "),a("div",{staticClass:"col-xs-2 sz-btn-controls"},[a("a",{staticClass:"btn sz-option-remove","class":{disabled:!e.canRemoveOptions()},attrs:{href:"#",tabindex:"-1"},on:{click:function(t){t.preventDefault(),e.removeOption(i)}}},[a("i",{staticClass:"mdi mdi-close-circle-outline",attrs:{"aria-hidden":"true"}})])]),e._v(" "),a("div",{staticClass:"col-xs-12"},[a("input",{ref:"option-image",refInFor:!0,staticStyle:{display:"none"},attrs:{type:"file",accept:"image/jpeg, image/png",capture:"camera",name:"option-image-"+i},on:{change:function(t){e.imageSelected(t,i)}}}),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.removedImages,expression:"removedImages"}],ref:"removed-option-images",refInFor:!0,staticStyle:{display:"none"},attrs:{type:"checkbox",name:"removed-option-images[]"},domProps:{value:t.id,checked:Array.isArray(e.removedImages)?e._i(e.removedImages,t.id)>-1:e.removedImages},on:{change:function(a){var i=e.removedImages,n=a.target,o=!!n.checked;if(Array.isArray(i)){var r=t.id,s=e._i(i,r);n.checked?s<0&&(e.removedImages=i.concat([r])):s>-1&&(e.removedImages=i.slice(0,s).concat(i.slice(s+1)))}else e.removedImages=o}}}),e._v(" "),a("div",{staticClass:"btn-group btn-group-sm",attrs:{role:"group"}},[a("a",{ref:"add-image",refInFor:!0,staticClass:"btn sz-image-add","class":{"sz-option-has-image":t.image},attrs:{href:"#",tabindex:"-1",title:t.image,"data-toggle":"tooltip","data-placement":"top"},on:{click:function(t){t.preventDefault(),e.addImage(i)}}},[a("i",{staticClass:"mdi mdi-camera",attrs:{"aria-hidden":"true"}})]),e._v(" "),t.id&&t.image_url?a("a",{staticClass:"btn btn-danger","class":{disabled:!e.canRemoveImage(i)},attrs:{href:"#",tabindex:"-1","data-toggle":"tooltip","data-placement":"top",title:e.$t("remove-existing-image")},on:{click:function(t){t.preventDefault(),e.removeImage(i)}}},[e.hasImageRemoved(i)?e._e():a("i",{staticClass:"mdi mdi-checkbox-blank-outline",attrs:{"aria-hidden":"true"}}),e._v(" "),e.hasImageRemoved(i)?a("i",{staticClass:"mdi mdi-checkbox-marked-outline",attrs:{"aria-hidden":"true"}}):e._e()]):e._e(),e._v(" "),a("a",{staticClass:"btn btn-warning","class":{disabled:!e.canRemoveSelectedImage(i)},attrs:{href:"#",tabindex:"-1","data-toggle":"tooltip","data-placement":"top",title:e.$t("remove-selected-image")},on:{click:function(t){t.preventDefault(),e.removeSelectedImage(i)}}},[a("i",{staticClass:"mdi mdi-delete",attrs:{"aria-hidden":"true"}})])])])])}),e._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-xs-12"},[a("a",{staticClass:"btn",attrs:{href:"#",tabindex:"-1"},on:{click:function(t){return t.preventDefault(),e.addOption(t)}}},[a("i",{staticClass:"mdi mdi-plus-circle-outline",attrs:{"aria-hidden":"true",title:e.$t("add-option")}})])])])],2)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"sz-question",attrs:{id:"question-type-multiple-correct-answers"}},[e._l(e.options,function(t,i){return a("div",{staticClass:"row sz-option-row"},[a("div",{staticClass:"col-xs-10"},[a("div",{staticClass:"input-group"},[e.$parent.hasPreview(t)?a("span",{staticClass:"input-group-addon"},[a("a",{attrs:{target:"_blank",href:e.$parent.getOptionImageUrl(t.image)}},[a("img",{staticClass:"sz-option-image-small","class":{removed:e.hasImageRemoved(i)},attrs:{alt:"option-image",src:e.$parent.getOptionImageUrl(t.image)}})])]):e._e(),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.id,expression:"option.id"}],attrs:{type:"hidden",name:"ids[]"},domProps:{value:t.id},on:{input:function(a){a.target.composing||e.$set(t,"id",a.target.value)}}}),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.option,expression:"option.option"}],staticClass:"form-control",attrs:{type:"text",name:"options[]",placeholder:e.$t("option-text")},domProps:{value:t.option},on:{input:function(a){a.target.composing||e.$set(t,"option",a.target.value)}}}),e._v(" "),a("span",{staticClass:"input-group-addon"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.correct,expression:"option.correct"}],attrs:{type:"checkbox",name:"correct[]","aria-label":"Correct",tabindex:"-1","data-toggle":"tooltip","data-placement":"left",title:e.$t("mark-option-as-correct")},domProps:{value:i,checked:Array.isArray(t.correct)?e._i(t.correct,i)>-1:t.correct},on:{change:[function(a){var n=t.correct,o=a.target,r=!!o.checked;if(Array.isArray(n)){var s=i,c=e._i(n,s);o.checked?c<0&&e.$set(t,"correct",n.concat([s])):c>-1&&e.$set(t,"correct",n.slice(0,c).concat(n.slice(c+1)))}else e.$set(t,"correct",r)},function(t){e.enforceCorrectOption()}]}})])])]),e._v(" "),a("div",{staticClass:"col-xs-2 sz-btn-controls"},[a("a",{staticClass:"btn sz-option-remove","class":{disabled:!e.canRemoveOptions()},attrs:{href:"#",tabindex:"-1"},on:{click:function(t){t.preventDefault(),e.removeOption(i)}}},[a("i",{staticClass:"mdi mdi-close-circle-outline",attrs:{"aria-hidden":"true"}})])]),e._v(" "),a("div",{staticClass:"col-xs-12"},[a("input",{ref:"option-image",refInFor:!0,staticStyle:{display:"none"},attrs:{type:"file",accept:"image/jpeg, image/png",capture:"camera",name:"option-image-"+i},on:{change:function(t){e.imageSelected(t,i)}}}),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.removedImages,expression:"removedImages"}],ref:"removed-option-images",refInFor:!0,staticStyle:{display:"none"},attrs:{type:"checkbox",name:"removed-option-images[]"},domProps:{value:t.id,checked:Array.isArray(e.removedImages)?e._i(e.removedImages,t.id)>-1:e.removedImages
},on:{change:function(a){var i=e.removedImages,n=a.target,o=!!n.checked;if(Array.isArray(i)){var r=t.id,s=e._i(i,r);n.checked?s<0&&(e.removedImages=i.concat([r])):s>-1&&(e.removedImages=i.slice(0,s).concat(i.slice(s+1)))}else e.removedImages=o}}}),e._v(" "),a("div",{staticClass:"btn-group btn-group-sm",attrs:{role:"group"}},[a("a",{ref:"add-image",refInFor:!0,staticClass:"btn sz-image-add","class":{"sz-option-has-image":t.image},attrs:{href:"#",tabindex:"-1",title:t.image,"data-toggle":"tooltip","data-placement":"top"},on:{click:function(t){t.preventDefault(),e.addImage(i)}}},[a("i",{staticClass:"mdi mdi-camera",attrs:{"aria-hidden":"true"}})]),e._v(" "),t.id&&t.image_url?a("a",{staticClass:"btn btn-danger btn-xs","class":{disabled:!e.canRemoveImage(i)},attrs:{href:"#",tabindex:"-1","data-toggle":"tooltip","data-placement":"top",title:e.$t("remove-existing-image")},on:{click:function(t){t.preventDefault(),e.removeImage(i)}}},[e.hasImageRemoved(i)?e._e():a("i",{staticClass:"mdi mdi-checkbox-blank-outline",attrs:{"aria-hidden":"true"}}),e._v(" "),e.hasImageRemoved(i)?a("i",{staticClass:"mdi mdi-checkbox-marked-outline",attrs:{"aria-hidden":"true"}}):e._e()]):e._e(),e._v(" "),a("a",{staticClass:"btn btn-warning btn-xs","class":{disabled:!e.canRemoveSelectedImage(i)},attrs:{href:"#",tabindex:"-1","data-toggle":"tooltip","data-placement":"top",title:e.$t("remove-selected-image")},on:{click:function(t){t.preventDefault(),e.removeSelectedImage(i)}}},[a("i",{staticClass:"mdi mdi-delete",attrs:{"aria-hidden":"true"}})])])])])}),e._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-xs-12"},[a("a",{staticClass:"btn",attrs:{href:"#",tabindex:"-1"},on:{click:function(t){return t.preventDefault(),e.addOption(t)}}},[a("i",{staticClass:"mdi mdi-plus-circle-outline",attrs:{"aria-hidden":"true",title:e.$t("add-option")}})])])])],2)},staticRenderFns:[]}},function(e,t,a){window.initMap=function(){function e(e){return window.Laravel.translations&&window.Laravel.translations.hasOwnProperty(e)?window.Laravel.translations[e]:(console.warn("Could not find translation for: "+e),e)}function t(t,a){if(!navigator.geolocation)return!1;var i=document.createElement("div"),n=document.createElement("div");n.id="sz-map-controls",i.appendChild(n);var o=document.createElement("i");o.className="mdi mdi-target",o.title=e("set-current-position"),n.appendChild(o);var r=!1,s=document.getElementById("zoo");o.addEventListener("click",function(){r||(r=!0,s.disabled=!0,o.style.color="#cccccc",navigator.geolocation.getCurrentPosition(function(e){o.style.color=null,s.disabled=!1,r=!1,a(e)},function(t){o.style.color=null,s.disabled=!1,r=!1,alert(e("geolocation-error")),console.error("Geolocation error",t)},{enableHighAccuracy:!0}))}),t.controls[google.maps.ControlPosition.TOP_RIGHT].push(i)}function a(e){return new google.maps.GroundOverlay(window.Laravel.baseUrl+"/img/map/overlays/skansen.png",{north:59.329167,south:59.324011,east:18.111242,west:18.099022},{clickable:!1,map:e})}function i(e){document.getElementById("latitude").value="function"==typeof e.lat?e.lat():e.lat,document.getElementById("longitude").value="function"==typeof e.lng?e.lng():e.lng}function n(e,t){var a=new google.maps.Marker({animation:google.maps.Animation.DROP,title:"",position:t,map:e,draggable:!0});return a.addListener("dragend",function(e){i(e.latLng)}),a}function o(e){e.setAnimation(google.maps.Animation.BOUNCE),setTimeout(function(){e.setAnimation(null)},500)}function r(e,t,a){i(e),a.panTo(e),t.setPosition(e),o(t)}function s(){var e=document.getElementById("latitude").value,t=document.getElementById("longitude").value;return e&&t?{lat:Number(e),lng:Number(t)}:window.Laravel.zooGeolocationOptions[$(document).find('select[name="zoo"]').val()]}var c,l,d,m=s();c={center:m,zoom:18,mapTypeId:google.maps.MapTypeId.HYBRID,disableDefaultUI:!0,zoomControl:!0,streetViewControl:!0,styles:[{featureType:"poi",stylers:[{visibility:"off"}]},{featureType:"transit.station",stylers:[{visibility:"off"}]}]},l=new google.maps.Map(document.getElementById("map"),c),i(m),d=n(l,m),t(l,function(e){var t={lat:e.coords.latitude,lng:e.coords.longitude};r(t,d,l)}),a(l),$(document).find('select[name="zoo"]').on("change",function(){var e=$(this).val(),t=window.Laravel.zooGeolocationOptions[e];r(t,d,l)});var u,p,g=!1;l.addListener("mousedown",function(e){u=(new Date).getTime()}),l.addListener("mouseup",function(e){p=(new Date).getTime(),g=!(p-u<500)}),l.addListener("click",function(e){g&&(i(e.latLng),d.setPosition(e.latLng),o(d))})};var i=a(2);Vue.use(i),Vue.config.lang=window.Laravel.locale,Vue.locale(window.Laravel.locale,_.cloneDeep(window.Laravel.translations)),Vue.component("one-correct-answer",a(5)),Vue.component("multiple-correct-answers",a(4)),Vue.component("match-pairs",a(3));new Vue({el:"form#"+window.Laravel.activityItemFormId,mounted:function(){var e=this,t=this;$('[data-toggle="tooltip"]').tooltip(),window.Laravel.hasImage&&(t.hasImage=!0),$(t.$refs.image).on("change",function(t){e.canResetImage=!0})},data:function(){return{questionType:$('select[name="type"]').val(),canResetImage:!1,hasImage:!1}},methods:{hasQuestionData:function(){return window.Laravel.activityItemQuestionData&&window.Laravel.activityItemQuestionData.length>0},getQuestionData:function(){return window.Laravel.activityItemQuestionData},changedQuestionType:function(){this.hasQuestionData()&&delete window.Laravel.activityItemQuestionData},getOptionImageUrl:function(e){return window.Laravel.activityItemAssetsBaseUrl+"/"+e},hasPreview:function(e,t,a){return t=t||"image",a=a||"imagePreview",!(!e.id||!e[t]||e[a]===!1)},resetImage:function(e){e.preventDefault(),$(this.$refs.image).val()&&(this.canResetImage=!1,$(this.$refs.image).val(""))},canRemoveImage:function(){return!this.hasImage||this.canResetImage},hasRemovedImagesData:function(){return window.Laravel.removedImages&&window.Laravel.removedImages.length>0},getRemovedImagesData:function(){return window.Laravel.removedImages},hasRemovedImageMatchesData:function(){return window.Laravel.removedImageMatches&&window.Laravel.removedImageMatches.length>0},getRemovedImageMatchesData:function(){return window.Laravel.removedImageMatches}}})}]);