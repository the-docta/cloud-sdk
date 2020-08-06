(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{107:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return d})),a.d(t,"default",(function(){return u}));var n=a(2),r=a(6),o=(a(0),a(136)),i=a(143),c=a(144),s={id:"getting-started",title:"Getting started",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Getting started",description:"SAP Cloud SDK is the simplest and fastest way to extend SAP services and applications in the cloud.",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk"],image:null},l={unversionedId:"overview/getting-started",id:"overview/getting-started",isDocsHomePage:!1,title:"Getting started",description:"SAP Cloud SDK is the simplest and fastest way to extend SAP services and applications in the cloud.",source:"@site/docs/overview/getting-started.md",permalink:"/cloud-sdk/docs/overview/getting-started",editUrl:"https://github.com/SAP/cloud-sdk/edit/documentation/docs/overview/getting-started.md",lastUpdatedBy:"Artem Kovalov",lastUpdatedAt:1596745631,sidebar_label:"Getting started",sidebar:"someSidebar",previous:{title:"About SAP Cloud SDK",permalink:"/cloud-sdk/docs/overview/about"},next:{title:"Benefits",permalink:"/cloud-sdk/docs/overview/benefits"}},d=[{value:"Create your first App",id:"create-your-first-app",children:[]},{value:"Hello World",id:"hello-world",children:[{value:"Getting started - JavaScript",id:"getting-started---javascript",children:[]},{value:"Getting started - Java",id:"getting-started---java",children:[]}]}],p={rightToc:d};function u(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"create-your-first-app"},"Create your first App"),Object(o.b)("p",null,"You can choose between ",Object(o.b)("inlineCode",{parentName:"p"},"JavaScript")," and ",Object(o.b)("inlineCode",{parentName:"p"},"Java")," when developing with SAP Cloud SDK.\nCheck these two examples to initialize an application for your favorite development environment."),Object(o.b)(i.a,{defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"Java",value:"java"}],mdxType:"Tabs"},Object(o.b)(c.a,{value:"js",mdxType:"TabItem"},Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Make sure you have the latest stable version of ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://nodejs.org/en/download/"}),"Node.js")," and ",Object(o.b)("inlineCode",{parentName:"p"},"npm")," installed.\nThis example assumes you're running Mac or Linux. ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"../js/getting-started"}),"Check detailed getting started guide for your platform")))),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"npm install -g @sap-cloud-sdk/cli\n\nsap-cloud-sdk init my-sdk-project\n\n+---------------------------------------------------------------+\n| \u2705 Init finished successfully.                                |\n|                                                               |\n| \ud83d\ude80 Next steps:                                                |\n| - Run the application locally (`npm run start:dev`)           |\n| - Deploy your application (`npm run deploy`)                  |\n|                                                               |\n| \ud83d\udd28 Consider setting up Jenkins to continuously build your app |\n| Use `sap-cloud-sdk add-cx-server` to create the setup script  |\n+---------------------------------------------------------------+\n"))),Object(o.b)(c.a,{value:"java",mdxType:"TabItem"},Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Make sure your have ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://adoptopenjdk.net/"}),"Java 8")," and ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://maven.apache.org/install.html"}),"maven"),"  installed.\nThis example assumes you're running Mac or Linux. ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"../java/getting-started"}),"Check detailed getting started guide for your platform")))),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),'mvn archetype:generate "-DarchetypeGroupId=com.sap.cloud.sdk.archetypes"\\\n"-DarchetypeArtifactId=scp-cf-tomee" "-DarchetypeVersion=RELEASE"\n')))),Object(o.b)("h2",{id:"hello-world"},"Hello World"),Object(o.b)("p",null,"This example is not a classical ",Object(o.b)("inlineCode",{parentName:"p"},"Hello World")," of course. There is much more to it than just bootstrapping a starter\napplication. Cloud SDK is a complex and flexible library addressing a vast range of use-cases. Each of them would\nrequire a ",Object(o.b)("inlineCode",{parentName:"p"},"Hello World")," of its own, and we have them!"),Object(o.b)("p",null,"To continue discovering SDK for your favorite programming language check respective getting started\nguides and comprehensive tutorials for multiple use cases."),Object(o.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"There is no full feature parity between JavaScript  and Java libraries.\nPlease, review respective documentation sections to find out more."))),Object(o.b)("h3",{id:"getting-started---javascript"},"Getting started - JavaScript"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"../js/getting-started"}),"A comprehensive getting started guide for JavaScript developers")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://developers.sap.com/tutorial-navigator.html?tag=products:technology-platform/sap-cloud-sdk/sap-cloud-sdk&tag=topic:javascript"}),"Tutorials covering Cloud SDK for JavaScript on SAP Developers portal"))),Object(o.b)("h3",{id:"getting-started---java"},"Getting started - Java"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"../java/getting-started"}),"A comprehensive getting started guide for Java developers")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://developers.sap.com/tutorial-navigator.html?tag=products:technology-platform/sap-cloud-sdk/sap-cloud-sdk&tag=topic:java"}),"Tutorials covering Cloud SDK for Java on SAP Developers portal"))))}u.isMDXComponent=!0},136:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),d=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},p=function(e){var t=d(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=d(a),b=n,m=p["".concat(i,".").concat(b)]||p[b]||u[b]||o;return a?r.a.createElement(m,c(c({ref:t},l),{},{components:a})):r.a.createElement(m,c({ref:t},l))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<o;l++)i[l]=a[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"},138:function(e,t,a){"use strict";function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}},141:function(e,t,a){"use strict";var n=a(0),r=Object(n.createContext)(void 0);t.a=r},142:function(e,t,a){"use strict";var n=a(0),r=a(141);t.a=function(){var e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},143:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(142),i=a(138),c=a(47),s=a.n(c),l=37,d=39;t.a=function(e){var t=e.block,a=e.children,c=e.defaultValue,p=e.values,u=e.groupId,b=Object(o.a)(),m=b.tabGroupChoices,v=b.setTabGroupChoices,f=Object(n.useState)(c),j=f[0],g=f[1],h=Object(n.useState)(!1),O=h[0],y=h[1];if(null!=u){var w=m[u];null!=w&&w!==j&&p.some((function(e){return e.value===w}))&&g(w)}var N=function(e){g(e),null!=u&&v(u,e)},k=[],x=function(e){e.metaKey||e.altKey||e.ctrlKey||y(!0)},C=function(){y(!1)};return Object(n.useEffect)((function(){window.addEventListener("keydown",x),window.addEventListener("mousedown",C)}),[]),r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":t})},p.map((function(e){var t=e.value,a=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":j===t,className:Object(i.a)("tabs__item",s.a.tabItem,{"tabs__item--active":j===t}),style:O?{}:{outline:"none"},key:t,ref:function(e){return k.push(e)},onKeyDown:function(e){!function(e,t,a){switch(a.keyCode){case d:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case l:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}}(k,e.target,e),x(e)},onFocus:function(){return N(t)},onClick:function(){N(t),y(!1)},onPointerDown:function(){return y(!1)}},a)}))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},n.Children.toArray(a).filter((function(e){return e.props.value===j}))[0]))}},144:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(e){return r.a.createElement("div",null,e.children)}}}]);