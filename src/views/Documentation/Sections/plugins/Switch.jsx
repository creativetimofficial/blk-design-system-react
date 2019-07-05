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
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/styles/prism";
import Switch from "react-bootstrap-switch";
import { Col, CardSubtitle } from "reactstrap";

const codeSwitchExample = `<Col xs={12} md={4}>
    <CardSubtitle>Default</CardSubtitle>
    <Switch onColor="default" offColor="default" />{" "}
    <Switch
      defaultValue={false}
      onColor="default"
      offColor="default"
    />
</Col>
<Col xs={12} md={4}>
    <CardSubtitle>Plain</CardSubtitle>
    <Switch
      offColor="primary"
      offText=""
      onColor="primary"
      onText=""
    />{" "}
    <Switch
      defaultValue={false}
      offColor="primary"
      offText=""
      onColor="primary"
      onText=""
    />
</Col>
<Col xs={12} md={4}>
    <CardSubtitle>With Icons</CardSubtitle>
    <Switch
      offColor="success"
      offText={<i className="nc-icon nc-simple-remove" />}
      onColor="success"
      onText={<i className="nc-icon nc-check-2" />}
    />{" "}
    <Switch
      defaultValue={false}
      offColor="success"
      offText={<i className="nc-icon nc-simple-remove" />}
      onColor="success"
      onText={<i className="nc-icon nc-check-2" />}
    />
</Col>`;

class Switches extends React.Component {
  render() {
    return (
      <div>
        <h1 className="bd-title" id="content">
          React Bootstrap Switch v15.5.3
        </h1>
        <p className="bd-lead">
          For this component, we've used{" "}
          <a
            href="https://github.com/Julusian/react-bootstrap-switch"
            target="_blank"
            rel="noopener noreferrer"
          >
            react-bootstrap-switch
          </a>
          .
        </p>
        <p>To use it, you'll need the following import:</p>
        <SyntaxHighlighter
          language="jsx"
          style={prism}
        >{`import Switch from 'react-bootstrap-switch';`}</SyntaxHighlighter>
        <h2 id="content">Example</h2>
        <div className="bd-example">
          <Col xs={12} md={4}>
            <CardSubtitle>Default</CardSubtitle>
            <Switch onColor="default" offColor="default" />{" "}
            <Switch defaultValue={false} onColor="default" offColor="default" />
          </Col>
          <Col xs={12} md={4}>
            <CardSubtitle>Plain</CardSubtitle>
            <Switch
              offColor="primary"
              offText=""
              onColor="primary"
              onText=""
            />{" "}
            <Switch
              defaultValue={false}
              offColor="primary"
              offText=""
              onColor="primary"
              onText=""
            />
          </Col>
          <Col xs={12} md={4}>
            <CardSubtitle>With Icons</CardSubtitle>
            <Switch
              offColor="success"
              offText={<i className="nc-icon nc-simple-remove" />}
              onColor="success"
              onText={<i className="nc-icon nc-check-2" />}
            />{" "}
            <Switch
              defaultValue={false}
              offColor="success"
              offText={<i className="nc-icon nc-simple-remove" />}
              onColor="success"
              onText={<i className="nc-icon nc-check-2" />}
            />
          </Col>
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeSwitchExample}
        </SyntaxHighlighter>
        <p>
          For props please refer to{" "}
          <a
            href="https://github.com/Julusian/react-bootstrap-switch"
            target="_blank"
            rel="noopener noreferrer"
          >
            official react-bootstrap-switch documentation
          </a>
          .
        </p>
      </div>
    );
  }
}

export default Switches;
