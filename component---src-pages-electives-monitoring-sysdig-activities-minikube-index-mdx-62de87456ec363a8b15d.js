(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{"013z":function(e,t,a){"use strict";var c=a("q1tI"),i=a.n(c),n=a("NmYn"),s=a.n(n),b=a("Wbzz"),r=a("Xrax"),o=a("k4MR"),l=a("TSYQ"),p=a.n(l),d=a("QH2O"),m=a("qKvR"),g=function(e){var t,a=e.title,c=e.tabs,i=void 0===c?[]:c;return Object(m.b)("div",{className:p()(d.pageHeader,(t={},t[d.withTabs]=i.length,t))},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12"},Object(m.b)("h1",{id:"page-title",className:d.text},a)))))},u=a("BAC9"),O=function(e){var t=e.relativePagePath,a=e.repository,c=Object(b.useStaticQuery)("1364590287").site.siteMetadata.repository,i=a||c,n=i.baseUrl,s=i.subDirectory,r=n+"/edit/"+i.branch+s+"/src/pages"+t;return n?Object(m.b)("div",{className:"bx--row "+u.row},Object(m.b)("div",{className:"bx--col"},Object(m.b)("a",{className:u.link,href:r},"Edit this page on GitHub"))):null},j=a("FCXl"),A=a("dI71"),f=a("I8xM"),N=function(e){function t(){return e.apply(this,arguments)||this}return Object(A.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,c=a.split("/").filter(Boolean).slice(-1)[0],i=t.map((function(e){var t,i=s()(e,{lower:!0,strict:!0}),n=i===c,r=new RegExp(c+"/?(#.*)?$"),o=a.replace(r,i);return Object(m.b)("li",{key:e,className:p()((t={},t[f.selectedItem]=n,t),f.listItem)},Object(m.b)(b.Link,{className:f.link,to:""+o},e))}));return Object(m.b)("div",{className:f.tabsContainer},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(m.b)("nav",null,Object(m.b)("ul",{className:f.list},i))))))},t}(i.a.Component),h=a("MjG9");t.a=function(e){var t=e.pageContext,a=e.children,c=e.location,i=e.Title,n=t.frontmatter,l=void 0===n?{}:n,p=t.relativePagePath,d=t.titleType,u=l.tabs,A=l.title,f=l.theme,v=l.description,w=l.keywords,y=Object(b.useStaticQuery)("2456312558").site.pathPrefix,x=y?c.pathname.replace(y,""):c.pathname,T=u?x.split("/").filter(Boolean).slice(-1)[0]||s()(u[0],{lower:!0}):"";return Object(m.b)(o.a,{tabs:u,homepage:!1,theme:f,pageTitle:A,pageDescription:v,pageKeywords:w,titleType:d},Object(m.b)(g,{title:i?Object(m.b)(i,null):A,label:"label",tabs:u}),u&&Object(m.b)(N,{slug:x,tabs:u,currentTab:T}),Object(m.b)(h.a,{padded:!0},a,Object(m.b)(O,{relativePagePath:p})),Object(m.b)(j.a,{pageContext:t,location:c,slug:x,tabs:u,currentTab:T}),Object(m.b)(r.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},"cQ+z":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return b})),a.d(t,"default",(function(){return m}));var c=a("wx14"),i=a("zLVn"),n=(a("q1tI"),a("7ljp")),s=a("013z"),b=(a("qKvR"),{}),r=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(n.b)("div",t)}},o=r("Accordion"),l=r("AccordionItem"),p={_frontmatter:b},d=s.a;function m(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(n.b)(d,Object(c.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)(o,{mdxType:"Accordion"},Object(n.b)(l,{title:"1. Provisioning a Sysdig instance from the catalog",mdxType:"AccordionItem"},"To provision an instance of Sysdig from the IBM Catalog catalog, complete the following steps:",Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},Object(n.b)("a",Object(c.a)({parentName:"p"},{href:"https://cloud.ibm.com/login"}),"Log in to the IBM Cloud console"))),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Click ",Object(n.b)("strong",{parentName:"p"},"Catalog"),". The list of the services that are available on IBM Catalog opens.")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"To filter the list of services that is displayed, select the ",Object(n.b)("strong",{parentName:"p"},"Developer Tools")," category.")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Click the ",Object(n.b)("strong",{parentName:"p"},"IBM Cloud Monitoring with Sysdig")," tile. The ",Object(n.b)("em",{parentName:"p"},"Observability")," dashboard opens.")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Select ",Object(n.b)("strong",{parentName:"p"},"Create instance"),". ")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Select the region. ")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Select a service plan. By default, the ",Object(n.b)("strong",{parentName:"p"},"Trial")," plan is set."),Object(n.b)("p",{parentName:"li"},"For more information about the service plans, see ",Object(n.b)("a",Object(c.a)({parentName:"p"},{href:"https://cloud.ibm.com/docs/Monitoring-with-Sysdig?topic=Monitoring-with-Sysdig-pricing_plans#pricing_plans"}),"Service plans"),".")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Enter a service name.")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Select a resource group. By default, the ",Object(n.b)("strong",{parentName:"p"},"Default")," resource group is set.")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Click ",Object(n.b)("strong",{parentName:"p"},"Create"),"."))),Object(n.b)("p",null,"After you provision an instance, "),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"The ",Object(n.b)("em",{parentName:"li"},"Observability")," dashboard opens. "),Object(n.b)("li",{parentName:"ul"},"A service ID is automatically created. You can use this service ID to get the Sysdig access key for your instance. ")),Object(n.b)("p",null,"Next, configure a metric source by adding a Sysdig agent. This agent is responsible for collecting and forwarding metrics to Sysdig. "))),Object(n.b)(o,{mdxType:"Accordion"},Object(n.b)(l,{title:"2. Create minikube cluster",mdxType:"AccordionItem"},Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"For this section use the ",Object(n.b)("a",Object(c.a)({parentName:"li"},{href:"/prerequisites/#cloud-native-vm"}),"Cloud Native VM")," to run minikube"),Object(n.b)("li",{parentName:"ul"},"Create the VM and ssh into it",Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",Object(c.a)({parentName:"pre"},{className:"language-bash"}),"vagrant up\nvagrant ssh\n"))),Object(n.b)("li",{parentName:"ul"},"Login as root",Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",Object(c.a)({parentName:"pre"},{className:"language-bash"}),"sudo su\n"))),Object(n.b)("li",{parentName:"ul"},"Ignore the login message about minikube, we need to create the minikube as root with no driver",Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",Object(c.a)({parentName:"pre"},{className:"language-bash"}),"minikube start --driver=none\nsource /home/vagrant/.bashrc\n")))))),Object(n.b)(o,{mdxType:"Accordion"},Object(n.b)(l,{title:"3. Install Sysdig agent",mdxType:"AccordionItem"},Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Login as root if not already"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",Object(c.a)({parentName:"pre"},{className:"language-bash"}),"sudo su\n"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Setup the configuration variable for Sysdig Agent, replace the variables with valid values, you can get this from your Sysdig instance on IBM Cloud console:"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",Object(c.a)({parentName:"pre"},{className:"language-bash"}),'SYSDIG_ACCESS_KEY="INSERT KEY HERE"\nREGION="us-south | us-east | eu-de | eu-gb | jp-tok | au-syd"\nCOLLECTOR_ENDPOINT="ingest.${REGION}.monitoring.cloud.ibm.com"\nTAG_DATA="cloudnative:bootcamp"\n')),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"SYSDIG_ACCESS_KEY")," is the ingestion key for the instance that you previously created."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"COLLECTOR_ENDPOINT")," is the ingestion URL for the region where the monitoring instance is available that you previously retrieved."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"TAG_DATA")," are comma-separated tags that are formatted as TAG_NAME:TAG_VALUE. You can associate one or more tags to your Sysdig agent. For example: role:serviceX,location:us-south. Later on, you can use these tags to identify metrics from the environment where the agent is running.")))),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Run the following command to download the install script and execute",Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",Object(c.a)({parentName:"pre"},{className:"language-bash"}),"curl -sL https://ibm.biz/install-sysdig-k8s-agent | \\\nbash -s -- \\\n-a ${SYSDIG_ACCESS_KEY} \\\n-c ${COLLECTOR_ENDPOINT} \\\n-ac 'sysdig_capture_enabled: false' \\\n-t ${TAG_DATA} \\\n-aws\n")))))),Object(n.b)(o,{mdxType:"Accordion"},Object(n.b)(l,{title:"4. Access the Dashboards",mdxType:"AccordionItem"},Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Open Sysdig ")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Select Overview")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Explore the Kubernetes Dashboards, select Explore->Kubernetes")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("a",Object(c.a)({parentName:"p"},{href:"https://docs.sysdig.com/en/clusters-data.html"}),"Cluster")))),Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(n.b)("span",Object(c.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"30.90277777777778%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAIAAABM9SnKAAAACXBIWXMAABYlAAAWJQFJUiTwAAAA6UlEQVQY041QzWoCMRDeNxF70HNBCr1aeyh46LNUlIIHLYJgi75PH6J9gioKWoouu8nGzWyTmcT8gL0Vh2SYyfd9wzdJmnfdp8kiFzbPMwlgLw4ASGqtdm804wVwXmhEY6wJ8Z8uoIiYXLcfh9NFaOgPNOQv+WzJH4PkezedwnPgJVc394OXN1dJKauqckicqrRmjJVYfR1/9rrYiD3/LVPBFJL43qnV0ovrrU5//OoqR4XzzmRSVb4X66XKDiLfKpYdOUdIeQYa1W6rPj+8uHH78DyZR68xx8JZk6QxGjT2TPCbOPP+d8wJSXFJw+hRvSMAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",Object(c.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"clusters",title:"clusters",src:"/static/cc9fe2eb104ff997b59fa2d6ea22e0ee/3cbba/overview-clusters.png",srcSet:["/static/cc9fe2eb104ff997b59fa2d6ea22e0ee/7fc1e/overview-clusters.png 288w","/static/cc9fe2eb104ff997b59fa2d6ea22e0ee/a5df1/overview-clusters.png 576w","/static/cc9fe2eb104ff997b59fa2d6ea22e0ee/3cbba/overview-clusters.png 1152w","/static/cc9fe2eb104ff997b59fa2d6ea22e0ee/0b124/overview-clusters.png 1728w","/static/cc9fe2eb104ff997b59fa2d6ea22e0ee/4ea69/overview-clusters.png 2304w","/static/cc9fe2eb104ff997b59fa2d6ea22e0ee/61c60/overview-clusters.png 2368w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(c.a)({parentName:"li"},{href:"https://docs.sysdig.com/en/nodes-data.html"}),"Nodes"))),Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(n.b)("span",Object(c.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"31.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAIAAABM9SnKAAAACXBIWXMAABYlAAAWJQFJUiTwAAAA7klEQVQY02VQ20oDMRDNpyiC+OiDIvjmBUQQ+i2loIgvUsUHS/0bP6ePYmm73Vw2t5lM1snuIpQeknAmMyecE3Fy8zCezlc1VJt1CJCQEBMjE/HJvC/34ZwTB2fXk9dPafy2Vt77tkNKJHUDgH2Zc273QETi9Gr08vHVCVI3VBY3fIjY3TDn3RKzofjXi6OLu6e3OTNrLTvhbv8QAshqy0QpbTEu1K+Kbq1rBKyV9iEU8eH57eN0xkwpZYwZHBJtov3Wix800QYJbtXIBsNSVxCiiwSpjInjy/vn92KbdoOxY8t/xyaL9Twkzzv5/wCOqEn2Er9QOAAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",Object(c.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"nodes",title:"nodes",src:"/static/f5749faeb973e12f9852dc6255b961bf/3cbba/overview-nodes.png",srcSet:["/static/f5749faeb973e12f9852dc6255b961bf/7fc1e/overview-nodes.png 288w","/static/f5749faeb973e12f9852dc6255b961bf/a5df1/overview-nodes.png 576w","/static/f5749faeb973e12f9852dc6255b961bf/3cbba/overview-nodes.png 1152w","/static/f5749faeb973e12f9852dc6255b961bf/0b124/overview-nodes.png 1728w","/static/f5749faeb973e12f9852dc6255b961bf/4ea69/overview-nodes.png 2304w","/static/f5749faeb973e12f9852dc6255b961bf/1dbb0/overview-nodes.png 2352w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(c.a)({parentName:"li"},{href:"https://docs.sysdig.com/en/namespaces-data.html"}),"Namespaces"))),Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(n.b)("span",Object(c.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"43.75%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAIAAAC9o5sfAAAACXBIWXMAABYlAAAWJQFJUiTwAAABWklEQVQoz21Ry0rDUBDNr/gEEXeKxY2bUnXhX7gQFVwVFRdF1D8URanaohSsTZPmvuY+47lJm5UnYTJ3MmfmzNxks3N80u299H8+Pz76/ffBYJhGTKfTDICTztE4c0wmk2Rj7+ji5iFnVDDOGHfOlxUUEReyOf6LZGv/+PL20RijjXHOhRC8D857IVXBBOKlL4NHMKL6G21ZwoRktXVwfn2PMlprIkJ2neG8M8Yi+C3TVDNSePBBTQVRWT6LnVd2OyBrVxYFy/OZNhpRkFHFuhK6h3w8oqwgwUmNZCY4Ny5w6SJ5rXVYdw4V6mEaHwavCxDiLeZCUWubtGRpu33a7TWEBmhuLbZguVYEnq4OpKyS1jlMGMnr1bbJllmW4wKkVIhic5hWm8C1fpp9fcpfppTkonh7ZS/PUtA45ZG8vNM+u7qrCXYhadE+bho6yRkN1dgYkRIi3kcl+w8R4emigiQp/wAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",Object(c.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"namespaces",title:"namespaces",src:"/static/162cc3515d79db638cc7c79683a7e8d9/3cbba/overview-namespaces.png",srcSet:["/static/162cc3515d79db638cc7c79683a7e8d9/7fc1e/overview-namespaces.png 288w","/static/162cc3515d79db638cc7c79683a7e8d9/a5df1/overview-namespaces.png 576w","/static/162cc3515d79db638cc7c79683a7e8d9/3cbba/overview-namespaces.png 1152w","/static/162cc3515d79db638cc7c79683a7e8d9/0b124/overview-namespaces.png 1728w","/static/162cc3515d79db638cc7c79683a7e8d9/4ea69/overview-namespaces.png 2304w","/static/162cc3515d79db638cc7c79683a7e8d9/5f4f0/overview-namespaces.png 2354w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(c.a)({parentName:"li"},{href:"https://docs.sysdig.com/en/workloads-data.html"}),"Workloads"))),Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(n.b)("span",Object(c.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"49.65277777777777%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAIAAAA7N+mxAAAACXBIWXMAABYlAAAWJQFJUiTwAAABbElEQVQoz2VRTU/CQBDtH1ETjYkJJzloTPQgRo2G/2KiRDwJwYsg/86LVy9Qakuh+9Hdzm7r265B0HfYj5l5+97MBgcX7bveaBLJWTidhjMppapR6F+of0AwTdOgcXrbHYyXTC2WGWO8LCvA2hK3jIk8d6WIlDWqNRhjgsZZ+2kwTheLMEq0LnyRMTb6SsIozpVGkY/8IVtrg92jy05/BM0onhOhDiJO2dbYKN+EI+8dXz8O3vzFw5/BNnjMmExJ7DCPs18xAyKCEShfQdmUVZIkQgjkQCYqCiKtbazZe/oZF1xkglM+m8dIpJnkUsNhsN1s3T+/1gRadbUaj7KEV7AaMpKU1DnI9qc1G+yf3HRfxs7q2jzARA76bsOoTFnUZ7zk464vKO80Ww+9IXiccyEldPw3GNezXWjxISYpCSlypBgXRJaLXEjlbG8dnnf6QxAy983cuzU1G+1npCKWMlKwDQdoDZKaKmOd7W+sWySIBrS7eAAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",Object(c.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"workloads",title:"workloads",src:"/static/6961a9ad5add5f76d27cc9716370964c/3cbba/overview-workloads.png",srcSet:["/static/6961a9ad5add5f76d27cc9716370964c/7fc1e/overview-workloads.png 288w","/static/6961a9ad5add5f76d27cc9716370964c/a5df1/overview-workloads.png 576w","/static/6961a9ad5add5f76d27cc9716370964c/3cbba/overview-workloads.png 1152w","/static/6961a9ad5add5f76d27cc9716370964c/0b124/overview-workloads.png 1728w","/static/6961a9ad5add5f76d27cc9716370964c/4ea69/overview-workloads.png 2304w","/static/6961a9ad5add5f76d27cc9716370964c/89d12/overview-workloads.png 2350w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(n.b)(o,{mdxType:"Accordion"},Object(n.b)(l,{title:"5. Remove the Sysdig agent",mdxType:"AccordionItem"},Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Delete the namespace where the Sysdig agent is installed",Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",Object(c.a)({parentName:"pre"},{className:"language-bash"}),"kubectl delete ns ibm-observe\n")))))))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-electives-monitoring-sysdig-activities-minikube-index-mdx-62de87456ec363a8b15d.js.map