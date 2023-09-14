"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[653],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(r),m=o,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||a;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1546:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:4},i="Manage your first Worker in Rust !",l={unversionedId:"workers-rust",id:"workers-rust",title:"Manage your first Worker in Rust !",description:"You need to install Rust on your machine,",source:"@site/docs/workers-rust.md",sourceDirName:".",slug:"/workers-rust",permalink:"/fireworkers-docs/docs/workers-rust",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Manage your first Worker in JavaScript !",permalink:"/fireworkers-docs/docs/workers-js"}},s={},u=[{value:"Hello World Template",id:"hello-world-template",level:2},{value:"Run your code in dev mode",id:"run-your-code-in-dev-mode",level:2},{value:"Deploy the code",id:"deploy-the-code",level:2}],c={toc:u},p="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"manage-your-first-worker-in-rust-"},"Manage your first Worker in Rust !"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"You need to install ",(0,o.kt)("a",{parentName:"p",href:"https://www.rust-lang.org/"},"Rust")," on your machine,\nFollow ",(0,o.kt)("a",{parentName:"p",href:"https://www.rust-lang.org/tools/install"},"these instructions")," to set up.")),(0,o.kt)("h2",{id:"hello-world-template"},"Hello World Template"),(0,o.kt)("p",null,"To get started with this project, follow these steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Clone the repository by executing the following command in your terminal:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/clementreiffers/rustwasm-worker-template\n")),(0,o.kt)("p",null,"Once you have cloned the repository, you'll find the following components:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A directory named ",(0,o.kt)("inlineCode",{parentName:"li"},"src")," which contains all the Rust code for the project."),(0,o.kt)("li",{parentName:"ul"},"A ",(0,o.kt)("inlineCode",{parentName:"li"},"wrangler.toml")," file that holds all the setup information for the Worker."),(0,o.kt)("li",{parentName:"ul"},"A ",(0,o.kt)("inlineCode",{parentName:"li"},"Cargo.toml")," file that contains all the Rust configuration for the project.")),(0,o.kt)("p",null,"If you wish to modify the project name, you can do so in the ",(0,o.kt)("inlineCode",{parentName:"p"},"wrangler.toml")," file. Additionally, you have the flexibility\nto add dependencies to your project using ",(0,o.kt)("a",{parentName:"p",href:"https://doc.rust-lang.org/cargo/"},"Cargo"),"."),(0,o.kt)("h2",{id:"run-your-code-in-dev-mode"},"Run your code in dev mode"),(0,o.kt)("p",null,"you can run ",(0,o.kt)("inlineCode",{parentName:"p"},"wrangler dev -l")," to test it in dev mode, so it runs on your machine."),(0,o.kt)("p",null,"you can now test it by running this command: ",(0,o.kt)("inlineCode",{parentName:"p"},"curl localhost:8787")),(0,o.kt)("h2",{id:"deploy-the-code"},"Deploy the code"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"you need to install all the ",(0,o.kt)("a",{parentName:"p",href:"/fireworkers-docs/docs/the-architecture"},"architecture")," before deploying the code.")),(0,o.kt)("p",null,"we can set an environment variable for this CLI, so you just have to run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"CLOUDFLARE_API_BASE_URL=<endpoint-of-fakeCfApi>/client/v4 wrangler deploy\n")))}d.isMDXComponent=!0}}]);