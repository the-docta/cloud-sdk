(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{111:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return u})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(1),o=n(6),c=(n(0),n(163)),a=n(188),i={id:"api-documentation",title:"Cloud SDK API Documentation",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"API Documentation (JSDoc)",description:"Check our generated API Documentation to discover SDK capabilities via code",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk"],image:null},u={id:"js/api-documentation",title:"Cloud SDK API Documentation",description:"Check our generated API Documentation to discover SDK capabilities via code",source:"@site/docs/js/api-documentation.md",permalink:"/cloud-sdk/docs/js/api-documentation",lastUpdatedBy:"Artem Kovalov",lastUpdatedAt:1587312889,sidebar_label:"API Documentation (JSDoc)",sidebar:"someSidebar",previous:{title:"Getting started - SDK for JavaScript",permalink:"/cloud-sdk/docs/js/getting-started"},next:{title:"CI/CD getting started",permalink:"/cloud-sdk/docs/devops/getting-started"}},s=[{value:"JSDoc - Cloud SDK",id:"jsdoc---cloud-sdk",children:[{value:"API Version",id:"api-version",children:[]}]}],d={rightToc:s};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"jsdoc---cloud-sdk"},"JSDoc - Cloud SDK"),Object(c.b)("h3",{id:"api-version"},"API Version"),Object(c.b)(a.a,{mdxType:"ApiReleaseList"}))}l.isMDXComponent=!0},163:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),d=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},l=function(e){var t=d(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,a=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),l=d(n),f=r,b=l["".concat(a,".").concat(f)]||l[f]||p[f]||c;return n?o.a.createElement(b,i({ref:t},s,{components:n})):o.a.createElement(b,i({ref:t},s))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,a=new Array(c);a[0]=f;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var s=2;s<c;s++)a[s]=n[s];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},164:function(e,t,n){"use strict";var r=n(0),o=n(35);t.a=function(){return Object(r.useContext)(o.a)}},165:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(164);function o(e){const{siteConfig:t}=Object(r.a)(),{baseUrl:n="/"}=t||{};if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?n+e.slice(1):n+e}},167:function(e,t,n){"use strict";var r=n(1),o=n(0),c=n.n(o),a=n(19),i=n(169),u=n(13),s=n.n(u);t.a=function(e){const{to:t,href:n}=e,u=t||n,d=Object(i.a)(u),l=Object(o.useRef)(!1),p=s.a.canUseIntersectionObserver;let f;return Object(o.useEffect)(()=>(!p&&d&&window.docusaurus.prefetch(u),()=>{p&&f&&f.disconnect()}),[u,p,d]),u&&d?c.a.createElement(a.b,Object(r.a)({},e,{onMouseEnter:()=>{l.current||(window.docusaurus.preload(u),l.current=!0)},innerRef:e=>{var t,n;p&&e&&d&&(t=e,n=()=>{window.docusaurus.prefetch(u)},f=new window.IntersectionObserver(e=>{e.forEach(e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(f.unobserve(t),f.disconnect(),n())})}),f.observe(t))},to:u})):c.a.createElement("a",Object(r.a)({},e,{href:u}))}},169:function(e,t,n){"use strict";function r(e){return!1===/^(https?:|\/\/)/.test(e)}n.d(t,"a",(function(){return r}))},188:function(e,t,n){"use strict";var r=n(0),o=n.n(r),c=(n(167),n(165)),a=["1.19.0","1.18.1","1.18.0"];t.a=function(){return o.a.createElement("ul",null,a.map(e=>o.a.createElement("li",{key:`${e}`},o.a.createElement("a",{href:Object(c.a)(`api/${e}/`)},`${e}`))))}}}]);