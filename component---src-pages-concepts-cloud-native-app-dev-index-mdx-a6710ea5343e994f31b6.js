(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"013z":function(e,t,a){"use strict";var i=a("q1tI"),n=a.n(i),o=a("NmYn"),l=a.n(o),r=a("Wbzz"),s=a("Xrax"),c=a("k4MR"),u=a("TSYQ"),p=a.n(u),b=a("QH2O"),d=a("qKvR"),h=function(e){var t,a=e.title,i=e.tabs,n=void 0===i?[]:i;return Object(d.b)("div",{className:p()(b.pageHeader,(t={},t[b.withTabs]=n.length,t))},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12"},Object(d.b)("h1",{id:"page-title",className:b.text},a)))))},m=a("BAC9"),g=function(e){var t=e.relativePagePath,a=e.repository,i=Object(r.useStaticQuery)("1364590287").site.siteMetadata.repository,n=a||i,o=n.baseUrl,l=n.subDirectory,s=o+"/edit/"+n.branch+l+"/src/pages"+t;return o?Object(d.b)("div",{className:"bx--row "+m.row},Object(d.b)("div",{className:"bx--col"},Object(d.b)("a",{className:m.link,href:s},"Edit this page on GitHub"))):null},y=a("FCXl"),f=a("dI71"),O=a("I8xM"),j=function(e){function t(){return e.apply(this,arguments)||this}return Object(f.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,i=a.split("/").filter(Boolean).slice(-1)[0],n=t.map((function(e){var t,n=l()(e,{lower:!0,strict:!0}),o=n===i,s=new RegExp(i+"/?(#.*)?$"),c=a.replace(s,n);return Object(d.b)("li",{key:e,className:p()((t={},t[O.selectedItem]=o,t),O.listItem)},Object(d.b)(r.Link,{className:O.link,to:""+c},e))}));return Object(d.b)("div",{className:O.tabsContainer},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(d.b)("nav",null,Object(d.b)("ul",{className:O.list},n))))))},t}(n.a.Component),v=a("MjG9");t.a=function(e){var t=e.pageContext,a=e.children,i=e.location,n=e.Title,o=t.frontmatter,u=void 0===o?{}:o,p=t.relativePagePath,b=t.titleType,m=u.tabs,f=u.title,O=u.theme,w=u.description,N=u.keywords,k=Object(r.useStaticQuery)("2456312558").site.pathPrefix,x=k?i.pathname.replace(k,""):i.pathname,T=m?x.split("/").filter(Boolean).slice(-1)[0]||l()(m[0],{lower:!0}):"";return Object(d.b)(c.a,{tabs:m,homepage:!1,theme:O,pageTitle:f,pageDescription:w,pageKeywords:N,titleType:b},Object(d.b)(h,{title:n?Object(d.b)(n,null):f,label:"label",tabs:m}),m&&Object(d.b)(j,{slug:x,tabs:m,currentTab:T}),Object(d.b)(v.a,{padded:!0},a,Object(d.b)(g,{relativePagePath:p})),Object(d.b)(y.a,{pageContext:t,location:i,slug:x,tabs:m,currentTab:T}),Object(d.b)(s.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},Uu5G:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return r})),a.d(t,"default",(function(){return u}));var i=a("wx14"),n=a("zLVn"),o=(a("q1tI"),a("7ljp")),l=a("013z"),r=(a("qKvR"),{}),s={_frontmatter:r},c=l.a;function u(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(o.b)(c,Object(i.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",null,"Introduction"),Object(o.b)("p",null,"Cloud native is all about the concepts that are used for building and deploying your applications on any cloud platform. It involves many things like adopting microservices architecture, containerization, orchestration etc."),Object(o.b)("p",null,"Cloud native applications will be managed by the infrastructure which in turn is managed by applications. In this installment, let us see what you need to include in your cloud native applications and how to run them on the cloud infrastructure."),Object(o.b)("h2",null,"Application Design"),Object(o.b)("p",null,"An application is called cloud native if it is designed in a way such that it takes advantage of most of the benefits of the cloud. So, these applications are all managed by software like mentioned before."),Object(o.b)("p",null,"Let’s say we have an application packaged in a container and running on Kubernetes. This application does not accept any runtime configuration. There is no logging defined. Some of the configurations like database IP, credentials etc are hardcoded."),Object(o.b)("p",null,"What happens if the application stops working ? How are you going to debug it ?"),Object(o.b)("p",null,"Will you call such an application cloud-native ? Definitely not."),Object(o.b)("p",null,"Containers and Kubernetes help you to run the applications smoothly on cloud infrastructure. Along with this, you also need to know how to effectively build and manage these applications."),Object(o.b)("h2",null,"Cloud native Capabilities"),Object(o.b)("p",null,"While developing cloud native applications, some of the capabilities that we include in the applications are as follows."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Configuration"),Object(o.b)("li",{parentName:"ul"},"Health Checks"),Object(o.b)("li",{parentName:"ul"},"Logging"),Object(o.b)("li",{parentName:"ul"},"Metrics"),Object(o.b)("li",{parentName:"ul"},"Resiliency"),Object(o.b)("li",{parentName:"ul"},"Service discovery")),Object(o.b)("p",null,"Usually, you can implement them in your applications in two ways."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Using the language libraries"),Object(o.b)("li",{parentName:"ul"},"Using sidecar")),Object(o.b)("p",null,"To implement these capabilities, you can import the language libraries into your application which will automatically get you most of these capabilities with out defining any extra code. This is easy to do and is well suitable if you have few languages in your applications."),Object(o.b)("p",null,"But if your application is a polyglot with many different languages, it is difficult to manage all the libraries. In such cases, you can use sidecar which is implemented as separate service including things like Health end point monitoring health of the application, configuration watching changes in the configs and reloading the application when required, registrator for service discovery, envoy proxy to handle resiliency and metrics etc."),Object(o.b)("h2",null,"Application Lifecycle"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Deploy")),Object(o.b)("p",null,"Deploying your cloud native application is not just taking the existing code and running it on cloud. Cloud native applications are defined in a way such the software manage them. For this, make sure you have the below embedded in your application."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Continuous integration"),Object(o.b)("li",{parentName:"ul"},"Continuous deployment"),Object(o.b)("li",{parentName:"ul"},"Health checks")),Object(o.b)("p",null,"Deployments for your application should be automated, tested and verified. If you are introducing new features to your applications, you should be able to deploy them dynamically without restarting your applications. Also, when you are planning on a new feature or a new version to be deployed, make sure you have traffic control mechanisms in place which allows you to route the traffic towards or away from the application as per your requirements to reduce the outage impact."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Run")),Object(o.b)("p",null,"Running your application is one of the most important phases in the application lifecycle. While running the application, two most important aspects to keep in mind are"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Observability"),Object(o.b)("li",{parentName:"ul"},"Operability")),Object(o.b)("p",null,"While running your application, you need to understand the what the application is doing which is observability and also you you should be able to change the application as needed which is operability."),Object(o.b)("p",null,"When your application is not meeting the SLO or is broken, what do you do ? In a cloud native application, we follow the below steps to see where the problem resides."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Verify infrastructure tests"),Object(o.b)("li",{parentName:"ol"},"Application debugging - This can be done by using application performance monitoring (APM), distributed tracing etc."),Object(o.b)("li",{parentName:"ol"},"More verbose Logging")),Object(o.b)("p",null,"In today’s world, as the business keeps increasing, the application grows and you need to make sure that you defined a proper debugging strategy for your application which makes it easy to dynamically debug the applications similar to how we dynamically deploy them."),Object(o.b)("p",null,"One more important things to remember is that it is always easy to push new applications but the converse is not true. Though that is the case, it is still very important to retire the old applications that are not in use."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Retire")),Object(o.b)("p",null,"In cloud-native applications, all the new services are deployed automatically. Also, the services are monitored automatically using the monitoring mechanisms in place."),Object(o.b)("p",null,"Don’t you think the services should be retired in the same way too ?"),Object(o.b)("p",null,"If you keep deploying new services without cleaning up the old ones which are in no longer use accrues a lot of technical debt. So, make sure your application includes a telemetry mechanism which helps you to identify if a service is being used. If not, the decision should be made by the business to keep it or retire it."),Object(o.b)("h2",null,"Twelve factor design methodology"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("em",{parentName:"li"},"Code base")," - One code base tracked in revision control, many deploys."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("em",{parentName:"li"},"Dependencies")," - Explicitly declare and isolate dependencies."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("em",{parentName:"li"},"Config")," - Store config in the environment."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("em",{parentName:"li"},"Backing services")," - Treat backing services as attached resources."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("em",{parentName:"li"},"Build, release, run")," - Strictly separate build and run stages."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("em",{parentName:"li"},"Processes")," - Execute the app as one (or more) stateless process(es)."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("em",{parentName:"li"},"Port binding")," - Export services through port binding."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("em",{parentName:"li"},"Concurrency")," - Scale-out through the process model."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("em",{parentName:"li"},"Disposability")," - Maximize robustness with fast startup and graceful shutdown."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("em",{parentName:"li"},"Dev/prod parity")," - Keep development, staging, and production as similar as possible."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("em",{parentName:"li"},"Logs")," - Treat logs as event streams."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("em",{parentName:"li"},"Admin processes")," - Run admin/management tasks as one-off processes.")),Object(o.b)("div",{className:"gatsby-resp-iframe-wrapper",style:{paddingBottom:"56.25%",position:"relative",height:"0",overflow:"hidden"}}," ",Object(o.b)("iframe",Object(i.a)({parentName:"div"},{src:"https://www.youtube.com/embed/jufe_sHejXc",frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,style:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"}}))," "),Object(o.b)("h2",null,"Application Requirements"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Runtime and Isolation")),Object(o.b)("p",null,"Your applications must be isolated from the operating system. You should be able to run them any where. This allows you to run multiple applications on same server and also allows to control their dependencies and resources."),Object(o.b)("p",null,"One way to achieve this is containerization. Among the different container options, Docker is popular. Container is nothing but a way to package your application and run it in an isolated environment. While developing the applications, also make sure all the dependencies are declared in your application before packaging it."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Resource Allocation and Scheduling")),Object(o.b)("p",null,"Your applications must include dynamic scheduling. This helps you to figure out where the application must run and this decisions are automatically taken for you by the scheduler. This scheduler collects all the informations of resources for different system and chooses the right place to run the application. Operator can override the decisions of the scheduler if he wants to."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Environment isolation")),Object(o.b)("p",null,"You need a proper environment isolation to differentiate dev, test, stage, production etc. based on your requirements. With out the complete duplication of your cluster, the infrastructure should be able to separate the dependencies through different application environments."),Object(o.b)("p",null,"These environments should include all of the resources like databases, network resources etc. needed by the application. Cloud native infrastructure can create environments with very low overhead."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Service discovery")),Object(o.b)("p",null,"In your application, there may be multiple services. These services may depend on one another. How will they find each other if one service needs to communicate with other ? For this, the infrastructure should provide a way for services to find each other."),Object(o.b)("p",null,"This may be in different ways. It can be using API calls or using DNS or with network proxies. There should be a service discovery mechanism in place and how you do this does not matter."),Object(o.b)("p",null,"Usually cloud native applications make use their infrastructure for service discovery to identify the dependent services. Some of them are cloud metadata services, DNS, etcd and consul etc."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"State Management")),Object(o.b)("p",null,"While defining your cloud native application, you should provide a mechanism to check the status of the application. This can be done by an API or hook that checks the current state of the application like if it is submitted, Scheduled, ready, healthy, unhealthy, terminating etc."),Object(o.b)("p",null,"We usually have such capabilities in any of the orchestration platform we use. For example, if you consider Kubernetes, you can do this using events, probes and hooks. When the application is submitted, scheduled, or scaled, the event is triggered. Readiness probe checks if the application is ready and liveness probes checks if the application is healthy. Hooks are used for events that need to happen before or after processes start."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Monitoring and logging")),Object(o.b)("p",null,"Monitoring and logging should be a part of the cloud-native application. Dynamically monitoring all the services of the application is important. It keeps checking the entire application and is used for debugging purposes when required. Also, make sure your logging system should be able to collect all the logs and consolidate them together based on application, environments, tags etc."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Metrics")),Object(o.b)("p",null,"Cloud-native applications must include metrics as a part of their code. All the telemetry data needed will be provided by the metrics. This helps you to know whether your application is meeting the service-level objectives."),Object(o.b)("p",null,"Metrics are collected at instance level and later aggregated together to provide the complete view of the application. Once the application provides metrics, underlying infrastructure will scrape them out and use them for analysis."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Debugging and tracing")),Object(o.b)("p",null,"When an application is deployed and problem occurs, we refer to logging system. But if that does not resolve the issue, we need distributed tracing. Distributed tracing helps us to understand what is happening in the application. They will us to debug problems by providing us an interface to visualize which is different from the details we get from logging. Also, it provides shorter feedback loops which helps you to debug distributed systems easily."),Object(o.b)("p",null,"Application tracing is always important and make sure it is a part of your cloud-native application. If in case you cannot include it in the application, you can also enable it at infrastructure level using proxies or traffic analysis."),Object(o.b)("h2",null,"Conclusion"),Object(o.b)("p",null,"We discussed the cloud-native application design, implementations of cloud native patterns, and application life cycle. We also saw how we can design our cloud native applications using the twelve factor methodology. Along with this, we also explored what we need to include in our cloud naive application while building it."),Object(o.b)("h2",null,"References"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(i.a)({parentName:"li"},{href:"https://learning.oreilly.com/library/view/managing-cloud-native/9781492037071/%5BJustin"}),"https://learning.oreilly.com/library/view/managing-cloud-native/9781492037071/[Justin")," Garrison, Kris Nova, (2018). Managing cloud native applications. Publisher: O’Reilly Media, Inc.]"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(i.a)({parentName:"li"},{href:"https://learning.oreilly.com/library/view/cloud-native-architectures/9781787280540/%5BPiyum"}),"https://learning.oreilly.com/library/view/cloud-native-architectures/9781787280540/[Piyum")," Zonooz, Erik Farr, Kamal Arora, Tom Laszewski, (2018). Cloud Native Architectures. Publisher: Packt Publishing]"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(i.a)({parentName:"li"},{href:"https://12factor.net/codebase%5B12factor.net%5D"}),"https://12factor.net/codebase[12factor.net]"))))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-concepts-cloud-native-app-dev-index-mdx-a6710ea5343e994f31b6.js.map