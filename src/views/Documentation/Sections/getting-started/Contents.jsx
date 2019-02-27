import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/styles/prism";
// reactstrap components
import { Table } from "reactstrap";

const fileStructure = `black-dashboard-react
.
├── package.json
├── CHANGELOG.md
├── ISSUE_TEMPLATE.md
├── LICENSE.md
├── README.md
├── Documentation
│   └── documentation.html
├── github-assets
│   └── react.svg
├── public
│   ├── index.html
│   └── manifest.json
└── src
    ├── index.js
    ├── logo-white.svg
    ├── logo.svg
    ├── routes.js
    ├── assets
    │   ├── css
    │   ├── demo
    │   ├── fonts
    │   ├── img
    │   └── scss
    │       ├── black-dashboard-react
    │       │   ├── bootstrap
    │       │   │   ├── mixins
    │       │   │   └── utilities
    │       │   ├── custom
    │       │   │   ├── cards
    │       │   │   ├── mixins
    │       │   │   ├── utilities
    │       │   │   └── vendor
    │       └── black-dashboard-react.scss
    ├── components
    │   ├── FixedPlugin
    │   │   └── FixedPlugin.jsx
    │   ├── Footer
    │   │   └── Footer.jsx
    │   ├── Navbars
    │   │   ├── AdminNavbar.jsx
    │   │   └── RTLNavbar.jsx
    │   └── Sidebar
    │       └── Sidebar.jsx
    ├── layouts
    │   ├── Admin
    │   │   └── Admin.jsx
    │   └── RTL
    │       └── RTL.jsx
    ├── variables
    │   └── charts.jsx
    └── views
        ├── Dashboard.jsx
        ├── Icons.jsx
        ├── Map.jsx
        ├── Notifications.jsx
        ├── Rtl.jsx
        ├── TableList.jsx
        ├── Typography.jsx
        └── UserProfile.jsx`;

class Contents extends React.Component {
  render() {
    return (
      <>
        <h1 className=" bd-title" id="content">
          Contents
        </h1>
        <p className=" bd-lead">
          Discover what's included in BLK Design System React
        </p>
        <h2 id="precompiled-bootstrap">BLK Design System React</h2>
        <p>
          Once downloaded, unzip the compressed folder and you’ll see something
          like this:
        </p>
        {/* NOTE: This info is intentionally duplicated in the README. Copy any changes made here over to the README too. */}
        <SyntaxHighlighter language="bash" style={prism}>
          {fileStructure}
        </SyntaxHighlighter>
      </>
    );
  }
}

export default Contents;
