(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),l=a("NmYn"),c=a.n(l),o=a("Wbzz"),s=a("Xrax"),b=a("k4MR"),i=a("TSYQ"),p=a.n(i),u=a("QH2O"),m=a("qKvR"),d=function(e){var t,a=e.title,n=e.tabs,r=void 0===n?[]:n;return Object(m.b)("div",{className:p()(u.pageHeader,(t={},t[u.withTabs]=r.length,t))},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12"},Object(m.b)("h1",{id:"page-title",className:u.text},a)))))},g=a("BAC9"),j=function(e){var t=e.relativePagePath,a=e.repository,n=Object(o.useStaticQuery)("1364590287").site.siteMetadata.repository,r=a||n,l=r.baseUrl,c=r.subDirectory,s=l+"/edit/"+r.branch+c+"/src/pages"+t;return l?Object(m.b)("div",{className:"bx--row "+g.row},Object(m.b)("div",{className:"bx--col"},Object(m.b)("a",{className:g.link,href:s},"Edit this page on GitHub"))):null},O=a("FCXl"),h=a("dI71"),N=a("I8xM"),x=function(e){function t(){return e.apply(this,arguments)||this}return Object(h.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,n=a.split("/").filter(Boolean).slice(-1)[0],r=t.map((function(e){var t,r=c()(e,{lower:!0,strict:!0}),l=r===n,s=new RegExp(n+"/?(#.*)?$"),b=a.replace(s,r);return Object(m.b)("li",{key:e,className:p()((t={},t[N.selectedItem]=l,t),N.listItem)},Object(m.b)(o.Link,{className:N.link,to:""+b},e))}));return Object(m.b)("div",{className:N.tabsContainer},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(m.b)("nav",null,Object(m.b)("ul",{className:N.list},r))))))},t}(r.a.Component),f=a("MjG9");t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,r=e.Title,l=t.frontmatter,i=void 0===l?{}:l,p=t.relativePagePath,u=t.titleType,g=i.tabs,h=i.title,N=i.theme,A=i.description,v=i.keywords,w=Object(o.useStaticQuery)("2456312558").site.pathPrefix,T=w?n.pathname.replace(w,""):n.pathname,k=g?T.split("/").filter(Boolean).slice(-1)[0]||c()(g[0],{lower:!0}):"";return Object(m.b)(b.a,{tabs:g,homepage:!1,theme:N,pageTitle:h,pageDescription:A,pageKeywords:v,titleType:u},Object(m.b)(d,{title:r?Object(m.b)(r,null):h,label:"label",tabs:g}),g&&Object(m.b)(x,{slug:T,tabs:g,currentTab:k}),Object(m.b)(f.a,{padded:!0},a,Object(m.b)(j,{relativePagePath:p})),Object(m.b)(O.a,{pageContext:t,location:n,slug:T,tabs:g,currentTab:k}),Object(m.b)(s.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},p7lZ:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return o})),a.d(t,"default",(function(){return i}));var n=a("wx14"),r=a("zLVn"),l=(a("q1tI"),a("7ljp")),c=a("013z"),o=(a("qKvR"),{}),s={_frontmatter:o},b=c.a;function i(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)(b,Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h3",null,"Prerequisite"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Configure the LogDNA Agent on a kubernetes cluster, you can use one of the labs in this bootcamp located ",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/electives/logging/logdna/#activities"}),"here"))),Object(l.b)("h2",null,"Logging library in Node.js"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"There are multiple logging libraries available for Node.js, on this example we are going to use ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.npmjs.com/package/pino"}),"pino"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"You can instrument a Node.js express web server using ",Object(l.b)("inlineCode",{parentName:"p"},"pino-http")," the example is located in GitHub ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/ibm-cloud-architecture/learning-cloudnative-101/blob/master/examples/logging/nodejs/app.js"}),"app.js")))),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"const express = require('express')\nconst isProduction = process.env.NODE_ENV === 'production'\nconst formatters = {\n    level(label, number) {\n        return { level: label }\n    }\n}\nconst pino = require('pino-http')({\n    prettyPrint: isProduction ? false : true,\n    level: isProduction ? 'error' : 'info',\n    formatters: formatters,\n    messageKey: 'message'\n})\nconst PORT = process.env.PORT || 8080;\n\nvar app = express()\n\napp.use(pino)\n\napp.get('/', function (req, res) {\n    req.log.info('this is a info log message')\n    res.send('Hello World')\n})\napp.get('/error', function (req, res, next) {\n    req.log.error('Internal error with request /error')\n    res.status(503).send('Internal error')\n})\n\napp.listen(PORT, () => {\n    console.log(`Listening on PORT=${PORT} and isProduction=${isProduction}`);\n})\n")),Object(l.b)("h2",null,"Deploy the sample application"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Create a namespace",Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"kubectl create deployment my-app --image=ibmcase/nodejs-logging-example\n")))),Object(l.b)("h2",null,"Test the application"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Expose application web service on local port 8080"),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"kubectl port-forward deployment/my-app 8080:8080\n"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Send http request to the web service"),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),'while true; do sleep 1; curl http://localhost:8080/error -s -w "\\n"; done\n')),Object(l.b)("p",{parentName:"li"},"  Output looks like this"),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),"Internal error\n"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Get the logs"),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"kubectl logs deployment/my-app -f\n"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"The error line printend is JSON"),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{"level":"error","time":1591588923197,"pid":25,"hostname":"my-app-78647889d5-nv4rt","req":{"id":2,"method":"GET","url":"/error","headers":{"host":"localhost:8080","user-agent":"curl/7.64.1","accept":"*/*"},"remoteAddress":"::ffff:127.0.0.1","remotePort":48458},"message":"Internal error with request /error"}\n')))),Object(l.b)("h2",null,"Find the JSON logs in LogDNA"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Open the Views"),Object(l.b)("li",{parentName:"ul"},"Search for ",Object(l.b)("inlineCode",{parentName:"li"},"container:nodejs-logging-example"))),Object(l.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(l.b)("span",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"54.513888888888886%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAAAsTAAALEwEAmpwYAAABfElEQVQoz42SWU7DMBCGfQnEVjuJ4y0hix23pU6A0FAkyiIqBAX1hSeEuALPIHEKzsokgAQFJD6NJWfsGc/MHySlzJLEZarWkUkTkVpjR8+X82o4yHWudS6k6HVg3FsCCcFOLqZD50pXVmVljLG2b01hrTWmiKIYY+z9ASoS/ng3ybYkpPZ9D3/Pj8mfkW3wxtp6M61uHq4YZx7x/MCHFO/2A7L0iVZWN48b8/qyODpvVASoH5d+hxCC4GLCvMm4uH+677u+4Nzz/xMLpflIhf6BVVwqFUnoF3eQD/Cnka6cztWOnYC1wdDjdeOKLIklT/Ug1iMVbzERQfetBcH7BkaOCSQImORMhDAaGlIUUDq7nbvagabbu266OBuUw3o61rbQ1ugCpDNwtH86Ppgdpnme9fMoUTBd0BgxGo6G27gtpxUmFBQeCKhP8Bd6OGABZRSq3gDWYW2CF5XVTpamO+Wg3hs1tYNnwpABvAM2cRyDBvAj8s6nlAo7oOc3MGdlMNmTkX8AAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(l.b)("img",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"json-logs-nodejs",title:"json-logs-nodejs",src:"/static/59c01581470828c33cfc5a842b84c0cc/3cbba/json-logs-nodejs.png",srcSet:["/static/59c01581470828c33cfc5a842b84c0cc/7fc1e/json-logs-nodejs.png 288w","/static/59c01581470828c33cfc5a842b84c0cc/a5df1/json-logs-nodejs.png 576w","/static/59c01581470828c33cfc5a842b84c0cc/3cbba/json-logs-nodejs.png 1152w","/static/59c01581470828c33cfc5a842b84c0cc/92c65/json-logs-nodejs.png 1216w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))}i.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-electives-logging-logdna-activities-logger-nodejs-mdx-e01804653f774390ac22.js.map