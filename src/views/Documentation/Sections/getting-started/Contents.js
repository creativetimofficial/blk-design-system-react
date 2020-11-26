/*!

=========================================================
* BLK Design System React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/styles/prism";

const fileStructure = `Blk• Design System React
.
├── CHANGELOG.md
├── ISSUE_TEMPLATE.md
├── README.md
├── package.json
├── Documentation
│   └── documentation.html
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
└── src
    ├── index.js
    ├── variables
    │   └── charts.js
    ├── assets
    │   ├── css
    │   │   ├── blk-design-system-react.css
    │   │   ├── blk-design-system-react.css.map
    │   │   ├── blk-design-system-react.min.css
    │   │   └── nucleo-icons.css
    │   ├── demo
    │   │   └── demo.css
    │   ├── fonts
    │   │   ├── nucleo.eot
    │   │   ├── nucleo.ttf
    │   │   ├── nucleo.woff
    │   │   └── nucleo.woff2
    │   ├── img
    │   └── scss
    │       ├── blk-design-system-react
    │       │   ├── bootstrap
    │       │   │   ├── mixins
    │       │   │   └── utilities
    │       │   ├── custom
    │       │   │   ├── cards
    │       │   │   ├── mixins
    │       │   │   ├── sections
    │       │   │   ├── utilities
    │       │   │   └── vendor
    │       │   └── react
    │       │       └── react-differences.scss
    │       └── blk-design-system-react.scss
    ├── components
    │   ├── Footer
    │   │   └── Footer.js
    │   ├── Navbars
    │   │   ├── ComponentsNavbar.js
    │   │   └── ExamplesNavbar.js
    │   └── PageHeader
    │       └── PageHeader.js
    └── views
        ├── Index.js
        ├── IndexSections
        │   ├── Basics.js
        │   ├── Download.js
        │   ├── Examples.js
        │   ├── JavaScript.js
        │   ├── Navbars.js
        │   ├── Notifications.js
        │   ├── NucleoIcons.js
        │   ├── Pagination.js
        │   ├── Signup.js
        │   ├── Tabs.js
        │   └── Typography.js
        └── examples
            ├── LandingPage.js
            ├── ProfilePage.js
            └── RegisterPage.js`;

class Contents extends React.Component {
  render() {
    return (
      <>
        <h1 className="bd-title" id="content">
          Contents
        </h1>
        <p className="bd-lead">
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
