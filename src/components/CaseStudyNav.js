import scrollToElement from "../scripts/scrollToElement";
function CaseStudyNav() {
  const ulStyle = "list-outside text-yellowgreen text-3xl items-center";
  const subUlStyle = ulStyle + " pl-8 subitems hide";
  const listElementStyle = "item my-4 hover:text-cyan";
  const itemStyle = "item my-4 hover:text-cyan";
  const textStyle = "inline text-left text-raisin text-lg hover:text-black";
  const navStyle = "sticky xl:flex xl:self-start xl:w-1/5 xl:top-16 right-20 bg-slate border-gray-200 border-r-2 p-4 pl-14 h-screen overflow-y-auto";

  const navigateTo = (elementId) => scrollToElement(elementId, -100);

  return (
    <aside id="sideNav" className={`${navStyle} translate-x transform transition duration-700 hidden h-0`}>
      <ul className={ulStyle}>
        {/* <!-- Section 1 --> */}
        <li data-section="section-1" className={listElementStyle}>
          <button className={textStyle} onClick={() => navigateTo("section-1")}>1. Introduction</button>
          <ul className={subUlStyle}>
            <li data-section="section-1-1" className={itemStyle}>
              <button className={textStyle} onClick={() => navigateTo("section-1-1")}>1.1. What is a PaaS</button>
            </li>
            <li data-section="section-1-2" className={itemStyle}>
              <button className={textStyle} onClick={() => navigateTo("section-1-2")}>1.2. Deployment Strategies</button>
            </li>
            <li data-section="section-1-3" className={itemStyle}>
              <button className={textStyle} onClick={() => navigateTo("section-1-3")}>1.3. Use Case: Apps-R-Us</button>
            </li>
            <li data-section="section-1-4" className={itemStyle}>
              <button className={textStyle} onClick={() => navigateTo("section-1-4")}>1.4. Sentinel vs. Other PaaS</button>
            </li>
            <li data-section="section-1-5" className={itemStyle}>
              <button className={textStyle} onClick={() => navigateTo("section-1-5")}>1.5. Sentinel’s Goals</button>
            </li>
          </ul>
        </li>
        {/* <!-- Section 2 --> */}
        <li data-section="section-2" className={listElementStyle}>
          <button className={textStyle} onClick={() => navigateTo("section-2")}>2. Infrastructure</button>
          <ul className={subUlStyle}>
            <li data-section="section-2-1" className={itemStyle}>
              <button className={textStyle} onClick={() => navigateTo("section-2-1")}>2.1. Cloud-Provider Agnostic</button>
            </li>
            <li data-section="section-2-2" className={itemStyle}>
              <button className={textStyle} onClick={() => navigateTo("section-2-2")}>2.2. High-Level Infrastructure Overview</button>
            </li>
            <li data-section="section-2-3" className={itemStyle}>
              <button className={textStyle} onClick={() => navigateTo("section-2-3")}>2.3. Containerized Applications</button>
            </li>
          </ul>
        </li>

        {/* <!-- Section 3 --> */}
        <li data-section="section-3" className={listElementStyle}>
          <button className={textStyle} onClick={() => navigateTo("section-3")}>3. Managing Containerized Applications</button>
          <ul className={subUlStyle}>
            <li data-section="section-3-1" className={itemStyle}>
              <button className={textStyle} onClick={() => navigateTo("section-3-1")}>3.1. Considerations for Managing Containerized Applications Across Compute Instances</button>
            </li>
            <li data-section="section-3-2" className={itemStyle}>
              <button className={textStyle} onClick={() => navigateTo("section-3-2")}>3.2. Container Orchestration</button>
            </li>
            <li data-section="section-3-3" className={itemStyle}>
              <button className={textStyle} onClick={() => navigateTo("section-3-3")}>3.3. Docker Swarm Mode</button>
            </li>
            <li data-section="section-3-4" className={itemStyle}>
              <button className={textStyle} onClick={() => navigateTo("section-3-4")}>3.4. How Docker Swarm Mode Works</button>
            </li>
            <li data-section="section-3-5" className={itemStyle}>
              <button className={textStyle} onClick={() => navigateTo("section-3-5")}>3.5. Application & Cluster Scaling</button>
            </li>
          </ul>
        </li>

        {/* <!-- Section 4 --> */}
        <li data-section="section-4" className={listElementStyle}>
          <button className={textStyle} onClick={() => navigateTo("section-4")}>4. Inter-service Communication</button>
          <ul className={subUlStyle}>
            <li data-section="section-4-1" className={itemStyle}>
              <button className={textStyle} onClick={() => navigateTo("section-4-1")}>4.1. One Process Principle</button>
            </li>
            <li data-section="section-4-2" className={itemStyle}>
              <button className={textStyle} onClick={() => navigateTo("section-4-2")}>4.2. Overlay Networks</button>
            </li>
          </ul>
        </li>

        {/* <!-- Section 5 --> */}
        <li data-section="section-5" className={listElementStyle}>
          <button className={textStyle} onClick={() => navigateTo("section-5")}>5. Routing HTTP Requests</button>
          <ul className={subUlStyle}>
            <li data-section="section-5-1" className={itemStyle}>
              <button className={textStyle} onClick={() => navigateTo("section-5-1")}>5.1. Incorporating a Reverse Proxy</button>
            </li>
            <li data-section="section-5-2" className={itemStyle}>
              <button className={textStyle} onClick={() => navigateTo("section-5-2")}>5.2. Choosing a Reverse Proxy</button>
            </li>
          </ul>
        </li>

        {/* <!-- Section 6 --> */}
        <li data-section="section-6" className={listElementStyle}>
          <button className={textStyle} onClick={() => navigateTo("section-6")}>6. Canary Deployments</button>
          <ul className={subUlStyle}>
            <li data-section="section-6-1" className={itemStyle}>
              <button className={textStyle} onClick={() => navigateTo("section-6-1")}>6.1. Deploying a Canary</button>
            </li>
            <li data-section="section-6-2" className={itemStyle}>
              <button className={textStyle} onClick={() => navigateTo("section-6-2")}>6.2. Promoting a Canary</button>
            </li>
            <li data-section="section-6-3" className={itemStyle}>
              <button className={textStyle} onClick={() => navigateTo("section-6-3")}>6.3. Rolling a Canary Back</button>
            </li>
          </ul>
        </li>

        {/* <!-- Section 7 --> */}
        <li data-section="section-7" className={listElementStyle}>
          <button className={textStyle} onClick={() => navigateTo("section-7")}>7. Monitoring</button>
          <ul className={subUlStyle}>
            <li data-section="section-7-1" className={itemStyle}>
              <button className={textStyle} onClick={() => navigateTo("section-7-1")}>7.1. Monitoring Architecture Overview</button>
            </li>
            <li data-section="section-7-2" className={itemStyle}>
              <button className={textStyle} onClick={() => navigateTo("section-7-2")}>7.2. Monitoring a Canary Instance</button>
            </li>
          </ul>
        </li>

        {/* <!-- Section 8 --> */}
          <li data-section="section-8" className={listElementStyle}>
          <button className={textStyle} onClick={() => navigateTo("section-8")}>8. Getting Started with Sentinel</button>
        </li>

        {/* <!-- Section 9 --> */}
        <li data-section="section-9" className={listElementStyle}>
          <button className={textStyle} onClick={() => navigateTo("section-9")}>9. Upcoming Work</button>
        </li>

      </ul>
    </aside>
  );
}
export default CaseStudyNav;
