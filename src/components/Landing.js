import logo from "../images/sentinel_logo/SVGs/Sentinel_logo_on_dark.svg";
import fullDiagram from "../images/sentinel_diagrams/monitoring.gif";
import cli from "../images/sentinel_diagrams/cli-v3.png"

function Landing() {
  return (
    <div id="landing" className="text-white flex flex-col">
      {/* Start first block */}
      <div className="flex flex-col justify-center items-center pt-28 bg-dark-blue xl:py-0">
        <div className="w-full h-landing xl:h-screen xl:flex">
          <div className="hidden xl:block bg-slate bgImageFirst w-1/2" />
          <img className="xl:hidden w-96 mx-auto mt-24" src={logo} alt="Sentinel logo" />
          <div className="xl:flex xl:flex-col xl:w-1/2 text-center items-center justify-center bg-dark-blue">
            <h1 className="hidden xl:block text-landing font-extrabold mt-32 -mb-6">Sentinel</h1>
            <p className="mt-10 xl:mt-0 light-text text-gray-300 text-3xl leading-snug text-center px-8 mx-auto max-w-xl">
              An <span className="text-fulvous font-medium">open-source PaaS</span>
            </p>
            <p className="light-text text-gray-300 text-3xl leading-snug text-center px-8 mx-auto max-w-xl">
              that provides built-in support
            </p>
            <p className="light-text text-gray-300 text-3xl leading-snug text-center px-8 mx-auto max-w-xl">
              for <span className="text-selectiveyellow font-medium">canary deployments</span>
            </p>
          </div>
        </div>
      </div>

      {/* Start second block */}
      <div className="hidden xl:flex h-landing bgImageSecond justify-center items-center text-center bg-fulvous py-20">
        <h2 className="text-6xl font-extrabold w-1/2">Ready to Deploy</h2>
        <div className="flex flex-col w-1/2 justify-center mx-6 my-10 px-2">
          <p className="mx-auto text-3xl mb-14 px-4">
            A convenient command line interface for developers to deploy and update their applications with canary deployments
          </p>
          <img src={cli} alt="Sentinel cli" className="mx-auto rounded-lg" />
        </div>
      </div>

      <div className="xl:hidden flex flex-col justify-center items-center text-center bg-fulvous py-20 px-4">
        <h2 className="text-4xl font-extrabold">Ready to Deploy</h2>
        <p className="text-3xl my-10 px-6 max-w-5xl">
          A convenient command line interface for developers to deploy and update their applications with canary deployments
        </p>
        <img src={cli} alt="Sentinel initialization gif" className="rounded-lg" />
      </div>

      {/* Start third block */}
      <div className="hidden xl:flex h-landing bgImageThird justify-center items-center text-center bg-glaucous py-20">
        <h2 className="text-6xl font-extrabold w-1/2">Comprehensive Monitoring</h2>
        <div className="flex flex-col w-1/2 justify-center mx-6 my-10 px-4">
          <p className="mx-auto text-3xl mb-14 px-20">
            Monitoring tools to assist developers in assessing the health and performance of their applications
          </p>
          <img src={fullDiagram} alt="sentinel monitoring" className="mx-auto rounded-lg shadow-xl" />
        </div>
      </div>
      <div className="xl:hidden flex flex-col h-landing justify-center items-center text-center bg-glaucous py-20 px-4">
        <h2 className="text-4xl font-extrabold">Comprehensive Monitoring</h2>
        <p className="text-3xl my-10 px-6 max-w-5xl">
          Extensive monitoring tools to assist developers in assessing the health and performance of their applications
        </p>
        <img src={fullDiagram} alt="Sentinel monitoring" className="rounded-lg shadow-xl" />
      </div>
    </div>
  );
}

export default Landing;
