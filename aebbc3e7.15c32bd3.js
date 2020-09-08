(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{116:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return b}));var a=n(2),i=n(6),o=(n(0),n(154)),r={id:"extension-model-sap-cloud-sdk-for-javascript-typescript",title:"Extension model",sidebar_label:"Extension model",description:null,keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk","extension"]},l={unversionedId:"js/extension-model-sap-cloud-sdk-for-javascript-typescript",id:"js/extension-model-sap-cloud-sdk-for-javascript-typescript",isDocsHomePage:!1,title:"Extension model",description:"Introduction",source:"@site/docs/js/extension-model.md",slug:"/js/extension-model-sap-cloud-sdk-for-javascript-typescript",permalink:"/cloud-sdk/docs/js/extension-model-sap-cloud-sdk-for-javascript-typescript",editUrl:"https://github.com/SAP/cloud-sdk/edit/documentation/docs/js/extension-model.md",version:"current",lastUpdatedBy:"Marika Marszalkowski",lastUpdatedAt:1599569401,sidebar_label:"Extension model"},c=[{value:"Introduction",id:"introduction",children:[]},{value:"Roles",id:"roles",children:[{value:"Stakeholders and contact points",id:"stakeholders-and-contact-points",children:[]}]},{value:"Process outline",id:"process-outline",children:[]},{value:"Development guidelines",id:"development-guidelines",children:[{value:"Contribution programming language",id:"contribution-programming-language",children:[]},{value:"API alignment",id:"api-alignment",children:[]},{value:"Repository",id:"repository",children:[]},{value:"Introducing dependencies",id:"introducing-dependencies",children:[]},{value:"Coding convention",id:"coding-convention",children:[]},{value:"Pull requests",id:"pull-requests",children:[]},{value:"Branching strategy",id:"branching-strategy",children:[]}]},{value:"Documentation",id:"documentation",children:[{value:"Documentation portal",id:"documentation-portal",children:[]},{value:"Generated API documentation",id:"generated-api-documentation",children:[]},{value:"README",id:"readme",children:[]}]},{value:"Releases",id:"releases",children:[{value:"Release process",id:"release-process",children:[]},{value:"License",id:"license",children:[]}]},{value:"Support",id:"support",children:[]},{value:"Maintenance",id:"maintenance",children:[]}],s={rightToc:c};function b(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"introduction"},"Introduction"),Object(o.b)("p",null,"SAP Cloud SDK for JavaScript welcomes extensions that bring value to SDK users by simplifying and/or improving cloud application development within the SAP ecosystem. The contributed feature or API library becomes an extension of SDK and is released under the SAP Cloud SDK umbrella into the ",Object(o.b)("inlineCode",{parentName:"p"},"@sap-cloud-sdk")," scope in ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.npmjs.com/"}),"npmjs.com"),"."),Object(o.b)("p",null,"The core modules of the SAP Cloud SDK for JavaScript are released under the Apache 2.0 open source license. SAP Cloud SDK extensions should also be open source with Apache 2.0. If this is not possible, e. g. for legal reasons, licensing has to be clarified in person."),Object(o.b)("h2",{id:"roles"},"Roles"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"SDK team")," - development team and Product Owner responsible for maintaining, developing, and releasing SAP Cloud SDK for JavaScript."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Contribution team")," - development team responsible for developing and contributing a feature or an API library")),Object(o.b)("h3",{id:"stakeholders-and-contact-points"},"Stakeholders and contact points"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"SDK Team")," assigns two main stakeholders as contact points for the contribution process."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Product owner"),"  for organizational topics, priorities, and practicalities"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Developer")," for engineering onboarding, alignment and consulting"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Contribution team")," assigns at least one contact point with an engineering background for regular collaboration and syncs.")),Object(o.b)("p",null,"Other stakeholders and/or contact points could be assigned if deemed necessary."),Object(o.b)("h2",{id:"process-outline"},"Process outline"),Object(o.b)("p",null,"Below are generic steps for a successful contribution. The process can be adopted for the needs of particular contribution."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Initial alignment and approvals"),Object(o.b)("li",{parentName:"ul"},"Plan contribution collaboration."),Object(o.b)("li",{parentName:"ul"},"Prepare and configure required assets (repositories, configuration, pipelines, etc). The SAP Cloud SDK provides templates for those assets."),Object(o.b)("li",{parentName:"ul"},"Onboarding session with SDK team. Get to ",Object(o.b)("inlineCode",{parentName:"li"},"Hello World!")),Object(o.b)("li",{parentName:"ul"},"Start of development by the contribution team"),Object(o.b)("li",{parentName:"ul"},"SDK Team provides ongoing consulting"),Object(o.b)("li",{parentName:"ul"},"Regular syncs on development and organizational topics"),Object(o.b)("li",{parentName:"ul"},"Successful PoC"),Object(o.b)("li",{parentName:"ul"},"Iterative development process with SDK team contributing to PR reviews"),Object(o.b)("li",{parentName:"ul"},'Releasing the contribution as "Beta"'),Object(o.b)("li",{parentName:"ul"},"Iterative development. Stabilizing the API."),Object(o.b)("li",{parentName:"ul"},'Release the contribution with "General Availability" (GA)'),Object(o.b)("li",{parentName:"ul"},"Keep functional scope up to date with customer requirements"),Object(o.b)("li",{parentName:"ul"},"Maintenance and support of the contribution by ",Object(o.b)("strong",{parentName:"li"},"Contribution Team")," or their successors")),Object(o.b)("h2",{id:"development-guidelines"},"Development guidelines"),Object(o.b)("p",null,"These section establishes best engineering practices for contributing team."),Object(o.b)("h3",{id:"contribution-programming-language"},"Contribution programming language"),Object(o.b)("p",null,"The contribution should happen in TypeScript and endorse type-safety whenever possible."),Object(o.b)("h3",{id:"api-alignment"},"API alignment"),Object(o.b)("p",null,"To maintain a consistent API strategy, contribution and SDK teams align on the API. Final approval is on the SDK team."),Object(o.b)("h3",{id:"repository"},"Repository"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"The repository is created on Github under SAP Organization by the contribution team"),Object(o.b)("li",{parentName:"ul"},"SDK and contribution team co-own the repository and have full access rights to it"),Object(o.b)("li",{parentName:"ul"},"SDK team provides a repository structure and initial content as needed. This helps the contribution team to kick-start their pipeline."),Object(o.b)("li",{parentName:"ul"},"SDK team can audit repository settings and require reasonable updates to the configuration")),Object(o.b)("h3",{id:"introducing-dependencies"},"Introducing dependencies"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Dependency audit should happen as a part of PR review"),Object(o.b)("li",{parentName:"ul"},"SDK provides a guide on dependency choices to the contributing team")),Object(o.b)("h3",{id:"coding-convention"},"Coding convention"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Contribution team should use coding convention of the SDK unless it's explicitly approved to be otherwise"),Object(o.b)("li",{parentName:"ul"},"Most of the coding convention rules should be enforced by automated code checkers and linters like ESLint and Prettier"),Object(o.b)("li",{parentName:"ul"},"Enforcement happens via continuous integration pipeline"),Object(o.b)("li",{parentName:"ul"},"SDK team provides guidelines on coding conventions that can't be automatically enforced")),Object(o.b)("h3",{id:"pull-requests"},"Pull requests"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Pull request should contain some logical and complete pile of work"),Object(o.b)("li",{parentName:"ul"},"Pull request should be ",Object(o.b)("strong",{parentName:"li"},"small"),"  for easy review"),Object(o.b)("li",{parentName:"ul"},"Preferably Pull request should contain a tangible incremental value"),Object(o.b)("li",{parentName:"ul"},"Pull request are mandatorily reviewed by at least one of SDK team members")),Object(o.b)("h3",{id:"branching-strategy"},"Branching strategy"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"Main")," branch has to be always ",Object(o.b)("strong",{parentName:"li"},"release ready"),". In other words: up to date, tested, and documented")),Object(o.b)("h2",{id:"documentation"},"Documentation"),Object(o.b)("p",null,"SAP Cloud SDK for JavaScript has two types of documentation:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Documentation portal"),Object(o.b)("li",{parentName:"ul"},"Generated API documentation")),Object(o.b)("h3",{id:"documentation-portal"},"Documentation portal"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"After reaching ",Object(o.b)("inlineCode",{parentName:"li"},"Beta"),", feature or API library has to be documented by contribution team on SDK's documentation portal"),Object(o.b)("li",{parentName:"ul"},"Documentation has to be kept up to date by the contribution team")),Object(o.b)("h3",{id:"generated-api-documentation"},"Generated API documentation"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"API documentation has to be generated"),Object(o.b)("li",{parentName:"ul"},"SDK team provides means to generate API documentation on the available codebase")),Object(o.b)("h3",{id:"readme"},"README"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Contribution team maintains ",Object(o.b)("inlineCode",{parentName:"li"},"README")," on the contribution repository according to development needs")),Object(o.b)("h2",{id:"releases"},"Releases"),Object(o.b)("h3",{id:"release-process"},"Release process"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Every library released with SDK should use ","[semantic versioning]","(",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://semver.org/"}),"https://semver.org/")),Object(o.b)("li",{parentName:"ul"},"Breaking API changes have to be avoided."),Object(o.b)("li",{parentName:"ul"},"If breaking change is introduced, the old API must be marked deprecated instead of removal. A grace period of 6 months to be observed before removal can be considered."),Object(o.b)("li",{parentName:"ul"},"The contribution team has to set on a regular release cycle. SDK uses 2 weeks released cycle and it's preferred regularity."),Object(o.b)("li",{parentName:"ul"},"All the new features have to be released as ",Object(o.b)("inlineCode",{parentName:"li"},"Beta")," first. ",Object(o.b)("inlineCode",{parentName:"li"},"General availability")," release is triggered when API is stabilized and no breaking changes are planned."),Object(o.b)("li",{parentName:"ul"},"If a new module is to be released, its naming has to be aligned with the SDK team"),Object(o.b)("li",{parentName:"ul"},"Practicalities of releasing NPM module into SDK's namespace are provided by SDK team"),Object(o.b)("li",{parentName:"ul"},"Release change-log has to be maintained by the contribution team")),Object(o.b)("h3",{id:"license"},"License"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Open-source modules of Cloud SDK for Java are licensed under Apache 2.0"),Object(o.b)("li",{parentName:"ul"},"The contribution must have the same license applied"),Object(o.b)("li",{parentName:"ul"},"Other cases have to be explicitly discussed")),Object(o.b)("h2",{id:"support"},"Support"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"General support provided by both SDK and contribution teams."),Object(o.b)("li",{parentName:"ul"},"Bug-fixing and specific support related to the functional scope of the contributed library is done by the contribution team"),Object(o.b)("li",{parentName:"ul"},"Contribution team should be deemed responsible to observe reasonable support SLA"),Object(o.b)("li",{parentName:"ul"},"Initial reply within 2 days"),Object(o.b)("li",{parentName:"ul"},"Critical bug fixing - 1 week"),Object(o.b)("li",{parentName:"ul"},"Noncritical bugs- 2 weeks")),Object(o.b)("h2",{id:"maintenance"},"Maintenance"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Maintenance should be on the contributing team or its successor unless agreed otherwise.")))}b.isMDXComponent=!0},154:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),i=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),b=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=b(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},p=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=b(n),p=a,m=u["".concat(r,".").concat(p)]||u[p]||d[p]||o;return n?i.a.createElement(m,l(l({ref:t},s),{},{components:n})):i.a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var s=2;s<o;s++)r[s]=n[s];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);