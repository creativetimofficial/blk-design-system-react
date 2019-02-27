import React from "react";
import { Link } from "react-router-dom";
// import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import style from "react-syntax-highlighter/dist/styles/prism";

const codeAdminNavbar = `... other code

import AdminNavbar from "components/Navbars/AdminNavbar.jsx";

... other code

class YourClass extends React.Component {
  ... other code
  handleMiniClick = () => {
    ... other code
  };
  render() {
    ... other code
    return (
      ... other code
      <AdminNavbar
        {...this.props}
        handleMiniClick={this.handleMiniClick}
        brandText={this.getActiveRoute(routes)}
        sidebarOpened={this.state.sidebarOpened}
        toggleSidebar={this.toggleSidebar}
      />
      ... other code
    );
  }
}

export default YourClass;
`;

const codeRTLNavbar = `... other code

import RTLNavbar from "components/Navbars/RTLNavbar.jsx";

... other code

class YourClass extends React.Component {
  ... other code
  handleMiniClick = () => {
    ... other code
  };
  render() {
    ... other code
    return (
      ... other code
      <RTLNavbar
        {...this.props}
        handleMiniClick={this.handleMiniClick}
        brandText={this.getActiveRoute(routes)}
        sidebarOpened={this.state.sidebarOpened}
        toggleSidebar={this.toggleSidebar}
      />
      ... other code
    );
  }
}

export default YourClass;
`;

const codeAuthNavbar = `... other code

import AuthNavbar from "components/Navbars/AuthNavbar.jsx";

... other code

class YourClass extends React.Component {
  ... other code
  render() {
    ... other code
    return (
      ... other code
      <AuthNavbar brandText={this.getActiveRoute(routes) + " Page"} />
      ... other code
    );
  }
}

export default YourClass;`;

class Navbar extends React.Component {
  render() {
    return (
      <>
        <h1 className="bd-title" id="content">
          Demo navbars
        </h1>
        <p>
          In our template product, we have two demo navbars that can be found
          inside{" "}
          <code className="highlighter-rouge">
            src/components/Navbars/IndexNavbar.jsx
          </code> and{" "}
          <code className="highlighter-rouge">
            src/components/Navbars/ExamplesNavbar.jsx
          </code>.
        </p>
        <h2 id="content">
          <code className="highlighter-rouge">
            src/components/Navbars/IndexNavbar.jsx
          </code>
        </h2>
        <p>
          It is used to create the navbar / header that appears on the{" "}
          <code className="highlighter-rouge">src/views/Index.jsx</code>.
        </p>
        <p>
          It is diveded in two parts, the left one, that is used for the product name, and the right part with some social links and some links for navigating through the product.
        </p>
        <h2 id="content">
          <code className="highlighter-rouge">
            src/components/Navbars/ExamplesNavbar.jsx
          </code>
        </h2>
        <p>
          It is used to create the navbar / header that appears on all the pages found inside{" "}
          <code className="highlighter-rouge">src/views/examples/*</code>.
        </p>
        <p>
          It is diveded in two parts, the left one, that is used for the product name, and the right part with some social links and some links for navigating through the product.
        </p>
      </>
    );
  }
}

export default Navbar;
