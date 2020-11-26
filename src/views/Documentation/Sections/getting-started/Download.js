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

class Download extends React.Component {
  render() {
    return (
      <>
        <h1 className="bd-title" id="content">
          Download
        </h1>
        <p className="bd-lead">
          Download BLK• React to get the compiled CSS and JavaScript, source
          code, or include it with your favorite package managers.
        </p>
        <h2 id="download">Download</h2>
        <ul>
          <li>
            <a href="https://github.com/creativetimofficial/blk-design-system-react">
              Download from Github
            </a>
          </li>
          <li>
            <a href="https://www.creative-tim.com/product/blk-design-system-react">
              Download from Creative Tim
            </a>
          </li>
        </ul>
      </>
    );
  }
}

export default Download;
