// Getting started
// import Colors from "views/Documentation/Sections/Colors.jsx";
import Overview from "views/Documentation/Sections/getting-started/Overview.jsx";
import Download from "views/Documentation/Sections/getting-started/Download.jsx";
import License from "views/Documentation/Sections/getting-started/License.jsx";
import Contents from "views/Documentation/Sections/getting-started/Contents.jsx";
import BuildTools from "views/Documentation/Sections/getting-started/BuildTools.jsx";
import Tutorial from "views/Documentation/Sections/getting-started/Tutorial.jsx";
import Variables from "views/Documentation/Sections/getting-started/Variables.jsx";
// Core components
import FixedPlugin from "views/Documentation/Sections/FixedPlugin.jsx";
import Footer from "views/Documentation/Sections/Footer.jsx";
import Navbar from "views/Documentation/Sections/Navbar.jsx";
import Sidebar from "views/Documentation/Sections/Sidebar.jsx";
// Reasctrap components
import Alerts from "views/Documentation/Sections/Alerts.jsx";
import Badges from "views/Documentation/Sections/Badges.jsx";
import Breadcrumbs from "views/Documentation/Sections/Breadcrumbs.jsx";
import Buttons from "views/Documentation/Sections/Buttons.jsx";
import Cards from "views/Documentation/Sections/Cards.jsx";
import Dropdowns from "views/Documentation/Sections/Dropdowns.jsx";
import Forms from "views/Documentation/Sections/Forms.jsx";
import Modals from "views/Documentation/Sections/Modals.jsx";
import Navs from "views/Documentation/Sections/Navs.jsx";
import Navbars from "views/Documentation/Sections/Navbars.jsx";
import Tables from "views/Documentation/Sections/Tables.jsx";
import Typography from "views/Documentation/Sections/Typography.jsx";
// Plugins
import Charts from "views/Documentation/Sections/Charts.jsx";
import Icons from "views/Documentation/Sections/Icons.jsx";
import PerfectScrollbar from "views/Documentation/Sections/PerfectScrollbar.jsx";

var docsRoutes = [
  {
    name: "Getting started",
    path: "/documentation/overview",
    routes: [
      {
        path: "/documentation/overview",
        component: Overview,
        name: "Overview"
      },
      {
        path: "/documentation/download",
        component: Download,
        name: "Download"
      },
      {
        path: "/documentation/build-tools",
        component: BuildTools,
        name: "Build Tools"
      },
      {
        path: "/documentation/contents",
        component: Contents,
        name: "Contents"
      },
      {
        path: "/documentation/license",
        component: License,
        name: "License"
      },
      {
        path: "/documentation/tutorial",
        component: Tutorial,
        name: "Tutorial"
      },
      {
        path: "/documentation/variables",
        component: Variables,
        name: "Variables"
      }
    ]
  },
  {
    name: "Core Components",
    path: "/documentation/custom-upload",
    routes: [
      {
        path: "/documentation/fixed-plugin",
        component: FixedPlugin,
        name: "Fixed Plugin"
      },
      {
        path: "/documentation/footer",
        component: Footer,
        name: "Footer"
      },
      {
        path: "/documentation/navbar",
        component: Navbar,
        name: "App Navbar"
      },
      {
        path: "/documentation/sidebar",
        component: Sidebar,
        name: "Sidebar"
      }
    ]
  },
  {
    name: "Reactstrap Components",
    path: "/documentation/alert",
    routes: [
      {
        path: "/documentation/alert",
        component: Alerts,
        name: "Alerts"
      },
      {
        path: "/documentation/badge",
        component: Badges,
        name: "Badges"
      },
      {
        path: "/documentation/breadcrumbs",
        component: Breadcrumbs,
        name: "Breadcrumbs"
      },
      {
        path: "/documentation/buttons",
        component: Buttons,
        name: "Buttons"
      },
      {
        path: "/documentation/cards",
        component: Cards,
        name: "Cards"
      },
      {
        path: "/documentation/dropdowns",
        component: Dropdowns,
        name: "Dropdowns"
      },
      {
        path: "/documentation/forms",
        component: Forms,
        name: "Forms"
      },
      {
        path: "/documentation/modal",
        component: Modals,
        name: "Modals"
      },
      {
        path: "/documentation/navbars",
        component: Navbars,
        name: "Navbars"
      },
      {
        path: "/documentation/navs",
        component: Navs,
        name: "Navs"
      },
      {
        path: "/documentation/tables",
        component: Tables,
        name: "Tables"
      },
      {
        path: "/documentation/typography",
        component: Typography,
        name: "Typography"
      }
    ]
  },
  {
    name: "Plugins",
    path: "/documentation/charts",
    routes: [
      { path: "/documentation/charts", component: Charts, name: "Charts" },
      {
        path: "/documentation/icons",
        component: Icons,
        name: "Nucleo Icons"
      },
      {
        path: "/documentation/perfect-scrollbar",
        component: PerfectScrollbar,
        name: "PerfectScrollbar"
      }
    ]
  },
  { redirect: true, path: "/documentation", pathTo: "/documentation/overview" }
];

export default docsRoutes;
