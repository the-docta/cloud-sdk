(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{136:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var o=n(0),r=n.n(o);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),d=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=d(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=d(n),b=o,f=u["".concat(a,".").concat(b)]||u[b]||p[b]||i;return n?r.a.createElement(f,c(c({ref:t},l),{},{components:n})):r.a.createElement(f,c({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},57:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return d}));var o=n(2),r=n(6),i=(n(0),n(136)),a={id:"benefits",title:"Benefits",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Benefits",description:"Benefits of SAP Cloud SDK. Seamlessly build and extend SAP services and applications.",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk"],image:null},c={unversionedId:"overview/benefits",id:"overview/benefits",isDocsHomePage:!1,title:"Benefits",description:"Benefits of SAP Cloud SDK. Seamlessly build and extend SAP services and applications.",source:"@site/docs/overview/benefits.md",permalink:"/cloud-sdk/docs/overview/benefits",editUrl:"https://github.com/SAP/cloud-sdk/edit/documentation/docs/overview/benefits.md",lastUpdatedBy:"Artem Kovalov",lastUpdatedAt:1588711456,sidebar_label:"Benefits",sidebar:"someSidebar",previous:{title:"Getting started",permalink:"/cloud-sdk/docs/overview/getting-started"},next:{title:"Introduction - SDK for Java",permalink:"/cloud-sdk/docs/java/introduction"}},s=[{value:"Easy access to SAP products and services",id:"easy-access-to-sap-products-and-services",children:[]},{value:"Type safety",id:"type-safety",children:[]},{value:"API definition to code",id:"api-definition-to-code",children:[]},{value:"SAP Cloud Platform abstractions",id:"sap-cloud-platform-abstractions",children:[]},{value:"Best practices our of the box",id:"best-practices-our-of-the-box",children:[]},{value:"Your language preference",id:"your-language-preference",children:[]},{value:"App bootstrap code",id:"app-bootstrap-code",children:[]},{value:"Extensive support",id:"extensive-support",children:[]},{value:"Comprehensive documentation",id:"comprehensive-documentation",children:[]},{value:"Command line interface",id:"command-line-interface",children:[]},{value:"Advanced features and flexibility",id:"advanced-features-and-flexibility",children:[]}],l={rightToc:s};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"SAP Cloud SDK significantly simplifies application development, reduces the number of errors, provides useful abstractions, and helps to get onboarded to best cloud-native development practices from the get-go. We provide reasonable\nconventions while keeping total flexibility and freedom of choices to the application developer."),Object(i.b)("h2",{id:"easy-access-to-sap-products-and-services"},"Easy access to SAP products and services"),Object(i.b)("p",null,"Our pre-shipped libraries include the latest versions of APIs for S/4HANA, Success Factors, and other popular SAP products"),Object(i.b)("h2",{id:"type-safety"},"Type safety"),Object(i.b)("p",null,"We take type-safety seriously. After generating client code from your API definition you can be completely sure about\ntype safety in your App."),Object(i.b)("h2",{id:"api-definition-to-code"},"API definition to code"),Object(i.b)("p",null,"Discover SAP APIs the same way you would discover your code."),Object(i.b)("h2",{id:"sap-cloud-platform-abstractions"},"SAP Cloud Platform abstractions"),Object(i.b)("p",null,"We make sure you can easily benefit from vast infrastructure offered by the SAP Cloud Platform. Destinations, routing,\nauthentication, caching, resilience, and other advanced topics are significantly simplified by Cloud SDK."),Object(i.b)("h2",{id:"best-practices-our-of-the-box"},"Best practices our of the box"),Object(i.b)("p",null,"Continuous delivery and integration, all types of tests for comprehensive code coverage, micro-deliveries, blue-green\ndeployment, version control workflows, and other best DevOps practices integrated for instant improvement in your development culture."),Object(i.b)("h2",{id:"your-language-preference"},"Your language preference"),Object(i.b)("p",null,"With ",Object(i.b)("inlineCode",{parentName:"p"},"Java")," and ",Object(i.b)("inlineCode",{parentName:"p"},"JavaScript")," supported by Cloud SDK you have full flexibility to both innovate and support restricted\ncorporate environments with ease."),Object(i.b)("h2",{id:"app-bootstrap-code"},"App bootstrap code"),Object(i.b)("p",null,"Zero configuration approach to get you started. Simply generate your starter App by using ",Object(i.b)("inlineCode",{parentName:"p"},"cli")," for JavaScript or\n",Object(i.b)("inlineCode",{parentName:"p"},"mvn")," archetypes for Java."),Object(i.b)("h2",{id:"extensive-support"},"Extensive support"),Object(i.b)("p",null,"We are backing our product with the support you would love. You can reach us both via open channels like Stack Overflow and\nGitHub as well as internally via BCP tickets and internal communications."),Object(i.b)("h2",{id:"comprehensive-documentation"},"Comprehensive documentation"),Object(i.b)("p",null,"We make sure you RTFM."),Object(i.b)("h2",{id:"command-line-interface"},"Command line interface"),Object(i.b)("p",null,"Our CLI is a flexible tool to complete multiple tedious and painstaking task with ease."),Object(i.b)("h2",{id:"advanced-features-and-flexibility"},"Advanced features and flexibility"),Object(i.b)("p",null,"Sometimes your requirements go beyond the line where we can ensure your safety. We still have you covered with advanced\nfeatures available on your discretion and provide any level of flexibility. To make sure you don't shoot yourself\ninto leg too often, we provide convenient helpers and utilities to harness this power tools for your good."))}d.isMDXComponent=!0}}]);