import React from "react";

class Colors extends React.Component {
  render() {
    return (
      <>
        <h1 className="bd-title">Colors</h1>
        <p className="bd-lead">
          You can change the default colors via variables from SCSS
        </p>
        <ol>
          <li>Download the project’s zip</li>
          <li>Make sure you have node.js (https://nodejs.org/en/) installed</li>
          <li>
            Type <code className="highlighter-rouge">npm install</code> in
            terminal/console in the source folder where{" "}
            <code className="highlighter-rouge">package.json</code> is located
          </li>
          <li>
            You can find the colors in{" "}
            <code className="highlighter-rouge">
              src/assets/scss/black-dashboard-react/_variables.scss
            </code>
            .
          </li>
          <li>
            Run in terminal{" "}
            <code className="highlighter-rouge">npm run compile-sass</code> to
            compile all the <code className="highlighter-rouge">scss</code>{" "}
            files.
          </li>
        </ol>
      </>
    );
  }
}

export default Colors;
