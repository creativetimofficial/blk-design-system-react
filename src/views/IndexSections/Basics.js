/*!

=========================================================
* BLK Design System React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import classnames from "classnames";
// plugin that creates slider
import Slider from "nouislider";

// reactstrap components
import {
  Button,
  Label,
  FormGroup,
  CustomInput,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

export default function Basics() {
  const [inputFocus, setInputFocus] = React.useState(false);
  const slider1 = React.useRef(null);
  const slider2 = React.useRef(null);
  React.useEffect(() => {
    Slider.create(slider1.current, {
      start: [40],
      connect: [true, false],
      step: 1,
      range: { min: 0, max: 100 },
    });
    Slider.create(slider2.current, {
      start: [20, 60],
      connect: [false, true, false],
      step: 1,
      range: { min: 0, max: 100 },
    });
  },[]);
  return (
    <div className="section section-basic" id="basic-elements">
      <img
        alt="..."
        className="path"
        src={require("assets/img/path1.png").default}
      />
      <Container>
        <h2 className="title">Basic Elements</h2>
        <h3>Buttons</h3>
        <p className="category">Pick your style</p>
        <Row>
          <Col md="10">
            <Button color="primary" type="button">
              Default
            </Button>
            <Button className="btn-round" color="primary" type="button">
              Round
            </Button>
            <Button className="btn-round" color="primary" type="button">
              <i className="tim-icons icon-heart-2" />
              With Icon
            </Button>
            <Button
              className="btn-icon btn-round"
              color="primary"
              type="button"
            >
              <i className="tim-icons icon-heart-2" />
            </Button>
            <Button
              className="btn-simple btn-round"
              color="primary"
              type="button"
            >
              Simple
            </Button>
          </Col>
        </Row>
        <p className="category">Pick your size</p>
        <Row>
          <Col md="10">
            <Button color="primary" size="sm">
              Small
            </Button>
            <Button color="primary">Regular</Button>
            <Button color="primary" size="lg">
              Large
            </Button>
          </Col>
        </Row>
        <p className="category">Pick your color</p>
        <Row>
          <Col md="12">
            <Button color="default">Default</Button>
            <Button color="primary">Primary</Button>
            <Button color="info">Info</Button>
            <Button color="success">Success</Button>
            <Button color="warning">Warning</Button>
            <Button color="danger">Danger</Button>
            <Button className="btn-neutral" color="default">
              Neutral
            </Button>
          </Col>
        </Row>
        <br />
        <h3>Links</h3>
        <Row>
          <Col md="8">
            <Button color="link">Default</Button>
            <Button className="btn-link" color="primary">
              Primary
            </Button>
            <Button className="btn-link" color="info">
              Info
            </Button>
            <Button className="btn-link" color="success">
              Success
            </Button>
            <Button className="btn-link" color="warning">
              Warning
            </Button>
            <Button className="btn-link" color="danger">
              Danger
            </Button>
          </Col>
        </Row>
        <div className="space-70" />
        <div id="inputs">
          <h3>Inputs</h3>
          <p className="category">Form Controls</p>
          <Row>
            <Col lg="3" sm="6">
              <FormGroup>
                <Input defaultValue="" placeholder="Regular" type="text" />
              </FormGroup>
            </Col>
            <Col lg="3" sm="6">
              <FormGroup className="has-success">
                <Input
                  className="form-control-success"
                  defaultValue="Success"
                  type="text"
                />
              </FormGroup>
            </Col>
            <Col lg="3" sm="6">
              <FormGroup className="has-danger">
                <Input
                  className="form-control-danger"
                  defaultValue="Error Input"
                  type="email"
                />
              </FormGroup>
            </Col>
            <Col lg="3" sm="6">
              <InputGroup
                className={classnames({
                  "input-group-focus": inputFocus,
                })}
              >
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="fa fa-user" />
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  placeholder="Left Font Awesome Icon"
                  type="text"
                  onFocus={(e) => setInputFocus(true)}
                  onBlur={(e) => setInputFocus(false)}
                />
              </InputGroup>
            </Col>
            <Col lg="3" sm="6">
              <InputGroup>
                <Input placeholder="Right Nucleo Icon" type="text" />
                <InputGroupAddon addonType="append">
                  <InputGroupText>
                    <i className="tim-icons icon-lock-circle" />
                  </InputGroupText>
                </InputGroupAddon>
              </InputGroup>
            </Col>
          </Row>
        </div>
        <div className="space-70" />
        <Row id="checkRadios">
          <Col lg="3" sm="6">
            <p className="category">Checkboxes</p>
            <FormGroup check>
              <Label check>
                <Input type="checkbox" />
                <span className="form-check-sign" />
                Unchecked
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input defaultChecked type="checkbox" />
                <span className="form-check-sign" />
                Checked
              </Label>
            </FormGroup>
            <FormGroup check disabled>
              <Label check>
                <Input disabled type="checkbox" />
                <span className="form-check-sign" />
                Disabled Unchecked
              </Label>
            </FormGroup>
            <FormGroup check disabled>
              <Label check>
                <Input defaultChecked disabled type="checkbox" />
                <span className="form-check-sign" />
                Disabled Checked
              </Label>
            </FormGroup>
          </Col>
          <Col lg="3" sm="6">
            <p className="category">Radios</p>
            <FormGroup check className="form-check-radio">
              <Label check>
                <Input
                  defaultValue="option1"
                  id="exampleRadios1"
                  name="exampleRadios"
                  type="radio"
                />
                <span className="form-check-sign" />
                Radio is off
              </Label>
            </FormGroup>
            <FormGroup check className="form-check-radio">
              <Label check>
                <Input
                  defaultChecked
                  defaultValue="option2"
                  id="exampleRadios1"
                  name="exampleRadios"
                  type="radio"
                />
                <span className="form-check-sign" />
                Radio is on
              </Label>
            </FormGroup>
            <FormGroup check className="form-check-radio" disabled>
              <Label check>
                <Input
                  defaultValue="option3"
                  disabled
                  id="exampleRadios2"
                  name="exampleRadios1"
                  type="radio"
                />
                <span className="form-check-sign" />
                Disabled radio is off
              </Label>
            </FormGroup>
            <FormGroup check className="form-check-radio" disabled>
              <Label check>
                <Input
                  defaultChecked
                  defaultValue="option4"
                  disabled
                  id="exampleRadios2"
                  name="exampleRadios1"
                  type="radio"
                />
                <span className="form-check-sign" />
                Disabled radio is on
              </Label>
            </FormGroup>
          </Col>
          <Col lg="3" sm="6">
            <p className="category">Toggle Buttons</p>
            <CustomInput type="switch" id="switch-1" />
            <br />
            <CustomInput type="switch" id="switch-2" label="With label" />
          </Col>
          <Col lg="3" sm="6">
            <p className="category">Sliders</p>
            <div className="slider" ref={slider1} />
            <br />
            <div className="slider slider-info mb-3" ref={slider2} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
