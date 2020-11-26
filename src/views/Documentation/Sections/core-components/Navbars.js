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
            src/components/Navbars/IndexNavbar.js
          </code>{" "}
          and{" "}
          <code className="highlighter-rouge">
            src/components/Navbars/ExamplesNavbar.js
          </code>
          .
        </p>
        <h2 id="content">
          <code className="highlighter-rouge">
            src/components/Navbars/IndexNavbar.js
          </code>
        </h2>
        <p>
          It is used to create the navbar / header that appears on the{" "}
          <code className="highlighter-rouge">src/views/Index.js</code>.
        </p>
        <p>
          It is diveded in two parts, the left one, that is used for the product
          name, and the right part with some social links and some links for
          navigating through the product.
        </p>
        <h2 id="content">
          <code className="highlighter-rouge">
            src/components/Navbars/ExamplesNavbar.js
          </code>
        </h2>
        <p>
          It is used to create the navbar / header that appears on all the pages
          found inside{" "}
          <code className="highlighter-rouge">src/views/examples/*</code>.
        </p>
        <p>
          It is diveded in two parts, the left one, that is used for the product
          name, and the right part with some social links and some links for
          navigating through the product.
        </p>
      </>
    );
  }
}

export default Navbar;
