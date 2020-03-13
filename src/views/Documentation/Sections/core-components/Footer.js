/*!

=========================================================
* BLK Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <>
        <h1 className="bd-title" id="content">
          Footer
        </h1>
        <p>
          Can be found inside{" "}
          <code className="highlighter-rouge">
            src/components/Footer/Footer.js
          </code>
          .
        </p>
        <p>This is the demo bottom navigation.</p>
        <p>
          It is devided in four parts. The first part is the product name, the
          second and third ones are used for inner and outter links, while the
          last one, is used for socials.
        </p>
        <p>It was designed to be as simple as it may.</p>
        <p>
          This component is servers as demo and everything in this component is
          static, so you will need to manually change things if you want to use
          it. Feel free to change this component as you wish.
        </p>
      </>
    );
  }
}

export default Footer;
