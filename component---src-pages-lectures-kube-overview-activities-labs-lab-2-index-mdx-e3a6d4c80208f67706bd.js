(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),i=a.n(n),r=a("NmYn"),c=a.n(r),o=a("Wbzz"),l=a("Xrax"),b=a("k4MR"),s=a("TSYQ"),d=a.n(s),u=a("QH2O"),m=a("qKvR"),p=function(e){var t,a=e.title,n=e.tabs,i=void 0===n?[]:n;return Object(m.b)("div",{className:d()(u.pageHeader,(t={},t[u.withTabs]=i.length,t))},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12"},Object(m.b)("h1",{id:"page-title",className:u.text},a)))))},j=a("BAC9"),O=function(e){var t=e.relativePagePath,a=e.repository,n=Object(o.useStaticQuery)("1364590287").site.siteMetadata.repository,i=a||n,r=i.baseUrl,c=i.subDirectory,l=r+"/edit/"+i.branch+c+"/src/pages"+t;return r?Object(m.b)("div",{className:"bx--row "+j.row},Object(m.b)("div",{className:"bx--col"},Object(m.b)("a",{className:j.link,href:l},"Edit this page on GitHub"))):null},h=a("FCXl"),x=a("dI71"),g=a("I8xM"),f=function(e){function t(){return e.apply(this,arguments)||this}return Object(x.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,n=a.split("/").filter(Boolean).slice(-1)[0],i=t.map((function(e){var t,i=c()(e,{lower:!0,strict:!0}),r=i===n,l=new RegExp(n+"/?(#.*)?$"),b=a.replace(l,i);return Object(m.b)("li",{key:e,className:d()((t={},t[g.selectedItem]=r,t),g.listItem)},Object(m.b)(o.Link,{className:g.link,to:""+b},e))}));return Object(m.b)("div",{className:g.tabsContainer},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(m.b)("nav",null,Object(m.b)("ul",{className:g.list},i))))))},t}(i.a.Component),N=a("MjG9");t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,i=e.Title,r=t.frontmatter,s=void 0===r?{}:r,d=t.relativePagePath,u=t.titleType,j=s.tabs,x=s.title,g=s.theme,v=s.description,T=s.keywords,y=Object(o.useStaticQuery)("2456312558").site.pathPrefix,w=y?n.pathname.replace(y,""):n.pathname,C=j?w.split("/").filter(Boolean).slice(-1)[0]||c()(j[0],{lower:!0}):"";return Object(m.b)(b.a,{tabs:j,homepage:!1,theme:g,pageTitle:x,pageDescription:v,pageKeywords:T,titleType:u},Object(m.b)(p,{title:i?Object(m.b)(i,null):x,label:"label",tabs:j}),j&&Object(m.b)(f,{slug:w,tabs:j,currentTab:C}),Object(m.b)(N.a,{padded:!0},a,Object(m.b)(O,{relativePagePath:d})),Object(m.b)(h.a,{pageContext:t,location:n,slug:w,tabs:j,currentTab:C}),Object(m.b)(l.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},tuN1:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return o})),a.d(t,"default",(function(){return s}));var n=a("wx14"),i=a("zLVn"),r=(a("q1tI"),a("7ljp")),c=a("013z"),o=(a("qKvR"),{}),l={_frontmatter:o},b=c.a;function s(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(r.b)(b,Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",null,"Problem"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Create a pod definition named ",Object(r.b)("inlineCode",{parentName:"li"},"yoda-service-pod.yml"),", and then create a pod in the cluster using this definition to make sure it works.")),Object(r.b)("p",null,"The specifications are as follows:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"The current image for the container is ",Object(r.b)("inlineCode",{parentName:"li"},"bitnami/nginx"),". You do not need a custom command or args."),Object(r.b)("li",{parentName:"ul"},"There is some configuration data the container will need:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"yoda.baby.power=100000000")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"yoda.strength=10")))),Object(r.b)("li",{parentName:"ul"},"It will expect to find this data in a file at ",Object(r.b)("inlineCode",{parentName:"li"},"/etc/yoda-service/yoda.cfg"),". Store the configuration data in a ConfigMap called ",Object(r.b)("inlineCode",{parentName:"li"},"yoda-service-config")," and provide it to the container as a mounted volume."),Object(r.b)("li",{parentName:"ul"},"The container should expect to use ",Object(r.b)("inlineCode",{parentName:"li"},"64Mi")," of memory and ",Object(r.b)("inlineCode",{parentName:"li"},"250m")," CPU (use resource requests)."),Object(r.b)("li",{parentName:"ul"},"The container should be limited to ",Object(r.b)("inlineCode",{parentName:"li"},"128Mi")," of memory and ",Object(r.b)("inlineCode",{parentName:"li"},"500m")," CPU (use resource limits)."),Object(r.b)("li",{parentName:"ul"},"The container needs access to a database password in order to authenticate with a backend database server. The password is ",Object(r.b)("inlineCode",{parentName:"li"},"0penSh1ftRul3s!"),". It should be stored as a Kubernetes secret called ",Object(r.b)("inlineCode",{parentName:"li"},"yoda-db-password")," and passed to the container as an ",Object(r.b)("em",{parentName:"li"},"environment variable")," called ",Object(r.b)("inlineCode",{parentName:"li"},"DB_PASSWORD"),"."),Object(r.b)("li",{parentName:"ul"},"The container will need to access the Kubernetes API using the ServiceAccount ",Object(r.b)("inlineCode",{parentName:"li"},"yoda-svc"),". Create the service account if it doesn’t already exist, and configure the pod to use it.")),Object(r.b)("h2",null,"Verification"),Object(r.b)("p",null,"To verify your setup is complete, check ",Object(r.b)("inlineCode",{parentName:"p"},"/etc/yoda-service")," for the ",Object(r.b)("inlineCode",{parentName:"p"},"yoda.cfg")," file and use the ",Object(r.b)("inlineCode",{parentName:"p"},"cat")," command to check it’s contents."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"kubectl exec -it yoda-service /bin/bash\ncd /etc/yoda-service\ncat yoda.cfg\n")))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-lectures-kube-overview-activities-labs-lab-2-index-mdx-e3a6d4c80208f67706bd.js.map