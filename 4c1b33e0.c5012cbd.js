(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{110:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return g})),n.d(t,"default",(function(){return b}));var a=n(2),o=n(6),i=(n(0),n(184)),r=n(193),l=n(194),c={id:"logging-overview",title:"Logging with the SAP Cloud SDK for Java",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Logging",description:"This document will give you an overview of the different ways to log information with your application."},s={unversionedId:"java/guides/logging-overview",id:"java/guides/logging-overview",isDocsHomePage:!1,title:"Logging with the SAP Cloud SDK for Java",description:"This document will give you an overview of the different ways to log information with your application.",source:"@site/docs/java/guides/logging-overview.mdx",slug:"/java/guides/logging-overview",permalink:"/cloud-sdk/docs/java/guides/logging-overview",editUrl:"https://github.com/SAP/cloud-sdk/edit/documentation/docs/java/guides/logging-overview.mdx",version:"current",lastUpdatedBy:"Matthias Kuhr",lastUpdatedAt:1601882416,sidebar_label:"Logging",sidebar:"someSidebar",previous:{title:"Managing Dependencies",permalink:"/cloud-sdk/docs/java/guides/manage-dependencies"},next:{title:"Tutorials for the SAP Cloud SDK for Java",permalink:"/cloud-sdk/docs/java/guides/tutorial-overview-sdk-java"}},g=[{value:"Logging Overview",id:"logging-overview",children:[{value:"Providing a Logging Framework",id:"providing-a-logging-framework",children:[]}]},{value:"Writing Log Messages",id:"writing-log-messages",children:[{value:"Simple SLF4J usage",id:"simple-slf4j-usage",children:[]},{value:"Advanced SLF4J usage",id:"advanced-slf4j-usage",children:[]}]},{value:"Logging Configuration",id:"logging-configuration",children:[{value:"Configuring Logback",id:"configuring-logback",children:[]}]},{value:"Further Reading",id:"further-reading",children:[]}],u={rightToc:g};function b(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"This document aims to give you an overview of how you can write events of your application with the standard logging frameworks and how the SAP Cloud SDK integrates with that.\nThere are three parts to this document:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"How the SDK integrates with logging frameworks"),Object(i.b)("li",{parentName:"ul"},"How to create log entries"),Object(i.b)("li",{parentName:"ul"},"How to configure those entries")),Object(i.b)("p",null,"To better differentiate between different kinds of logging we will call the type of logs that are usually only relevant for developers to understand why the system behaves the way it did (for example during debugging) as ",Object(i.b)("em",{parentName:"p"},"Application Logging"),".\nOther types of logs might be kept due to legislative requirements (audit trails or audit logging) or be part of the terms and conditions (business logging).\nThis document describes how to write and configure ",Object(i.b)("em",{parentName:"p"},"Applications Logs"),"."),Object(i.b)("h2",{id:"logging-overview"},"Logging Overview"),Object(i.b)("p",null,"For creating log entries the SDK relies on the popular ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"http://www.slf4j.org/"}),"Simple Logging Facade for Java (SLF4J)"),".\nIt serves as an interface to a variety of different logging frameworks (e.g. ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"http://logback.qos.ch/"}),"Logback"),", ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://logging.apache.org/log4j/2.x/"}),"log4j"),")."),Object(i.b)("p",null,"That means there are two components involved:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"The ",Object(i.b)("em",{parentName:"p"},"SLF4J API")),Object(i.b)("p",{parentName:"li"},"The API is used to get a logger instance and create log entries:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'Logger logger = LoggerFactory.getLogger(DummyClass.class);\nlogger.debug("message");\n'))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"A ",Object(i.b)("em",{parentName:"p"},"logging framework")," which provides the implementation of that API"),Object(i.b)("p",{parentName:"li"},"The framework is then responsible for writing such messages according to a configuration.\nWhich configuration options are available depends on the framework.\nTypically one can configure a log level (Error, Warn, Debug, etc.) and the format of messages."))),Object(i.b)("p",null,"The SDK itself ",Object(i.b)("em",{parentName:"p"},"only")," relies upon the SLF4J API, not on any specific logging framework.\nThis is good practice because otherwise all consumers would be forced to use the same logging framework that the SDK comes with, rendering the SDK unusable for many use cases."),Object(i.b)("p",null,"That means that you have to ",Object(i.b)("em",{parentName:"p"},"provide a logging framework")," in your application.\nOtherwise you will not see any log entries the SDK attempts to put out."),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"In case your project is based on one of the SDK archetypes you will already have Logback set up as the logging provider."))),Object(i.b)("h3",{id:"providing-a-logging-framework"},"Providing a Logging Framework"),Object(i.b)("p",null,"In order to provide a logging framework you have to add it to the dependency tree.\nWhich artifacts are to be added exactly depends on the framework."),Object(i.b)("p",null,"To take Logback as an example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-xml"}),"<dependency>\n    <groupId>ch.qos.logback</groupId>\n    <artifactId>logback-classic</artifactId>\n    <version>latest-logback-version</version>\n    <scope>runtime</scope>\n</dependency>\n")),Object(i.b)("p",null,"Also (again, depending on the framework) you might have to provide some sort of configuration file.\nFor our example of Logback we need a ",Object(i.b)("inlineCode",{parentName:"p"},"logback.xml")," within the ",Object(i.b)("inlineCode",{parentName:"p"},"main/resources")," directory of our application."),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"When running on SCP CloudFoundry using the SAP Java Buildpack the logging implementation is provided at runtime by the container.\nThis means, if you only run the application on Cloud Foundry you don't need to provide any implementation.\nStill, oftentimes logging is also important for local deployment and testing.\nFor that providing an implementation is required."))),Object(i.b)("h2",{id:"writing-log-messages"},"Writing Log Messages"),Object(i.b)("p",null,"To start writing your own log entires you also need to specify a dependency to the SLF4J API: ",Object(i.b)("inlineCode",{parentName:"p"},"org.slf4j:slf4j-api"),".\nDepending on the chosen logging implementation you might not ",Object(i.b)("em",{parentName:"p"},"need")," to specify the SLF4J API, but it's in general best practice to not rely on transitive dependencies and therefore reference the SLF4J API anyway."),Object(i.b)("h3",{id:"simple-slf4j-usage"},"Simple SLF4J usage"),Object(i.b)("p",null,"Having these prerequisite out of the way, you can now start logging:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'import org.slf4j.Logger;\nimport org.slf4j.LoggerFactory;\n\npublic class DummyClass {\n    private static final Logger logger = LoggerFactory.getLogger(DummyClass.class);\n\n    public void doSomething() {\n        logger.trace("doSomething was called");\n    }\n}\n')),Object(i.b)("p",null,"What do you see in this example?"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"In the first line inside the class a new logger is created (once per class), with the class object as a reference. This class name will then be logged alongside the message in the logs."),Object(i.b)("li",{parentName:"ul"},"Inside the ",Object(i.b)("inlineCode",{parentName:"li"},"doSomething")," method this logger is now used to log the fact that the given method was called. The method you use for that depends on the level at which you want to see the message. Other options besides ",Object(i.b)("inlineCode",{parentName:"li"},"trace")," are ",Object(i.b)("inlineCode",{parentName:"li"},"debug"),", ",Object(i.b)("inlineCode",{parentName:"li"},"info"),", ",Object(i.b)("inlineCode",{parentName:"li"},"warn"),", and ",Object(i.b)("inlineCode",{parentName:"li"},"error"),".")),Object(i.b)("p",null,"As you can see, no reference to the actual logging implementation can be found in the code. This is the benefit of using SLF4J as a logging facade. This allows you to change the logging implementation without any changes to your application code."),Object(i.b)("h3",{id:"advanced-slf4j-usage"},"Advanced SLF4J usage"),Object(i.b)("p",null,"If you are logging more and more information you might find yourself in cases where you concatenate ",Object(i.b)("inlineCode",{parentName:"p"},"String"),"s or log inside a loop. This might cause unnecessary load on your system if the runtime log level is higher than the messages you actually want to log. To make this more plastic have a look at the following example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'public class DummyClass {\n    private static final Logger logger = LoggerFactory.getLogger(DummyClass.class);\n\n    public void doSomething() {\n        List<String> someResults = retrieveSomeResults();\n\n        logger.debug("Processing the following results:")\n        for(String result : someResult) {\n            logger.debug("- " + result);\n        }\n        consumeResults(someResults)\n    }\n}\n')),Object(i.b)("p",null,"Now assume that ",Object(i.b)("inlineCode",{parentName:"p"},"someResults")," contains hundreds or thousands of entries and the log level at runtime is set to ",Object(i.b)("inlineCode",{parentName:"p"},"INFO"),". This would mean that the loop is run without actually doing anything."),Object(i.b)("p",null,"To prevent this kind of ",Object(i.b)("em",{parentName:"p"},"empty")," loops you can use guards like ",Object(i.b)("inlineCode",{parentName:"p"},"logger.isDebugEnabled()")," in the following way:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'public class DummyClass {\n    private static final Logger logger = LoggerFactory.getLogger(DummyClass.class);\n\n    public void doSomething() {\n        List<String> someResults = retrieveSomeResults();\n\n        if( logger.isDebugEnabled() ) {\n            logger.debug("Processing the following results:")\n            for(String result : someResult) {\n                logger.debug("- " + result);\n            }\n        }\n\n        consumeResults(someResults)\n    }\n}\n')),Object(i.b)("p",null,"That way the loop is only executed if actually necessary."),Object(i.b)("h2",{id:"logging-configuration"},"Logging Configuration"),Object(i.b)("p",null,"Logging frameworks offer different options to configure the behavior of the implementation.\nWhich options are available and how to configure them highly depends on the framework you are using."),Object(i.b)("p",null,"Generally, all frameworks offer some way of configuring:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"The application ",Object(i.b)("em",{parentName:"li"},"log level")),Object(i.b)("li",{parentName:"ul"},"The output format")),Object(i.b)("p",null,"Please refer to the documentation of the specific logging implementation you are using for detailed information on what is available and how to apply it."),Object(i.b)("p",null,"The ",Object(i.b)("em",{parentName:"p"},"SDK archetypes")," already come with Logback preconfigured as the logging implementation.\nThe following gives an overview of how to change these configurations and perform essential steps like changing the log level."),Object(i.b)("h3",{id:"configuring-logback"},"Configuring Logback"),Object(i.b)("p",null,"General information about configuring Logback can be obtained from ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"http://logback.qos.ch/manual/configuration.html"}),"the documentation"),".\nThis section only explains some basics."),Object(i.b)("p",null,"Logback is configured via the configuration file located in the ",Object(i.b)("inlineCode",{parentName:"p"},"src/main/resources")," directory of your ",Object(i.b)("inlineCode",{parentName:"p"},"application")," module.\nIt is named ",Object(i.b)("inlineCode",{parentName:"p"},"logback.xml")," for TomEE and ",Object(i.b)("inlineCode",{parentName:"p"},"logback-spring.xml")," for Spring based projects.\nTo understand how Logback detects this file have a look at ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"http://logback.qos.ch/manual/configuration.html#auto_configuration"}),"their documentation"),"."),Object(i.b)("div",{className:"admonition admonition-danger alert alert--danger"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"danger")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"This configuration file is not accounted for when running a TomEE based application on SCP Cloud Foundry!\nTo configure logging on Cloud Foundry refer to the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#on-cloud-foundry"}),"dedicated section")," below."))),Object(i.b)("h4",{id:"setting-log-levels"},"Setting Log Levels"),Object(i.b)("p",null,"In this configuration file you will find a block like this:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-xml"}),'<root level="INFO">\n    <appender-ref ref="STDOUT"/>\n</root>\n')),Object(i.b)("p",null,"This basically tells Logback to log all messages with level ",Object(i.b)("inlineCode",{parentName:"p"},"INFO")," and higher to an appender with the reference ",Object(i.b)("inlineCode",{parentName:"p"},"STDOUT"),".\nValid values for the ",Object(i.b)("inlineCode",{parentName:"p"},"level")," property are: ",Object(i.b)("inlineCode",{parentName:"p"},"TRACE"),", ",Object(i.b)("inlineCode",{parentName:"p"},"DEBUG"),", ",Object(i.b)("inlineCode",{parentName:"p"},"INFO"),", ",Object(i.b)("inlineCode",{parentName:"p"},"WARN"),", and ",Object(i.b)("inlineCode",{parentName:"p"},"ERROR"),".\nSo, if you want to log all packages with level ",Object(i.b)("inlineCode",{parentName:"p"},"DEBUG"),", for example, you could set it the following way:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-xml"}),'<root level="DEBUG">\n    <appender-ref ref="STDOUT"/>\n</root>\n')),Object(i.b)("p",null,"However, usually you want to set the logging level for certain packages (or classes) only.\nFor this you would add the following line:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-xml"}),'<logger name="package.to.log" level="INFO" />\n')),Object(i.b)("p",null,"So, in the case that you want to log all requests sent and responses received by the Apache HttpClient in your application locally you would have the following configuration block:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-xml"}),'<logger name="org.apache.http" level="DEBUG" />\n<logger name="org.apache.http.wire" level="ERROR" />\n<root level="INFO">\n    <appender-ref ref="STDOUT"/>\n</root>\n')),Object(i.b)("h4",{id:"on-cloud-foundry"},"On Cloud Foundry"),Object(i.b)("p",null,"If you want to set the debug levels of your application running on Cloud Foundry (using the SAP Java Buildpack) you have to set the ",Object(i.b)("inlineCode",{parentName:"p"},"SET_LOGGING_LEVEL"),".\nThis allows you to also change the log level at runtime, as we will see further down in this section."),Object(i.b)("p",null,"To set the environment variable with every start of the application it is advised to set it in your deployment descriptor of your project.\nThis is typically a ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjVv7TknpbsAhUJ36QKHaA_Bp4QFjAAegQIBBAC&url=https%3A%2F%2Fhelp.sap.com%2Fviewer%2F6a4563286d06419cb9927ef448c67432%2FCloud%2Fen-US%2Fe68e33b67c844689b07abf70e7ca5bc8.html&usg=AOvVaw1D_4MogbdbFNLOG1A1xeJy"}),"Manifest")," or ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://help.sap.com/viewer/4505d0bdaf4948449b7f7379d24d0f0d/2.0.03/en-US/33548a721e6548688605049792d55295.html"}),"MTA")," file in your project root directory.\nIt usually looks something like this:"),Object(i.b)(r.a,{defaultValue:"manifest",values:[{label:"Manifest",value:"manifest"},{label:"MTA",value:"mta"}],mdxType:"Tabs"},Object(i.b)(l.a,{value:"manifest",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"---\napplications:\n\n- name: <your-application>\n  some-properties: <some-values>\n  env:\n    OTHER_ENVIRONMENT_VARIABLE: 'and their values'\n    SET_LOGGING_LEVEL: '{ROOT: INFO, com.sap.cloud.sdk: INFO, package.to.log: DEBUG}'\n"))),Object(i.b)(l.a,{value:"mta",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"ID: com.company.project.app\nversion: 1.0.1\nmodules:\n   - name: <your-module>\n     type: java.tomcat\n     properties: \n       SET_LOGGING_LEVEL: '{ROOT: INFO, com.sap.cloud.sdk: INFO, package.to.log: DEBUG}'\n")))),Object(i.b)("p",null,"So, in the case that you want to log all requests sent and responses received by the Apache HttpClient in your application on Cloud Foundry you would set ",Object(i.b)("inlineCode",{parentName:"p"},"SET_LOGGING_LEVEL")," to the following value:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"{ROOT: INFO, com.sap.cloud.sdk: INFO, org.apache.http: DEBUG, org.apache.http.wire: ERROR}\n")),Object(i.b)("p",null,"As mentioned earlier, it's possible to set environment variable via the Cloud Foundry CLI.\nThe SAP Java BuildPack should then be able to pickup these changes and propagate them to your application."),Object(i.b)("p",null,"So, assuming that you have the initial configuration shown above and you want to start logging the Apache HttpClient, you would now issue the following command on your command line:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"})," cf set-env logging-documentation SET_LOGGING_LEVEL '{ROOT: INFO, com.sap.cloud.sdk: INFO, org.apache.http: DEBUG, org.apache.http.wire: ERROR}'\n")),Object(i.b)("p",null,"Don't forget to change the environment variable back to the previous state.\nIn this example case the command would be the following:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"cf set-env logging-documentation SET_LOGGING_LEVEL '{ROOT: INFO, com.sap.cloud.sdk: INFO}'\n")),Object(i.b)("h2",{id:"further-reading"},"Further Reading"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},'How to use SLF4J with "legacy" logging frameworks: ',Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"http://www.slf4j.org/legacy.html"}),"http://www.slf4j.org/legacy.html")),Object(i.b)("li",{parentName:"ul"},"Debug Logging of the Apache HttpClient: ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://hc.apache.org/httpcomponents-client-4.5.x/logging.html"}),"https://hc.apache.org/httpcomponents-client-4.5.x/logging.html"))))}b.isMDXComponent=!0},184:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var a=n(0),o=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),g=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=g(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},p=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=g(n),p=a,d=u["".concat(r,".").concat(p)]||u[p]||b[p]||i;return n?o.a.createElement(d,l(l({ref:t},s),{},{components:n})):o.a.createElement(d,l({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var s=2;s<i;s++)r[s]=n[s];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},190:function(e,t,n){"use strict";function a(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}t.a=function(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(o&&(o+=" "),o+=t);return o}},191:function(e,t,n){"use strict";var a=n(0),o=Object(a.createContext)(void 0);t.a=o},192:function(e,t,n){"use strict";var a=n(0),o=n(191);t.a=function(){var e=Object(a.useContext)(o.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},193:function(e,t,n){"use strict";var a=n(0),o=n.n(a),i=n(192),r=n(190),l=n(47),c=n.n(l),s=37,g=39;t.a=function(e){var t=e.block,n=e.children,l=e.defaultValue,u=e.values,b=e.groupId,p=Object(i.a)(),d=p.tabGroupChoices,m=p.setTabGroupChoices,h=Object(a.useState)(l),f=h[0],O=h[1],j=Object(a.useState)(!1),v=j[0],y=j[1];if(null!=b){var w=d[b];null!=w&&w!==f&&u.some((function(e){return e.value===w}))&&O(w)}var N=function(e){O(e),null!=b&&m(b,e)},k=[],L=function(e){e.metaKey||e.altKey||e.ctrlKey||y(!0)},T=function(){y(!1)};return Object(a.useEffect)((function(){window.addEventListener("keydown",L),window.addEventListener("mousedown",T)}),[]),o.a.createElement("div",null,o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(r.a)("tabs",{"tabs--block":t})},u.map((function(e){var t=e.value,n=e.label;return o.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":f===t,className:Object(r.a)("tabs__item",c.a.tabItem,{"tabs__item--active":f===t}),style:v?{}:{outline:"none"},key:t,ref:function(e){return k.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case g:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case s:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(k,e.target,e),L(e)},onFocus:function(){return N(t)},onClick:function(){N(t),y(!1)},onPointerDown:function(){return y(!1)}},n)}))),o.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter((function(e){return e.props.value===f}))[0]))}},194:function(e,t,n){"use strict";var a=n(0),o=n.n(a);t.a=function(e){return o.a.createElement("div",null,e.children)}}}]);