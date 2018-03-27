/*
 FlexSearch v0.2.48
 Copyright 2018 Thomas Wilkerling
 Released under the Apache 2.0 Licence
 https://github.com/nextapps-de/flexsearch
*/
'use strict';(function(e,v,n){var t;(t=n.define)&&t.amd?t([],function(){return v}):(t=n.modules)?t[e.toLowerCase()]=v:"undefined"!==typeof module?module.exports=v:n[e]=v})("FlexSearch",function(){function e(a){"string"===typeof a&&(a=B[a]);a||(a=x);this.id=a.id||G++;this.init(a);v(this,"index",function(){return this.a});v(this,"length",function(){return Object.keys(this.a).length})}function v(a,b,c){Object.defineProperty(a,b,{get:c})}function n(a){return new RegExp(a,"g")}function t(a,b,c){if("undefined"===
typeof c){for(c=0;c<b.length;c+=2)a=a.replace(b[c],b[c+1]);return a}return a.replace(b,c)}function z(a,b,c,d,f,p,g){if("undefined"===typeof b[c]){var h=f?(9-(g||6))*p+(g||6)*f:p;b[c]=h;h>=g&&(a=a[h+.5|0],a=a[c]||(a[c]=[]),a[a.length]=d)}return h||b[c]}function A(a,b){if(a)for(var c=Object.keys(a),d=0,f=c.length;d<f;d++){var p=c[d],g=a[p];if(g)for(var h=0,k=g.length;h<k;h++)if(g[h]===b){1===k?delete a[p]:g.splice(h,1);break}else"object"===typeof g[h]&&A(g[h],b)}}function C(a){var b=[];if(!a)return b;
for(var c=0,d=0,f=0,p="",g=a.length,h=0;h<g;h++){var k=a[h];"a"===k||"e"===k||"i"===k||"o"===k||"u"===k||"y"===k?c++:d++;" "!==k&&(p+=k);if(" "===k||c>=(8<g?2:1)&&2<=d||2<=c&&d>=(8<g?2:1)||h===g-1)p&&(b[f]&&2<p.length&&f++,b[f]=b[f]?b[f]+p:p," "===k&&f++,p=""),d=c=0}return b}function H(a,b){a=a.length-b.length;return 0>a?1:0<a?-1:0}function I(a,b){a=a.length-b.length;return 0>a?-1:0<a?1:0}function J(a,b,c){var d=[],f=[],p=a.length;if(1<p){a.sort(I);for(var g={},h=a[0],k=h.length,y=0;y<k;)g[h[y++]]=
1;for(var q,e=0,m=1;m<p;){var l=!1,n=m===p-1;f=[];h=a[m];k=h.length;for(y=-1;y<k;){var r=g[q=h[++y]];if(r===m){if(n&&(d[e++]=q,b&&e===b))return d;l=!0;g[q]=m+1}else c&&(r=f[r]||(f[r]=[]),r[r.length]=q)}if(!l&&!c)break;m++}if(c&&(b||(b=1E3),e=d.length,k=f.length,e<b&&k))for(m=k-1;0<=m;m--)if(q=f[m])for(y=0;y<q.length;y++)if(d[e++]=q[y],b&&e===b)return d}else p&&(d=a[0],b&&d.length>b&&(d=d.slice(0,b)));return d}var x={encode:"icase",mode:"ngram",g:!1,cache:!1,async:!1,l:!1,threshold:0,depth:0},B={memory:{encode:"extra",
mode:"strict",threshold:7},speed:{encode:"icase",mode:"strict",threshold:7,depth:2},match:{encode:"extra",mode:"full"},score:{encode:"extra",mode:"strict",threshold:5,depth:4},balance:{encode:"balance",mode:"ngram",threshold:6,depth:3},fastest:{encode:"icase",mode:"strict",threshold:9,depth:1}},w=[],G=0,D=n("[ -/]"),E={},F={};e.new=function(a){return new this(a)};e.create=function(a){return e.new(a)};e.registerMatcher=function(a){for(var b in a)a.hasOwnProperty(b)&&(w[w.length]=n(b),w[w.length]=a[b]);
return this};e.registerEncoder=function(a,b){u[a]=b;return this};e.registerLanguage=function(a,b){E[a]=b.filter;F[a]=b.stemmer;return this};e.encode=function(a,b){return u[a].call(u,b)};e.prototype.init=function(a){this.j=[];a||(a=x);var b=a.profile;b=b?B[b]:{};this.mode=a.mode||b.mode||this.mode||x.mode;this.threshold=a.threshold||b.threshold||this.threshold||x.threshold;this.depth=a.depth||b.depth||this.depth||x.depth;this.g=a.suggest||this.g||x.g;this.f=(b=a.encode||b.encode)&&u[b]||("function"===
typeof b?b:this.f||!1);(b=a.matcher)&&this.addMatcher(b);if(b=a.filter){b=E[b]||b;var c=this.f,d={};if(b)for(var f=0;f<b.length;f++){var p=c?c.call(u,b[f]):b[f];d[p]=String.fromCharCode(65E3-b.length+f)}this.filter=d}if(b=a.stemmer){a=F[b]||b;b=this.f;c=[];if(a){d=0;for(var g in a)a.hasOwnProperty(g)&&(f=b?b.call(u,g):g,c[d++]=n("(?=.{"+(f.length+3)+",})"+f+"$"),c[d++]=b?b.call(u,a[g]):a[g])}this.stemmer=c}this.h=[{},{},{},{},{},{},{},{},{},{}];this.c={};this.a={};this.i=!0;if("forward"===this.mode||
"reverse"===this.mode||"both"===this.mode)this.b="";return this};e.prototype.encode=function(a){a&&w.length&&(a=t(a,w));a&&this.j.length&&(a=t(a,this.j));a&&this.f&&(a=this.f.call(u,a));a&&this.stemmer&&(a=t(a,this.stemmer));return a};e.prototype.addMatcher=function(a){var b=this.j,c;for(c in a)a.hasOwnProperty(c)&&(b[b.length]=n(c),b[b.length]=a[c]);return this};e.prototype.add=function(a,b,c){if("string"===typeof b&&b&&(a||0===a))if(this.a[a]&&!c)this.update(a,b);else{b=this.encode(b);if(!b.length)return this;
c=this.mode;b="function"===typeof c?c(b):"ngram"===c?C(b):b.split(D);for(var d={_ctx:{}},f=this.threshold,p=this.depth,g=this.h,h=b.length,k=0;k<h;k++){var e=b[k];if(e){var q=e.length,n=(h-k)/h;switch(c){case "reverse":case "both":for(var m="",l=q-1;1<=l;l--)m=e[l]+m,z(g,d,m,a,(q-l)/q,n,f);case "forward":m="";for(l=0;l<q;l++)m+=e[l],z(g,d,m,a,1,n,f);break;case "full":for(l=0;l<q;l++)for(var t=(q-l)/q,r=q;r>l;r--)m=e.substring(l,r),z(g,d,m,a,t,n,f);break;default:if(l=z(g,d,e,a,1,n,f),p&&1<h&&l>=f)for(q=
d._ctx[e]||(d._ctx[e]={}),e=this.c[e]||(this.c[e]=[{},{},{},{},{},{},{},{},{},{}]),l=k-p,r=k+p+1,0>l&&(l=0),r>h&&(r=h);l<r;l++)l!==k&&z(e,q,b[l],a,0,10-(l<k?k-l:l-k),f)}}}this.a[a]="1";this.i=!1}return this};e.prototype.update=function(a,b){this.a[a]&&b&&"string"===typeof b&&(this.remove(a),this.add(a,b,!0));return this};e.prototype.remove=function(a){if(this.a[a]){for(var b=0;10>b;b++)A(this.h[b],a);this.depth&&A(this.c,a);delete this.a[a];this.i=!1}return this};e.prototype.search=function(a,b,c){var d=
[];if(a&&"object"===typeof a){c=a.callback||b;b=a.limit;var f=a.threshold;a=a.query}f=(f||this.threshold||0)|0;"function"===typeof b?(c=b,b=1E3):b||(b=1E3);if(c){var e=this;K(function(){c(e.search(a,b));e=null},1,"search-"+this.id);return null}if(!a||"string"!==typeof a)return d;if(!this.i)this.i=!0;else if("undefined"!==typeof this.b&&this.b&&0===a.indexOf(this.b))return d;var g=this.encode(a);if(!g.length)return d;var h=this.mode;g="function"===typeof h?h(g):"ngram"===h?C(g):g.split(D);h=g.length;
var k=!0,n=[],q={};if(1<h)if(this.depth){var t=!0,m=g[0];q[m]="1"}else g.sort(H);var l;if(!t||(l=this.c)[m])for(var u=t?1:0;u<h;u++){var r=g[u];if(r&&!q[r]){for(var v,x=!1,w=[],z=0,A=9;A>=f;A--)if(v=(t?l[m]:this.h)[A][r])w[z++]=v,x=!0;if(x)n[n.length]=1<z?n.concat.apply([],w):w[0];else if(!this.g){k=!1;break}q[r]="1"}m=r}else k=!1;k&&(d=J(n,b,this.g));"undefined"!==typeof this.b&&(d.length?this.b="":this.b||(this.b=a));return d};e.prototype.reset=function(){this.destroy();return this.init()};e.prototype.destroy=
function(){this.filter=this.stemmer=this.h=this.c=this.a=null;return this};var u={icase:function(a){return a.toLowerCase()},balance:function(){var a=[n("[-/]")," ",n("[^a-z0-9 ]"),"",n("\\s\\s+")," "];return function(b){b=t(b.toLowerCase(),a);for(var c="",d="",f="",e=0;e<b.length;e++){var g=b[e];if(g!==d)if(e&&"h"===g){if(f="a"===f||"e"===f||"i"===f||"o"===f||"u"===f||"y"===f,("a"===d||"e"===d||"i"===d||"o"===d||"u"===d||"y"===d)&&f||" "===d)c+=g}else c+=g;f=e===b.length-1?"":b[e+1];d=g}return c}}()},
K=null;return e}(!1),this);
