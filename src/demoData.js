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
        caption: "Apps-R-Us initializing the Sentinel PaaS",
        alt: "sentinel init",
        header: "sentinel init",
        isImage: false,
        key: "intro-0",
    },
    {
        src: deployGif,
        caption: "Apps-R-Us deploying their first Todos Application",
        alt: "sentinel deploy",
        header: "sentinel deploy",
        isImage: false,
        key: "intro-1",
    },
    {
        src: introBrowser,
        caption: "Apps-R-Us checking the application in the browser behind a live URL",
        alt: "Browser Demo of app",
        header: "In the browser",
        isImage: false,
        key: "intro-2",
    },
    {
        src: canaryDeploy,
        caption: "Deploying a canary version of the Todos app",
        alt: "Canary deployment",
        header: "sentinel canary deploy",
        isImage: false,
        key: "intro-3",
    },
    {
        src: showCanary,
        caption: "Back in the browser, clearing the cookies and refreshing will bring users to the canary version of the application",
        alt: "Show the canary version in the browser",
        header: "In the browser",
        isImage: false,
        key: "intro-4",
    },
]

export const containerizedAppsDemo = [
    {
        src: deploy_catnip,
        caption: "Apps-R-Us deploying a second application",
        alt: "deploy catnip app",
        header: "Deploying a second application",
        isImage: false,
        key: "ca-0",
    },
    {
        src: inspect_2_apps,
        caption: "Apps-R-Us viewing second application",
        alt: "show catnip app in browser",
        header: "A second application",
        isImage: false,
        key: "ca-1",
    },
    {
        src: cluster_inspect,
        caption: "Both apps running on a single node",
        alt: "Inspecting the cluster",
        header: "A single node",
        isImage: false,
        key: "ca-2",
    },
]

export const canaryDeploymentsDemo = [
    {
        src: canaryDeploy,
        caption: "Deploying a canary version of the Todos app",
        alt: "Canary deployment",
        header: "sentinel canary deploy",
        key: "cd-0",
    },
    {
        src: inspectApp,
        caption: "Inspecting the Todos App via the CLI",
        alt: "sentinel inspect app",
        header: "sentinel inspect app",
        isImage: false,
        key: "cd-1",
    },
    {
        src: canaryInBrowser,
        caption: "Checking out the canary version in the browser",
        alt: "In browser, viewing canary version",
        header: "In the browser",
        isImage: false,
        key: "cd-2",
    },
    {
        src: grafanaDash,
        caption: "On the left is the production version. On the right is the canary version. Using the Grafana dashboard Apps-R-Us can make the decision to promote the canary",
        alt: "Grafana Dash board",
        header: "Grafana Dash Board",
        isImage: true,
        key: "cd-3",
    },
    {
        src: canaryPromote,
        caption: "Promoting the canary instance to production",
        alt: "sentinel canary promote",
        header: "sentinel canary promote",
        isImage: false,
        key: "cd-4",
    },
    {
        src: browserPromoted,
        caption: "The Todos App is the only version in production now. Clearing cookies has no effect. Everything works well.",
        alt: "inspect promoted canary version in browser",
        header: "In the browser",
        isImage: false,
        key: "cd-5",
    },
]

export const scalingDemo = [
    {
        src: inspectPreScale,
        caption: "Inspecting the app to see its current state",
        alt: "sentinel inspect app",
        header: "sentinel inspect app",
        isImage: false,
        key: "sd-0",
    },
    {
        src: scaleApp,
        caption: "Scale application instances",
        alt: "sentinel scale app",
        header: "sentinel scale app",
        isImage: false,
        key: "sd-1",
    },
    {
        src: inspectAfterScale,
        caption: "Inspecting the application again shows there are now 4 instances of the application",
        alt: "inspect app",
        header: "sentinel inspect app",
        isImage: false,
        key: "sd-2",
    },
    {
        src: clusterScale,
        caption: "Scaling the cluster",
        alt: "scaling the cluster",
        header: "sentinel cluster scale",
        isImage: false,
        key: "sd-3",
    },
]