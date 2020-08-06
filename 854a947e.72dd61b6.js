(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{131:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return p})),r.d(t,"metadata",(function(){return f})),r.d(t,"rightToc",(function(){return b})),r.d(t,"default",(function(){return v}));var n=r(2),o=r(6),a=r(0),i=r.n(a),c=r(136),s=r(139),u=["1.26.1","1.26.0","1.25.0","1.24.1","1.24.0","1.23.0","1.22.0","1.21.2","1.21.1","1.21.0","1.20.1","1.20.0","1.19.0","1.18.1","1.18.0"],l=u;var d=function(){return i.a.createElement("ul",null,l.map((function(e,t){return i.a.createElement("li",{key:""+e},i.a.createElement("a",{href:Object(s.a)("api/"+e+"/")},""+e),t?"":i.a.createElement("strong",null,i.a.createElement("em",null," - latest ")))})))},p={id:"api-reference-js-ts",title:"JavaScript/TypeScript API Reference",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"JSDoc API reference",description:"Check our generated API Documentation to discover SDK capabilities via code",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk"],image:null},f={unversionedId:"js/api-reference-js-ts",id:"js/api-reference-js-ts",isDocsHomePage:!1,title:"JavaScript/TypeScript API Reference",description:"Check our generated API Documentation to discover SDK capabilities via code",source:"@site/docs/js/api-reference.md",permalink:"/cloud-sdk/docs/js/api-reference-js-ts",editUrl:"https://github.com/SAP/cloud-sdk/edit/documentation/docs/js/api-reference.md",lastUpdatedBy:"Henning Heitk\xf6tter",lastUpdatedAt:1593844622,sidebar_label:"JSDoc API reference",sidebar:"someSidebar",previous:{title:"Migrate to Open Source version of SDK for JS/TS",permalink:"/cloud-sdk/docs/js/guides/migrate-to-open-source-version-of-cloud-sdk-for-javascript-typescript"},next:{title:"Release notes - SDK for JavaScript and Typescript",permalink:"/cloud-sdk/docs/js/release-notes-sap-cloud-sdk-for-javascript-and-typescript"}},b=[{value:"SDK Versions",id:"sdk-versions",children:[]},{value:"See also",id:"see-also",children:[]}],m={rightToc:b};function v(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},m,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"The SAP Cloud SDK for JavaScript and TypeScript consists of multiple libraries to enable you to write side-by-side\nextensions on SAP Cloud Platform. Check ",Object(c.b)("inlineCode",{parentName:"p"},"JSDoc"),"API documentation."),Object(c.b)("h2",{id:"sdk-versions"},"SDK Versions"),Object(c.b)(d,{mdxType:"ApiReleaseList"}),Object(c.b)("h2",{id:"see-also"},"See also"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/SAP/cloud-sdk/releases"}),"All release notes since version 1.18.0")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"https://help.sap.com/doc/2324e9c3b28748a4ae2ad08166d77675/1.0/en-US/js-index.html"}),"Older release notes up to version 1.17.2")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"getting-started"}),"Getting Started"))))}v.isMDXComponent=!0},136:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return b}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=o.a.createContext({}),l=function(e){var t=o.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},d=function(e){var t=l(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(r),f=n,b=d["".concat(i,".").concat(f)]||d[f]||p[f]||a;return r?o.a.createElement(b,c(c({ref:t},u),{},{components:r})):o.a.createElement(b,c({ref:t},u))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var u=2;u<a;u++)i[u]=r[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},137:function(e,t,r){"use strict";var n=r(0),o=r(19);t.a=function(){var e=Object(n.useContext)(o.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},139:function(e,t,r){"use strict";r.d(t,"b",(function(){return a})),r.d(t,"a",(function(){return i}));var n=r(137),o=r(140);function a(){var e=Object(n.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,r=void 0===t?"/":t,a=e.url;return{withBaseUrl:function(e,t){return function(e,t,r,n){var a=void 0===n?{}:n,i=a.forcePrependBaseUrl,c=void 0!==i&&i,s=a.absolute,u=void 0!==s&&s;if(!r)return r;if(r.startsWith("#"))return r;if(Object(o.b)(r))return r;if(c)return t+r;var l=!r.startsWith(t)?t+r.replace(/^\//,""):r;return u?e+l:l}(a,r,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,a().withBaseUrl)(e,t)}},140:function(e,t,r){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!n(e)}r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return o}))}}]);