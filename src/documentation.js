// Getting started
// import Colors from "views/Documentation/Sections/Colors.jsx";
import Overview from "views/Documentation/Sections/getting-started/Overview.jsx";
import Download from "views/Documentation/Sections/getting-started/Download.jsx";
import License from "views/Documentation/Sections/getting-started/License.jsx";
import Contents from "views/Documentation/Sections/getting-started/Contents.jsx";
import BuildTools from "views/Documentation/Sections/getting-started/BuildTools.jsx";
import Tutorial from "views/Documentation/Sections/getting-started/Tutorial.jsx";
import Variables from "views/Documentation/Sections/getting-started/Variables.jsx";
// Foundation
import Colors from "views/Documentation/Sections/foundation/Colors.jsx";
import Grid from "views/Documentation/Sections/foundation/Grid.jsx";
import Typography from "views/Documentation/Sections/foundation/Typography.jsx";
import Icons from "views/Documentation/Sections/foundation/Icons.jsx";
// Core components
import Footer from "views/Documentation/Sections/core-components/Footer.jsx";
import Navbars from "views/Documentation/Sections/core-components/Navbars.jsx";
import PageHeader from "views/Documentation/Sections/core-components/PageHeader.jsx";
// Reasctrap components
import Alerts from "views/Documentation/Sections/restyled-components/Alerts.jsx";
import Badge from "views/Documentation/Sections/restyled-components/Badge.jsx";
import Breadcrumb from "views/Documentation/Sections/restyled-components/Breadcrumb.jsx";
import Buttons from "views/Documentation/Sections/restyled-components/Buttons.jsx";
import Carousel from "views/Documentation/Sections/restyled-components/Carousel.jsx";
// import Dropdowns from "views/Documentation/Sections/restyled-components/Dropdowns.jsx";
// import Forms from "views/Documentation/Sections/restyled-components/Forms.jsx";
// import Modals from "views/Documentation/Sections/restyled-components/Modals.jsx";
// import Navs from "views/Documentation/Sections/restyled-components/Navs.jsx";
// import Navbars from "views/Documentation/Sections/restyled-components/Navbars.jsx";
// import Tables from "views/Documentation/Sections/restyled-components/Tables.jsx";
// Plugins
// import Charts from "views/Documentation/Sections/Charts.jsx";
// import Icons from "views/Documentation/Sections/Icons.jsx";
// import PerfectScrollbar from "views/Documentation/Sections/PerfectScrollbar.jsx";

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
    name: "Foundation",
    path: "/documentation/colors",
    routes: [
      {
        path: "/documentation/colors",
        component: Colors,
        name: "Colors"
      },
      {
        path: "/documentation/grid",
        component: Grid,
        name: "Grid"
      },
      {
        path: "/documentation/typography",
        component: Typography,
        name: "Typography"
      },
      {
        path: "/documentation/icons",
        component: Icons,
        name: "Icons"
      },
    ]
  },
  {
    name: "Core Components",
    path: "/documentation/custom-upload",
    routes: [
      {
        path: "/documentation/footer",
        component: Footer,
        name: "Footer"
      },
      {
        path: "/documentation/navbars",
        component: Navbars,
        name: "App Navbars"
      },
      {
        path: "/documentation/page-header",
        component: PageHeader,
        name: "PageHeader"
      }
    ]
  },
  {
    name: "Restyled Components",
    path: "/documentation/alert",
    routes: [
      {
        path: "/documentation/alert",
        component: Alerts,
        name: "Alerts"
      },
      {
        path: "/documentation/badge",
        component: Badge,
        name: "Badge"
      },
      {
        path: "/documentation/breadcrumbs",
        component: Breadcrumb,
        name: "Breadcrumb"
      },
      {
        path: "/documentation/buttons",
        component: Buttons,
        name: "Buttons"
      },
      {
        path: "/documentation/carousel",
        component: Carousel,
        name: "Carousel"
      },
      // {
      //   path: "/documentation/dropdowns",
      //   component: Dropdowns,
      //   name: "Dropdowns"
      // },
      // {
      //   path: "/documentation/forms",
      //   component: Forms,
      //   name: "Forms"
      // },
      // {
      //   path: "/documentation/modal",
      //   component: Modals,
      //   name: "Modals"
      // },
      // {
      //   path: "/documentation/navbars",
      //   component: Navbars,
      //   name: "Navbars"
      // },
      // {
      //   path: "/documentation/navs",
      //   component: Navs,
      //   name: "Navs"
      // },
      // {
      //   path: "/documentation/tables",
      //   component: Tables,
      //   name: "Tables"
      // },
      // {
      //   path: "/documentation/typography",
      //   component: Typography,
      //   name: "Typography"
      // }
    ]
  },
  {
    name: "Plugins",
    path: "/documentation/charts",
    routes: [
      // { path: "/documentation/charts", component: Charts, name: "Charts" },
      // {
      //   path: "/documentation/icons",
      //   component: Icons,
      //   name: "Nucleo Icons"
      // },
      // {
      //   path: "/documentation/perfect-scrollbar",
      //   component: PerfectScrollbar,
      //   name: "PerfectScrollbar"
      // }
    ]
  },
  { redirect: true, path: "/documentation", pathTo: "/documentation/overview" }
];

export default docsRoutes;
