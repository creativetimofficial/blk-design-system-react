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
import Datetime from "react-datetime";
import {
  CardBody,
  CardTitle,
  Card,
  CardHeader,
  FormGroup,
  Row,
  Col,
} from "reactstrap";

const codeExample = `<Row>
    <Col xs={12} md={4}>
        <Card>
            <CardHeader><CardTitle>Datetime Picker</CardTitle></CardHeader>
            <CardBody>
                <FormGroup>
                    <Datetime
                        inputProps={{placeholder:"Datetime Picker Here"}}
                    />
                </FormGroup>
            </CardBody>
        </Card>
    </Col>
    <Col xs={12} md={4}>
        <Card>
            <CardHeader><CardTitle>Date Picker</CardTitle></CardHeader>
            <CardBody>
                <FormGroup>
                    <Datetime
                        timeFormat={false}
                        inputProps={{placeholder:"Datetime Picker Here"}}
                    />
                </FormGroup>
            </CardBody>
        </Card>
    </Col>
    <Col xs={12} md={4}>
        <Card>
            <CardHeader><CardTitle>Time Picker</CardTitle></CardHeader>
            <CardBody>
                <FormGroup>
                    <Datetime
                        dateFormat={false}
                        inputProps={{placeholder:"Datetime Picker Here"}}
                    />
                </FormGroup>
            </CardBody>
        </Card>
    </Col>
</Row>`;

class DateTimePicker extends React.Component {
  render() {
    return (
      <div>
        <h1 className="bd-title" id="content">
          React Datetime v3.0.4
        </h1>
        <p className="bd-lead">
          We've used{" "}
          <a
            href="https://github.com/YouCanBookMe/react-datetime"
            target="_blank"
            rel="noopener noreferrer"
          >
            react-datetime
          </a>{" "}
          for this component and we've restyled it to match our theme.
        </p>
        <h2 id="content">Example</h2>
        <div className="bd-example">
          <Row>
            <Col xs={12} md={4}>
              <Card>
                <CardHeader>
                  <CardTitle>Datetime Picker</CardTitle>
                </CardHeader>
                <CardBody>
                  <FormGroup>
                    <Datetime
                      inputProps={{ placeholder: "Datetime Picker Here" }}
                    />
                  </FormGroup>
                </CardBody>
              </Card>
            </Col>
            <Col xs={12} md={4}>
              <Card>
                <CardHeader>
                  <CardTitle>Date Picker</CardTitle>
                </CardHeader>
                <CardBody>
                  <FormGroup>
                    <Datetime
                      timeFormat={false}
                      inputProps={{ placeholder: "Datetime Picker Here" }}
                    />
                  </FormGroup>
                </CardBody>
              </Card>
            </Col>
            <Col xs={12} md={4}>
              <Card>
                <CardHeader>
                  <CardTitle>Time Picker</CardTitle>
                </CardHeader>
                <CardBody>
                  <FormGroup>
                    <Datetime
                      dateFormat={false}
                      inputProps={{ placeholder: "Datetime Picker Here" }}
                    />
                  </FormGroup>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
        <SyntaxHighlighter
          language="jsx"
          style={prism}
        >{`import Datetime from 'react-datetime';`}</SyntaxHighlighter>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeExample}
        </SyntaxHighlighter>
        <h2 id="content">Props</h2>
        <p>
          For props, please refer to{" "}
          <a
            href="https://github.com/YouCanBookMe/react-datetime"
            target="_blank"
            rel="noopener noreferrer"
          >
            react-datetime's documentation
          </a>
          .
        </p>
      </div>
    );
  }
}

export default DateTimePicker;
