(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),i=a.n(n),o=a("NmYn"),r=a.n(o),l=a("Wbzz"),s=a("Xrax"),c=a("k4MR"),b=a("TSYQ"),d=a.n(b),u=a("QH2O"),p=a("qKvR"),m=function(e){var t,a=e.title,n=e.tabs,i=void 0===n?[]:n;return Object(p.b)("div",{className:d()(u.pageHeader,(t={},t[u.withTabs]=i.length,t))},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12"},Object(p.b)("h1",{id:"page-title",className:u.text},a)))))},v=a("BAC9"),h=function(e){var t=e.relativePagePath,a=e.repository,n=Object(l.useStaticQuery)("1364590287").site.siteMetadata.repository,i=a||n,o=i.baseUrl,r=i.subDirectory,s=o+"/edit/"+i.branch+r+"/src/pages"+t;return o?Object(p.b)("div",{className:"bx--row "+v.row},Object(p.b)("div",{className:"bx--col"},Object(p.b)("a",{className:v.link,href:s},"Edit this page on GitHub"))):null},g=a("FCXl"),x=a("dI71"),O=a("I8xM"),j=function(e){function t(){return e.apply(this,arguments)||this}return Object(x.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,n=a.split("/").filter(Boolean).slice(-1)[0],i=t.map((function(e){var t,i=r()(e,{lower:!0,strict:!0}),o=i===n,s=new RegExp(n+"/?(#.*)?$"),c=a.replace(s,i);return Object(p.b)("li",{key:e,className:d()((t={},t[O.selectedItem]=o,t),O.listItem)},Object(p.b)(l.Link,{className:O.link,to:""+c},e))}));return Object(p.b)("div",{className:O.tabsContainer},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(p.b)("nav",null,Object(p.b)("ul",{className:O.list},i))))))},t}(i.a.Component),f=a("MjG9");t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,i=e.Title,o=t.frontmatter,b=void 0===o?{}:o,d=t.relativePagePath,u=t.titleType,v=b.tabs,x=b.title,O=b.theme,y=b.description,T=b.keywords,w=Object(l.useStaticQuery)("2456312558").site.pathPrefix,N=w?n.pathname.replace(w,""):n.pathname,k=v?N.split("/").filter(Boolean).slice(-1)[0]||r()(v[0],{lower:!0}):"";return Object(p.b)(c.a,{tabs:v,homepage:!1,theme:O,pageTitle:x,pageDescription:y,pageKeywords:T,titleType:u},Object(p.b)(m,{title:i?Object(p.b)(i,null):x,label:"label",tabs:v}),v&&Object(p.b)(j,{slug:N,tabs:v,currentTab:k}),Object(p.b)(f.a,{padded:!0},a,Object(p.b)(h,{relativePagePath:d})),Object(p.b)(g.a,{pageContext:t,location:n,slug:N,tabs:v,currentTab:k}),Object(p.b)(s.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},qwkn:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return l})),a.d(t,"default",(function(){return v}));var n=a("wx14"),i=a("zLVn"),o=(a("q1tI"),a("7ljp")),r=a("013z"),l=(a("qKvR"),{}),s=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(o.b)("div",t)}},c=s("AnchorLinks"),b=s("AnchorLink"),d=s("CardGroup"),u=s("MiniCard"),p={_frontmatter:l},m=r.a;function v(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(o.b)(m,Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)(c,{small:!0,mdxType:"AnchorLinks"},Object(o.b)(b,{mdxType:"AnchorLink"},"Cloud-Native"),Object(o.b)(b,{mdxType:"AnchorLink"},"Advantages and disadvantages"),Object(o.b)(b,{mdxType:"AnchorLink"},"Resources")),Object(o.b)("h2",null,"Cloud-Native"),Object(o.b)("p",null,"Cloud-native refers less to where an application resides and more to how\nit is built and deployed."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"A cloud-native application consists of discrete, reusable components\nknown as microservices that are designed to integrate into any cloud\nenvironment."),Object(o.b)("li",{parentName:"ul"},"These microservices act as building blocks and are often packaged in\ncontainers."),Object(o.b)("li",{parentName:"ul"},"Microservices work together as a whole to comprise an application,\nyet each can be independently scaled, continuously improved, and\nquickly iterated through automation and orchestration processes."),Object(o.b)("li",{parentName:"ul"},"The flexibility of each microservice adds to the agility and\ncontinuous improvement of cloud-native applications.")),Object(o.b)("h2",null,"Advantages and Disadvantages"),Object(o.b)("p",null,"IBM customers find themselves increasingly tasked with improving existing applications, building new applications, and enhancing user experience.\nCloud native applications meet these demands by improving app performance, flexibility, and extensibility."),Object(o.b)("h3",null,"Advantages"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Compared to traditional monolithic apps, cloud native applications can be easier to manage as iterative improvements occur using Agile and DevOps processes."),Object(o.b)("li",{parentName:"ul"},"Comprised of individual microservices, cloud native applications can be improved incrementally and automatically to continuously add new and improved application features."),Object(o.b)("li",{parentName:"ul"},"Improvements can be made non-intrusively, causing no downtime or disruption of the end-user experience."),Object(o.b)("li",{parentName:"ul"},"Scaling up or down proves easier with the elastic infrastructure that underpins cloud native apps."),Object(o.b)("li",{parentName:"ul"},"The cloud native development process more closely matches the speed and innovation demanded by today’s business environment.")),Object(o.b)("h3",null,"Disadvantages"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Although microservices enable an iterative approach to application improvement, they also create the necessity of managing more elements. Rather than one large application, it becomes necessary to manage far more small, discrete services."),Object(o.b)("li",{parentName:"ul"},"Cloud native apps demand additional toolsets to manage the DevOps pipeline, replace traditional monitoring structures, and control microservices architecture."),Object(o.b)("li",{parentName:"ul"},"Cloud native applications allow for rapid development and deployment, but they also demand a business culture that can cope with the pace of that innovation.")),Object(o.b)("h2",null,"Resources"),Object(o.b)(d,{mdxType:"CardGroup"},Object(o.b)(u,{title:"What is Cloud Native",href:"/slides/01-What-Is-Cloud-Native.pdf",mdxType:"MiniCard"})))}v.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-lectures-cloud-native-index-mdx-6972064ee9ddc58f1e3b.js.map