!function(t){function e(n){if(i[n])return i[n].exports;var a=i[n]={i:n,l:!1,exports:{}};return t[n].call(a.exports,a,a.exports,e),a.l=!0,a.exports}var i={};return e.m=t,e.c=i,e.i=function(t){return t},e.d=function(t,e,i){Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var i=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=14)}([function(t,e,i){"use strict";(function(e){function i(t,e){window.console}function n(t,e,i){if("object"==typeof e)i(e);else{var n=e.call(this);if("function"==typeof n)if(n.resolved)i(n.resolved);else if(n.requested)n.pendingCallbacks.push(i);else{n.requested=!0;var s=n.pendingCallbacks=[i];n(function(t){n.resolved=t;for(var e=0,i=s.length;e<i;e++)s[e](t)},function(){i()})}else a(n)&&n.then(function(t){i(t)},function(){i()})["catch"](function(t){i()})}}function a(t){return t&&"function"==typeof t.then}function s(t){if(!w){var e=t.$watch("__watcher__",function(t){});w=t._watchers[0].constructor,e()}return w}function o(t){return!C&&t&&t._data&&t._data.__ob__&&t._data.__ob__.dep&&(C=t._data.__ob__.dep.constructor),C}function r(t){return null===t||void 0===t}function c(t,e){function i(i){var n=arguments.length;return n?n>1?t.apply(e,arguments):t.call(e,i):t.call(e)}return i._length=t.length,i}function l(t){return null!==t&&"object"==typeof t}function u(t){return A.call(t)===$}function d(t,e){return O.call(t,e)}function m(t){return Q.test(t)}function f(t){var e=t.charCodeAt(0),i=t.charCodeAt(t.length-1);return e!==i||34!==e&&39!==e?t:t.slice(1,-1)}function p(t){if(void 0===t)return"eof";var e=t.charCodeAt(0);switch(e){case 91:case 93:case 46:case 34:case 39:case 48:return t;case 95:case 36:case 45:return"ident";case 32:case 9:case 10:case 13:case 160:case 65279:case 8232:case 8233:return"ws"}return e>=97&&e<=122||e>=65&&e<=90?"ident":e>=49&&e<=57?"number":"else"}function h(t){var e=t.trim();return("0"!==t.charAt(0)||!isNaN(t))&&(m(e)?f(e):"*"+e)}function v(t){function e(){var e=t[u+1];if(d===V&&"'"===e||d===B&&'"'===e)return u++,n="\\"+e,f[T](),!0}var i,n,a,s,o,r,c,l=[],u=-1,d=F,m=0,f=[];for(f[E]=function(){void 0!==a&&(l.push(a),a=void 0)},f[T]=function(){void 0===a?a=n:a+=n},f[z]=function(){f[T](),m++},f[j]=function(){if(m>0)m--,d=U,f[T]();else{if(m=0,a=h(a),a===!1)return!1;f[E]()}};null!=d;)if(u++,i=t[u],"\\"!==i||!e()){if(s=p(i),c=H[d],o=c[s]||c["else"]||G,o===G)return;if(d=o[0],r=f[o[1]],r&&(n=o[2],n=void 0===n?i:n,r()===!1))return;if(d===W)return l.raw=t,l}}function g(t){var e=S[t];return e||(e=v(t),e&&(S[t]=e)),e}function _(t,n){void 0===n&&(n={});var a=t.version&&Number(t.version.split(".")[0])||-1;if("production"!==e.env.NODE_ENV&&_.installed)return void i("already installed.");if("production"!==e.env.NODE_ENV&&a<2)return void i("vue-i18n ("+_.version+") need to use Vue 2.0 or later (Vue: "+t.version+").");var s="en";y(t,s),k(t,Z),x(t,Z),q(t,Z,s),J(t)}function y(t,e){var i=t.config.silent;t.config.silent=!0,Z||(Z=new t({data:{lang:e,locales:{}}})),t.config.silent=i}var w,C,b,k=function(t,e){t.locale=function(t,a,s){return void 0===a?e.locales[t]:void(null===a?(e.locales[t]=void 0,delete e.locales[t]):n(t,a,function(n){n?e.$set(e.locales,t,n):i("failed set `"+t+"` locale"),s&&s()}))}},x=function(t,e){var i=t.prototype._init;t.prototype._init=function(t){var n=this;i.call(this,t),this.$parent||(this._$lang=e,this._langUnwatch=this._$lang.$watch("$data",function(t,e){n.$forceUpdate()},{deep:!0}))};var n=t.prototype._destroy;t.prototype._destroy=function(){!this.$parent&&this._langUnwatch&&(this._langUnwatch(),this._langUnwatch=null,this._$lang=null),n.apply(this,arguments)}},A=Object.prototype.toString,$="[object Object]",O=Object.prototype.hasOwnProperty,P=null,M=null,q=function(t,e,i){function n(t,e){var i=new a(e,t,null,{lazy:!0});return function(){return i.dirty&&i.evaluate(),r&&r.target&&i.depend(),i.value}}var a=s(e),r=o(e);Object.defineProperty(t.config,"lang",{enumerable:!0,configurable:!0,get:n(function(){return e.lang},e),set:c(function(t){e.lang=t},e)}),b=i,Object.defineProperty(t.config,"fallbackLang",{enumerable:!0,configurable:!0,get:function(){return b},set:function(t){b=t}}),Object.defineProperty(t.config,"missingHandler",{enumerable:!0,configurable:!0,get:function(){return P},set:function(t){P=t}}),Object.defineProperty(t.config,"i18nFormatter",{enumerable:!0,configurable:!0,get:function(){return M},set:function(t){M=t}})},I=/(%|)\{([0-9a-zA-Z_]+)\}/g,D=function(t){function e(t){for(var e=[],i=arguments.length-1;i-- >0;)e[i]=arguments[i+1];return e=1===e.length&&"object"==typeof e[0]?e[0]:{},e&&e.hasOwnProperty||(e={}),t.replace(I,function(i,n,a,s){var o;return"{"===t[s-1]&&"}"===t[s+i.length]?a:(o=d(e,a)?e[a]:i,r(o)?"":o)})}return e},S=Object.create(null),T=0,E=1,z=2,j=3,F=0,R=1,N=2,L=3,U=4,V=5,B=6,W=7,G=8,H=[];H[F]={ws:[F],ident:[L,T],"[":[U],eof:[W]},H[R]={ws:[R],".":[N],"[":[U],eof:[W]},H[N]={ws:[N],ident:[L,T],0:[L,T],number:[L,T]},H[L]={ident:[L,T],0:[L,T],number:[L,T],ws:[R,E],".":[N,E],"[":[U,E],eof:[W,E]},H[U]={"'":[V,T],'"':[B,T],"[":[U,z],"]":[R,j],eof:G,"else":[U,T]},H[V]={"'":[U,T],eof:G,"else":[V,T]},H[B]={'"':[U,T],eof:G,"else":[B,T]};var Z,Q=/^\s?(true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/,Y=function(t){function e(t){if(null===t||void 0===t)return!0;if(Array.isArray(t)){if(t.length>0)return!1;if(0===t.length)return!0}else if(u(t))for(var e in t)if(d(t,e))return!1;return!0}function i(t,i){if(!l(t))return null;var n=g(i);if(e(n))return null;for(var a=n.length,s=null,o=t,r=0;r<a;){var c=o[n[r]];if(void 0===c){o=null;break}o=c,r++}return s=o}return i},J=function(t){function n(){for(var e=[],i=arguments.length;i--;)e[i]=arguments[i];var n=t.config.lang,a=t.config.fallbackLang;return 1===e.length?l(e[0])||Array.isArray(e[0])?e=e[0]:"string"==typeof e[0]&&(n=e[0]):2===e.length&&("string"==typeof e[0]&&(n=e[0]),(l(e[1])||Array.isArray(e[1]))&&(e=e[1])),{lang:n,fallback:a,params:e}}function a(t,e){return!(!t||!e)&&!r(g(t,e))}function s(e,n,a){if(!e)return null;var o=g(e,n);if(Array.isArray(o))return o;if(r(o)&&(o=e[n]),r(o))return null;if("string"!=typeof o)return i("Value of key '"+n+"' is not a string!"),null;if(o.indexOf("@:")>=0){var c=o.match(/(@:[\w|.]+)/g);for(var l in c){var u=c[l],d=u.substr(2),m=s(e,d,a);o=o.replace(u,m)}}return a?t.config.i18nFormatter?t.config.i18nFormatter.apply(null,[o].concat(a)):v(o,a):o}function o(t,n,a,o,c){var l=null;return l=s(t(n),o,c),r(l)?(l=s(t(a),o,c),r(l)?null:("production"!==e.env.NODE_ENV&&i('Fall back to translate the keypath "'+o+'" with "'+a+'" language.'),l)):l}function u(n,a,s,o){return r(o)?(t.config.missingHandler?t.config.missingHandler.apply(null,[n,a,s]):"production"!==e.env.NODE_ENV&&i('Cannot translate the value of keypath "'+a+'". Use the value of keypath as default'),a):o}function d(e){return t.locale(e)}function m(t){return this.$options.locales[t]}function f(t){return t?t>1?1:0:1}function p(t,e){return t=Math.abs(t),2===e?f(t):t?Math.min(t,2):0}function h(t,e){if(!t&&"string"!=typeof t)return null;var i=t.split("|");return e=p(e,i.length),i[e]?i[e].trim():t}var v=D(t),g=Y(t);return t.t=function(t){for(var e=[],i=arguments.length-1;i-- >0;)e[i]=arguments[i+1];if(!t)return"";var a=n.apply(void 0,e),s=a.lang,r=a.fallback,c=a.params;return u(s,t,null,o(d,s,r,t,c))},t.tc=function(e,i){for(var n=[],a=arguments.length-2;a-- >0;)n[a]=arguments[a+2];return h(t.t.apply(t,[e].concat(n)),i)},t.te=function(t){for(var e=[],i=arguments.length-1;i-- >0;)e[i]=arguments[i+1];var s=n.apply(void 0,e),o=s.lang;return a(d(o),t)},t.prototype.$t=function(t){for(var e=[],i=arguments.length-1;i-- >0;)e[i]=arguments[i+1];if(!t)return"";var a=n.apply(void 0,e),s=a.lang,r=a.fallback,l=a.params,f=null;return this.$options.locales&&(f=o(c(m,this),s,r,t,l))?f:u(s,t,this,o(d,s,r,t,l))},t.prototype.$tc=function(t,e){for(var i=[],n=arguments.length-2;n-- >0;)i[n]=arguments[n+2];return"number"!=typeof e&&"undefined"!=typeof e?t:h((a=this).$t.apply(a,[t].concat(i)),e);var a},t.prototype.$te=function(t){for(var e=[],i=arguments.length-1;i-- >0;)e[i]=arguments[i+1];var s=n.apply(void 0,e),o=s.lang,r=!1;return this.$options.locales&&(r=a(c(m)(o),t)),r||(r=a(d(o),t)),r},t.mixin({computed:{$lang:function(){return t.config.lang}}}),t};_.version="__VERSION__","undefined"!=typeof window&&window.Vue&&window.Vue.use(_),t.exports=_}).call(e,i(6))},function(t,e,i){var n,a;n=i(3);var s=i(10);a=n=n||{},"object"!=typeof n["default"]&&"function"!=typeof n["default"]||(a=n=n["default"]),"function"==typeof a&&(a=a.options),a.render=s.render,a.staticRenderFns=s.staticRenderFns,t.exports=n},function(t,e,i){"use strict";e["default"]={props:["activity"],mounted:function(){},methods:{open:function(){this.$nextTick(function(){$(this.$refs.modal).modal("show")})},close:function(){this.$nextTick(function(){$(this.$refs.modal).modal("hide")})}}}},function(t,e,i){"use strict";function n(t,e,i,n){var a=document.createElement("div");a.id="sz-map-controls",t.appendChild(a);var s=document.createElement("i");s.className="label label-success",s.style.fontSize="20px",s.style.position="relative",s.style.top="-7px",s.style.marginLeft="5px",s.style.marginRight="5px",s.textContent=n.getAnsweredQuestionsCount()+"/"+_.size(n.game.activity.questions),a.appendChild(s),n.$watch("game.answers",function(){s.textContent=n.getAnsweredQuestionsCount()+"/"+_.size(n.game.activity.questions)});var o=document.createElement("i");o.className="mdi mdi-information-outline",o.title=n.$t("info"),a.appendChild(o),o.addEventListener("click",function(){n.$refs.informationModal.open()});var r=document.createElement("i");r.className="mdi mdi-navigation",r.title=n.$t("position-tracking"),a.appendChild(r),r.addEventListener("click",function(){e.szTrackingEnabled?(e.szTrackingEnabled=!1,r.className="mdi mdi-navigation"):(e.panTo(i.getPosition()),google.maps.event.trigger(i,"click"),e.szTrackingEnabled=!0,r.className="mdi mdi-navigation active")});var c=document.createElement("i");c.className="mdi mdi-map-marker-multiple",c.title=n.$t("apply-item-bounds"),a.appendChild(c),c.addEventListener("click",function(){var t=n.getMarkerBounds();t.isEmpty()||e.fitBounds(t)});var l=document.createElement("i");l.className="mdi mdi-exit-to-app",l.title=n.$t("exit"),a.appendChild(l),l.addEventListener("click",function(){n.exit()})}var a=window.SmartZoos.config.connect_markers||!1;e["default"]={components:{"game-information-modal":i(7),"game-question-modal":i(8),"game-results-modal":i(9)},props:["latitude","longitude"],mounted:function(){this.baseUrl=window.SmartZoos.config.base_url,this.game=window.SmartZoos.data.game,this.mapData={},this.mapData.markers=[],this.mapData.mapOptions={center:{lat:this.latitude,lng:this.longitude},zoom:18,mapTypeId:google.maps.MapTypeId.HYBRID,disableDefaultUI:!0,zoomControl:!0,streetViewControl:!0,styles:[{featureType:"poi",stylers:[{visibility:"off"}]},{featureType:"transit.station",stylers:[{visibility:"off"}]}]},this.mapData.iconAnchor=new google.maps.Point(17.35,20),this.mapData.iconSize=new google.maps.Size(52,60),this.mapData.iconScaledSize=new google.maps.Size(34.7,40),this.initMap()},data:function(){return{question:null,game:null,baseUrl:""}},methods:{initMap:function(){var t=this,e=this;if(this.mapData.map=new google.maps.Map(document.getElementById("map"),this.mapData.mapOptions),this.mapData.infoWindow=new google.maps.InfoWindow,this.initPlayerMarker(),this.initGameControls(),this.$parent.getGeoLocation(function(t){var i=e.mapData.map,n=e.mapData.playerMarker;n.setPosition({lat:t.coords.latitude,lng:t.coords.longitude}),i.szTrackingEnabled===!0&&i.panTo(n.getPosition()),e.hasProximityCheck()&&_.each(e.mapData.markers,function(t){e.isAnswered(t.questionId)||e.detectAndSetMarkerIcon(t)})},!0),e.game.activity.questions){var i=e.mapData.map,n=e.mapData.markers,s=(e.mapData.infoWindow,e.mapData.playerMarker);_.each(e.game.activity.questions,function(t){var a=new google.maps.Marker({title:t.title,position:{lat:Number(t.latitude),lng:Number(t.longitude)},map:i,animation:google.maps.Animation.DROP,questionId:t.id});e.detectAndSetMarkerIcon(a),n.push(a),a.addListener("click",function(){if(!e.isAnswered(t.id))if(e.hasProximityCheck()){var i=google.maps.geometry.spherical.computeDistanceBetween(s.getPosition(),a.getPosition());i<=e.getProximityRadius()&&e.openQuestionModal(t)}else e.openQuestionModal(t)})}),a&&e.connectMarkers()}this.$nextTick(function(){t.game.complete?t.$refs.resultsModal.open():t.$refs.informationModal.open()})},initGameControls:function(){var t=this.mapData.map,e=this.mapData.playerMarker,i=document.createElement("div"),a=new n(i,t,e,this);a.index=1,t.controls[google.maps.ControlPosition.TOP_RIGHT].push(i)},closeInfoWindow:function(){var t=this.mapData.infoWindow;t&&t.getMap()&&t.close()},initPlayerMarker:function(){var t,e,i,n=this,a=this.mapData.map,s=this.mapData.infoWindow;t={path:google.maps.SymbolPath.CIRCLE,fillColor:"red",fillOpacity:1,scale:4.5,strokeColor:"white",strokeWeight:1};var e=new google.maps.Marker({title:this.$t("its-you"),position:{lat:this.latitude,lng:this.longitude},map:a,icon:t});if(e.addListener("click",function(){n.closeInfoWindow(),s.setContent(this.title),s.open(a,this)}),this.hasProximityCheck()){var i=new google.maps.Circle({map:a,radius:this.getProximityRadius(),fillColor:"blue",fillOpacity:.25,strokeColor:"blue",strokeWeight:1,strokeOpacity:.5});i.bindTo("center",e,"position")}google.maps.event.trigger(e,"click"),this.mapData.playerMarker=e},isAnswered:function(t){return _.has(this.game.answers,t)},markAnswered:function(t,e){var i=this;this.$set(this.game.answers,t,e);var n=_.find(this.mapData.markers,function(e){return e.questionId===t});n&&this.detectAndSetMarkerIcon(n);var a=_.keys(this.game.answers).map(function(t){return _.toNumber(t)}),s=_.map(this.game.activity.questions,function(t){return t.id});_.intersection(s,a).length===s.length&&(this.game.complete=!0,this.$nextTick(function(){i.$refs.resultsModal.open()}))},connectMarkers:function(){var t=this.mapData.map,e=this.mapData.markers;e.length>1&&_.each(e,function(i,n){if(0!==n){new google.maps.Polyline({path:[e[n-1].getPosition(),e[n].getPosition()],strokeWeight:2,strokeOpacity:.5,icons:[{icon:{path:google.maps.SymbolPath.FORWARD_CLOSED_ARROW},offset:"100%"}],geodesic:!0,map:t})}})},exit:function(){var t=confirm(this.$t("exit-confirmation"));t&&(window.location=this.baseUrl)},hasProximityCheck:function(){return this.game.activity.proximity_check},getProximityRadius:function(){return this.game.activity.proximity_radius||25},openQuestionModal:function(t){var e=this;this.question=t,this.$nextTick(function(){e.$refs.questionModal.open()})},detectAndSetMarkerIcon:function(t){var e=_.find(this.game.activity.questions,["id",t.questionId]),i={1:"information",2:"one-correct-answer",3:"multiple-correct-answers",4:"freeform-answer",5:"match-pairs",6:"embedded-content",7:"photo"},n=this.baseUrl+"/img/icons/item/";if(this.isAnswered(e.id))n+="answered/";else if(this.hasProximityCheck()){var a=google.maps.geometry.spherical.computeDistanceBetween(this.mapData.playerMarker.getPosition(),t.getPosition());a>this.getProximityRadius()&&(n+="inactive/")}t.setIcon({anchor:this.mapData.iconAnchor,size:this.mapData.iconSize,scaledSize:this.mapData.iconScaledSize,url:n+i[e.type]+".png"})},getMarkerBounds:function(){if(this.mapData.markerBounds)return this.mapData.markerBounds;if(this.mapData.markerBounds=new google.maps.LatLngBounds,this.mapData.markers.length>0){var t=this;_.each(this.mapData.markers,function(e){t.mapData.markerBounds.extend(e.getPosition())})}return this.mapData.markerBounds},getAnsweredQuestionsCount:function(){if(0===_.size(this.game.activity.questions)||0===_.size(this.game.answers))return 0;var t=_.map(this.game.activity.questions,function(t){return t.id}),e=_.filter(this.game.answers,function(e){return t.indexOf(e.question)!==-1});return _.size(e)}}}},function(t,e,i){"use strict";e["default"]={props:["question","gameId","baseUrl"],mounted:function(){var t=this,e=this;this.$nextTick(function(){$(t.$refs.modal).on("hide.bs.modal",function(t){e.inAjaxCall&&t.preventDefault()})})},data:function(){return{selectedOptions:[],textualAnswer:"",hasImageSelected:!1,imageSrc:null,chosenPair:{option:null,match:null},matchedPairs:[],shuffledPairs:[],matchableStyles:{"min-height":"100px"},inAjaxCall:!1,incorrectImageFormat:!1}},methods:{open:function(){var t=this;this.$nextTick(function(){t.isMatchPairs()?(t.pairs().length>0&&(t.question.pairs=_.shuffle(t.pairs()),$(t.$refs.modal).one("shown.bs.modal",function(e){var i=t,n=_.map(t.$refs.matchable,function(t){return $(t).outerHeight(!0)}),a=_.max(n);a&&(i.matchableStyles["min-height"]=a+"px")})),t.shuffledPairs=_.shuffle(t.pairs())):(t.isOneCorrectAnswer()||t.isMultipleCorrectAnswers())&&t.options().length>0&&(t.question.options=_.shuffle(t.options())),$(t.$refs.modal).modal("show")})},close:function(){var t=this;this.inAjaxCall||this.$nextTick(function(){$(t.$refs.modal).modal("hide"),t.selectedOptions=[],t.textualAnswer="",t.hasImageSelected=!1,t.imageSrc=null,t.chosenPair.option=null,t.chosenPair.mathc=null,t.matchedPairs=[],t.shuffledPairs=[],t.matchableStyles["min-height"]="100px",t.inAjaxCall=!1,$(t.$refs.image).val(""),t.incorrectImageFormat=!1})},submit:function(){if(!this.inAjaxCall){var t=this;this.inAjaxCall=!0;var e={game_id:this.gameId,question_id:this.question.id};if(this.isOneCorrectAnswer()||this.isMultipleCorrectAnswers()?e.options=this.selectedOptions:(this.isFreeformAnswer()||this.isEmbeddedContent())&&(e.text=this.textualAnswer),this.isPhoto()){var i=new FormData;_.each(e,function(t,e){i.append(e,t)}),i.append("image",this.$refs.image.files[0]),e=i}this.$http.post(t.baseUrl+"/api/games/answer",e).then(function(e){t.inAjaxCall=!1;var i=t.question.id;$(t.$refs.modal).one("hidden.bs.modal",function(n){t.$parent.markAnswered(i,e.body)}),t.close()},function(e){t.inAjaxCall=!1})}},title:function(){return this.question?this.question.title:""},description:function(){return this.question?this.question.description:""},embeddedContent:function(){return this.question?this.question.embedded_content:""},options:function(){return this.question&&this.question.options?this.question.options:[]},pairs:function(t){return t===!0?this.shuffledPairs:this.question&&this.question.pairs?this.question.pairs:[]},isInformation:function(){return!!this.question&&1==this.question.type},isOneCorrectAnswer:function(){return!!this.question&&2==this.question.type},isMultipleCorrectAnswers:function(){return!!this.question&&3==this.question.type},isFreeformAnswer:function(){return!!this.question&&4==this.question.type},isMatchPairs:function(){return!!this.question&&5==this.question.type},isEmbeddedContent:function(){return!!this.question&&6==this.question.type},isPhoto:function(){return!!this.question&&7==this.question.type},isSelectedOption:function(t){return this.selectedOptions&&"object"==typeof this.selectedOptions?this.selectedOptions.indexOf(t)!==-1:this.selectedOptions===t},triggerOptionClick:function(t){$(this.$refs.option[t]).trigger("click")},triggerImageClick:function(){$(this.$refs.image).trigger("click")},imageSelected:function(){if(event.target.files.length>0){var t=event.target.files[0];if("image/jpg"!==t.type&&"image/jpeg"!==t.type&&"image/png"!=t.type)return $(event.target).val(""),this.hasImageSelected=!1,void(this.incorrectImageFormat=!0);if(window.FileReader){var e=new FileReader,i=this;e.onload=function(t){i.imageSrc=t.target.result},e.readAsDataURL(t)}this.hasImageSelected=!0,this.incorrectImageFormat=!1}},canSubmit:function(){return!!this.isInformation()||(this.isOneCorrectAnswer()||this.isMultipleCorrectAnswers()?"object"==typeof this.selectedOptions?this.selectedOptions.length>0:!!this.selectedOptions:this.isFreeformAnswer()||this.isEmbeddedContent()?!!this.textualAnswer.trim():this.isMatchPairs()?this.matchedPairs.length===this.pairs().length:!!this.isPhoto()&&this.hasImageSelected)},resetChosenPair:function(){var t=this;this.$nextTick(function(){var e=t;setTimeout(function(){e.chosenPair.option=null,e.chosenPair.match=null},250)})},choose:function(t,e){this.isMatchedPair(e)||(this.chosenPair[t]=e.id,this.chosenPair.option===this.chosenPair.match?(this.matchedPairs.push(e.id),this.resetChosenPair()):null!==this.chosenPair.option&&null!==this.chosenPair.match&&this.resetChosenPair())},choosePair:function(t){this.choose("option",t)},choosePairMatch:function(t){this.choose("match",t)},isOptionChosen:function(t){return this.chosenPair.option===t.id},isOptionMatchChosen:function(t){return this.chosenPair.match===t.id},isMatchedPair:function(t){return this.matchedPairs.indexOf(t.id)!==-1},isCorrectlyAnswered:function(t){return!1},isIncorrectlyAnswered:function(t){return!1}}}},function(t,e,i){"use strict";e["default"]={props:["activity","answers"],mounted:function(){},methods:{open:function(){var t=this;this.$nextTick(function(){$(t.$refs.modal).modal("show")})},exit:function(){this.$parent.exit()},isInformation:function(t){return!!t&&1==t.type},isOneCorrectAnswer:function(t){return!!t&&2==t.type},isMultipleCorrectAnswers:function(t){return!!t&&3==t.type},isFreeformAnswer:function(t){return!!t&&4==t.type},isMatchPairs:function(t){return!!t&&5==t.type},isEmbeddedContent:function(t){return!!t&&6==t.type},isPhoto:function(t){return!!t&&7==t.type},hasAnswer:function(t){return!(!this.answers||!this.answers[t.id])},isCorrect:function(t){return!!this.hasAnswer(t)&&this.answers[t.id].correct},hasOptions:function(t){return!!this.hasAnswer(t)&&!!this.answers[t.id].answer.options},choseOption:function(t,e){return!!this.hasOptions(t)&&this.answers[t.id].answer.options.indexOf(e.id)!==-1},hasText:function(t){return!!this.hasAnswer(t)&&!!this.answers[t.id].answer.text},getText:function(t){return this.answers[t.id].answer.text},hasImage:function(t){return!!this.hasAnswer(t)&&!!this.answers[t.id].image},getImage:function(t){return this.answers[t.id].image}}}},function(t,e){function i(){throw new Error("setTimeout has not been defined")}function n(){throw new Error("clearTimeout has not been defined")}function a(t){if(u===setTimeout)return setTimeout(t,0);if((u===i||!u)&&setTimeout)return u=setTimeout,setTimeout(t,0);try{return u(t,0)}catch(e){try{return u.call(null,t,0)}catch(e){return u.call(this,t,0)}}}function s(t){if(d===clearTimeout)return clearTimeout(t);if((d===n||!d)&&clearTimeout)return d=clearTimeout,clearTimeout(t);try{return d(t)}catch(e){try{return d.call(null,t)}catch(e){return d.call(this,t)}}}function o(){h&&f&&(h=!1,f.length?p=f.concat(p):v=-1,p.length&&r())}function r(){if(!h){var t=a(o);h=!0;for(var e=p.length;e;){for(f=p,p=[];++v<e;)f&&f[v].run();v=-1,e=p.length}f=null,h=!1,s(t)}}function c(t,e){this.fun=t,this.array=e}function l(){}var u,d,m=t.exports={};!function(){try{u="function"==typeof setTimeout?setTimeout:i}catch(t){u=i}try{d="function"==typeof clearTimeout?clearTimeout:n}catch(t){d=n}}();var f,p=[],h=!1,v=-1;m.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var i=1;i<arguments.length;i++)e[i-1]=arguments[i];p.push(new c(t,e)),1!==p.length||h||a(r)},c.prototype.run=function(){this.fun.apply(null,this.array)},m.title="browser",m.browser=!0,m.env={},m.argv=[],m.version="",m.versions={},m.on=l,m.addListener=l,m.once=l,m.off=l,m.removeListener=l,m.removeAllListeners=l,m.emit=l,m.binding=function(t){throw new Error("process.binding is not supported")},m.cwd=function(){return"/"},m.chdir=function(t){throw new Error("process.chdir is not supported")},m.umask=function(){return 0}},function(t,e,i){var n,a;n=i(2);var s=i(12);a=n=n||{},"object"!=typeof n["default"]&&"function"!=typeof n["default"]||(a=n=n["default"]),"function"==typeof a&&(a=a.options),a.render=s.render,a.staticRenderFns=s.staticRenderFns,t.exports=n},function(t,e,i){var n,a;n=i(4);var s=i(11);a=n=n||{},"object"!=typeof n["default"]&&"function"!=typeof n["default"]||(a=n=n["default"]),"function"==typeof a&&(a=a.options),a.render=s.render,a.staticRenderFns=s.staticRenderFns,t.exports=n},function(t,e,i){var n,a;n=i(5);var s=i(13);a=n=n||{},"object"!=typeof n["default"]&&"function"!=typeof n["default"]||(a=n=n["default"]),"function"==typeof a&&(a=a.options),a.render=s.render,a.staticRenderFns=s.staticRenderFns,t.exports=n},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{height:"100%",width:"100%"}},[t.game?i("game-information-modal",{ref:"informationModal",attrs:{activity:t.game.activity}}):t._e(),t._v(" "),t.question?i("game-question-modal",{ref:"questionModal",attrs:{question:t.question,"game-id":t.game.id,"base-url":t.baseUrl}}):t._e(),t._v(" "),t.game&&t.game.complete?i("game-results-modal",{ref:"resultsModal",attrs:{activity:t.game.activity,answers:t.game.answers}}):t._e(),t._v(" "),i("div",{attrs:{id:"map"}})],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"modal",staticClass:"modal fade",attrs:{tabindex:"-1",role:"dialog"},on:{click:function(e){return e.target!==e.currentTarget?null:void t.close()},keyup:function(e){return"button"in e||!t._k(e.keyCode,"esc",27)?void t.close():null}}},[i("div",{staticClass:"modal-dialog modal-lg",attrs:{role:"document"}},[i("div",{staticClass:"modal-content"},[i("div",{staticClass:"modal-header"},[i("button",{staticClass:"close",attrs:{type:"button","aria-label":"Close",diabled:t.inAjaxCall},on:{click:function(e){t.close()}}},[i("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])]),t._v(" "),i("h4",{staticClass:"modal-title"},[t._v(t._s(t.title()))])]),t._v(" "),i("div",{staticClass:"modal-body"},[i("p",{staticClass:"sz-display-new-lines"},[t._v(t._s(t.description()))]),t._v(" "),t.isOneCorrectAnswer()?i("div",[i("ul",{staticClass:"media-list sz-one-correct-answer"},t._l(t.options(),function(e,n){return i("li",{staticClass:"media",on:{click:function(e){t.triggerOptionClick(n)}}},[e.image?i("div",{staticClass:"media-left"},[i("img",{staticClass:"media-object",attrs:{src:e.image,alt:"option-image"}})]):t._e(),t._v(" "),i("div",{staticClass:"media-body media-middle"},[i("h4",{staticClass:"media-heading"},[t._v(t._s(e.option))])]),t._v(" "),i("div",{staticClass:"media-right media-middle"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.selectedOptions,expression:"selectedOptions"}],ref:"option",refInFor:!0,staticClass:"form-control",attrs:{type:"radio",name:"option"},domProps:{value:e.id,checked:t._q(t.selectedOptions,e.id)},on:{__c:function(i){t.selectedOptions=e.id}}}),t._v(" "),t.isSelectedOption(e.id)?t._e():i("i",{staticClass:"mdi mdi-radiobox-blank"}),t._v(" "),t.isSelectedOption(e.id)?i("i",{staticClass:"mdi mdi-radiobox-marked","class":{correct:t.isCorrectlyAnswered(e.id),incorrect:t.isIncorrectlyAnswered(e.id)}}):t._e()])])}))]):t._e(),t._v(" "),t.isMultipleCorrectAnswers()?i("div",[i("ul",{staticClass:"media-list sz-multiple-correct-answers"},t._l(t.options(),function(e,n){return i("li",{staticClass:"media",on:{click:function(e){t.triggerOptionClick(n)}}},[e.image?i("div",{staticClass:"media-left"},[i("img",{staticClass:"media-object",attrs:{src:e.image,alt:"option-image"}})]):t._e(),t._v(" "),i("div",{staticClass:"media-body media-middle"},[i("h4",{staticClass:"media-heading"},[t._v(t._s(e.option))])]),t._v(" "),i("div",{staticClass:"media-right media-middle"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.selectedOptions,expression:"selectedOptions"}],ref:"option",refInFor:!0,staticClass:"form-control",attrs:{type:"checkbox",name:"options[]"},domProps:{value:e.id,checked:Array.isArray(t.selectedOptions)?t._i(t.selectedOptions,e.id)>-1:t.selectedOptions},on:{__c:function(i){var n=t.selectedOptions,a=i.target,s=!!a.checked;if(Array.isArray(n)){var o=e.id,r=t._i(n,o);s?r<0&&(t.selectedOptions=n.concat(o)):r>-1&&(t.selectedOptions=n.slice(0,r).concat(n.slice(r+1)))}else t.selectedOptions=s}}}),t._v(" "),t.isSelectedOption(e.id)?t._e():i("i",{staticClass:"mdi mdi-checkbox-blank-outline"}),t._v(" "),t.isSelectedOption(e.id)?i("i",{staticClass:"mdi mdi-checkbox-marked-outline","class":{correct:t.isCorrectlyAnswered(e.id),incorrect:t.isIncorrectlyAnswered(e.id)}}):t._e()])])}))]):t._e(),t._v(" "),t.isFreeformAnswer()?i("div",[i("div",{staticClass:"form-group"},[i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.textualAnswer,expression:"textualAnswer"}],staticClass:"form-control",attrs:{placeholder:t.$t("textual-answer-placeholder")},domProps:{value:t.textualAnswer},on:{input:function(e){e.target.composing||(t.textualAnswer=e.target.value)}}})])]):t._e(),t._v(" "),t.isMatchPairs()?i("div",[i("div",{staticClass:"row sz-match-pairs"},[i("div",{staticClass:"col-xs-6"},t._l(t.pairs(),function(e){return i("div",{staticClass:"row"},[i("div",{staticClass:"col-xs-12"},[i("div",{ref:"matchable",refInFor:!0,staticClass:"sz-matchable","class":{chosen:t.isOptionChosen(e),matched:t.isMatchedPair(e)},style:t.matchableStyles,on:{click:function(i){t.choosePair(e)}}},[e.image?i("img",{staticClass:"media-object",attrs:{src:e.image,alt:"pair-image"}}):t._e(),t._v(" "),i("div",[t._v(t._s(e.option))])])])])})),t._v(" "),i("div",{staticClass:"col-xs-6"},t._l(t.pairs(!0),function(e){return i("div",{staticClass:"row"},[i("div",{staticClass:"col-xs-12"},[i("div",{ref:"matchable",refInFor:!0,staticClass:"sz-matchable","class":{chosen:t.isOptionMatchChosen(e),matched:t.isMatchedPair(e)},style:t.matchableStyles,on:{click:function(i){t.choosePairMatch(e)}}},[e.image_match?i("img",{staticClass:"media-object",attrs:{src:e.image_match,alt:"pair-image"}}):t._e(),t._v(" "),i("div",[t._v(t._s(e.option_match))])])])])}))])]):t._e(),t._v(" "),t.isEmbeddedContent()?i("div",[i("div",{staticClass:"embed-responsive embed-responsive-16by9",domProps:{innerHTML:t._s(t.embeddedContent())}}),t._v(" "),i("div",{staticClass:"form-group"},[i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.textualAnswer,expression:"textualAnswer"}],staticClass:"form-control",attrs:{placeholder:t.$t("textual-answer-placeholder")},domProps:{value:t.textualAnswer},on:{input:function(e){e.target.composing||(t.textualAnswer=e.target.value)}}})])]):t._e(),t._v(" "),t.isPhoto()?i("div",{staticClass:"sz-photo"},[i("transition",{attrs:{name:"fade-in-down-out-up","enter-active-class":"animated fadeInDown","leave-active-class":"animated fadeOutUp"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.incorrectImageFormat,expression:"incorrectImageFormat"}],staticClass:"alert alert-danger text-center",attrs:{role:"alert"}},[t._v("\n                            "+t._s(t.$t("image-format-hint"))+"\n                        ")])]),t._v(" "),i("div",{staticClass:"row text-center"},[i("a",{staticClass:"btn sz-take-image","class":{"sz-image-taken":t.hasImageSelected},attrs:{href:"#",tabindex:"-1"},on:{click:function(e){e.preventDefault(),t.triggerImageClick()}}},[i("i",{staticClass:"mdi mdi-camera",attrs:{"aria-hidden":"true"}})])]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.hasImageSelected,expression:"hasImageSelected"}],staticClass:"row"},[i("div",{staticClass:"col-xs-10 col-xs-offset-1"},[i("img",{staticClass:"img-responsive center-block",attrs:{src:t.imageSrc,alt:"uploadable-image"}})])]),t._v(" "),i("input",{ref:"image",attrs:{type:"file",accept:"image/*",capture:"camera",name:"image"},on:{change:function(e){t.imageSelected()}}})],1):t._e()]),t._v(" "),i("div",{staticClass:"modal-footer"},[i("button",{staticClass:"btn btn-default",attrs:{type:"button",disabled:t.inAjaxCall},on:{click:function(e){t.close()}}},[t._v(t._s(t.$t("close")))]),t._v(" "),i("button",{staticClass:"btn btn-primary",attrs:{type:"button",disabled:!t.canSubmit()||t.inAjaxCall},on:{click:function(e){t.submit()}}},[t._v(t._s(t.$t("submit")))])])])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"modal",
staticClass:"modal fade",attrs:{tabindex:"-1",role:"dialog"},on:{click:function(e){return e.target!==e.currentTarget?null:void t.close()},keyup:function(e){return"button"in e||!t._k(e.keyCode,"esc",27)?void t.close():null}}},[i("div",{staticClass:"modal-dialog modal-lg",attrs:{role:"document"}},[i("div",{staticClass:"modal-content"},[i("div",{staticClass:"modal-header"},[i("button",{staticClass:"close",attrs:{type:"button","aria-label":"Close"},on:{click:function(e){t.close()}}},[i("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])]),t._v(" "),i("h4",{staticClass:"modal-title"},[t._v(t._s(t.activity.title))])]),t._v(" "),i("div",{staticClass:"modal-body"},[i("h3",[t._v(t._s(t.$t("description")))]),t._v(" "),i("p",{staticClass:"sz-display-new-lines"},[t._v("\n                    "+t._s(t.activity.description)+"\n                ")]),t._v(" "),i("h3",[t._v(t._s(t.$t("activity-type")))]),t._v(" "),i("p",[t._v("\n                    "+t._s(t.activity.type)+"\n                ")]),t._v(" "),i("h3",[t._v(t._s(t.$t("difficulty-level")))]),t._v(" "),i("p",[t._v("\n                    "+t._s(t.activity.difficulty_level_start)+" - "+t._s(t.activity.difficulty_level_end)+"\n                ")]),t._v(" "),i("h3",[t._v(t._s(t.$t("playing-time")))]),t._v(" "),i("p",[t._v("\n                    "+t._s(t.activity.playing_time)+" "+t._s(t.$t("minutes"))+"\n                ")]),t._v(" "),i("h3",[t._v(t._s(t.$t("language")))]),t._v(" "),i("p",[t._v("\n                    "+t._s(t.activity.language)+"\n                ")]),t._v(" "),t.activity.contact_information?i("h3",[t._v(t._s(t.$t("contact-information")))]):t._e(),t._v(" "),t.activity.contact_information?i("p",[t._v("\n                    "+t._s(t.activity.contact_information)+"\n                ")]):t._e(),t._v(" "),i("h3",[t._v(t._s(t.$t("featured-image")))]),t._v(" "),i("p",[i("img",{staticClass:"img-responsive center-block",attrs:{src:t.activity.featured_image,alt:"featured-image"}})]),t._v(" "),i("h3",[t._v(t._s(t.$t("zoo")))]),t._v(" "),i("p",[t._v("\n                    "+t._s(t.activity.zoo)+"\n                ")])]),t._v(" "),i("div",{staticClass:"modal-footer"},[i("button",{staticClass:"btn btn-default",attrs:{type:"button"},on:{click:function(e){t.close()}}},[t._v(t._s(t.$t("close")))])])])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"modal",staticClass:"modal fade",attrs:{tabindex:"-1",role:"dialog","data-backdrop":"static","data-keyboard":"false"}},[i("div",{staticClass:"modal-dialog modal-lg sz-game-results",attrs:{role:"document"}},[i("div",{staticClass:"modal-content"},[i("div",{staticClass:"modal-header"},[i("h4",{staticClass:"modal-title"},[t._v(t._s(t.activity.title))])]),t._v(" "),i("div",{staticClass:"modal-body"},t._l(t.activity.questions,function(e,n){return i("div",[i("h3",[t._v(t._s(n+1)+". "+t._s(e.title))]),t._v(" "),i("p",{staticClass:"sz-display-new-lines"},[t._v(t._s(e.description))]),t._v(" "),t.isOneCorrectAnswer(e)||t.isMultipleCorrectAnswers(e)?i("div",t._l(e.options,function(n){return i("ul",{staticClass:"media-list sz-options-list","class":{correct:t.isCorrect(e)}},[i("li",{staticClass:"media sz-option"},[n.image?i("div",{staticClass:"media-left"},[i("img",{staticClass:"media-object",attrs:{src:n.image,alt:"option-image"}})]):t._e(),t._v(" "),i("div",{staticClass:"media-body"},[i("h4",{staticClass:"media-heading"},[t._v(t._s(n.option))])]),t._v(" "),i("div",{staticClass:"media-right media-middle"},[t.isOneCorrectAnswer(e)&&t.choseOption(e,n)?i("i",{staticClass:"mdi mdi-radiobox-marked",attrs:{"aria-hidden":"true"}}):t._e(),t._v(" "),t.isOneCorrectAnswer(e)&&!t.choseOption(e,n)?i("i",{staticClass:"mdi mdi-radiobox-blank",attrs:{"aria-hidden":"true"}}):t._e(),t._v(" "),t.isMultipleCorrectAnswers(e)&&t.choseOption(e,n)?i("i",{staticClass:"mdi mdi-checkbox-marked-outline",attrs:{"aria-hidden":"true"}}):t._e(),t._v(" "),t.isMultipleCorrectAnswers(e)&&!t.choseOption(e,n)?i("i",{staticClass:"mdi mdi-checkbox-blank-outline",attrs:{"aria-hidden":"true"}}):t._e()])])])})):t._e(),t._v(" "),t.isFreeformAnswer(e)||t.isEmbeddedContent(e)?i("div",[t.hasText(e)?i("div",{staticClass:"well well-sm"},[t._v("\n                            "+t._s(t.getText(e))+"\n                        ")]):t._e()]):t._e(),t._v(" "),t.isPhoto(e)?i("div",{staticClass:"sz-photo"},[t.hasImage(e)?i("div",{staticClass:"well well-sm"},[i("img",{staticClass:"img-responsive center-block",attrs:{alt:"uploaded-image",src:t.getImage(e)}})]):t._e()]):t._e()])})),t._v(" "),i("div",{staticClass:"modal-footer"},[i("button",{staticClass:"btn btn-default",attrs:{type:"button"},on:{click:function(e){t.exit()}}},[i("i",{staticClass:"mdi mdi-exit-to-app"})])])])])])},staticRenderFns:[]}},function(t,e,i){var n=i(0);Vue.use(n),Vue.config.lang=window.SmartZoos.config.locale,Vue.locale(window.SmartZoos.config.locale,_.cloneDeep(window.SmartZoos.data.translations)),Vue.component("game-map",i(1));new Vue({el:"#sz-play-app",created:function(){var t=this;window.initMap=function(){t.getGeoLocation(function(e){t.latitude=e.coords.latitude,t.longitude=e.coords.longitude,t.mapInitialised=!0},!1,function(e){t.geoLocationErrorMessage=e.message})};var e=document.createElement("script");e.type="text/javascript",e.src="//maps.googleapis.com/maps/api/js?key="+window.SmartZoos.config.map.key+"&callback=initMap&libraries=geometry",document.body.appendChild(e)},data:function(){return{mapInitialised:!1,latitude:void 0,longitude:void 0,geoLocationErrorMessage:null}},methods:{isLoading:function(){return!this.mapInitialised},getGeoLocation:function(t,e,i){if("function"!=typeof i&&(i=function(t){window.console&&window.console.error&&"function"==typeof window.console.error&&window.console.error("Geolocation error",t)}),!window.navigator.geolocation)throw"Geolocation is unavailable!";var n={enableHighAccuracy:!0};e===!0?window.navigator.geolocation.watchPosition(t,i,n):window.navigator.geolocation.getCurrentPosition(t,i,n)},hasGeoLocationError:function(){return!!this.geoLocationErrorMessage}}})}]);