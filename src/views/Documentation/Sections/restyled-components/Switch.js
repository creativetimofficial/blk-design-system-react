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
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/styles/prism";
import { Col, CardSubtitle, Alert, CustomInput } from "reactstrap";

const codeSwitchExample = `import React from "react";

// reactstrap components
import {
  CustomInput,
  Container,
  Row,
  Col,
} from "reactstrap";

export default function Basics() {
  return (
    <Container>
      <Row id="checkRadios">
        <Col lg="3" sm="6">
          <CustomInput type="switch" id="switch-1" />
          <br />
          <CustomInput type="switch" id="switch-2" label="With label" />
        </Col>
      </Row>
    </Container>
  );
}
`;

class Switches extends React.Component {
  render() {
    return (
      <div>
        <h1 className="bd-title" id="content">
          Reactstrap CustomInput for Switch
        </h1>
        <h2 id="content">Example</h2>
        <div className="bd-example">
          <Col lg="3" sm="6">
            <CustomInput type="switch" id="switch-1" />
            <br />
            <CustomInput type="switch" id="switch-2" label="With label" />
          </Col>
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeSwitchExample}
        </SyntaxHighlighter>
        <p>
          For props please refer to{" "}
          <a
            href="https://reactstrap.github.io/components/form/?ref=creativetim"
            target="_blank"
            rel="noopener noreferrer"
          >
            official reactstrap documentation
          </a>
          .
        </p>
      </div>
    );
  }
}

export default Switches;
