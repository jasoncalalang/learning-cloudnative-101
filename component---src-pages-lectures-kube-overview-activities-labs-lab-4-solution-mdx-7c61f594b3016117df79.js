(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),i=a("NmYn"),b=a.n(i),c=a("Wbzz"),l=a("Xrax"),s=a("k4MR"),o=a("TSYQ"),d=a.n(o),u=a("QH2O"),m=a("qKvR"),p=function(e){var t,a=e.title,n=e.tabs,r=void 0===n?[]:n;return Object(m.b)("div",{className:d()(u.pageHeader,(t={},t[u.withTabs]=r.length,t))},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12"},Object(m.b)("h1",{id:"page-title",className:u.text},a)))))},x=a("BAC9"),g=function(e){var t=e.relativePagePath,a=e.repository,n=Object(c.useStaticQuery)("1364590287").site.siteMetadata.repository,r=a||n,i=r.baseUrl,b=r.subDirectory,l=i+"/edit/"+r.branch+b+"/src/pages"+t;return i?Object(m.b)("div",{className:"bx--row "+x.row},Object(m.b)("div",{className:"bx--col"},Object(m.b)("a",{className:x.link,href:l},"Edit this page on GitHub"))):null},j=a("FCXl"),O=a("dI71"),h=a("I8xM"),v=function(e){function t(){return e.apply(this,arguments)||this}return Object(O.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,n=a.split("/").filter(Boolean).slice(-1)[0],r=t.map((function(e){var t,r=b()(e,{lower:!0,strict:!0}),i=r===n,l=new RegExp(n+"/?(#.*)?$"),s=a.replace(l,r);return Object(m.b)("li",{key:e,className:d()((t={},t[h.selectedItem]=i,t),h.listItem)},Object(m.b)(c.Link,{className:h.link,to:""+s},e))}));return Object(m.b)("div",{className:h.tabsContainer},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(m.b)("nav",null,Object(m.b)("ul",{className:h.list},r))))))},t}(r.a.Component),T=a("MjG9");t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,r=e.Title,i=t.frontmatter,o=void 0===i?{}:i,d=t.relativePagePath,u=t.titleType,x=o.tabs,O=o.title,h=o.theme,f=o.description,P=o.keywords,w=Object(c.useStaticQuery)("2456312558").site.pathPrefix,y=w?n.pathname.replace(w,""):n.pathname,N=x?y.split("/").filter(Boolean).slice(-1)[0]||b()(x[0],{lower:!0}):"";return Object(m.b)(s.a,{tabs:x,homepage:!1,theme:h,pageTitle:O,pageDescription:f,pageKeywords:P,titleType:u},Object(m.b)(p,{title:r?Object(m.b)(r,null):O,label:"label",tabs:x}),x&&Object(m.b)(v,{slug:y,tabs:x,currentTab:N}),Object(m.b)(T.a,{padded:!0},a,Object(m.b)(g,{relativePagePath:d})),Object(m.b)(j.a,{pageContext:t,location:n,slug:y,tabs:x,currentTab:N}),Object(m.b)(l.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},cZEj:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return o}));var n=a("wx14"),r=a("zLVn"),i=(a("q1tI"),a("7ljp")),b=a("013z"),c=(a("qKvR"),{}),l={_frontmatter:c},s=b.a;function o(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)(s,Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",null,"Solution"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"apiVersion: v1\nkind: Pod\nmetadata:\n  name: energy-shield-service\nspec:\n  containers:\n  - name: energy-shield\n    image: ibmcase/energy-shield:1\n    livenessProbe:\n      httpGet:\n        path: /healthz\n        port: 8080\n    readinessProbe:\n      httpGet:\n        path: /ready\n        port: 8080\n      initialDelaySeconds: 5\n")))}o.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-lectures-kube-overview-activities-labs-lab-4-solution-mdx-7c61f594b3016117df79.js.map