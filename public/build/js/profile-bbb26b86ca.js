!function(n){function e(o){if(t[o])return t[o].exports;var a=t[o]={i:o,l:!1,exports:{}};return n[o].call(a.exports,a,a.exports,e),a.l=!0,a.exports}var t={};return e.m=n,e.c=t,e.i=function(n){return n},e.d=function(n,e,t){Object.defineProperty(n,e,{configurable:!1,enumerable:!0,get:t})},e.n=function(n){var t=n&&n.__esModule?function(){return n["default"]}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},e.p="",e(e.s=0)}([function(n,e){$(function(){function n(){t&&ga.apply(this,arguments)}var e=window.Laravel.apiUrl,t=!!window.ga;$('[data-toggle="popover"]').popover(),$('[data-toggle="tooltip"]').tooltip(),$("button#send-to-backpack").on("click",function(){n("send","event","Badges","click","User initialized sending badges to Backpack"),$.getJSON(e+"/badges/mine",function(t){if(_.size(t)>0){var o=_.map(t,function(n){return n.assertion});OpenBadges.issue(o,function(a,i){if(n("send","event","Badges","issue","User sent badges to Backpack",o.length,{nonInteraction:!0}),i.length>0){n("send","event","Badges","issueSuccesses","Number of badges successfully issued",i.length,{nonInteraction:!0});var s=[];_.each(t,function(n){_.indexOf(i,n.assertion)!==-1&&s.push(n.badge)}),$.post(e+"/badges/mine",{badges:s},null)}})}})}),$("button.openbadge-download").on("click",function(){var n="http://backpack.openbadges.org/baker?assertion="+window.encodeURIComponent($(this).data("assertion-url"));window.open(n,"_blank","",!1)})})}]);