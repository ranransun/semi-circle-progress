/*! For license information please see index.js.LICENSE.txt */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["semi-circle-progress"]=t():e["semi-circle-progress"]=t()}(self,(()=>(()=>{"use strict";var e={408:(e,t)=>{var r=Symbol.for("react.element"),o=(Symbol.for("react.portal"),Symbol.for("react.fragment")),n=(Symbol.for("react.strict_mode"),Symbol.for("react.profiler"),Symbol.for("react.provider"),Symbol.for("react.context"),Symbol.for("react.forward_ref"),Symbol.for("react.suspense"),Symbol.for("react.memo"),Symbol.for("react.lazy"),Symbol.iterator,{isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}}),a=Object.assign,c={};function i(e,t,r){this.props=e,this.context=t,this.refs=c,this.updater=r||n}function s(){}function f(e,t,r){this.props=e,this.context=t,this.refs=c,this.updater=r||n}i.prototype.isReactComponent={},i.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},i.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},s.prototype=i.prototype;var l=f.prototype=new s;l.constructor=f,a(l,i.prototype),l.isPureReactComponent=!0;Array.isArray;var u=Object.prototype.hasOwnProperty,p={current:null},y={key:!0,ref:!0,__self:!0,__source:!0};t.Fragment=o,t.createElement=function(e,t,o){var n,a={},c=null,i=null;if(null!=t)for(n in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(c=""+t.key),t)u.call(t,n)&&!y.hasOwnProperty(n)&&(a[n]=t[n]);var s=arguments.length-2;if(1===s)a.children=o;else if(1<s){for(var f=Array(s),l=0;l<s;l++)f[l]=arguments[l+2];a.children=f}if(e&&e.defaultProps)for(n in s=e.defaultProps)void 0===a[n]&&(a[n]=s[n]);return{$$typeof:r,type:e,key:c,ref:i,props:a,_owner:p.current}}},294:(e,t,r)=>{e.exports=r(408)}},t={};function r(o){var n=t[o];if(void 0!==n)return n.exports;var a=t[o]={exports:{}};return e[o](a,a.exports,r),a.exports}r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var o={};return(()=>{r.r(o),r.d(o,{SemiCircleProgress:()=>t,default:()=>n});var e=r(294),t=function(t){var r=t.config,o=function(t,r,o){var n=r.position,a=n.x,c=n.y,i=r.radius,s=void 0===i?10:i,f=r.strokeBarColor,l=void 0===f?[{offset:"0%",color:"#FF7529"},{offset:"5%",color:"#FFAC47"},{offset:"100%",color:"#FF7529"}]:f,u=r.strokeBackgroundColor,p=void 0===u?"#f4f4f4":u,y=r.strokeWidth,d=void 0===y?14:y,m=r.strokeLinecap,b=void 0===m?"round":m,v=r.percent,h=void 0===v?0:v,g=Number((Math.PI*s).toFixed(0)),k=h*g,S="back"===t?g:"".concat(k," ").concat(g),x="round"!==b?b:"back"===t||k>0?"round":"butt",F=Array.isArray(p)?"url(#back-linear-gradient_".concat(o||0,")"):p,A=Array.isArray(l)?"url(#front-linear-gradient_".concat(o||0,")"):l;return console.log("===================================="),console.log(r,k),console.log("===================================="),e.createElement("circle",{cx:a,cy:c,r:s,stroke:"back"===t?F:A,strokeWidth:d,fill:"none",strokeDasharray:S,strokeDashoffset:-g,strokeLinecap:x})},n=function(t,r){if(t){var n=t.strokeBackgroundColor,a=t.strokeBarColor,c=void 0===a?[{offset:"0%",color:"#FF7529"},{offset:"5%",color:"#FFAC47"},{offset:"100%",color:"#FF7529"}]:a;return e.createElement(e.Fragment,null,Array.isArray(n)&&e.createElement("defs",null,e.createElement("linearGradient",{id:"back-linear-gradient_".concat(r||0),x1:"0%",y1:"0%",x2:"100%",y2:"0%"},n.map((function(t){return e.createElement("stop",{key:t.offset,offset:t.offset,style:{stopColor:t.color,stopOpacity:1}})})))),Array.isArray(c)&&e.createElement("defs",null,e.createElement("linearGradient",{id:"front-linear-gradient_".concat(r||0),x1:"0%",y1:"0%",x2:"100%",y2:"0%"},c.map((function(t){return e.createElement("stop",{key:t.offset,offset:t.offset,style:{stopColor:t.color,stopOpacity:1}})})))),o("back",t,r),o("front",t,r),");")}console.error("未正确配置组件 ")};return e.createElement("svg",{width:450,height:200,style:{overflow:"unset"}},Array.isArray(r)?function(t){return e.createElement(e.Fragment,null,t.map((function(t,r){return e.createElement(e.Fragment,{key:r},n(t,r))})))}(r):n(r))};const n=t})(),o})()));