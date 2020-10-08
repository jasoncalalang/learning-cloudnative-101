(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),c=a("NmYn"),l=a.n(c),i=a("Wbzz"),b=a("Xrax"),o=a("k4MR"),s=a("TSYQ"),p=a.n(s),m=a("QH2O"),d=a("qKvR"),j=function(e){var t,a=e.title,n=e.tabs,r=void 0===n?[]:n;return Object(d.b)("div",{className:p()(m.pageHeader,(t={},t[m.withTabs]=r.length,t))},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12"},Object(d.b)("h1",{id:"page-title",className:m.text},a)))))},O=a("BAC9"),g=function(e){var t=e.relativePagePath,a=e.repository,n=Object(i.useStaticQuery)("1364590287").site.siteMetadata.repository,r=a||n,c=r.baseUrl,l=r.subDirectory,b=c+"/edit/"+r.branch+l+"/src/pages"+t;return c?Object(d.b)("div",{className:"bx--row "+O.row},Object(d.b)("div",{className:"bx--col"},Object(d.b)("a",{className:O.link,href:b},"Edit this page on GitHub"))):null},u=a("FCXl"),h=a("dI71"),N=a("I8xM"),f=function(e){function t(){return e.apply(this,arguments)||this}return Object(h.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,n=a.split("/").filter(Boolean).slice(-1)[0],r=t.map((function(e){var t,r=l()(e,{lower:!0,strict:!0}),c=r===n,b=new RegExp(n+"/?(#.*)?$"),o=a.replace(b,r);return Object(d.b)("li",{key:e,className:p()((t={},t[N.selectedItem]=c,t),N.listItem)},Object(d.b)(i.Link,{className:N.link,to:""+o},e))}));return Object(d.b)("div",{className:N.tabsContainer},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(d.b)("nav",null,Object(d.b)("ul",{className:N.list},r))))))},t}(r.a.Component),v=a("MjG9");t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,r=e.Title,c=t.frontmatter,s=void 0===c?{}:c,p=t.relativePagePath,m=t.titleType,O=s.tabs,h=s.title,N=s.theme,y=s.description,A=s.keywords,T=Object(i.useStaticQuery)("2456312558").site.pathPrefix,C=T?n.pathname.replace(T,""):n.pathname,P=O?C.split("/").filter(Boolean).slice(-1)[0]||l()(O[0],{lower:!0}):"";return Object(d.b)(o.a,{tabs:O,homepage:!1,theme:N,pageTitle:h,pageDescription:y,pageKeywords:A,titleType:m},Object(d.b)(j,{title:r?Object(d.b)(r,null):h,label:"label",tabs:O}),O&&Object(d.b)(f,{slug:C,tabs:O,currentTab:P}),Object(d.b)(v.a,{padded:!0},a,Object(d.b)(g,{relativePagePath:p})),Object(d.b)(u.a,{pageContext:t,location:n,slug:C,tabs:O,currentTab:P}),Object(d.b)(b.a,null))}},"7h4w":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return i})),a.d(t,"default",(function(){return s}));var n=a("wx14"),r=a("zLVn"),c=(a("q1tI"),a("7ljp")),l=a("013z"),i=(a("qKvR"),{}),b={_frontmatter:i},o=l.a;function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.b)(o,Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",null,"General Instructions"),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Clone the git repository"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),"git clone https://github.com/ibm-cloud-architecture/learning-distributed-tracing-101.git\n"))),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Change to the lab directory"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),"cd learning-distrubing-tracing-101/lab-jaeger-ocp\n")))),Object(c.b)("h2",null,"Understanding Jaeger"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Read the OpenShift Documentation ",Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.openshift.com/container-platform/4.1/service_mesh/service_mesh_arch/ossm-jaeger.html"}),"Understanding Jaeger"))),Object(c.b)("h2",null,"Installing the Jaeger operator"),Object(c.b)("p",null,"OpenShift 3"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Install from OperatorHub.io ",Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"https://operatorhub.io/operator/jaeger"}),"Jaeger Operator"),"\nOpenShift 4, You can use the CodeReady Containers for local development cluster ",Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"https://cloud.redhat.com/openshift/install/crc/installer-provisioned"}),"Code Ready Containers")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.openshift.com/container-platform/4.1/service_mesh/service_mesh_install/installing-ossm.html#ossm-operator-install-jaeger_installing-ossm"}),"Installing the Jaeger Operator on OpenShift 4"))),Object(c.b)("h2",null,"(OpenShift 3) Creating an instance of Jaeger"),Object(c.b)("p",null,"Create a Custom Resource for Jaeger"),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Log in to the OpenShift Container Platform web console.")),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Select project ",Object(c.b)("inlineCode",{parentName:"p"},"operators")," ")),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Verify Jaeger Operator installed")),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"From the command line, create a Jaeger instance in the ",Object(c.b)("inlineCode",{parentName:"p"},"default")," namespace"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),"kubectl apply -f - <<EOF\napiVersion: jaegertracing.io/v1\nkind: Jaeger\nmetadata:\n  name: my-jaeger\nEOF\n")))),Object(c.b)("h2",null,"(OpenShift 4) Creating an instance of Jaeger"),Object(c.b)("p",null,"Create a Custom Resource for Jaeger"),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},"Log in to the OpenShift Container Platform web console."),Object(c.b)("li",{parentName:"ol"},"Select project ",Object(c.b)("inlineCode",{parentName:"li"},"openshift-operators")),Object(c.b)("li",{parentName:"ol"},"Navigate to ",Object(c.b)("strong",{parentName:"li"},"Operators → Installed Operators")),Object(c.b)("li",{parentName:"ol"},"Click the ",Object(c.b)("strong",{parentName:"li"},"Jaeger Operator")," provided by Red Hat"),Object(c.b)("li",{parentName:"ol"},"Under ",Object(c.b)("strong",{parentName:"li"},"Provided APIs")," "),Object(c.b)("li",{parentName:"ol"},"Click ",Object(c.b)("strong",{parentName:"li"},"Create Instance")),Object(c.b)("li",{parentName:"ol"},"Edit namespace to your project for example ",Object(c.b)("inlineCode",{parentName:"li"},"default")),Object(c.b)("li",{parentName:"ol"},"Review yaml and Click Create")),Object(c.b)("h2",null,"Verify Jaeger instance created"),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Verify the Jaeger services in the ",Object(c.b)("inlineCode",{parentName:"p"},"default")," namespace"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),"oc get services -n default | grep jaeger\nmy-jaeger-agent                ClusterIP      None             <none>      5775/UDP,5778/TCP,6831/UDP,6832/UDP      7m\nmy-jaeger-collector            ClusterIP      172.21.191.135   <none>      9411/TCP,14250/TCP,14267/TCP,14268/TCP   7m\nmy-jaeger-collector-headless   ClusterIP      None             <none>      9411/TCP,14250/TCP,14267/TCP,14268/TCP   7m\nmy-jaeger-query                ClusterIP      172.21.89.78     <none>      443/TCP                                  7m\n")))),Object(c.b)("p",null,"NOTE: Take a look at the ",Object(c.b)("inlineCode",{parentName:"p"},"my-jaeger-collector")," on port ",Object(c.b)("inlineCode",{parentName:"p"},"14268/TCP")," this is the service to be used by our services to send the Jaeger traces containing the spans, you will configure this in the kubernetes deployment yaml manifest."),Object(c.b)("ol",{start:2},Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Find the route to the Jaeger UI"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),"oc get route my-jaeger        \nNAME        HOST/PORT                            PATH   SERVICES          PORT    TERMINATION   WILDCARD\nmy-jaeger   my-jaeger-default.apps-crc.testing          my-jaeger-query   <all>   reencrypt     None\n"))),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Open the Jaeger UI in the browser using value HOST/PORT - ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://my-jaeger-default.apps-crc.testing"}),"https://my-jaeger-default.apps-crc.testing")))),Object(c.b)("h2",null,"Deploy the Application"),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},"Deploy the services ",Object(c.b)("inlineCode",{parentName:"li"},"service-a")," and ",Object(c.b)("inlineCode",{parentName:"li"},"service-b"))),Object(c.b)("p",null,"Use the file ",Object(c.b)("inlineCode",{parentName:"p"},"jaeger-nodejs.yaml")," for Node.js or the file ",Object(c.b)("inlineCode",{parentName:"p"},"jaeger-java.yaml")," for Java"),Object(c.b)("p",null,"Here is an example using Node.js services and deployments:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),"oc apply -f jaeger-nodejs.yaml -n default\n")),Object(c.b)("p",null,"Let’s look at the file content on how the services are defined to be deploy into OpenShift cluster:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),"---\napiVersion: v1\nkind: Service\nmetadata:\n  name: service-a\n  labels:\n    app: service-a\nspec:\n  ports:\n    - port: 8080\n      name: http\n  selector:\n    app: service-a\n---\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: service-a\n  labels:\n    app: service-a\n    version: v1\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      app: service-a\n  template:\n    metadata:\n      labels:\n        app: service-a\n        version: v1\n    spec:\n      containers:\n        - name: app\n          image: csantanapr/service-a-nodejs\n          env:\n            - name: JAEGER_ENDPOINT\n              value: http://my-jaeger-collector:14268/api/traces\n            - name: SERVICE_FORMATTER\n              value: service-b\n          imagePullPolicy: Always\n          ports:\n            - containerPort: 8080\n---\napiVersion: v1\nkind: Service\nmetadata:\n  name: service-b\n  labels:\n    app: service-b\nspec:\n  ports:\n    - port: 8081\n      name: http\n  selector:\n    app: service-b\n---\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: service-b\n  labels:\n    app: service-b\n    version: v1\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      app: service-b\n  template:\n    metadata:\n      labels:\n        app: service-b\n        version: v1\n    spec:\n      containers:\n        - name: app\n          image: csantanapr/service-b-nodejs\n          env:\n            - name: JAEGER_ENDPOINT\n              value: http://my-jaeger-collector:14268/api/traces\n          imagePullPolicy: Always\n          ports:\n            - containerPort: 8081\n\n")),Object(c.b)("p",null,"In the yaml deployment manifest there are few items to point out:"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Ports")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"The port for the container is specified in the service and the container in the deployment, for example ",Object(c.b)("inlineCode",{parentName:"li"},"service-a")," with port ",Object(c.b)("inlineCode",{parentName:"li"},"8080")," and ",Object(c.b)("inlineCode",{parentName:"li"},"service-b")," with port ",Object(c.b)("inlineCode",{parentName:"li"},"8081"),".")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Environment Variables")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"The variable ",Object(c.b)("inlineCode",{parentName:"li"},"JAEGER_ENDPOINT")," is specified to indicate to the Jaeger client library to send the traces using http to the jaeger collector service ",Object(c.b)("inlineCode",{parentName:"li"},"http://my-jaeger-collector:14268/api/traces")," that is deployed on the same namespace ",Object(c.b)("inlineCode",{parentName:"li"},"default")," as the services. You could also opt for using a side card and use UDP to send traces to an agent side card and this will foward the traces to the jaeger collector for more info see the jaeger operator documentation on how to enable this with an annotation.  "),Object(c.b)("li",{parentName:"ul"},"The variable ",Object(c.b)("inlineCode",{parentName:"li"},"SERVICE_FORMATTER")," used by ",Object(c.b)("inlineCode",{parentName:"li"},"service-a")," to indicate the hostname of ",Object(c.b)("inlineCode",{parentName:"li"},"service-b")," that will use to format the hello message.")),Object(c.b)("ol",{start:2},Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Verify services are deployed and running:"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),"oc get all -l app=service-a -n default\noc get all -l app=service-b -n default\nNAME                             READY   STATUS    RESTARTS   AGE\npod/service-a-785975554d-5cql2   1/1     Running   0          19m\npod/service-b-674b748766-t7464   1/1     Running   0          19m\n\nNAME                TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)    AGE\nservice/service-a   ClusterIP   172.30.182.142   <none>        8080/TCP   20m\nservice/service-b   ClusterIP   172.30.108.212   <none>        8081/TCP   19m\n\nNAME                        READY   UP-TO-DATE   AVAILABLE   AGE\ndeployment.apps/service-a   1/1     1            1           19m\ndeployment.apps/service-b   1/1     1            1           19m\n"))),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Expose the service ",Object(c.b)("inlineCode",{parentName:"p"},"service-a")," with a route"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),"oc create route edge  --service=service-a -n default\n"))),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Get the hostname for the route:"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),"oc get route service-a -n default\nNAME        HOST/PORT                            PATH   SERVICES    PORT   TERMINATION   WILDCARD\nservice-a   service-a-default.apps-crc.testing          service-a   http   edge          None\n")))),Object(c.b)("h2",null,"Find Traces"),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Use curl or open browser with the endpoint URL using the HOST/PORT of the route"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),"curl -k https://service-a-default.apps-crc.testing/sayHello/Carlos\nHello from service-b Carlos!\n")))),Object(c.b)("p",null,"From the result you can see that ",Object(c.b)("inlineCode",{parentName:"p"},"service-a")," called ",Object(c.b)("inlineCode",{parentName:"p"},"service-b")," and replied back."),Object(c.b)("ol",{start:2},Object(c.b)("li",{parentName:"ol"},"In the Jaeger UI select service-a and click ",Object(c.b)("strong",{parentName:"li"},"Find Traces"))),Object(c.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"65.625%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAIAAAAmMtkJAAAACXBIWXMAABYlAAAWJQFJUiTwAAABYElEQVQoz5VSS26DMBTksFWbXzeNcoD0Cr1IFjlIo5JFNiEt+ZWPsfEHbOykA7Q0m0p09ASy8fjNzMN7nEye5/PX1Wrj+y+Lxd1y+TSbjYbD+4c/MRgMptPpaDz2hNaZlBkhSZIYra/uAlz7wUsIiQkpy7IoCjy1MVVlL33gnJfnOaNUa91wS2td2xiXdAqqqnLue2Fxolng5XHOpZTlDwTnSkpnrTHGQgN4xmgogiZdFxRKIQpVYN8TDWQDkCNCTnFM8jxhLKZZnGUZ50wpJmVX2MmEyJVqZDPWeobwXRSttls/CN6CYP3+sQ7DXUqOXBxy/lucY+fEeU3G7fCsigLyEF5wPPnhfhPuD9HnISVnlp8pu61jRoM4DVNSy6aUQnObNqxenUNuMGtNCZPwj2BvC5+oKqTWdWAgK6VacjvknqOuyYSQrnP/PwTnatngd6PqT647oyEya0cF8df/4AurIdYtK7M6YwAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(c.b)("img",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"jaeger-trace",title:"jaeger-trace",src:"/static/4b8d8c1bf8781b913001981dae853258/3cbba/ocp-jaeger-traces.png",srcSet:["/static/4b8d8c1bf8781b913001981dae853258/7fc1e/ocp-jaeger-traces.png 288w","/static/4b8d8c1bf8781b913001981dae853258/a5df1/ocp-jaeger-traces.png 576w","/static/4b8d8c1bf8781b913001981dae853258/3cbba/ocp-jaeger-traces.png 1152w","/static/4b8d8c1bf8781b913001981dae853258/0b124/ocp-jaeger-traces.png 1728w","/static/4b8d8c1bf8781b913001981dae853258/4ea69/ocp-jaeger-traces.png 2304w","/static/4b8d8c1bf8781b913001981dae853258/fed10/ocp-jaeger-traces.png 2658w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(c.b)("ol",{start:3},Object(c.b)("li",{parentName:"ol"},"Click on one of the traces and expand the spans in the trace")),Object(c.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"92.36111111111111%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAASCAIAAADUsmlHAAAACXBIWXMAABYlAAAWJQFJUiTwAAACeElEQVQ4y21TW1bbMBD1VmlJOLQfdBccuglO11Fo6QI4/QglJRCS2LFlWdZjRpIV20nasUN59p6r0Wis0WOuHH0+Oflyevrz8vJqNDo5Pn63t/fp6Ojj4eHBcEgcDgYHwycOB/uD/fcU7OZ8OIwk4l2SjCaTX7e3N7PZPMtypXVVQVj5prV17dp2R9u0WDdY1yYEaZ2pQjQR5T3gPcAM7QwwNpAgxgALA701u2FnjVmoItYlcYlqyrNoMZ8vplMtREA0Sl3nfFyWYyGuOf/FOTnjQlyx/Looer+4yhnZzmEsmtKkOImlYoCJMV/j5CzNfnBxkfOLvNjxO+M7nqWMeJ6xb1l+nrIoDasR2Bu012An6JaLBc8ya4wpS1AKlSJrtQ7OeTqalOSj1g6AbJRWYaThBuzY2Ft0cbKcz6lqWRzHSZJQWxLSlEhexhjLc/qaZpkQ4lky7Qy2EMI5B9S8d1VFlhD+oXoGa+3LZOySEUABSGM6C6AR+xV8v+AT3iSD1ca0TSOd095v1uu2R/MGbbumg0RLH0bGTqz/jW4CTkp6IkYoRR0iug7+JR3FoUdkrL1L4nnGuNbau6ap26Zu6tUqVHRH6jr2Tk2dp5oXFeYgEw95tKYzuKKxfO3FJsgsTeazOyHyULngXQguVLbzK1d5q6UwqiTFHImpy2i73Wwb/adW25Xc1poUmk7vSRwSiHOe5znnRVEIIolEIyFKClGwlDLabNbbVZ/ZUTGW0Vy6sKTbK9njoXsYqKfxi+TNigolSQaFSH+btpYqQhafSf0IqtzrncuydNZSMtUPrHW71+J99Qavk2nn3XmElEyIQkq0/8GjVH8B/R/Ra9bm7BEAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(c.b)("img",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"jaeger-span",title:"jaeger-span",src:"/static/e6ff5abc20ca048a28847aa35ea03f77/3cbba/ocp-jaeger-spans.png",srcSet:["/static/e6ff5abc20ca048a28847aa35ea03f77/7fc1e/ocp-jaeger-spans.png 288w","/static/e6ff5abc20ca048a28847aa35ea03f77/a5df1/ocp-jaeger-spans.png 576w","/static/e6ff5abc20ca048a28847aa35ea03f77/3cbba/ocp-jaeger-spans.png 1152w","/static/e6ff5abc20ca048a28847aa35ea03f77/0b124/ocp-jaeger-spans.png 1728w","/static/e6ff5abc20ca048a28847aa35ea03f77/4ea69/ocp-jaeger-spans.png 2304w","/static/e6ff5abc20ca048a28847aa35ea03f77/630e6/ocp-jaeger-spans.png 2656w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(c.b)("p",null,"Check one of the labs ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"./lab1"}),"Lab Jaeger - Node.js")," or ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"./lab2"}),"Lab Jaeger - Java")," for a more in depth lab for Opentracing with Jaeger."))}s.isMDXComponent=!0},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-electives-dist-trace-activities-lab-4-index-mdx-83b4b6f2b13b9ec3969c.js.map