(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{114:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return i})),o.d(t,"metadata",(function(){return c})),o.d(t,"rightToc",(function(){return s})),o.d(t,"default",(function(){return d}));var a=o(2),r=o(6),n=(o(0),o(185)),i={id:"video-tutorial-about-connectivity--for-odata-with-sap-cloudsdk-for-java",title:"Video tutorial: Generate your type-safe OData client with SAP Cloud SDK for Java",sidebar_label:"Destinations and Cloud Connector",description:"You will learn how to generate type-safe OData client with Cloud SDK for Java and learn about consuming Workflow service via its REST API on SAP Cloud Platform",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk"]},c={unversionedId:"java/video/video-tutorial-about-connectivity--for-odata-with-sap-cloudsdk-for-java",id:"java/video/video-tutorial-about-connectivity--for-odata-with-sap-cloudsdk-for-java",isDocsHomePage:!1,title:"Video tutorial: Generate your type-safe OData client with SAP Cloud SDK for Java",description:"You will learn how to generate type-safe OData client with Cloud SDK for Java and learn about consuming Workflow service via its REST API on SAP Cloud Platform",source:"@site/docs/java/video/connectivity-service.mdx",slug:"/java/video/video-tutorial-about-connectivity--for-odata-with-sap-cloudsdk-for-java",permalink:"/cloud-sdk/docs/java/video/video-tutorial-about-connectivity--for-odata-with-sap-cloudsdk-for-java",editUrl:"https://github.com/SAP/cloud-sdk/edit/documentation/docs/java/video/connectivity-service.mdx",version:"current",lastUpdatedBy:"Frank Essenberger",lastUpdatedAt:1600064950,sidebar_label:"Destinations and Cloud Connector",sidebar:"someSidebar",previous:{title:"Video tutorial: Generate your type-safe OData client with SAP Cloud SDK for Java",permalink:"/cloud-sdk/docs/java/video/video-tutorial-about-type-safe-client-generator-for-odata-with-sap-cloudsdk-for-java"},next:{title:"Video tutorial: Use OData v4 Type-safe client for Java",permalink:"/cloud-sdk/docs/java/video/video-tutorial-about-calling-odata-v4-services-via-type-safe-client"}},s=[{value:"Looking for more?",id:"looking-for-more",children:[]}],l={rightToc:s};function d(e){var t=e.components,o=Object(r.a)(e,["components"]);return Object(n.b)("wrapper",Object(a.a)({},l,o,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,"Cloud Native applications are no piece of cake when you have to connect to ",Object(n.b)("strong",{parentName:"p"},"On Premise")," systems and deliver Apps or extensions on top of that.\nWell, in SAP Cloud SDK for Java we think otherwise!\nTo prove it we provide convenient abstractions over destinations to let you seamlessly connect to your ",Object(n.b)("strong",{parentName:"p"},"On Premise")," system from your cloud app.\nWhat to know how?\nWatch this comprehensive video tutorial by ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.youtube.com/channel/UCkzNZP9fzLxRyhnGT2ziSRw"}),"Max Streifeneder")," and check our docs on ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"../features/connectivity/sdk-connectivity-destination-service"}),"connectivity")),Object(n.b)("div",{class:"sdk-video-container"},Object(n.b)("iframe",{class:"sdk-video",src:"https://www.youtube.com/embed/Ky1R0Yq-zKg",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),Object(n.b)("h2",{id:"looking-for-more"},"Looking for more?"),Object(n.b)("p",null,"Check out ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.youtube.com/channel/UCkzNZP9fzLxRyhnGT2ziSRw"}),"Max's channel")," for other videos on Cloud SDK and other SAP technologies. He speaks easy about difficult enterprise software topics and helps to navigate vast SAP Cloud ecosystem to help you deliver beautiful Apps and Extensions for S/4HANA and other popular SAP products."))}d.isMDXComponent=!0},185:function(e,t,o){"use strict";o.d(t,"a",(function(){return u})),o.d(t,"b",(function(){return v}));var a=o(0),r=o.n(a);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function c(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,a,r=function(e,t){if(null==e)return{};var o,a,r={},n=Object.keys(e);for(a=0;a<n.length;a++)o=n[a],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)o=n[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=r.a.createContext({}),d=function(e){var t=r.a.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):c(c({},t),e)),o},u=function(e){var t=d(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},f=r.a.forwardRef((function(e,t){var o=e.components,a=e.mdxType,n=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=d(o),f=a,v=u["".concat(i,".").concat(f)]||u[f]||p[f]||n;return o?r.a.createElement(v,c(c({ref:t},l),{},{components:o})):r.a.createElement(v,c({ref:t},l))}));function v(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=o.length,i=new Array(n);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<n;l++)i[l]=o[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,o)}f.displayName="MDXCreateElement"}}]);