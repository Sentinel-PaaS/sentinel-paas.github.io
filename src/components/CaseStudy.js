import monolithDiagram from "../images/sentinel_diagrams/sentinel_overall_architecture_2.png";
import buyingOptions from "../images/sentinel_diagrams/sentinel_overall_architecture_2.png";
import loggingSolutions from "../images/sentinel_diagrams/sentinel_overall_architecture_2.png";
import overview from "../images/sentinel_diagrams/sentinel_overall_architecture_2.png";
import bufferingOptions from "../images/sentinel_diagrams/sentinel_overall_architecture_2.png";
import kafkaInAction from "../images/sentinel_diagrams/sentinel_overall_architecture_2.png";

import CaseStudyNav from "./CaseStudyNav";
import DemoCarousel from "./DemoCarousel";

import { introDemo, containerizedAppsDemo, canaryDeploymentsDemo, scalingDemo } from "../demoData";

function CaseStudy() {
  const headerStyle = "section text-3xl font-extrabold mt-14 mb-6";
  const subHeaderStyle = "section text-2xl font-bold mt-16 mb-4";
  const subSubHeaderStyle = "text-xl font-bold mt-12 mb-4";
  const paragraphStyle = "my-5";
  const listDiscStyle = "list-outside list-disc text-gray-300 text-2xl items-center";
  const listNumStyle = "list-outside list-decimal text-2xl items-center";
  const listTextStyle = "inline text-raisin text-xl";
  const listElementStyle = "ml-7";
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu tristique sem, vel aliquam nisl.
            Quisque auctor ipsum sed diam placerat consequat. Integer aliquam nibh rhoncus interdum lobortis.
            Cras hendrerit egestas dolor. Vestibulum diam tortor, dictum et consequat quis, gravida nec est.
            Fusce elit ligula, hendrerit at enim viverra, porttitor egestas metus. Donec massa lacus, imperdiet
            sit amet dapibus in, iaculis tristique mi.
          </p>

          <DemoCarousel clipInfo={introDemo} targetId={"intro"} />

          <h3 id="section-1-1" className={subHeaderStyle}>
            1.1 What is a PaaS
          </h3>
          <p className={paragraphStyle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu tristique sem, vel aliquam nisl.
            Quisque auctor ipsum sed diam placerat consequat. Integer aliquam nibh rhoncus interdum lobortis.
            Cras hendrerit egestas dolor. Vestibulum diam tortor, dictum et consequat quis, gravida nec est.
            Fusce elit ligula, hendrerit at enim viverra, porttitor egestas metus. Donec massa lacus, imperdiet
            sit amet dapibus in, iaculis tristique mi.
          </p>
          <h3 id="section-1-2" className={subHeaderStyle}>
            1.2 Deployment Strategies
          </h3>
          <p className={paragraphStyle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu tristique sem, vel aliquam nisl.
            Quisque auctor ipsum sed diam placerat consequat. Integer aliquam nibh rhoncus interdum lobortis.
            Cras hendrerit egestas dolor. Vestibulum diam tortor, dictum et consequat quis, gravida nec est.
            Fusce elit ligula, hendrerit at enim viverra, porttitor egestas metus. Donec massa lacus, imperdiet
            sit amet dapibus in, iaculis tristique mi.
          </p>
          <h3 id="section-1-3" className={subHeaderStyle}>
            1.3 Use Case: Apps-R-Us
          </h3>
          <p className={paragraphStyle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu tristique sem, vel aliquam nisl.
            Quisque auctor ipsum sed diam placerat consequat. Integer aliquam nibh rhoncus interdum lobortis.
            Cras hendrerit egestas dolor. Vestibulum diam tortor, dictum et consequat quis, gravida nec est.
            Fusce elit ligula, hendrerit at enim viverra, porttitor egestas metus. Donec massa lacus, imperdiet
            sit amet dapibus in, iaculis tristique mi.
          </p>
          <h3 id="section-1-4" className={subHeaderStyle}>
            1.4 Sentinel vs. Other PaaS
          </h3>
          <p className={paragraphStyle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu tristique sem, vel aliquam nisl.
            Quisque auctor ipsum sed diam placerat consequat. Integer aliquam nibh rhoncus interdum lobortis.
            Cras hendrerit egestas dolor. Vestibulum diam tortor, dictum et consequat quis, gravida nec est.
            Fusce elit ligula, hendrerit at enim viverra, porttitor egestas metus. Donec massa lacus, imperdiet
            sit amet dapibus in, iaculis tristique mi.
          </p>
          <h3 id="section-1-5" className={subHeaderStyle}>
            1.5 Sentinel’s Goals
          </h3>
          <p className={paragraphStyle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu tristique sem, vel aliquam nisl.
            Quisque auctor ipsum sed diam placerat consequat. Integer aliquam nibh rhoncus interdum lobortis.
            Cras hendrerit egestas dolor. Vestibulum diam tortor, dictum et consequat quis, gravida nec est.
            Fusce elit ligula, hendrerit at enim viverra, porttitor egestas metus. Donec massa lacus, imperdiet
            sit amet dapibus in, iaculis tristique mi.
          </p>

          {/* <!-- Section 2 --> */}
          <h2 id="section-2" data-section="section-2" className={headerStyle}>
            2. Infrastructure
          </h2>
          <h3 id="section-2-1" className={subHeaderStyle}>
            2.1 Cloud-Provider Agnostic
          </h3>
          <p className={paragraphStyle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu tristique sem, vel aliquam nisl.
            Quisque auctor ipsum sed diam placerat consequat. Integer aliquam nibh rhoncus interdum lobortis.
            Cras hendrerit egestas dolor. Vestibulum diam tortor, dictum et consequat quis, gravida nec est.
            Fusce elit ligula, hendrerit at enim viverra, porttitor egestas metus. Donec massa lacus, imperdiet
            sit amet dapibus in, iaculis tristique mi.
          </p>


          <h3 id="section-2-2" data-section="section-2" className={subHeaderStyle}>
            2.2 High-Level Infrastructure Overview
          </h3>
          <p className={paragraphStyle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu tristique sem, vel aliquam nisl.
            Quisque auctor ipsum sed diam placerat consequat. Integer aliquam nibh rhoncus interdum lobortis.
            Cras hendrerit egestas dolor. Vestibulum diam tortor, dictum et consequat quis, gravida nec est.
            Fusce elit ligula, hendrerit at enim viverra, porttitor egestas metus. Donec massa lacus, imperdiet
            sit amet dapibus in, iaculis tristique mi.
          </p>
          <img
            src={monolithDiagram}
            alt="monolith diagram"
            className={imgStyle}
          />

          <h3 id="section-2-3" className={subHeaderStyle}>
            2.3 Containerized Applications
          </h3>
          <p className={paragraphStyle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu tristique sem, vel aliquam nisl.
            Quisque auctor ipsum sed diam placerat consequat. Integer aliquam nibh rhoncus interdum lobortis.
            Cras hendrerit egestas dolor. Vestibulum diam tortor, dictum et consequat quis, gravida nec est.
            Fusce elit ligula, hendrerit at enim viverra, porttitor egestas metus. Donec massa lacus, imperdiet
            sit amet dapibus in, iaculis tristique mi.
          </p>

          <DemoCarousel clipInfo={containerizedAppsDemo} targetId={"containerizedApps"} />

          {/* <!-- Section 3 --> */}

          <h2 id="section-3" className={headerStyle}>
            3. Managing Containerized Applications
          </h2>
          <p className={paragraphStyle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu tristique sem, vel aliquam nisl.
            Quisque auctor ipsum sed diam placerat consequat. Integer aliquam nibh rhoncus interdum lobortis.
            Cras hendrerit egestas dolor. Vestibulum diam tortor, dictum et consequat quis, gravida nec est.
            Fusce elit ligula, hendrerit at enim viverra, porttitor egestas metus. Donec massa lacus, imperdiet
            sit amet dapibus in, iaculis tristique mi.
          </p>
          <h3 id="section-3-1" className={subHeaderStyle}>
            3.1 Horizontal Scaling
          </h3>
          <p className={paragraphStyle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu tristique sem, vel aliquam nisl.
            Quisque auctor ipsum sed diam placerat consequat. Integer aliquam nibh rhoncus interdum lobortis.
            Cras hendrerit egestas dolor. Vestibulum diam tortor, dictum et consequat quis, gravida nec est.
            Fusce elit ligula, hendrerit at enim viverra, porttitor egestas metus. Donec massa lacus, imperdiet
            sit amet dapibus in, iaculis tristique mi.
          </p>
          <img
            src={buyingOptions}
            alt="the logos of existing solutions"
            className={`${imgStyle} w-8/12`}
          />

          <h3 id="section-3-2" className={subHeaderStyle}>
            3.2 Considerations for Managing Containerized Applications Across Compute Instances
          </h3>
          <p className={paragraphStyle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu tristique sem, vel aliquam nisl.
            Quisque auctor ipsum sed diam placerat consequat. Integer aliquam nibh rhoncus interdum lobortis.
            Cras hendrerit egestas dolor. Vestibulum diam tortor, dictum et consequat quis, gravida nec est.
            Fusce elit ligula, hendrerit at enim viverra, porttitor egestas metus. Donec massa lacus, imperdiet
            sit amet dapibus in, iaculis tristique mi.
          </p>

          <h3 id="section-3-3" className={subHeaderStyle}>
            3.3 Container Orchestration
          </h3>
          <p className={paragraphStyle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu tristique sem, vel aliquam nisl.
            Quisque auctor ipsum sed diam placerat consequat. Integer aliquam nibh rhoncus interdum lobortis.
            Cras hendrerit egestas dolor. Vestibulum diam tortor, dictum et consequat quis, gravida nec est.
            Fusce elit ligula, hendrerit at enim viverra, porttitor egestas metus. Donec massa lacus, imperdiet
            sit amet dapibus in, iaculis tristique mi.
          </p>
          <p className={paragraphStyle}>Lorem ipsum dolor sit amet</p>
          <img
            src={loggingSolutions}
            alt="solution comparison"
            className={`${imgStyle} -mb-10`}
          />

          <h3 id="section-3-4" className={subHeaderStyle}>
            3.4 Docker Swarm Mode
          </h3>
          <p className={paragraphStyle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu tristique sem, vel aliquam nisl.
            Quisque auctor ipsum sed diam placerat consequat. Integer aliquam nibh rhoncus interdum lobortis.
            Cras hendrerit egestas dolor. Vestibulum diam tortor, dictum et consequat quis, gravida nec est.
            Fusce elit ligula, hendrerit at enim viverra, porttitor egestas metus. Donec massa lacus, imperdiet
            sit amet dapibus in, iaculis tristique mi.
          </p>
          <p className={paragraphStyle}>Lorem ipsum dolor sit amet</p>

          <h3 id="section-3-5" className={subHeaderStyle}>
            3.5 How Docker Swarm Mode Works
          </h3>
          <DemoCarousel clipInfo={scalingDemo} targetId={"scalingDemo"} />
          <p className={paragraphStyle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu tristique sem, vel aliquam nisl.
            Quisque auctor ipsum sed diam placerat consequat. Integer aliquam nibh rhoncus interdum lobortis.
            Cras hendrerit egestas dolor. Vestibulum diam tortor, dictum et consequat quis, gravida nec est.
            Fusce elit ligula, hendrerit at enim viverra, porttitor egestas metus. Donec massa lacus, imperdiet
            sit amet dapibus in, iaculis tristique mi.
          </p>
          <p className={paragraphStyle}>Lorem ipsum dolor sit amet</p>

          <h3 id="section-3-6" className={subHeaderStyle}>
            3.6 Application & Cluster Scaling
          </h3>
          <p className={paragraphStyle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu tristique sem, vel aliquam nisl.
            Quisque auctor ipsum sed diam placerat consequat. Integer aliquam nibh rhoncus interdum lobortis.
            Cras hendrerit egestas dolor. Vestibulum diam tortor, dictum et consequat quis, gravida nec est.
            Fusce elit ligula, hendrerit at enim viverra, porttitor egestas metus. Donec massa lacus, imperdiet
            sit amet dapibus in, iaculis tristique mi.
          </p>
          <p className={paragraphStyle}>Lorem ipsum dolor sit amet</p>

          {/* <!-- Section 4 --> */}

          <h2 id="section-4" className={headerStyle}>
            4. Inter-service Communication
          </h2>
          <h3 id="section-4-1" className={subHeaderStyle}>
            4.1 One Process Principle
          </h3>
          <p className={paragraphStyle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu tristique sem, vel aliquam nisl.
            Quisque auctor ipsum sed diam placerat consequat. Integer aliquam nibh rhoncus interdum lobortis.
            Cras hendrerit egestas dolor. Vestibulum diam tortor, dictum et consequat quis, gravida nec est.
            Fusce elit ligula, hendrerit at enim viverra, porttitor egestas metus. Donec massa lacus, imperdiet
            sit amet dapibus in, iaculis tristique mi.
          </p>
          <img
            src={overview}
            alt="An overview of Lodge"
            className={`${imgStyle} max-w-xl -mb-8`}
          />

          <h3 id="section-4-2" className={subHeaderStyle}>
            4.2 Overlay Networks
          </h3>
          <p className={paragraphStyle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu tristique sem, vel aliquam nisl.
            Quisque auctor ipsum sed diam placerat consequat. Integer aliquam nibh rhoncus interdum lobortis.
            Cras hendrerit egestas dolor. Vestibulum diam tortor, dictum et consequat quis, gravida nec est.
            Fusce elit ligula, hendrerit at enim viverra, porttitor egestas metus. Donec massa lacus, imperdiet
            sit amet dapibus in, iaculis tristique mi.
          </p>


          {/* <!-- Section 5 --> */}

          <h2 id="section-5" className={headerStyle}>
            5. Routing HTTP Requests
          </h2>
          <h3 id="section-5-1" className={subHeaderStyle}>
            5.1 Incorporating a Reverse Proxy
          </h3>
          <ul className={listNumStyle}>
            <li className={`${listElementStyle} pl-4`}>
              <p className={listTextStyle}> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </li>
          </ul>

          <h3 id="section-5-2" className={subHeaderStyle}>
            5.2 Choosing a Reverse Proxy
          </h3>
          <p className={paragraphStyle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu tristique sem, vel aliquam nisl.
            Quisque auctor ipsum sed diam placerat consequat. Integer aliquam nibh rhoncus interdum lobortis.
            Cras hendrerit egestas dolor. Vestibulum diam tortor, dictum et consequat quis, gravida nec est.
            Fusce elit ligula, hendrerit at enim viverra, porttitor egestas metus. Donec massa lacus, imperdiet
            sit amet dapibus in, iaculis tristique mi.
          </p>

          <h2 id="section-6" className={headerStyle}>
            6. Canary Deployments
          </h2>

          <DemoCarousel clipInfo={canaryDeploymentsDemo} targetId={"canaryDemo"} />

          <p className={paragraphStyle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu tristique sem, vel aliquam nisl.
            Quisque auctor ipsum sed diam placerat consequat. Integer aliquam nibh rhoncus interdum lobortis.
            Cras hendrerit egestas dolor. Vestibulum diam tortor, dictum et consequat quis, gravida nec est.
            Fusce elit ligula, hendrerit at enim viverra, porttitor egestas metus. Donec massa lacus, imperdiet
            sit amet dapibus in, iaculis tristique mi.
          </p>
          <p className={paragraphStyle}>Let's start with Kafka.</p>

          <h3 id="section-6-1" className={subHeaderStyle}>
            6.1 Deploying a Canary
          </h3>
          <h4 className={subSubHeaderStyle}>
            Lorem ipsum
          </h4>
          <p className={paragraphStyle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu tristique sem, vel aliquam nisl.
            Quisque auctor ipsum sed diam placerat consequat. Integer aliquam nibh rhoncus interdum lobortis.
            Cras hendrerit egestas dolor. Vestibulum diam tortor, dictum et consequat quis, gravida nec est.
            Fusce elit ligula, hendrerit at enim viverra, porttitor egestas metus. Donec massa lacus, imperdiet
            sit amet dapibus in, iaculis tristique mi.
          </p>

          <h4 className={subSubHeaderStyle}>Buffering Options</h4>
          <p className={paragraphStyle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu tristique sem, vel aliquam nisl.
            Quisque auctor ipsum sed diam placerat consequat. Integer aliquam nibh rhoncus interdum lobortis.
            Cras hendrerit egestas dolor. Vestibulum diam tortor, dictum et consequat quis, gravida nec est.
            Fusce elit ligula, hendrerit at enim viverra, porttitor egestas metus. Donec massa lacus, imperdiet
            sit amet dapibus in, iaculis tristique mi.
          </p>
          <img
            src={bufferingOptions}
            alt="A comparison of buffering options"
            className={`${imgStyle} -ml-16`}
          />

          <dl>
            <p className="mb-2">Lorem ipsum dolor sit amet:</p>
            <div className="flex mb-2">
              <dt className="font-bold inline mr-12">Durability:</dt>
              <dd className="inline">
                Lorem ipsum dolor sit amet
              </dd>
            </div>
          </dl>

          <img src={kafkaInAction} alt="Kafka in action" className={`${imgStyle} lg:w-3/4`} />

          <h3 id="section-6-2" className={subHeaderStyle}>
            6.2 Traefik Configuration Overview
          </h3>

          <p className={paragraphStyle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu tristique sem, vel aliquam nisl.
            Quisque auctor ipsum sed diam placerat consequat. Integer aliquam nibh rhoncus interdum lobortis.
            Cras hendrerit egestas dolor. Vestibulum diam tortor, dictum et consequat quis, gravida nec est.
            Fusce elit ligula, hendrerit at enim viverra, porttitor egestas metus. Donec massa lacus, imperdiet
            sit amet dapibus in, iaculis tristique mi.
          </p>

          <h3 id="section-6-3" className={subHeaderStyle}>
            6.3 Traefik Configuration for Canaries
          </h3>
          <p className={paragraphStyle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu tristique sem, vel aliquam nisl.
            Quisque auctor ipsum sed diam placerat consequat. Integer aliquam nibh rhoncus interdum lobortis.
            Cras hendrerit egestas dolor. Vestibulum diam tortor, dictum et consequat quis, gravida nec est.
            Fusce elit ligula, hendrerit at enim viverra, porttitor egestas metus. Donec massa lacus, imperdiet
            sit amet dapibus in, iaculis tristique mi.
          </p>

          <h3 id="section-6-4" className={subHeaderStyle}>
            6.4 Promoting a Canary
          </h3>
          <p className={paragraphStyle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu tristique sem, vel aliquam nisl.
            Quisque auctor ipsum sed diam placerat consequat. Integer aliquam nibh rhoncus interdum lobortis.
            Cras hendrerit egestas dolor. Vestibulum diam tortor, dictum et consequat quis, gravida nec est.
            Fusce elit ligula, hendrerit at enim viverra, porttitor egestas metus. Donec massa lacus, imperdiet
            sit amet dapibus in, iaculis tristique mi.
          </p>

          <h3 id="section-6-5" className={subHeaderStyle}>
            6.5 Rolling a Canary Back
          </h3>
          <p className={paragraphStyle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu tristique sem, vel aliquam nisl.
            Quisque auctor ipsum sed diam placerat consequat. Integer aliquam nibh rhoncus interdum lobortis.
            Cras hendrerit egestas dolor. Vestibulum diam tortor, dictum et consequat quis, gravida nec est.
            Fusce elit ligula, hendrerit at enim viverra, porttitor egestas metus. Donec massa lacus, imperdiet
            sit amet dapibus in, iaculis tristique mi.
          </p>

          {/* <!-- Section 5 --> */}
          <h2 id="section-7" className={headerStyle}>
            7. Monitoring
          </h2>
          <p className={paragraphStyle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu tristique sem, vel aliquam nisl.
            Quisque auctor ipsum sed diam placerat consequat. Integer aliquam nibh rhoncus interdum lobortis.
            Cras hendrerit egestas dolor. Vestibulum diam tortor, dictum et consequat quis, gravida nec est.
            Fusce elit ligula, hendrerit at enim viverra, porttitor egestas metus. Donec massa lacus, imperdiet
            sit amet dapibus in, iaculis tristique mi.
          </p>
          <h3 id="section-7-1" className={subHeaderStyle}>
            7.1 Monitoring Architecture Overview
          </h3>
          <p className={paragraphStyle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu tristique sem, vel aliquam nisl.
            Quisque auctor ipsum sed diam placerat consequat. Integer aliquam nibh rhoncus interdum lobortis.
            Cras hendrerit egestas dolor. Vestibulum diam tortor, dictum et consequat quis, gravida nec est.
            Fusce elit ligula, hendrerit at enim viverra, porttitor egestas metus. Donec massa lacus, imperdiet
            sit amet dapibus in, iaculis tristique mi.
          </p>

          <h3 id="section-7-2" className={subHeaderStyle}>
            7.2 Monitoring a Canary Instance
          </h3>
          <p className={paragraphStyle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu tristique sem, vel aliquam nisl.
            Quisque auctor ipsum sed diam placerat consequat. Integer aliquam nibh rhoncus interdum lobortis.
            Cras hendrerit egestas dolor. Vestibulum diam tortor, dictum et consequat quis, gravida nec est.
            Fusce elit ligula, hendrerit at enim viverra, porttitor egestas metus. Donec massa lacus, imperdiet
            sit amet dapibus in, iaculis tristique mi.
          </p>

          <h2 id="section-8" className={headerStyle}>8. Upcoming Work</h2>
          <p className={paragraphStyle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu tristique sem, vel aliquam nisl.
            Quisque auctor ipsum sed diam placerat consequat. Integer aliquam nibh rhoncus interdum lobortis.
            Cras hendrerit egestas dolor. Vestibulum diam tortor, dictum et consequat quis, gravida nec est.
            Fusce elit ligula, hendrerit at enim viverra, porttitor egestas metus. Donec massa lacus, imperdiet
            sit amet dapibus in, iaculis tristique mi.
          </p>

          <h2 id="section-9" className={headerStyle}>9. References</h2>
          <p className={paragraphStyle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu tristique sem, vel aliquam nisl.
            Quisque auctor ipsum sed diam placerat consequat. Integer aliquam nibh rhoncus interdum lobortis.
            Cras hendrerit egestas dolor. Vestibulum diam tortor, dictum et consequat quis, gravida nec est.
            Fusce elit ligula, hendrerit at enim viverra, porttitor egestas metus. Donec massa lacus, imperdiet
            sit amet dapibus in, iaculis tristique mi.
          </p>
        </div>
      </div>
    </div>
  );
}

export default CaseStudy;
