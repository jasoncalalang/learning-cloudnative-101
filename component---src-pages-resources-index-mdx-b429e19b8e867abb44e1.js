(window.webpackJsonp=window.webpackJsonp||[]).push([[116],{"013z":function(e,t,a){"use strict";var b=a("q1tI"),r=a.n(b),l=a("NmYn"),c=a.n(l),n=a("Wbzz"),i=a("Xrax"),o=a("k4MR"),s=a("TSYQ"),p=a.n(s),m=a("QH2O"),u=a("qKvR"),O=function(e){var t,a=e.title,b=e.tabs,r=void 0===b?[]:b;return Object(u.b)("div",{className:p()(m.pageHeader,(t={},t[m.withTabs]=r.length,t))},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12"},Object(u.b)("h1",{id:"page-title",className:m.text},a)))))},j=a("BAC9"),h=function(e){var t=e.relativePagePath,a=e.repository,b=Object(n.useStaticQuery)("1364590287").site.siteMetadata.repository,r=a||b,l=r.baseUrl,c=r.subDirectory,i=l+"/edit/"+r.branch+c+"/src/pages"+t;return l?Object(u.b)("div",{className:"bx--row "+j.row},Object(u.b)("div",{className:"bx--col"},Object(u.b)("a",{className:j.link,href:i},"Edit this page on GitHub"))):null},N=a("FCXl"),d=a("dI71"),f=a("I8xM"),g=function(e){function t(){return e.apply(this,arguments)||this}return Object(d.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,b=a.split("/").filter(Boolean).slice(-1)[0],r=t.map((function(e){var t,r=c()(e,{lower:!0,strict:!0}),l=r===b,i=new RegExp(b+"/?(#.*)?$"),o=a.replace(i,r);return Object(u.b)("li",{key:e,className:p()((t={},t[f.selectedItem]=l,t),f.listItem)},Object(u.b)(n.Link,{className:f.link,to:""+o},e))}));return Object(u.b)("div",{className:f.tabsContainer},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(u.b)("nav",null,Object(u.b)("ul",{className:f.list},r))))))},t}(r.a.Component),w=a("MjG9");t.a=function(e){var t=e.pageContext,a=e.children,b=e.location,r=e.Title,l=t.frontmatter,s=void 0===l?{}:l,p=t.relativePagePath,m=t.titleType,j=s.tabs,d=s.title,f=s.theme,y=s.description,k=s.keywords,v=Object(n.useStaticQuery)("2456312558").site.pathPrefix,x=v?b.pathname.replace(v,""):b.pathname,C=j?x.split("/").filter(Boolean).slice(-1)[0]||c()(j[0],{lower:!0}):"";return Object(u.b)(o.a,{tabs:j,homepage:!1,theme:f,pageTitle:d,pageDescription:y,pageKeywords:k,titleType:m},Object(u.b)(O,{title:r?Object(u.b)(r,null):d,label:"label",tabs:j}),j&&Object(u.b)(g,{slug:x,tabs:j,currentTab:C}),Object(u.b)(w.a,{padded:!0},a,Object(u.b)(h,{relativePagePath:p})),Object(u.b)(N.a,{pageContext:t,location:b,slug:x,tabs:j,currentTab:C}),Object(u.b)(i.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},FHeL:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return n})),a.d(t,"default",(function(){return s}));var b=a("wx14"),r=a("zLVn"),l=(a("q1tI"),a("7ljp")),c=a("013z"),n=(a("qKvR"),{}),i={_frontmatter:n},o=c.a;function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)(o,Object(b.a)({},i,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",null,"Tools"),Object(l.b)("h4",null,"Command Line"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(b.a)({parentName:"li"},{href:"https://brew.sh/"}),"Brew")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(b.a)({parentName:"li"},{href:"https://kubernetes.io/docs/tasks/tools/install-kubectl/"}),"Kubectl")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(b.a)({parentName:"li"},{href:"https://github.com/tektoncd/cli"}),"Tekton CLI")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(b.a)({parentName:"li"},{href:"https://github.com/wercker/stern"}),"Stern")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(b.a)({parentName:"li"},{href:"https://github.com/ahmetb/kubectx"}),"Kubectx Kubens"))),Object(l.b)("h4",null,"Source Code Management"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(b.a)({parentName:"li"},{href:"https://git-scm.com/doc"}),"Git"))),Object(l.b)("h4",null,"Image/Artifact Management"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(b.a)({parentName:"li"},{href:"https://docs.docker.com/docker-hub/"}),"Docker Hub")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(b.a)({parentName:"li"},{href:"https://kubernetes.io/docs/home/"}),"Dockerfile Documentation")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(b.a)({parentName:"li"},{href:"https://docs.docker.com/develop/develop-images/dockerfile_best-practices/"}),"Dockerfile Best Practices")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(b.a)({parentName:"li"},{href:"https://www.jfrog.com/confluence/display/RTF/Welcome+to+Artifactory"}),"JFrog Artifactory"))),Object(l.b)("h4",null,"Container Management"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(b.a)({parentName:"li"},{href:"https://minikube.sigs.k8s.io/docs/"}),"Minikube Documentation")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(b.a)({parentName:"li"},{href:"https://kubernetes.io/docs/home/"}),"Kubernetes Documentation")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(b.a)({parentName:"li"},{href:"https://kubernetes.io/docs/tutorials/kubernetes-basics/"}),"Kubernetes Basics")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(b.a)({parentName:"li"},{href:"https://kubernetes.io/docs/concepts/"}),"Kubernetes Concepts")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(b.a)({parentName:"li"},{href:"https://code-ready.github.io/crc/"}),"OpenShift CRC"))),Object(l.b)("h4",null,"Continuous Integration"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(b.a)({parentName:"li"},{href:"https://jenkins.io/doc/"}),"Jenkins")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(b.a)({parentName:"li"},{href:"https://github.com/tektoncd/pipeline/tree/master/docs"}),"Tekton Documentation")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(b.a)({parentName:"li"},{href:"https://github.com/tektoncd/pipeline/tree/master/examples"}),"Tekton Examples")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(b.a)({parentName:"li"},{href:"https://github.com/tektoncd/catalog"}),"Tekton Catalog"))),Object(l.b)("h4",null,"Continuous Delivery/Deployment"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(b.a)({parentName:"li"},{href:"https://argoproj.github.io/argo-cd/"}),"ArgoCD Overview")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(b.a)({parentName:"li"},{href:"https://argoproj.github.io/argo-cd/getting_started/"}),"ArgoCD Getting Started")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(b.a)({parentName:"li"},{href:"https://argoproj.github.io/argo-cd/user-guide/best_practices/"}),"ArgoCD Best Practices"))),Object(l.b)("h4",null,"Build Management & Code Quality"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(b.a)({parentName:"li"},{href:"https://maven.apache.org/guides/index.html"}),"Maven")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(b.a)({parentName:"li"},{href:"https://docs.gradle.org/current/userguide/userguide.html"}),"Gradle")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(b.a)({parentName:"li"},{href:"https://docs.sonarqube.org/latest/"}),"SonarQube"))),Object(l.b)("h4",null,"Configuration Management"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(b.a)({parentName:"li"},{href:"https://www.ansible.com/use-cases/configuration-management"}),"Ansible")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(b.a)({parentName:"li"},{href:"https://www.terraform.io/docs/index.html"}),"Terraform"))),Object(l.b)("h4",null,"Test Automation"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(b.a)({parentName:"li"},{href:"https://docs.cypress.io/guides/overview/why-cypress.html#In-a-nutshell"}),"Cypress")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(b.a)({parentName:"li"},{href:"https://docs.pact.io/"}),"PACT"))),Object(l.b)("h4",null,"Monitoring"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(b.a)({parentName:"li"},{href:"https://www.nagios.org/documentation/"}),"Nagios"))),Object(l.b)("h4",null,"Alerting"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(b.a)({parentName:"li"},{href:"https://support.pagerduty.com/"}),"PagerDuty")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(b.a)({parentName:"li"},{href:"https://prometheus.io/docs/alerting/overview/"}),"Prometheus")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(b.a)({parentName:"li"},{href:"https://sysdigdocs.atlassian.net/wiki/spaces/Monitor/pages/369950741/Alerts"}),"Sysdig"))),Object(l.b)("h4",null,"Logging"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(b.a)({parentName:"li"},{href:"https://docs.logdna.com/docs"}),"LogDNA")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(b.a)({parentName:"li"},{href:"https://www.elastic.co/guide/index.html"}),"ELK"))),Object(l.b)("h2",null,"Podcasts"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(b.a)({parentName:"li"},{href:"https://kubernetespodcast.com/"}),"Kubernetes Podcast")," "),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(b.a)({parentName:"li"},{href:"http://podcast.podctl.com/"}),"PodCTL")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(b.a)({parentName:"li"},{href:"http://airhacks.fm/"}),"AirHacks Java with Adam Bien")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(b.a)({parentName:"li"},{href:"https://thepodlets.io/"}),"The Podlets")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(b.a)({parentName:"li"},{href:"https://www.gcppodcast.com/"}),"Google Cloud Platform Podcast")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(b.a)({parentName:"li"},{href:"https://www.thecloudcast.net/"}),"The Cloud Cast")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(b.a)({parentName:"li"},{href:"http://weare.netflix.net/"}),"We are Netflix")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(b.a)({parentName:"li"},{href:"https://developer.ibm.com/depmodels/cloud/podcasts/ibm_developer_podcast/"}),"IBM Developer Podcast")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(b.a)({parentName:"li"},{href:"https://softwareengineeringdaily.com/category/all-episodes/exclusive-content/Podcast/"}),"Software Engineering Daily")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(b.a)({parentName:"li"},{href:"https://changelog.com/podcast"}),"The changelog (Open Source)")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(b.a)({parentName:"li"},{href:"https://changelog.com/gotime"}),"Go Time (Golang)")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(b.a)({parentName:"li"},{href:"https://www.redhat.com/en/command-line-heroes"}),"Command Line Heroes")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(b.a)({parentName:"li"},{href:"https://www.softwaredefinedtalk.com/"}),"Software Defined Talk"))),Object(l.b)("h2",null,"Youtube Channels/Playlists"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(b.a)({parentName:"li"},{href:"https://www.youtube.com/playlist?list=PL7bmigfV0EqQzxcNpmcdTJ9eFRPBe-iZa"}),"TGI Kubernetes (Every Friday 4PM EST)")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(b.a)({parentName:"li"},{href:"https://www.youtube.com/channel/UC7noUdfWp-ukXUlAsJnSm-Q/videos?view=0&sort=dd&flow=grid"}),"Red Hat Developers")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(b.a)({parentName:"li"},{href:"https://www.youtube.com/user/rhopenshift/videos?view=0&sort=dd&flow=grid"}),"OpenShift")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(b.a)({parentName:"li"},{href:"https://www.youtube.com/playlist?list=PLj6h78yzYM2NDs-iu8WU5fMxINxHXlien"}),"CNCF KubeCon 2019 NA")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(b.a)({parentName:"li"},{href:"https://www.youtube.com/playlist?list=PLj6h78yzYM2OQP0DXXmtdIHNtfFSJqVAU"}),"CNCF Servless Summit 2019 NA")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(b.a)({parentName:"li"},{href:"https://www.youtube.com/playlist?list=PLj6h78yzYM2OQP0DXXmtdIHNtfFSJqVAU"}),"CNCF EnvoyCon Summit 2019 NA")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(b.a)({parentName:"li"},{href:"https://www.youtube.com/playlist?list=PLj6h78yzYM2OHQTTN_SjId-oFcQWag5lW"}),"CNCF Observability Summit 2019 NA")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(b.a)({parentName:"li"},{href:"https://www.youtube.com/playlist?list=PLj6h78yzYM2MGKo_LNRA-lhxlNXwiDJDT"}),"CNCF Secury Day 0 2019 NA")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(b.a)({parentName:"li"},{href:"https://www.youtube.com/playlist?list=PLEx5khR4g7PJELLTYwXZHcimWAwTUaWGA"}),"GOTO Conferences - Software Architecture")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(b.a)({parentName:"li"},{href:"https://www.youtube.com/playlist?list=PLEx5khR4g7PIEfXSB9bDS4lB-J9stOynD"}),"GOTO Conferences - Microservices")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(b.a)({parentName:"li"},{href:"https://www.youtube.com/playlist?list=PLEx5khR4g7PLCoWS5k9u2WQ8RdKqhKEKn"}),"GOTO Conferences - DevOps")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(b.a)({parentName:"li"},{href:"https://www.youtube.com/playlist?list=PLEx5khR4g7PJquVHXtkcdo-QzK54bfmY9"}),"GOTO Conferences - The Human Factor"))),Object(l.b)("h2",null,"Books"),Object(l.b)("p",null,"Currently IBMers have free access to books and other resources on learning.oreilly.com"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(b.a)({parentName:"li"},{href:"https://learning.oreilly.com/library/view/mastering-distributed-tracing/9781788628464/"}),"Mastering Distributing Tracing")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(b.a)({parentName:"li"},{href:"https://learning.oreilly.com/library/view/software-engineering-at/9781492082781"}),"Software Engineering at Google (Feb 2020)")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(b.a)({parentName:"li"},{href:"https://learning.oreilly.com/library/view/kubernetes-operators/9781492078234/"}),"Kubernetes Operators (Jan 2020)")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(b.a)({parentName:"li"},{href:"https://learning.oreilly.com/library/view/kubernetes-best-practices/9781492056461/"}),"Kubernetes Best Practices (Nov 2019)")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(b.a)({parentName:"li"},{href:"https://learning.oreilly.com/library/view/kubernetes-up-and/9781492046523/"}),"Kubernetes Up and Running, 2nd Edition (Oct 2019)")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(b.a)({parentName:"li"},{href:"https://learning.oreilly.com/library/view/cloud-native/9781492053811/"}),"Cloud Native (Aug 2019)")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(b.a)({parentName:"li"},{href:"https://learning.oreilly.com/library/view/programming-kubernetes/9781492047094/"}),"Programming Kubernetes (Jul 2019)")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(b.a)({parentName:"li"},{href:"https://learning.oreilly.com/library/view/kubernetes-patterns/9781492050278/"}),"Kubernetes Patterns (Apr 2019)")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(b.a)({parentName:"li"},{href:"https://learning.oreilly.com/library/view/cloud-native-devops/9781492040750/"}),"Cloud Native DevOps with Kubernetes (Mar 2019)"))),Object(l.b)("h2",null,"News Letters"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(b.a)({parentName:"li"},{href:"https://kubeweekly.io/"}),"KubeWeekly newsletter")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(b.a)({parentName:"li"},{href:"https://us12.campaign-archive.com/home/?u=0e61a764c5cf33d9f3eff0749&id=846fac531b"}),"Software Engineering Daily")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(b.a)({parentName:"li"},{href:"http://airhacks.news/"}),"Adam Bien")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(b.a)({parentName:"li"},{href:"https://serverless.email/"}),"Serverless.Email")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(b.a)({parentName:"li"},{href:"https://www.jeremydaly.com/newsletter/"}),"Off-by-one")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(b.a)({parentName:"li"},{href:"https://www.lastweekinaws.com/"}),"Last Week in AWS"))),Object(l.b)("h2",null,"Twitter"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(b.a)({parentName:"li"},{href:"https://twitter.com/csantanapr"}),"Carlos")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(b.a)({parentName:"li"},{href:"https://twitter.com/openshift"}),"OpenShift")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(b.a)({parentName:"li"},{href:"https://twitter.com/rhdevelopers"}),"Red Hat Developers")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(b.a)({parentName:"li"},{href:"https://twitter.com/IBMcloud"}),"IBM Cloud")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(b.a)({parentName:"li"},{href:"https://twitter.com/learnk8s"}),"Learnk8s")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(b.a)({parentName:"li"},{href:"https://twitter.com/kubernauts"}),"Kunernaust/IO")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(b.a)({parentName:"li"},{href:"https://twitter.com/kelseyhightower"}),"Kelsey Hightower")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(b.a)({parentName:"li"},{href:"https://twitter.com/CivoCloud"}),"CivoCloud")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(b.a)({parentName:"li"},{href:"https://twitter.com/bibryam"}),"Bilgin Lrbyam")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(b.a)({parentName:"li"},{href:"https://twitter.com/danieloh30"}),"Daniel Oh")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(b.a)({parentName:"li"},{href:"https://twitter.com/burrsutter"}),"Burr Sutter")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(b.a)({parentName:"li"},{href:"https://twitter.com/brendandburns"}),"Brendan Burns")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(b.a)({parentName:"li"},{href:"https://twitter.com/jbeda"}),"Joe Beda")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(b.a)({parentName:"li"},{href:"https://twitter.com/mauilion"}),"Duffie Cooley")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(b.a)({parentName:"li"},{href:"https://twitter.com/alexellisuk"}),"Alex Ellis")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(b.a)({parentName:"li"},{href:"https://twitter.com/MicroProfileIO"}),"MicroProfile")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(b.a)({parentName:"li"},{href:"https://twitter.com/nodejs"}),"Node.js")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(b.a)({parentName:"li"},{href:"https://twitter.com/nheidloff"}),"Niklas Heidloff")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(b.a)({parentName:"li"},{href:"https://twitter.com/sspeiche"}),"Steve Speicher")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(b.a)({parentName:"li"},{href:"https://twitter.com/ibuildthecloud"}),"Darren Shepherd"))))}s.isMDXComponent=!0},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-resources-index-mdx-b429e19b8e867abb44e1.js.map