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
import { Container, Row, Col } from "reactstrap";

export default function Typography() {
  return (
    <div className="section section-typo">
      <Container>
        <div id="typography">
          <Row>
            <Col md="12">
              <h1>
                <span><strong>Noah Pragin</strong></span>
              </h1>
              <h3>
                <span>Computer Science @ Oregon State</span>
              </h3>
              <h4>
                I build full-stack, customer facing applications with AWS integration
              </h4>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}
