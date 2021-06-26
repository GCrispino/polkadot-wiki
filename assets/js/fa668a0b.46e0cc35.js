(self.webpackChunk=self.webpackChunk||[]).push([[7841],{3905:(e,t,a)=>{"use strict";a.d(t,{Zo:()=>u,kt:()=>m});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),d=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=d(a),m=n,h=p["".concat(s,".").concat(m)]||p[m]||c[m]||o;return a?r.createElement(h,i(i({ref:t},u),{},{components:a})):r.createElement(h,i({ref:t},u))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var d=2;d<o;d++)i[d]=a[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},19748:(e,t,a)=>{"use strict";a.r(t),a.d(t,{frontMatter:()=>l,contentTitle:()=>s,metadata:()=>d,toc:()=>u,default:()=>p});var r=a(22122),n=a(19756),o=(a(67294),a(3905)),i=["components"],l={id:"build-index",title:"Builder's Portal",sidebar_label:"Builder's Portal"},s=void 0,d={unversionedId:"build-index",id:"build-index",isDocsHomePage:!1,title:"Builder's Portal",description:"Welcome to the builder's section of the Polkadot Wiki.",source:"@site/../docs/build-index.md",sourceDirName:".",slug:"/build-index",permalink:"/docs/build-index",editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/build-index.md",version:"current",lastUpdatedBy:"Nam Hoang Le",lastUpdatedAt:1624721479,formattedLastUpdatedAt:"6/26/2021",frontMatter:{id:"build-index",title:"Builder's Portal",sidebar_label:"Builder's Portal"},sidebar:"docs",previous:{title:"Other comparisons",permalink:"/docs/learn-comparisons"},next:{title:"Polkadot Builders Starter's Guide",permalink:"/docs/build-build-with-polkadot"}},u=[{value:"Development Guide",id:"development-guide",children:[]},{value:"Integration Guide",id:"integration-guide",children:[]},{value:"Tools",id:"tools",children:[]},{value:"Resources",id:"resources",children:[{value:"Grants",id:"grants",children:[]},{value:"PSPs",id:"psps",children:[]},{value:"Hackathon",id:"hackathon",children:[]}]}],c={toc:u};function p(e){var t=e.components,a=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Welcome to the builder's section of the Polkadot Wiki."),(0,o.kt)("p",null,"Here, you will be able to find the most up-to-date information on the status of the development\ntools in the Polkadot ecosystem. We are always adding new tools and frameworks as we learn about\nthem so if you are working on something that should be included please reach out to us on\n",(0,o.kt)("a",{parentName:"p",href:"https://app.element.io/#/room/#polkadot-watercooler:matrix.org"},"Element"),"."),(0,o.kt)("p",null,"This section of the wiki is divided into the following parts:"),(0,o.kt)("h2",{id:"development-guide"},"Development Guide"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"build-build-with-polkadot"},"Starter's Guide")," - High level overview on choosing a parachain,\nparathread, or smart contract for your project and how to get started."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"build-pdk"},"Parachain Development Kits")," - PDKs are toolkits for building parachains and\nparathreads."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"build-smart-contracts"},"Smart Contracts")," - Smart contracts are fragments of custom logic that can\nbe deployed to a live chain."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"build-wallets"},"Polkadot Wallets")," - Learn about the supported wallets and how to manage accounts.")),(0,o.kt)("h2",{id:"integration-guide"},"Integration Guide"),(0,o.kt)("p",null,"This section is for service providers like wallets or node operators who want to learn how to\nintegrate Polkadot into their systems."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"build-integration"},"Integration Initiation")," - The guide to the guide."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"build-protocol-info"},"Polkadot Protocol Information")," - General information and F.A.Q.s about the\nPolkadot protocol, e.g. address formats."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"build-node-management"},"Node Management")," - A short overview of the Parity Polkadot client and the\nmost relevant options/flags for infrastructure providers."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"build-node-interaction"},"Node Interaction")," - Learn how to interact with your node via RPC."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"build-transaction-construction"},"Transaction Construction and Signing")," - Learn the transaction\nformat for Polkadot and how to construct and sign transactions offline.")),(0,o.kt)("h2",{id:"tools"},"Tools"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"build-tools-index"},"Tools")," - Maintained list of tools."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://substrate.dev/docs/en/knowledgebase/integrate/subkey"},"Subkey")," - Command line utility for\ngenerating and inspecting key pairs."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/polkadot-js/tools"},"JS tools")," - TypeScript tools for offline signing of\ntransactions, RPC calls, and more.")),(0,o.kt)("h2",{id:"resources"},"Resources"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#"},"Examples")," - Example projects sourced from the community -- see what others are building.")),(0,o.kt)("h3",{id:"grants"},"Grants"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"grants"},"Grants")," - A list of all Polkadot-related projects given grants by the Web3 Foundation.")),(0,o.kt)("h3",{id:"psps"},"PSPs"),(0,o.kt)("p",null,"Polkadot Standards Proposals (PSPs) are standards for the Polkadot ecosystem."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/w3f/PSPs"},"PSP GitHub Repository")," - Read, create, or discuss standards and\nproposals.")),(0,o.kt)("h3",{id:"hackathon"},"Hackathon"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"build-hackathon"},"Resources For Running a Hackathon"))))}p.isMDXComponent=!0}}]);