import monolithDiagram from "../images/sentinel_diagrams/sentinel_overall_architecture_2.png";
import overview from "../images/sentinel_diagrams/sentinel_overall_architecture_2.png";
import bufferingOptions from "../images/sentinel_diagrams/sentinel_overall_architecture_2.png";
import kafkaInAction from "../images/sentinel_diagrams/sentinel_overall_architecture_2.png";
import distribution from "../images/sentinel_diagrams/distribution.png"
import scaling from "../images/sentinel_diagrams/scaling.png"
import restart from "../images/sentinel_diagrams/restart.png"
import networking from "../images/sentinel_diagrams/networking.png"
import swarmGif from "../images/sentinel_diagrams/docker-swarm.gif"
import oneProcess from "../images/sentinel_diagrams/one-process.png"
import overlay from "../images/sentinel_diagrams/overlay.gif"
import reverseProxy1 from "../images/sentinel_diagrams/reverse-proxy1.gif"
import reverseProxy2 from "../images/sentinel_diagrams/reverse-proxy2.gif"
import overlay2 from "../images/sentinel_diagrams/overlay2.gif"
import providers from "../images/sentinel_diagrams/providers.png"
import dynamicConfig from "../images/sentinel_diagrams/dynamic-config.png"
import labels from "../images/sentinel_diagrams/labels.png"
import canary from "../images/sentinel_diagrams/canary.gif"
import monitoring from "../images/sentinel_diagrams/monitoring.gif"
import clusterInspect from "../images/sentinel_diagrams/cluster-inspect.png"
import promDashboard from "../images/sentinel_diagrams/prom-dashboard.png"
import grafanaDashboard from "../images/sentinel_diagrams/grafana-dashboard.png"
import canaryFail from "../images/sentinel_diagrams/canary-fail.gif"
import inspectApp from "../images/sentinel_diagrams/inspect-app.png"
import cli from "../images/sentinel_diagrams/cli.png"
import abstractions from "../images/sentinel_diagrams/abstractions.png"
import rollingDeploy from "../images/sentinel_diagrams/rolling-deploy.gif"
import paasChart from "../images/sentinel_diagrams/paas-chart.png"
import heroku from "../images/sentinel_diagrams/heroku.png"
import isolation from "../images/sentinel_diagrams/isolation.png"
import containers from "../images/sentinel_diagrams/containers.png"


import CaseStudyNav from "./CaseStudyNav";
import DemoCarousel from "./DemoCarousel";

import { introDemo, containerizedAppsDemo, canaryDeploymentsDemo, scalingDemo } from "../demoData";

