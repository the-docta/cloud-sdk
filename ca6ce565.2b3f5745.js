(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{120:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return d}));var o=a(2),r=a(6),n=(a(0),a(141)),c={id:"cloud-application-model",title:"CAP - Cloud Application Model",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"CAP (Cloud Application Model)",description:null},i={unversionedId:"related-projects/cloud-application-model",id:"related-projects/cloud-application-model",isDocsHomePage:!1,title:"CAP - Cloud Application Model",description:"Relation to SAP Cloud SDK",source:"@site/docs/related-projects/cap.md",permalink:"/cloud-sdk/docs/related-projects/cloud-application-model",editUrl:"https://github.com/SAP/cloud-sdk/edit/documentation/docs/related-projects/cap.md",lastUpdatedBy:"Artem Kovalov",lastUpdatedAt:1590045867,sidebar_label:"CAP (Cloud Application Model)",sidebar:"someSidebar",previous:{title:"Update Call for SAP Community",permalink:"/cloud-sdk/docs/community/community-call"},next:{title:"XSUAA Programming model",permalink:"/cloud-sdk/docs/related-projects/sap-xsuaa-security-library-for-javascript-and-java"}},l=[{value:"Relation to SAP Cloud SDK",id:"relation-to-sap-cloud-sdk",children:[]},{value:"About CAP",id:"about-cap",children:[]},{value:"CAP is recommended for",id:"cap-is-recommended-for",children:[]},{value:"Learn more",id:"learn-more",children:[]}],p={rightToc:l};function d(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(n.b)("wrapper",Object(o.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h2",{id:"relation-to-sap-cloud-sdk"},"Relation to SAP Cloud SDK"),Object(n.b)("p",null,Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"https://cap.cloud.sap/docs/"}),"SAP Cloud Application Programming Model")," is widely used to build cloud services within SAP."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"CAP uses some of Cloud SDK features to deliver the best user experience out of the box"),Object(n.b)("li",{parentName:"ul"},"Pipeline"),Object(n.b)("li",{parentName:"ul"},"Resilience"),Object(n.b)("li",{parentName:"ul"},"OData V4 helpers"),Object(n.b)("li",{parentName:"ul"},"Cloud Foundry abstractions"),Object(n.b)("li",{parentName:"ul"},"Un-typed Odata client"),Object(n.b)("li",{parentName:"ul"},"You can consume CAP based services with SAP Cloud SDK by generating a compatible client"),Object(n.b)("li",{parentName:"ul"},"CAP and Cloud SDK can be used together to leverage benefits from both platforms"),Object(n.b)("li",{parentName:"ul"},"CAP and Cloud SDK have many features in common as well as unique ones. Feel free to approach us to get a recommendation for your specific project.")),Object(n.b)("h2",{id:"about-cap"},"About CAP"),Object(n.b)("p",null,"The SAP Cloud Application Programming Model is an ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"https://cap.cloud.sap/docs/about/#design-principles"}),"open and opinionated"),", ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"https://cap.cloud.sap/docs/about/#design-principles"}),"framework of languages, libraries, and tools")," for building enterprise-grade services and applications. It guides developers through proven ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"https://cap.cloud.sap/docs/about/#best-practices"}),"best practices")," and a great wealth of ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"https://cap.cloud.sap/docs/about/features"}),"out-of-the-box solutions")," for recurring tasks."),Object(n.b)("p",null,"CAP-based projects benefit from a primary ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"https://cap.cloud.sap/docs/about/#domain-models"}),"focus on domain"),". Instead of delving into overly technical disciplines, we focus on ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"https://cap.cloud.sap/docs/about/#grow-as-you-go"}),"accelerated development"),", and ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"https://cap.cloud.sap/docs/about/#platform-agnostic"}),"safeguarding investments")," in a world of rapidly changing cloud technologies."),Object(n.b)("p",null,Object(n.b)("img",Object(o.a)({parentName:"p"},{src:"https://cap.cloud.sap/docs/assets/overview.png",alt:"CAP project diagram"}))),Object(n.b)("h2",{id:"cap-is-recommended-for"},"CAP is recommended for"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Building APIs (OData, REST, Messaging)"),Object(n.b)("li",{parentName:"ul"},"Consuming and emitting Enterprise Messages for S/4HANA")),Object(n.b)("h2",{id:"learn-more"},"Learn more"),Object(n.b)("p",null,"Learn more about CAP from the ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"https://cap.cloud.sap/docs/"}),"official documentation")))}d.isMDXComponent=!0},141:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return m}));var o=a(0),r=a.n(o);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,o,r=function(e,t){if(null==e)return{};var a,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=r.a.createContext({}),d=function(e){var t=r.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=d(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=d(a),b=o,m=s["".concat(c,".").concat(b)]||s[b]||u[b]||n;return a?r.a.createElement(m,i(i({ref:t},p),{},{components:a})):r.a.createElement(m,i({ref:t},p))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,c=new Array(n);c[0]=b;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var p=2;p<n;p++)c[p]=a[p];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"}}]);