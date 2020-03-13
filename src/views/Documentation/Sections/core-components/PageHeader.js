/*!

=========================================================
* BLK Design System React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { Link } from "react-router-dom";

class PageHeader extends React.Component {
  render() {
    return (
      <>
        <h1 className="bd-title" id="content">
          PageHeader
        </h1>
        <p>
          Can be found inside{" "}
          <code className="highlighter-rouge">
            src/components/PageHeader/PageHeader.js
          </code>
          .
        </p>
        <p>
          This is the demo upper part of the{" "}
          <code className="highlighter-rouge">src/views/Index.js</code>.
        </p>
        <p>
          It has the product title, a small description and some background
          squares with a nice animation.
        </p>
        <p>
          You can see it <Link to="/">here</Link>.
        </p>
      </>
    );
  }
}

export default PageHeader;
