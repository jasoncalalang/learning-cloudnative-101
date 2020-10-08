(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),i=a.n(n),s=a("NmYn"),r=a.n(s),c=a("Wbzz"),o=a("Xrax"),l=a("k4MR"),b=a("TSYQ"),p=a.n(b),d=a("QH2O"),m=a("qKvR"),g=function(e){var t,a=e.title,n=e.tabs,i=void 0===n?[]:n;return Object(m.b)("div",{className:p()(d.pageHeader,(t={},t[d.withTabs]=i.length,t))},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12"},Object(m.b)("h1",{id:"page-title",className:d.text},a)))))},j=a("BAC9"),u=function(e){var t=e.relativePagePath,a=e.repository,n=Object(c.useStaticQuery)("1364590287").site.siteMetadata.repository,i=a||n,s=i.baseUrl,r=i.subDirectory,o=s+"/edit/"+i.branch+r+"/src/pages"+t;return s?Object(m.b)("div",{className:"bx--row "+j.row},Object(m.b)("div",{className:"bx--col"},Object(m.b)("a",{className:j.link,href:o},"Edit this page on GitHub"))):null},O=a("FCXl"),h=a("dI71"),f=a("I8xM"),N=function(e){function t(){return e.apply(this,arguments)||this}return Object(h.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,n=a.split("/").filter(Boolean).slice(-1)[0],i=t.map((function(e){var t,i=r()(e,{lower:!0,strict:!0}),s=i===n,o=new RegExp(n+"/?(#.*)?$"),l=a.replace(o,i);return Object(m.b)("li",{key:e,className:p()((t={},t[f.selectedItem]=s,t),f.listItem)},Object(m.b)(c.Link,{className:f.link,to:""+l},e))}));return Object(m.b)("div",{className:f.tabsContainer},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(m.b)("nav",null,Object(m.b)("ul",{className:f.list},i))))))},t}(i.a.Component),A=a("MjG9");t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,i=e.Title,s=t.frontmatter,b=void 0===s?{}:s,p=t.relativePagePath,d=t.titleType,j=b.tabs,h=b.title,f=b.theme,v=b.description,y=b.keywords,T=Object(c.useStaticQuery)("2456312558").site.pathPrefix,C=T?n.pathname.replace(T,""):n.pathname,w=j?C.split("/").filter(Boolean).slice(-1)[0]||r()(j[0],{lower:!0}):"";return Object(m.b)(l.a,{tabs:j,homepage:!1,theme:f,pageTitle:h,pageDescription:v,pageKeywords:y,titleType:d},Object(m.b)(g,{title:i?Object(m.b)(i,null):h,label:"label",tabs:j}),j&&Object(m.b)(N,{slug:C,tabs:j,currentTab:w}),Object(m.b)(A.a,{padded:!0},a,Object(m.b)(u,{relativePagePath:p})),Object(m.b)(O.a,{pageContext:t,location:n,slug:C,tabs:j,currentTab:w}),Object(m.b)(o.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},ra4x:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return b}));var n=a("wx14"),i=a("zLVn"),s=(a("q1tI"),a("7ljp")),r=a("013z"),c=(a("qKvR"),{}),o={_frontmatter:c},l=r.a;function b(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(s.b)(l,Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(s.b)("h3",null,"General Instructions"),Object(s.b)("ol",null,Object(s.b)("li",{parentName:"ol"},Object(s.b)("p",{parentName:"li"},"Clone the git repository"),Object(s.b)("pre",{parentName:"li"},Object(s.b)("code",Object(n.a)({parentName:"pre"},{}),"git clone https://github.com/ibm-cloud-architecture/learning-distributed-tracing-101.git\n"))),Object(s.b)("li",{parentName:"ol"},Object(s.b)("p",{parentName:"li"},"Change to the lab directory for ",Object(s.b)("strong",{parentName:"p"},"Node.js")),Object(s.b)("pre",{parentName:"li"},Object(s.b)("code",Object(n.a)({parentName:"pre"},{}),"cd learning-distrubing-tracing-101.git/lab-jaeger-istio-nodejs\n")))),Object(s.b)("h2",null,"Understanding Jaeger, Service Mesh, Kiali"),Object(s.b)("p",null,"Read the OpenShift Documentation for:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.openshift.com/container-platform/4.2/service_mesh/service_mesh_arch/ossm-jaeger.html"}),"Understanding Jaeger")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.openshift.com/container-platform/4.2/service_mesh/service_mesh_arch/understanding-ossm.html"}),"Understanding Service Mesh")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.openshift.com/container-platform/4.2/service_mesh/service_mesh_arch/ossm-kiali.html"}),"Understanding Kiali"))),Object(s.b)("h2",null,"Installing Service Mesh (Istio) Operator"),Object(s.b)("p",null,"The following operators and tools are installed and configured as part of the Service Mesh installation:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Jaeger operator "),Object(s.b)("li",{parentName:"ul"},"Prometheus, Grafana, and Kiali")),Object(s.b)("p",null,"With OpenShift 4, you can use the ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"https://cloud.redhat.com/openshift/install/crc/installer-provisioned"}),"CodeReady Containers")," to set up a local development cluster, follow the instructions in both of the articles below:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.openshift.com/container-platform/4.5/service_mesh/service_mesh_install/preparing-ossm-installation.html"}),"Preparing to install Red Hat OpenShift Service Mesh")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.openshift.com/container-platform/4.5/service_mesh/service_mesh_install/installing-ossm.html"}),"Installing Red Hat OpenShift Service Mesh"))),Object(s.b)("h2",null,"Verify Service Mesh installation"),Object(s.b)("ol",null,Object(s.b)("li",{parentName:"ol"},Object(s.b)("p",{parentName:"li"},"Verify that istio components are installed in the namespace ",Object(s.b)("inlineCode",{parentName:"p"},"istio-system")),Object(s.b)("pre",{parentName:"li"},Object(s.b)("code",Object(n.a)({parentName:"pre"},{}),"oc get pods -n istio-system\n")))),Object(s.b)("p",null,"Verify the output:"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{}),"NAME                                    READY   STATUS    RESTARTS   AGE\ngrafana-cf5ccd86-dtcl8                  2/2     Running   0          2m9s\nistio-citadel-7cb44f4bb-hlzdc           1/1     Running   0          5m42s\nistio-egressgateway-58f4b474c4-mlj8v    1/1     Running   0          2m50s\nistio-galley-75599dbc67-ch2tv           1/1     Running   0          4m46s\nistio-ingressgateway-769c96c46f-dlrv8   1/1     Running   0          2m50s\nistio-pilot-7bd6bc45cf-rcfdl            2/2     Running   0          3m29s\nistio-policy-56476c984b-44sw5           2/2     Running   0          4m23s\nistio-sidecar-injector-55c7bf57-x25rr   1/1     Running   0          2m34s\nistio-telemetry-d5bbd7d7b-pqv8r         2/2     Running   0          4m23s\njaeger-5d9dfdfb67-658t5                 2/2     Running   0          4m51s\nkiali-597c76cc67-5qs2d                  1/1     Running   0          52s\nprometheus-685bdbdc45-rljkq             2/2     Running   0          5m23s\n")),Object(s.b)("ol",{start:2},Object(s.b)("li",{parentName:"ol"},Object(s.b)("p",{parentName:"li"},"Verify services in the namespace ",Object(s.b)("inlineCode",{parentName:"p"},"istio-system")),Object(s.b)("pre",{parentName:"li"},Object(s.b)("code",Object(n.a)({parentName:"pre"},{}),"oc get services -n istio-system\n")))),Object(s.b)("p",null,"Verify the output:"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{}),"NAME                        TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)                                  AGE\ngrafana                     ClusterIP   172.30.100.181   <none>        3000/TCP                                 21h\nistio-citadel               ClusterIP   172.30.63.141    <none>        8060/TCP,15014/TCP                       21h\nistio-egressgateway         ClusterIP   172.30.118.88    <none>        80/TCP,443/TCP,15443/TCP                 21h\nistio-galley                ClusterIP   172.30.166.57    <none>        443/TCP,15014/TCP,9901/TCP               21h\nistio-ingressgateway        ClusterIP   172.30.57.186    <none>        15020/TCP,80/TCP,443/TCP,15443/TCP       21h\nistio-pilot                 ClusterIP   172.30.231.3     <none>        15010/TCP,15011/TCP,8080/TCP,15014/TCP   21h\nistio-policy                ClusterIP   172.30.118.207   <none>        9091/TCP,15004/TCP,15014/TCP             21h\nistio-sidecar-injector      ClusterIP   172.30.175.36    <none>        443/TCP                                  21h\nistio-telemetry             ClusterIP   172.30.107.108   <none>        9091/TCP,15004/TCP,15014/TCP,42422/TCP   21h\njaeger-agent                ClusterIP   None             <none>        5775/TCP,5778/TCP,6831/TCP,6832/TCP      21h\njaeger-collector            ClusterIP   172.30.127.247   <none>        9411/TCP,14250/TCP,14267/TCP,14268/TCP   21h\njaeger-collector-headless   ClusterIP   None             <none>        9411/TCP,14250/TCP,14267/TCP,14268/TCP   21h\njaeger-query                ClusterIP   172.30.215.78    <none>        16686/TCP                                21h\nkiali                       NodePort    172.30.46.193    <none>        20001:32087/TCP                          21h\nprometheus                  ClusterIP   172.30.5.101     <none>        9090/TCP                                 21h\nzipkin                      ClusterIP   172.30.62.142    <none>        9411/TCP                                 21h\n")),Object(s.b)("ol",{start:3},Object(s.b)("li",{parentName:"ol"},Object(s.b)("p",{parentName:"li"},"Verify that the ServiceMeshMemberRoll includes the target namespace for example ",Object(s.b)("inlineCode",{parentName:"p"},"default")," as one of the ",Object(s.b)("inlineCode",{parentName:"p"},"MEMBERS")),Object(s.b)("pre",{parentName:"li"},Object(s.b)("code",Object(n.a)({parentName:"pre"},{}),"oc get ServiceMeshMemberRoll -n istio-system\n")),Object(s.b)("p",{parentName:"li"},"SHoudl\nNAME      MEMBERS\ndefault   ","[default bookinfo]")),Object(s.b)("li",{parentName:"ol"},Object(s.b)("p",{parentName:"li"},"Verify routes in to the different UI dashboards for Jaeger, Grafana, and Kiali"),Object(s.b)("pre",{parentName:"li"},Object(s.b)("code",Object(n.a)({parentName:"pre"},{}),"oc get route -n istio-system\n")))),Object(s.b)("p",null,"Verify the output, make sure ",Object(s.b)("inlineCode",{parentName:"p"},"jaeger-query")," is using ",Object(s.b)("inlineCode",{parentName:"p"},"edge")," for tls termination, if not you can use ",Object(s.b)("inlineCode",{parentName:"p"},"oc edit service jaeger-query -n istio-system")," and change it."),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{}),"NAME                   HOST/PORT                                            PATH   SERVICES               PORT    TERMINATION   WILDCARD\ngrafana                grafana-istio-system.apps-crc.testing                       grafana                <all>   reencrypt     None\nistio-ingressgateway   istio-ingressgateway-istio-system.apps-crc.testing          istio-ingressgateway   8080                  None\njaeger                 jaeger-istio-system.apps-crc.testing                        jaeger-query           <all>   edge          None\nkiali                  kiali-istio-system.apps-crc.testing                         kiali                  <all>   reencrypt     None\nprometheus             prometheus-istio-system.apps-crc.testing                    prometheus             <all>   reencrypt     None\n")),Object(s.b)("p",null,"Open the different UIs in the browser using the route’s values for HOST/PORT"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Jaeger: ",Object(s.b)("a",Object(n.a)({parentName:"li"},{href:"https://jaeger-istio-system.apps-crc.testing"}),"https://jaeger-istio-system.apps-crc.testing")),Object(s.b)("li",{parentName:"ul"},"Grafana: ",Object(s.b)("a",Object(n.a)({parentName:"li"},{href:"https://grafana-istio-system.apps-crc.testing"}),"https://grafana-istio-system.apps-crc.testing")),Object(s.b)("li",{parentName:"ul"},"Kiali: ",Object(s.b)("a",Object(n.a)({parentName:"li"},{href:"https://kiali-istio-system.apps-crc.testing"}),"https://kiali-istio-system.apps-crc.testing"))),Object(s.b)("h2",null,"Deploy the Application"),Object(s.b)("ol",null,Object(s.b)("li",{parentName:"ol"},"Deploy the services ",Object(s.b)("inlineCode",{parentName:"li"},"service-a")," and ",Object(s.b)("inlineCode",{parentName:"li"},"service-b"))),Object(s.b)("p",null,"Use the file ",Object(s.b)("inlineCode",{parentName:"p"},"istio-nodejs.yaml")," for Node.js "),Object(s.b)("p",null,"Here is an example:"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{}),"oc apply -f istio-nodejs.yaml -n default\n")),Object(s.b)("p",null,"Let’s look at the file contents on how the services are defined to be deployed into OpenShift cluster:"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{}),'apiVersion: v1\nkind: Service\nmetadata:\n  name: service-a\n  labels:\n    app: service-a\nspec:\n  ports:\n    - port: 8080\n      name: http\n  selector:\n    app: service-a\n---\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: service-a\n  labels:\n    app: service-a\n    version: v1\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      app: service-a\n  template:\n    metadata:\n      labels:\n        app: service-a\n        version: v1\n      annotations:\n        sidecar.istio.io/inject: "true"\n    spec:\n      containers:\n        - name: app\n          image: csantanapr/service-a-nodejs-istio\n          #image: image-registry.openshift-image-registry.svc:5000/default/service-a-nodejs\n          env:\n            - name: JAEGER_ENDPOINT\n              value: http://jaeger-collector.istio-system.svc:14268/api/traces\n            - name: SERVICE_FORMATTER\n              value: service-b\n          imagePullPolicy: Always\n          ports:\n            - containerPort: 8080\n---\napiVersion: v1\nkind: Service\nmetadata:\n  name: service-b\n  labels:\n    app: service-b\nspec:\n  ports:\n    - port: 8081\n      name: http\n  selector:\n    app: service-b\n---\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: service-b\n  labels:\n    app: service-b\n    version: v1\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      app: service-b\n  template:\n    metadata:\n      labels:\n        app: service-b\n        version: v1\n      annotations:\n        sidecar.istio.io/inject: "true"\n    spec:\n      containers:\n        - name: app\n          image: csantanapr/service-b-nodejs-istio\n          #image: image-registry.openshift-image-registry.svc:5000/default/service-b-nodejs\n          env:\n            - name: JAEGER_ENDPOINT\n              value: http://jaeger-collector.istio-system.svc:14268/api/traces\n          imagePullPolicy: Always\n          ports:\n            - containerPort: 8081\n')),Object(s.b)("p",null,"In the yaml deployment manifest there are few items to point out:"),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Ports")),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"The port for the container is specified in the service and the container in the deployment, for example, ",Object(s.b)("inlineCode",{parentName:"li"},"service-a")," with port ",Object(s.b)("inlineCode",{parentName:"li"},"8080")," and ",Object(s.b)("inlineCode",{parentName:"li"},"service-b")," with port ",Object(s.b)("inlineCode",{parentName:"li"},"8081"))),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Environment Variables")),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"The variable ",Object(s.b)("inlineCode",{parentName:"li"},"JAEGER_ENDPOINT")," is specified to indicate to the Jaeger client library to send the traces using HTTP to the jaeger collector service ",Object(s.b)("inlineCode",{parentName:"li"},"http://jaeger-collector.istio-system.svc:14268/api/traces")," that is deployed on the namespace ",Object(s.b)("inlineCode",{parentName:"li"},"istio-system"),". "),Object(s.b)("li",{parentName:"ul"},"The variable ",Object(s.b)("inlineCode",{parentName:"li"},"SERVICE_FORMATTER")," used by ",Object(s.b)("inlineCode",{parentName:"li"},"service-a")," to indicate the hostname of ",Object(s.b)("inlineCode",{parentName:"li"},"service-b")," that will be used to format the hello message."),Object(s.b)("li",{parentName:"ul"},"Istio has certain ",Object(s.b)("a",Object(n.a)({parentName:"li"},{href:"https://istio.io/docs/setup/additional-setup/requirements/"}),"specific requirements"),", the ones we used in our yaml manifest are the following",Object(s.b)("ul",{parentName:"li"},Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"Named service ports")," ",Object(s.b)("ul",{parentName:"li"},Object(s.b)("li",{parentName:"ul"},"The service port name starts with ",Object(s.b)("inlineCode",{parentName:"li"},"http")))),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"Deployment with app and version labels"),Object(s.b)("ul",{parentName:"li"},Object(s.b)("li",{parentName:"ul"},"THe Pod template should have the following labels defined ",Object(s.b)("inlineCode",{parentName:"li"},"app")," and ",Object(s.b)("inlineCode",{parentName:"li"},"version"))))))),Object(s.b)("ol",{start:2},Object(s.b)("li",{parentName:"ol"},Object(s.b)("p",{parentName:"li"},"The Node.js code was modified for both services to handle Istio zipkin/B3 header propagation, the incomming HTTP request and the outgoing HTTP request now has B3 headers instead of jaeger headers. A different encoder was use to extract and inject the headers to be compatible with Istio. The source code is available in their respective directories ",Object(s.b)("inlineCode",{parentName:"p"},"service-a")," and ",Object(s.b)("inlineCode",{parentName:"p"},"service-b"),", here is a snippet of the code changes in ",Object(s.b)("inlineCode",{parentName:"p"},"app.js")),Object(s.b)("pre",{parentName:"li"},Object(s.b)("code",Object(n.a)({parentName:"pre"},{}),"const ZipkinB3TextMapCodec = require('jaeger-client').ZipkinB3TextMapCodec\nlet codec = new ZipkinB3TextMapCodec({ urlEncoding: true });\ntracer.registerInjector(opentracing.FORMAT_HTTP_HEADERS, codec);\ntracer.registerExtractor(opentracing.FORMAT_HTTP_HEADERS, codec);\n")))),Object(s.b)("ol",{start:3},Object(s.b)("li",{parentName:"ol"},Object(s.b)("p",{parentName:"li"},"Deploy the Istio Gateway and VirtualService"),Object(s.b)("pre",{parentName:"li"},Object(s.b)("code",Object(n.a)({parentName:"pre"},{}),"oc apply -f gateway.yaml -n default\n")))),Object(s.b)("p",null,"Here is the content of ",Object(s.b)("inlineCode",{parentName:"p"},"gateway.yaml")),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{}),'apiVersion: networking.istio.io/v1alpha3\nkind: Gateway\nmetadata:\n  name: distributing-tracing-gateway\nspec:\n  selector:\n    istio: ingressgateway # use istio default controller\n  servers:\n    - port:\n        number: 80\n        name: http\n        protocol: HTTP\n      hosts:\n        - "*"\n---\napiVersion: networking.istio.io/v1alpha3\nkind: VirtualService\nmetadata:\n  name: distributing-tracing\nspec:\n  hosts:\n    - "*"\n  gateways:\n    - distributing-tracing-gateway\n  http:\n    - match:\n        - uri:\n            prefix: /sayHello\n      route:\n        - destination:\n            host: service-a\n            port:\n              number: 8080\n')),Object(s.b)("ol",{start:4},Object(s.b)("li",{parentName:"ol"},"Verify services are deployed and running:")),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{}),"oc get all -l app=service-a -n default\noc get all -l app=service-b -n default\nNAME                             READY     STATUS    RESTARTS   AGE\npod/service-a-74cd5c6496-nvllm   2/2       Running   0          6m7s\npod/service-b-674f96464b-hbmg7   2/2       Running   0          6m44s\n\nNAME                TYPE        CLUSTER-IP     EXTERNAL-IP   PORT(S)    AGE\nservice/service-a   ClusterIP   172.30.44.43   <none>        8080/TCP   6m7s\nservice/service-b   ClusterIP   172.30.115.93   <none>        8081/TCP   6m45s\n\nNAME                        READY     UP-TO-DATE   AVAILABLE   AGE\ndeployment.apps/service-a   1/1       1            1           6m7s\ndeployment.apps/service-b   1/1       1            1           6m44s\n")),Object(s.b)("p",null,"Notice that under the ",Object(s.b)("inlineCode",{parentName:"p"},"READY")," column for pods, it shows that there are two (2/2) containers running, one of them is the istio side card proxy."),Object(s.b)("ol",{start:5},Object(s.b)("li",{parentName:"ol"},"Get the hostname for the Istio ingress gateway")),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{}),"oc get route -n istio-system istio-ingressgateway \nNAME                   HOST/PORT                                            PATH   SERVICES               PORT   TERMINATION   WILDCARD\nistio-ingressgateway   istio-ingressgateway-istio-system.apps-crc.testing          istio-ingressgateway   8080                 None\n")),Object(s.b)("ol",{start:6},Object(s.b)("li",{parentName:"ol"},Object(s.b)("p",{parentName:"li"},"Use curl or open a browser with the endpoint URL using the HOST/PORT of the route"),Object(s.b)("pre",{parentName:"li"},Object(s.b)("code",Object(n.a)({parentName:"pre"},{}),"curl http://istio-ingressgateway-istio-system.apps-crc.testing/sayHello/Carlos\n")))),Object(s.b)("p",null,"Notice in the output that the message was formatted by service-b"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{}),"Hello, from service-b Carlos!\n")),Object(s.b)("p",null,"From the result, you can see that ",Object(s.b)("inlineCode",{parentName:"p"},"service-a")," calls ",Object(s.b)("inlineCode",{parentName:"p"},"service-b")," and replies back."),Object(s.b)("ol",{start:7},Object(s.b)("li",{parentName:"ol"},"In the Jaeger UI select ",Object(s.b)("inlineCode",{parentName:"li"},"istio-ingressgateway")," or ",Object(s.b)("inlineCode",{parentName:"li"},"service-a")," and click ",Object(s.b)("strong",{parentName:"li"},"Find Traces"))),Object(s.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"49.65277777777777%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAIAAAA7N+mxAAAACXBIWXMAABYlAAAWJQFJUiTwAAABYElEQVQoz42QS07DMBCGc+oSCSQkzkE3vUVPgbpggZo2aZPm6dgTv52YlHECSxCfRqNfY4//8URxHL9ut2mavh8OL/v94273tNls4vjhd/D8eSHS3gtre0IYY3fv53me5vn+PyJKadO2WmvnXMjj6Kfp80+895jHaYo45wOAMcZaixmr8wIK58ZVTwG/FscxFNFWuTEahkEpZRectRSnZ4BtZq04Z7TGCziUWUAhFtAqWtX3sbVF2yZFcW2bS12nVZ01DcUXrSXGEK3X6KTEIEoFZ5w8OBiDzreOHE7pW3LG/HE+J1mWZGlyudyapqW0o7RljAC0ACUhwRn7zQ8qjGep0j0XSnCtOGcUb2iBwTUHJSV+B6QiQkQAQAhZZ3bO9jCcbuWxKE9ldSpuZ9TX/JgXeUcqNlQUKsZrECXwnNBI/+xj3ZlUgfArhs8yzoH2HW5RcJCCywG4kNq6Xqp6EF8w3iGMomil6QAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(s.b)("img",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"istio-trace",title:"istio-trace",src:"/static/1a1241ac264166e583cc84199553dd9c/3cbba/istio-nodejs-jaeger-traces.png",srcSet:["/static/1a1241ac264166e583cc84199553dd9c/7fc1e/istio-nodejs-jaeger-traces.png 288w","/static/1a1241ac264166e583cc84199553dd9c/a5df1/istio-nodejs-jaeger-traces.png 576w","/static/1a1241ac264166e583cc84199553dd9c/3cbba/istio-nodejs-jaeger-traces.png 1152w","/static/1a1241ac264166e583cc84199553dd9c/0b124/istio-nodejs-jaeger-traces.png 1728w","/static/1a1241ac264166e583cc84199553dd9c/4ea69/istio-nodejs-jaeger-traces.png 2304w","/static/1a1241ac264166e583cc84199553dd9c/5a470/istio-nodejs-jaeger-traces.png 2872w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(s.b)("p",null,"You can see 8 Spans in a single trace starting from the ",Object(s.b)("inlineCode",{parentName:"p"},"istio-ingressgateway")," ending in ",Object(s.b)("inlineCode",{parentName:"p"},"service-b.default")),Object(s.b)("ol",{start:8},Object(s.b)("li",{parentName:"ol"},"Click on one of the traces and expand the spans in the trace")),Object(s.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"104.16666666666667%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAVCAIAAADJt1n/AAAACXBIWXMAABYlAAAWJQFJUiTwAAAC7klEQVQ4y4VU23LbNhDl5/YlcSL7xelH+JPSmTqZ2O41mcqmLYkmQRLXxY03UBLFLsXYddrM9MwBZoHZA3JxlozOzs4uLi5urq9/ev9+sVicnJy8fvXqhyNOF4uz09PTxVsMnjjFb9+8OT8///Hdu6gJ4X718POHy09XVynJhFJgrHHeOLc7HIZx3I/j8ESMd+PY7/dtCG3oI26trivwFim0oiwVPOEswZnRdfrwWx7f5A+/FPEVuf2Y/nXJyFKITMpCSBqlWfa4SUCBsxYAMlDEamQK6lFJAjKTfE2LVZGmvMhEueHltG9MolT0hfE/MrLkPFZwJ+VN8vhpvbnaJDh/uH+4jO+vk3SpYCnhM+W/kuL3ovyzpF8o+0xZdOer2Fd33t9af+8rxmiZPbI804IBZ5JSxZiR0iqlhQDOccblNAsRMQ1xkmRMcOuUr0Lf14Z7oE4Sz+KKT3T01rM75LzEQOdLXcTRNrQeShRsG4MUvDRG932oK9c41nk6sWJ9zUPFPGSVJsjGy8qZaLKj12MPY1AYlEVOCGGMFUVZlqwoGeNSSJBKIwHMHEisQptoGPZDgMPMXlOKGqrw9tUEUHMgJZ4gpXoBADWJD8/ioI0G772tKqTx3lRVVdftEV3XtS/QNM2/xVoDpmvvXV03mNF+H/NBk3gqeDuVjXprDR7JsCDvQ9eFGX3fb3fPxN2vT97tdq0TWpLaiVDr5oiXT8ATLAjIVjpf62IDZO0NYC1YXYSp3tnNapURYq0dBuz/8YAe4EV+5dB3zVYWvSChiHf5cl/rcUoaouMbbYMTDRTBcU5zkiZaibapume2dehD27VGS+/08SPSViv0ecIY7NjKsYU8J+skyfMcDeNccIEOKRyccQQGuIGbU6gmqyYcWjPWYmwVtjYmaWMmH58MxeaYgWYY/Q++FTdKK+V9hWN2C2mPPnf/wWzVN2JsJmOMtJYCWO/b//P5SdyIQyPxl2CQ+HHgsNhm34Fzbi7ob+0IfFZ8bx6UAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(s.b)("img",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"istio-span",title:"istio-span",src:"/static/4ab3be4194fe87fdd533e00020153f62/3cbba/istio-nodejs-jaeger-spans.png",srcSet:["/static/4ab3be4194fe87fdd533e00020153f62/7fc1e/istio-nodejs-jaeger-spans.png 288w","/static/4ab3be4194fe87fdd533e00020153f62/a5df1/istio-nodejs-jaeger-spans.png 576w","/static/4ab3be4194fe87fdd533e00020153f62/3cbba/istio-nodejs-jaeger-spans.png 1152w","/static/4ab3be4194fe87fdd533e00020153f62/0b124/istio-nodejs-jaeger-spans.png 1728w","/static/4ab3be4194fe87fdd533e00020153f62/4ea69/istio-nodejs-jaeger-spans.png 2304w","/static/4ab3be4194fe87fdd533e00020153f62/5a470/istio-nodejs-jaeger-spans.png 2872w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(s.b)("p",null,"Check one of the labs ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"./lab1"}),"Lab Jaeger - Node.js")," or ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"./lab2"}),"Lab Jaeger - Java")," for a more in-depth lab for Opentracing with Jaeger."),Object(s.b)("ol",{start:9},Object(s.b)("li",{parentName:"ol"},"In the Kiali UI select Graph to see a topology view of the services, you can enable traffic animation under Display to see the flow of HTTP requests")),Object(s.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"41.66666666666667%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAIAAAB2/0i6AAAACXBIWXMAABYlAAAWJQFJUiTwAAABJElEQVQY04WQSU/DMBCF81M4oQoaSDeVUm45Z7v0B3NBhQsgQqgQBA4Naqs6sR0vcTYmzQUoiCfLmpG/p/Eb7eDwqHM6ME3Ttm3HcVzXdb7I3pNlWZ7nzWYzILWT/qTbG19d3wiZMcY451LKYielFNzVngBI4pgQohnDqT449/2grmug8zwvy7KF2qL+LmDWKMY0FUJox8YYzmOwgAeg6/8E5mX0wShvzMZoaowufjW37Y/h0K7R6n31xniqdfSh3p/c3t1jnAgJgTNInSmo+AZttvEWU0JThjGGmZSlVVmFKJy/XiYcNeZu7+zBD8qq5IIzwVECkTCXQipFKM1yRRh7fgmXURRjAlthlHEKr0VjhszB0+Kvf7Zq979jKkwwIiRTxSdgu4YkLaZRRQAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(s.b)("img",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"istio-kiali",title:"istio-kiali",src:"/static/b410facceba3fd0187f32dd537b15049/3cbba/istio-nodejs-kiali.png",srcSet:["/static/b410facceba3fd0187f32dd537b15049/7fc1e/istio-nodejs-kiali.png 288w","/static/b410facceba3fd0187f32dd537b15049/a5df1/istio-nodejs-kiali.png 576w","/static/b410facceba3fd0187f32dd537b15049/3cbba/istio-nodejs-kiali.png 1152w","/static/b410facceba3fd0187f32dd537b15049/0b124/istio-nodejs-kiali.png 1728w","/static/b410facceba3fd0187f32dd537b15049/4ea69/istio-nodejs-kiali.png 2304w","/static/b410facceba3fd0187f32dd537b15049/a9e7e/istio-nodejs-kiali.png 3848w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(s.b)("ol",{start:10},Object(s.b)("li",{parentName:"ol"},"In the Grafana UI select the Dashboard ",Object(s.b)("em",{parentName:"li"},"Istio Workload Dashboard")," or ",Object(s.b)("em",{parentName:"li"},"Istio Service Dashboard")," to see monitoring and metrics data for your services")),Object(s.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"71.875%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAIAAACgpqunAAAACXBIWXMAABYlAAAWJQFJUiTwAAACQElEQVQozz2SaW+bQBCG+VTHSS/VmBv2vlnA4COO0qRKpf7/n9QXW4o0Qrsz7xw8O0m5+064Ylwq69qO5nVbNCQv6rxq93mZl01W1PusyPKyLBvGRUeYEKueM558+/GzaCnUWd1BUVFRcZWVNdFWOy990C60LSmrBtF0n8N2t2+aFUmapvt9nhdlUVRFWWd5ke3zW5+q62hdN8hECJ68qPK8Qv+igqyEJbtdSohg0h/myzjOlGumAiGcC+PCOC8X6wfGjZTWGK+0jdNBay+1db5PttstZYqagxuv3kcmLHVHQhiVntrZTS9ET4gy4ZTS/TT0Q+Rc+T4Ya5OHhy1jijFJKadMTtMspaFU3Dyiach6lo4I6+O8LGdURQi1qHDJZvMAgHfDtNo4qO9XLtRqXBLVE7PoeInjiVDeEUHtQvWUfNls8BJ3W0mm2R0peAippFKY6BbKEPq1W6Of+nVsNMR4a1uNH7P4UiaallR1VzcEBwAXUmtjAQwCKLERsOTp6WuMExhgYOvCilStJaCTyuBqtHchTMfD4TSHISppQXqYRzhB+9H7HmlIliiP3TAOTcztykDfBRCGhRiRgCZIjuNgnF/HhhqPFPrR+agUUHNAAlK8rXM95sIBFOGkVFrbW+tXqB1PHh+fMJtW+vk4oqYUeuq9ELoP/t/H83EesULX8xgDnObtZf77fmZcDb2/nqd1SUIYzqfj++t5iGMcxuM8AM8yzx9/rsdlwjjX58UYbHr/9vvy9npyLi7zYTnE/4Uoco5tq6NxAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(s.b)("img",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"istio-grafana",title:"istio-grafana",src:"/static/b3810683b5d3232aac2a761dc040ad97/3cbba/istio-nodejs-grafana.png",srcSet:["/static/b3810683b5d3232aac2a761dc040ad97/7fc1e/istio-nodejs-grafana.png 288w","/static/b3810683b5d3232aac2a761dc040ad97/a5df1/istio-nodejs-grafana.png 576w","/static/b3810683b5d3232aac2a761dc040ad97/3cbba/istio-nodejs-grafana.png 1152w","/static/b3810683b5d3232aac2a761dc040ad97/0b124/istio-nodejs-grafana.png 1728w","/static/b3810683b5d3232aac2a761dc040ad97/4ea69/istio-nodejs-grafana.png 2304w","/static/b3810683b5d3232aac2a761dc040ad97/ad534/istio-nodejs-grafana.png 3206w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))}b.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-electives-dist-trace-activities-lab-5-index-mdx-7ddfcfd0170b48d1925a.js.map