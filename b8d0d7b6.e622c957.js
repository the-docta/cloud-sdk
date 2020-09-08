(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{121:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(2),a=n(6),o=(n(0),n(155)),i={id:"migrate-to-open-source-version-of-cloud-sdk-for-javascript-typescript",title:"Migrate to Open Source version of SDK for JS/TS",sidebar_label:"Migrate to Open Source",description:"We open sourced SAP Cloud SDK for JS/TS in the beginning of 2020. This guide will help you with migration to the Open Source version.",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk"]},c={unversionedId:"js/guides/migrate-to-open-source-version-of-cloud-sdk-for-javascript-typescript",id:"js/guides/migrate-to-open-source-version-of-cloud-sdk-for-javascript-typescript",isDocsHomePage:!1,title:"Migrate to Open Source version of SDK for JS/TS",description:"We open sourced SAP Cloud SDK for JS/TS in the beginning of 2020. This guide will help you with migration to the Open Source version.",source:"@site/docs/js/guides/migrate-to-os.md",slug:"/js/guides/migrate-to-open-source-version-of-cloud-sdk-for-javascript-typescript",permalink:"/cloud-sdk/docs/js/guides/migrate-to-open-source-version-of-cloud-sdk-for-javascript-typescript",editUrl:"https://github.com/SAP/cloud-sdk/edit/documentation/docs/js/guides/migrate-to-os.md",version:"current",lastUpdatedBy:"Artem Kovalov",lastUpdatedAt:1592306343,sidebar_label:"Migrate to Open Source",sidebar:"someSidebar",previous:{title:"Proxies in the SAP Cloud SDK for JavaScript / TypeScript",permalink:"/cloud-sdk/docs/js/features/connectivity/proxy-js-sdk"},next:{title:"Connecting to external systems from the Business Application Studio (BAS) with the SAP Cloud SDK for JavaScript / TypeScript",permalink:"/cloud-sdk/docs/js/guides/bas-external-system"}},s=[{value:"Switch to Open Source version",id:"switch-to-open-source-version",children:[]},{value:"What about support and future development?",id:"what-about-support-and-future-development",children:[]},{value:"How can I report an issue or make a feature request?",id:"how-can-i-report-an-issue-or-make-a-feature-request",children:[]},{value:"Can I contribute?",id:"can-i-contribute",children:[]}],l={rightToc:s};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"switch-to-open-source-version"},"Switch to Open Source version"),Object(o.b)("p",null," Some packages of the SAP Cloud SDK for JavaScript have been migrated to ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/SAP/cloud-sdk"}),"github.com"),".\nAs a result, the packages were renamed as shown in the table below. No Breaking changes were made. Please use the new packages from now on."),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"old package name"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"new package name"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"@sap/cloud-sdk-util"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"@sap-cloud-sdk/util")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"@sap/cloud-sdk-analytics"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"@sap-cloud-sdk/analytics")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"@sap/cloud-sdk-core"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"@sap-cloud-sdk/core")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"@sap/cloud-sdk-generator"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"@sap-cloud-sdk/generator")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"@sap/cloud-sdk-test-util"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"@sap-cloud-sdk/test-util")))),Object(o.b)("h5",{id:"how-to-use-the-open-source-version"},"How to use the Open Source version"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Search for all your ",Object(o.b)("inlineCode",{parentName:"li"},"dependencies"),"/",Object(o.b)("inlineCode",{parentName:"li"},"devDependencies"),"/",Object(o.b)("inlineCode",{parentName:"li"},"peerDependencies")," in your ",Object(o.b)("inlineCode",{parentName:"li"},"package.json"),"."),Object(o.b)("li",{parentName:"ol"},"Replace the old package name e.g., ",Object(o.b)("inlineCode",{parentName:"li"},"@sap/cloud-sdk-core")," with the new one  e. g.",Object(o.b)("inlineCode",{parentName:"li"},"@sap-cloud-sdk/core"),"."),Object(o.b)("li",{parentName:"ol"},"Use a stable version of the SDK e.g., ",Object(o.b)("inlineCode",{parentName:"li"},"^1.18.0"),"."),Object(o.b)("li",{parentName:"ol"},"Delete your ",Object(o.b)("inlineCode",{parentName:"li"},"node_modules")," and the ",Object(o.b)("inlineCode",{parentName:"li"},"package-lock.json"),"."),Object(o.b)("li",{parentName:"ol"},"Install your dependencies, run: ",Object(o.b)("inlineCode",{parentName:"li"},"npm i"),"."),Object(o.b)("li",{parentName:"ol"},"Search your source code for references to the old packages (e. g. in import statements) and replace them with the new names.")),Object(o.b)("h2",{id:"what-about-support-and-future-development"},"What about support and future development?"),Object(o.b)("p",null,"SAP Cloud SDK team fully maintains the Open Source version which is the only one existing. We continue developing and releasing new functionality as well as supporting developers and fixing found bugs."),Object(o.b)("h2",{id:"how-can-i-report-an-issue-or-make-a-feature-request"},"How can I report an issue or make a feature request?"),Object(o.b)("p",null,"Please, create and issue in our ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/SAP/cloud-sdk/issues"}),"Github repository"),"."),Object(o.b)("h2",{id:"can-i-contribute"},"Can I contribute?"),Object(o.b)("p",null,"We are happily accepting contributions via Pull Requests on our ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/SAP/cloud-sdk"}),"Github repository"),"."))}u.isMDXComponent=!0},155:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),b=r,m=p["".concat(i,".").concat(b)]||p[b]||d[b]||o;return n?a.a.createElement(m,c(c({ref:t},l),{},{components:n})):a.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);