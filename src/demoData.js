import initGif from "./images/demos/intro/init.mp4"
import deployGif from "./images/demos/intro/deploy.mp4"
import introBrowser from "./images/demos/intro/browser.mp4"
import canaryDeploy from "./images/demos/intro/canary_deploy.mp4"
import showCanary from "./images/demos/intro/show_canary_todos_browser.mp4"

import deploy_catnip from "./images/demos/containerized_apps/deploy_catnip.mp4"
import inspect_2_apps from "./images/demos/containerized_apps/inspect_2_apps_browser.mp4"
import cluster_inspect from "./images/demos/containerized_apps/cluster_inspect.mp4"

import inspectApp from "./images/demos/canary_demo/inspect_app.mp4"
import canaryInBrowser from "./images/demos/canary_demo/browser_canary.mp4"
import grafanaDash from "./images/demos/canary_demo/grafana_dash.png"
import browserPromoted from "./images/demos/canary_demo/browser_promoted.mp4"
import canaryPromote from "./images/demos/canary_demo/canary_promote.mp4"

import clusterScale from "./images/demos/scaling_demo/cluster_scale.mp4"
import inspectAfterScale from "./images/demos/scaling_demo/inspect_app_after_scale.mp4"
import inspectPreScale from "./images/demos/scaling_demo/inspect_app.mp4"
import scaleApp from "./images/demos/scaling_demo/scale_app.mp4"


export const introDemo = [
    {
        src: initGif,
        caption: "Apps-R-Us initializes the Sentinel PaaS",
        alt: "sentinel init",
        header: "sentinel init",
        isImage: false,
        key: "intro-0",
    },
    {
        src: deployGif,
        caption: "Apps-R-Us deploys their first Todos application",
        alt: "sentinel deploy",
        header: "sentinel deploy",
        isImage: false,
        key: "intro-1",
    },
    {
        src: introBrowser,
        caption: "Apps-R-Us checks the application in the browser behind a live URL",
        alt: "Browser Demo of app",
        header: "In the Browser",
        isImage: false,
        key: "intro-2",
    },
    {
        src: canaryDeploy,
        caption: "Apps-R-Us deploys a canary version of the Todos app",
        alt: "Canary deployment",
        header: "sentinel canary deploy",
        isImage: false,
        key: "intro-3",
    },
    {
        src: showCanary,
        caption: "Apps-R-Us clears the cookies and refreshes the page to view the canary version",
        alt: "Show the canary version in the browser",
        header: "In the Browser",
        isImage: false,
        key: "intro-4",
    },
]

export const containerizedAppsDemo = [
    {
        src: deploy_catnip,
        caption: "Apps-R-Us deploys a second application called Catnip",
        alt: "deploy catnip app",
        header: "sentinel deploy",
        isImage: false,
        key: "ca-0",
    },
    {
        src: inspect_2_apps,
        caption: "Apps-R-Us views both the Todos and Catnip app",
        alt: "show catnip app in browser",
        header: "In the Browser",
        isImage: false,
        key: "ca-1",
    },
    {
        src: cluster_inspect,
        caption: "Apps-R-Us confirms that there is only one node in the Cluster, on which both of these containers are hosted",
        alt: "Inspecting the cluster",
        header: "sentinel cluster inspect",
        isImage: false,
        key: "ca-2",
    },
]

export const canaryDeploymentsDemo = [
    {
        src: canaryDeploy,
        caption: "Apps-R-Us deploys a canary version of the Todos app",
        alt: "Canary deployment",
        header: "sentinel canary deploy",
        key: "cd-0",
    },
    {
        src: inspectApp,
        caption: "Apps-R-Us inspects the Todos app",
        alt: "sentinel inspect app",
        header: "sentinel inspect app",
        isImage: false,
        key: "cd-1",
    },
    {
        src: canaryInBrowser,
        caption: "Apps-R-Us clears the cookies and refreshes the page to view the canary version",
        alt: "In browser, viewing canary version",
        header: "In the Browser",
        isImage: false,
        key: "cd-2",
    },
    {
        src: grafanaDash,
        caption: "Apps-R-Us uses the built in metrics dashboard to evaluate the health of their application. Production is on the left and the canary version is on the right",
        alt: "Grafana Dash board",
        header: "Grafana Dashboard",
        isImage: true,
        key: "cd-3",
    },
    {
        src: canaryPromote,
        caption: "Apps-R-Us decides the canary version is ready to promote",
        alt: "sentinel canary promote",
        header: "sentinel canary promote",
        isImage: false,
        key: "cd-4",
    },
    {
        src: browserPromoted,
        caption: "Apps-R-Us verifies that the promotion was successful",
        alt: "inspect promoted canary version in browser",
        header: "In the Browser",
        isImage: false,
        key: "cd-5",
    },
]

export const scalingDemo = [
    {
        src: inspectPreScale,
        caption: "Apps-R-Us inspects the Todos application",
        alt: "sentinel inspect app",
        header: "sentinel inspect app",
        isImage: false,
        key: "sd-0",
    },
    {
        src: scaleApp,
        caption: "Apps-R-Us scales up the Todos app",
        alt: "sentinel scale app",
        header: "sentinel scale app",
        isImage: false,
        key: "sd-1",
    },
    {
        src: inspectAfterScale,
        caption: "There are now 4 instances of the application in production",
        alt: "inspect app",
        header: "sentinel inspect app",
        isImage: false,
        key: "sd-2",
    },
    {
        src: clusterScale,
        caption: "Apps-R-Us scales up the cluster by adding a worker node",
        alt: "scaling the cluster",
        header: "sentinel cluster scale",
        isImage: false,
        key: "sd-3",
    },
]