function CaseStudy() {
  const headerStyle = "section text-5xl font-extrabold mt-14 mb-6 text-dark-blue";
  const subHeaderStyle = "section text-4xl font-bold mt-16 mb-4 text-dark-blue";
  const subSubHeaderStyle = "text-3xl font-bold mt-12 mb-4 text-dark-blue";
  const paragraphStyle = "my-7 text-dark-blue";
  const listDiscStyle = "list-outside list-disc text-gray-300 text-2xl items-center";
  const listNumStyle = "list-outside list-decimal text-2xl items-center text-dark-blue";
  const listTextStyle = "inline text-dark-blue text-xl";
  const listElementStyle = "ml-7 text-dark-blue";
  const imgStyle = "mx-auto my-8 rounded-lg";
  const linkStyle = "underline text-blue-500";

  return (
    <div className="flex">
      <CaseStudyNav />
      <div id="case-study" className="w-xl-casestudy xl:pt-0">
        <div className="prose ml-6 leading-9 w-10/12 text-left text-gray-700 text-xl">
          <h1 className="mt-24 mb-16 text-6xl font-black">Case Study</h1>
          {/* <!-- Section 1 --> */}
          <h2 id="section-1" data-section="section-1" className={headerStyle}>
            1. Introduction
          </h2>
          <p className={paragraphStyle}>
            Sentinel is an open source, cloud-agnostic, self-hosted platform as a service (PaaS) that can easily deploy multiple database-backed web applications, with built in support for upgrading applications via canary deployments.
          </p>
          <p className={paragraphStyle}>
            Sentinel makes deploying applications <em>easy</em>, by providing a custom command line interface. The CLI interacts with the Sentinel Control Plane, and the Control Plane in turn manages the Sentinel Cluster, on which a developer’s applications live. From the CLI, developers provide Sentinel with a Dockerized image of their application. Then Sentinel provisions the necessary infrastructure and deploys the application, abstracting away tedious deployment details. With a single CLI command, applications go from running on a developer’s laptop to running in production in the cloud behind a live URL.
          </p>
          <p className={paragraphStyle}>
            Sentinel makes deploying applications <em>safe</em>, by supporting canary deployments, equipped with the necessary monitoring tools. When a new feature or update is ready to be tested in production, Sentinel can deploy a canary with a simple CLI command. Users can split traffic and implement sticky sessions, if desired. After the canary is deployed, developers can adjust the amount of traffic being routed to the canary at any time to further test the canary’s performance. Every application deployed through Sentinel is automatically integrated with a monitoring stack that delivers system- and application-level metrics, which makes judging the health of a canary straightforward. Whether a developer decides a canary is healthy enough to promote to production, or if the canary needs to be rolled back, a simple command from the CLI will get the job done. Here’s a look at the commands the Sentinel CLI offers:
          </p>
          <img
            src={cli}
            alt="CLI commands"
            className={imgStyle}
          />
          <p className={paragraphStyle}>
            There were numerous engineering challenges and design decisions our team faced during the creation of Sentinel which we will focus on throughout this case study. Before we get into a discussion of Sentinel’s design, we’ll first provide some context by defining platform as a service, comparing canaries to other deployments strategies, and providing an overview of existing solutions in this area.
          </p>

          <h3 id="section-1-1" className={subHeaderStyle}>
            1.1. What is a PaaS
          </h3>
          <p className={paragraphStyle}>
            Deploying a web application requires having a physical server to run on, and network hardware to connect it to the internet. It also requires an appropriate operating system and installing the necessary dependencies. There are essentially three approaches to handling these needs, with varying degrees of abstraction. The bare metal approach to deploying a web application involves managing all these details, from application level concerns down to the physical hardware. Infrastructure as a Service (IaaS) abstracts away all the physical details, everything up to the OS level, but developers still have to manage the servers. A Platform as a Service (PaaS) goes one step further, abstracting away even the OS and server configurations, so that developers only have to provide the platform with a runnable web application.<sup><a href="#fn1">1</a></sup>
          </p>
          <img
            src={abstractions}
            alt="-aas Abstraction Diagram"
            className={imgStyle}
          />
          <p className={paragraphStyle}>
            Sentinel provides developers with all the functionality expected of a PaaS. But part of what sets Sentinel apart, is that apps hosted on it can easily be upgraded via canary deployments. So before comparing Sentinel explicitly to other options in this domain, a brief review of deployments options, and the benefits of canary deployments, is in order.
          </p>
          <h3 id="section-1-2" className={subHeaderStyle}>
            1.2. Deployment Strategies
          </h3>
          <p className={paragraphStyle}>
            There are several deployment strategies that developers can use to deploy updates to their applications.<sup><a href="#fn2">2</a></sup> An ideal deployment strategy would adhere to the following guidelines: 
          </p>
          <ul className={listDiscStyle}>
            <li className={`${listElementStyle} pl-4`}>
              <p className={listTextStyle}> Minimize the harm done by any unforeseen bugs in the new version of the application.</p>
            </li>
            <li className={`${listElementStyle} pl-4`}>
              <p className={listTextStyle}> Mitigate the amount of down time it takes to make the updates.</p>
            </li>
            <li className={`${listElementStyle} pl-4`}>
              <p className={listTextStyle}> Be able to quickly and easily revert back to the previous version, if for any reason, the new version of the application is not performing as expected.</p>
            </li>
          </ul>
          <h4 className={subSubHeaderStyle}>
            Blue Green Deployments
          </h4>
          <p className={paragraphStyle}>
            One strategy is blue-green deployments. This technique utilizes two identical environments, a “blue” (production) and a “green” (staging) environment. These environments are identical with the exception of the application version.
          </p>
          <p className={paragraphStyle}>
            The staging environment will host the new version which will undergo testing, done by the developers, while the production environment will contain the existing application and is handling real users requests. Once testing on the staging environment is complete, all requests are shifted from the production (blue) environment to the staging (green) environment thus making the staging environment the new production environment.
          </p>
          <strong><p className={paragraphStyle}>Pros:</p></strong>
          <ul className={listDiscStyle}>
            <li className={`${listElementStyle} pl-4`}>
              <p className={listTextStyle}>Downtime: Little to none involved when shifting the traffic from one environment to the other.</p>
            </li>
            <li className={`${listElementStyle} pl-4`}>
              <p className={listTextStyle}>Rollbacks: If for any reason the new version of the application isn’t performing well then all requests can easily be shifted back to the previous environment.</p>
            </li>
            <li className={`${listElementStyle} pl-4`}>
              <p className={listTextStyle}>Fairly simple to implement</p>
            </li>
          </ul>
          <strong><p className={paragraphStyle}>Cons:</p></strong>
          <ul className={listDiscStyle}>
            <li className={`${listElementStyle} pl-4`}>
              <p className={listTextStyle}>Unforeseen bugs: Any and all bugs in the new version of the application will be exposed to all end users all at once.</p>
            </li>
            <li className={`${listElementStyle} pl-4`}>
              <p className={listTextStyle}>Costly: blue green deployments require replicating the entire production environment.</p>
            </li>
          </ul>

          <h4 className={subSubHeaderStyle}>
            Rolling Deployments
          </h4>
          <p className={paragraphStyle}>
            Another strategy is rolling deployments, which sequentially update application instances. In this example there are three instances of an application which have to be updated. To do this we can follow a simple set of rules:
          </p>
          <ul className={listDiscStyle}>
            <li className={`${listElementStyle} pl-4`}>
              <p className={listTextStyle}> Stop routing requests to the first instance of the application and take it down.</p>
            </li>
            <li className={`${listElementStyle} pl-4`}>
              <p className={listTextStyle}> Start up a new instance of the application.</p>
            </li>
            <li className={`${listElementStyle} pl-4`}>
              <p className={listTextStyle}> Route new requests to the new version of the application.</p>
            </li>
          </ul>
          <img
            src={rollingDeploy}
            alt="Rolling Deployments"
            className={imgStyle}
          />
          <strong><p className={paragraphStyle}>Pros:</p></strong>
          <ul className={listDiscStyle}>
            <li className={`${listElementStyle} pl-4`}>
              <p className={listTextStyle}>Downtime: Little to no downtime.</p>
            </li>
            <li className={`${listElementStyle} pl-4`}>
              <p className={listTextStyle}>Rollbacks: Easy to reverse the process by taking the exact opposite steps.</p>
            </li>
            <li className={`${listElementStyle} pl-4`}>
              <p className={listTextStyle}>Less infrastructure resources needed compared to blue green deployments. </p>
            </li>
            <li className={`${listElementStyle} pl-4`}>
              <p className={listTextStyle}>Unforeseen Bugs: Not all users will be affected and bugs will be caught earlier.</p>
            </li>
          </ul>
          <strong><p className={paragraphStyle}>Cons:</p></strong>
          <ul className={listDiscStyle}>
            <li className={`${listElementStyle} pl-4`}>
              <p className={listTextStyle}>Lack of control over how users are routed to the new application version. Users are simply routed to the new application version as instances are updated. There is no fine grain control over the percentage of traffic being routed to the new version.</p>
            </li>
          </ul>

          <h4 className={subSubHeaderStyle}>
            Canary Deployments
          </h4>
          <p className={paragraphStyle}>
            The general idea behind canary deployments is to split off a small portion of the user traffic from the current production version and direct it to the new version of the application. This cautious approach mitigates any adverse consequences that may occur as a result of introducing unforeseen bugs, as only a small percentage of users would be affected. Splitting traffic can target specific user groups, such as by geographic region. However, the diagram below depicts a simple rule wherein 20% of all requests are diverted to the new version of the application.
          </p>
          <p className={paragraphStyle}>
            If faced with a bad deployment and the need to rollback, traffic is no longer sent to the new application and the original production version handles 100% of the requests.
          </p>
          <p className={paragraphStyle}>
            But, in the event that the canary is performing well, traffic to the canary can be increased incrementally, gradually bolstering confidence that the new version is production ready.
          </p>
          <p className={paragraphStyle}>
            When a developer is confident that the canary version is healthy, it can be promoted to the new production version. Depending on whether there are multiple instances of the production application running, the canary promotion process may need to incorporate some of the procedures from rolling deployments, previously discussed.
          </p>
          <strong><p className={paragraphStyle}>Pros:</p></strong>
          <ul className={listDiscStyle} >
            <li className={`${listElementStyle} pl-4`}>
              <p className={listTextStyle}>Downtime: Little to none, applications can remain running while the update is being pushed out.</p>
            </li>
            <li className={`${listElementStyle} pl-4`}>
              <p className={listTextStyle}>Rollbacks: Easy to do, stop routing requests to canary.</p>
            </li>
            <li className={`${listElementStyle} pl-4`}>
              <p className={listTextStyle}>Ability to rapidly push out updates and get immediate feedback on how their changes perform in a production environment with real users.</p>
            </li>
            <li className={`${listElementStyle} pl-4`}>
              <p className={listTextStyle}>Unforeseen Bugs: Low risk, small percentage of users exposed to new bugs.</p>
            </li>
            <li className={`${listElementStyle} pl-4`}>
              <p className={listTextStyle}>High degree of control over the percentage of users that see the new updates.<sup><a href="#fn3">3</a></sup></p>
            </li>
          </ul>
          <strong><p className={paragraphStyle}>Cons:</p></strong>
          <ul className={listDiscStyle}>
            <li className={`${listElementStyle} pl-4`}>
              <p className={listTextStyle}>Complex to implement traffic splitting between application versions.</p>
            </li>
          </ul>
          <p className={paragraphStyle}>
            Canary deployments address some of the weaknesses of the previously mentioned deployment strategies. In comparison to blue-green deployments, canary deployments are an effective use of resources, as they don’t require a duplication of the entire production environment. Unlike rolling deployments, canary deployments do provide a high degree of control over the users interacting with the updated application. The main con of a canary deployment is the complexity involved in traffic splitting, but this is a complexity that Sentinel can take care of for its users. In other words, Sentinel abstracts away these complexities so that developers can take advantage of the benefits canary deployments offer.
          </p>

          <h3 id="section-1-3" className={subHeaderStyle}>
            1.3. Use Case: Apps-R-Us
          </h3>
          <p className={paragraphStyle}>
            To illustrate who might benefit from Sentinel, imagine a growing business called Apps-R-Us. Apps-R-Us is a web development consultancy, and anyone can hire them to build their web apps. On any given day they would be responsible for developing new applications or updating existing ones. For example, they could be making grade-tracking software for a local school district, while simultaneously making updates to a registration portal for a local sports league. 
          </p>
          <p className={paragraphStyle}>
            Apps-R-Us is responsible for many applications at different stages of development and are in need of a PaaS that can manage the infrastructure when deploying applications as well as updating existing ones. They want their development team to focus on what matters most– developing their applications. Due to their diverse clientele, they want control over the PaaS in order to tailor it to their clients’ needs. The problems that Apps-R-Us faces are common and illustrate our motivation behind why we built Sentinel. As we go over Sentinel’s design in more detail in what follows, we’ll periodically check in with Apps-R-Us to see how Sentinel meets their needs.
          </p>
          <DemoCarousel clipInfo={introDemo} targetId={"intro"} />
          <h3 id="section-1-4" className={subHeaderStyle}>
            1.4. Sentinel vs. Other PaaS
          </h3>
          <p className={paragraphStyle}>
            There are many providers in the PaaS space and we can categorize them along a number of lines. On the one hand, there are closed source options, such as Heroku and Elastic Beanstalk. These options tend to have many features, but that doesn’t necessarily mean they are going to support canary deployments out of the box. Additionally, these options will most likely come at a monthly cost just to use them.
          </p>
          <img
            src={paasChart}
            alt="PaaS Chart Comparison"
            className={imgStyle}
          />
          <p className={paragraphStyle}>
            The big cloud providers tend to offer their own PaaS that are tightly integrated with their cloud infrastructure. If they decide to raise the price, make significant changes, or deprecate support for something, developers have to weigh the option of whether or not it’s worth the time, effort, and money to make the switch to a new PaaS that better suits their needs. With a closed source option, users will be at the mercy of the PaaS as to when or if they make any changes to the infrastructure.
          </p>
          <p className={paragraphStyle}>
            To highlight the last point, when Heroku started back in 2007 they were using AWS EC2-Classic instances<sup><a href="#fn4">4</a></sup>. At the time these were the latest and greatest compute instances available at AWS. But, in 2013 AWS launched a more performant and efficient VPC architecture.<sup><a href="#fn5">5</a></sup> Only recently in October 2021 did Heroku make the switch to the new model that AWS offers.<sup><a href="#fn6">6</a></sup> So, during that 8 year period of time Heroku customers were unable to take advantage of a more performant and efficient architecture. Because Heroku, and the other aforementioned PaaS are closed sourced, there is no way to update the source code for any reason.
          </p>
          <img
            src={heroku}
            alt="Heroku Timeline"
            className={imgStyle}
          />
          <p className={paragraphStyle}>
            On the other hand, there are open source PaaS providers, such as CapRover. With the open source option, development teams will have more control because there is no longer a 3rd party managing the platform. Developers have unimpeded access to the source code, which means they have the opportunity to shape it to their needs. To summarize these tradeoffs: while the open-source options provide more flexibility and are cheaper, they lack many of the features and support provided by a closed-source option.
          </p>
          <p className={paragraphStyle}>
          A business such as Apps-R-Us wants a streamlined way to deploy applications, and a cautious way of upgrading those applications, but does not need all the bells and whistles–or want the costs–involved with a closed-source PaaS. For such companies, Sentinel strikes the right balance.
          </p>
          <h3 id="section-1-5" className={subHeaderStyle}>
            1.5. Sentinel’s Goals
          </h3>
          <p className={paragraphStyle}>
            We now have a solid understanding of what Sentinel is and what it means to be an open source, cloud-agnostic, platform as a service with built in support for canary deployments. As a brief recap, when we set out to build Sentinel we had the following goals in mind: 
          </p>
          <ul className={listDiscStyle}>
            <li className={`${listElementStyle} pl-4`}>
              <p className={listTextStyle}>Provide users with a convenient CLI to deploy and manage their applications.</p>
            </li>
            <li className={`${listElementStyle} pl-4`}>
              <p className={listTextStyle}>Allow users to deploy Sentinel with any cloud provider.</p>
            </li>
            <li className={`${listElementStyle} pl-4`}>
              <p className={listTextStyle}>Support applications with a variety of programming languages and runtime environments.</p>
            </li>
            <li className={`${listElementStyle} pl-4`}>
              <p className={listTextStyle}>Support canary deployments as a means of updating existing applications.</p>
            </li>
            <li className={`${listElementStyle} pl-4`}>
              <p className={listTextStyle}>Provide monitoring tools to verify the health of canary and production applications.</p>
            </li>
          </ul>
          <p className={paragraphStyle}>
            Naturally, having these goals drove many of our design decisions. In what follows, we’ll unpack those decisions, and see how Sentinel was built.
          </p>

          {/* <!-- Section 2 --> */}
          <h2 id="section-2" data-section="section-2" className={headerStyle}>
            2. Infrastructure
          </h2>
          <p className={paragraphStyle}>
            Sentinel takes care of provisioning the infrastructure necessary for hosting users’ applications. In this section, we’ll consider how Sentinel provides users with flexibility, in terms of where their apps are hosted, and what sorts of apps they can deploy.
          </p>
          <h3 id="section-2-1" className={subHeaderStyle}>
            2.1. Cloud-Provider Agnostic
          </h3>
          <p className={paragraphStyle}>
            To be a "cloud-provider agnostic"  platform means that Sentinel must be deployable using any major cloud-provider's servers, with minimal friction involved in switching between them. To achieve this goal, Sentinel only provisions the bare minimum resources needed from any given cloud provider, and the rest of the logic is kept "in house."
          </p>
          <p className={paragraphStyle}>
            Each cloud provider has plenty of custom services to simplify running applications in the cloud. But because they are not compatible between cloud providers, using them locks the user into a particular provider. For example, by using AWS Elastic Container Service to manage containers, a developer would have to learn a completely new set of tools in order to switch to Google Cloud Platform.
          </p>
          <p className={paragraphStyle}>
            However, all cloud providers have at least one offering in common: Linux virtual servers! By limiting Sentinel to only provisioning simple compute instances, and not using any other custom cloud services, Sentinel can be deployed on any cloud provider.<sup><a href="#fn7">7</a></sup>
          </p>
          <p className={paragraphStyle}>
            Of course, along with compute instances, Sentinel needs some consistent, cloud-agnostic way to perform key actions, such as: scaling compute instances up and down, installing and scaling applications, and managing permissions and firewalls. Using, say, AWS’s Cloudformation to do this on Amazon’s EC2 instances, would again tie Sentinel more tightly to a particular provider. So, to provision compute instances, and interact with them, Sentinel uses a combination of Terraform and Ansible. With these two tools, basically anything that can be done on the command line, can be done programmatically on a remote compute instance.
          </p>
          <h3 id="section-2-2" data-section="section-2" className={subHeaderStyle}>
            2.2. High-Level Infrastructure Overview
          </h3>
          <p className={paragraphStyle}>
            Let’s see what this infrastructure looks like at a high-level. Recall the <code>sentinel init</code> command from the initial demo up above that created Sentinel’s infrastructure in the user’s cloud account. The following diagram (and the notes which follow), explain in more detail what was going on there:
          </p>
          <img
            src={monolithDiagram}
            alt="monolith diagram"
            className={imgStyle}
          />
          <p className={paragraphStyle}>
            The first thing to note is the Sentinel CLI, which is running on the developer’s computer, outside of the cloud infrastructure. When a developer runs <code>sentinel init</code>, some initial Terraform and Ansible code is triggered to create the Sentinel Control Plane.
          </p>
          <p className={paragraphStyle}>
            The Sentinel Control Plane is the first cloud compute instance that is part of Sentinel’s infrastructure, and it’s the brains of the operation. It’s the server that’s responsible for provisioning the further servers users’ apps will run on, and for deploying the apps themselves to those servers.
          </p>
          <p className={paragraphStyle}>
            The Sentinel Cluster is composed of the servers that actually host users’ applications. On <code>sentinel init</code>, one server is created in the Cluster. When a user needs to scale up with a new server, they run a command on the CLI, and the Control Plane adds it to the Cluster using Terraform.
          </p>
          <p className={paragraphStyle}>
            Once compute instances are provisioned, Ansible is used to carry-out most of the ongoing system level tasks for these instances, such as copying over files, adjusting permissions, installing software, and so on. For example, each new server must immediately have Docker installed on it, and be set as running in swarm mode (more on the swarm in a bit). Other tasks, such as deploying and scaling applications, are directed specifically to the Docker daemon on the “manager” server (again, for the term “manager,” see discussion of Docker Swarm Mode, below).
          </p>
          <p className={paragraphStyle}>
            Finally, the Control Plane also communicates with the Docker daemon's API to get information about the current state of deployed applications. By default, the Docker daemon listens for requests on a local unix socket, and this is what is communicated with when running Docker commands locally (such as <code>docker run</code>).<sup><a href="#fn8">8</a></sup> But it’s also possible to securely expose the Docker daemon on a port for remote access. It would have been possible to do some of the aforementioned application deployment and management via the Docker API directly, as well. However, because of the complexity of Sentinel’s Docker configurations, it was more straightforward to separate out the task of deploying apps, which is accomplished via Docker Compose files with Ansible, and getting information about the state of deployed applications, which is handled via API calls.
          </p>

          <h3 id="section-2-3" className={subHeaderStyle}>
            2.3. Containerized Applications
          </h3>
          <p className={paragraphStyle}>
            We’ve now covered how Sentinel’s infrastructure provides its users with flexibility, in terms of where their apps are hosted. Ideally, users should not be limited in terms of the sorts of applications they can deploy, and space utilization on any given compute instance should be maximized. However, hosting multiple applications in multiple runtimes on the same machine raises some concerns. For example, there might be conflicting dependencies: one app might need an older version of python, one might need a newer version. There are also security concerns, as the user may not want every app potentially accessible to every other app. Some isolation is desirable. In general, there are two possible solutions to these issues: virtual machines and containers.
          </p>
          <img
            src={isolation}
            alt="VMs vs Containers"
            className={imgStyle}
          />
          <p className={paragraphStyle}>
            Pictured on the left hand side of the above diagram, virtual machines involve running multiple operating systems on the same server. Though there is in fact only one machine, this is achieved by having a hypervisor divide up and emulate its resources into multiple "virtual machines" that are compatible with each guest OS. So while this does achieve isolation, it is isolation at the machine or operating system level, and it’s a very resource heavy way of achieving isolation.<sup><a href="#fn9">9</a></sup>
          </p>
          <p className={paragraphStyle}>
            A better solution for our use case is containerized applications (pictured on the right hand side of the diagram). With containerized applications, isolation is still achieved, but at the process level.<sup><a href="#fn10">10</a></sup> This is much less resource intensive than isolating a whole emulated OS (just look at how many more containers fit on the right-hand side of the diagram!). And as for dependencies, even if the host operating system does not have all the dependencies necessary for running an application, if it has Docker installed, it can run a container with those dependencies, without installing them on the host computer. This allows users to deploy any app they like, as long as it’s containerized.
          </p>
          <p className={paragraphStyle}>
            Just to illustrate how this looks in the context of Sentinel’s overall architecture, we can zoom in on one of the nodes in the cluster, and see that it has many containerized applications on it: 
          </p>
          <img
            src={containers}
            alt="Containers on node"
            className={imgStyle}
          />
          <p className={paragraphStyle}>
            Not only are users’ applications deployed as containers, but so are their associated databases and monitoring tools. There are other ways of containerizing applications, but Docker was the clear choice, due to its widespread use.
          </p>
          <p className={paragraphStyle}>
            The benefits of containerized applications are illustrated in the demo below, where Apps-R-Us uses Sentinel to deploy a second application into their Cluster.
          </p>

          <DemoCarousel clipInfo={containerizedAppsDemo} targetId={"containerizedApps"} />

          <p className={paragraphStyle}>
            Of course, no matter how useful containers are, hosting a lot of containers raises some new challenges that Sentinel had to solve. We discuss these challenges and Sentinel's solutions in the next section.
          </p>

          {/* <!-- Section 3 --> */}

          <h2 id="section-3" className={headerStyle}>
            3. Managing Containerized Applications
          </h2>
          <p className={paragraphStyle}>
            As users deploy more and more containerized applications, at some point, the infrastructure will need to be scaled. Similarly, as their deployed applications get more traffic, application instances will also need to be scaled. Vertical scaling of infrastructure, such as increasing memory and disk space, could partially address the first issue, but this is only possible up to a finite degree. Instead, Sentinel supports horizontal scaling of applications and servers by adding instances as needed.
          </p>
          <h3 id="section-3-1" className={subHeaderStyle}>
            3.1. Considerations for Managing Containerized Applications Across Compute Instances
          </h3>
          <p className={paragraphStyle}>
            As containerized applications are deployed and scaled across compute instances, the following challenges arise:
          </p>
          <ul className={listDiscStyle}>
            <li className={`${listElementStyle} pl-4`}>
              <p className={listTextStyle}><em>Distribution</em>: What server should new applications be deployed on? And how can we keep track of where each application is running?</p>
              <img
                src={distribution}
                alt="distribution"
                className={`${imgStyle}`}
              />
            </li>
            <li className={`${listElementStyle} pl-4`}>
              <p className={listTextStyle}><em>Scaling & Load Balancing</em>: How do applications get scaled horizontally? And once scaled, how does load balancing between the application instances work? As servers are scaled up and down, how do existing containers get re-distributed?</p>
              <img
                src={scaling}
                alt="scaling"
                className={`${imgStyle}`}
              />
            </li>
            <li className={`${listElementStyle} pl-4`}>
              <p className={listTextStyle}><em>Networking</em>: How can containers communicate with one another? For example, if an application is running in a separate container than its database, they would need a way to communicate.</p>
              <img
                src={networking}
                alt="networking"
                className={`${imgStyle}`}
              />
            </li>
            <li className={`${listElementStyle} pl-4`}>
              <p className={listTextStyle}><em>Restart</em>: When a server or a container crashes, how does the container get restarted on a healthy server with minimal downtime?</p>
              <img
                src={restart}
                alt="restart"
                className={`${imgStyle}`}
              />
            </li>
          </ul>
          <h3 id="section-3-2" className={subHeaderStyle}>
            3.2. Container Orchestration
          </h3>
          <p className={paragraphStyle}>
            To manage all of the complexities introduced in the previous section, Sentinel uses a container orchestrator. A container orchestrator automates the deployment, management, scaling and networking of containers.<sup><a href="#fn11">11</a></sup> In terms of our use case, these are the key features of a container orchestrator that, collectively, help solve many of the challenges of managing containers across servers:
          </p>
          <ul className={listDiscStyle}>
            <li className={`${listElementStyle} pl-4`}>
              <p className={listTextStyle}><em>Resource Scheduling</em>: refers to strategies a container orchestrator uses to determine which server to put a container on. As the demands of applications grow and shrink, this feature automatically handles distribution and redistribution of containers across servers to optimize existing resources.</p>
            </li>
            <li className={`${listElementStyle} pl-4`}>
              <p className={listTextStyle}><em>Restart Policy</em>: A restart policy can be designated for containers so that if a container crashes, the orchestrator will automatically attempt to restart it. In the same way, if a server crashes, the orchestrator will detect this and schedule the containers to run on an available server.</p>
            </li>
            <li className={`${listElementStyle} pl-4`}>
              <p className={listTextStyle}><em>Scaling & Load Balancing</em>: Orchestrators make it easy to scale containers up and down as needed by running a simple command. Once scaled, load balancing between the application instances is a built-in feature.</p>
            </li>
            <li className={`${listElementStyle} pl-4`}>
              <p className={listTextStyle}><em>Service Discovery</em>: When a container is created, the user provides a name for it and it gets assigned its own IP address. It’s important to note that containers are ephemeral, meaning they can stop and restart at any time. When a container is restarted, it receives a new IP address, so it would be difficult to know how to route traffic for an application based on containers' IP addresses alone. To address this, orchestrators use Service Discovery which uses an embedded DNS server to automatically resolve that given container name to the IP address and port of the associated container. If a container is restarted, and receives a new IP address, the internal DNS record will be updated. Service Discovery is imperative for communication between containers as well as routing external requests.</p>
            </li>
            <li className={`${listElementStyle} pl-4`}>
              <p className={listTextStyle}><em>Overlay Networks</em>: container orchestrators provide overlay networks which enable containers to communicate with each other across a virtual layer 2 network that allows physically separated servers to communicate as though they were physically connected via LAN. For each network a container is added to, it receives another virtual IP address.</p>
            </li>
          </ul>
          <h3 id="section-3-3" className={subHeaderStyle}>
            3.3. Docker Swarm Mode
          </h3>
          <p className={paragraphStyle}>
            While researching container orchestrators, we considered AWS Elastic Container Service but quickly ruled it out. In keeping with a cloud agnostic approach, Sentinel 
            should not be tied to a cloud provider for such a major piece of functionality. We also considered Kubernetes, but it provided more functionality than our use case required, so the added complexity was not justified.
          </p>
          <p className={paragraphStyle}>
            Docker Swarm Mode was the clear choice. It’s built into any Docker deployment, and it seamlessly integrates with other Docker tools like the Docker CLI and Docker Compose. It also provides the ability to interact with servers running in Docker swarm mode via Docker API calls. It has robust documentation with the benefit of ease of use and overall provides the appropriate functionality for our use case.
            </p>

          <h3 id="section-3-4" className={subHeaderStyle}>
            3.4. How Docker Swarm Mode Works
          </h3>
          <p className={paragraphStyle}>
            Let’s examine more closely how exactly Docker Swarm Mode works and how it can be used to deploy an application.
          </p>
          <p className={paragraphStyle}>
            A swarm is a collection of servers running Docker in swarm mode that act as Managers and Workers. 
          </p>
          <ul className={listDiscStyle}>
            <li className={`${listElementStyle} pl-4`}>
              <p className={listTextStyle}><em>Nodes</em> are servers that have Docker installed and are part of the swarm. Manager nodes handle delegation of swarm services and management of membership to the swarm. </p>
            </li>
            <li className={`${listElementStyle} pl-4`}>
              <p className={listTextStyle}>A <em>service</em> is how applications are deployed in the swarm. A service is defined by specifying the image to deploy and how many instances of the application should run.</p>
            </li>
            <li className={`${listElementStyle} pl-4`}>
              <p className={listTextStyle}>A <em>task</em> is the actual running container of the service that was defined. For any service, there will be one or more tasks. Services are deployed to the Manager Node which then schedules the service by creating tasks and spreading them out over the nodes in the swarm.</p>
            </li>
          </ul>
          <img
            src={swarmGif}
            alt="Docker Swarm"
            className={`${imgStyle}`}
          />
          <p className={paragraphStyle}>
            Here, there are three servers - one Manager Node and two Worker Nodes. As shown in the diagram, the application “catnip” is defined as a service and submitted to the Manager Node. As part of the service definition, the application image is set and three tasks are defined, meaning upon deployment, catnip should be scaled to three containers. The Manager Node then schedules the catnip service to run as three tasks on the available nodes. As seen here, the Worker and Manager Nodes can all run tasks. Applications can be easily scaled up or down at any time by changing the number of tasks running via a simple Docker command on the manager node.
          </p>

          <h3 id="section-3-5" className={subHeaderStyle}>
            3.5. Application & Cluster Scaling
          </h3>
          <p className={paragraphStyle}>
            We can see how Sentinel works with Docker Swarm Mode to easily scale production applications as well as horizontally scale the Sentinel cluster in the demo below with Apps-R-Us.
          </p>
          <DemoCarousel clipInfo={scalingDemo} targetId={"scalingDemo"} />

          {/* <!-- Section 4 --> */}

          <h2 id="section-4" className={headerStyle}>
            4. Inter-service Communication
          </h2>
          <p className={paragraphStyle}>
            We know that containers run in isolation and–without further configuration–don’t know anything about other processes or containers in the swarm or even on the same machine. In this section, we’ll explore how communication between services can be achieved.
          </p>
          <h3 id="section-4-1" className={subHeaderStyle}>
            4.1. One Process Principle
          </h3>
          <p className={paragraphStyle}>
            Since Sentinel supports applications with a Postgres database, the first thing to consider is Docker’s One Process Principle, which states that “each container should do one thing and do it well.”<sup><a href="#fn12">12</a></sup> This means that for applications with a database, the database should be deployed as a separate service in the swarm. While technically a database can run in the same container as the application, ideally, they should be decoupled to allow for scaling applications and databases independently of each other and also to easily version applications (without affecting the database).
          </p>
          <img
            src={oneProcess}
            alt="One Process Principle"
            className={`${imgStyle} max-w-xl -mb-8`}
          />

          <h3 id="section-4-2" className={subHeaderStyle}>
            4.2. Overlay Networks
          </h3>
          <p className={paragraphStyle}>
            Earlier, when describing container orchestrators, we touched on their container networking capabilities by way of overlay networks. To reiterate, an overlay network is a virtual layer 2 network that allows physically separated nodes to communicate as though they were physically connected via LAN. With the virtual layer 2 network in place, swarm services can communicate, without those services needing to be exposed to the broader internet.<sup><a href="#fn13">13</a></sup> This is how an application and database service can communicate securely. This type of virtual networking minimizes security risks as there’s no need to expose the ports of containers to the internet for the services to communicate, keeping them isolated. Each container is available on this overlay network at a virtual IP address, one which only other containers, connected to the same overlay network, are able to access. These virtual IP addresses are not accessible outside the swarm and so keep containers isolated. As mentioned earlier, container orchestrators use Service Discovery by way of DNS to map service names to container IP addresses. So a service merely needs to know the name of another service on the same overlay network to communicate with it.
          </p>
          <p className={paragraphStyle}>
            Take, for example, the todos app in the below diagram. Upon deployment, a service is created for the application, a separate service is created for the database, and lastly, an application specific overlay network is created, to which both services are connected. Since no other applications will be connected to this particular network, the database remains isolated from other non-related applications, providing ideal security for the database. Thanks to Swarm’s built in DNS resolution feature, the todos service just needs to know the service name of the database in order to connect to it over the network. To scale up the todos app, the user can simply increase the number of tasks running for the todos service and the new task will automatically connect to the todos overlay network.
          </p>
          <img
            src={overlay}
            alt="Overlay Networks"
            className={`${imgStyle} -ml-16`}
          />
          <p className={paragraphStyle}>
            At this point in the design process, we understand the role of the container orchestrator and how applications rely on it to communicate internally. In the next section, we will cover how end users can access their applications externally.
          </p>


          {/* <!-- Section 5 --> */}

          <h2 id="section-5" className={headerStyle}>
            5. Routing HTTP Requests
          </h2>
          <p className={paragraphStyle}>
            Obviously, hosting developers’ applications is only useful if their end users have a way to access those apps, so the Sentinel Cluster must be able to accept requests, forward them to the appropriate applications, and do all of this securely.
          </p>
          <p className={paragraphStyle}>
            One way to accomplish the above goals would have been to use Docker’s built in routing mesh. When Docker is in swarm mode, all nodes are connected to an ingress routing mesh. This is essentially an overlay network with a built-in load balancer that routes requests to the various tasks. For each service, a port is published and an ingress rule for that port is created on each node. Each node accepts connections on all published ports even if the node is not running a task that uses that port. When a node receives a request for a given service on the service’s port, it will hand the request to the ingress load balancer. The ingress load balancer then determines which task should receive the request using a “round robin” approach, and the request is sent to that task over the ingress routing mesh.
          </p>
          <p className={paragraphStyle}>
            So, each service’s port could be exposed on each compute instance that is acting as a node, and the end users could access the applications via these ports. This approach would not have required any additional infrastructure; however, it would have been undesirable for a number of reasons. First of all, it is unintuitive and awkward for end users to have to include a port number in the URL when trying to get to an application. Secondly, from a security perspective, exposing ports on a server greatly increases its vulnerability to malicious entities on the internet.<sup><a href="#fn14">14</a></sup>
          </p>
          <h3 id="section-5-1" className={subHeaderStyle}>
            5.1. Incorporating a Reverse Proxy
          </h3>
          <p className={paragraphStyle}>
            A better way of forwarding requests to the appropriate applications is to use a reverse proxy. While this does involve introducing another piece of infrastructure to Sentinel’s architecture, the benefits greatly outweigh any downsides.
          </p>
          <p className={paragraphStyle}>
            With a reverse proxy in place, individual applications can be mapped to distinct hostnames and the reverse proxy handles routing the requests to the appropriate applications. To facilitate this, developers specify a hostname for their application on the CLI at the time of deployment, having previously pointed that DNS record for their application’s domain name to the Cluster’s manager node. The reverse proxy can also handle encryption for HTTPS which relieves users’ applications of this responsibility. This frees up their apps’ web servers to focus on serving their content rather than spending resources on encryption.
          </p>
          <p className={paragraphStyle}>
            The reverse proxy could have simply been installed on its own server and routed requests to the applications using the aforementioned ports that Docker publishes for each service. This would have required the creation of security rules where the cluster servers would only accept connections over these ports if the request was coming from the IP address of the server hosting the reverse proxy. However, this is not fully secure as it leaves the system vulnerable to IP spoofing attacks.<sup><a href="#fn15">15</a></sup>
          </p>
          <img
            src={reverseProxy1}
            alt="Reverse proxy on own server"
            className={`${imgStyle}`}
          />
          <p className={paragraphStyle}>
            The better solution is to use a private network to connect the reverse proxy with applications that need to receive the forwarded requests. Given that Sentinel uses Docker Swarm Mode as a container orchestrator, the built-in overlay networks can be used to accomplish this. Sentinel runs the reverse proxy as a Docker service on the Manager node, creates a new overlay network, and adds the reverse proxy along with all internet facing apps to this network. The reverse proxy then uses Docker’s built-in DNS system to route requests to the applications according to their Docker service name, taking full advantage of the security benefits of overlay networks already outlined above. 
          </p>
          <img
            src={reverseProxy2}
            alt="Reverse proxy 2"
            className={`${imgStyle}`}
          />

          <h3 id="section-5-2" className={subHeaderStyle}>
            5.2. Choosing a Reverse Proxy
          </h3>
          <p className={paragraphStyle}>
            When choosing a specific reverse proxy, we mainly considered Nginx, HAProxy, and Traefik given their maturity and popularity. While any of these three tools would have worked for Sentinel, Traefik was the best option for our use case for a number of reasons.
          </p>
          <p className={paragraphStyle}>
            First and foremost, it was specifically designed to integrate with container orchestrators. This integration is largely done via its “providers” which interact directly with the supported orchestrators’ APIs. It also has excellent service discovery and its routing rules can be updated dynamically. This means that new services can be discovered and traffic routed to them without having to restart the reverse proxy. Traefik also provides some support for integrating Let’s Encrypt, including automatic certificate renewal, which aids Sentinel in providing HTTPS to users’ apps out of the box.
          </p>
          <p className={paragraphStyle}>
            Having sorted out how the end users will be able to easily and securely access the applications, let’s examine how Sentinel implements the various features involved with canary deployments.
          </p>

          <h2 id="section-6" className={headerStyle}>
            6. Canary Deployments
          </h2>

          <p className={paragraphStyle}>
            In order to properly support canary deployments, Sentinel provides the following functionalities:
          </p>
          <ul className={listDiscStyle}>
            <li className={`${listElementStyle} pl-4`}>
              <p className={listTextStyle}>Deploy a canary with an initial traffic weight and sticky sessions settings</p>
              <li className={`${listElementStyle} pl-4`}>
                <p className={listTextStyle}>Change the amount of traffic being diverted to the canary</p>
            </li>
            </li>
            <li className={`${listElementStyle} pl-4`}>
              <p className={listTextStyle}>Promote the canary</p>
            </li>
            <li className={`${listElementStyle} pl-4`}>
              <p className={listTextStyle}>Rollback the canary</p>
            </li>
            <li className={`${listElementStyle} pl-4`}>
              <p className={listTextStyle}>Provide metrics and logs to developers for determining the health and performance of the canaries</p>
            </li>
          </ul>
          <p className={paragraphStyle}>Let’s take a look at each of these in turn.</p>
          <DemoCarousel clipInfo={canaryDeploymentsDemo} targetId={"canaryDemo"} />

          <h3 id="section-6-1" className={subHeaderStyle}>
            6.1. Deploying a Canary
          </h3>
          <p className={paragraphStyle}>
            Deploying a canary is done via the <code>sentinel canary deploy</code> command. The canary deploy process starts with running the new version as a separate Docker service. The process continues by making use of at least one, and potentially two, overlay networks. Firstly, if the application uses a database, the canary is connected to that application-specific overlay network alongside the production version and database service, to facilitate inter-service communication, as depicted in the diagram below: 
          </p>
          <img
            src={overlay2}
            alt="Overlay networks 2"
            className={`${imgStyle} -ml-16`}
          />
          <p className={paragraphStyle}>
            Secondly, database or not, the new version is added to the reverse proxy overlay network. This gets traffic flowing to the canary, but, adding the canary to the overlay network isn’t enough: the routing rules need to be updated such that requests for a given application are split between the production service and canary service. Sentinel largely accomplishes this using Traefik’s routing abilities, so in order to explain how this is implemented, we need to cover some basic Traefik concepts.
          </p>

          <h4 className={subSubHeaderStyle}>
            Traefik Configuration Overview
          </h4>
          <p className={paragraphStyle}>
            Traefik’s configuration is broken up into two separate categories: its “static” configuration, which is set when Traefik is first started up and cannot be adjusted without restarting the service, and its “dynamic” configuration which can be adjusted while the service is running. The “static” configuration contains general settings for logging, metrics, certificate resolvers, and entry points, among other things, and it is where the providers are defined. 
          </p>
          <img
            src={providers}
            alt="Traefik Providers Configuration"
            className={`${imgStyle}`}
          />
          <p className={paragraphStyle}>
            Providers are essentially the different places that Traefik looks to get its dynamic configuration. They are called “providers” because they provide the configuration to Traefik. According to Traefik’s documentation, providers are, “infrastructure components, whether orchestrators, container engines, cloud providers, or key-value stores.” Essentially, the providers are defined in the “static” configuration, and then Traefik queries the providers at regular intervals, either via their APIs or by watching a particular file directory, for information relevant to routing. When Traefik detects a change, it updates its routes. The way that each provider provides its dynamic configuration varies. 
          </p>
          <p className={paragraphStyle}>
            Of the providers that Sentinel uses, the first one we’ll talk about is the File provider. Traefik is told to watch a certain directory, and it adjusts accordingly if certain configuration files in this directory are added, removed or edited. For example, in the case of canaries, Traefik watches a file that indicates how to split the traffic between the production and canary services. 
          </p>
          <p className={paragraphStyle}>
            The other provider Sentinel uses is Docker. Specifying Docker as a provider puts Traefik on the lookout for new applications deployed with Sentinel. Specifying that Docker is running in Swarm Mode is also done in the static configuration. When new Docker services are actually deployed, Traefik gets new dynamic configurations through labels that are added to those Docker services. These labels can be added, edited, or removed while the Docker service is running which allows for dynamic updates to the routing rules associated with a given service. Now that we've given an overview of Traefik’s configuration, let’s examine how this applies to canary deployments.
          </p>

          <h4 className={subSubHeaderStyle}>Traefik Configuration for Canaries</h4>
          <p className={paragraphStyle}>
            When deploying a canary, Sentinel adds a dynamic configuration file that defines traffic splitting weights for the production and canary services for an application. Users can also change these weights after the canary has been deployed using the <code>sentinel canary traffic</code> command. This configuration file will also include sticky session settings if the developer has selected that feature for this canary. 
          </p>
          <img
            src={dynamicConfig}
            alt="Traefik dynamic config file"
            className={`${imgStyle}`}
          />
          <p className={paragraphStyle}>
            Sentinel then starts the canary service and adds labels to the production and canary Docker services (another dynamic configuration) which tell Traefik to use the traffic splitting weights defined in the configuration file.
          </p>
          <img
            src={labels}
            alt="Traefik labels"
            className={`${imgStyle}`}
          />

          <h3 id="section-6-2" className={subHeaderStyle}>
            6.2. Promoting a Canary
          </h3>
          <p className={paragraphStyle}>
            With deploying a canary now covered, let’s discuss the ability to promote canaries. To start, Sentinel updates the configuration for the production service so that it uses the new image version. This starts a rolling update process where each production task is one-by-one replaced by a task running the new version.
          </p>
          <img
            src={canary}
            alt="Canary Promote"
            className={`${imgStyle}`}
          />
          <p className={paragraphStyle}>
            Once all tasks have been updated, the canary service and the traffic splitting configuration file are both removed.
          </p>

          <h3 id="section-6-3" className={subHeaderStyle}>
            6.3. Rolling a Canary Back
          </h3>
          <p className={paragraphStyle}>
            The last bit of canary-specific functionality Sentinel provides is the ability to roll a canary deployment back should it not meet the developer’s standards for promotion. This is a very straight-forward process. Sentinel simply removes the Traefik configuration file that sets the traffic splitting behavior, which will revert 100% of the traffic back to the production service, and then remove the canary service.
          </p>
          <p className={paragraphStyle}>
            Of course, in order to fully support canary deployments, Sentinel users need to be able to analyze the canary version’s performance and health. For that, Sentinel provides monitoring tools, which will be covered in detail in the next section.
          </p>

          {/* <!-- Section 7 --> */}
          <h2 id="section-7" className={headerStyle}>
            7. Monitoring
          </h2>
          <h3 id="section-7-1" className={subHeaderStyle}>
            7.1. Monitoring Architecture Overview
          </h3>
          <p className={paragraphStyle}>
            Up until now we’ve discussed how a user can scale compute instances, scale apps, and promote and roll back canaries, using Sentinel. The final piece to the puzzle is to consider, <em>how does Sentinel assist users in making decisions about when to act on the aforementioned functionality?</em>
          </p>
          <p className={paragraphStyle}>
            For this part of the discussion, we’ll focus on three monitoring tools, deployed as Docker services into the Sentinel Cluster: Node Exporter, Prometheus, and Grafana. These three tools work together, building off one another, to deliver metrics to the developers using Sentinel. The following diagram illustrates the basic flow of data, which will be explained more below:
          </p>
          <img
            src={monitoring}
            alt="Monitoring Tools"
            className={`${imgStyle}`}
          />
          <p className={paragraphStyle}>
            Unlike Prometheus and Grafana, which only run on the manager node, <strong>Node Exporter</strong> is deployed onto every node in the cluster. The reason for this is that Node Exporter provides <em>system level</em> metrics, like disk space available, memory available, and CPU usage. If there are two nodes deployed within the Cluster, running <code>sentinel cluster inspect</code> will return information like the following:
          </p>
          <img
            src={clusterInspect}
            alt="cluster inspect output"
            className={`${imgStyle}`}
          />
          <p className={paragraphStyle}>
            So, as the name suggests, Node-Exporter <em>exports</em>, or produces metrics about the node on which it is installed. But the above output isn’t produced with Node-Exporter alone. Node-Exporter exports <em>raw</em> metrics, and some way to <em>scrape</em>, or <em>read</em> those metrics, and then <em>analyze</em> them is also required, in order to turn that raw stream into what is shown above. This is where <strong>Prometheus</strong> comes in. Prometheus scrapes metrics from two sources in Sentinel’s architecture:
          </p>
          <ul className={listDiscStyle}>
            <li className={`${listElementStyle} pl-4`}>
              <p className={listTextStyle}>Traefik for <em>application level</em> metrics, such as: request response-time, and response status codes. It would not be ideal to ask users to manually instrument their applications, which would require them to modify their code to make it deliver metrics in a way that Prometheus understands.<sup><a href="#fn16">16</a></sup> Instead, these metrics are captured at the level of the reverse proxy.</p>
            </li>
            <li className={`${listElementStyle} pl-4`}>
              <p className={listTextStyle}>Node Exporter for the abovementioned system level metrics.</p>
            </li>
          </ul>
          <p className={paragraphStyle}>
            These metrics, once scraped, can then be analyzed with Prometheus’s query language, PromQL. Essentially, PromQL allows the user to filter and transform data from a stream of metrics, into something more insightful. For example, a user might want to see only 404 status codes from a particular application, and only from the last 5 minutes.
          </p>
          <p className={paragraphStyle}>
            Sentinel provides developers access to Prometheus’s default dashboard:
          </p>
          <img
            src={promDashboard}
            alt="Prometheus Dashboard"
            className={`${imgStyle}`}
          />
          <p className={paragraphStyle}>
            Here you can see some metrics that have come into Prometheus from Traefik. Traefik is labeled as the scrape job, and each applications’ metrics have been configured to include labels, which allows users to sort by application. There’s also some PromQL code surrounding these metrics to say that we want to know the sum total of all the status codes sent out by this application, sorted by code, for the last hour.
          </p>
          <p className={paragraphStyle}>
            Once metrics have been collected and analyzed in Prometheus, Sentinel is set up to display them in a more friendly manner to the developers with Grafana. Grafana is primarily a tool for visualizing datasources, and in this case, Prometheus is the datasource.
          </p>
          <img
            src={grafanaDashboard}
            alt="Grafana Dashboard"
            className={`${imgStyle}`}
          />
          <p className={paragraphStyle}>
            From Sentinel’s Grafana dashboard (pictured more fully below, in the next section) a developer can select the application they want to know about from a dropdown menu, which is automatically populated with all their currently deployed apps. By default, the dashboard shows how many requests a given app has received in the last five minutes, the average response time for those requests, and data about response status codes issued from this app over the last five minutes, and the last hour.
          </p>
          <p className={paragraphStyle}>
            By running <code>sentinel metrics</code> developers can set custom hostnames and a password to reach their Prometheus and Grafana dashboards, which are automatically populated with data from any currently deployed apps.
          </p>

          <h3 id="section-7-2" className={subHeaderStyle}>
            7.2. Monitoring a Canary Instance
          </h3>
          <p className={paragraphStyle}>
            Sentinel provides three ways to help developers decide when to promote or roll back a canary.
          </p>
          <h4 className={subSubHeaderStyle}>
            Compare production and canary side-by-side
          </h4>
          <p className={paragraphStyle}>
            First, they can compare the production and canary side-by-side, in their Grafana dashboard. Again, as soon as a canary is deployed, Sentinel automatically begins collecting these metrics, and makes them available within these tools.
          </p>
          <img
            src={canaryFail}
            alt="Failed canary"
            className={`${imgStyle}`}
          />
          <p className={paragraphStyle}>
            Here we have the production version on the left, and the canary on the right. Initially, it seemed the canary was doing well, but the upward sloping red line on the right, and a growing red pie chart, indicate that the canary version has started responding with 404s.
          </p>
          <h4 className={subSubHeaderStyle}>
            Dig deeper with logs
          </h4>
          <p className={paragraphStyle}>
            If a developer wants to dig deeper, to figure out what specifically was leading to those 404s, they can run <code>sentinel inspect logs</code>. They’ll be prompted to select the name of their application, and immediately get logs from that application in their terminal.
          </p>
          <h4 className={subSubHeaderStyle}>
            Look for resource drain
          </h4>
          <p className={paragraphStyle}>
            Finally, maybe an app is performing well for end-users, but a developer wants to know if it is consuming too many system resources. For this, a developer can run the command <code>sentinel inspect app</code>, and get a report about their application, along with metrics about the node on which it is hosted.
          </p>
          <img
            src={inspectApp}
            alt="inspect app command output"
            className={`${imgStyle}`}
          />
          <p className={paragraphStyle}>
            The above illustrates the general flow of monitoring a canary’s health using Sentinel. But, of course, a developer can use these same commands to help make decisions about when to scale a compute instance, or when to scale a non-canary, standard production app (e.g., if a node’s disk space is full, or if the production applications are competing too heavily for system resources).
          </p>

          <h2 id="section-8" className={headerStyle}>8. Getting Started with Sentinel</h2>
          <p className={paragraphStyle}>
            With Sentinel, deployments are easy, and updates are safe. Sentinel’s cloud-agnostic and open-source design means developers retain control and flexibility over their applications. Sentinel’s integration of canary deployments and monitoring tools means that developers can upgrade their applications with confidence.
          </p>
          <p className={paragraphStyle}>
            Developers can get started with Sentinel by following a few simple steps:
          </p>
          <ul className={`${listNumStyle}`}>
            <li className={`${listElementStyle} pl-4`}>
              <p className={listTextStyle}>Install Terraform and Ansible.</p>
            </li>
            <li className={`${listElementStyle} pl-4`}>
              <p className={listTextStyle}>Ensure you have the necessary <a className={linkStyle} href="https://github.com/Sentinel-PaaS/Sentinel-cli" rel="noreferrer" target="_blank">cloud-provider credentials</a> in place.</p>
            </li>
            <li className={`${listElementStyle} pl-4`}>
              <p className={listTextStyle}>Download and install the npm package by running <code>npm i @sentinel-paas/sentinel-cli -g</code>.</p>
            </li>
            <li className={`${listElementStyle} pl-4`}>
              <p className={listTextStyle}>Run <code>sentinel init</code>.</p>
            </li>
            <li className={`${listElementStyle} pl-4`}>
              <p className={listTextStyle}>Run <code>sentinel deploy</code>.</p>
            </li>
          </ul>
          <p className={paragraphStyle}>
            For more detailed instructions, see our <a className={linkStyle} href="https://github.com/Sentinel-PaaS/Sentinel-cli" target="_blank" rel="noreferrer">Github page</a>, and for more information on the commands available within Sentinel, run <code>sentinel --help</code>.
          </p>

          <h2 id="section-9" className={headerStyle}>9. Upcoming Work</h2>
          <p className={paragraphStyle}>
          And that’s Sentinel! Of course, we’re always working to improve the platform, and here is some of our upcoming work:
          </p>
          <ul className={`${listDiscStyle}`}>
            <li className={`${listElementStyle} pl-4`}>
              <p className={listTextStyle}><em>Support for other cloud providers (Google Cloud, Microsoft Azure, Digital Ocean, etc)</em>: this is a core part of our vision, and fortunately it is well within reach. Because compute instances are provisioned using Terraform, rather than a specific cloud providers interface, to accomplish this goal we’ll just need to create distinct Terraform files, updating what we already have according to the specifications of the different providers. The rest of the control plane logic will be able to remain the same.</p>
            </li>
            <li className={`${listElementStyle} pl-4`}>
              <p className={listTextStyle}><em>Deploy the canary along with a baseline version of the production app, each on their own compute instances</em>: while this is not essential, it is currently considered best practice, as it allows you to isolate any differences between the canary and the production app more precisely.<sup><a href="#fn17">17</a></sup> For example, a canary could be slow, but only because it is on an overcrowded node. We’re already splitting traffic and creating new instances, so this functionality will just require a little more of that.</p>
            </li>
            <li className={`${listElementStyle} pl-4`}>
              <p className={listTextStyle}><em>Integrate buildpacks, to allow users to deploy from github code or a zip file</em>: with buildpacks, users wouldn’t have to know how to use Docker, they could just provide a zip file or a link to their code on github. This would, naturally, further increase the accessibility of Sentinel.</p>
            </li>
            <li className={`${listElementStyle} pl-4`}>
              <p className={listTextStyle}><em>Support apps that use other databases (MySql, Mongo, etc)</em></p>
            </li>
          </ul>
          <br></br>
          <div id="divide"></div>
          <br></br>
          <ul className={`${listNumStyle}`}>
            <li className={`${listElementStyle} pl-4`}>
              <p id="fn1" className={listTextStyle}>https://www.networkworld.com/article/2163430/paas-primer--what-is-platform-as-a-service-and-why-does-it-matter-.html</p>
            </li>
            <li className={`${listElementStyle} pl-4`}>
              <p id="fn2" className={listTextStyle}>https://harness.io/blog/continuous-verification/blue-green-canary-deployment-strategies/</p>
            </li>
            <li className={`${listElementStyle} pl-4`}>
              <p id="fn3" className={listTextStyle}>For Sentinel’s use case, the ability to have fine grained control over the percentage of traffic seemed most important. But it is also possible to split traffic along other dimensions, such as geographic region or IP address.</p>
            </li>
            <li className={`${listElementStyle} pl-4`}>
              <p id="fn4" className={listTextStyle}>https://aws.amazon.com/blogs/aws/ec2-classic-is-retiring-heres-how-to-prepare/</p>
            </li>
            <li className={`${listElementStyle} pl-4`}>
              <p id="fn5" className={listTextStyle}>https://blog.heroku.com/adventures-of-rendevous</p>
            </li>
            <li className={`${listElementStyle} pl-4`}>
              <p id="fn6" className={listTextStyle}>https://blog.heroku.com/faster-dynos-for-all</p>
            </li>
            <li className={`${listElementStyle} pl-4`}>
              <p id="fn7" className={listTextStyle}>At present, Sentinel’s start up scripts include Terraform configurations for AWS, and our team has plans to add configurations for other providers in the near future.</p>
            </li>
            <li className={`${listElementStyle} pl-4`}>
              <p id="fn8" className={listTextStyle}>https://docs.docker.com/engine/reference/commandline/dockerd/</p>
            </li>
            <li className={`${listElementStyle} pl-4`}>
              <p id="fn9" className={listTextStyle}>https://www.ibm.com/cloud/blog/containers-vs-vms</p>
            </li>
            <li className={`${listElementStyle} pl-4`}>
              <p id="fn10" className={listTextStyle}>https://jvns.ca/blog/2016/10/10/what-even-is-a-container/</p>
            </li>
            <li className={`${listElementStyle} pl-4`}>
              <p id="fn11" className={listTextStyle}>https://newrelic.com/blog/best-practices/container-orchestration-explained</p>
            </li>
            <li className={`${listElementStyle} pl-4`}>
              <p id="fn12" className={listTextStyle}>https://docs.docker.com/get-started/07_multi_container/</p>
            </li>
            <li className={`${listElementStyle} pl-4`}>
              <p id="fn13" className={listTextStyle}>https://docker-tutorial.schoolofdevops.com/swarm-networking-deepdive/</p>
            </li>
            <li className={`${listElementStyle} pl-4`}>
              <p id="fn14" className={listTextStyle}>https://thecyphere.com/blog/open-ports/</p>
            </li>
            <li className={`${listElementStyle} pl-4`}>
              <p id="fn15" className={listTextStyle}>https://www.cloudflare.com/learning/ddos/glossary/ip-spoofing/</p>
            </li>
            <li className={`${listElementStyle} pl-4`}>
              <p id="fn16" className={listTextStyle}>https://sysdig.com/blog/prometheus-metrics/</p>
            </li>
            <li className={`${listElementStyle} pl-4`}>
              <p id="fn17" className={listTextStyle}>https://spinnaker.io/docs/guides/user/canary/best-practices/</p>
            </li>
          </ul>
          <br></br>
        </div>
      </div>
    </div>
  );
}

export default CaseStudy;
