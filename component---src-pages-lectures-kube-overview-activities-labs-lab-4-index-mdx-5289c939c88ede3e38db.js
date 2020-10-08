(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),i=a("NmYn"),s=a.n(i),o=a("Wbzz"),b=a("Xrax"),l=a("k4MR"),c=a("TSYQ"),p=a.n(c),u=a("QH2O"),d=a("qKvR"),m=function(e){var t,a=e.title,n=e.tabs,r=void 0===n?[]:n;return Object(d.b)("div",{className:p()(u.pageHeader,(t={},t[u.withTabs]=r.length,t))},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12"},Object(d.b)("h1",{id:"page-title",className:u.text},a)))))},h=a("BAC9"),j=function(e){var t=e.relativePagePath,a=e.repository,n=Object(o.useStaticQuery)("1364590287").site.siteMetadata.repository,r=a||n,i=r.baseUrl,s=r.subDirectory,b=i+"/edit/"+r.branch+s+"/src/pages"+t;return i?Object(d.b)("div",{className:"bx--row "+h.row},Object(d.b)("div",{className:"bx--col"},Object(d.b)("a",{className:h.link,href:b},"Edit this page on GitHub"))):null},O=a("FCXl"),g=a("dI71"),x=a("I8xM"),N=function(e){function t(){return e.apply(this,arguments)||this}return Object(g.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,n=a.split("/").filter(Boolean).slice(-1)[0],r=t.map((function(e){var t,r=s()(e,{lower:!0,strict:!0}),i=r===n,b=new RegExp(n+"/?(#.*)?$"),l=a.replace(b,r);return Object(d.b)("li",{key:e,className:p()((t={},t[x.selectedItem]=i,t),x.listItem)},Object(d.b)(o.Link,{className:x.link,to:""+l},e))}));return Object(d.b)("div",{className:x.tabsContainer},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(d.b)("nav",null,Object(d.b)("ul",{className:x.list},r))))))},t}(r.a.Component),f=a("MjG9");t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,r=e.Title,i=t.frontmatter,c=void 0===i?{}:i,p=t.relativePagePath,u=t.titleType,h=c.tabs,g=c.title,x=c.theme,y=c.description,T=c.keywords,w=Object(o.useStaticQuery)("2456312558").site.pathPrefix,v=w?n.pathname.replace(w,""):n.pathname,k=h?v.split("/").filter(Boolean).slice(-1)[0]||s()(h[0],{lower:!0}):"";return Object(d.b)(l.a,{tabs:h,homepage:!1,theme:x,pageTitle:g,pageDescription:y,pageKeywords:T,titleType:u},Object(d.b)(m,{title:r?Object(d.b)(r,null):g,label:"label",tabs:h}),h&&Object(d.b)(N,{slug:v,tabs:h,currentTab:k}),Object(d.b)(f.a,{padded:!0},a,Object(d.b)(j,{relativePagePath:p})),Object(d.b)(O.a,{pageContext:t,location:n,slug:v,tabs:h,currentTab:k}),Object(d.b)(b.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},gERQ:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return o})),a.d(t,"default",(function(){return c}));var n=a("wx14"),r=a("zLVn"),i=(a("q1tI"),a("7ljp")),s=a("013z"),o=(a("qKvR"),{}),b={_frontmatter:o},l=s.a;function c(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)(l,Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h3",null,"Container Health Issues"),Object(i.b)("p",null,"The first issue is caused by application instances entering an unhealthy state and responding to user requests with error messages. Unfortunately, this state does not cause the container to stop, so the Kubernetes cluster is not able to detect this state and restart the container. Luckily, the application has an internal endpoint that can be used to detect whether or not it is healthy. This endpoint is ",Object(i.b)("inlineCode",{parentName:"p"},"/healthz")," on port ",Object(i.b)("inlineCode",{parentName:"p"},"8080"),"."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Your first task will be to ",Object(i.b)("em",{parentName:"li"},"create a probe")," to check this endpoint periodically.",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"If the endpoint returns an ",Object(i.b)("strong",{parentName:"li"},"error")," or ",Object(i.b)("strong",{parentName:"li"},"fails")," to respond, the probe will detect this and the cluster will restart the container.")))),Object(i.b)("h3",null,"Container Startup Issues"),Object(i.b)("p",null,"Another issue is caused by new pods when they are starting up. The application takes a few seconds after startup before it is ready to service requests. As a result, some users are getting error message during this brief time."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"To fix this, you will need to ",Object(i.b)("em",{parentName:"p"},"create another probe"),". To detect whether the application is ",Object(i.b)("inlineCode",{parentName:"p"},"ready"),", the probe should simply make a request to the root endpoint, ",Object(i.b)("em",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"em"},"/ready"),", on port ",Object(i.b)("inlineCode",{parentName:"em"},"8080")),". If this request succeeds, then the application is ready.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Also set a ",Object(i.b)("inlineCode",{parentName:"p"},"initial delay")," of ",Object(i.b)("inlineCode",{parentName:"p"},"5 seconds")," for the probes."))),Object(i.b)("p",null,"Here is the Pod yaml file,  ",Object(i.b)("strong",{parentName:"p"},"add")," the probes, then ",Object(i.b)("strong",{parentName:"p"},"create")," the pod in the cluster to test it."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"apiVersion: v1\nkind: Pod\nmetadata:\n  name: energy-shield-service\nspec:\n  containers:\n  - name: energy-shield\n    image: ibmcase/energy-shield:1\n")))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-lectures-kube-overview-activities-labs-lab-4-index-mdx-5289c939c88ede3e38db.js.map