!function(n){function t(r){if(e[r])return e[r].exports;var u=e[r]={i:r,l:!1,exports:{}};return n[r].call(u.exports,u,u.exports,t),u.l=!0,u.exports}var e={};return t.m=n,t.c=e,t.i=function(n){return n},t.d=function(n,t,e){Object.defineProperty(n,t,{configurable:!1,enumerable:!0,get:e})},t.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},t.p="",t(t.s=0)}([function(n,t){$(function(){var n=$('form[name="search-form"]');n.find('input[name="difficulty-level"]').parent().find("button").on("click",function(){var t=$(this);t.parents(".input-group").find("button").removeClass("active"),t.addClass("active"),n.find('input[name="difficulty-level"]').val(t.data("value"))})})}]);