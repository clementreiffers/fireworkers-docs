"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[400],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),h=o,f=u["".concat(l,".").concat(h)]||u[h]||m[h]||i;return r?n.createElement(f,a(a({ref:t},p),{},{components:r})):n.createElement(f,a({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},881:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const i={slug:"Octo Workers",title:"Octo Workers",authors:["clementreiffers","josephpage"],tags:["github"]},a=void 0,s={permalink:"/octo-workers-docs/blog/Octo Workers",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2021-08-26-welcome.md",source:"@site/blog/2021-08-26-welcome.md",title:"Octo Workers",description:"Why This Project? What's Next?",date:"2021-08-26T00:00:00.000Z",formattedDate:"August 26, 2021",tags:[{label:"github",permalink:"/octo-workers-docs/blog/tags/github"}],readingTime:1.285,hasTruncateMarker:!1,authors:[{name:"Cl\xe9ment Reiffers",title:"Intern who carried out this project",url:"https://github.com/clementreiffers",imageURL:"https://avatars.githubusercontent.com/u/44473020?v=4",key:"clementreiffers"},{name:"Joseph Page",title:"Internship referent",url:"https://github.com/josephpage",imageURL:"https://avatars.githubusercontent.com/u/351958?v=4",key:"josephpage"}],frontMatter:{slug:"Octo Workers",title:"Octo Workers",authors:["clementreiffers","josephpage"],tags:["github"]}},l={authorsImageUrls:[void 0,void 0]},c=[{value:"Why This Project? What&#39;s Next?",id:"why-this-project-whats-next",level:2},{value:"Repositories",id:"repositories",level:2}],p={toc:c},u="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"why-this-project-whats-next"},"Why This Project? What's Next?"),(0,o.kt)("p",null,'This project was undertaken during an internship with the aim of addressing the question: "Does the recent release of\nthe Cloudflare Workers runtime as open source enable its utilization in a Hybrid Cloud or Sovereign Cloud environment?"'),(0,o.kt)("p",null,"The primary objective of this project is to enable the deployment of code in a serverless manner."),(0,o.kt)("p",null,"There are several areas where enhancements can be made, including:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Secrets management: While secrets management exists in the FakeCfApi, it is currently not integrated with Kubernetes\nOperators. Improving this integration would enhance the overall security and reliability of the project.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Deployment time reduction: One possible avenue for improvement is the utilization of Firecracker, which could expedite\nthe creation of images and subsequently reduce deployment times. Implementing this optimization would lead to more efficient\nworkflows.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Full integration with Cloudflare API: A key aspect to consider is fully mimicking the Cloudflare API to achieve seamless\nintegration with Wrangler. This would ensure comprehensive compatibility and provide users with the full range of Cloudflare\nfunctionalities.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Ensuring KubeEdge compatibility: To maximize the benefits of the project and leverage CDN services offered by other\nCloud Providers, it is essential to ensure compatibility with KubeEdge. This would enable users to utilize various CDN\nservices seamlessly across different providers."))),(0,o.kt)("p",null,"As the project moves forward, these areas of improvement will be addressed to enhance security, speed up deployment\nprocesses, achieve comprehensive API integration, and facilitate compatibility with KubeEdge for expanded CDN service\noptions."),(0,o.kt)("h2",{id:"repositories"},"Repositories"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/clementreiffers/cf-workers-kubernetes-arch"},"FakeCfApi")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/clementreiffers/cf-workers-kubernetes-arch"},"Kubernetes Operators")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/clementreiffers/s3-download-files-capnp-generator/"},"s3-download-files-capnp-generator"))))}m.isMDXComponent=!0}}]);