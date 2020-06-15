(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{155:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var o=n(2),a=n(9),i=(n(0),n(199)),r={id:"scp-workflow-rest-api",title:"Typesafe client for SAP Cloud Platform Workflow REST API",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"SCP Workflow API",description:"Learn how to access the SCP Workflow REST API with the typesafe client from the SAP Cloud SDK for Java",keywords:["sap","cloud","sdk","rest","scp","workflow"]},l={id:"java/features/rest/clients/scp-workflow-rest-api",title:"Typesafe client for SAP Cloud Platform Workflow REST API",description:"Learn how to access the SCP Workflow REST API with the typesafe client from the SAP Cloud SDK for Java",source:"@site/docs/java/features/rest/clients/scp-workflow-rest-api.md",permalink:"/cloud-sdk/docs/java/features/rest/clients/scp-workflow-rest-api",editUrl:"https://github.com/SAP/cloud-sdk/edit/documentation/docs/java/features/rest/clients/scp-workflow-rest-api.md",lastUpdatedBy:"Artem Kovalov",lastUpdatedAt:1592233379,sidebar_label:"SCP Workflow API",sidebar:"someSidebar",previous:{title:"Overview",permalink:"/cloud-sdk/docs/java/features/rest/overview"},next:{title:"Use destinations to connect to other systems and services",permalink:"/cloud-sdk/docs/java/features/connectivity/sdk-connectivity-destination-service"}},c=[{value:"Goal of this Documentation",id:"goal-of-this-documentation",children:[]},{value:"How SCP Workflow and Cloud SDK play together",id:"how-scp-workflow-and-cloud-sdk-play-together",children:[]},{value:"An Example Use Case",id:"an-example-use-case",children:[]},{value:"Consume the SCP Workflow REST API",id:"consume-the-scp-workflow-rest-api",children:[{value:"Application Use Case",id:"application-use-case",children:[]},{value:"Configuration Steps",id:"configuration-steps",children:[]},{value:"Develop your App",id:"develop-your-app",children:[]},{value:"Invoke the Java Client Library",id:"invoke-the-java-client-library",children:[]},{value:"Client Library Capabilities",id:"client-library-capabilities",children:[]},{value:"Client Library Limitations",id:"client-library-limitations",children:[]},{value:"Video tutorial",id:"video-tutorial",children:[]}]}],s={rightToc:c};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"goal-of-this-documentation"},"Goal of this Documentation"),Object(i.b)("p",null,"In the following, we cover the SAP Cloud SDK Java client library (Beta) for the SCP Workflow REST API. After a brief introduction to the SCP Workflow service, we explain in detail how the developer can use this client library. Thereby we touch in particular upon all necessary configuration steps and the app development."),Object(i.b)("h2",{id:"how-scp-workflow-and-cloud-sdk-play-together"},"How SCP Workflow and Cloud SDK play together"),Object(i.b)("p",null,"The ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://help.sap.com/viewer/product/WORKFLOW_SERVICE/Cloud/en-US"}),"SAP Cloud Platform (SCP) Workflow service")," is available on the Cloud Foundry environment ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://blogs.sap.com/2019/04/03/workflow-and-business-rules-now-available-in-cloud-foundry-environment-of-sap-cloud-platform/"}),"since April 2019"),". It helps you build, run and manage workflows to model processes that span from simple approval steps to complex business scenarios with several involved parties."),Object(i.b)("p",null,"Imagine a business scenario with multiple involved parties, complex validation logic, and parallel execution flows. SCP Workflow service solves exactly this problem. By integrating this service into your application via its REST API you get a seamless solution for this problem."),Object(i.b)("p",null,"Refer to ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://blogs.sap.com/2018/01/09/sap-cloud-platform-workflow-developer-center/"}),"this blog post")," for an overview of all resources in the realm of the SCP Workflow Service."),Object(i.b)("h2",{id:"an-example-use-case"},"An Example Use Case"),Object(i.b)("p",null,"Let us sketch an example use case to gain a better understanding when we would want to use this client library."),Object(i.b)("p",null,"Imagine a use case comprising a business scenario with multiple involved parties, complex validation logic, and parallel execution flows. These requirements can be met with the SCP Workflow service. It allows us to model the workflows in a visual editor. In addition, you develop a cloud application leveraging the SAP Cloud SDK that covers the main part of the business logic and orchestrates the workflow processing in the background. For this purpose, your app communicates with the SCP Workflow service through its REST API. To make your life easier when it comes to developing against the REST API, you utilize the respective client library."),Object(i.b)("h2",{id:"consume-the-scp-workflow-rest-api"},"Consume the SCP Workflow REST API"),Object(i.b)("h3",{id:"application-use-case"},"Application Use Case"),Object(i.b)("p",null,"As described earlier, we have an existing SAP Cloud SDK-based Java app and we want to invoke the SCP Workflow REST API in our business logic. More specifically, we are interested in retrieving a list of all workflow definitions that exist in the connected SCP Workflow service instance. That requirement corresponds to the API endpoint ",Object(i.b)("inlineCode",{parentName:"p"},"/v1/workflow-definitions")," which you find under the section ",Object(i.b)("inlineCode",{parentName:"p"},"Workflow Definitions")," on the left-hand side."),Object(i.b)("h3",{id:"configuration-steps"},"Configuration Steps"),Object(i.b)("p",null,"There are some configuration steps on Cloud Foundry necessary to run this scenario. Let's look at each of them in detail."),Object(i.b)("h4",{id:"bind-app-to-scp-workflow-service-instance"},"Bind App to SCP Workflow Service Instance"),Object(i.b)("p",null,"Refer to the documentation on ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://help.sap.com/viewer/e157c391253b4ecd93647bf232d18a83/Cloud/en-US/e8d88dd056f14c75af59e68d6b20345f.html"}),"help.sap.com")," for the full picture. We will outline the essential pieces in the following. Also, we assume that you are sure about:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Which Cloud Foundry subaccount and space you want to use,"),Object(i.b)("li",{parentName:"ul"},"That the entitlement for the SCP Workflow Service is in place,"),Object(i.b)("li",{parentName:"ul"},"That you possess all necessary authorizations on Cloud Foundry to perform the following procedures and that"),Object(i.b)("li",{parentName:"ul"},"You have installed the Cloud Foundry Command Line Interface (CLI) on your machine.")),Object(i.b)("h5",{id:"identify-necessary-oauth-scopes"},"Identify necessary OAuth Scopes"),Object(i.b)("p",null,"The REST API is protected and requires authenticating with an OAuth 2.0 access token. Each particular API endpoint requires the calling REST client to provide an access token valid for the respective endpoint. That is, the token must be issued for the respective OAuth scope that corresponds to the desired API endpoint."),Object(i.b)("p",null,"Let us figure out which OAuth scope is relevant for our application use case. We see on the ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://api.sap.com/api/SAP_CP_Workflow_CF/resource"}),"API documentation")," that the endpoint ",Object(i.b)("inlineCode",{parentName:"p"},"/v1/workflow-definitions")," is assigned to the scope ",Object(i.b)("inlineCode",{parentName:"p"},"WORKFLOW_DEFINITION_GET"),"."),Object(i.b)("h5",{id:"create-service-instance-json-configuration"},"Create Service Instance JSON Configuration"),Object(i.b)("p",null,"Open a text editor of your choice and save a JSON file on your system with the following content:"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-json"}),'{\n  "authorities": ["WORKFLOW_DEFINITION_GET"]\n}\n')),Object(i.b)("p",null,"Remember where you've saved the file, you'll need it later."),Object(i.b)("h5",{id:"create-service-instance"},"Create Service Instance"),Object(i.b)("p",null,"Open the command line and authenticate at your Cloud Foundry organization by invoking ",Object(i.b)("inlineCode",{parentName:"p"},"cf login"),"."),Object(i.b)("p",null,"Consider specifying the respective subaccount, organization, and space with ",Object(i.b)("inlineCode",{parentName:"p"},"cf target")," if necessary."),Object(i.b)("p",null,"Use ",Object(i.b)("inlineCode",{parentName:"p"},"cd")," to navigate to the directory that contains the JSON file created beforehand.\nBeing in that directory, create the service instance as follows:"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),"cf create-service workflow standard my-workflow-service -c <path-to-json-file>\n")),Object(i.b)("p",null,'This command creates an instance of the SCP Workflow Service in the CF space that your CLI points to. More specifically, it uses the service plan "standard" and takes the JSON configuration into account. Note that we named the service instance ',Object(i.b)("inlineCode",{parentName:"p"},"my-workflow"),". You can name it as you want, it is just important to remember the name as you need it in your deployment descriptor ",Object(i.b)("inlineCode",{parentName:"p"},"manifest.yml")," later on."),Object(i.b)("p",null,"Once the service instance creation is finished, you can see the service instance in your CF space under ",Object(i.b)("inlineCode",{parentName:"p"},"Services")," and ",Object(i.b)("inlineCode",{parentName:"p"},"Service Instances")," in the left-hand side menu."),Object(i.b)("h5",{id:"bind-your-app-to-service-instance"},"Bind your App to Service Instance"),Object(i.b)("p",null,"Open the file ",Object(i.b)("inlineCode",{parentName:"p"},"manifest.yml")," in your project and mention your service instance under ",Object(i.b)("inlineCode",{parentName:"p"},"services"),". Refer to this example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-yaml"}),"applications:\n- name: awesome-app\n  memory: 1024M\n  timeout: 600\n  random-route: false\n  path: application/target/awesome-app-application.war\n  buildpacks:\n  - sap_java_buildpack\n  env:\n    TARGET_RUNTIME: tomee7\n    SET_LOGGING_LEVEL: '{ROOT: INFO, com.sap.cloud.sdk: INFO}'\n    JBP_CONFIG_SAPJVM_MEMORY_SIZES: metaspace:128m..\n  services:\n  - my-destination\n  - my-workflow\n  routes:\n  - route: <omitted-on-purpose>\n")),Object(i.b)("p",null,"Redeploy your app with ",Object(i.b)("inlineCode",{parentName:"p"},"cf push"),"."),Object(i.b)("h5",{id:"take-note-of-api-endpoint-and-oauth-credentials"},"Take Note of API endpoint and OAuth Credentials"),Object(i.b)("p",null,"After the deployment of the app happened, go to your CF space and navigate to ",Object(i.b)("inlineCode",{parentName:"p"},"Services")," and thereafter to ",Object(i.b)("inlineCode",{parentName:"p"},"Service Instances"),". You should see the service instance you created along with the information that is is bound to your application."),Object(i.b)("p",null,"Click on the service instance name, for instance ",Object(i.b)("inlineCode",{parentName:"p"},"my-workflow"),", in the upcoming screen you should see the headline ",Object(i.b)("inlineCode",{parentName:"p"},"Service Instance: my-workflow - Referencing Apps"),". Make sure that the entry belongs to your app is selected in the table below, given that multiple apps are bound to the same service instance."),Object(i.b)("p",null,"Consider the JSON content below the table. For your convenience, we recommend copying that JSON to a text editor. Here is one example for your reference:"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-json"}),'{\n    "endpoints": {\n        "workflow_odata_url": "foo",\n        "workflow_rest_url": "bar"\n    },\n    "html5-apps-repo": {\n        "app_host_id": "foo"\n    },\n    "uaa": {\n        "uaadomain": "bar",\n        "tenantmode": "dedicated",\n        "sburl": "bar",\n        "clientid": "foo",\n        "verificationkey": "bar",\n        "apiurl": "foo",\n        "xsappname": "bar",\n        "identityzone": "foo",\n        "identityzoneid": "bar",\n        "clientsecret": "foo",\n        "tenantid": "bar",\n        "url": "foo"\n    },\n    "sap.cloud.service": "com.sap.bpm.workflow",\n    "saasregistryappname": "workflow",\n    "content_endpoint": "foo"\n}\n')),Object(i.b)("p",null,"At next, carefully look at the JSON content and collect the values for the following JSON keys:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"workflow_rest_url")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"url")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"clientid")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"clientsecret"))),Object(i.b)("p",null,"You'll need the values in the next step."),Object(i.b)("h4",{id:"maintain-http-destination"},"Maintain HTTP Destination"),Object(i.b)("p",null,"Go to your CF subaccount, navigate to ",Object(i.b)("inlineCode",{parentName:"p"},"Connectivity")," and ",Object(i.b)("inlineCode",{parentName:"p"},"Destinations")," in the left-hand side menu, and create a new HTTP destination with the following properties:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Name: Workflow-Api"),Object(i.b)("li",{parentName:"ul"},"Type: HTTP"),Object(i.b)("li",{parentName:"ul"},"URL: The value of ",Object(i.b)("inlineCode",{parentName:"li"},"workflow_rest_url")),Object(i.b)("li",{parentName:"ul"},"Proxy Type: Internet"),Object(i.b)("li",{parentName:"ul"},"Authentication: OAuth2ClientCredentials"),Object(i.b)("li",{parentName:"ul"},"Client ID: The value of ",Object(i.b)("inlineCode",{parentName:"li"},"clientid")),Object(i.b)("li",{parentName:"ul"},"Client Secret: The value of ",Object(i.b)("inlineCode",{parentName:"li"},"clientsecret")),Object(i.b)("li",{parentName:"ul"},"Token Service URL: The value of ",Object(i.b)("inlineCode",{parentName:"li"},"url")," appended by ",Object(i.b)("inlineCode",{parentName:"li"},"/oauth/token?grant_type=client_credentials"))),Object(i.b)("p",null,"Restart your app thereafter."),Object(i.b)("h3",{id:"develop-your-app"},"Develop your App"),Object(i.b)("h4",{id:"assumptions"},"Assumptions"),Object(i.b)("p",null,"We assume that you have a Java project that uses the SAP Cloud SDK at hand. If not, we recommend going ahead ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://sap.github.io/cloud-sdk/docs/java/getting-started"}),"creating one from one of the Maven archetypes"),". Moreover, we assume your system is configured so that you can successfully invoke ",Object(i.b)("inlineCode",{parentName:"p"},"mvn clean install")," from your project's root directory."),Object(i.b)("p",null,"In addition, we assume that your have the SAP Cloud SDK Bill-of-Material (BOM) in your ",Object(i.b)("inlineCode",{parentName:"p"},"dependencyManagement")," section in your pom structure. Example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-xml"}),"<dependencyManagement>\n  <dependencies>\n    <dependency>\n      <groupId>com.sap.cloud.sdk</groupId>\n      <artifactId>sdk-bom</artifactId>\n      \x3c!-- use at least version 3.19.1 --\x3e\n      <version>3.19.1</version>\n      <type>pom</type>\n      <scope>import</scope>\n    </dependency>\n  </dependencies>\n</dependencyManagement>\n")),Object(i.b)("h4",{id:"add-maven-dependency"},"Add Maven Dependency"),Object(i.b)("p",null,"You can refer to the Java client library for the SCP Workflow service with the following Maven dependency:"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-xml"}),"<dependency>\n    <groupId>com.sap.cloud.sdk.services</groupId>\n    <artifactId>scp-workflow-cf</artifactId>\n</dependency>\n")),Object(i.b)("p",null,"Add that dependency into your pom file and invoke ",Object(i.b)("inlineCode",{parentName:"p"},"mvn clean install")," to check if Maven can pick that dependency up."),Object(i.b)("h3",{id:"invoke-the-java-client-library"},"Invoke the Java Client Library"),Object(i.b)("p",null,"We know the name of the HTTP destination that we configured in the SCP cockpit.\nAt first, we obtain a Java representation of that destination."),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-java"}),'final String destinationName = "Workflow-Api";\nfinal HttpDestination httpDestination = DestinationAccessor.getDestination(destinationName).asHttp();\n')),Object(i.b)("p",null,"Secondly, we go ahead and invoke the Java API class for the workflow definitions. More specifically, we invoke the method to obtain the list of all existing workflow definitions. We pass the HTTP destination as an argument to the constructor of the API class."),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-java"}),"final List<WorkflowDefinition> workflowDefinitions =\n        new WorkflowDefinitionsApi(httpDestination).getWorkflowDefinitions();\n")),Object(i.b)("p",null,"We have now invoked the REST API in a type-safe manner and furthermore gain type-safe access to the resulting objects. For instance, we can read particular details about each worklow definition (printed to the log here for demonstration purposes)."),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-java"}),"workflowDefinitions.forEach(workflowDefinition -> {\n    log.info(workflowDefinition.getName());\n    log.info(workflowDefinition.getVersion());\n    log.info(workflowDefinition.getCreatedAt().toString());\n});\n")),Object(i.b)("p",null,"Going even further, the library allows us to inspect all jobs related to a particular workflow definitions. Check out the model definition on the API Hub for this model relationship."),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-java"}),"final WorkflowDefinition workflowDefinition = workflowDefinitions.get(0);\nworkflowDefinition.getJobs().forEach(job -> {\n    log.info(job.getId());\n    log.info(job.getPurpose().toString());\n});\n")),Object(i.b)("p",null,"After this demo of the client library, we'll cover its general capabilities and limitations in the next sections."),Object(i.b)("h3",{id:"client-library-capabilities"},"Client Library Capabilities"),Object(i.b)("p",null,"The Java client library for SCP Workflow enables the developer to invoke the REST API in a type-safe and convenient manner. It provides Java abstractions for all REST API endpoints along with the respective model classes. Essentially, the library relieves the developer from all the HTTP-related development work (e.g., interpreting status codec, JSON de-/serialization) and lets him/her focus on the real business logic."),Object(i.b)("p",null,"Moreover, we integrated the library with the SAP Cloud SDK capabilities, such as the tenant-aware destination retrieval."),Object(i.b)("h3",{id:"client-library-limitations"},"Client Library Limitations"),Object(i.b)("p",null,"We have published the client library in a Beta state. That is, we verified its functional correctness to the best of our knowledge, but you should still not use the library for productive use cases. Once the library is mature enough we will announce that explicitly."),Object(i.b)("p",null,"Henceforth, the library supports the SCP Workflow service on Cloud Foundry, while it does not cover the SCP Workflow service on the Neo landscape on SCP. "),Object(i.b)("p",null,"Related to Cloud Foundry, you might know that environment variable VCAP_SERVICES contains information about your bound service instances. In the current state, it is required to create a destination manually instead of letting the library consume VCAP_SERVICES directly."),Object(i.b)("h3",{id:"video-tutorial"},"Video tutorial"),Object(i.b)("p",null,"This video tutorial by the developer advocate team of SAP Cloud Platform will help you get up to speed with SAP Cloud SDK for Java and Workflow API in 60 minutes."),Object(i.b)("iframe",{width:"1236",height:"695",src:"https://www.youtube.com/embed/ug2UcXK2lH4",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}))}p.isMDXComponent=!0},199:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return h}));var o=n(0),a=n.n(o);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,r=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(n),b=o,h=d["".concat(r,".").concat(b)]||d[b]||u[b]||i;return n?a.a.createElement(h,l(l({ref:t},s),{},{components:n})):a.a.createElement(h,l({ref:t},s))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var s=2;s<i;s++)r[s]=n[s];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);