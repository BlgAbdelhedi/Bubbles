parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"oNAF":[function(require,module,exports) {
var i,t,o=document.getElementById("canvas"),a=o.getContext("2d");o.height=window.innerHeight,o.width=window.innerWidth;var h=o.width,n=o.height,r=35;function e(o,e,d){var c=Math.floor(4*Math.random()),u=Math.floor(2*Math.random());this.xCoordinate=o,this.yCoordinate=e,this.radius=d,this.color=s[c],this.xVelocity=1==u?1*-Math.random():1*Math.random(),this.yVelocity=1==u?1*-Math.random():1*Math.random(),this.update=function(){this.xCoordinate+=this.xVelocity;var o=i-this.xCoordinate,a=t-this.yCoordinate,e=d;this.yCoordinate+=this.yVelocity,(this.xCoordinate+this.radius>h||this.xCoordinate-this.radius<0)&&(this.xVelocity=-this.xVelocity),(this.yCoordinate+this.radius>n||this.yCoordinate-this.radius<0)&&(this.yVelocity=-this.yVelocity),o<50&&o>-50&&this.radius<r&&a<50&&a>-50?this.radius+=2:(o>=50&&e<this.radius||o<=-50&&e<this.radius||a>=50&&e<this.radius||a<=-50&&e<this.radius)&&(this.radius-=2),this.draw()},this.draw=function(){a.beginPath(),a.arc(this.xCoordinate,this.yCoordinate,Math.abs(this.radius),0,2*Math.PI),a.fillStyle=this.color,a.fill()}}o.onmousemove=function(o){i=o.clientX,t=o.clientY},window.addEventListener("resize",function(){o.width=window.innerWidth,o.height=window.innerHeight});for(var s=["#fe6d73","#ffcb77","#17c3b2","#227c9d"],d=new e(30,80,10),c=[],u=0;u<1250;u++){var l=Math.random()*h,y=Math.random()*n,w=5*Math.random();c.push(new e(l,y,w))}function f(){a.clearRect(0,0,h,n),d.update();for(var i=0;i<c.length;i++)c[i].update();window.requestAnimationFrame(f)}f();
},{}],"Tdrx":[function(require,module,exports) {

},{}],"uBxZ":[function(require,module,exports) {
"use strict";require("./bubbles"),require("./assets/styles/index.scss");
},{"./bubbles":"oNAF","./assets/styles/index.scss":"Tdrx"}]},{},["uBxZ"], null)