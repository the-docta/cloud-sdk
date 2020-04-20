(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{134:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return d}));var o=n(1),a=n(6),i=(n(0),n(163)),r=n(165),s={id:"how-to-write-documentation",title:"Documentation Guide Lines",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Documentation How To",custom_edit_url:"https://github.com",description:"Writing is an art!",keywords:["sap","cloud","sdk"],image:null},c={id:"dzen/how-to-write-documentation",title:"Documentation Guide Lines",description:"Writing is an art!",source:"@site/docs/dzen/how-to-write-docs.md",permalink:"/cloud-sdk/docs/dzen/how-to-write-documentation",editUrl:"https://github.com",lastUpdatedBy:"Artem Kovalov",lastUpdatedAt:1587045449,sidebar_label:"Documentation How To",sidebar:"someSidebar",next:{title:"About SAP Cloud SDK",permalink:"/cloud-sdk/docs/overview/about"}},l=[{value:"Cloud SDK Documentation Guidelines",id:"cloud-sdk-documentation-guidelines",children:[]},{value:"Markdown hints",id:"markdown-hints",children:[]},{value:"Take ownership",id:"take-ownership",children:[]},{value:"General notes on Writing",id:"general-notes-on-writing",children:[{value:"Basic recommendations about writing",id:"basic-recommendations-about-writing",children:[]}]}],u={rightToc:l};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"cloud-sdk-documentation-guidelines"},"Cloud SDK Documentation Guidelines"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"If you can write code, you can write docs.")),Object(i.b)("h2",{id:"markdown-hints"},"Markdown hints"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Start your page with ",Object(i.b)("inlineCode",{parentName:"li"},"H2")," because ",Object(i.b)("inlineCode",{parentName:"li"},"H1")," is for ",Object(i.b)("inlineCode",{parentName:"li"},"title")," specified in the ",Object(i.b)("inlineCode",{parentName:"li"},"meta-header")),Object(i.b)("li",{parentName:"ul"},"If you need ",Object(i.b)("inlineCode",{parentName:"li"},"Tabs")," or other custom react component hoist it to the top of the page after the ",Object(i.b)("inlineCode",{parentName:"li"},"meta-header")),Object(i.b)("li",{parentName:"ul"},"I recommend creating snippets for your editor for most used components like: ",Object(i.b)("inlineCode",{parentName:"li"},"meta-header"),", ",Object(i.b)("inlineCode",{parentName:"li"},"admonitions"),", ",Object(i.b)("inlineCode",{parentName:"li"},"tabs"),", etc..."),Object(i.b)("li",{parentName:"ul"},"Run docs locally to ensure your page looks nice, some design ideas in your head my looked different with additional context")),Object(i.b)("h2",{id:"take-ownership"},"Take ownership"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"If you see a typo - fix it and make a pull request"),Object(i.b)("li",{parentName:"ul"},"If an action to update yours or someone's article takes less then 10-15 minutes - just do it."),Object(i.b)("li",{parentName:"ul"},"If smth can't be fixed by you - notify an author or respective team.")),Object(i.b)("h2",{id:"general-notes-on-writing"},"General notes on Writing"),Object(i.b)("p",null,"People who do not write frequently often struggle with putting words to paper. It's normal. A mental-ease soon to come with practice."),Object(i.b)("h3",{id:"basic-recommendations-about-writing"},"Basic recommendations about writing"),Object(i.b)("h4",{id:"write-as-you-speak"},"Write as you speak"),Object(i.b)("p",null,"Imagine you're explaining what Cloud SDK does to your friend with enough tech background but without SAP context. Your\nMom would also work."),Object(i.b)("p",null,"Many people think writing is different from speaking. Not that much. Speaking is a natural way to transfer information for\nhumans. Write as you're chatting to someone, answering questions, or asking questions to yourself. Then edit where\nthere's a lack of structure."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Such texts are much easier to read and comprehend than those written in cumbersome and complicated way.")),Object(i.b)("h5",{id:"examples-of-poor-docsumentation"},"Examples of poor docsumentation"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(o.a)({parentName:"li"},{href:"http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html"}),"If you need an example of bad documentation check Odata Sepcification")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(o.a)({parentName:"li"},{href:"https://www.odata.org/getting-started/basic-tutorial/"}),"On the other hand, their Getting Started guide is quite OK"))),Object(i.b)("h4",{id:"use-simple-words"},"Use simple words"),Object(i.b)("p",null,"Don't try to over-smart yourself. Use the most frequent term for the notion. Check what others use if not sure. Be\nconsistent. Google a couple of options if in doubt. Be careful with acronyms, they are . Notice, ",Object(i.b)("inlineCode",{parentName:"p"},"careful")," is better then\n",Object(i.b)("inlineCode",{parentName:"p"},"cautious"),", because careful is higher frequency word for this context."),Object(i.b)("h4",{id:"more-active-case"},"More active case"),Object(i.b)("p",null,"Documentation is written or someone writes it? Both. When it's you who's writing is, please, use active voice where\nappropriate. Instead of ",Object(i.b)("strong",{parentName:"p"},"This feature was developed by us so that you are made happy")," try to use smth like this ",Object(i.b)("strong",{parentName:"p"},"We\ndeveloped this feature to make you happy"),". We naturally speak in an active voice. When appropriate passive voice if fine."),Object(i.b)("h4",{id:"use-short-sentences"},"Use short sentences"),Object(i.b)("p",null,"Make sentences as long as needed, but as short as possible. If you have a second subordinate clause something is\ndefinitely getting wrong."),Object(i.b)("h4",{id:"use-examples"},"Use examples"),Object(i.b)("p",null,"They are better than many abstract terms following each other. Our minds were not made for this kind of work in the\nfirst place. A good example helps connecting dots between concepts and builds beautiful memory associations."),Object(i.b)("h4",{id:"build-upon-the-context"},"Build upon the context"),Object(i.b)("p",null,"The same as defining a function for a code reusability context allows us to re-use already introduced concepts. It makes\nthe explanation more concise, easy to read and allows for scalable writing. Make sure there's just enough context introduced\nand provide links or reminders where it might be lacking."),Object(i.b)("h4",{id:"use-spelling-and-grammar-checking"},"Use spelling and grammar checking"),Object(i.b)("p",null,"Linting, code style, static types checking, typos. Writing is no different from coding here. I found 16 issues in this\ndocument after checking it with free version of ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://www.grammarly.com/"}),"Grammarly")," ."),Object(i.b)("h4",{id:"steal-relentlessly"},'"Steal" relentlessly'),Object(i.b)("p",null,"Think if someone has already documented what you now want to document. Use it as an example! Take parts of it if\nrelevant. Be mindful and check copywrites if copying too much. Bookmark a couple of favorite documentation web-sites\nand visit them for inspiration. Think of Google Cloud SDK, Graph QL, React, etc..."),Object(i.b)("h4",{id:"ask-for-review"},"Ask for review"),Object(i.b)("p",null,"Yeah. Pull requests a new way."),Object(i.b)("h4",{id:"avoid-variant-reading"},"Avoid variant reading"),Object(i.b)("p",null,"Make sure you'll be understood one way and the one way only. For example, try to understand and make a single\ninterpretation for ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"http://docs.oasis-open.org/odata/odata-json-format/v4.01/odata-json-format-v4.01.html#sec_ControlInformationtypeodatatype"}),"odata.type meta\nfield"),". Don't spend too much time on it..."),Object(i.b)("h4",{id:"mvp"},"MVP"),Object(i.b)("p",null,"Don't be hard on yourself. Make smth imperfect and improve with every versions. Any documentation is better than no\ndocumentation. Use feedback to iterate. Involve collaborators. We're all not writers here."),Object(i.b)("h4",{id:"inverted-pyramid-style"},"Inverted Pyramid Style"),Object(i.b)("p",null,"Think a bit before getting to the text editor. Or start with an outline. Same as with structuring your class methods and\nvariables it makes eventual writing much simpler and often faster. Here's a method from a journalism world that enriches\nthe coding paradigm example I used before with valuable context. ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Inverted_pyramid_(journalism)"}),"It's called inverted pyramid and might be useful for\ndocumentation, in the same way, it's useful for news.")),Object(i.b)("img",{alt:"Inverted Pyramid of writing",src:Object(r.a)("img/docs/inverted-pyramid.png")}),";")}d.isMDXComponent=!0},163:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var o=n(0),a=n.n(o);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s({},t,{},e)),n},d=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=Object(o.forwardRef)((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,r=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=u(n),p=o,m=d["".concat(r,".").concat(p)]||d[p]||b[p]||i;return n?a.a.createElement(m,s({ref:t},l,{components:n})):a.a.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var l=2;l<i;l++)r[l]=n[l];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},164:function(e,t,n){"use strict";var o=n(0),a=n(35);t.a=function(){return Object(o.useContext)(a.a)}},165:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var o=n(164);function a(e){const{siteConfig:t}=Object(o.a)(),{baseUrl:n="/"}=t||{};if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?n+e.slice(1):n+e}}}]);