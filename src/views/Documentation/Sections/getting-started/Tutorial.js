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
/*eslint-disable*/
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/styles/prism";
import { applescript } from "react-syntax-highlighter/dist/styles/hljs";
import { Alert } from "reactstrap";

class Tutorial extends React.Component {
  render() {
    return (
      <>
        <h1 className="bd-title" id="content">
          Tutorial
        </h1>
        <br />
        <br />
        <h2>Local Development</h2>
        <ul>
          <li>
            Install NodeJs from{" "}
            <a
              href="https://nodejs.org/en/"
              target="_blank"
              rel="noopener noreferrer"
            >
              NodeJs Official Page
            </a>
          </li>
          <li>
            Go to{" "}
            <a href="https://www.creative-tim.com/" target="_blank">
              creative tim website
            </a>{" "}
            and login into your account
          </li>
          <li>
            Go to the{" "}
            <a
              href="https://www.creative-tim.com/product/black-dashboard-react"
              target="_blank"
            >
              product page
            </a>{" "}
            (be sure to be logged into your account)
          </li>
          <li>
            Press the download button near <b>Black Dashboard React</b> product
            (this will download onto your computer a zip file)
          </li>
          <li>Unzip the downloaded file to a folder in your computer</li>
          <li>Open Terminal</li>
          <li>Go to your file project (where you've unzipped the product)</li>
          <li>
            Run in terminal{" "}
            <SyntaxHighlighter
              language="jsx"
              style={prism}
            >{`npm install`}</SyntaxHighlighter>
          </li>
          <li>
            Then run{" "}
            <SyntaxHighlighter
              language="jsx"
              style={prism}
            >{`npm start`}</SyntaxHighlighter>
          </li>
          <li>
            Or you can simply run{" "}
            <SyntaxHighlighter
              language="jsx"
              style={prism}
            >{`npm run install:clean`}</SyntaxHighlighter>{" "}
            which will install{" "}
            <code className="highlighter-rouge">node_modules</code> and also
            will start your project.
          </li>
          <li>
            If you have an error something containing
            <SyntaxHighlighter
              language="jsx"
              style={prism}
            >{`Module not found`}</SyntaxHighlighter>
            you need to do the following
            <SyntaxHighlighter
              language="jsx"
              style={prism}
            >{`npm install --g cross-env`}</SyntaxHighlighter>
            then change the script, for example the start script from
            <SyntaxHighlighter
              language="jsx"
              style={prism}
            >{`"start": "react-scripts start",`}</SyntaxHighlighter>
            to
            <SyntaxHighlighter
              language="jsx"
              style={prism}
            >{`"start": "NODE_PATH=./src react-scripts start",`}</SyntaxHighlighter>
            <b>
              The same should be done with any other script that has the above
              error.
            </b>
          </li>
          <li>
            If you have an error containing{" "}
            <SyntaxHighlighter
              language="jsx"
              style={prism}
            >{`props.history of undefined`}</SyntaxHighlighter>{" "}
            (this can happen when you integrate our project with another one)
            then you need to make the changes found{" "}
            <a
              href="https://github.com/creativetimofficial/ct-material-dashboard-pro-react/issues/70"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              here
            </a>
          </li>
          <li>
            (Optional) You can create a new react application like this
            <ul>
              <li>
                Run in terminal{" "}
                <SyntaxHighlighter
                  language="jsx"
                  style={prism}
                >{`npm install -g create-react-app`}</SyntaxHighlighter>
              </li>
              <li>Go to the folder where you want to create your app</li>
              <li>
                Run in terminal{" "}
                <SyntaxHighlighter
                  language="jsx"
                  style={prism}
                >{`create-react-app your-app-name`}</SyntaxHighlighter>
              </li>
              <li>
                Navigate to{" "}
                <code className="highlighter-rouge">your-app-name</code>
              </li>
              <li>
                Run in terminal{" "}
                <SyntaxHighlighter
                  language="jsx"
                  style={prism}
                >{`npm start`}</SyntaxHighlighter>
              </li>
              <li>
                And after this, you can copy and paste anything that you want
                from our product (the most important is the{" "}
                <code className="highlighter-rouge">src/assets</code> which has
                all of our style, fonts and images).
              </li>
              <li>
                More information →{" "}
                <a
                  href="https://github.com/facebookincubator/create-react-app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  create-react-app
                </a>
              </li>
            </ul>
          </li>
          <li>
            Navigate to{" "}
            <a
              href="https://localhost:3000"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://localhost:3000
            </a>
          </li>
          <li>
            More information →{" "}
            <a
              href="https://reactjs.org/docs/installation.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              react
            </a>
          </li>
        </ul>
        <br />
        <br />
        <h2>Live Production</h2>
        <ul>
          <li>
            <a
              href="https://blog.heroku.com/deploying-react-with-zero-configuration"
              target="_blank"
              rel="noopener noreferrer"
            >
              tutorial for deploying on heroku
            </a>
          </li>
          <li>
            <a
              href="https://medium.freecodecamp.org/surge-vs-github-pages-deploying-a-create-react-app-project-c0ecbf317089"
              target="_blank"
              rel="noopener noreferrer"
            >
              tutorial for deploying on github pages and surge
            </a>
          </li>
          <li>
            <a
              href="https://medium.com/@omgwtfmarc/deploying-create-react-app-to-s3-or-cloudfront-48dae4ce0af"
              target="_blank"
              rel="noopener noreferrer"
            >
              tutorial for deploying on S3 and CloudFront
            </a>
          </li>
        </ul>
        <Alert color="info">
          You may need to change our homepage prop inside the package.json file.
          If you do not change that, you could have issues while trying to
          deploy your app, and that is because the homepage prop points to our
          live preview of this product.
        </Alert>
        <Alert color="info">
          If you want to run the build command, and open the server locally, you
          will need to delete the homepage prop altogether.
        </Alert>
        <p>Please read more about the homepage prop here:</p>
        <ul>
          <li>
            <a
              href="https://create-react-app.dev/docs/deployment/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://create-react-app.dev/docs/deployment/
            </a>
          </li>
          <li>
            <a
              href="https://create-react-app.dev/docs/deployment/#step-1-add-homepage-to-packagejson"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://create-react-app.dev/docs/deployment/#step-1-add-homepage-to-packagejson
            </a>
          </li>
        </ul>
        <br />
        <br />
        <h2>CSS</h2>
        <p>
          To get our look, if you've started a new app, you will need to import
          our styles inside your app like so:
        </p>
        <SyntaxHighlighter language="javascript" style={prism}>
          {`import "assets/scss/blk-design-system-react.scss";
        import "assets/css/nucleo-icons.css";`}
        </SyntaxHighlighter>
        <p>Or you can import our compiled scss</p>
        <SyntaxHighlighter language="javascript" style={prism}>
          {`import "assets/css/blk-design-system-react.css";
        // import "assets/css/blk-design-system-react.min.css";
        // import "assets/css/blk-design-system-react.css.map";
        import "assets/css/nucleo-icons.css";`}
        </SyntaxHighlighter>
        <br />
        <br />
        <h2>Fonts and Icons</h2>
        <p>
          If you've started a new project and are copying our product there, be
          sure to add the following lines of code inside your{" "}
          <code className="highlighter-rouge">.html</code> file:
        </p>
        <SyntaxHighlighter
          language="html"
          style={applescript}
        >{`<!--     Fonts and icons     -->
    <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700,200" rel="stylesheet" />
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css" />`}</SyntaxHighlighter>
      </>
    );
  }
}

export default Tutorial;
