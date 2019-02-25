import React from "react";
// react plugin used to create datetimepicker
import ReactDatetime from "react-datetime";

// reactstrap components
import {
  Button,
  FormGroup,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
  UncontrolledPopover,
  PopoverBody,
  PopoverHeader,
  Modal,
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Label
} from "reactstrap";

class JavaScript extends React.Component {
  render() {
    return (
      <div className="section section-javascript" id="javascriptComponents">
        <img alt="..." className="path" src={require("assets/img/path5.png")} />
        <img
          alt="..."
          className="path path1"
          src={require("assets/img/path5.png")}
        />
        <Container>
          <h3 className="title mb-5">Javascript components</h3>
          <h4 className="mb-5">Modal</h4>
          <Row id="modals">
            <Col md="4">
              <Button
                color="primary"
                data-target="#myModal"
                data-toggle="modal"
              >
                Launch Modal
              </Button>
            </Col>
            <Col md="4">
              <Button
                color="warning"
                data-target="#myModal1"
                data-toggle="modal"
              >
                Launch Modal Mini
              </Button>
            </Col>
            <Col md="4">
              <Button
                color="success"
                data-target="#myModal2"
                data-toggle="modal"
              >
                Launch Modal Form
              </Button>
            </Col>
            {/* Sart Modal */}
            <Modal>
              <div className="modal-header justify-content-center">
                <button
                  aria-hidden={true}
                  className="close"
                  data-dismiss="modal"
                  type="button"
                >
                  <i className="tim-icons icon-simple-remove" />
                </button>
                <h4 className="title title-up">Modal title</h4>
              </div>
              <div className="modal-body">
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                  Separated they live in Bookmarksgrove right at the coast of
                  the Semantics, a large language ocean. A small river named
                  Duden flows by their place and supplies it with the necessary
                  regelialia. It is a paradisematic country, in which roasted
                  parts of sentences fly into your mouth.
                </p>
              </div>
              <div className="modal-footer">
                <Button color="default" type="button">
                  Nice Button
                </Button>
                <Button color="danger" data-dismiss="modal" type="button">
                  Close
                </Button>
              </div>
            </Modal>
            {/* End Modal */}
            {/* Mini Modal */}
            <Modal modalclassName="modal-mini modal-primary modal-mini">
              <div className="modal-header justify-content-center">
                <button
                  aria-hidden={true}
                  className="close"
                  data-dismiss="modal"
                  type="button"
                >
                  <i className="tim-icons icon-simple-remove text-white" />
                </button>
                <div className="modal-profile">
                  <i className="tim-icons icon-single-02" />
                </div>
              </div>
              <div className="modal-body">
                <p>Always have an access to your profile</p>
              </div>
              <div className="modal-footer">
                <Button className="btn-neutral" color="link" type="button">
                  Back
                </Button>
                <Button
                  className="btn-neutral"
                  color="link"
                  data-dismiss="modal"
                  type="button"
                >
                  Close
                </Button>
              </div>
            </Modal>
            {/* Form Modal */}
            <Modal modalclassName="modal-black">
              <div className="modal-header justify-content-center">
                <button
                  aria-hidden={true}
                  className="close"
                  data-dismiss="modal"
                  type="button"
                >
                  <i className="tim-icons icon-simple-remove text-white" />
                </button>
                <div className="text-muted text-center ml-auto mr-auto">
                  <h3 className="mb-0">Sign in with</h3>
                </div>
              </div>
              <div className="modal-body">
                <div className="btn-wrapper text-center">
                  <Button
                    className="btn-neutral btn-icon"
                    color="default"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <img alt="..." src={require("assets/img/github.svg")} />
                  </Button>
                  <Button
                    className="btn-neutral btn-icon"
                    color="default"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <img alt="..." src={require("assets/img/google.svg")} />
                  </Button>
                </div>
                <div className="text-center text-muted mb-4 mt-3">
                  <small>Or sign in with credentials</small>
                </div>
                <Form role="form">
                  <FormGroup className="mb-3">
                    <InputGroup className="input-group-alternative">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="tim-icons icon-email-85" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input placeholder="Email" type="email" />
                    </InputGroup>
                  </FormGroup>
                  <FormGroup>
                    <InputGroup className="input-group-alternative">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="tim-icons icon-key-25" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input placeholder="Password" type="password" />
                    </InputGroup>
                  </FormGroup>
                  <FormGroup check className="mt-3">
                    <Label check>
                      <Input defaultChecked type="checkbox" />
                      <span className="form-check-sign" />
                      Remember me!
                    </Label>
                  </FormGroup>
                  <div className="text-center">
                    <Button className="my-4" color="primary" type="button">
                      Sign in
                    </Button>
                  </div>
                </Form>
              </div>
            </Modal>
            {/* End Modal */}
          </Row>
          <br />
          <br />
          <h4 className="mb-5 mt-3">Datepicker</h4>
          <Row>
            <Col md="4">
              <div className="datepicker-container">
                <FormGroup>
                  <ReactDatetime
                    inputProps={{
                      className: "form-control",
                      placeholder: "Date Picker Here"
                    }}
                    timeFormat={false}
                  />
                </FormGroup>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md="6">
              <h4 className="mb-5 mt-3">Popovers</h4>
              <Button
                color="default"
                data-container="body"
                data-content="Here will be some very useful information about his popover."
                data-placement="top"
                id="tooltip657685043"
                size="sm"
                type="button"
              >
                On top
              </Button>
              <UncontrolledPopover placement="top" target="tooltip657685043">
                <PopoverHeader>Popover on Top</PopoverHeader>
                <PopoverBody>
                  Here will be some very useful information about his popover.
                </PopoverBody>
              </UncontrolledPopover>
              <Button
                color="default"
                data-container="body"
                data-content="Here will be some very useful information about his popover.<br>
 Here will be some very useful information about his popover."
                data-placement="right"
                id="tooltip72798464"
                size="sm"
                type="button"
              >
                On right
              </Button>
              <UncontrolledPopover placement="right" target="tooltip72798464">
                <PopoverHeader>Popover on Right</PopoverHeader>
                <PopoverBody>
                  Here will be some very useful information about his popover.
                  <br /> Here will be some very useful information about his
                  popover.
                </PopoverBody>
              </UncontrolledPopover>
              <Button
                color="default"
                data-container="body"
                data-content="Here will be some very useful information about his popover."
                data-placement="bottom"
                id="tooltip995717467"
                size="sm"
                type="button"
              >
                On bottom
              </Button>
              <UncontrolledPopover placement="bottom" target="tooltip995717467">
                <PopoverHeader>Popover on Bottom</PopoverHeader>
                <PopoverBody>
                  Here will be some very useful information about his popover.
                </PopoverBody>
              </UncontrolledPopover>
              <Button
                color="default"
                data-color="primary"
                data-container="body"
                data-content="Here will be some very useful information about his popover."
                data-placement="left"
                id="tooltip31162359"
                size="sm"
                type="button"
              >
                On left
              </Button>
              <UncontrolledPopover placement="left" target="tooltip31162359">
                <PopoverHeader>Popover On Left</PopoverHeader>
                <PopoverBody>
                  Here will be some very useful information about his popover.
                </PopoverBody>
              </UncontrolledPopover>
            </Col>
            <Col md="6">
              <h4 className="mb-5 mt-3">Tooltips</h4>
              <Button
                className="btn-tooltip"
                color="default"
                data-animation={true}
                data-container="body"
                data-delay="100"
                data-placement="left"
                id="tooltip376048342"
                size="sm"
                title="Tooltip on left"
                type="button"
              >
                On left
              </Button>
              <UncontrolledTooltip
                delay={0}
                placement="left"
                target="tooltip376048342"
              />
              <Button
                className="btn-tooltip"
                color="default"
                data-animation={true}
                data-container="body"
                data-placement="top"
                id="tooltip297889956"
                size="sm"
                title="Tooltip on top"
                type="button"
              >
                On top
              </Button>
              <UncontrolledTooltip
                delay={0}
                placement="top"
                target="tooltip297889956"
              />
              <Button
                className="btn-tooltip"
                color="default"
                data-animation={true}
                data-container="body"
                data-placement="bottom"
                id="tooltip789511871"
                size="sm"
                title="Tooltip on bottom"
                type="button"
              >
                On bottom
              </Button>
              <UncontrolledTooltip
                delay={0}
                placement="bottom"
                target="tooltip789511871"
              />
              <Button
                className="btn-tooltip"
                color="default"
                data-animation={true}
                data-container="body"
                data-placement="right"
                id="tooltip353488548"
                size="sm"
                title="Tooltip on right"
                type="button"
              >
                On right
              </Button>
              <UncontrolledTooltip
                delay={0}
                placement="right"
                target="tooltip353488548"
              />
              <div className="clearfix" />
              <br />
              <br />
            </Col>
          </Row>
        </Container>
        <div className="section">
          <Container>
            <div className="title">
              <h3>Carousel</h3>
            </div>
            <Row className="justify-content-between align-items-center">
              <Col className="mb-5 mb-lg-0" lg="5">
                <h1 className="text-white font-weight-light">
                  Bootstrap carousel
                </h1>
                <p className="text-white mt-4">
                  Black Design comes with three pre-built pages to help you get
                  started faster. You can change the text and images and you're
                  good to go.
                </p>
                <Button
                  className="mt-4"
                  color="warning"
                  href="./docs/1.0/components/alerts.html"
                >
                  See all components
                </Button>
              </Col>
              <Col lg="6">
                <div className="carousel slide" id="carouselExampleControls">
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img
                        alt="..."
                        className="d-block w-100"
                        src={require("assets/img/denys.jpg")}
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        alt="..."
                        className="d-block w-100"
                        src={require("assets/img/fabien-bazanegue.jpg")}
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        alt="..."
                        className="d-block w-100"
                        src={require("assets/img/mark-finn.jpg")}
                      />
                    </div>
                  </div>
                  <a
                    className="carousel-control-prev"
                    data-slide="prev"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                    role="button"
                  >
                    <i className="tim-icons icon-minimal-left" />
                    <span className="sr-only">Previous</span>
                  </a>
                  <a
                    className="carousel-control-next"
                    data-slide="next"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                    role="button"
                  >
                    <i className="tim-icons icon-minimal-right" />
                    <span className="sr-only">Next</span>
                  </a>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default JavaScript;
