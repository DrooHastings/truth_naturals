/*! VelocityJS.org (1.5.0). (C) 2014 Julian Shapiro. MIT @license: en.wikipedia.org/wiki/MIT_License */
/*! VelocityJS.org jQuery Shim (1.0.1). (C) 2014 The jQuery Foundation. MIT @license: en.wikipedia.org/wiki/MIT_License. */
!function(e){"use strict";function t(e){var t=e.length,o=n.type(e);return"function"!==o&&!n.isWindow(e)&&(!(1!==e.nodeType||!t)||("array"===o||0===t||"number"==typeof t&&t>0&&t-1 in e))}if(!e.jQuery){var n=function(e,t){return new n.fn.init(e,t)};n.isWindow=function(e){return e&&e===e.window},n.type=function(e){return e?"object"==typeof e||"function"==typeof e?i[a.call(e)]||"object":typeof e:e+""},n.isArray=Array.isArray||function(e){return"array"===n.type(e)},n.isPlainObject=function(e){var t;if(!e||"object"!==n.type(e)||e.nodeType||n.isWindow(e))return!1;try{if(e.constructor&&!r.call(e,"constructor")&&!r.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(o){return!1}for(t in e);return void 0===t||r.call(e,t)},n.each=function(e,n,o){var i,r=0,a=e.length,s=t(e);if(o){if(s)for(;r<a&&(i=n.apply(e[r],o),i!==!1);r++);else for(r in e)if(e.hasOwnProperty(r)&&(i=n.apply(e[r],o),i===!1))break}else if(s)for(;r<a&&(i=n.call(e[r],r,e[r]),i!==!1);r++);else for(r in e)if(e.hasOwnProperty(r)&&(i=n.call(e[r],r,e[r]),i===!1))break;return e},n.data=function(e,t,i){if(void 0===i){var r=e[n.expando],a=r&&o[r];if(void 0===t)return a;if(a&&t in a)return a[t]}else if(void 0!==t){var s=e[n.expando]||(e[n.expando]=++n.uuid);return o[s]=o[s]||{},o[s][t]=i,i}},n.removeData=function(e,t){var i=e[n.expando],r=i&&o[i];r&&(t?n.each(t,function(e,t){delete r[t]}):delete o[i])},n.extend=function(){var e,t,o,i,r,a,s=arguments[0]||{},l=1,u=arguments.length,c=!1;for("boolean"==typeof s&&(c=s,s=arguments[l]||{},l++),"object"!=typeof s&&"function"!==n.type(s)&&(s={}),l===u&&(s=this,l--);l<u;l++)if(r=arguments[l])for(i in r)r.hasOwnProperty(i)&&(e=s[i],o=r[i],s!==o&&(c&&o&&(n.isPlainObject(o)||(t=n.isArray(o)))?(t?(t=!1,a=e&&n.isArray(e)?e:[]):a=e&&n.isPlainObject(e)?e:{},s[i]=n.extend(c,a,o)):void 0!==o&&(s[i]=o)));return s},n.queue=function(e,o,i){function r(e,n){var o=n||[];return e&&(t(Object(e))?!function(e,t){for(var n=+t.length,o=0,i=e.length;o<n;)e[i++]=t[o++];if(n!==n)for(;void 0!==t[o];)e[i++]=t[o++];return e.length=i,e}(o,"string"==typeof e?[e]:e):[].push.call(o,e)),o}if(e){o=(o||"fx")+"queue";var a=n.data(e,o);return i?(!a||n.isArray(i)?a=n.data(e,o,r(i)):a.push(i),a):a||[]}},n.dequeue=function(e,t){n.each(e.nodeType?[e]:e,function(e,o){t=t||"fx";var i=n.queue(o,t),r=i.shift();"inprogress"===r&&(r=i.shift()),r&&("fx"===t&&i.unshift("inprogress"),r.call(o,function(){n.dequeue(o,t)}))})},n.fn=n.prototype={init:function(e){if(e.nodeType)return this[0]=e,this;throw new Error("Not a DOM node.")},offset:function(){var t=this[0].getBoundingClientRect?this[0].getBoundingClientRect():{top:0,left:0};return{top:t.top+(e.pageYOffset||document.scrollTop||0)-(document.clientTop||0),left:t.left+(e.pageXOffset||document.scrollLeft||0)-(document.clientLeft||0)}},position:function(){function e(e){for(var t=e.offsetParent;t&&"html"!==t.nodeName.toLowerCase()&&t.style&&"static"===t.style.position;)t=t.offsetParent;return t||document}var t=this[0],o=e(t),i=this.offset(),r=/^(?:body|html)$/i.test(o.nodeName)?{top:0,left:0}:n(o).offset();return i.top-=parseFloat(t.style.marginTop)||0,i.left-=parseFloat(t.style.marginLeft)||0,o.style&&(r.top+=parseFloat(o.style.borderTopWidth)||0,r.left+=parseFloat(o.style.borderLeftWidth)||0),{top:i.top-r.top,left:i.left-r.left}}};var o={};n.expando="velocity"+(new Date).getTime(),n.uuid=0;for(var i={},r=i.hasOwnProperty,a=i.toString,s="Boolean Number String Function Array Date RegExp Object Error".split(" "),l=0;l<s.length;l++)i["[object "+s[l]+"]"]=s[l].toLowerCase();n.fn.init.prototype=n.fn,e.Velocity={Utilities:n}}}(window),function(e){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e():"function"==typeof define&&define.amd?define(e):e()}(function(){"use strict";return function(e,t,n,o){/* Array compacting. Copyright Lo-Dash. MIT License: https://github.com/lodash/lodash/blob/master/LICENSE.txt */
function i(e){for(var t=-1,n=e?e.length:0,o=[];++t<n;){var i=e[t];i&&o.push(i)}return o}function r(e){return b.isWrapped(e)?e=y.call(e):b.isNode(e)&&(e=[e]),e}function a(e){var t=m.data(e,"velocity");return null===t?o:t}function s(e,t){var n=a(e);n&&n.delayTimer&&!n.delayPaused&&(n.delayRemaining=n.delay-t+n.delayBegin,n.delayPaused=!0,clearTimeout(n.delayTimer.setTimeout))}function l(e,t){var n=a(e);n&&n.delayTimer&&n.delayPaused&&(n.delayPaused=!1,n.delayTimer.setTimeout=setTimeout(n.delayTimer.next,n.delayRemaining))}function u(e){return function(t){return Math.round(t*e)*(1/e)}}/* Bezier curve function generator. Copyright Gaetan Renaudeau. MIT License: http://en.wikipedia.org/wiki/MIT_License */
function c(e,n,o,i){function r(e,t){return 1-3*t+3*e}function a(e,t){return 3*t-6*e}function s(e){return 3*e}function l(e,t,n){return((r(t,n)*e+a(t,n))*e+s(t))*e}function u(e,t,n){return 3*r(t,n)*e*e+2*a(t,n)*e+s(t)}function c(t,n){for(var i=0;i<h;++i){var r=u(n,e,o);if(0===r)return n;var a=l(n,e,o)-t;n-=a/r}return n}function p(){for(var t=0;t<w;++t)C[t]=l(t*b,e,o)}function d(t,n,i){var r,a,s=0;do a=n+(i-n)/2,r=l(a,e,o)-t,r>0?i=a:n=a;while(Math.abs(r)>v&&++s<y);return a}function f(t){for(var n=0,i=1,r=w-1;i!==r&&C[i]<=t;++i)n+=b;--i;var a=(t-C[i])/(C[i+1]-C[i]),s=n+a*b,l=u(s,e,o);return l>=g?c(t,s):0===l?s:d(t,n,n+b)}function m(){P=!0,e===n&&o===i||p()}var h=4,g=.001,v=1e-7,y=10,w=11,b=1/(w-1),x="Float32Array"in t;if(4!==arguments.length)return!1;for(var S=0;S<4;++S)if("number"!=typeof arguments[S]||isNaN(arguments[S])||!isFinite(arguments[S]))return!1;e=Math.min(e,1),o=Math.min(o,1),e=Math.max(e,0),o=Math.max(o,0);var C=x?new Float32Array(w):new Array(w),P=!1,k=function(t){return P||m(),e===n&&o===i?t:0===t?0:1===t?1:l(f(t),n,i)};k.getControlPoints=function(){return[{x:e,y:n},{x:o,y:i}]};var T="generateBezier("+[e,n,o,i]+")";return k.toString=function(){return T},k}function p(e,t){var n=e;return b.isString(e)?P.Easings[e]||(n=!1):n=b.isArray(e)&&1===e.length?u.apply(null,e):b.isArray(e)&&2===e.length?k.apply(null,e.concat([t])):!(!b.isArray(e)||4!==e.length)&&c.apply(null,e),n===!1&&(n=P.Easings[P.defaults.easing]?P.defaults.easing:C),n}function d(e){if(e){var t=P.timestamp&&e!==!0?e:v.now(),n=P.State.calls.length;n>1e4&&(P.State.calls=i(P.State.calls),n=P.State.calls.length);for(var r=0;r<n;r++)if(P.State.calls[r]){var s=P.State.calls[r],l=s[0],u=s[2],c=s[3],p=!!c,g=null,y=s[5],w=s[6];if(c||(c=P.State.calls[r][3]=t-16),y){if(y.resume!==!0)continue;c=s[3]=Math.round(t-w-16),s[5]=null}w=s[6]=t-c;for(var x=Math.min(w/u.duration,1),S=0,C=l.length;S<C;S++){var k=l[S],I=k.element;if(a(I)){var V=!1;if(u.display!==o&&null!==u.display&&"none"!==u.display){if("flex"===u.display){var E=["-webkit-box","-moz-box","-ms-flexbox","-webkit-flex"];m.each(E,function(e,t){T.setPropertyValue(I,"display",t)})}T.setPropertyValue(I,"display",u.display)}u.visibility!==o&&"hidden"!==u.visibility&&T.setPropertyValue(I,"visibility",u.visibility);for(var $ in k)if(k.hasOwnProperty($)&&"element"!==$){var F,N=k[$],j=b.isString(N.easing)?P.Easings[N.easing]:N.easing;if(b.isString(N.pattern)){var z=1===x?function(e,t,n){var o=N.endValue[t];return n?Math.round(o):o}:function(e,t,n){var o=N.startValue[t],i=N.endValue[t]-o,r=o+i*j(x,u,i);return n?Math.round(r):r};F=N.pattern.replace(/{(\d+)(!)?}/g,z)}else if(1===x)F=N.endValue;else{var M=N.endValue-N.startValue;F=N.startValue+M*j(x,u,M)}if(!p&&F===N.currentValue)continue;if(N.currentValue=F,"tween"===$)g=F;else{var W;if(T.Hooks.registered[$]){W=T.Hooks.getRoot($);var O=a(I).rootPropertyValueCache[W];O&&(N.rootPropertyValue=O)}var D=T.setPropertyValue(I,$,N.currentValue+(h<9&&0===parseFloat(F)?"":N.unitType),N.rootPropertyValue,N.scrollData);T.Hooks.registered[$]&&(T.Normalizations.registered[W]?a(I).rootPropertyValueCache[W]=T.Normalizations.registered[W]("extract",null,D[1]):a(I).rootPropertyValueCache[W]=D[1]),"transform"===D[0]&&(V=!0)}}u.mobileHA&&a(I).transformCache.translate3d===o&&(a(I).transformCache.translate3d="(0px, 0px, 0px)",V=!0),V&&T.flushTransformCache(I)}}u.display!==o&&"none"!==u.display&&(P.State.calls[r][2].display=!1),u.visibility!==o&&"hidden"!==u.visibility&&(P.State.calls[r][2].visibility=!1),u.progress&&u.progress.call(s[1],s[1],x,Math.max(0,c+u.duration-t),c,g),1===x&&f(r)}}P.State.isTicking&&A(d)}function f(e,t){if(!P.State.calls[e])return!1;for(var n=P.State.calls[e][0],i=P.State.calls[e][1],r=P.State.calls[e][2],s=P.State.calls[e][4],l=!1,u=0,c=n.length;u<c;u++){var p=n[u].element;t||r.loop||("none"===r.display&&T.setPropertyValue(p,"display",r.display),"hidden"===r.visibility&&T.setPropertyValue(p,"visibility",r.visibility));var d=a(p);if(r.loop!==!0&&(m.queue(p)[1]===o||!/\.velocityQueueEntryFlag/i.test(m.queue(p)[1]))&&d){d.isAnimating=!1,d.rootPropertyValueCache={};var f=!1;m.each(T.Lists.transforms3D,function(e,t){var n=/^scale/.test(t)?1:0,i=d.transformCache[t];d.transformCache[t]!==o&&new RegExp("^\\("+n+"[^.]").test(i)&&(f=!0,delete d.transformCache[t])}),r.mobileHA&&(f=!0,delete d.transformCache.translate3d),f&&T.flushTransformCache(p),T.Values.removeClass(p,"velocity-animating")}if(!t&&r.complete&&!r.loop&&u===c-1)try{r.complete.call(i,i)}catch(h){setTimeout(function(){throw h},1)}s&&r.loop!==!0&&s(i),d&&r.loop===!0&&!t&&(m.each(d.tweensContainer,function(e,t){if(/^rotate/.test(e)&&(parseFloat(t.startValue)-parseFloat(t.endValue))%360===0){var n=t.startValue;t.startValue=t.endValue,t.endValue=n}/^backgroundPosition/.test(e)&&100===parseFloat(t.endValue)&&"%"===t.unitType&&(t.endValue=0,t.startValue=100)}),P(p,"reverse",{loop:!0,delay:r.delay})),r.queue!==!1&&m.dequeue(p,r.queue)}P.State.calls[e]=!1;for(var g=0,v=P.State.calls.length;g<v;g++)if(P.State.calls[g]!==!1){l=!0;break}l===!1&&(P.State.isTicking=!1,delete P.State.calls,P.State.calls=[])}var m,h=function(){if(n.documentMode)return n.documentMode;for(var e=7;e>4;e--){var t=n.createElement("div");if(t.innerHTML="<!--[if IE "+e+"]><span></span><![endif]-->",t.getElementsByTagName("span").length)return t=null,e}return o}(),g=function(){var e=0;return t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||function(t){var n,o=(new Date).getTime();/* Technique by Erik Moller. MIT license: https://gist.github.com/paulirish/1579671 */
return n=Math.max(0,16-(o-e)),e=o+n,setTimeout(function(){t(o+n)},n)}}(),v=function(){var e=t.performance||{};if("function"!=typeof e.now){var n=e.timing&&e.timing.navigationStart?e.timing.navigationStart:(new Date).getTime();e.now=function(){return(new Date).getTime()-n}}return e}(),y=function(){var e=Array.prototype.slice;try{return e.call(n.documentElement),e}catch(t){return function(t,n){var o=this.length;if("number"!=typeof t&&(t=0),"number"!=typeof n&&(n=o),this.slice)return e.call(this,t,n);var i,r=[],a=t>=0?t:Math.max(0,o+t),s=n<0?o+n:Math.min(n,o),l=s-a;if(l>0)if(r=new Array(l),this.charAt)for(i=0;i<l;i++)r[i]=this.charAt(a+i);else for(i=0;i<l;i++)r[i]=this[a+i];return r}}}(),w=function(){return Array.prototype.includes?function(e,t){return e.includes(t)}:Array.prototype.indexOf?function(e,t){return e.indexOf(t)>=0}:function(e,t){for(var n=0;n<e.length;n++)if(e[n]===t)return!0;return!1}},b={isNumber:function(e){return"number"==typeof e},isString:function(e){return"string"==typeof e},isArray:Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)},isFunction:function(e){return"[object Function]"===Object.prototype.toString.call(e)},isNode:function(e){return e&&e.nodeType},isWrapped:function(e){return e&&e!==t&&b.isNumber(e.length)&&!b.isString(e)&&!b.isFunction(e)&&!b.isNode(e)&&(0===e.length||b.isNode(e[0]))},isSVG:function(e){return t.SVGElement&&e instanceof t.SVGElement},isEmptyObject:function(e){for(var t in e)if(e.hasOwnProperty(t))return!1;return!0}},x=!1;if(e.fn&&e.fn.jquery?(m=e,x=!0):m=t.Velocity.Utilities,h<=8&&!x)throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");if(h<=7)return void(jQuery.fn.velocity=jQuery.fn.animate);var S=400,C="swing",P={State:{isMobile:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),isAndroid:/Android/i.test(navigator.userAgent),isGingerbread:/Android 2\.3\.[3-7]/i.test(navigator.userAgent),isChrome:t.chrome,isFirefox:/Firefox/i.test(navigator.userAgent),prefixElement:n.createElement("div"),prefixMatches:{},scrollAnchor:null,scrollPropertyLeft:null,scrollPropertyTop:null,isTicking:!1,calls:[],delayedElements:{count:0}},CSS:{},Utilities:m,Redirects:{},Easings:{},Promise:t.Promise,defaults:{queue:"",duration:S,easing:C,begin:o,complete:o,progress:o,display:o,visibility:o,loop:!1,delay:!1,mobileHA:!0,_cacheValues:!0,promiseRejectEmpty:!0},init:function(e){m.data(e,"velocity",{isSVG:b.isSVG(e),isAnimating:!1,computedStyle:null,tweensContainer:null,rootPropertyValueCache:{},transformCache:{}})},hook:null,mock:!1,version:{major:1,minor:5,patch:0},debug:!1,timestamp:!0,pauseAll:function(e){var t=(new Date).getTime();m.each(P.State.calls,function(t,n){if(n){if(e!==o&&(n[2].queue!==e||n[2].queue===!1))return!0;n[5]={resume:!1}}}),m.each(P.State.delayedElements,function(e,n){n&&s(n,t)})},resumeAll:function(e){var t=(new Date).getTime();m.each(P.State.calls,function(t,n){if(n){if(e!==o&&(n[2].queue!==e||n[2].queue===!1))return!0;n[5]&&(n[5].resume=!0)}}),m.each(P.State.delayedElements,function(e,n){n&&l(n,t)})}};t.pageYOffset!==o?(P.State.scrollAnchor=t,P.State.scrollPropertyLeft="pageXOffset",P.State.scrollPropertyTop="pageYOffset"):(P.State.scrollAnchor=n.documentElement||n.body.parentNode||n.body,P.State.scrollPropertyLeft="scrollLeft",P.State.scrollPropertyTop="scrollTop");/* Runge-Kutta spring physics function generator. Adapted from Framer.js, copyright Koen Bok. MIT License: http://en.wikipedia.org/wiki/MIT_License */
/* Given a tension, friction, and duration, a simulation at 60FPS will first run without a defined duration in order to calculate the full path. A second pass
		 then adjusts the time delta -- using the relation between actual time and duration -- to calculate the path for the duration-constrained animation. */
var k=function(){function e(e){return-e.tension*e.x-e.friction*e.v}function t(t,n,o){var i={x:t.x+o.dx*n,v:t.v+o.dv*n,tension:t.tension,friction:t.friction};return{dx:i.v,dv:e(i)}}function n(n,o){var i={dx:n.v,dv:e(n)},r=t(n,.5*o,i),a=t(n,.5*o,r),s=t(n,o,a),l=1/6*(i.dx+2*(r.dx+a.dx)+s.dx),u=1/6*(i.dv+2*(r.dv+a.dv)+s.dv);return n.x=n.x+l*o,n.v=n.v+u*o,n}return function o(e,t,i){var r,a,s,l={x:-1,v:0,tension:null,friction:null},u=[0],c=0,p=1e-4,d=.016;for(e=parseFloat(e)||500,t=parseFloat(t)||20,i=i||null,l.tension=e,l.friction=t,r=null!==i,r?(c=o(e,t),a=c/i*d):a=d;;)if(s=n(s||l,a),u.push(1+s.x),c+=16,!(Math.abs(s.x)>p&&Math.abs(s.v)>p))break;return r?function(e){return u[e*(u.length-1)|0]}:c}}();P.Easings={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},spring:function(e){return 1-Math.cos(4.5*e*Math.PI)*Math.exp(6*-e)}},m.each([["ease",[.25,.1,.25,1]],["ease-in",[.42,0,1,1]],["ease-out",[0,0,.58,1]],["ease-in-out",[.42,0,.58,1]],["easeInSine",[.47,0,.745,.715]],["easeOutSine",[.39,.575,.565,1]],["easeInOutSine",[.445,.05,.55,.95]],["easeInQuad",[.55,.085,.68,.53]],["easeOutQuad",[.25,.46,.45,.94]],["easeInOutQuad",[.455,.03,.515,.955]],["easeInCubic",[.55,.055,.675,.19]],["easeOutCubic",[.215,.61,.355,1]],["easeInOutCubic",[.645,.045,.355,1]],["easeInQuart",[.895,.03,.685,.22]],["easeOutQuart",[.165,.84,.44,1]],["easeInOutQuart",[.77,0,.175,1]],["easeInQuint",[.755,.05,.855,.06]],["easeOutQuint",[.23,1,.32,1]],["easeInOutQuint",[.86,0,.07,1]],["easeInExpo",[.95,.05,.795,.035]],["easeOutExpo",[.19,1,.22,1]],["easeInOutExpo",[1,0,0,1]],["easeInCirc",[.6,.04,.98,.335]],["easeOutCirc",[.075,.82,.165,1]],["easeInOutCirc",[.785,.135,.15,.86]]],function(e,t){P.Easings[t[0]]=c.apply(null,t[1])});var T=P.CSS={RegEx:{isHex:/^#([A-f\d]{3}){1,2}$/i,valueUnwrap:/^[A-z]+\((.*)\)$/i,wrappedValueAlreadyExtracted:/[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,valueSplit:/([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi},Lists:{colors:["fill","stroke","stopColor","color","backgroundColor","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor","outlineColor"],transformsBase:["translateX","translateY","scale","scaleX","scaleY","skewX","skewY","rotateZ"],transforms3D:["transformPerspective","translateZ","scaleZ","rotateX","rotateY"],units:["%","em","ex","ch","rem","vw","vh","vmin","vmax","cm","mm","Q","in","pc","pt","px","deg","grad","rad","turn","s","ms"],colorNames:{aliceblue:"240,248,255",antiquewhite:"250,235,215",aquamarine:"127,255,212",aqua:"0,255,255",azure:"240,255,255",beige:"245,245,220",bisque:"255,228,196",black:"0,0,0",blanchedalmond:"255,235,205",blueviolet:"138,43,226",blue:"0,0,255",brown:"165,42,42",burlywood:"222,184,135",cadetblue:"95,158,160",chartreuse:"127,255,0",chocolate:"210,105,30",coral:"255,127,80",cornflowerblue:"100,149,237",cornsilk:"255,248,220",crimson:"220,20,60",cyan:"0,255,255",darkblue:"0,0,139",darkcyan:"0,139,139",darkgoldenrod:"184,134,11",darkgray:"169,169,169",darkgrey:"169,169,169",darkgreen:"0,100,0",darkkhaki:"189,183,107",darkmagenta:"139,0,139",darkolivegreen:"85,107,47",darkorange:"255,140,0",darkorchid:"153,50,204",darkred:"139,0,0",darksalmon:"233,150,122",darkseagreen:"143,188,143",darkslateblue:"72,61,139",darkslategray:"47,79,79",darkturquoise:"0,206,209",darkviolet:"148,0,211",deeppink:"255,20,147",deepskyblue:"0,191,255",dimgray:"105,105,105",dimgrey:"105,105,105",dodgerblue:"30,144,255",firebrick:"178,34,34",floralwhite:"255,250,240",forestgreen:"34,139,34",fuchsia:"255,0,255",gainsboro:"220,220,220",ghostwhite:"248,248,255",gold:"255,215,0",goldenrod:"218,165,32",gray:"128,128,128",grey:"128,128,128",greenyellow:"173,255,47",green:"0,128,0",honeydew:"240,255,240",hotpink:"255,105,180",indianred:"205,92,92",indigo:"75,0,130",ivory:"255,255,240",khaki:"240,230,140",lavenderblush:"255,240,245",lavender:"230,230,250",lawngreen:"124,252,0",lemonchiffon:"255,250,205",lightblue:"173,216,230",lightcoral:"240,128,128",lightcyan:"224,255,255",lightgoldenrodyellow:"250,250,210",lightgray:"211,211,211",lightgrey:"211,211,211",lightgreen:"144,238,144",lightpink:"255,182,193",lightsalmon:"255,160,122",lightseagreen:"32,178,170",lightskyblue:"135,206,250",lightslategray:"119,136,153",lightsteelblue:"176,196,222",lightyellow:"255,255,224",limegreen:"50,205,50",lime:"0,255,0",linen:"250,240,230",magenta:"255,0,255",maroon:"128,0,0",mediumaquamarine:"102,205,170",mediumblue:"0,0,205",mediumorchid:"186,85,211",mediumpurple:"147,112,219",mediumseagreen:"60,179,113",mediumslateblue:"123,104,238",mediumspringgreen:"0,250,154",mediumturquoise:"72,209,204",mediumvioletred:"199,21,133",midnightblue:"25,25,112",mintcream:"245,255,250",mistyrose:"255,228,225",moccasin:"255,228,181",navajowhite:"255,222,173",navy:"0,0,128",oldlace:"253,245,230",olivedrab:"107,142,35",olive:"128,128,0",orangered:"255,69,0",orange:"255,165,0",orchid:"218,112,214",palegoldenrod:"238,232,170",palegreen:"152,251,152",paleturquoise:"175,238,238",palevioletred:"219,112,147",papayawhip:"255,239,213",peachpuff:"255,218,185",peru:"205,133,63",pink:"255,192,203",plum:"221,160,221",powderblue:"176,224,230",purple:"128,0,128",red:"255,0,0",rosybrown:"188,143,143",royalblue:"65,105,225",saddlebrown:"139,69,19",salmon:"250,128,114",sandybrown:"244,164,96",seagreen:"46,139,87",seashell:"255,245,238",sienna:"160,82,45",silver:"192,192,192",skyblue:"135,206,235",slateblue:"106,90,205",slategray:"112,128,144",snow:"255,250,250",springgreen:"0,255,127",steelblue:"70,130,180",tan:"210,180,140",teal:"0,128,128",thistle:"216,191,216",tomato:"255,99,71",turquoise:"64,224,208",violet:"238,130,238",wheat:"245,222,179",whitesmoke:"245,245,245",white:"255,255,255",yellowgreen:"154,205,50",yellow:"255,255,0"}},Hooks:{templates:{textShadow:["Color X Y Blur","black 0px 0px 0px"],boxShadow:["Color X Y Blur Spread","black 0px 0px 0px 0px"],clip:["Top Right Bottom Left","0px 0px 0px 0px"],backgroundPosition:["X Y","0% 0%"],transformOrigin:["X Y Z","50% 50% 0px"],perspectiveOrigin:["X Y","50% 50%"]},registered:{},register:function(){for(var e=0;e<T.Lists.colors.length;e++){var t="color"===T.Lists.colors[e]?"0 0 0 1":"255 255 255 1";T.Hooks.templates[T.Lists.colors[e]]=["Red Green Blue Alpha",t]}var n,o,i;if(h)for(n in T.Hooks.templates)if(T.Hooks.templates.hasOwnProperty(n)){o=T.Hooks.templates[n],i=o[0].split(" ");var r=o[1].match(T.RegEx.valueSplit);"Color"===i[0]&&(i.push(i.shift()),r.push(r.shift()),T.Hooks.templates[n]=[i.join(" "),r.join(" ")])}for(n in T.Hooks.templates)if(T.Hooks.templates.hasOwnProperty(n)){o=T.Hooks.templates[n],i=o[0].split(" ");for(var a in i)if(i.hasOwnProperty(a)){var s=n+i[a],l=a;T.Hooks.registered[s]=[n,l]}}},getRoot:function(e){var t=T.Hooks.registered[e];return t?t[0]:e},getUnit:function(e,t){var n=(e.substr(t||0,5).match(/^[a-z%]+/)||[])[0]||"";return n&&w(T.Lists.units,n)?n:""},fixColors:function(e){return e.replace(/(rgba?\(\s*)?(\b[a-z]+\b)/g,function(e,t,n){return T.Lists.colorNames.hasOwnProperty(n)?(t?t:"rgba(")+T.Lists.colorNames[n]+(t?"":",1)"):t+n})},cleanRootPropertyValue:function(e,t){return T.RegEx.valueUnwrap.test(t)&&(t=t.match(T.RegEx.valueUnwrap)[1]),T.Values.isCSSNullValue(t)&&(t=T.Hooks.templates[e][1]),t},extractValue:function(e,t){var n=T.Hooks.registered[e];if(n){var o=n[0],i=n[1];return t=T.Hooks.cleanRootPropertyValue(o,t),t.toString().match(T.RegEx.valueSplit)[i]}return t},injectValue:function(e,t,n){var o=T.Hooks.registered[e];if(o){var i,r,a=o[0],s=o[1];return n=T.Hooks.cleanRootPropertyValue(a,n),i=n.toString().match(T.RegEx.valueSplit),i[s]=t,r=i.join(" ")}return n}},Normalizations:{registered:{clip:function(e,t,n){switch(e){case"name":return"clip";case"extract":var o;return T.RegEx.wrappedValueAlreadyExtracted.test(n)?o=n:(o=n.toString().match(T.RegEx.valueUnwrap),o=o?o[1].replace(/,(\s+)?/g," "):n),o;case"inject":return"rect("+n+")"}},blur:function(e,t,n){switch(e){case"name":return P.State.isFirefox?"filter":"-webkit-filter";case"extract":var o=parseFloat(n);if(!o&&0!==o){var i=n.toString().match(/blur\(([0-9]+[A-z]+)\)/i);o=i?i[1]:0}return o;case"inject":return parseFloat(n)?"blur("+n+")":"none"}},opacity:function(e,t,n){if(h<=8)switch(e){case"name":return"filter";case"extract":var o=n.toString().match(/alpha\(opacity=(.*)\)/i);return n=o?o[1]/100:1;case"inject":return t.style.zoom=1,parseFloat(n)>=1?"":"alpha(opacity="+parseInt(100*parseFloat(n),10)+")"}else switch(e){case"name":return"opacity";case"extract":return n;case"inject":return n}}},register:function(){function e(e,t,n){var o="border-box"===T.getPropertyValue(t,"boxSizing").toString().toLowerCase();if(o===(n||!1)){var i,r,a=0,s="width"===e?["Left","Right"]:["Top","Bottom"],l=["padding"+s[0],"padding"+s[1],"border"+s[0]+"Width","border"+s[1]+"Width"];for(i=0;i<l.length;i++)r=parseFloat(T.getPropertyValue(t,l[i])),isNaN(r)||(a+=r);return n?-a:a}return 0}function t(t,n){return function(o,i,r){switch(o){case"name":return t;case"extract":return parseFloat(r)+e(t,i,n);case"inject":return parseFloat(r)-e(t,i,n)+"px"}}}h&&!(h>9)||P.State.isGingerbread||(T.Lists.transformsBase=T.Lists.transformsBase.concat(T.Lists.transforms3D));for(var n=0;n<T.Lists.transformsBase.length;n++)!function(){var e=T.Lists.transformsBase[n];T.Normalizations.registered[e]=function(t,n,i){switch(t){case"name":return"transform";case"extract":return a(n)===o||a(n).transformCache[e]===o?/^scale/i.test(e)?1:0:a(n).transformCache[e].replace(/[()]/g,"");case"inject":var r=!1;switch(e.substr(0,e.length-1)){case"translate":r=!/(%|px|em|rem|vw|vh|\d)$/i.test(i);break;case"scal":case"scale":P.State.isAndroid&&a(n).transformCache[e]===o&&i<1&&(i=1),r=!/(\d)$/i.test(i);break;case"skew":r=!/(deg|\d)$/i.test(i);break;case"rotate":r=!/(deg|\d)$/i.test(i)}return r||(a(n).transformCache[e]="("+i+")"),a(n).transformCache[e]}}}();for(var i=0;i<T.Lists.colors.length;i++)!function(){var e=T.Lists.colors[i];T.Normalizations.registered[e]=function(t,n,i){switch(t){case"name":return e;case"extract":var r;if(T.RegEx.wrappedValueAlreadyExtracted.test(i))r=i;else{var a,s={black:"rgb(0, 0, 0)",blue:"rgb(0, 0, 255)",gray:"rgb(128, 128, 128)",green:"rgb(0, 128, 0)",red:"rgb(255, 0, 0)",white:"rgb(255, 255, 255)"};/^[A-z]+$/i.test(i)?a=s[i]!==o?s[i]:s.black:T.RegEx.isHex.test(i)?a="rgb("+T.Values.hexToRgb(i).join(" ")+")":/^rgba?\(/i.test(i)||(a=s.black),r=(a||i).toString().match(T.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g," ")}return(!h||h>8)&&3===r.split(" ").length&&(r+=" 1"),r;case"inject":return/^rgb/.test(i)?i:(h<=8?4===i.split(" ").length&&(i=i.split(/\s+/).slice(0,3).join(" ")):3===i.split(" ").length&&(i+=" 1"),(h<=8?"rgb":"rgba")+"("+i.replace(/\s+/g,",").replace(/\.(\d)+(?=,)/g,"")+")")}}}();T.Normalizations.registered.innerWidth=t("width",!0),T.Normalizations.registered.innerHeight=t("height",!0),T.Normalizations.registered.outerWidth=t("width"),T.Normalizations.registered.outerHeight=t("height")}},Names:{camelCase:function(e){return e.replace(/-(\w)/g,function(e,t){return t.toUpperCase()})},SVGAttribute:function(e){var t="width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";return(h||P.State.isAndroid&&!P.State.isChrome)&&(t+="|transform"),new RegExp("^("+t+")$","i").test(e)},prefixCheck:function(e){if(P.State.prefixMatches[e])return[P.State.prefixMatches[e],!0];for(var t=["","Webkit","Moz","ms","O"],n=0,o=t.length;n<o;n++){var i;if(i=0===n?e:t[n]+e.replace(/^\w/,function(e){return e.toUpperCase()}),b.isString(P.State.prefixElement.style[i]))return P.State.prefixMatches[e]=i,[i,!0]}return[e,!1]}},Values:{/* Hex to RGB conversion. Copyright Tim Down: http://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb */
hexToRgb:function(e){var t,n=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,o=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;return e=e.replace(n,function(e,t,n,o){return t+t+n+n+o+o}),t=o.exec(e),t?[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)]:[0,0,0]},isCSSNullValue:function(e){return!e||/^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(e)},getUnitType:function(e){return/^(rotate|skew)/i.test(e)?"deg":/(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(e)?"":"px"},getDisplayType:function(e){var t=e&&e.tagName.toString().toLowerCase();return/^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(t)?"inline":/^(li)$/i.test(t)?"list-item":/^(tr)$/i.test(t)?"table-row":/^(table)$/i.test(t)?"table":/^(tbody)$/i.test(t)?"table-row-group":"block"},addClass:function(e,t){if(e)if(e.classList)e.classList.add(t);else if(b.isString(e.className))e.className+=(e.className.length?" ":"")+t;else{var n=e.getAttribute(h<=7?"className":"class")||"";e.setAttribute("class",n+(n?" ":"")+t)}},removeClass:function(e,t){if(e)if(e.classList)e.classList.remove(t);else if(b.isString(e.className))e.className=e.className.toString().replace(new RegExp("(^|\\s)"+t.split(" ").join("|")+"(\\s|$)","gi")," ");else{var n=e.getAttribute(h<=7?"className":"class")||"";e.setAttribute("class",n.replace(new RegExp("(^|s)"+t.split(" ").join("|")+"(s|$)","gi")," "))}}},getPropertyValue:function(e,n,i,r){function s(e,n){var i=0;if(h<=8)i=m.css(e,n);else{var l=!1;/^(width|height)$/.test(n)&&0===T.getPropertyValue(e,"display")&&(l=!0,T.setPropertyValue(e,"display",T.Values.getDisplayType(e)));var u=function(){l&&T.setPropertyValue(e,"display","none")};if(!r){if("height"===n&&"border-box"!==T.getPropertyValue(e,"boxSizing").toString().toLowerCase()){var c=e.offsetHeight-(parseFloat(T.getPropertyValue(e,"borderTopWidth"))||0)-(parseFloat(T.getPropertyValue(e,"borderBottomWidth"))||0)-(parseFloat(T.getPropertyValue(e,"paddingTop"))||0)-(parseFloat(T.getPropertyValue(e,"paddingBottom"))||0);return u(),c}if("width"===n&&"border-box"!==T.getPropertyValue(e,"boxSizing").toString().toLowerCase()){var p=e.offsetWidth-(parseFloat(T.getPropertyValue(e,"borderLeftWidth"))||0)-(parseFloat(T.getPropertyValue(e,"borderRightWidth"))||0)-(parseFloat(T.getPropertyValue(e,"paddingLeft"))||0)-(parseFloat(T.getPropertyValue(e,"paddingRight"))||0);return u(),p}}var d;d=a(e)===o?t.getComputedStyle(e,null):a(e).computedStyle?a(e).computedStyle:a(e).computedStyle=t.getComputedStyle(e,null),"borderColor"===n&&(n="borderTopColor"),i=9===h&&"filter"===n?d.getPropertyValue(n):d[n],""!==i&&null!==i||(i=e.style[n]),u()}if("auto"===i&&/^(top|right|bottom|left)$/i.test(n)){var f=s(e,"position");("fixed"===f||"absolute"===f&&/top|left/i.test(n))&&(i=m(e).position()[n]+"px")}return i}var l;if(T.Hooks.registered[n]){var u=n,c=T.Hooks.getRoot(u);i===o&&(i=T.getPropertyValue(e,T.Names.prefixCheck(c)[0])),T.Normalizations.registered[c]&&(i=T.Normalizations.registered[c]("extract",e,i)),l=T.Hooks.extractValue(u,i)}else if(T.Normalizations.registered[n]){var p,d;p=T.Normalizations.registered[n]("name",e),"transform"!==p&&(d=s(e,T.Names.prefixCheck(p)[0]),T.Values.isCSSNullValue(d)&&T.Hooks.templates[n]&&(d=T.Hooks.templates[n][1])),l=T.Normalizations.registered[n]("extract",e,d)}if(!/^[\d-]/.test(l)){var f=a(e);if(f&&f.isSVG&&T.Names.SVGAttribute(n))if(/^(height|width)$/i.test(n))try{l=e.getBBox()[n]}catch(g){l=0}else l=e.getAttribute(n);else l=s(e,T.Names.prefixCheck(n)[0])}return T.Values.isCSSNullValue(l)&&(l=0),P.debug>=2&&console.log("Get "+n+": "+l),l},setPropertyValue:function(e,n,o,i,r){var s=n;if("scroll"===n)r.container?r.container["scroll"+r.direction]=o:"Left"===r.direction?t.scrollTo(o,r.alternateValue):t.scrollTo(r.alternateValue,o);else if(T.Normalizations.registered[n]&&"transform"===T.Normalizations.registered[n]("name",e))T.Normalizations.registered[n]("inject",e,o),s="transform",o=a(e).transformCache[n];else{if(T.Hooks.registered[n]){var l=n,u=T.Hooks.getRoot(n);i=i||T.getPropertyValue(e,u),o=T.Hooks.injectValue(l,o,i),n=u}if(T.Normalizations.registered[n]&&(o=T.Normalizations.registered[n]("inject",e,o),n=T.Normalizations.registered[n]("name",e)),s=T.Names.prefixCheck(n)[0],h<=8)try{e.style[s]=o}catch(c){P.debug&&console.log("Browser does not support ["+o+"] for ["+s+"]")}else{var p=a(e);p&&p.isSVG&&T.Names.SVGAttribute(n)?e.setAttribute(n,o):e.style[s]=o}P.debug>=2&&console.log("Set "+n+" ("+s+"): "+o)}return[s,o]},flushTransformCache:function(e){var t="",n=a(e);if((h||P.State.isAndroid&&!P.State.isChrome)&&n&&n.isSVG){var o=function(t){return parseFloat(T.getPropertyValue(e,t))},i={translate:[o("translateX"),o("translateY")],skewX:[o("skewX")],skewY:[o("skewY")],scale:1!==o("scale")?[o("scale"),o("scale")]:[o("scaleX"),o("scaleY")],rotate:[o("rotateZ"),0,0]};m.each(a(e).transformCache,function(e){/^translate/i.test(e)?e="translate":/^scale/i.test(e)?e="scale":/^rotate/i.test(e)&&(e="rotate"),i[e]&&(t+=e+"("+i[e].join(" ")+") ",delete i[e])})}else{var r,s;m.each(a(e).transformCache,function(n){return r=a(e).transformCache[n],"transformPerspective"===n?(s=r,!0):(9===h&&"rotateZ"===n&&(n="rotate"),void(t+=n+r+" "))}),s&&(t="perspective"+s+" "+t)}T.setPropertyValue(e,"transform",t)}};T.Hooks.register(),T.Normalizations.register(),P.hook=function(e,t,n){var i;return e=r(e),m.each(e,function(e,r){if(a(r)===o&&P.init(r),n===o)i===o&&(i=T.getPropertyValue(r,t));else{var s=T.setPropertyValue(r,t,n);"transform"===s[0]&&P.CSS.flushTransformCache(r),i=s}}),i};var I=function(){function e(){return c?k.promise||null:h}function i(e,i){function r(r){var c,f;if(l.begin&&0===V)try{l.begin.call(v,v)}catch(h){setTimeout(function(){throw h},1)}if("scroll"===F){var g,S,C,I=/^x$/i.test(l.axis)?"Left":"Top",E=parseFloat(l.offset)||0;l.container?b.isWrapped(l.container)||b.isNode(l.container)?(l.container=l.container[0]||l.container,g=l.container["scroll"+I],C=g+m(e).position()[I.toLowerCase()]+E):l.container=null:(g=P.State.scrollAnchor[P.State["scrollProperty"+I]],S=P.State.scrollAnchor[P.State["scrollProperty"+("Left"===I?"Top":"Left")]],C=m(e).offset()[I.toLowerCase()]+E),u={scroll:{rootPropertyValue:!1,startValue:g,currentValue:g,endValue:C,unitType:"",easing:l.easing,scrollData:{container:l.container,direction:I,alternateValue:S}},element:e},P.debug&&console.log("tweensContainer (scroll): ",u.scroll,e)}else if("reverse"===F){if(c=a(e),!c)return;if(!c.tweensContainer)return void m.dequeue(e,l.queue);"none"===c.opts.display&&(c.opts.display="auto"),"hidden"===c.opts.visibility&&(c.opts.visibility="visible"),c.opts.loop=!1,c.opts.begin=null,c.opts.complete=null,x.easing||delete l.easing,x.duration||delete l.duration,l=m.extend({},c.opts,l),f=m.extend(!0,{},c?c.tweensContainer:null);for(var $ in f)if(f.hasOwnProperty($)&&"element"!==$){var N=f[$].startValue;f[$].startValue=f[$].currentValue=f[$].endValue,f[$].endValue=N,b.isEmptyObject(x)||(f[$].easing=l.easing),P.debug&&console.log("reverse tweensContainer ("+$+"): "+JSON.stringify(f[$]),e)}u=f}else if("start"===F){c=a(e),c&&c.tweensContainer&&c.isAnimating===!0&&(f=c.tweensContainer);var j=function(t,n){var o,r,a;return b.isFunction(t)&&(t=t.call(e,i,A)),b.isArray(t)?(o=t[0],!b.isArray(t[1])&&/^[\d-]/.test(t[1])||b.isFunction(t[1])||T.RegEx.isHex.test(t[1])?a=t[1]:b.isString(t[1])&&!T.RegEx.isHex.test(t[1])&&P.Easings[t[1]]||b.isArray(t[1])?(r=n?t[1]:p(t[1],l.duration),a=t[2]):a=t[1]||t[2]):o=t,n||(r=r||l.easing),b.isFunction(o)&&(o=o.call(e,i,A)),b.isFunction(a)&&(a=a.call(e,i,A)),[o||0,r,a]},z=function(i,r){var a,p=T.Hooks.getRoot(i),d=!1,h=r[0],g=r[1],v=r[2];if(!(c&&c.isSVG||"tween"===p||T.Names.prefixCheck(p)[1]!==!1||T.Normalizations.registered[p]!==o))return void(P.debug&&console.log("Skipping ["+p+"] due to a lack of browser support."));(l.display!==o&&null!==l.display&&"none"!==l.display||l.visibility!==o&&"hidden"!==l.visibility)&&/opacity|filter/.test(i)&&!v&&0!==h&&(v=0),l._cacheValues&&f&&f[i]?(v===o&&(v=f[i].endValue+f[i].unitType),d=c.rootPropertyValueCache[p]):T.Hooks.registered[i]?v===o?(d=T.getPropertyValue(e,p),v=T.getPropertyValue(e,i,d)):d=T.Hooks.templates[p][1]:v===o&&(v=T.getPropertyValue(e,i));var y,w,x,S=!1,C=function(e,t){var n,o;return o=(t||"0").toString().toLowerCase().replace(/[%A-z]+$/,function(e){return n=e,""}),n||(n=T.Values.getUnitType(e)),[o,n]};if(v!==h&&b.isString(v)&&b.isString(h)){a="";var k=0,I=0,A=[],V=[],E=0,$=0,F=0;for(v=T.Hooks.fixColors(v),h=T.Hooks.fixColors(h);k<v.length&&I<h.length;){var N=v[k],j=h[I];if(/[\d\.-]/.test(N)&&/[\d\.-]/.test(j)){for(var z=N,M=j,W=".",D=".";++k<v.length;){if(N=v[k],N===W)W="..";else if(!/\d/.test(N))break;z+=N}for(;++I<h.length;){if(j=h[I],j===D)D="..";else if(!/\d/.test(j))break;M+=j}var L=T.Hooks.getUnit(v,k),H=T.Hooks.getUnit(h,I);if(k+=L.length,I+=H.length,L===H)z===M?a+=z+L:(a+="{"+A.length+($?"!":"")+"}"+L,A.push(parseFloat(z)),V.push(parseFloat(M)));else{var R=parseFloat(z),q=parseFloat(M);a+=(E<5?"calc":"")+"("+(R?"{"+A.length+($?"!":"")+"}":"0")+L+" + "+(q?"{"+(A.length+(R?1:0))+($?"!":"")+"}":"0")+H+")",R&&(A.push(R),V.push(0)),q&&(A.push(0),V.push(q))}}else{if(N!==j){E=0;break}a+=N,k++,I++,0===E&&"c"===N||1===E&&"a"===N||2===E&&"l"===N||3===E&&"c"===N||E>=4&&"("===N?E++:(E&&E<5||E>=4&&")"===N&&--E<5)&&(E=0),0===$&&"r"===N||1===$&&"g"===N||2===$&&"b"===N||3===$&&"a"===N||$>=3&&"("===N?(3===$&&"a"===N&&(F=1),$++):F&&","===N?++F>3&&($=F=0):(F&&$<(F?5:4)||$>=(F?4:3)&&")"===N&&--$<(F?5:4))&&($=F=0)}}k===v.length&&I===h.length||(P.debug&&console.error('Trying to pattern match mis-matched strings ["'+h+'", "'+v+'"]'),a=o),a&&(A.length?(P.debug&&console.log('Pattern found "'+a+'" -> ',A,V,"["+v+","+h+"]"),v=A,h=V,w=x=""):a=o)}a||(y=C(i,v),v=y[0],x=y[1],y=C(i,h),h=y[0].replace(/^([+-\/*])=/,function(e,t){return S=t,""}),w=y[1],v=parseFloat(v)||0,h=parseFloat(h)||0,"%"===w&&(/^(fontSize|lineHeight)$/.test(i)?(h/=100,w="em"):/^scale/.test(i)?(h/=100,w=""):/(Red|Green|Blue)$/i.test(i)&&(h=h/100*255,w="")));var _=function(){var o={myParent:e.parentNode||n.body,position:T.getPropertyValue(e,"position"),fontSize:T.getPropertyValue(e,"fontSize")},i=o.position===O.lastPosition&&o.myParent===O.lastParent,r=o.fontSize===O.lastFontSize;O.lastParent=o.myParent,O.lastPosition=o.position,O.lastFontSize=o.fontSize;var a=100,s={};if(r&&i)s.emToPx=O.lastEmToPx,s.percentToPxWidth=O.lastPercentToPxWidth,s.percentToPxHeight=O.lastPercentToPxHeight;else{var l=c&&c.isSVG?n.createElementNS("http://www.w3.org/2000/svg","rect"):n.createElement("div");P.init(l),o.myParent.appendChild(l),m.each(["overflow","overflowX","overflowY"],function(e,t){P.CSS.setPropertyValue(l,t,"hidden")}),P.CSS.setPropertyValue(l,"position",o.position),P.CSS.setPropertyValue(l,"fontSize",o.fontSize),P.CSS.setPropertyValue(l,"boxSizing","content-box"),m.each(["minWidth","maxWidth","width","minHeight","maxHeight","height"],function(e,t){P.CSS.setPropertyValue(l,t,a+"%")}),P.CSS.setPropertyValue(l,"paddingLeft",a+"em"),s.percentToPxWidth=O.lastPercentToPxWidth=(parseFloat(T.getPropertyValue(l,"width",null,!0))||1)/a,s.percentToPxHeight=O.lastPercentToPxHeight=(parseFloat(T.getPropertyValue(l,"height",null,!0))||1)/a,s.emToPx=O.lastEmToPx=(parseFloat(T.getPropertyValue(l,"paddingLeft"))||1)/a,o.myParent.removeChild(l)}return null===O.remToPx&&(O.remToPx=parseFloat(T.getPropertyValue(n.body,"fontSize"))||16),null===O.vwToPx&&(O.vwToPx=parseFloat(t.innerWidth)/100,O.vhToPx=parseFloat(t.innerHeight)/100),s.remToPx=O.remToPx,s.vwToPx=O.vwToPx,s.vhToPx=O.vhToPx,P.debug>=1&&console.log("Unit ratios: "+JSON.stringify(s),e),s};if(/[\/*]/.test(S))w=x;else if(x!==w&&0!==v)if(0===h)w=x;else{s=s||_();var B=/margin|padding|left|right|width|text|word|letter/i.test(i)||/X$/.test(i)||"x"===i?"x":"y";switch(x){case"%":v*="x"===B?s.percentToPxWidth:s.percentToPxHeight;break;case"px":break;default:v*=s[x+"ToPx"]}switch(w){case"%":v*=1/("x"===B?s.percentToPxWidth:s.percentToPxHeight);break;case"px":break;default:v*=1/s[w+"ToPx"]}}switch(S){case"+":h=v+h;break;case"-":h=v-h;break;case"*":h=v*h;break;case"/":h=v/h}u[i]={rootPropertyValue:d,startValue:v,currentValue:v,endValue:h,unitType:w,easing:g},a&&(u[i].pattern=a),P.debug&&console.log("tweensContainer ("+i+"): "+JSON.stringify(u[i]),e)};for(var M in y)if(y.hasOwnProperty(M)){var W=T.Names.camelCase(M),L=j(y[M]);if(w(T.Lists.colors,W)){var H=L[0],R=L[1],q=L[2];if(T.RegEx.isHex.test(H)){for(var _=["Red","Green","Blue"],B=T.Values.hexToRgb(H),X=q?T.Values.hexToRgb(q):o,U=0;U<_.length;U++){var G=[B[U]];R&&G.push(R),X!==o&&G.push(X[U]),z(W+_[U],G)}continue}}z(W,L)}u.element=e}u.element&&(T.Values.addClass(e,"velocity-animating"),D.push(u),c=a(e),c&&(""===l.queue&&(c.tweensContainer=u,c.opts=l),c.isAnimating=!0),V===A-1?(P.State.calls.push([D,v,l,null,k.resolver,null,0]),P.State.isTicking===!1&&(P.State.isTicking=!0,d())):V++)}var s,l=m.extend({},P.defaults,x),u={};switch(a(e)===o&&P.init(e),parseFloat(l.delay)&&l.queue!==!1&&m.queue(e,l.queue,function(t){P.velocityQueueEntryFlag=!0;var n=P.State.delayedElements.count++;P.State.delayedElements[n]=e;var o=function(e){return function(){P.State.delayedElements[e]=!1,t()}}(n);a(e).delayBegin=(new Date).getTime(),a(e).delay=parseFloat(l.delay),a(e).delayTimer={setTimeout:setTimeout(t,parseFloat(l.delay)),next:o}}),l.duration.toString().toLowerCase()){case"fast":l.duration=200;break;case"normal":l.duration=S;break;case"slow":l.duration=600;break;default:l.duration=parseFloat(l.duration)||1}if(P.mock!==!1&&(P.mock===!0?l.duration=l.delay=1:(l.duration*=parseFloat(P.mock)||1,l.delay*=parseFloat(P.mock)||1)),l.easing=p(l.easing,l.duration),l.begin&&!b.isFunction(l.begin)&&(l.begin=null),l.progress&&!b.isFunction(l.progress)&&(l.progress=null),l.complete&&!b.isFunction(l.complete)&&(l.complete=null),l.display!==o&&null!==l.display&&(l.display=l.display.toString().toLowerCase(),"auto"===l.display&&(l.display=P.CSS.Values.getDisplayType(e))),l.visibility!==o&&null!==l.visibility&&(l.visibility=l.visibility.toString().toLowerCase()),l.mobileHA=l.mobileHA&&P.State.isMobile&&!P.State.isGingerbread,l.queue===!1)if(l.delay){var c=P.State.delayedElements.count++;P.State.delayedElements[c]=e;var f=function(e){return function(){P.State.delayedElements[e]=!1,r()}}(c);a(e).delayBegin=(new Date).getTime(),a(e).delay=parseFloat(l.delay),a(e).delayTimer={setTimeout:setTimeout(r,parseFloat(l.delay)),next:f}}else r();else m.queue(e,l.queue,function(e,t){return t===!0?(k.promise&&k.resolver(v),!0):(P.velocityQueueEntryFlag=!0,void r(e))});""!==l.queue&&"fx"!==l.queue||"inprogress"===m.queue(e)[0]||m.dequeue(e)}var u,c,h,g,v,y,x,C=arguments[0]&&(arguments[0].p||m.isPlainObject(arguments[0].properties)&&!arguments[0].properties.names||b.isString(arguments[0].properties));b.isWrapped(this)?(c=!1,g=0,v=this,h=this):(c=!0,g=1,v=C?arguments[0].elements||arguments[0].e:arguments[0]);var k={promise:null,resolver:null,rejecter:null};if(c&&P.Promise&&(k.promise=new P.Promise(function(e,t){k.resolver=e,k.rejecter=t})),C?(y=arguments[0].properties||arguments[0].p,x=arguments[0].options||arguments[0].o):(y=arguments[g],x=arguments[g+1]),v=r(v),!v)return void(k.promise&&(y&&x&&x.promiseRejectEmpty===!1?k.resolver():k.rejecter()));var A=v.length,V=0;if(!/^(stop|finish|finishAll|pause|resume)$/i.test(y)&&!m.isPlainObject(x)){var E=g+1;x={};for(var $=E;$<arguments.length;$++)b.isArray(arguments[$])||!/^(fast|normal|slow)$/i.test(arguments[$])&&!/^\d/.test(arguments[$])?b.isString(arguments[$])||b.isArray(arguments[$])?x.easing=arguments[$]:b.isFunction(arguments[$])&&(x.complete=arguments[$]):x.duration=arguments[$]}var F;switch(y){case"scroll":F="scroll";break;case"reverse":F="reverse";break;case"pause":var N=(new Date).getTime();return m.each(v,function(e,t){s(t,N)}),m.each(P.State.calls,function(e,t){var n=!1;t&&m.each(t[1],function(e,i){var r=x===o?"":x;return r!==!0&&t[2].queue!==r&&(x!==o||t[2].queue!==!1)||(m.each(v,function(e,o){if(o===i)return t[5]={resume:!1},n=!0,!1}),!n&&void 0)})}),e();case"resume":return m.each(v,function(e,t){l(t,N)}),m.each(P.State.calls,function(e,t){var n=!1;t&&m.each(t[1],function(e,i){var r=x===o?"":x;return r!==!0&&t[2].queue!==r&&(x!==o||t[2].queue!==!1)||(!t[5]||(m.each(v,function(e,o){if(o===i)return t[5].resume=!0,n=!0,!1}),!n&&void 0))})}),e();case"finish":case"finishAll":case"stop":m.each(v,function(e,t){a(t)&&a(t).delayTimer&&(clearTimeout(a(t).delayTimer.setTimeout),a(t).delayTimer.next&&a(t).delayTimer.next(),delete a(t).delayTimer),"finishAll"!==y||x!==!0&&!b.isString(x)||(m.each(m.queue(t,b.isString(x)?x:""),function(e,t){b.isFunction(t)&&t()}),m.queue(t,b.isString(x)?x:"",[]))});var j=[];return m.each(P.State.calls,function(e,t){t&&m.each(t[1],function(n,i){var r=x===o?"":x;return r!==!0&&t[2].queue!==r&&(x!==o||t[2].queue!==!1)||void m.each(v,function(n,o){if(o===i)if((x===!0||b.isString(x))&&(m.each(m.queue(o,b.isString(x)?x:""),function(e,t){b.isFunction(t)&&t(null,!0)}),m.queue(o,b.isString(x)?x:"",[])),"stop"===y){var s=a(o);s&&s.tweensContainer&&r!==!1&&m.each(s.tweensContainer,function(e,t){t.endValue=t.currentValue}),j.push(e)}else"finish"!==y&&"finishAll"!==y||(t[2].duration=1)})})}),"stop"===y&&(m.each(j,function(e,t){f(t,!0)}),k.promise&&k.resolver(v)),e();default:if(!m.isPlainObject(y)||b.isEmptyObject(y)){if(b.isString(y)&&P.Redirects[y]){u=m.extend({},x);var z=u.duration,M=u.delay||0;return u.backwards===!0&&(v=m.extend(!0,[],v).reverse()),m.each(v,function(e,t){parseFloat(u.stagger)?u.delay=M+parseFloat(u.stagger)*e:b.isFunction(u.stagger)&&(u.delay=M+u.stagger.call(t,e,A)),u.drag&&(u.duration=parseFloat(z)||(/^(callout|transition)/.test(y)?1e3:S),u.duration=Math.max(u.duration*(u.backwards?1-e/A:(e+1)/A),.75*u.duration,200)),P.Redirects[y].call(t,t,u||{},e,A,v,k.promise?k:o)}),e()}var W="Velocity: First argument ("+y+") was not a property map, a known action, or a registered redirect. Aborting.";return k.promise?k.rejecter(new Error(W)):t.console&&console.log(W),e()}F="start"}var O={lastParent:null,lastPosition:null,lastFontSize:null,lastPercentToPxWidth:null,lastPercentToPxHeight:null,lastEmToPx:null,remToPx:null,vwToPx:null,vhToPx:null},D=[];m.each(v,function(e,t){b.isNode(t)&&i(t,e)}),u=m.extend({},P.defaults,x),u.loop=parseInt(u.loop,10);var L=2*u.loop-1;if(u.loop)for(var H=0;H<L;H++){var R={delay:u.delay,progress:u.progress};H===L-1&&(R.display=u.display,R.visibility=u.visibility,R.complete=u.complete),I(v,"reverse",R)}return e()};P=m.extend(I,P),P.animate=I;var A=t.requestAnimationFrame||g;if(!P.State.isMobile&&n.hidden!==o){var V=function(){n.hidden?(A=function(e){return setTimeout(function(){e(!0)},16)},d()):A=t.requestAnimationFrame||g};V(),n.addEventListener("visibilitychange",V)}return e.Velocity=P,e!==t&&(e.fn.velocity=I,e.fn.velocity.defaults=P.defaults),m.each(["Down","Up"],function(e,t){P.Redirects["slide"+t]=function(e,n,i,r,a,s){var l=m.extend({},n),u=l.begin,c=l.complete,p={},d={height:"",marginTop:"",marginBottom:"",paddingTop:"",paddingBottom:""};l.display===o&&(l.display="Down"===t?"inline"===P.CSS.Values.getDisplayType(e)?"inline-block":"block":"none"),l.begin=function(){0===i&&u&&u.call(a,a);for(var n in d)if(d.hasOwnProperty(n)){p[n]=e.style[n];var o=T.getPropertyValue(e,n);d[n]="Down"===t?[o,0]:[0,o]}p.overflow=e.style.overflow,e.style.overflow="hidden"},l.complete=function(){for(var t in p)p.hasOwnProperty(t)&&(e.style[t]=p[t]);i===r-1&&(c&&c.call(a,a),s&&s.resolver(a))},P(e,d,l)}}),m.each(["In","Out"],function(e,t){P.Redirects["fade"+t]=function(e,n,i,r,a,s){var l=m.extend({},n),u=l.complete,c={opacity:"In"===t?1:0};0!==i&&(l.begin=null),i!==r-1?l.complete=null:l.complete=function(){u&&u.call(a,a),s&&s.resolver(a)},l.display===o&&(l.display="In"===t?"auto":"none"),P(this,c,l)}}),P}(window.jQuery||window.Zepto||window,window,window?window.document:void 0)}),/*!
 * Modernizr v2.8.3
 * www.modernizr.com
 *
 * Copyright (c) Faruk Ates, Paul Irish, Alex Sexton
 * Available under the BSD and MIT licenses: www.modernizr.com/license/
 */
window.Modernizr=function(e,t,n){function o(e){w.cssText=e}function i(e,t){return o(C.join(e+";")+(t||""))}function r(e,t){return typeof e===t}function a(e,t){return!!~(""+e).indexOf(t)}function s(e,t){for(var o in e){var i=e[o];if(!a(i,"-")&&w[i]!==n)return"pfx"!=t||i}return!1}function l(e,t,o){for(var i in e){var a=t[e[i]];if(a!==n)return o===!1?e[i]:r(a,"function")?a.bind(o||t):a}return!1}function u(e,t,n){var o=e.charAt(0).toUpperCase()+e.slice(1),i=(e+" "+k.join(o+" ")+o).split(" ");return r(t,"string")||r(t,"undefined")?s(i,t):(i=(e+" "+T.join(o+" ")+o).split(" "),l(i,t,n))}function c(){m.input=function(n){for(var o=0,i=n.length;o<i;o++)E[n[o]]=!!(n[o]in b);return E.list&&(E.list=!(!t.createElement("datalist")||!e.HTMLDataListElement)),E}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),m.inputtypes=function(e){for(var o,i,r,a=0,s=e.length;a<s;a++)b.setAttribute("type",i=e[a]),o="text"!==b.type,o&&(b.value=x,b.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(i)&&b.style.WebkitAppearance!==n?(g.appendChild(b),r=t.defaultView,o=r.getComputedStyle&&"textfield"!==r.getComputedStyle(b,null).WebkitAppearance&&0!==b.offsetHeight,g.removeChild(b)):/^(search|tel)$/.test(i)||(o=/^(url|email)$/.test(i)?b.checkValidity&&b.checkValidity()===!1:b.value!=x)),V[e[a]]=!!o;return V}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var p,d,f="2.8.3",m={},h=!0,g=t.documentElement,v="modernizr",y=t.createElement(v),w=y.style,b=t.createElement("input"),x=":)",S={}.toString,C=" -webkit- -moz- -o- -ms- ".split(" "),P="Webkit Moz O ms",k=P.split(" "),T=P.toLowerCase().split(" "),I={svg:"http://www.w3.org/2000/svg"},A={},V={},E={},$=[],F=$.slice,N=function(e,n,o,i){var r,a,s,l,u=t.createElement("div"),c=t.body,p=c||t.createElement("body");if(parseInt(o,10))for(;o--;)s=t.createElement("div"),s.id=i?i[o]:v+(o+1),u.appendChild(s);return r=["&#173;",'<style id="s',v,'">',e,"</style>"].join(""),u.id=v,(c?u:p).innerHTML+=r,p.appendChild(u),c||(p.style.background="",p.style.overflow="hidden",l=g.style.overflow,g.style.overflow="hidden",g.appendChild(p)),a=n(u,e),c?u.parentNode.removeChild(u):(p.parentNode.removeChild(p),g.style.overflow=l),!!a},j=function(t){var n=e.matchMedia||e.msMatchMedia;if(n)return n(t)&&n(t).matches||!1;var o;return N("@media "+t+" { #"+v+" { position: absolute; } }",function(t){o="absolute"==(e.getComputedStyle?getComputedStyle(t,null):t.currentStyle).position}),o},z=function(){function e(e,i){i=i||t.createElement(o[e]||"div"),e="on"+e;var a=e in i;return a||(i.setAttribute||(i=t.createElement("div")),i.setAttribute&&i.removeAttribute&&(i.setAttribute(e,""),a=r(i[e],"function"),r(i[e],"undefined")||(i[e]=n),i.removeAttribute(e))),i=null,a}var o={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return e}(),M={}.hasOwnProperty;d=r(M,"undefined")||r(M.call,"undefined")?function(e,t){return t in e&&r(e.constructor.prototype[t],"undefined")}:function(e,t){return M.call(e,t)},Function.prototype.bind||(Function.prototype.bind=function(e){var t=this;if("function"!=typeof t)throw new TypeError;var n=F.call(arguments,1),o=function(){if(this instanceof o){var i=function(){};i.prototype=t.prototype;var r=new i,a=t.apply(r,n.concat(F.call(arguments)));return Object(a)===a?a:r}return t.apply(e,n.concat(F.call(arguments)))};return o}),A.flexbox=function(){return u("flexWrap")},A.flexboxlegacy=function(){return u("boxDirection")},A.canvas=function(){var e=t.createElement("canvas");return!(!e.getContext||!e.getContext("2d"))},A.canvastext=function(){return!(!m.canvas||!r(t.createElement("canvas").getContext("2d").fillText,"function"))},A.webgl=function(){return!!e.WebGLRenderingContext},A.touch=function(){var n;return"ontouchstart"in e||e.DocumentTouch&&t instanceof DocumentTouch?n=!0:N(["@media (",C.join("touch-enabled),("),v,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(e){n=9===e.offsetTop}),n},A.geolocation=function(){return"geolocation"in navigator},A.postmessage=function(){return!!e.postMessage},A.websqldatabase=function(){return!!e.openDatabase},A.indexedDB=function(){return!!u("indexedDB",e)},A.hashchange=function(){return z("hashchange",e)&&(t.documentMode===n||t.documentMode>7)},A.history=function(){return!(!e.history||!history.pushState)},A.draganddrop=function(){var e=t.createElement("div");return"draggable"in e||"ondragstart"in e&&"ondrop"in e},A.websockets=function(){return"WebSocket"in e||"MozWebSocket"in e},A.rgba=function(){return o("background-color:rgba(150,255,150,.5)"),a(w.backgroundColor,"rgba")},A.hsla=function(){return o("background-color:hsla(120,40%,100%,.5)"),a(w.backgroundColor,"rgba")||a(w.backgroundColor,"hsla")},A.multiplebgs=function(){return o("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(w.background)},A.backgroundsize=function(){return u("backgroundSize")},A.borderimage=function(){return u("borderImage")},A.borderradius=function(){return u("borderRadius")},A.boxshadow=function(){return u("boxShadow")},A.textshadow=function(){return""===t.createElement("div").style.textShadow},A.opacity=function(){return i("opacity:.55"),/^0.55$/.test(w.opacity)},A.cssanimations=function(){return u("animationName")},A.csscolumns=function(){return u("columnCount")},A.cssgradients=function(){var e="background-image:",t="gradient(linear,left top,right bottom,from(#9f9),to(white));",n="linear-gradient(left top,#9f9, white);";return o((e+"-webkit- ".split(" ").join(t+e)+C.join(n+e)).slice(0,-e.length)),a(w.backgroundImage,"gradient")},A.cssreflections=function(){return u("boxReflect")},A.csstransforms=function(){return!!u("transform")},A.csstransforms3d=function(){var e=!!u("perspective");return e&&"webkitPerspective"in g.style&&N("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(t,n){e=9===t.offsetLeft&&3===t.offsetHeight}),e},A.csstransitions=function(){return u("transition")},A.fontface=function(){var e;return N('@font-face {font-family:"font";src:url("https://")}',function(n,o){var i=t.getElementById("smodernizr"),r=i.sheet||i.styleSheet,a=r?r.cssRules&&r.cssRules[0]?r.cssRules[0].cssText:r.cssText||"":"";e=/src/i.test(a)&&0===a.indexOf(o.split(" ")[0])}),e},A.generatedcontent=function(){var e;return N(["#",v,"{font:0/0 a}#",v,':after{content:"',x,'";visibility:hidden;font:3px/1 a}'].join(""),function(t){e=t.offsetHeight>=3}),e},A.video=function(){var e=t.createElement("video"),n=!1;try{(n=!!e.canPlayType)&&(n=new Boolean(n),n.ogg=e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),n.h264=e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),n.webm=e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""))}catch(o){}return n},A.audio=function(){var e=t.createElement("audio"),n=!1;try{(n=!!e.canPlayType)&&(n=new Boolean(n),n.ogg=e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),n.mp3=e.canPlayType("audio/mpeg;").replace(/^no$/,""),n.wav=e.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),n.m4a=(e.canPlayType("audio/x-m4a;")||e.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(o){}return n},A.localstorage=function(){try{return localStorage.setItem(v,v),localStorage.removeItem(v),!0}catch(e){return!1}},A.sessionstorage=function(){try{return sessionStorage.setItem(v,v),sessionStorage.removeItem(v),!0}catch(e){return!1}},A.webworkers=function(){return!!e.Worker},A.applicationcache=function(){return!!e.applicationCache},A.svg=function(){return!!t.createElementNS&&!!t.createElementNS(I.svg,"svg").createSVGRect},A.inlinesvg=function(){var e=t.createElement("div");return e.innerHTML="<svg/>",(e.firstChild&&e.firstChild.namespaceURI)==I.svg},A.smil=function(){return!!t.createElementNS&&/SVGAnimate/.test(S.call(t.createElementNS(I.svg,"animate")))},A.svgclippaths=function(){return!!t.createElementNS&&/SVGClipPath/.test(S.call(t.createElementNS(I.svg,"clipPath")))};for(var W in A)d(A,W)&&(p=W.toLowerCase(),m[p]=A[W](),$.push((m[p]?"":"no-")+p));return m.input||c(),m.addTest=function(e,t){if("object"==typeof e)for(var o in e)d(e,o)&&m.addTest(o,e[o]);else{if(e=e.toLowerCase(),m[e]!==n)return m;t="function"==typeof t?t():t,"undefined"!=typeof h&&h&&(g.className+=" "+(t?"":"no-")+e),m[e]=t}return m},o(""),y=b=null,function(e,t){function n(e,t){var n=e.createElement("p"),o=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",o.insertBefore(n.lastChild,o.firstChild)}function o(){var e=y.elements;return"string"==typeof e?e.split(" "):e}function i(e){var t=v[e[h]];return t||(t={},g++,e[h]=g,v[g]=t),t}function r(e,n,o){if(n||(n=t),c)return n.createElement(e);o||(o=i(n));var r;return r=o.cache[e]?o.cache[e].cloneNode():m.test(e)?(o.cache[e]=o.createElem(e)).cloneNode():o.createElem(e),!r.canHaveChildren||f.test(e)||r.tagUrn?r:o.frag.appendChild(r)}function a(e,n){if(e||(e=t),c)return e.createDocumentFragment();n=n||i(e);for(var r=n.frag.cloneNode(),a=0,s=o(),l=s.length;a<l;a++)r.createElement(s[a]);return r}function s(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return y.shivMethods?r(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+o().join().replace(/[\w\-]+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(y,t.frag)}function l(e){e||(e=t);var o=i(e);return!y.shivCSS||u||o.hasCSS||(o.hasCSS=!!n(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),c||s(e,o),e}var u,c,p="3.7.0",d=e.html5||{},f=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,m=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,h="_html5shiv",g=0,v={};!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",u="hidden"in e,c=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return"undefined"==typeof e.cloneNode||"undefined"==typeof e.createDocumentFragment||"undefined"==typeof e.createElement}()}catch(n){u=!0,c=!0}}();var y={elements:d.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:p,shivCSS:d.shivCSS!==!1,supportsUnknownElements:c,shivMethods:d.shivMethods!==!1,type:"default",shivDocument:l,createElement:r,createDocumentFragment:a};e.html5=y,l(t)}(this,t),m._version=f,m._prefixes=C,m._domPrefixes=T,m._cssomPrefixes=k,m.mq=j,m.hasEvent=z,m.testProp=function(e){return s([e])},m.testAllProps=u,m.testStyles=N,m.prefixed=function(e,t,n){return t?u(e,t,n):u(e,"pfx")},g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(h?" js "+$.join(" "):""),m}(this,this.document);/*!
*
* foundation.js
*/
/*
 * Foundation Responsive Library
 * http://foundation.zurb.com
 * Copyright 2013, ZURB
 * Free to use under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
*/
var libFuncName=null;if("undefined"==typeof jQuery&&"undefined"==typeof Zepto&&"function"==typeof $)libFuncName=$;else if("function"==typeof jQuery)libFuncName=jQuery;else{if("function"!=typeof Zepto)throw new TypeError;libFuncName=Zepto}!function(e,t,n,o){"use strict";Array.prototype.filter||(Array.prototype.filter=function(e){if(null==this)throw new TypeError;var t=Object(this),n=t.length>>>0;if("function"==typeof e){for(var o=[],i=arguments[1],r=0;r<n;r++)if(r in t){var a=t[r];e&&e.call(i,a,r,t)&&o.push(a)}return o}}),Function.prototype.bind||(Function.prototype.bind=function(e){if("function"!=typeof this)throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");var t=Array.prototype.slice.call(arguments,1),n=this,o=function(){},i=function(){return n.apply(this instanceof o&&e?this:e,t.concat(Array.prototype.slice.call(arguments)))};return o.prototype=this.prototype,i.prototype=new o,i}),Array.prototype.indexOf||(Array.prototype.indexOf=function(e){if(null==this)throw new TypeError;var t=Object(this),n=t.length>>>0;if(0===n)return-1;var o=0;if(arguments.length>1&&(o=Number(arguments[1]),o!=o?o=0:0!=o&&o!=1/0&&o!=-(1/0)&&(o=(o>0||-1)*Math.floor(Math.abs(o)))),o>=n)return-1;for(var i=o>=0?o:Math.max(n-Math.abs(o),0);i<n;i++)if(i in t&&t[i]===e)return i;return-1}),e.fn.stop=e.fn.stop||function(){return this},t.Foundation={name:"Foundation",version:"4.1.5",cache:{},init:function(t,n,o,i,r,a){var s,l=[t,o,i,r],u=[],a=a||!1;if(a&&(this.nc=a),this.rtl=/rtl/i.test(e("html").attr("dir")),this.scope=t||this.scope,n&&"string"==typeof n){if(/off/i.test(n))return this.off();if(s=n.split(" "),s.length>0)for(var c=s.length-1;c>=0;c--)u.push(this.init_lib(s[c],l))}else for(var p in this.libs)u.push(this.init_lib(p,l));return"function"==typeof n&&l.unshift(n),this.response_obj(u,l)},response_obj:function(e,t){for(var n=0,o=t.length;n<o;n++)if("function"==typeof t[n])return t[n]({errors:e.filter(function(e){if("string"==typeof e)return e})});return e},init_lib:function(e,t){return this.trap(function(){if(this.libs.hasOwnProperty(e))return this.patch(this.libs[e]),this.libs[e].init.apply(this.libs[e],t)}.bind(this),e)},trap:function(e,t){if(!this.nc)try{return e()}catch(n){return this.error({name:t,message:"could not be initialized",more:n.name+" "+n.message})}return e()},patch:function(e){this.fix_outer(e),e.scope=this.scope,e.rtl=this.rtl},inherit:function(e,t){for(var n=t.split(" "),o=n.length-1;o>=0;o--)this.lib_methods.hasOwnProperty(n[o])&&(this.libs[e.name][n[o]]=this.lib_methods[n[o]])},random_str:function(e){var t="0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz".split("");e||(e=Math.floor(Math.random()*t.length));for(var n="",o=0;o<e;o++)n+=t[Math.floor(Math.random()*t.length)];return n},libs:{},lib_methods:{set_data:function(e,t){var n=[this.name,+new Date,Foundation.random_str(5)].join("-");return Foundation.cache[n]=t,e.attr("data-"+this.name+"-id",n),t},get_data:function(e){return Foundation.cache[e.attr("data-"+this.name+"-id")]},remove_data:function(t){t?(delete Foundation.cache[t.attr("data-"+this.name+"-id")],t.attr("data-"+this.name+"-id","")):e("[data-"+this.name+"-id]").each(function(){delete Foundation.cache[e(this).attr("data-"+this.name+"-id")],e(this).attr("data-"+this.name+"-id","")})},throttle:function(e,t){var n=null;return function(){var o=this,i=arguments;clearTimeout(n),n=setTimeout(function(){e.apply(o,i)},t)}},data_options:function(t){function n(e){return!isNaN(e-0)&&null!==e&&""!==e&&e!==!1&&e!==!0}function o(t){return"string"==typeof t?e.trim(t):t}var i,r,a={},s=(t.attr("data-options")||":").split(";"),l=s.length;for(i=l-1;i>=0;i--)r=s[i].split(":"),/true/i.test(r[1])&&(r[1]=!0),/false/i.test(r[1])&&(r[1]=!1),n(r[1])&&(r[1]=parseInt(r[1],10)),2===r.length&&r[0].length>0&&(a[o(r[0])]=o(r[1]));return a},delay:function(e,t){return setTimeout(e,t)},scrollTo:function(n,o,i){if(!(i<0)){var r=o-e(t).scrollTop(),a=r/i*10;this.scrollToTimerCache=setTimeout(function(){isNaN(parseInt(a,10))||(t.scrollTo(0,e(t).scrollTop()+a),this.scrollTo(n,o,i-10))}.bind(this),10)}},scrollLeft:function(e){if(e.length)return"scrollLeft"in e[0]?e[0].scrollLeft:e[0].pageXOffset},empty:function(e){if(e.length&&e.length>0)return!1;if(e.length&&0===e.length)return!0;for(var t in e)if(hasOwnProperty.call(e,t))return!1;return!0}},fix_outer:function(e){e.outerHeight=function(e,t){return"function"==typeof Zepto?e.height():"undefined"!=typeof t?e.outerHeight(t):e.outerHeight()},e.outerWidth=function(e){return"function"==typeof Zepto?e.width():"undefined"!=typeof bool?e.outerWidth(bool):e.outerWidth()}},error:function(e){return e.name+" "+e.message+"; "+e.more},off:function(){return e(this.scope).off(".fndtn"),e(t).off(".fndtn"),!0},zj:function(){try{return Zepto}catch(e){return jQuery}}()},e.fn.foundation=function(){var e=Array.prototype.slice.call(arguments,0);return this.each(function(){return Foundation.init.apply(Foundation,[this].concat(e)),this})}}(libFuncName,this,this.document),/*!
*
* foundation.forms.js
*/
function(e,t,n,o){"use strict";Foundation.libs.forms={name:"forms",version:"4.1.6",cache:{},settings:{disable_class:"no-custom",last_combo:null},init:function(t,n,o){return"object"==typeof n&&e.extend(!0,this.settings,n),"string"!=typeof n?(this.settings.init||this.events(),this.assemble(),this.settings.init):this[n].call(this,o)},assemble:function(){e('form.custom input[type="radio"]',e(this.scope)).not('[data-customforms="disabled"]').each(this.append_custom_markup),e('form.custom input[type="checkbox"]',e(this.scope)).not('[data-customforms="disabled"]').each(this.append_custom_markup),e("form.custom select",e(this.scope)).not('[data-customforms="disabled"]').not("[multiple=multiple]").each(this.append_custom_select)},events:function(){var o=this;e(this.scope).on("click.fndtn.forms","form.custom span.custom.checkbox",function(t){t.preventDefault(),t.stopPropagation(),o.toggle_checkbox(e(this))}).on("click.fndtn.forms","form.custom span.custom.radio",function(t){t.preventDefault(),t.stopPropagation(),o.toggle_radio(e(this))}).on("change.fndtn.forms",'form.custom select:not([data-customforms="disabled"])',function(t,n){o.refresh_custom_select(e(this),n)}).on("click.fndtn.forms","form.custom label",function(t){if(e(t.target).is("label")){var n,i,r=e("#"+o.escape(e(this).attr("for"))+':not([data-customforms="disabled"])');0!==r.length&&("checkbox"===r.attr("type")?(t.preventDefault(),n=e(this).find("span.custom.checkbox"),0==n.length&&(n=r.add(this).siblings("span.custom.checkbox").first()),o.toggle_checkbox(n)):"radio"===r.attr("type")&&(t.preventDefault(),i=e(this).find("span.custom.radio"),0==i.length&&(i=r.add(this).siblings("span.custom.radio").first()),o.toggle_radio(i)))}}).on("click.fndtn.forms","form.custom div.custom.dropdown a.current, form.custom div.custom.dropdown a.selector",function(t){var n=e(this),r=n.closest("div.custom.dropdown"),a=i(r,"select");if(r.hasClass("open")||e(o.scope).trigger("click"),t.preventDefault(),!1===a.is(":disabled"))return r.toggleClass("open"),r.hasClass("open")?e(o.scope).on("click.fndtn.forms.customdropdown",function(){r.removeClass("open"),e(o.scope).off(".fndtn.forms.customdropdown")}):e(o.scope).on(".fndtn.forms.customdropdown"),!1}).on("click.fndtn.forms touchend.fndtn.forms","form.custom div.custom.dropdown li",function(t){var n=e(this),o=n.closest("div.custom.dropdown"),r=i(o,"select"),a=0;if(t.preventDefault(),t.stopPropagation(),!e(this).hasClass("disabled")){e("div.dropdown").not(o).removeClass("open");var s=n.closest("ul").find("li.selected");s.removeClass("selected"),n.addClass("selected"),o.removeClass("open").find("a.current").text(n.text()),n.closest("ul").find("li").each(function(e){n[0]==this&&(a=e)}),r[0].selectedIndex=a,r.data("prevalue",s.html()),r.trigger("change")}}),e(t).on("keydown",function(t){var o=(n.activeElement,Foundation.libs.forms),i=e(".custom.dropdown.open");if(i.length>0){if(t.preventDefault(),13===t.which&&i.find("li.selected").trigger("click"),27===t.which&&i.removeClass("open"),t.which>=65&&t.which<=90){var r=o.go_to(i,t.which),a=i.find("li.selected");r&&(a.removeClass("selected"),o.scrollTo(r.addClass("selected"),300))}if(38===t.which){var a=i.find("li.selected"),s=a.prev(":not(.disabled)");s.length>0&&(s.parent()[0].scrollTop=s.parent().scrollTop()-o.outerHeight(s),a.removeClass("selected"),s.addClass("selected"))}else if(40===t.which){var a=i.find("li.selected"),r=a.next(":not(.disabled)");r.length>0&&(r.parent()[0].scrollTop=r.parent().scrollTop()+o.outerHeight(r),a.removeClass("selected"),r.addClass("selected"))}}}),this.settings.init=!0},go_to:function(e,t){var n=e.find("li"),o=n.length;if(o>0)for(var i=0;i<o;i++){var r=n.eq(i).text().charAt(0).toLowerCase();if(r===String.fromCharCode(t).toLowerCase())return n.eq(i)}},scrollTo:function(e,t){if(!(t<0)){var n=e.parent(),o=this.outerHeight(e),i=o*e.index()-n.scrollTop(),r=i/t*10;this.scrollToTimerCache=setTimeout(function(){isNaN(parseInt(r,10))||(n[0].scrollTop=n.scrollTop()+r,this.scrollTo(e,t-10))}.bind(this),10)}},append_custom_markup:function(t,n){var o=e(n),i=o.attr("type"),r=o.next("span.custom."+i);o.parent().hasClass("switch")||o.addClass("hidden-field"),0===r.length&&(r=e('<span class="custom '+i+'"></span>').insertAfter(o)),r.toggleClass("checked",o.is(":checked")),r.toggleClass("disabled",o.is(":disabled"))},append_custom_select:function(t,n){var o,i=Foundation.libs.forms,r=e(n),a=r.next("div.custom.dropdown"),s=a.find("ul"),l=(a.find(".current"),a.find(".selector")),u=r.find("option"),c=u.filter(":selected"),p=r.attr("class")?r.attr("class").split(" "):[],d=0,f="",m=!1;if(!r.hasClass(i.settings.disable_class)){if(0===a.length){var h=r.hasClass("small")?"small":r.hasClass("medium")?"medium":r.hasClass("large")?"large":r.hasClass("expand")?"expand":"";a=e('<div class="'+["custom","dropdown",h].concat(p).filter(function(e,t,n){return""!=e&&n.indexOf(e)==t}).join(" ")+'"><a href="#" class="selector"></a><ul /></div>'),l=a.find(".selector"),s=a.find("ul"),f=u.map(function(){return"<li>"+e(this).html()+"</li>"}).get().join(""),s.append(f),m=a.prepend('<a href="#" class="current">'+c.html()+"</a>").find(".current"),r.after(a).addClass("hidden-field")}else f=u.map(function(){return"<li>"+e(this).html()+"</li>"}).get().join(""),s.html("").append(f);if(i.assign_id(r,a),a.toggleClass("disabled",r.is(":disabled")),o=s.find("li"),i.cache[a.data("id")]=o.length,u.each(function(t){this.selected&&(o.eq(t).addClass("selected"),m&&m.html(e(this).html())),e(this).is(":disabled")&&o.eq(t).addClass("disabled")}),!a.is(".small, .medium, .large, .expand")){a.addClass("open");var i=Foundation.libs.forms;i.hidden_fix.adjust(s),d=i.outerWidth(o)>d?i.outerWidth(o):d,Foundation.libs.forms.hidden_fix.reset(),a.removeClass("open")}}},assign_id:function(e,t){var n=[+new Date,Foundation.random_str(5)].join("-");e.attr("data-id",n),t.attr("data-id",n)},refresh_custom_select:function(t,n){var o=this,i=0,r=t.next(),a=t.find("option"),s=r.find("li");(s.length!=this.cache[r.data("id")]||n)&&(r.find("ul").html(""),a.each(function(){var t=e("<li>"+e(this).html()+"</li>");r.find("ul").append(t)}),a.each(function(t){this.selected&&(r.find("li").eq(t).addClass("selected"),r.find(".current").html(e(this).html())),e(this).is(":disabled")&&r.find("li").eq(t).addClass("disabled")}),r.removeAttr("style").find("ul").removeAttr("style"),r.find("li").each(function(){r.addClass("open"),o.outerWidth(e(this))>i&&(i=o.outerWidth(e(this))),r.removeClass("open")}),s=r.find("li"),this.cache[r.data("id")]=s.length)},toggle_checkbox:function(e){var t=e.prev(),n=t[0];!1===t.is(":disabled")&&(n.checked=!n.checked,e.toggleClass("checked"),t.trigger("change"))},toggle_radio:function(e){var t=e.prev(),n=t.closest("form.custom"),o=t[0];!1===t.is(":disabled")&&(n.find('input[type="radio"][name="'+this.escape(t.attr("name"))+'"]').next().not(e).removeClass("checked"),e.hasClass("checked")||e.toggleClass("checked"),o.checked=e.hasClass("checked"),t.trigger("change"))},escape:function(e){return e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&")},hidden_fix:{tmp:[],hidden:null,adjust:function(t){var n=this;n.hidden=t.parents().andSelf().filter(":hidden"),n.hidden.each(function(){var t=e(this);n.tmp.push(t.attr("style")),t.css({visibility:"hidden",display:"block"})})},reset:function(){var t=this;t.hidden.each(function(n){var i=e(this),r=t.tmp[n];r===o?i.removeAttr("style"):i.attr("style",r)}),t.tmp=[],t.hidden=null}},off:function(){e(this.scope).off(".fndtn.forms")}};var i=function(t,n){for(var t=t.prev();t.length;){if(t.is(n))return t;t=t.prev()}return e()}}(Foundation.zj,this,this.document),/*!
*
* jquery.imageslaoded.min.js
*/
function(e,t){var n="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";e.fn.imagesLoaded=function(o){function i(){var t=e(d),n=e(f);l&&(f.length?l.reject(c,t,n):l.resolve(c)),e.isFunction(o)&&o.call(s,c,t,n)}function r(e){a(e.target,"error"===e.type)}function a(t,o){t.src===n||-1!==e.inArray(t,p)||(p.push(t),o?f.push(t):d.push(t),e.data(t,"imagesLoaded",{isBroken:o,src:t.src}),u&&l.notifyWith(e(t),[o,c,e(d),e(f)]),c.length===p.length&&(setTimeout(i),c.unbind(".imagesLoaded",r)))}var s=this,l=e.isFunction(e.Deferred)?e.Deferred():0,u=e.isFunction(l.notify),c=s.find("img").add(s.filter("img")),p=[],d=[],f=[];return e.isPlainObject(o)&&e.each(o,function(e,t){"callback"===e?o=t:l&&l[e](t)}),c.length?c.bind("load.imagesLoaded error.imagesLoaded",r).each(function(o,i){var r=i.src,s=e.data(i,"imagesLoaded");s&&s.src===r?a(i,s.isBroken):i.complete&&i.naturalWidth!==t?a(i,0===i.naturalWidth||0===i.naturalHeight):(i.readyState||i.complete)&&(i.src=n,i.src=r)}):i(),l?l.promise(s):s}}(jQuery),/*!
*
* jquery.natural-res.js
*/
function(e){for(var t,n=["Width","Height"];t=n.pop();)!function(t,n){e.fn[t]=t in new Image?function(){return this[0][t]}:function(){var e,t,o=this[0];return"img"===o.tagName.toLowerCase()&&(e=new Image,e.src=o.src,t=e[n]),t}}("natural"+t,t.toLowerCase())}(jQuery),/*!

	Zoom v1.7.8 - 2013-07-30
	Enlarge images on click or mouseover.
	(c) 2013 Jack Moore - http://www.jacklmoore.com/zoom
	license: http://www.opensource.org/licenses/mit-license.php

*/
function(e){var t={url:!1,callback:!1,target:!1,duration:120,on:"mouseover",onZoomIn:!1,onZoomOut:!1};e.zoom=function(t,n,o){var i,r,a,s,l,u=e(t).css("position");return e(t).css({position:/(absolute|fixed)/.test(u)?u:"relative",overflow:"hidden"}),o.style.width=o.style.height="",e(o).addClass("zoomImg").css({position:"absolute",top:0,left:0,opacity:0,width:o.width,height:o.height,border:"none",maxWidth:"none"}).appendTo(t),{init:function(){i=e(t).outerWidth(),r=e(t).outerHeight(),a=(o.width-i)/e(n).outerWidth(),s=(o.height-r)/e(n).outerHeight(),l=e(n).offset()},move:function(e){var t=e.pageX-l.left,n=e.pageY-l.top;n=Math.max(Math.min(n,r),0),t=Math.max(Math.min(t,i),0),o.style.left=t*-a+"px",o.style.top=n*-s+"px"}}},e.fn.zoom=function(n){return this.each(function(){var o,i=e.extend({},t,n||{}),r=i.target||this,a=this,s=document.createElement("img"),l=e(s),u="mousemove.zoom",c=!1;(i.url||(o=e(a).find("img"),o[0]&&(i.url=o.data("src")||o.attr("src")),i.url))&&(s.onload=function(){function t(t){o.init(),o.move(t),l.stop().fadeTo(e.support.opacity?i.duration:0,1,!!e.isFunction(i.onZoomIn)&&i.onZoomIn.call(s))}function n(){l.stop().fadeTo(i.duration,0,!!e.isFunction(i.onZoomOut)&&i.onZoomOut.call(s))}var o=e.zoom(r,a,s);"grab"===i.on?e(a).on("mousedown.zoom",function(i){1===i.which&&(e(document).one("mouseup.zoom",function(){n(),e(document).off(u,o.move)}),t(i),e(document).on(u,o.move),i.preventDefault())}):"click"===i.on?e(a).on("click.zoom",function(i){return c?void 0:(c=!0,t(i),e(document).on(u,o.move),e(document).one("click.zoom",function(){n(),c=!1,e(document).off(u,o.move)}),!1)}):"toggle"===i.on?e(a).on("click.zoom",function(e){c?n():t(e),c=!c}):(o.init(),e(a).on("mouseenter.zoom",t).on("mouseleave.zoom",n).on(u,o.move)),e.isFunction(i.callback)&&i.callback.call(s)},s.src=i.url,e(a).one("zoom.destroy",function(){e(a).off(".zoom"),l.remove()}))})},e.fn.zoom.defaults=t}(window.jQuery),/*!

 matchMedia() polyfill - Test a CSS media type/query in JS. Authors & copyright (c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas, David Knight. Dual MIT/BSD license

*/
window.matchMedia||(window.matchMedia=function(){"use strict";var e=window.styleMedia||window.media;if(!e){var t=document.createElement("style"),n=document.getElementsByTagName("script")[0],o=null;t.type="text/css",t.id="matchmediajs-test",n.parentNode.insertBefore(t,n),o="getComputedStyle"in window&&window.getComputedStyle(t,null)||t.currentStyle,e={matchMedium:function(e){var n="@media "+e+"{ #matchmediajs-test { width: 1px; } }";return t.styleSheet?t.styleSheet.cssText=n:t.textContent=n,"1px"===o.width}}}return function(t){return{matches:e.matchMedium(t||"all"),media:t||"all"}}}()),/*!
 *	jQuery OwlCarousel v1.31
 *
 *	Copyright (c) 2013 Bartosz Wojciechowski
 *	http://www.owlgraphic.com/owlcarousel/
 *
 *	Licensed under MIT
 *
 */
"function"!=typeof Object.create&&(Object.create=function(e){function t(){}return t.prototype=e,new t}),function(e,t,n,o){var i={init:function(t,n){var o=this;o.$elem=e(n),o.options=e.extend({},e.fn.owlCarousel.options,o.$elem.data(),t),o.userOptions=t,o.loadContent()},loadContent:function(){function t(e){if("function"==typeof n.options.jsonSuccess)n.options.jsonSuccess.apply(this,[e]);else{var t="";for(var o in e.owl)t+=e.owl[o].item;n.$elem.html(t)}n.logIn()}var n=this;if("function"==typeof n.options.beforeInit&&n.options.beforeInit.apply(this,[n.$elem]),"string"==typeof n.options.jsonPath){var o=n.options.jsonPath;e.getJSON(o,t)}else n.logIn()},logIn:function(e){var t=this;t.$elem.data("owl-originalStyles",t.$elem.attr("style")).data("owl-originalClasses",t.$elem.attr("class")),t.$elem.css({opacity:0}),t.orignalItems=t.options.items,t.checkBrowser(),t.wrapperWidth=0,t.checkVisible,t.setVars()},setVars:function(){var e=this;return 0!==e.$elem.children().length&&(e.baseClass(),e.eventTypes(),e.$userItems=e.$elem.children(),e.itemsAmount=e.$userItems.length,e.wrapItems(),e.$owlItems=e.$elem.find(".owl-item"),e.$owlWrapper=e.$elem.find(".owl-wrapper"),e.playDirection="next",e.prevItem=0,e.prevArr=[0],e.currentItem=0,e.customEvents(),void e.onStartup())},onStartup:function(){var e=this;e.updateItems(),e.calculateAll(),e.buildControls(),e.updateControls(),e.response(),e.moveEvents(),e.stopOnHover(),e.owlStatus(),e.options.transitionStyle!==!1&&e.transitionTypes(e.options.transitionStyle),e.options.autoPlay===!0&&(e.options.autoPlay=5e3),e.play(),e.$elem.find(".owl-wrapper").css("display","block"),e.$elem.is(":visible")?e.$elem.css("opacity",1):e.watchVisibility(),e.onstartup=!1,e.eachMoveUpdate(),"function"==typeof e.options.afterInit&&e.options.afterInit.apply(this,[e.$elem])},eachMoveUpdate:function(){var e=this;e.options.lazyLoad===!0&&e.lazyLoad(),e.options.autoHeight===!0&&e.autoHeight(),e.onVisibleItems(),"function"==typeof e.options.afterAction&&e.options.afterAction.apply(this,[e.$elem])},updateVars:function(){var e=this;"function"==typeof e.options.beforeUpdate&&e.options.beforeUpdate.apply(this,[e.$elem]),e.watchVisibility(),e.updateItems(),e.calculateAll(),e.updatePosition(),e.updateControls(),e.eachMoveUpdate(),"function"==typeof e.options.afterUpdate&&e.options.afterUpdate.apply(this,[e.$elem])},reload:function(e){var t=this;setTimeout(function(){t.updateVars()},0)},watchVisibility:function(){var e=this;return e.$elem.is(":visible")===!1&&(e.$elem.css({opacity:0}),clearInterval(e.autoPlayInterval),clearInterval(e.checkVisible),void(e.checkVisible=setInterval(function(){e.$elem.is(":visible")&&(e.reload(),e.$elem.animate({opacity:1},200),clearInterval(e.checkVisible))},500)))},wrapItems:function(){var e=this;e.$userItems.wrapAll('<div class="owl-wrapper">').wrap('<div class="owl-item"></div>'),e.$elem.find(".owl-wrapper").wrap('<div class="owl-wrapper-outer">'),e.wrapperOuter=e.$elem.find(".owl-wrapper-outer"),e.$elem.css("display","block")},baseClass:function(){var e=this,t=e.$elem.hasClass(e.options.baseClass),n=e.$elem.hasClass(e.options.theme);t||e.$elem.addClass(e.options.baseClass),n||e.$elem.addClass(e.options.theme)},updateItems:function(){var t=this;if(t.options.responsive===!1)return!1;if(t.options.singleItem===!0)return t.options.items=t.orignalItems=1,t.options.itemsCustom=!1,t.options.itemsDesktop=!1,t.options.itemsDesktopSmall=!1,t.options.itemsTablet=!1,t.options.itemsTabletSmall=!1,t.options.itemsMobile=!1,!1;var n=e(t.options.responsiveBaseWidth).width();if(n>(t.options.itemsDesktop[0]||t.orignalItems)&&(t.options.items=t.orignalItems),"undefined"!=typeof t.options.itemsCustom&&t.options.itemsCustom!==!1){t.options.itemsCustom.sort(function(e,t){return e[0]-t[0]});for(var o in t.options.itemsCustom)"undefined"!=typeof t.options.itemsCustom[o]&&t.options.itemsCustom[o][0]<=n&&(t.options.items=t.options.itemsCustom[o][1])}else n<=t.options.itemsDesktop[0]&&t.options.itemsDesktop!==!1&&(t.options.items=t.options.itemsDesktop[1]),n<=t.options.itemsDesktopSmall[0]&&t.options.itemsDesktopSmall!==!1&&(t.options.items=t.options.itemsDesktopSmall[1]),n<=t.options.itemsTablet[0]&&t.options.itemsTablet!==!1&&(t.options.items=t.options.itemsTablet[1]),n<=t.options.itemsTabletSmall[0]&&t.options.itemsTabletSmall!==!1&&(t.options.items=t.options.itemsTabletSmall[1]),n<=t.options.itemsMobile[0]&&t.options.itemsMobile!==!1&&(t.options.items=t.options.itemsMobile[1]);t.options.items>t.itemsAmount&&t.options.itemsScaleUp===!0&&(t.options.items=t.itemsAmount)},response:function(){var n,o=this;if(o.options.responsive!==!0)return!1;var i=e(t).width();o.resizer=function(){e(t).width()!==i&&(o.options.autoPlay!==!1&&clearInterval(o.autoPlayInterval),clearTimeout(n),n=setTimeout(function(){i=e(t).width(),o.updateVars()},o.options.responsiveRefreshRate))},e(t).resize(o.resizer)},updatePosition:function(){var e=this;e.jumpTo(e.currentItem),e.options.autoPlay!==!1&&e.checkAp()},appendItemsSizes:function(){var t=this,n=0,o=t.itemsAmount-t.options.items;t.$owlItems.each(function(i){var r=e(this);r.css({width:t.itemWidth}).data("owl-item",Number(i)),i%t.options.items!==0&&i!==o||i>o||(n+=1),r.data("owl-roundPages",n)})},appendWrapperSizes:function(){var e=this,t=0,t=e.$owlItems.length*e.itemWidth;e.$owlWrapper.css({width:2*t,left:0}),e.appendItemsSizes()},calculateAll:function(){var e=this;e.calculateWidth(),e.appendWrapperSizes(),e.loops(),e.max()},calculateWidth:function(){var e=this;e.itemWidth=Math.floor(e.$elem.width()/e.options.items)},max:function(){var e=this,t=(e.itemsAmount*e.itemWidth-e.options.items*e.itemWidth)*-1;return e.options.items>e.itemsAmount?(e.maximumItem=0,t=0,e.maximumPixels=0):(e.maximumItem=e.itemsAmount-e.options.items,e.maximumPixels=t),t},min:function(){return 0},loops:function(){var t=this;t.positionsInArray=[0],t.pagesInArray=[];for(var n=0,o=0,i=0;i<t.itemsAmount;i++)if(o+=t.itemWidth,t.positionsInArray.push(-o),t.options.scrollPerPage===!0){var r=e(t.$owlItems[i]),a=r.data("owl-roundPages");a!==n&&(t.pagesInArray[n]=t.positionsInArray[i],n=a)}},buildControls:function(){var t=this;t.options.navigation!==!0&&t.options.pagination!==!0||(t.owlControls=e('<div class="owl-controls"/>').toggleClass("clickable",!t.browser.isTouch).appendTo(t.$elem)),t.options.pagination===!0&&t.buildPagination(),t.options.navigation===!0&&t.buildButtons()},buildButtons:function(){var t=this,n=e('<div class="owl-buttons"/>');t.owlControls.append(n),t.buttonPrev=e("<div/>",{"class":"owl-prev",html:t.options.navigationText[0]||""}),t.buttonNext=e("<div/>",{"class":"owl-next",html:t.options.navigationText[1]||""}),n.append(t.buttonPrev).append(t.buttonNext),n.on("touchstart.owlControls mousedown.owlControls",'div[class^="owl"]',function(e){e.preventDefault()}),n.on("touchend.owlControls mouseup.owlControls",'div[class^="owl"]',function(n){n.preventDefault(),e(this).hasClass("owl-next")?t.next():t.prev()})},buildPagination:function(){var t=this;t.paginationWrapper=e('<div class="owl-pagination"/>'),t.owlControls.append(t.paginationWrapper),t.paginationWrapper.on("touchend.owlControls mouseup.owlControls",".owl-page",function(n){n.preventDefault(),Number(e(this).data("owl-page"))!==t.currentItem&&t.goTo(Number(e(this).data("owl-page")),!0)})},updatePagination:function(){var t=this;if(t.options.pagination===!1)return!1;t.paginationWrapper.html("");for(var n=0,o=t.itemsAmount-t.itemsAmount%t.options.items,i=0;i<t.itemsAmount;i++)if(i%t.options.items===0){if(n+=1,o===i)var r=t.itemsAmount-t.options.items;var a=e("<div/>",{"class":"owl-page"}),s=e("<span></span>",{text:t.options.paginationNumbers===!0?n:"","class":t.options.paginationNumbers===!0?"owl-numbers":""});a.append(s),a.data("owl-page",o===i?r:i),a.data("owl-roundPages",n),t.paginationWrapper.append(a)}t.checkPagination()},checkPagination:function(){var t=this;return t.options.pagination!==!1&&void t.paginationWrapper.find(".owl-page").each(function(n,o){e(this).data("owl-roundPages")===e(t.$owlItems[t.currentItem]).data("owl-roundPages")&&(t.paginationWrapper.find(".owl-page").removeClass("active"),e(this).addClass("active"))})},checkNavigation:function(){var e=this;return e.options.navigation!==!1&&void(e.options.rewindNav===!1&&(0===e.currentItem&&0===e.maximumItem?(e.buttonPrev.addClass("disabled"),e.buttonNext.addClass("disabled")):0===e.currentItem&&0!==e.maximumItem?(e.buttonPrev.addClass("disabled"),e.buttonNext.removeClass("disabled")):e.currentItem===e.maximumItem?(e.buttonPrev.removeClass("disabled"),e.buttonNext.addClass("disabled")):0!==e.currentItem&&e.currentItem!==e.maximumItem&&(e.buttonPrev.removeClass("disabled"),e.buttonNext.removeClass("disabled"))))},updateControls:function(){var e=this;e.updatePagination(),e.checkNavigation(),e.owlControls&&(e.options.items>=e.itemsAmount?e.owlControls.hide():e.owlControls.show())},destroyControls:function(){var e=this;e.owlControls&&e.owlControls.remove()},next:function(e){var t=this;if(t.isTransition)return!1;if(t.currentItem+=t.options.scrollPerPage===!0?t.options.items:1,t.currentItem>t.maximumItem+(1==t.options.scrollPerPage?t.options.items-1:0)){if(t.options.rewindNav!==!0)return t.currentItem=t.maximumItem,!1;t.currentItem=0,e="rewind"}t.goTo(t.currentItem,e)},prev:function(e){var t=this;if(t.isTransition)return!1;if(t.options.scrollPerPage===!0&&t.currentItem>0&&t.currentItem<t.options.items?t.currentItem=0:t.currentItem-=t.options.scrollPerPage===!0?t.options.items:1,t.currentItem<0){if(t.options.rewindNav!==!0)return t.currentItem=0,!1;t.currentItem=t.maximumItem,e="rewind"}t.goTo(t.currentItem,e)},goTo:function(e,t,n){var o=this;if(o.isTransition)return!1;if("function"==typeof o.options.beforeMove&&o.options.beforeMove.apply(this,[o.$elem]),e>=o.maximumItem?e=o.maximumItem:e<=0&&(e=0),o.currentItem=o.owl.currentItem=e,o.options.transitionStyle!==!1&&"drag"!==n&&1===o.options.items&&o.browser.support3d===!0)return o.swapSpeed(0),o.browser.support3d===!0?o.transition3d(o.positionsInArray[e]):o.css2slide(o.positionsInArray[e],1),o.afterGo(),o.singleItemTransition(),!1;var i=o.positionsInArray[e];o.browser.support3d===!0?(o.isCss3Finish=!1,t===!0?(o.swapSpeed("paginationSpeed"),setTimeout(function(){o.isCss3Finish=!0},o.options.paginationSpeed)):"rewind"===t?(o.swapSpeed(o.options.rewindSpeed),setTimeout(function(){o.isCss3Finish=!0},o.options.rewindSpeed)):(o.swapSpeed("slideSpeed"),setTimeout(function(){o.isCss3Finish=!0},o.options.slideSpeed)),o.transition3d(i)):t===!0?o.css2slide(i,o.options.paginationSpeed):"rewind"===t?o.css2slide(i,o.options.rewindSpeed):o.css2slide(i,o.options.slideSpeed),o.afterGo()},jumpTo:function(e){var t=this;"function"==typeof t.options.beforeMove&&t.options.beforeMove.apply(this,[t.$elem]),e>=t.maximumItem||e===-1?e=t.maximumItem:e<=0&&(e=0),t.swapSpeed(0),t.browser.support3d===!0?t.transition3d(t.positionsInArray[e]):t.css2slide(t.positionsInArray[e],1),t.currentItem=t.owl.currentItem=e,t.afterGo()},afterGo:function(){var e=this;e.prevArr.push(e.currentItem),e.prevItem=e.owl.prevItem=e.prevArr[e.prevArr.length-2],e.prevArr.shift(0),e.prevItem!==e.currentItem&&(e.checkPagination(),e.checkNavigation(),e.eachMoveUpdate(),e.options.autoPlay!==!1&&e.checkAp()),"function"==typeof e.options.afterMove&&e.prevItem!==e.currentItem&&e.options.afterMove.apply(this,[e.$elem])},stop:function(){var e=this;e.apStatus="stop",clearInterval(e.autoPlayInterval)},checkAp:function(){var e=this;"stop"!==e.apStatus&&e.play()},play:function(){var e=this;return e.apStatus="play",e.options.autoPlay!==!1&&(clearInterval(e.autoPlayInterval),void(e.autoPlayInterval=setInterval(function(){e.next(!0)},e.options.autoPlay)))},swapSpeed:function(e){var t=this;"slideSpeed"===e?t.$owlWrapper.css(t.addCssSpeed(t.options.slideSpeed)):"paginationSpeed"===e?t.$owlWrapper.css(t.addCssSpeed(t.options.paginationSpeed)):"string"!=typeof e&&t.$owlWrapper.css(t.addCssSpeed(e))},addCssSpeed:function(e){return{"-webkit-transition":"all "+e+"ms ease","-moz-transition":"all "+e+"ms ease","-o-transition":"all "+e+"ms ease",transition:"all "+e+"ms ease"}},removeTransition:function(){return{"-webkit-transition":"","-moz-transition":"","-o-transition":"",transition:""}},doTranslate:function(e){return{"-webkit-transform":"translate3d("+e+"px, 0px, 0px)","-moz-transform":"translate3d("+e+"px, 0px, 0px)","-o-transform":"translate3d("+e+"px, 0px, 0px)","-ms-transform":"translate3d("+e+"px, 0px, 0px)",transform:"translate3d("+e+"px, 0px,0px)"}},transition3d:function(e){var t=this;t.$owlWrapper.css(t.doTranslate(e))},css2move:function(e){var t=this;t.$owlWrapper.css({left:e})},css2slide:function(e,t){var n=this;n.isCssFinish=!1,n.$owlWrapper.stop(!0,!0).animate({left:e},{duration:t||n.options.slideSpeed,complete:function(){n.isCssFinish=!0}})},checkBrowser:function(){var e=this,o="translate3d(0px, 0px, 0px)",i=n.createElement("div");i.style.cssText="  -moz-transform:"+o+"; -ms-transform:"+o+"; -o-transform:"+o+"; -webkit-transform:"+o+"; transform:"+o;var r=/translate3d\(0px, 0px, 0px\)/g,a=i.style.cssText.match(r),s=null!==a&&1===a.length,l="ontouchstart"in t||navigator.msMaxTouchPoints;e.browser={support3d:s,isTouch:l}},moveEvents:function(){var e=this;e.options.mouseDrag===!1&&e.options.touchDrag===!1||(e.gestures(),e.disabledEvents())},eventTypes:function(){var e=this,t=["s","e","x"];e.ev_types={},e.options.mouseDrag===!0&&e.options.touchDrag===!0?t=["touchstart.owl mousedown.owl","touchmove.owl mousemove.owl","touchend.owl touchcancel.owl mouseup.owl"]:e.options.mouseDrag===!1&&e.options.touchDrag===!0?t=["touchstart.owl","touchmove.owl","touchend.owl touchcancel.owl"]:e.options.mouseDrag===!0&&e.options.touchDrag===!1&&(t=["mousedown.owl","mousemove.owl","mouseup.owl"]),e.ev_types.start=t[0],e.ev_types.move=t[1],e.ev_types.end=t[2]},disabledEvents:function(){var t=this;t.$elem.on("dragstart.owl",function(e){e.preventDefault()}),t.$elem.on("mousedown.disableTextSelect",function(t){return e(t.target).is("input, textarea, select, option")})},gestures:function(){function i(e){return e.touches?{x:e.touches[0].pageX,y:e.touches[0].pageY}:e.pageX!==o?{x:e.pageX,y:e.pageY}:{x:e.clientX,y:e.clientY}}function r(t){"on"===t?(e(n).on(u.ev_types.move,s),e(n).on(u.ev_types.end,l)):"off"===t&&(e(n).off(u.ev_types.move),e(n).off(u.ev_types.end))}function a(n){var n=n.originalEvent||n||t.event;if(3===n.which)return!1;if(!(u.itemsAmount<=u.options.items)){if(u.isCssFinish===!1&&!u.options.dragBeforeAnimFinish)return!1;if(u.isCss3Finish===!1&&!u.options.dragBeforeAnimFinish)return!1;u.options.autoPlay!==!1&&clearInterval(u.autoPlayInterval),u.browser.isTouch===!0||u.$owlWrapper.hasClass("grabbing")||u.$owlWrapper.addClass("grabbing"),u.newPosX=0,u.newRelativeX=0,e(this).css(u.removeTransition());var o=e(this).position();c.relativePos=o.left,c.offsetX=i(n).x-o.left,c.offsetY=i(n).y-o.top,r("on"),c.sliding=!1,c.targetElement=n.target||n.srcElement}}function s(o){var o=o.originalEvent||o||t.event;u.newPosX=i(o).x-c.offsetX,u.newPosY=i(o).y-c.offsetY,u.newRelativeX=u.newPosX-c.relativePos,"function"==typeof u.options.startDragging&&c.dragging!==!0&&0!==u.newRelativeX&&(c.dragging=!0,u.options.startDragging.apply(u,[u.$elem])),(u.newRelativeX>8||u.newRelativeX<-8&&u.browser.isTouch===!0)&&(o.preventDefault?o.preventDefault():o.returnValue=!1,c.sliding=!0),(u.newPosY>10||u.newPosY<-10)&&c.sliding===!1&&e(n).off("touchmove.owl");var r=function(){return u.newRelativeX/5},a=function(){return u.maximumPixels+u.newRelativeX/5};u.newPosX=Math.max(Math.min(u.newPosX,r()),a()),u.browser.support3d===!0?u.transition3d(u.newPosX):u.css2move(u.newPosX)}function l(n){var n=n.originalEvent||n||t.event;if(n.target=n.target||n.srcElement,c.dragging=!1,u.browser.isTouch!==!0&&u.$owlWrapper.removeClass("grabbing"),u.newRelativeX<0?u.dragDirection=u.owl.dragDirection="left":u.dragDirection=u.owl.dragDirection="right",0!==u.newRelativeX){var o=u.getNewPosition();if(u.goTo(o,!1,"drag"),c.targetElement===n.target&&u.browser.isTouch!==!0){e(n.target).on("click.disable",function(t){t.stopImmediatePropagation(),t.stopPropagation(),t.preventDefault(),e(n.target).off("click.disable")});var i=e._data(n.target,"events").click,a=i.pop();i.splice(0,0,a)}}r("off")}var u=this,c={offsetX:0,offsetY:0,baseElWidth:0,relativePos:0,position:null,minSwipe:null,maxSwipe:null,sliding:null,dargging:null,targetElement:null};u.isCssFinish=!0,u.$elem.on(u.ev_types.start,".owl-wrapper",a)},getNewPosition:function(){var e,t=this;return e=t.closestItem(),e>t.maximumItem?(t.currentItem=t.maximumItem,e=t.maximumItem):t.newPosX>=0&&(e=0,t.currentItem=0),e},closestItem:function(){var t=this,n=t.options.scrollPerPage===!0?t.pagesInArray:t.positionsInArray,o=t.newPosX,i=null;return e.each(n,function(r,a){o-t.itemWidth/20>n[r+1]&&o-t.itemWidth/20<a&&"left"===t.moveDirection()?(i=a,t.options.scrollPerPage===!0?t.currentItem=e.inArray(i,t.positionsInArray):t.currentItem=r):o+t.itemWidth/20<a&&o+t.itemWidth/20>(n[r+1]||n[r]-t.itemWidth)&&"right"===t.moveDirection()&&(t.options.scrollPerPage===!0?(i=n[r+1]||n[n.length-1],t.currentItem=e.inArray(i,t.positionsInArray)):(i=n[r+1],t.currentItem=r+1))}),t.currentItem},moveDirection:function(){var e,t=this;return t.newRelativeX<0?(e="right",t.playDirection="next"):(e="left",t.playDirection="prev"),e},customEvents:function(){var e=this;e.$elem.on("owl.next",function(){e.next()}),e.$elem.on("owl.prev",function(){e.prev()}),e.$elem.on("owl.play",function(t,n){e.options.autoPlay=n,e.play(),e.hoverStatus="play"}),e.$elem.on("owl.stop",function(){e.stop(),e.hoverStatus="stop"}),e.$elem.on("owl.goTo",function(t,n){e.goTo(n)}),e.$elem.on("owl.jumpTo",function(t,n){e.jumpTo(n)})},stopOnHover:function(){var e=this;e.options.stopOnHover===!0&&e.browser.isTouch!==!0&&e.options.autoPlay!==!1&&(e.$elem.on("mouseover",function(){e.stop()}),e.$elem.on("mouseout",function(){"stop"!==e.hoverStatus&&e.play()}))},lazyLoad:function(){var t=this;if(t.options.lazyLoad===!1)return!1;for(var n=0;n<t.itemsAmount;n++){var i=e(t.$owlItems[n]);if("loaded"!==i.data("owl-loaded")){var r,a=i.data("owl-item"),s=i.find(".lazyOwl");"string"==typeof s.data("src")?(i.data("owl-loaded")===o&&(s.hide(),i.addClass("loading").data("owl-loaded","checked")),r=t.options.lazyFollow!==!0||a>=t.currentItem,r&&a<t.currentItem+t.options.items&&s.length&&t.lazyPreload(i,s)):i.data("owl-loaded","loaded")}}},lazyPreload:function(e,t){function n(){r+=1,i.completeImg(t.get(0))||a===!0?o():r<=100?setTimeout(n,100):o()}function o(){e.data("owl-loaded","loaded").removeClass("loading"),t.removeAttr("data-src"),"fade"===i.options.lazyEffect?t.fadeIn(400):t.show(),"function"==typeof i.options.afterLazyLoad&&i.options.afterLazyLoad.apply(this,[i.$elem])}var i=this,r=0;if("DIV"===t.prop("tagName")){t.css("background-image","url("+t.data("src")+")");var a=!0}else t[0].src=t.data("src");n()},autoHeight:function(){function t(){a+=1,i.completeImg(r.get(0))?n():a<=100?setTimeout(t,100):i.wrapperOuter.css("height","")}function n(){var t=e(i.$owlItems[i.currentItem]).height();i.wrapperOuter.css("height",t+"px"),i.wrapperOuter.hasClass("autoHeight")||setTimeout(function(){i.wrapperOuter.addClass("autoHeight")},0)}var i=this,r=e(i.$owlItems[i.currentItem]).find("img");if(r.get(0)!==o){var a=0;t()}else n()},completeImg:function(e){return!!e.complete&&("undefined"==typeof e.naturalWidth||0!=e.naturalWidth)},onVisibleItems:function(){var t=this;t.options.addClassActive===!0&&t.$owlItems.removeClass("active"),t.visibleItems=[];for(var n=t.currentItem;n<t.currentItem+t.options.items;n++)t.visibleItems.push(n),t.options.addClassActive===!0&&e(t.$owlItems[n]).addClass("active");t.owl.visibleItems=t.visibleItems},transitionTypes:function(e){var t=this;t.outClass="owl-"+e+"-out",t.inClass="owl-"+e+"-in"},singleItemTransition:function(){function e(e,t){return{position:"relative",left:e+"px"}}var t=this;t.isTransition=!0;var n=t.outClass,o=t.inClass,i=t.$owlItems.eq(t.currentItem),r=t.$owlItems.eq(t.prevItem),a=Math.abs(t.positionsInArray[t.currentItem])+t.positionsInArray[t.prevItem],s=Math.abs(t.positionsInArray[t.currentItem])+t.itemWidth/2;t.$owlWrapper.addClass("owl-origin").css({"-webkit-transform-origin":s+"px","-moz-perspective-origin":s+"px","perspective-origin":s+"px"});var l="webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend";r.css(e(a,10)).addClass(n).on(l,function(){t.endPrev=!0,r.off(l),t.clearTransStyle(r,n)}),i.addClass(o).on(l,function(){t.endCurrent=!0,i.off(l),t.clearTransStyle(i,o)})},clearTransStyle:function(e,t){var n=this;e.css({position:"",left:""}).removeClass(t),n.endPrev&&n.endCurrent&&(n.$owlWrapper.removeClass("owl-origin"),n.endPrev=!1,n.endCurrent=!1,n.isTransition=!1)},owlStatus:function(){var e=this;e.owl={userOptions:e.userOptions,baseElement:e.$elem,userItems:e.$userItems,owlItems:e.$owlItems,currentItem:e.currentItem,prevItem:e.prevItem,visibleItems:e.visibleItems,isTouch:e.browser.isTouch,browser:e.browser,dragDirection:e.dragDirection}},clearEvents:function(){var o=this;o.$elem.off(".owl owl mousedown.disableTextSelect"),e(n).off(".owl owl"),e(t).off("resize",o.resizer)},unWrap:function(){var e=this;0!==e.$elem.children().length&&(e.$owlWrapper.unwrap(),e.$userItems.unwrap().unwrap(),e.owlControls&&e.owlControls.remove()),e.clearEvents(),e.$elem.attr("style",e.$elem.data("owl-originalStyles")||"").attr("class",e.$elem.data("owl-originalClasses"))},destroy:function(){var e=this;e.stop(),clearInterval(e.checkVisible),e.unWrap(),e.$elem.removeData()},reinit:function(t){var n=this,o=e.extend({},n.userOptions,t);n.unWrap(),n.init(o,n.$elem)},addItem:function(e,t){var n,i=this;return!!e&&(0===i.$elem.children().length?(i.$elem.append(e),i.setVars(),!1):(i.unWrap(),n=t===o||t===-1?-1:t,n>=i.$userItems.length||n===-1?i.$userItems.eq(-1).after(e):i.$userItems.eq(n).before(e),void i.setVars()))},removeItem:function(e){var t,n=this;return 0!==n.$elem.children().length&&(t=e===o||e===-1?-1:e,n.unWrap(),n.$userItems.eq(t).remove(),void n.setVars())}};e.fn.owlCarousel=function(t){return this.each(function(){if(e(this).data("owl-init")===!0)return!1;e(this).data("owl-init",!0);var n=Object.create(i);n.init(t,this),e.data(this,"owlCarousel",n)})},e.fn.owlCarousel.options={items:5,itemsCustom:!1,itemsDesktop:[1199,4],itemsDesktopSmall:[979,3],itemsTablet:[768,2],itemsTabletSmall:!1,itemsMobile:[479,1],singleItem:!1,itemsScaleUp:!1,slideSpeed:200,paginationSpeed:800,rewindSpeed:1e3,autoPlay:!1,stopOnHover:!1,navigation:!1,navigationText:["prev","next"],rewindNav:!0,scrollPerPage:!1,pagination:!0,paginationNumbers:!1,responsive:!0,responsiveRefreshRate:200,responsiveBaseWidth:t,baseClass:"owl-carousel",theme:"owl-theme",lazyLoad:!1,lazyFollow:!0,lazyEffect:"fade",autoHeight:!1,jsonPath:!1,jsonSuccess:!1,dragBeforeAnimFinish:!0,mouseDrag:!0,touchDrag:!0,addClassActive:!1,transitionStyle:!1,beforeUpdate:!1,afterUpdate:!1,beforeInit:!1,afterInit:!1,beforeMove:!1,afterMove:!1,afterAction:!1,startDragging:!1,afterLazyLoad:!1}}(jQuery,window,document),/*!
 *
 * Spin.js
 * Copyright (c) 2011-2013 Felix Gnass
 * Licensed under the MIT license
 */
function(e,t){"object"==typeof exports?module.exports=t():"function"==typeof define&&define.amd?define(t):e.Spinner=t()}(this,function(){"use strict";function e(e,t){var n,o=document.createElement(e||"div");for(n in t)o[n]=t[n];return o}function t(e){for(var t=1,n=arguments.length;t<n;t++)e.appendChild(arguments[t]);return e}function n(e,t,n,o){var i=["opacity",t,~~(100*e),n,o].join("-"),r=.01+n/o*100,a=Math.max(1-(1-e)/t*(100-r),e),s=c.substring(0,c.indexOf("Animation")).toLowerCase(),l=s&&"-"+s+"-"||"";return d[i]||(f.insertRule("@"+l+"keyframes "+i+"{0%{opacity:"+a+"}"+r+"%{opacity:"+e+"}"+(r+.01)+"%{opacity:1}"+(r+t)%100+"%{opacity:"+e+"}100%{opacity:"+a+"}}",f.cssRules.length),d[i]=1),i}function o(e,t){var n,o,i=e.style;for(t=t.charAt(0).toUpperCase()+t.slice(1),o=0;o<p.length;o++)if(n=p[o]+t,void 0!==i[n])return n;if(void 0!==i[t])return t}function i(e,t){for(var n in t)e.style[o(e,n)||n]=t[n];return e}function r(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)void 0===e[o]&&(e[o]=n[o])}return e}function a(e){for(var t={x:e.offsetLeft,y:e.offsetTop};e=e.offsetParent;)t.x+=e.offsetLeft,t.y+=e.offsetTop;return t}function s(e,t){return"string"==typeof e?e:e[t%e.length]}function l(e){return"undefined"==typeof this?new l(e):void(this.opts=r(e||{},l.defaults,m))}function u(){function n(t,n){return e("<"+t+' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">',n)}f.addRule(".spin-vml","behavior:url(#default#VML)"),l.prototype.lines=function(e,o){function r(){return i(n("group",{coordsize:c+" "+c,coordorigin:-u+" "+-u}),{width:c,height:c})}function a(e,a,l){t(d,t(i(r(),{rotation:360/o.lines*e+"deg",left:~~a}),t(i(n("roundrect",{arcsize:o.corners}),{width:u,height:o.width,left:o.radius,top:-o.width>>1,filter:l}),n("fill",{color:s(o.color,e),opacity:o.opacity}),n("stroke",{opacity:0}))))}var l,u=o.length+o.width,c=2*u,p=2*-(o.width+o.length)+"px",d=i(r(),{position:"absolute",top:p,left:p});if(o.shadow)for(l=1;l<=o.lines;l++)a(l,-2,"progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)");for(l=1;l<=o.lines;l++)a(l);return t(e,d)},l.prototype.opacity=function(e,t,n,o){var i=e.firstChild;o=o.shadow&&o.lines||0,i&&t+o<i.childNodes.length&&(i=i.childNodes[t+o],i=i&&i.firstChild,i=i&&i.firstChild,i&&(i.opacity=n))}}var c,p=["webkit","Moz","ms","O"],d={},f=function(){var n=e("style",{type:"text/css"});return t(document.getElementsByTagName("head")[0],n),n.sheet||n.styleSheet}(),m={lines:12,length:7,width:5,radius:10,rotate:0,corners:1,color:"#000",direction:1,speed:1,trail:100,opacity:.25,fps:20,zIndex:2e9,className:"spinner",top:"auto",left:"auto",position:"relative"};l.defaults={},r(l.prototype,{spin:function(t){this.stop();var n,o,r=this,s=r.opts,l=r.el=i(e(0,{className:s.className}),{position:s.position,width:0,zIndex:s.zIndex}),u=s.radius+s.length+s.width;if(t&&(t.insertBefore(l,t.firstChild||null),o=a(t),n=a(l),i(l,{left:("auto"==s.left?o.x-n.x+(t.offsetWidth>>1):parseInt(s.left,10)+u)+"px",top:("auto"==s.top?o.y-n.y+(t.offsetHeight>>1):parseInt(s.top,10)+u)+"px"})),l.setAttribute("role","progressbar"),r.lines(l,r.opts),!c){var p,d=0,f=(s.lines-1)*(1-s.direction)/2,m=s.fps,h=m/s.speed,g=(1-s.opacity)/(h*s.trail/100),v=h/s.lines;!function y(){d++;for(var e=0;e<s.lines;e++)p=Math.max(1-(d+(s.lines-e)*v)%h*g,s.opacity),r.opacity(l,e*s.direction+f,p,s);r.timeout=r.el&&setTimeout(y,~~(1e3/m))}()}return r},stop:function(){var e=this.el;return e&&(clearTimeout(this.timeout),e.parentNode&&e.parentNode.removeChild(e),this.el=void 0),this},lines:function(o,r){function a(t,n){return i(e(),{position:"absolute",width:r.length+r.width+"px",height:r.width+"px",background:t,boxShadow:n,transformOrigin:"left",transform:"rotate("+~~(360/r.lines*u+r.rotate)+"deg) translate("+r.radius+"px,0)",borderRadius:(r.corners*r.width>>1)+"px"})}for(var l,u=0,p=(r.lines-1)*(1-r.direction)/2;u<r.lines;u++)l=i(e(),{position:"absolute",top:1+~(r.width/2)+"px",transform:r.hwaccel?"translate3d(0,0,0)":"",opacity:r.opacity,animation:c&&n(r.opacity,r.trail,p+u*r.direction,r.lines)+" "+1/r.speed+"s linear infinite"}),r.shadow&&t(l,i(a("#000","0 0 4px #000"),{top:"2px"})),t(o,t(l,a(s(r.color,u),"0 0 1px rgba(0,0,0,.1)")));return o},opacity:function(e,t,n){t<e.childNodes.length&&(e.childNodes[t].style.opacity=n)}});var h=i(e("group"),{behavior:"url(#default#VML)"});return!o(h,"transform")&&h.adj?u():c=o(h,"animation"),l}),function(e){if("object"==typeof exports)e(require("jquery"),require("spin"));else if("function"==typeof define&&define.amd)define(["jquery","spin"],e);else{if(!window.Spinner)throw new Error("Spin.js not present");e(window.jQuery,window.Spinner)}}(function(e,t){e.fn.spin=function(n,o){return this.each(function(){var i=e(this),r=i.data();r.spinner&&(r.spinner.stop(),delete r.spinner),n!==!1&&(n=e.extend({color:o||i.css("color")},e.fn.spin.presets[n]||n),r.spinner=new t(n).spin(this))})},e.fn.spin.presets={tiny:{lines:8,length:2,width:2,radius:3},small:{lines:8,length:4,width:3,radius:5},large:{lines:10,length:8,width:4,radius:8}}});
(function() {
  var Accordion, Cart, Collection, DOC, Footer, FrameworkAlign, FullscreenSlider, HEADER, HorizontalTabs, InstagramFeed, MediaQueries, PAGE, Password, Popup, ProductGrid, ProductModal, ProductPage, ProductSlider, PromoBar, VerticalTabs, VideoModal, WINDOW, current_window, log, mq_large, mq_medium, mq_small, touchevents_exist,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  FrameworkAlign = (function() {
    function FrameworkAlign(element1, type1) {
      this.element = element1;
      this.type = type1;
      this.resizeListeners = bind(this.resizeListeners, this);
      this.fillYSpace = bind(this.fillYSpace, this);
      this.checkOverlap = bind(this.checkOverlap, this);
      this.createOverlapDetectors = bind(this.createOverlapDetectors, this);
      this.position = bind(this.position, this);
      this.parent = this.element.parent();
      this.left_side_border;
      this.right_element_width = null;
      this.position();
      this.fillYSpace();
      this.createOverlapDetectors();
      this.resizeListeners();
    }

    FrameworkAlign.prototype.position = function() {
      if (this.type === 'center-x') {
        if (!Modernizr.csstransforms) {
          this.element.css({
            'margin-left': -(this.element.outerWidth() / 2)
          });
        }
      }
      if (this.type === 'center-y') {
        if (!Modernizr.csstransforms) {
          return this.element.css({
            'margin-top': -(this.element.outerHeight() / 2)
          });
        }
      }
    };

    FrameworkAlign.prototype.createOverlapDetectors = function() {
      var _this;
      _this = this;
      if (_this.type === 'right') {
        return this.right_element_width = _this.element.outerWidth();
      }
    };

    FrameworkAlign.prototype.checkOverlap = function() {
      var _this, left_element, left_side_border, right_side_border;
      _this = this;
      if (_this.type === 'right') {
        _this.parent.removeClass('overlap');
        left_element = _this.parent.children().eq(_this.element.index() - 1);
        left_side_border = left_element.position().left + left_element.outerWidth();
        right_side_border = _this.parent.outerWidth() - _this.right_element_width;
        if (left_side_border >= right_side_border) {
          return _this.parent.addClass('overlap');
        }
      }
    };

    FrameworkAlign.prototype.fillYSpace = function() {
      var _this, container_height, text_panel_height;
      _this = this;
      if (_this.type === 'fill-y--dynamic') {
        container_height = _this.parent.outerHeight();
        text_panel_height = _this.parent.find('.fw--align--fill-y--fixed').outerHeight();
        return _this.element.outerHeight(container_height - text_panel_height);
      }
    };

    FrameworkAlign.prototype.resizeListeners = function() {
      var _this;
      _this = this;
      $(window).on('resize.FrameworkAlign', function() {
        _this.checkOverlap();
        return _this.fillYSpace();
      });
      return setTimeout(function() {
        return _this.checkOverlap();
      }, 1);
    };

    return FrameworkAlign;

  })();

  theme.classes.FrameworkAnimation = (function() {
    function FrameworkAnimation() {}

    return FrameworkAnimation;

  })();

  theme.classes.FrameworkCart = (function() {
    function FrameworkCart(root) {
      var _this;
      this.root = root;
      this.convertCurrency = bind(this.convertCurrency, this);
      this.openModalListener = bind(this.openModalListener, this);
      this.openOffCanvasListener = bind(this.openOffCanvasListener, this);
      this.removeItem = bind(this.removeItem, this);
      this.removeItemListeners = bind(this.removeItemListeners, this);
      this.updateTotalsComplete = bind(this.updateTotalsComplete, this);
      this.updateTotals = bind(this.updateTotals, this);
      this.plusQuantity = bind(this.plusQuantity, this);
      this.minusQuantity = bind(this.minusQuantity, this);
      this.updateQuantityListeners = bind(this.updateQuantityListeners, this);
      this.addItem = bind(this.addItem, this);
      this.renderOther = bind(this.renderOther, this);
      this.renderListener = bind(this.renderListener, this);
      this.renderCart = bind(this.renderCart, this);
      _this = this;
      _this.adjusting_qty_timer = null;
      _this.table_content = _this.root.find('form > .content');
      _this.render_trigger = $('.fw--cart-modal--trigger-render');
      _this.totals = {};
      _this.add_locked = false;
      _this.render_locked = false;
      if (_this.root.hasClass('off-canvas')) {
        _this.view = 'off canvas';
      }
      if (_this.root.hasClass('modal--content')) {
        _this.view = 'modal';
      }
      _this.temp_quantity = 0;
      _this.renderCart();
      if (_this.view === 'off canvas') {
        _this.openOffCanvasListener();
      }
      _this.openModalListener();
      _this.renderListener();
    }

    FrameworkCart.prototype.renderCart = function(callback) {
      var _this;
      _this = this;
      if (!_this.render_locked) {
        _this.render_locked = true;
        _this.table_content.empty();
        return $.ajax({
          type: "POST",
          url: "/cart.js",
          dataType: "json"
        }).done(function(data, textStatus, jqXHR) {
          var cart, index, item, j, len1, ref, row;
          if (textStatus === 'success') {
            cart = data;
            if (cart.items.length) {
              _this.root.removeClass('no-items');
            } else {
              _this.root.addClass('no-items');
            }
            ref = cart.items;
            for (index = j = 0, len1 = ref.length; j < len1; index = ++j) {
              item = ref[index];
              item.image_url = Shopify.resizeImage(item.image, "medium");
              item.price = Currency.formatMoney(item.price, theme.money_format);
              if ((index + 1) === cart.items.length) {
                row = '<div class="variant-id last-variant width--12" data-variant-id=' + item.variant_id + '>';
              } else {
                row = '<div class="variant-id width--12" data-variant-id=' + item.variant_id + '>';
              }
              row += '<div class="width--12 width--medium-4 width--large-6 block">';
              if (item.image_url === null) {
                row += '<span class="image block width--4 width--medium-12 width--large-4 spacing--3"></span>';
              } else {
                row += '<span class="image block width--4 width--medium-12 width--large-4 spacing--3"><a href="' + item.url + '"><img src="' + item.image_url + '" alt="' + item.title + '"></a></span>';
              }
              row += '<span class="title show--small show--large block width--8 spacing--3 font--size-4"><a href="' + item.url + '">' + item.title + '</a></span>';
              row += '</div>';
              row += '<div class="right-column width--12 width--medium-8 width--large-6 block spacing--3y text-align--left text-align--large-right">';
              row += '<span class="title show--medium block width--12 spacing--3 font--size-4"><a href="' + item.url + '">' + item.title + '</a></span>';
              row += '<span class="price font--accent spacing--3 font--size-3 money">' + item.price + '</span>';
              row += '<span class="quantity spacing--3"><div class="input--number">';
              row += '<a tabindex="0" aria-label="' + theme.translations.remove_one_item + '" class="minus">' + theme.utils.addSymbol('minus') + '</a>';
              row += '<input type="text" value="' + item.quantity + '" min="1" pattern="[1-9]*">';
              row += '<a tabindex="0" aria-label="' + theme.translations.add_one_item + '" class="plus">' + theme.utils.addSymbol('plus') + '</a>';
              row += '</div></span>';
              row += '<span class="remove spacing--3">';
              row += '<a aria-label="' + theme.translations.remove_item + '" role="button" href="#" class="cart--remove-button remove">' + theme.utils.addSymbol('cross-circle') + '</a>';
              row += '</span>';
              row += '</div>';
              row += '</div>';
              row += '<div class="spacer spacing--3y"></div>';
              _this.table_content.append(row);
            }
            row = '<div class="totals width--12 text-align--center ">';
            row += '<div class="width--12 width--large-8 block">';
            row += '</div>';
            row += '<div class="block spacing--3y width--12 width--large-4 font--size-3 text--bold text-align--large-right text--uppercase">';
            row += '<span class="spacing--3">' + theme.translations.cart_subtotal + '</span>';
            row += '<span class="total spacing--3 money font--accent font--subheading--size">' + _this.totals.price + '</span>';
            row += '</div>';
            row += '</div>';
            row += '<div class="spacer spacing--3y show--small-medium"></div>';
            _this.table_content.append(row);
            _this.updateTotals();
            if (window.Shopify && Shopify.StorefrontExpressButtons) {
              Shopify.StorefrontExpressButtons.initialize();
            }
            if (callback) {
              callback();
            }
            $(window).trigger('resize.FrameworkModal');
            _this.render_locked = false;
            _this.removeItemListeners();
            _this.updateQuantityListeners();
            return _this.convertCurrency(_this.root.find('.money'));
          } else {
            return console.log('cart - render item status - ' + textStatus);
          }
        }).fail(function(jqXHR, textStatus) {
          console.log("cart rendering failed");
          return _this.render_locked = false;
        });
      }
    };

    FrameworkCart.prototype.renderListener = function() {
      var _this;
      _this = this;
      return _this.root.on('renderCart', function() {
        return _this.renderCart();
      });
    };

    FrameworkCart.prototype.renderOther = function() {
      var _this;
      _this = this;
      if (theme.utils.mqs.current_window === 'small') {
        return $('.fw--cart.modal--content').trigger('renderCart');
      } else {
        return $('.fw--cart.off-canvas').trigger('renderCart');
      }
    };

    FrameworkCart.prototype.addItem = function(form, callback) {
      var _this;
      _this = this;
      if (!_this.add_locked) {
        _this.add_locked = true;
        return $.ajax({
          type: "POST",
          url: "/cart/add.js",
          dataType: "json",
          data: form.serialize()
        }).done(function(data, textStatus, jqXHR) {
          callback(true);
          _this.renderOther();
          return _this.add_locked = false;
        }).fail(function(jqXHR, textStatus) {
          callback(false, jqXHR.responseJSON.description);
          return _this.add_locked = false;
        });
      }
    };

    FrameworkCart.prototype.updateQuantityListeners = function() {
      var _this;
      _this = this;
      _this.table_content.find('.input--number input').attr("autocomplete", "off").on('keyup.LayoutCartModal paste.LayoutCartModal', function() {
        var input, input_wrapper, variant_id;
        input_wrapper = $(this).closest('.input--number');
        input = input_wrapper.find('input');
        if (parseInt(input.val()) > 0) {
          input_wrapper.addClass('updating');
          clearTimeout(_this.adjusting_qty_timer);
          variant_id = $(this).closest('.variant-id').data('variant-id');
          _this.adjusting_qty_timer = setTimeout(function() {
            _this.updateCart(variant_id, parseInt(input.val()));
            input_wrapper.removeClass('updating');
            return _this.updateTotals();
          }, 500);
        } else if (parseInt(input.val()) === 0) {
          variant_id = $(this).closest('.variant-id').data('variant-id');
          _this.removeItem(variant_id);
          if ($(this).closest('form').find('.variant-id').length === 1) {
            _this.root.addClass('no-items');
          } else {
            $(this).closest('.variant-id').remove();
          }
        }
        return false;
      });
      _this.table_content.find('.input--number .minus').on('keypress.LayoutCartModal click.LayoutCartModal', function(e) {
        var input, input_wrapper, variant_id;
        if (theme.utils.a11yClick(e) === true) {
          input_wrapper = $(this).closest('.input--number');
          input = input_wrapper.find('input');
          if (parseInt(input.val()) > 1) {
            input_wrapper.addClass('updating');
            clearTimeout(_this.adjusting_qty_timer);
            input.val(parseInt(input.val()) - 1);
            variant_id = $(this).closest('.variant-id').data('variant-id');
            _this.adjusting_qty_timer = setTimeout(function() {
              _this.minusQuantity(variant_id, parseInt(input.val()));
              input_wrapper.removeClass('updating');
              return _this.updateTotals();
            }, 500);
          }
          return false;
        }
      });
      return _this.table_content.find('.input--number .plus').on('keypress.LayoutCartModal click.LayoutCartModal', function(e) {
        var input, input_wrapper, variant_id;
        if (theme.utils.a11yClick(e) === true) {
          clearTimeout(_this.adjusting_qty_timer);
          input_wrapper = $(this).closest('.input--number');
          input = input_wrapper.find('input');
          if (_this.temp_quantity === 0) {
            _this.temp_quantity = parseInt(input.val());
          }
          input_wrapper.addClass('updating');
          input.val(1 + parseInt(input.val()));
          variant_id = $(this).closest('.variant-id').data('variant-id');
          _this.adjusting_qty_timer = setTimeout(function() {
            var add_quantity;
            add_quantity = parseInt(input.val()) - _this.temp_quantity;
            return _this.plusQuantity(variant_id, add_quantity, function(pass, error) {
              if (pass) {
                input_wrapper.removeClass('updating');
                _this.updateTotals();
                return _this.temp_quantity = 0;
              } else {
                input.val(_this.temp_quantity);
                input_wrapper.removeClass('updating');
                _this.updateTotals();
                return _this.temp_quantity = 0;
              }
            });
          }, 500);
          return false;
        }
      });
    };

    FrameworkCart.prototype.minusQuantity = function(variant_id, quantity) {
      var _this;
      _this = this;
      return $.ajax({
        type: "POST",
        url: "/cart/change.js",
        dataType: "json",
        data: 'quantity=' + quantity + '&id=' + variant_id,
        async: false
      }).done(function(data, textStatus, jqXHR) {
        if (textStatus === 'success') {
          _this.updateTotals();
          return _this.renderOther();
        } else {
          return console.log('cart - update cart item status - ' + textStatus);
        }
      }).fail(function(jqXHR, textStatus) {
        return console.log("cart - update failed");
      });
    };

    FrameworkCart.prototype.plusQuantity = function(variant_id, quantity, callback) {
      var _this;
      _this = this;
      if (!_this.add_locked) {
        _this.add_locked = true;
        return $.ajax({
          type: "POST",
          url: "/cart/add.js",
          dataType: "json",
          data: 'quantity=' + quantity + '&id=' + variant_id
        }).done(function(data, textStatus, jqXHR) {
          callback(true);
          _this.renderOther();
          return _this.add_locked = false;
        }).fail(function(jqXHR, textStatus) {
          callback(false, jqXHR.responseJSON.description);
          return _this.add_locked = false;
        });
      }
    };

    FrameworkCart.prototype.updateTotals = function() {
      var _this;
      _this = this;
      return $.ajax({
        type: "POST",
        url: "/cart.js",
        dataType: "json"
      }).done(function(data, textStatus, jqXHR) {
        var cart, cart_total, item, j, len1, ref;
        if (textStatus === 'success') {
          cart = data;
          cart_total = {};
          cart_total.quantity = 0;
          cart_total.price = 0;
          ref = cart.items;
          for (j = 0, len1 = ref.length; j < len1; j++) {
            item = ref[j];
            cart_total.quantity += item.quantity;
            cart_total.price += item.price * item.quantity;
          }
          _this.totals.count = cart_total.quantity;
          _this.totals.price = Currency.formatMoney(cart_total.price, theme.money_format);
          _this.render_trigger.find('.count').html(_this.totals.count);
          _this.render_trigger.find('.total-price').html(_this.totals.price);
          _this.table_content.find('.total').html(_this.totals.price);
          $('.layout--header .layout--off-canvas--open.right').html(_this.totals.count);
          $('.layout--header .cart-link .count').html('(' + _this.totals.count + ')');
          if (_this.totals.count > 0) {
            _this.render_trigger.css('display', 'inline-block');
            $('.layout--header .cart-link .count').css('display', 'inline');
            $('.header--cart-count').css('display', 'inline-block');
          } else {
            _this.render_trigger.hide();
            $('.layout--header .cart-link .count').hide();
          }
          if (theme.currency_switcher_enabled) {
            _this.convertCurrency(_this.render_trigger.find('.total-price'));
            _this.convertCurrency(_this.table_content.find('.total'));
          }
          return _this.updateTotalsComplete();
        } else {
          return console.log('cart - update totals item status - ' + textStatus);
        }
      }).fail(function(jqXHR, textStatus) {
        return console.log("cart - updating totals failed");
      });
    };

    FrameworkCart.prototype.updateTotalsComplete = function() {
      var _this;
      return _this = this;
    };

    FrameworkCart.prototype.removeItemListeners = function() {
      var _this;
      _this = this;
      return _this.table_content.find('a.remove').on('click.LayoutCartModal', function() {
        var variant_id;
        variant_id = $(this).closest('.variant-id').data('variant-id');
        _this.removeItem(variant_id);
        if ($(this).closest('form').find('.variant-id').length === 1) {
          _this.root.addClass('no-items');
          $(window).trigger('resize.FrameworkModal');
        } else {
          $(this).closest('.variant-id').remove();
        }
        _this.updateTotals();
        return false;
      });
    };

    FrameworkCart.prototype.removeItem = function(variant_id) {
      var _this;
      _this = this;
      return _this.minusQuantity(variant_id, 0);
    };

    FrameworkCart.prototype.openOffCanvasListener = function() {
      var _this;
      _this = this;
      return $('.layout--off-canvas--cart--open-trigger').on('click', function() {
        $('.layout--off-canvas--right-sidebar').trigger('open');
        return false;
      });
    };

    FrameworkCart.prototype.openModalListener = function() {
      var _this;
      _this = this;
      return $('.fw--cart-modal--trigger-render').on('click', function() {
        $('.cart-link .modal--link').trigger('click');
        return false;
      });
    };

    FrameworkCart.prototype.convertCurrency = function(elems) {
      var _this;
      _this = this;
      if (theme.currency_switcher_enabled) {
        return Currency.convertAll(Currency.shop_currency, Currency.currentCurrency, elems, null, true);
      } else {
        return false;
      }
    };

    return FrameworkCart;

  })();

  theme.classes.FrameworkLoadingAnimation = (function() {
    function FrameworkLoadingAnimation(root) {
      var _this;
      this.root = root;
      _this = this;
      if (_this.root.hasClass('tiny')) {
        _this.root.spin('tiny');
      } else {
        _this.root.spin('small');
      }
    }

    return FrameworkLoadingAnimation;

  })();

  theme.classes.FrameworkMediaQueries = (function() {
    function FrameworkMediaQueries() {
      this.screenSizeListener = bind(this.screenSizeListener, this);
      this.getScreenSize = bind(this.getScreenSize, this);
      this.medium_screen = 768;
      this.large_screen = 1024;
      this.current_window = null;
      this.getScreenSize();
      this.screenSizeListener();
    }

    FrameworkMediaQueries.prototype.getScreenSize = function() {
      var _this;
      _this = this;
      if (window.matchMedia('only screen and (min-width: ' + _this.large_screen + 'px)').matches) {
        if (_this.current_window !== 'large') {
          $.event.trigger("largeWindow");
          return _this.current_window = 'large';
        }
      } else if (window.matchMedia('only screen and (min-width: ' + _this.medium_screen + 'px)').matches) {
        if (_this.current_window !== 'medium') {
          $.event.trigger("mediumWindow");
          return _this.current_window = 'medium';
        }
      } else {
        if (_this.current_window !== 'small') {
          $.event.trigger("smallWindow");
          return _this.current_window = 'small';
        }
      }
    };

    FrameworkMediaQueries.prototype.screenSizeListener = function() {
      var _this;
      _this = this;
      return $(window).resize(function() {
        return _this.getScreenSize();
      });
    };

    return FrameworkMediaQueries;

  })();

  theme.classes.FrameworkModal = (function() {
    function FrameworkModal(container1) {
      var _this;
      this.container = container1;
      _this = this;
      _this.fullscreen = _this.container.data('modal--fullscreen') ? true : false;
      if (_this.container.data('modal--custom-close')) {
        _this.custom_close_button = _this.container.data('modal--custom-close');
      } else {
        _this.custom_close_button = '';
      }
      _this.view = _this.container.data('modal--view');
      _this.links = _this.container.find('.modal--link');
      _this.content = _this.container.find('.modal--content');
      _this.spinner = null;
      _this.window = _this.createModalWindow();
      _this.spinner = _this.window.find('.fw--loading_animation');
      _this.spinner.spin('large', '#fff');
      _this.window_container = _this.window.find('.modal--container');
      _this.mask = _this.window.find('.modal--mask');
      _this.close_button = _this.window.find('.modal--close');
      _this.next_button = _this.window.find('.modal--next');
      _this.prev_button = _this.window.find('.modal--prev');
      _this.slider = null;
      _this.slides = null;
      _this.main_content_window = $('.off-canvas--main-content');
      _this.openListeners();
      _this.modal_state = 'closed';
      _this.nav_lock = false;
    }

    FrameworkModal.prototype.createModalWindow = function() {
      var _this, window, window_html;
      _this = this;
      window = null;
      if ($('.modal--window').length) {
        window = $('.modal--window');
      } else {
        window_html = '<div class="modal--window"> <div class="modal--mask"></div> <div class="fw--loading_animation" data-js-class="FrameworkLoadingAnimation"></div> <div class="modal--container"></div> <button class="modal--close">' + theme.utils.addSymbol('cross') + '</button> <button class="modal--prev">' + theme.utils.addSymbol('chevron-left') + '</button> <button class="modal--next">' + theme.utils.addSymbol('chevron-right') + '</button> </div>';
        window = $(window_html).appendTo('body');
      }
      return window;
    };

    FrameworkModal.prototype.openListeners = function() {
      var _this;
      _this = this;
      return _this.links.on('keypress.FrameworkModal, click.FrameworkModal, quick-open', function(e) {
        var clicked_item;
        if (e.type === 'keypress' && theme.utils.a11yClick(e) === false) {
          return false;
        }
        clicked_item = $(this);
        _this.links.each(function(index) {
          if ($(this).is(clicked_item)) {
            if (e.type === 'quick-open') {
              return _this.open(index, true);
            } else {
              return _this.open(index);
            }
          }
        });
        return false;
      });
    };

    FrameworkModal.prototype.open = function(index, quick_open) {
      var _this, scrolled_position;
      if (quick_open == null) {
        quick_open = false;
      }
      _this = this;
      if (_this.modal_state === 'closed') {
        _this.modal_state = 'opened';
        $('html').addClass('modal-open');
        _this.window.attr('data-modal--fullscreen', _this.fullscreen);
        _this.window.attr('data-modal--custom-close', _this.custom_close_button);
        _this.window.attr('data-modal--view', _this.view);
        _this.closeListeners();
        _this.positionListeners();
        scrolled_position = $(window).scrollTop();
        _this.main_content_window.css({
          position: 'fixed',
          top: -scrolled_position
        });
        _this.moveContentToWindow();
        if (_this.slides.length > 1) {
          _this.next_button.show();
          _this.prev_button.show();
          _this.prevListeners();
          _this.nextListeners();
        }
        _this.window.show();
        _this.window_container.show();
        _this.renderVideo(_this.slides.eq(index));
        if (quick_open) {
          _this.slides.eq(index).addClass('active');
          return _this.position();
        } else {
          _this.mask.fadeIn();
          return _this.loadModal(_this.slides.eq(index), function() {
            return setTimeout(function() {
              return _this.window_container.find('input[type="text"]').focus();
            }, 0);
          });
        }
      }
    };

    FrameworkModal.prototype.moveContentToWindow = function(index) {
      var _this, content;
      _this = this;
      content = _this.container.find('.modal--content');
      _this.window_container.append(content);
      return _this.slides = _this.window_container.find('.modal--content');
    };

    FrameworkModal.prototype.detectImageSlide = function(slide) {
      var _this;
      _this = this;
      if (slide.children().length === 1 && slide.children().first().is('img')) {
        slide.addClass('type--image');
        return slide.find('img').css({
          'max-height': $(window).height()
        });
      }
    };

    FrameworkModal.prototype.renderVideo = function(slide) {
      var _this, id, iframe, src_url, type, video;
      _this = this;
      video = slide.find('.responsive-video').first();
      src_url = video.data('video');
      type = _this.extractVideoType(src_url);
      id = _this.extractVideoId(src_url, type);
      iframe = _this.createIframe(type, id);
      if (type === 'vimeo') {
        video.addClass('vimeo');
      }
      if (type === 'kickstarter') {
        video.addClass('kickstarter');
      }
      return video.append(iframe);
    };

    FrameworkModal.prototype.extractVideoType = function(src_url) {
      var _this, matches, re;
      _this = this;
      re = /\/\/(?:www\.)?youtu(?:\.be|be\.com)\/(?:watch\?v=|embed\/)?([a-z0-9_\-]+)/i;
      matches = re.exec(src_url);
      if (matches) {
        return 'youtube';
      }
      re = /^.*(vimeo)\.com\/(?:watch\?v=)?(.*?)(?:\z|$|&)/;
      matches = re.exec(src_url);
      if (matches) {
        return 'vimeo';
      }
      re = /^.*(kickstarter)\.com/g;
      matches = re.exec(src_url);
      if (matches) {
        return 'kickstarter';
      }
      return false;
    };

    FrameworkModal.prototype.extractVideoId = function(src_url, type) {
      var _this, match, regExp;
      _this = this;
      if (type === 'youtube') {
        regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
        match = src_url.match(regExp);
        if (match && match[2].length === 11) {
          return match[2];
        }
      } else if (type === "vimeo") {
        regExp = /^.*(vimeo)\.com\/(?:watch\?v=)?(.*?)(?:\z|$|&)/;
        match = src_url.match(regExp);
        if (match) {
          return match[2];
        }
      } else if (type === "kickstarter") {
        regExp = /(?:kickstarter\.com\/projects\/)(.*)(|\?)/;
        match = src_url.match(regExp);
        if (match) {
          return match[1];
        }
      }
    };

    FrameworkModal.prototype.createIframe = function(type, id) {
      var _this;
      _this = this;
      if (type === "youtube") {
        return '<iframe  src="//www.youtube.com/embed/' + id + '?autoplay=1" frameborder="0" allowfullwidth></iframe>';
      } else if (type === "vimeo") {
        return '<iframe src="//player.vimeo.com/video/' + id + '?title=0&amp;byline=0&amp;portrait=0&amp;color=ffffff&amp;autoplay=1?" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';
      } else if (type === "kickstarter") {
        return '<iframe src="//www.kickstarter.com/projects/' + id + '/widget/video.html" frameborder="0" webkitallowfullwidth mozallowfullwidth allowfullwidth></iframe>';
      }
    };

    FrameworkModal.prototype.removeVideos = function() {
      var _this;
      _this = this;
      return _this.slides.find('.responsive-video').each(function() {
        if ($(this).data('video')) {
          return $(this).find('iframe').remove();
        }
      });
    };

    FrameworkModal.prototype.loadModal = function(modal, callback) {
      var _this;
      _this = this;
      _this.spinner.show();
      return setTimeout(function() {
        return modal.imagesLoaded(function() {
          _this.spinner.hide();
          modal.addClass('active');
          _this.position();
          if (callback) {
            callback();
          }
          return _this.nav_lock = false;
        });
      }, 300);
    };

    FrameworkModal.prototype.position = function() {
      var _this, active_modal, entire_modal_height, modal_height, modal_width;
      _this = this;
      if (_this.window_container != null) {
        active_modal = _this.content.filter('.active');
        _this.window_container.attr('style', '');
        _this.positionVideoColumns(active_modal);
        _this.detectImageSlide(active_modal);
        _this.window.removeClass('fixed');
        modal_height = active_modal.outerHeight();
        modal_width = active_modal.outerWidth();
        entire_modal_height = modal_height + parseInt(_this.window.css('padding-top')) + parseInt(_this.window.css('padding-bottom'));
        if (_this.fullscreen) {
          return;
        }
        if (active_modal.hasClass('type--image')) {
          entire_modal_height = modal_height;
        }
        if ($(window).height() >= entire_modal_height) {
          return _this.window.addClass('fixed');
        } else {
          $("html, body").animate({
            scrollTop: 0
          }, '0');
          $('body,html').on('DOMMouseScroll.FrameworkModal mousewheel.FrameworkModal touchmove.FrameworkModal', function(e) {
            if (e.which > 0 || e.type === "mousewheel" || e.type === "touchmove") {
              return $("html,body").stop();
            }
          });
          return _this.window.removeClass('fixed');
        }
      }
    };

    FrameworkModal.prototype.positionVideoColumns = function(modal) {
      var _this, column_one, column_two, height_one, height_two;
      _this = this;
      if (modal.find('.responsive-video').length > 0) {
        column_one = modal.find('.fw--blocks > div').eq(0);
        column_two = modal.find('.fw--blocks > div').eq(1);
        column_one.css({
          width: ''
        });
        column_two.css({
          width: ''
        });
        height_one = column_one.outerHeight();
        height_two = column_two.outerHeight();
        if (height_one < height_two) {
          column_one.css({
            width: '100%'
          });
          return column_two.css({
            width: '100%'
          });
        }
      }
    };

    FrameworkModal.prototype.positionListeners = function() {
      var _this;
      _this = this;
      return $(window).on('resize.FrameworkModal', function() {
        return _this.position();
      });
    };

    FrameworkModal.prototype.nextListeners = function() {
      var _this;
      _this = this;
      $(document).on('keydown.FrameworkModal', function(e) {
        if (e.keyCode === 39) {
          return _this.next();
        }
      });
      return _this.next_button.on('click.FrameworkModal', function() {
        return _this.next();
      });
    };

    FrameworkModal.prototype.next = function() {
      var _this, active_slide, index;
      _this = this;
      if (!_this.nav_lock) {
        _this.nav_lock = true;
        index = _this.slides.filter('.active').index();
        _this.slides.removeClass('active');
        _this.removeVideos();
        if ((index + 1) === _this.slides.length) {
          active_slide = _this.slides.eq(0);
        } else {
          active_slide = _this.slides.eq(index + 1);
        }
        _this.renderVideo(active_slide);
        return _this.loadModal(active_slide);
      }
    };

    FrameworkModal.prototype.prevListeners = function() {
      var _this;
      _this = this;
      $(document).on('keydown.FrameworkModal', function(e) {
        if (e.keyCode === 37) {
          return _this.prev();
        }
      });
      return _this.prev_button.on('click.FrameworkModal', function() {
        return _this.prev();
      });
    };

    FrameworkModal.prototype.prev = function() {
      var _this, active_slide, index;
      _this = this;
      if (!_this.nav_lock) {
        _this.nav_lock = true;
        index = _this.slides.filter('.active').index();
        _this.slides.removeClass('active');
        _this.removeVideos();
        if (index === 0) {
          active_slide = _this.slides.eq(_this.slides.length - 1);
        } else {
          active_slide = _this.slides.eq(index - 1);
        }
        _this.renderVideo(active_slide);
        return _this.loadModal(active_slide);
      }
    };

    FrameworkModal.prototype.closeListeners = function() {
      var _this;
      _this = this;
      _this.container.on('quick-close', function() {
        return _this.close(true);
      });
      $(document).on('keydown.FrameworkModal', function(e) {
        if (e.keyCode === 27) {
          return _this.close();
        }
      });
      _this.mask.on('click.FrameworkModal', function() {
        return _this.close();
      });
      _this.window_container.on('click.FrameworkModal', function() {
        return _this.close();
      });
      _this.content.on('click.FrameworkModal', function(e) {
        return e.stopPropagation();
      });
      return _this.close_button.on('click.FrameworkModal', function() {
        return _this.close();
      });
    };

    FrameworkModal.prototype.close = function(quick_close) {
      var _this, scrolled_position;
      if (quick_close == null) {
        quick_close = false;
      }
      _this = this;
      $('html').removeClass('modal-open');
      if (!$('.fw--loading_animation').is(':visible')) {
        _this = this;
        scrolled_position = parseInt(_this.main_content_window.css('top')) * -1;
        _this.container.trigger('modalClosed');
        _this.main_content_window.css({
          top: '0',
          position: 'relative'
        });
        $(window).scrollTop(scrolled_position);
        _this.putBackContent();
        _this.next_button.hide();
        _this.prev_button.hide();
        _this.window.hide();
        if (quick_close) {
          _this.mask.hide();
          this.window_container.empty();
          _this.modal_state = 'closed';
        } else {
          _this.mask.fadeOut(function() {
            _this.window_container.empty();
            return _this.modal_state = 'closed';
          });
        }
        return _this.removeListeners();
      }
    };

    FrameworkModal.prototype.putBackContent = function() {
      var _this;
      _this = this;
      _this.removeVideos();
      return _this.slides.removeClass('active').appendTo(_this.container);
    };

    FrameworkModal.prototype.removeListeners = function() {
      var _this;
      _this = this;
      $(document).off('keydown.FrameworkModal');
      $(window).off('resize.FrameworkModal');
      $('body,html').off('DOMMouseScroll.FrameworkModal mousewheel.FrameworkModal touchmove.FrameworkModal');
      _this.next_button.off('click.FrameworkModal');
      _this.prev_button.off('click.FrameworkModal');
      _this.close_button.off('click.FrameworkModal');
      _this.mask.off('click.FrameworkModal');
      return _this.window_container.off('click.FrameworkModal');
    };

    return FrameworkModal;

  })();

  theme.classes.FrameworkOffCanvas = (function() {
    function FrameworkOffCanvas(root) {
      var _this;
      this.root = root;
      this.touchListener = bind(this.touchListener, this);
      this.closeRight = bind(this.closeRight, this);
      this.closeLeft = bind(this.closeLeft, this);
      this.fadeInOverlay = bind(this.fadeInOverlay, this);
      this.openRight = bind(this.openRight, this);
      this.openLeft = bind(this.openLeft, this);
      this.toggle = bind(this.toggle, this);
      this.toggleListeners = bind(this.toggleListeners, this);
      this.viewPortHeightListener = bind(this.viewPortHeightListener, this);
      this.setViewPortHeight = bind(this.setViewPortHeight, this);
      this.setState = bind(this.setState, this);
      this.unload = bind(this.unload, this);
      this.load = bind(this.load, this);
      _this = this;
      _this.viewport = $('.off-canvas--viewport');
      _this.left_sidebar = $('.off-canvas--left-sidebar');
      _this.right_sidebar = $('.off-canvas--right-sidebar');
      _this.main_content = $('.off-canvas--main-content');
      _this.overlay = $('.off-canvas--overlay');
      _this.state = 'closed';
      _this.load();
    }

    FrameworkOffCanvas.prototype.load = function() {
      var _this;
      _this = this;
      _this.close = $('.off-canvas--close');
      _this.triggers = $('.off-canvas--open');
      _this.setViewPortHeight();
      _this.viewPortHeightListener();
      _this.toggleListeners();
      return _this.touchListener();
    };

    FrameworkOffCanvas.prototype.unload = function() {
      var _this;
      _this = this;
      _this.triggers.off('click');
      _this.overlay.add(_this.close).off('click');
      $(document).off('touchstart.FrameworkOffCanvas');
      return $(document).off('touchend.FrameworkOffCanvas');
    };

    FrameworkOffCanvas.prototype.setState = function(state) {
      var _this;
      _this = this;
      _this.state = state;
      return _this.root.attr('data-off-canvas--state', state);
    };

    FrameworkOffCanvas.prototype.setViewPortHeight = function() {
      var _this;
      _this = this;
      return _this.viewport.css({
        'min-height': $(window).height()
      });
    };

    FrameworkOffCanvas.prototype.viewPortHeightListener = function() {
      var _this;
      _this = this;
      return $(window).resize(function() {
        return _this.setViewPortHeight();
      });
    };

    FrameworkOffCanvas.prototype.toggleListeners = function() {
      var _this;
      _this = this;
      _this.triggers.on('click', function() {
        if ($(this).data('off-canvas--open') === 'left-sidebar') {
          _this.toggle('left-sidebar');
        } else if ($(this).data('off-canvas--open') === 'right-sidebar') {
          _this.toggle('right-sidebar');
        }
        return false;
      });
      return _this.overlay.add(_this.close).on('click', function() {
        if (_this.state === 'left-open') {
          return _this.toggle('left-sidebar');
        } else if (_this.state === 'right-open') {
          return _this.toggle('right-sidebar');
        }
      });
    };

    FrameworkOffCanvas.prototype.toggle = function(element) {
      var _this;
      _this = this;
      if (element === 'left-sidebar' && _this.state === 'closed') {
        return _this.openLeft();
      } else if (element === 'left-sidebar' && _this.state === 'left-open') {
        return _this.closeLeft();
      } else if (element === 'right-sidebar' && _this.state === 'closed') {
        return _this.openRight();
      } else if (element === 'right-sidebar' && _this.state === 'right-open') {
        return _this.closeRight();
      }
    };

    FrameworkOffCanvas.prototype.openLeft = function() {
      var _this;
      _this = this;
      _this.setState('left-open');
      _this.main_content.css({
        position: 'fixed',
        top: -($(window).scrollTop())
      });
      _this.left_sidebar.velocity({
        translateX: [0, '-100%']
      }, {
        complete: function() {
          return _this.left_sidebar.css({
            position: 'relative'
          });
        }
      });
      return _this.fadeInOverlay();
    };

    FrameworkOffCanvas.prototype.openRight = function() {
      var _this;
      _this = this;
      _this.setState('right-open');
      _this.main_content.css({
        position: 'fixed',
        top: -($(window).scrollTop())
      });
      _this.right_sidebar.velocity({
        translateX: ['-100%', 0]
      }, {
        complete: function() {
          return _this.right_sidebar.css({
            position: 'relative'
          });
        }
      });
      return _this.fadeInOverlay();
    };

    FrameworkOffCanvas.prototype.fadeInOverlay = function() {
      var _this;
      _this = this;
      _this.overlay.show();
      return _this.overlay.velocity({
        opacity: '0.3'
      });
    };

    FrameworkOffCanvas.prototype.closeLeft = function() {
      var _this, scrolled_position;
      _this = this;
      if (_this.state !== 'left-open') {
        return false;
      }
      _this.setState('closed');
      scrolled_position = parseInt(_this.main_content.css('top')) * -1;
      _this.left_sidebar.velocity({
        translateX: ['-100%', 0]
      }, {
        complete: function() {
          _this.left_sidebar.css({
            position: 'absolute'
          });
          _this.main_content.css({
            position: 'relative',
            top: 'initial'
          });
          return $(window).scrollTop(scrolled_position);
        }
      });
      return _this.overlay.velocity('fadeOut');
    };

    FrameworkOffCanvas.prototype.closeRight = function() {
      var _this, scrolled_position;
      _this = this;
      if (_this.state !== 'right-open') {
        return false;
      }
      _this.setState('closed');
      scrolled_position = parseInt(_this.main_content.css('top')) * -1;
      _this.right_sidebar.velocity({
        translateX: [0, '-100%']
      }, {
        complete: function() {
          _this.right_sidebar.css({
            position: 'absolute'
          });
          _this.main_content.css({
            position: 'relative',
            top: 'initial'
          });
          return $(window).scrollTop(scrolled_position);
        }
      });
      return _this.overlay.velocity('fadeOut');
    };

    FrameworkOffCanvas.prototype.touchListener = function() {
      var _this, position;
      _this = this;
      if (!Modernizr.touch) {
        return false;
      }
      position = {
        start: {},
        end: {}
      };
      $(document).on('touchstart.FrameworkOffCanvas', function(e) {
        position.start.x = e.originalEvent.touches[0].clientX;
        position.start.y = e.originalEvent.touches[0].clientY;
      });
      return $(document).on('touchend.FrameworkOffCanvas', function(e) {
        position.end.x = e.originalEvent.changedTouches[0].clientX;
        position.end.y = e.originalEvent.changedTouches[0].clientY;
        if (Math.abs(position.start.y - position.end.y) > 30) {
          return false;
        }
        if (position.start.x > position.end.x + 5) {
          return _this.closeLeft();
        } else if (position.start.x < position.end.x - 5) {
          return _this.closeRight();
        }
      });
    };

    return FrameworkOffCanvas;

  })();

  theme.classes.FrameworkSearch = (function() {
    function FrameworkSearch(root) {
      var _this;
      this.root = root;
      this.linkRows = bind(this.linkRows, this);
      this.hideResults = bind(this.hideResults, this);
      this.getResults = bind(this.getResults, this);
      this.clear = bind(this.clear, this);
      this.focusModalAlways = bind(this.focusModalAlways, this);
      this.listenForKeyEntered = bind(this.listenForKeyEntered, this);
      this.loadSpinners = bind(this.loadSpinners, this);
      _this = this;
      _this.toggle_link = _this.root.find('.search--toggle');
      _this.form = _this.root.find('form');
      _this.text_box = _this.root.find('.search--textbox');
      _this.loading = _this.root.find('.search--loading');
      _this.no_results = _this.root.find('.search--no-results');
      _this.results = _this.root.find('.search--results');
      _this.view = _this.root.data('search--view');
      _this.icon = _this.root.find('.search--icon');
      _this.clear_button = _this.root.find('.search--clear');
      _this.max_results = 12;
      _this.ajax_request = null;
      _this.search_term = null;
      _this.search_url = null;
      _this.close_results_timer = null;
      _this.typing_timer = null;
      _this.focusModalAlways();
      _this.listenForKeyEntered();
      _this.loadSpinners();
      _this.clear();
    }

    FrameworkSearch.prototype.loadSpinners = function() {
      var _this, spinner;
      _this = this;
      spinner = _this.loading.find('.animation');
      if (spinner.hasClass('tiny')) {
        return spinner.spin('tiny');
      } else {
        return spinner.spin('small');
      }
    };

    FrameworkSearch.prototype.listenForKeyEntered = function() {
      var _this;
      _this = this;
      return _this.text_box.attr("autocomplete", "off").on("keyup paste", function() {
        var term;
        clearTimeout(_this.typing_timer);
        term = $(this).val();
        if (term.length < 2) {
          _this.results.empty();
          _this.hideResults();
          _this.loading.hide();
          _this.icon.show();
          _this.no_results.hide();
          _this.clear('checkToggle');
          return false;
        }
        _this.results.hide();
        _this.loading.show();
        _this.icon.hide();
        _this.no_results.hide();
        _this.clear('checkToggle');
        return _this.typing_timer = setTimeout(function() {
          _this.search_url = "/search?type=product&q=" + term;
          return _this.getResults(term);
        }, 300);
      });
    };

    FrameworkSearch.prototype.focusModalAlways = function() {
      var _this;
      _this = this;
      if (_this.view === 'grid') {
        return _this.root.on('click', function() {
          return _this.text_box.focus();
        });
      }
    };

    FrameworkSearch.prototype.clear = function(event) {
      var _this;
      _this = this;
      if (event === 'checkToggle') {
        if (_this.text_box.val().length > 0) {
          return _this.clear_button.show();
        } else {
          _this.clear_button.hide();
          return _this.text_box.trigger('keyup');
        }
      } else {
        return _this.clear_button.on('click', function() {
          _this.text_box.val('');
          return _this.clear('checkToggle');
        });
      }
    };

    FrameworkSearch.prototype.getResults = function(term) {
      var _this;
      _this = this;
      _this.results.empty();
      _this.ajax_request = $.getJSON(_this.search_url + "&view=json", function(data) {
        if (data.results_count === 0) {
          _this.close_results_timer = setTimeout(function() {
            _this.hideResults();
            _this.no_results.show();
            _this.loading.hide();
            return _this.icon.show();
          }, 300);
        } else {
          clearTimeout(_this.close_results_timer);
          _this.loading.hide();
          _this.icon.show();
          _this.no_results.hide();
          _this.results.show();
          _this.results.stop(true, true).fadeIn(0);
          $.each(data.results, function(index, item) {
            var image, row;
            if (index >= _this.max_results) {
              return;
            }
            if (_this.view === 'modal') {
              image = item.image_modal;
            } else if (_this.view === 'sidebar') {
              image = item.image_sidebar;
            }
            row = $('<a class="search--item" href="' + item.url + '"> <span class="search--image"><img src="' + image + '" /></span> <span class="search--title">' + item.title + '</span> </a>');
            _this.results.append(row);
            if (_this.view === 'modal') {
              $(window).trigger('resize.FrameworkModal');
              setTimeout(function() {
                return $(window).trigger('resize.FrameworkModal');
              }, 100);
            }
          });
          $.event.trigger("ie8ClearingFix");
          if (data.results_count > _this.max_results) {
            _this.results.append('<div class="search--view-more"> <a href="' + _this.search_url + '">' + theme.translations.general_search_see_all_results + ' ("' + data.results_count + '") </a> </div>');
          }
        }
      }).fail(function() {
        return console.log("error retrieving search.json results");
      });
    };

    FrameworkSearch.prototype.hideResults = function() {
      var _this;
      _this = this;
      return _this.results.fadeOut(0);
    };

    FrameworkSearch.prototype.linkRows = function() {
      var _this;
      _this = this;
      return _this.results.find("td").on('click', function() {
        var link;
        link = $(this).parent().attr('data-link');
        if (link.length) {
          return window.location = link;
        }
      });
    };

    return FrameworkSearch;

  })();

  theme.classes.Sections = (function() {
    function Sections() {
      this.unload = bind(this.unload, this);
      this.deselectBlock = bind(this.deselectBlock, this);
      this.selectBlock = bind(this.selectBlock, this);
      this.deselectSection = bind(this.deselectSection, this);
      this.selectSection = bind(this.selectSection, this);
      this.load = bind(this.load, this);
      this.getActiveBlock = bind(this.getActiveBlock, this);
      this.getActiveSection = bind(this.getActiveSection, this);
      this.listeners = bind(this.listeners, this);
      var _this;
      _this = this;
      _this.listeners();
    }

    Sections.prototype.listeners = function() {
      var _this;
      _this = this;
      _this.load();
      _this.unload();
      _this.selectSection();
      _this.deselectSection();
      _this.selectBlock();
      return _this.deselectBlock();
    };

    Sections.prototype.getActiveSection = function(evt) {
      var _this, active_section;
      _this = this;
      active_section = $(evt.target).find('[data-section-id]');
      return active_section;
    };

    Sections.prototype.getActiveBlock = function(evt) {
      var _this, active_block;
      _this = this;
      active_block = $(evt.target);
      return active_block;
    };

    Sections.prototype.load = function(evt) {
      var _this;
      _this = this;
      return $(document).on('shopify:section:load', function(evt) {
        var active_section;
        theme.utils.loadJsClasses();
        active_section = _this.getActiveSection(evt);
        active_section.triggerHandler("theme:section:load");
        return active_section.find('[data-js-class]').each(function() {
          return $(this).triggerHandler("theme:section:load");
        });
      });
    };

    Sections.prototype.selectSection = function() {
      var _this;
      _this = this;
      return $(document).on('shopify:section:select', function(evt) {
        var active_section;
        active_section = _this.getActiveSection(evt);
        return active_section.triggerHandler("theme:section:select");
      });
    };

    Sections.prototype.deselectSection = function() {
      var _this;
      _this = this;
      return $(document).on('shopify:section:deselect', function(evt) {
        var active_section;
        active_section = _this.getActiveSection(evt);
        return active_section.triggerHandler('theme:section:deselect');
      });
    };

    Sections.prototype.selectBlock = function() {
      var _this;
      _this = this;
      return $(document).on('shopify:block:select', function(evt) {
        var active_block;
        active_block = _this.getActiveBlock(evt);
        return active_block.triggerHandler('theme:block:select');
      });
    };

    Sections.prototype.deselectBlock = function() {
      var _this;
      _this = this;
      return $(document).on('shopify:block:deselect', function(evt) {
        var active_block;
        active_block = _this.getActiveBlock(evt);
        return active_block.triggerHandler('theme:block:deselect');
      });
    };

    Sections.prototype.unload = function(evt) {
      var _this;
      _this = this;
      return $(document).on('shopify:section:unload', function(evt) {
        var active_section;
        active_section = _this.getActiveSection(evt);
        active_section.triggerHandler("theme:section:unload");
        return active_section.find('[data-js-loaded="true"]').each(function() {
          return $(this).triggerHandler("theme:section:unload");
        });
      });
    };

    return Sections;

  })();

  theme.classes.FrameworkSlider = (function() {
    function FrameworkSlider(container1) {
      this.container = container1;
      this.eventListeners = bind(this.eventListeners, this);
      this.alignPlayButton = bind(this.alignPlayButton, this);
      this.updateContextMenu = bind(this.updateContextMenu, this);
      this.autoplay = bind(this.autoplay, this);
      this.formatPaginationNumbers = bind(this.formatPaginationNumbers, this);
      this.getActiveIndex = bind(this.getActiveIndex, this);
      this.createSlider = bind(this.createSlider, this);
      this.autoplay_enabled = this.container.data('autoplay') ? true : false;
      this.navigation = this.container.data('navigation') ? true : false;
      this.pagination_numbers = this.container.data('pagination-numbers') ? true : false;
      this.autoplay_frequency = 3000;
      this.slide_length = this.container.children().length;
      this.active_index = 0;
      this.news_panel = this.container.data('news-panel') ? true : false;
      this.createSlider();
      this.eventListeners();
      this.owl = this.container.data('owlCarousel');
    }

    FrameworkSlider.prototype.createSlider = function() {
      var _this, slider;
      _this = this;
      slider = this.container.owlCarousel({
        singleItem: true,
        navigation: _this.navigation,
        navigationText: false,
        pagination: _this.container.data('pagination') ? true : false,
        paginationNumbers: _this.pagination_numbers,
        scrollPerPageNav: true,
        slideSpeed: 800,
        autoHeight: false,
        autoPlay: _this.autoplay(),
        afterInit: function() {},
        afterAction: function() {
          _this.alignPlayButton();
          _this.active_index = _this.getActiveIndex();
          _this.updateContextMenu(_this.active_index);
          return _this.formatPaginationNumbers();
        }
      });
      if (_this.navigation) {
        slider.find('.owl-prev').html(theme.utils.addSymbol('chevron-left'));
        slider.find('.owl-next').html(theme.utils.addSymbol('chevron-right'));
      }
      return slider;
    };

    FrameworkSlider.prototype.getActiveIndex = function() {
      return this.container.find('.owl-pagination .owl-page.active').index();
    };

    FrameworkSlider.prototype.formatPaginationNumbers = function() {
      return this.container.find('.owl-page.active .owl-numbers').text((this.active_index + 1) + "/" + this.slide_length);
    };

    FrameworkSlider.prototype.autoplay = function() {
      if (this.autoplay_enabled) {
        return this.autoplay_frequency;
      }
      return false;
    };

    FrameworkSlider.prototype.updateContextMenu = function(index) {
      var context_navigation, type_class;
      if (this.news_panel) {
        type_class = '.' + this.container.find('.slide').eq(index).data('feed-type');
        context_navigation = this.container.closest('.template--index--news').find('.context-navigation');
        context_navigation.find('.item').hide();
        return context_navigation.find(type_class).show();
      }
    };

    FrameworkSlider.prototype.alignPlayButton = function() {
      var play_button, slide;
      slide = this.container.find('.owl-item').eq(this.active_index);
      play_button = slide.find('.play-button');
      if (play_button.length === 0) {
        return;
      }
      play_button.css('visibility', 'hidden');
      if (PAGE.hasClass('transparent-menu') && $('.main-header').css('position') === 'absolute') {
        slide.find('img').first().imagesLoaded(function() {
          var play_button_height, slide_height, video_offset;
          slide_height = slide.outerHeight();
          play_button_height = play_button.outerHeight();
          video_offset = (slide_height - play_button_height) / 2;
          return play_button.css({
            'margin-top': 0,
            'top': video_offset
          });
        });
      } else {
        play_button.css({
          'margin-top': '-40px',
          'top': '50%'
        });
      }
      return play_button.css('visibility', 'visible');
    };

    FrameworkSlider.prototype.eventListeners = function() {
      var _this;
      _this = this;
      this.container.find(".play-button").on('click', function() {
        var video_modal;
        video_modal = new VideoModal($(this).closest('.video'));
        video_modal.open();
        _this.owl.stop();
        return false;
      });
      return this.container.find('.owl-pagination .owl-page, .skip-to-next').on('click', function() {
        _this.owl.next();
        return false;
      });
    };

    return FrameworkSlider;

  })();

  theme.classes.FrameworkStickyColumn = (function() {
    function FrameworkStickyColumn(container1, column_a, column_b, mq) {
      this.container = container1;
      this.column_a = column_a;
      this.column_b = column_b;
      this.mq = mq;
      this.Listeners = bind(this.Listeners, this);
      this.setColumnPosition = bind(this.setColumnPosition, this);
      this.getAlignment = bind(this.getAlignment, this);
      this.getState = bind(this.getState, this);
      this.resetLargerColumn = bind(this.resetLargerColumn, this);
      this.getSmallerColumn = bind(this.getSmallerColumn, this);
      this.heightsHaveChanged = bind(this.heightsHaveChanged, this);
      this.setHeights = bind(this.setHeights, this);
      this.loadColumns = bind(this.loadColumns, this);
      if (Modernizr.touch) {
        return false;
      }
      this.current_state = 'auto';
      this.column_a_height = 0;
      this.column_b_height = 0;
      this.loadColumns();
    }

    FrameworkStickyColumn.prototype.loadColumns = function() {
      var _this;
      _this = this;
      return _this.container.imagesLoaded(function() {
        _this.Listeners();
        return _this.setColumnPosition();
      });
    };

    FrameworkStickyColumn.prototype.setHeights = function() {
      this.column_a_height = this.column_a.outerHeight();
      return this.column_b_height = this.column_b.outerHeight();
    };

    FrameworkStickyColumn.prototype.heightsHaveChanged = function() {
      if (this.column_a.outerHeight() !== this.column_a_height) {
        this.setHeights();
        return true;
      }
      if (this.column_b.outerHeight() !== this.column_b_height) {
        this.setHeights();
        return true;
      }
      return false;
    };

    FrameworkStickyColumn.prototype.getSmallerColumn = function() {
      if (this.column_a_height < this.column_b_height) {
        return this.column_a;
      } else {
        return this.column_b;
      }
    };

    FrameworkStickyColumn.prototype.resetLargerColumn = function() {
      if (this.column_a_height > this.column_b_height) {
        return this.column_a.css({
          'position': 'relative',
          'top': 'auto',
          'bottom': 'auto'
        });
      } else {
        return this.column_b.css({
          'position': 'relative',
          'top': 'auto',
          'bottom': 'auto'
        });
      }
    };

    FrameworkStickyColumn.prototype.getState = function(scroll_pos, window_height, column) {
      var column_height, height_for_bottom, overflowing_column, state;
      state = 'auto';
      if (this.mq.current_window === 'small') {
        return 'auto';
      }
      column_height = column.outerHeight();
      if (window_height > column_height) {
        overflowing_column = true;
      }
      if (scroll_pos < this.container.offset().top) {
        state = 'auto';
      }
      if (overflowing_column) {
        height_for_bottom = column_height;
      } else {
        height_for_bottom = window_height;
      }
      if ((scroll_pos + height_for_bottom) > (this.container.offset().top + this.container.outerHeight())) {
        state = 'absolute-bottom';
      } else if (scroll_pos > this.container.offset().top && overflowing_column) {
        state = 'fixed-top';
      } else if (window_height < column_height && (scroll_pos + window_height) > (this.container.offset().top + column.outerHeight())) {
        state = 'fixed-bottom';
      }
      return state;
    };

    FrameworkStickyColumn.prototype.getAlignment = function(column) {
      if (column.hasClass('column-a')) {
        return 'left';
      } else if (column.hasClass('column-b')) {
        return 'right';
      }
    };

    FrameworkStickyColumn.prototype.setColumnPosition = function() {
      var _this, align, column, state;
      _this = this;
      _this.setHeights();
      column = _this.getSmallerColumn();
      state = _this.getState($(window).scrollTop(), $(window).height(), column);
      align = _this.getAlignment(column);
      if (state === 'auto' && this.current_state !== 'auto') {
        this.current_state = 'auto';
        column.css({
          'position': 'relative',
          'top': 'auto',
          'bottom': 'auto'
        });
      } else if (state === 'fixed-bottom' && this.current_state !== 'fixed-bottom') {
        this.current_state = 'fixed-bottom';
        column.css({
          'position': 'fixed',
          'top': 'auto',
          'bottom': 0
        });
      } else if (state === 'fixed-top' && this.current_state !== 'fixed-top') {
        this.current_state = 'fixed-top';
        column.css({
          'position': 'fixed',
          'top': 0,
          'bottom': 'auto'
        });
      } else if (state === 'absolute-bottom' && this.current_state !== 'absolute-bottom') {
        this.current_state = 'absolute-bottom';
        column.css({
          'position': 'absolute',
          'top': 'auto',
          'bottom': 0
        });
      }
      if (align === 'right') {
        return column.css({
          'right': 0
        });
      }
    };

    FrameworkStickyColumn.prototype.Listeners = function() {
      var _this;
      _this = this;
      $(window).scroll(function() {
        return _this.setColumnPosition();
      });
      setInterval(function() {
        if (_this.heightsHaveChanged()) {
          _this.resetLargerColumn();
          return _this.setColumnPosition();
        }
      }, 250);
      return $(window).resize(function() {
        _this.resetLargerColumn();
        return _this.setColumnPosition();
      });
    };

    return FrameworkStickyColumn;

  })();

  theme.classes.FrameworkXMenu = (function() {
    function FrameworkXMenu(root) {
      var _this;
      this.root = root;
      this.slideUp = bind(this.slideUp, this);
      this.slideDown = bind(this.slideDown, this);
      this.arrangeMegaNav = bind(this.arrangeMegaNav, this);
      this.resizeListeners = bind(this.resizeListeners, this);
      this.checkOverlap = bind(this.checkOverlap, this);
      this.listeners = bind(this.listeners, this);
      this.load = bind(this.load, this);
      _this = this;
      _this.debugging = false;
      _this.state = 'closed';
      _this.parent_links = _this.root.find('.x-menu--level-1--link > a');
      _this.sub_menu_links = _this.root.find('.x-menu--level-1--link:not([data-x-menu--depth="1"]) > a');
      _this.sub_menu_items = _this.sub_menu_links.parent().find('ul a');
      _this.parents_with_sub_menu = _this.sub_menu_links.parent();
      _this.overlap_parent = _this.root.data('x-menu--overlap-parent');
      _this.load();
    }

    FrameworkXMenu.prototype.load = function() {
      var _this;
      _this = this;
      _this.arrangeMegaNav();
      _this.listeners();
      _this.checkOverlap();
      return _this.resizeListeners();
    };

    FrameworkXMenu.prototype.listeners = function() {
      var _this;
      _this = this;
      _this.parents_with_sub_menu.on('mouseenter.XMenu', function(e) {
        return _this.slideDown($(this).find('> a'));
      });
      _this.parents_with_sub_menu.on('mouseleave.XMenu', function() {
        return _this.slideUp();
      });
      _this.parent_links.on('focus', function(e) {
        return _this.slideUp();
      });
      _this.sub_menu_links.on('focus', function(e) {
        return _this.slideDown($(this));
      });
      return _this.sub_menu_links.on('touchstart.XMenu', function(e) {
        e.preventDefault();
        if ($(this).parent().attr('data-x-menu--open') === 'true') {
          return _this.slideUp();
        } else {
          return _this.slideDown($(this));
        }
      });
    };

    FrameworkXMenu.prototype.checkOverlap = function() {
      var _this, center_index, center_item, center_item_left_edge, center_item_right_edge, center_item_width, container, container_width, first_center_child, last_center_child, left_break_point, left_item, right_item, right_item_edge;
      _this = this;
      if (Modernizr.touch && theme.utils.mqs.current_window !== 'large') {
        _this.root.attr('data-x-menu--overlap', 'true');
        return false;
      }
      _this.root.attr('data-x-menu--overlap', 'false');
      center_item = _this.root;
      if (_this.overlap_parent === 1) {
        center_item = center_item.parent();
      } else if (_this.overlap_parent === 2) {
        center_item = center_item.parent().parent();
      }
      container = center_item.parent();
      center_index = center_item.index();
      left_item = false;
      if (center_index > 1) {
        left_item = container.children().eq(center_index - 1);
      }
      right_item = false;
      if (center_index + 1 < container.children().length) {
        right_item = container.children().eq(center_index + 1);
      }
      container_width = container.width();
      center_item_width = _this.root.outerWidth();
      if (left_item) {
        first_center_child = center_item.find('> :first-child');
        center_item_left_edge = first_center_child.offset().left - 1;
        left_break_point = (container_width - center_item_width) / 2;
        if (left_edge >= center_item_left_edge) {
          _this.root.attr('data-x-menu--overlap', 'true');
        }
      }
      if (right_item) {
        last_center_child = center_item.find('> :last-child');
        center_item_right_edge = last_center_child.outerWidth() + last_center_child.offset().left + 1;
        right_item_edge = right_item.offset().left;
        if (center_item_right_edge >= right_item_edge) {
          return _this.root.attr('data-x-menu--overlap', 'true');
        }
      }
    };

    FrameworkXMenu.prototype.resizeListeners = function() {
      var _this;
      _this = this;
      return $(window).on('resize.XMenu', _this.debounce(100, function() {
        return _this.checkOverlap();
      }));
    };

    FrameworkXMenu.prototype.debounce = function(delay, fn) {
      var timeoutId;
      timeoutId = void 0;
      return function() {
        if (timeoutId) {
          clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(fn.bind(this), delay, arguments);
      };
    };

    FrameworkXMenu.prototype.arrangeMegaNav = function() {
      var _this, mega_navs;
      _this = this;
      if (_this.parents_with_sub_menu.length === 0) {
        return false;
      }
      mega_navs = _this.root.find('[data-x-menu--depth="3"] .x-menu--level-2--container');
      return mega_navs.each(function() {
        var container, single_parents, single_parents_container;
        container = $(this);
        single_parents = container.find('[data-x-menu--single-parent="true"]');
        if (single_parents.length > 0) {
          single_parents_container = $('<div class="x-menu--single-parents"></div>').insertAfter(container.find('.x-menu--bg'));
          return single_parents_container.append('<ul>').find('ul').append(single_parents);
        }
      });
    };

    FrameworkXMenu.prototype.slideDown = function(link, delay) {
      var _this, display_type, link_wrapper, menu_height, sub_menu;
      if (delay == null) {
        delay = false;
      }
      _this = this;
      clearTimeout(_this.timer);
      link_wrapper = link.parent();
      if (link_wrapper.attr('data-x-menu--open') === 'true') {
        return false;
      }
      _this.slideUp(false);
      if (delay && delay !== 'complete') {
        _this.timer = setTimeout(function() {
          return _this.slideDown(link, 'complete');
        }, delay);
      } else {
        link.closest('.x-menu--level-1--link').find('.fw--icon--expand-less').show();
        link.closest('.x-menu--level-1--link').find('.fw--icon--expand-more').hide();
        link.closest('.x-menu--level-1--link').find('.fw--icon--minus').show();
        link.closest('.x-menu--level-1--link').find('.fw--icon--plus').hide();
        _this.state = 'open';
        link_wrapper.attr('data-x-menu--open', 'true');
        link.attr('aria-expanded', 'true');
        sub_menu = link.closest('.x-menu--level-1--link').find('.x-menu--level-2--container');
        display_type = 'block';
        if (link_wrapper.attr('data-x-menu--depth') === "3") {
          display_type = 'flex';
        }
        if (!Modernizr.flexbox || (navigator.userAgent.match(/MSIE 10/))) {
          display_type = 'block';
          $('.x-menu--single-parents, .x-menu--level-2--list').css('float', 'left');
        }
        sub_menu.velocity('stop');
        sub_menu.css({
          height: 'auto',
          display: display_type
        });
        menu_height = sub_menu.outerHeight();
        sub_menu.css({
          height: 0,
          opacity: 1
        });
        sub_menu.find('.x-menu--level-2--list').css({
          display: display_type
        });
        sub_menu.velocity({
          height: [menu_height, 0]
        }, {
          queue: false,
          duration: 600,
          easing: "easeOutExpo"
        });
      }
    };

    FrameworkXMenu.prototype.slideUp = function(delay) {
      var _this, link, link_wrapper, sub_menu;
      if (delay == null) {
        delay = 300;
      }
      _this = this;
      if (_this.debugging) {
        return false;
      }
      link_wrapper = _this.parents_with_sub_menu.filter('[data-x-menu--open="true"]');
      link = link_wrapper.find('> a');
      if (link_wrapper.attr('data-x-menu--open') === 'false') {
        return false;
      }
      if (delay) {
        return _this.timer = setTimeout(function() {
          return _this.slideUp(false);
        }, delay);
      } else {
        link.closest('.x-menu--level-1--link').find('.fw--icon--expand-less').hide();
        link.closest('.x-menu--level-1--link').find('.fw--icon--expand-more').show();
        link.closest('.x-menu--level-1--link').find('.fw--icon--minus').hide();
        link.closest('.x-menu--level-1--link').find('.fw--icon--plus').show();
        sub_menu = link.closest('.x-menu--level-1--link').find('.x-menu--level-2--container');
        link_wrapper.attr('data-x-menu--open', 'false');
        link.attr('aria-expanded', 'false');
        _this.state = 'closed';
        return sub_menu.velocity({
          opacity: 0
        }, {
          duration: 200,
          display: 'none'
        });
      }
    };

    return FrameworkXMenu;

  })();

  theme.classes.FrameworkYMenu = (function() {
    function FrameworkYMenu(root) {
      var _this;
      this.root = root;
      this.slideRight = bind(this.slideRight, this);
      this.slideLeft = bind(this.slideLeft, this);
      this.adjustHeight = bind(this.adjustHeight, this);
      this.listeners = bind(this.listeners, this);
      this.load = bind(this.load, this);
      _this = this;
      _this.state = 'closed';
      _this.sub_menu_links = _this.root.find('.fw--icon--chevron-right').parent();
      _this.back_links = _this.root.find('.y-menu--back-link a');
      _this.timer = null;
      _this.load();
    }

    FrameworkYMenu.prototype.load = function() {
      var _this;
      _this = this;
      return _this.listeners();
    };

    FrameworkYMenu.prototype.listeners = function() {
      var _this;
      _this = this;
      _this.sub_menu_links.on('click', function(e) {
        _this.slideLeft($(this));
        return false;
      });
      return _this.back_links.on('click', function(e) {
        _this.slideRight($(this));
        return false;
      });
    };

    FrameworkYMenu.prototype.adjustHeight = function(open_list) {
      var _this, current_height, open_list_height;
      _this = this;
      _this.root.css({
        height: 'auto'
      });
      current_height = _this.root.outerHeight();
      open_list_height = open_list.outerHeight();
      if (open_list.css('position') === 'absolute') {
        open_list.css('position', 'relative');
        open_list_height = open_list.outerHeight();
        open_list.css('position', 'absolute');
      }
      return _this.root.velocity({
        height: open_list_height
      });
    };

    FrameworkYMenu.prototype.slideLeft = function(link) {
      var _this, sub_menu;
      _this = this;
      sub_menu = link.closest('li').find('ul').first();
      sub_menu.css({
        display: 'block'
      });
      _this.adjustHeight(sub_menu);
      return sub_menu.velocity({
        translateX: ['-100%', 0]
      });
    };

    FrameworkYMenu.prototype.slideRight = function(link) {
      var _this, container, parent_container;
      _this = this;
      container = link.closest('ul');
      parent_container = container.parent().closest('ul');
      _this.adjustHeight(parent_container);
      return container.velocity({
        translateX: [0, '-100%']
      });
    };

    return FrameworkYMenu;

  })();

  Accordion = (function() {
    function Accordion() {
      $('.accordion.headings').each(function() {
        return $(this).add($(this).next('.accordion.content')).wrapAll("<div class='accordion-wrapper'/>");
      });
      $('.accordion.headings li').wrapInner('<div class="trigger"></div>');
      $('.accordion.headings li .trigger').append('<div class="bg"></div>');
      $('.accordion-wrapper').each(function() {
        var accordion_content, accordion_heading;
        accordion_heading = $(this).find('.accordion.headings > li');
        accordion_content = $(this).find('.accordion.content > li');
        accordion_heading.first().addClass('active');
        accordion_content.each(function(index) {
          var content;
          content = $('<div class="content">' + $(this).html() + '</div>');
          return content.appendTo(accordion_heading.eq(index));
        });
        accordion_content.remove();
        $(this).find('.content').first().show();
        return $(this).find('.trigger').on("click", function() {
          var panels, this_panel;
          panels = $(this).closest(".accordion").find('.content');
          this_panel = $(this).closest("li").find(".content");
          panels.not(this_panel).slideUp(200);
          this_panel.slideDown(200, function() {
            if (general_scroll_to_active_item) {
              return $('html, body').animate({
                scrollTop: this_panel.offset().top - 100
              });
            }
          });
          $(this).closest(".accordion").find("li").removeClass("active");
          return $(this).closest("li").addClass("active");
        });
      });
    }

    return Accordion;

  })();

  Footer = (function() {
    function Footer(root) {
      var _this;
      this.root = root;
      this.stickyFooter = bind(this.stickyFooter, this);
      this.addListeners = bind(this.addListeners, this);
      this.load = bind(this.load, this);
      _this = this;
      _this.load();
    }

    Footer.prototype.load = function() {
      var _this;
      _this = this;
      _this.addListeners();
      return _this.stickyFooter();
    };

    Footer.prototype.addListeners = function() {
      var _this;
      _this = this;
      return WINDOW.on('resize', function() {
        return _this.stickyFooter();
      });
    };

    Footer.prototype.stickyFooter = function() {
      var total_content_height;
      total_content_height = HEADER.outerHeight() + $('.main-content').outerHeight() + $('.main-footer').outerHeight();
      if (WINDOW.outerHeight() > total_content_height) {
        return $('.main-content').css({
          'min-height': WINDOW.outerHeight() - $('.main-header').outerHeight() - $('.main-footer').outerHeight()
        });
      }
    };

    return Footer;

  })();

  FullscreenSlider = (function() {
    function FullscreenSlider(slider_element) {
      this.eventListeners = bind(this.eventListeners, this);
      this.alignPlayButton = bind(this.alignPlayButton, this);
      this.alignCaption = bind(this.alignCaption, this);
      this.isFirstSlider = bind(this.isFirstSlider, this);
      this.getActiveIndex = bind(this.getActiveIndex, this);
      this.autoplay = bind(this.autoplay, this);
      this.createSlider = bind(this.createSlider, this);
      var slide_parent;
      this.el = slider_element;
      slide_parent = this.el.closest('.slider');
      this.autoplay_enabled = slide_parent.data('autoplay');
      if (slide_parent.find('.slide').length < 2) {
        this.autoplay_enabled = false;
      }
      this.autoplay_frequency = slide_parent.data('rotateFrequency');
      this.transition_style = slide_parent.data('transitionStyle');
      this.createSlider();
      this.owl = $(".owl-carousel").data('owlCarousel');
    }

    FullscreenSlider.prototype.createSlider = function() {
      var slider, slider_options;
      slider = this;
      slider_options = {
        singleItem: true,
        navigation: false,
        paginationNumbers: false,
        scrollPerPageNav: true,
        slideSpeed: 800,
        pagination: true,
        autoHeight: true,
        autoPlay: slider.autoplay(),
        afterInit: function() {
          return slider.eventListeners();
        },
        afterAction: function() {
          slider.alignCaption();
          return slider.alignPlayButton();
        }
      };
      if (this.transition_style !== 'default') {
        slider_options['transitionStyle'] = this.transition_style;
      }
      return slider.el.owlCarousel(slider_options);
    };

    FullscreenSlider.prototype.autoplay = function() {
      if (this.autoplay_enabled) {
        return this.autoplay_frequency;
      }
      return false;
    };

    FullscreenSlider.prototype.getActiveIndex = function() {
      return this.el.find('.owl-pagination .owl-page.active').index();
    };

    FullscreenSlider.prototype.isFirstSlider = function() {
      var current_section_id, first_section, first_section_id;
      first_section = $('.index-sections').children('div:first');
      first_section_id = first_section.find('.slider').data('sectionId');
      current_section_id = this.el.closest('.slider').data('sectionId');
      if (first_section.hasClass('section--slideshow')) {
        return current_section_id === first_section_id;
      }
      return false;
    };

    FullscreenSlider.prototype.alignCaption = function() {
      var caption, caption_height, caption_width, slide, slide_padding, top_offset;
      slide = this.el.find('.owl-item').eq(this.getActiveIndex()).find('.caption-wrapper');
      caption = slide.find('.caption');
      caption.css('visibility', 'hidden');
      caption_height = caption.outerHeight();
      caption_width = caption.outerWidth();
      slide_padding = 30;
      if (theme.utils.transparentMenuIsEnabled() && this.isFirstSlider() === true) {
        top_offset = $('.main-header').outerHeight();
      } else {
        top_offset = 0;
      }
      return slide.find('img').first().imagesLoaded(function() {
        var left_offset, middle_top, slide_height, slide_width;
        slide_height = slide.outerHeight();
        slide_width = slide.outerWidth();
        if (slide_height >= 400) {
          if (caption.hasClass('top')) {
            caption.css('top', 100);
          } else if (caption.hasClass('bottom')) {
            caption.css('bottom', 100);
          } else if (caption.hasClass('middle')) {
            middle_top = top_offset + (slide_height - top_offset - caption_height) / 2;
            caption.css('top', middle_top);
          }
          if (caption.hasClass('center')) {
            left_offset = (slide_width - caption_width) / 2;
            caption.css('left', left_offset);
          }
          return caption.css('visibility', 'visible');
        }
        if (slide_height > 250 && slide_height < 400) {
          if (caption.hasClass('top')) {
            caption.css('top', top_offset + slide_padding + 20);
          } else if (caption.hasClass('bottom')) {
            caption.css('bottom', top_offset + slide_padding + 20);
          } else if (caption.hasClass('middle')) {
            middle_top = top_offset + (slide_height - top_offset - caption_height) / 2;
            caption.css('top', middle_top);
          }
          if (caption.hasClass('center')) {
            left_offset = (slide_width - caption_width) / 2;
            caption.css('left', left_offset);
          }
          return caption.css('visibility', 'visible');
        }

        if(slide_height < 250) {
          if (caption.hasClass('top')) {
            caption.css('top', top_offset + slide_padding);
          } else if (caption.hasClass('middle')) {
            middle_top = top_offset + (slide_height - top_offset - caption_height) / 2;
            caption.css('top', middle_top);
          }
          if (caption.hasClass('center')) {
            left_offset = (slide_width - caption_width) / 2;
            caption.css('left', left_offset);
          }
          return caption.css('visibility', 'visible');
        }
      });
    };

    FullscreenSlider.prototype.alignPlayButton = function() {
      var play_button, slide;
      slide = this.el.find('.owl-item').eq(this.getActiveIndex());
      play_button = slide.find('.play-button');
      play_button.css('visibility', 'hidden');
      if (theme.utils.transparentMenuIsEnabled() && $('.main-header').css('position') === 'absolute') {
        slide.find('img').first().imagesLoaded(function() {
          var play_button_height, slide_height, video_offset;
          slide_height = slide.outerHeight();
          play_button_height = play_button.outerHeight();
          video_offset = (slide_height - play_button_height) / 2;
          return play_button.css({
            'margin-top': 0,
            'top': video_offset
          });
        });
      } else {
        play_button.css({
          'margin-top': '-40px',
          'top': '50%'
        });
      }
      return play_button.css('visibility', 'visible');
    };

    FullscreenSlider.prototype.eventListeners = function() {
      var slider;
      slider = this;
      this.el.find(".play-button").on('click', function() {
        var video_modal;
        video_modal = new VideoModal($(this).closest('.video'));
        video_modal.open();
        slider.owl.stop();
        return false;
      });
      this.el.find('.owl-pagination .owl-page').on('click', function() {
        return slider.owl.stop();
      });
      return DOC.on('header.transparentMenuIsUpdated', slider.alignCaption);
    };

    return FullscreenSlider;

  })();

  theme.classes.Header = (function() {
    function Header(root) {
      var _this;
      this.root = root;
      this.moveYMenu = bind(this.moveYMenu, this);
      this.sectionListeners = bind(this.sectionListeners, this);
      this.load = bind(this.load, this);
      _this = this;
      _this.load();
    }

    Header.prototype.load = function() {
      var _this;
      _this = this;
      _this.searchAndAccount();
      _this.sectionListeners();
      return _this.moveYMenu();
    };

    Header.prototype.sectionListeners = function() {
      var _this;
      _this = this;
      return _this.root.on('theme:section:load', function() {
        theme.partials.FrameworkOffCanvas.unload();
        return theme.partials.FrameworkOffCanvas.load();
      });
    };

    Header.prototype.moveYMenu = function() {
      var _this;
      _this = this;
      $('.mobile-nav--menu').empty();
      return $('.y-menu').appendTo('.mobile-nav--menu');
    };

    Header.prototype.searchAndAccount = function() {
      var _this;
      _this = this;
      $('.searchbar-open').click(function() {
        $(this).closest('.menu').fadeOut(100, function() {
          $('.main-header .searchbar-container').fadeIn(200);
          return $('.main-header .searchbar-container .search-box').focus();
        });
        return false;
      });
      $('.searchbar-close').click(function() {
        $('.main-header .searchbar-container').fadeOut(100, function() {
          return $('.search-account .menu').fadeIn(200);
        });
        return false;
      });
      $('.account-open').click(function() {
        $(this).closest('.menu').fadeOut(100, function() {
          return $('.account-container').fadeIn(200);
        });
        return false;
      });
      return $('.account-close').click(function() {
        $('.account-container').fadeOut(100, function() {
          return $('.search-account .menu').fadeIn(200);
        });
        return false;
      });
    };

    return Header;

  })();

  HorizontalTabs = (function() {
    function HorizontalTabs() {
      $('.tabs-horizontal.headings').each(function() {
        return $(this).add($(this).next('.tabs.content')).wrapAll("<div class='tabs-wrapper horizontal'/>");
      });
      $('.tabs-horizontal.headings li').wrapInner('<div class="trigger"></div>');
      $('.tabs-horizontal.headings li .trigger').append('<div class="bg"></div>');
      $('.tabs-wrapper.horizontal').each(function() {
        var tab_content, tab_headings;
        tab_headings = $(this).find('.headings > li');
        tab_content = $(this).find('.tabs.content > li');
        tab_content.first().addClass('active');
        tab_headings.first().addClass('active');
        return tab_headings.on('click', function() {
          tab_headings.removeClass('active');
          tab_content.removeClass('active');
          $(this).addClass('active');
          return tab_content.eq($(this).index()).addClass('active');
        });
      });
    }

    return HorizontalTabs;

  })();

  InstagramFeed = (function() {
    function InstagramFeed(root) {
      var _this;
      this.root = root;
      this.load = bind(this.load, this);
      _this = this;
      _this.load();
    }

    InstagramFeed.prototype.load = function() {
      var _this, access_token, getImages, items_to_load;
      _this = this;
      access_token = _this.root.data('instagramAccessToken');
      if ($('.instagram-widget').length < 1) {
        return false;
      } else if (access_token.length < 1) {
        return false;
      }
      items_to_load = 6;
      if (!$('.twitter-widget').length && !$('.blog-widget').length) {
        items_to_load += 6;
        $('.instagram-widget .items').addClass('wide');
      }
      return getImages = (function() {
        return $.ajax({
          dataType: "jsonp",
          url: 'https://api.instagram.com/v1/users/self/media/recent/?access_token=' + access_token + '&count=' + items_to_load,
          success: function(response) {
            var data, i, img_src, j, ref, results;
            if (response.meta.code === 200) {
              data = response.data;
              results = [];
              for (i = j = 0, ref = items_to_load - 1; 0 <= ref ? j <= ref : j >= ref; i = 0 <= ref ? ++j : --j) {
                if (data[i]) {
                  img_src = data[i].images.low_resolution.url;
                  img_src = img_src.replace("http:", "https:");
                  results.push($('.instagram-widget .items').append('<a class="item" target="_blank" href="' + data[i].link + '"><img src="' + img_src + '" /></a>'));
                } else {
                  results.push(void 0);
                }
              }
              return results;
            } else {
              return $('.instagram-widget .items').append('<p class="error">' + response.meta.error_message + '</p><p class="colored-links">Check the <strong>Homepage - social feeds</strong> section in your <a target="_blank" href="/admin/themes">theme settings</a>.</p>');
            }
          },
          error: function(jqXHR, textStatus) {
            console.log(jqXHR);
            return console.log(textStatus);
          }
        });
      })();
    };

    return InstagramFeed;

  })();

  MediaQueries = (function() {
    function MediaQueries() {
      this.load = bind(this.load, this);
      var _this;
      _this = this;
      _this.listeners();
      _this.load();
    }

    MediaQueries.prototype.load = function() {
      var _this, current_window;
      _this = this;
      if (window.matchMedia('only screen and (min-width: ' + mq_medium + 'px)').matches) {
        if (current_window !== 'large') {
          $.event.trigger("largeWindow");
          return current_window = 'large';
        }
      } else if (window.matchMedia('only screen and (min-width: ' + mq_small + 'px)').matches) {
        if (current_window !== 'medium') {
          $.event.trigger("mediumWindow");
          return current_window = 'medium';
        }
      } else {
        if (current_window !== 'small') {
          $.event.trigger("smallWindow");
          return current_window = 'small';
        }
      }
    };

    MediaQueries.prototype.listeners = function() {
      var _this;
      _this = this;
      return WINDOW.on('resize.section-' + _this.section_id, _this.load);
    };

    return MediaQueries;

  })();

  Popup = (function() {
    function Popup(clazz) {
      var checkContentOverflow, closeDialog, eventListeners, fillPopupDialog, fillSizeChartDialog, getCustomClasses, getImage, getNewsletter, getPageContent, getSocialIcons, getWrapper, hideMask, ieCenter, isExpired, mask, maskIsActive, modal, modal_clazz, openDialog, passesExpiration, resetExpiration, showMask, storeExpiration;
      this.clazz = clazz;
      modal = null;
      modal_clazz = this.clazz;
      mask = $('.popup-modal-mask');
      storeExpiration = function() {
        var date, e, error1, expires, object, seconds_from_now;
        date = new Date();
        seconds_from_now = 1000 * 60 * 60 * 24 * popup_config.days_until;
        expires = date.setTime(date.getTime() + seconds_from_now);
        object = {
          expires: expires
        };
        try {
          return localStorage[popup_config.storage_key] = JSON.stringify(object);
        } catch (error1) {
          e = error1;
          return false;
        }
      };
      resetExpiration = function() {
        localStorage.removeItem(popup_config.storage_key);
        return storeExpiration();
      };
      isExpired = function() {
        var expires, now, object;
        object = JSON.parse(localStorage[popup_config.storage_key]);
        expires = object.expires;
        now = new Date().getTime();
        if (parseFloat(expires - now) <= 0) {
          resetExpiration();
          return true;
        }
        return false;
      };
      passesExpiration = function() {
        var passed;
        passed = false;
        if (Storage === "undefined" || popup_config.test_mode) {
          passed = true;
        } else if (typeof localStorage[popup_config.storage_key] === "undefined") {
          passed = true;
          storeExpiration();
        } else {
          passed = isExpired();
        }
        return passed;
      };
      maskIsActive = function() {
        return $('.popup-modal').is(':visible') || $('.modal-mask').length > 0 && $('.modal-mask').is(':visible');
      };
      showMask = function() {
        mask.show();
        return PAGE.addClass("modal-on");
      };
      hideMask = function() {
        mask.hide();
        return PAGE.removeClass("modal-on");
      };
      getImage = function() {
        if (popup_config.show_image_enabled === false) {
          return "";
        }
        if (popup_config.image_link.length > 0) {
          return $('<div class="popup-image"> <a href="' + popup_config.image_link + '">' + popup_config.show_image_url + '</a> </div>');
        } else {
          return $('<div class="popup-image">').append(popup_config.show_image_url);
        }
      };
      getNewsletter = function() {
        var subscribe_module;
        if (popup_config.newsletter_enabled === false) {
          return "";
        }
        subscribe_module = $("<div id='subscribe_module'></div>").append($("#mailing-list-module > p").clone()).append($("#mailing-list-module #contact_form").clone()).append($("#mc-embedded-subscribe-form").clone());
        return subscribe_module;
      };
      getSocialIcons = function() {
        if (popup_config.social_icons_enabled === false) {
          return "";
        }
        return $(".social-follow").clone();
      };
      getCustomClasses = function() {
        var class_list;
        class_list = "";
        class_list += popup_config.show_image_enabled === true ? " has-image" : " has-no-image";
        class_list += popup_config.page_content.length > 0 ? " has-page-content" : " has-no-page-content";
        class_list += popup_config.newsletter_enabled ? " has-newsletter" : " has-no-newsletter";
        class_list += popup_config.social_icons_enabled ? " has-social-icons" : " has-no-social-icons";
        return class_list;
      };
      getWrapper = function() {
        return '<dialog class="' + modal_clazz + ' popup-modal' + getCustomClasses() + '" />';
      };
      getPageContent = function() {
        var page_content;
        page_content = null;
        if (popup_config.page_content.length < 1) {
          return "";
        }
        $.getJSON('/pages/' + popup_config.page_content + '.json', function(data, textStatus) {
          return page_content = "<div class='page-contents'>" + data.page.body_html + "</div>";
        });
        return page_content;
      };
      fillSizeChartDialog = function() {
        var dialog;
        if ($('.popup-modal.size-chart').length < 1) {
          dialog = {
            wrapper: getWrapper()
          };
          PAGE.append($(dialog.wrapper).append($('.size-chart')));
        }
        return openDialog();
      };
      fillPopupDialog = function() {
        var dialog, getInnerContent, render;
        dialog = {
          wrapper: getWrapper(),
          newsletter: getNewsletter(),
          social_icons: getSocialIcons(),
          image: getImage()
        };
        getInnerContent = function() {
          if (popup_config.page_content.length < 1 && popup_config.newsletter_enabled === false && popup_config.social_icons_enabled === false) {
            return "";
          }
          return $("<div class='inner' />").append(dialog.body, dialog.newsletter, dialog.social_icons);
        };
        render = function() {
          PAGE.append($(dialog.wrapper).append(dialog.image, getInnerContent()));
          return openDialog();
        };
        if (popup_config.page_content.length > 0) {
          return $.getJSON('/pages/' + popup_config.page_content + '.json', function(data, textStatus) {
            dialog['body'] = "<div class='page-contents'>" + data.page.body_html + "</div>";
            return render();
          });
        } else {
          return render();
        }
      };
      checkContentOverflow = function() {
        return setTimeout((function() {
          if (modal.length > 0 && $('.popup-modal-mask').is(':visible')) {
            return modal.imagesLoaded(function() {
              var dialog_height;
              dialog_height = $('dialog[class*="' + modal_clazz + '"]:last-of-type').outerHeight();
              if (dialog_height >= WINDOW.height()) {
                return PAGE.addClass('modal-unfix');
              } else {
                return PAGE.removeClass('modal-unfix');
              }
            });
          }
        }), 0);
      };
      ieCenter = function() {
        return modal.css({
          marginTop: -(modal.outerHeight() * 0.5) + "px",
          marginLeft: -(modal.outerWidth() * 0.5) + "px"
        });
      };
      openDialog = function() {
        modal = $('dialog[class*="' + modal_clazz + '"]');
        if ($("html").hasClass("ie9")) {
          ieCenter();
        }
        eventListeners();
        modal.addClass("opened").removeClass("closed");
        checkContentOverflow();
        return showMask();
      };
      eventListeners = function() {
        var removeAnimation;
        removeAnimation = function(event) {
          if (event.originalEvent.animationName === 'modal-close') {
            if (modal_clazz === 'popup') {
              return modal.remove();
            } else {
              return modal.removeClass('closed, completed');
            }
          } else {
            return modal.addClass('completed').removeClass('opened');
          }
        };
        DOC.on('click', '.popup-modal', function(e) {
          e.stopPropagation();
          if (e.target === this) {
            return closeDialog();
          }
        });
        $('.popup-modal-close').click(closeDialog);
        mask.click(closeDialog);
        modal.on('animationend webkitAnimationEnd MSAnimationEnd oAnimationEnd', removeAnimation);
        WINDOW.resize(checkContentOverflow);
        DOC.keydown(function(e) {
          if (modal.hasClass('completed') && e.keyCode === 27) {
            return closeDialog();
          }
        });
        return $('dialog.popup-modal #contact_form').on('submit', function(event) {
          var form;
          form = this;
          modal = $(this).closest('.popup-modal');
          modal.find('.error, .success').remove();
          event.preventDefault();
          if (modal.find('input[type="email"]').val().length === 0) {
            modal.find('.inner').prepend('<p class="error">' + theme.translation.newsletter_email_blank + '</p>');
            return false;
          } else {
            modal.find('.inner > *').hide();
            modal.find('.inner').prepend('<p class="success">' + theme.translation.newsletter_success_message + '</p>').show();
            setTimeout(function() {
              return form.submit();
            }, 500);
          }
          return false;
        });
      };
      closeDialog = function() {
        modal.addClass('closed').removeClass('completed').removeClass('opened');
        return hideMask();
      };
      if (modal_clazz !== 'popup') {
        fillSizeChartDialog();
      } else {
        if (popup_config.enabled && passesExpiration() && (popup_config.page_content.length > 0 || popup_config.newsletter_enabled || popup_config.show_image_enabled || popup_config.social_icons_enabled)) {
          setTimeout((function() {
            if (!(maskIsActive() === true || $('.popup-modal-mask').length < 1)) {
              return fillPopupDialog();
            }
          }), popup_config.seconds_until * 1000);
        }
      }
    }

    return Popup;

  })();

  ProductGrid = (function() {
    function ProductGrid() {
      this.listeners = bind(this.listeners, this);
      this.matchImageHeights = bind(this.matchImageHeights, this);
      this.load = bind(this.load, this);
      var _this;
      _this = this;
      _this.listeners();
      _this.load();
    }

    ProductGrid.prototype.load = function() {
      var _this;
      _this = this;
      return _this.matchImageHeights();
    };

    ProductGrid.prototype.matchImageHeights = function() {
      var greatest_height, grid_items, product_grid, row_items, setRowHeights;
      product_grid = $('.product-grid');
      grid_items = product_grid.find('.product-item, .clearfix');
      row_items = [];
      greatest_height = 0;
      if (product_grid.closest('.product-slider').length) {
        return false;
      }
      setRowHeights = function(product_items) {
        $.each(product_items, function() {
          return $(this).find('.image-wrapper').height(greatest_height);
        });
        return greatest_height = 0;
      };
      return product_grid.imagesLoaded(function() {
        return grid_items.each(function(index) {
          var image;
          image = $(this).find('.image-wrapper img:first');
          if (image.height() > greatest_height) {
            greatest_height = image.height();
          }
          if ($(this).hasClass('clearfix')) {
            if (row_items.length > 1) {
              setRowHeights(row_items);
            }
            return row_items = [];
          } else if (index === grid_items.length - 1) {
            row_items.push($(this));
            return setRowHeights(row_items);
          } else {
            return row_items.push($(this));
          }
        });
      });
    };

    ProductGrid.prototype.listeners = function() {
      var _this;
      _this = this;
      return WINDOW.resize(function() {
        return _this.matchImageHeights();
      });
    };

    return ProductGrid;

  })();

  ProductModal = (function() {
    function ProductModal(root) {
      var _this;
      this.root = root;
      this.load = bind(this.load, this);
      _this = this;
      _this.modal = _this.root;
      _this.load();
    }

    ProductModal.prototype.load = function() {
      var _this, changeModal, closeModal, modal, modal_controls, modal_init, modal_length, modal_open, openModal, resizeModal;
      _this = this;
      modal = _this.modal;
      if ($('.modal').length && $('.product-page').data('productModalEnabled')) {
        modal_length = $("article .photos .photo").length;
        modal_init = false;
        modal_open = false;
        modal.find('.loading').spin('small');
        if (modal_length > 1) {
          modal.addClass("with-nav");
          modal_controls = modal.find('.control, .popup-modal-close');
        } else {
          modal_controls = modal.find('.popup-modal-close');
        }
        resizeModal = function() {
          var active_photo, height_ratio, image_height, image_width, width_ratio, window_height, window_width;
          active_photo = modal.find('.photo.active');
          image_width = active_photo.naturalWidth();
          image_height = active_photo.naturalHeight();
          window_width = WINDOW.width();
          window_height = WINDOW.height();
          width_ratio = image_width / window_width;
          height_ratio = image_height / window_height;
          if (width_ratio > height_ratio && width_ratio > .90) {
            image_width = image_width * .90 / width_ratio;
            image_height = image_height * .90 / width_ratio;
          } else if (width_ratio < height_ratio && height_ratio > .90) {
            image_width = image_width * .90 / height_ratio;
            image_height = image_height * .90 / height_ratio;
          }
          modal.css({
            'width': image_width,
            'height': image_height,
            'margin-top': -(image_height / 2),
            'margin-left': -(image_width / 2)
          });
          return active_photo.css({
            'height': image_height
          });
        };
        openModal = function(index) {
          var active_photo;
          modal_open = true;
          if (!modal_init) {
            $("article .photos .photo").each(function() {
              return modal.find(".slides").append($('<img />').attr('src', $(this).attr('href')).addClass('photo'));
            });
            modal_init = true;
          }
          $('.modal-mask').show();
          modal.fadeIn();
          active_photo = $(".modal img").eq(index);
          active_photo.addClass('active');
          return modal.find(".photo.active").imagesLoaded(function() {
            modal.find(".loading").hide();
            modal_controls.show();
            modal.find(".slides").show();
            return resizeModal();
          });
        };
        $('.photos .container').off().on('click', function() {
          var index;
          if (current_window === 'small') {
            return false;
          }
          index = $(this).find('.photo.active').index();
          return openModal(index);
        });
        closeModal = function() {
          modal_open = false;
          modal.find(".photo.active").removeClass("active");
          modal.css('display', 'none');
          return $('.modal-mask').fadeOut();
        };
        modal.find('.popup-modal-close').on('click', function() {
          return closeModal();
        });
        $('.modal-mask').on('click', function() {
          return closeModal();
        });
        changeModal = function(direction) {
          var active_index, active_photo, new_index, photo_length;
          active_photo = modal.find('.photo.active');
          active_index = modal.find('.photo.active').index();
          photo_length = modal.find('.photo').length;
          if (direction === 'prev') {
            if (active_index === 0) {
              new_index = photo_length - 1;
            } else {
              new_index = active_index - 1;
            }
          }
          if (direction === 'next') {
            if (active_index === photo_length - 1) {
              new_index = 0;
            } else {
              new_index = active_index + 1;
            }
          }
          active_photo.removeClass('active');
          modal_controls.hide();
          modal.find(".loading").delay(50).fadeIn(0);
          return modal.find('.photo').eq(new_index).imagesLoaded(function() {
            modal.find(".loading").stop(true, true).fadeOut(0);
            modal_controls.show();
            modal.find('.photo').eq(new_index).addClass('active');
            return resizeModal();
          });
        };
        modal.find('.prev').on('click', function() {
          return changeModal('prev');
        });
        modal.find('.next').on('click', function() {
          return changeModal('next');
        });
        modal.find('.slides').on('click', function() {
          return changeModal('next');
        });
        DOC.keydown(function(e) {
          if (modal_open) {
            if (e.keyCode === 37 && modal_length > 1) {
              changeModal('prev');
            }
            if (e.keyCode === 39 && modal_length > 1) {
              changeModal('next');
            }
            if (e.keyCode === 27) {
              return closeModal();
            }
          }
        });
        if (modal_init) {
          return WINDOW.resize(function() {
            return resizeModal();
          });
        }
      }
    };

    return ProductModal;

  })();

  ProductSlider = (function() {
    function ProductSlider(root) {
      var _this;
      this.root = root;
      this.listeners = bind(this.listeners, this);
      this.load = bind(this.load, this);
      _this = this;
      _this.product_grid = _this.root.find('.product-grid');
      _this.product_item = _this.root.find('.product-item');
      _this.load();
      _this.listeners();
    }

    ProductSlider.prototype.load = function() {
      var _this;
      _this = this;
      _this.product_grid.owlCarousel({
        items: 4,
        navigation: true,
        scrollPerPage: true,
        slideSpeed: 800,
        lazyLoad: true,
        pagination: false,
        navigationText: false
      });
      return _this.product_item.show();
    };

    ProductSlider.prototype.listeners = function() {
      var _this;
      _this = this;
      return WINDOW.on('resize.ProductSlider', _this.loadCarousel);
    };

    return ProductSlider;

  })();

  PromoBar = (function() {
    function PromoBar(root) {
      var _this;
      this.root = root;
      this.load = bind(this.load, this);
      _this = this;
      _this.promo_bar = _this.root;
      _this.close_btn = _this.root.find('button');
      _this.load();
    }

    PromoBar.prototype.load = function() {
      var _this;
      _this = this;
      if ((typeof Storage !== "undefined" && Storage !== null) && sessionStorage['promo-bar-closed']) {
        return _this.promo_bar.hide();
      } else {
        _this.promo_bar.show();
        return _this.close_btn.on('click', function() {
          return _this.close();
        });
      }
    };

    PromoBar.prototype.close = function() {
      var _this;
      _this = this;
      if ((typeof Storage !== "undefined" && Storage !== null) && !sessionStorage['promo-bar-closed']) {
        sessionStorage['promo-bar-closed'] = true;
      }
      return _this.promo_bar.addClass('closed');
    };

    return PromoBar;

  })();

  VerticalTabs = (function() {
    function VerticalTabs() {
      $('.tabs-vertical.headings').each(function() {
        return $(this).add($(this).next('.tabs.content')).wrapAll("<div class='tabs-wrapper vertical'/>");
      });
      $('.tabs-vertical.headings li').wrapInner('<div class="trigger"></div>');
      $('.tabs-vertical.headings li .trigger').append('<div class="bg"></div>');
      $('.tabs-wrapper.vertical').each(function() {
        var tab_content, tab_headings, tab_wrapper;
        tab_wrapper = $(this);
        tab_headings = $(this).find('.headings > li');
        tab_content = $(this).find('.tabs.content > li');
        tab_content.first().addClass('active');
        tab_headings.first().addClass('active');
        return tab_headings.on('click', function() {
          tab_headings.removeClass('active');
          tab_content.removeClass('active');
          $(this).addClass('active');
          tab_content.eq($(this).index()).addClass('active');
          if (general_scroll_to_active_item) {
            if (matchMedia('only screen and (min-width: ' + mq_small + 'px)').matches || $("html").hasClass("lt-ie9")) {
              return $('html, body').animate({
                scrollTop: tab_wrapper.offset().top - 50
              }, 'slow');
            } else {
              return $('html, body').animate({
                scrollTop: tab_wrapper.offset().top + tab_wrapper.find('.headings').outerHeight() - 50
              }, 'slow');
            }
          }
        });
      });
    }

    return VerticalTabs;

  })();

  VideoModal = (function() {
    function VideoModal(video) {
      this.createIframe = bind(this.createIframe, this);
      this.extractVideoId = bind(this.extractVideoId, this);
      this.extractVideoType = bind(this.extractVideoType, this);
      this.eventListeners = bind(this.eventListeners, this);
      this.centerPosition = bind(this.centerPosition, this);
      this.close = bind(this.close, this);
      this.open = bind(this.open, this);
      this.opened = false;
      this.video = video;
      this.modal = $('.video.modal');
      this.player_button = video.find('.player-button');
      this.src_url = video.find('.play-button').attr('href');
      this.type = this.extractVideoType();
      this.id = this.extractVideoId();
      this.iframe = this.createIframe();
      this.caption = video.find('.caption');
    }

    VideoModal.prototype.open = function() {
      this.opened = true;
      this.modal.find(".flex-video").append(this.iframe);
      if (this.caption.length > 0) {
        this.modal.find(".caption").append(this.caption.html());
        this.modal.addClass("wide");
      } else {
        this.modal.find(".player").removeClass('large-8');
        this.modal.find('.caption').hide();
        this.modal.removeClass("wide");
      }
      this.player_button.hide();
      $('.modal-mask').show();
      this.modal.find('.close').show();
      this.modal.fadeIn();
      this.centerPosition();
      $(".modal").fadeIn(0);
      return this.eventListeners();
    };

    VideoModal.prototype.close = function() {
      this.opened = false;
      this.modal.find(".flex-video").empty();
      this.modal.find(".caption").empty();
      this.modal.hide();
      $('.modal-mask').fadeOut();
      if (this.caption.length === 0) {
        this.modal.find(".player").addClass('large-8');
        return this.modal.find('.caption').show();
      }
    };

    VideoModal.prototype.centerPosition = function() {
      if (WINDOW.height() < this.modal.outerHeight()) {
        return this.modal.css({
          'position': 'absolute',
          'top': '30px',
          'margin-top': 0,
          'margin-left': -(this.modal.outerWidth() / 2)
        });
      } else {
        return this.modal.css({
          'position': 'fixed',
          'top': '50%',
          'margin-top': -(this.modal.outerHeight() / 2),
          'margin-left': -(this.modal.outerWidth() / 2)
        });
      }
    };

    VideoModal.prototype.eventListeners = function() {
      var modal;
      modal = this;
      this.modal.find('.close').on('click', function() {
        return modal.close();
      });
      WINDOW.resize(function() {
        return modal.centerPosition();
      });
      DOC.keydown(function(e) {
        if (modal.opened) {
          if (e.keyCode === 27) {
            return modal.close();
          }
        }
      });
      $('.modal-mask').on('click', function() {
        return modal.close();
      });
      return this.player_button.on('click', function() {
        return false;
      });
    };

    VideoModal.prototype.extractVideoType = function() {
      var matches, re;
      re = /\/\/(?:www\.)?youtu(?:\.be|be\.com)\/(?:watch\?v=|embed\/)?([a-z0-9_\-]+)/i;
      matches = re.exec(this.src_url);
      if (matches) {
        return 'youtube';
      } else {
        re = /^.*(vimeo)\.com\/(?:watch\?v=)?(.*?)(?:\z|$|&)/;
        matches = re.exec(this.src_url);
        if (matches) {
          return 'vimeo';
        }
      }
      return false;
    };

    VideoModal.prototype.extractVideoId = function() {
      var match, regExp;
      if (this.type === 'youtube') {
        regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
        match = this.src_url.match(regExp);
        if (match && match[2].length === 11) {
          return match[2];
        }
      } else if (this.type === "vimeo") {
        regExp = /^.*(vimeo)\.com\/(?:watch\?v=)?(.*?)(?:\z|$|&)/;
        match = this.src_url.match(regExp);
        if (match) {
          return match[2];
        }
      }
    };

    VideoModal.prototype.createIframe = function() {
      if (this.type === "youtube") {
        return '<iframe  src="//www.youtube.com/embed/' + this.id + '?autoplay=1&rel=0" frameborder="0" allowfullscreen></iframe>';
      } else if (this.type === "vimeo") {
        return '<iframe src="//player.vimeo.com/video/' + this.id + '?title=0&amp;byline=0&amp;portrait=0&amp;color=ffffff&amp;autoplay=1?" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';
      }
    };

    return VideoModal;

  })();

  theme.classes.XMenu = (function(superClass) {
    extend(XMenu, superClass);

    function XMenu(root) {
      var _this;
      this.root = root;
      this.slideDown = bind(this.slideDown, this);
      this.hideHeader = bind(this.hideHeader, this);
      this.showHeader = bind(this.showHeader, this);
      this.headerListeners = bind(this.headerListeners, this);
      this.isHeaderTransparent = bind(this.isHeaderTransparent, this);
      _this = this;
      _this.header = $('.main-header');
      _this.header_bg = _this.header.find('.header--bg');
      _this.header_timer = null;
      _this.transparent_header = _this.isHeaderTransparent();
      XMenu.__super__.constructor.apply(this, arguments);
      _this.headerListeners();
    }

    XMenu.prototype.isHeaderTransparent = function() {
      var _this;
      _this = this;
      if ($('.header').attr('data-header--menu-transparent') === 'true') {
        return true;
      } else {
        return false;
      }
    };

    XMenu.prototype.headerListeners = function() {
      var _this;
      _this = this;
      _this.parents_with_sub_menu.on('mouseenter', function(e) {
        return clearTimeout(_this.header_timer);
      });
      _this.header.on('mouseenter touchstart', function(e) {
        clearTimeout(_this.header_timer);
        return _this.showHeader();
      });
      return _this.header.on('mouseleave', function(e) {
        return _this.header_timer = setTimeout(function() {
          return _this.hideHeader();
        }, 500);
      });
    };

    XMenu.prototype.showHeader = function() {
      var _this;
      _this = this;
      if (parseInt(_this.header_bg.css('opacity')) !== 0) {
        return;
      }
      return _this.header_bg.velocity({
        opacity: [0.95]
      }, {
        duration: 400,
        queue: false
      });
    };

    XMenu.prototype.hideHeader = function() {
      var _this;
      _this = this;
      if (_this.parents_with_sub_menu.filter('[data-main-menu--open="true"]').length > 0) {
        return false;
      }
      _this.header_bg.velocity({
        opacity: 0
      }, {
        duration: 400
      });
      return _this.slideUp();
    };

    XMenu.prototype.slideDown = function(link, delay) {
      var _this, opacity;
      if (delay == null) {
        delay = false;
      }
      _this = this;
      if (delay !== 'complete') {
        opacity = Math.round(parseFloat(_this.header_bg.css('opacity')) * 100);
        if (opacity < 90 && _this.transparent_header) {
          delay = 400;
        }
      }
      return XMenu.__super__.slideDown.call(this, link, delay);
    };

    return XMenu;

  })(theme.classes.FrameworkXMenu);

  Cart = (function() {
    function Cart() {
      this.recentCartItemPopUp = bind(this.recentCartItemPopUp, this);
      this.addToCart = bind(this.addToCart, this);
      this.validateSize = bind(this.validateSize, this);
      this.stopResetTimer = bind(this.stopResetTimer, this);
      this.startTimer = bind(this.startTimer, this);
      this.fadeOutCartDropdown = bind(this.fadeOutCartDropdown, this);
      this.openMobileModal = bind(this.openMobileModal, this);
      this.slideDownCartDropdown = bind(this.slideDownCartDropdown, this);
      this.listeners = bind(this.listeners, this);
      this.load = bind(this.load, this);
      var _this;
      _this = this;
      _this.cart_dropdown_timer = null;
      _this.listeners();
    }

    Cart.prototype.load = function() {
      var _this;
      return _this = this;
    };

    Cart.prototype.listeners = function() {
      var _this;
      _this = this;
      $('.cart-form').off().on('submit', function() {
        _this.addToCart($(this));
        return false;
      });
      $('.recently-added.mobile .close').off().on('click', function() {
        return _this.fadeOutCartDropdown();
      });
      $('.recently-added-mask').off().on('click', function() {
        return _this.fadeOutCartDropdown();
      });
      $('.main-header .recently-added, .ch-account-and-cart .recently-added').mouseenter(function() {
        return _this.stopResetTimer();
      });
      return $('.main-header .recently-added, .ch-account-and-cart .recently-added').mouseleave(function() {
        return _this.startTimer();
      });
    };

    Cart.prototype.toggleCartDropdown = function() {
      return $('.main-header .recently-added, .ch-account-and-cart .recently-added').slideToggle('fast');
    };

    Cart.prototype.slideDownCartDropdown = function() {
      $('.main-header .recently-added, .ch-account-and-cart .recently-added').slideDown('fast');
      return $("html, body").animate({
        scrollTop: 0
      });
    };

    Cart.prototype.openMobileModal = function() {
      $('.main-header .recently-added.mobile, .ch-account-and-cart .recently-added').fadeIn();
      return $('.main-header .recently-added-mask, .ch-account-and-cart .recently-added-mask').removeClass('hide');
    };

    Cart.prototype.fadeOutCartDropdown = function() {
      var _this;
      _this = this;
      clearTimeout(_this.cart_dropdown_timer);
      $('.main-header .recently-added, .ch-account-and-cart .recently-added').fadeOut('fast');
      return $('.main-header .recently-added-mask, .ch-account-and-cart .recently-added-mask').addClass('hide');
    };

    Cart.prototype.startTimer = function() {
      var _this;
      _this = this;
      return _this.cart_dropdown_timer = setTimeout((function() {
        return _this.fadeOutCartDropdown();
      }), 4000);
    };

    Cart.prototype.stopResetTimer = function() {
      var _this;
      _this = this;
      return clearTimeout(_this.cart_dropdown_timer);
    };

    Cart.prototype.validateSize = function(cart_form) {
      if (cart_form.find('select option:selected').is(':disabled')) {
        cart_form.find('.dropdown').effect('shake', {
          'times': 2,
          'distance': 5
        }, 400);
        return false;
      }
      return true;
    };

    Cart.prototype.addToCart = function(cart_form) {
      var _this, addToCartFail, addToCartPass;
      _this = this;
      addToCartPass = function(product) {
        return _this.recentCartItemPopUp();
      };
      addToCartFail = function(obj, status) {
        var error = JSON.parse(obj.responseText);
        var text;
        if(error.status == 'bad_request'){
        	text = 'The item you just added is unavailable. Please select another product or variant.';
        } else {
        	text = error.description;
        }
        $('.recently-added .error p').html(text);
        $('.recently-added .error').show();
        $('.recently-added table').hide();
        $('.recently-added div.row').hide();
        _this.slideDownCartDropdown();
        return _this.startTimer();
      };
      return $.ajax({
        type: "POST",
        url: "/cart/add.js",
        dataType: "json",
        data: cart_form.serialize(),
        success: addToCartPass,
        error: addToCartFail
      });
    };

    Cart.prototype.recentCartItemPopUp = function() {
      var _this, cart_item, cart_total;
      _this = this;
      cart_item = {};
      cart_total = {};
      console.log(cart_item);


      if (currency_switcher_enabled) {
        Shopify.money_format = Currency.moneyFormats[theme.shop_currency].money_format;
      }
      return $.getJSON("/cart.js", function(cart, textStatus) {
        if(typeof window.BOLD !== 'undefined'
           && typeof window.BOLD.common !== 'undefined'
           && typeof window.BOLD.common.cartDoctor !== 'undefined') {
          // NOTE: "cart" should be the variable containing the cart json data
          cart = window.BOLD.common.cartDoctor.fix(cart);
        }

        var new_cart_row, new_mobile_item, item_link;
        var recurring_desc = "";

         if(cart.items[0].properties_all  && cart.items[0].properties_all.frequency_num){
                recurring_desc = "<span> Delivered Every " + cart.items[0].properties_all.frequency_num + " " + cart.items[0].properties_all.frequency_type_text + " " + cart.items[0].properties_all.discounted_price + " each" + "</span>";
              }



        cart_item.image_url = Shopify.resizeImage(cart.items[0].image, "compact");
        cart_item.url = cart.items[0].url;
        cart_item.title = cart.items[0].title;
        cart_item.price = Shopify.formatMoney(cart.items[0].price, "£{{amount}}");
        cart_item.type = cart.items[0].product_type;
        cart_total.price = Shopify.formatMoney(cart.total_price, "£{{amount}}");
        cart_total.quantity = cart.item_count;
        $('.cart-link .number').html(cart_total.quantity).show();
        $('.cart-link .number-wrapper').removeClass('hide');
        if(cart_item.type == 'Bulk Buy'){
        	item_link = '#';
        } else{
        	item_link = cart_item.url;
        }
        new_cart_row = '<tr>';
        new_cart_row += '<td class="cart-item">';
        new_cart_row += '<a href="' + item_link + '">';
        new_cart_row += '<img src="' + cart_item.image_url + '" alt="' + cart_item.title + recurring_desc + '">';
        new_cart_row += '</a>';
        new_cart_row += '</td>';
        new_cart_row += '<td class="cart-detail">';
        new_cart_row += '<h5><a href="' + item_link + '">' + cart_item.title + recurring_desc + '</a></h5>';
        new_cart_row += '</td>';

        new_cart_row += '<td class="cart-price"><span class="money">' + cart_item.price + '</span></td>';
        new_cart_row += '</tr>';
        new_mobile_item = '<a href="' + item_link + '">';
        new_mobile_item += '<img src="' + cart_item.image_url + '" alt="' + cart_item.title + '">';
        new_mobile_item += '</a>';
        $('.recently-added tbody').html(new_cart_row);
        $('.recently-added .mobile-item').html(new_mobile_item);
        $('.recently-added .items-count .number').html(cart_total.quantity);
        $('.recently-added .total-price').html(cart_total.price);
        if (currency_switcher_enabled) {
          $.each($('.recently-added .total-price').get(0).attributes, function(i, attrib) { //deleted $. at beginning
            if (attrib.name.match("^data-currency")) {
              return $('.recently-added .total-price').attr(attrib.name, "");
            }
          });
          Currency.convertAll(shopCurrency, jQuery('[name=currencies]').val());
        }
        $('.recently-added .error').hide();
        $('.recently-added table, .recently-added div.row').show();
        if (theme.utils.mqs.current_window === 'small') {
          _this.openMobileModal();
        } else {
          _this.slideDownCartDropdown();
        }
        return _this.startTimer();
      });
    };

    return Cart;

  })();

  Collection = (function() {
    function Collection() {
      DOC.on('change', '.tags-listbox', function() {
        var collFilters, newTags, query;
        newTags = [];
        collFilters = $(this);
        collFilters.each(function(index, element) {
          if ($(this).val()) {
            return newTags.push($(this).val());
          }
        });
        if (newTags.length) {
          query = newTags.join('+');
          return window.location.href = $(theme.collection.tag).attr('href').replace('tag', query);
        } else {
          if (theme.collection.handle) {
            return window.location.href = '/collections/' + theme.collection.handle;
          } else if (theme.collection.products.first_type === theme.collection.title) {
            return window.location.href = theme.collection.url_for_type;
          } else if (theme.collection.products.first_vendor === theme.collection.title) {
            return window.location.href = theme.collection.url_for_vendor;
          }
        }
      });
    }

    return Collection;

  })();

  Password = (function() {
    function Password() {
      this.listeners = bind(this.listeners, this);
      this.load = bind(this.load, this);
      var _this;
      _this = this;
      _this.listeners();
      _this.load();
    }

    Password.prototype.load = function() {
      var _this;
      _this = this;
      if ($('.login-form .errors').size()) {
        return $('.login-link').click();
      }
    };

    Password.prototype.listeners = function() {
      var _this;
      _this = this;
      DOC.on('click', '.login-link', function() {
        $(this).css('visibility', 'hidden');
        $(".wrapper").hide();
        $('.login-form').css('visibility', 'visible').find($('[name=password]').focus());
        return false;
      });
      return DOC.on('click', '.login-form .cancel', function() {
        $(".login-link").css('visibility', 'visible');
        $(".wrapper").fadeIn();
        $('.login-form').css('visibility', 'hidden');
        return false;
      });
    };

    return Password;

  })();

  ProductPage = (function() {
    function ProductPage(root) {
      var _this;
      this.root = root;
      this.updateActiveImg = bind(this.updateActiveImg, this);
      this.load = bind(this.load, this);
      this.refreshSizeChart = bind(this.refreshSizeChart, this);
      this.reloadProductSection = bind(this.reloadProductSection, this);
      _this = this;
      _this.load();
      _this.updateActiveImg(0); //FIXES: "This feels like a timing issue, where the JS function is firing before the images load, and it isn't finding the first photo in the array."
    }

    ProductPage.prototype.reloadProductSection = function() {
      var _this;
      _this = this;
      new MediaQueries();
      _this.updateActiveImg(0);
      new ProductModal($('.modal'));
      _this.refreshSizeChart();
      $('article .thumbs').find('.thumb').on('click', function() {
        return _this.updateActiveImg($(this).index());
      });
      new Cart();
    };

    ProductPage.prototype.refreshSizeChart = function() {
      var _this, isSizeChartEnabled, len;
      _this = this;
      len = $(".single-option-selector").length;
      isSizeChartEnabled = function() {
        return $(".product-page").data("productSizeChartEnabled") === true;
      };
      if (len > 0) {
        return;
      }
      if (len < 1 && isSizeChartEnabled()) {
        return DOC.trigger('set-option-selectors');
      }
    };

    ProductPage.prototype.load = function() {
      var _this, getLowInStockAmount, getLowInStockMessage, photos, positions, showSizeChart, thumbs, updateLowInStock;
      _this = this;
      photos = $('article .photos');
      thumbs = $('article .thumbs');
      DOC.on('click', '.size-chart-trigger', function(e) {
        e.preventDefault();
        return new Popup('size-chart-container');
      });
      positions = (function() {
        var insertPosition;
        insertPosition = function(position_target) {
          var positions_src, target;
          positions_src = $('.positions.active');
          target = position_target;
          if (target.is(positions_src)) {
            return false;
          }
          positions_src.find('[data-position]').each(function() {
            var elem_src, elem_target, position;
            position = $(this).attr('data-position');
            if (position.length) {
              elem_src = positions_src.find('[data-position="' + position + '"]');
              elem_target = target.find('[data-position="' + position + '"]');
              return elem_src.children().appendTo(elem_target);
            }
          });
          positions_src.removeClass('active');
          return position_target.addClass('active');
        };
        DOC.on("smallWindow", function() {
          return insertPosition($('.positions.show-for-small'));
        });
        DOC.on("mediumWindow", function() {
          return insertPosition($('.positions.show-for-medium-only'));
        });
        DOC.on("largeWindow", function() {
          return insertPosition($('.positions.show-for-large-up'));
        });
      })();
      photos.on('click', function() {
        return false;
      });
      getLowInStockMessage = function(quantity) {
        var message;
        message = quantity === 1 ? theme.products.low_in_stock.one : theme.products.low_in_stock.other;
        if (quantity > 1) {
          message = message.replace(/\d+/, quantity);
        }
        return message;
      };
      getLowInStockAmount = function() {
        return $('.product-page').data('product-low-in-stock-amount');
      };
      updateLowInStock = function(variant) {
        var quantity, threshold;
        quantity = variant.inventory_quantity;
        threshold = getLowInStockAmount();
        if (threshold === 'undefined') {
          return false;
        }
        if (quantity > 0 && quantity <= threshold) {
          $('.product-low-in-stock').html('<p>' + getLowInStockMessage(quantity) + '</p>').show();
        } else {
          $('.product-low-in-stock').hide();
        }
        return DOC.on('.shopify-section section--products shopify:section:select', function() {
          return updateLowInStock(variant);
        });
      };
      thumbs.find('.thumb').on('click', function() {
        return _this.updateActiveImg($(this).index());
      });
      showSizeChart = function(selector) {
        var product_options;
        if ($('.size-chart').length > 0) {
          $('.size-chart-trigger').remove();
          product_options = selector.product.options;
          $('.cart-form').addClass('size-chart-enabled');
          return $('.selector-wrapper').each(function(index, element) {
            var product_size_chart_option;
            product_size_chart_option = $('.product-page').data('productSizeChartOption').toLowerCase();
            if (product_options[index].toLowerCase() === product_size_chart_option) {
              return $(element).append('<a class="size-chart-trigger" href="#">' + theme.products.size_chart.label + '</a>');
            }
          });
        }
      };
      theme.variantSelected = function(variant, selector) {
        var actual_price, compare_price, product_options, show_low_in_stock, variant_image_index;
        product_options = null;
        $(".compare-price").html("");
        $('.product-unavailable [type="submit"]').prop("disabled", true);
        if (variant && variant.available) {
          /*
          $(".quanity-cart-row").show();
          $('.product-unavailable').hide();
          */
          $('.cp-flex-wrapper .purchase.button').prop('disabled', false).val('Add to cart');
        } else {
          /*
          $(".quanity-cart-row").hide();
          $('.product-unavailable').show();
          $('.product-low-in-stock').hide();
          $('.product-unavailable [type="submit"]').prop("disabled", false);
          if (product_variant_size > 1 && variant) {
            $('.product-unavailable form .email-body').attr('value', 'Please notify me when this is back in stock: ' + product_title + ' - ' + variant.title);
          }
          */
          $('.cp-flex-wrapper .purchase.button').prop('disabled', true).val('Sold Out');
        }
        if (variant) {
          actual_price = Shopify.formatMoney(variant.price, shop_money_format);
          $(".actual-price").replaceWith('<span class="actual-price money" itemprop="price">' + actual_price + '</span>');
          if (variant.compare_at_price > variant.price) {
            compare_price = Shopify.formatMoney(variant.compare_at_price, shop_money_format);
            //$(".compare-price").html(product_language_was + ' <span class="money">' + compare_price + '</span>');
            $(".compare-price").html(' <span class="money">' + compare_price + '</span>');
          }
          if (currency_switcher_enabled) {
            Currency.convertAll(shopCurrency, jQuery('[name=currencies]').val());
          }
          if (variant.featured_image) {
            variant_image_index = $('article .photos .photo[data-image-id="' + variant.featured_image.id + '"]').index();
            _this.updateActiveImg(variant_image_index);
          } else {
            _this.updateActiveImg(0);
          }
          showSizeChart(selector);
          show_low_in_stock = getLowInStockAmount() === false ? false : true;
          if (show_low_in_stock === true && variant.inventory_management === "shopify") {
            updateLowInStock(variant);
          }
        }
      };
      // end of selectCallback;
      $("article .custom.dropdown").hide();

      if (product_options_size === 1 && product_options_first !== "Title") {
        // $(".selector-wrapper:eq(0)").prepend("<label>" + product_options_first + "</label>");
        $(".variants").prepend("<label>" + product_options_first + "</label>");
      }
      $(".selector-wrapper .single-option-selector").each(Foundation.libs.forms.append_custom_select);
      return $("select.single-option-selector").change(function() {
        Foundation.libs.forms.refresh_custom_select($(this), true);
      });
    };

    ProductPage.prototype.updateActiveImg = function(index) {
      var _this, imgZoom, isProductZoomEnabled, photos, thumbs, transition_time;
      _this = this;
      photos = $('article .photos');
      thumbs = $('article .thumbs');
      isProductZoomEnabled = function() {
        return $('.product-page').data('productZoomEnabled');
      };
      imgZoom = function(index) {
        if (!touchevents_exist && isProductZoomEnabled()) {
          return photos.find('.container').zoom({
            url: photos.find('.photo').eq(index).attr('data-zoom')
          });
        }
      };
      if (!touchevents_exist && isProductZoomEnabled()) {
        photos.find('.container').on("mouseover", function() {
          $(this).css('outline-width', 1);
          return photos.find('.zoomImg').css({
            opacity: 1
          });
        }).on("mouseleave", function() {
          return $(this).css('outline-width', 0);
        });
      }
      if (photos.find('.photo').eq(index).find('img').length < 1) {
        return;
      }
      if (photos.find('.photo.active').index() === index) {
        return;
      }
      thumbs.find('.thumb').removeClass('active');
      thumbs.find('.thumb').eq(index).addClass('active');
      photos.find('.zoomImg').remove();
      transition_time = 0;
      if (photos.find('.photo.active').length) {
        transition_time = 300;
        photos.find('.photo.active').fadeOut(transition_time).removeClass('active');
      }
      photos.find('.photo').eq(index).delay(transition_time).imagesLoaded(function() {
        var container_width, height, width;
        imgZoom(index);
        height = photos.find('.photo').eq(index).find('img').naturalHeight();
        width = photos.find('.photo').eq(index).find('img').naturalWidth();
        container_width = photos.outerWidth();
        if (container_width < width) {
          height = container_width / width * height;
          width = container_width;
        }
        photos.find('.container').animate({
          "height": height,
          "width": width
        }, transition_time, function() {
          return photos.find('.container').css({
            'height': 'auto',
            'width': 'auto'
          });
        });
        photos.find('.photo.active').fadeOut(transition_time).removeClass('active');
        return photos.find('.photo').eq(index).addClass('active').fadeIn(transition_time);
      });
    };

    return ProductPage;

  })();

  $(document).foundation();

  PAGE = null;

  DOC = null;

  WINDOW = null;

  HEADER = null;

  touchevents_exist = null;

  mq_small = null;

  mq_medium = null;

  mq_large = null;

  log = null;

  current_window = '';

  jQuery(function($) {
    var first_article_img, isFirefox, page_content, pinterest_button;
    PAGE = $('body');
    DOC = $(document);
    WINDOW = $(window);
    HEADER = $('.main-header');
    touchevents_exist = Modernizr.touch;
    mq_small = 768;
    mq_medium = 1280;
    mq_large = 1440;
    log = function(value) {
      if (typeof console !== "undefined") {
        return console.log(value);
      }
    };
    theme.utils = {};
    theme.utils.sections = new theme.classes.Sections();
    theme.utils.mqs = new theme.classes.FrameworkMediaQueries();
    theme.utils.addSymbol = function(icon_name) {
      return '<svg class="fw--icon fw--icon--' + icon_name + '"> <use xlink:href="#fw--icon--' + icon_name + '" /> </svg>';
    };
    theme.utils.loadJsClasses = function() {
      return $('[data-js-class]').each(function() {
        var js_class, partial_class;
        js_class = $(this).attr('data-js-class');
        if ($(this).attr('data-js-loaded') !== 'true') {
          partial_class = theme.classes[js_class];
          if (typeof partial_class !== "undefined") {
            theme.partials[js_class] = new partial_class($(this));
            return $(this).attr('data-js-loaded', 'true');
          }
        }
      });
    };
    theme.utils.transparentMenuIsEnabled = function() {
      return PAGE.find("[data-header--menu-transparent=true]").length > 0;
    };
    if (general_external_links_enabled) {
      $('a[href^="http"]').not('a[href^="' + shop_url + '"]').attr('target', '_blank');
    }
    if (popup_config.enabled) {
      $.preloadImages = function() {
        var i;
        i = 0;
        while (i < arguments.length) {
          $('<img />').attr('src', arguments[i]);
          i++;
        }
      };
      $.preloadImages(theme.preload_image);
    }
    new Popup('popup');
    if (PAGE.hasClass('template-product')) {
      theme.product_page = new ProductPage($('.product-page'));
    }
    new Footer($('.footer'));
    theme.product_modal = new ProductModal($('.modal'));
    new Accordion();
    new HorizontalTabs();
    new VerticalTabs();
    new Cart();
    new PromoBar($('.promo-bar'));
    if (PAGE.hasClass('template-page')) {
      page_content = $('.page-content .rte-content');
      if (page_content.find('.left-side-column').length || page_content.find('.right-side-column').length) {
        if (page_content.find('.left-side-column').length && page_content.find('.right-side-column').length) {
          page_content.wrapInner("<div class='main-column with-2-sidebars'></div>");
          $('.left-side-column').addClass('with-2-sidebars');
          $('.right-side-column').addClass('with-2-sidebars');
        } else {
          page_content.wrapInner("<div class='main-column'></div>");
        }
        $('.left-side-column').prependTo(page_content);
        $('.right-side-column').appendTo(page_content);
      }
    }
    if (PAGE.hasClass('template-index')) {
      $('.slider').each(function() {
        return new FullscreenSlider($(this).find('.slides'));
      });
      $('.product-slider').each(function() {
        return new ProductSlider($(this));
      });
      new InstagramFeed($('.instagram-widget'));
    }
    if (PAGE.hasClass('template-collection')) {
      new Collection();
    }
    if (PAGE.hasClass('template-article')) {
      pinterest_button = $('.social-share .pinterest');
      first_article_img = $('.article img').first().attr('src');
      pinterest_button.attr('href', pinterest_button.attr('href') + '&media=' + first_article_img);
    }
    $('.slider').each(function() {
        return new FullscreenSlider($(this).find('.slides'));
    });
    $('.product-slider').each(function() {
      return new ProductSlider($(this));
    });
    new InstagramFeed($('.instagram-widget'));
    if ($('.section--password').length > 0) {
      new Password();
    }
    isFirefox = typeof InstallTrigger !== "undefined";
    if (isFirefox) {
      $('img').addClass('image-scale-hack');
    }
    if (touchevents_exist) {
      $("form.custom .hidden-field").removeClass('hidden-field');
    }
    current_window = '';
    new MediaQueries();
    $('.hide-until-js').show();
    new ProductGrid();
    window.twttr = (function(d, s, id) {
      var fjs, js, t;
      js = void 0;
      fjs = d.getElementsByTagName(s)[0];
      t = window.twttr || {};
      if (d.getElementById(id)) {
        return t;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = 'https://platform.twitter.com/widgets.js';
      fjs.parentNode.insertBefore(js, fjs);
      t._e = [];
      t.ready = function(f) {
        t._e.push(f);
      };
      return t;
    })(document, 'script', 'twitter-wjs');
    DOC.on('shopify:section:load', function(e) {
      var section_wrapper;
      section_wrapper = $(e.target).closest('.shopify-section');
      section_wrapper.css('min-height', '2000px');
      if (section_wrapper.hasClass('section--slideshow')) {
        new FullscreenSlider($(e.target).find('.slides'));
      } else if (section_wrapper.hasClass('section--featured-collection')) {
        new ProductSlider($(e.target).find('.product-slider'));
      } else if (section_wrapper.hasClass('social-feeds')) {
        new InstagramFeed($('.instagram-widget'));
        twttr.widgets.load();
      } else if (section_wrapper.hasClass('section--header')) {
        setTimeout(function() {
          if ($('.slider').length > 0) {
            return DOC.trigger('header.transparentMenuIsUpdated');
          }
        }, 0);
        new PromoBar($('.promo-bar'));
      } else if (section_wrapper.hasClass('section--products')) {
        DOC.trigger('set-option-selectors');
        new ProductModal($('.modal'));
      }
      return section_wrapper.css('min-height', 'auto');
    });
    DOC.on('shopify:section:unload', function(e) {
      var mask, section_wrapper;
      section_wrapper = $(e.target).closest('.shopify-section');
      if (section_wrapper.hasClass('section--featured-collection')) {
        return setTimeout((function() {
          if ($('.section--featured-collection').length === 0) {
            return WINDOW.off("resize.ProductSlider");
          }
        }), 0);
      } else if (section_wrapper.hasClass('section--products')) {
        mask = $(".popup-modal-mask");
        $(".size-chart").remove();
        if (mask.is(":visible")) {
          return mask.trigger("click");
        }
      } else if (section_wrapper.hasClass('section--slideshow')) {
        return setTimeout(function() {
          if ($('.slider').length === 0) {
            return DOC.off('header.transparentMenuIsUpdated');
          }
        }, 0);
      }
    });
    DOC.on('shopify:section:select', function(e) {
      var section_wrapper;
      section_wrapper = $(e.target).closest('.shopify-section');
      if (section_wrapper.hasClass('section--products')) {
        current_window = '';
        return theme.product_page.reloadProductSection();
      }
    });
    DOC.on('shopify:block:select', function(e) {
      var section_wrapper, slide_selected;
      section_wrapper = $(e.target).closest('.shopify-section');
      if (section_wrapper.hasClass('section--slideshow')) {
        slide_selected = section_wrapper.find('.slide').index(e.target);
        return $(e.target).closest('.owl-carousel').trigger('owl.jumpTo', slide_selected).trigger('owl.stop');
      }
    });
    DOC.on('shopify:section:deselect', function(e) {
      var section_wrapper, should_autoplay, slider;
      section_wrapper = $(e.target).closest('.shopify-section');
      if (section_wrapper.hasClass('section--slideshow')) {
        should_autoplay = section_wrapper.find('.slider').data('autoplay');
        if (should_autoplay === true) {
          slider = section_wrapper.find('.slides');
          return slider.trigger('owl.play', section_wrapper.find('.slider').data('rotateFrequency'));
        }
      }
    });
    theme.utils.loadJsClasses();
    return false;
  });

}).call(this);

/*=============================================
            		GreatDev
=============================================*/

$(function() {
  /**
	 *
	 * Header Search
	 *
	 */

	$('.hdr--srch-btn').on('click', function(e){

      	inputValue = $(this).parents('.hdr--srch-frm.visible').find('.hdr--srch-fld').val();
      	$(this).toggleClass('active');
        if (inputValue == undefined || inputValue.length == 0){
          e.preventDefault();
          e.stopPropagation();
          $(this).parent().toggleClass('visible');
		  $('.ch-search').toggleClass('visible');
        }
	});

  /**
	 *
	 * Instagram
	 *
	 */

	function initInstafeed() {
	  $('.instafeed--cntnr').each(function (index, el) {
	    let $el = $(this).children('.instafeed--wrap'),
	        clientID = $el.data('client-id'),
	        limit = $el.data('count');

	    if (clientID) {
	      let url = 'https://api.instagram.com/v1/users/self/media/recent/?access_token=' + clientID + '&count=' + limit;

	      $.ajax({
	        type: 'GET',
	        url: url,
	        dataType: 'jsonp',
	        success: function (data) {

	          if ( data.meta.code === 200 && data.data.length ) {
	            data = data.data;
	            $el.empty();

	            for ( let i = 0; i < data.length; i++ ) {
	              let item = '',
	                  thisMedia = data[i],
	                  url = thisMedia.images.standard_resolution.url;

	              if ( !url.indexOf("null") > -1 ) {
	                item = '<div class="instafeed--itm-prnt">' +
	              		   '<a href="' + thisMedia.link + '" target="_blank" class="instafeed--itm-inf instafeed--link">' +
	              		   '<span class="instafeed--itm-inf-lks">' + thisMedia.likes.count + '</span>' +
	              		   '<span class="instafeed--itm-inf-cmmnts">' + thisMedia.comments.count + '</span></a>' +
	                	   '<div class="instafeed--itm-wrp">' +
	                	   '<div class="instafeed--item photo">' +
	                       '<img src="' + url + '" alt="" class="instafeed--img"></div></div></div>';
	              }

	              // if ( thisMedia.videos ) {
	              //   item += '<div class="instafeed--itm-wrp">' +
	              //   	    '<div class="instafeed--item video"><a href="' + thisMedia.link + '" target="_blank" class="instafeed--link">' +
	              //           '<img src="' + url + '" alt="" class="instafeed--img"></a></div></div></div>';
	              // }

	              if ( item !== '' ) {
	                $el.append(item);
	              }
	            }
	          }
	        }
	      });
	    }
	  });
	}

	initInstafeed();

  /**
	 *
	 * Featured collection
	 *
	 */

  featured_collections_sliders = {};
  function init_featured_collection_sliders() {
    $('.featured-collection-container').each(function(){
      var section_id = $(this).parents('.shopify-section').attr('id');
      var slider_container = $(this).find('.swiper-container');

      var mySwiper = new Swiper (slider_container, {
        slidesPerView: 4,
        noSwipingClass: 'slider-disabled-on-desktop',
        autoHeight: true,
        navigation: {
          nextEl: `#${section_id} .swiper-button-next`,
          prevEl: `#${section_id} .swiper-button-prev`,
        },
        breakpoints: {
          768: {
            slidesPerView: 2,
            noSwipingClass: 'no-swiping-class'
          },
          480: {
            slidesPerView: 1
          }
        }
      })
      featured_collections_sliders[section_id] = mySwiper;
    });
  }

  init_featured_collection_sliders();

	$(document).on('shopify:section:load', function(e) {
	  let $section = $('#shopify-section-' + e.detail.sectionId);
	  if ( $section.hasClass('instafeed') ) {
	    initInstafeed();
	  }
	});
  // BEGIN Loyalty Lion code

  if (window.location.href.indexOf("account") > -1) {
    initMenu();
    loadState();
  }

  function initMenu() {
  	var elements = document.querySelectorAll("navlist__link");
    for (var i = 0; i < elements.length; i++) {
        elements[i].classList.remove('is-active');
        element.addEventListener("click", function(e) {
          e.target.classList.add('is-active');
      });
    }
  }


  function loadState() {
    var url = $(location).attr('href');
    if (url.includes('orders')) {
      setActivaState('orders');
      if (document.getElementsByClassName("order-panel")[0]) {
        document.getElementsByClassName("order-panel")[0].style.display = "block";
      }
      if (document.getElementsByClassName("order-panel")[0]) {
        document.getElementsByClassName("order-panel")[0].classList.remove("col");
      }
      if (document.getElementsByClassName("order-panel")[0]) {
        document.getElementsByClassName("order-panel")[0].classList.remove("xs12");
      }
      if (document.getElementsByClassName("order-panel")[0]) {
        document.getElementsByClassName("order-panel")[0].classList.remove("m7");
      }
    } else if (url.includes('loyalty')) {
      setActivaState('loyalty');
      document.getElementsByClassName("loyalty-panel")[0].style.display = "block";
    } else {
      setActivaState('account');
      if (document.getElementsByClassName("order-panel")[0] || document.getElementsByClassName("address-panel")[0]) {
        document.getElementsByClassName("order-panel")[0].style.display = "block";
        document.getElementsByClassName("address-panel")[0].style.display = "block";
      }
    }

  };

  function setActivaState(state) {
    var elements = document.querySelectorAll("[data-id]");

    for (var i = 0; i < elements.length; i++) {
      elements[i].classList.remove('is-active');
    }

    return document.querySelectorAll(`[data-id='${state}']`)[0].classList.add('is-active');
  }

  $("#new-address-add").on('click', function(e) {
    let $section = $('#' + e.target.id);
    if ($section.hasClass('our-story-team')) {
      initOurTeamSlider();
    }
  });

  function detectMob() {
    const toMatch = [
    /Android/i,
      /webOS/i,
      /iPhone/i,
      /iPod/i,
      /BlackBerry/i,
      /Windows Phone/i
    ];

    return toMatch.some((toMatchItem) => {
      return navigator.userAgent.match(toMatchItem);
   });

  }

  var panel = document.getElementsByClassName("adress_panel");

  if (document.getElementById("new-address-add")) {
    document.getElementById("new-address-add").addEventListener("click", function(e) {
      for (var i = 0; i < panel.length; i++) {
        panel[i].style.display = 'none';
      }
      document.getElementsByClassName("address-container")[0].style.display = "none";
      document.getElementsByClassName("cancel-address-container")[0].style.display = "block";
    });
  }

  if (document.getElementById("new-address-cancel")) {
    document.getElementById("new-address-cancel").addEventListener("click", function(e) {
      for (var i = 0; i < panel.length; i++) {
        panel[i].style.display = 'block';
      }
      if (detectMob()) {
          document.getElementsByClassName("address-container")[0].style.display = "flex";
      } else {
    	document.getElementsByClassName("address-container")[0].style.display = "block";
      }
      document.getElementsByClassName("cancel-address-container")[0].style.display = "none";
    });
  }

  if (document.getElementsByClassName("update-address-cancel")) {
    var elements = document.getElementsByClassName("update-address-cancel");

    for (var i = 0; i < elements.length; i++) {
      elements[i].addEventListener('click', function(e) {
        var parentEl = e.target.parentNode;
    	var addresses = document.getElementById("address_tables").querySelectorAll(".adress_panel");

        if (addresses.length >= 2) {
            for (var i = 0; i < parentEl.childNodes.length; i++) {
              if (detectMob()) {
                  document.getElementsByClassName("address-container")[0].style.display = "flex";
              } else {
                document.getElementsByClassName("address-container")[0].style.display = "block";
              }
              document.getElementsByClassName("editable-template-addresses__form-row")[0].classList.remove("edit");

                parentEl.style.display = "none";
                for (var i = 0; i < panel.length; i++) {
                  panel[i].style.display = 'block';
                  panel[i].classList.add('col');
                }
              }
        } else {
    		if (detectMob()) {
              document.getElementsByClassName("address-container")[0].style.display = "flex";
            } else {
              document.getElementsByClassName("address-container")[0].style.display = "block";
            }
    		document.getElementsByClassName("update-address-cancel-container")[0].style.display = "none";
    		document.getElementsByClassName("editable-template-addresses__form-row")[0].classList.remove("edit");

    		for (var i = 0; i < panel.length; i++) {
              panel[i].style.display = 'block';
              panel[i].classList.add('col');
            }
        }


        if (document.getElementById("address_tables")) {
          var parent = document.getElementById("address_tables").querySelectorAll(".adress_panel");

          for (var element = 0; element < parent.length; element++) {
            if (parent.length <= 2) {
              parent[element].setAttribute("style", "width: 47%");
            } else {
              parent[element].setAttribute("style", "width: 31%");
            }
          }
        }

      }, false);
    }
  }

  if (document.getElementsByClassName("action_edit")) {
    var elements = document.getElementsByClassName("action_edit");

    for (var i = 0; i < elements.length; i++) {
      elements[i].addEventListener('click', function(e) {
        var parent = e.target.parentNode.parentNode.parentNode.parentNode.parentNode;

        document.getElementsByClassName("editable-template-addresses__form-row")[0].classList.add("edit");

        for (var i = 0; i < panel.length; i++) {
          panel[i].style.display = 'none';
        }

        for (var i = 0; i < parent.childNodes.length; i++) {
          if (parent.childNodes[i].nextElementSibling.classList.contains("update-address-cancel-container")) {
            parent.style.display = "block";
            parent.classList.remove('col');
            parent.childNodes[i].nextElementSibling.style.display = "block";
            break;
          }
        }

        document.getElementsByClassName("address-container")[0].style.display = "none";

        if (document.getElementById("address_tables")) {
          var parent = document.getElementById("address_tables").querySelectorAll(".adress_panel");

          for (var element = 0; element < parent.length; element++) {
            parent[element].style.width = "100%";
          }
        }

	  // After update customer address return to address page
      if (document.getElementsByClassName("update-address")) {
          var updateEl = document.getElementsByClassName("update-address");
          var url =  window.location.origin;

          for (var element = 0; element < updateEl.length; element++) {
            updateEl[element].addEventListener("click", function(e) {
              e.stopPropagation();
              setTimeout(function() {
                  window.location.href = url + "/account/addresses";
              }, 500);
            });
          }
      }

      }, false);
    }

  }

  // Set same hright to Address item
  var maxHeight = 0;

  if (document.getElementById("address_tables")) {
    var parent = document.getElementById("address_tables").querySelectorAll(".adress_panel");

    for (var element = 0; element < parent.length; element++) {

      if (parent.length <= 2) {
        parent[element].setAttribute("style", "width: 47%");
      } else {
        parent[element].setAttribute("style", "width: 31%");
      }

      if (parent[element].getElementsByClassName("view_address")[0].offsetHeight > maxHeight) {
        maxHeight = parent[element].getElementsByClassName("view_address")[0].offsetHeight + 15;
      }
    }

    for (var element = 0; element < parent.length; element++) {
      parent[element].getElementsByClassName("template-addresses__panel")[0].getElementsByClassName("view_address")[0].setAttribute("style", "height:" + maxHeight + "px");
    }
  }

  // END Loyalty Lion code
});
