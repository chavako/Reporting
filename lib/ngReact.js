!function(a,b){"undefined"!=typeof module&&module.exports?module.exports=b(require("react"),require("react-dom"),require("angular")):"function"==typeof define&&define.amd?define(["react","react-dom","angular"],function(c,d,angular){return a.ngReact=b(c,d,angular)}):a.ngReact=b(a.React,a.ReactDOM,a.angular)}(this,function(React,a,angular){"use strict";function b(a,b){if(angular.isFunction(a))return a;if(!a)throw new Error("ReactComponent name attribute must be specified");var c;try{c=b.get(a)}catch(d){}if(!c)try{c=a.split(".").reduce(function(a,b){return a[b]},window)}catch(d){}if(!c)throw Error("Cannot find react component "+a);return c}function c(a,b){if(a.wrappedInApply)return a;var c=function(){var c=arguments,d=b.$root.$$phase;return"$apply"===d||"$digest"===d?a.apply(null,c):b.$apply(function(){return a.apply(null,c)})};return c.wrappedInApply=!0,c}function d(a,b){return Object.keys(a||{}).reduce(function(d,e){var f=a[e];return d[e]=angular.isFunction(f)?c(f,b):f,d},{})}function e(a,b,c,d){"collection"===a&&angular.isFunction(b.$watchCollection)?c.forEach(function(a){b.$watchCollection(a,d)}):"reference"===a?angular.isFunction(b.$watchGroup)?b.$watchGroup(c,d):c.forEach(function(a){b.$watch(a,d)}):c.forEach(function(a){b.$watch(a,d,!0)})}function f(b,c,d,e){d.$evalAsync(function(){a.render(React.createElement(b,c),e[0])})}var g=function(c){return{restrict:"E",replace:!0,link:function(g,h,i){var j=b(i.name,c),k=function(){var a=g.$eval(i.props),b=d(a,g);f(j,b,g,h)};i.props?e(i.watchDepth,g,[i.props],k):k(),g.$on("$destroy",function(){i.onScopeDestroy?g.$eval(i.onScopeDestroy,{unmountComponent:a.unmountComponentAtNode.bind(this,h[0])}):a.unmountComponentAtNode(h[0])})}}},h=function(c){return function(g,h,i,j){var k={restrict:"E",replace:!0,link:function(i,k,l){var m=b(g,c);h=h||Object.keys(m.propTypes||{});var n=function(){var a={};h.forEach(function(b){a[b]=i.$eval(l[b])}),a=d(a,i),a=angular.extend({},a,j),f(m,a,i,k)},o=h.map(function(a){return l[a]});e(l.watchDepth,i,o,n),n(),i.$on("$destroy",function(){l.onScopeDestroy?i.$eval(l.onScopeDestroy,{unmountComponent:a.unmountComponentAtNode.bind(this,k[0])}):a.unmountComponentAtNode(k[0])})}};return angular.extend(k,i)}};return angular.module("react",[]).directive("reactComponent",["$injector",g]).factory("reactDirective",["$injector",h])});