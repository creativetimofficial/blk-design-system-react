import React from "react";

class BuildTools extends React.Component {
  render() {
    return (
      <>
        <h1 className=" bd-title" id="content">
          Build tools
        </h1>
        <p className=" bd-lead">
          Learn how to use Bootstrap's included npm scripts to build our
          documentation, compile source code, run tests, and more.
        </p>
        <h3 id="change-brand-colors">Change brand colors</h3>
        <ul>
          <li>
            You will find all the branding colors inside{" "}
            <code className=" highlighter-rouge">
              assets/scss/blk-design-system/custom/_variables.scss
            </code>
            . You can change them with a{" "}
            <code className=" highlighter-rouge">HEX</code>
            value or with other predefined variables.
          </li>
        </ul>
        <h3 id="compile-scss">Compile SCSS</h3>
        <ol>
          <li>Download the project’s zip.</li>
          <li>
            Make sure you have node.js (https://nodejs.org/en/) installed.
          </li>
          <li>
            Type <code className=" highlighter-rouge">npm install</code>
            in terminal/console in the source folder where{" "}
            <code className=" highlighter-rouge">package.json</code>
            is located.
          </li>
          <li>
            Run in terminal{" "}
            <code className=" highlighter-rouge">gulp open-app</code>
            for opening the Dashboard Page (default) of the product. You can set
            in gulpfile.js from your downloaded archive any page you want to
            open in browser, at line 30:{" "}
            <code className=" highlighter-rouge">gulp.src('index.html')</code>.
          </li>
          <li>
            Run in terminal{" "}
            <code className=" highlighter-rouge">gulp compile-scss</code>
            for a single compilation or{" "}
            <code className=" highlighter-rouge">gulp watch</code>
            for continous compilation of the changes that you make in{" "}
            <code className=" highlighter-rouge">*.scss</code>
            files. This command should be run in the same folder where{" "}
            <code className=" highlighter-rouge">gulpfile.js</code>
            and <code className=" highlighter-rouge">package.json</code>
            are located.
          </li>
        </ol>
      </>
    );
  }
}

export default BuildTools;
