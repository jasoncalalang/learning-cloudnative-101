(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),o=a.n(n),r=a("NmYn"),i=a.n(r),s=a("Wbzz"),c=a("Xrax"),l=a("k4MR"),m=a("TSYQ"),p=a.n(m),b=a("QH2O"),g=a("qKvR"),u=function(e){var t,a=e.title,n=e.tabs,o=void 0===n?[]:n;return Object(g.b)("div",{className:p()(b.pageHeader,(t={},t[b.withTabs]=o.length,t))},Object(g.b)("div",{className:"bx--grid"},Object(g.b)("div",{className:"bx--row"},Object(g.b)("div",{className:"bx--col-lg-12"},Object(g.b)("h1",{id:"page-title",className:b.text},a)))))},d=a("BAC9"),k=function(e){var t=e.relativePagePath,a=e.repository,n=Object(s.useStaticQuery)("1364590287").site.siteMetadata.repository,o=a||n,r=o.baseUrl,i=o.subDirectory,c=r+"/edit/"+o.branch+i+"/src/pages"+t;return r?Object(g.b)("div",{className:"bx--row "+d.row},Object(g.b)("div",{className:"bx--col"},Object(g.b)("a",{className:d.link,href:c},"Edit this page on GitHub"))):null},y=a("FCXl"),f=a("dI71"),h=a("I8xM"),j=function(e){function t(){return e.apply(this,arguments)||this}return Object(f.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,n=a.split("/").filter(Boolean).slice(-1)[0],o=t.map((function(e){var t,o=i()(e,{lower:!0,strict:!0}),r=o===n,c=new RegExp(n+"/?(#.*)?$"),l=a.replace(c,o);return Object(g.b)("li",{key:e,className:p()((t={},t[h.selectedItem]=r,t),h.listItem)},Object(g.b)(s.Link,{className:h.link,to:""+l},e))}));return Object(g.b)("div",{className:h.tabsContainer},Object(g.b)("div",{className:"bx--grid"},Object(g.b)("div",{className:"bx--row"},Object(g.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(g.b)("nav",null,Object(g.b)("ul",{className:h.list},o))))))},t}(o.a.Component),O=a("MjG9");t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,o=e.Title,r=t.frontmatter,m=void 0===r?{}:r,p=t.relativePagePath,b=t.titleType,d=m.tabs,f=m.title,h=m.theme,v=m.description,x=m.keywords,N=Object(s.useStaticQuery)("2456312558").site.pathPrefix,w=N?n.pathname.replace(N,""):n.pathname,T=d?w.split("/").filter(Boolean).slice(-1)[0]||i()(d[0],{lower:!0}):"";return Object(g.b)(l.a,{tabs:d,homepage:!1,theme:h,pageTitle:f,pageDescription:v,pageKeywords:x,titleType:b},Object(g.b)(u,{title:o?Object(g.b)(o,null):f,label:"label",tabs:d}),d&&Object(g.b)(j,{slug:w,tabs:d,currentTab:T}),Object(g.b)(O.a,{padded:!0},a,Object(g.b)(k,{relativePagePath:p})),Object(g.b)(y.a,{pageContext:t,location:n,slug:w,tabs:d,currentTab:T}),Object(g.b)(c.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},BzJD:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return s})),a.d(t,"default",(function(){return m}));var n=a("wx14"),o=a("zLVn"),r=(a("q1tI"),a("7ljp")),i=a("013z"),s=(a("qKvR"),{}),c={_frontmatter:s},l=i.a;function m(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(r.b)(l,Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",null,"Using Reactive Messaging on OpenLiberty"),Object(r.b)("p",null,"Following through the tutorial’s ",Object(r.b)("inlineCode",{parentName:"p"},"start")," path via ",Object(r.b)("em",{parentName:"p"},Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"https://openliberty.io/guides/microprofile-reactive-messaging.html#getting-started"}),"Getting Started")),", you will be directed through all the necessary steps to build the application as expected."),Object(r.b)("p",null,"Contents for the ",Object(r.b)("inlineCode",{parentName:"p"},"system/src/main/resources/META-INF/microprofile-config.properties")," file:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-properties"}),'mp.messaging.connector.liberty-kafka.bootstrap.servers=<your-bootstrap-nodes-property-of-your-IBM-Event-Streams-on-Cloud-instance>\n\nmp.messaging.connector.liberty-kafka.security.protocol=SASL_SSL\nmp.messaging.connector.liberty-kafka.ssl.protocol=TLSv1.2\nmp.messaging.connector.liberty-kafka.sasl.mechanism=PLAIN\nmp.messaging.connector.liberty-kafka.sasl.jaas.config=org.apache.kafka.common.security.plain.PlainLoginModule required username="token" password="<your-api-key-of-your-IBM-Event-Streams-on-Cloud-instance>";\n\nmp.messaging.outgoing.systemLoad.connector=liberty-kafka\nmp.messaging.outgoing.systemLoad.topic=systemLoadTopic\nmp.messaging.outgoing.systemLoad.key.serializer=org.apache.kafka.common.serialization.StringSerializer\nmp.messaging.outgoing.systemLoad.value.serializer=io.openliberty.guides.models.SystemLoad$SystemLoadSerializer\n')),Object(r.b)("p",null,"Contents for the ",Object(r.b)("inlineCode",{parentName:"p"},"inventory/src/main/resources/META-INF/microprofile-config.properties")," file:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-properties"}),'mp.messaging.connector.liberty-kafka.bootstrap.servers=<your-bootstrap-nodes-property-of-your-IBM-Event-Streams-on-Cloud-instance>\n\nmp.messaging.connector.liberty-kafka.security.protocol=SASL_SSL\nmp.messaging.connector.liberty-kafka.ssl.protocol=TLSv1.2\nmp.messaging.connector.liberty-kafka.sasl.mechanism=PLAIN\nmp.messaging.connector.liberty-kafka.sasl.jaas.config=org.apache.kafka.common.security.plain.PlainLoginModule required username="token" password="<your-api-key-of-your-IBM-Event-Streams-on-Cloud-instance>";\n\nmp.messaging.incoming.systemLoad.connector=liberty-kafka\nmp.messaging.incoming.systemLoad.topic=systemLoadTopic\nmp.messaging.incoming.systemLoad.key.deserializer=org.apache.kafka.common.serialization.StringDeserializer\nmp.messaging.incoming.systemLoad.value.deserializer=io.openliberty.guides.models.SystemLoad$SystemLoadDeserializer\nmp.messaging.incoming.systemLoad.group.id=system-load-status\n')),Object(r.b)("p",null,"As the tutorial is built to run Kafka and Zookeeper locally in containers as well, you can replace the ",Object(r.b)("inlineCode",{parentName:"p"},"startContainers.sh")," script in the project with the following:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"#!/bin/bash\n\nNETWORK=reactive-app\n\ndocker network create $NETWORK\n\ndocker run -d \\\n  -p 9083:9083 \\\n  --network=$NETWORK \\\n  --name=system \\\n  --rm \\\n  system:1.0-SNAPSHOT &\n\ndocker run -d \\\n  -p 9085:9085 \\\n  --network=$NETWORK \\\n  --name=inventory \\\n  --rm \\\n  inventory:1.0-SNAPSHOT &\n\nwait\n")),Object(r.b)("h2",null,"Using Reactive Messaging with Quarkus"),Object(r.b)("p",null,"Following along with ",Object(r.b)("em",{parentName:"p"},Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"https://quarkus.io/guides/kafka#creating-the-maven-project"}),"Creating the Maven project"))," through the ",Object(r.b)("em",{parentName:"p"},Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"https://quarkus.io/guides/kafka#get-it-running"}),"Get it running"))," section, you will be walked through the necessary steps to create a simple Quarkus-based project that utilizes the Reactive Messaging feature of MicroProfile."),Object(r.b)("p",null,"Your ",Object(r.b)("inlineCode",{parentName:"p"},"application.properties")," file will need to contain the necessary security and credential information to configure the connector correctly:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-properties"}),'mp.messaging.connector.smallrye-kafka.bootstrap.servers=<your-bootstrap-nodes-property-of-your-IBM-Event-Streams-on-Cloud-instance>\n\nmp.messaging.connector.smallrye-kafka.security.protocol=SASL_SSL\nmp.messaging.connector.smallrye-kafka.ssl.protocol=TLSv1.2\nmp.messaging.connector.smallrye-kafka.sasl.mechanism=PLAIN\nmp.messaging.connector.smallrye-kafka.sasl.jaas.config=org.apache.kafka.common.security.plain.PlainLoginModule required username="token" password="<your-api-key-of-your-IBM-Event-Streams-on-Cloud-instance>";\n\n# Configure the Kafka sink (we write to it)\nmp.messaging.outgoing.generated-price.connector=smallrye-kafka\nmp.messaging.outgoing.generated-price.topic=prices\nmp.messaging.outgoing.generated-price.value.serializer=org.apache.kafka.common.serialization.IntegerSerializer\n\n# Configure the Kafka source (we read from it)\nmp.messaging.incoming.prices.connector=smallrye-kafka\nmp.messaging.incoming.prices.value.deserializer=org.apache.kafka.common.serialization.IntegerDeserializer\n')))}m.isMDXComponent=!0},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-electives-eda-activities-labs-lab-3-solution-mdx-d177535645ad65f5d183.js.map