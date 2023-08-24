/*!

=========================================================
* BLK Design System React - v1.2.2
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";
import backgroundImg from '../../assets/img/clean-home.jpg'
import './PageHeader.css';

export default function PageHeader() {
  return (
    <div className=" new">
      {/* <div className="squares square1" />
      <div className="squares square2" />
      <div className="squares square3" />
      <div className="squares square4" />
      <div className="squares square5" />
      <div className="squares square6" />
      <div className="squares square7" /> */}
      <Container className="see2">
        <div className="content-center brand pageHead">
          <img className="favimg" src={`${backgroundImg}`} alt="" />
          <h2 className="h2-seo">Best Cleaning Services in Houston</h2>
          {/* <h3 className="d-none d-sm-block">
            A beautiful Design System for Bootstrap 4 (reactstrap) and React.
            It's Free and Open Source.
          </h3> */}
        </div>
      </Container>
    </div>
  );
}
