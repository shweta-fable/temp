/*! For license information please see 392.69532553.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkdist=self.webpackChunkdist||[]).push([[392],{392:(e,t,n)=>{n.r(t),n.d(t,{default:()=>u,frontmatter:()=>s});var r=n(322),o=n(784);function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){var r,o,l,c;r=e,o=t,l=n[t],c=function(e,t){if("object"!=i(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!=i(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o),(o="symbol"==i(c)?c:String(c))in r?Object.defineProperty(r,o,{value:l,enumerable:!0,configurable:!0,writable:!0}):r[o]=l})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e){return o.createElement("div",null,"Hello world seven")}var s={urlTitle:"Getting started",title:"This is the first doc",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"};function d(e){var t=c({a:"a",div:"div",h1:"h1",h2:"h2",p:"p",span:"span"},e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.h1,{id:"one",children:["ONE",(0,r.jsx)(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#one",children:(0,r.jsx)(t.span,{className:"icon icon-link"})})]}),"\n",(0,r.jsxs)(t.h2,{id:"second-heading",children:["Second heading",(0,r.jsx)(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#second-heading",children:(0,r.jsx)(t.span,{className:"icon icon-link"})})]}),"\n",(0,r.jsx)(a,{}),"\n",(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h1",{children:"Rendering Text from JSON111"}),(0,r.jsxs)("div",{children:[(0,r.jsx)("span",{children:"Background"}),(0,r.jsx)("button",{type:"button",onClick:function(){e.addToGlobalState("bg","limegreen")},children:(0,r.jsx)(t.p,{children:"Limegreen"})}),(0,r.jsx)("button",{type:"button",onClick:function(){e.addToGlobalState("bg","pink")},children:(0,r.jsx)(t.p,{children:"Pink"})})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("span",{children:"Font"}),(0,r.jsx)("button",{type:"button",onClick:function(){e.addToGlobalState("color","white")},children:(0,r.jsx)(t.p,{children:"White"})}),(0,r.jsx)("button",{type:"button",onClick:function(){e.addToGlobalState("color","purple")},children:(0,r.jsx)(t.p,{children:"purple"})})]}),(0,r.jsx)("div",{style:{display:"flex"},children:e.manifest.tree.children.filter((function(e){return"file"===e.nodeType&&".mdx"===e.ext&&e.frontmatter.title})).map((function(n,o){var i,l;return(0,r.jsxs)(t.div,{style:{border:"1px solid #ddd",borderRadius:"8px",padding:"16px",margin:"16px",maxWidth:"300px",background:"".concat(e.globalState.bg||"pink"),color:"".concat(e.globalState.color||"black")},children:[(0,r.jsx)(t.h2,{children:null===(i=n.frontmatter)||void 0===i?void 0:i.title}),(0,r.jsx)(t.p,{children:null===(l=n.frontmatter)||void 0===l?void 0:l.description})]},o)}))})]})]})}function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=(e.components||{}).wrapper;return t?(0,r.jsx)(t,c(c({},e),{},{children:(0,r.jsx)(d,c({},e))})):d(e)}},837:(e,t,n)=>{var r=n(784),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,c=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function s(e,t,n){var r,i={},s=null,d=null;for(r in void 0!==n&&(s=""+n),void 0!==t.key&&(s=""+t.key),void 0!==t.ref&&(d=t.ref),t)l.call(t,r)&&!a.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:o,type:e,key:s,ref:d,props:i,_owner:c.current}}t.Fragment=i,t.jsx=s,t.jsxs=s},322:(e,t,n)=>{e.exports=n(837)}}]);